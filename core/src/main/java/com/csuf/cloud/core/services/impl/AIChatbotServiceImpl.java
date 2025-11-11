package com.csuf.cloud.core.services.impl;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Map;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.AIChatbotService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;

@Component(service = AIChatbotService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=CSUF AI Chatbot Service Implementation" })
public class AIChatbotServiceImpl implements AIChatbotService {

	private static final Logger log = LoggerFactory.getLogger(AIChatbotServiceImpl.class);

	@Reference
	private JDBCConnectionHelperService jdbcService;

	@Reference
	private InboxItemService inboxService;

	@Reference
	private ProcessingInstanceConfigService processingConfig;

	@Reference
	private GlobalConfigCSUFService globalConfigcsufService;


	@Override
	public Boolean keyValidation(Map<String, Object> object) {
		String[] keyArray = { "formName", "stepName", "workflowInstanceId", "workitemId", "currentUserId" };
		if (validateRequiredKeys(object, keyArray)) {
			String workflowName = (String) object.get("formName");
			if (workflowName.equalsIgnoreCase("Student Course Withdrawal")) {
				return checkStudentCourseWithdrawalKeys(object);
			}
			return false;
		} else {
			return false;
		}
	}

	private Boolean checkStudentCourseWithdrawalKeys(Map<String, Object> object) {
		String[] keyArray = { "CWID", "caseId", "approveorDeny" };
		if (validateRequiredKeys(object, keyArray)) {
			String stepName = (String) object.get("stepName");
			if (stepName.equalsIgnoreCase("Assign Task - Instructor Review")) {
				String[] instructorReviewKeys = { "withdrawalGradeStatus", "withdrawalGradeStatusGrade",
						"lastDateStudentAttendedClass" };
				if (validateRequiredKeys(object, instructorReviewKeys)
						&& object.get("approveorDeny").toString().equalsIgnoreCase("1")
						&& validateDateFormat((String) object.get("lastDateStudentAttendedClass"))) {
					return true;
				} else if (validateRequiredKeys(object, instructorReviewKeys)
						&& object.get("approveorDeny").toString().equalsIgnoreCase("2")
						&& validateDateFormat((String) object.get("lastDateStudentAttendedClass"))) {
					String[] instructorReviewDenyKeys = { "denialReason", "additionalComments" };
					if (validateRequiredKeys(object, instructorReviewDenyKeys)
							&& !object.get("denialReason").toString().equalsIgnoreCase("Other")) {
						return true;
					} else if (validateRequiredKeys(object, instructorReviewDenyKeys)
							&& object.get("denialReason").toString().equalsIgnoreCase("Other")
							&& object.get("denialOtherReason") != null) {
						return true;
					}
					return false;
				} else {
					return false;
				}
			} else if (stepName.equalsIgnoreCase("Assign Task - Chair Review")) {
				if (object.get("approveorDeny").toString().equalsIgnoreCase("1")) {
					return true;
				} else if (object.get("approveorDeny").toString().equalsIgnoreCase("2")) {
					String[] chairReviewDenyKeys = { "denialReason", "additionalComments" };
					if (validateRequiredKeys(object, chairReviewDenyKeys)
							&& !object.get("denialReason").toString().equalsIgnoreCase("Other")) {
						return true;
					} else if (validateRequiredKeys(object, chairReviewDenyKeys)
							&& object.get("denialReason").toString().equalsIgnoreCase("Other")
							&& object.get("denialOtherReason") != null) {
						return true;
					}
				}
				return false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	public static Boolean validateRequiredKeys(Map<String, Object> dataMap, String[] requiredKeys) {
		if (dataMap == null || requiredKeys == null) {
			return false;
		}
		return Arrays.stream(requiredKeys).allMatch(key -> dataMap.containsKey(key) && dataMap.get(key) != null);
	}
	
	public static Boolean validateDateFormat(String dateString) {
	    if (dateString == null || dateString.trim().isEmpty()) {
	        return false;
	    }
	    
	    try {
	        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
	        dateFormat.setLenient(false); // Strict validation
	        dateFormat.parse(dateString.trim());
	        return true;
	    } catch (Exception e) {
	        log.debug("Date format validation failed for: {}", dateString);
	        return false;
	    }
	}
}
