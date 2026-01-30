package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Map;

import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.adobe.granite.workflow.WorkflowSession;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(service = { Servlet.class }, immediate = true, property = { "sling.servlet.paths=/bin/manageTask" })
@ServiceDescription("Tasks Servlet")
public class TaskManagementServlet extends SlingAllMethodsServlet {

	private static final long serialVersionUID = 1L;

	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Reference
	private TaskService taskService;

	@Reference
	private InboxItemService inboxService;

	public enum ActionType {
		TASK_URL, UPDATE_TASK_DATA, UPDATE_TASK_STATUS, FETCH_WORKFLOW_HISTORY, SAVE_ACTION, SAVE_COMMENT,
		COMPLETED_WORKITEM_DATA, WORKITEM_HISTORY;

		private ActionType() {
		}
	}

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		log.debug("entered TaskManagementServlet doGet method");
		WorkflowSession wfSession = null;
		Session session = null;
		ResourceResolver resolver = null;
		PrintWriter out = response.getWriter();
		try {
			resolver = request.getResourceResolver();
			session = resolver.adaptTo(Session.class);
			wfSession = resolver.adaptTo(WorkflowSession.class);
			String workItemId = request.getParameter("workItemId");
			String historyWorkItemId = request.getParameter("historyWorkItemId");

			String isInitialSubmissionParam = request.getParameter("isInitialSubmission");
			String isHistorySubmissionParam = request.getParameter("isHistorySubmission");
			boolean isInitialSubmission = false;
			boolean isHistorySubmission = false;

			if (StringUtils.isNotBlank(isInitialSubmissionParam))
				isInitialSubmission = Boolean.valueOf(isInitialSubmissionParam);
			if (StringUtils.isNotBlank(isHistorySubmissionParam))
				isHistorySubmission = Boolean.valueOf(isHistorySubmissionParam);
			String action = request.getParameter("action");
			String currentTaskAction = request.getParameter("currentTaskAction");
			String currentTaskComment = request.getParameter("currentTaskComment");
			if (action.equalsIgnoreCase(ActionType.TASK_URL.name())) {
				String taskURL = getTaskURL(workItemId, historyWorkItemId, isInitialSubmission, isHistorySubmission);
				out.print(taskURL);
			} else if (action.equalsIgnoreCase(ActionType.UPDATE_TASK_DATA.name())) {
				doPost(request, response);
			} else if (StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.UPDATE_TASK_STATUS.name())) {
				out.print("Task Completion Status updated with status : "
						.concat(String.valueOf(taskService.updateTaskStatus(workItemId, "COMPLETE", false))));
			} else if (StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.FETCH_WORKFLOW_HISTORY.name())) {
				response.setContentType("application/json");
				out.print(taskService.fetchWorkflowHistory(workItemId, resolver,
						request.getResourceBundle(request.getLocale())));
			} else if (StringUtils.isNotBlank(workItemId) && StringUtils.isNotBlank(currentTaskAction)
					&& action.equalsIgnoreCase(ActionType.SAVE_ACTION.name())) {
				out.print(taskService.saveCurrentTaskAction(workItemId, currentTaskAction));
			} else if (StringUtils.isNotBlank(workItemId) && StringUtils.isNotBlank(currentTaskComment)
					&& action.equalsIgnoreCase(ActionType.SAVE_COMMENT.name())) {
				out.print(taskService.saveCurrentTaskComment(workItemId, currentTaskComment));
			} else if (StringUtils.isNotBlank(workItemId) && StringUtils.isNotBlank(historyWorkItemId)
					&& action.equalsIgnoreCase(ActionType.COMPLETED_WORKITEM_DATA.name())) {
				out.print(inboxService.getFormDataForCompletedWorkItem(session, wfSession, workItemId,
						historyWorkItemId, request.getResourceBundle(request.getLocale())));
			} else if (StringUtils.isNotBlank(workItemId)
					&& action.equalsIgnoreCase(ActionType.WORKITEM_HISTORY.name())) {
				out.print(inboxService.getHistoryForWorkItem(session, wfSession, workItemId,
						request.getResourceBundle(request.getLocale())));
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (session != null) {
				session.logout();
			}
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
		log.debug("exit TaskManagementServlet doGet method");
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		String dataXml = StringUtils.EMPTY;
		String taskId = StringUtils.EMPTY;
		try (PrintWriter out = response.getWriter()) {
			final Map<String, RequestParameter[]> params = request.getRequestParameterMap();
			if (params.containsKey("data"))
				dataXml = params.get("data")[0].toString();

			if (params.containsKey("taskId"))
				taskId = params.get("taskId")[0].toString();
			out.print("Task Data updated with status : "
					.concat(String.valueOf(taskService.updateTaskData(taskId, dataXml))));
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	private String getTaskURL(String workItemId, String historyWorkItemId, boolean isInitialSubmission,
			boolean isHistorySubmission) throws Exception {
		log.debug("workItemId inside getTaskURL method : {}", workItemId);
		log.debug("historyWorkItemId inside getTaskURL method : {}", historyWorkItemId);
		log.debug("isInitialSubmission inside getTaskURL method : {}", isInitialSubmission);
		log.debug("isHistorySubmission inside getTaskURL method : {}", isHistorySubmission);
		if (StringUtils.isNotBlank(workItemId)) {
			String xml = taskService.getTaskData(workItemId);
			String afPath = taskService.getAfPath(workItemId);
			if (StringUtils.isBlank(afPath)) {
				if (StringUtils.isNotBlank(xml)) {
					Document doc = XMLUtils.parseXmlFile(xml);
					Element afParentElement = XMLUtils.getParentNode(doc, "afSubmissionInfo");
					if (null != afParentElement && afParentElement.hasChildNodes()) {
						afPath = XMLUtils.getChildNodeContent(afParentElement, "afPath");
						if (StringUtils.isNotBlank(afPath) && afPath.contains("/content/dam/formsanddocuments/")) {
							afPath = afPath.replace("/content/dam/formsanddocuments/", "/content/forms/af/");
						}
					}
				}
			}
			if (StringUtils.isNotBlank(afPath) && !isInitialSubmission && !isHistorySubmission) {
				return afPath.concat(".prefill.html?wcmmode=disabled&taskId=").concat(workItemId);
			} else if (StringUtils.isNotBlank(afPath) && isInitialSubmission && !isHistorySubmission) {
				return afPath.concat(".prefillinitialsubmission.html?wcmmode=disabled&taskId=").concat(workItemId);
			} else if (StringUtils.isNotBlank(afPath) && !isInitialSubmission && isHistorySubmission
					&& StringUtils.isNotBlank(historyWorkItemId)) {
				return afPath.concat(".prefillhistorysubmission.html?wcmmode=disabled&taskId=").concat(workItemId)
						.concat("&historyWorkItemId=").concat(historyWorkItemId);
			}
		}
		return null;
	}

	private String getTaskURL_old(String workItemId, String historyWorkItemId, boolean isInitialSubmission,
			boolean isHistorySubmission) throws Exception {
		log.debug("workItemId inside getTaskURL method : {}", workItemId);
		log.debug("historyWorkItemId inside getTaskURL method : {}", historyWorkItemId);
		log.debug("isInitialSubmission inside getTaskURL method : {}", isInitialSubmission);
		log.debug("isHistorySubmission inside getTaskURL method : {}", isHistorySubmission);
		if (StringUtils.isNotBlank(workItemId)) {
			String xml = taskService.getTaskData(workItemId);
			String afPath = null;
			if (StringUtils.isNotBlank(xml)) {
				Document doc = XMLUtils.parseXmlFile(xml);
				Element afParentElement = XMLUtils.getParentNode(doc, "afSubmissionInfo");
				if (null != afParentElement && afParentElement.hasChildNodes()) {
					afPath = XMLUtils.getChildNodeContent(afParentElement, "afPath");
					if (StringUtils.isNotBlank(afPath) && afPath.contains("/content/dam/formsanddocuments/")) {
						afPath = afPath.replace("/content/dam/formsanddocuments/", "/content/forms/af/");
					}
				}
			}
			if (StringUtils.isNotBlank(afPath) && !isInitialSubmission && !isHistorySubmission) {
				return afPath.concat(".prefill.html?wcmmode=disabled&taskId=").concat(workItemId);
			} else if (StringUtils.isNotBlank(afPath) && isInitialSubmission && !isHistorySubmission) {
				return afPath.concat(".prefillinitialsubmission.html?wcmmode=disabled&taskId=").concat(workItemId);
			} else if (StringUtils.isNotBlank(afPath) && !isInitialSubmission && isHistorySubmission
					&& StringUtils.isNotBlank(historyWorkItemId)) {
				return afPath.concat(".prefillhistorysubmission.html?wcmmode=disabled&taskId=").concat(workItemId)
						.concat("&historyWorkItemId=").concat(historyWorkItemId);
			}
		}
		return null;
	}
}
