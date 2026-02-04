/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
  StudentSignPanel.enabled = true;
  BasicInformationPanel.enabled =true;
  FinancialAidSignPanel.visible = false;
  
   // IP Address
  $.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
}

 if(StageIndicator.value=="ToFinancialAid"){
     InstructionsPanel.visible=true;
     InstructionsPanel.enabled=false;
     BasicInformationPanel.visible=true;
     BasicInformationPanel.enabled=false;
     PersonalStatementPanel.visible=true;
     PersonalStatementPanel.enabled=false;
   SupDocPanel.visible=false;
   SupDocPanel.enabled=false;
  /* if(StudentCB.value=="1"){
     StudentSignPanel.visible =true;
     StudentSignPanel.enabled =false;
   }else{
      StudentSignPanel.visible =false;
   }*/
   StudentSignPanel.visible =true;
     StudentSignPanel.enabled =false;
     FinancialAidSignPanel.enabled=true;
     FinancialAidSignPanel.visible=true;
    

  
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_guideRootPanel_init1 = function (scope) {
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
                //  studentIDNumber.value = response[0].student_ID;
                // HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = response[0].PREF_EMAIL;
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
    // var financialAidYearVal1 = "";

    if (typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0DORR";
        formCodeVal = "F0DORR";
        // financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1DORR";
        formCodeVal = "F1DORR";
        // financialAidYearVal1.value="1998";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
    } else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0DORR";
        formCodeVal = "F0DORR";
        //financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
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
        formCode.value = "F0DORR";
        formCodeVal = "F0DORR";
        // financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1DORR";
         formCodeVal = "F1DORR";
        // financialAidYearVal1.value = "1998";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    };
}


if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var financialAidYearVal1 = "";
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = aidYear.value;
    //var taxFilingYear1= aidYear.value-1;
   // var headingTextVal = "";
   

    var formCodeTextVal = "";
    if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0DORR</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal = "<p><b>F1DORR</b></p>";
    }

    var testTextVal = "";
    if (financialAidYear == "2021-2022") {
        testTextVal = "1997";
    }
    if (financialAidYear == "2022-2023") {
        testTextVal = "1998";
    }

    var YearTextVal = "";
    if (financialAidYear == "2021-2022") {
        YearTextVal = "2022";
    }
    if (financialAidYear == "2022-2023") {
        YearTextVal = "2023";
    }
  
  var DiffYearTextVal = "";
    if (financialAidYear == "2021-2022") {
        DiffYearTextVal = "2020-2021";
    }
    if (financialAidYear == "2022-2023") {
        DiffYearTextVal = "2022-2023";
    }


    var headingTextVal = "<p><b>DEPENDENCY OVERRIDE RENEWAL ".concat(" (" + financialAidYearVal + ")");

    var textOneVal = " Our records indicate that you ".concat(financialAidYearVal).concat(" financial aid eligibility was based on your approved Dependency Override appeal. Independent status must be examined each academic year. If your situation requires special handling because of your continued claim of independent status, you must complete this Dependency Override Renewal in order for our office to determine your dependency status for ").concat(financialAidYearVal).concat(" <i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing</i> Review each of the following three statuses and check the one box that best describes your situation:");




    var textTwoVal = "I have reestablished a relationship with my parent(s); therefore I am a dependent student for purposes of applying for financial aid in ".concat(financialAidYearVal).concat(" My parent(s) will complete the parents’ portion of the FAFSA application ");

    var textThreeVal = "I understand that a Dependency Override is granted on a yearly basis, and that I must reaffirm the unusual and extenuating circumstances that remain unchanged, which led to my approved Dependency Override during ".concat(financialAidYearVal).concat(".");

    var textFourVal = "<p>Complete the ".concat(financialAidYearVal).concat(" on-line at <a href=www.fafsa.ed.gov target=_blank>  www.fafsa.ed.go</a>").concat("  by the priority filing deadline of March 2, ").concat(taxFilingYear).concat(" Be sure to answer all questions in the student sections ONLY and select the option <i> “I have a special circumstance and I am unable to provide parental information.”</i> Our office will receive your ").concat(financialAidYearVal).concat(" FAFSA information from the Central Processing System (CPS) beginning April ").concat(taxFilingYear).concat(" and update your independent status accordingly if we  approve your appeal");

    var textFiveVal = "<i><u>ACTION:</u></i> You are no longer required to submit a Dependency Override renewal to the Office of Financial Aid because you now meet the federal criteria for independent status. Complete the ".concat(DiffYearTextVal).concat(" FAFSA on-line at <a href=www.fafsa.ed.gov target=_blank>  www.fafsa.ed.go</a> no later than March 2,".concat(taxFilingYear).concat("  for priority consideration."));

    var textSixVal = "<i><u>ACTION:</u></i> Complete the ".concat(financialAidYearVal).concat(" FAFSA on-line at <a href=www.fafsa.ed.gov target=_blank>  www.fafsa.ed.go</a> including your and your parents’ information no later than March 2,".concat(taxFilingYear).concat("  for priority consideration."));


    var textSevenVal = "<p> 1) I was born before January 1, ".concat(testTextVal).concat(" 2) I will be working on a graduate degree Fall ".concat(taxFilingYear).concat(" 3) I am married, 4) I have children who receive more than half of their support from me, 5) I have other dependents (not my children) who live with me and I provide more than half of their support, 6) both of my parents are deceased; 7) I was a ward of the court, 8) I am a veteran of the U.S. Armed Forces, or 9) I was an unaccompanied youth who was homeless."));

    var textEightVal = "<i>*If you <u>do not</u> attend college Fall ".concat(taxFilingYear).concat(" but plan to start your Master’s program Spring ").concat(YearTextVal).concat(" you are considered independent for financial aid purposes.</i>");

    $("#F0DORRFormCode").html(formCodeTextVal);
    $("#F0DORRheadingText").html(headingTextVal);
    //  $("#F0DORRTitleText").html(titleTextVal);

    $("#F0DORRTextOne").html(textOneVal);
    $("#F0DORRTextTwo").html(textTwoVal);
    $("#F0DORRTextThree").html(textThreeVal);
    $("#F0DORRTextFour").html(textFourVal);
    $("#F0DORRTextFive").html(textFiveVal);
    $("#F0DORRTextSix").html(textSixVal);
    $("#F0DORRTextSeven").html(textSevenVal);
    $("#F0DORRTextEight").html(textEightVal);

}


function checkforDuplicateSubmissions(formCodeVal){
var tableName = "AEM_DEP_OVERRIDE_RENEWAL";
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_guideRootPanel_init2 = function (scope) {
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
                PrintStudentCWID.value = response[0].EMPLID;
                StudentCWID.value = response[0].EMPLID;
                //  studentIDNumber.value = response[0].student_ID;
                // HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = response[0].PREF_EMAIL;
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
    // var financialAidYearVal1 = "";

    var financialAidvalues = getAidYearValuesOnSingleAidYear();

    if (typeOfAidYear == '0') {
        financialAidYearVal = financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0DORR";
        formCodeVal = "F0DORR";
        // financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1DORR";
        formCodeVal = "F1DORR";
        // financialAidYearVal1.value="1998";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral + "DORR";
        formCodeVal = financialAidvalues.FormCodeGeneral + "DORR";
        //financialAidYearVal1.value = "1997";
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
        formCode.value = financialAidvalues.FinAidYearFormCodeOne + "DORR";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne + "DORR";
        // financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo + "DORR";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo + "DORR";
        // financialAidYearVal1.value = "1998";
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
    //var financialAidYearVal1 = "";
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = aidYear.value;
    var taxFilingYear2 = parseInt(taxFilingYear) + 1;
    var taxFilingYear3 = taxFilingYear - 1;

    var aidYearVal = aidYear.value;
    var textChange = getUniqueStatements("DEPENDENCY_OVRRIDE_RENEWAL", aidYearVal, "");
    var testTextChange = textChange.TestText;

    var formCodeTextVal = "<p><b>" + formCode.value + "</b></p>";

    var testTextVal = testTextChange;

    var YearTextVal = taxFilingYear2;

    var DiffYearTextVal = textChange.DiffYearText;
  
    Year3.value=testTextChange;
    Year5.value=DiffYearTextVal;
    

    var headingTextVal = "<p><b>DEPENDENCY OVERRIDE RENEWAL ".concat(" (" + financialAidYearVal + ")");

    var textOneVal = " Our records indicate that you ".concat(financialAidYearVal).concat(" financial aid eligibility was based on your approved Dependency Override appeal. Independent status must be examined each academic year. If your situation requires special handling because of your continued claim of independent status, you must complete this Dependency Override Renewal in order for our office to determine your dependency status for ").concat(financialAidYearVal).concat(". <i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing</i> Review each of the following three statuses and check the one box that best describes your situation:");

    var textTwoVal = "I have reestablished a relationship with my parent(s); therefore I am a dependent student for purposes of applying for financial aid in ".concat(financialAidYearVal).concat(" My parent(s) will complete the parents’ portion of the FAFSA application ");

    var textThreeVal = "I understand that a Dependency Override is granted on a yearly basis, and that I must reaffirm the unusual and extenuating circumstances that remain unchanged, which led to my approved Dependency Override during ".concat(financialAidYearVal).concat(".");

    var textFourVal = "<p>Complete the ".concat(financialAidYearVal).concat(" on-line at <a href=www.fafsa.ed.gov target=_blank>  www.fafsa.ed.go</a>").concat("  by the priority filing deadline of March 2, ").concat(taxFilingYear).concat(" Be sure to answer all questions in the student sections ONLY and select the option <i> “I have a special circumstance and I am unable to provide parental information.”</i> Our office will receive your ").concat(financialAidYearVal).concat(" FAFSA information from the Central Processing System (CPS) beginning April ").concat(taxFilingYear).concat(" and update your independent status accordingly if we  approve your appeal");

    var textFiveVal = "<i><u>ACTION:</u></i> You are no longer required to submit a Dependency Override renewal to the Office of Financial Aid because you now meet the federal criteria for independent status. Complete the ".concat(DiffYearTextVal).concat(" FAFSA on-line at <a href=www.fafsa.ed.gov target=_blank>  www.fafsa.ed.go</a> no later than March 2,".concat(taxFilingYear).concat("  for priority consideration."));

    var textSixVal = "<i><u>ACTION:</u></i> Complete the ".concat(financialAidYearVal).concat(" FAFSA on-line at <a href=www.fafsa.ed.gov target=_blank>  www.fafsa.ed.go</a> including your and your parents’ information no later than March 2,".concat(taxFilingYear).concat("  for priority consideration."));


    var textSevenVal = "<p> 1) I was born before January 1, ".concat(testTextVal).concat(" 2) I will be working on a graduate degree Fall ".concat(taxFilingYear).concat("*, 3) I am married, 4) I have children who receive more than half of their support from me, 5) I have other dependents (not my children) who live with me and I provide more than half of their support, 6) both of my parents are deceased; 7) I was a ward of the court, 8) I am a veteran of the U.S. Armed Forces, or 9) I was an unaccompanied youth who was homeless."));

    var textEightVal = "<i>*If you <u>do not</u> attend college Fall ".concat(taxFilingYear).concat(" but plan to start your Master’s program Spring ").concat(YearTextVal).concat(" you are considered independent for financial aid purposes.</i>");

    $("#F0DORRFormCode").html(formCodeTextVal);
    $("#F0DORRheadingText").html(headingTextVal);
    //  $("#F0DORRTitleText").html(titleTextVal);

    $("#F0DORRTextOne").html(textOneVal);
    $("#F0DORRTextTwo").html(textTwoVal);
    $("#F0DORRTextThree").html(textThreeVal);
    $("#F0DORRTextFour").html(textFourVal);
    $("#F0DORRTextFive").html(textFiveVal);
    $("#F0DORRTextSix").html(textSixVal);
    $("#F0DORRTextSeven").html(textSevenVal);
    $("#F0DORRTextEight").html(textEightVal);

}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_DEP_OVERRIDE_RENEWAL";
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_caseId_init0 = function (scope) {
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_caseId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_caseId_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_Date_1_init0 = function (scope) {
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  CB2.value=""; 
  CB3.value="";
  CB4.enabled=false;
  CB5.enabled=false; 
  CB6.enabled=false;
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  if(CB1.value=="1"){
    CB2.mandatory=false;
    CB3.mandatory=false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  CB1.value=""; 
  CB3.value="";
  CB4.enabled=false;
  CB5.enabled=false; 
  CB6.enabled=false;
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB2_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  if(CB2.value=="1"){
    CB1.mandatory=false;
    CB3.mandatory=false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  CB4.enabled=true;
  CB5.enabled=true; 
  CB6.enabled=true;
}else{
  CB4.enabled=false;
  CB5.enabled=false; 
  CB6.enabled=false;
  CB4.value=""; 
  CB5.value=""; 
  CB6.value="";
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB3_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB3_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  if(CB3.value=="1"){
    CB2.mandatory=false;
    CB1.mandatory=false;
  }else{
     CB2.mandatory=true;
    CB1.mandatory=true;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_CB6_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_CB6_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB1_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText1.enabled = true;
    DOText1.mandatory = true;
  } else{
    DOText1.enabled = false;
    DOText1.value = "";
    DOText1.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText1.enabled = true;
    DOText1.mandatory = true;
  } else{
    DOText1.enabled = false;
    DOText1.value = "";
    DOText1.mandatory = false;
  }
}

        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOText1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOText1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOText1_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOText1_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(DOCB1.value==1){
  this.enabled=true;
}
else{
  this.enabled=false;
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB2_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText2.enabled = true;
    DOText2.mandatory = true;
  } else{
    DOText2.enabled = false;
    DOText2.value = "";
    DOText2.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText2.enabled = true;
     DOText2.mandatory = true;
  } else{
    DOText2.enabled = false;
    DOText2.value = "";
     DOText2.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB3_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText3.enabled = true;
     DOText3.mandatory = true;
  } else{
    DOText3.enabled = false;
    DOText3.value = "";
    DOText3.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText3.enabled = true;
    DOText3.mandatory = true;
  } else{
    DOText3.enabled = false;
    DOText3.value = "";
    DOText3.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB4_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText4.enabled = true;
    DOText4.mandatory = true;
  } else{
    DOText4.enabled = false;
    DOText4.value = "";
    DOText4.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText4.enabled = true;
    DOText4.mandatory = true;
  } else{
    DOText4.enabled = false;
    DOText4.value = "";
    DOText4.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB5_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText5.enabled = true;
    DOText5.mandatory = true;
  } else{
    DOText5.enabled = false;
    DOText5.value = "";
    DOText5.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_DOCB5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_DOCB5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToFinancialAid"){
  if(this.value == "1"){
    DOText5.enabled = true;
     DOText5.mandatory = true;
  } else{
    DOText5.enabled = false;
    DOText5.value = "";
     DOText5.mandatory = false;
  }
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_SupDocPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_SupDocPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_supportDoc1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_supportDoc1_valueCommit1 = function (scope) {
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_supportDoc2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_supportDoc2_valueCommit1 = function (scope) {
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

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc3.fileAttachment.value) === true){
		var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_StudentCB_valueCommit0 = function (scope) {
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
StudentSign.value = firstName.value + " " + lastName.value;
StudentDate.value = myresopnse.SERVER_DATE;
PrintStudentName.value = firstName.value + " " + lastName.value;  
//CWID_Certification.value = myresopnse.Student_Id;


},
error: function(error) {
alert("error block=" + error);
}
});

StudentSign.enabled = false;
StudentDate.enabled = false;
PrintStudentName.enabled = false;
//CWID_Certification.enabled = false;

}else{
StudentSign.value = "";
StudentDate.value = null;
PrintStudentName.value = "";
//CWID_Certification.value = "";
 
}
}
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_StudentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_StudentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_checkbox1641809485669_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_checkbox1641809485669_valueCommit0 = function (scope) {
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_FinancialAidSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_FinancialAidSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_PrintStudentCWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_PrintStudentCWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function dependency_override_renewal_dependency_override_renewal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/dependency-override-renewal/dependency-override-renewal');
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
 * @function dependency_override_renewal_dependency_override_renewal.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependency_override_renewal_dependency_override_renewal.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if (CB1.value === null && CB2.value === null && CB3.value === null){
  	showErrorModal("Alert !", "Please check at least one status");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].InstructionsPanel[0]");
} else if (CB3.value=="1" && CB4.value === null && CB5.value === null && CB6.value === null){
  	showErrorModal("Alert !", "Please check the actions");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].InstructionsPanel[0]");
} else if (DOCB1.value === null && DOCB2.value === null && DOCB3.value === null && DOCB4.value === null && DOCB5.value === null){
  	showErrorModal("Alert !", "Please check at least one statement");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].PersonalStatementPanel[0]");
}
else{
  	submitAction();
}

function submitAction(){
  aftiaDescCWID.value = firstName.value +" "+cwid.value;
  EmailSubject.value = "Dependency Override Renewal - "+cwid.value;
  HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  guideBridge.submit();
}  
        }
	}
}
