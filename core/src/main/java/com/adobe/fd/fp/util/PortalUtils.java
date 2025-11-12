/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
package com.adobe.fd.fp.util;

import java.net.URLEncoder;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.jcr.LoginException;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.fd.fp.exception.FormsPortalException;
import com.day.cq.replication.AgentFilter;
import com.day.cq.replication.AgentIdFilter;
import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.ReplicationOptions;
import com.day.cq.replication.Replicator;

public class PortalUtils {

	private static BundleContext bundleContext;

	private final static Logger log = LoggerFactory.getLogger(PortalUtils.class);

	public static BundleContext getBundleContext() {
		return bundleContext;
	}

	// for handling new instance of submission/pending Sign forms, url already
	// contains these prefix we use these to extract the ataachment key
	public static final List<String> attachment_Url_Prefix_List = Arrays
			.asList(FormsPortalConstants.STR_SUBMISSION_PREFIX, FormsPortalConstants.STR_PENDING_SIGN);

	public static void setBundleContext(BundleContext context) {
		bundleContext = context;
	}

	public static Session getFnDServiceUserSession(SlingRepository repository)
			throws LoginException, RepositoryException {
		Session session = repository.loginService(null, null);
		return session;
	}

	public static ResourceResolver getFnDServiceResolver(ResourceResolverFactory resolverFactory)
			throws org.apache.sling.api.resource.LoginException {
		return resolverFactory.getServiceResourceResolver(null);
	}

	@SuppressWarnings("deprecation")
	public static void reverseReplicate(Session session, String path, ReplicationActionType replAction,
			Replicator replicator, String[] outBoxIDs)
			throws FormsPortalException, LoginException, ReplicationException {
		try {
			ReplicationOptions rop = new ReplicationOptions();
			AgentFilter filter = new AgentIdFilter(outBoxIDs);
			rop.setFilter(filter);
//            rop.setSynchronous(true);

			replicator.replicate(session, replAction, path, rop);

		} catch (ReplicationException e) {
			throw new FormsPortalException(e);
		}
	}

	public static Object getService(Class<?> c, String filter) throws Exception {
		Object result = null;
		BundleContext bc = getBundleContext();
		// BundleContext is not a service, but can be injected
		if (c.equals(BundleContext.class)) {
			result = bc;
		} else {
			ServiceReference ref[] = bc.getServiceReferences(c.getName(), filter);
			if (ref != null) {
				result = bc.getService(ref[0]);
			} else {
				ServiceReference serviceRef = bc.getServiceReference(c.getName());
				if (serviceRef != null) {
					result = bc.getService(serviceRef);
				}
			}
		}
		return result;
	}

	public static String getRequestParamValue(SlingHttpServletRequest req, String param) {
		String paramValue = null;
		if (req.getParameter(param) != null)
			paramValue = req.getParameter(param);
		else if (req.getAttribute(param) != null)
			paramValue = req.getAttribute(param).toString();
		return paramValue;
	}

	public static String createUrlFromParams(String url, Map<String, String> params) {
		try {
			boolean firsParameterAdded = url.indexOf("?") != -1;
			Iterator<Map.Entry<String, String>> paramItr = params.entrySet().iterator();
			while (paramItr.hasNext()) {
				Map.Entry<String, String> param = paramItr.next();
				String paramValue = param.getValue();
				String key = param.getKey();
				if (paramValue != null) {
					if (!firsParameterAdded) {
						url += "?" + URLEncoder.encode(key, FormsPortalConstants.STR_DEFAULT_ENCODING) + "="
								+ URLEncoder.encode(paramValue, FormsPortalConstants.STR_DEFAULT_ENCODING);
						firsParameterAdded = true;
					} else {
						url += "&" + URLEncoder.encode(key, FormsPortalConstants.STR_DEFAULT_ENCODING) + "="
								+ URLEncoder.encode(paramValue, FormsPortalConstants.STR_DEFAULT_ENCODING);
					}
				}
			}
		} catch (Exception e) {
			log.error("Error occured while creating url with parameters provided", e);
		}
		return url;
	}

	/**
	 * This method updates the obselete map in case of draft/submission and pending
	 * Sign instances
	 * 
	 * @param id
	 * @param fileAttachmentMap
	 * @param type
	 * @return updated json map
	 */
	public static JSONObject updateAttachmentMap(String id, String fileAttachmentMap, String type) {
		try {
			JSONObject fileJson = new JSONObject(fileAttachmentMap);
			Iterator<String> somExpressionItr = fileJson.keys();
			/*
			 * iterate through every file attachment Node which may contain multiple files
			 */
			while (somExpressionItr.hasNext()) {
				StringBuffer attachmentUrlList = null;
				String somKey = (String) somExpressionItr.next();
				String stringifiedAttachmentKey = fileJson.getString(somKey);
				String[] attachmentUrlArray = null;
				if (!stringifiedAttachmentKey.equals("null")) {
					attachmentUrlArray = stringifiedAttachmentKey.split("\n");
				}
				if (attachmentUrlArray != null) {
					attachmentUrlList = updateAttachmentListUrl(attachmentUrlArray, type, id);
				}
				if (attachmentUrlList != null && attachmentUrlList.length() > 0) {
					// remove last new line character and update the key
					attachmentUrlList.replace(attachmentUrlList.lastIndexOf("\n"),
							attachmentUrlList.lastIndexOf("\n") + 1, "");
					fileJson.put(somKey, attachmentUrlList.toString());
				}
			}
			return fileJson;
		} catch (Exception e) {
			log.error("Failed to update the attachment url's for submission read only viewing", e);
			// dont throw the exception and return null (in case of issue dont show the
			// attachments)
			return null;
		}
	}

	public static String getGuideContainerPathFromFormPath(String formPath) {
		String guideContainerPath = null;
		if (!StringUtils.isEmpty(formPath)
				&& formPath.startsWith(FormsPortalConstants.STR_CONTENT_DAM_FORMSANDDOCUMENTS)) {
			guideContainerPath = FormsPortalConstants.STR_CONTENT_FORMS_AF
					+ formPath.substring(formPath.indexOf(FormsPortalConstants.STR_CONTENT_DAM_FORMSANDDOCUMENTS)
							+ FormsPortalConstants.STR_CONTENT_DAM_FORMSANDDOCUMENTS.length())
					+ "/" + FormsPortalConstants.STR_JCR_CONTENT + "/guideContainer";
		}
		return guideContainerPath;
	}

	public static void updatePropertiesOnNode(Map<String, Object> propertiesMap, Node node) throws RepositoryException {
		Iterator<Map.Entry<String, Object>> metadataItr = propertiesMap.entrySet().iterator();
		while (metadataItr.hasNext()) {
			Map.Entry<String, Object> prop = metadataItr.next();
			Object propValue = prop.getValue();
			String key = prop.getKey();
			if (propValue instanceof String) {
				node.setProperty(key, prop.getValue().toString());
			} else if (propValue instanceof String[]) {
				String[] propValArr = (String[]) propValue;
				node.setProperty(key, propValArr);
			} else if (propValue instanceof Integer) {
				Integer propValInt = (Integer) propValue;
				node.setProperty(key, propValInt);
			} else if (propValue instanceof Double) {
				Double propValDbl = (Double) propValue;
				node.setProperty(key, propValDbl);
			} else if (propValue instanceof Date) {
				Date propValDate = (Date) propValue;
				Calendar cal = Calendar.getInstance();
				cal.setTime(propValDate);
				node.setProperty(key, cal);
			} else if (propValue instanceof Boolean) {
				Boolean propValBool = (Boolean) propValue;
				node.setProperty(key, propValBool);
			} else if (propValue == null) {
				node.setProperty(key, (String) null); // delete the property
			}
		}
	}

	public static boolean isDorAssociated(String formType, Node metadataNode) throws Exception {
		String formModel = "";
		boolean hasXdpRef = false;
		boolean hasDor = false;
		if (metadataNode != null) {
			if (metadataNode.hasProperty(FormsPortalConstants.STR_FORMMODEL)) {
				formModel = (metadataNode.getProperty(FormsPortalConstants.STR_FORMMODEL).toString());
			}
			hasXdpRef = (FormsPortalConstants.STR_FORM_TEMPLATES.equals(formModel))
					&& (metadataNode.hasProperty(FormsPortalConstants.STR_XDP_REF));
			if (metadataNode.hasProperty(FormsPortalConstants.STR_DOR_TYPE)) {
				String dorType = metadataNode.getProperty(FormsPortalConstants.STR_DOR_TYPE).getString();
				if ((FormsPortalConstants.STR_SELECT.equals(dorType)
						&& metadataNode.hasProperty(FormsPortalConstants.STR_DOR_TEMPLATE_REF))
						|| FormsPortalConstants.STR_GENERATE.equals(dorType)) {
					hasDor = true;
				}
			}
		}
		return (formType != null && formType.equals(FormsPortalConstants.STR_MOBILE_FORM)) || hasXdpRef || hasDor;
	}

	public static String getAttachmentContentTypeKey(String attachmentKey) {
		return attachmentKey + "%2F" + "contentType";
	}

	public static Map<String, Object> convertJsonToMap(JSONObject json) throws JSONException {
		Map<String, Object> resultMap = null;
		if (json != null) {
			resultMap = new HashMap<String, Object>();
			Iterator<String> itr = json.keys();
			while (itr.hasNext()) {
				String key = itr.next();
				resultMap.put(key, json.get(key));
			}
		}
		return resultMap;
	}

	public static String getSignConfigFromGuideContainer(String guideContainerPath, Session session)
			throws RepositoryException {
		String signConfig = null;
		if (!StringUtils.isEmpty(guideContainerPath) && session != null) {
			if (session.nodeExists(guideContainerPath)) {
				Node containerNode = session.getNode(guideContainerPath);
				if (containerNode.hasNode(FormsPortalConstants.STR_SIGNERS_INFO_NODE)) {
					Node signersInfoNode = containerNode.getNode(FormsPortalConstants.STR_SIGNERS_INFO_NODE);
					if (signersInfoNode.hasProperty(FormsPortalConstants.STR_CONFIG_PATH)) {
						signConfig = signersInfoNode.getProperty(FormsPortalConstants.STR_CONFIG_PATH).getString();
					} else {
						log.warn("Cannot retrieve sign config as container node " + guideContainerPath
								+ " does not contains it.");
					}
				} else {
					log.warn("Cannot retrieve sign config as container node " + guideContainerPath
							+ " does not info about signers.");
				}
			} else {
				log.warn("Cannot retrieve sign config as container node " + guideContainerPath + " does not exists.");
			}
		}
		return signConfig;
	}

	/**
	 * The below method has been extracted out to fix the attachment url for
	 * draft,submission and Pending Sign, also handles and fixes url for the new
	 * instance submission
	 * 
	 * @param attachmentUrlArray
	 * @param type
	 * @param currentId
	 * @return updated new line seperated attachment list Buffer
	 */
	public static StringBuffer updateAttachmentListUrl(String[] attachmentUrlArray, String type, String currentId) {
		StringBuffer attachmentUrlList = new StringBuffer();
		for (String attachmentUrl : attachmentUrlArray) {
			// extract the attachmentKey here whether temp
			String attachmentKey = null;
			// check whether a draft is being submitted or a new form or adobe sign form is
			// submitted by using form data by analysing the url
			if (attachmentUrl.indexOf(FormsPortalConstants.STR_FP_ATTACH_JSP) != -1) {
				String suffix = attachmentUrl.substring(attachmentUrl.indexOf(FormsPortalConstants.STR_FP_ATTACH_JSP)
						+ FormsPortalConstants.STR_FP_ATTACH_JSP.length() + 1);
				if (!StringUtils.isEmpty(suffix)) {
					int index = suffix.indexOf("/") != -1 ? suffix.indexOf("/") : suffix.length();
					String identifier = suffix.substring(0, index);
					String id = null;
					if (attachment_Url_Prefix_List.contains(identifier)) {
						int prev_Index = index;
						index = suffix.indexOf("/", index + 1) != -1 ? suffix.indexOf("/", index + 1) : suffix.length();
						id = suffix.substring(prev_Index + 1, index);
					} else {
						id = identifier;
					}
					if (id != null && !id.isEmpty()) {
						attachmentKey = suffix.substring(index + 1, suffix.length());
					}
				}
			} else {
				attachmentKey = attachmentUrl;
			}
			// Adding the support for Pending Sign by Introducing Type
			switch (type) {
			case FormsPortalConstants.STR_SUBMISSION: {
				attachmentUrlList.append(
						FormsPortalConstants.STR_SUBMISSION_ATTACHMENT_PREFIX + "/" + currentId + "/" + attachmentKey);
				break;
			}
			case FormsPortalConstants.STR_DRAFT: {
				attachmentUrlList.append(
						FormsPortalConstants.STR_DRAFT_ATTACHMENT_PREFIX + "/" + currentId + "/" + attachmentKey);
				break;
			}
			case FormsPortalConstants.STR_PENDING_SIGN: {
				attachmentUrlList.append(FormsPortalConstants.STR_PENDING_SIGN_ATTACHMENT_PREFIX + "/" + currentId + "/"
						+ attachmentKey);
				break;
			}
            default:{
                log.info("This is default case");
                break;
            }
			}
			attachmentUrlList.append("\n");
		}
		return attachmentUrlList;
	}

	public static String[] getArrayFromJsonArray(JSONArray jsonArray) throws JSONException {
		String[] result = null;
		if (jsonArray != null) {
			int resultLength = jsonArray.length();
			result = new String[resultLength];
			for (int i = 0; i < resultLength; i++) {
				result[i] = jsonArray.getString(i);
			}
		}
		return result;
	}
}
