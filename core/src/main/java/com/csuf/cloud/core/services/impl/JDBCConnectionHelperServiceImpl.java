package com.csuf.cloud.core.services.impl;

import com.csuf.cloud.core.service.JDBCConnectionHelperService;
import com.day.commons.datasource.poolservice.DataSourcePool;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Component(service = JDBCConnectionHelperService.class)
public class JDBCConnectionHelperServiceImpl implements JDBCConnectionHelperService {

    @Reference
    private DataSourcePool source;

    protected final Logger log = LoggerFactory.getLogger(this.getClass());

    public Connection getDBConn() {
        DataSource dataSource = null;
        Connection con = null;
        try {
            dataSource = (DataSource) source.getDataSource("AEMDBDEV");
            if(dataSource != null){
                con = dataSource.getConnection();
                return con;
            }
            return con;
        } catch (Exception e) {
            log.error(e.getMessage() + " Exception ");
        }
        return null;
    }
}
