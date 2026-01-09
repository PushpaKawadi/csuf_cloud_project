package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Map;

import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.utils.ArgumentParser;
import com.csuf.cloud.core.utils.CSUFUtils;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=" + "/bin/handleFile" })

public class HandleFileServlet extends SlingAllMethodsServlet {
	private static final long serialVersionUID = 2598426539166789515L;

	@Reference
	private AssetService assetService;

	protected final transient Logger log = LoggerFactory.getLogger(getClass());

	private static final String RESPONSE_CONTENT_TYPE = "application/json";
	private static final String FILE_SERVLET_SUCCESS_MESSAGE = "success";

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		doPost(request, response);
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		ResourceResolver resourceResolver = request.getResourceResolver();
		Session serviceUserSession = resourceResolver.adaptTo(Session.class);
		WorkflowSession wfSession = resourceResolver.adaptTo(WorkflowSession.class);
		String workItemId = null;
		String fileName = null;
		JsonObject jsonResponse = new JsonObject();
		try (PrintWriter out = response.getWriter();) {
			final Map<String, RequestParameter[]> params = request.getRequestParameterMap();
			final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			if (isMultipart && !params.containsKey("op")) {
				if (params.containsKey("workItemId")) {
					workItemId = params.get("workItemId")[0].toString().trim();
					if (StringUtils.isNotBlank(workItemId) && params.containsKey("file")) {
						for (Map.Entry<String, RequestParameter[]> pairs : params.entrySet()) {
							RequestParameter[] pArr = pairs.getValue();
							for (RequestParameter param : pArr) {
								boolean formField = param.isFormField();
								fileName = param.getFileName();
								fileName = CSUFUtils.replaceInvalidChars(fileName);
								log.debug("param fileName : {}", fileName);
								log.debug("param Name : {}", param.getName());
								if (StringUtils.isNotBlank(fileName) && !formField) {
									InputStream stream = param.getInputStream();
									WorkItem workItem = wfSession.getWorkItem(workItemId);
									boolean isAttachmentAllowed = ArgumentParser
											.isUploadTaskAttachmentAllowed(workItem);
									log.debug("isAttachmentAllowed = {} for workItem with id = {}", isAttachmentAllowed,
											workItem.getId());
									if (isAttachmentAllowed) {
										String taskAttachmentsFolder = ArgumentParser
												.getOutputTaskAttachmentsPath(workItem);
										if (StringUtils.isBlank(taskAttachmentsFolder)) {
											String combinedName = ArgumentParser
													.getOutputCombinedTaskAttachmentsPath(workItem);
											if (StringUtils.isNotBlank(combinedName) && combinedName.contains(":")) {
												taskAttachmentsFolder = combinedName.split(":")[1];
											}
										}
										log.debug("taskAttachmentsFolder inside HandleFileServlet : {}",
												taskAttachmentsFolder);
										String payloadPath = workItem.getContentPath();
										log.debug("payloadPath inside HandleFileServlet : {}", payloadPath);
										String assetPath = payloadPath.concat("/").concat(taskAttachmentsFolder)
												.concat("/").concat(fileName);
										boolean isFileUploadSuccess = assetService.uploadFileToWorkflowPayloadPath(
												serviceUserSession, fileName,
												payloadPath.concat("/").concat(taskAttachmentsFolder), stream);
										if (isFileUploadSuccess) {
											jsonResponse.addProperty("fileName", fileName);
											jsonResponse.addProperty("filePath", assetPath);
											jsonResponse.addProperty("uploadStatus", FILE_SERVLET_SUCCESS_MESSAGE);
										} else {
											response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
										}
									} else {
										response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
										jsonResponse.addProperty("uploadStatus", "Not Allowed");
										jsonResponse.addProperty("message", "Attachment not allowed for this task");
									}
									break;
								}
							}
						}
					}
				}
			} else if (params.containsKey("op") && params.containsKey("filePath") && params.containsKey("fileName")) {
				//log.debug("inside HandleFileServlet delete operation...");
				String operation = params.get("op")[0].toString().trim();
				String filePath = params.get("filePath")[0].toString().trim();
				fileName = params.get("fileName")[0].toString().trim();
				log.debug("HandleFileServlet delete operation : filePath = {}, fileName = {}", filePath, fileName);
				if (operation.equalsIgnoreCase("delete") && StringUtils.isNotBlank(filePath)
						&& StringUtils.isNotBlank(fileName)) {
					boolean isFileDeleteSuccess = assetService.deleteFileFromCRX(serviceUserSession, filePath);
					if (isFileDeleteSuccess) {
						jsonResponse.addProperty("fileName", fileName);
						jsonResponse.addProperty("deleteStatus", FILE_SERVLET_SUCCESS_MESSAGE);
					} else {
						response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
					}
				}
			}
			response.setContentType(RESPONSE_CONTENT_TYPE);
			out.print(jsonResponse);
		} catch (

		Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != resourceResolver && resourceResolver.isLive()) {
				resourceResolver.close();
			}
			if (wfSession != null) {
				wfSession.logout();
			}
			if (serviceUserSession != null && serviceUserSession.isLive()) {
				serviceUserSession.logout();
			}
		}
	}
}
