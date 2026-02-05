/**
 * @function veteran_status_verification_veteran_status_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
             if(StageIndicator.value === null){
  FinancialAidSignaturePanel.visible=false;
}
if(StageIndicator.value == "ToFinancialAid"){
  StudentInformation.enabled=false;
  InstructionsAndDeclarationPanel.enabled=false;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible=true;
} 
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var flag;
if (StageIndicator.value === null) {
    var studentFormURL = window.location.search;
    var urlParams = new URLSearchParams(studentFormURL);
    var typeOfForm;
    var formCodeTextVal;
    var aidYearValue;

    if (urlParams.has('formType')) {
        typeOfForm = urlParams.get('formType');
    }
    if (typeOfForm == "CDA") {
        formType.value = "CDA";
        loggedInDetails();
    } else if (typeOfForm == "FAFSA") {
        formType.value = "FAFSA";
        loggedInDetails();
    } else {
        var modal = document.getElementById("secondModal");
        var span = document.getElementsByClassName("secondClose")[0];
        modal.style.display = "block";
        span.onclick = function() {
            if ((document.getElementById("secondButton1").checked === false) && (document.getElementById("secondButton2").checked === false)) {
                modal.style.display = "block";
                showErrorModal("Alert!", "Please select the form type");
            } else {
                modal.style.display = "none";
            }
        };
        document.getElementById("secondButton1").onclick = function() {
            modal.style.display = "none";
            formType.value = "CDA";
            loggedInDetails();
        };
        document.getElementById("secondButton2").onclick = function() {
            modal.style.display = "none";
            formType.value = "FAFSA";
            loggedInDetails();
        };
    }
}

function loggedInDetails() {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
           // var userValue = 'mariana2'; // two Aid Year
            // var userValue = 'majesticallexi'; // one Aid Year
            //var userValue = 'mchoi88';			 	// no Aid Year
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
                var firstNameVal = response[0].FIRST_NAME; 
                var lastNameVal = response[0].LAST_NAME;
                firstName.value = firstNameVal;
                lastName.value = lastNameVal;
                StudentUserId.value = response[0].USERID;
                SCwid.value = studentCWID;
                cwid.value = studentCWID;
                //StudentEmailId.value = response[0].PREF_EMAIL;
                StudentFullName.value = firstNameVal + " " + lastNameVal;
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
        if (formType.value == "FAFSA") {
            formCode.value = "F0D214";
          formCodeVal = "F0D214";
        }
        if (formType.value == "CDA") {
            formCode.value = "F0C214";
          formCodeVal = "F0C214";
        }
        textChanger(aidYearValue);
      checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        AidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        if (formType.value == "FAFSA") {
            formCode.value = "F1D214";
          formCodeVal = "F1D214";
        }
        if (formType.value == "CDA") {
            formCode.value = "F1C214";
          formCodeVal = "F1C214";
        }
        textChanger(aidYearValue);
      checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    };
}

function singleAidYear() {
  var formCodeVal = "";
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    if (typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        AidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        if (formType.value == "FAFSA") {
            formCode.value = "F0D214";
          formCodeVal = "F0D214";
        }
        if (formType.value == "CDA") {
            formCode.value = "F0C214";
          formCodeVal = "F0C214";
        }
        textChanger(aidYearValue);
      checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        AidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        if (formType.value == "FAFSA") {
            formCode.value = "F1D214";
          formCodeVal = "F1D214";
        }
        if (formType.value == "CDA") {
            formCode.value = "F1C214";
          formCodeVal = "F1C214";
        }
        textChanger(aidYearValue);
      checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    } else {
        financialAidYearVal = "2021-2022";
        AidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        if (formType.value == "FAFSA") {
            formCode.value = "F0D214";
          formCodeVal = "F0D214";
        }
        if (formType.value == "CDA") {
            formCode.value = "F0C214";
          formCodeVal = "F0C214";
        }
        textChanger(aidYearValue);
      checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }
}

if(StageIndicator.value !== null){
  debugger;
    aidYearValue = financialAidYear.value;
    textChanger(aidYearValue);
}

function textChanger(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = AidYear.value;
    var formtypeVal = "";
    var headingTextVal = "";

    if (formCode.value == "F0D214") {
        formtypeVal = "<p><b>F0D214</b></p>";
        headingTextVal = "<p><b>VETERAN STATUS VERIFICATION (".concat(financialAidYear).concat(")</b></p>");
    }
    if (formCode.value == "F1D214") {
        formtypeVal = "<p><b>F1D214</b></p>";
        headingTextVal = "<p><b>VETERAN STATUS VERIFICATION (".concat(financialAidYear).concat(")</b></p>");
    }
    if (formCode.value == "F0C214") {
        formtypeVal = "<p><b>F0C214</b></p>";
        headingTextVal = "<p><b>VETERAN STATUS VERIFICATION (".concat(financialAidYear).concat(")<br>CA Dream Act Application</b></p>");
    }
    if (formCode.value == "F1C214") {
        formtypeVal = "<p><b>F1C214</b></p>";
        headingTextVal = "<p><b>VETERAN STATUS VERIFICATION (".concat(financialAidYear).concat(")<br>CA Dream Act Application</b></p>");
    }

    $("#VSVHeadingFormType").html(formtypeVal);
    $("#VSVHeadingText").html(headingTextVal);
}

debugger;
function checkforDuplicateSubmissions(formCodeVal,financialAidYearVal) {
    var tableName = "AEM_VETERAN_STATUS_VERIF";
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
              financialAidYear:financialAidYearVal, 
              financialAidYearColumn:financialAidYearColumnName
            },
            dataType: 'json',
            success: function(myresponse) {
              debugger;
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
 * @function veteran_status_verification_veteran_status_verification.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_caseId_init0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
	  
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
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
 * @function veteran_status_verification_veteran_status_verification.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_supportDoc3_valueCommit0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_checkbox1649834861348_valueCommit0 = function (scope) {
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
                StudentName.value = StudentFullName.value;
                StudentSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        StudentName.enabled = false;
        StudentSignatureDate.enabled = false;
    } else {
        StudentName.value = "";
        StudentSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_IPAddress_init0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_StudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_StudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_checkbox1649838422969_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_checkbox1649838422969_valueCommit0 = function (scope) {
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
 * @function veteran_status_verification_veteran_status_verification.generated_FinancialAidSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_FinancialAidSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_FinancialAidSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_FinancialAidSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function veteran_status_verification_veteran_status_verification.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/veteran-status-verification/veteran-status-verification');
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
 * @function veteran_status_verification_veteran_status_verification.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
veteran_status_verification_veteran_status_verification.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    aftiaDescCWID.value = StudentFullName.value + " " + cwid.value;
    EmailSubject.value = "Test - Veteran Status Verification - " + cwid.value;
}
StudentEmailId.value = "yjayaram@fullerton.edu";

if(InstructionsCB.value === null){
   showErrorModal("Alert !", "Please check the 'I have read the instructions' checkbox in Instructions & Declaration Section");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].InstructionsAndDeclarationPanel[0].InstructionsCB[0]");
}
else if(VeteranStatusCheckBox.value === null && supportDoc1.value === "" && supportDoc2.value === "" && supportDoc3.value === ""){
   showErrorModal("Alert !", "Please attach supporting documents");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SupportingDocuments[0].supportDoc1[0]");
}else{
    guideBridge.submit();
}
        }
	}
}
