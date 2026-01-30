package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.day.cq.tagging.JcrTagManagerFactory;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.enums.UserType;
import com.csuf.cloud.core.services.FormAccessConfigService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.InboxReportConfigService;
import com.csuf.cloud.core.utils.ArgumentParser;

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "=Inbox Item Details Servlet",
		"sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/getInboxItemDetails" })
public class InboxItemDetailsServlet extends SlingSafeMethodsServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	private static final String ATTACHMENT_FOLDER_NAME = "Attachments";
	@Reference
	private transient JcrTagManagerFactory jcrTagManagerFactory;

	@Reference
	private transient InboxItemService inboxService;

	@Reference
	private transient InboxReportConfigService reportConfig;

	@Reference
	private transient FormAccessConfigService formConfig;

	@Reference
	private transient GlobalConfigCSUFService globalConfigCSUFService;

	public enum ActionType {
		PREVIOUS_STEP_DATA, STEP_DETAILS, FORMS_CATALOG, TASK_ATTACHMENTS, TASK_ATTACHMENTS_FROM_WORKFLOW_INSTANCE_ID,
		INITIAL_HISTORY_XML, HISTORY_WORKITEM_XML, VIEW_TASK_DETAILS_ALLOWED, IS_MEMBER, VIEW_ATTACHMENTS_ALLOWED,
		UPLOAD_TASK_ATTACHMENTS_ALLOWED, ADOBE_SIGN_DOCUMENT_ATTACHMENT;

		private ActionType() {
		}
	}

	@Override
	protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response)
			throws ServletException, IOException {
		log.debug("entered InboxItemDetailsServlet doGet method");
		JsonObject json = null;
		JsonArray jsonArray = null;
		PrintWriter out = response.getWriter();
		ResourceResolver resourceResolver = request.getResourceResolver();
		Session serviceUserSession = resourceResolver.adaptTo(Session.class);
		WorkflowSession wfSession = resourceResolver.adaptTo(WorkflowSession.class);
		String action = request.getParameter("action");
		String workItemId = request.getParameter("workItemId");
		String historyWorkItemId = request.getParameter("historyWorkItemId");
		String taskAssignee = request.getParameter("assignee");
		String workflowInstanceId = request.getParameter("workflowInstanceId");
		String authorizableId = request.getParameter("authorizableId");
		String groupAsCSV = request.getParameter("groupAsCSV");
		String adobeSignedDocument = request.getParameter("signedDocument");
		WorkItem workItem = null;
		TagManager tagManager = jcrTagManagerFactory.getTagManager(resourceResolver);

		// String tagGroupConfig = COBRA_TAG_ID.concat("~").concat(WELLNESS_GROUP);

		try {
			String historyItemId = (String) request.getAttribute("fd.dashboard.tm.historyitemid");
			if (StringUtils.isNotBlank(workItemId) && action.equalsIgnoreCase(ActionType.PREVIOUS_STEP_DATA.name())) {
				log.debug("entry with workItemId : {} at {}", workItemId, LocalTime.now());
				try {
					workItem = wfSession.getWorkItem(workItemId);
				} catch (WorkflowException e) {
					log.error("workitem having workitemId as {} could not be retrieved!", workItemId);
				}
				json = inboxService.getPreviousStepData(serviceUserSession, workItem);
				out.print(json);
			} else if (StringUtils.isNotBlank(workItemId) && action.equalsIgnoreCase(ActionType.STEP_DETAILS.name())) {
				json = inboxService.getInboxItemStepDetails(resourceResolver, wfSession, workItemId, historyItemId);
				out.print(json);
			} else if (StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.TASK_ATTACHMENTS.name())) {
				jsonArray = inboxService.getTaskAttachments(resourceResolver, workItemId);
				out.print(jsonArray);
			} else if (StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.VIEW_ATTACHMENTS_ALLOWED.name())) {
				workItem = wfSession.getWorkItem(workItemId);
				out.print(ArgumentParser.isViewAttachmentNotAllowed(workItem));
			} else if (StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.UPLOAD_TASK_ATTACHMENTS_ALLOWED.name())) {
				workItem = wfSession.getWorkItem(workItemId);
				out.print(ArgumentParser.isUploadTaskAttachmentAllowed(workItem));
			} else if (StringUtils.isNotBlank(workflowInstanceId)
					&& action.equalsIgnoreCase(ActionType.TASK_ATTACHMENTS_FROM_WORKFLOW_INSTANCE_ID.name())) {
				jsonArray = inboxService.getTaskAttachmentsFromWorkflowInstanceId(resourceResolver, workflowInstanceId,
						ATTACHMENT_FOLDER_NAME);
				out.print(jsonArray);
			} else if (action.equalsIgnoreCase(ActionType.FORMS_CATALOG.name())) {
				Session session = request.getResourceResolver().adaptTo(Session.class);
				//String ldapName = inboxService.getldapAccountName(session, request.getResourceResolver());
				try {
					jsonArray = inboxService.getFormsCatalog(session);
					JsonArray jsonArrayCopy = inboxService.getFormsCatalog(session);
					for (int i = 0; i < jsonArrayCopy.size(); i++) {
						JsonElement jsonElement = jsonArrayCopy.get(i);
						if (null != jsonElement && !jsonElement.isJsonNull()) {
							json = jsonElement.getAsJsonObject();
							if (!json.isJsonNull() && json.isJsonObject() && json.has("path")) {
								String path = json.get("path").getAsString();
								Resource resource = resourceResolver.getResource(path.concat("/metadata"));
								/*Tag[] resourceTags = tagManager.getTags(resource);
								if (null != resourceTags && resourceTags.length > 0) {
									for (Tag resourceTag : resourceTags) {
										String resourceTagTitle = resourceTag.getTitle();
										if (StringUtils.isNotBlank(resourceTagTitle)) {

											log.debug("resourceTagTitle : {}, ldapName : {}",resourceTagTitle.toUpperCase(), ldapName);

											List<String> tagGroupMappings = formConfig.tagAndUserGroupMapping();
											for (String tagGroupConfig : tagGroupMappings) {
												String[] tagGroupArray = tagGroupConfig.split("~");
												Tag formConfigTag = tagManager.resolve(tagGroupArray[0]);
												if (null != formConfigTag) {
													String formConfigTagTitle = formConfigTag.getTitle();
													if (formConfigTagTitle.equalsIgnoreCase(resourceTagTitle)) {
														if (StringUtils.containsIgnoreCase(tagGroupArray[1],
																UserType.STUDENT.name())
																|| StringUtils.containsIgnoreCase(tagGroupArray[1],
																		UserType.FACULTY.name())) {
															if (StringUtils.containsIgnoreCase(resourceTagTitle,
																	UserType.STUDENT.name())
																	&& !StringUtils.containsIgnoreCase(ldapName,
																			UserType.STUDENT.name())) {
																jsonArray.remove(jsonElement);
															}
															if (StringUtils.containsIgnoreCase(resourceTagTitle,
																	UserType.FACULTY.name())
																	&& !StringUtils.containsIgnoreCase(ldapName,
																			UserType.FACULTY.name())) {
																jsonArray.remove(jsonElement);
															}

														} else {

															String[] userGroups = { tagGroupArray[1] };
															boolean isUserAMemberOfAuthorizedGroup = inboxService
																	.isAuthorizableAMember(serviceUserSession,
																			serviceUserSession.getUserID(), userGroups);
															if (!isUserAMemberOfAuthorizedGroup) {
																jsonArray.remove(jsonElement);
															}

														}
													}

													if (StringUtils.equalsIgnoreCase(resourceTagTitle,
															UserType.STUDENT_FACULTY.name())
															&& (!StringUtils.containsIgnoreCase(ldapName,
																	UserType.STUDENT.name())
																	&& !StringUtils.containsIgnoreCase(ldapName,
																			UserType.FACULTY.name()))) {
														jsonArray.remove(jsonElement);
													}

												}
											}
										}
									}
								} else {
									jsonArray.remove(jsonElement);
								}*/
							}
						}
					}
					out.print(jsonArray);
				} catch (RepositoryException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			} else if (StringUtils.isNotBlank(workflowInstanceId)
					&& action.equalsIgnoreCase(ActionType.INITIAL_HISTORY_XML.name())) {
				String dataXML = inboxService.getInitialSubmissionXMLData(serviceUserSession, workflowInstanceId);
				out.print(dataXML);
			} else if (StringUtils.isNotBlank(workItemId) && StringUtils.isNotBlank(historyWorkItemId)
					&& action.equalsIgnoreCase(ActionType.HISTORY_WORKITEM_XML.name())) {
				String dataXML = inboxService.getHistoryWorkItemXML(serviceUserSession, wfSession, historyWorkItemId,
						workItemId);
				out.print(dataXML);
			} else if (StringUtils.isNotBlank(taskAssignee)
					&& action.equalsIgnoreCase(ActionType.VIEW_TASK_DETAILS_ALLOWED.name())) {
				boolean isAllowed = inboxService
						.isViewTaskDetailsAllowed(request.getResourceResolver().adaptTo(Session.class), taskAssignee);
				out.print(isAllowed);
			} else if (StringUtils.isNotBlank(adobeSignedDocument) && StringUtils.isNotBlank(workflowInstanceId)
					&& StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.ADOBE_SIGN_DOCUMENT_ATTACHMENT.name())) {
				workItem = wfSession.getWorkItem(workItemId);
				jsonArray = inboxService.getAdobeSignAttachmentFromWorkflowInstanceId(resourceResolver,
						adobeSignedDocument, workflowInstanceId, workItem, workItemId);
				out.print(jsonArray);
			} else if (action.equalsIgnoreCase(ActionType.IS_MEMBER.name())) {
				boolean isAuthorizableAMember = false;
				if (StringUtils.isNotBlank(groupAsCSV) && StringUtils.isNotBlank(authorizableId)) {
					isAuthorizableAMember = inboxService.isAuthorizableAMember(serviceUserSession, authorizableId,
							groupAsCSV.split(","));
				} else if (StringUtils.isNotBlank(groupAsCSV) && StringUtils.isBlank(authorizableId)) {
					isAuthorizableAMember = inboxService.isAuthorizableAMember(serviceUserSession,
							serviceUserSession.getUserID(), groupAsCSV.split(","));
				} else if (StringUtils.isBlank(groupAsCSV) && StringUtils.isBlank(authorizableId)) {
					isAuthorizableAMember = inboxService.isAuthorizableAMember(serviceUserSession,
							serviceUserSession.getUserID(), reportConfig.scwReportViewersGroupList());
				}
				out.print(isAuthorizableAMember);
			}
			// log.debug("exit with workItemId : {} at {}", workItemId, LocalTime.now());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != resourceResolver && resourceResolver.isLive()) {
				resourceResolver.close();
			}
			if (wfSession != null) {
				wfSession.logout();
			}
			if (serviceUserSession != null) {
				serviceUserSession.logout();
			}
		}
		// log.debug("exit InboxItemDetailsServlet doGet method");
	}
}
