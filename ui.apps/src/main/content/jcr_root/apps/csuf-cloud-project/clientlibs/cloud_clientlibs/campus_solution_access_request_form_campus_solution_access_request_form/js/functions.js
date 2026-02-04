/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete", function(event, payload) {
	if (StageIndicator.value == "ToManager" && AccessCB.value == 1) {
		if (AdminComments.value !== null && (Comments.value).lastIndexOf(AdminComments.value) == -1) {
			// if((Comments.value).lastIndexOf(AdminComments.value) == -1){  
			Comments.value = Comments.value + "\n" + "Administrator's Comments :" + AdminComments.value;
		}
		if (AdminComments.value === null && (Comments.value).lastIndexOf("Administrator's Comments :") == -1) {
			// if((Comments.value).lastIndexOf(AdminComments.value) == -1){  
			Comments.value = Comments.value + "\n" + "Administrator's Comments :";
		}
	}
	debugger;
	if (StageIndicator.value == "ToEmployee" && EmployeeCB.value == 1) {
		if (EmployeeComments.value !== null && (Comments.value).lastIndexOf(EmployeeComments.value) == -1) {
			// if((Comments.value).lastIndexOf(EmployeeComments.value) == -1){  
			Comments.value = Comments.value + "\n" + "Employee's Comments :" + EmployeeComments.value;
		}
		if (EmployeeComments.value === null && (Comments.value).lastIndexOf("Employee's Comments :") == -1) {
			// if((Comments.value).lastIndexOf(EmployeeComments.value) == -1){  
			Comments.value = Comments.value + "\n" + "Employee's Comments :";
		}
	}
	if (StageIndicator.value == "ToTrainer" && TrainerCB.value == 1) {
		if (TrainerComments.value !== null && (Comments.value).lastIndexOf(TrainerComments.value) == -1) {
			// if((Comments.value).lastIndexOf(TrainerComments.value) == -1){  
			Comments.value = Comments.value + "\n" + "Trainer's Comments :" + TrainerComments.value;
		}
		if (TrainerComments.value === null && (Comments.value).lastIndexOf("Trainer's Comments :") == -1) {
			//if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Trainer's Comments :" + TrainerComments.value;
		}
	}

	if (StageIndicator.value == "ToDynamicRole" && BusinessAnalystCB.value == 1) {
		if (BAComments.value !== null && (Comments.value).lastIndexOf(BAComments.value) == -1) {
			// if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Business Analyst's Comments :" + BAComments.value;
		}
		if (BAComments.value === null && (Comments.value).lastIndexOf("Business Analyst's Comments :") == -1) {
			// if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Business Analyst's Comments :";
		}
	}
	if ((StageIndicator.value == "ToRequestor" ) && InitiatorCB.value == 1) {
		if (InitiatorComments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1) {
			//if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Initiator's Comments :" + InitiatorComments.value;
		}
		if (InitiatorComments.value === null && (Comments.value).lastIndexOf("Initiator's Comments :") == -1) {
			//if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Initiator's Comments :";
		}
	}

	if (StageIndicator.value == "ToISO" && ISOAdminCB.value == 1) {
		if (ISOAdminComments.value !== null && (Comments.value).lastIndexOf(ISOAdminComments.value) == -1) {
			Comments.value = Comments.value + "\n" + "ISO Admin's Comments :" + ISOAdminComments.value;
		}
		if (ISOAdminComments.value === null && (Comments.value).lastIndexOf("ISO Admin's Comments :") == -1) {
			Comments.value = Comments.value + "\n" + "ISO Admin's Comments :";
		}
	}
	if (StageIndicator.value == "ToCISO" && CISOCB.value == 1) {
		if (CISOAdminComments.value !== null && (Comments.value).lastIndexOf(CISOAdminComments.value) == -1) {
			// if((Comments.value).lastIndexOf(CISOComments.value) == -1){
			Comments.value = Comments.value + "\n" + "CISO Admin's Comments :" + CISOAdminComments.value;
		}
		if (CISOAdminComments.value === null && (Comments.value).lastIndexOf("CISO Admin's Comments :") == -1) {
			Comments.value = Comments.value + "\n" + "CISO Admin's Comments :";
		}
	}
	if ((StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer") && SecurityAdminCB.value == 1) {
		if (SecurityAdminComments.value !== null && (Comments.value).lastIndexOf(SecurityAdminComments.value) == -1) {
			//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Security Admin's Comments :" + SecurityAdminComments.value;
		}
		if (SecurityAdminComments.value === null && (Comments.value).lastIndexOf("Security Admin's Comments :") == -1) {
			//if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
			Comments.value = Comments.value + "\n" + "Security Admin's Comments :";
		}
	}
});
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var title = "";
if (StageIndicator.value === null) {

    employeeInformation.enabled = true;
DepartmentsPanel.enabled = true;
  //af.max(panel.instanceManager.instances, field.name).value=false;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;

    EmployeeSignaturePanel.visible = false;
    AdminSignPanel.visible = false;
    InitiatorPanel.visible = true;
    BusinessAnalystPanel.visible = false;    
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    TrainerSignPanel.visible = false;
} debugger;
if (StageIndicator.value == "ToManager") {
  debugger;
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = true;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;
  
  if(EmployeeCB.value==1){
        EmployeeSignaturePanel.visible = true;
        EmployeeSignaturePanel.enabled= false;
  }else{
    EmployeeSignaturePanel.visible = false;
  }
  if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    } 
  if(TrainerCB.value == "1"){
    TrainerSignPanel.visible = true;
    TrainerSignPanel.enabled = false;
  }
  else{
    TrainerSignPanel.visible = false;
  }
    AdminSignPanel.visible = true;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;    
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
}
if (StageIndicator.value == "ToRequestor") {
  debugger;
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = true;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;
  
    
  if(EmployeeCB.value=="1"){
    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
  }else{
    EmployeeSignaturePanel.visible = false;
  }
   if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    } 
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
    TrainerSignPanel.visible = false;
    ISOAdminPanel.visible = false;
   if(SecurityAdminCB.value=="1"){
      SecurityAdminPanel.visible = true;
     SecurityAdminPanel.enabled = false;
   }else{
      SecurityAdminPanel.visible = false;
   }
    CISOAdminSignaturePanel.visible = false;
}
if (StageIndicator.value == "ToEmployee") {
  debugger;
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = false;
AdmissionOfficePanel.enabled = false;
RecordsOfficePanel.enabled = false;
SchedulingOfficePanel.enabled = false;
FinancialAidPanel.enabled = false;
StudentFinancialsPanel.enabled = false;
ExtendedEDPanel.enabled = false;
InternationalProgramsPanel.enabled = false;
  
    EmployeeSignaturePanel.visible = true;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled=false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = false;    
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    TrainerSignPanel.visible = false;
}

if (StageIndicator.value === "ToTrainer") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = false;
AdmissionOfficePanel.enabled = false;
RecordsOfficePanel.enabled = false;
SchedulingOfficePanel.enabled = false;
FinancialAidPanel.enabled = false;
StudentFinancialsPanel.enabled = false;
ExtendedEDPanel.enabled = false;
InternationalProgramsPanel.enabled = false;
     employeeInformation.visible = true;
  employeeInformation.enable = false;
     Signatures.visible = true;

    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
   
    TrainerSignPanel.visible = true;
    TrainerSignPanel.enabled = true;
  
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
 if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    } 
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}
if (StageIndicator.value === "ToDynamicRole") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = true;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;
  
   // EmployeeSignaturePanel.visible = true;
  //  EmployeeSignaturePanel.enabled = false;
    if(EmployeeCB.value == "1"){
      EmployeeSignaturePanel.visible = true;
      EmployeeSignaturePanel.enabled = false;
    }else{
      EmployeeSignaturePanel.visible = false;
      EmployeeSignaturePanel.enabled = false;
    }
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;  
    TrainerSignPanel.visible = false;
    
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
  
}
debugger;
if (StageIndicator.value === "ToBusinessAnalyst") {

    employeeInformation.visible = true;
    employeeInformation.enabled = false;
    Signatures.visible = true;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
    

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;

    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled = true;
    TrainerSignPanel.visible = false;

    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}

if (StageIndicator.value === "ToSecurityAdminFromTrainer") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = true;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;
  
    //EmployeeSignaturePanel.visible = true;
   // EmployeeSignaturePanel.enabled = false;
    if(EmployeeCB.value == "1"){
      EmployeeSignaturePanel.visible = true;
      EmployeeSignaturePanel.enabled = false;
    }else{
      EmployeeSignaturePanel.visible = false;
      EmployeeSignaturePanel.enabled = false;
    }
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled=false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = true;
    CISOAdminSignaturePanel.visible = false;
    //TrainerSignPanel.visible = true;
   // TrainerSignPanel.enabled = false;
  if(TrainerCB.value == "1"){
      TrainerSignPanel.visible = true;
      TrainerSignPanel.enabled = false;
    }else{
      TrainerSignPanel.visible = false;
      TrainerSignPanel.enabled = false;
    }
}

if (StageIndicator.value === "ToISO") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = false;
AdmissionOfficePanel.enabled = false;
RecordsOfficePanel.enabled = false;
SchedulingOfficePanel.enabled = false;
FinancialAidPanel.enabled = false;
StudentFinancialsPanel.enabled = false;
ExtendedEDPanel.enabled = false;
InternationalProgramsPanel.enabled = false;
  
    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled=false;
    ISOAdminPanel.visible = true;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = false;
    CISOAdminSignaturePanel.visible = false;
    TrainerSignPanel.visible = true;
    TrainerSignPanel.enabled = false;
  
}

if (StageIndicator.value === "ToCISO") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = false;
AdmissionOfficePanel.enabled = false;
RecordsOfficePanel.enabled = false;
SchedulingOfficePanel.enabled = false;
FinancialAidPanel.enabled = false;
StudentFinancialsPanel.enabled = false;
ExtendedEDPanel.enabled = false;
InternationalProgramsPanel.enabled = false;
  
    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled=false;
    ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = false;
    CISOAdminSignaturePanel.visible = true;
    TrainerSignPanel.enabled = false;
  
}

if (StageIndicator.value === "ToSecurityAdminFromISO") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = true;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;
  
    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled=false;
   if(ISOAdminCB.value=="1"){
      ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
   }else{
       ISOAdminPanel.visible = false;
   }
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = true;
    CISOAdminSignaturePanel.visible = false;
    TrainerSignPanel.visible = true;
    TrainerSignPanel.enabled = false;
  
}

if (StageIndicator.value === "ToSecurityAdminFromCISO") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = true;
AdmissionOfficePanel.enabled = true;
RecordsOfficePanel.enabled = true;
SchedulingOfficePanel.enabled = true;
FinancialAidPanel.enabled = true;
StudentFinancialsPanel.enabled = true;
ExtendedEDPanel.enabled = true;
InternationalProgramsPanel.enabled = true;
  
    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled=false;
    ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = true;
    CISOAdminSignaturePanel.visible = true;
    CISOAdminSignaturePanel.enabled = false;
    TrainerSignPanel.visible = true;
    TrainerSignPanel.enabled = false;
  
}
if (StageIndicator.value === "ToCompleteQueue") {
  employeeInformation.enabled = false;
DepartmentsPanel.enabled = false;
AdmissionOfficePanel.enabled = false;
RecordsOfficePanel.enabled = false;
SchedulingOfficePanel.enabled = false;
FinancialAidPanel.enabled = false;
StudentFinancialsPanel.enabled = false;
ExtendedEDPanel.enabled = false;
InternationalProgramsPanel.enabled = false;
  
    EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled = false;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled=false;
    ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = false;
    TrainerSignPanel.enabled = false;
  if(CISOCB.value==1){
        CISOAdminSignaturePanel.visible = true;
     CISOAdminSignaturePanel.enabled = false;

  }
  else{
        CISOAdminSignaturePanel.visible = false;
  }
}

if(StageIndicator.value == "ToSecurityAdminFromTimer"){
   employeeInformation.enabled = false;
DepartmentsPanel.enabled = false;
AdmissionOfficePanel.enabled = false;
RecordsOfficePanel.enabled = false;
SchedulingOfficePanel.enabled = false;
FinancialAidPanel.enabled = false;
StudentFinancialsPanel.enabled = false;
ExtendedEDPanel.enabled = false;
InternationalProgramsPanel.enabled = false;
  
  if(EmployeeCB.value==1){
     EmployeeSignaturePanel.visible = true;
    EmployeeSignaturePanel.enabled=false;
  }
else{
     EmployeeSignaturePanel.visible = false;
}
if(AccessCB.value==1){
   AdminSignPanel.visible = true;
   AdminSignPanel.enabled = false;
}else{
  AdminSignPanel.visible=false;
}
   if(InitiatorCB.value==1){
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false;
   }
   else{
     InitiatorPanel.visible = false;
   }
  if(BusinessAnalystCB.value==1){
     BusinessAnalystPanel.visible = true;
     BusinessAnalystPanel.enabled=false;
  }else{
    BusinessAnalystPanel.visible=false;
  }
   if(ISOAdminCB.value==1){
    ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
   }
  else{
    ISOAdminPanel.visible = false;
  }
 if(TrainerCB.value){
   TrainerSignPanel.visible = true;
     TrainerSignPanel.enabled = false;
 }
  else{
    TrainerSignPanel.visible = false;
  }
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = true;
 
  if(CISOCB.value==1){
        CISOAdminSignaturePanel.visible = true;
     CISOAdminSignaturePanel.enabled = false;
  }
  else{
        CISOAdminSignaturePanel.visible = false;
  }
}
if(StageIndicator.value === null){
  DepartmentsPanel.visible = true;
AdmissionOfficePanel.visible = false;
RecordsOfficePanel.visible = false;
SchedulingOfficePanel.visible = false;
FinancialAidPanel.visible = false;
StudentFinancialsPanel.visible = false;
ExtendedEDPanel.visible = false;
InternationalProgramsPanel.visible = false;
}else{
  DepartmentsPanel.visible = true;
  AdmissionOfficePanel.visible = false;
RecordsOfficePanel.visible = false;
SchedulingOfficePanel.visible = false;
FinancialAidPanel.visible = false;
StudentFinancialsPanel.visible = false;
ExtendedEDPanel.visible = false;
InternationalProgramsPanel.visible = false;
$.ajax({
          type: 'GET',
          url:"/bin/getFinancialARFData",
          data: {depID:DeptID.value,
            action: "CS_DEPT"},
          dataType: 'json',
          success: function(myresopnse) {
            if(myresopnse.length !== 0){
           if(myresopnse[0].ISSFPAGECOMP === "true"){
             StudentFinancialsPanel.visible = true;
             DepartmentsPanel.visible = false;
           }else{
             StudentFinancialsPanel.visible = false;
           }
            if(myresopnse[0].ISSOPAGECOMP === "true"){
             SchedulingOfficePanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             SchedulingOfficePanel.visible = false;
           }
            if(myresopnse[0].ISFAPAGECOMP === "true"){
             FinancialAidPanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             FinancialAidPanel.visible = false;
           }
            if(myresopnse[0].ISEEPAGECOMP === "true"){
             ExtendedEDPanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             ExtendedEDPanel.visible = false;
           }
            if(myresopnse[0].ISROPAGECOMP === "true"){
             RecordsOfficePanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             RecordsOfficePanel.visible = false;
           }
            if(myresopnse[0].ISIEPAGECOMP === "true"){
             InternationalProgramsPanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             InternationalProgramsPanel.visible = false;
           }
            if(myresopnse[0].ISAOPAGECOMP === "true"){
             AdmissionOfficePanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             AdmissionOfficePanel.visible = false;
           }            
			//DeptDetailsJson.value = JSON.stringify(myresopnse);
            }
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_guideRootPanel_init2 = function (scope) {
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
            InitiatorUseId.value = myresopnse[0].EMPUSERID;
           // InitiatorEmail.value = myresopnse[0].EMAILID;
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CaseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CaseID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
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
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ApprovalStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ApprovalStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === "ToCompleteQueue"){
  this.value = "Complete";
}
if(StageIndicator.value === null)
{
   this.value = "In Progress";
}
debugger;
if(this.value == "Rejected"){
  document.getElementById('guideContainer-rootPanel-approvalstatus163282___widget').style.color = "red";
    
}else{
   document.getElementById('guideContainer-rootPanel-approvalstatus163282___widget').style.color ='#333333';
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            var userValue = myresponse.userId;
            //logUser.value = userValue;
            workflow_initiator.value = userValue;
            var cwidValue = CWID.value;
          if(cwidValue !== null){
            var pattern = /^8\d{8}$/;
            var result = pattern.test(cwidValue);
            if (result !== true) {
                /*FacultyFirstName.value = null;
                FacultyLastName.value = null;
                Department.value = null;
                DeptId.value = null;
                PrintName.value = null;
                FacultyUserId.value = null;
                FacultyEmail.value = null;*/

                showErrorModal("Alert!", "Please enter a valid Employee ID");

            } else {
                //if (CWID.value !== null) {

                    var gifModal = document.getElementById('gifModal');
                    gifModal.style.display = "block";
                    var cwidVal = CWID.value;
				    getCaseId();
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
                              var name = (myresponse[0].EMAIL).toLowerCase();
                              if(name.lastIndexOf("exchange.")!= -1){
                              name = name.replace("exchange.","");
                              }
                                CampusEmail.value = name;
                              	FirstName.value = myresponse[0].FIRST_NAME;
                                LastName.value = myresponse[0].LAST_NAME;
                                EmployeeFullName.value = FirstName.value+" "+LastName.value;
                               	DeptID.value = myresponse[0].DEPTID;
                                DeptName.value = myresponse[0].DEPTNAME;
                              	Divison.value = myresponse[0].FUL_DIVISION_NAME;
                                DivisionID.value = myresponse[0].FUL_DIVISION;
                                Title.value = myresponse[0].DESCR;
                                CampusExt.value = myresponse[0].PHONE;
                                showRolesTab(DeptID.value);
                           //   	CampusLocation.value = myresponse[0].BUILDING;
                              	
                              
                             var myArr = (myresponse[0].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                              ApprAdmin.value = myArr[0];
                                EmployeeUserID.value = myresponse[0].USERID;
                              	var empType = myresponse[0].EMP_TYPE;
                                if(empType.toLowerCase() == "permanent"){
                                  EmploymentType.value = "1";
                                } else {
                                  EmploymentType.value = "2";
                                }
                              	if(myresponse[0].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[0].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	TempEndDate.value = d;
                              }
                              	var empPosition = myresponse[0].POSITION;
                              	if(empPosition.toLowerCase() == "faculty"){
                                  EmploymentCatagory.value = "1";
                                } else if(empPosition.toLowerCase() == "staff"){
                                  EmploymentCatagory.value = "2";
                                } else if(empPosition.toLowerCase() == "management"){
                                  EmploymentCatagory.value = "3";
                                } else if(empPosition.toLowerCase() == "student"){
                                  EmploymentCatagory.value = "4";
                                } else if(empPosition.toLowerCase() == "other"){
                                  EmploymentCatagory.value = "5";
                                }
                               // EmployeeEmail.value = myresponse[0].EMAIL;
                             // ManagerEmail.value = myresponse[0].MANAGER_EMAIL_ID;
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
                                          var name = (myresponse[n].EMAIL).toLowerCase();
                                          if(name.lastIndexOf("exchange.")!= -1){
                                          name = name.replace("exchange.","");
                                          }
                                          
                                          CampusEmail.value = name;
                                          FirstName.value = myresponse[n].FIRST_NAME;
                                          LastName.value = myresponse[n].LAST_NAME;
                                          EmployeeFullName.value = FirstName.value+" "+LastName.value;
                                          DeptID.value = myresponse[n].DEPTID;
                                          DeptName.value = myresponse[n].DEPTNAME;
                                          Divison.value = myresponse[n].FUL_DIVISION_NAME;
                                          DivisionID.value = myresponse[n].FUL_DIVISION;
                                          Title.value = myresponse[n].DESCR;
                                          CampusExt.value = myresponse[n].PHONE;
                                          showRolesTab(DeptID.value);
                                     ApprAdmin.value = myresponse[n].MANAGER;
                                          var myArr = (myresponse[n].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                                          ApprAdmin.value = myArr[0];
                                          var empType = myresponse[n].EMP_TYPE;
                                          EmployeeUserID.value = myresponse[n].USERID;
                                          if(empType.toLowerCase() == "Permanent"){
                                            EmploymentType.value = "1";
                                          } else {
                                            EmploymentType.value = "2";
                                          }
                                         if(myresponse[n].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[n].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	TempEndDate.value = d;
                              }
                                          var empPosition = myresponse[n].POSITION;
                                          if(empPosition.toLowerCase() == "faculty"){
                                  EmploymentCatagory.value = "1";
                                } else if(empPosition.toLowerCase() == "staff"){
                                  EmploymentCatagory.value = "2";
                                } else if(empPosition.toLowerCase() == "management"){
                                  EmploymentCatagory.value = "3";
                                } else if(empPosition.toLowerCase() == "student"){
                                  EmploymentCatagory.value = "4";
                                } else if(empPosition.toLowerCase() == "other"){
                                  EmploymentCatagory.value = "5";
                                }
                                          EmployeeEmail.value = myresponse[n].EMAIL;
                              ManagerEmail.value = myresponse[n].MANAGER_EMAIL_ID;
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
                                Divison.value = "";
                                DivisionID.value = "";
                                Title.value = "";
                                CampusExt.value = "";
                                ApprAdmin.value = "";
                                ManagerUserID.value = "";
                                ManagerName.value = "";
                                ApprAdmin.value = "";
                                EmployeeUserID.value = "";
                                EmploymentType.value = "";
                                TempEndDate.value = "";
                                EmploymentCatagory.value = "";
                                EmployeeEmail.value = "";
                                ManagerEmail.value = "";

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
            }else{
            
              CampusEmail.value = "";
                                FirstName.value = "";
                                LastName.value = "";
                                DeptID.value = "";
                                DeptName.value = "";
                                Divison.value = "";
                                DivisionID.value = "";
                                Title.value = "";
                                CampusExt.value = "";
                                ApprAdmin.value = "";
                                ManagerUserID.value = "";
                                ManagerName.value = "";
                                ApprAdmin.value = "";
                                EmployeeUserID.value = "";
                                EmploymentType.value = "";
                                TempEndDate.value = "";
                                EmploymentCatagory.value = "";
                                EmployeeEmail.value = "";
                                ManagerEmail.value = "";
            }

        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function showRolesTab(dept){
  DepartmentsPanel.visible = true;

$.ajax({
          type: 'GET',
          url:"/bin/getFinancialARFData",
          data: {depID:dept,
            action: "CS_DEPT"},
          dataType: 'json',
          success: function(myresopnse) {
            if(myresopnse.length !== 0){
              AdmissionOfficePanel.visible = false;
RecordsOfficePanel.visible = false;
SchedulingOfficePanel.visible = false;
FinancialAidPanel.visible = false;
StudentFinancialsPanel.visible = false;
ExtendedEDPanel.visible = false;
InternationalProgramsPanel.visible = false;
           if(myresopnse[0].ISSFPAGECOMP === "true"){
             StudentFinancialsPanel.visible = true;
             DepartmentsPanel.visible = false;
           }else{
             StudentFinancialsPanel.visible = false;
           }
            if(myresopnse[0].ISSOPAGECOMP === "true"){
             SchedulingOfficePanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             SchedulingOfficePanel.visible = false;
           }
            if(myresopnse[0].ISFAPAGECOMP === "true"){
             FinancialAidPanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             FinancialAidPanel.visible = false;
           }
            if(myresopnse[0].ISEEPAGECOMP === "true"){
             ExtendedEDPanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             ExtendedEDPanel.visible = false;
           }
            if(myresopnse[0].ISROPAGECOMP === "true"){
             RecordsOfficePanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             RecordsOfficePanel.visible = false;
           }
            if(myresopnse[0].ISIEPAGECOMP === "true"){
             InternationalProgramsPanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             InternationalProgramsPanel.visible = false;
           }
            if(myresopnse[0].ISAOPAGECOMP === "true"){
             AdmissionOfficePanel.visible = true;
              DepartmentsPanel.visible = false;
           }else{
             AdmissionOfficePanel.visible = false;
           }
            
//DeptDetailsJson.value = JSON.stringify(myresopnse);
          }
          },
          error: function(error) {
            alert("error block=" + error);
          }
        });
}

function getCaseId(){
  this.enabled = false;
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
}


        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CampusEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CampusEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CampusEmail_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CampusEmail_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var name = "nvadlakunta@exchange.fullerton.edu";
if(name.lastIndexOf("exchange.")!= -1){
name = name.replace("exchange.","");
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_Title_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_Title_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CampusExt_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CampusExt_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_Divison_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_Divison_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ApprAdmin_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ApprAdmin_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmploymentType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmploymentType_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_TempEndDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_TempEndDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmploymentCatagory_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmploymentCatagory_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
OthersValue.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmploymentCatagory_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmploymentCatagory_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value == 5){
  OthersValue.enabled = true;
}else{
  OthersValue.enabled = false;
  OthersValue.value = "";
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExpiryFlag_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExpiryFlag_init0 = function (scope) {
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FormStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FormStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "In Process";
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          DepartmentRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
  if(this.value == "Other"){
    OtherText.enabled = true;
    OtherText.visible = true;
  } else{
    OtherText.enabled = false;
    OtherText.value = "";
    OtherText.visible = false;
  }

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
 this.enabled=false;
 this.visible=false; 
}else{
  if(DepartmentRole.value === "Other"){
    this.enabled=true;
this.visible=true;
  }else{
this.enabled=false;
this.visible=false;
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsCSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsCSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = DepartmentsCSTable.instanceManager.instanceCount;
var optionVal = DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSOption.value;
var roleVal = DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsCSTable.instanceManager.instances[n].DepartmentsCSOption.value;
    var roleVal1 = DepartmentsCSTable.instanceManager.instances[n].DepartmentsCSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSOption.value = null;
     DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSRole.value = null;
     DepartmentsCSTable.instanceManager.removeInstance(DepartmentsCSTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSOption.value = null;
DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSRole.value = null;
DepartmentsCSTable.instanceManager.removeInstance(DepartmentsCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsCSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsCSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_CS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           DepartmentsCSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsCSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsCSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
debugger;
var rowcount1 = DepartmentsCSTable.instanceManager.instanceCount;
var optionVal = DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSOption.value;
var roleVal = DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsCSTable.instanceManager.instances[n].DepartmentsCSOption.value;
    var roleVal1 = DepartmentsCSTable.instanceManager.instances[n].DepartmentsCSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSOption.value = null;
     DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSRole.value = null;
     DepartmentsCSTable.instanceManager.removeInstance(DepartmentsCSTable.instanceIndex);
     break;
   }
    if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSOption.value = null;
DepartmentsCSTable.instanceManager.instances[DepartmentsCSTable.instanceIndex].DepartmentsCSRole.value = null;
DepartmentsCSTable.instanceManager.removeInstance(DepartmentsCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_headerItem16648784625691664878463813_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_headerItem16648784625691664878463813_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var indexValue = DepartmentsCSTable.instanceIndex;     
	 DepartmentsCSTable.instanceManager.instances[indexValue].DepartmentsCSOption.value = null;
     DepartmentsCSTable.instanceManager.instances[indexValue].DepartmentsCSRole.value = null;
     DepartmentsCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepCSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepCSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsCSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;



    DeptCSTable.DepartmentsCSTable.instanceManager.addInstance();
    rowcount = DepartmentsCSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_CS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsCSTable.instanceManager.instances[lastRow].DepartmentsCSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherTextSecurity.enabled=true;
  OtherRemove.value = "";
  OtherTextSecurity.mandatory = true;
}
if(this.value === null && OtherRemove.value === null){
   OtherTextSecurity.enabled=false;
  OtherTextSecurity.value="";
  OtherTextSecurity.mandatory = false;
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
OtherTextSecurity.enabled=true;
   OtherAdd.value = "";
  OtherTextSecurity.mandatory = true;
}
if(this.value === null && OtherAdd.value === null){
   OtherTextSecurity.enabled=false;
  OtherTextSecurity.value="";
  OtherTextSecurity.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherTextSecurity_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherTextSecurity_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsRSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsRSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsRSTable.instanceManager.instanceCount;
var optionVal = DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSOption.value;
var roleVal = DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsRSTable.instanceManager.instances[n].DepartmentsRSOption.value;
    var roleVal1 = DepartmentsRSTable.instanceManager.instances[n].DepartmentsRSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSOption.value = null;
     DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSRole.value = null;
     DepartmentsRSTable.instanceManager.removeInstance(DepartmentsRSTable.instanceIndex);
     break;
   }
if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSOption.value = null;
DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSRole.value = null;
DepartmentsRSTable.instanceManager.removeInstance(DepartmentsRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsRSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsRSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer")
{
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_RS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          DepartmentsRSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsRSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsRSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsRSTable.instanceManager.instanceCount;
var optionVal = DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSOption.value;
var roleVal = DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsRSTable.instanceManager.instances[n].DepartmentsRSOption.value;
    var roleVal1 = DepartmentsRSTable.instanceManager.instances[n].DepartmentsRSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSOption.value = null;
     DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSRole.value = null;
     DepartmentsRSTable.instanceManager.removeInstance(DepartmentsRSTable.instanceIndex);
     break;
   }
if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSOption.value = null;
DepartmentsRSTable.instanceManager.instances[DepartmentsRSTable.instanceIndex].DepartmentsRSRole.value = null;
DepartmentsRSTable.instanceManager.removeInstance(DepartmentsRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepRSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepRSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){	
	
  	
  
    var rowCountToRemove = DepartmentsRSTable.instanceManager.instanceCount; 
    var indexValue = DepartmentsRSTable.instanceIndex; 
  
	 DepartmentsRSTable.instanceManager.instances[indexValue].DepartmentsRSOption.value = null;
     DepartmentsRSTable.instanceManager.instances[indexValue].DepartmentsRSRole.value = null;
     DepartmentsRSTable.instanceManager.removeInstance(indexValue);
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepRSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepRSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsRSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;



    DeptRSTable.DepartmentsRSTable.instanceManager.addInstance();
    rowcount = DepartmentsRSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_RS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsRSTable.instanceManager.instances[lastRow].DepartmentsRSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherRecordText.enabled=true;
  OtherRecordRemove.value = "";
  OtherRecordText.mandatory = true;
}
if(this.value === null && OtherRecordRemove.value === null){
   OtherRecordText.enabled=false;
   OtherRecordText.value="";
   OtherRecordText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherRecordText.enabled=true;
  OtherRecordAdd.value = "";
  OtherRecordText.mandatory = true;
}
if(this.value === null && OtherRecordAdd.value === null){
   OtherRecordText.enabled=false;
   OtherRecordText.value="";
   OtherRecordText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = DepartmentsASTable.instanceManager.instanceCount;
var optionVal = DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASOption.value;
var roleVal = DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsASTable.instanceManager.instances[n].DepartmentsASOption.value;
    var roleVal1 = DepartmentsASTable.instanceManager.instances[n].DepartmentsASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASOption.value = null;
     DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASRole.value = null;
     DepartmentsASTable.instanceManager.removeInstance(DepartmentsASTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASOption.value = null;
DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASRole.value = null;
DepartmentsASTable.instanceManager.removeInstance(DepartmentsASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           DepartmentsASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = DepartmentsASTable.instanceManager.instanceCount;
var optionVal = DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASOption.value;
var roleVal = DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsASTable.instanceManager.instances[n].DepartmentsASOption.value;
    var roleVal1 = DepartmentsASTable.instanceManager.instances[n].DepartmentsASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASOption.value = null;
     DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASRole.value = null;
     DepartmentsASTable.instanceManager.removeInstance(DepartmentsASTable.instanceIndex);
     break;
   }
    if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASOption.value = null;
DepartmentsASTable.instanceManager.instances[DepartmentsASTable.instanceIndex].DepartmentsASRole.value = null;
DepartmentsASTable.instanceManager.removeInstance(DepartmentsASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepASRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepASRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = DepartmentsASTable.instanceManager.instanceCount;
    var indexValue = DepartmentsASTable.instanceIndex; 

    DepartmentsASTable.instanceManager.instances[indexValue].DepartmentsASOption.value = null;
    DepartmentsASTable.instanceManager.instances[indexValue].DepartmentsASRole.value = null;
    DepartmentsASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;



    DeptASTable.DepartmentsASTable.instanceManager.addInstance();
    rowcount = DepartmentsASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsASTable.instanceManager.instances[lastRow].DepartmentsASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepASRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepASRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = DepartmentsASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    DepartmentsASTable.instanceManager.instances[indexValue].DepartmentsASOption.value = null;
    DepartmentsASTable.instanceManager.instances[indexValue].DepartmentsASRole.value = null;
    DepartmentsASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdmissionAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdmissionAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
OtherAdmissionText.enabled=true;
   OtherAdmissionRemove.value = "";
  OtherAdmissionText.mandatory = true;
}
if(this.value === null && OtherAdmissionRemove.value === null){
  OtherAdmissionText.enabled=false;
  OtherAdmissionText.value="";
  OtherAdmissionText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdmissionRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdmissionRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherAdmissionText.enabled=true;
  OtherAdmissionAdd.value = "";
  OtherAdmissionText.mandatory = true;
}
if(this.value === null && OtherAdmissionAdd.value === null){
  OtherAdmissionText.enabled=false;
  OtherAdmissionText.value="";
  OtherAdmissionText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdmissionText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdmissionText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsMQOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsMQOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsMQTable.instanceManager.instanceCount;
var optionVal = DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQOption.value;
var roleVal = DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQRole.value;
var fcrValidation = true;

if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsMQTable.instanceManager.instances[n].DepartmentsMQOption.value;
    var roleVal1 = DepartmentsMQTable.instanceManager.instances[n].DepartmentsMQRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQOption.value = null;
     DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQRole.value = null;
     DepartmentsMQTable.instanceManager.removeInstance(DepartmentsMQTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQOption.value = null;
DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQRole.value = null;
DepartmentsMQTable.instanceManager.removeInstance(DepartmentsMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsMQRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsMQRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_MQ",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          DepartmentsMQRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsMQRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsMQRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsMQTable.instanceManager.instanceCount;
var optionVal = DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQOption.value;
var roleVal = DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQRole.value;
var fcrValidation = true;

if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsMQTable.instanceManager.instances[n].DepartmentsMQOption.value;
    var roleVal1 = DepartmentsMQTable.instanceManager.instances[n].DepartmentsMQRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQOption.value = null;
     DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQRole.value = null;
     DepartmentsMQTable.instanceManager.removeInstance(DepartmentsMQTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQOption.value = null;
DepartmentsMQTable.instanceManager.instances[DepartmentsMQTable.instanceIndex].DepartmentsMQRole.value = null;
DepartmentsMQTable.instanceManager.removeInstance(DepartmentsMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepMQRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepMQRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = DepartmentsMQTable.instanceManager.instanceCount;
    var indexValue = DepartmentsMQTable.instanceIndex; 

    DepartmentsMQTable.instanceManager.instances[indexValue].DepartmentsMQOption.value = null;
    DepartmentsMQTable.instanceManager.instances[indexValue].DepartmentsMQRole.value = null;
    DepartmentsMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepMQAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepMQAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsMQTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    DeptMQTable.DepartmentsMQTable.instanceManager.addInstance();
    rowcount = DepartmentsMQTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_MQ",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsMQTable.instanceManager.instances[lastRow].DepartmentsMQRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepMQRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepMQRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = DepartmentsMQTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    DepartmentsMQTable.instanceManager.instances[indexValue].DepartmentsMQOption.value = null;
    DepartmentsMQTable.instanceManager.instances[indexValue].DepartmentsMQRole.value = null;
    DepartmentsMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherMyQueryAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherMyQueryAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherMyQueryText.enabled=true;
   OtherMyQueryRemove.value = "";
   OtherMyQueryText.mandatory = true;
}
if(this.value === null && OtherMyQueryRemove.value === null){
  OtherMyQueryText.enabled=false;
  OtherMyQueryText.value="";
  OtherMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherMyQueryRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherMyQueryRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherMyQueryText.enabled=true;
   OtherMyQueryAdd.value = "";
   OtherMyQueryText.mandatory = true;
}
if(this.value === null && OtherMyQueryAdd.value === null){
  OtherMyQueryText.enabled=false;
  OtherMyQueryText.value="";
  OtherMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherMyQueryText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherMyQueryText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsFASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsFASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsFASTable.instanceManager.instanceCount;
var optionVal = DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASOption.value;
var roleVal = DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASRole.value;
var fcrValidation = true;

if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsFASTable.instanceManager.instances[n].DepartmentsFASOption.value;
    var roleVal1 = DepartmentsFASTable.instanceManager.instances[n].DepartmentsFASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsFASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASOption.value = null;
     DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASRole.value = null;
     DepartmentsFASTable.instanceManager.removeInstance(DepartmentsFASTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASOption.value = null;
DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASRole.value = null;
DepartmentsFASTable.instanceManager.removeInstance(DepartmentsFASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsFASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsFASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_FAS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          DepartmentsFASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsFASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsFASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsFASTable.instanceManager.instanceCount;
var optionVal = DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASOption.value;
var roleVal = DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsFASTable.instanceManager.instances[n].DepartmentsFASOption.value;
    var roleVal1 = DepartmentsFASTable.instanceManager.instances[n].DepartmentsFASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsFASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASOption.value = null;
     DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASRole.value = null;
     DepartmentsFASTable.instanceManager.removeInstance(DepartmentsFASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASOption.value = null;
DepartmentsFASTable.instanceManager.instances[DepartmentsFASTable.instanceIndex].DepartmentsFASRole.value = null;
DepartmentsFASTable.instanceManager.removeInstance(DepartmentsFASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepFASRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepFASRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = DepartmentsFASTable.instanceManager.instanceCount;
    var indexValue = DepartmentsFASTable.instanceIndex; 

    DepartmentsFASTable.instanceManager.instances[indexValue].DepartmentsFASOption.value = null;
    DepartmentsFASTable.instanceManager.instances[indexValue].DepartmentsFASRole.value = null;
    DepartmentsFASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepFASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepFASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsFASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    DeptFASTable.DepartmentsFASTable.instanceManager.addInstance();
    rowcount = DepartmentsFASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_FAS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsFASTable.instanceManager.instances[lastRow].DepartmentsFASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepFASRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepFASRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = DepartmentsFASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    DepartmentsFASTable.instanceManager.instances[indexValue].DepartmentsFASOption.value = null;
    DepartmentsFASTable.instanceManager.instances[indexValue].DepartmentsFASRole.value = null;
    DepartmentsFASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAidAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAidAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinancialAidText.enabled=true;
   OtherFinancialAidRemove.value = "";
   OtherFinancialAidText.mandatory = true;
}
if(this.value === null && OtherFinancialAidRemove.value === null){
  OtherFinancialAidText.enabled=false;
  OtherFinancialAidText.value="";
  OtherFinancialAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAidRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAidRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
OtherFinancialAidText.enabled=true;
OtherFinancialAidAdd.value = "";
OtherFinancialAidText.mandatory = true;
}
if(this.value === null && OtherFinancialAidAdd.value === null){
  OtherFinancialAidText.enabled=false;
  OtherFinancialAidText.value="";
  OtherFinancialAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAidText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAidText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsSFSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsSFSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsSFSTable.instanceManager.instanceCount;
var optionVal = DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSOption.value;
var roleVal = DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsSFSTable.instanceManager.instances[n].DepartmentsSFSOption.value;
    var roleVal1 = DepartmentsSFSTable.instanceManager.instances[n].DepartmentsSFSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSOption.value = null;
     DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSRole.value = null;
     DepartmentsSFSTable.instanceManager.removeInstance(DepartmentsSFSTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSOption.value = null;
DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSRole.value = null;
DepartmentsSFSTable.instanceManager.removeInstance(DepartmentsSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsSFSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsSFSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_SFS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          DepartmentsSFSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsSFSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsSFSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = DepartmentsSFSTable.instanceManager.instanceCount;
var optionVal = DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSOption.value;
var roleVal = DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsSFSTable.instanceManager.instances[n].DepartmentsSFSOption.value;
    var roleVal1 = DepartmentsSFSTable.instanceManager.instances[n].DepartmentsSFSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSOption.value = null;
     DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSRole.value = null;
     DepartmentsSFSTable.instanceManager.removeInstance(DepartmentsSFSTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSOption.value = null;
DepartmentsSFSTable.instanceManager.instances[DepartmentsSFSTable.instanceIndex].DepartmentsSFSRole.value = null;
DepartmentsSFSTable.instanceManager.removeInstance(DepartmentsSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepSFSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepSFSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = DepartmentsSFSTable.instanceManager.instanceCount;
    var indexValue = DepartmentsSFSTable.instanceIndex; 

    DepartmentsSFSTable.instanceManager.instances[indexValue].DepartmentsSFSOption.value = null;
    DepartmentsSFSTable.instanceManager.instances[indexValue].DepartmentsSFSRole.value = null;
    DepartmentsSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepSFSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepSFSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsSFSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    DeptSFSTable.DepartmentsSFSTable.instanceManager.addInstance();
    rowcount = DepartmentsSFSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_SFS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsSFSTable.instanceManager.instances[lastRow].DepartmentsSFSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepSFSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepSFSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = DepartmentsSFSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    DepartmentsSFSTable.instanceManager.instances[indexValue].DepartmentsSFSOption.value = null;
    DepartmentsSFSTable.instanceManager.instances[indexValue].DepartmentsSFSRole.value = null;
    DepartmentsSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinancialAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinancialAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudentFinancialText.enabled=true;
   OtherStudentFinancialRemove.value = "";
   OtherStudentFinancialText.mandatory = true;
}
if(this.value === null && OtherStudentFinancialRemove.value === null){
  OtherStudentFinancialText.enabled=false;
  OtherStudentFinancialText.value="";
  OtherStudentFinancialText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinancialRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinancialRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudentFinancialText.enabled=true;
   OtherStudentFinancialAdd.value = "";
   OtherStudentFinancialText.mandatory = true;
}
if(this.value === null && OtherStudentFinancialAdd.value === null){
  OtherStudentFinancialText.enabled=false;
  OtherStudentFinancialText.value="";
  OtherStudentFinancialText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinancialText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinancialText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsDWOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsDWOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = DepartmentsDWTable.instanceManager.instanceCount;
var optionVal = DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWOption.value;
var roleVal = DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsDWTable.instanceManager.instances[n].DepartmentsDWOption.value;
    var roleVal1 = DepartmentsDWTable.instanceManager.instances[n].DepartmentsDWRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsDWTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWOption.value = null;
     DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWRole.value = null;
     DepartmentsDWTable.instanceManager.removeInstance(DepartmentsDWTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWOption.value = null;
DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWRole.value = null;
DepartmentsDWTable.instanceManager.removeInstance(DepartmentsDWTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsDWRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsDWRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Departments",
      section:"Dep_DW",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           DepartmentsDWRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsDWRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepartmentsDWRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = DepartmentsDWTable.instanceManager.instanceCount;
var optionVal = DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWOption.value;
var roleVal = DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = DepartmentsDWTable.instanceManager.instances[n].DepartmentsDWOption.value;
    var roleVal1 = DepartmentsDWTable.instanceManager.instances[n].DepartmentsDWRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && DepartmentsDWTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWOption.value = null;
     DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWRole.value = null;
     DepartmentsDWTable.instanceManager.removeInstance(DepartmentsDWTable.instanceIndex);
     break;
      }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWOption.value = null;
DepartmentsDWTable.instanceManager.instances[DepartmentsDWTable.instanceIndex].DepartmentsDWRole.value = null;
DepartmentsDWTable.instanceManager.removeInstance(DepartmentsDWTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepCSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepCSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = DepartmentsDWTable.instanceManager.instanceCount;
    var indexValue = DepartmentsDWTable.instanceIndex; 

    DepartmentsDWTable.instanceManager.instances[indexValue].DepartmentsDWOption.value = null;
    DepartmentsDWTable.instanceManager.instances[indexValue].DepartmentsDWRole.value = null;
    DepartmentsDWTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepDWAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepDWAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = DepartmentsDWTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    DeptDWTable.DepartmentsDWTable.instanceManager.addInstance();
    rowcount = DepartmentsDWTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Departments",
            section: "Dep_DW",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                DepartmentsDWTable.instanceManager.instances[lastRow].DepartmentsDWRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_DepCSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_DepCSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = DepartmentsDWTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    DepartmentsDWTable.instanceManager.instances[indexValue].DepartmentsDWOption.value = null;
    DepartmentsDWTable.instanceManager.instances[indexValue].DepartmentsDWRole.value = null;
    DepartmentsDWTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherDatawareAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherDatawareAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherDatawareText.enabled=true;
   OtherDatawareRemove.value = "";
   OtherDatawareText.mandatory = true;
}
if(this.value === null && OtherDatawareRemove.value === null){
  OtherDatawareText.enabled=false;
  OtherDatawareText.value="";
  OtherDatawareText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherDatawareRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherDatawareRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherDatawareText.enabled=true;
   OtherDatawareAdd.value = "";
   OtherDatawareText.mandatory = true;
}
if(this.value === null && OtherDatawareAdd.value === null){
  OtherDatawareText.enabled=false;
  OtherDatawareText.value="";
  OtherDatawareText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherDatawareText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherDatawareText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Admission Office",
      section:"AO_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          AdmissionOfficeRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = AdmissionOfficeASTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASOption.value;
var roleVal = AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeASTable.instanceManager.instances[n].AdmissionOfficeASOption.value;
    var roleVal1 = AdmissionOfficeASTable.instanceManager.instances[n].AdmissionOfficeASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASOption.value = null;
     AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASRole.value = null;
     AdmissionOfficeASTable.instanceManager.removeInstance(AdmissionOfficeASTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASOption.value = null;
AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASRole.value = null;
AdmissionOfficeASTable.instanceManager.removeInstance(AdmissionOfficeASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Admission Office",
      section:"AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
            AdmissionOfficeASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOffice.instanceManager.instanceCount;
var optionVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value;
var roleVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value;debugger;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesDistributedRolesTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
     break;
   }
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASRole_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeASRole_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOfficeASTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASOption.value;
var roleVal = AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeASTable.instanceManager.instances[n].AdmissionOfficeASOption.value;
    var roleVal1 = AdmissionOfficeASTable.instanceManager.instances[n].AdmissionOfficeASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASOption.value = null;
     AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASRole.value = null;
     AdmissionOfficeASTable.instanceManager.removeInstance(AdmissionOfficeASTable.instanceIndex);
     break;
   }
    if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASOption.value = null;
AdmissionOfficeASTable.instanceManager.instances[AdmissionOfficeASTable.instanceIndex].AdmissionOfficeASRole.value = null;
AdmissionOfficeASTable.instanceManager.removeInstance(AdmissionOfficeASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = AdmissionOfficeASTable.instanceManager.instanceCount;
    var indexValue = AdmissionOfficeASTable.instanceIndex; 

    AdmissionOfficeASTable.instanceManager.instances[indexValue].AdmissionOfficeASOption.value = null;
    AdmissionOfficeASTable.instanceManager.instances[indexValue].AdmissionOfficeASRole.value = null;
    AdmissionOfficeASTable.instanceManager.removeInstance(indexValue);
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = AdmissionOfficeASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    AOASTable.AdmissionOfficeASTable.instanceManager.addInstance();
    rowcount = AdmissionOfficeASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Admission Office",
            section: "AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                AdmissionOfficeASTable.instanceManager.instances[lastRow].AdmissionOfficeASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = AdmissionOfficeASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    AdmissionOfficeASTable.instanceManager.instances[indexValue].AdmissionOfficeASOption.value = null;
    AdmissionOfficeASTable.instanceManager.instances[indexValue].AdmissionOfficeASRole.value = null;
    AdmissionOfficeASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminSecurityAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminSecurityAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherAdminSecurityText.enabled=true;
   OtherAdminSecurityRemove.value = "";
   OtherAdminSecurityText.mandatory = true;
}
if(this.value === null && OtherAdminSecurityRemove.value === null){
  OtherAdminSecurityText.enabled=false;
  OtherAdminSecurityText.value="";
  OtherAdminSecurityText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminSecurityRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminSecurityRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherAdminSecurityText.enabled=true;
  OtherAdminSecurityAdd.value = "";
  OtherAdminSecurityText.mandatory = true;
}
if(this.value === null && OtherAdminSecurityAdd.value === null){
  OtherAdminSecurityText.enabled=false;
  OtherAdminSecurityText.value="";
  OtherAdminSecurityText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminSecurityText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminSecurityText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeCSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeCSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = AdmissionOfficeCSTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSOption.value;
var roleVal = AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeCSTable.instanceManager.instances[n].AdmissionOfficeCSOption.value;
    var roleVal1 = AdmissionOfficeCSTable.instanceManager.instances[n].AdmissionOfficeCSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSOption.value = null;
     AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSRole.value = null;
     AdmissionOfficeCSTable.instanceManager.removeInstance(AdmissionOfficeCSTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSOption.value = null;
AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSRole.value = null;
AdmissionOfficeCSTable.instanceManager.removeInstance(AdmissionOfficeCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeCSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeCSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Admission Office",
      section:"CS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           AdmissionOfficeCSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeCSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeCSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = AdmissionOfficeCSTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSOption.value;
var roleVal = AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeCSTable.instanceManager.instances[n].AdmissionOfficeCSOption.value;
    var roleVal1 = AdmissionOfficeCSTable.instanceManager.instances[n].AdmissionOfficeCSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSOption.value = null;
     AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSRole.value = null;
     AdmissionOfficeCSTable.instanceManager.removeInstance(AdmissionOfficeCSTable.instanceIndex);
     break;
   }
    if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSOption.value = null;
AdmissionOfficeCSTable.instanceManager.instances[AdmissionOfficeCSTable.instanceIndex].AdmissionOfficeCSRole.value = null;
AdmissionOfficeCSTable.instanceManager.removeInstance(AdmissionOfficeCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click01 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = AdmissionOfficeCSTable.instanceManager.instanceCount;
    var indexValue = AdmissionOfficeCSTable.instanceIndex;

    AdmissionOfficeCSTable.instanceManager.instances[indexValue].AdmissionOfficeCSOption.value = null;
    AdmissionOfficeCSTable.instanceManager.instances[indexValue].AdmissionOfficeCSRole.value = null;
    AdmissionOfficeCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOCSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOCSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = AdmissionOfficeCSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    AOCSTable.AdmissionOfficeCSTable.instanceManager.addInstance();
    rowcount = AdmissionOfficeCSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Admission Office",
            section: "CS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                AdmissionOfficeCSTable.instanceManager.instances[lastRow].AdmissionOfficeCSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click02
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click02 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = AdmissionOfficeCSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    AdmissionOfficeCSTable.instanceManager.instances[indexValue].AdmissionOfficeCSOption.value = null;
    AdmissionOfficeCSTable.instanceManager.instances[indexValue].AdmissionOfficeCSRole.value = null;
    AdmissionOfficeCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminCurriculumAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminCurriculumAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherAdminCurriculumText.enabled=true;
   OtherAdminCurriculumRemove.value = "";
   OtherAdminCurriculumText.mandatory = true;
}
if(this.value === null && OtherAdminCurriculumRemove.value === null){
   OtherAdminCurriculumText.enabled=false;
   OtherAdminCurriculumText.value = "";
   OtherAdminCurriculumText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminCurriculumRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminCurriculumRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherAdminCurriculumText.enabled=true;
   OtherAdminCurriculumAdd.value = "";
   OtherAdminCurriculumText.mandatory = true;
}
if(this.value === null && OtherAdminCurriculumAdd.value === null){
   OtherAdminCurriculumText.enabled=false;
   OtherAdminCurriculumText.value = "";
   OtherAdminCurriculumText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminCurriculumText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminCurriculumText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOfficeRSTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSOption.value;
var roleVal = AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeRSTable.instanceManager.instances[n].AdmissionOfficeRSOption.value;
    var roleVal1 = AdmissionOfficeRSTable.instanceManager.instances[n].AdmissionOfficeRSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSOption.value = null;
     AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSRole.value = null;
     AdmissionOfficeRSTable.instanceManager.removeInstance(AdmissionOfficeRSTable.instanceIndex);
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSOption.value = null;
AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSRole.value = null;
AdmissionOfficeRSTable.instanceManager.removeInstance(AdmissionOfficeRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Admission Office",
      section:"RS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           AdmissionOfficeRSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeRSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOfficeRSTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSOption.value;
var roleVal = AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeRSTable.instanceManager.instances[n].AdmissionOfficeRSOption.value;
    var roleVal1 = AdmissionOfficeRSTable.instanceManager.instances[n].AdmissionOfficeRSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSOption.value = null;
     AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSRole.value = null;
     AdmissionOfficeRSTable.instanceManager.removeInstance(AdmissionOfficeRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSOption.value = null;
AdmissionOfficeRSTable.instanceManager.instances[AdmissionOfficeRSTable.instanceIndex].AdmissionOfficeRSRole.value = null;
AdmissionOfficeRSTable.instanceManager.removeInstance(AdmissionOfficeRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AORSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AORSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = AdmissionOfficeRSTable.instanceManager.instanceCount;
    var indexValue = AdmissionOfficeRSTable.instanceIndex; 

    AdmissionOfficeRSTable.instanceManager.instances[indexValue].AdmissionOfficeRSOption.value = null;
    AdmissionOfficeRSTable.instanceManager.instances[indexValue].AdmissionOfficeRSRole.value = null;
    AdmissionOfficeRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AORSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AORSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = AdmissionOfficeRSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    AORSTable.AdmissionOfficeRSTable.instanceManager.addInstance();
    rowcount = AdmissionOfficeRSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Admission Office",
            section: "RS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                AdmissionOfficeRSTable.instanceManager.instances[lastRow].AdmissionOfficeRSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AORSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AORSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = AdmissionOfficeRSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    AdmissionOfficeRSTable.instanceManager.instances[indexValue].AdmissionOfficeRSOption.value = null;
    AdmissionOfficeRSTable.instanceManager.instances[indexValue].AdmissionOfficeRSRole.value = null;
    AdmissionOfficeRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsText.enabled=true;
   OtherRecordsRemove.value = "";
   OtherRecordsText.mandatory = true;
}
if(this.value === null && OtherRecordsRemove.value === null){
   OtherRecordsText.enabled=false;
   OtherRecordsText.value = "";
   OtherRecordsText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsText.enabled=true;
   OtherRecordsAdd.value = "";
   OtherRecordsText.mandatory = true;
}
if(this.value === null && OtherRecordsAdd.value === null){
   OtherRecordsText.enabled=false;
   OtherRecordsText.value = "";
   OtherRecordsText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeSFSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeSFSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = AdmissionOfficeSFSTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSOption.value;
var roleVal = AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeSFSTable.instanceManager.instances[n].AdmissionOfficeSFSOption.value;
    var roleVal1 = AdmissionOfficeSFSTable.instanceManager.instances[n].AdmissionOfficeSFSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSOption.value = null;
     AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSRole.value = null;
     AdmissionOfficeSFSTable.instanceManager.removeInstance(AdmissionOfficeSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSOption.value = null;
AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSRole.value = null;
AdmissionOfficeSFSTable.instanceManager.removeInstance(AdmissionOfficeSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeSFSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeSFSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Admission Office",
      section:"SFS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           AdmissionOfficeSFSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeSFSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdmissionOfficeSFSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOfficeSFSTable.instanceManager.instanceCount;
var optionVal = AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSOption.value;
var roleVal = AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = AdmissionOfficeSFSTable.instanceManager.instances[n].AdmissionOfficeSFSOption.value;
    var roleVal1 = AdmissionOfficeSFSTable.instanceManager.instances[n].AdmissionOfficeSFSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && AdmissionOfficeSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSOption.value = null;
     AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSRole.value = null;
     AdmissionOfficeSFSTable.instanceManager.removeInstance(AdmissionOfficeSFSTable.instanceIndex);
     break;
   }
     if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSOption.value = null;
AdmissionOfficeSFSTable.instanceManager.instances[AdmissionOfficeSFSTable.instanceIndex].AdmissionOfficeSFSRole.value = null;
AdmissionOfficeSFSTable.instanceManager.removeInstance(AdmissionOfficeSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click03
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click03 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = AdmissionOfficeSFSTable.instanceManager.instanceCount;
    var indexValue = AdmissionOfficeSFSTable.instanceIndex; 

    AdmissionOfficeSFSTable.instanceManager.instances[indexValue].AdmissionOfficeSFSOption.value = null;
    AdmissionOfficeSFSTable.instanceManager.instances[indexValue].AdmissionOfficeSFSRole.value = null;
    AdmissionOfficeSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOSFSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOSFSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = AdmissionOfficeSFSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    AOSFSTable.AdmissionOfficeSFSTable.instanceManager.addInstance();
    rowcount = AdmissionOfficeSFSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Admission Office",
            section: "SFS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                AdmissionOfficeSFSTable.instanceManager.instances[lastRow].AdmissionOfficeSFSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click04
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AOASRemoveButton_click04 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = AdmissionOfficeSFSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    AdmissionOfficeSFSTable.instanceManager.instances[indexValue].AdmissionOfficeSFSOption.value = null;
    AdmissionOfficeSFSTable.instanceManager.instances[indexValue].AdmissionOfficeSFSRole.value = null;
    AdmissionOfficeSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinSecurityAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinSecurityAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudFinSecurityText.enabled=true;
   OtherStudFinSecurityRemove.value = "";
   OtherStudFinSecurityText.mandatory = true;
}
if(this.value === null && OtherStudFinSecurityRemove.value === null){
   OtherStudFinSecurityText.enabled=false;
   OtherStudFinSecurityText.value = "";
   OtherStudFinSecurityText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinSecurityRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinSecurityRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudFinSecurityText.enabled=true;
   OtherStudFinSecurityAdd.value = "";
   OtherStudFinSecurityText.mandatory=true;
}
if(this.value === null && OtherStudFinSecurityAdd.value === null){
   OtherStudFinSecurityText.enabled=false;
   OtherStudFinSecurityText.value = "";
   OtherStudFinSecurityText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinSecurityText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinSecurityText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessJustAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessJustAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Records Office",
      section:"RO_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
           RecordsOfficeRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSecurityAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSecurityAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsSecurityText.enabled=true;
   OtherRecordsSecurityRemove.value = "";
   OtherRecordsSecurityText.mandatory = true;
}
if(this.value === null && OtherRecordsSecurityRemove.value === null){
   OtherStudFinSecurityText.enabled=false;
   OtherRecordsSecurityText.value = "";
   OtherRecordsSecurityText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSecurityRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSecurityRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsSecurityText.enabled=true;
   OtherRecordsSecurityAdd.value = "";
   OtherRecordsSecurityText.mandatory=true;
}
if(this.value === null && OtherRecordsSecurityAdd.value === null){
   OtherStudFinSecurityText.enabled=false;
   OtherRecordsSecurityText.value = "";
   OtherRecordsSecurityText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSecurityText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSecurityText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeCSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeCSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = RecordsOfficeCSTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSOption.value;
var roleVal = RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeCSTable.instanceManager.instances[n].RecordsOfficeCSOption.value;
    var roleVal1 = RecordsOfficeCSTable.instanceManager.instances[n].RecordsOfficeCSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSOption.value = null;
     RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSRole.value = null;
     RecordsOfficeCSTable.instanceManager.removeInstance(RecordsOfficeCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSOption.value = null;
RecordsOfficeCSTable.instanceManager.instances[AdmissionRecordsOfficeCSTableOfficeRSTable.instanceIndex].RecordsOfficeCSRole.value = null;
RecordsOfficeCSTable.instanceManager.removeInstance(RecordsOfficeCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeCSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeCSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Records Office",
      section:"REC_CS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          RecordsOfficeCSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeCSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeCSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = RecordsOfficeCSTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSOption.value;
var roleVal = RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeCSTable.instanceManager.instances[n].RecordsOfficeCSOption.value;
    var roleVal1 = RecordsOfficeCSTable.instanceManager.instances[n].RecordsOfficeCSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSOption.value = null;
     RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSRole.value = null;
     RecordsOfficeCSTable.instanceManager.removeInstance(RecordsOfficeCSTable.instanceIndex);
     break;
   }
     if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeCSTable.instanceManager.instances[RecordsOfficeCSTable.instanceIndex].RecordsOfficeCSOption.value = null;
RecordsOfficeCSTable.instanceManager.instances[AdmissionRecordsOfficeCSTableOfficeRSTable.instanceIndex].RecordsOfficeCSRole.value = null;
RecordsOfficeCSTable.instanceManager.removeInstance(RecordsOfficeCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROCSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROCSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = RecordsOfficeCSTable.instanceManager.instanceCount;
    var indexValue = RecordsOfficeCSTable.instanceIndex;
    
    RecordsOfficeCSTable.instanceManager.instances[indexValue].RecordsOfficeCSOption.value = null;
    RecordsOfficeCSTable.instanceManager.instances[indexValue].RecordsOfficeCSRole.value = null;
    RecordsOfficeCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROCSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROCSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = RecordsOfficeCSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ROCSTable.RecordsOfficeCSTable.instanceManager.addInstance();
    rowcount = RecordsOfficeCSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Records Office",
            section: "REC_CS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                RecordsOfficeCSTable.instanceManager.instances[lastRow].RecordsOfficeCSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROCSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROCSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = RecordsOfficeCSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    RecordsOfficeCSTable.instanceManager.instances[indexValue].RecordsOfficeCSOption.value = null;
    RecordsOfficeCSTable.instanceManager.instances[indexValue].RecordsOfficeCSRole.value = null;
    RecordsOfficeCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherCurrRecordsAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherCurrRecordsAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherCurrRecordsText.enabled=true;
   OtherCurrRecordsRemove.value = "";
   OtherCurrRecordsText.mandatory=true;
}
if(this.value === null && OtherCurrRecordsRemove.value === null){
   OtherCurrRecordsText.enabled=false;
   OtherCurrRecordsText.value = "";
   OtherCurrRecordsText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherCurrRecordsRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherCurrRecordsRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherCurrRecordsText.enabled=true;
   OtherCurrRecordsAdd.value = "";
   OtherCurrRecordsText.mandatory=true;
}
if(this.value === null && OtherCurrRecordsAdd.value === null){
   OtherCurrRecordsText.enabled=false;
   OtherCurrRecordsText.value = "";
   OtherCurrRecordsText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherCurrRecordsText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherCurrRecordsText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = RecordsOfficeASTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASOption.value;
var roleVal = RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeASTable.instanceManager.instances[n].RecordsOfficeASOption.value;
    var roleVal1 = RecordsOfficeASTable.instanceManager.instances[n].RecordsOfficeASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASOption.value = null;
     RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASRole.value = null;
     RecordsOfficeASTable.instanceManager.removeInstance(RecordsOfficeASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASOption.value = null;
RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASRole.value = null;
RecordsOfficeASTable.instanceManager.removeInstance(RecordsOfficeASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Records Office",
      section:"REC_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
            RecordsOfficeASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOffice.instanceManager.instanceCount;
var optionVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value;
var roleVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value;debugger;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesDistributedRolesTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
     break;
   }
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASRole_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeASRole_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = RecordsOfficeASTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASOption.value;
var roleVal = RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeASTable.instanceManager.instances[n].RecordsOfficeASOption.value;
    var roleVal1 = RecordsOfficeASTable.instanceManager.instances[n].RecordsOfficeASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASOption.value = null;
     RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASRole.value = null;
     RecordsOfficeASTable.instanceManager.removeInstance(RecordsOfficeASTable.instanceIndex);
     break;
   }
     if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASOption.value = null;
RecordsOfficeASTable.instanceManager.instances[RecordsOfficeASTable.instanceIndex].RecordsOfficeASRole.value = null;
RecordsOfficeASTable.instanceManager.removeInstance(RecordsOfficeASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROASRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROASRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = RecordsOfficeASTable.instanceManager.instanceCount;
    var indexValue = RecordsOfficeASTable.instanceIndex;

    RecordsOfficeASTable.instanceManager.instances[indexValue].RecordsOfficeASOption.value = null;
    RecordsOfficeASTable.instanceManager.instances[indexValue].RecordsOfficeASRole.value = null;
    RecordsOfficeASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROASAddTButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROASAddTButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = RecordsOfficeASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ROASTable.RecordsOfficeASTable.instanceManager.addInstance();
    rowcount = RecordsOfficeASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Records Office",
            section: "REC_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                RecordsOfficeASTable.instanceManager.instances[lastRow].RecordsOfficeASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROASRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROASRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = RecordsOfficeASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    RecordsOfficeASTable.instanceManager.instances[indexValue].RecordsOfficeASOption.value = null;
    RecordsOfficeASTable.instanceManager.instances[indexValue].RecordsOfficeASRole.value = null;
    RecordsOfficeASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdminAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdminAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsAdminText.enabled=true;
   OtherRecordsAdminRemove.value = "";
   OtherRecordsAdminText.mandatory=true;
}
if(this.value === null && OtherRecordsAdminRemove.value === null){
   OtherRecordsAdminText.enabled=false;
   OtherRecordsAdminText.value = "";
   OtherRecordsAdminText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdminRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdminRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsAdminText.enabled=true;
   OtherRecordsAdminAdd.value = "";
   OtherRecordsAdminText.mandatory=true;
}
if(this.value === null && OtherRecordsAdminAdd.value === null){
   OtherRecordsAdminText.enabled=false;
   OtherRecordsAdminText.value = "";
   OtherRecordsAdminText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdminText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsAdminText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = RecordsOfficeSFSTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSOption.value;
var roleVal = RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeSFSTable.instanceManager.instances[n].RecordsOfficeSFSOption.value;
    var roleVal1 = RecordsOfficeSFSTable.instanceManager.instances[n].RecordsOfficeSFSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSOption.value = null;
     RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSRole.value = null;
     RecordsOfficeSFSTable.instanceManager.removeInstance(RecordsOfficeSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSOption.value = null;
RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSRole.value = null;
RecordsOfficeSFSTable.instanceManager.removeInstance(RecordsOfficeSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Records Office",
      section:"REC_SFS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
            RecordsOfficeSFSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOffice.instanceManager.instanceCount;
var optionVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value;
var roleVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value;debugger;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesDistributedRolesTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
     break;
   }
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSRole_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeSFSRole_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = RecordsOfficeSFSTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSOption.value;
var roleVal = RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeSFSTable.instanceManager.instances[n].RecordsOfficeSFSOption.value;
    var roleVal1 = RecordsOfficeSFSTable.instanceManager.instances[n].RecordsOfficeSFSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSOption.value = null;
     RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSRole.value = null;
     RecordsOfficeSFSTable.instanceManager.removeInstance(RecordsOfficeSFSTable.instanceIndex);
     break;
   }
     if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSOption.value = null;
RecordsOfficeSFSTable.instanceManager.instances[RecordsOfficeSFSTable.instanceIndex].RecordsOfficeSFSRole.value = null;
RecordsOfficeSFSTable.instanceManager.removeInstance(RecordsOfficeSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = RecordsOfficeSFSTable.instanceManager.instanceCount;
    var indexValue = RecordsOfficeSFSTable.instanceIndex;

    RecordsOfficeSFSTable.instanceManager.instances[indexValue].RecordsOfficeSFSOption.value = null;
    RecordsOfficeSFSTable.instanceManager.instances[indexValue].RecordsOfficeSFSRole.value = null;
    RecordsOfficeSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = RecordsOfficeSFSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ROSFSTable.RecordsOfficeSFSTable.instanceManager.addInstance();
    rowcount = RecordsOfficeSFSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Records Office",
            section: "REC_SFS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                RecordsOfficeSFSTable.instanceManager.instances[lastRow].RecordsOfficeSFSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = RecordsOfficeSFSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    RecordsOfficeSFSTable.instanceManager.instances[indexValue].RecordsOfficeSFSOption.value = null;
    RecordsOfficeSFSTable.instanceManager.instances[indexValue].RecordsOfficeSFSRole.value = null;
    RecordsOfficeSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudRecordsAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudRecordsAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudRecordsText.enabled=true;
   OtherStudRecordsRemove.value = "";
   OtherStudRecordsText.mandatory=true;
}
if(this.value === null && OtherStudRecordsRemove.value === null){
   OtherStudRecordsText.enabled=false;
   OtherStudRecordsText.value = "";
   OtherStudRecordsText.mandatory=true;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudRecordsRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudRecordsRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudRecordsText.enabled=true;
   OtherStudRecordsAdd.value = "";
   OtherStudRecordsText.mandatory=true;
}
if(this.value === null && OtherStudRecordsAdd.value === null){
   OtherStudRecordsText.enabled=false;
   OtherStudRecordsText.value = "";
   OtherStudRecordsText.mandatory=false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudRecordsText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudRecordsText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = RecordsOfficeMQTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQOption.value;
var roleVal = RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeMQTable.instanceManager.instances[n].RecordsOfficeMQOption.value;
    var roleVal1 = RecordsOfficeMQTable.instanceManager.instances[n].RecordsOfficeMQRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQOption.value = null;
     RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQRole.value = null;
     RecordsOfficeMQTable.instanceManager.removeInstance(RecordsOfficeMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQOption.value = null;
RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQRole.value = null;
RecordsOfficeMQTable.instanceManager.removeInstance(RecordsOfficeMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Records Office",
      section:"REC_MQ",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
             RecordsOfficeMQRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = AdmissionOffice.instanceManager.instanceCount;
var optionVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value;
var roleVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value;debugger;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesDistributedRolesTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
     break;
   }
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQRole_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_RecordsOfficeMQRole_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = RecordsOfficeMQTable.instanceManager.instanceCount;
var optionVal = RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQOption.value;
var roleVal = RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = RecordsOfficeMQTable.instanceManager.instances[n].RecordsOfficeMQOption.value;
    var roleVal1 = RecordsOfficeMQTable.instanceManager.instances[n].RecordsOfficeMQRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && RecordsOfficeMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQOption.value = null;
     RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQRole.value = null;
     RecordsOfficeMQTable.instanceManager.removeInstance(RecordsOfficeMQTable.instanceIndex);
     break;
   }
     if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQOption.value = null;
RecordsOfficeMQTable.instanceManager.instances[RecordsOfficeMQTable.instanceIndex].RecordsOfficeMQRole.value = null;
RecordsOfficeMQTable.instanceManager.removeInstance(RecordsOfficeMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click01 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = RecordsOfficeMQTable.instanceManager.instanceCount;
    var indexValue = RecordsOfficeMQTable.instanceIndex;

    RecordsOfficeMQTable.instanceManager.instances[indexValue].RecordsOfficeMQOption.value = null;
    RecordsOfficeMQTable.instanceManager.instances[indexValue].RecordsOfficeMQRole.value = null;
    RecordsOfficeMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROMQAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROMQAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = RecordsOfficeMQTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ROMQTable.RecordsOfficeMQTable.instanceManager.addInstance();
    rowcount = RecordsOfficeMQTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Records Office",
            section: "REC_MQ",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                RecordsOfficeMQTable.instanceManager.instances[lastRow].RecordsOfficeMQRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click02
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ROSFSRemoveButton_click02 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = RecordsOfficeMQTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    RecordsOfficeMQTable.instanceManager.instances[indexValue].RecordsOfficeMQOption.value = null;
    RecordsOfficeMQTable.instanceManager.instances[indexValue].RecordsOfficeMQRole.value = null;
    RecordsOfficeMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecMyQueryAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecMyQueryAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherRecMyQueryText.enabled=true;
  OtherRecMyQueryRemove.value = "";
  OtherRecMyQueryText.mandatory = true;
}
if(this.value === null && OtherRecMyQueryRemove.value === null){
  OtherRecMyQueryText.enabled=false;
  OtherRecMyQueryText.value="";
  OtherRecMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecMyQueryRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecMyQueryRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  OtherRecMyQueryText.enabled=true;
  OtherRecMyQueryAdd.value = "";
  OtherRecMyQueryText.mandatory = true;
}
if(this.value === null && OtherRecMyQueryAdd.value === null){
  OtherRecMyQueryText.enabled=false;
  OtherRecMyQueryText.value="";
  OtherRecMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecMyQueryText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecMyQueryText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Scheduling Office",
      section:"SO_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
 SchedulingOfficeRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeSSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeSSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = SchedulingOfficeSSTable.instanceManager.instanceCount;
var optionVal = SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSOption.value;
var roleVal = SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = SchedulingOfficeSSTable.instanceManager.instances[n].SchedulingOfficeSSOption.value;
    var roleVal1 = SchedulingOfficeSSTable.instanceManager.instances[n].SchedulingOfficeSSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && SchedulingOfficeSSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSOption.value = null;
     SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSRole.value = null;
     SchedulingOfficeSSTable.instanceManager.removeInstance(SchedulingOfficeSSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSOption.value = null;
SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSRole.value = null;
SchedulingOfficeSSTable.instanceManager.removeInstance(SchedulingOfficeSSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeSSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeSSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Scheduling Office",
      section:"SCHE_SS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         SchedulingOfficeSSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeSSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeSSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = SchedulingOfficeSSTable.instanceManager.instanceCount;
var optionVal = SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSOption.value;
var roleVal = SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = SchedulingOfficeSSTable.instanceManager.instances[n].SchedulingOfficeSSOption.value;
    var roleVal1 = SchedulingOfficeSSTable.instanceManager.instances[n].SchedulingOfficeSSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && SchedulingOfficeSSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSOption.value = null;
     SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSRole.value = null;
     SchedulingOfficeSSTable.instanceManager.removeInstance(SchedulingOfficeSSTable.instanceIndex);
     break;
   }
    if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSOption.value = null;
SchedulingOfficeSSTable.instanceManager.instances[SchedulingOfficeSSTable.instanceIndex].SchedulingOfficeSSRole.value = null;
SchedulingOfficeSSTable.instanceManager.removeInstance(SchedulingOfficeSSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOSSRemove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOSSRemove_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = SchedulingOfficeSSTable.instanceManager.instanceCount;
    var indexValue = SchedulingOfficeSSTable.instanceIndex;

    SchedulingOfficeSSTable.instanceManager.instances[indexValue].SchedulingOfficeSSOption.value = null;
    SchedulingOfficeSSTable.instanceManager.instances[indexValue].SchedulingOfficeSSRole.value = null;
    SchedulingOfficeSSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOSSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOSSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = SchedulingOfficeSSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SOSSTable.SchedulingOfficeSSTable.instanceManager.addInstance();
    rowcount = SchedulingOfficeSSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Scheduling Office",
            section: "SCHE_SS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                SchedulingOfficeSSTable.instanceManager.instances[lastRow].SchedulingOfficeSSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOSSRemove_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOSSRemove_click00 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = SchedulingOfficeSSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    SchedulingOfficeSSTable.instanceManager.instances[indexValue].SchedulingOfficeSSOption.value = null;
    SchedulingOfficeSSTable.instanceManager.instances[indexValue].SchedulingOfficeSSRole.value = null;
    SchedulingOfficeSSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingSecurityAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingSecurityAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   SchedulingSecurityText.enabled=true;
   SchedulingSecurityRemove.value = "";
   SchedulingSecurityText.mandatory = true;
}
if(this.value === null && SchedulingSecurityRemove.value === null){
   SchedulingSecurityText.enabled=false;
   SchedulingSecurityText.value = "";
   SchedulingSecurityText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingSecurityRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingSecurityRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   SchedulingSecurityText.enabled=true;
   SchedulingSecurityAdd.value = "";
   SchedulingSecurityText.mandatory = true;
}
if(this.value === null && SchedulingSecurityAdd.value === null){
   SchedulingSecurityText.enabled=false;
   SchedulingSecurityText.value = "";
   SchedulingSecurityText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingSecurityText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingSecurityText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeMQOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeMQOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = SchedulingOfficeMQTable.instanceManager.instanceCount;
var optionVal = SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQOption.value;
var roleVal = SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = SchedulingOfficeMQTable.instanceManager.instances[n].SchedulingOfficeMQOption.value;
    var roleVal1 = SchedulingOfficeMQTable.instanceManager.instances[n].SchedulingOfficeMQRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && SchedulingOfficeMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQOption.value = null;
     SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQRole.value = null;
     SchedulingOfficeMQTable.instanceManager.removeInstance(SchedulingOfficeMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQOption.value = null;
SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQRole.value = null;
SchedulingOfficeMQTable.instanceManager.removeInstance(SchedulingOfficeMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeMQRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeMQRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Scheduling Office",
      section:"SCHE_MQ",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          SchedulingOfficeMQRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeMQRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeMQRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = SchedulingOfficeMQTable.instanceManager.instanceCount;
var optionVal = SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQOption.value;
var roleVal = SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = SchedulingOfficeMQTable.instanceManager.instances[n].SchedulingOfficeMQOption.value;
    var roleVal1 = SchedulingOfficeMQTable.instanceManager.instances[n].SchedulingOfficeMQRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && SchedulingOfficeMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQOption.value = null;
     SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQRole.value = null;
     SchedulingOfficeMQTable.instanceManager.removeInstance(SchedulingOfficeMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQOption.value = null;
SchedulingOfficeMQTable.instanceManager.instances[SchedulingOfficeMQTable.instanceIndex].SchedulingOfficeMQRole.value = null;
SchedulingOfficeMQTable.instanceManager.removeInstance(SchedulingOfficeMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOMQRemove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOMQRemove_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = SchedulingOfficeMQTable.instanceManager.instanceCount;
    var indexValue = SchedulingOfficeMQTable.instanceIndex;

    SchedulingOfficeMQTable.instanceManager.instances[indexValue].SchedulingOfficeMQOption.value = null;
    SchedulingOfficeMQTable.instanceManager.instances[indexValue].SchedulingOfficeMQRole.value = null;
    SchedulingOfficeMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOMQAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOMQAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = SchedulingOfficeMQTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SOMQTable.SchedulingOfficeMQTable.instanceManager.addInstance();
    rowcount = SchedulingOfficeMQTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Scheduling Office",
            section: "SCHE_MQ",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                SchedulingOfficeMQTable.instanceManager.instances[lastRow].SchedulingOfficeMQRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOMQRemove_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOMQRemove_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = SchedulingOfficeMQTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    SchedulingOfficeMQTable.instanceManager.instances[indexValue].SchedulingOfficeMQOption.value = null;
    SchedulingOfficeMQTable.instanceManager.instances[indexValue].SchedulingOfficeMQRole.value = null;
    SchedulingOfficeMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOtherAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOtherAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   SchedulingOtherText.enabled=true;
   SchedulingOtherRemove.value = "";
   SchedulingOtherText.mandatory = true;
}
if(this.value === null && SchedulingOtherRemove.value === null){
   SchedulingOtherText.enabled=false;
   SchedulingOtherText.value = "";
   SchedulingOtherText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOtherRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOtherRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   SchedulingOtherText.enabled=true;
   SchedulingOtherAdd.value = "";
   SchedulingOtherText.mandatory = true;
}
if(this.value === null && SchedulingOtherAdd.value === null){
   SchedulingOtherText.enabled=false;
   SchedulingOtherText.value = "";
   SchedulingOtherText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOtherText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOtherText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = SchedulingOfficeASTable.instanceManager.instanceCount;
var optionVal = SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASOption.value;
var roleVal = SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = SchedulingOfficeASTable.instanceManager.instances[n].SchedulingOfficeASOption.value;
    var roleVal1 = SchedulingOfficeASTable.instanceManager.instances[n].SchedulingOfficeASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && SchedulingOfficeASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASOption.value = null;
     SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASRole.value = null;
     SchedulingOfficeASTable.instanceManager.removeInstance(SchedulingOfficeASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASOption.value = null;
SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASRole.value = null;
SchedulingOfficeASTable.instanceManager.removeInstance(SchedulingOfficeASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Scheduling Office",
      section:"SCHE_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          SchedulingOfficeASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SchedulingOfficeASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = SchedulingOfficeASTable.instanceManager.instanceCount;
var optionVal = SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASOption.value;
var roleVal = SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = SchedulingOfficeASTable.instanceManager.instances[n].SchedulingOfficeASOption.value;
    var roleVal1 = SchedulingOfficeASTable.instanceManager.instances[n].SchedulingOfficeASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && SchedulingOfficeASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASOption.value = null;
     SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASRole.value = null;
     SchedulingOfficeASTable.instanceManager.removeInstance(SchedulingOfficeASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASOption.value = null;
SchedulingOfficeASTable.instanceManager.instances[SchedulingOfficeASTable.instanceIndex].SchedulingOfficeASRole.value = null;
SchedulingOfficeASTable.instanceManager.removeInstance(SchedulingOfficeASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOASRemove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOASRemove_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = SchedulingOfficeASTable.instanceManager.instanceCount;
    var indexValue = SchedulingOfficeASTable.instanceIndex;

    SchedulingOfficeASTable.instanceManager.instances[indexValue].SchedulingOfficeASOption.value = null;
    SchedulingOfficeASTable.instanceManager.instances[indexValue].SchedulingOfficeASRole.value = null;
    SchedulingOfficeASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SSASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SSASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = SchedulingOfficeASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SOASTable.SchedulingOfficeASTable.instanceManager.addInstance();
    rowcount = SchedulingOfficeASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Scheduling Office",
            section: "SCHE_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                SchedulingOfficeASTable.instanceManager.instances[lastRow].SchedulingOfficeASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SOASRemove_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SOASRemove_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {

    var rowCountToRemove = SchedulingOfficeASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    SchedulingOfficeASTable.instanceManager.instances[indexValue].SchedulingOfficeASOption.value = null;
    SchedulingOfficeASTable.instanceManager.instances[indexValue].SchedulingOfficeASRole.value = null;
    SchedulingOfficeASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSchedulingAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSchedulingAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsSchedulingText.enabled=true;
   OtherRecordsSchedulingRemove.value = "";
   OtherRecordsSchedulingText.mandatory = true;
}
if(this.value === null && OtherRecordsSchedulingRemove.value === null){
   OtherRecordsSchedulingText.enabled=false;
   OtherRecordsSchedulingText.value = "";
   OtherRecordsSchedulingText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSchedulingRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSchedulingRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsSchedulingText.enabled=true;
   OtherRecordsSchedulingAdd.value = "";
   OtherRecordsSchedulingText.mandatory = true;
}
if(this.value === null && OtherRecordsSchedulingAdd.value === null){
   OtherRecordsSchedulingText.enabled=false;
   OtherRecordsSchedulingText.value = "";
   OtherRecordsSchedulingText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSchedulingText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsSchedulingText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init01 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Financial Aid",
      section:"FA_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          FinancialAidRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinAidAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinAidAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinAidText.enabled=true;
   OtherFinAidRemove.value = "";
   OtherFinAidText.mandatory = true;
}
if(this.value === null && OtherFinAidRemove.value === null){
   OtherFinAidText.enabled=false;
   OtherFinAidText.value = "";
   OtherFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinAidRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinAidRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinAidText.enabled=true;
   OtherFinAidAdd.value = "";
   OtherFinAidText.mandatory = true;
}
if(this.value === null && OtherFinAidAdd.value === null){
   OtherFinAidText.enabled=false;
   OtherFinAidText.value = "";
   OtherFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinAidText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinAidText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidASTable.instanceManager.instanceCount;
var optionVal = FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASOption.value;
var roleVal = FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidASTable.instanceManager.instances[n].FinancialAidASOption.value;
    var roleVal1 = FinancialAidASTable.instanceManager.instances[n].FinancialAidASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASOption.value = null;
     FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASRole.value = null;
     FinancialAidASTable.instanceManager.removeInstance(FinancialAidASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASOption.value = null;
FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASRole.value = null;
FinancialAidASTable.instanceManager.removeInstance(FinancialAidASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Financial Aid",
      section:"FIN_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          FinancialAidASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidASTable.instanceManager.instanceCount;
var optionVal = FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASOption.value;
var roleVal = FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidASTable.instanceManager.instances[n].FinancialAidASOption.value;
    var roleVal1 = FinancialAidASTable.instanceManager.instances[n].FinancialAidASRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASOption.value = null;
     FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASRole.value = null;
     FinancialAidASTable.instanceManager.removeInstance(FinancialAidASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASOption.value = null;
FinancialAidASTable.instanceManager.instances[FinancialAidASTable.instanceIndex].FinancialAidASRole.value = null;
FinancialAidASTable.instanceManager.removeInstance(FinancialAidASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FAASRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FAASRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = FinancialAidASTable.instanceManager.instanceCount;
    var indexValue = FinancialAidASTable.instanceIndex; 

    FinancialAidASTable.instanceManager.instances[indexValue].FinancialAidASOption.value = null;
    FinancialAidASTable.instanceManager.instances[indexValue].FinancialAidASRole.value = null;
    FinancialAidASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FAASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FAASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = FinancialAidASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    FAASTable.FinancialAidASTable.instanceManager.addInstance();
    rowcount = FinancialAidASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Financial Aid",
            section: "FIN_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                FinancialAidASTable.instanceManager.instances[lastRow].FinancialAidASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FAASRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FAASRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = FinancialAidASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    FinancialAidASTable.instanceManager.instances[indexValue].FinancialAidASOption.value = null;
    FinancialAidASTable.instanceManager.instances[indexValue].FinancialAidASRole.value = null;
    FinancialAidASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinAidAdminOtherAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinAidAdminOtherAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   FinAidAdminOtherText.enabled=true;
   FinAidAdminOtherRemove.value = "";
   FinAidAdminOtherText.mandatory = true;
}
if(this.value === null && FinAidAdminOtherRemove.value === null){
   FinAidAdminOtherText.enabled=false;
   FinAidAdminOtherText.value = "";
   FinAidAdminOtherText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinAidAdminOtherRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinAidAdminOtherRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   FinAidAdminOtherText.enabled=true;
   FinAidAdminOtherAdd.value = "";
   FinAidAdminOtherText.mandatory = true;
}
if(this.value === null && FinAidAdminOtherAdd.value === null){
   FinAidAdminOtherText.enabled=false;
   FinAidAdminOtherText.value = "";
   FinAidAdminOtherText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinAidAdminOtherText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinAidAdminOtherText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidRSTable.instanceManager.instanceCount;
var optionVal = FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSOption.value;
var roleVal = FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidRSTable.instanceManager.instances[n].FinancialAidRSOption.value;
    var roleVal1 = FinancialAidRSTable.instanceManager.instances[n].FinancialAidRSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSOption.value = null;
     FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSRole.value = null;
     FinancialAidRSTable.instanceManager.removeInstance(FinancialAidRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSOption.value = null;
FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSRole.value = null;
FinancialAidRSTable.instanceManager.removeInstance(FinancialAidRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Financial Aid",
      section:"FIN_RS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         FinancialAidRSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidRSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidRSTable.instanceManager.instanceCount;
var optionVal = FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSOption.value;
var roleVal = FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidRSTable.instanceManager.instances[n].FinancialAidRSOption.value;
    var roleVal1 = FinancialAidRSTable.instanceManager.instances[n].FinancialAidRSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSOption.value = null;
     FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSRole.value = null;
     FinancialAidRSTable.instanceManager.removeInstance(FinancialAidRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSOption.value = null;
FinancialAidRSTable.instanceManager.instances[FinancialAidRSTable.instanceIndex].FinancialAidRSRole.value = null;
FinancialAidRSTable.instanceManager.removeInstance(FinancialAidRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FARSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FARSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = FinancialAidRSTable.instanceManager.instanceCount;
    var indexValue = FinancialAidRSTable.instanceIndex;

    FinancialAidRSTable.instanceManager.instances[indexValue].FinancialAidRSOption.value = null;
    FinancialAidRSTable.instanceManager.instances[indexValue].FinancialAidRSRole.value = null;
    FinancialAidRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FARSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FARSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = FinancialAidRSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    FARSTable.FinancialAidRSTable.instanceManager.addInstance();
    rowcount = FinancialAidRSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Financial Aid",
            section: "FIN_RS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                FinancialAidRSTable.instanceManager.instances[lastRow].FinancialAidRSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FARSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FARSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = FinancialAidRSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    FinancialAidRSTable.instanceManager.instances[indexValue].FinancialAidRSOption.value = null;
    FinancialAidRSTable.instanceManager.instances[indexValue].FinancialAidRSRole.value = null;
    FinancialAidRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinAidAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinAidAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsFinAidText.enabled=true;
   OtherRecordsFinAidRemove.value = "";
   OtherRecordsFinAidText.mandatory = true;
}
if(this.value === null && OtherRecordsFinAidRemove.value === null){
   OtherRecordsFinAidText.enabled=false;
   OtherRecordsFinAidText.value = "";
   OtherRecordsFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinAidRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinAidRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsFinAidText.enabled=true;
   OtherRecordsFinAidAdd.value = "";
   OtherRecordsFinAidText.mandatory = true;
}
if(this.value === null && OtherRecordsFinAidAdd.value === null){
   OtherRecordsFinAidText.enabled=false;
   OtherRecordsFinAidText.value = "";
   OtherRecordsFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinAidText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinAidText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidCSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidCSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidCSTable.instanceManager.instanceCount;
var optionVal = FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSOption.value;
var roleVal = FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidCSTable.instanceManager.instances[n].FinancialAidCSOption.value;
    var roleVal1 = FinancialAidCSTable.instanceManager.instances[n].FinancialAidCSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSOption.value = null;
     FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSRole.value = null;
     FinancialAidCSTable.instanceManager.removeInstance(FinancialAidCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSOption.value = null;
FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSRole.value = null;
FinancialAidCSTable.instanceManager.removeInstance(FinancialAidCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidCSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidCSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Financial Aid",
      section:"FIN_CS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
        FinancialAidCSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidCSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidCSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidCSTable.instanceManager.instanceCount;
var optionVal = FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSOption.value;
var roleVal = FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidCSTable.instanceManager.instances[n].FinancialAidCSOption.value;
    var roleVal1 = FinancialAidCSTable.instanceManager.instances[n].FinancialAidCSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSOption.value = null;
     FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSRole.value = null;
     FinancialAidCSTable.instanceManager.removeInstance(FinancialAidCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSOption.value = null;
FinancialAidCSTable.instanceManager.instances[FinancialAidCSTable.instanceIndex].FinancialAidCSRole.value = null;
FinancialAidCSTable.instanceManager.removeInstance(FinancialAidCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FACSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FACSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = FinancialAidCSTable.instanceManager.instanceCount;
    var indexValue = FinancialAidCSTable.instanceIndex; 

    FinancialAidCSTable.instanceManager.instances[indexValue].FinancialAidCSOption.value = null;
    FinancialAidCSTable.instanceManager.instances[indexValue].FinancialAidCSRole.value = null;
    FinancialAidCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FACSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FACSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = FinancialAidCSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    FACSTable.FinancialAidCSTable.instanceManager.addInstance();
    rowcount = FinancialAidCSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Financial Aid",
            section: "FIN_CS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                FinancialAidCSTable.instanceManager.instances[lastRow].FinancialAidCSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FACSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FACSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){

    var rowCountToRemove = FinancialAidCSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    FinancialAidCSTable.instanceManager.instances[indexValue].FinancialAidCSOption.value = null;
    FinancialAidCSTable.instanceManager.instances[indexValue].FinancialAidCSRole.value = null;
    FinancialAidCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinancialText.enabled=true;
   OtherFinancialRemove.value = "";
   OtherFinancialText.mandatory = true;
}
if(this.value === null && OtherFinancialRemove.value === null){
   OtherFinancialText.enabled=false;
   OtherFinancialText.value = "";
   OtherFinancialText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinancialText.enabled=true;
   OtherFinancialAdd.value = "";
   OtherFinancialText.mandatory = true;
}
if(this.value === null && OtherFinancialAdd.value === null){
   OtherFinancialText.enabled=false;
   OtherFinancialText.value = "";
   OtherFinancialText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidSFSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidSFSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidSFSTable.instanceManager.instanceCount;
var optionVal = FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSOption.value;
var roleVal = FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidSFSTable.instanceManager.instances[n].FinancialAidSFSOption.value;
    var roleVal1 = FinancialAidSFSTable.instanceManager.instances[n].FinancialAidSFSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSOption.value = null;
     FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSRole.value = null;
     FinancialAidSFSTable.instanceManager.removeInstance(FinancialAidSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSOption.value = null;
FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSRole.value = null;
FinancialAidSFSTable.instanceManager.removeInstance(FinancialAidSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidSFSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidSFSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTimer"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Financial Aid",
      section:"FIN_SFS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         FinancialAidSFSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidSFSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidSFSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidSFSTable.instanceManager.instanceCount;
var optionVal = FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSOption.value;
var roleVal = FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidSFSTable.instanceManager.instances[n].FinancialAidSFSOption.value;
    var roleVal1 = FinancialAidSFSTable.instanceManager.instances[n].FinancialAidSFSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSOption.value = null;
     FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSRole.value = null;
     FinancialAidSFSTable.instanceManager.removeInstance(FinancialAidSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSOption.value = null;
FinancialAidSFSTable.instanceManager.instances[FinancialAidSFSTable.instanceIndex].FinancialAidSFSRole.value = null;
FinancialAidSFSTable.instanceManager.removeInstance(FinancialAidSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FASFSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FASFSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = FinancialAidSFSTable.instanceManager.instanceCount;
    var indexValue = FinancialAidSFSTable.instanceIndex;

    FinancialAidSFSTable.instanceManager.instances[indexValue].FinancialAidSFSOption.value = null;
    FinancialAidSFSTable.instanceManager.instances[indexValue].FinancialAidSFSRole.value = null;
    FinancialAidSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FASFSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FASFSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = FinancialAidSFSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    FASFSTable.FinancialAidSFSTable.instanceManager.addInstance();
    rowcount = FinancialAidSFSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Financial Aid",
            section: "FIN_SFS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                FinancialAidSFSTable.instanceManager.instances[lastRow].FinancialAidSFSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FASFSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FASFSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = FinancialAidSFSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    FinancialAidSFSTable.instanceManager.instances[indexValue].FinancialAidSFSOption.value = null;
    FinancialAidSFSTable.instanceManager.instances[indexValue].FinancialAidSFSRole.value = null;
    FinancialAidSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStuFinAidAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStuFinAidAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStuFinAidText.enabled=true;
   OtherStuFinAidRemove.value = "";
   OtherStuFinAidText.mandatory = true;
}
if(this.value === null && OtherStuFinAidRemove.value === null){
   OtherStuFinAidText.enabled=false;
   OtherStuFinAidText.value = "";
   OtherStuFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStuFinAidRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStuFinAidRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStuFinAidText.enabled=true;
   OtherStuFinAidAdd.value = "";
   OtherStuFinAidText.mandatory = true;
}
if(this.value === null && OtherStuFinAidAdd.value === null){
   OtherStuFinAidText.enabled=false;
   OtherStuFinAidText.value = "";
   OtherStuFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStuFinAidText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStuFinAidText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidMQOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidMQOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var rowcount1 = FinancialAidMQTable.instanceManager.instanceCount;
var optionVal = FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQOption.value;
var roleVal = FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidMQTable.instanceManager.instances[n].FinancialAidMQOption.value;
    var roleVal1 = FinancialAidMQTable.instanceManager.instances[n].FinancialAidMQRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQOption.value = null;
     FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQRole.value = null;
     FinancialAidMQTable.instanceManager.removeInstance(FinancialAidMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQOption.value = null;
FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQRole.value = null;
FinancialAidMQTable.instanceManager.removeInstance(FinancialAidMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidMQRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidMQRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Financial Aid",
      section:"FIN_MQ",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         FinancialAidMQRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidMQRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FinancialAidMQRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = FinancialAidMQTable.instanceManager.instanceCount;
var optionVal = FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQOption.value;
var roleVal = FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinancialAidMQTable.instanceManager.instances[n].FinancialAidMQOption.value;
    var roleVal1 = FinancialAidMQTable.instanceManager.instances[n].FinancialAidMQRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinancialAidMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQOption.value = null;
     FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQRole.value = null;
     FinancialAidMQTable.instanceManager.removeInstance(FinancialAidMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQOption.value = null;
FinancialAidMQTable.instanceManager.instances[FinancialAidMQTable.instanceIndex].FinancialAidMQRole.value = null;
FinancialAidMQTable.instanceManager.removeInstance(FinancialAidMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FAMQRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FAMQRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = FinancialAidMQTable.instanceManager.instanceCount;
    var indexValue = FinancialAidMQTable.instanceIndex; 

    FinancialAidMQTable.instanceManager.instances[indexValue].FinancialAidMQOption.value = null;
    FinancialAidMQTable.instanceManager.instances[indexValue].FinancialAidMQRole.value = null;
    FinancialAidMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FAMQAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FAMQAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = FinancialAidMQTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    FAMQTable.FinancialAidMQTable.instanceManager.addInstance();
    rowcount = FinancialAidMQTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Financial Aid",
            section: "FIN_MQ",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                FinancialAidMQTable.instanceManager.instances[lastRow].FinancialAidMQRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_FAMQRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_FAMQRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = FinancialAidMQTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    FinancialAidMQTable.instanceManager.instances[indexValue].FinancialAidMQOption.value = null;
    FinancialAidMQTable.instanceManager.instances[indexValue].FinancialAidMQRole.value = null;
    FinancialAidMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinMyQueryAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinMyQueryAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinMyQueryText.enabled=true;
   OtherFinMyQueryRemove.value = "";
   OtherFinMyQueryText.mandatory = true;
}
if(this.value === null && OtherFinMyQueryRemove.value === null){
   OtherFinMyQueryText.enabled=false;
   OtherFinMyQueryText.value = "";
   OtherFinMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinMyQueryRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinMyQueryRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinMyQueryText.enabled=true;
   OtherFinMyQueryAdd.value = "";
   OtherFinMyQueryText.mandatory = true;
}
if(this.value === null && OtherFinMyQueryAdd.value === null){
   OtherFinMyQueryText.enabled=false;
   OtherFinMyQueryText.value = "";
   OtherFinMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinMyQueryText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinMyQueryText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init02
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init02 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialsRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialsRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Student Financials",
      section:"SF_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
          StudentFinancialsRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinAidAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinAidAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudentFinAidText.enabled=true;
   OtherStudentFinAidRemove.value = "";
   OtherStudentFinAidText.mandatory = true;
}
if(this.value === null && OtherStudentFinAidRemove.value === null){
   OtherStudentFinAidText.enabled=false;
   OtherStudentFinAidText.value = "";
   OtherStudentFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinAidRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinAidRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudentFinAidText.enabled=true;
   OtherStudentFinAidAdd.value = "";
   OtherStudentFinAidText.mandatory = true;
}
if(this.value === null && OtherStudentFinAidAdd.value === null){
   OtherStudentFinAidText.enabled=false;
   OtherStudentFinAidText.value = "";
   OtherStudentFinAidText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinAidText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudentFinAidText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialASTable.instanceManager.instanceCount;
var optionVal = StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASOption.value;
var roleVal = StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialASTable.instanceManager.instances[n].StudentFinancialASOption.value;
    var roleVal1 = StudentFinancialASTable.instanceManager.instances[n].StudentFinancialASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASOption.value = null;
     StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASRole.value = null;
     StudentFinancialASTable.instanceManager.removeInstance(StudentFinancialASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASOption.value = null;
StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASRole.value = null;
StudentFinancialASTable.instanceManager.removeInstance(StudentFinancialASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Student Financials",
      section:"SF_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         StudentFinancialASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialASTable.instanceManager.instanceCount;
var optionVal = StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASOption.value;
var roleVal = StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialASTable.instanceManager.instances[n].StudentFinancialASOption.value;
    var roleVal1 = StudentFinancialASTable.instanceManager.instances[n].StudentFinancialASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASOption.value = null;
     StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASRole.value = null;
     StudentFinancialASTable.instanceManager.removeInstance(StudentFinancialASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASOption.value = null;
StudentFinancialASTable.instanceManager.instances[StudentFinancialASTable.instanceIndex].StudentFinancialASRole.value = null;
StudentFinancialASTable.instanceManager.removeInstance(StudentFinancialASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialASTable.instanceManager.instanceCount;
    var indexValue = StudentFinancialASTable.instanceIndex;

    StudentFinancialASTable.instanceManager.instances[indexValue].StudentFinancialASOption.value = null;
    StudentFinancialASTable.instanceManager.instances[indexValue].StudentFinancialASRole.value = null;
    StudentFinancialASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = StudentFinancialASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SFASTable.StudentFinancialASTable.instanceManager.addInstance();
    rowcount = StudentFinancialASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Student Financials",
            section: "SF_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                StudentFinancialASTable.instanceManager.instances[lastRow].StudentFinancialASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    StudentFinancialASTable.instanceManager.instances[indexValue].StudentFinancialASOption.value = null;
    StudentFinancialASTable.instanceManager.instances[indexValue].StudentFinancialASRole.value = null;
    StudentFinancialASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminssionStudFinAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminssionStudFinAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherAdminssionStudFinText.enabled=true;
   OtherAdminssionStudFinRemove.value = "";
   OtherAdminssionStudFinText.mandatory = true;
}
if(this.value === null && OtherAdminssionStudFinRemove.value === null){
   OtherAdminssionStudFinText.enabled=false;
   OtherAdminssionStudFinText.value = "";
   OtherAdminssionStudFinText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminssionStudFinRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminssionStudFinRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherAdminssionStudFinText.enabled=true;
   OtherAdminssionStudFinAdd.value = "";
   OtherAdminssionStudFinText.mandatory = true;
}
if(this.value === null && OtherAdminssionStudFinRemove.value === null){
   OtherAdminssionStudFinText.enabled=false;
   OtherAdminssionStudFinText.value = "";
   OtherAdminssionStudFinText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminssionStudFinText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherAdminssionStudFinText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialRSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialRSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialRSTable.instanceManager.instanceCount;
var optionVal = StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSOption.value;
var roleVal = StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialRSTable.instanceManager.instances[n].StudentFinancialRSOption.value;
    var roleVal1 = StudentFinancialRSTable.instanceManager.instances[n].StudentFinancialRSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSOption.value = null;
     StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSRole.value = null;
     StudentFinancialRSTable.instanceManager.removeInstance(StudentFinancialRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSOption.value = null;
StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSRole.value = null;
StudentFinancialRSTable.instanceManager.removeInstance(StudentFinancialRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialRSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialRSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Student Financials",
      section:"SF_RS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         StudentFinancialRSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialRSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialRSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialRSTable.instanceManager.instanceCount;
var optionVal = StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSOption.value;
var roleVal = StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialRSTable.instanceManager.instances[n].StudentFinancialRSOption.value;
    var roleVal1 = StudentFinancialRSTable.instanceManager.instances[n].StudentFinancialRSRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSOption.value = null;
     StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSRole.value = null;
     StudentFinancialRSTable.instanceManager.removeInstance(StudentFinancialRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSOption.value = null;
StudentFinancialRSTable.instanceManager.instances[StudentFinancialRSTable.instanceIndex].StudentFinancialRSRole.value = null;
StudentFinancialRSTable.instanceManager.removeInstance(StudentFinancialRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFRSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFRSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialRSTable.instanceManager.instanceCount;
    var indexValue = StudentFinancialRSTable.instanceIndex;

    StudentFinancialRSTable.instanceManager.instances[indexValue].StudentFinancialRSOption.value = null;
    StudentFinancialRSTable.instanceManager.instances[indexValue].StudentFinancialRSRole.value = null;
    StudentFinancialRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFRSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFRSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = StudentFinancialRSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SFRSTable.StudentFinancialRSTable.instanceManager.addInstance();
    rowcount = StudentFinancialRSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Student Financials",
            section: "SF_RS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                StudentFinancialRSTable.instanceManager.instances[lastRow].StudentFinancialRSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFRSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFRSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialRSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    StudentFinancialRSTable.instanceManager.instances[indexValue].StudentFinancialRSOption.value = null;
    StudentFinancialRSTable.instanceManager.instances[indexValue].StudentFinancialRSRole.value = null;
    StudentFinancialRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinStudAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinStudAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsFinStudText.enabled=true;
   OtherRecordsFinStudRemove.value = "";
   OtherRecordsFinStudText.mandatory = true;
}
if(this.value === null && OtherRecordsFinStudRemove.value === null){
   OtherRecordsFinStudText.enabled=false;
   OtherRecordsFinStudText.value = "";
   OtherRecordsFinStudText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinStudRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinStudRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsFinStudText.enabled=true;
   OtherRecordsFinStudAdd.value = "";
   OtherRecordsFinStudText.mandatory = true;
}
if(this.value === null && OtherRecordsFinStudAdd.value === null){
   OtherRecordsFinStudText.enabled=false;
   OtherRecordsFinStudText.value = "";
   OtherRecordsFinStudText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinStudText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsFinStudText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialFASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialFASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialFASTable.instanceManager.instanceCount;
var optionVal = StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASOption.value;
var roleVal = StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialFASTable.instanceManager.instances[n].StudentFinancialFASOption.value;
    var roleVal1 = StudentFinancialFASTable.instanceManager.instances[n].StudentFinancialFASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialFASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASOption.value = null;
     StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASRole.value = null;
     StudentFinancialFASTable.instanceManager.removeInstance(StudentFinancialFASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASOption.value = null;
StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASRole.value = null;
StudentFinancialFASTable.instanceManager.removeInstance(StudentFinancialFASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialFASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialFASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Student Financials",
      section:"SF_FAS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         StudentFinancialFASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialFASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialFASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialFASTable.instanceManager.instanceCount;
var optionVal = StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASOption.value;
var roleVal = StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialFASTable.instanceManager.instances[n].StudentFinancialFASOption.value;
    var roleVal1 = StudentFinancialFASTable.instanceManager.instances[n].StudentFinancialFASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialFASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASOption.value = null;
     StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASRole.value = null;
     StudentFinancialFASTable.instanceManager.removeInstance(StudentFinancialFASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASOption.value = null;
StudentFinancialFASTable.instanceManager.instances[StudentFinancialFASTable.instanceIndex].StudentFinancialFASRole.value = null;
StudentFinancialFASTable.instanceManager.removeInstance(StudentFinancialFASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click01 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialFASTable.instanceManager.instanceCount;
    var indexValue = StudentFinancialFASTable.instanceIndex;

    StudentFinancialFASTable.instanceManager.instances[indexValue].StudentFinancialFASOption.value = null;
    StudentFinancialFASTable.instanceManager.instances[indexValue].StudentFinancialFASRole.value = null;
    StudentFinancialFASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASAddButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASAddButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = StudentFinancialFASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SFFASTable.StudentFinancialFASTable.instanceManager.addInstance();
    rowcount = StudentFinancialFASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Student Financials",
            section: "SF_FAS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                StudentFinancialFASTable.instanceManager.instances[lastRow].StudentFinancialFASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click02
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFASRemoveButton_click02 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialFASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    StudentFinancialFASTable.instanceManager.instances[indexValue].StudentFinancialFASOption.value = null;
    StudentFinancialFASTable.instanceManager.instances[indexValue].StudentFinancialFASRole.value = null;
    StudentFinancialFASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialStudAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialStudAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinancialStudText.enabled=true;
   OtherFinancialStudRemove.value = "";
   OtherFinancialStudText.mandatory = true;
}
if(this.value === null && OtherFinancialStudRemove.value === null){
   OtherFinancialStudText.enabled=false;
   OtherFinancialStudText.value = "";
   OtherFinancialStudText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialStudRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialStudRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherFinancialStudText.enabled=true;
   OtherFinancialStudAdd.value = "";
   OtherFinancialStudText.mandatory = true;
}
if(this.value === null && OtherFinancialStudAdd.value === null){
   OtherFinancialStudText.enabled=false;
   OtherFinancialStudText.value = "";
   OtherFinancialStudText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialStudText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherFinancialStudText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialCSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialCSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialCSTable.instanceManager.instanceCount;
var optionVal = StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSOption.value;
var roleVal = StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialCSTable.instanceManager.instances[n].StudentFinancialCSOption.value;
    var roleVal1 = StudentFinancialCSTable.instanceManager.instances[n].StudentFinancialCSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSOption.value = null;
     StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSRole.value = null;
     StudentFinancialCSTable.instanceManager.removeInstance(StudentFinancialCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSOption.value = null;
StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSRole.value = null;
StudentFinancialCSTable.instanceManager.removeInstance(StudentFinancialCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialCSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialCSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Student Financials",
      section:"SF_CS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         StudentFinancialCSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialCSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_StudentFinancialCSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = StudentFinancialCSTable.instanceManager.instanceCount;
var optionVal = StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSOption.value;
var roleVal = StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = StudentFinancialCSTable.instanceManager.instances[n].StudentFinancialCSOption.value;
    var roleVal1 = StudentFinancialCSTable.instanceManager.instances[n].StudentFinancialCSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && StudentFinancialCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSOption.value = null;
     StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSRole.value = null;
     StudentFinancialCSTable.instanceManager.removeInstance(StudentFinancialCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSOption.value = null;
StudentFinancialCSTable.instanceManager.instances[StudentFinancialCSTable.instanceIndex].StudentFinancialCSRole.value = null;
StudentFinancialCSTable.instanceManager.removeInstance(StudentFinancialCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFCSRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFCSRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialCSTable.instanceManager.instanceCount;
    var indexValue = StudentFinancialCSTable.instanceIndex;

    StudentFinancialCSTable.instanceManager.instances[indexValue].StudentFinancialCSOption.value = null;
    StudentFinancialCSTable.instanceManager.instances[indexValue].StudentFinancialCSRole.value = null;
    StudentFinancialCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFCSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFCSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = StudentFinancialCSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    SFCSTable.StudentFinancialCSTable.instanceManager.addInstance();
    rowcount = StudentFinancialCSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Student Financials",
            section: "SF_CS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                StudentFinancialCSTable.instanceManager.instances[lastRow].StudentFinancialCSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SFCSRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SFCSRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = StudentFinancialCSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    StudentFinancialCSTable.instanceManager.instances[indexValue].StudentFinancialCSOption.value = null;
    StudentFinancialCSTable.instanceManager.instances[indexValue].StudentFinancialCSRole.value = null;
    StudentFinancialCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinCurriculumSecAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinCurriculumSecAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudFinCurriculumSecText.enabled=true;
   OtherStudFinCurriculumSecRemove.value = "";
   OtherStudFinCurriculumSecText.mandatory = true;
}
if(this.value === null && OtherStudFinCurriculumSecRemove.value === null){
   OtherStudFinCurriculumSecText.enabled=false;
   OtherStudFinCurriculumSecText.value = "";
   OtherStudFinCurriculumSecText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinCurriculumSecRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinCurriculumSecRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudFinCurriculumSecText.enabled=true;
   OtherStudFinCurriculumSecAdd.value = "";
   OtherStudFinCurriculumSecText.mandatory = true;
}
if(this.value === null && OtherStudFinCurriculumSecAdd.value === null){
   OtherStudFinCurriculumSecText.enabled=false;
   OtherStudFinCurriculumSecText.value = "";
   OtherStudFinCurriculumSecText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinCurriculumSecText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinCurriculumSecText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init03
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystComments_init03 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdASTable.instanceManager.instanceCount;
var optionVal = ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASOption.value;
var roleVal = ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdASTable.instanceManager.instances[n].ExdASOption.value;
    var roleVal1 = ExdASTable.instanceManager.instances[n].ExdASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASOption.value = null;
     ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASRole.value = null;
     ExdASTable.instanceManager.removeInstance(ExdASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASOption.value = null;
ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASRole.value = null;
ExdASTable.instanceManager.removeInstance(ExdASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Extended Ed",
      section:"Exd_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         ExdASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdASTable.instanceManager.instanceCount;
var optionVal = ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASOption.value;
var roleVal = ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdASTable.instanceManager.instances[n].ExdASOption.value;
    var roleVal1 = ExdASTable.instanceManager.instances[n].ExdASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASOption.value = null;
     ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASRole.value = null;
     ExdASTable.instanceManager.removeInstance(ExdASTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASOption.value = null;
ExdASTable.instanceManager.instances[ExdASTable.instanceIndex].ExdASRole.value = null;
ExdASTable.instanceManager.removeInstance(ExdASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EEASRemoveButtons_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EEASRemoveButtons_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdASTable.instanceManager.instanceCount;
    var indexValue = ExdASTable.instanceIndex;

    ExdASTable.instanceManager.instances[indexValue].ExdASOption.value = null;
    ExdASTable.instanceManager.instances[indexValue].ExdASRole.value = null;
    ExdASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EEASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EEASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = ExdASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    EASTable.ExdASTable.instanceManager.addInstance();
    rowcount = ExdASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Extended Ed",
            section: "Exd_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                ExdASTable.instanceManager.instances[lastRow].ExdASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EEASRemoveButtons_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EEASRemoveButtons_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    ExdASTable.instanceManager.instances[indexValue].ExdASOption.value = null;
    ExdASTable.instanceManager.instances[indexValue].ExdASRole.value = null;
    ExdASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherExtEdText.enabled=true;
   OtherExtEdRemove.value = "";
   OtherExtEdText.mandatory = true;
}
if(this.value === null && OtherExtEdRemove.value === null){
   OtherExtEdText.enabled=false;
   OtherExtEdText.value = "";
   OtherExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherExtEdText.enabled=true;
   OtherExtEdAdd.value = "";
   OtherExtEdText.mandatory = true;
}
if(this.value === null && OtherExtEdAdd.value === null){
   OtherExtEdText.enabled=false;
   OtherExtEdText.value = "";
   OtherExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdCSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdCSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdCSTable.instanceManager.instanceCount;
var optionVal = ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value;
var roleVal = ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdCSTable.instanceManager.instances[n].ExdCSOption.value;
    var roleVal1 = ExdCSTable.instanceManager.instances[n].ExdCSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value = null;
     ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSRole.value = null;
     ExdCSTable.instanceManager.removeInstance(ExdCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value = null;
ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value = null;
ExdCSTable.instanceManager.removeInstance(ExdCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdCSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdCSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Extended Ed",
      section:"Exd_CS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         ExdCSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdCSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdCSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdCSTable.instanceManager.instanceCount;
var optionVal = ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value;
var roleVal = ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdCSTable.instanceManager.instances[n].ExdCSOption.value;
    var roleVal1 = ExdCSTable.instanceManager.instances[n].ExdCSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdCSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value = null;
     ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSRole.value = null;
     ExdCSTable.instanceManager.removeInstance(ExdCSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value = null;
ExdCSTable.instanceManager.instances[ExdCSTable.instanceIndex].ExdCSOption.value = null;
ExdCSTable.instanceManager.removeInstance(ExdCSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EECSRemoveButtons_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EECSRemoveButtons_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdCSTable.instanceManager.instanceCount;
    var indexValue = ExdCSTable.instanceIndex;

    ExdCSTable.instanceManager.instances[indexValue].ExdCSOption.value = null;
    ExdCSTable.instanceManager.instances[indexValue].ExdCSRole.value = null;
    ExdCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EECSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EECSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = ExdCSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ECSTable.ExdCSTable.instanceManager.addInstance();
    rowcount = ExdASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Extended Ed",
            section: "Exd_CS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                ExdCSTable.instanceManager.instances[lastRow].ExdCSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EECSRemoveButtons_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EECSRemoveButtons_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdCSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    ExdCSTable.instanceManager.instances[indexValue].ExdCSOption.value = null;
    ExdCSTable.instanceManager.instances[indexValue].ExdCSRole.value = null;
    ExdCSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValExtEdAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValExtEdAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherValExtEdText.enabled=true;
   OtherValExtEdRemove.value = "";
   OtherValExtEdText.mandatory = true;
}
if(this.value === null && OtherValExtEdRemove.value === null){
   OtherValExtEdText.enabled=false;
   OtherValExtEdText.value = "";
   OtherValExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValExtEdRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValExtEdRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherValExtEdText.enabled=true;
   OtherValExtEdAdd.value = "";
   OtherValExtEdText.mandatory = true;
}
if(this.value === null && OtherValExtEdAdd.value === null){
   OtherValExtEdText.enabled=false;
   OtherValExtEdText.value = "";
   OtherValExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValExtEdText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValExtEdText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdRSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdRSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdRSTable.instanceManager.instanceCount;
var optionVal = ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSOption.value;
var roleVal = ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdRSTable.instanceManager.instances[n].ExdRSOption.value;
    var roleVal1 = ExdRSTable.instanceManager.instances[n].ExdRSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSOption.value = null;
     ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSRole.value = null;
     ExdRSTable.instanceManager.removeInstance(ExdRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSOption.value = null;
ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSRole.value = null;
ExdRSTable.instanceManager.removeInstance(ExdRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdRSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdRSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Extended Ed",
      section:"Exd_RS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         ExdRSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdRSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdRSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdRSTable.instanceManager.instanceCount;
var optionVal = ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSOption.value;
var roleVal = ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdRSTable.instanceManager.instances[n].ExdRSOption.value;
    var roleVal1 = ExdRSTable.instanceManager.instances[n].ExdRSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSOption.value = null;
     ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSRole.value = null;
     ExdRSTable.instanceManager.removeInstance(ExdRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSOption.value = null;
ExdRSTable.instanceManager.instances[ExdRSTable.instanceIndex].ExdRSRole.value = null;
ExdRSTable.instanceManager.removeInstance(ExdRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EERSRemoveButtons_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EERSRemoveButtons_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdRSTable.instanceManager.instanceCount;
    var indexValue = ExdRSTable.instanceIndex;

    ExdRSTable.instanceManager.instances[indexValue].ExdRSOption.value = null;
    ExdRSTable.instanceManager.instances[indexValue].ExdRSRole.value = null;
    ExdRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EERSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EERSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = ExdRSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ERSTable.ExdRSTable.instanceManager.addInstance();
    rowcount = ExdRSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Extended Ed",
            section: "Exd_RS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                ExdRSTable.instanceManager.instances[lastRow].ExdRSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EERSRemoveButtons_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EERSRemoveButtons_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdRSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    ExdRSTable.instanceManager.instances[indexValue].ExdRSOption.value = null;
    ExdRSTable.instanceManager.instances[indexValue].ExdRSRole.value = null;
    ExdRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsExtEdAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsExtEdAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsExtEdText.enabled=true;
   OtherRecordsExtEdRemove.value = "";
   OtherRecordsExtEdText.mandatory = true;
}
if(this.value === null && OtherRecordsExtEdRemove.value === null){
   OtherRecordsExtEdText.enabled=false;
   OtherRecordsExtEdText.value = "";
   OtherRecordsExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsExtEdRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsExtEdRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherRecordsExtEdText.enabled=true;
   OtherRecordsExtEdAdd.value = "";
   OtherRecordsExtEdText.mandatory = true;
}
if(this.value === null && OtherRecordsExtEdAdd.value === null){
   OtherRecordsExtEdText.enabled=false;
   OtherRecordsExtEdText.value = "";
   OtherRecordsExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsExtEdText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherRecordsExtEdText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSevisOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSevisOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdSevisTable.instanceManager.instanceCount;
var optionVal = ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisOption.value;
var roleVal = ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdSevisTable.instanceManager.instances[n].ExdSevisOption.value;
    var roleVal1 = ExdSevisTable.instanceManager.instances[n].ExdSevisRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdSevisTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisOption.value = null;
     ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisRole.value = null;
     ExdSevisTable.instanceManager.removeInstance(ExdSevisTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisOption.value = null;
ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisRole.value = null;
ExdSevisTable.instanceManager.removeInstance(ExdSevisTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSevisRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSevisRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Extended Ed",
      section:"Exd_Sevis",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         ExdSevisRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSevisRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSevisRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdSevisTable.instanceManager.instanceCount;
var optionVal = ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisOption.value;
var roleVal = ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdSevisTable.instanceManager.instances[n].ExdSevisOption.value;
    var roleVal1 = ExdSevisTable.instanceManager.instances[n].ExdSevisRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdSevisTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisOption.value = null;
     ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisRole.value = null;
     ExdSevisTable.instanceManager.removeInstance(ExdSevisTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisOption.value = null;
ExdSevisTable.instanceManager.instances[ExdSevisTable.instanceIndex].ExdSevisRole.value = null;
ExdSevisTable.instanceManager.removeInstance(ExdSevisTable.instanceIndex);
fcrValidation = false;
break;
}
}
}


        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EESEVISRemoveButtons_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EESEVISRemoveButtons_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole") {

    var rowCountToRemove = ExdSevisTable.instanceManager.instanceCount;
    var indexValue = ExdSevisTable.instanceIndex; 

    ExdSevisTable.instanceManager.instances[indexValue].ExdSevisOption.value = null;
    ExdSevisTable.instanceManager.instances[indexValue].ExdSevisRole.value = null;
    ExdSevisTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EESEVISAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EESEVISAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = ExdSevisTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ESevisTable.ExdSevisTable.instanceManager.addInstance();
    rowcount = ExdSevisTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Extended Ed",
            section: "Exd_Sevis",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                ExdSevisTable.instanceManager.instances[lastRow].ExdSevisRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EESEVISRemoveButtons_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EESEVISRemoveButtons_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole") {

    var rowCountToRemove = ExdSevisTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    ExdSevisTable.instanceManager.instances[indexValue].ExdSevisOption.value = null;
    ExdSevisTable.instanceManager.instances[indexValue].ExdSevisRole.value = null;
    ExdSevisTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValSEVISExtEdAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValSEVISExtEdAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherValSEVISExtEdText.enabled=true;
   OtherValSEVISExtEdRemove.value = "";
   OtherValSEVISExtEdText.mandatory = true;
}
if(this.value === null && OtherValSEVISExtEdRemove.value === null){
   OtherValSEVISExtEdText.enabled=false;
   OtherValSEVISExtEdText.value = "";
   OtherValSEVISExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValSEVISExtEdRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValSEVISExtEdRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherValSEVISExtEdText.enabled=true;
   OtherValSEVISExtEdAdd.value = "";
   OtherValSEVISExtEdText.mandatory = true;
}
if(this.value === null && OtherValSEVISExtEdAdd.value === null){
   OtherValSEVISExtEdText.enabled=false;
   OtherValSEVISExtEdText.value = "";
   OtherValSEVISExtEdText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValSEVISExtEdText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherValSEVISExtEdText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSFSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSFSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdSFSTable.instanceManager.instanceCount;
var optionVal = ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSOption.value;
var roleVal = ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdSFSTable.instanceManager.instances[n].ExdSFSOption.value;
    var roleVal1 = ExdSFSTable.instanceManager.instances[n].ExdSFSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSOption.value = null;
     ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSRole.value = null;
     ExdSFSTable.instanceManager.removeInstance(ExdSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSOption.value = null;
ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSRole.value = null;
ExdSFSTable.instanceManager.removeInstance(ExdSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSFSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSFSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Extended Ed",
      section:"Exd_SFS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
       ExdSFSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSFSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdSFSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdSFSTable.instanceManager.instanceCount;
var optionVal = ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSOption.value;
var roleVal = ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdSFSTable.instanceManager.instances[n].ExdSFSOption.value;
    var roleVal1 = ExdSFSTable.instanceManager.instances[n].ExdSFSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSOption.value = null;
     ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSRole.value = null;
     ExdSFSTable.instanceManager.removeInstance(ExdSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSOption.value = null;
ExdSFSTable.instanceManager.instances[ExdSFSTable.instanceIndex].ExdSFSRole.value = null;
ExdSFSTable.instanceManager.removeInstance(ExdSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EESFSRemoveButtons_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EESFSRemoveButtons_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdSFSTable.instanceManager.instanceCount;
    var indexValue = ExdSFSTable.instanceIndex;

    ExdSFSTable.instanceManager.instances[indexValue].ExdSFSOption.value = null;
    ExdSFSTable.instanceManager.instances[indexValue].ExdSFSRole.value = null;
    ExdSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EESFSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EESFSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = ExdSFSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    ESFSTable.ExdSFSTable.instanceManager.addInstance();
    rowcount = ExdSFSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Extended Ed",
            section: "Exd_SFS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                ExdSFSTable.instanceManager.instances[lastRow].ExdSFSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EESFSRemoveButtons_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EESFSRemoveButtons_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = ExdSFSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    ExdSFSTable.instanceManager.instances[indexValue].ExdSFSOption.value = null;
    ExdSFSTable.instanceManager.instances[indexValue].ExdSFSRole.value = null;
    ExdSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdStudFinAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdStudFinAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherExtEdStudFinText.enabled=true;
   OtherExtEdStudFinRemove.value = "";
   OtherExtEdStudFinText.mandatory = true;
}
if(this.value === null && OtherExtEdStudFinRemove.value === null){
   OtherExtEdStudFinText.enabled=false;
   OtherExtEdStudFinText.value = "";
   OtherExtEdStudFinText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdStudFinRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdStudFinRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherExtEdStudFinText.enabled=true;
   OtherExtEdStudFinAdd.value = "";
   OtherExtEdStudFinText.mandatory = true;
}
if(this.value === null && OtherExtEdStudFinAdd.value === null){
   OtherExtEdStudFinText.enabled=false;
   OtherExtEdStudFinText.value = "";
   OtherExtEdStudFinText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdStudFinText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdStudFinText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinancialAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinancialAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudFinancialText.enabled=true;
   OtherStudFinancialRemove.value = "";
   OtherStudFinancialText.mandatory = true;
}
if(this.value === null && OtherStudFinancialRemove.value === null){
   OtherStudFinancialText.enabled=false;
   OtherStudFinancialText.value = "";
   OtherStudFinancialText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinancialRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinancialRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherStudFinancialText.enabled=true;
   OtherStudFinancialAdd.value = "";
   OtherStudFinancialText.mandatory = true;
}
if(this.value === null && OtherStudFinancialAdd.value === null){
   OtherStudFinancialText.enabled=false;
   OtherStudFinancialText.value = "";
   OtherStudFinancialText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinancialText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherStudFinancialText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdMQOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdMQOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdMQTable.instanceManager.instanceCount;
var optionVal = ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQOption.value;
var roleVal = ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdMQTable.instanceManager.instances[n].ExdMQOption.value;
    var roleVal1 = ExdMQTable.instanceManager.instances[n].ExdMQRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQOption.value = null;
     ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQRole.value = null;
     ExdMQTable.instanceManager.removeInstance(ExdMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQOption.value = null;
ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQRole.value = null;
ExdMQTable.instanceManager.removeInstance(ExdMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdMQRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdMQRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Extended Ed",
      section:"Exd_MQ",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         ExdMQRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdMQRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExdMQRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = ExdMQTable.instanceManager.instanceCount;
var optionVal = ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQOption.value;
var roleVal = ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = ExdMQTable.instanceManager.instances[n].ExdMQOption.value;
    var roleVal1 = ExdMQTable.instanceManager.instances[n].ExdMQRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && ExdMQTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQOption.value = null;
     ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQRole.value = null;
     ExdMQTable.instanceManager.removeInstance(ExdMQTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQOption.value = null;
ExdMQTable.instanceManager.instances[ExdMQTable.instanceIndex].ExdMQRole.value = null;
ExdMQTable.instanceManager.removeInstance(ExdMQTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_headerItem16651516212631665151621665_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_headerItem16651516212631665151621665_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole") {

    var rowCountToRemove = ExdMQTable.instanceManager.instanceCount;
    var indexValue = ExdMQTable.instanceIndex;

    ExdMQTable.instanceManager.instances[indexValue].ExdMQOption.value = null;
    ExdMQTable.instanceManager.instances[indexValue].ExdMQRole.value = null;
    ExdMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EEMQAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EEMQAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = ExdMQTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    EMQTable.ExdMQTable.instanceManager.addInstance();
    rowcount = ExdMQTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "Extended Ed",
            section: "Exd_MQ",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                ExdMQTable.instanceManager.instances[lastRow].ExdMQRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EEMQRemoveButtons_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EEMQRemoveButtons_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole") {

    var rowCountToRemove = ExdMQTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    ExdMQTable.instanceManager.instances[indexValue].ExdMQOption.value = null;
    ExdMQTable.instanceManager.instances[indexValue].ExdMQRole.value = null;
    ExdMQTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdMyQueryAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdMyQueryAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherExtEdMyQueryText.enabled=true;
   OtherExtEdMyQueryRemove.value = "";
   OtherExtEdMyQueryText.mandatory = true;
}
if(this.value === null && OtherExtEdMyQueryRemove.value === null){
   OtherExtEdMyQueryText.enabled=false;
   OtherExtEdMyQueryText.value = "";
   OtherExtEdMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdMyQueryRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdMyQueryRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherExtEdMyQueryText.enabled=true;
   OtherExtEdMyQueryAdd.value = "";
   OtherExtEdMyQueryText.mandatory = true;
}
if(this.value === null && OtherExtEdMyQueryAdd.value === null){
   OtherExtEdMyQueryText.enabled=false;
   OtherExtEdMyQueryText.value = "";
   OtherExtEdMyQueryText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdMyQueryText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherExtEdMyQueryText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystExtEdComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystExtEdComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalProgramsRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalProgramsRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"International Programs",
      section:"IP_Role",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
        InternationalProgramsRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalProgramsRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalProgramsRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if(this.value == "Other"){
    OtherIPSEVISText.enabled = true;
    OtherIPSEVISText.visible = true;
  } else{
    OtherIPSEVISText.enabled = false;
    OtherIPSEVISText.value = "";
    OtherIPSEVISText.visible = false;
  }

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSEVISText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSEVISText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
 this.enabled=false;
 this.visible=false; 
}else{
  if(InternationalProgramsRole.value === "Other"){
    this.enabled=true;
this.visible=true;
  }else{
this.enabled=false;
this.visible=false;
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSecurityReqAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSecurityReqAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherIPSecurityReqText.enabled=true;
   OtherIPSecurityReqRemove.value = "";
   OtherIPSecurityReqText.mandatory = true;
}
if(this.value === null && OtherIPSecurityReqRemove.value === null){
   OtherIPSecurityReqText.enabled=false;
   OtherIPSecurityReqText.value = "";
   OtherIPSecurityReqText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSecurityReqRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSecurityReqRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   OtherIPSecurityReqText.enabled=true;
   OtherIPSecurityReqAdd.value = "";
   OtherIPSecurityReqText.mandatory = true;
}
if(this.value === null && OtherIPSecurityReqAdd.value === null){
   OtherIPSecurityReqText.enabled=false;
   OtherIPSecurityReqText.value = "";
   OtherIPSecurityReqText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSecurityReqText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_OtherIPSecurityReqText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalASOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalASOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = InternationalASTable.instanceManager.instanceCount;
var optionVal = InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASOption.value;
var roleVal = InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = InternationalASTable.instanceManager.instances[n].InternationalASOption.value;
    var roleVal1 = InternationalASTable.instanceManager.instances[n].InternationalASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && InternationalASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASOption.value = null;
     InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASRole.value = null;
     InternationalASTable.instanceManager.removeInstance(InternationalASTable.instanceIndex);
     break;
   }
 if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASOption.value = null;
InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASRole.value = null;
InternationalASTable.instanceManager.removeInstance(InternationalASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalASRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalASRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"International Programs",
      section:"IP_AS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         InternationalASRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalASRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalASRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = InternationalASTable.instanceManager.instanceCount;
var optionVal = InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASOption.value;
var roleVal = InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = InternationalASTable.instanceManager.instances[n].InternationalASOption.value;
    var roleVal1 = InternationalASTable.instanceManager.instances[n].InternationalASRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && InternationalASTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASOption.value = null;
     InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASRole.value = null;
     InternationalASTable.instanceManager.removeInstance(InternationalASTable.instanceIndex);
     break;
   }
 if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASOption.value = null;
InternationalASTable.instanceManager.instances[InternationalASTable.instanceIndex].InternationalASRole.value = null;
InternationalASTable.instanceManager.removeInstance(InternationalASTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPASRemove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPASRemove_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = InternationalASTable.instanceManager.instanceCount;
    var indexValue = InternationalASTable.instanceIndex;

    InternationalASTable.instanceManager.instances[indexValue].InternationalASOption.value = null;
    InternationalASTable.instanceManager.instances[indexValue].InternationalASRole.value = null;
    InternationalASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPASAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPASAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = InternationalASTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    IPASTable.InternationalASTable.instanceManager.addInstance();
    rowcount = InternationalASTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "International Programs",
            section: "IP_AS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                InternationalASTable.instanceManager.instances[lastRow].InternationalASRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPASRemove_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPASRemove_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = InternationalASTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    InternationalASTable.instanceManager.instances[indexValue].InternationalASOption.value = null;
    InternationalASTable.instanceManager.instances[indexValue].InternationalASRole.value = null;
    InternationalASTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherAdmissionSecAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherAdmissionSecAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   IPOtherAdmissionSecText.enabled=true;
   IPOtherAdmissionSecRemove.value = "";
   IPOtherAdmissionSecText.mandatory = true;
}
if(this.value === null && IPOtherAdmissionSecRemove.value === null){
   IPOtherAdmissionSecText.enabled=false;
   IPOtherAdmissionSecText.value = "";
   IPOtherAdmissionSecText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherAdmissionSecRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherAdmissionSecRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   IPOtherAdmissionSecText.enabled=true;
   IPOtherAdmissionSecAdd.value = "";
   IPOtherAdmissionSecText.mandatory = true;
}
if(this.value === null && IPOtherAdmissionSecAdd.value === null){
   IPOtherAdmissionSecText.enabled=false;
   IPOtherAdmissionSecText.value = "";
   IPOtherAdmissionSecText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherAdmissionSecText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherAdmissionSecText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalSFSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalSFSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = InternationalSFSTable.instanceManager.instanceCount;
var optionVal = InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSOption.value;
var roleVal = InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = InternationalSFSTable.instanceManager.instances[n].InternationalSFSOption.value;
    var roleVal1 = InternationalSFSTable.instanceManager.instances[n].InternationalSFSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && InternationalSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSOption.value = null;
     InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSRole.value = null;
     InternationalSFSTable.instanceManager.removeInstance(InternationalSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSOption.value = null;
InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSRole.value = null;
InternationalSFSTable.instanceManager.removeInstance(InternationalSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalSFSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalSFSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"International Programs",
      section:"IP_SFS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         InternationalSFSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalSFSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalSFSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = InternationalSFSTable.instanceManager.instanceCount;
var optionVal = InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSOption.value;
var roleVal = InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = InternationalSFSTable.instanceManager.instances[n].InternationalSFSOption.value;
    var roleVal1 = InternationalSFSTable.instanceManager.instances[n].InternationalSFSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && InternationalSFSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSOption.value = null;
     InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSRole.value = null;
     InternationalSFSTable.instanceManager.removeInstance(InternationalSFSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSOption.value = null;
InternationalSFSTable.instanceManager.instances[InternationalSFSTable.instanceIndex].InternationalSFSRole.value = null;
InternationalSFSTable.instanceManager.removeInstance(InternationalSFSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPSFSRemove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPSFSRemove_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = InternationalSFSTable.instanceManager.instanceCount;
    var indexValue = InternationalSFSTable.instanceIndex;

    InternationalSFSTable.instanceManager.instances[indexValue].InternationalSFSOption.value = null;
    InternationalSFSTable.instanceManager.instances[indexValue].InternationalSFSRole.value = null;
    InternationalSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPSFSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPSFSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = InternationalSFSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    IPSFSTable.InternationalSFSTable.instanceManager.addInstance();
    rowcount = InternationalSFSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "International Programs",
            section: "IP_SFS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                InternationalSFSTable.instanceManager.instances[lastRow].InternationalSFSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPSFSRemove_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPSFSRemove_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = InternationalSFSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    InternationalSFSTable.instanceManager.instances[indexValue].InternationalSFSOption.value = null;
    InternationalSFSTable.instanceManager.instances[indexValue].InternationalSFSRole.value = null;
    InternationalSFSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherStudFinAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherStudFinAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   IPOtherStudFinText.enabled=true;
   IPOtherStudFinRemove.value = "";
   IPOtherStudFinText.mandatory = true;
}
if(this.value === null && IPOtherStudFinRemove.value === null){
   IPOtherStudFinText.enabled=false;
   IPOtherStudFinText.value = "";
   IPOtherStudFinText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherStudFinRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherStudFinRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   IPOtherStudFinText.enabled=true;
   IPOtherStudFinAdd.value = "";
   IPOtherStudFinText.mandatory = true;
}
if(this.value === null && IPOtherStudFinAdd.value === null){
   IPOtherStudFinText.enabled=false;
   IPOtherStudFinText.value = "";
   IPOtherStudFinText.mandatory = true;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherStudFinText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPOtherStudFinText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalRSOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalRSOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = InternationalRSTable.instanceManager.instanceCount;
var optionVal = InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSOption.value;
var roleVal = InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = InternationalRSTable.instanceManager.instances[n].InternationalRSOption.value;
    var roleVal1 = InternationalRSTable.instanceManager.instances[n].InternationalRSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && InternationalRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSOption.value = null;
     InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSRole.value = null;
     InternationalRSTable.instanceManager.removeInstance(InternationalRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSOption.value = null;
InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSRole.value = null;
InternationalRSTable.instanceManager.removeInstance(InternationalRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalRSRole_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalRSRole_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"International Programs",
      section:"IP_RS",
      status:"Yes",
      action:"ARF_ROLE"
    },
    dataType: 'json',

    success: function(deptResultSet) {

        if (deptResultSet.length !== 0) {
         //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");

            var deptResult = [];

            for (var i = 0; i < deptResultSet.length; i++) {

                var item = deptResultSet[i].ROLE_NAME;

                var idItem = i + 1;

                //var jbcode = item.text;

                deptResult.push(item);

            }
         InternationalRSRole.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalRSRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InternationalRSRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = InternationalRSTable.instanceManager.instanceCount;
var optionVal = InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSOption.value;
var roleVal = InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = InternationalRSTable.instanceManager.instances[n].InternationalRSOption.value;
    var roleVal1 = InternationalRSTable.instanceManager.instances[n].InternationalRSRole.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && InternationalRSTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSOption.value = null;
     InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSRole.value = null;
     InternationalRSTable.instanceManager.removeInstance(InternationalRSTable.instanceIndex);
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSOption.value = null;
InternationalRSTable.instanceManager.instances[InternationalRSTable.instanceIndex].InternationalRSRole.value = null;
InternationalRSTable.instanceManager.removeInstance(InternationalRSTable.instanceIndex);
fcrValidation = false;
break;
}
}
}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRSRemove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRSRemove_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = InternationalRSTable.instanceManager.instanceCount;
    var indexValue = InternationalRSTable.instanceIndex;

    InternationalRSTable.instanceManager.instances[indexValue].InternationalRSOption.value = null;
    InternationalRSTable.instanceManager.instances[indexValue].InternationalRSRole.value = null;
    InternationalRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRSAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRSAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var rowcount = InternationalRSTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    IPRSTable.InternationalRSTable.instanceManager.addInstance();
    rowcount = InternationalRSTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;

    var deptResult = [];


    $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "International Programs",
            section: "IP_RS",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length > 0) {

                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                InternationalRSTable.instanceManager.instances[lastRow].InternationalRSRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });


}

        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRSRemove_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRSRemove_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToDynamicRole"){

    var rowCountToRemove = InternationalRSTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;

    InternationalRSTable.instanceManager.instances[indexValue].InternationalRSOption.value = null;
    InternationalRSTable.instanceManager.instances[indexValue].InternationalRSRole.value = null;
    InternationalRSTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRecordsSecOtherAdd_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRecordsSecOtherAdd_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   IPRecordsSecOtherText.enabled=true;
   IPRecordsSecOtherRemove.value = "";
   IPRecordsSecOtherText.mandatory = true;
}
if(this.value === null && IPRecordsSecOtherRemove.value === null){
   IPRecordsSecOtherText.enabled=false;
   IPRecordsSecOtherText.value = "";
   IPRecordsSecOtherText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRecordsSecOtherRemove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRecordsSecOtherRemove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
   IPRecordsSecOtherText.enabled=true;
   IPRecordsSecOtherAdd.value = "";
   IPRecordsSecOtherText.mandatory = true;
}
if(this.value === null && IPRecordsSecOtherAdd.value === null){
   IPRecordsSecOtherText.enabled=false;
   IPRecordsSecOtherText.value = "";
   IPRecordsSecOtherText.mandatory = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRecordsSecOtherText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_IPRecordsSecOtherText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystCommentsInternationalProgram_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystCommentsInternationalProgram_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value =="ToDynamicRole" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_Comments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_Comments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ExpiryMessage_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ExpiryMessage_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_SecurityAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value=== "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer" ){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CISOCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CISOCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCISO"){
if (this.value == "1") {
   debugger;
        if (CISOName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    CISOName.value = userValue;
                    CISODate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    CISOName.value = "";
    CISODate.value = "";
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CISOName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CISOName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CISODate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CISODate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_CISOAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_CISOAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToCISO"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToISO"){
if (this.value == "1") {
   
        if (ISOAdminName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    ISOAdminName.value = userValue;
                    ISOAdminDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    ISOAdminName.value = "";
    ISOAdminDate.value = "";
  
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_ISOAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToISO"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToTrainer"){
if (this.value == "1") {
   
        if (TrainerName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    TrainerName.value = userValue;
                    TrainerDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    TrainerName.value = "";
    TrainerDate.value = "";
  
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_TrainerComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToTrainer"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BusinessAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToDynamicRole"){
if (this.value == "1") {
   
        if (BAName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    BAName.value = userValue;
                    BADate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    BAName.value = "";
    BADate.value = "";
  
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BAName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BAName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BADate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BADate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_BAComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_BAComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToDynamicRole"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToEmployee"){
if (this.value == "1") {
   
        if (EmployeeName.value === null) {
            
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


        } 
    
} else {
    EmployeeName.value = "";
    EmployeeDate.value = "";
  
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_EmployeeComments_init0 = function (scope) {
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AccessCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AccessCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToManager"){
if (this.value == "1") {
   
        if (AdminName.value === null) {
            
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


        } 
    
} else {
    AdminName.value = "";
    AdminDate.value = "";
  
}
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_AdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_AdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToManager"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value  == "ToRequestor"){
if (this.value == "1") {
   
        if (InitiatorName.value === null) {
            
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_InitiatorComments_init0 = function (scope) {
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/campus-solution-access-request-form/campus-solution-access-request-form');
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
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_reset1600234675625_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_reset1600234675625_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_saveguidedraft1600234692666_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_saveguidedraft1600234692666_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value+", Form ID: "+CaseID.value;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function campus_solution_access_request_form_campus_solution_access_request_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
campus_solution_access_request_form_campus_solution_access_request_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            
/*EmployeeEmail.value="yjayaram@fullerton.edu";
ManagerEmail.value="yjayaram@fullerton.edu";
InitiatorEmail.value = "yjayaram@fullerton.edu";*/

EmployeeEmail.value="nvadlakunta@fullerton.edu";
ManagerEmail.value="nvadlakunta@fullerton.edu";
InitiatorEmail.value = "nvadlakunta@fullerton.edu";

/*EmployeeEmail.value="swathi.kumari@thoughtfocus.com";
ManagerEmail.value="swathi.kumari@thoughtfocus.com";
InitiatorEmail.value = "swathi.kumari@thoughtfocus.com";*/

/*EmployeeEmail.value="anupama.dhar@thoughtfocus.com";
ManagerEmail.value="anupama.dhar@thoughtfocus.com";
InitiatorEmail.value = "anupama.dhar@thoughtfocus.com";*/


debugger;
if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value+", Form ID: "+CaseID.value;
 EmailSubject.value = "Test - Campus Solution Access Request - " + LastName.value+", "+FirstName.value;
}

if(InitiatorComments.value !== null){
Comments.value = "Initiator Comments : "+ InitiatorComments.value;
}else{
  Comments.value = "Initiator Comments : ";
}


guideBridge.submit();



        }
	}
}
