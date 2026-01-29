package com.csuf.cloud.core.database;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.LinkedHashMap;

import javax.jcr.RepositoryException;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.sling.api.resource.ResourceResolver;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
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
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;

/**
 * 
 * @author 103499
 *
 */
@Component(property = { Constants.SERVICE_DESCRIPTION + "=CSUF Save Workflow Instance History",
		Constants.SERVICE_VENDOR + "=Adobe Systems", "process.label" + "=CSUF Save Workflow Instance History" })
public class CSUFWorkflowInstanceHistoryDB implements WorkflowProcess {

	private static final Logger log = LoggerFactory.getLogger(CSUFWorkflowInstanceHistoryDB.class);

	@Reference
	private GlobalConfigCSUFService globalConfigCSUFService;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;

	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap processArguments)
			throws WorkflowException {

		String paramsValue = ((String) processArguments.get("PROCESS_ARGS", "string")).toString();
		log.info("params value=======" + paramsValue);

		String param = paramsValue;

		log.info("parameter" + param);
		String workflowInstance = "";
		String payloadPath = "";
		String workflowInitiator = "";
		String workflowName = "";
		String workflowTitle = "";
		String workflowVersion = "";
		String workflowStatus = "";
		Timestamp workflowCompleteTime = null;
		Timestamp workflowStartTime = null;
		LinkedHashMap<String, Object> dataMap = null;
		payloadPath = workItem.getWorkflowData().getPayload().toString();
		ResourceResolver resolver = workflowSession.adaptTo(ResourceResolver.class);
		if (StringUtils.isNotBlank(payloadPath)) {

			try {

				InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, payloadPath, "Data.xml");

				if (null != is) {
					Document doc = XMLUtils.getDomDocument(is);
					Element afBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
					if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
						workflowInitiator = XMLUtils.getChildNodeContent(afBoundDataElement, "workflow_initiator");

					}
				}
			} catch (SAXException | IOException | ParserConfigurationException | RepositoryException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}

		if (param.equalsIgnoreCase("Start of the Workflow Instance")) {
			workflowInstance = workItem.getWorkflow().getId();
			workflowStartTime = new java.sql.Timestamp(workItem.getTimeStarted().getTime());
			workflowName = workItem.getWorkflow().getWorkflowModel().getId();
			workflowTitle = workItem.getWorkflow().getWorkflowModel().getTitle();
			workflowVersion = workItem.getWorkflow().getWorkflowModel().getVersion();
			workflowStatus = workItem.getWorkflow().getState();
			dataMap = new LinkedHashMap<String, Object>();
			dataMap.put("WORKFLOW_INSTANCE_ID", workflowInstance);
			dataMap.put("WORKFLOW_PAYLOAD", payloadPath);
			dataMap.put("WORKFLOW_MODEL_NAME", workflowName);
			// dataMap.put("WORKFLOW_START_TIME", workflowStartTime);
			dataMap.put("WORKFLOW_INITIATOR", workflowInitiator);
			dataMap.put("WORKFLOW_TITLE", workflowTitle);
			// dataMap.put("WORKFLOW_COMPLETE_TIME", workflowCompleteTime);
			dataMap.put("WORKFLOW_STATUS", workflowStatus);
			dataMap.put("WORKFLOW_VERSION", Float.parseFloat(workflowVersion));

			JSONObject json = new JSONObject();
			json.put("DB_CONNECTION", "AEMDBDEV");
			json.put("TABLE_NAME", "AEM_WORKFLOW_INSTANCE_HISTORY");
			json.put("PROCESS_STEP_VAL", "Start of the Workflow Instance");
			json.put("WORKFLOW_INSTANCE_ID", workflowInstance);
			json.put("DATA_MAP", dataMap);

			String dbServiceUrl = "https://myformstst.fullerton.edu/bin/wfInsDBSaveforCloud";
			try {
				CloseableHttpClient client = HttpClients.createDefault();
				HttpPost post = new HttpPost(dbServiceUrl);
				post.addHeader("Content-Type", "application/json");
				post.setEntity(new StringEntity(json.toString()));

				CloseableHttpResponse response = client.execute(post);
				log.info("DB Service Response: =" + response.getStatusLine());

				client.close();
			} catch (Exception e) {
				e.printStackTrace();

			}
		}
		if (param.equalsIgnoreCase("End of the Workflow Instance")) {
			workflowCompleteTime = new java.sql.Timestamp(System.currentTimeMillis());
			workflowStatus = "COMPLETED";
			workflowInstance = workItem.getWorkflow().getId();
			JSONObject json = new JSONObject();
			json.put("DB_CONNECTION", "AEMDBDEV");
			json.put("TABLE_NAME", "AEM_WORKFLOW_INSTANCE_HISTORY");
			json.put("PROCESS_STEP_VAL", "End of the Workflow Instance");
			dataMap = new LinkedHashMap<String, Object>();
			dataMap.put("WORKFLOW_INSTANCE_ID", workflowInstance);
			json.put("DATA_MAP", dataMap);

			String dbServiceUrl = "https://myformstst.fullerton.edu/bin/wfInsDBSaveforCloud";
			try {
				CloseableHttpClient client = HttpClients.createDefault();
				HttpPost post = new HttpPost(dbServiceUrl);
				post.addHeader("Content-Type", "application/json");
				post.setEntity(new StringEntity(json.toString()));

				CloseableHttpResponse response = client.execute(post);

				client.close();
			} catch (Exception e) {
				e.printStackTrace();

			}
		}
	}
}
