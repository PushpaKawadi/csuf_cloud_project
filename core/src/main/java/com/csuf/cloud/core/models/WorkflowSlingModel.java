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

@Model(adaptables = Resource.class)
public class WorkflowSlingModel {

	@ValueMapValue(name = PROPERTY_RESOURCE_TYPE, injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = "No resourceType")
	protected String resourceType;

	protected final Logger log = LoggerFactory.getLogger(getClass());

	private static final String ASSIGN_TASK_STEP = "forms:assigntask";

	@OSGiService
	private InboxReportService_Old inboxReportService;

	@OSGiService
	private GlobalConfigService globalConfigService;

	private String scwReportJsonArray;

	@PostConstruct
	protected void init() {
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		try {
			resolver = globalConfigService.getResourceResolver();
			wfSession = resolver.adaptTo(WorkflowSession.class);
			WorkItem[] workItems = wfSession.getActiveWorkItems();
			JsonArray jsonResponse = new JsonArray();
			JsonObject json = null;
			int count = 1;
			for (int i = 0; i < workItems.length; i++) {
				WorkItem wItem = workItems[i];
				if (null != wItem && null != wItem.getItemSubType()
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && wItem.getWorkflow()

								.getWorkflowModel().getTitle().trim().matches("Student Course Withdrawal"))
								|| (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
										&& wItem.getWorkflow().getWorkflowModel().getTitle().trim()
												.matches("Student Course Withdrawal - Summer Session"))
								|| (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
										&& wItem.getWorkflow().getWorkflowModel().getTitle().trim()
												.matches("Student Course Withdrawal - Winter Session")))) {
					json = inboxReportService.getSCWReport(resolver, wfSession, wItem, count);

					if (null != json && json.isJsonObject() && (json.has("courseNo") || json.has("isMedical"))) {
						jsonResponse.add(json);
						count += 1;
					}
				}
			}
			log.debug("total WorkItems count is: {}", count);
			scwReportJsonArray = jsonResponse.toString();
		} catch (LoginException | WorkflowException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
	}

	public String getScwReportJsonArray() {
		return scwReportJsonArray;
	}
}