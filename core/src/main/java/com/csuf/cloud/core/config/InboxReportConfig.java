package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration Parameters for Inbox Reports
 * 
 * @author 105876
 */

@ObjectClassDefinition(name = "Inbox Reports Configuration", description = "Configuration Parameters for Inbox Reports")
public @interface InboxReportConfig {

	@AttributeDefinition(name = "SCW Report Viewers Group List", description = "List of groups whose member users can view SCW Inbox Report")
	String[] scwReportViewersGroupList() default { "ARSC-Reviewers" };

	@AttributeDefinition(name = "MPP Report Viewers Group List", description = "List of groups whose member users can view MPP Inbox Report")
	String[] mppReportViewersGroupList() default { "HR-Reviewers" };

	@AttributeDefinition(name = "Staff Evaluation Report Viewers Group List", description = "List of groups whose member users can view Staff Evaluation Inbox Report")
	String[] staffReportViewersGroupList() default { "HR-Reviewers" };

	@AttributeDefinition(name = "Grade Change Report Viewers Group List", description = "List of groups whose member users can view Grade Change Inbox Report")
	String[] gcReportViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "Major Minor Change Report Viewers Group List", description = "List of groups whose member users can view Major Minor Change Inbox Report")
	String[] mmcReportViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "Temp Faculty Payroll Report Viewers Group List", description = "List of groups whose member users can view Temp Faculty Payroll Inbox Report")
	String[] tfpReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "New Position Description Staff Report Viewers Group List", description = "List of groups whose member users can view New Position Description Staff Inbox Report")
	String[] npdsReportViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "New Position Description Manager Report Viewers Group List", description = "List of groups whose member users can view New Position Description Manager Inbox Report")
	String[] npdmReportViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "Employee Fee Waiver Report Viewers Group List", description = "List of groups whose member users can view Employee Fee Waiver Inbox Report")
	String[] efwReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "Dependent Fee Waiver Report Viewers Group List", description = "List of groups whose member users can view Dependent Fee Waiver Inbox Report")
	String[] dfwReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "Domestic Partner Tax Certification Report Viewers Group List", description = "List of groups whose member users can view Domestic Partner Tax Certification Inbox Report")
	String[] dptcReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "STD 682 Overtime Distributed Report Viewers Group List", description = "List of groups whose member users can view STD 682 Overtime Distributed Inbox Report")
	String[] std682ReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Short App Employee Fee Waiver Report Viewers Group List", description = "List of groups whose member users can view Employee Fee Waiver Inbox Report")
	String[] saefwReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "Catastrophic Leave Request Report Viewers Group List", description = "List of groups whose member users can view Catastrophic Leave Request Inbox Report")
	String[] clrReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "Personnel File Access Report Viewers Group List", description = "List of groups whose member users can view Personnel File Access Inbox Report")
	String[] pfaReportViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "Personnel Action Notice Report Viewers Group List", description = "List of groups whose member users can view Personnel Action Notice Inbox Report")
	String[] panReportViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "Career Development Report Viewers Group List", description = "List of groups whose member users can view Career Development Inbox Report")
	String[] cdReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "OTSD Report Viewers Group List", description = "List of groups whose member users can view OTSD Inbox Report")
	String[] otsdReportViewersGroupList() default { "Payroll-Reviewers" };

	@AttributeDefinition(name = "Confirmation Ticket Report Viewers Group List", description = "List of groups whose member users can view Confirmation Ticket Inbox Report")
	String[] confTicketReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Manual CD048 Report Viewers Group List", description = "List of groups whose member users can view Manual CD048 Inbox Report")
	String[] manualcdReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Timebase Change Request Viewers Group List", description = "List of groups whose member users can view Timebase Change Request Inbox Report")
	String[] timebaseChangeRequestReportViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "Miscellaneous Paroll Request Report Viewers Group List", description = "List of groups whose member users can view Miscellaneous Paroll Request Inbox Report")
	String[] miscPayrollReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Catastrophic Leave Donation Report Viewers Group List", description = "List of groups whose member users can view Catastrophic Leave Donation Inbox Report")
	String[] cataLeaveDonationReportViewersGroupList() default { "HRDI/Total Wellness Reviewers" };

	@AttributeDefinition(name = "Pay Plan Report Viewers Group List", description = "List of groups whose member users can view Pay Plan 10/12 11/12 Inbox Report")
	String[] payPlanReportViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "DOA Report Viewers Group List", description = "List of groups whose member users can view DOA Inbox Report")
	String[] doaReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Dock Notice Report Viewers Group List", description = "List of groups whose member users can view Dock Notice Inbox Report")
	String[] dockNoticeReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Special Consultant Timesheet Report Viewers Group List", description = "List of groups whose member users can view Special Consultant Timesheet Inbox Report")
	String[] specialConsultantTimesheetReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Hourly Intermittent Timesheet Report Viewers Group List", description = "List of groups whose member users can view Hourly Intermittent Timesheet Inbox Report")
	String[] hourlyINTTimesheetReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Student Timesheet Report Viewers Group List", description = "List of groups whose member users can view Student Timesheet Inbox Report")
	String[] studentTimesheetReportViewersGroupList() default { "Payroll - Reviewers" };

	@AttributeDefinition(name = "Appeals Report Viewers Group List", description = "List of groups whose member users can view Appeals Inbox Report")
	String[] appealsReportViewersGroupList() default { "Admissions Appeal Committee" };

	@AttributeDefinition(name = "LOA Report Viewers Group List", description = "List of groups whose member users can view LOA Inbox Report")
	String[] loaReportViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "Major Minor Change Report Viewers Group List", description = "List of groups whose member users can view Major Minor Change Inbox Report")
	String[] majorMinorReportViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "Late Adds Report Viewers Group List", description = "List of groups whose member users can view Late Adds Inbox Report")
	String[] lateAddsViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "Catalog Year Report Viewers Group List", description = "List of groups whose member users can view Catalog Year Inbox Report")
	String[] catalogYearViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "FAER Report Viewers Group List", description = "List of groups whose member users can view FAER Inbox Report")
	String[] facultyAdditionalEmploymentViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Petition Report Viewers Group List", description = "List of groups whose member users can view Petition Inbox Report")
	String[] petitionViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "MPP Justification Report Viewers Group List", description = "List of groups whose member users can view MPP Justification Inbox Report")
	String[] mppJustificationViewersGroupList() default { "HR-Compensation-Review" };

	@AttributeDefinition(name = "FAR Report Viewers Group List", description = "List of groups whose member users can view FAR Inbox Report")
	String[] facultyActionRequestViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Telecommuting Agreement Report Viewers Group List", description = "List of groups whose member users can view Telecommuting Agreement Inbox Report")
	String[] telecommutingAgreementViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Finance Access Request Report Viewers Group List", description = "List of groups whose member users can view Finance Access Request Inbox Report")
	String[] financeAccessRequestViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Finance DOA Access Request Report Viewers Group List", description = "List of groups whose member users can view Finance DOA Access Request Inbox Report")
	String[] finDOAViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Campus Solution Access Request Report Viewers Group List", description = "List of groups whose member users can view Campus Solution Access Request Inbox Report")
	String[] campusSolViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "HR Access Request Report Viewers Group List", description = "List of groups whose member users can view HR Access Request Inbox Report")
	String[] hrARFViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Request For Excess Units Report Viewers Group List", description = "List of groups whose member users can view Request For Excess Units Inbox Report")
	String[] requestForExcessUnitsViewersGroupList() default { "ARSC-Reviewers" };

	@AttributeDefinition(name = "Pre Retirement Time Base Request Report Viewers Group List", description = "List of groups whose member users can view Pre Retirement Time Base Request Inbox Report")
	String[] prtbViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Faculty Early Retirement Program Request Report Viewers Group List", description = "List of groups whose member users can view Faculty Early Retirement Program Request Inbox Report")
	String[] ferpViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Substitute Faculty Appointment Form for Short Duration Form Report Viewers Group List", description = "List of groups whose member users can view Substitute Faculty Appointment Form for Short Duration Form Inbox Report")
	String[] sfsdViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Substitute Faculty Time Sheet Report Viewers Group List", description = "List of groups whose member users can view Substitute Faculty Time Sheet Inbox Report")
	String[] sftsViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "TA Substitute Timesheet Report Viewers Group List", description = "List of groups whose member users can view TA Substitute Timesheet Inbox Report")
	String[] taSubTSViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "TA Substitute Appointment Form Report Viewers Group List", description = "List of groups whose member users can view TA Substitute Appointment Form Inbox Report")
	String[] taSubAFViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Chair Director Appointment Form Report Viewers Group List", description = "List of groups whose member users can view Chair/Director Appointment Form Inbox Report")
	String[] chairDirectorAFViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "CBE Declaration Form Report Viewers Group List", description = "List of groups whose member users can view CBE Declaration Form Inbox Report")
	String[] cbeDeclarationViewersGroupList() default { "Records-Office-Reviewers" };

	@AttributeDefinition(name = "Parent and Student Tax Filing Statement Form Report Viewers Group List", description = "List of groups whose member users can view Parent and Student Tax Filing Form Inbox Report")
	String[] taxFilingViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Pilot 9-80 Schedule Form Report Viewers Group List", description = "List of groups whose member users can view Pilot 9-80 Schedule Form Inbox Report")
	String[] ps980ViewersGroupList();

	@AttributeDefinition(name = "Payroll Expenditure Transfer Request Report Viewers Group List", description = "List of groups whose member users can view Payroll Expenditure Transfer Request Request Inbox Report")
	String[] petViewersGroupList() default { "HR-Unit-Reviewers" };

	@AttributeDefinition(name = "Student Dependent Verification Request Report Viewers Group List", description = "List of groups whose member users can view Student Dependent Verification Request Inbox Report")
	String[] studentDependentVerificationViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Parent and Student Family Size Certificate Form Report Viewers Group List", description = "List of groups whose member users can view Parent and Student Family Size Certificate Form Inbox Report")
	String[] familySizeCertificateViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Citizenship Verification Form Report Viewers Group List", description = "List of groups whose member users can view Citizenship Verification Form Inbox Report")
	String[] citizenshipVerificationViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "TEACH Grant Requirement Cert Form Report Viewers Group List", description = "List of groups whose member users can view TEACH Grant Requirement Cert Form Inbox Report")
	String[] teachGrantRequirementCertViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Summer Loan Request Form Report Viewers Group List", description = "List of groups whose member users can view Summer Loan Request Form Inbox Report")
	String[] summerLoanRequestViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Student Non-Filer Certification Form Report Viewers Group List", description = "List of groups whose member users can view Student Non-Filer Certification Form Inbox Report")
	String[] studentNonFilerCertificationViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Student Projected Year Income Appeal Form Report Viewers Group List", description = "List of groups whose member users can view Student Projected Year Income Appeal Form Inbox Report")
	String[] studentProjectedYearIncomeAppealViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Federal Direct Grad Plus Loan Form Report Viewers Group List", description = "List of groups whose member users can view Federal Direct Grad Plus Loan Form Inbox Report")
	String[] federalDirectGradPlusLoanViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Dependency Override Renewal Form Report Viewers Group List", description = "List of groups whose member users can view Dependency Override Renewal Form Inbox Report")
	String[] dependencyOverrideRenewalViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Parent Verification of Non-Filing Letter Form Report Viewers Group List", description = "List of groups whose member users can view Parent Verification of Non-Filing Letter Form Inbox Report")
	String[] parentverificationofnonfilingletterViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Parent Non-Filer Certification Form Report Viewers Group List", description = "List of groups whose member users can view Parent Non-Filer Certification Form Inbox Report")
	String[] parentnonfilercertificationViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Dependency Override Appeal Form Report Viewers Group List", description = "List of groups whose member users can view Dependency Override Appeal Form Inbox Report")
	String[] dependencyOverrideAppealViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "Section Change Viewers Group List", description = "List of groups whose member users can view Section Change Inbox Report")
	String[] sectionChangeReportViewersGroupList() default { "ARSC-Reviewers" };
	
	@AttributeDefinition(name = "Request for Time Conflict Approval Form Report Viewers Group List", description = "List of groups whose member users can view Request for Time Conflict Approval Form Inbox Report")
	String[] requestforTimeConflictApprovalViewersGroupList() default { "ARSC-Reviewers" };
	
	@AttributeDefinition(name = "Request for Faculty Assigned Time Agreement Form Report Viewers Group List", description = "List of groups whose member users can view Request for Faculty Assigned Time Agreement Form Inbox Report")
	String[] facultyAssignedTimeAgreementViewersGroupList() default { "HR-Unit-Reviewers" };
	
	@AttributeDefinition(name = "Parent Amended Tax Return Form Report Viewers Group List", description = "List of groups whose member users can view Parent Amended Tax Return  Form Inbox Report")
	String[] parentAmendedTaxReturnViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "Immigration Citizenship Verification Form Report Viewers Group List", description = "List of groups whose member users can view Immigration Citizenship Verification Form Inbox Report")
	String[] immigrationcitizenshipVerificationViewersGroupList() default { "Financial Aid Reviewers" };
 
	@AttributeDefinition(name = "Federal Aid Refund Verification Form Report Viewers Group List", description = "List of groups whose member users can view Federal Aid Refund Verification Form Inbox Report")
	String[] federalAidRefundVerificationViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "Faculty Special Consultant Stipend Form Report Viewers Group List", description = "List of groups whose member users can view Faculty Special Consultant Stipend Form Inbox Report")
	String[] facultySpecialConsultantStipendViewersGroupList() default { "Payroll-Reviewers" };
	
	@AttributeDefinition(name = "Loan Status Verification Form Report Viewers Group List", description = "List of groups whose member users can view Loan Status Verification Form Inbox Report")
	String[] loanStatusVerificationViewersGroupList() default { "Financial Aid Reviewers" };

	@AttributeDefinition(name = "Cal Grant Transfer Form Report Viewers Group List", description = "List of groups whose member users can view Cal Grant Transfer Form Inbox Report")
    String[] calGrantTransferViewersGroupList() default { "Financial Aid Reviewers" };

    @AttributeDefinition(name = "Identity Verification And Statement Form Report Viewers Group List", description = "List of groups whose member users can view Identity Verification And Statement Form Inbox Report")
    String[] identityVerificationAndStatementViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "SAP Appeal Form Report Viewers Group List", description = "List of groups whose member users can view SAP Appeal Form Inbox Report")
    String[] sapAppealViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Unit Cap Appeal Form Report Viewers Group List", description = "List of groups whose member users can view Unit Cap Appeal Form Inbox Report")
    String[] unitCapAppealViewersGroupList() default { "Financial Aid Reviewers" };

    @AttributeDefinition(name = "Award Adjustment Appeal Form Report Viewers Group List", description = "List of groups whose member users can view Award Adjustment Appeal Form Inbox Report")
	String[] awardAdjustmentAppealViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "Student W2 Statement Report Viewers Group List", description = "List of groups whose member users can view Student W2 Statement Inbox Report")
    String[] studentW2StatementViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Verification of Non Filing Form Report Viewers Group List", description = "List of groups whose member users can view Verification of Non Filing Form Inbox Report")
    String[] verificationOfNonFilingViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Federal Direct Plus Application Form Report Viewers Group List", description = "List of groups whose member users can view Federal Direct Plus Application Form Inbox Report")
    String[] federalDirectPlusApplicationViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Federal Direct Loan Request Form Report Viewers Group List", description = "List of groups whose member users can view Federal Direct Loan Request Form Inbox Report")
    String[] federalDirectLoanRequestViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Non-Filer Certification Report Viewers Group List", description = "List of groups whose member users can view Non-Filer Certification Inbox Report")
    String[] nonFilerCertificationViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Parent Statement of Non-Support Form Report Viewers Group List", description = "List of groups whose member users can view Parent Statement of Non-Support Form Inbox Report")
    String[] parentStatementOfNonSupportViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Drone Flight Request Form Report Viewers Group List", description = "List of groups whose member users can view Drone Flight Request Form Inbox Report")
    String[] droneFlightRequestViewersGroupList() default { "Campus-Police-Reviewers" };
    
    @AttributeDefinition(name = "TDA Exception Form - Undergraduate Report Viewers Group List", description = "List of groups whose member users can view TDA Exception Form - Undergraduate Inbox Report")
    String[] tdaExceptionUGViewersGroupList() default { "ATCE-Reviewers" };
    
    @AttributeDefinition(name = "TDA Exception Form - Graduate Report Viewers Group List", description = "List of groups whose member users can view TDA Exception Form - Graduate Inbox Report")
    String[] tdaExceptionGradViewersGroupList() default { "Graduate-Studies-Reviewers" };
    
    @AttributeDefinition(name = "Student Budget Adjustment Appeal Form Report Viewers Group List", description = "List of groups whose member users can view Student Budget Adjustment Appeal Form Inbox Report")
    String[] studentBudgetAdjustmentAppealViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Unaccompanied Homeless Youth Verification Home Form Report Viewers Group List", description = "List of groups whose member users can view Unaccompanied Homeless Youth Verification Home Form Inbox Report")
    String[] unaccompaniedHomelessYouthVerificationHomeViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Titan Card Form Report Viewers Group List", description = "List of groups whose member users can view Titan Card Form Inbox Report")
    String[] titanCardViewersGroupList() default { "Titan-Card-Staff-Reviewers" };
    
    @AttributeDefinition(name = "Request to Cancel FA Processing Viewers Group List", description = "List of groups whose member users can view Request to Cancel FA Processing Inbox Report")
    String[] requestToCancelFAProcessingViewersGroupList() default { "Financial Aid Reviewers" };
        
    @AttributeDefinition(name = "State University Grant Appeal Form Viewers Group List", description = "List of groups whose member users can view State University Grant Appeal Form Inbox Report")
    String[] stateUnivGrantAppealViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Golden State Teacher Grant Certification Request Form Viewers Group List", description = "List of groups whose member users can view Golden State Teacher Grant Certification Request Form Inbox Report")
    String[] goldenStateTeacherGrantCertificationReqFormViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Chafee Student Success Plan Form Report Viewers Group List", description = "List of groups whose member users can view Chafee Student Success Plan Form Inbox Report")
    String[] chafeeStudentSuccessPlanViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Veteran Status Verification Form Report Viewers Group List", description = "List of groups whose member users can view Veteran Status Verification Form Inbox Report")
    String[] veteranStatusVerificationViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "SSN Verification Form Report Viewers Group List", description = "List of groups whose member users can view SSN Verification Form Inbox Report")
    String[] ssnVerificationViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Petition for Postgraduate Credit Report Viewers Group List", description = "List of groups whose member users can view Petition for Postgraduate Credit Form Inbox Report")
    String[] petitionforPGCreditViewersGroupList() default { "Records-Office-Reviewers" };
    
    @AttributeDefinition(name = "Petition for General Education Variation Report Viewers Group List", description = "List of groups whose member users can view Petition for General Education Variation Form Inbox Report")
    String[] petitionforGEVariationViewersGroupList() default { "Records-Office-Reviewers" };
    
    @AttributeDefinition(name = "Asset Information Form Report Viewers Group List", description = "List of groups whose member users can view Asset Information Form Inbox Report")
    String[] assetInformationViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Pension Roll Over Form Report Viewers Group List", description = "List of groups whose member users can view Pension Roll Over Form Inbox Report")
    String[] pensionRollOverViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Study Abroad Academic Transcript Submission Form Report Viewers Group List", description = "List of groups whose member users can view Study Abroad Academic Transcript Submission Form Inbox Report")
    String[] studyAbroadAcademicTranscriptSubmissionViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Investment Real Estate Verification Form Report Viewers Group List", description = "List of groups whose member users can view Investment Real Estate Verification Form Inbox Report")
    String[] investmentRealEstateVerificationViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Federal Tax Return Report Viewers Group List", description = "List of groups whose member users can view Federal Tax Return Inbox Report")
    String[] federalTaxReturnViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Federal Tax Return Schedule E Report Viewers Group List", description = "List of groups whose member users can view Federal Tax Return Schedule E Inbox Report")
    String[] federalTaxReturnScheduleEViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Concurrent Enrollment Agreement Fall Report Viewers Group List", description = "List of groups whose member users can view Concurrent Enrollment Agreement Fall Inbox Report")
    String[] concurrentEnrollmentAgreementFallViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Concurrent Enrollment Agreement Spring Report Viewers Group List", description = "List of groups whose member users can view Concurrent Enrollment Agreement Spring Inbox Report")
    String[] concurrentEnrollmentAgreementSpringViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Housing Update Form Report Viewers Group List", description = "List of groups whose member users can view Housing Update Form Inbox Report")
    String[] housingUpdateFormViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Business Supplement Form Report Viewers Group List", description = "List of groups whose member users can view Business Supplement Form Inbox Report")
    String[] businessSupplementFormViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Classroom Lab Equipment Proposal Viewers Group List", description = "List of groups whose member users can view Classroom Lab Equipment Proposal Form Inbox Report")
    String[] classroomLabEquipmentProposalViewersGroupList() default { "Production Office Reviewers" };
    
    @AttributeDefinition(name = "Voice Movement Production Coaching Requests Viewers Group List", description = "List of groups whose member users can view Voice Movement Production Coaching Requests Form Inbox Report")
    String[] voiceMovementProdCoachRequestViewersGroupList() default { "Production Office Reviewers" };
    
    @AttributeDefinition(name = "Guest Atist Proposal Viewers Group List", description = "List of groups whose member users can view Guest Atist Proposal  Form Inbox Report")
    String[] guestArtistProposalViewersGroupList() default { "Production Office Reviewers" };
    
    @AttributeDefinition(name = "Special Event Proposal Viewers Group List", description = "List of groups whose member users can view Special Event Proposal  Form Inbox Report")
    String[] specialEventProposalViewersGroupList() default { "Production Office Reviewers" };
    
    @AttributeDefinition(name = "Faculty/Staff Travel Proposal Viewers Group List", description = "List of groups whose member users can view Faculty/Staff Travel Proposal  Form Inbox Report")
    String[] facultyTravelProposalViewersGroupList() default { "Production Office Reviewers" };
    
    @AttributeDefinition(name = "Petition for Retroactive Withdrawal Form Report Viewers Group List", description = "List of groups whose member users can view Petition for Retroactive Withdrawal Form Inbox Report")
    String[] petitionforRetroactiveWithdrawalViewersGroupList() default { "Records-Office-Reviewers" };
    
    @AttributeDefinition(name = "Posthumous Degree Approval Form Report Viewers Group List", description = "List of groups whose member users can view Posthumous Degree Approval Form Inbox Report")
    String[] posthumousDegreeApprovalViewersGroupList() default { "Records-Office-Reviewers" };
    
    @AttributeDefinition(name = "Teach Grant Supplement Form Report Viewers Group List", description = "List of groups whose member users can view Teach Grant Supplement Form Inbox Report")
    String[] teachGrantSupplementViewersGroupList() default { "Financial Aid Reviewers" };
    
    @AttributeDefinition(name = "Family College Enrollment Verification Form Report Viewers Group List", description = "List of groups whose member users can view Family College Enrollment Verification Form Inbox Report")
    String[] familyCollegeEnrollmentViewersGroupList() default { "Financial Aid Reviewers" };
    
	@AttributeDefinition(name = "Projected Year Income Appeal Form Report Viewers Group List", description = "List of groups whose member users can view Projected Year Income Appeal Form Inbox Report")
	String[] projectedYearIncomeAppealViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "Faculty Assigned Time Agreement AT Guidelines Form Report Viewers Group List", description = "List of groups whose member users can view Faculty Assigned Time Agreement AT Guidelines Form Inbox Report")
	String[] facultyAssignedTimeAgreementATGuidelinesViewersGroupList() default { "HR-Unit-Reviewers" };
	
	@AttributeDefinition(name = "Selective Service Registration Verification Form Report Viewers Group List", description = "List of groups whose member users can view Selective Service Registration Verification Form Inbox Report")
	String[] selectiveServiceRegVerificationViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "Parent Dependent Verification Form Report Viewers Group List", description = "List of groups whose member users can view Parent Dependent Verification Form Inbox Report")
	String[] parentDependentVerificationViewersGroupList() default { "Financial Aid Reviewers" };
	
	@AttributeDefinition(name = "CSUF Volunteer Form Report Viewers Group List", description = "List of groups whose member users can view Volunteer Form Inbox Report")
	String[] csufVolunteerViewersGroupList() default { "Risk-Management-Reviewers" };
	
	@AttributeDefinition(name = "Position Action Form Report Viewers Group List", description = "List of groups whose member users can view Position Action Form Inbox Report")
	String[] positionActionFormViewersGroupList() default { "Position-Management-Reviewers" };
	
	@AttributeDefinition(name = "DQ Appeal Report Viewers Group List", description = "List of groups whose member users can view DQ Appeal Form Inbox Report")
	String[] dqAppealViewersGroupList() default { "Records-Office-Reviewers" };
	
	@AttributeDefinition(name = "Nacha Form Report Viewers Group List", description = "List of groups whose member users can view Nacha Form Inbox Report")
	String[] nachaFormViewersGroupList() default { "Nacha-Reviewers" };
	
	@AttributeDefinition(name = "Appeal of a Declined Fee Waiver Report Viewers Group List", description = "List of groups whose member users can view Appeal of a Declined Fee Waiver Form Inbox Report")
	String[] appealofaDeclinedFeeWaiverFormViewersGroupList() default { "Appeals-Committee-Reviewers" };
	
	@AttributeDefinition(name = "New Asset Acquisition Form Report Viewers Group List", description = "List of groups whose member users can view New Asset Acquisition Form Inbox Report")
	String[] newAssetAcquisitionFormViewersGroupList() default { "Asset-Management-Reviewers" };

	@AttributeDefinition(name = "Lost or Stolen Property Form Report Viewers Group List", description = "List of groups whose member users can view Lost or Stolen Property Form Inbox Report")
	String[] lostorStolenPropertyFormViewersGroupList() default { "Asset-Management-Reviewers" };

	@AttributeDefinition(name = "Vehicle Release Form Report Viewers Group List", description = "List of groups whose member users can view Vehicle Release Form Inbox Report")
	String[] vehicleReleaseFormViewersGroupList() default { "Asset-Management-Reviewers" };
	
	@AttributeDefinition(name = "Off Campus Agreement Use Form Report Viewers Group List", description = "List of groups whose member users can view Off Campus Agreement Use Form Inbox Report")
	String[] offCampusAgreementUseFormViewersGroupList() default { "Asset-Management-Reviewers" };
	
	@AttributeDefinition(name = "Verification Request/Fee Form Report Viewers Group List", description = "List of groups whose member users can view Verification Request/Fee Form Inbox Report")
	String[] verificationReqFormViewersGroupList() default { "Verification-Request-Reviewers" };
	
	@AttributeDefinition(name = "Retroactive LOA Report Viewers Group List", description = "List of groups whose member users can view Retroactive LOA Inbox Report")
	String[] retroactiveLoaReportViewersGroupList() default { "Records-Office-Reviewers" };
	
	@AttributeDefinition(name = "Property Survey Form Report Viewers Group List", description = "List of groups whose member users can view Property Survey Form Inbox Report")
	String[] propertySurveyFormViewersGroupList() default { "Asset-Management-Reviewers" };

	@AttributeDefinition(name = "Property Transfer Form Report Viewers Group List", description = "List of groups whose member users can view Property Transfer Form Inbox Report")
	String[] propertyTransferFormViewersGroupList() default { "Asset-Management-Reviewers" };
	
	@AttributeDefinition(name = "Request For Invoice Form Report Viewers Group List", description = "List of groups whose member users can view Request For Invoice Form Inbox Report")
	String[] requestForInvoiceFormViewersGroupList() default { "RFI-ASFR-Reviewers" };

	@AttributeDefinition(name = "University Withdrawal Form Report Viewers Group List", description = "List of groups whose member users can view University Withdrawal Form Inbox Report")
	String[] universityWithdrawalFormViewersGroupList() default { "Registration-Unit-Reviewers" };

	@AttributeDefinition(name = "Designation University Cash Collection Form Report Viewers Group List", description = "List of groups whose member users can view Designation University Cash Collection Form Inbox Report")
	String[] designationUniversityCashCollectionFormViewersGroupList() default { "Director SFS Reviewers", "Controller-Reviewers" };
	
	@AttributeDefinition(name = "Authorization Driver Record Information Form Report Viewers Group List", description = "List of groups whose member users can view Authorization Driver Record Information Form Inbox Report")
	String[] authorizationDriverRecordInformationFormViewersGroupList() default { "UPD-Reviewers",
			"Risk-Management-Reviewers" };

	@AttributeDefinition(name = "Authorization To Use Privately Owned Vehicles Form Report Viewers Group List", description = "List of groups whose member users can view Authorization To Use Privately Owned Vehicles Form Inbox Report")
	String[] authorizationPrivateOwnedVehiclesFormViewersGroupList() default { "Risk-Management-Reviewers" };

	@AttributeDefinition(name = "Authorization Vehicle University Business Form Report Viewers Group List", description = "List of groups whose member users can view Authorization Vehicle University Business Form Inbox Report")
	String[] authorizationVehicleUniversityBusinessFormViewersGroupList() default { "Risk-Management-Reviewers" };

	@AttributeDefinition(name = "Parental/Guardian Consent Form for Use of Campus AI Services Form Report Viewers Group List", description = "List of groups whose member users can view Parental/Guardian Consent Form for Use of Campus AI Services Form Inbox Report")
	String[] parentalConsentAIFormViewersGroupList() default { "Records-Office-Reviewers" };
	
	@AttributeDefinition(name = "Dotted Line Non CHRS Form Report Viewers Group List", description = "List of groups whose member users can view Dotted Line Non CHRS Form Inbox Report")
	String[] dottedLineNonCHRSFormViewersGroupList() default { "ASC-ASI-Reviewers" };
		
	@AttributeDefinition(name = "Vendor Fee Waiver Reduction Form Report Viewers Group List", description = "List of groups whose member users can view Vendor Fee Waiver Reduction Form Inbox Report")
	String[] vendorFeeWaiverReductionFormViewersGroupList() default { "Facilities-Office-Reviewers" };


}