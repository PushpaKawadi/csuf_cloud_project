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

import com.csuf.cloud.core.services.InboxItemService;

/**
 * Simple servlet filter component that prefills data in Adaptive Forms.
 */
/**
 * @author 105876
 *
 */
@Component(service = Filter.class, property = {
        EngineConstants.SLING_FILTER_SCOPE + "=" + EngineConstants.FILTER_SCOPE_REQUEST,
        EngineConstants.SLING_FILTER_SELECTORS + "=prefillhistorysubmission" })
@ServiceDescription("filter incoming requests for rendering Adaptive Form with prefill data for history workitem")
@ServiceRanking(-700)
@ServiceVendor("ThoughtFocus")
public class AFFormPrefillHistorySubmissionFilter implements Filter {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Reference
    private InboxItemService inboxService;

    @Override
    public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain filterChain)
            throws IOException, ServletException {
        log.info("inside AFFormPrefillHistorySubmissionFilter doFilter");

        String workItemId = request.getParameter("taskId");
        String historyWorkItemId = request.getParameter("historyWorkItemId");
        
        Session serviceUserSession = null;
        ResourceResolver resolver = null;

        try {
            final SlingHttpServletRequest slingRequest = (SlingHttpServletRequest) request;
            final SlingHttpServletResponse slingResponse = (SlingHttpServletResponse) response;

            log.debug("AFFormPrefillFilter request for {}, with selector {}",
                    slingRequest.getRequestPathInfo().getResourcePath(),
                    slingRequest.getRequestPathInfo().getSelectorString());

            resolver = slingRequest.getResourceResolver();
            serviceUserSession = resolver.adaptTo(Session.class);

            if (StringUtils.isNotBlank(workItemId)) {
                String dataXML = inboxService.getResponseFromProcessingInstance(
                        "/bin/getInboxItemDetails?action=HISTORY_WORKITEM_XML&workItemId="
                                .concat(workItemId)
                                .concat("&historyWorkItemId=")
                                .concat(historyWorkItemId));

                if (StringUtils.isNotBlank(dataXML)) {
                    slingRequest.setAttribute("data", dataXML);
                    log.debug("history submission workitem payload data successfully set as slingRequest attribute");

                    slingRequest.getRequestDispatcher(slingRequest.getResource())
                            .forward(slingRequest, slingResponse);

                    log.debug("slingRequest forward successful");
                    return;
                }
            }
        } catch (Exception e) {
            log.error(Arrays.toString(e.getStackTrace()));
        } finally {
            /*if (serviceUserSession != null) {
                serviceUserSession.logout();
            }
            if (resolver != null && resolver.isLive()) {
                resolver.close();
            }*/
        }
        // Only continue chain if request was NOT forwarded
        filterChain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void destroy() {
    }
}
