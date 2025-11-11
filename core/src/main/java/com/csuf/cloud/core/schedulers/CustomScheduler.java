package com.csuf.cloud.core.schedulers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.config.CustomSchedulerConfig;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.InboxReportService_Old;
import com.csuf.cloud.core.services.UserService;
import com.csuf.cloud.core.services.WorkflowConfigService;
import com.csuf.cloud.core.services.WorkflowService;
import com.csuf.cloud.core.vo.EmailServiceVO;
import com.csuf.cloud.core.vo.WorkflowVO;

/**
 * CSUF Custom Scheduler
 * 
 * @author 105876
 *
 */
@Component(immediate = true, service = CustomScheduler.class, property = {
		Constants.SERVICE_DESCRIPTION + "=Custom CSUF Scheduler to schedule and run the recurring tasks" })
@Designate(ocd = CustomSchedulerConfig.class)
public class CustomScheduler implements Runnable {

	@Reference
	private Scheduler scheduler;

	@Reference
	private WorkflowService workflowService;

	@Reference
	private InboxReportService_Old inboxReportService;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private WorkflowConfigService workflowConfig;

	@Reference
	private UserService userService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	private static final transient String DEFAULT_IMAGE_PATH = "/content/dam/csu/CSUF_Mailer_logo.gif";
	private static final transient String DEFAULT_TEMPLATE_PATH = "/etc/notification/email/csuf/sample-email-template.html";

	private int schedulerID;

	private Map<String, String> wItemAssigneeMap = new HashMap<>();

	@Activate
	protected void activate(CustomSchedulerConfig config) {
		schedulerID = config.schedulerName().hashCode();
		addScheduler(config);
	}

	@Modified
	protected void modified(CustomSchedulerConfig config) {
		removeScheduler();
		schedulerID = config.schedulerName().hashCode(); // update schedulerID
		addScheduler(config);
	}

	@Deactivate
	protected void deactivate(CustomSchedulerConfig config) {
		removeScheduler();
	}

	/**
	 * Remove a scheduler based on the scheduler ID
	 */
	private void removeScheduler() {
		logger.debug("Removing Scheduler Job '{}'", schedulerID);
		scheduler.unschedule(String.valueOf(schedulerID));
	}

	/**
	 * Add a scheduler based on the scheduler ID
	 */
	private void addScheduler(CustomSchedulerConfig config) {
		if (config.serviceEnabled()) {

			ScheduleOptions sopts = scheduler.EXPR(config.schedulerExpression());
			sopts.name(String.valueOf(schedulerID));
			sopts.canRunConcurrently(config.schedulerConcurrent());
			scheduler.schedule(this, sopts);
			logger.debug("Scheduler added succesfully with cron expression : ".concat(config.schedulerExpression()));

		} else {
			logger.debug("CustomScheduler is Disabled, no scheduler job created");
		}
	}

	@Override
	public void run() {
		logger.debug("Inside CustomScheduler run Method");

		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Session session = null;

		try {
			resolver = globalConfigService.getResourceResolver();
			session = globalConfigService.getAdminSession();
			wfSession = resolver.adaptTo(WorkflowSession.class);

			List<String> reminderTaskTitles = workflowConfig.getReminderTaskTitles();
			List<String> delegateeTaskTitles = workflowConfig.getDelegateeTaskTitles();
			List<String> autoAdvanceTaskTitles = workflowConfig.getAutoAdvanceTaskTitles();
			String[] states = { "RUNNING" };

			Workflow[] workflows = wfSession.getWorkflows(states);
			for (Workflow workflowInstance : workflows) {

				List<WorkItem> workitems = workflowInstance.getWorkItems();

				for (WorkItem wItem : workitems) {
					String delegatee = null;
					if (null == wItem.getTimeEnded() && !workflowConfig.getToBeScannedWorkflowModels().isEmpty()
							&& workflowConfig.getToBeScannedWorkflowModels()
									.contains(wItem.getWorkflow().getWorkflowModel().getTitle())) {
						for (Map.Entry<String, Object> entry : wItem.getWorkflowData().getMetaDataMap().entrySet()) {
							if (entry.getKey().equalsIgnoreCase("delegatee")) {
								delegatee = entry.getValue().toString();
								break;
							}
						}
						// logger.debug("delegatee found from workflow metadata : ".concat(delegatee));
						// Fetch autoadvance interval from metadata
						String timeline = null;
						int noOfDays = 0;
						for (Map.Entry<String, Object> items : wItem.getWorkflowData().getMetaDataMap().entrySet()) {
							if (items.getKey().equalsIgnoreCase("timeline")) {
								timeline = items.getValue().toString();
								logger.debug("Auto Advance : timeline from metadata=" + timeline);
								break;
							}
						}

						WorkflowVO workflowVO = new WorkflowVO();
						workflowVO.setWorkflowInstanceId(wItem.getWorkflow().getId());
						workflowVO.setWorkItem(wItem);
						workflowVO.setWorkflowModelName(wItem.getWorkflow().getWorkflowModel().getTitle());
						workflowVO.setGraniteWorkflowSession(wfSession);
						workflowVO.setAdminSession(session != null ? session : globalConfigService.getAdminSession());
						// logger.debug("delegatee {}", delegatee);
						// logger.debug("workflow model : {}",
						// wItem.getWorkflow().getWorkflowModel().getTitle().trim());
						// fetch chairUsedId as delegatee for Student Course Withdrawal Workflow Model
						if (null == delegatee && wItem.getWorkflow().getWorkflowModel().getTitle().trim()
								.equalsIgnoreCase("Student Course Withdrawal")) {
							// logger.debug("scw model");
							JsonObject scwJson = inboxReportService.getSCWReport(resolver, wfSession, wItem, 1);
							if (null != scwJson && !scwJson.isJsonNull() && scwJson.isJsonObject()
									&& scwJson.has("chairUserId")) {
								// logger.debug("scwJson : {}", scwJson.toString(), delegatee);
								delegatee = scwJson.get("chairUserId").getAsString();
								logger.debug("cahirUserId is set as delegatee as calculated from scw XML : {}",
										delegatee);
							}
						}
						if (StringUtils.isNotBlank(delegatee))
							workflowVO.setDelegateAssignee(delegatee);
						workflowVO.setRoutes(workflowConfig.getAutoAdvanceRoutes());
						workflowVO.setTaskDeadlineMetadataField(workflowConfig.getAutoAdvanceMetadataField());

						if (!wItemAssigneeMap.containsKey(wItem.getId()))
							wItemAssigneeMap.put(wItem.getId(), wItem.getCurrentAssignee());

						if (wItem.getCurrentAssignee().equalsIgnoreCase(wItemAssigneeMap.get(wItem.getId()))) {

							Date workItemStartTime = wItem.getProgressBeginTime();

							Calendar reminderCal = Calendar.getInstance();
							reminderCal.setTime(workItemStartTime);

							Calendar autoAdvanceCal = Calendar.getInstance();
							autoAdvanceCal.setTime(workItemStartTime);

							Calendar reAssignCal = Calendar.getInstance();
							reAssignCal.setTime(workItemStartTime);

							reminderCal.add(Calendar.SECOND, (int) (workflowConfig.reminderInterval()));
							Date reminderTime = reminderCal.getTime();

							/*
							 * autoAdvanceCal.add(Calendar.SECOND, (int)
							 * (workflowConfig.taskAutoAdvanceInterval())); Date autoAdvanceTime =
							 * autoAdvanceCal.getTime();
							 */

							reAssignCal.add(Calendar.SECOND, (int) (workflowConfig.assignTaskToDelegateeInterval()));
							Date reassignTime = reAssignCal.getTime();

							Date currentTime = Calendar.getInstance().getTime();
							Calendar currentDate = Calendar.getInstance();
							currentDate.setTime(currentTime);
							String cba = null;

							// code-fix for Prod Release , null pointer exception avoided for timeline
							// variable as this would be not null only for MPP Workflow
							if (StringUtils.isNotBlank(timeline)) {
								cba = timeline.substring(timeline.length() - 1);
								timeline = timeline.replaceAll("([A-Z])", "");
								noOfDays = Integer.parseInt(timeline);
							}

							int workingDays = 0;
							if (cba != null && cba.equals("W")) {
								while (!autoAdvanceCal.after(currentDate)) {
									int day = autoAdvanceCal.get(Calendar.DAY_OF_WEEK);
									if ((day != Calendar.SATURDAY) && (day != Calendar.SUNDAY))
										workingDays++;
									autoAdvanceCal.add(Calendar.DATE, 1);
								}
								logger.debug("Auto Advance : difference(W): {}", workingDays); 
							}
							if (cba != null && cba.equals("C")) {
								while (!autoAdvanceCal.after(currentDate)) {
									workingDays++;
									autoAdvanceCal.add(Calendar.DATE, 1);
								}
								logger.debug("Auto Advance : difference(C): {}", workingDays); 
							}

							if (workflowConfig.reminderInterval() > 0 && !reminderTaskTitles.isEmpty()
									&& reminderTaskTitles.contains(wItem.getNode().getTitle())
									&& currentTime.after(reminderTime)) {
								/*
								 * Send Reminder Email Configuration
								 */
								workflowVO = setReminderEmailAttributes(workflowVO, wItem);
								workflowService.sendReminder(workflowVO);
							}

							if (workflowConfig.assignTaskToDelegateeInterval() > 0 && !delegateeTaskTitles.isEmpty()
									&& delegateeTaskTitles.contains(wItem.getNode().getTitle())
									&& StringUtils.isNotBlank(workflowVO.getDelegateAssignee())
									&& currentTime.after(reassignTime))
								logger.info("assignTaskToDelegatee result inside scheduler : "
										.concat(String.valueOf(workflowService.assignTaskToDelegatee(workflowVO))));

							logger.debug("witem id : {}", wItem.getId());							
							if (!autoAdvanceTaskTitles.isEmpty()
									&& autoAdvanceTaskTitles.contains(wItem.getNode().getTitle())
									&& workingDays > noOfDays) {
								logger.debug("workflow model to be advanced result inside scheduler : {}",wItem.getWorkflow().getWorkflowModel().getTitle());
								logger.info("completeDeadlinedTask result inside scheduler : "
										.concat(String.valueOf(workflowService.completeDeadlinedTask(workflowVO))));
							}
						}
					}
				}
			}
		} catch (WorkflowException | LoginException e) {
			logger.error(Arrays.toString(e.getStackTrace()));
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
	}

	private WorkflowVO setReminderEmailAttributes(WorkflowVO workflowVO, WorkItem wItem) {
		Session session = globalConfigService.getAdminSession();
		try {
			EmailServiceVO emailVO = new EmailServiceVO();
			emailVO.setAttachments(null);
			emailVO.setBccAddress(workflowConfig.reminderEmailBccAddresses());
			emailVO.setCcAddress(workflowConfig.reminderEmailCcAddresses());
			String userEmail = userService.getUserEmail(session, wItem.getCurrentAssignee());
			List<String> toEmailAddresses = new ArrayList<>();
			if (StringUtils.isNotBlank(userEmail))
				toEmailAddresses.add(userEmail);

			emailVO.setToAddress(
					!workflowConfig.reminderEmailToAddresses().isEmpty() ? workflowConfig.reminderEmailToAddresses()
							: toEmailAddresses);
			emailVO.setFromAddress(workflowConfig.reminderEmailFromAddress());
			emailVO.setSubject(StringUtils.isNotBlank(workflowConfig.reminderEmailSubject())
					? workflowConfig.reminderEmailSubject()
					: "Test Subject");
			emailVO.setTemplatePath((StringUtils.isNotBlank(workflowConfig.reminderEmailTemplatePath())
					? workflowConfig.reminderEmailTemplatePath()
					: DEFAULT_TEMPLATE_PATH));
			emailVO.setStartTLS(workflowConfig.isStartTLS());
			emailVO.setUseCQGateway(false);
			Map<String, String> templateVaribles = new HashMap<>();
			templateVaribles.put("senderEmail", emailVO.getFromAddress());
			templateVaribles.put("recipientEmail", emailVO.getToAddress().get(0));
			emailVO.setTemplateVaribles(templateVaribles);

			// If an image needs to be embedded with email body
			emailVO.setEmbeddedImage(true);
			emailVO.setEmbeddedImagePath((StringUtils.isNotBlank(workflowConfig.reminderEmailEmbeddedImagePath())
					? workflowConfig.reminderEmailEmbeddedImagePath()
					: DEFAULT_IMAGE_PATH));
			emailVO.setEmbeddedImageDescription("CSUF Logo");

			workflowVO.setEmailVO(emailVO);
		} catch (Exception e) {
			logger.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != session && session.isLive())
				session.logout();
		}
		return workflowVO;
	}
}
