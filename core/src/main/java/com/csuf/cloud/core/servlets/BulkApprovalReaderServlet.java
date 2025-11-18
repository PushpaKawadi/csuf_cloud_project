package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import com.csuf.cloud.core.services.BulkApprovalFactoryConfigService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component(service = { Servlet.class }, property = { "sling.servlet.resourceTypes=sling/servlet/test",
		"sling.servlet.methods=GET", "sling.servlet.selectors=config", "sling.servlet.extensions=json", })
public class BulkApprovalReaderServlet extends SlingSafeMethodsServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Reference
	transient private BulkApprovalFactoryConfigService configService;

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        Map<String, Object> jsonObj = new HashMap<>();
        jsonObj.put("uniqueIdentifier", configService.uniqueIdentifier());
        jsonObj.put("taskTitle", configService.taskTitle());
        jsonObj.put("workflowModel", configService.workflowModel());
        jsonObj.put("xmlFieldsToUpdate", configService.xmlFieldsToUpdate());
        jsonObj.put("actionToBeTaken", configService.actionToBeTaken());
        jsonObj.put("routes", configService.getRoutes());
        jsonObj.put("xmlElement", configService.xmlElement());
        jsonObj.put("actionMetadataField", configService.actionMetadataField());

        response.getWriter().write(mapper.writeValueAsString(jsonObj));
    }
}
