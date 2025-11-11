package com.adobe.fd.fp.model;

import com.adobe.fd.fp.util.FormsPortalConstants;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Represents metadata for pending signature operations in Forms Portal.
 * Extends DraftMetadata to include draft-related properties.
 */
public class PendingSignMetadata extends DraftMetadata {

    private static final long serialVersionUID = -5047158395830000736L;

    public static final String PENDING_SIGN_ID = "pendingSignID";

    private String pendingSignID;
    private String agreementId;
    private String status;
    private String eSignStatus;
    private String[] nextSigners;

    /** Default constructor */
    public PendingSignMetadata() {
        super();
    }

    /**
     * Converts this object to a JSONObject.
     * This method does not rely on the superclass method to avoid override issues.
     * 
     * @return JSONObject representation of this object
     * @throws JSONException if JSON conversion fails
     */
    public org.apache.sling.commons.json.JSONObject getJSONObject() throws JSONException {
        org.apache.sling.commons.json.JSONObject json = new org.apache.sling.commons.json.JSONObject();

        // Include draft metadata from superclass manually if needed
        if (super.getDraftID() != null) {
            json.put(DraftMetadata.DRAFT_ID, super.getDraftID());
        }

        json.put(PENDING_SIGN_ID, pendingSignID);
        json.put(FormsPortalConstants.STR_AGREEMENT_ID, agreementId);

        if (nextSigners != null && nextSigners.length > 0) {
            JSONArray signerArray = new JSONArray();
            for (String signer : nextSigners) {
                signerArray.put(signer);
            }
            json.put(FormsPortalConstants.STR_NEXT_SIGNERS, signerArray);
        }

        json.put("status", status);
        json.put("eSignStatus", eSignStatus);

        return json;
    }

    // --- Getters & Setters ---

    public String getPendingSignID() { return pendingSignID; }
    public void setPendingSignID(String pendingSignID) { this.pendingSignID = pendingSignID; }

    public String getAgreementId() { return agreementId; }
    public void setAgreementId(String agreementId) { this.agreementId = agreementId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String[] getNextSigners() { return nextSigners; }
    public void setNextSigners(String[] nextSigners) { this.nextSigners = nextSigners; }

    public String geteSignStatus() { return eSignStatus; }
    public void seteSignStatus(String eSignStatus) { this.eSignStatus = eSignStatus; }
}
