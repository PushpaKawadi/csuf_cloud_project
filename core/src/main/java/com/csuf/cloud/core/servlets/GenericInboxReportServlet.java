package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.csuf.cloud.core.services.InboxReportService;

@Component(service = { Servlet.class }, immediate = true, property = {
		"service.description= Generic Inbox Report Servlet", "sling.servlet.paths=/bin/getInboxReport" })
public class GenericInboxReportServlet extends SlingSafeMethodsServlet {
	private static final long serialVersionUID = 1L;

	protected final Logger log = LoggerFactory.getLogger(getClass());

	@Reference
	private InboxReportService inboxReportService;

	public enum WorkflowType {
		MANUALCD_048, Pay_Plan, DOA, DOCK_NOTICE, STD_682, SPL_CONSULTANT, HOURLY_INT, STU_TIMESHEET, COURSE_WITHDRAWAL,
		APPEALS, LOA, MAJOR_MINOR_CHANGE, GRADE_CHANGE, LATE_ADDS, CATALOG_YEAR, FAER, PETITION, MPP_JUSTIFICATION, FAR,
		TELECOMMUTE, FARF, FIN_DOA, CSARF, HRARF, REQUEST_FOR_EXCESS_UNITS, PRTB, FERP, SFSD, SFTS, TA_SUB_TS,
		TA_SUB_AF, CHAIR_DIRECTOR_AF, CBE_DECLARATION, PILOT_980_SCHEDULE, PET, SDV, TAX_FILING_STATEMENT,
		FAMILY_SIZE_CERTIFICATE, CITIZENSHIP_VERIFICATION, TEACH_GRANT_REQUIREMENT_CERT, SUMMER_LOAN_REQUEST,
		STUDENT_NON_FILER_CERTIFICATION, STUDENT_PROJECTED_YEAR_INCOME_APPEAL, FEDERAL_DIRECT_GRAD_PLUS_LOAN,
		DEPENDENCY_OVERRIDE_RENEWAL, PARENT_VERIFICATION_OF_NON_FILING_LETTER, PARENT_NON_FILER_CERTIFICATION,
		DEPENDENCY_OVERRIDE_APPEAL, SECTION_CHANGE, REQUEST_FOR_TIME_CONFLICT_APPROVAL, FACULTY_ASSIGNED_TIME_AGREEMENT,
		AFTER_FACULTY_ASSIGNED_TIME_AGREEMENT, PARENT_AMENDED_TAX_RETURN, IMMIGRATION_CITIZENSHIP_VERIFICATION,
		FEDERAL_AID_REFUND_VERIFICATION, Upstream, FACULTY_SPECIAL_CONSULTANT_STIPEND, LOAN_STATUS_VERIFICATION,
		CAL_GRANT_TRANSFER, IDENTITY_VERIFICATION_AND_STATEMENT, SAP_APPEAL, UNIT_CAP_APPEAL, AWARD_ADJUSTMENT_APPEAL,
		STUDENT_W2_STATEMENT, VERIFICATION_OF_NON_FILING, FEDERAL_DIRECT_PLUS_APPLICATION, FEDERAL_DIRECT_LOAN_REQUEST,
		NON_FILER_CERTIFICATION, PARENT_STATEMENT_OF_NON_SUPPORT, DRONE_FLIGHT_REQUEST, TDA_EXCEPTION_FORM_UG,
		TDA_EXCEPTION_FORM_GRAD, STUDENT_BUDGET_ADJUSTMENT_APPEAL, UNACCOMPANIED_HOMELESS_YOUTH_VERIFICATION,
		TITAN_CARD, REQ_TO_CANCEL_FA_PROCESSING, STATE_UNIV_GRANT_APPEAL,
		GOLDEN_STATE_TEACHER_GRANT_CERTIFICATION_REQUEST_FORM, CHAFEE_STUDENT_SUCCESS_PLAN, VETERAN_STATUS_VERIFICATION,
		SSN_VERIFICATION, PETITION_FOR_PG_CREDIT, PETITION_FOR_GE_VARIATION, ASSET_INFORMATION, PENSION_ROLL_OVER,
		STUDY_ABROAD_ACADEMIC_TRANSCRIPT_SUBMISSION, INVESTMENT_REAL_ESTATE_VERIFICATION, FEDERAL_TAX_RETURN,
		FEDERAL_TAX_RETURN_SCHEDULE_E, CONCURRENT_ENROLLMENT_AGREEMENT_FALL, CONCURRENT_ENROLLMENT_AGREEMENT_SPRING,
		HOUSING_UPDATE_FORM, BUSINESS_SUPPLEMENT_FORM, CLASSROOM_LAB_EQUIPMENT_PROPOSAL, VOICE_MOVEMENT_PROD_REQUESTS,
		GUEST_ARTIST_PROPOSAL, SPECIAL_EVENT_PROPOSAL, FACULTY_STAFF_TRAVEL_PROPOSAL, PETITION_FOR_RETROACTIVE_WITHDRAWAL,
		POSTHUMOUS_DEGREE_APPROVAL, TEACH_GRANT_SUPPLEMENT, FAMILY_COLLEGE_ENROLLMENT_VERIFICATION, PROJECTED_YEAR_INCOME_APPEAL,
		FACULTY_ASSIGNED_TIME_AGREEMENT_AT_GUIDELINES, SELECTIVE_SERVICE_REG_VERIFICATION, PARENT_DEPENDENT_VERIFICATION, CSUF_VOLUNTEER_FORM,
		POSITION_ACTION_FORM, DQ_APPEAL, NACHA_FORM, APPEAL_OF_A_DECLINED_FEE_WAIVER_REQUEST,
		NEW_ASSET_ACQUISITION_FORM, LOST_STOLENT_PROPERTY_FORM, VEHICLE_RELEASE_FORM, OFF_CAMPUS_AGREEMENT_FORM,
		VERIFICATION_REQUEST_FEE,RETROACTIVE_LOA,PROPERTY_MANAGEMENT_REQUEST_PROPERTY_SURVEY_FORM, PROPERTY_TRANSFER_FORM,
		Request_For_Invoice_And_Interagency_Financial_Transaction_Form, Designation_As_University_Cash_Collection_Point, 
		University_Withdrawal_Form, Authorization_To_Use_Privately_Owned_Vehicles,
		Authorization_For_Release_of_Driver_Record_Information, Authorization_to_Drive_a_Vehicle_on_University_Business,
		Parental_Guardian_Consent_Form_for_Use_of_Campus_AI_Services,
		DOTTED_LINE_NON_CHRS_FORM, VENDOR_FEE_WAIVER_REDUCTION_FORM, Challenge_by_Examination;

		private WorkflowType() {
		}
	}
	

	private static final String ASSIGN_TASK_STEP = "forms:assigntask";
	private static final String CD048_WORKFLOW_NAME = "CD048 Student Asst Attendance";
	private static final String PAY_PLAN_WORKFLOW_NAME = "10/12 11/12 Pay Plan";
	private static final String DOA_WORKFLOW_NAME = "Delegation of Authority Change";
	private static final String DOCK_NOTICE_WORKFLOW_NAME = "Dock Notice";
	private static final String STD_682_TIMESHEET_WORKFLOW_NAME = "STD 682 Overtime - Distributed";
	private static final String SPL_CONSULTANT_TIMESHEET_WORKFLOW_NAME = "Special Consultant Timesheet";
	private static final String HOURLY_INT_TIMESHEET_WORKFLOW_NAME = "Hourly Intermittent Timesheet";
	private static final String STUDENT_TIMESHEET_WORKFLOW_NAME = "Student Timesheet Manual Entry";
	private static final String SCW_WORKFLOW_NAME = "Student Course Withdrawal";
	private static final String APPEALS_WORKFLOW_NAME = "Admissions Appeal";
	private static final String LOA_WORKFLOW_NAME = "Leave Of Absence";
	private static final String MAJOR_MINOR_CHANGE_WORKFLOW_NAME = "Major_Minor Change";
	private static final String GRADE_CHANGE_WORKFLOW_NAME = "Grade Change";
	private static final String LATE_ADDS_WORKFLOW_NAME = "LateAdds";
	private static final String CATALOG_YEAR_WORKFLOW_NAME = "Catalog Year";
	private static final String FAER_WORKFLOW_NAME = "Faculty Additional Employment Request";
	private static final String PETITION_A_WORKFLOW_NAME = "Petition A";
	private static final String PETITION_B_WORKFLOW_NAME = "Petition B";
	private static final String PETITION_C_WORKFLOW_NAME = "Petition C";
	private static final String MPP_JUSTIFICATION_WORKFLOW_NAME = "Mpp Justification";
	private static final String FAR_WORKFLOW_NAME = "Faculty Action Request";
	private static final String TELECOMMUTE_WORKFLOW_NAME = "Telecommuting Agreement";
	private static final String FARF_WORKFLOW_NAME = "Finance System Access Request";
	private static final String FIN_DOA_WORKFLOW_NAME = "DOA Finance Access Request Form";
	private static final String CAMPUS_SOL_WORKFLOW_NAME = "Campus Solution Access Request";
	private static final String HR_ARF_WORKFLOW_NAME = "HR Access Request Form";
	private static final String PRTB_WORKFLOW_NAME = "Pre-Retirement Reduction in Time Base Request";
	private static final String FERP_WORKFLOW_NAME = "Faculty Early Retirement Program Request";
	private static final String SFSD_WORKFLOW_NAME = "Substitute Faculty Appointment";
	private static final String SFTS_WORKFLOW_NAME = "Substitute Faculty Time Sheet";
	private static final String TA_SUB_TS_WORKFLOW_NAME = "Substitute TA Timesheet";
	private static final String TA_SUB_AF_WORKFLOW_NAME = "TA Substitute Appointment Form";
	private static final String CHAIR_DIRECTOR_AF_WORKFLOW_NAME = "Chair/Director Application";
	private static final String EXCESS_UNITS_GRAD_WORKFLOW_NAME = "Request for Excess Units - Graduate";
	private static final String EXCESS_UNITS_UNDERGRAD_WORKFLOW_NAME = "Request for Excess Units - UnderGraduate";
	private static final String CBE_DECLARATION_WORKFLOW_NAME = "CBE Declaration Form";
	private static final String PILOT_980_SCHEDULE_WORKFLOW_NAME = "Summer 9/80 Work Schedule Request";
	private static final String PET_WORKFLOW_NAME = "Payroll Expenditure Transfer";
	private static final String SDV_WORKFLOW_NAME = "Student Dependent Verification";
	private static final String PARENT_TAX_FILING_WORKFLOW_NAME = "Parent Tax Filing Statement";
	private static final String STUDENT_TAX_FILING_WORKFLOW_NAME = "Student Tax Filing Statement";
	private static final String PARENT_FAMILY_SIZE_CERTIFICATE_WORKFLOW_NAME = "Parent Family Size Certificate";
	private static final String STUDENT_FAMILY_SIZE_CERTIFICATE_WORKFLOW_NAME = "Student Family Size Certification";
	private static final String CITIZENSHIP_VERIFICATION_WORKFLOW_NAME = "Citizenship Verification";
	private static final String TEACH_GRANT_REQUIREMENT_CERT_WORKFLOW_NAME = "TEACH Grant Requirement Cert";
	private static final String SUMMER_LOAN_REQUEST_WORKFLOW_NAME = "Summer Loan Request";
	private static final String STUDENT_NON_FILER_CERTIFICATION_WORKFLOW_NAME = "Student Non Filer Certification";
	private static final String STUDENT_PROJECTED_YEAR_INCOME_APPEAL_WORKFLOW_NAME = "Student Projected Year Income Appeal";
	private static final String FEDERAL_DIRECT_GRAD_PLUS_LOAN_WORKFLOW_NAME = "Federal Direct Grad Plus Loan Application";
	private static final String DEPENDENCY_OVERRIDE_RENEWAL_WORKFLOW_NAME = "Dependency Override Renewal";
	private static final String PARENT_VERIFICATION_OF_NON_FILING_LETTER_WORKFLOW_NAME = "Parent Verification of Non-Filing Letter";
	private static final String PARENT_NON_FILER_CERTIFICATION_WORKFLOW_NAME = "Parent Nonfiler Certification";
	private static final String DEPENDENCY_OVERRIDE_APPEAL_WORKFLOW_NAME = "Dependency Override Appeal";
	private static final String SECTION_CHANGE_WORKFLOW_NAME = "Request for Section Change";
	private static final String REQUEST_FOR_TIME_CONFLICT_APPROVAL_WORKFLOW_NAME = "Request for Time Conflict Approval";
	private static final String FACULTY_ASSIGNED_TIME_AGREEMENT_WORKFLOW_NAME = "Faculty Assigned Time Agreement";
	private static final String AFTER_FACULTY_ASSIGNED_TIME_AGREEMENT = "After the Fact Evaluation";
	private static final String PARENT_AMENDED_TAX_RETURN_WORKFLOW_NAME = "Parent Amended Tax Return";
	private static final String IMMIGRATION_CITIZENSHIP_VERIFICATION_WORKFLOW_NAME = "Immigration Citizenship Verification";
	private static final String FEDERAL_AID_REFUND_VERIFICATION_WORKFLOW_NAME = "Federal Aid Refund Verification";
	private static final String FACULTY_SPECIAL_CONSULTANT_STIPEND_WORKFLOW_NAME = "Faculty Special Consultant Stipend";
	private static final String LOAN_STATUS_VERIFICATION_WORKFLOW_NAME = "Loan Status Verification";
	private static final String CAL_GRANT_TRANSFER_WORKFLOW_NAME = "Cal Grant Transfer Entitlement Verification";
    private static final String IDENTITY_VERIFICATION_AND_STATEMENT_WORKFLOW_NAME = "Identity Verification and Statement of Educational Purpose";
    private static final String SAP_APPEAL_WORKFLOW_NAME = "SAP Appeal";
    private static final String UNIT_CAP_APPEAL_WORKFLOW_NAME = "Unit Cap Appeal";
    private static final String AWARD_ADJUSTMENT_APPEAL_WORKFLOW_NAME = "Award Adjustment Appeal";
    private static final String STUDENT_W2_STATEMENT_WORKFLOW_NAME = "Student W2 Statement";
    private static final String VERIFICATION_OF_NON_FILING_WORKFLOW_NAME = "Verification of Non-Filing Letter";
    private static final String FEDERAL_DIRECT_PLUS_APPLICATION_WORKFLOW_NAME = "Federal Direct Plus Application";
    private static final String FEDERAL_DIRECT_LOAN_REQUEST_WORKFLOW_NAME = "Federal Direct Loan Request";
    private static final String PARENT_STATEMENT_OF_NON_SUPPORT_WORKFLOW_NAME = "Parent Statement Of Non-Support";
    private static final String DRONE_FLIGHT_REQUEST_WORKFLOW_NAME = "Drone Flight Request";
	private static final String TDA_EXCEPTION_FORM_UG_WORKFLOW_NAME = "TDA Exception Form";
	private static final String TDA_EXCEPTION_FORM_GRAD_WORKFLOW_NAME = "Graduate Advisor Request";
	private static final String STUDENT_BUDGET_ADJUSTMENT_APPEAL_WORKFLOW_NAME = "Student Budget Adjustment Appeal";
	private static final String STUDENT_AMENDED_TAX_RETURN_WORKFLOW_NAME = "Student Amended Tax Return";
	private static final String UNACCOMPANIED_HOMELESS_YOUTH_VERIFICATION_WORKFLOW_NAME = "Unaccompanied Homeless Youth Verification - Home";
	private static final String TITAN_CARD_STUDENT_WORKFLOW_NAME = "TitanCard Closed Account Request Form";
	private static final String TITAN_CARD_FACULTY_WORKFLOW_NAME = "TitanCard Closed Account Request (Faculty Form)";
	private static final String TITAN_CARD_FACULTY_STUDENT_WORKFLOW_NAME = "TitanCard Closed Account Request (Faculty & Student Form)";
	private static final String REQ_TO_CANCEL_FA_PROCESSING_WORKFLOW_NAME = "Request to cancel Financial Aid Processing";
	private static final String STATE_UNIV_GRANT_APPEAL_WORKFLOW_NAME = "State University Grant Appeal Form";
	private static final String GOLDEN_STATE_TEACHER_GRANT_CERTIFICATION_REQUEST_FORM_WORKFLOW_NAME = "Golden State Teacher Grant Certification";
	private static final String CHAFEE_STUDENT_SUCCESS_PLAN_WORKFLOW_NAME = "Chafee Student Success Plan";
	private static final String VETERAN_STATUS_VERIFICATION_WORKFLOW_NAME = "Veteran Status Verification";
	private static final String STUDENT_SSN_VERIFICATION_WORKFLOW_NAME = "Student Personal Data Verification";
	private static final String PARENT_SSN_VERIFICATION_WORKFLOW_NAME = "Parent Social Security Number Verification";
	private static final String PETITION_FOR_PG_CREDIT_WORKFLOW_NAME = "Petition for Postgraduate Credit";
	private static final String PETITION_FOR_GE_VARIATION_WORKFLOW_NAME = "Petition for General Education Variation";
	private static final String STUDENT_ASSET_INFORMATION_WORKFLOW_NAME = "Student Asset Information";
	private static final String PARENT_ASSET_INFORMATION_WORKFLOW_NAME = "Parent Asset Information";
	private static final String STUDENT_PENSION_ROLL_OVER_WORKFLOW_NAME = "Student Pension Roll Over";
	private static final String PARENT_PENSION_ROLL_OVER_WORKFLOW_NAME = "Parent Pension Roll Over";
	private static final String STUDY_ABROAD_ACADEMIC_TRANSCRIPT_SUBMISSION_WORKFLOW_NAME = "Study Abroad Academic Transcript Submission Form";
	private static final String STUDENT_INVESTMENT_REAL_ESTATE_VERIFICATION_WORKFLOW_NAME = "Student Investment/Real Estate Verification";
    private static final String PARENT_INVESTMENT_REAL_ESTATE_VERIFICATION_WORKFLOW_NAME = "Parent Investment/Real Estate Verification";
    private static final String STUDENT_FEDERAL_TAX_RETURN_WORKFLOW_NAME = "Student Spouse Federal Tax Return";
	private static final String PARENT_FEDERAL_TAX_RETURN_WORKFLOW_NAME = "Parent Spouse Federal Tax Return";
	private static final String PARENT_IMMIGRATION_CITIZENSHIP_VERIFICATION_WORKFLOW_NAME = "Parent Immigration Citizenship Verification";
	private static final String PARENT_W2_STATEMENT_WORKFLOW_NAME = "Parent W2 Statement";
	private static final String STUDENT_FEDERAL_TAX_RETURN_SCHEDULE_E_WORKFLOW_NAME = "Student Federal Tax Return Schedule E";
    private static final String PARENT_FEDERAL_TAX_RETURN_SCHEDULE_E_WORKFLOW_NAME = "Parent Federal Tax Return Schedule E";
    private static final String CONCURRENT_ENROLLMENT_AGREEMENT_FALL_WORKFLOW_NAME = "Concurrent Enrollment Agreement Fall";
    private static final String CONCURRENT_ENROLLMENT_AGREEMENT_SPRING_WORKFLOW_NAME = "Concurrent Enrollment Agreement Spring";
    private static final String HOUSING_UPDATE_FORM_WORKFLOW_NAME = "Housing Update Form";
    private static final String STUDENT_BUSINESS_SUPPLEMENT_FORM_WORKFLOW_NAME = "Student Business Supplement Form";
    private static final String PARENT_BUSINESS_SUPPLEMENT_FORM_WORKFLOW_NAME = "Parent Business Supplement Form";
    private static final String CLASSROOM_LAB_EQUIPMENT_PROPOSAL_WORKFLOW_NAME = "Classroom Lab Equipment Proposal Form";
	private static final String VOICE_MOVEMENT_PROD_REQUESTS_WORKFLOW_NAME = "Voice Movement Production Coaching Requests";
	private static final String GUEST_ARTIST_PROPOSAL_WORKFLOW_NAME = "Guest Artist Proposal";
	private static final String SPECIAL_EVENT_PROPOSAL_WORKFLOW_NAME = "Special Event Proposal";
	private static final String FACULTY_STAFF_TRAVEL_PROPOSAL_WORKFLOW_NAME = "Faculty/Staff Travel Proposal";
	private static final String PETITION_FOR_RETROACTIVE_WITHDRAWAL_WORKFLOW_NAME = "Petition for Retroactive Withdrawal";
	private static final String POSTHUMOUS_DEGREE_APPROVAL_WORKFLOW_NAME = "Posthumous Degree Approval";
	private static final String TEACH_GRANT_SUPPLEMENT_WORKFLOW_NAME = "Teach Grant Supplement Form";
	private static final String FAMILY_COLLEGE_ENROLLMENT_VERIFICATION_WORKFLOW_NAME = "Family College Enrollment Verification Form";
	private static final String PARENT_PROJECTED_YEAR_INCOME_APPEAL_WORKFLOW_NAME = "Parent Projected Year Income Appeal";
	private static final String FACULTY_ASSIGNED_TIME_AGREEMENT_AT_GUIDELINES_WORKFLOW_NAME = "Faculty Assigned Time Agreement [AT Guidelines]";
	private static final String SELECTIVE_SERVICE_REG_VERIFICATION_WORKFLOW_NAME = "Selective Service Registration Verification";
	private static final String PARENT_DEPENDENT_VERIFICATION_WORKFLOW_NAME = "Parent Dependent Verification";
	private static final String VOLUNTEER_FORM_WORKFLOW_NAME = "Volunteer Form";
	private static final String POSITION_ACTION_FORM_WORKFLOW_NAME = "Position Action Form";
	private static final String VOLUNTEER_FORM_ANONYMOUS_WORKFLOW_NAME = "CSUF Volunteer Form External";
	private static final String DQ_APPEAL_WORKFLOW_NAME = "DQ Appeal Form";
	private static final String NACHA_FORM_WORKFLOW_NAME = "NACHA Form";
	private static final String APPEAL_OF_A_DECLINED_FEE_WAIVER_REQUEST_WORKFLOW_NAME = "Appeal of a Declined Fee Waiver Request";
	private static final String NEW_ASSET_ACQUISITION_FORM_WORKFLOW_NAME = "New Asset Acquisition Form";
	private static final String LOST_STOLENT_PROPERTY_FORM_WORKFLOW_NAME = "Lost Or Stolen Property Form";
	private static final String VEHICLE_RELEASE_FORM_WORKFLOW_NAME = "Vehicle Release Form";
	private static final String OFF_CAMPUS_AGREEMENT_FORM_WORKFLOW_NAME = "Off Campus Agreement Use Form";
	private static final String VERIFICATION_REQUEST_FEE_WORKFLOW_NAME = "Verification Request";
	private static final String RETROACTIVE_LEAVE_OF_ABSENCE_WORKFLOW_NAME = "Retroactive Leave Of Absence";
	private static final String PROPEETY_SURVEY_FORM_WORKFLOW_NAME = "Property-Survey";
	private static final String PROPEETY_TRANSFER_FORM_WORKFLOW_NAME = "Property Transfer Request Form";
	private static final String REQUEST_FOR_INVOICE_FORM_WORKFLOW_NAME = "Request For Invoice / Interagency Financial Transaction";
	private static final String DESIGNATION_UNIVERSITY_CASH_COLLECTION_FORM_WORKFLOW_NAME = "Designation University Cash Collection Point";
	private static final String UNIVERSITY_WITHDRAWAL_FORM_WORKFLOW_NAME = "University Withdrawal Form";
	private static final String AUTHORIZATION_DRIVER_RECORD_INFO_FORM_WORKFLOW_NAME = "Authorization For Release of Driver Record Information";
	private static final String AUTHORIZATION_PRIVATE_OWNED_VEHICLE_FORM_WORKFLOW_NAME = "Authorization To Use Privately Owned Vehicles";
	private static final String AUTHORIZATION_VEHICLE_UNIVERSITY_BUSINESS_FORM_WORKFLOW_NAME = "Authorization to Drive a Vehicle on University Business Form";
	private static final String PARENTAL_CONSENT_AI_FORM_WORKFLOW_NAME = "Parental / Guardian Consent Form for Use of Campus AI Services";
	private static final String DOTTED_LINE_NON_CHRS_FORM_WORKFLOW_NAME = "Dotted Line Non CHRS";
	private static final String VENDOR_FEE_WAIVER_REDUCTION_FORM_WORKFLOW_NAME = "Vendor Fee Waiver / Reduction Form";
	private static final String CHALLENGE_BY_EXAMINATION_WORKFLOW_NAME = "Challenge by Examination";

	
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		log.info("Generic Servlet Start");

		WorkflowSession graniteWorkflowSession = null;
		ResourceResolver resolver = null;
		try {
			resolver = request.getResourceResolver();
			log.info("Anagha resolver="+resolver);
			graniteWorkflowSession = resolver.adaptTo(WorkflowSession.class);
			log.info("Anagha graniteWorkflowSession="+graniteWorkflowSession);
			String workflowType = request.getParameter("workflowType");
			log.info("Anagha workflowType="+workflowType);
			WorkItem[] workItems = graniteWorkflowSession.getActiveWorkItems();
			
			JsonArray jsonResponse = new JsonArray();
			JsonObject json = null;
			int count = 1;
			for (int i = 0; i < workItems.length; i++) {
				WorkItem wItem = workItems[i];
				String title = wItem.getWorkflow().getWorkflowModel().getTitle().trim();
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.MANUALCD_048.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(CD048_WORKFLOW_NAME)))) {
					json = inboxReportService.getManualCDReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.Pay_Plan.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(PAY_PLAN_WORKFLOW_NAME)))) {
					json = inboxReportService.getPayPlan1012Report(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.DOA.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(DOA_WORKFLOW_NAME)))) {
					json = inboxReportService.getDOAReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.DOCK_NOTICE.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(DOCK_NOTICE_WORKFLOW_NAME)))) {
					json = inboxReportService.getDockNoticeReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.STD_682.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(STD_682_TIMESHEET_WORKFLOW_NAME)))) {
					log.info("Pushpa inside method");
					json = inboxReportService.getSTD682OTDistributedTimesheetReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.SPL_CONSULTANT.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(SPL_CONSULTANT_TIMESHEET_WORKFLOW_NAME)))) {
					json = inboxReportService.getSpecialConsultantTimesheetReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.HOURLY_INT.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(HOURLY_INT_TIMESHEET_WORKFLOW_NAME)))) {
					json = inboxReportService.getHourlyINTTimesheetReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.STU_TIMESHEET.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(STUDENT_TIMESHEET_WORKFLOW_NAME)))) {
					json = inboxReportService.getStudentTimesheetReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.COURSE_WITHDRAWAL.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(SCW_WORKFLOW_NAME)))) {
					json = inboxReportService.getSCWReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.APPEALS.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(APPEALS_WORKFLOW_NAME)))) {
					json = inboxReportService.getAppealsInboxReport(resolver, graniteWorkflowSession, wItem, count);

					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.LOA.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(LOA_WORKFLOW_NAME)))) {
					json = inboxReportService.getLeaveOfAbsenceReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.MAJOR_MINOR_CHANGE.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(MAJOR_MINOR_CHANGE_WORKFLOW_NAME)))) {
					json = inboxReportService.getMajorMinorChangeReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.GRADE_CHANGE.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(GRADE_CHANGE_WORKFLOW_NAME)))) {
					json = inboxReportService.getGradeChangeReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.LATE_ADDS.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(LATE_ADDS_WORKFLOW_NAME)))) {
					json = inboxReportService.getLateAddsReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.CATALOG_YEAR.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(CATALOG_YEAR_WORKFLOW_NAME)))) {
					json = inboxReportService.getCatalogYearReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FAER.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FAER_WORKFLOW_NAME)))) {
					json = inboxReportService.getFAERReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PETITION.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PETITION_A_WORKFLOW_NAME) || title.contains(PETITION_B_WORKFLOW_NAME)
								|| title.contains(PETITION_C_WORKFLOW_NAME))) {
					json = inboxReportService.getPetitionReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.MPP_JUSTIFICATION.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(MPP_JUSTIFICATION_WORKFLOW_NAME)))) {
					json = inboxReportService.getMPPJustificationReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FAR.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FAR_WORKFLOW_NAME)))) {
					json = inboxReportService.getFARReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.TELECOMMUTE.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(TELECOMMUTE_WORKFLOW_NAME)))) {
					json = inboxReportService.getTelecommutingReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FARF.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FARF_WORKFLOW_NAME)))) {
					json = inboxReportService.getfinanceAccessReqReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FIN_DOA.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FIN_DOA_WORKFLOW_NAME)))) {
					json = inboxReportService.getDOAfinanceAccessReqReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.CSARF.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(CAMPUS_SOL_WORKFLOW_NAME)))) {
					json = inboxReportService.getCampusSolAccessReqReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.HRARF.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(HR_ARF_WORKFLOW_NAME)))) {
					json = inboxReportService.getHRAccessReqReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.REQUEST_FOR_EXCESS_UNITS.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(EXCESS_UNITS_GRAD_WORKFLOW_NAME))
								|| title.contains(EXCESS_UNITS_UNDERGRAD_WORKFLOW_NAME))) {
					json = inboxReportService.getExcessUnitsReqReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PRTB.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PRTB_WORKFLOW_NAME)))) {
					json = inboxReportService.getPRTBReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FERP.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FERP_WORKFLOW_NAME)))) {
					json = inboxReportService.getFERPReport(resolver, graniteWorkflowSession, wItem, count);

					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.SFSD.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(SFSD_WORKFLOW_NAME)))) {
					json = inboxReportService.getSFSDReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.SFTS.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(SFTS_WORKFLOW_NAME)))) {
					json = inboxReportService.getSFTSReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.TA_SUB_TS.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(TA_SUB_TS_WORKFLOW_NAME)))) {
					json = inboxReportService.getTASubTSReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.TA_SUB_AF.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(TA_SUB_AF_WORKFLOW_NAME)))) {
					json = inboxReportService.getTASubAFReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.CHAIR_DIRECTOR_AF.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(CHAIR_DIRECTOR_AF_WORKFLOW_NAME)))) {
					json = inboxReportService.getChairDirectorAFReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.CBE_DECLARATION.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(CBE_DECLARATION_WORKFLOW_NAME)))) {
					json = inboxReportService.getCBEDeclarationReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PILOT_980_SCHEDULE.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PILOT_980_SCHEDULE_WORKFLOW_NAME)))) {
					json = inboxReportService.getPilotScheduleReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PET.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PET_WORKFLOW_NAME)))) {
					json = inboxReportService.getPETReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.SDV.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(SDV_WORKFLOW_NAME)))) {
					json = inboxReportService.getSDVReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.TAX_FILING_STATEMENT.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& (title.contains(PARENT_TAX_FILING_WORKFLOW_NAME)
										|| title.contains(STUDENT_TAX_FILING_WORKFLOW_NAME))))) {
					json = inboxReportService.getTaxFilingReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FAMILY_SIZE_CERTIFICATE.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& (title.contains(PARENT_FAMILY_SIZE_CERTIFICATE_WORKFLOW_NAME)
										|| (title.contains(STUDENT_FAMILY_SIZE_CERTIFICATE_WORKFLOW_NAME)))))) {
					json = inboxReportService.getFamilySizeCertificateReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.CITIZENSHIP_VERIFICATION.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.equalsIgnoreCase(CITIZENSHIP_VERIFICATION_WORKFLOW_NAME))) {
					json = inboxReportService.getCitizenshipVerificationReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.TEACH_GRANT_REQUIREMENT_CERT.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(TEACH_GRANT_REQUIREMENT_CERT_WORKFLOW_NAME))) {
					json = inboxReportService.getTEACHGrantRequirementCertReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.SUMMER_LOAN_REQUEST.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(SUMMER_LOAN_REQUEST_WORKFLOW_NAME))) {
					json = inboxReportService.getSummerLoanRequestReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.STUDENT_NON_FILER_CERTIFICATION.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(STUDENT_NON_FILER_CERTIFICATION_WORKFLOW_NAME))) {
					json = inboxReportService.getStudentNonFilerCertificationReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.STUDENT_PROJECTED_YEAR_INCOME_APPEAL.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(STUDENT_PROJECTED_YEAR_INCOME_APPEAL_WORKFLOW_NAME))) {
					json = inboxReportService.getStudentProjectedYearIncomeAppealReport(resolver,
							graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FEDERAL_DIRECT_GRAD_PLUS_LOAN.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FEDERAL_DIRECT_GRAD_PLUS_LOAN_WORKFLOW_NAME))) {
					json = inboxReportService.getFederalDirectGradPlusLoanReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.DEPENDENCY_OVERRIDE_RENEWAL.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(DEPENDENCY_OVERRIDE_RENEWAL_WORKFLOW_NAME))) {
					json = inboxReportService.getDependencyOverrideRenewalReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PARENT_VERIFICATION_OF_NON_FILING_LETTER.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PARENT_VERIFICATION_OF_NON_FILING_LETTER_WORKFLOW_NAME))) {
					json = inboxReportService.getParentVerificationofNonFilingLetterReport(resolver,
							graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PARENT_NON_FILER_CERTIFICATION.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PARENT_NON_FILER_CERTIFICATION_WORKFLOW_NAME))) {
					json = inboxReportService.getParentNonFilerCertificationReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.DEPENDENCY_OVERRIDE_APPEAL.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(DEPENDENCY_OVERRIDE_APPEAL_WORKFLOW_NAME))) {
					json = inboxReportService.getDependencyOverrideAppealReport(resolver, graniteWorkflowSession, wItem,

							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.SECTION_CHANGE.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(SECTION_CHANGE_WORKFLOW_NAME))) {
					json = inboxReportService.getSectionChangeReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.REQUEST_FOR_TIME_CONFLICT_APPROVAL.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(REQUEST_FOR_TIME_CONFLICT_APPROVAL_WORKFLOW_NAME))) {
					json = inboxReportService.getRequestforTimeConflictApprovalReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FACULTY_ASSIGNED_TIME_AGREEMENT.name())
						&& wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& (title.contains(FACULTY_ASSIGNED_TIME_AGREEMENT_WORKFLOW_NAME) || title.contains(AFTER_FACULTY_ASSIGNED_TIME_AGREEMENT))) {
					json = inboxReportService.getFacultyAssignedTimeAgreementReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PARENT_AMENDED_TAX_RETURN.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PARENT_AMENDED_TAX_RETURN_WORKFLOW_NAME)
								|| (title.contains(STUDENT_AMENDED_TAX_RETURN_WORKFLOW_NAME))))) {
					json = inboxReportService.getParentAmendedTaxReturnJsonReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.IMMIGRATION_CITIZENSHIP_VERIFICATION.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(IMMIGRATION_CITIZENSHIP_VERIFICATION_WORKFLOW_NAME)
								|| (title.contains(PARENT_IMMIGRATION_CITIZENSHIP_VERIFICATION_WORKFLOW_NAME))))) {
					json = inboxReportService.getParentAmendedTaxReturnJsonReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FEDERAL_AID_REFUND_VERIFICATION.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FEDERAL_AID_REFUND_VERIFICATION_WORKFLOW_NAME))) {
					json = inboxReportService.getFederalAidRefundVerificationReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FACULTY_SPECIAL_CONSULTANT_STIPEND.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(FACULTY_SPECIAL_CONSULTANT_STIPEND_WORKFLOW_NAME))) {
					json = inboxReportService.getFacultySpecialConsultantStipendReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.LOAN_STATUS_VERIFICATION.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(LOAN_STATUS_VERIFICATION_WORKFLOW_NAME))) {
					json = inboxReportService.getLoanStatusVerificationReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
                        && workflowType.equalsIgnoreCase(WorkflowType.CAL_GRANT_TRANSFER.name())
                        && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                                && title.contains(CAL_GRANT_TRANSFER_WORKFLOW_NAME))) {
                    json = inboxReportService.getCalGrantTransferReport(resolver, graniteWorkflowSession,
                            wItem, count);
                    if (null != json && json.isJsonObject()) {
                        jsonResponse.add(json);
                        count += 1;
                    }
                }

                if (null != wItem && null != wItem.getItemSubType()
                        && workflowType.equalsIgnoreCase(WorkflowType.IDENTITY_VERIFICATION_AND_STATEMENT.name())
                        && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                                && title.contains(IDENTITY_VERIFICATION_AND_STATEMENT_WORKFLOW_NAME))) {
                    json = inboxReportService.getIdentityAndStatementVerificationReport(resolver, graniteWorkflowSession,
                            wItem, count);
                    if (null != json && json.isJsonObject()) {
                        jsonResponse.add(json);
                        count += 1;
                    }
                }
                
                if (null != wItem && null != wItem.getItemSubType()
                        && workflowType.equalsIgnoreCase(WorkflowType.SAP_APPEAL.name())
                        && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                                && title.contains(SAP_APPEAL_WORKFLOW_NAME))) {
                    json = inboxReportService.getSAPAppealReport(resolver, graniteWorkflowSession,
                            wItem, count);
                    if (null != json && json.isJsonObject()) {
                        jsonResponse.add(json);
                        count += 1;
                    }
                }
                
                if (null != wItem && null != wItem.getItemSubType()
                        && workflowType.equalsIgnoreCase(WorkflowType.UNIT_CAP_APPEAL.name())
                        && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                                && title.contains(UNIT_CAP_APPEAL_WORKFLOW_NAME))) {
                    json = inboxReportService.getUnitCapAppealReport(resolver, graniteWorkflowSession,
                            wItem, count);
                    if (null != json && json.isJsonObject()) {
                        jsonResponse.add(json);
                        count += 1;
                    }
                }
                
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.AWARD_ADJUSTMENT_APPEAL.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(AWARD_ADJUSTMENT_APPEAL_WORKFLOW_NAME))) {
					json = inboxReportService.getAwardAdjustmentAppealReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
			if (null != wItem && null != wItem.getItemSubType()
					&& workflowType.equalsIgnoreCase(WorkflowType.STUDENT_W2_STATEMENT.name())
					&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
							&& (title.contains(STUDENT_W2_STATEMENT_WORKFLOW_NAME)
									|| (title.contains(PARENT_W2_STATEMENT_WORKFLOW_NAME)))))) {
				json = inboxReportService.getStudentW2StatementReport(resolver, graniteWorkflowSession, wItem, count);
				if (null != json && json.isJsonObject()) {
					jsonResponse.add(json);
					count += 1;
				}
			}
                
                if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.VERIFICATION_OF_NON_FILING.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
								.contains(VERIFICATION_OF_NON_FILING_WORKFLOW_NAME)
								|| (title.contains(PARENT_VERIFICATION_OF_NON_FILING_LETTER_WORKFLOW_NAME)))))) {
					json = inboxReportService.getVerificationOfNonFilingReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}   
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.FEDERAL_DIRECT_PLUS_APPLICATION.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(FEDERAL_DIRECT_PLUS_APPLICATION_WORKFLOW_NAME))) {
                json = inboxReportService.getFederalDirectPlusApplicationReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            } 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.FEDERAL_DIRECT_LOAN_REQUEST.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(FEDERAL_DIRECT_LOAN_REQUEST_WORKFLOW_NAME))) {
                json = inboxReportService.getFederalDirectLoanRequestReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            } 
            
            if (null != wItem && null != wItem.getItemSubType()
					&& workflowType.equalsIgnoreCase(WorkflowType.NON_FILER_CERTIFICATION.name())
					&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
							.contains(STUDENT_NON_FILER_CERTIFICATION_WORKFLOW_NAME)
							|| (title.contains(PARENT_NON_FILER_CERTIFICATION_WORKFLOW_NAME)))))) {
				json = inboxReportService.getNonFilerCertificationReport(resolver, graniteWorkflowSession, wItem,
						count);
				if (null != json && json.isJsonObject()) {
					jsonResponse.add(json);
					count += 1;
				}
			} 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.PARENT_STATEMENT_OF_NON_SUPPORT.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(PARENT_STATEMENT_OF_NON_SUPPORT_WORKFLOW_NAME))) {
                json = inboxReportService.getParentStatementOfNonSupportReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.DRONE_FLIGHT_REQUEST.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(DRONE_FLIGHT_REQUEST_WORKFLOW_NAME))) {
                json = inboxReportService.getDroneFlightRequestReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.TDA_EXCEPTION_FORM_UG.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(TDA_EXCEPTION_FORM_UG_WORKFLOW_NAME))) {
                json = inboxReportService.getTDAExceptionFormUGReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.TDA_EXCEPTION_FORM_GRAD.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(TDA_EXCEPTION_FORM_GRAD_WORKFLOW_NAME))) {
                json = inboxReportService.getTDAExceptionFormGradReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.STUDENT_BUDGET_ADJUSTMENT_APPEAL.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(STUDENT_BUDGET_ADJUSTMENT_APPEAL_WORKFLOW_NAME))) {
                json = inboxReportService.getStudentBudgetAdjustmentAppealReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.UNACCOMPANIED_HOMELESS_YOUTH_VERIFICATION.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(UNACCOMPANIED_HOMELESS_YOUTH_VERIFICATION_WORKFLOW_NAME))) {
                json = inboxReportService.getUnaccompaniedHomelessYouthVerificationHomeReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            } 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.TITAN_CARD.name())
                    && ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
							.contains(TITAN_CARD_STUDENT_WORKFLOW_NAME)
							|| (title.contains(TITAN_CARD_FACULTY_WORKFLOW_NAME))
							|| (title.contains(TITAN_CARD_FACULTY_STUDENT_WORKFLOW_NAME)))))) {
                json = inboxReportService.getTitanCardReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            } 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.REQ_TO_CANCEL_FA_PROCESSING.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(REQ_TO_CANCEL_FA_PROCESSING_WORKFLOW_NAME))) {
                json = inboxReportService.getRequesttoCancelFAProcessingReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            } 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.STATE_UNIV_GRANT_APPEAL.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(STATE_UNIV_GRANT_APPEAL_WORKFLOW_NAME))) {
                json = inboxReportService.getStateUnivGrantAppealReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.GOLDEN_STATE_TEACHER_GRANT_CERTIFICATION_REQUEST_FORM.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(GOLDEN_STATE_TEACHER_GRANT_CERTIFICATION_REQUEST_FORM_WORKFLOW_NAME))) {
                json = inboxReportService.getGoldenStateTeacherGrantCertReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            } 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.CHAFEE_STUDENT_SUCCESS_PLAN.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(CHAFEE_STUDENT_SUCCESS_PLAN_WORKFLOW_NAME))) {
                json = inboxReportService.getChafeeStudentSuccessPlanReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.VETERAN_STATUS_VERIFICATION.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(VETERAN_STATUS_VERIFICATION_WORKFLOW_NAME))) {
                json = inboxReportService.getVeteranStatusVerificationReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
					&& workflowType.equalsIgnoreCase(WorkflowType.SSN_VERIFICATION.name())
					&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
							.contains(STUDENT_SSN_VERIFICATION_WORKFLOW_NAME)
							|| (title.contains(PARENT_SSN_VERIFICATION_WORKFLOW_NAME)))))) {
				json = inboxReportService.getSsnVerificationReport(resolver, graniteWorkflowSession, wItem,
						count);
				if (null != json && json.isJsonObject()) {
					jsonResponse.add(json);
					count += 1;
				}
			}  
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.PETITION_FOR_PG_CREDIT.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(PETITION_FOR_PG_CREDIT_WORKFLOW_NAME))) {
                json = inboxReportService.getPetitionforPGCreditReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.PETITION_FOR_GE_VARIATION.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(PETITION_FOR_GE_VARIATION_WORKFLOW_NAME))) {
                json = inboxReportService.getPetitionforGEVariationReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
            if (null != wItem && null != wItem.getItemSubType()
					&& workflowType.equalsIgnoreCase(WorkflowType.ASSET_INFORMATION.name())
					&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
							.contains(STUDENT_ASSET_INFORMATION_WORKFLOW_NAME)
							|| (title.contains(PARENT_ASSET_INFORMATION_WORKFLOW_NAME)))))) {
				json = inboxReportService.getAssetInformationReport(resolver, graniteWorkflowSession, wItem,
						count);
				if (null != json && json.isJsonObject()) {
					jsonResponse.add(json);
					count += 1;
				}
			} 
            
            if (null != wItem && null != wItem.getItemSubType()
					&& workflowType.equalsIgnoreCase(WorkflowType.PENSION_ROLL_OVER.name())
					&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
							.contains(STUDENT_PENSION_ROLL_OVER_WORKFLOW_NAME)
							|| (title.contains(PARENT_PENSION_ROLL_OVER_WORKFLOW_NAME)))))) {
				json = inboxReportService.getPensionRollOverReport(resolver, graniteWorkflowSession, wItem,
						count);
				if (null != json && json.isJsonObject()) {
					jsonResponse.add(json);
					count += 1;
				}
			} 
            
            if (null != wItem && null != wItem.getItemSubType()
                    && workflowType.equalsIgnoreCase(WorkflowType.STUDY_ABROAD_ACADEMIC_TRANSCRIPT_SUBMISSION.name())
                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
                            && title.contains(STUDY_ABROAD_ACADEMIC_TRANSCRIPT_SUBMISSION_WORKFLOW_NAME))) {
                json = inboxReportService.getStudyAbroadAcademicTranscriptSubmissionReport(resolver, graniteWorkflowSession,
                        wItem, count);
                if (null != json && json.isJsonObject()) {
                    jsonResponse.add(json);
                    count += 1;
                }
            }
            
			if (null != wItem && null != wItem.getItemSubType()
					&& workflowType.equalsIgnoreCase(WorkflowType.INVESTMENT_REAL_ESTATE_VERIFICATION.name())
					&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
							&& (title.contains(STUDENT_INVESTMENT_REAL_ESTATE_VERIFICATION_WORKFLOW_NAME)
									|| (title.contains(PARENT_INVESTMENT_REAL_ESTATE_VERIFICATION_WORKFLOW_NAME)))))) {
				json = inboxReportService.getInvestmentRealEstateVerificationReport(resolver, graniteWorkflowSession,
						wItem, count);
				if (null != json && json.isJsonObject()) {
					jsonResponse.add(json);
					count += 1;
				}
			}
			
			 if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FEDERAL_TAX_RETURN.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
								.contains(STUDENT_FEDERAL_TAX_RETURN_WORKFLOW_NAME)
								|| (title.contains(PARENT_FEDERAL_TAX_RETURN_WORKFLOW_NAME)))))) {
					json = inboxReportService.getFederalTaxReturnReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				} 
			 
			 if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.FEDERAL_TAX_RETURN_SCHEDULE_E.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
								.contains(STUDENT_FEDERAL_TAX_RETURN_SCHEDULE_E_WORKFLOW_NAME)
								|| (title.contains(PARENT_FEDERAL_TAX_RETURN_SCHEDULE_E_WORKFLOW_NAME)))))) {
					json = inboxReportService.getFederalTaxReturnScheduleEReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				} 
			 
			 if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.CONCURRENT_ENROLLMENT_AGREEMENT_FALL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(CONCURRENT_ENROLLMENT_AGREEMENT_FALL_WORKFLOW_NAME))) {
	                json = inboxReportService.getConcurrentEnrollmentAgreementFallReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
			 
			 if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.CONCURRENT_ENROLLMENT_AGREEMENT_SPRING.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(CONCURRENT_ENROLLMENT_AGREEMENT_SPRING_WORKFLOW_NAME))) {
	                json = inboxReportService.getConcurrentEnrollmentAgreementSpringReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
			 
			 if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.HOUSING_UPDATE_FORM.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(HOUSING_UPDATE_FORM_WORKFLOW_NAME))) {
	                json = inboxReportService.getHousingUpdateFormReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
			 
			 if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.BUSINESS_SUPPLEMENT_FORM.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
								.contains(STUDENT_BUSINESS_SUPPLEMENT_FORM_WORKFLOW_NAME)
								|| (title.contains(PARENT_BUSINESS_SUPPLEMENT_FORM_WORKFLOW_NAME)))))) {
					json = inboxReportService.getBusinessSupplementFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
			 
			 
			 if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.CLASSROOM_LAB_EQUIPMENT_PROPOSAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(CLASSROOM_LAB_EQUIPMENT_PROPOSAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getClassLabEquipProposalReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.VOICE_MOVEMENT_PROD_REQUESTS.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(VOICE_MOVEMENT_PROD_REQUESTS_WORKFLOW_NAME))) {
	                json = inboxReportService.getVoiceMovementProdRequestReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.GUEST_ARTIST_PROPOSAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(GUEST_ARTIST_PROPOSAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getGuestArtistProposalReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.SPECIAL_EVENT_PROPOSAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(SPECIAL_EVENT_PROPOSAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getSpecialEventProposalReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.FACULTY_STAFF_TRAVEL_PROPOSAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(FACULTY_STAFF_TRAVEL_PROPOSAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getfacultyTravelProposalReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.PETITION_FOR_RETROACTIVE_WITHDRAWAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(PETITION_FOR_RETROACTIVE_WITHDRAWAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getPetitionforRetroactiveWithdrawalReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.POSTHUMOUS_DEGREE_APPROVAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(POSTHUMOUS_DEGREE_APPROVAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getPosthumousDegreeApprovalReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.TEACH_GRANT_SUPPLEMENT.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(TEACH_GRANT_SUPPLEMENT_WORKFLOW_NAME))) {
	                json = inboxReportService.getTeachGrantSupplementReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.FAMILY_COLLEGE_ENROLLMENT_VERIFICATION.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(FAMILY_COLLEGE_ENROLLMENT_VERIFICATION_WORKFLOW_NAME))) {
	                json = inboxReportService.getFamilyCollegeEnrollmentVerificationReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PROJECTED_YEAR_INCOME_APPEAL.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP) && (title
								.contains(STUDENT_PROJECTED_YEAR_INCOME_APPEAL_WORKFLOW_NAME)
								|| (title.contains(PARENT_PROJECTED_YEAR_INCOME_APPEAL_WORKFLOW_NAME)))))) {
					json = inboxReportService.getProjectedYearIncomeAppealReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.FACULTY_ASSIGNED_TIME_AGREEMENT_AT_GUIDELINES.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(FACULTY_ASSIGNED_TIME_AGREEMENT_AT_GUIDELINES_WORKFLOW_NAME))) {
	                json = inboxReportService.getFacultyAssignedTimeAgreementATGuidelinesReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.SELECTIVE_SERVICE_REG_VERIFICATION.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(SELECTIVE_SERVICE_REG_VERIFICATION_WORKFLOW_NAME))) {
	                json = inboxReportService.getSelectiveServiceRegVerificationReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.PARENT_DEPENDENT_VERIFICATION.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(PARENT_DEPENDENT_VERIFICATION_WORKFLOW_NAME))) {
	                json = inboxReportService.getParentDependentVerificationReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.CSUF_VOLUNTEER_FORM.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& (title.contains(VOLUNTEER_FORM_WORKFLOW_NAME)
										|| (title.contains(VOLUNTEER_FORM_ANONYMOUS_WORKFLOW_NAME)))))) {
					json = inboxReportService.getVolunteerFormReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.POSITION_ACTION_FORM.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(POSITION_ACTION_FORM_WORKFLOW_NAME))) {
	                json = inboxReportService.getPositionActionFormReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.DQ_APPEAL.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(DQ_APPEAL_WORKFLOW_NAME))) {
	                json = inboxReportService.getDqAppealReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.NACHA_FORM.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(NACHA_FORM_WORKFLOW_NAME))) {
	                json = inboxReportService.getNachaFormReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
	            
	            if (null != wItem && null != wItem.getItemSubType()
	                    && workflowType.equalsIgnoreCase(WorkflowType.APPEAL_OF_A_DECLINED_FEE_WAIVER_REQUEST.name())
	                    && (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
	                            && title.contains(APPEAL_OF_A_DECLINED_FEE_WAIVER_REQUEST_WORKFLOW_NAME))) {
	                json = inboxReportService.getAppealofaDeclinedFeeWaiverFormReport(resolver, graniteWorkflowSession,
	                        wItem, count);
	                if (null != json && json.isJsonObject()) {
	                    jsonResponse.add(json);
	                    count += 1;
	                }
	            }
            
	            if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.NEW_ASSET_ACQUISITION_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(NEW_ASSET_ACQUISITION_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getNewAssetAcquisitionReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.LOST_STOLENT_PROPERTY_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(LOST_STOLENT_PROPERTY_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getLostStolenPropertyReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.VEHICLE_RELEASE_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(VEHICLE_RELEASE_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getVehicleReleaseReport(resolver, graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.OFF_CAMPUS_AGREEMENT_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(OFF_CAMPUS_AGREEMENT_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getOffCampusAgreementReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
 
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.VERIFICATION_REQUEST_FEE.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(VERIFICATION_REQUEST_FEE_WORKFLOW_NAME))) {
					json = inboxReportService.getVerificationReqFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.RETROACTIVE_LOA.name())
						&& ((wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.matches(RETROACTIVE_LEAVE_OF_ABSENCE_WORKFLOW_NAME)))) {
					json = inboxReportService.getRetroactiveLeaveOfAbsenceReport(resolver, graniteWorkflowSession,
							wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType
								.equalsIgnoreCase(WorkflowType.PROPERTY_MANAGEMENT_REQUEST_PROPERTY_SURVEY_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PROPEETY_SURVEY_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getPropertySurveyFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.PROPERTY_TRANSFER_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PROPEETY_TRANSFER_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getPropertyTransferFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(
								WorkflowType.Request_For_Invoice_And_Interagency_Financial_Transaction_Form.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(REQUEST_FOR_INVOICE_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getRequestForInvoiceFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType
								.equalsIgnoreCase(WorkflowType.Designation_As_University_Cash_Collection_Point.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(DESIGNATION_UNIVERSITY_CASH_COLLECTION_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getDesignationUniversityCashCollectionFormReport(resolver,
							graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.University_Withdrawal_Form.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(UNIVERSITY_WITHDRAWAL_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getUniversityWithdrawalFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(
								WorkflowType.Authorization_For_Release_of_Driver_Record_Information.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(AUTHORIZATION_DRIVER_RECORD_INFO_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getAuthorizationDriverRecordInfoFormReport(resolver,
							graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType
								.equalsIgnoreCase(WorkflowType.Authorization_To_Use_Privately_Owned_Vehicles.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(AUTHORIZATION_PRIVATE_OWNED_VEHICLE_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getAuthorizationPrivateOwnedVehiclesFormReport(resolver,
							graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(
								WorkflowType.Authorization_to_Drive_a_Vehicle_on_University_Business.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(AUTHORIZATION_VEHICLE_UNIVERSITY_BUSINESS_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getAuthorizationVehicleUniversityBusinessFormReport(resolver,
							graniteWorkflowSession, wItem, count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}

				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(
								WorkflowType.Parental_Guardian_Consent_Form_for_Use_of_Campus_AI_Services.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(PARENTAL_CONSENT_AI_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.getparentalConsentAIFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.DOTTED_LINE_NON_CHRS_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(DOTTED_LINE_NON_CHRS_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.dottedLineNonCHRSFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.VENDOR_FEE_WAIVER_REDUCTION_FORM.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(VENDOR_FEE_WAIVER_REDUCTION_FORM_WORKFLOW_NAME))) {
					json = inboxReportService.vendorFeeWaiverReductionFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}
				
				/*if (null != wItem && null != wItem.getItemSubType()
						&& workflowType.equalsIgnoreCase(WorkflowType.Challenge_by_Examination.name())
						&& (wItem.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)
								&& title.contains(CHALLENGE_BY_EXAMINATION_WORKFLOW_NAME))) {
					json = inboxReportService.challengeByExaminationFormReport(resolver, graniteWorkflowSession, wItem,
							count);
					if (null != json && json.isJsonObject()) {
						jsonResponse.add(json);
						count += 1;
					}
				}*/

				
			}

			log.debug("total WorkItems count is: {}", count);
			response.getWriter().write(jsonResponse.toString());
			response.setContentType("application/json");
		} catch (WorkflowException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (graniteWorkflowSession != null) {
				graniteWorkflowSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
		}
	}
}
