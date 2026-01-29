package com.csuf.cloud.core.database;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;

import javax.jcr.Node;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.ValueFormatException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(property = { Constants.SERVICE_DESCRIPTION + "=STD 682 Overtime Distributed WF History	",
		Constants.SERVICE_VENDOR + "=Adobe Systems", "process.label" + "=STD 682 Overtime Distributed WF History" })
public class CSUFSTD682OvertimeDistributedWFHistoryDB implements WorkflowProcess {

	private static final Logger log = LoggerFactory.getLogger(CSUFSTD682OvertimeDistributedWFHistoryDB.class);

	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap processArguments)
			throws WorkflowException {
		log.info("Inside the STD WF History");

		ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
		String payloadPath = workItem.getWorkflowData().getPayload().toString();

		String paramsValue = ((String) processArguments.get("PROCESS_ARGS", "string")).toString();
		LinkedHashMap<String, Object> dataMap = null;

		Document doc = null;
		InputStream is = null;

		String workflowModelName = "";
		String cwid = null;
		String stepResponse = "";
		String stepType = "";
		String stepName = "";
		String assignee = "";
		String caseId = "";
		String comments = "";
		Timestamp stepCompleteTime = null;
		Timestamp wfCompleteTime = null;
		String processStepValue = "";

		Resource xmlNode = resolver.getResource(payloadPath);
		Iterator<Resource> xmlFiles = xmlNode.listChildren();
		String wfInstanceID = workItem.getWorkflow().getId();
		workflowModelName = workItem.getWorkflow().getWorkflowModel().getId();
		String workflowID = workItem.getId();
		String wId = workflowID.replace("VolatileWorkItem_", "/workItems/");
		String workItemID = "";
		if (paramsValue.equalsIgnoreCase("Before Assign Task")) {
			String firstStr = wId.substring(0, wId.indexOf('_'));
			String secString = wId.substring(wId.indexOf('_') + 1, wId.length());
			String t1 = firstStr.replaceAll("[^0-9]+", "");
			int a1 = Integer.parseInt(t1);
			a1++; // Process step is one step behind the Assign task, so
					// increment it.
			firstStr = firstStr.replaceAll(t1, String.valueOf(a1));
			workItemID = wfInstanceID.concat(firstStr).concat("_").concat(secString);
			processStepValue = "Before Assign Task";
		}

		if (paramsValue.equalsIgnoreCase("After Assign Task")) {
			String firstStr = wId.substring(0, wId.indexOf('_'));
			String secString = wId.substring(wId.indexOf('_') + 1, wId.length());
			String t1 = firstStr.replaceAll("[^0-9]+", "");
			int a1 = Integer.parseInt(t1);
			a1--;// Process step is one step ahead the Assign task, so decrement
					// it.
			firstStr = firstStr.replaceAll(t1, String.valueOf(a1));
			workItemID = wfInstanceID.concat(firstStr).concat("_").concat(secString);
			processStepValue = "After Assign Task";
		}

		while (xmlFiles.hasNext()) {
			String contentPath = workItem.getContentPath();
			
			Timestamp workflowStartTime = new java.sql.Timestamp(workItem.getTimeStarted().getTime());
			Timestamp stepStartTime = new java.sql.Timestamp(System.currentTimeMillis());
			Resource attachmentXml = xmlFiles.next();
			String filePath = attachmentXml.getPath();
			String workflowInitiator = "";
			payloadPath = workItem.getWorkflowData().getPayload().toString();
			if (StringUtils.isNotBlank(payloadPath)) {
				try {
					InputStream inputStream = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath,
							"Data.xml");

					if (null != inputStream) {
						Document document = XMLUtils.getDomDocument(inputStream);
						Element afBoundDataElement = XMLUtils.getParentNode(document, "afBoundData");
						if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
							caseId = XMLUtils.getChildNodeContent(afBoundDataElement, "caseId");
							cwid = XMLUtils.getChildNodeContent(afBoundDataElement, "empl_Id");
						}
						Element afBoundUnBoundDataElement = XMLUtils.getParentNode(document, "afUnboundData");
						if (null != afBoundUnBoundDataElement && afBoundUnBoundDataElement.hasChildNodes()) {
							workflowInitiator = XMLUtils.getChildNodeContent(afBoundUnBoundDataElement,
									"workflow_initiator");
						}
						
					}
				} catch (SAXException | IOException | ParserConfigurationException | RepositoryException e) {
					log.error("ValueFormatException from CSUFSTD682OvertimeDistributedWFHistoryDB="
							+ Arrays.toString(e.getStackTrace()) + "Error Message=", e.getMessage());
				}

			}
			if (filePath.contains("Data.xml")) {
				filePath = attachmentXml.getPath().concat("/jcr:content");
				Node subNode = resolver.getResource(filePath).adaptTo(Node.class);

				try {
					is = subNode.getProperty("jcr:data").getBinary().getStream();
				} catch (ValueFormatException e2) {
					log.error("ValueFormatException from CSUFSTD682OvertimeDistributedWFHistoryDB="
							+ Arrays.toString(e2.getStackTrace()) + "Error Message=", e2.getMessage());
					
				} catch (PathNotFoundException e2) {
					log.error("PathNotFoundException from CSUFSTD682OvertimeDistributedWFHistoryDB="
							+ Arrays.toString(e2.getStackTrace()) + "Error Message=", e2.getMessage());
					
				} catch (RepositoryException e2) {
					log.error("RepositoryException from CSUFSTD682OvertimeDistributedWFHistoryDB="
							+ Arrays.toString(e2.getStackTrace()) + "Error Message=", e2.getMessage());
				}

				try {
					DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
					DocumentBuilder dBuilder = null;
					try {
						dBuilder = dbFactory.newDocumentBuilder();
					} catch (ParserConfigurationException e1) {
						log.error("ParserConfigurationException from CSUFSTD682OvertimeDistributedWFHistoryDB="
								+ Arrays.toString(e1.getStackTrace()) + "Error Message=", e1.getMessage());
					}
					try {
						doc = dBuilder.parse(is);
					} catch (IOException e1) {
						log.error("IOException from CSUFSTD682OvertimeDistributedWFHistoryDB="
								+ Arrays.toString(e1.getStackTrace()) + "Error Message=", e1.getMessage());
					}
					org.w3c.dom.NodeList nList = doc.getElementsByTagName("afBoundData");
					for (int temp = 0; temp < nList.getLength(); temp++) {
						org.w3c.dom.Node nNode = nList.item(temp);
						if (nNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {
							org.w3c.dom.Element eElement = (org.w3c.dom.Element) nNode;

							String stage = eElement.getElementsByTagName("StageIndicator").item(0).getTextContent();

							if (stage.equals("ToTimeKeeper")) {
								assignee = "TimeKeeper-Office-Reviewers";
								stepName = "TimeKeeper Office Review";
								stepResponse = "Send To Approving Official";
								comments = eElement.getElementsByTagName("time_keeper_comment").item(0)
										.getTextContent();

							}

							if (stage.equals("ToApprovingOfficial")) {
								assignee = "Approving-Office-Reviewers";
								stepName = "Approving Office Review";
								stepResponse = "Send To Manager";								
								comments = eElement.getElementsByTagName("time_keeper_comment").item(0)
										.getTextContent();

							}

							if (stage.equals("ToManager")) {
								assignee = "Manager-Review";
								stepName = "Manager Review";						
								stepResponse = "Submit";								
								comments = eElement.getElementsByTagName("manager_comment").item(0).getTextContent();
							}

						}
					}

				} catch (SAXException e) {
					log.error("SAXException from CSUFSTD682OvertimeDistributedWFHistoryDB="
							+ Arrays.toString(e.getStackTrace()) + "Error Message=", e.getMessage());
					
				} finally {
					try {
						is.close();
					} catch (IOException e) {
						log.error("IOException from CSUFSTD682OvertimeDistributedWFHistoryDB="
								+ Arrays.toString(e.getStackTrace()) + "Error Message=", e.getMessage());
					}

				}

				if (paramsValue.equalsIgnoreCase("Before Assign Task")) {
					stepType = "STEPSTART";
					stepResponse = null;
					stepCompleteTime = null;
					workflowStartTime = null;
					wfCompleteTime = null;
				}

				if (paramsValue.equalsIgnoreCase("After Assign Task")) {
					stepType = "STEPEND";
					stepCompleteTime = new java.sql.Timestamp(System.currentTimeMillis());
					workflowStartTime = null;
					wfCompleteTime = new java.sql.Timestamp(System.currentTimeMillis());
					stepStartTime = null;
				}

				dataMap = new LinkedHashMap<String, Object>();
				dataMap.put("WORKFLOW_INSTANCE_ID", wfInstanceID);
				dataMap.put("WORKITEM_ID", workItemID);
				dataMap.put("WORKFLOW_PAYLOAD", contentPath);
				dataMap.put("WORKFLOW_MODEL_NAME", workflowModelName);
				dataMap.put("CASE_ID", caseId);
				dataMap.put("CWID", cwid);
				//dataMap.put("STEP_START_TIME", stepStartTime);
				dataMap.put("WORKFLOW_INITIATOR", workflowInitiator);
				dataMap.put("ASSIGNEE", assignee);
				//dataMap.put("STEP_COMPLETE_TIME", stepCompleteTime);
				dataMap.put("STEP_TYPE", stepType);
				dataMap.put("STEP_RESPONSE", stepResponse);
				dataMap.put("STEP_NAME", stepName);
				dataMap.put("COMMENTS", comments);
				
				log.info("Vista  dataMap="+dataMap.size());
				
				JSONObject json = new JSONObject();
				/*json.put("cwid", cwid);
				json.put("workflowInstanceID", workflowInstanceID);
				json.put("tableName", tableName);
				json.put("formName", formName);
				json.put("dataMap", dataMap);*/
				
				json.put("DB_CONNECTION", "AEMDBDEV");
				json.put("TABLE_NAME", "AEM_WORKFLOW_HISTORY");
				json.put("PROCESS_STEP_VAL", processStepValue);
				//json.put("FORM_NAME", "STD 682 Overtime Distributed");
				//json.put("UNIQUE_FIELD", "100030476");
				//json.put("UNIQUE_FIELD_COLUMN","EMPL_ID");
				//json.put("WORKFLOW_INSTANCE_ID", wfInstanceID);
				//json.put("WORKITEM_ID", workItemID);
				json.put("DATA_MAP", dataMap);
				//json.put("DATE_FIELDS", "DATE1");
				
				String dbServiceUrl = "https://myformstst.fullerton.edu/bin/WFHistorySave";
				try {
				CloseableHttpClient client = HttpClients.createDefault();
				HttpPost post = new HttpPost(dbServiceUrl);
				post.addHeader("Content-Type", "application/json");
				post.setEntity(new StringEntity(json.toString()));

				CloseableHttpResponse response = client.execute(post);
				log.info("DB Service Response: =" + response.getStatusLine());
				
				client.close();

				
			}catch (Exception e) {
				log.error("Exception from CSUFSTD682OvertimeDistributedWFHistoryDB="
						+ Arrays.toString(e.getStackTrace()) + "Error Message=", e.getMessage());
			}
			}
		}

	}

	public void insertWFHistory(Connection conn, LinkedHashMap<String, Object> dataMap) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
			} catch (SQLException e1) {
				log.error("SQLException from CSUFSTD682OvertimeDistributedWFHistoryDB="
						+ Arrays.toString(e1.getStackTrace()) + "Error Message=", e1.getMessage());
			}
			String tableName = "AEM_WORKFLOW_HISTORY";
			StringBuilder sql = new StringBuilder("INSERT INTO  ").append(tableName).append(" (");
			StringBuilder placeholders = new StringBuilder();
			for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
				sql.append(iter.next());
				placeholders.append("?");
				if (iter.hasNext()) {
					sql.append(",");
					placeholders.append(",");
				}
			}
			sql.append(") VALUES (").append(placeholders).append(")");
			log.error("SQL=" + sql.toString());
			try {
				preparedStmt = conn.prepareStatement(sql.toString());
			} catch (SQLException e1) {
				log.error("SQLException from CSUFSTD682OvertimeDistributedWFHistoryDB="
						+ Arrays.toString(e1.getStackTrace()) + "Error Message=", e1.getMessage());
			}
			int i = 0;
			log.info("Datamap values=" + dataMap.values());
			for (Object value : dataMap.values()) {
				try {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				} catch (SQLException e) {
					log.error("SQLException from CSUFSTD682OvertimeDistributedWFHistoryDB="
							+ Arrays.toString(e.getStackTrace()) + "Error Message=", e.getMessage());
				}
			}
			try {
				log.info("SQL statement=" + preparedStmt);
				preparedStmt.execute();
				conn.commit();
			} catch (SQLException e1) {
				log.error("SQLException from CSUFSTD682OvertimeDistributedWFHistoryDB="
						+ Arrays.toString(e1.getStackTrace()) + "Error Message=", e1.getMessage());
				
			} finally {
				if (conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						log.error("SQLException from Finally Block from CSUFSTD682OvertimeDistributedWFHistoryDB="
								+ Arrays.toString(e.getStackTrace()));
					}

				}
			}
		}
	}

}
