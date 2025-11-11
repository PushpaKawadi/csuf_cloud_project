package com.csuf.cloud.core.service;

import java.sql.Connection;

public interface JDBCConnectionHelperService {

    Connection getDBConn();
}
