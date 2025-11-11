/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
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
import org.apache.sling.commons.json.JSONObject;

import com.adobe.fd.fp.exception.FormsPortalException;

/**
 * Service for providing CRUDL operation for metadata associated with pending sign instances
 * @author sharoon
 *
 */
public interface PendingSignMetadataService {
	 /**
     * @param metadataProperties: consists of all the metadata information regarding this pending sign instance.
     * 							This api can also be used for update of instance provided instance ID is included in the map else new instance will be created 
     * @return The metadata object of pending sign form in JSON format. For adaptive form, this object will also be used for redirect URL creation
     * @throws FormsPortalException
     */
    public JSONObject saveSignMetadata(Map<String, Object> metadataProperties) throws FormsPortalException;
     
    /**
     * @param pendingSignID: metadata identifier associated with this pending sign instance
     * @return status of delete operation on pending sign instance's Metadata
     * @throws FormsPortalException
     */
    public boolean deleteMetadata(String pendingSignID) throws FormsPortalException;
     
    /** Get the pending sign instances of current logged-in user
     * @param cutPoints: comma separated string of cutPoints that tells about what set of properties of a pending sign instance is expected in the response
     * @return list of pending sign instance's metadata objects so that they could be shown on forms portal UI
     * @throws FormsPortalException
     */
    public JSONArray getPendingSignInstances(String cutPoints) throws FormsPortalException;
  
    /** Search pending sign instances as per the query object passed.
     * @param query Objects containing constraints for searching the instances
     * @return list of pending sign instances satisfying the search criteria.
     * @throws FormsPortalException
     */
    public JSONArray searchPendingSignInstances(Query query) throws FormsPortalException;
    
    /** Read the pending sign whose id is passed as input
     * @param pendingSignID
     * @param cutPoints comma separated string of cutPoints that tells about what set of properties of a pending sign instance is expected in the response
     * @return
     * @throws FormsPortalException
     */
    public JSONObject readPendingSignInstance(String pendingSignID, String cutPoints) throws FormsPortalException;
    
    /**
     *
     * @param pendingSignID: identifier associated with this pending sign instance
     * @param propertyName: name of the metadata property queried to get
     * @return property value. In case this is a multivalued property, return a string array consisting of all the values. If this is a single valued property return an array with only one value.
     *         If this identifier associated with this pending sign instance doesn't have this property then return an empty array. NEVER RETURN NULL. 
     * @throws FormsPortalException
     */
     
    public String[] getProperty(String pendingSignID, String propertyName) throws FormsPortalException;
     
    /**
     *
     * @param pendingSignID: identifier associated with this pending sign instance
     * @param propertyName: name of the metadata property queried for deletion
     * @return status of operation performed to delete property with name "propertyName"
     * @throws FormsPortalException
     */
    
    public boolean deleteProperty(String pendingSignID, String propertyName) throws FormsPortalException;

}

