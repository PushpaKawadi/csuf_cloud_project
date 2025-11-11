package com.csuf.cloud.core.utils;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;

public class AemAIUtils {

	private static final Logger log = LoggerFactory.getLogger(AemAIUtils.class);

	private static final String SUBMIT_URL = "/libs/fd/dashboard/servlets/afsubmission.json?operation=submit";
	private static final String CSRF_TOKEN_URL = "/libs/granite/csrf/token.json";

	private ProcessingInstanceConfigService processingInstanceConfigService;
	private InboxItemService inboxService;

	public boolean autoSubmission(Map<String, String> formData) {
		log.debug("entered AemAIUtils autoSubmission method");

		HttpPost httpPost = null;

		if (formData.containsKey("workItemId") && formData.containsKey("formPath") && formData.containsKey("comment")
				&& formData.containsKey("attachments") && formData.containsKey("formRoute")
				&& formData.containsKey("_charset_") && formData.containsKey("fileAttachmentMap")
				&& formData.containsKey("dataXML")) {
			try (CloseableHttpClient client = HttpClients.createDefault();) {
				httpPost = new HttpPost(processingInstanceConfigService.processingUrl().concat(SUBMIT_URL));

				String loginTokenJson = inboxService.getResponseFromProcessingInstance(CSRF_TOKEN_URL);

				if (StringUtils.isNotBlank(loginTokenJson)) {
					JsonParser parser = new JsonParser();
					JsonObject json = parser.parse(loginTokenJson).getAsJsonObject();
					String loginToken = json.get("token").getAsString();
					httpPost.addHeader("CSRF-Token", loginToken);
				}

				String auth = new StringBuffer(processingInstanceConfigService.userName()).append(":")
						.append(processingInstanceConfigService.userSecurity()).toString();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
				String authHeader = "Basic " + new String(encodedAuth);
				httpPost.addHeader("Authorization", authHeader);

				MultipartEntityBuilder builder = MultipartEntityBuilder.create();
				builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
				builder.setContentType(ContentType.MULTIPART_FORM_DATA);
				builder.addTextBody("workItemId", formData.get("workItemId"), ContentType.TEXT_PLAIN);
				builder.addTextBody("formPath", formData.get("formPath"), ContentType.TEXT_PLAIN);
				builder.addTextBody("comment", formData.get("comment"), ContentType.TEXT_PLAIN);
				builder.addTextBody("attachments", formData.get("attachments"), ContentType.TEXT_PLAIN);
				builder.addTextBody("formRoute", formData.get("formRoute"), ContentType.TEXT_PLAIN);
				builder.addTextBody("_charset_", formData.get("_charset_"), ContentType.TEXT_PLAIN);
				builder.addTextBody("dataXML", formData.get("dataXML"), ContentType.TEXT_PLAIN);
				builder.addTextBody("fileAttachmentMap", formData.get("fileAttachmentMap"), ContentType.TEXT_PLAIN);

				HttpEntity multipart = builder.build();
				httpPost.setEntity(multipart);

				try (CloseableHttpResponse httpResponse = client.execute(httpPost);) {
					int statusCode = httpResponse.getStatusLine().getStatusCode();
					if (statusCode == 200) {
						log.debug("Form submission successful");
						log.debug("exit AemAIUtils autoSubmission method");
						return true;
					} else {
						log.error("error in getting response response from processing instance with status code : {}",
								statusCode);
						throw new Exception("error in POST call");
					}
				}
			} catch (Exception e) {
				log.error("Exception during form submission: {}", e.getMessage());
				log.debug("Stack trace: {}", Arrays.toString(e.getStackTrace()));
				log.debug("exit AemAIUtils autoSubmission method");
				return false;
			} finally {
				if (null != httpPost) {
					httpPost.completed();
					httpPost.releaseConnection();
				}
			}
		} else {
			log.debug("exit AemAIUtils autoSubmission method");
			return false;
		}
	}

	public AemAIUtils(ProcessingInstanceConfigService processingInstanceConfigService, InboxItemService inboxService) {
		this.processingInstanceConfigService = processingInstanceConfigService;
		this.inboxService = inboxService;
	}

	public boolean allowed(String userId, String assignee) {
		if (userId == null || assignee == null) {
			return false;
		}
		return userId.trim().equalsIgnoreCase(assignee.trim());
	}

	public boolean isWorkflowAuthorized(JSONArray wfJsonArray, String workflowTitle, String taskTitle) {
		try {
			if (wfJsonArray == null || wfJsonArray.length() == 0) {
				log.warn("Empty workflow authorization data");
				return false;
			}

			for (int i = 0; i < wfJsonArray.length(); i++) {
				JSONObject wfObj = wfJsonArray.getJSONObject(i);

				String workflowName = wfObj.optString("WORKFLOW_NAME", "");
				String stepName = wfObj.optString("STEP_NAME", "");

				if (workflowTitle.equalsIgnoreCase(workflowName) && taskTitle.equalsIgnoreCase(stepName)) {
					return true;
				}
			}
		} catch (Exception e) {
			log.error("Error checking workflow authorization", e);
		}

		return false;
	}

}
