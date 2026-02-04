/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var fdVslue = FederalStudent.value;
if(fdVslue === null || fdVslue === "0"){
  federalInformation.visible = false;
} else{
  federalInformation.visible = true;
}


if(StageIndicator.value === null){
  employeeInformation.visible = true;
  //DeptCooSigaturePanel.enabled = true;
   signatureReview.visible = true;
  HRDeptPanel.visible= true;
  AuthSignPanel.visible = false;
  FinancailAidPanel.visible = false;
  PayrollPanel.visible = false;
}
if(StageIndicator.value === "ToAuthDept"){
  employeeInformation.visible = true;
  employeeInformation.enabled = false;
  FWSSection.enabled = false;
  signatureReview.visible = true;
  HRDeptPanel.visible= true;
  HRDeptPanel.enabled= false;
  AuthSignPanel.visible = true;
  FinancailAidPanel.visible = false;
  PayrollPanel.visible = false;
}
if(StageIndicator.value === "ToFinancialAid"){
  employeeInformation.visible = true;
  employeeInformation.enabled = false;
   FWSSection.enabled = false;
  signatureReview.visible = true;
   HRDeptPanel.visible= true;
  HRDeptPanel.enabled= false;
  AuthSignPanel.visible = true;
  AuthSignPanel.enabled = false;
  FinancailAidPanel.visible = true;
  PayrollPanel.visible = false;
}

if(StageIndicator.value === "ToPayroll"){
  employeeInformation.visible = true;
  employeeInformation.enabled = false;
   FWSSection.enabled = false;
  signatureReview.visible = true;
   HRDeptPanel.visible= true;
  HRDeptPanel.enabled= false;
  AuthSignPanel.visible = true;
  AuthSignPanel.enabled = false;
  if(FinancialDeptCB.value === "1"){
    FinancailAidPanel.visible = true;
    FinancailAidPanel.enabled = false;
  } else{
    FinancailAidPanel.visible = false;
   // FinancailAidPanel.enabled = false;
  }
  PayrollPanel.visible = true;
}






        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
             var gifModal = document.getElementById('gifModal');
gifModal.sytle.display = "none";
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_textdraw_14206643021597131735895_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_textdraw_14206643021597131735895_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_ClassCode_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_ClassCode_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var classCodeVal = this.value;
classCodeVal = classCodeVal.substring(0,4);
if(classCodeVal === "1871" || classCodeVal === "1872" || classCodeVal === "1875" || classCodeVal === "1876" || classCodeVal === "1151" ){
  FormHeading.value="Federal Work-Study Student Worker Confirmation Ticket and Appointment Notification";
  FederalStudent.value = "1";
  federalInformation.visible = true;
} else{
  FormHeading.value="Student Worker Confirmation Ticket and Appointment Notification";
  FederalStudent.value = "0";
  federalInformation.visible = false;
}
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_ClassCode_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_ClassCode_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = CWID.value;
var classCodeVal = ClassCode.value;
classCodeVal = classCodeVal.substring(0,4);

 if(StageIndicator.value === null && ClassCodeDraft.value !== classCodeVal){   
   if(classCodeVal !== null && cwid !== null){
     $.ajax({
            type: 'GET',
            url: "/bin/getConfirmationTicket",
            data: {
                cwid: cwid,
              	classCode : classCodeVal
            },
            dataType: 'json',

            success: function(myresopnse) {
                
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {
                  ReportingUnit.value = myresopnse[0].REPORTING_UNIT;
                  EmplRcd.value= myresopnse[0].EMPL_RCD;
                  EffectiveDate.value =myresopnse[0].EFFECTIVE_DATE;
                  //CurrentDate.value = myresopnse[0].EFFECTIVE_DATE;
                  AppointmentEndDate.value = myresopnse[0].APPOINTMENT_END_DATE;
                  LastName.value = myresopnse[0].LAST_NAME;
                  MiddleName.value = myresopnse[0].MIDDLE_NAME;
                  FirstName.value = myresopnse[0].FIRST_NAME;
                  ActionReason.value = myresopnse[0].ACTION_REASON;
                  Action.value = myresopnse[0].ACTION;
                  DepartmentCode.value = myresopnse[0].DEPARTMENT_CODE;
                  Department.value = myresopnse[0].DEPARTMENT;
                  CMSPositionNumber.value = myresopnse[0].CMS_POSITION_NUMBER;
                  SerialNumber.value = myresopnse[0].SERIAL_NUMBER;
                  JobTitle.value = myresopnse[0].JOB_TITLE;
                  CompensationRate.value =  myresopnse[0].COMPENSATION_RATE;
                 
                  ClassCodeDraft.value = classCodeVal;
                  CwidDraft.value = cwid;
                  getDivisionData(DepartmentCode.value,cwid);
                  
                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                     //col.push("EMPLID");
                	col.push("FIRST_NAME");
               	 	col.push("LAST_NAME");
                	//col.push("MIDDLE_NAME");
              		col.push("EMPL_RCD");
                	col.push("DEPARTMENT_CODE");
                	col.push("DEPARTMENT");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First_Name", "Last_Name","EMPL_RCD", "DEPARTMENT_CODE", "DEPARTMENT"];
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
                    /*var cancelButton = document.createElement("input");
                    cancelButton.type = "button";
                    cancelButton.setAttribute("class", "cancelBtn");
                    cancelButton.id = "cBtn";
                    cancelButton.value = "Cancel";
                    cancelButton.onclick = function(event) {
                        modal.style.display = "none";
                    };
                    

                    footerModal.appendChild(cancelButton);*/
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {

                               ReportingUnit.value = myresopnse[n].REPORTING_UNIT;
                  EmplRcd.value= myresopnse[n].EMPL_RCD;
                  EffectiveDate.value =myresopnse[n].EFFECTIVE_DATE;
                  //CurrentDate.value = myresopnse[0].EFFECTIVE_DATE;
                  AppointmentEndDate.value = myresopnse[n].APPOINTMENT_END_DATE;
                  LastName.value = myresopnse[n].LAST_NAME;
                  MiddleName.value = myresopnse[n].MIDDLE_NAME;
                  FirstName.value = myresopnse[n].FIRST_NAME;
                  ActionReason.value = myresopnse[n].ACTION_REASON;
                  Action.value = myresopnse[n].ACTION;
                  DepartmentCode.value = myresopnse[n].DEPARTMENT_CODE;
                  Department.value = myresopnse[n].DEPARTMENT;
                  CMSPositionNumber.value = myresopnse[n].CMS_POSITION_NUMBER;
                  SerialNumber.value = myresopnse[n].SERIAL_NUMBER;
                  JobTitle.value = myresopnse[n].JOB_TITLE;
                  CompensationRate.value =  myresopnse[n].COMPENSATION_RATE;   
                      CwidDraft.value = cwid;
                   ClassCodeDraft.value = classCodeVal;
                         
                       getDivisionData(DepartmentCode.value,cwid);
                                rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    showErrorModal("Alert","No data available");
                CWID.value = "";
                ReportingUnit.value = "";
  EmplRcd.value= "";
  EffectiveDate.value ="";
  AppointmentEndDate.value = "";
  LastName.value = "";
  MiddleName.value = "";
  FirstName.value = "";
  ActionReason.value = "";
  Action.value = "";
  DepartmentCode.value = "";
  Department.value = "";
  CMSPositionNumber.value ="";
  SerialNumber.value = "";
  JobTitle.value = "";
  CompensationRate.value = "";
 CwidDraft.value = "";
                  ClassCodeDraft.value = "";
                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
   }else{
     showErrorModal("Alert","Please enter the CWID");
     //this.value = "";
   }
   
 }

function getDivisionData(deptId,cwid){
if (this.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getDivisionData",
            data: {
                deptId: deptId,
              	cwid: cwid
               
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length === 1) {
                  
                    Division.value = myresponse[0].DIVSION;
                    /*TimekeeperEmailId.value = myresponse[0].EMAILID;
                    TimekeeperUserId.value = myresponse[0].USERID;*/

                } 
                
            }
        });
    }
}


        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
var classCodeVal = ClassCode.value;

classCodeVal = classCodeVal.substring(0,4);

 if(StageIndicator.value === null && CwidDraft.value !== cwid){  
   if(classCodeVal !== null){
     
        $.ajax({
            type: 'GET',
            url: "/bin/getConfirmationTicket",
            data: {
                cwid: cwid,
              	classCode : classCodeVal
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {
                  ReportingUnit.value = myresopnse[0].REPORTING_UNIT;
                  EmplRcd.value= myresopnse[0].EMPL_RCD;
                  EffectiveDate.value =myresopnse[0].EFFECTIVE_DATE;
                  //CurrentDate.value = myresopnse[0].EFFECTIVE_DATE;
                  AppointmentEndDate.value = myresopnse[0].APPOINTMENT_END_DATE;
                  LastName.value = myresopnse[0].LAST_NAME;
                  MiddleName.value = myresopnse[0].MIDDLE_NAME;
                  FirstName.value = myresopnse[0].FIRST_NAME;
                  ActionReason.value = myresopnse[0].ACTION_REASON;
                  Action.value = myresopnse[0].ACTION;
                  DepartmentCode.value = myresopnse[0].DEPARTMENT_CODE;
                  Department.value = myresopnse[0].DEPARTMENT;
                  CMSPositionNumber.value = myresopnse[0].CMS_POSITION_NUMBER;
                  SerialNumber.value = myresopnse[0].SERIAL_NUMBER;
                  JobTitle.value = myresopnse[0].JOB_TITLE;
                  CompensationRate.value =  myresopnse[0].COMPENSATION_RATE;
                  
                  CwidDraft.value = cwid;
                  ClassCodeDraft.value = classCodeVal;
                  getDivisionData(DepartmentCode.value,cwid);
                  //getTimekeeperData(DepartmentCode.value,Division.value,Agency.value,FieldValue.value);
                  //getTimekeeperData('10074','10237','242','STU_CT_AP_PRI');
                  
                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                     //col.push("EMPLID");
                	col.push("FIRST_NAME");
               	 	col.push("LAST_NAME");
                	//col.push("MIDDLE_NAME");
              		col.push("EMPL_RCD");
                	col.push("DEPARTMENT_CODE");
                	col.push("DEPARTMENT");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First_Name", "Last_Name","EMPL_RCD", "DEPARTMENT_CODE", "DEPARTMENT"];
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
                    /*var cancelButton = document.createElement("input");
                    cancelButton.type = "button";
                    cancelButton.setAttribute("class", "cancelBtn");
                    cancelButton.id = "cBtn";
                    cancelButton.value = "Cancel";
                    cancelButton.onclick = function(event) {
                        modal.style.display = "none";
                    };
                    

                    footerModal.appendChild(cancelButton);*/
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {

                               ReportingUnit.value = myresopnse[n].REPORTING_UNIT;
                  EmplRcd.value= myresopnse[n].EMPL_RCD;
                  EffectiveDate.value =myresopnse[n].EFFECTIVE_DATE;
                  //CurrentDate.value = myresopnse[0].EFFECTIVE_DATE;
                  AppointmentEndDate.value = myresopnse[n].APPOINTMENT_END_DATE;
                  LastName.value = myresopnse[n].LAST_NAME;
                  MiddleName.value = myresopnse[n].MIDDLE_NAME;
                  FirstName.value = myresopnse[n].FIRST_NAME;
                  ActionReason.value = myresopnse[n].ACTION_REASON;
                  Action.value = myresopnse[n].ACTION;
                  DepartmentCode.value = myresopnse[n].DEPARTMENT_CODE;
                  Department.value = myresopnse[n].DEPARTMENT;
                  CMSPositionNumber.value = myresopnse[n].CMS_POSITION_NUMBER;
                  SerialNumber.value = myresopnse[n].SERIAL_NUMBER;
                  JobTitle.value = myresopnse[n].JOB_TITLE;
                  CompensationRate.value =  myresopnse[n].COMPENSATION_RATE;
                   ClassCodeDraft.value = classCodeVal;
                  CwidDraft.value = cwid;
                   
                    getDivisionData(DepartmentCode.value,cwid);
                                rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                showErrorModal("Alert","No data available");
                ReportingUnit.value = "";
                EmplRcd.value= "";
                EffectiveDate.value ="";
                AppointmentEndDate.value = "";
                LastName.value = "";
                MiddleName.value = "";
                FirstName.value = "";
                ActionReason.value = "";
                Action.value = "";
                DepartmentCode.value = "";
                Department.value = "";
                CMSPositionNumber.value ="";
                SerialNumber.value = "";
                JobTitle.value = "";
                CompensationRate.value = "";
				CwidDraft.value = "";
                ClassCodeDraft.value = "";
                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
   }else{
     showErrorModal("Alert","Please select the class code");
     this.value = "";
   }
   
 }


function getTimekeeperData(deptId,division,agencyUnit,fieldVal){
if (this.value !== null) {
		TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
  		
        $.ajax({
            type: 'GET',
            url: "/bin/getTimekeeperData",
            data: {
                deptId: deptId,
              	division : division,
                agencyUnit: agencyUnit,
				fieldVal:fieldVal
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length === 1) {
                  
                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                    TimekeeperUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
    }
}


function getDivisionData(deptId,cwid){
if (this.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getDivisionData",
            data: {
                deptId: deptId,
              	cwid: cwid
               
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length === 1) {
                  
                    Division.value = myresponse[0].DIVSION;
                    /*TimekeeperEmailId.value = myresponse[0].EMAILID;
                    TimekeeperUserId.value = myresponse[0].USERID;*/

                } 
                
            }
        });
    }
}

        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_EmplRcd_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_EmplRcd_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_EffectiveDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_EffectiveDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_DepartmentCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_DepartmentCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_StageIndicator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_StageIndicator_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_LogUser_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_LogUser_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;
  LogUser.value = userValue;
  workflow_initiator.value = userValue;
},
  error: function(error){
alert("error block="+error);
}
});
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FederalStudent_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FederalStudent_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_Division_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_Division_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
   getTimekeeperData(DepartmentCode.value,Division.value,ReportingUnit.value,FieldValue.value);

}

function getTimekeeperData(deptId,division,agencyUnit,fieldVal){

if (this.value !== null) {
		TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
  		
        $.ajax({
            type: 'GET',
            url: "/bin/getTimekeeperData",
            data: {
                deptId: deptId,
              	division : division,
                agencyUnit: agencyUnit,
				fieldVal:fieldVal
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length === 1) {
                  
                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                  
                    TimekeeperUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
    }
}


        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FieldValue_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FieldValue_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value ="STU_AP_OFF";
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated__valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated__valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  /*var fnVal = FirstName.value;
  var lnVal = LastName.value;
  var signEmp = fnVal.concat(" ").concat(lnVal);
  EmpSign.value = signEmp;
  EmpSign2.value = signEmp;*/
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  
  CobraSignDate.value=TzoneDate;
  CobraSignDate.enabled = false;
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_HiringDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_HiringDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (HiringDeptSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            HiringDeptDate.value = d;

            HiringDeptDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    HiringDeptSign.value = userValue;
                  HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

            HiringDeptSign.enabled = false;
            HiringDeptName.enabled = false;

        } 
    //}
} else {
    HiringDeptSign.value = "";
    HiringDeptName.value = "";
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_AuthDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_AuthDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (AuthDeptSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            AuthDeptDate.value = d;

            AuthDeptDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    AuthDeptSign.value = userValue;
                  AuthDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          	AuthDeptSign.enabled = false;
    		AuthDeptName.enabled = false;

        } 
    //}
} else {
    AuthDeptSign.value = "";
    AuthDeptName.value = "";
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FinancialDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_FinancialDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (FinanceDeptSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            FinancialDate.value = d;

            FinancialDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    FinanceDeptSign.value = userValue;
                  FinanceDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           FinanceDeptSign.enabled = false;
    		FinanceDeptName.enabled = false;

        } 
    //}
} else {
    FinanceDeptSign.value = "";
    FinanceDeptName.value = "";
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_PayrollDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_PayrollDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (PayrollDeptSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            PayrollDate.value = d;

            PayrollDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    PayrollDeptSign.value = userValue;
                  PayrollDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

             PayrollDeptSign.enabled = false;
    	PayrollDeptName.enabled = false;

        } 
    //}
} else {
    PayrollDeptSign.value = "";
    PayrollDeptName.value = "";
}
        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (CWID.value !== null && FirstName.value !== null && LastName.value !== null){
  submitFlag=0;
} else{
   showErrorModal("Alert !","Please enter First_Name, Last_Name, CWID");
   submitFlag=1;
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
            jsonData.append('formPath', '/content/forms/af/confirmation-ticket/federal-student-worker-confirmation-ticket');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + CWID.value + ")" + "_" + Date.now());          
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
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_saveguidedraft1589870024328_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_saveguidedraft1589870024328_click0 = function (scope) {
    with(this) {
        with(scope) {
            SaveFormStatus.value = "1";
if(CWID.value !== null){
   aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + CWID.value);
}
handleDraftSave(this);



        }
	}
}
/**
 * @function confirmation_ticket_federal_student_worker_confirmation_ticket.generated_submit1589870048344_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
confirmation_ticket_federal_student_worker_confirmation_ticket.generated_submit1589870048344_click0 = function (scope) {
    with(this) {
        with(scope) {
            //TimekeeperEmailId.value = "pushpa.kawadi@thoughtfocus.com";
TimekeeperEmailId.value = "yjayaram@fullerton.edu";
//TimekeeperEmailId.value = "ram.singh@thoughtfocus.com";
if(CWID.value !== null){
  EmailSubject.value = "Confirmation Ticket and Appointment Notification - "+ LastName.value+", "+FirstName.value+ "("+CWID.value+")";
}else{
  EmailSubject.value = "Confirmation Ticket and Appointment Notification";
}

aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + CWID.value);
guideBridge.submit();


        }
	}
}
