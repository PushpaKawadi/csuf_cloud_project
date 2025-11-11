package com.csuf.cloud.core.models;

import static org.apache.sling.api.resource.ResourceResolver.PROPERTY_RESOURCE_TYPE;

import java.util.Arrays;

import javax.annotation.PostConstruct;
import javax.jcr.Session;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.TaskService;

@Model(adaptables = Resource.class)
public class WorkflowInstancesDataModel {

	@ValueMapValue(name = PROPERTY_RESOURCE_TYPE, injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = "No resourceType")
	protected String resourceType;

	protected final Logger log = LoggerFactory.getLogger(getClass());

	@OSGiService
	private TaskService taskService;

	private String workflowInstancesArray;
	
	@SlingObject
	private ResourceResolver resourceResolver;

	@PostConstruct
	protected void init() {
		try {
			String uid = resourceResolver.adaptTo(Session.class).getUserID();
			workflowInstancesArray = taskService.getTaskDetailsFromProcessingInstance(
					"/bin/workflowData?action=GET_ALL_ACTIVE_WORKFLOW_INSTANCES_DATA&userId=".concat(uid));
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	public String getWorkflowInstancesArray() {
		return workflowInstancesArray;
	}
}
