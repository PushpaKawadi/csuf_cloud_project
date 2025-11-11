package com.csuf.cloud.core.schedulers;

import java.io.InputStream;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import javax.jcr.Session;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

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
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.Workflow;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.model.WorkflowModel;
import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.services.FallbackUserConfigService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.utils.CSUFConstantsUtils;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.DatabaseUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(immediate = true, configurationPid = "csuf.scheduler.afterTheFactEval.Scheduler", property = {
		Constants.SERVICE_DESCRIPTION + "= AT Guidelines After the Fact Scheduler Service" })
@Designate(ocd = ATGuidelinesAfterTheFactEvaluationScheduler.Configuration.class)
public class ATGuidelinesAfterTheFactEvaluationScheduler implements Runnable {

	protected static Logger log = LoggerFactory.getLogger(ATGuidelinesAfterTheFactEvaluationScheduler.class);
	private int schedulerID;
	private Configuration config;
	private static final String ALLOWED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final String WF_MODEL = "/var/workflow/models/after-the-fact-evaluation-form";
	private static final String WF_MODEL_TITLE = "After the Fact Evaluation Form";
	private static final String PAYLOAD_PATH = "/var/fd/dashboard/payload/server0";

	@Reference
	private Scheduler scheduler;

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUService;

	@Reference
	private FallbackUserConfigService fallBackConfigUserService;

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
		log.debug("AT Guidelines After the Fact Scheduler Job '{}'", schedulerID);
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
			log.debug("AT Guidelines After the Fact Scheduler added succesfully with cron expression : {}",
					config.schedulerExpression());
			this.config = config;
		} else {
			log.debug("AT Guidelines After the Fact Scheduler is disabled, no scheduler job will be created");
		}
	}

	@ObjectClassDefinition(name = "AT Guidelines After The Fact Launch Scheduler Configuration")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression. Default: run every 5 minutes", type = AttributeType.STRING)
		String schedulerExpression() default "0 0/5 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "AT Guidleines After The Fact Evaluation Launch Scheduler Configuration";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default false;

		@AttributeDefinition(name = "Payload Path", description = "Payload Path for Scheduler", type = AttributeType.STRING)
		String getPayloadPath() default PAYLOAD_PATH;

		@AttributeDefinition(name = "Workflow Model Name", description = "Workflow Model Name")
		String getWorkflowModelName() default WF_MODEL_TITLE;

		@AttributeDefinition(name = "Workflow Model Path", description = "Workflow Model Path")
		String getWorkflowModelPath() default WF_MODEL;

		@AttributeDefinition(name = "College", description = "College")
		String getCollege() default "College Name";

		@AttributeDefinition(name = "Term", description = "Term")
		String getTerm() default "Term";

	}

	@Override
	public void run() {
		log.debug("starting AT Guidelines After the Fact Launch Scheduler Service...");
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Session session = null;
		InputStream is = null;
		Document doc = null;
		Connection aemdbdevDBConn = null;
		Connection docDBConn = null;
		JSONArray resultArray = new JSONArray();
		try {
			aemdbdevDBConn = jdbcConnectionService.getDBConn(globalConfigCSUService.getAEMFormsDatabaseSource());
			docDBConn = jdbcConnectionService.getDocDBConnection();
			String payloadPath = config.getPayloadPath();
			resolver = globalConfigService.getResourceResolver();
			session = globalConfigService.getAdminSession();
			wfSession = resolver.adaptTo(WorkflowSession.class);
			String sqlQuery = CSUFConstantsUtils.getAfterTheFactLaunchingData;
			sqlQuery = sqlQuery.replaceAll("<<COLLEGE>>", config.getCollege());
			sqlQuery = sqlQuery.replaceAll("<<TERM>>", config.getTerm());
			String lookupFields = CSUFConstantsUtils.getAfterTheFactLaunchingDataLookupFields;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, aemdbdevDBConn);
			JSONObject objects = null;
			log.debug("Count of records fetched from DB " + resultArray.length());
			// for (int i = 0; i < resultArray.length(); i++) {
			objects = resultArray.getJSONObject(0);
			String dataXml = createXml(objects, aemdbdevDBConn, docDBConn);
			log.debug("XML " + dataXml);
			if (dataXml != null) {
				is = IOUtils.toInputStream(dataXml, StandardCharsets.UTF_8);
				if (null != is) {
					doc = XMLUtils.getDomDocument(is);
					WorkflowModel workModel = wfSession.getModel(config.getWorkflowModelPath());
					String generatedPayloadPath = CSUFUtils.getRecentlyCreatedPayloadPath(resolver, payloadPath);
					String newPayloadPath = createNewPayloadPath(session, generatedPayloadPath, doc);
					if (StringUtils.isNotBlank(newPayloadPath)) {
						final Map<String, Object> workflowMetadata = new HashMap<>();
						workflowMetadata.put("workflowTitle", config.getWorkflowModelName());
						WorkflowData wfData = wfSession.newWorkflowData("JCR_PATH", newPayloadPath);
						workflowMetadata.entrySet().stream().forEach(arg -> {
							workflowMetadata.put(arg.getKey(), arg.getValue());
							log.debug("workflowMetadata key : {}, value : {}", arg.getKey(), arg.getValue());
						});
						Workflow wf = wfSession.startWorkflow(workModel, wfData, workflowMetadata);
						log.debug("wf instance id : {}", wf.getId());
						String cwid = objects.getString("CWID");
						String deptID = objects.getString("DEPT_ID");
						String briefAssignment = objects.getString("BRIEF_ASSIGNMENT");
						if (wf.getId() != null) {
							DatabaseUtils.updateAtGuidlinesAfterTheFactDataTable(aemdbdevDBConn, cwid, deptID,
									briefAssignment);
						}

					}
				}
			}
			// }
		} catch (Exception e) {

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
			if (aemdbdevDBConn != null) {
				try {
					aemdbdevDBConn.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
			if (docDBConn != null) {
				try {
					docDBConn.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
		}

	}

	private String createXml(JSONObject objects, Connection dbConn, Connection docDBConn) {
		try {

			DocumentBuilderFactory documentFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder documentBuilder = documentFactory.newDocumentBuilder();
			Document document = documentBuilder.newDocument();
			Element root = document.createElement("afData");
			document.appendChild(root);
			Element afUnboundData = document.createElement("afUnboundData");
			root.appendChild(afUnboundData);
			Element workflowInitiator = document.createElement("workflow_initiator");
			workflowInitiator.appendChild(document.createTextNode("admin"));
			afUnboundData.appendChild(workflowInitiator);
			Element afBoundData = document.createElement("afBoundData");
			root.appendChild(afBoundData);
			Element factElements = document.createElement("AfterTheFact");
			Attr attr = document.createAttribute("xmlns:xfa");
			attr.setValue("http://www.xfa.org/schema/xfa-data/1.0/");
			factElements.setAttributeNode(attr);
			Attr attr2 = document.createAttribute("xmlns:xsi");
			attr2.setValue("http://www.w3.org/2001/XMLSchema-instance");
			factElements.setAttributeNode(attr2);
			afBoundData.appendChild(factElements);
			Element cwidElement = document.createElement("CWID");
			String cwidVal = objects.getString("CWID");
			cwidElement.appendChild(document.createTextNode(cwidVal));
			factElements.appendChild(cwidElement);
			Element facultyNameElement = document.createElement("FacultyName");
			String facultyName = objects.getString("FULL_NAME");
			facultyNameElement.appendChild(document.createTextNode(facultyName));
			factElements.appendChild(facultyNameElement);
			Element collegeElement = document.createElement("College");
			collegeElement.appendChild(document.createTextNode(objects.getString("COLLEGE")));
			factElements.appendChild(collegeElement);
			Element timeReasonElement = document.createElement("TimeReason");
			timeReasonElement.appendChild(document.createTextNode(objects.getString("TIME_REASON")));
			factElements.appendChild(timeReasonElement);
			Element termElement = document.createElement("Term");
			termElement.appendChild(document.createTextNode(objects.getString("TERM")));
			factElements.appendChild(termElement);
			Element wtuElement = document.createElement("WTUPerTerm");
			wtuElement.appendChild(document.createTextNode(objects.getString("WTU")));
			factElements.appendChild(wtuElement);
			Element briefAssignmentElement = document.createElement("BriefAssignment");
			briefAssignmentElement.appendChild(document.createTextNode(objects.getString("BRIEF_ASSIGNMENT")));
			factElements.appendChild(briefAssignmentElement);
			factElements.appendChild(document.createElement("AfterTheFactStatus"));
			factElements.appendChild(document.createElement("AfterTheFactEvaluation"));
			factElements.appendChild(document.createElement("FacultySignatureName"));
			factElements.appendChild(document.createElement("FacultySignature"));
			factElements.appendChild(document.createElement("FacultySignDate"));
			factElements.appendChild(document.createElement("FacultyComment"));
			factElements.appendChild(document.createElement("ChairSignatureName"));
			factElements.appendChild(document.createElement("ChairSignature"));
			factElements.appendChild(document.createElement("ChairSignDate"));
			factElements.appendChild(document.createElement("ChairComment"));
			Element stageIndicatorElement = document.createElement("StageIndicator");
			stageIndicatorElement.appendChild(document.createTextNode("ToFaculty"));
			factElements.appendChild(stageIndicatorElement);
			Element aftiaDescCWIDElement = document.createElement("aftiaDescCWID");
			aftiaDescCWIDElement.appendChild(document.createTextNode(facultyName + " " + cwidVal));
			factElements.appendChild(aftiaDescCWIDElement);
			Element emailSubjectElement = document.createElement("EmailSubject");
			emailSubjectElement.appendChild(
					document.createTextNode("After the Fact Evaluation - " + facultyName + " - " + cwidVal));
			factElements.appendChild(emailSubjectElement);
			Element facultyFirstNameElement = document.createElement("FacultyFirstName");
			String facultyFirstName = "";
			if(facultyName != null && !facultyName.isBlank()) {
				if(facultyName.contains(" ")) {
					facultyFirstName = facultyName.substring(0, facultyName.indexOf(" ")); 
				}else {
					facultyFirstName = facultyName;
				}	
			}
			facultyFirstNameElement.appendChild(document.createTextNode(facultyFirstName));
			factElements.appendChild(facultyFirstNameElement);
			Element facultyLastNameElement = document.createElement("FacultyLastName");
			String facultyLastName = "";
			if(facultyName != null && !facultyName.isBlank()) {
				if(facultyName.contains(" ")) {
					facultyLastName = facultyName.substring(facultyName.indexOf(" ")+1, facultyName.length()); 
				}
			}
			facultyLastNameElement.appendChild(document.createTextNode(facultyLastName));
			factElements.appendChild(facultyLastNameElement);
			Element facultyEmailIdElement = document.createElement("FacultyEmailId");
			String facultyEmail = objects.getString("EMAIL");
			facultyEmailIdElement.appendChild(document.createTextNode(facultyEmail));
			factElements.appendChild(facultyEmailIdElement);
			Element facultyUserIdElement = document.createElement("FacultyUserId");
			facultyUserIdElement
					.appendChild(document.createTextNode(facultyEmail.substring(0, facultyEmail.indexOf('@'))));
			factElements.appendChild(facultyUserIdElement);
			Element chairNameElement = document.createElement("ChairName");
			chairNameElement.appendChild(document.createTextNode(objects.getString("DEPT_CHAIR_NAME")));
			factElements.appendChild(chairNameElement);
			Element chairEmailIdElement = document.createElement("ChairEmailId");
			String chairEmail = objects.getString("DEPT_CHAIR_EMAIL");
			chairEmailIdElement.appendChild(document.createTextNode(chairEmail));
			factElements.appendChild(chairEmailIdElement);
			Element chairUserIdElement = document.createElement("ChairUserId");
			chairUserIdElement.appendChild(document.createTextNode(chairEmail.substring(0, chairEmail.indexOf('@'))));
			factElements.appendChild(chairUserIdElement);
			Element depIdElement = document.createElement("DeptId");
			String deptId = objects.getString("DEPT_ID");
			depIdElement.appendChild(document.createTextNode(deptId));
			factElements.appendChild(depIdElement);
			JSONArray deanDataArray = fetchDeanDetails(docDBConn, deptId);
			JSONObject deanDataObject = deanDataArray.getJSONObject(0);
			Element deptNameElement = document.createElement("DeptName");
			deptNameElement.appendChild(document.createTextNode(deanDataObject.getString("DEPTNAME")));
			factElements.appendChild(deptNameElement);
			Element collegeIdElement = document.createElement("CollegeId");
			collegeIdElement.appendChild(document.createTextNode(deanDataObject.getString("FUL_COLLEGE")));
			factElements.appendChild(collegeIdElement);
			Element uniqueIdElement = document.createElement("UniqueId");
			uniqueIdElement.appendChild(document.createTextNode(objects.getString("UNIQUE_ID")));
			factElements.appendChild(uniqueIdElement);
			factElements.appendChild(document.createElement("FacultySignatureCB"));
			factElements.appendChild(document.createElement("DepartmentChairSignatureCB"));
			Element afSubmissionInfo = document.createElement("afSubmissionInfo");
			root.appendChild(afSubmissionInfo);
			afSubmissionInfo.appendChild(document.createElement("computedMetaInfo"));
			Element afPath = document.createElement("afPath");
			afPath.appendChild(document.createTextNode(
					"/content/dam/formsanddocuments/after-the-fact-evaluation/after-the-fact-evaluation"));
			afSubmissionInfo.appendChild(afPath);
			afSubmissionInfo.appendChild(document.createElement("stateOverrides"));
			afSubmissionInfo.appendChild(document.createElement("signers"));

			TransformerFactory transformerFactory = TransformerFactory.newInstance();
			Transformer transformer = transformerFactory.newTransformer();
			DOMSource domSource = new DOMSource(document);
			StringWriter stringWriter = new StringWriter();
			StreamResult streamResult = new StreamResult(stringWriter);
			transformer.transform(domSource, streamResult);

			String data = stringWriter.toString();
			return data;
		} catch (Exception e) {

		}
		return null;
	}

	private String createNewPayloadPath(Session session, String existingPayload, Document doc) throws Exception {
		String afPath = null;
		existingPayload = existingPayload.concat("/");
		// generate the jcr Node path for the payload for the new Data.xml
		String randomString = CSUFUtils.generateRandomString(26, ALLOWED_CHARS);
		String newJCRPayloadPath = existingPayload.concat(randomString);
		log.debug("The new JCR Payload node path = {}", newJCRPayloadPath);
		try {
			Element afParentElement = XMLUtils.getParentNode(doc, "afSubmissionInfo");
			log.debug("afParentElement" + afParentElement);
			if (null != afParentElement && afParentElement.hasChildNodes()) {
				afPath = XMLUtils.getChildNodeContent(afParentElement, "afPath");
				log.debug("afPath = {}", afPath);
			}
			InputStream is = XMLUtils.getInputStreamFromXMLDocument(doc);
			log.debug("Session Value = " + session);
			boolean isNewPayloadJCRPathCreated = assetService.writeNtFileToPayloadPath(session, "Data.xml", afPath,
					newJCRPayloadPath, is);
			log.debug("new payload node got created with status = {}", isNewPayloadJCRPathCreated);
			if (isNewPayloadJCRPathCreated) {
				return newJCRPayloadPath;
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()), e);
		}
		return null;
	}

	private JSONArray fetchDeanDetails(Connection dbConn, String deptId) {
		JSONArray resultArray = new JSONArray();
		try {
			String sqlQuery = CSUFConstantsUtils.getAfterTheFactDeanDetails;
			sqlQuery = sqlQuery.replaceAll("<<DEPT_ID>>", deptId);
			String lookupFields = CSUFConstantsUtils.getAfterTheFactDeanDetailsLookupFields;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			if (resultArray.length() != 0) {
				JSONObject objects = resultArray.getJSONObject(0);
				if (objects.has("EMPNAME")) {
					if (objects.getString("EMPNAME").isBlank()) {
						objects.put("EMPNAME", fallBackConfigUserService.fallbackUserFullName());
					}
				} else {
					objects.put("EMPNAME", fallBackConfigUserService.fallbackUserFullName());
				}
				if (objects.has("EMP_USERID")) {
					if (objects.getString("EMP_USERID").isBlank()) {
						objects.put("EMP_USERID", fallBackConfigUserService.fallbackUserId());
					}
				} else {
					objects.put("EMP_USERID", fallBackConfigUserService.fallbackUserId());
				}
				if (objects.has("EMP_EMAIL")) {
					if (objects.getString("EMP_EMAIL").isBlank()) {
						objects.put("EMP_EMAIL", fallBackConfigUserService.fallbackUserEmailAddress());
					}
				} else {
					objects.put("EMP_EMAIL", fallBackConfigUserService.fallbackUserEmailAddress());
				}
			} else {
				JSONObject objects = new JSONObject();
				objects.put("EMPNAME", fallBackConfigUserService.fallbackUserFullName());
				objects.put("EMP_USERID", fallBackConfigUserService.fallbackUserId());
				objects.put("EMP_EMAIL", fallBackConfigUserService.fallbackUserEmailAddress());
				objects.put("DEPTNAME", " ");
				objects.put("FUL_COLLEGE", " ");
				resultArray.put(objects);
			}
			return resultArray;
		} catch (Exception e) {
			log.error("Error Fetching Dean Data", deptId);
		}
		return null;
	}

}
