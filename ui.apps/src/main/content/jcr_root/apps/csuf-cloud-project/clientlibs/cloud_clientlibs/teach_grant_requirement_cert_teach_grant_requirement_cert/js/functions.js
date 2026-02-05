/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    Instructions.enabled = true;
    BasicInformation.enabled = true;
    FinancialAidPanel.visible = false;
    StudentSignaturePanel.enabled = true;
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });
}

if (StageIndicator.value == "ToFinancialAid") {
    Instructions.visible = true;
    Instructions.enabled = false;
    BasicInformation.visible = true;
    BasicInformation.enabled = false;
    StudentSignaturePanel.visible = true;
    StudentSignaturePanel.enabled = false;
    FinancialAidPanel.enabled = true;
    FinancialAidPanel.visible = true;
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";
            var userValue = response.userId;
            //  var userValue = 'mariana2'; // two Aid Year
            //  var userValue = 'majesticallexi'; // one Aid Year
            //  var userValue = 'mchoi88';			 	// no Aid Year
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
                PrintStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //    PrintStudentCWID.value = response[0].EMPLID;
                studentIDNumber.value = response[0].EMPLID;
                //  studentIDNumber.value = response[0].EMPLID;
                // HiddenStudentEmail.value = response[0].PREF_EMAIL;;
                HiddenStudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                CWID_Certification.value = response[0].EMPLID;
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



function getStudentAidYearDetails(studentIDNumber) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: studentIDNumber
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

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";

    if (typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0TCHG";
        formCodeVal = "F0TCHG";
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1TCHG";
        formCodeVal = "F1TCHG";
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0TCHG";
        formCodeVal = "F0TCHG";
        //financialAidYearVal1.value = "1997";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }
    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getFinancialAidYear(aidYearValue);
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
        formCode.value = "F0TCHG";
        formCodeVal = "F0TCHG";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        formCode.value = "F1TCHG";
        formCodeVal = "F1TCHG";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);


    };

}

function getFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);

    var formCodeTextVal = "";
    if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0TCHG</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal = "<p><b>F1TCHG</b></p>";
    }

    //var titleTextVal = "<p><b>TEACH GRANT REQUIREMENT CERTIFICATION FORM".concat(" " +taxFilingYear);
    var titleTextVal = "<p><b>TEACH GRANT REQUIREMENT CERTIFICATION FORM".concat(" (" + financialAidYearVal + ")");
    var headingTextVal = "<p><b>TEACH GRANT REQUIREMENT CERTIFICATION FORM ".concat(" (" + financialAidYearVal + ")");
    var textOneVal = " I have filed a FAFSA for the ".concat(financialAidYearVal).concat(" award year at CSU, Fullerton. I Understand I must meet the Federal definition of an 'eligible student' to receive this grant.");

    $("#formCodeText").html(formCodeTextVal);
    $("#teachHeadingText").html(titleTextVal);
    $("#f0ctxsTitleText").html(headingTextVal);
    $("#f0ctxsTextOne").html(textOneVal);
}



function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_TEACH_GRANT_REQ_CERT";
    var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
    var formCodeColumnName = "FORM_CODE";
    var faDecision = "1";
    var financialAidYearColumn = "FINANCIAL_AID_YEAR";
    if (StageIndicator.value === null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getCitizenShipData",
            data: {
                action: 'CV_UPDATED_DUPLICATE_CHECK',
                cwid: cwid.value,
                financialAidYear: financialAidYearVal,
                faDecisionColumnName: financialAidDecisionColumnName,
                tableName: tableName,
                formCodeColumnName: formCodeColumnName,
                formCode: formCodeVal,
                faDecision: faDecision,
                financialAidYearColumn: financialAidYearColumn
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length >= 1) {
                    showErrorModal("Alert !", "Duplicate submissions are not allowed");
                    submit1574920582933.enabled = false;
                }
            },
        });
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";
            var userValue = response.userId;
            //  var userValue = 'mariana2'; // two Aid Year
            //  var userValue = 'majesticallexi'; // one Aid Year
            //  var userValue = 'mchoi88';			 	// no Aid Year
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
                PrintStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //    PrintStudentCWID.value = response[0].EMPLID;
                studentIDNumber.value = response[0].EMPLID;
                //  studentIDNumber.value = response[0].EMPLID;
                // HiddenStudentEmail.value = response[0].PREF_EMAIL;;
                HiddenStudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                CWID_Certification.value = response[0].EMPLID;
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



function getStudentAidYearDetails(studentIDNumber) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: studentIDNumber
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
                   // showErrorModal("Alert !", "No matching records found for the Aid Year");
                    singleAidYear();
                }
            } else {
                //showErrorModal("Alert !", "No matching records found");
                singleAidYear();
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
        financialAidYearVal =  financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero-1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0TCHG";
        formCodeVal = "F0TCHG";
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne-1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1TCHG";
        formCodeVal = "F1TCHG";
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral-1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"TCHG";
        formCodeVal = financialAidvalues.FormCodeGeneral+"TCHG";
        //financialAidYearVal1.value = "1997";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }
    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getFinancialAidYear(aidYearValue);
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
        aidYear.value = financialAidvalues.AidYearOne-1;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"TCHG";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"TCHG";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo-1;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"TCHG";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"TCHG";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        getFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);


    };
}

function getFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);

    var formCodeTextVal = "<p><b>"+formCode.value+"</b></p>";
    
    //var titleTextVal = "<p><b>TEACH GRANT REQUIREMENT CERTIFICATION FORM".concat(" " +taxFilingYear);
    var titleTextVal = "<p><b>TEACH GRANT REQUIREMENT CERTIFICATION FORM".concat(" (" + financialAidYearVal + ")");
    var headingTextVal = "<p><b>TEACH GRANT REQUIREMENT CERTIFICATION FORM ".concat(" (" + financialAidYearVal + ")");
    var textOneVal = " I have filed a FAFSA for the ".concat(financialAidYearVal).concat(" award year at CSU, Fullerton. I Understand I must meet the Federal definition of an 'eligible student' to receive this grant.");

    $("#formCodeText").html(formCodeTextVal);
    $("#teachHeadingText").html(titleTextVal);
    $("#f0ctxsTitleText").html(headingTextVal);
    $("#f0ctxsTextOne").html(textOneVal);
}



function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_TEACH_GRANT_REQ_CERT";
    var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
    var formCodeColumnName = "FORM_CODE";
    var faDecision = "1";
    var financialAidYearColumn = "FINANCIAL_AID_YEAR";
    if (StageIndicator.value === null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getCitizenShipData",
            data: {
                action: 'CV_UPDATED_DUPLICATE_CHECK',
                cwid: cwid.value,
                financialAidYear: financialAidYearVal,
                faDecisionColumnName: financialAidDecisionColumnName,
                tableName: tableName,
                formCodeColumnName: formCodeColumnName,
                formCode: formCodeVal,
                faDecision: faDecision,
                financialAidYearColumn: financialAidYearColumn
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length >= 1) {
                    showErrorModal("Alert !", "Duplicate submissions are not allowed");
                    submit1574920582933.enabled = false;
                }
            },
        });
    }
}

        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            caseId.value = myresponse.CASEID;
        }
    });
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_TeachGrantCounselingCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_TeachGrantCounselingCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                TeachGrantCounseling_Completed.value = myresopnse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        TeachGrantCounseling_Completed.enabled = false;
    } else {
        TeachGrantCounseling_Completed.value = "";
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_TeachGrantCounselingCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_TeachGrantCounselingCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == "1") {
        TeachGrantCounseling_Completed.enabled = true;
        TeachGrantCounseling_Completed.mandatory = true;
    } else {
        TeachGrantCounseling_Completed.value = "";
        TeachGrantCounseling_Completed.enabled = false;
        TeachGrantCounseling_Completed.mandatory = false;
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_TeachGrantCounseling_Completed_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_TeachGrantCounseling_Completed_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled=false;
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_AgreementServeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_AgreementServeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                AgreementServe_Completed.value = myresopnse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        AgreementServe_Completed.enabled = false;
    } else {
        AgreementServe_Completed.value = "";
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_AgreementServeCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_AgreementServeCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == "1") {
        AgreementServe_Completed.enabled = true;
        AgreementServe_Completed.mandatory = true;
    } else {
        AgreementServe_Completed.value = "";
        AgreementServe_Completed.enabled = false;
        AgreementServe_Completed.mandatory = false;
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_AgreementServe_Completed_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_AgreementServe_Completed_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled=false;
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc1.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc1.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc1.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc1.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc3.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc3.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc3.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_checkbox1641379290513_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_checkbox1641379290513_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                Student_Sign.value = firstName.value + " " + lastName.value;
                Student_Date.value = myresopnse.SERVER_DATE;
                PrintStudentName.value = firstName.value + " " + lastName.value;
                CWID_Certification.value = studentIDNumber.value;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        Student_Sign.enabled = false;
        Student_Date.enabled = false;
        PrintStudentName.enabled = false;
        CWID_Certification.value = false;
    } else {
        Student_Sign.value = "";
        Student_Date.value = null;
        PrintStudentName.value = "";
        CWID_Certification.value = "";
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_Student_Sign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_Student_Sign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_Student_Date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_Student_Date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_checkbox1641809485669_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_checkbox1641809485669_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToFinancialAid") {
    if (this.value == 1) {
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
    } else {
        FinancialAidSign.value = "";
        FinancialAidSignDate.value = null;
        financialAidAssignee.value = "";
    }
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_FinancialAidSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_FinancialAidSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_studentIDNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_studentIDNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_CWID_Certification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_CWID_Certification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_PrintStudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_PrintStudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_EmailSubject_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_EmailSubject_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_HiddenStudentEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_HiddenStudentEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_aftiaDescCWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_aftiaDescCWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/teach-grant-requirement-cert/teach_grant_requirement_cert.html');
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
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (GPACB.value === null && FAFSACB.value === null && LowIncomeSchoolCB.value === null && SubjectAreaCB.value === null && TeachGrantCounselingCB.value === null && AgreementServeCB.value === null && KeepTechGrantCB.value === null && FederalDirectCB.value === null && LoanCB.value === null && FederalRegulationsCB.value === null && EligibleCB.value === null) {
    showErrorModal("Alert !", "Please check the checkboxes that are applicable");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formPanel[0].Instructions[0]");
}
/*if (GPACB.value === null || FAFSACB.value === null || LowIncomeSchoolCB.value === null || SubjectAreaCB.value === null || TeachGrantCounselingCB.value === null || AgreementServeCB.value === null || KeepTechGrantCB.value === null || FederalDirectCB.value === null || LoanCB.value === null || FederalRegulationsCB.value === null || EligibleCB.value === null ){
    showErrorModal("Alert !", "Please select the section");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Instructions[0]");
}*/
else {
    submitAction();
}

function submitAction() {
    aftiaDescCWID.value = firstName.value + " " + cwid.value;
    EmailSubject.value = "Test - TEACH Grant Requirement Cert - " + cwid.value;
    HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
    guideBridge.submit();
}
        }
	}
}
/**
 * @function teach_grant_requirement_cert_teach_grant_requirement_cert.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_requirement_cert_teach_grant_requirement_cert.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            
if (studentIDNumber.value !== null ) {
    getPdf(); 
 } else{
   
   showErrorModal("Alert!","Please enter CWID");   
    
 }

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/finance-doa-access-request-form/finance-doa-access-request-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', firstName.value+"_"+lastNamea.value + "(" + studentIDNumber.value + ")" + "_" + Date.now());                    
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
