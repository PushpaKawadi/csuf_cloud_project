package com.csuf.cloud.core.services;

import java.util.List;

import com.csuf.cloud.core.vo.WorkflowVO;

public interface GlobalConfigCSUFService {

	String getGradeChangeFilenetURL();

	String getMajorMinorFilenetURL();

	String getLateAddsFilenetURL();

	// String getGradeChangeDatabaseSource();

	String getLeaveOfAbsenceFilenetURL();

	String getAEMFormsDatabaseSource();

	String gcEmailFromAddress();

	List<String> gcEmailToAddresses();

	List<String> gcEmailCcAddresses();

	List<String> gcEmailBccAddresses();

	String gcEmailSubject();

	String gcEmailTemplatePath();

	String gcEmailEmbeddedImagePath();

	boolean isGCEmailAfterFailure();

	List<String> sendGradeChangeEmails(WorkflowVO workflowVO);

	String getHRBenefitsFilenetURL();

	String getNewPositionStaffFilenetURL();

	String getIncompleteGradeFilenetURL();

	String getLORFilenetURL();

	String getNewPDManagerFilenetURL();

	String getAppealFilenetURL();

	String getMppFilenetURL();

	String getFilenetURL();

	String getStaffEvalFilenetURL();

	String getCatalogYearFilenetURL();

	String getPetitionFilenetURL();

	String[] studentLDAPAttributes();

	String[] facultyLDAPAttributes();

	String[] whitelistedURLPathsForAnonymousAccess();

	String getFinancialAidFilenetURL();

	String getRequestForExcessUnitsFilenetURL();

	String getCBEDeclarationFilenetURL();
	
	String getPayrollExpenditureTransferFilenetURL();
	
	String getARFFilenetURL();
	
	String getAllFinancialAidsFilenetURL();

	String getHRCovidSelfCertificationFilenetURL();
	
	String getRequestForTimeConflictApprovalFilenetURL();
	
	String getRequestForSectionChangeFilenetURL();
	
	String getFacultySpecialConsultantStipendFilenetURL();
	
	String getATGuidelinesFilenetURL();
	
	String getTDAExceptionUndergraduateFilenetURL();
	
	String getTDAExceptionGraduateFilenetURL();
	
	String getTitanCardFilenetURl();
	
	String getTheatreAndDanceFilenetURL();
	
	String getTitanCardAtriumAPIUsernameandPassword();
	
	String getTitanCardAtriumAPIURL();
	
	String getPosthumousDegreeApprovalFilenetURL();
	
	String getDQAppealFormFilenetURL();
	
	String getOnbaseURL();
	
	String getfilenet_or_onbase_selection();
	
	String getSftpKey();
	
	String getAssetManagementAPIURL();
	
	String getAssetManagementAPIUsernameandPassword();
	
	String[] getPETFormWhitelistedAccounts();
	
    String getMajorMinorPSAPIURL();
	
	String getMajorMinorPSAPIUsernameandPassword();
	
}