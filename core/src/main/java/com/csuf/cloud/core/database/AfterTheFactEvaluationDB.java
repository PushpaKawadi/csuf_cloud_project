package com.csuf.cloud.core.database;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;

import javax.jcr.RepositoryException;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.Route;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.google.gson.JsonArray;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.DatabaseUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(property = { "service.description=After The Fact Evaluation DB Save", "service.vendor=ThoughtFocus",
		"process.label=AfterTheFactEvaluationDB" })
public class AfterTheFactEvaluationDB implements WorkflowProcess {

	@Reference
	private GlobalConfigCSUFService globalConfigFilenetService;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;

	@Reference
	private TaskService taskService;

	private static final Logger log = LoggerFactory.getLogger(AfterTheFactEvaluationDB.class);

	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws WorkflowException {
		Connection conn = null;
		String tableName = "AEM_AFTER_THE_FACT_EVALUATION";
		String formName = "After the Fact Evaluation";
		String assignee = "";
		String cwid = "";
		LinkedHashMap<String, Object> dataMap = null;
		MetaDataMap metaDataMapVal = workItem.getWorkflow().getWorkflowData().getMetaDataMap();

		String dataSourceVal = globalConfigFilenetService.getAEMFormsDatabaseSource();
		conn = jdbcConnectionService.getDBConn(dataSourceVal);

		String payloadPath = workItem.getWorkflowData().getPayload().toString();
		ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
		String workflowInstanceID = workItem.getWorkflow().getId();
		log.debug("Workflowinstanceid:" + workflowInstanceID);
		if (StringUtils.isNotBlank(payloadPath)) {
			InputStream is = null;
			try {
				is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					String dataXML = XMLUtils.prettyPrintAsString(doc);
					org.w3c.dom.NodeList nList = doc.getElementsByTagName("afBoundData");
					for (int temp = 0; temp < nList.getLength(); temp++) {
						org.w3c.dom.Node nNode = nList.item(temp);
						if (nNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {
							try {
								org.w3c.dom.Element eElement = (org.w3c.dom.Element) nNode;
								dataMap = new LinkedHashMap<String, Object>();
								log.debug("index=" + temp);
								cwid = eElement.getElementsByTagName("CWID").item(0).getTextContent();
								dataMap.put("CWID", cwid);
								dataMap.put("FACULTY_NAME",
										eElement.getElementsByTagName("FacultyName").item(0).getTextContent());
								dataMap.put("COLLEGE",
										eElement.getElementsByTagName("College").item(0).getTextContent());
								dataMap.put("TIME_REASON",
										eElement.getElementsByTagName("TimeReason").item(0).getTextContent());
								dataMap.put("TERM", eElement.getElementsByTagName("Term").item(0).getTextContent());
								dataMap.put("WTU",
										eElement.getElementsByTagName("WTUPerTerm").item(0).getTextContent());
								dataMap.put("BRIEF_ASSIGNMENT",
										eElement.getElementsByTagName("BriefAssignment").item(0).getTextContent());
								dataMap.put("AFTER_THE_FACT_STATUS",
										eElement.getElementsByTagName("AfterTheFactStatus").item(0).getTextContent());
								dataMap.put("AFTER_THE_FACT_EVALUATION", eElement
										.getElementsByTagName("AfterTheFactEvaluation").item(0).getTextContent());
								dataMap.put("FACULTY_SIGNATURE_NAME",
										eElement.getElementsByTagName("FacultySignatureName").item(0).getTextContent());
								dataMap.put("FACULTY_SIGNATURE",
										eElement.getElementsByTagName("FacultySignature").item(0).getTextContent());
								String facultySignDate = eElement.getElementsByTagName("FacultySignDate").item(0)
										.getTextContent();
								Object facultySignDateObj = "";
								if (facultySignDate != null && facultySignDate != "") {
									Date facultySignDateNew = Date.valueOf(facultySignDate);
									facultySignDateObj = facultySignDateNew;
								}
								dataMap.put("FACULTY_SIGNATURE_DATE", facultySignDateObj);
								dataMap.put("FACULTY_COMMENT",
										eElement.getElementsByTagName("FacultyComment").item(0).getTextContent());
								dataMap.put("CHAIR_SIGNATURE_NAME",
										eElement.getElementsByTagName("ChairSignatureName").item(0).getTextContent());
								dataMap.put("CHAIR_SIGNATURE",
										eElement.getElementsByTagName("ChairSignature").item(0).getTextContent());
								String chairSignDate = eElement.getElementsByTagName("ChairSignDate").item(0)
										.getTextContent();
								Object chairSignDateObj = "";
								if (chairSignDate != null && chairSignDate != "") {
									Date chairSignDateNew = Date.valueOf(chairSignDate);
									chairSignDateObj = chairSignDateNew;
								}
								dataMap.put("CHAIR_SIGNATURE_DATE", chairSignDateObj);
								dataMap.put("CHAIR_COMMENT",
										eElement.getElementsByTagName("ChairComment").item(0).getTextContent());
								dataMap.put("FACULTY_FIRST_NAME",
										eElement.getElementsByTagName("FacultyFirstName").item(0).getTextContent());
								dataMap.put("FACULTY_LAST_NAME",
										eElement.getElementsByTagName("FacultyLastName").item(0).getTextContent());
								dataMap.put("FACULTY_USER_ID",
										eElement.getElementsByTagName("FacultyUserId").item(0).getTextContent());
								dataMap.put("FACULTY_EMAIL_ID",
										eElement.getElementsByTagName("FacultyEmailId").item(0).getTextContent());
								dataMap.put("CHAIR_NAME",
										eElement.getElementsByTagName("ChairName").item(0).getTextContent());
								dataMap.put("CHAIR_USER_ID",
										eElement.getElementsByTagName("ChairUserId").item(0).getTextContent());
								dataMap.put("CHAIR_EMAIL_ID",
										eElement.getElementsByTagName("ChairEmailId").item(0).getTextContent());
								dataMap.put("DEPT_ID",
										eElement.getElementsByTagName("DeptId").item(0).getTextContent());
								dataMap.put("COLLEGE_ID",
										eElement.getElementsByTagName("CollegeId").item(0).getTextContent());
								dataMap.put("DEPT_NAME",
										eElement.getElementsByTagName("DeptName").item(0).getTextContent());
								dataMap.put("UNIQUE_ID",
										eElement.getElementsByTagName("UniqueId").item(0).getTextContent());
								dataMap.put("DATA_XML", dataXML);
								dataMap.put("STAGE_INDICATOR",
										eElement.getElementsByTagName("StageIndicator").item(0).getTextContent());
								log.debug("DataMap values :{}", dataMap);
								List<Route> backRoutesList = workflowSession.getBackRoutes(workItem, false);
								JsonArray backRoutesJson = new JsonArray();
								for (Route backRoute : backRoutesList) {
									backRoutesJson.add(backRoute.getName());
								}
								String saveHistoryBackRoute = "";
								if (backRoutesJson.size() == 1) {
									saveHistoryBackRoute = backRoutesList.get(0).getName();
									log.debug("Executing if block ");
								} else {
									saveHistoryBackRoute = backRoutesList.get(1).getName();
									String wId = workItem.getId().replace("VolatileWorkItem_", "/workItems/");
									String firstStr = wId.substring(0, wId.indexOf('_'));
									String secString = wId.substring(wId.indexOf('_') + 1, wId.length());
									String t1 = firstStr.replaceAll("[^0-9]+", "");
									int a1 = Integer.parseInt(t1);
									a1 = a1 - 2;
									firstStr = firstStr.replaceAll(t1, String.valueOf(a1));
									String workItemId = workflowInstanceID.concat(firstStr).concat("_")
											.concat(secString);
									assignee = taskService.getTaskAssignee(workItemId);
									log.debug("Executing else block assignee : {}", assignee);
								}
								dataMap.put("LAST_STEP", saveHistoryBackRoute);
								if (dataMap.get("LAST_STEP").equals("Department Chair Review")) {
									if (metaDataMapVal.containsKey("actionTakenByChair")) {
										if (metaDataMapVal.get("actionTakenByChair").toString()
												.equalsIgnoreCase("Approve")) {
											dataMap.put("WORKFLOW_STATUS", "COMPLETED");
										} else {
											dataMap.put("WORKFLOW_STATUS", "RUNNING");
										}
									} else {
										dataMap.put("WORKFLOW_STATUS", "RUNNING");
									}
								} else {
									dataMap.put("WORKFLOW_STATUS", "RUNNING");
								}
								dataMap.put("LAST_STEP_ASSIGNEE", assignee);
								dataMap.put("WORKFLOW_INSTANCE_ID", workflowInstanceID);

							} catch (Exception e) {
								log.debug(Arrays.toString(e.getStackTrace()) + "Message-----" + e.getMessage());
							}
						}
					}

				}
				if (conn != null) {
					DatabaseUtils dbUtil = new DatabaseUtils();
					log.error("Connection Successfull");
					String resultData = dbUtil.getSPEEvalData(conn, cwid, "CWID", workflowInstanceID, tableName);
					log.debug("ResultData : {}", resultData);
					if (resultData != null && !resultData.equals("")) {
						dbUtil.deleteSPEEvalData(conn, cwid, "CWID", workflowInstanceID, tableName);
						dbUtil.insertFormData(conn, dataMap, tableName, formName);
					} else {
						dbUtil.insertFormData(conn, dataMap, tableName, formName);
					}
				}

			} catch (RepositoryException | SAXException | IOException | ParserConfigurationException e) {
				log.debug(Arrays.toString(e.getStackTrace()) + "Message-----" + e.getMessage());
			} catch (Exception e1) {
				e1.printStackTrace();
			} finally {
				if (null != is)
					try {
						is.close();
					} catch (IOException e) {
						log.debug("IOException in AfterTheFactEvaluationDB Finally Block="
								+ Arrays.toString(e.getStackTrace()));
					}
				if (conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						log.error("SQLException in AfterTheFactEvaluationDB Finally Block="
								+ Arrays.toString(e.getStackTrace()));
					}
				}
			}

		}

	}
}
