window.onload=function(){window.jQuery?$(document).ready(function(){$(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(),$("body").append("<div class='overlay'></div>"),$(".navbar-toggle").on("click",function(){$(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")),$(".sideMenu, .overlay").toggleClass("open"),$(".overlay").on("click",function(){$(this).removeClass("open"),$(".sideMenu").removeClass("open")})}),$(window).resize(function(){$(".navbar-toggle").is(":hidden")?$(".sideMenu, .overlay").hide():$(".sideMenu, .overlay").show()})}):console.log("sidebarNavigation Requires jQuery")};

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// Navigation menu tabs highlighting script
var identifier = $('.identifier').data("identifier");
switch(identifier) {
 case 'campusforms':
    $('#pills-campusforms-tab').addClass('active');
    break;
 case 'formscatalogue':
    $('#pills-formscatalogue-tab').addClass('active');
    break;
 case 'drafts':
    $('#pills-drafts-tab').addClass('active');
    break;
 case 'submissions':
    $('#pills-submissions-tab').addClass('active');
    break; 
 case 'mytasks':
    $('#pills-mytasks-tab').addClass('active');
    break;
 case 'help':
    $('#pills-help-tab').addClass('active');
    break;
 case 'sysdowntime':
    $('#pills-sysdowntime-tab').addClass('active');
    break;
 case 'sysconfig':
    $('#pills-sysconfig-tab').addClass('active');
    break;
 case 'gcreport':
    $('#pills-gcreport-tab').addClass('active');
    break;
 case 'scwreport':
    $('#pills-scwreport-tab').addClass('active');
    break;
 case 'mppreport':
    $('#pills-mppreport-tab').addClass('active');
    break;
 case 'staffreport':
    $('#pills-staffreport-tab').addClass('active');
    break;
 case 'mmcreport':
    $('#pills-mmcreport-tab').addClass('active');
    break;
 case 'tfpreport':
    $('#pills-tfpreport-tab').addClass('active');
    break;
 case 'npdsreport':
    $('#pills-npdsreport-tab').addClass('active');
    break; 
 case 'efwreport':
    $('#pills-efwreport-tab').addClass('active');
    break;
 case 'npdmreport':
    $('#pills-npdmreport-tab').addClass('active');
    break; 
 case 'dfwreport':
    $('#pills-dfwreport-tab').addClass('active');
    break; 
 case 'dfwreport':
    $('#pills-dptcreport-tab').addClass('active');
    break;
 case 'sodreport':
    $('#pills-sodreport-tab').addClass('active');
    break;
 case 'saefwreport':
    $('#pills-saefwreport-tab').addClass('active');
    break;
 case 'clrreport':
    $('#pills-clrreport-tab').addClass('active');
    break;
 case 'pfareport':
    $('#pills-pfareport-tab').addClass('active');
    break;   
 case 'careerDevreport':
    $('#pills-careerDevreport-tab').addClass('active');
    break;
 case 'otsdreport':
    $('#pills-otsdreport-tab').addClass('active');
    break; 
 case 'panreport':
    $('#pills-panreport-tab').addClass('active');
    break; 
 case 'mprreport':
    $('#pills-mprreport-tab').addClass('active');
    break;
 case 'manualcdReport':
    $('#pills-manualcdReport').addClass('active');
    break;
 case 'tcrreport':
    $('#pills-tcrreport').addClass('active');
    break;   
 case 'efwreport':
    $('#pills-efwreport-tab').addClass('active');
    break;
 case 'cldreport':
    $('#pills-cldreport-tab').addClass('active');
    break;
 case 'payplanreport':
    $('#pills-payplanreport-tab').addClass('active');
    break;
 case 'docknoticereport':
    $('#pills-docknoticereport-tab').addClass('active');
    break;
 case 'doareport':
    $('#pills-doareport-tab').addClass('active');
    break;
 case 'hourlyINTreport':
    $('#pills-hourlyINTreport-tab').addClass('active');
    break;
 case 'splconreport':
    $('#pills-splconreport-tab').addClass('active');
    break; 
 case 'stmereport':
    $('#pills-stmereport-tab').addClass('active');
    break;
 case 'ctreport':
    $('#pills-ctreport-tab').addClass('active');
    break;
 case 'workflow-administration':
    $('#pills-workflow-administration-tab').addClass('active');
    break; 
 case 'appealsreport':
    $('#pills-appealsreport-tab').addClass('active');
    break;
 case 'loaReport':
    $('#pills-loaReport-tab').addClass('active');
    break;
 case 'cyreport':
    $('#pills-cyreport-tab').addClass('active');
    break;  
 case 'lateAddsreport':
    $('#pills-lateAddsreport-tab').addClass('active');
    break;  
 case 'faerreport':
    $('#pills-faerreport-tab').addClass('active');
    break;
 case 'petitionReport':
    $('#pills-petitionReport-tab').addClass('active');
    break;       
 case 'mppJustificationreport':
    $('#pills-mppJustificationreport-tab').addClass('active');
    break;  
  case 'telecommutereport':
    $('#pills-telecommutereport-tab').addClass('active');
    break; 
 case 'farreport':
    $('#pills-farreport-tab').addClass('active');
    break; 
 case 'farfreport':
    $('#pills-farfreport-tab').addClass('active');
    break;
 case 'doaarfreport':
    $('#pills-doaarfreport-tab').addClass('active');
    break;
 case 'csarfreport':
    $('#pills-csarfreport-tab').addClass('active');
    break;
 case 'hrarfreport':
    $('#pills-hrarfreport-tab').addClass('active');
    break;
 case 'requestForExcessUnitsReport':
    $('#pills-requestForExcessUnitsReport-tab').addClass('active');
    break;  
 case 'sftsreport':
    $('#pills-sftsreport-tab').addClass('active');
    break;
 case 'tasubafreport':
    $('#pills-tasubafreport-tab').addClass('active');
    break;
 case 'chairdirectorafreport':
    $('#pills-chairdirectorafreport-tab').addClass('active');
    break;
 case 'ferpreport':
    $('#pills-ferpreport-tab').addClass('active');
    break;
 case 'sfsdreport':
    $('#pills-sfsdreport-tab').addClass('active');
    break;
 case 'prtbreport':
    $('#pills-prtbreport-tab').addClass('active');
    break;
 case 'tasubtsreport':
    $('#pills-tasubtsreport-tab').addClass('active');
    break;
 case 'tbCbeDeclarationReport':
    $('#pills-cbeDeclarationReport-tab').addClass('active');
    break; 
 case 'tbParentTaxF0CTXPReport':
    $('#pills-tbParentTaxF0CTXPReport-tab').addClass('active');
    break;  
 case 'ps980report':
    $('#pills-ps980report-tab').addClass('active');
    break;
 case 'taxFilingStatementReport':
    $('#pills-taxFilingStatementReport-tab').addClass('active');
    break; 
 case 'familySizeCertificateReport':
    $('#pills-familySizeCertificateReport-tab').addClass('active');
    break;       
 case 'citizenshipVerificationReport':
    $('#pills-citizenshipVerificationReport-tab').addClass('active');
    break; 
 case 'facultySpecialConsultantStipendreport':
    $('#pills-facultySpecialConsultantStipendreport-tab').addClass('active');
    break; 
 case 'requestfortimeconflictreport':
    $('#pills-requestfortimeconflictreport-tab').addClass('active');
    break;
 case 'sectionchangereport':
    $('#pills-sectionchangereport-tab').addClass('active');
    break;
 case 'idverificationstatementreport':
    $('#pills-idverificationstatementreport-tab').addClass('active');
    break;
 case 'immigrationcitizenshipreport':
    $('#pills-immigrationcitizenshipreport-tab').addClass('active');
    break;
 case 'calgranttransferreport':
    $('#pills-calgranttransferreport-tab').addClass('active');
    break;
 case 'sapappealreport':
    $('#pills-sapappealreport-tab').addClass('active');
    break;
 case 'unitcapappealreport':
    $('#pills-unitcapappealreport-tab').addClass('active');
    break;
 case 'loanStatusVerificationreport':
    $('#pills-loanStatusVerificationreport-tab').addClass('active');
    break;
 case 'studentnonfilerreport':
    $('#pills-studentnonfilerreport-tab').addClass('active');
    break;       
 case 'facultyassignedtimeagreementreport':
    $('#pills-facultyassignedtimeagreementreport-tab').addClass('active');
    break;
 case 'federalaidrefundverificationreport':
    $('#pills-federalaidrefundverificationreport-tab').addClass('active');
    break;
 case 'studentdependentsverificationreport':
    $('#pills-studentdependentsverificationreport-tab').addClass('active');
    break;
 case 'studentw2statementreport':
    $('#pills-studentw2statementreport-tab').addClass('active');
    break;
 case 'verificationOfNonFilingreport':
    $('#pills-verificationOfNonFilingreport-tab').addClass('active');
    break;
 case 'nonfilerreport':
    $('#pills-nonfilerreport-tab').addClass('active');
    break;
 case 'federalDirectLoanRequestreport':
    $('#pills-federalDirectLoanRequestreport-tab').addClass('active');
    break;
 case 'parentstatementofnonsupportreport':
    $('#pills-parentstatementofnonsupportreport-tab').addClass('active');
    break;  
 case 'federalgradloanreport':
    $('#pills-federalgradloanreport-tab').addClass('active');
    break;
 case 'parentamendedtaxreturnreport':
    $('#pills-parentamendedtaxreturnreport-tab').addClass('active');
    break; 
 case 'droneFlightRequestreport':
    $('#pills-droneFlightRequestreport-tab').addClass('active');
    break;
 case 'tdaexceptionugreport':
    $('#pills-tdaexceptionugreport-tab').addClass('active');
    break;
 case 'federalDirectPlusApplicationreport':
    $('#pills-federalDirectPlusApplicationreport-tab').addClass('active');
    break;
 case 'tdaexceptiongradreport':
    $('#pills-tdaexceptiongradreport-tab').addClass('active');
    break;
 case 'awardadjustmentappealreport':
    $('#pills-awardadjustmentappealreport-tab').addClass('active');
    break;  
 case 'dependencyoverriderenewalreport':
    $('#pills-dependencyoverriderenewalreport-tab').addClass('active');
    break;
 case 'dependencyoverrideappealreport':
    $('#pills-dependencyoverrideappealreport-tab').addClass('active');
    break;    
 case 'studentbudgetadjappealreport':
    $('#pills-studentbudgetadjappealreport-tab').addClass('active');
    break; 
 case 'teachgrantreport':
    $('#pills-teachgrantreport-tab').addClass('active');
    break;
 case 'summerloanreport':
    $('#pills-summerloanreport-tab').addClass('active');
    break;
 case 'studentprojectedincomereport':
    $('#pills-studentprojectedincomereport-tab').addClass('active');
    break; 
 case 'unaccompaniedhomlessyouthverificationreport':
    $('#pills-unaccompaniedhomlessyouthverificationreport-tab').addClass('active');
    break; 
 case 'titancardreport':
    $('#pills-titancardreport-tab').addClass('active');
    break;
 case 'stateuniversitygrantappealreport':
    $('#pills-stateuniversitygrantappealreport-tab').addClass('active');
    break;
 case 'reqtocancelfinancialaidprocessingreport':
    $('#pills-reqtocancelfinancialaidprocessingreport-tab').addClass('active');
    break;
 case 'chafeeStudentSuccessPlanreport':
    $('#pills-chafeeStudentSuccessPlanreport-tab').addClass('active');
    break;
 case 'goldenstateteachergrantreport':
    $('#pills-goldenstateteachergrantreport-tab').addClass('active');
    break;
 case 'veteranStatusVerificationreport':
    $('#pills-veteranStatusVerificationreport-tab').addClass('active');
    break;
 case 'ssnVerificationreport':
    $('#pills-ssnVerificationreport-tab').addClass('active');
    break;
 case 'petitionpgcreditreport':
    $('#pills-petitionpgcreditreport-tab').addClass('active');
    break;
 case 'petitiongevariationreport':
    $('#pills-petitiongevariationreport-tab').addClass('active');
    break;
 case 'studyAbroadAcademicTranscriptSubmissionreport':
    $('#pills-studyAbroadAcademicTranscriptSubmissionreport-tab').addClass('active');
    break;
 case 'assetInformationreport':
    $('#pills-assetInformationreport-tab').addClass('active');
    break;
 case 'investmentRealEstateVerificationreport':
    $('#pills-investmentRealEstateVerificationreport-tab').addClass('active');
    break;
 case 'pensionRollOverreport':
    $('#pills-pensionRollOverreport-tab').addClass('active');
    break;
 case 'federaltaxreturnreport':
    $('#pills-federaltaxreturnreport-tab').addClass('active');
    break;
 case 'federaltaxreturnscheduleereport':
    $('#pills-federaltaxreturnscheduleereport-tab').addClass('active');
    break;
 case 'concurrentenrollmentagreementfallreport':
    $('#pills-concurrentenrollmentagreementfallreport-tab').addClass('active');
    break;
 case 'concurrentenrollmentagreementspringreport':
    $('#pills-concurrentenrollmentagreementspringreport-tab').addClass('active');
    break;
 case 'housingUpdateFormreport':
    $('#pills-housingUpdateFormreport-tab').addClass('active');
    break;
 case 'businesssupplementreport':
    $('#pills-businesssupplementreport-tab').addClass('active');
    break;
 case 'petitionforRetroactiveWithdrawalreport':
    $('#pills-petitionforRetroactiveWithdrawalreport-tab').addClass('active');
    break;
 case 'posthumousDegreeApprovalreport':
    $('#pills-posthumousDegreeApprovalreport-tab').addClass('active');
    break;
 case 'teachGrantSupplementreport':
    $('#pills-teachGrantSupplementreport-tab').addClass('active');
    break;
 case 'familyCollegeEnrollmentVerificationreport':
    $('#pills-familyCollegeEnrollmentVerificationreport').addClass('active');
    break;
 case 'projectedincomereport':
    $('#pills-projectedincomereport-tab').addClass('active');
    break;
 case 'dqAppealreport':
    $('#pills-dqAppealreport-tab').addClass('active');
    break;
 case 'nachaFormreport':
    $('#pills-nachaFormreport-tab').addClass('active');
    break;
 case 'newAssetAcquisitionFormReport':
    $('#pills-newAssetAcquisitionFormReport-tab').addClass('active');
    break;
 case 'lostStolenPropertyreport':
    $('#pills-lostStolenPropertyreport-tab').addClass('active');
    break;
 case 'vehicleReleaseFormreport':
    $('#pills-lostStolenPropertyreport-tab').addClass('active');
    break;
 case 'offCampusAgreementUsereport':
    $('#pills-offCampusAgreementUsereport-tab').addClass('active');
    break;
 case 'appealofaDeclinedFeeWaiverreport':
    $('#pills-appealofaDeclinedFeeWaiverreport-tab').addClass('active');
    break;
 case 'propertySurveyreport':
    $('#pills-propertySurveyRequestreport-tab').addClass('active');
    break;
 case 'propertyTransferRequestreport':
    $('#pills-propertyTransferRequestreport-tab').addClass('active');
    break;
 case 'retroactiveLeaveOfAbsencereport':
    $('#pills-retroactiveLoareport-tab').addClass('active');
    break;
 case 'verificationreqFormreport':
    $('#pills-verificationreqFormreport-tab').addClass('active');
    break;
 case 'volunteerFormReport':
    $('#pills-volunteerFormReport-tab').addClass('active');
    break;
 case 'universityReport':
    $('#pills-universityReport-tab').addClass('active');
    break;
 case 'rfiReport':
    $('#pills-rfiReport-tab').addClass('active');
    break;
 case 'designationCashReport':
    $('#pills-designationCashReport-tab').addClass('active');
    break;
 case 'authorizationDriverRecordInfoFormReport':
    $('#pills-authorizationDriverRecordInfoFormReport-tab').addClass('active');
    break;
 case 'authorizationPrivateOwnedVehiclesFormReport':
    $('#pills-authorizationPrivateOwnedVehiclesFormReport-tab').addClass('active');
    break;
 case 'authorizationVehicleUniversityBusinessFormReport':
    $('#pills-authorizationVehicleUniversityBusinessFormReport-tab').addClass('active');
    break;
 case 'vendorFeeWaiverReductionFormReport':
    $('#pills-vendorFeeWaiverReductionFormReport-tab').addClass('active');
    break;       
 default: 
    $('#pills-campusforms-tab').addClass('active');
} 

$(document).ready(function () {

    $('[data-toggle="slide-collapse"]').on('click', function() {
        $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({
          'width': 'toggle'
        }, 350);
        $(".menu-overlay").fadeIn(500);

      });
      $(".menu-overlay").click(function(event) {
        $(".navbar-toggle").trigger("click");
        $(".menu-overlay").fadeOut(500);
      });

});