package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.w3c.dom.Element;

/**
 * Configuration Parameters for sending Reminder Mails for workflow assign task
 * steps
 * 
 * @author 104745
 */


@ObjectClassDefinition(name = "Bulk Approval Workflow Configuration", description = "approval of bulk workflow assign task steps")
public @interface BulkApprovalFactoryConfig {

	@AttributeDefinition(name = "Unique Identifier", description = "Unique Identifier string for this configuration, for e.g. config1", required = true)
	String uniqueIdentifier();

	@AttributeDefinition(name = "Task Title", description = "Assign Task Title that we want to scan for approving the tasks", required = true)
	String taskTitle();

	@AttributeDefinition(name = "Bulk Approval Workflow Model", description = "Workflow Model for the Assign Task Title that we want to scan for approving the tasks", required = true)
	String workflowModel();

	@AttributeDefinition(name = "XML Fields To Be Updated", description = "XML fields to be updated while approving the tasks", required = true)
	String[] xmlFieldsToUpdate();

	@AttributeDefinition(name = "Action Buttons", description = "Action to be taken for completeing the tasks", required = true)
	String actionToBeTaken();

	@AttributeDefinition(name = "Bulk Approval Routes", description = "Routes for the Assign Task that we want to scan for approving the tasks", required = true)
	String getRoutes();
	
	@AttributeDefinition(name = "Bulk Approval XML Root Element Name", description = "XML Root Element Name to Update", required = true)
	String xmlElement();
	
	@AttributeDefinition(name = "Bulk Approval Action Metadata Field", description = "Action Variable to Update", required = true)
	String actionMetadataField();
}