/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
	FinancialSignaturePanel.visible = false; 
    disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
  	
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
}
else if(StageIndicator.value == "ToFinancialAid"){
  
	StudentInformation.enabled = false;
    InstructionsTab.enabled = false;
	StudentCitizenshipDetailsPanel.enabled = false;  	    	
  	StudentSignaturePanel.enabled = false;
  	SupportingDocumentsPanel.visible = false;
  	FinancialSignaturePanel.visible = true;  	
}
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_guideRootPanel_init1 = function (scope) {
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

           // var userValue = response.userId;
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
            action:"CV_USER_DETAILS", 
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
    var formCodeVal = "";

    if (typeOfAidYear == '0' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0PPRV";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    } else if(typeOfAidYear == '0' && identifyAidYearFlag == "TwoAidYear") {
		financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0PPRV";
        getFAFSAFinancialAidYear(aidYearValue); 
        checkforDuplicateSubmissions(formCodeVal);
    }else if(typeOfAidYear == '1' && identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PPRV";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }else if(typeOfAidYear == '1' && identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PPRV";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }else if(identifyAidYearFlag == "OneAidYear") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0PPRV";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }else if(identifyAidYearFlag == "TwoAidYear") {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PPRV";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }
}



function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

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
        formCode.value = "F0PPRV";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1PPRV";
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

    if (aidYearValue == "2021-2022") {
        formCodeTextVal = "<p><b>F0PPRV</b></p>";
        titleTextVal = "<p><b>PARENT IMMIGRATION / CITIZENSHIP VERIFICATION (2021-22)</b></p>";
    } else if (aidYearValue == "2022-2023") {
        formCodeTextVal = "<p><b>F1PPRV</b></p>";
        titleTextVal = "<p><b>PARENT IMMIGRATION / CITIZENSHIP VERIFICATION (2022-23)</b></p>";
    }

    $("#mainHeadingText").html(formCodeTextVal);
    $("#f0citzHeadingText").html(titleTextVal);
}

function checkforDuplicateSubmissions(formCodeVal){
  
var tableName = "AEM_IMMIGRATION_VERIFICATION";
var financialAidDecisionColumnName = "FIN_AID_DECISION";
var formCodeColumnName = "FORM_CODE";
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
                showErrorModal("Alert!", "Multiple submissions are not allowed");
                submit1575264176703.enabled=false;            
          }

		},
	});
}
}
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_Date_1_init0 = function (scope) {
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_AlienRegistrationCard_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_AlienRegistrationCard_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	Passportstamped.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_Passportstamped_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_Passportstamped_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	AlienRegistrationCard.value = null;
	DepartureRecord.value = null;
	OtherUSPerm.value = null;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_DepartureRecord_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_DepartureRecord_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	AlienRegistrationCard.value = null;
	Passportstamped.value = null;
	OtherUSPerm.value = null;
  
  	BirthCertificate.value = null;
  	USPassport.value = null;
	NaturalizationCertification.value = null;
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_OtherUSPerm_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_OtherUSPerm_valueCommit0 = function (scope) {
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
  
  	Refugee.value = null;
	AsylumGranted.value = null;
	IndefiniteParole.value = null;
	CubanHaitianEntrant.value = null;
	CurrentFormI688.value = null;
	OtherNonCitizen.value = null;

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_Refugee_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_Refugee_valueCommit0 = function (scope) {
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

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_AsylumGranted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_AsylumGranted_valueCommit0 = function (scope) {
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

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_IndefiniteParole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_IndefiniteParole_valueCommit0 = function (scope) {
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

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_CubanHaitianEntrant_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_CubanHaitianEntrant_valueCommit0 = function (scope) {
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

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_CurrentFormI688_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_CurrentFormI688_valueCommit0 = function (scope) {
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

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_OtherNonCitizen_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_OtherNonCitizen_valueCommit0 = function (scope) {
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

    AlienRegistrationCard.value = null;
    Passportstamped.value = null;
    DepartureRecord.value = null;
    OtherUSPerm.value = null;
  
  	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_EmploymentAuth_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_EmploymentAuth_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null;  
  
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

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
    }
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_ApplSubmitted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_ApplSubmitted_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	EmploymentAuth.value = null;
	F1F2SeriesVisa.value = null;
	OtherNonEligibleNonCitizien.value = null;  
  
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

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_F1F2SeriesVisa_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_F1F2SeriesVisa_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	EmploymentAuth.value = null;
	ApplSubmitted.value = null;
	OtherNonEligibleNonCitizien.value = null; 
  
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

    /*USCitizenPanel.enabled = false;
    USPermanentResidentPanel.enabled = false;
    OtherEligibleNonCitizenPanel.enabled = false;*/
}
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_OtherNonEligibleNonCitizien_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_OtherNonEligibleNonCitizien_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	EmploymentAuth.value = null;
	ApplSubmitted.value = null;
	F1F2SeriesVisa.value = null;  	
  	NonEligibleNonCitizenTextBox.enabled = true;
  
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_BirthCertificate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_BirthCertificate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
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

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_USPassport_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_USPassport_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	BirthCertificate.value = null;
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

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_NaturalizationCertification_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_NaturalizationCertification_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	BirthCertificate.value = null;
	USPassport.value = null;
  
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

	EmploymentAuth.value = null;
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	
	var format = /[&{}#!@$%^=;\[\]]/;

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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	
	var format = /[&{}#!@$%^=;\[\]]/;

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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_StudentCB_valueCommit0 = function (scope) {
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_evaluator_signChk_valueCommit0 = function (scope) {
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_Immigration_Citizenship_Adobe_Sign.pdf';		
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/parent-immigration-citizenship-verification/parent-immigration-citizenship-verification');
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
 * @function parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_immigration_citizenship_verification_parent_immigration_citizenship_verification.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (parentEmail.value === null) {
    showErrorModal("Alert !", "Please enter the parent email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
} else if (parentEmail.value != confirmParentEmail.value) {
    showErrorModal("Alert !", "Parent email does not match");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
} else if (checkbox1671791831399.value === null) {
        checkbox1671791831399.mandatory = true;
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].InstructionsTab[0].checkbox1671791831399[0]");
        showErrorModal("Alert", "Please read the Instructions carefully & check the Checkbox below");
} else if (BirthCertificate.value === null && USPassport.value === null && NaturalizationCertification.value === null && AlienRegistrationCard.value === null && Passportstamped.value === null && DepartureRecord.value === null && OtherUSPerm.value === null && Refugee.value === null && AsylumGranted.value === null && IndefiniteParole.value === null && CubanHaitianEntrant.value === null && CurrentFormI688.value === null && OtherNonCitizen.value === null && EmploymentAuth.value === null && ApplSubmitted.value === null && F1F2SeriesVisa.value === null && OtherNonEligibleNonCitizien.value === null) {
    showErrorModal("Alert !", "Please select at least one option from the given categories");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0]");
} else if (OtherUSPerm.value !== null && USPermTextBox.value === null) {
    showErrorModal("Alert !", "Please enter the list of documents for U.S. PERMANENT RESIDENT");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0].USPermTextBox[0]");
} else if (OtherNonCitizen.value !== null && EligibleNonCitizenTextBox.value === null) {
    showErrorModal("Alert !", "Please enter the list of documents for OTHER ELIGIBLE NON-CITIZEN");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0].EligibleNonCitizenTextBox[0]");
} else if (OtherNonEligibleNonCitizien.value !== null && NonEligibleNonCitizenTextBox.value === null) {
    showErrorModal("Alert !", "Please enter the list of documents for NON-ELIGIBLE NON-CITIZEN");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentCitizenshipDetailsPanel[0].NonEligibleNonCitizenTextBox[0]");
} else {
    submitAction();
}



function submitAction() {
    aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + cwid.value;
    EmailSubject.value = "Test - Parent Immigration/Citizenship Verification - (" + cwid.value + ")";

    // var testEmail = "yjayaram@fullerton.edu";
    //var testEmail = "anupama.dhar@thoughtfocus.com";
    var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

    HiddenStudentEmail.value = testEmail;
  
  if(aidYear.value == "2022"){
    	documentNameForAdobeSign.value = "Parent Immigration/Citizenship Verification - F0PPRV";
  }
  else if(aidYear.value == "2023"){
    	documentNameForAdobeSign.value = "Parent Immigration/Citizenship Verification - F1PPRV";
  }

    guideBridge.submit();
}
        }
	}
}
