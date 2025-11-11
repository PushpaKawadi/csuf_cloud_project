package com.csuf.cloud.core.schedulers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.vo.EmailServiceVO;

/**
 * This Scheduled Service processes all task rows from task_details table in
 * database and update their correct status by synchronizing respective WorkItem
 * and workflow status from processing instance.
 */
@Component(immediate = true, configurationPid = "csuf.scheduler.syncDBTaskDetails.Scheduler", property = {
		Constants.SERVICE_DESCRIPTION + "=Sync DB Task Details To Processing Instance Scheduler Service" })
@Designate(ocd = SyncDBTaskDetailsToProcessingInstanceScheduler.Configuration.class)
public class SyncDBTaskDetailsToProcessingInstanceScheduler implements Runnable {

	protected static Logger log = LoggerFactory.getLogger(SyncDBTaskDetailsToProcessingInstanceScheduler.class);
	private int schedulerID;
	private Configuration config;

	@Reference
	private Scheduler scheduler;

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private TaskService taskService;

	@Reference
	private JDBCConnectionHelperService jdbcService;

	@Reference
	private EmailService emailService;

	// private static final String ASSIGN_TASK_STEP = "forms:assigntask";
	private static final String NOTIFICATION_EMAIL_DEFAULT_FROM_ADDRESS = "csuf@fullerton.edu";
	private static final String NOTIFICATION_EMAIL_DEFAULT_TO_ADDRESS = "yjayaram@fullerton.edu";
	private static final String NOTIFICATION_EMAIL_DEFAULT_SUBJECT = "FATAL ERROR: AEM Forms Critical Issue | New Tasks not visible in Custom Inbox";
	private static final String NOTIFICATION_EMAIL_DEFAULT_IMAGE_PATH = "/content/dam/csu/CSUF_Mailer_logo.gif";
	private static final String NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH = "/etc/notification/email/csuf/error_templates/workflow_listener_stopped.html";

	public enum WorkflowState {
		ABORTED, TERMINATED, FAILED, RUNNING, COMPLETED;

		private WorkflowState() {
		}
	}

	public enum WorkitemStatus {
		ACTIVE, COMPLETE;

		private WorkitemStatus() {
		}
	}

	private Set<String> completedWorkflowsSet = new HashSet<>();
	private Set<String> nonCompletedWorkflowsSet = new HashSet<>();
	private Set<String> failedWorkflowsSet = new HashSet<>();
	private Set<String> nonExistingWorkflowsSet = new HashSet<>();
	private Set<String> nonCompletedWorkitemsSet = new HashSet<>();
	private Set<String> completedWorkitemsSet = new HashSet<>();
	private Set<String> mismatchedAssigneeWorkitemsSet = new HashSet<>();

	@Activate
	public void activate(Configuration config) {
		schedulerID = config.schedulerName().hashCode();
		addScheduler(config);
	}

	@Modified
	protected void modified(Configuration config) {
		removeScheduler();
		schedulerID = config.schedulerName().hashCode(); // update schedulerID
		addScheduler(config);
	}

	@Deactivate
	protected void deactivate(Configuration config) {
		removeScheduler();
	}

	/**
	 * Remove a scheduler based on the scheduler ID
	 */
	private void removeScheduler() {
		log.debug("Sync DB Task Details To Processing Instance Scheduler Job '{}'", schedulerID);
		scheduler.unschedule(String.valueOf(schedulerID));
	}

	/**
	 * Add a scheduler based on the scheduler ID
	 */
	private void addScheduler(Configuration config) {
		if (config.isSchedulerEnabled()) {
			ScheduleOptions sopts = scheduler.EXPR(config.schedulerExpression());
			sopts.name(String.valueOf(schedulerID));
			sopts.canRunConcurrently(false);
			scheduler.schedule(this, sopts);
			log.debug(
					"Sync DB Task Details To Processing Instance Scheduler added succesfully with cron expression : {}",
					config.schedulerExpression());
			this.config = config;
		} else {
			log.debug(
					"Sync DB Task Details To Processing Instance Scheduler is disabled, no scheduler job will be created");
		}
	}

	/**
	 * Runs the implementation at the scheduled interval
	 *
	 * @return void
	 */
	@Override
	public void run() {
		log.debug("starting Sync DB Task Details To Processing Instance Scheduler Service...");
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Session session = null;
		int count = 0;
		List<String> processedWorkItems = new ArrayList<>();
		try {
			if (processingInstanceConfigService.isProcessingInstance()) {
				resolver = globalConfigService.getResourceResolver();
				session = resolver.adaptTo(Session.class);
				wfSession = resolver.adaptTo(WorkflowSession.class);
				// WorkItem[] activeWorkItems = wfSession.getActiveWorkItems();
				processAllTasksFromDatabase(session, wfSession);
			}
			if (count > 0 && config.isNotifytoAdminViaEmail()) {
				sendEmailNotification(config, count, processedWorkItems.toString());
			}
		} catch (Exception e) {
			log.error("Error while running Sync DB Task Details To Processing Instance Scheduler Service", e);
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
			if (session != null && session.isLive()) {
				session.logout();
			}
		}
		log.debug("completed execution of \"Sync DB Task Details To Processing Instance Scheduler Service\"...");
	}

	private void processAllTasksFromDatabase(Session session, WorkflowSession wfSession) {
		String getTasksStmt = "select status, workflow_status, assignee, workitem_id, workflow_instance_id from task_details order by start_date desc";
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			if (null != connection) {
				try (PreparedStatement prStmt = connection.prepareStatement(getTasksStmt);) {
					if (null != prStmt) {
						try (ResultSet resultSet = prStmt.executeQuery()) {
							if (null != resultSet) {
								while (resultSet.next()) {
									String workItemStatusFromDB = resultSet.getString("status");
									String workflowStatusFromDB = resultSet.getString("workflow_status");
									String assigneeFromDB = resultSet.getString("assignee");
									String workItemIdFromDB = resultSet.getString("workitem_id");
									String workflowInstanceIdFromDB = resultSet.getString("workflow_instance_id");
									if (StringUtils.isNotBlank(workflowInstanceIdFromDB)
											&& StringUtils.isNotBlank(workItemIdFromDB)) {
										processWorkflowInstance(wfSession, workItemStatusFromDB, assigneeFromDB,
												workflowStatusFromDB, workItemIdFromDB, workflowInstanceIdFromDB);
									}
								}
								log.error("count: {} , nonCompletedWorkflowsSet : {}", nonCompletedWorkflowsSet.size(),
										nonCompletedWorkflowsSet);
								log.error("count: {} , completedWorkflowsSet : {}", completedWorkflowsSet.size(),
										completedWorkflowsSet);
								log.error("count: {} , nonCompletedWorkitemsSet : {}", nonCompletedWorkitemsSet.size(),
										nonCompletedWorkitemsSet);
								log.error("count: {} , completedWorkitemsSet : {}", completedWorkitemsSet.size(),
										completedWorkitemsSet);
								log.error("count: {} , mismatchedAssigneeWorkitemsSet : {}",
										mismatchedAssigneeWorkitemsSet.size(), mismatchedAssigneeWorkitemsSet);

								log.error("count: {} , nonExistingWorkflowsSet : {}", nonExistingWorkflowsSet.size(),
										nonExistingWorkflowsSet);
								log.error("count: {} , failedWorkflowsSet : {}", failedWorkflowsSet.size(),
										failedWorkflowsSet);
							} else {
								log.error("resultSet is null");
							}
						}
					} else {
						log.error("prStmt is null");
					}
				}
			} else {
				log.error("Connection is null");
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	private void processWorkflowInstance(WorkflowSession wfSession, String workItemStatusFromDB, String assigneeFromDB,
			String workflowStatusFromDB, String workItemIdFromDB, String workflowInstanceIdFromDB) {
		try {
			final String WORKFLOW_LOG_FORMAT = "workflowInstanceIdFromDB : %s, workflowStatusFromDB : %s, workflowStateFromCRX : %s}";
			Workflow workflow = wfSession.getWorkflow(workflowInstanceIdFromDB);
			if (null != workflow) {
				String workflowStateFromCRX = workflow.getState();
				if (StringUtils.isNotBlank(workflowStateFromCRX)) {
					if (workflowStateFromCRX.equalsIgnoreCase(WorkflowState.RUNNING.name())
							&& (workItemStatusFromDB.equalsIgnoreCase(WorkflowState.COMPLETED.name())
									|| workItemStatusFromDB.equalsIgnoreCase(WorkflowState.TERMINATED.name()))) {

						String nonCompletedWorkflowDetails = String.format(WORKFLOW_LOG_FORMAT,
								workflowInstanceIdFromDB, workflowStatusFromDB, workflowStateFromCRX);
						nonCompletedWorkflowsSet.add(nonCompletedWorkflowDetails);
						processWorkItem(wfSession, assigneeFromDB, workItemStatusFromDB, workItemIdFromDB);
					} else if ((workflowStateFromCRX.equalsIgnoreCase(WorkflowState.COMPLETED.name())
							|| workflowStateFromCRX.equalsIgnoreCase(WorkflowState.ABORTED.name()))
							&& workItemStatusFromDB.equalsIgnoreCase(WorkflowState.RUNNING.name())) {

						String completedWorkflowDetails = String.format(WORKFLOW_LOG_FORMAT, workflowInstanceIdFromDB,
								workflowStatusFromDB, workflowStateFromCRX);
						completedWorkflowsSet.add(completedWorkflowDetails);
						processWorkItem(wfSession, assigneeFromDB, workItemStatusFromDB, workItemIdFromDB);
					} else if (workflowStateFromCRX.equalsIgnoreCase(WorkflowState.FAILED.name())
							&& !workItemStatusFromDB.equalsIgnoreCase(WorkflowState.FAILED.name())) {

						String failedWorkflowDetails = String.format(WORKFLOW_LOG_FORMAT, workflowInstanceIdFromDB,
								workflowStatusFromDB, workflowStateFromCRX);
						failedWorkflowsSet.add(failedWorkflowDetails);
						processWorkItem(wfSession, assigneeFromDB, workItemStatusFromDB, workItemIdFromDB);
					}
				}
			} else {
				nonExistingWorkflowsSet.add(workflowInstanceIdFromDB);
			}
		} catch (Exception e) {
			nonExistingWorkflowsSet.add(workflowInstanceIdFromDB);
		}
	}

	private void processWorkItem(WorkflowSession wfSession, String assigneeFromDB, String workItemStatusFromDB,
			String workItemIdFromDB) {
		final String WORKITEM_LOG_FORMAT = "workItemIdFromDB : %s, workItemStatusFromDB : %s, workItemStatusFromCRX : %s}";
		final String WORKITEM_ASSIGNEE_LOG_FORMAT = "workItemIdFromDB : %s, assigneeFromCRX : %s, assigneeFromDB : %s}";
		try {
			WorkItem workItem = wfSession.getWorkItem(workItemIdFromDB);
			if (null != workItem) {
				String workItemStatusFromCRX = workItem.getStatus().name();
				if (StringUtils.isNotBlank(workItemStatusFromCRX)
						&& workItemStatusFromCRX.equalsIgnoreCase(WorkitemStatus.ACTIVE.name())
						&& workItemStatusFromDB.equalsIgnoreCase(WorkitemStatus.COMPLETE.name())) {
					String completedWorkitemsDetails = String.format(WORKITEM_LOG_FORMAT, workItemIdFromDB,
							workItemStatusFromDB, workItemStatusFromCRX);
					completedWorkitemsSet.add(completedWorkitemsDetails);
					String assigneeFromCRX = workItem.getCurrentAssignee();
					if (!assigneeFromDB.equalsIgnoreCase(assigneeFromCRX)) {
						String mismatchedAssigneeWorkitemsDetails = String.format(WORKITEM_ASSIGNEE_LOG_FORMAT,
								workItemIdFromDB, assigneeFromCRX, assigneeFromDB);
						mismatchedAssigneeWorkitemsSet.add(mismatchedAssigneeWorkitemsDetails);
					}
				}
			} else {
				if (workItemStatusFromDB.equalsIgnoreCase(WorkitemStatus.ACTIVE.name())) {
					nonCompletedWorkitemsSet.add(workItemIdFromDB);
				}
			}
		} catch (Exception e) {
			if (workItemStatusFromDB.equalsIgnoreCase(WorkitemStatus.ACTIVE.name())) {
				nonCompletedWorkitemsSet.add(workItemIdFromDB);
			}
		}
	}

	private List<String> sendEmailNotification(Configuration config, int processedWorkItemsCount,
			String processedWorkItemsList) {
		EmailServiceVO emailVO = new EmailServiceVO();
		emailVO.setAttachments(null);
		emailVO.setBccAddress(Arrays.asList(config.notifyEmailBccAddresses()));
		emailVO.setCcAddress(Arrays.asList(config.notifyEmailCcAddresses()));

		emailVO.setToAddress(Arrays.asList(config.notifyEmailToAddresses()));
		emailVO.setSubject(config.notifyEmailSubject());
		emailVO.setTemplatePath(config.notifyEmailTemplatePath());
		emailVO.setStartTLS(config.isNotifyEmailStartTLS());
		emailVO.setUseCQGateway(false);

		Map<String, String> templateVaribles = new HashMap<>();
		templateVaribles.put("senderEmail", emailVO.getFromAddress());
		templateVaribles.put("recipientEmail", emailVO.getToAddress().get(0));
		templateVaribles.put("processedWorkItemsCount", String.valueOf(processedWorkItemsCount));
		templateVaribles.put("processedWorkItemsList", processedWorkItemsList);
		emailVO.setTemplateVaribles(templateVaribles);

		// If an image needs to be embedded with email body
		emailVO.setEmbeddedImage(true);
		emailVO.setEmbeddedImagePath(config.notifyEmailEmbeddedImagePath());
		emailVO.setEmbeddedImageDescription("CSUF Logo");

		List<String> emailFailureList = emailService.sendEmail(emailVO);

		if (null != emailFailureList && !emailFailureList.isEmpty()) {
			log.debug("Notification Email sending failed to the recipients: {}", emailFailureList.toString());
		} else if (null != emailFailureList && emailFailureList.isEmpty()) {
			log.debug("Notification Email sent successfully to {}", emailVO.getToAddress().toString());
		} else {
			log.debug("Notification Email sending failed");
		}
		return emailFailureList;
	}

	@ObjectClassDefinition(name = "Sync DB Task Details To Processing Instance Scheduler Configuration")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression. Default: run every 5 minutes", type = AttributeType.STRING)
		String schedulerExpression() default "0 0/5 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "Sync DB Task Details To Processing Instance Scheduler Configuration";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default false;

		@AttributeDefinition(name = "is notify to Administrator via Email?", description = "Send Email to Adminstrator about this error condition", type = AttributeType.BOOLEAN)
		boolean isNotifytoAdminViaEmail() default true;

		@AttributeDefinition(name = "Send Notification Email From Address", description = "From Address for sending notification emails")
		String notifyEmailFromAddress() default NOTIFICATION_EMAIL_DEFAULT_FROM_ADDRESS;

		@AttributeDefinition(name = "Send Notification Email To Addresses", description = "To Addresses for sending notification emails")
		String[] notifyEmailToAddresses() default { NOTIFICATION_EMAIL_DEFAULT_TO_ADDRESS };

		@AttributeDefinition(name = "Send Notification Email Cc Addresses", description = "Cc Addresses for sending notification emails")
		String[] notifyEmailCcAddresses() default {};

		@AttributeDefinition(name = "Send Notification Email Bcc Addresses", description = "Bcc Addresses for sending notification emails")
		String[] notifyEmailBccAddresses() default {};

		@AttributeDefinition(name = "Send Notification Email Subject", description = "Subject for sending notification emails")
		String notifyEmailSubject() default NOTIFICATION_EMAIL_DEFAULT_SUBJECT;

		@AttributeDefinition(name = "Send Notification Email Template Path", description = "Template Path for sending notification emails")
		String notifyEmailTemplatePath() default NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH;

		@AttributeDefinition(name = "Send Notification Email Embedded Image Path", description = "Embedded Image Path for sending notification emails")
		String notifyEmailEmbeddedImagePath() default NOTIFICATION_EMAIL_DEFAULT_IMAGE_PATH;

		@AttributeDefinition(name = "Is Notification Email Start TLS ?", description = "Is Start TLS setting required by the configured SMTP server for sending notification emails ?", type = AttributeType.BOOLEAN)
		boolean isNotifyEmailStartTLS() default false;
	}
}