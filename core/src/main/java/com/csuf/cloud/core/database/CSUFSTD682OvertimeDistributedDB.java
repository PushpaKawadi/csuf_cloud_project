package com.csuf.cloud.core.database;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
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
import org.xml.sax.SAXException;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;

@Component(property = { Constants.SERVICE_DESCRIPTION + "=STD 682 Overtime Distributed DB",
		Constants.SERVICE_VENDOR + "=Adobe Systems", "process.label" + "=CSUFSTD682OvertimeDistributedDB" })
public class CSUFSTD682OvertimeDistributedDB implements WorkflowProcess {

	private static final Logger log = LoggerFactory.getLogger(CSUFSTD682OvertimeDistributedDB.class);


	@SuppressWarnings("deprecation")
	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap processArguments)
			throws WorkflowException {
		
		ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
		String payloadPath = workItem.getWorkflowData().getPayload().toString();
		
		Document doc = null;
		InputStream is = null;
		String workflowInstanceID = "";

		String emplId = "";
		String chrsId = "";
		String emplRcd = "";
		String employeeLastname = "";
		String employeeFirstname = "";
		String employeeMiddlename = "";
		String positionNumber = "";
		String cbid = "";
		String organizationUnit = "";
		String payPeriodMonth = "";
		String payPeriodYear = "";
		String reasonForExtraHours = "";
		String totalHoursAuthorized1 = "";
		String totalHoursAuthorized2 = "";
		String totalHoursAuthorized3 = "";
		String totalHoursAuthorized4 = "";
		String totalHoursAuthorized5 = "";
		String totalHoursAuthorized6 = "";
		String totalHoursAuthorized7 = "";
		String totalHoursAuthorized8 = "";
		String totalHoursAuthorized9 = "";
		String total_hours_authorized = "";
		String compensationTimeOff1 = "";
		String compensationTimeOff2 = "";
		String compensationTimeOff3 = "";
		String compensationTimeOff4 = "";
		String compensationTimeOff5 = "";
		String compensationTimeOff6 = "";
		String compensationTimeOff7 = "";
		String compensationTimeOff8 = "";
		String compensationTimeOff9 = "";
		String extraHoursWorked1 = "";
		String extraHoursWorked2 = "";
		String extraHoursWorked3 = "";
		String extraHoursWorked4 = "";
		String extraHoursWorked5 = "";
		String extraHoursWorked6 = "";
		String extraHoursWorked7 = "";
		String extraHoursWorked8 = "";
		String extraHoursWorked9 = "";
		String totalExtraHoursWorked = "";
		String to1 = "";
		String to2 = "";
		String to3 = "";
		String to4 = "";
		String to5 = "";
		String to6 = "";
		String to7 = "";
		String to8 = "";
		String to9 = "";
		String from1 = "";
		String from2 = "";
		String from3 = "";
		String from4 = "";
		String from5 = "";
		String from6 = "";
		String from7 = "";
		String from8 = "";
		String from9 = "";
		String date1 = "";
		String date2 = "";
		String date3 = "";
		String date5 = "";
		String date4 = "";
		String date6 = "";
		String date7 = "";
		String date8 = "";
		String date9 = "";
		String studentSignature = "";
		String studentDate = "";
		String studentComment = "";
		String timeKeeperApproval = "";
		String timeKeeperSignature = "";
		String timeKeeperDate = "";
		String timeKeeperComment = "";
		String managerApproval = "";
		String managerSignature = "";
		String managerDate = "";
		String managerComment = "";

		LinkedHashMap<String, Object> dataMapFormInfo = null;
		LinkedHashMap<String, Object> dataMapTest = null;
		Resource xmlNode = resolver.getResource(payloadPath);
		Iterator<Resource> xmlFiles = xmlNode.listChildren();

		//if (conn != null) {
			while (xmlFiles.hasNext()) {
				workflowInstanceID = workItem.getWorkflow().getId();
				Resource attachmentXml = xmlFiles.next();
				String filePath = attachmentXml.getPath();

				if (filePath.contains("Data.xml")) {
					filePath = attachmentXml.getPath().concat("/jcr:content");
					Node subNode = resolver.getResource(filePath).adaptTo(Node.class);
					
					try {
						is = subNode.getProperty("jcr:data").getBinary().getStream();
					} catch (ValueFormatException e2) {
						log.error("ValueFormatException from CSUFSTD682OvertimeDistributedDB="
								+ Arrays.toString(e2.getStackTrace()));

					} catch (PathNotFoundException e2) {
						log.error("PathNotFoundException from CSUFSTD682OvertimeDistributedDB="
								+ Arrays.toString(e2.getStackTrace()));

					} catch (RepositoryException e2) {
						log.error("RepositoryException from CSUFSTD682OvertimeDistributedDB="
								+ Arrays.toString(e2.getStackTrace()));
					}
					try {
						DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
						DocumentBuilder dBuilder = null;
						try {
							dBuilder = dbFactory.newDocumentBuilder();
						} catch (ParserConfigurationException e1) {
							log.error("ParserConfigurationException from CSUFSTD682OvertimeDistributedDB="
									+ Arrays.toString(e1.getStackTrace()));
						}
						try {
							doc = dBuilder.parse(is);
						} catch (IOException e1) {
							log.error("IOException from CSUFSTD682OvertimeDistributedDB="
									+ Arrays.toString(e1.getStackTrace()));
						}
						org.w3c.dom.NodeList nList = doc.getElementsByTagName("afBoundData");
						for (int temp = 0; temp < nList.getLength(); temp++) {
							org.w3c.dom.Node nNode = nList.item(temp);

							if (nNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {
								org.w3c.dom.Element eElement = (org.w3c.dom.Element) nNode;

								emplId = eElement.getElementsByTagName("empl_Id").item(0).getTextContent();

								emplRcd = eElement.getElementsByTagName("empl_rcd").item(0).getTextContent();
								
								chrsId = eElement.getElementsByTagName("chrsId").item(0).getTextContent();
								
								employeeLastname = eElement.getElementsByTagName("employee_last_name").item(0)
										.getTextContent();

								employeeFirstname = eElement.getElementsByTagName("employee_first_name").item(0)
										.getTextContent();

								employeeMiddlename = eElement.getElementsByTagName("employee_middle_name").item(0)
										.getTextContent();

								positionNumber = eElement.getElementsByTagName("position_number").item(0).getTextContent();

								cbid = eElement.getElementsByTagName("cbid").item(0).getTextContent();
								
								organizationUnit = eElement.getElementsByTagName("organization_unit").item(0)
										.getTextContent();
								
								payPeriodMonth = eElement.getElementsByTagName("pay_period_month").item(0)
										.getTextContent();
								
								payPeriodYear = eElement.getElementsByTagName("pay_period_year").item(0)
										.getTextContent();
								date1 = eElement.getElementsByTagName("date1").item(0).getTextContent();
								
								
								/*reasonForExtraHours = eElement.getElementsByTagName("reason_for_extra_hours").item(0)
										.getTextContent();
								totalHoursAuthorized1 = eElement.getElementsByTagName("total_hours_authorized1").item(0)
										.getTextContent();
								totalHoursAuthorized2 = eElement.getElementsByTagName("total_hours_authorized2").item(0)
										.getTextContent();
								totalHoursAuthorized3 = eElement.getElementsByTagName("total_hours_authorized3").item(0)
										.getTextContent();
								totalHoursAuthorized4 = eElement.getElementsByTagName("total_hours_authorized4")
										.item(0).getTextContent();
								totalHoursAuthorized5 = eElement.getElementsByTagName("total_hours_authorized5")
										.item(0).getTextContent();
								totalHoursAuthorized6 = eElement.getElementsByTagName("total_hours_authorized6").item(0)
										.getTextContent();
								totalHoursAuthorized7 = eElement.getElementsByTagName("total_hours_authorized7").item(0)
										.getTextContent();
								totalHoursAuthorized8 = eElement.getElementsByTagName("total_hours_authorized8").item(0)
										.getTextContent();
								totalHoursAuthorized9 = eElement.getElementsByTagName("total_hours_authorized9").item(0)
										.getTextContent();
								total_hours_authorized = eElement.getElementsByTagName("total_hours_authorized").item(0)
										.getTextContent();
								compensationTimeOff1 = eElement.getElementsByTagName("compensation_timeOff1").item(0)
										.getTextContent();
								compensationTimeOff2 = eElement.getElementsByTagName("compensation_timeOff2").item(0)
										.getTextContent();
								compensationTimeOff3 = eElement.getElementsByTagName("compensation_timeOff3").item(0)
										.getTextContent();
								compensationTimeOff4 = eElement.getElementsByTagName("compensation_timeOff4")
										.item(0).getTextContent();
								compensationTimeOff5 = eElement.getElementsByTagName("compensation_timeOff5").item(0)
										.getTextContent();
								compensationTimeOff6 = eElement.getElementsByTagName("compensation_timeOff6").item(0)
										.getTextContent();
								compensationTimeOff7 = eElement.getElementsByTagName("compensation_timeOff7").item(0)
										.getTextContent();
								compensationTimeOff8 = eElement.getElementsByTagName("compensation_timeOff8").item(0)
										.getTextContent();
								compensationTimeOff9 = eElement.getElementsByTagName("compensation_timeOff9").item(0)
										.getTextContent();
								extraHoursWorked1 = eElement.getElementsByTagName("extra_hours_worked1").item(0)
										.getTextContent();
								extraHoursWorked2 = eElement.getElementsByTagName("extra_hours_worked2").item(0)
										.getTextContent();
								extraHoursWorked3 = eElement.getElementsByTagName("extra_hours_worked3").item(0)
										.getTextContent();
								extraHoursWorked4 = eElement.getElementsByTagName("extra_hours_worked4")
										.item(0).getTextContent();
								extraHoursWorked5 = eElement.getElementsByTagName("extra_hours_worked5").item(0)
										.getTextContent();
								extraHoursWorked6 = eElement.getElementsByTagName("extra_hours_worked6").item(0)
										.getTextContent();
								extraHoursWorked7 = eElement.getElementsByTagName("extra_hours_worked7").item(0)
										.getTextContent();
								extraHoursWorked8 = eElement.getElementsByTagName("extra_hours_worked8")
										.item(0).getTextContent();
								extraHoursWorked9 = eElement.getElementsByTagName("extra_hours_worked9").item(0)
										.getTextContent();
								totalExtraHoursWorked = eElement.getElementsByTagName("total_extra_hours_worked")
										.item(0).getTextContent();*/

								/*to1 = eElement.getElementsByTagName("to1").item(0).getTextContent();
								to2 = eElement.getElementsByTagName("to2").item(0).getTextContent();
								to3 = eElement.getElementsByTagName("to3").item(0).getTextContent();
								to4 = eElement.getElementsByTagName("to4").item(0).getTextContent();
								to5 = eElement.getElementsByTagName("to5").item(0).getTextContent();
								to6 = eElement.getElementsByTagName("to6").item(0).getTextContent();
								to7 = eElement.getElementsByTagName("to7").item(0).getTextContent();
								to8 = eElement.getElementsByTagName("to8").item(0).getTextContent();
								to9 = eElement.getElementsByTagName("to9").item(0).getTextContent();

								from1 = eElement.getElementsByTagName("from1").item(0).getTextContent();
								from2 = eElement.getElementsByTagName("from2").item(0).getTextContent();
								from3 = eElement.getElementsByTagName("from3").item(0).getTextContent();
								from4 = eElement.getElementsByTagName("from4").item(0).getTextContent();
								from5 = eElement.getElementsByTagName("from5").item(0).getTextContent();
								from6 = eElement.getElementsByTagName("from6").item(0).getTextContent();
								from7 = eElement.getElementsByTagName("from7").item(0).getTextContent();
								from8 = eElement.getElementsByTagName("from8").item(0).getTextContent();
								from9 = eElement.getElementsByTagName("from9").item(0).getTextContent();

								date1 = eElement.getElementsByTagName("date1").item(0).getTextContent();
								date2 = eElement.getElementsByTagName("date2").item(0).getTextContent();
								date3 = eElement.getElementsByTagName("date3").item(0).getTextContent();
								date4 = eElement.getElementsByTagName("date4").item(0).getTextContent();
								date5 = eElement.getElementsByTagName("date5").item(0).getTextContent();
								date6 = eElement.getElementsByTagName("date6").item(0).getTextContent();
								date7 = eElement.getElementsByTagName("date7").item(0).getTextContent();
								date8 = eElement.getElementsByTagName("date8").item(0).getTextContent();
								date9 = eElement.getElementsByTagName("date9").item(0).getTextContent();

								studentSignature = eElement.getElementsByTagName("student_signature").item(0)
										.getTextContent();
								studentDate = eElement.getElementsByTagName("student_date").item(0).getTextContent();
								studentComment = eElement.getElementsByTagName("student_comment").item(0)
										.getTextContent();

								timeKeeperApproval = eElement.getElementsByTagName("time_keeper_approval").item(0)
										.getTextContent();
								timeKeeperSignature = eElement.getElementsByTagName("time_keeper_signature").item(0)
										.getTextContent();
								timeKeeperDate = eElement.getElementsByTagName("time_keeper_date").item(0)
										.getTextContent();
								timeKeeperComment = eElement.getElementsByTagName("time_keeper_comment").item(0)
										.getTextContent();

								managerApproval = eElement.getElementsByTagName("manager_approval").item(0)
										.getTextContent();
								managerSignature = eElement.getElementsByTagName("manager_signature").item(0)
										.getTextContent();
								managerDate = eElement.getElementsByTagName("manager_date").item(0).getTextContent();
								managerComment = eElement.getElementsByTagName("manager_comment").item(0)
										.getTextContent();*/
								dataMapTest = new LinkedHashMap<String, Object>();
								
								dataMapTest.put("EMPL_ID", emplId);
								dataMapTest.put("EMPL_RCD", emplRcd);
								dataMapTest.put("CHRS_ID", chrsId);
								dataMapTest.put("CHRS_ID", chrsId);
								dataMapTest.put("CHRS_ID", chrsId);
								dataMapTest.put("CHRS_ID", chrsId);
								dataMapTest.put("EMP_LAST_NAME", employeeLastname);
								dataMapTest.put("EMP_FRST_NAME", employeeFirstname);
								dataMapTest.put("EMP_M_NAME", employeeMiddlename);
								dataMapTest.put("POSITION_NUMBER", positionNumber);
								dataMapTest.put("CBID", cbid);
								dataMapTest.put("ORG_UNIT", organizationUnit);
								dataMapTest.put("PAY_PRD_MONTH", payPeriodMonth);								
								dataMapTest.put("PAY_PRD_YEAR", payPeriodYear);
								Object date1Obj = null;
								if (date1 != null && date1 != "") {
									Date date1New = Date.valueOf(date1);
									date1Obj = date1New;
								}
								dataMapTest.put("DATE1", date1Obj);
								
								/*dataMapFormInfo = new LinkedHashMap<String, Object>();
								dataMapFormInfo.put("CASE_ID", "");
								dataMapFormInfo.put("EMPL_ID", emplId);
								dataMapFormInfo.put("EMPL_RCD", emplRcd);
								dataMapFormInfo.put("CHRS_ID", chrsId);
								dataMapFormInfo.put("EMP_LAST_NAME", employeeLastname);
								dataMapFormInfo.put("EMP_FRST_NAME", employeeFirstname);
								dataMapFormInfo.put("EMP_M_NAME", employeeMiddlename);
								dataMapFormInfo.put("POSITION_NUMBER", positionNumber);
								dataMapFormInfo.put("CBID", cbid);
								dataMapFormInfo.put("ORG_UNIT", organizationUnit);
								dataMapFormInfo.put("PAY_PRD_MONTH", payPeriodMonth);								
								dataMapFormInfo.put("PAY_PRD_YEAR", payPeriodYear);
								dataMapFormInfo.put("RESN_EXTRA_HRS", reasonForExtraHours);
								
								dataMapTest.put("EMPL_ID", "100030476");
								dataMapTest.put("EMPL_RCD", "1");
								dataMapTest.put("CHRS_ID", "899752547");
								
								dataMapFormInfo.put("TOTAL_HRS_AUTH1", totalHoursAuthorized1);
								dataMapFormInfo.put("TOTAL_HRS_AUTH2", totalHoursAuthorized2);
								dataMapFormInfo.put("TOTAL_HRS_AUTH3", totalHoursAuthorized3);
								dataMapFormInfo.put("TOTAL_HRS_AUTH4", totalHoursAuthorized4);
								dataMapFormInfo.put("TOTAL_HRS_AUTH5", totalHoursAuthorized5);
								dataMapFormInfo.put("TOTAL_HRS_AUTH6", totalHoursAuthorized6);
								dataMapFormInfo.put("TOTAL_HRS_AUTH7", totalHoursAuthorized7);
								dataMapFormInfo.put("TOTAL_HRS_AUTH8", totalHoursAuthorized8);
								dataMapFormInfo.put("TOTAL_HRS_AUTH9", totalHoursAuthorized9);								
								dataMapFormInfo.put("TOTAL_HRS_AUTH", total_hours_authorized);
								
								dataMapFormInfo.put("COMPN_TIMEOFF1", compensationTimeOff1);
								dataMapFormInfo.put("COMPN_TIMEOFF2", compensationTimeOff2);
								dataMapFormInfo.put("COMPN_TIMEOFF3", compensationTimeOff3);
								dataMapFormInfo.put("COMPN_TIMEOFF4", compensationTimeOff4);
								dataMapFormInfo.put("COMPN_TIMEOFF5", compensationTimeOff5);
								dataMapFormInfo.put("COMPN_TIMEOFF6", compensationTimeOff6);
								dataMapFormInfo.put("COMPN_TIMEOFF7", compensationTimeOff7);
								dataMapFormInfo.put("COMPN_TIMEOFF8", compensationTimeOff8);
								dataMapFormInfo.put("COMPN_TIMEOFF9", compensationTimeOff9);
								
								dataMapFormInfo.put("EXTRA_HRS_WRKD1", extraHoursWorked1);
								dataMapFormInfo.put("EXTRA_HRS_WRKD2", extraHoursWorked2);
								dataMapFormInfo.put("EXTRA_HRS_WRKD3", extraHoursWorked3);
								dataMapFormInfo.put("EXTRA_HRS_WRKD4", extraHoursWorked4);
								dataMapFormInfo.put("EXTRA_HRS_WRKD5", extraHoursWorked5);
								dataMapFormInfo.put("EXTRA_HRS_WRKD6", extraHoursWorked6);
								dataMapFormInfo.put("EXTRA_HRS_WRKD7", extraHoursWorked7);
								dataMapFormInfo.put("EXTRA_HRS_WRKD8", extraHoursWorked8);
								dataMapFormInfo.put("EXTRA_HRS_WRKD9", extraHoursWorked9);
								dataMapFormInfo.put("TOTAL_HRS_WRKD", totalExtraHoursWorked);
								
								dataMapFormInfo.put("TO1", to1);
								dataMapFormInfo.put("TO2", to2);
								dataMapFormInfo.put("TO3", to3);
								dataMapFormInfo.put("TO4", to4);
								dataMapFormInfo.put("TO5", to5);
								dataMapFormInfo.put("TO6", to6);
								dataMapFormInfo.put("TO7", to7);
								dataMapFormInfo.put("TO8", to8);
								dataMapFormInfo.put("TO9", to9);
								
								dataMapFormInfo.put("FROM1", from1);
								dataMapFormInfo.put("FROM2", from2);
								dataMapFormInfo.put("FROM3", from3);
								dataMapFormInfo.put("FROM4", from4);
								dataMapFormInfo.put("FROM5", from5);
								dataMapFormInfo.put("FROM6", from6);
								dataMapFormInfo.put("FROM7", from7);
								dataMapFormInfo.put("FROM8", from8);
								dataMapFormInfo.put("FROM9", from9);
								
								Object date1Obj = null;
								if (date1 != null && date1 != "") {
									Date date1New = Date.valueOf(date1);
									date1Obj = date1New;
								}
								dataMapFormInfo.put("DATE1", date1Obj);
								
								Object date2Obj = null;
								if (date2 != null && date2 != "") {
									Date date2New = Date.valueOf(date2);
									date2Obj = date2New;
								}
								dataMapFormInfo.put("DATE2", date2Obj);
								
								Object date3Obj = null;
								if (date3 != null && date3 != "") {
									Date date3New = Date.valueOf(date3);
									date3Obj = date3New;
								}
								dataMapFormInfo.put("DATE3", date3Obj);
								
								Object date4Obj = null;
								if (date4 != null && date4 != "") {
									Date date4New = Date.valueOf(date4);
									date4Obj = date4New;
								}
								dataMapFormInfo.put("DATE4", date4Obj);
								
								Object date5Obj = null;
								if (date5 != null && date5 != "") {
									Date date5New = Date.valueOf(date5);
									date5Obj = date5New;
								}
								dataMapFormInfo.put("DATE5", date5Obj);
								
								Object date6Obj = null;
								if (date6 != null && date6 != "") {
									Date date6New = Date.valueOf(date6);
									date6Obj = date6New;
								}
								dataMapFormInfo.put("DATE6", date6Obj);
								
								Object date7Obj = null;
								if (date7 != null && date7 != "") {
									Date date7New = Date.valueOf(date7);
									date7Obj = date7New;
								}
								dataMapFormInfo.put("DATE7", date7Obj);
								
								Object date8Obj = null;
								if (date8 != null && date8 != "") {
									Date date8New = Date.valueOf(date8);
									date8Obj = date8New;
								}
								dataMapFormInfo.put("DATE8", date8Obj);
								
								Object date9Obj = null;
								if (date9 != null && date9 != "") {
									Date date9New = Date.valueOf(date9);
									date9Obj = date9New;
								}
								dataMapFormInfo.put("DATE9", date9Obj);
								
								dataMapFormInfo.put("STDNT_SIGN", studentSignature);
								Object studentDateObj = null;
								if (studentDate != null && studentDate != "") {
									Date studentDateNew = Date.valueOf(studentDate);
									studentDateObj = studentDateNew;
								}
								dataMapFormInfo.put("STDNT_DATE", studentDateObj);
								dataMapFormInfo.put("STDNT_COMNT", studentComment);
								
								dataMapFormInfo.put("TIME_KEPR_APPR", timeKeeperApproval);
								dataMapFormInfo.put("TIME_KEPR_SIGN", timeKeeperSignature);
								Object timeKeeperDateObj = null;
								if (timeKeeperDate != null && timeKeeperDate != "") {
									Date timeKeeperDateNew = Date.valueOf(timeKeeperDate);
									timeKeeperDateObj = timeKeeperDateNew;
								}
								dataMapFormInfo.put("TIME_KEPR_DATE", timeKeeperDateObj);
								dataMapFormInfo.put("TIME_KEPR_COMNT", timeKeeperComment);
								
								dataMapFormInfo.put("MNGR_APPR", managerApproval);
								dataMapFormInfo.put("MNGR_SIGN", managerSignature);
								Object managerDateObj = null;
								if (managerDate != null && managerDate != "") {
									Date managerDateNew = Date.valueOf(managerDate);
									managerDateObj = managerDateNew;
								}
								dataMapFormInfo.put("MNGR_DATE", managerDateObj);
								dataMapFormInfo.put("MNGR_COMNT", managerComment);
								dataMapFormInfo.put("WORKFLOW_INSTANCE_ID", workflowInstanceID);*/
								
							//	dbUtil.insertFormData(conn, dataMapFormInfo, tableName, formName);
								/*String resultData = dbUtil.getSPEEvalData(conn, emplId, "EMPL_ID", workflowInstanceID, tableName);
								log.debug("ResultData : {}",resultData);
								if (resultData != null && !resultData.equals("")) {
									dbUtil.deleteSPEEvalData(conn, emplId, "EMPL_ID", workflowInstanceID, tableName);
									dbUtil.insertFormData(conn, dataMapFormInfo, tableName, formName);
								} else {						
									dbUtil.insertFormData(conn, dataMapFormInfo, tableName, formName);
								}*/
								
								//if (dataMapTest != null) {

									JSONObject json = new JSONObject();
									/*json.put("cwid", cwid);
									json.put("workflowInstanceID", workflowInstanceID);
									json.put("tableName", tableName);
									json.put("formName", formName);
									json.put("dataMap", dataMap);*/
									
									json.put("DB_CONNECTION", "AEMDBDEV");
									json.put("TABLE_NAME", "AEM_STD682_OVERTIME");
									json.put("FORM_NAME", "STD 682 Overtime Distributed");
									json.put("UNIQUE_FIELD", "100030476");
									json.put("UNIQUE_FIELD_COLUMN","EMPL_ID");
									json.put("WORKFLOW_INSTANCE_ID", workflowInstanceID);
									json.put("DATA_MAP", dataMapTest);
									json.put("DATE_FIELDS", "DATE1");
									//On-Prem
									String dbServiceUrl = "https://myformstst.fullerton.edu/bin/dbSaveforCloud";

									CloseableHttpClient client = HttpClients.createDefault();
									HttpPost post = new HttpPost(dbServiceUrl);
									post.addHeader("Content-Type", "application/json");
									post.setEntity(new StringEntity(json.toString()));

									CloseableHttpResponse response = client.execute(post);
									log.info("DB Service Response: =" + response.getStatusLine());
									client.close();
								//}

							}
						}

					} catch (SAXException e) {
						log.error("SAXException=" + e);

					} catch (Exception e) {
						log.error(
								"Exception From CSUFSTD682OvertimeDistributedDB=" + e);
					}

					finally {
						if (is != null) {
							try {
								is.close();
							} catch (Exception e) {
								log.error("Exception from Finally Block from CSUFSTD682OvertimeDistributedDB="
										+ e);
							}
						}
						
					}

				}
			}
		}
	}
//}
