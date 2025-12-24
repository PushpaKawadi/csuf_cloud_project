package com.adobe.fd.fp.customhandler;

import java.io.ByteArrayInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.UUID;

import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.*;
import org.osgi.service.metatype.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.fd.fp.exception.FormsPortalException;
import com.adobe.fd.fp.service.DraftDataService;
import com.adobe.fd.fp.service.PendingSignDataService;
import com.adobe.fd.fp.service.SubmitDataService;
import com.adobe.fd.fp.util.FormsPortalConstants;

@Component(
    service = {
        SubmitDataService.class,
        DraftDataService.class,
        PendingSignDataService.class
    },
    immediate = true,
    property = {
        "aem.formsportal.impl.prop=formsportal.customdataservice"
    }
)
@Designate(ocd = FormsPortalCustomDataServiceImpl.Config.class)
public class FormsPortalCustomDataServiceImpl
        implements SubmitDataService, DraftDataService, PendingSignDataService {

    private static final Logger log =
            LoggerFactory.getLogger(FormsPortalCustomDataServiceImpl.class);

    /* ================= OSGi CONFIG ================= */

    @ObjectClassDefinition(
        name = "Forms Portal Custom Data Service (Cloud)",
        description = "Cloud compatible custom persistence for Forms Portal"
    )
    public @interface Config {

        @AttributeDefinition(name = "Datasource Name")
        String datasource() default "formsportal";

        @AttributeDefinition(name = "Data Table Name")
        String datatable() default FormsPortalConstants.STR_DEFAULT_DATA_TABLE;

        @AttributeDefinition(name = "Service Subservice")
        String subservice() default "formsPortalServiceUser";
    }

    private String tableName;
    private String subservice;

    /* ================= REFERENCES ================= */

    @Reference
    private ResourceResolverFactory resolverFactory;

    @Reference(target = "(datasource.name=formsportal)")
    private DataSource dataSource;

    /* ================= LIFECYCLE ================= */

    @Activate
    protected void activate(Config config) {
        log.info("ACTIVATE | FormsPortalCustomDataServiceImpl");
        this.tableName = config.datatable();
        this.subservice = config.subservice();
        log.info("CONFIG | table={} | subservice={}", tableName, subservice);
    }

    /* ================= HELPERS ================= */

    private ResourceResolver getServiceResolver() throws FormsPortalException {
        log.trace("ENTER getServiceResolver()");
        try {
            ResourceResolver rr = resolverFactory.getServiceResourceResolver(
                Map.of(ResourceResolverFactory.SUBSERVICE, subservice)
            );
            log.trace("EXIT getServiceResolver() | user={}", rr.getUserID());
            return rr;
        } catch (LoginException e) {
            log.error("ERROR getServiceResolver()", e);
            throw new FormsPortalException(e);
        }
    }

    private Connection getConnection() throws FormsPortalException {
        log.trace("ENTER getConnection()");
        try {
            Connection conn = dataSource.getConnection();
            log.trace("EXIT getConnection()");
            return conn;
        } catch (Exception e) {
            log.error("ERROR getConnection()", e);
            throw new FormsPortalException(e);
        }
    }

    private String normalizeId(String id) {
        return StringUtils.isBlank(id) ? UUID.randomUUID().toString() : id;
    }

    /* ================= CORE SAVE ================= */

    private String saveInternal(String id, byte[] data, String owner)
            throws FormsPortalException {

        id = normalizeId(id);
        log.info("SAVE_INTERNAL | id={} | owner={} | bytes={}", id, owner, data.length);

        String selectSql = "SELECT id FROM " + tableName + " WHERE id = ?";
        String insertSql = "INSERT INTO " + tableName + " (id, data, owner) VALUES (?, ?, ?)";
        String updateSql = "UPDATE " + tableName + " SET data = ?, owner = ? WHERE id = ?";

        try (Connection conn = getConnection()) {
            conn.setAutoCommit(false);

            boolean exists;
            try (PreparedStatement ps = conn.prepareStatement(selectSql)) {
                ps.setString(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    exists = rs.next();
                }
            }

            log.info("DB_CHECK | id={} | exists={}", id, exists);

            if (exists) {
                try (PreparedStatement ps = conn.prepareStatement(updateSql)) {
                    ps.setBlob(1, new ByteArrayInputStream(data));
                    ps.setString(2, owner);
                    ps.setString(3, id);
                    ps.executeUpdate();
                }
                log.info("DB_UPDATE | id={}", id);
            } else {
                try (PreparedStatement ps = conn.prepareStatement(insertSql)) {
                    ps.setString(1, id);
                    ps.setBlob(2, new ByteArrayInputStream(data));
                    ps.setString(3, owner);
                    ps.executeUpdate();
                }
                log.info("DB_INSERT | id={}", id);
            }

            conn.commit();
            log.info("SAVE_SUCCESS | id={}", id);
            return id;

        } catch (Exception e) {
            log.error("SAVE_FAILED | id={}", id, e);
            throw new FormsPortalException(e);
        }
    }

    /* ================= SUBMIT / DRAFT ================= */

    @Override
    public String saveData(String id, String formName, String formdata)
            throws FormsPortalException {
        log.info("CALL saveData(id, formName, formdata) | id={} | form={}", id, formName);
        try (ResourceResolver rr = getServiceResolver()) {
            return saveInternal(id, formdata.getBytes(), rr.getUserID());
        }
    }

    @Override
    public String saveData(byte[] data) throws FormsPortalException {
        log.info("CALL saveData(byte[])");
        try (ResourceResolver rr = getServiceResolver()) {
            return saveInternal(null, data, rr.getUserID());
        }
    }

    @Override
    public String saveData(String id, byte[] data) throws FormsPortalException {
        log.info("CALL saveData(id, byte[]) | id={}", id);
        try (ResourceResolver rr = getServiceResolver()) {
            return saveInternal(id, data, rr.getUserID());
        }
    }

    @Override
    public String updateData(String userDataID, byte[] data)
            throws FormsPortalException {
        log.info("CALL updateData | id={}", userDataID);
        return saveData(userDataID, data);
    }

    @Override
    public byte[] getData(String userDataID) throws FormsPortalException {
        log.info("CALL getData | id={}", userDataID);
        String sql = "SELECT data FROM " + tableName + " WHERE id = ?";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, userDataID);
            try (ResultSet rs = ps.executeQuery()) {
                byte[] result = rs.next() ? rs.getBytes(1) : null;
                log.info("GET_DATA_RESULT | id={} | found={}", userDataID, result != null);
                return result;
            }
        } catch (Exception e) {
            log.error("GET_DATA_FAILED | id={}", userDataID, e);
            throw new FormsPortalException(e);
        }
    }

    @Override
    public boolean deleteData(String userDataID) throws FormsPortalException {
        log.info("CALL deleteData | id={}", userDataID);
        String sql = "DELETE FROM " + tableName + " WHERE id = ?";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, userDataID);
            boolean deleted = ps.executeUpdate() > 0;
            log.info("DELETE_RESULT | id={} | deleted={}", userDataID, deleted);
            return deleted;
        } catch (Exception e) {
            log.error("DELETE_FAILED | id={}", userDataID, e);
            throw new FormsPortalException(e);
        }
    }

    /* ================= ATTACHMENTS ================= */

    @Override
    public String saveAttachment(byte[] attachmentBytes)
            throws FormsPortalException {
        log.info("CALL saveAttachment | bytes={}", attachmentBytes.length);
        return saveData(attachmentBytes);
    }

    @Override
    public String saveAttachmentAsynchronously(byte[] attachmentBytes,
            Map<String, Object> options) throws FormsPortalException {
        log.info("CALL saveAttachmentAsynchronously");
        return saveAttachment(attachmentBytes);
    }

    @Override
    public byte[] getAttachment(String attachmentID)
            throws FormsPortalException {
        log.info("CALL getAttachment | id={}", attachmentID);
        return getData(attachmentID);
    }

    @Override
    public boolean deleteAttachment(String attachmentID)
            throws FormsPortalException {
        log.info("CALL deleteAttachment | id={}", attachmentID);
        return deleteData(attachmentID);
    }

    /* ================= ASYNC ================= */

    @Override
    public String saveDataAsynchronusly(byte[] data,
            Map<String, Object> options) throws FormsPortalException {

        String id = (String) options.get(FormsPortalConstants.STR_ID);
        String owner = (String) options.get(FormsPortalConstants.STR_OWNER);

        log.info("CALL saveDataAsynchronusly | id={} | owner={}", id, owner);
        return saveInternal(id, data, owner);
    }
}
