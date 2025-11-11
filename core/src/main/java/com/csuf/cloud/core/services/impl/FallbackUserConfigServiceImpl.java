package com.csuf.cloud.core.services.impl;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.FallbackUserDetailsConfig;
import com.csuf.cloud.core.services.FallbackUserConfigService;

@Component(immediate = true, service = FallbackUserConfigService.class, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus", Constants.SERVICE_DESCRIPTION + "=Workflow Config Service", })
@Designate(ocd = FallbackUserDetailsConfig.class)
public class FallbackUserConfigServiceImpl implements FallbackUserConfigService {

	private final static Logger log = LoggerFactory.getLogger(FallbackUserConfigServiceImpl.class);

	private FallbackUserDetailsConfig userConfig;

	@Activate
	protected void activate(FallbackUserDetailsConfig userConfig) {
		this.userConfig = userConfig;
		//log.info("The " + this.getClass().getName() + " service now active");
	}

	@Deactivate
	public void deactive(FallbackUserDetailsConfig userConfig) throws Exception {
		this.userConfig = null;
		//log.info("The " + this.getClass().getName() + " service now deactivated");
	}

	@Modified
	public void modified(FallbackUserDetailsConfig userConfig) throws Exception {
		this.userConfig = userConfig;
		//log.info("The " + this.getClass().getName() + " has been modified");
	}

	@Override
	public String fallbackUserEmailAddress() {
		return userConfig.fallbackUserEmailAddress();
	}

	@Override
	public String fallbackUserFullName() {
		return userConfig.fallbackUserFullName();
	}

	@Override
	public String fallbackUserId() {
		return userConfig.fallbackUserId();
	}

}
