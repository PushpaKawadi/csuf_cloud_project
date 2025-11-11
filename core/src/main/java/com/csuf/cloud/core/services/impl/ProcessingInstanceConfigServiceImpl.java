package com.csuf.cloud.core.services.impl;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.Designate;

import com.csuf.cloud.core.config.ProcessingInstanceConfig;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;

@Component(immediate = true, service = ProcessingInstanceConfigService.class, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus",
		Constants.SERVICE_DESCRIPTION + "=Processing Instance Config Service", })
@Designate(ocd = ProcessingInstanceConfig.class)
public class ProcessingInstanceConfigServiceImpl implements ProcessingInstanceConfigService {

	private ProcessingInstanceConfig config;

	@Activate
	protected void activate(ProcessingInstanceConfig config) {
		this.config = config;
	}

	@Override
	public boolean isProcessingInstance() {
		return config.isProcessingInstance();
	}

	@Override
	public String processingUrl() {
		return config.processingUrl();
	}

	@Override
	public String userName() {
		return config.userName();
	}

	@Override
	public String userSecurity() {
		return config.userSecurity();
	}

	@Override
	public String dbType() {
		return config.dbType();
	}
}
