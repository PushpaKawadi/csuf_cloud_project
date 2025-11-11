package com.csuf.cloud.core.config;

import java.util.List;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration Parameters for Workflow Administration
 * 
 * @author 104745
 */

@ObjectClassDefinition(name = "Workflow Administration Configuration", description = "Configuration Parameters for Workflow Administration")
public @interface WorkflowAdministrationConfig {	

	@AttributeDefinition(name = "Workitem Delegation User Group List", description = "List of groups whose member users can delegate the workitem")
	String[] delegateGroupList() default { "ARSC-Reviewers" };	
	
	@AttributeDefinition(name = "Inbox Report Delegation User Group List", description = "List of groups whose member users can delegate the workitem in Inbox Report")
	String[] delegateInReportGroupList() default { "Admission Appeals~ARSC-Reviewers" };	
	
	@AttributeDefinition(name = "Group Workflow List", description = "List of group workflows")
	String[] groupWFList() default { "ARSC-Reviewers" };
	
	@AttributeDefinition(name = "Inbox Report Termination User Group List", description = "List of groups or users authorize to terminate the workitem in Inbox Report")
	String[] terminateInReportGroupList() default { "Admission Appeals~ARSC-Reviewers" };
	
	@AttributeDefinition(name = "Workflows With Exceptional Task Attachment Extensions", description = "List of workflows to manage extensions for the task attachments")
	String[] supDocAllowedTypesWFList() default { "Staff Performance Evaluation" };
}