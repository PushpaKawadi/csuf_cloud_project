package com.csuf.cloud.core.config;

import org.apache.commons.lang3.StringUtils;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration Parameters for Workflow
 * 
 * @author 105876
 */

@ObjectClassDefinition(name = "Workflow Scheduler Configuration", description = "Workflow Configuration for scheduling the tasks")
public @interface WorkflowConfig {

	@AttributeDefinition(name = "Workflow Model List", description = "List of Workflow models that we want to scan for workflow delegations and auto advancement")
	String[] getWorkflowModels() default {};

	@AttributeDefinition(name = "Report Viewers Group List", description = "List of groups whose member users can view Inbox Reports")
	String[] reportViewersGroupList() default { "HR-Reviewers", "ARSC-Reviewers" };

	@AttributeDefinition(name = "Send Reminder Emails Interval (In seconds)", description = "Reminder emails will be sent to the task assignee once this period has reached and the current assignee has not taken any action", type = AttributeType.LONG)
	public long reminderInterval() default 30L;

	@AttributeDefinition(name = "Reminder Task Titles", description = "List of Assign Task Titles that we want to scan for sending reminder emails")
	String[] reminderTaskTitles() default {};

	@AttributeDefinition(name = "Send Reminder Email From Address", description = "From Address for sending reminder emails")
	String reminderEmailFromAddress() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Send Reminder Email To Addresses", description = "To Addresses for sending reminder emails")
	String[] reminderEmailToAddresses() default {};

	@AttributeDefinition(name = "Send Reminder Email Cc Addresses", description = "Cc Addresses for sending reminder emails")
	String[] reminderEmailCcAddresses() default {};

	@AttributeDefinition(name = "Send Reminder Email Bcc Addresses", description = "Bcc Addresses for sending reminder emails")
	String[] reminderEmailBccAddresses() default {};

	@AttributeDefinition(name = "Send Reminder Email Subject", description = "Subject for sending reminder emails")
	String reminderEmailSubject() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Send Reminder Email Template Path", description = "Template Path for sending reminder emails")
	String reminderEmailTemplatePath() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Send Reminder Email Embedded Image Path", description = "Embedded Image Path for sending reminder emails")
	String reminderEmailEmbeddedImagePath() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Is Start TLS ?", description = "Is Start TLS setting required by the configured SMTP server for sending reminder emails ?", type = AttributeType.BOOLEAN)
	boolean isStartTLS() default false;

	@AttributeDefinition(name = "Assign Task to Delegatee Interval (In seconds)", description = "Task will be delegated to other user in the assignee group once this period has reached and the current assignee has not taken any action", type = AttributeType.LONG)
	public long assignTaskToDelegateeInterval() default 120L;

	@AttributeDefinition(name = "Delegatee Task Titles", description = "List of Assign Task Titles that we want to scan to delgate to another user in the assignee group")
	String[] delegateeTaskTitles() default {};

	@AttributeDefinition(name = "Send Email after Delegation ?", description = "If checked, it will send an email to the delegatee", type = AttributeType.BOOLEAN)
	boolean isSendEmailAfterDelegation() default false;

	@AttributeDefinition(name = "Task Auto Advance Interval (In seconds)", description = "Assign Task workitem will auto advance to next step in the workflow once this period has reached and the current assignee has not taken any action", type = AttributeType.LONG)
	public long taskAutoAdvanceInterval() default 180L;

	@AttributeDefinition(name = "Auto Advance Task Titles", description = "List of Assign Task Titles that we want to scan to auto advance Assign Task workitem to next step in the workflow")
	String[] autoAdvanceTaskTitles() default {};

	@AttributeDefinition(name = "Auto Advance Routes", description = "List of all possible Routes that we want to scan to auto advance Assign Task workitem to next step in the workflow")
	String[] autoAdvanceRoutes() default {};

	@AttributeDefinition(name = "Auto Advance Metadata Field", description = "Metadata Boolean Field that needs to be set when Assign Task workitem auto advances to next step in the workflow")
	String autoAdvanceMetadataField() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Send Email after Auto Advance ?", description = "If checked, it will send an email to the new assignee after auto advancement", type = AttributeType.BOOLEAN)
	boolean isSendEmailAfterAutoAdvance() default false;
}