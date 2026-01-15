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
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.csuf.cloud.core.services.WorkflowService;
import com.csuf.cloud.core.vo.WorkflowFilterVO;

@Component(service = Servlet.class, property = {
		Constants.SERVICE_DESCRIPTION + "=Terminate Workflow Instances Servlet",
		"sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/workflowData" })
public class ManageWorkflowInstancesServlet extends SlingSafeMethodsServlet {
	private final static Logger log = LoggerFactory.getLogger(ManageWorkflowInstancesServlet.class);
	private static final long serialVersionUID = 1L;

	@Reference
	private WorkflowService workflowService;

	private static final String RES_CONTENT_TYPE = "application/json";
	private static final String DEFAULT_START_DATE = "01/01/2018";

	public enum ActionType {
		GET_ALL_ACTIVE_WORKFLOW_INSTANCES_DATA, TERMINATE_WORKFLOW, GET_ALL_ACTIVE_WORKFLOW_INSTANCES_DATA_FOR_DELEGATE,
		GET_MYFORMS_DATA, GET_MY_SUBMISSION_DATA, GET_WORKFLOW_INSTANCES_DATA_FOR_BULK_APPROVAL;

		private ActionType() {
		}
	}

	protected void doGet(SlingHttpServletRequest req, SlingHttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		WorkflowSession workflowSession = null;
		Session session = req.getResourceResolver().adaptTo(Session.class);
		String userId = StringUtils.EMPTY;
		try {
			final Map<String, RequestParameter[]> params = req.getRequestParameterMap();
			if (params.containsKey("userId")) {
				userId = params.get("userId")[0].toString();
			}
			String action = req.getParameter("action");
			// String userId = req.getParameter("userId");
			String workflowInstanceId = req.getParameter("workflowInstanceId");
			String initiator = req.getParameter("initiator");
			initiator = StringUtils.isNotBlank(initiator) ? initiator : StringUtils.EMPTY;

			String modelTitle = req.getParameter("wfTitle");
			modelTitle = StringUtils.isNotBlank(modelTitle) ? modelTitle : StringUtils.EMPTY;

			String startDate = req.getParameter("startDate");
			startDate = StringUtils.isNotBlank(startDate) ? startDate : DEFAULT_START_DATE;

			workflowSession = req.getResourceResolver().adaptTo(WorkflowSession.class);
			WorkflowFilterVO workflowFilterVO = new WorkflowFilterVO(initiator, modelTitle, startDate);

			if (action.equalsIgnoreCase(ActionType.GET_ALL_ACTIVE_WORKFLOW_INSTANCES_DATA.name())) {
				response.setContentType(RES_CONTENT_TYPE);
				out.print(workflowService.getAllActiveWorkflowInstancesData(req, workflowSession, workflowFilterVO,
						userId).toString());
			} else if (action.equalsIgnoreCase(ActionType.TERMINATE_WORKFLOW.name())
					&& StringUtils.isNotBlank(workflowInstanceId)) {
				out.print(workflowService.terminateWorkflow(workflowSession, workflowInstanceId));
			} else if (action.equalsIgnoreCase(ActionType.GET_ALL_ACTIVE_WORKFLOW_INSTANCES_DATA_FOR_DELEGATE.name())) {
				log.info("Inside Manage GET_ALL_ACTIVE_WORKFLOW_INSTANCES_DATA_FOR_DELEGATE");
				out.print(workflowService.getAllActiveWorkitemData(req, workflowSession, workflowFilterVO, session,
						userId));
			} else if (action
					.equalsIgnoreCase(ManageWorkflowInstancesServlet.ActionType.GET_MY_SUBMISSION_DATA.name())) {
				out.print(
						workflowService.getAllSubmissionData(req, workflowSession, workflowFilterVO, session, userId));
			} else if (action.equalsIgnoreCase(ActionType.GET_WORKFLOW_INSTANCES_DATA_FOR_BULK_APPROVAL.name())) {
				out.print(workflowService.getAllActiveWorkitemDataForBulkApproval(req, workflowSession, workflowFilterVO, session,
						userId));
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (workflowSession != null) {
				workflowSession.logout();
			}
		}
	}
}