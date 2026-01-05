package com.csuf.cloud.core.filters;

import java.io.IOException;
import java.util.Arrays;

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

import com.adobe.granite.workflow.WorkflowSession;
import com.csuf.cloud.core.services.TaskService;

/**
 * Simple servlet filter component that prefills data in Adaptive Forms.
 */
/**
 * @author 105876
 *
 */
@Component(service = Filter.class, property = {
		EngineConstants.SLING_FILTER_SCOPE + "=" + EngineConstants.FILTER_SCOPE_REQUEST,
		EngineConstants.SLING_FILTER_SELECTORS + "=prefill" })
@ServiceDescription("filter incoming requests for rendering Adaptive Form with prefill data")
@ServiceRanking(-700)
@ServiceVendor("ThoughtFocus")
public class AFFormPrefillFilter implements Filter {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Reference
	private TaskService taskService;

	@Override
	public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain filterChain)
			throws IOException, ServletException {
		log.info("Orange AFFormPrefillFilter");
		

		String workItemId = request.getParameter("taskId");
		log.info("Orange workItemId="+workItemId);

		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;

		try {
			final SlingHttpServletRequest slingRequest = (SlingHttpServletRequest) request;
			final SlingHttpServletResponse slingResponse = (SlingHttpServletResponse) response;
			
			log.info("AFFormPrefillFilter request for {}, with selector {}",
					slingRequest.getRequestPathInfo().getResourcePath(),
					slingRequest.getRequestPathInfo().getSelectorString());

			resolver = slingRequest.getResourceResolver();
			log.info("Orange resolver="+resolver);
			wfSession = resolver.adaptTo(WorkflowSession.class);
			log.info("Orange wfSession="+wfSession);

			if (StringUtils.isNotBlank(workItemId)) {
				String dataXML = taskService.getTaskData(workItemId);
				slingRequest.setAttribute("data", dataXML);
				log.info("workitem payload data successfully set as slingRequest attribute---{}",dataXML);
				slingRequest.getRequestDispatcher(slingRequest.getResource()).forward(slingRequest, slingResponse);
				log.info("slingRequest forward successful");
                return;
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
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