package com.csuf.cloud.core.schedulers;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;

import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.jcr.Session;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.model.WorkflowModel;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.schedulers.SendTelecommutingRemindersScheduler.Configuration;
import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.utils.CSUFConstantsUtils;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.DatabaseUtils;
import com.csuf.cloud.core.utils.XMLUtils;
import com.csuf.cloud.core.vo.EmailServiceVO;

@Component(immediate = true, configurationPid = "csuf.scheduler.authorizationPrivateVehicleRenewal.Scheduler", property = {
		Constants.SERVICE_DESCRIPTION
				+ "= To trigger the renewal form of Authorization Privately Owned Vehicle Scheduler Service" })
@Designate(ocd = AuthorizationPrivatelyOwnedVehicleScheduler.Configuration.class)
public class AuthorizationPrivatelyOwnedVehicleScheduler implements Runnable {

	protected static Logger log = LoggerFactory.getLogger(AuthorizationPrivatelyOwnedVehicleScheduler.class);
	private int schedulerID;
	private Configuration config;
	String workflowStatus = "COMPLETED";
	private static final String ALLOWED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	private static final String WF_MODEL = "/var/workflow/models/Authorization-To-Use-Privately-Owned-Vehicles-Renewal";
	private static final String WF_MODEL_TITLE = "Authorization To Use Privately Owned Vehicles - Renewal";

	@Reference
	private Scheduler scheduler;

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUService;

	@Reference
	private TaskService taskService;

	@Reference
	private JDBCConnectionHelperService jdbcService;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;

	@Reference
	private AssetService assetService;

	@Activate
	public void activate(Configuration config) {
		schedulerID = config.schedulerName().hashCode();
		addScheduler(config);
	}

	@Modified
	protected void modified(Configuration config) {
		removeScheduler();
		schedulerID = config.schedulerName().hashCode(); // update schedulerID
		addScheduler(config);
	}

	@Deactivate
	protected void deactivate(Configuration config) {
		removeScheduler();
	}

	/**
	 * Remove a scheduler based on the scheduler ID
	 */
	private void removeScheduler() {
		log.debug("Send AuthorizationPrivatelyOwnedVehicleRenewal Scheduler Job '{}'", schedulerID);
		scheduler.unschedule(String.valueOf(schedulerID));
	}

	/**
	 * Add a scheduler based on the scheduler ID
	 */
	private void addScheduler(Configuration config) {
		if (config.isSchedulerEnabled()) {
			ScheduleOptions sopts = scheduler.EXPR(config.schedulerExpression());
			sopts.name(String.valueOf(schedulerID));
			sopts.canRunConcurrently(false);
			scheduler.schedule(this, sopts);
			log.debug(
					"Send AuthorizationPrivatelyOwnedVehicleRenewal Scheduler added succesfully with cron expression : {}",
					config.schedulerExpression());
			this.config = config;
		} else {
			log.debug(
					"Send AuthorizationPrivatelyOwnedVehicleRenewal Scheduler is disabled, no scheduler job will be created");
		}
	}

	@Override
	public void run() {
		log.debug("starting Send AuthorizationPrivatelyOwnedVehicleRenewal Scheduler Service...");
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Document doc = null;
		InputStream is = null;
		JsonObject json = null;
		Session session = null;
		Connection dbConn = null;
		JSONArray resultArray = new JSONArray();
		try {
			// int timeline = config.getTimeline();
			// String timeLine = String.valueOf(timeline);
			// string launchStatus = "";
			resolver = globalConfigService.getResourceResolver();
			session = globalConfigService.getAdminSession();
			wfSession = resolver.adaptTo(WorkflowSession.class);
			String dataSourceVal = globalConfigCSUService.getAEMFormsDatabaseSource();
			dbConn = getConnection(dataSourceVal);

			String sqlQuery = CSUFConstantsUtils.getAuthorizationPrivatelyOwnedVehicleSubmittedData;
			sqlQuery = sqlQuery.replaceAll("<<WORKFLOW_STATUS>>", workflowStatus);
			// sqlQuery = sqlQuery.replaceAll("<<LAUNCH_STATUS>>", launchStatus);
			String lookupFields = CSUFConstantsUtils.getAuthorizationPrivatelyOwnedVehicleSubmittedDataLookupField;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			log.debug("resultArray: {}", resultArray);

			JSONObject objects = null;

			for (int i = 0; i < resultArray.length(); i++) {
				objects = resultArray.getJSONObject(i);
				log.debug(" renewal objects: {}", objects);
				String payloadPath = objects.getString("PAYLOAD_PATH");
				String workflowInstanceId = objects.getString("WORKFLOW_INSTANCE_ID");
				if (objects.has("DATA_XML")) {
					String payloadData = objects.getString("DATA_XML");
					log.debug("renewal payloadData: {}", payloadData);
					is = IOUtils.toInputStream(payloadData, StandardCharsets.UTF_8);
					if (null != is) {
						doc = XMLUtils.getDomDocument(is);
						WorkflowModel workModel = wfSession.getModel(config.getWorkflowModelPath());
						log.debug("renewal workModel: {}", workModel);
						String newPayloadPath = createNewPayloadPath(session, payloadPath, doc, json);
						log.debug("renewal newPayloadPath: {}", newPayloadPath);
						if (StringUtils.isNotBlank(newPayloadPath)) {
							final Map<String, Object> workflowMetadata = new HashMap<>();
							workflowMetadata.put("renewal workflowTitle", config.getWorkflowModelName());
							WorkflowData wfData = wfSession.newWorkflowData("JCR_PATH", newPayloadPath);
							log.debug("renewal wfData: {}", wfData);
							workflowMetadata.entrySet().stream().forEach(arg -> {
								workflowMetadata.put(arg.getKey(), arg.getValue());
								log.debug("renewal workflowMetadata key : {}, value : {}", arg.getKey(),
										arg.getValue());
							});
							Workflow wf = wfSession.startWorkflow(workModel, wfData, workflowMetadata);
							if (wf.getId() != null) {
								DatabaseUtils.updateAuthorizationPrivatelyOwnedVehiclesDataTable(dbConn, workflowInstanceId);
							}
							log.debug("renewal wf instance id : {}", wf.getId());
						}
					}
				}
			}

		} catch (Exception e) {
			log.error("Error while running Send AuthorizationPrivatelyOwnedVehicleRenewal Scheduler Service", e);
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
			if (session != null && session.isLive()) {
				session.logout();
			}
			if (dbConn != null) {
				try {
					dbConn.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
		}
		log.debug("completed execution of \"Send AuthorizationPrivatelyOwnedVehicleRenewal Scheduler Service\"...");
	}

	@ObjectClassDefinition(name = "Renewal of Authorization Privately Owned Vehicle Form Scheduler Configuration")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression.", type = AttributeType.STRING)
		String schedulerExpression() default "0 0/5 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "Renewal of Authorization Privately Owned Vehicle Form Scheduler Configuration";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default false;

		@AttributeDefinition(name = "Workflow Model Name", description = "Workflow Model Name")
		String getWorkflowModelName() default WF_MODEL_TITLE;

		@AttributeDefinition(name = "Workflow Model Path", description = "Workflow Model Path")
		String getWorkflowModelPath() default WF_MODEL;

	}

	private String createNewPayloadPath(Session session, String existingPayload, Document doc, JsonObject json)
			throws Exception {
		String afPath = null;
		int payloadPathStringIndex = 0;
		String trimmedPath = "";
		if (existingPayload.indexOf("_") != -1) {
			int lastSlashIndex = existingPayload.lastIndexOf("/");
			trimmedPath = existingPayload.substring(0, lastSlashIndex + 1);
			String payloadPathString = existingPayload.substring(lastSlashIndex + 1, existingPayload.length());
			payloadPathStringIndex = payloadPathString.lastIndexOf("_");
		} else if (existingPayload.indexOf("_") == -1) {
			int lastSlashIndex = existingPayload.lastIndexOf("/");
			trimmedPath = existingPayload.substring(0, lastSlashIndex + 1);
			payloadPathStringIndex = 26;
		}
		String randomString = CSUFUtils.generateRandomString(payloadPathStringIndex, ALLOWED_CHARS);
		String newJCRPayloadPath = trimmedPath.concat(randomString);
		log.debug("The new JCR Payload node path for renewal = {}", newJCRPayloadPath);

		try {
			Element xmlRoot = doc.getDocumentElement();
			Element afParentElement = XMLUtils.getParentNode(doc, "afSubmissionInfo");
			if (null != afParentElement && afParentElement.hasChildNodes()) {
				afPath = XMLUtils.getChildNodeContent(afParentElement, "afPath");
				log.debug("afPath = {}", afPath);
			}
			InputStream is = XMLUtils.getInputStreamFromXMLDocument(doc);
			boolean isNewPayloadJCRPathCreated = assetService.writeNtFileToPayloadPath(session, "Data.xml", afPath,
					newJCRPayloadPath, is);
			log.debug("new payload node got created with status for renewal = {}", isNewPayloadJCRPathCreated);
			if (isNewPayloadJCRPathCreated) {
				return newJCRPayloadPath;
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()), e);
		}
		return null;
	}

	private Connection getConnection(String dataSource) {
		try {
			Connection dbConn = jdbcConnectionService.getDBConn(dataSource);
			log.debug("Connection = {}", dbConn);
			return dbConn;

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

}
