package com.csuf.cloud.core.services.impl;

import java.util.Arrays;
import java.util.List;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.FormAccessConfig;
import com.csuf.cloud.core.services.FormAccessConfigService;

@Component(immediate = true, service = FormAccessConfigService.class, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus", Constants.SERVICE_DESCRIPTION
				+ "=Configuration for providing exclusive access to the users of a group to view and launch a form on forms portal page", })
@Designate(ocd = FormAccessConfig.class)
public class FormAccessConfigServiceImpl implements FormAccessConfigService {

	@SuppressWarnings("unused")
	private final static Logger log = LoggerFactory.getLogger(FormAccessConfigServiceImpl.class);

	private FormAccessConfig config;

	@Activate
	protected void activate(FormAccessConfig config) {
		this.config = config;
	}

	@Override
	public List<String> tagAndUserGroupMapping() {
		return Arrays.asList(config.tagAndUserGroupMapping());
	}

}
