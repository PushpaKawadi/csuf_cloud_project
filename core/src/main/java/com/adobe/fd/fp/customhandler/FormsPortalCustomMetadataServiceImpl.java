package com.adobe.fd.fp.customhandler;

import com.adobe.fd.fp.common.PortalUtilsComponent;
import com.adobe.fd.fp.exception.FormsPortalException;
import com.adobe.fd.fp.service.*;
import com.adobe.fd.fp.util.FormsPortalConstants;
import com.csuf.cloud.core.services.impl.AIChatbotServiceImpl;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONObject;
import org.osgi.service.component.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.osgi.framework.BundleContext;

import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;

import javax.sql.DataSource;
import java.sql.*;
import java.sql.Statement;
import java.util.*;
import java.util.stream.Collectors;

@Component(
        service = {SubmitMetadataService.class, DraftMetadataService.class, PendingSignMetadataService.class},
        immediate = true,
        property = {"aem.formsportal.impl.prop=formsportal.customdataservice"},
        name = "Forms Portal Custom Data Service Impl"
)

public class FormsPortalCustomMetadataServiceImpl implements SubmitMetadataService, DraftMetadataService, PendingSignMetadataService {
	private static final Logger log = LoggerFactory.getLogger(FormsPortalCustomMetadataServiceImpl.class);
    @Reference
    private PortalUtilsComponent portalUtilsComponent;

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Reference
    private FPKeyGeneratorService fpKeyGeneratorService;

    private String dataSourceName;
    private String metadataTable;
    private String additionalMetadataTable;
    private String commentTable;

    @Activate
    protected void activate(BundleContext context, Map<String, Object> props) {
    	log.info("Malabar FormsPortalCustomMetadataServiceImpl class");
        dataSourceName = Optional.ofNullable((String) props.getOrDefault("datasource", FormsPortalConstants.STR_DEFAULT_DATA_SOURCE_NAME))
                                 .orElse(FormsPortalConstants.STR_DEFAULT_DATA_SOURCE_NAME);
        metadataTable = Optional.ofNullable((String) props.getOrDefault("metadatatable", FormsPortalConstants.STR_DEFAULT_METADATA_TABLE))
                                .orElse(FormsPortalConstants.STR_DEFAULT_METADATA_TABLE);
        additionalMetadataTable = Optional.ofNullable((String) props.getOrDefault("additionalmetadatatable", FormsPortalConstants.STR_DEFAULT_ADDITIONAL_METADATA_TABLE))
                                          .orElse(FormsPortalConstants.STR_DEFAULT_ADDITIONAL_METADATA_TABLE);
        commentTable = Optional.ofNullable((String) props.getOrDefault("commenttable", FormsPortalConstants.STR_COMMENT_TABLE))
                               .orElse(FormsPortalConstants.STR_COMMENT_TABLE);
    }

    private ResourceResolver getServiceResourceResolver() throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomMetadataServiceImpl ResourceResolver");
        try {
            Map<String, Object> param = new HashMap<>();
            param.put(ResourceResolverFactory.SUBSERVICE, "formsPortalService"); // Service user must be mapped in OSGi
            return resourceResolverFactory.getServiceResourceResolver(param);
        } catch (Exception e) {
            throw new FormsPortalException("Unable to get ResourceResolver", e);
        }
    }

    private Connection getConnection() throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomMetadataServiceImpl getConnection");
        try (ResourceResolver resolver = getServiceResourceResolver()) {
            DataSource ds = resolver.adaptTo(DataSource.class);
            if (ds == null) throw new FormsPortalException("DataSource not available");
            return ds.getConnection();
        } catch (SQLException e) {
            throw new FormsPortalException("Error getting DB connection", e);
        }
    }

    @Override
    public String saveMetadata(Map<String, Object> metadataMap) throws FormsPortalException {
    	log.info("Malabar FormsPortalCustomMetadataServiceImpl saveMetadata");
        String draftId = metadataMap.get(FormsPortalConstants.STR_DRAFT_ID).toString();
        metadataMap.put(FormsPortalConstants.STR_ID, draftId);
        try (Connection conn = getConnection()) {
            conn.setAutoCommit(false);
            insertMetadata(draftId, metadataMap, conn);
            conn.commit();
        } catch (Exception e) {
            throw new FormsPortalException(e);
        }
        return draftId;
    }

    @Override
    public JSONObject submitMetadata(Map<String, Object> metadataMap) throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomMetadataServiceImpl submitMetadata");
        try (Connection conn = getConnection()) {
            conn.setAutoCommit(false);
            String submitId = metadataMap.containsKey(FormsPortalConstants.STR_SUBMIT_ID)
                    ? metadataMap.get(FormsPortalConstants.STR_SUBMIT_ID).toString()
                    : fpKeyGeneratorService.getUniqueId();

            metadataMap.put(FormsPortalConstants.STR_SUBMIT_ID, submitId);
            metadataMap.put(FormsPortalConstants.STR_ID, submitId);
            insertMetadata(submitId, metadataMap, conn);
            conn.commit();

            JSONObject submittedInstance = new JSONObject();
            try (PreparedStatement stmt = conn.prepareStatement(
                    "SELECT * FROM " + metadataTable + " WHERE id = ?")) {
                stmt.setString(1, submitId);
                try (ResultSet rs = stmt.executeQuery()) {
                    if (rs.next()) {
                        submittedInstance.put(FormsPortalConstants.STR_SUBMIT_ID, rs.getString(FormsPortalConstants.STR_SUBMIT_ID));
                        submittedInstance.put(FormsPortalConstants.STR_FORM_NAME, rs.getString(FormsPortalConstants.STR_FORM_NAME));
                        submittedInstance.put(FormsPortalConstants.STR_OWNER, rs.getString(FormsPortalConstants.STR_OWNER));
                        submittedInstance.put(FormsPortalConstants.STR_JCR_LAST_MODIFIED, rs.getString(FormsPortalConstants.STR_JCR_LAST_MODIFIED));
                    }
                }
            }
            return submittedInstance;
        } catch (Exception e) {
            throw new FormsPortalException(e);
        }
    }

    private void insertMetadata(String id, Map<String, Object> metadataMap, Connection conn) throws FormsPortalException {
    	log.info("Pushpa FormsPortalCustomMetadataServiceImpl insertMetadata");
        try {
            // Get table columns
            List<String> columnsList = new ArrayList<>();
            try (Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery("SHOW COLUMNS FROM " + metadataTable)) {
                while (rs.next()) {
                    columnsList.add(rs.getString("Field"));
                }
            }

            // Insert main metadata
            List<String> mainKeys = new ArrayList<>(metadataMap.keySet());
            mainKeys.retainAll(columnsList);
            if (!mainKeys.isEmpty()) {
                String columnsStr = String.join("`,`", mainKeys);
                String placeholders = String.join(",", Collections.nCopies(mainKeys.size(), "?"));
                String sql = "INSERT INTO " + metadataTable + " (`" + columnsStr + "`) VALUES(" + placeholders + ") "
                        + "ON DUPLICATE KEY UPDATE " + String.join("=?,", mainKeys) + "=?";

                try (PreparedStatement ps = conn.prepareStatement(sql)) {
                    int count = 1;
                    for (String key : mainKeys) {
                        ps.setString(count++, String.valueOf(metadataMap.get(key)));
                    }
                    for (String key : mainKeys) {
                        ps.setString(count++, String.valueOf(metadataMap.get(key)));
                    }
                    ps.execute();
                }
            }

            // Insert additional metadata
            List<String> additionalKeys = new ArrayList<>(metadataMap.keySet());
            additionalKeys.removeAll(columnsList);
            for (String key : additionalKeys) {
                try (PreparedStatement ps = conn.prepareStatement(
                        "INSERT INTO " + additionalMetadataTable + " (additionalMetadataKey, additionalMetadataValue, id) VALUES (?, ?, ?) "
                                + "ON DUPLICATE KEY UPDATE additionalMetadataValue=?")) {
                    ps.setString(1, key);
                    ps.setString(2, String.valueOf(metadataMap.get(key)));
                    ps.setString(3, id);
                    ps.setString(4, String.valueOf(metadataMap.get(key)));
                    ps.execute();
                }
            }

        } catch (SQLException e) {
            throw new FormsPortalException(e);
        }
    }

    // Utility methods
    
  
    private String flattentList(List<?> items) {
        return String.join("|", items.stream()
                                     .filter(Objects::nonNull)
                                     .map(Object::toString)
                                     .collect(Collectors.toList()));
    }

    private String flattenArray(Object[] items) {
        return String.join("|", Arrays.stream(items).filter(Objects::nonNull).map(Object::toString).collect(Collectors.toList()));
    }

    private String[] deflateList(String value) {
        return StringUtils.isEmpty(value) ? new String[]{""} : value.split("\\|");
    }

	@Override
	public JSONObject saveSignMetadata(Map<String, Object> metadataProperties) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONArray getPendingSignInstances(String cutPoints) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONArray searchPendingSignInstances(Query query) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONObject readPendingSignInstance(String pendingSignID, String cutPoints) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONArray getDrafts(String cutPoints) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONObject submitMetadataAsynchronously(Map<String, Object> submittedMetaPropMap)
			throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteMetadata(String submitID) throws FormsPortalException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public JSONArray getSubmissions(String cutPoints) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String[] getProperty(String submitID, String propertyName) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteProperty(String submitID, String propertyName) throws FormsPortalException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public JSONObject getSubmissionsOfAllUsers(String formPath, String cutPoints, Map<String, String> searchOptions)
			throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String addComment(String submitID, String commentContent, String owner) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONArray getFormsForSubmissionReview() throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public JSONArray getAllComments(String submitID) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}
}
