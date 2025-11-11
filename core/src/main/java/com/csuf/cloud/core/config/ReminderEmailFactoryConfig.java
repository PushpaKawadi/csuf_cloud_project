package com.csuf.cloud.core.config;

import org.apache.commons.lang3.StringUtils;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration Parameters for sending Reminder Mails for workflow assign task
 * steps
 * 
 * @author 105876
 */

@ObjectClassDefinition(name = "Reminder Email Configuration", description = "send Reminder Mails for workflow assign task steps")
public @interface ReminderEmailFactoryConfig {

	@AttributeDefinition(name = "Unique Identifier", description = "Unique Identifier string for this configuration, for e.g. config1", required = true)
	String uniqueIdentifier();

	@AttributeDefinition(name = "Task Title", description = "Assign Task Title that we want to scan for sending reminder emails", required = true)
	String taskTitle();

	@AttributeDefinition(name = "Reminder Workflow Model", description = "Workflow Model for the Assign Task Title that we want to scan for sending reminder emails", required = true)
	String workflowModel();

	@AttributeDefinition(name = "Day Interval", description = "Number of days to be passed after creation of task to trigger reminder emails ", type = AttributeType.INTEGER)
	int dayInterval() default 3;

	@AttributeDefinition(name = "Cron Expression", description = "By default it will run every weekday at 01:00 hours local server time", type = AttributeType.STRING)
	String cronExpression() default "0 0 1 ? * MON-FRI *";

	@AttributeDefinition(name = "Send Reminder Email From Address", description = "From Address for sending reminder emails", required = true)
	String reminderEmailFromAddress();

	@AttributeDefinition(name = "Send Reminder Email From Name", description = "From Name for sending reminder emails", required = true)
	String reminderEmailFromName();

	@AttributeDefinition(name = "Send Reminder Email To Addresses", description = "To Addresses for sending reminder emails", required = true)
	String[] reminderEmailToAddresses();
	
	@AttributeDefinition(name = "Send Reminder Template Variables", description = "Template variables for sending reminder emails", required = true)
	String[] reminderTemplateVariables();

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
	
	@AttributeDefinition(name = "Is Regular Interval ?", description = "Is Regular Interval setting required by job for sending reminder emails ?", type = AttributeType.BOOLEAN)
	boolean intervalFlag() default false;
}