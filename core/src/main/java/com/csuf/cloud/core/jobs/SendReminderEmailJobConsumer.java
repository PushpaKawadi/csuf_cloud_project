package com.csuf.cloud.core.jobs;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.jcr.Session;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.security.user.User;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.event.jobs.Job;
import org.apache.sling.event.jobs.consumer.JobConsumer;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.FallbackUserConfigService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.WorkflowAdministrationConfigService;
import com.csuf.cloud.core.utils.ArgumentParser;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;
import com.csuf.cloud.core.vo.EmailAttachmentVO;
import com.csuf.cloud.core.vo.EmailServiceVO;

@Component(service = JobConsumer.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Send Reminder Email Job Consumer",
		JobConsumer.PROPERTY_TOPICS + "=com/sling/eventing/job/reminder/email/*" })
public class SendReminderEmailJobConsumer implements JobConsumer {

	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private transient EmailService emailService;

	@Reference
	private transient AssetService assetService;

	@Reference
	private InboxItemService inboxService;

	@Reference
	private WorkflowAdministrationConfigService wfConfig;

	@Reference
	private FallbackUserConfigService globalConfigUserService;

	@Override
	public JobResult process(final Job job) {
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Session session = null;
		try {
			log.debug("job having topic = {} is being processed...", job.getTopic());
			String taskTitle = job.getProperty("taskTitle", String.class);
			String workflowModelTitle = job.getProperty("workflowModel", String.class);
			int dayInterval = job.getProperty("dayInterval", Integer.class);
			Boolean intervalFlag = job.getProperty("intervalFlag", Boolean.class);

			resolver = globalConfigService.getResourceResolver();
			session = globalConfigService.getAdminSession();
			wfSession = resolver.adaptTo(WorkflowSession.class);

			String[] states = { "RUNNING" };
			log.debug("workflowModelTitle : {}", workflowModelTitle);
			Workflow[] workflows = wfSession.getWorkflows(states);
			for (Workflow workflowInstance : workflows) {
				log.debug("matched title : {}", workflowInstance.getWorkflowModel().getTitle());
				if (workflowInstance.getWorkflowModel().getTitle().equalsIgnoreCase(workflowModelTitle)) {
					List<WorkItem> workitems = workflowInstance.getWorkItems();
					for (WorkItem wItem : workitems) {
						log.debug("instance id : {}", wItem.getId().toString());
						String assignee = wItem.getCurrentAssignee();
						log.debug("assignee : {}", assignee);
						if (ArgumentParser.getWorkitemTitle(wItem).equalsIgnoreCase(taskTitle)
								&& wfConfig.isAssigneeAGroup(assignee, session) == false) {
							if (null == wItem.getTimeEnded()) {
								LocalDateTime workItemStartTime = CSUFUtils
										.convertToLocalDateTimeViaInstant(wItem.getProgressBeginTime());
								log.debug("workItemStartTime difference: {}"
										+ Duration.between(workItemStartTime, LocalDateTime.now()).toDays());
								if ((intervalFlag == false
										&& LocalDateTime.now().isAfter(workItemStartTime.plusDays(dayInterval)))
										|| (intervalFlag == true
												&& (Duration.between(workItemStartTime, LocalDateTime.now())
														.toDays() > 0)
												&& (Duration.between(workItemStartTime, LocalDateTime.now()).toDays()
														% dayInterval == 0))) {
									EmailServiceVO emailVO = new EmailServiceVO();
									emailVO.setUseCQGateway(false);

									String assigneeEmail = assignee.isEmpty()
											? globalConfigUserService.fallbackUserEmailAddress()
											: assignee.concat("@fullerton.edu");
									log.debug("reminderEmail= {}", assigneeEmail);
									UserManager userManager = resolver.adaptTo(UserManager.class);
									User user = (User) userManager.getAuthorizable(assignee);
									String uname = session.getNode(user.getPath()).getProperty("rep:fullname")
											.getString();
									if ((!(uname.equals(null)) && uname != "")) {
										if (uname.contains(",")) {
											String[] values = uname.split(",");
											uname = (values[1].replaceAll("\\s", "") + " " + values[0]);
										}
									} else {
										uname = assignee;
									}

									String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@"
											+ "(?:[a-zA-Z0-9-]+\\.)+[a-z" + "A-Z]{2,7}$";
									Pattern pattern = Pattern.compile(emailRegex);
									List<String> bccList = new ArrayList<String>();
									for (String bccAdd : ((List<String>) job
											.getProperty("reminderEmailBccAddresses"))) {

										bccList.add(pattern.matcher(bccAdd).find() ? bccAdd
												: (getElementValue(bccAdd, wItem, resolver)));
									}
									emailVO.setBccAddress(bccList);

									List<String> ccList = new ArrayList<String>();
									for (String ccAdd : ((List<String>) job.getProperty("reminderEmailCcAddresses"))) {

										ccList.add(pattern.matcher(ccAdd).find() ? ccAdd
												: (getElementValue(ccAdd, wItem, resolver)));
									}

									emailVO.setCcAddress(ccList);

									List<String> toList = new ArrayList<String>();
									for (String toAdd : ((List<String>) job.getProperty("reminderEmailToAddresses"))) {
										toList.add(pattern.matcher(toAdd).find() ? toAdd
												: (toAdd.equals("TestEmail"))
														? globalConfigUserService.fallbackUserEmailAddress()
														: assigneeEmail);
									}

									Map<String, String> templateVaribles = new HashMap<>();
									for (String temp : ((List<String>) job.getProperty("reminderTemplateVariables"))) {
										String[] arrOfVar = temp.split("~");
										templateVaribles.put(arrOfVar[0],
												(arrOfVar[0].equals("toName") ? uname
														: getElementValue(arrOfVar[1], wItem, resolver) == null
																? arrOfVar[1]
																: (getElementValue(arrOfVar[1], wItem, resolver))));
									}

									emailVO.setTemplateVaribles(templateVaribles);
									emailVO.setToAddress(toList);
									emailVO.setFromAddress(job.getProperty("reminderEmailFromAddress", String.class));
									emailVO.setFromName(job.getProperty("reminderEmailFromName", String.class));
									emailVO.setToName(uname);
									emailVO.setSubject(job.getProperty("reminderEmailSubject", String.class));
									emailVO.setTemplatePath(job.getProperty("reminderEmailTemplatePath", String.class));
									emailVO.setEmbeddedImage(true);
									emailVO.setEmbeddedImagePath(
											job.getProperty("reminderEmailEmbeddedImagePath", String.class));
									emailVO.setEmbeddedImageDescription("CSUF Logo");
									emailVO.setStartTLS(job.getProperty("isStartTLS", Boolean.class));

									sendReminderEmail(emailVO, wItem, resolver, session);
									log.debug("reminder email sent for the task started on : {}", workItemStartTime);
								}
							}
						}
					}
				}
			}
			return JobResult.OK;
		} catch (final Exception e) {
			return JobResult.FAILED;
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (session != null && session.isLive()) {
				session.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
	}

	private void sendReminderEmail(EmailServiceVO emailVO, WorkItem wItem, ResourceResolver resolver, Session session) {
		try {
			/*
			 * JsonArray jsonArray = null; jsonArray =
			 * inboxService.getTaskAttachments(resolver, wItem.getId());
			 * Iterator<JsonElement> iterator = jsonArray.iterator(); while
			 * (iterator.hasNext()) { JsonObject json = iterator.next().getAsJsonObject();
			 * log.debug("file attachment json : {}" + json); addAttachments(emailVO,
			 * session, json); }
			 */

			List<String> emailFailureList = emailService.sendEmail(emailVO);

			if (null != emailFailureList && !emailFailureList.isEmpty()) {
				log.error("Reminder Email sending failed to these recipients: {}", emailFailureList.toString());
			} else if (null != emailFailureList && emailFailureList.isEmpty()) {
				log.info("Reminder Email sent successfully to these recipients: {}", emailVO.getToAddress());
			} else {
				log.error("FATAL : Reminder Email sending failed");
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	/*private void addAttachments(EmailServiceVO emailVO, Session session, JsonObject json) {
		EmailAttachmentVO attachVO = new EmailAttachmentVO();
		try {
			String path = json.get("path").getAsString();
            if (path == null || path.isBlank()) {
                throw new IllegalArgumentException("Invalid attachment path");
            }

            String fileName = json.get("fileName").getAsString();
			Path attachmentSource = Paths.get(path).normalize();
            if (attachmentSource.isAbsolute()) {
                throw new SecurityException("Absolute paths not allowed: " + path);
            }

			String attachmentMimeType = Files.probeContentType(attachmentSource);
			attachVO.setContentType(attachmentMimeType);
			attachVO.setName(fileName);
			attachVO.setPath(path);
			attachVO.setDescription(fileName);
			InputStream is = assetService.getFileStreamFromCRX(session, path);
			byte[] bytes = IOUtils.toByteArray(is);
			attachVO.setBytes(bytes);
			emailVO.addAttachment(attachVO);
		} catch (IOException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}*/

	private String getElementValue(String elem, WorkItem wItem, ResourceResolver resolver) {
		String val = null;
		try {
			String payloadPath = wItem.getWorkflowData().getPayload().toString();

			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, elem);
						if (StringUtils.isNotBlank(cwid)) {
							val = cwid;
						}
					}
				}
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return val;
	}
}
