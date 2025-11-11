package com.csuf.cloud.core.services.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.WorkflowConfig;
import com.csuf.cloud.core.services.WorkflowConfigService;

@Component(immediate = true, service = WorkflowConfigService.class, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus", Constants.SERVICE_DESCRIPTION + "=Workflow Config Service", })
@Designate(ocd = WorkflowConfig.class)
public class WorkflowConfigServiceImpl implements WorkflowConfigService {

	private final static Logger log = LoggerFactory.getLogger(WorkflowConfigServiceImpl.class);

	private WorkflowConfig config;

	@Activate
	protected void activate(WorkflowConfig config) {
		this.config = config;
		//log.info("The " + this.getClass().getName() + " service now active");
	}

	@Deactivate
	public void deactive(WorkflowConfig config) throws Exception {
		this.config = null;
		//log.info("The " + this.getClass().getName() + " service now deactivated");
	}

	@Modified
	public void modified(WorkflowConfig config) throws Exception {
		this.config = config;
		//log.info("The " + this.getClass().getName() + " has been modified");
	}

	@Override
	public List<String> getToBeScannedWorkflowModels() {
		if (this.config == null) {
			return new ArrayList<String>();
		}

		if (this.config.getWorkflowModels() == null || this.config.getWorkflowModels().length == 0) {
			return new ArrayList<>();
		}

		String[] workflow = this.config.getWorkflowModels();

		return this.getWorkflowList(workflow);
	}

	private List<String> getWorkflowList(String[] workflowArray) {
		if (workflowArray == null || workflowArray.length == 0) {
			return new ArrayList<>();
		}
		return Arrays.asList(workflowArray);
	}

	/**
	 * @return the reminderInterval
	 */
	@Override
	public long reminderInterval() {
		return config.reminderInterval();
	}

	/**
	 * @return the taskAutoAdvanceInterval
	 */
	@Override
	public long taskAutoAdvanceInterval() {
		return config.taskAutoAdvanceInterval();
	}

	/**
	 * @return the assignTaskToDelegateeInterval
	 */
	@Override
	public long assignTaskToDelegateeInterval() {
		return config.assignTaskToDelegateeInterval();
	}

	@Override
	public List<String> getReminderTaskTitles() {
		return Arrays.asList(config.reminderTaskTitles());
	}

	@Override
	public List<String> getDelegateeTaskTitles() {
		return Arrays.asList(config.delegateeTaskTitles());
	}

	@Override
	public List<String> getAutoAdvanceTaskTitles() {
		return Arrays.asList(config.autoAdvanceTaskTitles());
	}

	@Override
	public List<String> getAutoAdvanceRoutes() {
		return Arrays.asList(config.autoAdvanceRoutes());
	}

	@Override
	public String getAutoAdvanceMetadataField() {
		return config.autoAdvanceMetadataField();
	}

	@Override
	public String reminderEmailFromAddress() {
		return config.reminderEmailFromAddress();
	}

	@Override
	public List<String> reminderEmailToAddresses() {
		return Arrays.asList(config.reminderEmailToAddresses());
	}

	@Override
	public List<String> reminderEmailCcAddresses() {
		return Arrays.asList(config.reminderEmailCcAddresses());
	}

	@Override
	public List<String> reminderEmailBccAddresses() {
		return Arrays.asList(config.reminderEmailBccAddresses());
	}

	@Override
	public String reminderEmailSubject() {
		return config.reminderEmailSubject();
	}

	@Override
	public String reminderEmailTemplatePath() {
		return config.reminderEmailTemplatePath();
	}

	@Override
	public boolean isStartTLS() {
		return config.isStartTLS();
	}

	@Override
	public boolean isSendEmailAfterDelegation() {
		return config.isSendEmailAfterDelegation();
	}

	@Override
	public boolean isSendEmailAfterAutoAdvance() {
		return config.isSendEmailAfterAutoAdvance();
	}

	@Override
	public String reminderEmailEmbeddedImagePath() {
		return config.reminderEmailEmbeddedImagePath();
	}
}
