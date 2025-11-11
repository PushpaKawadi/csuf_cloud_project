package com.csuf.cloud.core.services;


import java.io.IOException;
import java.text.ParseException;
import java.util.List;

import javax.jcr.Session;

import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.google.gson.JsonArray;
import com.csuf.cloud.core.vo.WorkflowVO;
import com.csuf.cloud.core.vo.WorkflowFilterVO;

public interface WorkflowService {

	List<String> sendReminder(WorkflowVO workflowVO);

	boolean assignTaskToDelegatee(WorkflowVO workflowVO) throws WorkflowException;
	boolean assignTaskToDelegateeForGroupDelegatee(WorkflowVO workflowVO, String participant) throws WorkflowException;
	boolean completeDeadlinedTask(WorkflowVO workflowVO);

	String getWorkflowDetailsFromProcessingInstance(String workflowInstanceId, String workItemId) throws IOException;

	JsonArray getAllModels(WorkflowSession workflowSession) throws WorkflowException;

	JsonArray getAllActiveWorkflowInstancesData(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, String userid) throws WorkflowException, ParseException;

	boolean terminateWorkflow(WorkflowSession workflowSession, String workflowInstanceId);

	JsonArray getAllActiveWorkitemData(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, Session session, String userid) throws WorkflowException, ParseException;

	JsonArray getAllSubmissionData(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, Session session, String userid) throws WorkflowException, ParseException;

	JsonArray getAllActiveWorkitemDataForBulkApproval(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, Session session, String userid) throws WorkflowException, ParseException;

}
