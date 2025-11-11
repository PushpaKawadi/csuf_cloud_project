package com.csuf.cloud.core.models;

import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.TaskService;
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

@Model(adaptables = { Resource.class })
public class WhereIsMyFormDataModel {
	@ValueMapValue(name = "sling:resourceType", injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = { "No resourceType" })
	protected String resourceType;
	protected final Logger log = LoggerFactory.getLogger(getClass());
	@OSGiService
	private TaskService taskService;
	private String workflowArray;
	@SlingObject
	private ResourceResolver resourceResolver;
	@OSGiService
	private GlobalConfigService globalConfigService;

	@PostConstruct
	protected void init() {
		try {
			String uid = ((Session) resourceResolver.adaptTo(Session.class)).getUserID();
			workflowArray = taskService.getTaskDetailsFromProcessingInstance(
					"/bin/workflowData?action=GET_MY_SUBMISSION_DATA&userId=".concat(uid));
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	public String getWorkflowArray() {
		return workflowArray;
	}
}