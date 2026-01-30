package com.csuf.cloud.core.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.sql.Connection;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.LinkedHashMap;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.csuf.cloud.core.services.EmailService;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

//import jdk.internal.org.jline.utils.Log;

public class FilenetUtil {

	private static final Logger log = LoggerFactory.getLogger(FilenetUtil.class);
	@Reference
	private EmailService emailService;

	public String sendToFilenet(String responseJson, String filenetUrl, Connection conn, String FORM_NAME) {
		log.debug("Inside sendToFilenet Class");
		DatabaseUtils dbUtil = new DatabaseUtils();
		String resValue = null;
		String tableName = "AEM_AUDIT_TRACE";
		LinkedHashMap<String, Object> dataMap = null;
		URL url = null;
		try {
			String fURL = filenetUrl;
			url = new URL(fURL);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		HttpURLConnection con = null;
		try {
			con = (HttpURLConnection) url.openConnection();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		try {
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");

		} catch (ProtocolException e) {
			e.printStackTrace();
		}
		con.setDoOutput(true);

		try (OutputStream os = con.getOutputStream()) {
			os.write(responseJson.getBytes("utf-8"));
			os.close();
			int responseCode = con.getResponseCode();
			log.debug("POST Response Code to Filenet :: " + responseCode);
			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();

				log.debug("Response from Filenet=============" + response.toString());

				if (response.toString().contains("Failed")) {
					resValue = "Failed";
					dataMap = new LinkedHashMap<String, Object>();
					Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
					dataMap.put("EVENT_TYPE", "Filenet");
					dataMap.put("AUDIT_TIME", auditStTime);
					dataMap.put("FILENET_URL", filenetUrl);
					dataMap.put("DATA_PROCESSED", "0");
					dataMap.put("FILENET_JSON", responseJson);
					dataMap.put("FORM_NAME", FORM_NAME);
					dataMap.put("ERROR_DESC", response.toString());

					// Insert to DB
					// dbUtil.insertData(conn, dataMap, tableName);
					dbUtil.insertAutitTrace(conn, dataMap, tableName);
				}

			}
		} catch (IOException e1) {
			e1.printStackTrace();
			resValue = "Failed";
			dataMap = new LinkedHashMap<String, Object>();
			Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
			dataMap.put("EVENT_TYPE", "Filenet");
			dataMap.put("AUDIT_TIME", auditStTime);
			dataMap.put("FILENET_URL", filenetUrl);
			dataMap.put("DATA_PROCESSED", "0");
			dataMap.put("FILENET_JSON", responseJson);
			dataMap.put("FORM_NAME", FORM_NAME);
			dataMap.put("ERROR_DESC", Arrays.toString(e1.getStackTrace()));

			// Insert to DB
			// dbUtil.insertData(conn, dataMap, tableName);
			dbUtil.insertAutitTrace(conn, dataMap, tableName);
		} finally {
			con.disconnect();
		}
		return resValue;
	}

	public JsonObject getKeywords(String[] keyArray, String[] KeyValueArray) {
		JSONObject json3 = new JSONObject();
		for (int i = 0; i < keyArray.length; i++) {
			JSONArray jsonArrayVal = new JSONArray();
			jsonArrayVal.put(KeyValueArray[i]);
			try {
				json3.put(keyArray[i], jsonArrayVal);
			} catch (JSONException e) {
				e.printStackTrace();
			}
		}
		JsonParser jsonParser = new JsonParser();
		JsonObject gsonObject = (JsonObject) jsonParser.parse(json3.toString());
		return gsonObject;
	}

	public String filenetRetryEvent(String responseJson, String filenetUrl) {
		log.debug("Inside filenetRetryEvent Method");
		String resValue = "";
		URL url = null;
		try {
			String fURL = filenetUrl;
			url = new URL(fURL);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		HttpURLConnection con = null;
		try {
			con = (HttpURLConnection) url.openConnection();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		try {
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");

		} catch (ProtocolException e) {
			e.printStackTrace();
		}
		con.setDoOutput(true);

		try (OutputStream os = con.getOutputStream()) {
			os.write(responseJson.getBytes("utf-8"));
			os.close();
			int responseCode = con.getResponseCode();
			log.debug("POST Response Code to Filenet :: " + responseCode);
			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();
				log.debug("Response from Filenet=============" + response.toString());
				if (response.toString().contains("Failed")) {
					resValue = "Failed";
				} else {
					resValue = "Success";
				}
			}
		} catch (IOException e1) {
			e1.printStackTrace();
		} finally {
			con.disconnect();
		}
		return resValue;
	}

	public String sendToOnbase(String responseJson, String onbaseUrl, Connection conn, String FORM_NAME, String wID,
			String docHandler, String type, String cwid, String caseId, String firstName, String lastName) {
		log.debug("Inside sendToOnbase Class");
		DatabaseUtils dbUtil = new DatabaseUtils();
		String resValue = null;
		StringBuffer response = new StringBuffer();
		String tableName = "AEM_AUDIT_TRACE";
		LinkedHashMap<String, Object> dataMap = null;
		URL url = null;
		try {
			String oURL = onbaseUrl;
			url = new URL(oURL);
		} catch (MalformedURLException e) {
			e.printStackTrace();
			resValue = "Failed";
			dataMap = new LinkedHashMap<String, Object>();
			Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
			dataMap.put("EVENT_TYPE", "Onbase");
			dataMap.put("AUDIT_TIME", auditStTime);
			dataMap.put("FILENET_URL", onbaseUrl);
			dataMap.put("DATA_PROCESSED", "0");
			dataMap.put("FILENET_JSON", responseJson);
			dataMap.put("FORM_NAME", FORM_NAME);
			dataMap.put("ERROR_DESC", Arrays.toString(e.getStackTrace()));
			dbUtil.insertAutitTrace(conn, dataMap, tableName);
		}
		HttpURLConnection con = null;
		try {
			con = (HttpURLConnection) url.openConnection();
		} catch (IOException e1) {
			e1.printStackTrace();
			resValue = "Failed";
			dataMap = new LinkedHashMap<String, Object>();
			Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
			dataMap.put("EVENT_TYPE", "Onbase");
			dataMap.put("AUDIT_TIME", auditStTime);
			dataMap.put("FILENET_URL", onbaseUrl);
			dataMap.put("DATA_PROCESSED", "0");
			dataMap.put("FILENET_JSON", responseJson);
			dataMap.put("FORM_NAME", FORM_NAME);
			dataMap.put("ERROR_DESC", Arrays.toString(e1.getStackTrace()));
			dbUtil.insertAutitTrace(conn, dataMap, tableName);
		}
		try {
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");
		} catch (ProtocolException e) {
			e.printStackTrace();
			resValue = "Failed";
			dataMap = new LinkedHashMap<String, Object>();
			Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
			dataMap.put("EVENT_TYPE", "Onbase");
			dataMap.put("AUDIT_TIME", auditStTime);
			dataMap.put("FILENET_URL", onbaseUrl);
			dataMap.put("DATA_PROCESSED", "0");
			dataMap.put("FILENET_JSON", responseJson);
			dataMap.put("FORM_NAME", FORM_NAME);
			dataMap.put("ERROR_DESC", Arrays.toString(e.getStackTrace()));
			dbUtil.insertAutitTrace(conn, dataMap, tableName);
		}
		con.setDoOutput(true);
		try (OutputStream os = con.getOutputStream()) {
			os.write(responseJson.getBytes("utf-8"));
			os.close();
			int responseCode = con.getResponseCode();
			log.info("POST Response Code to Onbase :: " + responseCode);
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			log.info("Response from Onbase =============" + response.toString());
			/* Get DocHandler from the response */
			String responseToString = response.toString();
			int indexDocHandle = responseToString.indexOf("\"documentHandle\":") + "\"documentHandle\":".length();
			int indexCheckDocHandler = responseToString.indexOf(",", indexDocHandle);
			docHandler = responseToString.substring(indexDocHandle, indexCheckDocHandler);
			docHandler = docHandler.replaceAll("\"", "");
			log.debug("Response from Onbase to check DocumentHandle value =============" + docHandler);

			/* If Response contains isSuccess:false */
			int indexIsSuccess = responseToString.indexOf("\"isSuccess\":") + "\"isSuccess\":".length();
			int indexCheckFalse = responseToString.indexOf(",", indexIsSuccess);
			String isSuccessValue = responseToString.substring(indexIsSuccess, indexCheckFalse);
			log.debug("Response from Onbase to check isSuccess value =============" + isSuccessValue);
			if (responseCode == HttpURLConnection.HTTP_OK) {
				if (isSuccessValue.contains("false")) {
					resValue = "Failed";
					dataMap = new LinkedHashMap<String, Object>();
					Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
					dataMap.put("EVENT_TYPE", "Onbase");
					dataMap.put("AUDIT_TIME", auditStTime);
					dataMap.put("FILENET_URL", onbaseUrl);
					dataMap.put("DATA_PROCESSED", "0");
					dataMap.put("FILENET_JSON", responseJson);
					dataMap.put("FORM_NAME", FORM_NAME);
					dataMap.put("ERROR_DESC", response.toString());
					dbUtil.insertAutitTrace(conn, dataMap, tableName);
				} else {
					resValue = "Success";
					dbUtil.insertOnBaseData(conn, FORM_NAME, wID, docHandler, type, cwid, caseId, firstName, lastName);
				}
				log.info("Response from Onbase HTTP_OK =============" + response);
			} else {
				resValue = "Failed";
				dataMap = new LinkedHashMap<String, Object>();
				Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
				dataMap.put("EVENT_TYPE", "Onbase");
				dataMap.put("AUDIT_TIME", auditStTime);
				dataMap.put("FILENET_URL", onbaseUrl);
				dataMap.put("DATA_PROCESSED", "0");
				dataMap.put("FILENET_JSON", responseJson);
				dataMap.put("FORM_NAME", FORM_NAME);
				dataMap.put("ERROR_DESC", response.toString());
				dbUtil.insertAutitTrace(conn, dataMap, tableName);
			}
		} catch (IOException e1) {
			e1.printStackTrace();
			resValue = "Failed";
			dataMap = new LinkedHashMap<String, Object>();
			Timestamp auditStTime = new java.sql.Timestamp(System.currentTimeMillis());
			dataMap.put("EVENT_TYPE", "Onbase");
			dataMap.put("AUDIT_TIME", auditStTime);
			dataMap.put("FILENET_URL", onbaseUrl);
			dataMap.put("DATA_PROCESSED", "0");
			dataMap.put("FILENET_JSON", responseJson);
			dataMap.put("FORM_NAME", FORM_NAME);
			dataMap.put("ERROR_DESC", Arrays.toString(e1.getStackTrace()));
			dbUtil.insertAutitTrace(conn, dataMap, tableName);
		} finally {
			con.disconnect();
		}
		return resValue;
	}

}
