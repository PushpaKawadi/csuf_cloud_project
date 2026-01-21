package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;

@Component(service = { Servlet.class }, immediate = true, property = {
        "sling.servlet.paths=/bin/getTaskAttachmentFromProcessingInstance" })
@ServiceDescription("Get Task Attachment From Processing Instance Servlet")
public class GetTaskAttachmentFromProcessingInstanceServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;

    private final transient Logger log = LoggerFactory.getLogger(this.getClass());

    private static String RES_FILE_NAME = "download";

    @Reference
    private ProcessingInstanceConfigService processingInstanceConfigService;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws ServletException, IOException {
        try {
            log.info("entered Get Task Attachment From Processing Instance Servlet");

            String assetPath = request.getParameter("assetPath");
            log.info("Pushpa assetPath="+assetPath);
            assetPath = assetPath.trim().replaceAll("\\s", "%20");
            log.info("Pushpa assetPath1="+assetPath);

            if (StringUtils.isNotBlank(assetPath)) {
            	 log.info("Inside assetPath1="+assetPath);

                InputStream assetStream = getTaskAttachmentFromProcessingInstance(assetPath);
                log.info("Pushpa assetStream="+assetStream);

                if (assetStream != null) {
                	
                	 log.info("Pushpa inside assetStream");

                    String fileName = CSUFUtils.getFileNameFromCRXPath(assetPath);
                    log.info("Pushpa fileName="+fileName);
                    
                    String contentType = StringUtils.isNotBlank(request.getContentType())
                            ? request.getContentType()
                            : "application/octet-stream";
                    log.info("Pushpa contentType="+contentType);

                    response.setContentType(contentType);
                    response.setHeader("Content-Disposition",
                            "attachment; filename="
                                    .concat(StringUtils.isNotBlank(fileName) ? fileName : RES_FILE_NAME));

                   ServletOutputStream out = response.getOutputStream();                       
				   out.write(CSUFUtils.toByteArrayFromInputStream(assetStream));
				   log.info("Pushpa End ="+CSUFUtils.toByteArrayFromInputStream(assetStream));
                   out.flush();
                   out.close();
                    
                } else {
                    log.error("asset stream is empty");
                    response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                }
            } else {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                log.error("file could not be downloaded from processing instance");
                response.getWriter().write("Error");
            }
        } catch (Exception e) {
            log.error("Exception in servlet", e);
        }

        log.debug("exit Get Task Attachment From Processing Instance Servlet");
    }

    private InputStream getTaskAttachmentFromProcessingInstance(String url) throws IOException {
    	
    	 log.info("Inside getTaskAttachmentFromProcessingInstance");


        HttpGet get = null;

        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
        	
        	log.info("Inside getTaskAttachmentFromProcessingInstance Try");

            get = new HttpGet(processingInstanceConfigService.processingUrl().concat(url));
            
            log.info("Inside Try="+get);

            String auth = new StringBuffer(processingInstanceConfigService.userName())
                    .append(":")
                    .append(processingInstanceConfigService.userSecurity())
                    .toString();
            
            log.info("Inside auth="+auth);

            byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
            String authHeader = "Basic " + new String(encodedAuth, StandardCharsets.US_ASCII);
            get.setHeader("Authorization", authHeader);

            CloseableHttpResponse response = httpClient.execute(get);

            if (response != null && response.getStatusLine().getStatusCode() == 200) {
            	
            	log.info("Inside Resonse="+response);
            	 
                HttpEntity entity = response.getEntity();
                
                log.info("Inside entity="+entity);
                log.info("Content Length : {}", entity.getContentLength());
                log.debug("Content Length : {}", entity.getContentLength());
                return entity.getContent(); // stream consumed in servlet
            }

        } catch (IOException e) {
            log.error(Arrays.toString(e.getStackTrace()));
        } finally {
            if (get != null) {
                get.releaseConnection();
            }
        }
        return null;
    }
}
