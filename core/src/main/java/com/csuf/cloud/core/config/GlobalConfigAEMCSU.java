package com.csuf.cloud.core.config;

import org.apache.commons.lang3.StringUtils;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Global Configuration AEM CSU", description = "CSUF Global Configuration New Service")
public @interface GlobalConfigAEMCSU {

	@AttributeDefinition(name = "Grade Change Filenet URL", description = "Grade Change Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addGradeChangeDocuments")
	String grade_Change_Filenet_URL();

//	@AttributeDefinition(name = "AEM Grade Change Datasource", description = "AEM Grade Change Datasource", type = AttributeType.STRING, defaultValue = "AEMDBDEV")
//	String ds_Grade_Change_AEM();

	@AttributeDefinition(name = "AEM Forms Datasource", description = "AEM Forms Datasource", type = AttributeType.STRING, defaultValue = "AEMDBDEV")
	String aem_Forms_Datasource();

	@AttributeDefinition(name = "Grade Change Email From Address", description = "From Address for grade change emails")
	String gcEmailFromAddress() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Grade Change Email To Addresses", description = "To Addresses for grade change emails")
	String[] gcEmailToAddresses() default {};

	@AttributeDefinition(name = "Grade Change Email Cc Addresses", description = "Cc Addresses for grade change emails")
	String[] gcEmailCcAddresses() default {};

	@AttributeDefinition(name = "Grade Change Email Bcc Addresses", description = "Bcc Addresses for grade change emails")
	String[] gcEmailBccAddresses() default {};

	@AttributeDefinition(name = "Grade Change Email Subject", description = "Subject for grade change emails")
	String gcEmailSubject() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Grade Change Email Template Path", description = "Template Path for sending grade change emails")
	String gcEmailTemplatePath() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Grade Change Email Embedded Image Path", description = "Embedded Image Path for sending grade change emails")
	String gcEmailEmbeddedImagePath() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Send Grade Change Email after Filenet Failure ?", description = "If checked, it will send an email after any failures during filenet save", type = AttributeType.BOOLEAN)
	boolean isGCEmailAfterFailure() default false;

	@AttributeDefinition(name = "HR Benefits Filenet URL", description = "HR Benefits Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addHRIntExtFeeWaiverBenefitsDocuments")
	String hr_Benefits_Filenet_URL();

	@AttributeDefinition(name = "Major Minor Change FileNet URL", description = "Major Minor Change FileNet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addMajorChangeDocuments")
	String major_Minor_Change_FileNet_URL();

	@AttributeDefinition(name = "New Position Staff FileNet URL", description = "New Position Staff FileNet URL", type = AttributeType.STRING)
	String new_Position_Staff_FileNet_URL();

	@AttributeDefinition(name = "Late Adds FileNet URL", description = "Late Adds FileNet URL", type = AttributeType.STRING)
	String late_Adds_FileNet_URL();

	@AttributeDefinition(name = "Leave Of Absence FileNet URL", description = "Leave Of Absence FileNet URL", type = AttributeType.STRING)
	String leave_Of_Absence_FileNet_URL();

	@AttributeDefinition(name = "Incomplete Grade FileNet URL", description = "Incomplete Grade FileNet URL", type = AttributeType.STRING)
	String incomplete_Grade_FileNet_URL();

	@AttributeDefinition(name = "STD 682 Overtime Distributed FileNet URL", description = "STD 682 Overtime Distributed FileNet URL", type = AttributeType.STRING)
	String std682_Overtime_Distributed_FileNet_URL();

	@AttributeDefinition(name = "LOR FileNet URL", description = "LOR FileNet URL", type = AttributeType.STRING)
	String lor_FileNet_URL();

	@AttributeDefinition(name = "New Position Description Manager FileNet URL", description = "New Position Description Manager", type = AttributeType.STRING)
	String new_PD_Manager_FileNet_URL();

	@AttributeDefinition(name = "Appeal FileNet URL", description = "Appeal FileNet URL", type = AttributeType.STRING)
	String appeal_FileNet_URL();

	@AttributeDefinition(name = "Change of catalog year FileNet URL", description = "Change of catalog year FileNet URL", type = AttributeType.STRING)
	String catalog_year_FileNet_URL();

	@AttributeDefinition(name = "Petition B FileNet URL", description = "Petition B FileNet URL", type = AttributeType.STRING)
	String petitionB_FileNet_URL();

	@AttributeDefinition(name = "MPP Filenet URL", description = "MPP Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addMPPEvalDocuments")
	String mpp_filenet_URL();

	@AttributeDefinition(name = "Filenet URL", description = "Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addCourseWithdrawalDocuments")
	String filenet_URL();

	@AttributeDefinition(name = "Staff Eval Filenet URL", description = "Staff Eval Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addStaffEvalDocuments")
	String staff_eval_filenet_URL();

	@AttributeDefinition(name = "Student LDAP Name", description = "Student LDAP Config", defaultValue = {
			"Campus Students" })
	String[] studentLDAPAttaributes();

	@AttributeDefinition(name = "Faculty LDAP Name", description = "Faculty LDAP Config", defaultValue = {
			"Faculty Staff", "Student Employees" })
	String[] facultyLDAPAttaributes();

	@AttributeDefinition(name = "Whitelisted URL Path List For Anonymous Access", description = "Whitelisted URL Path List For Anonymous Access", defaultValue = {
			"/content/dam/formsanddocuments/letter-of-recommendation-lor",
			"/content/forms/af/letter-of-recommendation-lor", "/content/dam/formsanddocuments/exemptions", "/home",
			"/content/dam/formsanddocuments/csuf-volunteer-form-external", "/content/forms/af/csuf-volunteer-form-external"})
	String[] whitelistedURLPathsForAnonymousAccess();

	@AttributeDefinition(name = "Petition FileNet URL", description = "Petition FileNet URL", type = AttributeType.STRING)
	String petition_FileNet_URL();

	@AttributeDefinition(name = "Financial Aid Filenet URL", description = "Financial Aid Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addFinancialAidStudentRecords")
	String financial_aid_filenet_URL();

	@AttributeDefinition(name = "Request For Excess Units Filenet URL", description = "Request For Excess Units - Graduate and Undergraduate Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addRequestForExcessUnitsDocuments")
	String request_for_excess_units_filenet_URL();

	@AttributeDefinition(name = "CBE Declaration Filenet URL", description = "CBE Declaration Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addCBEDeclarationDocuments")
	String cbe_declaration_filenet_URL();
	
	@AttributeDefinition(name = "Payroll Expenditure Transfer Filenet URL", description = "Payroll Expenditure Transfer  Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addPayrollExpenditureTransferDocuments")
	String payroll_expenditure_transfer_URL();
	
	@AttributeDefinition(name = "ARF Filenet URL", description = "ARF Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addITARFDocuments")
	String arf_filenet_URL();
	
	@AttributeDefinition(name = "All Financial Aid Forms Filenet URL", description = "All Financial Aid Forms Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addFinancialAidStudentRecords")
    String financial_aids_filenet_URL();
	
	@AttributeDefinition(name = "HR COVID Self Certification Filenet URL", description = "HR COVID Self Certification Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addCOVID19VaccineSelfCertification")
    String hr_covid_self_certification_URL();
	
	@AttributeDefinition(name = "Request for Time Conflict Approval Filenet URL", description = "Request for Time Conflict Approval Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addTimeConflictDocuments")
    String request_for_time_conflict_URL();
	
	@AttributeDefinition(name = "Request for Section Change Filenet URL", description = "Request for Section Change Approval Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addSectionChangeDocuments")
    String request_for_section_change_URL();
	
	@AttributeDefinition(name = "Faculty Special Consultant Stipend Filenet URL", description = "Faculty Special Consultant Stipend Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addHRIntExtFeeWaiverBenefitsDocuments")
    String faculty_spl_consultant_stipend_form_URL();
	
	@AttributeDefinition(name = "AT Guidelines Filenet URL", description = "AT Guidelines Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addFacultyAssignedTimeAgreeement")
    String at_guidelines_form_URL();
	
	@AttributeDefinition(name = "TDA Exception Form (Undergraduate) Filenet URL", description = "TDA Exception Form (Undergraduate) Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addTDAExceptionDocument")
    String tda_exception_under__grad_URL();
	
	@AttributeDefinition(name = "TDA Exception Form (Graduate) Filenet URL", description = "TDA Exception Form (Graduate) Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addTDAExceptionDocument")
    String tda_exception__grad_URL();	
	
	@AttributeDefinition(name = "Titan Card Filenet URL", description = "Titan Card Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addTitanCardClosedAccountDocs")
    String titan_card_URL();
	
	@AttributeDefinition(name = "Theatre and Dance Filenet URL", description = "Theatre and Dance Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addFinancialAidStudentRecords")
    String theatre_and_dance_filenet_URL();
	
	@AttributeDefinition(name = "Titan Card Atrium API Username and Password", description = "Key in Atrium API Username and Password in the following format UserName:Password", type = AttributeType.STRING, defaultValue = "UserName:Password")
    String titan_card_atrium_api_username_and_password();
	
	@AttributeDefinition(name = "Titan Card Atrium API URL", description = "Titan Card Atrium API URL", type = AttributeType.STRING, defaultValue = "https://apicsuf.atriumcampus.com/webservices/v1/cardholder/get/accounts")
    String titan_card_atrium_api_filenet_URL();
	
	@AttributeDefinition(name = "Posthumous Degree Approval Filenet URL", description = "Posthumous Degree Approval Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addPosthumousDegreeForm")
    String posthumous_degree_approval_filenet_URL();
	
	@AttributeDefinition(name = "DQ Appeal Form Filenet URL", description = "DQ Appeal Form Filenet URL", type = AttributeType.STRING, defaultValue = "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addDQAppealDocuments")
    String dq_appeal_form_filenet_URL();
	
	@AttributeDefinition(name = "Onbase URL", description = "Onbase URL", type = AttributeType.STRING, defaultValue = "http://ERPOBE5WSSTG01.fullerton.edu:8080/OnBaseDocumentUpload")
	String onbase_URL();
	
	@AttributeDefinition(name = "Filenet or Onbase Selection", description = "Type desired environment filenet or onbase to store completed dor. All small letters", type = AttributeType.STRING, defaultValue = "filenet")
	String filenet_or_onbase_selection(); 
	
	@AttributeDefinition(name = "SFTP Key", description = "SFTP Key", type = AttributeType.STRING, defaultValue = "key")
	String sftp_key(); 
	
	@AttributeDefinition(name = "Asset Management API URL", description = "Asset Management API URL", type = AttributeType.STRING, defaultValue = "https://titans.service-now.com/api/casuf/property/asset/")
    String asset_management_api_URL();
	
	@AttributeDefinition(name = "Asset Management API Username and Password", description = "Key in Asset Managemnet API Username and Password in the following format UserName:Password", type = AttributeType.STRING, defaultValue = "UserName:Password")
    String asset_management_api_username_and_password();
	
	@AttributeDefinition(name = "PET form Accounts Whitelisting", description = "Update Account to Whitelist for transfer required in PET Form", defaultValue = {"601300-601302", "602001-601303"})
	String[] pet_form_whitelisted_account();
	
	@AttributeDefinition(name = "Major Minor PeopleSoft API URL", description = "Major Minor PeopleSoft API URL", type = AttributeType.STRING, defaultValue = "https://fullerton.csdev.cmsdc.calstate.edu/PSIGW/RESTListeningConnector/CAFULTST/FUL_CHANGE_OF_MAJOR.V1/StudentID=<<CWID>>/Acad_Career=<<ACAD>>/StudentCarNbr=<<ACADNO>>")
    String major_minor_ps_api_URL();
	
	@AttributeDefinition(name = "Major Minor PeopleSoft API Username and Password", description = "Key in Major Minor PeopleSoft API Username and Password in the following format UserName:Password", type = AttributeType.STRING, defaultValue = "UserName:Password")
    String major_minor_ps_api_username_and_password();
}