/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    FinancialSignaturePanel.visible = false;
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });
} else if (StageIndicator.value == "ToFinancialAid") {
    StudentInformation.enabled = false;
    RequestForCancellationPanel.enabled = false;
    StudentSignaturePanel.enabled = false;
    FinancialSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_guideRootPanel_init1 = function (scope) {
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
            var userValue = response.userId;
            // var userValue = 'veronica.maciel';	 	  	// two Aid Year
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
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
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
        formCode.value = "F0GONE";
        formCodeVal = "F0GONE";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '0' && identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0GONE";
        formCodeVal = "F0GONE";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '1' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1GONE";
        formCodeVal = "F1GONE";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (typeOfAidYear == '1' && identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1GONE";
        formCodeVal = "F1GONE";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0GONE";
        formCodeVal = "F0GONE";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if (identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1GONE";
        formCodeVal = "F1GONE";
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
        formCode.value = "F0GONE";
        formCodeVal = "F0GONE";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };
    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1GONE";
        formCodeVal = "F1GONE";
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
    var instructionsText;
    var cb1;
    var cb2;
    var cb3;
    var cb4;
    var financialAidYearVal = financialAidYear;
  
if (aidYearValue == "2021-2022") {
    formCodeTextVal = "<p><b>F0GONE</b></p>";
    titleTextVal = "<p><b>REQUEST TO CANCEL FINANCIAL AID PROCESSING (2021-2022)</b></p>";
    instructionsText = "<p>Use this form to request <b>full cancellation</b> of your financial aid application for the 2021-2022 academic year. To revise your aid award to <b>one semester</b> complete the Award Adjustment Appeal Form.</p>";
    cb1 = "<p>I will not attend Cal State Fullerton during the 2021-2022 academic year. Please cancel my financial aid application and, if funds have been awarded to me, please cancel all awards.</p>";
    cb2 = "<p>I plan to attend CSUF but wish to cancel the processing of my financial aid for 2021-2022.</p>";
    cb3 = "<p>I attended classes in Fall 2021</p>";
    cb4 = "<p>I attended classes in Spring 2022</p>";
} else if (aidYearValue == "2022-2023") {
    formCodeTextVal = "<p><b>F1GONE</b></p>";
    titleTextVal = "<p><b>REQUEST TO CANCEL FINANCIAL AID PROCESSING (2022-2023)</b></p>";
    instructionsText = "<p>Use this form to request <b>full cancellation</b> of your financial aid application for the 2022-2023 academic year. To revise your aid award to <b>one semester</b> complete the Award Adjustment Appeal Form.</p>";
    cb1 = "<p>I will not attend Cal State Fullerton during the 2022-2023 academic year. Please cancel my financial aid application and, if funds have been awarded to me, please cancel all awards.</p>";
    cb2 = "<p>I plan to attend CSUF but wish to cancel the processing of my financial aid for 2022-2023.</p>";
    cb3 = "<p>I attended classes in Fall 2022</p>";
    cb4 = "<p>I attended classes in Spring 2023</p>";
}

$("#formCodeText").html(formCodeTextVal);
$("#HeadingText").html(titleTextVal);
$("#InstructionsText").html(instructionsText);
$("#CB1").html(cb1);
$("#CB2").html(cb2);
$("#CB3").html(cb3);
$("#CB4").html(cb4);
}

function checkforDuplicateSubmissions(formCodeVal) {
    var tableName = "AEM_REQ_CANCEL_FIN_AID_PROC";
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
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_Date_1_init0 = function (scope) {
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
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_NotAttendCSUF_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_NotAttendCSUF_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    AttendCSUF.value = null;
}

        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_AttendCSUF_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_AttendCSUF_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    NotAttendCSUF.value = null;
}
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_StudentCB_valueCommit0 = function (scope) {
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
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_evaluator_signChk_valueCommit0 = function (scope) {
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
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/f1gone-request-to-cancel-financial-aid-processing/request-to-cancel-financial-aid-processing');
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
 * @function f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1gone_request_to_cancel_financial_aid_processing_request_to_cancel_financial_aid_processing.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (NotAttendCSUF.value === null && AttendCSUF.value === null) {
    showErrorModal("Alert !", "Please check the appropriate box");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].RequestForCancellationPanel[0]");
} else if (AttendFall.value === null && AttendSpring.value === null) {
    showErrorModal("Alert !", "Please check all that apply");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].RequestForCancellationPanel[0]");
} else {
    submitAction();
}
function submitAction() {
    aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + cwid.value;
    EmailSubject.value = "Test - Request lo cancel Financial Aid Processing - (" + cwid.value + ")";
    var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
    HiddenStudentEmail.value = testEmail;
    guideBridge.submit();
}
        }
	}
}
