package com.csuf.cloud.core.services;


import java.util.List;

public interface WorkflowConfigService {

	long reminderInterval();

	long taskAutoAdvanceInterval();

	long assignTaskToDelegateeInterval();

	List<String> getToBeScannedWorkflowModels();

	List<String> getReminderTaskTitles();

	String reminderEmailFromAddress();

	List<String> reminderEmailToAddresses();

	List<String> reminderEmailCcAddresses();

	List<String> reminderEmailBccAddresses();

	String reminderEmailSubject();

	String reminderEmailTemplatePath();
	
	String reminderEmailEmbeddedImagePath();

	boolean isStartTLS();

	List<String> getDelegateeTaskTitles();

	boolean isSendEmailAfterDelegation();

	List<String> getAutoAdvanceTaskTitles();

	List<String> getAutoAdvanceRoutes();

	String getAutoAdvanceMetadataField();

	boolean isSendEmailAfterAutoAdvance();

}
