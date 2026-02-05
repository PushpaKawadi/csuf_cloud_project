/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
	FinancialSignaturePanel.visible = false; 
  	
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;            	
    });
  
  	disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
}
else if(StageIndicator.value == "ToFinancialAid"){
	StudentInformation.enabled = false;
  	cdaAddButton.visible = false;
	cdaRemoveButton.visible = false;
	fafsaRemoveButton.visible = false;
	fafsaAddButton.visible = false;
  
  	CDATable.enabled = false;
  	FAFSATable.enabled = false;
    
	if(formType.value == "CDA"){
		FAFSAFamilySizeCertificationTab.visible = false;		
	}
	if(formType.value == "FAFSA"){
		CDAFamilySizeCertificationTab.visible = false;	
	}
	//ParentTaxFillingTab.enabled = false;
  	StudentSignaturePanel.enabled = false;
  	SupportingDocumentsPanel.visible = false;
  	FinancialSignaturePanel.visible = true;  	
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
 
if (StageIndicator.value === null) {
  	var gifModal = document.getElementById('gifModal');
  
    var typeOfForm = getUrlParameters('formType');  
  
    if (typeOfForm == "CDA") {
		formType.value = "CDA";        
        FAFSAFamilySizeCertificationTab.visible = false;       	
		loggedInDetails();
      	gifModal.style.display = "none";

    } else if (typeOfForm == "FAFSA") {
		formType.value = "FAFSA";
        CDAFamilySizeCertificationTab.visible = false;        
		loggedInDetails();
      	gifModal.style.display = "none";

    } else{
        				
		
		gifModal.style.display = "none";
      
		var modal = document.getElementById("secondModal");
		var span = document.getElementsByClassName("secondClose")[0];		

		modal.style.display = "block";
		span.onclick = function() {

			if ((document.getElementById("secondButton1").checked === false) && (document.getElementById("secondButton2").checked === false)) {
				modal.style.display = "block";
				showErrorModal("Alert!", "Please select the form type");
              	gifModal.style.display = "none";

			} else {
				modal.style.display = "none";
			}
		};

		document.getElementById("secondButton1").onclick = function() {
			modal.style.display = "none";
			formType.value = "CDA";
			FAFSAFamilySizeCertificationTab.visible = false;	
			loggedInDetails();
          	gifModal.style.display = "none";
		};

		document.getElementById("secondButton2").onclick = function() {
			modal.style.display = "none";
			formType.value = "FAFSA";
			CDAFamilySizeCertificationTab.visible = false;	
			loggedInDetails();
          	gifModal.style.display = "none";
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

			var userValue = response.userId;
		//	var userValue = 'veronica.maciel';	 	  	// two Aid Year
			//var userValue = 'majesticallexi'; // one Aid Year
			//var userValue = 'mchoi88';			 	// no Aid Year
			workflow_initiator.value = userValue;
			caseID();
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

                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);

                lastName.value = response[0].LAST_NAME;
                firstName.value = response[0].FIRST_NAME;
                HiddenStudentUserID.value = response[0].EMPLID;
                cwid.value = response[0].EMPLID;
                studentIDNumber.value = response[0].EMPLID;
               // HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentEmail.value = "yjayaram@fullerton.edu";
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
              	
              	if(cdaStudentName.value === null || cdaStudentName.value !== undefined){
                  	cdaStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                }
              	
              	if(fafsaStudentName.value === null || fafsaStudentName.value !== undefined){
              		fafsaStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                }

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
			
			if(response.length > 0){

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
				           	              	
                var typeOfAidYear = getUrlParameters('aidYear');

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
			}
			else{
				showErrorModal("Alert !", "No matching records found");
			}
        }
    });
}



function singleAidYear() {    	
  	var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";
  
    if (formType.value == "CDA" && typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CHSP";
        formCodeVal = "F0CHSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    } else if (formType.value == "CDA" && typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2020";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1CHSP";
        formCodeVal = "F1CHSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    } else if (formType.value == "FAFSA" && typeOfAidYear == '0') {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0HSZP";
        formCodeVal = "F0HSZP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    } else if (formType.value == "FAFSA" && typeOfAidYear == '1') {
        financialAidYearVal = "2022-2023";
        aidYear.value = "2020";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1HSZP";
        formCodeVal = "F1HSZP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    } else  if (formType.value == "CDA") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0CHSP";
        formCodeVal = "F0CHSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

    }  else  if (formType.value == "FAFSA") {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2019";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0HSZP";
        formCodeVal = "F0HSZP";
        getFAFSAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal);

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
        aidYear.value = "2019";		
        financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;

		if(formType.value == "CDA"){
			formCode.value = "F0CHSP";
            formCodeVal = "F0CHSP";
			getCDAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);

		}
		else if(formType.value == "FAFSA"){
			formCode.value = "F0HSZP";
            formCodeVal = "F0HSZP";
			getFAFSAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);

		}
    };

    document.getElementById("button2").onclick = function() {		
        modal.style.display = "none";		
        var financialAidYearVal = "2022-2023";
        aidYear.value = "2020";		
        financialAidYear.value = financialAidYearVal;
		aidYearValue =  financialAidYear.value;

        if(formType.value == "CDA"){
			formCode.value = "F1CHSP";
            formCodeVal = "F1CHSP";
			getCDAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);

		}
		else if(formType.value == "FAFSA"){
			formCode.value = "F1HSZP";
            formCodeVal = "F1HSZP";
			getFAFSAFinancialAidYear(aidYearValue);
            checkforDuplicateSubmissions(formCodeVal);

		}
    };
}


if (StageIndicator.value !== null) {
    aidYearValue =  financialAidYear.value;
 
	if(formType.value == "CDA"){
		getCDAFinancialAidYear(aidYearValue);
	}
	else if(formType.value == "FAFSA"){
		getFAFSAFinancialAidYear(aidYearValue);
	}    
}



function getCDAFinancialAidYear(financialAidYear) {	
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);

    var formCodeTextVal = "";
	var titleTextVal = "";
	var firstTextVal = "";
	var secondTextVal = "";		
	
    if (financialAidYear == "2021-2022") {
        formCodeTextVal = "<p><b>F0CHSP</b></p>";
		
		titleTextVal = "<p><b>PARENT FAMILY SIZE CERTIFICATION(2021-22)<br>CA Dream Act Application</b></p>";
		
		firstTextVal = "<p><b><u>INSTRUCTIONS:</u></b><br>Fill in the information about the people that your parents will support between July 1, 2021 and June 30, 2022. See definition of<br>parent below.<i> Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will<br> delay processing.</i></p>";
		
		secondTextVal = "<p><b>OTHER PEOPLE MAY BE INCLUDED ONLY IF THEY:</b><br><br>- <u>lived with and received more than half of their support from your parents</u> at the time you completed your (CDA) and<br> - <u>will continue to receive this support between July 1, 2021 and June 30, 2022.</u></p>";
    }
  
    if (financialAidYear == "2022-2023") {
        formCodeTextVal = "<p><b>F1CHSP</b></p>";
		
		titleTextVal = "<p><b>PARENT FAMILY SIZE CERTIFICATION(2022-23)<br>CA Dream Act Application</b></p>";
		
		firstTextVal = "<p><b><u>INSTRUCTIONS:</u></b><br>Fill in the information about the people that you (and your spouse) will support between July 1, 2022 and June 30, 2023.<i> Incomplete documents <br> will not be returned. They will be disposed of in a secure manner, per university policy.<br> This will delay processing.</i></p>";
		
		secondTextVal = "<p><b>OTHER PEOPLE MAY BE INCLUDED ONLY IF THEY:</b><br><br>- <u>lived with and received more than half of their support from your parents</u> at the time you completed your (CDA) and<br> - <u>will continue to receive this support between July 1, 2022 and June 30, 2023.</u></p>";
		
		
    }


    $("#mainHeadingText").html(formCodeTextVal);
    $("#f0chssHeadingText").html(titleTextVal);
    $("#f0chssTextOne").html(firstTextVal);	
    $("#f0chssTextTwo").html(secondTextVal);
}




function getFAFSAFinancialAidYear(financialAidYear) {
  
    var financialAidYearVal = financialAidYear;
    var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
  
  	var formCodeTextVal = "";
	var titleTextVal = "";
	var firstTextVal = "";
	var secondTextVal = "";
  
  	if (financialAidYear == "2021-2022") { 
       		formCodeTextVal = "<p><b>F0HSZP</b></p>";
			
			titleTextVal = "<p><b>PARENT FAMILY SIZE CERTIFICATION(2021-22)</b></p>";
			
			firstTextVal = "<p><b><u>INSTRUCTIONS:</u></b><br>Fill in the information about the people that your parents will support between July 1, 2021 and June 30, 2022. See definition of<br> parent below. <i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will<br> delay processing.</i></p>";
			
			secondTextVal = "<p><b>OTHER PEOPLE MAY BE INCLUDED ONLY IF THEY:</b><br><br>- <u>lived with and received more than half of their support from your parents</u> at the time you completed your (FAFSA) and<br>- <u>will continue to receive this support between July 1, 2021 and June 30, 2022.</u></p>";
     }
  
  	if (financialAidYear == "2022-2023") {
     	formCodeTextVal = "<p><b>F1HSZP</b></p>";
		
	 	titleTextVal = "<p><b>PARENT FAMILY SIZE CERTIFICATION(2022-23)</b></p>";
		
	 	firstTextVal = "<p><b><u>INSTRUCTIONS:</u></b><br>Fill in the information about the people that your parents will support between July 1, 2022 and June 30, 2023. See definition of<br> parent below. <i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will<br> delay processing.</i></p>";
		
	 	secondTextVal = "<p><b>OTHER PEOPLE MAY BE INCLUDED ONLY IF THEY:</b><br><br>- <u>lived with and received more than half of their support from your parents</u> at the time you completed your (FAFSA) and<br>- <u>will continue to receive this support between July 1, 2022 and June 30, 2023.</u></p>";
    }
	
	
	
	$("#mainHeadingText").html(formCodeTextVal);
    $("#f0chssHeadingText").html(titleTextVal);
    $("#f1hszsTextOne").html(firstTextVal);	
    $("#f1hszsTextTwo").html(secondTextVal);
}

function checkforDuplicateSubmissions(formCodeVal){
var tableName = "AEM_FAMILY_SIZE_PARENT";
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
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_Date_1_init0 = function (scope) {
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
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaEnrolledUnitsYes1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaEnrolledUnitsYes1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	enrolledUnitsNo1.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaEnrolledUnitsNo1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaEnrolledUnitsNo1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = 1;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaStudentUnitsYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaStudentUnitsYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == 1){
  	cdaStudentUnitsNo.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaStudentUnitsNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaStudentUnitsNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	cdaStudentUnitsYes.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaUnitsYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaUnitsYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	cdaUnitsNo.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaUnitsNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaUnitsNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	cdaUnitsYes.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  
  	var rowcount = cdaRow3.instanceManager.instanceCount;
	var lastRow = rowcount - 1; 
  
   if (RemoveRecordFlag.value == "1"){
      	addRowsAfterRemove(lastRow);      	
    }else{
      	addRows();
    }
}

function addRows(){  	
  	if((cdaFullName.value !== null) && (cdaUnitsYes.value !== null || cdaUnitsNo.value !== null)){
        cdaRow3.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}

function addRowsAfterRemove(lastRow){   	
  	if((cdaRow3.instanceManager.instances[lastRow]._children[0].value !== null) && (cdaRow3.instanceManager.instances[lastRow]._children[4].value !== null || cdaRow3.instanceManager.instances[lastRow]._children[5].value !== null)){
        cdaRow3.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_cdaRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){  	
  	var rowCount = cdaRow3.instanceManager.instanceCount;
  	if(rowCount == 1){
      	showErrorModal("Alert !", "Add a new row to remove");      	
    }else{
      	cdaRow3.instanceManager.removeInstance(cdaRow3.instanceManager.instanceCount-1);
    }  	

	RemoveRecordFlag.value = "1";
}

        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaEnrolledUnitsYes1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaEnrolledUnitsYes1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = 1;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaStudentUnitsYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaStudentUnitsYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	fafsaStudentUnitsNo.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaStudentUnitsNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaStudentUnitsNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 0){
  	fafsaStudentUnitsYes.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaUnitsYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaUnitsYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	fafsaUnitsNo.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaUnitsNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaUnitsNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	fafsaUnitsYes.value = null;
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  
  	var rowcount = fafsaRow3.instanceManager.instanceCount;
	var lastRow = rowcount - 1; 
  
   if (RemoveRecordFlag.value == "1"){
      	addRowsAfterRemove(lastRow);      	
    }else{
      	addRows();
    }
}

function addRows(){  	
  	if((fafsaFullName.value !== null) && (fafsaUnitsYes.value !== null || fafsaUnitsNo.value !== null)){
        fafsaRow3.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}

function addRowsAfterRemove(lastRow){   	
  	if((fafsaRow3.instanceManager.instances[lastRow]._children[0].value !== null) && (fafsaRow3.instanceManager.instances[lastRow]._children[4].value !== null || fafsaRow3.instanceManager.instances[lastRow]._children[5].value !== null)){
        fafsaRow3.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_fafsaRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){  	
  	var rowCount = fafsaRow3.instanceManager.instanceCount;
  	if(rowCount == 1){
      	showErrorModal("Alert !", "Add a new row to remove");      	
    }else{
      	fafsaRow3.instanceManager.removeInstance(fafsaRow3.instanceManager.instanceCount-1);
    }  	

	RemoveRecordFlag.value = "1";
}

        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_SupportingDocumentsPanel_init0 = function (scope) {
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
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_NonMedicalSupportingDocument1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_NonMedicalSupportingDocument1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = NonMedicalSupportingDocument1.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
	 
       NonMedicalSupportingDocument1.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
	var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;

	if(format.test(NonMedicalSupportingDocument1.fileAttachment.value) === true){
		var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_');
		NonMedicalSupportingDocument1.fileAttachment.value = doc2NewName;

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_NonMedicalSupportingDocument2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_NonMedicalSupportingDocument2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = NonMedicalSupportingDocument2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
	 
       NonMedicalSupportingDocument2.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(NonMedicalSupportingDocument2.fileAttachment.value) === true){
		var doc2NewName = NonMedicalSupportingDocument2.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
		NonMedicalSupportingDocument2.fileAttachment.value = doc2NewName;

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_NonMedicalSupportingDocument3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_NonMedicalSupportingDocument3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = NonMedicalSupportingDocument3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
	 
       NonMedicalSupportingDocument3.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(NonMedicalSupportingDocument3.fileAttachment.value) === true){
		var doc2NewName = NonMedicalSupportingDocument3.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
		NonMedicalSupportingDocument3.fileAttachment.value = doc2NewName;

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_StudentCB_valueCommit0 = function (scope) {
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
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_evaluator_signChk_valueCommit0 = function (scope) {
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

    }
}
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_Family_Size_Certificate_Adobe_Sign.pdf';		
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
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/parent-family-size-certificate-demo/parent-family-size-certification-demo');
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
 * @function parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_family_size_certificate_demo_parent_family_size_certification_demo.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(RemoveRecordFlag.value == "1"){
	withRemoveValidation();
}
else{
	withoutRemoveValidation();
}


function withoutRemoveValidation(){
  	if(parentEmail.value === null){
  	showErrorModal("Alert !", "Please enter the parent email");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
    }else if(parentEmail.value != confirmParentEmail.value){
        showErrorModal("Alert !", "Parent email does not match");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
    }
	else if((formType.value == "CDA") && (cdaStudentName.value !== null) && (cdaStudentDob.value !== null) && (cdaStudentCollege.value !== null) && (cdaStudentUnitsYes.value === null && cdaStudentUnitsNo.value === null)){
	showErrorModal("Alert", "Please select yes/no if you enrolled 6 or more units");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].CDAFamilySizeCertificationTab[0].CDATable[0].Row2[0].cdaStudentUnitsYes[0]");
	}else if(formType.value == "CDA" && cdaFullName.value === null){
		showErrorModal("Alert", "Please enter the record");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].CDAFamilySizeCertificationTab[0].CDATable[0].cdaRow3[0].cdaFullName[0]");
	}else if((formType.value == "CDA") && (cdaFullName.value !== null) && (cdaDob.value !== null) && (cdaRelationship.value !== null) && (cdaCollege.value !== null) && (cdaUnitsYes.value === null && cdaUnitsNo.value === null)){
		showErrorModal("Alert", "Please select yes/no if you enrolled 6 or more units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].CDAFamilySizeCertificationTab[0].CDATable[0].cdaRow3[0].cdaUnitsYes[0]");
	}
	else if(formType.value == "FAFSA" && fafsaFullName.value === null){
		showErrorModal("Alert", "Please enter the record");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].FAFSAFamilySizeCertificationTab[0].FAFSATable[0].fafsaRow3[0].fafsaFullName[0]");
	}else if((formType.value == "FAFSA") && (fafsaStudentName.value !== null) && (fafsaStudentDob.value !== null) && (fafsaStudentCollege.value !== null) && (fafsaStudentUnitsYes.value === null && fafsaStudentUnitsNo.value === null)){
		showErrorModal("Alert", "Please select yes/no if you enrolled 6 or more units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].FAFSAFamilySizeCertificationTab[0].FAFSATable[0].Row16522653938101652265394340[0].fafsaStudentUnitsYes[0]");
	}else if((formType.value == "FAFSA") && (fafsaFullName.value !== null) && (fafsaDob.value !== null) && (fafsaRelationship.value !== null) && (fafsaCollege.value !== null) && (fafsaUnitsYes.value === null && fafsaUnitsNo.value === null)){
		showErrorModal("Alert", "Please select yes/no if you enrolled 6 or more units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].FAFSAFamilySizeCertificationTab[0].FAFSATable[0].fafsaRow3[0].fafsaFullName[0]");
	}else {
		if(fafsaFullName.value !== null){
		  fafsaDob.mandatory = true;
		  fafsaRelationship.mandatory = true;
		  fafsaCollege.mandatory = true;
		}
		else if(cdaFullName.value !== null){
		  cdaDob.mandatory = true;
		  cdaRelationship.mandatory = true;
		  cdaCollege.mandatory = true;
		}
		submitAction();
	}
}

//Row1.instanceManager.instances[0]._children[0].value

function withRemoveValidation(){
  	
  	var cdaRowCount = cdaRow3.instanceManager.instanceCount; 
  	var cdaLastRow = cdaRowCount-1;
  
	var fafsaRowCount = fafsaRow3.instanceManager.instanceCount;
  	var fafsaLastRow = fafsaRowCount-1;
  
	if(parentEmail.value === null){
        showErrorModal("Alert !", "Please enter the parent email");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].parentEmail[0]");
    }else if(parentEmail.value != confirmParentEmail.value){
        showErrorModal("Alert !", "Parent email does not match");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].StudentInformation[0].confirmParentEmail[0]");
    }
	else if((formType.value == "CDA") && (cdaRow3.instanceManager.instances[cdaLastRow]._children[0].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[1].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[3].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[4].value === null && cdaRow3.instanceManager.instances[cdaLastRow]._children[5].value === null)){
	showErrorModal("Alert", "Please select yes/no if you enrolled 6 or more units");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].CDAFamilySizeCertificationTab[0].CDATable[0].Row2[0].cdaStudentUnitsYes[0]");
	}else if(formType.value == "CDA" && cdaRow3.instanceManager.instances[cdaLastRow]._children[0].value === null){
		showErrorModal("Alert", "Please enter the record");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].CDAFamilySizeCertificationTab[0].CDATable[0].cdaRow3[0].cdaFullName[0]");
	}else if((formType.value == "CDA") && (cdaRow3.instanceManager.instances[cdaLastRow]._children[0].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[1].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[2].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[3].value !== null) && (cdaRow3.instanceManager.instances[cdaLastRow]._children[4].value === null && cdaRow3.instanceManager.instances[cdaLastRow]._children[5].value === null)){
		showErrorModal("Alert", "Please select yes/no if you enrolled 6 ore more units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].CDAFamilySizeCertificationTab[0].CDATable[0].cdaRow3[0].cdaUnitsYes[0]");
	}
	else if(formType.value == "FAFSA" && fafsaRow3.instanceManager.instances[fafsaLastRow]._children[0].value === null){
		showErrorModal("Alert", "Please enter the record");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].FAFSAFamilySizeCertificationTab[0].FAFSATable[0].fafsaRow3[0].fafsaFullName[0]");
	}else if((formType.value == "FAFSA") && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[0].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[1].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[3].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[4].value === null && fafsaRow3.instanceManager.instances[fafsaLastRow]._children[5].value === null)){
		showErrorModal("Alert", "Please select yes/no if you enrolled 6 ore more units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].FAFSAFamilySizeCertificationTab[0].FAFSATable[0].Row16522653938101652265394340[0].fafsaStudentUnitsYes[0]");
	}else if((formType.value == "FAFSA") && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[0].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[1].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[2].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[3].value !== null) && (fafsaRow3.instanceManager.instances[fafsaLastRow]._children[4].value === null && fafsaRow3.instanceManager.instances[fafsaLastRow]._children[5].value === null)){
		showErrorModal("Alert", "Please select yes/no if you enrolled 6 ore more units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].FAFSAFamilySizeCertificationTab[0].FAFSATable[0].fafsaRow3[0].fafsaFullName[0]");
	}else {
		
		submitAction();		
	}
}


function submitAction(){
  aftiaDescCWID.value = firstName.value+ " " + lastName.value + " " + cwid.value;
  EmailSubject.value = "Test - Parent Family Size Certification - (" + cwid.value+")";
  
    if(aidYear.value == "2019" && formType.value == "CDA"){
    	documentNameForAdobeSign.value = "Parent Family Size Certification - F0CHSP";
  }
  else if(aidYear.value == "2020" && formType.value == "CDA"){
    	documentNameForAdobeSign.value = "Parent Family Size Certification - F1CHSP";
  }
  else if(aidYear.value == "2019" && formType.value == "FAFSA"){
    documentNameForAdobeSign.value = "Parent Family Size Certification - F0HSZP";  
  }
  else if(aidYear.value == "2020" && formType.value == "FAFSA"){
    documentNameForAdobeSign.value = "Parent Family Size Certification - F1HSZP";  
  }
  
   //var testEmail = "daduong@fullerton.edu";
  //var testEmail = "yjayaram@fullerton.edu";
  //var testEmail = "ajeet.chhonkar@thoughtfocus.com";
 // var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  var testEmail = "anupama.dhar@thoughtfocus.com";
  //var testEmail = "pushpa.kawadi@thoughtfocus.com";
  
  HiddenStudentEmail.value = testEmail;  

  guideBridge.submit();
}
        }
	}
}
