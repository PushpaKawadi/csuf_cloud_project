package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.Iterator;

import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.JackrabbitSession;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.Group;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.csuf.cloud.core.services.FallbackUserConfigService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.services.WorkflowAdministrationConfigService;
import com.csuf.cloud.core.utils.CSUFConstantsUtils;
import com.csuf.cloud.core.utils.DatabaseUtils;

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "=Get Delegate Users List Servlet",
		"sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/getDelegateUsersList" })
public class GetDelegateUsersServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;
	@Reference
	private GlobalConfigCSUFService globalConfigCSUFService;
	@Reference
	private FallbackUserConfigService globalConfigUserService;
	@Reference
	private WorkflowAdministrationConfigService wfConfig;
	@Reference
	private TaskService taskService;

	/** Default log. */
	private final static Logger log = LoggerFactory.getLogger(GetDelegateUsersServlet.class);

	public enum ActionType {
		DELEGATE_USER_DATA, GET_DELEGATE_GROUP_MEMBERS, IS_ASSIGNEE_GROUP, GET_DELEGATE_GROUP_MEMBERS_FOR_WF_REPORT, WORKFLOW_USERS, GET_AUTHORIZED_USERS_FOR_TERMINATION;

		private ActionType() {
		}
	}

	@Override
	protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response)
			throws ServletException, IOException {
		log.debug("Entered GetDelegateUsersServlet Servlet doGet method");
		ResourceResolver resolver = request.getResourceResolver();
		Session session = resolver.adaptTo(Session.class);
		String actionType = request.getParameter("action");
		String wId = request.getParameter("id");
		String witemId = request.getParameter("witemId");
		String assignee = request.getParameter("assignee");
		String userId = request.getParameter("userId");
		Connection dbConn = null;
		JSONArray resultArray = new JSONArray();
		String fallbackEmail = globalConfigUserService.fallbackUserEmailAddress();
		try {
			if (StringUtils.isNotBlank(actionType)
					&& actionType.equalsIgnoreCase(ActionType.DELEGATE_USER_DATA.name())) {
				log.debug("Entered if Statement");

				dbConn = jdbcConnectionService.getFrmDBConnection();
				try {
					String sqlQuery = CSUFConstantsUtils.getDelegateData;
					String lookupFields = CSUFConstantsUtils.getDelegateDataLookUpFields;
					log.debug("Sql QueryData : {}", sqlQuery);
					resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
					JSONObject objects = null;
					for (int i = 0; i < resultArray.length(); i++) {
						objects = resultArray.getJSONObject(i);
						if (objects.has("EMP_USERID")) {
							objects.put("rid", objects.getString("EMP_USERID"));
						}
						if (objects.has("FIRST_NAME")) {
							objects.put("label", (objects.getString("LAST_NAME")
									.concat(", ".concat(objects.getString("FIRST_NAME")))));
							objects.put("label_xss", (objects.getString("LAST_NAME")
									.concat(", ".concat(objects.getString("FIRST_NAME")))));
							objects.put("label_email", (objects.getString("EMAILID")));
						}
						// resultArray.remove(i);
					}
				} catch (Exception e) {
					log.error("data could not be retrieved}");
				}
			}

			if (StringUtils.isNotBlank(actionType)
					&& actionType.equalsIgnoreCase(ActionType.GET_DELEGATE_GROUP_MEMBERS.name())) {
				log.debug("Sql witemId : {}", witemId);
				dbConn = jdbcConnectionService.getFrmDBConnection();

				String[] userArray = wfConfig.delegateInReportGroupList();
				WorkflowSession wfsession = resolver.adaptTo(WorkflowSession.class);
				WorkItem wItem = wfsession.getWorkItem(witemId);
				String title = wItem.getMetaDataMap().get("workitem_workflow", String.class);
				if (userId.equals("admin")
						|| wfConfig.getAuthorisedWorkflowAdministrators(title, userId, session, userArray)) {
					if (wfConfig.isAssigneeAGroup(assignee, session)) {
						resultArray = getUserArray(dbConn, assignee, session, fallbackEmail);
					} else {
						MetaDataMap participantMap = wItem.getMetaDataMap();
						String participant = participantMap.get("ORIGINAL_PARTICIPANT").toString();
						if (wfConfig.isAssigneeAGroup(participant, session)) {
							resultArray = getUserArray(dbConn, participant, session, fallbackEmail);
						}
					}
				}
			}

			if (StringUtils.isNotBlank(actionType)
					&& actionType.equalsIgnoreCase(ActionType.GET_DELEGATE_GROUP_MEMBERS_FOR_WF_REPORT.name())) {
				log.debug("Sql witemId : {}", witemId);
				dbConn = jdbcConnectionService.getFrmDBConnection();

				String[] userArray = wfConfig.delegateInReportGroupList();
				WorkflowSession wfsession = resolver.adaptTo(WorkflowSession.class);
				WorkItem wItem = wfsession.getWorkItem(witemId);
				String title = wItem.getMetaDataMap().get("workitem_workflow", String.class);
				if (userId.equals("admin")
						|| wfConfig.getAuthorisedWorkflowAdministrators(title, userId, session, userArray)) {
					log.debug("is assignee group=" + wfConfig.isAssigneeAGroup(assignee, session));
					MetaDataMap participantMap = wItem.getMetaDataMap();
					String participant = participantMap.get("ORIGINAL_PARTICIPANT").toString();
					if (wfConfig.isAssigneeAGroup(assignee, session)) {
						resultArray = getUserArray(dbConn, assignee, session, fallbackEmail);
					} else {
						if (wfConfig.isAssigneeAGroup(participant, session) && !participant.equalsIgnoreCase("workflow-users")) {
							resultArray = getUserArray(dbConn, participant, session, fallbackEmail);
						} else {
							resultArray = getDelegateUserArray(dbConn);
						}
					}
				}
			}
			
			if (StringUtils.isNotBlank(actionType)
					&& actionType.equalsIgnoreCase(ActionType.GET_AUTHORIZED_USERS_FOR_TERMINATION.name())) {
				log.debug("witemId from GET_AUTHORIZED_USERS_FOR_TERMINATION Method  : {}", witemId);
				String[] userArray = wfConfig.terminateInReportGroupList();
				WorkflowSession wfsession = resolver.adaptTo(WorkflowSession.class);
				WorkItem wItem = wfsession.getWorkItem(witemId);
				String title = wItem.getMetaDataMap().get("workitem_workflow", String.class);
				if (userId.equals("admin")
						|| wfConfig.getAuthorisedUsersforTermination(title, userId, session, userArray)) {
					JSONObject object = new JSONObject();
					object.put("Result", "Success");
					resultArray.put(object);
				}
				}
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(resultArray.toString());
			log.debug("exit with resultArray size : {}", resultArray.length());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != resolver && resolver.isLive()) {
				resolver.close();
			}
			if (session != null) {
				session.logout();
			}
			if (dbConn != null) {
				try {
					dbConn.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
		}
		log.debug("Exit Get Delegate Servlet doGet method");
	}

	public static JSONArray getUserArray(Connection oConnection, String assignee, Session session, String email)
			throws Exception {
		JSONArray userArray = new JSONArray();
		try {
			UserManager userManager = ((JackrabbitSession) session).getUserManager();
			Authorizable groupAuthorizable = userManager.getAuthorizable(assignee);
			if (null != groupAuthorizable && groupAuthorizable.isGroup()) {
				Group group = (Group) groupAuthorizable;
				Iterator<Authorizable> declaredMembers = group.getDeclaredMembers();
				while (declaredMembers.hasNext()) {
					String member = declaredMembers.next().getID();
					log.debug("Sql member : {}", member);
					String sqlQuery = CSUFConstantsUtils.getEmplActDirDataWithUid;
					String lookupFields = CSUFConstantsUtils.getEmplActDirDataLookupFieldsWithUid;
					sqlQuery = sqlQuery.replaceAll("<<USERID>>", member);
					JSONArray jArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, oConnection);
					JSONObject objects = null;
					for (int i = 0; i < jArray.length(); i++) {
						objects = jArray.getJSONObject(i);
						if (objects.has("USERID")) {
							objects.put("rid", objects.getString("USERID"));
						}
						if (objects.has("FIRSTNAME")) {
							objects.put("label", (objects.getString("FIRSTNAME")
									.concat(", ".concat(objects.getString("LASTNAME")))));
							objects.put("label_xss", (objects.getString("FIRSTNAME")
									.concat(", ".concat(objects.getString("LASTNAME")))));
							objects.put("label_email", (objects.getString("EMAILID")));
						}
						userArray.put(objects);
					}
				}
				JSONObject obj = new JSONObject();
				obj.put("rid", assignee);
				obj.put("label", assignee);
				obj.put("label_xss", assignee);
				obj.put("label_email", email);
				userArray.put(obj);
				return userArray;
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	public static JSONArray getDelegateUserArray(Connection oConnection) throws Exception {
		JSONArray userArray = new JSONArray();
		try {
			String sqlQuery = CSUFConstantsUtils.getDelegateData;
			String lookupFields = CSUFConstantsUtils.getDelegateDataLookUpFields;
			log.debug("Sql QueryData : {}", sqlQuery);
			userArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, oConnection);
			JSONObject objects = null;
			for (int i = 0; i < userArray.length(); i++) {
				objects = userArray.getJSONObject(i);
				if (objects.has("EMP_USERID")) {
					objects.put("rid", objects.getString("EMP_USERID"));
				}
				if (objects.has("FIRST_NAME")) {
					objects.put("label",
							(objects.getString("LAST_NAME").concat(", ".concat(objects.getString("FIRST_NAME")))));
					objects.put("label_xss",
							(objects.getString("LAST_NAME").concat(", ".concat(objects.getString("FIRST_NAME")))));
					objects.put("label_email", (objects.getString("EMAILID")));
				}
			}
			return userArray;
		} catch (Exception e) {
			log.error("data could not be retrieved}");
		}
		return null;
	}
}
