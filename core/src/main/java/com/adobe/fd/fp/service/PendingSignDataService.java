/**
 * 
 */
package com.adobe.fd.fp.service;

import com.adobe.fd.fp.exception.FormsPortalException;

/**
 * @author sharoon
 *
 */
public interface PendingSignDataService {

    /**
     * Save the user data provided as byte array. If id is null, it is treated as creation else it is treated as an update case
     * @param data
     * @return id corresponding to saved data
     * @throws FormsPortalException
     */
    public String saveData (byte[] data) throws FormsPortalException;
    
    /** Update the data blob for the provided user data ID if it is permissible
     * @param userDataID 
     * @param data
     * @return
     * @throws FormsPortalException
     */
    public String updateData (String userDataID, byte[] data) throws FormsPortalException;
     
    /**
     * Gets the user data stored against the ID passed as argument
     * @param userDataID: unique id associated with this user data for this pending sign instance
     * @return user data associated with this pending sign instance
     * @throws FormsPortalException
     */
    public byte[] getData(String userDataID) throws FormsPortalException;
     
    /**
     * Deletes user data stored against the userDataID
     * @param userDataID: unique id associated with this user data for this pending sign instance
     * @return status of the delete operation on this pending sign instance
     * @throws FormsPortalException
     */
     
    public boolean deleteData(String userDataID) throws FormsPortalException;
     
     
    /**
     * Submits the attachment bytes passed as argument
     * @param attachmentsBytes: would expect byte array of the attachment for this pending sign instance
     * @return attachmentID for the attachment just saved (so that it could be retrieved later) 
     * @throws FormsPortalException
     */
    public String saveAttachment(byte[] attachmentBytes) throws FormsPortalException;
 
    /**
     * To delete an attachment
     * @param attachmentID: Unique id for this attachment
     * @return status of delete operation performed on attachment corresponding to this attachment ID
     * @throws FormsPortalException
     */
    public boolean deleteAttachment (String attachmentID) throws FormsPortalException;
     
    /**
     * To get attachment bytes
     * @param attachmentID: unique id for this attachment
     * @return data corresponding to this attachmentID
     * @throws FormsPortalException
     */
    public byte[] getAttachment (String attachmentID) throws FormsPortalException;

}
