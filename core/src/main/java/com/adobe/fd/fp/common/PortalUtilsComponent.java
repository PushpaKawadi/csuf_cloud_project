package com.adobe.fd.fp.common;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.jcr.Node;
import javax.jcr.Session;
import org.apache.jackrabbit.api.JackrabbitSession;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.Group;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.fd.fp.config.FormsPortalDraftsandSubmissionConfigService;
import com.adobe.fd.fp.exception.FormsPortalException;
import com.adobe.fd.fp.util.FormsPortalConstants;
import com.adobe.fd.fp.util.RepositoryUtils;
import com.adobe.granite.security.user.UserManagementService;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.SearchResult;

/**
 * AEM as a Cloud Service compatible implementation of PortalUtilsComponent.
 *
 * Notes:
 * - Uses ResourceResolverFactory and a service-subservice to obtain service resolvers.
 * - Uses JackrabbitSession for obtaining UserManager from a JCR Session.
 * - Ensure a service user mapping exists in OSGi config for the SUBSERVICE below.
 */
@Component(service = PortalUtilsComponent.class, immediate = true)
public class PortalUtilsComponent {

    private static final Logger log = LoggerFactory.getLogger(PortalUtilsComponent.class);

    private static final String SERVICE_SUBSERVICE = "formsportal-service";

    @Reference
    private FormsPortalDraftsandSubmissionConfigService draftsandSubmissionConfiguration;

    @Reference
    private UserManagementService usermgmtService;

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Reference
    private QueryBuilder queryBuilder;

    /**
     * Helper to get a service ResourceResolver for operations that need a resolver.
     * Caller MUST close the returned resolver (try-with-resources recommended).
     */
    private ResourceResolver getServiceResolver() throws Exception {
        Map<String, Object> params = new HashMap<>();
        params.put(ResourceResolverFactory.SUBSERVICE, SERVICE_SUBSERVICE);
        return resourceResolverFactory.getServiceResourceResolver(params);
    }

    public String getDDSFilter(){
        return "(aem.formsportal.impl.prop=" + draftsandSubmissionConfiguration.getDraftDataService() + ")";
    }

    public String getDMSFilter(){
        return "(aem.formsportal.impl.prop=" + draftsandSubmissionConfiguration.getDraftMetadataService() + ")";
    }

    public String getSDSFilter(){
        return "(aem.formsportal.impl.prop=" + draftsandSubmissionConfiguration.getSubmitDataService() + ")";
    }

    public String getSMSFilter(){
        return "(aem.formsportal.impl.prop=" + draftsandSubmissionConfiguration.getSubmitMetadataService() + ")";
    }

    public String getPDSFilter(){
        return "(aem.formsportal.impl.prop=" + draftsandSubmissionConfiguration.getPendingSignDataService() + ")";
    }

    public String getPMSFilter(){
        return "(aem.formsportal.impl.prop=" + draftsandSubmissionConfiguration.getPendingSignMetadataService() + ")";
    }

    /**
     * Attempts to determine if the currently available resolver user is anonymous.
     * NOTE: In Cloud, there is no global "request" resolver here, so this uses a service resolver.
     * If you need to check the actual current/requesting user, pass the userId into isLoginAnonymous(userName).
     */
    public boolean isLoginAnonymous(){
        try (ResourceResolver resolver = getServiceResolver()) {
            if (resolver != null) {
                String userName = resolver.getUserID();
                String anonymousId = usermgmtService.getAnonymousId();
                return anonymousId != null && anonymousId.equals(userName);
            }
        } catch (Exception e) {
            log.warn("Unable to obtain service resource resolver to check anonymous user", e);
        }
        return false;
    }

    /**
     * Check by user name.
     */
    public boolean isLoginAnonymous(String userName) {
        String anonymousId = usermgmtService.getAnonymousId();
        return anonymousId != null && anonymousId.equals(userName);
    }

    /**
     * Check whether the current session user is a reviewer for the form located at formPath.
     * Uses JackrabbitSession to obtain UserManager.
     */
    public boolean isReviewer(Session currentSession, String formPath) {
        try {
            if (currentSession != null && formPath != null && !formPath.trim().isEmpty()) {
                if (!currentSession.nodeExists(formPath)) {
                    return false;
                }
                Node formNode = currentSession.getNode(formPath);
                RepositoryUtils repUtils = RepositoryUtils.getInstance(draftsandSubmissionConfiguration);
                Node metadataNode = repUtils.getMetadataNode(formNode, false);

                if (metadataNode != null && metadataNode.hasProperty(FormsPortalConstants.STR_FORM_SUBMISSION_REVIEWER_GROUP)) {
                    String allowedGroupId = metadataNode.getProperty(FormsPortalConstants.STR_FORM_SUBMISSION_REVIEWER_GROUP).getString();

                    // Use JackrabbitSession to get UserManager
                    if (currentSession instanceof JackrabbitSession) {
                        JackrabbitSession jrSession = (JackrabbitSession) currentSession;
                        UserManager userManager = jrSession.getUserManager();
                        Authorizable authorizable = userManager.getAuthorizable(currentSession.getUserID());
                        if (authorizable != null) {
                            Iterator<Group> grpItr = authorizable.declaredMemberOf();
                            while (grpItr.hasNext()) {
                                Group group = grpItr.next();
                                if (group.getID().equals(allowedGroupId)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        log.warn("Current session is not a JackrabbitSession; cannot obtain UserManager to verify reviewer group.");
                    }
                }
            }
        } catch (Exception e) {
            log.error("Error occurred while verifying if user is reviewer", e);
        }
        return false;
    }

    /**
     * Checks whether the current session user owns the submission identified by submitID.
     */
    public boolean isOwner(Session currentSession, String submitID) throws FormsPortalException {
        if (currentSession != null && submitID != null) {
            return getMetadataNodeFromSubmitID(submitID, currentSession) != null;
        }
        return false;
    }

    /**
     * Locate the metadata node for a given submission id.
     * First tries query; if not found, attempts to find under the current user's node.
     */
    public Node getMetadataNodeFromSubmitID(String submitID, Session session) throws FormsPortalException {
        try {
            Map<String, String> queryMap = new HashMap<>();
            queryMap.put(FormsPortalConstants.STR_PATH, FormsPortalConstants.STR_CONTENT_FORMS_FP);
            queryMap.put(FormsPortalConstants.STR_TYPE, FormsPortalConstants.STR_NT_UNSTRUCTURED);
            queryMap.put("0_property", FormsPortalConstants.STR_SUBMIT_ID);
            queryMap.put("0_property.value", submitID);
            queryMap.put("1_property", FormsPortalConstants.STR_NODE_TYPE);
            queryMap.put("1_property.value", FormsPortalConstants.STR_FP_SUBMITTED_FORM);

            PredicateGroup predicates = PredicateGroup.create(queryMap);
            Query query = queryBuilder.createQuery(predicates, session);
            SearchResult result = query.getResult();
            Node submitMetadataNode = null;

            if (result.getTotalMatches() == 1) {
                Iterator<Node> it = result.getNodes();
                if (it.hasNext()) {
                    submitMetadataNode = it.next();
                }
            } else {
                RepositoryUtils repUtils = RepositoryUtils.getInstance(draftsandSubmissionConfiguration);
                // To obtain the "current" user id we use a service resolver - if you have a request resolver, prefer that.
                String userName = null;
                try (ResourceResolver resolver = getServiceResolver()) {
                    if (resolver != null) {
                        userName = resolver.getUserID();
                    }
                } catch (Exception e) {
                    log.warn("Could not obtain service resolver to determine user node fallback", e);
                }
                if (userName != null) {
                    Node userNode = repUtils.getUserNode(userName, false, session);
                    String submitNodeRelativePath = FormsPortalConstants.STR_SUBMIT + "/" + FormsPortalConstants.STR_METADATA + "/" + submitID;
                    if (userNode != null && userNode.hasNode(submitNodeRelativePath)) {
                        submitMetadataNode = userNode.getNode(submitNodeRelativePath);
                    }
                }
            }
            return submitMetadataNode;
        } catch (Exception e) {
            throw new FormsPortalException(e);
        }
    }

    /**
     * removes the target element from the Array and returns the new array
     */
    public static <T> T[] removeFromArray(T[] objArray, T key){
        List<T> objList = new ArrayList<T>(Arrays.asList(objArray));
        objList.remove(key);
        @SuppressWarnings("unchecked")
        T[] resultArray = (T[]) Array.newInstance(key.getClass(), objList.size());
        objList.toArray(resultArray);
        return resultArray;
    }
}
