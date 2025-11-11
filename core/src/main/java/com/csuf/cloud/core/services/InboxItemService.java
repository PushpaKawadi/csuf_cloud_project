package com.csuf.cloud.core.services;

import java.io.IOException;
import java.util.ResourceBundle;

import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.sling.api.resource.ResourceResolver;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * @author 105876
 *
 */
public interface InboxItemService {

	JsonObject getInboxItemStepDetails(ResourceResolver resourceResolver, WorkflowSession wfSession, String workItemId,
			String historyItemId);

	JsonArray getFormsCatalog(Session session) throws RepositoryException;

	boolean isCurrentUserAdmin(Session currentUserSession) throws Exception;

	JsonObject getPreviousStepData(Session serviceUserSession, WorkItem workItem) throws Exception;

	boolean isViewInboxTaskAllowed(Session currentUserSession, String assignee) throws Exception;

	boolean isViewTaskDetailsAllowed(Session currentUserSession, String assignee) throws Exception;

	String getCurrentUserId(Session currentUserSession) throws Exception;

	String getResponseFromProcessingInstance(String url) throws IOException;

	JsonArray getTaskAttachments(ResourceResolver resourceResolver, String workItemId)
			throws RepositoryException, WorkflowException, Exception;

	JsonArray getTaskAttachmentsFromWorkflowInstanceId(ResourceResolver resourceResolver, String workflowInstanceId,
			String attachmentFolderName) throws RepositoryException, WorkflowException, Exception;

	String getInitialSubmissionXMLData(Session serviceUserSession, String workflowId) throws WorkflowException;

	JsonArray getHistoryForWorkItem(Session session, WorkflowSession userWorkflowSession, String workItemId,
			ResourceBundle rb) throws WorkflowException;

	JsonObject getFormDataForCompletedWorkItem(Session serviceUserSession, WorkflowSession userWorkflowSession,
			String curentWorkItemId, String historyWorkItemId, ResourceBundle rb) throws WorkflowException;

	String getHistoryWorkItemXML(Session serviceUserSession, WorkflowSession wfSession, String historyWorkItemId,
			String currentWorkItemId) throws WorkflowException;

	boolean isAuthorizableAMember(Session session, String authorizableId, String[] authorizableGroupsId)
			throws Exception;

	String getldapAccountName(Session session, ResourceResolver resolver);

	JsonArray getAdobeSignAttachmentFromWorkflowInstanceId(ResourceResolver resourceResolver,
			String adobeSignedDocument, String workflowInstanceId, WorkItem workItem, String workItemId);
}