package com.csuf.cloud.core.filters;

import java.io.IOException;
import java.util.Arrays;

import javax.jcr.Session;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.engine.EngineConstants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.osgi.service.component.propertytypes.ServiceRanking;
import org.osgi.service.component.propertytypes.ServiceVendor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Simple servlet filter component that filters Adaptive Form requests.
 */
/**
 * @author 105876
 *
 */
@Component(service = Filter.class, property = {
		EngineConstants.SLING_FILTER_SCOPE + "=" + EngineConstants.FILTER_SCOPE_REQUEST,
		EngineConstants.SLING_FILTER_RESOURCETYPES + "=fd/af/components/page2/aftemplatedpage123" })
@ServiceDescription("filter incoming requests for Adaptive Form and disallow anonymous access on publish instance by enabling forced login")
@ServiceRanking(-700)
@ServiceVendor("ThoughtFocus")
public class AFFormForcedLoginFilter implements Filter {

	private final Logger log = LoggerFactory.getLogger(getClass());
	private static final String LOGIN_URL = "/login/";

	@Override
	public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain filterChain)
			throws IOException, ServletException {

        log.info("Insoide AFFormForcedLoginFilter class");
		ResourceResolver resolver = null;
		Session session = null;

		final SlingHttpServletRequest slingRequest = (SlingHttpServletRequest) request;
		final SlingHttpServletResponse slingResponse = (SlingHttpServletResponse) response;

		String resourcePath = slingRequest.getRequestPathInfo().getResourcePath();

		log.debug("AFFormForcedLoginFilter request for {}, with selector {}", resourcePath,
				slingRequest.getRequestPathInfo().getSelectorString());

		if (StringUtils.isNotBlank(resourcePath) && !resourcePath.contains("letter-of-recommendation") && !resourcePath.contains("csuf-volunteer-form-external")) {
			try {
				resolver = slingRequest.getResourceResolver();
				session = resolver.adaptTo(Session.class);
				String loggedInUserId = session.getUserID();
				log.debug("loggedInUserId : {}", loggedInUserId);
				if (StringUtils.isNotBlank(loggedInUserId) && loggedInUserId.equalsIgnoreCase("anonymous")) {
					log.debug("forwarding request to login page...");
					slingRequest.getRequestDispatcher(LOGIN_URL).forward(slingRequest, slingResponse);
					resourcePath = slingRequest.getRequestPathInfo().getResourcePath();
					log.debug("AFFormForcedLoginFilter request forwarded to {}, with selector {}", resourcePath,
							slingRequest.getRequestPathInfo().getSelectorString());
				}
			} catch (Exception e) {
				log.error(Arrays.toString(e.getStackTrace()));
			} finally {
				if (session != null) {
					session.logout();
				}
				if (resolver != null && resolver.isLive()) {
					resolver.close();
				}
			}
		}

		filterChain.doFilter(request, response);
	}

	@Override
	public void init(FilterConfig filterConfig) {
	}

	@Override
	public void destroy() {
	}

}