/**
 * @function verification_of_independent_status_verification_of_independent_status.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  
  	disabledCutCopyPasteFunctionality(); //Function used to disable the cut copy paste functionality for confirm email field.

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var button = document.getElementsByClassName("rb1");

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
        getInitialDetails();
      	formCode.value = "F0CTXP";
        var financialAidYearVal = "2021-2022";
      	aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        getFinancialAidYear(financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        getInitialDetails();
      	formCode.value = "F1CTXP";
        var financialAidYearVal = "2022-2023";
      	aidYear.value = "2020";
        financialAidYear.value = financialAidYearVal;
        getFinancialAidYear(financialAidYearVal);
    };
}

function getInitialDetails() {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

            var userValue = response.userId;
            //var userValue = 'mchoi88';
            workflow_initiator.value = userValue;
            getStudentDetails(userValue);
            caseID();
          
          	/*var boldTextCHK = document.querySelectorAll(".boldText label"); // To make the checkbox labels bold
            for(var a=0; a<boldTextCHK.length; a++){
                boldTextCHK[a].style.fontWeight = 'bold';
            }*/
        }
    });
}

function getStudentDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getStudentPeronalInformationWithUserID",

        data: {
            userID: userValue
        },

        dataType: 'json',
        success: function(response) {

            if (response.length >= 1) {
                lastName.value = response[0].student_LName;
                firstName.value = response[0].student_FName;
                HiddenStudentUserID.value = response[0].student_UserID;
                cwid.value = response[0].student_ID;
                studentIDNumber.value = response[0].student_ID;
                //HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = "yjayaram@fullerton.edu";
                HiddenStudentName.value = response[0].student_FName + " " + response[0].student_LName;
            } else {
                showErrorModal("Alert!", "No matching records found");
            }
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

if(StageIndicator.value !== null){
  	var aidYearValue = financialAidYear.value; 
  	getFinancialAidYear(aidYearValue);
}

function getFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);

  	var formCodeTextVal = "";
  	if (financialAidYear == "2021-2022") {  
      	formCodeTextVal = "<p><b>CA Dream Act Application - F0CTXP</b></p>";
    }
  	if (financialAidYear == "2022-2023") {  
      	formCodeTextVal = "<p><b>CA Dream Act Application - F1CTXP</b></p>";
    }
  
    var titleTextVal = "<p><b>PARENT (AND SPOUSE) ".concat(taxFilingYear).concat(" TAX FILING STATEMENT(").concat(financialAidYearVal).concat(")</b></p>");
    var headingTextVal = "<p><b>PARENT (AND SPOUSE) ".concat(taxFilingYear).concat(" TAX FILING STATEMENT(").concat(financialAidYearVal).concat(")</b></p>");
    var textOneVal = "To verify parent(and parent spouse, if married) ".concat(taxFilingYear).concat(" income and wages information, you must provide the information below.");
    var textTwoVal = "<p><b>&nbsp; <u>Instructions for completing this form:</u></b><br><b>&nbsp; Complete Section A</b> whether or not you, the parent (and your spouse), have already completed your <b><u>".concat(taxFilingYear).concat("</u></b> U.S. Federal Tax Return</p>");
    var textThreeVal = "Did you, the parent, file a ".concat(taxFilingYear).concat(" income tax return with the IRS? (if married, include spouse)");
  	
  	var textFourVal = "";
  	if (financialAidYear == "2021-2022") { 
      	textFourVal = "<p>- Submit your ".concat(taxFilingYear).concat(" IRS Tax Return Transcript or ").concat(taxFilingYear).concat(" 1040 Tax<br>&nbsp; Returns along with schedules 1,2,3 if applicable<br>- Obtain your transcript from the IRS website http://www.irs.gov and<br>&nbsp; click on &quot;Get Transcript of Your Tax Records&quot; OR by calling (800)<br>&nbsp; 908-9946 to request an IRS Tax Return Transcript for the 2019 year</p>");
    }
    if (financialAidYear == "2022-2023") { 
      	textFourVal = "<p>- Submit your ".concat(taxFilingYear).concat(" IRS Tax Return Transcript or ").concat(taxFilingYear).concat(" 1040 Tax<br>&nbsp; Returns along with all schedules if applicable<br>- Obtain your transcript from the IRS website http://www.irs.gov and<br>&nbsp; click on &quot;Get Transcript of Your Tax Records&quot; OR by calling (800)<br>&nbsp; 908-9946 to request an IRS Tax Return Transcript for the 2017 year</p>");
    }
  
  	var textFiveVal = "";
  	if (financialAidYear == "2021-2022") { 
      	textFiveVal = "<p>- Submit a SIGNED copy of the 2019 Tax Return Transcript or<br> &nbsp;".concat(taxFilingYear).concat(" 1040 Tax Returns along with schedules 1,2,3 if applicable</p>");
    }
  	if (financialAidYear == "2022-2023") {  
      	textFiveVal = "<p>- Submit a SIGNED copy of the 2019 Tax Return Transcript or<br> &nbsp;".concat(taxFilingYear).concat(" 1040 Tax Returns along with all schedules if applicable</p>");
    }
    
   var textSixVal = "<p>- If tax extension is beyond the 6 month October 15, ".concat(taxFilingYear).concat(" deadline:</p>");
	
   var textSevenVal = "";
   if (financialAidYear == "2021-2022") {
     	 textSevenVal = "<p>- Submit form 4868, unexpired IRS approval of extensions<br>&nbsp; &nbsp;beyond the automatic 6-month extension<br>- All W2s, a signed statement with estimated ".concat(taxFilingYear).concat(" income<br>&nbsp; and/or business related income amount(s)(if applicable),<br>&nbsp; a signed&nbsp; copy of 2018 federal tax return form(1040,<br>&nbsp; 1040A, or 1040EZ), and provide confirmation of non-filing<br>&nbsp; from the IRS through from 4506-T (box 7) dated on or<br>&nbsp; after October 1, ").concat(taxFilingYear).concat("</p>");
   }
  
  if (financialAidYear == "2022-2023") {
     	 textSevenVal = "<p>- Submit form 4868, unexpired IRS approval of extensions<br>&nbsp; &nbsp;beyond the automatic 6-month extension<br>- All W2s, a signed statement with estimated ".concat(taxFilingYear).concat(" income<br>&nbsp; and/or business related income amount(s)(if applicable),<br>&nbsp; a signed&nbsp; copy of 2019 federal tax return form(1040,<br>&nbsp; 1040A, or 1040EZ), and provide confirmation of non-filing<br>&nbsp; from the IRS through from 4506-T (box 7) dated on or<br>&nbsp; after October 1, ").concat(taxFilingYear).concat("</p>");
   }
   

    var textEightVal = "<p>- Submit a signed and translated copy of your foreign tax return, which&nbsp;<br>&nbsp; &nbsp;shows the ".concat(taxFilingYear).concat(" Adjusted Gross Income(AGI) and taxes paid.</p>");
    var textNineVal = "<p>- MUST provide confirmation of non-filing from the IRS through<br>&nbsp; form 4506-T (box 7), or online through IRS dated on or after<br>&nbsp; October 1,".concat(taxFilingYear).concat("<br>&nbsp; or provide written statement of non-filing</p>");
    var textElevenVal = "<p style=text-decoration-line: underline;>- MUST provide confirmation of non-filing from the IRS through<br>&nbsp; form 4506-T (box 7), or online through IRS dated on or after<br>&nbsp; October 1, ".concat(taxFilingYear).concat("<br>&nbsp; or provide written statement of non-filing</p>");
    var textTenVal = "<p>- Submit a copy of all your ".concat(taxFilingYear).concat(" Form W-2(s) from your employer<br>&nbsp; or your ").concat(taxFilingYear).concat(" IRS Wage and Income tax Transcript. OR 1099S</p>");
    var textTwelveVal = "<p>- List the names of all your ".concat(taxFilingYear).concat(" employer(s) and the amount<br>&nbsp; earned from each employer in ").concat(taxFilingYear).concat(" in the space provided below</p>");
    //var textThirteenVal = "<p> " .concat (taxFilingYear).concat(" Amount Earned</p>");
    var textFourteenVal = "<p>  If an individual did not file an IRS income tax return, regardless if he/she earned any income from work, MUST provide confirmation of non-filing from the IRS through form 4506-T (box 7) or other relevant taxing authority dated on or after October 1, ".concat(taxFilingYear).concat(":</p>");
    /* var textFifteenVal = "<p>- All W2s, a signed statement with estinated 2020 income and/or business related income amount(s)(if applicable)," .concat
    "a signed  copy of 2018 federal tax return form(1040, 1040A, or 1040EZ), and provide confirmation of non-filing from the IRS through from 4506-T (box 7) dated on or after October 1, " .concat(taxFilingYear) .concat("</p>");*/

    var textFifteenVal = " ";
    if (financialAidYear == "2021-2022") {
        textFifteenVal = "<li>$12,200 if parents claimed you as a dependent</li> <li>$12,200 if single</li> <li>$18,350 if the head of household</li> <li>$24,400 if married, filing jointly</li> <li>$5 if married, filing separately</li> <li>Or, you had earnings from self-employment of any amount of at least $400.00</li></ul>";
    }
    if (financialAidYear == "2022-2023") {
        textFifteenVal = "<li>$12,400 if parents claimed you as a dependent</li> <li>$12,400 if single</li> <li>$18,650 if the head of household</li> <li>$24,800 if married, filing jointly</li> <li>$5 if married, filing separately</li> <li>Or, you had earnings from self-employment of any amount of at least $400.00</li></ul>";
    }
    var textSixteenVal = "<p> If an individual did not file an IRS income tax return, regardless if he/she earned any income from work, MUST provide confirmation of non-filing from the IRS through form 4506-T (box 7) or other relevant taxing authority dated on or after October 1, ".concat(taxFilingYear).concat(":</p>");

    var tableHeadingVal = "";
    if (financialAidYear == "2021-2022") {
        tableHeadingVal = "2019 Amount Earned";
    }
    if (financialAidYear == "2022-2023") {
        tableHeadingVal = "2020 Amount Earned";
    }
  
  	textThirteen.items = " ".concat(taxFilingYear).concat("Amount Earned");
  
  	var incomeCHKVal = "I was not employed and had no income earned from work in ".concat(taxFilingYear); 
  	var requiredCHKVal = "I was employed in ".concat(taxFilingYear).concat(" but not required to file");
  	var foreignTaxCHKVal = "I/we have filed a ".concat(taxFilingYear).concat(" Foreign Tax Return");

  	$("#formCodeText").html(formCodeTextVal);
    $("#f0ctxpHeadingText").html(titleTextVal);
    $("#f0ctxpTitleText").html(headingTextVal);
    $("#f0ctxpTextOne").html(textOneVal);
    $("#f0ctxpTextTwo").html(textTwoVal);
    $("#f0ctxpTextThree").html(textThreeVal);
    $("#f0ctxpTextFour").html(textFourVal);
    $("#f0ctxpTextFive").html(textFiveVal);
    $("#f0ctxpTextSix").html(textSixVal);
    $("#f0ctxpTextSeven").html(textSevenVal);
    $("#f0ctxpTextEight").html(textEightVal);
    $("#f0ctxpTextNine").html(textNineVal);
    $("#f0ctxpTextTen").html(textTenVal);
    $("#f0ctxpTextEleven").html(textElevenVal);
    $("#f0ctxpTextTwelve").html(textTwelveVal);
    // $("#f0ctxpTextThirteen").html(textThirteenVal);
    $("#f0ctxpTextFourteen").html(textFourteenVal);
    $("#f0ctxpInformationAmountSection1").html(textFifteenVal);
    $("#f0ctxpInformationAmountSection2").html(textSixteenVal);
    $("#tableHeading").html(tableHeadingVal);
  	$("#incomeCHKText").html(incomeCHKVal);
    $("#requiredCHKText").html(requiredCHKVal);
  	$("#foreignTaxCHKText").html(foreignTaxCHKVal);
  
  	/*var foreignTaxReturnVal = "I/we have filed a ".concat(taxFilingYear).concat(" Foregin Tax Return");  
  	$(".foreignTaxReturnCHK").html(foreignTaxReturnVal);*/
  	
  
  	
  	//incomeCHK.title = "I was not employed and had no income earned from work in ".concat(taxFilingYear);
  	//requireFileCHK.value = "I was employed in ".concat(taxFilingYear).concat(" but not required to file");
    //incomeCHK.items = "I was not employed and had no income earned from work in ".concat(taxFilingYear);
    //requireFileCHK.items = "I was employed in ".concat(taxFilingYear).concat(" but not required to file");
    //foreignTaxReturnCHK.items = " I/we have filed a ".concat(taxFilingYear).concat(" Foregin Tax Return");
}
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
	FinancialSignaturePanel.visible = false;	
}
else if(StageIndicator.value == "ToFinancialAid"){
	StudentInformation.enabled = false;
	ParentTaxFillingTab.enabled = false;
  	StudentSignaturePanel.enabled = false;
  	SupportingDocumentsPanel.visible = false;
  	FinancialSignaturePanel.visible = true;  	
}



        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
  
  	//disabledCutCopyPasteFunctionality(); //Function used to disable the cut copy paste functionality for confirm email field.

	 $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

            //var userValue = response.userId;
            //var userValue = 'mariana2';	 	  	// two Aid Year
            var userValue = 'majesticallexi';    	// one Aid Year
            //var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;
			caseID();
            getStudentDetails(userValue);            
          
          	/*var boldTextCHK = document.querySelectorAll(".boldText label"); // To make the checkbox labels bold
            for(var a=0; a<boldTextCHK.length; a++){
                boldTextCHK[a].style.fontWeight = 'bold';
            }*/
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
        url: "/bin/getStudentPeronalInformationWithUserID",

        data: {
            userID: userValue
        },

        dataType: 'json',
        success: function(response) {

            if (response.length >= 1) {
				
				var studentCWID = response[0].student_ID;
              	getStudentAidYearDetails(studentCWID);
				var aidYearFlag = getStudentAidYearDetails(studentCWID); 
              	
                lastName.value = response[0].student_LName;
                firstName.value = response[0].student_FName;
                HiddenStudentUserID.value = response[0].student_UserID;
                cwid.value = response[0].student_ID;
                studentIDNumber.value = response[0].student_ID;
                //HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = "yjayaram@fullerton.edu";
                HiddenStudentName.value = response[0].student_FName + " " + response[0].student_LName;              
                
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
			
			var aidYears = [];
			var aidYearsObj = {};	 
          	var identifyAidYearFlag;

            for(var a=0; a<response.length; a++){
				aidYears.push(response[a]);				
			}
			
			for (var b = 0; b < aidYears.length; b++) {
				aidYearsObj = aidYears[b];
				for (var key in aidYearsObj) {
					if ("AID_YEAR" == key) {
                      	identifyAidYearFlag = "OneAidYear";						
					}
					else if("SECOND_AID_YEAR" == key){
                      	identifyAidYearFlag = "TwoAidYear";						
					}                  	
				}
			}          	
          
          	if(identifyAidYearFlag == "OneAidYear"){
              	singleAidYear();
            }
          	else if(identifyAidYearFlag == "TwoAidYear"){
              	aidYearPopup();
            }
          	else {
              	showErrorModal("Alert !", "No matching records found for the Aid Year");						
            }
        }
    });  	
}



function aidYearPopup(){
	var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var button = document.getElementsByClassName("rb1");

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
        //getInitialDetails();
      	formCode.value = "F0CTXS";
        var financialAidYearVal = "2021-2022";
      	aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        getFinancialAidYear(financialAidYearVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        //getInitialDetails();
      	formCode.value = "F1CTXS";
        var financialAidYearVal = "2022-2023";
      	aidYear.value = "2020";
        financialAidYear.value = financialAidYearVal;
        getFinancialAidYear(financialAidYearVal);
    };
}


function singleAidYear(){
  		formCode.value = "F0CTXS";
        var financialAidYearVal = "2021-2022";
      	aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        getFinancialAidYear(financialAidYearVal);
}



if(StageIndicator.value !== null){
  	var aidYearValue = financialAidYear.value; 
  	getFinancialAidYear(aidYearValue);
}



function getFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);

  	var formCodeTextVal = "";
  	if (financialAidYear == "2021-2022") {  
      	formCodeTextVal = "<p><b>CA Dream Act Application - F0CTXS</b></p>";
    }
  	if (financialAidYear == "2022-2023") {  
      	formCodeTextVal = "<p><b>CA Dream Act Application - F1CTXS</b></p>";
    }
  
    var titleTextVal = "<p><b>STUDENT (AND SPOUSE) ".concat(taxFilingYear).concat(" TAX FILING STATEMENT(").concat(financialAidYearVal).concat(")</b></p>");
    var headingTextVal = "<p><b>STUDENT (AND SPOUSE) ".concat(taxFilingYear).concat(" TAX FILING STATEMENT(").concat(financialAidYearVal).concat(")</b></p>");
    var textOneVal = "To verify student (and student's spouse, if married) ".concat(taxFilingYear).concat(" income and wages information, you must provide the information below.");
    var textTwoVal = "<p><b>&nbsp; <u>Instructions for completing this form:</u></b><br><b>&nbsp; Complete Section A</b> whether or not you, the student (and your spouse), have already completed your <b><u>".concat(taxFilingYear).concat("</u></b> U.S. Federal Tax Return</p>");
    var textThreeVal = "Did you, the student, file a ".concat(taxFilingYear).concat(" income tax return with the IRS? (if married, include spouse)");
  	
  	var textFourVal = "";
  	if (financialAidYear == "2021-2022") { 
      	textFourVal = "<p>- Submit your ".concat(taxFilingYear).concat(" Tax Return Transcript or a signed copy of the ").concat(taxFilingYear).concat(" 1040 Tax<br>&nbsp; Returns along with schedules 1,2,3 if applicable<br>- Obtain your transcript from the IRS website http://www.irs.gov and<br>&nbsp; click on &quot;Get Transcript of Your Tax Records&quot; OR by calling (800)<br>&nbsp; 908-9946 to request an IRS Tax Return Transcript for the 2019 year</p>");
    }
    if (financialAidYear == "2022-2023") { 
      	textFourVal = "<p>- Submit your ".concat(taxFilingYear).concat(" IRS Tax Return Transcript or ").concat(taxFilingYear).concat(" 1040 Tax<br>&nbsp; Returns along with all schedules if applicable<br>- Obtain your transcript from the IRS website http://www.irs.gov and<br>&nbsp; click on &quot;Get Transcript of Your Tax Records&quot; OR by calling (800)<br>&nbsp; 908-9946 to request an IRS Tax Return Transcript for the 2017 year</p>");
    }
  
  	var textFiveVal = "";
  	if (financialAidYear == "2021-2022") { 
      	textFiveVal = "<p>- Submit a SIGNED copy of the 2019 Tax Return Transcript or<br> &nbsp;".concat(taxFilingYear).concat(" 1040 Tax Returns along with schedules 1,2,3 if applicable</p>");
    }
  	if (financialAidYear == "2022-2023") {  
      	textFiveVal = "<p>- Submit a SIGNED copy of the 2019 Tax Return Transcript or<br> &nbsp;".concat(taxFilingYear).concat(" 1040 Tax Returns along with all schedules if applicable</p>");
    }
    
   var textSixVal = "<p>- If tax extension is beyond the 6 month October 15, ".concat(taxFilingYear).concat(" deadline:</p>");
	
   var textSevenVal = "";
   if (financialAidYear == "2021-2022") {
     	 textSevenVal = "<p>- Submit form 4868, unexpired IRS approval of extensions<br>&nbsp; &nbsp;beyond the automatic 6-month extension<br>- All W2s, a signed statement with estimated ".concat(taxFilingYear).concat(" income<br>&nbsp; and/or business related income amount(s)(if applicable),<br>&nbsp; a signed&nbsp; copy of 2018 federal tax return form(1040,<br>&nbsp; 1040A, or 1040EZ), and provide confirmation of non-filing<br>&nbsp; from the IRS through from 4506-T (box 7) dated on or<br>&nbsp; after October 1, ").concat(taxFilingYear).concat("</p>");
   }
  
  if (financialAidYear == "2022-2023") {
     	 textSevenVal = "<p>- Submit form 4868, unexpired IRS approval of extensions<br>&nbsp; &nbsp;beyond the automatic 6-month extension<br>- All W2s, a signed statement with estimated ".concat(taxFilingYear).concat(" income<br>&nbsp; and/or business related income amount(s)(if applicable),<br>&nbsp; a signed&nbsp; copy of 2019 federal tax return form(1040,<br>&nbsp; 1040A, or 1040EZ), and provide confirmation of non-filing<br>&nbsp; from the IRS through from 4506-T (box 7) dated on or<br>&nbsp; after October 1, ").concat(taxFilingYear).concat("</p>");
   }
   

    var textEightVal = "<p>- Submit a signed and translated copy of your foreign tax return, which&nbsp;<br>&nbsp; &nbsp;shows the ".concat(taxFilingYear).concat(" Adjusted Gross Income(AGI) and taxes paid.</p>");
    var textNineVal = "<p>- MUST provide confirmation of non-filling from the IRS through<br>&nbsp; form 4506-T (box 7), or online through IRS dated on or after<br>&nbsp; October 1,".concat(taxFilingYear).concat("<br>&nbsp; or provide written statement of non-filing</p>");
    var textElevenVal = "<p style=text-decoration-line: underline;>- MUST provide confirmation of non-filling from the IRS through<br>&nbsp; form 4506-T (box 7), or online through IRS dated on or after<br>&nbsp; October 1, ".concat(taxFilingYear).concat("<br>&nbsp; or provide written statement of non-filing</p>");
    var textTenVal = "<p>- Submit a copy of all your ".concat(taxFilingYear).concat(" Form W-2(s) from your employer<br>&nbsp; or your ").concat(taxFilingYear).concat(" IRS Wage and Income tax Transcript. OR 1099S</p>");
    var textTwelveVal = "<p>- List the names of all your ".concat(taxFilingYear).concat(" employer(s) and the amount<br>&nbsp; earned from each employer in ").concat(taxFilingYear).concat(" in the space provided below</p>");
    //var textThirteenVal = "<p> " .concat (taxFilingYear).concat(" Amount Earned</p>");
    var textFourteenVal = "<p>  If an individual did not file an IRS income tax return, regardless if he/she earned any income from work, MUST provide confirmation of non-filing from the IRS through form 4506-T (box 7) or other relevant taxing authority dated on or after October 1, ".concat(taxFilingYear).concat(":</p>");
    /* var textFifteenVal = "<p>- All W2s, a signed statement with estinated 2020 income and/or business related income amount(s)(if applicable)," .concat
    "a signed  copy of 2018 federal tax return form(1040, 1040A, or 1040EZ), and provide confirmation of non-filing from the IRS through from 4506-T (box 7) dated on or after October 1, " .concat(taxFilingYear) .concat("</p>");*/

    textThirteen.items = " ".concat(taxFilingYear).concat("Amount Earned");
    incomeCHK.items = "I was not employed and had no income earned from work in ".concat(taxFilingYear);
    requireFileCHK.items = "I was employed in ".concat(taxFilingYear).concat(" but not required to file");
    foreignTaxReturnCHK.items = " I/we have filed a ".concat(taxFilingYear).concat(" Foregin Tax Return");

    var textFifteenVal = " ";
    if (financialAidYear == "2021-2022") {
        textFifteenVal = "<li>$12,200 if parents claimed you as a dependent</li> <li>$12,200 if single</li> <li>$18,350 if the head of household</li> <li>$24,400 if married, filing jointly</li> <li>$5 if married, filing separately</li> <li>Or, you had earnings from self-employment of any amount of at least $400.00</li></ul>";
    }
    if (financialAidYear == "2022-2023") {
        textFifteenVal = "<li>$12,400 if parents claimed you as a dependent</li> <li>$12,400 if single</li> <li>$18,650 if the head of household</li> <li>$24,800 if married, filing jointly</li> <li>$5 if married, filing separately</li> <li>Or, you had earnings from self-employment of any amount of at least $400.00</li></ul>";
    }
    var textSixteenVal = "<p> If an individual did not file an IRS income tax return, regardless if he/she earned any income from work, MUST provide confirmation of non-filing from the IRS through form 4506-T (box 7) or other relevant taxing authority dated on or after October 1, ".concat(taxFilingYear).concat(":</p>");

    var tableHeadingVal = "";
    if (financialAidYear == "2021-2022") {
        tableHeadingVal = "2019 Amount Earned";
    }
    if (financialAidYear == "2022-2023") {
        tableHeadingVal = "2020 Amount Earned";
    }

  	$("#formCodeText").html(formCodeTextVal);
    $("#f0ctxpHeadingText").html(titleTextVal);
    $("#f0ctxpTitleText").html(headingTextVal);
    $("#f0ctxpTextOne").html(textOneVal);
    $("#f0ctxpTextTwo").html(textTwoVal);
    $("#f0ctxpTextThree").html(textThreeVal);
    $("#f0ctxpTextFour").html(textFourVal);
    $("#f0ctxpTextFive").html(textFiveVal);
    $("#f0ctxpTextSix").html(textSixVal);
    $("#f0ctxpTextSeven").html(textSevenVal);
    $("#f0ctxpTextEight").html(textEightVal);
    $("#f0ctxpTextNine").html(textNineVal);
    $("#f0ctxpTextTen").html(textTenVal);
    $("#f0ctxpTextEleven").html(textElevenVal);
    $("#f0ctxpTextTwelve").html(textTwelveVal);
    // $("#f0ctxpTextThirteen").html(textThirteenVal);
    $("#f0ctxpTextFourteen").html(textFourteenVal);
    $("#f0ctxpInformationAmountSection1").html(textFifteenVal);
    $("#f0ctxpInformationAmountSection2").html(textSixteenVal);
    $("#tableHeading").html(tableHeadingVal);
}
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status.generated_Information_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_Information_init0 = function (scope) {
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
 * @function verification_of_independent_status_verification_of_independent_status.generated_Application_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_Application_init0 = function (scope) {
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
 * @function verification_of_independent_status_verification_of_independent_status.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
