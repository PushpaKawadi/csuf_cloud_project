package com.csuf.cloud.core.servlets;

import java.io.IOException;
import javax.servlet.Servlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;


@Component(
        service = {Servlet.class},
        property = {
                "sling.servlet.resourceTypes=sling/servlet/default", // fallback resource type
                "sling.servlet.methods=GET",
                "sling.servlet.selectors=mydbTest",
                "sling.servlet.extensions=txt"
        }
)

public class EnvDemoServlet extends SlingSafeMethodsServlet {
	private static final long serialVersionUID = 1L;

	@Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        String dbUrl = System.getenv("MY_DB_URL");  // Read env variable
        String smtpHost = System.getenv("SMTP_HOST");
        String smtpPort = System.getenv("SMTP_PORT");
        String smtpUser = System.getenv("SMTP_USER");
        String smtpPassword = System.getenv("SMTP_PASSWORD");
        String smtpFrom = System.getenv("SMTP_FROM");
        String smtpTls =  System.getenv("SMTP_TLS");
        String smtpSsl = System.getenv("SMTP_SSL");

        response.setContentType("text/plain");
        response.getWriter().write("DB URL is: " + dbUrl);
        response.getWriter().write("smtp  host is: " + smtpHost);
        response.getWriter().write("smtp port is: " + smtpPort);
        response.getWriter().write("smtp user is: " + smtpUser);
        response.getWriter().write("smtp password is: " + smtpPassword);
        response.getWriter().write("smtp from is: " + smtpFrom);
        response.getWriter().write("smtp tls is: " + smtpTls);
        response.getWriter().write("smtp ssl is: " + smtpSsl);
    }
}
