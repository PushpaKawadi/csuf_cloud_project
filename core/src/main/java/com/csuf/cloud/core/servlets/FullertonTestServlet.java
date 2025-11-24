package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.commons.io.IOUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.osgi.service.component.annotations.Component;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=/bin/TestProxy" })
public class FullertonTestServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;

	private static final String BASE_URL = "https://myformstst.fullerton.edu/bin/";

	@Override
	protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response)
			throws ServletException, IOException {

		/* SECURITY: Must include secret header */
		String securityHeader = request.getHeader("X-CSUF-AUTH");
		if (securityHeader == null || !securityHeader.equals("SecureToken123")) {
			response.setStatus(403);
			response.getWriter().write("Unauthorized.");
			return;
		}
		// Get backend API name
		String path = request.getParameter("path");
		if (path == null) {
			response.setStatus(400);
			response.getWriter().write("Invalid or unauthorized path");
			return;
		}
		// Build endpoint securely
		StringBuilder url = new StringBuilder(BASE_URL).append(path).append("?");

		// Append allowed parameters only
		for (Map.Entry<String, String[]> entry : request.getParameterMap().entrySet()) {
			String key = entry.getKey();

			if (!key.equals("path") && !key.equals("token")) {
				for (String val : entry.getValue()) {
					url.append(URLEncoder.encode(key, StandardCharsets.UTF_8)).append("=")
							.append(URLEncoder.encode(val, StandardCharsets.UTF_8)).append("&");
				}
			}
		}
		// Remove trailing &
		if (url.charAt(url.length() - 1) == '&') {
			url.deleteCharAt(url.length() - 1);
		}
		// Remove trailing '&'
		if (url.charAt(url.length() - 1) == '&') {
			url.deleteCharAt(url.length() - 1);
		}
		try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
			HttpGet httpGet = new HttpGet(url.toString());
			try (CloseableHttpResponse httpResponse = httpClient.execute(httpGet)) {
				String result = IOUtils.toString(httpResponse.getEntity().getContent(), "UTF-8");
				// Return raw JSON result
				response.setContentType("application/json");
				response.getWriter().write(result);
			}
		} catch (Exception e) {
			response.setStatus(500);
			response.getWriter().write("Exception: " + e.getMessage());
		}
	}

}
