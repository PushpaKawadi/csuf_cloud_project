package com.csuf.cloud.core.services;

import java.util.List;

public interface ReminderEmailFactoryConfigService {

	String uniqueIdentifier();

	String taskTitle();

	String workflowModel();

	int dayInterval();

	String cronExpression();

	String reminderEmailFromAddress();

	String reminderEmailFromName();

	List<String> reminderTemplateVariables();

	List<String> reminderEmailToAddresses();

	List<String> reminderEmailCcAddresses();

	List<String> reminderEmailBccAddresses();

	String reminderEmailSubject();

	String reminderEmailTemplatePath();

	String reminderEmailEmbeddedImagePath();

	boolean isStartTLS();

	boolean intervalFlag();

}
