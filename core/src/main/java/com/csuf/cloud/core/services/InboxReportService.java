package com.csuf.cloud.core.services;

import org.apache.sling.api.resource.ResourceResolver;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonObject;

public interface InboxReportService {

	JsonObject getLeaveOfAbsenceReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getTempFacultyPayrollReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getNewPositionDescriptionStaffReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getNewPositionDescriptionManagerReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getEmployeeFeeWaiverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getDependentFeeWaiverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getOTSDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getDomesticPartnerTaxCertificationReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getShortAppEmployeeFeeWaiverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getCLRReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getPersonnelFileAccessReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getPersonnelActionNoticeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getCareerDevlopmentReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getConfirmationTicketReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getMiscPayrollReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getOTSDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count, String title);

	JsonObject getManualCDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getTimebaseChangeRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getCataLeaveDonationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getPayPlan1012Report(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getMPPReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getDOAReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getDockNoticeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getSPEReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getHourlyINTTimesheetReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getSpecialConsultantTimesheetReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getSTD682OTDistributedTimesheetReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getStudentTimesheetReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getSCWReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getAppealsInboxReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getMajorMinorChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getGradeChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getLateAddsReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getCatalogYearReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getFAERReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getPetitionReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getMPPJustificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getFARReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getTelecommutingReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getfinanceAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getDOAfinanceAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getCampusSolAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getHRAccessReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,

			int count);

	JsonObject getExcessUnitsReqReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getPRTBReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getFERPReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getSFSDReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getSFTSReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getTASubTSReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getTASubAFReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getChairDirectorAFReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getCBEDeclarationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getPilotScheduleReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getPETReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getSDVReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getTaxFilingReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getFamilySizeCertificateReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getCitizenshipVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getTEACHGrantRequirementCertReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getSummerLoanRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getStudentNonFilerCertificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getStudentProjectedYearIncomeAppealReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getFederalDirectGradPlusLoanReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getDependencyOverrideRenewalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getParentVerificationofNonFilingLetterReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getParentNonFilerCertificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getDependencyOverrideAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getSectionChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getRequestforTimeConflictApprovalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getFacultyAssignedTimeAgreementReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getParentAmendedTaxReturnJsonReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getImmigrationCitizenshipVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getFederalAidRefundVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getFacultySpecialConsultantStipendReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

    JsonObject getLoanStatusVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
    
    JsonObject getCalGrantTransferReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);

    JsonObject getIdentityAndStatementVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
    
    JsonObject getSAPAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
    
    JsonObject getUnitCapAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);

	JsonObject getAwardAdjustmentAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
    
	JsonObject getStudentW2StatementReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getVerificationOfNonFilingReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getFederalDirectPlusApplicationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getFederalDirectLoanRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getNonFilerCertificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getParentStatementOfNonSupportReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getDroneFlightRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getTDAExceptionFormUGReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getTDAExceptionFormGradReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getStudentBudgetAdjustmentAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getUnaccompaniedHomelessYouthVerificationHomeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getTitanCardReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getRequesttoCancelFAProcessingReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getStateUnivGrantAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getGoldenStateTeacherGrantCertReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getChafeeStudentSuccessPlanReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getVeteranStatusVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getSsnVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getPetitionforPGCreditReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getPetitionforGEVariationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getAssetInformationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getPensionRollOverReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getStudyAbroadAcademicTranscriptSubmissionReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getInvestmentRealEstateVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getFederalTaxReturnReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getFederalTaxReturnScheduleEReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getConcurrentEnrollmentAgreementFallReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getConcurrentEnrollmentAgreementSpringReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getHousingUpdateFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getBusinessSupplementFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);

	JsonObject getClassLabEquipProposalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getVoiceMovementProdRequestReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getGuestArtistProposalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getSpecialEventProposalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getfacultyTravelProposalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getPetitionforRetroactiveWithdrawalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getPosthumousDegreeApprovalReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getTeachGrantSupplementReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getFamilyCollegeEnrollmentVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getProjectedYearIncomeAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getFacultyAssignedTimeAgreementATGuidelinesReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getSelectiveServiceRegVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getParentDependentVerificationReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getVolunteerFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getPositionActionFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getDqAppealReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getNachaFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getAppealofaDeclinedFeeWaiverFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getNewAssetAcquisitionReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getLostStolenPropertyReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getVehicleReleaseReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
            WorkItem wItem, int count);
	
	JsonObject getOffCampusAgreementReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getVerificationReqFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getRetroactiveLeaveOfAbsenceReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getPropertySurveyFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getPropertyTransferFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject getRequestForInvoiceFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getUniversityWithdrawalFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getDesignationUniversityCashCollectionFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getAuthorizationDriverRecordInfoFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getAuthorizationPrivateOwnedVehiclesFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getAuthorizationVehicleUniversityBusinessFormReport(ResourceResolver resolver,
			WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);

	JsonObject getparentalConsentAIFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);
	
	JsonObject dottedLineNonCHRSFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);
	
	JsonObject vendorFeeWaiverReductionFormReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem, int count);


}
