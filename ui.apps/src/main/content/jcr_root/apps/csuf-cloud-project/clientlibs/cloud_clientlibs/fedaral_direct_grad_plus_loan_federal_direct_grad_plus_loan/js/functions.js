/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_guideRootPanel_init0 = function (scope) {
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
          //  var userValue = 'mariana2'; // two Aid Year
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
                PrintStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                StudentCWID.value = response[0].EMPLID;
               
                //  studentIDNumber.value = response[0].student_ID;
                //HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
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


// Validation for aidYear=0 - 2021-2022 or aidYear=1 - 2022-2023

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";

    if (typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0GPLS";
        formCodeVal = "F0GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1GPLS";
        formCodeVal = "F1GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0GPLS";
        formCodeVal = "F0GPLS";
        //financialAidYearVal1.value = "1997";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getCDAFinancialAidYear(aidYearValue);
    }
}

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
        formCode.value = "F0GPLS";
        formCodeVal = "F0GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0GPLS";
        formCodeVal = "F1GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    };
}


if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value;
    //var taxFilingYear1= aidYear.value-1;
    var headingTextVal = "";


    var formCodeTextVal = "";
    if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0GPLS</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal = "<p><b>F1GPLS</b></p>";
    }

  if(financialAidYear =="2021-2022"){
  ApplicationDatesText.visible=true;
  ApplicationDatesText1.visible=false;
}else {
  ApplicationDatesText.visible=false;
  ApplicationDatesText1.visible=true;
}


   if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>Federal Direct Grad Plus Loan Application  (".concat(financialAidYear).concat(")</b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>Federal Direct Grad Plus Loan Application   (".concat(financialAidYear).concat(")</b></p>");
    }
  
  //  var declarationTextOne = "<b><i> Is this your FIRST Grad PLUS Loan application for</i></b>".concat(taxFilingYear).concat("<b><i> Academic Year?</i></b>"); 
   
   var declarationTextOne;
   if (financialAidYear == "2021-2022") {
        declarationTextOne = "<b><i> Is this your FIRST Grad PLUS Loan application for 21/22 Academic Year?</i></b>";
    }
    if (financialAidYear == "2022-2023") {
        declarationTextOne = "<b><i> Is this your FIRST Grad PLUS Loan application for 22/23 Academic Year?</i></b>";
    }
  
 //ar declarationTextOne = "<b><i> Is this your FIRST Grad PLUS Loan application for 21/22 Academic Year?</i></b>;
  //  var declarationTextTwo = "<b><i> Is this your FIRST Grad PLUS Loan application for</i></b>".concat(taxFilingYear1).concat("<b><i> Academic Year?</i></b>");
    
  $("#F0GPLSHeadingText").html(headingTextVal);
  $("#F0GPLSDeclationOne").html(declarationTextOne);
//  $("#F0GPLSDeclationTwo").html(declarationTextTwo);
  $("#F0GPLSFormCode").html(formCodeTextVal);

}



function checkforDuplicateSubmissions(formCodeVal){
var tableName = "AEM_FEDERAL_DIRECT_GRAD_LOAN";
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
                submit1607673526985.enabled=false;            
          }

		},
	});
}
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {     		
	StudentSignaturePanel.visible = true;
    StudentSignaturePanel.enabled=true;
    FinancialAidSignPanel.visible=false;
  
  $.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
}

 if(StageIndicator.value == "ToFinancialAid" ){
    InformationPanel.enabled=false;
	StudentInformationPanel.enabled = false;
    StudentSignaturePanel.visible = true;
    StudentSignaturePanel.enabled = false;
    FinancialAidSignPanel.visible=true;
    FinancialAidSignPanel.enabled=true;
}



        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_guideRootPanel_init2 = function (scope) {
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

            //var userValue = response.userId;
            var userValue = 'veronica.maciel'; // two Aid Year
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
            action: "CV_USER_DETAILS",
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
                PrintStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                StudentCWID.value = response[0].EMPLID;

                //  studentIDNumber.value = response[0].student_ID;
                //HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
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
                    //aidYearPopup();
                    singleAidYear();
                } else {
                    //showErrorModal("Alert !", "No matching records found for the Aid Year");
                    singleAidYear();
                }
            } else {
                //showErrorModal("Alert !", "No matching records found");
                singleAidYear();
            }
        }
    });
}


// Validation for aidYear=0 - 2021-2022 or aidYear=1 - 2022-2023

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";

    var financialAidvalues = getAidYearValuesOnSingleAidYear();

    if (typeOfAidYear == '0') {
        financialAidYearVal = financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0GPLS";
        formCodeVal = "F0GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1GPLS";
        formCodeVal = "F1GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral + "GPLS";
        formCodeVal = financialAidvalues.FormCodeGeneral + "GPLS";
        //financialAidYearVal1.value = "1997";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getCDAFinancialAidYear(aidYearValue);
    }
}

function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var formCodeVal = "";

    var financialAidvalues = getAidYearValuesOnPopup();

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
        var financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne + "GPLS";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne + "GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo + "GPLS";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo + "GPLS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);

    };
}


if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value;
    //var taxFilingYear1= aidYear.value-1;

    var aidYearVal = aidYear.value;
    var textChange = getUniqueStatements("FEDERAL_DIRECT_GRAD_PLUS_LOAN", aidYearVal, "");

    var headingTextVal = "<p><b>FEDERAL DIRECT GRAD PLUS LOAN APPLICATION (".concat(financialAidYear).concat(")</b></p>");
    var formCodeTextVal = "<p><b>" + formCode.value + "</b></p>";

    var declarationTextOneChange = textChange.DeclarationTextOne;
    var ApplicationDate1Change = textChange.ApplicationDate1;
    var ApplicationDate2Change = textChange.ApplicationDate2;
    var ApplicationDate3Change = textChange.ApplicationDate3;
    var ApplicationDate4Change = textChange.ApplicationDate4;

    var declarationTextOne = "<b><i> Is this your FIRST Grad PLUS Loan application for ".concat(declarationTextOneChange).concat(" Academic Year?</i></b>");

    var ApplicationDate1 = "<li>&nbsp;Fall only loans processing begins late July deadline - ".concat(ApplicationDate1Change).concat("</li>");
    var ApplicationDate2 = "<li>&nbsp;Academic Year processing begins late July deadline - ".concat(ApplicationDate2Change).concat("</li>");
    var ApplicationDate3 = "<li>&nbsp;Spring only loans processing begins early January deadline - ".concat(ApplicationDate3Change).concat("</li>");
    var ApplicationDate4 = "<li>&nbsp;Summer loans processing begins early April deadline - ".concat(ApplicationDate4Change).concat("</li>");

    HeadingYear.value = financialAidYear;
    LoanReqYear.value = declarationTextOneChange;
    ApplicationDateYear1.value = ApplicationDate1Change;
    ApplicationDateYear2.value = ApplicationDate2Change;
    ApplicationDateYear3.value = ApplicationDate3Change;
    ApplicationDateYear4.value = ApplicationDate4Change;

    $("#F0GPLSHeadingText").html(headingTextVal);
    $("#F0GPLSDeclationOne").html(declarationTextOne);
    $("#F0GPLSApplicationDate1").html(ApplicationDate1);
    $("#F0GPLSApplicationDate2").html(ApplicationDate2);
    $("#F0GPLSApplicationDate3").html(ApplicationDate3);
    $("#F0GPLSApplicationDate4").html(ApplicationDate4);
    $("#F0GPLSFormCode").html(formCodeTextVal);

}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_FEDERAL_DIRECT_GRAD_LOAN";
    var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
    var financialAidYearColumnName = "FINANCIAL_AID_YEAR";
    var formCodeColumnName = "FORM_CODE";
    var faDecision = "1";
    if (StageIndicator.value === null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getCitizenShipData",
            data: {
                action: 'CV_UPDATED_DUPLICATE_CHECK',
                cwid: cwid.value,
                faDecisionColumnName: financialAidDecisionColumnName,
                tableName: tableName,
                formCodeColumnName: formCodeColumnName,
                formCode: formCodeVal,
                faDecision: faDecision,
                financialAidYear: financialAidYearVal,
                financialAidYearColumn: financialAidYearColumnName
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length >= 1) {
                    showErrorModal("Alert!", "Duplicate submissions are not allowed");
                    submit1607673526985.enabled = false;
                }

            },
        });
    }
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_caseId_init0 = function (scope) {
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
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_caseId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_caseId_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_textdraw_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_textdraw_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=true;

        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	  this.enabled = false;
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
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
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_financialAidYear_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_financialAidYear_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value===null || StageIndicator.value=="ToFinacialAid"){
  debugger;
if(this.value=="2021-2022"){
  ApplicationDatesText.visible=true;
  ApplicationDatesText1.visible=false;
}else {
  ApplicationDatesText.visible=false;
  ApplicationDatesText1.visible=true;
}
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_RequestLoanAmmount_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_RequestLoanAmmount_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value===1){
  CBMaxAmount.enabled=false;
  CBMaxAmount.value="";
   RequestLoanAmmount.mandatory=false;
}else{
  CBMaxAmount.enabled=true;
   RequestLoanAmmount.mandatory=false;
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_RequestLoanAmmount_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_RequestLoanAmmount_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value===1){
  CBMaxAmount.enabled=false;
  CBMaxAmount.value="";
   RequestLoanAmmount.mandatory=false;
}else{
  CBMaxAmount.enabled=true;
   RequestLoanAmmount.mandatory=false;
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_CBMaxAmount_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_CBMaxAmount_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  RequestLoanAmmount.enabled=false;
  RequestLoanAmmount.value="";
  RequestLoanAmmount.mandatory=false;
}else{
  RequestLoanAmmount.enabled=true;
  RequestLoanAmmount.mandatory=true;
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_CBMaxAmount_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_CBMaxAmount_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  RequestLoanAmmount.enabled=false;
  RequestLoanAmmount.value="";
  RequestLoanAmmount.mandatory=false;
}else{
  RequestLoanAmmount.enabled=true;
  RequestLoanAmmount.mandatory=true;
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_SignatureAcknowledgement_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_SignatureAcknowledgement_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value=="ToFinancialAid"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_StudentSignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_StudentSignCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    if (StudentSignature.value === null) {

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                //StudentSignature.value = userValue;
                StudentSignature.value = firstName.value + " " + lastName.value;
                StudentSignDate.value = myresopnse.SERVER_DATE;
                PrintStudentName.value = firstName.value + " " + lastName.value;
                  //StudentCWID.value= myresopnse.student_ID;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    }
} else {
    StudentSignature.value = "";
    StudentSignDate.value = "";
    PrintStudentName.value = "";
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_FinancialAidSignPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_FinancialAidSignPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value=="ToFinancialAid"){
  this.enabled=true;
}else{
  this.enabled=false;
}

        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_FinancialAidChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_FinancialAidChk_valueCommit0 = function (scope) {
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
financialAidAssignee.value=myresopnse.userId;


},
error: function(error) {
alert("error block=" + error);
}
});

FinancialAidSign.enabled = false;
FinancialAidSignDate.enabled = false;
  financialAidAssignee.enabled="";


}else{
FinancialAidSign.value = "";
FinancialAidSignDate.value = null;
  financialAidAssignee.value="";
 
}
}
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (aidYear.value !== null) {
    getPdf();
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/fedaral-direct-grad-plus-loan/federal-direct-grad-plus-loan');
            jsonData.append('fileName', HiddenStudentName.value);          
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
 * @function fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
fedaral_direct_grad_plus_loan_federal_direct_grad_plus_loan.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(cwid.value !== null){
  aftiaDescCWID.value = HiddenStudentName.value +" "+cwid.value;
  EmailSubject.value = "Federal Direct GRAD Plus Loan Application - "+cwid.value;
  HiddenStudentEmail.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
}

guideBridge.submit();
        }
	}
}
