package com.csuf.cloud.core.services.impl;

import java.io.InputStream;
import java.util.Arrays;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.InboxReportService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(service = InboxReportService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=CSUF Inbox Report Utility Service" })

public class InboxReportServiceImpl implements InboxReportService {

	private static final Logger log = LoggerFactory.getLogger(InboxReportServiceImpl.class);

	private static final String DATE_FORMAT_US = "M/d/yyyy h:mm:ss a";

	private static final String DATE_FORMAT_DB = "yyyy-MM-dd";

	private static final String DATE_FORMAT_DATE_ONLY = "M/d/yyyy";

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
			leaveOfAbsenceJson.addProperty("witemId", wItem.getId());
			leaveOfAbsenceJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return leaveOfAbsenceJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTempFacultyPayrollReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject tempFacultyPayrollJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			tempFacultyPayrollJson.addProperty("sNo", count);

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
						String department = XMLUtils.getChildNodeContent(afBoundDataElement, "Department");
						if (StringUtils.isNotBlank(department)) {
							tempFacultyPayrollJson.addProperty("Department", department);
							// log.debug("Department value = " + department);
						}

						String jobCode = XMLUtils.getChildNodeContent(afBoundDataElement, "JobCode");
						if (StringUtils.isNotBlank(jobCode)) {
							tempFacultyPayrollJson.addProperty("JobCode", jobCode);
						}

						String fromDate = XMLUtils.getChildNodeContent(afBoundDataElement, "FromDate");
						if (StringUtils.isNotBlank(fromDate)) {
							Date formattedFromDate = CSUFUtils.convertStringToDate(fromDate, DATE_FORMAT_DB);
							if (null != formattedFromDate) {
								String finalFromDate = CSUFUtils.convertDateToString(formattedFromDate,
										DATE_FORMAT_DATE_ONLY);
								if (StringUtils.isNotBlank(finalFromDate)) {
									tempFacultyPayrollJson.addProperty("FromDate", finalFromDate);
								}
							}
						}

						String throughDate = XMLUtils.getChildNodeContent(afBoundDataElement, "ThroughDate");
						if (StringUtils.isNotBlank(throughDate)) {
							Date formattedThroughDate = CSUFUtils.convertStringToDate(throughDate, DATE_FORMAT_DB);
							if (null != formattedThroughDate) {
								String finalThroughDate = CSUFUtils.convertDateToString(formattedThroughDate,
										DATE_FORMAT_DATE_ONLY);
								if (StringUtils.isNotBlank(finalThroughDate)) {
									tempFacultyPayrollJson.addProperty("ThroughDate", finalThroughDate);
								}
							}
						}

						String agency = XMLUtils.getChildNodeContent(afBoundDataElement, "Agency");
						if (StringUtils.isNotBlank(agency)) {
							tempFacultyPayrollJson.addProperty("Agency", agency);
						}

						String reportingUnit = XMLUtils.getChildNodeContent(afBoundDataElement, "ReportingUnit");
						if (StringUtils.isNotBlank(reportingUnit)) {
							tempFacultyPayrollJson.addProperty("ReportingUnit", reportingUnit);
						}

						String runDateTime = XMLUtils.getChildNodeContent(afBoundDataElement, "RunDateTime");
						if (StringUtils.isNotBlank(runDateTime)) {
							tempFacultyPayrollJson.addProperty("RunDateTime", runDateTime);
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

			tempFacultyPayrollJson.addProperty("workflowStartTime", workflowStartTime);
			tempFacultyPayrollJson.addProperty("stepStartTime", stepStartTime);
			tempFacultyPayrollJson.addProperty("stepName", wItem.getNode().getTitle());
			tempFacultyPayrollJson.addProperty("stepInitiator", initiatedBy);
			tempFacultyPayrollJson.addProperty("stepAssignee", currentAssignee);
			tempFacultyPayrollJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			tempFacultyPayrollJson.addProperty("witemId", wItem.getId());
			tempFacultyPayrollJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return tempFacultyPayrollJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getNewPositionDescriptionStaffReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject newPositionDescriptionStaffJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			newPositionDescriptionStaffJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							newPositionDescriptionStaffJson.addProperty("cwid", cwid);
							log.info("CWID value = " + cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							newPositionDescriptionStaffJson.addProperty("chrsId", chrsId);
							log.info("chrsId value = " + chrsId);
						}
						String incumbentFirstName = XMLUtils.getChildNodeContent(afBoundDataElement,
								"IncumbentFirstName");
						if (StringUtils.isNotBlank(incumbentFirstName)) {
							newPositionDescriptionStaffJson.addProperty("IncumbentFirstName", incumbentFirstName);
							log.info("IncumbentFirstName value = " + incumbentFirstName);
						}
						String incumbentLastName = XMLUtils.getChildNodeContent(afBoundDataElement,
								"IncumbentLastName");
						if (StringUtils.isNotBlank(incumbentLastName)) {
							newPositionDescriptionStaffJson.addProperty("IncumbentLastName", incumbentLastName);
							log.info("IncumbentLastName value = " + incumbentLastName);
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

			newPositionDescriptionStaffJson.addProperty("workflowStartTime", workflowStartTime);
			newPositionDescriptionStaffJson.addProperty("stepStartTime", stepStartTime);
			newPositionDescriptionStaffJson.addProperty("stepName", wItem.getNode().getTitle());
			newPositionDescriptionStaffJson.addProperty("stepInitiator", initiatedBy);
			newPositionDescriptionStaffJson.addProperty("stepAssignee", currentAssignee);
			newPositionDescriptionStaffJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			newPositionDescriptionStaffJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			newPositionDescriptionStaffJson.addProperty("witemId", wItem.getId());
			return newPositionDescriptionStaffJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getNewPositionDescriptionManagerReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject newPositionDescriptionManagerJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			newPositionDescriptionManagerJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							newPositionDescriptionManagerJson.addProperty("cwid", cwid);
							log.info("CWID value = " + cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							newPositionDescriptionManagerJson.addProperty("chrsId", chrsId);
							log.info("chrsId value = " + chrsId);
						}
						String incumbentFirstName = XMLUtils.getChildNodeContent(afBoundDataElement,
								"IncumbentFirstName");
						if (StringUtils.isNotBlank(incumbentFirstName)) {
							newPositionDescriptionManagerJson.addProperty("IncumbentFirstName", incumbentFirstName);
							log.info("IncumbentFirstName value = " + incumbentFirstName);
						}
						String incumbentLastName = XMLUtils.getChildNodeContent(afBoundDataElement,
								"IncumbentLastName");
						if (StringUtils.isNotBlank(incumbentLastName)) {
							newPositionDescriptionManagerJson.addProperty("IncumbentLastName", incumbentLastName);
							log.info("IncumbentLastName value = " + incumbentLastName);
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

			newPositionDescriptionManagerJson.addProperty("workflowStartTime", workflowStartTime);
			newPositionDescriptionManagerJson.addProperty("stepStartTime", stepStartTime);
			newPositionDescriptionManagerJson.addProperty("stepName", wItem.getNode().getTitle());
			newPositionDescriptionManagerJson.addProperty("stepInitiator", initiatedBy);
			newPositionDescriptionManagerJson.addProperty("stepAssignee", currentAssignee);
			newPositionDescriptionManagerJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			newPositionDescriptionManagerJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			newPositionDescriptionManagerJson.addProperty("witemId", wItem.getId());
			return newPositionDescriptionManagerJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getEmployeeFeeWaiverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject employeeFeeWaiverManagerJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			employeeFeeWaiverManagerJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "empId");
						if (StringUtils.isNotBlank(cwid)) {
							employeeFeeWaiverManagerJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsId");
						if (StringUtils.isNotBlank(chrsId)) {
							employeeFeeWaiverManagerJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							employeeFeeWaiverManagerJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							employeeFeeWaiverManagerJson.addProperty("employeeLastName", employeeLastName);
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

			employeeFeeWaiverManagerJson.addProperty("workflowStartTime", workflowStartTime);
			employeeFeeWaiverManagerJson.addProperty("stepStartTime", stepStartTime);
			employeeFeeWaiverManagerJson.addProperty("stepName", wItem.getNode().getTitle());
			employeeFeeWaiverManagerJson.addProperty("stepInitiator", initiatedBy);
			employeeFeeWaiverManagerJson.addProperty("stepAssignee", currentAssignee);
			employeeFeeWaiverManagerJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			employeeFeeWaiverManagerJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			employeeFeeWaiverManagerJson.addProperty("witemId", wItem.getId());
			return employeeFeeWaiverManagerJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDependentFeeWaiverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject dependentFeeWaiverManagerJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			dependentFeeWaiverManagerJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "empID");
						if (StringUtils.isNotBlank(cwid)) {
							dependentFeeWaiverManagerJson.addProperty("cwid", cwid);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							dependentFeeWaiverManagerJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							dependentFeeWaiverManagerJson.addProperty("employeeLastName", employeeLastName);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsID");
						if (StringUtils.isNotBlank(chrsId)) {
							dependentFeeWaiverManagerJson.addProperty("chrsId", chrsId);
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

			dependentFeeWaiverManagerJson.addProperty("workflowStartTime", workflowStartTime);
			dependentFeeWaiverManagerJson.addProperty("stepStartTime", stepStartTime);
			dependentFeeWaiverManagerJson.addProperty("stepName", wItem.getNode().getTitle());
			dependentFeeWaiverManagerJson.addProperty("stepInitiator", initiatedBy);
			dependentFeeWaiverManagerJson.addProperty("stepAssignee", currentAssignee);
			dependentFeeWaiverManagerJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			dependentFeeWaiverManagerJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			dependentFeeWaiverManagerJson.addProperty("witemId", wItem.getId());
			return dependentFeeWaiverManagerJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDomesticPartnerTaxCertificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject domesticPartnerTaxCertificationManagerJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			domesticPartnerTaxCertificationManagerJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
//						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "empID");
//						if (StringUtils.isNotBlank(cwid)) {
//							domesticPartnerTaxCertificationManagerJson.addProperty("cwid", cwid);
//						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "First_Name");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							domesticPartnerTaxCertificationManagerJson.addProperty("employeeFirstName",
									employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "Last_Name");
						if (StringUtils.isNotBlank(employeeLastName)) {
							domesticPartnerTaxCertificationManagerJson.addProperty("employeeLastName",
									employeeLastName);
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

			domesticPartnerTaxCertificationManagerJson.addProperty("workflowStartTime", workflowStartTime);
			domesticPartnerTaxCertificationManagerJson.addProperty("stepStartTime", stepStartTime);
			domesticPartnerTaxCertificationManagerJson.addProperty("stepName", wItem.getNode().getTitle());
			domesticPartnerTaxCertificationManagerJson.addProperty("stepInitiator", initiatedBy);
			domesticPartnerTaxCertificationManagerJson.addProperty("stepAssignee", currentAssignee);
			domesticPartnerTaxCertificationManagerJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			domesticPartnerTaxCertificationManagerJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			domesticPartnerTaxCertificationManagerJson.addProperty("witemId", wItem.getId());
			return domesticPartnerTaxCertificationManagerJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getShortAppEmployeeFeeWaiverReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject shortAppEmpJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			shortAppEmpJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							shortAppEmpJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "ChrsID");
						if (StringUtils.isNotBlank(chrsId)) {
							shortAppEmpJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							shortAppEmpJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							shortAppEmpJson.addProperty("employeeLastName", employeeLastName);
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

			shortAppEmpJson.addProperty("workflowStartTime", workflowStartTime);
			shortAppEmpJson.addProperty("stepStartTime", stepStartTime);
			shortAppEmpJson.addProperty("stepName", wItem.getNode().getTitle());
			shortAppEmpJson.addProperty("stepInitiator", initiatedBy);
			shortAppEmpJson.addProperty("stepAssignee", currentAssignee);
			shortAppEmpJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			shortAppEmpJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			shortAppEmpJson.addProperty("witemId", wItem.getId());
			return shortAppEmpJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCLRReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject clrJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			clrJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EMPLID");
						if (StringUtils.isNotBlank(cwid)) {
							clrJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsId");
						if (StringUtils.isNotBlank(chrsId)) {
							clrJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							clrJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							clrJson.addProperty("employeeLastName", employeeLastName);
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

			clrJson.addProperty("workflowStartTime", workflowStartTime);
			clrJson.addProperty("stepStartTime", stepStartTime);
			clrJson.addProperty("stepName", wItem.getNode().getTitle());
			clrJson.addProperty("stepInitiator", initiatedBy);
			clrJson.addProperty("stepAssignee", currentAssignee);
			clrJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			clrJson.addProperty("witemId", wItem.getId());
			clrJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return clrJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPersonnelFileAccessReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject pfaJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			pfaJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Empl_ID");
						if (StringUtils.isNotBlank(cwid)) {
							pfaJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsId");
						if (StringUtils.isNotBlank(chrsId)) {
							pfaJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "First_Name");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							pfaJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "Last_Name");
						if (StringUtils.isNotBlank(employeeLastName)) {
							pfaJson.addProperty("employeeLastName", employeeLastName);
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

			pfaJson.addProperty("workflowStartTime", workflowStartTime);
			pfaJson.addProperty("stepStartTime", stepStartTime);
			pfaJson.addProperty("stepName", wItem.getNode().getTitle());
			pfaJson.addProperty("stepInitiator", initiatedBy);
			pfaJson.addProperty("stepAssignee", currentAssignee);
			pfaJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			pfaJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			pfaJson.addProperty("witemId", wItem.getId());
			return pfaJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPersonnelActionNoticeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject personnedlActionNoticeJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			personnedlActionNoticeJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String chrsID = XMLUtils.getChildNodeContent(afBoundDataElement, "ChrsID");
						if (StringUtils.isNotBlank(chrsID)) {
							personnedlActionNoticeJson.addProperty("chrsID", chrsID);
						}
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							personnedlActionNoticeJson.addProperty("cwid", cwid);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							personnedlActionNoticeJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							personnedlActionNoticeJson.addProperty("employeeLastName", employeeLastName);
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

			personnedlActionNoticeJson.addProperty("workflowStartTime", workflowStartTime);
			personnedlActionNoticeJson.addProperty("stepStartTime", stepStartTime);
			personnedlActionNoticeJson.addProperty("stepName", wItem.getNode().getTitle());
			personnedlActionNoticeJson.addProperty("stepInitiator", initiatedBy);
			personnedlActionNoticeJson.addProperty("stepAssignee", currentAssignee);
			personnedlActionNoticeJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			personnedlActionNoticeJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			personnedlActionNoticeJson.addProperty("witemId", wItem.getId());
			return personnedlActionNoticeJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCareerDevlopmentReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject careeDevJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			careeDevJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "emplID");
						if (StringUtils.isNotBlank(cwid)) {
							careeDevJson.addProperty("cwid", cwid);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							careeDevJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							careeDevJson.addProperty("employeeLastName", employeeLastName);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsID");
						if (StringUtils.isNotBlank(chrsId)) {
							careeDevJson.addProperty("chrsId", chrsId);
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

			careeDevJson.addProperty("workflowStartTime", workflowStartTime);
			careeDevJson.addProperty("stepStartTime", stepStartTime);
			careeDevJson.addProperty("stepName", wItem.getNode().getTitle());
			careeDevJson.addProperty("stepInitiator", initiatedBy);
			careeDevJson.addProperty("stepAssignee", currentAssignee);
			careeDevJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			careeDevJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			careeDevJson.addProperty("witemId", wItem.getId());
			return careeDevJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getOTSDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject otsdJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			otsdJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSId");
						String emplid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpID");
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "Initials");
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "Lname");
						otsdJson.addProperty("fname", fName);
						otsdJson.addProperty("lname", lName);
						otsdJson.addProperty("chrsid", chrsId);
						otsdJson.addProperty("empid", emplid);
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentId");
						if (StringUtils.isNotBlank(deptId)) {
							otsdJson.addProperty("deptId", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "Month");
						if (StringUtils.isNotBlank(month)) {
							otsdJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "Year");
						if (StringUtils.isNotBlank(year)) {
							otsdJson.addProperty("year", year);
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

			otsdJson.addProperty("workflowStartTime", workflowStartTime);
			otsdJson.addProperty("stepStartTime", stepStartTime);
			otsdJson.addProperty("stepName", wItem.getNode().getTitle());
			otsdJson.addProperty("stepInitiator", initiatedBy);
			otsdJson.addProperty("stepAssignee", currentAssignee);
			otsdJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			otsdJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			otsdJson.addProperty("witemId", wItem.getId());
			return otsdJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getConfirmationTicketReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject careeDevJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			careeDevJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CWID");
						if (StringUtils.isNotBlank(cwid)) {
							careeDevJson.addProperty("cwid", cwid);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							careeDevJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							careeDevJson.addProperty("employeeLastName", employeeLastName);
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

			careeDevJson.addProperty("workflowStartTime", workflowStartTime);
			careeDevJson.addProperty("stepStartTime", stepStartTime);
			careeDevJson.addProperty("stepName", wItem.getNode().getTitle());
			careeDevJson.addProperty("stepInitiator", initiatedBy);
			careeDevJson.addProperty("stepAssignee", currentAssignee);
			careeDevJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			careeDevJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			careeDevJson.addProperty("witemId", wItem.getId());
			return careeDevJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getOTSDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count, String title) {
		try {
			JsonObject otsdJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			otsdJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSId");
						String emplid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpID");
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "Initials");
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "Lname");
						otsdJson.addProperty("fname", fName);
						otsdJson.addProperty("lname", lName);
						otsdJson.addProperty("chrsid", chrsId);
						otsdJson.addProperty("empid", emplid);
						if (title.equals("OT & SD Request - Distributed")) {
							String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentId");
							if (StringUtils.isNotBlank(deptId)) {
								otsdJson.addProperty("deptId", deptId);
							}
							String month = XMLUtils.getChildNodeContent(afBoundDataElement, "Month");
							if (StringUtils.isNotBlank(month)) {
								otsdJson.addProperty("month", month);
							}
							String year = XMLUtils.getChildNodeContent(afBoundDataElement, "Year");
							if (StringUtils.isNotBlank(year)) {
								otsdJson.addProperty("year", year);
							}
						} else {
							String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
							if (StringUtils.isNotBlank(deptId)) {
								otsdJson.addProperty("deptId", deptId);
							}
							String month = XMLUtils.getChildNodeContent(afBoundDataElement, "MonthPeriod");
							if (StringUtils.isNotBlank(month)) {
								otsdJson.addProperty("month", month);
							}
							String year = XMLUtils.getChildNodeContent(afBoundDataElement, "YearPeriod");
							if (StringUtils.isNotBlank(year)) {
								otsdJson.addProperty("year", year);
							}
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

			
			
			otsdJson.addProperty("workflowStartTime", workflowStartTime);
			otsdJson.addProperty("stepStartTime", stepStartTime);
			otsdJson.addProperty("stepName", wItem.getNode().getTitle());
			otsdJson.addProperty("stepInitiator", initiatedBy);
			otsdJson.addProperty("stepAssignee", currentAssignee);
			otsdJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			otsdJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			otsdJson.addProperty("witemId", wItem.getId());
			return otsdJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getManualCDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject manualcdJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			manualcdJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentID");
						if (StringUtils.isNotBlank(deptId)) {
							manualcdJson.addProperty("dept", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "Month");
						if (StringUtils.isNotBlank(month)) {
							manualcdJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "Year");
						if (StringUtils.isNotBlank(year)) {
							manualcdJson.addProperty("year", year);
						}
						String agency = XMLUtils.getChildNodeContent(afBoundDataElement, "Agency");
						if (StringUtils.isNotBlank(agency)) {
							manualcdJson.addProperty("agency", agency);
						}
						String unit = XMLUtils.getChildNodeContent(afBoundDataElement, "Unit");
						if (StringUtils.isNotBlank(unit)) {
							manualcdJson.addProperty("unit", unit);
						}
						String totalHours = XMLUtils.getChildNodeContent(afBoundDataElement, "TotalHours");
						if (StringUtils.isNotBlank(totalHours)) {
							manualcdJson.addProperty("totalHours", totalHours);
						}
						String totalGross = XMLUtils.getChildNodeContent(afBoundDataElement, "TotalGross");
						if (StringUtils.isNotBlank(totalGross)) {
							manualcdJson.addProperty("totalGross", totalGross);
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

			manualcdJson.addProperty("workflowStartTime", workflowStartTime);
			manualcdJson.addProperty("stepStartTime", stepStartTime);
			manualcdJson.addProperty("stepName", wItem.getNode().getTitle());
			manualcdJson.addProperty("stepInitiator", initiatedBy);
			manualcdJson.addProperty("stepAssignee", currentAssignee);
			manualcdJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			manualcdJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			manualcdJson.addProperty("witemId", wItem.getId());
			return manualcdJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTimebaseChangeRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject timbaseChangeRequestJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			timbaseChangeRequestJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							timbaseChangeRequestJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							timbaseChangeRequestJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							timbaseChangeRequestJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							timbaseChangeRequestJson.addProperty("employeeLastName", employeeLastName);
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

			timbaseChangeRequestJson.addProperty("workflowStartTime", workflowStartTime);
			timbaseChangeRequestJson.addProperty("stepStartTime", stepStartTime);
			timbaseChangeRequestJson.addProperty("stepName", wItem.getNode().getTitle());
			timbaseChangeRequestJson.addProperty("stepInitiator", initiatedBy);
			timbaseChangeRequestJson.addProperty("stepAssignee", currentAssignee);
			timbaseChangeRequestJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			timbaseChangeRequestJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			timbaseChangeRequestJson.addProperty("witemId", wItem.getId());
			return timbaseChangeRequestJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getMiscPayrollReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject otsdJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			otsdJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentId");
						if (StringUtils.isNotBlank(deptId)) {
							otsdJson.addProperty("deptId", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "Month");
						if (StringUtils.isNotBlank(month)) {
							otsdJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "Year");
						if (StringUtils.isNotBlank(year)) {
							otsdJson.addProperty("year", year);
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

			otsdJson.addProperty("workflowStartTime", workflowStartTime);
			otsdJson.addProperty("stepStartTime", stepStartTime);
			otsdJson.addProperty("stepName", wItem.getNode().getTitle());
			otsdJson.addProperty("stepInitiator", initiatedBy);
			otsdJson.addProperty("stepAssignee", currentAssignee);
			otsdJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			otsdJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			otsdJson.addProperty("witemId", wItem.getId());
			return otsdJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCataLeaveDonationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject cataLeaveDonationJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			cataLeaveDonationJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							cataLeaveDonationJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRS_ID");
                        if (StringUtils.isNotBlank(chrsId)) {
                                cataLeaveDonationJson.addProperty("chrsId", chrsId);
                        }
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							cataLeaveDonationJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							cataLeaveDonationJson.addProperty("employeeLastName", employeeLastName);
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

			cataLeaveDonationJson.addProperty("workflowStartTime", workflowStartTime);
			cataLeaveDonationJson.addProperty("stepStartTime", stepStartTime);
			cataLeaveDonationJson.addProperty("stepName", wItem.getNode().getTitle());
			cataLeaveDonationJson.addProperty("stepInitiator", initiatedBy);
			cataLeaveDonationJson.addProperty("stepAssignee", currentAssignee);
			cataLeaveDonationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			cataLeaveDonationJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			cataLeaveDonationJson.addProperty("witemId", wItem.getId());
			return cataLeaveDonationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPayPlan1012Report(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject payPlanJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			payPlanJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "empl_ID");
						if (StringUtils.isNotBlank(cwid)) {
							payPlanJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							payPlanJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "first_Name");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							payPlanJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "last_Name");
						if (StringUtils.isNotBlank(employeeLastName)) {
							payPlanJson.addProperty("employeeLastName", employeeLastName);
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

			payPlanJson.addProperty("workflowStartTime", workflowStartTime);
			payPlanJson.addProperty("stepStartTime", stepStartTime);
			payPlanJson.addProperty("stepName", wItem.getNode().getTitle());
			payPlanJson.addProperty("stepInitiator", initiatedBy);
			payPlanJson.addProperty("stepAssignee", currentAssignee);
			payPlanJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			payPlanJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			payPlanJson.addProperty("witemId", wItem.getId());
			return payPlanJson;
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
			mppJson.addProperty("sNo", count);
			String initiatedBy = "";
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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpID");
						if (StringUtils.isNotBlank(cwid)) {
							mppJson.addProperty("cwid", cwid);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpFirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							mppJson.addProperty("fName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpLastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							mppJson.addProperty("lName", employeeLastName);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptName");
						if (StringUtils.isNotBlank(deptName)) {
							mppJson.addProperty("deptName", deptName);
						}
						String divisionName = XMLUtils.getChildNodeContent(afBoundDataElement, "divisionName");
						if (StringUtils.isNotBlank(divisionName)) {
							mppJson.addProperty("divisionName", divisionName);
						}
					}
				}
			}
//		mppJson.addProperty("cwid", null != map.get("empId") ? map.get("empId").toString() : StringUtils.EMPTY);
//		mppJson.addProperty("lName",
//				null != map.get("StaffLastName") ? map.get("StaffLastName").toString() : StringUtils.EMPTY);
//		mppJson.addProperty("fName",
//				null != map.get("StaffFirstName") ? map.get("StaffFirstName").toString() : StringUtils.EMPTY);
//		mppJson.addProperty("deptName",
//				null != map.get("deptName") ? map.get("deptName").toString() : StringUtils.EMPTY);

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}

			mppJson.addProperty("workflowStartTime", workflowStartTime);
			mppJson.addProperty("stepStartTime", stepStartTime);
			mppJson.addProperty("stepName", wItem.getNode().getTitle());
			mppJson.addProperty("stepInitiator", initiatedBy);
			mppJson.addProperty("stepAssignee", currentAssignee);
			mppJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			mppJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			mppJson.addProperty("witemId", wItem.getId());
			return mppJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDOAReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject doaJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			String deptID = "";
			String unit = "";
			doaJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");

						deptID = XMLUtils.getChildNodeContent(afUnBoundDataElement, "all_deptID_submit");
						if (StringUtils.isNotBlank(deptID)) {
							doaJson.addProperty("deptID", deptID);
						}

						unit = XMLUtils.getChildNodeContent(afUnBoundDataElement, "all_units_submit");
						if (StringUtils.isNotBlank(unit)) {
							doaJson.addProperty("unit", unit);
						}
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "hidden_cwid");
						if (StringUtils.isNotBlank(cwid)) {
							doaJson.addProperty("cwid", cwid);
						}
						String divisionCode = XMLUtils.getChildNodeContent(afBoundDataElement, "hidden_division_code");
						if (StringUtils.isNotBlank(divisionCode)) {
							doaJson.addProperty("divisionCode", divisionCode);
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

			doaJson.addProperty("workflowStartTime", workflowStartTime);
			doaJson.addProperty("stepStartTime", stepStartTime);
			doaJson.addProperty("stepName", wItem.getNode().getTitle());
			doaJson.addProperty("stepInitiator", initiatedBy);
			doaJson.addProperty("stepAssignee", currentAssignee);
			doaJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			doaJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			doaJson.addProperty("witemId", wItem.getId());
			return doaJson;

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDockNoticeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject dnJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			dnJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplID");
						if (StringUtils.isNotBlank(cwid)) {
							dnJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							dnJson.addProperty("chrsId", chrsId);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							dnJson.addProperty("employeeFirstName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							dnJson.addProperty("employeeLastName", employeeLastName);
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

			dnJson.addProperty("workflowStartTime", workflowStartTime);
			dnJson.addProperty("stepStartTime", stepStartTime);
			dnJson.addProperty("stepName", wItem.getNode().getTitle());
			dnJson.addProperty("stepInitiator", initiatedBy);
			dnJson.addProperty("stepAssignee", currentAssignee);
			dnJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			dnJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			dnJson.addProperty("witemId", wItem.getId());
			return dnJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSPEReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject mppJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			mppJson.addProperty("sNo", count);
			String initiatedBy = "";
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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpID");
						if (StringUtils.isNotBlank(cwid)) {
							mppJson.addProperty("cwid", cwid);
						}
						String employeeFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "StaffFirstName");
						if (StringUtils.isNotBlank(employeeFirstName)) {
							mppJson.addProperty("fName", employeeFirstName);
						}
						String employeeLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "StaffLastName");
						if (StringUtils.isNotBlank(employeeLastName)) {
							mppJson.addProperty("lName", employeeLastName);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "Department");
						if (StringUtils.isNotBlank(deptName)) {
							mppJson.addProperty("deptName", deptName);
						}
						String divisionName = XMLUtils.getChildNodeContent(afBoundDataElement, "divisionName");
						if (StringUtils.isNotBlank(divisionName)) {
							mppJson.addProperty("divisionName", divisionName);
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

			mppJson.addProperty("workflowStartTime", workflowStartTime);
			mppJson.addProperty("stepStartTime", stepStartTime);
			mppJson.addProperty("stepName", wItem.getNode().getTitle());
			mppJson.addProperty("stepInitiator", initiatedBy);
			mppJson.addProperty("stepAssignee", currentAssignee);
			mppJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			mppJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			mppJson.addProperty("witemId", wItem.getId());
			return mppJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getHourlyINTTimesheetReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject outputJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = StringUtils.EMPTY;
			outputJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "Dept_ID");
						if (StringUtils.isNotBlank(deptId)) {
							outputJson.addProperty("deptId", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "MonthSelected");
						if (StringUtils.isNotBlank(month)) {
							outputJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "YearSelected");
						if (StringUtils.isNotBlank(year)) {
							outputJson.addProperty("year", year);
						}
						String empId = XMLUtils.getChildNodeContent(afBoundDataElement, "Empl_ID");
						if (StringUtils.isNotBlank(empId)) {
							outputJson.addProperty("empId", empId);
						}
						String CHRSID = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRS_ID");
						if (StringUtils.isNotBlank(CHRSID)) {
							outputJson.addProperty("CHRSID", CHRSID);
						}
						String firstName = XMLUtils.getChildNodeContent(afBoundDataElement, "First_Name");
						if (StringUtils.isNotBlank(firstName)) {
							outputJson.addProperty("firstName", firstName);
						}
						String lastName = XMLUtils.getChildNodeContent(afBoundDataElement, "Last_Name");
						if (StringUtils.isNotBlank(lastName)) {
							outputJson.addProperty("lastName", lastName);
						}
						String initiatedDate = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatedDate");
						if (StringUtils.isNotBlank(initiatedDate)) {
							outputJson.addProperty("initiatedDate", initiatedDate);
						}
						String ssn = XMLUtils.getChildNodeContent(afBoundDataElement, "SSN");
						if (StringUtils.isNotBlank(ssn)) {
							outputJson.addProperty("ssn", ssn);
						}
						String unit = XMLUtils.getChildNodeContent(afBoundDataElement, "Unit");
						if (StringUtils.isNotBlank(unit)) {
							outputJson.addProperty("unit", unit);
						}
						String empUserId = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpUserId");
						if (StringUtils.isNotBlank(empUserId)) {
							outputJson.addProperty("empUserId", empUserId);
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

			outputJson.addProperty("workflowStartTime", workflowStartTime);
			outputJson.addProperty("stepStartTime", stepStartTime);
			outputJson.addProperty("stepName", wItem.getNode().getTitle());
			outputJson.addProperty("stepInitiator", initiatedBy);
			outputJson.addProperty("stepAssignee", currentAssignee);
			outputJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			outputJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			outputJson.addProperty("witemId", wItem.getId());
			return outputJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSpecialConsultantTimesheetReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject outputJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = StringUtils.EMPTY;
			outputJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "Dept_ID");
						if (StringUtils.isNotBlank(deptId)) {
							outputJson.addProperty("deptId", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "MonthSelected");
						if (StringUtils.isNotBlank(month)) {
							outputJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "YearSelected");
						if (StringUtils.isNotBlank(year)) {
							outputJson.addProperty("year", year);
						}
						String empId = XMLUtils.getChildNodeContent(afBoundDataElement, "Empl_ID");
						if (StringUtils.isNotBlank(empId)) {
							outputJson.addProperty("empId", empId);
						}
						String CHRSID = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRS_ID");
						if (StringUtils.isNotBlank(CHRSID)) {
							outputJson.addProperty("CHRSID", CHRSID);
						}
						String firstName = XMLUtils.getChildNodeContent(afBoundDataElement, "First_Name");
						if (StringUtils.isNotBlank(firstName)) {
							outputJson.addProperty("firstName", firstName);
						}
						String lastName = XMLUtils.getChildNodeContent(afBoundDataElement, "Last_Name");
						if (StringUtils.isNotBlank(lastName)) {
							outputJson.addProperty("lastName", lastName);
						}
						String initiatedDate = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatedDate");
						if (StringUtils.isNotBlank(initiatedDate)) {
							outputJson.addProperty("initiatedDate", initiatedDate);
						}
						String ssn = XMLUtils.getChildNodeContent(afBoundDataElement, "SSN");
						if (StringUtils.isNotBlank(ssn)) {
							outputJson.addProperty("ssn", ssn);
						}
						String unit = XMLUtils.getChildNodeContent(afBoundDataElement, "Unit");
						if (StringUtils.isNotBlank(unit)) {
							outputJson.addProperty("unit", unit);
						}
						String empUserId = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpUserId");
						if (StringUtils.isNotBlank(empUserId)) {
							outputJson.addProperty("empUserId", empUserId);
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

			outputJson.addProperty("workflowStartTime", workflowStartTime);
			outputJson.addProperty("stepStartTime", stepStartTime);
			outputJson.addProperty("stepName", wItem.getNode().getTitle());
			outputJson.addProperty("stepInitiator", initiatedBy);
			outputJson.addProperty("stepAssignee", currentAssignee);
			outputJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			outputJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			outputJson.addProperty("witemId", wItem.getId());
			return outputJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSTD682OTDistributedTimesheetReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		log.info("Pushpa Impl Class");
		try {
			JsonObject outputJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = StringUtils.EMPTY;
			outputJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String scoPositionNumber = XMLUtils.getChildNodeContent(afBoundDataElement, "position_number");
						if (StringUtils.isNotBlank(scoPositionNumber)) {
							outputJson.addProperty("scoPositionNumber", scoPositionNumber);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "pay_period_month");
						if (StringUtils.isNotBlank(month)) {
							outputJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "pay_period_year");
						if (StringUtils.isNotBlank(year)) {
							outputJson.addProperty("year", year);
						}
						String empId = XMLUtils.getChildNodeContent(afBoundDataElement, "empl_Id");
						if (StringUtils.isNotBlank(empId)) {
							outputJson.addProperty("empId", empId);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsId");
						if (StringUtils.isNotBlank(chrsId)) {
							outputJson.addProperty("chrsId", chrsId);
						}
						String firstName = XMLUtils.getChildNodeContent(afBoundDataElement, "employee_first_name");
						if (StringUtils.isNotBlank(firstName)) {
							outputJson.addProperty("firstName", firstName);
						}
						String lastName = XMLUtils.getChildNodeContent(afBoundDataElement, "employee_last_name");
						if (StringUtils.isNotBlank(lastName)) {
							outputJson.addProperty("lastName", lastName);
						}
						String unit = XMLUtils.getChildNodeContent(afBoundDataElement, "organization_unit");
						if (StringUtils.isNotBlank(unit)) {
							outputJson.addProperty("unit", unit);
						}
						String empUserId = XMLUtils.getChildNodeContent(afBoundDataElement, "hidden_userID");
						if (StringUtils.isNotBlank(empUserId)) {
							outputJson.addProperty("empUserId", empUserId);
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

			outputJson.addProperty("workflowStartTime", workflowStartTime);
			outputJson.addProperty("stepStartTime", stepStartTime);
			outputJson.addProperty("stepName", wItem.getNode().getTitle());
			outputJson.addProperty("stepInitiator", initiatedBy);
			outputJson.addProperty("stepAssignee", currentAssignee);
			outputJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			outputJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			outputJson.addProperty("witemId", wItem.getId());
			log.info("Pushpa outputJson="+outputJson.size());
			return outputJson;
			
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStudentTimesheetReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject outputJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = StringUtils.EMPTY;
			outputJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "CmsDept");
						if (StringUtils.isNotBlank(deptId)) {
							outputJson.addProperty("deptId", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "Month");
						if (StringUtils.isNotBlank(month)) {
							outputJson.addProperty("month", CSUFUtils.getMonthOfYear(Integer.parseInt(month)));
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "Year");
						if (StringUtils.isNotBlank(year)) {
							outputJson.addProperty("year", year);
						}
						String empId = XMLUtils.getChildNodeContent(afBoundDataElement, "EmployeeId");
						if (StringUtils.isNotBlank(empId)) {
							outputJson.addProperty("empId", empId);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							outputJson.addProperty("chrsId", chrsId);
						}
						String firstName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(firstName)) {
							outputJson.addProperty("firstName", firstName);
						}
						String lastName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lastName)) {
							outputJson.addProperty("lastName", lastName);
						}
						String unit = XMLUtils.getChildNodeContent(afBoundDataElement, "Unit");
						if (StringUtils.isNotBlank(unit)) {
							outputJson.addProperty("unit", unit);
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

			outputJson.addProperty("workflowStartTime", workflowStartTime);
			outputJson.addProperty("stepStartTime", stepStartTime);
			outputJson.addProperty("stepName", wItem.getNode().getTitle());
			outputJson.addProperty("stepInitiator", initiatedBy);
			outputJson.addProperty("stepAssignee", currentAssignee);
			outputJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			outputJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			outputJson.addProperty("witemId", wItem.getId());
			return outputJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSCWReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject json = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			json.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String caseId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(caseId)) {
							json.addProperty("caseId", caseId);
						}
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentID");
						if (StringUtils.isNotBlank(cwid)) {
							json.addProperty("cwid", cwid);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							json.addProperty("lName", lName);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							json.addProperty("fName", fName);
						}
						String allCourseStatus = XMLUtils.getChildNodeContent(afBoundDataElement,
								"AllCourseWithdrawStatus");
						if (StringUtils.isNotBlank(allCourseStatus)) {
							json.addProperty("isTermWithdrawal", allCourseStatus);
						}
						if (XMLUtils.getChildNodeContent(afBoundDataElement, "stepRef").equals("ToMedical") || XMLUtils
								.getChildNodeContent(afBoundDataElement, "stepRef").equals("ToMedicalARSC")) {
							json.addProperty("isMedical", "Yes");
							String courseNumberList = XMLUtils.getChildNodeContent(afBoundDataElement,
									"CourseNumberList");
							if (StringUtils.isNotBlank(courseNumberList)) {
								json.addProperty("courseNo", courseNumberList);
							}
						} else {
							NodeList nList = afBoundDataElement.getChildNodes();
							for (int temp = 0; temp < nList.getLength(); temp++) {
								org.w3c.dom.Node nNode = nList.item(temp);
								if (nNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {
									Element eElement = (Element) nNode;
									for (int i = 0; i < eElement.getElementsByTagName("CourseRow").getLength(); i++) {
										for (int j = 0; j < eElement.getElementsByTagName("CourseRow").item(i)
												.getChildNodes().getLength(); j++) {
											if (eElement.getElementsByTagName("CourseRow").item(i).getChildNodes()
													.item(j).getNodeName().equals("CourseNo")) {
												String course = eElement.getElementsByTagName("CourseRow").item(i)
														.getChildNodes().item(j).getTextContent();
												json.addProperty("courseNo", course);
												break;
											}
										}
									}
								}
							}
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

			json.addProperty("workflowStartTime", workflowStartTime);
			json.addProperty("stepStartTime", stepStartTime);
			json.addProperty("stepName", wItem.getNode().getTitle());
			json.addProperty("stepInitiator", initiatedBy);
			json.addProperty("stepAssignee", currentAssignee);
			json.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			json.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			json.addProperty("witemId", wItem.getId());

			return json;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getAppealsInboxReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject appealsJson = new JsonObject();
			log.debug("Start of appeals report= {}", appealsJson);
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			String appealReason = "";
			String studentType = "";
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

						String appealReason1 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason1");
						String appealReason2 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason2");
						if (appealReason1.equals("1")) {
							appealReason = "Admission Decision - A-G College Prep Course";
						}
						if (appealReason2.equals("1")) {
							appealReason = "Admission Decision - Golden 4 Course Requirement";
						}
						String appealReason3 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason3");
						if (appealReason3.equals("1")) {
							appealReason = "Admission Decision - Cumulative GPA";
						}
						String appealReason4 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason4");
						if (appealReason4.equals("1")) {
							appealReason = "Admission Decision - Less than 60 Semester/90 Quarter Transferable Units";
						}
						String appealReason9 = XMLUtils.getChildNodeContent(afBoundDataElement,
								"OtherAdmissionReasonCB");
						if (appealReason9.equals("1")) {
							String reason = XMLUtils.getChildNodeContent(afBoundDataElement, "OtherAdmissionReason");
							appealReason = "Admission Decision - Other : " + reason;
						}
						String appealReason10 = XMLUtils.getChildNodeContent(afBoundDataElement,
								"ReconsiderationReqCB");
						if (appealReason10.equals("1")) {
							appealReason = "Admission Decision - Reconsideration Request";
						}
						String appealReason5 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason5");
						if (appealReason5.equals("1")) {
							appealReason = "Missed Deadline - Missed Initial Transcript Deadline";
						}
						String appealReason6 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason6");
						if (appealReason6.equals("1")) {
							appealReason = "Missed Deadline - Missed Enrollment Deposit Deadline";
						}
						String appealReason7 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason7");
						if (appealReason7.equals("1")) {
							appealReason = "Missed Deadline - Missed Final Transcript Deadline";
						}
						String appealReason8 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealReason8");
						if (appealReason8.equals("1")) {
							String reason = XMLUtils.getChildNodeContent(afBoundDataElement, "OtherReason");
							appealReason = "Missed Deadline - Other : " + reason;
						}

						if (StringUtils.isNotBlank(appealReason)) {
							appealsJson.addProperty("appealReason", appealReason);
						}

						/*
						 * String reasonVal = XMLUtils.getChildNodeContent(afBoundDataElement,
						 * "Reason"); if (StringUtils.isNotBlank(reasonVal)) {
						 * appealsJson.addProperty("reason", reasonVal); }
						 */

						String studentType1 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealCB1");
						String studentType2 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealCB3");
						if (studentType1.equals("1")) {
							studentType = "FIRST-TIME-FRESHMEN";
						}
						if (studentType2.equals("1")) {
							studentType = "TRANSFER STUDENT";
						}
						String studentType3 = XMLUtils.getChildNodeContent(afBoundDataElement, "AppealCB2");
						if (studentType3.equals("1")) {
							studentType = "RETURNING STUDENT";
						}
						if (StringUtils.isNotBlank(studentType)) {
							appealsJson.addProperty("studentType", studentType);
						}
					}
				}
			}

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			appealsJson.add("workflowStartTime", startTimeJson);
			appealsJson.add("stepStartTime", stepStartTimeJson);
			appealsJson.addProperty("stepName", wItem.getNode().getTitle());
			appealsJson.addProperty("stepInitiator", initiatedBy);
			appealsJson.addProperty("stepAssignee", currentAssignee);
			appealsJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			appealsJson.addProperty("witemId", wItem.getId());
			appealsJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			log.debug("Json = {}", appealsJson);
			return appealsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

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
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);

			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}

			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);

			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}

			majorMinorChangeJson.addProperty("workflowStartTime", workflowStartTime);
			majorMinorChangeJson.addProperty("stepStartTime", stepStartTime);
			majorMinorChangeJson.addProperty("stepName", wItem.getNode().getTitle());
			majorMinorChangeJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			majorMinorChangeJson.addProperty("stepAssignee", currentAssignee);
			majorMinorChangeJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			majorMinorChangeJson.addProperty("witemId", wItem.getId());
			majorMinorChangeJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return majorMinorChangeJson;
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

			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}

			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);

			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}

			gradeChangeJson.addProperty("workflowStartTime", workflowStartTime);
			gradeChangeJson.addProperty("stepStartTime", stepStartTime);
			gradeChangeJson.addProperty("stepName", wItem.getNode().getTitle());
			gradeChangeJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			gradeChangeJson.addProperty("stepAssignee", currentAssignee);
			gradeChangeJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			gradeChangeJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			gradeChangeJson.addProperty("witemId", wItem.getId());
			return gradeChangeJson;
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
			lateAddsChangeJson.addProperty("sNo", count);

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
			lateAddsChangeJson.addProperty("witemId", wItem.getId());
			return lateAddsChangeJson;
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
			appealsJson.addProperty("witemId", wItem.getId());
			return appealsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFAERReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject faerJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			faerJson.addProperty("sNo", count);

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
							faerJson.addProperty("cwid", cwid);
						}
						String chrsID = XMLUtils.getChildNodeContent(afBoundDataElement, "chrsID");
                        if (StringUtils.isNotBlank(chrsID)) {
                                faerJson.addProperty("chrsID", chrsID);
                        }
						String name = XMLUtils.getChildNodeContent(afBoundDataElement, "Name");
						if (StringUtils.isNotBlank(name)) {
							faerJson.addProperty("name", name);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							faerJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptName");
						if (StringUtils.isNotBlank(deptName)) {
							faerJson.addProperty("deptName", deptName);
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
			faerJson.addProperty("workflowStartTime", workflowStartTime);
			faerJson.addProperty("stepStartTime", stepStartTime);
			faerJson.addProperty("stepName", wItem.getNode().getTitle());
			faerJson.addProperty("stepInitiator", initiatedBy);
			faerJson.addProperty("stepAssignee", currentAssignee);
			faerJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			faerJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			faerJson.addProperty("witemId", wItem.getId());
			return faerJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPetitionReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject petitionJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			petitionJson.addProperty("sNo", count);

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
							petitionJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FName");
						if (StringUtils.isNotBlank(fName)) {
							petitionJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							petitionJson.addProperty("lName", lName);
						}
						/*
						 * String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						 * if (StringUtils.isNotBlank(deptId)) { petitionJson.addProperty("deptId",
						 * deptId); } String deptName = XMLUtils.getChildNodeContent(afBoundDataElement,
						 * "DeptName"); if (StringUtils.isNotBlank(deptName)) {
						 * petitionJson.addProperty("deptName", deptName); }
						 */
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
			petitionJson.addProperty("workflowStartTime", workflowStartTime);
			petitionJson.addProperty("stepStartTime", stepStartTime);
			petitionJson.addProperty("stepName", wItem.getNode().getTitle());
			petitionJson.addProperty("stepInitiator", initiatedBy);
			petitionJson.addProperty("stepAssignee", currentAssignee);
			petitionJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			petitionJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			petitionJson.addProperty("witemId", wItem.getId());
			return petitionJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getMPPJustificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject mppJustificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			mppJustificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "hidden_initiator_cwid");
						if (StringUtils.isNotBlank(cwid)) {
							mppJustificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "hidden_initiator_firstName");
						if (StringUtils.isNotBlank(fName)) {
							mppJustificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "hidden_initiator_lastName");
						if (StringUtils.isNotBlank(lName)) {
							mppJustificationJson.addProperty("lName", lName);
						}
						String cmsPositionNumber = XMLUtils.getChildNodeContent(afBoundDataElement, "cms_position");
						if (StringUtils.isNotBlank(cmsPositionNumber)) {
							mppJustificationJson.addProperty("cmsPositionNumber", cmsPositionNumber);
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
			mppJustificationJson.addProperty("workflowStartTime", workflowStartTime);
			mppJustificationJson.addProperty("stepStartTime", stepStartTime);
			mppJustificationJson.addProperty("stepName", wItem.getNode().getTitle());
			mppJustificationJson.addProperty("stepInitiator", initiatedBy);
			mppJustificationJson.addProperty("stepAssignee", currentAssignee);
			mppJustificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			mppJustificationJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			mppJustificationJson.addProperty("witemId", wItem.getId());
			return mppJustificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFARReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject farJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			farJson.addProperty("sNo", count);

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
							farJson.addProperty("cwid", cwid);
						}
						String chrsid = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsid)) {
							farJson.addProperty("chrsid", chrsid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							farJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							farJson.addProperty("lName", lName);
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
			farJson.addProperty("workflowStartTime", workflowStartTime);
			farJson.addProperty("stepStartTime", stepStartTime);
			farJson.addProperty("stepName", wItem.getNode().getTitle());
			farJson.addProperty("stepInitiator", initiatedBy);
			farJson.addProperty("stepAssignee", currentAssignee);
			farJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			farJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			farJson.addProperty("witemId", wItem.getId());
			return farJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTelecommutingReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject farJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			farJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplId");
						if (StringUtils.isNotBlank(cwid)) {
							farJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpFirstName");
						if (StringUtils.isNotBlank(fname)) {
							farJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "EmpLastName");
						if (StringUtils.isNotBlank(lname)) {
							farJson.addProperty("lname", lname);
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
			farJson.addProperty("workflowStartTime", workflowStartTime);
			farJson.addProperty("stepStartTime", stepStartTime);
			farJson.addProperty("stepName", wItem.getNode().getTitle());
			farJson.addProperty("stepInitiator", initiatedBy);
			farJson.addProperty("stepAssignee", currentAssignee);
			farJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			farJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			farJson.addProperty("witemId", wItem.getId());
			return farJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getfinanceAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject farJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			farJson.addProperty("sNo", count);

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
							farJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							farJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							farJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							farJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptName");
						if (StringUtils.isNotBlank(deptName)) {
							farJson.addProperty("deptName", deptName);
						}
						String division = XMLUtils.getChildNodeContent(afBoundDataElement, "Divison");
						if (StringUtils.isNotBlank(division)) {
							farJson.addProperty("division", division);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseId");
						if (StringUtils.isNotBlank(formId)) {
							farJson.addProperty("formId", formId);
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
			farJson.addProperty("workflowStartTime", workflowStartTime);
			farJson.addProperty("stepStartTime", stepStartTime);
			farJson.addProperty("stepName", wItem.getNode().getTitle());
			farJson.addProperty("stepInitiator", initiatedBy);
			farJson.addProperty("stepAssignee", currentAssignee);
			farJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			farJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			farJson.addProperty("witemId", wItem.getId());
			return farJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDOAfinanceAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject finDOAJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			finDOAJson.addProperty("sNo", count);

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
							finDOAJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							finDOAJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							finDOAJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							finDOAJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptName");
						if (StringUtils.isNotBlank(deptName)) {
							finDOAJson.addProperty("deptName", deptName);
						}
						String division = XMLUtils.getChildNodeContent(afBoundDataElement, "Divison");
						if (StringUtils.isNotBlank(division)) {
							finDOAJson.addProperty("division", division);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseID");
						if (StringUtils.isNotBlank(formId)) {
							finDOAJson.addProperty("formId", formId);
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
			finDOAJson.addProperty("workflowStartTime", workflowStartTime);
			finDOAJson.addProperty("stepStartTime", stepStartTime);
			finDOAJson.addProperty("stepName", wItem.getNode().getTitle());
			finDOAJson.addProperty("stepInitiator", initiatedBy);
			finDOAJson.addProperty("stepAssignee", currentAssignee);
			finDOAJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			finDOAJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			finDOAJson.addProperty("witemId", wItem.getId());
			return finDOAJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCampusSolAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject campusSolJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			campusSolJson.addProperty("sNo", count);

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
							campusSolJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							campusSolJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							campusSolJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							campusSolJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptName");
						if (StringUtils.isNotBlank(deptName)) {
							campusSolJson.addProperty("deptName", deptName);
						}
						String division = XMLUtils.getChildNodeContent(afBoundDataElement, "Divison");
						if (StringUtils.isNotBlank(division)) {
							campusSolJson.addProperty("division", division);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseID");
						if (StringUtils.isNotBlank(formId)) {
							campusSolJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			campusSolJson.add("workflowStartTime", startTimeJson);
			campusSolJson.add("stepStartTime", stepStartTimeJson);
			campusSolJson.addProperty("stepName", wItem.getNode().getTitle());
			campusSolJson.addProperty("stepInitiator", initiatedBy);
			campusSolJson.addProperty("stepAssignee", currentAssignee);
			campusSolJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			campusSolJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			campusSolJson.addProperty("witemId", wItem.getId());
			return campusSolJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPRTBReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject prtbJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			prtbJson.addProperty("sNo", count);

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
							prtbJson.addProperty("cwid", cwid);
						}
						String CHRSID = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(CHRSID)) {
							prtbJson.addProperty("CHRSID", CHRSID);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							prtbJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							prtbJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							prtbJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "Department");
						if (StringUtils.isNotBlank(deptName)) {
							prtbJson.addProperty("deptName", deptName);
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
			prtbJson.addProperty("workflowStartTime", workflowStartTime);
			prtbJson.addProperty("stepStartTime", stepStartTime);
			prtbJson.addProperty("stepName", wItem.getNode().getTitle());
			prtbJson.addProperty("stepInitiator", initiatedBy);
			prtbJson.addProperty("stepAssignee", currentAssignee);
			prtbJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			prtbJson.addProperty("witemId", wItem.getId());
			prtbJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return prtbJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getHRAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject hrJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			hrJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmployeeID");
						if (StringUtils.isNotBlank(cwid)) {
							hrJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							hrJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							hrJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentID");
						if (StringUtils.isNotBlank(deptId)) {
							hrJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentName");
						if (StringUtils.isNotBlank(deptName)) {
							hrJson.addProperty("deptName", deptName);
						}
						String division = XMLUtils.getChildNodeContent(afBoundDataElement, "Division");
						if (StringUtils.isNotBlank(division)) {
							hrJson.addProperty("division", division);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseID");
						if (StringUtils.isNotBlank(formId)) {
							hrJson.addProperty("formId", formId);
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
			hrJson.addProperty("workflowStartTime", workflowStartTime);
			hrJson.addProperty("stepStartTime", stepStartTime);
			hrJson.addProperty("stepName", wItem.getNode().getTitle());
			hrJson.addProperty("stepInitiator", initiatedBy);
			hrJson.addProperty("stepAssignee", currentAssignee);
			hrJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			hrJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			hrJson.addProperty("witemId", wItem.getId());
			return hrJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getExcessUnitsReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject excessUnitsJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			excessUnitsJson.addProperty("sNo", count);

			String workflowTitle = wItem.getWorkflow().getWorkflowModel().getTitle();

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

						if (workflowTitle.equals("Request for Excess Units - Graduate")) {
							String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "grad_CWID");
							if (StringUtils.isNotBlank(cwid)) {
								excessUnitsJson.addProperty("cwid", cwid);
							}
							String fname = XMLUtils.getChildNodeContent(afBoundDataElement,
									"hidden_initiator_firstName");
							if (StringUtils.isNotBlank(fname)) {
								excessUnitsJson.addProperty("fname", fname);
							}
							String lname = XMLUtils.getChildNodeContent(afBoundDataElement,
									"hidden_initiator_lastName");
							if (StringUtils.isNotBlank(lname)) {
								excessUnitsJson.addProperty("lname", lname);
							}
							String semesterVal = XMLUtils.getChildNodeContent(afBoundDataElement, "spring_semester");
							String semester = "";
							if (semesterVal.equals("1")) {
								semester = "Spring";
							}
							String yearVal = XMLUtils.getChildNodeContent(afBoundDataElement, "semesterYear");
							String year = "20".concat(yearVal);
							String termDescription = semester.concat(" ").concat(year);
							if (StringUtils.isNotBlank(termDescription)) {
								excessUnitsJson.addProperty("Term", termDescription);
							}

						} else if (workflowTitle.equals("Request for Excess Units - UnderGraduate")) {
							String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CWID");
							if (StringUtils.isNotBlank(cwid)) {
								excessUnitsJson.addProperty("cwid", cwid);
							}
							String fname = XMLUtils.getChildNodeContent(afBoundDataElement,
									"hidden_initiator_firstName");
							if (StringUtils.isNotBlank(fname)) {
								excessUnitsJson.addProperty("fname", fname);
							}
							String lname = XMLUtils.getChildNodeContent(afBoundDataElement,
									"hidden_initiator_lastName");
							if (StringUtils.isNotBlank(lname)) {
								excessUnitsJson.addProperty("lname", lname);
							}
							String semester = XMLUtils.getChildNodeContent(afBoundDataElement, "underGradTerm");
							String yearVal = XMLUtils.getChildNodeContent(afBoundDataElement, "underGradYear");
							String year = "20".concat(yearVal);
							String termDescription = semester.concat(" ").concat(year);
							if (StringUtils.isNotBlank(termDescription)) {
								excessUnitsJson.addProperty("Term", termDescription);
							}
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
			excessUnitsJson.addProperty("workflowStartTime", workflowStartTime);
			excessUnitsJson.addProperty("stepStartTime", stepStartTime);
			excessUnitsJson.addProperty("stepName", wItem.getNode().getTitle());
			excessUnitsJson.addProperty("stepInitiator", initiatedBy);
			excessUnitsJson.addProperty("stepAssignee", currentAssignee);
			excessUnitsJson.addProperty("witemId", wItem.getId());
			excessUnitsJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return excessUnitsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFERPReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject ferpJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			ferpJson.addProperty("sNo", count);

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
							ferpJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FacultyFirstName");
						if (StringUtils.isNotBlank(fname)) {
							ferpJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "FacultyLastName");
						if (StringUtils.isNotBlank(lname)) {
							ferpJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptId");
						if (StringUtils.isNotBlank(deptId)) {
							ferpJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "Department");
						if (StringUtils.isNotBlank(deptName)) {
							ferpJson.addProperty("deptName", deptName);
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
			ferpJson.addProperty("workflowStartTime", workflowStartTime);
			ferpJson.addProperty("stepStartTime", stepStartTime);
			ferpJson.addProperty("stepName", wItem.getNode().getTitle());
			ferpJson.addProperty("stepInitiator", initiatedBy);
			ferpJson.addProperty("stepAssignee", currentAssignee);
			ferpJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			ferpJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			ferpJson.addProperty("witemId", wItem.getId());
			return ferpJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSFSDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject sfsdJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			sfsdJson.addProperty("sNo", count);

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
							sfsdJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							sfsdJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							sfsdJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptId");
						if (StringUtils.isNotBlank(deptId)) {
							sfsdJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "Department");
						if (StringUtils.isNotBlank(deptName)) {
							sfsdJson.addProperty("deptName", deptName);
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
			sfsdJson.addProperty("workflowStartTime", workflowStartTime);
			sfsdJson.addProperty("stepStartTime", stepStartTime);
			sfsdJson.addProperty("stepName", wItem.getNode().getTitle());
			sfsdJson.addProperty("stepInitiator", initiatedBy);
			sfsdJson.addProperty("stepAssignee", currentAssignee);
			sfsdJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			sfsdJson.addProperty("witemId", wItem.getId());
			sfsdJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return sfsdJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSFTSReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject sftsJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			sftsJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplId");
						if (StringUtils.isNotBlank(cwid)) {
							sftsJson.addProperty("cwid", cwid);
						}
						String chrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "CHRSID");
						if (StringUtils.isNotBlank(chrsId)) {
							sftsJson.addProperty("chrsId", chrsId);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							sftsJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							sftsJson.addProperty("lname", lname);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptId");
						if (StringUtils.isNotBlank(deptId)) {
							sftsJson.addProperty("deptId", deptId);
						}
						/*
						 * String deptName = XMLUtils.getChildNodeContent(afBoundDataElement,
						 * "Department"); if (StringUtils.isNotBlank(deptName)) {
						 * sfstJson.addProperty("deptName", deptName); }
						 */
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
			sftsJson.addProperty("workflowStartTime", workflowStartTime);
			sftsJson.addProperty("stepStartTime", stepStartTime);
			sftsJson.addProperty("stepName", wItem.getNode().getTitle());
			sftsJson.addProperty("stepInitiator", initiatedBy);
			sftsJson.addProperty("stepAssignee", currentAssignee);
			sftsJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			sftsJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			sftsJson.addProperty("witemId", wItem.getId());
			return sftsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTASubTSReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject tasubtsJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			tasubtsJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplId");
						if (StringUtils.isNotBlank(cwid)) {
							tasubtsJson.addProperty("cwid", cwid);
						}
						String ChrsId = XMLUtils.getChildNodeContent(afBoundDataElement, "ChrsId");
						if (StringUtils.isNotBlank(ChrsId)) {
							tasubtsJson.addProperty("ChrsId", ChrsId);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							tasubtsJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							tasubtsJson.addProperty("lname", lname);
						}
						String minitial = XMLUtils.getChildNodeContent(afBoundDataElement, "MiddleInitial");
						if (StringUtils.isNotBlank(minitial)) {
							tasubtsJson.addProperty("minitial", minitial);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptId");
						if (StringUtils.isNotBlank(deptId)) {
							tasubtsJson.addProperty("deptId", deptId);
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
			tasubtsJson.addProperty("workflowStartTime", workflowStartTime);
			tasubtsJson.addProperty("stepStartTime", stepStartTime);
			tasubtsJson.addProperty("stepName", wItem.getNode().getTitle());
			tasubtsJson.addProperty("stepInitiator", initiatedBy);
			tasubtsJson.addProperty("stepAssignee", currentAssignee);
			tasubtsJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			tasubtsJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			tasubtsJson.addProperty("witemId", wItem.getId());
			return tasubtsJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTASubAFReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject tasubafJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			tasubafJson.addProperty("sNo", count);

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
							tasubafJson.addProperty("cwid", cwid);
						}
						String fname = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fname)) {
							tasubafJson.addProperty("fname", fname);
						}
						String lname = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lname)) {
							tasubafJson.addProperty("lname", lname);
						}

						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							tasubafJson.addProperty("deptId", deptId);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptName");
						if (StringUtils.isNotBlank(deptName)) {
							tasubafJson.addProperty("deptName", deptName);
						}
						String division = XMLUtils.getChildNodeContent(afBoundDataElement, "Division");
						if (StringUtils.isNotBlank(division)) {
							tasubafJson.addProperty("division", division);
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
			tasubafJson.addProperty("workflowStartTime", workflowStartTime);
			tasubafJson.addProperty("stepStartTime", stepStartTime);
			tasubafJson.addProperty("stepName", wItem.getNode().getTitle());
			tasubafJson.addProperty("stepInitiator", initiatedBy);
			tasubafJson.addProperty("stepAssignee", currentAssignee);
			tasubafJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			tasubafJson.addProperty("witemId", wItem.getId());
			tasubafJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return tasubafJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getChairDirectorAFReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject cdafJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			cdafJson.addProperty("sNo", count);

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
						String college = XMLUtils.getChildNodeContent(afBoundDataElement, "college");
						if (StringUtils.isNotBlank(college)) {
							cdafJson.addProperty("college", college);
						}
						String deptName = XMLUtils.getChildNodeContent(afBoundDataElement, "department");
						if (StringUtils.isNotBlank(deptName)) {
							cdafJson.addProperty("deptName", deptName);
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
			cdafJson.addProperty("workflowStartTime", workflowStartTime);
			cdafJson.addProperty("stepStartTime", stepStartTime);
			cdafJson.addProperty("stepName", wItem.getNode().getTitle());
			cdafJson.addProperty("stepInitiator", initiatedBy);
			cdafJson.addProperty("stepAssignee", currentAssignee);
			cdafJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			cdafJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			cdafJson.addProperty("witemId", wItem.getId());
			return cdafJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCBEDeclarationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject cbeDeclarationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			cbeDeclarationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							cbeDeclarationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FName");
						if (StringUtils.isNotBlank(fName)) {
							cbeDeclarationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LName");
						if (StringUtils.isNotBlank(lName)) {
							cbeDeclarationJson.addProperty("lName", lName);
						}
						String admitTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "AdmitTerm");
						if (StringUtils.isNotBlank(admitTerm)) {
							cbeDeclarationJson.addProperty("term", admitTerm);
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
			cbeDeclarationJson.addProperty("workflowStartTime", workflowStartTime);
			cbeDeclarationJson.addProperty("stepStartTime", stepStartTime);
			cbeDeclarationJson.addProperty("stepName", wItem.getNode().getTitle());
			cbeDeclarationJson.addProperty("stepInitiator", initiatedBy);
			cbeDeclarationJson.addProperty("stepAssignee", currentAssignee);
			cbeDeclarationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			cbeDeclarationJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			cbeDeclarationJson.addProperty("witemId", wItem.getId());
			return cbeDeclarationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTaxFilingReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject parentTaxFilingJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentTaxFilingJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentTaxFilingJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							parentTaxFilingJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							parentTaxFilingJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							parentTaxFilingJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentTaxFilingJson.add("workflowStartTime", startTimeJson);
			parentTaxFilingJson.add("stepStartTime", stepStartTimeJson);
			// parentTaxFilingJson.addProperty("workflowStartTime", workflowStartTime);
			// parentTaxFilingJson.addProperty("stepStartTime", stepStartTime);
			parentTaxFilingJson.addProperty("stepName", wItem.getNode().getTitle());
			parentTaxFilingJson.addProperty("stepInitiator", initiatedBy);
			parentTaxFilingJson.addProperty("stepAssignee", currentAssignee);
			parentTaxFilingJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			parentTaxFilingJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			parentTaxFilingJson.addProperty("witemId", wItem.getId());
			return parentTaxFilingJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFamilySizeCertificateReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject familySizeCertificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			familySizeCertificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							familySizeCertificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							familySizeCertificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							familySizeCertificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							familySizeCertificationJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			familySizeCertificationJson.add("workflowStartTime", startTimeJson);
			familySizeCertificationJson.add("stepStartTime", stepStartTimeJson);
			// familySizeCertificationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// familySizeCertificationJson.addProperty("stepStartTime", stepStartTime);
			familySizeCertificationJson.addProperty("stepName", wItem.getNode().getTitle());
			familySizeCertificationJson.addProperty("stepInitiator", initiatedBy);
			familySizeCertificationJson.addProperty("stepAssignee", currentAssignee);
			familySizeCertificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			familySizeCertificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			familySizeCertificationJson.addProperty("witemId", wItem.getId());
			return familySizeCertificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPilotScheduleReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject pilotJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			pilotJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Cwid");
						if (StringUtils.isNotBlank(cwid)) {
							pilotJson.addProperty("cwid", cwid);
						}
						String emplID = XMLUtils.getChildNodeContent(afBoundDataElement, "EmplId");
						if (StringUtils.isNotBlank(emplID)) {
							pilotJson.addProperty("emplid", emplID);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "EmployeeFirstName");
						if (StringUtils.isNotBlank(fName)) {
							pilotJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "EmployeeLastName");
						if (StringUtils.isNotBlank(lName)) {
							pilotJson.addProperty("lName", lName);
						}
						String divName = XMLUtils.getChildNodeContent(afBoundDataElement, "EmployeeDivisionName");
						if (StringUtils.isNotBlank(divName)) {
							pilotJson.addProperty("divName", divName);
						}
						String divId = XMLUtils.getChildNodeContent(afBoundDataElement, "EmployeeDivisionId");
						if (StringUtils.isNotBlank(divId)) {
							pilotJson.addProperty("divId", divId);
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
			pilotJson.addProperty("workflowStartTime", workflowStartTime);
			pilotJson.addProperty("stepStartTime", stepStartTime);
			pilotJson.addProperty("stepName", wItem.getNode().getTitle());
			pilotJson.addProperty("stepInitiator", initiatedBy);
			pilotJson.addProperty("stepAssignee", currentAssignee);
			pilotJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			pilotJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			pilotJson.addProperty("witemId", wItem.getId());
			return pilotJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPETReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject petJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			petJson.addProperty("sNo", count);

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
						String case_ID = XMLUtils.getChildNodeContent(afBoundDataElement, "Case_ID");
						if (StringUtils.isNotBlank(case_ID)) {
							petJson.addProperty("Case_ID", case_ID);
						}
						String fiscal_Yr = XMLUtils.getChildNodeContent(afBoundDataElement, "FISCALYR");
						if (StringUtils.isNotBlank(fiscal_Yr)) {
							petJson.addProperty("FISCALYR", fiscal_Yr);
						}
						String row_Count = XMLUtils.getChildNodeContent(afBoundDataElement, "FinalRowCount");
						if (StringUtils.isNotBlank(row_Count)) {
							petJson.addProperty("Row_Count", row_Count);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", workflowStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			//petJson.addProperty("workflowStartTime", workflowStartTime);
			//petJson.addProperty("stepStartTime", stepStartTime);
			petJson.add("workflowStartTime", startTimeJson);
			petJson.add("stepStartTime", stepStartTimeJson);
			petJson.addProperty("stepName", wItem.getNode().getTitle());
			petJson.addProperty("stepInitiator", initiatedBy);
			petJson.addProperty("stepAssignee", currentAssignee);
			petJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			petJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			petJson.addProperty("witemId", wItem.getId());
			return petJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSDVReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count) {
		try {
			JsonObject sdvJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			sdvJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							sdvJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							sdvJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							sdvJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							sdvJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			sdvJson.add("workflowStartTime", startTimeJson);
			sdvJson.add("stepStartTime", stepStartTimeJson);
			// sdvJson.addProperty("workflowStartTime", workflowStartTime);
			// sdvJson.addProperty("stepStartTime", stepStartTime);
			sdvJson.addProperty("stepName", wItem.getNode().getTitle());
			sdvJson.addProperty("stepInitiator", initiatedBy);
			sdvJson.addProperty("stepAssignee", currentAssignee);
			sdvJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			sdvJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			sdvJson.addProperty("witemId", wItem.getId());
			return sdvJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCitizenshipVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject citizenshipVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			citizenshipVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							citizenshipVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							citizenshipVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							citizenshipVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							citizenshipVerificationJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			// citizenshipVerificationJson.addProperty("workflowStartTime",workflowStartTime);
			// citizenshipVerificationJson.addProperty("stepStartTime", stepStartTime);
			citizenshipVerificationJson.add("workflowStartTime", startTimeJson);
			citizenshipVerificationJson.add("stepStartTime", stepStartTimeJson);
			citizenshipVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			citizenshipVerificationJson.addProperty("stepInitiator", initiatedBy);
			citizenshipVerificationJson.addProperty("stepAssignee", currentAssignee);
			citizenshipVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			citizenshipVerificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			citizenshipVerificationJson.addProperty("witemId", wItem.getId());
			return citizenshipVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTEACHGrantRequirementCertReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject teachGrantRequirementCertJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			teachGrantRequirementCertJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							teachGrantRequirementCertJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							teachGrantRequirementCertJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							teachGrantRequirementCertJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							teachGrantRequirementCertJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			teachGrantRequirementCertJson.add("workflowStartTime", startTimeJson);
			teachGrantRequirementCertJson.add("stepStartTime", stepStartTimeJson);
			// teachGrantRequirementCertJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// teachGrantRequirementCertJson.addProperty("stepStartTime", stepStartTime);
			teachGrantRequirementCertJson.addProperty("stepName", wItem.getNode().getTitle());
			teachGrantRequirementCertJson.addProperty("stepInitiator", initiatedBy);
			teachGrantRequirementCertJson.addProperty("stepAssignee", currentAssignee);
			teachGrantRequirementCertJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			teachGrantRequirementCertJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			teachGrantRequirementCertJson.addProperty("witemId", wItem.getId());
			return teachGrantRequirementCertJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSummerLoanRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject summerLoanRequestJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			summerLoanRequestJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							summerLoanRequestJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							summerLoanRequestJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							summerLoanRequestJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							summerLoanRequestJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			summerLoanRequestJson.add("workflowStartTime", startTimeJson);
			summerLoanRequestJson.add("stepStartTime", stepStartTimeJson);
			// summerLoanRequestJson.addProperty("workflowStartTime", workflowStartTime);
			// summerLoanRequestJson.addProperty("stepStartTime", stepStartTime);
			summerLoanRequestJson.addProperty("stepName", wItem.getNode().getTitle());
			summerLoanRequestJson.addProperty("stepInitiator", initiatedBy);
			summerLoanRequestJson.addProperty("stepAssignee", currentAssignee);
			summerLoanRequestJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			summerLoanRequestJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			summerLoanRequestJson.addProperty("witemId", wItem.getId());
			return summerLoanRequestJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStudentNonFilerCertificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject studentNonFilerCertificationReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			studentNonFilerCertificationReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							studentNonFilerCertificationReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							studentNonFilerCertificationReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							studentNonFilerCertificationReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							studentNonFilerCertificationReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			studentNonFilerCertificationReportJson.add("workflowStartTime", startTimeJson);
			studentNonFilerCertificationReportJson.add("stepStartTime", stepStartTimeJson);
			// studentNonFilerCertificationReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// studentNonFilerCertificationReportJson.addProperty("stepStartTime",
			// stepStartTime);
			studentNonFilerCertificationReportJson.addProperty("stepName", wItem.getNode().getTitle());
			studentNonFilerCertificationReportJson.addProperty("stepInitiator", initiatedBy);
			studentNonFilerCertificationReportJson.addProperty("stepAssignee", currentAssignee);
			studentNonFilerCertificationReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			studentNonFilerCertificationReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			studentNonFilerCertificationReportJson.addProperty("witemId", wItem.getId());
			return studentNonFilerCertificationReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStudentProjectedYearIncomeAppealReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject studentProjectedYearIncomeAppealReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			studentProjectedYearIncomeAppealReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							studentProjectedYearIncomeAppealReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							studentProjectedYearIncomeAppealReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							studentProjectedYearIncomeAppealReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							studentProjectedYearIncomeAppealReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			studentProjectedYearIncomeAppealReportJson.add("workflowStartTime", startTimeJson);
			studentProjectedYearIncomeAppealReportJson.add("stepStartTime", stepStartTimeJson);
			// studentProjectedYearIncomeAppealReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// studentProjectedYearIncomeAppealReportJson.addProperty("stepStartTime",
			// stepStartTime);
			studentProjectedYearIncomeAppealReportJson.addProperty("stepName", wItem.getNode().getTitle());
			studentProjectedYearIncomeAppealReportJson.addProperty("stepInitiator", initiatedBy);
			studentProjectedYearIncomeAppealReportJson.addProperty("stepAssignee", currentAssignee);
			studentProjectedYearIncomeAppealReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			studentProjectedYearIncomeAppealReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			studentProjectedYearIncomeAppealReportJson.addProperty("witemId", wItem.getId());
			return studentProjectedYearIncomeAppealReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDependencyOverrideRenewalReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject dependencyOverrideRenewalReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			dependencyOverrideRenewalReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							dependencyOverrideRenewalReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							dependencyOverrideRenewalReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							dependencyOverrideRenewalReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							dependencyOverrideRenewalReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			dependencyOverrideRenewalReportJson.add("workflowStartTime", startTimeJson);
			dependencyOverrideRenewalReportJson.add("stepStartTime", stepStartTimeJson);
			// dependencyOverrideRenewalReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// dependencyOverrideRenewalReportJson.addProperty("stepStartTime",
			// stepStartTime);
			dependencyOverrideRenewalReportJson.addProperty("stepName", wItem.getNode().getTitle());
			dependencyOverrideRenewalReportJson.addProperty("stepInitiator", initiatedBy);
			dependencyOverrideRenewalReportJson.addProperty("stepAssignee", currentAssignee);
			dependencyOverrideRenewalReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			dependencyOverrideRenewalReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			dependencyOverrideRenewalReportJson.addProperty("witemId", wItem.getId());
			return dependencyOverrideRenewalReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	public JsonObject getParentVerificationofNonFilingLetterReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject parentVerificationofNonFilingLetterReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentVerificationofNonFilingLetterReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Cwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentVerificationofNonFilingLetterReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(fName)) {
							parentVerificationofNonFilingLetterReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(lName)) {
							parentVerificationofNonFilingLetterReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							parentVerificationofNonFilingLetterReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentVerificationofNonFilingLetterReportJson.add("workflowStartTime", startTimeJson);
			parentVerificationofNonFilingLetterReportJson.add("stepStartTime", stepStartTimeJson);
			// parentVerificationofNonFilingLetterReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// parentVerificationofNonFilingLetterReportJson.addProperty("stepStartTime",
			// stepStartTime);
			parentVerificationofNonFilingLetterReportJson.addProperty("stepName", wItem.getNode().getTitle());
			parentVerificationofNonFilingLetterReportJson.addProperty("stepInitiator", initiatedBy);
			parentVerificationofNonFilingLetterReportJson.addProperty("stepAssignee", currentAssignee);
			parentVerificationofNonFilingLetterReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			parentVerificationofNonFilingLetterReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			parentVerificationofNonFilingLetterReportJson.addProperty("witemId", wItem.getId());
			return parentVerificationofNonFilingLetterReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getParentNonFilerCertificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject parentNonFilerCertificationReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentNonFilerCertificationReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentNonFilerCertificationReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							parentNonFilerCertificationReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							parentNonFilerCertificationReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							parentNonFilerCertificationReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentNonFilerCertificationReportJson.add("workflowStartTime", startTimeJson);
			parentNonFilerCertificationReportJson.add("stepStartTime", stepStartTimeJson);
			// parentNonFilerCertificationReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// parentNonFilerCertificationReportJson.addProperty("stepStartTime",
			// stepStartTime);
			parentNonFilerCertificationReportJson.addProperty("stepName", wItem.getNode().getTitle());
			parentNonFilerCertificationReportJson.addProperty("stepInitiator", initiatedBy);
			parentNonFilerCertificationReportJson.addProperty("stepAssignee", currentAssignee);
			parentNonFilerCertificationReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			parentNonFilerCertificationReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			parentNonFilerCertificationReportJson.addProperty("witemId", wItem.getId());
			return parentNonFilerCertificationReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDependencyOverrideAppealReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject dependencyOverrideAppealReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			dependencyOverrideAppealReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							dependencyOverrideAppealReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							dependencyOverrideAppealReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							dependencyOverrideAppealReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							dependencyOverrideAppealReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			dependencyOverrideAppealReportJson.add("workflowStartTime", startTimeJson);
			dependencyOverrideAppealReportJson.add("stepStartTime", stepStartTimeJson);
			// dependencyOverrideAppealReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// dependencyOverrideAppealReportJson.addProperty("stepStartTime",
			// stepStartTime);
			dependencyOverrideAppealReportJson.addProperty("stepName", wItem.getNode().getTitle());
			dependencyOverrideAppealReportJson.addProperty("stepInitiator", initiatedBy);
			dependencyOverrideAppealReportJson.addProperty("stepAssignee", currentAssignee);
			dependencyOverrideAppealReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			dependencyOverrideAppealReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			return dependencyOverrideAppealReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFederalDirectGradPlusLoanReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject federalDirectGradPlusLoanReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			federalDirectGradPlusLoanReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							federalDirectGradPlusLoanReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							federalDirectGradPlusLoanReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							federalDirectGradPlusLoanReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							federalDirectGradPlusLoanReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			federalDirectGradPlusLoanReportJson.add("workflowStartTime", startTimeJson);
			federalDirectGradPlusLoanReportJson.add("stepStartTime", stepStartTimeJson);
			// federalDirectGradPlusLoanReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// federalDirectGradPlusLoanReportJson.addProperty("stepStartTime",
			// stepStartTime);
			federalDirectGradPlusLoanReportJson.addProperty("stepName", wItem.getNode().getTitle());
			federalDirectGradPlusLoanReportJson.addProperty("stepInitiator", initiatedBy);
			federalDirectGradPlusLoanReportJson.addProperty("stepAssignee", currentAssignee);
			federalDirectGradPlusLoanReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			federalDirectGradPlusLoanReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			federalDirectGradPlusLoanReportJson.addProperty("witemId", wItem.getId());
			return federalDirectGradPlusLoanReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSectionChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject sectionChangeReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			sectionChangeReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Cwid");
						if (StringUtils.isNotBlank(cwid)) {
							sectionChangeReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							sectionChangeReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							sectionChangeReportJson.addProperty("lName", lName);
						}
						String email = XMLUtils.getChildNodeContent(afBoundDataElement, "Email");
						if (StringUtils.isNotBlank(email)) {
							sectionChangeReportJson.addProperty("email", email);
						}
						String course = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptCourse_Drop");
						if (StringUtils.isNotBlank(course)) {
							sectionChangeReportJson.addProperty("course", course);
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
			sectionChangeReportJson.addProperty("workflowStartTime", workflowStartTime);
			sectionChangeReportJson.addProperty("stepStartTime", stepStartTime);
			sectionChangeReportJson.addProperty("stepName", wItem.getNode().getTitle());
			sectionChangeReportJson.addProperty("stepInitiator", initiatedBy);
			sectionChangeReportJson.addProperty("stepAssignee", currentAssignee);
			sectionChangeReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			sectionChangeReportJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			sectionChangeReportJson.addProperty("witemId", wItem.getId());
			return sectionChangeReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getRequestforTimeConflictApprovalReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject requestforTimeConflictApprovalReportJsonArray = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			requestforTimeConflictApprovalReportJsonArray.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Cwid");
						if (StringUtils.isNotBlank(cwid)) {
							requestforTimeConflictApprovalReportJsonArray.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(fName)) {
							requestforTimeConflictApprovalReportJsonArray.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(lName)) {
							requestforTimeConflictApprovalReportJsonArray.addProperty("lName", lName);
						}
						String term = XMLUtils.getChildNodeContent(afBoundDataElement, "TermName");
						if (StringUtils.isNotBlank(term)) {
							requestforTimeConflictApprovalReportJsonArray.addProperty("term", term);
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
			requestforTimeConflictApprovalReportJsonArray.addProperty("workflowStartTime", workflowStartTime);
			requestforTimeConflictApprovalReportJsonArray.addProperty("stepStartTime", stepStartTime);
			requestforTimeConflictApprovalReportJsonArray.addProperty("stepName", wItem.getNode().getTitle());
			requestforTimeConflictApprovalReportJsonArray.addProperty("stepInitiator", initiatedBy);
			requestforTimeConflictApprovalReportJsonArray.addProperty("stepAssignee", currentAssignee);
			requestforTimeConflictApprovalReportJsonArray.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			requestforTimeConflictApprovalReportJsonArray.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			requestforTimeConflictApprovalReportJsonArray.addProperty("witemId", wItem.getId());
			return requestforTimeConflictApprovalReportJsonArray;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFacultyAssignedTimeAgreementReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject facultyAssignedTimeAgreementReportJsonArray = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			facultyAssignedTimeAgreementReportJsonArray.addProperty("sNo", count);

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
							facultyAssignedTimeAgreementReportJsonArray.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							facultyAssignedTimeAgreementReportJsonArray.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							facultyAssignedTimeAgreementReportJsonArray.addProperty("lName", lName);
						}
						String college = XMLUtils.getChildNodeContent(afBoundDataElement, "College");
						if (StringUtils.isNotBlank(college)) {
							facultyAssignedTimeAgreementReportJsonArray.addProperty("college", college);
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
			facultyAssignedTimeAgreementReportJsonArray.addProperty("workflowStartTime", workflowStartTime);
			facultyAssignedTimeAgreementReportJsonArray.addProperty("stepStartTime", stepStartTime);
			facultyAssignedTimeAgreementReportJsonArray.addProperty("stepName", wItem.getNode().getTitle());
			facultyAssignedTimeAgreementReportJsonArray.addProperty("stepInitiator", initiatedBy);
			facultyAssignedTimeAgreementReportJsonArray.addProperty("stepAssignee", currentAssignee);
			facultyAssignedTimeAgreementReportJsonArray.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			facultyAssignedTimeAgreementReportJsonArray.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			facultyAssignedTimeAgreementReportJsonArray.addProperty("witemId", wItem.getId());
			return facultyAssignedTimeAgreementReportJsonArray;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getParentAmendedTaxReturnJsonReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject parentAmendedTaxReturnJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentAmendedTaxReturnJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentAmendedTaxReturnJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							parentAmendedTaxReturnJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							parentAmendedTaxReturnJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							parentAmendedTaxReturnJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentAmendedTaxReturnJson.add("workflowStartTime", startTimeJson);
			parentAmendedTaxReturnJson.add("stepStartTime", stepStartTimeJson);
			// parentAmendedTaxReturnJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// parentAmendedTaxReturnJson.addProperty("stepStartTime", stepStartTime);
			parentAmendedTaxReturnJson.addProperty("stepName", wItem.getNode().getTitle());
			parentAmendedTaxReturnJson.addProperty("stepInitiator", initiatedBy);
			parentAmendedTaxReturnJson.addProperty("stepAssignee", currentAssignee);
			parentAmendedTaxReturnJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			parentAmendedTaxReturnJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			parentAmendedTaxReturnJson.addProperty("witemId", wItem.getId());
			return parentAmendedTaxReturnJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getImmigrationCitizenshipVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject immigrationcitizenshipVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			immigrationcitizenshipVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							immigrationcitizenshipVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							immigrationcitizenshipVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							immigrationcitizenshipVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							immigrationcitizenshipVerificationJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			immigrationcitizenshipVerificationJson.add("workflowStartTime", startTimeJson);
			immigrationcitizenshipVerificationJson.add("stepStartTime", stepStartTimeJson);
			// immigrationcitizenshipVerificationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// immigrationcitizenshipVerificationJson.addProperty("stepStartTime",
			// stepStartTime);
			immigrationcitizenshipVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			immigrationcitizenshipVerificationJson.addProperty("stepInitiator", initiatedBy);
			immigrationcitizenshipVerificationJson.addProperty("stepAssignee", currentAssignee);
			immigrationcitizenshipVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			immigrationcitizenshipVerificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			immigrationcitizenshipVerificationJson.addProperty("witemId", wItem.getId());
			return immigrationcitizenshipVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFederalAidRefundVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject federalAidRefundVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			federalAidRefundVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							federalAidRefundVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							federalAidRefundVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							federalAidRefundVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							federalAidRefundVerificationJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			federalAidRefundVerificationJson.add("workflowStartTime", startTimeJson);
			federalAidRefundVerificationJson.add("stepStartTime", stepStartTimeJson);
			// federalAidRefundVerificationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// federalAidRefundVerificationJson.addProperty("stepStartTime", stepStartTime);
			federalAidRefundVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			federalAidRefundVerificationJson.addProperty("stepInitiator", initiatedBy);
			federalAidRefundVerificationJson.addProperty("stepAssignee", currentAssignee);
			federalAidRefundVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			federalAidRefundVerificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			federalAidRefundVerificationJson.addProperty("witemId", wItem.getId());
			return federalAidRefundVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFacultySpecialConsultantStipendReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject facultySpecialConsultantStipendJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			facultySpecialConsultantStipendJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);

					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {

						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentId");
						if (StringUtils.isNotBlank(deptId)) {
							facultySpecialConsultantStipendJson.addProperty("deptId", deptId);
						}
						String month = XMLUtils.getChildNodeContent(afBoundDataElement, "Month");
						if (StringUtils.isNotBlank(month)) {
							facultySpecialConsultantStipendJson.addProperty("month", month);
						}
						String year = XMLUtils.getChildNodeContent(afBoundDataElement, "Year");
						if (StringUtils.isNotBlank(year)) {
							facultySpecialConsultantStipendJson.addProperty("year", year);
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

			facultySpecialConsultantStipendJson.addProperty("workflowStartTime", workflowStartTime);
			facultySpecialConsultantStipendJson.addProperty("stepStartTime", stepStartTime);
			facultySpecialConsultantStipendJson.addProperty("stepName", wItem.getNode().getTitle());
			facultySpecialConsultantStipendJson.addProperty("stepInitiator", initiatedBy);
			facultySpecialConsultantStipendJson.addProperty("stepAssignee", currentAssignee);
			facultySpecialConsultantStipendJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			facultySpecialConsultantStipendJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			facultySpecialConsultantStipendJson.addProperty("witemId", wItem.getId());
			return facultySpecialConsultantStipendJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getLoanStatusVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject loanStatusVerification = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			loanStatusVerification.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							loanStatusVerification.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							loanStatusVerification.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							loanStatusVerification.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							loanStatusVerification.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			loanStatusVerification.add("workflowStartTime", startTimeJson);
			loanStatusVerification.add("stepStartTime", stepStartTimeJson);
			// loanStatusVerification.addProperty("workflowStartTime", workflowStartTime);
			// loanStatusVerification.addProperty("stepStartTime", stepStartTime);
			loanStatusVerification.addProperty("stepName", wItem.getNode().getTitle());
			loanStatusVerification.addProperty("stepInitiator", initiatedBy);
			loanStatusVerification.addProperty("stepAssignee", currentAssignee);
			loanStatusVerification.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			loanStatusVerification.addProperty("witemId", wItem.getId());
			loanStatusVerification.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return loanStatusVerification;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getCalGrantTransferReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject calGrantTransferJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			calGrantTransferJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							calGrantTransferJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							calGrantTransferJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							calGrantTransferJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							calGrantTransferJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			calGrantTransferJson.add("workflowStartTime", startTimeJson);
			calGrantTransferJson.add("stepStartTime", stepStartTimeJson);
			// calGrantTransferJson.addProperty("workflowStartTime", workflowStartTime);
			// calGrantTransferJson.addProperty("stepStartTime", stepStartTime);
			calGrantTransferJson.addProperty("stepName", wItem.getNode().getTitle());
			calGrantTransferJson.addProperty("stepInitiator", initiatedBy);
			calGrantTransferJson.addProperty("stepAssignee", currentAssignee);
			calGrantTransferJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			calGrantTransferJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			calGrantTransferJson.addProperty("witemId", wItem.getId());
			return calGrantTransferJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getIdentityAndStatementVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject identityAndStatementVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			identityAndStatementVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							identityAndStatementVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							identityAndStatementVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							identityAndStatementVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							identityAndStatementVerificationJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			identityAndStatementVerificationJson.add("workflowStartTime", startTimeJson);
			identityAndStatementVerificationJson.add("stepStartTime", stepStartTimeJson);
			// identityAndStatementVerificationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// identityAndStatementVerificationJson.addProperty("stepStartTime",
			// stepStartTime);
			identityAndStatementVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			identityAndStatementVerificationJson.addProperty("stepInitiator", initiatedBy);
			identityAndStatementVerificationJson.addProperty("stepAssignee", currentAssignee);
			identityAndStatementVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			identityAndStatementVerificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			identityAndStatementVerificationJson.addProperty("witemId", wItem.getId());
			return identityAndStatementVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSAPAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject sapAppealJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			sapAppealJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							sapAppealJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							sapAppealJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							sapAppealJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							sapAppealJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			sapAppealJson.add("workflowStartTime", startTimeJson);
			sapAppealJson.add("stepStartTime", stepStartTimeJson);
			// sapAppealJson.addProperty("workflowStartTime", workflowStartTime);
			// sapAppealJson.addProperty("stepStartTime", stepStartTime);
			sapAppealJson.addProperty("stepName", wItem.getNode().getTitle());
			sapAppealJson.addProperty("stepInitiator", initiatedBy);
			sapAppealJson.addProperty("stepAssignee", currentAssignee);
			sapAppealJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			sapAppealJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			sapAppealJson.addProperty("witemId", wItem.getId());
			return sapAppealJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getUnitCapAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject unitCapAppealJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			unitCapAppealJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							unitCapAppealJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							unitCapAppealJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							unitCapAppealJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							unitCapAppealJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			unitCapAppealJson.add("workflowStartTime", startTimeJson);
			unitCapAppealJson.add("stepStartTime", stepStartTimeJson);
			// unitCapAppealJson.addProperty("workflowStartTime", workflowStartTime);
			// unitCapAppealJson.addProperty("stepStartTime", stepStartTime);
			unitCapAppealJson.addProperty("stepName", wItem.getNode().getTitle());
			unitCapAppealJson.addProperty("stepInitiator", initiatedBy);
			unitCapAppealJson.addProperty("stepAssignee", currentAssignee);
			unitCapAppealJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			unitCapAppealJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			unitCapAppealJson.addProperty("witemId", wItem.getId());
			return unitCapAppealJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getAwardAdjustmentAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject awardAdjustmentAppealReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			awardAdjustmentAppealReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							awardAdjustmentAppealReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							awardAdjustmentAppealReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							awardAdjustmentAppealReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							awardAdjustmentAppealReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			awardAdjustmentAppealReportJson.add("workflowStartTime", startTimeJson);
			awardAdjustmentAppealReportJson.add("stepStartTime", stepStartTimeJson);
			// awardAdjustmentAppealReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// awardAdjustmentAppealReportJson.addProperty("stepStartTime", stepStartTime);
			awardAdjustmentAppealReportJson.addProperty("stepName", wItem.getNode().getTitle());
			awardAdjustmentAppealReportJson.addProperty("stepInitiator", initiatedBy);
			awardAdjustmentAppealReportJson.addProperty("stepAssignee", currentAssignee);
			awardAdjustmentAppealReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			awardAdjustmentAppealReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			awardAdjustmentAppealReportJson.addProperty("witemId", wItem.getId());
			return awardAdjustmentAppealReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStudentW2StatementReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject studentW2StatementJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			studentW2StatementJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							studentW2StatementJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							studentW2StatementJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							studentW2StatementJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							studentW2StatementJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			studentW2StatementJson.add("workflowStartTime", startTimeJson);
			studentW2StatementJson.add("stepStartTime", stepStartTimeJson);
			// studentW2StatementJson.addProperty("workflowStartTime", workflowStartTime);
			// studentW2StatementJson.addProperty("stepStartTime", stepStartTime);
			studentW2StatementJson.addProperty("stepName", wItem.getNode().getTitle());
			studentW2StatementJson.addProperty("stepInitiator", initiatedBy);
			studentW2StatementJson.addProperty("stepAssignee", currentAssignee);
			studentW2StatementJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			studentW2StatementJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			studentW2StatementJson.addProperty("witemId", wItem.getId());
			return studentW2StatementJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getVerificationOfNonFilingReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject verificationOfNonFilingJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			verificationOfNonFilingJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							verificationOfNonFilingJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							verificationOfNonFilingJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							verificationOfNonFilingJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							verificationOfNonFilingJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			verificationOfNonFilingJson.add("workflowStartTime", startTimeJson);
			verificationOfNonFilingJson.add("stepStartTime", stepStartTimeJson);
			// verificationOfNonFilingJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// verificationOfNonFilingJson.addProperty("stepStartTime", stepStartTime);
			verificationOfNonFilingJson.addProperty("stepName", wItem.getNode().getTitle());
			verificationOfNonFilingJson.addProperty("stepInitiator", initiatedBy);
			verificationOfNonFilingJson.addProperty("stepAssignee", currentAssignee);
			verificationOfNonFilingJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			verificationOfNonFilingJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			verificationOfNonFilingJson.addProperty("witemId", wItem.getId());
			return verificationOfNonFilingJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFederalDirectPlusApplicationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject federalDirectPlusApplicationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			federalDirectPlusApplicationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							federalDirectPlusApplicationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							federalDirectPlusApplicationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							federalDirectPlusApplicationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							federalDirectPlusApplicationJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			federalDirectPlusApplicationJson.add("workflowStartTime", startTimeJson);
			federalDirectPlusApplicationJson.add("stepStartTime", stepStartTimeJson);
			// federalDirectPlusApplicationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// federalDirectPlusApplicationJson.addProperty("stepStartTime", stepStartTime);
			federalDirectPlusApplicationJson.addProperty("stepName", wItem.getNode().getTitle());
			federalDirectPlusApplicationJson.addProperty("stepInitiator", initiatedBy);
			federalDirectPlusApplicationJson.addProperty("stepAssignee", currentAssignee);
			federalDirectPlusApplicationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			federalDirectPlusApplicationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			federalDirectPlusApplicationJson.addProperty("witemId", wItem.getId());
			return federalDirectPlusApplicationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFederalDirectLoanRequestReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject federalDirectLoanRequestJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			federalDirectLoanRequestJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							federalDirectLoanRequestJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							federalDirectLoanRequestJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							federalDirectLoanRequestJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							federalDirectLoanRequestJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			federalDirectLoanRequestJson.add("workflowStartTime", startTimeJson);
			federalDirectLoanRequestJson.add("stepStartTime", stepStartTimeJson);
			// federalDirectLoanRequestJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// federalDirectLoanRequestJson.addProperty("stepStartTime", stepStartTime);
			federalDirectLoanRequestJson.addProperty("stepName", wItem.getNode().getTitle());
			federalDirectLoanRequestJson.addProperty("stepInitiator", initiatedBy);
			federalDirectLoanRequestJson.addProperty("stepAssignee", currentAssignee);
			federalDirectLoanRequestJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			federalDirectLoanRequestJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			federalDirectLoanRequestJson.addProperty("witemId", wItem.getId());
			return federalDirectLoanRequestJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getNonFilerCertificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject nonFilerCertificationReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			nonFilerCertificationReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							nonFilerCertificationReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							nonFilerCertificationReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							nonFilerCertificationReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							nonFilerCertificationReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			nonFilerCertificationReportJson.add("workflowStartTime", startTimeJson);
			nonFilerCertificationReportJson.add("stepStartTime", stepStartTimeJson);
			// nonFilerCertificationReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// nonFilerCertificationReportJson.addProperty("stepStartTime", stepStartTime);
			nonFilerCertificationReportJson.addProperty("stepName", wItem.getNode().getTitle());
			nonFilerCertificationReportJson.addProperty("stepInitiator", initiatedBy);
			nonFilerCertificationReportJson.addProperty("stepAssignee", currentAssignee);
			nonFilerCertificationReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			nonFilerCertificationReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			nonFilerCertificationReportJson.addProperty("witemId", wItem.getId());
			return nonFilerCertificationReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getParentStatementOfNonSupportReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject parentStatementOfNonSupportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentStatementOfNonSupportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentStatementOfNonSupportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							parentStatementOfNonSupportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							parentStatementOfNonSupportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							parentStatementOfNonSupportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentStatementOfNonSupportJson.add("workflowStartTime", startTimeJson);
			parentStatementOfNonSupportJson.add("stepStartTime", stepStartTimeJson);
			// parentStatementOfNonSupportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// parentStatementOfNonSupportJson.addProperty("stepStartTime", stepStartTime);
			parentStatementOfNonSupportJson.addProperty("stepName", wItem.getNode().getTitle());
			parentStatementOfNonSupportJson.addProperty("stepInitiator", initiatedBy);
			parentStatementOfNonSupportJson.addProperty("stepAssignee", currentAssignee);
			parentStatementOfNonSupportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			parentStatementOfNonSupportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			parentStatementOfNonSupportJson.addProperty("witemId", wItem.getId());
			return parentStatementOfNonSupportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getDroneFlightRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject droneFlightRequestJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			droneFlightRequestJson.addProperty("sNo", count);
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
							droneFlightRequestJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorFirstName");
						if (StringUtils.isNotBlank(fName)) {
							droneFlightRequestJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorLastName");
						if (StringUtils.isNotBlank(lName)) {
							droneFlightRequestJson.addProperty("lName", lName);
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
			droneFlightRequestJson.addProperty("workflowStartTime", workflowStartTime);
			droneFlightRequestJson.addProperty("stepStartTime", stepStartTime);
			droneFlightRequestJson.addProperty("stepName", wItem.getNode().getTitle());
			droneFlightRequestJson.addProperty("stepInitiator", initiatedBy);
			droneFlightRequestJson.addProperty("stepAssignee", currentAssignee);
			droneFlightRequestJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			droneFlightRequestJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			droneFlightRequestJson.addProperty("witemId", wItem.getId());
			return droneFlightRequestJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTDAExceptionFormUGReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject tdaUGReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			tdaUGReportJson.addProperty("sNo", count);

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
							tdaUGReportJson.addProperty("cwid", cwid);
						}
						String studentName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentName");
						if (StringUtils.isNotBlank(studentName)) {
							tdaUGReportJson.addProperty("studentName", studentName);
						}
						String facultyName = XMLUtils.getChildNodeContent(afBoundDataElement, "FacultyName");
						if (StringUtils.isNotBlank(facultyName)) {
							tdaUGReportJson.addProperty("facultyName", facultyName);
						}
						String exceptionType = XMLUtils.getChildNodeContent(afBoundDataElement, "ExceptionType");
						if (StringUtils.isNotBlank(exceptionType)) {
							tdaUGReportJson.addProperty("exceptionType", exceptionType);
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
			tdaUGReportJson.addProperty("workflowStartTime", workflowStartTime);
			tdaUGReportJson.addProperty("stepStartTime", stepStartTime);
			tdaUGReportJson.addProperty("stepName", wItem.getNode().getTitle());
			tdaUGReportJson.addProperty("stepInitiator", initiatedBy);
			tdaUGReportJson.addProperty("stepAssignee", currentAssignee);
			tdaUGReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			tdaUGReportJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			tdaUGReportJson.addProperty("witemId", wItem.getId());
			return tdaUGReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTDAExceptionFormGradReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject tdaGradReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			tdaGradReportJson.addProperty("sNo", count);

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
							tdaGradReportJson.addProperty("cwid", cwid);
						}
						String studentName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentName");
						if (StringUtils.isNotBlank(studentName)) {
							tdaGradReportJson.addProperty("studentName", studentName);
						}
						String facultyName = XMLUtils.getChildNodeContent(afBoundDataElement, "FacultyName");
						if (StringUtils.isNotBlank(facultyName)) {
							tdaGradReportJson.addProperty("facultyName", facultyName);
						}
						String academicPlan = XMLUtils.getChildNodeContent(afBoundDataElement, "AcademicPlan");
						if (StringUtils.isNotBlank(academicPlan)) {
							tdaGradReportJson.addProperty("academicPlan", academicPlan);
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
			tdaGradReportJson.addProperty("workflowStartTime", workflowStartTime);
			tdaGradReportJson.addProperty("stepStartTime", stepStartTime);
			tdaGradReportJson.addProperty("stepName", wItem.getNode().getTitle());
			tdaGradReportJson.addProperty("stepInitiator", initiatedBy);
			tdaGradReportJson.addProperty("stepAssignee", currentAssignee);
			tdaGradReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			tdaGradReportJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			tdaGradReportJson.addProperty("witemId", wItem.getId());
			return tdaGradReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStudentBudgetAdjustmentAppealReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject studentBudgetAdjustmentAppealReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			studentBudgetAdjustmentAppealReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							studentBudgetAdjustmentAppealReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							studentBudgetAdjustmentAppealReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							studentBudgetAdjustmentAppealReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							studentBudgetAdjustmentAppealReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			studentBudgetAdjustmentAppealReportJson.add("workflowStartTime", startTimeJson);
			studentBudgetAdjustmentAppealReportJson.add("stepStartTime", stepStartTimeJson);
			// studentBudgetAdjustmentAppealReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// studentBudgetAdjustmentAppealReportJson.addProperty("stepStartTime",
			// stepStartTime);
			studentBudgetAdjustmentAppealReportJson.addProperty("stepName", wItem.getNode().getTitle());
			studentBudgetAdjustmentAppealReportJson.addProperty("stepInitiator", initiatedBy);
			studentBudgetAdjustmentAppealReportJson.addProperty("stepAssignee", currentAssignee);
			studentBudgetAdjustmentAppealReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			studentBudgetAdjustmentAppealReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			studentBudgetAdjustmentAppealReportJson.addProperty("witemId", wItem.getId());
			return studentBudgetAdjustmentAppealReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getUnaccompaniedHomelessYouthVerificationHomeReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject unaccompaniedHomelessYouthVerificationHomeJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							unaccompaniedHomelessYouthVerificationHomeJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							unaccompaniedHomelessYouthVerificationHomeJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							unaccompaniedHomelessYouthVerificationHomeJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							unaccompaniedHomelessYouthVerificationHomeJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							unaccompaniedHomelessYouthVerificationHomeJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			unaccompaniedHomelessYouthVerificationHomeJson.add("workflowStartTime", startTimeJson);
			unaccompaniedHomelessYouthVerificationHomeJson.add("stepStartTime", stepStartTimeJson);
			// unaccompaniedHomelessYouthVerificationHomeJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// unaccompaniedHomelessYouthVerificationHomeJson.addProperty("stepStartTime",
			// stepStartTime);
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("stepName", wItem.getNode().getTitle());
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("stepInitiator", initiatedBy);
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("stepAssignee", currentAssignee);
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			unaccompaniedHomelessYouthVerificationHomeJson.addProperty("witemId", wItem.getId());
			return unaccompaniedHomelessYouthVerificationHomeJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getTitanCardReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject titanCardJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			titanCardJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Cwid");
						if (StringUtils.isNotBlank(cwid)) {
							titanCardJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							titanCardJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							titanCardJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "TitanCardNumber");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							titanCardJson.addProperty("titanCardNo", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			titanCardJson.add("workflowStartTime", startTimeJson);
			titanCardJson.add("stepStartTime", stepStartTimeJson);
			titanCardJson.addProperty("stepName", wItem.getNode().getTitle());
			titanCardJson.addProperty("stepInitiator", initiatedBy);
			titanCardJson.addProperty("stepAssignee", currentAssignee);
			titanCardJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			titanCardJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			titanCardJson.addProperty("witemId", wItem.getId());
			return titanCardJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getRequesttoCancelFAProcessingReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject reqToCancelFAProcessingReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			reqToCancelFAProcessingReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							reqToCancelFAProcessingReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							reqToCancelFAProcessingReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							reqToCancelFAProcessingReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							reqToCancelFAProcessingReportJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							reqToCancelFAProcessingReportJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			reqToCancelFAProcessingReportJson.add("workflowStartTime", startTimeJson);
			reqToCancelFAProcessingReportJson.add("stepStartTime", stepStartTimeJson);
			// reqToCancelFAProcessingReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// reqToCancelFAProcessingReportJson.addProperty("stepStartTime",
			// stepStartTime);
			reqToCancelFAProcessingReportJson.addProperty("stepName", wItem.getNode().getTitle());
			reqToCancelFAProcessingReportJson.addProperty("stepInitiator", initiatedBy);
			reqToCancelFAProcessingReportJson.addProperty("stepAssignee", currentAssignee);
			reqToCancelFAProcessingReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			reqToCancelFAProcessingReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			reqToCancelFAProcessingReportJson.addProperty("witemId", wItem.getId());
			return reqToCancelFAProcessingReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStateUnivGrantAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject stateUnivGrantAppealReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			stateUnivGrantAppealReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							stateUnivGrantAppealReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							stateUnivGrantAppealReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							stateUnivGrantAppealReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							stateUnivGrantAppealReportJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							stateUnivGrantAppealReportJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			stateUnivGrantAppealReportJson.add("workflowStartTime", startTimeJson);
			stateUnivGrantAppealReportJson.add("stepStartTime", stepStartTimeJson);
			// stateUnivGrantAppealReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// stateUnivGrantAppealReportJson.addProperty("stepStartTime", stepStartTime);
			stateUnivGrantAppealReportJson.addProperty("stepName", wItem.getNode().getTitle());
			stateUnivGrantAppealReportJson.addProperty("stepInitiator", initiatedBy);
			stateUnivGrantAppealReportJson.addProperty("stepAssignee", currentAssignee);
			stateUnivGrantAppealReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			stateUnivGrantAppealReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			stateUnivGrantAppealReportJson.addProperty("witemId", wItem.getId());
			return stateUnivGrantAppealReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getGoldenStateTeacherGrantCertReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject goldenStateTeacherGrantCertReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			goldenStateTeacherGrantCertReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							goldenStateTeacherGrantCertReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							goldenStateTeacherGrantCertReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							goldenStateTeacherGrantCertReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							goldenStateTeacherGrantCertReportJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							goldenStateTeacherGrantCertReportJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			goldenStateTeacherGrantCertReportJson.add("workflowStartTime", startTimeJson);
			goldenStateTeacherGrantCertReportJson.add("stepStartTime", stepStartTimeJson);
			// goldenStateTeacherGrantCertReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// goldenStateTeacherGrantCertReportJson.addProperty("stepStartTime",
			// stepStartTime);
			goldenStateTeacherGrantCertReportJson.addProperty("stepName", wItem.getNode().getTitle());
			goldenStateTeacherGrantCertReportJson.addProperty("stepInitiator", initiatedBy);
			goldenStateTeacherGrantCertReportJson.addProperty("stepAssignee", currentAssignee);
			goldenStateTeacherGrantCertReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			goldenStateTeacherGrantCertReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			goldenStateTeacherGrantCertReportJson.addProperty("witemId", wItem.getId());
			return goldenStateTeacherGrantCertReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getChafeeStudentSuccessPlanReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject chafeeStudentSuccessPlanJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			chafeeStudentSuccessPlanJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							chafeeStudentSuccessPlanJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							chafeeStudentSuccessPlanJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							chafeeStudentSuccessPlanJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							chafeeStudentSuccessPlanJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			chafeeStudentSuccessPlanJson.add("workflowStartTime", startTimeJson);
			chafeeStudentSuccessPlanJson.add("stepStartTime", stepStartTimeJson);
			// chafeeStudentSuccessPlanJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// chafeeStudentSuccessPlanJson.addProperty("stepStartTime", stepStartTime);
			chafeeStudentSuccessPlanJson.addProperty("stepName", wItem.getNode().getTitle());
			chafeeStudentSuccessPlanJson.addProperty("stepInitiator", initiatedBy);
			chafeeStudentSuccessPlanJson.addProperty("stepAssignee", currentAssignee);
			chafeeStudentSuccessPlanJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			chafeeStudentSuccessPlanJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			chafeeStudentSuccessPlanJson.addProperty("witemId", wItem.getId());
			return chafeeStudentSuccessPlanJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getVeteranStatusVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject veteranStatusVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			veteranStatusVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							veteranStatusVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							veteranStatusVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							veteranStatusVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							veteranStatusVerificationJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							veteranStatusVerificationJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			veteranStatusVerificationJson.add("workflowStartTime", startTimeJson);
			veteranStatusVerificationJson.add("stepStartTime", stepStartTimeJson);
			// veteranStatusVerificationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// veteranStatusVerificationJson.addProperty("stepStartTime", stepStartTime);
			veteranStatusVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			veteranStatusVerificationJson.addProperty("stepInitiator", initiatedBy);
			veteranStatusVerificationJson.addProperty("stepAssignee", currentAssignee);
			veteranStatusVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			veteranStatusVerificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			veteranStatusVerificationJson.addProperty("witemId", wItem.getId());
			return veteranStatusVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getSsnVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject ssnVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			ssnVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							ssnVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							ssnVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							ssnVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							ssnVerificationJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							ssnVerificationJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			ssnVerificationJson.add("workflowStartTime", startTimeJson);
			ssnVerificationJson.add("stepStartTime", stepStartTimeJson);
			// ssnVerificationJson.addProperty("workflowStartTime", workflowStartTime);
			// ssnVerificationJson.addProperty("stepStartTime", stepStartTime);
			ssnVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			ssnVerificationJson.addProperty("stepInitiator", initiatedBy);
			ssnVerificationJson.addProperty("stepAssignee", currentAssignee);
			ssnVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			ssnVerificationJson.addProperty("witemId", wItem.getId());
			ssnVerificationJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return ssnVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPetitionforPGCreditReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject petitionforPGCreditJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			petitionforPGCreditJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							petitionforPGCreditJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							petitionforPGCreditJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							petitionforPGCreditJson.addProperty("lName", lName);
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
			petitionforPGCreditJson.addProperty("workflowStartTime", workflowStartTime);
			petitionforPGCreditJson.addProperty("stepStartTime", stepStartTime);
			petitionforPGCreditJson.addProperty("stepName", wItem.getNode().getTitle());
			petitionforPGCreditJson.addProperty("stepInitiator", initiatedBy);
			petitionforPGCreditJson.addProperty("stepAssignee", currentAssignee);
			petitionforPGCreditJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			petitionforPGCreditJson.addProperty("witemId", wItem.getId());
			petitionforPGCreditJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return petitionforPGCreditJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPetitionforGEVariationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject petitionforGEVariationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			petitionforGEVariationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							petitionforGEVariationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							petitionforGEVariationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							petitionforGEVariationJson.addProperty("lName", lName);
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
			petitionforGEVariationJson.addProperty("workflowStartTime", workflowStartTime);
			petitionforGEVariationJson.addProperty("stepStartTime", stepStartTime);
			petitionforGEVariationJson.addProperty("stepName", wItem.getNode().getTitle());
			petitionforGEVariationJson.addProperty("stepInitiator", initiatedBy);
			petitionforGEVariationJson.addProperty("stepAssignee", currentAssignee);
			petitionforGEVariationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			petitionforGEVariationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			petitionforGEVariationJson.addProperty("witemId", wItem.getId());
			return petitionforGEVariationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getAssetInformationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject assetInformationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			assetInformationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							assetInformationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							assetInformationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							assetInformationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							assetInformationJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							assetInformationJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			assetInformationJson.add("workflowStartTime", startTimeJson);
			assetInformationJson.add("stepStartTime", stepStartTimeJson);
			// assetInformationJson.addProperty("workflowStartTime", workflowStartTime);
			// assetInformationJson.addProperty("stepStartTime", stepStartTime);
			assetInformationJson.addProperty("stepName", wItem.getNode().getTitle());
			assetInformationJson.addProperty("stepInitiator", initiatedBy);
			assetInformationJson.addProperty("stepAssignee", currentAssignee);
			assetInformationJson.addProperty("witemId", wItem.getId());
			assetInformationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			assetInformationJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return assetInformationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPensionRollOverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject pensionRollOverJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			pensionRollOverJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							pensionRollOverJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							pensionRollOverJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							pensionRollOverJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							pensionRollOverJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							pensionRollOverJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			pensionRollOverJson.add("workflowStartTime", startTimeJson);
			pensionRollOverJson.add("stepStartTime", stepStartTimeJson);
			// pensionRollOverJson.addProperty("workflowStartTime", workflowStartTime);
			// pensionRollOverJson.addProperty("stepStartTime", stepStartTime);
			pensionRollOverJson.addProperty("stepName", wItem.getNode().getTitle());
			pensionRollOverJson.addProperty("stepInitiator", initiatedBy);
			pensionRollOverJson.addProperty("stepAssignee", currentAssignee);
			pensionRollOverJson.addProperty("witemId", wItem.getId());
			pensionRollOverJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			pensionRollOverJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return pensionRollOverJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getStudyAbroadAcademicTranscriptSubmissionReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject studyAbroadAcademicTranscriptSubmissionJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							studyAbroadAcademicTranscriptSubmissionJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							studyAbroadAcademicTranscriptSubmissionJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							studyAbroadAcademicTranscriptSubmissionJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							studyAbroadAcademicTranscriptSubmissionJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							studyAbroadAcademicTranscriptSubmissionJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			studyAbroadAcademicTranscriptSubmissionJson.add("workflowStartTime", startTimeJson);
			studyAbroadAcademicTranscriptSubmissionJson.add("stepStartTime", stepStartTimeJson);
			// studyAbroadAcademicTranscriptSubmissionJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// studyAbroadAcademicTranscriptSubmissionJson.addProperty("stepStartTime",
			// stepStartTime);
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("stepName", wItem.getNode().getTitle());
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("stepInitiator", initiatedBy);
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("stepAssignee", currentAssignee);
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			studyAbroadAcademicTranscriptSubmissionJson.addProperty("witemId", wItem.getId());
			return studyAbroadAcademicTranscriptSubmissionJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getInvestmentRealEstateVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject investmentRealEstateVerificationJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			investmentRealEstateVerificationJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							investmentRealEstateVerificationJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							investmentRealEstateVerificationJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							investmentRealEstateVerificationJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							investmentRealEstateVerificationJson.addProperty("term", financialAidTerm);
						}
						String formCode = XMLUtils.getChildNodeContent(afBoundDataElement, "formCode");
						if (StringUtils.isNotBlank(formCode)) {
							investmentRealEstateVerificationJson.addProperty("formCode", formCode);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			investmentRealEstateVerificationJson.add("workflowStartTime", startTimeJson);
			investmentRealEstateVerificationJson.add("stepStartTime", stepStartTimeJson);
			// investmentRealEstateVerificationJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// investmentRealEstateVerificationJson.addProperty("stepStartTime",
			// stepStartTime);
			investmentRealEstateVerificationJson.addProperty("stepName", wItem.getNode().getTitle());
			investmentRealEstateVerificationJson.addProperty("stepInitiator", initiatedBy);
			investmentRealEstateVerificationJson.addProperty("stepAssignee", currentAssignee);
			investmentRealEstateVerificationJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			investmentRealEstateVerificationJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			investmentRealEstateVerificationJson.addProperty("witemId", wItem.getId());
			return investmentRealEstateVerificationJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFederalTaxReturnReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject federalTaxReturnReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			federalTaxReturnReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							federalTaxReturnReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							federalTaxReturnReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							federalTaxReturnReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							federalTaxReturnReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			federalTaxReturnReportJson.add("workflowStartTime", startTimeJson);
			federalTaxReturnReportJson.add("stepStartTime", stepStartTimeJson);
			// federalTaxReturnReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// federalTaxReturnReportJson.addProperty("stepStartTime", stepStartTime);
			federalTaxReturnReportJson.addProperty("stepName", wItem.getNode().getTitle());
			federalTaxReturnReportJson.addProperty("stepInitiator", initiatedBy);
			federalTaxReturnReportJson.addProperty("stepAssignee", currentAssignee);
			federalTaxReturnReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			federalTaxReturnReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			federalTaxReturnReportJson.addProperty("witemId", wItem.getId());
			return federalTaxReturnReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getFederalTaxReturnScheduleEReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject federalTaxReturnScheduleEReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			federalTaxReturnScheduleEReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							federalTaxReturnScheduleEReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							federalTaxReturnScheduleEReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							federalTaxReturnScheduleEReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							federalTaxReturnScheduleEReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			federalTaxReturnScheduleEReportJson.add("workflowStartTime", startTimeJson);
			federalTaxReturnScheduleEReportJson.add("stepStartTime", stepStartTimeJson);
			// federalTaxReturnScheduleEReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// federalTaxReturnScheduleEReportJson.addProperty("stepStartTime",
			// stepStartTime);
			federalTaxReturnScheduleEReportJson.addProperty("stepName", wItem.getNode().getTitle());
			federalTaxReturnScheduleEReportJson.addProperty("stepInitiator", initiatedBy);
			federalTaxReturnScheduleEReportJson.addProperty("stepAssignee", currentAssignee);
			federalTaxReturnScheduleEReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			federalTaxReturnScheduleEReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			federalTaxReturnScheduleEReportJson.addProperty("witemId", wItem.getId());
			return federalTaxReturnScheduleEReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getConcurrentEnrollmentAgreementFallReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject concurrentEnrollmentAgreementFallReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			concurrentEnrollmentAgreementFallReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							concurrentEnrollmentAgreementFallReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							concurrentEnrollmentAgreementFallReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							concurrentEnrollmentAgreementFallReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							concurrentEnrollmentAgreementFallReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			concurrentEnrollmentAgreementFallReportJson.add("workflowStartTime", startTimeJson);
			concurrentEnrollmentAgreementFallReportJson.add("stepStartTime", stepStartTimeJson);
			// concurrentEnrollmentAgreementFallReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// concurrentEnrollmentAgreementFallReportJson.addProperty("stepStartTime",
			// stepStartTime);
			concurrentEnrollmentAgreementFallReportJson.addProperty("stepName", wItem.getNode().getTitle());
			concurrentEnrollmentAgreementFallReportJson.addProperty("stepInitiator", initiatedBy);
			concurrentEnrollmentAgreementFallReportJson.addProperty("stepAssignee", currentAssignee);
			concurrentEnrollmentAgreementFallReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			concurrentEnrollmentAgreementFallReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			concurrentEnrollmentAgreementFallReportJson.addProperty("witemId", wItem.getId());
			return concurrentEnrollmentAgreementFallReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getConcurrentEnrollmentAgreementSpringReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject concurrentEnrollmentAgreementSpringReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			concurrentEnrollmentAgreementSpringReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							concurrentEnrollmentAgreementSpringReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							concurrentEnrollmentAgreementSpringReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							concurrentEnrollmentAgreementSpringReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							concurrentEnrollmentAgreementSpringReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			concurrentEnrollmentAgreementSpringReportJson.add("workflowStartTime", startTimeJson);
			concurrentEnrollmentAgreementSpringReportJson.add("stepStartTime", stepStartTimeJson);
			// concurrentEnrollmentAgreementSpringReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// concurrentEnrollmentAgreementSpringReportJson.addProperty("stepStartTime",
			// stepStartTime);
			concurrentEnrollmentAgreementSpringReportJson.addProperty("stepName", wItem.getNode().getTitle());
			concurrentEnrollmentAgreementSpringReportJson.addProperty("stepInitiator", initiatedBy);
			concurrentEnrollmentAgreementSpringReportJson.addProperty("stepAssignee", currentAssignee);
			concurrentEnrollmentAgreementSpringReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			concurrentEnrollmentAgreementSpringReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			concurrentEnrollmentAgreementSpringReportJson.addProperty("witemId", wItem.getId());
			return concurrentEnrollmentAgreementSpringReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getHousingUpdateFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject housingUpdateFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			housingUpdateFormReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							housingUpdateFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							housingUpdateFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							housingUpdateFormReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							housingUpdateFormReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			housingUpdateFormReportJson.add("workflowStartTime", startTimeJson);
			housingUpdateFormReportJson.add("stepStartTime", stepStartTimeJson);
			// housingUpdateFormReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// housingUpdateFormReportJson.addProperty("stepStartTime", stepStartTime);
			housingUpdateFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			housingUpdateFormReportJson.addProperty("stepInitiator", initiatedBy);
			housingUpdateFormReportJson.addProperty("stepAssignee", currentAssignee);
			housingUpdateFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			housingUpdateFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			housingUpdateFormReportJson.addProperty("witemId", wItem.getId());
			return housingUpdateFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getBusinessSupplementFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject businessSupplementFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			businessSupplementFormReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							businessSupplementFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							businessSupplementFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							businessSupplementFormReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							businessSupplementFormReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			businessSupplementFormReportJson.add("workflowStartTime", startTimeJson);
			businessSupplementFormReportJson.add("stepStartTime", stepStartTimeJson);
			// businessSupplementFormReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// businessSupplementFormReportJson.addProperty("stepStartTime", stepStartTime);
			businessSupplementFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			businessSupplementFormReportJson.addProperty("stepInitiator", initiatedBy);
			businessSupplementFormReportJson.addProperty("stepAssignee", currentAssignee);
			businessSupplementFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			businessSupplementFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			businessSupplementFormReportJson.addProperty("witemId", wItem.getId());
			return businessSupplementFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getClassLabEquipProposalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject classLabEquipProposalJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			classLabEquipProposalJson.addProperty("sNo", count);

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
							classLabEquipProposalJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							classLabEquipProposalJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							classLabEquipProposalJson.addProperty("lName", lName);
						}
						/*
						 * String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement,
						 * "financialAidYear"); if (StringUtils.isNotBlank(financialAidTerm)) {
						 * testCopyJson.addProperty("term", financialAidTerm); } String formCode =
						 * XMLUtils.getChildNodeContent(afBoundDataElement, "formCode"); if
						 * (StringUtils.isNotBlank(formCode)) { testCopyJson.addProperty("formCode",
						 * formCode); }
						 */
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
			classLabEquipProposalJson.addProperty("workflowStartTime", workflowStartTime);
			classLabEquipProposalJson.addProperty("stepStartTime", stepStartTime);
			classLabEquipProposalJson.addProperty("stepName", wItem.getNode().getTitle());
			classLabEquipProposalJson.addProperty("stepInitiator", initiatedBy);
			classLabEquipProposalJson.addProperty("stepAssignee", currentAssignee);
			classLabEquipProposalJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			classLabEquipProposalJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			classLabEquipProposalJson.addProperty("witemId", wItem.getId());
			return classLabEquipProposalJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getVoiceMovementProdRequestReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject voiceMovementProdRequestJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			voiceMovementProdRequestJson.addProperty("sNo", count);

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
							voiceMovementProdRequestJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							voiceMovementProdRequestJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							voiceMovementProdRequestJson.addProperty("lName", lName);
						}
						/*
						 * String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement,
						 * "financialAidYear"); if (StringUtils.isNotBlank(financialAidTerm)) {
						 * testCopyJson.addProperty("term", financialAidTerm); } String formCode =
						 * XMLUtils.getChildNodeContent(afBoundDataElement, "formCode"); if
						 * (StringUtils.isNotBlank(formCode)) { testCopyJson.addProperty("formCode",
						 * formCode); }
						 */
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
			voiceMovementProdRequestJson.addProperty("workflowStartTime", workflowStartTime);
			voiceMovementProdRequestJson.addProperty("stepStartTime", stepStartTime);
			voiceMovementProdRequestJson.addProperty("stepName", wItem.getNode().getTitle());
			voiceMovementProdRequestJson.addProperty("stepInitiator", initiatedBy);
			voiceMovementProdRequestJson.addProperty("stepAssignee", currentAssignee);
			voiceMovementProdRequestJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			voiceMovementProdRequestJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			voiceMovementProdRequestJson.addProperty("witemId", wItem.getId());
			return voiceMovementProdRequestJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getGuestArtistProposalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject guestArtistProposalJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			guestArtistProposalJson.addProperty("sNo", count);

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
							guestArtistProposalJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							guestArtistProposalJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							guestArtistProposalJson.addProperty("lName", lName);
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
			guestArtistProposalJson.addProperty("workflowStartTime", workflowStartTime);
			guestArtistProposalJson.addProperty("stepStartTime", stepStartTime);
			guestArtistProposalJson.addProperty("stepName", wItem.getNode().getTitle());
			guestArtistProposalJson.addProperty("stepInitiator", initiatedBy);
			guestArtistProposalJson.addProperty("stepAssignee", currentAssignee);
			guestArtistProposalJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			guestArtistProposalJson.addProperty("witemId", wItem.getId());
			guestArtistProposalJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			return guestArtistProposalJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	
	@Override
	public JsonObject getSpecialEventProposalReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject specialEventProposalJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			specialEventProposalJson.addProperty("sNo", count);

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
							specialEventProposalJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							specialEventProposalJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							specialEventProposalJson.addProperty("lName", lName);
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
			specialEventProposalJson.addProperty("workflowStartTime", workflowStartTime);
			specialEventProposalJson.addProperty("stepStartTime", stepStartTime);
			specialEventProposalJson.addProperty("stepName", wItem.getNode().getTitle());
			specialEventProposalJson.addProperty("stepInitiator", initiatedBy);
			specialEventProposalJson.addProperty("stepAssignee", currentAssignee);
			specialEventProposalJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			specialEventProposalJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			specialEventProposalJson.addProperty("witemId", wItem.getId());
			return specialEventProposalJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	
	@Override
	public JsonObject getfacultyTravelProposalReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject facultyStaffTravelProposalJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			facultyStaffTravelProposalJson.addProperty("sNo", count);

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
							facultyStaffTravelProposalJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							facultyStaffTravelProposalJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							facultyStaffTravelProposalJson.addProperty("lName", lName);
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
			facultyStaffTravelProposalJson.addProperty("workflowStartTime", workflowStartTime);
			facultyStaffTravelProposalJson.addProperty("stepStartTime", stepStartTime);
			facultyStaffTravelProposalJson.addProperty("stepName", wItem.getNode().getTitle());
			facultyStaffTravelProposalJson.addProperty("stepInitiator", initiatedBy);
			facultyStaffTravelProposalJson.addProperty("stepAssignee", currentAssignee);
			facultyStaffTravelProposalJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			facultyStaffTravelProposalJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			facultyStaffTravelProposalJson.addProperty("witemId", wItem.getId());
			return facultyStaffTravelProposalJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getPetitionforRetroactiveWithdrawalReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject petitionforRetroactiveWithdrawalJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			petitionforRetroactiveWithdrawalJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CampusID");
						if (StringUtils.isNotBlank(cwid)) {
							petitionforRetroactiveWithdrawalJson.addProperty("cwid", cwid);
						}
						String caseId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(caseId)) {
							petitionforRetroactiveWithdrawalJson.addProperty("caseId", caseId);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(fName)) {
							petitionforRetroactiveWithdrawalJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(lName)) {
							petitionforRetroactiveWithdrawalJson.addProperty("lName", lName);
						}
						String graduationType = XMLUtils.getChildNodeContent(afBoundDataElement, "GraduationType");
						if (StringUtils.isNotBlank(graduationType)) {
							if(graduationType.equalsIgnoreCase("G")) {
								petitionforRetroactiveWithdrawalJson.addProperty("GraduationType", "Graduate");
							}else if(graduationType.equalsIgnoreCase("U")) {
								petitionforRetroactiveWithdrawalJson.addProperty("GraduationType", "UnderGraduate");
							}else {
								petitionforRetroactiveWithdrawalJson.addProperty("GraduationType", graduationType);
							}
						}
						String dqType = XMLUtils.getChildNodeContent(afBoundDataElement, "DQType");
						if (StringUtils.isNotBlank(dqType)) {
							if(dqType.equalsIgnoreCase("Y")) {
								petitionforRetroactiveWithdrawalJson.addProperty("DQType", "DQ");
							}else if(dqType.equalsIgnoreCase("N")) {
								petitionforRetroactiveWithdrawalJson.addProperty("DQType", "NON-DQ");
							}else {
								petitionforRetroactiveWithdrawalJson.addProperty("DQType", dqType);
							}
						}
						String withdrawalType = XMLUtils.getChildNodeContent(afBoundDataElement, "withdrawalType");
						if (StringUtils.isNotBlank(dqType)) {
							if(withdrawalType.equalsIgnoreCase("1")) {
								petitionforRetroactiveWithdrawalJson.addProperty("WithdrawalType", "Medical");
							}else if(withdrawalType.equalsIgnoreCase("2")) {
								petitionforRetroactiveWithdrawalJson.addProperty("WithdrawalType", "NON-Medical");
							}else {
								petitionforRetroactiveWithdrawalJson.addProperty("WithdrawalType", withdrawalType);
							}
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			petitionforRetroactiveWithdrawalJson.add("workflowStartTime", startTimeJson);
			petitionforRetroactiveWithdrawalJson.add("stepStartTime", stepStartTimeJson);
			petitionforRetroactiveWithdrawalJson.addProperty("stepName", wItem.getNode().getTitle());
			petitionforRetroactiveWithdrawalJson.addProperty("stepInitiator", initiatedBy);
			petitionforRetroactiveWithdrawalJson.addProperty("stepAssignee", currentAssignee);
			petitionforRetroactiveWithdrawalJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			petitionforRetroactiveWithdrawalJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			petitionforRetroactiveWithdrawalJson.addProperty("witemId", wItem.getId());
			return petitionforRetroactiveWithdrawalJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getPosthumousDegreeApprovalReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject posthumousDegreeApprovalReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			posthumousDegreeApprovalReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentCWID");
						if (StringUtils.isNotBlank(cwid)) {
							posthumousDegreeApprovalReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							posthumousDegreeApprovalReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							posthumousDegreeApprovalReportJson.addProperty("lName", lName);
						}
						String caseId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(caseId)) {
							posthumousDegreeApprovalReportJson.addProperty("caseId", caseId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			posthumousDegreeApprovalReportJson.add("workflowStartTime", startTimeJson);
			posthumousDegreeApprovalReportJson.add("stepStartTime", stepStartTimeJson);
			posthumousDegreeApprovalReportJson.addProperty("stepName", wItem.getNode().getTitle());
			posthumousDegreeApprovalReportJson.addProperty("stepInitiator", initiatedBy);
			posthumousDegreeApprovalReportJson.addProperty("stepAssignee", currentAssignee);
			posthumousDegreeApprovalReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			posthumousDegreeApprovalReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			posthumousDegreeApprovalReportJson.addProperty("witemId", wItem.getId());
			return posthumousDegreeApprovalReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getTeachGrantSupplementReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject teachGrantSupplementReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			teachGrantSupplementReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							teachGrantSupplementReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							teachGrantSupplementReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							teachGrantSupplementReportJson.addProperty("lName", lName);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			teachGrantSupplementReportJson.add("workflowStartTime", startTimeJson);
			teachGrantSupplementReportJson.add("stepStartTime", stepStartTimeJson);
			teachGrantSupplementReportJson.addProperty("stepName", wItem.getNode().getTitle());
			teachGrantSupplementReportJson.addProperty("stepInitiator", initiatedBy);
			teachGrantSupplementReportJson.addProperty("stepAssignee", currentAssignee);
			teachGrantSupplementReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			teachGrantSupplementReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			teachGrantSupplementReportJson.addProperty("witemId", wItem.getId());
			return teachGrantSupplementReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getFamilyCollegeEnrollmentVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject familyCollegeEnrollmentVerificationReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			familyCollegeEnrollmentVerificationReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							familyCollegeEnrollmentVerificationReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							familyCollegeEnrollmentVerificationReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							familyCollegeEnrollmentVerificationReportJson.addProperty("lName", lName);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			familyCollegeEnrollmentVerificationReportJson.add("workflowStartTime", startTimeJson);
			familyCollegeEnrollmentVerificationReportJson.add("stepStartTime", stepStartTimeJson);
			familyCollegeEnrollmentVerificationReportJson.addProperty("stepName", wItem.getNode().getTitle());
			familyCollegeEnrollmentVerificationReportJson.addProperty("stepInitiator", initiatedBy);
			familyCollegeEnrollmentVerificationReportJson.addProperty("stepAssignee", currentAssignee);
			familyCollegeEnrollmentVerificationReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			familyCollegeEnrollmentVerificationReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			familyCollegeEnrollmentVerificationReportJson.addProperty("witemId", wItem.getId());
			return familyCollegeEnrollmentVerificationReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getProjectedYearIncomeAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject projectedYearIncomeReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			projectedYearIncomeReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							projectedYearIncomeReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							projectedYearIncomeReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							projectedYearIncomeReportJson.addProperty("lName", lName);
						}
						String financialAidTerm = XMLUtils.getChildNodeContent(afBoundDataElement, "financialAidYear");
						if (StringUtils.isNotBlank(financialAidTerm)) {
							projectedYearIncomeReportJson.addProperty("term", financialAidTerm);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			projectedYearIncomeReportJson.add("workflowStartTime", startTimeJson);
			projectedYearIncomeReportJson.add("stepStartTime", stepStartTimeJson);
			// businessSupplementFormReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// businessSupplementFormReportJson.addProperty("stepStartTime", stepStartTime);
			projectedYearIncomeReportJson.addProperty("stepName", wItem.getNode().getTitle());
			projectedYearIncomeReportJson.addProperty("stepInitiator", initiatedBy);
			projectedYearIncomeReportJson.addProperty("stepAssignee", currentAssignee);
			projectedYearIncomeReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			projectedYearIncomeReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			projectedYearIncomeReportJson.addProperty("witemId", wItem.getId());
			return projectedYearIncomeReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getFacultyAssignedTimeAgreementATGuidelinesReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject facultyAssignedTimeAgreementATGuidelinesReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("sNo", count);

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
						String college = XMLUtils.getChildNodeContent(afBoundDataElement, "College");
						if (StringUtils.isNotBlank(college)) {
							facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("college", college);
						}
						String department = XMLUtils.getChildNodeContent(afBoundDataElement, "DepartmentDisplayName");
						if (StringUtils.isNotBlank(department)) {
							facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("department", department);
						}
						String term = XMLUtils.getChildNodeContent(afBoundDataElement, "Term");
						if (StringUtils.isNotBlank(term)) {
							facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("term", term);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			facultyAssignedTimeAgreementATGuidelinesReportJson.add("workflowStartTime", startTimeJson);
			facultyAssignedTimeAgreementATGuidelinesReportJson.add("stepStartTime", stepStartTimeJson);
			// businessSupplementFormReportJson.addProperty("workflowStartTime",
			// workflowStartTime);
			// businessSupplementFormReportJson.addProperty("stepStartTime", stepStartTime);
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("stepName", wItem.getNode().getTitle());
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("stepInitiator", initiatedBy);
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("stepAssignee", currentAssignee);
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			facultyAssignedTimeAgreementATGuidelinesReportJson.addProperty("witemId", wItem.getId());
			return facultyAssignedTimeAgreementATGuidelinesReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getSelectiveServiceRegVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject selectiveServiceRegVerificationReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			selectiveServiceRegVerificationReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							selectiveServiceRegVerificationReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							selectiveServiceRegVerificationReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							selectiveServiceRegVerificationReportJson.addProperty("lName", lName);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			selectiveServiceRegVerificationReportJson.add("workflowStartTime", startTimeJson);
			selectiveServiceRegVerificationReportJson.add("stepStartTime", stepStartTimeJson);
			selectiveServiceRegVerificationReportJson.addProperty("stepName", wItem.getNode().getTitle());
			selectiveServiceRegVerificationReportJson.addProperty("stepInitiator", initiatedBy);
			selectiveServiceRegVerificationReportJson.addProperty("stepAssignee", currentAssignee);
			selectiveServiceRegVerificationReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			selectiveServiceRegVerificationReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			selectiveServiceRegVerificationReportJson.addProperty("witemId", wItem.getId());
			return selectiveServiceRegVerificationReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getParentDependentVerificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject parentDependentVerificationReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentDependentVerificationReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentDependentVerificationReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							parentDependentVerificationReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							parentDependentVerificationReportJson.addProperty("lName", lName);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentDependentVerificationReportJson.add("workflowStartTime", startTimeJson);
			parentDependentVerificationReportJson.add("stepStartTime", stepStartTimeJson);
			parentDependentVerificationReportJson.addProperty("stepName", wItem.getNode().getTitle());
			parentDependentVerificationReportJson.addProperty("stepInitiator", initiatedBy);
			parentDependentVerificationReportJson.addProperty("stepAssignee", currentAssignee);
			parentDependentVerificationReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			parentDependentVerificationReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			parentDependentVerificationReportJson.addProperty("witemId", wItem.getId());
			return parentDependentVerificationReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getVolunteerFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject csufVolunteerFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			csufVolunteerFormReportJson.addProperty("sNo", count);

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
						String caseId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(caseId)) {
							csufVolunteerFormReportJson.addProperty("caseId", caseId);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							csufVolunteerFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							csufVolunteerFormReportJson.addProperty("lName", lName);
						}
						String formName = XMLUtils.getChildNodeContent(afBoundDataElement, "formTitle");
						if (StringUtils.isNotBlank(formName)) {
							csufVolunteerFormReportJson.addProperty("formName", formName);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			csufVolunteerFormReportJson.add("workflowStartTime", startTimeJson);
			csufVolunteerFormReportJson.add("stepStartTime", stepStartTimeJson);
			csufVolunteerFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			csufVolunteerFormReportJson.addProperty("stepInitiator", initiatedBy);
			csufVolunteerFormReportJson.addProperty("stepAssignee", currentAssignee);
			csufVolunteerFormReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			csufVolunteerFormReportJson.addProperty("witemId", wItem.getId());
			csufVolunteerFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			return csufVolunteerFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getPositionActionFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject positionFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			positionFormReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "AppropriateRequestorCWID");
						if (StringUtils.isNotBlank(cwid)) {
							positionFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "AppropriateRequestorFirstName");
						if (StringUtils.isNotBlank(fName)) {
							positionFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "AppropriateRequestorLastName");
						if (StringUtils.isNotBlank(lName)) {
							positionFormReportJson.addProperty("lName", lName);
						}
						String requestType = XMLUtils.getChildNodeContent(afBoundDataElement, "RequestType");
						if (StringUtils.isNotBlank(requestType)) {
							positionFormReportJson.addProperty("requestType", requestType);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							positionFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			positionFormReportJson.add("workflowStartTime", startTimeJson);
			positionFormReportJson.add("stepStartTime", stepStartTimeJson);
			positionFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			positionFormReportJson.addProperty("stepInitiator", initiatedBy);
			positionFormReportJson.addProperty("stepAssignee", currentAssignee);
			positionFormReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			positionFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			positionFormReportJson.addProperty("witemId", wItem.getId());
			return positionFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getDqAppealReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject dqAppealReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			dqAppealReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid");
						if (StringUtils.isNotBlank(cwid)) {
							dqAppealReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							dqAppealReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							dqAppealReportJson.addProperty("lName", lName);
						}
						String major = XMLUtils.getChildNodeContent(afBoundDataElement, "major");
						if (StringUtils.isNotBlank(major)) {
							dqAppealReportJson.addProperty("major", major);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							dqAppealReportJson.addProperty("formId", formId);
						}
						String gpa = XMLUtils.getChildNodeContent(afBoundDataElement, "GPA");
						if (StringUtils.isNotBlank(gpa)) {
							dqAppealReportJson.addProperty("gpa", gpa);
						}
						String units = XMLUtils.getChildNodeContent(afBoundDataElement, "Units");
						if (StringUtils.isNotBlank(units)) {
							dqAppealReportJson.addProperty("units", units);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			dqAppealReportJson.add("workflowStartTime", startTimeJson);
			dqAppealReportJson.add("stepStartTime", stepStartTimeJson);
			dqAppealReportJson.addProperty("stepName", wItem.getNode().getTitle());
			dqAppealReportJson.addProperty("stepInitiator", initiatedBy);
			dqAppealReportJson.addProperty("stepAssignee", currentAssignee);
			dqAppealReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			dqAppealReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			dqAppealReportJson.addProperty("witemId", wItem.getId());
			return dqAppealReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getNachaFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject nachaFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			//String initiatedBy = "";
			nachaFormReportJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
				/*	Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
					}*/
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							nachaFormReportJson.addProperty("formId", formId);
						}
						String amount = XMLUtils.getChildNodeContent(afBoundDataElement, "TotalAmount");
						if (StringUtils.isNotBlank(amount)) {
							nachaFormReportJson.addProperty("amount", amount);
						}
						String runId = XMLUtils.getChildNodeContent(afBoundDataElement, "RunId");
						if (StringUtils.isNotBlank(runId)) {
							nachaFormReportJson.addProperty("runId", runId);
						}
						String reportDate = XMLUtils.getChildNodeContent(afBoundDataElement, "ReportDate");
						if (StringUtils.isNotBlank(reportDate)) {
							nachaFormReportJson.addProperty("reportDate", reportDate);
						}
						String totalCount = XMLUtils.getChildNodeContent(afBoundDataElement, "TotalCount");
						if (StringUtils.isNotBlank(totalCount)) {
							nachaFormReportJson.addProperty("totalCount", totalCount);
						}
						String settlementDate = XMLUtils.getChildNodeContent(afBoundDataElement, "EstimatedSettlementDate");
						if (StringUtils.isNotBlank(settlementDate)) {
							nachaFormReportJson.addProperty("settlementDate", settlementDate);
						}
						String title = XMLUtils.getChildNodeContent(afBoundDataElement, "Title");
						if (StringUtils.isNotBlank(title)) {
							nachaFormReportJson.addProperty("title", title);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			nachaFormReportJson.add("workflowStartTime", startTimeJson);
			nachaFormReportJson.add("stepStartTime", stepStartTimeJson);
			nachaFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			nachaFormReportJson.addProperty("stepInitiator", "admin");
			nachaFormReportJson.addProperty("stepAssignee", currentAssignee);
			nachaFormReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			nachaFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			nachaFormReportJson.addProperty("witemId", wItem.getId());
			return nachaFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getAppealofaDeclinedFeeWaiverFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject appealofaDeclinedFeeWaiverReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			appealofaDeclinedFeeWaiverReportJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
						String term = XMLUtils.getChildNodeContent(afUnBoundDataElement, "termValue");
						if (StringUtils.isNotBlank(term)) {
							appealofaDeclinedFeeWaiverReportJson.addProperty("term", term);
						}
					}
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "FeeWaiverHolderCWID");
						if (StringUtils.isNotBlank(cwid)) {
							appealofaDeclinedFeeWaiverReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FeeWaiverHolderFirstName");
						if (StringUtils.isNotBlank(fName)) {
							appealofaDeclinedFeeWaiverReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "FeeWaiverHolderLastName");
						if (StringUtils.isNotBlank(lName)) {
							appealofaDeclinedFeeWaiverReportJson.addProperty("lName", lName);
						}
						String stafforFaculty = XMLUtils.getChildNodeContent(afBoundDataElement, "FeeWaiverHoldeQualifyingPositionRB");
						if (StringUtils.isNotBlank(stafforFaculty)) {
							appealofaDeclinedFeeWaiverReportJson.addProperty("stafforFaculty", stafforFaculty);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							appealofaDeclinedFeeWaiverReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			appealofaDeclinedFeeWaiverReportJson.add("workflowStartTime", startTimeJson);
			appealofaDeclinedFeeWaiverReportJson.add("stepStartTime", stepStartTimeJson);
			appealofaDeclinedFeeWaiverReportJson.addProperty("stepName", wItem.getNode().getTitle());
			appealofaDeclinedFeeWaiverReportJson.addProperty("stepInitiator", initiatedBy);
			appealofaDeclinedFeeWaiverReportJson.addProperty("stepAssignee", currentAssignee);
			appealofaDeclinedFeeWaiverReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			appealofaDeclinedFeeWaiverReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			appealofaDeclinedFeeWaiverReportJson.addProperty("witemId", wItem.getId());
			return appealofaDeclinedFeeWaiverReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	@Override
	public JsonObject getNewAssetAcquisitionReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject newAssetAcqReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			newAssetAcqReportJson.addProperty("sNo", count);

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
							newAssetAcqReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							newAssetAcqReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							newAssetAcqReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							newAssetAcqReportJson.addProperty("formId", formId);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							newAssetAcqReportJson.addProperty("deptID", deptId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			newAssetAcqReportJson.add("workflowStartTime", startTimeJson);
			newAssetAcqReportJson.add("stepStartTime", stepStartTimeJson);
			newAssetAcqReportJson.addProperty("stepName", wItem.getNode().getTitle());
			newAssetAcqReportJson.addProperty("stepInitiator", initiatedBy);
			newAssetAcqReportJson.addProperty("stepAssignee", currentAssignee);
			newAssetAcqReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			newAssetAcqReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			newAssetAcqReportJson.addProperty("witemId", wItem.getId());
			return newAssetAcqReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	
	@Override
	public JsonObject getLostStolenPropertyReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject lostStolenPropertyReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			lostStolenPropertyReportJson.addProperty("sNo", count);

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
							lostStolenPropertyReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							lostStolenPropertyReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							lostStolenPropertyReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							lostStolenPropertyReportJson.addProperty("formId", formId);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							lostStolenPropertyReportJson.addProperty("deptID", deptId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			lostStolenPropertyReportJson.add("workflowStartTime", startTimeJson);
			lostStolenPropertyReportJson.add("stepStartTime", stepStartTimeJson);
			lostStolenPropertyReportJson.addProperty("stepName", wItem.getNode().getTitle());
			lostStolenPropertyReportJson.addProperty("stepInitiator", initiatedBy);
			lostStolenPropertyReportJson.addProperty("stepAssignee", currentAssignee);
			lostStolenPropertyReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			lostStolenPropertyReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			lostStolenPropertyReportJson.addProperty("witemId", wItem.getId());
			return lostStolenPropertyReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getVehicleReleaseReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject vehicleReleaseReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			vehicleReleaseReportJson.addProperty("sNo", count);

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
							vehicleReleaseReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							vehicleReleaseReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							vehicleReleaseReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							vehicleReleaseReportJson.addProperty("formId", formId);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							vehicleReleaseReportJson.addProperty("deptID", deptId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			vehicleReleaseReportJson.add("workflowStartTime", startTimeJson);
			vehicleReleaseReportJson.add("stepStartTime", stepStartTimeJson);
			vehicleReleaseReportJson.addProperty("stepName", wItem.getNode().getTitle());
			vehicleReleaseReportJson.addProperty("stepInitiator", initiatedBy);
			vehicleReleaseReportJson.addProperty("stepAssignee", currentAssignee);
			vehicleReleaseReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			vehicleReleaseReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			vehicleReleaseReportJson.addProperty("witemId", wItem.getId());
			return vehicleReleaseReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getOffCampusAgreementReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject offCampusAgreementReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			offCampusAgreementReportJson.addProperty("sNo", count);

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
							offCampusAgreementReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							offCampusAgreementReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							offCampusAgreementReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							offCampusAgreementReportJson.addProperty("formId", formId);
						}
						String deptId = XMLUtils.getChildNodeContent(afBoundDataElement, "DeptID");
						if (StringUtils.isNotBlank(deptId)) {
							offCampusAgreementReportJson.addProperty("deptID", deptId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			offCampusAgreementReportJson.add("workflowStartTime", startTimeJson);
			offCampusAgreementReportJson.add("stepStartTime", stepStartTimeJson);
			offCampusAgreementReportJson.addProperty("stepName", wItem.getNode().getTitle());
			offCampusAgreementReportJson.addProperty("stepInitiator", initiatedBy);
			offCampusAgreementReportJson.addProperty("stepAssignee", currentAssignee);
			offCampusAgreementReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			offCampusAgreementReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			offCampusAgreementReportJson.addProperty("witemId", wItem.getId());
			return offCampusAgreementReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getVerificationReqFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject verificationRequestReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			verificationRequestReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CWID_SSN");
						if (StringUtils.isNotBlank(cwid)) {
							verificationRequestReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							verificationRequestReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							verificationRequestReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							verificationRequestReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			verificationRequestReportJson.add("workflowStartTime", startTimeJson);
			verificationRequestReportJson.add("stepStartTime", stepStartTimeJson);
			verificationRequestReportJson.addProperty("stepName", wItem.getNode().getTitle());
			verificationRequestReportJson.addProperty("stepInitiator", initiatedBy);
			verificationRequestReportJson.addProperty("stepAssignee", currentAssignee);
			verificationRequestReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			verificationRequestReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			verificationRequestReportJson.addProperty("witemId", wItem.getId());
			return verificationRequestReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getRetroactiveLeaveOfAbsenceReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject retroactiveLeaveOfAbsenceJson = new JsonObject();
			String currentAssignee = wItem.getCurrentAssignee();
			retroactiveLeaveOfAbsenceJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");

					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String studentCWID = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentCWID");
						if (StringUtils.isNotBlank(studentCWID)) {
							retroactiveLeaveOfAbsenceJson.addProperty("studentCWID", studentCWID);
							log.info("studentCWID value = " + studentCWID);
						}
						String studentFirstName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(studentFirstName)) {
							retroactiveLeaveOfAbsenceJson.addProperty("studentFirstName", studentFirstName);
							log.info("studentFirstName value = " + studentFirstName);
						}
						String studentLastName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(studentLastName)) {
							retroactiveLeaveOfAbsenceJson.addProperty("studentLastName", studentLastName);
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

			retroactiveLeaveOfAbsenceJson.addProperty("workflowStartTime", workflowStartTime);
			retroactiveLeaveOfAbsenceJson.addProperty("stepStartTime", stepStartTime);
			retroactiveLeaveOfAbsenceJson.addProperty("stepName", wItem.getNode().getTitle());
			retroactiveLeaveOfAbsenceJson.addProperty("stepInitiator", wItem.getWorkflow().getInitiator());
			retroactiveLeaveOfAbsenceJson.addProperty("stepAssignee", currentAssignee);
			retroactiveLeaveOfAbsenceJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			retroactiveLeaveOfAbsenceJson.addProperty("witemId", wItem.getId());
			retroactiveLeaveOfAbsenceJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			return retroactiveLeaveOfAbsenceJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getPropertySurveyFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject propertySurveyFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			propertySurveyFormReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "cwid_requestor");
						if (StringUtils.isNotBlank(cwid)) {
							propertySurveyFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "firstName");
						if (StringUtils.isNotBlank(fName)) {
							propertySurveyFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "lastName");
						if (StringUtils.isNotBlank(lName)) {
							propertySurveyFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							propertySurveyFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			propertySurveyFormReportJson.add("workflowStartTime", startTimeJson);
			propertySurveyFormReportJson.add("stepStartTime", stepStartTimeJson);
			propertySurveyFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			propertySurveyFormReportJson.addProperty("stepInitiator", initiatedBy);
			propertySurveyFormReportJson.addProperty("stepAssignee", currentAssignee);
			propertySurveyFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			propertySurveyFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			propertySurveyFormReportJson.addProperty("witemId", wItem.getId());
			return propertySurveyFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getPropertyTransferFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject propertyTransferFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			propertyTransferFormReportJson.addProperty("sNo", count);

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
							propertyTransferFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "CurrentCustodianFirstName");
						if (StringUtils.isNotBlank(fName)) {
							propertyTransferFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "CurrentCustodianLastName");
						if (StringUtils.isNotBlank(lName)) {
							propertyTransferFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							propertyTransferFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			propertyTransferFormReportJson.add("workflowStartTime", startTimeJson);
			propertyTransferFormReportJson.add("stepStartTime", stepStartTimeJson);
			propertyTransferFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			propertyTransferFormReportJson.addProperty("stepInitiator", initiatedBy);
			propertyTransferFormReportJson.addProperty("stepAssignee", currentAssignee);
			propertyTransferFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			propertyTransferFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			propertyTransferFormReportJson.addProperty("witemId", wItem.getId());
			return propertyTransferFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getRequestForInvoiceFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject requestForInvoiceFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			requestForInvoiceFormReportJson.addProperty("sNo", count);

			String payloadPath = wItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
						initiatedBy = XMLUtils.getChildNodeContent(afUnBoundDataElement, "WorkflowInitiator");
					}
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "CWID");
						if (StringUtils.isNotBlank(cwid)) {
							requestForInvoiceFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "RequestorFirstName");
						if (StringUtils.isNotBlank(fName)) {
							requestForInvoiceFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "RequestorLastName");
						if (StringUtils.isNotBlank(lName)) {
							requestForInvoiceFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							requestForInvoiceFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			requestForInvoiceFormReportJson.add("workflowStartTime", startTimeJson);
			requestForInvoiceFormReportJson.add("stepStartTime", stepStartTimeJson);
			requestForInvoiceFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			requestForInvoiceFormReportJson.addProperty("stepInitiator", initiatedBy);
			requestForInvoiceFormReportJson.addProperty("stepAssignee", currentAssignee);
			requestForInvoiceFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			requestForInvoiceFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			requestForInvoiceFormReportJson.addProperty("witemId", wItem.getId());
			return requestForInvoiceFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getDesignationUniversityCashCollectionFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject designationUniversityCashCollectionFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			designationUniversityCashCollectionFormReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "Cwid");
						if (StringUtils.isNotBlank(cwid)) {
							designationUniversityCashCollectionFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorFirstName");
						if (StringUtils.isNotBlank(fName)) {
							designationUniversityCashCollectionFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorLastName");
						if (StringUtils.isNotBlank(lName)) {
							designationUniversityCashCollectionFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseId");
						if (StringUtils.isNotBlank(formId)) {
							designationUniversityCashCollectionFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			designationUniversityCashCollectionFormReportJson.add("workflowStartTime", startTimeJson);
			designationUniversityCashCollectionFormReportJson.add("stepStartTime", stepStartTimeJson);
			designationUniversityCashCollectionFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			designationUniversityCashCollectionFormReportJson.addProperty("stepInitiator", initiatedBy);
			designationUniversityCashCollectionFormReportJson.addProperty("stepAssignee", currentAssignee);
			designationUniversityCashCollectionFormReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			designationUniversityCashCollectionFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			designationUniversityCashCollectionFormReportJson.addProperty("witemId", wItem.getId());
			return designationUniversityCashCollectionFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getUniversityWithdrawalFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject universityWithdrawalFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			universityWithdrawalFormReportJson.addProperty("sNo", count);

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
							universityWithdrawalFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentFirstName");
						if (StringUtils.isNotBlank(fName)) {
							universityWithdrawalFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "StudentLastName");
						if (StringUtils.isNotBlank(lName)) {
							universityWithdrawalFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseId");
						if (StringUtils.isNotBlank(formId)) {
							universityWithdrawalFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			universityWithdrawalFormReportJson.add("workflowStartTime", startTimeJson);
			universityWithdrawalFormReportJson.add("stepStartTime", stepStartTimeJson);
			universityWithdrawalFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			universityWithdrawalFormReportJson.addProperty("stepInitiator", initiatedBy);
			universityWithdrawalFormReportJson.addProperty("stepAssignee", currentAssignee);
			universityWithdrawalFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			universityWithdrawalFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			universityWithdrawalFormReportJson.addProperty("witemId", wItem.getId());
			return universityWithdrawalFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject getAuthorizationDriverRecordInfoFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject authorizationDriverRecordInfoFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			authorizationDriverRecordInfoFormReportJson.addProperty("sNo", count);

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
							authorizationDriverRecordInfoFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorFirstName");
						if (StringUtils.isNotBlank(fName)) {
							authorizationDriverRecordInfoFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorLastName");
						if (StringUtils.isNotBlank(lName)) {
							authorizationDriverRecordInfoFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseId");
						if (StringUtils.isNotBlank(formId)) {
							authorizationDriverRecordInfoFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			authorizationDriverRecordInfoFormReportJson.add("workflowStartTime", startTimeJson);
			authorizationDriverRecordInfoFormReportJson.add("stepStartTime", stepStartTimeJson);
			authorizationDriverRecordInfoFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			authorizationDriverRecordInfoFormReportJson.addProperty("stepInitiator", initiatedBy);
			authorizationDriverRecordInfoFormReportJson.addProperty("stepAssignee", currentAssignee);
			authorizationDriverRecordInfoFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			authorizationDriverRecordInfoFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			authorizationDriverRecordInfoFormReportJson.addProperty("witemId", wItem.getId());
			return authorizationDriverRecordInfoFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getAuthorizationPrivateOwnedVehiclesFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject authorizationPrivateOwnedVehiclesFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("sNo", count);

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
							authorizationPrivateOwnedVehiclesFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorFirstName");
						if (StringUtils.isNotBlank(fName)) {
							authorizationPrivateOwnedVehiclesFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "InitiatorLastName");
						if (StringUtils.isNotBlank(lName)) {
							authorizationPrivateOwnedVehiclesFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseId");
						if (StringUtils.isNotBlank(formId)) {
							authorizationPrivateOwnedVehiclesFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			authorizationPrivateOwnedVehiclesFormReportJson.add("workflowStartTime", startTimeJson);
			authorizationPrivateOwnedVehiclesFormReportJson.add("stepStartTime", stepStartTimeJson);
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("stepInitiator", initiatedBy);
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("stepAssignee", currentAssignee);
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			authorizationPrivateOwnedVehiclesFormReportJson.addProperty("witemId", wItem.getId());
			return authorizationPrivateOwnedVehiclesFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public JsonObject getAuthorizationVehicleUniversityBusinessFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject authorizationVehicleUniversityBusinessFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("sNo", count);

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
							authorizationVehicleUniversityBusinessFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "DriverFirstName");
						if (StringUtils.isNotBlank(fName)) {
							authorizationVehicleUniversityBusinessFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "DriverLastName");
						if (StringUtils.isNotBlank(lName)) {
							authorizationVehicleUniversityBusinessFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseId");
						if (StringUtils.isNotBlank(formId)) {
							authorizationVehicleUniversityBusinessFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			authorizationVehicleUniversityBusinessFormReportJson.add("workflowStartTime", startTimeJson);
			authorizationVehicleUniversityBusinessFormReportJson.add("stepStartTime", stepStartTimeJson);
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("stepInitiator", initiatedBy);
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("stepAssignee", currentAssignee);
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("workflowInstanceId",
					wItem.getWorkflow().getId());
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			authorizationVehicleUniversityBusinessFormReportJson.addProperty("witemId", wItem.getId());
			return authorizationVehicleUniversityBusinessFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	
	@Override
	public JsonObject getparentalConsentAIFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count) {
		try {
			JsonObject parentalConsentAIFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			parentalConsentAIFormReportJson.addProperty("sNo", count);

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
						String cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "studentCwid");
						if (StringUtils.isNotBlank(cwid)) {
							parentalConsentAIFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "studentfirstName");
						if (StringUtils.isNotBlank(fName)) {
							parentalConsentAIFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "studentlastName");
						if (StringUtils.isNotBlank(lName)) {
							parentalConsentAIFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
						if (StringUtils.isNotBlank(formId)) {
							parentalConsentAIFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			parentalConsentAIFormReportJson.add("workflowStartTime", startTimeJson);
			parentalConsentAIFormReportJson.add("stepStartTime", stepStartTimeJson);
			// parentalConsentAIFormReportJson.addProperty("stepName",
			// wItem.getNode().getTitle());
			parentalConsentAIFormReportJson.addProperty("stepInitiator", initiatedBy);
			// parentalConsentAIFormReportJson.addProperty("stepAssignee", currentAssignee);
			parentalConsentAIFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			parentalConsentAIFormReportJson.addProperty("workflowModelName",
					wItem.getWorkflow().getWorkflowModel().getTitle());
			parentalConsentAIFormReportJson.addProperty("witemId", wItem.getId());
			return parentalConsentAIFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject dottedLineNonCHRSFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject dottedLineNonCHRSFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			dottedLineNonCHRSFormReportJson.addProperty("sNo", count);

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
							dottedLineNonCHRSFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							dottedLineNonCHRSFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							dottedLineNonCHRSFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseID");
						if (StringUtils.isNotBlank(formId)) {
							dottedLineNonCHRSFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			dottedLineNonCHRSFormReportJson.add("workflowStartTime", startTimeJson);
			dottedLineNonCHRSFormReportJson.add("stepStartTime", stepStartTimeJson);
			dottedLineNonCHRSFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			dottedLineNonCHRSFormReportJson.addProperty("stepInitiator", initiatedBy);
			dottedLineNonCHRSFormReportJson.addProperty("stepAssignee", currentAssignee);
			dottedLineNonCHRSFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			dottedLineNonCHRSFormReportJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			dottedLineNonCHRSFormReportJson.addProperty("witemId", wItem.getId());
			return dottedLineNonCHRSFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public JsonObject vendorFeeWaiverReductionFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem, int count) {
		try {
			JsonObject vendorFeeWaiverReductionFormReportJson = new JsonObject();

			String currentAssignee = wItem.getCurrentAssignee();
			String initiatedBy = "";
			vendorFeeWaiverReductionFormReportJson.addProperty("sNo", count);

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
							vendorFeeWaiverReductionFormReportJson.addProperty("cwid", cwid);
						}
						String fName = XMLUtils.getChildNodeContent(afBoundDataElement, "FirstName");
						if (StringUtils.isNotBlank(fName)) {
							vendorFeeWaiverReductionFormReportJson.addProperty("fName", fName);
						}
						String lName = XMLUtils.getChildNodeContent(afBoundDataElement, "LastName");
						if (StringUtils.isNotBlank(lName)) {
							vendorFeeWaiverReductionFormReportJson.addProperty("lName", lName);
						}
						String formId = XMLUtils.getChildNodeContent(afBoundDataElement, "CaseID");
						if (StringUtils.isNotBlank(formId)) {
							vendorFeeWaiverReductionFormReportJson.addProperty("formId", formId);
						}
					}
				}
			}
			String workflowStartTime = CSUFUtils.convertDateToString(wItem.getWorkflow().getTimeStarted(),
					DATE_FORMAT_US);
			if (StringUtils.isBlank(workflowStartTime)) {
				workflowStartTime = wItem.getWorkflow().getTimeStarted().toString();
			}
			JsonObject startTimeJson = new JsonObject();
			startTimeJson.addProperty("display", workflowStartTime);
			startTimeJson.addProperty("timestamp", wItem.getWorkflow().getTimeStarted().getTime());
			String stepStartTime = CSUFUtils.convertDateToString(wItem.getProgressBeginTime(), DATE_FORMAT_US);
			if (StringUtils.isBlank(stepStartTime)) {
				stepStartTime = wItem.getProgressBeginTime().toString();
			}
			JsonObject stepStartTimeJson = new JsonObject();
			stepStartTimeJson.addProperty("display", stepStartTime);
			stepStartTimeJson.addProperty("timestamp", wItem.getProgressBeginTime().getTime());
			vendorFeeWaiverReductionFormReportJson.add("workflowStartTime", startTimeJson);
			vendorFeeWaiverReductionFormReportJson.add("stepStartTime", stepStartTimeJson);
			vendorFeeWaiverReductionFormReportJson.addProperty("stepName", wItem.getNode().getTitle());
			vendorFeeWaiverReductionFormReportJson.addProperty("stepInitiator", initiatedBy);
			vendorFeeWaiverReductionFormReportJson.addProperty("stepAssignee", currentAssignee);
			vendorFeeWaiverReductionFormReportJson.addProperty("workflowInstanceId", wItem.getWorkflow().getId());
			vendorFeeWaiverReductionFormReportJson.addProperty("workflowModelName", wItem.getWorkflow().getWorkflowModel().getTitle());
			vendorFeeWaiverReductionFormReportJson.addProperty("witemId", wItem.getId());
			return vendorFeeWaiverReductionFormReportJson;
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

}