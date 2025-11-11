package com.csuf.cloud.core.services.impl;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.ReminderEmailFactoryConfig;
import com.csuf.cloud.core.services.ReminderEmailFactoryConfigService;

@Component(immediate = true, service = ReminderEmailFactoryConfigService.class, configurationPolicy = ConfigurationPolicy.REQUIRE, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus",
		Constants.SERVICE_DESCRIPTION + "=Send Reminder Mails for workflow assign task steps", })
@Designate(ocd = ReminderEmailFactoryConfig.class, factory = true)
public class ReminderEmailFactoryConfigServiceImpl implements ReminderEmailFactoryConfigService {

	@SuppressWarnings("unused")
	private final static Logger log = LoggerFactory.getLogger(ReminderEmailFactoryConfigServiceImpl.class);

	private ReminderEmailFactoryConfig config;

	@Activate
	protected void activate(ReminderEmailFactoryConfig config) {
		this.config = config;
		// log.info("The " + this.getClass().getName() + " service now active");
	}

	@Modified
	public void modified(ReminderEmailFactoryConfig config) throws Exception {
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
	public String cronExpression() {
		return config.cronExpression();
	}

	@Override
	public String reminderEmailFromAddress() {
		return config.reminderEmailFromAddress();
	}
	@Override
	public List<String> reminderTemplateVariables() {
		return Arrays.asList(config.reminderTemplateVariables());
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
	public String reminderEmailEmbeddedImagePath() {
		return config.reminderEmailEmbeddedImagePath();
	}

	@Override
	public String reminderEmailFromName() {
		if (StringUtils.isBlank(config.reminderEmailFromName())
				&& StringUtils.isNotBlank(config.reminderEmailFromAddress())) {
			return config.reminderEmailFromAddress();
		}
		return config.reminderEmailFromName();
	}

	@Override
	public int dayInterval() {
		return config.dayInterval();
	}
	
	@Override
	public boolean intervalFlag() {
		return config.intervalFlag();
	}

	
}
