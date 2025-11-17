package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.util.List;



import javax.servlet.Servlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import com.csuf.cloud.core.config.BulkApprovalFactoryConfig;
import com.csuf.cloud.core.services.BulkApprovalFactoryConfigService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;

@Component(service = { Servlet.class }, property = { "sling.servlet.resourceTypes=sling/servlet/default",
		"sling.servlet.methods=GET", "sling.servlet.selectors=config", "sling.servlet.extensions=json" })
public class CloudSampleServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	
	@Reference
	transient private GlobalConfigCSUFService globalConfigFilenetService;
	
	@Reference
	transient private BulkApprovalFactoryConfigService bulkApproval;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		response.setContentType("application/json");

		String filenetUrl = globalConfigFilenetService.getGradeChangeFilenetURL();
		String jsonResponse = "{\"configUrl\":\"" + filenetUrl + "\"}";
		
		String filenetUrl1 = globalConfigFilenetService.getMajorMinorFilenetURL();
		String jsonResponse1 = "{\"configUrl2\":\"" + filenetUrl1 + "\"}";

		response.getWriter().write(jsonResponse);
        response.getWriter().write(jsonResponse1);
        
        String uID = bulkApproval.uniqueIdentifier();
		String uIDRes = "{\"uID\":\"" + uID + "\"}";
		
        /*List<String> xmlVal = bulkApproval.xmlFieldsToUpdate();
		 xmlVal.get(1);
		 xmlVal.get(1);
		
		 response.getWriter().write(xmlVal.get(1));
		 response.getWriter().write(xmlVal.get(2));*/
		 response.getWriter().write(uIDRes);
		
		
	}
}