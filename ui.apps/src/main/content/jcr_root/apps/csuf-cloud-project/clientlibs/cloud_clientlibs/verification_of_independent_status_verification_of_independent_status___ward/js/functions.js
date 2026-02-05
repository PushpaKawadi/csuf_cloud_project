/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var flag;
if (StageIndicator.value === null) {
    //debugger;
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

    } else{
        /*showErrorModal("Alert !", "No matching records found");
        CDAStudentTaxFillingTab.visible = false;
        FAFSAStudentTaxFillingTab.visible = false;
        CDAInformationTab.visible = false;
        FAFSAInformationTab.visible = false;
      	submitButton.enabled = false;*/
		
		
		
		
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

function loggedInDetails(){
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
        url: "/bin/getStudentPeronalInformationWithUserID",

        data: {
            userID: userValue
        },

        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {
                var studentCWID = response[0].student_ID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                StudentFirstName.value = response[0].student_FName;
                StudentLastName.value = response[0].student_LName;
                StudentUserId.value = response[0].student_UserID;
                SCwid.value = studentCWID;
                Cwid.value = studentCWID;
                //StudentEmailId.value = response[0].student_Email;
                StudentName.value = response[0].student_FName + " " + response[0].student_LName;
              StudentFirstName.enabled = false;
              StudentLastName.enabled = false;
              Cwid.enabled = false;
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
                }var typeOfAidYear = getUrlParameters('aidYear');
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
      if(formType.value == "FAFSA"){
        formCode.value = "F0WARD";
      }
      if(formType.value == "CDA"){
        formCode.value = "F0CWRD";
      }
        getCDAFinancialAidYear(aidYearValue);

    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        var financialAidYearVal = "2022-2023";
        AidYear.value = "2021";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        if(formType.value == "FAFSA"){
        formCode.value = "F1WARD";
      }
      if(formType.value == "CDA"){
        formCode.value = "F1CWRD";
      }
        getCDAFinancialAidYear(aidYearValue);

    };
}


function singleAidYear() {
  var typeOfAidYear = getUrlParameters('aidYear'); 
  	var financialAidYearVal="";
  	if(typeOfAidYear == '0'){
      	financialAidYearVal = "2021-2022";
      	AidYear.value = "2020";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	 if(formType.value == "FAFSA"){
        formCode.value = "F0WARD";
      }
      if(formType.value == "CDA"){
        formCode.value = "F0CWRD";
      }
		getCDAFinancialAidYear(aidYearValue);
    }
  	else if(typeOfAidYear == '1'){
      	financialAidYearVal = "2022-2023";
      	AidYear.value = "2021";
      	financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;
      	 if(formType.value == "FAFSA"){
        formCode.value = "F1WARD";
      }
      if(formType.value == "CDA"){
        formCode.value = "F1CWRD";
      }
		getCDAFinancialAidYear(aidYearValue);
    }
  else{
    financialAidYearVal = "2021-2022";
    AidYear.value = "2020";
    financialAidYear.value = financialAidYearVal;
    aidYearValue = financialAidYear.value;
    if(formType.value == "FAFSA"){
        formCode.value = "F0WARD";
      }
      if(formType.value == "CDA"){
        formCode.value = "F0CWRD";
      }
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
  
  var formtype = "";
  if(formType.value == "FAFSA"){
    if(financialAidYear == "2021-2022"){
      formtype = "<p><b>F0WARD</b></p>";
    } if(financialAidYear == "2022-2023"){
      formtype = "<p><b>F1WARD</b></p>";
    }
  } if(formType.value == "CDA"){
    if(financialAidYear == "2021-2022"){
      formtype = "<p><b>CA Dream Act Application - F0CWRD</b></p>";
    } if(financialAidYear == "2022-2023"){
      formtype = "<p><b>CA Dream Act Application - F1CWRD</b></p>";
    }
  }
    
    
    var headingTextVal = "";
    if (financialAidYear == "2021-2022") {
        headingTextVal = "<p><b>VERIFICATION OF INDEPENDENT STATUS - WARD (".concat(financialAidYear).concat(")</b></p>");
    }
    if (financialAidYear == "2022-2023") {
        headingTextVal = "<p><b>VERIFICATION OF INDEPENDENT STATUS - WARD (".concat(financialAidYear).concat(")</b></p>");
    }

    var informationTextVal = "";
    if (formType.value == "FAFSA") {
        informationTextVal = "<p>You indicated on your Free Application for Federal Student Aid (FAFSA) that you were an orphan, ward of the court, emancipated minor, or in legal guardianship before reaching the age of 18. You are required to provide documentation to substantiate this before we are able to continue the financial aid process.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></p>";
    }
    if (formType.value == "CDA") {
        informationTextVal = "<p>You indicated on your California Dream Act Application (CDA) that you were an orphan, ward of the court, emancipated minor, or in legal guardianship before reaching the age of 18. You are required to provide documentation to substantiate this before we are able to continue the financial aid process.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></p>";
    }


  
  var checkboxFiveTextVal = ""; 
  if(formType.value == "FAFSA"){
  checkboxFiveTextVal="<p><b>I MADE AN ERROR ON MY FAFSA. </b> I will correct my FAFSA application to include my parental information.(NOTE: Parent will need to sign your FAFSA application with their FSA ID. If your parent does not have a FSA ID, he/she can apply for a FSA ID at (".concat("<a href=".concat("https://fsaid.ed.gov").concat(">https://fsaid.ed.gov</a>).</p>"));
  }
   if(formType.value == "CDA"){
  checkboxFiveTextVal="<p><b>I MADE AN ERROR ON MY CDA. </b> I will correct my CDA application to include my parental information.(NOTE: Parent will need to sign your CDA application with their PIN number . If your parent does not have a PIN number, he/she can apply for a PIN number at (".concat("<a href=".concat("https://dream.csac.ca.gov").concat(">https://dream.csac.ca.gov/</a>).</p>"));
  }
  
    $("#VOISHeadingFormType").html(formtype);
    $("#VOISHeadingText").html(headingTextVal);
    $("#VOISInformationText").html(informationTextVal);
  $("#VOISCheckboxFive").html(checkboxFiveTextVal);

}
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
             if(StageIndicator.value === null){
  FinancialAidSignaturePanel.visible=false;
}
if(StageIndicator.value == "ToFinancialAid"){
  StudentInformation.enabled=false;
  Declaration.enabled=false;
  SupportingDocuments.enabled=false;
  StudentSignaturePanel.enabled=false;
  FinancialAidSignaturePanel.visible=true;
} 
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

 

type: 'GET',

 

url:"/bin/getCaseID",

         

dataType: 'json',

         

success: function(myresponse){              

                 

                   CaseId.value = myresponse.CASEID;

                                      

},

});
}
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_InitiatedDate_init0 = function (scope) {
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
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_CommentsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_CommentsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
 CBComment.enabled=true;
}else{
  CBComment.enabled=false;
  CBComment.value = "";
}
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_CBComment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_CBComment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_checkbox1649834861348_valueCommit0 = function (scope) {
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
				StudentSignature.value = StudentName.value;
				StudentSignatureDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			StudentSignatureDate.enabled = false;       
			studentSignature.enabled = false; 
				
	} else {
		StudentSignatureDate.value = "";
		StudentSignature.value = "";	   
	}
}
        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_IPAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_IPAddress_init0 = function (scope) {
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
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_checkbox1649838422969_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_checkbox1649838422969_valueCommit0 = function (scope) {
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
	}
}


        }
	}
}
/**
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/verification-of-independent-status/verification-of-independent-status---ward');
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
 * @function verification_of_independent_status_verification_of_independent_status___ward.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_of_independent_status_verification_of_independent_status___ward.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = StudentName.value+" "+Cwid.value;
  EmailSubject.value = "Test - "+StudentName.value+" - Verification of Independent Status - Ward Form";
  StudentEmailId.value = "chaitanya.sai@thoughtfocus.com";
}
  guideBridge.submit();

        }
	}
}
