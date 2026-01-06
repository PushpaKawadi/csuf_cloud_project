package com.csuf.cloud.core.services;


import java.io.IOException;
import java.util.ResourceBundle;

import javax.jcr.Session;

import org.apache.sling.api.resource.ResourceResolver;

import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public interface TaskService {

	JsonObject getTask(String id);

	String deleteTask(String id);

	String saveTask(WorkItem item, ResourceResolver resolver, Session session) throws Exception;

	String getTaskData(String workItemId);

	boolean updateTaskData(String workItemId, String data);

	JsonArray getAllTasks(Session currentUserSession);

	boolean updateTaskAssignee(String workItemId, String assignee);

	boolean isTaskExist(String workItemId);

	String getTaskAssignee(String workItemId);

	boolean updateWorkflowInstanceStatus(String workflowInstanceId, String status);

	boolean updateTaskStatus(String workItemId, String taskStatus, boolean isUpdateTaskStartDate);

	String getTaskDetailsFromProcessingInstance(String url) throws IOException;

	String fetchWorkflowHistory(String workItemId, ResourceResolver resolver, ResourceBundle resourceBundle)
			throws Exception;

	boolean saveCurrentTaskAction(String workItemId, String actionTaken);

	boolean saveCurrentTaskComment(String workItemId, String comment);

	String getWorkflowInstanceIdOld(String workItemId);	
	
	String getWorkflowInstanceId(String workItemId);

	String getAfPath(String workItemId);

	boolean updateTaskDescription(String workflowInstanceId, String taskDescription);
	
	JsonArray getAllTasksCloud(Session currentUserSession);
	
	boolean isTaskExistOld(String workItemId);
	
	String getTaskDataOld(String workItemId);
	
	String getAfPathOld(String workItemId);
	
}
