package com.csuf.cloud.core.services;

import java.util.List;
import org.w3c.dom.Element;

public interface BulkApprovalFactoryConfigService {

	String uniqueIdentifier();

	String taskTitle();

	String workflowModel();

	List<String> xmlFieldsToUpdate();

	String actionToBeTaken();	
	
	List<String> getRoutes();
	
	String xmlElement();
	
	String actionMetadataField();
	

}
