package com.csuf.cloud.core.servlets;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;

@Component(service = { Servlet.class }, immediate = true, property = {
		"sling.servlet.paths=/bin/getTaskAttachmentFromProcessingInstance" })
@ServiceDescription("Get Task Attachment From Processing Instance Servlet")
public class GetTaskAttachmentFromProcessingInstanceServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;

	private final transient Logger log = LoggerFactory.getLogger(this.getClass());

	private static String RES_FILE_NAME = "download";

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {

		try {
			log.debug("entered Get Task Attachment From Processing Instance Servlet");

			String assetPath = request.getParameter("assetPath");
			assetPath = assetPath.trim().replaceAll("\\s", "%20");
			if (StringUtils.isNotBlank(assetPath)) {

				InputStream assetStream = getTaskAttachmentFromProcessingInstance(assetPath);
				if (assetStream != null) {

					String fileName = CSUFUtils.getFileNameFromCRXPath(assetPath);
					String contentType = StringUtils.isNotBlank(request.getContentType()) ? request.getContentType()
							: "application/octet-stream";

					response.setContentType(contentType);
					response.setHeader("Content-Disposition",
							"attachment; filename=" + (StringUtils.isNotBlank(fileName) ? fileName : RES_FILE_NAME));

					ServletOutputStream out = response.getOutputStream();
					out.write(CSUFUtils.toByteArrayFromInputStream(assetStream));
					out.flush();
					out.close();

				} else {
					log.error("asset stream is empty");
					response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				}

			} else {
				log.error("file could not be downloaded from processing instance");
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				response.getWriter().write("Error");
			}

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}

		log.debug("exit Get Task Attachment From Processing Instance Servlet");
	}

	/**
	 * IMPORTANT: Old logic kept intact. The ONLY fix is reading the HTTP entity
	 * content BEFORE the HttpClient/Response is closed.
	 */
	private InputStream getTaskAttachmentFromProcessingInstance(String url) throws IOException {

		log.debug("Inside getTaskAttachmentFromProcessingInstance");

		HttpGet get = null;
		try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
			get = new HttpGet(processingInstanceConfigService.processingUrl().concat(url));
			String auth = processingInstanceConfigService.userName() + ":"
					+ processingInstanceConfigService.userSecurity();
			byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
			String authHeader = "Basic " + new String(encodedAuth);
			get.setHeader("Authorization", authHeader);
			try (CloseableHttpResponse response = httpClient.execute(get)) {
				if (response != null && response.getStatusLine().getStatusCode() == 200) {
					HttpEntity entity = response.getEntity();
					if (entity != null) {
						byte[] bytes = IOUtils.toByteArray(entity.getContent());
						log.debug("Downloaded bytes size={}", bytes.length);
						return new ByteArrayInputStream(bytes);
					}
				}
			}

		} catch (IOException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (get != null) {
				get.releaseConnection();
			}
		}
		return null;
	}
}
