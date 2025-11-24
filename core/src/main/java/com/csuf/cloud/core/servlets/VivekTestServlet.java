package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.commons.io.IOUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;

import com.csuf.cloud.core.config.FullertonProxyConfig;

@Designate(ocd = FullertonProxyConfig.class)
@Component(
    service = Servlet.class,
    property = {
    	"sling.servlet.methods=GET",
    	"sling.servlet.methods=OPTIONS",
        "sling.servlet.paths=/bin/fullertonProxyTest"
    }
)
public class VivekTestServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;
    
    private String apiKey;

    @Activate
    @Modified
    protected void activate(FullertonProxyConfig config) {
        this.apiKey = config.api_key();
        System.out.println("LOADED API KEY = " + this.apiKey);

    }

    // Base for ALL Fullerton API calls
    private static final String BASE_URL =
        "https://myformstst.fullerton.edu/bin/";

    @Override
    protected void doOptions(SlingHttpServletRequest req, SlingHttpServletResponse resp)
            throws ServletException, IOException {

        addCorsHeaders(resp);
        resp.setStatus(SlingHttpServletResponse.SC_OK);
    }

    private void addCorsHeaders(SlingHttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "api-key,Content-Type");
        resp.setHeader("Access-Control-Max-Age", "86400");
    }
    
    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response)
            throws ServletException, IOException {

        addCorsHeaders(response);

        // Required: which backend path?
        String path = request.getParameter("path");

        // Check API Key
        String incomingKey = request.getHeader("api-key");
        if (incomingKey == null || !incomingKey.equals(apiKey)) {
            response.setStatus(401);
            response.getWriter().write("{\"error\":\"Invalid API Key\"}");
            return;
        }
        
        if (path == null || path.isEmpty()) {
            response.setStatus(400);
            response.getWriter().write("Missing 'path' parameter");
            return;
        }

        // Build backend URL
        StringBuilder url = new StringBuilder(BASE_URL).append(path).append("?");

        // Append all query parameters EXCEPT 'path'
        for (Map.Entry<String, String[]> entry : request.getParameterMap().entrySet()) {
            if (!entry.getKey().equals("path")) {
                for (String val : entry.getValue()) {
                    url.append(entry.getKey()).append("=").append(val).append("&");
                }
            }
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
