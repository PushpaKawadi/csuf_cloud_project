package com.csuf.cloud.core.services.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;


import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.servlets.DbTestServlet;
import com.day.commons.datasource.poolservice.DataSourcePool;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@Component(service = DatabaseQueryService.class, immediate = true)
public class DatabaseQueryService {
    private static final long serialVersionUID = 1L;

	private static final String DATASOURCE_NAME = "AEMDBDEV"; // Must match OSGi config
	private final static Logger logger = LoggerFactory.getLogger(DbTestServlet.class);

    @Reference
    private DataSourcePool dataSourcePool;

    /**
     * Runs a SELECT query example
     */
    public JsonArray runSelectExample() {
    	 JsonObject userInfo = new JsonObject();
         JsonArray jArray = new JsonArray();
        try {
        	
        Connection connection = getConnection();
        if(connection!=null) {
        	 logger.error("connection="+connection);
        }
            try (PreparedStatement statement = connection.prepareStatement(
                    "SELECT STUDENT_ID,LAST_NAME,FIRST_NAME FROM aem_course_withdrawal WHERE CASE_ID = '1077360'")) {


                logger.error(" statement=" + statement);

                try (ResultSet rs = statement.executeQuery()) {
                    while (rs.next()) {
                        int id = rs.getInt("STUDENT_ID");
                        String lname = rs.getString("LAST_NAME");
                        String fname = rs.getString("FIRST_NAME");

                        userInfo.addProperty("ID", id);
                        userInfo.addProperty("Fname", fname);
                        userInfo.addProperty("lname", lname);
                        jArray.add(userInfo);

                        //System.out.println("User ID: " + id + ", Name: " + name);
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
       return  jArray;
    }

   
   

    /**
     * Utility to get a connection from the pool
     */
    private Connection getConnection() throws SQLException {
        DataSource dataSource = null;
        Connection con = null;
		try {
			 logger.error("Pushpa connection=");
			dataSource = (DataSource) dataSourcePool.getDataSource(DATASOURCE_NAME);
			con = dataSource.getConnection();
			 logger.error("Pushpa dataSource="+con);
		} catch (Exception e) {
			logger.error(e.getMessage() + " Exception ");
		}
        return dataSource.getConnection();
    }
}
