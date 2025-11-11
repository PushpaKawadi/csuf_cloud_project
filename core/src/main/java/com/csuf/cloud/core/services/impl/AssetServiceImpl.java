package com.csuf.cloud.core.services.impl;

import java.io.InputStream;
import java.util.Calendar;
import java.util.Date;

import javax.jcr.Binary;
import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.nodetype.NodeType;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.jackrabbit.vault.util.MimeTypes;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;

@Component(service = AssetService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Generic Asset Handler Service" })
public class AssetServiceImpl implements AssetService {

	@Reference
	private transient GlobalConfigService globalConfigService;

	private static final Logger log = LoggerFactory.getLogger(AssetServiceImpl.class);

	@Override
	public InputStream getFileStreamFromCRX(Session session, String filePath) {
		InputStream stream = null;
		if (StringUtils.isNotBlank(filePath)) {
			if (filePath.startsWith("/content/dam")) {
				stream = CSUFUtils.getDAMAssetStream(session, filePath);
			} else {
				stream = CSUFUtils.getNonDAMAssetStream(session, filePath);
			}
		}
		return stream;
	}

	@Override
	public boolean deleteFileFromCRX(Session session, String filePath) throws RepositoryException {
		if (StringUtils.isNotBlank(filePath) && session.itemExists(filePath)) {
			session.removeItem(filePath);
			session.save();
			log.debug("file deleted successfully with assetPath : {}", filePath);
			return true;
		}
		return false;
	}

	@Override
	public boolean writeNtFileToPayloadPath(Session session, String ntFileNodeName, String afPath,
			String ntFileNodeParentPath, InputStream data) {
		Calendar cal = Calendar.getInstance();
		try {
			Node ntFileParentNode = JcrUtils.getOrCreateByPath(ntFileNodeParentPath, "sling:Folder", session);
			ntFileParentNode.setProperty("CONTENT_TYPE", "XML");
			ntFileParentNode.setProperty("FD_ASSET_PATH", afPath);
			ntFileParentNode.setProperty("FD_ASSET_TYPE", "guide");
			Node ntFileNode = ntFileParentNode.addNode(ntFileNodeName, NodeType.NT_FILE);
			Node content = ntFileNode.addNode(Node.JCR_CONTENT, NodeType.NT_RESOURCE);
			cal.setTime(new Date());
			Binary bin = content.getSession().getValueFactory().createBinary(data);
			content.setProperty(Property.JCR_DATA, bin);
			content.setProperty(Property.JCR_LAST_MODIFIED, cal);
			content.setProperty(Property.JCR_LAST_MODIFIED_BY, session.getUserID());
			content.setProperty(Property.JCR_MIMETYPE,
					MimeTypes.getMimeType(ntFileNodeName, MimeTypes.APPLICATION_OCTET_STREAM));
			session.save();
			return true;
		} catch (Exception e) {
			log.error(ArrayUtils.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean uploadFileToWorkflowPayloadPath(Session session, String fileName, String payloadFolderPath,
			InputStream data) {
		Calendar cal = Calendar.getInstance();
		try {
			if (!session.itemExists(payloadFolderPath.concat("/").concat(fileName))) {
				Node payloadFolderNode = JcrUtils.getOrCreateByPath(payloadFolderPath, "sling:Folder", session);

				Node ntFileNode = payloadFolderNode.addNode(fileName, NodeType.NT_FILE);
				Node content = ntFileNode.addNode(Node.JCR_CONTENT, NodeType.NT_RESOURCE);
				cal.setTime(new Date());
				Binary bin = session.getValueFactory().createBinary(data);
				content.setProperty(Property.JCR_DATA, bin);
				content.setProperty(Property.JCR_LAST_MODIFIED, cal);
				content.setProperty(Property.JCR_LAST_MODIFIED_BY, session.getUserID());
				content.setProperty(Property.JCR_MIMETYPE,
						MimeTypes.getMimeType(fileName, MimeTypes.APPLICATION_OCTET_STREAM));
				session.save();
			}
			return true;
		} catch (Exception e) {
			log.error(ArrayUtils.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean overwriteNtFileToNodePath(Session session, String fileName, String parentNodePath,
			String parentNodeType, InputStream data) {
		Calendar cal = Calendar.getInstance();
		try {
			if (session.itemExists(parentNodePath.concat("/").concat(fileName))) {
				Node parentNode = JcrUtils.getOrCreateByPath(parentNodePath, parentNodeType, session);
				Node ntFileNode = parentNode.getNode(fileName);
				Node content = ntFileNode.getNode(Node.JCR_CONTENT);
				cal.setTime(new Date());
				Binary bin = content.getSession().getValueFactory().createBinary(data);
				content.setProperty(Property.JCR_DATA, bin);
				content.setProperty(Property.JCR_LAST_MODIFIED, cal);
				content.setProperty(Property.JCR_LAST_MODIFIED_BY, session.getUserID());
				content.setProperty(Property.JCR_MIMETYPE,
						MimeTypes.getMimeType(fileName, MimeTypes.APPLICATION_OCTET_STREAM));
				session.save();
			}
			return true;
		} catch (Exception e) {
			log.error(ArrayUtils.toString(e.getStackTrace()));
		}
		return false;
	}
}
