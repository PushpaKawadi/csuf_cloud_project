package com.csuf.cloud.core.models;

import static org.apache.sling.api.resource.ResourceResolver.PROPERTY_RESOURCE_TYPE;

import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.TaskService;

@Model(adaptables = Resource.class)
public class FederalAidRefundVerificationInboxReportModel {

	@ValueMapValue(name = PROPERTY_RESOURCE_TYPE, injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = "No resourceType")
	protected String resourceType;

	protected final Logger log = LoggerFactory.getLogger(getClass());

	@OSGiService
	private TaskService taskService;

	private String federalAidRefundVerificationReportJsonArray;

	@PostConstruct
	protected void init() {
		try {
			federalAidRefundVerificationReportJsonArray = taskService
					.getTaskDetailsFromProcessingInstance("/bin/getInboxReport?workflowType=FEDERAL_AID_REFUND_VERIFICATION");
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

	public String getFederalAidRefundVerificationReportJsonArray() {
		return federalAidRefundVerificationReportJsonArray;
	}
}