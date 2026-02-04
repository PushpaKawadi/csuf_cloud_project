/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
             if(StageIndicator.value === null){
  FinancialAidSignaturePanel.visible=false;
    disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        IPAddress.value = data.ip;
    });
}
if(StageIndicator.value == "ToFinancialAid"){
  StudentInformation.enabled=false;
  StudentSignaturePanel.enabled = false;
  FinancialAidSignaturePanel.visible=true;
  if (CertificationRB.value == 1){
    SectionPanel.visible=true;
    SectionPanel.enabled=false;
    textdraw_5104484771587724123076.visible=true;
  } else if(CertificationRB.value == 2){
    textCB.visible = true;
    ApplicantIn1CB.visible = true;
    ApplicantIn1CB.enabled = false;
    SectionPanel.visible=false;
    textdraw_5104484771587724123076.visible=false; 
  }
} 
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_guideRootPanel_init1 = function (scope) {
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
                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                StudentUserId.value = response[0].USERID;
                SCWID.value = studentCWID;
                cwid.value = studentCWID;
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
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"ENRL";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"ENRL";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        AidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"ENRL";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"ENRL";
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
        formCode.value = "F0ENRL";
        formCodeVal = "F0ENRL";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        AidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1ENRL";
        formCodeVal = "F1ENRL";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        AidYear.value = financialAidvalues.AidYearGeneral;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"ENRL";
        formCodeVal = financialAidvalues.FormCodeGeneral+"ENRL";
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
    var headingTextVal = "<p><b>FAMILY MEMBER COLLEGE ENROLLMENT VERIFICATION (".concat(financialAidYear).concat(")</b></p>");

    var formTextVal = "<p><b>"+formCode.value+"</b></p>";
    var sectionTextVal = "<p>in ".concat(financialAidYear).concat("</p>");
    var instructionTextVal = "<p><b><u>INSTRUCTIONS:</u></b>We need to confirm that a member of your family will be enrolled in college at least half-time during the ".concat(financialAidYear).concat(" academic year. The family member must be working towards a degree or certificate leading to a recognized educational credential at a college that is eligible to participate in federal student aid programs. Please have that person complete Section 2 and take this form to his/her financial aid office for completion of Section 3. If you have more than one family member in college, make a photocopy of this form for each person. If your family member will not be enrolled in college at least half-time during the ".concat(financialAidYear).concat(" academic year, please check the box in Section 1, sign the certification at the bottom of this form and return it to the Office of Financial Aid at California State University, Fullerton. Incomplete documents will not be returned. <i>They will be disposed of in a secure manner, per university policy. This will delay processing.</i></p>"));
    
   var cbTextVal = "<p> I will not have another family member enrolled in college during the ".concat(financialAidYear).concat(" academic year.</p>");

    $("#FCEVHeadingFormType").html(formTextVal);
    $("#FCEVHeadingText").html(headingTextVal);
    $("#FCEVsecText").html(sectionTextVal); 
    $("#FCEVInstructionsText").html(instructionTextVal);
    $("#FCEVCBText").html(cbTextVal);
   
}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_FAMILY_COLLEGE_ENROLL";
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_caseId_init0 = function (scope) {
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_InitiatedDate_init0 = function (scope) {
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_CertificationRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_CertificationRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    SectionPanel.visible = true;
    ApplicantIn1CB.visible = false;
    textCB.visible = false;
    }
else{
  FamilyMemName.value=""; 
  InstitutionName.value = ""; 
  Relationship.value = ""; 
  FamilyMemDOB.value = ""; 
  SSN.value = ""; 
  ParentEmail.value = ""; 
  ConfirmParentEmail.value = ""; 
  AdminEmail.value = ""; 
  ConfirmAdminEmail.value = "";
}
/*if(this.value == 2){
  SectionPanel.visible = false;
  ApplicantIn1CB.visible = true;
  textCB.visible = true;
  
}else{
  textCB.value = "";
}*/

        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_CertificationRB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_CertificationRB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 2){
  SectionPanel.visible = false;
  ApplicantIn1CB.visible = true;
  textCB.visible = true;
  
  
}else{
  ApplicantIn1CB.visible = false;
  textCB.visible = false;
}
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_SectionPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_SectionPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_ApplicantIn1CB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_ApplicantIn1CB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_textCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_textCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_checkbox1649834861348_valueCommit0 = function (scope) {
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
                Date_1.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        StudentName.enabled = false;
        Date_1.enabled = false;
    } else {
        StudentName.value = "";
        Date_1.value = "";
    }
}
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_IPAddress_init0 = function (scope) {
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_StudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_StudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_FinancialCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_FinancialCB_valueCommit0 = function (scope) {
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_FinancialAidSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_FinancialAidSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_FinancialAidSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_FinancialAidSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Family_College_Enrollment_Verification_Adobe_Sign.pdf';		
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/family-college-enrollment-verification/family-college-enrollment-verification');
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
 * @function family_college_enrollment_verification_family_college_enrollment_verification.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
family_college_enrollment_verification_family_college_enrollment_verification.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    aftiaDescCWID.value = StudentFullName.value + " " + cwid.value;
    EmailSubject.value = "Test - Family Member College Enrollment Verification Form - " + cwid.value;
}
StudentEmailId.value = "soumya.ravindra@thoughtfocus.com";

var ssnlen = SSN.value; 
if(ssnlen !== null){
  var ssndigit = ssnlen.toString().length;
}


debugger;
if(CertificationRB.value === null){
   showErrorModal("Alert!", "Please select one of the Certification");
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].textdraw1686224085879[0]");
}
else if((CertificationRB.value == 1) && (FamilyMemName.value === null || FamilyMemDOB.value === null || InstitutionName.value === null || SSN.value === null  || Relationship.value === null)){
  showErrorModal("Alert!", "Please Enter all the details");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionPanel[0].FamilyMemName[0]");
}else if(ssndigit < 4){
  showErrorModal("Alert!", "Please enter valid SSN");
}

/*
var ssnlen = SSN.value;
if(ssnlen !== null){
  var ssndigit = ssnlen.toString().length;
  if(ssndigit < 4){
  showErrorModal("Alert!", "Please enter valid SSN");
}
}*/


else if((CertificationRB.value == 1) && (ParentEmail.value === null || ConfirmParentEmail.value === null)){
    showErrorModal("Alert!", "Please enter Principal email address");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionPanel[0].ParentEmail[0]");
}

else if(ParentEmail.value != ConfirmParentEmail.value){
    showErrorModal("Alert!", "Principal email does not match");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionPanel[0].ConfirmParentEmail[0]");
}

else if((CertificationRB.value == 1) && (AdminEmail.value === null || ConfirmAdminEmail.value === null)){
    showErrorModal("Alert!", "Please enter Admin email address");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionPanel[0].AdminEmail[0]");
}

else if(AdminEmail.value != ConfirmAdminEmail.value){
    showErrorModal("Alert!", "Administartor email does not match");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionPanel[0].ConfirmAdminEmail[0]");
}

else if((CertificationRB.value == 2) && (ApplicantIn1CB.value === null)){
        showErrorModal("Alert!", "Please Check the box");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SignatureandAcknowledgement[0].StudentSignaturePanel[0].ApplicantIn1CB[0]");
        }
else{
  documentNameForAdobeSign.value = "Family Member College Enrollment Verification Form " + formCode.value;
  guideBridge.submit();
}
        }
	}
}
