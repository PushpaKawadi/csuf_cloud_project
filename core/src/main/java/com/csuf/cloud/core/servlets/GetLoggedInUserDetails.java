package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.jackrabbit.api.security.user.User;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.json.JSONException;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Servlet that writes some sample content into the response. It is mounted for
 * all resources of a specific Sling resource type. The
 * {@link SlingSafeMethodsServlet} shall be used for HTTP methods that are
 * idempotent. For write operations use the {@link SlingAllMethodsServlet}.
 */

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "=Loggedin User Servlet",
		"sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/getLoggedUserDetails" })
public class GetLoggedInUserDetails extends SlingSafeMethodsServlet {
	private final Logger logger = LoggerFactory.getLogger(getClass());
	private static final long serialVersionUID = 1L;

	ResourceResolver adminResolver = null;

	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse response)
			throws ServletException, IOException {
		JSONObject userDetails = new JSONObject();
		ResourceResolver resolver = req.getResourceResolver();
		Session session = resolver.adaptTo(Session.class);
		String uid = null;
		String uname = null;
		String[] values;
		String username = null;
		final UserManager userManager = resolver.adaptTo(UserManager.class);
		User user = null;
		LocalDate serverDate = LocalDate.now();  
		try {
			user = (User) userManager.getAuthorizable(session.getUserID());
			uid = session.getUserID();
			if (uid.equals("admin")) {
				uname = "Administrator";
			} else {
				uname = session.getNode(user.getPath()).getProperty("rep:fullname").getString();
			}
		} catch (RepositoryException e) {
			logger.error("Exception from Class Name: GetLoggedInUserDetails" + Arrays.toString(e.getStackTrace()));
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
		} catch (IllegalStateException e) {
			logger.error("IllegalStateException from Class Name: GetLoggedInUserDetails"
					+ Arrays.toString(e.getStackTrace()));
		} catch (JSONException e) {
			logger.error("JSONException from Class Name: GetLoggedInUserDetails" + Arrays.toString(e.getStackTrace()));
		}

		if (session != null) {
			session.logout();
		}
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		logger.info("UserID Value=" + userDetails.toString());
		response.getWriter().write(userDetails.toString());
	}

}