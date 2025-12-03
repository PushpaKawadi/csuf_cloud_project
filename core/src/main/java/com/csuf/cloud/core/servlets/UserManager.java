package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.time.LocalDate;

import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/*@Component(service = { Servlet.class }, property = { "sling.servlet.resourceTypes=sling/servlet/default",
        "sling.servlet.methods=GET", "sling.servlet.selectors=/bin/getLoggedUserId", "sling.servlet.extensions=json" })*/

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "=Loggedin User Servlet",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/getLoggedUserId" })
public class UserManager extends SlingSafeMethodsServlet {
    transient private final Logger logger = LoggerFactory.getLogger(getClass());
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse response)
            throws ServletException, IOException {
        JSONObject userValues = null;
       
        try {
            userValues = getCurrentUserId(req);
        } catch (Exception e) {
            e.printStackTrace();
        }
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        logger.info("UserID Value=" + userValues.toString());
        response.getWriter().write(userValues.toString());
    }

    public JSONObject getCurrentUserId(SlingHttpServletRequest request) throws Exception {
        JSONObject userDetails = new JSONObject();
        ResourceResolver resolver = request.getResourceResolver();
        Session session = resolver.adaptTo(Session.class);
        LocalDate serverDate = LocalDate.now();  
        //Session session = globalService.getAdminSession();
        String userId = session.getUserID();
        //logger.info("userDetails=" + userId);
        
        if (userId != null && userId.endsWith("@fullerton.edu")) {
            userId.substring(0, userId.indexOf("@"));
        }
        userDetails.put("userId", userId);
        userDetails.put("Status", "Success");
        userDetails.put("SERVER_DATE", serverDate);
        userDetails.put("email", session.getUserID());
        
        if(session != null){
            session.logout();
        }
        return userDetails;

    }

}
