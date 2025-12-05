package com.csuf.cloud.core.onbase;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Base64;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.FormService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.FilenetUtil;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(property = { "service.description=CSUF STD 682 Overtime Distributed Filenet", "service.vendor=ThoughtFocus",
		"process.label=CSUFSTD682OvertimeDistributedFileNetDOR" })

public class CSUFSTD682OvertimeDistributedFileNet implements WorkflowProcess {

	@Reference
	private GlobalConfigCSUFService globalConfigFilenetService;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;

	@Reference
	private FormService formService;

	private static final Logger log = LoggerFactory.getLogger(CSUFSTD682OvertimeDistributedFileNet.class);

	private static final String FORM_PATH = "/content/forms/af/std-682-overtime-distributed/std-682-overtime-distributed";
	private static final String DOR_FILE_NAME = "STD682OvertimeDistributed.pdf";
	private static final String FORM_NAME = "STD 682 Overtime Distributed";
	private final String ONBASE_URL = "https://onbaseweb.fullerton.edu/aem/OnBaseDocumentUpload";

	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args)
			throws com.adobe.granite.workflow.WorkflowException {
		log.info("Entered OnBase Class");
		Connection conn = null;
		com.adobe.aemfd.docmanager.Document dorDocument = null;
		/*
		 * String dataSourceVal =
		 * globalConfigFilenetService.getAEMFormsDatabaseSource(); conn =
		 * jdbcConnectionService.getDBConn(dataSourceVal);
		 */
		String params = args.get("PROCESS_ARGS", String.class);
		// String filenet_onbase =
		// globalConfigFilenetService.getfilenet_or_onbase_selection();
		String url = "";
		Document doc = null;
		String workflowInstanceId = workItem.getWorkflow().getId();

		/*
		 * if (filenet_onbase.equalsIgnoreCase("filenet")) { url =
		 * globalConfigFilenetService.getHRBenefitsFilenetURL(); } else if
		 * (filenet_onbase.equalsIgnoreCase("onbase")) { url =
		 * globalConfigFilenetService.getOnbaseURL(); }
		 */
		url = ONBASE_URL;
		JsonObject json = new JsonObject();

		String firstName = "";
		String lastName = "";
		String cwid = "";
		String empUserID = "";
		String scoPositionNumber = "";
		String unit = "";
		String month = "";
		String year = "";

		String payloadPath = workItem.getWorkflowData().getPayload().toString();
		log.info("OnBase payloadPath=" + payloadPath);
		ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
		if (StringUtils.isNotBlank(payloadPath)) {
			
			InputStream is = null;
			try {
				is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");

				if (null != is) {
					doc = XMLUtils.getDomDocument(is);
					org.w3c.dom.NodeList nList = doc.getElementsByTagName("afBoundData");
					for (int temp = 0; temp < nList.getLength(); temp++) {
						org.w3c.dom.Node nNode = nList.item(temp);
						if (nNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {
							org.w3c.dom.Element eElement = (org.w3c.dom.Element) nNode;
							cwid = eElement.getElementsByTagName("empl_Id").item(0).getTextContent();
							firstName = eElement.getElementsByTagName("employee_first_name").item(0).getTextContent();
							lastName = eElement.getElementsByTagName("employee_last_name").item(0).getTextContent();
							empUserID = eElement.getElementsByTagName("hidden_userID").item(0).getTextContent();
							scoPositionNumber = eElement.getElementsByTagName("position_number").item(0)
									.getTextContent();
							unit = eElement.getElementsByTagName("organization_unit").item(0).getTextContent();
							month = eElement.getElementsByTagName("pay_period_month").item(0).getTextContent();
							year = eElement.getElementsByTagName("pay_period_year").item(0).getTextContent();

						}
					}
					String xml = XMLUtils.prettyPrintAsString(doc);
					
					//dorDocument = formService.getDoR(xml, FORM_PATH, DOR_FILE_NAME);
					dorDocument = formService.getDoROnBase(xml, FORM_PATH, DOR_FILE_NAME,resolver);
					
					log.info("Pushpa Executing STD WF="+dorDocument);
					byte[] bytes = CSUFUtils.toByteArrayFromInputStream(dorDocument.getInputStream());
					log.info("Pushpa bytes="+bytes);
					Base64.Encoder encoder = Base64.getEncoder();
					log.info("Pushpa encoder="+encoder);
					String encodedDoc = encoder.encodeToString(bytes);
					
					String first200 = encodedDoc.substring(0, Math.min(200, encodedDoc.length()));
					log.info("Pushpa EncodedDoc start = " + first200);
					log.info("Encoded length = " + encodedDoc.length());
					//log.info("Pushpa encodedDoc="+encodedDoc);
					
					

					
					/*json.addProperty("FirstName", firstName);
					json.addProperty("LastName", lastName);
					json.addProperty("CWID", cwid);
					json.addProperty("CaseID", "");
					json.addProperty("EmpUserID", empUserID);
					json.addProperty("SCOPositionNumber", scoPositionNumber);
					json.addProperty("Unit", unit);
					json.addProperty("Month", month);
					json.addProperty("Year", year);
					json.addProperty("DocType", "OT");
					json.addProperty("Attachment", encodedDoc);
					json.addProperty("AttachmentMimeType", "application/pdf");*/
				}
				FilenetUtil fUtil = new FilenetUtil();
				if (null != dorDocument) {
					
					log.info("Bengaluru Inside dorDocument=" + dorDocument);

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						Element element = XMLUtils.getChildNode(afBoundDataElement, "STD682Overtime");
						json = prepareOnbaseJson(element, params, dorDocument, fUtil);
					
						log.info("Bengaluru Onbase json=" + json.toString());
						
						
						//String resultVal = sendToOnBase(json.toString());
						String resultVal = "";
						log.info("Bengaluru Result Value returned from onbase in STD682OvertsimeDistributedOnbase : {}",
								resultVal);
					} else {
						log.error("afbound elements not found in STD682OvertsimeDistributedOnbase");
					}
				}

				// log.info("JSON="+json.toString());
				/*
				 * FilenetUtil fUtil = new FilenetUtil(); if
				 * (filenet_onbase.equalsIgnoreCase("filenet")) { String resultVal =
				 * fUtil.sendToFilenet(json.toString(), url, conn, FORM_NAME); log.
				 * debug("Result Value returned from filenet in CSUFSTD682OvertimeDistributedFileNet : {}"
				 * , resultVal); } else if (filenet_onbase.equalsIgnoreCase("onbase")) { if
				 * (null != dorDocument) { Element afBoundDataElement =
				 * XMLUtils.getParentNode(doc, "afBoundData"); if (null != afBoundDataElement &&
				 * afBoundDataElement.hasChildNodes()) { Element element =
				 * XMLUtils.getChildNode(afBoundDataElement, "STD682Overtime"); json =
				 * prepareOnbaseJson(element, params, dorDocument, fUtil); String resultVal =
				 * fUtil.sendToOnbase(json.toString(), url, conn, FORM_NAME, workflowInstanceId,
				 * "", "Final_DOR", XMLUtils.getChildNodeContent(element, "empl_Id"), "",
				 * XMLUtils.getChildNodeContent(element, "employee_first_name"),
				 * XMLUtils.getChildNodeContent(element, "employee_last_name")); log.
				 * debug("Result Value returned from onbase in STD682OvertsimeDistributedOnbase : {}"
				 * , resultVal); } else {
				 * log.error("afbound elements not found in STD682OvertsimeDistributedOnbase");
				 * } } else {
				 * log.error("dorDocument is null in STD682OvertsimeDistributedOnbase"); } }
				 */

			} catch (Exception e) {
				log.error("Exception from Class Name: CSUFSTD682OvertimeDistributedFileNet"+ e);

			} finally {
				if (null != is)
					try {
						is.close();
					} catch (IOException e) {
						log.error("IOException from finally block for Class Name: CSUFSTD682OvertimeDistributedFileNet"
								+ Arrays.toString(e.getStackTrace()));

					}
			}
			/*
			 * if (conn != null) { try { conn.close(); } catch (SQLException e) { log.
			 * error("SQLException from finally block for Class Name: CSUFSTD682OvertimeDistributedFileNet"
			 * + Arrays.toString(e.getStackTrace())); } }
			 */

		}

	}

	private JsonObject prepareOnbaseJson(Element eElement, String params,
			com.adobe.aemfd.docmanager.Document dorDocument, FilenetUtil oUtil) throws IOException {
		
		log.info("Bengaluru prepareOnbaseJson method");
		
		String[] keyArray = { "CHRS_ID-8", "Employee_ID-8", "First_Name-8", "Last_Name-8",
				"Doc_Type_-_Faculty_and_Staff-8", "SCO_Position_Number-8", "Month-1", "Unit-8", "Year-1" };
		
		String monthSelected = XMLUtils.getChildNodeContent(eElement, "pay_period_month");
		
		log.info("Bengaluru monthSelected = " +monthSelected);

		try {
			Date date = new SimpleDateFormat("MMMM").parse(monthSelected);
			Calendar cal = Calendar.getInstance();
			cal.setTime(date);
			int n = cal.get(Calendar.MONTH) + 1;
			monthSelected = String.valueOf(n);
			if (monthSelected.length() == 1) {
				monthSelected = "0".concat(monthSelected);
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String[] KeyValueArray = { XMLUtils.getChildNodeContent(eElement, "chrsId"),
				XMLUtils.getChildNodeContent(eElement, "empl_Id"),
				XMLUtils.getChildNodeContent(eElement, "employee_first_name"),
				XMLUtils.getChildNodeContent(eElement, "employee_last_name"), "OT",
				XMLUtils.getChildNodeContent(eElement, "position_number"), monthSelected,
				XMLUtils.getChildNodeContent(eElement, "organization_unit"),
				XMLUtils.getChildNodeContent(eElement, "pay_period_year") };
		
		log.info("Bengaluru KeyValueArray = " +KeyValueArray.length);

		JsonObject json = new JsonObject();
		json.add("keywordTypes", oUtil.getKeywords(keyArray, KeyValueArray));
		log.info("Bengaluru keywordTypes = " );
		
		byte[] bytes = CSUFUtils.toByteArrayFromInputStream(dorDocument.getInputStream());
		log.info("Bengaluru bytes = " +bytes.length);
		
		json.addProperty("attachment", Base64.getEncoder().encodeToString(bytes));
		//String aa = Base64.getEncoder().encodeToString(bytes);
		//log.info("Bengaluru attachment = " +aa);
		
		json.addProperty("attachmentMimeType", "application/pdf");
		json.addProperty("attachmentType", "FinalDOR");
		json.addProperty("Document_Type", "HR Faculty and Staff Payroll Documents");
		
		//log.info("Bengaluru Onbase prepareOnbaseJson end="+json.toString());
		
		return json;
	}

	private String sendToOnBase(String responseJson) {
		log.info("Inside sendToOnbase Class");
		String resValue = null;
		StringBuffer response = new StringBuffer();
		URL url = null;

		try {
			String oURL = ONBASE_URL;
			url = new URL(oURL);
			log.info("URL Ok");
		} catch (MalformedURLException e) {
			e.printStackTrace();
			resValue = "Failed";
			log.error("MalformedURLException: {}", e.getMessage());
		}

		HttpURLConnection con = null;
		try {
			con = (HttpURLConnection) url.openConnection();
			log.info("Connection Ok");
		} catch (IOException e1) {
			e1.printStackTrace();
			resValue = "Failed";
			log.error("IOException opening connection: {}", e1.getMessage());
		}

		try {
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");
			log.info("Request Ok");
		} catch (ProtocolException e) {
			e.printStackTrace();
			resValue = "Failed";
			log.error("ProtocolException: {}", e.getMessage());
		}

		con.setDoOutput(true);
		try (OutputStream os = con.getOutputStream()) {
			os.write(responseJson.getBytes("utf-8"));
			os.close();
			int responseCode = con.getResponseCode();
			log.info("Response Ok" + responseCode);
			log.info("POST Response Code to Onbase :: " + responseCode);

			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			log.info("Response from Onbase =============" + response.toString());
			log.error("Response from Onbase =============" + response.toString());

			String responseToString = response.toString();
			String docHandler = "";
			int indexDocHandle = responseToString.indexOf("\"documentHandle\":") + "\"documentHandle\":".length();
			int indexCheckDocHandler = responseToString.indexOf(",", indexDocHandle);
			docHandler = responseToString.substring(indexDocHandle, indexCheckDocHandler);
			docHandler = docHandler.replaceAll("\"", "");
			log.debug("Response from Onbase to check DocumentHandle value =============" + docHandler);
			log.error("Response from Onbase to check DocumentHandle value =============" + docHandler);

			int indexIsSuccess = responseToString.indexOf("\"isSuccess\":") + "\"isSuccess\":".length();
			int indexCheckFalse = responseToString.indexOf(",", indexIsSuccess);
			String isSuccessValue = responseToString.substring(indexIsSuccess, indexCheckFalse);
			log.debug("Response from Onbase to check isSuccess value =============" + isSuccessValue);

			if (responseCode == HttpURLConnection.HTTP_OK) {
				if (isSuccessValue.contains("false")) {
					resValue = "Failed";
					log.error("OnBase returned isSuccess:false - {}", response.toString());
				} else {
					resValue = "Success";
					log.info("OnBase upload successful with docHandler: {}", docHandler);
				}
				log.info("Response from Onbase HTTP_OK =============" + response);
			} else {
				resValue = "Failed";
				log.error("HTTP Error {} - {}", responseCode, response.toString());
			}
		} catch (IOException e1) {
			e1.printStackTrace();
			resValue = "Failed";
			log.error("IOException during request: {}", e1.getMessage());
		} finally {
			con.disconnect();
		}

		return resValue;

	}

}