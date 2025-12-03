package com.csuf.cloud.core.onbase;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import com.adobe.granite.workflow.WorkflowException;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;

@Component(property = { "service.description=UniversityWithdrawalFormOnBase", "service.vendor=ThoughtFocus",
        "process.label=UniversityWithdrawalFormOnBase" })
public class UniversityWithdrawalFormOnBase implements WorkflowProcess {

    private static final Logger log = LoggerFactory.getLogger(UniversityWithdrawalFormOnBase.class);

    //private static final String ONBASE_URL = "http://ERPOBE5WSSTG01.fullerton.edu:8080/OnBaseDocumentUpload";
    private static final String ONBASE_URL = "https://onbaseweb.fullerton.edu/aem/OnBaseDocumentUpload";

    @Override
    public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws WorkflowException {
        log.info("Starting OnBase Document Upload Process");

        try {
            String formData = extractFormData(workItem);
            String result = sendToOnBase(formData);

            if ("Success".equals(result)) {
                log.info("OnBase upload successful!");
            } else {
                log.error("OnBase upload failed: {}", result);
                throw new WorkflowException("OnBase upload failed: " + result);
            }

        } catch (Exception e) {
            log.error("Error in OnBase workflow process", e);
            throw new WorkflowException("OnBase workflow process failed", e);
        }
    }

    private String extractFormData(WorkItem workItem) {

        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("{");
        jsonBuilder.append("\"keywordTypes\":{");
        jsonBuilder.append("\"Official_Work_Location-8\":[\"Main Campus\"],");
        jsonBuilder.append("\"Telecommuting_Start_Date-4\":[\"07/01/2025\"],");
        jsonBuilder.append("\"Manager_Justification-8\":[\"N/A\"],");
        jsonBuilder.append("\"CHRS_ID-8\":[\"\"],");
        jsonBuilder.append("\"Employee_Type-8\":[\"R09\"],");
        jsonBuilder.append("\"First_Name-8\":[\"Rosemary\"],");
        jsonBuilder.append("\"Telecommuting_End_Date-4\":[\"01/01/2026\"],");
        jsonBuilder.append("\"Manager_Decision-8\":[\"Recommend\"],");
        jsonBuilder.append("\"Last_Name-8\":[\"Farr\"],");
        jsonBuilder.append("\"Employee_ID-8\":[\"890965742\"],");
        jsonBuilder.append("\"Telecommuting_Days-8\":[\"Friday\"],");
        jsonBuilder.append("\"Doc_Type_-_Telecommuting-8\":[\"Telecommuting Agreement\"],");
        jsonBuilder.append("\"Telecommuting_Location-8\":[\"Montclair\"],");
        jsonBuilder.append("\"AVP_Decision-8\":[\"Recommend\"],");
        jsonBuilder.append("\"AVP_Justification-8\":[\"N/A\"],");
        jsonBuilder.append("\"Work_Hours-8\":[\"6:30-3:00\"]");
        jsonBuilder.append("},");
        jsonBuilder.append("\"attachment\":\"").append(generateDummyPDFBase64()).append("\",");
        jsonBuilder.append("\"attachmentMimeType\":\"application/pdf\",");
        jsonBuilder.append("\"attachmentType\":\"FinalDOR\",");
        jsonBuilder.append("\"document_Type\":\"HR Telecommuting Agreement Documents\"");
        jsonBuilder.append("}");

        return jsonBuilder.toString();
    }

    private String generateDummyPDFBase64() {
        String dummyPDFContent = "JVBERi0xLjQKJcOkw7zDtsO8CjIgMCBvYmoKPDwKL0xlbmd0aCAzIDAgUgovVHlwZSAvUGFnZQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSAKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+Cj4+Cj4+Ci9QYXJlbnQgMSAwIFIKPj4KZW5kb2JqCjMgMCBvYmoKNDQKZW5kb2JqCjEgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFsyIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDI2MiAwMDAwMCBuCnRyYWlsZXIKPDwKL1NpemUgNQovUm9vdCA0IDAgUgo+PgpzdGFydHhyZWYKMzE3CiUlRU9G";

        return dummyPDFContent;
    }

    private String sendToOnBase(String responseJson) {
        log.debug("Inside sendToOnbase Class");
        String resValue = null;
        StringBuffer response = new StringBuffer();
        URL url = null;

        try {
            String oURL = ONBASE_URL;
            url = new URL(oURL);
            log.error("URL Ok");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            resValue = "Failed";
            log.error("MalformedURLException: {}", e.getMessage());
        }

        HttpURLConnection con = null;
        try {
            con = (HttpURLConnection) url.openConnection();
            log.error("Connection Ok");
        } catch (IOException e1) {
            e1.printStackTrace();
            resValue = "Failed";
            log.error("IOException opening connection: {}", e1.getMessage());
        }

        try {
            con.setRequestMethod("POST");
            con.setRequestProperty("Content-Type", "application/json");
            log.error("Request Ok");
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
            log.error("Response Ok"+responseCode);
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
