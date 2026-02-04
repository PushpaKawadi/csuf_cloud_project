/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_guideRootPanel_init0 = function (scope) {
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
                //HiddenStudentEmail.value = response[0].PREF_EMAIL;
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
      	aidYear.value = "2021";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0AWAP";
        formCodeVal = "F0AWAP";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }	
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	aidYear.value = "2022";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1AWAP";
        formCodeVal = "F1AWAP";
		getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
    }	
    else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0AWAP";
        formCodeVal = "F0AWAP";
        //financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
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
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0AWAP";
        formCodeVal = "F0AWAP";
        getFAFSAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
     };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1AWAP";
        formCodeVal = "F1AWAP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);
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
    var awardYearOne = ""; 
     
   if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0AWAP</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal ="<p><b>F1AWAP</b></p>";
    }
  
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>AWARD ADJUSTMENT APPEAL FORM (".concat(financialAidYear).concat(")</b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>AWARD ADJUSTMENT APPEAL FORM (".concat(financialAidYear).concat(")</b></p>");
    }
  
   if(financialAidYear =="2021-2022"){
    awardYearOne = "<b> Change academic year award to Fall '21 only (I am graduating/transferring Spring '22) </b>";
  }
   if (financialAidYear == "2022-2023") {
     awardYearOne = "<b> Change academic year award to Fall '22 only (I am graduating/transferring Spring '23) </b>";
   } 
   
   var awardYearTwo = ""; 
  if(financialAidYear =="2021-2022"){
    awardYearTwo = "<b> Change academic year award to Spring '22 only (I will not attend CSUF Fall '21) </b>";
  }
   if (financialAidYear == "2022-2023") {
     awardYearTwo = "<b> Change academic year award to Spring '23 only (I will not attend CSUF Fall '22) </b>";
   }
   
  var awardYearThree = ""; 
  if(financialAidYear =="2021-2022"){
    awardYearThree = "<b> Reinstate my Fall '21 awards (I will be enrolled at CSUF at least half-time Fall '21) </b>";
  }
   if (financialAidYear == "2022-2023") {
     awardYearThree = "<b> Reinstate my Fall '22 awards (I will be enrolled at CSUF at least half-time Fall '22) </b>";
   }
  
  var awardYearFour = ""; 
  if(financialAidYear =="2021-2022"){
    awardYearFour = "<b> Reinstate my Spring '22 awards (I will be enrolled at CSUF at least half-time Spring '22) </b>";
  }
   if (financialAidYear == "2022-2023") {
     awardYearFour = "<b> Reinstate my Spring '23 awards (I will be enrolled at CSUF at least half-time Spring '23) </b>";
   }
  
    var textOneVal = " <b> Is this the first Award Adjustment Appeal that you are submitting for the ".concat(financialAidYear).concat(" academic year? </b> ");
  var taxFilingYear ="";
  if (financialAidYear == "2021-2022") {
     taxFilingYear = " <b> Fall 2021 grade program: </b>";
   }
   if (financialAidYear == "2022-2023") {
     taxFilingYear = " <b> Fall 2022 grade program: </b>";
   }
  var taxFilingYear1 ="";
     if (financialAidYear == "2021-2022") {
     taxFilingYear1 = " <b> Spring 2022 grade program: </b>";
   }
   if (financialAidYear == "2022-2023") {
     taxFilingYear1 = " <b> Spring 2023 grade program: </b>";
   }
/*    var textTwoVal = " <b> Fall " .concat(taxFilingYear).concat(" grade program:</b> ");
    var textThreeVal = " <b> Spring " .concat(taxFilingYear).concat(" grade program:</b> ");*/
  
  var tableYear1 = "";
  if(financialAidYear == "2021-2022"){
    tableYear1 = "New Total for Award Year 2021-2022";
  }
  if(financialAidYear =="2022-2023"){
    tableYear1 = "New Total for Award Year 2022-2023";
  }
  
  var tableYear2 = "";
  if(financialAidYear == "2021-2022"){
    tableYear2 = "<b>$2000 - </b> <i> divide this amount between Fall 2021 and Spring 2022</i>";
  }
  if(financialAidYear == "2022-2023"){
    tableYear2 = "<b>$2000 - </b> <i> divide this amount between Fall 2022 and Spring 2023</i>";
  }
  
  var Year = ""; 
  if(financialAidYear == "2021-2022"){
    Year = "Fall 2021";
  }
  if(financialAidYear == "2022-2023"){
    Year = "Fall 2022";
  }
  
  var Year1 =""; 
  if(financialAidYear == "2021-2022"){
    Year1 = "Spring 2022";
  }
  if(financialAidYear == "2022-2023"){
    Year1 = "Spring 2023";
  }
  
  //  var textFourVal = " <b> Change academic year award to Fall " .concat(awardYear).concat (" only (I am graduating/transferring Spring "  .concat(awardYear).concat(") </b>"));
  
    $("#FOAWAPTitleText").html(headingTextVal);
    $("#FOAWAPFormCodeText").html(formCodeTextVal);
    $("#FOAWAPTextOne").html(textOneVal);
    $("#FOAWAPTaxYear").html(taxFilingYear);
    $("#FOAWAPTaxYear1").html(taxFilingYear1);
    $("#FOAWAPAwardYearOne").html(awardYearOne);
    $("#FOAWAPAwardYearTwo").html(awardYearTwo); 
    $("#FOAWAPAwardYearThree").html(awardYearThree); 
    $("#FOAWAPAwardYearFour").html(awardYearFour);
    $("#FOAWAPTableYear").html(tableYear1);
    $("#FOAWAPTableYear2").html(tableYear2);
    $("#FOAWAPYear").html(Year);
    $("#FOAWAPYear1").html(Year1);
  
}

function checkforDuplicateSubmissions(formCodeVal){
var tableName = "AEM_AWARD_APPEAL_FORM";
var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
var formCodeColumnName = "FORM_CODE";
var faDecision = "1";
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
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
	StudentInformation.visible = true;
    ActionsRequiredTab.visible = true;
    ActionsRequiredTab.enabled = true;
    StudentSignPanel.visible =true;
    StudentSignPanel.enabled=true;
    FinancialAidPanel.visible=false;
  
   $.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
}
 if(StageIndicator.value == "ToFinancialAid"){
	StudentInformation.enabled = false;
   InstructionTab.enabled = false;
    ActionsRequiredTab.visible =true;
	ActionsRequiredTab.enabled = false;
    StudentSignPanel.visible = true;
  	StudentSignPanel.enabled = false;
  	FinancialAidPanel.visible = true;
  	FinancialAidPanel.enabled = true;  	
}



        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_guideRootPanel_init2 = function (scope) {
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
            //var userValue = 'veronica.maciel'; // two Aid Year
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
            action: "CV_USER_DETAILS",
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
                //HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                StudentCwid.value = response[0].EMPLID;

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
                } else if (typeOfAidYear == "1") {
                    singleAidYear();
                } else if ((identifyAidYearFlag == "OneAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    singleAidYear();
                } else if ((identifyAidYearFlag == "TwoAidYear") && (typeOfAidYear != "0" && typeOfAidYear != "1")) {
                    //aidYearPopup();
                    singleAidYear();
                } else {
                    //showErrorModal("Alert !", "No matching records found for the Aid Year");
                    singleAidYear();
                }
            } else {
                //showErrorModal("Alert !", "No matching records found");
                singleAidYear();
            }
        }
    });
}

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";

    var financialAidvalues = getAidYearValuesOnSingleAidYear();

    if (typeOfAidYear == '0') {
        financialAidYearVal = financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0AWAP";
        formCodeVal = "F0AWAP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1AWAP";
        formCodeVal = "F1AWAP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = financialAidvalues.FinAidYearGeneral;
        aidYear.value = financialAidvalues.AidYearGeneral - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FormCodeGeneral + "AWAP";
        formCodeVal = financialAidvalues.FormCodeGeneral + "AWAP";
        //financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
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
        aidYear.value = financialAidvalues.AidYearOne - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeOne + "AWAP";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne + "AWAP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo - 1;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo + "AWAP";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo + "AWAP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };
}


if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;

    var aidYearVal = aidYear.value;
    var aidYearVal2 = parseInt(aidYearVal)+1;
    var textChange = getUniqueStatements("AWARD_ADJUSTMENT_APPEAL", aidYearVal, "");

    var YearOneChange = textChange.YearOne;
    var YearTwoChange = textChange.YearTwo;
  
    AdjYear1.value=YearOneChange;
    AdjYear2.value=YearTwoChange;
    AdjYear3.value=YearTwoChange;
    AdjYear4.value=YearOneChange;
    AdjYear5.value=YearOneChange;
    AdjYear6.value=YearOneChange;
    AdjYear7.value=YearTwoChange;
    AdjYear8.value=YearTwoChange;

    var headingTextVal = "<p><b>AWARD ADJUSTMENT APPEAL FORM (".concat(financialAidYear).concat(")</b></p>");
    var formCodeTextVal = "<p><b>" + formCode.value + "</b></p>";

    var awardYearOne = "<b> Change academic year award to Fall ".concat(YearOneChange).concat(" only (I am graduating/transferring Spring ".concat(YearTwoChange).concat(") </b>"));

    var awardYearTwo = "<b> Change academic year award to Spring ".concat(YearTwoChange).concat(" only (I will not attend CSUF Fall ".concat(YearOneChange).concat(") </b>"));

    var awardYearThree = "<b> Reinstate my Fall ".concat(YearOneChange).concat(" awards (I will be enrolled at CSUF at least half-time Fall ".concat(YearOneChange).concat(") </b>"));

    var awardYearFour = "<b> Reinstate my Spring ".concat(YearTwoChange).concat(" awards (I will be enrolled at CSUF at least half-time Spring ".concat(YearTwoChange).concat(") </b>"));

    var textOneVal = " <b> Is this the first Award Adjustment Appeal that you are submitting for the ".concat(financialAidYear).concat(" academic year? </b> ");

    var taxFilingYear = " <b> Fall ".concat(aidYearVal).concat(" grade program: </b>");

    var taxFilingYear1 = " <b> Spring ".concat(aidYearVal2).concat(" grade program: </b>");

    /*    var textTwoVal = " <b> Fall " .concat(taxFilingYear).concat(" grade program:</b> ");
        var textThreeVal = " <b> Spring " .concat(taxFilingYear).concat(" grade program:</b> ");*/

    var tableYear1 = "New Total for Award Year ".concat(financialAidYear);

    var tableYear2 = "<b>$2000 - </b> <i> divide this amount between Fall ".concat(aidYearVal).concat(" and Spring ".concat(aidYearVal2).concat("</i>"));

    var Year = "Fall ".concat(aidYearVal);

    var Year1 = "Spring ".concat(aidYearVal2);

    //  var textFourVal = " <b> Change academic year award to Fall " .concat(awardYear).concat (" only (I am graduating/transferring Spring "  .concat(awardYear).concat(") </b>"));

    $("#FOAWAPTitleText").html(headingTextVal);
    $("#FOAWAPFormCodeText").html(formCodeTextVal);
    $("#FOAWAPTextOne").html(textOneVal);
    $("#FOAWAPTaxYear").html(taxFilingYear);
    $("#FOAWAPTaxYear1").html(taxFilingYear1);
    $("#FOAWAPAwardYearOne").html(awardYearOne);
    $("#FOAWAPAwardYearTwo").html(awardYearTwo);
    $("#FOAWAPAwardYearThree").html(awardYearThree);
    $("#FOAWAPAwardYearFour").html(awardYearFour);
    $("#FOAWAPTableYear").html(tableYear1);
    $("#FOAWAPTableYear2").html(tableYear2);
    $("#FOAWAPYear").html(Year);
    $("#FOAWAPYear1").html(Year1);

}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_AWARD_APPEAL_FORM";
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
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

type: 'GET',
url:"/bin/getCaseID",
dataType: 'json',

success: function(myresponse){
caseId.value = myresponse.CASEID;

}
});
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	  this.enabled = false;
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
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
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_LoanSubsidized_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_LoanSubsidized_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value=="1"){
  LoanUnsubsidized.value="";
  LoanRequestReduceCancel.value="";
  LoanGradPlus.value="";
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_LoanUnsubsidized_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_LoanUnsubsidized_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value=="1"){
  PrivateStudentLoan.value="";
  LoanGradPlus.value="";
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_LoanGradPlus_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_LoanGradPlus_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value=="1"){
  LoanUnsubsidized.value="";
  PrivateStudentLoan.value="";
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_PrivateStudentLoan_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_PrivateStudentLoan_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value=="1"){
  LoanUnsubsidized.value="";
  LoanGradPlus.value="";
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_StudentACK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_StudentACK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null){
if(this.value == 1){
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

}else{
StudentSignature.value = "";
StudentSignatureDate.value = null;
 
}
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_FinanceACK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_FinanceACK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === "ToFinancialAid"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
FinancialAidSign.value = userValue;
FinancialAidSignDate.value = myresopnse.SERVER_DATE;
financialAidAssignee.value=myresopnse.userId;


},
error: function(error) {
alert("error block=" + error);
}
});

FinancialAidSign.enabled = false;
FinancialAidSignDate.enabled = false;
financialAidAssignee.enabled=false;


}else{
FinancialAidSign.value = "";
FinancialAidSignDate.value = null;
financialAidAssignee.value="";
 
}
}
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_FinancialAidSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_FinancialAidSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_HiddenStudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_HiddenStudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value=FirstName+ " "+LastName;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if (aidYear.value !== null) {
    getPdf();
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }

function getPdf() {
    console.log("in view pdf");
   
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/award-adjustment-appeal/award-adjustment-appeal');
            jsonData.append('fileName', firstName.value+"_"+lastName.value + "(" + cwid.value + ")");           
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
 * @function award_adjustment_appeal_award_adjustment_appeal.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
award_adjustment_appeal_award_adjustment_appeal.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(InstructionCB.value === null){
  InstructionCB.mandatory=true;
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].InstructionTab[0]"); 
  showErrorModal("Alert !", "Please read the Instructions carefully & check the Checkbox below");
}
else if(AdjAwardCB1.value === null && AdjAwardCB2.value === null && AdjAwardCB3.value === null && AdjAwardCB4.value === null){
  	showErrorModal("Alert !", "Please select the Award");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].ActionsRequiredTab[0].panel1658482395945[0]");
} 
else{
  	submitAction();
}

function submitAction(){
  aftiaDescCWID.value = firstName.value+ " " + lastName.value + " " + cwid.value;
  EmailSubject.value = "Award Adjustment Appeal - " + cwid.value;
  

  var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  
  HiddenStudentEmail.value = testEmail;
  guideBridge.submit();
}
        }
	}
}
