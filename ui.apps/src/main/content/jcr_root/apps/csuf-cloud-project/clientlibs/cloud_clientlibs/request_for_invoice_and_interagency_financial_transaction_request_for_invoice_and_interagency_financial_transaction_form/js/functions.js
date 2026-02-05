/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    BillToInformationPanel.visible = true;
    BillToInformationPanel.enabled = true;
    BillLineInformationPanel.visible = true;
    BillLineInformationPanel.enabled = true;
  
   CreditInformationPanel.visible = true;
   CreditInformationPanel.enabled = true;
  
   SupportingDocumentsPanel.visible = true;
   SupportingDocumentsPanel.enabled = true;
  
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = true;
  
    ApproverPanel.visible = false;    
    ASFRPanel.visible = false; 
}


if (StageIndicator.value === "ToInitiator") {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    BillToInformationPanel.visible = true;
    BillToInformationPanel.enabled = true;
    BillLineInformationPanel.visible = true;
    BillLineInformationPanel.enabled = true;
  
   CreditInformationPanel.visible = true;
   CreditInformationPanel.enabled = true;
  
   SupportingDocumentsPanel.visible = true;
   SupportingDocumentsPanel.enabled = true;
  
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = true;
  
    ApproverPanel.visible = false;    
    AFSRPanel.visible = false; 
}


if (StageIndicator.value === "ToApprover") {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    BillToInformationPanel.visible = true;
    BillToInformationPanel.enabled = false;
    BillLineInformationPanel.visible = true;
    BillLineInformationPanel.enabled = false;
  
   CreditInformationPanel.visible = true;
   CreditInformationPanel.enabled = false;
  
   SupportingDocumentsPanel.visible = true;
   SupportingDocumentsPanel.enabled = false;
  
   ApproverPanel.visible = true;
   ApproverPanel.enabled = true;
  
    InitiatorPanel.visible = true;    
    InitiatorPanel.enabled = false;
  
    AFSRPanel.visible = false; 
}




if (StageIndicator.value === "ToASFR") {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    BillToInformationPanel.visible = true;
    BillToInformationPanel.enabled = false;
    BillLineInformationPanel.visible = true;
    BillLineInformationPanel.enabled = false;
  
   CreditInformationPanel.visible = true;
   CreditInformationPanel.enabled = false;
  
   SupportingDocumentsPanel.visible = true;
   SupportingDocumentsPanel.enabled = false;
  
  ASFRPanel.visible = true;
  ASFRPanel.enabled = true;
  
    ApproverPanel.visible = true;  
  ApproverPanel.enabled=false;
    InitiatorPanel.visible = true; 
  InitiatorPanel.enabled=false;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null)){
	//var gifModal = document.getElementById('gifModal');
	//gifModal.style.display = "block";

	$.ajax({
		type: 'GET',
		url: "/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse) {
			if (myresponse.Status == "Success") {
				var userValue = myresponse.userId;
				workflow_initiator.value = userValue;

				$.ajax({
					type: 'GET',
					url: "/bin/getEvaluationFormData",
					data: {
						action: "EMP_DETAILS"
					},
					dataType: 'json',
					success: function(myresopnse) {

						//var modal = document.getElementById('myModal');
						//var span = document.getElementsByClassName("close")[0];

						if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {

							cwid_initiator.value = myresopnse[0].EMPLID;                            
                            CWID.value = myresopnse[0].EMPLID;                  
							RequestorFirstName.value = myresopnse[0].FIRST_NAME;
							RequestorLastName.value = myresopnse[0].LAST_NAME;
                            RequestorDepartmentID.value = myresopnse[0].DEPTID;
                            RequestorDepartment.value = myresopnse[0].DEPTNAME;
                            RequestorDivision.value = myresopnse[0].DIVSION;                           
							//RequestorEmail.value = myresopnse[0].EMAILID;
                            RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							RequestorUserId.value = myresopnse[0].EMP_USERID;
							RequestorName.value = RequestorFirstName.value + " " + RequestorLastName.value;	
                           
						
							//gifModal.style.display = "none";
							//modal.style.display = "none";

						} else if (myresopnse.length > 1) {
							gifModal.style.display = "none";
							modal.style.display = "block";
                        }
                    }
                });
            }
        },
    });
}					
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null)){
    $.ajax({
        type: 'GET',
        url: "/bin/getPositionActionForm",
        data: {
            action: "GET_ALL_FUNDING_DATA",
        },
        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {
                var deptArray = [];
                var fundCodeArray = [];
                var programArray = [];
                var classArray = [];
                var projectArray = [];
                var accountArray = [];
              debugger;
                for (var a = 0; a < response[0].DEPT.length; a++) {
                    deptArray.push(response[0].DEPT[a].DEPTID);
                }
                for (var b = 0; b < response[0].FUND.length; b++) {
                    fundCodeArray.push(response[0].FUND[b].fund_code);
                }
                for (var c = 0; c < response[0].PROGRAM.length; c++) {
                    programArray.push(response[0].PROGRAM[c].program);
                }
                for (var d = 0; d < response[0].CLASS_CODE.length; d++) {
                    classArray.push(response[0].CLASS_CODE[d].CLASS);
                }
                for (var e = 0; e < response[0].PROJECT.length; e++) {
                    projectArray.push(response[0].PROJECT[e].PROJECT);
                }
                for (var f = 0; f < response[0].ACCOUNT.length; f++) {
                    accountArray.push(response[0].ACCOUNT[f].ACCOUNT);
                }

                DeptDataArray.value = JSON.stringify(deptArray);
                FundCodeDataArray.value = JSON.stringify(fundCodeArray);
                ProgramDataArray.value = JSON.stringify(programArray);
                ClassDataArray.value = JSON.stringify(classArray);
                ProjectDataArray.value = JSON.stringify(projectArray);
                AccountDataArray.value = JSON.stringify(accountArray);

                Row1.Dept.items = deptArray;
                Row1.FundCode.items = fundCodeArray;
                Row1.Program.items = programArray;
                Row1.Class.items= classArray;
                Row1.Project.items = projectArray;
                Row1.Account.items = accountArray;

            } else {
                //showErrorModal("Alert!", "Funding data not available");
            }
        },
        error: function(error) {
           // alert("error block=" + error);
        }
    });
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
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
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_CustomerSelectionRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_CustomerSelectionRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "0"){
  RFISelectionRB.visible = true;
  RFISelectionRB.mandatory = true;
  CSUCampusChancellorOffice.visible = false; 
  PO.visible = false;
}else{
  CSUCampusChancellorOffice.visible = true; 
  PO.visible = false; 
  RFISelectionRB.visible = false;
  CSUCampusChancellorOffice.mandatory = true; 
 // StreetAddressT.value = "";  
 // Apt.value = ""; 
 // CityT.value = "";  
 // StateT.value = "";  
 // ZipCodeT.value = "";  
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RFISelectionRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RFISelectionRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RFISelectionRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RFISelectionRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "0"){
  PO.visible = true;
  PO.mandatory = true;
}else{
  PO.visible = false;
  PO.mandatory = false; 
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_PO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_PO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_CSUCampusChancellorOffice_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_CSUCampusChancellorOffice_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToInitiator")) {
	if (this.value !== null && cwid_initiator.value !== this.value) {
		//var gifModal = document.getElementById('gifModal');
		//gifModal.style.display = "block";

		$.ajax({
			type: 'GET',
			url: "/bin/getLoggedUserId",
			dataType: 'json',
			success: function(myresponse) {
				if (myresponse.Status == "Success") {
					var userValue = myresponse.userId;
					workflow_initiator.value = userValue;
					var cwid = CWID.value;

					$.ajax({
						type: 'GET',

						url: "/bin/getSubstituteFacultyData",
						data: {
							action: "SUB_FACULTY_CWID_LOOKUP",
							cwid: cwid
						},

						dataType: 'json',
						success: function(myresopnse) {

							var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];

							if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {

								RequestorFirstName.value = myresopnse[0].FIRST_NAME;
                                RequestorLastName.value = myresopnse[0].LAST_NAME;
                                RequestorName.value = RequestorFirstName.value + " " + RequestorLastName.value ;
                                RequestorUserId.value = myresopnse[0].EMPLID;
                               // RequestorEmail.value = myresopnse[0].EMAILID;	
                                RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";	
								RequestorDepartmentID.value = myresopnse[0].DEPTID;
                                RequestorDivision.value = myresopnse[0].DIVSION;						
								RequestorDepartment.value = myresopnse[0].DEPTNAME;								
								InitiatorFlag.value = true;
                                InitiatorPanel.visible = true;

								//gifModal.style.display = "none";
								//modal.style.display = "none";

							} else if (myresopnse.length > 1) {
								gifModal.style.display = "none";
								modal.style.display = "block";
								
						}
                        }
					});
				}
			},
			
		});
	}
}

        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorDepartment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorDepartment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToInitiator") {
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
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ExpenseType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ExpenseType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "OTHER"){
  OtherExpenseType.enabled = true;
  OtherExpenseType.mandatory = true;
}else{
  OtherExpenseType.enabled = false;
  OtherExpenseType.mandatory = false;
  OtherExpenseType.value = null;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_OtherExpenseType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_OtherExpenseType_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled =  false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_UplaodFile_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_UplaodFile_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToInitiator") {
  this.visible = true;
}else{
    this.visible = false;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_UploadButton_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_UploadButton_init0 = function (scope) {
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
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_UploadButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_UploadButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            UploadFlag.value = "true";
var fileUpload = document.getElementById("fileUpload");debugger;
//LoadingMessageTextTable.visible = true;
if(fileUpload.files[0] !== undefined){
  var extension = fileUpload.files[0].name.split('.').pop();
if(extension == "xlsx" || extension == "xls"){
debugger;
var reader = new FileReader();
if (typeof(FileReader) != "undefined") {
    var reader = new FileReader();

    //For Browsers other than IE.
    if (reader.readAsBinaryString) {
        reader.onload = function(e) {
            //console.log(e.target.result);
            ProcessExcel(e.target.result);
          UploadFlag.value = "false";
        };
        reader.readAsBinaryString(fileUpload.files[0]);
    }
}}else{
 // LoadingMessageTextTable.visible = false;
 // showErrorModal("Alert!","Please select the valid file");
}}else{
 // LoadingMessageTextTable.visible = false;
 // showErrorModal("Alert!","Please select the file");
}

function ProcessExcel(data) {
    debugger;
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });

    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
   var returnedValue = validateExcelRows(excelRows);
  if(returnedValue === true){
    ParseExcelRows(excelRows);
  }
}

function ParseExcelRows(myresponse) {
    debugger;
    var count = Row1.instanceManager.instanceCount;

    if (flag.value === "True") {
        var gifModal = document.getElementById('gifModal');
        //gifModal.style.display = "block";
        debugger;

      //  var modal = document.getElementById('myModal');
      //  var span = document.getElementsByClassName("close")[0];

        debugger;
        if (myresponse.length > 0) {
          var rowcountRemoveAll1 = Row1.instanceManager.instanceCount;
          for (k = 0; k < rowcountRemoveAll1; k++) {
        Row1.instanceManager.removeInstance(Row1.instanceIndex);
         }
        Row1.instanceManager.removeInstance((Row1.instanceManager.instanceCount) - 1);
            for (var i = 0; i < myresponse.length; i++) {
                     if (Row1.instanceManager.instances[Row1.instanceManager.instanceCount - 1].Dept.value !== null) {
                    table.Row1.instanceManager.addInstance(true);
                }
                                
           
                Row1.instanceManager.instances[i].Account.value = myresponse[i].ACCOUNT;
                Row1.instanceManager.instances[i].FundCode.value = myresponse[i].FUND;
                Row1.instanceManager.instances[i].Dept.value = myresponse[i].DEPT;
                Row1.instanceManager.instances[i].Program.value = myresponse[i].PROGRAM;
                Row1.instanceManager.instances[i].Class.value = myresponse[i].CLASS_CODE;
                Row1.instanceManager.instances[i].Project.value = myresponse[i].PROJECT;
                  
               // gifModal.style.display = "none";
               // LoadingMessageTextTable.visible = false;
            }

        } else {
           // showErrorModal("Alert!", "No matching records found");
          //LoadingMessageTextTable.visible = false;
        }
    }

}



        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Account_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Account_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")){
  var arr = JSON.parse(AccountDataArray.value);
 Row1.Account.items = arr;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_FundCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_FundCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")){
  var arr = JSON.parse(FundCodeDataArray.value);
 Row1.FundCode.items = arr;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Dept_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Dept_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")){
  var arr = JSON.parse(DeptDataArray.value);
 Row1.Dept.items = arr;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Program_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Program_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")){
  var arr = JSON.parse(ProgramDataArray.value);
 Row1.Program.items = arr;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Class_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Class_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")){
  var arr = JSON.parse(ClassDataArray.value);
 Row1.Class.items = arr;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Project_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_Project_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")){
  var arr = JSON.parse(ProjectDataArray.value);
 Row1.Project.items = arr;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_SupportingDocument1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_SupportingDocument1_valueCommit0 = function (scope) {
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
        SupDocMessage.visible = false;
    }
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_SupportingDocument2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_SupportingDocument2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = supportDoc2.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        SupDocMessage.visible = false;
    }
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_SupportingDocument3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_SupportingDocument3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(supportDoc3.fileAttachment.value) === true) {
        var doc2NewName = supportDoc3.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        supportDoc3.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {

        supportDoc3.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        SupDocMessage.visible = false;
    }
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToInitiator") || (StageIndicator.value === null)) {
        if (RequestorSign.value === null) {           
            RequestorSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  RequestorSign.value = userValue;
                  RequestorSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    RequestorSign.value = "";
    RequestorSignDate.value = "";
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_RequestorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ApproverCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ApproverCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToApprover")) {
        if (ApproverSign.value === null) {           
            ApproverSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  ApproverSign.value = userValue;
                  ApproverSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    ApproverSign.value = "";
    ApproverSignDate.value = "";
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ApproverSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ApproverSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ApproverSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ApproverSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_AFSRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_AFSRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToASFR")) {
        if (ASFRSign.value === null) {           
            ASFRSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  ASFRSign.value = userValue;
                  ASFRSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    ASFRSign.value = "";
    ASFRSignDate.value = "";
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ASFRSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ASFRSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ASFRSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_ASFRSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/request-for-invoice-and-interagency-financial-transaction/request-for-invoice-and-interagency-financial-transaction-form');   
            jsonData.append('fileName', "Request For Invoice And Interagency Financial Transaction Form");
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
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_GenerateCSV_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_GenerateCSV_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToASFR"){
  this.visble = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_GenerateCSV_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_GenerateCSV_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount = Row1.instanceManager.instanceCount;
var sheet = [];
for (k = 0; k < rowcount; k++) {
    sheet[k] = {};
    
    
	sheet[k].Account = Row1.instanceManager.instances[k].Account.value;
    sheet[k].FundCode = Row1.instanceManager.instances[k].FundCode.value;
    sheet[k].Department = Row1.instanceManager.instances[k].Dept.value;
    sheet[k].Program = Row1.instanceManager.instances[k].Program.value;
    sheet[k].Class = Row1.instanceManager.instances[k].Class.value;
    sheet[k].Project = Row1.instanceManager.instances[k].Project.value;   
    sheet[k].Amount = Row1.instanceManager.instances[k].CreditAmount.value;
}
var data = {};
data.sheet = sheet;
generateAsExcel(data);

function generateAsExcel(data) {
    try {
        const workbook = XLSX.utils.book_new();

        for (let key in data) {
            const worksheet = XLSX.utils.json_to_sheet(data[key]);
            XLSX.utils.book_append_sheet(workbook, worksheet, key);
        }

        let res = XLSX.write(workbook, {
            type: "array"
        });
        console.log(res);

        const blob = new Blob([res], {
            type: "application/vnd.ms-excel"
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download ="Request For Invoice.xls";
        link.click();
    } catch (err) {
        console.log("Error:", err);
    }
}
        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(EmplId.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+EmplId.value ;
//}
handleDraftSave(this);


        }
	}
}
/**
 * @function request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_invoice_and_interagency_financial_transaction_request_for_invoice_and_interagency_financial_transaction_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            

  aftiaDescCWID.value = FirstName.value + " " + LastName.value  + " " + CWID.value;
  EmailSubject.value = "Test - Request For Invoice And Interagency Financial Transaction Form - (" + CWID.value + ")";

  RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
  ApproverEmail = "shreyas.manjunatha@thoughtfocus.com";
  ASFREmail =  "shreyas.manjunatha@thoughtfocus.com";
  guideBridge.submit();




        }
	}
}
