package com.csuf.cloud.core.services.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;

import javax.jcr.Session;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.HistoryItem;
import com.adobe.granite.workflow.exec.Status;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.services.WorkflowService;
import com.csuf.cloud.core.utils.ArgumentParser;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


@Component(service = TaskService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Task Service Implementation" })
public class TaskServiceImpl implements TaskService {

	private static final Logger log = LoggerFactory.getLogger(TaskServiceImpl.class);
	private static final String ASSIGN_TASK_STEP = "forms:assigntask";
	private static final String DUE_DATE = "due_date";
	private static final String DATE_FORMAT_DB = "yyyy-MM-dd HH:mm:ss";
	private static final String DATE_FORMAT_US = "M/d/yyyy h:mm:ss a";
	private static final int MAX_CHARS_ALLOWED_LIMIT = 4000;

	private DateFormat formatter = new SimpleDateFormat(DATE_FORMAT_DB);

	@Reference
	private JDBCConnectionHelperService jdbcService;

	@Reference
	private WorkflowService workflowService;

	@Reference
	private InboxItemService inboxService;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private ProcessingInstanceConfigService processingConfig;

	@Override
	public String saveTask(WorkItem item, ResourceResolver resolver, Session session) throws Exception {
		String taskTitle = item.getNode().getTitle();
		// String taskDescription = item.getNode().getDescription();
		String taskDescription = item.getWorkflow().getMetaDataMap().get("extendedDesc", String.class);
		String taskPriority = item.getPriority().toString();
		String assignee = item.getCurrentAssignee();
		// String workflowModel = item.getWorkflow().getWorkflowModel().getTitle();
		String workflowModel = null;
		Object workflowModelTitle = item.getWorkflow().getWorkflowData().getMetaDataMap().get("workflowTitle");
		if (null != workflowModelTitle) {
			workflowModel = workflowModelTitle.toString();
		}
		if (StringUtils.isBlank(workflowModel)) {
			workflowModel = item.getWorkflow().getWorkflowModel().getTitle();
		}
		String status = item.getStatus().name();
		Date startDate = item.getTimeStarted();
		Date dueDate = item.getDueTime();
		Date endDate = item.getTimeEnded();
		String workflowInstanceId = item.getWorkflow().getId();
		String workitemId = item.getId();
		int index = workitemId.lastIndexOf('/');
		String workitemNodeId = workitemId.substring(index + 1, workitemId.length());
		JsonObject json = inboxService
				.getPreviousStepData((session != null ? session : globalConfigService.getAdminSession()), item);
		boolean showActionTaken = ArgumentParser.showActionTaken(item);
		boolean showComment = ArgumentParser.showComment(item);
		boolean showResetButton = ArgumentParser.showReset(item);
		boolean showSaveButton = ArgumentParser.showSave(item);
		boolean showSubmitButton = ArgumentParser.showSubmit(item);
		String afPath = ArgumentParser.getAFPath(item);
		if (StringUtils.isBlank(afPath)) {
			log.error("Fatal Exception: AF_PATH is blank in workitem metadata for workItemId : {}", item.getId());
		} else if (StringUtils.isNotBlank(afPath) && afPath.contains("/content/dam/formsanddocuments/")) {
			afPath = afPath.replace("/content/dam/formsanddocuments/", "/content/forms/af/");
		}
		String actionTaken = StringUtils.EMPTY;
		String workitemComment = StringUtils.EMPTY;
		String dataXML = StringUtils.EMPTY;
		/*if (!json.isJsonNull() && json.isJsonObject()) {
			if (json.has("actionTaken"))
				actionTaken = json.get("actionTaken").getAsString();
			if (json.has("workitemComment")) {
				workitemComment = json.get("workitemComment").getAsString();
				if (workitemComment.length() > 4000) {
					workitemComment = workitemComment.substring(0, MAX_CHARS_ALLOWED_LIMIT);
				}
			}

		}*/
		
		String dataXMLName = ArgumentParser.getInputDataXMLPath(item);
		if (StringUtils.isBlank(dataXMLName)) {
			String combinedName = ArgumentParser.getInputCombinedDataXMLPath(item);
			if (StringUtils.isNotBlank(combinedName) && combinedName.contains(":")) {
				dataXMLName = combinedName.split(":")[1];
			}
		}
		if (StringUtils.isNotBlank(dataXMLName) && dataXMLName.contains(":")) {
			dataXMLName = dataXMLName.substring(dataXMLName.lastIndexOf(":") + 1);
		}
		
		InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, item.getContentPath(),
				StringUtils.isNotBlank(dataXMLName) ? dataXMLName : "Data.xml");
		if (null != is) {
			Document doc = XMLUtils.getDomDocument(is);
			dataXML = XMLUtils.prettyPrintAsString(doc);
			
			if (StringUtils.isBlank(taskDescription)) {
				taskDescription = XMLUtils.getExtendedDesc(doc);
				log.debug("iphone task desc =" +taskDescription);
				log.debug("iphone from XML : {}", taskDescription);
				log.debug("iphone actionTaken =" +actionTaken);
				if (StringUtils.isBlank(actionTaken)) {
					log.debug("initial task, actionTaken should be blank : {}", actionTaken);
					String workflowInitiator = XMLUtils.getWorkflowInitiator(doc);
					log.debug("workflowInitiator=" +workflowInitiator);
					if (StringUtils.isNotBlank(workflowInitiator)) {
						log.debug("workflow initiator modified as {} with status {}", workflowInitiator,
								CSUFUtils.modifyWorkflowInitiator(
										(session != null ? session : globalConfigService.getAdminSession()),
										workflowInstanceId, workflowInitiator));
					}
				}
			}
		} else {
			log.error("Exception");
			throw new RuntimeException(
					"Fatal Error, Data.xml could not be retrieved for workItemId : ".concat(item.getId()));
		}
		log.debug("inside saveTask 3");
		String routes = ArgumentParser.getRoutes(item);
		log.debug("routes : {}", routes);
		String dueDateString = (null != dueDate ? convertDate(dueDate) : null);
		String endDateString = (null != endDate ? convertDate(endDate) : null);
		String statement = StringUtils.EMPTY;
		log.debug("inside saveTask 4");
		
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/saveTaskDeatils";
	    
	    JSONObject payload = new JSONObject();
		
	    payload.put("taskTitle", taskTitle);
	    
	    payload.put("taskPriority", taskPriority);
	    
	    payload.put("taskDescription", taskDescription);
	    
	    payload.put("assignee", assignee);
	    
	    payload.put("workflowModel", workflowModel);

	    payload.put("status", status);
	    
	    /*payload.put("startDate", startDate);
	    payload.put("dueDate", dueDate);
	    payload.put("endDate", endDate);*/
	    
	    payload.put("workflowInstanceId", workflowInstanceId);
	    
	    payload.put("workitemId", workitemId);
	    
	    payload.put("workitemNodeId", workitemNodeId);
	    
	    payload.put("startDate", convertDate(startDate));
	    
	    payload.put("startDate", convertDate(startDate));
	    payload.put("dueDate", convertDate(dueDate));

	    
	    payload.put("endDate", convertDate(endDate));
	    
	    payload.put("dataXML", dataXML);
	    
	    payload.put("actionTaken", actionTaken);
	    payload.put("workitemComment", workitemComment);
	    payload.put("routes", routes);
	    payload.put("afPath", afPath);
	    payload.put("showActionTaken", showActionTaken);
	    payload.put("showComment", showComment);
	    payload.put("showSubmit", showSubmitButton);
	    payload.put("showSave", showSaveButton);
	    payload.put("showReset", showResetButton);
	    
	    log.debug("saveTask 5="+payload.toString());
	    
		log.debug("saveTask 5");

		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(payload.toString()));
		
		CloseableHttpResponse response = client.execute(post);
		log.debug("Save Task Response: =" + response.getStatusLine());
		
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
		 
		workitemNodeId = responseStr;
		log.debug("Save Task workitemNodeId =" + responseStr);

		return workitemNodeId;
		
		} catch (Exception e) {
				/**
				 * In case of any error, rollback
				 */
				/*String fallbackSaveTaskSQLQuery = "INSERT INTO task_details"
						+ " (task_title, priority, task_description, assignee, project, workflow_model, status, start_date, due_date,"
						+ " workflow_instance_id, workitem_id, workitem_node_id, end_date, data, action_taken, task_submit_comment, "
						+ "show_action_taken, show_comment, routes_data, show_submit, show_save, show_reset, workflow_status, af_path)"
						+ " VALUES('" + taskTitle + "', '" + taskPriority + "', '" + taskDescription + "', '" + assignee
						+ "', '" + StringUtils.EMPTY + "', '" + workflowModel + "', '" + status + "', '"
						+ convertDate(startDate) + "', '" + dueDateString + "', '" + workflowInstanceId + "', '"
						+ workitemId + "', '" + workitemNodeId + "', '" + endDateString + "', '" + dataXML + "', '"
						+ actionTaken + "', '" + workitemComment + "', '"
						+ CSUFUtils.getStringEquivalent(showActionTaken) + "', '"
						+ CSUFUtils.getStringEquivalent(showComment) + "', '" + routes + "', '"
						+ CSUFUtils.getStringEquivalent(showSubmitButton) + "', '"
						+ CSUFUtils.getStringEquivalent(showSaveButton) + "', '"
						+ CSUFUtils.getStringEquivalent(showResetButton) + "', '" + "RUNNING" + "', '" + afPath + "')";

				log.debug("fallbackSaveTaskSQLQuery : {}", fallbackSaveTaskSQLQuery);
				connection.rollback();
				connection.setAutoCommit(true);*/
				log.error("Error Message : {} with error stacktrace : {}", e.getMessage(),
						Arrays.toString(e.getStackTrace()));
			}
		return null;
		} /*catch (SQLException e) {
			String fallbackSaveTaskSQLQuery = "INSERT INTO task_details"
					+ " (task_title, priority, task_description, assignee, project, workflow_model, status, start_date, due_date,"
					+ " workflow_instance_id, workitem_id, workitem_node_id, end_date, data, action_taken, task_submit_comment, "
					+ "show_action_taken, show_comment, routes_data, show_submit, show_save, show_reset, workflow_status, af_path)"
					+ " VALUES('" + taskTitle + "', '" + taskPriority + "', '" + taskDescription + "', '" + assignee
					+ "', '" + StringUtils.EMPTY + "', '" + workflowModel + "', '" + status + "', '"
					+ convertDate(startDate) + "', '" + dueDateString + "', '" + workflowInstanceId + "', '"
					+ workitemId + "', '" + workitemNodeId + "', '" + endDateString + "', '" + dataXML + "', '"
					+ actionTaken + "', '" + workitemComment + "', '" + CSUFUtils.getStringEquivalent(showActionTaken)
					+ "', '" + CSUFUtils.getStringEquivalent(showComment) + "', '" + routes + "', '"
					+ CSUFUtils.getStringEquivalent(showSubmitButton) + "', '"
					+ CSUFUtils.getStringEquivalent(showSaveButton) + "', '"
					+ CSUFUtils.getStringEquivalent(showResetButton) + "', '" + "RUNNING" + "', '" + afPath + "')";

			log.debug("fallbackSaveTaskSQLQuery : {}", fallbackSaveTaskSQLQuery);
			log.error("Error Message : {} with error stacktrace : {}", e.getMessage(),
					Arrays.toString(e.getStackTrace()));
		}*/
		 
		
		
	
	
	@Override
	public JsonArray getAllTasksCloud(Session currentUserSession) {
		String getTasksStmt = "select task_title, priority, task_description, assignee, "
				+ "workflow_model, status, start_date, due_date, workflow_instance_id, " + "workitem_id, action_taken, "
				+ "task_submit_comment, show_action_taken, show_comment, routes_data, "
				+ "show_submit, show_save, show_reset from task_details WHERE status = 'ACTIVE' "
				+ "and workflow_status = 'RUNNING' order by start_date desc";

		// log.debug("getTasks SQL : {}", getTasksStmt);
		try (Connection connection = jdbcService.getInboxDBConnection();
				PreparedStatement prStmt = connection.prepareStatement(getTasksStmt);
				ResultSet resultSet = prStmt.executeQuery();) {
			JsonArray jsonArray = new JsonArray();
			// log.debug("before while loop : {}", LocalTime.now());
			while (resultSet.next()) {
				String assignee = resultSet.getString("assignee");
				boolean isViewTaskAllowed = inboxService.isViewInboxTaskAllowed(currentUserSession, assignee);
				if (!isViewTaskAllowed)
					continue;
				JsonObject jsonObj = new JsonObject();
				jsonObj.addProperty("isViewTaskAllowed", String.valueOf(isViewTaskAllowed));
				boolean isAssigneeAGroup = CSUFUtils.isAuthorizableAGroup(currentUserSession, assignee);
				boolean isViewTaskDetailsAllowed = inboxService.isViewTaskDetailsAllowed(currentUserSession, assignee);
				boolean isCurrentUserAdmin = inboxService.isCurrentUserAdmin(currentUserSession);
				String currentUserId = inboxService.getCurrentUserId(currentUserSession);
				jsonObj.addProperty("isCurrentUserAdmin", String.valueOf(isCurrentUserAdmin));
				jsonObj.addProperty("isViewTaskDetailsAllowed", String.valueOf(isViewTaskDetailsAllowed));
				jsonObj.addProperty("isAssigneeAGroup", String.valueOf(isAssigneeAGroup));
				jsonObj.addProperty("currentUserId", currentUserId);
				jsonObj.addProperty("task_title", resultSet.getString("task_title"));
				jsonObj.addProperty("priority", resultSet.getString("priority"));
				jsonObj.addProperty("task_description", resultSet.getString("task_description"));
				jsonObj.addProperty("assignee", resultSet.getString("assignee"));
				jsonObj.addProperty("workflow_model", resultSet.getString("workflow_model"));
				jsonObj.addProperty("status", resultSet.getString("status"));
				String startDate = resultSet.getString("start_date");

				if (StringUtils.isNotBlank(startDate)) {
					Date formattedStartDate = CSUFUtils.convertStringToDate(startDate, DATE_FORMAT_DB);
					if (null != formattedStartDate) {
						String finalStartDate = CSUFUtils.convertDateToString(formattedStartDate, DATE_FORMAT_US);
						if (StringUtils.isNotBlank(finalStartDate)) {
							jsonObj.addProperty("start_date",
									StringUtils.isNotBlank(finalStartDate) ? finalStartDate : StringUtils.EMPTY);
						}
					}
				}
				String dueDate = resultSet.getString(DUE_DATE);
				jsonObj.addProperty(DUE_DATE, StringUtils.isNotBlank(dueDate) ? dueDate : StringUtils.EMPTY);

				String workItemId = resultSet.getString("workitem_id");
				String actionTaken = null;
				String workitemComment = null;

				/*
				 * try { if (StringUtils.isNotBlank(workItemId)) { String url =
				 * "/bin/getInboxItemDetails?action=PREVIOUS_STEP_DATA&workItemId="
				 * .concat(workItemId);
				 * 
				 * // log.debug("checkpoint 1 : {}", LocalTime.now());
				 * 
				 * String jsonResponse = inboxService.getResponseFromProcessingInstance(url);
				 * 
				 * // log.debug("checkpoint 2 : {}", LocalTime.now());
				 * 
				 * JsonParser parser = new JsonParser(); if
				 * (StringUtils.isNotBlank(jsonResponse)) { JsonElement jsonElement =
				 * parser.parse(jsonResponse); if (null != jsonElement) { JsonObject json =
				 * jsonElement.getAsJsonObject(); if (!json.isJsonNull() && json.isJsonObject())
				 * { if (json.has("actionTaken")) actionTaken =
				 * json.get("actionTaken").getAsString(); if (json.has("workitemComment"))
				 * workitemComment = json.get("workitemComment").getAsString(); } } } } } catch
				 * (Exception e) { log.error(e.getMessage()); }
				 */
				jsonObj.addProperty("workflow_instance_id", resultSet.getString("workflow_instance_id"));
				jsonObj.addProperty("workitem_id", resultSet.getString("workitem_id"));
				jsonObj.addProperty("action_taken", actionTaken);
				jsonObj.addProperty("task_submit_comment", workitemComment);
				jsonObj.addProperty("routes_data", resultSet.getString("routes_data"));

				if (!processingConfig.dbType().equalsIgnoreCase("ORACLE")) {
					jsonObj.addProperty("show_submit", String.valueOf(resultSet.getBoolean("show_submit")));
					jsonObj.addProperty("show_save", String.valueOf(resultSet.getBoolean("show_save")));
					jsonObj.addProperty("show_reset", String.valueOf(resultSet.getBoolean("show_reset")));
					jsonObj.addProperty("show_action_taken", String.valueOf(resultSet.getBoolean("show_action_taken")));
					jsonObj.addProperty("show_comment", String.valueOf(resultSet.getBoolean("show_comment")));
				} else {
					jsonObj.addProperty("show_submit",
							String.valueOf(CSUFUtils.getBooleanEquivalent(resultSet.getString("show_submit"))));
					jsonObj.addProperty("show_save",
							String.valueOf(CSUFUtils.getBooleanEquivalent(resultSet.getString("show_save"))));
					jsonObj.addProperty("show_reset",
							String.valueOf(CSUFUtils.getBooleanEquivalent(resultSet.getString("show_reset"))));
					jsonObj.addProperty("show_action_taken",
							String.valueOf(CSUFUtils.getBooleanEquivalent(resultSet.getString("show_action_taken"))));
					jsonObj.addProperty("show_comment",
							String.valueOf(CSUFUtils.getBooleanEquivalent(resultSet.getString("show_comment"))));
				}
				jsonArray.add(jsonObj);

				// log.debug("checkpoint 3 : {}", LocalTime.now());

			}
			// log.debug("after while loop : {}", LocalTime.now());
			return jsonArray;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTask(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteTask(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	private String convertDate(Date date) throws ParseException {
		if (null != date) {
			String dateStr = formatter.format(date);
			if (StringUtils.isNotBlank(dateStr)) {
				return dateStr;
			}
		}
		return null;
	}

	@Override
	public boolean updateTaskData(String workItemId, String data) {
		try (Connection connection = jdbcService.getInboxDBConnection();) {

			// Setting auto commit false here to maintain atomic transactional behavior
			connection.setAutoCommit(false);

			String updateTaskStmt = "update task_details set data = ? where workitem_node_id = ?";
			try (PreparedStatement prStmt = connection.prepareStatement(updateTaskStmt);) {

				int lastSlashIndex = workItemId.lastIndexOf('/');
				String workitemNodeId = workItemId.substring(lastSlashIndex + 1, workItemId.length());

				prStmt.setString(1, data);
				prStmt.setString(2, workitemNodeId);

				int rowAffected = prStmt.executeUpdate();
				log.debug("updateTaskData :::: rowAffected : {}", rowAffected);

				/**
				 * Committing after all the operations
				 */
				connection.commit();
				if (rowAffected > 0)
					return true;
			} catch (Exception e) {
				/**
				 * In case of any error, rollback
				 */
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e2) {
			log.error(Arrays.toString(e2.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean saveCurrentTaskAction(String workItemId, String actionTaken) {
		try (Connection connection = jdbcService.getInboxDBConnection();) {

			connection.setAutoCommit(false);

			String existingAction = getCurrentTaskAction(workItemId);
			if (StringUtils.isNotBlank(existingAction)) {
				actionTaken = existingAction.concat("~").concat(actionTaken);
			}
			String updateTaskStmt = "update task_details set current_task_action = ? where workitem_id = ?";
			try (PreparedStatement prStmt = connection.prepareStatement(updateTaskStmt);) {

				prStmt.setString(1, actionTaken);
				prStmt.setString(2, workItemId);

				int rowsAffected = prStmt.executeUpdate();
				log.debug("saveCurrentTaskAction :::: rowsAffected : {}", rowsAffected);

				connection.commit();
				if (rowsAffected > 0)
					return true;
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e2) {
			log.error(Arrays.toString(e2.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean saveCurrentTaskComment(String workItemId, String comment) {
		try (Connection connection = jdbcService.getInboxDBConnection();) {

			connection.setAutoCommit(false);

			String existingComment = getCurrentTaskComment(workItemId);
			if (StringUtils.isNotBlank(existingComment)) {
				comment = existingComment.concat("~").concat(comment);
			}
			String updateTaskStmt = "update task_details set current_task_comment = ? where workitem_id = ?";
			try (PreparedStatement prStmt = connection.prepareStatement(updateTaskStmt);) {

				prStmt.setString(1, comment);
				prStmt.setString(2, workItemId);

				int rowsAffected = prStmt.executeUpdate();
				log.debug("saveCurrentTaskComment :::: rowsAffected : {}", rowsAffected);

				connection.commit();
				if (rowsAffected > 0)
					return true;
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e2) {
			log.error(Arrays.toString(e2.getStackTrace()));
		}
		return false;
	}

	public boolean updateTaskStatus(String workItemId, String taskStatus, boolean isUpdateTaskStartDate) {
	    boolean data = false;
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/updateTaskStatus";
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
	    json.put("taskStatus", taskStatus);
	    json.put("isUpdateTaskStartDate", isUpdateTaskStartDate);
	    try (CloseableHttpClient client = HttpClients.createDefault()) {
	        HttpPost post = new HttpPost(dbServiceUrl);
	        post.addHeader("Content-Type", "application/json");
	        post.setEntity(new StringEntity(json.toString()));
	        try (CloseableHttpResponse response = client.execute(post)) {
	            log.debug("updateTaskStatus DB Service Response: {}", response.getStatusLine());
	            String responseStr = EntityUtils.toString(response.getEntity()).trim();
	            log.debug("updateTaskStatus responseStr = {}", responseStr);
	            data = Boolean.parseBoolean(responseStr);
	            log.debug("updateTaskStatus value = {}", data);
	            return data;
	        }
	    } catch (UnsupportedEncodingException e) {
	        log.error("Encoding error", e);
	    } catch (Exception e) {
	        log.error("Error calling UpdateTaskData servlet", e);
	    }
	    return false;
	}

	@Override
	public boolean updateTaskAssignee(String workItemId, String assignee) {
	    boolean data = false;
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/UpdateTaskAssignee";
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
	    json.put("assignee", assignee);
	    try (CloseableHttpClient client = HttpClients.createDefault()) {
	        HttpPost post = new HttpPost(dbServiceUrl);
	        post.addHeader("Content-Type", "application/json");
	        post.setEntity(new StringEntity(json.toString()));
	        try (CloseableHttpResponse response = client.execute(post)) {
	            log.debug("updateTaskAssignee Response: {}", response.getStatusLine());
	            String responseStr = EntityUtils.toString(response.getEntity()).trim();
	            data = Boolean.parseBoolean(responseStr);
	            return data;
	        }

	    } catch (UnsupportedEncodingException e) {
	        log.error("Encoding error", e);
	    } catch (Exception e) {
	        log.error("Error calling UpdateTaskData servlet", e);
	    }

	    return false;
	}
	
@Override
public String getTaskDataOld(String workItemId) {
	String getTaskDataStmt = "select data from task_details where workitem_id = ?";
	try (Connection connection = jdbcService.getInboxDBConnection();) {

		// Setting auto commit false here to maintain atomic transactional behavior
		connection.setAutoCommit(false);

		try (PreparedStatement prStmt = connection.prepareStatement(getTaskDataStmt);) {
			prStmt.setString(1, workItemId);
			try (ResultSet resultSet = prStmt.executeQuery();) {
				while (resultSet.next()) {
					String data = resultSet.getString("data");
					connection.commit();
					return data;
				}
			}
		} catch (Exception e) {
			/**
			 * In case of any error, rollback
			 */
			connection.rollback();
			connection.setAutoCommit(true);
			log.error(Arrays.toString(e.getStackTrace()));
		}
	} catch (SQLException e) {
		log.error(Arrays.toString(e.getStackTrace()));
	}
	return null;
	
	}

	@Override
	public String getTaskData(String workItemId) {
		String data ="";
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/TaskDetailsServlet";
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(json.toString()));
		CloseableHttpResponse response = client.execute(post);
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
        data = responseStr;
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	    return data;
	}

	@Override
	public String getWorkflowInstanceIdOld(String workItemId) {
		String getStmt = "select workflow_instance_id from task_details where workitem_id = ?";
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			connection.setAutoCommit(false);

			try (PreparedStatement prStmt = connection.prepareStatement(getStmt);) {
				prStmt.setString(1, workItemId);
				try (ResultSet resultSet = prStmt.executeQuery();) {
					while (resultSet.next()) {
						String workflowInstanceId = resultSet.getString("workflow_instance_id");
						connection.commit();
						return workflowInstanceId;
					}
				}
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public String getWorkflowInstanceId(String workItemId) {
		
		String workflowInstanceId ="";
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/WorkflowInstanceID";
	    
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
		
		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(json.toString()));
		
		CloseableHttpResponse response = client.execute(post);
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
		workflowInstanceId = responseStr;
		
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	    return workflowInstanceId;
	}
	
	private String getCurrentTaskActionOld(String workItemId) {
		String getStmt = "select current_task_action from task_details where workitem_id = ?";
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			connection.setAutoCommit(false);

			try (PreparedStatement prStmt = connection.prepareStatement(getStmt);) {
				prStmt.setString(1, workItemId);
				try (ResultSet resultSet = prStmt.executeQuery();) {
					while (resultSet.next()) {
						String lastAction = resultSet.getString("current_task_action");
						connection.commit();
						return lastAction;
					}
				}
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}


	private String getCurrentTaskAction(String workItemId) {
		String current_task_action ="";
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/CurrentTaskAction";
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(json.toString()));
		CloseableHttpResponse response = client.execute(post);
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
		current_task_action = responseStr;
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	    return current_task_action;
	}

	private String getCurrentTaskComment(String workItemId) {
		String getStmt = "select current_task_comment from task_details where workitem_id = ?";
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			connection.setAutoCommit(false);

			try (PreparedStatement prStmt = connection.prepareStatement(getStmt);) {
				prStmt.setString(1, workItemId);
				try (ResultSet resultSet = prStmt.executeQuery();) {
					while (resultSet.next()) {
						String comment = resultSet.getString("current_task_comment");
						connection.commit();
						return comment;
					}
				}
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public String getAfPath(String workItemId) {
		String afPath = "";
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/AFPathServlet";
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(json.toString()));
		CloseableHttpResponse response = client.execute(post);
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
		afPath = responseStr;
		
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	    return afPath;
	}
		
	@Override
	public String getAfPathOld(String workItemId) {
		String getStmt = "select af_path from task_details where workitem_id = ?";
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			connection.setAutoCommit(false);

			try (PreparedStatement prStmt = connection.prepareStatement(getStmt);) {
				prStmt.setString(1, workItemId);
				try (ResultSet resultSet = prStmt.executeQuery();) {
					while (resultSet.next()) {
						String afPath = resultSet.getString("af_path");
						connection.commit();
						return afPath;
					}
				}
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	

	@Override
	public String fetchWorkflowHistory(String workItemId, ResourceResolver resolver, ResourceBundle resourceBundle)
			throws Exception {
		Map<String, Integer> wItemIdMap = new HashMap<>();
		JsonArray wfHistoryJson = null;
		String workItemAction = null;
		String startDateStr = null;
		String endDateStr = null;
		WorkflowSession wfSession = resolver.adaptTo(WorkflowSession.class);
		Workflow workflow = wfSession.getWorkItem(workItemId).getWorkflow();
		WorkItem currentWorkItem = wfSession.getWorkItem(workItemId);
		List<HistoryItem> historyItemsList = wfSession.getHistory(workflow);

		String initiator = workflow.getInitiator();
		Date startDate = workflow.getTimeStarted();
		startDateStr = CSUFUtils.formatDate(startDate.getTime(), resourceBundle);
		if (null != historyItemsList && !historyItemsList.isEmpty()) {
			wfHistoryJson = new JsonArray();
			workItemAction = "Application submission";
			String viewDetailsLink = "/content/csu/us/en/task-details-readonly.html?wcmmode=disabled";
			wfHistoryJson = CSUFUtils.modifyTaskHistory(wfHistoryJson, workItemId, workItemAction, "Start", initiator,
					startDateStr, startDateStr, "Workflow started", null, viewDetailsLink, null, null);
		}

		for (HistoryItem historyItem : historyItemsList) {
			if (null != historyItem) {
				String action = historyItem.getAction();
				if (StringUtils.isNotBlank(action) && action.equalsIgnoreCase("WorkflowCompleted")) {
					WorkItem workItem = historyItem.getWorkItem();
					if (null != workItem && StringUtils.isNotBlank(workItem.getItemSubType())
							&& workItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
							&& workItem.getStatus().equals(Status.COMPLETE)) {
						startDateStr = CSUFUtils.formatDate(workItem.getTimeStarted().getTime(), resourceBundle);
						endDateStr = CSUFUtils.formatDate(workItem.getTimeEnded().getTime(), resourceBundle);
						String workItemURL = workItem.getMetaDataMap().get("workitem_url").toString();
						int itemIndex = workItemURL.indexOf("=");
						String actualWorkItemId = CSUFUtils
								.decodeURL(workItemURL.substring(itemIndex + 1, workItemURL.length()));
						if (wItemIdMap.containsKey(actualWorkItemId))
							wItemIdMap.put(actualWorkItemId, wItemIdMap.get(actualWorkItemId) + 1);
						else
							wItemIdMap.put(actualWorkItemId, 1);
						String actionTaken = null;
						String comment = null;
						String currentTaskAction = getCurrentTaskAction(actualWorkItemId);

						try {
							if (StringUtils.isNotBlank(currentTaskAction)) {
								actionTaken = currentTaskAction.split("~")[wItemIdMap.get(actualWorkItemId) - 1];
							}
							String currentTaskComment = getCurrentTaskComment(actualWorkItemId);
							if (StringUtils.isNotBlank(currentTaskComment)) {
								comment = currentTaskComment.split("~")[wItemIdMap.get(actualWorkItemId) - 1];
							}
						} catch (ArrayIndexOutOfBoundsException e) {
							log.error(e.getMessage());
						}
						String viewDetailsLink = "/content/csu/us/en/task-details-readonly.html?wcmmode=disabled";
						wfHistoryJson = CSUFUtils.modifyTaskHistory(wfHistoryJson, actualWorkItemId,
								workItem.getNode().getTitle(), null, workItem.getCurrentAssignee(), startDateStr,
								endDateStr, actionTaken, comment, viewDetailsLink, null, null);
					}
				} else if (StringUtils.isNotBlank(action) && action.equalsIgnoreCase("WorkItemDelegated")) {
					WorkItem workItem = historyItem.getWorkItem();
					if (null != workItem) {
						if (!workItem.getCurrentAssignee().equalsIgnoreCase("system")) {
							startDateStr = CSUFUtils.formatDate(workItem.getTimeStarted().getTime(), resourceBundle);
							endDateStr = CSUFUtils.formatDate(workItem.getTimeEnded().getTime(), resourceBundle);
							workItemAction = "Workitem Delegated by ".concat(historyItem.getUserId());
							wfHistoryJson = CSUFUtils.modifyTaskHistory(wfHistoryJson, null,
									workItem.getNode().getTitle(), null, workItem.getCurrentAssignee(), startDateStr,
									endDateStr, workItemAction, null, null, null, null);
						}
					}
				}
			}
		}

		workItemAction = "Current Task";
		startDateStr = CSUFUtils.formatDate(currentWorkItem.getTimeStarted().getTime(), resourceBundle);
		wfHistoryJson = CSUFUtils.modifyTaskHistory(wfHistoryJson, null, currentWorkItem.getNode().getTitle(), null,
				currentWorkItem.getCurrentAssignee(), startDateStr, null, workItemAction, null, null, null, null);

		return null != wfHistoryJson ? wfHistoryJson.toString() : null;
	}

	@Override
	public String getTaskAssignee(String workItemId) {
		log.debug("Inside getTaskAssignee");
		String assignee = "";
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/TaskAssignee";
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(json.toString()));
		CloseableHttpResponse response = client.execute(post);
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
		assignee = responseStr;
		
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	    return assignee;
	}

	@Override
	public boolean isTaskExistOld(String workItemId) {
		String getTaskDataStmt = "select workitem_id from task_details where workitem_id = ?";
		try (Connection connection = jdbcService.getInboxDBConnection();) {

			// Setting auto commit false here to maintain atomic transactional behavior
			connection.setAutoCommit(false);

			try (PreparedStatement prStmt = connection.prepareStatement(getTaskDataStmt);) {
				prStmt.setString(1, workItemId);
				try (ResultSet resultSet = prStmt.executeQuery();) {
					while (resultSet.next()) {
						String itemId = resultSet.getString("workitem_id");
						connection.commit();
						if (StringUtils.isNotBlank(itemId))
							return true;
					}
				}
			} catch (Exception e) {
				/**
				 * In case of any error, rollback
				 */
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean updateWorkflowInstanceStatus(String workflowInstanceId, String status) {
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			connection.setAutoCommit(false);

			String updateWorkflowStmt = "update task_details set workflow_status = ? where workflow_instance_id = ?";
			try (PreparedStatement prStmt = connection.prepareStatement(updateWorkflowStmt);) {

				prStmt.setString(1, status);
				prStmt.setString(2, workflowInstanceId);

				log.debug("updateWorkflowStmt :::: sql : {}", prStmt.toString());

				int rowAffected = prStmt.executeUpdate();
				log.debug("updateWorkflowStmt :::: rowAffected : {}", rowAffected);

				connection.commit();
				if (rowAffected > 0)
					return true;
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e2) {
			log.error(Arrays.toString(e2.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean updateTaskDescription(String workflowInstanceId, String taskDescription) {
		try (Connection connection = jdbcService.getInboxDBConnection();) {
			connection.setAutoCommit(false);

			String updateWorkflowStmt = "update task_details set task_description = ? where workflow_instance_id = ?";
			try (PreparedStatement prStmt = connection.prepareStatement(updateWorkflowStmt);) {

				prStmt.setString(1, taskDescription);
				prStmt.setString(2, workflowInstanceId);

				log.debug("updateTaskDescriptionStmt :::: sql : {}", prStmt.toString());

				int rowAffected = prStmt.executeUpdate();
				log.debug("updateTaskDescriptionStmt :::: rowAffected : {}", rowAffected);

				connection.commit();
				if (rowAffected > 0)
					return true;
			} catch (Exception e) {
				connection.rollback();
				connection.setAutoCommit(true);
				log.error(Arrays.toString(e.getStackTrace()));
			}
		} catch (SQLException e2) {
			log.error(Arrays.toString(e2.getStackTrace()));
		}
		return false;
	}

	@Override
	public String getTaskDetailsFromProcessingInstance(String url) throws IOException {
		log.debug("enter getTaskDetailsFromProcessingInstance");
		HttpGet get = null;
		CloseableHttpResponse response = null;
		try (CloseableHttpClient httpclient = HttpClients.createDefault();) {
			get = new HttpGet(processingConfig.processingUrl().concat(url));
			String auth = new StringBuffer(processingConfig.userName()).append(":")
					.append(processingConfig.userSecurity()).toString();
			byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
			String authHeader = "Basic " + new String(encodedAuth);
			get.setHeader("AUTHORIZATION", authHeader);
			response = httpclient.execute(get);
			if (null != response && response.getStatusLine().getStatusCode() == 200) {
				return EntityUtils.toString(response.getEntity());
			}
		} catch (IOException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != get) {
				get.completed();
				get.releaseConnection();
			}
			if (null != response)
				response.close();
		}
		return null;
	}

	@Override
	public JsonArray getAllTasks(Session currentUserSession) {
		final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/getMyTasksData";
		JsonArray resultArray = new JsonArray();
		JsonArray jsonArray = new JsonArray();
		try (CloseableHttpClient client = HttpClients.createDefault()) {
			HttpPost post = new HttpPost(dbServiceUrl);
			post.addHeader("Content-Type", "application/json");
			try (CloseableHttpResponse response = client.execute(post)) {
				log.debug("GetAllTasks Response: {}", response.getStatusLine());
				BufferedReader reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
				StringBuilder sb = new StringBuilder();
				String line;
				while ((line = reader.readLine()) != null) {
					sb.append(line);
				}
				resultArray = JsonParser.parseString(sb.toString()).getAsJsonArray();
			}
		} catch (Exception e) {
			log.error("Error calling DB service: {}", e.getMessage(), e);
			return jsonArray; // return empty array
		}
		log.info("After DB fetch (before parsing tasks): {}", LocalTime.now());
		try {
			for (JsonElement element : resultArray) {
				JsonObject obj = element.getAsJsonObject();
				// Validate assignee
				String assignee = getSafe(obj, "assignee");
				boolean isViewTaskAllowed = inboxService.isViewInboxTaskAllowed(currentUserSession, assignee);
				/*if (!isViewTaskAllowed) {
					continue;
				}*/
				JsonObject jsonObj = new JsonObject();
				jsonObj.addProperty("isViewTaskAllowed", "true");
				jsonObj.addProperty("isAssigneeAGroup", "false");
				jsonObj.addProperty("isViewTaskDetailsAllowed", "true");
				jsonObj.addProperty("isCurrentUserAdmin", "false");
				jsonObj.addProperty("currentUserId", "yjayaram@fullerton.edu");

				// ----- AEM Permission Block -----
				/*jsonObj.addProperty("isViewTaskAllowed", isViewTaskAllowed);
				jsonObj.addProperty("isAssigneeAGroup", CSUFUtils.isAuthorizableAGroup(currentUserSession, assignee));
				log.info("Test1=" +CSUFUtils.isAuthorizableAGroup(currentUserSession, assignee));
				
				jsonObj.addProperty("isViewTaskDetailsAllowed",
						inboxService.isViewTaskDetailsAllowed(currentUserSession, assignee));
				jsonObj.addProperty("isCurrentUserAdmin", inboxService.isCurrentUserAdmin(currentUserSession));
				jsonObj.addProperty("currentUserId", inboxService.getCurrentUserId(currentUserSession));
				log.info("Test2=" +inboxService.getCurrentUserId(currentUserSession));*/

				// ----- Standard Fields -----
				jsonObj.addProperty("task_title", obj.get("task_title").getAsString());
				jsonObj.addProperty("priority", getSafe(obj, "priority"));
				jsonObj.addProperty("task_description", getSafe(obj, "task_description"));
				jsonObj.addProperty("assignee", assignee);
				jsonObj.addProperty("workflow_model", getSafe(obj, "workflow_model"));
				jsonObj.addProperty("status", getSafe(obj, "status"));
				// ----- START DATE conversion -----
				String startDate = getSafe(obj, "start_date");
				if (StringUtils.isNotBlank(startDate)) {
					Date formattedDate = CSUFUtils.convertStringToDate(startDate, DATE_FORMAT_DB);
					if (formattedDate != null) {
						jsonObj.addProperty("start_date", CSUFUtils.convertDateToString(formattedDate, DATE_FORMAT_US));
						
					}
				}

				// ----- DUE DATE -----
				jsonObj.addProperty("DUE_DATE", getSafe(obj, "DUE_DATE"));
				// ----- Workflow identifiers -----
				jsonObj.addProperty("workflow_instance_id", getSafe(obj, "workflow_instance_id"));
				jsonObj.addProperty("workitem_id", getSafe(obj, "workitem_id"));

				jsonObj.addProperty("action_taken", (String) null);
				jsonObj.addProperty("task_submit_comment", (String) null);

				// Routes
				jsonObj.addProperty("routes_data", getSafe(obj, "routes_data"));

				// ----- Flags -----
				if (!processingConfig.dbType().equalsIgnoreCase("ORACLE")) {
					//jsonObj.addProperty("show_submit", getSafe(obj, "show_submit"));
					jsonObj.addProperty("show_submit", true);
					jsonObj.addProperty("show_save", getSafe(obj, "show_save"));
					jsonObj.addProperty("show_reset", getSafe(obj, "show_reset"));
					jsonObj.addProperty("show_action_taken", getSafe(obj, "show_action_taken"));
					jsonObj.addProperty("show_comment", getSafe(obj, "show_comment"));
				} else {
					//jsonObj.addProperty("show_submit", bool(obj, "show_submit"));
					jsonObj.addProperty("show_submit", true);
					jsonObj.addProperty("show_save", bool(obj, "show_save"));
					jsonObj.addProperty("show_reset", bool(obj, "show_reset"));
					jsonObj.addProperty("show_action_taken", bool(obj, "show_action_taken"));
					jsonObj.addProperty("show_comment", bool(obj, "show_comment"));
				}
				
				jsonArray.add(jsonObj);
			}

		} catch (Exception e) {
			log.error("Error processing JSON: {}", e.getMessage(), e);
		}

		return jsonArray;
	}

	private String getSafe(JsonObject obj, String key) {
		return obj.has(key) && !obj.get(key).isJsonNull() ? obj.get(key).getAsString() : "";
	}

	private String bool(JsonObject obj, String key) {
		return String.valueOf(CSUFUtils.getBooleanEquivalent(getSafe(obj, key)));
	}
	
	@Override
	public boolean isTaskExist(String workItemId) {
		if (StringUtils.isBlank(workItemId)) {
	        return false;
	    }
	    final String dbServiceUrl = "https://myformstst.fullerton.edu/bin/TaskServletNew";
	    boolean taskExists = false;
	    JSONObject json = new JSONObject();
	    json.put("workItemId", workItemId);
		json.put("action", "isTaskExists");
		try {
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(dbServiceUrl);
		post.addHeader("Content-Type", "application/json");
		post.setEntity(new StringEntity(json.toString()));
		CloseableHttpResponse response = client.execute(post);
		String responseStr = EntityUtils.toString(response.getEntity()).trim();
        taskExists = Boolean.parseBoolean(responseStr);
		
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	    return taskExists;
	}
}