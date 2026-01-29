package com.csuf.cloud.core.utils;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.ResourceBundle;
import java.util.stream.Collectors;

import javax.jcr.Binary;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query;
import javax.jcr.query.QueryManager;
import javax.jcr.query.QueryResult;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.HttpClient;
import org.apache.http.conn.ssl.DefaultHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.util.PublicSuffixMatcherLoader;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.jackrabbit.api.JackrabbitSession;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.Group;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.HistoryItem;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.day.cq.commons.date.RelativeTimeFormat;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.SearchResult;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class CSUFUtils {

	private static final Logger log = LoggerFactory.getLogger(CSUFUtils.class);

	private static final String QUERY_TYPE = "JCR-SQL2";

	private CSUFUtils() {
	}

	public static Iterator<Node> searchNodes(QueryBuilder queryBuilder, Session session, String nodeType, String path) {
		Map<String, String> predicateMap = new HashMap<>();
		predicateMap.put("path", path);
		predicateMap.put("type", nodeType);
		// predicateMap.put("p.nodedepth", "1");
		predicateMap.put("p.limit", "-1");
		com.day.cq.search.Query query = queryBuilder.createQuery(PredicateGroup.create(predicateMap), session);
		SearchResult result = query.getResult();
		Iterator<Node> itr = result.getNodes();
		return itr;
	}

	public static String getFileExtension(String fileName) {
		int lastDotIndex = fileName.lastIndexOf('.');
		if (lastDotIndex != -1 && lastDotIndex != 0)
			return fileName.substring(lastDotIndex + 1);
		else
			return null;
	}

	public static String getFileNameFromCRXPath(String path) {
		if (StringUtils.isNotBlank(path)) {
			String[] files = path.split("/");
			int lastIndex = files.length - 1;
			return files[lastIndex];
		}
		return null;
	}

	public static String encodeValue(String value) {
		try {
			return URLEncoder.encode(value, StandardCharsets.UTF_8.toString());
		} catch (UnsupportedEncodingException ex) {
			log.error(ex.getMessage());
		}
		return value;
	}

	public static String decodeURL(String url) {
		try {
			String prevURL = StringUtils.EMPTY;
			String decodeURL = url;
			while (!prevURL.equals(decodeURL)) {
				prevURL = decodeURL;
				decodeURL = URLDecoder.decode(decodeURL, "UTF-8");
			}
			return decodeURL;
		} catch (UnsupportedEncodingException e) {
			log.error(e.getMessage());
		}
		return url;
	}

	public static byte[] toByteArrayFromInputStream(InputStream is) throws IOException {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		int reads = is.read();
		while (reads != -1) {
			baos.write(reads);
			reads = is.read();
		}
		return baos.toByteArray();
	}

	public static File copyInputStreamToFile(InputStream inputStream, File file) throws IOException {
		try (FileOutputStream outputStream = new FileOutputStream(file)) {
			int read;
			byte[] bytes = new byte[inputStream.available()];
			while ((read = inputStream.read(bytes)) != -1) {
				outputStream.write(bytes, 0, read);
			}
		}
		return file;
	}

	public static InputStream getNonDAMAssetStream(Session session, String assetPath) {
		InputStream is = null;
		try {
			if (StringUtils.isNotBlank(assetPath)) {
				Node node = session.getNode(assetPath);
				if (node != null) {
					Node jcnode = node.getNode("jcr:content");
					is = jcnode == null ? null : jcnode.getProperty("jcr:data").getBinary().getStream();
				}
			} else {
				log.debug("assetPath is invalid CRX path in getNonDAMAssetStream method");
			}
		} catch (Exception e) {
			log.error(ArrayUtils.toString(e.getStackTrace()));
		}
		return is;
	}

	public static InputStream getDAMAssetStream(Session session, String assetPath) {
		InputStream is = null;
		try {
			if (StringUtils.isNotBlank(assetPath)) {
				Node node = session.getNode(assetPath);
				if (node != null) {
					Node jcnode = node.getNode("jcr:content/renditions/original/jcr:content");
					is = jcnode == null ? null : jcnode.getProperty("jcr:data").getBinary().getStream();
				}
			} else {
				log.debug("assetPath is invalid CRX path in getDAMAssetStream method");
			}
		} catch (RepositoryException e) {
			log.error(ArrayUtils.toString(e.getStackTrace()));
		}
		return is;
	}

	/*
	 * public static File getFileFromCRXPath(String filePath) { try { String[]
	 * filePathArray = filePath.split("\\."); String tempPath = filePathArray[0];
	 * int lastSlashIndex = tempPath.lastIndexOf("/"); String fileName =
	 * tempPath.substring(lastSlashIndex + 1, tempPath.length()); if (fileName ==
	 * null || fileName.isBlank()) { fileName = "default"; }else { fileName =
	 * fileName.replaceAll("[^a-zA-Z0-9-_]", "_"); }
	 * 
	 * String fileExtension = filePathArray[1]; return File.createTempFile(fileName,
	 * ".".concat(fileExtension)); } catch (IOException e) {
	 * log.error(ArrayUtils.toString(e.getStackTrace())); } return null; }
	 */

	/*
	 * public static void main(String[] args) { String imagePath =
	 * "/content/dam/csuf/CSUF_Mailer_logo.gif"; String[] imagePathArray =
	 * imagePath.split("\\."); String tempPath = imagePathArray[0]; int
	 * lastSlashIndex = tempPath.lastIndexOf("/"); String imageName =
	 * tempPath.substring(lastSlashIndex + 1, tempPath.length()); String
	 * imageExtension = imagePathArray[1];
	 * System.out.println("imageName: ".concat(imageName));
	 * System.out.println("imageExtension: ".concat(imageExtension)); }
	 */

	public static InputStream getDataXMLStreamFromPayloadPath(ResourceResolver resolver, String payloadPath,
			String dataXMLName) throws RepositoryException {
		Resource xmlNode = resolver.getResource(payloadPath);
		if (null != xmlNode) {
			Iterator<Resource> xmlFiles = xmlNode.listChildren();
			while (xmlFiles.hasNext()) {
				Resource attachmentXml = xmlFiles.next();
				String filePath = attachmentXml.getPath();
				if (filePath.contains(dataXMLName)) {
					filePath = attachmentXml.getPath().concat("/jcr:content");
					Node subNode = resolver.getResource(filePath).adaptTo(Node.class);
					return subNode.getProperty("jcr:data").getBinary().getStream();
				}
			}
		}
		return null;
	}

	public static InputStream getDataXMLStreamFromPayloadPathNew(ResourceResolver resolver, String payloadPath,
			String dataXMLName) {
		Resource xmlNode = resolver.getResource(payloadPath);
		if (xmlNode == null) {
			log.error("Payload path not found: {}", payloadPath);
			return null;
		}
		Iterator<Resource> children = xmlNode.listChildren();
		while (children.hasNext()) {
			Resource attachmentXml = children.next();

			if (!attachmentXml.getName().equalsIgnoreCase(dataXMLName)) {
				continue;
			}
			Resource contentRes = attachmentXml.getChild("jcr:content");
			if (contentRes == null) {
				log.error("jcr:content missing for {}", attachmentXml.getPath());
				return null;
			}
			try {
				Node node = contentRes.adaptTo(Node.class);
				if (node == null || !node.hasProperty("jcr:data")) {
					log.error("jcr:data missing for {}", contentRes.getPath());
					return null;
				}
				Binary binary = node.getProperty("jcr:data").getBinary();
				byte[] bytes = IOUtils.toByteArray(binary.getStream());
				return new ByteArrayInputStream(bytes);

			} catch (Exception e) {
				log.error("Error reading Data.xml from {}", attachmentXml.getPath(), e);
				return null;
			}
		}
		log.error("Data.xml not found under payload path {}", payloadPath);
		return null;
	}

	public static NodeIterator getQueryResult(Session session, String sqlStatement) {
		try {

			// Obtain the query manager for the session ...
			if (null != session && session.isLive()) {
				QueryManager queryManager = session.getWorkspace().getQueryManager();

				// Setup the query based on user input
				Query query = queryManager.createQuery(sqlStatement, QUERY_TYPE);

				// Execute the query and get the results ...
				QueryResult result = query.execute();

				// Iterate over the nodes in the results ...
				return result.getNodes();
			}

		} catch (Exception e) {
			log.error("Error:: CSUFUtils getQueryResult method: {}", Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	public static HttpClient httpClientTrustingAllSSLCerts() {
		try {
			SSLContext sslContext = SSLContext.getInstance("SSL");

			sslContext.init(null, new TrustManager[] { new X509TrustManager() {
				public X509Certificate[] getAcceptedIssuers() {

					return null;
				}

				public void checkClientTrusted(X509Certificate[] certs, String authType) {

				}

				public void checkServerTrusted(X509Certificate[] certs, String authType) {

				}
			} }, new SecureRandom());

			SSLConnectionSocketFactory socketFactory = new SSLConnectionSocketFactory(sslContext,
					getDefaultHostnameVerifier());

			return HttpClientBuilder.create().setSSLSocketFactory(socketFactory).build();
		} catch (Exception e) {
			return HttpClientBuilder.create().build();
		}
	}

	/**
	 * @since 4.4
	 */
	private static HostnameVerifier getDefaultHostnameVerifier() {
		return new DefaultHostnameVerifier(PublicSuffixMatcherLoader.getDefault());
	}

	public static boolean isAuthorizableAGroup(Session currentUserSession, String authorizableId) {
		try {
			if ((currentUserSession instanceof JackrabbitSession)) {
				UserManager userManager = ((JackrabbitSession) currentUserSession).getUserManager();
				Authorizable authorizable = userManager.getAuthorizable(authorizableId);
				if (authorizable != null) {
					return authorizable.isGroup();
				}
			}
		} catch (RepositoryException e) {
			log.error("Error:: CSUFUtils isAuthGroup method: {}", Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public static String getStringEquivalent(boolean value) {
		if (value)
			return "Y";
		else
			return "N";
	}

	public static boolean getBooleanEquivalent(String value) {
		if (StringUtils.isNotBlank(value) && value.equalsIgnoreCase("Y"))
			return true;
		else
			return false;
	}

	public static JsonArray modifyTaskHistory(JsonArray jsonArray, String actualWorkItemId, String taskTitle,
			String stage, String taskAssignee, String startDate, String endDate, String action, String comment,
			String viewDetailsLink, String dataXML, String historyWorkItemId) throws Exception {
		if (null == jsonArray || jsonArray.isJsonNull()) {
			throw new Exception("JsonArray is null in modifyTaskHistory method");
		}
		JsonObject json = new JsonObject();
		if (StringUtils.isNotBlank(stage) && stage.equalsIgnoreCase("Start")) {
			json.addProperty("isInitialSubmission", true);
			json.addProperty("isHistorySubmission", false);
		} else {
			json.addProperty("isInitialSubmission", false);
		}
		json.addProperty("actualWorkItemId",
				StringUtils.isNotBlank(actualWorkItemId) ? actualWorkItemId : StringUtils.EMPTY);
		json.addProperty("dataXML", StringUtils.isNotBlank(dataXML) ? dataXML : StringUtils.EMPTY);
		json.addProperty("historyWorkItemId",
				StringUtils.isNotBlank(historyWorkItemId) ? historyWorkItemId : StringUtils.EMPTY);
		json.addProperty("taskTitle", StringUtils.isNotBlank(taskTitle) ? taskTitle : StringUtils.EMPTY);
		json.addProperty("stage", StringUtils.isNotBlank(stage) ? stage : StringUtils.EMPTY);
		json.addProperty("taskAssignee", StringUtils.isNotBlank(taskAssignee) ? taskAssignee : StringUtils.EMPTY);
		json.addProperty("startDate", StringUtils.isNotBlank(startDate) ? startDate : StringUtils.EMPTY);
		json.addProperty("endDate", StringUtils.isNotBlank(endDate) ? endDate : StringUtils.EMPTY);
		json.addProperty("action", StringUtils.isNotBlank(action) ? action : StringUtils.EMPTY);
		json.addProperty("comment", StringUtils.isNotBlank(comment) ? comment : StringUtils.EMPTY);
		json.addProperty("viewDetailsLink",
				StringUtils.isNotBlank(viewDetailsLink) ? viewDetailsLink : StringUtils.EMPTY);
		jsonArray.add(json);
		return jsonArray;
	}

	public static String formatDate(long timeStamp, ResourceBundle rb) {
		RelativeTimeFormat rtf = new RelativeTimeFormat("r", rb);
		return rtf.format(timeStamp, true);
	}

	public static String getHistoryRoot(String wfId, Session session) throws WorkflowException {
		String wfName = wfId.replace('/', '_');
		try {
			String oldPath = "/etc/fd/dashboard/instances/" + wfName;
			if (session.nodeExists(oldPath)) {
				return "/etc/fd/dashboard/instances";
			}
			if ((wfId.startsWith("/var/workflow/instances/")) || (wfId.startsWith("/etc/workflow/instances/"))) {
				String[] comps = wfId.split("/");
				if (comps.length == 7) {
					String slingId = comps[4];
					String date = comps[5];
					String result = "/var/fd/dashboard/instances/" + slingId + "/" + date;
					return result;
				}
			}
			throw new IllegalArgumentException("Received workflow instance ID " + wfId + " in unexpected format!");
		} catch (RepositoryException e) {
			throw new WorkflowException(e);
		}
	}

	public static String getHistoryPathForFormSubmission(String wfId) throws WorkflowException {
		String workflowId = wfId.replace('/', '_');
		String path = workflowId + "/" + "history" + "/" + "initialHistory";
		return path;
	}

	public static WorkItem getHistoryWorkItemForCurrentWorkItem(WorkflowSession wfSession, WorkItem currentWorkItem,
			String historyWorkItemId) throws WorkflowException {
		String workflowInstanceId = currentWorkItem.getWorkflow().getId();

		log.debug("In getHistoryWorkItemForCurrentWorkItem");
		log.debug("workflowInstanceId: {}", workflowInstanceId);

		Workflow workflowInstance = wfSession.getWorkflow(workflowInstanceId);
		List<HistoryItem> wfHistoryList = wfSession.getHistory(workflowInstance);
		Iterator<HistoryItem> wfHistoryIter = wfHistoryList.iterator();

		boolean isPreviousStepDataAllowed = ArgumentParser.isPreviousStepDataAllowed(currentWorkItem);
		boolean isNextStepDataAllowed = ArgumentParser.isNextStepDataAllowed(currentWorkItem);
		boolean isPrevious = true;
		while (wfHistoryIter.hasNext()) {
			HistoryItem wfHistory = wfHistoryIter.next();
			WorkItem historyWorkItem = wfHistory.getWorkItem();
			if (historyWorkItem.getId().equals(currentWorkItem.getId())) {
				isPrevious = false;
				if (historyWorkItem.getId().equals(historyWorkItemId)) {
					return historyWorkItem;
				}
			}
			if (isPrevious) {
				if ((isPreviousStepDataAllowed) && (historyWorkItem.getId().equals(historyWorkItemId))) {
					return historyWorkItem;
				}
			} else if ((isNextStepDataAllowed) && (historyWorkItem.getId().equals(historyWorkItemId))) {
				return historyWorkItem;
			}
		}
		return null;
	}

	public static JsonObject getHistoryWorkItemData(Session serviceUserSession, WorkItem historyWorkItem,
			HistoryItem historyItem, WorkItem currentWorkItem, ResourceBundle rb) throws WorkflowException {
		String formsHistoryNodePath = CSUFUtils.getHistoryRoot(currentWorkItem.getWorkflow().getId(),
				serviceUserSession) + "/" + ArgumentParser.getHistoryPathForWorkItem(historyWorkItem);
		Node historyWorkItemNode = null;
		try {
			if (serviceUserSession.nodeExists(formsHistoryNodePath)) {
				historyWorkItemNode = serviceUserSession.getNode(formsHistoryNodePath);
				if (historyWorkItemNode == null) {
					throw new WorkflowException("Error in getHistoryWorkItemData method");
				}
			} else {
				log.debug("AEM-FD-004-001", historyWorkItem.getId());
				log.error("AEM-FD-004-001");
				return null;
			}
			JsonObject histroyWorkItemData = new JsonObject();
			histroyWorkItemData.addProperty("isInitialSubmission", false);
			histroyWorkItemData.addProperty("isHistorySubmission", true);
			histroyWorkItemData.addProperty("stage", StringUtils.EMPTY);

			String rootPathofWorkItem = historyWorkItemNode.getPath();
			/*
			 * String dataXMLPath = rootPathofWorkItem + "/" + "dataXML" + "/" + "data"; if
			 * (serviceUserSession.nodeExists(dataXMLPath)) { Node dataXMLFileNode =
			 * serviceUserSession.getNode(dataXMLPath.concat("/jcr:content")); InputStream
			 * stream = dataXMLFileNode.getProperty("jcr:data").getBinary().getStream(); if
			 * (stream != null) { Document dataXMLDoc = XMLUtils.getDomDocument(stream);
			 * String dataXML = XMLUtils.convertXMLToString(dataXMLDoc);
			 * log.debug("dataXML inside getHistoryWorkItemData : {}", dataXML);
			 * histroyWorkItemData.addProperty("dataXML", dataXML); } }
			 */

			Node metaDataNode = serviceUserSession.getNode(rootPathofWorkItem + "/" + "metaData");
			String actionTaken = metaDataNode.getProperty("actionTaken").getString();
			histroyWorkItemData.addProperty("action",
					(StringUtils.isNotBlank(actionTaken) && ArgumentParser.showActionTaken(historyWorkItem))
							? actionTaken
							: StringUtils.EMPTY);
			// log.debug("route selected: {}", actionTaken);

			String afPath = metaDataNode.hasProperty("AF_PATH") ? metaDataNode.getProperty("AF_PATH").getString()
					: null;
			if (StringUtils.isNotBlank(afPath)) {
				histroyWorkItemData.addProperty("showPdfInHistory", false);
				histroyWorkItemData.addProperty("formPath", afPath);
				histroyWorkItemData.addProperty("formName", afPath.substring(afPath.lastIndexOf('/') + 1));
			} else {
				histroyWorkItemData.addProperty("showPdfInHistory", true);
			}

			WorkItem workItem = null;
			if (historyItem != null) {
				workItem = historyItem.getWorkItem();
				if (workItem != null) {
					histroyWorkItemData.addProperty("historyWorkItemId", workItem.getId());
					histroyWorkItemData.addProperty("actualWorkItemId", currentWorkItem.getId());
					String taskTitle = workItem.getNode().getTitle();
					histroyWorkItemData.addProperty("taskTitle",
							StringUtils.isNotBlank(taskTitle) ? taskTitle : StringUtils.EMPTY);
					MetaDataMap metaDataMap = workItem.getMetaDataMap();
					if (metaDataMap != null) {
						Object comment = metaDataMap.get("workitemComment");
						if (comment != null && ArgumentParser.showComment(workItem)) {
							histroyWorkItemData.addProperty("comment", comment.toString());
						}
					}
				}
			}

			if (workItem != null) {
				String assignee = workItem.getCurrentAssignee();
				histroyWorkItemData.addProperty("taskAssignee",
						(StringUtils.isNotBlank(assignee) && ArgumentParser.showAssignee(workItem)) ? assignee
								: StringUtils.EMPTY);

				String startDateStr = CSUFUtils.formatDate(workItem.getTimeStarted().getTime(), rb);
				String endDateStr = CSUFUtils.formatDate(workItem.getTimeEnded().getTime(), rb);

				histroyWorkItemData.addProperty("startDate",
						StringUtils.isNotBlank(startDateStr) ? startDateStr : StringUtils.EMPTY);
				histroyWorkItemData.addProperty("endDate",
						StringUtils.isNotBlank(endDateStr) ? endDateStr : StringUtils.EMPTY);

				String viewDetailsLink = "/content/csu/us/en/task-details-readonly.html?wcmmode=disabled";
				histroyWorkItemData.addProperty("viewDetailsLink",
						(StringUtils.isNotBlank(viewDetailsLink)
								&& ArgumentParser.showDocumentOfCompletedTasks(workItem)) ? viewDetailsLink
										: StringUtils.EMPTY);
			}
			return histroyWorkItemData;
		} catch (RepositoryException e) {
			throw new WorkflowException(e);
		}
	}

	public static JsonObject getFormsDelegationHistory(HistoryItem historyItem, ResourceBundle rb) {
		JsonObject histroyWorkItemData = new JsonObject();

		WorkItem workItem = null;
		if (historyItem != null) {
			workItem = historyItem.getWorkItem();
			if (workItem != null) {
				histroyWorkItemData.addProperty("historyWorkItemId", workItem.getId());
				String taskTitle = workItem.getNode().getTitle();
				histroyWorkItemData.addProperty("taskTitle",
						StringUtils.isNotBlank(taskTitle) ? taskTitle : StringUtils.EMPTY);

				String startDateStr = CSUFUtils.formatDate(workItem.getTimeStarted().getTime(), rb);
				String endDateStr = CSUFUtils.formatDate(workItem.getTimeEnded().getTime(), rb);
				histroyWorkItemData.addProperty("startDate",
						StringUtils.isNotBlank(startDateStr) ? startDateStr : StringUtils.EMPTY);
				histroyWorkItemData.addProperty("endDate",
						StringUtils.isNotBlank(endDateStr) ? endDateStr : StringUtils.EMPTY);

				histroyWorkItemData.addProperty("isInitialSubmission", false);
				histroyWorkItemData.addProperty("isHistorySubmission", false);
				histroyWorkItemData.addProperty("stage", StringUtils.EMPTY);

				String workItemAction = "Workitem Delegated by ".concat(historyItem.getUserId());
				histroyWorkItemData.addProperty("action",
						ArgumentParser.showActionTaken(workItem) ? workItemAction : StringUtils.EMPTY);
				MetaDataMap metaDataMap = workItem.getMetaDataMap();
				if (metaDataMap != null) {
					Object comment = metaDataMap.get("workitemComment");
					if (null == comment) {
						comment = metaDataMap.get("comment");
					}
					if (comment != null && ArgumentParser.showComment(workItem)) {
						histroyWorkItemData.addProperty("comment", comment.toString());
					}
				}
			}
		}
		if (workItem != null) {
			String assignee = workItem.getCurrentAssignee();
			histroyWorkItemData.addProperty("taskAssignee",
					ArgumentParser.showAssignee(workItem) ? assignee : StringUtils.EMPTY);
		}
		return histroyWorkItemData;
	}

	public static JsonArray getHistoryForWorkItemList(WorkflowSession wfSession, Session serviceUserSession,
			WorkItem currentWorkItem, ResourceBundle rb) throws WorkflowException {
		try {
			String workflowInstanceId = currentWorkItem.getWorkflow().getId();
			Workflow workflowInstance = wfSession.getWorkflow(workflowInstanceId);
			List<HistoryItem> wfHistoryList = wfSession.getHistory(workflowInstance);
			JsonArray formsHistoryList = new JsonArray();

			String initiator = workflowInstance.getInitiator();
			Date startDate = workflowInstance.getTimeStarted();
			String startDateStr = CSUFUtils.formatDate(startDate.getTime(), rb);
			if (null != wfHistoryList && !wfHistoryList.isEmpty()) {
				String workItemAction = "Application submission";
				String viewDetailsLink = "/content/csu/us/en/task-details-readonly.html?wcmmode=disabled";
				formsHistoryList = CSUFUtils.modifyTaskHistory(formsHistoryList, currentWorkItem.getId(),
						workItemAction, "Start", initiator, startDateStr, startDateStr, "Workflow started", null,
						viewDetailsLink, null, null);
			}

			Iterator<HistoryItem> wfHistoryIter = wfHistoryList.iterator();
			boolean isPreviousStepDataAllowed = ArgumentParser.isPreviousStepDataAllowed(currentWorkItem);
			boolean isNextStepDataAllowed = ArgumentParser.isNextStepDataAllowed(currentWorkItem);
			boolean isPreviousItem = true;
			while (wfHistoryIter.hasNext()) {
				boolean showItem = false;
				HistoryItem historyItem = wfHistoryIter.next();
				MetaDataMap metaData = historyItem.getWorkItem().getMetaDataMap();
				WorkItem historyWorkItem = historyItem.getWorkItem();
				String workItemType = "";
				if (metaData.containsKey("WORK_ITEM_TYPE")) {
					workItemType = metaData.get("WORK_ITEM_TYPE", String.class);
				}
				if ((!"system".equals(historyWorkItem.getCurrentAssignee()))
						&& (workItemType.equals("AF_ASSIGN_STEP"))) {
					JsonObject historyWorkItemData = null;
					if (historyItem.getAction().equals("WorkItemDelegated")) {
						historyWorkItemData = CSUFUtils.getFormsDelegationHistory(historyItem, rb);
					} else {
						historyWorkItemData = CSUFUtils.getHistoryWorkItemData(serviceUserSession, historyWorkItem,
								historyItem, currentWorkItem, rb);
					}
					if (currentWorkItem.getId().equals(historyWorkItem.getId())) {
						isPreviousItem = false;
						showItem = true;
					} else {
						if ((isPreviousItem) && (isPreviousStepDataAllowed)) {
							showItem = true;
						}
						if ((!isPreviousItem) && (isNextStepDataAllowed)) {
							showItem = true;
						}
					}
					if ((showItem) && (historyWorkItemData != null)) {
						formsHistoryList.add(historyWorkItemData);
					}
				}
			}

			String workItemAction = "Current Task";
			startDateStr = CSUFUtils.formatDate(currentWorkItem.getTimeStarted().getTime(), rb);
			formsHistoryList = CSUFUtils.modifyTaskHistory(formsHistoryList, null, currentWorkItem.getNode().getTitle(),
					null, currentWorkItem.getCurrentAssignee(), startDateStr, null, workItemAction, null, null, null,
					null);

			return formsHistoryList;
		} catch (Exception e) {
			throw new WorkflowException(e);
		}
	}

	public static boolean modifyWorkflowInitiator(Session session, String workflowInstanceId,
			String modifiedInitiator) {
		log.info("modifyWorkflowInitiator");
		try {
			if (session.nodeExists(workflowInstanceId)) {
				log.info("modifyWorkflowInitiator=" + workflowInstanceId);
				Node workflowNode = session.getNode(workflowInstanceId);
				log.info("workflowNode=" + workflowNode);
				Node workflowMetadataNode = workflowNode.getNode("metaData");
				if (null != workflowNode && workflowNode.hasProperty("initiator")) {
					workflowNode.setProperty("initiator", modifiedInitiator);
//					workflowMetadataNode.setProperty("initiator", modifiedInitiator);
//					log.debug(
//							"workflowMetadataNode initiator property value inside modifyWorkflowInitiator method : {}",
//							workflowMetadataNode.getProperty("initiator"));
					try {
						log.info("Session User Id : {}", session.getUserID());
						session.save();
					} catch (Exception e) {
						log.error("Session save method failed : {}", Arrays.toString(e.getStackTrace()));
					}
					return true;
				}
			}
		} catch (RepositoryException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public static String generateRandomString(int length, String allowedChars) {

		final Random RANDOM = new SecureRandom();
		StringBuilder returnValue = new StringBuilder(length);

		for (int i = 0; i < length; i++) {
			returnValue.append(allowedChars.charAt(RANDOM.nextInt(allowedChars.length())));
		}

		return returnValue.toString();
	}

	public static String getNonNullValue(String value) {
		return StringUtils.isNotBlank(value) ? value : StringUtils.EMPTY;
	}

	public static String convert12hrsFormat(String str) {

		int h1 = (int) str.charAt(0) - '0';
		int h2 = (int) str.charAt(1) - '0';

		int hh = h1 * 10 + h2;

		// Finding out the Meridien of time
		// ie. AM or PM
		String finalStr;
		String hour;
		String minSec;
		String Meridien;
		StringBuilder sb = new StringBuilder();
		if (hh < 12) {
			Meridien = "AM";
		} else
			Meridien = "PM";

		hh %= 12;

		// Handle 00 and 12 case separately
		if (hh == 0) {
			hour = "12";
			// Printing minutes and seconds
			for (int i = 2; i < 8; ++i) {
				sb.append(str.charAt(i));
			}

		} else {
			hour = Integer.toString(hh);
			// Printing minutes and seconds
			for (int i = 2; i < 8; ++i) {
				sb.append(str.charAt(i));
			}
		}

		minSec = sb.toString();
		finalStr = hour + minSec + "  " + Meridien;
		// After time is printed
		// cout Meridien
		return finalStr;

	}

	public static Date convertStringToDate(String dateStr, String dateFormat) {
		try {
			Date date = new SimpleDateFormat(dateFormat).parse(dateStr);
			if (date instanceof Date) {
				return date;
			}
		} catch (ParseException e) {
			log.error(
					"parsing exception occured in convertStringToDate method with date String input as {} and date format input as {}",
					dateStr, dateFormat);
		}
		return null;
	}

	public static String convertDateToString(Date date, String dateFormat) {
		return new SimpleDateFormat(dateFormat).format(date);
	}

	public static LocalDate convertToLocalDateViaInstant(Date dateToConvert) {
		return dateToConvert.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	}

	public static LocalDate convertToLocalDateViaMilisecond(Date dateToConvert) {
		return Instant.ofEpochMilli(dateToConvert.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
	}

	public static LocalDate convertToLocalDateViaSqlDate(Date dateToConvert) {
		return new java.sql.Date(dateToConvert.getTime()).toLocalDate();
	}

	public static LocalDateTime convertToLocalDateTimeViaInstant(Date dateToConvert) {
		return dateToConvert.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
	}

	public static LocalDateTime convertToLocalDateTimeViaMilisecond(Date dateToConvert) {
		return Instant.ofEpochMilli(dateToConvert.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();
	}

	public static void main(String[] args) {
		/*
		 * Calendar cal = Calendar.getInstance(); cal.set(2021, Calendar.DECEMBER, 30);
		 * String dateStr1 = "2021-01-25"; String dateStr = "1/1/2021 02:08:04 PM";
		 * String inputFormat = "yyyy-MM-dd"; String outputFormat = "M/D/YYYY h:m:s a";
		 * String outputFormat1 = "M/D/YYYY"; Date date = convertStringToDate(dateStr1,
		 * inputFormat); Date date1 = convertStringToDate(dateStr, outputFormat);
		 * LocalDateTime nowTime = LocalDateTime.now(); int value =
		 * nowTime.compareTo(CSUFUtils.convertToLocalDateTimeViaInstant(date1));
		 * 
		 * String outputDateStr = convertDateToString(date, outputFormat1);
		 * System.out.println("Date1 Date : " + date1); System.out.println("nowTime : "
		 * + nowTime); System.out.println("value : " +
		 * nowTime.isBefore(CSUFUtils.convertToLocalDateTimeViaInstant(date1)));
		 */
		/*
		 * String htmlMessage = "<html><body>\r\n" + "\r\n" +
		 * "<p>Hello $recipientName,</p>\r\n" +
		 * "<p>Email sent from $senderEmail</p>\r\n" + "\r\n" + "\r\n" +
		 * "<p>Thanks,</p>\r\n" + "<p>HR Team $senderEmail</p>\r\n" +
		 * "<p><span style=\"font-size: 12px; font-weight: normal; font-style: italic; color: #919191;\">This is an automatically generated email. Please do not reply to this email.</span></p>\r\n"
		 * + "</body>\r\n" + "</html>";
		 * 
		 * htmlMessage = htmlMessage.replaceAll("\\$".concat("recipientName"),
		 * "Test Email Recipient") .replaceAll("\\$".concat("senderEmail"),
		 * "manish.08.hbti@gmail.com"); System.out.println("htmlMessage : " +
		 * htmlMessage);
		 */

		// String text = "This - word ! has \\ /allot # of % special % characters";
		String text = "Testing_`_.!@#..--$%^&()-..._=,,+{[}};'.,..Document_2.pdf";
		text = text.replaceAll("[^a-zA-Z0-9]", "");
		System.out.println(text);
	}

	public static String getMonthOfYear(Integer month) {
		String monthValue = "";

		if (month == 1) {
			monthValue = "January";
		} else if (month == 2) {
			monthValue = "February";
		} else if (month == 3) {
			monthValue = "March";
		} else if (month == 4) {
			monthValue = "April";
		} else if (month == 5) {
			monthValue = "May";
		} else if (month == 6) {
			monthValue = "June";
		} else if (month == 7) {
			monthValue = "July";
		} else if (month == 8) {
			monthValue = "August";
		} else if (month == 9) {
			monthValue = "September";
		} else if (month == 10) {
			monthValue = "October";
		} else if (month == 11) {
			monthValue = "November";
		} else if (month == 12) {
			monthValue = "December";
		}

		return monthValue;
	}

	public static String getSimpleDateFromat(String value) {

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat reqFormat = new SimpleDateFormat("dd-MMM-yy");
		try {
			if (StringUtils.isNotBlank(value)) {
				value = reqFormat.format(format.parse(value));
			} else {
				value = StringUtils.EMPTY;
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return value;
	}

	public static boolean isWeekBetweenSessionDates(LocalDate weekStartDate, LocalDate weekEndDate,
			LocalDate sessionStartDate, LocalDate sessionEndDate) {
		if ((weekStartDate.isEqual(sessionStartDate) || weekStartDate.isAfter(sessionStartDate))
				&& (weekEndDate.isEqual(sessionEndDate) || weekEndDate.isBefore(sessionEndDate))) {
			return true;
		}
		return false;
	}

	public static String replaceInvalidChars(String fileName) {
		if (StringUtils.isNotBlank(fileName)) {
			String fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf("."));
			fileNameWithoutExtension = fileNameWithoutExtension.replaceAll("\\s", "")
					.replaceAll("[<\\[@#%:,&'`;{\\\\^\\=$!|\\]}?*+/.>]", "");
			return fileNameWithoutExtension.concat(fileName.substring(fileName.lastIndexOf("."), fileName.length()));
		}
		return fileName;
	}

	public static boolean isCurrentUserAnAdministrator(Session currentUserSession) {
		try {
			String currentUserId = currentUserSession.getUserID();
			// log.debug(" currentUserId : - " + currentUserId);
			if ((currentUserSession instanceof JackrabbitSession)) {
				UserManager userManager = ((JackrabbitSession) currentUserSession).getUserManager();
				Authorizable currentUser = userManager.getAuthorizable(currentUserId);
				Group adminGroup = (Group) userManager.getAuthorizable("administrators");
				if (currentUserId.equalsIgnoreCase("admin")
						|| (null != adminGroup && adminGroup.isMember(currentUser))) {
					return true;
				}
			}
			// this.log.debug("Not a valid User" + currentUserId);
		} catch (RepositoryException e) {
			log.error("Exception in isCurrentUserAdmin method : {}", Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public static String getRecentlyCreatedPayloadPath(ResourceResolver resolver, String payloadPath)
			throws RepositoryException {
		Resource payloadNode = resolver.getResource(payloadPath);
		HashMap<Date, String> mapOfPayloadNodes = new HashMap<Date, String>();
		Iterator<Resource> payloadFiles = payloadNode.listChildren();
		String filePath = "";
		while (payloadFiles.hasNext()) {
			Resource payloadFolder = payloadFiles.next();
			filePath = payloadFolder.getPath();
			Node subNode = resolver.getResource(filePath).adaptTo(Node.class);
			mapOfPayloadNodes.put(subNode.getProperty("jcr:created").getDate().getTime(), filePath);
		}

		long minDiff = -1;
		Date datetime = new Date();
		String value = null;
		for (Map.Entry<Date, String> entry : mapOfPayloadNodes.entrySet()) {
			long diff = (datetime.getTime() - entry.getKey().getTime());
			if ((minDiff == -1) || (diff < minDiff)) {
				minDiff = diff;
				value = entry.getValue();
			}
		}
		return value;
	}

	public static String getTitanCardData(String requestURL, String requestJSON) {
		log.info("Inside getTitanCardData method from CSUFUtils");
		URL url = null;
		HttpURLConnection con = null;
		try {
			url = new URL(requestURL);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		try {
			con = (HttpURLConnection) url.openConnection();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		try {
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");

		} catch (ProtocolException e) {
			e.printStackTrace();
		}
		con.setDoOutput(true);

		try (OutputStream os = con.getOutputStream()) {
			os.write(requestJSON.getBytes("utf-8"));
			os.close();
			int responseCode = con.getResponseCode();
			log.debug("POST Response Code to URL :: " + responseCode);
			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();

				log.debug("Response from URL=============" + response.toString());
				return response.toString();
			}
		} catch (IOException e1) {
			log.error("Inside Catch Block");
		} finally {
			con.disconnect();
		}
		return null;

	}

	public static String getSimpleDateFromatForOnbase(String value) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat reqFormat = new SimpleDateFormat("MM/dd/yyyy");
		try {
			if (StringUtils.isNotBlank(value)) {
				value = reqFormat.format(format.parse(value));
			} else {
				value = StringUtils.EMPTY;
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return value;
	}

	public static String getAssetManagementData(String requestURL, String encodedCredentials) {
		log.info("Inside getAssetManagementData method from CSUFUtils");
		URL url = null;
		HttpURLConnection con = null;
		try {
			url = new URL(requestURL);
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.setRequestProperty("Accept", "application/json");
			con.setRequestProperty("Authorization", "Basic " + encodedCredentials);
			int responseCode = con.getResponseCode();
			log.debug("POST Response Code to request from getAssetManagementData :: " + responseCode);

			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuilder response = new StringBuilder();

				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();
				log.debug("Response: " + response.toString());
				return response.toString();
			} else {
				log.error("Request failed from getAssetManagementData method" + responseCode);
			}

		} catch (MalformedURLException e) {
			log.error("Exception URL in getAssetManagementData method" + Arrays.toString(e.getStackTrace()));
		} catch (ProtocolException e) {
			log.error("Exception Set Request Paramters in getAssetManagementData method"
					+ Arrays.toString(e.getStackTrace()));
		} catch (IOException e) {
			log.error("Exception in getAssetManagementData method" + Arrays.toString(e.getStackTrace()));
		} finally {
			if (con != null) {
				con.disconnect();
			}
		}
		return null;
	}

}
