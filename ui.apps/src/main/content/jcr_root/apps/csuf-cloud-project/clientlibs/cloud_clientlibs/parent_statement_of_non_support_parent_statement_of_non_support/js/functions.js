/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var flag;
if (StageIndicator.value === null) {
  $.ajax({
    type: 'GET',
    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function (response) {
      // gifModal.style.display = "block";

     // var userValue = response.userId;
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
    error: function (error) {
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
    success: function (response) {
      if (response.length >= 1) {

        var CWID = response[0].EMPLID;
        getStudentAidYearDetails(CWID);
        //var aidYearFlag = getStudentAidYearDetails(studentCWID);
        cwid.value = response[0].EMPLID;
        lastName.value = response[0].LAST_NAME;
        firstName.value = response[0].FIRST_NAME;
        HiddenStudentUserID.value = response[0].USERID;
       // StudentFullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
        studentIDNumber.value = response[0].EMPLID;
        //  studentIDNumber.value = response[0].student_ID;
        // HiddenStudentEmail.value = response[0].student_Email;
        HiddenStudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
        HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
        //StudentCWID.value = response[0].student_ID;

      } else {
        showErrorModal("Alert!", "No matching records found");
      }
    },
    error: function (error) {
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
    success: function (response) {
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
  var formCodeVal = ""; 

  if (typeOfAidYear == '0') {
    financialAidYearVal = "2021-2022";
    aidYear.value = "2021";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0PNSP";
	formCodeVal = "F0PNSP";
    // financialAidYearVal1.value = "1997";
    getFAFSAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal);
  } 
  else if (typeOfAidYear == '1') {
    financialAidYearVal = "2022-2023";
    aidYear.value = "2022";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F1PNSP";
	formCodeVal = "F1PNSP";
    // financialAidYearVal1.value="1998";
    getFAFSAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal);
  } 
  else {
    financialAidYearVal = "2021-2022";
    aidYear.value = "F0PNSP";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0PNSP";
	formCodeVal = "F0PNSP";
    //financialAidYearVal1.value = "1997";
    getFAFSAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal);
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

  modal.style.display = "block";
  span.onclick = function () {

    if ((document.getElementById("button1").checked === false) && (document.getElementById("button2").checked === false)) {
      modal.style.display = "block";
      showErrorModal("Alert!", "Please select the financial aid year");

    } else {
      modal.style.display = "none";
    }
  };

  document.getElementById("button1").onclick = function () {
    modal.style.display = "none";
    var financialAidYearVal = "2021-2022";
    aidYear.value = "2021";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0PNSP";
	formCodeVal = "F0PNSP";
    getFAFSAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal);

  };

  document.getElementById("button2").onclick = function () {
    modal.style.display = "none";
    var financialAidYearVal = "2022-2023";
    aidYear.value = "2022";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F1PNSP";
	formCodeVal = "F1PNSP";
    getFAFSAFinancialAidYear(aidYearValue);
    checkforDuplicateSubmissions(formCodeVal);

  };
}


if (StageIndicator.value !== null) {

  aidYearValue = financialAidYear.value;
  getFAFSAFinancialAidYear(aidYearValue);
}

function getFAFSAFinancialAidYear(financialAidYear) {
  var financialAidYearVal = financialAidYear;
  //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
  var taxFilingYear = aidYear.value;
  var headingTextVal = "";
 

  var formCodeTextVal = "";
  if (financialAidYear == "2021-2022") {
    formCodeTextVal = "<p><b>F0PNSP</b></p>";
  }
  if (financialAidYear == "2022-2023") {
    formCodeTextVal = "<p><b>F1PNSP</b></p>";
  }

  headingTextVal = "<p><b>PARENT STATEMENT OF NON-SUPPORT ".concat(" (" + financialAidYearVal + ")");

  $("#F0PNSPFormCode").html(formCodeTextVal);
  $("#F0PNSPheadingText").html(headingTextVal);

}


function checkforDuplicateSubmissions(formCodeVal) {
    var tableName = "AEM_PAR_STATE_NON_SUPPORT";
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
                faDecisionColumnName: financialAidDecisionColumnName,
                tableName: tableName,
                formCodeColumnName: formCodeColumnName,
                formCode: formCodeVal,
                faDecision: faDecision
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
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
  SupportingDocumentsPanel.visible=false;
  SupportingDocumentsPanel.enabled=false;
  InformationPanel.visible=true;
  InformationPanel.enabled=false;
  Instructions.visible=true;
  Instructions.enabled=false;
  StudentSignaturePanel.visible=true;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible=true;
  FinancialAidSignaturePanel.enabled=true;
}
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_caseId_init0 = function (scope) {
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_Date_1_init0 = function (scope) {
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
 this.value = d;
}
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc2.fileAttachment.value) === true){
		var doc2NewName = supportDoc2.fileAttachment.value.replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = supportDoc3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(supportDoc3.fileAttachment.value) === true){
		var doc2NewName = supportDoc3.fileAttachment.value.replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_StudentCB_valueCommit0 = function (scope) {
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_ipAddress_init0 = function (scope) {
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_ipAddress_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_ipAddress_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_evaluator_signChk_valueCommit0 = function (scope) {
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
        FinancialAidSign.value = userValue;
        FinancialAidSignDate.value = myresponse.SERVER_DATE;
        financialAidAssignee.value = myresponse.userId;
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });

    FinancialAidSign.enabled = false;
    FinancialAidSignDate.enabled = false;
    financialAidAssignee.enabled = false;

  } else {
    FinancialAidSign.value = "";
    FinancialAidSignDate.value = "";
    financialAidAssignee.value = "";
  }
}
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_FinancialAidSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_FinancialAidSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_FinancialAidSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_FinancialAidSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_Statement_Of_Non_Support_Adobe_Sign.pdf';		
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_financialAidAssignee_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_financialAidAssignee_init0 = function (scope) {
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/parent-statement-of-non-support/parent-statement-of-non-support');
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
 * @function parent_statement_of_non_support_parent_statement_of_non_support.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_statement_of_non_support_parent_statement_of_non_support.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
              
 if(parentEmail.value === null){
  	showErrorModal("Alert !", "Please enter the parent email");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
    }else if(parentEmail.value != confirmParentEmail.value){
        showErrorModal("Alert !", "Parent 1 email does not match");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
      
    }
 else if(parentEmail2.value != confirmParentEmail2.value){
        showErrorModal("Alert !", "Parent 2 email does not match");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].confirmParentEmail2[0]");
      
    } else if(parentEmail2.value === parentEmail.value){
        showErrorModal("Alert !", "Both parent emails should not be same");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].parentEmail2[0]");
      
    }else if(checkbox1660911308485.value === null){
        showErrorModal("Alert !", "Please read the instructions carefully and check the checkbox below");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Instructions[0].checkbox1660911308485[0]");
      
    } else if(StudentFullName.value === null){
        showErrorModal("Alert !", "Please enter Student's full name");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].InformationPanel[0].StudentFullName[0]");
      
    } else {		
		submitAction();		
	}

function submitAction(){
if(StageIndicator.value === null){
  aftiaDescCWID.value = HiddenStudentName.value+" "+cwid.value;
  EmailSubject.value = "Test - Parent Statement of Non-Support - " + cwid.value;
  HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
}
   if(aidYear.value == "2021"){
    	documentNameForAdobeSign.value = "Parent Statement of Non-Support - F0PNSP";
  }
  else if(aidYear.value == "2022"){
    	documentNameForAdobeSign.value = "Parent Statement of Non-Support - F1PNSP";
  }
  
  if(parentEmail2.value === null){
        Parent2Flag.value="No";      
    } 
  if (parentEmail2.value !== null) {
        Parent2Flag.value="Yes"; 
    }
  
guideBridge.submit();
}
        }
	}
}
