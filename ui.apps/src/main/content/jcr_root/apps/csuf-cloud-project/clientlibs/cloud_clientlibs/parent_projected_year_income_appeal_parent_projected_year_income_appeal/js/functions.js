/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    FinancialSignaturePanel.visible = false;
    FinancialSignaturePanel.enabled = false;
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });
    disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
} else if (StageIndicator.value == "ToFinancialAid") {
    StudentInformation.enabled = false;
   // RequiredDocumentsAppealPanel.visible = false;
//RequiredDocumentsAppealPanel.enabled = false;
    PossibleReasonsforAppealTab.enabled = false;
    DocumentsRequiredTab.enabled = false;
    IncomeTab.enabled = false;
    ParentAsetInfoPanel.enabled = false;
    SupportingDocuments.visible=false;
    SupportingDocuments.enabled = false;
    StudentSignaturePanel.enabled = false;
    FinancialSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_guideRootPanel_init1 = function (scope) {
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
            //var userValue = 'majesticallexi'; // one Aid Year
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
                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                SCwid.value = studentCWID;
                cwid.value = studentCWID;
                HiddenStudentUserID.value = response[0].USERID;                
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                //HiddenStudentEmail.value = response[0].PREF_EMAIL;
                StudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
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
                } else if (identifyAidYearFlag == "OneAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
                    singleAidYear();
                } else if (identifyAidYearFlag == "TwoAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
                    singleAidYear();  
                  //aidYearPopup();
                } else {
                    singleAidYear(); 
                  //showErrorModal("Alert !", "No matching records found for the Aid Year");
                }
            } else {
               singleAidYear(); 
              //showErrorModal("Alert !", "No matching records found");
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
        aidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"PRJP";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"PRJP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"PRJP";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"PRJP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };
}

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = ""; 
  
   var financialAidvalues = getAidYearValuesOnSingleAidYear(); 
  
    if (typeOfAidYear == '0') {
        financialAidYearVal = financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0PRJP";
        formCodeVal = "F0PRJP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PRJP";
        formCodeVal = "F1PRJP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"PRJP";
        formCodeVal = financialAidvalues.FormCodeGeneral+"PRJP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }


}


if (StageIndicator.value !== null) {
    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = aidYear.value;
    var headingTextVal = "<p><b>PARENT INCOME APPEAL ".concat(financialAidYear).concat("</p></b>");
    var formTextVal = "<p><b>"+formCode.value+"</b></p>"; 
  
    var aidYearVal = aidYear.value;
    var aidYearVal2 = aidYear.value-3;
    var textChange = getUniqueStatements("PARENT_INCOME_APPEAL",aidYearVal,""); 
  
    var Deadline1Change = textChange.TextDeadline1;
    var Deadline2Change = textChange.TextDeadline2;
  
    Deadline1.value=Deadline1Change;
    Deadline2.value=Deadline2Change;
  
    var DeadlineTextVal="<p>Appeal Deadlines: <b>".concat(Deadline1Change).concat("</b> if attending Fall only | <b>".concat(Deadline2Change).concat("</b> if attending Academic Year</p>"));
  
    var TextOneVal="<p>Other, including one time income received in ".concat(aidYearVal2).concat(" no longer available</p>");
  
    $("#PRJPformCodeText").html(formTextVal);
    $("#PRJPHeadingText").html(headingTextVal);
    $("#PRJPDeadlineText").html(DeadlineTextVal);
    $("#PRJPTextOne").html(TextOneVal);

}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_PARENT_INCOME_APPEAL";
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_caseId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_caseId_init1 = function (scope) {
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_Date_1_init0 = function (scope) {
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentCheck1CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentCheck1CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  DocumentYear1.enabled=true;
  DocumentYear1.mandatory=true;
}else {
  DocumentYear1.enabled=false;
  DocumentYear1.mandatory=false;
  DocumentYear1.value=null;
}
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentYear1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentYear1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentCheck2CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentCheck2CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  DocumentYear2.enabled=true;
  DocumentYear2.mandatory=true;
}else {
  DocumentYear2.enabled=false;
  DocumentYear2.mandatory=false;
  DocumentYear2.value=null;
}
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentYear2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentYear2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentOtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentOtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  DocumentOther.enabled=true;
  DocumentOther.mandatory=true;
}else {
  DocumentOther.enabled=false;
  DocumentOther.mandatory=false;
  DocumentOther.value=null;
}

        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentOther_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_DocumentOther_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_supportDoc1_valueCommit0 = function (scope) {
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
  if(this.value !== null){
    supDocAttachText.visible = false;
  } 
}
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_supportDoc2_valueCommit0 = function (scope) {
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
  if(this.value !== null){
    supDocAttachText.visible = false;
  } 
}
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_supportDoc3_valueCommit0 = function (scope) {
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
  if(this.value !== null){
    supDocAttachText.visible = false;
  } 
}
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_StudentCB_valueCommit0 = function (scope) {
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_evaluator_signChk_valueCommit0 = function (scope) {
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_Income_Appeal_Adobe_Sign.pdf';		
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/parent-projected-year-income-appeal/parent-projected-year-income-appeal');
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
 * @function parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_projected_year_income_appeal_parent_projected_year_income_appeal.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (parentEmail.value === null) {
    showErrorModal("Alert !", "Please enter the parent email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
} else if (parentEmail.value != confirmParentEmail.value) {
    showErrorModal("Alert !", "Parent email does not match");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
} else if (Reason1CB.value === null && Reason2CB.value === null && Reason3CB.value === null && Reason4CB.value === null && Reason5CB.value === null && Reason6CB.value === null) {
    showErrorModal("Alert !", "Please select the Reason for Appeal");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PossibleReasonsforAppealTab[0]");
} else if (DocumentCheck1CB.value === null && DocumentCheck2CB.value === null && DocumentCheck3CB.value === null && DocumentCheck4CB.value === null && DocumentCheck5CB.value === null && DocumentCheck6CB.value === null && DocumentCheck7CB.value === null && DocumentCheck8CB.value === null && DocumentCheck9CB.value === null && DocumentCheck10CB.value === null && DocumentCheck11CB.value === null && DocumentOtherCB.value === null) {
    showErrorModal("Alert !", "Please select the Required Documents");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].DocumentsRequiredTab[0]");
} else {
    submitAction();
}

function submitAction() {
    aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + cwid.value;
    EmailSubject.value = "Test - Parent Income Appeal - (" + cwid.value + ")";
    documentNameForAdobeSign.value = "Parent Income Appeal - " + formCode.value;
    HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
    guideBridge.submit();
}
        }
	}
}
