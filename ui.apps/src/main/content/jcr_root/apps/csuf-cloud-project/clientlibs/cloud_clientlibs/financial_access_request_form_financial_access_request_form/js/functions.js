/**
 * @function financial_access_request_form_financial_access_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
guideBridge.on("validationComplete" , function(event, payload) {  
if(StageIndicator.value == "ToManager"  && AccessCB.value == 1 ){
  if(AdminComments.value !== null && (Comments.value).lastIndexOf(AdminComments.value) == -1){
 // if((Comments.value).lastIndexOf(AdminComments.value) == -1){  
  Comments.value = Comments.value+"\n"+"Administrator's Comments :"+AdminComments.value;
  }else{
    Comments.value = Comments.value+"\n"+"Administrator's Comments :";
  }
}
 
  if(StageIndicator.value == "ToEmployee" && EmployeeCB.value == 1){
  if(EmployeeComments.value !== null && (Comments.value).lastIndexOf(EmployeeComments.value) == -1){
   // if((Comments.value).lastIndexOf(EmployeeComments.value) == -1){  
    Comments.value = Comments.value+"\n"+"Employee's Comments :"+EmployeeComments.value;
  }else{
     Comments.value = Comments.value+"\n"+"Employee's Comments :";
  }
}
  if(StageIndicator.value == "ToBusinessAnalyst" && BusinessAnalystCB.value == 1){
 if(BusinessAnalystComments.value !== null && (Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
   // if((Comments.value).lastIndexOf(BusinessAnalystComments.value) == -1){
    Comments.value = Comments.value+"\n"+"Business Analyst's Comments :"+BusinessAnalystComments.value;
  }else{
     Comments.value = Comments.value+"\n"+"Business Analyst's Comments :";
  }
}
  if(StageIndicator.value == "ToTrainer"  && TrainerCB.value == 1){
  if(TrainerComments.value !== null && (Comments.value).lastIndexOf(TrainerComments.value) == -1){
   //if((Comments.value).lastIndexOf(TrainerComments.value) == -1){
    Comments.value = Comments.value+"\n"+"Trainer's Comments :"+TrainerComments.value;
  }else{
     Comments.value = Comments.value+"\n"+"Trainer's Comments :";
  }
}
  if(StageIndicator.value == "ToBudgetOffice"  && BudgetAnalystCB.value == 1){
  if(BudgetAnalystComments.value !== null && (Comments.value).lastIndexOf(BudgetAnalystComments.value) == -1){
   // if((Comments.value).lastIndexOf(BudgetAnalystComments.value) == -1){
    Comments.value = Comments.value+"\n"+"Budget Office Reviewer's Comments :"+BudgetAnalystComments.value;
  }else{
     Comments.value = Comments.value+"\n"+"Budget Office Reviewer's Comments :";
  }
}
    if(StageIndicator.value == "ToBudgetContact"  && BudgetContactCB.value == 1){
  if(BudgetContactComments.value !== null && (Comments.value).lastIndexOf(BudgetContactComments.value) == -1){
   // if((Comments.value).lastIndexOf(BudgetContactComments.value) == -1){
    Comments.value = Comments.value+"\n"+"Budget Conatct Reviewer's Comments :"+BudgetContactComments.value;
  }else{
     Comments.value = Comments.value+"\n"+"Budget Conatct Reviewer's Comments :";
  }
}
  if(StageIndicator.value == "ToISO"  && ISOAdminCB.value == 1){
  if(ISOAdminComments.value !== null && (Comments.value).lastIndexOf(ISOAdminComments.value) == -1){
    Comments.value = Comments.value+"\n"+"ISO Admin's Comments :"+ISOAdminComments.value;
  }else{
    Comments.value = Comments.value+"\n"+"ISO Admin's Comments :";
  }
}
  if(StageIndicator.value == "ToCISO"  && CISOCB.value == 1){
 if(CISOComments.value !== null && (Comments.value).lastIndexOf(CISOComments.value) == -1){
   // if((Comments.value).lastIndexOf(CISOComments.value) == -1){
    Comments.value = Comments.value+"\n"+"CISO Admin's Comments :"+CISOComments.value;
  }else{
    Comments.value = Comments.value+"\n"+"CISO Admin's Comments :";
  }
}
  if((StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromManager" || StageIndicator.value == "ToSecurityAdminFromTimer")  && SecurityAdminCB.value == 1){
  if(SecurityAdminComments.value !== null && (Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
   //if((Comments.value).lastIndexOf(SecurityAdminComments.value) == -1){
    Comments.value = Comments.value+"\n"+"Security Admin's Comments :"+SecurityAdminComments.value;
  }else{
     Comments.value = Comments.value+"\n"+"Security Admin's Comments :";
  }
}
});
  









        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var title = "";
if (StageIndicator.value === null) {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    EmpSignPanel.visible = false;
    AdminSignPanel.visible = false;
    BudgetAnalystPanel.visible = false;
    InitiatorPanel.visible = true;
    BusinessAnalystPanel.visible = false;
    TrainerPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;
  BudgetContactPanel.visible = false;
} else {
    var title = StageIndicator.value;

  debugger;
    if (StageIndicator.value == "ToISO") {
        employeeInformation.visible = true;
        if (TypeOfAccess.value == 1) {
            FinanceCoreCentralRoles.visible = false;
            FDRPanel.visible = true;
        } else if (TypeOfAccess.value == 2) {
            FinanceCoreCentralRoles.visible = true;
            FDRPanel.visible = false;
        } else {
            FinanceCoreCentralRoles.visible = false;
            FDRPanel.visible = false;
        }
        Signatures.visible = true;
        DOAReqApproverOnlyPanel.visible = true;
        DOAReqApproverOnlyPanel.enabled = false;
        employeeInformation.enabled = false;
        FinanceDistributedRoles.enabled = false;
        FinanceCoreCentralRoles.enabled = false;

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
        if (BudgetAnalystCB.value == "1") {
            BudgetAnalystPanel.visible = true;
            BudgetAnalystPanel.enabled = false;
        } else {
            BudgetAnalystPanel.visible = false;
        }
       if (BudgetContactCB.value == "1") {
            BudgetContactPanel.visible = true;
            BudgetContactPanel.enabled = false;
        } else {
            BudgetContactPanel.visible = false;
        }

        TrainerPanel.visible = true;
        TrainerPanel.enabled = false;

        ISOAdminPanel.visible = true;
        ISOAdminPanel.enabled = true;

        CISOAdminSignaturePanel.visible = false;
        SecurityAdminPanel.enabled = false;
    }
    //ISO Entered and Sec Admin completed
    if (StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" ||  StageIndicator.value == "ToSecurityAdminFromManager" || StageIndicator.value == "ToSecurityAdminFromTimer") {
        employeeInformation.visible = true;
        if (TypeOfAccess.value == 1) {
            FinanceCoreCentralRoles.visible = false;
            FDRPanel.visible = true;
        } else if (TypeOfAccess.value == 2) {
            FinanceCoreCentralRoles.visible = true;
            FDRPanel.visible = false;
        } else {
            FinanceCoreCentralRoles.visible = false;
            FDRPanel.visible = false;
        }
        Signatures.visible = true;
        DOAReqApproverOnlyPanel.visible = true;
        DOAReqApproverOnlyPanel.enabled = false;
        employeeInformation.enabled = false;
        FinanceDistributedRoles.enabled = true;
        FinanceCoreCentralRoles.enabled = true;
      if(EmployeeCB.value=="1"){
        EmpSignPanel.visible = true;
        EmpSignPanel.enabled = false;
      }else{
           EmpSignPanel.visible = false;
      }
      if(AccessCB.value == "1"){
        AdminSignPanel.visible = true;
        AdminSignPanel.enabled = false;
      }else{
         AdminSignPanel.visible = false;
      }

        InitiatorPanel.visible = true;
        InitiatorPanel.enabled = false;

        if (BusinessAnalystCB.value == "1") {
            BusinessAnalystPanel.visible = true;
            BusinessAnalystPanel.enabled = false;
        } else {
            BusinessAnalystPanel.visible = false;
        }
        if (BudgetAnalystCB.value == "1") {
            BudgetAnalystPanel.visible = true;
            BudgetAnalystPanel.enabled = false;
        } else {
            BudgetAnalystPanel.visible = false;
        }
       if (BudgetContactCB.value == "1") {
            BudgetContactPanel.visible = true;
            BudgetContactPanel.enabled = false;
        } else {
            BudgetContactPanel.visible = false;
        }
        if (CISOCB.value == "1") {
            CISOAdminSignaturePanel.visible = true;
            CISOAdminSignaturePanel.enabled = false;
        } else {
            CISOAdminSignaturePanel.visible = false;
        }
        if (ISOAdminCB.value == "1") {
            ISOAdminPanel.visible = true;
            ISOAdminPanel.enabled = false;
        } else {
            ISOAdminPanel.visible = false;
        }
        if(TrainerCB.value == "1"){
        TrainerPanel.visible = true;
        TrainerPanel.enabled = false;
        }else{
           TrainerPanel.visible = false;
        }
        SecurityAdminPanel.visible = true;


    }

    //ISO completed and Sec Admin entered
    if (StageIndicator.value == "ToCISO") {
        employeeInformation.visible = true;
        if (TypeOfAccess.value == 1) {
            FinanceCoreCentralRoles.visible = false;
            FDRPanel.visible = true;
        } else if (TypeOfAccess.value == 2) {
            FinanceCoreCentralRoles.visible = true;
            FDRPanel.visible = false;
        } else {
            FinanceCoreCentralRoles.visible = false;
            FDRPanel.visible = false;
        }
        Signatures.visible = true;
        DOAReqApproverOnlyPanel.visible = true;
        DOAReqApproverOnlyPanel.enabled = false;
        employeeInformation.enabled = false;
        FinanceDistributedRoles.enabled = false;
        FinanceCoreCentralRoles.enabled = false;
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
        if (BudgetAnalystCB.value == "1") {
            BudgetAnalystPanel.visible = true;
            BudgetAnalystPanel.enabled = false;
        } else {
            BudgetAnalystPanel.visible = false;
        }
       if (BudgetContactCB.value == "1") {
            BudgetContactPanel.visible = true;
            BudgetContactPanel.enabled = false;
        } else {
            BudgetContactPanel.visible = false;
        }

        TrainerPanel.visible = true;
        TrainerPanel.enabled = false;
        ISOAdminPanel.visible = true;
        ISOAdminPanel.enabled = false;
        CISOAdminSignaturePanel.visible = true;
        SecurityAdminPanel.enabled = false;
    }
}

if (StageIndicator.value == "ToManager") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    EmpSignPanel.visible = false;
    AdminSignPanel.visible = true;
  BudgetContactPanel.visible=false;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = false;
    BudgetAnalystPanel.visible = false;
    TrainerPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}

if (StageIndicator.value == "ToEmployee") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = true;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    BudgetAnalystPanel.visible = false;
  BudgetContactPanel.visible = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    BusinessAnalystPanel.visible = false;
    TrainerPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}

if (StageIndicator.value == "ToBusinessAnalyst") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = true;
    FinanceCoreCentralRoles.enabled = true;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
    BudgetAnalystPanel.visible = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;

    BusinessAnalystPanel.visible = true;
    BusinessAnalystPanel.enabled = true;
    TrainerPanel.visible = false;
 BudgetContactPanel.visible = false;
    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}

if (StageIndicator.value == "ToTrainer") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
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
    if (BudgetAnalystCB.value == "1") {
        BudgetAnalystPanel.visible = true;
        BudgetAnalystPanel.enabled = false;
    } else {
        BudgetAnalystPanel.visible = false;
    }
   if (BudgetContactCB.value == "1") {
            BudgetContactPanel.visible = true;
            BudgetContactPanel.enabled = false;
        } else {
            BudgetContactPanel.visible = false;
        }

    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    TrainerPanel.visible = true;
    TrainerPanel.enabled = true;

    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}

if (StageIndicator.value == "ToBudgetOffice") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;

    BusinessAnalystPanel.visible = false;
    BudgetAnalystPanel.visible = true;

    TrainerPanel.visible = false;

   if (BudgetContactCB.value == "1") {
            BudgetContactPanel.visible = true;
            BudgetContactPanel.enabled = false;
        } else {
            BudgetContactPanel.visible = false;
        }

    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}
if (StageIndicator.value == "ToBudgetContact") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    EmpSignPanel.visible = true;
    EmpSignPanel.enabled = false;

    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;

    BusinessAnalystPanel.visible = false;
    BudgetAnalystPanel.visible = false;
  
   BudgetContactPanel.visible = true;

    TrainerPanel.visible = false;

    ISOAdminPanel.visible = false;
    SecurityAdminPanel.visible = false;
    CISOAdminSignaturePanel.visible = false;

}


debugger;
if (StageIndicator.value == "ToCompleteQueue") {

    employeeInformation.visible = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    Signatures.visible = true;
    DOAReqApproverOnlyPanel.visible = true;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    EmpSignPanel.visible = true;
    AdminSignPanel.visible = true;
   EmpSignPanel.enabled =false;
   AdminSignPanel.enabled =false;
  
    InitiatorPanel.enabled = false;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = true;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
    if (BudgetAnalystCB.value == "1") {
        BudgetAnalystPanel.visible = true;
        BudgetAnalystPanel.enabled = false;
    } else {
        BudgetAnalystPanel.visible = false;
    }
    TrainerPanel.enabled = false;
    ISOAdminPanel.enabled = false;
    if (CISOCB.value == "1") {
        CISOAdminSignaturePanel.visible = true;
        CISOAdminSignaturePanel.enabled = false;
    } else {
        CISOAdminSignaturePanel.visible = false;
    }
    if (SecurityAdminCB.value == "1") {
        SecurityAdminPanel.visible = true;
        SecurityAdminPanel.enabled = false;
    } else {
        SecurityAdminPanel.visible = false;
    }
}

if (StageIndicator.value == "ToRequestor") {

    employeeInformation.visible = true;
  // employeeInformation.enabled = true;
    if (TypeOfAccess.value == 1) {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if (TypeOfAccess.value == 2) {
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    } else {
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
	
    Signatures.visible = true;
   Signatures.enabled = true;
    InitiatorPanel.visible = true;
    DOAReqApproverOnlyPanel.visible = false;
    DOAReqApproverOnlyPanel.enabled = false;
    employeeInformation.enabled = false;
    FinanceDistributedRoles.enabled = false;
    FinanceCoreCentralRoles.enabled = false;
    EmpSignPanel.visible = false;
    AdminSignPanel.visible = false;
   EmpSignPanel.enabled =false;
   AdminSignPanel.enabled =false;
  
    InitiatorPanel.enabled = true;
    if (BusinessAnalystCB.value == "1") {
        BusinessAnalystPanel.visible = false;
        BusinessAnalystPanel.enabled = false;
    } else {
        BusinessAnalystPanel.visible = false;
    }
    if (BudgetAnalystCB.value == "1") {
        BudgetAnalystPanel.visible = false;
        BudgetAnalystPanel.enabled = false;
    } else {
        BudgetAnalystPanel.visible = false;
    }
   if (BudgetContactCB.value == "1") {
            BudgetContactPanel.visible = true;
            BudgetContactPanel.enabled = false;
        } else {
            BudgetContactPanel.visible = false;
        }
    TrainerPanel.enabled = false;
    TrainerPanel.visible = false;
    ISOAdminPanel.enabled = false;
    ISOAdminPanel.visible = false;
    if (CISOCB.value == "1") {
        CISOAdminSignaturePanel.visible = false;
        CISOAdminSignaturePanel.enabled = false;
    } else {
        CISOAdminSignaturePanel.visible = false;
    }
    if (SecurityAdminCB.value == "1") {
        SecurityAdminPanel.visible = false;
        SecurityAdminPanel.enabled = false;
    } else {
        SecurityAdminPanel.visible = false;
    }


}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

/*var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";*/


$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
logUser.value = userValue;
//PreparedBy.value = userValue;

  $.ajax({

  type: 'GET',

  url: "/bin/getEvaluationFormData",
    data : {action : "EMP_DETAILS"},
  dataType: 'json',
  success: function(myresopnse) {
    var preByValue = myresopnse[0].EMP_NAME;
    logUser.value = preByValue;
    /*PreparerEmailID.value = myresopnse[0].EMAILID;
    LoggedInUserDeptID.value = myresopnse[0].DEPTID;
    Division.value = myresopnse[0].DIVSION;*/
    InitiatorUserName.value = preByValue;
    RequestorEmail.value = myresopnse[0].EMAILID;
    RequestorUserId.value = myresopnse[0].EMP_USERID;
  },
  error: function(error) {
    alert("error block=" + error);
  }
});
      
}
}
});
}

        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_basicInformation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_basicInformation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_textdraw1575095828043_copy_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_textdraw1575095828043_copy_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_ApprovalStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ApprovalStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === "ToCompleteQueue"){
  this.value = "Completed";
}else{
   this.value = "Pending";
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CWID_valueCommit0 = function (scope) {
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
            logUser.value = userValue;
            workflow_initiator.value = userValue;
            var cwidValue = CWID.value;
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
                                CampusEmail.value = myresponse[0].EMAIL;
                              	FirstName.value = myresponse[0].FIRST_NAME;
                                LastName.value = myresponse[0].LAST_NAME;
                               	DeptID.value = myresponse[0].DEPTID;
                                DeptName.value = myresponse[0].DEPTNAME;
                              	Divison.value = myresponse[0].FUL_DIVISION_NAME;
                                DivisionID.value = myresponse[0].FUL_DIVISION;
                                Title.value = myresponse[0].DESCR;
                                CampusExt.value = myresponse[0].PHONE;
                              	CampusLocation.value = myresponse[0].BUILDING;
                              	AppropAdmin.value = myresponse[0].MANAGER;
                              
                             var myArr = (myresponse[0].MANAGER).split("|");
                              AppropAdmin.value = myArr[0];
                             ManagerUserID.value = myArr[1];
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
                                EmployeeEmail.value = myresponse[0].EMAIL;
                              ManagerEmail.value = myresponse[0].MANAGER_EMAIL_ID;
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
                                          CampusEmail.value = myresponse[n].EMAIL;
                                          FirstName.value = myresponse[n].FIRST_NAME;
                                          LastName.value = myresponse[n].LAST_NAME;
                                          DeptID.value = myresponse[n].DEPTID;
                                          DeptName.value = myresponse[n].DEPTNAME;
                                          Divison.value = myresponse[n].FUL_DIVISION_NAME;
                                          DivisionID.value = myresponse[n].FUL_DIVISION;
                                          Title.value = myresponse[n].DESCR;
                                          CampusExt.value = myresponse[n].PHONE;
                                          CampusLocation.value = myresponse[n].BUILDING;
                                          AppropAdmin.value = myresponse[n].MANAGER;
                                          var myArr = (myresponse[n].MANAGER).split("|");
                              AppropAdmin.value = myArr[0];
                             ManagerUserID.value = myArr[1];
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
                              	TempEndDate.value = d;
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
                                FacultyFirstName.value = null;
                                FacultyLastName.value = null;
                                Department.value = null;
                                DeptId.value = null;
                                PrintName.value = null;
                                FacultyUserId.value = null;
                                FacultyEmail.value = null;

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
 * @function financial_access_request_form_financial_access_request_form.generated_CampusEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CampusEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_Title_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Title_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CampusExt_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CampusExt_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_Divison_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Divison_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CampusLocation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CampusLocation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_AppropAdmin_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_AppropAdmin_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_EmploymentCatagory_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_EmploymentCatagory_valueCommit0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_OthersValue_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_OthersValue_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_EmploymentType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_EmploymentType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == 2){
   // TempEndDate.enabled = true;
    TempEndDate.mandatory = true;
  }else{
   //  TempEndDate.enabled = false;
     TempEndDate.value = "";
     TempEndDate.mandatory = false;
  }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_TempEndDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TempEndDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_AccountActionRequest_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_AccountActionRequest_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value == 4){
  TypeOfAccess.mandatory = false;
}else{
   TypeOfAccess.mandatory = true;
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_DOATemporary_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DOATemporary_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_DOAPermanent_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DOAPermanent_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_ExpiryFlag_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ExpiryFlag_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToSecurityAdminFromTimer"){
 ExpiryMessage.visible = true;
document.getElementById('guideContainer-rootPanel-qualityquantityoralc-panel-panel_copy_copy_copy_921285294-guidetextdraw_2092221689___guide-item').innerHTML = this.value + " has not taken any action";
 document.getElementById('guideContainer-rootPanel-qualityquantityoralc-panel-panel_copy_copy_copy_921285294-guidetextdraw_2092221689___guide-item').style.color = "red";
  document.getElementById('guideContainer-rootPanel-qualityquantityoralc-panel-panel_copy_copy_copy_921285294-guidetextdraw_2092221689___guide-item').style.fontStyle = 'italic';
}else{
   ExpiryMessage.visible = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FinanceDistributedRoles_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FinanceDistributedRoles_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if((StageIndicator.value === null || StageIndicator.value == "ToManager")){
  if(TypeOfAccess.value == 1){
  FinaceDistTable.enabled = true;
}else{
   FinaceDistTable.enabled = false;
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_TypeOfAccess_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TypeOfAccess_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTimer")) {
    
    FDRTable.enabled = false;
    FinanceCoreTable.enabled = false;
    OtherCB.enabled = false;
    OtherText.enabled = false;
  if(StageIndicator.value === null){
    button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
    DOAButton1.enabled = false;
    DOAButton2.enabled = false;
    DOAOtherDivisonDept.enabled = false;
    DOADept.enabled = false;
  DOAEffDate.enabled = false;
  DOATempEndDate.enabled = false;
  DOAEmpType.enabled = false;
}else{
  enableRoleButtons();
}
  
    FinOtherCB.enabled = false;
    FinOtherText.enabled = false;
    if (TypeOfAccess.value == 1) {
        FDRTable.enabled = true;
       FinanceCoreTable.enabled = false;
      FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if(this.value == 2) {
        FDRTable.enabled = false;
        FinanceCoreTable.enabled = true;
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    }else{
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
    if (this.value == 1) {
        FDRTable.enabled = true;
        FinanceCoreTable.enabled = false;
        
        FinOtherCB.enabled = false;
        FinOtherText.enabled = false;
        
        OtherCB.enabled = true;
        OtherText.enabled = false;
        /*DOAButton1.enabled = false;
        DOADept.enabled = false;
        DOAButton2.enabled = false;
        DOAOtherDivisonDept.enabled = false;
        DOAEffDate.enabled = false;
        DOATempEndDate.enabled = false;
        DOAEmpType.enabled = false;*/
    } else {
        FDRTable.enabled = false;
        FinanceCoreTable.enabled = true;
        
        FinOtherCB.enabled = true;
        FinOtherText.enabled = false;
        
        OtherCB.enabled = false;
        OtherText.enabled = false;
        /*button1.enabled = false;
        DepReportingAccess.enabled = false;
        button2.enabled = false;
        OtherDivisonDept.enabled = false;
        button3.enabled = false;
        AppDivDatEntry.enabled = false;
        button4.enabled = false;
        AppOtherDivDataEntry.enabled = false;
        button5.enabled = false;
        ReqApproverDivision.enabled = false;
        button6.enabled = false;
        ReqApproverOtherDivision.enabled = false;
        DOAButton1.enabled = false;
        DOADept.enabled = false;
        DOAButton2.enabled = false;
        DOAOtherDivisonDept.enabled = false;
        DOAEffDate.enabled = false;
  DOATempEndDate.enabled = false;
  DOAEmpType.enabled = false;*/
    }
}else{
  if (TypeOfAccess.value == 1) {
        FDRTable.enabled = true;
       FinanceCoreTable.enabled = false;
      FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
    } else if(this.value == 2) {
        FDRTable.enabled = false;
        FinanceCoreTable.enabled = true;
        FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
    }else{
        FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = false;
    }
 
}
function enableRoleButtons(optionVal, roleVal) {
    var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
    var fdrValidation = true;
    // if (optionVal !== null && roleVal !== null) {
    for (n = 0; n < rowcount1; n++) {
        var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
        var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;
        if (rowcount1 > 0) {
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Add") {
                OtherDivisonDept.enabled = false;
                button3.enabled = true;
                AppDivDatEntry.enabled = false;
                button4.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Remove") {
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Add") {

                button5.enabled = true;
                ReqApproverDivision.enabled = false;
                button6.enabled = true;
                AppOtherDivDataEntry.enabled = false;
                DOAButton1.enabled = true;
                DOAButton2.enabled = true;
                DOAEmpType.enabled = true;
                DOAEffDate.enabled = true;
                DOATempEndDate.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Remove") {
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
            }


            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }



            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }


            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }
            if (roleVal1 === null && optionVal1 === null) {
                button1.enabled = false;
                button2.enabled = false;
                button3.enabled = false;
                button4.enabled = false;
                button5.enabled = false;
                button6.enabled = false;
                DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
            }
            var otherVal = OtherCB.value;
            if (otherVal == "1") {
                OtherText.enabled = true;
                OtherText.mandatory = true;
                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
            }
            if (otherVal != "1") {
                OtherText.enabled = false;
                OtherText.mandatory = false;
                OtherText.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }

        }
    }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_TypeOfAccess_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TypeOfAccess_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToBusinessAnalyst" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTimer") && (typeofaccessflag.value !== this.value)) {
    typeofaccessflag.value = this.value;
    if (AccessTypeFlag.value === null) {
        AccessTypeFlag.value = "1";
        if (this.value == 1) {
            FinanceCoreTable.enabled = false;
            FDRTable.enabled = true;
           FinanceCoreCentralRoles.visible = false;
        FDRPanel.visible = true;
         
        }
        if (this.value == 2) {
            FDRTable.enabled = false;
            FinanceCoreTable.enabled = true;
           FinanceCoreCentralRoles.visible = true;
           FDRPanel.visible = false;
            FinOtherCB.enabled = true;
            FinOtherText.enabled = false;
      
        }

        OtherCB.enabled = true;
        OtherText.enabled = false; 
      if(StageIndicator.value === null){
        button1.enabled = false;
        DepReportingAccess.enabled = false;
        button2.enabled = false;
        OtherDivisonDept.enabled = false;
        button3.enabled = false;
        AppDivDatEntry.enabled = false;
        button4.enabled = false;
        AppOtherDivDataEntry.enabled = false;
        button5.enabled = false;
        ReqApproverDivision.enabled = false;
        button6.enabled = false;
        ReqApproverOtherDivision.enabled = false;
      }else{
        enableRoleButtons();
      }

    } else {
        showErrorModal("Alert!", "You have changed the User Access Type. Distributed Roles will be cleared. Do you want to continue?");
        OtherCB.value = "";
        OtherText.value = "";   

        if (this.value == 1) {
           showErrorModal("Alert!", "You have changed the User Access Type. Central Roles will be cleared. Do you want to continue?");
            FinanceCoreTable.enabled = false;
            FDRTable.enabled = true;
           FinanceCoreCentralRoles.visible = false;
           FDRPanel.visible = true;
            FinOtherCB.enabled = false;
            FinOtherText.enabled = false;
          FinOtherCB.value = "";
            FinOtherText.value = "";
        
            debugger;
            var rowcount1 = FinanceCoreRoleTable.instanceManager.instanceCount;
          
            for (n = 0; n < rowcount1; n++) {
                FinanceCoreRoleTable.instanceManager.removeInstance(FinanceCoreRoleTable.instanceIndex);
            }
            var rowcount2 = FinanceCoreRoleTable.instanceManager.instanceCount;
            FinanceCoreRoleTable.instanceManager.instances[rowcount2-1].CoreOption.value = null;
            FinanceCoreRoleTable.instanceManager.instances[rowcount2-1].CoreRole.value = null;
            FinanceCoreRoleTable.instanceManager.removeInstance(rowcount2 - 1);
         
            OtherCB.enabled = true;
            OtherText.enabled = false;
            DOAButton1.enabled = false;
            DOADept.enabled = false;
            DOAButton2.enabled = false;
            DOAOtherDivisonDept.enabled = false;
        } else {
            FinanceCoreTable.enabled = true;
            FDRTable.enabled = false;
           FinanceCoreCentralRoles.visible = true;
        FDRPanel.visible = false;
            debugger;
            var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
          
            for (n = 0; n < rowcount1; n++) {
                FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
            }
            var rowcount2 = FinanceDistRoleTable.instanceManager.instanceCount;
            FinanceDistRoleTable.instanceManager.instances[rowcount2-1].Option.value = null;
            FinanceDistRoleTable.instanceManager.instances[rowcount2-1].Role.value = null;
            FinanceDistRoleTable.instanceManager.removeInstance(rowcount2 - 1);
          
           AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
            FinOtherCB.enabled = true;
            FinOtherText.enabled = false;
            /*PurDataEntryAdd.enabled = false;
            PurDataEntryRemove.enabled = false;
            PurApprovalAdd.enabled = false;
            PurApprovalRemove.enabled = false;
            RevenueAdd.enabled = false;
            RevenueRemove.enabled = false;
            PosBudgetingAdd.enabled = false;
            PosBudgetingRemove.enabled = false;
            BudgetManagementAdd.enabled = false;
            BudgetManagementRemove.enabled = false;*/
            OtherCB.enabled = false;
            OtherText.enabled = false;
            OtherCB.value = "";
            OtherText.value = "";
          if(StageIndicator.value === null){
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DOAButton1.enabled = false;
            DOADept.enabled = false;
            DOAButton2.enabled = false;
            DOAOtherDivisonDept.enabled = false;
          }else{
        enableRoleButtons();
      }
        }
    }
 
}

function enableRoleButtons(optionVal, roleVal) {
    var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
    var fdrValidation = true;
    // if (optionVal !== null && roleVal !== null) {
    for (n = 0; n < rowcount1; n++) {
        var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
        var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;
        if (rowcount1 > 0) {
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Add") {
                OtherDivisonDept.enabled = false;
                button3.enabled = true;
                AppDivDatEntry.enabled = false;
                button4.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Remove") {
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Add") {

                button5.enabled = true;
                ReqApproverDivision.enabled = false;
                button6.enabled = true;
                AppOtherDivDataEntry.enabled = false;
                DOAButton1.enabled = true;
                DOAButton2.enabled = true;
                DOAEmpType.enabled = true;
                DOAEffDate.enabled = true;
                DOATempEndDate.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Remove") {
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
            }


            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }



            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }


            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }
            if (roleVal1 === null && optionVal1 === null) {
                button1.enabled = false;
                button2.enabled = false;
                button3.enabled = false;
                button4.enabled = false;
                button5.enabled = false;
                button6.enabled = false;
                DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
            }
            var otherVal = OtherCB.value;
            if (otherVal == "1") {
                OtherText.enabled = true;
                OtherText.mandatory = true;
                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
            }
            if (otherVal != "1") {
                OtherText.enabled = false;
                OtherText.mandatory = false;
                OtherText.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }

        }
    }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_TypeOfAccess_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TypeOfAccess_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
  if(this.value == 1){
$.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Finance Distributed Roles",
      section:"FARF_FDR",
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
            Role.items = deptResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
  }
  if(this.value == 2){
    $.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data:{
      dept:"Finance Central Roles",
      section:"FARF_FCR",
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

                deptResult.push(item);

            }
            CoreRole.items = deptResult;
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
 * @function financial_access_request_form_financial_access_request_form.generated_Option_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Option_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var validationStatus = false;
if (StageIndicator.value === null || StageIndicator.value == "ToManager" ||  StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var roleSelected = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value;
    var optionSelected = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value;
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Data Entry" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = true;
            AppDivDatEntry.enabled = false;
            button4.enabled = true;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Data Entry" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            AppDivDatEntry.value = "";
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            AppOtherDivDataEntry.value = "";
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Approval" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = true;
            ReqApproverDivision.enabled = false;
            button6.enabled = true;
            AppOtherDivDataEntry.enabled = false;
            DOAButton1.enabled = true;
            DOAButton2.enabled = true;
            DOAEmpType.enabled = true;
            DOAEffDate.enabled = true;
            DOATempEndDate.enabled = true;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Approval" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DOAButton1.enabled = false;
            DOAButton2.enabled = false;
            DOAEmpType.enabled = false;
            DOAEffDate.enabled = false;
            DOATempEndDate.enabled = false;
            DOAEmpType.value = "";
            DOAEffDate.value = "";
            DOATempEndDate.value = "";
            DOAOtherDivisonDept.value = "";
            DOADept.value = "";
            ReqApproverOtherDivision.value = "";
            ReqApproverDivision.value = "";
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Revenue/Expense Reports Purchasing Reports My Queries" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = true;
            DepReportingAccess.enabled = false;
            button2.enabled = true;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Revenue/Expense Reports Purchasing Reports My Queries" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DepReportingAccess.value = "";
            OtherDivisonDept.value = "";
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Position Budgeting & Planning Reports" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = true;
            DepReportingAccess.enabled = false;
            button2.enabled = true;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Position Budgeting & Planning Reports" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DepReportingAccess.value = "";
            OtherDivisonDept.value = "";
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Budget Management Reports" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = true;
            DepReportingAccess.enabled = false;
            button2.enabled = true;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Budget Management Reports" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DepReportingAccess.value = "";
            OtherDivisonDept.value = "";
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    enableButtonsForRoles(optionSelected, roleSelected);
}

function enableButtonsForRoles(optionVal, roleVal) {
    var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
    var fdrValidation = true;
    // if (optionVal !== null && roleVal !== null) {
    for (n = 0; n < rowcount1; n++) {
        var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
        var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;
        if (rowcount1 > 0) {
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Add") {
                OtherDivisonDept.enabled = false;
                button3.enabled = true;
                AppDivDatEntry.enabled = false;
                button4.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Remove") {
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Add") {

                button5.enabled = true;
                ReqApproverDivision.enabled = false;
                button6.enabled = true;
                AppOtherDivDataEntry.enabled = false;
                DOAButton1.enabled = true;
                DOAButton2.enabled = true;
                DOAEmpType.enabled = true;
                DOAEffDate.enabled = true;
                DOATempEndDate.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Remove") {
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
            }


            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }



            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }


            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }
            if (roleVal1 === null && optionVal1 === null) {
                button1.enabled = false;
                button2.enabled = false;
                button3.enabled = false;
                button4.enabled = false;
                button5.enabled = false;
                button6.enabled = false;
                DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
            }
            var otherVal = OtherCB.value;
            if (otherVal == "1") {
                OtherText.enabled = true;
                OtherText.mandatory = true;
                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
            }
            if (otherVal != "1") {
                OtherText.enabled = false;
                OtherText.mandatory = false;
                OtherText.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }

        }
    }
    //   }

}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_Option_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Option_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;	
var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
var optionVal = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value;
var roleVal = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value;
var fdrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
    var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinanceDistRoleTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
     fdrValidation = false;
     break;
   }
  if(((optionVal == "Add" || optionVal1 == "Remove")||(optionVal == "Remove" || optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && FinanceDistRoleTable.instanceIndex != n && fdrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
     fdrValidation = false;
     break;
   }
   if(((optionVal1 == "Add" && roleVal1 == "Purchase Requisition Data Entry" && optionVal == "Add" && roleVal == "Purchase Requisition Approval")||(optionVal1 == "Add" && roleVal1 == "Purchase Requisition Approval" && optionVal == "Add" && roleVal == "Purchase Requisition Data Entry" )) && rowcount1 > 1 && FinanceDistRoleTable.instanceIndex != n && fdrValidation === true){
     showErrorModal("Alert!","This selection is not allowed");
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
     fdrValidation = false;
     break;
   }
}
}          
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_Role_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Role_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var validationStatus = false;
if (StageIndicator.value === null || StageIndicator.value == "ToManager" ||  StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTimer") {
    var roleSelected = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value;
    var optionSelected = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value;
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Data Entry" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = true;
            AppDivDatEntry.enabled = false;
            button4.enabled = true;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Data Entry" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            AppDivDatEntry.value = "";
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            AppOtherDivDataEntry.value = "";
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Approval" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = true;
            ReqApproverDivision.enabled = false;
            button6.enabled = true;
            AppOtherDivDataEntry.enabled = false;
            DOAButton1.enabled = true;
            DOAButton2.enabled = true;
            DOAEmpType.enabled = true;
            DOAEffDate.enabled = true;
            DOATempEndDate.enabled = true;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Purchase Requisition Approval" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DOAButton1.enabled = false;
            DOAButton2.enabled = false;
            DOAEmpType.enabled = false;
            DOAEffDate.enabled = false;
            DOATempEndDate.enabled = false;
            DOAEmpType.value = "";
            DOAEffDate.value = "";
            DOATempEndDate.value = "";
            DOAOtherDivisonDept.value = "";
            DOADept.value = "";
            ReqApproverOtherDivision.value = "";
            ReqApproverDivision.value = "";
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Revenue/Expense Reports Purchasing Reports My Queries" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = true;
            DepReportingAccess.enabled = false;
            button2.enabled = true;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Revenue/Expense Reports Purchasing Reports My Queries" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DepReportingAccess.value = "";
            OtherDivisonDept.value = "";
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Position Budgeting & Planning Reports" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = true;
            DepReportingAccess.enabled = false;
            button2.enabled = true;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Position Budgeting & Planning Reports" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DepReportingAccess.value = "";
            OtherDivisonDept.value = "";
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Budget Management Reports" && optionSelected == "Add") {
            validationStatus = true;
            button1.enabled = true;
            DepReportingAccess.enabled = false;
            button2.enabled = true;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    if (validationStatus === false) {
        if (roleSelected == "Budget Management Reports" && optionSelected == "Remove") {
            validationStatus = true;
            button1.enabled = false;
            DepReportingAccess.enabled = false;
            button2.enabled = false;
            OtherDivisonDept.enabled = false;
            button3.enabled = false;
            AppDivDatEntry.enabled = false;
            button4.enabled = false;
            AppOtherDivDataEntry.enabled = false;
            button5.enabled = false;
            ReqApproverDivision.enabled = false;
            button6.enabled = false;
            ReqApproverOtherDivision.enabled = false;
            DepReportingAccess.value = "";
            OtherDivisonDept.value = "";
          DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
        }
    }
    enableButtonsForRoles(optionSelected, roleSelected);
}

function enableButtonsForRoles(optionVal, roleVal) {
    var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
    var fdrValidation = true;
    // if (optionVal !== null && roleVal !== null) {
    for (n = 0; n < rowcount1; n++) {
        var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
        var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;
        if (rowcount1 > 0) {
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Add") {
                OtherDivisonDept.enabled = false;
                button3.enabled = true;
                AppDivDatEntry.enabled = false;
                button4.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Remove") {
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Add") {

                button5.enabled = true;
                ReqApproverDivision.enabled = false;
                button6.enabled = true;
                AppOtherDivDataEntry.enabled = false;
                DOAButton1.enabled = true;
                DOAButton2.enabled = true;
                DOAEmpType.enabled = true;
                DOAEffDate.enabled = true;
                DOATempEndDate.enabled = true;
            }
            if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Remove") {
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
            }


            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }



            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }


            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Add") {

                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
                OtherDivisonDept.enabled = false;
            }
            if (roleVal1 == "Budget Management Reports" && optionVal1 == "Remove") {
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }
            if (roleVal1 === null && optionVal1 === null) {
                button1.enabled = false;
                button2.enabled = false;
                button3.enabled = false;
                button4.enabled = false;
                button5.enabled = false;
                button6.enabled = false;
                DOAButton1.enabled = false;
                DOAButton2.enabled = false;
                DOAEmpType.enabled = false;
                DOAEffDate.enabled = false;
                DOATempEndDate.enabled = false;
                AppDivDatEntry.value = "";
                AppOtherDivDataEntry.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
                DOAEmpType.value = "";
                DOAEffDate.value = "";
                DOATempEndDate.value = "";
                DOAOtherDivisonDept.value = "";
                DOADept.value = "";
                ReqApproverOtherDivision.value = "";
                ReqApproverDivision.value = "";
            }
            var otherVal = OtherCB.value;
            if (otherVal == "1") {
                OtherText.enabled = true;
                OtherText.mandatory = true;
                button1.enabled = true;
                DepReportingAccess.enabled = false;
                button2.enabled = true;
            }
            if (otherVal != "1") {
                OtherText.enabled = false;
                OtherText.mandatory = false;
                OtherText.value = "";
                DepReportingAccess.value = "";
                OtherDivisonDept.value = "";
            }

        }
    }
    //   }

}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_Role_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Role_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;	
var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
var optionVal = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value;
var roleVal = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value;
var fdrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
    var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;   
  
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinanceDistRoleTable.instanceIndex != n){
     showErrorModal("Alert!","Duplicate rows");
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
     fdrValidation = false;
     break;
   }
  if(((optionVal == "Add" || optionVal1 == "Remove")||(optionVal == "Remove" || optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && FinanceDistRoleTable.instanceIndex != n && fdrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
     fdrValidation = false;
     break;
   }
   if(((optionVal1 == "Add" && roleVal1 == "Purchase Requisition Data Entry" && optionVal == "Add" && roleVal == "Purchase Requisition Approval")||(optionVal1 == "Add" && roleVal1 == "Purchase Requisition Approval" && optionVal == "Add" && roleVal == "Purchase Requisition Data Entry" )) && rowcount1 > 1 && FinanceDistRoleTable.instanceIndex != n && fdrValidation === true){
     showErrorModal("Alert!","This selection is not allowed");
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(FinanceDistRoleTable.instanceIndex);
     fdrValidation = false;
     break;
   }
}
}          
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FDRAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FDRAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block"; 
	
	var rowcount = FinanceDistRoleTable.instanceManager.instanceCount;
	var lastRow = rowcount - 1;
	
	
	
		FDRTable.FinanceDistRoleTable.instanceManager.addInstance();
		rowcount = FinanceDistRoleTable.instanceManager.instanceCount;
		lastRow = rowcount - 1;
		
		var deptResult = [];
		

		$.ajax({

			type: 'GET', 
			url: "/bin/getFinancialARFData",
    data:{
      dept:"Finance Distributed Roles",
      section:"FARF_FDR",
      status:"Yes",
      action:"ARF_ROLE"
    },
			dataType: 'json',

			success: function(myresponse){               
				
				if(myresponse.length > 0){
						
						for(var m=0; m < myresponse.length; m++){
								deptResult.push(myresponse[m].ROLE_NAME);
						}
						
						FinanceDistRoleTable.instanceManager.instances[lastRow].Role.items = deptResult;					 
						gifModal.style.display = "none";
				}
				else{
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
 * @function financial_access_request_form_financial_access_request_form.generated_FDRRemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FDRRemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){	
	
  	
  
    var rowCountToRemove = FinanceDistRoleTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove-1;   
  
	 FinanceDistRoleTable.instanceManager.instances[indexValue].Option.value = null;
     FinanceDistRoleTable.instanceManager.instances[indexValue].Role.value = null;
     FinanceDistRoleTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_OtherCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_OtherCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
  var otherVal =  OtherCB.value;
  if(otherVal == "1"){
    OtherText.enabled = true;
    OtherText.mandatory = true;
    button1.enabled = true;
    DepReportingAccess.enabled = false;
    button2.enabled = true;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
  } else{
     OtherText.enabled = false;
    OtherText.mandatory = false;
     OtherText.value = "";debugger;
   // if(PosBudgetingAdd.value === null && RevenueAdd.value === null && BudgetManagementAdd.value === null){
     button2.enabled = false;
     button1.enabled = false;
       DepReportingAccess.value = "";
      OtherDivisonDept.value = "";
   // }
  }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_OtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_OtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
  var otherVal =  OtherCB.value;
  if(otherVal == "1"){
    OtherText.enabled = true;
    OtherText.mandatory = true;
    button1.enabled = true;
    DepReportingAccess.enabled = false;
    button2.enabled = true;
    OtherDivisonDept.enabled = false;
   // DepReportingAccess.mandatory = true;
   // OtherDivisonDept.mandatory = true;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
  } else{
     OtherText.enabled = false;
    OtherText.mandatory = false;
     OtherText.value = "";
    //if(PosBudgetingAdd.value === null && RevenueAdd.value === null && BudgetManagementAdd.value === null){
     button2.enabled = false;
     button1.enabled = false;
       DepReportingAccess.value = "";
      OtherDivisonDept.value = "";
      //  DepReportingAccess.mandatory = false;
     // OtherDivisonDept.mandatory = false;
   // }
  }
 enableButtonsForRoles();
}
function enableButtonsForRoles() {
    var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
    var fdrValidation = true;
    if (rowcount1 !== 0) {
        for (n = 0; n < rowcount1; n++) {
            var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
            var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;
            if (rowcount1 > 0) {
                if (roleVal1 == "Purchase Requisition Data Entry" && optionVal1 == "Add") {
                    OtherDivisonDept.enabled = false;
                    button3.enabled = true;
                    AppDivDatEntry.enabled = false;
                    button4.enabled = true;
                }

                if (roleVal1 == "Purchase Requisition Approval" && optionVal1 == "Add") {

                    button5.enabled = true;
                    ReqApproverDivision.enabled = false;
                    button6.enabled = true;
                    AppOtherDivDataEntry.enabled = false;
                }


                if (roleVal1 == "Revenue/Expense Reports Purchasing Reports My Queries" && optionVal1 == "Add") {

                    button1.enabled = true;
                    DepReportingAccess.enabled = false;
                    button2.enabled = true;
                    OtherDivisonDept.enabled = false;
                }



                if (roleVal1 == "Position Budgeting & Planning Reports" && optionVal1 == "Add") {

                    button1.enabled = true;
                    DepReportingAccess.enabled = false;
                    button2.enabled = true;
                    OtherDivisonDept.enabled = false;
                }


                if (roleVal1 == "Budget Management Reports" && optionVal1 == "Add") {

                    button1.enabled = true;
                    DepReportingAccess.enabled = false;
                    button2.enabled = true;
                    OtherDivisonDept.enabled = false;
                }



            }
        }
    }

}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_OtherText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_OtherText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(OtherCB.value == 1){
    this.enabled = true;
  }else{
    this.enabled = false;
    this.value = "";
  }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_button1_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_button1_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" ||  StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromManager"){
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
              if(DepReportingAccess.value === null){
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
 * @function financial_access_request_form_financial_access_request_form.generated_button2_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_button2_click0 = function (scope) {
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

var span = document.getElementById("closeBtn1");
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

                        /* if (OtherDivisonDept.value !== null) {
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
                                   
                                        OtherDivisonDept.value = "";
                                   
                                  document.getElementById("showData3").innerHTML = "";
                                } else {
                                    document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((OtherDivisonDept.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (OtherDivisonDept.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          OtherDivisonDept.value = ", "+(OtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          OtherDivisonDept.value = (OtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (OtherDivisonDept.value !== null) {

                                if (((OtherDivisonDept.value).indexOf(dept) == -1)) {
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
                              debugger;
                                if (document.getElementById("tb1").rows.length == 2 && document.getElementById("tb1").rows.length !== 0) {
                                  document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        OtherDivisonDept.value = "";
                                   
                                  document.getElementById("showData3").innerHTML = "";
                                } else {
                                    document.getElementById("tb1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((OtherDivisonDept.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (OtherDivisonDept.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          OtherDivisonDept.value = ", "+(OtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          OtherDivisonDept.value = (OtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (OtherDivisonDept.value !== null) {

                                if (((OtherDivisonDept.value).indexOf(dept) == -1)) {
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
                        }


                    };
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresponse[k][col[l]];
                    }

                }

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
            //}
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
 * @function financial_access_request_form_financial_access_request_form.generated_button3_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_button3_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" ||  StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromManager"){
   
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
            action : "FS_ARF_REQAPPROVER_LOOKUP",
            divID: DivisionID.value,
          cwid:CWID.value
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('divApproverModal');
            var span = document.getElementById("closeBtndivApproverModal");
            
            if (myresopnse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("NAME");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Select Requisition Approver(s)"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
               
                
                //var cell2 = tr.insertCell(-1);
                //cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "approverbtn");
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
                var divContainer = document.getElementById("showDivApproverData");
                //divContainer.innerHTML = "";
              //divContainer.appendChild(selectAllButton); 
              //divContainer.appendChild(unselectAllButton); 
              if(AppDivDatEntry.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }
                var footerModal = document.getElementById("divApprover_footer");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    var rButtons = document.getElementsByClassName("approverbtn");
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresopnse[n].NAME +"["+myresopnse[n].EMPLID + "]";
                  }else{
                   result = result+","+myresopnse[n].NAME +"["+myresopnse[n].EMPLID + "]";
                  }
                rButtonStatus = true;
                }
              }
               AppDivDatEntry.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the approver");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            
            }else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("approverbtn");
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
               //showErrorModal("Alert!","Please select the approver");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the approver");
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
 * @function financial_access_request_form_financial_access_request_form.generated_button4_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_button4_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToManager" ||  StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromManager"){
   
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(result){
   
if(result.Status == "Success"){
var userValue=result.userId;
 
    $.ajax({
        type: 'GET',
        url: "/bin/getFinancialARFData",
        data: {
            action : "FS_ARF_REQAPPROVER_OTHER_DIV",
            divID: DivisionID.value,
          cwid:CWID.value
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('divApproverOtherModal');
            var span = document.getElementById("closeBtndivApproverOtherModal");
            
            if (myresopnse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("NAME");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Select Requisition Approver(s)"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
               
                
                //var cell2 = tr.insertCell(-1);
                //cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "approverotherbtn");
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
                var divContainer = document.getElementById("showDivApproveOtherrData");
                //divContainer.innerHTML = "";
              //divContainer.appendChild(selectAllButton); 
              //divContainer.appendChild(unselectAllButton); 
              if(AppOtherDivDataEntry.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }
                var footerModal = document.getElementById("divApprover_Other_footer");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    var rButtons = document.getElementsByClassName("approverotherbtn");
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresopnse[n].NAME +"["+myresopnse[n].EMPLID + "]";
                  }else{
                   result = result+","+myresopnse[n].NAME +"["+myresopnse[n].EMPLID + "]";
                  }
                rButtonStatus = true;
                }
              }
               AppOtherDivDataEntry.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the approver");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            
            }else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("approverotherbtn");
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
              // showErrorModal("Alert!","Please select the approver");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the approver");
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
 * @function financial_access_request_form_financial_access_request_form.generated_button5_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_button5_click0 = function (scope) {
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
                    var span = document.getElementById("closeBtn2");
 					span.onclick = function() {
                        modal.style.display = "none";
                    };
searchButton.onclick = function(event) {
  debugger;
    //if (document.getElementById('showData2').innerHTML === "") {
        var lName = document.getElementById('lName').value;
        var fName = document.getElementById('fName').value;
        var empId = document.getElementById('empId').value;
  		var div = DivisionID.value;
  if(lName !== "" || fName !== "" || empId !== ""){
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
                            var heading = document.createElement("P");
                        var headingText = document.createTextNode("Selected Departments");
                        heading.appendChild(headingText);
                        heading.style.color = "Black";
                        heading.style.fontSize = "smaller";
                        heading.style.textAlign = "left";
                            //document.getElementById("showData6").innerHTML = "";
                            var dept = this.parentNode.parentNode.cells[1].innerHTML;
                            var textVal = "";
                           /* if (ReqApproverDivision.value !== null) {
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
                            }*/
                            var h = document.createElement("P");
                            var t = document.createTextNode(textVal);
                            h.id = "h";
                            h.appendChild(t);
                            h.style.color = "blue";
                            h.style.fontSize = "smaller";
                            h.style.textAlign = "center";
                            /*document.getElementById("showData6").appendChild(h);
                            debugger;
                            setTimeout(function() {
                                document.getElementById("showData6").innerHTML = "";
                            }, 1000);*/
							if (document.getElementById("table1") === null) {
                            //document.getElementById("showData3").appendChild(h);
                            // setTimeout(function() {
                            //     document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            document.getElementById("showData6").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "table1";
                            var tr1 = table1.insertRow(-1);
                            var headings1 = ["", "Name", "Employee ID"];
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

                                if (document.getElementById("table1").rows.length == 2 && document.getElementById("table1").rows.length !== 0) {
                                    document.getElementById("table1").deleteRow(this.parentNode.parentNode.rowIndex);

                                    ReqApproverDivision.value = "";

                                    document.getElementById("showData6").innerHTML = "";
                                } else {
                                    document.getElementById("table1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((ReqApproverDivision.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (ReqApproverDivision.value).split(" ");
                                        if (n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText) {
                                            ReqApproverDivision.value = ", " + (ReqApproverDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        } else {

                                            ReqApproverDivision.value = (ReqApproverDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (ReqApproverDivision.value !== null) {

                                if (((ReqApproverDivision.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showData6").appendChild(table1);

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
                                document.getElementById("showData6").appendChild(table1);


                            }
                            if (ReqApproverDivision.value !== null) {
                                if ((ReqApproverDivision.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
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


                        } else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showData3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("table1");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {

                                if (document.getElementById("table1").rows.length == 2 && document.getElementById("table1").rows.length !== 0) {
                                    document.getElementById("table1").deleteRow(this.parentNode.parentNode.rowIndex);

                                    ReqApproverDivision.value = "";

                                    document.getElementById("showData6").innerHTML = "";
                                } else {
                                    document.getElementById("table1").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((ReqApproverDivision.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (ReqApproverDivision.value).split(" ");
                                        if (n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText) {
                                            ReqApproverDivision.value = ", " + (ReqApproverDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        } else {

                                            ReqApproverDivision.value = (ReqApproverDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (ReqApproverDivision.value !== null) {

                                if (((ReqApproverDivision.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showData6").appendChild(table2);


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
                                document.getElementById("showData6").appendChild(table2);


                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (ReqApproverDivision.value !== null) {
                                if ((ReqApproverDivision.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
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
                        }
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
}
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
 * @function financial_access_request_form_financial_access_request_form.generated_button6_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_button6_click0 = function (scope) {
    with(this) {
        with(scope) {
            document.getElementById('showData8').innerHTML = "";
var modal = document.getElementById('myModal4');
debugger;
var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "First Name";
element.setAttribute("type", "text");
element.setAttribute("id", "fName1");
element.setAttribute("value", "");
element.setAttribute("label", "First Name");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Last Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "lName1");
element2.setAttribute("label", "Last Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");
var element3 = document.createElement("input");
var label3 = document.createElement("Label");
label3.innerHTML = "Employee ID";
element3.setAttribute("type", "text");
element3.setAttribute("value", "");
element3.setAttribute("id", "empId1");
element3.setAttribute("label", "Employee ID");
element3.setAttribute("style", "width:200px");
label3.setAttribute("style", "font-weight:normal");
var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";
                    var span = document.getElementById("closeBtn4");
 					span.onclick = function() {
                        modal.style.display = "none";
                    };debugger;
searchButton.onclick = function(event) {debugger;
    //if (document.getElementById('showData2').innerHTML === "") {
        var lName = document.getElementById('lName1').value;
        var fName = document.getElementById('fName1').value;
        var empId = document.getElementById('empId1').value;
  		var div = DivisionID.value;
  if(lName !== "" || fName !== "" || empId !== ""){
        //var cwidVal = "806225686";
        $.ajax({
            type: 'GET',
            url: "/bin/getFinancialARFData",
            data: {
                divID: div,
                lastName: lName,
                firstName: fName,
                empId: empId,
                divType:"Other",
                action: "FS_ARF_REQ_DIV"
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length > 0) {
                    document.getElementById('showData8').innerHTML = "";
                    var modal = document.getElementById('myModal4');

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
                            var heading = document.createElement("P");
                        var headingText = document.createTextNode("Selected Departments");
                        heading.appendChild(headingText);
                        heading.style.color = "Black";
                        heading.style.fontSize = "smaller";
                        heading.style.textAlign = "left";
                            //document.getElementById("showData6").innerHTML = "";
                            var dept = this.parentNode.parentNode.cells[1].innerHTML;
                            var textVal = "";
                            /*if (ReqApproverOtherDivision.value !== null) {
                                if ((ReqApproverOtherDivision.value).indexOf(dept) !== -1) {
                                    textVal = "Selected User is already added";
                                } else {
                                    if (ReqApproverOtherDivision.value !== null) {
                                        ReqApproverOtherDivision.value = ReqApproverOtherDivision.value + ", " + dept;
                                    } else {
                                        ReqApproverOtherDivision.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                ReqApproverOtherDivision.value = dept;
                                textVal = "Added Successfully";
                            }*/
                            var h = document.createElement("P");
                            var t = document.createTextNode(textVal);
                            h.id = "h";
                            h.appendChild(t);
                            h.style.color = "blue";
                            h.style.fontSize = "smaller";
                            h.style.textAlign = "center";
                           /* document.getElementById("showData6").appendChild(h);
                            debugger;
                            setTimeout(function() {
                                document.getElementById("showData6").innerHTML = "";
                            }, 1000);*/
							if (document.getElementById("OtherDivReqTB") === null) {
                            
                            document.getElementById("showData9").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "OtherDivReqTB";
                            var tr1 = table1.insertRow(-1);
                            var headings1 = ["", "Name", "Empl ID"];
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

                                 if (document.getElementById("OtherDivReqTB").rows.length == 2 && document.getElementById("OtherDivReqTB").rows.length !== 0) {
                                  document.getElementById("OtherDivReqTB").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        ReqApproverOtherDivision.value = "";
                                   
                                  document.getElementById("showData9").innerHTML = "";
                                } else {
                                    document.getElementById("OtherDivReqTB").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((ReqApproverOtherDivision.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (ReqApproverOtherDivision.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          ReqApproverOtherDivision.value = ", "+(ReqApproverOtherDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          ReqApproverOtherDivision.value = (ReqApproverOtherDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (ReqApproverOtherDivision.value !== null) {

                                if (((ReqApproverOtherDivision.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showData9").appendChild(table1);

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
                                document.getElementById("showData9").appendChild(table1);


                            }
                            if (ReqApproverOtherDivision.value !== null) {
                                if ((ReqApproverOtherDivision.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (ReqApproverOtherDivision.value !== null) {
                                        ReqApproverOtherDivision.value = ReqApproverOtherDivision.value + ", " + dept;
                                    } else {
                                        ReqApproverOtherDivision.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                ReqApproverOtherDivision.value = dept;
                                textVal = "Added Successfully";
                            }


                        }else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showData3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("OtherDivReqTB");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {

                                 if (document.getElementById("OtherDivReqTB").rows.length == 2 && document.getElementById("OtherDivReqTB").rows.length !== 0) {
                                  document.getElementById("OtherDivReqTB").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        ReqApproverOtherDivision.value = "";
                                   
                                  document.getElementById("showData9").innerHTML = "";
                                } else {
                                    document.getElementById("OtherDivReqTB").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((ReqApproverOtherDivision.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (ReqApproverOtherDivision.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          ReqApproverOtherDivision.value =", "+ (ReqApproverOtherDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          ReqApproverOtherDivision.value = (ReqApproverOtherDivision.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (ReqApproverOtherDivision.value !== null) {

                                if (((ReqApproverOtherDivision.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showData9").appendChild(table2);


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
                                document.getElementById("showData9").appendChild(table2);


                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (ReqApproverOtherDivision.value !== null) {
                                if ((ReqApproverOtherDivision.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (ReqApproverOtherDivision.value !== null) {
                                        ReqApproverOtherDivision.value = ReqApproverOtherDivision.value + ", " + dept;
                                    } else {
                                        ReqApproverOtherDivision.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                ReqApproverOtherDivision.value = dept;
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
                    var divContainer = document.getElementById("showData8");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    var saveButton = document.createElement("input");
                    saveButton.type = "button";
                    //veButton.setAttribute("class", "okBtn");
                    saveButton.value = "Save";
                    var divContainer2 = document.getElementById("showData8");
                    divContainer2.appendChild(saveButton);
                    saveButton.onclick = function(event) {
                        
                        modal.style.display = "none";

                    };
                    var footerModal = document.getElementById("modal_footer");
                }
            }
        });
  }
};
var divContainer = document.getElementById("showData7");

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
 * @function financial_access_request_form_financial_access_request_form.generated_DOAEmpType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DOAEmpType_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  DOAPermanent.value = 1;
}
if(this.value == 2){
  DOATemporary.value = 1;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_DOAButton1_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DOAButton1_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value === null || StageIndicator.value == "ToManager" ||  StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
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
            var modal = document.getElementById('divDOADeptModal');
            var span = document.getElementById("closeBtndivDOADeptModal");
            
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
                var rButtons = document.getElementsByClassName("DOADeptDataBtn");/*
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
                    button.setAttribute("class", "DOADeptDataBtn");
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
                var divContainer = document.getElementById("showDOADeptData");
                //divContainer.innerHTML = "";
              //divContainer.appendChild(selectAllButton); 
              //divContainer.appendChild(unselectAllButton); 
              if(DOADept.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }
                var footerModal = document.getElementById("divDOADept_footer");
              
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
               DOADept.value = result;
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
             
              var rButtons = document.getElementsByClassName("DOADeptDataBtn");
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
 * @function financial_access_request_form_financial_access_request_form.generated_DOAButton2_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_DOAButton2_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
document.getElementById('showData11').innerHTML = "";
var modal = document.getElementById('myModal5');

var element = document.createElement("input");
var label = document.createElement("Label");
label.innerHTML = "Department Id";
element.setAttribute("type", "text");
element.setAttribute("id", "deptIdDOA");
element.setAttribute("value", "");
element.setAttribute("label", "Department Id");
element.setAttribute("style", "width:200px");
label.setAttribute("style", "font-weight:normal");
var element2 = document.createElement("input");
var label2 = document.createElement("Label");
label2.innerHTML = "Department Name";
element2.setAttribute("type", "text");
element2.setAttribute("value", "");
element2.setAttribute("id", "deptNameDOA");
element2.setAttribute("label", "Department Name");
element2.setAttribute("style", "width:200px");
label2.setAttribute("style", "font-weight:normal");

var searchButton = document.createElement("input");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.value = "Search";

var span = document.getElementById("closeBtn5");
span.onclick = function(event) {
    (document.getElementById('myModal5')).style.display = "none";
};
searchButton.onclick = function(event) {
    //if (document.getElementById('showData2').innerHTML === "") {
    var depID = document.getElementById('deptIdDOA').value;
    var depName = document.getElementById('deptNameDOA').value;
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
                document.getElementById('showData11').innerHTML = "";
                var modal = document.getElementById('myModal5');


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

                        /* if (OtherDivisonDept.value !== null) {
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
                         }*/
                        var h = document.createElement("P");
                        var t = document.createTextNode(textVal);
                        h.id = "h";
                        heading.id = "heading";
                        h.appendChild(t);
                        h.style.color = "blue";
                        h.style.fontSize = "smaller";
                        h.style.textAlign = "center";


                        if (document.getElementById("tbDOA") === null) {
                            //document.getElementById("showData3").appendChild(h);
                            // setTimeout(function() {
                            //     document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            document.getElementById("showData12").appendChild(heading);
                            var table1 = document.createElement("table");
                            table1.id = "tbDOA";
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
                                if (document.getElementById("tbDOA").rows.length == 2 && document.getElementById("tbDOA").rows.length !== 0) {
                                  document.getElementById("tbDOA").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        DOAOtherDivisonDept.value = "";
                                   
                                  document.getElementById("showData12").innerHTML = "";
                                } else {
                                    document.getElementById("tbDOA").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((DOAOtherDivisonDept.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (DOAOtherDivisonDept.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          DOAOtherDivisonDept.value = ", "+(DOAOtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          DOAOtherDivisonDept.value = (DOAOtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (DOAOtherDivisonDept.value !== null) {

                                if (((DOAOtherDivisonDept.value).indexOf(dept) == -1)) {
                                    var tabCell2 = tr1.insertCell(-1);
                                    tabCell2.appendChild(button1);
                                    var tabCell3 = tr1.insertCell(-1);
                                    tabCell3.innerHTML = this.parentNode.parentNode.cells[1].innerText;
                                    var tabCell4 = tr1.insertCell(-1);
                                    tabCell4.innerHTML = this.parentNode.parentNode.cells[2].innerText;
                                    document.getElementById("showData12").appendChild(table1);
                                 
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
                                document.getElementById("showData12").appendChild(table1);
                             
          
                            }
                            if (DOAOtherDivisonDept.value !== null) {
                                if ((DOAOtherDivisonDept.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (DOAOtherDivisonDept.value !== null) {
                                        DOAOtherDivisonDept.value = DOAOtherDivisonDept.value + ", " + dept;
                                    } else {
                                        DOAOtherDivisonDept.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                DOAOtherDivisonDept.value = dept;
                                textVal = "Added Successfully";
                            }


                        } else {
                            // document.getElementById("h").innerHTML = "";
                            // document.getElementById("heading").innerHTML = "";
                            // document.getElementById("showData3").appendChild(h);
                            //  setTimeout(function() {
                            //    document.getElementById("h").innerHTML = "";
                            // }, 1000);
                            var table2 = document.getElementById("tbDOA");
                            var tr2 = table2.insertRow(-1);
                            var cell1 = tr2.insertCell(-1);
                            var button2 = document.createElement("input");
                            button2.type = "button";
                            button2.value = "Remove";
                            button2.onclick = function(event) {
                              debugger;
                                if (document.getElementById("tbDOA").rows.length == 2 && document.getElementById("tbDOA").rows.length !== 0) {
                                  document.getElementById("tbDOA").deleteRow(this.parentNode.parentNode.rowIndex);
                                   
                                        DOAOtherDivisonDept.value = "";
                                   
                                  document.getElementById("showData12").innerHTML = "";
                                } else {
                                    document.getElementById("tbDOA").deleteRow(this.parentNode.parentNode.rowIndex);
                                    if ((DOAOtherDivisonDept.value).indexOf((this.parentNode.parentNode.cells[1].innerText)) !== -1) {
                                        var n = (DOAOtherDivisonDept.value).split(" ");
     									if(n[n.length - 1] == this.parentNode.parentNode.cells[1].innerText){
                                          DOAOtherDivisonDept.value= ", "+(DOAOtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText), "");
                                        }else{
                         
                                          DOAOtherDivisonDept.value = (DOAOtherDivisonDept.value).replaceAll((this.parentNode.parentNode.cells[1].innerText + ", "), "");
                                        }
                                    }
                                }
                            };
                            if (DOAOtherDivisonDept.value !== null) {

                                if (((DOAOtherDivisonDept.value).indexOf(dept) == -1)) {
                                    cell1.appendChild(button2);
                                    var cell2 = tr2.insertCell(-1);
                                    cell2.innerHTML = this.parentNode.parentNode.cells[1].innerHTML;
                                    var cell3 = tr2.insertCell(-1);
                                    cell3.innerHTML = this.parentNode.parentNode.cells[2].innerHTML;
                                    document.getElementById("showData12").appendChild(table2);
                                   
          
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
                                document.getElementById("showData12").appendChild(table2);
                             
          
                            }

                            //cell1.innerHTML = this.parentNode.parentNode.rowIndex;
                            if (DOAOtherDivisonDept.value !== null) {
                                if ((DOAOtherDivisonDept.value).indexOf(dept) !== -1) {
                                    textVal = "Selected Dept is already added";
                                } else {
                                    if (DOAOtherDivisonDept.value !== null) {
                                        DOAOtherDivisonDept.value = DOAOtherDivisonDept.value + ", " + dept;
                                    } else {
                                        DOAOtherDivisonDept.value = dept;
                                    }
                                    textVal = "Added Successfully";
                                }
                            } else {
                                DOAOtherDivisonDept.value = dept;
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

            }
            var divContainer = document.getElementById("showData11");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            var saveButton = document.createElement("input");
            saveButton.type = "button";
            //veButton.setAttribute("class", "okBtn");
            saveButton.value = "Save";
            var divContainer2 = document.getElementById("showData11");
            divContainer2.appendChild(saveButton);
            saveButton.onclick = function(event) {

                modal.style.display = "none";

            };
            
            var footerModal = document.getElementById("modal_footer5");
            //}
        }
    });

};

var divContainer = document.getElementById("showData10");

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
 * @function financial_access_request_form_financial_access_request_form.generated_FinanceCoreCentralRoles_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FinanceCoreCentralRoles_init0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null || StageIndicator.value == "ToManager")){
  if(TypeOfAccess.value == 2){
  FinanceCoreTable.enabled = true;
}else{
   FinanceCoreTable.enabled = false;
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CoreOption_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CoreOption_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = FinanceCoreRoleTable.instanceManager.instanceCount;
var optionVal = FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value;
var roleVal = FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreOption.value;
    var roleVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinanceCoreRoleTable.instanceIndex != n  && fcrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value = null;
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value = null;
     FinanceCoreRoleTable.instanceManager.removeInstance(FinanceCoreRoleTable.instanceIndex);
     fcrValidation = false;
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value = null;
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value = null;
     FinanceCoreRoleTable.instanceManager.removeInstance(FinanceCoreRoleTable.instanceIndex);
     fcrValidation = false;
     break;
   }
}
}
            
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CoreRole_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CoreRole_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var rowcount1 = FinanceCoreRoleTable.instanceManager.instanceCount;
var optionVal = FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value;
var roleVal = FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value;
var fcrValidation = true;
if(optionVal !== null && roleVal !== null){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreOption.value;
    var roleVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreRole.value;   
   if(optionVal == optionVal1 && roleVal == roleVal1 && rowcount1 > 1 && FinanceCoreRoleTable.instanceIndex != n  && fcrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value = null;
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value = null;
     FinanceCoreRoleTable.instanceManager.removeInstance(FinanceCoreRoleTable.instanceIndex);
     fcrValidation = false;
     break;
   }
   if(((optionVal == "Add" && optionVal1 == "Remove")||(optionVal == "Remove" && optionVal1 == "Add")) && roleVal == roleVal1 && rowcount1 > 1 && fcrValidation === true){
     showErrorModal("Alert!","Duplicate rows");
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value = null;
     FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value = null;
     FinanceCoreRoleTable.instanceManager.removeInstance(FinanceCoreRoleTable.instanceIndex);
     fcrValidation = false;
     break;
   }
}
}
            
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CoreRole_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CoreRole_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
debugger;
var validationStatus = false;
if(StageIndicator.value === null || StageIndicator.value == "ToManager"){
  if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].Role.value == "Purchase Requisition Data Entry" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].Option.value == "Add"){
  validationStatus = true;
  button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = true;
    AppDivDatEntry.enabled = false;
    button4.enabled = true;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
}
  }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Purchase Requisition Data Entry" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Remove"){
   validationStatus = true;
  button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Purchase Requisition Approval" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Add"){
   validationStatus = true;
  PurApprovalAdd.enabled = true;
    PurDataEntryAdd.enabled = false;
    button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = true;
    ReqApproverDivision.enabled = false;
    button6.enabled = true;
    AppOtherDivDataEntry.enabled = false;
  DOAButton1.enabled = true;
    DOAButton2.enabled = true;
    DOAEmpType.enabled = true;
    DOAEffDate.enabled  =true;
    DOATempEndDate.enabled = true;
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Purchase Requisition Approval" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Remove"){
   validationStatus = true;
 button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
    DOAButton1.enabled = true;
    DOAButton2.enabled = true;
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Revenue/Expense Reports Purchasing Reports My Queries" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Add"){
   validationStatus = true;
  button1.enabled = true;
    DepReportingAccess.enabled = false;
    button2.enabled = true;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
    //DepReportingAccess.mandatory = true;
    //OtherDivisonDept.mandatory = true;
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Revenue/Expense Reports Purchasing Reports My Queries" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Remove"){
   validationStatus = true;
  button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false; 
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Position Budgeting & Planning Reports" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Add"){
   validationStatus = true;
  button1.enabled = true;
    DepReportingAccess.enabled = false;
    button2.enabled = true;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Position Budgeting & Planning Reports" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Remove"){
   validationStatus = true;
   button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
}
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Budget Management Reports" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Add"){
   validationStatus = true;
 button1.enabled = true;
    DepReportingAccess.enabled = false;
    button2.enabled = true;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
   // OtherDivisonDept.mandatory = true;
     //DepReportingAccess.mandatory = true;
  }
    }
    if(validationStatus === false){
if(FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value == "Budget Management Reports" && FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value == "Remove"){
   validationStatus = true;
 button1.enabled = false;
    DepReportingAccess.enabled = false;
    button2.enabled = false;
    OtherDivisonDept.enabled = false;
    button3.enabled = false;
    AppDivDatEntry.enabled = false;
    button4.enabled = false;
    AppOtherDivDataEntry.enabled = false;
    button5.enabled = false;
    ReqApproverDivision.enabled = false;
    button6.enabled = false;
    ReqApproverOtherDivision.enabled = false;
}
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FDRAddButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FDRAddButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block"; 
	
	var rowcount = FinanceCoreRoleTable.instanceManager.instanceCount;
	var lastRow = rowcount - 1;
	
	
	
		FinanceCoreTable.FinanceCoreRoleTable.instanceManager.addInstance();
		rowcount = FinanceCoreRoleTable.instanceManager.instanceCount;
		lastRow = rowcount - 1;
		
		var deptResult = [];
		

		$.ajax({

			type: 'GET', 
			url: "/bin/getFinancialARFData",
    data:{
      dept:"Finance Central Roles",
      section:"FARF_FCR",
      status:"Yes",
      action:"ARF_ROLE"
    },
			dataType: 'json',

			success: function(myresponse){               
				
				if(myresponse.length > 0){
						
						for(var m=0; m < myresponse.length; m++){
								deptResult.push(myresponse[m].ROLE_NAME);
						}
						
						FinanceCoreRoleTable.instanceManager.instances[lastRow].CoreRole.items = deptResult;					 
						gifModal.style.display = "none";
				}
				else{
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
 * @function financial_access_request_form_financial_access_request_form.generated_FDRRemoveButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FDRRemoveButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){	
	
  	
  
    var rowCountToRemove = FinanceCoreRoleTable.instanceManager.instanceCount;
    var indexValue = rowCountToRemove-1;   
  
	 FinanceCoreRoleTable.instanceManager.instances[indexValue].CoreOption.value = null;
     FinanceCoreRoleTable.instanceManager.instances[indexValue].CoreRole.value = null;
     FinanceCoreRoleTable.instanceManager.removeInstance(indexValue);
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FinOtherCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FinOtherCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  FinOtherText.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FinOtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FinOtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToManager" || StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value =="ToSecurityAdminFromISO" || StageIndicator.value == "ToSecurityAdminFromCISO"){
  if(this.value == 1){
    FinOtherText.enabled = true;
    FinOtherText.mandatory = true;
  }else{
    FinOtherText.enabled = false;
    FinOtherText.value = "";
    FinOtherText.mandatory = false;
  }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FinOtherText_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_FinOtherText_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(FinOtherCB.value == 1){
    FinOtherText.enabled = true;
  }else{
    FinOtherText.enabled = false;
    FinOtherText.value = "";
  }
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_Comments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_Comments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  this.visble = true;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_ExpiryMessage_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ExpiryMessage_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_SecurityAdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_SecurityAdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToSecurityAdminFromTrainer" || StageIndicator.value == "ToSecurityAdminFromCISO" || StageIndicator.value == "ToSecurityAdminFromISO" || StageIndicator.value =="ToSecurityAdminFromManager" || StageIndicator.value == "ToSecurityAdminFromTimer"){
if (this.value == "1") {
   
        if (SecurityName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    SecurityName.value = userValue;
                    SecurityDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    SecurityName.value = "";
    SecurityDate.value = "";
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_SecurityName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_SecurityName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_SecurityDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_SecurityDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_SecurityAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_SecurityAdminComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToSecurityAdminFromTrainer" || StageIndicator.value === "ToSecurityAdminFromCISO" || StageIndicator.value === "ToSecurityAdminFromISO" || StageIndicator.value === "ToSecurityAdminFromManager" || StageIndicator.value == "ToSecurityAdminFromTimer"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CISOCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CISOCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCISO"){
if (this.value == "1") {
   debugger;
        if (CISOSignature.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    CISOSignature.value = userValue;
                    CISODate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    CISOSignature.value = "";
    CISODate.value = "";
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CISOSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CISOSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CISODate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CISODate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_CISOComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_CISOComments_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_ISOAdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ISOAdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToISO"){
if (this.value == "1") {
   
        if (ISOAdminAnalystName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    ISOAdminAnalystName.value = userValue;
                    ISOAdminAnalystDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    ISOAdminAnalystName.value = "";
    ISOAdminAnalystDate.value = "";
  
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_ISOAdminAnalystName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ISOAdminAnalystName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_ISOAdminAnalystDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ISOAdminAnalystDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_ISOAdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_ISOAdminComments_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_TrainerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TrainerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_TrainerName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TrainerName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_TrainerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TrainerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_TrainerComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_TrainerComments_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_BusinessAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BusinessAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBusinessAnalyst"){
if (this.value == "1") {
   
        if (BusinessAnalystName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    BusinessAnalystName.value = userValue;
                    BusinessAnalystDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    BusinessAnalystName.value = "";
    BusinessAnalystDate.value = "";
  
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BusinessAnalystName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BusinessAnalystName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BusinessAnalystDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BusinessAnalystDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BusinessAnalystComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BusinessAnalystComments_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBudgetOffice"){
if (this.value == "1") {
   
        if (BudgetAnalystName.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    BudgetAnalystName.value = userValue;
                    BudgetAnalystDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    BudgetAnalystName.value = "";
    BudgetAnalystDate.value = "";
  
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetAnalystName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetAnalystName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetAnalystDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetAnalystDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetAnalystComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetAnalystComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToBudgetOffice"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetContactCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetContactCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBudgetContact"){
if (this.value == "1") {
   
        if (BudgetContactSign.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    BudgetContactSign.value = userValue;
                    BudgetContactSignDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });


        } 
    
} else {
    BudgetContactSign.value = "";
    BudgetContactSignDate.value = "";
  
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetContactSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetContactSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetContactSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetContactSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_BudgetContactComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_BudgetContactComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToBudgetContact"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_EmployeeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_EmployeeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_EmployeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_EmployeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_EmployeeComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_EmployeeComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToEmployee"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_AccessCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_AccessCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_AdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_AdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_AdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_AdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_AdminComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_AdminComments_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
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


        } 
} else {
    InitiatorName.value = "";
    InitiatorDate.value = "";
  
}
}
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_InitiatorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_InitiatorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_InitiatorComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_InitiatorComments_init0 = function (scope) {
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
 * @function financial_access_request_form_financial_access_request_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;

debugger;
if (CWID.value !== null ) {
  submitFlag=0;
      
 } else{
   submitFlag =1;
   showErrorModal("Alert!","Please enter CWID");   
    
 }


if( submitFlag === 0){
  getPdf();
}

  

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/financial-access-request-form/financial-access-request-form');
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
 * @function financial_access_request_form_financial_access_request_form.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
financial_access_request_form_financial_access_request_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*EmployeeEmail.value="swathi.kumari@thoughtfocus.com";
ManagerEmail.value="swathi.kumari@thoughtfocus.com";
RequestorEmail.value = "swathi.kumari@thoughtfocus.com";*/
EmployeeEmail.value="yjayaram@fullerton.edu";
ManagerEmail.value="yjayaram@fullerton.edu";
RequestorEmail.value = "yjayaram@fullerton.edu";

if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value;
 EmailSubject.value = "Test - Faculty Access Request - " + LastName.value+", "+FirstName.value;
}
BudgetOfficeFlag.value = "0";
var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
for (n = 0; n < rowcount1; n++) {
var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;
if(roleVal1 == "Purchase Requisition Approval"||roleVal1 == "Position Budgeting & Planning Reports"){
BudgetOfficeFlag.value = "1";
break;
}
}
if(InitiatorComments.value !== null){
Comments.value = "Initiator Comments : "+ InitiatorComments.value;
}else{
  Comments.value = "Initiator Comments : ";
}

/*if(TypeOfAccess.value == 1 && PosBudgetingAdd.value === null && PosBudgetingRemove.value === null && PurDataEntryAdd.value === null && PurDataEntryRemove.value === null && PurchasingAdd.value === null && PurchasingRemove.value === null && RevenueAdd.value === null && RevenueRemove.value === null && BudgetManagementAdd.value === null && BudgetManagementRemove.value === null && OtherCB.value === null && PurApprovalAdd.value === null && PurApprovalRemove.value === null){
  showErrorModal("Alert!","Please fill the access request details");

}else if(( TypeOfAccess.value == 1 || PosBudgetingAdd.value !== null || PosBudgetingRemove.value !== null || PurDataEntryAdd.value !== null || PurDataEntryRemove.value !== null || PurchasingAdd.value !== null || PurchasingRemove.value !== null || RevenueAdd.value !== null || RevenueRemove.value !== null || BudgetManagementAdd.value !== null || BudgetManagementRemove.value !== null || OtherCB.value !== null || PurApprovalAdd.value !== null || PurApprovalRemove.value !== null) && (DepReportingAccess.value === null && OtherDivisonDept.value === null && AppDivDatEntry.value === null && AppOtherDivDataEntry.value === null && ReqApproverDivision.value === null && ReqApproverOtherDivision.value === null && DOAOtherDivisonDept.value === null && DOADept.value === null)){
  showErrorModal("Alert!","Please fill the access request details");
}
else if(TypeOfAccess.value == 2 && AccPayableAdd.value === null &&AccPayableRemove.value === null &&BudgetAdd.value === null &&BudgetRemove.value === null &&AssetManagementAdd.value === null &&AssetManagementRemove.value === null &&GeneralLedgerAdd.value === null &&GeneralLedgerRemove.value === null &&BillingAdd.value === null &&BillingRemove.value === null &&PurchasingAdd.value === null &&PurchasingRemove.value === null &&FinOtherCB.value === null){
  showErrorModal("Alert!","Please fill the access request details");

}else{*/
var valFlag = true;
if(TypeOfAccess.value == "1" && valFlag === true){
var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;
if(rowcount1 >= 1){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
    var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Role.value;   
   if(optionVal1 === null && roleVal1 === null){
     showErrorModal("Alert!","Please select the roles");
     valFlag = false;
     break;
   }
   if((optionVal1 === null && roleVal1 !== null) || (optionVal1 !== null && roleVal1 === null)){
     showErrorModal("Alert!","Please select the roles");
     valFlag = false;
     break;
   } 
    if(roleVal1 == "Purchase Requisition Approval"){
    if(DOAEffDate.value === null || EmploymentType.value ===null){
       showErrorModal("Alert!","Please fill DOA for Requisition Approve details");
      valFlag = false;
      break;
    }
  }
}
}
}

if(TypeOfAccess.value == "2" && valFlag === true){
  var rowcount1 = FinanceCoreRoleTable.instanceManager.instanceCount;
if(rowcount1 >= 1){
for (n = 0; n < rowcount1; n++) {
    var optionVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreOption.value;
    var roleVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreRole.value;   
   if(optionVal1 === null && roleVal1 === null){
     valFlag  = false;
     showErrorModal("Alert!","Please select the roles");
     break;
   }
   if((optionVal1 === null && roleVal1 !== null) || (optionVal1 !== null && roleVal1 === null)){
     showErrorModal("Alert!","Please select the roles");
     valFlag  = false;
     break;
   }
}
}
}
if(TypeOfAccess.value == "1"){
var rowcount = FinanceDistRoleTable.instanceManager.instanceCount;
for (n = 0; n < rowcount; n++) {
var roleVal1 = FinanceDistRoleTable.instanceManager.instances[n].Option.value;
if(roleVal1 == "Add"){
RemoveRolesFlag.value = "0";
break;
}
}
}
if(TypeOfAccess.value == "2"){
var rowcount = FinanceCoreRoleTable.instanceManager.instanceCount;
for (n = 0; n < rowcount; n++) {
var roleVal1 = FinanceCoreRoleTable.instanceManager.instances[n].CoreOption.value;
if(roleVal1 == "Add"){
RemoveRolesFlag.value = "0";
break;
}
}
}
if(RemoveRolesFlag.value === null){
  RemoveRolesFlag.value = "1";
}
if(valFlag === true){
guideBridge.submit();
}

//}


        }
	}
}
