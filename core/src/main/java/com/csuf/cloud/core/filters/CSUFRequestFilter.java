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
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.osgi.service.component.propertytypes.ServiceRanking;
import org.osgi.service.component.propertytypes.ServiceVendor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.csuf.cloud.core.enums.UserType;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.InboxItemService;

/**
 * Servlet filter component that filters all CSU incoming page requests and redirect them to scheduled maintenance page during scheduled maintenance window.
 */
/**
 * @author 105876
 *
 */

@Component(service = Filter.class, property = {
		EngineConstants.SLING_FILTER_SCOPE + "=" + EngineConstants.FILTER_SCOPE_REQUEST,
		EngineConstants.SLING_FILTER_PATTERN + "=/content/csu/us/en/.*|/content/dam/formsanddocuments/.*" })

@ServiceDescription("Servlet filter component that filters all CSU incoming page and form requests and redirect them to scheduled maintenance page during scheduled maintenance window.")
@ServiceRanking(-700)
@ServiceVendor("ThoughtFocus")
public class CSUFRequestFilter implements Filter {

	private final Logger logger = LoggerFactory.getLogger(getClass());

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUFService;

	private static final String SYSTEM_MAINTENANCE_PAGE_PATH = "/content/csu/us/scheduled-system-maintenance.html";
	private static final String ACCESS_DENIED_PAGE_PATH = "/content/csu/us/en/access-denied.html";
	// private static final String ADMINISTRATOR_USER = "Administrator";

	@Reference
	private InboxItemService inboxService;

	@Override
	public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain filterChain)
			throws IOException, ServletException {
		logger.info("Entered CSUFSystemMaintenanceFilter");

		Session session = null;
		ResourceResolver resolver = null;

		try {
			final SlingHttpServletRequest slingRequest = (SlingHttpServletRequest) request;
			final SlingHttpServletResponse slingResponse = (SlingHttpServletResponse) response;

		
			logger.info("enter CSUFSystemMaintenanceFilter, request path is {}",
					slingRequest.getRequestPathInfo().getResourcePath());

			String formAccessType = null;
			resolver = slingRequest.getResourceResolver();
			session = resolver.adaptTo(Session.class);

			String ldapName = inboxService.getldapAccountName(session, resolver);
			logger.info("ldapName : {}", ldapName);
			if (StringUtils.isBlank(ldapName)) {
				logger.info("inside ldapName : {}", ldapName);
				slingResponse.sendRedirect(ACCESS_DENIED_PAGE_PATH);
			} else if (Arrays.asList(globalConfigCSUFService.whitelistedURLPathsForAnonymousAccess())
					.contains(slingRequest.getRequestPathInfo().getResourcePath())) {
				filterChain.doFilter(request, response);
			} else {
				Boolean isDownTime = globalConfigService.isSystemUnderMaintenance(session);
				// logger.debug("systemMaintenanceConfig value : {}", isDownTime);
				if (null != isDownTime && isDownTime) {
					slingResponse.sendRedirect(SYSTEM_MAINTENANCE_PAGE_PATH);
				} else {
					TagManager tagManager = resolver.adaptTo(TagManager.class);

					for (Tag tag : tagManager.getTags(resolver
							.getResource(slingRequest.getRequestPathInfo().getResourcePath().concat("/metadata")))) {
						String resourceTagTitle = tag.getTitle();
						logger.debug("resourceTagTitle : {}", resourceTagTitle);
						if (StringUtils.isNotBlank(resourceTagTitle) && (StringUtils
								.containsIgnoreCase(resourceTagTitle, UserType.STUDENT_FACULTY.name()))) {
							formAccessType = UserType.STUDENT_FACULTY.name();
						} else if (StringUtils.isNotBlank(resourceTagTitle)
								&& StringUtils.containsIgnoreCase(resourceTagTitle, UserType.STUDENT.name())) {
							formAccessType = UserType.STUDENT.name();
						} else if (StringUtils.isNotBlank(resourceTagTitle)
								&& StringUtils.containsIgnoreCase(resourceTagTitle, UserType.FACULTY.name())) {
							formAccessType = UserType.FACULTY.name();
						}
					}

					if (StringUtils.isNotBlank(formAccessType)
							&& formAccessType.equalsIgnoreCase(UserType.STUDENT.name())
							&& ldapName.equalsIgnoreCase(UserType.STUDENT.name())) {
						filterChain.doFilter(request, response);
					} else if (StringUtils.isNotBlank(formAccessType)
							&& formAccessType.equalsIgnoreCase(UserType.FACULTY.name())
							&& ldapName.equalsIgnoreCase(UserType.STUDENT.name())) {
						slingResponse.sendRedirect(ACCESS_DENIED_PAGE_PATH);
					} else if (StringUtils.isNotBlank(formAccessType)
							&& formAccessType.equalsIgnoreCase(UserType.FACULTY.name())
							&& ldapName.equalsIgnoreCase(UserType.FACULTY.name())) {
						filterChain.doFilter(request, response);
					} else if (StringUtils.isNotBlank(formAccessType)
							&& formAccessType.equalsIgnoreCase(UserType.STUDENT.name())
							&& ldapName.equalsIgnoreCase(UserType.FACULTY.name())) {
						slingResponse.sendRedirect(ACCESS_DENIED_PAGE_PATH);
					} else if (StringUtils.isNotBlank(formAccessType)
							&& formAccessType.equalsIgnoreCase(UserType.STUDENT_FACULTY.name())) {
						if (ldapName.equalsIgnoreCase(UserType.FACULTY.name())
								|| ldapName.equalsIgnoreCase(UserType.STUDENT.name())) {
							filterChain.doFilter(request, response);
						} else {
							slingResponse.sendRedirect(ACCESS_DENIED_PAGE_PATH);
						}
					} else {
						filterChain.doFilter(request, response);
					}
				}
			}
		} catch (Exception e) {
			logger.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (session != null) {
				session.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
		/* logger.debug("exit CSUFSystemMaintenanceFilter"); */
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub

	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}
}