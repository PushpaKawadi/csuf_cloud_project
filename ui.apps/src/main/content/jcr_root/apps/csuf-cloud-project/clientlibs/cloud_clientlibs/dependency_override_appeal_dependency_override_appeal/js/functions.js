/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    StudentSignPanel.enabled = true;
    StudentInformationPanel.enabled = true;
    FinancialAidSignPanel.visible = false;
    // IP Address
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });
}


else if (StageIndicator.value === "ToFinancialAid") {
    StudentInformationPanel.enabled = false;
   if (formType.value == "CDA") {
    GuidancePanelCDA.visible = true;
    GuidancePanelCDA.enabled = false;
    GuidancePanelFAFSA.visible =false; 
   }
   if (formType.value == "FAFSA") {
    GuidancePanelFAFSA.visible = true;
    GuidancePanelFAFSA.enabled = false;
    GuidancePanelFAFSA.visible = false;
   }
    InstructionsPanel.visible = true;
    InstructionsPanel.enabled = false;
    InstructionCB.enabled=false;
    StudentInformationPanel.visible = true;
    PersonalStatementPanel.visible = true;
    PersonalStatementPanel.enabled = false;
    StudentSignPanel.visible = true;
    StudentSignPanel.enabled = false;
    SupDocPanel.visible=false;
    SupDocPanel.enabled=false;
    FinancialAidSignPanel.enabled = true;
    FinancialAidSignPanel.visible = true;

}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var flag;
debugger;
if (StageIndicator.value === null) {
    var typeOfForm = getUrlParameters('formType');
    if (typeOfForm == "CDA") {
        formType.value = "CDA";
        GuidancePanelCDA.visible = true;
        GuidancePanelFAFSA.visible = false;
        InstructionsPanel.visible = true;
        loggedInDetails();
    } else if (typeOfForm == "FAFSA") {
        formType.value = "FAFSA";
        GuidancePanelFAFSA.visible =true;
        InstructionsPanel.visible = true;
        GuidancePanelCDA.visible = false;
        loggedInDetails();
    } else {
        var modal = document.getElementById("secondModal");
        var span = document.getElementsByClassName("secondClose")[0];
        modal.style.display = "block";
        span.onclick = function() {
            if ((document.getElementById("secondButton1").checked === false) && (document.getElementById("secondButton2").checked === false)) {
                modal.style.display = "block";
                showErrorModal("Alert!", "Please select the form type");
            } else {
                modal.style.display = "none";
            }
        };
        document.getElementById("secondButton1").onclick = function() {
            modal.style.display = "none";
            formType.value = "CDA";
            GuidancePanelCDA.visible = true;
            InstructionsPanel.visible = true;
           GuidancePanelFAFSA.visible =false;
            loggedInDetails();
        };
        document.getElementById("secondButton2").onclick = function() {
            modal.style.display = "none";
            formType.value = "FAFSA";
            GuidancePanelFAFSA.visible = true;
            InstructionsPanel.visible = true;
           GuidancePanelCDA.visible = false;
            loggedInDetails();
        };
    }
}
   
  function loggedInDetails(){
  $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

            //   var userValue = response.userId;
             var userValue = 'mariana2'; // two Aid Year
            // var userValue = 'majesticallexi'; // one Aid Year
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
       // url: "/bin/getStudentPeronalInformationWithUserID",
       url: "/bin/getCitizenShipData",

        data: {
            action:"CV_USER_DETAILS",
            userID: userValue
        },

        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {

                var CWID = response[0].EMPLID;
                getStudentAidYearDetails(CWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                cwid.value = response[0].EMPLID;
                lastName.value = response[0].LAST_NAME;
                firstName.value = response[0].FIRST_NAME;
                HiddenStudentUserID.value = response[0].USERID;
                PrintStudentCWID.value = response[0].EMPLID;
                StudentCWID.value = response[0].EMPLID;
                Street.value = response[0].ADDRESS1;
                State.value = response[0].STATE;
                City.value = response[0].CITY;
                ZipCode.value = response[0].POSTAL;
                TelephoneNumber.value = response[0].CELL_PHONE;
                //  studentIDNumber.value = response[0].student_ID;
                // HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
                HiddenStudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //StudentCWID.value = response[0].student_ID;

            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}


function getStudentAidYearDetails(CWID) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: CWID
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

                var typeOfAidYear = "";
                typeOfAidYear = getUrlParameters('aidYear');

                if (typeOfAidYear == "0") {
                    singleAidYear();
                } else if (typeOfAidYear == "1") {
                    singleAidYear();
                } else if ((identifyAidYearFlag == "OneAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    singleAidYear();
                } else if ((identifyAidYearFlag == "TwoAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    aidYearPopup();
                } else {
                    showErrorModal("Alert !", "No matching records found for the Aid Year");
                }
            } else {
                showErrorModal("Alert !", "No matching records found");
            }
        }
    });
}
/* Aid Year Popup */

function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var formCodeVal = "";
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
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;

        if (formType.value == "CDA") {
            formCode.value = "F0CDOA";
            formCodeVal = "F0CDOA";
            getCDAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);
        } else if (formType.value == "FAFSA") {
            formCode.value = "F0DPOR";
            formCodeVal = "F0DPOR";
            getFAFSAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);
        }

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        if (formType.value == "CDA") {
            formCode.value = "F1CDOA";
            formCodeVal = "F1CDOA";
            getCDAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);
        } else if (formType.value == "FAFSA") {
            formCode.value = "F1DPOR";
            formCodeVal = "F1DPOR";
            getFAFSAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);
        }
    };
}


// Validation for aidYear=0 - 2021-2022 or aidYear=1 - 2022-2023

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";

    if (formType.value == "CDA" && typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CDOA";
        formCodeVal = "F0CDOA";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (formType.value == "CDA" && typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CDOA";
        formCodeVal = "F1CDOA";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (formType.value == "FAFSA" && typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0DPOR";
        formCodeVal = "F0DPOR";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (formType.value == "FAFSA" && typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1DPOR";
        formCodeVal = "F1DPOR";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
       if (formType.value == "CDA"){
          formCode.value = "F0CDOA";
          formCodeVal = "F0CDOA";
          getCDAFinancialAidYear(aidYearValue);
          checkforDuplicateSubmissions(formCodeVal);
       } else if(formType.value == "FAFSA"){
         formCode.value = "F0DPOR";
         formCodeVal = "F0DPOR";
         getFAFSAFinancialAidYear(aidYearValue);
         checkforDuplicateSubmissions(formCodeVal);
       }
        
    }
}
    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        if (formType.value == "CDA") {
        getCDAFinancialAidYear(aidYearValue);
    } else if (formType.value == "FAFSA") {
        getFAFSAFinancialAidYear(aidYearValue);
    }
}

/*function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var formCodeVal = "";  
  
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
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CDOA";
        formCodeVal = "F0CDOA";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CDOA";
        formCodeVal = "F1CDOA";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    };
}

if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}
*/

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value;
    var headingTextVal = "";
  
    var formCodeTextVal = "";
  if (formType.value == "CDA") {
        if (financialAidYear == "2021-2022") {
            formCodeTextVal = "<p><b>F0CDOA</b></p>";
        }
        if (financialAidYear == "2022-2023") {
            formCodeTextVal = "<p><b>F1CDOA</b></p>";
        }
    }
  
  if (formType.value == "FAFSA") {
        if (financialAidYear == "2021-2022") {
            formCodeTextVal = "<p><b>F0DPOR</b></p>";
        }
        if (financialAidYear == "2022-2023") {
            formCodeTextVal = "<p><b>F1DPOR</b></p>";
        }
    }

    var headingTextVal = "";
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>DEPENDENCY OVERRIDE APPEAL (".concat(financialAidYearVal).concat(")<br>CA Dream Act Application</b></b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>DEPENDENCY OVERRIDE APPEAL (".concat(financialAidYearVal).concat(")<br>CA Dream Act Application</b></b></p>");
    }
  
    var textOneVal = "<p>Log on to ".concat(" <a href=https://dream.csac.ca.gov/ target=_blank > https://dream.csac.ca.gov/ </a>").concat("  and complete the ").concat(financialAidYearVal).concat(" A Dream Act application by the priority filing deadline of March 2, ").concat(taxFilingYear).concat(" Be sure to answer all questions in the student sections ONLY. Skip Sections D and E, and go to Section F. Once you submit your Dream application without parental data, our office will receive your ").concat(financialAidYearVal).concat(" Dream application information from the California Student Aid Commission (CSAC) beginning April ").concat(taxFilingYear);

    var textTwoVal = " You must complete the ".concat(financialAidYearVal).concat(" CA Dream Act application <i><b>and</b></i> submit your appeal and all supporting documentation to the Office of Financial Aid by the March 2nd deadline. <i>We will accept appeals after March 2, ").concat(taxFilingYear).concat(" <i>however, we cannot guarantee availability of funds for students with a CA Dream Act application filed after the March 2nd priority deadline.</i>");



    $("#F0CDOAheadingText").html(headingTextVal);
    $("#F0CDOAFormCode").html(formCodeTextVal);
    $("#F0CDOATextOne").html(textOneVal);
    $("#F0CDOATextTwo").html(textTwoVal);

}

debugger;
function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value;
    var formCodeTextVal = "";
    if (formType.value == "CDA") {
        if (financialAidYear == "2021-2022") {
            formCodeTextVal = "<p><b>F0CDOA</b></p>";
        }
        if (financialAidYear == "2022-2023") {
            formCodeTextVal = "<p><b>F1CDOA</b></p>";
        }
    }
    if (formType.value == "FAFSA") {
        if (financialAidYear == "2021-2022") {
            formCodeTextVal = "<p><b>F0DPOR</b></p>";
        }
        if (financialAidYear == "2022-2023") {
            formCodeTextVal = "<p><b>F1DPOR</b></p>";
        }
    }
    var headingTextVal = "";
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>DEPENDENCY OVERRIDE APPEAL (".concat(financialAidYearVal).concat(")</p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>DEPENDENCY OVERRIDE APPEAL (".concat(financialAidYearVal).concat(")</b></p>");
    }
  
  var textOneVal = "<p>Log on to ".concat(" <a href=http://www.fafsa.ed.gov/ target=_blank > www.fafsa.ed.gov </a>").concat(" and complete the ").concat(financialAidYearVal).concat(" FAFSA application by the priority filing deadline of March 2, ").concat(taxFilingYear).concat(" Be sure to answer all questions in the student sections ONLY. Be sure to answer all questions in the student sections ONLY and select the option, <i>“I have a special circumstance and I am unable to provide parental information.</i>” Our office will receive your ").concat(financialAidYearVal).concat(" FAFSA information from the Central Processing System (CPS) beginning April ").concat(taxFilingYear);

    var textTwoVal = " You must complete the ".concat(financialAidYearVal).concat(" FAFSA <i><b>and</b></i> submit your appeal and all supporting documentation to the Office of Financial Aid by the March 2nd deadline. <i>We will accept appeals after March 2, ").concat(taxFilingYear).concat(" <i>however, we cannot guarantee availability of funds for students with a CA Dream Act application filed after the March 2nd priority deadline.</i>");



    $("#F0CDOAheadingText").html(headingTextVal);
    $("#F0CDOAFormCode").html(formCodeTextVal);
    $("#F0CDOAOne").html(textOneVal);
    $("#F0CDOATwo").html(textTwoVal);
  
}

debugger;
function checkforDuplicateSubmissions(formCodeVal){
var tableName = "AEM_DEP_OVERRIDE_APPEAL";
var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
var formCodeColumnName = "FORM_CODE";
var faDecision = "1";
if (StageIndicator.value === null) {
	$.ajax({
		type: 'GET',
		url: "/bin/getCitizenShipData",
		data: {
			action: 'CV_DUPLICATE_CHECK_DETAILS',
			cwid: cwid.value,
          faDecisionColumnName:financialAidDecisionColumnName,
          tableName: tableName,
          formCodeColumnName:formCodeColumnName,
          formCode: formCodeVal,
          faDecision: faDecision
        },
		dataType: 'json',
		success: function(myresponse) {
          if(myresponse.length >=1){
                showErrorModal("Alert!", "Duplicate submissions are not allowed");
                submit1654576637940.enabled=false;            
          }

		},
	});
}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
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
 * @function dependency_override_appeal_dependency_override_appeal.generated_caseId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_caseId_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_cwid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_cwid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
$.ajax({
 type: 'GET',
 url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(response) {
      //gifModal.style.display = "block";
        var userValue = response.userId;
        userValue = 'mariana2';
     //  logUser.value = userValue;
      
	   $.ajax({
		 type: 'GET',
		 url: "/bin/getCitizenShipData",
			 data: {action: "CV_USER_DETAILS",userID:userValue},
			 dataType: 'json',
			success: function(response){
		  if (response.length >= 1) {
            debugger;
            // var state =  response[0].STATE;
			   State.value = response[0].STATE;
               City.value = response[0].CITY;
               ZipCode.value = response[0].POSTAL;
               TelephoneNumber.value = response[0].WORK_OTR_PHONE;
                
            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
    }
});
}

        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            	debugger;
if(StageIndicator.value === null){
	  this.enabled = false;
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var date = (curyear + "-" + curyearMonth + "-" + curyearDay);
        this.value = date;
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT1.enabled = true;
    EVENT1.mandatory = true;
  } else{
    EVENT1.enabled = false;
    EVENT1.value = "";
    EVENT1.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT1.enabled = true;
    EVENT1.mandatory = true;
  } else{
    EVENT1.enabled = false;
    EVENT1.value = "";
    EVENT1.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE2_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT2.enabled = true;
    EVENT2.mandatory = true;
  } else{
    EVENT2.enabled = false;
    EVENT2.value = "";
    EVENT2.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT2.enabled = true;
    EVENT2.mandatory = true;
  } else{
    EVENT2.enabled = false;
    EVENT2.value = "";
    EVENT2.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE3_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT3.enabled = true;
    EVENT3.mandatory = true;
  } else{
    EVENT3.enabled = false;
    EVENT3.value = "";
    EVENT3.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT3.enabled = true;
    EVENT3.mandatory = true;
  } else{
    EVENT3.enabled = false;
    EVENT3.value = "";
    EVENT3.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE4_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT4.enabled = true;
    EVENT4.mandatory = true;
  } else{
    EVENT4.enabled = false;
    EVENT4.value = "";
    EVENT4.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT4.enabled = true;
    EVENT4.mandatory = true;
  } else{
    EVENT4.enabled = false;
    EVENT4.value = "";
    EVENT4.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE5_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT5.enabled = true;
    EVENT5.mandatory = true;
  } else{
    EVENT5.enabled = false;
    EVENT5.value = "";
    EVENT5.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value !== null){
    EVENT5.enabled = true;
    EVENT5.mandatory = true;
  } else{
    EVENT5.enabled = false;
    EVENT5.value = "";
    EVENT5.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_City_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_City_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_State_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_State_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_ZipCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_ZipCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_TelephoneNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_TelephoneNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_SupDocPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_SupDocPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc1.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc1.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_supportDoc1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_supportDoc1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc1.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc1.fileAttachment.value) === true){
		var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
		supportDoc1.fileAttachment.value = doc2NewName;

	}
  if(extension !== "pdf"){
	 
       supportDoc1.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc2.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc2.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_supportDoc2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_supportDoc2_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc2.fileAttachment.value) === true){
		var doc2NewName = supportDoc2.fileAttachment.value.replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
		supportDoc2.fileAttachment.value = doc2NewName;

	}
  if(extension !== "pdf"){
	 
       supportDoc2.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc3.fileAttachment.value) === true){
		var doc2NewName = supportDoc3.fileAttachment.value.replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
		supportDoc3.fileAttachment.value = doc2NewName;

	}
    
	if(extension !== "pdf"){
	 
       supportDoc3.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_ApplicantComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_ApplicantComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
StudentSignature.value = firstName.value + " " + lastName.value;
DATE.value = myresopnse.SERVER_DATE;
PrintStudentsName.value = firstName.value + " " + lastName.value;  
//CWID_Certification.value = myresopnse.Student_Id;


},
error: function(error) {
alert("error block=" + error);
}
});

StudentSignature.enabled = false;
DATE.enabled = false;
PrintStudentsName.enabled = false;
//CWID_Certification.enabled = false;

}else{
StudentSignature.value = "";
DATE.value = null;
PrintStudentsName.value = "";
//CWID_Certification.value = "";
 
}
}




        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_DATE_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_DATE_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_checkbox1641809485669_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_checkbox1641809485669_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === "ToFinancialAid"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
FinancialAidSign.value = userValue;
FinancialAidSignDate.value = myresopnse.SERVER_DATE;
financialAidAssignee.value = myresopnse.userId;


},
error: function(error) {
alert("error block=" + error);
}
});

FinancialAidSign.enabled = false;
FinancialAidSignDate.enabled = false;
financialAidAssignee.enabled = false;

}else{
FinancialAidSign.value = "";
FinancialAidSignDate.value = null;
financialAidAssignee.value = ""; 
  
}
}
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function dependency_override_appeal_dependency_override_appeal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (aidYear.value !== null) {
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
            jsonData.append('formPath', '/content/forms/af/dependency-override-appeal/dependency-override-appeal');
            jsonData.append('fileName', firstName.value+"_"+lastName.value + "(" + cwid.value + ")");           
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
 * @function dependency_override_appeal_dependency_override_appeal.generated_submit1654576637940_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_appeal_dependency_override_appeal.generated_submit1654576637940_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (formType.value=="CDA" && Instruction1.value === null && Instruction2.value === null && Instruction3.value === null){
  	showErrorModal("Alert !", "Please check the instructions");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].GuidancePanelCDA[0]");
 }

  else if (formType.value=="FAFSA" && FAFSAInstruction1.value === null && FAFSAInstruction2.value === null && FAFSAInstruction3.value === null){
  	showErrorModal("Alert !", "Please check the instructions");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].GuidancePanelFAFSA[0]");
 }

else if(Step1CB1.value === null && Step1CB2.value === null && Step1CB3.value === null && Step1CB4.value === null && Step2CB1.value === null && Step2CB2.value === null && Step2CB3.value === null){
		showErrorModal("Alert !", "Please enter the Steps");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].InstructionsPanel[0]");
}
else if(InstructionCB.value === null){
  showErrorModal("Alert !", "Please read the Instructions carefully & check the Checkbox below");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].InstructionsPanel[0]");
}
else if(ParentName.value === null ){
        showErrorModal("Alert !", "Please enter personal statement");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].PersonalStatementPanel[0]");
}
else{
  	submitAction();
}


function submitAction(){
  aftiaDescCWID.value = HiddenStudentName.value + " " + cwid.value;
  EmailSubject.value = "Test - Dependency Override Appeal Form - " + cwid.value;

  HiddenStudentEmail.value= "anupama.dhar@thoughtfocus.com";

guideBridge.submit();
}
        }
	}
}
