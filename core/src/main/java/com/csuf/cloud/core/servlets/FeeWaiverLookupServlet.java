package com.csuf.cloud.core.servlets;

import java.io.IOException;

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
import org.osgi.service.component.annotations.Component;

@Component(
        service = Servlet.class,
        property = {
                "sling.servlet.methods=" + HttpConstants.METHOD_GET,
                "sling.servlet.paths=/bin/getFeeWaiverData"
        }
)
public class FeeWaiverLookupServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;

    private static final String EXTERNAL_URL =
            "https://myformstst.fullerton.edu/bin/getAppealofaDeclinedFeeWaiverRequestData";

    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response)
            throws ServletException, IOException {

        String userId = request.getParameter("userid");

        if (userId == null || userId.isEmpty()) {
            response.setStatus(400);
            response.getWriter().write("Missing userid parameter");
            return;
        }

        String url = EXTERNAL_URL +
                "?action=FEE_WAIVER_HOLDER_USER_ID_LOOKUP&userid=" + userId;

        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {

            HttpGet httpGet = new HttpGet(url);

            try (CloseableHttpResponse httpResponse = httpClient.execute(httpGet)) {

                String result = IOUtils.toString(httpResponse.getEntity().getContent(), "UTF-8");

                response.setContentType("application/json");
                response.getWriter().write(result);
            }

        } catch (Exception e) {
            response.setStatus(500);
            response.getWriter().write("Exception: " + e.getMessage());
        }
    }
}
