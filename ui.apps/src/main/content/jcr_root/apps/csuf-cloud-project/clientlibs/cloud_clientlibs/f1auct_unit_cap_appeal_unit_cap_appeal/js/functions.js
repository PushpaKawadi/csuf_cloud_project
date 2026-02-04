/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var flag;
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

            var userValue = response.userId;
           //var userValue = 'mariana2'; // two Aid Year
          //  var userValue = 'majesticallexi'; // one Aid Year
            //var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;

            getStudentDetails(userValue);

            /*var boldTextCHK = document.querySelectorAll(".boldText label"); // To make the checkbox labels bold
		for(var a=0; a<boldTextCHK.length; a++){
			boldTextCHK[a].style.fontWeight = 'bold';
		}*/
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getStudentDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCitizenShipData",

        data: {
             action:"CV_USER_DETAILS", 
            userID: userValue
        },

        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {
                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
              debugger;
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                StudentUserId.value = response[0].USERID;
                SCwid.value = studentCWID;
                cwid.value = studentCWID;
                Phone.value = response[0].CELL_PHONE;
              Address.value = response[0].ADDRESS1;
                //StudentEmailId.value = response[0].PREF_EMAIL;
                Name.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
              SCwid.enabled = false;
              Name.enabled = false;
              
            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getStudentAidYearDetails(studentCWID) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: studentCWID
        },
        dataType: 'json',
        success: function(response) {
            if (response.length > 0) {
                var aidYears = [];
                var aidYearsObj = {};
                var identifyAidYearFlag;
                for (var a = 0; a < response.length; a++) {
                    aidYears.push(response[a]);
                }

                for (var b = 0; b < aidYears.length; b++) {
                    aidYearsObj = aidYears[b];
                    for (var key in aidYearsObj) {
                        if ("AID_YEAR" == key) {
                            identifyAidYearFlag = "OneAidYear";
                        } else if ("SECOND_AID_YEAR" == key) {
                            identifyAidYearFlag = "TwoAidYear";
                        }
                    }
                }
              var typeOfAidYear = getUrlParameters('aidYear');
              if (typeOfAidYear == "0") {
                    singleAidYear();
                } else if (typeOfAidYear == "1") {
                    singleAidYear();
                }else if (identifyAidYearFlag == "OneAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
                    singleAidYear();
                } else if (identifyAidYearFlag == "TwoAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
                    aidYearPopup();
                }else {
                    showErrorModal("Alert !", "No matching records found for the Aid Year");
                }
            } else {
                showErrorModal("Alert !", "No matching records found");
            }
        }
    });
}


function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {

        if ((document.getElementById("button1").checked === false) && (document.getElementById("button2").checked === false)) {
            modal.style.display = "block";
            showErrorModal("Alert!", "Please select the financial aid year");

        } else {
            modal.style.display = "none";
        }
    };

    document.getElementById("button1").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2021-2022";
        AidYear.value = "2020";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0AUCT";
        getCDAFinancialAidYear(aidYearValue);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        AidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1AUCT";
        getCDAFinancialAidYear(aidYearValue);

    };
}

function singleAidYear() {
   var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = "2021-2022";
      	AidYear.value = "2020";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0AUCT";
		getCDAFinancialAidYear(aidYearValue);
    }
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	AidYear.value = "2021";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1AUCT";
		getCDAFinancialAidYear(aidYearValue);
    }
  else{
    financialAidYearVal = "2021-2022";
    AidYear.value = "2020";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0AUCT";
    getCDAFinancialAidYear(aidYearValue);
  }


    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getCDAFinancialAidYear(aidYearValue);
    }

}

debugger;
if(StageIndicator.value !== null){
  debugger;
    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = AidYear.value;
  
  var formTextVal = "";
    if (financialAidYear == "2021-2022") {
        formTextVal = "<p><b>F0AUCT</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formTextVal = "<p><b>F1AUCT</b></p>";
    }
  
  
    var headingTextVal = "";
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>".concat(financialAidYear).concat(" UNIT CAP APPEAL FORM</b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>".concat(financialAidYear).concat(" UNIT CAP APPEAL FORM</b></p>");
    }

    var informationTextVal = "";
    if (financialAidYear == "2021-2022") {
        informationTextVal = "<p>(Deadline to appeal for Fall 2021 is 10/28/21; Deadline to appeal for Spring 2022 is 04/7/2022) <br><i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></br></p>";
    }
    if (financialAidYear == "2022-2023") {
        informationTextVal = "<p>(Deadline to appeal for Fall 2022 is 10/27/22; Deadline to appeal for Spring 2023 is 04/6/2023) <br><i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></br></p>";
    }



    $("#UCAFormText").html(formTextVal);
    $("#UCAHeadingText").html(headingTextVal);
    $("#UCAInformationText").html(informationTextVal);

}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    SectionII.enabled = false;
  SectionIII.enabled = false;
  AcademicDepartmentPanel.visible = false;
  AcademicAdvisingOfficePanel.visible = false;
  FinancialAidSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToAcademicDepartment"){
  StudentInformationPanel.enabled=false;
  SectionI.enabled=false;
  StudentSignaturePanel.enabled=false;
  SectionIII.enabled = false;
  AcademicAdvisingOfficePanel.visible = false;
  FinancialAidSignaturePanel.visible = false;
  NameofDegree.mandatory = true;
  DegreeTypeSection2.mandatory = true;
RemainingUnitsSection2.mandatory = true;
}

if(StageIndicator.value == "ToAcademicAdvisingOffice"){
   SectionI.enabled=false;
  StudentInformationPanel.enabled=false;
  SectionII.enabled = false;
  AcademicDepartmentPanel.enabled = false;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible = false;
  RemainingUnitsSection3.mandatory = true;
}

if(StageIndicator.value == "ToFinancialAid"){
  StudentInformationPanel.enabled=false;
  SectionI.enabled = false;
   SectionII.enabled = false; 
  SectionIII.enabled=false;
  StudentSignaturePanel.enabled = false; 
  AcademicDepartmentPanel.enabled=false;
  AcademicAdvisingOfficePanel.enabled=false;
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
    $.ajax({

      type: 'GET', 
      url:"/bin/getCaseID",
      dataType: 'json',

      success: function(myresponse){            
        caseId.value = myresponse.CASEID;

      	}
	}); 	
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
	  
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
 this.value = d;
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_InstructionTab_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_InstructionTab_init0 = function (scope) {
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
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_SCwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_SCwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeTypeSection1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeTypeSection1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(this.value == "3"){
 DegreeOtherSection1.enabled=true;
  DegreeOtherSection1.mandatory=true;
}else{
   DegreeOtherSection1.enabled=false; 
  DegreeOtherSection1.mandatory=false;
  DegreeOtherSection1.value = "";
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeOtherSection1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeOtherSection1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_textbox1658833379799_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_textbox1658833379799_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null ){
var appResult = [];
if(this.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_SEARCH_APPROVER",lastName:this.value},
    dataType: 'json',

    success: function(fundApproverResult) {

        if (fundApproverResult.length !== 0) {
          
		
            
			//appResult.push("Select Optional Reviewer");
            for (var i = 0; i < fundApproverResult.length; i++) {

                var item = fundApproverResult[i].FIRSTNAME + " "+ fundApproverResult[i].LASTNAME;
				var uid = fundApproverResult[i].USERID;
                var idItem = i + 1;

                //var jbcode = item.text;

                appResult.push(item+" - "+uid);

            }
          /* BudgetAnalystName.value = "";  
            BudgetAnalystEmplID.value = "";
  		BudgetAnalystName_1.value = "";
  		BudgetAnalystEmail.value = "";
  		BudgetAnalystUserID.value = "";*/
          AcademicDepartmentDropDown.value = "";
           AcademicDepartmentDropDown.items = appResult;
           //BudgetAnalystLastName.value = "";
           
        } else {
          showErrorModal("Alert!", "No matching records found");
          AcademicDepartmentDropDown.items = [];
  			//appResult.push("Select Budget Analyst");
 			//BudgetAnalystName.items = appResult;
         AcademicDepartmentReviewerName.value = "";
          AcademicDepartmentReviewerUserId.value = ""; 
          AcademicDepartmentReviewerEmailId.value = "";
          
        }

    }
});
}
}

        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentDropDown_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentDropDown_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var approverName = this.value;
  var approverEmplId;

if(approverName != "Select Optional Reviewer" && approverName !== ""){
approverName = approverName.substr(0,approverName.indexOf(' - '));
  AcademicDepartmentReviewerName.value = approverName;
//BudgetAnalystName_1.value = approverName;
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_EMPID",approverName:approverName},
    dataType: 'json',
	success: function(myresopnse) {     
         if(myresopnse[0].EMPLID !== null){
         approverEmplId = myresopnse[0].EMPLID;
        getEmployeeDetails(approverEmplId);
         }else{
           BudgetAnalystEmplID.value = "";
         }
    }    
});
}else{
  AcademicDepartmentReviewerName.value = "";
  AcademicDepartmentReviewerUserId.value = "";
  AcademicDepartmentReviewerEmailId.value = "";
         }
}

function getEmployeeDetails(approverEmplId){
  if(StageIndicator.value === null){
   if(approverEmplId !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_DETAILS",approverEmplID:approverEmplId},
    dataType: 'json',
	success: function(myresopnse) {
      if(myresopnse.length !== 0 ){
       AcademicDepartmentReviewerUserId.value = myresopnse[0].EMP_USERID;
       //AcademicDepartmentReviewerEmailId.value = myresopnse[0].EMAILID;
      // AcademicDepartmentReviewerEmailId.value = "yjayaram@fullerton.edu";    
      }else{
 AcademicDepartmentReviewerName.value = "";
  AcademicDepartmentReviewerUserId.value = "";
  AcademicDepartmentReviewerEmailId.value = "";
         }
     }

    
});
   }
}
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_textbox_11821518121658833672145_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_textbox_11821518121658833672145_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null ){
var appResult = [];
if(this.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_SEARCH_APPROVER",lastName:this.value},
    dataType: 'json',

    success: function(fundApproverResult) {
        if (fundApproverResult.length !== 0) {
			//appResult.push("Select Optional Reviewer");
            for (var i = 0; i < fundApproverResult.length; i++) {

                var item = fundApproverResult[i].FIRSTNAME + " "+ fundApproverResult[i].LASTNAME;
				var uid = fundApproverResult[i].USERID;
                var idItem = i + 1;

                //var jbcode = item.text;

                appResult.push(item+" - "+uid);

            }
          /* BudgetAnalystName.value = "";  
            BudgetAnalystEmplID.value = "";
  		BudgetAnalystName_1.value = "";
  		BudgetAnalystEmail.value = "";
  		BudgetAnalystUserID.value = "";*/
          AcademicAdvisiongOfficeDropDown.value = "";
           AcademicAdvisiongOfficeDropDown.items = appResult;
           //BudgetAnalystLastName.value = "";
           
        } else {
          showErrorModal("Alert!", "No matching records found");
          AcademicAdvisiongOfficeDropDown.items = [];
  			//appResult.push("Select Budget Analyst");
 			//BudgetAnalystName.items = appResult;
         AcademicAdvisingOfficeReviewerUserId.value = "";
          AcademicAdvisingOfficeReviewerEmailId.value = ""; 
          AcademicAdvisingOfficeReviewerName.value = "";
          
        }

    }
});
}
}

        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisiongOfficeDropDown_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisiongOfficeDropDown_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var approverName = this.value;
  var approverEmplId;

if(approverName != "Select Optional Reviewer" && approverName !== ""){
approverName = approverName.substr(0,approverName.indexOf(' - '));
  AcademicAdvisingOfficeReviewerName.value = approverName;
//BudgetAnalystName_1.value = approverName;
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_EMPID",approverName:approverName},
    dataType: 'json',
	success: function(myresopnse) {     
         if(myresopnse[0].EMPLID !== null){
         approverEmplId = myresopnse[0].EMPLID;
        getEmployeeDetails(approverEmplId);
         }else{
           BudgetAnalystEmplID.value = "";
         }
    }    
});
}else{
  AcademicAdvisingOfficeReviewerName.value = "";
  AcademicAdvisingOfficeReviewerUserId.value = "";
  AcademicAdvisingOfficeReviewerEmailId.value = "";
         }
}

function getEmployeeDetails(approverEmplId){
  if(StageIndicator.value === null){
   if(approverEmplId !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
	 data: {action: "FAER_APPROVER_DETAILS",approverEmplID:approverEmplId},
    dataType: 'json',
	success: function(myresopnse) {
      if(myresopnse.length !== 0 ){
       AcademicAdvisingOfficeReviewerUserId.value = myresopnse[0].EMP_USERID;
       //AcademicAdvisingOfficeReviewerEmailId.value = myresopnse[0].EMAILID;
      // AcademicDepartmentReviewerEmailId.value = "yjayaram@fullerton.edu";    
      }else{
 AcademicAdvisingOfficeReviewerName.value = "";
  AcademicAdvisingOfficeReviewerUserId.value = "";
  AcademicAdvisingOfficeReviewerEmailId.value = "";
         }
     }

    
});
   }
}
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeTypeSection2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeTypeSection2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "3"){
 DegreeOtherSection2.enabled=true; 
   DegreeOtherSection2.mandatory=true;
}else{
   DegreeOtherSection2.enabled=false; 
  DegreeOtherSection2.mandatory=false;
  DegreeOtherSection2.value = "";
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeOtherSection2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_DegreeOtherSection2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_StudentSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_StudentSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				StudentSignature.value = Name.value;
				StudentSignatureDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			StudentSignatureDate.enabled = false;       
			StudentSignature.enabled = false; 
				
	} else {
		StudentSignatureDate.value = "";
		StudentSignature.value = "";	   
	}
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_IPAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        IPAddress.value = data.ip;        
    });
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAcademicDepartment"){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				AcademicDepartmentSignature.value = userValue;
				AcademicDepartmentSignDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			AcademicDepartmentSignature.enabled = false;       
			AcademicDepartmentSignDate.enabled = false; 
				
	} else {
		AcademicDepartmentSignature.value = "";
		AcademicDepartmentSignDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicDepartmentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAcademicAdvisingOffice"){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				AcademicAdvisingOfficerName.value = userValue;
                AcademicAdvisingOfficerSignature.value = userValue;
				AcademicAdvisingOfficerSignDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
            AcademicAdvisingOfficerName.enabed = false;
			AcademicAdvisingOfficerSignature.enabled = false;       
			AcademicAdvisingOfficerSignDate.enabled = false; 
				
	} else {
        AcademicAdvisingOfficerName.vaue="";
		AcademicAdvisingOfficerSignature.value = "";
		AcademicAdvisingOfficerSignDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingOfficerName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingOfficerName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingOfficerSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingOfficerSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingOfficerSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_AcademicAdvisingOfficerSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_checkbox1658835338660_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_checkbox1658835338660_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFinancialAid" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				FinancialAidSignature.value = userValue;
				FinancialAidSignatureDate.value = myresponse.SERVER_DATE;	
                financialAidAssignee.value = myresponse.userId;
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			FinancialAidSignature.enabled = false;       
			FinancialAidSignatureDate.enabled = false; 
				
	} else {
	     FinancialAidSignature.value = "";
		FinancialAidSignatureDate.value = "";	   
      financialAidAssignee.value = "";
	}
}


        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_FinancialAidSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_FinancialAidSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_FinancialAidSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_FinancialAidSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_GeneratePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_GeneratePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (AidYear.value !== null) {
    getPdf();
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/f1auct-unit-cap-appeal/unit-cap-appeal');
            jsonData.append('fileName', Name.value);          
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
 * @function f1auct_unit_cap_appeal_unit_cap_appeal.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1auct_unit_cap_appeal_unit_cap_appeal.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = Name.value+" "+cwid.value;
  EmailSubject.value = "Test - Unit Cap Appeal Form - "+cwid.value;
}
var email = "chaitanya.sai@thoughtfocus.com";
StudentEmailId.value = email;
AcademicDepartmentReviewerEmailId.value = email;
AcademicAdvisingOfficeReviewerEmailId.value = email;
  guideBridge.submit();



        }
	}
}
