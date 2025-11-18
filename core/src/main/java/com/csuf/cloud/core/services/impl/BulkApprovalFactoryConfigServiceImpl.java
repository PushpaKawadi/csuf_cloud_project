package com.csuf.cloud.core.services.impl;

import java.util.Arrays;
import java.util.List;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Element;
import com.csuf.cloud.core.config.BulkApprovalFactoryConfig;
import com.csuf.cloud.core.services.BulkApprovalFactoryConfigService;

@Component(immediate = true, service = BulkApprovalFactoryConfigService.class, configurationPolicy = ConfigurationPolicy.REQUIRE, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus",
		Constants.SERVICE_DESCRIPTION + "=Bulk Approval Workflow For Approving The Tasks", Constants.SERVICE_RANKING + ":Integer=100"})
 
@Designate(ocd = BulkApprovalFactoryConfig.class, factory = true)
public class BulkApprovalFactoryConfigServiceImpl implements BulkApprovalFactoryConfigService {

	@SuppressWarnings("unused")
	private final static Logger log = LoggerFactory.getLogger(BulkApprovalFactoryConfigServiceImpl.class);

	private BulkApprovalFactoryConfig config;

	@Activate
	protected void activate(BulkApprovalFactoryConfig config) {
		this.config = config;
		// log.info("The " + this.getClass().getName() + " service now active");
	}

	@Modified
	public void modified(BulkApprovalFactoryConfig config) throws Exception {
		this.config = config;
		// log.info("The " + this.getClass().getName() + " has been modified");
	}

	@Override
	public String uniqueIdentifier() {
		return config.uniqueIdentifier();
	}

	@Override
	public String taskTitle() {
		return config.taskTitle();
	}

	@Override
	public String workflowModel() {
		return config.workflowModel();
	}

	@Override
	public List<String> xmlFieldsToUpdate() {
		return Arrays.asList(config.xmlFieldsToUpdate());
	}

	@Override
	public String actionToBeTaken() {
		return config.actionToBeTaken();
	}

	@Override
	public List<String> getRoutes() {
		return Arrays.asList(config.getRoutes());
	}

	@Override
	public String xmlElement() {
		return config.xmlElement();
	}
	
	@Override
	public String actionMetadataField() {
		return config.actionMetadataField();
	}
}
