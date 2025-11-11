package com.csuf.cloud.core.services;

import java.io.InputStream;

import javax.jcr.RepositoryException;
import javax.jcr.Session;

/**
 * @author 105876
 *
 */
public interface AssetService {

	boolean writeNtFileToPayloadPath(Session session, String ntFileNodeName, String afPath, String ntFileNodeParentPath,
			InputStream data);

	InputStream getFileStreamFromCRX(Session session, String filePath);

	boolean uploadFileToWorkflowPayloadPath(Session session, String fileName, String payloadFolderPath,
			InputStream data);

	boolean overwriteNtFileToNodePath(Session session, String fileName, String parentNodePath, String parentNodeType,
			InputStream data);

	boolean deleteFileFromCRX(Session session, String filePath) throws RepositoryException;
}