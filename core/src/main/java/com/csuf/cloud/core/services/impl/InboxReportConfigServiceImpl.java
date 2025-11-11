package com.csuf.cloud.core.services.impl;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.InboxReportConfig;
import com.csuf.cloud.core.services.InboxReportConfigService;

@Component(immediate = true, service = InboxReportConfigService.class, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus", Constants.SERVICE_DESCRIPTION + "=Inbox Report Config Service", })
@Designate(ocd = InboxReportConfig.class)
public class InboxReportConfigServiceImpl implements InboxReportConfigService {

	private static final Logger log = LoggerFactory.getLogger(InboxReportConfigServiceImpl.class);

	private InboxReportConfig config;

	@Activate
	protected void activate(InboxReportConfig config) {
		this.config = config;
		// log.info("The " + this.getClass().getName() + " service now active");
	}

	@Override
	public String[] scwReportViewersGroupList() {
		return config.scwReportViewersGroupList();
	}

	@Override
	public String[] mppReportViewersGroupList() {
		return config.mppReportViewersGroupList();
	}

	@Override
	public String[] staffReportViewersGroupList() {
		return config.staffReportViewersGroupList();
	}

	@Override
	public String[] gcReportViewersGroupList() {
		return config.gcReportViewersGroupList();
	}

	@Override
	public String[] mmcReportViewersGroupList() {
		return config.mmcReportViewersGroupList();
	}

	@Override
	public String[] tfpReportViewersGroupList() {
		return config.tfpReportViewersGroupList();
	}

	@Override
	public String[] npdsReportViewersGroupList() {
		return config.npdsReportViewersGroupList();
	}

	@Override
	public String[] npdmReportViewersGroupList() {
		return config.npdmReportViewersGroupList();
	}

	@Override
	public String[] efwReportViewersGroupList() {
		return config.efwReportViewersGroupList();
	}

	@Override
	public String[] dfwReportViewersGroupList() {
		return config.dfwReportViewersGroupList();
	}

	@Override
	public String[] dptcReportViewersGroupList() {
		return config.dptcReportViewersGroupList();
	}

	@Override
	public String[] saefwReportViewersGroupList() {
		return config.saefwReportViewersGroupList();
	}

	@Override
	public String[] clrReportViewersGroupList() {
		return config.clrReportViewersGroupList();
	}

	@Override
	public String[] pfaReportViewersGroupList() {
		return config.pfaReportViewersGroupList();
	}

	@Override
	public String[] panReportViewersGroupList() {
		return config.panReportViewersGroupList();
	}

	@Override
	public String[] cdReportViewersGroupList() {
		return config.cdReportViewersGroupList();
	}

	@Override
	public String[] otsdReportViewersGroupList() {
		return config.otsdReportViewersGroupList();
	}

	@Override
	public String[] confTicketReportViewersGroupList() {
		return config.confTicketReportViewersGroupList();
	}

	@Override

	public String[] manualcdReportViewersGroupList() {
		return config.manualcdReportViewersGroupList();
	}

	@Override
	public String[] timebaseChangeRequestReportViewersGroupList() {
		return config.timebaseChangeRequestReportViewersGroupList();
	}

	@Override
	public String[] miscPayrollReportViewersGroupList() {
		return config.miscPayrollReportViewersGroupList();
	}

	@Override
	public String[] cataLeaveDonationReportViewersGroupList() {
		return config.cataLeaveDonationReportViewersGroupList();
	}

	@Override
	public String[] payPlanReportViewersGroupList() {
		return config.payPlanReportViewersGroupList();
	}

	@Override
	public String[] doaReportViewersGroupList() {
		return config.doaReportViewersGroupList();
	}

	@Override
	public String[] dockNoticeReportViewersGroupList() {
		return config.dockNoticeReportViewersGroupList();
	}

	@Override
	public String[] std682ReportViewersGroupList() {
		return config.std682ReportViewersGroupList();
	}

	@Override
	public String[] specialConsultantTimesheetReportViewersGroupList() {
		return config.specialConsultantTimesheetReportViewersGroupList();
	}

	@Override
	public String[] hourlyINTTimesheetReportViewersGroupList() {
		return config.hourlyINTTimesheetReportViewersGroupList();
	}

	@Override
	public String[] studentTimesheetReportViewersGroupList() {
		return config.studentTimesheetReportViewersGroupList();
	}

	@Override
	public String[] appealsReportViewersGroupList() {
		return config.appealsReportViewersGroupList();
	}

	@Override
	public String[] loaReportViewersGroupList() {
		return config.loaReportViewersGroupList();
	}

	@Override
	public String[] majorMinorChangeReportViewersGroupList() {
		return config.majorMinorReportViewersGroupList();
	}

	@Override
	public String[] lateAddsReportViewersGroupList() {
		return config.lateAddsViewersGroupList();
	}

	@Override
	public String[] catalogYearReportViewersGroupList() {
		return config.catalogYearViewersGroupList();
	}

	@Override
	public String[] facultyAdditionalEmploymentViewersGroupList() {
		return config.facultyAdditionalEmploymentViewersGroupList();
	}

	@Override
	public String[] petitionViewersGroupList() {
		return config.petitionViewersGroupList();
	}

	@Override
	public String[] mppJustificationViewersGroupList() {
		return config.mppJustificationViewersGroupList();
	}

	@Override
	public String[] facultyActionRequestViewersGroupList() {
		return config.facultyActionRequestViewersGroupList();
	}

	@Override
	public String[] telecommutingAgreementViewersGroupList() {
		return config.telecommutingAgreementViewersGroupList();
	}

	@Override
	public String[] financeAccessRequestViewersGroupList() {
		return config.financeAccessRequestViewersGroupList();
	}

	@Override
	public String[] finDOAViewersGroupList() {
		return config.finDOAViewersGroupList();
	}

	@Override
	public String[] campusSolViewersGroupList() {
		return config.campusSolViewersGroupList();
	}

	@Override
	public String[] hrARFViewersGroupList() {
		return config.hrARFViewersGroupList();
	}

	@Override
	public String[] requestForExcessUnitsViewersGroupList() {
		return config.requestForExcessUnitsViewersGroupList();
	}

	@Override
	public String[] prtbViewersGroupList() {
		return config.prtbViewersGroupList();
	}

	@Override
	public String[] ferpViewersGroupList() {
		return config.ferpViewersGroupList();

	}

	@Override
	public String[] sfsdViewersGroupList() {
		return config.sfsdViewersGroupList();
	}

	@Override
	public String[] sftsViewersGroupList() {
		return config.sftsViewersGroupList();
	}

	@Override
	public String[] taSubTSViewersGroupList() {
		return config.taSubTSViewersGroupList();
	}

	@Override
	public String[] taSubAFViewersGroupList() {
		return config.taSubAFViewersGroupList();
	}

	@Override
	public String[] chairDirectorAFViewersGroupList() {
		return config.chairDirectorAFViewersGroupList();
	}

	@Override
	public String[] cbeDeclarationViewersGroupList() {
		return config.cbeDeclarationViewersGroupList();
	}

	@Override
	public String[] taxFilingViewersGroupList() {
		return config.taxFilingViewersGroupList();
	}

	@Override
	public String[] familySizeCertificateViewersGroupList() {
		return config.familySizeCertificateViewersGroupList();
	}

	@Override
	public String[] ps980ViewersGroupList() {
		return config.ps980ViewersGroupList();
	}

	@Override
	public String[] petViewersGroupList() {
		return config.petViewersGroupList();
	}

	@Override
	public String[] studentDependentVerificationViewersGroupList() {
		return config.studentDependentVerificationViewersGroupList();
	}

	@Override
	public String[] citizenshipVerificationViewersGroupList() {
		return config.citizenshipVerificationViewersGroupList();
	}

	@Override
	public String[] teachGrantRequirementCertViewersGroupList() {
		return config.teachGrantRequirementCertViewersGroupList();
	}

	@Override
	public String[] summerLoanRequestViewersGroupList() {
		return config.summerLoanRequestViewersGroupList();
	}

	@Override
	public String[] studentNonFilerCertificationViewersGroupList() {
		return config.studentNonFilerCertificationViewersGroupList();
	}

	@Override
	public String[] studentProjectedYearIncomeAppealViewersGroupList() {
		return config.studentProjectedYearIncomeAppealViewersGroupList();
	}

	@Override
	public String[] federalDirectGradPlusLoanViewersGroupList() {
		return config.federalDirectGradPlusLoanViewersGroupList();
	}

	@Override
	public String[] dependencyOverrideRenewalViewersGroupList() {
		return config.dependencyOverrideRenewalViewersGroupList();
	}
	
	@Override
	public String[] dependencyOverrideAppealViewersGroupList() {
		return config.dependencyOverrideAppealViewersGroupList();
	}

	public String[] parentverificationofnonfilingletterViewersGroupList() {
		return config.parentverificationofnonfilingletterViewersGroupList();
	}

	@Override
	public String[] parentnonfilercertificationViewersGroupList() {
		return config.parentnonfilercertificationViewersGroupList();
	}
	
	@Override
	public String[] sectionChangeReportViewersGroupList() {
		return config.sectionChangeReportViewersGroupList();
	}
	
	@Override
	public String[] requestforTimeConflictApprovalViewersGroupList() {
		return config.requestforTimeConflictApprovalViewersGroupList();
	}
	
	@Override
	public String[] facultyAssignedTimeAgreementViewersGroupList() {
		return config.facultyAssignedTimeAgreementViewersGroupList();
	}
	
	@Override
	public String[] parentAmendedTaxReturnViewersGroupList() {
		return config.parentAmendedTaxReturnViewersGroupList();
	}
	
	@Override
	public String[] immigrationcitizenshipVerificationViewersGroupList() {
		return config.immigrationcitizenshipVerificationViewersGroupList();
	}

	@Override
	public String[] federalAidRefundVerificationViewersGroupList() {
		return config.federalAidRefundVerificationViewersGroupList();
	}
	
	@Override
	public String[] facultySpecialConsultantStipendViewersGroupList() {
		return config.facultySpecialConsultantStipendViewersGroupList();
	}
	
	@Override
	public String[] loanStatusVerificationViewersGroupList() {
		return config.loanStatusVerificationViewersGroupList();
	}
	
	@Override
    public String[] calGrantTransferViewersGroupList() {
        return config.calGrantTransferViewersGroupList();
    }
	
	@Override
	public String[] identityVerificationAndStatementViewersGroupList() {
		return config.identityVerificationAndStatementViewersGroupList();
	}
	
	@Override
	public String[] sapAppealViewersGroupList() {
		return config.sapAppealViewersGroupList();
	}
	
	@Override
    public String[] unitCapAppealViewersGroupList() {
        return config.unitCapAppealViewersGroupList();
    }
	
	@Override
	public String[] awardAdjustmentAppealViewersGroupList() {
		return config.awardAdjustmentAppealViewersGroupList();
	}
	
	@Override
    public String[] studentW2StatementViewersGroupList() {
        return config.studentW2StatementViewersGroupList();
    }
	
	@Override
    public String[] verificationOfNonFilingViewersGroupList() {
        return config.verificationOfNonFilingViewersGroupList();
    }
	
	@Override
    public String[] federalDirectPlusApplicationViewersGroupList() {
        return config.federalDirectPlusApplicationViewersGroupList();
    }
	
	@Override
    public String[] federalDirectLoanRequestViewersGroupList() {
        return config.federalDirectLoanRequestViewersGroupList();
    }
    
    @Override
    public String[] nonFilerCertificationViewersGroupList() {
        return config.nonFilerCertificationViewersGroupList();
    }
    
    @Override
    public String[] parentStatementOfNonSupportViewersGroupList() {
        return config.parentStatementOfNonSupportViewersGroupList();
    }
    
    @Override
    public String[] droneFlightRequestViewersGroupList() {
        return config.droneFlightRequestViewersGroupList();
    }
    
    @Override
    public String[] tdaExceptionUGViewersGroupList() {
        return config.tdaExceptionUGViewersGroupList();
    }
    
    @Override
    public String[] tdaExceptionGradViewersGroupList() {
        return config.tdaExceptionGradViewersGroupList();
    }
    
    @Override
    public String[] studentBudgetAdjustmentAppealViewersGroupList() {
        return config.studentBudgetAdjustmentAppealViewersGroupList();
    }
    
    @Override
    public String[] unaccompaniedHomelessYouthVerificationHomeViewersGroupList() {
        return config.unaccompaniedHomelessYouthVerificationHomeViewersGroupList();
    }
    
    @Override
    public String[] titanCardViewersGroupList() {
        return config.titanCardViewersGroupList();
    }
    
    @Override
    public String[] requestToCancelFAProcessingViewersGroupList() {
        return config.requestToCancelFAProcessingViewersGroupList();
    }
    
    @Override
    public String[] stateUnivGrantAppealViewersGroupList() {
        return config.stateUnivGrantAppealViewersGroupList();
    }
    
    @Override
    public String[] goldenStateTeacherGrantCertificationReqFormViewersGroupList() {
        return config.goldenStateTeacherGrantCertificationReqFormViewersGroupList();
    }
    
    @Override
    public String[] chafeeStudentSuccessPlanViewersGroupList() {
        return config.chafeeStudentSuccessPlanViewersGroupList();
    }
    
    @Override
    public String[] veteranStatusVerificationViewersGroupList() {
        return config.veteranStatusVerificationViewersGroupList();
    }
    
    @Override
    public String[] ssnVerificationViewersGroupList() {
        return config.ssnVerificationViewersGroupList();
    }
    
    @Override
    public String[] petitionforPGCreditViewersGroupList() {
        return config.petitionforPGCreditViewersGroupList();
    }
    
    @Override
    public String[] petitionforGEVariationViewersGroupList() {
        return config.petitionforGEVariationViewersGroupList();
    }
    
    @Override
    public String[] assetInformationViewersGroupList() {
        return config.assetInformationViewersGroupList();
    }
    
    @Override
    public String[] pensionRollOverViewersGroupList() {
        return config.pensionRollOverViewersGroupList();
    }
    
    @Override
    public String[] studyAbroadAcademicTranscriptSubmissionViewersGroupList() {
        return config.studyAbroadAcademicTranscriptSubmissionViewersGroupList();
    }
    
    @Override
    public String[] investmentRealEstateVerificationViewersGroupList() {
        return config.investmentRealEstateVerificationViewersGroupList();
    }
    
    @Override
    public String[] federalTaxReturnViewersGroupList() {
        return config.federalTaxReturnViewersGroupList();
    }			
    
    @Override
    public String[] federalTaxReturnScheduleEViewersGroupList() {
        return config.federalTaxReturnScheduleEViewersGroupList();
    }
    
    @Override
    public String[] concurrentEnrollmentAgreementFallViewersGroupList() {
        return config.concurrentEnrollmentAgreementFallViewersGroupList();
    }			
    
    @Override
    public String[] concurrentEnrollmentAgreementSpringViewersGroupList() {
        return config.concurrentEnrollmentAgreementSpringViewersGroupList();
    }	
    
    @Override
    public String[] housingUpdateFormViewersGroupList() {
        return config.housingUpdateFormViewersGroupList();
    }
    
    @Override
    public String[] businessSupplementFormViewersGroupList() {
        return config.businessSupplementFormViewersGroupList();
    }
    
    @Override
    public String[] classroomLabEquipmentProposalViewersGroupList() {
        return config.classroomLabEquipmentProposalViewersGroupList();
    }
    
    @Override
    public String[] voiceMovementProdCoachRequestViewersGroupList() {
        return config.voiceMovementProdCoachRequestViewersGroupList();
    }

    @Override
    public String[] guestArtistProposalViewersGroupList() {
        return config.guestArtistProposalViewersGroupList();
    }
    
    @Override
    public String[] specialEventProposalViewersGroupList() {
        return config.specialEventProposalViewersGroupList();
    }
    
    @Override
    public String[] facultyTravelProposalViewersGroupList() {
        return config.facultyTravelProposalViewersGroupList();
    }
    
    @Override
    public String[] petitionforRetroactiveWithdrawalViewersGroupList() {
        return config.petitionforRetroactiveWithdrawalViewersGroupList();
    }
    
    @Override
    public String[] posthumousDegreeApprovalViewersGroupList() {
        return config.posthumousDegreeApprovalViewersGroupList();
    }
    
    @Override
    public String[] teachGrantSupplementViewersGroupList() {
        return config.teachGrantSupplementViewersGroupList();
    }
    
    @Override
    public String[] familyCollegeEnrollmentViewersGroupList() {
        return config.familyCollegeEnrollmentViewersGroupList();
    }
    
    @Override
	public String[] projectedYearIncomeAppealViewersGroupList() {
		return config.projectedYearIncomeAppealViewersGroupList();
	}
    
    @Override
	public String[] facultyAssignedTimeAgreementATGuidelinesViewersGroupList() {
		return config.facultyAssignedTimeAgreementATGuidelinesViewersGroupList();
	}
    
    @Override
  	public String[] selectiveServiceRegVerificationViewersGroupList() {
  		return config.selectiveServiceRegVerificationViewersGroupList();
  	}

    @Override
  	public String[] parentDependentVerificationViewersGroupList() {
  		return config.parentDependentVerificationViewersGroupList();
  	}
      
    @Override
    public String[] csufVolunteerViewersGroupList() {
     	return config.csufVolunteerViewersGroupList();
     	}
    
    @Override
  	public String[] positionActionFormViewersGroupList() {
  		return config.positionActionFormViewersGroupList();
  	}
    
    @Override
  	public String[] dqAppealViewersGroupList() {
  		return config.dqAppealViewersGroupList();
  	}
    
    @Override
  	public String[] nachaFormViewersGroupList() {
  		return config.nachaFormViewersGroupList();
  	}
    
    @Override
  	public String[] appealofaDeclinedFeeWaiverFormViewersGroupList() {
  		return config.appealofaDeclinedFeeWaiverFormViewersGroupList();
  	}

    @Override
  	public String[] newAssetAcquisitionFormViewersGroupList() {
  		return config.newAssetAcquisitionFormViewersGroupList();
  	}
    
    @Override
  	public String[] lostorStolenPropertyFormViewersGroupList() {
  		return config.lostorStolenPropertyFormViewersGroupList();
  	}
    
    @Override
  	public String[] vehicleReleaseFormViewersGroupList() {
  		return config.vehicleReleaseFormViewersGroupList();
  	}

    @Override
  	public String[] offCampusAgreementUseFormViewersGroupList() {
  		return config.offCampusAgreementUseFormViewersGroupList();
  	}
   
	@Override
	public String[] verificationReqFormViewersGroupList() {
		return config.verificationReqFormViewersGroupList();
	}
	
	@Override
	public String[] retroactiveLoaReportViewersGroupList() {
		return config.retroactiveLoaReportViewersGroupList();
	}
	
	@Override
	public String[] propertySurveyFormViewersGroupList() {
		return config.propertySurveyFormViewersGroupList();
	}

	@Override
	public String[] propertyTransferFormViewersGroupList() {
		return config.propertyTransferFormViewersGroupList();
	}
	
	@Override
	public String[] requestForInvoiceFormViewersGroupList() {
		return config.requestForInvoiceFormViewersGroupList();
	}

	@Override
	public String[] universityWithdrawalFormViewersGroupList() {
		return config.universityWithdrawalFormViewersGroupList();
	}

	@Override
	public String[] designationUniversityCashCollectionFormViewersGroupList() {
		return config.designationUniversityCashCollectionFormViewersGroupList();
	}
	
	@Override
	public String[] authorizationDriverRecordInformationFormViewersGroupList() {
		return config.authorizationDriverRecordInformationFormViewersGroupList();
	}

	@Override
	public String[] authorizationPrivateOwnedVehiclesFormViewersGroupList() {
		return config.authorizationPrivateOwnedVehiclesFormViewersGroupList();
	}

	@Override
	public String[] authorizationVehicleUniversityBusinessFormViewersGroupList() {
		return config.authorizationVehicleUniversityBusinessFormViewersGroupList();
	}
	
	@Override
	public String[] parentalConsentAIFormViewersGroupList() {
		return config.parentalConsentAIFormViewersGroupList();
	}
	
	@Override
	public String[] dottedLineNonCHRSFormViewersGroupList() {
		return config.dottedLineNonCHRSFormViewersGroupList();
	}

	@Override
	public String[] vendorFeeWaiverReductionFormViewersGroupList() {
		return config.vendorFeeWaiverReductionFormViewersGroupList();
	}

}
