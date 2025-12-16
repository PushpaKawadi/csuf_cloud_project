package com.csuf.cloud.core.services.impl;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.GlobalConfigAEMCSU;
import com.csuf.cloud.core.services.GlobalConfigService;

@Component(service = GlobalConfigService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Global Config Service" })

//@Designate(ocd = GlobalConfigAEMCSU.class)
public class GlobalConfigServiceImpl implements GlobalConfigService {

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	private static final String SUB_SERVICE_NAME = "datawrite";

	private static final String CONFIGURE_SYSTEM_MAINTENANCE_PAGE_PATH = "/content/csu/us/configure-system-maintenence/jcr:content";
	private static final String SYSTEM_MAINTENANCE_PROPERTY = "isSystemUnderMaintenance";
	private static final String SYSTEM_MAINTENANCE_PROPERTY_YES_VALUE = "yes";

	private GlobalConfigAEMCSU configNew;

	// Inject a Sling ResourceResolverFactory
	@Reference
	private ResourceResolverFactory resolverFactory;
	

	//@Override
	/*public ResourceResolver getResourceResolver() throws LoginException {
        ResourceResolver resolver = null;
        
        log.info("Anagha Resolver========"+resolverFactory.getServiceResourceResolver(
				Collections.singletonMap(ResourceResolverFactory.SUBSERVICE, (Object) SUB_SERVICE_NAME)));
		return resolver = resolverFactory.getServiceResourceResolver(
				Collections.singletonMap(ResourceResolverFactory.SUBSERVICE, (Object) SUB_SERVICE_NAME));
	}*/
	
	 
    /*@Override
    public ResourceResolver getResourceResolver() throws LoginException {

       
    	
        Map<String, Object> params = new HashMap<>();
        params.put(ResourceResolverFactory.SUBSERVICE, SUB_SERVICE_NAME);
        ResourceResolver resolver = null;
        log.info(" Requesting service resolver for subservice {}", SUB_SERVICE_NAME);

        try {
         resolver = resolverFactory.getServiceResourceResolver(params);
        log.info("resolver object -{}",resolver);
        //ResourceResolver resolver = request.getResourceResolver();
        log.info("Service resolver obtained successfully");
        } catch(Exception e) {
        	log.error("Not able to fetch resource reoslver {}--{}",e,e.getMessage());
        }

        return resolver;
    }*/
    
    @Override
    public ResourceResolver getResourceResolver() {
        ResourceResolver resolver = null;
        log.info("Requesting service resolver for subservice '{}'", SUB_SERVICE_NAME);

        Map<String, Object> params = new HashMap<>();
        params.put(ResourceResolverFactory.SUBSERVICE, SUB_SERVICE_NAME);

        try {
            resolver = resolverFactory.getServiceResourceResolver(params);
            log.info("Trincy resolver="+resolver);

            if (resolver != null && resolver.isLive()) {
                log.info("Trincy Service resolver obtained successfully: {}", resolver);
            } else {
                log.error("Trincy Service resolver is null or not live for subservice '{}'", SUB_SERVICE_NAME);
            }
        } catch (LoginException e) {
            log.error("Failed to get service resolver for subservice '{}': {}", SUB_SERVICE_NAME, e.getMessage(), e);
        } catch (Exception e) {
            log.error("Unexpected error while getting service resolver: {}", e.getMessage(), e);
        }

        return resolver; // may be null, handle safely in caller
    }

	@Override
	public Session getAdminSession() {
 
        Session session = null;
		Map<String, Object> param = new HashMap<>();
		param.put(ResourceResolverFactory.SUBSERVICE, SUB_SERVICE_NAME);
		try(ResourceResolver resolver = resolverFactory.getServiceResourceResolver(param)) {

			session = resolver.adaptTo(Session.class);
			if (null != session)
				return session;

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public ResourceResolver getFormsServiceResolver() {
        ResourceResolver resolver = null;
		HashMap<String, Object> param = new HashMap<>();
		param.put("sling.service.subservice", "getformsresourceresolver");

		try {
            resolver = resolverFactory.getServiceResourceResolver(param);
		} catch (LoginException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
        return resolver;

    }

	@Override
	public Boolean isSystemUnderMaintenance(Session session) {
		try {
			Node node = JcrUtils.getNodeIfExists(CONFIGURE_SYSTEM_MAINTENANCE_PAGE_PATH, session);

			if (node != null && node.hasProperty(SYSTEM_MAINTENANCE_PROPERTY)) {
				String isSystemUnderMaintenance = node.getProperty(SYSTEM_MAINTENANCE_PROPERTY).getString();
				if (StringUtils.isNotBlank(isSystemUnderMaintenance)
						&& isSystemUnderMaintenance.equalsIgnoreCase(SYSTEM_MAINTENANCE_PROPERTY_YES_VALUE)) {
					log.debug("{} : {}", SYSTEM_MAINTENANCE_PROPERTY, isSystemUnderMaintenance);
					return true;
				} else
					return false;
			}
		} catch (RepositoryException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

//	@Override
//	public String getGradeChangeFilenetURL() {	
//		log.error(" Pushpa Grade Change Filenet Value="+configNew.grade_Change_Filenet_URL());
//		return configNew.grade_Change_Filenet_URL();
//	}

}
