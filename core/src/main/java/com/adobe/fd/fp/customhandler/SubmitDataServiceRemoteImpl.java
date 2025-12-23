package com.adobe.fd.fp.customhandler;

import com.adobe.fd.fp.config.FormsPortalDraftsandSubmissionConfigService;
import com.adobe.fd.fp.exception.FormsPortalException;
import com.adobe.fd.fp.service.FPKeyGeneratorService;
import com.adobe.fd.fp.service.SubmitDataService;
import com.adobe.fd.fp.util.FPRemoteOperations;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.service.component.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.LoginException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

@Component(
        service = SubmitDataService.class,
        immediate = true,
        name = "Forms Portal Submit Data Service Remote Impl",
        property = {
                "aem.formsportal.impl.prop=com.adobe.fd.fp.service.impl.SubmitDataServiceRemoteImpl"
        }
)
public class SubmitDataServiceRemoteImpl extends FPRemoteOperations implements SubmitDataService {
	
    private static final Logger logger = LoggerFactory.getLogger(SubmitDataServiceRemoteImpl.class);

    @Reference
    private ResourceResolverFactory resolverFactory;

    @Reference(cardinality = ReferenceCardinality.OPTIONAL, policy = ReferencePolicy.DYNAMIC)
    private volatile FPKeyGeneratorService fpKeyGeneratorService;

    @Reference
    private FormsPortalDraftsandSubmissionConfigService draftsandSubmissionConfiguration;

    @Reference
    private SlingRepository slingRepository;
    
    

    protected String getInstanceType() {
        return "submit";
    }
    
    

    private ResourceResolver getServiceResolver() throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl class");

        Map<String, Object> authInfo = new HashMap<>();
        authInfo.put(ResourceResolverFactory.SUBSERVICE, "formsService"); // configure service user in AEM
        try {
            try {
				return resolverFactory.getServiceResourceResolver(authInfo);
			} catch (org.apache.sling.api.resource.LoginException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        } catch (Exception e) {
            throw new FormsPortalException("Failed to get Service ResourceResolver", e);
        }
		return null;
    }

    // Helper method - not part of the interface
    public String saveData(String userDataID, String formData) throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl saveData");
        byte[] dataBytes = formData != null ? formData.getBytes(StandardCharsets.UTF_8) : null;
        return saveData(userDataID, dataBytes, "data", null);
    }

    @Override
    public String saveAttachment(byte[] attachmentBytes) throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl saveAttachment");
        return saveData(null, attachmentBytes, "attachments", null);
    }

    protected String saveData(String id, byte[] data, String itemType, String owner) throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl saveData");
        try (ResourceResolver resolver = getServiceResolver()) {
            String userName = owner != null ? owner : resolver.getUserID();
            userName = URLEncoder.encode(userName, StandardCharsets.UTF_8);

            if (StringUtils.isEmpty(id)) {
                id = fpKeyGeneratorService.getUniqueId();
            } else {
                id = extractId(id);
            }

            String url = encodeUrl(draftsandSubmissionConfiguration.getFormsPortalRoot() + "/" + userName);
            LinkedList<String[]> params = buildParams(id, itemType);

            for (int i = 0; i < params.size(); i++) {
                String[] pair = params.get(i);
                url += (i == 0 ? "?" : "&") + pair[0] + "=" + pair[1];
            }

            String nodePath = getInstanceType() + "/" + itemType + "/" + id + "/" + "data";
            //super.postByteArray(url, data, nodePath);

            return draftsandSubmissionConfiguration.getFormsPortalRoot() + "/" + userName + "/" + getInstanceType()
                    + "/" + itemType + "/" + id + "/" + "data";

        } catch (Exception e) {
            throw new FormsPortalException(e);
        }
    }

    @Override
    public byte[] getData(String userDataID) throws FormsPortalException {
    	logger.info("Pushpa SubmitDataServiceRemoteImpl getData");
        try {
            return super.getDataInternal(
                    URLEncoder.encode(userDataID + "/jcr:data", StandardCharsets.UTF_8)
                            .replace("%2F", "/")
            );
        } catch (Exception e) {
            throw new FormsPortalException(e);
        }
    }

    @Override
    public boolean deleteData(String dataID) throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl deleteData");
        return deleteItem(dataID, "submission");
    }

    @Override
    public boolean deleteAttachment(String attachmentID) throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl deleteAttachment");
        return deleteItem(attachmentID, "attachment");
    }

    private boolean deleteItem(String id, String itemType) throws FormsPortalException {
    	logger.info("Malabar SubmitDataServiceRemoteImpl deleteItem");
        if (StringUtils.isBlank(id)) {
            logger.warn("Invalid {} ID", itemType);
            return false;
        }
        try {
            if (id.endsWith("data")) {
                id = id.substring(0, id.lastIndexOf("/"));
            }
            return super.deleteDataInternal(
                    URLEncoder.encode(id, StandardCharsets.UTF_8).replace("%2F", "/")
            );
        } catch (Exception e) {
            throw new FormsPortalException("ALC-FMP-001-023", e);
        }
    }

    @Override
    public byte[] getAttachment(String attachmentID) throws FormsPortalException {
        return getData(attachmentID);
    }

    private String encodeUrl(String url) throws UnsupportedEncodingException {
        return URLEncoder.encode(url, StandardCharsets.UTF_8).replace("%2F", "/");
    }

    private String extractId(String id) {
        int endIndex = id.lastIndexOf("/");
        if (endIndex != -1) {
            String subID = id.substring(endIndex + 1);
            if ("data".equals(subID)) {
                String subStr = id.substring(0, endIndex);
                endIndex = subStr.lastIndexOf("/");
                if (endIndex != -1) {
                    subID = subStr.substring(endIndex + 1);
                }
            }
            return subID;
        }
        return id;
    }

    private LinkedList<String[]> buildParams(String id, String itemType) throws UnsupportedEncodingException {
        LinkedList<String[]> params = new LinkedList<>();
        params.add(new String[]{"jcr:primaryType", encodeUrl("sling:OrderedFolder")});
        params.add(new String[]{getInstanceType() + "/jcr:primaryType", encodeUrl("sling:OrderedFolder")});
        params.add(new String[]{getInstanceType() + "/" + itemType + "/jcr:primaryType", encodeUrl("sling:OrderedFolder")});
        params.add(new String[]{getInstanceType() + "/" + itemType + "/" + encodeUrl(id) + "/jcr:primaryType", encodeUrl("nt:unstructured")});
        return params;
    }

	@Override
	public String saveData(String userDataID, String formName, String formData) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String saveData(String id, byte[] data) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String saveDataAsynchronusly(byte[] data, Map<String, Object> options) throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String saveAttachmentAsynchronously(byte[] attachmentBytes, Map<String, Object> options)
			throws FormsPortalException {
		// TODO Auto-generated method stub
		return null;
	}
}
