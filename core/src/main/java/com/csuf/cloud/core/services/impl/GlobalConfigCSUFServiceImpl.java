package com.csuf.cloud.core.services.impl;

import java.util.Arrays;
import java.util.List;

import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.csuf.cloud.core.config.GlobalConfigAEMCSU;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.vo.WorkflowVO;

@Component(service = GlobalConfigCSUFService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Global Config Filenet Service", Constants.SERVICE_RANKING + ":Integer=500"})

@Designate(ocd = GlobalConfigAEMCSU.class)
public class GlobalConfigCSUFServiceImpl implements GlobalConfigCSUFService {

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	private GlobalConfigAEMCSU configNew;

	@Reference
	private EmailService emailService;

	// Inject a Sling ResourceResolverFactory
	@Reference
	private ResourceResolverFactory resolverFactory;

	@Activate
	public void activate(GlobalConfigAEMCSU configNew) {
		this.configNew = configNew;
	}

	@Override
	public String getGradeChangeFilenetURL() {
		log.debug("Filenet Value=" + configNew.grade_Change_Filenet_URL());
		return configNew.grade_Change_Filenet_URL();
	}

	@Override
	public String getAEMFormsDatabaseSource() {
		log.debug("Database Value=" + configNew.aem_Forms_Datasource());
		return configNew.aem_Forms_Datasource();
	}

	@Override
	public String gcEmailFromAddress() {
		return configNew.gcEmailFromAddress();
	}

	@Override
	public List<String> gcEmailToAddresses() {
		return Arrays.asList(configNew.gcEmailToAddresses());
	}

	@Override
	public List<String> gcEmailCcAddresses() {
		return Arrays.asList(configNew.gcEmailCcAddresses());
	}

	@Override
	public List<String> gcEmailBccAddresses() {
		return Arrays.asList(configNew.gcEmailBccAddresses());
	}

	@Override
	public String gcEmailSubject() {
		return configNew.gcEmailSubject();
	}

	@Override
	public String gcEmailTemplatePath() {
		return configNew.gcEmailTemplatePath();
	}

	@Override
	public String gcEmailEmbeddedImagePath() {
		return configNew.gcEmailEmbeddedImagePath();
	}

	@Override
	public boolean isGCEmailAfterFailure() {
		return configNew.isGCEmailAfterFailure();
	}

	@Override
	public List<String> sendGradeChangeEmails(WorkflowVO workflowVO) {
		List<String> emailFailureList = emailService.sendEmail(workflowVO.getEmailVO());

		if (null != emailFailureList && !emailFailureList.isEmpty()) {
			log.debug("Email sending failed to the recipients: ".concat(emailFailureList.toString()));
		} else if (null != emailFailureList && emailFailureList.isEmpty()) {
			log.debug("Email sent successfully to ".concat(workflowVO.getEmailVO().getToAddress().toString()));
		} else {
			log.debug("Email sending failed");
		}
		return emailFailureList;
	}

	public String getMajorMinorFilenetURL() {
		log.debug("Filenet Value=" + configNew.major_Minor_Change_FileNet_URL());
		return configNew.major_Minor_Change_FileNet_URL();
	}

	@Override
	public String getNewPositionStaffFilenetURL() {
		log.debug("Filenet Value=" + configNew.new_Position_Staff_FileNet_URL());
		return configNew.new_Position_Staff_FileNet_URL();
	}

	public String getHRBenefitsFilenetURL() {
		log.debug("HR Benefits Filenet Value=" + configNew.hr_Benefits_Filenet_URL());
		return configNew.hr_Benefits_Filenet_URL();
	}

	@Override
	public String getLateAddsFilenetURL() {
		log.debug("Filenet Value=" + configNew.late_Adds_FileNet_URL());
		return configNew.late_Adds_FileNet_URL();
	}

	public String getLeaveOfAbsenceFilenetURL() {
		log.debug("Filnet Value LOA=" + configNew.leave_Of_Absence_FileNet_URL());
		return configNew.leave_Of_Absence_FileNet_URL();
	}

	public String getIncompleteGradeFilenetURL() {
		log.debug("Incomplete(I) Grade Filnet Value=" + configNew.incomplete_Grade_FileNet_URL());
		return configNew.incomplete_Grade_FileNet_URL();
	}

	public String getLORFilenetURL() {
		log.debug("LOR Filnet Value=" + configNew.lor_FileNet_URL());
		return configNew.lor_FileNet_URL();
	}

	public String getNewPDManagerFilenetURL() {
		log.debug("New PD Manager Filenet Value=" + configNew.new_PD_Manager_FileNet_URL());
		return configNew.new_PD_Manager_FileNet_URL();
	}

	public String getAppealFilenetURL() {
		log.debug("Appeal Filnet Value=" + configNew.appeal_FileNet_URL());
		return configNew.appeal_FileNet_URL();
	}

	public String getCatalogYearFilenetURL() {
		log.debug("Catalog year Filnet Value=" + configNew.catalog_year_FileNet_URL());
		return configNew.catalog_year_FileNet_URL();
	}

	public String getPetitionFilenetURL() {
		log.debug("Petition Filnet Value=" + configNew.petition_FileNet_URL());
		return configNew.petition_FileNet_URL();
	}

	@Override
	public String getMppFilenetURL() {
		log.debug("MPP Filenet Value=" + configNew.mpp_filenet_URL());
		return configNew.mpp_filenet_URL();
	}

	@Override
	public String getFilenetURL() {
		log.debug("Filenet Value=" + configNew.filenet_URL());
		return configNew.filenet_URL();
	}

	@Override
	public String getStaffEvalFilenetURL() {
		log.debug("Staff Eval Filenet Value=" + configNew.staff_eval_filenet_URL());
		return configNew.staff_eval_filenet_URL();
	}

	@Override
	public String[] studentLDAPAttributes() {
		return configNew.studentLDAPAttaributes();
	}

	@Override
	public String[] facultyLDAPAttributes() {
		return configNew.facultyLDAPAttaributes();
	}

	@Override
	public String[] whitelistedURLPathsForAnonymousAccess() {
		return configNew.whitelistedURLPathsForAnonymousAccess();
	}

	@Override
	public String getFinancialAidFilenetURL() {
		log.debug("Financial Aid Filenet Value=" + configNew.financial_aid_filenet_URL());
		return configNew.financial_aid_filenet_URL();
	}

	@Override
	public String getRequestForExcessUnitsFilenetURL() {
		log.debug("Request For Excess Units - Graduate and Undergraduate Filenet Value="
				+ configNew.request_for_excess_units_filenet_URL());
		return configNew.request_for_excess_units_filenet_URL();
	}

	@Override
	public String getCBEDeclarationFilenetURL() {
		log.debug("CBE Declaration Filenet Value=" + configNew.cbe_declaration_filenet_URL());
		return configNew.cbe_declaration_filenet_URL();
	}

	@Override
	public String getPayrollExpenditureTransferFilenetURL() {
		log.debug("Payroll Expenditure Transfer=" + configNew.payroll_expenditure_transfer_URL());
		return configNew.payroll_expenditure_transfer_URL();
	}

	@Override
	public String getARFFilenetURL() {
		log.debug("ARF Filenet Value=" + configNew.arf_filenet_URL());
		return configNew.arf_filenet_URL();
	}

	@Override
	public String getAllFinancialAidsFilenetURL() {
		log.debug("All Financial Aid Filenet Value=" + configNew.financial_aids_filenet_URL());
		return configNew.financial_aids_filenet_URL();
	}

	@Override
	public String getHRCovidSelfCertificationFilenetURL() {
		log.debug("HR COVID Self Certification Filenet Value=" + configNew.hr_covid_self_certification_URL());
		return configNew.hr_covid_self_certification_URL();
	}

	@Override
	public String getRequestForTimeConflictApprovalFilenetURL() {
		log.debug("Request for Time Conflict Approval Filenet Value=" + configNew.request_for_time_conflict_URL());
		return configNew.request_for_time_conflict_URL();
	}

	@Override
	public String getRequestForSectionChangeFilenetURL() {
		log.debug("Request for Section Change Filenet Value=" + configNew.request_for_section_change_URL());
		return configNew.request_for_section_change_URL();
	}

	@Override
	public String getFacultySpecialConsultantStipendFilenetURL() {
		log.debug("Faculty Special Consultant Stipend Filenet Value="
				+ configNew.faculty_spl_consultant_stipend_form_URL());
		return configNew.faculty_spl_consultant_stipend_form_URL();
	}

	@Override
	public String getATGuidelinesFilenetURL() {
		log.debug("AT Guidelines Filenet Value=" + configNew.at_guidelines_form_URL());
		return configNew.at_guidelines_form_URL();
	}
	
	@Override
	public String getTDAExceptionUndergraduateFilenetURL() {
		log.debug("TDA Exception Form (Undergraduate) Filenet Value=" + configNew.tda_exception_under__grad_URL());
		return configNew.tda_exception_under__grad_URL();
	}
	
	@Override
	public String getTDAExceptionGraduateFilenetURL() {
		log.debug("TDA Exception Form (Graduate) Filenet Value=" + configNew.tda_exception__grad_URL());
		return configNew.tda_exception__grad_URL();
	}
	
	@Override
	public String getTitanCardFilenetURl() {
		log.debug("Titan Card Filenet Value=" + configNew.titan_card_URL());
		return configNew.titan_card_URL();
	}
	
	
	@Override
	public String getTheatreAndDanceFilenetURL() {
		log.debug("Theatre And Dance Filenet Value=" + configNew.theatre_and_dance_filenet_URL());
		return configNew.theatre_and_dance_filenet_URL();
	}
	
	@Override
	public String getTitanCardAtriumAPIUsernameandPassword() {
		return configNew.titan_card_atrium_api_username_and_password();
	}
	
	@Override
	public String getTitanCardAtriumAPIURL() {
		log.debug("Titan Card Atrium API Value=" + configNew.titan_card_atrium_api_filenet_URL());
		return configNew.titan_card_atrium_api_filenet_URL();
	}
	
	@Override
	public String getPosthumousDegreeApprovalFilenetURL() {
		log.debug("Posthumous Degree Approval Filenet URL Value=" + configNew.posthumous_degree_approval_filenet_URL());
		return configNew.posthumous_degree_approval_filenet_URL();
	}
	
	@Override
	public String getDQAppealFormFilenetURL() {
		log.debug("DQ Appeal Form Filenet URL Value=" + configNew.dq_appeal_form_filenet_URL());
		return configNew.dq_appeal_form_filenet_URL();
	}
	
	@Override
	public String getOnbaseURL() {
		log.debug("Onbase Value=" + configNew.onbase_URL());
		return configNew.onbase_URL();
	}
	
	@Override
	public String getfilenet_or_onbase_selection() {
		log.debug("Filenet or Onbase Selection=" + configNew.filenet_or_onbase_selection());
		return configNew.filenet_or_onbase_selection();
	}
	
	@Override
	public String getSftpKey() {
		return configNew.sftp_key();
	}
	
	@Override
	public String getAssetManagementAPIURL() {
		log.debug("Asset Management API URL Value=" + configNew.asset_management_api_URL());
		return configNew.asset_management_api_URL();
	}
	
	@Override
	public String getAssetManagementAPIUsernameandPassword() {
		return configNew.asset_management_api_username_and_password();
	}
	
	@Override
	public String[] getPETFormWhitelistedAccounts() {
		return configNew.pet_form_whitelisted_account();
	}
	
	@Override
	public String getMajorMinorPSAPIURL() {
		log.debug("Major Minor PS Update API URL Value=" + configNew.major_minor_ps_api_URL());
		return configNew.major_minor_ps_api_URL();
	}
	
	@Override
	public String getMajorMinorPSAPIUsernameandPassword() {
		return configNew.major_minor_ps_api_username_and_password();
	}
}
