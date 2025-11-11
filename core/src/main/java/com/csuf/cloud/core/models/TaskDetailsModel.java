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

import com.google.gson.JsonArray;
import com.csuf.cloud.core.services.TaskService;

@Model(adaptables = Resource.class)
public class TaskDetailsModel {

	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@ValueMapValue(name = PROPERTY_RESOURCE_TYPE, injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = "No resourceType")
	protected String resourceType;

	@SlingObject
	private ResourceResolver resourceResolver;

	@OSGiService
	private TaskService taskService;

	private String tasks;

	@PostConstruct
	protected void init() {
		Session currentUserSession = null;
		try {
			currentUserSession = resourceResolver.adaptTo(Session.class);
			JsonArray tasksJson = taskService.getAllTasks(currentUserSession);
			if (null != tasksJson && !tasksJson.isJsonNull()) {
				tasks = tasksJson.toString();
				log.debug("tasks count in database : {}", tasksJson.size());
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	public String getTasks() {
		return tasks;
	}
}
