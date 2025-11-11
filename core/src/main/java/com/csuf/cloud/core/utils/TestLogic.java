package com.csuf.cloud.core.utils;

import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.Calendar;

import org.apache.commons.lang3.StringUtils;

public class TestLogic {
	private static final String DATE_FORMAT_US = "M/d/yyyy h:m:s a";

	public static void main(String[] args) {
		// getComments();
		// getCalendarDays();
		// getCalendarDaysofMonth(5, 2021, "2021-05-10");
		// System.out.println("2020-2021".split("-")[0]);
		// System.out.println("2020-2021".split("-")[1]);
		// LocalDate date = LocalDate.of(2021, 5, 1);
		// System.out.println("date : " + date);
		// System.out.println("DayOfWeek : " + date.getDayOfWeek().name());
		// int weekOfYear = date.get(ChronoField.ALIGNED_WEEK_OF_YEAR);
		// int weekOfMonth = date.get(ChronoField.ALIGNED_WEEK_OF_MONTH);
		// System.out.println("weekOfYear : " + weekOfYear);
		// System.out.println("weekOfMonth : " + weekOfMonth);
		// System.out.println("Previous Sunday: " +
		// date.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY)) + "\n");

		// getWeekwiseMonthlyPayrollCalendar(5, 2021, "2021-05-12");
		// System.out.println("SpringSessionEndDay".toUpperCase());

		/*
		 * String title = "Test Custom Inbox"; if (StringUtils.containsIgnoreCase(title,
		 * "nb")) { System.out.println("found"); } else {
		 * System.out.println("not found"); }
		 */

		/*
		 * String germanString = "It's not visi’ble"; byte[] germanBytes =
		 * germanString.getBytes(); String asciiEncodedString = new String(germanBytes,
		 * StandardCharsets.UTF_8); System.out.println(asciiEncodedString);
		 * System.out.println(germanString);
		 */

		String fileName = "Testing_Doc__2 (1).pdf";
		String fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf("."));
		//System.out.println(fileNameWithoutExtension);
		// fileNameWithoutExtension =
		// fileNameWithoutExtension.replaceAll("[^a-zA-Z0-9]", "");
		fileNameWithoutExtension = fileNameWithoutExtension.replaceAll("\\s", "").replaceAll("[<\\[@#%:,&'`;{\\\\^\\=$!|\\]}?*+/.>]", "");
		fileName = fileNameWithoutExtension.concat(fileName.substring(fileName.lastIndexOf("."), fileName.length()));
		
		String ldapAttribute = "CN=Vadlakunta\\, Naga,OU=Faculty Staff,DC=ad,DC=fULLERTOn,DC=EDU;ldap";
		String search = "DC=AD,DC=FUlLErTON,DC=EDU";
		System.out.println(StringUtils.containsIgnoreCase(ldapAttribute, search));
	}

	private static void getCalendarDaysofMonth(int month, int year, String includeDay) {
		LocalDate currentDate = LocalDate.now();
		int daysInMonth = YearMonth.of(year, month).lengthOfMonth();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate includeDate = LocalDate.parse(includeDay, formatter);
		for (int i = 1; i <= daysInMonth; i++) {
			LocalDate date = LocalDate.of(year, month, i);
			String formattedDate = date.format(formatter);
			LocalDate parsedDate = LocalDate.parse(formattedDate, formatter);
			if (currentDate.isAfter(parsedDate)) {
				System.out.println("Date : " + parsedDate + " and Day : " + parsedDate.getDayOfWeek()
						+ " and includeDay match : " + parsedDate.isEqual(includeDate));
			}
		}
	}

	private static void getCalendarDays() {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, 2021);
		cal.set(Calendar.MONTH, 4);
		cal.set(Calendar.DAY_OF_MONTH, 1);
		int maxDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(df.format(cal.getTime()));
		for (int i = 1; i < maxDay; i++) {
			cal.set(Calendar.DAY_OF_MONTH, i + 1);
			System.out.println(df.format(cal.getTime()) + " ::: Day ::: " + cal.get(Calendar.DAY_OF_WEEK));
		}
	}

	private static void getWeekwiseMonthlyPayrollCalendar(int month, int year, String includeDay) {
		LocalDate currentDate = LocalDate.now();
		int daysInMonth = YearMonth.of(year, month).lengthOfMonth();
		LocalDate firstDateOfMonth = LocalDate.of(year, month, 1);
		LocalDate prevSundayDate = firstDateOfMonth.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY));
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate includeDate = LocalDate.parse(includeDay, formatter);
		LocalDate lastDateOfMonth = LocalDate.of(year, month, daysInMonth);

		for (int week = 0; week < 6; week++) {
			System.out.println("Week Start Day : " + prevSundayDate.plusDays(week * 7));
			for (int i = 0; i < 7; i++) {
				LocalDate parsedDate = prevSundayDate.plusDays(week * 7 + i);
				System.out.println("Date : " + parsedDate + " and Day : " + parsedDate.getDayOfWeek() + " and Week : "
						+ (week + 1) + " and disabled : " + (currentDate.isBefore(parsedDate)
								|| lastDateOfMonth.isBefore(parsedDate) || firstDateOfMonth.isAfter(parsedDate)));
			}
			System.out.println("Week End Day : " + prevSundayDate.plusDays(((week + 1) * 7) - 1));
			System.out.println("isWeekBetweenSessionDates : " + isWeekBetweenSessionDates(
					prevSundayDate.plusDays(week * 7), prevSundayDate.plusDays(((week + 1) * 7) - 1),
					LocalDate.parse("2021-05-02", formatter), LocalDate.parse("2021-06-04", formatter)));
		}
	}

	private static void getComments() {
		String comment1 = "MPP Comments this is first	(Comments By: rwoods at 4/29/2021 7:44:53 PM)";

		String comment2 = "Comp. Services this is second	(Comments By: lechen at 4/29/2021 7:46:0 AM)";

		String comment3 = "MPP Comments this is third";

		String dateValue = CSUFUtils.convertDateToString(new java.util.Date(), DATE_FORMAT_US);

		if (StringUtils.isNotBlank(comment1) && !comment1.endsWith("PM)") && !comment1.endsWith("AM)")) {
			System.out.println("inside comment 1");
			comment1 = comment1.concat("\t(Comments By: " + "Manish" + " at " + dateValue + ")");
		}

		if (StringUtils.isNotBlank(comment2) && !comment2.endsWith("PM)") && !comment2.endsWith("AM)")) {
			System.out.println("inside comment 2");
			comment2 = comment2.concat("\t(Comments By: " + "Manish" + " at " + dateValue + ")");
		}

		if (StringUtils.isNotBlank(comment3) && !comment3.endsWith("PM)") && !comment3.endsWith("AM)")) {
			System.out.println("inside comment 3");
			comment3 = comment3.concat("\t(Comments By: " + "Manish" + " at " + dateValue + ")");
		}

		System.out.println("Sysout comment 1 : " + comment1);
		System.out.println("Sysout comment 2 : " + comment2);
		System.out.println("Sysout comment 3 : " + comment3);
	}

	private static boolean isWeekBetweenSessionDates(LocalDate weekStartDate, LocalDate weekEndDate,
			LocalDate sessionStartDate, LocalDate sessionEndDate) {
		if ((weekStartDate.isEqual(sessionStartDate) || weekStartDate.isAfter(sessionStartDate))
				&& (weekEndDate.isEqual(sessionEndDate) || weekEndDate.isBefore(sessionEndDate))) {
			return true;
		}
		return false;
	}
}
