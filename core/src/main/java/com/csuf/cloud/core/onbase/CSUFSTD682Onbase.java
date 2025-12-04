package com.csuf.cloud.core.onbase;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Base64;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

//import com.adobe.aemfd.docmanager.Document;
import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.FilenetUtil;
import com.csuf.cloud.core.utils.XMLUtils;
import com.google.gson.JsonObject;

@Component(property = { Constants.SERVICE_DESCRIPTION + "=Save Course1", Constants.SERVICE_VENDOR + "=Adobe Systems",
		"process.label" + "=CSUFSTD682Onbase" })
public class CSUFSTD682Onbase implements WorkflowProcess {

	private static final Logger log = LoggerFactory.getLogger(CSUFSTD682Onbase.class);
	
	@Reference
	private GlobalConfigService globalConfigService;

	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap processArguments)
			throws WorkflowException {
		
		log.info("Entered CSUFSTD682Onbase Class");
		
		
		ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
		String payloadPath = workItem.getWorkflowData().getPayload().toString();
		Document doc = null;
		InputStream is = null;
		String firstName = null;
		String lastName = null;
		String encodedPDF = null;
		String studentID = null;
		String caseID = null;
		String major = null;
		String termCode = null;
		String termDescription = null;
		String typeOfForm = null;
		String WithdrawalType = null;
		String chairVal = null;
		String withdrawalDecision = null;
		String instUID = "";
		String chairUID ="";
		
		String cwid = "";
		String empUserID = "";
		String scoPositionNumber = "";
		String unit = "";
		String month = "";
		String year = "";
		Resource xmlNode = resolver.getResource(payloadPath);
		Iterator<Resource> xmlFiles = xmlNode.listChildren();
		JsonObject json = new JsonObject();
		// Get the payload path and iterate the path to find Data.xml, Use Document
		// factory to parse the xml and fetch the required values for the filenet
		// attachment
		/*while (xmlFiles.hasNext()) {
			Resource attachmentXml = xmlFiles.next();
			// log.info("xmlFiles inside ");
			String filePath = attachmentXml.getPath();

			log.info("filePath= " + filePath);
			if (filePath.contains("Data1.xml")) {
				filePath = attachmentXml.getPath().concat("/jcr:content");
				log.info("xmlFiles=" + filePath);
				/// var/fd/dashboard/payload/server0/2019-08-07_3/523TS2EV2Q2XKMLHUNVXUQKTJU_6/Data.xml
				Node subNode = resolver.getResource(filePath).adaptTo(Node.class);

				try {
					is = subNode.getProperty("jcr:data").getBinary().getStream();
				} catch (ValueFormatException e2) {
					log.error("Exception1=" + e2.getMessage());
					e2.printStackTrace();
				} catch (PathNotFoundException e2) {
					log.error("Exception2=" + e2.getMessage());
					e2.printStackTrace();
				} catch (RepositoryException e2) {
					log.error("Exception3=" + e2.getMessage());
					e2.printStackTrace();
				}

				try {
					DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
					DocumentBuilder dBuilder = null;
					try {
						dBuilder = dbFactory.newDocumentBuilder();
					} catch (ParserConfigurationException e1) {
						log.info("ParserConfigurationException=" + e1);
						e1.printStackTrace();
					}
					try {
						doc = dBuilder.parse(is);
					} catch (IOException e1) {
						log.info("IOException=" + e1);
						e1.printStackTrace();
					}
					XPath xpath = XPathFactory.newInstance().newXPath();
					try {} catch (XPathExpressionException e) {
						e.printStackTrace();
					}
				} catch (SAXException e) {
					e.printStackTrace();
				} finally {
					try {
						is.close();
					} catch (IOException e) {
						e.printStackTrace();
					}

				}

			}
			// Payload path contains the PDF, get the inputstream, convert to Base encoder

			if (filePath.contains("STD682OvertimeDistributed.pdf")) {
				log.info("filePath =" + filePath);
				filePath = attachmentXml.getPath().concat("/jcr:content");
				Node subNode = resolver.getResource(filePath).adaptTo(Node.class);
				try {
					is = subNode.getProperty("jcr:data").getBinary().getStream();
					try {
						byte[] bytes = IOUtils.toByteArray(is);
						encodedPDF = Base64.getEncoder().encodeToString(bytes);
						// log.info("encodedPDF="+encodedPDF);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				} catch (ValueFormatException e) {
					log.error("ValueFormatException=" + e.getMessage());
					e.printStackTrace();
				} catch (PathNotFoundException e) {
					log.error("PathNotFoundException=" + e.getMessage());
					e.printStackTrace();
				} catch (RepositoryException e) {
					log.error("RepositoryException=" + e.getMessage());
					e.printStackTrace();
				} finally {
					try {
						is.close();
					} catch (IOException e) {
						log.error("IOException=" + e.getMessage());
						e.printStackTrace();
					}

				}
			}
		}*/
		
if (StringUtils.isNotBlank(payloadPath)) {
			
			
			try {
				is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");
				log.info("Entered IS Stream");
				
				if (null != is) {
					doc = XMLUtils.getDomDocument(is);
					log.info("Entered IS Stream="+doc);
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
					
					
					byte[] bytes = IOUtils.toByteArray(is);
					encodedPDF = Base64.getEncoder().encodeToString(bytes);
					
					log.info("Entered encodedPDF Stream="+encodedPDF);
					

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
			
					
				

					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						Element element = XMLUtils.getChildNode(afBoundDataElement, "STD682Overtime");
						json = prepareOnbaseJson(element, fUtil, encodedPDF);
						
						
						log.info("Pushpa Onbase json=" + json.toString());
						
						
						//String resultVal = sendToOnBase(json.toString());
						String resultVal = "";
						log.info("Result Value returned from onbase in STD682OvertsimeDistributedOnbase : {}",
								resultVal);
						
						log.debug("Result Value returned from onbase in STD682OvertsimeDistributedOnbase : {}",
								resultVal);
					} else {
						log.error("afbound elements not found in STD682OvertsimeDistributedOnbase");
					}
				

				

			} catch (Exception e) {
				log.error("SQL Exception from Class Name: CSUFSTD682OvertimeDistributedFileNet"
						+ Arrays.toString(e.getStackTrace()));

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
		
		// Create the JSON with the required parameter from Data.xml, encoded Base 64 to
		// the Filenet rest call to save the document
		String jsonString = "{" + "\"FirstName\": \"" + firstName + "\"," + "\"LastName\": \"" + lastName + "\","  + "\"withdrawalDecision\": \"" + withdrawalDecision + "\","
				+ "\"CWID\": \"" + studentID + "\"," + "\"CaseID\": \"" + caseID + "\"," + "\"Major\": \"" + major 
				+ "\"," + "\"TermCode\": \"" + termCode + "\"," + "\"TermDescription\": \"" + termDescription + "\"," + "\"chairUID\": \"" + chairUID + "\"," + "\"instUID\": \"" + instUID + "\","
				+ "\"Attachment\": \"" + encodedPDF + "\"," + "\"AttachmentType\": " + "\"FinalDOR\"" + ","
				+ "\"AttachmentMimeType\": " + "\"application/pdf\"" + "," + "\"WithdrawalType\": \"" + WithdrawalType
				+ "\"}";
		
		/*if (encodedPDF != null && lastName != null && firstName != null) {
			log.info("Read course1");
			URL url = null;
			try {
				String filenetUrl = globalConfigService.getFilenetURL();
				url = new URL(filenetUrl);

				

			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
			HttpURLConnection con = null;
			try {
				con = (HttpURLConnection) url.openConnection();
				log.info("Con=" + con);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			try {
				con.setRequestMethod("POST");
				con.setRequestProperty("Content-Type", "application/json");

			} catch (ProtocolException e) {
				log.info("ProtocolException=" + e.getMessage());
				e.printStackTrace();
			}
			con.setDoOutput(true);

			try (OutputStream os = con.getOutputStream()) {
				os.write(jsonString.getBytes("utf-8"));
				os.close();
				con.getResponseCode();

			} catch (IOException e1) {
				log.error("IOException=" + e1.getMessage());
				e1.printStackTrace();
			}
			try {
				con.getInputStream();
			} catch (IOException e) {
				log.error("IOException=" + e.getMessage());
				e.printStackTrace();
			}

		}*/

	}
	
	private JsonObject prepareOnbaseJson(Element eElement, FilenetUtil oUtil, String encodedPDF) throws IOException {
		
		log.info("Onbase prepareOnbaseJson method");
		
		String[] keyArray = { "CHRS_ID-8", "Employee_ID-8", "First_Name-8", "Last_Name-8",
				"Doc_Type_-_Faculty_and_Staff-8", "SCO_Position_Number-8", "Month-1", "Unit-8", "Year-1" };
		String monthSelected = XMLUtils.getChildNodeContent(eElement, "pay_period_month");
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

		JsonObject json = new JsonObject();
		json.add("keywordTypes", oUtil.getKeywords(keyArray, KeyValueArray));
		
		json.addProperty("attachment", encodedPDF);
		json.addProperty("attachmentMimeType", "application/pdf");
		json.addProperty("attachmentType", "FinalDOR");
		json.addProperty("Document_Type", "HR Faculty and Staff Payroll Documents");
		
		log.info("Onbase prepareOnbaseJson end="+json.toString());
		
		return json;
	}
}