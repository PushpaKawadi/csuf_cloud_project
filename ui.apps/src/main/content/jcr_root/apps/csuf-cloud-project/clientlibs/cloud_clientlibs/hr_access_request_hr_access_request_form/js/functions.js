/**
 * @function hr_access_request_hr_access_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete", function(event, payload) {debugger;
  AccessTypeFlag.value = null;
                     debugger;                                          
        if (StageIndicator.value == "ToRequestor" && InititorsCB.value == 1) {
       if (InitiatorComments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1) {
            // if((Comments.value).lastIndexOf(AdministratorComments.value) == -1){  
            Comments.value = Comments.value + "\n" + "Initiator's Comments :" + InitiatorComments.value;
        } 
        if(InitiatorComments.value === null &&  (Comments.value).lastIndexOf("Initiator's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "Initiator's Comments :";
        }
    }
    if (StageIndicator.value == "ToManager" && AdministratorCB.value == 1) {
       if (AdministratorComments.value !== null && (Comments.value).lastIndexOf(AdministratorComments.value) == -1) {
            // if((Comments.value).lastIndexOf(AdministratorComments.value) == -1){  
            Comments.value = Comments.value + "\n" + "Administrator's Comments :" + AdministratorComments.value;
        } 
        if(AdministratorComments.value === null &&  (Comments.value).lastIndexOf("Administrator's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "Administrator's Comments :";
        }
    }
                                                               
  if (StageIndicator.value == "ToRequestor" && InititorsCB.value == 1) {
  if (InitiatorComments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1) {
            // if((Comments.value).lastIndexOf(AdministratorComments.value) == -1){  
            Comments.value = Comments.value + "\n" + "Initiator's Comments :" + InitiatorComments.value;
        } 
        if(InitiatorComments.value === null &&  (Comments.value).lastIndexOf("Initiator's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "Initiator's Comments :";
        }
    }

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
    if (StageIndicator.value == "ToBusinessAnalyst" && BusinessAnalystCB.value == 1) {
        if (BusinessAnalystComments.value !== null && (Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1) {
            // if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Business Analyst's Comments :" + BusinessAnalystComments.value;
        } 
         if (BusinessAnalystComments.value === null && (Comments.value).lastIndexOf("Business Analyst's Comments :") == -1) {
            // if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Business Analyst's Comments :";
        }
    }
    if (StageIndicator.value == "ToTrainer" && TrainersCB.value == 1) {
        if (TrainerComments.value !== null && (Comments.value).lastIndexOf(TrainerComments.value) == -1) {
            //if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Trainer's Comments :" + TrainerComments.value;
        } 
       if (TrainerComments.value === null && (Comments.value).lastIndexOf("Trainer's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Trainer's Comments :";
        } 
    }

    if (StageIndicator.value == "ToISO" && ISOAdminAnalystCB.value == 1) {
        if (ISOAdminAnalystComments.value !== null && (Comments.value).lastIndexOf(ISOAdminAnalystComments.value) == -1) {
            Comments.value = Comments.value + "\n" + "ISO Admin Analyst's Comments :" + ISOAdminAnalystComments.value;
        } 
      if (ISOAdminAnalystComments.value === null && (Comments.value).lastIndexOf("ISO Admin Analyst's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "ISO Admin Analyst's Comments :" ;
        }
    }
    if (StageIndicator.value == "ToCISO" && CISOCB.value == 1) {
        if (CISOAdminComments.value !== null && (Comments.value).lastIndexOf(CISOAdminComments.value) == -1) {
            // if((Comments.value).lastIndexOf(CISOComments.value) == -1){
            Comments.value = Comments.value + "\n" + "CISO Admin's Comments :" + CISOAdminComments.value;
        } 
       if (CISOAdminComments.value === null && (Comments.value).lastIndexOf("CISO Admin's Comments :") == -1) {
            // if((Comments.value).lastIndexOf(CISOComments.value) == -1){
            Comments.value = Comments.value + "\n" + "CISO Admin's Comments :" ;
        }
    }
    if ((StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer") && SecurityAdminsCB.value == 1) {
        if (SecurityAdminComments.value !== null && (Comments.value).lastIndexOf(SecurityAdminComments.value) == -1) {
            //if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Security Admin's Comments :" + SecurityAdminComments.value;
        } 
      if (SecurityAdminComments.value === null && (Comments.value).lastIndexOf("Security Admin's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Security Admin's Comments :";
        }
    }
    if ((StageIndicator.value == "ToFAR") && FARCB.value == 1) {
        if (FARComments.value !== null && (Comments.value).lastIndexOf(FARComments.value) == -1) {
            //if((Comments.value).lastIndexOf(FARComments.value) == -1){
            Comments.value = Comments.value + "\n" + "FAR's Comments :" + FARComments.value;
        } 
      if (FARComments.value === null && (Comments.value).lastIndexOf("FAR's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(FARComments.value) == -1){
            Comments.value = Comments.value + "\n" + "FAR's Comments :";
        }
    }
    if ((StageIndicator.value == "ToFilenet") && FilenetCB.value == 1) {
        if (FilenetComments.value !== null && (Comments.value).lastIndexOf(FilenetComments.value) == -1) {
            //if((Comments.value).lastIndexOf(FilenetComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Filenet's Comments :" + FilenetComments.value;
        } 
       if (FilenetComments.value === null && (Comments.value).lastIndexOf("Filenet's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(FilenetComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Filenet's Comments :";
        }
    }

       //Delete incomplete rows
       if(TypeOfAccess.value == "1" ){
           IsFAR.value = "0";
var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
         CentralUser.value = "0";
debugger;
if(rowcount1 >= 1){
   var n = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
while(n > 0) {
     n = n-1;
    // n = HumanResourcesDistributedRolesTable.instanceManager.instanceCount-1;
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
   if((optionVal1 === null && roleVal1 === null) || (optionVal1 === null && roleVal1 !== null) || (optionVal1 !== null && roleVal1 === null)){
     HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(n);
   }  
 if(roleVal1 == "PTF, Appointments/Contract Processing" || roleVal1 == "PTF Approval" || roleVal1 == "Recruiting" ){
    IsFAR.value = "1";
  }
}
}
}
if(TypeOfAccess.value == "2"  ){
  CentralUser.value = "1";
   IsFAR.value = "0";
  var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
if(rowcount2 >= 1){ 
  var k = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
while(k > 0) {
    k = k-1;
   // k = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount-1;
    var optionVal2 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreOption.value;
    var roleVal2 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreRole.value;   
   if((optionVal2 === null && roleVal2 === null)|| (optionVal2 === null && roleVal2 !== null) || (optionVal2 !== null && roleVal2 === null)){
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreOption.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreRole.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(k);
   }   
if(roleVal2 == "Recruiting" ){
    IsFAR.value = "1";
  }
}
}
}                                                        
                                                               
                                                               
});
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {

    employeeInformation.visible = true;
    HumanResourcesDistributedRoles.visible = false;
    HumanResourcesCoreCentralRoles.visible = false;
    Signatures.visible = true;

    EmpSignPanel.visible = false;
    AdminSignPanel.visible = false;
    InitiatorPanel.visible = true;
    BusinessAnalystPanel.visible = false;
    TrainerPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    FARPanel.visible = false;
    FilenetPanel.visible = false;

}


debugger;
if (StageIndicator.value == "ToRequestor") {
    employeeInformation.visible = true;
   // HumanResourcesDistributedRoles.visible = true;
   // HumanResourcesCoreCentralRoles.visible = true;
    Signatures.visible = true;

    employeeInformation.enabled = true;
    basicInformation.enabled = false;
    AccessReqPanel.enabled = true;
    EmpSignPanel.visible = false;
    AdminSignPanel.enabled = false;
    AdminSignPanel.visible = true;
    InitiatorPanel.visible = true;

    BusinessAnalystPanel.visible = false;
    TrainerPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    FARPanel.visible = false;
    FilenetPanel.visible = false;
   if(EmployeeCB.value !== null){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
    EmpSignPanel.visible = false;
  }
   if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
  if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
   if(AdministratorCB.value !== null){
     AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
     AdminSignPanel.visible = false;
  }

}

if (StageIndicator.value === "ToManager") {

    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = true;
    HumanResourcesCoreCentralRoles.enabled = true;
    Signatures.visible = true;

    if (EmployeeCB.value == 1) {
        EmpSignPanel.visible = true;
        EmpSignPanel.enabled = false;
    } else {
        EmpSignPanel.visible = false;
    }
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = true;
    TrainerPanel.visible = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    FARPanel.visible = false;
    FilenetPanel.visible = false;
   if(EmployeeCB.value !== null){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
    EmpSignPanel.visible = false;
  }
   if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
  if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
  


}

if (StageIndicator.value === "ToEmployee") {

    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;


    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = true;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    FARPanel.visible = false;
    FilenetPanel.visible = false;
    TrainerPanel.visible = false;  
   if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
  if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
   if(AdministratorCB.value !== null){
     AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
     AdminSignPanel.visible = false;
  }


}

if (StageIndicator.value === "ToBusinessAnalyst") {

    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = true;
    HumanResourcesCoreCentralRoles.enabled = true;
    Signatures.enabled = true;

    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;

    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled = true;

    TrainerPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
    FARPanel.visible = false;
    FilenetPanel.visible = false;
    TrainerPanel.visible = false;
   if(EmployeeCB.value !== null){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
    EmpSignPanel.visible = false;
  }
   if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
   /* if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }*/
  if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
   if(AdministratorCB.value !== null){
     AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
     AdminSignPanel.visible = false;
  }

}
debugger;
if (StageIndicator.value === "ToTrainer") {

    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;

    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    debugger;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
    // far n filenet same as businessanalyst
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }

    TrainerPanel.visible = true;
    TrainerPanel.enabled = true;

    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;


}
//ToSecurityAdminFromTrainer
if (StageIndicator.value === "ToSecurityAdminFromTrainer") {
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;

    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = true;
    CISOAdminSignaturePanel.visible = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }

}
//ToISO
if (StageIndicator.value === "ToISO") {
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;

    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
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
    ISOAdminPanel.visible = true;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = false;
    CISOAdminSignaturePanel.visible = false;
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}
//ToCISO
if (StageIndicator.value === "ToCISO") {
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
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
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = false;
    CISOAdminSignaturePanel.visible = true;


}
//ToSecurityAdminFromISO   
if (StageIndicator.value === "ToSecurityAdminFromISO") {
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
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
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    ISOAdminPanel.visible = false;
    ISOAdminPanel.enabled = false;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = true;
    CISOAdminSignaturePanel.visible = false;


}


if (StageIndicator.value === "ToSecurityAdminFromCISO") {

    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;

    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;


    ISOAdminPanel.visible = true;
    ISOAdminPanel.enabled = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    CISOAdminSignaturePanel.visible = true;
    CISOAdminSignaturePanel.enabled = false;
    SecurityAdminPanel.visible = true;
    SecurityAdminPanel.enabled = true;


}

debugger;
if (StageIndicator.value == "ToCompleteQueue") {

    employeeInformation.visible = true;
    HumanResourcesDistributedRoles.visible = true;
    HumanResourcesCoreCentralRoles.visible = true;
    Signatures.visible = true;
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = false;

    EmpSignPanel.visible = true;
    AdminSignPanel.visible = true;
    debugger;
    InitiatorPanel.enabled = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }

    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
    ISOAdminPanel.enabled = false;
    ISOAdminPanel.visible = true;
    if (CISOCB.value == "1") {
        CISOAdminSignaturePanel.visible = true;
        CISOAdminSignaturePanel.enabled = false;
    } else {
        CISOAdminSignaturePanel.visible = false;
    }
    if (SecurityAdminsCB.value == "1") {
        SecurityAdminPanel.visible = true;
        SecurityAdminPanel.enabled = false;
    } else {
        SecurityAdminPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
}

if(StageIndicator.value == "ToSecurityAdminFromTimer"){
   employeeInformation.visible = true;
    HumanResourcesDistributedRoles.visible = true;
    HumanResourcesCoreCentralRoles.visible = true;
    Signatures.visible = true;
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = false;

  if(EmployeeCB.value !== null){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
    EmpSignPanel.visible = false;
  }
 
    InitiatorPanel.enabled = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
   if(AdministratorCB.value !== null){
     AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
     AdminSignPanel.visible = false;
  }
  if(ISOAdminAnalystCB.value !== null){
    ISOAdminPanel.enabled = false;
    ISOAdminPanel.visible = true;
}else{
  ISOAdminPanel.visible = false;
}
    
    if (CISOCB.value == "1") {
        CISOAdminSignaturePanel.visible = true;
        CISOAdminSignaturePanel.enabled = false;
    } else {
        CISOAdminSignaturePanel.visible = false;
    }
    if (SecurityAdminsCB.value == "1") {
        SecurityAdminPanel.visible = true;
        SecurityAdminPanel.enabled = false;
    } else {
        SecurityAdminPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
}

if(StageIndicator.value == "ToFAR"){
  debugger;
   employeeInformation.visible = true;
    HumanResourcesDistributedRoles.visible = true;
    HumanResourcesCoreCentralRoles.visible = true;
    Signatures.visible = true;
    Signatures.enabled = true;
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;

  if(EmployeeCB.value !== null){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
    EmpSignPanel.visible = false;
  }
 
    InitiatorPanel.enabled = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
   if(AdministratorCB.value !== null){
     AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
     AdminSignPanel.visible = false;
  }
  if(ISOAdminAnalystCB.value !== null){
    ISOAdminPanel.enabled = false;
    ISOAdminPanel.visible = true;
}else{
  ISOAdminPanel.visible = false;
}
    
    if (CISOCB.value == "1") {
        CISOAdminSignaturePanel.visible = true;
        CISOAdminSignaturePanel.enabled = false;
    } else {
        CISOAdminSignaturePanel.visible = false;
    }
    if (SecurityAdminsCB.value == "1") {
        SecurityAdminPanel.visible = true;
        SecurityAdminPanel.enabled = false;
    } else {
        SecurityAdminPanel.visible = false;
    }
    if (FilenetCB.value == "1") {
        FilenetPanel.visible = true;
        FilenetPanel.enabled = false;
    } else {
        FilenetPanel.visible = false;
    }
    
        FARPanel.visible = true;
        FARPanel.enabled = true;
    
}

if(StageIndicator.value == "ToFilenet"){
   employeeInformation.visible = true;
    HumanResourcesDistributedRoles.visible = true;
    HumanResourcesCoreCentralRoles.visible = true;
    Signatures.visible = true;
    employeeInformation.enabled = false;
    HumanResourcesDistributedRoles.enabled = false;
    HumanResourcesCoreCentralRoles.enabled = false;
    Signatures.enabled = true;

  if(EmployeeCB.value !== null){
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;
  }else{
    EmpSignPanel.visible = false;
  }
 
    InitiatorPanel.enabled = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
if(TrainersCB.value !== null){
    TrainerPanel.visible = true;
    TrainerPanel.enabled = false;
}else{
  TrainerPanel.visible = false;
}
   if(AdministratorCB.value !== null){
     AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
     AdminSignPanel.visible = false;
  }
  if(ISOAdminAnalystCB.value !== null){
    ISOAdminPanel.enabled = false;
    ISOAdminPanel.visible = true;
}else{
  ISOAdminPanel.visible = false;
}
    
    if (CISOCB.value == "1") {
        CISOAdminSignaturePanel.visible = true;
        CISOAdminSignaturePanel.enabled = false;
    } else {
        CISOAdminSignaturePanel.visible = false;
    }
    if (SecurityAdminsCB.value == "1") {
        SecurityAdminPanel.visible = true;
        SecurityAdminPanel.enabled = false;
    } else {
        SecurityAdminPanel.visible = false;
    }
   
        FilenetPanel.visible = true;
        FilenetPanel.enabled = true;
    
    if (FARCB.value == "1") {
        FARPanel.visible = true;
        FARPanel.enabled = false;
    } else {
        FARPanel.visible = false;
    }
}
if(StageIndicator.value !== null){
  if(TypeOfAccess.value == "1"){
    HumanResourcesDistributedRoles.visible = true;
    HumanResourcesCoreCentralRoles.visible = false;
  }else{
    HumanResourcesDistributedRoles.visible = false;
    HumanResourcesCoreCentralRoles.visible = true;
  }
}

        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_guideRootPanel_init2 = function (scope) {
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
            //RequestorEmail.value = myresopnse[0].EMAILID;
            RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function hr_access_request_hr_access_request_form.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete", function(event, payload) {debugger;
  AccessTypeFlag.value = null;
                     debugger;                                          
        if (StageIndicator.value == "ToRequestor" && InititorsCB.value == 1) {
       if (InitiatorComments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1) {
            // if((Comments.value).lastIndexOf(AdministratorComments.value) == -1){  
            Comments.value = Comments.value + "\n" + "Initiator's Comments :" + InitiatorComments.value;
        } 
        if(InitiatorComments.value === null &&  (Comments.value).lastIndexOf("Initiator's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "Initiator's Comments :";
        }
    }
    if (StageIndicator.value == "ToManager" && AdministratorCB.value == 1) {
       if (AdministratorComments.value !== null && (Comments.value).lastIndexOf(AdministratorComments.value) == -1) {
            // if((Comments.value).lastIndexOf(AdministratorComments.value) == -1){  
            Comments.value = Comments.value + "\n" + "Administrator's Comments :" + AdministratorComments.value;
        } 
        if(AdministratorComments.value === null &&  (Comments.value).lastIndexOf("Administrator's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "Administrator's Comments :";
        }
    }
                                                               
  if (StageIndicator.value == "ToRequestor" && InititorsCB.value == 1) {
  if (InitiatorComments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1) {
            // if((Comments.value).lastIndexOf(AdministratorComments.value) == -1){  
            Comments.value = Comments.value + "\n" + "Initiator's Comments :" + InitiatorComments.value;
        } 
        if(InitiatorComments.value === null &&  (Comments.value).lastIndexOf("Initiator's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "Initiator's Comments :";
        }
    }

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
    if (StageIndicator.value == "ToBusinessAnalyst" && BusinessAnalystCB.value == 1) {
        if (BusinessAnalystComments.value !== null && (Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1) {
            // if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Business Analyst's Comments :" + BusinessAnalystComments.value;
        } 
         if (BusinessAnalystComments.value === null && (Comments.value).lastIndexOf("Business Analyst's Comments :") == -1) {
            // if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Business Analyst's Comments :";
        }
    }
    if (StageIndicator.value == "ToTrainer" && TrainersCB.value == 1) {
        if (TrainerComments.value !== null && (Comments.value).lastIndexOf(TrainerComments.value) == -1) {
            //if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Trainer's Comments :" + TrainerComments.value;
        } 
       if (TrainerComments.value === null && (Comments.value).lastIndexOf("Trainer's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Trainer's Comments :";
        } 
    }

    if (StageIndicator.value == "ToISO" && ISOAdminAnalystCB.value == 1) {
        if (ISOAdminAnalystComments.value !== null && (Comments.value).lastIndexOf(ISOAdminAnalystComments.value) == -1) {
            Comments.value = Comments.value + "\n" + "ISO Admin Analyst's Comments :" + ISOAdminAnalystComments.value;
        } 
      if (ISOAdminAnalystComments.value === null && (Comments.value).lastIndexOf("ISO Admin Analyst's Comments :") == -1) {
            Comments.value = Comments.value + "\n" + "ISO Admin Analyst's Comments :" ;
        }
    }
    if (StageIndicator.value == "ToCISO" && CISOCB.value == 1) {
        if (CISOAdminComments.value !== null && (Comments.value).lastIndexOf(CISOAdminComments.value) == -1) {
            // if((Comments.value).lastIndexOf(CISOComments.value) == -1){
            Comments.value = Comments.value + "\n" + "CISO Admin's Comments :" + CISOAdminComments.value;
        } 
       if (CISOAdminComments.value === null && (Comments.value).lastIndexOf("CISO Admin's Comments :") == -1) {
            // if((Comments.value).lastIndexOf(CISOComments.value) == -1){
            Comments.value = Comments.value + "\n" + "CISO Admin's Comments :" ;
        }
    }
    if ((StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer") && SecurityAdminsCB.value == 1) {
        if (SecurityAdminComments.value !== null && (Comments.value).lastIndexOf(SecurityAdminComments.value) == -1) {
            //if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Security Admin's Comments :" + SecurityAdminComments.value;
        } 
      if (SecurityAdminComments.value === null && (Comments.value).lastIndexOf("Security Admin's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Security Admin's Comments :";
        }
    }
    if ((StageIndicator.value == "ToFAR") && FARCB.value == 1) {
        if (FARComments.value !== null && (Comments.value).lastIndexOf(FARComments.value) == -1) {
            //if((Comments.value).lastIndexOf(FARComments.value) == -1){
            Comments.value = Comments.value + "\n" + "FAR's Comments :" + FARComments.value;
        } 
      if (FARComments.value === null && (Comments.value).lastIndexOf("FAR's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(FARComments.value) == -1){
            Comments.value = Comments.value + "\n" + "FAR's Comments :";
        }
    }
    if ((StageIndicator.value == "ToFilenet") && FilenetCB.value == 1) {
        if (FilenetComments.value !== null && (Comments.value).lastIndexOf(FilenetComments.value) == -1) {
            //if((Comments.value).lastIndexOf(FilenetComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Filenet's Comments :" + FilenetComments.value;
        } 
       if (FilenetComments.value === null && (Comments.value).lastIndexOf("Filenet's Comments :") == -1) {
            //if((Comments.value).lastIndexOf(FilenetComments.value) == -1){
            Comments.value = Comments.value + "\n" + "Filenet's Comments :";
        }
    }

       //Delete incomplete rows
       if(TypeOfAccess.value == "1" ){
       //    IsFAR.value = "0";
var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
         CentralUser.value = "0";
debugger;
if(rowcount1 >= 1){
   var n = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
while(n > 0) {
     n = n-1;
    // n = HumanResourcesDistributedRolesTable.instanceManager.instanceCount-1;
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
   if((optionVal1 === null && roleVal1 === null) || (optionVal1 === null && roleVal1 !== null) || (optionVal1 !== null && roleVal1 === null)){
     HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(n);
   }  
/* if(roleVal1 == "PTF, Appointments/Contract Processing" || roleVal1 == "PTF Approval" || roleVal1 == "Recruiting" ){
    IsFAR.value = "1";
  }*/
}
}
}
if(TypeOfAccess.value == "2"  ){
  CentralUser.value = "1";
   //IsFAR.value = "0";
  var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
if(rowcount2 >= 1){ 
  var k = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
while(k > 0) {
    k = k-1;
   // k = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount-1;
    var optionVal2 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreOption.value;
    var roleVal2 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreRole.value;   
   if((optionVal2 === null && roleVal2 === null)|| (optionVal2 === null && roleVal2 !== null) || (optionVal2 !== null && roleVal2 === null)){
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreOption.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[k].CoreRole.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(k);
   }   
/*if(roleVal2 == "Recruiting" ){
    IsFAR.value = "1";
  }*/
}
}
}                                                        
                                                               
                                                               
});
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_basicInformation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_basicInformation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_textdraw1575095828043_copy_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_textdraw1575095828043_copy_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_ApprovalStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ApprovalStatus_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_CaseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CaseID_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled = false;

        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_chrsId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
function getCaseId(){
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
if (StageIndicator.value === null) {
  getCaseId();
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            var userValue = myresponse.userId;
            logUser.value = userValue;
            workflow_initiator.value = userValue;
            var cwidValue = chrsId.value;
            var pattern = /^1\d{8}$/;
            var result = pattern.test(cwidValue);
            if (result !== true) {
                CampusEmail.value = "";
              CWID.value = "";
FirstName.value = "";
LastName.value = "";
DepartmentID.value = "";
DepartmentName.value = "";
Division.value = "";
DivisionID.value = "";
Title.value = "";
CampusExtension.value = "";
AppropriateAdministrator.value = "";
ManagerUserID.value = "";
ManagerName.value = "";
EmployeeUserID.value = "";
AppointmentEndDate.value = "";
EmploymentCatagory.value = "";
EmployeeEmail.value = "";
ManagerEmail.value = "";

                showErrorModal("Alert!", "Please enter a valid Employee ID");

            } else {
                //if (CWID.value !== null) {

                    var gifModal = document.getElementById('gifModal');
                    gifModal.style.display = "block";
                    var cwidVal = chrsId.value;
				    
                    $.ajax({
                        type: 'GET',
                        url: "/bin/chrsIDUpdateServlet",
                        data: {
                            chrsId: cwidVal,
                            action: "FS_EMP_DATA_CHRSID"
                        },
                        dataType: 'json',
                        success: function(myresponse) {

                            var modal = document.getElementById('myModal');
                            var span = document.getElementsByClassName("close")[0];
debugger;
                            if (myresponse.length === 1) {
                              CWID.value = myresponse[0].EMPLID;
                                CampusEmail.value = "soumya.ravindra@thoughtfocus.com"; 
                              //  CampusEmail.value = myresponse[0].EMAIL;
                              	FirstName.value = myresponse[0].FIRST_NAME;
                                LastName.value = myresponse[0].LAST_NAME;
                              EmployeeFullName.value = FirstName.value+" "+LastName.value;
                               	DepartmentID.value = myresponse[0].DEPTID;
                                DepartmentName.value = myresponse[0].DEPTNAME;
                              	Division.value = myresponse[0].FUL_DIVISION_NAME;
                                DivisionID.value = myresponse[0].FUL_DIVISION;
                                Title.value = myresponse[0].DESCR;
                                CampusExtension.value = myresponse[0].PHONE;
                           //   CampusLocation.value = myresponse[0].BUILDING;
                              	//AppropriateAdministrator.value = myresponse[0].MANAGER;
                              
                           /*  var myArr = (myresponse[0].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                              AppropriateAdministrator.value = myArr[0]; */ //commented line 87-90 on 08242023 and added below if else
                                if(myresponse[0].MANAGER === undefined){
                                  ManagerUserID.value = "admin";
                                 ManagerName.value = "Admin";
                              AppropriateAdministrator.value = "Admin";
                                }else{
                                  var myArr = (myresponse[0].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                              AppropriateAdministrator.value = myArr[0];
                                }
                                EmployeeUserID.value = myresponse[0].USERID;
                              	var empType = myresponse[0].EMP_TYPE;
                                if(empType == "Permanent" || empType == "PERMANENT"){
                                  EmploymentType.value = "1";
                                } else {
                                  EmploymentType.value = "2";
                                }
                              debugger;

                              if(myresponse[0].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[0].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	AppointmentEndDate.value = d;
                              }
                              	var empPosition = myresponse[0].POSITION;
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
                                }
                                EmployeeEmail.value = "soumya.ravindra@thoughtfocus.com";
                              ManagerEmail.value = "soumya.ravindra@thoughtfocus.com";
                            //    EmployeeEmail.value = myresponse[0].EMAIL;
                             // ManagerEmail.value = myresponse[0].MANAGER_EMAIL_ID;
                                gifModal.style.display = "none";
                                modal.style.display = "none";

                            } else if (myresponse.length > 1) {                                
                                gifModal.style.display = "none";
                                modal.style.display = "block";

                                var col = [];
                                col.push("CSU_CHRS_ID");
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
                                          CWID.value = myresponse[n].EMPLID;
                                          CampusEmail.value = "soumya.ravindra@thoughtfocus.com";
                                          //CampusEmail.value = myresponse[n].EMAIL;
                                          FirstName.value = myresponse[n].FIRST_NAME;
                                          LastName.value = myresponse[n].LAST_NAME;
                                          EmployeeFullName.value = FirstName.value+" "+LastName.value;
                                          DepartmentID.value = myresponse[n].DEPTID;
                                          DepartmentName.value = myresponse[n].DEPTNAME;
                                          Division.value = myresponse[n].FUL_DIVISION_NAME;
                                          DivisionID.value = myresponse[n].FUL_DIVISION;
                                          Title.value = myresponse[n].DESCR;
                                          CampusExtension.value = myresponse[n].PHONE;
                                     //AppropriateAdministrator.value = myresponse[n].MANAGER;
                                      /*    var myArr = (myresponse[n].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                                           AppropriateAdministrator.value = myArr[0]; */ //commented line 87-90 on 08242023 and added below if else
                                          if(myresponse[n].MANAGER === undefined){
                                             ManagerUserID.value = "admin";
                                             ManagerName.value = "Admin";
                                           AppropriateAdministrator.value = "Admin";
                                          }else{
                                             var myArr = (myresponse[n].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                                           AppropriateAdministrator.value = myArr[0];
                                          }
                                          var empType = myresponse[n].EMP_TYPE;
                                          EmployeeUserID.value = myresponse[n].USERID;
                                          if(empType == "Permanent"){
                                            EmploymentType.value = "1";
                                          } else {
                                            EmploymentType.value = "2";
                                          }
                                          if(myresponse[n].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[n].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	AppointmentEndDate.value = d;
                              }
                                          var empPosition = myresponse[n].POSITION;
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
                                          } 
                                          EmployeeEmail.value = "soumya.ravindra@thoughtfocus.com";
                              ManagerEmail.value = "soumya.ravindra@thoughtfocus.com";
                                       //   EmployeeEmail.value = myresponse[n].EMAIL;
                             // ManagerEmail.value = myresponse[n].MANAGER_EMAIL_ID;
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
DepartmentID.value = "";
DepartmentName.value = "";
Division.value = "";
DivisionID.value = "";
Title.value = "";
CampusExtension.value = "";
AppropriateAdministrator.value = "";
ManagerUserID.value = "";
ManagerName.value = "";
EmployeeUserID.value = "";
AppointmentEndDate.value = "";
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
 * @function hr_access_request_hr_access_request_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
function getCaseId(){
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
if (StageIndicator.value === null) {
  getCaseId();
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
DepartmentID.value = "";
DepartmentName.value = "";
Division.value = "";
DivisionID.value = "";
Title.value = "";
CampusExtension.value = "";
AppropriateAdministrator.value = "";
ManagerUserID.value = "";
ManagerName.value = "";
EmployeeUserID.value = "";
AppointmentEndDate.value = "";
EmploymentCatagory.value = "";
EmployeeEmail.value = "";
ManagerEmail.value = "";

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
                             CampusEmail.value = "soumya.ravindra@thoughtfocus.com"; 
                              //  CampusEmail.value = myresponse[0].EMAIL;
                              
                              	FirstName.value = myresponse[0].FIRST_NAME;
                                LastName.value = myresponse[0].LAST_NAME;
                              EmployeeFullName.value = FirstName.value+" "+LastName.value;
                               	DepartmentID.value = myresponse[0].DEPTID;
                                DepartmentName.value = myresponse[0].DEPTNAME;
                              	Division.value = myresponse[0].FUL_DIVISION_NAME;
                                DivisionID.value = myresponse[0].FUL_DIVISION;
                                Title.value = myresponse[0].DESCR;
                                CampusExtension.value = myresponse[0].PHONE;
                           //   CampusLocation.value = myresponse[0].BUILDING;
                              	//AppropriateAdministrator.value = myresponse[0].MANAGER;
                              
                           /*  var myArr = (myresponse[0].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                              AppropriateAdministrator.value = myArr[0]; */ //commented line 87-90 on 08242023 and added below if else
                                if(myresponse[0].MANAGER === undefined){
                                  ManagerUserID.value = "admin";
                                 ManagerName.value = "Admin";
                              AppropriateAdministrator.value = "Admin";
                                }else{
                                  var myArr = (myresponse[0].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                              AppropriateAdministrator.value = myArr[0];
                                }
                                EmployeeUserID.value = myresponse[0].USERID;
                              	var empType = myresponse[0].EMP_TYPE;
                                if(empType == "Permanent" || empType == "PERMANENT"){
                                  EmploymentType.value = "1";
                                } else {
                                  EmploymentType.value = "2";
                                }
                              debugger;

                              if(myresponse[0].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[0].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	AppointmentEndDate.value = d;
                              }
                              	var empPosition = myresponse[0].POSITION;
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
                                }
                               
                              EmployeeEmail.value = "soumya.ravindra@thoughtfocus.com";
                              ManagerEmail.value = "soumya.ravindra@thoughtfocus.com";
                            //    EmployeeEmail.value = myresponse[0].EMAIL;
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
                                          
                                          CampusEmail.value = "soumya.ravindra@thoughtfocus.com";
                                          //CampusEmail.value = myresponse[n].EMAIL;
                                          FirstName.value = myresponse[n].FIRST_NAME;
                                          LastName.value = myresponse[n].LAST_NAME;
                                          EmployeeFullName.value = FirstName.value+" "+LastName.value;
                                          DepartmentID.value = myresponse[n].DEPTID;
                                          DepartmentName.value = myresponse[n].DEPTNAME;
                                          Division.value = myresponse[n].FUL_DIVISION_NAME;
                                          DivisionID.value = myresponse[n].FUL_DIVISION;
                                          Title.value = myresponse[n].DESCR;
                                          CampusExtension.value = myresponse[n].PHONE;
                                     //AppropriateAdministrator.value = myresponse[n].MANAGER;
                                      /*    var myArr = (myresponse[n].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                                           AppropriateAdministrator.value = myArr[0]; */ //commented line 87-90 on 08242023 and added below if else
                                          if(myresponse[n].MANAGER === undefined){
                                             ManagerUserID.value = "admin";
                                             ManagerName.value = "Admin";
                                           AppropriateAdministrator.value = "Admin";
                                          }else{
                                             var myArr = (myresponse[n].MANAGER).split("|");
                              ManagerUserID.value = myArr[1];
                             ManagerName.value = myArr[0];
                                           AppropriateAdministrator.value = myArr[0];
                                          }
                                          var empType = myresponse[n].EMP_TYPE;
                                          EmployeeUserID.value = myresponse[n].USERID;
                                          if(empType == "Permanent"){
                                            EmploymentType.value = "1";
                                          } else {
                                            EmploymentType.value = "2";
                                          }
                                          if(myresponse[n].EXPECTED_END_DATE.trim() !== "N/A"){
                                var dateVal = myresponse[n].EXPECTED_END_DATE;                             
								var d = (dateVal.substring(6,dateVal.length) +"-"+dateVal.substring(0,2)+"-"+dateVal.substring(3,5));
                              	AppointmentEndDate.value = d;
                              }
                                          var empPosition = myresponse[n].POSITION;
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
                                          } 
                                          
                                          EmployeeEmail.value = "soumya.ravindra@thoughtfocus.com";
                              ManagerEmail.value = "soumya.ravindra@thoughtfocus.com";
                                       //   EmployeeEmail.value = myresponse[n].EMAIL;
                             // ManagerEmail.value = myresponse[n].MANAGER_EMAIL_ID;
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
DepartmentID.value = "";
DepartmentName.value = "";
Division.value = "";
DivisionID.value = "";
Title.value = "";
CampusExtension.value = "";
AppropriateAdministrator.value = "";
ManagerUserID.value = "";
ManagerName.value = "";
EmployeeUserID.value = "";
AppointmentEndDate.value = "";
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
 * @function hr_access_request_hr_access_request_form.generated_CampusEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CampusEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_DepartmentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_DepartmentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_DepartmentID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_DepartmentID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_Title_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_Title_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_CampusExtension_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CampusExtension_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_Division_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_Division_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_AppropriateAdministrator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_AppropriateAdministrator_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_EmploymentType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_EmploymentType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == 2){
   // TempEndDate.enabled = true;
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
 * @function hr_access_request_hr_access_request_form.generated_EmploymentCatagory_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_EmploymentCatagory_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == 5){
    OthersValue.enabled = true;
  }else{
    OthersValue.value = "";
    OthersValue.enabled = false;
  }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TypeOfAccess_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TypeOfAccess_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToBusinessAnalyst"){
if(TypeOfAccess.value===null){
  HumanResourcesDistributedTable.enabled = false;
  HumanResourcesCoreTable.enabled=false;
  SelectButton.enabled = false;
  FCRButtonsPanel.enabled = false;
  FDRButtonsPanel.enabled = false;
 
    OthersHumanResource.enabled = false;
     OthersHumanResourceText.enabled = false;
  
     OthersHumanResourceCore.enabled = false;
     OthersHumanResourceCoreText.enabled = false;
    
  
debugger;
    if (this.value == 1) {
       HumanResourcesDistributedRoles.visible = true;
          HumanResourcesCoreCentralRoles.visible = false;
        HumanResourcesDistributedTable.enabled = true;
        HumanResourcesCoreTable.enabled = false;
     
      
       
        OthersHumanResourceCore.enabled = false;
        OthersHumanResourseCoreText.enabled = false;
        
        OthersHumanResource.enabled = true;
        OthersHumanResourceText.enabled = true;
      
        
    }  if (this.value == 2) {
       HumanResourcesDistributedRoles.visible = false;
          HumanResourcesCoreCentralRoles.visible = true;
        HumanResourcesDistributedTable.enabled = false;
        HumanResourcesCoreTable.enabled = true;
      
        OthersHumanResourceCore.enabled = true;
        OthersHumanResourseCoreText.enabled = true;
      
        OthersHumanResource.enabled = false;
        OthersHumanResourceText.enabled = false;
     

    }else{
        OthersHumanResourceCore.enabled = false;
        OthersHumanResourseCoreText.enabled = false;
      
        OthersHumanResource.enabled = false;
        OthersHumanResourceText.enabled = false;
    }
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TypeOfAccess_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TypeOfAccess_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value=="1"){
  OthersHumanResource.enabled = true;
  OthersHumanResourceCore.enabled=false;
}
if(this.value=="2"){
  OthersHumanResource.enabled=false;
  OthersHumanResourceCore.enabled=true;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TypeOfAccess_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TypeOfAccess_init2 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value !== null){
debugger;
  if(this.value == "1"){
    HumanResourcesDistributedRoles.visible = true;
          HumanResourcesCoreCentralRoles.visible = false;
  }
  if(this.value == "2"){
      HumanResourcesDistributedRoles.visible = false;
          HumanResourcesCoreCentralRoles.visible = true;
  }
//}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TypeOfAccess_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TypeOfAccess_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor") {

    SelectButton.enabled = false;

    if (AccessTypeFlag.value === null) {
        AccessTypeFlag.value = "1";


        if (this.value == 1) {
          HumanResourcesDistributedRoles.visible = true;
          HumanResourcesCoreCentralRoles.visible = false;
            HumanResourcesDistributedTable.enabled = true;
            HumanResourcesCoreTable.enabled = false;
            FCRButtonsPanel.enabled = false;
            FDRButtonsPanel.enabled = true;
            OthersHumanResource.enabled = true;
            OthersHumanResourceText.enabled = false;
          var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
              HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value = null;
            }
            var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreOption.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreRole.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(rowcount2 - 1);
OthersHumanResourceCore.value = "";
            OthersHumanResourseCoreText.value = "";
             CoreOption.value="";
             CoreRole.value=""; 
        }
        if (this.value == 2) {
           HumanResourcesDistributedRoles.visible = false;
    HumanResourcesCoreCentralRoles.visible = true;
            HumanResourcesDistributedTable.enabled = false;
            HumanResourcesCoreTable.enabled = true;
            FCRButtonsPanel.enabled = true;
            FDRButtonsPanel.enabled = false;
            OthersHumanResourceCore.enabled = true;
            OthersHumanResourseCoreText.enabled = false;
          var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
                HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
            }
            var rowcount2 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Role.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.removeInstance(rowcount2 - 1);
OthersHumanResourceCore.enabled = true;
            OthersHumanResourseCoreText.enabled = false;
            OthersHumanResource.enabled = false;
            OthersHumanResourceText.enabled = false;
            OthersHumanResource.value = "";
            OthersHumanResourceText.value = "";
            Option.value = "";
            Role.value = "";
            DeptOrNodes.value = "";
        }
    } else {
       

        OthersHumanResource.value = "";
        OthersHumanResourceText.value = "";
      DeptOrNodes.value = "";
     

       
        if (this.value == 1) {
            showErrorModal("Alert!", "You have changed the User Access Type. Central Roles will be cleared. Do you want to continue?");
          HumanResourcesDistributedRoles.visible = true;
    HumanResourcesCoreCentralRoles.visible = false;
            HumanResourcesDistributedTable.enabled = true;
            HumanResourcesCoreTable.enabled = false;
            FCRButtonsPanel.enabled = false;
            FDRButtonsPanel.enabled = true;

         /*   OthersHumanResourceCore.value = "";
            OthersHumanResourseCoreText.value = "";
             CoreOption.value="";
             CoreRole.value=""; */

            debugger;
            var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
              HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].Role.value = null;
            }
            var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreOption.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreRole.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(rowcount2 - 1);

            OthersHumanResource.enabled = true;
            OthersHumanResourceText.enabled = false;
            OthersHumanResourceCore.enabled = false;
            OthersHumanResourseCoreText.enabled = false;
          
            OthersHumanResourceCore.value = "";
            OthersHumanResourseCoreText.value = "";
             CoreOption.value="";
             CoreRole.value=""; 

        } else {
 showErrorModal("Alert!", "You have changed the User Access Type. Distributed Roles will be cleared. Do you want to continue?");
          HumanResourcesDistributedRoles.visible = false;
    HumanResourcesCoreCentralRoles.visible = true;
            HumanResourcesCoreTable.enabled = true;
            HumanResourcesDistributedTable.enabled = false;
            FCRButtonsPanel.enabled = true;
            FDRButtonsPanel.enabled = false;


            debugger;
            var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
                HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
            }
            var rowcount2 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Role.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.removeInstance(rowcount2 - 1);
            debugger;

            OthersHumanResourceCore.enabled = true;
            OthersHumanResourseCoreText.enabled = false;
            OthersHumanResource.enabled = false;
            OthersHumanResourceText.enabled = false;
            OthersHumanResource.value = "";
            OthersHumanResourceText.value = "";
            Option.value = "";
            Role.value = "";
            DeptOrNodes.value = "";


        }
    }

}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TypeOfAccess_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TypeOfAccess_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor") {
    debugger;
    if (this.value == 1) {
        SelectButton.enabled = true;
var distrubetRolesArray = ["Student Appointment Processing", "Receives Confirmation Tickets via Email", "Student Time Reporting", "Student Job Roster", "PTF, Appointments/Contract Processing", "PTF Approval", "Recruiting", "Staff/MPP Roster", "CWID Search", "Faculty Roster", "Employee Funding and Dept Position Rosters", "LCD Reports (Labor Expense, Salary Expenditures &Projections and Salary Expenditures History Page)", "Funding Department Rosters", "Absence Management Timekeeper", "Emergency Contact Roster for Managers (*Managers Only)","Student Worker/Hourly Staff Timesheet Approval (For Managers Only)"];
       var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
                    for (n = 0; n < rowcount1; n++) {
                        HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.items = distrubetRolesArray;
                    }
     /*   $.ajax({
            type: 'GET',
            url: "/bin/getFinancialARFData",
            data: {
                dept: "HR Distributed Roles",
                section: "HR_DR",
                status: "Yes",
                action: "ARF_ROLE"
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
                    var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
                    for (n = 0; n < rowcount1; n++) {
                        HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.items = deptResult;
                    }
                } else {
                    showErrorModal("Alert!", "No matching records found");
                }
            }
        });*/
    }
    if (this.value == 2) {
        SelectButton.enabled = false;
      var centralRolesArray = ["FAR Mgmt", "FAR Staff", "Benefits", "Compensation", "Diversity/Equity", "Employment", "Labor Relations", "Risk Mgmt", "LCD Finance Basic", "LCD Funding", "LCD Payroll", "LCD Budget", "Payroll SME", "Payroll Counter", "Payroll AM SME", "Payroll Staff", "Position Mgmt", "Recruiting"]; 
       var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
                    for (n = 0; n < rowcount2; n++) {
                        HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreRole.items = centralRolesArray;
                    }

    /*    $.ajax({
            type: 'GET',
            url: "/bin/getFinancialARFData",
            data: {
                dept: "HR Central Roles",
                section: "HR_CR",
                status: "Yes",
                action: "ARF_ROLE"
            },
            dataType: 'json',
            success: function(deptResultSet) {
                if (deptResultSet.length !== 0) {
                    //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");
                    var deptResult = [];
                    for (var i = 0; i < deptResultSet.length; i++) {
                        var item = deptResultSet[i].ROLE_NAME;
                        deptResult.push(item);
                    }
                    var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
                    for (n = 0; n < rowcount2; n++) {
                        HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreRole.items = deptResult;
                    }
                } else {
                    showErrorModal("Alert!", "No matching records found");
                }
            }
        });*/
    }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_DOATemporary_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_DOATemporary_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_DOAPermanent_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_DOAPermanent_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_ExpiryFlag_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ExpiryFlag_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_FormStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FormStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "In Process";
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated__init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated__init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToBusinessAnalyst"){
if(TypeOfAccess.value===null){
  HumanResourcesDistributedTable.enabled = false;
  HumanResourcesCoreTable.enabled=false;
  SelectButton.enabled = false;
  FCRButtonsPanel.enabled = false;
  FDRButtonsPanel.enabled = false;
 
    OthersHumanResource.enabled = false;
     OthersHumanResourceText.enabled = false;
  
     OthersHumanResourceCore.enabled = false;
     OthersHumanResourceCoreText.enabled = false;
    
  
debugger;
    if (this.value == 1) {
        HumanResourcesDistributedTable.enabled = true;
        HumanResourcesCoreTable.enabled = false;
      
       
        OthersHumanResourceCore.enabled = false;
        OthersHumanResourseCoreText.enabled = false;
        
        OthersHumanResource.enabled = true;
        OthersHumanResourceText.enabled = true;
      
        
    }  if (this.value == 2) {
        HumanResourcesDistributedTable.enabled = false;
        HumanResourcesCoreTable.enabled = true;
      
        OthersHumanResourceCore.enabled = true;
        OthersHumanResourseCoreText.enabled = true;
      
        OthersHumanResource.enabled = false;
        OthersHumanResourceText.enabled = false;
     

    }else{
        OthersHumanResourceCore.enabled = false;
        OthersHumanResourseCoreText.enabled = false;
      
        OthersHumanResource.enabled = false;
        OthersHumanResourceText.enabled = false;
    }
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated__init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated__init1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value=="1"){
  OthersHumanResource.enabled = true;
  OthersHumanResourceCore.enabled=false;
}
if(this.value=="2"){
  OthersHumanResource.enabled=false;
  OthersHumanResourceCore.enabled=false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated__valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated__valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor") {

    SelectButton.enabled = false;

    if (AccessTypeFlag.value === null) {
        AccessTypeFlag.value = "1";


        if (this.value == 1) {
            HumanResourcesDistributedTable.enabled = true;
            HumanResourcesCoreTable.enabled = false;
            FCRButtonsPanel.enabled = false;
            FDRButtonsPanel.enabled = true;
            OthersHumanResource.enabled = true;
            OthersHumanResourceText.enabled = false;
          var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
              HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value = null;
            }
            var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreOption.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreRole.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(rowcount2 - 1);
OthersHumanResourceCore.value = "";
            OthersHumanResourseCoreText.value = "";
             CoreOption.value="";
             CoreRole.value=""; 
        }
        if (this.value == 2) {
            HumanResourcesDistributedTable.enabled = false;
            HumanResourcesCoreTable.enabled = true;
            FCRButtonsPanel.enabled = true;
            FDRButtonsPanel.enabled = false;
            OthersHumanResourceCore.enabled = true;
            OthersHumanResourseCoreText.enabled = false;
          var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
                HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
            }
            var rowcount2 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Role.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.removeInstance(rowcount2 - 1);
OthersHumanResourceCore.enabled = true;
            OthersHumanResourseCoreText.enabled = false;
            OthersHumanResource.enabled = false;
            OthersHumanResourceText.enabled = false;
            OthersHumanResource.value = "";
            OthersHumanResourceText.value = "";
            Option.value = "";
            Role.value = "";
            DeptOrNodes.value = "";
        }
    } else {
       

        OthersHumanResource.value = "";
        OthersHumanResourceText.value = "";
      DeptOrNodes.value = "";
     

       
        if (this.value == 1) {
            showErrorModal("Alert!", "You have changed the User Access Type. Central Roles will be cleared. Do you want to continue?");
            HumanResourcesDistributedTable.enabled = true;
            HumanResourcesCoreTable.enabled = false;
            FCRButtonsPanel.enabled = false;
            FDRButtonsPanel.enabled = true;

         /*   OthersHumanResourceCore.value = "";
            OthersHumanResourseCoreText.value = "";
             CoreOption.value="";
             CoreRole.value=""; */

            debugger;
            var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
              HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].Role.value = null;
            }
            var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreOption.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.instances[rowcount2 - 1].CoreRole.value = null;
            HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(rowcount2 - 1);

            OthersHumanResource.enabled = true;
            OthersHumanResourceText.enabled = false;
            OthersHumanResourceCore.enabled = false;
            OthersHumanResourseCoreText.enabled = false;
          
            OthersHumanResourceCore.value = "";
            OthersHumanResourseCoreText.value = "";
             CoreOption.value="";
             CoreRole.value=""; 

        } else {
 showErrorModal("Alert!", "You have changed the User Access Type. Distributed Roles will be cleared. Do you want to continue?");
            HumanResourcesCoreTable.enabled = true;
            HumanResourcesDistributedTable.enabled = false;
            FCRButtonsPanel.enabled = true;
            FDRButtonsPanel.enabled = false;


            debugger;
            var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            for (n = 0; n < rowcount1; n++) {
                HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
                HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
            }
            var rowcount2 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Option.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.instances[rowcount2 - 1].Role.value = null;
            HumanResourcesDistributedRolesTable.instanceManager.removeInstance(rowcount2 - 1);
            debugger;

            OthersHumanResourceCore.enabled = true;
            OthersHumanResourseCoreText.enabled = false;
            OthersHumanResource.enabled = false;
            OthersHumanResourceText.enabled = false;
            OthersHumanResource.value = "";
            OthersHumanResourceText.value = "";
            Option.value = "";
            Role.value = "";
            DeptOrNodes.value = "";


        }
    }

}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated__valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated__valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor") {
    debugger;
    if (this.value == 1) {
        SelectButton.enabled = true;
      
var distrubetRolesArray = ["Student Appointment Processing", "Receives Confirmation Tickets via Email", "Student Time Reporting", "Student Job Roster", "PTF, Appointments/Contract Processing", "PTF Approval", "Recruiting", "Staff/MPP Roster", "CWID Search", "Faculty Roster", "Employee Funding and Dept Position Rosters", "LCD Reports (Labor Expense, Salary Expenditures &Projections and Salary Expenditures History Page)", "Funding Department Rosters", "Absence Management Timekeeper", "Emergency Contact Roster for Managers (*Managers Only)"];
       var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
      for (n = 0; n < rowcount1; n++) {
                        HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.items = deptResult;
                    }
   /*     $.ajax({
            type: 'GET',
            url: "/bin/getFinancialARFData",
            data: {
                dept: "HR Distributed Roles",
                section: "HR_DR",
                status: "Yes",
                action: "ARF_ROLE"
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
                    var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
                    for (n = 0; n < rowcount1; n++) {
                        HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.items = deptResult;
                    }
                } else {
                    showErrorModal("Alert!", "No matching records found");
                }
            }
        });*/
    }
    if (this.value == 2) {
        SelectButton.enabled = false;
        $.ajax({
            type: 'GET',
            url: "/bin/getFinancialARFData",
            data: {
                dept: "HR Central Roles",
                section: "HR_CR",
                status: "Yes",
                action: "ARF_ROLE"
            },
            dataType: 'json',
            success: function(deptResultSet) {
                if (deptResultSet.length !== 0) {
                    //   var jobCodeSelect = document.querySelector(".DeptRoleSelect select");
                    var deptResult = [];
                    for (var i = 0; i < deptResultSet.length; i++) {
                        var item = deptResultSet[i].ROLE_NAME;
                        deptResult.push(item);
                    }
                    var rowcount2 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
                    for (n = 0; n < rowcount2; n++) {
                        HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreRole.items = deptResult;
                    }
                } else {
                    showErrorModal("Alert!", "No matching records found");
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_Option_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_Option_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
var optionVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value;
var roleVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value;
var fdrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesDistributedRolesTable.instanceIndex != n && fdrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
     fdrValidation = false;
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fdrValidation === true){
showErrorModal("Alert!","Duplicate rows");
HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
fdrValidation = false;
break;
}
}
}
  
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_Role_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_Role_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
var optionVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value;
var roleVal = HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value;
var fdrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesDistributedRolesTable.instanceIndex != n && fdrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
     fdrValidation = false;
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fdrValidation === true){
showErrorModal("Alert!","Duplicate rows");
HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Option.value = null;
HumanResourcesDistributedRolesTable.instanceManager.instances[HumanResourcesDistributedRolesTable.instanceIndex].Role.value = null;
HumanResourcesDistributedRolesTable.instanceManager.removeInstance(HumanResourcesDistributedRolesTable.instanceIndex);
fdrValidation = false;
break;
}
}
}
  
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_RemoveButton1_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_RemoveButton1_click0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor"){	
	
  	
  
   
    var indexValue = HumanResourcesDistributedRolesTable.instanceIndex;  
  
	 HumanResourcesDistributedRolesTable.instanceManager.instances[indexValue].Option.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.instances[indexValue].Role.value = null;
     HumanResourcesDistributedRolesTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FDRAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FDRAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToBusinessAnalyst") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    var rowcount = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
    HumanResourcesDistributedTable.HumanResourcesDistributedRolesTable.instanceManager.addInstance();
    rowcount = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;
    var deptResult = [];
 /* var distrubetRolesArray = ["Student Appointment Processing", "Receives Confirmation Tickets via Email", "Student Time Reporting", "Student Job Roster", "PTF, Appointments/Contract Processing", "PTF Approval", "Recruiting", "Staff/MPP Roster", "CWID Search", "Faculty Roster", "Employee Funding and Dept Position Rosters", "LCD Reports (Labor Expense, Salary Expenditures &Projections and Salary Expenditures History Page)", "Funding Department Rosters", "Absence Management Timekeeper", "Emergency Contact Roster for Managers (*Managers Only)"];*/
  
  var distrubetRolesArray = ["Student Appointment Processing", "Receives Confirmation Tickets via Email", "Student Time Reporting", "Student Job Roster", "PTF, Appointments/Contract Processing", "PTF Approval", "Recruiting", "Staff/MPP Roster", "CWID Search", "Faculty Roster", "Employee Funding and Dept Position Rosters", "LCD Reports (Labor Expense, Salary Expenditures &Projections and Salary Expenditures History Page)", "Funding Department Rosters", "Absence Management Timekeeper", "Emergency Contact Roster for Managers (*Managers Only)","Student Worker/Hourly Staff Timesheet Approval (For Managers Only)"];
      
  HumanResourcesDistributedRolesTable.instanceManager.instances[lastRow].Role.items = distrubetRolesArray;
  /*  $.ajax({

        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "HR Distributed Roles",
            section: "HR_DR",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {
                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                HumanResourcesDistributedRolesTable.instanceManager.instances[lastRow].Role.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });*/
gifModal.style.display = "none";
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersHumanResource_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersHumanResource_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" ){
  if(this.value == "1"){
    OthersHumanResourceText.enabled = true;
    OthersHumanResourceText.mandatory = true;
  } else{
    OthersHumanResourceText.enabled = false;
    OthersHumanResourceText.value = "";
    OthersHumanResourceText.mandatory = false;
  }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersHumanResource_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersHumanResource_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" ){
  if(this.value == "1"){
    OthersHumanResourceText.enabled = true;
    OthersHumanResourceText.mandatory = true;
  } else{
    OthersHumanResourceText.enabled = false;
    OthersHumanResourceText.value = "";
    OthersHumanResourceText.mandatory = false;
  }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersHumanResourceText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersHumanResourceText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_SelectButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_SelectButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor"){
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
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
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
                //tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("cb");/*
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };*/
                //var cell1 = tr.insertCell(-1);
                //cell1.appendChild(selectAllButton);
                /*var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };*/
                //var cell2 = tr.insertCell(-1);
                //cell2.appendChild(unselectAllButton);
                    
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
                
              /*if(DeptOrNodes.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }  */
               if(DeptOrNodes.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }else{
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
                var selectedVal = (DeptOrNodes.value).split(",");
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
                     if(myresopnse[b].DEPTID == (DeptOrNodes.value).trim()){
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
               DeptOrNodes.value = result;
                
                  
                  
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
}
  

        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_DeptOrNodes_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_DeptOrNodes_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
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
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
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
                //tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("cb");/*
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };*/
                //var cell1 = tr.insertCell(-1);
                //cell1.appendChild(selectAllButton);
                /*var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };*/
                //var cell2 = tr.insertCell(-1);
                //cell2.appendChild(unselectAllButton);
                    
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
              if(DeptOrNodes.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
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
               DepReportingAccess.value = result;
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
}
  

        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_CoreOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CoreOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
var optionVal = HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value;
var roleVal = HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreOption.value;
    var roleVal1 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesCoreCentralRolesTable.instanceIndex != n && fcrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
     fcrValidation = false;
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value = null;
HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value = null;
HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
fcrValidation = false;
break;
}

}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_CoreRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CoreRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
var optionVal = HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value;
var roleVal = HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreOption.value;
    var roleVal1 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && HumanResourcesCoreCentralRolesTable.instanceIndex != n && fcrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
     fcrValidation = false;
     break;
   }
  if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
showErrorModal("Alert!","Duplicate rows");
HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreOption.value = null;
HumanResourcesCoreCentralRolesTable.instanceManager.instances[HumanResourcesCoreCentralRolesTable.instanceIndex].CoreRole.value = null;
HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(HumanResourcesCoreCentralRolesTable.instanceIndex);
fcrValidation = false;
break;
}

}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_RemoveButton2_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_RemoveButton2_click0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToBusinessAnalyst"){	
	
  	
  
    var rowCountToRemove = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
    var indexValue = HumanResourcesCoreCentralRolesTable.instanceIndex;   
  
	 HumanResourcesCoreCentralRolesTable.instanceManager.instances[indexValue].CoreOption.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.instances[indexValue].CoreRole.value = null;
     HumanResourcesCoreCentralRolesTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FDRAddButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FDRAddButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToBusinessAnalyst") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    var rowcount = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
    HumanResourcesCoreTable.HumanResourcesCoreCentralRolesTable.instanceManager.addInstance();
    rowcount = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;
    var deptResult = [];
var centralRolesArray = ["FAR Mgmt", "FAR Staff", "Benefits", "Compensation", "Diversity/Equity", "Employment", "Labor Relations", "Risk Mgmt", "LCD Finance Basic", "LCD Funding", "LCD Payroll", "LCD Budget", "Payroll SME", "Payroll Counter", "Payroll AM SME", "Payroll Staff", "Position Mgmt", "Recruiting"]; 
  HumanResourcesCoreCentralRolesTable.instanceManager.instances[lastRow].CoreRole.items = centralRolesArray;
  /*  $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            dept: "HR Central Roles",
            section: "HR_CR",
            status: "Yes",
            action: "ARF_ROLE"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {
                for (var m = 0; m < myresponse.length; m++) {
                    deptResult.push(myresponse[m].ROLE_NAME);
                }

                HumanResourcesCoreCentralRolesTable.instanceManager.instances[lastRow].CoreRole.items = deptResult;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        },
    });*/

 gifModal.style.display = "none";
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersHumanResourceCore_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersHumanResourceCore_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" ){
  if(this.value == "1"){
    OthersHumanResourseCoreText.enabled = true;
    OthersHumanResourseCoreText.mandatory = true;
  } else{
    OthersHumanResourseCoreText.enabled = false;
    OthersHumanResourseCoreText.value = "";
    OthersHumanResourseCoreText.mandatory = false;
  }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersHumanResourceCore_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersHumanResourceCore_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" ){
  if(this.value == "1"){
    OthersHumanResourseCoreText.enabled = true;
    OthersHumanResourseCoreText.mandatory = true;
  } else{
    OthersHumanResourseCoreText.enabled = false;
    OthersHumanResourseCoreText.value = "";
    OthersHumanResourseCoreText.mandatory = false;
  }
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_OthersHumanResourseCoreText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_OthersHumanResourseCoreText_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_Comments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_Comments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  this.visible=false;
}
else{
  this.visible=true;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_ExpiryMessage_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ExpiryMessage_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_SecurityAdminsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_SecurityAdminsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value==="ToSecurityAdminFromISO" || StageIndicator.value=="ToSecurityAdminFromTimer"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
SecurityAdminSignature.value = userValue;
SecurityAdminSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

SecurityAdminSignature.enabled = false;
SecurityAdminSignatureDate.enabled = false;



}else{
SecurityAdminSignature.value = "";
SecurityAdminSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_SecurityAdminSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_SecurityAdminSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_SecurityAdminSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_SecurityAdminSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_SecurityAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_SecurityAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value=== "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_CISOCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CISOCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToCISO"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
CISOSignature.value = userValue;
CISOSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

CISOSignature.enabled = false;
CISOSignatureDate.enabled = false;



}else{
CISOSignature.value = "";
CISOSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_CISOSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CISOSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_CISOAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_CISOAdminComments_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_ISOAdminAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ISOAdminAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToISO"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
ISOAdminAnalystSignature.value = userValue;
ISOAdminAnalystSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

ISOAdminAnalystSignature.enabled = false;
ISOAdminAnalystSignatureDate.enabled = false;



}else{
ISOAdminAnalystSignature.value = "";
ISOAdminAnalystSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_ISOAdminAnalystSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ISOAdminAnalystSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_ISOAdminAnalystSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ISOAdminAnalystSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_ISOAdminAnalystComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_ISOAdminAnalystComments_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_FilenetCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FilenetCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToFilenet"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
FilenetSignature.value = userValue;
FilenetSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

FilenetSignature.enabled = false;
FilenetSignatureDate.enabled = false;



}else{
FilenetSignature.value = "";
FilenetSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FilenetSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FilenetSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FilenetComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FilenetComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToFilenet"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FARCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FARCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToFAR"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
FARSignature.value = userValue;
FARSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

FARSignature.enabled = false;
FARSignatureDate.enabled = false;



}else{
FARSignature.value = "";
FARSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FARSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FARSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_FARComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_FARComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToFAR"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TrainersCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TrainersCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToTrainer"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
TrainerSignature.value = userValue;
TrainerSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

TrainerSignature.enabled = false;
TrainerSignatureDate.enabled = false;



}else{
TrainerSignature.value = "";
TrainerSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TrainerSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TrainerSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_TrainerComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_TrainerComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToTrainer"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_BusinessAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_BusinessAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToBusinessAnalyst"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
BusinessAnalystSignature.value = userValue;
BusinessAnalystSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

BusinessAnalystSignature.enabled = false;
BusinessAnalystSignatureDate.enabled = false;



}else{
BusinessAnalystSignature.value = "";
BusinessAnalystSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_BusinessAnalystSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_BusinessAnalystSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_BusinessAnalystComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_BusinessAnalystComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToBusinessAnalyst"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToEmployee"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
EmployeeName.value = userValue;
EmployeeSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

EmployeeName.enabled = false;
EmployeeSignatureDate.enabled = false;



}else{
EmployeeName.value = "";
EmployeeSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_EmployeeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_EmployeeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_EmployeeSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_EmployeeSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_EmployeeComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_EmployeeComments_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_textbox1636351950224_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_textbox1636351950224_init0 = function (scope) {
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
AdministratorName.value = FirstName.value;
AdministratorSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

AdministratorName.enabled = false;
AdministratorSignatureDate.enabled = false;



}else{
AdministratorName.value = "";
AdministratorSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_AdministratorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_AdministratorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToManager"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
AdministratorSignature.value = userValue;
AdministratorSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

AdministratorSignature.enabled = false;
AdministratorSignatureDate.enabled = false;



}else{
AdministratorSignature.value = "";
AdministratorSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_AdministratorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_AdministratorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_AdministratorComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_AdministratorComments_init0 = function (scope) {
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
 * @function hr_access_request_hr_access_request_form.generated_InititorsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_InititorsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
InitiatorSignature.value = userValue;
InitiatorSignatureDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

InitiatorSignature.enabled = false;
InitiatorSignatureDate.enabled = false;



}else{
InitiatorSignature.value = "";
InitiatorSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_InitiatorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_InitiatorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_InitiatorComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_InitiatorComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToRequestor" || StageIndicator.value === null){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
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
            jsonData.append('formPath', '/content/forms/af/hr-access-request/hr-access-request-form');
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
 * @function hr_access_request_hr_access_request_form.generated_saveguidedraft1600234692666_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_saveguidedraft1600234692666_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value+", Form ID : "+CaseID.value;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hr_access_request_hr_access_request_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var email = "soumya.ravindra@thoughtfocus.com";



EmployeeEmail.value = email;
ManagerEmail.value = email;
RequestorEmail.value = email;

if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value+", Form ID : "+CaseID.value;
 EmailSubject.value = "HR Access Request Form ["+ CaseID.value+"] for Your Review and Approval";
 FinalEmailSubject.value = "Congratulations, Access Granted to HR System";
  ISORejectSubject.value = "HR Access Request Form ["+ CaseID.value+"] Rejected by Information Security Officer";
  RejectEmailSubject.value = "HR Access Request Form ["+ CaseID.value+"] Rejected by Manager";
  SecurityAdminCompletionEmailSubject.value = "HR Access Request - "+LastName.value+", "+FirstName.value+" - "+CaseID.value;
}


  if(InitiatorComments.value !== null ){
/*  if(Comments.value !== null && (Comments.value).lastIndexOf(InitiatorComments.value) == -1){  
  Comments.value = Comments.value+"\n"+"Initiator's Comments :"+InitiatorComments.value;*/
  Comments.value = "Initiator Comments : "+ InitiatorComments.value;
  }else{
    Comments.value = "Initiator's Comments :";
  }
var valFlag = true;
if(TypeOfAccess.value == "1" && valFlag === true && OthersHumanResource.value === null){
  CentralUser.value = "0";
var rowcount1 = HumanResourcesDistributedRolesTable.instanceManager.instanceCount;
if(rowcount1 >= 1){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Option.value;
    var roleVal1 = HumanResourcesDistributedRolesTable.instanceManager.instances[n].Role.value;   
   if(optionVal1 === null && roleVal1 === null){
     showErrorModal("Alert!","Please select the roles");
     guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].HumanResourcesDistributedRoles[0]");
     valFlag = false;
     break;
   }
   if((optionVal1 === null && roleVal1 !== null) || (optionVal1 !== null && roleVal1 === null)){
     showErrorModal("Alert!","Please select the roles");
     guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].HumanResourcesDistributedRoles[0]");
     valFlag = false;
     break;
   }
 /* if(roleVal1 == "PTF, Appointments/Contract Processing" || roleVal1 == "PTF Approval" || roleVal1 == "Recruiting" ){
    IsFAR.value = "1";
  }*/
}
}
}
if(TypeOfAccess.value == "2" && valFlag === true && OthersHumanResourceCore.value === null){
  CentralUser.value = "1";
  var rowcount1 = HumanResourcesCoreCentralRolesTable.instanceManager.instanceCount;
if(rowcount1 >= 1){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreOption.value;
    var roleVal1 = HumanResourcesCoreCentralRolesTable.instanceManager.instances[n].CoreRole.value;   
   if(optionVal1 === null && roleVal1 === null){
     valFlag  = false;
     showErrorModal("Alert!","Please select the roles");
     guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].HumanResourcesCoreCentralRoles[0]");
     break;
   }
   if((optionVal1 === null && roleVal1 !== null) || (optionVal1 !== null && roleVal1 === null)){
     showErrorModal("Alert!","Please select the roles");
     guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].HumanResourcesCoreCentralRoles[0]");
     valFlag  = false;
     break;
   }
  /* if(roleVal1 == "Recruiting" ){
    IsFAR.value = "1";
  }*/
}
}
}

var managerUserIDVal = ManagerUserID.value;
var managerEmailIDVal = ManagerEmail.value;
var managerNameVal = ManagerName.value;

if (managerUserIDVal !== null && managerNameVal !== null && managerUserIDVal !== "" && managerNameVal !== "") {
    if (managerUserIDVal.toLowerCase().includes("admin") && managerNameVal.toLowerCase().includes("admin")) {
        showErrorModal("Alert!", "Supervisor's information not found. Please contact help desk.");
        valFlag = false;
    }
} else {
    showErrorModal("Alert!", "Supervisor's information not found. Please contact help desk.");
    valFlag = false;
}

if (valFlag === true) {
    AccessTypeFlag.value = null;
    guideBridge.submit();
}




        }
	}
}
