package com.csuf.cloud.core.services;

import java.io.IOException;

import org.apache.sling.api.resource.ResourceResolver;

import com.adobe.aemfd.docmanager.Document;
import com.google.gson.JsonArray;

public interface FormService {
	Document getDoR(String dataXml, String formPath, String fileName) throws IOException;
	
	Document getDoROnBase(String dataXml, String formPath, String fileName, ResourceResolver resolver) throws IOException;
	
	

	/**
	 * @month takes 1 based index for month, for e.g. 5 for May
	 * @year takes four digit year format, for e.g. 2020
	 * @inputFiscalYear takes fiscal year format, for e.g. 2020-2021
	 * @fiscalYearStartMonth takes 1 based index for month, for e.g. 7 for July
	 * @fiscalYearEndMonth takes 1 based index for month, for e.g. 6 for June
	 */
	JsonArray getPayrollCalendar(int month, int year, String inputFiscalYear, int fiscalYearStartMonth,
			int fiscalYearEndMonth);

	/**
	 * @month takes 1 based index for month, for e.g. 5 for May
	 * @year takes four digit year format, for e.g. 2020
	 * @inputFiscalYear takes fiscal year format, for e.g. 2020-2021
	 * @fiscalYearStartMonth takes 1 based index for month, for e.g. 7 for July
	 * @fiscalYearEndMonth takes 1 based index for month, for e.g. 6 for June
	 */
	JsonArray getWeekwiseMonthlyPayrollCalendar(int month, int year, String inputFiscalYear, int fiscalYearStartMonth,
			int fiscalYearEndMonth);	
	Document getDoRFromPayloadPath(String payloadPath, String fileName) throws IOException;
}
