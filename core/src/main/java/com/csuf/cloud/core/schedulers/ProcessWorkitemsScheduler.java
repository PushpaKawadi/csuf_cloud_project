package com.csuf.cloud.core.schedulers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.vo.EmailServiceVO;

/**
 * This Scheduled Service processes all active workitems on processing instance
 * and insert them in task_details table if they do not exist already due to
 * failure of publishing of workflow events at the time of workitem creation.
 */
@Component(immediate = true, configurationPid = "csuf.scheduler.processing.instance.ProcessWorkitemsScheduler", property = {
		Constants.SERVICE_DESCRIPTION + "=Fallback Active Workitems Processor Scheduler Service" })
@Designate(ocd = ProcessWorkitemsScheduler.Configuration.class)
public class ProcessWorkitemsScheduler implements Runnable {

	protected static Logger log = LoggerFactory.getLogger(ProcessWorkitemsScheduler.class);
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
	private EmailService emailService;

	private static final String ASSIGN_TASK_STEP = "forms:assigntask";
	private static final String NOTIFICATION_EMAIL_DEFAULT_FROM_ADDRESS = "csuf@fullerton.edu";
	private static final String NOTIFICATION_EMAIL_DEFAULT_TO_ADDRESS = "yjayaram@fullerton.edu";
	private static final String NOTIFICATION_EMAIL_DEFAULT_SUBJECT = "FATAL ERROR: AEM Forms Critical Issue | New Tasks not visible in Custom Inbox";
	private static final String NOTIFICATION_EMAIL_DEFAULT_IMAGE_PATH = "/content/dam/csu/CSUF_Mailer_logo.gif";
	private static final String NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH = "/etc/notification/email/csuf/error_templates/workflow_listener_stopped.html";

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
		log.debug("Removing Process Active Workitems on Processing Instance Scheduler Job '{}'", schedulerID);
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
					"Process Active Workitems on Processing Instance Scheduler added succesfully with cron expression : "
							.concat(config.schedulerExpression()));
			this.config = config;
		} else {
			log.debug(
					"Process Active Workitems on Processing Instance Scheduler is disabled, no scheduler job will be created");
		}
	}

	/**
	 * Runs the implementation at the scheduled interval
	 *
	 * @return void
	 */
	@Override
	public void run() {
		log.info("Pushpa starting Process Active Workitems on Processing Instance Scheduler Service...");
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Session session = null;
		int count = 0;
		List<String> processedWorkItems = new ArrayList<String>();
		try {
			if (processingInstanceConfigService.isProcessingInstance()) {
				resolver = globalConfigService.getResourceResolver();
				session = resolver.adaptTo(Session.class);
				wfSession = resolver.adaptTo(WorkflowSession.class);
				WorkItem[] activeWorkItems = wfSession.getActiveWorkItems();
				for (WorkItem item : activeWorkItems) {
					if (null != item && StringUtils.isNotBlank(item.getItemSubType())
							&& item.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
							&& !item.getId().startsWith("VolatileWorkItem")) {
						// log.debug("Current workItem Id : {} ", item.getId());
						boolean isTaskExist = taskService.isTaskExist(item.getId());
						// log.debug("isTaskExist : {}", isTaskExist);
						if (!isTaskExist) {
							log.info("Task Does not exist, inserting it in task_details table with workitem id {}", item.getId());
							String workitemNodeId = taskService.saveTask(item, resolver, session);
							log.info("workitem_node_id returned from task_details table for saveTask operation : {}",
									workitemNodeId);
							count += 1;
							processedWorkItems.add(item.getId());
							//Uncomment the line - once its Data.xml save fixed
						}
					}
				}
			}
			if (count > 0 && config.isNotifytoAdminViaEmail()) {
				//sendEmailNotification(config, count, processedWorkItems.toString());
			}
		} catch (Exception e) {
			log.error("Error while running Process Active Workitems on Processing Instance Scheduler Service", e);
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
		log.debug("completed execution of \"Process Active Workitems on Processing Instance Scheduler Service\"...");
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
		templateVaribles.put("processingInstanceUrl", processingInstanceConfigService.processingUrl());
		templateVaribles.put("processedWorkItemsCount", String.valueOf(processedWorkItemsCount));
		templateVaribles.put("processedWorkItemsList", processedWorkItemsList);
		emailVO.setTemplateVaribles(templateVaribles);

		// If an image needs to be embedded with email body
		emailVO.setEmbeddedImage(true);
		emailVO.setEmbeddedImagePath(config.notifyEmailEmbeddedImagePath());
		emailVO.setEmbeddedImageDescription("CSUF Logo");

		List<String> emailFailureList = emailService.sendEmail(emailVO);

		if (null != emailFailureList && !emailFailureList.isEmpty()) {
			log.debug("Notification Email sending failed to the recipients: ".concat(emailFailureList.toString()));
		} else if (null != emailFailureList && emailFailureList.isEmpty()) {
			log.debug("Notification Email sent successfully to ".concat(emailVO.getToAddress().toString()));
		} else {
			log.debug("Notification Email sending failed");
		}
		return emailFailureList;
	}

	@ObjectClassDefinition(name = "Fallback Active Workitems Processor Scheduler Configuration")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression. Default: run every 10 minutes", type = AttributeType.STRING)
		String schedulerExpression() default "0 0/10 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "Process Active Workitems on Processing Instance Scheduler Configuration";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default true;

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