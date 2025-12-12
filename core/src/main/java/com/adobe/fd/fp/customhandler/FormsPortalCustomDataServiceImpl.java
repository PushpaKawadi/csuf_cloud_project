package com.adobe.fd.fp.customhandler;

import java.io.ByteArrayInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Map;

import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.component.annotations.*;
import org.osgi.service.metatype.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.fd.fp.exception.FormsPortalException;
import com.adobe.fd.fp.service.DraftDataService;
import com.adobe.fd.fp.service.PendingSignDataService;
import com.adobe.fd.fp.service.SubmitDataService;
import com.adobe.fd.fp.util.FormsPortalConstants;


import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;

@Component(
        service = {SubmitDataService.class, DraftDataService.class, PendingSignDataService.class},
        immediate = true
)
@Designate(ocd = FormsPortalCustomDataServiceImpl.Config.class)
public class FormsPortalCustomDataServiceImpl implements SubmitDataService, DraftDataService, PendingSignDataService {
	private static final Logger log = LoggerFactory.getLogger(FormsPortalCustomDataServiceImpl.class);
	

    private static final String DEFAULT_DATA_TABLE = FormsPortalConstants.STR_DEFAULT_DATA_TABLE;
    private static final String DEFAULT_DATA_SOURCE = FormsPortalConstants.STR_DEFAULT_DATA_SOURCE_NAME;

    @ObjectClassDefinition(
            name = "Forms Portal Custom Data Service Implementation",
            description = "Handles saving, retrieving, and deleting data and attachments for Forms Portal"
    )
    public @interface Config {
        @AttributeDefinition(
                name = "Data Table Name",
                description = "Name of the table to store data blob"
        )
        String datatable() default DEFAULT_DATA_TABLE;

        @AttributeDefinition(
                name = "Data Source Name",
                description = "Name of the configured Data Source"
        )
        String datasource() default DEFAULT_DATA_SOURCE;
    }

    @Reference
    private ResourceResolverFactory resolverFactory;

    private String dataTable;
    private String dataSource;
    private BundleContext bundleContext;

    @Activate
    protected void activate(Config config, BundleContext context) {
        this.dataTable = config.datatable();
        this.dataSource = config.datasource();
        this.bundleContext = context;
    }

    private String getDataSourceName() {
        return dataSource;
    }

    private String getDataTableName() {
        return dataTable;
    }

    private Connection getConnection() throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomDataServiceImpl getConnection");
        try {
            String filter = "(&(objectclass=javax.sql.DataSource)(datasource.name=" + getDataSourceName() + "))";
            ServiceReference<?>[] refs = bundleContext.getAllServiceReferences(null, filter);
            if (refs != null && refs.length == 1) {
                DataSource ds = (DataSource) bundleContext.getService(refs[0]);
                return ds.getConnection();
            }
            throw new FormsPortalException("No valid DataSource found for " + getDataSourceName());
        } catch (Exception e) {
            throw new FormsPortalException("Error obtaining database connection", e);
        }
    }

    private ResourceResolver getServiceResourceResolver() throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomDataServiceImpl ResourceResolver");
        try {
            // Using service user mapping in AEM
            return resolverFactory.getServiceResourceResolver(Map.of(
                    ResourceResolverFactory.SUBSERVICE, "formsPortalServiceUser"
            ));
        } catch (Exception e) {
            throw new FormsPortalException("Unable to get ResourceResolver", e);
        }
    }

    @Override
    public String saveData(String id, String formName, String formdata) throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomDataServiceImpl saveData");
        try (ResourceResolver resolver = getServiceResourceResolver()) {
            String userName = resolver.getUserID();
            return saveDataInternal(id, formdata.getBytes(), userName);
        }
    }

    private String saveDataInternal(String id, byte[] formData, String userName) throws FormsPortalException {
    	
    	log.info("Pushpa FormsPortalCustomDataServiceImpl saveDataInternal");
    	
        try (Connection connection = getConnection()) {
            String sql = "INSERT INTO " + getDataTableName() + " (id, data, owner) VALUES (?, ?, ?) "
                    + "ON DUPLICATE KEY UPDATE data = ?";
            connection.setAutoCommit(false);

            try (PreparedStatement stmt = connection.prepareStatement(sql)) {
                if (StringUtils.isEmpty(id)) {
                    id = java.util.UUID.randomUUID().toString();
                }
                stmt.setString(1, id);
                stmt.setBlob(2, new ByteArrayInputStream(formData));
                stmt.setString(3, userName);
                stmt.setBlob(4, new ByteArrayInputStream(formData));
                stmt.executeUpdate();
                connection.commit();
            }
            return id;
        } catch (Exception e) {
            throw new FormsPortalException("Error saving data", e);
        }
    }

    // Other interface methods can remain stubbed or implemented similarly
    @Override
    public String saveData(byte[] data) throws FormsPortalException { return null; }

    @Override
    public String updateData(String userDataID, byte[] data) throws FormsPortalException { return null; }

    @Override
    public String saveData(String id, byte[] data) throws FormsPortalException { return null; }

    @Override
    public String saveDataAsynchronusly(byte[] data, Map<String, Object> options) throws FormsPortalException { return null; }

    @Override
    public boolean deleteData(String userDataID) throws FormsPortalException { return false; }

    @Override
    public String saveAttachment(byte[] attachmentBytes) throws FormsPortalException { return null; }

    @Override
    public String saveAttachmentAsynchronously(byte[] attachmentBytes, Map<String, Object> options) throws FormsPortalException { return null; }

    @Override
    public boolean deleteAttachment(String attachmentID) throws FormsPortalException { return false; }

    @Override
    public byte[] getAttachment(String attachmentID) throws FormsPortalException { return null; }

	@Override
	public byte[] getData(String userDataID) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}
}
