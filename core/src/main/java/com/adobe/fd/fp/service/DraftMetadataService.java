/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2012-2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
package com.adobe.fd.fp.service;

import java.util.Map;
import org.apache.sling.commons.json.JSONArray;
import com.adobe.fd.fp.exception.FormsPortalException;

/*
* Service for providing CRUDL operations for metadata associated with drafts
* 
* @since        AEM 6.1
*/

/**
 * DraftMetadataService will get/delete/save metadata associated with a draft. Also it will list all the drafts for a user.
 */
public interface DraftMetadataService {
    /**
     * @param draftMetaPropMap: This map would expect draftID key with other metadata properties associated with draft
     * @return draftID of the draft just saved
     * @throws FormsPortalException
     */
    public String saveMetadata(Map<String, Object> draftMetadataPropMap) throws FormsPortalException;
    /**
     * @param draftID: metadata identifier associated with draft
     * @return status of delete operation just performed on draft metadata
     * @throws FormsPortalException
     */
    public boolean deleteMetadata(String draftID) throws FormsPortalException;
    /**
     * @param cutPoints: comma separated string of cutPoints that tells about what set of properties of a draft is expected in the response
     * @return a JSON Array of JSON Objects, each representing a draft instance. This list returned should be specific to logged-in user
     * @throws FormsPortalException
     */
    public JSONArray getDrafts(String cutPoints) throws FormsPortalException;
         
    /** 
     * @param draftID: identifier associated with draft
     * @param propertyName: name of metadata property queried to get
     * @return property value. In case this is a multivalued property, return a string array consisting of all the values. If this is a single valued property return an array with only one value.
     *         If this draft instance doesn't have this property then return an empty array. NEVER RETURN NULL. 
     * @throws FormsPortalException
     */
    public String[] getProperty(String draftID, String propertyName) throws FormsPortalException;
     
    /**
     * @param draftID: Identifier associated with draft
     * @param propertyName: Name of metadata property queried for deletion
     * @return status of operation performed to delete property with name "propertyName"
     * @throws FormsPortalException
     */
     public boolean deleteProperty(String draftID, String propertyName) throws FormsPortalException;
}
