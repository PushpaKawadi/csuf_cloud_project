package com.csuf.cloud.core.servlets;
import java.io.IOException;

import javax.servlet.Servlet;


import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.csuf.cloud.core.services.impl.DatabaseQueryService;
import com.google.gson.JsonArray;

@Component(
        service = {Servlet.class},
        property = {
                "sling.servlet.resourceTypes=sling/servlet/default", // fallback resource type
                "sling.servlet.methods=GET",
                "sling.servlet.selectors=mydbservlet",
                "sling.servlet.extensions=json"
        }
)
public class DbTestServlet extends SlingAllMethodsServlet {
	private final static Logger logger = LoggerFactory.getLogger(DbTestServlet.class);
	private static final long serialVersionUID = 1L;


    @Reference
    transient private DatabaseQueryService databaseQueryService;
    transient JsonArray userDetails = null;
    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
    	logger.error("DBTestServlet");
    	userDetails = databaseQueryService.runSelectExample();
        response.getWriter().write(userDetails.toString());
    }
}
