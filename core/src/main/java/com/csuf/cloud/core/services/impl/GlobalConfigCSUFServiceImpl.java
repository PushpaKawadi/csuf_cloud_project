package com.csuf.cloud.core.services.impl;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.csuf.cloud.core.config.GlobalConfigAEMCSU;
import com.csuf.cloud.core.service.GlobalConfigCSUFService;

@Component(service = GlobalConfigCSUFService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Global Config Filenet Service" })

@Designate(ocd = GlobalConfigAEMCSU.class)

public class GlobalConfigCSUFServiceImpl implements GlobalConfigCSUFService {

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	private GlobalConfigAEMCSU configNew;

/*	@Activate
	@Modified
	public void activate(GlobalConfigAEMCSU configNew) {
		this.configNew = configNew;
		log.error("configNew=" + configNew.toString());
	}*/
	
	@Activate
	public void activate(GlobalConfigAEMCSU configNew) {
	    this.configNew = configNew;
	    log.info("Service activated with config: {}", configNew.toString());
	}

	@Modified
	public void modified(GlobalConfigAEMCSU configNew) {
	    this.configNew = configNew;
	    log.info("Configuration modified: {}", configNew.toString());
	}

	@Override
	public String getGradeChangeFilenetURL() {
		log.info("Filenet Value Pushpa=" + configNew.grade_Change_Filenet_URL());
		return configNew.grade_Change_Filenet_URL();
	}

}
