/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && formSavedStatus.value != "1") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";


    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {

            if (myresponse.Status == "Success") {
                var userValue = myresponse.userId;
               // userValue = "jmccoy";
                workflow_initiator.value = userValue;
                logUser.value = userValue;
                $.ajax({
                    type: 'GET',
                    url: "/bin/getOTSDUserID",
                    data: {

                        userID: userValue
                    },
                    dataType: 'json',
                    success: function(myresopnse) {
                        // debugger;
                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        if (myresopnse.length === 1) {


                            DeptID.value = myresopnse[0].DEPTID;
                            CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;

                            Ful_Division.value = myresopnse[0].FUL_DIVISION;
                            //getAuthApproverData(DeptID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);

                            gifModal.style.display = "none";
                            modal.style.display = "none";
                            getEmployemployeeEmployeeDetails();

                        } else if (myresopnse.length > 1) {
                            gifModal.style.display = "none";
                            modal.style.display = "block";
                            //populate Hidden Fields

                            var col = [];
                            col.push("DEPTID");


                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Dept_ID"];
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

                                    /*deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                                    DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                                    EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;*/

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
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {
                                        DeptID.value = myresopnse[n].DEPTID;

                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the department");
                                    modal.style.display = "block";
                                } else {

                                    /*PositionNumber.value = PosNumHidden.value;
                                    SSN.value = SSNHidden.value;
                                    DeptName.value = DeptNameHidden.value;
                                    EmplRCD.value = EmplRCDHidden.value;
                                    MiddleName.value = MiddleNameHidden.value;
                                    DeptID.value = deptHidden.value;
                                    LastName.value = lnameHidden.value;
                                    FirstName.value = fnameHidden.value;
                                    EmplID.value = EmpIdHidden.value;*/
                                    CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                                    Ful_Division.value = myresopnse[n].FUL_DIVISION;

                                    //getAuthApproverData(DeptID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                                    gifModal.style.display = "none";
                                    modal.style.display = "none";
                                    getEmployemployeeEmployeeDetails();
                                }
                            };

                            footerModal.appendChild(okButton);

                        } else {
                            showErrorModal("Alert!", "No matching records found");

                            gifModal.style.display = "none";
                        }

                        span.onclick = function() {

                            var n;
                            var rButtonStatus;

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
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "Please select the department");
                                modal.style.display = "block";
                            } else {
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "Please select the department");
                                modal.style.display = "block";
                            }

                        };
                    }
                });
            }
        },
        error: function(error) {
            showErrorModal("Alert!", "error block=" + error);
            //loadingText.visible = false; 
        }
    });
}

function getAuthApproverData(deptId, division, agencyUnit, fieldVal) {

    ManagerUserId.value = "";
    ManagerName.value = "";
    ManagerEmailId.value = "";
    $.ajax({
        type: 'GET',
        url: "/bin/getTimekeeperData",
        data: {
            deptId: deptId,
            division: division,
            agencyUnit: agencyUnit,
            fieldVal: fieldVal
        },
        dataType: 'json',
        success: function(result) {
            if (result.length === 1) {
                ManagerName.value = result[0].NAME;
                //    ManagerEmailId.value = result[0].EMAILID;
                ManagerEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                ManagerUserId.value = result[0].USERID;
            }
        }
    });
}
if (formSavedStatus.value == "1" && StageIndicator.value === null) {
    formSavedStatus.value = null;
}

function getEmployemployeeEmployeeDetails() {
    var userID = logUser.value;

    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    $.ajax({
        type: 'GET',
        url: "/bin/getOTSDEmpID",
        data: {
            cwid: "",
            userID: userID
        },
        dataType: 'json',

        success: function(myresopnse) {
            //alert("myresopnse.length="+myresopnse);
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];

            if (myresopnse.length === 1) {

                EmpREC.value = myresopnse[0].EMPL_RCD;
                Initials.value = myresopnse[0].INITIALS;
                SSN.value = myresopnse[0].NATIONAL_ID;
                var numbers = SSN.value;
                SSN.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                SSN_1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                Lname.value = myresopnse[0].LAST_NAME;
                Class.value = myresopnse[0].JOBCODE;
                CHRSId.value = myresopnse[0].CSU_CHRS_ID;
                EmpIDInitiator.value = myresopnse[0].CSU_CHRS_ID;
                EmpFullName.value = Initials.value + " " + Lname.value;
                Unit.value = myresopnse[0].CSU_UNIT;


                gifModal.style.display = "none";

            } else if (myresopnse.length > 1) {

                gifModal.style.display = "none";
                modal.style.display = "block";

                var col = [];

                //col.push("EMPLID");

                col.push("INITIALS");

                col.push("LAST_NAME");

                col.push("JOBCODE");
                col.push("EMPL_RCD");

                col.push("NATIONAL_ID");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                //var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
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
                        if (col[l] == "NATIONAL_ID") {
                            tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
                        } else {
                            tabCell.innerHTML = myresopnse[k][col[l]];

                        }
                    }
                }

                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);

                var footerModal = document.getElementById("modal_footer");
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");

                okButton.value = "Ok";
                okButton.onclick = function(event) {

                    var n;
                    var rButtonStatus;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {

                            rButtonStatus = false;
                        } else {

                            EmpREC.value = myresopnse[n].EMPL_RCD;
                            Initials.value = myresopnse[n].INITIALS;
                            SSN.value = myresopnse[n].NATIONAL_ID;
                            var numbers = SSN.value;
                            SSN.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                            SSN_1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                            Lname.value = myresopnse[n].LAST_NAME;
                            Class.value = myresopnse[n].JOBCODE;
                            CHRSId.value = myresopnse[n].CSU_CHRS_ID;
                            EmpIDInitiator.value = myresopnse[n].CSU_CHRS_ID;
                            EmpFullName.value = Initials.value + " " + Lname.value;
                            Unit.value = myresopnse[n].CSU_UNIT;
                            rButtonStatus = true;
                            modal.style.display = "none";
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        showErrorModal("Alert!", "Please select the department");
                        modal.style.display = "block";
                    }
                };
                var footerModal = document.getElementById("modal_footer");

                footerModal.appendChild(okButton);

            } else {
                showErrorModal("Alert!", "No matching records found");
                gifModal.style.display = "none";

            }

            span.onclick = function() {

                modal.style.display = "none";
            };

        }
    });
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*EmpREC.enabled = false;


SSN.enabled = false;


Initials.enabled = false;


Lname.enabled = false;*/

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll"){
Class.enabled = true;
Serial.enabled = true;
Timebase.enabled = true;
  
}else{
Class.enabled = false;
Serial.enabled = false;
Timebase.enabled = false;
EmpID.enabled = false;
}


DeptID.enabled = false;
if(StageIndicator.value === null){    
  managerSignSection.visible = false;
  PayrollSignatureSection.visible = false;
  TimekeeperSignatureSection.visible = true;
}

if(StageIndicator.value === "ToRequestor"){  
  Batch.enabled = false;
   TimekeeperSignatureSection.visible = true;
   TimekeeperSignatureSection.enabled = true;
  managerSignSection.visible = true;
  managerSignSection.enabled = false;
  if(PayRollSign.value !== null){
    PayrollSignatureSection.visible = true;
    PayrollSignatureSection.enabled = false;
  }else{
  PayrollSignatureSection.visible = false;
  }
}
if(StageIndicator.value === "ToManager"){
  TimekeeperSignatureSection.visible = true;
   TimekeeperSignatureSection.enabled = false;
  DeptID.enabled = false;
  Agency.enabled = false;
  Unit.enabled = false;
  MonthPeriod.enabled = false;
  YearPeriod.enabled = false;
  panelTable.enabled = false;
  Batch.enabled = false;
  AuthSign.enabled = false;
  AuthExt.enabled = false;
  AuthDate.enabled = false;
  AuthCB.enabled = false;
  EmpID.enabled = false;
  managerSignSection.visible = true;
  if(PayRollSign.value !== null){
    PayrollSignatureSection.visible = true;
    PayrollSignatureSection.enabled = false;
  }else{
  PayrollSignatureSection.visible = false;
  }
}
if(StageIndicator.value == "ToPayroll"){
   EmpID.enabled = false;
  panelTable.enabled = true;
  DeptID.enabled = false;
  Agency.enabled = false;
  Unit.enabled = false;
  MonthPeriod.enabled = false;
  YearPeriod.enabled = false;
  Batch.enabled = true;
  AuthSign.enabled = false;
  AuthExt.enabled = false;
  AuthDate.enabled = false;
  AuthCB.enabled = false;
  managerSignSection.visible = true;
  managerSignSection.enabled = false;
  PayrollSignatureSection.visible = true;
  TimekeeperSignatureSection.visible = true;
   TimekeeperSignatureSection.enabled = false;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value == "ToManager") {

    panelTable.enabled = false;

} else {

    if (StageIndicator.value == "ToRequestor" || StageIndicator.value === null) {
        var rowcount = Row1.instanceManager.instanceCount;
        for (var k = 0; k < rowcount; k++) {
            Row1.instanceManager.instances[k].Payroll.enabled = false;
        }
    } else {
        for (var k = 0; k < rowcount; k++) {
            Row1.instanceManager.instances[k].Payroll.enabled = true;
        }
    }

}

/*if(StageIndicator.value == "ToManager"){

TRC1.enabled = false;
TRC2.enabled = false;
TRC3.enabled = false;
TRC4.enabled = false;
TRC5.enabled = false;
TRC6.enabled = false;
TRC7.enabled = false;

Payroll1.enabled = false;
Payroll2.enabled = false;
Payroll3.enabled = false;
Payroll4.enabled = false;
Payroll5.enabled = false;
Payroll6.enabled = false;
Payroll7.enabled = false;

Dept1.enabled = false;
Dept2.enabled = false;
Dept3.enabled = false;
Dept4.enabled = false;
Dept5.enabled = false;
Dept6.enabled = false;
Dept7.enabled = false;

Hours1.enabled = false;
HDTHS1.enabled = false;
Hours2.enabled = false;
HDTHS2.enabled = false;
Hours3.enabled = false;
HDTHS3.enabled = false;
Hours4.enabled = false;
HDTHS4.enabled = false;
Hours5.enabled = false;
HDTHS5.enabled = false;
Hours6.enabled = false;
HDTHS6.enabled = false;
Hours7.enabled = false;
HDTHS7.enabled = false;



Fund1.enabled = false;
Fund2.enabled = false;
Fund3.enabled = false;
Fund4.enabled = false;
Fund5.enabled = false;
Fund6.enabled = false;
Fund7.enabled = false;

Comment1.enabled = false;
Comment2.enabled = false;
Comment3.enabled = false;
Comment4.enabled = false;
Comment5.enabled = false;
Comment6.enabled = false;
Comment7.enabled = false;



Program1.enabled = false;
Program2.enabled = false;
Program3.enabled = false;
Program4.enabled = false;
Program5.enabled = false;
Program6.enabled = false;
Program7.enabled = false;

Account1.enabled = false;
Account2.enabled = false;
Account3.enabled = false;
Account4.enabled = false;
Account5.enabled = false;
Account6.enabled = false;
Account7.enabled = false;


}else{
  if(StageIndicator.value == "ToRequestor"||StageIndicator.value === null){
    Payroll1.enabled = false;
Payroll2.enabled = false;
Payroll3.enabled = false;
Payroll4.enabled = false;
Payroll5.enabled = false;
Payroll6.enabled = false;
Payroll7.enabled = false;
  }else{

Payroll1.enabled = true;
Payroll2.enabled = true;
Payroll3.enabled = true;
Payroll4.enabled = true;
Payroll5.enabled = true;
Payroll6.enabled = true;
Payroll7.enabled = true;
  }

Dept1.enabled = true;
Dept2.enabled = true;
Dept3.enabled = true;
Dept4.enabled = true;
Dept5.enabled = true;
Dept6.enabled = true;
Dept7.enabled = true;

Hours1.enabled = true;
HDTHS1.enabled = true;
Hours2.enabled = true;
HDTHS2.enabled = true;
Hours3.enabled = true;
HDTHS3.enabled = true;
Hours4.enabled = true;
HDTHS4.enabled = true;
Hours5.enabled = true;
HDTHS5.enabled = true;
Hours6.enabled = true;
HDTHS6.enabled = true;
Hours7.enabled = true;
HDTHS7.enabled = true;



Fund1.enabled = true;
Fund2.enabled = true;
Fund3.enabled = true;
Fund4.enabled = true;
Fund5.enabled = true;
Fund6.enabled = true;
Fund7.enabled = true;

Comment1.enabled = true;
Comment2.enabled = true;
Comment3.enabled = true;
Comment4.enabled = true;
Comment5.enabled = true;
Comment6.enabled = true;
Comment7.enabled = true;

Program1.enabled = true;
Program2.enabled = true;
Program3.enabled = true;
Program4.enabled = true;
Program5.enabled = true;
Program6.enabled = true;
Program7.enabled = true;

Account1.enabled = true;
Account2.enabled = true;
Account3.enabled = true;
Account4.enabled = true;
Account5.enabled = true;
Account6.enabled = true;
Account7.enabled = true;


TRC1.enabled = true;
TRC2.enabled = true;
TRC3.enabled = true;
TRC4.enabled = true;
TRC5.enabled = true;
TRC6.enabled = true;
TRC7.enabled = true;
  

}*/
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
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
                var fundArray = [];
                var programCodeArray = [];
                var classCodeArray = [];
                var projectArray = [];
                var accountArray = [];
                for (var a = 0; a < response[0].DEPT.length; a++) {
                    deptArray.push(response[0].DEPT[a].DEPTID);
                }
                for (var b = 0; b < response[0].FUND.length; b++) {
                    fundArray.push(response[0].FUND[b].fund_code);
                }
                for (var c = 0; c < response[0].PROGRAM.length; c++) {
                    programCodeArray.push(response[0].PROGRAM[c].program);
                }
                for (var d = 0; d < response[0].CLASS_CODE.length; d++) {
                    classCodeArray.push(response[0].CLASS_CODE[d].CLASS);
                }
                for (var e = 0; e < response[0].PROJECT.length; e++) {
                    projectArray.push(response[0].PROJECT[e].PROJECT);
                }
                for (var f = 0; f < response[0].ACCOUNT.length; f++) {
                    accountArray.push(response[0].ACCOUNT[f].ACCOUNT);
                }

                var rowcount = Row1.instanceManager.instanceCount;
                if (rowcount !== null) {

                    for (var k = 0; k < rowcount; k++) {
                        Row1.instanceManager.instances[k].Dept.items = deptArray;
                        Row1.instanceManager.instances[k].Fund.items = fundArray;
                        Row1.instanceManager.instances[k].Program.items = programCodeArray;
                        Row1.instanceManager.instances[k].Class.items = classCodeArray;
                        Row1.instanceManager.instances[k].Account.items = accountArray;
                    }
                }


                FundingDeptIDDataArray.value = JSON.stringify(deptArray);
                FundDataArray.value = JSON.stringify(fundArray);
                ProgramCodeDataArray.value = JSON.stringify(programCodeArray);
                ClassCodeDataArray.value = JSON.stringify(classCodeArray);
                AccountDataArray.value = JSON.stringify(accountArray);


            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
    var arr = ["(OTPR) = Overtime Paid @ 1.5", "(OTST) = Overtime Paid @ 1.0", "(SHE08) = Shift - Evening R08 (.23)", "(SHGRV) = Shift - Graveyard (2.30)", "(SHN08) = Shift - Night R08 (2.20)", "(SHSWG) = Shift - Swing (1.35)", "(SHG06) = Shift – Graveyard R06 (2.30)", "(SHU06) = Shift – Sunday R06 Diff (1.30)", "(SHS06) = Shift – Swing R06 Diff (1.30)", "(SHG99) = Shift – Graveyard Cadet (.28)", "(SHS99) = Shift – Swing Cadet Diff (.23)", "(HG5) = Planned Holiday Pay @1.0", "(HG6) = Planned Holiday Pay @1.5", "(ASBES) = Asbestos HazMat Hndl Diff (3.00)"];
    debugger;
    var rowcount = Row1.instanceManager.instanceCount;
                if (rowcount !== null) {

                    for (var k = 0; k < rowcount; k++) {
                        Row1.instanceManager.instances[k].TRC.items = arr;
                    }
                }
    TRCDataArray.value = JSON.stringify(arr);


    if (StageIndicator.value === null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
            data: {
                action: "EMP_DETAILS"
            },
            dataType: 'json',

            success: function(myresopnse) {


                if (myresopnse.length !== 0) {
                    RequestorUserId.value = myresopnse[0].EMP_USERID;
                    //RequestorEmail.value = myresopnse[0].EMAILID;
                    RequestorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                    RequestorName.value = myresopnse[0].EMP_NAME;
                    EmpID.value = myresopnse[0].EMPLID;
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init4
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init4 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete", function(event, payload) {
    removeDropDownData();

    function removeDropDownData() {
      var rowcount = Row1.instanceManager.instanceCount;
  for (var k = 0; k < rowcount; k++) {


                        Row1.instanceManager.instances[k].TRC.items = "";
                        Row1.instanceManager.instances[k].Dept.items = "";
                        Row1.instanceManager.instances[k].Fund.items = "";
                        Row1.instanceManager.instances[k].Program.items = "";
                        Row1.instanceManager.instances[k].Class.items = "";
                        Row1.instanceManager.instances[k].Account.items = "";
                    
            }
    }
});
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init5
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_guideRootPanel_init5 = function (scope) {
    with(this) {
        with(scope) {
            for (var i = 0; i < 31; i++) {
            var num = i + 1;
            Row1.instanceManager.instances[i].Line.value = num;
        }
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_CHRSId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_CHRSId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = true;
}else{
    this.enabled = false;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_CHRSId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_CHRSId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToRequestor") && (this.value !== null && (EmpIDInitiator.value !== this.value))) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;

            workflow_initiator.value = userValue;
            // userID = "jluzzi";

            var chrsId = CHRSId.value;

            $.ajax({
                type: 'GET',
                url: "/bin/chrsIDUpdateServlet",
                data: {
                    action: "HOURLY_INTER_CHRSID",
                    chrsId: chrsId,
                    userId: userValue
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length === 1) {

                        EmpREC.value = myresopnse[0].EMPL_RCD;
                        Lname.value = myresopnse[0].LAST_NAME;
                        Initials.value = myresopnse[0].FIRST_NAME;
                        SSN.value = myresopnse[0].LAST4SSN;
                        var numbers = SSN.value;
                        SSN.value = "XXXX-XX-" + numbers.substr(5, 4);
                        SSN_1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                        CSU_Agency_Unit.value = myresopnse[0].CSU_UNIT;
                        Unit.value = myresopnse[0].CSU_UNIT;
                        CSU_Agency_Unit.value = myresopnse[0].CSU_UNIT;
                        DeptID.value = myresopnse[0].DEPTID;
                        Class.value = myresopnse[0].Jobcode;
                        EmpID.value = myresopnse[0].EMPLID;


                        gifModal.style.display = "none";

                    } else if (myresopnse.length > 1) {

                        gifModal.style.display = "none";
                        modal.style.display = "block";

                        var col = [];

                        col.push("FIRST_NAME");
                        col.push("LAST_NAME");
                        col.push("DEPTNAME");
                        col.push("EMPL_RCD");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        var headings = ["", "First Name", "Last Name", "Department Name", "Emp RCD"];
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

                        var footerModal = document.getElementById("modal_footer");
                        var okButton = document.createElement("input");
                        okButton.type = "button";
                        okButton.setAttribute("class", "okBtn");
                        //okButton.id = "okBtn";
                        okButton.value = "Ok";
                        okButton.onclick = function(event) {

                            var n;
                            var rButtonStatus;
                            var rButtons = document.getElementsByClassName("rb");
                            for (n = 0; n < rButtons.length; n++) {
                                if (rButtons[n].checked === false) {
                                    rButtonStatus = false;
                                } else {

                                    EmpREC.value = myresopnse[n].EMPL_RCD;
                                    Lname.value = myresopnse[n].LAST_NAME;
                                    Initials.value = myresopnse[n].FIRST_NAME;
                                    SSN.value = myresopnse[n].LAST4SSN;
                                    var numbers = SSN.value;
                                    SSN.value = "XXXX-XX-" + numbers.substr(5, 4);
                                    SSN_1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                                    CSU_Agency_Unit.value = myresopnse[n].CSU_UNIT;
                                    Unit.value = myresopnse[n].CSU_UNIT;
                                    DeptID.value = myresopnse[n].DEPTID;
                                    Class.value = myresopnse[n].Jobcode;
                                    EmpID.value = myresopnse[n].EMPLID;


                                    rButtonStatus = true;
                                    modal.style.display = "none";
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                showErrorModal("Alert!", "Please select the department");
                                modal.style.display = "block";
                            }
                        };
                        var footerModal = document.getElementById("modal_footer");

                        footerModal.appendChild(okButton);

                    } else {
                        modal.style.display = "none";

                        gifModal.style.display = "none";
                        showErrorModal("Alert!", "No matching records found");
                    }

                    ////////////////////////////////////////////
                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
        }

    });

}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_EmpID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_EmpID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Initials_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Initials_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Lname_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Lname_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_EmpREC_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_EmpREC_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_SSN_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_SSN_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value == "ToPayroll"){
  this.value = SSN_1.value;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Unit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Unit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  getAuthApproverData(DeptID.value,Ful_Division.value,Unit.value,Field_Value_2.value);
}

function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

		ManagerUserId.value = "";
        ManagerName.value = "";
        ManagerEmailId.value = "";
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
            success: function(result) {
                if (result.length === 1) {                  
                    ManagerName.value = result[0].NAME;
                   // ManagerEmailId.value = result[0].EMAILID;
                    ManagerEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                    ManagerUserId.value = result[0].USERID;
                }                 
            }
        });
    }
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_MonthPeriod_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_MonthPeriod_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

    
if (StageIndicator.value === null && YearPeriod.value !== null) {
  
  var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
       
    if (YearPeriod.value !== null && MonthPeriod.value !== null) {     

        var rowcount = Row1.instanceManager.instanceCount;
        if (rowcount !== null) {
          for(var j = 0; j < 3; j++){
            Row1.instanceManager.removeInstance(Row1.instanceIndex);
          }

            for (var k = 0; k < rowcount; k++) {
                //Row1.instanceManager.removeInstance(Row1.instanceIndex);

                        Row1.instanceManager.instances[k].Line.value = "";
                        Row1.instanceManager.instances[k].TRC.value = "";
                        Row1.instanceManager.instances[k].Date_1.value = "";
                        Row1.instanceManager.instances[k].HRS.value = "";
                        Row1.instanceManager.instances[k].HDTHS.value = "";
                        Row1.instanceManager.instances[k].Payroll.value = "";
                        Row1.instanceManager.instances[k].Dept.value = "";
                        Row1.instanceManager.instances[k].Fund.value = "";
                        Row1.instanceManager.instances[k].Program.value = "";
                        Row1.instanceManager.instances[k].Class.value = "";
                        Row1.instanceManager.instances[k].Account.value = "";
                        Row1.instanceManager.instances[k].Comment.value = "";
                    
            }
        }

        Row1.TRC.value = "";
        Row1.Date_1.value = "";
        Row1.HRS.value = "";
        Row1.HDTHS.value = "";
        Row1.Payroll.value = "";
        Row1.Dept.value = "";
        Row1.Fund.value = "";
        Row1.Class.value = "";
        Row1.Program.value = "";
        Row1.Account.value = "";
        Row1.Comment.value = "";
        var monthNumber = getMonthNumber(MonthPeriod.value);
        var numberOfDays = getDaysInMonth(MonthPeriod.value, YearPeriod.value);


        for (var i = 0; i < numberOfDays; i++) {
            if (i < (numberOfDays - 28)) {
                Row1.instanceManager.addInstance(true);
            }
            var num = i + 1;
            Row1.instanceManager.instances[i].Line.value = num;
            Row1.instanceManager.instances[i].Date_1.value = YearPeriod.value + "-" + monthNumber + "-" + num;
        }
      //  Hidden_Line.value = num;
        gifModal.style.display = "none";
    }

}

function getDaysInMonth(month, year) {
    // List of months with their corresponding number of days
    var daysInMonth = {
        January: 31,
        February: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    };

    // Convert month name to title case
    var titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    // Return the number of days in the specified month
    return daysInMonth[titleCaseMonth];
}

function getMonthNumber(monthName) {
    // Convert month name to lowercase
    var lowerCaseMonth = monthName.toLowerCase();

    // List of months with their corresponding number of days
    var months = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    };
    return months[lowerCaseMonth];
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_MonthPeriod_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_MonthPeriod_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {

    if (YearPeriod.value !== null && MonthPeriod.value !== null) {
        var rowcount = Row1.instanceManager.instanceCount;

        for (var k = 0; k < rowcount; k++) {
            //Row1.instanceManager.instances[k].Line.value = "";
            Row1.instanceManager.instances[k].TRC.value = "";
            Row1.instanceManager.instances[k].Date_1.value = "";
            Row1.instanceManager.instances[k].HRS.value = "";
            Row1.instanceManager.instances[k].HDTHS.value = "";
            Row1.instanceManager.instances[k].Payroll.value = "";
            Row1.instanceManager.instances[k].Dept.value = "";
            Row1.instanceManager.instances[k].Fund.value = "";
            Row1.instanceManager.instances[k].Program.value = "";
            Row1.instanceManager.instances[k].Class.value = "";
            Row1.instanceManager.instances[k].Account.value = "";
            Row1.instanceManager.instances[k].Comment.value = "";

            Row1.instanceManager.instances[k].Line.enabled = false;
            Row1.instanceManager.instances[k].TRC.enabled = false;
            Row1.instanceManager.instances[k].Date_1.enabled = false;
            Row1.instanceManager.instances[k].HRS.enabled = false;
            Row1.instanceManager.instances[k].HDTHS.enabled = false;
            Row1.instanceManager.instances[k].Payroll.enabled = false;
            Row1.instanceManager.instances[k].Dept.enabled = false;
            Row1.instanceManager.instances[k].Fund.enabled = false;
            Row1.instanceManager.instances[k].Program.enabled = false;
            Row1.instanceManager.instances[k].Class.enabled = false;
            Row1.instanceManager.instances[k].Account.enabled = false;
            Row1.instanceManager.instances[k].Comment.enabled = false;
        }
        /*if(rowcount>28){
          for(var j = 28; j < 31; j++){
                    Row1.instanceManager.removeInstance(Row1.instanceIndex);
                  }
        }*/


        var monthNumber = getMonthNumber(MonthPeriod.value);
        var numberOfDays = getDaysInMonth(MonthPeriod.value, YearPeriod.value);
        for (var i = 0; i < numberOfDays; i++) {
            var num = i + 1;
            //  Row1.instanceManager.instances[i].Line.value = num;
            Row1.instanceManager.instances[i].Date_1.value = YearPeriod.value + "-" + monthNumber + "-" + num;

            Row1.instanceManager.instances[i].Line.enabled = true;
            Row1.instanceManager.instances[i].TRC.enabled = true;
            Row1.instanceManager.instances[i].Date_1.enabled = true;
            Row1.instanceManager.instances[i].HRS.enabled = true;
            Row1.instanceManager.instances[i].HDTHS.enabled = true;
            Row1.instanceManager.instances[i].Payroll.enabled = true;
            Row1.instanceManager.instances[i].Dept.enabled = true;
            Row1.instanceManager.instances[i].Fund.enabled = true;
            Row1.instanceManager.instances[i].Program.enabled = true;
            Row1.instanceManager.instances[i].Class.enabled = true;
            Row1.instanceManager.instances[i].Account.enabled = true;
            Row1.instanceManager.instances[i].Comment.enabled = true;
        }

        //console.log(monthNumber+" "+numberOfDays);

        //alert("done");
        if (StageIndicator.value == "ToRequestor" || StageIndicator.value === null) {
            var rowcount = Row1.instanceManager.instanceCount;
            for (var k = 0; k < rowcount; k++) {
                Row1.instanceManager.instances[k].Payroll.enabled = false;
            }
        } else {
            for (var k = 0; k < rowcount; k++) {
                Row1.instanceManager.instances[k].Payroll.enabled = true;
            }
        }

    }
}

function getDaysInMonth(month, year) {
    var daysInMonth = {
        January: 31,
        February: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    };
    var titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    return daysInMonth[titleCaseMonth];
}

function getMonthNumber(monthName) {
    var lowerCaseMonth = monthName.toLowerCase();
    var months = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    };
    return months[lowerCaseMonth];
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_YearPeriod_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_YearPeriod_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    
if (StageIndicator.value === null) {
       
    if (YearPeriod.value !== null && MonthPeriod.value !== null) {     

        var rowcount = Row1.instanceManager.instanceCount;
        if (rowcount !== null) {
          for(var j = 0; j < 3; j++){
            Row1.instanceManager.removeInstance(Row1.instanceIndex);
          }

            for (var k = 0; k < rowcount; k++) {
                //Row1.instanceManager.removeInstance(Row1.instanceIndex);

                        Row1.instanceManager.instances[k].Line.value = "";
                        Row1.instanceManager.instances[k].TRC.value = "";
                        Row1.instanceManager.instances[k].Date_1.value = "";
                        Row1.instanceManager.instances[k].HRS.value = "";
                        Row1.instanceManager.instances[k].HDTHS.value = "";
                        Row1.instanceManager.instances[k].Payroll.value = "";
                        Row1.instanceManager.instances[k].Dept.value = "";
                        Row1.instanceManager.instances[k].Fund.value = "";
                        Row1.instanceManager.instances[k].Program.value = "";
                        Row1.instanceManager.instances[k].Class.value = "";
                        Row1.instanceManager.instances[k].Account.value = "";
                        Row1.instanceManager.instances[k].Comment.value = "";
                    
            }
        }

        Row1.TRC.value = "";
        Row1.Date_1.value = "";
        Row1.HRS.value = "";
        Row1.HDTHS.value = "";
        Row1.Payroll.value = "";
        Row1.Dept.value = "";
        Row1.Fund.value = "";
        Row1.Class.value = "";
        Row1.Program.value = "";
        Row1.Account.value = "";
        Row1.Comment.value = "";
        var monthNumber = getMonthNumber(MonthPeriod.value);
        var numberOfDays = getDaysInMonth(MonthPeriod.value, YearPeriod.value);


        for (var i = 0; i < numberOfDays; i++) {
            if (i < (numberOfDays - 28)) {
                Row1.instanceManager.addInstance(true);
            }
            var num = i + 1;
            Row1.instanceManager.instances[i].Line.value = num;
            Row1.instanceManager.instances[i].Date_1.value = YearPeriod.value + "-" + monthNumber + "-" + num;
        }
      
       for(var j = 28; j < 31; j++){
            Row1.instanceManager.instances[i].Line.enabled=false;
          }
}
      //  Hidden_Line.value = num;
        gifModal.style.display = "none";
    }

}

function getDaysInMonth(month, year) {
    // List of months with their corresponding number of days
    var daysInMonth = {
        January: 31,
        February: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    };

    // Convert month name to title case
    var titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    // Return the number of days in the specified month
    return daysInMonth[titleCaseMonth];
}

function getMonthNumber(monthName) {
    // Convert month name to lowercase
    var lowerCaseMonth = monthName.toLowerCase();

    // List of months with their corresponding number of days
    var months = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    };
    return months[lowerCaseMonth];
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_YearPeriod_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_YearPeriod_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {

    if (YearPeriod.value !== null && MonthPeriod.value !== null) {
        var rowcount = Row1.instanceManager.instanceCount;

        for (var k = 0; k < rowcount; k++) {
            //Row1.instanceManager.instances[k].Line.value = "";
            Row1.instanceManager.instances[k].TRC.value = "";
            Row1.instanceManager.instances[k].Date_1.value = "";
            Row1.instanceManager.instances[k].HRS.value = "";
            Row1.instanceManager.instances[k].HDTHS.value = "";
            Row1.instanceManager.instances[k].Payroll.value = "";
            Row1.instanceManager.instances[k].Dept.value = "";
            Row1.instanceManager.instances[k].Fund.value = "";
            Row1.instanceManager.instances[k].Program.value = "";
            Row1.instanceManager.instances[k].Class.value = "";
            Row1.instanceManager.instances[k].Account.value = "";
            Row1.instanceManager.instances[k].Comment.value = "";

            Row1.instanceManager.instances[k].Line.enabled = false;
            Row1.instanceManager.instances[k].TRC.enabled = false;
            Row1.instanceManager.instances[k].Date_1.enabled = false;
            Row1.instanceManager.instances[k].HRS.enabled = false;
            Row1.instanceManager.instances[k].HDTHS.enabled = false;
            Row1.instanceManager.instances[k].Payroll.enabled = false;
            Row1.instanceManager.instances[k].Dept.enabled = false;
            Row1.instanceManager.instances[k].Fund.enabled = false;
            Row1.instanceManager.instances[k].Program.enabled = false;
            Row1.instanceManager.instances[k].Class.enabled = false;
            Row1.instanceManager.instances[k].Account.enabled = false;
            Row1.instanceManager.instances[k].Comment.enabled = false;
        }
        /*if(rowcount>28){
          for(var j = 28; j < 31; j++){
                    Row1.instanceManager.removeInstance(Row1.instanceIndex);
                  }
        }*/


        var monthNumber = getMonthNumber(MonthPeriod.value);
        var numberOfDays = getDaysInMonth(MonthPeriod.value, YearPeriod.value);
        for (var i = 0; i < numberOfDays; i++) {
            var num = i + 1;
            //  Row1.instanceManager.instances[i].Line.value = num;
            Row1.instanceManager.instances[i].Date_1.value = YearPeriod.value + "-" + monthNumber + "-" + num;

            Row1.instanceManager.instances[i].Line.enabled = true;
            Row1.instanceManager.instances[i].TRC.enabled = true;
            Row1.instanceManager.instances[i].Date_1.enabled = true;
            Row1.instanceManager.instances[i].HRS.enabled = true;
            Row1.instanceManager.instances[i].HDTHS.enabled = true;
            Row1.instanceManager.instances[i].Payroll.enabled = true;
            Row1.instanceManager.instances[i].Dept.enabled = true;
            Row1.instanceManager.instances[i].Fund.enabled = true;
            Row1.instanceManager.instances[i].Program.enabled = true;
            Row1.instanceManager.instances[i].Class.enabled = true;
            Row1.instanceManager.instances[i].Account.enabled = true;
            Row1.instanceManager.instances[i].Comment.enabled = true;
        }

        //console.log(monthNumber+" "+numberOfDays);

        //alert("done");
        if (StageIndicator.value == "ToRequestor" || StageIndicator.value === null) {
            var rowcount = Row1.instanceManager.instanceCount;
            for (var k = 0; k < rowcount; k++) {
                Row1.instanceManager.instances[k].Payroll.enabled = false;
            }
        } else {
            for (var k = 0; k < rowcount; k++) {
                Row1.instanceManager.instances[k].Payroll.enabled = true;
            }
        }

    }
}

function getDaysInMonth(month, year) {
    var daysInMonth = {
        January: 31,
        February: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    };
    var titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    return daysInMonth[titleCaseMonth];
}

function getMonthNumber(monthName) {
    var lowerCaseMonth = monthName.toLowerCase();
    var months = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    };
    return months[lowerCaseMonth];
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Batch_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Batch_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  this.enabled = true;
  this.mandatory = "error";
}else{
  this.enabled = false;
}
this.visible = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TRC_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TRC_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
  var arr = JSON.parse(TRCDataArray.value);
  this.items = arr;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_HRS_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_HRS_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount = Row1.instanceManager.instanceCount; 
var count = 0;
for (var k = 0; k < rowcount; k++) {
  count = count + Row1.instanceManager.instances[k].HRS.value;
      }
TotalHours.value = count;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_HDTHS_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_HDTHS_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount = Row1.instanceManager.instanceCount; 
var count = 0;
for (var k = 0; k < rowcount; k++) {
  count = count + Row1.instanceManager.instances[k].HDTHS.value;
      }
TotalHDTHS.value = count;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Payroll_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Payroll_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowcount = Row1.instanceManager.instanceCount; 
var count = 0;
for (var k = 0; k < rowcount; k++) {
  count = count + Row1.instanceManager.instances[k].Payroll.value;
      }
TotalAmount.value = count;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Dept_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Dept_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
  var arr = JSON.parse(FundingDeptIDDataArray.value);
  this.items = arr;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Fund_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Fund_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
  var arr = JSON.parse(FundDataArray.value);
  this.items = arr;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Class_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Class_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
  var arr = JSON.parse(ClassCodeDataArray.value);
  this.items = arr;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Program_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Program_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
  var arr = JSON.parse(ProgramCodeDataArray.value);
  this.items = arr;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Account_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_Account_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToRequestor" || StageIndicator.value == "ToPayroll") {
  var arr = JSON.parse(AccountDataArray.value);
  this.items = arr;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        AuthDate.value = d;

        AuthDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    AuthSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        AuthDate.enabled = false;
        
    
} else {
    AuthSign.value = "";
    AuthDate.value = "";
   
}
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_AuthEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;


        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_ManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_ManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        ManagerDate.value = d;

        ManagerDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    ManagerSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        ManagerSign.enabled = false;
        
    
} else {
    ManagerSign.value = "";
    ManagerDate.value = "";
   
}
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_ManagerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_ManagerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_ManagerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_ManagerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToPayroll"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        PayRollDate.value = d;

        PayRollDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    PayRollSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        PayRollDate.enabled = false;
        
    
} else {
    PayRollSign.value = "";
    PayRollDate.value = "";
   
}
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollSign_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(PayRollDate.value === null) {
PayRollDate.value = (new Date().toISOString().slice(0,10));
PayRollExt.value="7777";
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_PayRollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_panel1610958881339_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_panel1610958881339_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
if(SSN1_1.value !== null){                    
var val1 = (SSN1_1.value).split(" : ");
SSN1.value = val1[0];
}
if(SSN2_2.value !== null){                    
var val2 = (SSN2_2.value).split(" : ");
SSN2.value = val2[0];
}
if(SSN3_3.value !== null){                    
var val3 = (SSN3_3.value).split(" : ");
SSN3.value = val3[0];
}
if(SSN4_4.value !== null){                    
var val4 = (SSN4_4.value).split(" : ");
SSN4.value = val4[0];
}
if(SSN5_5.value !== null){                    
var val5 = (SSN5_5.value).split(" : ");
SSN5.value = val5[0];
}
if(SSN6_6.value !== null){                    
var val6 = (SSN6_6.value).split(" : ");
SSN6.value = val6[0];
}
if(SSN7_7.value !== null){                    
var val7 = (SSN7_7.value).split(" : ");
SSN7.value = val7[0];
}
}
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;
var i=0;
alert(AbsentDetails.instanceIndex);
for (i=0; i<=AbsentDetails.instanceIndex; i++){
  alert("here");
  if(AbsentDetails.instanceManager.instances[i].DateAbsent.value !== null && AbsentDetails.instanceManager.instances[i].DateAbsent.value !== ""){
  if(AbsentDetails.instanceManager.instances[i].HourAbsent.value === null){
    	alert("Please enter hour absent");
       //alert(guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[i].HourAbsent[0]);
        guideBridge.setFocus(guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[i].HourAbsent[0]);
        submitFlag=1;
  }else{
     submitFlag=0;
  }
  
}
  
}



/*if(AbsentDetails.instanceManager.instances[1].DateAbsent.value !== null && AbsentDetails.instanceManager.instances[1].DateAbsent.value !== ""){
  if(AbsentDetails.instanceManager.instances[1].HourAbsent.value === null){
    	alert("Please enter hour absent");    
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[1].HourAbsent[0]");
        submitFlag=1;
  }else{
     submitFlag=0;
  }
  
}*/

if(submitFlag === 0){
  guideBridge.submit();
}


        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;
if (CHRSId.value !== null) {
  submitFlag  = 0;   
  }else{
showErrorModal("Alert!","Please enter Department ID");    
    submitFlag  = 1;
  }
if(submitFlag === 0){
  removeDropDownData();
  getPdf();
  setDropDownData();
}



function getPdf() {
  
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            console.log("result data="+result.data);
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('data', result.data.replaceAll(' xfa:dataNode="dataGroup"', ''));
            jsonData.append('formPath', '/content/forms/af/ot-sd-request-combo-new-distributed/ot-sd-request-combo-new-distributed');
            jsonData.append('fileName', CHRSId.value+" "+Initials.value+" "+Lname.value  + "_" + Date.now());          
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

function removeDropDownData(){
  var rowcount = Row1.instanceManager.instanceCount;
  for (var k = 0; k < rowcount; k++) {


                        Row1.instanceManager.instances[k].TRC.items = "";
                        Row1.instanceManager.instances[k].Dept.items = "";
                        Row1.instanceManager.instances[k].Fund.items = "";
                        Row1.instanceManager.instances[k].Program.items = "";
                        Row1.instanceManager.instances[k].Class.items = "";
                        Row1.instanceManager.instances[k].Account.items = "";
                    
            }
}
function setDropDownData() {
   var rowcount = Row1.instanceManager.instanceCount;
                if (rowcount !== null) {
                  var trcArray = JSON.parse(TRCDataArray.value);
                  var deptArray = JSON.parse(FundingDeptIDDataArray.value);
                  var fundArray = JSON.parse(FundDataArray.value);
                  var programCodeArray = JSON.parse(ProgramCodeDataArray.value); 
                  var classCodeArray = JSON.parse(ClassCodeDataArray.value); 
                  var accountArray = JSON.parse(AccountDataArray.value);


                    for (var k = 0; k < rowcount; k++) {
                        Row1.instanceManager.instances[k].TRC.items = trcArray;
                        Row1.instanceManager.instances[k].Dept.items = deptArray;
                        Row1.instanceManager.instances[k].Fund.items = fundArray;
                        Row1.instanceManager.instances[k].Program.items = programCodeArray;
                        Row1.instanceManager.instances[k].Class.items = classCodeArray;
                        Row1.instanceManager.instances[k].Account.items = accountArray;
                    }
                }
}
   
 

        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_saveguidedraft1610449069001_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_saveguidedraft1610449069001_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value === "1"){
  formSavedStatus.value = "";
}


        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_saveguidedraft1610449069001_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_saveguidedraft1610449069001_click0 = function (scope) {
    with(this) {
        with(scope) {
             if(DeptID.value !== null){
   
        aftiaDescCWID.value = (Initials.value + " " + Lname.value + " " + EmpID.value);
   formSavedStatus.value = "1";
  }
handleDraftSave(this);


        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_submit_13966870281576568571969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_submit_13966870281576568571969_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag =0;
 if(EmpID.value !== null){
    aftiaDescCWID.value = (Initials.value + " " + Lname.value + " " + EmpID.value);
  }
emailSubject.value = "Overtime and Shift Differential Request (OT&SD) - ("+CHRSId.value+", Unit: "+Unit.value+")";
EmailSubjectCompleted.value = "Overtime and Shift Differential Request (OT&SD) - Completed ("+CHRSId.value+", Unit: "+Unit.value+")";

RequestorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
ManagerEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

if(submitFlag === 0){
  guideBridge.submit();
}


        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated__click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated__click00 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;

alert("here");
if (DepartmentId.value !== null) {
  alert("here111");
  submitFlag  = 0;
  
  
  }else{
        
    alert("Else Block");

var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Department ID";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footerModal = document.getElementById("errorPopup-footer");
    var okButton = document.createElement("input");
    okButton.type = "button";
    okButton.setAttribute("class", "okBtn");
    //okButton.id = "okBtn";
    okButton.value = "Ok";
    okButton.onclick = function(event) {
        modal.style.display = "none";
    };
   
    footerModal.appendChild(okButton);
    
    modal.style.display = "block";
    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInfo[0].CSUFStatus[0]");
  
    submitFlag  = 1;
  }


if(submitFlag === 0){ 
  alert("submitFlag");
  getPdf();

}



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/ot-sd-request-combo-new-distributed/ot-sd-request-combo-new-distributed');
            jsonData.append('fileName', DepartmentId.value  + "_" + Date.now());          
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
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated__click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated__click01 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;

if (DepartmentId.value !== null) {
  alert("here");
  
  submitFlag  = 0;
  
  
  }else{
      alert("here");

var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Department ID";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footerModal = document.getElementById("errorPopup-footer");
    var okButton = document.createElement("input");
    okButton.type = "button";
    okButton.setAttribute("class", "okBtn");
    //okButton.id = "okBtn";
    okButton.value = "Ok";
    okButton.onclick = function(event) {
        modal.style.display = "none";
    };
   
    footerModal.appendChild(okButton);
    
    modal.style.display = "block";
    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInfo[0].CSUFStatus[0]");
  
    submitFlag  = 1;
  }


if(submitFlag === 0){ 
  getPdf();

}



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/ot-sd-request-combo-new-distributed/ot-sd-request-combo-new-distributed');
            jsonData.append('fileName', DepartmentId.value  + "_" + Date.now());          
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
