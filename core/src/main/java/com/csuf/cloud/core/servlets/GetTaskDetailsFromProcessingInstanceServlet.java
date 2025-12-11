package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.TaskService;

@Component(service = { Servlet.class }, immediate = true, property = {
		"sling.servlet.paths=/bin/getTaskDetailsFromProcessingInstance" })
@ServiceDescription("Get Task Details From Processing Instance Servlet")
public class GetTaskDetailsFromProcessingInstanceServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;

	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Reference
	private TaskService taskService;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		try {
			String url = request.getParameter("url");
			out.write(taskService.getTaskDetailsFromProcessingInstance(url));
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}
}
