package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Arrays;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.csuf.cloud.core.service.JDBCConnectionHelperService;

@Component(service = Servlet.class, property = {
        Constants.SERVICE_DESCRIPTION + "=Get CA County City List Servlet",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET,
        "sling.servlet.paths=" + "/bin/getCACountyCityList"
})
public class CACountyCityListServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;

    @Reference
    private JDBCConnectionHelperService jdbcConnectionService;

    /** Default log. */
    protected final Logger log = LoggerFactory.getLogger(this.getClass());

    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response)
            throws ServletException, IOException {
        log.debug("Entered CA County City List Servlet doGet method");

        ResourceResolver resolver = request.getResourceResolver();
        Session session = resolver.adaptTo(Session.class);
        Connection dbConn = null;
        JSONArray resultArray = null;

        try {
            // Get database connection
            dbConn = jdbcConnectionService.getDBConn();
            log.error("Database connection is null=="+dbConn);
            log.debug("Database connection is null=="+dbConn);

            if (dbConn != null) {
                try {
                    String sqlQuery = "SELECT * FROM AEM_CA_COUNTY_CITY_LIST";
                    String lookupFields = "*"; // Get all fields
                    resultArray = getDataFromDB(sqlQuery, lookupFields, dbConn);
                    log.debug("Retrieved {} records from AEM_CA_COUNTY_CITY_LIST", resultArray.length());
                } catch (Exception e) {
                    log.error("Data could not be retrieved from AEM_CA_COUNTY_CITY_LIST: {}", e.getMessage());
                }
            } else {
                log.error("Database connection is null");
            }

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(resultArray != null ? resultArray.toString() : "[]");
            log.debug("Exit with resultArray size: {}", resultArray != null ? resultArray.length() : 0);

        } catch (Exception e) {
            log.error("Error in CA County City List Servlet: {}", Arrays.toString(e.getStackTrace()));
        } finally {
            if (null != resolver && resolver.isLive()) {
                resolver.close();
            }
            if (session != null) {
                session.logout();
            }
            if (dbConn != null) {
                try {
                    dbConn.close();
                } catch (SQLException e) {
                    log.error("Error closing database connection: {}", Arrays.toString(e.getStackTrace()));
                }
            }
        }
        log.debug("Exit CA County City List Servlet doGet method");
    }

    public JSONArray getDataFromDB(String sqlQuery, String lookupFields, Connection oConnection)
            throws Exception {

        ResultSet oRresultSet = null;
        JSONObject detailsObj;
        JSONArray jArray = new JSONArray();
        //Statement oStatement = null;
        String[] fields = lookupFields.split(",");
        log.error("sql test={}" + sqlQuery);
        try (Statement oStatement = oConnection.createStatement();
             ResultSet oResultSet = oStatement.executeQuery(sqlQuery)) {

            while (oResultSet.next()) {
                detailsObj = new JSONObject();
                for (int i = 0; i < fields.length; i++) {
                    detailsObj.put(fields[i], oResultSet.getString(fields[i]));
                }
                jArray.put(detailsObj);
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("Database error: " + e.getMessage());
        }  catch (Exception e) {
            e.printStackTrace();
            System.err.println("Unexpected error: " + e.getMessage());
        }

        return jArray;
    }
}