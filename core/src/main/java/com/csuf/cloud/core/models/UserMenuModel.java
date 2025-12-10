package com.csuf.cloud.core.models;

import static org.apache.sling.api.resource.ResourceResolver.PROPERTY_RESOURCE_TYPE;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Required;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.security.user.UserProperties;
import com.adobe.granite.security.user.UserPropertiesManager;
import com.csuf.cloud.core.enums.UserType;
//import com.thoughtfocus.aem.csu.core.config.WorkflowAdministrationConfig;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.InboxReportConfigService;
import com.csuf.cloud.core.services.WorkflowAdministrationConfigService;
//import com.thoughtfocus.aem.csu.core.services.WorkflowAdministrationConfigService;

@Model(adaptables = { SlingHttpServletRequest.class })
public class UserMenuModel {
	private static final Logger log = LoggerFactory.getLogger(UserMenuModel.class);

	@ValueMapValue(name = PROPERTY_RESOURCE_TYPE, injectionStrategy = InjectionStrategy.OPTIONAL)
	@Default(values = "No resourceType")
	protected String resourceType;

	protected static final String RESOURCE_TYPE = "csu/components/structure/page";

	private String userPath = null;
	private String userId = null;

	private Session session = null;

	private static final String PROFILE_PATH_SUFFIX = "/primary/image.prof.thumbnail.48.48.png";

	private static final String ANONYMOUS = "anonymous";
	private static final String NN_PROFILE = "profile";

	private static final String PN_LOG_IN_LABEL = "logInLabel";
	private static final String PN_LOG_IN_LINK = "logInLink";
	private static final String PN_LOG_OUT_LABEL = "logOutLabel";
	private static final String PN_LOG_OUT_LINK = "logOutLink";

	@Self
	@Required
	private SlingHttpServletRequest request;

    private String domain;

	@OSGiService
	private InboxReportConfigService reportConfig;

	@OSGiService
	private InboxItemService inboxItemService;

	@OSGiService
	private WorkflowAdministrationConfigService wfConfig;

	/*
	 * @Inject
	 * 
	 * @Required private Style currentStyle;
	 */

	private UserProperties currentUser;

	@PostConstruct
	public void init() {
        if (request != null) {
            domain = request.getScheme()+ "://" +request.getServerName();
        }

        session = request.getResourceResolver().adaptTo(Session.class);
		setCurrentUser();
	}

    public String getDomain() {
        return domain;
    }

	private void setCurrentUser() {
		final Authorizable auth = request.getResourceResolver().adaptTo(Authorizable.class);
		try {
			userId = auth.getID();
			userPath = auth.getPath();
			final UserPropertiesManager upm = request.getResourceResolver().adaptTo(UserPropertiesManager.class);

			if (upm != null) {
				try {
					currentUser = upm.getUserProperties(auth, NN_PROFILE);
				} catch (RepositoryException e) {
					log.warn("could not get user properties for current user.", e);
				}
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		log.debug("currentUser : {}", currentUser);
	}

	public String getUserName() {
		// log.debug("currentUser2 : {}", currentUser);
		String userName = StringUtils.EMPTY;
		try {
			if (null == currentUser) {
				Node userNode = session.getNode(userPath);
				if (null != userNode && userNode.hasProperty("rep:fullname")) {
					userName = userNode.getProperty("rep:fullname").getString();
				} else if (null != userNode && userNode.hasProperty("rep:principalName")) {
					userName = userNode.getProperty("rep:principalName").getString();
				}
			} else {
				userName = currentUser.getDisplayName();
			}
		} catch (Exception e) {
			log.error("Exception while trying to get display name : {}", Arrays.toString(e.getStackTrace()));
		}
		// log.debug("userName inside UserMenuModel : {}", userName);
		return userName;
	}

	public String getUserProfileImg() {
		if (currentUser != null) {
			try {
				Resource photos = currentUser.getResource(UserProperties.PHOTOS);
				if (photos != null) {
					return photos.getPath() + PROFILE_PATH_SUFFIX;
				}
			} catch (RepositoryException e) {
				log.error("Repository Exception while trying to get profile picture name", e);
			}
		}
		return null;
	}

	public String getUserPath() {
		return userPath;
	}

	public String getUserId() {
		return userId;
	}

	public Boolean isLoggedIn() {
		if (StringUtils.isNotBlank(userPath) && StringUtils.isNotBlank(getUserName())
				&& !getUserName().equalsIgnoreCase(ANONYMOUS))
			return true;
		/*
		 * else if (currentUser != null &&
		 * !ANONYMOUS.equals(currentUser.getAuthorizableID())) return true;
		 */
		return false;
	}

	public boolean isReportViewer() {
		return isSCWReportViewer() || isMPPReportViewer() || isStaffReportViewer() || isGCReportViewer()
				|| isMMCReportViewer() || isTempFacultyPayrollReportViewer() || isNewPositionStaffReportViewer()
				|| isNewPositionManagerReportViewer() || isEmployeeFeeWaiverReportViewer()
				|| isDependentFeeWaiverReportViewer() || isDomesticPartnerTaxCertificationReportViewer()
				|| isSTD682ReportViewer() || isShortAppEmpFeeWaiverReportViewer() || isCLRReportViewer()
				|| isPerFileAccessReportViewer() || isPersonnelActionNoticeReportViewer() || isCareerDevReportViewer()
				|| isOTSDReportViewer() || isConfirmationTicketReportViewer() || isManualCDReportViewer()
				|| isTimebaseChangeRequestReportViewer() || isMiscPayrollReportViewer()
				|| isCataLeaveDonationReportViewer() || isPayPlanReportViewer() || isDockNoticetViewer()
				|| isSpecialConsultantViewer() || isHourlyINTViewer() || isStudentTimesheetViewer() || isDOAViewer()
				|| isAppealsViewer() || isLOAViewer() || isMajorMinorViewer() || islateAddsViewer()
				|| iscatalogYearViewer() || isFAERViewer() || isPetitionViewer() || isMPPJustificationViewer()
				|| isTelecommuteAgreementViewer() || isFinanceSystemAccessRequestViewer() || isFinDOAViewer()
				|| isCampusSolViewer() || isHRARFViewer() || isPRTBViewer() || isFERPViewer() || isSFSDViewer()
				|| isSFTSViewer() || isTASubTSViewer() || isTASubAFViewer() || isChairDirectorViewer()
				|| isTaxFilingViewer() || isFamilySizeCertificate() || isPETViewer() || isPS980Viewer()
				|| isstudentDependentVerificationViewer() || isCitizenshipVerificationViewer()
				|| isTEACHGrantRequirementCertViewer() || isSummerLoanRequestViewer()
				|| isStudentNonFilerCertificationViewer() || isStudentProjectedYearIncomeAppealViewer()
				|| isFederalDirectGradPlusLoanViewer() || isDependencyOverrideRenewalViewer()
				|| isParentVerificationofNonFilingLetterViewer() || isParentNonFilerCertificationViewer()
				|| isSectionChangeViewer() || isRequestforTimeConflictViewer() || isFacultyAssignedTimeAgreementViewer()
				|| isParentAmendedTaxReturnViewer() || isImmigrationCitizenshipVerificationViewer()
				|| isFederalAidRefundVerificationViewer() || isFacultySpecialConsultantStipendViewer()
				|| isLoanStatusVerificationViewer() || isCalGrantTransferViewer()
				|| isIdentityVerificationAndStatementViewer() || isSAPAppealViewer() || isUnitCapAppealViewer()
				|| isCalGrantTransferViewer() || isIdentityVerificationAndStatementViewer()
				|| isAwardAdjustmentAppealViewer() || isStudentW2StatementViewer() || isVerificationOfNonFilingViewer()
				|| isStudent() || isFaculty() || isFederalDirectPlusApplicationViewer()
				|| isFederalDirectLoanRequestViewer() || isNonFilerCertificationViewer()
				|| isParentStatementOfNonSupportViewer() || isDroneFlightRequestViewer() || isTDAExceptionFormUGViewer()
				|| isTDAExceptionFormGradViewer() || isDependencyOverrideAppealViewer()
				|| isStudentBudgetAdjustmentAppealViewer() || isUnaccompaniedHomelessYouthVerificationHomeViewer()
				|| isTitanCardViewer() || isRequesttoCancelFAProcessingViewer() || isStateUnivGrantAppealViewer()
				|| isGoldenStateTeacherGrantCertificationViewer() || isChafeeStudentSuccessPlanViewer()
				|| isVeteranStatusVerificationViewer() || isSsnVerificationViewer() || isPetitionforPGCreditViewer()
				|| isPetitionforGEVariationViewer() || isAssetInformationViewer() || isPensionRollOverViewer()
				|| isStudyAbroadAcademicTranscriptSubmissionViewer() || isInvestmentRealEstateVerificationViewer()
				|| isFederalTaxReturnViewer() || isFederalTaxReturnScheduleEViewer()
				|| isConcurrentEnrollmentAgreementFallViewer() || isConcurrentEnrollmentAgreementSpringViewer()
				|| isHousingUpdateFormViewer() || isBusinessSupplementViewer()
				|| isClassroomLabEquipmentProposalViewers() || isVoiceMovementProdRequestViewer()
				|| isGuestArtistProposalViewer() || isSpecialEventProposalViewer() || isFacultyTravelProposalViewer()
				|| isPetitionforRetroactiveWithdrawalViewer() || isPosthumousDegreeApprovalViewer()
				|| isProjectedYearIncomeAppealViewer() || isFacultyAssignedTimeAgreementATGuidelinesViewer()
				|| isSelectiveServiceRegVerificationViewer() || isParentDependentVerificationViewer()
				|| isVolunteerFormViewer() || isPositionActionFormViewer() || isDqAppealViewer() || isNachaFormViewer()
				|| isAppealofaDeclinedFeeWaiverFormViewer() || isNewAssetAcquisitionFormViewer()
				|| isLostorStolenPropertyFormViewer() || isVehicleReleaseFormViewer()
				|| isOffCampusAgreementUseFormViewer() || isVerificationReqFormReviewer()
				|| isRetroactiveLeaveOfAbsenceFormViewer() || isPropertySurveyFormViewer() || isPropertyTransferFormViewer()
				|| isRequestForInvoiceFormViewer() || isUniversityWithdrawalFormViewer()
				|| isDesignationUniversityCashCollectionFormViewer() || isAuthorizationDriverRecordInfoFormViewer()
				|| isAuthorizationPrivateOwnedVehiclesFormViewer()
				|| isAuthorizationVehicleUniversityBusinessFormViewer() || isParentalConsentAIFormViewer()
				|| isDottedLineNonCHRSFormViewer() 
				|| isVendorFeeWaiverReductionFormViewer();

	}

	public boolean isAdmin() {
		try {
			return inboxItemService.isCurrentUserAdmin(session);
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStudent() {
		try {
			String ldapName = inboxItemService.getldapAccountName(session, request.getResourceResolver());
			if (StringUtils.isNotBlank(ldapName) && ldapName.equalsIgnoreCase(UserType.STUDENT.name())) {
				return true;
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFaculty() {
		try {
			String ldapName = inboxItemService.getldapAccountName(session, request.getResourceResolver());
			if (StringUtils.isNotBlank(ldapName) && ldapName.equalsIgnoreCase(UserType.FACULTY.name())) {
				return true;
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDelegationReportViewer() {
		try {
			if (inboxItemService.isCurrentUserAdmin(session)) {
				return true;
			}
			String[] resultArray = wfConfig.getDelegateGroupList();
			String[] delegateArray = new String[resultArray.length];
			for (int i = 0; i < resultArray.length; i++) {
				delegateArray[i] = resultArray[i].split("~")[0];
			}
			return inboxItemService.isAuthorizableAMember(session, getUserId(), delegateArray);
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSCWReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.scwReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isMPPReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.mppReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStaffReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.staffReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isGCReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.gcReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isMMCReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.mmcReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTempFacultyPayrollReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.tfpReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isNewPositionStaffReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.npdsReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isNewPositionManagerReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.npdmReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isEmployeeFeeWaiverReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.efwReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDependentFeeWaiverReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dfwReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDomesticPartnerTaxCertificationReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dptcReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSTD682ReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.std682ReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isShortAppEmpFeeWaiverReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.saefwReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCLRReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.clrReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPerFileAccessReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.pfaReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPersonnelActionNoticeReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.panReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCareerDevReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.cdReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isOTSDReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.otsdReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isConfirmationTicketReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.confTicketReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isMiscPayrollReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.miscPayrollReportViewersGroupList());
		} catch (Exception e) {
			Arrays.toString(e.getStackTrace());
		}
		return false;
	}

	public boolean isManualCDReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.manualcdReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTimebaseChangeRequestReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.timebaseChangeRequestReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCataLeaveDonationReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.cataLeaveDonationReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPayPlanReportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.payPlanReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDockNoticetViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dockNoticeReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isHourlyINTViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.hourlyINTTimesheetReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSpecialConsultantViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.specialConsultantTimesheetReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDOAViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.doaReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStudentTimesheetViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.specialConsultantTimesheetReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isAppealsViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.appealsReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isLOAViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.loaReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isMajorMinorViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.majorMinorChangeReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean islateAddsViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.lateAddsReportViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean iscatalogYearViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.catalogYearReportViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFAERViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.facultyAdditionalEmploymentViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPetitionViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.petitionViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isMPPJustificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.mppJustificationViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFARViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.facultyActionRequestViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTelecommuteAgreementViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.telecommutingAgreementViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFinanceSystemAccessRequestViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.financeAccessRequestViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPRTBViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.prtbViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFinDOAViewer() {

		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.finDOAViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCampusSolViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.campusSolViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isHRARFViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.hrARFViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFERPViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.ferpViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSFSDViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.sfsdViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSFTSViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.sftsViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTASubTSViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.taSubTSViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTASubAFViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.taSubAFViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isChairDirectorViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.chairDirectorAFViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPS980Viewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.ps980ViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	/*
	 * public boolean isReady() { final String logInLabel =
	 * currentStyle.get(PN_LOG_IN_LABEL, String.class); final String logInLink =
	 * currentStyle.get(PN_LOG_IN_LINK, String.class); final String logOutLabel =
	 * currentStyle.get(PN_LOG_OUT_LABEL, String.class); final String logOutLink =
	 * currentStyle.get(PN_LOG_OUT_LINK, String.class);
	 * 
	 * return StringUtils.isNotEmpty(logInLabel) &&
	 * StringUtils.isNotEmpty(logInLink) && StringUtils.isNotEmpty(logOutLabel) &&
	 * StringUtils.isNotEmpty(logOutLink); }
	 */
	public String getExportedType() {
		return RESOURCE_TYPE;
	}

	public boolean isRequestForExcessUnitsViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.requestForExcessUnitsViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCBEDeclarationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.cbeDeclarationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTaxFilingViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.taxFilingViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFamilySizeCertificate() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.familySizeCertificateViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPETViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(), reportConfig.petViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isstudentDependentVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.studentDependentVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCitizenshipVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.citizenshipVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTEACHGrantRequirementCertViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.teachGrantRequirementCertViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSummerLoanRequestViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.summerLoanRequestViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStudentNonFilerCertificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.studentNonFilerCertificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStudentProjectedYearIncomeAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.studentProjectedYearIncomeAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFederalDirectGradPlusLoanViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.federalDirectGradPlusLoanViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDependencyOverrideRenewalViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dependencyOverrideRenewalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isParentVerificationofNonFilingLetterViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.parentverificationofnonfilingletterViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isParentNonFilerCertificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.parentnonfilercertificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDependencyOverrideAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dependencyOverrideAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSectionChangeViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.sectionChangeReportViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isRequestforTimeConflictViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.requestforTimeConflictApprovalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFacultyAssignedTimeAgreementViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.facultyAssignedTimeAgreementViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isParentAmendedTaxReturnViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.parentAmendedTaxReturnViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isImmigrationCitizenshipVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.immigrationcitizenshipVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFederalAidRefundVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.federalAidRefundVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFacultySpecialConsultantStipendViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.facultySpecialConsultantStipendViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isLoanStatusVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.loanStatusVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isCalGrantTransferViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.calGrantTransferViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isIdentityVerificationAndStatementViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.identityVerificationAndStatementViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isSAPAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.sapAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isUnitCapAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.unitCapAppealViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isAwardAdjustmentAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.awardAdjustmentAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStudentW2StatementViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.studentW2StatementViewersGroupList());
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isVerificationOfNonFilingViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.verificationOfNonFilingViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFederalDirectPlusApplicationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.federalDirectPlusApplicationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isFederalDirectLoanRequestViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.federalDirectLoanRequestViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isNonFilerCertificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.nonFilerCertificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isParentStatementOfNonSupportViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.parentStatementOfNonSupportViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDroneFlightRequestViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.droneFlightRequestViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTDAExceptionFormUGViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.tdaExceptionUGViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTDAExceptionFormGradViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.tdaExceptionGradViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStudentBudgetAdjustmentAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.studentBudgetAdjustmentAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isUnaccompaniedHomelessYouthVerificationHomeViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.unaccompaniedHomelessYouthVerificationHomeViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isTitanCardViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.titanCardViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isRequesttoCancelFAProcessingViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.requestToCancelFAProcessingViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isStateUnivGrantAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.stateUnivGrantAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isGoldenStateTeacherGrantCertificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.goldenStateTeacherGrantCertificationReqFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isChafeeStudentSuccessPlanViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.chafeeStudentSuccessPlanViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isVeteranStatusVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.veteranStatusVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isSsnVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.ssnVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isPetitionforPGCreditViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.petitionforPGCreditViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isPetitionforGEVariationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.petitionforGEVariationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isAssetInformationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.assetInformationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	
	public boolean isPensionRollOverViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.pensionRollOverViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isStudyAbroadAcademicTranscriptSubmissionViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.studyAbroadAcademicTranscriptSubmissionViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isInvestmentRealEstateVerificationViewer() {
        try {
            return inboxItemService.isAuthorizableAMember(session, getUserId(),
                    reportConfig.investmentRealEstateVerificationViewersGroupList());

        } catch (Exception e) {
            log.error(Arrays.toString(e.getStackTrace()));
        }
        return false;
    }
	
	public boolean isFederalTaxReturnViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.federalTaxReturnViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isFederalTaxReturnScheduleEViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.federalTaxReturnScheduleEViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isConcurrentEnrollmentAgreementFallViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.concurrentEnrollmentAgreementFallViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isConcurrentEnrollmentAgreementSpringViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.concurrentEnrollmentAgreementSpringViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isHousingUpdateFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.housingUpdateFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isBusinessSupplementViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.businessSupplementFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isClassroomLabEquipmentProposalViewers() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.classroomLabEquipmentProposalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isVoiceMovementProdRequestViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.voiceMovementProdCoachRequestViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isGuestArtistProposalViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.guestArtistProposalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isSpecialEventProposalViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.specialEventProposalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isFacultyTravelProposalViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.facultyTravelProposalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isPetitionforRetroactiveWithdrawalViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.petitionforRetroactiveWithdrawalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isPosthumousDegreeApprovalViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.posthumousDegreeApprovalViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isTeachGrantSupplementViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.teachGrantSupplementViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isFamilyCollegeEnrollmentVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.familyCollegeEnrollmentViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isProjectedYearIncomeAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.projectedYearIncomeAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isFacultyAssignedTimeAgreementATGuidelinesViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.facultyAssignedTimeAgreementATGuidelinesViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isSelectiveServiceRegVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.selectiveServiceRegVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isParentDependentVerificationViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.parentDependentVerificationViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isVolunteerFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.csufVolunteerViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isPositionActionFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.positionActionFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isDqAppealViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dqAppealViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isNachaFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.nachaFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isAppealofaDeclinedFeeWaiverFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.appealofaDeclinedFeeWaiverFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isNewAssetAcquisitionFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.newAssetAcquisitionFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isLostorStolenPropertyFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.lostorStolenPropertyFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isVehicleReleaseFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.vehicleReleaseFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isOffCampusAgreementUseFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.offCampusAgreementUseFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isVerificationReqFormReviewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.verificationReqFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isRetroactiveLeaveOfAbsenceFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.retroactiveLoaReportViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isPropertySurveyFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.propertySurveyFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isPropertyTransferFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.propertyTransferFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isRequestForInvoiceFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.requestForInvoiceFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isUniversityWithdrawalFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.universityWithdrawalFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isDesignationUniversityCashCollectionFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.designationUniversityCashCollectionFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isAuthorizationDriverRecordInfoFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.authorizationDriverRecordInformationFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isAuthorizationPrivateOwnedVehiclesFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.authorizationPrivateOwnedVehiclesFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isAuthorizationVehicleUniversityBusinessFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.authorizationVehicleUniversityBusinessFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isParentalConsentAIFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.parentalConsentAIFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}
	
	public boolean isDottedLineNonCHRSFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.dottedLineNonCHRSFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	public boolean isVendorFeeWaiverReductionFormViewer() {
		try {
			return inboxItemService.isAuthorizableAMember(session, getUserId(),
					reportConfig.vendorFeeWaiverReductionFormViewersGroupList());

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

}
