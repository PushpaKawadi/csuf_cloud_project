package com.csuf.cloud.core.services.impl;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import javax.jcr.Node;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.ValueFormatException;

import org.apache.commons.io.IOUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aemds.guide.addon.dor.DoRGenerationException;
import com.adobe.aemds.guide.addon.dor.DoROptions;
import com.adobe.aemds.guide.addon.dor.DoRResult;
import com.adobe.aemds.guide.addon.dor.DoRService;
import com.adobe.aemfd.docmanager.Document;
import com.csuf.cloud.core.services.FormService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * @author 105876
 *
 */
@Component(service = FormService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=CSUF Form Service" })

public class FormServiceImpl implements FormService {

	@Reference
	private GlobalConfigService globalConfig;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUFService;

	@Reference
	private DoRService dorService;

	@Reference
	private JDBCConnectionHelperService jdbcService;

	private static final Logger log = LoggerFactory.getLogger(FormServiceImpl.class);

	private static final String DATE_PATTERN = "yyyy-MM-dd";
	private static LocalDate FALL_SESSION_START_DATE = null;
	private static LocalDate FALL_SESSION_END_DATE = null;
	private static LocalDate SPRING_SESSION_START_DATE = null;
	private static LocalDate SPRING_SESSION_END_DATE = null;
	private static final int DEFAULT_WEEKLY_HOURS_LIMIT = 20;
	private static int FALL_SESSION_WEEKLY_HOURS_LIMIT = DEFAULT_WEEKLY_HOURS_LIMIT;
	private static int SPRING_SESSION_WEEKLY_HOURS_LIMIT = DEFAULT_WEEKLY_HOURS_LIMIT;

	public enum DateType {
		INCLUDEDDAY, PUBLICHOLIDAY, BREAKDAY, FALLSESSIONSTARTDAY, FALLSESSIONENDDAY, SPRINGSESSIONSTARTDAY,
		SPRINGSESSIONENDDAY;

		private DateType() {
		}
	}

	@Override
	public Document getDoR(String dataXml, String formPath, String fileName) throws IOException {
		log.info("Anagha Inside getDoR method");

		Resource resource;
		Document dorDocument = null;

		try (ResourceResolver resourceResolver = globalConfig.getResourceResolver()) {
			log.info("Anagha getDor="+resourceResolver);
			resource = resourceResolver.getResource(formPath);
			log.info("Anagha resource="+resource);

			DoROptions dorOptions = new DoROptions();
			dorOptions.setData(dataXml);
			dorOptions.setFormResource(resource);
			java.util.Locale locale = new java.util.Locale("en");
			dorOptions.setLocale(locale);
			
			log.info("Anagha dorOptions="+dorOptions);

			
			DoRResult dorResult = dorService.render(dorOptions);
			
			log.info("Anagha dorResult="+dorResult);
			byte[] fileBytes = dorResult.getContent();
			dorDocument = new Document(fileBytes);
		} catch (LoginException | DoRGenerationException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return dorDocument;
	}
	

	public Document getDoROnBase(String dataXml, String formPath, String fileName,ResourceResolver resolver) throws IOException {
		log.info("Bengaluru Inside getDoR method");

		Resource resource;
		Document dorDocument = null;

		try (ResourceResolver resourceResolver = resolver) {
			log.info("Bengaluru getDor="+resourceResolver);
			resource = resourceResolver.getResource(formPath);
			log.info("Bengaluru resource="+resource);

			DoROptions dorOptions = new DoROptions();
			dorOptions.setData(dataXml);
			dorOptions.setFormResource(resource);
			java.util.Locale locale = new java.util.Locale("en");
			dorOptions.setLocale(locale);
			
			log.info("Bengaluru dorOptions="+dorOptions);

			
			DoRResult dorResult = dorService.render(dorOptions);
			
			log.info("Bengaluru dorResult="+dorResult);
			byte[] fileBytes = dorResult.getContent();
			dorDocument = new Document(fileBytes);
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return dorDocument;
	}


	@Override
	public Document getDoRFromPayloadPath(String payloadPath, String fileName) throws IOException {
		Document dorDocument = null;
		InputStream inputStream = null;
		try (ResourceResolver resourceResolver = globalConfig.getResourceResolver()) {
			Resource xmlNode = resourceResolver.getResource(payloadPath);
			Iterator<Resource> xmlFiles = xmlNode.listChildren();
			while (xmlFiles.hasNext()) {
				Resource attachmentXml = xmlFiles.next();
				String filePath = attachmentXml.getPath();
				if (filePath.contains(fileName)) {
					filePath = attachmentXml.getPath().concat("/jcr:content");
					Node subNode = resourceResolver.getResource(filePath).adaptTo(Node.class);
					try {
						inputStream = subNode.getProperty("jcr:data").getBinary().getStream();
						byte[] bytes;
						try {
							bytes = IOUtils.toByteArray(inputStream);
							dorDocument = new Document(bytes);
						} catch (IOException e) {
							log.error("IOException in getDoRFromPayloadPath=" + Arrays.toString(e.getStackTrace()));
						}

					} catch (ValueFormatException e) {
						log.error(
								"ValueFormatException in getDoRFromPayloadPath=" + Arrays.toString(e.getStackTrace()));

					} catch (PathNotFoundException e) {
						log.error(
								"PathNotFoundException in getDoRFromPayloadPath=" + Arrays.toString(e.getStackTrace()));

					} catch (RepositoryException e) {
						log.error("RepositoryException in getDoRFromPayloadPath=" + Arrays.toString(e.getStackTrace()));

					} finally {
						try {
							if (inputStream != null) {
								inputStream.close();
							}
						} catch (IOException e) {
							log.error("IOException in getDoRFromPayloadPath in finally block="
									+ Arrays.toString(e.getStackTrace()));
						}

					}
				}
			}
		} catch (LoginException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return dorDocument;
	}

	/**
	 * @month takes 1 based index for month, for e.g. 5 for May
	 * @year takes four digit year format, for e.g. 2020
	 * @inputFiscalYear takes fiscal year format, for e.g. 2020-2021
	 * @fiscalYearStartMonth takes 1 based index for month, for e.g. 7 for July
	 * @fiscalYearEndMonth takes 1 based index for month, for e.g. 6 for June
	 */
	@Override
	public JsonArray getPayrollCalendar(int month, int year, String inputFiscalYear, int fiscalYearStartMonth,
			int fiscalYearEndMonth) {
		JsonArray payrollCalendarArray = new JsonArray();
		int totalCount = 0;
		String[] fiscalYearValues = inputFiscalYear.split("-");
		int fiscalStartYear = Integer.parseInt(fiscalYearValues[0]);
		int fiscalEndYear = Integer.parseInt(fiscalYearValues[1]);
		if (year == fiscalStartYear || year == fiscalEndYear) {
			if ((year == fiscalStartYear && month >= fiscalYearStartMonth)
					|| (year == fiscalEndYear && month <= fiscalYearEndMonth)) {
				DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_PATTERN);
				Set<LocalDate> includedDates = new HashSet<>();
				Set<LocalDate> publicHolidays = new HashSet<>();

				LocalDate fiscalStartDate = LocalDate.of(fiscalStartYear, fiscalYearStartMonth, 1);
				LocalDate fiscalEndDate = LocalDate.of(fiscalEndYear, fiscalYearEndMonth,
						YearMonth.of(fiscalEndYear, fiscalYearEndMonth).lengthOfMonth());

				String getPayrollCalStmt = "select date_value, date_type, max_hours_weekly_limit from aem_payroll_calendar where fiscal_year = ?";
				try (Connection connection = jdbcService.getDBConn(globalConfigCSUFService.getAEMFormsDatabaseSource());
						PreparedStatement prStmt = connection.prepareStatement(getPayrollCalStmt);) {
					prStmt.setString(1, inputFiscalYear);
					try (ResultSet resultSet = prStmt.executeQuery();) {
						while (resultSet.next()) {
							String dateValue = resultSet.getString("date_value");
							/*
							 * JsonObject jsonObj = new JsonObject(); jsonObj.addProperty("dateValue",
							 * dateValue); jsonObj.addProperty("dateType", dateType);
							 * jsonObj.addProperty("fiscalYear", inputFiscalYear);
							 * payrollCalendarArray.add(jsonObj);F
							 */
							LocalDate dbDate = LocalDate.parse(dateValue, formatter);
							log.debug("dbDate : {}", dbDate);
							if (dbDate.isEqual(fiscalStartDate) || dbDate.isEqual(fiscalEndDate)
									|| (dbDate.isAfter(fiscalStartDate) && dbDate.isBefore(fiscalEndDate))) {
								String dateType = resultSet.getString("date_type");
								log.debug("date_value : {}, date_type : {}", dateValue, dateType);
								if (dateType.equalsIgnoreCase(DateType.INCLUDEDDAY.name())) {
									includedDates.add(dbDate);
								} else if (dateType.equalsIgnoreCase(DateType.PUBLICHOLIDAY.name())) {
									publicHolidays.add(dbDate);
								}
							}
						}
					}
				} catch (Exception e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
				LocalDate currentDate = LocalDate.now();
				int daysInMonth = YearMonth.of(year, month).lengthOfMonth();
				for (int i = 1; i <= daysInMonth; i++) {
					LocalDate parsedDate = LocalDate.of(year, month, i);
					// String formattedDate = date.format(formatter);
					// LocalDate parsedDate = LocalDate.parse(formattedDate, formatter);
					if (currentDate.isEqual(parsedDate) || currentDate.isAfter(parsedDate)) {
						log.debug("Date : " + parsedDate + " and Day : " + parsedDate.getDayOfWeek());
						JsonObject jsonObj = new JsonObject();
						jsonObj.addProperty("date", parsedDate.format(formatter));
						jsonObj.addProperty("dayOfWeek", parsedDate.getDayOfWeek().name());
						jsonObj.addProperty("isIncludedDay", includedDates.contains(parsedDate));
						jsonObj.addProperty("isPublicHoliday", publicHolidays.contains(parsedDate));
						totalCount += 1;
						payrollCalendarArray.add(jsonObj);
					}
				}
			} else {
				JsonObject errorJson = new JsonObject();
				errorJson.addProperty("errorCode", "PAY-CAL-ERR-1");
				errorJson.addProperty("errorMessage", "selected month is invalid");
				payrollCalendarArray.add(errorJson);
			}
		} else {
			JsonObject errorJson = new JsonObject();
			errorJson.addProperty("errorCode", "PAY-CAL-ERR-2");
			errorJson.addProperty("errorMessage", "selected year is outside fiscal year period");
			payrollCalendarArray.add(errorJson);
		}
		return payrollCalendarArray;
	}

	/**
	 * @month takes 1 based index for month, for e.g. 5 for May
	 * @year takes four digit year format, for e.g. 2020
	 * @inputFiscalYear takes fiscal year format, for e.g. 2020-2021
	 * @fiscalYearStartMonth takes 1 based index for month, for e.g. 7 for July
	 * @fiscalYearEndMonth takes 1 based index for month, for e.g. 6 for June
	 */
	@Override
	public JsonArray getWeekwiseMonthlyPayrollCalendar(int month, int year, String inputFiscalYear,
			int fiscalYearStartMonth, int fiscalYearEndMonth) {
		JsonArray payrollCalendarArray = new JsonArray();
		String[] fiscalYearValues = inputFiscalYear.split("-");
		int fiscalStartYear = Integer.parseInt(fiscalYearValues[0]);
		int fiscalEndYear = Integer.parseInt(fiscalYearValues[1]);
		if (year == fiscalStartYear || year == fiscalEndYear) {
			if ((year == fiscalStartYear && month >= fiscalYearStartMonth)
					|| (year == fiscalEndYear && month <= fiscalYearEndMonth)) {
				DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_PATTERN);
				Set<LocalDate> includedDates = new HashSet<>();
				Set<LocalDate> publicHolidays = new HashSet<>();
				Set<LocalDate> breakDays = new HashSet<>();

				LocalDate fiscalStartDate = LocalDate.of(fiscalStartYear, fiscalYearStartMonth, 1);
				LocalDate fiscalEndDate = LocalDate.of(fiscalEndYear, fiscalYearEndMonth,
						YearMonth.of(fiscalEndYear, fiscalYearEndMonth).lengthOfMonth());

				String getPayrollCalStmt = "select date_value, date_type, max_hours_weekly_limit from aem_payroll_calendar where fiscal_year = ?";
				try (Connection connection = jdbcService.getDBConn(globalConfigCSUFService.getAEMFormsDatabaseSource());
						PreparedStatement prStmt = connection.prepareStatement(getPayrollCalStmt);) {
					prStmt.setString(1, inputFiscalYear);
					try (ResultSet resultSet = prStmt.executeQuery();) {
						while (resultSet.next()) {
							String dateValue = resultSet.getString("date_value");
							LocalDate dbDate = LocalDate.parse(dateValue, formatter);
							log.debug("dbDate : {}", dbDate);
							if (dbDate.isEqual(fiscalStartDate) || dbDate.isEqual(fiscalEndDate)
									|| (dbDate.isAfter(fiscalStartDate) && dbDate.isBefore(fiscalEndDate))) {
								String dateType = resultSet.getString("date_type");
								int maxHoursWeeklyLimit = resultSet.getInt("max_hours_weekly_limit");
								log.debug("date_value : {}, date_type : {}, max_hours_weekly_limit : {}", dateValue,
										dateType, maxHoursWeeklyLimit);
								if (dateType.equalsIgnoreCase(DateType.INCLUDEDDAY.name())) {
									includedDates.add(dbDate);
								} else if (dateType.equalsIgnoreCase(DateType.PUBLICHOLIDAY.name())) {
									publicHolidays.add(dbDate);
								} else if (dateType.equalsIgnoreCase(DateType.BREAKDAY.name())) {
									breakDays.add(dbDate);
								} else if (dateType.equalsIgnoreCase(DateType.FALLSESSIONSTARTDAY.name())) {
									FALL_SESSION_START_DATE = dbDate;
									FALL_SESSION_WEEKLY_HOURS_LIMIT = maxHoursWeeklyLimit;
								} else if (dateType.equalsIgnoreCase(DateType.FALLSESSIONENDDAY.name())) {
									FALL_SESSION_END_DATE = dbDate;
								} else if (dateType.equalsIgnoreCase(DateType.SPRINGSESSIONSTARTDAY.name())) {
									SPRING_SESSION_START_DATE = dbDate;
									SPRING_SESSION_WEEKLY_HOURS_LIMIT = maxHoursWeeklyLimit;
								} else if (dateType.equalsIgnoreCase(DateType.SPRINGSESSIONENDDAY.name())) {
									SPRING_SESSION_END_DATE = dbDate;
								}
							}
						}
					}
				} catch (Exception e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
				LocalDate currentDate = LocalDate.now();

				LocalDate firstDateOfMonth = LocalDate.of(year, month, 1);
				LocalDate prevSundayDate = firstDateOfMonth.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY));

				int daysInMonth = YearMonth.of(year, month).lengthOfMonth();
				LocalDate lastDateOfMonth = LocalDate.of(year, month, daysInMonth);
				int weeklyHoursLimit = DEFAULT_WEEKLY_HOURS_LIMIT;
				boolean isSpringSessionWeek = false;
				boolean isFallSessionWeek = false;
				for (int week = 0; week < 6; week++) {
					LocalDate weekStartDate = prevSundayDate.plusDays(week * 7);
					log.debug("weekStartDate : {}", weekStartDate);
					LocalDate weekEndDate = prevSundayDate.plusDays(((week + 1) * 7) - 1);
					log.debug("weekEndDate : {}", weekEndDate);
					if (CSUFUtils.isWeekBetweenSessionDates(weekStartDate, weekEndDate, FALL_SESSION_START_DATE,
							FALL_SESSION_END_DATE)) {
						weeklyHoursLimit = FALL_SESSION_WEEKLY_HOURS_LIMIT;
						isFallSessionWeek = true;
					} else if (CSUFUtils.isWeekBetweenSessionDates(weekStartDate, weekEndDate,
							SPRING_SESSION_START_DATE, SPRING_SESSION_END_DATE)) {
						weeklyHoursLimit = SPRING_SESSION_WEEKLY_HOURS_LIMIT;
						isSpringSessionWeek = true;
					}
					for (int i = 0; i < 7; i++) {
						LocalDate parsedDate = prevSundayDate.plusDays(week * 7 + i);
						JsonObject dayJsonObj = new JsonObject();
						dayJsonObj.addProperty("weekInSession", week + 1);
						dayJsonObj.addProperty("weeklyHoursLimit", weeklyHoursLimit);
						dayJsonObj.addProperty("date", parsedDate.format(formatter));
						dayJsonObj.addProperty("dayOfMonth", parsedDate.getDayOfMonth());
						dayJsonObj.addProperty("dayOfWeek", parsedDate.getDayOfWeek().name());
						dayJsonObj.addProperty("isIncludedDay", includedDates.contains(parsedDate));
						dayJsonObj.addProperty("isPublicHoliday", publicHolidays.contains(parsedDate));
						dayJsonObj.addProperty("isBreakDay", breakDays.contains(parsedDate));
						// dayJsonObj.addProperty("isDisabled", (currentDate.isBefore(parsedDate)
						// || lastDateOfMonth.isBefore(parsedDate) ||
						// firstDateOfMonth.isAfter(parsedDate)));
						dayJsonObj.addProperty("isFallSessionWeek", isFallSessionWeek);
						dayJsonObj.addProperty("isSpringSessionWeek", isSpringSessionWeek);
						dayJsonObj.addProperty("isDisabled",
								(lastDateOfMonth.isBefore(parsedDate) || firstDateOfMonth.isAfter(parsedDate)));
						payrollCalendarArray.add(dayJsonObj);
					}
				}
			} else {
				JsonObject errorJson = new JsonObject();
				errorJson.addProperty("errorCode", "PAY-CAL-ERR-1");
				errorJson.addProperty("errorMessage", "selected month is invalid");
				payrollCalendarArray.add(errorJson);
			}
		} else {
			JsonObject errorJson = new JsonObject();
			errorJson.addProperty("errorCode", "PAY-CAL-ERR-2");
			errorJson.addProperty("errorMessage", "selected year is outside fiscal year period");
			payrollCalendarArray.add(errorJson);
		}
		return payrollCalendarArray;
	}


	

}
