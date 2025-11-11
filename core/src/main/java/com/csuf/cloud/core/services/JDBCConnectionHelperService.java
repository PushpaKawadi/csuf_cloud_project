package com.csuf.cloud.core.services;

import java.sql.Connection;

/**
 * @author 105876
 *
 */
public interface JDBCConnectionHelperService {
	Connection getFrmDBConnection();

	Connection getDocDBConnection();

	Connection getInboxDBConnection();
	
	Connection getDBConn(String datasourceName);
	
	Connection getEPBDVLConnection();
	
	Connection getFrmMgrCmsdwsrvDBConnection();
	
	Connection getAEMDBPrdConnection();
}
