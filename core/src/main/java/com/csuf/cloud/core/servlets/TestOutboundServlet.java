package com.csuf.cloud.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import java.io.IOException;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import static org.apache.sling.api.servlets.ServletResolverConstants.SLING_SERVLET_PATHS;

@Component(
    service = Servlet.class,
    property = {
        SLING_SERVLET_PATHS + "=/bin/testOutbound"
    }
)
public class TestOutboundServlet extends SlingAllMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws ServletException, IOException {

        String url = "https://myformstst.fullerton.edu/content/csu/us/en/home.html";

        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpGet get = new HttpGet(url);
            try (CloseableHttpResponse httpResponse = client.execute(get)) {
                int status = httpResponse.getStatusLine().getStatusCode();
                response.getWriter().println("Response from " + url + ": " + status);
            }
        } catch (Exception e) {
            response.getWriter().println("Error connecting to " + url + ": " + e.getMessage());
        }
    }
}
