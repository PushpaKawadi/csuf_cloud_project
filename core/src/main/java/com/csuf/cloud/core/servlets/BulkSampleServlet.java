package com.csuf.cloud.core.servlets;

import java.io.IOException;

import javax.servlet.Servlet;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import com.csuf.cloud.core.services.BulkApprovalFactoryConfigService;


@Component(service = { Servlet.class }, property = { "sling.servlet.resourceTypes=sling/servlet/bulktest",
		"sling.servlet.methods=GET", "sling.servlet.selectors=config", "sling.servlet.extensions=json" })
public class BulkSampleServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	
	
	@Reference
	transient private BulkApprovalFactoryConfigService bulkApproval;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		response.setContentType("application/json");
        
        String uID = bulkApproval.uniqueIdentifier();
        response.getWriter().write(uID);
		String uIDRes = "{\"uID\":\"" + uID + "\"}";
        response.getWriter().write(uIDRes);
		
        /*List<String> xmlVal = bulkApproval.xmlFieldsToUpdate();
		 xmlVal.get(1);
		 xmlVal.get(1);
		
		 response.getWriter().write(xmlVal.get(1));
		 response.getWriter().write(xmlVal.get(2));*/
		 //response.getWriter().write(uIDRes);
		
		
	}
}