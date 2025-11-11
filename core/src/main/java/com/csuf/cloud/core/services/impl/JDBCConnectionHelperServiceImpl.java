package com.csuf.cloud.core.services.impl;

import java.sql.Connection;
import java.util.Arrays;

import javax.sql.DataSource;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.commons.datasource.poolservice.DataSourcePool;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;

@Component(service = JDBCConnectionHelperService.class)
public class JDBCConnectionHelperServiceImpl implements JDBCConnectionHelperService {

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@Reference
	private DataSourcePool source;

	// Returns a connection using the configured DataSourcePool
	@Override
	public Connection getFrmDBConnection() {
		DataSource dataSource = null;
		Connection con = null;
		try {
			// Inject the DataSourcePool
			dataSource = (DataSource) source.getDataSource("frmmgrprod");
			if (null != dataSource) {
				con = dataSource.getConnection();
				return con;
			}
		} catch (Exception e) {
			log.error(e.getMessage() + " Exception ");
		}
		return null;
	}

	@Override
	public Connection getDocDBConnection() {
		DataSource dataSource = null;
		Connection con = null;
		try {
			// Inject the DataSourcePool
			dataSource = (DataSource) source.getDataSource("docmgrprod");
			con = dataSource.getConnection();
			return con;

		} catch (Exception e) {
			log.error(e.getMessage() + " Exception ");
		}
		return null;
	}

	@Override
	public Connection getInboxDBConnection() {

		DataSource dataSource = null;
		Connection con = null;
		try {
			dataSource = (DataSource) source.getDataSource("INBOX_DS");
			if (null != dataSource) {
				con = dataSource.getConnection();
				return con;
			}
		} catch (Exception e) {
			log.error("error in getInboxDBConnection method : {}", Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	public Connection getDBConn(String datasourceName) {
		DataSource dataSource = null;
		Connection con = null;
		try {
			dataSource = (DataSource) source.getDataSource(datasourceName);
			con = dataSource.getConnection();
			return con;

		} catch (Exception e) {
			log.error(e.getMessage() + " Exception ");
		}
		return null;
	}
	
	@Override
	public Connection getEPBDVLConnection() {

		DataSource dataSource = null;
		Connection con = null;
		try {
			dataSource = (DataSource) source.getDataSource("EPBDVL");
			if (null != dataSource) {
				con = dataSource.getConnection();
				return con;
			}
		} catch (Exception e) {
			log.error("error in getInboxDBConnection method : {}", Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	//
	public Connection getFrmMgrCmsdwsrvDBConnection() {
		DataSource dataSource = null;
		Connection con = null;
		try {
			// Inject the DataSourcePool
			dataSource = (DataSource) source.getDataSource("FRMMGR");
			if (null != dataSource) {
				con = dataSource.getConnection();
				return con;
			}
		} catch (Exception e) {
			log.error("error in getFrmMgrCmsdwsrvDBConnection method : {}", Arrays.toString(e.getStackTrace()));
		}
		return null;
	}
	
	@Override
	public Connection getAEMDBPrdConnection() {

		DataSource dataSource = null;
		Connection con = null;
		try {
			dataSource = (DataSource) source.getDataSource("aemdbprd");
			if (null != dataSource) {
				con = dataSource.getConnection();
				return con;
			}
		} catch (Exception e) {
			log.error("error in getAEMDBPrdConnection method : {}", Arrays.toString(e.getStackTrace()));
		}
		return null;
	}


}
