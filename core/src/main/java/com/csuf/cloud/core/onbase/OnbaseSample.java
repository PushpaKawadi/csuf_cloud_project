package com.csuf.cloud.core.onbase;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.Base64;
import java.util.Iterator;

import javax.jcr.Node;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.ValueFormatException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.io.IOUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.csuf.cloud.core.services.GlobalConfigService;

@Component(property = {
        Constants.SERVICE_DESCRIPTION + "=Save Course1",
        Constants.SERVICE_VENDOR + "=Adobe Systems",
        "process.label" + "=OnBase Save"
})
public class OnbaseSample implements WorkflowProcess {

    private static final Logger log = LoggerFactory.getLogger(OnbaseSample.class);

    @Reference
    private GlobalConfigService globalConfigService;

    /** Utility method to get a tag value using DOM */
    private String getTagValue(Document doc, String tagName) {
        if (doc.getElementsByTagName(tagName).getLength() > 0 &&
            doc.getElementsByTagName(tagName).item(0).getFirstChild() != null) {

            return doc.getElementsByTagName(tagName).item(0).getFirstChild().getNodeValue();
        }
        return null;
    }

    @Override
    public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap processArguments)
            throws WorkflowException {
    	
    	log.info("Entered OnBase Sample Class");

        ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
        String payloadPath = workItem.getWorkflowData().getPayload().toString();

        Document doc = null;
        InputStream is = null;

        String cwid = "";
		String empUserID = "";
		String scoPositionNumber = "";
		String unit = "";
		String month = "";
		String year = "";
		String firstName = "";
		String lastName = "";
		String encodedPDF = "";

        Resource xmlNode = resolver.getResource(payloadPath);
        log.info("Pushpa xmlNode="+xmlNode);

        Iterator<Resource> xmlFiles = xmlNode.listChildren();
        
        log.info("Pushpa xmlFiles="+xmlFiles);

        // Loop through payload files
        while (xmlFiles.hasNext()) {

            Resource attachmentXml = xmlFiles.next();
            log.info("Pushpa attachmentXml="+attachmentXml);
            
            String filePath = attachmentXml.getPath();
            log.info("Pushpa filePath="+filePath);
            
            

            /** -------------------- READ XML ---------------------- */
            if (filePath.contains("Data1.xml")) {
            	log.info("Pushpa Inside filePath="+filePath);
            	
                filePath = attachmentXml.getPath().concat("/jcr:content");
                log.info("Pushpa Inside filePath="+filePath);
               
                Node subNode = resolver.getResource(filePath).adaptTo(Node.class);
                log.info("Pushpa Inside subNode="+subNode);

                try {
                    is = subNode.getProperty("jcr:data").getBinary().getStream();
                    log.info("Pushpa Inside subNode="+is);
                    
                    DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
                    DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
                    doc = dBuilder.parse(is);
                    doc.getDocumentElement().normalize();

                    // Read XML tags using DOM
                    cwid = getTagValue(doc, "empl_Id");
                    firstName = getTagValue(doc, "employee_first_name");
                    lastName = getTagValue(doc, "employee_last_name");
                    empUserID = getTagValue(doc, "hidden_userID");
                    scoPositionNumber = getTagValue(doc, "position_number");
                    unit = getTagValue(doc, "organization_unit");
                    month = getTagValue(doc, "pay_period_month");
                    year = getTagValue(doc, "pay_period_year");
                   
                    log.info("Pushpa cwid="+cwid);
                    
                    log.info("Pushpa cwid="+lastName);
                    log.info("Pushpa cwid="+cwid);

                } catch (Exception e) {
                    log.error("XML Error: {}", e.getMessage());
                } finally {
                    try {
                        if (is != null) is.close();
                    } catch (IOException e) {
                        log.error("Stream close error: {}", e.getMessage());
                    }
                }
            }

            /** -------------------- READ PDF ---------------------- */
            if (filePath.contains("STD682OvertimeDistributed.pdf")) {

                filePath = attachmentXml.getPath().concat("/jcr:content");
                Node subNode = resolver.getResource(filePath).adaptTo(Node.class);
                
                log.info("Pushpa filePath pdf="+filePath); 
               
                try {
                    is = subNode.getProperty("jcr:data").getBinary().getStream();
                    byte[] bytes = IOUtils.toByteArray(is);
                    encodedPDF = Base64.getEncoder().encodeToString(bytes);
                    
                    log.info("Pushpa encodedPDF="+encodedPDF);


                } catch (Exception e) {
                    log.error("PDF Read Error: {}", e.getMessage());
                } finally {
                    try {
                        if (is != null) is.close();
                    } catch (IOException e) {
                        log.error("Stream close error: {}", e.getMessage());
                    }
                }
            }
        }

        /** -------------------- BUILD JSON ---------------------- */
        /*String jsonString = "{"
                + "\"FirstName\": \"" + firstName + "\","
                + "\"LastName\": \"" + lastName + "\","
                + "\"withdrawalDecision\": \"" + withdrawalDecision + "\","
                + "\"CWID\": \"" + studentID + "\","
                + "\"CaseID\": \"" + caseID + "\","
                + "\"Major\": \"" + major + "\","
                + "\"TermCode\": \"" + termCode + "\","
                + "\"TermDescription\": \"" + termDescription + "\","
                + "\"chairUID\": \"" + chairUID + "\","
                + "\"instUID\": \"" + instUID + "\","
                + "\"Attachment\": \"" + encodedPDF + "\","
                + "\"AttachmentType\": \"FinalDOR\","
                + "\"AttachmentMimeType\": \"application/pdf\","
                + "\"WithdrawalType\": \"" + WithdrawalType + "\""
                + "}";*/

        /** -------------------- SEND TO FILENET ---------------------- */
        if (encodedPDF != null && lastName != null && firstName != null) {

            /*try {
                String filenetUrl = globalConfigService.getFilenetURL();
                URL url = new URL(filenetUrl);
                HttpURLConnection con = (HttpURLConnection) url.openConnection();

                con.setRequestMethod("POST");
                con.setRequestProperty("Content-Type", "application/json");
                con.setDoOutput(true);

                try (OutputStream os = con.getOutputStream()) {
                    os.write(jsonString.getBytes("utf-8"));
                    con.getResponseCode();
                }

                con.getInputStream();

            } catch (Exception e) {
                log.error("Filenet call error: {}", e.getMessage());
            }*/
        }
    }
}
