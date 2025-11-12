package com.csuf.cloud.core.utils;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DatabaseUtils {

	private static final Logger logger = LoggerFactory.getLogger(DatabaseUtils.class);

	public void insertFormData(Connection conn, Map<String, Object> dataMap, String tableName, String formName) {
		PreparedStatement preparedStmt = null;
		logger.debug("Table Name = {}", tableName);
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
				StringBuilder sql = new StringBuilder("INSERT INTO  ").append(tableName).append(" (");
				StringBuilder placeholders = new StringBuilder();
				for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
					sql.append(iter.next());
					placeholders.append("?");
					if (iter.hasNext()) {
						sql.append(",");
						placeholders.append(",");
					}
				}
				sql.append(") VALUES (").append(placeholders).append(")");
				logger.info("SQL=" + sql.toString());

				preparedStmt = conn.prepareStatement(sql.toString());

				int i = 0;
				// logger.debug("Datamap values = {}", dataMap.values());

				for (Object value : dataMap.values()) {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else if (value instanceof Float) {
						preparedStmt.setFloat(++i, (Float) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				}

				try {
					logger.debug("Before DB Save = {}", tableName);
					preparedStmt.execute();
					conn.commit();
					logger.debug("After DB Save = {}", tableName);
				} catch (SQLException e1) {
					logger.error("SQLException = {}",
							e1.getMessage() + "Array -------" + Arrays.toString(e1.getStackTrace()));
					// e1.printStackTrace();
					String errMessage = e1.getMessage();
					String tableNameAudit = "AEM_AUDIT_TRACE";
					Map<String, Object> dataMapAuditTrail = new LinkedHashMap<>();
					Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
					dataMapAuditTrail.put("EVENT_TYPE", "Database");
					dataMapAuditTrail.put("AUDIT_TIME", auditStTime);
					dataMapAuditTrail.put("FILENET_URL", "");
					dataMapAuditTrail.put("DATA_PROCESSED", "0");
					dataMapAuditTrail.put("FILENET_JSON", "");
					dataMapAuditTrail.put("FORM_NAME", formName);
					dataMapAuditTrail.put("TABLE_NAME", tableName);
					dataMapAuditTrail.put("ERROR_DESC", errMessage);
					insertAutitTrace(conn, dataMapAuditTrail, tableNameAudit);
				}
			} catch (Exception e) {
				logger.error("Exception = {}", e.getMessage());
				logger.error(Arrays.toString(e.getStackTrace()));
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error("Exception = {}", e.getMessage());
					}
				}
			}
		} else {
			logger.error("Database Connection is null in DatabaseUtils insertFormData method");
		}
	}

	public int insertGCFormData(Connection conn, LinkedHashMap<String, Object> dataMap, int parentTable) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			}
			String tableName = "AEM_AR_GRADE_CHANGE_FORM";
			StringBuilder sql = new StringBuilder("INSERT INTO  ").append(tableName).append(" (");
			StringBuilder placeholders = new StringBuilder();
			for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
				sql.append(iter.next());
				placeholders.append("?");
				if (iter.hasNext()) {
					sql.append(",");
					placeholders.append(",");
				}
			}
			sql.append(") VALUES (").append(placeholders).append(")");
			logger.error("SQL=" + sql.toString());
			try {
				preparedStmt = conn.prepareStatement(sql.toString());
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			}
			int i = 0;
			logger.info("Datamap values=" + dataMap.values());
			for (Object value : dataMap.values()) {
				try {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				} catch (SQLException e) {
					logger.error("SQLException=" + e.getMessage());
					e.printStackTrace();
				}
			}
			try {
				logger.info("Before GC AEM_AR_GRADE_CHANGE_FORM");
				preparedStmt.execute();
				conn.commit();
				parentTable = 1;
				logger.info("parentTable=" + parentTable);
				logger.info("After GC AEM_AR_GRADE_CHANGE_FORM");
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();

				String errMessage = e1.getMessage();
				String tableNameAudit = "AEM_AUDIT_TRACE";
				LinkedHashMap<String, Object> dataMapAuditTrail = new LinkedHashMap<String, Object>();
				Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
				dataMapAuditTrail.put("EVENT_TYPE", "Database");
				dataMapAuditTrail.put("AUDIT_TIME", auditStTime);
				dataMapAuditTrail.put("FILENET_URL", "");
				dataMapAuditTrail.put("DATA_PROCESSED", "0");
				dataMapAuditTrail.put("FILENET_JSON", "");
				dataMapAuditTrail.put("FORM_NAME", "Grade Change");
				dataMapAuditTrail.put("TABLE_NAME", tableName);
				dataMapAuditTrail.put("ERROR_DESC", errMessage);
				insertAutitTrace(conn, dataMapAuditTrail, tableNameAudit);

			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
						logger.info("preparedstmt closed");
						// conn.close();
					} catch (SQLException e) {
						logger.error("SQLException=" + e.getMessage());
						e.printStackTrace();
					}
				}
			}
		}
		return parentTable;
	}

	public void insertAutitTrace(Connection conn, Map<String, Object> dataMap, String tableName) {
		PreparedStatement preparedStmt = null;
		logger.error("conn=" + conn);
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			} catch (Exception e) {
				logger.error("Exception=" + e.getMessage());
				e.printStackTrace();
			}
			// String tableName = tableName;
			StringBuilder sql = new StringBuilder("INSERT INTO  ").append(tableName).append(" (");
			StringBuilder placeholders = new StringBuilder();
			for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
				sql.append(iter.next());
				placeholders.append("?");
				if (iter.hasNext()) {
					sql.append(",");
					placeholders.append(",");
				}
			}
			sql.append(") VALUES (").append(placeholders).append(")");
			logger.error("SQL=" + sql.toString());
			try {
				preparedStmt = conn.prepareStatement(sql.toString());
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			} catch (Exception e) {
				logger.error("Exception=" + e.getMessage());
				e.printStackTrace();
			}
			int i = 0;
			// logger.info("Datamap values=" + dataMap.values());

			try {
				for (Object value : dataMap.values()) {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else if (value instanceof Float) {
						preparedStmt.setFloat(++i, (Float) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				}
			} catch (SQLException e) {
				logger.error("SQLException=" + e.getMessage());
				e.printStackTrace();
			} catch (Exception e) {
				logger.error("Exception=" + e.getMessage());
				e.printStackTrace();
			}

			try {
				logger.info("Before Audit Trace");
				preparedStmt.execute();
				conn.commit();
				logger.info("After Audit Trace");
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			} catch (Exception e) {
				logger.error("Exception=" + e.getMessage());
				e.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
						// conn.close();
					} catch (SQLException e) {
						logger.error("SQLException=" + e.getMessage());
						e.printStackTrace();
					} catch (Exception e) {
						logger.error(Arrays.toString(e.getStackTrace()));
					}
				}
			}
		}
	}

	public void updateAuditTable(Connection conn, String aID) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			String filenetUpdateSql = CSUFConstantsUtils.filenetUpdate;
			filenetUpdateSql = filenetUpdateSql.replaceAll("<<audit_id>>", aID);
			logger.info("filenetUpdateSql=" + filenetUpdateSql);
			try {
				preparedStmt = conn.prepareStatement(filenetUpdateSql);
				preparedStmt.execute();
				conn.commit();
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error(Arrays.toString(e.getStackTrace()));
					}
				}
			}
		}
	}

	public static String getEmailAddressOfEmployee(Connection oConnection, String cwid) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		String empEmail = "";
		try {

			String getEmailSql = CSUFConstantsUtils.getEmailAddressFromEmpID;
			getEmailSql = getEmailSql.replaceAll("<<Emp_ID>>", cwid);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				empEmail = oRresultSet.getString("EMAILID");
			}
			logger.info("Get Email Function=" + empEmail);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            oStatement.close();
        }
		return empEmail;
	}

	public static JSONObject getDetailsOfEmployee(Connection oConnection, String cwid) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		JSONObject userArray = new JSONObject();
		try {

			String getEmailSql = CSUFConstantsUtils.getDetailsFromEmpID;
			getEmailSql = getEmailSql.replaceAll("<<Emp_ID>>", cwid);
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				userArray.put("EMAILID", oRresultSet.getString("EMAILID"));
				userArray.put("USERID", oRresultSet.getString("USERID"));
			}
			logger.info("getDetailsOfEmployee Function=" + oRresultSet);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            oStatement.close();
        }
		return userArray;
	}

	public static JSONObject getEmployeeAgency(Connection oConnection, String userId) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		JSONObject userArray = new JSONObject();
		try {

			String getEmailSql = CSUFConstantsUtils.getEmpAgency;
			getEmailSql = getEmailSql.replaceAll("<<getUser_ID>>", userId);
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				userArray.put("CSU_SCO_AGENCY", oRresultSet.getString("CSU_SCO_AGENCY"));
				userArray.put("FUL_DIVISION", oRresultSet.getString("FUL_DIVISION"));
			}
			logger.info("getEmployeeAgency Function=" + oRresultSet);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            oStatement.close();
        }
		return userArray;
	}

	public static JSONArray getDetailsFromLastNameForSearchFunctionality(Connection oConnection, String lName)
			throws Exception {
		ResultSet oResultSet = null;
		JSONObject getDetailsForSearchFunctionalityObject = null;
		JSONArray getDetailsForSearchFunctionalityArray = new JSONArray();
		Statement oStatement = null;
		String getDetailsForSearchFunctionalitySQL = "";

		try {

			getDetailsForSearchFunctionalitySQL = CSUFConstantsUtils.userDetailsForSearchFunctionality;

			getDetailsForSearchFunctionalitySQL = getDetailsForSearchFunctionalitySQL.replaceAll("<<LASTNAME>>", lName);

			oStatement = oConnection.createStatement();
			oResultSet = oStatement.executeQuery(getDetailsForSearchFunctionalitySQL);

			while (oResultSet.next()) {
				getDetailsForSearchFunctionalityObject = new JSONObject();

				getDetailsForSearchFunctionalityObject.put("FIRST_NAME", oResultSet.getString("FIRSTNAME"));
				getDetailsForSearchFunctionalityObject.put("LAST_NAME", oResultSet.getString("LASTNAME"));
				getDetailsForSearchFunctionalityObject.put("CWID", oResultSet.getString("EMPLOYEEID"));
				getDetailsForSearchFunctionalityObject.put("USER_ID", oResultSet.getString("USERID"));
				getDetailsForSearchFunctionalityObject.put("EMAIL_ID", oResultSet.getString("EMAILID"));

				getDetailsForSearchFunctionalityArray.put(getDetailsForSearchFunctionalityObject);
			}

		} catch (Exception exp) {
			logger.error("Error in getDetailsForSearchFunctionality Method - After Finally Block = " + exp.getMessage()
					+ " --- Stack Track Array= " + Arrays.toString(exp.getStackTrace()));
		} finally {
            oStatement.close();
        }
		return getDetailsForSearchFunctionalityArray;
	}

	public static JSONArray getDetailsFromNameForSearchFunctionality(Connection oConnection, String lName, String fName)
			throws Exception {
		ResultSet oResultSet = null;
		JSONObject getDetailsFromNameForSearchFunctionalityObject = null;
		JSONArray getDetailsFromNameForSearchFunctionalityArray = new JSONArray();
		Statement oStatement = null;
		String getDetailsFromNameForSearchFunctionalitySQL = "";

		JSONArray jsArray = null;

		try {

			getDetailsFromNameForSearchFunctionalitySQL = CSUFConstantsUtils.detailsForSearchFunctionality;

			getDetailsFromNameForSearchFunctionalitySQL = getDetailsFromNameForSearchFunctionalitySQL
					.replaceAll("<<LASTNAME>>", lName);
			getDetailsFromNameForSearchFunctionalitySQL = getDetailsFromNameForSearchFunctionalitySQL
					.replaceAll("<<FIRSTNAME>>", fName);

			oStatement = oConnection.createStatement();
			oResultSet = oStatement.executeQuery(getDetailsFromNameForSearchFunctionalitySQL);

			while (oResultSet.next()) {
				getDetailsFromNameForSearchFunctionalityObject = new JSONObject();

				String userId = oResultSet.getString("USERID");

				if (StringUtils.isNotBlank(userId)) {
					jsArray = getTitleForSearchFunctionality(oConnection, userId);
				}

				getDetailsFromNameForSearchFunctionalityObject.put("FIRST_NAME", oResultSet.getString("FIRSTNAME"));
				getDetailsFromNameForSearchFunctionalityObject.put("LAST_NAME", oResultSet.getString("LASTNAME"));
				getDetailsFromNameForSearchFunctionalityObject.put("CWID", oResultSet.getString("EMPLOYEEID"));
				getDetailsFromNameForSearchFunctionalityObject.put("USER_ID", oResultSet.getString("USERID"));
				getDetailsFromNameForSearchFunctionalityObject.put("EMAIL_ID", oResultSet.getString("EMAILID"));

				if (jsArray.length() != 0) {
					getDetailsFromNameForSearchFunctionalityObject.put("SUPERVISORTITLE",
							jsArray.getJSONObject(0).getString("SUPERVISORTITLE"));

					getDetailsFromNameForSearchFunctionalityObject.put("SUPERVISORNAME",
							jsArray.getJSONObject(0).getString("SUPERVISORNAME"));
				}

				getDetailsFromNameForSearchFunctionalityArray.put(getDetailsFromNameForSearchFunctionalityObject);
			}

		} catch (Exception exp) {
			logger.error("Error in getDetailsFromNameForSearchFunctionality Method - After Finally Block = "
					+ exp.getMessage() + " --- Stack Track Array= " + Arrays.toString(exp.getStackTrace()));

		} finally {
            oStatement.close();
        }
		return getDetailsFromNameForSearchFunctionalityArray;
	}

	public static JSONArray getTitleForSearchFunctionality(Connection oConnection, String userId) throws Exception {
		ResultSet oResultSet = null;
		JSONObject getDetailsFromNameForSearchFunctionalityObject = null;
		JSONArray getDetailsFromNameForSearchFunctionalityArray = new JSONArray();
		Statement oStatement = null;
		String getDetailsFromNameForSearchFunctionalitySQL = "";

		try {

			getDetailsFromNameForSearchFunctionalitySQL = CSUFConstantsUtils.getUserTitileForSearchFunctionality;

			getDetailsFromNameForSearchFunctionalitySQL = getDetailsFromNameForSearchFunctionalitySQL
					.replaceAll("<<userID>>", userId);

			oStatement = oConnection.createStatement();
			oResultSet = oStatement.executeQuery(getDetailsFromNameForSearchFunctionalitySQL);

			while (oResultSet.next()) {
				getDetailsFromNameForSearchFunctionalityObject = new JSONObject();

				getDetailsFromNameForSearchFunctionalityObject.put("SUPERVISORTITLE",
						oResultSet.getString("SUPERVISORTITLE"));
				getDetailsFromNameForSearchFunctionalityObject.put("SUPERVISORNAME",
						oResultSet.getString("SUPERVISORNAME"));

				getDetailsFromNameForSearchFunctionalityArray.put(getDetailsFromNameForSearchFunctionalityObject);
			}

		} catch (Exception exp) {
			logger.error("Error in getDetailsFromNameForSearchFunctionality Method - After Finally Block = "
					+ exp.getMessage() + " --- Stack Track Array= " + Arrays.toString(exp.getStackTrace()));

		} finally {
            oStatement.close();
        }
		return getDetailsFromNameForSearchFunctionalityArray;
	}

	public static JSONArray getDeptCoordinatorForVP(Connection oConnection, String userId, String deptId)
			throws Exception {
		ResultSet oResultSet = null;
		JSONObject deptCoordinatorForVPObject = null;
		JSONArray deptCoordinatorForVPArray = new JSONArray();
		Statement oStatement = null;
		String deptCoordinatorForVPSQL = "";

		try {
			if ((StringUtils.isNotEmpty(userId))) {
				deptCoordinatorForVPSQL = CSUFConstantsUtils.vpToDepartmentCoordinatorDelegatee;
				deptCoordinatorForVPSQL = deptCoordinatorForVPSQL.replace("<<userID>>", userId);

			} else if ((StringUtils.isNotEmpty(deptId))) {
				deptCoordinatorForVPSQL = CSUFConstantsUtils.vpDelegateeWithDivisionCode;
				deptCoordinatorForVPSQL = deptCoordinatorForVPSQL.replace("<<deptID>>", deptId);

			}

			oStatement = oConnection.createStatement();
			oResultSet = oStatement.executeQuery(deptCoordinatorForVPSQL);

			while (oResultSet.next()) {
				deptCoordinatorForVPObject = new JSONObject();

				deptCoordinatorForVPObject.put("HR_COO_EMPLID", oResultSet.getString("HR_COO_EMPLID"));
				deptCoordinatorForVPObject.put("HR_COO_USERID", oResultSet.getString("HR_COO_USERID"));
				deptCoordinatorForVPObject.put("HR_COO_FNAME", oResultSet.getString("HR_COO_FNAME"));
				deptCoordinatorForVPObject.put("HR_COO_LNAME", oResultSet.getString("HR_COO_LNAME"));
				deptCoordinatorForVPObject.put("HR_COO_EMAIL", oResultSet.getString("HR_COO_EMAIL"));
				deptCoordinatorForVPObject.put("HR_COO_DIVISION", oResultSet.getString("HR_COO_DIVISION"));
				deptCoordinatorForVPObject.put("HR_COO_DIVISIONNAME", oResultSet.getString("HR_COO_DIVISIONNAME"));
				deptCoordinatorForVPObject.put("VP_EMPLID", oResultSet.getString("VP_EMPLID"));
				deptCoordinatorForVPObject.put("VP_USERID", oResultSet.getString("VP_USERID"));
				deptCoordinatorForVPObject.put("VP_FNAME", oResultSet.getString("VP_FNAME"));
				deptCoordinatorForVPObject.put("VP_LNAME", oResultSet.getString("VP_LNAME"));
				deptCoordinatorForVPObject.put("VP_EMAIL", oResultSet.getString("VP_EMAIL"));
				deptCoordinatorForVPObject.put("VP_DEPTID", oResultSet.getString("VP_DEPTID"));
				deptCoordinatorForVPObject.put("VP_DEPTNAME", oResultSet.getString("VP_DEPTNAME"));

				deptCoordinatorForVPArray.put(deptCoordinatorForVPObject);
			}

		} catch (Exception exp) {
			logger.error("Error in getDeptCoordinatorForVP Method" + exp.getMessage() + " --- Stack Track Array= "
					+ Arrays.toString(exp.getStackTrace()));

		} finally {
			if (oStatement != null) {
				oStatement.close();
			}
		}
		return deptCoordinatorForVPArray;
	}

	public void insertWFInstanceHistory(Connection conn, LinkedHashMap<String, Object> dataMap) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			}
			String tableName = "AEM_WORKFLOW_INSTANCE_HISTORY";
			StringBuilder sql = new StringBuilder("INSERT INTO  ").append(tableName).append(" (");
			StringBuilder placeholders = new StringBuilder();
			for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
				sql.append(iter.next());
				placeholders.append("?");
				if (iter.hasNext()) {
					sql.append(",");
					placeholders.append(",");
				}
			}
			sql.append(") VALUES (").append(placeholders).append(")");
			logger.info("SQL=" + sql.toString());
			try {
				preparedStmt = conn.prepareStatement(sql.toString());
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			}
			int i = 0;
			logger.info("Datamap values=" + dataMap.values());
			for (Object value : dataMap.values()) {
				try {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else if (value instanceof Float) {
						preparedStmt.setFloat(++i, (Float) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				} catch (SQLException e) {
					logger.error("SQLException=" + e.getMessage());
					e.printStackTrace();
				} catch (Exception ex1) {
					logger.error("Exception=" + ex1.getMessage());
					ex1.printStackTrace();
				}
			}
			try {

				preparedStmt.execute();
				conn.commit();
				logger.info("After insert instance history");
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
						conn.close();
					} catch (SQLException e) {
						logger.error("SQLException=" + e.getMessage());
						e.printStackTrace();
					}
				}
			}
		}
	}

	public void updateWFInstanceHistory(Connection conn, String instanceId, Timestamp completedDate, String status) {
		// String methodName = "updateEvent";
		PreparedStatement preparedStmt = null;

		if (conn != null) {
			String updateEventQuery = "UPDATE AEM_WORKFLOW_INSTANCE_HISTORY SET WORKFLOW_COMPLETE_TIME=? , WORKFLOW_STATUS=?  where WORKFLOW_INSTANCE_ID = '"
					+ instanceId + "'";
			logger.info("SQL=" + updateEventQuery);
			try {

				preparedStmt = conn.prepareStatement(updateEventQuery);

				preparedStmt.setTimestamp(1, completedDate);

				preparedStmt.setString(2, status);

				preparedStmt.execute();

				conn.commit();

			} catch (SQLException e) {

				e.printStackTrace();

			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
						conn.close();
					} catch (SQLException e) {

						e.printStackTrace();
					}
				}

			}
		}
	}

	public static void insertWFHistory(Connection conn, LinkedHashMap<String, Object> dataMap) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			}
			String tableName = "AEM_WORKFLOW_HISTORY";
			StringBuilder sql = new StringBuilder("INSERT INTO  ").append(tableName).append(" (");
			StringBuilder placeholders = new StringBuilder();
			for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
				sql.append(iter.next());
				placeholders.append("?");
				if (iter.hasNext()) {
					sql.append(",");
					placeholders.append(",");
				}
			}
			sql.append(") VALUES (").append(placeholders).append(")");
			logger.debug("SQL=" + sql.toString());
			try {
				preparedStmt = conn.prepareStatement(sql.toString());
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			}
			int i = 0;
			logger.debug("Datamap values=" + dataMap.values());
			for (Object value : dataMap.values()) {
				try {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else {
						if (value != null && value != "") {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				} catch (SQLException e) {
					logger.error("SQLException=" + e.getMessage());
					e.printStackTrace();
				}
			}
			try {
				logger.debug("SQL statement=" + preparedStmt);
				logger.debug("Before insert workflow history");
				preparedStmt.execute();
				conn.commit();
				logger.debug("End insert workflow history");
			} catch (SQLException e1) {
				logger.error("SQLException=" + e1.getMessage());
				e1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
						conn.close();
					} catch (SQLException e) {
						logger.error("SQLException=" + e.getMessage());
						e.printStackTrace();
					}
				}
			}
		} else {
			logger.error("SQL Connection error in insertWFHistory method");
		}
	}

	public static JSONObject getEmployeeDetails(Connection oConnection, String cwid) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		JSONObject empUserArray = new JSONObject();
		try {

			String getEmpDetailsSql = CSUFConstantsUtils.getEmployeeDetails;
			getEmpDetailsSql = getEmpDetailsSql.replaceAll("<<EMP_ID>>", cwid);
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(getEmpDetailsSql);
			if (oRresultSet.next()) {
				empUserArray.put("EMP_USERID", oRresultSet.getString("EMP_USERID"));
				empUserArray.put("EMP_NAME", oRresultSet.getString("EMP_NAME"));
			}
			logger.info("Get Employee Details Function=" + empUserArray);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return empUserArray;
	}

	public static String getEmailID(Connection oConnection, String cwid) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		String empEmail = "";
		try {

			String getEmailSql = CSUFConstantsUtils.getEmailAddressCwidLookup;
			getEmailSql = getEmailSql.replaceAll("<<Emp_ID>>", cwid);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				empEmail = oRresultSet.getString("EMAILID");
			}
			logger.info("Get getEmailID Function=" + empEmail);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return empEmail;
	}

	public static String getEmailIDBasedOnUserID(Connection oConnection, String userId) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		String empEmail = "";
		try {

			String getEmailSql = CSUFConstantsUtils.getEmailAddressUserIdLookup;
			getEmailSql = getEmailSql.replaceAll("<<UID>>", userId);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				empEmail = oRresultSet.getString("EMAILID");
			}
			logger.info("Get getEmailIDBasedOnUserID Function=" + empEmail);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return empEmail;
	}

	public static String getEmployeeCSUUnit(Connection oConnection, String dept) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		String unit = "";
		try {

			String getEmailSql = CSUFConstantsUtils.getCSUUnit;
			getEmailSql = getEmailSql.replaceAll("<<deptId>>", dept);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				unit = oRresultSet.getString("CSU_UNIT");
			}
			logger.info("Get getEmployeeCSUUnit Function=" + unit);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return unit;
	}

	public static JSONObject getManagerDetails(Connection oConnection, String empID, String union_cd, String deptId)
			throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		JSONObject managerUserArray = new JSONObject();
		try {

			String getManagerDetailsSql = CSUFConstantsUtils.getManagerDetails;
			getManagerDetailsSql = getManagerDetailsSql.replaceAll("<<EMP_ID>>", empID);
			getManagerDetailsSql = getManagerDetailsSql.replaceAll("<<DEPT_ID>>", deptId);
			getManagerDetailsSql = getManagerDetailsSql.replaceAll("<<UNION_CD>>", union_cd);
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(getManagerDetailsSql);
			if (oRresultSet.next()) {
				managerUserArray.put("MANAGER_EMP_USERID", oRresultSet.getString("MANAGER_EMP_USERID"));
				managerUserArray.put("MANAGER_NAME", oRresultSet.getString("SUPERVISORNAME"));
			}
			logger.info("Get Email Function=" + managerUserArray);
		} catch (Exception e) {
			logger.error("Error in method getManagerDetails - Finally Block = " + e.getMessage()
					+ " --- Stack Track Array= " + Arrays.toString(e.getStackTrace()));
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return managerUserArray;
	}

	public static JSONObject getName(Connection oConnection, String userId) throws Exception {
		ResultSet oRresultSet = null;
		JSONObject loggedinUserNameDetails;
		JSONObject loggedinUserDetails;
		loggedinUserDetails = new JSONObject();
		String loggedInUserSQL = CSUFConstantsUtils.getLoggedInUserDetailsFromDB;
		String lookupFields = CSUFConstantsUtils.loggedInUserDetailsLookupFields;
		String[] fields = lookupFields.split(",");
		loggedInUserSQL = loggedInUserSQL.replaceAll("<<get_user_id>>", userId);
		Statement oStatement = null;
		try {
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(loggedInUserSQL);
			while (oRresultSet.next()) {
				loggedinUserNameDetails = new JSONObject();
				for (int i = 0; i < fields.length; i++) {
					loggedinUserNameDetails.put(fields[i], oRresultSet.getString(fields[i]));
				}
				if (!loggedinUserNameDetails.isNull("FNAME") && !loggedinUserNameDetails.isNull("LNAME")) {
					String fullName = loggedinUserNameDetails.getString("FNAME")
							.concat(" ".concat(loggedinUserNameDetails.getString("LNAME")));
					loggedinUserDetails.put("FULL_NAME", fullName);
				}
			}
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return loggedinUserDetails;
	}

	public static JSONArray getDataFromDB(String sqlQuery, String lookupFields, Connection oConnection)
			throws Exception {

		ResultSet oRresultSet = null;
		JSONObject detailsObj;
		JSONArray jArray = new JSONArray();
		Statement oStatement = null;
		String[] fields = lookupFields.split(",");
		logger.error("sql={}" + sqlQuery);
		try {
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(sqlQuery);
			while (oRresultSet.next()) {
				detailsObj = new JSONObject();
				for (int i = 0; i < fields.length; i++) {
					detailsObj.put(fields[i], oRresultSet.getString(fields[i]));
				}
				jArray.put(detailsObj);
			}

		} catch (Exception oEx) {
			logger.info("Exception=" + oEx);
			oEx.printStackTrace();

		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }

		return jArray;
	}

	public static JSONArray getDataFromDB(String sqlQuery, Connection conn) throws Exception {

		ResultSet oRresultSet = null;
		JSONObject detailsObj = null;
		JSONArray jArray = new JSONArray();
		Statement oStatement = null;

		try {
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(sqlQuery);
			ResultSetMetaData rsMetaData = oRresultSet.getMetaData();

			int columnsCount = rsMetaData.getColumnCount();
			int checkBox = 0;

			while (oRresultSet.next()) {
				detailsObj = new JSONObject();
				checkBox++;

				for (int i = 1; i <= columnsCount; i++) {
					detailsObj.put("checkBox", checkBox);
					detailsObj.put(rsMetaData.getColumnName(i), oRresultSet.getString(rsMetaData.getColumnName(i)));
				}
				jArray.put(detailsObj);
			}

		} catch (Exception oEx) {
			logger.error(Arrays.toString(oEx.getStackTrace()) + ", Exception Message= " + oEx.getMessage());
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return jArray;
	}

	public static JSONArray getPositionNumberReportsTo(String sqlQuery, Connection conn) throws Exception {

		ResultSet oRresultSet = null;
		JSONObject detailsObj = null;
		JSONArray jArray = new JSONArray();
		Statement oStatement = null;

		try {
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(sqlQuery);
			ResultSetMetaData rsMetaData = oRresultSet.getMetaData();

			int columnsCount = rsMetaData.getColumnCount();

			while (oRresultSet.next()) {
				detailsObj = new JSONObject();

				for (int i = 1; i <= columnsCount; i++) {
					detailsObj.put(rsMetaData.getColumnName(i), oRresultSet.getString(rsMetaData.getColumnName(i)));
				}
				jArray.put(detailsObj);
			}

		} catch (Exception oEx) {
			logger.error(Arrays.toString(oEx.getStackTrace()) + ", Exception Message= " + oEx.getMessage());
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return jArray;
	}

	public void deleteEvalData(Connection conn, String empId, String workflowInstance, String tableName) throws SQLException {
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			speSqlQuery = "delete from ".concat(tableName)
					.concat(" where EMPID = ('<<EMPID>>') and WORKFLOW_INSTANCE_ID= ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<EMPID>>", empId);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
	}

	public String getEvalData(Connection conn, String empId, String workflowInstance, String tableName) throws SQLException {
		String resData = "";
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			// filenetRetrySql = CSUFConstantsUtils.filenetRetry;
			speSqlQuery = "Select * from ".concat(tableName)
					.concat(" where EMPID = ('<<EMPID>>') and WORKFLOW_INSTANCE_ID = ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<EMPID>>", empId);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				resData = oRresultSet.getString("EMPID");
			}

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return resData;
	}

	public String getSPEEvalData(Connection conn, String empId, String colName, String workflowInstance,
			String tableName) throws SQLException {
		String resData = "";
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			// filenetRetrySql = CSUFConstantsUtils.filenetRetry;
			speSqlQuery = "Select * from ".concat(tableName)
					.concat(" where EMPLID = ('<<EMPID>>') and WORKFLOW_INSTANCE_ID = ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<EMPID>>", empId);
			speSqlQuery = speSqlQuery.replaceAll("EMPLID", colName);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL1: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				resData = oRresultSet.getString(colName);
			}

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return resData;
	}

	public void deleteSPEEvalData(Connection conn, String empId, String colName, String workflowInstance,
			String tableName) throws SQLException {
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			speSqlQuery = "delete from ".concat(tableName)
					.concat(" where EMPLID = ('<<EMPID>>') and WORKFLOW_INSTANCE_ID= ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<EMPID>>", empId);
			speSqlQuery = speSqlQuery.replaceAll("EMPLID", colName);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL2: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
	}

	// Method to Soft Delete the TimeKeeper Data
	public void updateTimekeeperData(String fieldValue, String departmentId, String collegeID, String divisionID,
			String unitVal, String deleteFlag, Connection conn) {
		// String methodName = "updateEvent";
		PreparedStatement preparedStmtForTimekeeperData = null;

		if (conn != null) {
			String updateEventQueryForTimekeeperData = "UPDATE DOA_TIMEKEEPER_DATA SET DELETE_FLG='" + deleteFlag
					+ "' WHERE FIELD_VALUE ='" + fieldValue + "'" + " AND DEPTID=" + departmentId + " AND COLLEGE="
					+ collegeID + " AND DIVISON=" + divisionID + " AND CSU_UNIT=" + unitVal;
			logger.info("Update TimeKeeper SQL=" + updateEventQueryForTimekeeperData);
			try {

				preparedStmtForTimekeeperData = conn.prepareStatement(updateEventQueryForTimekeeperData);
				preparedStmtForTimekeeperData.execute();
				logger.info("Update TimeKeeper SQL EXECUTED=");
				conn.commit();

			} catch (SQLException e) {

				e.printStackTrace();

			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmtForTimekeeperData != null) {
					try {
						preparedStmtForTimekeeperData.close();
						// conn.close();
					} catch (SQLException e) {

						e.printStackTrace();
					}
				}

			}
		}
	}

	public String getFormData(Connection conn, String empId, String colName, String workflowInstance,
			String tableName) throws SQLException {
		String resData = "";
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			// filenetRetrySql = CSUFConstantsUtils.filenetRetry;
			speSqlQuery = "Select * from ".concat(tableName)
					.concat(" where EMPLID = ('<<EMPID>>') and WORKFLOW_INSTANCE_ID = ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<EMPID>>", empId);
			speSqlQuery = speSqlQuery.replaceAll("EMPLID", colName);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL1: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				resData = oRresultSet.getString(colName);
			}

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return resData;
	}

	public String getUniversityKeyData(Connection conn, String caseid, String room, String colName1, String colName2,
			String workflowInstance, String tableName) throws SQLException {
		String resData = "";
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
// filenetRetrySql = CSUFConstantsUtils.filenetRetry;
			speSqlQuery = "Select * from ".concat(tableName).concat(
					" where CASE_ID = ('<<CASE_ID>>') and ROOM = ('<<ROOM>>') and WORKFLOW_INSTANCE_ID = ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<CASE_ID>>", caseid);
			speSqlQuery = speSqlQuery.replaceAll("<<ROOM>>", room);
			speSqlQuery = speSqlQuery.replaceAll("CASE_ID", colName1);
			speSqlQuery = speSqlQuery.replaceAll("ROOM", colName2);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL1: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				resData = oRresultSet.getString(colName1);
			}

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return resData;
	}

	public void deleteKeyData(Connection conn, String caseid, String room, String colName1, String colName2,
			String workflowInstance, String tableName) throws SQLException {
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			speSqlQuery = "delete from ".concat(tableName).concat(
					" where CASE_ID = ('<<CASE_ID>>') and ROOM = ('<<ROOM>>') and WORKFLOW_INSTANCE_ID= ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<CASE_ID>>", caseid);
			speSqlQuery = speSqlQuery.replaceAll("CASE_ID", colName1);
			speSqlQuery = speSqlQuery.replaceAll("<<ROOM>>", room);
			speSqlQuery = speSqlQuery.replaceAll("ROOM", colName2);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL2: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				String resData = oRresultSet.getString(colName1);
			}
		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
	}

	public String getPETData(Connection conn, String hrDeptID, String colName1, String workflowInstance,
			String tableName) throws SQLException {
		String resData = "";
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
// filenetRetrySql = CSUFConstantsUtils.filenetRetry;
			speSqlQuery = "Select * from ".concat(tableName).concat(
					" where HR_DEPT_ID = ('<<HR_DEPT_ID>>') and WORKFLOW_INSTANCE_ID = ('<<WORKFLOW_INSTANCE_ID>>')");

			speSqlQuery = speSqlQuery.replaceAll("<<HR_DEPT_ID>>", hrDeptID);
			speSqlQuery = speSqlQuery.replaceAll("HR_DEPT_ID", colName1);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL1: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				resData = oRresultSet.getString(colName1);
			}

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return resData;
	}

	public void deletePETData(Connection conn, String hrDeptID, String colName1, String workflowInstance,
			String tableName) throws SQLException {
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			speSqlQuery = "delete from ".concat(tableName)
					.concat(" where HR_DEPT_ID = ('<<HR_DEPT_ID>>') and WORKFLOW_INSTANCE_ID = ('<<HR_DEPT_ID>>')");

			speSqlQuery = speSqlQuery.replaceAll("<<HR_DEPT_ID>>", hrDeptID);
			speSqlQuery = speSqlQuery.replaceAll("HR_DEPT_ID", colName1);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", workflowInstance);
			logger.debug("Final SQL1: {}", speSqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);
			while (oRresultSet.next()) {
				String resData = oRresultSet.getString(colName1);
			}

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
	}

	public void deleteSDVData(Connection conn, String cwid, String colName, String wfInstanceID, String tableName) throws SQLException {
		ResultSet oRresultSet = null;
		String speSqlQuery = "";
		Statement oStatement = null;
		try {
			speSqlQuery = "delete from ".concat(tableName)
					.concat(" where CWID = ('<<CWID>>') and WORKFLOW_INSTANCE_ID= ('<<WORKFLOW_INSTANCE_ID>>')");
			speSqlQuery = speSqlQuery.replaceAll("<<CWID>>", cwid);
			speSqlQuery = speSqlQuery.replaceAll("<<WORKFLOW_INSTANCE_ID>>", wfInstanceID);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(speSqlQuery);

		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
	}

	public static JSONObject getFulCollege(Connection oConnection, String cwid, String dept) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		JSONObject userArray = new JSONObject();
		try {

			String getEmailSql = CSUFConstantsUtils.getFulCollege;
			getEmailSql = getEmailSql.replaceAll("<<empid>>", cwid);
			getEmailSql = getEmailSql.replaceAll("<<dept>>", dept);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				userArray.put("FUL_COLLEGE", oRresultSet.getString("FUL_COLLEGE"));
				userArray.put("FUL_COLLEGE_NAME", oRresultSet.getString("FUL_COLLEGE_NAME"));
				userArray.put("JOB_CODE", oRresultSet.getString("JOBCODE"));
			}
			logger.info("Get Email Function=" + userArray);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return userArray;
	}

	public static String getDOBOfStudentByCwid(Connection oConnection, String cwid) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		String studentDob = "";
		try {

			String getDOBSql = CSUFConstantsUtils.getStudentDOB;
			getDOBSql = getDOBSql.replaceAll("<<CWID>>", cwid);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getDOBSql);
			if (oRresultSet.next()) {
				studentDob = oRresultSet.getString("DOB");
			}
			logger.debug("Get DOB Function=" + studentDob);
		} catch (Exception oEx) {
			logger.error("Error in method getDOBOfStudentByCwid - Finally Block = " + oEx.getMessage()
					+ " -- Stack Track Array= " + Arrays.toString(oEx.getStackTrace()));
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return studentDob;
	}

	public static Object convertToDate(String value) {
		Object dateObj = "";
		try {
			if (value != null && !StringUtils.isBlank(value)) {
				Date dateValue = Date.valueOf(value);
				dateObj = dateValue;
				return dateObj;
			}
		} catch (Exception oEx) {
			throw oEx;
		}
		return dateObj;
	}

	public static JSONArray getFinancialAidSubmissionData(Connection oConnection, String getFDDetailsSql,
			String financialAidDescision) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		JSONArray financialAidDataArray = new JSONArray();
		JSONObject financialAidDataObj;
		try {
			oStatement = oConnection.createStatement();
			oRresultSet = oStatement.executeQuery(getFDDetailsSql);
			logger.info("Result Set Length " + oRresultSet.toString());
			while (oRresultSet.next()) {
				financialAidDataObj = new JSONObject();
				financialAidDataObj.put("FINANCIAL_AID_DECISION", oRresultSet.getString(financialAidDescision));
				financialAidDataArray.put(financialAidDataObj);
			}
			logger.info("Get Fianacial Aid Submission Function=" + financialAidDataArray);
		} catch (Exception e) {
			logger.error("Error in method getFinancialAidSubmissionData - Finally Block = " + e.getMessage()
					+ " --- Stack Track Array= " + Arrays.toString(e.getStackTrace()));
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return financialAidDataArray;
	}

	public static String updateAtGuidlinesDataTable(Connection conn, String cwid, String deptId,
			String briefAssignment) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			String atGuidlinesUpdateSql = CSUFConstantsUtils.updateFacultyTimeAgreementLaunchStatus;
			atGuidlinesUpdateSql = atGuidlinesUpdateSql.replaceAll("<<CWID>>", cwid);
			atGuidlinesUpdateSql = atGuidlinesUpdateSql.replaceAll("<<DEPT_ID>>", deptId);
			atGuidlinesUpdateSql = atGuidlinesUpdateSql.replaceAll("<<BRIEF_ASSIGNMENT>>", briefAssignment);
			logger.info("atGuidlinesUpdateSql=" + atGuidlinesUpdateSql);
			try {
				preparedStmt = conn.prepareStatement(atGuidlinesUpdateSql);
				preparedStmt.execute();
				conn.commit();
				return "Updated in Table";
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error(Arrays.toString(e.getStackTrace()));
					}
				}
			}
		}
		return "Not Updated in Table";
	}

	public static String updateEvalDataTable(Connection conn, String data, String evalType, String submissionId) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			String evalDataUpdateSql = CSUFConstantsUtils.setEvalData;
			evalDataUpdateSql = evalDataUpdateSql.replaceAll("<<DATA>>", data);
			evalDataUpdateSql = evalDataUpdateSql.replaceAll("<<EVAL_TYPE>>", evalType);
			evalDataUpdateSql = evalDataUpdateSql.replaceAll("<<SUBMISSION_ID>>", submissionId);
			logger.info("evalDataUpdateSql=" + evalDataUpdateSql);
			try {
				preparedStmt = conn.prepareStatement(evalDataUpdateSql);
				preparedStmt.executeUpdate();
				conn.commit();
				return "Updated in Table";
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				logger.error(ex1.toString());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error(Arrays.toString(e.getStackTrace()));
					}
				}
			}
		}
		return "Not Updated in Table";
	}

	public static String updateAtGuidlinesAfterTheFactDataTable(Connection conn, String cwid, String deptId,
			String briefAssignment) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			String atGuidlinesUpdateSql = CSUFConstantsUtils.updateAfterTheFactTableLaunchStatus;
			atGuidlinesUpdateSql = atGuidlinesUpdateSql.replaceAll("<<CWID>>", cwid);
			atGuidlinesUpdateSql = atGuidlinesUpdateSql.replaceAll("<<DEPT_ID>>", deptId);
			atGuidlinesUpdateSql = atGuidlinesUpdateSql.replaceAll("<<BRIEF_ASSIGNMENT>>", briefAssignment);
			logger.info("atGuidlinesUpdateSql=" + atGuidlinesUpdateSql);
			try {
				preparedStmt = conn.prepareStatement(atGuidlinesUpdateSql);
				preparedStmt.execute();
				conn.commit();
				return "Updated in Table";
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error(Arrays.toString(e.getStackTrace()));
					}
				}
			}
		}
		return "Not Updated in Table";
	}

	public static String getEmailIDCHRSID(Connection oConnection, String chrsId) throws Exception {
		ResultSet oRresultSet = null;
		Statement oStatement = null;
		String empEmail = "";
		try {

			String getEmailSql = CSUFConstantsUtils.getEmailAddressChrsIdLookup;
			getEmailSql = getEmailSql.replaceAll("<<CSU_CHRS_ID>>", chrsId);
			oStatement = oConnection.createStatement();

			oRresultSet = oStatement.executeQuery(getEmailSql);
			if (oRresultSet.next()) {
				empEmail = oRresultSet.getString("EMAILID");
			}
			logger.info("Get getEmailID Function=" + empEmail);
		} catch (Exception oEx) {
			throw oEx;
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return empEmail;
	}

	public void insertOnBaseData(Connection conn, String workflowName, String wID, String docHandler, String type,
			String cwid, String caseId, String firstName, String lastName) {
		PreparedStatement preparedStmt = null;
		logger.debug("Table Name = AEM_ONBASE");
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
				StringBuilder sql = new StringBuilder("INSERT INTO AEM_ONBASE ").append(" (");
				StringBuilder placeholders = new StringBuilder();
				LinkedHashMap<String, Object> dataMap = new LinkedHashMap<String, Object>();
				dataMap.put("WORKFLOW_NAME", workflowName);
				dataMap.put("WORKFLOW_INSTANCE_ID", wID);
				dataMap.put("DOC_HANDLER", docHandler);
				dataMap.put("DOC_TYPE", type);
				if (cwid != "" && !cwid.isBlank()) {
					dataMap.put("CWID", cwid);
				}
				if (caseId != "" && !caseId.isBlank()) {
					dataMap.put("CASEID", caseId);
				}
				if (firstName != "" && !firstName.isBlank()) {
					dataMap.put("FIRST_NAME", firstName);
				}
				if (lastName != "" && !lastName.isBlank()) {
					dataMap.put("LAST_NAME", lastName);
				}
				for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
					sql.append(iter.next());
					placeholders.append("?");
					if (iter.hasNext()) {
						sql.append(",");
						placeholders.append(",");
					}
				}
				sql.append(") VALUES (").append(placeholders).append(")");
				logger.info("SQL=" + sql.toString());

				preparedStmt = conn.prepareStatement(sql.toString());

				int i = 0;
				// logger.debug("Datamap values = {}", dataMap.values());

				for (Object value : dataMap.values()) {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else if (value instanceof Float) {
						preparedStmt.setFloat(++i, (Float) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				}

				try {
					logger.debug("Before DB Save = AEM_ONBASE");
					preparedStmt.execute();
					conn.commit();
					logger.debug("After DB Save = AEM_ONBASE");
				} catch (SQLException e1) {
					logger.error("SQLException = {}",
							e1.getMessage() + "Array -------" + Arrays.toString(e1.getStackTrace()));
					// e1.printStackTrace();
					String errMessage = e1.getMessage();
					String tableNameAudit = "AEM_AUDIT_TRACE";
					Map<String, Object> dataMapAuditTrail = new LinkedHashMap<>();
					Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
					dataMapAuditTrail.put("EVENT_TYPE", "Database");
					dataMapAuditTrail.put("AUDIT_TIME", auditStTime);
					dataMapAuditTrail.put("FILENET_URL", "");
					dataMapAuditTrail.put("DATA_PROCESSED", "0");
					dataMapAuditTrail.put("FILENET_JSON", "");
					dataMapAuditTrail.put("FORM_NAME", workflowName);
					dataMapAuditTrail.put("TABLE_NAME", "AEM_ONBASE");
					dataMapAuditTrail.put("ERROR_DESC", errMessage);
					insertAutitTrace(conn, dataMapAuditTrail, tableNameAudit);
				}
			} catch (Exception e) {
				logger.error("Exception = {}", e.getMessage());
				logger.error(Arrays.toString(e.getStackTrace()));
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error("Exception = {}", e.getMessage());
					}
				}
			}
		} else {
			logger.error("Database Connection is null in DatabaseUtils insertOnBaseData method");
		}
	}
	
	public static void updateWFInstanceHistoryStatus(Connection conn, String instanceId, Timestamp completedDate, String status) {
		// String methodName = "updateEvent";
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			String updateEventQuery = "UPDATE AEM_WORKFLOW_INSTANCE_HISTORY SET WORKFLOW_COMPLETE_TIME=? , WORKFLOW_STATUS=?  where WORKFLOW_INSTANCE_ID = '"
					+ instanceId + "'";
			logger.info("SQL=" + updateEventQuery);
			try {
				preparedStmt = conn.prepareStatement(updateEventQuery);
				preparedStmt.setTimestamp(1, completedDate);
				preparedStmt.setString(2, status);
				preparedStmt.execute();
				conn.commit();
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
						conn.close();
					} catch (SQLException e) {

						e.printStackTrace();
					}
				}
			}
		}
	}
	
	public void deleteSFTPCredentialsdata(Connection conn) throws SQLException {
		ResultSet oRresultSet = null;
		String sqlQuery = "";
		Statement oStatement = null;
		try {
			sqlQuery = "DELETE FROM AEM_NACHA_SFTP";
			logger.debug("deleteSFTPCredentialsdata SQL: {}", sqlQuery);
			oStatement = conn.createStatement();
			oRresultSet = oStatement.executeQuery(sqlQuery);
		} catch (Exception oEx) {
			oEx.getMessage();
		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
	}
	
	public String insertSFTPCredentials(Connection conn, Map<String, Object> dataMap) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			try {
				conn.setAutoCommit(false);
				StringBuilder sql = new StringBuilder("INSERT INTO  ").append("AEM_NACHA_SFTP").append(" (");
				StringBuilder placeholders = new StringBuilder();
				for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
					sql.append(iter.next());
					placeholders.append("?");
					if (iter.hasNext()) {
						sql.append(",");
						placeholders.append(",");
					}
				}
				sql.append(") VALUES (").append(placeholders).append(")");
				preparedStmt = conn.prepareStatement(sql.toString());

				int i = 0;
				// logger.debug("Datamap values = {}", dataMap.values());

				for (Object value : dataMap.values()) {
					if (value instanceof Date) {
						preparedStmt.setDate(++i, (Date) value);
					} else if (value instanceof Timestamp) {
						preparedStmt.setTimestamp(++i, (Timestamp) value);
					} else if (value instanceof Integer) {
						preparedStmt.setInt(++i, (Integer) value);
					} else if (value instanceof Float) {
						preparedStmt.setFloat(++i, (Float) value);
					} else {
						if (value != "" && value != null) {
							preparedStmt.setString(++i, value.toString());
						} else {
							preparedStmt.setString(++i, null);
						}
					}
				}

				try {
					preparedStmt.execute();
					conn.commit();
						return "success";
				} catch (SQLException e1) {
					logger.error("SQLException = {}",
							e1.getMessage() + "Array -------" + Arrays.toString(e1.getStackTrace()));
					// e1.printStackTrace();
					String errMessage = e1.getMessage();
					String tableNameAudit = "AEM_AUDIT_TRACE";
					Map<String, Object> dataMapAuditTrail = new LinkedHashMap<>();
					Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
					dataMapAuditTrail.put("EVENT_TYPE", "Database");
					dataMapAuditTrail.put("AUDIT_TIME", auditStTime);
					dataMapAuditTrail.put("FILENET_URL", "");
					dataMapAuditTrail.put("DATA_PROCESSED", "0");
					dataMapAuditTrail.put("FILENET_JSON", "");
					dataMapAuditTrail.put("FORM_NAME", "NACHA Credentials Form");
					dataMapAuditTrail.put("TABLE_NAME", "AEM_NACHA_SFTP");
					dataMapAuditTrail.put("ERROR_DESC", errMessage);
					insertAutitTrace(conn, dataMapAuditTrail, tableNameAudit);
					return "failure";
				}
			} catch (Exception e) {
				logger.error("Exception = {}", e.getMessage());
				logger.error(Arrays.toString(e.getStackTrace()));
				return "failure";
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error("Exception = {}", e.getMessage());
					}
				}
			}
		} else {
			logger.error("Database Connection is null in DatabaseUtils insertFormData method");
			return "failure";
		}
	}
	
	public static JSONArray getLastNameForSearchFunctionality(Connection oConnection, String lName)
			throws Exception {
		ResultSet oResultSet = null;
		JSONObject getDetailsForSearchFunctionalityObject = null;
		JSONArray getDetailsForSearchFunctionalityArray = new JSONArray();
		Statement oStatement = null;
		String getDetailsForSearchFunctionalitySQL = "";
		try {
			getDetailsForSearchFunctionalitySQL = CSUFConstantsUtils.getEMPNamefromDir;
			getDetailsForSearchFunctionalitySQL = getDetailsForSearchFunctionalitySQL.replaceAll("<<LASTNAME>>", lName);
			oStatement = oConnection.createStatement();
			oResultSet = oStatement.executeQuery(getDetailsForSearchFunctionalitySQL);
			while (oResultSet.next()) {
				getDetailsForSearchFunctionalityObject = new JSONObject();
				getDetailsForSearchFunctionalityObject.put("FIRST_NAME", oResultSet.getString("FIRSTNAME"));
				getDetailsForSearchFunctionalityObject.put("LAST_NAME", oResultSet.getString("LASTNAME"));
				getDetailsForSearchFunctionalityObject.put("CWID", oResultSet.getString("EMPLOYEEID"));
				getDetailsForSearchFunctionalityObject.put("USER_ID", oResultSet.getString("USERID"));
				getDetailsForSearchFunctionalityObject.put("EMAIL_ID", oResultSet.getString("EMAILID"));
				getDetailsForSearchFunctionalityObject.put("DEP_Title", oResultSet.getString("DEPTTITLE"));
				getDetailsForSearchFunctionalityObject.put("CSU_CHRS_ID", oResultSet.getString("CSU_CHRS_ID"));
				getDetailsForSearchFunctionalityArray.put(getDetailsForSearchFunctionalityObject);
			}

		} catch (Exception exp) {
			logger.error("Error in getDetailsForSearchFunctionality Method - After Finally Block = " + exp.getMessage()
					+ " --- Stack Track Array= " + Arrays.toString(exp.getStackTrace()));

		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return getDetailsForSearchFunctionalityArray;
	}
	
	public static String updateAuthorizationPrivatelyOwnedVehiclesDataTable(Connection conn, String wfInstanceid) {
		PreparedStatement preparedStmt = null;
		if (conn != null) {
			String authorizationVehicleUpdateSql = "UPDATE AEM_AUTHOR_PRI_VEHICLE_FORM SET LAUNCH_STATUS = 'Y' WHERE WORKFLOW_INSTANCE_ID='<<WID>>'";
			authorizationVehicleUpdateSql = authorizationVehicleUpdateSql.replaceAll("<<WID>>", wfInstanceid);
			logger.info("atGuidlinesUpdateSql=" + authorizationVehicleUpdateSql);
			try {
				preparedStmt = conn.prepareStatement(authorizationVehicleUpdateSql);
				preparedStmt.execute();
				conn.commit();
				return "Updated in Table";
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception ex1) {
				logger.error("Exception=" + ex1.getMessage());
				ex1.printStackTrace();
			} finally {
				if (preparedStmt != null) {
					try {
						preparedStmt.close();
					} catch (SQLException e) {
						logger.error(Arrays.toString(e.getStackTrace()));
					}
				}
			}
		}
		return "Not Updated in Table";
	}

	public static JSONArray getCWIDFromNameForSearchFunctionality(Connection oConnection, String lName, String fName)
			throws Exception {
		ResultSet oResultSet = null;
		JSONObject getDetailsFromNameForSearchFunctionalityObject = null;
		JSONArray getDetailsFromNameForSearchFunctionalityArray = new JSONArray();
		Statement oStatement = null;
		String getDetailsFromNameForSearchFunctionalitySQL = "";
		JSONArray jsArray = null;

		try {

			getDetailsFromNameForSearchFunctionalitySQL = CSUFConstantsUtils.getCWIDNamefromDir;

			getDetailsFromNameForSearchFunctionalitySQL = getDetailsFromNameForSearchFunctionalitySQL
					.replaceAll("<<LASTNAME>>", lName);
			getDetailsFromNameForSearchFunctionalitySQL = getDetailsFromNameForSearchFunctionalitySQL
					.replaceAll("<<FIRSTNAME>>", fName);

			oStatement = oConnection.createStatement();
			oResultSet = oStatement.executeQuery(getDetailsFromNameForSearchFunctionalitySQL);

			while (oResultSet.next()) {
				getDetailsFromNameForSearchFunctionalityObject = new JSONObject();

				String userId = oResultSet.getString("USERID");

				if (StringUtils.isNotBlank(userId)) {
					jsArray = getTitleForSearchFunctionality(oConnection, userId);
				}

				getDetailsFromNameForSearchFunctionalityObject.put("FIRST_NAME", oResultSet.getString("FIRSTNAME"));
				getDetailsFromNameForSearchFunctionalityObject.put("LAST_NAME", oResultSet.getString("LASTNAME"));
				getDetailsFromNameForSearchFunctionalityObject.put("CWID", oResultSet.getString("EMPLOYEEID"));
				getDetailsFromNameForSearchFunctionalityObject.put("USER_ID", oResultSet.getString("USERID"));
				getDetailsFromNameForSearchFunctionalityObject.put("EMAIL_ID", oResultSet.getString("EMAILID"));

				

				getDetailsFromNameForSearchFunctionalityArray.put(getDetailsFromNameForSearchFunctionalityObject);
			}

		} catch (Exception exp) {
			logger.error("Error in getDetailsFromNameForSearchFunctionality Method - After Finally Block = "
					+ exp.getMessage() + " --- Stack Track Array= " + Arrays.toString(exp.getStackTrace()));

		} finally {
            if (oStatement != null) {
                oStatement.close();
            }
        }
		return getDetailsFromNameForSearchFunctionalityArray;
	}
	
	
}
