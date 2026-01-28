package com.csuf.cloud.core.services.impl;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.AccessControlException;
import java.sql.Connection;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import javax.jcr.Session;
import java.util.Map;
import javax.jcr.RepositoryException;
import javax.xml.parsers.ParserConfigurationException;
import org.osgi.service.component.annotations.ReferenceCardinality;
import org.osgi.service.component.annotations.ReferencePolicy;
import org.xml.sax.SAXException;
import com.csuf.cloud.core.services.BulkApprovalFactoryConfigService;
import com.csuf.cloud.core.services.ReminderEmailFactoryConfigService;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.Participant;
import com.adobe.granite.workflow.exec.Route;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.adobe.granite.workflow.model.WorkflowModel;
import com.adobe.granite.workflow.payload.PayloadInfo;
import com.adobe.granite.workflow.payload.PayloadInfoBuilderContext;
import com.adobe.granite.workflow.payload.PayloadInfoBuilderManager;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.UserService;
import com.csuf.cloud.core.services.WorkflowAdministrationConfigService;
import com.csuf.cloud.core.services.WorkflowService;
import com.csuf.cloud.core.utils.ArgumentParser;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.DatabaseUtils;
import com.csuf.cloud.core.utils.XMLUtils;
import com.csuf.cloud.core.vo.WorkflowFilterVO;
import com.csuf.cloud.core.vo.WorkflowVO;
import java.sql.Timestamp;

@Component(service = WorkflowService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=CSUF Workflow Service" })

public class WorkflowServiceImpl implements WorkflowService {

	@Reference
	private EmailService emailService;

	@Reference
	private UserService userService;

	@Reference
	private WorkflowAdministrationConfigService wfConfig;

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUFService;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;

	private Map<String, BulkApprovalFactoryConfigService> configMap;

	private static final String DATE_FORMAT_US = "M/d/yyyy h:mm:ss a";

	@Reference(name = "OSGIFactoryConfig", cardinality = ReferenceCardinality.MULTIPLE, policy = ReferencePolicy.DYNAMIC)
	protected synchronized void bindOSGIFactoryConfig(final BulkApprovalFactoryConfigService config) {
		if (configMap == null) {
			configMap = new HashMap<String, BulkApprovalFactoryConfigService>();
		}
		configMap.put(config.uniqueIdentifier(), config);
	}

	protected synchronized void unbindOSGIFactoryConfig(final BulkApprovalFactoryConfigService config) {
		configMap.remove(config.uniqueIdentifier());
	}

	private static final Logger log = LoggerFactory.getLogger(WorkflowServiceImpl.class);
	private static final String ASSIGN_TASK_STEP = "forms:assigntask";
	private static final String DELEGATEE_GROUP = "workflow-users";
	private static final String START_DATE_FORMAT = "dd/MM/yyyy";

	@Override
	public List<String> sendReminder(WorkflowVO workflowVO) {
		List<String> emailFailureList = emailService.sendEmail(workflowVO.getEmailVO());

		if (null != emailFailureList && !emailFailureList.isEmpty()) {
			log.debug("Email sending failed to the recipients: ".concat(emailFailureList.toString()));
		} else if (null != emailFailureList && emailFailureList.isEmpty()) {
			log.debug("Email sent successfully to ".concat(workflowVO.getEmailVO().getToAddress().toString()));
		} else {
			log.debug("Email sending failed");
		}
		return emailFailureList;
	}

	@Override
	public boolean assignTaskToDelegatee(WorkflowVO workflowVO) throws WorkflowException {
		WorkflowSession graniteWorkflowSession = workflowVO.getGraniteWorkflowSession();
		WorkItem item = workflowVO.getWorkItem();
		if (log.isDebugEnabled()) {
			log.debug("Workitem begin time inside assignTaskToDelegatee method : {}", item.getProgressBeginTime());
			log.debug("Delegatee as calculated from workflow metadata : {}", workflowVO.getDelegateAssignee());
		}

		// add the delegatee to the workflow-users group pro-actively so that he becomes
		// eligible
		boolean isUserAValidDelegatee = userService.addAuthorizableToGroup(workflowVO.getAdminSession(),
				workflowVO.getDelegateAssignee(), DELEGATEE_GROUP);

		Iterator<Participant> delegateeList = graniteWorkflowSession.getDelegates(item);
		while (delegateeList.hasNext()) {
			Participant delegatee = delegateeList.next();
			try {
				if (delegatee.getID().equalsIgnoreCase(workflowVO.getDelegateAssignee())) {
					if (log.isDebugEnabled())
						log.debug("delegatee as retrieved from workflow session for this workitem : {}",
								delegatee.getName());

					if (isUserAValidDelegatee) {
						graniteWorkflowSession.delegateWorkItem(item, delegatee);
						log.info("workitem ::::: {} ::::: successfully delegated to : {}", item.getId(),
								delegatee.getName());
						userService.removeAuthorizableFromGroup(workflowVO.getAdminSession(),
								workflowVO.getDelegateAssignee(), DELEGATEE_GROUP);
						return true;
					} else {
						if (log.isDebugEnabled())
							log.debug(
									"delegatee user is not a member of \"workflow-users\" group, task delegation is aborted");
						return false;
					}
				}
			} catch (AccessControlException | WorkflowException e) {
				log.error(Arrays.toString(e.getStackTrace()));
			}
		}
		return false;
	}

	@Override
	public boolean completeDeadlinedTask(WorkflowVO workflowVO) {
		try {
			WorkflowSession graniteWorkflowSession = workflowVO.getGraniteWorkflowSession();
			WorkItem item = workflowVO.getWorkItem();

			if (log.isDebugEnabled())
				log.debug("Workitem begin time inside completeDeadlinedTask method : {}", item.getProgressBeginTime());
			List<Route> routes = graniteWorkflowSession.getRoutes(item, false);
			List<String> configuredRoutes = workflowVO.getRoutes();
			if (null != routes && !routes.isEmpty()) {
				for (Route route : routes) {
					if (log.isDebugEnabled())
						log.debug("Available route for the workitem :::: {}", route.getName());
					for (String configuredRoute : configuredRoutes) {
						if (log.isDebugEnabled())
							log.debug("Configured route for the workitem :::: {}", configuredRoute);
						if (route.getName().contains(configuredRoute)
								&& item.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)) {

							MetaDataMap map = item.getWorkflow().getWorkflowData().getMetaDataMap();
							/*
							 * map.forEach((key, value) -> log.debug(
							 * " Metadata inside completeDeadlinedTask method ::::: is read inside ReadWorkItemMetadata Class .... and  key , value is :::: "
							 * + key + " : " + value));
							 */
							map.put(workflowVO.getTaskDeadlineMetadataField(), "true");
							graniteWorkflowSession.complete(item, route);
							log.info("workitem :::::: ".concat(item.getId())
									.concat(" ::::: successfully auto advanced to next step in the workflow"));

							return true;
						}
					}
				}
			}
		} catch (WorkflowException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public JsonArray getAllModels(WorkflowSession workflowSession) throws WorkflowException {
		JsonArray responseJson = new JsonArray();
		WorkflowModel[] workflowModels = workflowSession.getModels();
		for (WorkflowModel model : workflowModels) {
			if (null != model && StringUtils.isNotBlank(model.getId()) && StringUtils.isNotBlank(model.getTitle())) {
				JsonObject modelJson = new JsonObject();
				modelJson.addProperty("title", model.getTitle());
				responseJson.add(modelJson);
			}
		}
		return responseJson;
	}

	@Override
	public boolean terminateWorkflow(WorkflowSession workflowSession, String workflowInstanceId) {

		try {
			Workflow workflow = workflowSession.getWorkflow(workflowInstanceId);
			workflowSession.terminateWorkflow(workflow);
			log.debug("Terminated the workitem with instance id=" + workflowInstanceId);
			Timestamp workflowCompleteTime = null;
			workflowCompleteTime = new java.sql.Timestamp(System.currentTimeMillis());
			String workflowStatus = "TERMINATED";
			String dataSourceVal = globalConfigCSUFService.getAEMFormsDatabaseSource();
			log.info("DataSourceVal==========" + dataSourceVal);
			Connection conn = jdbcConnectionService.getDBConn(dataSourceVal);
			if (conn != null) {
				log.info("Connection Successfull");
				DatabaseUtils.updateWFInstanceHistoryStatus(conn, workflowInstanceId, workflowCompleteTime, workflowStatus);
			}
			return true;
		} catch (WorkflowException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public JsonArray getAllActiveWorkflowInstancesData(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, String userid) throws WorkflowException, ParseException {
		log.info("Inside getAllActiveWorkflowInstancesData");
		JsonArray responseJson = new JsonArray();
		JsonArray wfModelJson = new JsonArray();
		Set<String> wfModels = new TreeSet<>();
		String[] states = { "RUNNING" };
		Workflow[] workflows = workflowSession.getWorkflows(states);
		String[] workflowArray = wfConfig.groupWFList();
		ResourceResolver resolver = request.getResourceResolver();
		log.info("userid=" + userid);
		try {
			for (Workflow wfInstance : workflows) {
				log.info("Hello Here");
				if (null != wfInstance && StringUtils.isNotBlank(wfInstance.getId()) && !userid.equals("anonymous")) {
					log.info("Hello Anagha");
					String title = wfInstance.getWorkflowData().getMetaDataMap().get("workflowTitle", String.class);
					log.info("Hello title="+title);
					List<WorkItem> workitems = wfInstance.getWorkItems();
					log.info("Hello workitems="+workitems.size());
					for (WorkItem wItem : workitems) {
						log.info("Hello wItem=");
						String workItemTitle = ArgumentParser.getWorkitemTitle(wItem);
						log.info("Hello workItemTitle="+workItemTitle);
						//if (StringUtils.containsIgnoreCase(title, workflowFilterVO.getModelTitle()) && userid.equals("admin")) {
							log.info("Hello Admin=");
							
							wfModels.add(title);
							String payload = null;
							String payloadLink = null;
							WorkflowData data = wfInstance.getWorkflowData();
							log.info("Hello data="+data);
							// calculate initiator
							String initiator = wfInstance.getInitiator();
							log.info("Hello initiator="+initiator);

							
							if (data.getMetaDataMap().containsKey("userId")) {
								log.info("Hello getMetaDataMap=");
								String launcherUser = data.getMetaDataMap().get("userId", String.class);
								if (initiator != null && !initiator.equals(launcherUser)) {
									initiator += " (" + launcherUser + ")";
								}
							}
							if (data.getPayloadType() != null && (data.getPayloadType().equals("JCR_PATH")
									|| data.getPayloadType().equals("URL"))) {
								log.info("Hello getPayloadType=");
								// use the payload as specified in the workflow instance
								payload = (String) data.getPayload();
							} else {
								if (data.getPayload() != null) {
									payload = data.getPayload().toString();
								}
							}
							String taskDescription = null;
							String fullName = null;
							if (StringUtils.isNotBlank(payload)) {
								log.info("Hello isNotBlank=");
								InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payload,
										"Data.xml");
								if (null != is) {
									Document doc = XMLUtils.getDomDocument(is);
									taskDescription = XMLUtils.getExtendedDesc(doc);
								}
							}
							fullName = getName(workflowArray, taskDescription, title);
							log.info("Hello fullName="+fullName);
							if (StringUtils.containsIgnoreCase(initiator, workflowFilterVO.getInitiator())) {
								Date startTime = wfInstance.getTimeStarted();
								Date workflowFilterStartTime = new SimpleDateFormat(START_DATE_FORMAT)
										.parse(workflowFilterVO.getStartTime());
								if (startTime.after(workflowFilterStartTime)) {
									String startTimeString = getDateString(startTime, request.getLocale());

									if (data.getPayloadType() != null && (data.getPayloadType().equals("JCR_PATH")
											|| data.getPayloadType().equals("URL"))) {
										// use the payload as specified in the workflow instance
										payload = (String) data.getPayload();
									} else {
										if (data.getPayload() != null) {
											payload = data.getPayload().toString();
										}
									}

									if (StringUtils.isNotBlank(payload)) {
										PayloadInfoBuilderManager builder = resolver
												.adaptTo(PayloadInfoBuilderManager.class);
										PayloadInfo info = builder.getPayloadInfo(payload,
												PayloadInfoBuilderContext.INITIATOR_HINT.TOUCH_WORKFLOW_CONSOLE.name());
										payloadLink = info.getBrowserPath();
									}
									String assignee = wItem.getCurrentAssignee();
									log.debug("assignee=" + assignee);
									String format = "M/d/yyyy h:mm:ss a";
									String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(),
											format);
									if (StringUtils.isBlank(stepStartTime)) {
										stepStartTime = wItem.getProgressBeginTime().toString();
									}
									JsonObject wfInstanceJson = new JsonObject();
									wfInstanceJson.addProperty("id", wfInstance.getId());
									wfInstanceJson.addProperty("status", "RUNNING");
									wfInstanceJson.addProperty("initiator", initiator);
									wfInstanceJson.addProperty("modelTitle", title);
									wfInstanceJson.addProperty("startTime", startTimeString);
									wfInstanceJson.addProperty("payloadPath", payloadLink);
									wfInstanceJson.addProperty("assignee", assignee);
									wfInstanceJson.addProperty("workItemTitle", workItemTitle);
									wfInstanceJson.addProperty("workItemId", wItem.getId());
									wfInstanceJson.addProperty("stepStartTime", stepStartTime);
									wfInstanceJson.addProperty("desc", taskDescription);
									wfInstanceJson.addProperty("name", fullName);
									if (StringUtils.isNotBlank(fullName) && fullName.split(" ").length > 1) {
										wfInstanceJson.addProperty("fName",
												StringUtils.isNotBlank(fullName) ? fullName.split(" ")[0] : null);
										wfInstanceJson.addProperty("lName",
												StringUtils.isNotBlank(fullName) ? fullName.split(" ")[1] : null);
									}
									responseJson.add(wfInstanceJson);
								}
							}
						//}
					}
				}
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		wfModels.forEach(wfModelTitle -> {
			wfModelJson.add(wfModelTitle);
		});
		JsonObject wfJson = new JsonObject();
		wfJson.addProperty("workflowModelTitles", wfModelJson.toString());
		responseJson.add(wfJson);
		return responseJson;
	}

	/*
	 * make a REST call to processing instance in order to fetch workflow details
	 */
	@Override
	public String getWorkflowDetailsFromProcessingInstance(String workflowInstanceId, String workItemId)
			throws IOException {
		HttpGet get = null;
		CloseableHttpResponse response = null;
		try (CloseableHttpClient httpclient = HttpClients.createDefault();) {
			get = new HttpGet(processingInstanceConfigService.processingUrl()
					.concat(StringUtils.isNotBlank(workflowInstanceId) ? workflowInstanceId : workItemId)
					.concat(".json"));
			String auth = new StringBuffer(processingInstanceConfigService.userName()).append(":")
					.append(processingInstanceConfigService.userSecurity()).toString();
			byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
			String authHeader = "Basic " + new String(encodedAuth);
			get.setHeader("AUTHORIZATION", authHeader);
			response = httpclient.execute(get);
			if (null != response && response.getStatusLine().getStatusCode() == 200) {
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

	String getDateString(Date dte, Locale locale) {
		DateFormat formatter = DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT, locale);
		return formatter.format(dte.getTime());

	}

	@Override
	public JsonArray getAllActiveWorkitemData(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, Session session, String userid)
			throws WorkflowException, ParseException {
		log.info("Adarsh getAllActiveWorkitemData");
		JsonArray responseJson = new JsonArray();
		JsonArray wfModelJson = new JsonArray();
		Set<String> wfModels = new TreeSet<>();
		String[] states = { "RUNNING" };
		Workflow[] workflows = workflowSession.getWorkflows(states);
		log.info("Adarsh workflows="+workflows);
		String[] workflowArray = wfConfig.groupWFList();
		log.info("Adarsh workflowArray="+workflowArray);
		ResourceResolver resolver = request.getResourceResolver();
		log.info("userid=" + userid);
		try {
			for (Workflow wfInstance : workflows) {
				log.info("Adarsh wfInstance=" + wfInstance);

				if (null != wfInstance && StringUtils.isNotBlank(wfInstance.getId()) && !userid.equals("anonymous")) {
					log.info("Adarsh confition=" + wfInstance);
					String title = wfInstance.getWorkflowData().getMetaDataMap().get("workflowTitle", String.class);
					log.info("Adarsh title=" + title);
					List<WorkItem> workitems = wfInstance.getWorkItems();
					log.info("Adarsh workitems=" + workitems);
					for (WorkItem wItem : workitems) {
						log.info("wItemid=" + wItem.getId());
						log.info("wItem type=" + wItem.getItemSubType());
						if (null != wItem.getItemSubType()
								&& wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)) {
							String[] userArray = wfConfig.getDelegateGroupList();
							log.info("Matching the criteria=" + (userid.equals("admin") || wfConfig
									.getAuthorisedWorkflowAdministrators(title, userid, session, userArray)));
							//if (userid.equals("admin") || wfConfig.getAuthorisedWorkflowAdministrators(title, userid,session, userArray)) {
								String workItemTitle = ArgumentParser.getWorkitemTitle(wItem);
								// if (StringUtils.containsIgnoreCase(title, workflowFilterVO.getModelTitle()))
								// {
								wfModels.add(title);
								String payload = null;
								String payloadLink = null;
								WorkflowData data = wfInstance.getWorkflowData();

								// calculate initiator
								String initiator = wfInstance.getInitiator();
								if (data.getMetaDataMap().containsKey("userId")) {
									String launcherUser = data.getMetaDataMap().get("userId", String.class);
									if (initiator != null && !initiator.equals(launcherUser)) {
										initiator += " (" + launcherUser + ")";
									}
								}

								if (data.getPayloadType() != null && (data.getPayloadType().equals("JCR_PATH")
										|| data.getPayloadType().equals("URL"))) {
									// use the payload as specified in the workflow instance
									payload = (String) data.getPayload();
								} else {
									if (data.getPayload() != null) {
										payload = data.getPayload().toString();
									}
								}
								String taskDescription = null;
								String fullName = null;
								if (StringUtils.isNotBlank(payload)) {
									InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payload,
											"Data.xml");
									if (null != is) {
										Document doc = XMLUtils.getDomDocument(is);
										taskDescription = XMLUtils.getExtendedDesc(doc);
									}
								}
								fullName = getName(workflowArray, taskDescription, title);

								if (StringUtils.containsIgnoreCase(initiator, workflowFilterVO.getInitiator())) {
									Date startTime = wfInstance.getTimeStarted();
									Date workflowFilterStartTime = new SimpleDateFormat(START_DATE_FORMAT)
											.parse(workflowFilterVO.getStartTime());
									if (startTime.after(workflowFilterStartTime)) {
										String startTimeString = getDateString(startTime, request.getLocale());

										if (data.getPayloadType() != null && (data.getPayloadType().equals("JCR_PATH")
												|| data.getPayloadType().equals("URL"))) {
											// use the payload as specified in the workflow instance
											payload = (String) data.getPayload();
										} else {
											if (data.getPayload() != null) {
												payload = data.getPayload().toString();
											}
										}

										if (StringUtils.isNotBlank(payload)) {

											PayloadInfoBuilderManager builder = resolver
													.adaptTo(PayloadInfoBuilderManager.class);
											PayloadInfo info = builder.getPayloadInfo(payload,
													PayloadInfoBuilderContext.INITIATOR_HINT.TOUCH_WORKFLOW_CONSOLE
															.name());
											payloadLink = info.getBrowserPath();
										}

										String assignee = wItem.getCurrentAssignee();
										JsonObject wfInstanceJson = new JsonObject();
										wfInstanceJson.addProperty("id", wfInstance.getId());
										wfInstanceJson.addProperty("status", "RUNNING");
										wfInstanceJson.addProperty("initiator", initiator);
										wfInstanceJson.addProperty("modelTitle", title);
										wfInstanceJson.addProperty("startTime", startTimeString);
										wfInstanceJson.addProperty("payloadPath", payloadLink);
										wfInstanceJson.addProperty("assignee", assignee);
										wfInstanceJson.addProperty("workItemTitle", workItemTitle);
										wfInstanceJson.addProperty("workItemId", wItem.getId());
										wfInstanceJson.addProperty("desc", taskDescription);
										wfInstanceJson.addProperty("name", fullName);
										if (StringUtils.isNotBlank(fullName) && fullName.split(" ").length > 1) {
											wfInstanceJson.addProperty("fName",
													StringUtils.isNotBlank(fullName) ? fullName.split(" ")[0] : null);
											wfInstanceJson.addProperty("lName",
													StringUtils.isNotBlank(fullName) ? fullName.split(" ")[1] : null);
										}
										if (!wfConfig.isAssigneeAGroup(assignee, session)) {
											responseJson.add(wfInstanceJson);
										}

									}
								}
							//}
						}
					}

				}
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		wfModels.forEach(wfModelTitle -> {
			wfModelJson.add(wfModelTitle);
		});
		JsonObject wfJson = new JsonObject();
		wfJson.addProperty("workflowModelTitles", wfModelJson.toString());
		responseJson.add(wfJson);
		return responseJson;
	}

	@Override
	public JsonArray getAllSubmissionData(SlingHttpServletRequest request, WorkflowSession workflowSession,
			WorkflowFilterVO workflowFilterVO, Session session, String userid)
			throws WorkflowException, ParseException {
		ResourceResolver resolver = request.getResourceResolver();
		JsonArray responseJson = new JsonArray();
		JsonArray wfModelJson = new JsonArray();
		Set<String> wfModels = new TreeSet<String>();
		String[] states = { "RUNNING" };
		Workflow[] workflows = workflowSession.getWorkflows(states);
		log.debug("userid=" + userid);
		try {
			for (final Workflow wfInstance : workflows) {
				if (wfInstance.getState().matches("RUNNING") && !userid.equals("anonymous")) {
					WorkflowServiceImpl.log.debug("item state=" + wfInstance.getState());
					if (null != wfInstance && StringUtils.isNotBlank((CharSequence) wfInstance.getId())) {
						String payload = "";
						String payloadLink = "";
						String assignee = "";
						String workItemTitle = "";
						String workItemId = "";
						String startTimeString = "";
						String endTimeString = "";
						String fullName = "";
						String[] workflowArray = wfConfig.groupWFList();
						String title = wfInstance.getWorkflowData().getMetaDataMap().get("workflowTitle", String.class);
						List<WorkItem> workitems = (List<WorkItem>) wfInstance.getWorkItems();
						for (WorkItem wItem : workitems) {
							workItemId = wItem.getId();
							log.debug("userid=" + userid);
							log.debug("wItemid=" + wItem.getId());
							log.debug("wItem type=" + wItem.getItemSubType());
							if (null != wItem.getItemSubType()
									&& !wItem.getItemSubType().toString().equals("FailureItem")
									&& wItem.getItemSubType().equalsIgnoreCase("forms:assigntask")) {
								workItemTitle = ArgumentParser.getWorkitemTitle(wItem);
								wfModels.add(title);
								WorkflowData data = wfInstance.getWorkflowData();
								String initiator = wfInstance.getInitiator();
								if (data.getMetaDataMap().containsKey((Object) "userId")) {
									String launcherUser = data.getMetaDataMap().get("userId", String.class);
									if (initiator != null && !initiator.equals(launcherUser)) {
										initiator = initiator + " (" + launcherUser + ")";
									}
								}
								assignee = wItem.getCurrentAssignee();
								log.debug("initiator=" + initiator);
								log.debug("assignee=" + assignee);

								if (data.getPayloadType() != null && (data.getPayloadType().equals("JCR_PATH")
										|| data.getPayloadType().equals("URL"))) {
									payload = (String) data.getPayload();
								} else if (data.getPayload() != null) {
									payload = data.getPayload().toString();
								}
								String taskDescription = null;
								if (StringUtils.isNotBlank(payload)) {
									InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payload,
											"Data.xml");
									if (null != is) {
										Document doc = XMLUtils.getDomDocument(is);
										taskDescription = XMLUtils.getExtendedDesc(doc);
									}
								}
								fullName = getName(workflowArray, taskDescription, title);

								log.debug("taskDescription =" + taskDescription);
								if ((userid.equals(initiator) && StringUtils.containsIgnoreCase(
										(CharSequence) initiator, (CharSequence) workflowFilterVO.getInitiator()))) {

									final Date startTime = wfInstance.getTimeStarted();
									final Date workflowFilterStartTime = new SimpleDateFormat("dd/MM/yyyy")
											.parse(workflowFilterVO.getStartTime());
									if (startTime.after(workflowFilterStartTime)) {
										startTimeString = CSUFUtils.convertDateToString(startTime,
												"M/d/yyyy h:mm:ss a");
										if (data.getPayloadType() != null && (data.getPayloadType().equals("JCR_PATH")
												|| data.getPayloadType().equals("URL"))) {
											payload = (String) data.getPayload();
										} else if (data.getPayload() != null) {
											payload = data.getPayload().toString();
										}
										if (StringUtils.isNotBlank(payload)) {

											PayloadInfoBuilderManager builder = resolver
													.adaptTo(PayloadInfoBuilderManager.class);
											PayloadInfo info = builder.getPayloadInfo(payload,
													PayloadInfoBuilderContext.INITIATOR_HINT.TOUCH_WORKFLOW_CONSOLE
															.name());
											payloadLink = info.getBrowserPath();
										}
									}

									final JsonObject wfInstanceJson = new JsonObject();
									wfInstanceJson.addProperty("id", wfInstance.getId());
									wfInstanceJson.addProperty("status", wfInstance.getState());
									wfInstanceJson.addProperty("initiator", initiator);
									wfInstanceJson.addProperty("modelTitle", title);
									wfInstanceJson.addProperty("startTime", startTimeString);
									wfInstanceJson.addProperty("endTime", endTimeString);
									wfInstanceJson.addProperty("payloadPath", payloadLink);
									wfInstanceJson.addProperty("assignee", assignee);
									wfInstanceJson.addProperty("workItemTitle", workItemTitle);
									wfInstanceJson.addProperty("workItemId", workItemId);
									wfInstanceJson.addProperty("desc", taskDescription);
									wfInstanceJson.addProperty("name", fullName);
									if (StringUtils.isNotBlank(fullName) && fullName.split(" ").length > 1) {
										wfInstanceJson.addProperty("fName",
												StringUtils.isNotBlank(fullName) ? fullName.split(" ")[0] : null);
										wfInstanceJson.addProperty("lName",
												StringUtils.isNotBlank(fullName) ? fullName.split(" ")[1] : null);
									}
									responseJson.add(wfInstanceJson);
								}
							}
						}
					}
				}
			}
		} catch (Exception e) {
			WorkflowServiceImpl.log.error(Arrays.toString(e.getStackTrace()));
		}
		wfModels.forEach(wfModelTitle -> wfModelJson.add(wfModelTitle));
		final JsonObject wfJson = new JsonObject();
		wfJson.addProperty("workflowModelTitles", wfModelJson.toString());
		responseJson.add(wfJson);
		return responseJson;
	}

	private String getName(String[] wfArray, String desc, String wfTitle) {
		String fullName = StringUtils.EMPTY;
		try {
			for (int j = 0; j < wfArray.length; j++) {
				if (!wfTitle.equals(wfArray[j])) {
					Pattern pattern = Pattern.compile("^\\D*(\\d)");
					Matcher matcher = pattern.matcher(desc);
					if (matcher.find()) {
						if ((desc.substring(0, matcher.start(1))).contains(",")) {
							fullName = (desc.substring(0, matcher.start(1))).trim().split(",")[1].trim()
									.concat(" " + (desc.substring(0, matcher.start(1))).split(",")[0].trim());
						} else if (Character.isDigit(desc.charAt(0))) {
							fullName = desc.replaceAll("\\d", "");
							if (fullName.substring(0, 1).equals(" ")) {
								fullName = fullName.substring(1, fullName.length());
							}
						} else {
							fullName = desc.substring(0, matcher.start(1));
						}
					} else {
						fullName = desc.replaceAll("\\d", "").trim();
					}
				}
			}
			return fullName;

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonArray getAllActiveWorkitemDataForBulkApproval(SlingHttpServletRequest request,
			WorkflowSession workflowSession, WorkflowFilterVO workflowFilterVO, Session session, String userid)
			throws WorkflowException, ParseException {
		JsonArray responseJson = new JsonArray();
		JsonArray wfModelJson = new JsonArray();
		Set<String> wfModels = new TreeSet<>();
		String[] states = { "RUNNING" };
		Workflow[] workflows = workflowSession.getWorkflows(states);
		String[] workflowArray = wfConfig.groupWFList();
		ResourceResolver resolver = request.getResourceResolver();
		log.debug("userid=" + userid);
		try {
			for (Workflow wfInstance : workflows) {
				if (null != wfInstance && StringUtils.isNotBlank(wfInstance.getId()) && !userid.equals("anonymous")) {
					String title = wfInstance.getWorkflowData().getMetaDataMap().get("workflowTitle", String.class);
					List<WorkItem> workitems = wfInstance.getWorkItems();
					for (WorkItem wItem : workitems) {
						log.info("wItemid=" + wItem.getId());
						log.info("wItem type=" + wItem.getItemSubType());
							if (null != wItem.getItemSubType()
								&& wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)) {
							configMap.forEach((bulkApprovalConfigIdentifier, bulkApprovalConfig) -> {
								if (StringUtils.isNotBlank(bulkApprovalConfigIdentifier)) {
									// Map<String, Object> jobProperties = new HashMap<String, Object>();
									log.info("Matching the criteria=" + (userid.equals("admin")));
									if (StringUtils.containsIgnoreCase(title, bulkApprovalConfig.workflowModel())) {
										String workItemTitle = ArgumentParser.getWorkitemTitle(wItem);

										if (userid.equals("admin")
												&& workItemTitle.equals(bulkApprovalConfig.taskTitle())) {
											MetaDataMap metadataMap = wfInstance.getWorkflowData().getMetaDataMap();
											String specialReviewFlag = metadataMap.get("SpecialReview", String.class);
											if(specialReviewFlag == null || !specialReviewFlag.equals("1")) {
											wfModels.add(title);
											String payload = null;
											String payloadLink = null;
											WorkflowData data = wfInstance.getWorkflowData();
											// calculate initiator
											String initiator = wfInstance.getInitiator();
											if (data.getMetaDataMap().containsKey("userId")) {
												String launcherUser = data.getMetaDataMap().get("userId", String.class);
												if (initiator != null && !initiator.equals(launcherUser)) {
													initiator += " (" + launcherUser + ")";
												}
											}
											if (data.getPayloadType() != null
													&& (data.getPayloadType().equals("JCR_PATH")
															|| data.getPayloadType().equals("URL"))) {
												// use the payload as specified in the workflow instance
												payload = (String) data.getPayload();
											} else {
												if (data.getPayload() != null) {
													payload = data.getPayload().toString();
												}
											}
											String taskDescription = null;
											String fullName = null;
											if (StringUtils.isNotBlank(payload)) {
												try {
													InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver,
															payload, "Data.xml");
													if (null != is) {
														Document doc = XMLUtils.getDomDocument(is);
														taskDescription = XMLUtils.getExtendedDesc(doc);
													}
												} catch (RepositoryException | SAXException | IOException
														| ParserConfigurationException e) {
													// TODO Auto-generated catch block
													e.printStackTrace();
												}
											}
											fullName = getName(workflowArray, taskDescription, title);
											String startTimeString = StringUtils.EMPTY;
											JsonObject stepStartTimeJson = new JsonObject();
											try {
												if (StringUtils.containsIgnoreCase(initiator,
														workflowFilterVO.getInitiator())) {
													Date startTime = wfInstance.getTimeStarted();
													Date workflowFilterStartTime = new SimpleDateFormat(
															START_DATE_FORMAT).parse(workflowFilterVO.getStartTime());
													if (startTime.after(workflowFilterStartTime)) {
														startTimeString = getDateString(startTime, request.getLocale());

														if (StringUtils.isBlank(startTimeString)) {
															startTimeString = wItem.getProgressBeginTime().toString();
														}
														String stepStartTime = CSUFUtils.convertDateToString(
																wItem.getProgressBeginTime(), DATE_FORMAT_US);

														stepStartTimeJson.addProperty("display", stepStartTime);
														stepStartTimeJson.addProperty("timestamp",
																wItem.getProgressBeginTime().getTime());

														if (data.getPayloadType() != null
																&& (data.getPayloadType().equals("JCR_PATH")
																		|| data.getPayloadType().equals("URL"))) {
															// use the payload as specified in the workflow instance
															payload = (String) data.getPayload();
														} else {
															if (data.getPayload() != null) {
																payload = data.getPayload().toString();
															}
														}
													}
												}
											} catch (ParseException e) {
												// TODO Auto-generated catch block
												e.printStackTrace();
											}
											if (StringUtils.isNotBlank(payload)) {
												PayloadInfoBuilderManager builder = resolver
														.adaptTo(PayloadInfoBuilderManager.class);
												PayloadInfo info = builder.getPayloadInfo(payload,
														PayloadInfoBuilderContext.INITIATOR_HINT.TOUCH_WORKFLOW_CONSOLE
																.name());
												payloadLink = info.getBrowserPath();
											}
											String assignee = wItem.getCurrentAssignee();
											JsonObject wfInstanceJson = new JsonObject();
											JSONArray jsonArray = new JSONArray(bulkApprovalConfig.xmlFieldsToUpdate());
											log.debug("json=" + jsonArray);
											JsonObject fieldsJson = new JsonObject();
											for (int i = 0; i < jsonArray.length(); i++) {
												try {
													fieldsJson.addProperty("key" + i, jsonArray.getString(i));
												} catch (JSONException e) {
													// TODO Auto-generated catch block
													e.printStackTrace();
												}
											}
											wfInstanceJson.add("fields", fieldsJson);
											wfInstanceJson.addProperty("id", wfInstance.getId());
											wfInstanceJson.addProperty("status", "RUNNING");
											wfInstanceJson.addProperty("initiator", initiator);
											wfInstanceJson.addProperty("modelTitle", title);
											wfInstanceJson.add("startTime", stepStartTimeJson);
											wfInstanceJson.addProperty("payloadPath", payloadLink);
											wfInstanceJson.addProperty("assignee", assignee);
											wfInstanceJson.addProperty("workItemTitle", workItemTitle);
											wfInstanceJson.addProperty("workItemId", wItem.getId());
											wfInstanceJson.addProperty("desc", taskDescription);
											wfInstanceJson.addProperty("name", fullName);
											if (StringUtils.isNotBlank(fullName) && fullName.split(" ").length > 1) {
												wfInstanceJson.addProperty("fName",
														StringUtils.isNotBlank(fullName) ? fullName.split(" ")[0]
																: null);
												wfInstanceJson.addProperty("lName",
														StringUtils.isNotBlank(fullName) ? fullName.split(" ")[1]
																: null);
											}
											// if (!wfConfig.isAssigneeAGroup(assignee, session)) {
											responseJson.add(wfInstanceJson);
											// }
										}
										}
									}
								}
							});
						}
					}
				}
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		wfModels.forEach(wfModelTitle -> {
			wfModelJson.add(wfModelTitle);
		});
		JsonObject wfJson = new JsonObject();
		wfJson.addProperty("workflowModelTitles", wfModelJson.toString());
		responseJson.add(wfJson);
		return responseJson;
	}

	@Override
	public boolean assignTaskToDelegateeForGroupDelegatee(WorkflowVO workflowVO, String participant)
			throws WorkflowException {
		WorkflowSession graniteWorkflowSession = workflowVO.getGraniteWorkflowSession();
		WorkItem item = workflowVO.getWorkItem();
		if (log.isDebugEnabled()) {
			log.debug("Workitem begin time inside assignTaskToDelegatee method : {}", item.getProgressBeginTime());
			log.debug("Delegatee as calculated from workflow metadata : {}", workflowVO.getDelegateAssignee());
		}

		// add the delegatee to the group pro-actively so that he becomes eligible
		boolean isUserAValidDelegatee = userService.addAuthorizableToGroup(workflowVO.getAdminSession(),
				workflowVO.getDelegateAssignee(), participant);

		Iterator<Participant> delegateeList = graniteWorkflowSession.getDelegates(item);
		while (delegateeList.hasNext()) {
			Participant delegatee = delegateeList.next();
			try {
				if (delegatee.getID().equalsIgnoreCase(workflowVO.getDelegateAssignee())) {
					if (log.isDebugEnabled())
						log.debug("delegatee as retrieved from workflow session for this workitem : {}",
								delegatee.getName());

					if (isUserAValidDelegatee) {
						graniteWorkflowSession.delegateWorkItem(item, delegatee);
						log.info("workitem ::::: {} ::::: successfully delegated to : {}", item.getId(),
								delegatee.getName());
						userService.removeAuthorizableFromGroup(workflowVO.getAdminSession(),
								workflowVO.getDelegateAssignee(), participant);
						return true;
					} else {
						if (log.isDebugEnabled())
							log.debug("delegatee user is not a member of group, task delegation is aborted");
						return false;
					}
				}
			} catch (AccessControlException | WorkflowException e) {
				log.error(Arrays.toString(e.getStackTrace()));
			}
		}
		return false;
	}
}
