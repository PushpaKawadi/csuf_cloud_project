package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=" + "/bin/uploadTaskAttachment" })
public class UploadTaskAttachmentOnProcessingInstanceServlet extends SlingAllMethodsServlet {

	private static final long serialVersionUID = 2598426539166789515L;

	protected final transient Logger log = LoggerFactory.getLogger(this.getClass());
	private static final String CSRF_TOKEN_URL = "/libs/granite/csrf/token.json";
	private static final String FILE_SERVLET_URL = "/bin/handleFile";
	private static final String RESPONSE_CONTENT_TYPE = "application/json";

	@Reference
	private transient ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private transient InboxItemService inboxService;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		log.debug("entered UploadTaskAttachmentOnProcessingInstanceServlet doPost method");
		HttpPost httpPost = null;
		String workItemId = null;

		try (PrintWriter out = response.getWriter();) {
			JsonArray jsonResponse = new JsonArray();
			JsonParser parser = new JsonParser();
			final Map<String, RequestParameter[]> params = request.getRequestParameterMap();
			final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			if (isMultipart) {
				if (params.containsKey("workItemId")) {
					workItemId = params.get("workItemId")[0].toString().trim();
					if (StringUtils.isNotBlank(workItemId) && params.containsKey("file")) {
						for (Map.Entry<String, RequestParameter[]> pairs : params.entrySet()) {
							RequestParameter[] pArr = pairs.getValue();
							for (RequestParameter param : pArr) {
								boolean formField = param.isFormField();
								String fileName = param.getFileName();
								if (StringUtils.isNotBlank(fileName) && !formField) {
									InputStream stream = param.getInputStream();
									try (CloseableHttpClient client = HttpClients.createDefault();) {
										httpPost = new HttpPost(processingInstanceConfigService.processingUrl()
												.concat(FILE_SERVLET_URL));
										String loginTokenJson = inboxService
												.getResponseFromProcessingInstance(CSRF_TOKEN_URL);
										if (StringUtils.isNotBlank(loginTokenJson)) {
											JsonObject json = parser.parse(loginTokenJson).getAsJsonObject();
											String loginToken = json.get("token").getAsString();
											httpPost.addHeader("CSRF-Token", loginToken);
										}

										String auth = new StringBuffer(processingInstanceConfigService.userName())
												.append(":").append(processingInstanceConfigService.userSecurity())
												.toString();
										byte[] encodedAuth = Base64
												.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
										String authHeader = "Basic " + new String(encodedAuth);
										httpPost.addHeader("Authorization", authHeader);
										MultipartEntityBuilder builder = MultipartEntityBuilder.create();
										builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
										builder.setContentType(ContentType.MULTIPART_FORM_DATA);

										builder.addTextBody("workItemId", workItemId, ContentType.TEXT_PLAIN);
										builder.addTextBody("fileName", fileName, ContentType.TEXT_PLAIN);
										builder.addBinaryBody("file", stream, ContentType.DEFAULT_BINARY, fileName);
										HttpEntity multipart = builder.build();
										httpPost.setEntity(multipart);

										try (CloseableHttpResponse httpResponse = client.execute(httpPost);) {
											int statusCode = httpResponse.getStatusLine().getStatusCode();

											if (statusCode == 200) {
												HttpEntity entity = httpResponse.getEntity();
												String responseString = EntityUtils.toString(entity, "UTF-8");
												/*
												 * log. debug("post file to processing instance success response : {}" ,
												 * responseString);
												 */
												if (StringUtils.isNotBlank(responseString)) {
													JsonObject json = parser.parse(responseString).getAsJsonObject();
													jsonResponse.add(json);
												}
											} else {
												response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
												log.error(
														"error in getting response from processing instance with status code : {}",
														statusCode);
												throw new Exception("error in POST call");
											}
										}
									}
								}
							}
						}
					}
				}
			} else if (params.containsKey("op")) {
				httpPost = null;
				String operation = params.get("op")[0].toString().trim();
				if (params.containsKey("filePath") && params.containsKey("fileName")) {
					String filePath = params.get("filePath")[0].toString().trim();
					String fileName = params.get("fileName")[0].toString().trim();
					if (operation.equalsIgnoreCase("delete") && StringUtils.isNotBlank(filePath)) {
						try (CloseableHttpClient client = HttpClients.createDefault();) {
							httpPost = new HttpPost(
									processingInstanceConfigService.processingUrl().concat(FILE_SERVLET_URL));
							String loginTokenJson = inboxService.getResponseFromProcessingInstance(CSRF_TOKEN_URL);

							if (StringUtils.isNotBlank(loginTokenJson)) {
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

							builder.addTextBody("op", operation, ContentType.TEXT_PLAIN);
							builder.addTextBody("filePath", filePath, ContentType.TEXT_PLAIN);
							builder.addTextBody("fileName", fileName, ContentType.TEXT_PLAIN);

							HttpEntity multipart = builder.build();
							httpPost.setEntity(multipart);
							// String httpPostEntityString = EntityUtils.toString(httpPost.getEntity(),
							// "UTF-8");
							// log.debug("httpPostEntityString : {}", httpPostEntityString);
							try (CloseableHttpResponse httpResponse = client.execute(httpPost);) {
								int statusCode = httpResponse.getStatusLine().getStatusCode();
								if (statusCode == 200) {
									HttpEntity entity = httpResponse.getEntity();
									String responseString = EntityUtils.toString(entity, "UTF-8");
									log.debug("delete file from processing instance response : {}", responseString);
									if (StringUtils.isNotBlank(responseString)) {
										JsonObject json = parser.parse(responseString).getAsJsonObject();
										jsonResponse.add(json);
									}
								} else {
									response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
									log.error(
											"error in getting response from processing instance with status code : {}",
											statusCode);
									throw new Exception("error in POST call");
								}
							}
						}
					}
				}
			}
			response.setContentType(RESPONSE_CONTENT_TYPE);
			out.print(jsonResponse);
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != httpPost) {
				httpPost.completed();
				httpPost.releaseConnection();
			}
		}
		log.debug("exit UploadTaskAttachmentOnProcessingInstanceServlet doPost method");
	}
}