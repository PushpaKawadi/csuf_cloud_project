/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_guideRootPanel_init0 = function (scope) {
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

            var userValue = response.userId;
            //var userValue = 'mariana2'; // two Aid Year
           //var userValue = 'majesticallexi'; // one Aid Year
           // var userValue = 'mchoi88';			 	// no Aid Year
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
        url: "/bin/getCitizenShipData",

        data: {
           action:"CV_USER_DETAILS", 
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
                SCwid.value = studentCWID;
                cwid.value = studentCWID;
                //StudentEmailId.value = response[0].PREF_EMAIL;
                StudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                firstName.enabled = false;
                lastName.enabled = false;
                cwid.enabled = false;
                financialAidYear.enabled = false;
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
                }else if (identifyAidYearFlag == "OneAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
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
        AidYear.value = "2020";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0IDSP";
       formCodeVal = "F0IDSP";
        getCDAFinancialAidYear(aidYearValue);
checkforDuplicateSubmissions(formCodeVal);
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        AidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1IDSP";
      formCodeVal = "F1IDSP";
        getCDAFinancialAidYear(aidYearValue);
checkforDuplicateSubmissions(formCodeVal);
    };
}

function singleAidYear() {
   var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
  var formCodeVal = "";
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = "2021-2022";
      	AidYear.value = "2020";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F0IDSP";
      formCodeVal = "F0IDSP";
		getCDAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
    }
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	AidYear.value = "2021";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	formCode.value = "F1IDSP";
       formCodeVal = "F1IDSP";
		getCDAFinancialAidYear(aidYearValue);
       checkforDuplicateSubmissions(formCodeVal);
    }
  else{
    financialAidYearVal = "2021-2022";
    AidYear.value = "2020";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    formCode.value = "F0IDSP";
    formCodeVal = "F0IDSP";
    getCDAFinancialAidYear(aidYearValue);
     checkforDuplicateSubmissions(formCodeVal);
  }

    if (StageIndicator.value !== null) {
        aidYearValue = financialAidYear.value;
        getCDAFinancialAidYear(aidYearValue);
    }

}

debugger;
if(StageIndicator.value !== null){
  debugger;
    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = AidYear.value;
    var headingTextVal = "";
        headingTextVal = "<p><b>IDENTITY VERIFICATION AND STATEMENT OF EDUCATIONAL PURPOSE (".concat(financialAidYear).concat(")</b></p>");
  
var declarationTextVal = "<p>assistance I may receive will only be used for educational purposes and to pay for the cost of attending California State University, Fullerton for ".concat(financialAidYear).concat(".</p>");

  var formTextVal = "";
    if (financialAidYear == "2021-2022") {
        formTextVal = "<p><b>F0IDSP</b></p>";
    }
    if (financialAidYear == "2022-2023") {
        formTextVal = "<p><b>F1IDSP</b></p>";
    }
  
  $("#VONFLFormText").html(formTextVal);
  $("#VONFLHeadingText").html(headingTextVal);
  $("#VONFLDeclationText").html(declarationTextVal);
}

function checkforDuplicateSubmissions(formCodeVal){
  debugger;
var tableName = "AEM_IDENTITY_VASOEP";
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
          debugger;
          if(myresponse.length >=1){
                showErrorModal("Alert!", "Duplicate submissions are not allowed");
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
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  FinancialAidSignaturePanel.visible=false;
  FinancialAidSignaturePanel.enabled =false;
}

if(StageIndicator.value=="ToFinancialAid"){
  StudentInformation.visible=true;
  StudentInformation.enabled=false;
  Declaration.visible=true;
  Declaration.enabled=false;
  SupportingDocuments.visibe=true;
  SupportingDocuments.enabled=false;
  StudentSignaturePanel.visible=true;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible=true;
  FinancialAidSignaturePanel.enabled=true;
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

 

type: 'GET',

 

url:"/bin/getCaseID",

         

dataType: 'json',

         

success: function(myresponse){              

                 

                   caseId.value = myresponse.CASEID;

                                      

},

});
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_Date_1_init0 = function (scope) {
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
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
             this.enabled = false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_supportDoc1_valueCommit0 = function (scope) {
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
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_supportDoc2_valueCommit0 = function (scope) {
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
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_supportDoc3_valueCommit0 = function (scope) {
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
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_checkbox1649834861348_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				Signature.value = StudentName.value;
				SignatureDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			Signature.enabled = false;       
			SignatureDate.enabled = false; 
				
	} else {
		Signature.value = "";
		SignatureDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_IPAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        IPAddress.value = data.ip;        
    });
}
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_Signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_Signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_SignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_SignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_checkbox1649838422969_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_checkbox1649838422969_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFinancialAid" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				FinancialAidSignature.value = userValue;
				FinancialAidSignatureDate.value = myresponse.SERVER_DATE;	
                FinanciaAidStaffName.value = userValue;
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
        FinanciaAidStaffName.value = "";
      financialAidAssignee.value = "";
	}
}


        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_FinancialAidSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_FinancialAidSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_FinancialAidSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_FinancialAidSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/identity-verification-and-statement-of-educational-purpose/identity-verification-and-statement-of-educational-purpose');
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
 * @function identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
identity_verification_and_statement_of_educational_purpose_identity_verification_and_statement_of_educational_purpose.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = StudentName.value+" "+cwid.value;
  EmailSubject.value = "Test - Identity Verification and Statement of Education Purpose - "+cwid.value;
  StudentEmailId.value = "chaitanya.sai@thoughtfocus.com";
}
guideBridge.submit();

        }
	}
}
