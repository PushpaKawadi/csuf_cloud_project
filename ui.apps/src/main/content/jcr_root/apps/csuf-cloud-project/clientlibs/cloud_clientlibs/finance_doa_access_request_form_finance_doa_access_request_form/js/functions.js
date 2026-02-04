/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(localStorage.getItem('workItemId'));
if(StageIndicator.value === null){
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
  
  		
		$.ajax({
		type: 'GET',
		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
			if(myresponse.Status == "Success"){
				var userValue=myresponse.userId;
				logUser.value = userValue;
				workflow_initiator.value = userValue;
             

				$.ajax({
				 type: 'GET',
						url: "/bin/getFARData",
						data: {action: "FAR_USER_DATA",userID:userValue},
						dataType: 'json',
						success: function(myresopnse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
								  CWID.value = myresopnse[0].EMPLID;
                              	 DeptName.value = myresopnse[0].DEPTNAME;
                              	Agency.value = myresopnse[0].CSU_SCO_AGENCY;
                              ReportingUnit.value = myresopnse[0].CSU_UNIT;
                                  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                                  CollegeDivision.value = myresopnse[0].DIVISION_NAME;
                                  FirstName.value = myresopnse[0].FIRST_NAME;
                                  LastName.value = myresopnse[0].LAST_NAME;
                                  //MiddleName.value = myresopnse[0].MIDDLE_NAME;
                                  CurrentClassificationJobTitle.value = myresopnse[0].DESCR;
                              	CurrentDeptUnit.value = myresopnse[0].DEPTID;
                              	CurrDeptID.value = myresopnse[0].DEPTID;
                              CurrJobCode.value = myresopnse[0].JOBCODE;
                              CurrRange.value = myresopnse[0].GRADE;
                              Division.value = myresopnse[0].DIVSION;
                               DivisionName.value = myresopnse[0].DIVISION_NAME;
                            //  PreparerEmailID.value =  myresopnse[0].EMAILID;
                                   PreparerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                               PreparedBy.value = myresopnse[0].EMP_NAME;
							  
								  gifModal.style.display = "none";
								  modal.style.display = "none";
								
							}else if (myresopnse.length > 1) {
							   gifModal.style.display = "none";
							   modal.style.display = "block";
							  
							  
							  var col = [];
								col.push("EMPLID");
								col.push("LAST_NAME");
								col.push("FIRST_NAME");
								col.push("DEPTID");
								col.push("DEPTNAME");
								
								var table = document.createElement("table");
								table.id = "tb";
								var tr = table.insertRow(-1);
								var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
								for (var j = 0; j < headings.length; j++) {
									var th = document.createElement("th");
									th.innerHTML = headings[j];
									tr.appendChild(th);
								}
								for (var k = 0; k < myresopnse.length; k++) {
									tr = table.insertRow(-1);
									// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
									var button = document.createElement("input");
									button.type = "radio";
									button.setAttribute("class", "rb");
									button.id = "rbtn";
									button.name = "group";
									button.value = "";
									button.onclick = function(event) {
										
									};
									var tabCell1 = tr.insertCell(-1);
									tabCell1.appendChild(button);
									for (var l = 0; l < col.length; l++) {
										var tabCell = tr.insertCell(-1);
										tabCell.innerHTML = myresopnse[k][col[l]];
									}
								}
								var divContainer = document.getElementById("showData");
								divContainer.innerHTML = "";
								divContainer.appendChild(table);
							  
								var footerModal = document.getElementById("modal_footer");
								
							
								//if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
								var okButton = document.createElement("input");
								okButton.type = "button";
								okButton.setAttribute("class", "okBtn");
								//okButton.id = "okBtn";
								okButton.value = "OK";
								okButton.onclick = function(event) {
									
								var n;
								var rButtonStatus;
							  //var rButtonStatusFalse;
								var rButtons = document.getElementsByClassName("rb");
								for(n=0;n<rButtons.length;n++){
									if(rButtons[n].checked === false){
									  rButtonStatus = false;
									}else{
									   CWID.value = myresopnse[n].EMPLID;
                              	 DeptName.value = myresopnse[n].DEPTNAME;
                              	Agency.value = myresopnse[n].CSU_SCO_AGENCY;
                              ReportingUnit.value = myresopnse[n].CSU_UNIT;
                                  CMSPositionNo.value = myresopnse[n].POSITION_NBR;
                                  CollegeDivision.value = myresopnse[n].DIVISION_NAME;
                                  FirstName.value = myresopnse[n].FIRST_NAME;
                                  LastName.value = myresopnse[n].LAST_NAME;
                                  //MiddleName.value = myresopnse[0].MIDDLE_NAME;
                                  CurrentClassificationJobTitle.value = myresopnse[n].DESCR;
                              	CurrentDeptUnit.value = myresopnse[n].DEPTID;
                              	CurrDeptID.value = myresopnse[n].DEPTID;
                              CurrJobCode.value = myresopnse[n].JOBCODE;
                              CurrRange.value = myresopnse[n].GRADE;
                              Division.value = myresopnse[n].DIVSION;
                               DivisionName.value = myresopnse[n].DIVISION_NAME;
                            //  PreparerEmailID.value =  myresopnse[n].EMAILID;
                                        PreparerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                               PreparedBy.value = myresopnse[n].EMP_NAME;
                                    
                                      
									  rButtonStatus = true;
									  break;
									}
							  }
							  if(rButtonStatus === false){
								alert("Please select the department");
								modal.style.display = "block";
							  }else {
									   
									   modal.style.display = "none";
									}
								};
								// footerModal = document.getElementById("modal_footer");
								footerModal.appendChild(okButton);
							   // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
							  
							}
						  else {
								//alert("No matching records found");
								  var modalError = document.getElementById("errorPopup");
								  var para = document.getElementById("para");
								  para.innerHTML = "";
								  para.innerHTML = "No matching records found";
								  var errorBody = document.getElementById('errorData');
								  errorBody.innerHTML = "";
								  errorBody.appendChild(para);
								  var footerModalError = document.getElementById("errorPopup-footer");
								  var okButtonError = document.createElement("input");
								  okButtonError.type = "button";
								  okButtonError.setAttribute("class", "okBtn");
								  //okButtonError.id = "okBtn";
								  okButtonError.value = "Ok";
								  okButtonError.onclick = function(event) {
								  modalError.style.display = "none";
							  };
							  footerModalError.appendChild(okButtonError);
							  modalError.style.display = "block";
						   
							   
								gifModal.style.display = "none";
							}
							 span.onclick = function() {
							
								var n;
							  var rButtonStatus;
							  //var rButtonStatusFalse;
							  var rButtons = document.getElementsByClassName("rb");
							  for(n=0;n<rButtons.length;n++){
								if(rButtons[n].checked === false){
								  rButtonStatus = false;
								}else{
								  rButtonStatus = true;
								  break;
								}
							  }
							  if(rButtonStatus === false){
								alert("Please select the department");
								modal.style.display = "block";
							  }else{
								
								alert("Please select the department");
								modal.style.display = "block";
							  }             
								
							};
							// When the user clicks anywhere outside of the modal, close it
							window.onclick = function(event) {
								if (event.target == modal) {
									modal.style.display = "none";
								}
							};
						}

				});
			}
		},
		error: function(error){
		alert("error block="+error);
		  loadingText.visible = false; 
		}
		});
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({
          type: 'GET',
          url:"/bin/getEvaluationFormData",
          data: {action: "EMP_DETAILS"},
          dataType: 'json',
          success: function(myresopnse) {
            var userValue = myresopnse[0].EMP_NAME;
            RequestorName.value = userValue;
            RequestorUserID.value = myresopnse[0].EMPUSERID;
            logUser.value = myresopnse[0].EMPUSERID;
           // RequestorEmail.value = myresopnse[0].EMAILID;      
                 RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";      
            InitiatorUserName.value = userValue;
          },
          error: function(error) {
            alert("error block=" + error);
          }
        });
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            
debugger;
if(StageIndicator.value === null){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  EmpSignPanel.visible = false;
  AdminSignPanel.visible = false;
  FiscalManagerPanel.visible = false;
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = false;
}
if(StageIndicator.value === "ToRequestor"){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  EmployeeInformationPanel.enabled = true;
  DelegationRolesApproversPanel.enabled = true;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = true;
  if(EmployeeCB.value == 1){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
  EmpSignPanel.visible = false;
  }
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
  AdminSignPanel.visible = false;
  }
  if(FiscalManagerCB.value == 1){
      FiscalManagerPanel.visible = true;
      FiscalManagerPanel.enabled = false;
  }else{
  FiscalManagerPanel.visible = false;
  }
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = false;
}

if(StageIndicator.value === "ToFiscalManager"){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  if(EmployeeCB.value == 1){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
  EmpSignPanel.visible = false;
  }
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
  AdminSignPanel.visible = false;
  }  
  FiscalManagerPanel.visible = true;
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = false;
}

if(StageIndicator.value === "ToDOABudgetOffice"){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  FiscalManagerPanel.visible = true;
  FiscalManagerPanel.enabled = false;
  EmpSignPanel.visible = true;
  EmpSignPanel.enabled = false;
  AdminSignPanel.visible = true;
  AdminSignPanel.enabled = false;
  if(FinServiceCB.value == 1){
  FinServicePanel.visible = true;
    FinServicePanel.enabled = false;
  }else{
    FinServicePanel.visible = false;
  }
  BudgetOfficePanel.visible = true;
  BudgetOfficePanel.enabled=true;
  SecurityAdminPanel.visible = false;
}
debugger;
if(StageIndicator.value === "ToManager"){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  FiscalManagerPanel.visible = true;
  FiscalManagerPanel.enabled = false;
  AdminSignPanel.visible = true;
  EmpSignPanel.visible = false;
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = false;
}

if(StageIndicator.value === "ToEmployee"){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  FiscalManagerPanel.visible = true;
  FiscalManagerPanel.enabled = false;
  AdminSignPanel.visible = true;
  AdminSignPanel.enabled = false;
  EmpSignPanel.visible = true;
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = false;
}
debugger;
if(StageIndicator.value === "ToFSBusinessAnalyst" || StageIndicator.value == "ToBusinessAnalystInactiveRoute"){
  EmployeeInformationPanel.visible = true;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.visible = true;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  
  if(InitiatorCB.value==1){
    InitiatorPanel.visible=true;
    InitiatorPanel.enabled=false;
  }else{
    InitiatorPanel.visible=false;
  }
  if(EmployeeCB.value == 1){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
  EmpSignPanel.visible = false;
  }
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
  AdminSignPanel.visible = false;
  }
  if(FiscalManagerCB.value == 1){
      FiscalManagerPanel.visible = true;
      FiscalManagerPanel.enabled = false;
  }else{
  FiscalManagerPanel.visible = false;
  }
  BudgetOfficePanel.visible = false;
  FinServicePanel.visible = true;
  SecurityAdminPanel.visible = false;
}
if(StageIndicator.value === "ToSecurityAdminFromTimer"){
  EmployeeInformationPanel.visible = true;
  DelegationRolesApproversPanel.visible = true;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  if(EmployeeCB.value == 1){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
  EmpSignPanel.visible = false;
  }
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
  AdminSignPanel.visible = false;
  }
  if(FiscalManagerCB.value == 1){
      FiscalManagerPanel.visible = true;
      FiscalManagerPanel.enabled = false;
  }else{
  FiscalManagerPanel.visible = false;
  }
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = true;
  SecurityAdminPanel.enabled = false;
}

if(StageIndicator.value === "ToSecurityAdminFromManager"){
  EmployeeInformationPanel.visible = true;
   EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.visible = false;
  EmployeeInformationPanel.enabled = false;
  DelegationRolesApproversPanel.enabled = false;
  SignaturesPanel.visible = true;
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = true;
  if(EmployeeCB.value == 1){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
  EmpSignPanel.visible = false;
  }
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
  AdminSignPanel.visible = false;
  }
  if(FiscalManagerCB.value == 1){
      FiscalManagerPanel.visible = true;
      FiscalManagerPanel.enabled = false;
  }else{
  FiscalManagerPanel.visible = false;
  }
  FinServicePanel.visible = false;
  BudgetOfficePanel.visible = false;
  SecurityAdminPanel.visible = false;
  SecurityAdminPanel.enabled = true;
  SecurityAdminPanel.visible =  true;
}
if(AccountActionRequest.value == 3){
  DelegationRolesApproversPanel.mandatory = false;
  DelegationRolesApproversPanel.visible = false;
}else{
   DelegationRolesApproversPanel.mandatory = true;
  DelegationRolesApproversPanel.visible = true;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            
guideBridge.on("validationComplete" , function(event, payload) {
  	debugger;
if(StageIndicator.value===null || StageIndicator.value=="ToManager" || StageIndicator.value=="ToSecurityAdminFromManager"){
  if(AccountActionRequest.value==3){
    DelegationRolesApproversPanel.mandatory=false;
  }else{
    DelegationRolesApproversPanel.mandatory=true;
  }
}
  
  if(StageIndicator.value == "ToRequestor" && InitiatorCB.value == 1 ){
if(InitiatorComments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1){
// if((Comments.value).lastIndexOf(AdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Initiator's Comments :"+InitiatorComments.value;
}
  if(InitiatorComments.value === null && (Comments.value).lastIndexOf("Initiator's Comments :") == -1){
// if((Comments.value).lastIndexOf(AdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Initiator's Comments :";
}
}debugger;
if(StageIndicator.value == "ToManager" && AdminCB.value == 1 ){
if(AdminComments.value !== null && (Comments.value).lastIndexOf(AdminComments.value) == -1){
// if((Comments.value).lastIndexOf(AdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Administrator's Comments :"+AdminComments.value;
}
  if(AdminComments.value === null && (Comments.value).lastIndexOf("Administrator's Comments :") == -1){
// if((Comments.value).lastIndexOf(AdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Administrator's Comments :";
}
}
 
if(StageIndicator.value == "ToFiscalManager" && FiscalManagerDecision.value !== ""){
if(FiscalManagerComments.value !== null && (Comments.value).lastIndexOf(FiscalManagerComments.value) == -1){
Comments.value = Comments.value+"\n"+"Fiscal Manager's Comments :"+FiscalManagerComments.value;
}
  if(FiscalManagerComments.value === null && (Comments.value).lastIndexOf("Fiscal Manager's Comments :") == -1){
Comments.value = Comments.value+"\n"+"Fiscal Manager's Comments :";
}
}

if(StageIndicator.value == "ToEmployee" && EmployeeCB.value == 1){
if(EmployeeComments.value !== null && (Comments.value).lastIndexOf(EmployeeComments.value) == -1){
// if((Comments.value).lastIndexOf(EmployeeComments.value) == -1){
Comments.value = Comments.value+"\n"+"Employee's Comments :"+EmployeeComments.value;
}
  if(EmployeeComments.value === null && (Comments.value).lastIndexOf("Employee's Comments :") == -1){
// if((Comments.value).lastIndexOf(EmployeeComments.value) == -1){
Comments.value = Comments.value+"\n"+"Employee's Comments :";
}
}
if(StageIndicator.value == "ToBusinessAnalyst" && BusinessAnalystCB.value == 1){
if(BusinessAnalystComments.value !== null && (Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
// if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
Comments.value = Comments.value+"\n"+"Business Analyst's Comments :"+BusinessAnalystComments.value;
}
  if(BusinessAnalystComments.value === null && (Comments.value).lastIndexOf("Business Analyst's Comments :") == -1){
// if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
Comments.value = Comments.value+"\n"+"Business Analyst's Comments :";
}
}

if(StageIndicator.value == "ToBudgetOffice" && BudgetAnalystCB.value == 1){
if(BudgetAnalystComments.value !== null && (Comments.value).lastIndexOf(BudgetAnalystComments.value) == -1){
// if((Comments.value).lastIndexOf(BudgetAnalystComments.value) == -1){
Comments.value = Comments.value+"\n"+"Budget Office Reviewer's Comments :"+BudgetAnalystComments.value;
}
  if(BudgetAnalystComments.value === null && (Comments.value).lastIndexOf("Budget Office Reviewer's Comments :") == -1){
// if((Comments.value).lastIndexOf(BudgetAnalystComments.value) == -1){
Comments.value = Comments.value+"\n"+"Budget Office Reviewer's Comments :";
}
}
if(StageIndicator.value == "ToISO" && ISOAdminCB.value == 1){
if(ISOAdminComments.value !== null && (Comments.value).lastIndexOf(ISOAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"ISO Admin's Comments :"+ISOAdminComments.value;
}
  if(ISOAdminComments.value === null && (Comments.value).lastIndexOf("ISO Admin's Comments :") == -1){
Comments.value = Comments.value+"\n"+"ISO Admin's Comments :";
}
}
if(StageIndicator.value == "ToCISO" && CISOCB.value == 1){
if(CISOComments.value !== null && (Comments.value).lastIndexOf(CISOComments.value) == -1){
// if((Comments.value).lastIndexOf(CISOComments.value) == -1){
Comments.value = Comments.value+"\n"+"CISO Admin's Comments :"+CISOComments.value;
}
  if(CISOComments.value === null && (Comments.value).lastIndexOf("CISO Admin's Comments :") == -1){
// if((Comments.value).lastIndexOf(CISOComments.value) == -1){
Comments.value = Comments.value+"\n"+"CISO Admin's Comments :";
}
}
if((StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer" || StageIndicator.value == "ToSecurityAdminFromManager") && SecurityAdminCB.value == 1){
if(SecurityAdminComments.value !== null && (Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Security Admin's Comments :"+SecurityAdminComments.value;
}
  if(SecurityAdminComments.value === null && (Comments.value).lastIndexOf("Security Admin's Comments :") == -1){
//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Security Admin's Comments :";
}
}
  if((StageIndicator.value == "ToFSBusinessAnalyst" || StageIndicator.value == "ToBusinessAnalystInactiveRoute") && FinServiceCB.value == 1){
if(FSComments.value !== null && (Comments.value).lastIndexOf(FSComments.value) == -1){
//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Business Analyst's Comments :"+FSComments.value;
}
    if(FSComments.value === null && (Comments.value).lastIndexOf("Business Analyst's Comments :") == -1){
//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Business Analyst's Comments :";
}
}
   if(StageIndicator.value == "ToDOABudgetOffice" && BudgetOfficeCB.value == 1){
if(BudgetOfficeComments.value !== null && (Comments.value).lastIndexOf(BudgetOfficeComments.value) == -1){
//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Budget Officer's Comments :"+BudgetOfficeComments.value;
}
     if(BudgetOfficeComments.value === null && (Comments.value).lastIndexOf("Budget Officer's Comments :") == -1){
//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
Comments.value = Comments.value+"\n"+"Budget Officer's Comments :";
}
}
});
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_basicInformation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_basicInformation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_CaseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_CaseID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_ApprovalStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_ApprovalStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === "ToCompleteQueue"){
  this.value = "Complete";
}else{
   this.value = "In Progress";
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

type: 'GET',
url:"/bin/getCaseID",
dataType: 'json',

success: function(myresponse){
CaseID.value = myresponse.CASEID;

}
});
}
if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            var userValue = myresponse.userId;
            logUser.value = userValue;
            workflow_initiator.value = userValue;
            var cwidValue = CWID.value;
            var pattern = /^8\d{8}$/;
            var result = pattern.test(cwidValue);
            if (result !== true) {
              CampusEmail.value = "";
                              	FirstName.value = "";
                                LastName.value = "";
                               	DeptID.value = "";
                                DeptName.value = "";
                              	Divison.value = "";
                                DivisionID.value = "";
                                Title.value = "";
                                CampusExt.value = "";
                              	AppropAdmin.value = "";
                              	EmployeeEmail.value = "";
                              	ManagerName.value = "";
                              AppropAdmin.value = "";
                             ManagerUserID.value = "";
                                EmployeeUserID.value = "";
                                  EmploymentType.value = "";                                
                              	TempEndDate.value = "";
                showErrorModal("Alert!", "Please enter a valid Employee ID");

            } else {
                //if (CWID.value !== null) {

                    var gifModal = document.getElementById('gifModal');
                    gifModal.style.display = "block";
                    var cwidVal = CWID.value;
				    
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getFinancialARFData",
                        data: {
                            cwid: cwidVal,
                            action: "FS_EMP_DATA"
                        },
                        dataType: 'json',
                        success: function(myresponse) {

                            var modal = document.getElementById('myModal');
                            var span = document.getElementsByClassName("close")[0];

                            if (myresponse.length === 1) {
                               // CampusEmail.value = myresponse[0].EMAIL;
                               CampusEmail.value ="shreyas.manjunatha@thoughtfocus.com";
                              	FirstName.value = myresponse[0].FIRST_NAME;
                                LastName.value = myresponse[0].LAST_NAME;
                                EmployeeFullName.value = FirstName.value+" "+LastName.value;
                               	DeptID.value = myresponse[0].DEPTID;
                                DeptName.value = myresponse[0].DEPTNAME;
                              	Divison.value = myresponse[0].FUL_DIVISION_NAME;
                                DivisionID.value = myresponse[0].FUL_DIVISION;
                                Title.value = myresponse[0].DESCR;
                                CampusExt.value = myresponse[0].PHONE;
                              	//CampusLocation.value = myresponse[0].BUILDING;
                              //	AppropAdmin.value = myresponse[0].MANAGER; commented on 08242023
                              //	EmployeeEmail.value = myresponse[0].EMAIL;
                              EmployeeEmail.value ="shreyas.manjunatha@thoughtfocus.com";
                              //	ManagerName.value = AppropAdmin.value;   commented on 08242023
                               // ManagerEmail.value = myresponse[0].MANAGER_EMAIL_ID;
                               ManagerEmail.value ="shreyas.manjunatha@thoughtfocus.com";
                             
                            /* var myArr = (myresponse[0].MANAGER).split("|");
                              AppropAdmin.value = myArr[0];
                             ManagerUserID.value = myArr[1]; */ // commented on 08242023 and added below if else
                              if(myresponse[0].MANAGER === undefined){
                                AppropAdmin.value = "Admin";
                                ManagerName.value = AppropAdmin.value;
                                AppropAdmin.value = "Admin";
                             ManagerUserID.value = "admin";
                              }else{
                                AppropAdmin.value = myresponse[0].MANAGER;
                                ManagerName.value = AppropAdmin.value;
                                var myArr = (myresponse[0].MANAGER).split("|");
                              AppropAdmin.value = myArr[0];
                             ManagerUserID.value = myArr[1];
                              }
                                EmployeeUserID.value = myresponse[0].USERID;
                              	var empType = myresponse[0].EMP_TYPE;
                                if(empType == "Permanent"){
                                  EmploymentType.value = "1";
                                } else {
                                  EmploymentType.value = "2";
                                }
                              	if(myresponse[0].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[0].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	TempEndDate.value = d;
                              }
                              
                                gifModal.style.display = "none";
                                modal.style.display = "none";

                            } else if (myresponse.length > 1) {                                
                                gifModal.style.display = "none";
                                modal.style.display = "block";

                                var col = [];
                                col.push("EMPLID");
                                col.push("LAST_NAME");
                                col.push("FIRST_NAME");
                                col.push("DEPTID");
                                col.push("DEPTNAME");
                                
                                var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                                for (var j = 0; j < headings.length; j++) {
                                    var th = document.createElement("th");
                                    th.innerHTML = headings[j];
                                    tr.appendChild(th);
                                }
                                for (var k = 0; k < myresponse.length; k++) {
                                    tr = table.insertRow(-1);
                                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                                    var button = document.createElement("input");
                                    button.type = "radio";
                                    button.setAttribute("class", "rb");
                                    button.id = "rbtn";
                                    button.name = "group";
                                    button.value = "";

                                    var tabCell1 = tr.insertCell(-1);
                                    tabCell1.appendChild(button);
                                    for (var l = 0; l < col.length; l++) {
                                        var tabCell = tr.insertCell(-1);
                                        tabCell.innerHTML = myresponse[k][col[l]];
                                    }
                                }
                                var divContainer = document.getElementById("showData");
                                divContainer.innerHTML = "";
                                divContainer.appendChild(table);

                                var footerModal = document.getElementById("modal_footer");

                                var okButton = document.createElement("input");
                                okButton.type = "button";
                                okButton.setAttribute("class", "okBtn");

                                okButton.value = "OK";
                                okButton.onclick = function(event) {

                                    var n;
                                    var rButtonStatus;

                                    var rButtons = document.getElementsByClassName("rb");
                                    for (n = 0; n < rButtons.length; n++) {
                                        if (rButtons[n].checked === false) {
                                            rButtonStatus = false;
                                        } else {
                                       //   CampusEmail.value = myresponse[n].EMAIL;
                                           CampusEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                          FirstName.value = myresponse[n].FIRST_NAME;
                                          LastName.value = myresponse[n].LAST_NAME;
                                          EmployeeFullName.value = FirstName.value+" "+LastName.value;
                                          DeptID.value = myresponse[n].DEPTID;
                                          DeptName.value = myresponse[n].DEPTNAME;
                                          Divison.value = myresponse[n].FUL_DIVISION_NAME;
                                          DivisionID.value = myresponse[n].FUL_DIVISION;
                                          Title.value = myresponse[n].DESCR;
                                          CampusExt.value = myresponse[n].PHONE;
                                        //  EmployeeEmail.value = myresponse[n].EMAIL;
                                           EmployeeEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                          //CampusLocation.value = myresponse[n].BUILDING;
                                          /*AppropAdmin.value = myresponse[n].MANAGER;
                                          var myArr = (myresponse[n].MANAGER).split("|");
                                          AppropAdmin.value = myArr[0];
                                          ManagerUserID.value = myArr[1];
                                          ManagerName.value = AppropAdmin.value;*/ //commented on 08242023 and added below if else
                                          if(myresponse[n].MANAGER === undefined){
                                            AppropAdmin.value = "Admin";
                                          AppropAdmin.value = "Admin";
                                          ManagerUserID.value = "admin";
                                          ManagerName.value = AppropAdmin.value;
                                          }else{
                                            AppropAdmin.value = myresponse[n].MANAGER;
                                          var myArr = (myresponse[n].MANAGER).split("|");
                                          AppropAdmin.value = myArr[0];
                                          ManagerUserID.value = myArr[1];
                                          ManagerName.value = AppropAdmin.value;
                                          }

                                          var empType = myresponse[n].EMP_TYPE;
                                          EmployeeUserID.value = myresponse[n].USERID;
                                                                                    
                             			 // ManagerEmail.value = myresponse[n].MANAGER_EMAIL_ID;
                                            ManagerEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                          
                                          if(empType == "Permanent"){
                                            EmploymentType.value = "1";
                                          } else {
                                            EmploymentType.value = "2";
                                          }
                                          if(myresponse[n].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[n].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	TempEndDate.value = d;
                              }
                                          /*var empPosition = myresponse[n].POSITION;
                                          if(empPosition == "Faculty"){
                                            EmploymentCatagory.value = "1";
                                          } else if(empPosition == "Staff"){
                                            EmploymentCatagory.value = "2";
                                          } else if(empPosition == "Management"){
                                            EmploymentCatagory.value = "3";
                                          } else if(empPosition == "Student"){
                                            EmploymentCatagory.value = "4";
                                          } else if(empPosition == "Other"){
                                            EmploymentCatagory.value = "5";
                                          } */
                                          
                                            rButtonStatus = true;
                                            break;
                                        }
                                    }
                                    if (rButtonStatus === false) {
                                        showErrorModal("Alert!", "Please select the department");
                                        modal.style.display = "block";
                                    } else {
                                        modal.style.display = "none";
                                    }
                                };
                                footerModal.appendChild(okButton);
                            } else {
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "No matching records found");
                              CampusEmail.value = "";
                              FirstName.value = "";
                              LastName.value = "";
                              DeptID.value = "";
                              DeptName.value = "";
                              Divison.value ="";
                              DivisionID.value =  "";
                              Title.value = "";
                              CampusExt.value = "";
                              AppropAdmin.value = "";
                              EmployeeEmail.value ="";
                              EmployeeUserID.value = "";
                              TempEndDate.value = "";

                            }
                            ////////////////////////////////////////////
                            span.onclick = function() {

                                var n;
                                var rButtonStatus;
                                //var rButtonStatusFalse;
                                var rButtons = document.getElementsByClassName("rb");
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {
                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the department");

                                    modal.style.display = "block";
                                } else {
                                    showErrorModal("Alert!", "Please select the department");

                                    modal.style.display = "block";
                                }

                            };

                        }
                    });
                }
           // }


        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_CampusEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_CampusEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_Title_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_Title_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_CampusExt_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_CampusExt_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_Divison_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_Divison_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_AppropAdmin_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_AppropAdmin_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_EmploymentType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_EmploymentType_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_EmploymentType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_EmploymentType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == 2){
  //  TempEndDate.enabled = true;
    TempEndDate.mandatory = true;
  }else{
    // TempEndDate.enabled = false;
     TempEndDate.value = "";
     TempEndDate.mandatory = false;
  }
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TempEndDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TempEndDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_textdraw1635411470952_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_textdraw1635411470952_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_AccountActionRequest_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_AccountActionRequest_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value=="ToManager" || StageIndicator.value == "ToSecurityAdminFromManager"){
if(this.value == 3){
  DelegationRolesApproversPanel.mandatory = false;
  DelegationRolesApproversPanel.visible = false;
}else{
   DelegationRolesApproversPanel.mandatory = true;
  DelegationRolesApproversPanel.visible = true;
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
      //  gifModal.style.display = "block";
        
      workflow_initiator.value = myresopnse.userId;
    }
});
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_DivisionID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_DivisionID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
              if(StageIndicator.value === null){
$.ajax({

type: 'GET',
url:"/bin/getFinancialARFData",
dataType: 'json',
  data:{
    action:"BUDGET_CONTACT",userId:EmployeeUserID.value,divID:this.value
  },

success: function(myresponse){
  debugger;
 //FiscalManagerEmail.value = myresponse[0].BUDGET_CONTACT_EMAIL_ID;
   FiscalManagerEmail.value = "shreyas.manjunatha@thoughtfocus.com";
 FiscalManagerUserID.value = (myresponse[0].BUDGET_CONTACT).split("|")[1];
 FiscalManagerName.value = (myresponse[0].BUDGET_CONTACT).split("|")[0];
}
});

}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_ExpiryFlag_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_ExpiryFlag_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToSecurityAdminFromTimer"){
ExpiryMessage.visible = true;
}else{
ExpiryMessage.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FormStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FormStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "In Process";
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_DOAEffDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_DOAEffDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null) || (StageIndicator.value === "ToRequestor")){
    this.mandatory=true;
}
else{
  this.mandatory=false;
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_doaPermanent_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_doaPermanent_init0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null) || (StageIndicator.value === "ToRequestor")){
    this.mandatory=true;
}
else{
  this.mandatory=false;
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_doaPermanent_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_doaPermanent_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(this.value == 1){
    DOAPermanent.value = 1;
    DOATemporary.value = "";
    DOATempEndDate.enabled = false;
    DOATempEndDate.mandatory = false;
    DOATempEndDate.value = "";
  }
  if(this.value == 2){
    DOAPermanent.value = "";
    DOATemporary.value = 1;
    DOATempEndDate.enabled = true;
     DOATempEndDate.mandatory = true;
  }
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_doaPermanent_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_doaPermanent_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(EmploymentType.value !== null){
    if(EmploymentType.value == "2" && this.value == "1"){
      showErrorModal("Alert!", "Employee is temporary, delegation roles employee type can't be selected as permanent");
      this.value = "";
    }
  }
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_DOATempEndDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_DOATempEndDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_DOATempEndDate_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_DOATempEndDate_init1 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null) || (StageIndicator.value === "ToRequestor")){
if (doaPermanent.value==2) {
    this.enabled=true;
    this.mandatory=true;
}
else{
  this.enabled=false;
  this.mandatory=false;
}
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var budTranAdd = this.value;
var budTranRemove = BudgetTransferRemove.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(budTranAdd == "1"){
  	button1.enabled = true;
  	BudgetTransferDepts.enabled = false;
    button2.enabled = true;
    BudgetTransferOtherDepts.enabled = false;
  }else if(budTranAdd === null && budTranRemove === null) {
     button1.enabled = false;
     BudgetTransferDepts.enabled = false;
     BudgetTransferDepts.value = "";
     button2.enabled = false;
     BudgetTransferOtherDepts.enabled = false;
     BudgetTransferOtherDepts.value = "";
  }
 
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferAdd_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferAdd_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    BudgetTransferRemove.value = "";
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var budTranRemove = this.value;
var budTranAdd = BudgetTransferAdd.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(budTranRemove == "1"){
     button1.enabled = true;
  	 BudgetTransferDepts.enabled = false;
     button2.enabled = true;
     BudgetTransferOtherDepts.enabled = false;
  }else if(budTranAdd === null && budTranRemove === null){
     button1.enabled = false;
  	 BudgetTransferDepts.enabled = false;
     BudgetTransferDepts.value = "";
     button2.enabled = false;
     BudgetTransferOtherDepts.enabled = false;
     BudgetTransferOtherDepts.value = "";
  }
 
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferRemove_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferRemove_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    BudgetTransferAdd.value = "";
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button1_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button1_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value===null || StageIndicator.value == "ToRequestor"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
 
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            action : "FS_ARF_DEPT_LOOKUP",
            divID: DivisionID.value 
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                debugger;
                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Dept_ID","Dept Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("cb");
              
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };
                var cell1 = tr.insertCell(-1);
                cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "cb");
                    button.id = "cbtn";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresopnse[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                //divContainer.innerHTML = "";
              if(BudgetTransferDepts.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }else{
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
                var selectedVal = (BudgetTransferDepts.value).split(",");
                debugger;
                if(selectedVal.length > 1){
                for(b=0;b<(document.getElementsByClassName("cb")).length;b++){
                  for(s=0;s<selectedVal.length;s++){
                    if(myresopnse[b].DEPTID == selectedVal[s].trim()){
                      (document.getElementsByClassName("cb"))[b].checked = true;
                      break;
                    }
                  }
                }
                }else{
                   for(b=0;b<(document.getElementsByClassName("cb")).length;b++){
                     if(myresopnse[b].DEPTID == (BudgetTransferDepts.value).trim()){
                      (document.getElementsByClassName("cb"))[b].checked = true;
                    }
                   }
                }
                
              }          
                var footerModal = document.getElementById("modal_footer");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresopnse[n].DEPTID;
                  }else{
                   result = result+","+myresopnse[n].DEPTID;
                  }
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               BudgetTransferDepts.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("cb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
            };
        }
    });
}
},
error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}
});
//}
  

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferDepts_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferDepts_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button2_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button2_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button2_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
document.getElementById('showData2').innerHTML = "";
var modal = document.getElementById('myModal1');

var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "Department Id";
element.setAttribute("type", "text");
element.setAttribute("id", "deptId");
element.setAttribute("value", "");
element.setAttribute("label", "Department Id");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Department Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "deptName");
element2.setAttribute("label", "Department Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");

var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";

var span = document.getElementById("closeBtn");
span.onclick = function(event) {
    (document.getElementById('myModal1')).style.display = "none";
};
searchButton.onclick = function(event) {
    //if (document.getElementById('showData2').innerHTML === "") {
    var depID = document.getElementById('deptId').value;
    var depName = document.getElementById('deptName').value;
    //var cwidVal = "806225686";
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            depID: depID,
            depName: depName,
            action: "FS_ARF_DEPT_OTHER_DIV"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {
                document.getElementById('showData2').innerHTML = "";
                var modal = document.getElementById('myModal1');


                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Department Id", "Department Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresponse.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "button";
                    button.value = "Add";
                    button.onclick = function(event) {


                        var heading = document.createElement("P");
                        var headingText = document.createTextNode("Selected Departments");
                        heading.appendChild(headingText);
                        heading.style.color = "Black";
                        heading.style.fontSize = "smaller";
                        heading.style.textAlign = "left";


                        var dept = this.parentNode.parentNode.cells[1].innerHTML;
                        var textVal = "";

                        /* if (BudgetTransferOtherDepts.value !== null) {
                             if ((BudgetTransferOtherDepts.value).indexOf(dept) !== -1) {
                                 textVal = "Selected Dept is already added";
                             } else {
                                 if (BudgetTransferOtherDepts.value !== null) {
                                     BudgetTransferOtherDepts.value = BudgetTransferOtherDepts.value + ", " + dept;
                                 } else {
                                     BudgetTransferOtherDepts.value = dept;
                                 }
                                 textVal = "Added Successfully";
                             }
                         } else {
                             BudgetTransferOtherDepts.value = dept;
                             textVal = "Added Successfully";
                         }*/
                        var h = document.createElement("P");
                        var t = document.createTextNode(textVal);
                        h.id = "h";
                        heading.id = "heading";
                        h.appendChild(t);
                        h.style.color = "blue";
                        h.style.fontSize = "smaller";
                        h.style.textAlign = "center";


                        if (document.getElementById("tb1") === null) {
                            //document.getElementById("showData3").appendChild(h);
                            // setTimeout(function() {
                            //     document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            document.getElementById("showData3").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "tb1";
                            var tr1 = table1.insertRow(-1);
                            var headings1 = ["", "Department Id", "Department Name"];
                            for (var j = 0; j < headings1.length; j++) {
                                var th1 = document.createElement("th");
                                th1.innerHTML = headings1[j];
                                tr1.appendChild(th1);
                            }
                            //for (var k = 0; k < myresponse.length; k++) {
                            tr1 = table1.insertRow(-1);
                            var button1 = document.createElement("input");
                            button1.type = "button";
                            button1.value = "Remove";
                            button1.onclick = function(event) {
debugger;
                               if (document.getElementById("tb1").rows.length == 2 && document.getElementById("tb1").rows.length !== 0) {
                                  document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        BudgetTransferOtherDepts.value = "";
                                   
                                  document.getElementById("showData3").innerHTML = "";
                                } else {
                                    document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((BudgetTransferOtherDepts.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (BudgetTransferOtherDepts.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          BudgetTransferOtherDepts.value = ", "+(BudgetTransferOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          BudgetTransferOtherDepts.value = (BudgetTransferOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (BudgetTransferOtherDepts.value !== null) {

                                if (((BudgetTransferOtherDepts.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showData3").appendChild(table1);
                                 
                                } else {
                                  var rowCount = table1.rows.length;
									table1.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                var tabCell2 = tr1.insertCell(-1);
                                tabCell2.appendChild(button1);
                                var tabCell3 = tr1.insertCell(-1);
                                tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                var tabCell4 = tr1.insertCell(-1);
                                tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                document.getElementById("showData3").appendChild(table1);
                             
          
                            }
                            if (BudgetTransferOtherDepts.value !== null) {
                                if ((BudgetTransferOtherDepts.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (BudgetTransferOtherDepts.value !== null) {
                                        BudgetTransferOtherDepts.value = BudgetTransferOtherDepts.value + ", " + dept;
                                    } else {
                                        BudgetTransferOtherDepts.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                BudgetTransferOtherDepts.value = dept;
                                textVal = "Added Successfully";
                            }


                        } else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showData3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("tb1");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {
                              
                                if (document.getElementById("tb1").rows.length == 2 && document.getElementById("tb1").rows.length !== 0) {
                                  document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        BudgetTransferOtherDepts.value = "";
                                   
                                  document.getElementById("showData3").innerHTML = "";
                                } else {
                                    document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((BudgetTransferOtherDepts.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (BudgetTransferOtherDepts.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          BudgetTransferOtherDepts.value = ", "+(BudgetTransferOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          BudgetTransferOtherDepts.value = (BudgetTransferOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (BudgetTransferOtherDepts.value !== null) {

                                if (((BudgetTransferOtherDepts.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showData3").appendChild(table2);
                                   
          
                                    } else {
                                      var rowCount = table2.rows.length;
									table2.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                cell1.appendChild(button2);
                                var cell2 = tr2.insertCell(-1);
                                cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                var cell3 = tr2.insertCell(-1);
                                cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                document.getElementById("showData3").appendChild(table2);
                             
          
                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (BudgetTransferOtherDepts.value !== null) {
                                if ((BudgetTransferOtherDepts.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (BudgetTransferOtherDepts.value !== null) {
                                        BudgetTransferOtherDepts.value = BudgetTransferOtherDepts.value + ", " + dept;
                                    } else {
                                        BudgetTransferOtherDepts.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                BudgetTransferOtherDepts.value = dept;
                                textVal = "Added Successfully";
                            }
                        }


                    };
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresponse[k][col[l]];
                    }

                }

            }else{
              showErrorModal("Alert!", "No matching records found");
            }
            var divContainer = document.getElementById("showData2");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            var saveButton = document.createElement("input");
            saveButton.type = "button";
            //veButton.setAttribute("class", "okBtn");
            saveButton.value = "Save";
            var divContainer2 = document.getElementById("showData2");
            divContainer2.appendChild(saveButton);
            saveButton.onclick = function(event) {

                modal.style.display = "none";

            };
            
            var footerModal = document.getElementById("modal_footer");
           
        }
    });

};

var divContainer = document.getElementById("showData1");

divContainer.innerHTML = "";
divContainer.appendChild(label);
divContainer.appendChild(element);
divContainer.appendChild(label2);
divContainer.appendChild(element2);
divContainer.appendChild(searchButton);

modal.style.display = "block";
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferOtherDepts_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetTransferOtherDepts_init0 = function (scope) {
    with(this) {
        with(scope) {
            
this.enabled =  false;
 

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_APAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_APAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var apAdd = this.value;
var apRemove = APRemove.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(apAdd == "1"){
  	button3.enabled = true;
    APDepts.enabled = false;
    button4.enabled = true;
    APOtherDepts.enabled = false;
  }else if(apAdd === null && apRemove === null) {
     button3.enabled = false;
     APDepts.enabled = false;
     APDepts.value = "";
     button4.enabled = false;
     APOtherDepts.enabled = false;
     APOtherDepts.value = "";
  }
 
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_APAdd_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_APAdd_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    APRemove.value = "";

}
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_APRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_APRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var apAdd = APAdd.value;
var apRemove = APRemove.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){ 
  if(apRemove == "1"){
  	button3.enabled = true;
    APDepts.enabled = false;
    button4.enabled = true;
    APOtherDepts.enabled = false;
  }else if(apAdd === null && apRemove === null) {
     button3.enabled = false;
     APDepts.enabled = false;
     APDepts.value = "";
     button4.enabled = false;
     APOtherDepts.enabled = false;
     APOtherDepts.value = "";
  }
 
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_APRemove_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_APRemove_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    APAdd.value = "";

}
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button3_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
 
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button3_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button3_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value===null || StageIndicator.value == "ToRequestor"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
debugger;
$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
 
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            action : "FS_ARF_DEPT_LOOKUP",
            divID: DivisionID.value 
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('myModalAPDepts');
            //var span = document.getElementsByClassName("close")[0];
			var span = document.getElementById('closeBtnApDepts');
			
            debugger;
            if (myresopnse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Dept_ID","Dept Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("APDeptData");
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };
                var cell1 = tr.insertCell(-1);
                cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "APDeptData");
                    button.id = "cbAPDeptData";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresopnse[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showDataAPDepts");
                //divContainer.innerHTML = "";
              if(APDepts.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }  
              else{
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
                var selectedVal = (APDepts.value).split(",");
                debugger;
                if(selectedVal.length > 1){
                for(b=0;b<(rButtons).length;b++){
                  for(s=0;s<selectedVal.length;s++){
                    if(myresopnse[b].DEPTID == selectedVal[s].trim()){
                      (rButtons)[b].checked = true;
                      break;
                    }
                  }
                }
                }else{
                   for(b=0;b<(rButtons).length;b++){
                     if(myresopnse[b].DEPTID == (APDepts.value).trim()){
                      (rButtons)[b].checked = true;
                    }
                   }
                }
                
              } 
                var footerModal = document.getElementById("modal_footer_AP_Depts");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresopnse[n].DEPTID;
                  }else{
                   result = result+","+myresopnse[n].DEPTID;
                  }
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               APDepts.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           debugger;
             span.onclick = function() {
            debugger;
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("APDeptData");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
            };
        }
    });
}
},
error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}
});
//}
  

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_APDepts_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_APDepts_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button4_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button4_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button4_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
document.getElementById('showDataAPOtherDept2').innerHTML = "";
var modal = document.getElementById('myModalAPOtherDept');

var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "Department Id";
element.setAttribute("type", "text");
element.setAttribute("id", "deptIdAPOthers");
element.setAttribute("value", "");
element.setAttribute("label", "Department Id");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Department Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "deptNameAPOthers");
element2.setAttribute("label", "Department Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");

var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";

debugger;
var span = document.getElementById("closeBtnApOtherDepts");
span.onclick = function(event) {
  debugger;
    (document.getElementById('myModalAPOtherDept')).style.display = "none";
};
searchButton.onclick = function(event) {
    //if (document.getElementById('showDataAPOtherDept2').innerHTML === "") {
    var depID = document.getElementById('deptIdAPOthers').value;
    var depName = document.getElementById('deptNameAPOthers').value;
    //var cwidVal = "806225686";
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            depID: depID,
            depName: depName,
            action: "FS_ARF_DEPT_OTHER_DIV"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {
                document.getElementById('showDataAPOtherDept2').innerHTML = "";
                var modal = document.getElementById('myModalAPOtherDept');


                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Department Id", "Department Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresponse.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "button";
                    button.value = "Add";
                    button.onclick = function(event) {


                        var heading = document.createElement("P");
                        var headingText = document.createTextNode("Selected Departments");
                        heading.appendChild(headingText);
                        heading.style.color = "Black";
                        heading.style.fontSize = "smaller";
                        heading.style.textAlign = "left";


                        var dept = this.parentNode.parentNode.cells[1].innerHTML;
                        var textVal = "";

                        /* if (APOtherDepts.value !== null) {
                             if ((APOtherDepts.value).indexOf(dept) !== -1) {
                                 textVal = "Selected Dept is already added";
                             } else {
                                 if (APOtherDepts.value !== null) {
                                     APOtherDepts.value = APOtherDepts.value + ", " + dept;
                                 } else {
                                     APOtherDepts.value = dept;
                                 }
                                 textVal = "Added Successfully";
                             }
                         } else {
                             APOtherDepts.value = dept;
                             textVal = "Added Successfully";
                         }*/
                        var h = document.createElement("P");
                        var t = document.createTextNode(textVal);
                        h.id = "h";
                        heading.id = "heading";
                        h.appendChild(t);
                        h.style.color = "blue";
                        h.style.fontSize = "smaller";
                        h.style.textAlign = "center";


                        if (document.getElementById("tbApDepts1") === null) {
                            //document.getElementById("showDataAPOtherDept3").appendChild(h);
                            // setTimeout(function() {
                            //     document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            document.getElementById("showDataAPOtherDept3").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "tbApDepts1";
                            var tr1 = table1.insertRow(-1);
                            var headings1 = ["", "Department Id", "Department Name"];
                            for (var j = 0; j < headings1.length; j++) {
                                var th1 = document.createElement("th");
                                th1.innerHTML = headings1[j];
                                tr1.appendChild(th1);
                            }
                            //for (var k = 0; k < myresponse.length; k++) {
                            tr1 = table1.insertRow(-1);
                            var button1 = document.createElement("input");
                            button1.type = "button";
                            button1.value = "Remove";
                            button1.onclick = function(event) {

                               if (document.getElementById("tbApDepts1").rows.length == 2 && document.getElementById("tbApDepts1").rows.length !== 0) {
                                  document.getElementById("tbApDepts1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        APOtherDepts.value = "";
                                   
                                  document.getElementById("showDataAPOtherDept3").innerHTML = "";
                                } else {
                                    document.getElementById("tbApDepts1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((APOtherDepts.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (APOtherDepts.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          APOtherDepts.value = ", "+(APOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          APOtherDepts.value = (APOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (APOtherDepts.value !== null) {

                                if (((APOtherDepts.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showDataAPOtherDept3").appendChild(table1);
                                 
                                } else {
									var rowCount = table1.rows.length;
									table1.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                var tabCell2 = tr1.insertCell(-1);
                                tabCell2.appendChild(button1);
                                var tabCell3 = tr1.insertCell(-1);
                                tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                var tabCell4 = tr1.insertCell(-1);
                                tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                document.getElementById("showDataAPOtherDept3").appendChild(table1);
                             
          
                            }
                            if (APOtherDepts.value !== null) {
                                if ((APOtherDepts.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (APOtherDepts.value !== null) {
                                        APOtherDepts.value = APOtherDepts.value + ", " + dept;
                                    } else {
                                        APOtherDepts.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                APOtherDepts.value = dept;
                                textVal = "Added Successfully";
                            }


                        } else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showDataAPOtherDept3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("tbApDepts1");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {
                              
                                if (document.getElementById("tbApDepts1").rows.length == 2 && document.getElementById("tbApDepts1").rows.length !== 0) {
                                  document.getElementById("tbApDepts1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        APOtherDepts.value = "";
                                   
                                  document.getElementById("showDataAPOtherDept3").innerHTML = "";
                                } else {
                                    document.getElementById("tbApDepts1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((APOtherDepts.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (APOtherDepts.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          APOtherDepts.value = ", "+(APOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          APOtherDepts.value = (APOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (APOtherDepts.value !== null) {

                                if (((APOtherDepts.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showDataAPOtherDept3").appendChild(table2);
                                   
          
                                    } else {
									var rowCount = table2.rows.length;
									table2.deleteRow(rowCount -1);
                                      textVal = "Selected Dept is already added";
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                cell1.appendChild(button2);
                                var cell2 = tr2.insertCell(-1);
                                cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                var cell3 = tr2.insertCell(-1);
                                cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                document.getElementById("showDataAPOtherDept3").appendChild(table2);
                             
          
                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (APOtherDepts.value !== null) {
                                if ((APOtherDepts.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (APOtherDepts.value !== null) {
                                        APOtherDepts.value = APOtherDepts.value + ", " + dept;
                                    } else {
                                        APOtherDepts.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                APOtherDepts.value = dept;
                                textVal = "Added Successfully";
                            }
                        }


                    };
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresponse[k][col[l]];
                    }

                }

            }else{
              showErrorModal("Alert!", "No matching records found");
            }
            var divContainer = document.getElementById("showDataAPOtherDept2");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            var saveButton = document.createElement("input");
            saveButton.type = "button";
            //veButton.setAttribute("class", "okBtn");
            saveButton.value = "Save";
            var divContainer2 = document.getElementById("showDataAPOtherDept2");
            divContainer2.appendChild(saveButton);
            saveButton.onclick = function(event) {

                modal.style.display = "none";

            };
            
            var footerModal = document.getElementById("modal_footer");
            //}
        }
    });

};

var divContainer = document.getElementById("showDataAPOtherDept1");

divContainer.innerHTML = "";
divContainer.appendChild(label);
divContainer.appendChild(element);
divContainer.appendChild(label2);
divContainer.appendChild(element2);
divContainer.appendChild(searchButton);

modal.style.display = "block";
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_APOtherDepts_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_APOtherDepts_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var travelAdd = this.value;
var travelRemove = TravelExpRemove.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(travelAdd == "1"){
  	button5.enabled = true;
    TravelDepts.enabled = false;
    button6.enabled = true;
    TravelOtherDepts.enabled = false;
  }else if(travelAdd === null && travelRemove === null) {
     button5.enabled = false;
     TravelDepts.enabled = false;
     TravelDepts.value = "";
     button6.enabled = false;
     TravelOtherDepts.enabled = false;
     TravelOtherDepts.value = "";
  }
 
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpAdd_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpAdd_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    TravelExpRemove.value = "";

}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var travelAdd = TravelExpAdd.value;
var travelRemove = TravelExpRemove.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(travelRemove == "1"){
  	button5.enabled = true;
    TravelDepts.enabled = false;
    button6.enabled = true;
    TravelOtherDepts.enabled = false;
  }else if(travelAdd === null && travelRemove === null) {
     button5.enabled = false;
     TravelDepts.enabled = false;
     TravelDepts.value = "";
     button6.enabled = false;
     TravelOtherDepts.enabled = false;
     TravelOtherDepts.value = "";
  }
 
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpRemove_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelExpRemove_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    TravelExpAdd.value = "";
}
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button5_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button5_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button5_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value===null || StageIndicator.value == "ToRequestor"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
debugger;
$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
 
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            action : "FS_ARF_DEPT_LOOKUP",
            divID: DivisionID.value 
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('myModalTravelDepts');
            //var span = document.getElementsByClassName("close")[0];
          	var span = document.getElementById('closeBtnTravelDepts');
            
            if (myresopnse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Dept_ID","Dept Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("TravelDeptData");
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };
                var cell1 = tr.insertCell(-1);
                cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "TravelDeptData");
                    button.id = "cbTravelDeptData";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresopnse[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showDataTravelDepts");
                //divContainer.innerHTML = "";
              if(TravelDepts.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }    else{
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
                var selectedVal = (TravelDepts.value).split(",");
                
                if(selectedVal.length > 1){
                for(b=0;b<(rButtons).length;b++){
                  for(s=0;s<selectedVal.length;s++){
                    if(myresopnse[b].DEPTID == selectedVal[s].trim()){
                      (rButtons)[b].checked = true;
                      break;
                    }
                  }
                }
                }else{
                   for(b=0;b<(rButtons).length;b++){
                     if(myresopnse[b].DEPTID == (TravelDepts.value).trim()){
                      (rButtons)[b].checked = true;
                    }
                   }
                }
                
              }          
                var footerModal = document.getElementById("modal_footer_Travel_Depts");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresopnse[n].DEPTID;
                  }else{
                   result = result+","+myresopnse[n].DEPTID;
                  }
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               TravelDepts.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("TravelDeptData");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
            };
        }
    });
}
},
error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}
});
//}
  

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelDepts_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelDepts_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button6_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button6_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button6_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button6_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
document.getElementById('showDataTravelOther2').innerHTML = "";
var modal = document.getElementById('myModalTravelOtherDept');

var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "Department Id";
element.setAttribute("type", "text");
element.setAttribute("id", "deptIdTravelOthers");
element.setAttribute("value", "");
element.setAttribute("label", "Department Id");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Department Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "deptNameTravelOthers");
element2.setAttribute("label", "Department Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");

var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";

var span = document.getElementById("closeBtnTravelOtherDepts");
span.onclick = function(event) {
    (document.getElementById('myModalTravelOtherDept')).style.display = "none";
};
searchButton.onclick = function(event) {
    //if (document.getElementById('showDataTravelOther2').innerHTML === "") {
    var depID = document.getElementById('deptIdTravelOthers').value;
    var depName = document.getElementById('deptNameTravelOthers').value;
    //var cwidVal = "806225686";
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            depID: depID,
            depName: depName,
            action: "FS_ARF_DEPT_OTHER_DIV"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {
                document.getElementById('showDataTravelOther2').innerHTML = "";
                var modal = document.getElementById('myModalTravelOtherDept');


                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Department Id", "Department Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresponse.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "button";
                    button.value = "Add";
                    button.onclick = function(event) {


                        var heading = document.createElement("P");
                        var headingText = document.createTextNode("Selected Departments");
                        heading.appendChild(headingText);
                        heading.style.color = "Black";
                        heading.style.fontSize = "smaller";
                        heading.style.textAlign = "left";


                        var dept = this.parentNode.parentNode.cells[1].innerHTML;
                        var textVal = "";

                        /* if (TravelOtherDepts.value !== null) {
                             if ((TravelOtherDepts.value).indexOf(dept) !== -1) {
                                 textVal = "Selected Dept is already added";
                             } else {
                                 if (TravelOtherDepts.value !== null) {
                                     TravelOtherDepts.value = TravelOtherDepts.value + ", " + dept;
                                 } else {
                                     TravelOtherDepts.value = dept;
                                 }
                                 textVal = "Added Successfully";
                             }
                         } else {
                             TravelOtherDepts.value = dept;
                             textVal = "Added Successfully";
                         }*/
                        var h = document.createElement("P");
                        var t = document.createTextNode(textVal);
                        h.id = "h";
                        heading.id = "heading";
                        h.appendChild(t);
                        h.style.color = "blue";
                        h.style.fontSize = "smaller";
                        h.style.textAlign = "center";


                        if (document.getElementById("tbTravelOthers1") === null) {
                            //document.getElementById("showDataTravelOther3").appendChild(h);
                            // setTimeout(function() {
                            //     document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            document.getElementById("showDataTravelOther3").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "tbTravelOthers1";
                            var tr1 = table1.insertRow(-1);
                            var headings1 = ["", "Department Id", "Department Name"];
                            for (var j = 0; j < headings1.length; j++) {
                                var th1 = document.createElement("th");
                                th1.innerHTML = headings1[j];
                                tr1.appendChild(th1);
                            }
                            //for (var k = 0; k < myresponse.length; k++) {
                            tr1 = table1.insertRow(-1);
                            var button1 = document.createElement("input");
                            button1.type = "button";
                            button1.value = "Remove";
                            button1.onclick = function(event) {

                               if (document.getElementById("tbTravelOthers1").rows.length == 2 && document.getElementById("tbTravelOthers1").rows.length !== 0) {
                                  document.getElementById("tbTravelOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        TravelOtherDepts.value = "";
                                   
                                  document.getElementById("showDataTravelOther3").innerHTML = "";
                                } else {
                                    document.getElementById("tbTravelOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((TravelOtherDepts.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (TravelOtherDepts.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          TravelOtherDepts.value = ", "+(TravelOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          TravelOtherDepts.value = (TravelOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (TravelOtherDepts.value !== null) {

                                if (((TravelOtherDepts.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showDataTravelOther3").appendChild(table1);
                                 
                                } else {
                                  	var rowCount = table1.rows.length;
									table1.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                var tabCell2 = tr1.insertCell(-1);
                                tabCell2.appendChild(button1);
                                var tabCell3 = tr1.insertCell(-1);
                                tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                var tabCell4 = tr1.insertCell(-1);
                                tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                document.getElementById("showDataTravelOther3").appendChild(table1);
                             
          
                            }
                            if (TravelOtherDepts.value !== null) {
                                if ((TravelOtherDepts.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (TravelOtherDepts.value !== null) {
                                        TravelOtherDepts.value = TravelOtherDepts.value + ", " + dept;
                                    } else {
                                        TravelOtherDepts.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                TravelOtherDepts.value = dept;
                                textVal = "Added Successfully";
                            }


                        } else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showDataTravelOther3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("tbTravelOthers1");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {
                              
                                if (document.getElementById("tbTravelOthers1").rows.length == 2 && document.getElementById("tbTravelOthers1").rows.length !== 0) {
                                  document.getElementById("tbTravelOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        TravelOtherDepts.value = "";
                                   
                                  document.getElementById("showDataTravelOther3").innerHTML = "";
                                } else {
                                    document.getElementById("tbTravelOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((TravelOtherDepts.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (TravelOtherDepts.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          TravelOtherDepts.value = ", "+(TravelOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          TravelOtherDepts.value = (TravelOtherDepts.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (TravelOtherDepts.value !== null) {

                                if (((TravelOtherDepts.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showDataTravelOther3").appendChild(table2);
                                   
          
                                    } else {
                                     var rowCount = table2.rows.length;
									table2.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                cell1.appendChild(button2);
                                var cell2 = tr2.insertCell(-1);
                                cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                var cell3 = tr2.insertCell(-1);
                                cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                document.getElementById("showDataTravelOther3").appendChild(table2);
                             
          
                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (TravelOtherDepts.value !== null) {
                                if ((TravelOtherDepts.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (TravelOtherDepts.value !== null) {
                                        TravelOtherDepts.value = TravelOtherDepts.value + ", " + dept;
                                    } else {
                                        TravelOtherDepts.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                TravelOtherDepts.value = dept;
                                textVal = "Added Successfully";
                            }
                        }


                    };
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresponse[k][col[l]];
                    }

                }

            }else{
              showErrorModal("Alert!", "No matching records found");
            }
            var divContainer = document.getElementById("showDataTravelOther2");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            var saveButton = document.createElement("input");
            saveButton.type = "button";
            //veButton.setAttribute("class", "okBtn");
            saveButton.value = "Save";
            var divContainer2 = document.getElementById("showDataTravelOther2");
            divContainer2.appendChild(saveButton);
            saveButton.onclick = function(event) {

                modal.style.display = "none";

            };
            
            var footerModal = document.getElementById("modal_footer");
            //}
        }
    });

};

var divContainer = document.getElementById("showDataTravelOther1");

divContainer.innerHTML = "";
divContainer.appendChild(label);
divContainer.appendChild(element);
divContainer.appendChild(label2);
divContainer.appendChild(element2);
divContainer.appendChild(searchButton);

modal.style.display = "block";
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelOtherDepts_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelOtherDepts_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var travelReqAdd =  this.value;
var travelReqRemove = TravelReqRemove.value;

if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(travelReqAdd == "1"){
  	button7.enabled = true;
    TravelReqDept.enabled = false;
    button8.enabled = true;
    TravelReqOtherDept.enabled = false;
  }else if(travelReqAdd === null && travelReqRemove === null) {
     button7.enabled = false;
     TravelReqDept.enabled = false;
     TravelReqDept.value = "";
     button8.enabled = false;
     TravelReqOtherDept.enabled = false;
     TravelReqOtherDept.value = "";
  }
 
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	debugger;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    TravelReqRemove.value = "";
}
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if(TravelReqAdd.value=="1"){
  MaxAuthAmt.enabled=true;
}
  if(TravelReqRemove.value=="1"){
    MaxAuthAmt.enabled=true;
  }
 else{
    MaxAuthAmt.value = "";
  }
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqAdd_valueCommit3 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (TravelReqAdd.value == "1") {
        MaxAuthAmt.mandatory = true;
    } else {
        MaxAuthAmt.mandatory = false;
    }
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var travelReqAdd =  TravelReqAdd.value;
var travelReqRemove = TravelReqRemove.value;
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
  if(travelReqRemove == "1"){
  	button7.enabled = true;
    TravelReqDept.enabled = false;
    button8.enabled = true;
    TravelReqOtherDept.enabled = false;
  }else if(travelReqAdd === null && travelReqRemove === null) {
     button7.enabled = false;
     TravelReqDept.enabled = false;
     TravelReqDept.value = "";
     button8.enabled = false;
     TravelReqOtherDept.enabled = false;
     TravelReqOtherDept.value = "";
  }
 
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqRemove_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqRemove_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
if (this.value == 1) {
    TravelReqAdd.value = "";
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqRemove_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqRemove_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(TravelReqAdd.value=="1"){
  MaxAuthAmt.enabled=true;
}
  if(TravelReqRemove.value=="1"){
    MaxAuthAmt.enabled=true;
  }
 else{
    MaxAuthAmt.value = "";
  }
}

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_MaxAuthAmt_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_MaxAuthAmt_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button7_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button7_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button7_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button7_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value===null || StageIndicator.value == "ToRequestor"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
debugger;
$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
 
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            action : "FS_ARF_DEPT_LOOKUP",
            divID: DivisionID.value 
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('myModalTravelReqDepts');
            //var span = document.getElementsByClassName("close")[0];
          	var span = document.getElementById('closeBtnTravelReqDepts');
            
            if (myresopnse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Dept_ID","Dept Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("TravelReqDeptData");
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };
                var cell1 = tr.insertCell(-1);
                cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "TravelReqDeptData");
                    button.id = "cbTravelReqDeptData";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresopnse[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showDataTravelReqDepts");
                //divContainer.innerHTML = "";
              if(TravelReqDept.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }   else{
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
                var selectedVal = (TravelReqDept.value).split(",");
                
                if(selectedVal.length > 1){
                for(b=0;b<(rButtons).length;b++){
                  for(s=0;s<selectedVal.length;s++){
                    if(myresopnse[b].DEPTID == selectedVal[s].trim()){
                      (rButtons)[b].checked = true;
                      break;
                    }
                  }
                }
                }else{
                   for(b=0;b<(rButtons).length;b++){
                     if(myresopnse[b].DEPTID == (TravelReqDept.value).trim()){
                      (rButtons)[b].checked = true;
                    }
                   }
                }
                
              }            
                var footerModal = document.getElementById("modal_footer_Travel_Req_Depts");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresopnse[n].DEPTID;
                  }else{
                   result = result+","+myresopnse[n].DEPTID;
                  }
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               TravelReqDept.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("TravelReqDeptData");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
            };
        }
    });
}
},
error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}
});
//}
  

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqDept_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqDept_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqDept_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqDept_click0 = function (scope) {
    with(this) {
        with(scope) {
            document.getElementById('showData5').innerHTML = "";
var modal = document.getElementById('myModal2');
debugger;
var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "First Name";
element.setAttribute("type", "text");
element.setAttribute("id", "fName");
element.setAttribute("value", "");
element.setAttribute("label", "First Name");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Last Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "lName");
element2.setAttribute("label", "Last Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");
var element3 = document.createElement("input");
var label3 = document.createElement("Label");
label3.innerHTML = "Employee ID";
element3.setAttribute("type", "text");
element3.setAttribute("value", "");
element3.setAttribute("id", "empId");
element3.setAttribute("label", "Employee ID");
element3.setAttribute("style", "width:200px");
label3.setAttribute("style", "font-weight:normal");
var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";
                    var span = document.getElementById("closeBtn");
 					span.onclick = function() {
                        modal.style.display = "none";
                    };
searchButton.onclick = function(event) {
    //if (document.getElementById('showData2').innerHTML === "") {
        var lName = document.getElementById('lName').value;
        var fName = document.getElementById('fName').value;
        var empId = document.getElementById('empId').value;
  		var div = DivisionID.value;
        //var cwidVal = "806225686";
        $.ajax({
            type: 'GET',
            url: "/bin/getFinancialARFData",
            data: {
                divID: div,
                lastName: lName,
                firstName: fName,
                empId: empId,
                divType:"In",
                action: "FS_ARF_REQ_DIV"
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length > 0) {
                    document.getElementById('showData5').innerHTML = "";
                    var modal = document.getElementById('myModal2');
                 
                    var col = [];
                    col.push("Name");
                    col.push("EmplID");
                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "Name", "Employee ID"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);
                        var button = document.createElement("input");
                        button.type = "button";
                        button.value = "Add";
                        button.onclick = function(event) {
                            
                            document.getElementById("showData6").innerHTML = "";
                            var dept = this.parentNode.parentNode.cells[1].innerHTML;
                            var textVal = "";
                            if (ReqApproverDivision.value !== null) {
                                if ((ReqApproverDivision.value).indexOf(dept) !== -1) {
                                    textVal = "Selected User is already added";
                                } else {
                                    if (ReqApproverDivision.value !== null) {
                                        ReqApproverDivision.value = ReqApproverDivision.value + ", " + dept;
                                    } else {
                                        ReqApproverDivision.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                ReqApproverDivision.value = dept;
                                textVal = "Added Successfully";
                            }
                            var h = document.createElement("P");
                            var t = document.createTextNode(textVal);
                            h.id = "h";
                            h.appendChild(t);
                            h.style.color = "blue";
                            h.style.fontSize = "smaller";
                            h.style.textAlign = "center";
                            document.getElementById("showData6").appendChild(h);
                            debugger;
                            setTimeout(function() {
                                document.getElementById("showData6").innerHTML = "";
                            }, 1000);

                        };
                        var tabCell1 = tr.insertCell(-1);
                        tabCell1.appendChild(button);
                        for (var l = 0; l < col.length; l++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = myresponse[k][col[l]];
                        }
                    }
                    var divContainer = document.getElementById("showData5");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    var saveButton = document.createElement("input");
                    saveButton.type = "button";
                    //veButton.setAttribute("class", "okBtn");
                    saveButton.value = "Save";
                    var divContainer2 = document.getElementById("showData5");
                    divContainer2.appendChild(saveButton);
                    saveButton.onclick = function(event) {
                        
                        modal.style.display = "none";

                    };
                    var footerModal = document.getElementById("modal_footer");
                 
                }
            }
        });
    /*} else {
        debugger;
        var cwidVal = document.getElementById('deptId').value;
        var col = [];
        col.push("EMPLID");
        col.push("DEPTID");
        col.push("DEPTNAME");
        $.ajax({
            type: 'GET',
            url: "/bin/getFERPData",
            data: {
                cwid: cwidVal,
                action: "FERP_CWID_DATA"
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length == 1) {
                    var table = document.getElementById("tb");
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);
                        var button = document.createElement("input");
                        button.type = "button";
                        button.value = "Add";
                        button.onclick = function(event) {
                            alert("Adding");
                            document.getElementById("showData3").innerHTML = "";
                            var dept = this.parentNode.parentNode.cells[2].innerHTML;
                            var textVal = "";
                            if (OtherDivisonDept.value !== null) {
                                if ((OtherDivisonDept.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (OtherDivisonDept.value !== null) {
                                        OtherDivisonDept.value = OtherDivisonDept.value + ", " + dept;
                                    } else {
                                        OtherDivisonDept.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                OtherDivisonDept.value = dept;
                                textVal = "Added Successfully";
                            }
                            var h1 = document.createElement("P");
                            var t1 = document.createTextNode(textVal);
                            h1.id = "h";
                            h1.appendChild(t1);
                            h1.style.color = "blue";
                            h1.style.fontSize = "smaller";
                            h1.style.textAlign = "center";
                            document.getElementById("showData3").appendChild(h1);
                            debugger;
                            setTimeout(function() {
                                document.getElementById("showData3").innerHTML = "";
                            }, 1000);

                        };
                        var tabCell1 = tr.insertCell(-1);
                        tabCell1.appendChild(button);
                        for (var l = 0; l < col.length; l++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = myresponse[k][col[l]];
                        }
                    }
                }

            }
        });
    }*/
};
var divContainer = document.getElementById("showData4");

divContainer.innerHTML = "";
divContainer.appendChild(label);
divContainer.appendChild(element);
var linebreak1 = document.createElement("br");
divContainer.appendChild(linebreak1);
divContainer.appendChild(label2);
divContainer.appendChild(element2);
var linebreak2 = document.createElement("br");
divContainer.appendChild(linebreak2);
divContainer.appendChild(label3);
divContainer.appendChild(element3);
var linebreak3 = document.createElement("br");
divContainer.appendChild(linebreak3);
divContainer.appendChild(searchButton);
modal.style.display = "block";
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button8_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button8_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_button8_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_button8_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
document.getElementById('showDataTravelReqOther2').innerHTML = "";
var modal = document.getElementById('myModalTravelReqOtherDept');

var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "Department Id";
element.setAttribute("type", "text");
element.setAttribute("id", "deptIdTravelReqOthers");
element.setAttribute("value", "");
element.setAttribute("label", "Department Id");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Department Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "deptNameTravelReqOthers");
element2.setAttribute("label", "Department Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");

var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";

var span = document.getElementById("closeBtnTravelReqOtherDept");
span.onclick = function(event) {
    (document.getElementById('myModalTravelReqOtherDept')).style.display = "none";
};
searchButton.onclick = function(event) {
    //if (document.getElementById('showDataTravelReqOther2').innerHTML === "") {
    var depID = document.getElementById('deptIdTravelReqOthers').value;
    var depName = document.getElementById('deptNameTravelReqOthers').value;
    //var cwidVal = "806225686";
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            depID: depID,
            depName: depName,
            action: "FS_ARF_DEPT_OTHER_DIV"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {
                document.getElementById('showDataTravelReqOther2').innerHTML = "";
                var modal = document.getElementById('myModalTravelReqOtherDept');


                var col = [];
                col.push("DEPTID");
                col.push("DEPTNAME");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Department Id", "Department Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresponse.length; k++) {
                    tr = table.insertRow(-1);
                    var button = document.createElement("input");
                    button.type = "button";
                    button.value = "Add";
                    button.onclick = function(event) {


                        var heading = document.createElement("P");
                        var headingText = document.createTextNode("Selected Departments");
                        heading.appendChild(headingText);
                        heading.style.color = "Black";
                        heading.style.fontSize = "smaller";
                        heading.style.textAlign = "left";


                        var dept = this.parentNode.parentNode.cells[1].innerHTML;
                        var textVal = "";

                        /* if (TravelReqOtherDept.value !== null) {
                             if ((TravelReqOtherDept.value).indexOf(dept) !== -1) {
                                 textVal = "Selected Dept is already added";
                             } else {
                                 if (TravelReqOtherDept.value !== null) {
                                     TravelReqOtherDept.value = TravelReqOtherDept.value + ", " + dept;
                                 } else {
                                     TravelReqOtherDept.value = dept;
                                 }
                                 textVal = "Added Successfully";
                             }
                         } else {
                             TravelReqOtherDept.value = dept;
                             textVal = "Added Successfully";
                         }*/
                        var h = document.createElement("P");
                        var t = document.createTextNode(textVal);
                        h.id = "h";
                        heading.id = "heading";
                        h.appendChild(t);
                        h.style.color = "blue";
                        h.style.fontSize = "smaller";
                        h.style.textAlign = "center";


                        if (document.getElementById("tbTravelReqOthers1") === null) {
                            //document.getElementById("showDataTravelReqOther3").appendChild(h);
                            // setTimeout(function() {
                            //     document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            document.getElementById("showDataTravelReqOther3").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "tbTravelReqOthers1";
                            var tr1 = table1.insertRow(-1);
                            var headings1 = ["", "Department Id", "Department Name"];
                            for (var j = 0; j < headings1.length; j++) {
                                var th1 = document.createElement("th");
                                th1.innerHTML = headings1[j];
                                tr1.appendChild(th1);
                            }
                            //for (var k = 0; k < myresponse.length; k++) {
                            tr1 = table1.insertRow(-1);
                            var button1 = document.createElement("input");
                            button1.type = "button";
                            button1.value = "Remove";
                            button1.onclick = function(event) {

                               if (document.getElementById("tbTravelReqOthers1").rows.length == 2 && document.getElementById("tbTravelReqOthers1").rows.length !== 0) {
                                  document.getElementById("tbTravelReqOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        TravelReqOtherDept.value = "";
                                   
                                  document.getElementById("showDataTravelReqOther3").innerHTML = "";
                                } else {
                                    document.getElementById("tbTravelReqOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((TravelReqOtherDept.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (TravelReqOtherDept.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          TravelReqOtherDept.value = ", "+(TravelReqOtherDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          TravelReqOtherDept.value = (TravelReqOtherDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (TravelReqOtherDept.value !== null) {

                                if (((TravelReqOtherDept.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showDataTravelReqOther3").appendChild(table1);
                                 
                                } else {
                                    var rowCount = table1.rows.length;
									table1.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                var tabCell2 = tr1.insertCell(-1);
                                tabCell2.appendChild(button1);
                                var tabCell3 = tr1.insertCell(-1);
                                tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                var tabCell4 = tr1.insertCell(-1);
                                tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                document.getElementById("showDataTravelReqOther3").appendChild(table1);
                             
          
                            }
                            if (TravelReqOtherDept.value !== null) {
                                if ((TravelReqOtherDept.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (TravelReqOtherDept.value !== null) {
                                        TravelReqOtherDept.value = TravelReqOtherDept.value + ", " + dept;
                                    } else {
                                        TravelReqOtherDept.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                TravelReqOtherDept.value = dept;
                                textVal = "Added Successfully";
                            }


                        } else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showDataTravelReqOther3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("tbTravelReqOthers1");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {
                              
                                if (document.getElementById("tbTravelReqOthers1").rows.length == 2 && document.getElementById("tbTravelReqOthers1").rows.length !== 0) {
                                  document.getElementById("tbTravelReqOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        TravelReqOtherDept.value = "";
                                   
                                  document.getElementById("showDataTravelReqOther3").innerHTML = "";
                                } else {
                                    document.getElementById("tbTravelReqOthers1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((TravelReqOtherDept.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (TravelReqOtherDept.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          TravelReqOtherDept.value = ", "+(TravelReqOtherDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          TravelReqOtherDept.value = (TravelReqOtherDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (TravelReqOtherDept.value !== null) {

                                if (((TravelReqOtherDept.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showDataTravelReqOther3").appendChild(table2);
                                   
          
                                    } else {
                                     var rowCount = table2.rows.length;
									table2.deleteRow(rowCount -1);
                                    showErrorModal("Alert!", "Selected departments is already added");
                                }
                            } else {
                                cell1.appendChild(button2);
                                var cell2 = tr2.insertCell(-1);
                                cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                var cell3 = tr2.insertCell(-1);
                                cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                document.getElementById("showDataTravelReqOther3").appendChild(table2);
                             
          
                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (TravelReqOtherDept.value !== null) {
                                if ((TravelReqOtherDept.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (TravelReqOtherDept.value !== null) {
                                        TravelReqOtherDept.value = TravelReqOtherDept.value + ", " + dept;
                                    } else {
                                        TravelReqOtherDept.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                TravelReqOtherDept.value = dept;
                                textVal = "Added Successfully";
                            }
                        }


                    };
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresponse[k][col[l]];
                    }

                }

            }else{
              showErrorModal("Alert!", "No matching records found");
            }
            var divContainer = document.getElementById("showDataTravelReqOther2");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            var saveButton = document.createElement("input");
            saveButton.type = "button";
            //veButton.setAttribute("class", "okBtn");
            saveButton.value = "Save";
            var divContainer2 = document.getElementById("showDataTravelReqOther2");
            divContainer2.appendChild(saveButton);
            saveButton.onclick = function(event) {

                modal.style.display = "none";

            };
            
            var footerModal = document.getElementById("modal_footer");
            //}
        }
    });

};

var divContainer = document.getElementById("showDataTravelReqOther1");

divContainer.innerHTML = "";
divContainer.appendChild(label);
divContainer.appendChild(element);
divContainer.appendChild(label2);
divContainer.appendChild(element2);
divContainer.appendChild(searchButton);

modal.style.display = "block";
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqOtherDept_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelReqOtherDept_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled = false;

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelCommentsOnly_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelCommentsOnly_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if (TravelReqAdd.value === null || TravelReqRemove.value=== null || TravelExpAdd.value === null || TravelExpRemove.value === null || APAdd.value === null || APRemove.value === null || BudgetTransferAdd.value === null || BudgetTransferRemove.value === null ) {
    TravelCommentsOnly.enabled = true;
}
if((StageIndicator.value===null) || (StageIndicator.value == "ToRequestor") || (StageIndicator.value == "ToFSBusinessAnalyst")){
if(this.value === null){
  TravelDiv.enabled = false;
  TravelSubDiv.enabled = false;
}else{
   TravelDiv.enabled = true;
  TravelSubDiv.enabled = true;
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelCommentsOnly_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelCommentsOnly_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if((StageIndicator.value===null) || (StageIndicator.value == "ToRequestor") || (StageIndicator.value == "ToFSBusinessAnalyst")){
  if(TravelCommentsOnly.value==1){
    TravelComments.enabled = true;
    TravelReqAdd.enabled = false;
    TravelReqRemove.enabled = false;
    TravelExpAdd.enabled = false;
    TravelExpRemove.enabled = false;
    APAdd.enabled = false;
    APRemove.enabled = false;
    BudgetTransferAdd.enabled = false;
    BudgetTransferRemove.enabled = false;
    TravelDiv.enabled = true;
    TravelSubDiv.enabled = true;
     TravelReqAdd.value = "";
     TravelReqRemove.value = "";
    TravelExpAdd.value = "";
    TravelExpRemove.value="" ;
    APAdd.value = "";
    APRemove.value = ""; 
    BudgetTransferAdd.value ="";
    BudgetTransferRemove.value ="";
  }
  if(TravelCommentsOnly.value === null){
TravelComments.enabled =false;
    TravelReqAdd.enabled = true;
    TravelReqRemove.enabled = true;
    TravelExpAdd.enabled = true;
    TravelExpRemove.enabled = true;
    APAdd.enabled = true;
    APRemove.enabled = true;
    BudgetTransferAdd.enabled = true;
    BudgetTransferRemove.enabled = true;
     TravelDiv.enabled = false;
    TravelSubDiv.enabled = false;
    TravelDiv.value = "";
    TravelSubDiv.value = "";
 
  }
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToFSBusinessAnalyst"){
      if(TravelCommentsOnly.value == 1){
        this.enabled= true;
      }else{
        this.enabled= false;
      }
    }

        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_Comments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_Comments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_ExpiryMessage_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_ExpiryMessage_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer" || StageIndicator.value === "ToSecurityAdminFromManager"){
if (this.value == "1") {
   
        if (SecurityAdminName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    SecurityAdminName.value = userValue;
                    SecurityAdminDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    SecurityAdminName.value = "";
    SecurityAdminDate.value = "";
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_SecurityAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value=== "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer" || StageIndicator.value == "ToSecurityAdminFromManager"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDOABudgetOffice"){
if (this.value == "1") {
   
        if (BudgetOfficeName.value === null) {
            BudgetOfficeDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    BudgetOfficeName.value = userValue;
                    BudgetOfficeDate.value = myresopnse[0].SERVER_DATE;
                  	
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    BudgetOfficeName.value = "";
    BudgetOfficeDate.value = "";
  
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_BudgetOfficeComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDOABudgetOffice"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FinServiceCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FinServiceCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFSBusinessAnalyst" || StageIndicator.value == "ToBusinessAnalystInactiveRoute"){
if (this.value == "1") {
   
        if (FinancialServicesName.value === null) {
            FinancialServicesDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FinancialServicesName.value = userValue;
                    FinancialServicesDate.value = myresopnse[0].SERVER_DATE;
                  	
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    FinancialServicesName.value = "";
    FinancialServicesDate.value = "";
  
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FinancialServicesName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FinancialServicesName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FinancialServicesDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FinancialServicesDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FSComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FSComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFSBusinessAnalyst"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEmployee"){
if (this.value == "1") {
   
        if (EmployeeName.value === null) {
            EmployeeDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    EmployeeName.value = userValue;
                    EmployeeDate.value = myresopnse[0].SERVER_DATE;
                  	
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    EmployeeName.value = "";
    EmployeeDate.value = "";
  
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_EmployeeComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEmployee"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager"){
if (this.value == "1") {
   
        if (AdminName.value === null) {
            AdminDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    AdminName.value = userValue;
                    AdminDate.value = myresopnse[0].SERVER_DATE;
                  	
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    AdminName.value = "";
    AdminDate.value = "";
  
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_AdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFiscalManager"){
if (this.value == "1") {
   
        if (FiscalMangName.value === null) {
            FiscalMangDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FiscalMangName.value = userValue;
                    FiscalMangDate.value = myresopnse[0].SERVER_DATE;
                  	
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    FiscalMangName.value = "";
    FiscalMangDate.value = "";
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalMangName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalMangName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalMangDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalMangDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalManagerDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalManagerDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value == "ToFiscalManager"){
  if(FiscalManagerDecision.value == "1"){
    FiscalManagerCB.mandatory = true;
    FiscalMangName.mandatory = true;
    FiscalMangDate.mandatory = true;
  }
  if(FiscalManagerDecision.value == "2"){
    FiscalManagerCB.mandatory = false;
    FiscalMangName.mandatory = false;
    FiscalMangDate.mandatory = false;
  }
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalManagerComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_FiscalManagerComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFiscalManager"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
if (this.value == "1") {
   
        if (InitiatorName.value === null) {
            InitiatorDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    InitiatorName.value = userValue;
                    InitiatorDate.value = myresopnse[0].SERVER_DATE;
                  	
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    InitiatorName.value = "";
    InitiatorDate.value = "";
}
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_InitiatorComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if (CWID.value !== null ) {
    getPdf(); 
 } else{
   
   showErrorModal("Alert!","Please enter CWID");   
    
 }



  

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/finance-doa-access-request-form/finance-doa-access-request-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FirstName.value+"_"+LastName.value + "(" + CWID.value + ")" + "_" + Date.now());                    
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
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_reset1600234675625_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_reset1600234675625_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_saveguidedraft1600234692666_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_saveguidedraft1600234692666_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value+", Form ID : "+ CaseID.value;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*EmployeeEmail.value="yjayaram@fullerton.edu";
ManagerEmail.value="yjayaram@fullerton.edu";
CampusEmail.value = "yjayaram@fullerton.edu";
RequestorEmail.value = "yjayaram@fullerton.edu";
FiscalManagerEmail.value= "yjayaram@fullerton.edu";*/

EmployeeEmail.value="shreyas.manjunatha@thoughtfocus.com";
ManagerEmail.value="shreyas.manjunatha@thoughtfocus.com";
CampusEmail.value = "shreyas.manjunatha@thoughtfocus.com";
RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
FiscalManagerEmail.value= "shreyas.manjunatha@thoughtfocus.com";



if(InitiatorComments.value !== null){
Comments.value = "Initiator's Comments : "+ InitiatorComments.value;
}else{
Comments.value = "Initiator's Comments : ";
}

if(StageIndicator.value === null || StageIndicator.value=="ToManager" || StageIndicator.value == "ToSecurityAdminFromManager"){
if(AccountActionRequest.value == 3){
  DelegationRolesApproversPanel.mandatory = false;
}else{
   DelegationRolesApproversPanel.mandatory = true;
}
}
var valFlag = true;

var managerUserIDVal = ManagerUserID.value; 
////var managerEmailIDVal = ManagerEmail.value;
var managerNameVal = ManagerName.value;

if(managerUserIDVal !== null && managerNameVal !== null && managerUserIDVal !== "" && managerNameVal !== ""){
  if(managerUserIDVal.toLowerCase().includes("admin") && managerNameVal.toLowerCase().includes("admin")){
    valFlag = false; 
    showErrorModal("Alert!", "Supervisor's information not found. Please contact help desk.");
  } 
} else{
  valFlag = false; 
    showErrorModal("Alert!", "Supervisor's information not found. Please contact help desk.");
}

if((DOAEffDate.value !== null) && (DOATempEndDate.value !== null)){
  if(DOAEffDate.value>DOATempEndDate.value){
    showErrorModal("Alert!", "Invalid date range between delegation roles effective date & end date");
    valFlag = false; 
  }
}

if((EmploymentType.value !== null) && (TempEndDate.value !== null) && (doaPermanent.value !== null) && (DOATempEndDate.value !== null) && (EmploymentType.value == "2") && (doaPermanent.value == "2")){
  if(DOATempEndDate.value>TempEndDate.value){
    showErrorModal("Alert!", "Delegation roles end date can't be greater than Employee position end date");
    valFlag = false; 
  }
}

if((BudgetTransferAdd.value !== null || BudgetTransferRemove.value !==null) && (BudgetTransferDepts.value===null && BudgetTransferOtherDepts === null) && valFlag === true){
   showErrorModal("Alert!", "Please select the Department");
    valFlag = false;
   }

if((APAdd.value !== null || APRemove.value !==null) && (APDepts.value===null && APOtherDepts.value === null) && valFlag === true){
   showErrorModal("Alert!", "Please select the Department");
   valFlag = false;
   }

if((TravelReqAdd.value !== null || TravelReqRemove.value !==null) && (TravelReqDept.value===null && TravelReqOtherDept.value === null) && valFlag === true){
   showErrorModal("Alert!", "Please select the Department");
   valFlag = false;
   }

if((TravelExpAdd.value !== null || TravelExpRemove.value !==null) && (TravelDepts.value===null && TravelOtherDepts.value === null) && valFlag === true){
   showErrorModal("Alert!", "Please select the Department");
   valFlag = false;
}

if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value +", Form ID : "+ CaseID.value;
 EmailSubject.value = "Test - DOA Finance Access Request Form ["+ CaseID.value+"] for Your Review and Approval";
   FinalEmailSubject.value = "Test - Congratulations, Access Granted to DOA System";
  ISORejectSubject.value = "Test - DOA Finance Access Request Form ["+ CaseID.value+"] Rejected by Information Security Officer";
  RejectEmailSubject.value = "Test - DOA Finance Access Request Form ["+ CaseID.value+"] Rejected by Manager";
}

var budOffice = "";
var FSOffice = "";


if(BudgetTransferAdd.value !== null || BudgetTransferRemove.value !== null){
  budOffice = "1";
}

if(APAdd.value !== null || APRemove.value !== null || TravelExpAdd.value !== null || TravelExpRemove.value !== null || TravelReqAdd.value !== null || TravelReqRemove.value !== null){
  FSOffice = "1";
}

if(budOffice == "1"){
   DOARoles.value = "1";
   FSRoles.value = "";
}  
 if(FSOffice == "1"){ 
  DOARoles.value = "";
  FSRoles.value ="1";
} if (FSOffice == "1" && budOffice == "1"){
  FSRoles.value ="1";
  DOARoles.value = "1";
}

if(BudgetTransferAdd.value === null && BudgetTransferRemove.value === null && APAdd.value === null && APRemove.value === null && TravelExpAdd.value === null && TravelExpRemove.value === null && TravelReqAdd.value === null && TravelReqRemove.value === null && valFlag===true && TravelCommentsOnly.value != "1"){
  if(AccountActionRequest.value==3){
    DelegationRolesApproversPanel.mandatory=false;
  }
  else{
 
 showErrorModal("Alert!","Please check Delegation Roles/Approvers");
  valFlag=false;
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].DelegationRolesApproversPanel[0]");
}
}
if(valFlag===true){
guideBridge.submit();
}


        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_submit1600234699256_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_submit1600234699256_click1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value=="ToManager" || StageIndicator.value == "ToSecurityAdminFromManager"){
if(AccountActionRequest.value == 3){
  DelegationRolesApproversPanel.mandatory = false;
}else{
   DelegationRolesApproversPanel.mandatory = true;
}
}
        }
	}
}
