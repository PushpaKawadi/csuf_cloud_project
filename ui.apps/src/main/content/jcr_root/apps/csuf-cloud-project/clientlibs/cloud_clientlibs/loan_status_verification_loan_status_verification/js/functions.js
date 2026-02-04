/**
 * @function loan_status_verification_loan_status_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

           // var userValue = response.userId;
           var userValue = 'veronica.maciel'; // two Aid Year
           // var userValue = 'majesticallexi'; // one Aid Year
           // var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;

            getStudentDetails(userValue);
			
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

                var CWID = response[0].EMPLID;
                getStudentAidYearDetails(CWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                cwid.value = response[0].EMPLID;
                lastName.value = response[0].LAST_NAME;
                firstName.value = response[0].FIRST_NAME;
                HiddenStudentUserID.value = response[0].USERID;
            //    PrintStudentCWID.value = response[0].EMPLID;
                studentIDNumber.value = response[0].EMPLID;
                //  studentIDNumber.value = response[0].EMPLID;
               // HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                HiddenStudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //StudentCWID.value = response[0].EMPLID;

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
                }else if (typeOfAidYear == "1") {
                    singleAidYear();
                }else if ((identifyAidYearFlag == "OneAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    singleAidYear();
                }else if ((identifyAidYearFlag == "TwoAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    aidYearPopup();
                }
               else {
					showErrorModal("Alert !", "No matching records found for the Aid Year");
				}
			}
			else{
				showErrorModal("Alert !", "No matching records found");
			}
        }
    });
}

function singleAidYear() {    	
  	var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
     var formCodeVal = ""; 
  
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = "2021-2022";
      	aidYear.value = "2021";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0DFLT";
        formCodeVal = "F0DFLT";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }	
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	aidYear.value = "2022";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1DFLT";
        formCodeVal = "F1DFLT";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }	
   else{
    financialAidYearVal = "2021-2022";
    aidYear.value = "2021";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0DFLT";
    formCodeVal = "F0DFLT";
    getFAFSAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal); 
  }
	
	if(StageIndicator.value !== null){
		aidYearValue =  financialAidYear.value;
		getFAFSAFinancialAidYear(aidYearValue);
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
        formCode.value = "F0DFLT";
        formCodeVal = "F0DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1DFLT";
        formCodeVal = "F1DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };
}


if(StageIndicator.value !== null){

    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value-2;
    var headingTextVal = "";
    var formCodeTextVal = "";


  if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0DFLT</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal ="<p><b>F1DFLT</b></p>";
    }
  
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>LOAN STATUS VERIFICATION (".concat(financialAidYear).concat(")</b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>LOAN STATUS VERIFICATION (".concat(financialAidYear).concat(")</b></p>");
    }
  

    $("#F0DFLTTitleText").html(headingTextVal);
    $("#F0DFLTFormCodeText").html(formCodeTextVal);
}


function checkforDuplicateSubmissions(formCodeVal){
var tableName = "AEM_LOAN_STATUS_VERIFY";
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
                submit1608529416101.enabled=false;            
          }

		},
	});
}
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
	StudentInformation.visible = true;
    StudentSignPanel.visible =true;
    StudentSignPanel.enabled=true;
    FinancialAidPanel.visible=false;
  
   $.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
}
 if(StageIndicator.value == "ToFinancialAid"){
	StudentInformation.enabled = false;
   InstructionTab.enabled=false;
    StudentSignPanel.visible = true;
  	StudentSignPanel.enabled = false;
   SupportingDocumentsPanel.visible=false;
     SupportingDocumentsPanel.enabled=false;
   ActionToCompleteForm.enabled=false;
  	FinancialAidPanel.visible = true;
  	FinancialAidPanel.enabled = true;  	
}



        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

            // var userValue = response.userId;
            var userValue = 'veronica.maciel'; // two Aid Year
            // var userValue = 'majesticallexi'; // one Aid Year
            // var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;

            getStudentDetails(userValue);

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
                //    PrintStudentCWID.value = response[0].EMPLID;
                studentIDNumber.value = response[0].EMPLID;
                //  studentIDNumber.value = response[0].EMPLID;
                // HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //StudentCWID.value = response[0].EMPLID;

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
                    // aidYearPopup();
                    singleAidYear();
                } else {
                    showErrorModal("Alert !", "No matching records found for the Aid Year");
                }
            } else {
                showErrorModal("Alert !", "No matching records found");
            }
        }
    });
}

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
        formCode.value = "F0DFLT";
        formCodeVal = "F0DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1DFLT";
        formCodeVal = "F1DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0DFLT";
        formCodeVal = "F0DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getFAFSAFinancialAidYear(aidYearValue);
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
        formCode.value = financialAidvalues.FinAidYearFormCodeOne + "DFLT";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne + "DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo + "DFLT";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo + "DFLT";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };
}


if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value - 2;
    var formCodeValue = formCode.value;

    var headingTextVal = "<p><b>LOAN STATUS VERIFICATION (".concat(financialAidYear).concat(")</b></p>");
    var formCodeTextVal = "<p><b> ".concat(formCodeValue).concat(" </b></p>");

    $("#F0DFLTTitleText").html(headingTextVal);
    $("#F0DFLTFormCodeText").html(formCodeTextVal);
}


function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_LOAN_STATUS_VERIFY";
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
                    submit1608529416101.enabled = false;
                }

            },
        });
    }
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_caseId_init0 = function (scope) {
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
 * @function loan_status_verification_loan_status_verification.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_Date_1_init0 = function (scope) {
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
 * @function loan_status_verification_loan_status_verification.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_ActionCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_ActionCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  ActionCB2.value="";
  ActionCB3.value="";
  ActionCB4.value="";
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_ActionCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_ActionCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  ActionCB1.value="";
  ActionCB3.value="";
  ActionCB4.value="";
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_ActionCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_ActionCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  ActionCB1.value="";
  ActionCB2.value="";
  ActionCB4.value="";
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_ActionCB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_ActionCB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  ActionCB1.value="";
  ActionCB2.value="";
  ActionCB3.value="";
  
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function loan_status_verification_loan_status_verification.generated_supportDoc1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_supportDoc1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  supportDoc1.fileAttachment.mandatory =true;
}else{
  supportDoc1.fileAttachment.mandatory = false;
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function loan_status_verification_loan_status_verification.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function loan_status_verification_loan_status_verification.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_supportDoc3_valueCommit0 = function (scope) {
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
 * @function loan_status_verification_loan_status_verification.generated_StudentACK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_StudentACK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
   
var userValue = myresopnse.userName;
 //StudentSignature.value = userValue;
studentSignature.value = firstName.value + " " + lastName.value;
studentSignDate.value = myresopnse.SERVER_DATE;



},
error: function(error) {
alert("error block=" + error);
}
});

studentSignature.enabled = false;
studentSignDate.enabled = false;

}else{
studentSignature.value = "";
studentSignDate.value = null;
 
}
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_FinanceACK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_FinanceACK_valueCommit0 = function (scope) {
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
staffSignature.value = userValue;
staffSignDate.value = myresopnse.SERVER_DATE;
  financialAidAssignee.value=myresopnse.userId;


},
error: function(error) {
alert("error block=" + error);
}
});

staffSignature.enabled = false;
staffSignDate.enabled = false;
  financialAidAssignee.enabled=false;


}else{
staffSignature.value = "";
staffSignDate.value = null;
financialAidAssignee.value="";
 
}
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_HiddenStudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_HiddenStudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value=FirstName+ " "+LastName;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Loan_Status_Verification.pdf';		
		var requestURL = '/bin/getInboxItemDetails?action=ADOBE_SIGN_DOCUMENT_ATTACHMENT&workItemId=' + wId + '&signedDocument=' + adobeSignDocumentName + '&workflowInstanceId=' + encodeURIComponent(instance); 		
		console.log(requestURL);
  
		$.ajax({
			type: "GET",
			contentType: "application/pdf; charset=utf-8",
			url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
			async: false,
			cache: false,
			dataType: "json",
			success: function(response) {

				if (response.length > "0") {					
					var mydiv = document.getElementById("gridView");
					mydiv.innerHTML = "";
					for (i = 0; i < response.length; i++) {						
						var jsonData = response[i];                      	
						var linkSource = ((window.location.protocol) + "//" + window.location.hostname + ':' + window.location.port) + "/bin/getTaskAttachmentFromProcessingInstance?assetPath=" + encodeURIComponent(jsonData.path);				  
                      	
						var downloadLink = document.createElement("a");
						downloadLink.id = ("a".concat(i));						
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
				}
			},
			error: function(error) {
				console.log("error block=" + error);
			}
		});
	//}
}
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function loan_status_verification_loan_status_verification.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/loan-status-verification/loan-status-verification');
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
 * @function loan_status_verification_loan_status_verification.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
loan_status_verification_loan_status_verification.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(ActionCB1.value === null && ActionCB2.value === null && ActionCB3.value === null && ActionCB4.value === null){
  	showErrorModal("Alert !", "Please select the action");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].ActionToCompleteForm[0]");
}

else{
  	submitAction();
}

function submitAction(){
  aftiaDescCWID.value = firstName.value+ " " + lastName.value + " " + cwid.value;
  EmailSubject.value = "Loan Status Verification - " + cwid.value;
  
 var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  
  HiddenStudentEmail.value = testEmail;
  guideBridge.submit();
}
        }
	}
}
