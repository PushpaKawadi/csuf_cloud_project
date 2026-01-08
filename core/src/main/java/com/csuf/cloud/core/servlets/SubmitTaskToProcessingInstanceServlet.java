package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

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
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=" + "/bin/submitTaskToProcessingInstance" })
public class SubmitTaskToProcessingInstanceServlet extends SlingAllMethodsServlet {

	private static final long serialVersionUID = 2598426539166789515L;

	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	private static final String SUBMIT_URL = "/libs/fd/dashboard/servlets/afsubmission.json?operation=submit";
	private static final String SAVE_URL = "/libs/fd/dashboard/servlets/afsubmission.json?operation=saveAsDraft";
	private static final String CSRF_TOKEN_URL = "/libs/granite/csrf/token.json";

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private InboxItemService inboxService;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		log.debug("entered SubmitTaskToProcessingInstanceServlet doPost method");
		String operation = request.getParameter("operation");
		HttpPost httpPost = null;
		try (PrintWriter out = response.getWriter();) {
			final Map<String, RequestParameter[]> params = request.getRequestParameterMap();
			String workItemId = null, formPath = null, comment = null, attachments = null, formRoute = null,
					_charset_ = null, dataXML = null, fileAttachmentMap = null;

			if (params.containsKey("workItemId"))
				workItemId = params.get("workItemId")[0].toString();

			if (params.containsKey("formPath"))
				formPath = params.get("formPath")[0].toString();

			if (params.containsKey("comment"))
				comment = params.get("comment")[0].toString();

			if (params.containsKey("attachments"))
				attachments = params.get("attachments")[0].toString();

			if (params.containsKey("formRoute"))
				formRoute = params.get("formRoute")[0].toString();

			if (params.containsKey("_charset_"))
				_charset_ = params.get("_charset_")[0].toString();

			if (params.containsKey("dataXML"))
				dataXML = params.get("dataXML")[0].toString();

			if (params.containsKey("fileAttachmentMap"))
				fileAttachmentMap = params.get("fileAttachmentMap")[0].toString();

			try (CloseableHttpClient client = HttpClients.createDefault();) {
				if (operation.equalsIgnoreCase("submit"))
					httpPost = new HttpPost(processingInstanceConfigService.processingUrl().concat(SUBMIT_URL));
				else
					httpPost = new HttpPost(processingInstanceConfigService.processingUrl().concat(SAVE_URL));

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
				builder.addTextBody("workItemId", workItemId, ContentType.TEXT_PLAIN);
				builder.addTextBody("formPath", formPath, ContentType.TEXT_PLAIN);

				if (operation.equalsIgnoreCase("submit"))
					builder.addTextBody("comment", comment, ContentType.TEXT_PLAIN);

				builder.addTextBody("attachments", attachments, ContentType.TEXT_PLAIN);

				if (operation.equalsIgnoreCase("submit"))
					builder.addTextBody("formRoute", formRoute, ContentType.TEXT_PLAIN);

				builder.addTextBody("_charset_", _charset_, ContentType.TEXT_PLAIN);
				builder.addTextBody("dataXML", dataXML, ContentType.TEXT_PLAIN);
				builder.addTextBody("fileAttachmentMap", fileAttachmentMap, ContentType.TEXT_PLAIN);

				/*
				 * builder.addBinaryBody( "file", new File("test.txt"),
				 * ContentType.APPLICATION_OCTET_STREAM, "file.ext");
				 */

				HttpEntity multipart = builder.build();
				httpPost.setEntity(multipart);

				try (CloseableHttpResponse httpResponse = client.execute(httpPost);) {
					int statusCode = httpResponse.getStatusLine().getStatusCode();
					if (statusCode == 200) {
						// HttpEntity entity = httpResponse.getEntity();
						// String responseString = EntityUtils.toString(entity, "UTF-8");
						// log.debug("post data to processing instance success response : {}",
						// responseString);
						out.append("success");
					} else {
						log.error("error in getting response response from processing instance with status code : {}",
								statusCode);
						throw new Exception("error in POST call");
					}
				}
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != httpPost) {
				httpPost.completed();
				httpPost.releaseConnection();
			}
		}
		log.debug("exit SubmitTaskToProcessingInstanceServlet doPost method");
	}
}