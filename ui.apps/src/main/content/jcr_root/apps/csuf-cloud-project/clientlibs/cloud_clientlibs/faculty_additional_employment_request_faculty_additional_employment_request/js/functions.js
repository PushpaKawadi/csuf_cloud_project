/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

/*var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";*/


$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
logUser.value = userValue;
//PreparedBy.value = userValue;

  $.ajax({

  type: 'GET',

  url: "/bin/getEvaluationFormData",
    data : {action : "EMP_DETAILS"},
  dataType: 'json',
  success: function(myresopnse) {
    var preByValue = myresopnse[0].EMP_NAME;
    PreparedBy.value = preByValue;
    PreparerEmailID.value = myresopnse[0].EMAILID;
  },
  error: function(error) {
    alert("error block=" + error);
  }
});
  
  
  $.ajax({

     type: 'GET',

     url:"/bin/getFAERData",
     data: {action: "FAER_USER_DIV_DATA",userID:userValue},
     dataType: 'json',
     success: function(myresopnse) {
       Division.value = myresopnse[0].DIVSION;
       DivisionName.value =myresopnse[0].DIVISION_NAME;
        if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){

$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_DEAN_DATA",division:Division.value,union_cd:"M80"},
    dataType: 'json',

    success: function(DeanDeatils) {

        if (DeanDeatils.length !== 0) {

            var deanRes = [];

            for (var i = 0; i < DeanDeatils.length; i++) {

                var item = DeanDeatils[i].EMP_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deanRes.push(item);

            }
			
          DeanDetailsJson.value = JSON.stringify(DeanDeatils);	
            DeanDesigneeName.items = deanRes;
        } else {

            //showErrorModal("Alert!", "No matching records found");
        }

    }
});
}
     },
     error: function(error) {
       alert("error block=" + error);
     }
    });
 
    
}
},
error: function(error){
alert("error block="+error);
  loadingText.visible = false; 
}
});
  
}
//var depID = this.value;


if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" && FundSourceData.value === null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_FUND_SOURCE_DETA"},
    dataType: 'json',

    success: function(fundPrgResult) {

        if (fundPrgResult.length !== 0) {
            FundSourceData.value = JSON.stringify(fundPrgResult);
          
            
			if(fundPrgResult[0].CLASS_CODE.length !== 0){
            var classResult = [];
            for (var i = 0; i < fundPrgResult[0].CLASS_CODE.length; i++) {
				classResult.push(fundPrgResult[0].CLASS_CODE[i].CLASS);
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].Class.items = classResult; 
            }
            if(fundPrgResult[0].FUND.length !== 0){
            var fundResult = [];
            for (var f = 0; f < fundPrgResult[0].FUND.length; f++) {              	
				fundResult.push(fundPrgResult[0].FUND[f].FUND_CODE);                
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].Fund.items = fundResult; 
            }
            if(fundPrgResult[0].PROGRAM.length !== 0){
            var programResult = [];
            for (var p = 0; p < fundPrgResult[0].PROGRAM.length; p++) {
				programResult.push(fundPrgResult[0].PROGRAM[p].PROGRAM);
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].Program.items = programResult; 
            }
            if(fundPrgResult[0].DEPT.length !== 0){
            var deptResult = [];
            for (var d = 0; d < fundPrgResult[0].DEPT.length; d++) {              	
				deptResult.push(fundPrgResult[0].DEPT[d].DEPTID);                
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].FundDeptID.items = deptResult; 
            }
        } else {
            showErrorModal("Alert!", "No matching records found");
        }

    }
});
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  SignatureACK.visible=false;
  FundingPanel.visible = false;
  DeanPanel.visible = false;
}
debugger;
if(StageIndicator.value === "ToRequestor"){
  employeeInformation.enabled = true;
  SignatureACK.visible=true;
  //FundingPanel.visible = false;
  DeanPanel.visible = false;
  if(FacultyCB.value !== null){
    FacultyPanel.visible=true;
  	FacultyPanel.enabled=false;
  } else{
    FacultyPanel.visible=false;
  }
  if(FundCB1.value !== null){
    FundingPanel0.visible = true;
      FundingPanel0.enabled = false;
  }else{
    FundingPanel0.visible = false;
  }
  if(FundCB2.value !== null){
    FundingPanel1.visible = true;
      FundingPanel1.enabled = false;
  }else{
    FundingPanel1.visible = false;
  }
  if(FundingCB.value !== null){
    FundingPanel2.visible = true;
    FundingPanel2.enabled = false;
  }else{
  FundingPanel2.visible = false;
  }
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
  if(DeanCB.value !== null){
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
  
}
if(StageIndicator.value === "ToDean"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  FundSource.enabled = false;
  SignatureACK.visible=true;
  DeanDesigneePanel.enabled = false;
  if(FacultyCB.value !== null){
    FacultyPanel.visible=true;
  	FacultyPanel.enabled=false;
  } else{
    FacultyPanel.visible=false;
  }
  if(FundCB1.value !== null){
    FundingPanel0.visible = true;
      FundingPanel0.enabled = false;
  }else{
    FundingPanel0.visible = false;
  }
  if(FundCB2.value !== null){
    FundingPanel1.visible = true;
      FundingPanel1.enabled = false;
  }else{
    FundingPanel1.visible = false;
  }
  if(FundingCB.value !== null){
    FundingPanel2.visible = true;
    FundingPanel2.enabled = false;
  }else{
  FundingPanel2.visible = false;
  }
  DeanPanel.visible = true;
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
}


if(StageIndicator.value === "ToFaculty"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  FundSource.enabled = false;
  DeanDesigneePanel.enabled = false;
  SignatureACK.visible=true;
  if(EmployementType.value == "3"){
    FacultyPanel.visible=true;
  }else{
    FacultyPanel.visible=false;
  }  
  if(FundCB1.value !== null){
    FundingPanel0.visible = true;
      FundingPanel0.enabled = false;
  }else{
    FundingPanel0.visible = false;
  }
  if(FundCB2.value !== null){
    FundingPanel1.visible = true;
      FundingPanel1.enabled = false;
  }else{
    FundingPanel1.visible = false;
  }
  if(FundingCB.value !== null){
    FundingPanel2.visible = true;
    FundingPanel2.enabled = false;
  }else{
  FundingPanel2.visible = false;
  }
  if(DeanCB.value !== null){
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
}

if(StageIndicator.value === "ToFundingSource0"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  DeanDesigneePanel.enabled = false;
  FundSource.enabled = false;
  DeanDesigneePanel.enabled = false;
  SignatureACK.visible=true;
  if(FacultyCB.value !== null){
    FacultyPanel.visible=true;
  	FacultyPanel.enabled=false;
  } else{
    FacultyPanel.visible=false;
  }
  
  FundingPanel0.visible = true;
  FundingPanel1.visible = false;
  FundingPanel2.visible = false;
  DeanPanel.visible = false;
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
}

if(StageIndicator.value === "ToFundingSource1"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  DeanDesigneePanel.enabled = false;
  FundSource.enabled = false;
  DeanDesigneePanel.enabled = false;
  SignatureACK.visible=true;
  
  if(FacultyCB.value !== null){
    FacultyPanel.visible=true;
  	FacultyPanel.enabled=false;
  } else{
    FacultyPanel.visible=false;
  }
  FundingPanel0.enabled = false;
  FundingPanel1.visible = true;
  FundingPanel2.visible = false;
  DeanPanel.visible = false;
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
}
if(StageIndicator.value === "ToFundingSource2"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  DeanDesigneePanel.enabled = false;
  FundSource.enabled = false;
  DeanDesigneePanel.enabled = false;
  SignatureACK.visible=true;
  
 if(FacultyCB.value !== null){
    FacultyPanel.visible=true;
  	FacultyPanel.enabled=false;
  } else{
    FacultyPanel.visible=false;
  }
  FundingPanel0.enabled = false;
  FundingPanel1.enabled = false;
  FundingPanel2.enabled = true;
  DeanPanel.visible = false;
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
}
if(StageIndicator.value === "ToHR"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  DeanDesigneePanel.enabled = false;
  FundSource.enabled = false;
  SignatureACK.visible=true;
  if(EmployementType.value == "3"){
    FacultyPanel.visible=true;
  }else{
    FacultyPanel.visible=false;
  }  
  FacultyPanel.enabled=false;
  if(FundCB1.value !== null){
    FundingPanel0.visible = true;
      FundingPanel0.enabled = false;
  }else{
    FundingPanel0.visible = false;
  }
  if(FundCB2.value !== null){
    FundingPanel1.visible = true;
      FundingPanel1.enabled = false;
  }else{
    FundingPanel1.visible = false;
  }
  if(FundingCB.value !== null){
    FundingPanel2.visible = true;
    FundingPanel2.enabled = false;
  }else{
  FundingPanel2.visible = false;
  }
 if(DeanCB.value !== null){
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
  
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = true;
 if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
    BudgetAnalystSignaturePanel.visible = true;
    BudgetAnalystSignaturePanel.enabled = false;
  }else{
    BudgetAnalystSignaturePanel.visible = false;
  }
}
if(StageIndicator.value === "ToBudgetAnalyst"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  DeanDesigneePanel.enabled = false;
  FundSource.enabled = false;
  DeanDesigneePanel.enabled = false;
  SignatureACK.visible=true;
  if(FacultyCB.value !== null){
    FacultyPanel.visible=true;
  	FacultyPanel.enabled=false;
  } else{
    FacultyPanel.visible=false;
  }
  BudgetAnalystSignaturePanel.visible = true;
  FundingPanel0.visible = false;
  FundingPanel1.visible = false;
  FundingPanel2.visible = false;
  DeanPanel.visible = false;
  if(HRCB.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
}

  if(StageIndicator.value === null && StageIndicator.value == "ToRequestor"){
    BudgetAnalystPanel.enabled = true;
  }else{
    if(BudgetAnalystName.value !== null && BudgetAnalystName.value != "Select Optional Reviewer"){
       BudgetAnalystPanel.visible = true;
      BudgetAnalystPanel.enabled = false;
    }else{
       BudgetAnalystPanel.visible = false;
      
    }
    
  }

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            
guideBridge.on("validationComplete" , function(event, payload) {  
if((EmployementType.value !== null && CWID.value !== null && PositionNo.value !== null && ContractType.value !== null && AssignmentComp.value !== null && Category.value !== null && DescWork.value !== null && DeanDesigneeName.value !== null && PreparedBy.value !== null ) && ((EmployementType.value == "3" && EndDate.value !== null) || (EmployementType.value !== "3"))){
var validationFlag = true;
var instanceCount = FundDetails.instanceManager.instanceCount;
if(instanceCount > 0){
for (i = 0; i< instanceCount; i++) {
var dept = FundDetails.instanceManager.instances[i].FundDeptID.value;
var fund = FundDetails.instanceManager.instances[i].Fund.value;
var classCode = FundDetails.instanceManager.instances[i].Class.value;
var programCode = FundDetails.instanceManager.instances[i].Program.value;
var approverName = FundDetails.instanceManager.instances[i].FundApproverName.value;
 //if(dept !== null && fund !== null && classCode !== null && programCode !== null && approverName !== null){ // Commented By Pushpa
   if(dept !== null && fund !== null && approverName !== null){
   validationFlag = true;
 }else{
   validationFlag = false;
   break;
 }
}
if(validationFlag === true){
removeFundSourceOptions();
}
}
}
});


function removeFundSourceOptions(){
var count = FundDetails.instanceManager.instanceCount;
for (k = 0; k < count; k++) {
var dept = FundDetails.instanceManager.instances[k].FundDeptID.value;
var fund = FundDetails.instanceManager.instances[k].Fund.value;
var classCode = FundDetails.instanceManager.instances[k].Class.value;
var programCode = FundDetails.instanceManager.instances[k].Program.value;
if(dept !== null){
FundDetails.instanceManager.instances[k].FundDeptID.items = [];
}
if(fund !== null){
FundDetails.instanceManager.instances[k].Fund.items = [];
}
if(classCode !== null){
FundDetails.instanceManager.instances[k].Class.items = [];
}
if(programCode !== null){
FundDetails.instanceManager.instances[k].Program.items = [];
}
FundDetails.instanceManager.instances[k].FundDeptID.value = dept;
FundDetails.instanceManager.instances[k].Fund.value = fund;
FundDetails.instanceManager.instances[k].Class.value = classCode;
FundDetails.instanceManager.instances[k].Program.value = programCode;
}
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_PreparedBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_PreparedBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_EmployementType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_EmployementType_init0 = function (scope) {
    with(this) {
        with(scope) {
            var empTypeVal = EmployementType.value;

if(StageIndicator.value !== null && StageIndicator.value !== "ToRequestor"){  
  //if(empTypeVal === "1" || empTypeVal === "2"){ //Commented by Pushpa
    if(empTypeVal === "1"){      
    EndDate.visible = false;
    EndDate.mandatory = false;
    //Added line no 9 on 11/18
    EndDateNotes.visible = false;
  }
  else if(empTypeVal === "2"){      
    EndDate.visible = true;
    //EndDate.mandatory = false;
    //Added line no 14-15 on 11/18
    EndDateNotes.visible = true;
    EndDate.mandatory = false;
  }
   else if(empTypeVal === "3"){  
    EndDate.visible = true;
    EndDate.mandatory = false;
     //Added line no 22 on 11/18
    EndDateNotes.visible = true;
  } else {
    EndDate.visible = false;
    //Added line no 26 on 11/18
    EndDateNotes.visible = false;
  }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_EmployementType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_EmployementType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var empTypeVal = EmployementType.value;

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){  
 // if(empTypeVal === "1" || empTypeVal === "2"){ //Commented by Pushpa
   if(empTypeVal === "1" ){
    //if(EndDateFlag.value !== EndDate.value){
    EndDate.value = null;
    //}   
    EndDate.visible = false;
     //Added line no 11 on 11/18
    EndDateNotes.visible = false;
  }
  else if(empTypeVal === "2" ){
     EndDate.visible = true;
    //EndDate.mandatory = false;
    //Added line no 17-18 on 11/18
    EndDateNotes.visible = true;
    EndDate.mandatory = true;
  }
  
  else  if(empTypeVal === "3" ){
    EndDate.visible = true;
     EndDate.mandatory = true;
    //Added line no 25 on 11/18
    EndDateNotes.visible = true;
  }
   EndDateFlag.value = EndDate.value;
}else{
  EndDate.mandatory = false;
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_chrsID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_chrsID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && this.value === null) {

  this.mandatory=true;

}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_chrsID_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_chrsID_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value !== null) {
  this.enabled = false;
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_chrsID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_chrsID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var chrsId = this.value;
var divisionVal = Division.value;
if(StageIndicator.value === null){  
   var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
 
   $.ajax({
 	type: 'GET',
	 url:"/bin/chrsIDUpdateServlet",
     data: {action: "FAER_CWID_CHRS_DATA",chrsId:chrsId},
     dataType: 'json',
     success: function(myresopnse) {
       
       if (myresopnse.length !== 0) {
      	var fName = myresopnse[0].FIRST_NAME;
        var lName = myresopnse[0].LAST_NAME;
         if(fName !== undefined && lName !== undefined){
         var result = fName.concat( " ").concat(lName);
         Name.value = result;
         }
         CWID.value = myresopnse[0].EMPLID;
         EmpFirstName.value = myresopnse[0].FIRST_NAME;
         EmpLastName.value = myresopnse[0].LAST_NAME;
         FacultyEmailID.value =myresopnse[0].EMAILID;
         
         FacultyUserID.value = myresopnse[0].EMP_USERID;
         
          gifModal.style.display = "none";
         
       } else {
         gifModal.style.display = "none";
         showErrorModal("Alert!", "No matching records found");
          Name.value = "";
       }

     },
     error: function(error) {
       alert("error block=" + error);
     }
    });
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var empId = this.value;
var divisionVal = Division.value;
if(StageIndicator.value === null){  
   var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
   $.ajax({
 	type: 'GET',
	 url:"/bin/getFAERData",
     data: {action: "FAER_CWID_DATA",cwid:empId},
     dataType: 'json',
     success: function(myresopnse) {
       if (myresopnse.length !== 0) {
      	var fName = myresopnse[0].FIRST_NAME;
        var lName = myresopnse[0].LAST_NAME;
         if(fName !== undefined && lName !== undefined){
         var result = fName.concat( " ").concat(lName);
         Name.value = result;
         }
         EmpFirstName.value = myresopnse[0].FIRST_NAME;
         EmpLastName.value = myresopnse[0].LAST_NAME;
         FacultyEmailID.value =myresopnse[0].EMAILID;
         FacultyUserID.value = myresopnse[0].EMP_USERID;
         
          gifModal.style.display = "none";
         
       } else {
         gifModal.style.display = "none";
         showErrorModal("Alert!", "No matching records found");
          Name.value = "";
       }

     },
     error: function(error) {
       alert("error block=" + error);
     }
    });
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_PositionNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_PositionNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var posNo = this.value;
var divisionVal = Division.value;
if(StageIndicator.value === null){
  
   var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
   $.ajax({
 	type: 'GET',
	 url:"/bin/getFAERData",
     data: {action: "FAER_POSITION_DATA",posNo:posNo,division:divisionVal},
     dataType: 'json',
     success: function(myresopnse) {
       if (myresopnse.length === 1) {
      	 DeptID.value = myresopnse[0].DEPTID;
         DeptName.value = myresopnse[0].DEPTNAME;
         ReportsTo.value = myresopnse[0].REPORTS_TO;
          gifModal.style.display = "none";
          modal.style.display = "none";
       }  else if (myresopnse.length > 1) {
           DeptID.value = myresopnse[0].DEPTID;
           DeptName.value = myresopnse[0].DEPTNAME;
           ReportsTo.value = myresopnse[0].REPORTS_TO;
           gifModal.style.display = "none";
           modal.style.display = "none";
         
       }else {
         gifModal.style.display = "none";
         showErrorModal("Alert!", "No matching records found");
         DeptID.value = "";
         DeptName.value ="";
         ReportsTo.value = "";
       }

     },
     error: function(error) {
       alert("error block=" + error);
     }
    });
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
      //  gifModal.style.display = "block";
        
      workflow_initiator.value = myresopnse.userId;
    }
});
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_ApproverEmpID0_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_ApproverEmpID0_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var approverEmplID = this.value;

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
 if(approverEmplID !== null || approverEmplID !== ""){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_DETAILS",approverEmplID:approverEmplID},
    dataType: 'json',
	success: function(myresopnse) {
       ApproverUserID0.value = myresopnse[0].EMP_USERID;
       ApproverEmail0.value = myresopnse[0].EMAILID;
       ApproverName0.value = myresopnse[0].EMP_NAME;
       ApproverIndex0.value = "1";
      
     }

    
});
 }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_ApproverEmpID1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_ApproverEmpID1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var approverEmplID = this.value;

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" ){
 if(ApproverEmpID1.value !== null){


$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_DETAILS",approverEmplID:approverEmplID},
    dataType: 'json',
	success: function(myresopnse) {
       ApproverUserID1.value = myresopnse[0].EMP_USERID;
       ApproverEmail1.value = myresopnse[0].EMAILID;
       ApproverName1.value = myresopnse[0].EMP_NAME;
       ApproverIndex1.value = "1";
      
     }

    
});
 }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_ApproverEmpID2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_ApproverEmpID2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var approverEmplID = this.value;

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
   if(ApproverEmpID2.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_DETAILS",approverEmplID:approverEmplID},
    dataType: 'json',
	success: function(myresopnse) {
       ApproverUserID2.value = myresopnse[0].EMP_USERID;
       ApproverEmail2.value = myresopnse[0].EMAILID;
       ApproverName2.value = myresopnse[0].EMP_NAME;
       ApproverIndex2.value = "1";
      
     }

    
});
   }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystEmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystEmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
   if(BudgetAnalystEmplID.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_DETAILS",approverEmplID:BudgetAnalystEmplID.value},
    dataType: 'json',
	success: function(myresopnse) {
      if(myresopnse.length !== 0 ){
       BudgetAnalystUserID.value = myresopnse[0].EMP_USERID;
       BudgetAnalystEmail.value = myresopnse[0].EMAILID;    
      }else{
  BudgetAnalystName_1.value = "";
  BudgetAnalystEmail.value = "";
  BudgetAnalystUserID.value = "";
         }
     }

    
});
   }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_ContractType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_ContractType_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (this.value === "Lump Sum (Appt Type 021 All Year)") {
  LumpSumPanel.visible = true;
  DailyRatePanel.visible = false;
  AYMonthlyBaseRate.value = null;
  consecutiveDays.value = null;
} else if (this.value === "Daily Rate (Appt Type 022 Winter and Summer Breaks Only)") {
  LumpSumPanel.visible = false;
  FTE.value = null;
  AssignmentComp.value = null;
  DailyRatePanel.visible = true;
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_ContractType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_ContractType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (this.value === "Lump Sum (Appt Type 021 All Year)") {
  LumpSumPanel.visible = true;
  DailyRatePanel.visible = false;
  AYMonthlyBaseRate.value = null;
  consecutiveDays.value = null;
} else if (this.value === "Daily Rate (Appt Type 022 Winter and Summer Breaks Only)") {
  LumpSumPanel.visible = false;
  FTE.value = null;
  AssignmentComp.value = null;
  DailyRatePanel.visible = true;
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_EndDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_EndDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_Category_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_Category_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FacultySignRequired_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FacultySignRequired_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundDeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundDeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" && FundSourceData.value !== null){

  var fundPrgResult = JSON.parse(FundSourceData.value);			
            if(fundPrgResult[0].DEPT.length !== 0){
            var deptResult = [];
            for (var d = 0; d < fundPrgResult[0].DEPT.length; d++) {              	
				deptResult.push(fundPrgResult[0].DEPT[d].DEPTID);                
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].FundDeptID.items = deptResult; 
            }

}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_Fund_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_Fund_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" || FundSourceData.value !== null){
/*$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_FUND_DATA"},
    dataType: 'json',

    success: function(fundDepResult) {
	 if (fundDepResult.length !== 0) {
            var depResult = [];

            for (var i = 0; i < fundDepResult.length; i++) {

                var item = fundDepResult[i].FUND_CODE;
depResult.push(idItem+"="+item);
                var idItem = i + 1;

                

            }
		
           FundDetails.instanceManager.instances[FundDetails.instanceIndex].Fund.items = depResult; 
           // Fund.items = depResult;
        } else {

            //showErrorModal("Alert!", "No matching records found");
        }

    }
});*/
  var fundPrgResult = JSON.parse(FundSourceData.value);
            if(fundPrgResult[0].FUND.length !== 0){
            var fundResult = [];
            for (var f = 0; f < fundPrgResult[0].FUND.length; f++) {              	
				fundResult.push(fundPrgResult[0].FUND[f].FUND_CODE);                
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].Fund.items = fundResult; 
            }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_Program_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_Program_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" || FundSourceData.value !== null){
/*$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_PROGRAM_DATA"},
    dataType: 'json',
  
    success: function(fundDepResult) {
	 if (fundDepResult.length !== 0) {
            var depResult = [];

            for (var i = 0; i < fundDepResult.length; i++) {

                var item = fundDepResult[i].PROGRAM;
depResult.push(idItem+"="+item);
                var idItem = i + 1;

               

            }
 FundDetails.instanceManager.instances[FundDetails.instanceIndex].Program.items = depResult; 
            //Program.items = depResult;
        } else {

            //showErrorModal("Alert!", "No matching records found");
        }

    }
});*/
  var fundPrgResult = JSON.parse(FundSourceData.value);
            if(fundPrgResult[0].PROGRAM.length !== 0){
            var programResult = [];
            for (var p = 0; p < fundPrgResult[0].PROGRAM.length; p++) {
				programResult.push(fundPrgResult[0].PROGRAM[p].PROGRAM);
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].Program.items = programResult; 
            }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_Class_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_Class_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" || FundSourceData.value !== null){
/*$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_CLASS_DATA"},
    dataType: 'json',

    success: function(fundPrgResult) {

        if (fundPrgResult.length !== 0) {
            
            var depResult = [];

            for (var i = 0; i < fundPrgResult.length; i++) {

                var item = fundPrgResult[i].CLASS;
depResult.push(idItem+"="+item);
                var idItem = i + 1;
                //depResult.push(item);

            }
FundDetails.instanceManager.instances[FundDetails.instanceIndex].Class.items = depResult; 
           // Class.items = depResult;
        } else {

            //showErrorModal("Alert!", "No matching records found");
        }

    }
});*/
  var fundPrgResult = JSON.parse(FundSourceData.value);
			if(fundPrgResult[0].CLASS_CODE.length !== 0){
            var classResult = [];
            for (var i = 0; i < fundPrgResult[0].CLASS_CODE.length; i++) {
				classResult.push(fundPrgResult[0].CLASS_CODE[i].CLASS);
            }
			FundDetails.instanceManager.instances[FundDetails.instanceIndex].Class.items = classResult; 
            }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_SearchLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_SearchLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
var instanceIndex = FundDetails.instanceIndex;
var depID = "";
var count = FundDetails.instanceManager.instanceCount;
if(FundDetails.instanceManager.instances[instanceIndex].SearchLastName.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_SEARCH_APPROVER",lastName:FundDetails.instanceManager.instances[instanceIndex].SearchLastName.value},
    dataType: 'json',

    success: function(fundApproverResult) {

        if (fundApproverResult.length !== 0) {
          
		
            var appResult = [];

            for (var i = 0; i < fundApproverResult.length; i++) {

                var item = fundApproverResult[i].FIRSTNAME + " "+ fundApproverResult[i].LASTNAME;
				var uid = fundApproverResult[i].USERID;
                var idItem = i + 1;

                //var jbcode = item.text;

                appResult.push(item+" - "+uid);

            }
          FundDetails.instanceManager.instances[instanceIndex].FundApproverName.value = "";           
           FundDetails.instanceManager.instances[instanceIndex].FundApproverName.items = appResult;
           	FundDetails.instanceManager.instances[instanceIndex].SearchLastName.value = "";
           
        } else {
          showErrorModal("Alert!", "No matching records found");
          FundDetails.instanceManager.instances[instanceIndex].FundApproverName.items = [];
          FundDetails.instanceManager.instances[instanceIndex].FundApproverName.value = "";
          FundDetails.instanceManager.instances[instanceIndex].SearchLastName.value = "";
        }

    }
});
}
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundApproverName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundApproverName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var indexVal = FundDetails.instanceIndex;
var approverName = FundApproverName.value;
approverName = approverName.substr(0,approverName.indexOf(' - '));
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_EMPID",approverName:approverName},
    dataType: 'json',
	success: function(myresopnse) {
      if(indexVal === 0){
         ApproverEmpID0.value = myresopnse[0].EMPLID;
         FSName1.value = approverName;
      }
      if(indexVal === 1){
         ApproverEmpID1.value = myresopnse[0].EMPLID;
         FSName2.value = approverName;
      }
     	if(indexVal === 2){
         ApproverEmpID2.value = myresopnse[0].EMPLID;
         FSName3.value = approverName;
      }      
     }

    
});
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundApproverSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundApproverSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundApproverDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundApproverDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_button1576479132172_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_button1576479132172_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_button1576479132172_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_button1576479132172_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(FundDetails.instanceManager.instanceCount == 1 || FundDetails.instanceManager.instanceCount == 2){
  FundDetails.instanceManager.addInstance();
}else{
  showErrorModal("Alert!","The maximum limit has been exceeded");
}
var divName = DivisionName.value;
/*if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_DEPTID_DATA"},
    dataType: 'json',

    success: function(fundDepResult) {
		

        if (fundDepResult.length !== 0) {
            
            var depResult = [];

            for (var i = 0; i < fundDepResult.length; i++) {

                var item = fundDepResult[i].DEPTID;

                var idItem = i + 1;

                //var jbcode = item.text;

                depResult.push(item);

            }

            FundDeptID.items = depResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
*/


        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_button_2187229461576568857245_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_button_2187229461576568857245_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_button_2187229461576568857245_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_button_2187229461576568857245_click0 = function (scope) {
    with(this) {
        with(scope) {
            //FundDetails.instanceManager.removeInstance(FundDetails.instanceIndex);
//alert((FundDetails.instanceManager.instances).length - 1);
var removeIndex = (FundDetails.instanceManager.instances).length - 1;
FundDetails.instanceManager.removeInstance((FundDetails.instanceManager.instances).length - 1);
if(removeIndex === 2){

  ApproverUserID2.value= "";
  ApproverEmail2.value= "";
  ApproverEmpID2.value= "";
  ApproverIndex2.value= "";
  ApproverName2.value = "";
}

if(removeIndex === 1){
 
   ApproverIndex1.value = "";
  ApproverUserID1.value = "";
  ApproverEmail1.value = "";
  ApproverName1.value = "";
 ApproverEmpID1.value = "";

 
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            //var depID = this.value;
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){

$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_DEAN_DATA",division:Division.value,union_cd:"M80"},
    dataType: 'json',

    success: function(DeanDeatils) {

        if (DeanDeatils.length !== 0) {

            var deanRes = [];

            for (var i = 0; i < DeanDeatils.length; i++) {

                var item = DeanDeatils[i].EMP_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deanRes.push(item);

            }
			
          DeanDetailsJson.value = JSON.stringify(DeanDeatils);	
            DeanDesigneeName.items = deanRes;
        } else {

            //showErrorModal("Alert!", "No matching records found");
        }

    }
});
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeName_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeName_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRequestor"){

$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_DEAN_DATA",division:Division.value,union_cd:"M80"},
    dataType: 'json',

    success: function(DeanDeatils) {

        if (DeanDeatils.length !== 0) {

            var deanRes = [];

            for (var i = 0; i < DeanDeatils.length; i++) {

                var item = DeanDeatils[i].EMP_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deanRes.push(item);

            }
			
          DeanDetailsJson.value = JSON.stringify(DeanDeatils);	
            DeanDesigneeName.items = deanRes;
        } else {

            //showErrorModal("Alert!", "No matching records found");
        }

    }
});
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //var gifModal = document.getElementById('gifModal');

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){

  	
  
	var departmentHeadInfo = this.value;
	var departmentHeadInfoArray = [];
	var departmentHeadActualInfoArray = [];
	var departmentHeadDetailsParsedArray = [];
	var departmentDetailsListObj = {};
	
	departmentHeadDetailsArray = DeanDetailsJson.value;
	console.log("departmentHeadDetailsArray= " + departmentHeadDetailsArray);
	departmentHeadDetailsParsedArray = JSON.parse(departmentHeadDetailsArray);
	
	for(var s= 0 ; s < departmentHeadDetailsParsedArray.length; s++){
		departmentHeadInfoArray.push(departmentHeadDetailsParsedArray[s]);
		
	}
	
	for (var departmentHeadDetails = 0; departmentHeadDetails < departmentHeadInfoArray.length; departmentHeadDetails++){
			
			departmentDetailsListObj = departmentHeadInfoArray[departmentHeadDetails];
			
			for(var key in departmentDetailsListObj){
				  
				  if(departmentHeadInfo == key){				  
					  departmentHeadActualInfoArray = departmentDetailsListObj[key].split(" - ");
                    	DeanDesigneeEmail.value = departmentHeadActualInfoArray[0];
                    	DeanDesigneeUserID.value = departmentHeadActualInfoArray[1];
                    	                   			  
				  }
			}						
	}	
}
//}
/*
else if((this.value === null) || (this.value == "Select Department Approver")){ 
    	gifModal.style.display = "none";
    	department_flag.value = null;
}*/

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeUserID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanDesigneeUserID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(BudgetAnalystName.value !== null && StageIndicator.value !== null && StageIndicator.value !== "ToRequestor"){
  this.visible = false;
}else{
  this.visible = true;debugger;
  if(StageIndicator.value === null && StageIndicator.value == "ToRequestor"){
    this.enabled = true;
  }else{
    this.enabled = false;
  }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
var appResult = [];
if(BudgetAnalystLastName.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_SEARCH_APPROVER",lastName:BudgetAnalystLastName.value},
    dataType: 'json',

    success: function(fundApproverResult) {

        if (fundApproverResult.length !== 0) {
          
		
            
			appResult.push("Select Optional Reviewer");
            for (var i = 0; i < fundApproverResult.length; i++) {

                var item = fundApproverResult[i].FIRSTNAME + " "+ fundApproverResult[i].LASTNAME;
				var uid = fundApproverResult[i].USERID;
                var idItem = i + 1;

                //var jbcode = item.text;

                appResult.push(item+" - "+uid);

            }
           BudgetAnalystName.value = "";  
            BudgetAnalystEmplID.value = "";
  		BudgetAnalystName_1.value = "";
  		BudgetAnalystEmail.value = "";
  		BudgetAnalystUserID.value = "";
           BudgetAnalystName.items = appResult;
           BudgetAnalystLastName.value = "";
           
        } else {
          showErrorModal("Alert!", "No matching records found");
          BudgetAnalystName.items = [];
  			appResult.push("Select Budget Analyst");
 			BudgetAnalystName.items = appResult;
          BudgetAnalystName.value = "";
          BudgetAnalystLastName.value = "";
          BudgetAnalystEmplID.value = "";
  		BudgetAnalystName_1.value = "";
  		BudgetAnalystEmail.value = "";
  		BudgetAnalystUserID.value = "";
        }

    }
});
}
}

        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
var approverName = BudgetAnalystName.value;

if(approverName != "Select Optional Reviewer" && approverName !== ""){
approverName = approverName.substr(0,approverName.indexOf(' - '));
BudgetAnalystName_1.value = approverName;
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_EMPID",approverName:approverName},
    dataType: 'json',
	success: function(myresopnse) {     
         if(myresopnse[0].EMPLID !== null){
         BudgetAnalystEmplID.value = myresopnse[0].EMPLID;    
         }else{
           BudgetAnalystEmplID.value = "";
         }
    }    
});
}else{
  BudgetAnalystEmplID.value = "";
  BudgetAnalystName_1.value = "";
  BudgetAnalystEmail.value = "";
  BudgetAnalystUserID.value = "";
         }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystUserID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystUserID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (HRSignature.value === null) {  
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    HRSignature.value = userValue;
                   HRDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    HRSignature.value = "";
    HRDate.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FacultyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FacultyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (FacultyName.value === null) {
            

           // FacultyDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FacultyName.value = userValue;
                   FacultyDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    FacultyName.value = "";
    FacultyDate.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FacultyComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FacultyComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (this.value == "0") {
        if (DeanName.value === null) {           

            DeanDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    DeanName.value = userValue;
                   DeanDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           DeanName.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    DeanName.value = "";
    DeanDate.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundingCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundingCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (FundingName2.value === null) {
            

           // FundingDate2.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FundingName2.value = userValue;
                   FundingDate2.value = myresopnse[0].SERVER_DATE;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           //FundingName2.enabled = false;
          

        } 
    //}
} else {
    FundingName2.value = "";
    FundingDate2.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (FundingName1.value === null) {
           

            //FundingDate1.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FundingName1.value = userValue;
                  FundingDate1.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           //FundingName1.enabled = false;
           

        } 
    //}
} else {
    FundingName1.value = "";
    FundingDate1.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_FundCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_FundCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (FundingName0.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            FundingDate0.value = d;*/

            //FundingDate0.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FundingName0.value = userValue;
                  FundingDate0.value = myresopnse[0].SERVER_DATE;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           //FundingName0.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    FundingName0.value = "";
    FundingDate0.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_BudgetAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (BudgetAnalystSign.value === null) {
            

            //FundingDate0.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    BudgetAnalystSign.value = userValue;
                    BudgetAnalystSignDate.value = myresopnse[0].SERVER_DATE;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           //FundingName0.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    FundingName0.value = "";
    FundingDate0.value = "";
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            

var count = FundDetails.instanceManager.instanceCount;
for (k = 0; k < count; k++) {
var dept = FundDetails.instanceManager.instances[k].FundDeptID.value;
var fund = FundDetails.instanceManager.instances[k].Fund.value;
var classCode = FundDetails.instanceManager.instances[k].Class.value;
var programCode = FundDetails.instanceManager.instances[k].Program.value;
FundDetails.instanceManager.instances[k].FundDeptID.items = [];
FundDetails.instanceManager.instances[k].Fund.items = [];
FundDetails.instanceManager.instances[k].Class.items = [];
FundDetails.instanceManager.instances[k].Program.items = [];
FundDetails.instanceManager.instances[k].FundDeptID.value = dept;
FundDetails.instanceManager.instances[k].Fund.value = fund;
FundDetails.instanceManager.instances[k].Class.value = classCode;
FundDetails.instanceManager.instances[k].Program.value = programCode;
}

if (CWID.value !== null) {
     getPdf();
} else {
    showErrorModal("Alert!","Please enter CWID");  
}






function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            console.log("xml=" + result.data);
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/faculty-additional-employment-request/faculty-additional-employment-request');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', Name.value + "(" + CWID.value + ")" + "_" + Date.now());
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';
            xhr.send(jsonData);
            xhr.onload = function() {
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
                            blob = new File([this.response], filename, {
                                type: type
                            });
                        } catch (e) {
                            /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], {
                            type: type
                        });
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
                        setTimeout(function() {
                            URL.revokeObjectURL(downloadUrl);
                        }, 100); // cleanup
                    }
                }
            setFundSourceOptions();
			};
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
function setFundSourceOptions(){
  for (k = 0; k < count; k++) {
            var fundPrgResult = JSON.parse(FundSourceData.value);
			if(fundPrgResult[0].CLASS_CODE.length !== 0){
            var classResult = [];
            for (var i = 0; i < fundPrgResult[0].CLASS_CODE.length; i++) {
				classResult.push(fundPrgResult[0].CLASS_CODE[i].CLASS);
            }
			FundDetails.instanceManager.instances[k].Class.items = classResult; 
            }
            if(fundPrgResult[0].FUND.length !== 0){
            var fundResult = [];
            for (var f = 0; f < fundPrgResult[0].FUND.length; f++) {              	
				fundResult.push(fundPrgResult[0].FUND[f].FUND_CODE);                
            }
			FundDetails.instanceManager.instances[k].Fund.items = fundResult; 
            }
            if(fundPrgResult[0].PROGRAM.length !== 0){
            var programResult = [];
            for (var p = 0; p < fundPrgResult[0].PROGRAM.length; p++) {
				programResult.push(fundPrgResult[0].PROGRAM[p].PROGRAM);
            }
			FundDetails.instanceManager.instances[k].Program.items = programResult; 
            }
            if(fundPrgResult[0].DEPT.length !== 0){
            var deptResult = [];
            for (var d = 0; d < fundPrgResult[0].DEPT.length; d++) {              	
				deptResult.push(fundPrgResult[0].DEPT[d].DEPTID);                
            }
			FundDetails.instanceManager.instances[k].FundDeptID.items = deptResult; 
            }	
            }
}
        }
	}
}
/**
 * @function faculty_additional_employment_request_faculty_additional_employment_request.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_additional_employment_request_faculty_additional_employment_request.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            

/*FacultyEmailID.value="yjayaram@fullerton.edu";
ApproverEmail0.value="yjayaram@fullerton.edu";
ApproverEmail1.value="yjayaram@fullerton.edu";
ApproverEmail2.value="yjayaram@fullerton.edu";
DeanDesigneeEmail.value = "yjayaram@fullerton.edu";
PreparerEmailID.value = "yjayaram@fullerton.edu";
BudgetAnalystEmail.value = "yjayaram@fullerton.edu";*/


if(CWID.value !== null){
 aftiaDescCWID.value = Name.value + " "+ CWID.value ;
}
EmailSubject.value = "Faculty Additional Employment Request - "+EmpLastName.value+", "+EmpFirstName.value;
var flag = 0;
if(StartDate.value !== null && EndDate.value !== null){
    var frmDate = new Date(StartDate.value);
    var toDate = new Date(EndDate.value);
    if(frmDate > toDate){
      flag = 1;
    showErrorModal("Alert!","Invalid Review Period Range");
  }else{
    flag = 0;
  }
}
if(flag === 0 ){
guideBridge.submit();
}

        }
	}
}
