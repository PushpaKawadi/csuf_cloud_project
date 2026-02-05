/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_guideRootPanel_init0 = function (scope) {
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

            //var userValue = response.userId;
            var userValue = 'mariana2'; // two Aid Year
            // var userValue = 'majesticallexi'; // one Aid Year
            //var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;

            getStudentDetails(userValue);

            /*var boldTextCHK = document.querySelectorAll(".boldText label"); // To make the checkbox labels bold
		for(var a=0; a<boldTextCHK.length; a++){
			boldTextCHK[a].style.fontWeight = 'bold';
		}*/
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
            //    PrintStudentCWID.value = response[0].EMPLID;
                studentIDNumber.value = response[0].EMPLID;
                //  studentIDNumber.value = response[0].student_ID;
                // HiddenStudentEmail.value = response[0].student_Email;
                HiddenStudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
                HiddenStudentName.value =  response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                //StudentCWID.value = response[0].student_ID;

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


// Validation for aidYear=0 - 2021-2022 or aidYear=1 - 2022-2023

function singleAidYear() {
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    // var financialAidYearVal1 = "";

    if (typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0TXAP";
        // financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
    } else if (typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1TXAP";
        // financialAidYearVal1.value="1998";
        getFAFSAFinancialAidYear(aidYearValue);
    } else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "F0TXAP";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1TXAP";
        //financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);
    }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getFAFSAFinancialAidYear(aidYearValue);
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
        aidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0TXAP";
        // financialAidYearVal1.value = "1997";
        getFAFSAFinancialAidYear(aidYearValue);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1TXAP";
        // financialAidYearVal1.value = "1998";
        getFAFSAFinancialAidYear(aidYearValue);

    };
}


debugger;
if (StageIndicator.value !== null) {

    aidYearValue = financialAidYear.value;
    getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var financialAidYearVal1 = "";
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = aidYear.value;
    //var taxFilingYear1= aidYear.value-1;
    var headingTextVal = "";
    debugger;

    var formCodeTextVal = "";
    if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0TXAP</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formCodeTextVal = "<p><b>F1TXAP</b></p>";
    }

    var testTextVal = "";
    if (financialAidYear == "2021-2022") {
        testTextVal = "2019";
    }
    if (financialAidYear == "2022-2023") {
        testTextVal = "2020";
    }

  /*  var YearTextVal = "";
    if (financialAidYear == "2021-2022") {
        YearTextVal = "2022";
    }
    if (financialAidYear == "2022-2023") {
        YearTextVal = "2023";
    }
  
  var DiffYearTextVal = "";
    if (financialAidYear == "2021-2022") {
        DiffYearTextVal = "2020-2021";
    }
    if (financialAidYear == "2022-2023") {
        DiffYearTextVal = "2022-2023";
    }*/


    var headingTextVal = "<p><b>PARENT AMENDED TAX RETURN ".concat(" (" + financialAidYearVal + ")");

    var textOneVal = "<b><i> INSTRUCTIONS: </b></i>".concat(" Additional documents are needed to clarify information your parent listed on the ").concat(financialAidYearVal).concat(" Free Application for Federal Student Aid (FAFSA) so we may determine your Financial Aid eligibility. See definition of parent below. <i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i>");


    var textTwoVal = "A copy of your parent’s original ".concat(testTextVal).concat(" IRS Tax Return Transcript or ") .concat(testTextVal).concat( " 1040 Tax Returns");

    var textThreeVal = "A signed copy of your parent’s ".concat(testTextVal).concat(" IRS Form 1040X “Amended U.S. Individual Income Tax Return” ");

    var textFourVal = "A copy of your parent’s original ".concat(testTextVal).concat(" IRS Tax Return Transcript OR Unchanged IRS Data Retrieval Tool data showing the tax data from the original tax return ");

    $("#F0TXAPFormCode").html(formCodeTextVal);
    $("#F0TXAPheadingText").html(headingTextVal);

    $("#F0TXAPTextOne").html(textOneVal);
    $("#F0TXAPTextTwo").html(textTwoVal);
    $("#F0TXAPTextThree").html(textThreeVal);
    $("#F0TXAPTextFour").html(textFourVal);

}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value===null){
  FinancialAidSignaturePanel.visible=false;
  FinancialAidSignaturePanel.enabled =false;
  
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
  
  	disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
}

if(StageIndicator.value=="ToFinancialAid"){
  StudentInformation.visible=true;
  StudentInformation.enabled=false;
  SupportingDocumentsPanel.visible=true;
  SupportingDocumentsPanel.enabled=false;
  ActionsTab.visible=true;
  ActionsTab.enabled=false;
  StudentSignaturePanel.visible=false;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible=true;
  FinancialAidSignaturePanel.enabled=true;
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_caseId_init0 = function (scope) {
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
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
 this.value = d;
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Action1CB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Action1CB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  Action2CB1.value=""; 
  Action2CB2.value=""; 
  Action2CB3.value=""; 
  Action2CB4.value="";
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Action1CB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Action1CB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  Action2CB1.value=""; 
  Action2CB2.value=""; 
  Action2CB3.value=""; 
  Action2CB4.value="";
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  Action1CB1.value=""; 
  Action1CB2.value=""; 
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  Action1CB1.value=""; 
  Action1CB2.value=""; 
  Action2CB3.value="";
  Action2CB4.value="";
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  Action1CB1.value=""; 
  Action1CB2.value=""; 
  Action2CB2.value="";
  Action2CB4.value="";
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_Action2CB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  Action1CB1.value=""; 
  Action1CB2.value=""; 
  Action2CB2.value=""; 
  Action2CB3.value="";
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_supportDoc3_valueCommit0 = function (scope) {
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_StudentCB_valueCommit0 = function (scope) {
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
		studentSignature.value = "";
		studentSignDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;        
    });
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_evaluator_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToFinancialAid") {
  if (this.value == 1) {
    $.ajax({

      type: 'GET',
      url: "/bin/getLoggedInUserDetails",
      dataType: 'json',

      success: function (myresponse) {
        var userValue = myresponse.userName;
        staffSignature.value = userValue;
        staffSignDate.value = myresponse.SERVER_DATE;
        financialAidAssignee.value = myresponse.userId;
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });

    staffSignature.enabled = false;
    staffSignDate.enabled = false;
    financialAidAssignee.enabled = false;

  } else {
    staffSignature.value = "";
    staffSignDate.value = "";
    financialAidAssignee.value = "";
  }
}
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_Amended_Tax_Return_Adobe_Sign.pdf';		
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_financialAidAssignee_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_financialAidAssignee_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_Nonfiler_Verification_Adobe_Sign.pdf';		
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (aidYear.value !== null) {
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
            jsonData.append('formPath', '/content/forms/af/parent-amended-tax-return/parent-amended-tax-return');
            jsonData.append('fileName', HiddenStudentName.value);          
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
 * @function parent_amended_tax_return_parent_amended_tax_return.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_amended_tax_return_parent_amended_tax_return.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
              debugger;
 if(parentEmail.value === null){
  	showErrorModal("Alert !", "Please enter the parent email");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
    }else if(parentEmail.value != confirmParentEmail.value){
        showErrorModal("Alert !", "Parent email does not match");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
      
    }else if((Action1CB1.value === null || Action1CB2.value === null) && (Action2CB1.value===null || Action2CB2.value===null && Action2CB3.value===null && Action2CB4.value===null)){
        showErrorModal("Alert !", "Please select the action");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].ActionsTab[0]");
    }
  
else {
		
		submitAction();		
	}

function submitAction(){
if(StageIndicator.value === null){
  aftiaDescCWID.value = HiddenStudentName.value+" "+cwid.value;
  EmailSubject.value = "Test - "+HiddenStudentName.value+" - Parent Amended Tax Return";
  HiddenStudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
}
   if(aidYear.value == "2021"){
    	documentNameForAdobeSign.value = "Parent Amended Tax Return - F0TXAP";
  }
  else if(aidYear.value == "2022"){
    	documentNameForAdobeSign.value = "Parent Amended Tax Return - F1TXAP";
  }
guideBridge.submit();
}
        }
	}
}
