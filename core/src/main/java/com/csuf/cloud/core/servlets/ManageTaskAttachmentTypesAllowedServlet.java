package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.csuf.cloud.core.services.WorkflowAdministrationConfigService;

@Component(service = { Servlet.class }, immediate = true, property = { "sling.servlet.paths=/bin/getMimeTypesAllowedForTheWorkflow" })
@ServiceDescription("Manage Task Attachment Types Allowed Servlet")
public class ManageTaskAttachmentTypesAllowedServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;

	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Reference
	private WorkflowAdministrationConfigService wfConfig;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		WorkflowSession graniteWorkflowSession = null;
		ResourceResolver resolver = null;
		String workItemId = request.getParameter("workItemId");
		try {
			resolver = request.getResourceResolver();
			graniteWorkflowSession = resolver.adaptTo(WorkflowSession.class);
			WorkItem workItem = graniteWorkflowSession.getWorkItem(workItemId);
			String title = workItem.getWorkflow().getWorkflowModel().getTitle();
			String extensionsAllowed = org.apache.commons.lang3.StringUtils.EMPTY;
			String[] wfArray = wfConfig.supDocAllowedTypesWFList();
			for (int j = 0; j < wfArray.length; j++) {
				String wfTitle = wfArray[j].split("~")[0];
				if (title.equals(wfTitle)) {
					extensionsAllowed = wfArray[j].split("~")[1];
					break;
				}
			}
			response.getWriter().write(extensionsAllowed);
			response.setContentType("text/plain");
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (graniteWorkflowSession != null) {
				graniteWorkflowSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
	}
}
