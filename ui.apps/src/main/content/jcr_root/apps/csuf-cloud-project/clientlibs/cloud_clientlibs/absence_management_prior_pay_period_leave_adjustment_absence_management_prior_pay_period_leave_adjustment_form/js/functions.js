/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            firstName.enabled = false;
lastName.enabled = false;
Rec.enabled = false;
JobCode.enabled = false;
FLSA.enabled = false;
Department.enabled = false;

if(StageIndicator.value === null){  
  InitiatorSignSection.visible = true;
  InitiatorSignSection.enabled = true;    
  EmpSignSection.visible = true;
  EmpSignSection.enabled = true;  
  ApproverSignSection.visible = false;
  PayrollSignSection.visible = false;  
}

if(StageIndicator.value == "ToEmployee"){    
  EmployeeInformationTab.enabled = false;
  LeaveUsageInformationTab.enabled = false;  
  if (InitiatorCB.value!==null){
    InitiatorSignSection.visible = true;
    InitiatorSignSection.enabled = false;
  } else {
    InitiatorSignSection.visible = false;
  }  
  EmpSignSection.visible = true;
  EmpSignSection.enabled = true;  
  ApproverSignSection.visible = false; 
  PayrollSignSection.visible = false;
}

if(StageIndicator.value == "ToAuthApprover"){      
  EmployeeInformationTab.enabled = false;
  LeaveUsageInformationTab.enabled = false;  
  if (InitiatorCB.value!==null){
    InitiatorSignSection.visible = true;
    InitiatorSignSection.enabled = false;
  } else {
    InitiatorSignSection.visible = false;
  }  
  EmpSignSection.visible = true;
  EmpSignSection.enabled = false;  
  ApproverSignSection.visible = true;
  ApproverSignSection.enabled = true; 
  PayrollSignSection.visible = false;
}

if(StageIndicator.value == "ToPayroll"){     
  EmployeeInformationTab.enabled = false;
  LeaveUsageInformationTab.enabled = false;  
  if (InitiatorCB.value!==null){
    InitiatorSignSection.visible = true;
    InitiatorSignSection.enabled = false;
  } else {
    InitiatorSignSection.visible = false;
  }  
  EmpSignSection.visible = true;
  EmpSignSection.enabled = false;  
  ApproverSignSection.visible = true;
  ApproverSignSection.enabled = false;
  PayrollSignSection.visible = true;
  PayrollSignSection.enabled = true;
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
  
    InitiatorFlag.value="True";
  
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',
        success: function(myresopnse) {
          
            gifModal.style.display = "block";
          
            var userValue = myresopnse.userId;
            var userID = userValue;
            workflow_initiator.value = userValue;
            //userID = "jluzzi";
            
            $.ajax({
                type: 'GET',
                url: "/bin/getSplConsultantUserDetails",
                data: {
                    userId: userID
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                  
                    if (myresopnse.length === 1) {

                        CWID.value = myresopnse[0].EMPLID;
                        firstName.value = myresopnse[0].FIRST_NAME;
                        lastName.value = myresopnse[0].LAST_NAME;
                        Rec.value = myresopnse[0].EMPL_RCD;
                        JobCode.value = myresopnse[0].Jobcode;
                        Department.value = myresopnse[0].DEPTNAME;
                     
                        EmployeeInitiatorUserID.value = userValue; 
                        
                        EmployeeInitiatorCWID.value = myresopnse[0].EMPLID; 
                        EmployeeInitiatorName.value = myresopnse[0].FIRST_NAME + " " + myresopnse[0].LAST_NAME;
                       // EmployeeInitiatorEmail.value = myresopnse[0].EMP_EMAIL_ID;
                        EmployeeInitiatorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

                        EmployeeUserID.value = userValue; 
                      
                        EmployeeName.value = myresopnse[0].FIRST_NAME + " " + myresopnse[0].LAST_NAME;
                        //EmployeeEmail.value = myresopnse[0].EMP_EMAIL_ID;
                        EmployeeEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

                        agencyUnit.value = myresopnse[0].CSU_UNIT;
                        deptId.value = myresopnse[0].DEPTID;
                        agencyUnit.value = myresopnse[0].CSU_SCO_AGENCY;
                        division.value = myresopnse[0].FUL_DIVISION;

                        getAuthApproverData(deptId.value, division.value, agencyUnit.value, Field_Value_1.value);

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
                        var headings = ["", "First Name", "Last Name", "Department Name", "Emp Rec#"];
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

                                    CWID.value = myresopnse[0].EMPLID;
                                    firstName.value = myresopnse[n].FIRST_NAME;
                                    lastName.value = myresopnse[n].LAST_NAME;
                                    Rec.value = myresopnse[n].EMPL_RCD;
                                    JobCode.value = myresopnse[n].Jobcode;
                                    Department.value = myresopnse[n].DEPTNAME;
                                  
                                    EmployeeInitiatorUserID.value = userValue;
                                  
                                    EmployeeInitiatorCWID.value = myresopnse[n].EMPLID;
                                    EmployeeInitiatorName.value = myresopnse[n].FIRST_NAME + " " + myresopnse[n].LAST_NAME;
                                   // EmployeeInitiatorEmail.value = myresopnse[0].EMP_EMAIL_ID;
                                    EmployeeInitiatorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

                                    EmployeeUserID.value = userValue; 
                                  
                                    EmployeeName.value = myresopnse[n].FIRST_NAME + " " + myresopnse[n].LAST_NAME;
                                   // EmployeeEmail.value = myresopnse[n].EMP_EMAIL_ID;
                                    EmployeeEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

                                    agencyUnit.value = myresopnse[n].CSU_UNIT;
                                    deptId.value = myresopnse[n].DEPTID;
                                    agencyUnit.value = myresopnse[n].CSU_SCO_AGENCY;
                                    division.value = myresopnse[n].FUL_DIVISION;

                                    getAuthApproverData(deptId.value, division.value, agencyUnit.value, Field_Value_1.value);

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
                        showErrorModal("Alert!", "No matching records found");
                        gifModal.style.display = "none";

                    }
                    ////////////////////////////////////////////
                    span.onclick = function() {
                        gifModal.style.display = "none";
                        modal.style.display = "none";
                    };

                }
            });
        }

    });
}

function getAuthApproverData(deptId, division, agencyUnit, fieldVal) {

    AuthApproverUserID.value = "";
    AuthApproverEmail.value = "";
    ApproverName.value = "";

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
        success: function(myresponse) {

            if (myresponse.length === 1) {

                ApproverName.value = myresponse[0].NAME;
              //  AuthApproverEmail.value = myresponse[0].EMAILID;
                AuthApproverEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                AuthApproverUserID.value = myresponse[0].USERID;

            }

        }
    });
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
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
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (this.value !== null && (EmployeeInitiatorCWID.value !== this.value) && StageIndicator.value === null) {
  
    InitiatorFlag.value="False";
  
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
          
          debugger;
          
            gifModal.style.display = "block";
          
            var userValue = myresopnse.userId;
            var userID = userValue;
            workflow_initiator.value = userID;
            //userID = "jluzzi";

            var empId = CWID.value;
            //EmployeeInitiatorCWID.value = empId;
            var pattern = /^8\d{8}$/;
            var result = pattern.test(empId);
          
            if (result !== true) {

                this.value = "";
                firstName.value = "";
                lastName.value = "";
                Rec.value = "";
                JobCode.value = "";
                FLSA.value = "";
                Department.value = "";

                gifModal.style.display = "none";
                showErrorModal("Alert!", "Please enter a valid Employee ID");

            } else {
                $.ajax({
                    type: 'GET',
                    url: "/bin/getSplConsultantEmp",
                    data: {
                        empId: empId,
                        userId: userID
                    },
                    dataType: 'json',

                    success: function(myresopnse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];
                        var gifModal = document.getElementById('gifModal');
debugger;
                        if (myresopnse.length === 1) {

                            CWID.value = myresopnse[0].EMPLID;
                            firstName.value = myresopnse[0].FIRST_NAME;
                            lastName.value = myresopnse[0].LAST_NAME;
                            Rec.value = myresopnse[0].EMPL_RCD;
                            JobCode.value = myresopnse[0].Jobcode;
                            Department.value = myresopnse[0].DEPTNAME;

                            EmployeeUserID.value = myresopnse[0].EMP_USERID;
                            EmployeeName.value = myresopnse[0].FIRST_NAME + " " + myresopnse[0].LAST_NAME;
                          //  EmployeeEmail.value = myresopnse[0].EMP_EMAIL_ID;
                            EmployeeEmail.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";

                            agencyUnit.value = myresopnse[0].CSU_UNIT;
                            deptId.value = myresopnse[0].DEPTID;
                            agencyUnit.value = myresopnse[0].CSU_SCO_AGENCY;
                            division.value = myresopnse[0].FUL_DIVISION;

                            getAuthApproverData(deptId.value, division.value, agencyUnit.value, Field_Value_1.value);


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
                            var headings = ["", "First Name", "Last Name", "Department Name", "Emp Rec"];
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

                                        CWID.value = myresopnse[0].EMPLID;
                                        firstName.value = myresopnse[n].FIRST_NAME;
                                        lastName.value = myresopnse[n].LAST_NAME;
                                        Rec.value = myresopnse[n].EMPL_RCD;
                                        JobCode.value = myresopnse[n].Jobcode;
                                        Department.value = myresopnse[n].DEPTNAME;

                                        EmployeeUserID.value = myresopnse[n].EMP_USERID;
                                        EmployeeName.value = myresopnse[n].FIRST_NAME + " " + myresopnse[n].LAST_NAME;
                                      //  EmployeeEmail.value = myresopnse[n].EMP_EMAIL_ID;
                                        EmployeeEmail.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";

                                        agencyUnit.value = myresopnse[n].CSU_UNIT;
                                        deptId.value = myresopnse[n].DEPTID;
                                        agencyUnit.value = myresopnse[n].CSU_SCO_AGENCY;
                                        division.value = myresopnse[n].FUL_DIVISION;

                                        getAuthApproverData(deptId.value, division.value, agencyUnit.value, Field_Value_1.value);
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
                            this.value = "";
                            firstName.value = "";
                            lastName.value = "";
                            Rec.value = "";
                            JobCode.value = "";
                            FLSA.value = "";
                            Department.value = "";

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
       }
    });

}

function getAuthApproverData(deptId, division, agencyUnit, fieldVal) {
    if (this.value !== null) {
        AuthApproverUserID.value = "";
        AuthApproverEmail.value = "";
        ApproverName.value = "";
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
            success: function(myresponse) {


                if (myresponse.length === 1) {

                    ApproverName.value = myresponse[0].NAME;
                  //  AuthApproverEmail.value = myresponse[0].EMAILID;
                    AuthApproverEmail.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                    AuthApproverUserID.value = myresponse[0].USERID;

                }

            }
        });
    }
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Month_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Month_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
  monthSelected = MonthSelected.value;
  var resultArray = [];
  if(YearSelected.value == "2022"){
  resultArray = getSelectedMonthDates(monthSelected,YearSelected.value);  
  }
  if(YearSelected.value == "2021"){
  resultArray = getSelectedMonthDatesForLastYear(monthSelected,YearSelected.value);  
  }
  debugger;
  Day1.value = (resultArray[0][0]).trim();  
  Date1.value = (resultArray[0][1]).trim();
  Day2.value = (resultArray[1][0]).trim();
  Date2.value = (resultArray[1][1]).trim();
  Day3.value = (resultArray[2][0]).trim();
  Date3.value = (resultArray[2][1]).trim();
  Day4.value = (resultArray[3][0]).trim();
  Date4.value = (resultArray[3][1]).trim();
  Day5.value = (resultArray[4][0]).trim();
  Date5.value = (resultArray[4][1]).trim();
  Day6.value = (resultArray[5][0]).trim();
  Date6.value = (resultArray[5][1]).trim();
  Day7.value = (resultArray[6][0]).trim();
  Date7.value = (resultArray[6][1]).trim();
  Day8.value = (resultArray[7][0]).trim();
  Date8.value = (resultArray[7][1]).trim();
  Day9.value = (resultArray[8][0]).trim();
  Date9.value = (resultArray[8][1]).trim();
  Day10.value = (resultArray[9][0]).trim();
  Date10.value = (resultArray[9][1]).trim();
  Day11.value = (resultArray[10][0]).trim();
  Date11.value = (resultArray[10][1]).trim();
  Day12.value = (resultArray[11][0]).trim();
  Date12.value = (resultArray[11][1]).trim();
  Day13.value = (resultArray[12][0]).trim();
  Date13.value = (resultArray[12][1]).trim();
  Day14.value = (resultArray[13][0]).trim();
  Date14.value = (resultArray[13][1]).trim();
  Day15.value = (resultArray[14][0]).trim();
  Date15.value = (resultArray[14][1]).trim();
  Day16.value = (resultArray[15][0]).trim();
  Date16.value = (resultArray[15][1]).trim();
  Day17.value = (resultArray[16][0]).trim();
  Date17.value = (resultArray[16][1]).trim();
  Day18.value = (resultArray[17][0]).trim();
  Date18.value = (resultArray[17][1]).trim();
  Day19.value = (resultArray[18][0]).trim();
  Date19.value = (resultArray[18][1]).trim();
  Day20.value = (resultArray[19][0]).trim();
  Date20.value = (resultArray[19][1]).trim();
  Day21.value = (resultArray[20][0]).trim();
  Date21.value = (resultArray[20][1]).trim();
  Day22.value = (resultArray[21][0]).trim();
  Date22.value = (resultArray[21][1]).trim();
  Day23.value = (resultArray[22][0]).trim();
  Date23.value = (resultArray[22][1]).trim();
  Day24.value = (resultArray[23][0]).trim();
  Date24.value = (resultArray[23][1]).trim();
  Day25.value = (resultArray[24][0]).trim();
  Date25.value = (resultArray[24][1]).trim();
  Day26.value = (resultArray[25][0]).trim();
  Date26.value = (resultArray[25][1]).trim();
  Day27.value = (resultArray[26][0]).trim();
  Date27.value = (resultArray[26][1]).trim();
  Day28.value = (resultArray[27][0]).trim();
  Date28.value = (resultArray[27][1]).trim();
  Day29.value = (resultArray[28][0]).trim();
  Date29.value = (resultArray[28][1]).trim();
 // Day30.value = (resultArray[29][0]).trim();
  //Date30.value = (resultArray[29][1]).trim();
   if((resultArray[29][0] !== "" && resultArray[29][0] !== undefined)&&(resultArray[29][1] !== "" && resultArray[29][1] !== undefined)){
    Day30.value = (resultArray[29][0]).trim();
    Date30.value = (resultArray[29][1]).trim();
    Row30.enabled = true;
  }else{
    Row30.enabled = false; 
    Date30.value = "";
    Day30.value ="";
  }
  if((resultArray[30][0] !== "" && resultArray[30][0] !== undefined)&&(resultArray[30][1] !== "" && resultArray[30][1] !== undefined)){
    Day31.value = (resultArray[30][0]).trim();
    Date31.value = (resultArray[30][1]).trim();
    Row31.enabled = true;
  }else{
    Row31.enabled = false; 
    Date31.value = "";
    Day31.value ="";
  }
  
  if((resultArray[31][0] !== "" && resultArray[31][0] !== undefined) && (resultArray[31][1] !== "" && resultArray[31][1] !== undefined)){
  Day32.value = (resultArray[31][0]).trim();
    Date32.value = (resultArray[31][1]).trim();
     Row32.enabled = true;
  }else{
    Row32.enabled = false;
    Day32.value = "";
    Date32.value = "";
  }
  
  if((resultArray[32][0] !== "" && resultArray[32][0] !== undefined) && (resultArray[32][1] !== "" && resultArray[32][1] !== undefined)){
     Row33.enabled = true;
  Day33.value = (resultArray[32][0]).trim();
     Date33.value = (resultArray[32][1]).trim();
  }else{
    Row33.enabled = false;
    Day33.value = "";
    Date33.value = "";
  }
  
}

        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Year_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Year_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
var dateObject = new Date(dateString);
var curyear = dateObject.getFullYear();
//this.value = "2021";
this.value = curyear;
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Year_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Year_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null && MonthSelected.value !== null) {
  monthSelected = MonthSelected.value;
  var resultArray = [];
  if(YearSelected.value == "2022"){
  resultArray = getSelectedMonthDates(monthSelected,YearSelected.value);  
  }
  if(YearSelected.value == "2021"){
  resultArray = getSelectedMonthDatesForLastYear(monthSelected,YearSelected.value);  
  }
  debugger;
  Day1.value = (resultArray[0][0]).trim();  
  Date1.value = (resultArray[0][1]).trim();
  Day2.value = (resultArray[1][0]).trim();
  Date2.value = (resultArray[1][1]).trim();
  Day3.value = (resultArray[2][0]).trim();
  Date3.value = (resultArray[2][1]).trim();
  Day4.value = (resultArray[3][0]).trim();
  Date4.value = (resultArray[3][1]).trim();
  Day5.value = (resultArray[4][0]).trim();
  Date5.value = (resultArray[4][1]).trim();
  Day6.value = (resultArray[5][0]).trim();
  Date6.value = (resultArray[5][1]).trim();
  Day7.value = (resultArray[6][0]).trim();
  Date7.value = (resultArray[6][1]).trim();
  Day8.value = (resultArray[7][0]).trim();
  Date8.value = (resultArray[7][1]).trim();
  Day9.value = (resultArray[8][0]).trim();
  Date9.value = (resultArray[8][1]).trim();
  Day10.value = (resultArray[9][0]).trim();
  Date10.value = (resultArray[9][1]).trim();
  Day11.value = (resultArray[10][0]).trim();
  Date11.value = (resultArray[10][1]).trim();
  Day12.value = (resultArray[11][0]).trim();
  Date12.value = (resultArray[11][1]).trim();
  Day13.value = (resultArray[12][0]).trim();
  Date13.value = (resultArray[12][1]).trim();
  Day14.value = (resultArray[13][0]).trim();
  Date14.value = (resultArray[13][1]).trim();
  Day15.value = (resultArray[14][0]).trim();
  Date15.value = (resultArray[14][1]).trim();
  Day16.value = (resultArray[15][0]).trim();
  Date16.value = (resultArray[15][1]).trim();
  Day17.value = (resultArray[16][0]).trim();
  Date17.value = (resultArray[16][1]).trim();
  Day18.value = (resultArray[17][0]).trim();
  Date18.value = (resultArray[17][1]).trim();
  Day19.value = (resultArray[18][0]).trim();
  Date19.value = (resultArray[18][1]).trim();
  Day20.value = (resultArray[19][0]).trim();
  Date20.value = (resultArray[19][1]).trim();
  Day21.value = (resultArray[20][0]).trim();
  Date21.value = (resultArray[20][1]).trim();
  Day22.value = (resultArray[21][0]).trim();
  Date22.value = (resultArray[21][1]).trim();
  Day23.value = (resultArray[22][0]).trim();
  Date23.value = (resultArray[22][1]).trim();
  Day24.value = (resultArray[23][0]).trim();
  Date24.value = (resultArray[23][1]).trim();
  Day25.value = (resultArray[24][0]).trim();
  Date25.value = (resultArray[24][1]).trim();
  Day26.value = (resultArray[25][0]).trim();
  Date26.value = (resultArray[25][1]).trim();
  Day27.value = (resultArray[26][0]).trim();
  Date27.value = (resultArray[26][1]).trim();
  Day28.value = (resultArray[27][0]).trim();
  Date28.value = (resultArray[27][1]).trim();
  Day29.value = (resultArray[28][0]).trim();
  Date29.value = (resultArray[28][1]).trim();
 // Day30.value = (resultArray[29][0]).trim();
  //Date30.value = (resultArray[29][1]).trim();
   if((resultArray[29][0] !== "" && resultArray[29][0] !== undefined)&&(resultArray[29][1] !== "" && resultArray[29][1] !== undefined)){
    Day30.value = (resultArray[29][0]).trim();
    Date30.value = (resultArray[29][1]).trim();
    Row30.enabled = true;
  }else{
    Row30.enabled = false; 
    Date30.value = "";
    Day30.value ="";
  }
  if((resultArray[30][0] !== "" && resultArray[30][0] !== undefined)&&(resultArray[30][1] !== "" && resultArray[30][1] !== undefined)){
    Day31.value = (resultArray[30][0]).trim();
    Date31.value = (resultArray[30][1]).trim();
    Row31.enabled = true;
  }else{
    Row31.enabled = false; 
    Date31.value = "";
    Day31.value ="";
  }
  
  if((resultArray[31][0] !== "" && resultArray[31][0] !== undefined) && (resultArray[31][1] !== "" && resultArray[31][1] !== undefined)){
  Day32.value = (resultArray[31][0]).trim();
    Date32.value = (resultArray[31][1]).trim();
     Row32.enabled = true;
  }else{
    Row32.enabled = false;
    Day32.value = "";
    Date32.value = "";
  }
  
  if((resultArray[32][0] !== "" && resultArray[32][0] !== undefined) && (resultArray[32][1] !== "" && resultArray[32][1] !== undefined)){
     Row33.enabled = true;
  Day33.value = (resultArray[32][0]).trim();
     Date33.value = (resultArray[32][1]).trim();
  }else{
    Row33.enabled = false;
    Day33.value = "";
    Date33.value = "";
  }
  
}

        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_headerItem16752438346681675243835022_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_headerItem16752438346681675243835022_click0 = function (scope) {
    with(this) {
        with(scope) {
            	var rowCount = Row1.instanceManager.instanceCount;

	if(rowCount == 1){		
		Row1.instanceManager.instances[0]._children[0].value = null;
        Row1.instanceManager.instances[0]._children[1].value = null;
		Row1.instanceManager.instances[0]._children[2].value = null;
        Row1.instanceManager.instances[0]._children[3].value = null;
        Row1.instanceManager.instances[0]._children[4].value = null;
	}

Row1.instanceManager.removeInstance(Row1.instanceIndex);

        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_button1675243853538_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_button1675243853538_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (Row1.instanceManager.instanceCount >= 1) {
    for (var count = 0; count < Row1.instanceManager.instanceCount; count++) {
        if ((Row1.instanceManager.instances[count]._children[0].value === null) || (Row1.instanceManager.instances[count]._children[1].value === null) || (Row1.instanceManager.instances[count]._children[2].value === null) || (Row1.instanceManager.instances[count]._children[3].value === null) || (Row1.instanceManager.instances[count]._children[4].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        Row1.instanceManager.addInstance();
    }
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);      
        InitiatorSignDate.value = d;

        InitiatorSignDate.enabled = false;
      
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                InitiatorSign.value = userValue;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        InitiatorSign.enabled = false;


    } else {
        InitiatorSign.value = "";
        InitiatorSignDate.value = "";

    }
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);      
        EmployeeSignDate.value = d;

        EmployeeSignDate.enabled = false;
      
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                EmployeeSign.value = userValue;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        EmployeeSign.enabled = false;


    } else {
        EmployeeSign.value = "";
        EmployeeSignDate.value = "";

    }
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_EmployeeSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_EmployeeSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_EmployeeSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_EmployeeSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_ApproverCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_ApproverCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);      
        ApproverSignDate.value = d;

        ApproverSignDate.enabled = false;
      
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                ApproverSign.value = userValue;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ApproverSign.enabled = false;


    } else {
        ApproverSign.value = "";
        ApproverSignDate.value = "";

    }
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_ApproverSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_ApproverSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_ApproverSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_ApproverSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_PayrollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);      
        ProcessedOn.value = d;

        ProcessedOn.enabled = false;
      
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                ProcessedBy.value = userValue;
                Initials.value = userValue;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ProcessedBy.enabled = false;
        Initials.enabled = false;


    } else {
        ProcessedBy.value = "";
        Initials.value = "";
        ProcessedOn.value = "";

    }
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_InitiatorFlag_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_InitiatorFlag_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value=="True") { 
  InitiatorSignSection.visible=false;
} else if (this.value=="False") {  
  InitiatorSignSection.visible=true;
  EmpSignSection.visble=false;  
}
        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_generatePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_generatePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(CWID.value !== null){
 getPdf();
}else{
  showErrorModal("Alert!","Please fill all the required fields to generate PDF");
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/absence-management-prior-pay-period-leave-adjustment/absence-management-prior-pay-period-leave-adjustment-form');
            jsonData.append('fileName', firstName.value + "_" + lastName.value + "_" + Date_1.now());          
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
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_saveguidedraft1594880823890_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_saveguidedraft1594880823890_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
aftiaDescCWID.value = Empl_ID.value +" " + First_Name.value +" "+Last_Name.value;
handleDraftSave(this);


        }
	}
}
/**
 * @function absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_submit1594880817645_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
absence_management_prior_pay_period_leave_adjustment_absence_management_prior_pay_period_leave_adjustment_form.generated_submit1594880817645_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (InitiatorCB.value === null && EmployeeCB.value !== null) {
    InitiatorSign.value = EmployeeSign.value;
    InitiatorSignDate.value = EmployeeSignDate.value;
} else {
    submitAction();
}

function submitAction() {
    EmailSubject.value = "Test - Absence Management Prior Pay Period Leave Adjustment - " + lastName.value + ", " + firstName.value + " (" + CWID.value + ")";
    aftiaDescCWID.value = CWID.value + " " + firstName.value + " " + lastName.value;

    //var testEmail = "yjayaram@fullerton.edu";
    var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

    EmployeeInitiatorEmail.value = testEmail;
    EmployeeEmail.value = testEmail;
    AuthApproverEmail.value = testEmail;

    guideBridge.submit();
}
        }
	}
}
