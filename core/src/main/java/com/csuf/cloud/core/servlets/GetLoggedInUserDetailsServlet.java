package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.time.LocalDate;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.security.user.User;

@Component(service = Servlet.class, property = {
		Constants.SERVICE_DESCRIPTION + "service.description= Get Loggedin User Details" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=" + "/bin/getLoggedInUserDetails" })
public class GetLoggedInUserDetailsServlet extends SlingSafeMethodsServlet {
	private final Logger logger = LoggerFactory.getLogger(getClass());
	private static final long serialVersionUID = 1L;

	ResourceResolver reolver = null;

	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse response)
			throws ServletException, IOException {
		JSONObject userDetails = new JSONObject();
		ResourceResolver resolver = req.getResourceResolver();
		Session session = resolver.adaptTo(Session.class);
		String uid = StringUtils.EMPTY;
		String uname = StringUtils.EMPTY;
		String[] values;
		String username = StringUtils.EMPTY;
		final UserManager userManager = resolver.adaptTo(UserManager.class);
		LocalDate serverDate = LocalDate.now(); 
		User user = null;
		 
		try {
			user = (User) userManager.getAuthorizable(session.getUserID());
			uid = session.getUserID();
			if (uid.equals("admin")) {
				uname = "Administrator";
			} else {
				uname = session.getNode(user.getPath()).getProperty("rep:fullname").getString();
			}
		} catch (RepositoryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			if ((!(uname.equals(null)) && uname != "")) {
				if (uname.contains(",")) {
					values = uname.split(",");
					username = (values[1].replaceAll("\\s", "") + " " + values[0]);
				} else {
					username = uname;
				}
			} else {
				username = uid;
			}

			userDetails.put("userId", uid);
			userDetails.put("SERVER_DATE", serverDate);
			userDetails.put("userName", username);
			userDetails.put("Status", "Success");
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			logger.info("UserID Value=" + userDetails.toString());
			response.getWriter().write(userDetails.toString());
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
		
	}

}