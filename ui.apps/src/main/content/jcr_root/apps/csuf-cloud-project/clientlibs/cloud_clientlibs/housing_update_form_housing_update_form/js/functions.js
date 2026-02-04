/**
 * @function housing_update_form_housing_update_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_guideRootPanel_init0 = function (scope) {
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
       // url: "/bin/getStudentPeronalInformationWithUserID",
       url: "/bin/getCitizenShipData",

        data: {
            action:"CV_USER_DETAILS",
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
                StudentCwid.value = response[0].EMPLID;
             //  StudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //  studentIDNumber.value = response[0].student_ID;
                // HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                HiddenStudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
              StudentCwid.value =response[0].EMPLID;

            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}



function getStudentAidYearDetails(CWID) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: CWID
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
                }else if (typeOfAidYear == "1") {
                    singleAidYear();
                }else if ((identifyAidYearFlag == "OneAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    singleAidYear();
                }else if ((identifyAidYearFlag == "TwoAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    aidYearPopup();
                }
               else {
					showErrorModal("Alert !", "No matching records found for the Aid Year");
				}
			}
			else{
				showErrorModal("Alert !", "No matching records found");
			}
        }
    });
}

function singleAidYear() {    	
  	var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
    var formCodeVal = "";
  
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = "2021-2022";
      	aidYear.value = "2022";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0HPLN";
        formCodeVal = "F0HPLN";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }	
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	aidYear.value = "2023";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1HPLN";
        formCodeVal = "F1HPLN";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }	
    else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0HPLN";
        formCodeVal = "F0HPLN";
        //financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }	
  
	if(StageIndicator.value !== null){
		aidYearValue =  financialAidYear.value;
		getFAFSAFinancialAidYear(aidYearValue);
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
        formCode.value = "F0HPLN";
        formCodeVal = "F0HPLN";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
     };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2023";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1HPLN";
        formCodeVal = "F1HPLN";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    };
}


if(StageIndicator.value !== null){
    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var headingTextVal = "";
    var formCodeTextVal = "";
     
   if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0HPLN</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal ="<p><b>F1HPLN</b></p>";
    }
  
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>HOUSING UPDATE FORM (".concat(financialAidYear).concat(")</b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>HOUSING UPDATE FORM (".concat(financialAidYear).concat(")</b></p>");
    }
  
  
    var textOneVal = " <b> INSTRUCTIONS: </b> You did not indicate your ".concat(financialAidYear).concat(" housing plans on your Free Application for Federal Student Aid (FAFSA), <b>OR</b> you listed a housing value which we need to confirm before we can determine your aid eligibility. Please check the appropriate box that describes your living situation during the school year, attach requested documentation, sign the certification at the bottom of the form, and return the form to the Office of Financial Aid. Please note that your housing status usually does <b>not</b> affect the amount of grant aid (free money) you can receive.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing. </i>");
  
  var Year = ""; 
  if(financialAidYear == "2021-2022"){
    Year = "<p>Is this the first Housing Plan Update form you are completing for 21/22?</p>";
  }
  if(financialAidYear == "2022-2023"){
    Year = "<p>Is this the first Housing Plan Update form you are completing for 22/23?</p>";
  }
  
  
    $("#F0HPLNTitleText").html(headingTextVal);
    $("#F0HPLNFormCodeText").html(formCodeTextVal);
    $("#F0HPLNTextOne").html(textOneVal);
    $("#F0HPLNYear").html(Year);
 }



function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_HOUSING_UPDATE_FORM";
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
 * @function housing_update_form_housing_update_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    StudentInformation.visible = true;
    HousingPlanUpdatesPanel.visible = true;
    HousingPlanUpdatesPanel.enabled = true;
    StudentSignPanel.visible = true;
    StudentSignPanel.enabled = true;
    FinancialAidPanel.visible = false;
    PlanRB3Panel.visible = false; 
    PlanRB4Panel.visible = false;
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        ipAddress.value = data.ip;
    });

    disabledCutCopyPasteFunctionality();
}
if (StageIndicator.value == "ToFinancialAid") {
    StudentInformation.enabled = false;
    InstructionTab.enabled = false;
    HousingPlanUpdatesPanel.visible = true;
    HousingPlanUpdatesPanel.enabled = false;
    SupportingDocumentsPanel.visible = false;
    if (PlanRB3.value == "1") {
        PlanRB3Panel.visible = true;
    } else {
        PlanRB3Panel.visible = false;
    }
    if (PlanRB4.value == "1") {
        PlanRB4Panel.visible = true;
        DOCS_Panel.visible = true;
    } else {
        PlanRB4Panel.visible = false;
        DOCS_Panel.visible = false;
    }
    StudentSignPanel.visible = true;
    StudentSignPanel.enabled = false;
    FinancialAidPanel.visible = true;
    FinancialAidPanel.enabled = true;
}
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

            //var userValue = response.userId;
            var userValue = 'veronica.maciel'; // two Aid Year
          //  var userValue = 'majesticallexi'; // one Aid Year
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
       // url: "/bin/getStudentPeronalInformationWithUserID",
       url: "/bin/getCitizenShipData",

        data: {
            action:"CV_USER_DETAILS",
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
                StudentCwid.value = response[0].EMPLID;
             //  StudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //  studentIDNumber.value = response[0].student_ID;
                // HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                HiddenStudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
              StudentCwid.value =response[0].EMPLID;

            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}



function getStudentAidYearDetails(CWID) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: CWID
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
                }else if (typeOfAidYear == "1") {
                    singleAidYear();
                }else if ((identifyAidYearFlag == "OneAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    singleAidYear();
                }else if ((identifyAidYearFlag == "TwoAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    singleAidYear();
                }
               else {
					//showErrorModal("Alert !", "No matching records found for the Aid Year");
                    singleAidYear();
				}
			}
			else{
				//showErrorModal("Alert !", "No matching records found");
                singleAidYear();
			}
        }
    });
}

function singleAidYear() {    	
  	var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
    var formCodeVal = "";
  
  var financialAidvalues = getAidYearValuesOnSingleAidYear();
  
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = financialAidvalues.FinAidYearZero;
      	aidYear.value = financialAidvalues.AidYearZero;
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0HPLN";
        formCodeVal = "F0HPLN";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }	
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = financialAidvalues.FinAidYearOne;
      	aidYear.value = financialAidvalues.AidYearOne;
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1HPLN";
        formCodeVal = "F1HPLN";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }	
    else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral; 
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral+"HPLN";
        formCodeVal = financialAidvalues.FormCodeGeneral+"HPLN";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    }	
  
	if(StageIndicator.value !== null){
		aidYearValue =  financialAidYear.value;
		getFAFSAFinancialAidYear(aidYearValue);
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
        aidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"HPLN";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"HPLN";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
     };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"HPLN";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"HPLN";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal,financialAidYearVal);
    };
}


if(StageIndicator.value !== null){
    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
  
    var aidYearVal = aidYear.value;
    var textChange = getUniqueStatements("HOUSING_UPDATE",aidYearVal,""); 
  
    var YearChange = textChange;
  
    var headingTextVal = "<p><b>HOUSING UPDATE FORM (".concat(financialAidYear).concat(")</b></p>");
    var formCodeTextVal = "<p><b>"+formCode.value+"</b></p>";
       
    var textOneVal = " <b> INSTRUCTIONS: </b> You did not indicate your ".concat(financialAidYear).concat(" housing plans on your Free Application for Federal Student Aid (FAFSA), <b>OR</b> you listed a housing value which we need to confirm before we can determine your aid eligibility. Please check the appropriate box that describes your living situation during the school year, attach requested documentation, sign the certification at the bottom of the form, and return the form to the Office of Financial Aid. Please note that your housing status usually does <b>not</b> affect the amount of grant aid (free money) you can receive.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing. </i>");
  
  var Year = "<p>Is this the first Housing Plan Update form you are completing for ".concat(YearChange).concat("?</p>");
  
   Year2.value=YearChange;
   
    $("#F0HPLNTitleText").html(headingTextVal);
    $("#F0HPLNFormCodeText").html(formCodeTextVal);
    $("#F0HPLNTextOne").html(textOneVal);
    $("#F0HPLNYear").html(Year);
 }



function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_HOUSING_UPDATE_FORM";
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
 * @function housing_update_form_housing_update_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_caseId_init0 = function (scope) {
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
 * @function housing_update_form_housing_update_form.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_Date_1_init0 = function (scope) {
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
 * @function housing_update_form_housing_update_form.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_PlanRB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_PlanRB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == "1") {
        PlanRB2.value = "";
        PlanRB3.value = "";
        PlanRB4.value = "";
    }
}
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_PlanRB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_PlanRB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == "1") {
        PlanRB1.value = "";
        PlanRB3.value = "";
        PlanRB4.value = "";
    }
}
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_PlanRB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_PlanRB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == "1") {
        PlanRB1.value = "";
        PlanRB2.value = "";
        PlanRB4.value = "";
        PlanRB3Panel.visible = true;
    } else {
        Address.value = "";
        City.value = "";
        State.value = "";
        ZipCode.value = "";
        residenceDate.value = "";
        rentalDate.value = "";
        PlanRB3Panel.visible = false;
    }
}
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_PlanRB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_PlanRB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == "1") {
        PlanRB1.value = "";
        PlanRB2.value = "";
        PlanRB3.value = "";
        PlanRB4Panel.visible = true;
    } else {
        LandlordName.value = "";
        ChargedRent.value = "";
        LandlordAddress.value = "";
        LandlordPhone.value = "";
        LandlordEmail.value = "";
        ConfirmLandlondEmail.value = "";
        PlanRB4Panel.visible = false;
    }
}
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function housing_update_form_housing_update_form.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function housing_update_form_housing_update_form.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function housing_update_form_housing_update_form.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_supportDoc3_valueCommit0 = function (scope) {
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
 * @function housing_update_form_housing_update_form.generated_StudentACK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_StudentACK_valueCommit0 = function (scope) {
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
                //StudentSignature.value = userValue;
                StudentSignature.value = firstName.value + " " + lastName.value;
                StudentSignatureDate.value = myresopnse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        StudentSignature.enabled = false;
        StudentSignatureDate.enabled = false;
    } else {
        StudentSignature.value = "";
        StudentSignatureDate.value = null;

    }
}
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_FinanceACK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_FinanceACK_valueCommit0 = function (scope) {
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
                StaffInitials.value = userValue;
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
 * @function housing_update_form_housing_update_form.generated_FinancialAidSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_FinancialAidSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled=false;
        }
	}
}
/**
 * @function housing_update_form_housing_update_form.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value !== null) {

    var wId = localStorage.getItem("workItemId");
    console.log("=workItemID=== " + wId);
    //if(this.value !== null){
    var instance = this.value;
    var adobeSignDocumentName = 'Housing_Update_Form_Adobe_Sign.pdf';
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
 * @function housing_update_form_housing_update_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (aidYear.value !== null) {
    getPdf();
} else {
    alert("Please fill all the required fields");
    showErrorModal("Alert!", "Please Select Aid Year");
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            console.log("in view pdf=" + result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/housing-update-form/housing-update-form');
            jsonData.append('fileName', firstName.value + "_" + lastName.value + "(" + cwid.value + ")");
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';
            xhr.send(jsonData);
            xhr.onload = function() {
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
                            blob = new File([this.response], filename, {
                                type: type
                            });
                        } catch (e) {
                            /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], {
                            type: type
                        });
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
                        setTimeout(function() {
                            URL.revokeObjectURL(downloadUrl);
                        }, 100); // cleanup
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
 * @function housing_update_form_housing_update_form.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
housing_update_form_housing_update_form.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (InstructionCB.value === null) {
    InstructionCB.mandatory = true;
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].InstructionTab[0]");
    showErrorModal("Alert !", "Please read the Instructions carefully & check the Checkbox below");
} else if (FirstAwardYesNo.value === null) {
    showErrorModal("Alert !", "Please select if this is the first Housing Plan Update form");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0].FirstAwardYesNo[0]");
} else if (PlanRB1.value === null && PlanRB2.value === null && PlanRB3.value === null && PlanRB4.value === null) {
    showErrorModal("Alert !", "Please select the housing plan update");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0]");
} else if (PlanRB3.value == "1" && (Address.value === null || City.value === null || State.value === null || ZipCode.value === null || residenceDate.value === null)) {
    showErrorModal("Alert !", "Please Complete the section under 'Live off-campus, by myself or with others, in an apartment or other rental property or house' checkbox");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0].PlanRB3Panel[0].Address[0]");
} else if (PlanRB3.value == "1" && supportDoc1.value === "" && supportDoc2.value === "" && supportDoc3.value === "") {
    showErrorModal("Alert !", "Please upload a copy of a rental or lease agreement.");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].SupportingDocumentsPanel[0].supportDoc1[0]");
} else if (PlanRB4.value == "1" && (LandlordName.value === null || ChargedRent.value === null || LandlordAddress.value === null || LandlordPhone.value === null)) {
    showErrorModal("Alert !", "Please Complete the section under 'Live off- campus, but cannot provide a copy of the rental agreement.' checkbox");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0].PlanRB4Panel[0].LandlordName[0]");
} else if (PlanRB4.value == "1" && LandlordEmail.value === null) {
    showErrorModal("Alert !", "Please enter the landlord email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0].PlanRB4Panel[0].LandlordEmail[0]");
} else if (PlanRB4.value == "1" && ConfirmLandlondEmail.value === null) {
    showErrorModal("Alert !", "Please enter the confirm landlord email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0].PlanRB4Panel[0].LandlordEmail[0]");
} else if (LandlordEmail.value != ConfirmLandlondEmail.value) {
    showErrorModal("Alert !", "landlord emails does not match");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].HousingPlanUpdatesPanel[0].PlanRB4Panel[0].LandlordEmail[0]");
} else {
    submitAction();
}

function submitAction() {
    if (StageIndicator.value === null) {
        aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + cwid.value;
        EmailSubject.value = "Test - Housing Update Form - " + cwid.value;
        var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
        HiddenStudentEmail.value = testEmail;
    }
    documentNameForAdobeSign.value = "Housing Update Form " + formCode.value;

    guideBridge.submit();
}
        }
	}
}
