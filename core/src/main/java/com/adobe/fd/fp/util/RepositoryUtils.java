/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
package com.adobe.fd.fp.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.jcr.ItemExistsException;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.lock.LockException;
import javax.jcr.nodetype.ConstraintViolationException;
import javax.jcr.nodetype.NoSuchNodeTypeException;
import javax.jcr.nodetype.NodeType;
import javax.jcr.version.VersionException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.fd.fp.config.FormsPortalDraftsandSubmissionConfigService;

/**
 * Utility class for interacting with JCR repository for AEM Forms Portal.
 */
public final class RepositoryUtils {

    /** Default log. */
    private static final Logger log = LoggerFactory.getLogger(RepositoryUtils.class);

    private static final String STR_SLING_ORDERED_FOLDER = "sling:OrderedFolder";
    private static final String STR_GUIDE_NAME = "guideName";
    private static final String STR_SUBMIT = "submit";
    private static final String STR_TEMP = "temp";
    private static final String STR_DRAFT = "drafts";

    public static final String METADATA_NODE_NAME = "metadata";
    public static final String JCR_CONTENT_NODE_NAME = "jcr:content";
    public static final String RENDITIONS_NODE_NAME = "renditions";
    public static final String ORIGINAL_RENDITION_NODE_NAME = "original";
    public static final String GUIDE_CONTAINER_NODE_NAME = "guideContainer";

    private static volatile RepositoryUtils repositoryUtils;

    private final FormsPortalDraftsandSubmissionConfigService draftsAndSubmissionConfiguration;

    private RepositoryUtils(FormsPortalDraftsandSubmissionConfigService draftsAndSubmissionConfigObject) {
        this.draftsAndSubmissionConfiguration = draftsAndSubmissionConfigObject;
    }

    /**
     * Thread-safe Singleton instance getter.
     */
    public static synchronized RepositoryUtils getInstance(
            FormsPortalDraftsandSubmissionConfigService draftsAndSubmissionConfigObject) {
        if (repositoryUtils == null
                || repositoryUtils.draftsAndSubmissionConfiguration != draftsAndSubmissionConfigObject) {
            repositoryUtils = new RepositoryUtils(draftsAndSubmissionConfigObject);
        }
        return repositoryUtils;
    }

    /** Returns the Forms Portal root Node. Creates it if not exists. */
    public Node getRootNode(Session session)
            throws ItemExistsException, PathNotFoundException, NoSuchNodeTypeException,
            LockException, VersionException, ConstraintViolationException, RepositoryException {

        Node portalRootNode;
        String rootPath = draftsAndSubmissionConfiguration.getFormsPortalRoot();

        if (!session.nodeExists(rootPath)) {
            portalRootNode = session.getRootNode().addNode(rootPath.substring(1), STR_SLING_ORDERED_FOLDER);
        } else {
            portalRootNode = session.getNode(rootPath);
        }
        return portalRootNode;
    }

    /** Returns node corresponding to userName passed. */
    public Node getUserNode(String userName, boolean create, Session session)
            throws ItemExistsException, PathNotFoundException, NoSuchNodeTypeException,
            LockException, VersionException, ConstraintViolationException, RepositoryException,
            UnsupportedEncodingException {

        Node userNode = null;
        String encodedUserName = URLEncoder.encode(userName, "UTF-8");
        String defaultUserNode = draftsAndSubmissionConfiguration.getFormsPortalRoot() + "/" + userName;
        String encodedUserNode = draftsAndSubmissionConfiguration.getFormsPortalRoot() + "/" + encodedUserName;

        try {
            if (session.nodeExists(defaultUserNode)) {
                userNode = session.getNode(defaultUserNode);
            } else if (session.nodeExists(encodedUserNode)) {
                userNode = session.getNode(encodedUserNode);
            } else if (create) {
                Node fpRootNode = getRootNode(session);
                userNode = fpRootNode.addNode(encodedUserName, STR_SLING_ORDERED_FOLDER);
            }
        } catch (Exception e) {
            log.trace("Error while retrieving node path {}", defaultUserNode, e);
            if (session.nodeExists(encodedUserNode)) {
                userNode = session.getNode(encodedUserNode);
            } else if (create) {
                Node fpRootNode = getRootNode(session);
                userNode = fpRootNode.addNode(encodedUserName, STR_SLING_ORDERED_FOLDER);
            }
        }
        return userNode;
    }

    public Node getUserGuideNode(Node node, String guideName, boolean create)
            throws ItemExistsException, PathNotFoundException, VersionException,
            ConstraintViolationException, LockException, RepositoryException {

        Node userGuideNode = null;
        if (!node.hasNode(guideName)) {
            if (create) {
                userGuideNode = node.addNode(guideName);
                userGuideNode.setProperty(STR_GUIDE_NAME, guideName);
            }
        } else {
            userGuideNode = node.getNode(guideName);
        }
        return userGuideNode;
    }

    public Node getChildNode(Node node, String nodeName, String nodeType, boolean create)
            throws ItemExistsException, PathNotFoundException, VersionException,
            ConstraintViolationException, LockException, RepositoryException {

        Node childNode = null;
        if (node != null) {
            if (node.hasNode(nodeName)) {
                childNode = node.getNode(nodeName);
            } else if (create) {
                childNode = node.addNode(nodeName, nodeType);
            }
        }
        return childNode;
    }

    public Node getSubmitRootNode(Node userNode, boolean create)
            throws ItemExistsException, PathNotFoundException, NoSuchNodeTypeException,
            LockException, VersionException, ConstraintViolationException, RepositoryException {

        return getOrCreateFolderNode(userNode, STR_SUBMIT, create);
    }

    public Node getTempRootNode(Node userNode, boolean create)
            throws ItemExistsException, PathNotFoundException, NoSuchNodeTypeException,
            LockException, VersionException, ConstraintViolationException, RepositoryException {

        return getOrCreateFolderNode(userNode, STR_TEMP, create);
    }

    public Node getDraftsRootNode(Node userNode, boolean create)
            throws ItemExistsException, PathNotFoundException, VersionException,
            ConstraintViolationException, LockException, RepositoryException {

        return getOrCreateFolderNode(userNode, STR_DRAFT, create);
    }

    private Node getOrCreateFolderNode(Node parentNode, String nodeName, boolean create)
            throws RepositoryException {
        Node node = null;
        if (parentNode != null) {
            if (!parentNode.hasNode(nodeName)) {
                if (create) {
                    node = parentNode.addNode(nodeName, STR_SLING_ORDERED_FOLDER);
                }
            } else {
                node = parentNode.getNode(nodeName);
            }
        }
        return node;
    }

    public Node getMetadataNode(Node formNode, boolean create)
            throws RepositoryException {
        Node metadataNode = null;
        Node contentNode = getContentNode(formNode, create);
        if (contentNode != null) {
            if (!contentNode.hasNode(METADATA_NODE_NAME)) {
                if (create) {
                    metadataNode = contentNode.addNode(METADATA_NODE_NAME, NodeType.NT_UNSTRUCTURED);
                }
            } else {
                metadataNode = contentNode.getNode(METADATA_NODE_NAME);
            }
        }
        return metadataNode;
    }

    public Node getContentNode(Node formNode, boolean create)
            throws RepositoryException {
        Node contentNode = null;
        if (!formNode.hasNode(JCR_CONTENT_NODE_NAME)) {
            if (create) {
                contentNode = formNode.addNode(JCR_CONTENT_NODE_NAME, NodeType.NT_UNSTRUCTURED);
            }
        } else {
            contentNode = formNode.getNode(JCR_CONTENT_NODE_NAME);
        }
        return contentNode;
    }

    public Node getRenditionNode(Node formNode, boolean create)
            throws RepositoryException {
        Node renditionNode = null;
        Node contentNode = getContentNode(formNode, create);
        if (contentNode != null) {
            if (!contentNode.hasNode(RENDITIONS_NODE_NAME)) {
                if (create) {
                    renditionNode = contentNode.addNode(RENDITIONS_NODE_NAME, NodeType.NT_FOLDER);
                }
            } else {
                renditionNode = contentNode.getNode(RENDITIONS_NODE_NAME);
            }
        }
        return renditionNode;
    }

    public Node getOriginalRenditionNode(Node formNode, boolean create)
            throws RepositoryException {
        Node origRenditionNode = null;
        Node renditionNode = getRenditionNode(formNode, create);
        if (renditionNode != null) {
            if (!renditionNode.hasNode(ORIGINAL_RENDITION_NODE_NAME)) {
                if (create) {
                    origRenditionNode = renditionNode.addNode(ORIGINAL_RENDITION_NODE_NAME, NodeType.NT_FILE);
                }
            } else {
                origRenditionNode = renditionNode.getNode(ORIGINAL_RENDITION_NODE_NAME);
            }
        }
        return origRenditionNode;
    }

    public Node getOriginalRenditionContentNode(Node formNode, boolean create)
            throws RepositoryException {
        Node origRenditionContentNode = null;
        Node origRenditionNode = getOriginalRenditionNode(formNode, create);
        if (origRenditionNode != null) {
            if (!origRenditionNode.hasNode(JCR_CONTENT_NODE_NAME)) {
                if (create) {
                    origRenditionContentNode = origRenditionNode.addNode(JCR_CONTENT_NODE_NAME, NodeType.NT_RESOURCE);
                }
            } else {
                origRenditionContentNode = origRenditionNode.getNode(JCR_CONTENT_NODE_NAME);
            }
        }
        return origRenditionContentNode;
    }

    public Node getGuideContainerNode(Node guideNode)
            throws RepositoryException {
        Node guideContainerNode = null;
        Node originalRenditionContentNode = getOriginalRenditionContentNode(guideNode, false);
        if (originalRenditionContentNode != null) {
            NodeIterator nItr = originalRenditionContentNode.getNodes(GUIDE_CONTAINER_NODE_NAME);
            if (nItr.hasNext()) {
                guideContainerNode = nItr.nextNode();
            }
        }
        return guideContainerNode;
    }

    public String findParentCQPage(String currentNodePath, Session session)
            throws RepositoryException {
        String parentCQPage = null;
        if (session.nodeExists(currentNodePath)) {
            Node currentNode = session.getNode(currentNodePath);
            while (!currentNode.isNodeType(FormsPortalConstants.STR_REP_ROOT)) {
                if (currentNode.isNodeType(FormsPortalConstants.STR_CQ_PAGE)) {
                    parentCQPage = currentNode.getPath();
                    break;
                }
                currentNode = currentNode.getParent();
            }
        }
        return parentCQPage;
    }
}
