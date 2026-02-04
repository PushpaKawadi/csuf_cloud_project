/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
gifModal.style.display = "none";
if(AthleticEmp.value == "1"){
  athleticsEmpGroup.visible = true;
}else{
    athleticsEmpGroup.visible = false;
}
if(StageIndicator.value === null){
  supportingDocs.enabled = true;
}else{
    supportingDocs.enabled = false;

}


//Manager Review

/*initiator.value  = "Manager";
if(StageIndicator.value === null){
  selfEvalPanel.visible = false;
}else{
  if(evaluation1.value !== null){
  selfEvalPanel.visible = true;
}else{
  selfEvalPanel.visible = false;
}
}*/


if(StageIndicator.value === null  || StageIndicator.value == "ToManager" || StageIndicator.value == "ToManagerAcknowledge" || StageIndicator.value == "ToManagerFinalAcknowledge" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
//if(initiator.value  == "Initiator" && StageIndicator.value === null ){
//  EvaluatorSignaturePanel.visible = false;
//}else{
//}

EvaluatorSignaturePanel.visible = true;
if(StageIndicator.value == "ToManagerAcknowledge" || StageIndicator.value == "ToManagerFinalAcknowledge" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
  employeeInformation.enabled = false;
  performanceFactorsRatings.enabled = false;
  supportingStatements.enabled = false;
 
}else if(StageIndicator.value === null){
  employeeInformation.enabled = true;
  performanceFactorsRatings.enabled = true;
  supportingStatements.enabled = true;
  signature.visible = false;
}else{ 
  employeeInformation.enabled = false;
  performanceFactorsRatings.enabled = true;
  supportingStatements.enabled = true;
  EvaluatorSignaturePanel.visible = false;
   if(EvaluatorSign.value !== null){
    signature.visible = true;    
  }else{
  signature.visible = false;
  }
}if(StageIndicator.value == "ToManager"){
    employeeInformation.enabled = true;
    EmpID.enabled = false;
    EmpLastName.enabled = false;
    EmpFirstName.enabled = false;
    EmpRCD.enabled = false;
    CBID.enabled = false;
    Classification.enabled = false;
    DeptID.enabled = false;
    DeptName.enabled = false;
    EvaluatorName.enabled = false;
    EvaluationType.enabled = true;
    AthleticEmp.enabled = true;
    ReviewPeriodFrom.enabled = true;
    ReviewPeriodTo.enabled = true; 
}
  if(StageIndicator.value == "ToManagerHRDI"){
    employeeInformation.enabled = true;
    EmpID.enabled = false;
    EmpLastName.enabled = false;
    EmpFirstName.enabled = false;
    EmpRCD.enabled = false;
    CBID.enabled = false;
    Classification.enabled = false;
    DeptID.enabled = false;
    DeptName.enabled = false;
    EvaluatorName.enabled = false;
    EvaluationType.enabled = true;
    AthleticEmp.enabled = false;
    ReviewPeriodFrom.enabled = true;
    ReviewPeriodTo.enabled = true;    
    EvaluatorSignaturePanel.enabled = true;
    EmpDidNotSignCB.enabled = false;
    EvaluatorComment.enabled = true;
  }
  if(EmpSign.value !== null){
    
    EmpSignaturePanel.visible = true;
     EmpSignaturePanel.enabled = false;
  }else{
   if(sendBackStep.value == "From Employee"){
      EmpSignaturePanel.visible = false;
        EmpSignaturePanel.enabled = false;
    }else{
    EmpSignaturePanel.visible = false;
  }
  }
   if(HRCoordinatorSign.value !== null){
     signature.visible = true; 
     //EvaluatorSignaturePanel.visible = false;
     HRCooSection.visible = true;
     HRCooSection.enabled = false;
  }else{
   
    HRCooSection.visible = false;
    
  }
   if(AdminSign.value !== null){
    AdminSignaturePanel.visible = true;
     AdminSignaturePanel.enabled = false;
  }else{
    AdminSignaturePanel.visible = false;
  }
   if(HRDIInitials.value !== null){
    HRSignaturePanel.visible = true;
     
     HRSignaturePanel.enabled = false;
   
  }else{
    HRSignaturePanel.visible = false;
  }
     
  
}
//HR Coordinator

if(StageIndicator.value == "ToHRCoo"){
 
  HRCooSection.visible = true;
  HRCooSection.enabled = true;
  employeeInformation.enabled = false;
  performanceFactorsRatings.enabled = false;
  supportingStatements.enabled = false;
  employeeInformation.enabled = false;
  EvaluatorSignaturePanel.visible = true;
  EvaluatorSignaturePanel.enabled = false;
   EvaluatorSignaturePanel.visible = false;
 /* if(EvaluatorSign.value !== null){
    EvaluatorSignaturePanel.visible = true;
     EvaluatorSignaturePanel.enabled = false;
  }else{
    if(EvaluatorComment.value !== null){
      EvaluatorSignaturePanel.visible = true;
       EvaluatorSignaturePanel.enabled = false;
    }else{
    EvaluatorSignaturePanel.visible = false;
    }
  }*/
  if(EmpSign.value !== null){
    EmpSignaturePanel.visible = false;
     EmpSignaturePanel.enabled = false;
  }else{
    if(sendBackStep.value == "From Employee"){
      EmpSignaturePanel.visible = false;
        EmpSignaturePanel.enabled = false;
    }else{
    EmpSignaturePanel.visible = false;
    }
    
  }
   if(AdminSign.value !== null){
    AdminSignaturePanel.visible = true;
     AdminSignaturePanel.enabled = false;
  }else{
    AdminSignaturePanel.visible = false;
  }
   if(HRDIInitials.value !== null){
    HRSignaturePanel.visible = true;
     HRSignaturePanel.enabled = false;
  }else{
    HRSignaturePanel.visible = false;
  }
 
}

//Employee review

if(StageIndicator.value == "ToEmployee" || StageIndicator.value == "ToEmployeeAck" || StageIndicator.value == "ToEmployeeAckOnExpire"){
  if(EvaluatorSign.value !== null){
    signature.visible = true;    
  }else{
  signature.visible = false;
  }
  if(StageIndicator.value == "ToEmployeeAck"){
   EmpSignaturePanel.visible = true;  
    EvaluatorSignaturePanel.visible = true;
    EvaluatorSignaturePanel.enabled = false;
  }else{
  EmpSignaturePanel.visible = false;
    EvaluatorSignaturePanel.visible = false;
  }
  
  EmpSignaturePanel.enabled = true;
  employeeInformation.enabled = false;
  performanceFactorsRatings.enabled = false;
  supportingStatements.enabled = false;
  employeeInformation.enabled = false;
  //EvaluatorSignaturePanel.visible = false;
 // EvaluatorSignaturePanel.enabled = false;
   HRCooSection.visible = false;
  /*if(EvaluatorSign.value !== null){
    EvaluatorSignaturePanel.visible = true;
     EvaluatorSignaturePanel.enabled = false;
  }else{
   if(EvaluatorComment.value !== null){
      EvaluatorSignaturePanel.visible = true;
      EvaluatorSignaturePanel.enabled = false;
    }else{
    EvaluatorSignaturePanel.visible = false;
    }
  }*/
   
   if(AdminSign.value !== null){
    AdminSignaturePanel.visible = true;
     AdminSignaturePanel.enabled = false;
  }else{
    AdminSignaturePanel.visible = false;
  }
   if(HRDIInitials.value !== null){
    HRSignaturePanel.visible = true;
     HRSignaturePanel.enabled = false;
  }else{
    HRSignaturePanel.visible = false;
  }
   
}

//To Administrator
if(StageIndicator.value == "ToAdmin"){

  AdminSignaturePanel.visible = true;
  AdminSignaturePanel.enabled = true;
  employeeInformation.enabled = false;
  performanceFactorsRatings.enabled = false;
  supportingStatements.enabled = false;
  employeeInformation.enabled = false;
  EvaluatorSignaturePanel.visible = true;
  EvaluatorSignaturePanel.enabled = false;
   HRCooSection.visible = false;
  if(EmpSign.value !== null){
    EmpSignaturePanel.visible = true;
     EmpSignaturePanel.enabled = false;
  }else{
    if(sendBackStep.value == "From Employee"){
      EmpSignaturePanel.visible = false;
        EmpSignaturePanel.enabled = false;
    }else{
    EmpSignaturePanel.visible = false;
    }
    
  }
 /* if(EvaluatorSign.value !== null){
    EvaluatorSignaturePanel.visible = true;
     EvaluatorSignaturePanel.enabled = false;
  }else{
    EvaluatorSignaturePanel.visible = false;
  }
   if(HRCoordinatorSign.value !== null){
    HRCooSection.visible = true;
     HRCooSection.enabled = false;
  }else{
    HRCooSection.visible = false;
  }*/
   
   if(HRDIInitials.value !== null){
    HRSignaturePanel.visible = true;
     HRSignaturePanel.enabled = false;
  }else{
    HRSignaturePanel.visible = false;
  }
  
}
// HRDI Review

if(StageIndicator.value == "ToHRDI"){
  
  performanceFactorsRatings.enabled = false;
  //employeeInformation.enabled = false;
  employeeInformation.enabled = true;
    EmpID.enabled = false;
    EmpLastName.enabled = true;
    EmpFirstName.enabled = true;
    EmpRCD.enabled = true;
    CBID.enabled = true;
    Range.enabled = true;
    Classification.enabled = true;
    DeptID.enabled = true;//08042021
    DeptName.enabled = true;//08042021
    EvaluatorName.enabled = true;
    EvaluationType.enabled = true;
  	EvalTitle.enabled = true;//08042021
    AthleticEmp.enabled = false;
    ReviewPeriodFrom.enabled = true;
    ReviewPeriodTo.enabled = true;

  supportingStatements.enabled = false;
  //employeeInformation.enabled = false;
  HRSignaturePanel.visible = true;
  HRSignaturePanel.enabled = true;
  EvaluatorSignaturePanel.visible = true;
  EvaluatorSignaturePanel.enabled = true;
  EmpDidNotSignCB.enabled = false;
SendForEmpAckCB.enabled = false;
actionTakenAfterExpiry.enabled = false;
EvalCB.enabled = false;
EvaluatorNameSign.enabled = true;
EvaluatorSign.enabled = true;
EvaluatorDate.enabled = false;
  EmpSignaturePanel.visible = true;
  EmpSignaturePanel.enabled = true;
  EmpCB.enabled = false;
EmpSign.enabled = true;
EmpDate.enabled = false;
   HRCooSection.visible = false;
 /* if(EmpSign.value !== null){
    EmpSignaturePanel.visible = true;
    EmpSignaturePanel.enabled = false;
  }else{
    if(sendBackStep.value == "From Employee"){
      EmpSignaturePanel.visible = true;
        EmpSignaturePanel.enabled = false;
    }else{
    EmpSignaturePanel.visible = false;
    }
    
  }
  if(EvaluatorSign.value !== null){
    EvaluatorSignaturePanel.visible = true;
     EvaluatorSignaturePanel.enabled = false;
  }else{
    EvaluatorSignaturePanel.visible = false;
  }*/
   
   if(AdminSign.value !== null){
    AdminSignaturePanel.visible = true;
     AdminSignaturePanel.enabled = true;
     AdminCB.enabled = false;
     AdminName.enabled = true;
     AdminSign.enabled = true;
     AdminDate.enabled = false;
  }else{
    AdminSignaturePanel.visible = false;
  }
   if(AdminSign.value !== null){
    AdminSignaturePanel.visible = true;
     AdminSignaturePanel.enabled = true;
     AdminCB.enabled = false;
     AdminName.enabled = true;
     AdminSign.enabled = true;
     AdminDate.enabled = false;
  }else{
    AdminSignaturePanel.visible = false;
  }
  
  
}
//Expiry of emp work item
ExpireText.visible = false;
if(StageIndicator.value == "ToManagerAcknowledge"){
if(ExpiryCheckFlag.value == "false"){
  StageIndicator.value = "ToManagerAcknowledge";
}else{
  StageIndicator.value = "ToManagerAcknowledgeOnExpire";
  
  ExpireText.visible = true;
}
}
if(StageIndicator.value == "ToHRDI"){
  EmpRCD.mandatory = "error";
  CBID.mandatory = "error";
  Range.mandatory = "error";
  Classification.mandatory = "error";
}else{
  EmpRCD.mandatory = "";
  CBID.mandatory = "";
  Range.mandatory = "";
  Classification.mandatory = "";
}


        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value === null){
  debugger;
  $.ajax({
type: 'GET', 
url:"/bin/getEvaluationFormData",
data: {action: "EMP_DETAILS"},
dataType: 'json',
 
success: function(myresopnse){

  
  if(myresopnse.length !== 0){
    for(i=0;i<myresopnse.length;i++){
      if(myresopnse[i].UNION_CD == ("M80" || "M98")){
        CBIDFlag.value = myresopnse[i].UNION_CD;
        Initiator_EmpId.value = myresopnse[i].EMPLID;
        break;
    }
    
  }
}
}
    });
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  showErrorModal("Alert!", "Please make sure to save your work every 20-30 minutes and complete all the required fields.");
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEmployee"){
  signature.visible = true;
  EvaluatorSignaturePanel.visible = false;
  HRCooSection.visible = false;
  AdminSignaturePanel.visible = false;
  VPsignaturePanel.visible = false;
  HRSignaturePanel.visible = false;
  EmpSignaturePanel.visible = true;
  EmpCB.visible = false;
  EmpSign.visible = false;
  EmpDate.visible = false;
}

if(StageIndicator.value == "ToManagerAcknowledge"){
  if(EmpComment !== null){
    EmpSignaturePanel.visible = true;
    EmpCB.visible = false;
    EmpSign.visible = false;
    EmpDate.visible = false; 
    EmpComment.enabled = false;
  }
}

if(StageIndicator.value == "ToManager"){
  if(EmpComment !== null){
    EmpSignaturePanel.visible = true;
     signature.visible = true;
  EvaluatorSignaturePanel.visible = false;
  HRCooSection.visible = false;
  AdminSignaturePanel.visible = false;
  VPsignaturePanel.visible = false;
  HRSignaturePanel.visible = false;
    EmpCB.visible = false;
    EmpSign.visible = false;
    EmpDate.visible = false; 
    EmpComment.enabled = false;
  }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_textdraw1680248232571_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_textdraw1680248232571_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEmployee"){
  this.visible = true;
} else{
  this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager" || StageIndicator.value == "ToManagerAcknowledge" || StageIndicator.value == "ToManagerFinalAcknowledge" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToManagerAcknowledgeOnExpire" || StageIndicator.value == "ToEmployee" || StageIndicator.value == "ToEmployeeAck" || StageIndicator.value == "ToEmployeeAckOnExpire" || StageIndicator.value == "ToHRDI" || StageIndicator.value == "ToHRCoo" || StageIndicator.value == "ToAdmin"){
  this.visible = true;
}
else{
  //alert("sdsddsf");
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_1_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_1_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EvaluationType.value !== null && ConceptualSkill.value !== null && InterpersonalSkills.value !== null && TechnicalSkills.value !== null && OverallRating.value !== null && SupportStatement1.value !== null && SupportStatement2.value !== null && SupportStatement3.value !== null && SupportStatement4.value !== null){

    generatePDFStep.value = "Draft";
   getPdf();
  
    
}else{
  var errorModal = document.getElementById('errorPopup');

   var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please fill in the required fields";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footererrorModal = document.getElementById("errorPopup-footer");
    var errorokButton = document.createElement("input");
    errorokButton.type = "button";
    errorokButton.setAttribute("class", "okBtn");
    //errorokButton.id = "okBtn";
    errorokButton.value = "Ok";
    errorokButton.onclick = function(event) {
        errorModal.style.display = "none";
    };
    footererrorModal.appendChild(errorokButton);
    
    errorModal.style.display = "block";
  
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/mpp-perfromance-evaluation/mpp-performance-evaluation');
            jsonData.append('fileName', EmpFirstName.value + "_" + EmpLastName.value + "(" + chrsId.value + ")" + "_" + Date.now());          
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';	
            xhr.send(jsonData);	
            xhr.onload  = function () {
                if (this.status === 200) {
                    var filename = "";
                    var disposition = xhr.getResponseHeader('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(disposition);
                        if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                    }
                    var type = xhr.getResponseHeader('Content-Type');

                    var blob;
                    if (typeof File === 'function') {
                        try {
                            blob = new File([this.response], filename, { type: type });
                        } catch (e) { /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], { type: type });
                    }

                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");
                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);								
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                        setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                    }
                }
            };	      
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CopyRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CopyRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = true;
   
}else{
   this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CopyRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CopyRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
   if(CopyRB.value == "1"){
     copyDataPanel.visible = true;
   }else{
     copyDataPanel.visible = false;
     Copy_EmpId.value = "";
     Copy_EvalType.value = "";
      CBID.value = null;
                        Classification.value = null;
                        EmpFirstName.value = null;
                        EmpRCD.value = null;
                        division.value = null;
                        EvaluationType.value = null;
                        SupportStatement2.value = null;
                        EmpID.value = null;
                        //ReviewPeriodTo.value = null;
                        SupportStatement1.value = null;
                        SupportStatement4.value = null;
                        EmpLastName.value = null;
                        DeptName.value = null;
                        SupportStatement3.value = null;
                        DeptID.value = null;
                        divisionName.value = null;
                        EvaluatorName.value = null;
                        Range.value = null;
                        EmployeeFullName.value = null;

                        EmpUserID.value = null;
                        AdminUserID.value = null;
                        EmpEmailID.value = null;
                        AdminEmailID.value = null;
     EmpIdFlag.value = null;
      ConceptualSkill.value =  null;
                      InterpersonalSkills.value =   null;
                      TechnicalSkills.value =   null;
                      OtherSkills.value =  null;
                      OtherRating.value =   null;
                      OverallRating.value =   null;
                      SectionBComment.value =  null;
   }
   }
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CopyRB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CopyRB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
   if(CopyRB.value == "1"){
     copyDataPanel.visible = true;
   }else{
     copyDataPanel.visible = false;
     Copy_chrsId.value = "";
     Copy_EvalType.value = "";
      CBID.value = null;
                        Classification.value = null;
                        EmpFirstName.value = null;
                        EmpRCD.value = null;
                        division.value = null;
                        EvaluationType.value = null;
                        SupportStatement2.value = null;
                        EmpID.value = null;
                        //ReviewPeriodTo.value = null;
                        SupportStatement1.value = null;
                        SupportStatement4.value = null;
                        EmpLastName.value = null;
                        DeptName.value = null;
                        SupportStatement3.value = null;
                        DeptID.value = null;
                        divisionName.value = null;
                        EvaluatorName.value = null;
                        Range.value = null;
                        EmployeeFullName.value = null;

                        EmpUserID.value = null;
                        AdminUserID.value = null;
                        EmpEmailID.value = null;
                        AdminEmailID.value = null;
     EmpIdFlag.value = null;
      ConceptualSkill.value =  null;
                      InterpersonalSkills.value =   null;
                      TechnicalSkills.value =   null;
                      OtherSkills.value =  null;
                      OtherRating.value =   null;
                      OverallRating.value =   null;
                      SectionBComment.value =  null;
   }
   }
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_copyDataPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_copyDataPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(CopyRB.value == "1"){
     copyDataPanel.visible = true;
   }else{
     copyDataPanel.visible = false;
   }
}else{
  copyDataPanel.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_chrsId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var CHRSID = this.value;
$.ajax({

    type: 'GET',

    url: "/bin/getEvaluationFormDataCHRSID",
             data: {
                    chrsId: CHRSID,
                    action: "MPP_COPY_CHRSID_DATA"
                },
    dataType: 'json',
    success: function(myresoponse) {
     //gifModal.style.display = "block";
       
       if (myresoponse.length > 0) {
         Copy_EmpId.value = myresoponse[0].EMPLOYEEID;  
       }
    }
          });
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_EvalType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_EvalType_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_ReviewPeriodFrom_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_ReviewPeriodFrom_init0 = function (scope) {
    with(this) {
        with(scope) {
            /* Add your own JavaScript here. */
var dateValue = this.value;
//alert(dateValue);
if(dateValue === null){
var today = new Date();
//alert(today);
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 2;
//var d = new Date(lastYear, 3, 16);
var d = (lastYear+"-"+"5"+"-"+"16");
  //alert(d);
this.value = d;
}else{
this.value = dateValue;
}
//this.visible = false;

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_ReviewPeriodTo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_ReviewPeriodTo_init0 = function (scope) {
    with(this) {
        with(scope) {
            
var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;
//var d = new Date(curyear, 3, 15);
var d = (lastYear+"-"+"5"+"-"+"15");
this.value = d;
}else{
this.value = dateValue;
}
//this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && CopyRB.value == "1"){
  Copy_EmpId.mandatory = "error";
  Copy_EvalType.mandatory = "error";

Copy_ReviewPeriodFrom.mandatory = "error";
Copy_ReviewPeriodTo.mandatory = "error";
}else{
   Copy_EmpId.mandatory = "";
  Copy_EvalType.mandatory = "";

Copy_ReviewPeriodFrom.mandatory = "";
Copy_ReviewPeriodTo.mandatory = "";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
debugger;
   var userID = LogUser.value;
		workflow_initiator.value = userID;
   // if (Copy_EmpId.value !== null && Copy_EvalType.value !== null && Copy_ReviewPeriodFrom.value !== null && Copy_ReviewPeriodTo.value !== null) {
       if (Copy_EmpId.value !== null) {
        if ((CBIDFlag.value !== null) && (CBIDFlag.value == ("M80" || "M98")) && Initiator_EmpId.value != Copy_EmpId.value) {
            var gifModal = document.getElementById('gifModal');
            gifModal.style.display = "block";
          
            var cwid = Copy_EmpId.value;
            var evalType = Copy_EvalType.value;
          if(cwid == "899631436"){
            Copy_ReviewPeriodFrom.value = ("2021"+"-"+"4"+"-"+"1");
            Copy_ReviewPeriodTo.value = ("2021"+"-"+"9"+"-"+"30");
          }
            var reviewPeriodFrom = Copy_ReviewPeriodFrom.value;
            var reviewPeriodTo = Copy_ReviewPeriodTo.value;
          
          
            var actionType = "MPP_COPY_DATA";
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormData",
                data: {
                    cwid: cwid,
                    reviewPeriodFrom: reviewPeriodFrom,
                    reviewPeriodTo: reviewPeriodTo,
                    /*evalType: evalType,*/
                    action: actionType
                },
                dataType: 'json',
                success: function(myresponse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];

                    if (myresponse.length === 1) {
                        EmpIdFlag.value = Copy_EmpId.value;
                        //var fromDt = (myresponse[0].REVIEWPERIODFROM).replace(" 00:00:00.0", "");
                        //ReviewPeriodFrom.value = fromDt;
                        //Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                        AthleticEmp.value = myresponse[0].ATHLETICEMP;
                         if(myresponse[0].ATHLETICEMP == 1){
                          athleticsEmpGroup.visible = true;
                        }
                        else{
                          athleticsEmpGroup.visible = false;
                        }
                        /*CBID.value = myresponse[0].CBID;
                        Classification.value = myresponse[0].CLASSIFICATION;
                        EmpFirstName.value = myresponse[0].FIRSTNAME;
                        EmpRCD.value = myresponse[0].EMPRCD;
                        division.value = myresponse[0].DIVISION;*/
                        EvaluationType.value = myresponse[0].EVALUATIONTYPE;
                        AthleticEmpImpToPos.value = myresponse[0].ATHLETICEMP_IMP_TO_POS;
                        SupportStatement2.value = myresponse[0].SUPPORTSTMT2;
                        EmpID.value = myresponse[0].EMPID;
                       // var toDt = (myresponse[0].REVIEWPERIODTO).replace(" 00:00:00.0", "");
                        //ReviewPeriodTo.value = toDt;
                        SupportStatement1.value = myresponse[0].SUPPORTSTMT1;
                        SupportStatement4.value = myresponse[0].SUPPORTSTMT4;
                        /*EmpLastName.value = myresponse[0].LASTNAME;
                        DeptName.value = myresponse[0].DEPTNAME;*/
                        SupportStatement3.value = myresponse[0].SUPPORTSTMT3;
                        /*DeptID.value = myresponse[0].DEPTID;
                        divisionName.value = myresponse[0].DIVISION_NAME;
                        EvaluatorName.value = myresponse[0].EVALUATORNAME;
                        Range.value = myresponse[0].RANGE;
                        EmployeeFullName.value = myresponse[0].FIRSTNAME + " " + myresponse[0].LASTNAME;
                      EmpName.value = myresponse[0].FIRSTNAME + " " + myresponse[0].LASTNAME;*/
                      ConceptualSkill.value =  myresponse[0].CONCEPTUALSKILLS;
                      InterpersonalSkills.value =  myresponse[0].INTERPERSONALSKILLS;
                      TechnicalSkills.value =  myresponse[0].TECHNICALSKILLS;
                      OtherSkills.value =  myresponse[0].OTHERS;
                      OtherRating.value =  myresponse[0].OTHER_RATING;
                      OverallRating.value =  myresponse[0].OVERALLRATING;
                      SectionBComment.value =  myresponse[0].SECTIONBCOMMENTS;
						getEmpEmail(EmpID.value,LogUser.value);
                        modal.style.display = "none";
                        gifModal.style.display = "none";
                        modal.style.display = "none";

                    } else if (myresponse.length > 1) {
                        generateDOR.visible = true;
                        gifModal.style.display = "none";
                        modal.style.display = "block";
                        //populate Hidden Fields

                        var col = [];
                        //col.push("EMPID");
                        //col.push("LASTNAME");
                        //col.push("FIRSTNAME");
                        col.push("DEPTID");
                        col.push("DEPTNAME");
                        col.push("REVIEWPERIODFROM");
                        col.push("REVIEWPERIODTO");
                        col.push("EVALUATIONTYPE");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        // var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                        var headings = ["", "Emp ID", "Dept Id", "Dept Name", "Review Period From", "Review Period To", "Evaluation Type"];
                        for (var j = 0; j < headings.length; j++) {
                            var th = document.createElement("th");
                            th.innerHTML = headings[j];
                            tr.appendChild(th);
                        }
                        for (var k = 0; k < myresponse.length; k++) {
                            tr = table.insertRow(-1);
                            // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                            var button = document.createElement("input");
                            button.type = "radio";
                            button.setAttribute("class", "rb");
                            button.id = "rbtn";
                            button.name = "group";
                            button.value = "";

                            var tabCell1 = tr.insertCell(-1);
                            tabCell1.appendChild(button);
                            var tabCellChrsid = tr.insertCell(-1);
                              tabCellChrsid.innerHTML = Copy_EmpId.value;
                            for (var l = 0; l < col.length; l++) {
                                var tabCell = tr.insertCell(-1);                                
                              if((myresponse[k][col[l]]).match(/ 00:00:00.0/g)){
                                var dt = myresponse[k][col[l]].replace(" 00:00:00.0", "");
                                tabCell.innerHTML = dt.substring(5, 7)+"-"+dt.substring(8, 10)+"-"+dt.substring(0, 4);                                
                              }else{
                                tabCell.innerHTML = myresponse[k][col[l]];
                              }
                            }
                        }
                        var divContainer = document.getElementById("showData");
                        divContainer.innerHTML = "";
                        divContainer.appendChild(table);

                        var footerModal = document.getElementById("modal_footer");

                        var okButton = document.createElement("input");
                        okButton.type = "button";
                        okButton.setAttribute("class", "okBtn");
                        //okButton.id = "okBtn";
                        okButton.value = "OK";
                        okButton.onclick = function(event) {

                            var n;
                            var rButtonStatus;
                            //var rButtonStatusFalse;
                            var rButtons = document.getElementsByClassName("rb");
                            for (n = 0; n < rButtons.length; n++) {
                                if (rButtons[n].checked === false) {
                                    rButtonStatus = false;
                                } else {
                                   
                                   // var fromDt = (myresponse[n].REVIEWPERIODFROM).replace(" 00:00:00.0", "");
                                   // ReviewPeriodFrom.value = fromDt;
                                    //Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                                    AthleticEmp.value = myresponse[n].ATHLETICEMP;
                                   if(myresponse[n].ATHLETICEMP == 1){
                          athleticsEmpGroup.visible = true;
                        }
                        else{
                          athleticsEmpGroup.visible = false;
                        }
                                    /*CBID.value = myresponse[n].CBID;
                                    Classification.value = myresponse[n].CLASSIFICATION;
                                    EmpFirstName.value = myresponse[n].FIRSTNAME;
                                    EmpRCD.value = myresponse[n].EMPRCD;
                                    division.value = myresponse[n].DIVISION;*/
                                    EvaluationType.value = myresponse[n].EVALUATIONTYPE;
                                    AthleticEmpImpToPos.value = myresponse[n].ATHLETICEMP_IMP_TO_POS;
                                    SupportStatement2.value = myresponse[n].SUPPORTSTMT2;
                                    EmpID.value = myresponse[n].EMPID;
                                    //var toDt = (myresponse[n].REVIEWPERIODTO).replace(" 00:00:00.0", "");
                                    //ReviewPeriodTo.value = toDt;
                                    SupportStatement1.value = myresponse[n].SUPPORTSTMT1;
                                    SupportStatement4.value = myresponse[n].SUPPORTSTMT4;
                                    /*EmpLastName.value = myresponse[n].LASTNAME;
                                    DeptName.value = myresponse[n].DEPTNAME;*/
                                    SupportStatement3.value = myresponse[n].SUPPORTSTMT3;
                                    /*DeptID.value = myresponse[n].DEPTID;
                                    divisionName.value = myresponse[n].DIVISION_NAME;
                                    EvaluatorName.value = myresponse[n].EVALUATORNAME;
                                    Range.value = myresponse[n].RANGE;
                                    EmployeeFullName.value = myresponse[n].FIRSTNAME + " " + myresponse[n].LASTNAME;
                                  EmpName.value = myresponse[n].FIRSTNAME + " " + myresponse[n].LASTNAME;*/
                                   ConceptualSkill.value =  myresponse[n].CONCEPTUALSKILLS;
                      InterpersonalSkills.value =  myresponse[n].INTERPERSONALSKILLS;
                      TechnicalSkills.value =  myresponse[n].TECHNICALSKILLS;
                      OtherSkills.value =  myresponse[n].OTHERS;
                      OtherRating.value =  myresponse[n].OTHER_RATING;
                      OverallRating.value =  myresponse[n].OVERALLRATING;
                      SectionBComment.value =  myresponse[n].SECTIONBCOMMENTS;
                                    getEmpEmail(EmpID.value,LogUser.value);
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                //alert("Please select the department");
                                showErrorModal("Alert!", "Please select the department");
                                //getPopup(text4);
                                modal.style.display = "block";
                            } else {
                                modal.style.display = "none";

                            }
                        };
                        // footerModal = document.getElementById("modal_footer");
                        footerModal.appendChild(okButton);
                        // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
                    } else {
                       
                        showErrorModal("Alert!", "No matching records found");
                        //ReviewPeriodFrom.value = null;
                        //AthleticEmp.value = null;
                        CBID.value = null;
                        Classification.value = null;
                        EmpFirstName.value = null;
                        EmpRCD.value = null;
                        division.value = null;
                        EvaluationType.value = null;
                        SupportStatement2.value = null;
                        EmpID.value = null;
                        //ReviewPeriodTo.value = null;
                        SupportStatement1.value = null;
                        SupportStatement4.value = null;
                        EmpLastName.value = null;
                        DeptName.value = null;
                        SupportStatement3.value = null;
                        DeptID.value = null;
                        divisionName.value = null;
                        EvaluatorName.value = null;
                        Range.value = null;
                        EmployeeFullName.value = null;
						EmpIdFlag.value = null;
                        EmpUserID.value = null;
                        AdminUserID.value = null;
                        EmpEmailID.value = null;
                        AdminEmailID.value = null;
                       ConceptualSkill.value =  null;
                      InterpersonalSkills.value =   null;
                      TechnicalSkills.value =   null;
                      OtherSkills.value =  null;
                      OtherRating.value =   null;
                      OverallRating.value =   null;
                      SectionBComment.value =  null;
                        gifModal.style.display = "none";
                    }
                    ////////////////////////////////////////////
                    
                }

            });
        }
        else{
                     showErrorModal("Alert!","No matching records found");
                   }
    } else {
        showErrorModal("Alert!", "Please enter Employee ID to copy values");
    }
}

function getEmpEmail(cwid, userId) {
    $.ajax({
        type: 'GET',
        url: "/bin/getEvaluationFormData",
        data: {
            cwid: cwid,
            userID: userId,
            action: "MPP_EMP_DETAILS"
        },
        dataType: 'json',
        success: function(response) {
            if (response.length != "0") {
                EmpFirstName.value = response[0].FIRST_NAME;
                EmpLastName.value = response[0].LAST_NAME;
                EmployeeFullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                EmpName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                DeptID.value = response[0].DEPTID;
                DeptName.value = response[0].DEPTNAME;
                EmpRCD.value = response[0].EMPL_RCD;
                Classification.value = response[0].DESCR;
                Range.value = response[0].GRADE;
                EvaluatorName.value = response[0].SupervisorName;
                EvalTitle.value = response[0].SupervisorTitle;
                CBID.value = response[0].UNION_CD;
                EmpUserID.value = response[0].EMPUSERID;
                division.value = response[0].DIVSION;
                divisionName.value = response[0].DIVISION_NAME;
                EmpEmailID.value = response[0].EMAILID;
            } else if (response.ength > 1) {
                var col = [];
                col.push("EMPLID");
                col.push("LAST_NAME");
                col.push("FIRST_NAME");
                col.push("DEPTID");
                col.push("DEPTNAME");
                col.push("UNION_CD");
                col.push("EMPL_RCD");
                col.push("SupervisorName");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name", "CBID", "Empl RCD", "Supervisor Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < response.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "radio";
                    button.setAttribute("class", "rb");
                    button.id = "rbtn";
                    button.name = "group";
                    button.value = "";

                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = response[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
                debugger;

                var footerModal = document.getElementById("modal_footer");

                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {

                    var n;
                    var rButtonStatus;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            EvaluatorName.value = response[n].SupervisorName;
                            EvalTitle.value = response[n].SupervisorTitle;
                            EmpFirstName.value = response[n].FIRST_NAME;
                            EmpLastName.value = response[n].LAST_NAME;
                            EmployeeFullName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                            EmpName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                            EmpUserID.value = response[n].EMPUSERID;
                            CBID.value = response[n].UNION_CD;
                            Classification.value = response[n].DESCR;
                            Range.value = response[n].GRADE;
                            EmpRCD.value = response[n].EMPL_RCD;
                            division.value = response[n].DIVSION;
                            divisionName.value = response[n].DIVISION_NAME;
                            EmpEmailID.value = response[n].EMAILID;
                            DeptName.value = response[n].DEPTNAME;
                            DeptID.value = response[n].DEPTID;
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        showErrorModal("Alert!", "Please select the department");
                        modal.style.display = "block";
                    } else {
                        modal.style.display = "none";

                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
            } else {
                alert("not matching records found");
            }
        }
    });
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
debugger;
   var userID = LogUser.value;
		workflow_initiator.value = userID;
   
       if (Copy_chrsId.value !== null) {
        if ((CBIDFlag.value !== null) && (CBIDFlag.value == ("M80" || "M98")) && Initiator_chrsId.value != Copy_chrsId.value) {
            var gifModal = document.getElementById('gifModal');
            gifModal.style.display = "block";
          
          
            var evalType = Copy_EvalType.value;
         
          
          //to add chrsid copy field
          var CHRSID = Copy_chrsId.value;
  /*        $.ajax({

    type: 'GET',

    url: "/bin/getEvaluationFormDataCHRSID",
             data: {
                    chrsId: CHRSID,
                    action: "MPP_COPY_CHRSID_DATA"
                },
    dataType: 'json',
    success: function(myresoponse) {
      gifModal.style.display = "block";
       
       if (myresoponse.length > 0) {
         Copy_EmpId.value = myresoponse[0].EMPLOYEEID;  
       }
    }
          }); */
      var cwid = Copy_EmpId.value;
       if(cwid == "899631436"){
            Copy_ReviewPeriodFrom.value = ("2021"+"-"+"4"+"-"+"1");
            Copy_ReviewPeriodTo.value = ("2021"+"-"+"9"+"-"+"30");
          }
            var reviewPeriodFrom = Copy_ReviewPeriodFrom.value;
            var reviewPeriodTo = Copy_ReviewPeriodTo.value;
        //chrsid 
          
            var actionType = "MPP_COPY_DATA";
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormDataCHRSID",
                data: {
                    chrsId: CHRSID,
                    reviewPeriodFrom: reviewPeriodFrom,
                    reviewPeriodTo: reviewPeriodTo,
                    /*evalType: evalType,*/
                    action: actionType
                },
                dataType: 'json',
                success: function(myresponse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];

                    if (myresponse.length === 1) {
                        EmpIdFlag.value = Copy_EmpId.value;
                        //var fromDt = (myresponse[0].REVIEWPERIODFROM).replace(" 00:00:00.0", "");
                        //ReviewPeriodFrom.value = fromDt;
                        //Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                        AthleticEmp.value = myresponse[0].ATHLETICEMP;
                         if(myresponse[0].ATHLETICEMP == 1){
                          athleticsEmpGroup.visible = true;
                        }
                        else{
                          athleticsEmpGroup.visible = false;
                        }
                       
                        EvaluationType.value = myresponse[0].EVALUATIONTYPE;
                        AthleticEmpImpToPos.value = myresponse[0].ATHLETICEMP_IMP_TO_POS;
                        SupportStatement2.value = myresponse[0].SUPPORTSTMT2;
                        EmpID.value = myresponse[0].EMPID;
                        chrsId.value = myresponse[0].CHRS_ID;
                       // var toDt = (myresponse[0].REVIEWPERIODTO).replace(" 00:00:00.0", "");
                        //ReviewPeriodTo.value = toDt;
                        SupportStatement1.value = myresponse[0].SUPPORTSTMT1;
                        SupportStatement4.value = myresponse[0].SUPPORTSTMT4;
                        /*EmpLastName.value = myresponse[0].LASTNAME;
                        DeptName.value = myresponse[0].DEPTNAME;*/
                        SupportStatement3.value = myresponse[0].SUPPORTSTMT3;
                       
                      ConceptualSkill.value =  myresponse[0].CONCEPTUALSKILLS;
                      InterpersonalSkills.value =  myresponse[0].INTERPERSONALSKILLS;
                      TechnicalSkills.value =  myresponse[0].TECHNICALSKILLS;
                      OtherSkills.value =  myresponse[0].OTHERS;
                      OtherRating.value =  myresponse[0].OTHER_RATING;
                      OverallRating.value =  myresponse[0].OVERALLRATING;
                      SectionBComment.value =  myresponse[0].SECTIONBCOMMENTS;
						getEmpEmail(EmpID.value,LogUser.value);
                        modal.style.display = "none";
                        gifModal.style.display = "none";
                        modal.style.display = "none";

                    } else if (myresponse.length > 1) {
                        generateDOR.visible = true;
                        gifModal.style.display = "none";
                        modal.style.display = "block";
                        //populate Hidden Fields

                        var col = [];
                        col.push("EMPID");
                        //col.push("LASTNAME");
                        //col.push("FIRSTNAME");
                        col.push("DEPTID");
                        col.push("DEPTNAME");
                        col.push("REVIEWPERIODFROM");
                        col.push("REVIEWPERIODTO");
                        col.push("EVALUATIONTYPE");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        // var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                        var headings = ["", "Emp ID", "Dept Id", "Dept Name", "Review Period From", "Review Period To", "Evaluation Type"];
                        for (var j = 0; j < headings.length; j++) {
                            var th = document.createElement("th");
                            th.innerHTML = headings[j];
                            tr.appendChild(th);
                        }
                        for (var k = 0; k < myresponse.length; k++) {
                            tr = table.insertRow(-1);
                            // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                            var button = document.createElement("input");
                            button.type = "radio";
                            button.setAttribute("class", "rb");
                            button.id = "rbtn";
                            button.name = "group";
                            button.value = "";

                            var tabCell1 = tr.insertCell(-1);
                            tabCell1.appendChild(button);
                            for (var l = 0; l < col.length; l++) {
                                var tabCell = tr.insertCell(-1);                                
                              if((myresponse[k][col[l]]).match(/ 00:00:00.0/g)){
                                var dt = myresponse[k][col[l]].replace(" 00:00:00.0", "");
                                tabCell.innerHTML = dt.substring(5, 7)+"-"+dt.substring(8, 10)+"-"+dt.substring(0, 4);                                
                              }else{
                                tabCell.innerHTML = myresponse[k][col[l]];
                              }
                            }
                        }
                        var divContainer = document.getElementById("showData");
                        divContainer.innerHTML = "";
                        divContainer.appendChild(table);

                        var footerModal = document.getElementById("modal_footer");

                        var okButton = document.createElement("input");
                        okButton.type = "button";
                        okButton.setAttribute("class", "okBtn");
                        //okButton.id = "okBtn";
                        okButton.value = "OK";
                        okButton.onclick = function(event) {

                            var n;
                            var rButtonStatus;
                            //var rButtonStatusFalse;
                            var rButtons = document.getElementsByClassName("rb");
                            for (n = 0; n < rButtons.length; n++) {
                                if (rButtons[n].checked === false) {
                                    rButtonStatus = false;
                                } else {
                                   
                                   // var fromDt = (myresponse[n].REVIEWPERIODFROM).replace(" 00:00:00.0", "");
                                   // ReviewPeriodFrom.value = fromDt;
                                    //Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                                    AthleticEmp.value = myresponse[n].ATHLETICEMP;
                                   if(myresponse[n].ATHLETICEMP == 1){
                          athleticsEmpGroup.visible = true;
                        }
                        else{
                          athleticsEmpGroup.visible = false;
                        }
                                   
                                    EvaluationType.value = myresponse[n].EVALUATIONTYPE;
                                    AthleticEmpImpToPos.value = myresponse[n].ATHLETICEMP_IMP_TO_POS;
                                    SupportStatement2.value = myresponse[n].SUPPORTSTMT2;
                                    EmpID.value = myresponse[n].EMPID;
                                    chrsId.value = myresponse[n].CHRS_ID;
                                    //var toDt = (myresponse[n].REVIEWPERIODTO).replace(" 00:00:00.0", "");
                                    //ReviewPeriodTo.value = toDt;
                                    SupportStatement1.value = myresponse[n].SUPPORTSTMT1;
                                    SupportStatement4.value = myresponse[n].SUPPORTSTMT4;
                                    /*EmpLastName.value = myresponse[n].LASTNAME;
                                    DeptName.value = myresponse[n].DEPTNAME;*/
                                    SupportStatement3.value = myresponse[n].SUPPORTSTMT3;
                                    
                                   ConceptualSkill.value =  myresponse[n].CONCEPTUALSKILLS;
                      InterpersonalSkills.value =  myresponse[n].INTERPERSONALSKILLS;
                      TechnicalSkills.value =  myresponse[n].TECHNICALSKILLS;
                      OtherSkills.value =  myresponse[n].OTHERS;
                      OtherRating.value =  myresponse[n].OTHER_RATING;
                      OverallRating.value =  myresponse[n].OVERALLRATING;
                      SectionBComment.value =  myresponse[n].SECTIONBCOMMENTS;
                                    getEmpEmail(EmpID.value,LogUser.value);
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                //alert("Please select the department");
                                showErrorModal("Alert!", "Please select the department");
                                //getPopup(text4);
                                modal.style.display = "block";
                            } else {
                                modal.style.display = "none";

                            }
                        };
                        // footerModal = document.getElementById("modal_footer");
                        footerModal.appendChild(okButton);
                        // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
                    } else {
                       
                        showErrorModal("Alert!", "No matching records found");
                        //ReviewPeriodFrom.value = null;
                        //AthleticEmp.value = null;
                        CBID.value = null;
                        Classification.value = null;
                        EmpFirstName.value = null;
                        EmpRCD.value = null;
                        division.value = null;
                        EvaluationType.value = null;
                        SupportStatement2.value = null;
                        EmpID.value = null;
                        chrsId.value = null; 
                        //ReviewPeriodTo.value = null;
                        SupportStatement1.value = null;
                        SupportStatement4.value = null;
                        EmpLastName.value = null;
                        DeptName.value = null;
                        SupportStatement3.value = null;
                        DeptID.value = null;
                        divisionName.value = null;
                        EvaluatorName.value = null;
                        Range.value = null;
                        EmployeeFullName.value = null;
						EmpIdFlag.value = null;
                        EmpUserID.value = null;
                        AdminUserID.value = null;
                        EmpEmailID.value = null;
                        AdminEmailID.value = null;
                       ConceptualSkill.value =  null;
                      InterpersonalSkills.value =   null;
                      TechnicalSkills.value =   null;
                      OtherSkills.value =  null;
                      OtherRating.value =   null;
                      OverallRating.value =   null;
                      SectionBComment.value =  null;
                        gifModal.style.display = "none";
                    }
                } ////////////////////////////////////////////
                }); 
               // }

            //});
        }
        else{
                     showErrorModal("Alert!","No matching records found");
                   }
    } else {
        showErrorModal("Alert!", "Please enter Employee ID to copy values");
    }
}

function getEmpEmail(cwid, userId) {
    $.ajax({
        type: 'GET',
        url: "/bin/getEvaluationFormData",
        data: {
            cwid: cwid,
            userID: userId,
            action: "MPP_EMP_DETAILS"
        },
        dataType: 'json',
        success: function(response) {
            if (response.length != "0") {
                EmpFirstName.value = response[0].FIRST_NAME;
                EmpLastName.value = response[0].LAST_NAME;
                EmployeeFullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                EmpName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                DeptID.value = response[0].DEPTID;
                DeptName.value = response[0].DEPTNAME;
                EmpRCD.value = response[0].EMPL_RCD;
                Classification.value = response[0].DESCR;
                Range.value = response[0].GRADE;
                EvaluatorName.value = response[0].SupervisorName;
                EvalTitle.value = response[0].SupervisorTitle;
                CBID.value = response[0].UNION_CD;
                EmpUserID.value = response[0].EMPUSERID;
                division.value = response[0].DIVSION;
                divisionName.value = response[0].DIVISION_NAME;
                //EmpEmailID.value = response[0].EMAILID; 
                EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
            } else if (response.length > 1) {
                var col = [];
                col.push("EMPLID");
                col.push("LAST_NAME");
                col.push("FIRST_NAME");
                col.push("DEPTID");
                col.push("DEPTNAME");
                col.push("UNION_CD");
                col.push("EMPL_RCD");
                col.push("SupervisorName");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name", "CBID", "Empl RCD", "Supervisor Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < response.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "radio";
                    button.setAttribute("class", "rb");
                    button.id = "rbtn";
                    button.name = "group";
                    button.value = "";

                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = response[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
                debugger;

                var footerModal = document.getElementById("modal_footer");

                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {

                    var n;
                    var rButtonStatus;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            EvaluatorName.value = response[n].SupervisorName;
                            EvalTitle.value = response[n].SupervisorTitle;
                            EmpFirstName.value = response[n].FIRST_NAME;
                            EmpLastName.value = response[n].LAST_NAME;
                            EmployeeFullName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                            EmpName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                            EmpUserID.value = response[n].EMPUSERID;
                            CBID.value = response[n].UNION_CD;
                            Classification.value = response[n].DESCR;
                            Range.value = response[n].GRADE;
                            EmpRCD.value = response[n].EMPL_RCD;
                            division.value = response[n].DIVSION;
                            divisionName.value = response[n].DIVISION_NAME;
                            //EmpEmailID.value = response[n].EMAILID;
                            EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                            DeptName.value = response[n].DEPTNAME;
                            DeptID.value = response[n].DEPTID;
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        showErrorModal("Alert!", "Please select the department");
                        modal.style.display = "block";
                    } else {
                        modal.style.display = "none";

                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
            } else {
                alert("not matching records found");
            }
        }
    });
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Copy_button_click3 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
debugger;
   var userID = LogUser.value;
		workflow_initiator.value = userID;
   
       if (Copy_chrsId.value !== null) {
        if ((CBIDFlag.value !== null) && (CBIDFlag.value == ("M80" || "M98")) && Initiator_chrsId.value != Copy_chrsId.value) {
            var gifModal = document.getElementById('gifModal');
            gifModal.style.display = "block";
          
          
            var evalType = Copy_EvalType.value;
           
          
          //to add chrsid copy field
          var CHRSID = Copy_chrsId.value;
           chrsId.value = CHRSID;
          var chrsID_copy;
   //   var cwid = Copy_EmpId.value;
       if(CHRSID == "100030270"){
            Copy_ReviewPeriodFrom.value = ("2021"+"-"+"4"+"-"+"1");
            Copy_ReviewPeriodTo.value = ("2021"+"-"+"9"+"-"+"30");
          }
            var reviewPeriodFrom = Copy_ReviewPeriodFrom.value;
            var reviewPeriodTo = Copy_ReviewPeriodTo.value;
        //chrsid 
          
            var actionType = "MPP_COPY_DATA";
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormDataCHRSID",
                data: {
                    chrsId: CHRSID,
                    reviewPeriodFrom: reviewPeriodFrom,
                    reviewPeriodTo: reviewPeriodTo,
                    /*evalType: evalType,*/
                    action: actionType
                },
                dataType: 'json',
                success: function(myresponse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];

                    if (myresponse.length === 1) {
                        EmpIdFlag.value = Copy_chrsId.value;
                        //var fromDt = (myresponse[0].REVIEWPERIODFROM).replace(" 00:00:00.0", "");
                        //ReviewPeriodFrom.value = fromDt;
                        //Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                        AthleticEmp.value = myresponse[0].ATHLETICEMP;
                         if(myresponse[0].ATHLETICEMP == 1){
                          athleticsEmpGroup.visible = true;
                        }
                        else{
                          athleticsEmpGroup.visible = false;
                        }
                       
                        EvaluationType.value = myresponse[0].EVALUATIONTYPE;
                        AthleticEmpImpToPos.value = myresponse[0].ATHLETICEMP_IMP_TO_POS;
                        SupportStatement2.value = myresponse[0].SUPPORTSTMT2;
                        EmpID.value = myresponse[0].EMPID;
                     //   chrsID_copy = myresponse[0].CHRS_ID;
                 /*    if(myresponse[0].CHRS_ID === null){
                        chrsId.value = CHRSID;
                      }else{
                        chrsId.value = myresponse[0].CHRS_ID;
                      } */
                        //chrsId.value = myresponse[0].CHRS_ID;
                       // var toDt = (myresponse[0].REVIEWPERIODTO).replace(" 00:00:00.0", "");
                        //ReviewPeriodTo.value = toDt;
                 /*     if(myresponse[0].CHRS_ID !== 0){
                        chrsId.value = myresponse[0].CHRS_ID;
                      }else{
                        chrsId.value = CHRSID;
                      }*/
                        SupportStatement1.value = myresponse[0].SUPPORTSTMT1;
                        SupportStatement4.value = myresponse[0].SUPPORTSTMT4;
                        /*EmpLastName.value = myresponse[0].LASTNAME;
                        DeptName.value = myresponse[0].DEPTNAME;*/
                        SupportStatement3.value = myresponse[0].SUPPORTSTMT3;
                       
                      ConceptualSkill.value =  myresponse[0].CONCEPTUALSKILLS;
                      InterpersonalSkills.value =  myresponse[0].INTERPERSONALSKILLS;
                      TechnicalSkills.value =  myresponse[0].TECHNICALSKILLS;
                      OtherSkills.value =  myresponse[0].OTHERS;
                      OtherRating.value =  myresponse[0].OTHER_RATING;
                      OverallRating.value =  myresponse[0].OVERALLRATING;
                      SectionBComment.value =  myresponse[0].SECTIONBCOMMENTS;
						getEmpEmail(EmpID.value,LogUser.value);
                        modal.style.display = "none";
                        gifModal.style.display = "none";
                        modal.style.display = "none";

                    } else if (myresponse.length > 1) {
                        generateDOR.visible = true;
                        gifModal.style.display = "none";
                        modal.style.display = "block";
                        //populate Hidden Fields

                        var col = [];
                        //col.push(Copy_chrsId.value);
                        //col.push("EMPID");
                        //col.push("LASTNAME");
                        //col.push("FIRSTNAME");
                        col.push("DEPTID");
                        col.push("DEPTNAME");
                        col.push("REVIEWPERIODFROM");
                        col.push("REVIEWPERIODTO");
                        col.push("EVALUATIONTYPE");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        // var headings = ["", "Emp ID",  "Last Name", "First Name", "Department Id", "Department Name"];
                        var headings = ["", "Emp ID", "Dept Id", "Dept Name", "Review Period From", "Review Period To", "Evaluation Type"];
                        for (var j = 0; j < headings.length; j++) {
                            var th = document.createElement("th");
                            th.innerHTML = headings[j];
                            tr.appendChild(th);
                        }
                        for (var k = 0; k < myresponse.length; k++) {
                            tr = table.insertRow(-1);
                            // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                            var button = document.createElement("input");
                            button.type = "radio";
                            button.setAttribute("class", "rb");
                            button.id = "rbtn";
                            button.name = "group";
                            button.value = "";

                            var tabCell1 = tr.insertCell(-1);
                            tabCell1.appendChild(button);
                          var tabCell2 = tr.insertCell(-1);
                          //tabCell2.appendChild(Copy_chrsId.value);
                           tabCell2.innerHTML = Copy_chrsId.value;
                            for (var l = 0; l < col.length; l++) {
                                var tabCell = tr.insertCell(-1);                                
                              if((myresponse[k][col[l]]).match(/ 00:00:00.0/g)){
                                var dt = myresponse[k][col[l]].replace(" 00:00:00.0", "");
                                tabCell.innerHTML = dt.substring(5, 7)+"-"+dt.substring(8, 10)+"-"+dt.substring(0, 4);                                
                              }else{
                                tabCell.innerHTML = myresponse[k][col[l]];
                              }
                            }
                        }
                        var divContainer = document.getElementById("showData");
                        divContainer.innerHTML = "";
                        divContainer.appendChild(table);

                        var footerModal = document.getElementById("modal_footer");

                        var okButton = document.createElement("input");
                        okButton.type = "button";
                        okButton.setAttribute("class", "okBtn");
                        //okButton.id = "okBtn";
                        okButton.value = "OK";
                        okButton.onclick = function(event) {

                            var n;
                            var rButtonStatus;
                            //var rButtonStatusFalse;
                            var rButtons = document.getElementsByClassName("rb");
                            for (n = 0; n < rButtons.length; n++) {
                                if (rButtons[n].checked === false) {
                                    rButtonStatus = false;
                                } else {
                                   
                                   // var fromDt = (myresponse[n].REVIEWPERIODFROM).replace(" 00:00:00.0", "");
                                   // ReviewPeriodFrom.value = fromDt;
                                    //Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                                    AthleticEmp.value = myresponse[n].ATHLETICEMP;
                                   if(myresponse[n].ATHLETICEMP == 1){
                          athleticsEmpGroup.visible = true;
                        }
                        else{
                          athleticsEmpGroup.visible = false;
                        }
                                   
                                    EvaluationType.value = myresponse[n].EVALUATIONTYPE;
                                    AthleticEmpImpToPos.value = myresponse[n].ATHLETICEMP_IMP_TO_POS;
                                    SupportStatement2.value = myresponse[n].SUPPORTSTMT2;
                                    EmpID.value = myresponse[n].EMPID;
                                //    chrsId.value = myresponse[n].CHRS_ID;
                                  /* chrsID_copy = myresponse[0].CHRS_ID;
                      if(chrsID_copy === null){
                        chrsId.value = CHRSID;
                      }else{
                        chrsId.value = chrsID_copy;
                      }*/
                                    //var toDt = (myresponse[n].REVIEWPERIODTO).replace(" 00:00:00.0", "");
                                    //ReviewPeriodTo.value = toDt;
                                    SupportStatement1.value = myresponse[n].SUPPORTSTMT1;
                                    SupportStatement4.value = myresponse[n].SUPPORTSTMT4;
                                    /*EmpLastName.value = myresponse[n].LASTNAME;
                                    DeptName.value = myresponse[n].DEPTNAME;*/
                                    SupportStatement3.value = myresponse[n].SUPPORTSTMT3;
                                    
                                   ConceptualSkill.value =  myresponse[n].CONCEPTUALSKILLS;
                      InterpersonalSkills.value =  myresponse[n].INTERPERSONALSKILLS;
                      TechnicalSkills.value =  myresponse[n].TECHNICALSKILLS;
                      OtherSkills.value =  myresponse[n].OTHERS;
                      OtherRating.value =  myresponse[n].OTHER_RATING;
                      OverallRating.value =  myresponse[n].OVERALLRATING;
                      SectionBComment.value =  myresponse[n].SECTIONBCOMMENTS;
                                    getEmpEmail(EmpID.value,LogUser.value);
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                //alert("Please select the department");
                                showErrorModal("Alert!", "Please select the department");
                                //getPopup(text4);
                                modal.style.display = "block";
                            } else {
                                modal.style.display = "none";

                            }
                        };
                        // footerModal = document.getElementById("modal_footer");
                        footerModal.appendChild(okButton);
                        // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
                    } else {
                       
                        showErrorModal("Alert!", "No matching records found");
                        //ReviewPeriodFrom.value = null;
                        //AthleticEmp.value = null;
                        CBID.value = null;
                        Classification.value = null;
                        EmpFirstName.value = null;
                        EmpRCD.value = null;
                        division.value = null;
                        EvaluationType.value = null;
                        SupportStatement2.value = null;
                        EmpID.value = null;
                        chrsId.value = null; 
                        //ReviewPeriodTo.value = null;
                        SupportStatement1.value = null;
                        SupportStatement4.value = null;
                        EmpLastName.value = null;
                        DeptName.value = null;
                        SupportStatement3.value = null;
                        DeptID.value = null;
                        divisionName.value = null;
                        EvaluatorName.value = null;
                        Range.value = null;
                        EmployeeFullName.value = null;
						EmpIdFlag.value = null;
                        EmpUserID.value = null;
                        AdminUserID.value = null;
                        EmpEmailID.value = null;
                        AdminEmailID.value = null;
                       ConceptualSkill.value =  null;
                      InterpersonalSkills.value =   null;
                      TechnicalSkills.value =   null;
                      OtherSkills.value =  null;
                      OtherRating.value =   null;
                      OverallRating.value =   null;
                      SectionBComment.value =  null;
                        gifModal.style.display = "none";
                    }
                } ////////////////////////////////////////////
                }); 
               // }

            //});
        }
        else{
                     showErrorModal("Alert!","No matching records found");
                   }
    } else {
        showErrorModal("Alert!", "Please enter Employee ID to copy values");
    }
}

function getEmpEmail(cwid, userId) {
    $.ajax({
        type: 'GET',
        url: "/bin/getEvaluationFormData",
        data: {
            cwid: cwid,
            userID: userId,
            action: "MPP_EMP_DETAILS"
        },
        dataType: 'json',
        success: function(response) {
            if (response.length === 1) {
                EmpFirstName.value = response[0].FIRST_NAME;
                EmpLastName.value = response[0].LAST_NAME;
                EmployeeFullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                EmpName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                DeptID.value = response[0].DEPTID;
                DeptName.value = response[0].DEPTNAME;
                EmpRCD.value = response[0].EMPL_RCD;
                Classification.value = response[0].DESCR;
                Range.value = response[0].GRADE;
                EvaluatorName.value = response[0].SupervisorName;
                EvalTitle.value = response[0].SupervisorTitle;
                CBID.value = response[0].UNION_CD;
                EmpUserID.value = response[0].EMPUSERID;
                division.value = response[0].DIVSION;
                divisionName.value = response[0].DIVISION_NAME;
                //EmpEmailID.value = response[0].EMAILID; 
                EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
            } else if (response.length > 1) {
                var col = [];
                col.push("EMPLID");
                col.push("LAST_NAME");
                col.push("FIRST_NAME");
                col.push("DEPTID");
                col.push("DEPTNAME");
                col.push("UNION_CD");
                col.push("EMPL_RCD");
                col.push("SupervisorName");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name", "CBID", "Empl RCD", "Supervisor Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < response.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "radio";
                    button.setAttribute("class", "rb");
                    button.id = "rbtn";
                    button.name = "group";
                    button.value = "";

                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = response[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
                debugger;

                var footerModal = document.getElementById("modal_footer");

                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {

                    var n;
                    var rButtonStatus;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            EvaluatorName.value = response[n].SupervisorName;
                            EvalTitle.value = response[n].SupervisorTitle;
                            EmpFirstName.value = response[n].FIRST_NAME;
                            EmpLastName.value = response[n].LAST_NAME;
                            EmployeeFullName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                            EmpName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                            EmpUserID.value = response[n].EMPUSERID;
                            CBID.value = response[n].UNION_CD;
                            Classification.value = response[n].DESCR;
                            Range.value = response[n].GRADE;
                            EmpRCD.value = response[n].EMPL_RCD;
                            division.value = response[n].DIVSION;
                            divisionName.value = response[n].DIVISION_NAME;
                            //EmpEmailID.value = response[n].EMAILID;
                            EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                            DeptName.value = response[n].DEPTNAME;
                            DeptID.value = response[n].DEPTID;
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        showErrorModal("Alert!", "Please select the department");
                        modal.style.display = "block";
                    } else {
                        modal.style.display = "none";

                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
            } else {
                alert("not matching records found");
            }
        }
    });
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_chrsId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
//Copy_chrsId.value = null;
Copy_EvalType.value = null;
if (StageIndicator.value === null &&   EmpIdFlag.value != this.value && (this.value != Copy_chrsId.value)) {
    if (this.value !== null && Initiator_chrsId.value != chrsId.value) {

        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var empId = this.value;
        var userID = LogUser.value;
		workflow_initiator.value = userID;
        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormDataCHRSID",
            data: {
                cwid: empId,
                userID: userID,
                action:"MPP_EMP_DETAILS"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                  EmpIdFlag.value = this.value;
                   generateDOR.visible = true;
                    EmpID.value = myresponse[0].EMPLID;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                  EmployeeFullName.value = myresponse[0].FIRST_NAME +" "+ myresponse[0].LAST_NAME;
                  EmpName.value = myresponse[0].FIRST_NAME +" "+ myresponse[0].LAST_NAME;
                    DeptID.value = myresponse[0].DEPTID;
                    DeptName.value = myresponse[0].DEPTNAME;
                    EmpRCD.value = myresponse[0].EMPL_RCD;
                    Classification.value = myresponse[0].DESCR;
                    Range.value = myresponse[0].GRADE;
                    EvaluatorName.value = myresponse[0].SupervisorName;
                    EvalTitle.value = myresponse[0].SupervisorTitle;
                    CBID.value = myresponse[0].UNION_CD;
                    EmpUserID.value = myresponse[0].EMPUSERID;
                    division.value = myresponse[0].DIVSION;
                    divisionName.value = myresponse[0].DIVISION_NAME;
                    //EmpEmailID.value = myresponse[0].EMAILID; 
                    //Show self eval tab
                    
                    EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                  /*  var reviewFrom = ReviewPeriodFrom.value;
                   var reviewTo = ReviewPeriodTo.value;
                  // var id = "899943393";
                  // var deptId = "10100";
                   
                   var id = EmpID.value;
                   var deptId = DeptID.value;
                  
                  $.ajax({
                        type: 'GET',
                        url: "/bin/getMPPSelfDetails",
                        data: {
                            empID: id,
                            reviewPeriodTo: reviewTo,
                            reviewPeriodFrom: reviewFrom,
                            deptID: deptId
                        },
                        dataType: 'json',
                        success: function(response) {
                         
                            if (response.length != "0") {
                              selfEvalPanel.visible = true;
                               if(response[0].evaluation1 !== null){
                                 evaluation1.value = response[0].evaluation1;
                              }
                              if(response[0].evaluation2 !== null){
                              evaluation2.value = response[0].evaluation2;
                              }
                               if(response[0].evaluation3 !== null){
                              evaluation3.value = response[0].evaluation3;
                               }
                               if(response[0].evaluation4 !== null){
                              evaluation4.value = response[0].evaluation4;
                               }
                              if (response[0].instanceId !== null) {
                            instanceId.value = response[0].instanceId;
                        }
                              
                            }else {
                               evaluation1.value = "Employee self evaluation data is not available for the current review period";
                               evaluation2.value = "Employee self evaluation data is not available for the current review period";
                               evaluation3.value = "Employee self evaluation data is not available for the current review period";
                               evaluation4.value = "Employee self evaluation data is not available for the current review period";
                              
                            }
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });*/
                    
                    modal.style.display = "none";
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (myresponse.length > 1) {
                   EmpIdFlag.value = this.value;
					generateDOR.visible = true;
                    gifModal.style.display = "none";
                    modal.style.display = "block";
                    //populate Hidden Fields

                    var col = [];
                    col.push("CSU_CHRS_ID");
                    col.push("EMPLID");
                    col.push("LAST_NAME");
                    col.push("FIRST_NAME");
                    col.push("DEPTID");
                    col.push("DEPTNAME");
                    col.push("UNION_CD");
					col.push("EMPL_RCD");
					col.push("SupervisorName");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                   // var headings = ["", "Emp ID",  "Last Name", "First Name", "Department Id", "Department Name"];
                   var headings = ["", "Emp ID", "CWID", "Last Name", "First Name", "Department Id", "Department Name","CBID","Empl RCD","Supervisor Name"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);
                        // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                        var button = document.createElement("input");
                        button.type = "radio";
                        button.setAttribute("class", "rb");
                        button.id = "rbtn";
                        button.name = "group";
                        button.value = "";
                        /* button.onclick = function(event) {
                             //alert("xcvbn");
                             //debugger;
                             deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                             DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                             //cbidHidden.value = event.currentTarget.parentNode.parentElement.childNodes[6].innerText;
                             //classificationHidden.value = event.currentTarget.parentNode.parentElement.childNodes[7].innerText;
                             // RangeHidden.value = event.currentTarget.parentNode.parentElement.childNodes[8].innerText;
                             EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                             // empRCDHidden.value = event.currentTarget.parentNode.parentElement.childNodes[9].innerText;
                         };*/
                        var tabCell1 = tr.insertCell(-1);
                        tabCell1.appendChild(button);
                        for (var l = 0; l < col.length; l++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = myresponse[k][col[l]];
                        }
                    }
                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    
                    /* var cancelButton = document.createElement("input");
                     cancelButton.type = "button";
                     cancelButton.setAttribute("class", "cancelBtn");
                     cancelButton.id = "cBtn";
                     cancelButton.value = "Cancel";
                     cancelButton.onclick = function(event) {
                         modal.style.display = "none";
                     };*/
                    var footerModal = document.getElementById("modal_footer");
                    //var cancelButton = document.getElementsByClassName("cancelBtn");
                    //footerModal.removeChild(cancelButton);
                    // cancelButton.parentNode.removeChild(cancelButton);
                    //var elem = document.getElementById('dummy');

                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "OK";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {
                                rButtonStatus = false;
                            } else {
                                EvaluatorName.value = myresponse[n].SupervisorName;
                                EvalTitle.value = myresponse[n].SupervisorTitle;
                                EmpID.value = myresponse[n].EMPLID;
                                EmpFirstName.value = myresponse[n].FIRST_NAME;
                                EmpLastName.value = myresponse[n].LAST_NAME;
                              EmployeeFullName.value = myresponse[n].FIRST_NAME +" "+ myresponse[n].LAST_NAME;
                               EmpName.value = myresponse[n].FIRST_NAME +" "+ myresponse[n].LAST_NAME;
                                EmpUserID.value = myresponse[n].EMPUSERID;
                                CBID.value = myresponse[n].UNION_CD;
                                Classification.value = myresponse[n].DESCR;
                                Range.value = myresponse[n].GRADE;
                                EmpRCD.value = myresponse[n].EMPL_RCD;
                                division.value = myresponse[n].DIVSION;
                   			    divisionName.value = myresponse[n].DIVISION_NAME;
                              //  EmpEmailID.value = myresponse[n].EMAILID;
                                EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                                // col.push("EMPLID");

                                DeptName.value = myresponse[n].DEPTNAME;
                                DeptID.value = myresponse[n].DEPTID;
                                rButtonStatus = true;
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            //alert("Please select the department");
                          showErrorModal("Alert!","Please select the department");
                          //getPopup(text4);
                          modal.style.display = "block";
                        } else {
                   
                  /* var reviewFrom = ReviewPeriodFrom.value;
                   var reviewTo = ReviewPeriodTo.value;
                   var id = EmpID.value;
                   var deptId = DeptID.value;
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getMPPSelfDetails",
                        data: {
                            empID: id,
                            reviewPeriodTo: reviewTo,
                            reviewPeriodFrom: reviewFrom,
                            deptID: deptId
                        },
                        dataType: 'json',
                       success: function(response) {
                         
                            if (response.length != "0") {
                              selfEvalPanel.visible = true;
                               if(response[0].evaluation1 !== null){
                                 evaluation1.value = response[0].evaluation1;
                              }
                              if(response[0].evaluation2 !== null){
                              evaluation2.value = response[0].evaluation2;
                              }
                               if(response[0].evaluation3 !== null){
                              evaluation3.value = response[0].evaluation3;
                               }
                               if(response[0].evaluation4 !== null){
                              evaluation4.value = response[0].evaluation4;
                               }
                              if (response[0].instanceId !== null) {
                            instanceId.value = response[0].instanceId;
                        }
                            }else {
                               evaluation1.value = "Employee self evaluation data is not available for the current review period";
                               evaluation2.value = "Employee self evaluation data is not available for the current review period";
                               evaluation3.value = "Employee self evaluation data is not available for the current review period";
                               evaluation4.value = "Employee self evaluation data is not available for the current review period";
                              
                            }
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });*/
                          
                            modal.style.display = "none";

                        }
                    };
                    // footerModal = document.getElementById("modal_footer");
                    footerModal.appendChild(okButton);
                    // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
                } else {
                  showErrorModal("Alert!","No matching records found");
                  //getPopup(text1);
                  // alert("No matching records found");
                  /* var errorModal = document.getElementById('errorPopup');
                   var para = document.getElementById("pTag");
    para.innerHTML = "";
    para.innerHTML = "No matching records found";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var errorFooterModal = document.getElementById("errorPopup-footer");
    var okBtn = document.createElement("input");
    okBtn.type = "button";
    okBtn.setAttribute("class", "okBtn");
    okBtn.id = "errorOkBtn";
    okBtn.value = "Ok";
    okBtn.onclick = function(event) {
        modal.style.display = "none";
    };
    errorFooterModal.appendChild(okBtn);
    errorModal.style.display = "block";*/
                    EvaluatorName.value = null;
                    EvalTitle.value = null;
                    EmpFirstName.value = null;
                    EmpLastName.value = null;
                    DeptID.value = null;
                    DeptName.value = null;
                    CBID.value = null;
                    Classification.value = null;
                    Range.value = null;
					EmpID.value = null;
                    chrsId.value = null;
                    EmpRCD.value = null;
					EmpIdFlag.value = null;
                    EmpUserID.value = null;
                    AdminUserID.value = null;
                    EmpEmailID.value = null;
                    AdminEmailID.value = null;
                    gifModal.style.display = "none";
                }
                ////////////////////////////////////////////
                span.onclick = function() {

                    var n;
                    var rButtonStatus;
                    //var rButtonStatusFalse;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                       // alert("Please select the department");
                      showErrorModal("Alert!","Please select the department");
                  //getPopup(text2);  
                      modal.style.display = "block";
                    } else {
					showErrorModal("Alert!","Please select the department");
                  //getPopup(text3); 
                        //alert("Please select the department");
                        modal.style.display = "block";
                    }

                };
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
            }
        });
    
}else {
  
                  showErrorModal("Alert!","No matching records found");
  					EvaluatorName.value = null;
                    EvalTitle.value = null;
                    EmpFirstName.value = null;
                    EmpLastName.value = null;
                    EmpID.value = null;
                    DeptID.value = null;
                    DeptName.value = null;
                    CBID.value = null;
                    Classification.value = null;
                    Range.value = null;					
                    EmpRCD.value = null;
					EmpIdFlag.value = null;
                    EmpUserID.value = null;
                    AdminUserID.value = null;
                    EmpEmailID.value = null;
                    AdminEmailID.value = null;
                    gifModal.style.display = "none";
}
}
function getPopup(errorText){
  var errorTextObt = errorText;
  var errorModal = document.getElementById('modalText');

    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = errorTextObt;
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footererrorModal = document.getElementById("errorPopup-footer");
    var errorokButton = document.createElement("input");
    errorokButton.type = "button";
    errorokButton.setAttribute("class", "okBtn");
    //errorokButton.id = "okBtn";
    errorokButton.value = "Ok";
    errorokButton.onclick = function(event) {
        errorModal.style.display = "none";
    };
    footererrorModal.appendChild(errorokButton);
    
    errorModal.style.display = "block";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_chrsId_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_chrsId_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === null){
  this.value = Copy_chrsId.value;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
Copy_EmpId.value = null;
Copy_EvalType.value = null;
if (StageIndicator.value === null &&   EmpIdFlag.value != this.value && (this.value != Copy_EmpId.value)) {
    if (this.value !== null && Initiator_EmpId.value != EmpID.value) {

        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var empId = this.value;
        var userID = LogUser.value;
		workflow_initiator.value = userID;
        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
            data: {
                cwid: empId,
                userID: userID,
                action:"MPP_EMP_DETAILS"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                  EmpIdFlag.value = this.value;
                   generateDOR.visible = true;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                  EmployeeFullName.value = myresponse[0].FIRST_NAME +" "+ myresponse[0].LAST_NAME;
                  EmpName.value = myresponse[0].FIRST_NAME +" "+ myresponse[0].LAST_NAME;
                    DeptID.value = myresponse[0].DEPTID;
                    DeptName.value = myresponse[0].DEPTNAME;
                    EmpRCD.value = myresponse[0].EMPL_RCD;
                    Classification.value = myresponse[0].DESCR;
                    Range.value = myresponse[0].GRADE;
                    EvaluatorName.value = myresponse[0].SupervisorName;
                    EvalTitle.value = myresponse[0].SupervisorTitle;
                    CBID.value = myresponse[0].UNION_CD;
                    EmpUserID.value = myresponse[0].EMPUSERID;
                    division.value = myresponse[0].DIVSION;
                    divisionName.value = myresponse[0].DIVISION_NAME;
                    EmpEmailID.value = myresponse[0].EMAILID;
                    //Show self eval tab
                    
                    
                  /*  var reviewFrom = ReviewPeriodFrom.value;
                   var reviewTo = ReviewPeriodTo.value;
                  // var id = "899943393";
                  // var deptId = "10100";
                   
                   var id = EmpID.value;
                   var deptId = DeptID.value;
                  
                  $.ajax({
                        type: 'GET',
                        url: "/bin/getMPPSelfDetails",
                        data: {
                            empID: id,
                            reviewPeriodTo: reviewTo,
                            reviewPeriodFrom: reviewFrom,
                            deptID: deptId
                        },
                        dataType: 'json',
                        success: function(response) {
                         
                            if (response.length != "0") {
                              selfEvalPanel.visible = true;
                               if(response[0].evaluation1 !== null){
                                 evaluation1.value = response[0].evaluation1;
                              }
                              if(response[0].evaluation2 !== null){
                              evaluation2.value = response[0].evaluation2;
                              }
                               if(response[0].evaluation3 !== null){
                              evaluation3.value = response[0].evaluation3;
                               }
                               if(response[0].evaluation4 !== null){
                              evaluation4.value = response[0].evaluation4;
                               }
                              if (response[0].instanceId !== null) {
                            instanceId.value = response[0].instanceId;
                        }
                              
                            }else {
                               evaluation1.value = "Employee self evaluation data is not available for the current review period";
                               evaluation2.value = "Employee self evaluation data is not available for the current review period";
                               evaluation3.value = "Employee self evaluation data is not available for the current review period";
                               evaluation4.value = "Employee self evaluation data is not available for the current review period";
                              
                            }
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });*/
                    
                    modal.style.display = "none";
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (myresponse.length > 1) {
                   EmpIdFlag.value = this.value;
					generateDOR.visible = true;
                    gifModal.style.display = "none";
                    modal.style.display = "block";
                    //populate Hidden Fields

                    var col = [];
                    col.push("EMPLID");
                    col.push("LAST_NAME");
                    col.push("FIRST_NAME");
                    col.push("DEPTID");
                    col.push("DEPTNAME");
                    col.push("UNION_CD");
					col.push("EMPL_RCD");
					col.push("SupervisorName");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                   // var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                   var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name","CBID","Empl RCD","Supervisor Name"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);
                        // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                        var button = document.createElement("input");
                        button.type = "radio";
                        button.setAttribute("class", "rb");
                        button.id = "rbtn";
                        button.name = "group";
                        button.value = "";
                        /* button.onclick = function(event) {
                             //alert("xcvbn");
                             //debugger;
                             deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                             DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                             //cbidHidden.value = event.currentTarget.parentNode.parentElement.childNodes[6].innerText;
                             //classificationHidden.value = event.currentTarget.parentNode.parentElement.childNodes[7].innerText;
                             // RangeHidden.value = event.currentTarget.parentNode.parentElement.childNodes[8].innerText;
                             EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                             // empRCDHidden.value = event.currentTarget.parentNode.parentElement.childNodes[9].innerText;
                         };*/
                        var tabCell1 = tr.insertCell(-1);
                        tabCell1.appendChild(button);
                        for (var l = 0; l < col.length; l++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = myresponse[k][col[l]];
                        }
                    }
                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    
                    /* var cancelButton = document.createElement("input");
                     cancelButton.type = "button";
                     cancelButton.setAttribute("class", "cancelBtn");
                     cancelButton.id = "cBtn";
                     cancelButton.value = "Cancel";
                     cancelButton.onclick = function(event) {
                         modal.style.display = "none";
                     };*/
                    var footerModal = document.getElementById("modal_footer");
                    //var cancelButton = document.getElementsByClassName("cancelBtn");
                    //footerModal.removeChild(cancelButton);
                    // cancelButton.parentNode.removeChild(cancelButton);
                    //var elem = document.getElementById('dummy');

                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "OK";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {
                                rButtonStatus = false;
                            } else {
                                EvaluatorName.value = myresponse[n].SupervisorName;
                                EvalTitle.value = myresponse[n].SupervisorTitle;
                                EmpFirstName.value = myresponse[n].FIRST_NAME;
                                EmpLastName.value = myresponse[n].LAST_NAME;
                              EmployeeFullName.value = myresponse[n].FIRST_NAME +" "+ myresponse[n].LAST_NAME;
                               EmpName.value = myresponse[n].FIRST_NAME +" "+ myresponse[n].LAST_NAME;
                                EmpUserID.value = myresponse[n].EMPUSERID;
                                CBID.value = myresponse[n].UNION_CD;
                                Classification.value = myresponse[n].DESCR;
                                Range.value = myresponse[n].GRADE;
                                EmpRCD.value = myresponse[n].EMPL_RCD;
                                division.value = myresponse[n].DIVSION;
                   			    divisionName.value = myresponse[n].DIVISION_NAME;
                                EmpEmailID.value = myresponse[n].EMAILID;
                                // col.push("EMPLID");

                                DeptName.value = myresponse[n].DEPTNAME;
                                DeptID.value = myresponse[n].DEPTID;
                                rButtonStatus = true;
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            //alert("Please select the department");
                          showErrorModal("Alert!","Please select the department");
                          //getPopup(text4);
                          modal.style.display = "block";
                        } else {
                   
                  /* var reviewFrom = ReviewPeriodFrom.value;
                   var reviewTo = ReviewPeriodTo.value;
                   var id = EmpID.value;
                   var deptId = DeptID.value;
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getMPPSelfDetails",
                        data: {
                            empID: id,
                            reviewPeriodTo: reviewTo,
                            reviewPeriodFrom: reviewFrom,
                            deptID: deptId
                        },
                        dataType: 'json',
                       success: function(response) {
                         
                            if (response.length != "0") {
                              selfEvalPanel.visible = true;
                               if(response[0].evaluation1 !== null){
                                 evaluation1.value = response[0].evaluation1;
                              }
                              if(response[0].evaluation2 !== null){
                              evaluation2.value = response[0].evaluation2;
                              }
                               if(response[0].evaluation3 !== null){
                              evaluation3.value = response[0].evaluation3;
                               }
                               if(response[0].evaluation4 !== null){
                              evaluation4.value = response[0].evaluation4;
                               }
                              if (response[0].instanceId !== null) {
                            instanceId.value = response[0].instanceId;
                        }
                            }else {
                               evaluation1.value = "Employee self evaluation data is not available for the current review period";
                               evaluation2.value = "Employee self evaluation data is not available for the current review period";
                               evaluation3.value = "Employee self evaluation data is not available for the current review period";
                               evaluation4.value = "Employee self evaluation data is not available for the current review period";
                              
                            }
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });*/
                          
                            modal.style.display = "none";

                        }
                    };
                    // footerModal = document.getElementById("modal_footer");
                    footerModal.appendChild(okButton);
                    // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
                } else {
                  showErrorModal("Alert!","No matching records found");
                  //getPopup(text1);
                  // alert("No matching records found");
                  /* var errorModal = document.getElementById('errorPopup');
                   var para = document.getElementById("pTag");
    para.innerHTML = "";
    para.innerHTML = "No matching records found";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var errorFooterModal = document.getElementById("errorPopup-footer");
    var okBtn = document.createElement("input");
    okBtn.type = "button";
    okBtn.setAttribute("class", "okBtn");
    okBtn.id = "errorOkBtn";
    okBtn.value = "Ok";
    okBtn.onclick = function(event) {
        modal.style.display = "none";
    };
    errorFooterModal.appendChild(okBtn);
    errorModal.style.display = "block";*/
                    EvaluatorName.value = null;
                    EvalTitle.value = null;
                    EmpFirstName.value = null;
                    EmpLastName.value = null;
                    DeptID.value = null;
                    DeptName.value = null;
                    CBID.value = null;
                    Classification.value = null;
                    Range.value = null;
					EmpID.value = null;
                    EmpRCD.value = null;
					EmpIdFlag.value = null;
                    EmpUserID.value = null;
                    AdminUserID.value = null;
                    EmpEmailID.value = null;
                    AdminEmailID.value = null;
                    gifModal.style.display = "none";
                }
                ////////////////////////////////////////////
                span.onclick = function() {

                    var n;
                    var rButtonStatus;
                    //var rButtonStatusFalse;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                       // alert("Please select the department");
                      showErrorModal("Alert!","Please select the department");
                  //getPopup(text2);  
                      modal.style.display = "block";
                    } else {
					showErrorModal("Alert!","Please select the department");
                  //getPopup(text3); 
                        //alert("Please select the department");
                        modal.style.display = "block";
                    }

                };
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
            }
        });
    
}else {
  
                  showErrorModal("Alert!","No matching records found");
  					EvaluatorName.value = null;
                    EvalTitle.value = null;
                    EmpFirstName.value = null;
                    EmpLastName.value = null;
                    DeptID.value = null;
                    DeptName.value = null;
                    CBID.value = null;
                    Classification.value = null;
                    Range.value = null;					
                    EmpRCD.value = null;
					EmpIdFlag.value = null;
                    EmpUserID.value = null;
                    AdminUserID.value = null;
                    EmpEmailID.value = null;
                    AdminEmailID.value = null;
                    gifModal.style.display = "none";
}
}
function getPopup(errorText){
  var errorTextObt = errorText;
  var errorModal = document.getElementById('modalText');

    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = errorTextObt;
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footererrorModal = document.getElementById("errorPopup-footer");
    var errorokButton = document.createElement("input");
    errorokButton.type = "button";
    errorokButton.setAttribute("class", "okBtn");
    //errorokButton.id = "okBtn";
    errorokButton.value = "Ok";
    errorokButton.onclick = function(event) {
        errorModal.style.display = "none";
    };
    footererrorModal.appendChild(errorokButton);
    
    errorModal.style.display = "block";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
Copy_EmpId.value = null;
Copy_EvalType.value = null;
if (StageIndicator.value === null &&   EmpIdFlag.value != this.value && (this.value != Copy_EmpId.value)) {
    if (this.value !== null && Initiator_EmpId.value != EmpID.value) {

        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var empId = this.value;
        var userID = LogUser.value;
		workflow_initiator.value = userID;
        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
            data: {
                cwid: empId,
                userID: userID,
                action:"MPP_EMP_DETAILS"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                  EmpIdFlag.value = this.value;
                   generateDOR.visible = true;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                  EmployeeFullName.value = myresponse[0].FIRST_NAME +" "+ myresponse[0].LAST_NAME;
                  EmpName.value = myresponse[0].FIRST_NAME +" "+ myresponse[0].LAST_NAME;
                    DeptID.value = myresponse[0].DEPTID;
                    DeptName.value = myresponse[0].DEPTNAME;
                    EmpRCD.value = myresponse[0].EMPL_RCD;
                    Classification.value = myresponse[0].DESCR;
                    Range.value = myresponse[0].GRADE;
                    EvaluatorName.value = myresponse[0].SupervisorName;
                    EvalTitle.value = myresponse[0].SupervisorTitle;
                    CBID.value = myresponse[0].UNION_CD;
                    EmpUserID.value = myresponse[0].EMPUSERID;
                    division.value = myresponse[0].DIVSION;
                    divisionName.value = myresponse[0].DIVISION_NAME;
                    //EmpEmailID.value = myresponse[0].EMAILID; 
                    //Show self eval tab
                    
                    EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                  /*  var reviewFrom = ReviewPeriodFrom.value;
                   var reviewTo = ReviewPeriodTo.value;
                  // var id = "899943393";
                  // var deptId = "10100";
                   
                   var id = EmpID.value;
                   var deptId = DeptID.value;
                  
                  $.ajax({
                        type: 'GET',
                        url: "/bin/getMPPSelfDetails",
                        data: {
                            empID: id,
                            reviewPeriodTo: reviewTo,
                            reviewPeriodFrom: reviewFrom,
                            deptID: deptId
                        },
                        dataType: 'json',
                        success: function(response) {
                         
                            if (response.length != "0") {
                              selfEvalPanel.visible = true;
                               if(response[0].evaluation1 !== null){
                                 evaluation1.value = response[0].evaluation1;
                              }
                              if(response[0].evaluation2 !== null){
                              evaluation2.value = response[0].evaluation2;
                              }
                               if(response[0].evaluation3 !== null){
                              evaluation3.value = response[0].evaluation3;
                               }
                               if(response[0].evaluation4 !== null){
                              evaluation4.value = response[0].evaluation4;
                               }
                              if (response[0].instanceId !== null) {
                            instanceId.value = response[0].instanceId;
                        }
                              
                            }else {
                               evaluation1.value = "Employee self evaluation data is not available for the current review period";
                               evaluation2.value = "Employee self evaluation data is not available for the current review period";
                               evaluation3.value = "Employee self evaluation data is not available for the current review period";
                               evaluation4.value = "Employee self evaluation data is not available for the current review period";
                              
                            }
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });*/
                    
                    modal.style.display = "none";
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (myresponse.length > 1) {
                   EmpIdFlag.value = this.value;
					generateDOR.visible = true;
                    gifModal.style.display = "none";
                    modal.style.display = "block";
                    //populate Hidden Fields

                    var col = [];
                    col.push("EMPLID");
                    col.push("LAST_NAME");
                    col.push("FIRST_NAME");
                    col.push("DEPTID");
                    col.push("DEPTNAME");
                    col.push("UNION_CD");
					col.push("EMPL_RCD");
					col.push("SupervisorName");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                   // var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                   var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name","CBID","Empl RCD","Supervisor Name"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);
                        // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                        var button = document.createElement("input");
                        button.type = "radio";
                        button.setAttribute("class", "rb");
                        button.id = "rbtn";
                        button.name = "group";
                        button.value = "";
                        /* button.onclick = function(event) {
                             //alert("xcvbn");
                             //debugger;
                             deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                             DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                             //cbidHidden.value = event.currentTarget.parentNode.parentElement.childNodes[6].innerText;
                             //classificationHidden.value = event.currentTarget.parentNode.parentElement.childNodes[7].innerText;
                             // RangeHidden.value = event.currentTarget.parentNode.parentElement.childNodes[8].innerText;
                             EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                             // empRCDHidden.value = event.currentTarget.parentNode.parentElement.childNodes[9].innerText;
                         };*/
                        var tabCell1 = tr.insertCell(-1);
                        tabCell1.appendChild(button);
                        for (var l = 0; l < col.length; l++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = myresponse[k][col[l]];
                        }
                    }
                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    
                    /* var cancelButton = document.createElement("input");
                     cancelButton.type = "button";
                     cancelButton.setAttribute("class", "cancelBtn");
                     cancelButton.id = "cBtn";
                     cancelButton.value = "Cancel";
                     cancelButton.onclick = function(event) {
                         modal.style.display = "none";
                     };*/
                    var footerModal = document.getElementById("modal_footer");
                    //var cancelButton = document.getElementsByClassName("cancelBtn");
                    //footerModal.removeChild(cancelButton);
                    // cancelButton.parentNode.removeChild(cancelButton);
                    //var elem = document.getElementById('dummy');

                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "OK";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {
                                rButtonStatus = false;
                            } else {
                                EvaluatorName.value = myresponse[n].SupervisorName;
                                EvalTitle.value = myresponse[n].SupervisorTitle;
                                EmpFirstName.value = myresponse[n].FIRST_NAME;
                                EmpLastName.value = myresponse[n].LAST_NAME;
                              EmployeeFullName.value = myresponse[n].FIRST_NAME +" "+ myresponse[n].LAST_NAME;
                               EmpName.value = myresponse[n].FIRST_NAME +" "+ myresponse[n].LAST_NAME;
                                EmpUserID.value = myresponse[n].EMPUSERID;
                                CBID.value = myresponse[n].UNION_CD;
                                Classification.value = myresponse[n].DESCR;
                                Range.value = myresponse[n].GRADE;
                                EmpRCD.value = myresponse[n].EMPL_RCD;
                                division.value = myresponse[n].DIVSION;
                   			    divisionName.value = myresponse[n].DIVISION_NAME;
                              //  EmpEmailID.value = myresponse[n].EMAILID;
                                EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                                // col.push("EMPLID");

                                DeptName.value = myresponse[n].DEPTNAME;
                                DeptID.value = myresponse[n].DEPTID;
                                rButtonStatus = true;
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            //alert("Please select the department");
                          showErrorModal("Alert!","Please select the department");
                          //getPopup(text4);
                          modal.style.display = "block";
                        } else {
                   
                  /* var reviewFrom = ReviewPeriodFrom.value;
                   var reviewTo = ReviewPeriodTo.value;
                   var id = EmpID.value;
                   var deptId = DeptID.value;
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getMPPSelfDetails",
                        data: {
                            empID: id,
                            reviewPeriodTo: reviewTo,
                            reviewPeriodFrom: reviewFrom,
                            deptID: deptId
                        },
                        dataType: 'json',
                       success: function(response) {
                         
                            if (response.length != "0") {
                              selfEvalPanel.visible = true;
                               if(response[0].evaluation1 !== null){
                                 evaluation1.value = response[0].evaluation1;
                              }
                              if(response[0].evaluation2 !== null){
                              evaluation2.value = response[0].evaluation2;
                              }
                               if(response[0].evaluation3 !== null){
                              evaluation3.value = response[0].evaluation3;
                               }
                               if(response[0].evaluation4 !== null){
                              evaluation4.value = response[0].evaluation4;
                               }
                              if (response[0].instanceId !== null) {
                            instanceId.value = response[0].instanceId;
                        }
                            }else {
                               evaluation1.value = "Employee self evaluation data is not available for the current review period";
                               evaluation2.value = "Employee self evaluation data is not available for the current review period";
                               evaluation3.value = "Employee self evaluation data is not available for the current review period";
                               evaluation4.value = "Employee self evaluation data is not available for the current review period";
                              
                            }
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });*/
                          
                            modal.style.display = "none";

                        }
                    };
                    // footerModal = document.getElementById("modal_footer");
                    footerModal.appendChild(okButton);
                    // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
                } else {
                  showErrorModal("Alert!","No matching records found");
                  //getPopup(text1);
                  // alert("No matching records found");
                  /* var errorModal = document.getElementById('errorPopup');
                   var para = document.getElementById("pTag");
    para.innerHTML = "";
    para.innerHTML = "No matching records found";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var errorFooterModal = document.getElementById("errorPopup-footer");
    var okBtn = document.createElement("input");
    okBtn.type = "button";
    okBtn.setAttribute("class", "okBtn");
    okBtn.id = "errorOkBtn";
    okBtn.value = "Ok";
    okBtn.onclick = function(event) {
        modal.style.display = "none";
    };
    errorFooterModal.appendChild(okBtn);
    errorModal.style.display = "block";*/
                    EvaluatorName.value = null;
                    EvalTitle.value = null;
                    EmpFirstName.value = null;
                    EmpLastName.value = null;
                    DeptID.value = null;
                    DeptName.value = null;
                    CBID.value = null;
                    Classification.value = null;
                    Range.value = null;
					EmpID.value = null;
                    EmpRCD.value = null;
					EmpIdFlag.value = null;
                    EmpUserID.value = null;
                    AdminUserID.value = null;
                    EmpEmailID.value = null;
                    AdminEmailID.value = null;
                    gifModal.style.display = "none";
                }
                ////////////////////////////////////////////
                span.onclick = function() {

                    var n;
                    var rButtonStatus;
                    //var rButtonStatusFalse;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                       // alert("Please select the department");
                      showErrorModal("Alert!","Please select the department");
                  //getPopup(text2);  
                      modal.style.display = "block";
                    } else {
					showErrorModal("Alert!","Please select the department");
                  //getPopup(text3); 
                        //alert("Please select the department");
                        modal.style.display = "block";
                    }

                };
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
            }
        });
    
}else {
  
                  showErrorModal("Alert!","No matching records found");
  					EvaluatorName.value = null;
                    EvalTitle.value = null;
                    EmpFirstName.value = null;
                    EmpLastName.value = null;
                    DeptID.value = null;
                    DeptName.value = null;
                    CBID.value = null;
                    Classification.value = null;
                    Range.value = null;					
                    EmpRCD.value = null;
					EmpIdFlag.value = null;
                    EmpUserID.value = null;
                    AdminUserID.value = null;
                    EmpEmailID.value = null;
                    AdminEmailID.value = null;
                    gifModal.style.display = "none";
}
}
function getPopup(errorText){
  var errorTextObt = errorText;
  var errorModal = document.getElementById('modalText');

    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = errorTextObt;
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footererrorModal = document.getElementById("errorPopup-footer");
    var errorokButton = document.createElement("input");
    errorokButton.type = "button";
    errorokButton.setAttribute("class", "okBtn");
    //errorokButton.id = "okBtn";
    errorokButton.value = "Ok";
    errorokButton.onclick = function(event) {
        errorModal.style.display = "none";
    };
    footererrorModal.appendChild(errorokButton);
    
    errorModal.style.display = "block";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CBID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_CBID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Classification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Classification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Range_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_Range_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value !== null) {
		ManagerUserID.value = "";
        ManagerEmailID.value = "";
        AdminUserID.value = "";
        AdminEmailID.value = "";
        adminFullName.value = "";
        var empId = EmpID.value;
        var deptid = this.value;

        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
            data: {                
                cwid: empId,
                deptID: deptid,
                action:"MPP_MANAGER_DATA"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                    ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                   /* if(ManagerUserID.value !== null){
 					 var mgrEmail = ManagerUserID.value.concat('@').concat('fullerton.edu');
  					 ManagerEmailID.value=mgrEmail;
					}
                    if (EmpUserID.value !== null) {
                        var empUserIdVal = EmpUserID.value;
                        var empEmail = empUserIdVal.concat('@').concat('fullerton.edu');
                        EmpEmailID.value = empEmail;
                    }*/
                    AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                    /*if (AdminUserID.value !== null) {
                        var admUID = AdminUserID.value;
                        var admEmail = admUID.concat('@').concat('fullerton.edu');
                        AdminEmailID.value = admEmail;
                    }*/
                    adminFullName.value = myresponse[0].ADMIN_EMP_NAME;
                  AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;
                //   AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
				//	ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                  AdminEmailID.value = "soumya.ravindra@thoughtfocus.com";
					ManagerEmailID.value = "soumya.ravindra@thoughtfocus.com";


                } 
                
            }
        });
    }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value !== null) {
		ManagerUserID.value = "";
        ManagerEmailID.value = "";
        AdminUserID.value = "";
        AdminEmailID.value = "";
        adminFullName.value = "";
        var chrsID = chrsId.value;
        var deptid = this.value;

        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormDataCHRSID",
            data: {                
                cwid: chrsID,
                deptID: deptid,
                action:"MPP_MANAGER_DATA"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                    ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                   /* if(ManagerUserID.value !== null){
 					 var mgrEmail = ManagerUserID.value.concat('@').concat('fullerton.edu');
  					 ManagerEmailID.value=mgrEmail;
					}
                    if (EmpUserID.value !== null) {
                        var empUserIdVal = EmpUserID.value;
                        var empEmail = empUserIdVal.concat('@').concat('fullerton.edu');
                        EmpEmailID.value = empEmail;
                    }*/
                    AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                    /*if (AdminUserID.value !== null) {
                        var admUID = AdminUserID.value;
                        var admEmail = admUID.concat('@').concat('fullerton.edu');
                        AdminEmailID.value = admEmail;
                    }*/
                    adminFullName.value = myresponse[0].ADMIN_EMP_NAME;
                  AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;
                //   AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
				//	ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                  AdminEmailID.value = "soumya.ravindra@thoughtfocus.com";
					ManagerEmailID.value = "soumya.ravindra@thoughtfocus.com";


                } 
                
            }
        });
    }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvaluatorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvaluatorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ReviewPeriodFrom_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ReviewPeriodFrom_init0 = function (scope) {
    with(this) {
        with(scope) {
            /* Add your own JavaScript here. */
if(StageIndicator.value === null){
var dateValue = this.value;
//alert(dateValue);
if(dateValue === null){
var today = new Date();
//alert(today);
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;
//var d = new Date(lastYear, 3, 16);
var d = (lastYear+"-"+"5"+"-"+"16");
  //alert(d);
this.value = d;
}else{
this.value = dateValue;
}
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ReviewPeriodTo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ReviewPeriodTo_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;
//var d = new Date(curyear, 3, 15);
var d = (curyear+"-"+"5"+"-"+"15");
this.value = d;
}else{
this.value = dateValue;
}
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AthleticEmp_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AthleticEmp_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(AthleticEmp.value == 1){
  athleticsEmpGroup.visible = true;
}
else{
  athleticsEmpGroup.visible = false;
}

if(StageIndicator.value === null || StageIndicator.value == "ToManager"){
if(this.value == "1"){
  AthleticEmpImpToPos.mandatory = true;
}
else{
  AthleticEmpImpToPos.mandatory = false;
  AthleticEmpImpToPos.value = "";
  AthleticsEmpRating.value = "";
}
}




        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;
  LogUser.value = userValue;
  
},
  error: function(error){
alert("error block="+error);
}
});

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvalTitle_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvalTitle_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var evaluatorTitle = this.value;
regex = /President/;
VPCheckFlag.value = (regex.test(evaluatorTitle));
  
if(VPCheckFlag.value == "true"){

  EvaluatorSignaturePanel.visible = false;
  VPsignaturePanel.visible = true;
}else{
  EvaluatorSignaturePanel.visible = true;
  VPsignaturePanel.visible = false;
}
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_StageIndicator_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_StageIndicator_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "ToManagerAcknowledgeOnExpire"){
  EmpDidNotSignCB.visible = false;
  SendForEmpAckCB.visible = false;
  actionTakenAfterExpiry.visible = true;
  
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ManagerUserID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ManagerUserID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == LogUser.value){
    initiator.value = "Manager";
  }else{
    initiator.value = "Initiator";
  }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_initiator_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_initiator_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "Initiator"){
    AssociateSignatureSection.visible = true;
    EvaluatorSignaturePanel.visible = false;
    
  }else{
    AssociateSignatureSection.visible = false;
     EvaluatorSignaturePanel.visible = true;
  }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_division_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_division_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_division_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_division_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var divisionVal = this.value;
  
$.ajax({

type: 'GET', 

url:"/bin/getEvaluationFormData",
  data: {
                division: divisionVal,
    			action:"HR_COO_DATA"
                
            },
dataType: 'json',
success: function(myresopnse){
  
   HrCoordId.value =myresopnse[0].USERID;
   HrCoordFname.value =myresopnse[0].FIRSTNAME;
   HrCoordLname.value =myresopnse[0].LASTNAME;
  // HrCoordEmailId.value =myresopnse[0].EMAIL;    
    HrCoordEmailId.value = "soumya.ravindra@thoughtfocus.com";
  hrCooFullName.value = (HrCoordFname.value).concat(" "+HrCoordLname.value);
  
},
  error: function(error){
alert("error block="+error);
}
});
}


        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_divisionName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_divisionName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SubmissionId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SubmissionId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var ID = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for ( var i = 0; i < 12; i++ ) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
this.value = ID;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ConceptualSkill_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ConceptualSkill_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null && InterpersonalSkills.value !== null && TechnicalSkills.value !== null){
  var coceptSkill = this.value;
  var ipSkill = InterpersonalSkills.value;
  var techSkill = TechnicalSkills.value;
  var otherSkill = OtherSkills.value;
  
   if(coceptSkill == "1"){
    coceptSkill = "5";
  }else if(coceptSkill == "2"){
    coceptSkill = "4";
  }else if(coceptSkill == "3"){
    coceptSkill = "3";
  }else if(coceptSkill == "4"){
    coceptSkill = "2";
  }else if(coceptSkill == "5"){
    coceptSkill = "1";
  }else {
    coceptSkill = "0";
  }
  if(ipSkill == "1"){
    ipSkill = "5";
  }else if(ipSkill == "2"){
    ipSkill = "4";
  }else if(ipSkill == "3"){
    ipSkill = "3";
  }else if(ipSkill == "4"){
    ipSkill = "2";
  }else if(ipSkill == "5"){
    ipSkill = "1";
  }else {
    ipSkill = "0";
  }
  
    if(techSkill == "1"){
    techSkill = "5";
  }else if(techSkill == "2"){
    techSkill = "4";
  }else if(techSkill == "3"){
    techSkill = "3";
  }else if(techSkill == "4"){
    techSkill = "2";
  }else if(techSkill == "5"){
    techSkill = "1";
  }else {
    techSkill = "0";
  }
  if(otherSkill == "1"){
    otherSkill = "5";
  }else if(otherSkill == "2"){
    otherSkill = "4";
  }else if(otherSkill == "3"){
    otherSkill = "3";
  }else if(otherSkill == "4"){
    otherSkill = "2";
  }else if(otherSkill == "5"){
    otherSkill = "1";
  }else {
    otherSkill = "0";
  }
  
   var avg = (parseInt(coceptSkill)+parseInt(ipSkill)+parseInt(techSkill)+parseInt(otherSkill))/4;
  avg = Math.round(avg);
  averageRating.value = avg;
   
if(avg > "4"){
  OverallRating.value = "Consistently Exceeds Expectations";
  averageRating.value = "Consistently Exceeds Expectations";
}else if(avg == "4"){
  OverallRating.value = "Meets and Frequently Exceeds Expectations";
  averageRating.value = "Meets and Frequently Exceeds Expectations";
}else if(avg == "3"){
  OverallRating.value = "Satisfactory";
  averageRating.value = "Satisfactory";
}else if(avg == "2"){
  OverallRating.value = "Needs Improvement";
  averageRating.value = "Needs Improvement";
}else {
  OverallRating.value = "Does Not Meet Expectations";
  averageRating.value = "Does Not Meet Expectations";
}
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_InterpersonalSkills_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_InterpersonalSkills_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(ConceptualSkill.value !== null && this.value !== null && TechnicalSkills.value !== null){
  var coceptSkill = ConceptualSkill.value;
  var ipSkill = this.value;
  var techSkill = TechnicalSkills.value;
  var otherSkill = OtherSkills.value;
  
   if(coceptSkill == "1"){
    coceptSkill = "5";
  }else if(coceptSkill == "2"){
    coceptSkill = "4";
  }else if(coceptSkill == "3"){
    coceptSkill = "3";
  }else if(coceptSkill == "4"){
    coceptSkill = "2";
  }else if(coceptSkill == "5"){
    coceptSkill = "1";
  }else {
    coceptSkill = "0";
  }
  if(ipSkill == "1"){
    ipSkill = "5";
  }else if(ipSkill == "2"){
    ipSkill = "4";
  }else if(ipSkill == "3"){
    ipSkill = "3";
  }else if(ipSkill == "4"){
    ipSkill = "2";
  }else if(ipSkill == "5"){
    ipSkill = "1";
  }else {
    ipSkill = "0";
  }
  
    if(techSkill == "1"){
    techSkill = "5";
  }else if(techSkill == "2"){
    techSkill = "4";
  }else if(techSkill == "3"){
    techSkill = "3";
  }else if(techSkill == "4"){
    techSkill = "2";
  }else if(techSkill == "5"){
    techSkill = "1";
  }else {
    techSkill = "0";
  }
  if(otherSkill == "1"){
    otherSkill = "5";
  }else if(otherSkill == "2"){
    otherSkill = "4";
  }else if(otherSkill == "3"){
    otherSkill = "3";
  }else if(otherSkill == "4"){
    otherSkill = "2";
  }else if(otherSkill == "5"){
    otherSkill = "1";
  }else {
    otherSkill = "0";
  }
  
  var avg = (parseInt(coceptSkill)+parseInt(ipSkill)+parseInt(techSkill)+parseInt(otherSkill))/4;
  avg = Math.round(avg);
  averageRating.value = avg;
  
  if(avg > "4"){
  OverallRating.value = "Consistently Exceeds Expectations";
  averageRating.value = "Consistently Exceeds Expectations";
}else if(avg == "4"){
  OverallRating.value = "Meets and Frequently Exceeds Expectations";
  averageRating.value = "Meets and Frequently Exceeds Expectations";
}else if(avg == "3"){
  OverallRating.value = "Satisfactory";
  averageRating.value = "Satisfactory";
}else if(avg == "2"){
  OverallRating.value = "Needs Improvement";
  averageRating.value = "Needs Improvement";
}else {
  OverallRating.value = "Does Not Meet Expectations";
  averageRating.value = "Does Not Meet Expectations";
}
    
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_TechnicalSkills_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_TechnicalSkills_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(ConceptualSkill.value !== null && InterpersonalSkills.value !== null && this.value !== null){
  var coceptSkill = ConceptualSkill.value;
  var ipSkill = InterpersonalSkills.value;
  var techSkill = this.value;
  var otherSkill = OtherSkills.value;
  
   if(coceptSkill == "1"){
    coceptSkill = "5";
  }else if(coceptSkill == "2"){
    coceptSkill = "4";
  }else if(coceptSkill == "3"){
    coceptSkill = "3";
  }else if(coceptSkill == "4"){
    coceptSkill = "2";
  }else if(coceptSkill == "5"){
    coceptSkill = "1";
  }else {
    coceptSkill = "0";
  }
  if(ipSkill == "1"){
    ipSkill = "5";
  }else if(ipSkill == "2"){
    ipSkill = "4";
  }else if(ipSkill == "3"){
    ipSkill = "3";
  }else if(ipSkill == "4"){
    ipSkill = "2";
  }else if(ipSkill == "5"){
    ipSkill = "1";
  }else {
    ipSkill = "0";
  }
  
    if(techSkill == "1"){
    techSkill = "5";
  }else if(techSkill == "2"){
    techSkill = "4";
  }else if(techSkill == "3"){
    techSkill = "3";
  }else if(techSkill == "4"){
    techSkill = "2";
  }else if(techSkill == "5"){
    techSkill = "1";
  }else {
    techSkill = "0";
  }
  if(otherSkill == "1"){
    otherSkill = "5";
  }else if(otherSkill == "2"){
    otherSkill = "4";
  }else if(otherSkill == "3"){
    otherSkill = "3";
  }else if(otherSkill == "4"){
    otherSkill = "2";
  }else if(otherSkill == "5"){
    otherSkill = "1";
  }else {
    otherSkill = "0";
  }
  
   var avg = (parseInt(coceptSkill)+parseInt(ipSkill)+parseInt(techSkill)+parseInt(otherSkill))/4;
  avg = Math.round(avg);
  averageRating.value = avg;
  
  if(avg > "4"){
  OverallRating.value = "Consistently Exceeds Expectations";
  averageRating.value = "Consistently Exceeds Expectations";
}else if(avg == "4"){
  OverallRating.value = "Meets and Frequently Exceeds Expectations";
  averageRating.value = "Meets and Frequently Exceeds Expectations";
}else if(avg == "3"){
  OverallRating.value = "Satisfactory";
  averageRating.value = "Satisfactory";
}else if(avg == "2"){
  OverallRating.value = "Needs Improvement";
  averageRating.value = "Needs Improvement";
}else {
  OverallRating.value = "Does Not Meet Expectations";
  averageRating.value = "Does Not Meet Expectations";
}
    
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OtherRating_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OtherRating_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === null){
  OtherSkills.value = "";
  OtherSkills.enabled = false;
}else{
  
  OtherSkills.enabled = true;
}
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OtherSkills_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OtherSkills_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(OtherRating.value === null){
  this.enabled = false;
}else{
  this.enabled = true;
}
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OtherSkills_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OtherSkills_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(ConceptualSkill.value !== null && InterpersonalSkills.value !== null && TechnicalSkills.value !== null){
  var coceptSkill = ConceptualSkill.value;
  var ipSkill = InterpersonalSkills.value;
  var techSkill = TechnicalSkills.value;
  var otherSkill = this.value;
  
   if(coceptSkill == "1"){
    coceptSkill = "5";
  }else if(coceptSkill == "2"){
    coceptSkill = "4";
  }else if(coceptSkill == "3"){
    coceptSkill = "3";
  }else if(coceptSkill == "4"){
    coceptSkill = "2";
  }else if(coceptSkill == "5"){
    coceptSkill = "1";
  }else {
    coceptSkill = "0";
  }
  if(ipSkill == "1"){
    ipSkill = "5";
  }else if(ipSkill == "2"){
    ipSkill = "4";
  }else if(ipSkill == "3"){
    ipSkill = "3";
  }else if(ipSkill == "4"){
    ipSkill = "2";
  }else if(ipSkill == "5"){
    ipSkill = "1";
  }else {
    ipSkill = "0";
  }
  
    if(techSkill == "1"){
    techSkill = "5";
  }else if(techSkill == "2"){
    techSkill = "4";
  }else if(techSkill == "3"){
    techSkill = "3";
  }else if(techSkill == "4"){
    techSkill = "2";
  }else if(techSkill == "5"){
    techSkill = "1";
  }else {
    techSkill = "0";
  }
  if(otherSkill == "1"){
    otherSkill = "5";
  }else if(otherSkill == "2"){
    otherSkill = "4";
  }else if(otherSkill == "3"){
    otherSkill = "3";
  }else if(otherSkill == "4"){
    otherSkill = "2";
  }else if(otherSkill == "5"){
    otherSkill = "1";
  }else {
    otherSkill = "0";
  }
 // alert((coceptSkill)+"|"+(ipSkill)+"|"+(techSkill)+"|"+(otherSkill));
  var avg = (parseInt(coceptSkill)+parseInt(ipSkill)+parseInt(techSkill)+parseInt(otherSkill))/4;
  //alert(avg);
  avg = Math.round(avg);
 
  averageRating.value = avg;
  if(avg > "4"){
  OverallRating.value = "Consistently Exceeds Expectations";
  averageRating.value = "Consistently Exceeds Expectations";
}else if(avg == "4"){
  OverallRating.value = "Meets and Frequently Exceeds Expectations";
  averageRating.value = "Meets and Frequently Exceeds Expectations";
}else if(avg == "3"){
  OverallRating.value = "Satisfactory";
  averageRating.value = "Satisfactory";
}else if(avg == "2"){
  OverallRating.value = "Needs Improvement";
  averageRating.value = "Needs Improvement";
}else {
  OverallRating.value = "Does Not Meet Expectations";
  averageRating.value = "Does Not Meet Expectations";
}
    
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_averageRating_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_averageRating_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEmployee" || StageIndicator.value == "ToEmployeeAck" || StageIndicator.value == "ToEmployeeAckOnExpire"){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_averageRating_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_averageRating_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var finalAvg = this.value;
if(finalAvg > "4"){
  OverallRating.value = "Consistently Exceeds Expectations";
}else if(finalAvg == "4"){
  OverallRating.value = "Meets and Frequently Exceeds Expectations";
}else if(finalAvg == "3"){
  OverallRating.value = "Satisfactory";
}else if(finalAvg == "2"){
  OverallRating.value = "Needs Improvement";
}else {
  OverallRating.value = "Does Not Meet Expectations";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OverallRating_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_OverallRating_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AthleticEmpImpToPos_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AthleticEmpImpToPos_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  AthleticsEmpRating.visible = true;
  AthleticsEmpRating.mandatory = true;
 // textMeetDoesnotMeet.visible = true;
}else{
   AthleticsEmpRating.visible = false;
  AthleticsEmpRating.mandatory = false;
  AthleticsEmpRating.value = "";
 // textMeetDoesnotMeet.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AthleticsEmpRating_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AthleticsEmpRating_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(AthleticEmpImpToPos.value == "2"){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_selfEvalSupDocsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_selfEvalSupDocsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_instanceId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_instanceId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
 if(this.value !== null){
selfEvalSupDocsPanel.visible = true;
var instance = instanceId.value;
$.ajax({

    type: 'GET',

    url: "/bin/getSelfEvalSupDoc",
    data: {
        instanceId: instance
    },
    success: function(myresopnse) {
     if(myresopnse.length > "0"){
        for(i=0;i<myresopnse.length;i++){
         
    var linkSource = 'data:application/pdf;base64,'+myresopnse[i].Content;
    var downloadLink = document.createElement("a");
    downloadLink.id = ("a".concat(i));
    var fName = myresopnse[i].fileName;
    var mydiv = document.getElementById("gridView");
    downloadLink.innerText = fName;
    var para = document.createElement("p");
    para.innerText = "";
    mydiv.appendChild(para);   
    mydiv.appendChild(downloadLink);
    downloadLink.href = linkSource;
    downloadLink.download = fName;
    //downloadLink.click();
  
        }
    var breakLine = document.createElement("p");
    breakLine.innerText = "";
    var docDiv = document.getElementById("gridView");
    docDiv.appendChild(breakLine); 
     }
    },
    error: function(error) {
        alert("error block=" + error);
    }
});
 }else{
   selfEvalSupDocsPanel.visible = false;
 }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_instanceId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_instanceId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
 if(this.value !== null){
selfEvalSupDocsPanel.visible = true;
var instance = instanceId.value;
$.ajax({

    type: 'GET',

    url: "/bin/getSelfEvalSupDoc",
    data: {
        instanceId: instance
    },
    success: function(myresopnse) {
     if(myresopnse.length > "0"){
        for(i=0;i<myresopnse.length;i++){
         
    var linkSource = 'data:application/pdf;base64,'+myresopnse[i].Content;
    var downloadLink = document.createElement("a");
    downloadLink.id = ("a".concat(i));
    var fName = myresopnse[i].fileName;
    var mydiv = document.getElementById("gridView");
    downloadLink.innerText = fName;
    var para = document.createElement("p");
    para.innerText = "";
    mydiv.appendChild(para);   
    mydiv.appendChild(downloadLink);
    downloadLink.href = linkSource;
    downloadLink.download = fName;
    //downloadLink.click();
  
        }
    var breakLine = document.createElement("p");
    breakLine.innerText = "";
    var docDiv = document.getElementById("gridView");
    docDiv.appendChild(breakLine); 
     }
    },
    error: function(error) {
        alert("error block=" + error);
    }
});
 }else{
   selfEvalSupDocsPanel.visible = false;
 }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_workflowinstanceId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_workflowinstanceId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
   debugger;
 if(this.value !== null){
  
selfEvalSupDocsPanel.visible = true;
var instance = this.value;
 var requestURL = '/bin/getInboxItemDetails?action=TASK_ATTACHMENTS_FROM_WORKFLOW_INSTANCE_ID&workflowInstanceId=' + encodeURIComponent(instance);   
                      
    $.ajax({
      type : "GET",
            contentType : "application/text; charset=utf-8",               
            url : '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
            async : false,
            cache : false,
            dataType : "json",
                            success: function(myresopnse) {

                                if (myresopnse.length > "0") {
                                    selfEvalSupDocsPanel.visible = true;
                                    var mydiv = document.getElementById("gridView");
                                    mydiv.innerHTML = "";
                                    for (i = 0; i < myresopnse.length; i++) {

                        var jsonData = myresopnse[i];       
                       					var linkSource = ((window.location.protocol)+"//"+ window.location.hostname + ':' + window.location.port)+ "/bin/getTaskAttachmentFromProcessingInstance?assetPath=" + encodeURIComponent(jsonData.path);
                                        //var linkSource = 'data:application/pdf;base64,' + myresopnse[i].Content;
                                        var downloadLink = document.createElement("a");
                                        downloadLink.id = ("a".concat(i));
                              			//downloadLink.href = '/bin/getTaskAttachmentFromProcessingInstance?assetPath=" + encodeURIComponent(jsonData.path) + "';
                                        var fName = jsonData.fileName;

                                        downloadLink.innerText = fName;
                                        var para = document.createElement("p");
                                        para.innerText = "";
                                        mydiv.appendChild(para);
                                        mydiv.appendChild(downloadLink);
                                        downloadLink.href = linkSource;
                                        downloadLink.download = fName;
                            //downloadLink.click();

                        }
                        var breakLine = document.createElement("p");
                        breakLine.innerText = "";
                        var docDiv = document.getElementById("gridView");
                        docDiv.appendChild(breakLine);
     }else{
        selfEvalSupDocsPanel.visible = false;
     }
    },
    error: function(error) {
        console.log("error="+error);
    }
});
 }else{
   selfEvalSupDocsPanel.visible = false;
  
     supportingDocs.visible = false;
   
 }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_attachmentText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_attachmentText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
   this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
   this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
 
  var filePath = supportDoc1.fileAttachment.value;
  var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
  docName1.value = filePath;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc1.fileAttachment.value = null;
  
showErrorModal("Alert!","Only PDF files are allowed");
}


}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc2_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
   this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
  var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
  docName2.value = filePath;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc2.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
   

}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc3_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
   this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
  var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc3.fileAttachment.value = fname;
}
  docName3.value = filePath;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc3.fileAttachment.value = null;
  
  showErrorModal("Alert!","Only PDF files are allowed");
}
   

}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc4_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
   this.visible = false;
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_supportDoc4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc4.fileAttachment.value;
  var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc4.fileAttachment.value = fname;
}
  docName4.value = filePath;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc4.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
   

}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ExpireText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_ExpireText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SignedText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SignedText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagerFinalAcknowledge"){
  if(EmpCB.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
else if(StageIndicator.value == "ToAdmin"){
  if(EmpCB.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
else if(StageIndicator.value == "ToHRDI"){
  if(EmpCB.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
else if(StageIndicator.value == "ToManagerHRDI"){
  if(EmpCB.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DidNotSignText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_DidNotSignText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagerFinalAcknowledge"){
  if(EmpCB.value == "1"){
    this.visible = false;
  }else{
    this.visible = true;
  }
}
else if(StageIndicator.value == "ToAdmin"){
  if(EmpCB.value == "1"){
    this.visible = false;
  }else{
    this.visible = true;
  }
}
else if(StageIndicator.value == "ToHRDI"){
  if(EmpCB.value == "1"){
    this.visible = false;
  }else{
    this.visible = true;
  }
}
else if(StageIndicator.value == "ToManagerHRDI"){
  if(EmpCB.value == "1"){
    this.visible = false;
  }else{
    this.visible = true;
  }
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpDidNotSignCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpDidNotSignCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value ==  "ToManagerFinalAcknowledge"){
  this.visible = true;
  this.mandatory = "error";
}else if(StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
 // this.visible = true;
   this.visible = false;
}
else if(StageIndicator.value == "ToAdmin" || StageIndicator.value == "ToHRDI" || StageIndicator.value == "ToManagerHRDI"){
 if(this.value == "1"){
   this.visible= true;
 } else{
   this.visible = false;
 }
}
else{
  
  this.visible = false;
 
  
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpDidNotSignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpDidNotSignCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
  if(this.value == "1"){
    SendForEmpAckCB.value = "";
  }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SendForEmpAckCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SendForEmpAckCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
/*if(StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
  this.visible = true;
}else{
  this.visible = false;
}*/
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SendForEmpAckCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_SendForEmpAckCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
  if(this.value == "1"){
    EmpDidNotSignCB.value = "";
  }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_actionTakenAfterExpiry_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_actionTakenAfterExpiry_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_actionTakenAfterExpiry_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_actionTakenAfterExpiry_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
  if(this.value == "1"){
    EmpDidNotSignCB.value = "1";
    SendForEmpAckCB.value = "";
  }
  if(this.value == "2"){
    EmpDidNotSignCB.value = "";
    SendForEmpAckCB.value = "1";
  }
  
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvalCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvalCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagerAcknowledge" || StageIndicator.value == "ToManagerFinalAcknowledge" || StageIndicator.value == "ToManagerAcknowledgeOnExpire"){
 // this.value = null;
  this.visible = true;
  EvaluatorNameSign.visible = true;
  EvaluatorSign.visible = true;
  EvaluatorDate.visible = true;
}else if(StageIndicator.value ==  "ToEmployeeAck" || StageIndicator.value == "ToAdmin" || StageIndicator.value == "ToHRDI" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToEmployeeAckOnExpire"){
  if(this.value == "1"){
  this.visible = true;
  EvaluatorNameSign.visible = true;
  EvaluatorSign.visible = true;
  EvaluatorDate.visible = true;
  }
}
/*else if(StageIndicator.value === null || StageIndicator.value === "ToManager"){
  EvaluatorNameSign.visible = true;
  EvaluatorNameSign.enabled = false;
  EvaluatorNameSign.mandatory = null;
  this.visible = true;
  this.mandatory = null;
  this.enabled = false;
  EvaluatorSign.visible = true;
  EvaluatorSign.mandatory = null;
  EvaluatorSign.enabled = false;
  EvaluatorDate.visible = true;
  EvaluatorDate.enabled = false;
  EvaluatorDate.mandatory = null;
}*/
else{
  EvaluatorNameSign.visible = false;
  this.visible = false;
  EvaluatorSign.visible = false;
  EvaluatorDate.visible = false;
  
}
debugger;
if(EvalCB.value !== null){  
            var d = EvaluatorDate.value;  
  if(d !== ""){
            var curyear = d.substring(0,4);
            var curyearMonth = d.substring(5,7);
            var curyearDay = d.substring(8,10);
  			var item = "I affirm that this performance evaluation was reviewed with the employee "+(curyearMonth+"/"+curyearDay + "/" + curyear);           
  document.getElementById("guideContainer-rootPanel-panel_1531282984-instructions-panel_2048390334-EvalCB1563954062264___guide-item").childNodes[0].nextSibling.childNodes[1].childNodes[1].childNodes[1].childNodes[2].nextSibling.childNodes[1].innerHTML = item;
  }
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvalCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvalCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
debugger;
if (this.value !== null) {
    if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToManagerAcknowledge" || StageIndicator.value == "ToManagerFinalAcknowledge" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToManagerAcknowledgeOnExpire") {
        if (EvaluatorDate.value === null) {
           /* var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            EvaluatorDate.value = d;*/
            EvaluatorDate.enabled = false;
           	
          //document.getElementById("guideContainer-rootPanel-panel_1531282984-instructions-panel_2048390334-EvalCB1563954062264___1_widget").checked = true;
         // EvalCB.value = "1";
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    EvaluatorSign.value = userValue;
                  	EvaluatorNameSign.value = userValue;
                   EvaluatorDate.value = myresopnse[0].SERVER_DATE;
                    var d = EvaluatorDate.value;
                    if (d !== "") {
                        var curyear = d.substring(0, 4);
                        var curyearMonth = d.substring(5, 7);
                        var curyearDay = d.substring(8, 10);
                      var evalCBChecked = document.querySelector(".EvaluatorCheckbox check");
            var result = [];
            var item = "1=I affirm that this performance evaluation was reviewed with the employee "+(curyearMonth+"/"+curyearDay + "/" + curyear);
          //var item = "I affirm that this performance evaluation was reviewed with the employee "+(EvaluatorDate.value);  
          result.push(item);
            EvalCB.items = item;
                    }
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
          
					
            EvaluatorSign.enabled = false;
           // EvaluatorNameSign.value = (EvaluatorName.value).replace("  "," ");

        }
    }
} else {
    EvaluatorSign.value = "";
    EvaluatorDate.value = "";
    EvaluatorNameSign.value = "";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvaluatorComment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvaluatorComment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvaluatorComment_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EvaluatorComment_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRCooCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRCooCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToHRCoo") {
        if (HRCoordinatorSignDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            HRCoordinatorSignDate.value = d;*/

            HRCoordinatorSignDate.enabled = false;
          
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    HRCoordinatorSign.value = userValue;
                  	HRCooName.value = userValue;
                  HRCoordinatorSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
          
            HRCoordinatorSign.enabled = false;
            //HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    }
} else {
    HRCoordinatorSign.value = "";
    HRCoordinatorSignDate.value = "";
    HRCooName.value = "";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRCoordinatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRCoordinatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRCoordinatorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRCoordinatorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToEmployeeAckOnExpire" || StageIndicator.value == "ToEmployeeAck"){
 /*  this.mandatory = "";
  EmpSign.mandatory = "";
  EmpDate.mandatory = "";
}else{*/
  this.mandatory = "error";
  EmpSign.mandatory = "error";
  EmpDate.mandatory = "error";
 
}

if(StageIndicator.value == "ToEmployeeAck" || StageIndicator.value == "ToEmployeeAckOnExpire"){
  this.visible = true;
  EmpSign.visible = true;
  EmpDate.visible = true;
 }else if(StageIndicator.value == "ToAdmin"|| StageIndicator.value == "ToHRDI" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToManagerFinalAcknowledge"){
  if(this.value == "1"){
  this.visible = true;
  EmpSign.visible = true;
  EmpDate.visible = true;
  }else{
    EmpSignaturePanel.visible = false;
   this.visible = false;
  EmpSign.visible = false;
  EmpDate.visible = false; 
  }
}/*else if(StageIndicator.value === "ToEmployee"){
  EmpSign.visible = true;
  EmpSign.enabled = false;
  EmpSign.mandatory = null;
  this.visible = true;
  this.mandatory = null;
  this.enabled = false;
  EmpDate.visible = true;
  EmpDate.mandatory = null;
  EmpDate.enabled = false;
  
}*/else{
  EmpSign.visible = false;
  this.visible = false;
  EmpDate.visible = false;
  
  
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToEmployee" || StageIndicator.value == "ToEmployeeAck" || StageIndicator.value == "ToEmployeeAckOnExpire") {
        if (EmpDate.value === null) {
           /* var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            EmpDate.value = d;*/

            EmpDate.enabled = false;
          
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    EmpSign.value = userValue;
                   EmpDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
          }
            EmpSign.enabled = false;

         
    }
} else {
    EmpSign.value = "";
    EmpDate.value = "";

}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_radiobutton1680673328651_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_radiobutton1680673328651_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEmployee"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpComment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpComment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpComment_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_EmpComment_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAdmin" || StageIndicator.value == "ToHRDI" | StageIndicator.value == "ToEmployeeAckOnExpire" || StageIndicator.value == "ToEmployeeAck"){
  this.visible = false;
 }
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToAdmin") {
        if (AdminDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            AdminDate.value = d;*/
            //AdminName.value = adminFullName.value;
            //AdminName.value = "Michelle Tapper";
            AdminDate.enabled = false;
          
            $.ajax({

                type: 'GET',

               url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    AdminSign.value = userValue;
                  	AdminName.value = userValue;
                   AdminDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
          
            AdminSign.enabled = false;

        }
    }
} else {
    AdminSign.value = "";
    AdminDate.value = "";
    AdminName.value = "";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AdminComment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_AdminComment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_VPsignaturePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_VPsignaturePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_VPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_VPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
if(StageIndicator.value === null || StageIndicator.value === "VP"){
   if(VPSign.value === null)
  {
   var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  //var dateString = new Date().toLocaleString("en-US", {timeZone:(Intl.DateTimeFormat().resolvedOptions().timeZone)}).slice(0,9); 
 // var dateObject = new Date(dateString);
  //var finalDate = dateObject.toISOString().slice(0,10);
  VPDate.value=TzoneDate;
 
    VPDate.enabled = false;
//EvalSignDate.value = (new Date().toISOString().slice(0,10));
    VPSign.value = LogUser.value;
   
    VPSign.enabled = false;
  }
  else{
    VPSign.value = LogUser.value;
   
    VPSign.enabled = false;
  }
}
}

        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRDICB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRDICB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToHRDI") {
        if (HRDIDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            HRDIDate.value = d;*/

            HRDIDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    HRDIInitials.value = userValue;
                  HRDIDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

            HRDIInitials.enabled = false;

        }
    }
} else {
    HRDIInitials.value = "";
    HRDIDate.value = "";

}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRDIInitials_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRDIInitials_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRDIDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_HRDIDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_textdraw1680247949769_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_textdraw1680247949769_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager" || StageIndicator.value == "ToManagerAcknowledge" || StageIndicator.value == "ToManagerFinalAcknowledge" || StageIndicator.value == "ToManagerHRDI" || StageIndicator.value == "ToManagerAcknowledgeOnExpire" || StageIndicator.value == "ToEmployee" || StageIndicator.value == "ToEmployeeAck" || StageIndicator.value == "ToEmployeeAckOnExpire" || StageIndicator.value == "ToHRDI" || StageIndicator.value == "ToHRCoo" || StageIndicator.value == "ToAdmin"){
  this.visible = false;
}else if(StageIndicator.value === null){
  if(formSavedStatus.value !== null && EmpID.value !== null){
   this.visible = true;
  }else{
    this.visible = false;
  }
}else{
  //alert("sdsddsf");
  this.visible = false;
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EvaluationType.value !== null && ConceptualSkill.value !== null && InterpersonalSkills.value !== null && TechnicalSkills.value !== null && OverallRating.value !== null && SupportStatement1.value !== null && SupportStatement2.value !== null && SupportStatement3.value !== null && SupportStatement4.value !== null){

    generatePDFStep.value = "Draft";
   getPdf();
  
    
}else{
  var errorModal = document.getElementById('errorPopup');

   var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please fill in the required fields";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footererrorModal = document.getElementById("errorPopup-footer");
    var errorokButton = document.createElement("input");
    errorokButton.type = "button";
    errorokButton.setAttribute("class", "okBtn");
    //errorokButton.id = "okBtn";
    errorokButton.value = "Ok";
    errorokButton.onclick = function(event) {
        errorModal.style.display = "none";
    };
    footererrorModal.appendChild(errorokButton);
    
    errorModal.style.display = "block";
  
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/mpp-perfromance-evaluation/mpp-performance-evaluation');
            jsonData.append('fileName', EmpFirstName.value + "_" + EmpLastName.value + "(" + chrsId.value + ")" + "_" + Date.now());          
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';	
            xhr.send(jsonData);	
            xhr.onload  = function () {
                if (this.status === 200) {
                    var filename = "";
                    var disposition = xhr.getResponseHeader('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(disposition);
                        if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                    }
                    var type = xhr.getResponseHeader('Content-Type');

                    var blob;
                    if (typeof File === 'function') {
                        try {
                            blob = new File([this.response], filename, { type: type });
                        } catch (e) { /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], { type: type });
                    }

                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");
                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);								
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                        setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                    }
                }
            };	      
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_reset1555660997488_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_reset1555660997488_click0 = function (scope) {
    with(this) {
        with(scope) {
            EmpID.value = null;
EmpLastName.value = null;
EmpFirstName.value = null;
EmpRCD.value = null;
CBID.value = null;
Classification.value = null;
Range.value = null;
DeptID.value = null;
DeptName.value = null;
EvaluatorName.value = null;
EvaluationType.value = null;
ConceptualSkill.value = null;
InterpersonalSkills.value = null;
TechnicalSkills.value = null;
OtherSkills.value = null;
OtherRating.value = null;
averageRating.value = null;
OverallRating.value = null;
SectionBComment.value = null;
SupportStatement1.value = null;
SupportStatement2.value = null;
SupportStatement3.value = null;
SupportStatement4.value = null;
supportDoc1.fileAttachment.value = null;
supportDoc2.fileAttachment.value = null;
supportDoc3.fileAttachment.value = null;
supportDoc4.fileAttachment.value = null;
EvaluatorComment.value = null;
AthleticEmpImpToPos.resetData();
AthleticEmp.resetData();
AthleticsEmpRating.value = null;
formSavedStatus.value = null;
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_saveguidedraft1555660990001_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_saveguidedraft1555660990001_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmpID.value !== null){
  
  mppDescCWID.value = (EmpFirstName.value +" "+EmpLastName.value + " " + EmpID.value + " "+EvaluationType.value);
  aftiaDescCWID.value = (EmpFirstName.value +" "+EmpLastName.value + " " + EmpID.value + " "+EvaluationType.value);

  formSavedStatus.value = "Yes";
   handleDraftSave(this);
}else{
  var text =  "Please enter Employee Id";
 getPopup(text); 
}

function getPopup(errorText){
  var errorTextObt = errorText;
  var errorModal = document.getElementById('errorPopup');

    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = errorTextObt;
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footererrorModal = document.getElementById("errorPopup-footer");
    var errorokButton = document.createElement("input");
    errorokButton.type = "button";
    errorokButton.setAttribute("class", "okBtn");
    //errorokButton.id = "okBtn";
    errorokButton.value = "Ok";
    errorokButton.onclick = function(event) {
        errorModal.style.display = "none";
    };
    footererrorModal.appendChild(errorokButton);
    
    errorModal.style.display = "block";
}
        }
	}
}
/**
 * @function mpp_perfromance_evaluation_mpp_performance_evaluation.generated_submit1555661004794_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_perfromance_evaluation_mpp_performance_evaluation.generated_submit1555661004794_click0 = function (scope) {
    with(this) {
        with(scope) {
            var flag = 0;

if(EmpID.value !== null){
   aftiaDescCWID.value = (EmpFirstName.value +" "+EmpLastName.value + " " + EmpID.value + " "+EvaluationType.value);
  mppDescCWID.value = (EmpFirstName.value +" "+EmpLastName.value + " " + EmpID.value + " "+EvaluationType.value);
}


//Uncomment 7-19 for UAT release
/*
if(ManagerUserID.value == "dforgues"){
  ManagerEmailID.value="mtapper@fullerton.edu";
}
//if Michelle launches on behalf of David
if(EmpID.value == "893526715"){
  ManagerEmailID.value="mtapper@fullerton.edu";
  EmpEmailID.value = "mtapper@fullerton.edu";
  ManagerUserID.value = "mtapper";
  EmpUserID.value = "mtapper";
  HrCoordEmailId.value = "mtapper@fullerton.edu";
  HrCoordId.value = "mtapper";
}
AdminEmailID.value="mtapper@fullerton.edu";
*/

//else{
//ManagerEmailID.value="nvadlakunta@fullerton.edu";
//}
//comment 27-30 for UAT/Prod
 /*EmpEmailID.value = "hrdievaluations@fullerton.edu";
  ManagerEmailID.value = "hrdievaluations@fullerton.edu";
  AdminEmailID.value = "hrdievaluations@fullerton.edu";
  HrCoordEmailId.value ="hrdievaluations@fullerton.edu";*/
 EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
  ManagerEmailID.value = "soumya.ravindra@thoughtfocus.com";
  AdminEmailID.value = "soumya.ravindra@thoughtfocus.com";
  HrCoordEmailId.value = "soumya.ravindra@thoughtfocus.com";

if(flag === 0){
/*if (CheckEvalDataExists.value == "true") {
 showErrorModal("Alert!","Please beware that you are launching another evaluation for this employee. If this is not an error, please proceed.");

} else {*/
  var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
if(ReviewPeriodFrom.value !== null && ReviewPeriodTo.value !== null){
    var frmDate = new Date(ReviewPeriodFrom.value);
    var toDate = new Date(ReviewPeriodTo.value);
    if(frmDate > toDate){
    showErrorModal("Alert!","Invalid Review Period Range");
  }else if(ManagerUserID.value === null){
    showErrorModal("Alert!","No matching Supervisor found");
  }else if(Date.parse(ReviewPeriodFrom.value)>Date.parse(d) || Date.parse(ReviewPeriodTo.value)>Date.parse(d)){
    showErrorModal("Alert!","A Performance Evaluation can't be initiated for a future date.");
  }else if(SupportStatement4.value !== null){
  var val = SupportStatement4.value;
  if(/^[a-zA-Z.,\/\s]*[a-zA-Z.,\/][a-zA-Z.,\/\s]*$/.test(val)){
  }else{
    showErrorModal("Alert!","No special characters or white spaces are allowed");
  }
}else{
    
    window.guideBridge.getDataXML({
    success: function(result) {
        //console.log("in view pdf=" + result.data);
        var sheet = [];
        sheet[0] = {};
        sheet[0].data = result.data.replace(/&amp;/g, 'and');
        sheet[0].formPath = "/content/forms/af/mpp-perfromance-evaluation/mpp-performance-evaluation";
        sheet[0].submissionId = SubmissionId.value;
        sheet[0].evalName = "MPP Performance Evaluation";
        sheet[0].evalType = EvaluationType.value;

        var data = JSON.stringify(sheet);
        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
            data: {
                action: "SAVE_EVAL_DATA",
                jsonData: data,
                cwid: EmpID.value
            },
            dataType: 'json',
            success: function(response) {
			console.log("Completed");
            }
        });
    }
});
    
     guideBridge.submit();
  }
}
//}
}

        }
	}
}
