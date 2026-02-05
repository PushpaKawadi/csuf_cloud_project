/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  FinancialAidSignaturePanel.visible=false;
    disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });
}
if(StageIndicator.value == "ToFinancialAid"){
  StudentInformation.enabled=false;
  SupportingDocuments.visible=false;
  SupportingDocuments.enabled = false;
  StudentSignaturePanel.enabled=false;
  
  if (CertificationRB.value == 1){
    TeacherPanel.visible=true;
    textdraw_15929351041668766475379.visible=true;
  } else {
    TeacherPanel.visible=false;
    textdraw_15929351041668766475379.visible=false; 
  }
  
  TeacherPanel.enabled = false;
  RetireeCB.enabled = false;
  FinancialAidSignaturePanel.visible=true;
} 
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var flag;
debugger;
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
                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                StudentUserID.value = response[0].USERID;
               // SCwid.value = studentCWID;
                cwid.value = studentCWID;
                //StudentEmailId.value = "yjayaram@fullerton.edu";
                StudentEmailId.value = "soumya.ravindra@thoughtfocus.com";
                //StudentEmailId.value = response[0].PREF_EMAIL;
                StudentFullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
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


function aidYearPopup() {
  debugger;
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
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"TGSF";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"TGSF";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        AidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"TGSF";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"TGSF";
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
        AidYear.value = financialAidvalues.AidYearZero;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0TGSF";
        formCodeVal = "F0TGSF";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        AidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1TGSF";
        formCodeVal = "F1TGSF";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        AidYear.value = financialAidvalues.AidYearGeneral;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"TGSF";
        formCodeVal = financialAidvalues.FormCodeGeneral+"TGSF";
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
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = AidYear.value;
    var headingTextVal = "<p><b>TEACHER OR RETIREE (".concat(financialAidYear).concat(")</b></p>");

    var formTextVal = "<p><b>"+formCode.value+"</b></p>";
    
   

    $("#TGSHeadingFormType").html(formTextVal);
    $("#TGSHeadingText").html(headingTextVal);
   
}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_TEACH_GRANT_SUPP";
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_caseId_init0 = function (scope) {
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
this.enabled = false;
if(StageIndicator.value === null){	 
        var dateString = new Date().toLocaleString("en-US", {timeZone:(Intl.DateTimeFormat().resolvedOptions().timeZone)}).replace(/[^ -~]/g, '');
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_CertificationRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_CertificationRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    TeacherPanel.visible = true;
    RetireeCB.visible = false;
    SupportingDocuments.visible = false;
}
else{
  EmpName.value = null; 
  SchoolName.value = null; 
  City.value = null;
  PrincipalEmail.value = null; 
  ConfirmPrincipalEmail.value = null;
  TeachCB.value = null;
}

if(this.value == 2){
  TeacherPanel.visible = false;
  RetireeCB.visible = true;
  SupportingDocuments.visible = true;
}
else{
  RetireeCB.value = null; 
  StudentName.value = null; 
  RetireeDate.value = null;
  RetireeESign.value = null;
  supportDoc1.fileAttachment.value = null;
  supportDoc2.fileAttachment.value = null;
  supportDoc3.fileAttachment.value = null;
}
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_TeacherPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_TeacherPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_TeachCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_TeachCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  EmpName.value = StudentFullName.value;
}
else{
  EmpName.value = null; 
  SchoolName.value = null; 
  City.value = null;
  PrincipalEmail.value = null; 
  ConfirmPrincipalEmail.value = null;
}
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_EmpName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_EmpName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_SupportingDocuments_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_SupportingDocuments_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_supportDoc3_valueCommit0 = function (scope) {
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_RetireeCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_RetireeCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_RetireeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_RetireeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  StudentName.value = StudentFullName.value;
  RetireeESign.value = StudentFullName.value;
  RetireeDate.value = InitiatedDate.value;
}
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_checkbox1649834861348_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                SignStudentName.value = StudentFullName.value;
                Date_1.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        SignStudentName.enabled = false;
        Date_1.enabled = false;
    } else {
        SignStudentName.value = "";
        Date_1.value = "";
    }
}
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_IPAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
if (StageIndicator.value === null) {     		
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        IPAddress.value = data.ip;        
    });
}
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_SignStudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_SignStudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_FinancialCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_FinancialCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToFinancialAid") {
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_FinancialAidSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_FinancialAidSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_FinancialAidSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_FinancialAidSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Teach_Grant_Supplement_Adobe_Sign.pdf';		
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (AidYear.value !== null) {
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
            jsonData.append('formPath', '/content/forms/af/teach-grant-supplement-form/teach-grant-supplement-form');
            jsonData.append('fileName', StudentFullName.value);          
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
 * @function teach_grant_supplement_form_teach_grant_supplement_form.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teach_grant_supplement_form_teach_grant_supplement_form.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    aftiaDescCWID.value = StudentFullName.value + " " + cwid.value;
    EmailSubject.value = "Test - Teach Grant Supplement Form - " + cwid.value;
    documentNameForAdobeSign.value = "Teach Grant Supplement Form " + formCode.value;
   // StudentEmailId.value = "yjayaram@fullerton.edu"; 
   StudentEmailId.value = "soumya.ravindra@thoughtfocus.com";
}

if(CertificationRB.value === null){
   showErrorModal("Alert!", "Please select one of the Certification");
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].textdraw1686224085879[0]");
}
else if(PrincipalEmail.value != ConfirmPrincipalEmail.value){
    showErrorModal("Alert!", "Principal email does not match");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].TeacherPanel[0].ConfirmPrincipalEmail[0]");
}
else {
   guideBridge.submit();
} 






        }
	}
}
