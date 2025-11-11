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
import org.apache.sling.commons.json.JSONObject;

import com.adobe.fd.fp.exception.FormsPortalException;

/*
* Service for providing CRUDL operations for metadata of submitted instance
* 
* @since        AEM 6.1
*/

/**
 * SubmitMetadataService will get/delete/save metadata associated with a form submission. Also it will list all the submissions of a user.
 */
public interface SubmitMetadataService {
     
    /**
     * @param submittedMetaPropMap: consists of all the metadata information regarding this form submission instance
     * @return The metadata object of submitted form in JSON format. For adaptive form, this object will also be used for redirect URL creation
     * @throws FormsPortalException
     */
    public JSONObject submitMetadata(Map<String, Object> submittedMetaPropMap) throws FormsPortalException;
    
    /** Saves the metadata asynchronously with owner info being passed in the map itself
     * @param submittedMetaPropMap consists of all the metadata information regarding this form submission instance
     * @return The metadata object of submitted form in JSON format. 
     * @throws FormsPortalException
     */
    public JSONObject submitMetadataAsynchronously(Map<String, Object> submittedMetaPropMap) throws FormsPortalException;
     
    /**
     * @param submitID: metadata identifier associated with this submission
     * @return status of delete operation on submitted Metadata
     * @throws FormsPortalException
     */
    public boolean deleteMetadata(String submitID) throws FormsPortalException;
     
    /**
     * @param cutPoints: comma separated string of cutPoints that tells about what set of properties of a submission is expected in the response
     * @return list of submitted Forms' metadata objects so that they could be shown on forms portal UI
     * @throws FormsPortalException
     */
    public JSONArray getSubmissions(String cutPoints) throws FormsPortalException;
     
    /**
     *
     * @param submitID: identifier associated with this submission
     * @param propertyName: name of the metadata property queried to get
     * @return property value. In case this is a multivalued property, return a string array consisting of all the values. If this is a single valued property return an array with only one value.
     *         If this submission instance doesn't have this property then return an empty array. NEVER RETURN NULL. 
     * @throws FormsPortalException
     */
     
    public String[] getProperty(String submitID, String propertyName) throws FormsPortalException;
     
    /**
     *
     * @param submitID: identifier associated with this submission
     * @param propertyName: name of the metadata property queried for deletion
     * @return status of operation performed to delete property with name "propertyName"
     * @throws FormsPortalException
     */
    
    public boolean deleteProperty(String submitID, String propertyName) throws FormsPortalException;

    /**
     *
     * @param formPath: Path of the form, whose submissions you want to get listed. Path is the unique identifier of a form
     * @param cutPoints: What set of properties you'd want to get listed of submissions
     * @param searchOptions: This would contain 4 keys basically.
     *                       1. limit: Page size i.e. total number of results a page can show
     *                       2. offset: Start index in total results set
     *                       3. orderby: Sorting submissions list based on this property
     *                       4. sort: Ascending or descending order
     * @return A JSON array which would contain submissions object
     * @throws FormsPortalException
     */
    public JSONObject getSubmissionsOfAllUsers(String formPath, String cutPoints, Map<String, String> searchOptions) throws FormsPortalException;

    /**     
     * @param submitID: Identification number of this submission instance (basically metadata id of this submission)
     * @param commentContent: content of the comment
     * @param owner: Principal Name of the person who made this comment. If owner information is null, please get this information from current session object
     * @return Id of this comment
     */
    public String addComment(String submitID, String commentContent, String owner) throws FormsPortalException;

    /**     
     * @return A JSON Array of Form Objects. Each one of them would consist of formName and formPath attributes. 
     *         Please note, the list of forms returned should be the one for whom loggged-in reviewer is authorized to review
     * @throws FormsPortalException
     */
    public JSONArray getFormsForSubmissionReview() throws FormsPortalException;

    /**
     * 
     * @param submitID: metadata ID of submission whose review comments are requested
     * @return A JSON Array consisting of comment objects.
     * @throws FormsPortalException
     */
    public JSONArray getAllComments(String submitID) throws FormsPortalException;
    
}
