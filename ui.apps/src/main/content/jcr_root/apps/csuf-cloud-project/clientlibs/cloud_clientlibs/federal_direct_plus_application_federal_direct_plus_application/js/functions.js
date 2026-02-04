/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_guideRootPanel_init0 = function (scope) {
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
           // var userValue = 'mariana2'; // two Aid Year
           //var userValue = 'majesticallexi'; // one Aid Year
           // var userValue = 'mchoi88';			 	// no Aid Year
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
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                StudentUserId.value = response[0].USERID;
                SCwid.value = studentCWID;
                cwid.value = studentCWID;
                //StudentEmailId.value = response[0].PREF_EMAIL;
                StudentEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                StudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                firstName.enabled = false;
                lastName.enabled = false;
                cwid.enabled = false;
                financialAidYear.enabled = false;
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
                            flag = "OneAidYear";
                        } else if ("SECOND_AID_YEAR" == key) {
                            identifyAidYearFlag = "TwoAidYear";
                           flag = "TwoAidYear";
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
                } else {
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
        AidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0PLUS";
        formCodeVal = "F0PLUS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        AidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PLUS";
        formCodeVal = "F1PLUS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };
}

function singleAidYear() {
   var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
    var formCodeVal = "";
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = "2021-2022";
      	AidYear.value = "2022";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0PLUS";
        formCodeVal = "F0PLUS";
		getCDAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
    }
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	AidYear.value = "2023";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1PLUS";
        formCodeVal = "F1PLUS";
		getCDAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
    }
  else{
    financialAidYearVal = "2021-2022";
    AidYear.value = "2022";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0PLUS";
    formCodeVal = "F0PLUS";
    getCDAFinancialAidYear(aidYearValue);
   checkforDuplicateSubmissions(formCodeVal);
  }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getCDAFinancialAidYear(aidYearValue);
    }

}


if(StageIndicator.value !== null){

    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = AidYear.value;
    var headingTextVal = "";
        headingTextVal = "<p><b>FEDERAL DIRECT PLUS APPLICATION (".concat(financialAidYear).concat(")</b><br><i>Incomplete documents will not be returned, but will be disposed of in a secure manner, per university policy. This will delay processing</i></p>");
  
  
  var certificationTextVal = "<p>I  request  the  loan  amount  indicated  on  the  PLUS  Application  to  pay  my  dependent student’s educational expenses for his/her  attendance  at  CSU,  Fullerton  during  the  ".concat(financialAidYear).concat(" academic  year.  I  understand  that  1)  I  may  be  eligible  for a lesser amount, 2) the loan will be disbursed in equal amounts for each term or payment period and 3) this request will be sent to the Federal Direct Loan Servicer.</p>");

  var formTextVal = "";
  var firstParentPlusTextVal = "";  
  var fallSpringTextVal = ""; 
  var fallTextVal = ""; 
  var springTextVal = ""; 
  var summerTextVal = "";
  var deadlineTextVal = "";
   if (financialAidYear == "2021-2022") {
        formTextVal = "<p><b>F0PLUS</b></p>";
        firstParentPlusTextVal = "<p><b><i>Is this your FIRST Parent PLUS Loan application for 21/22 Academic Year?</i></b></p>";
        fallSpringTextVal = "<p><u>Fall 2021/Spring 2022</u></p>";
        fallTextVal = "<p><u>Fall 2021</u></p>";
        springTextVal = "<p><u>Spring 2022</u></p>";
        summerTextVal = "<p><u>Summer 2022</u></p>";
        deadlineTextVal = "<p>PLUS Application Deadline for Fall only loans - December 3,2021; Academic Year or Spring only loans - April 29, 2022</p>";
        ApplicationProcessPanelOne.visible = true;
        ApplicationProcessPanelTwo.visible = false;
    }
    if (financialAidYear == "2022-2023") {
        formTextVal = "<p><b>F1PLUS</b></p>";
        firstParentPlusTextVal = "<p><b><i>Is this your FIRST Parent PLUS Loan application for 22/23 Academic Year?</i></b></p>";
        fallSpringTextVal = "<p><u>Fall 2022/Spring 2023</u></p>";
        fallTextVal = "<p><u>Fall 2022</u></p>";
        springTextVal = "<p><u>Spring 2023</u></p>";
        summerTextVal = "<p><u>Summer 2023</u></p>";
        deadlineTextVal = "<p>PLUS Application Deadline for Fall only loans - December 2,2022; Academic Year or Spring only loans - April 28, 2023</p>";
        ApplicationProcessPanelOne.visible = false;
        ApplicationProcessPanelTwo.visible = true;
    }
  
  $("#PLUSFormText").html(formTextVal);
  $("#PLUSHeadingText").html(headingTextVal);
  $("#PLUSCertificationText").html(certificationTextVal);
  $("#PLUSFirstPlusText").html(firstParentPlusTextVal);
  $("#PLUSFallSpringText").html(fallSpringTextVal);
  $("#PLUSFallText").html(fallTextVal);
  $("#PLUSSpringText").html(springTextVal); 
  $("#PLUSSummerText").html(summerTextVal);
  $("#PLUSDeadlineText").html(deadlineTextVal);
}

function checkforDuplicateSubmissions(formCodeVal) {
    var tableName = "AEM_FED_DIRECT_PLUS_APPL";
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
                faDecisionColumnName: financialAidDecisionColumnName,
                tableName: tableName,
                formCodeColumnName: formCodeColumnName,
                formCode: formCodeVal,
                faDecision: faDecision
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length >= 1) {
                    showErrorModal("Alert!", "Duplicate submissions are not allowed");
                    submit1575264176703.enabled = false;
                }
            },
        });
    }
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  FinancialAidSignaturePanel.visible=false;
  FinancialAidSignaturePanel.enabled =false;
  disabledCutCopyPasteFunctionality();
}

if(StageIndicator.value=="ToFinancialAid"){
  StudentInformation.visible=true;
  StudentInformation.enabled=false;
  ParentInformationPanel.visible=true;
  ParentInformationPanel.enabled=false;
  Declaration.visible=true;
  Declaration.enabled=false;
  StudentSignaturePanel.visible=true;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible=true;
  FinancialAidSignaturePanel.enabled=true;
  InstructionCB.enabled=false;
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_guideRootPanel_init2 = function (scope) {
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
           // var userValue = 'veronica.maciel'; // two Aid Year
           //var userValue = 'majesticallexi'; // one Aid Year
           // var userValue = 'mchoi88';			 	// no Aid Year
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
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                StudentUserId.value = response[0].USERID;
                SCwid.value = studentCWID;
                cwid.value = studentCWID;
                //StudentEmailId.value = response[0].PREF_EMAIL;
                StudentEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                StudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                firstName.enabled = false;
                lastName.enabled = false;
                cwid.enabled = false;
                financialAidYear.enabled = false;
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
                            flag = "OneAidYear";
                        } else if ("SECOND_AID_YEAR" == key) {
                            identifyAidYearFlag = "TwoAidYear";
                           flag = "TwoAidYear";
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
        AidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"PLUS";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"PLUS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        AidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"PLUS";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"PLUS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };
}

function singleAidYear() {
   var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
    var formCodeVal = "";
  
    var financialAidvalues = getAidYearValuesOnSingleAidYear();
    
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = financialAidvalues.FinAidYearZero;
      	AidYear.value = financialAidvalues.AidYearZero;
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0PLUS";
        formCodeVal = "F0PLUS";
		getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = financialAidvalues.FinAidYearOne;
      	AidYear.value = financialAidvalues.AidYearOne;
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1PLUS";
        formCodeVal = "F1PLUS";
		getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }
  else{
    financialAidYearVal = financialAidvalues.FinAidYearGeneral;
    AidYear.value = financialAidvalues.AidYearGeneral;
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = financialAidvalues.FormCodeGeneral+"PLUS";
    formCodeVal = financialAidvalues.FormCodeGeneral+"PLUS";
    getCDAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
  }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getCDAFinancialAidYear(aidYearValue);
    }

}


if(StageIndicator.value !== null){

    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = AidYear.value;
    var taxFilingYear2 = taxFilingYear-1;
  
    var aidYearVal = AidYear.value;
    var textChange = getUniqueStatements("FEDERAL_DIRECT_PLUS_APPLICATION", aidYearVal, "");
  
    var FirstParentPlusTextChange = textChange.FirstParentPlusText;
    var DeadlineDate1Change = textChange.DeadlineDate1;
    var DeadlineDate2Change = textChange.DeadlineDate2;
  
    var headingTextVal = "<p><b>FEDERAL DIRECT PLUS APPLICATION (".concat(financialAidYear).concat(")</b><br><i>Incomplete documents will not be returned, but will be disposed of in a secure manner, per university policy. This will delay processing</i></p>");
   
  var certificationTextVal = "<p>I  request  the  loan  amount  indicated  on  the  PLUS  Application  to  pay  my  dependent student’s educational expenses for his/her  attendance  at  CSU,  Fullerton  during  the  ".concat(financialAidYear).concat(" academic  year.  I  understand  that  1)  I  may  be  eligible  for a lesser amount, 2) the loan will be disbursed in equal amounts for each term or payment period and 3) this request will be sent to the Federal Direct Loan Servicer.</p>");

  var formTextVal = "<p><b>"+formCode.value+"</b></p>";
  var firstParentPlusTextVal = "<p><b><i>Is this your FIRST Parent PLUS Loan application for ".concat(FirstParentPlusTextChange).concat(" Academic Year?</i></b></p>"); 
  var fallSpringTextVal = "<p><u>Fall ".concat(taxFilingYear2).concat("/Spring ".concat(taxFilingYear).concat("</u></p>"));
  var fallTextVal = "<p><u>Fall ".concat(taxFilingYear2).concat("</u></p>");
  var springTextVal = "<p><u>Spring ".concat(taxFilingYear).concat("</u></p>"); 
  var summerTextVal = "<p><u>Summer ".concat(taxFilingYear).concat("</u></p>");
  var deadlineTextVal = "<p>PLUS Application Deadline for Fall only loans - December ".concat(DeadlineDate1Change).concat("; Academic Year or Spring only loans - April ".concat(DeadlineDate2Change).concat("</p>"));
  var applicationProcessTextVal ="Student completes a Free Application for Federal Student Aid (FAFSA) for ".concat(financialAidYear).concat(" at ".concat("<a href=".concat("http://www.fafsa.gov").concat("target=".concat("_blank")).concat(">www.fafsa.gov</a> . The school code for CSU Fullerton is 001137. Both student and parent must sign (to sign electronically, use FSA ID available at ".concat("<a href=".concat("http://www.fsaid.ed.gov").concat("target=".concat("_blank")).concat(">http://www.fsaid.ed.gov</a>).")))));
  
  Deadline1.value=DeadlineDate1Change;
  Deadline2.value=DeadlineDate2Change;
  AcademicYear.value=FirstParentPlusTextChange;
  
  $("#PLUSFormText").html(formTextVal);
  $("#PLUSHeadingText").html(headingTextVal);
  $("#PLUSCertificationText").html(certificationTextVal);
  $("#PLUSFirstPlusText").html(firstParentPlusTextVal);
  $("#PLUSFallSpringText").html(fallSpringTextVal);
  $("#PLUSFallText").html(fallTextVal);
  $("#PLUSSpringText").html(springTextVal); 
  $("#PLUSSummerText").html(summerTextVal);
  $("#PLUSDeadlineText").html(deadlineTextVal);
  $("#PLUSApplicationProcessText").html(applicationProcessTextVal);
}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal){
    var tableName = "AEM_FED_DIRECT_PLUS_APPL";
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
                    submit1575264176703.enabled = false;
                }
            },
        });
    }
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            caseId.value = myresponse.CASEID;
        },
    });
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
	  
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
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
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_RelationshipRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_RelationshipRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "3"){
  RelationshipOthers.enabled=true;
  RelationshipOthers.mandatory=true;
}else{
  RelationshipOthers.value="";
    RelationshipOthers.enabled=false;
  RelationshipOthers.mandatory=false;
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_RelationshipOthers_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_RelationshipOthers_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_SocialSecurityNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_SocialSecurityNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var number = this.value;
if(this.value !== null && !number.includes("X") ){
  this.value = "XXXX-XX-"+number.substr(5, 4);
}
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_MaximumAmountCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_MaximumAmountCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  RequestedLoanAmount.value = ""; 
  RequestedLoanAmount.enabled = false;
}else{
  RequestedLoanAmount.enabled = true;
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_FallAndSpringTermCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_FallAndSpringTermCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  FallTermCB.value = "";
SpringTermCB.value = ""; 
SummerTermCB.value = "";
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_FallTermCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_FallTermCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  FallAndSpringTermCB.value = "";
SpringTermCB.value = ""; 
SummerTermCB.value = "";
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_SpringTermCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_SpringTermCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  FallAndSpringTermCB.value = "";
FallTermCB.value = ""; 
SummerTermCB.value = "";
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_SummerTermCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_SummerTermCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  FallAndSpringTermCB.value = "";
FallTermCB.value = ""; 
SpringTermCB.value = "";
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_ParentAttendedCSURB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_ParentAttendedCSURB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == "1"){
  ParentNameSchoolRecord.mandatory = true;
  ParentNameSchoolRecord.enabled = true;
}else if (this.value == "2"){
  ParentNameSchoolRecord.value = "";
  ParentNameSchoolRecord.enabled = false;
  ParentNameSchoolRecord.mandatory = false;
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_CheckBox1_Deny_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_CheckBox1_Deny_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CheckBox2_Deny.value=""; 
  CheckBox3_Deny.value="";
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_CheckBox2_Deny_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_CheckBox2_Deny_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CheckBox1_Deny.value=""; 
  CheckBox3_Deny.value="";
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_CheckBox3_Deny_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_CheckBox3_Deny_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CheckBox1_Deny.value="";
  CheckBox2_Deny.value=""; 
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_SupportingDocuments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_supportDoc1_valueCommit0 = function (scope) {
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
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc2.fileAttachment.value) === true){
		var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
		supportDoc2.fileAttachment.value = doc2NewName;

	}
  if(extension !== "pdf"){
	 
       supportDoc2.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(supportDoc3.fileAttachment.value) === true){
		var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
		supportDoc3.fileAttachment.value = doc2NewName;

	}
    
	if(extension !== "pdf"){
	 
       supportDoc3.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	} 
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_checkbox1649834861348_valueCommit0 = function (scope) {
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
				StudentSignature.value = StudentName.value;
				StudentSignatureDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			StudentSignature.enabled = false;       
			StudentSignatureDate.enabled = false; 
				
	} else {
		StudentSignature.value = "";
		StudentSignatureDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_IPAddress_init0 = function (scope) {
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
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_checkbox1649838422969_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_checkbox1649838422969_valueCommit0 = function (scope) {
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
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_FinancialAidSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_FinancialAidSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_FinancialAidSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_FinancialAidSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Federal_Direct_Plus_Application_Adobe_Sign.pdf';		
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
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if (AidYear.value !== null) {
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
            jsonData.append('formPath', '/content/forms/af/federal-direct-plus-application/federal-direct-plus-application');
            jsonData.append('fileName', StudentName.value);          
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
 * @function federal_direct_plus_application_federal_direct_plus_application.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
federal_direct_plus_application_federal_direct_plus_application.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
  aftiaDescCWID.value = StudentName.value+" "+cwid.value;
  EmailSubject.value = "Federal Direct Plus Application - "+cwid.value;
  if(AidYear.value == "2022"){
    documentNameForAdobeSign.value = "Federal Direct Plus Application - F0PLUS";
  }else if(AidYear.value == "2023"){
    documentNameForAdobeSign.value = "Federal Direct Plus Application - F1PLUS";
  }
}
if(ParentEmailAddress.value != ConfirmParentEmail.value){
  showErrorModal("Alert!", "Parent email does not match");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].ConfirmParentEmail[0]");
}/*else if(RequestedLoanAmount.value === null &&  MaximumAmountCB.value === null){
   showErrorModal("Alert!", "Please enter Requested Loan Amount");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].ParentInformationPanel[0].RequestedLoanAmountPanel[0].RequestedLoanAmount[0]");
}*/else if(FirstLoanApplicationRB.value === null){
  showErrorModal("Alert!", "Please select if this is your FIRST Parent PLUS Loan application");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Declaration[0].FirstLoanApplicationRB[0]");
}/*else if(FallAndSpringTermCB.value === null && FallTermCB.value === null && SpringTermCB.value === null && SummerTermCB.value === null){
  showErrorModal("Alert!", "Please select the term for loan processing");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Declaration[0].StudentDeclarationPanel[0].FallAndSpringTermCB[0]");
}else if(HSWithParentsCB.value === null && HSOnCampusCB.value === null && HSOffCampusCB.value === null){
  showErrorModal("Alert!", "Please select the housing status");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Declaration[0].StudentDeclarationPanel[0].HSWithParentsCB[0]");
}*/
else{
guideBridge.submit();
}
        }
	}
}
