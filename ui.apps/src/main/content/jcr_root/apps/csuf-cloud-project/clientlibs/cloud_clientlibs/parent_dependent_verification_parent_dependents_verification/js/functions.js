/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_guideRootPanel_init0 = function (scope) {
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
  
        DependentsVerificationTab.visible = true;
        DependentsVerificationTab.enabled = false;
  
    StudentSignaturePanel.enabled = false;
    SupportingDocumentsPanel.visible = false;
    FinancialSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
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
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

debugger;
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
              debugger;
                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                HiddenStudentUserID.value = response[0].USERID;
                studentIDNumber.value = studentCWID;
                cwid.value = studentCWID;
                HiddenStudentEmail.value = "soumya.ravindra@thoughtfocus.com";
               // StudentEmailId.value = "yjayaram@fullerton.edu";
                //StudentEmailId.value = response[0].PREF_EMAIL;
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
debugger;
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

debugger;
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
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"PDPS";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"PDPS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"PDPS";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"PDPS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };
}
debugger;
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
        formCode.value = "F0PDPS";
        formCodeVal = "F0PDPS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PDPS";
        formCodeVal = "F1PDPS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"PDPS";
        formCodeVal = financialAidvalues.FormCodeGeneral+"PDPS";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }


}


if (StageIndicator.value !== null) {
    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}
debugger;
function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = aidYear.value;
    var headingTextVal = "<p><b>PARENT DEPENDENT VERIFICATION (".concat(financialAidYear).concat(")</b></p>");

    var formTextVal = "<p><b>"+formCode.value+"</b></p>";
   // var sectionTextVal = "<p>in ".concat(financialAidYear).concat("</p>");
  var instructionTextVal = "<p><b>more than half of their support from July 1,".concat(taxFilingYear - 1).concat(" through June 30,".concat(taxFilingYear).concat(" (other people could include your grandparents,parent(s) sister, parent(s) cousin, parent(s) brother, etc.)<b></p>")); 
  
    var actionTextVal = "<p>Parents must complete the form for each of their dependents, other than you or your siblings. Do not include any person who will not continue to receive more than half of his or her support, from parent(s), during the ".concat(financialAidYear).concat(" school year.</p>");
  
   

    $("#formCodeText").html(formTextVal);
    $("#PDVHeadingText").html(headingTextVal);
    //$("#FCEVsecText").html(sectionTextVal); 
    $("#PDVHouseholdText").html(instructionTextVal);
    $("#PDVActionText").html(actionTextVal);
   
}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_PARENT_DEPENDENTS";
    var financialAidDecisionColumnName = "FIN_AID_DECISION";
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_caseId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_caseId_init1 = function (scope) {
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = false;
    var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
    }).replace(/[^ -~]/g, ' ');
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_CheckBox1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_CheckBox1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
      
        cdaAddButton.enabled = false;
        cdaRemoveButton.enabled = false;
      
        Row2.instanceManager.instances[0].DependentName.value = "";
        Row2.instanceManager.instances[0].DependentName.enabled = false;
        Row2.instanceManager.instances[0].DOBDependent.value = "";
        Row2.instanceManager.instances[0].DOBDependent.enabled = false;
        Row2.instanceManager.instances[0].Relationship.value = "";
        Row2.instanceManager.instances[0].Relationship.enabled = false;
        Row2.instanceManager.instances[0].TotalIncome.value = "";
        Row2.instanceManager.instances[0].TotalIncome.enabled = false;
        Row2.instanceManager.instances[0].Source.value = "";
        Row2.instanceManager.instances[0].Source.enabled = false;
        Row2.instanceManager.instances[0].TaxRadioButtonList.value = "";
        Row2.instanceManager.instances[0].TaxRadioButtonList.enabled = false;
        Row2.instanceManager.instances[0].CurrentRBYN.value = "";
        Row2.instanceManager.instances[0].CurrentRBYN.enabled = false;
        var rowcountRemoveAll1 = Row2.instanceManager.instanceCount;
        if (rowcountRemoveAll1 !== null) {
            for (var k = 0; k < rowcountRemoveAll1; k++) {
                Row2.instanceManager.removeInstance(Row2.instanceIndex);
            }
        }
    } else {
        DependentName.enabled = true;
        DOBDependent.enabled = true;
        Relationship.enabled = true;
        TotalIncome.enabled = true;
        Source.enabled = true;
        TaxRadioButtonList.enabled = true;
        CurrentRBYN.enabled = true;
      
        cdaAddButton.enabled = true;
        cdaRemoveButton.enabled = true;
    }
}
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_tableItem16609026816731660902682566_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_tableItem16609026816731660902682566_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_cdaAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_cdaAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var rowcount = Row2.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
    if (RemoveRecordFlag.value == "1") {
        addRowsAfterRemove(lastRow);
    } else {
        addRows();
    }
}
function addRows() {
    if ((DependentName.value !== null) && (DOBDependent.value !== null) && (Relationship.value !== null) && (CurrentRBYN.value !== null) && (TotalIncome.value !== null) && (Source.value !== null) && (TaxRadioButtonList.value !== null)) {
        Row2.instanceManager.addInstance();
    } else {
        showErrorModal("Alert !", "Enter the record before adding a new row");
    }
}
function addRowsAfterRemove(lastRow) {
    if ((Row2.instanceManager.instances[lastRow]._children[0].value !== null) && (Row2.instanceManager.instances[lastRow]._children[1].value !== null) && (Row2.instanceManager.instances[lastRow]._children[2].value !== null) && (Row2.instanceManager.instances[lastRow]._children[3].value !== null) && (Row2.instanceManager.instances[lastRow]._children[4].value !== null) && (Row2.instanceManager.instances[lastRow]._children[5].value !== null) && (Row2.instanceManager.instances[lastRow]._children[6].value !== null)) {
        Row2.instanceManager.addInstance();
    } else {
        showErrorModal("Alert !", "Enter the record before adding a new row");
    }
}
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_cdaRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_cdaRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var rowCount = Row2.instanceManager.instanceCount;
    if (rowCount == 1) {
        showErrorModal("Alert !", "Add a new row to remove");
    } else {
        Row2.instanceManager.removeInstance(Row2.instanceManager.instanceCount - 1);
    }
    RemoveRecordFlag.value = "1";
}
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_NonMedicalSupportingDocument1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_NonMedicalSupportingDocument1_valueCommit0 = function (scope) {
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_NonMedicalSupportingDocument2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_NonMedicalSupportingDocument2_valueCommit0 = function (scope) {
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_NonMedicalSupportingDocument3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_NonMedicalSupportingDocument3_valueCommit0 = function (scope) {
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_ipAddress_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_ipAddress_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_evaluator_signChk_valueCommit0 = function (scope) {
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_dependent_verification_parent_dependents_verification.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
  debugger;
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          debugger;
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/parent-dependent-verification/parent-dependents-verification');
            jsonData.append('fileName', "(" + HiddenStudentName.value + ")" + "_" + Date.now());    
            //jsonData.append('fileName', "(" + Date.now() + ")");      
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
 * @function parent_dependent_verification_parent_dependents_verification.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_dependent_verification_parent_dependents_verification.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (ParentEmail.value === null) {
    showErrorModal("Alert !", "Please enter the parent email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
} else if (ParentEmail.value != ConfirmParentEmail.value) {
    showErrorModal("Alert !", "Parent email does not match");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
}else {
    submitAction();
}
function submitAction() {
    aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + cwid.value;
    EmailSubject.value = "Test - Parent Dependent Verification - (" + cwid.value + ")";
    documentNameForAdobeSign.value = "Parent Dependent Verification - " + formCode.value;
    HiddenStudentEmail.value = "soumya.ravindra@thoughtfocus.com";
    guideBridge.submit();
}
        }
	}
}
