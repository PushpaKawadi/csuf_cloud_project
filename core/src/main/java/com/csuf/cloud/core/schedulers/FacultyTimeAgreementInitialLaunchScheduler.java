package com.csuf.cloud.core.schedulers;

import java.io.InputStream;
import java.io.StringWriter;
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

@Component(immediate = true, configurationPid = "csuf.scheduler.initialFact.Scheduler", property = {
		Constants.SERVICE_DESCRIPTION + "=Initial Faculty Time Agreement Reminder Scheduler Service" })
@Designate(ocd = FacultyTimeAgreementInitialLaunchScheduler.Configuration.class)
public class FacultyTimeAgreementInitialLaunchScheduler implements Runnable {

	protected static Logger log = LoggerFactory.getLogger(FacultyTimeAgreementInitialLaunchScheduler.class);
	private int schedulerID;
	private Configuration config;
	String workflowStatus = "COMPLETED";
	String fullName = "";
	String cwid = "";
	String email = "";
	String startTerm = "";
	String endTerm = "";
	String wtu = "";
	String timeReason = "";
	String employeeName = "";
	String employeeId = "";
	String employeeDeptId = "";
	private static final String ALLOWED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	private static final String WF_MODEL = "/var/workflow/models/faculty-assigned-time-agreement";
	private static final String WF_MODEL_TITLE = "Faculty Assigned Time Agreement";
	private static final String PAYLOAD_PATH = "/var/fd/dashboard/payload/server0";
	
	private static final transient String DEFAULT_IMAGE_PATH = "/content/dam/csu/CSUF_Mailer_logo.gif";
	private static final transient String FROM_EMAIL = "csuf@fullerton.edu";
	private static final transient String TO_EMAIL = "yjayaram@fullerton.edu";
	private static final transient String BCC_EMAIL = "yjayaram@fullerton.edu";
	private static final transient String EMAIL_SUBJECT = "AEM Faculty Assigned Time Agreement Batch Launch Failure";
	private static final transient String NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH = "/etc/notification/email/csuf/Faculty_Assigned_Time_Agreement_Batch_Templates/Faculty_Assigned_Time_Agreement_Batch_Launch_Fail.html";

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
	
	@Reference
	private EmailService emailService;


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
		log.debug("Send Faculty Time Agreement Reminder Scheduler Job '{}'", schedulerID);
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
			log.debug("Send Faculty Time Agreement Reminder Scheduler added succesfully with cron expression : {}",
					config.schedulerExpression());
			this.config = config;
		} else {
			log.debug("Send Faculty Time Agreement Reminder Scheduler is disabled, no scheduler job will be created");
		}
	}

	@Override
	public void run() {
		log.debug("starting Send Faculty Time Agreement Reminder Scheduler Service...");
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Document doc = null;
		InputStream is = null;
		JsonObject json = null;
		Session session = null;
		Connection dbConn = null;
		Connection dbConnDocDB = null;
		Connection dbConnFrmmgr = null;
		JSONArray resultArray = new JSONArray();
		try {
			String payloadPath = config.getPayloadPath();
			resolver = globalConfigService.getResourceResolver();
			session = globalConfigService.getAdminSession();
			wfSession = resolver.adaptTo(WorkflowSession.class);
			String dataSourceVal = globalConfigCSUService.getAEMFormsDatabaseSource();
			dbConn = getConnection(dataSourceVal);
			dbConnDocDB = jdbcConnectionService.getDocDBConnection();
			dbConnFrmmgr = jdbcConnectionService.getFrmDBConnection();
			String sqlQuery = CSUFConstantsUtils.getFacultyTimeAgreementData;
			String lookupFields = CSUFConstantsUtils.getFacultyTimeAgreementDataLookupField;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			JSONObject objects = null;
			for (int i = 0; i < resultArray.length(); i++) {
				objects = resultArray.getJSONObject(i);
				String payloadData = getXml(objects, dbConn, dbConnDocDB, dbConnFrmmgr);
				if (payloadData != null) {					
					is = IOUtils.toInputStream(payloadData, StandardCharsets.UTF_8);					
					if (null != is) {
						doc = XMLUtils.getDomDocument(is);
						WorkflowModel workModel = wfSession.getModel(config.getWorkflowModelPath());
						String generatedPayloadPath = CSUFUtils.getRecentlyCreatedPayloadPath(resolver, payloadPath);
						String newPayloadPath = createNewPayloadPath(session, generatedPayloadPath, doc, json);
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
								DatabaseUtils.updateAtGuidlinesDataTable(dbConn, cwid, deptID, briefAssignment);
							}

						}
					}
				}
			}

		} catch (Exception e) {
			log.error("Error while running Send Faculty Time Agreement Reminder Scheduler Service", e);
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
			if (dbConnDocDB != null) {
				try {
					dbConnDocDB.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
			if (dbConnFrmmgr != null) {
				try {
					dbConnFrmmgr.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
		}
		log.debug("completed execution of \"Send Faculty Time Agreement Reminder Scheduler Service\"...");
	}

	@ObjectClassDefinition(name = "Faculty Time Agreement Initial Launch Scheduler Configuration")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression. Default: run every 5 minutes", type = AttributeType.STRING)
		String schedulerExpression() default "0 0/5 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "Send Faculty Time Agreement Reminder Scheduler Configuration";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default false;

		@AttributeDefinition(name = "Payload Path", description = "Payload Path for Scheduler", type = AttributeType.STRING)
		String getPayloadPath() default PAYLOAD_PATH;

		@AttributeDefinition(name = "Workflow Model Name", description = "Workflow Model Name")
		String getWorkflowModelName() default WF_MODEL_TITLE;

		@AttributeDefinition(name = "Workflow Model Path", description = "Workflow Model Path")
		String getWorkflowModelPath() default WF_MODEL;

	}

	private String createNewPayloadPath(Session session, String existingPayload, Document doc, JsonObject json)
			throws Exception {
		String afPath = null;
		existingPayload = existingPayload.concat("/");
		// generate the jcr Node path for the payload for the new Data.xml
		String randomString = CSUFUtils.generateRandomString(26, ALLOWED_CHARS);
		String newJCRPayloadPath = existingPayload.concat(randomString);
		log.debug("The new JCR Payload node path = {}", newJCRPayloadPath);
		try {
			Element xmlRoot = doc.getDocumentElement();
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

	private String getXml(JSONObject objects, Connection dbConn, Connection dbConnDoc, Connection dbConnFrmmgr) {

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
			Element factElements = document.createElement("FacultyAssignedTimeAgreement");
			Attr attr = document.createAttribute("xmlns:xfa");
			attr.setValue("http://www.xfa.org/schema/xfa-data/1.0/");
			factElements.setAttributeNode(attr);
			Attr attr2 = document.createAttribute("xmlns:xsi");
			attr2.setValue("http://www.w3.org/2001/XMLSchema-instance");
			factElements.setAttributeNode(attr2);
			afBoundData.appendChild(factElements);
			Element Cwid = document.createElement("CWID");
			String cwid = objects.getString("CWID");
			employeeId = cwid;
			String deptID = objects.getString("DEPT_ID");
			employeeDeptId = deptID;
			Cwid.appendChild(document.createTextNode(cwid));
			factElements.appendChild(Cwid);
			JSONArray initiatorDetailsArray = getEmployeeData(cwid, deptID, dbConnFrmmgr);
			JSONObject initiatorDetailsObject = initiatorDetailsArray.getJSONObject(0);
			Element facultyname = document.createElement("FacultyName");
			String facultyName = initiatorDetailsObject.getString("EMP_NAME");
			employeeName = facultyName;
			facultyname.appendChild(document.createTextNode(facultyName));
			factElements.appendChild(facultyname);
			JSONArray collegedetailsArray = getCollegDetails(cwid,deptID, dbConnFrmmgr);
			JSONObject collegeObject = null;
			collegeObject = collegedetailsArray.getJSONObject(0);
			Element college = document.createElement("College");
			String collegeName = collegeObject.getString("FUL_COLLEGE_NAME");
			college.appendChild(document.createTextNode(collegeName));
			factElements.appendChild(college);
			Element reassignedTimeReason = document.createElement("ReassignedTimeReason");
			String reassignedTime = objects.getString("TIME_REASON");
			String reassignedTimeReasonVal = getTimeReasonData(reassignedTime, dbConn);
			reassignedTimeReason.appendChild(document.createTextNode(reassignedTime + " - " + reassignedTimeReasonVal));
			factElements.appendChild(reassignedTimeReason);
			String startTermName = objects.getString("START_TERM");
			Element startTerm = document.createElement("StartTerm");
			startTerm.appendChild(document.createTextNode(startTermName));
			factElements.appendChild(startTerm);
			String endTermName = objects.getString("END_TERM");
			Element endTerm = document.createElement("EndTerm");
			endTerm.appendChild(document.createTextNode(endTermName));
			factElements.appendChild(endTerm);
			Element wtu = document.createElement("WTUPerTerm");
			wtu.appendChild(document.createTextNode(objects.getString("WTU")));
			factElements.appendChild(wtu);
			Element briefDescription = document.createElement("BriefDescription");
			briefDescription.appendChild(document.createTextNode(objects.getString("BRIEF_ASSIGNMENT")));
			factElements.appendChild(briefDescription);
			factElements.appendChild(document.createElement("ProjectDescription"));
			factElements.appendChild(document.createElement("Faculty1PrintName"));
			factElements.appendChild(document.createElement("Faculty1Signature"));
			factElements.appendChild(document.createElement("Faculty1Date"));
			factElements.appendChild(document.createElement("FacultyComments"));
			Element firstname = document.createElement("FirstName");
			String firstName = initiatorDetailsObject.getString("FIRST_NAME");
			firstname.appendChild(document.createTextNode(firstName));
			factElements.appendChild(firstname);
			Element lastname = document.createElement("LastName");
			String lastName = initiatorDetailsObject.getString("LAST_NAME");
			lastname.appendChild(document.createTextNode(lastName));
			factElements.appendChild(lastname);
			Element initiatorFlag = document.createElement("InitiatorFlag");
			initiatorFlag.appendChild(document.createTextNode("true"));
			factElements.appendChild(initiatorFlag);
			Element deptId = document.createElement("DeptId");
			deptId.appendChild(document.createTextNode(deptID));
			factElements.appendChild(deptId);
			factElements.appendChild(document.createElement("Faculty2Comments"));
			factElements.appendChild(document.createElement("Chair2Comments"));
			factElements.appendChild(document.createElement("InitiatorComments"));
			Element fullCollege = document.createElement("FulCollege");
			String fullCollegeCode = collegeObject.getString("FUL_COLLEGE");
			fullCollege.appendChild(document.createTextNode(fullCollegeCode));
			factElements.appendChild(fullCollege);
			Element initiatorUserId = document.createElement("InitiatorUserId");
			String initiatorUserID = initiatorDetailsObject.getString("EMP_USERID");
			initiatorUserId.appendChild(document.createTextNode(initiatorUserID));
			factElements.appendChild(initiatorUserId);
			Element initiatorname = document.createElement("InitiatorName");
			initiatorname.appendChild(document.createTextNode(facultyName));
			factElements.appendChild(initiatorname);
			Element initiatorEmail = document.createElement("InitiatorEmail");
			String initiatorEmailID = initiatorDetailsObject.getString("EMAILID");
			initiatorEmail.appendChild(document.createTextNode(initiatorEmailID));
			//initiatorEmail.appendChild(document.createTextNode("yjayaram@fullerton.edu"));
			factElements.appendChild(initiatorEmail);
			factElements.appendChild(document.createElement("Chair1PrintName"));
			factElements.appendChild(document.createElement("Chair1Signature"));
			factElements.appendChild(document.createElement("Chair1Date"));
			factElements.appendChild(document.createElement("DeanPrintName"));
			factElements.appendChild(document.createElement("DeanSignature"));
			factElements.appendChild(document.createElement("DeanDate"));
			factElements.appendChild(document.createElement("Initiator1PrintName"));
			factElements.appendChild(document.createElement("Initiator1Signature"));
			factElements.appendChild(document.createElement("Initiator1Date"));
			factElements.appendChild(document.createElement("FactEvaluationSummary"));
			factElements.appendChild(document.createElement("Faculty2PrintName"));
			factElements.appendChild(document.createElement("Faculty2Signature"));
			factElements.appendChild(document.createElement("Faculty2Date"));
			factElements.appendChild(document.createElement("Chair2PrintName"));
			factElements.appendChild(document.createElement("Chair2Signature"));
			factElements.appendChild(document.createElement("Chair2Date"));
			factElements.appendChild(document.createElement("Initiator2PrintName"));
			factElements.appendChild(document.createElement("Initiator2Signature"));
			factElements.appendChild(document.createElement("Initiator2Date"));
			factElements.appendChild(document.createElement("Initiator2Comments"));
			Element aftiaDescCwid = document.createElement("aftiaDescCWID");
			aftiaDescCwid.appendChild(document.createTextNode(firstName + " " + lastName + " " + cwid));
			factElements.appendChild(aftiaDescCwid);
			factElements.appendChild(document.createElement("StageIndicator"));
			Element facultyUserId = document.createElement("FacultyUserID");
			facultyUserId.appendChild(document.createTextNode(initiatorUserID));
			factElements.appendChild(facultyUserId);
			Element facultyUserEmail = document.createElement("FacultyEmail");
			facultyUserEmail.appendChild(document.createTextNode(initiatorEmailID));
			//facultyUserEmail.appendChild(document.createTextNode("yjayaram@fullerton.edu"));
			factElements.appendChild(facultyUserEmail);
			String chairEmailId = objects.getString("DEPT_CHAIR_EMAIL");
			/*JSONArray array = getChairData(deptID, dbConnDoc);
			JSONObject object = null;
			object = array.getJSONObject(0);*/
			JSONArray deptChairArray = getAlternateApproverData(chairEmailId, dbConnFrmmgr);
			JSONObject deptChairObject = deptChairArray.getJSONObject(0);
			Element chairUserID = document.createElement("ChairUserID");
			chairUserID.appendChild(document.createTextNode(deptChairObject.getString("EMP_USERID")));
			factElements.appendChild(chairUserID);
			Element chairEmail = document.createElement("ChairEmail");
			chairEmail.appendChild(document.createTextNode(chairEmailId));
			//chairEmail.appendChild(document.createTextNode("yjayaram@fullerton.edu"));
			factElements.appendChild(chairEmail);
			Element chairName = document.createElement("HiddenChairName");
			chairName.appendChild(document.createTextNode(objects.getString("DEPT_CHAIR_NAME")));
			factElements.appendChild(chairName);
			factElements.appendChild(document.createElement("ChairComments"));
			JSONArray deandetailsArray = getDeanData(fullCollegeCode, dbConnDoc);
			JSONObject deanObject = null;
			deanObject = deandetailsArray.getJSONObject(0);
			Element deanUserID = document.createElement("DeanUserID");
			deanUserID.appendChild(document.createTextNode(deanObject.getString("EMP_USERID")));
			factElements.appendChild(deanUserID);
			factElements.appendChild(document.createElement("DeanComments"));
			Element deanEmail = document.createElement("DeanEmail");
			deanEmail.appendChild(document.createTextNode(deanObject.getString("EMP_EMAIL")));
			//deanEmail.appendChild(document.createTextNode("yjayaram@fullerton.edu"));
			factElements.appendChild(deanEmail);
			Element deanName = document.createElement("HiddenDeanName");
			deanName.appendChild(document.createTextNode(deanObject.getString("EMPNAME")));
			factElements.appendChild(deanName);
			Element emailSub = document.createElement("EmailSubject");
			emailSub.appendChild(document.createTextNode("Faculty Assigned Time Agreement - "+firstName+" "+lastName+" - "+ cwid));
			factElements.appendChild(emailSub);
			String startTermDate = getTermDates(startTermName, "START", dbConnDoc);
			Element startTermDateEle = document.createElement("StartTermDate");
			startTermDateEle.appendChild(document.createTextNode(startTermDate));
			factElements.appendChild(startTermDateEle);
			String endTermDate = getTermDates(endTermName, "END", dbConnDoc);
			Element endTermDateEle = document.createElement("EndTermDate");
			endTermDateEle.appendChild(document.createTextNode(endTermDate));
			factElements.appendChild(endTermDateEle);
			Element evalFlag = document.createElement("EvalFlag");
			evalFlag.appendChild(document.createTextNode("False"));
			factElements.appendChild(evalFlag);
			factElements.appendChild(document.createElement("FactAgreementWorkflowInstanceID"));
			factElements.appendChild(document.createElement("AfterFactWorkflowInstanceID"));
			factElements.appendChild(document.createElement("InitiatorCB1"));
			factElements.appendChild(document.createElement("FacultyCB"));
			factElements.appendChild(document.createElement("ChairCB"));
			factElements.appendChild(document.createElement("DeptCooCB"));
			factElements.appendChild(document.createElement("InitiatorCB2"));
			factElements.appendChild(document.createElement("Faculty2CB"));
			factElements.appendChild(document.createElement("ChairCB2"));
			Element additionalApprover = document.createElement("AdditionalReviewerName");
			Element additionalApproverEmail = document.createElement("AdditionalReviewerEmailId");
			Element additionalReviewerUserId = document.createElement("AdditionalReviewerUserId");
			if (objects.has("ALTERNATE_APPROVER_EMAIL") && objects.has("ALTERNATE_APPROVER_NAME")) {
				String additionalApproverEmailID = objects.getString("ALTERNATE_APPROVER_EMAIL");
				String additionalApproverName = objects.getString("ALTERNATE_APPROVER_NAME");
				additionalApprover.appendChild(document.createTextNode(additionalApproverName));
				JSONArray additionalApproverArray = getAlternateApproverData(additionalApproverEmailID, dbConnFrmmgr);
				JSONObject additionalApproverObject = additionalApproverArray.getJSONObject(0);
				additionalApproverEmail.appendChild(document.createTextNode(additionalApproverEmailID));
				//additionalApproverEmail.appendChild(document.createTextNode("yjayaram@fullerton.edu"));
				additionalReviewerUserId
						.appendChild(document.createTextNode(additionalApproverObject.getString("EMP_USERID")));
			}
			factElements.appendChild(additionalApprover);
			factElements.appendChild(additionalApproverEmail);
			factElements.appendChild(additionalReviewerUserId);
			factElements.appendChild(document.createElement("AdditionalReviewerSignature"));
			factElements.appendChild(document.createElement("AdditionalReviewerSignatureName"));
			factElements.appendChild(document.createElement("AdditionalReviewerSignatureDate"));
			factElements.appendChild(document.createElement("AdditionalReviewerComments"));
			factElements.appendChild(document.createElement("AdditionalReviewer2Signature"));
			factElements.appendChild(document.createElement("AdditionalReviewer2SignatureName"));
			factElements.appendChild(document.createElement("AdditionalReviewer2SignatureDate"));
			factElements.appendChild(document.createElement("AdditionalReviewer2Comments"));
			factElements.appendChild(document.createElement("AdditionalReviewerCB"));
			factElements.appendChild(document.createElement("AdditionalReviewerCB2"));
			String nextTerm = getNextTermDates(endTermName);
			String startTermDateUpdated = getTermDates(nextTerm, "START", dbConnDoc);
			Element startTermDateUpdatedEle = document.createElement("AfterTheFactLaunchDate");
			startTermDateUpdatedEle.appendChild(document.createTextNode(startTermDateUpdated));
			factElements.appendChild(startTermDateUpdatedEle);
			Element batchFlag = document.createElement("BatchLaunchFlag");
			batchFlag.appendChild(document.createTextNode("Y"));
			factElements.appendChild(batchFlag);

			Element afSubmissionInfo = document.createElement("afSubmissionInfo");
			root.appendChild(afSubmissionInfo);

			afSubmissionInfo.appendChild(document.createElement("computedMetaInfo"));
			Element afPath = document.createElement("afPath");
			afPath.appendChild(document.createTextNode(
					"/content/dam/formsanddocuments/faculty-assigned-time-agreement/faculty-assigned-time-agreement"));
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
			// }
		} catch (Exception e) {
			log.error("Error while creating XML", e);
			//sendEmailtoAdmin();
		}
		return null;

	}

	private String getTimeReasonData(String timeReasonCode, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		JSONObject objects = null;
		try {
			String sqlQuery = CSUFConstantsUtils.getFacultyTimeAgreementTimeReason;
			sqlQuery = sqlQuery.replaceAll("<<CODE>>", timeReasonCode);
			String lookupFields = CSUFConstantsUtils.getFacultyTimeAgreementTimeReasonLookupField;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			objects = resultArray.getJSONObject(0);
			String codeDescription = objects.getString("CODE_DESCRIPTION");
			log.info("get Time Reason Data is : " + codeDescription);
			return codeDescription;
		} catch (Exception e) {
			log.error("Error Fetching TimeReasonData", e);
		}
		return null;
	}

	private JSONArray getChairData(String deptID, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		String getChairDeanInforSQLLookupFields = "CHAIR_USERID,CHAIR_NAME,CHAIR_EMAIL,DEAN_USERID,DEAN_EMAIL,DEAN_NAME";
		try {
			String sqlQuery = CSUFConstantsUtils.getChairDeanInfoSQL;
			sqlQuery = sqlQuery.replaceAll("<<dept_id>>", deptID);
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, getChairDeanInforSQLLookupFields, dbConn);
			log.info("get chair data " + resultArray);
			return resultArray;
		} catch (Exception e) {
			log.error("Error Fetching ChairData", e);
		}
		return null;
	}

	private JSONArray getCollegDetails(String cwid, String deptId, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		try {
			String sqlQuery = CSUFConstantsUtils.getFullCollegeDetails;
			sqlQuery = sqlQuery.replaceAll("<<CWID>>", cwid);
			sqlQuery = sqlQuery.replaceAll("<<DeptId>>", deptId);
			String lookupFields = CSUFConstantsUtils.getFullCollegeDetailsLookupField;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			log.info("get college data " + resultArray);
			return resultArray;
		} catch (Exception e) {
			log.error("Error Fetching CollegeData", e);
		}
		return null;
	}

	private JSONArray getDeanData(String college, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		try {
			String sqlQuery = CSUFConstantsUtils.PreRetirementDeanSQL;
			sqlQuery = sqlQuery.replaceAll("<<ful_college>>", college);
			String lookupFields = CSUFConstantsUtils.PreRetirementDeanFields;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			return resultArray;
		} catch (Exception e) {
			log.error("Error Fetching DeanData", e);
		}
		return null;
	}

	private JSONArray getEmployeeData(String cwid, String deptId, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		try {
			String sqlQuery = CSUFConstantsUtils.getFacultyTimeAgreementInitiatorDetails;
			sqlQuery = sqlQuery.replaceAll("<<CWID>>", cwid);
			String lookupFields = CSUFConstantsUtils.getFacultyTimeAgreementInitiatorDetailsLookupFields;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			return resultArray;
		} catch (Exception e) {
			log.error("Error Fetching EmployeeData", e);
		}
		return null;
	}

	private JSONArray getAlternateApproverData(String emailID, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		try {
			String sqlQuery = CSUFConstantsUtils.getAlternateApproverDetails;
			sqlQuery = sqlQuery.replaceAll("<<EMAIL_ID>>", emailID);
			String lookupFields = CSUFConstantsUtils.getFacultyTimeAgreementInitiatorDetailsLookupFields;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			return resultArray;
		} catch (Exception e) {
			log.error("Error Fetching Alternate Approver Data", e);
		}
		return null;
	}
	
	private String getTermDates(String term,String startorend, Connection dbConn) {
		JSONArray resultArray = new JSONArray();
		JSONObject objects = null;
		String dateVal = "";
		try {
			String sqlQuery = CSUFConstantsUtils.getFacultyTimeAgreementTermDeatils;
			sqlQuery = sqlQuery.replaceAll("<<TERM_DESCR>>", term);
			String lookupFields = CSUFConstantsUtils.getFacultyTimeAgreementTermDeatilsLookupField;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			objects = resultArray.getJSONObject(0);
			if(startorend.equals("START")) {
				dateVal = objects.getString("TERM_BEGIN_DT");
			}else if(startorend.equals("END")) {
				dateVal = objects.getString("TERM_END_DT");
			}
			dateVal=dateVal.replaceAll(" 00:00:00.0","");
			log.info("get Term Start Date and End Date : " + dateVal);
			return dateVal;
		} catch (Exception e) {
			log.error("Error Fetching getTermDates", e);
		}
		return null;
	}
	
	private String getNextTermDates(String term) {
		String nextTerm = "";
		try {
			if(term.contains("Spring")) {
				nextTerm = term.replaceAll("Spring", "Fall");
			}else if(term.contains("Fall")) {
				term = term.replaceAll("Fall", "Spring");
				String year = term.substring(term.indexOf(" ") + 1);
				int yearVal = Integer.parseInt(year);
				String updatedYear;
				int updatedYearVal = yearVal+1;
				updatedYear = String.valueOf(updatedYearVal);
				nextTerm = term.replaceAll(year, updatedYear);
			}
			
			return nextTerm;
		} catch (Exception e) {
			log.error("Error Fetching nextTerm", e);
		}
		return null;
	}
	
	public void sendEmailtoAdmin() {
		String msg = "Name: "+employeeName+", CWID: "+employeeId+", Dept Id: "+employeeDeptId;
		EmailServiceVO emailVO = new EmailServiceVO();
		emailVO.setUseCQGateway(false);
		List<String> toList = new ArrayList<String>();
		toList.add(TO_EMAIL);
		Map<String, String> templateVaribles = new HashMap<>();
		templateVaribles.put("iName", msg);
		emailVO.setTemplateVaribles(templateVaribles);
		emailVO.setToName("Admin");
		emailVO.setToAddress(toList);
		emailVO.setFromAddress(FROM_EMAIL);
		emailVO.setFromName(FROM_EMAIL);
		List<String> bccList = new ArrayList<String>();
		bccList.add(BCC_EMAIL);
		emailVO.setBccAddress(bccList);
		emailVO.setSubject(EMAIL_SUBJECT);
		emailVO.setTemplatePath(NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH);
		emailVO.setEmbeddedImage(true);
		emailVO.setEmbeddedImagePath(DEFAULT_IMAGE_PATH);
		emailVO.setEmbeddedImageDescription("CSUF Logo");
		emailVO.setStartTLS(false);
		sendEmail(emailVO);
	}
	
	private void sendEmail(EmailServiceVO emailVO) {
		try {

			List<String> emailFailureList = emailService.sendEmail(emailVO);

			if (null != emailFailureList && !emailFailureList.isEmpty()) {
				log.error("Reminder Email sending failed to these recipients: {}", emailFailureList.toString());
			} else if (null != emailFailureList && emailFailureList.isEmpty()) {
				log.info("Reminder Email sent successfully to these recipients: {}", emailVO.getToAddress());
			} else {
				log.error("FATAL : Reminder Email sending failed");
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}

}
