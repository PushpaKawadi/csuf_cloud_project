package com.csuf.cloud.core.services.impl;

import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.Route;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.InboxReportService_Old;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(service = InboxReportService_Old.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=CSUF Inbox Report Utility Service for Old Architecture" })

public class InboxReportService_OldImpl implements InboxReportService_Old {

	private static final Logger log = LoggerFactory.getLogger(InboxReportService_OldImpl.class);

	private static final String DATE_FORMAT_US = "M/d/yyyy h:m:s a";

	private static final String DATE_FORMAT_DB = "yyyy-MM-dd";

	private static final String DATE_FORMAT_DATE_ONLY = "M/d/yyyy";

	@Override
	public JsonObject getSCWReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject json = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			MetaDataMap map = wItem.getWorkflowData().getMetaDataMap();
			json.addProperty("sNo", count);
			json.addProperty("cwid", null != map.get("CWID") ? map.get("CWID").toString() : StringUtils.EMPTY);
			json.addProperty("lName", null != map.get("LName") ? map.get("LName").toString() : StringUtils.EMPTY);
			json.addProperty("fName", null != map.get("FName") ? map.get("FName").toString() : StringUtils.EMPTY);
			json.addProperty("caseId", null != map.get("caseId") ? map.get("caseId").toString() : StringUtils.EMPTY);
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);

			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}

			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);

			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}

			json.addProperty("workflowStartTime", workflowStartTime);
			json.addProperty("stepStartTime", stepStartTime);
			json.addProperty("stepName", wItem.getNode().getTitle());

			json.addProperty("stepAssignee", currentAssignee);
			json.addProperty("workflowInstanceId", wItem.getWorkflow().getId());

			for (Map.Entry<String, Object> entry : map.entrySet()) {
				if ((entry.getKey()).matches("allCourseWithdrawFlag")) {
					String valStr = entry.getValue().toString();
					if (valStr.equals("1")) {
						json.addProperty("isTermWithdrawal", "Yes");
						continue;
					}
					if (valStr.equals("2")) {
						json.addProperty("isTermWithdrawal", "No");
					}
				}
			}
			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						String initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
						json.addProperty("stepInitiator", initiatedBy);
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {

						// stepRef flag to distinguish between medical and non-medical
						String stepRef = XMLUtils.getChildNodeContent(afBoundDataElement, "stepRef");
						if (StringUtils.isNotBlank(stepRef) && stepRef.contains("ToMedical")) {
							json.addProperty("isMedical", "Yes");
							// CourseNumberList for medical withdrawal
							String courseNumberList = XMLUtils.getChildNodeContent(afBoundDataElement,
									"CourseNumberList");
							if (StringUtils.isNotBlank(courseNumberList)) {
								json.addProperty("courseNo", courseNumberList);
							}
						}

						List<Route> backRoutesList = graniteWorkflowSession.getBackRoutes(wItem, false);
						JsonArray backRoutesJson = new JsonArray();
						for (Route backRoute : backRoutesList) {
							backRoutesJson.add(backRoute.getName());
						}
						json.addProperty("backRoutes", backRoutesJson.toString());
						// Calculate correct index for this workitem
						String saveHistoryBackRoute = backRoutesList.get(0).getName();
						// if (saveHistoryBackRoute.contains("Save WF History")) {
						String[] routeNameArray = saveHistoryBackRoute.split("-");
						if (routeNameArray.length > 1) {
							String indexValue = routeNameArray[1].trim();
							json.addProperty("indexValue", indexValue);
							log.debug("indexValue : {}", indexValue);
							for (int index = 1; index < 16; index++) {
								String intructorUserId = XMLUtils.getChildNodeContent(afBoundDataElement,
										"InstructorUserID".concat(indexValue));
								if (StringUtils.isNotBlank(intructorUserId)) {
									String courseNumber = XMLUtils.getChildNodeContent(afBoundDataElement,
											"CourseNo".concat(indexValue));
									String chairUserId = XMLUtils.getChildNodeContent(afBoundDataElement,
											"ChairUserID".concat(indexValue));
									json.addProperty("courseNo", courseNumber);
									json.addProperty("chairUserId", chairUserId);
									break;
								}
							}
						}
						// }
					}
				}
			}
			// log.debug("json {} ", json);
			return json;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getMPPReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject mppJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			MetaDataMap map = wItem.getWorkflowData().getMetaDataMap();
			mppJson.addProperty("sNo", count);
			mppJson.addProperty("cwid", null != map.get("empId") ? map.get("empId").toString() : StringUtils.EMPTY);
			mppJson.addProperty("lName",
					null != map.get("StaffLastName") ? map.get("StaffLastName").toString() : StringUtils.EMPTY);
			mppJson.addProperty("fName",
					null != map.get("StaffFirstName") ? map.get("StaffFirstName").toString() : StringUtils.EMPTY);
			mppJson.addProperty("deptName",
					null != map.get("deptName") ? map.get("deptName").toString() : StringUtils.EMPTY);
			mppJson.addProperty("workflowStartTime", wItem.getWorkflow().getTimeStarted().toString());
			mppJson.addProperty("stepStartTime", wItem.getProgressBeginTime().toString());
			mppJson.addProperty("stepName", wItem.getNode().getTitle());
			mppJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			mppJson.addProperty("stepAssignee", currentAssignee);
			mppJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			mppJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return mppJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getGradeChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject gradeChangeJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			// MetaDataMap map = wItem.getWorkflowData().getMetaDataMap();
			gradeChangeJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String instructorCWID = XMLUtils.getChildNodeContent(afBoundDataElement, "InstructorCWID");
						if (StringUtils.isNotBlank(instructorCWID)) {
							gradeChangeJson.addProperty("instructorCWID", instructorCWID);
						}
						String instructorName = XMLUtils.getChildNodeContent(afBoundDataElement, "InstructorName");
						if (StringUtils.isNotBlank(instructorName)) {
							gradeChangeJson.addProperty("instructorName", instructorName);
						}
						String instructorUserID = XMLUtils.getChildNodeContent(afBoundDataElement,
								"HiddenInstructorUserID");
						if (StringUtils.isNotBlank(instructorUserID)) {
							gradeChangeJson.addProperty("instructorUserID", instructorUserID);
						}
						String firstNameList = XMLUtils.getChildNodeContent(afBoundDataElement,
								"firstNameListForInboxReport");
						if (StringUtils.isNotBlank(firstNameList)) {
							gradeChangeJson.addProperty("firstNameList", firstNameList);
						}
						String lastNameList = XMLUtils.getChildNodeContent(afBoundDataElement,
								"lastNameListForInboxReport");
						if (StringUtils.isNotBlank(lastNameList)) {
							gradeChangeJson.addProperty("lastNameList", lastNameList);
						}
						String cwidList = XMLUtils.getChildNodeContent(afBoundDataElement, "cwidListForInboxReport");
						if (StringUtils.isNotBlank(cwidList)) {
							gradeChangeJson.addProperty("cwidList", cwidList);

						}
					}
				}
			}

			String workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			String stepStartTime = wItem.getProgressBeginTime().toString();
			/*
			 * DateFormat formatter = new SimpleDateFormat("E MMM dd hh:mm:ss Z yyyy"); Date
			 * date = null; Date date1 = null; try { date =
			 * (Date)formatter.parse(workflowStartTime); date1 =
			 * (Date)formatter.parse(stepStartTime);
			 * 
			 * } catch (ParseException e) { e.printStackTrace();
			 * 
			 * }
			 * 
			 * StringBuffer timeStamp = new StringBuffer(); StringBuffer timeStamp1 = new
			 * StringBuffer(); Calendar cal = Calendar.getInstance(); Calendar cal1 =
			 * Calendar.getInstance(); cal.setTime(date); cal1.setTime(date1);
			 * 
			 * if(cal.get(Calendar.HOUR_OF_DAY) > 10) { timeStamp =
			 * timeStamp.append(cal.get(Calendar.HOUR_OF_DAY));
			 * 
			 * } else { timeStamp =
			 * timeStamp.append("0").append(cal.get(Calendar.HOUR_OF_DAY));
			 * 
			 * } timeStamp.append(":");
			 * 
			 * if(cal.get(Calendar.MINUTE) > 10) { timeStamp =
			 * timeStamp.append(cal.get(Calendar.MINUTE));
			 * 
			 * }else { timeStamp = timeStamp.append("0").append(cal.get(Calendar.MINUTE));
			 * 
			 * } timeStamp.append(":");
			 * 
			 * if(cal.get(Calendar.SECOND) > 10) { timeStamp =
			 * timeStamp.append(cal.get(Calendar.SECOND));
			 * 
			 * }else { timeStamp = timeStamp.append("0").append(cal.get(Calendar.SECOND));
			 * 
			 * }
			 * 
			 * 
			 * if(cal1.get(Calendar.HOUR_OF_DAY) > 10) { timeStamp1 =
			 * timeStamp1.append(cal1.get(Calendar.HOUR_OF_DAY));
			 * 
			 * } else { timeStamp1 =
			 * timeStamp1.append("0").append(cal1.get(Calendar.HOUR_OF_DAY));
			 * 
			 * } timeStamp1.append(":");
			 * 
			 * if(cal1.get(Calendar.MINUTE) > 10) { timeStamp1 =
			 * timeStamp1.append(cal1.get(Calendar.MINUTE));
			 * 
			 * }else { timeStamp1 =
			 * timeStamp1.append("0").append(cal1.get(Calendar.MINUTE));
			 * 
			 * } timeStamp1.append(":");
			 * 
			 * if(cal1.get(Calendar.SECOND) > 10) { timeStamp1 =
			 * timeStamp1.append(cal1.get(Calendar.SECOND));
			 * 
			 * }else { timeStamp1 =
			 * timeStamp1.append("0").append(cal1.get(Calendar.SECOND));
			 * 
			 * }
			 * 
			 * cal.getTimeZone(); int LONG = 0;
			 * 
			 * String formatedDate = cal.get(Calendar.DATE) + "/" + (cal.get(Calendar.MONTH)
			 * + 1) + "/" + cal.get(Calendar.YEAR) + "  " + timeStamp + " " +
			 * cal.getTimeZone().getDisplayName(false, LONG, Locale.getDefault()); String
			 * formatedDate1 = cal1.get(Calendar.DATE) + "/" + (cal1.get(Calendar.MONTH) +
			 * 1) + "/" + cal1.get(Calendar.YEAR) + "  " + timeStamp1 + " " +
			 * cal1.getTimeZone().getDisplayName(false, LONG, Locale.getDefault());
			 */
			gradeChangeJson.addProperty("workflowStartTime", workflowStartTime);
			gradeChangeJson.addProperty("stepStartTime", stepStartTime);
			gradeChangeJson.addProperty("stepName", wItem.getNode().getTitle());
			gradeChangeJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			gradeChangeJson.addProperty("stepAssignee", currentAssignee);
			gradeChangeJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			gradeChangeJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return gradeChangeJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getMajorMinorChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject majorMinorChangeJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			MetaDataMap map = wItem.getWorkflowData().getMetaDataMap();
			majorMinorChangeJson.addProperty("sNo", count);
			majorMinorChangeJson.addProperty("cwid",
					null != map.get("studentCWID") ? map.get("studentCWID").toString() : StringUtils.EMPTY);
			majorMinorChangeJson.addProperty("userID",
					null != map.get("studentUserID") ? map.get("studentUserID").toString() : StringUtils.EMPTY);
			majorMinorChangeJson.addProperty("lName",
					null != map.get("studentLastName") ? map.get("studentLastName").toString() : StringUtils.EMPTY);
			majorMinorChangeJson.addProperty("fName",
					null != map.get("studentName") ? map.get("studentName").toString() : StringUtils.EMPTY);
			majorMinorChangeJson.addProperty("workflowStartTime", wItem.getWorkflow().getTimeStarted().toString());
			majorMinorChangeJson.addProperty("stepStartTime", wItem.getProgressBeginTime().toString());
			majorMinorChangeJson.addProperty("stepName", wItem.getNode().getTitle());
			majorMinorChangeJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			majorMinorChangeJson.addProperty("stepAssignee", currentAssignee);
			majorMinorChangeJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			majorMinorChangeJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return majorMinorChangeJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getLateAddsReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject lateAddsChangeJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			// MetaDataMap map = wItem.getWorkflowData().getMetaDataMap();
			lateAddsChangeJson.addProperty("sNo", count);
			/*
			 * lateAddsChangeJson.addProperty("cwid", (map.containsKey("studentCWID") &&
			 * null != map.get("studentCWID")) ? map.get("studentCWID").toString() :
			 * StringUtils.EMPTY); lateAddsChangeJson.addProperty("lName",
			 * (map.containsKey("studentLName") && null != map.get("studentLName")) ?
			 * map.get("studentLName").toString() : StringUtils.EMPTY);
			 * lateAddsChangeJson.addProperty("fName", (map.containsKey("studentFName") &&
			 * null != map.get("studentFName")) ? map.get("studentFName").toString() :
			 * StringUtils.EMPTY);
			 */

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String studentCWID = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentCWID");
						if (StringUtils.isNotBlank(studentCWID)) {
							lateAddsChangeJson.addProperty("studentCWID", studentCWID);
						}
						String studentFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(studentFirstName)) {
							lateAddsChangeJson.addProperty("studentFirstName", studentFirstName);
						}
						String studentLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(studentLastName)) {
							lateAddsChangeJson.addProperty("studentLastName", studentLastName);
						}

						String classNumber = XMLUtils.getChildNodeContent(afBoundDataElement, "ClassNumber");
						if (StringUtils.isNotBlank(classNumber)) {
							lateAddsChangeJson.addProperty("classNumber", classNumber);
						}

						String courseName = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentCourse");
						if (StringUtils.isNotBlank(courseName)) {
							lateAddsChangeJson.addProperty("courseName", courseName);
						}
					}
				}
			}

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);

			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}

			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);

			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}

			lateAddsChangeJson.addProperty("workflowStartTime", workflowStartTime);
			lateAddsChangeJson.addProperty("stepStartTime", stepStartTime);
			lateAddsChangeJson.addProperty("stepName", wItem.getNode().getTitle());
			lateAddsChangeJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			lateAddsChangeJson.addProperty("stepAssignee", currentAssignee);
			lateAddsChangeJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			lateAddsChangeJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			log.info("lateAddsChangeJson value is: ========" + lateAddsChangeJson);
			return lateAddsChangeJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getLeaveOfAbsenceReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject leaveOfAbsenceJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			// MetaDataMap map = wItem.getWorkflowData().getMetaDataMap();
			leaveOfAbsenceJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String studentCWID = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentCWID");
						if (StringUtils.isNotBlank(studentCWID)) {
							leaveOfAbsenceJson.addProperty("studentCWID", studentCWID);
							log.info("studentCWID value = " + studentCWID);
						}
						String studentFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(studentFirstName)) {
							leaveOfAbsenceJson.addProperty("studentFirstName", studentFirstName);
							log.info("studentFirstName value = " + studentFirstName);
						}
						String studentLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(studentLastName)) {
							leaveOfAbsenceJson.addProperty("studentLastName", studentLastName);
							log.info("studentLastName value = " + studentLastName);
						}
					}
				}
			}

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);

			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}

			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);

			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}

			leaveOfAbsenceJson.addProperty("workflowStartTime", workflowStartTime);
			leaveOfAbsenceJson.addProperty("stepStartTime", stepStartTime);
			leaveOfAbsenceJson.addProperty("stepName", wItem.getNode().getTitle());
			leaveOfAbsenceJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			leaveOfAbsenceJson.addProperty("stepAssignee", currentAssignee);
			leaveOfAbsenceJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			leaveOfAbsenceJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return leaveOfAbsenceJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getAppealsReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject appealsJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			appealsJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {

						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CWID");
						if (StringUtils.isNotBlank(cwid)) {
							appealsJson.addProperty("cwid", cwid);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "ApplicantLastName");
						if (StringUtils.isNotBlank(lname)) {
							appealsJson.addProperty("studentLastName", lname);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "ApplicantFirstName");
						if (StringUtils.isNotBlank(fname)) {
							appealsJson.addProperty("studentFirstName", fname);
						}

						String term = XMLUtils.getChildNodeContent(afBoundDataElement, "Term");
						if (StringUtils.isNotBlank(term)) {
							appealsJson.addProperty("term", term);
						}
					}
				}
			}

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			appealsJson.addProperty("workflowStartTime", workflowStartTime);
			appealsJson.addProperty("stepStartTime", stepStartTime);
			appealsJson.addProperty("stepName", wItem.getNode().getTitle());
			appealsJson.addProperty("stepInitiator", initiatedBy);
			appealsJson.addProperty("stepAssignee", currentAssignee);
			appealsJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			appealsJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return appealsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCatalogYearReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject appealsJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			appealsJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {

						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CWID");
						if (StringUtils.isNotBlank(cwid)) {
							appealsJson.addProperty("cwid", cwid);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(lname)) {
							appealsJson.addProperty("studentLastName", lname);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(fname)) {
							appealsJson.addProperty("studentFirstName", fname);
						}

//						String term = XMLUtils.getChildNodeContent(afBoundDataElement, "Term");
//						if (StringUtils.isNotBlank(term)) {
//							appealsJson.addProperty("term", term);
//						}
					}
				}
			}

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			appealsJson.addProperty("workflowStartTime", workflowStartTime);
			appealsJson.addProperty("stepStartTime", stepStartTime);
			appealsJson.addProperty("stepName", wItem.getNode().getTitle());
			appealsJson.addProperty("stepInitiator", initiatedBy);
			appealsJson.addProperty("stepAssignee", currentAssignee);
			appealsJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			appealsJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return appealsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

}