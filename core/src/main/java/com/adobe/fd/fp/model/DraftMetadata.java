package com.adobe.fd.fp.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;

public class DraftMetadata implements Serializable, Comparable<DraftMetadata> {
   private static final long serialVersionUID = 7192358939630523884L;
   public static final String GUIDE_NAME = "guideName";
   public static final String FORM_NAME = "formName";
   public static final String OWNER = "owner";
   public static final String LAST_MODIFIED = "lastModified";
   public static final String PATH = "path";
   public static final String DESCRIPTION = "description";
   public static final String DRAFT_ID = "draftID";
   public static final String USER_DATA_ID = "userdataID";
   private String name;
   private String owner;
   private Date lastModified;
   private String path;
   private String description;
   private String draftID;
   private String userdataID;
   private Map<String, String> customProperty;

   public String getName() {
      return this.name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getOwner() {
      return this.owner;
   }

   public void setOwner(String owner) {
      this.owner = owner;
   }

   public Date getLastModified() {
      return this.lastModified;
   }

   public void setLastModified(Date lastModified) {
      this.lastModified = lastModified;
   }

   public String getPath() {
      return this.path;
   }

   public void setPath(String path) {
      this.path = path;
   }

   public String getDescription() {
      return this.description;
   }

   public String getDraftID() {
      return this.draftID;
   }

   public void setDraftID(String draftID) {
      this.draftID = draftID;
   }

   public void setDescription(String description) {
      this.description = description;
   }

   public int compareTo(DraftMetadata that) {
      return this.lastModified.compareTo(that.getLastModified());
   }

   public String getUserdataID() {
      return this.userdataID;
   }

   public void setUserdataID(String userdataID) {
      this.userdataID = userdataID;
   }

   public void setCustomProperty(String propertyName, String propertyValue) {
      if (this.customProperty == null) {
         this.customProperty = new HashMap();
      }

      this.customProperty.put(propertyName, propertyValue);
   }

   public Map<String, String> getCustomProperty() {
      return this.customProperty;
   }

   public JSONObject getJSONObject() throws JSONException {
      JSONObject jsonObject = new JSONObject();
      jsonObject.put("formName", this.getName());
      jsonObject.put("owner", this.getOwner());
      jsonObject.put("jcr:lastModified", this.getLastModified().getTime());
      jsonObject.put("path", this.getPath());
      jsonObject.put("description", this.getDescription());
      jsonObject.put("draftID", this.getDraftID());
      Map<String, String> customPropertyObject = this.getCustomProperty();
      if (customPropertyObject != null) {
         Iterator entries = customPropertyObject.entrySet().iterator();

         while(entries.hasNext()) {
            Entry<String, String> entry = (Entry)entries.next();
            if (!jsonObject.has((String)entry.getKey())) {
               jsonObject.put((String)entry.getKey(), entry.getValue() != null ? (String)entry.getValue() : "");
            }

            if (((String)entry.getKey()).equals("guideName")) {
               jsonObject.put("guideName", this.getName());
            }
         }
      }

      return jsonObject;
   }
}
