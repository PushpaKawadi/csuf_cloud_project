/**
 * @function parent_w2_statement_parent_w2_statement.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    FinancialSignaturePanel.visible = false;
    disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });
} else if (StageIndicator.value == "ToFinancialAid") {
    StudentInformation.enabled = false;
    InstructionsPanel.enabled = false;
    EmploymentStatusDetailsPanel.enabled = false;
    SupportingDocumentsPanel.visible=false;
    StudentSignaturePanel.enabled = false;
    FinancialSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    /*var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "none";*/
    loggedInDetails();
}
function loggedInDetails() {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";
            //var userValue = response.userId;
             var userValue = 'veronica.maciel';	 	  	// two Aid Year
            //var userValue = 'majesticallexi'; // one Aid Year
            //var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;
            caseID();
            getStudentDetails(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}
function caseID() {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(response) {
            caseId.value = response.CASEID;
        },
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
                var studentCWIDVal = response[0].EMPLID;
                getStudentAidYearDetails(studentCWIDVal);
                lastName.value = response[0].LAST_NAME;
                firstName.value = response[0].FIRST_NAME;
                HiddenStudentUserID.value = response[0].USERID;
                cwid.value = response[0].EMPLID;
                //studentIDNumber.value = response[0].student_ID;
                studentCWID.value = response[0].EMPLID;
                //HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = "yjayaram@fullerton.edu";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
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
                var typeOfAidYear = "";
                typeOfAidYear = getUrlParameters('aidYear');
                if (identifyAidYearFlag == "OneAidYear" && typeOfAidYear != "0" && typeOfAidYear != "1") {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                } else if (identifyAidYearFlag == "TwoAidYear" && typeOfAidYear != "0" && typeOfAidYear != "1") {
                    aidYearPopup();
                } else if (typeOfAidYear == "0" || typeOfAidYear == "1") {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                } else if (identifyAidYearFlag == "OneAidYear" && typeOfAidYear === undefined) {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                } else if (identifyAidYearFlag == "TwoAidYear" && typeOfAidYear === undefined) {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                } else {
                    showErrorModal("Alert !", "No matching records found for the Aid Year");
                }
            } else {
                showErrorModal("Alert !", "No matching records found");
            }
        }
    });
}
function singleAidYear(typeOfAidYear, identifyAidYearFlag) {
    var formCodeVal = "";
   // var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";

    if (typeOfAidYear == '0' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0W2SP";
        formCodeVal = "F0W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '0' && identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0W2SP";
        formCodeVal = "F0W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '1' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1W2SP";
        formCodeVal = "F1W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '1' && identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1W2SP";
        formCodeVal = "F1W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0W2SP";
        formCodeVal = "F0W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1W2SP";
        formCodeVal = "F1W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
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
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0W2SP";
        formCodeVal = "F0W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };
    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1W2SP";
        formCodeVal = "F1W2SP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };
}
if (StageIndicator.value !== null) {
    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}
function getFAFSAFinancialAidYear(aidYearValue) {
    var formCodeTextVal;
    var titleTextVal;
    var financialAidYearVal = financialAidYear;
    if (aidYearValue == "2021-2022") {
        formCodeTextVal = "<p><b>F0W2SP</b></p>";
        titleTextVal = "<p><b>PARENT 2019 W-2 STATEMENT (2021-2022)</b></p>";
    } else if (aidYearValue == "2022-2023") {
        formCodeTextVal = "<p><b>F1W2SP</b></p>";
        titleTextVal = "<p><b>PARENT 2020 W-2 STATEMENT (2022-2023)</b></p>";
    }
    var textOneVal = "";
    if (aidYearValue == "2021-2022") {
        textOneVal = "<p>Additional parental information is needed before we can continue with the processing of the ".concat(aidYearValue).concat(" Free Application for Federal Student Aid (FAFSA). See definition of a parent below.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></p>");
    }
    if (aidYearValue == "2022-2023") {
        textOneVal = "<p>Additional parental information is needed before we can continue with the processing of the ".concat(aidYearValue).concat(" Free Application for Federal Student Aid (FAFSA). See definition of a parent below.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></p>");
    }
    var textTwoVal = "";
    if (aidYearValue == "2021-2022") {
        textTwoVal = "<p>Select the category below which best describes your employment status in 2019 and provide the requested documentation:</p>";
    }
    if (aidYearValue == "2022-2023") {
        textTwoVal = "<p>Select the category below which best describes your employment status in 2020 and provide the requested documentation:</p>";
    }
    var textThreeVal = "";
    if (aidYearValue == "2021-2022") {
        textThreeVal = "<p>Employed in 2019 <b><i>and</i></b> filed a federal tax return:</p>";
    }
    if (aidYearValue == "2022-2023") {
        textThreeVal = "<p>Employed in 2020 <b><i>and</i></b> filed a federal tax return:</p>";
    }
    var textFourVal = "";
    if (aidYearValue == "2021-2022") {
        textFourVal = "<p>Employed in 2019 and <b><i>not required</i></b> to file a federal tax return.</p>";
    }
    if (aidYearValue == "2022-2023") {
        textFourVal = "<p>Employed in 2020 and <b><i>not required</i></b> to file a federal tax return.</p>";
    }
    var textFiveVal = "";
    if (aidYearValue == "2021-2022") {
        textFiveVal = "<p>Employed in 2019, but no W-2 or 1099 form(s) were issued to me/us (explain below).</p>";
    }
    if (aidYearValue == "2022-2023") {
        textFiveVal = "<p>Employed in 2020, but no W-2 or 1099 form(s) were issued to me/us (explain below).</p>";
    }
    var textSixVal = "";
    if (aidYearValue == "2021-2022") {
        textSixVal = "<p>Self-employed in 2019, and I/we have attached all photocopies of W-2 or 1099 form(s).</p>";
    }
    if (aidYearValue == "2022-2023") {
        textSixVal = "<p>Self-employed in 2020, and I/we have attached all photocopies of W-2 or 1099 form(s).</p>";
    }
    var textSevenVal = "";
    if (aidYearValue == "2021-2022") {
        textSevenVal = "<p>Self-employed in 2019, and no W-2 or 1099 form(s) were issued to me/us.</p>";
    }
    if (aidYearValue == "2022-2023") {
        textSevenVal = "<p>Self-employed in 2020, and no W-2 or 1099 form(s) were issued to me/us.</p>";
    }
    var textEightVal = "";
    if (aidYearValue == "2021-2022") {
        textEightVal = "<p>Did not work in 2019, therefore, no W-2 or 1099 forms were issued.</p>";
    }
    if (aidYearValue == "2022-2023") {
        textEightVal = "<p>Did not work in 2020, therefore, no W-2 or 1099 forms were issued.</p>";
    }
    var textNineVal = "";
    if (aidYearValue == "2021-2022") {
        textNineVal = "<p><i><b>Must:</b> Attach all 2019 W2s equaling the value listed.</i></p>";
    }
    if (aidYearValue == "2022-2023") {
        textNineVal = "<p><i><b>Must:</b> Attach all 2020 W2s equaling the value listed.</i></p>";
    }
    var textTenVal = "";
    if (aidYearValue == "2021-2022") {
        textTenVal = "<p><i><b>Must:</b> Attach all 2019 W2s equaling the value listed.</i></p>";
    }
    if (aidYearValue == "2022-2023") {
        textTenVal = "<p><i><b>Must:</b> Attach all 2020 W2s equaling the value listed.</i></p>";
    }
    var textElevenVal = "";
    if (aidYearValue == "2021-2022") {
        textElevenVal = "<p><i><b>Must:</b> Attach all 2019 W2s.</i></p>";
    }
    if (aidYearValue == "2022-2023") {
        textElevenVal = "<p><i><b>Must:</b> Attach all 2020 W2s.</i></p>";
    }
    var cellOneVal = "";
    if (aidYearValue == "2021-2022") {
        cellOneVal = "<p>$12,200 if parents claimed you as dependent</p>";
    }
    if (aidYearValue == "2022-2023") {
        cellOneVal = "<p>$12,400 if parents claimed you as dependent</p>";
    }
    var cellTwoVal = "";
    if (aidYearValue == "2021-2022") {
        cellTwoVal = "<p>$12,200 if single</p>";
    }
    if (aidYearValue == "2022-2023") {
        cellTwoVal = "<p>$12,400 if single</p>";
    }
    var cellThreeVal = "";
    if (aidYearValue == "2021-2022") {
        cellThreeVal = "<p>$18,350 if head of household</p>";
    }
    if (aidYearValue == "2022-2023") {
        cellThreeVal = "<p>$18,650 if head of household</p>";
    }
    var cellFourVal = "";
    if (aidYearValue == "2021-2022") {
        cellFourVal = "<p>$24,400 if married, filing jointly</p>";
    }
    if (aidYearValue == "2022-2023") {
        cellFourVal = "<p>$24,800 if married, filing jointly</p>";
    }
    $("#formCodeText").html(formCodeTextVal);
    $("#HeadingText").html(titleTextVal);
    $("#f0w2ssInstructionsText").html(textOneVal);
    $("#f0w2ssActionText").html(textTwoVal);
    $("#checkBox1").html(textThreeVal);
    $("#checkBox2").html(textFourVal);
    $("#checkBox3").html(textFiveVal);
    $("#checkBox4").html(textSixVal);
    $("#checkBox5").html(textSevenVal);
    $("#checkBox6").html(textEightVal);
    $("#mustText1").html(textNineVal);
    $("#mustText2").html(textTenVal);
    $("#mustText3").html(textElevenVal);
    $("#cell1").html(cellOneVal);
    $("#cell2").html(cellTwoVal);
    $("#cell3").html(cellThreeVal);
    $("#cell4").html(cellFourVal);
}
function checkforDuplicateSubmissions(formCodeVal) {
    var tableName = "AEM_STUDENT_W2_STATEMENT";
    var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
    var formCodeColumnName = "FORM_CODE";
    var faDecision = "Approved";
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
 * @function parent_w2_statement_parent_w2_statement.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_Date_1_init0 = function (scope) {
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
    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    Date_1.value = d;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_FederalTaxReturnFiled_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_FederalTaxReturnFiled_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    NotReqFederalTaxReturn.value = null;
    W2FormNoIssue.value = null;
    SelfAttachW2Forms.value = null;
    SelfNoW2FormIssued.value = null;
    DidNotWork.value = null;
    Other.value = null;
    OtherExplain.value = null;
    CBExplanation.value = null;
    CheckLine7.enabled = true;
    CheckLine1.enabled = true;
} else {
    CheckLine7.enabled = false;
    CheckLine7.value = null;
    CheckLine1.enabled = false;
    CheckLine1.value = null;
    Line7.value = null;
    Line1.value = null;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_CheckLine7_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_CheckLine7_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_CheckLine7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_CheckLine7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    Line7.enabled = true;
} else {
    Line7.enabled = false;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_Line7_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_Line7_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_CheckLine1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_CheckLine1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_CheckLine1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_CheckLine1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    Line1.enabled = true;
} else {
    Line1.enabled = false;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_Line1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_Line1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_NotReqFederalTaxReturn_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_NotReqFederalTaxReturn_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    FederalTaxReturnFiled.value = null;
    Line7.value = null;
    Line1.value = null;
    CheckLine7.value = null;
    CheckLine1.value = null;
    W2FormNoIssue.value = null;
    SelfAttachW2Forms.value = null;
    SelfNoW2FormIssued.value = null;
    DidNotWork.value = null;
    Other.value = null;
    OtherExplain.value = null;
    CBExplanation.value = null;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_W2FormNoIssue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_W2FormNoIssue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    FederalTaxReturnFiled.value = null;
    Line7.value = null;
    Line1.value = null;
    CheckLine7.value = null;
    CheckLine1.value = null;
    NotReqFederalTaxReturn.value = null;
    SelfAttachW2Forms.value = null;
    SelfNoW2FormIssued.value = null;
    DidNotWork.value = null;
    Other.value = null;
    OtherExplain.value = null;
    CBExplanation.enabled=true;
} else{
  CBExplanation.value = null;
  CBExplanation.enabled=false;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_CBExplanation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_CBExplanation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_SelfAttachW2Forms_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_SelfAttachW2Forms_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    FederalTaxReturnFiled.value = null;
    Line7.value = null;
    Line1.value = null;
    NotReqFederalTaxReturn.value = null;
    W2FormNoIssue.value = null;
    SelfNoW2FormIssued.value = null;
    DidNotWork.value = null;
    Other.value = null;
    OtherExplain.value = null;
    CBExplanation.value = null;
    CheckLine7.value = null;
    CheckLine1.value = null;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_SelfNoW2FormIssued_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_SelfNoW2FormIssued_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    FederalTaxReturnFiled.value = null;
    Line7.value = null;
    Line1.value = null;
    CheckLine7.value = null;
    CheckLine1.value = null;
    NotReqFederalTaxReturn.value = null;
    W2FormNoIssue.value = null;
    SelfAttachW2Forms.value = null;
    DidNotWork.value = null;
    Other.value = null;
    OtherExplain.value = null;
    CBExplanation.value = null;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_DidNotWork_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_DidNotWork_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    FederalTaxReturnFiled.value = null;
    Line7.value = null;
    Line1.value = null;
    CheckLine7.value = null;
    CheckLine1.value = null;
    NotReqFederalTaxReturn.value = null;
    W2FormNoIssue.value = null;
    SelfAttachW2Forms.value = null;
    SelfNoW2FormIssued.value = null;
    Other.value = null;
    OtherExplain.value = null;
    CBExplanation.value = null;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_Other_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_Other_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    FederalTaxReturnFiled.value = null;
    Line7.value = null;
    Line1.value = null;
    CheckLine7.value = null;
    CheckLine1.value = null;
    NotReqFederalTaxReturn.value = null;
    W2FormNoIssue.value = null;
    SelfAttachW2Forms.value = null;
    SelfNoW2FormIssued.value = null;
    DidNotWork.value = null;
    OtherExplain.enabled = true;
    CBExplanation.value = null;
} else {
    OtherExplain.enabled = false;
    OtherExplain.value = null;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_OtherExplain_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_OtherExplain_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_SupportingDocumentsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
} else {
    this.visible = false;
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_supportDoc1_valueCommit0 = function (scope) {
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
        nonMedSupDocMessage.visible = false;
    }
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = supportDoc2.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        nonMedSupDocMessage.visible = false;
    }
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(supportDoc3.fileAttachment.value) === true) {
        var doc2NewName = supportDoc3.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        supportDoc3.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc3.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        nonMedSupDocMessage.visible = false;
    }
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                studentSignature.value = firstName.value + " " + lastName.value;
                studentSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        studentSignDate.enabled = false;
        studentSignature.enabled = false;
    } else {
        studentSignDate.value = "";
        studentSignature.value = "";
    }
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_evaluator_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToFinancialAid") {
    if (this.value == "1") {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                staffSignature.value = myresponse.userName;
                staffSignDate.value = myresponse.SERVER_DATE;
                financialAidAssignee.value = myresponse.userId;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        staffSignDate.enabled = false;
        staffSignature.enabled = false;
    } else {
        staffSignDate.value = "";
        staffSignature.value = "";
        financialAidAssignee.value = "";
    }
}
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_w2_statement_parent_w2_statement.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_W2_Statement.pdf';		
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
 * @function parent_w2_statement_parent_w2_statement.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/parent-w2-statement/parent-w2-statement');
            //jsonData.append('fileName', "(" + hidden_cwid.value + ")" + "_" + Date.now());    
            jsonData.append('fileName', "(" + Date.now() + ")");      
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
 * @function parent_w2_statement_parent_w2_statement.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_w2_statement_parent_w2_statement.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (parentEmail.value === null) {
    showErrorModal("Alert !", "Please enter the parent email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
} else if (parentEmail.value != confirmParentEmail.value) {
    showErrorModal("Alert !", "Parent email does not match");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
} else if (checkbox1672118811058.value === null){
        checkbox1672118811058.mandatory = true;
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].InstructionsPanel[0].checkbox1672118811058[0]");
        showErrorModal("Alert", "Please read the Instructions carefully & check the Checkbox below");
} else if (FederalTaxReturnFiled.value === null && NotReqFederalTaxReturn.value === null && W2FormNoIssue.value === null && SelfAttachW2Forms.value === null && SelfNoW2FormIssued.value === null && DidNotWork.value === null && Other.value === null) {
    showErrorModal("Alert !", "Please select at least one option from the given categories");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].EmploymentStatusDetailsPanel[0]");
} else if (Other.value !== null && OtherExplain.value === null) {
    showErrorModal("Alert !", "Please enter the other document list");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].EmploymentStatusDetailsPanel[0].OtherExplain[0]");
} else if (FederalTaxReturnFiled.value !== null && CheckLine7.value === null && CheckLine1.value === null) {
    showErrorModal("Alert !", "Please select at least one option from Filed Federal Tax Return");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].EmploymentStatusDetailsPanel[0].CheckLine7[0]");
} else if (CheckLine7.value !== null && Line7.value === null) {
    showErrorModal("Alert !", "Please enter the value listed on line 7");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].EmploymentStatusDetailsPanel[0].Line7[0]");
} else if (CheckLine1.value !== null && Line1.value === null) {
    showErrorModal("Alert !", "Please enter the value listed on line 1");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].EmploymentStatusDetailsPanel[0].Line1[0]");
} else {
    submitAction();
}

function submitAction() {
    aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + cwid.value;
    EmailSubject.value = "Test - Parent W-2 Statement - (" + cwid.value + ")";
    var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
    HiddenStudentEmail.value = testEmail;
  if(aidYear.value == "2022"){
    	documentNameForAdobeSign.value = "Parent W-2 Statement - F0W2SP";
  }
  else if(aidYear.value == "2023"){
    	documentNameForAdobeSign.value = "Parent W-2 Statement - F1W2SP";
  }
    guideBridge.submit();
}
        }
	}
}
