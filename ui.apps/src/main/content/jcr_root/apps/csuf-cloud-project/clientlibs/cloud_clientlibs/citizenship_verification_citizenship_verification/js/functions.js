/**
 * @function citizenship_verification_citizenship_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
	FinancialSignaturePanel.visible = false; 
  	
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
}
else if(StageIndicator.value == "ToFinancialAid"){
  
	StudentInformation.enabled = false;
	StudentCitizenshipDetailsPanel.enabled = false;  	    	
  	StudentSignaturePanel.enabled = false;
  	SupportingDocumentsPanel.visible = false;
  	FinancialSignaturePanel.visible = true;  	
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_guideRootPanel_init1 = function (scope) {
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
           // var userValue = 'mchoi88';			 	// no Aid Year
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
           userID: userValue,
            action:"CV_USER_DETAILS"
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
               // HiddenStudentEmail.value = response[0].PREF_EMAIL;       
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
                }else if (identifyAidYearFlag == "TwoAidYear" && typeOfAidYear != "0" && typeOfAidYear != "1") {
                    aidYearPopup();
                }else if (typeOfAidYear == "0" || typeOfAidYear == "1") {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                }else if (identifyAidYearFlag == "OneAidYear" && typeOfAidYear === undefined) {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                }else if (identifyAidYearFlag == "TwoAidYear" && typeOfAidYear === undefined) {
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
  
    //var typeOfAidYear = getUrlParameters('aidYear'); 
    var financialAidYearVal = "";
    

    if (typeOfAidYear == '0' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CITZ";
        financialAidYearVal = "2021-2022";
      	certificationOfCitizenship.visible = false;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    } else if(typeOfAidYear == '0' && identifyAidYearFlag == "TwoAidYear") {
		financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CITZ";
        financialAidYearVal = "2021-2022";
      	certificationOfCitizenship.visible = false;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    }else if(typeOfAidYear == '1' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CITZ";
        financialAidYearVal = "2022-2023";
      	certificationOfCitizenship.visible = true;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    }else if(typeOfAidYear == '1' && identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CITZ";
      	certificationOfCitizenship.visible = true;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    }else if(identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CITZ";
        financialAidYearVal = "2022-2023";
      	certificationOfCitizenship.visible = false;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    }else if(identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CITZ";
      	certificationOfCitizenship.visible = true;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    } else if(typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CITZ";
        financialAidYearVal = "2021-2022";
      	certificationOfCitizenship.visible = false;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    } else if(typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CITZ";
      	certificationOfCitizenship.visible = true;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    } else{
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CITZ";
        financialAidYearVal = "2022-2023";
      	certificationOfCitizenship.visible = false;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    }
}



function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var financialAidYearVal = "";

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
        formCode.value = "F0CITZ";
        financialAidYearVal = "2021-2022";
      	certificationOfCitizenship.visible = false;
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CITZ";
        financialAidYearVal = "2022-2023";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    };
}


if (StageIndicator.value !== null) {
    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}



function getFAFSAFinancialAidYear(aidYearValue) {
   
    var formCodeTextVal;
    var titleTextVal;

    if (aidYearValue == "2021-2022") {
        formCodeTextVal = "<p><b>F0CITZ</b></p>";
        titleTextVal = "<p><b>CITIZENSHIP VERIFICATION(2021-22)</b></p>";
    } else if (aidYearValue == "2022-2023") {
        formCodeTextVal = "<p><b>F1CITZ</b></p>";
        titleTextVal = "<p><b>CITIZENSHIP VERIFICATION(2022-23)</b></p>";
    }

    $("#mainHeadingText").html(formCodeTextVal);
    $("#f0citzHeadingText").html(titleTextVal);
}

function checkforDuplicateSubmissions(formCodeVal){
  debugger;
var tableName = "AEM_CITIZENSHIP_VERIFICATION";
var financialAidDecisionColumnName = "FIN_AID_DECISION";
var formCodeColumnName = "FINANCIAL_AID_YEAR";
var faDecision = "Approved";
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
          debugger;
          if(myresponse.length >=1){
                showErrorModal("Alert!", "Multiple submissions are not allowed");
                submit1608529416101.enabled=false;            
          }

		},
	});
}
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_guideRootPanel_init2 = function (scope) {
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
           // var userValue = 'mchoi88';			 	// no Aid Year
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
           userID: userValue,
            action:"CV_USER_DETAILS"
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
               // HiddenStudentEmail.value = response[0].PREF_EMAIL;       
                HiddenStudentEmail.value = "soumya.ravindra@thoughtfocus.com";
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
                }else if (identifyAidYearFlag == "TwoAidYear" && typeOfAidYear != "0" && typeOfAidYear != "1") {
                   // aidYearPopup();
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                }else if (typeOfAidYear == "0" || typeOfAidYear == "1") {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                }else if (identifyAidYearFlag == "OneAidYear" && typeOfAidYear === undefined) {
                    singleAidYear(typeOfAidYear, identifyAidYearFlag);
                }else if (identifyAidYearFlag == "TwoAidYear" && typeOfAidYear === undefined) {
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
  
    //var typeOfAidYear = getUrlParameters('aidYear'); 
    var financialAidYearVal = "";
    var formCodeVal = "";
    var financialAidvalues = getAidYearValuesOnSingleAidYear();
    
   if (typeOfAidYear == '0') {
        financialAidYearVal = financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CITZ";
        formCodeVal = "F0CITZ";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    } else if(typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CITZ";
        formCodeVal = "F1CITZ";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    } else{
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"CITZ";
        formCodeVal = financialAidvalues.FormCodeGeneral+"CITZ";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    }
}



function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var financialAidYearVal = "";
  
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
        aidYearValue = financialAidYearVal;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"CITZ";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"CITZ";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(financialAidYearVal);
    };
}


if (StageIndicator.value !== null) {
    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}



function getFAFSAFinancialAidYear(aidYearValue) {
  
    var financialAidYearVal = financialAidYear.value;
    var formCodeTextValue = formCode.value;
    var titleTextVal = "<p><b>CITIZENSHIP VERIFICATION (".concat(financialAidYearVal).concat(")</b></p>");
    var formCodeTextVal = "<p><b> ".concat(formCodeTextValue).concat(" </b></p>");


    $("#mainHeadingText").html(formCodeTextVal);
    $("#f0citzHeadingText").html(titleTextVal);
}

function checkforDuplicateSubmissions(formCodeVal){
 
var tableName = "AEM_CITIZENSHIP_VERIFICATION";
var financialAidDecisionColumnName = "FIN_AID_DECISION";
var formCodeColumnName = "FINANCIAL_AID_YEAR";
var faDecision = "Approved";
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
                submit1608529416101.enabled=false;            
          }

		},
	});
}
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
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
 * @function citizenship_verification_citizenship_verification.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_BirthCertificate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_BirthCertificate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	USPassport.value = null;
	NaturalizationCertification.value = null;
	certificationOfCitizenship.value = null;
  
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;

	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null; 
  
  	/*USPermanentResidentPanel.enabled = false;
	OtherEligibleNonCitizenPanel.enabled = false;
	NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_USPassport_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_USPassport_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	BirthCertificate.value = null;
	NaturalizationCertification.value = null;
	certificationOfCitizenship.value = null;
  
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;

	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null; 
  
  	/*USPermanentResidentPanel.enabled = false;
	OtherEligibleNonCitizenPanel.enabled = false;
	NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_NaturalizationCertification_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_NaturalizationCertification_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	BirthCertificate.value = null;
	USPassport.value = null;
	certificationOfCitizenship.value = null;
  
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;

	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null; 
  
  	/*USPermanentResidentPanel.enabled = false;
	OtherEligibleNonCitizenPanel.enabled = false;
	NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_certificationOfCitizenship_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_certificationOfCitizenship_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	BirthCertificate.value = null;
	USPassport.value = null;
	NaturalizationCertification.value = null;
  
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;

	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null; 
  
  	/*USPermanentResidentPanel.enabled = false;
	OtherEligibleNonCitizenPanel.enabled = false;
	NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_AlienRegistrationCard_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_AlienRegistrationCard_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Passportstamped.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
	certificationOfCitizenship.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;

    /*USCitizenPanel.enabled = false;   
    OtherEligibleNonCitizenPanel.enabled = false;
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_Passportstamped_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_Passportstamped_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	AlienRegistrationCard.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
	certificationOfCitizenship.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;

    /*USCitizenPanel.enabled = false;   
    OtherEligibleNonCitizenPanel.enabled = false;
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_DepartureRecord_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_DepartureRecord_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	OtherUSPerm.value = null;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
	certificationOfCitizenship.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;

    /*USCitizenPanel.enabled = false;    
    OtherEligibleNonCitizenPanel.enabled = false;
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_OtherUSPerm_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_OtherUSPerm_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	DepartureRecord.value = null;
  	USPermTextBox.enabled = true;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
	certificationOfCitizenship.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	employmentAuth.value = null;
	ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;

    /*USCitizenPanel.enabled = false;    
    OtherEligibleNonCitizenPanel.enabled = false;
    NonEligibleNonCitizenPanel.enabled = false;*/
}
else{
  	USPermTextBox.enabled = false;
  	USPermTextBox.value = null;
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_Refugee_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_Refugee_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
  	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	employmentAuth.value = null;
    ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;


    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;    
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_AsylumGranted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_AsylumGranted_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Refugee.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
  	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	employmentAuth.value = null;
    ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;


    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;    
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_IndefiniteParole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_IndefiniteParole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Refugee.value = null;
	AsylumGranted.value = null;
	CubanHaitianEntrant.value = null;
  	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	employmentAuth.value = null;
    ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;


    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;    
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_CubanHaitianEntrant_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_CubanHaitianEntrant_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
  	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	employmentAuth.value = null;
    ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;


    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;   
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_CurrentFormI688_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_CurrentFormI688_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
  	CubanHaitianEntrant.value = null;
	OtherNonCitizen.value = null;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	employmentAuth.value = null;
    ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;


    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;   
    NonEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_OtherNonCitizen_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_OtherNonCitizen_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
  	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
  	EligibleNonCitizenTextBox.enabled = true;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	employmentAuth.value = null;
    ApplSubmitted.value = null;
    F1F2SeriesVisa.value = null;
    OtherNonEligibleNonCitizien.value = null;


    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;   
    NonEligibleNonCitizenPanel.enabled = false;*/
}
else{
  	EligibleNonCitizenTextBox.enabled = false;
  	EligibleNonCitizenTextBox.value = null;
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_employmentAuth_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_employmentAuth_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null;  
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;

    Refugee.value = null;
    AsylumGranted.value = null;
    IndefiniteParole.value = null;
    CubanHaitianEntrant.value = null;
    CurrentFormI688.value = null;
    OtherNonCitizen.value = null;

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
    }
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_ApplSubmitted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_ApplSubmitted_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	employmentAuth.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null;  
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;

    Refugee.value = null;
    AsylumGranted.value = null;
    IndefiniteParole.value = null;
    CubanHaitianEntrant.value = null;
    CurrentFormI688.value = null;
    OtherNonCitizen.value = null;

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_F1F2SeriesVisa_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_F1F2SeriesVisa_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	employmentAuth.value = null;
	ApplSubmitted.value = null;
	OtherNonEligibleNonCitizien.value = null; 
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;

    Refugee.value = null;
    AsylumGranted.value = null;
    IndefiniteParole.value = null;
    CubanHaitianEntrant.value = null;
    CurrentFormI688.value = null;
    OtherNonCitizen.value = null;

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_OtherNonEligibleNonCitizien_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_OtherNonEligibleNonCitizien_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	employmentAuth.value = null;
	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;  	
  	NonEligibleNonCitizenTextBox.enabled = true;
  
  	BirthCertificate.value = null;
    USPassport.value = null;
    NaturalizationCertification.value = null;
    certificationOfCitizenship.value = null;

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;

    Refugee.value = null;
    AsylumGranted.value = null;
    IndefiniteParole.value = null;
    CubanHaitianEntrant.value = null;
    CurrentFormI688.value = null;
    OtherNonCitizen.value = null;

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
}
else{
  	NonEligibleNonCitizenTextBox.enabled = false;
  	NonEligibleNonCitizenTextBox.value = null;
}
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_SupportingDocumentsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
  this.visible = false;
}

        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function citizenship_verification_citizenship_verification.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(supportDoc2.fileAttachment.value) === true){
		var doc2NewName = supportDoc2.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
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
 * @function citizenship_verification_citizenship_verification.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(supportDoc3.fileAttachment.value) === true){
		var doc2NewName = supportDoc3.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
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
 * @function citizenship_verification_citizenship_verification.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
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
 * @function citizenship_verification_citizenship_verification.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_evaluator_signChk_valueCommit0 = function (scope) {
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
 * @function citizenship_verification_citizenship_verification.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function citizenship_verification_citizenship_verification.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/citizenship-verification/citizenship-verification');
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
 * @function citizenship_verification_citizenship_verification.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
citizenship_verification_citizenship_verification.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(BirthCertificate.value === null && USPassport.value === null && NaturalizationCertification.value === null && certificationOfCitizenship.value === null && AlienRegistrationCard.value === null && Passportstamped.value === null && DepartureRecord.value === null && OtherUSPerm.value === null && Refugee.value === null && AsylumGranted.value === null && IndefiniteParole.value === null && CubanHaitianEntrant.value === null && CurrentFormI688.value === null && OtherNonCitizen.value === null && employmentAuth.value === null && ApplSubmitted.value === null && F1F2SeriesVisa.value === null && OtherNonEligibleNonCitizien.value === null){
  	
  showErrorModal("Alert !", "Please select at least one option from the given categories");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0]");
}
else if(OtherUSPerm.value !== null && USPermTextBox.value === null){
		showErrorModal("Alert !", "Please enter the list of documents for U.S. PERMANENT RESIDENT");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0].USPermTextBox[0]");
}
else if(OtherNonCitizen.value !== null && EligibleNonCitizenTextBox.value === null){
		showErrorModal("Alert !", "Please enter the list of documents for OTHER ELIGIBLE NON-CITIZEN");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0].EligibleNonCitizenTextBox[0]");
}
else if(OtherNonEligibleNonCitizien.value !== null && NonEligibleNonCitizenTextBox.value === null){
		showErrorModal("Alert !", "Please enter the list of documents for NON-ELIGIBLE NON-CITIZEN");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0].NonEligibleNonCitizenTextBox[0]");
}
else{
  	submitAction();
}



function submitAction(){
  aftiaDescCWID.value = firstName.value+ " " + lastName.value + " " + cwid.value;
  EmailSubject.value = "Test - Citizenship Verification - (" + cwid.value+")";
  
   var testEmail = "soumya.ravindra@thoughtfocus.com";  
   HiddenStudentEmail.value = testEmail;  

  guideBridge.submit();
}
        }
	}
}
