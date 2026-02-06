package com.csuf.cloud.core.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.PersistenceException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = { SlingHttpServletRequest.class }, adapters = {
		ResourceDuplicationModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ResourceDuplicationModel {

	Logger logger = LoggerFactory.getLogger(ResourceDuplicationModel.class);

	@SlingObject
	private SlingHttpServletRequest request;

	@Inject
	private String resourcePath;

	@Inject
	private String resourceName;

	@Inject
	@Via("resource")
	private int repeatCount;

	private List<Resource> duplicatedResourceList;

	/**
	 * Node Type for creating dynamic nodes.
	 */
	public static final String NODE_TYPE = "sling:resourceType";

	@PostConstruct
	protected void postConstruct() {
		//logger.debug("inside post construct of ResourceDuplicationModel");
		duplicatedResourceList = new ArrayList<>();
		for (int i = 0; i < repeatCount; i++) {
			// Resource resource = request.getResourceResolver().getResource(resourcePath);
			// duplicatedResourceList.add(resource);

			if (repeatCount > 0 && StringUtils.isNotBlank(resourcePath) && StringUtils.isNotBlank(resourceName)) {
				try {
					duplicatedResourceList = this.createComponents(request.getResource(), repeatCount, NODE_TYPE,
							resourcePath, resourceName);
                    logger.info("duplicatedResourceList--{}--{}",duplicatedResourceList,duplicatedResourceList.size());
				} catch (PersistenceException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public Resource createComponent(Resource resource, String suffix, String nodeType, String nodePath,
			String resourceName) throws PersistenceException {
		ResourceResolver resourceResolver = resource.getResourceResolver();
		Map<String, Object> componentProperties = new HashMap<>();
		componentProperties.put(nodeType, nodePath);
		Resource childResource = null;
		String childResourceName = resourceName.concat(suffix);
		childResource = resource.getChild(childResourceName);

		if (childResource == null) {
			childResource = resourceResolver.create(resource, childResourceName, componentProperties);
			resourceResolver.commit();
		}
        logger.info("child resource duplicate model--{}",childResource.getPath());

		return childResource;
	}

	public List<Resource> createComponents(Resource resource, int compCount, String nodeType, String nodePath,
			String resourceName) throws PersistenceException {
		List<Resource> resourceList = new ArrayList<>();
		Map<String, Object> componentProperties = new HashMap<>();
		componentProperties.put(nodeType, nodePath);
		Resource childResource = null;
		for (int i = 0; i < compCount; i++) {
			String childResourceName = resourceName + String.valueOf(i + 1);
			childResource = resource.getChild(childResourceName);

			if (childResource == null) {
                ResourceResolver resourceResolver = resource.getResourceResolver();
				childResource = resourceResolver.create(resource, childResourceName, componentProperties);
                logger.info("child resource second duplicate model--{}",childResource.getPath());
                resourceResolver.commit();
			}
			resourceList.add(childResource);
		}
        logger.info("resourceList duplicate model--{}",resourceList);
		return resourceList;
	}

	public String getResourcePath() {
		return resourcePath;
	}

	public int getRepeatCount() {
		return repeatCount;
	}

	public List<Resource> getDuplicatedResourceList() {
		return duplicatedResourceList;
	}

	public String getResourceName() {
		return resourceName;
	}
}