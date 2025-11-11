package com.csuf.cloud.core.models;

import static org.apache.sling.api.resource.ResourceResolver.PROPERTY_RESOURCE_TYPE;

import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.InboxReportService_Old;
import com.csuf.cloud.core.services.TaskService;

@Model(adaptables = Resource.class)
public class LateAddsInboxReportModel {

	@ValueMapValue(name = PROPERTY_RESOURCE_TYPE, injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = "No resourceType")
	protected String resourceType;

	protected final Logger log = LoggerFactory.getLogger(getClass());

	@OSGiService
	private TaskService taskService;

	@OSGiService
	private InboxReportService_Old inboxReportService;

	@OSGiService
	private GlobalConfigService globalConfigService;

	private String lateaDDSReportJsonArray;

	@PostConstruct
	protected void init() {
		try {
			lateaDDSReportJsonArray = taskService
					.getTaskDetailsFromProcessingInstance("/bin/getInboxReport?workflowType=LATE_ADDS");
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	public String getLateaDDSReportJsonArray() {
		return lateaDDSReportJsonArray;
	}
}