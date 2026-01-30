package com.csuf.cloud.core.services.impl;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.ResourceBundle;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.jackrabbit.api.JackrabbitSession;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.Group;
import org.apache.jackrabbit.api.security.user.User;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.Status;
import com.adobe.granite.workflow.exec.WorkItem;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.SearchResult;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.enums.UserType;
import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.utils.ArgumentParser;
import com.csuf.cloud.core.utils.ArgumentParser.FormType;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(service = InboxItemService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Inbox Item Service" })
public class InboxItemServiceImpl implements InboxItemService {

	@Reference
	private QueryBuilder queryBuilder;

	@Reference
	private AssetService assetService;

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUFService;

	private static final Logger log = LoggerFactory.getLogger(InboxItemServiceImpl.class);

	private static final String LDAP_PROPERTY = "rep:externalId";
	private static final String ADMINISTRATOR_USER = "Administrator";
	private static final String AEM_USER = "AEM User";

	@Override
	public JsonObject getInboxItemStepDetails(ResourceResolver resourceResolver, WorkflowSession wfSession,
			String workItemId, String historyItemId) {
		try {
			Session session = resourceResolver.adaptTo(Session.class);
			JsonObject json = new JsonObject();
			boolean isHistoryView = false, isCompleteView = false, isAssigneeAGroup = false, isDelegate = false;
			WorkItem workItem = wfSession.getWorkItem(workItemId);

			if (!StringUtils.isEmpty(historyItemId)) {
				isHistoryView = true;
			} else if (workItem != null) {
				if (workItem.getStatus().equals(Status.COMPLETE)) {
					isCompleteView = true;

					String parentPath = workItem.getId().substring(0, workItemId.lastIndexOf("/"));
					Node parent = null;
					if (session.nodeExists(parentPath)) {
						parent = session.getNode(parentPath);
					}
					String workItemStatus = parent.getProperty("event").getString();
					if ("WorkItemDelegated".equals(workItemStatus)) {
						isDelegate = true;
					}
				}
				isAssigneeAGroup = CSUFUtils.isAuthorizableAGroup(session, workItem.getCurrentAssignee());
				json.addProperty("isassigneeagroup", isAssigneeAGroup);
			}

			if (workItem != null) {

				boolean isCommentAllowed = ArgumentParser.isCommentAllowed(workItem);
				boolean isAttachmentAllowed = ArgumentParser.isUploadTaskAttachmentAllowed(workItem);
				FormType type = ArgumentParser.getFormType(workItem);

				String formPath = StringUtils.EMPTY;
				boolean isReadOnlyForm = true;

				switch (type) {
				case AF:
					formPath = ArgumentParser.getAFPath(workItem);
					isReadOnlyForm = ArgumentParser.isReadOnlyForm(workItem);
					break;
				case PDF:
					String pdfPath = ArgumentParser.getPDFPath(workItem);
					String payloadPath = workItem.getWorkflowData().getPayload().toString();
					formPath = payloadPath + "/" + pdfPath;
					break;
				default:
					break;
				}

				json.addProperty("formPath", formPath);
				json.addProperty("workItemId", workItemId);
				json.addProperty("isreadonlyform", isReadOnlyForm);
				json.addProperty("formtype", type.name());
				json.addProperty("isCommentAllowed", isCommentAllowed);
				json.addProperty("isAttachmentAllowed", isAttachmentAllowed);
				json.addProperty("isCompleteView", isCompleteView);
				json.addProperty("isHistoryView", isHistoryView);
				json.addProperty("isDelegateView", isDelegate);
				return json;
			}
		} catch (Exception e) {
			log.error("Exception in getting Step Details : ".concat(Arrays.toString(e.getStackTrace())));
		}
		return null;
	}

	@Override
	public JsonArray getFormsCatalog(Session session) throws RepositoryException {
		JsonArray formsJson = new JsonArray();
		Map<String, String> predicateMap = new HashMap<>();
		predicateMap.put("path", "/content/dam/formsanddocuments");
		predicateMap.put("type", "dam:AssetContent");
		predicateMap.put("property", "sling:resourceType");
		predicateMap.put("property.value", "fd/fm/af/render");
		predicateMap.put("property", "guide");
		predicateMap.put("property.value", "1");
		predicateMap.put("p.limit", "-1");
		Query query = queryBuilder.createQuery(PredicateGroup.create(predicateMap), session);
		SearchResult result = query.getResult();
		Iterator<Node> itr = result.getNodes();
		while (itr.hasNext()) {
			Node node = itr.next();
			String path = node.getPath();
			String formTitle = node.getNode("metadata").getProperty("title").getString();
			JsonObject json = new JsonObject();
			json.addProperty("title", formTitle);
			json.addProperty("path", path);
			formsJson.add(json);
		}
		return formsJson;
	}

	@Override
	public JsonArray getTaskAttachments(ResourceResolver resourceResolver, String workItemId) throws Exception {
		log.debug("Entered task attchment = {}", workItemId);
		JsonArray formsJson = new JsonArray();
		Iterator<Node> itr = null;
		Session session = resourceResolver.adaptTo(Session.class);
		WorkflowSession wfSession = resourceResolver.adaptTo(WorkflowSession.class);
		WorkItem workItem = wfSession.getWorkItem(workItemId);
		log.debug("Entered task attchment workItem = {}", workItem);
		// boolean isViewAttachmentNotAllowed =
		// ArgumentParser.isViewAttachmentNotAllowed(workItem);
		// Hard coded just for testing - use above line later
		boolean isViewAttachmentNotAllowed = true;
		isViewAttachmentNotAllowed = true;

		log.debug("isViewAttachmentNotAllowed = {} for workItem with id = {}", isViewAttachmentNotAllowed,
				workItem.getId());
		if (isViewAttachmentNotAllowed) {
			// if (!isViewAttachmentNotAllowed) {

			String attachmentsFolderPath = ArgumentParser.getInputFormAttachmentsPath(workItem);
			if (StringUtils.isBlank(attachmentsFolderPath)) {
				String combinedName = ArgumentParser.getInputCombinedFormAttachmentsPath(workItem);
				log.debug("combinedName inside getTaskAttachments method : {}", combinedName);
				if (StringUtils.isNotBlank(combinedName) && combinedName.contains(":")) {
					attachmentsFolderPath = combinedName.substring(combinedName.lastIndexOf(":") + 1);
				}
			}

			if (StringUtils.isNotBlank(attachmentsFolderPath) && attachmentsFolderPath.contains(":")) {
				attachmentsFolderPath = attachmentsFolderPath.substring(attachmentsFolderPath.lastIndexOf(":") + 1);
			}
			String payloadPath = workItem.getContentPath();

			if (StringUtils.isNotBlank(payloadPath) && StringUtils.isNotBlank(attachmentsFolderPath)) {
				itr = CSUFUtils.searchNodes(queryBuilder, session, "nt:base",
						payloadPath.concat("/").concat(attachmentsFolderPath));
			} else if (StringUtils.isNotBlank(payloadPath)) {
				itr = CSUFUtils.searchNodes(queryBuilder, session, "nt:file", payloadPath);
			} else {
				throw new Exception("payload path is empty inside getTaskAttachments method");
			}

			while (itr.hasNext()) {
				Node node = itr.next();
				String path = node.getPath();
				String fileName = node.getName();
				if (StringUtils.isNotBlank(fileName) && StringUtils.isNotBlank(path)) {
					String fileExtension = CSUFUtils.getFileExtension(fileName);
					if (StringUtils.isNotBlank(fileExtension) && !fileExtension.equalsIgnoreCase("xml")) {
						JsonObject json = new JsonObject();
						json.addProperty("fileName", fileName);
						json.addProperty("path", path);
						formsJson.add(json);
					}
				}
			}
		}
		return formsJson;
	}

	@Override
	public JsonArray getTaskAttachmentsFromWorkflowInstanceId(ResourceResolver resourceResolver,
			String workflowInstanceId, String attachmentFolderName) throws Exception {
		log.debug("Inside getTaskAttachmentsFromWorkflowInstanceId method");
		Iterator<Node> itr = null;
		JsonArray formsJson = new JsonArray();
		Session session = resourceResolver.adaptTo(Session.class);
		WorkflowSession wfSession = resourceResolver.adaptTo(WorkflowSession.class);
		String payloadPath = wfSession.getWorkflow(workflowInstanceId).getWorkflowData().getPayload().toString();
		log.debug("payloadPath inside getTaskAttachmentsFromWorkflowInstanceId method : {}", payloadPath);
		if (StringUtils.isNotBlank(payloadPath)) {
			// itr = CSUFUtils.searchNodes(queryBuilder, session, "nt:file",
			// payloadPath.concat("/Attachments"));
			itr = CSUFUtils.searchNodes(queryBuilder, session, "nt:file",
					payloadPath.concat("/".concat(attachmentFolderName)));
			while (itr.hasNext()) {
				Node node = itr.next();
				String path = node.getPath();
				String fileName = node.getName();
				if (StringUtils.isNotBlank(fileName) && StringUtils.isNotBlank(path)) {
					String fileExtension = CSUFUtils.getFileExtension(fileName);
					if (StringUtils.isNotBlank(fileExtension) && !fileExtension.equalsIgnoreCase("xml")) {
						JsonObject json = new JsonObject();
						json.addProperty("fileName", fileName);
						json.addProperty("path", path);
						formsJson.add(json);
					}
				}
			}
		} else {
			throw new Exception("payload path is empty inside getTaskAttachmentsFromWorkflowInstanceId method");
		}
		return formsJson;
	}

	@Override
	public boolean isViewTaskDetailsAllowed(Session currentUserSession, String assignee) throws Exception {
		try {
			String currentUserId = currentUserSession.getUserID();
			// log.debug(" currentUserId : - " + currentUserId);
			if ((currentUserSession instanceof JackrabbitSession)) {
				UserManager userManager = ((JackrabbitSession) currentUserSession).getUserManager();
				Authorizable workItemAssignee = userManager.getAuthorizable(assignee);
				Authorizable currentUser = userManager.getAuthorizable(currentUserId);
				if (currentUserId.equals(assignee)) {
					return true;
				}
				if (null != workItemAssignee && workItemAssignee.isGroup()) {
					Group group = (Group) workItemAssignee;
					// log.debug("work Item is assigned to group " + group.getID());
					if (group.isMember(currentUser)) {
						// log.debug(currentUserId + " is member of assigned group " + group.getID());
						return true;
					}
				}
			}
			// this.log.debug("Not a valid User" + currentUserId);
			return false;
		} catch (RepositoryException e) {
			throw new Exception("Access Denied - User is not a task assignee", e);
		}
	}

	@Override
	public boolean isAuthorizableAMember(Session session, String authorizableId, String[] authorizableGroupsId)
			throws Exception {
		try {
			if (session instanceof JackrabbitSession && null != authorizableGroupsId
					&& authorizableGroupsId.length > 0) {
				UserManager userManager = ((JackrabbitSession) session).getUserManager();
				// log.debug("Authorizable to test: - {}", authorizableId);
				// log.debug("group(s) to test: - {}", Arrays.toString(authorizableGroupsId));
				for (String authorizableGroupId : authorizableGroupsId) {
					Authorizable groupAuthorizable = userManager.getAuthorizable(authorizableGroupId);
					Authorizable authorizable = userManager.getAuthorizable(authorizableId);
					if (authorizableId.equalsIgnoreCase(authorizableGroupId)) {
						return true;
					} else if (null != authorizable && null != groupAuthorizable && groupAuthorizable.isGroup()) {
						Group group = (Group) groupAuthorizable;
						if (group.isMember(authorizable)) {
							return true;
						}
						if (authorizable.isGroup()) {
							group = (Group) authorizable;
							if (group.isMember(groupAuthorizable)) {
								return true;
							}
						}
					}
				}
			}
			return false;
		} catch (RepositoryException e) {
			throw new Exception("Access Denied - User is not a task assignee", e);
		}
	}

	@Override
	public boolean isViewInboxTaskAllowed(Session currentUserSession, String assignee) throws Exception {
		try {
			String currentUserId = currentUserSession.getUserID();
			log.debug(" currentUserId : - " + currentUserId);
			if ((currentUserSession instanceof JackrabbitSession)) {
				UserManager userManager = ((JackrabbitSession) currentUserSession).getUserManager();
				Authorizable workItemAssignee = userManager.getAuthorizable(assignee);
				Authorizable currentUser = userManager.getAuthorizable(currentUserId);
				Group adminGroup = (Group) userManager.getAuthorizable("administrators");
				if ((null != adminGroup && adminGroup.isMember(currentUser)) || currentUserId.equalsIgnoreCase("admin")
						|| currentUserId.equals(assignee)) {
					log.debug(currentUserId + " user is either an admin or the task assignee");
					return true;
				}
				if (null != workItemAssignee && workItemAssignee.isGroup()) {
					Group group = (Group) workItemAssignee;
					// log.debug("work Item is assigned to group " + group.getID());
					if ((null != adminGroup && adminGroup.isMember(group)) || group.isMember(currentUser)) {
						// log.debug(currentUserId + " user is member of assigned group " +
						// group.getID());
						return true;
					}
				}
			}
			// this.log.debug("Not a valid User" + currentUserId);
			return false;
		} catch (RepositoryException e) {
			throw new Exception("Access Denied - User is neither a task assignee nor an admin", e);
		}
	}

	@Override
	public boolean isCurrentUserAdmin(Session currentUserSession) throws Exception {
		return CSUFUtils.isCurrentUserAnAdministrator(currentUserSession);
	}

	@Override
	public String getCurrentUserId(Session currentUserSession) throws Exception {
		try {
			return currentUserSession.getUserID();
		} catch (Exception e) {
			throw new Exception("could not fetch current user", e);
		}
	}

	@Override
	public JsonObject getPreviousStepData(Session serviceUserSession, WorkItem workItem) throws Exception {
		JsonObject json = null;
		try {
			if (workItem != null) {
				json = new JsonObject();
				String historyNodePath = workItem.getMetaDataMap().get("historyEntryPath").toString();
				if (serviceUserSession.nodeExists(historyNodePath)) {
					Node historyNode = serviceUserSession.getNode(historyNodePath);
					if ((historyNode != null) && (serviceUserSession.nodeExists(historyNodePath + "/" + "workItem"))) {
						Node workItemNodeForHistory = historyNode.getNode("workItem");
						while ((historyNode != null) && (workItemNodeForHistory != null)
								&& ((!StringUtils.equals(historyNode.getProperty("event").getString(),
										"WorkflowCompleted"))
										|| (!workItemNodeForHistory.hasProperty("assignee"))
										|| (StringUtils.equals(
												workItemNodeForHistory.getProperty("assignee").getString(),
												"system")))) {
							Node metadataNode = workItemNodeForHistory.getNode("metaData");
							if (metadataNode.hasProperty("historyEntryPath")) {
								historyNodePath = metadataNode.getProperty("historyEntryPath").getString();
								if (serviceUserSession.nodeExists(historyNodePath)) {
									historyNode = serviceUserSession.getNode(historyNodePath);
									workItemNodeForHistory = historyNode.getNode("workItem");
								} else {
									historyNode = null;
									workItemNodeForHistory = null;
								}
							} else {
								historyNode = null;
								workItemNodeForHistory = null;
							}
						}
						if ((historyNode != null) && (workItemNodeForHistory != null)) {
							Node metadataNode = workItemNodeForHistory.getNode("metaData");
							if (metadataNode.hasProperty("workitemComment") && ArgumentParser.showComment(workItem)) {
								json.addProperty("workitemComment",
										metadataNode.getProperty("workitemComment").getString());
							}
							if (metadataNode.hasProperty("DASHBOARD_HISTORY_PATH")) {
								String nodePath = CSUFUtils.getHistoryRoot(workItem.getWorkflow().getId(),
										serviceUserSession) + "/" + workItem.getWorkflow().getId().replace('/', '_')
										+ "/" + "history" + "/"
										+ metadataNode.getProperty("DASHBOARD_HISTORY_PATH").getString() + "/"
										+ "metaData";
								if (serviceUserSession.nodeExists(nodePath)) {
									Node node = serviceUserSession.getNode(nodePath);
									if (node.hasProperty("actionTaken") && ArgumentParser.showActionTaken(workItem)) {
										json.addProperty("actionTaken", node.getProperty("actionTaken").getString());
									}
								}
							}
						}
					}
				}
			}
		} catch (Exception e) {
			throw new Exception("Exception in getPreviousStepData method", e);
		}
		return json;
	}

	@Override
	public String getInitialSubmissionXMLData(Session serviceUserSession, String workflowId) throws WorkflowException {
		String formsHistoryNodePath = CSUFUtils.getHistoryRoot(workflowId, serviceUserSession) + "/"
				+ CSUFUtils.getHistoryPathForFormSubmission(workflowId);
		Node historyWorkItemNode = null;
		try {
			if (serviceUserSession.nodeExists(formsHistoryNodePath)) {
				historyWorkItemNode = serviceUserSession.getNode(formsHistoryNodePath);
			} else {
				log.error("Initial history " + formsHistoryNodePath + " for workflowId " + workflowId
						+ " does not exist ");
				return null;
			}

			String rootPathofWorkItem = historyWorkItemNode.getPath();

			String dataXMLPath = rootPathofWorkItem + "/" + "dataXML" + "/" + "data";
			if (serviceUserSession.nodeExists(dataXMLPath)) {
				Node dataXMLFileNode = serviceUserSession.getNode(dataXMLPath.concat("/jcr:content"));
				InputStream stream = dataXMLFileNode.getProperty("jcr:data").getBinary().getStream();
				if (stream != null) {
					log.debug("dataXMLDoc inside getInitialSubmissionXMLData found");
					Document dataXMLDoc = XMLUtils.getDomDocument(stream);
					return XMLUtils.convertXMLToString(dataXMLDoc);
				}
			}
		} catch (RepositoryException | SAXException | IOException | ParserConfigurationException e) {
			throw new WorkflowException(e);
		}
		return null;
	}

	@Override
	public JsonObject getFormDataForCompletedWorkItem(Session serviceUserSession, WorkflowSession userWorkflowSession,
			String curentWorkItemId, String historyWorkItemId, ResourceBundle rb) throws WorkflowException {
		WorkItem currentWorkItem = null;
		try {
			currentWorkItem = userWorkflowSession.getWorkItem(curentWorkItemId);
		} catch (WorkflowException e1) {
			throw new WorkflowException(
					"Error in getting currentWorkItem from curentWorkItemId in getFormDataForCompletedWorkItem method");
		}

		WorkItem histroyWorkItem = CSUFUtils.getHistoryWorkItemForCurrentWorkItem(userWorkflowSession, currentWorkItem,
				historyWorkItemId);
		return CSUFUtils.getHistoryWorkItemData(serviceUserSession, histroyWorkItem, null, currentWorkItem, rb);
	}

	@Override
	public JsonArray getHistoryForWorkItem(Session session, WorkflowSession userWorkflowSession, String workItemId,
			ResourceBundle rb) throws WorkflowException {
		WorkItem currentWorkItem = null;
		try {
			currentWorkItem = userWorkflowSession.getWorkItem(workItemId);
			return CSUFUtils.getHistoryForWorkItemList(userWorkflowSession, session, currentWorkItem, rb);
		} catch (WorkflowException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public String getHistoryWorkItemXML(Session serviceUserSession, WorkflowSession wfSession, String historyWorkItemId,
			String currentWorkItemId) throws WorkflowException {
		WorkItem currentWorkItem = wfSession.getWorkItem(currentWorkItemId);
		WorkItem histroyWorkItem = CSUFUtils.getHistoryWorkItemForCurrentWorkItem(wfSession, currentWorkItem,
				historyWorkItemId);
		String formsHistoryNodePath = CSUFUtils.getHistoryRoot(currentWorkItem.getWorkflow().getId(),
				serviceUserSession) + "/" + ArgumentParser.getHistoryPathForWorkItem(histroyWorkItem);
		Node historyWorkItemNode = null;
		try {
			if (serviceUserSession.nodeExists(formsHistoryNodePath)) {
				historyWorkItemNode = serviceUserSession.getNode(formsHistoryNodePath);
				if (historyWorkItemNode == null) {
					throw new WorkflowException("Error in getHistoryWorkItemXML method");
				}
			} else {
				log.error("No XML data found for histroyWorkItemId : {}", histroyWorkItem.getId());
				return null;
			}

			String rootPathofWorkItem = historyWorkItemNode.getPath();
			String dataXMLPath = rootPathofWorkItem + "/" + "dataXML" + "/" + "data";
			if (serviceUserSession.nodeExists(dataXMLPath)) {
				Node dataXMLFileNode = serviceUserSession.getNode(dataXMLPath.concat("/jcr:content"));
				InputStream stream = dataXMLFileNode.getProperty("jcr:data").getBinary().getStream();
				if (stream != null) {
					Document dataXMLDoc = XMLUtils.getDomDocument(stream);
					return XMLUtils.convertXMLToString(dataXMLDoc);
				}
			}
			return null;
		} catch (RepositoryException | SAXException | IOException | ParserConfigurationException e) {
			throw new WorkflowException(e);
		}
	}

	@Override
	public String getResponseFromProcessingInstance(String url) throws IOException {
		// log.debug("entry with url : {} at {}", url, LocalTime.now());
		HttpGet get = null;
		CloseableHttpResponse response = null;
		try (CloseableHttpClient httpclient = HttpClients.createDefault();) {
			get = new HttpGet(processingInstanceConfigService.processingUrl().concat(url));
			String auth = new StringBuffer(processingInstanceConfigService.userName()).append(":")
					.append(processingInstanceConfigService.userSecurity()).toString();
			byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
			String authHeader = "Basic " + new String(encodedAuth);
			get.setHeader("AUTHORIZATION", authHeader);
			response = httpclient.execute(get);
			if (null != response && response.getStatusLine().getStatusCode() == 200) {
				// log.debug("exit with url : {} at {}", url, LocalTime.now());
				return EntityUtils.toString(response.getEntity());
			}
		} catch (IOException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != get) {
				get.completed();
				get.releaseConnection();
			}
			if (null != response)
				response.close();
		}
		return null;
	}

	@Override
	public String getldapAccountName(Session session, ResourceResolver resolver) {
		String ldapPropertyValue = null;
		User user = null;
		final UserManager userManager = resolver.adaptTo(UserManager.class);
		try {
			if (null != userManager) {
				String loggedInUserId = session.getUserID();
				if (StringUtils.isNotBlank(loggedInUserId)) {
					Authorizable authorizable = userManager.getAuthorizable(loggedInUserId);
					if (null != authorizable) {
						user = (User) authorizable;
						if (CSUFUtils.isCurrentUserAnAdministrator(session)) {
							return UserType.ADMINISTRATOR.name();
						} else {
							String userNodePath = user.getPath();
							if (StringUtils.isNotBlank(userNodePath)) {
								Node userNode = session.getNode(userNodePath);
								if (null != userNode && !userNode.hasProperty(LDAP_PROPERTY)) {
									return UserType.AEM_USER.name();
								}
								if (null != userNode && userNode.hasProperty(LDAP_PROPERTY)) {
									ldapPropertyValue = userNode.getProperty(LDAP_PROPERTY).getString();
									if (StringUtils.isNotBlank(ldapPropertyValue)) {
										boolean isMatchFound = false;
										for (String facultyLDAPAttribute : globalConfigCSUFService
												.facultyLDAPAttributes()) {
											if (StringUtils.containsIgnoreCase(ldapPropertyValue,
													facultyLDAPAttribute)) {
												isMatchFound = true;
												return UserType.FACULTY.name();
											}
										}
										for (String studentLDAPAttribute : globalConfigCSUFService
												.studentLDAPAttributes()) {
											if (StringUtils.containsIgnoreCase(ldapPropertyValue,
													studentLDAPAttribute)) {
												isMatchFound = true;
												return UserType.STUDENT.name();
											}
										}
										if (!isMatchFound) {
											log.error("This LDAP User attribute value is not handled : {}",
													ldapPropertyValue);
											return UserType.UNHANDLED_LDAP_USER.name();
										}
									} else {
										log.error("ldapPropertyValue could not be retrieved from logged in user : {}",
												loggedInUserId);
									}
								} else {
									log.error("userNode is null in getldapAccountName method");
								}
							} else {
								log.error("userNodePath is null in getldapAccountName method");
							}
						}
					}
				} else {
					log.error("loggedInUserId is null in getldapAccountName method");
				}
			} else {
				log.error("userManager is null in getldapAccountName method");
			}
		} catch (RepositoryException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return StringUtils.EMPTY;
	}

	@Override
	public JsonArray getAdobeSignAttachmentFromWorkflowInstanceId(ResourceResolver resourceResolver,
			String adobeSignedDocument, String workflowInstanceId, WorkItem workItem, String workItemId) {
		String payloadPath = StringUtils.EMPTY;
		JsonArray formsJson = new JsonArray();
		log.debug("adobeSignedDocument from getAdobeSignAttachmentFromWorkflowInstanceId= {}", adobeSignedDocument);

		payloadPath = workItem.getWorkflowData().getPayload().toString();
		log.debug("payloadPath from getAdobeSignAttachmentFromWorkflowInstanceId= {}", payloadPath);

		Resource resource = resourceResolver.getResource(payloadPath);
		Iterator<Resource> payloadFiles = resource.listChildren();
		while (payloadFiles.hasNext()) {
			Resource adobeSignFile = payloadFiles.next();
			String filePath = adobeSignFile.getPath();
			String fileName = "";

			if (filePath.contains(adobeSignedDocument)) {
				JsonObject json = new JsonObject();
				// filePath = attachmentXml.getPath().concat("/jcr:content");
				filePath = adobeSignFile.getPath();
				fileName = adobeSignFile.getName();
				json.addProperty("fileName", fileName);
				json.addProperty("path", filePath);
				formsJson.add(json);
			}
		}

		return formsJson;
	}
}
