package com.csuf.cloud.core.services;


import java.util.List;

import javax.jcr.Session;

import org.apache.sling.api.resource.ResourceResolver;

public interface WorkflowAdministrationConfigService {

	String[] getDelegateGroupList();

	boolean getAuthorisedWorkflowAdministrators(String workflowTitle, String uid, Session session, String[] userArray);

	boolean isAssigneeAGroup(String assignee, Session session);
	
	boolean isUserAMemberOfGroup(String assignee, String userid, Session session);
	
	boolean getAuthorisedUsersforTermination(String workflowTitle, String uid, Session session, String[] userArray);
	
	String[] delegateInReportGroupList();
	
	String[] terminateInReportGroupList();
	
	String[] groupWFList();
	
	String[] supDocAllowedTypesWFList();
	
	String getUserName(String assignee, Session session);
}
