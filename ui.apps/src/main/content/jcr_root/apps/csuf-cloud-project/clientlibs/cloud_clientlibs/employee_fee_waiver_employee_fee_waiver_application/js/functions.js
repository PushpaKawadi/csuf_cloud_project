/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 

if(StageIndicator.value === null){ 
  
  
   
  HRUseOnlyPanel.visible = false;
  DepartmentReviewAuthorizationPanel.visible = false;
  empInformation.enabled = true;
  schoolRelatedInformation.enabled = true;
  courseInformation.enabled = true;
  AuthorizationPanel.enabled = true;
  
}else{
  empInformation.enabled = false;
  schoolRelatedInformation.enabled = false;
  courseInformation.enabled = false;
  AuthorizationPanel.enabled = false;
}
if(StageIndicator.value == "ToChair"){
  AuthorizationPanel.enabled = false;
  if(hrCB.value !== "1"){
  HRUseOnlyPanel.visible = false;
  }else{
    HRUseOnlyPanel.visible = false;
    HRUseOnlyPanel.enabled = false;
  }
  DepartmentReviewAuthorizationPanel.visible = true;
   FacultyPanel.visible = true;
  StaffPanel.visible = false;
  DeptSignatureSection.visible = true;
  CollegeDeanPanel.visible = false;
}
if(StageIndicator.value == "ToDean"){
 AuthorizationPanel.enabled = false;
  HRUseOnlyPanel.visible = false;
  DepartmentReviewAuthorizationPanel.visible = true;
  DepartmentReviewAuthorizationPanel.enabled = true;
  FacultyPanel.visible = true;
  FacultyPanel.enabled = true;
  StaffPanel.visible = false;
  DepartmentChairPanel.visible = true;
  DepartmentChairPanel.enabled = false;
  CollegeDeanPanel.visible = true;
    CollegeDeanPanel.enabled = true;
}
if(StageIndicator.value == "ToSupervisor"){
   AuthorizationPanel.enabled = false;
  
  FacultyPanel.visible = false;
  DepartmentReviewAuthorizationPanel.visible = true;
  StaffPanel.visible = true;
  SupervisorPanel.visible = true;
  SupervisorPanel.enabled = true;
  AdministratorPanel.visible = false;
  if(hrCB.value !== "1"){
  HRUseOnlyPanel.visible = false;
  }else{
    HRUseOnlyPanel.visible = false;
    HRUseOnlyPanel.enabled = false;
  }
}
if(StageIndicator.value == "ToAdmin"){
   AuthorizationPanel.enabled = false;
    HRUseOnlyPanel.visible = false;
   FacultyPanel.visible = false;
  DepartmentReviewAuthorizationPanel.visible = true;
  StaffPanel.visible = true;
  SupervisorPanel.visible = true;
   SupervisorPanel.enabled = false;
  AdministratorPanel.visible = true;
  AdministratorPanel.enabled = true;
}
if(StageIndicator.value == "ToHR"){
   AuthorizationPanel.enabled = false;
  //Added to fix  - Allow HR to edit fields
  empInformation.enabled = true;
  schoolRelatedInformation.enabled = true;
  courseInformation.enabled = true;
  reimbursementApplicationSection.enabled = true;
  instructions.enabled = true;
  //End of fix  - Allow HR to edit fields
  
  if(chairCB.value == "1"){
    StaffPanel.visible = false;
    FacultyPanel.visible = true;
    DepartmentReviewAuthorizationPanel.enabled = false;
      CollegeDeanPanel.visible = false;
  }
  if(supCB.value == "1"){
    FacultyPanel.visible = false;
    StaffPanel.visible = true;
    DepartmentReviewAuthorizationPanel.enabled = false;
     AdministratorPanel.visible = false; 
  }
}
if(StageIndicator.value === "ToEmployee"){
  HRUseOnlyPanel.visible = false;
   HRUseOnlyPanel.enabled = false;
  DepartmentReviewAuthorizationPanel.visible = false;
  empInformation.enabled = true;
  schoolRelatedInformation.enabled = true;
  courseInformation.enabled = true;
  AuthorizationPanel.visible  = true;
  AuthorizationPanel.enabled  = true;
}


        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  var status;

    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {

            var userValue = myresopnse.userId;
            LogUser.value = userValue;
            workflow_initiator.value = userValue;
            $.ajax({
                type: 'GET',
                url: "/bin/checkTheUserIsAnAuthorizableMember",
                data: {
                    userId: userValue,
                    groupId: "Fee-Waiver-Reviewers"
                },
                dataType: 'json',
                success: function(userDetails) {
                    status = userDetails.Result;
                  AuthUserStatus.value = status;
                    if (status === true) {
                        empId.enabled = true;
                    } else {
                        empId.enabled = false;
                    }
                    if (formSavedStatus.value === null) {
                        $.ajax({
                            type: 'GET',
                            url: "/bin/getEmployeeFeeWaiverUserLookUp",

                            data: {
                                userID: userValue
                            },
                            dataType: 'json',

                            success: function(myresponse) {
                                gifModal.style.display = "none";
                                
                                var modal = document.getElementById('myModal');
                                var span = document.getElementsByClassName("close")[0];
                                if (myresponse.length == 1) {

                                    UserLookupFlag.value = myresponse[0].EMPLID;

                                    temporary.value = myresponse[0].Temp;
                                    empId.value = myresponse[0].EMPLID;
                                    cwidFromLookup.value = myresponse[0].EMPLID;
                                    FeeWaiverRequestedBy.value = myresponse[0].EMPLID;
                                    firstName.value = myresponse[0].FIRST_NAME;
                                    lastName.value = myresponse[0].LAST_NAME;
                                    departmentName.value = myresponse[0].DEPTNAME;
                                    deptId.value = myresponse[0].DEPTID;
                                    //extension.value = myresponse[0].Extension;
                                    bargainingUnit.value = myresponse[0].UNION_CD;
                                    jobCode.value = myresponse[0].JOBCODE;
                                    EmpEmailID.value = myresponse[0].EMP_EMAIL_ID;
                                    // EmpEmailID.value = "swathi.kumari@thoughtfocus.com";
                                    if (myresponse[0].EndDate !== undefined) {
                                        enddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                    }
                                    hiddentFullTime.value = myresponse[0].FullTime;
                                    hiddenPartTime.value = myresponse[0].PartTime;
                                    if (hiddentFullTime.value == 1) {
                                        FullTimePartTime.value = 1;
                                    } else if (hiddenPartTime.value == 1) {
                                        FullTimePartTime.value = 0;
                                    }
                                    hiddenTenure.value = myresponse[0].Tenure;
                                    hiddenPerm.value = myresponse[0].Perm;
                                    hiddenProb.value = myresponse[0].Prob;
                                    hiddenOthers.value = myresponse[0].Other;
                                    if (hiddenTenure.value == 1) {
                                        ProbationStatus.value = 1;
                                    } else if (hiddenPerm.value == 1) {
                                        ProbationStatus.value = 2;
                                    } else if (hiddenProb.value == 1) {
                                        ProbationStatus.value = 3;
                                    } else if (hiddenOthers.value == 1) {
                                        ProbationStatus.value = 4;
                                    }
                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                    if (hiddenLeavesYes.value == 1) {
                                        AreYouOnLeave.value = 1;
                                    } else if (hiddenLeavesNo.value == 1) {
                                        AreYouOnLeave.value = 0;
                                    }
                                    DeptID.value = myresponse[0].DEPTID;
                                    var employeeId = empId.value;
                                    var deptid = deptId.value;
                                    var union_cd = bargainingUnit.value;
                                    
                                    $.ajax({
                                        type: 'GET',
                                        url: "/bin/getStaffManagerAdminDetailsLookup",
                                        data: {
                                            deptid: deptid,
                                            cwid: employeeId,
                                            union_cd: union_cd
                                        },
                                        dataType: 'json',
                                        success: function(myresponse) {

                                            var modal = document.getElementById('myModal');
                                            var span = document.getElementsByClassName("close")[0];

                                            if (myresponse.length === 1) {
                                                ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                // managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                // ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                // AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                            }

                                        }
                                    });
                                    gifModal.style.display = "none";
                                    modal.style.display = "none";

                                } else if (myresponse.length > 1) {
                                    gifModal.style.display = "none";
                                    modal.style.display = "block";

                                    UserLookupFlag.value = myresponse[0].EMPLID;

                                    var col = [];
                                    col.push("FIRST_NAME");
                                    col.push("LAST_NAME");
                                    col.push("DEPTNAME");
                                    col.push("DEPTID");
                                    col.push("UNION_CD");

                                    var table = document.createElement("table");
                                    table.id = "tb";
                                    var tr = table.insertRow(-1);
                                    var headings = ["", "First_Name", "Last_Name", "Department_Name", "Department_ID", "CBID"];
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
                                               

                                                empId.value = myresponse[n].EMPLID;
                                                cwidFromLookup.value = myresponse[n].EMPLID;
                                                FeeWaiverRequestedBy.value = myresponse[n].EMPLID;
                                                deptId.value = myresponse[n].DEPTID;
                                                firstName.value = myresponse[n].FIRST_NAME;
                                                lastName.value = myresponse[n].LAST_NAME;
                                                departmentName.value = myresponse[n].DEPTNAME;
                                                bargainingUnit.value = myresponse[n].UNION_CD;
                                                jobCode.value = myresponse[n].JOBCODE;
                                                EmpEmailID.value = myresponse[n].EMP_EMAIL_ID;
                                                //EmpEmailID.value = "swathi.kumari@thoughtfocus.com";
                                                if (myresponse[n].EndDate !== undefined) {
                                                    enddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                    tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                }
                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;




                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                if (hiddentFullTime.value == 1) {
                                                    FullTimePartTime.value = 1;
                                                } else if (hiddenPartTime.value == 1) {
                                                    FullTimePartTime.value = 0;
                                                }
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                if (hiddenTenure.value == 1) {
                                                    ProbationStatus.value = 1;
                                                } else if (hiddenPerm.value == 1) {
                                                    ProbationStatus.value = 2;
                                                } else if (hiddenProb.value == 1) {
                                                    ProbationStatus.value = 3;
                                                } else if (hiddenOthers.value == 1) {
                                                    ProbationStatus.value = 4;
                                                }
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                if (hiddenLeavesYes.value == 1) {
                                                    AreYouOnLeave.value = 1;
                                                } else if (hiddenLeavesNo.value == 1) {
                                                    AreYouOnLeave.value = 0;
                                                }
                                                deptId.value = myresponse[n].DEPTID;
                                                temporary.value = myresponse[n].Temp;


                                                rButtonStatus = true;
                                                break;
                                            }
                                        }
                                        if (rButtonStatus === false) {
                                            alert("Please select the department");
                                            modal.style.display = "block";
                                        } else {
                                            //populate Hidden Fields
                                            var employeeId = empId.value;
                                            var deptid = deptId.value;
                                            var union_cd = bargainingUnit.value;
                                            
                                            $.ajax({
                                                type: 'GET',
                                                url: "/bin/getStaffManagerAdminDetailsLookup",
                                                data: {
                                                    deptid: deptid,
                                                    cwid: employeeId,
                                                    union_cd: union_cd
                                                },
                                                dataType: 'json',
                                                success: function(myresponse) {

                                                    var modal = document.getElementById('myModal');
                                                    var span = document.getElementsByClassName("close")[0];

                                                    if (myresponse.length === 1) {
                                                        ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                        // managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                        ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                        //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                        AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                        AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                        //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                        //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                    }

                                                }
                                            });

                                            modal.style.display = "none";

                                        }
                                    };
                                    // footerModal = document.getElementById("modal_footer");
                                    footerModal.appendChild(okButton);

                                } else {
                                    //alert("No Matching Records Found. Please enter valid details");

                                    showErrorModal("Alert !", "No matching records found");
                                    empId.value = null;
                                    firstName.value = null;
                                    lastName.value = null;
                                    DeptID.value = null;
                                    extension.value = null;
                                    bargainingUnit.value = null;
                                    jobCode.value = null;
                                    enddate.value = null;
                                    FullTimePartTime.value = null;
                                    ProbationStatus.value = null;
                                    AreYouOnLeave.value = null;
                                    DeptID.value = null;
                                    temporary.value = null;
                                    //gifModal.style.display = "none";
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
                }
            });
        }
    });
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  var status;

    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {

            var userValue = myresopnse.userId;
            LogUser.value = userValue;
            workflow_initiator.value = userValue;
            $.ajax({
                type: 'GET',
                url: "/bin/checkTheUserIsAnAuthorizableMember",
                data: {
                    userId: userValue,
                    groupId: "Fee-Waiver-Reviewers"
                },
                dataType: 'json',
                success: function(userDetails) {
                    status = userDetails.Result;
                  AuthUserStatus.value = status;
                    if (status === true) {
                          chrsId.enabled = true;
                        //empId.enabled = true;
                    } else {
                       // empId.enabled = false;
                        chrsId.enabled = false;
                    }
                    if (formSavedStatus.value === null) {
                        $.ajax({
                            type: 'GET',
                            //url: "/bin/getEmployeeFeeWaiverUserLookUp",
                            url: "/bin/chrsIDUpdateServlet",

                            data: {
                                action:"Employee_Fee_Waiver_User_CHRSID",
                                userId: userValue
                            },
                            dataType: 'json',

                            success: function(myresponse) {
                                gifModal.style.display = "none";
                                
                                var modal = document.getElementById('myModal');
                                var span = document.getElementsByClassName("close")[0];
                                if (myresponse.length == 1) {

                                   // UserLookupFlag.value = myresponse[0].EMPLID;
                                    UserLookupFlag.value = myresponse[0].CSU_CHRS_ID;
                                            
                                    temporary.value = myresponse[0].Temp;
                                    chrsId.value = myresponse[0].CSU_CHRS_ID;
                                    empId.value = myresponse[0].EMPLID;
                                    cwidFromLookup.value = myresponse[0].EMPLID;
                                    //FeeWaiverRequestedBy.value = myresponse[0].EMPLID;
                                   FeeWaiverRequestedBy.value = myresponse[0].CSU_CHRS_ID;
                                    firstName.value = myresponse[0].FIRST_NAME;
                                    lastName.value = myresponse[0].LAST_NAME;
                                    departmentName.value = myresponse[0].DEPTNAME;
                                    deptId.value = myresponse[0].DEPTID;
                                    //extension.value = myresponse[0].Extension;
                                    bargainingUnit.value = myresponse[0].UNION_CD;
                                    jobCode.value = myresponse[0].JOBCODE;
                                    //EmpEmailID.value = myresponse[0].EMP_EMAIL_ID;
                                    // EmpEmailID.value = "swathi.kumari@thoughtfocus.com";
                                     EmpEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                    if (myresponse[0].EndDate !== undefined) {
                                        enddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                    }
                                    hiddentFullTime.value = myresponse[0].FullTime;
                                    hiddenPartTime.value = myresponse[0].PartTime;
                                    if (hiddentFullTime.value == 1) {
                                        FullTimePartTime.value = 1;
                                    } else if (hiddenPartTime.value == 1) {
                                        FullTimePartTime.value = 0;
                                    }
                                    hiddenTenure.value = myresponse[0].Tenure;
                                    hiddenPerm.value = myresponse[0].Perm;
                                    hiddenProb.value = myresponse[0].Prob;
                                    hiddenOthers.value = myresponse[0].Other;
                                    if (hiddenTenure.value == 1) {
                                        ProbationStatus.value = 1;
                                    } else if (hiddenPerm.value == 1) {
                                        ProbationStatus.value = 2;
                                    } else if (hiddenProb.value == 1) {
                                        ProbationStatus.value = 3;
                                    } else if (hiddenOthers.value == 1) {
                                        ProbationStatus.value = 4;
                                    }
                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                    if (hiddenLeavesYes.value == 1) {
                                        AreYouOnLeave.value = 1;
                                    } else if (hiddenLeavesNo.value == 1) {
                                        AreYouOnLeave.value = 0;
                                    }
                                    DeptID.value = myresponse[0].DEPTID;
                                    var employeeId = empId.value;
                                  
                                    var deptid = deptId.value;
                                    var union_cd = bargainingUnit.value;
                                    
                                    $.ajax({
                                        type: 'GET',
                                        url: "/bin/getStaffManagerAdminDetailsLookup",
                                        data: {
                                            deptid: deptid,
                                            cwid: employeeId,
                                      
                                            union_cd: union_cd
                                        },
                                        dataType: 'json',
                                        success: function(myresponse) {

                                            var modal = document.getElementById('myModal');
                                            var span = document.getElementsByClassName("close")[0];

                                            if (myresponse.length === 1) {
                                                ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                //ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                //// managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                // ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                ManagerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                //AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                // AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                AdminEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                ////AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                            }

                                        }
                                    });
                                    gifModal.style.display = "none";
                                    modal.style.display = "none";

                                } else if (myresponse.length > 1) {
                                    gifModal.style.display = "none";
                                    modal.style.display = "block";

                                    //UserLookupFlag.value = myresponse[0].EMPLID;
                                  UserLookupFlag.value = myresponse[0].CSU_CHRS_ID;

                                    var col = [];
                                    col.push("FIRST_NAME");
                                    col.push("LAST_NAME");
                                    col.push("DEPTNAME");
                                    col.push("DEPTID");
                                    col.push("UNION_CD");

                                    var table = document.createElement("table");
                                    table.id = "tb";
                                    var tr = table.insertRow(-1);
                                    var headings = ["", "First_Name", "Last_Name", "Department_Name", "Department_ID", "CBID"];
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
                                               
                                                chrsId.value = myresponse[n].CSU_CHRS_ID;
                                                empId.value = myresponse[n].EMPLID;
                                                cwidFromLookup.value = myresponse[n].EMPLID;
                                               // FeeWaiverRequestedBy.value = myresponse[n].EMPLID;
                                                FeeWaiverRequestedBy.value = myresponse[n].CSU_CHRS_ID;
                                                deptId.value = myresponse[n].DEPTID;
                                                firstName.value = myresponse[n].FIRST_NAME;
                                                lastName.value = myresponse[n].LAST_NAME;
                                                departmentName.value = myresponse[n].DEPTNAME;
                                                bargainingUnit.value = myresponse[n].UNION_CD;
                                                jobCode.value = myresponse[n].JOBCODE;
                                                //EmpEmailID.value = myresponse[n].EMP_EMAIL_ID;
                                                //EmpEmailID.value = "swathi.kumari@thoughtfocus.com";
                                                EmpEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                if (myresponse[n].EndDate !== undefined) {
                                                    enddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                    tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                }
                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;




                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                if (hiddentFullTime.value == 1) {
                                                    FullTimePartTime.value = 1;
                                                } else if (hiddenPartTime.value == 1) {
                                                    FullTimePartTime.value = 0;
                                                }
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                if (hiddenTenure.value == 1) {
                                                    ProbationStatus.value = 1;
                                                } else if (hiddenPerm.value == 1) {
                                                    ProbationStatus.value = 2;
                                                } else if (hiddenProb.value == 1) {
                                                    ProbationStatus.value = 3;
                                                } else if (hiddenOthers.value == 1) {
                                                    ProbationStatus.value = 4;
                                                }
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                if (hiddenLeavesYes.value == 1) {
                                                    AreYouOnLeave.value = 1;
                                                } else if (hiddenLeavesNo.value == 1) {
                                                    AreYouOnLeave.value = 0;
                                                }
                                                deptId.value = myresponse[n].DEPTID;
                                                temporary.value = myresponse[n].Temp;


                                                rButtonStatus = true;
                                                break;
                                            }
                                        }
                                        if (rButtonStatus === false) {
                                            alert("Please select the department");
                                            modal.style.display = "block";
                                        } else {
                                            //populate Hidden Fields
                                           var employeeId = empId.value;
                                         
                                            var deptid = deptId.value;
                                            var union_cd = bargainingUnit.value;
                                            
                                            $.ajax({
                                                type: 'GET',
                                                url: "/bin/getStaffManagerAdminDetailsLookup",
                                                data: {
                                                    deptid: deptid,
                                                    cwid: employeeId,
                                               
                                                    union_cd: union_cd
                                                },
                                                dataType: 'json',
                                                success: function(myresponse) {

                                                    var modal = document.getElementById('myModal');
                                                    var span = document.getElementsByClassName("close")[0];

                                                    if (myresponse.length === 1) {
                                                        ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                        //// managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                        //ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                        //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                        ManagerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                        //AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                        AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                        //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                        AdminEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                        ////AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                    }

                                                }
                                            });

                                            modal.style.display = "none";

                                        }
                                    };
                                    // footerModal = document.getElementById("modal_footer");
                                    footerModal.appendChild(okButton);

                                } else {
                                    //alert("No Matching Records Found. Please enter valid details");

                                    showErrorModal("Alert !", "No matching records found");
                                    chrsId.value = null;
                                    empId.value = null;
                                    firstName.value = null;
                                    lastName.value = null;
                                    DeptID.value = null;
                                    extension.value = null;
                                    bargainingUnit.value = null;
                                    jobCode.value = null;
                                    enddate.value = null;
                                    FullTimePartTime.value = null;
                                    ProbationStatus.value = null;
                                    AreYouOnLeave.value = null;
                                    DeptID.value = null;
                                    temporary.value = null;
                                    //gifModal.style.display = "none";
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
                }
            });
        }
    });
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_textdraw1577382730893_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_textdraw1577382730893_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_empInformation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_empInformation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
  this.mandatory=true;
}
else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
  var status;
    var userLookup = UserLookupFlag.value;
    if (formSavedStatus.value !== null) {

        UserLookupFlag.value = FeeWaiverRequestedBy.value;


    }
    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresopnse) {

                var userValue = myresopnse.userId;
                LogUser.value = userValue;



                if (UserLookupFlag.value !== empId.value) {

                    if (empId.value !== null) {
                        $.ajax({
                            type: 'GET',
                            url: "/bin/checkTheUserIsAnAuthorizableMember",
                            data: {
                                userId: LogUser.value,
                                groupId: "Fee-Waiver-Reviewers"
                            },
                            dataType: 'json',
                            success: function(userDetails) {
                                status = userDetails.Result;
                               AuthUserStatus.value = status;
                                //if(cwidFromLookup.value !== empId.value) {
                                if (status === true) {
                                    if (FeeWaiverRequestedBy.value !== empId.value) {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = false;
                                    } else {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = true;
                                    }
  
                                    UserLookupFlag.value = userLookup;
                                    if (UserLookupFlag.value !== empId.value) {

                                        var EmpId = empId.value;
                                        var gifModal = document.getElementById('gifModal');
                                        gifModal.style.display = "block";

                                        $.ajax({

                                            type: 'GET',

                                            url: "/bin/getFeeWaiverEmpLookUp",


                                            data: {
                                                cwid: EmpId
                                            },

                                            dataType: 'JSON',

                                            success: function(myresponse) {
                                                gifModal.style.display = "none";
                                                
                                                var modal = document.getElementById('myModal');
                                                var span = document.getElementsByClassName("close")[0];
                                                UserLookupFlag.value = empId.value;
                                                if (myresponse.length == 1) {
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    var tempStats = myresponse[0].Temp;

                                                    firstName.value = myresponse[0].FIRST_NAME;
                                                    lastName.value = myresponse[0].LAST_NAME;
                                                    departmentName.value = myresponse[0].DEPTNAME;
                                                    // extension.value = myresponse[0].Extension;
                                                    bargainingUnit.value = myresponse[0].UNION_CD;
                                                    jobCode.value = myresponse[0].JOBCODE;
                                                    //endDate.value = myresponse[0].EndDate;

                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    if (hiddentFullTime.value == 1) {
                                                        FullTimePartTime.value = 1;
                                                    } else if (hiddenPartTime.value == 1) {
                                                        FullTimePartTime.value = 0;
                                                    }
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    if (hiddenTenure.value == 1) {
                                                        ProbationStatus.value = 1;
                                                    } else if (hiddenPerm.value == 1) {
                                                        ProbationStatus.value = 2;
                                                    } else if (hiddenProb.value == 1) {
                                                        ProbationStatus.value = 3;
                                                    } else if (hiddenOthers.value == 1) {
                                                        ProbationStatus.value = 4;
                                                    }
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    if (hiddenLeavesYes.value == 1) {
                                                        AreYouOnLeave.value = 1;
                                                    } else if (hiddenLeavesNo.value == 1) {
                                                        AreYouOnLeave.value = 0;
                                                    }
                                                    DeptID.value = myresponse[0].DEPTID;
                                                    deptId.value = myresponse[0].DEPTID;
                                                    if (tempStats == 1) {
                                                        temporary.value = 1;
                                                    } else {
                                                        temporary.value = 0;
                                                    }
                                                    if (myresponse[0].EndDate !== undefined) {
                                                        enddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                    }
                                                    EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var employeeId = empId.value;
                                                    var deptid = DeptID.value;
                                                    var union_cd = bargainingUnit.value;
                                                   
                                                    $.ajax({
                                                        type: 'GET',
                                                        url: "/bin/getStaffManagerAdminDetailsLookup",
                                                        data: {
                                                            deptid: deptid,
                                                            cwid: employeeId,
                                                            union_cd: union_cd
                                                        },
                                                        dataType: 'json',
                                                        success: function(myresponse) {

                                                            var modal = document.getElementById('myModal');
                                                            var span = document.getElementsByClassName("close")[0];

                                                            if (myresponse.length === 1) {
                                                                ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                // managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                            }

                                                        }
                                                    });
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "none";

                                                } else if (myresponse.length > 1) {
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "block";
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    //populate Hidden Fields

                                                    //hiddentExtension.value = myresponse[0].Extension;
                                                    hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                                    hiddentJobCode.value = myresponse[0].JOBCODE;
                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var col = [];
                                                    col.push("FIRST_NAME");

                                                    col.push("LAST_NAME");

                                                    col.push("DEPTNAME");

                                                    col.push("DEPTID");

                                                    var table = document.createElement("table");
                                                    table.id = "tb";
                                                    var tr = table.insertRow(-1);
                                                    var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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

                                                        button.onclick = function(event) {
                                                            //alert("xcvbn");
                                                          
                                                            hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                            hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                            hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                            // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

                                                        };

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
                                                    //okButton.id = "okBtn";
                                                    okButton.value = "OK";
                                                    okButton.onclick = function(event) {
                                                        //alert("Button Clicked 1");
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
                                                                //alert("Button Clicked 2");
                                                                rButtonStatus = false;
                                                            } else {
                                                                //alert("Button Clicked 3");
                                                                hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                                hiddenLastName.value = myresponse[n].LAST_NAME;
                                                                departmentName.value = myresponse[n].DEPTNAME;
                                                                //hiddentExtension.value = myresponse[n].Extension;
                                                                hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                                hiddentJobCode.value = myresponse[n].JOBCODE;
                                                                //HiddenEndDate.value = myresponse[n].EndDate;

                                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                                /* if(hiddentFullTime.value == 1){             
                                                                   FullTimePartTime.value = 1;                           
                                                                 }else if(hiddenPartTime.value == 1){            
                                                                   FullTimePartTime.value = 0;              
                                                                 }*/
                                                                hiddenTenure.value = myresponse[n].Tenure;
                                                                hiddenPerm.value = myresponse[n].Perm;
                                                                hiddenProb.value = myresponse[n].Prob;
                                                                hiddenOthers.value = myresponse[n].Other;
                                                                /*if(hiddenTenure.value == 1){
                                                                  ProbationStatus.value = 1;
                                                                }else if(hiddenPerm.value == 1){
                                                                  ProbationStatus.value = 2;
                                                                }else if(hiddenProb.value == 1){
                                                                  ProbationStatus.value = 3;
                                                                }else if(hiddenOthers.value == 1){
                                                                  ProbationStatus.value = 4;
                                                                }*/
                                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                                /* if(hiddenLeavesYes.value == 1){
                                                                   AreYouOnLeave.value = 1;
                                                                 }else if(hiddenLeavesNo.value == 1){
                                                                   AreYouOnLeave.value = 0;
                                                                 }*/
                                                                hiddentDeptID.value = myresponse[n].DEPTID;
                                                                /* if(tempStats == 1){
                                                                   temStatus.value = 1;
                                                                 }else{
                                                                   temStatus.value = 0;
                                                                 }      */
                                                                rButtonStatus = true;
                                                                break;
                                                            }
                                                        }
                                                        if (rButtonStatus === false) {
                                                            showErrorModal("Alert!", "Please select the department");
                                                            modal.style.display = "block";
                                                        } else {
                                                            //alert("Button Clicked 4");
                                                            firstName.value = hiddenFirstName.value;
                                                            lastName.value = hiddenLastName.value;
                                                            deptId.value = hiddentDeptID.value;
                                                            //extension.value = hiddentExtension.value;
                                                            bargainingUnit.value = hiddenBargainingUnit.value;
                                                            jobCode.value = hiddentJobCode.value;
                                                            enddate.value = HiddenEndDate.value;
                                                            hiddentFullTime.value = myresponse[n].FullTime;
                                                            hiddenPartTime.value = myresponse[n].PartTime;
                                                            if (hiddentFullTime.value == 1) {
                                                                FullTimePartTime.value = 1;
                                                            } else if (hiddenPartTime.value == 1) {
                                                                FullTimePartTime.value = 0;
                                                            }
                                                            hiddenTenure.value = myresponse[n].Tenure;
                                                            hiddenPerm.value = myresponse[n].Perm;
                                                            hiddenProb.value = myresponse[n].Prob;
                                                            hiddenOthers.value = myresponse[n].Other;
                                                            if (hiddenTenure.value == 1) {
                                                                ProbationStatus.value = 1;
                                                            } else if (hiddenPerm.value == 1) {
                                                                ProbationStatus.value = 2;
                                                            } else if (hiddenProb.value == 1) {
                                                                ProbationStatus.value = 3;
                                                            } else if (hiddenOthers.value == 1) {
                                                                ProbationStatus.value = 4;
                                                            }
                                                            hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                            hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                            deptId.value = myresponse[n].DEPTID;
                                                            if (hiddenLeavesYes.value == 1) {
                                                                AreYouOnLeave.value = 1;
                                                            } else if (hiddenLeavesNo.value == 1) {
                                                                AreYouOnLeave.value = 0;
                                                            }
                                                            DeptID.value = hiddentDeptID.value;
                                                            if (tempStats == 1) {
                                                                temporary.value = 1;
                                                            } else {
                                                                temporary.value = 0;
                                                            }
                                                            if (myresponse[n].EndDate !== undefined) {
                                                                HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                                tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                            }
                                                            var employeeId = empId.value;
                                                            var deptid = DeptID.value;
                                                            var union_cd = bargainingUnit.value;
                                                           
                                                            $.ajax({
                                                                type: 'GET',
                                                                url: "/bin/getStaffManagerAdminDetailsLookup",
                                                                data: {
                                                                    deptid: deptid,
                                                                    cwid: employeeId,
                                                                    union_cd: union_cd
                                                                },
                                                                dataType: 'json',
                                                                success: function(myresponse) {

                                                                    var modal = document.getElementById('myModal');
                                                                    var span = document.getElementsByClassName("close")[0];

                                                                    if (myresponse.length === 1) {
                                                                        ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                        //managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                        ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                        //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                        AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                        //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                                    }

                                                                }
                                                            });
                                                            modal.style.display = "none";

                                                        }
                                                    };
                                                    // footerModal = document.getElementById("modal_footer");
                                                    footerModal.appendChild(okButton);

                                                } else {
                                                    //alert("No Matching Records Found");
                                                    showErrorModal("Alert!", "No matching records found");


                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                                    departmentName.value = null;
                                                    cwidFromLookup.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                                    //gifModal.style.display = "none";
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
                                                // When the user clicks anywhere outside of the modal, close it
                                                window.onclick = function(event) {
                                                    if (event.target == modal) {
                                                        modal.style.display = "none";
                                                    }
                                                };

                                            }
                                        });
                                    }
                                }
                                /*}else{
                                      
                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                  cwidFromLookup.value = null;
                                      departmentName.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                    }*/
                          }
                        });
                    }
                }
            }
        });
    }

}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
  var status;
    var userLookup = UserLookupFlag.value;
    if (formSavedStatus.value !== null) {

        UserLookupFlag.value = FeeWaiverRequestedBy.value;


    }
    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresopnse) {

                var userValue = myresopnse.userId;
                LogUser.value = userValue;



                if (UserLookupFlag.value !== empId.value) {

                    if (empId.value !== null) {
                        $.ajax({
                            type: 'GET',
                            url: "/bin/checkTheUserIsAnAuthorizableMember",
                            data: {
                                userId: LogUser.value,
                                groupId: "Fee-Waiver-Reviewers"
                            },
                            dataType: 'json',
                            success: function(userDetails) {
                                status = userDetails.Result;
                               AuthUserStatus.value = status;
                                //if(cwidFromLookup.value !== empId.value) {
                                if (status === true) {
                                    if (FeeWaiverRequestedBy.value !== empId.value) {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = false;
                                    } else {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = true;
                                    }
  
                                    UserLookupFlag.value = userLookup;
                                    if (UserLookupFlag.value !== empId.value) {

                                        var EmpId = empId.value;
                                        var gifModal = document.getElementById('gifModal');
                                        gifModal.style.display = "block";

                                        $.ajax({

                                            type: 'GET',

                                            url: "/bin/getFeeWaiverEmpLookUp",


                                            data: {
                                                cwid: EmpId
                                            },

                                            dataType: 'JSON',

                                            success: function(myresponse) {
                                                gifModal.style.display = "none";
                                                
                                                var modal = document.getElementById('myModal');
                                                var span = document.getElementsByClassName("close")[0];
                                                UserLookupFlag.value = empId.value;
                                                if (myresponse.length == 1) {
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    var tempStats = myresponse[0].Temp;

                                                    firstName.value = myresponse[0].FIRST_NAME;
                                                    lastName.value = myresponse[0].LAST_NAME;
                                                    departmentName.value = myresponse[0].DEPTNAME;
                                                    // extension.value = myresponse[0].Extension;
                                                    bargainingUnit.value = myresponse[0].UNION_CD;
                                                    jobCode.value = myresponse[0].JOBCODE;
                                                    //endDate.value = myresponse[0].EndDate;

                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    if (hiddentFullTime.value == 1) {
                                                        FullTimePartTime.value = 1;
                                                    } else if (hiddenPartTime.value == 1) {
                                                        FullTimePartTime.value = 0;
                                                    }
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    if (hiddenTenure.value == 1) {
                                                        ProbationStatus.value = 1;
                                                    } else if (hiddenPerm.value == 1) {
                                                        ProbationStatus.value = 2;
                                                    } else if (hiddenProb.value == 1) {
                                                        ProbationStatus.value = 3;
                                                    } else if (hiddenOthers.value == 1) {
                                                        ProbationStatus.value = 4;
                                                    }
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    if (hiddenLeavesYes.value == 1) {
                                                        AreYouOnLeave.value = 1;
                                                    } else if (hiddenLeavesNo.value == 1) {
                                                        AreYouOnLeave.value = 0;
                                                    }
                                                    DeptID.value = myresponse[0].DEPTID;
                                                    deptId.value = myresponse[0].DEPTID;
                                                    if (tempStats == 1) {
                                                        temporary.value = 1;
                                                    } else {
                                                        temporary.value = 0;
                                                    }
                                                    if (myresponse[0].EndDate !== undefined) {
                                                        enddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                    }
                                                    EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var employeeId = empId.value;
                                                    var deptid = DeptID.value;
                                                    var union_cd = bargainingUnit.value;
                                                   
                                                    $.ajax({
                                                        type: 'GET',
                                                        url: "/bin/getStaffManagerAdminDetailsLookup",
                                                        data: {
                                                            deptid: deptid,
                                                            cwid: employeeId,
                                                            union_cd: union_cd
                                                        },
                                                        dataType: 'json',
                                                        success: function(myresponse) {

                                                            var modal = document.getElementById('myModal');
                                                            var span = document.getElementsByClassName("close")[0];

                                                            if (myresponse.length === 1) {
                                                                ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                // managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                            }

                                                        }
                                                    });
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "none";

                                                } else if (myresponse.length > 1) {
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "block";
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    //populate Hidden Fields

                                                    //hiddentExtension.value = myresponse[0].Extension;
                                                    hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                                    hiddentJobCode.value = myresponse[0].JOBCODE;
                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var col = [];
                                                    col.push("FIRST_NAME");

                                                    col.push("LAST_NAME");

                                                    col.push("DEPTNAME");

                                                    col.push("DEPTID");

                                                    var table = document.createElement("table");
                                                    table.id = "tb";
                                                    var tr = table.insertRow(-1);
                                                    var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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

                                                        button.onclick = function(event) {
                                                            //alert("xcvbn");
                                                          
                                                            hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                            hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                            hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                            // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

                                                        };

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
                                                    //okButton.id = "okBtn";
                                                    okButton.value = "OK";
                                                    okButton.onclick = function(event) {
                                                        //alert("Button Clicked 1");
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
                                                                //alert("Button Clicked 2");
                                                                rButtonStatus = false;
                                                            } else {
                                                                //alert("Button Clicked 3");
                                                                hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                                hiddenLastName.value = myresponse[n].LAST_NAME;
                                                                departmentName.value = myresponse[n].DEPTNAME;
                                                                //hiddentExtension.value = myresponse[n].Extension;
                                                                hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                                hiddentJobCode.value = myresponse[n].JOBCODE;
                                                                //HiddenEndDate.value = myresponse[n].EndDate;

                                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                                /* if(hiddentFullTime.value == 1){             
                                                                   FullTimePartTime.value = 1;                           
                                                                 }else if(hiddenPartTime.value == 1){            
                                                                   FullTimePartTime.value = 0;              
                                                                 }*/
                                                                hiddenTenure.value = myresponse[n].Tenure;
                                                                hiddenPerm.value = myresponse[n].Perm;
                                                                hiddenProb.value = myresponse[n].Prob;
                                                                hiddenOthers.value = myresponse[n].Other;
                                                                /*if(hiddenTenure.value == 1){
                                                                  ProbationStatus.value = 1;
                                                                }else if(hiddenPerm.value == 1){
                                                                  ProbationStatus.value = 2;
                                                                }else if(hiddenProb.value == 1){
                                                                  ProbationStatus.value = 3;
                                                                }else if(hiddenOthers.value == 1){
                                                                  ProbationStatus.value = 4;
                                                                }*/
                                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                                /* if(hiddenLeavesYes.value == 1){
                                                                   AreYouOnLeave.value = 1;
                                                                 }else if(hiddenLeavesNo.value == 1){
                                                                   AreYouOnLeave.value = 0;
                                                                 }*/
                                                                hiddentDeptID.value = myresponse[n].DEPTID;
                                                                /* if(tempStats == 1){
                                                                   temStatus.value = 1;
                                                                 }else{
                                                                   temStatus.value = 0;
                                                                 }      */
                                                                rButtonStatus = true;
                                                                break;
                                                            }
                                                        }
                                                        if (rButtonStatus === false) {
                                                            showErrorModal("Alert!", "Please select the department");
                                                            modal.style.display = "block";
                                                        } else {
                                                            //alert("Button Clicked 4");
                                                            firstName.value = hiddenFirstName.value;
                                                            lastName.value = hiddenLastName.value;
                                                            deptId.value = hiddentDeptID.value;
                                                            //extension.value = hiddentExtension.value;
                                                            bargainingUnit.value = hiddenBargainingUnit.value;
                                                            jobCode.value = hiddentJobCode.value;
                                                            enddate.value = HiddenEndDate.value;
                                                            hiddentFullTime.value = myresponse[n].FullTime;
                                                            hiddenPartTime.value = myresponse[n].PartTime;
                                                            if (hiddentFullTime.value == 1) {
                                                                FullTimePartTime.value = 1;
                                                            } else if (hiddenPartTime.value == 1) {
                                                                FullTimePartTime.value = 0;
                                                            }
                                                            hiddenTenure.value = myresponse[n].Tenure;
                                                            hiddenPerm.value = myresponse[n].Perm;
                                                            hiddenProb.value = myresponse[n].Prob;
                                                            hiddenOthers.value = myresponse[n].Other;
                                                            if (hiddenTenure.value == 1) {
                                                                ProbationStatus.value = 1;
                                                            } else if (hiddenPerm.value == 1) {
                                                                ProbationStatus.value = 2;
                                                            } else if (hiddenProb.value == 1) {
                                                                ProbationStatus.value = 3;
                                                            } else if (hiddenOthers.value == 1) {
                                                                ProbationStatus.value = 4;
                                                            }
                                                            hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                            hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                            deptId.value = myresponse[n].DEPTID;
                                                            if (hiddenLeavesYes.value == 1) {
                                                                AreYouOnLeave.value = 1;
                                                            } else if (hiddenLeavesNo.value == 1) {
                                                                AreYouOnLeave.value = 0;
                                                            }
                                                            DeptID.value = hiddentDeptID.value;
                                                            if (tempStats == 1) {
                                                                temporary.value = 1;
                                                            } else {
                                                                temporary.value = 0;
                                                            }
                                                            if (myresponse[n].EndDate !== undefined) {
                                                                HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                                tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                            }
                                                            var employeeId = empId.value;
                                                            var deptid = DeptID.value;
                                                            var union_cd = bargainingUnit.value;
                                                           
                                                            $.ajax({
                                                                type: 'GET',
                                                                url: "/bin/getStaffManagerAdminDetailsLookup",
                                                                data: {
                                                                    deptid: deptid,
                                                                    cwid: employeeId,
                                                                    union_cd: union_cd
                                                                },
                                                                dataType: 'json',
                                                                success: function(myresponse) {

                                                                    var modal = document.getElementById('myModal');
                                                                    var span = document.getElementsByClassName("close")[0];

                                                                    if (myresponse.length === 1) {
                                                                        ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                        //managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                        ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                        //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                        AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                        //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                                    }

                                                                }
                                                            });
                                                            modal.style.display = "none";

                                                        }
                                                    };
                                                    // footerModal = document.getElementById("modal_footer");
                                                    footerModal.appendChild(okButton);

                                                } else {
                                                    //alert("No Matching Records Found");
                                                    showErrorModal("Alert!", "No matching records found");


                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                                    departmentName.value = null;
                                                    cwidFromLookup.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                                    //gifModal.style.display = "none";
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
                                                // When the user clicks anywhere outside of the modal, close it
                                                window.onclick = function(event) {
                                                    if (event.target == modal) {
                                                        modal.style.display = "none";
                                                    }
                                                };

                                            }
                                        });
                                    }
                                }
                                /*}else{
                                      
                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                  cwidFromLookup.value = null;
                                      departmentName.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                    }*/
                          }
                        });
                    }
                }
            }
        });
    }

}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_chrsId_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
  var status;
    var userLookup = UserLookupFlag.value;
    if (formSavedStatus.value !== null) {

        UserLookupFlag.value = FeeWaiverRequestedBy.value;


    }
    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresopnse) {

                var userValue = myresopnse.userId;
                LogUser.value = userValue;



               // if (UserLookupFlag.value !== empId.value) {
                      if (UserLookupFlag.value !== chrsId.value) {

                   // if (empId.value !== null) {
                      if (chrsId.value !== null) {
                        $.ajax({
                            type: 'GET',
                            url: "/bin/checkTheUserIsAnAuthorizableMember",
                            data: {
                                userId: LogUser.value,
                                groupId: "Fee-Waiver-Reviewers"
                            },
                            dataType: 'json',
                            success: function(userDetails) {
                                status = userDetails.Result;
                               AuthUserStatus.value = status;
                               // //if(cwidFromLookup.value !== empId.value) {
                                if (status === true) {
                                   // if (FeeWaiverRequestedBy.value !== empId.value) {
                                       if (FeeWaiverRequestedBy.value !== chrsId.value) {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = false;
                                    } else {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = true;
                                    }
  
                                    UserLookupFlag.value = userLookup;
                                   // if (UserLookupFlag.value !== empId.value) {
                                       if (UserLookupFlag.value !== chrsId.value) {

                                       // var EmpId = empId.value;
                                        var EmpId = chrsId.value;
                                        var gifModal = document.getElementById('gifModal');
                                        gifModal.style.display = "block";

                                        $.ajax({

                                            type: 'GET',

                                            //url: "/bin/getFeeWaiverEmpLookUp",
                                            url: "/bin/chrsIDUpdateServlet",


                                            data: {
                                                  action:"Employee_Fee_Waiver_EMP_CHRSID",
                                                //cwid: EmpId
                                                chrsId: EmpId
                                            },

                                            dataType: 'JSON',

                                            success: function(myresponse) {
                                                gifModal.style.display = "none";
                                                
                                                var modal = document.getElementById('myModal');
                                                var span = document.getElementsByClassName("close")[0];
                                               // UserLookupFlag.value = empId.value;
                                                  UserLookupFlag.value = chrsId.value;
                                                if (myresponse.length == 1) {
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    var tempStats = myresponse[0].Temp;

                                                    empId.value = myresponse[0].EMPLID;
                                                    firstName.value = myresponse[0].FIRST_NAME;
                                                    lastName.value = myresponse[0].LAST_NAME;
                                                    departmentName.value = myresponse[0].DEPTNAME;
                                                    // extension.value = myresponse[0].Extension;
                                                    bargainingUnit.value = myresponse[0].UNION_CD;
                                                    jobCode.value = myresponse[0].JOBCODE;
                                                    //endDate.value = myresponse[0].EndDate;

                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    if (hiddentFullTime.value == 1) {
                                                        FullTimePartTime.value = 1;
                                                    } else if (hiddenPartTime.value == 1) {
                                                        FullTimePartTime.value = 0;
                                                    }
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    if (hiddenTenure.value == 1) {
                                                        ProbationStatus.value = 1;
                                                    } else if (hiddenPerm.value == 1) {
                                                        ProbationStatus.value = 2;
                                                    } else if (hiddenProb.value == 1) {
                                                        ProbationStatus.value = 3;
                                                    } else if (hiddenOthers.value == 1) {
                                                        ProbationStatus.value = 4;
                                                    }
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    if (hiddenLeavesYes.value == 1) {
                                                        AreYouOnLeave.value = 1;
                                                    } else if (hiddenLeavesNo.value == 1) {
                                                        AreYouOnLeave.value = 0;
                                                    }
                                                    DeptID.value = myresponse[0].DEPTID;
                                                    deptId.value = myresponse[0].DEPTID;
                                                    if (tempStats == 1) {
                                                        temporary.value = 1;
                                                    } else {
                                                        temporary.value = 0;
                                                    }
                                                    if (myresponse[0].EndDate !== undefined) {
                                                        enddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                    }
                                                  
                                                   // EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                  
                                                   var employeeId = empId.value;
                                                    
                                                    var deptid = DeptID.value;
                                                    var union_cd = bargainingUnit.value;
                                                   
                                                    $.ajax({
                                                        type: 'GET',
                                                        url: "/bin/getStaffManagerAdminDetailsLookup",
                                                        data: {
                                                            deptid: deptid,
                                                            cwid: employeeId,
                                                           
                                                            union_cd: union_cd
                                                        },
                                                        dataType: 'json',
                                                        success: function(myresponse) {

                                                            var modal = document.getElementById('myModal');
                                                            var span = document.getElementsByClassName("close")[0];

                                                            if (myresponse.length === 1) {
                                                                ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                //// managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                //ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                ManagerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                                //AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                AdminEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                               // //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                            }

                                                        }
                                                    });
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "none";

                                                } else if (myresponse.length > 1) {
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "block";
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    //populate Hidden Fields

                                                    //hiddentExtension.value = myresponse[0].Extension;
                                                    hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                                    hiddentJobCode.value = myresponse[0].JOBCODE;
                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                   // EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                     EmpEmailID.value ="shreyas.manjunatha@thoughtfocus.com";
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var col = [];
                                                    col.push("FIRST_NAME");

                                                    col.push("LAST_NAME");

                                                    col.push("DEPTNAME");

                                                    col.push("DEPTID");

                                                    var table = document.createElement("table");
                                                    table.id = "tb";
                                                    var tr = table.insertRow(-1);
                                                    var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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

                                                        button.onclick = function(event) {
                                                            //alert("xcvbn");
                                                          
                                                            hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                            hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                            hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                            // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

                                                        };

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
                                                    //okButton.id = "okBtn";
                                                    okButton.value = "OK";
                                                    okButton.onclick = function(event) {
                                                        //alert("Button Clicked 1");
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
                                                                //alert("Button Clicked 2");
                                                                rButtonStatus = false;
                                                            } else {
                                                                //alert("Button Clicked 3");
                                                                HiddenEmpID.value =  myresponse[n].EMPLID;
                                                                hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                                hiddenLastName.value = myresponse[n].LAST_NAME;
                                                                departmentName.value = myresponse[n].DEPTNAME;
                                                                //hiddentExtension.value = myresponse[n].Extension;
                                                                hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                                hiddentJobCode.value = myresponse[n].JOBCODE;
                                                                //HiddenEndDate.value = myresponse[n].EndDate;

                                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                                /* if(hiddentFullTime.value == 1){             
                                                                   FullTimePartTime.value = 1;                           
                                                                 }else if(hiddenPartTime.value == 1){            
                                                                   FullTimePartTime.value = 0;              
                                                                 }*/
                                                                hiddenTenure.value = myresponse[n].Tenure;
                                                                hiddenPerm.value = myresponse[n].Perm;
                                                                hiddenProb.value = myresponse[n].Prob;
                                                                hiddenOthers.value = myresponse[n].Other;
                                                                /*if(hiddenTenure.value == 1){
                                                                  ProbationStatus.value = 1;
                                                                }else if(hiddenPerm.value == 1){
                                                                  ProbationStatus.value = 2;
                                                                }else if(hiddenProb.value == 1){
                                                                  ProbationStatus.value = 3;
                                                                }else if(hiddenOthers.value == 1){
                                                                  ProbationStatus.value = 4;
                                                                }*/
                                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                                /* if(hiddenLeavesYes.value == 1){
                                                                   AreYouOnLeave.value = 1;
                                                                 }else if(hiddenLeavesNo.value == 1){
                                                                   AreYouOnLeave.value = 0;
                                                                 }*/
                                                                hiddentDeptID.value = myresponse[n].DEPTID;
                                                                /* if(tempStats == 1){
                                                                   temStatus.value = 1;
                                                                 }else{
                                                                   temStatus.value = 0;
                                                                 }      */
                                                                rButtonStatus = true;
                                                                break;
                                                            }
                                                        }
                                                        if (rButtonStatus === false) {
                                                            showErrorModal("Alert!", "Please select the department");
                                                            modal.style.display = "block";
                                                        } else {
                                                            //alert("Button Clicked 4");
                                                            empId.value = HiddenEmpID.value;
                                                            firstName.value = hiddenFirstName.value;
                                                            lastName.value = hiddenLastName.value;
                                                            deptId.value = hiddentDeptID.value;
                                                            //extension.value = hiddentExtension.value;
                                                            bargainingUnit.value = hiddenBargainingUnit.value;
                                                            jobCode.value = hiddentJobCode.value;
                                                            enddate.value = HiddenEndDate.value;
                                                            hiddentFullTime.value = myresponse[n].FullTime;
                                                            hiddenPartTime.value = myresponse[n].PartTime;
                                                            if (hiddentFullTime.value == 1) {
                                                                FullTimePartTime.value = 1;
                                                            } else if (hiddenPartTime.value == 1) {
                                                                FullTimePartTime.value = 0;
                                                            }
                                                            hiddenTenure.value = myresponse[n].Tenure;
                                                            hiddenPerm.value = myresponse[n].Perm;
                                                            hiddenProb.value = myresponse[n].Prob;
                                                            hiddenOthers.value = myresponse[n].Other;
                                                            if (hiddenTenure.value == 1) {
                                                                ProbationStatus.value = 1;
                                                            } else if (hiddenPerm.value == 1) {
                                                                ProbationStatus.value = 2;
                                                            } else if (hiddenProb.value == 1) {
                                                                ProbationStatus.value = 3;
                                                            } else if (hiddenOthers.value == 1) {
                                                                ProbationStatus.value = 4;
                                                            }
                                                            hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                            hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                            deptId.value = myresponse[n].DEPTID;
                                                            if (hiddenLeavesYes.value == 1) {
                                                                AreYouOnLeave.value = 1;
                                                            } else if (hiddenLeavesNo.value == 1) {
                                                                AreYouOnLeave.value = 0;
                                                            }
                                                            DeptID.value = hiddentDeptID.value;
                                                            if (tempStats == 1) {
                                                                temporary.value = 1;
                                                            } else {
                                                                temporary.value = 0;
                                                            }
                                                            if (myresponse[n].EndDate !== undefined) {
                                                                HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                                tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                            }
                                                          
                                                            var employeeId = empId.value;
                                                       
                                                            var deptid = DeptID.value;
                                                            var union_cd = bargainingUnit.value;
                                                           
                                                            $.ajax({
                                                                type: 'GET',
                                                                url: "/bin/getStaffManagerAdminDetailsLookup",
                                                                data: {
                                                                    deptid: deptid,
                                                                   cwid: employeeId,
                                                                  
                                                                    union_cd: union_cd
                                                                },
                                                                dataType: 'json',
                                                                success: function(myresponse) {

                                                                    var modal = document.getElementById('myModal');
                                                                    var span = document.getElementsByClassName("close")[0];

                                                                    if (myresponse.length === 1) {
                                                                        ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                        ////managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                        //ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                        //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        ManagerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                                       // AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                        AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                        //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        AdminEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                                                                        ////AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                                    }

                                                                }
                                                            });
                                                            modal.style.display = "none";

                                                        }
                                                    };
                                                    // footerModal = document.getElementById("modal_footer");
                                                    footerModal.appendChild(okButton);

                                                } else {
                                                    //alert("No Matching Records Found");
                                                    showErrorModal("Alert!", "No matching records found");

                                                    empId.value = null;
                                                  	//chrsId.value = null;
                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                                    departmentName.value = null;
                                                    cwidFromLookup.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                                    //gifModal.style.display = "none";
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
                                                // When the user clicks anywhere outside of the modal, close it
                                                window.onclick = function(event) {
                                                    if (event.target == modal) {
                                                        modal.style.display = "none";
                                                    }
                                                };

                                            }
                                        });
                                    }
                                }
                                /*}else{
                                      
                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                  cwidFromLookup.value = null;
                                      departmentName.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                    }*/
                          }
                        });
                    }
                }
            }
        });
    }

}


        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_empId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_empId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled= false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_empId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_empId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
  var status;
    var userLookup = UserLookupFlag.value;
    if (formSavedStatus.value !== null) {

        UserLookupFlag.value = FeeWaiverRequestedBy.value;


    }
    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresopnse) {

                var userValue = myresopnse.userId;
                LogUser.value = userValue;



                if (UserLookupFlag.value !== empId.value) {

                    if (empId.value !== null) {
                        $.ajax({
                            type: 'GET',
                            url: "/bin/checkTheUserIsAnAuthorizableMember",
                            data: {
                                userId: LogUser.value,
                                groupId: "Fee-Waiver-Reviewers"
                            },
                            dataType: 'json',
                            success: function(userDetails) {
                                status = userDetails.Result;
                               AuthUserStatus.value = status;
                                //if(cwidFromLookup.value !== empId.value) {
                                if (status === true) {
                                    if (FeeWaiverRequestedBy.value !== empId.value) {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = false;
                                    } else {
                                        HRUseOnlyPanel.visible = false;
                                        AuthorizationPanel.visible = true;
                                    }
  
                                    UserLookupFlag.value = userLookup;
                                    if (UserLookupFlag.value !== empId.value) {

                                        var EmpId = empId.value;
                                        var gifModal = document.getElementById('gifModal');
                                        gifModal.style.display = "block";

                                        $.ajax({

                                            type: 'GET',

                                            url: "/bin/getFeeWaiverEmpLookUp",


                                            data: {
                                                cwid: EmpId
                                            },

                                            dataType: 'JSON',

                                            success: function(myresponse) {
                                                gifModal.style.display = "none";
                                                
                                                var modal = document.getElementById('myModal');
                                                var span = document.getElementsByClassName("close")[0];
                                                UserLookupFlag.value = empId.value;
                                                if (myresponse.length == 1) {
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    var tempStats = myresponse[0].Temp;

                                                    firstName.value = myresponse[0].FIRST_NAME;
                                                    lastName.value = myresponse[0].LAST_NAME;
                                                    departmentName.value = myresponse[0].DEPTNAME;
                                                    // extension.value = myresponse[0].Extension;
                                                    bargainingUnit.value = myresponse[0].UNION_CD;
                                                    jobCode.value = myresponse[0].JOBCODE;
                                                    //endDate.value = myresponse[0].EndDate;

                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    if (hiddentFullTime.value == 1) {
                                                        FullTimePartTime.value = 1;
                                                    } else if (hiddenPartTime.value == 1) {
                                                        FullTimePartTime.value = 0;
                                                    }
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    if (hiddenTenure.value == 1) {
                                                        ProbationStatus.value = 1;
                                                    } else if (hiddenPerm.value == 1) {
                                                        ProbationStatus.value = 2;
                                                    } else if (hiddenProb.value == 1) {
                                                        ProbationStatus.value = 3;
                                                    } else if (hiddenOthers.value == 1) {
                                                        ProbationStatus.value = 4;
                                                    }
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    if (hiddenLeavesYes.value == 1) {
                                                        AreYouOnLeave.value = 1;
                                                    } else if (hiddenLeavesNo.value == 1) {
                                                        AreYouOnLeave.value = 0;
                                                    }
                                                    DeptID.value = myresponse[0].DEPTID;
                                                    deptId.value = myresponse[0].DEPTID;
                                                    if (tempStats == 1) {
                                                        temporary.value = 1;
                                                    } else {
                                                        temporary.value = 0;
                                                    }
                                                    if (myresponse[0].EndDate !== undefined) {
                                                        enddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                                    }
                                                    EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var employeeId = empId.value;
                                                    var deptid = DeptID.value;
                                                    var union_cd = bargainingUnit.value;
                                                   
                                                    $.ajax({
                                                        type: 'GET',
                                                        url: "/bin/getStaffManagerAdminDetailsLookup",
                                                        data: {
                                                            deptid: deptid,
                                                            cwid: employeeId,
                                                            union_cd: union_cd
                                                        },
                                                        dataType: 'json',
                                                        success: function(myresponse) {

                                                            var modal = document.getElementById('myModal');
                                                            var span = document.getElementsByClassName("close")[0];

                                                            if (myresponse.length === 1) {
                                                                ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                // managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                            }

                                                        }
                                                    });
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "none";

                                                } else if (myresponse.length > 1) {
                                                    gifModal.style.display = "none";
                                                    modal.style.display = "block";
                                                    tempEnddate.value = "";
                                                    enddate.value = "";
                                                    //populate Hidden Fields

                                                    //hiddentExtension.value = myresponse[0].Extension;
                                                    hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                                    hiddentJobCode.value = myresponse[0].JOBCODE;
                                                    hiddentFullTime.value = myresponse[0].FullTime;
                                                    hiddenPartTime.value = myresponse[0].PartTime;
                                                    hiddenTenure.value = myresponse[0].Tenure;
                                                    hiddenPerm.value = myresponse[0].Perm;
                                                    hiddenProb.value = myresponse[0].Prob;
                                                    hiddenOthers.value = myresponse[0].Other;
                                                    hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                                    EmpEmailID.value = myresponse[0].EMP_EMAIL;
                                                    EmpUserID.value = myresponse[0].EMP_USERID;
                                                    EmpName.value = myresponse[0].EMP_NAME;
                                                    var col = [];
                                                    col.push("FIRST_NAME");

                                                    col.push("LAST_NAME");

                                                    col.push("DEPTNAME");

                                                    col.push("DEPTID");

                                                    var table = document.createElement("table");
                                                    table.id = "tb";
                                                    var tr = table.insertRow(-1);
                                                    var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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

                                                        button.onclick = function(event) {
                                                            //alert("xcvbn");
                                                          
                                                            hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                            hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                            hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                            // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

                                                        };

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
                                                    //okButton.id = "okBtn";
                                                    okButton.value = "OK";
                                                    okButton.onclick = function(event) {
                                                        //alert("Button Clicked 1");
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
                                                                //alert("Button Clicked 2");
                                                                rButtonStatus = false;
                                                            } else {
                                                                //alert("Button Clicked 3");
                                                                hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                                hiddenLastName.value = myresponse[n].LAST_NAME;
                                                                departmentName.value = myresponse[n].DEPTNAME;
                                                                //hiddentExtension.value = myresponse[n].Extension;
                                                                hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                                hiddentJobCode.value = myresponse[n].JOBCODE;
                                                                //HiddenEndDate.value = myresponse[n].EndDate;

                                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                                /* if(hiddentFullTime.value == 1){             
                                                                   FullTimePartTime.value = 1;                           
                                                                 }else if(hiddenPartTime.value == 1){            
                                                                   FullTimePartTime.value = 0;              
                                                                 }*/
                                                                hiddenTenure.value = myresponse[n].Tenure;
                                                                hiddenPerm.value = myresponse[n].Perm;
                                                                hiddenProb.value = myresponse[n].Prob;
                                                                hiddenOthers.value = myresponse[n].Other;
                                                                /*if(hiddenTenure.value == 1){
                                                                  ProbationStatus.value = 1;
                                                                }else if(hiddenPerm.value == 1){
                                                                  ProbationStatus.value = 2;
                                                                }else if(hiddenProb.value == 1){
                                                                  ProbationStatus.value = 3;
                                                                }else if(hiddenOthers.value == 1){
                                                                  ProbationStatus.value = 4;
                                                                }*/
                                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                                /* if(hiddenLeavesYes.value == 1){
                                                                   AreYouOnLeave.value = 1;
                                                                 }else if(hiddenLeavesNo.value == 1){
                                                                   AreYouOnLeave.value = 0;
                                                                 }*/
                                                                hiddentDeptID.value = myresponse[n].DEPTID;
                                                                /* if(tempStats == 1){
                                                                   temStatus.value = 1;
                                                                 }else{
                                                                   temStatus.value = 0;
                                                                 }      */
                                                                rButtonStatus = true;
                                                                break;
                                                            }
                                                        }
                                                        if (rButtonStatus === false) {
                                                            showErrorModal("Alert!", "Please select the department");
                                                            modal.style.display = "block";
                                                        } else {
                                                            //alert("Button Clicked 4");
                                                            firstName.value = hiddenFirstName.value;
                                                            lastName.value = hiddenLastName.value;
                                                            deptId.value = hiddentDeptID.value;
                                                            //extension.value = hiddentExtension.value;
                                                            bargainingUnit.value = hiddenBargainingUnit.value;
                                                            jobCode.value = hiddentJobCode.value;
                                                            enddate.value = HiddenEndDate.value;
                                                            hiddentFullTime.value = myresponse[n].FullTime;
                                                            hiddenPartTime.value = myresponse[n].PartTime;
                                                            if (hiddentFullTime.value == 1) {
                                                                FullTimePartTime.value = 1;
                                                            } else if (hiddenPartTime.value == 1) {
                                                                FullTimePartTime.value = 0;
                                                            }
                                                            hiddenTenure.value = myresponse[n].Tenure;
                                                            hiddenPerm.value = myresponse[n].Perm;
                                                            hiddenProb.value = myresponse[n].Prob;
                                                            hiddenOthers.value = myresponse[n].Other;
                                                            if (hiddenTenure.value == 1) {
                                                                ProbationStatus.value = 1;
                                                            } else if (hiddenPerm.value == 1) {
                                                                ProbationStatus.value = 2;
                                                            } else if (hiddenProb.value == 1) {
                                                                ProbationStatus.value = 3;
                                                            } else if (hiddenOthers.value == 1) {
                                                                ProbationStatus.value = 4;
                                                            }
                                                            hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                            hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                            deptId.value = myresponse[n].DEPTID;
                                                            if (hiddenLeavesYes.value == 1) {
                                                                AreYouOnLeave.value = 1;
                                                            } else if (hiddenLeavesNo.value == 1) {
                                                                AreYouOnLeave.value = 0;
                                                            }
                                                            DeptID.value = hiddentDeptID.value;
                                                            if (tempStats == 1) {
                                                                temporary.value = 1;
                                                            } else {
                                                                temporary.value = 0;
                                                            }
                                                            if (myresponse[n].EndDate !== undefined) {
                                                                HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                                tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                            }
                                                            var employeeId = empId.value;
                                                            var deptid = DeptID.value;
                                                            var union_cd = bargainingUnit.value;
                                                           
                                                            $.ajax({
                                                                type: 'GET',
                                                                url: "/bin/getStaffManagerAdminDetailsLookup",
                                                                data: {
                                                                    deptid: deptid,
                                                                    cwid: employeeId,
                                                                    union_cd: union_cd
                                                                },
                                                                dataType: 'json',
                                                                success: function(myresponse) {

                                                                    var modal = document.getElementById('myModal');
                                                                    var span = document.getElementsByClassName("close")[0];

                                                                    if (myresponse.length === 1) {
                                                                        ManagerUserID.value = myresponse[0].MANAGER_EMP_USERID;
                                                                        //managerName.value = myresponse[0].MANAGER_EMP_NAME;
                                                                        ManagerEmailID.value = myresponse[0].MANAGER_EMAIL_ID;
                                                                        //ManagerEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        AdminEmailID.value = myresponse[0].ADMIN_EMAIL_ID;
                                                                        AdminUserID.value = myresponse[0].ADMIN_EMP_USERID;
                                                                        //AdminEmailID.value = "yashovardhan.jayaram@thoughtfocus.com";
                                                                        //AdministratorsFullName.value = myresponse[0].ADMIN_EMP_NAME;

                                                                    }

                                                                }
                                                            });
                                                            modal.style.display = "none";

                                                        }
                                                    };
                                                    // footerModal = document.getElementById("modal_footer");
                                                    footerModal.appendChild(okButton);

                                                } else {
                                                    //alert("No Matching Records Found");
                                                    showErrorModal("Alert!", "No matching records found");


                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                                    departmentName.value = null;
                                                    cwidFromLookup.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                                    //gifModal.style.display = "none";
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
                                                // When the user clicks anywhere outside of the modal, close it
                                                window.onclick = function(event) {
                                                    if (event.target == modal) {
                                                        modal.style.display = "none";
                                                    }
                                                };

                                            }
                                        });
                                    }
                                }
                                /*}else{
                                      
                                                    firstName.value = null;
                                                    lastName.value = null;
                                                    deptId.value = null;
                                                    EmpEmailID.value = null;
                                  cwidFromLookup.value = null;
                                      departmentName.value = null;
                                                    bargainingUnit.value = null;
                                                    jobCode.value = null;
                                                    enddate.value = null;
                                                    FullTimePartTime.value = null;
                                                    ProbationStatus.value = null;
                                                    AreYouOnLeave.value = null;
                                                    DeptID.value = null;
                                                    temporary.value = null;
                                    }*/
                          }
                        });
                    }
                }
            }
        });
    }

}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_departmentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_departmentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_bargainingUnit_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_bargainingUnit_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_bargainingUnit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_bargainingUnit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "C99" || this.value == "M80" || this.value == "M98"){
  GroupCode.value = 1;
}else if(this.value == "R02" || this.value == "R05" || this.value == "R07" || this.value == "R09"){
  GroupCode.value = 2;
}else if(this.value == "R10"){
  GroupCode.value = 3;
}else if(this.value == "R04"){
  GroupCode.value = 4;
}else if(this.value == "R01"){
  GroupCode.value = 5;
}else if(this.value == "R06"){
  GroupCode.value = 6;
}else if(this.value == "R08"){
  GroupCode.value = 7;
}




        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_jobCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_jobCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_temporary_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_temporary_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null && tempDateStatus.value  === null){
if(this.value !== "1"){
  enddate.value = "";
  enddate.mandatory = "";
}else{
  enddate.value = tempEnddate.value;
  enddate.mandatory = "error";
}}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_semester_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_semester_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == 4){
  SemesterCode1.value = 1;
}else if(this.value == 1){
  SemesterCode1.value = 3;
}else if(this.value == 2){
  SemesterCode1.value = 5;
}else if(this.value == 3){
  SemesterCode1.value = 7;
}

if(this.value == 1 || this.value == 2 || this.value == 3){
    var yearValue = year.value;
    var modValue = yearValue % 100;
    //alert("MOD Value is= "+modValue);
    if(this.value !== null && year.value !== null && (modValue < 10)){
      term.value = "20"+modValue+SemesterCode1.value;
    }else{
      term.value = "2"+modValue+SemesterCode1.value; 
    }
}else if (this.value == 4){
  	term.value = null;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_year_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_year_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var thisValue = year.value;
var modValue = thisValue % 100;

if(this.value !== null && year.value !== null && (modValue < 10)){
      term.value = "20"+modValue+SemesterCode1.value;  	
}else{
      term.value = "2"+modValue+SemesterCode1.value;  
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_campus_Attending_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_campus_Attending_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && campus_attended_status.value === null || StageIndicator.value == "ToHR"){
  if(this.value == "Fullerton"){
    releaseTime1.value = "";
    releaseTime2.value = "";
    releaseTime1.enabled = true;
    releaseTime2.enabled = true;
     CampusAttendingFlag.value = "Yes";
  }else{
    releaseTime1.value = "";
    releaseTime2.value = "";
    releaseTime1.enabled = false;
    releaseTime2.enabled = false;
    CampusAttendingFlag.value = "No";
  }
}
campus_attended_status.value = null;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_classStanding_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_classStanding_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  ClassStandingCode1.value = "U";
}else if(this.value == 2 || this.value == 6){
  ClassStandingCode1.value = "G";
}else if(this.value == 4){
  ClassStandingCode1.value = "C";
}else if(this.value == 5){
  ClassStandingCode1.value = "D";
}else if(this.value == 3){
  ClassStandingCode1.value = "T";
}

if((GroupCode.value !== null || SemesterCode1.value !== null) && bargainingUnit.value === "R03"){
  	
  	EDDE.value = "F"+"E"+"1"+ClassStandingCode1.value;
}else{
  	EDDE.value = "S"+"E"+GroupCode.value+"1"+ClassStandingCode1.value;
  	
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_classStanding_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_classStanding_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToEmployee"){
if(classStanding.value == 2 || classStanding.value == 5 ){
  EmployeeSignatureCHK.mandatory = true;
}else{
   EmployeeSignatureCHK.mandatory = false;
}
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_approvedPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_approvedPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  major.enabled = true;
}else{
  major.enabled = false;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_approvedPlan_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_approvedPlan_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  major.enabled = true;
}else{
  major.value = null;
  major.enabled = false;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_courseInfoComment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_courseInfoComment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "All courses taken on Fee Waiver must be taken for a traditional letter grade. A Career Development (CD) course is a course which is part of an approved individual Career Development Plan (CDP) and the CDP must be on file with Human Resources. * A work-related course is a course deemed necessary for the improvement or acquisition of skills and/or knowledge of the employee in performing the duties of the current position. If you are taking approved WR courses, you are not a matriculated student, in order to take WR courses you must complete the Short Application form and the Fee Waiver application must be accompanied by a written confirmation from your managerial supervisor that the course is job related";
this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && course1_status.value  === null){
if(this.value !== ""){
  onlineCourse1.value = "";
  wr_Cd1.value = "";
  unit1.value = "";
  day1.value = "";
  hours1.value = "";
  releaseTime1.value = "";
  onlineCourse1.mandatory = "error";
  wr_Cd1.mandatory = "error";
  unit1.mandatory = "error";
  day1.mandatory = "error";
  hours1.mandatory = "error";
 // releaseTime1.mandatory = "error";
}if(this.value === null){
 onlineCourse1.mandatory = "";
  wr_Cd1.mandatory = "";
  unit1.mandatory = "";
  day1.mandatory = "";
  hours1.mandatory = "";
 // releaseTime1.mandatory = "";
}}
course1_status.value = null;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {debugger;
    if(courseTitle1.value !== null && releaseTime1.value == "1"){
      if(courseTitle2.value !== null && releaseTime2.value == "1" && releaseTime2.value !== null){
        releaseTime1.value = 2;
        showErrorModal("Alert!","Only one release time is allowed for the on-campus course");
      }
    }
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_hours1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_hours1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToEmployee"){
if(this.value !== null){
  timeTB1.mandatory = true;
}else{
  timeTB1.mandatory = false;
}
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && campus_Attending.value == "Fullerton" ){
  if(this.value !== null){
    releaseTime2.value = null;
  }else{
    this.value = null;
  }
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
//alert("Before Release 1");
if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {
//alert("passed stage indicator courseTitle1 in 1="+courseTitle1.value);
//alert("passed stage indicator releaseTime1 in 1="+releaseTime1.value);
    if(courseTitle1.value !== null && releaseTime1.value == "1"){
//alert("passed courseTitle2 and releaseTime2 - courseTitle2 in 2="+courseTitle2.value);
//alert("passed courseTitle2 and releaseTime2 - courseTitle2 in 2="+releaseTime2.value);
      if(courseTitle2.value !== null && releaseTime2.value == "1" && releaseTime2.value !== null){
        releaseTime2.value = 2;
        showErrorModal("Alert!","Only one release time is allowed for the on-campus course");
      }
    }
}

/*if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {
    if(courseTitle1.value !== null && releaseTime1.value == "1"){
      if(courseTitle2.value !== null && releaseTime2.value == "1" && releaseTime2.value !== null){
        releaseTime1.value = 2;
        showErrorModal("Alert!","Only one release time is allowed for the on-campus course");
      }
    }
}*/

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null && course2_status.value  === null){
if(this.value !== ""){
  onlineCourse2.value = "";
  wr_Cd2.value = "";
  unit2.value = "";
  day2.value = "";
  hours2.value = "";
  releaseTime2.value = "";
  onlineCourse2.mandatory = "error";
  wr_Cd2.mandatory = "error";
  unit2.mandatory = "error";
  day2.mandatory = "error";
  hours2.mandatory = "error";
 // releaseTime2.mandatory = "error";
}if(this.value === null){
 onlineCourse2.mandatory = "";
  wr_Cd2.mandatory = "";
  unit2.mandatory = "";
  day2.mandatory = "";
  hours2.mandatory = "";
 // releaseTime2.mandatory = "";
}}
course2_status.value = null;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_courseTitle2_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {
    if(courseTitle2.value !== null && releaseTime2.value == 1){
      if(courseTitle1.value !== null && releaseTime1.value == "1" && releaseTime1.value !== null){
        releaseTime2.value = 2;
        showErrorModal("Alert!","Only one release time is allowed for the on-campus course");
      }
    }
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_hours2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_hours2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToEmployee"){
if(this.value !== null){
  timeTB2.mandatory = true;
}else{
  timeTB2.mandatory = false;
}
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && campus_Attending.value == "Fullerton" ){
  if(this.value !== null){
    releaseTime1.value = null;
  }else{
    this.value = null;
  }
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_releaseTime2_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
//alert("Before Release 2");
if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {
//alert("passed stage indicator courseTitle2 in 2="+courseTitle2.value);
//alert("passed stage indicator releaseTime1 in 2="+releaseTime1.value);
    if(courseTitle2.value !== null && releaseTime2.value == "1"){
//alert("passed courseTitle2 and releaseTime2 - courseTitle1 in 2="+courseTitle1.value);
//alert("passed courseTitle2 and releaseTime2 - courseTitle1 in 2="+releaseTime1.value);
      if(courseTitle1.value !== null && releaseTime1.value == "1" && releaseTime1.value !== null){
        releaseTime1.value = 2;
        showErrorModal("Alert!","Only one release time is allowed for the on-campus course");
      }
    }
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_comment1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_comment1_init0 = function (scope) {
    with(this) {
        with(scope) {
            
this.value = "The section below should be left empty";

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_reqReimbursement_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_reqReimbursement_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToEmployee"){
  this.enabled = true;
  }else{
    this.enabled = false;
  }
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_instructions_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_instructions_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_EmployeeSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_EmployeeSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_EmployeeSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_EmployeeSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
     hrSigneddate.value = "";
     hrSign.value = "";
    hrComments.value = "";
  }
}
if (this.value == 1) {
    if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {
      if (dateInitiated.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        dateInitiated.value = d;

        dateInitiated.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;                    
                  	empSign.value = userValue;
                  authorizationInitials.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        dateInitiated.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
    }
} else {
       authorizationInitials.value = null;
    empSign.value = "";
    dateInitiated.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_gradProfBusStatement_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_gradProfBusStatement_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_empCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_empCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
     hrSigneddate.value = "";
     hrSign.value = "";
    hrComments.value = "";
  }
}
if (this.value == 1) {
    if (StageIndicator.value === null || StageIndicator.value == "ToEmployee") {
      if (dateInitiated.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        dateInitiated.value = d;

        dateInitiated.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;                    
                  	empSign.value = userValue;
                  authorizationInitials.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        dateInitiated.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
    }
} else {
       authorizationInitials.value = null;
    empSign.value = "";
    dateInitiated.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_authorizationInitials_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_authorizationInitials_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_empSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_empSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_dateInitiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_dateInitiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_textdraw_3096286811598517084121_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_textdraw_3096286811598517084121_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToSupervisor" || StageIndicator.value == "ToAdmin"){
  this.visible = true;
}else if(StageIndicator.value == "ToHR" && supCB.value == "1"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_chairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_chairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === "ToChair" ) {
      if (deptchairSignedDate.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        deptchairSignedDate.value = d;

        deptchairSignedDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    deptChairPrintName.value = userValue;
                  	deptChairSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        deptchairSignedDate.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
    }
} else {
    deptChairPrintName.value = "";
    deptChairSign.value = "";
    deptchairSignedDate.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_deptChairSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_deptChairSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_deptchairSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_deptchairSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_deanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_deanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === "ToDean" ) {
      if (collegeDeanSignedDate.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        collegeDeanSignedDate.value = d;

        collegeDeanSignedDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    collegeDeanPrintName.value = userValue;
                  	collegeDeanSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        collegeDeanSignedDate.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
    }
} else {
    collegeDeanPrintName.value = "";
    collegeDeanSign.value = "";
    collegeDeanSignedDate.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_collegeDeanSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_collegeDeanSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_collegeDeanSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_collegeDeanSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_ProvostPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_ProvostPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_releaseTimeCheck_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_releaseTimeCheck_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToSupervisor"){
  if(releaseTimeCheck.value == "1"){
    WorkScheduleChangeCheck.mandatory = "";
  }else{
    WorkScheduleChangeCheck.mandatory = "";
  }
  if(releaseTime1.value == "1" || releaseTime2.value == "1"){
    releaseTimeCheck.mandatory = true;
  }else{
     releaseTimeCheck.mandatory = false;
  }
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_WorkScheduleChangeCheck_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_WorkScheduleChangeCheck_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToSupervisor"){
  if(WorkScheduleChangeCheck.value == 1){
    daysAndTimes.mandatory = true;
  }else{
    daysAndTimes.mandatory = false;
  }
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_supCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_supCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === "ToSupervisor" ) {
      if (supervisorSignedDate.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        supervisorSignedDate.value = d;

        supervisorSignedDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    supervisorPrintname.value = userValue;
                  	supervisorSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        supervisorSignedDate.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
   }
} else {
    supervisorPrintname.value = "";
    supervisorSign.value = "";
    supervisorSignedDate.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_supervisorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_supervisorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_supervisorSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_supervisorSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_adminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_adminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === "ToAdmin" ) {
      if (administratorSignedDate.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        administratorSignedDate.value = d;

        administratorSignedDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    administratorPrintName.value = userValue;
                  	administratorSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        administratorSignedDate.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
    }
} else {
    administratorPrintName.value = "";
    administratorSign.value = "";
    administratorSignedDate.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_administratorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_administratorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_administratorSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_administratorSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_HRUseOnlyPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_HRUseOnlyPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_GrantOrDenyRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_GrantOrDenyRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToHR"){    
    this.mandatory = "error";
  hrSign.mandatory = "error";
  hrSigneddate.mandatory = "error";
   hrCB.mandatory = "error";
}else{
  this.mandatory = ""; 
  hrSign.mandatory = "";
  hrSigneddate.mandatory = "";
    hrCB.mandatory = "";
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_GrantOrDenyRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_GrantOrDenyRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    feeWaiverGranted.value = "1";
}
if (this.value == "2") {
    feeWaiverDenied.value = "1";
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverGranted_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverGranted_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverGranted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverGranted_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  feeWaiverDenied.value = null;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverDenied_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverDenied_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverDenied_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_feeWaiverDenied_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  feeWaiverGranted.value = null;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_term_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_term_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_EDDE_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_EDDE_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_EDDE_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_EDDE_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "SE2G"){
      gradProfBusStatement.value = "I understand that Miscellaneous Category III fees are not covered by the Fee Waiver program and constitute an additional fee. Examples of these fees are covered under Executive Orders 933 Online MS in Software Engineering, 944 Online and Distance Learning fee for the MS in IT Program, 957 Nursing Distance Learning lab fee and 1042 Graduate Professional Business Programs. I understand that Category I Fees established under Executive Order No. 1402 for the Graduate Professional Business Program are not waived under the Fee Waiver program";
  
} else {
      gradProfBusStatement.value = "I understand that Miscellaneous Category III fees are not covered by the Fee Waiver program and constitute an additional fee. Examples of these fees are covered under Executive Orders 933 Online MS in Software Engineering, 944 Online and Distance Learning fee for the MS in IT Program, 957 Nursing Distance Learning lab fee and 1042 Graduate Professional Business Programs.";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_hrCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_hrCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
 dateInitiated.value = "";
 empSign.value = "";
 authorizationInitials.value = "";
  }
}
if (this.value == 1) {
    if (StageIndicator.value === "ToHR" || StageIndicator.value === null ) {
      if (hrSigneddate.value === null) {
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        hrSigneddate.value = d;

        hrSigneddate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;                    
                  	hrSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        hrSigneddate.enabled = false;
        //EvaluatorNameSign.value = (EvaluatorsName.value).replace("  "," ");
    }
    }
} else {
    
    hrSign.value = "";
    hrSigneddate.value = "";
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_hiddenFields_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_hiddenFields_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_HiddenInitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_HiddenInitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            var dateString = new Date().toLocaleString("en-US", {
timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
}).replace(/[^ -~]/g, '');
var dateObject = new Date(dateString);
var curyear = dateObject.getFullYear();
var curyearMonth = dateObject.getMonth() + 1;
var curyearDay = dateObject.getDate();
var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
this.value = dateInitiated;


this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("on top")	;
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
  var userValue = myresponse.userId;
  LogUser.value = userValue;
  
},
  error: function(error){
alert("error block="+error);
}
});
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_ClassStandingCode1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_ClassStandingCode1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //edde.value='F'+'D'+1+this.value;

if(bargainingUnit.value == "R03" && ClassStandingCode1.value !== ""){
  edde.value = 'F'+'D'+1+this.value;
}else{
  edde.value = 'S'+'D'+GroupCode.value+1+this.value;
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_extension_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_extension_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_deptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_deptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  debugger;
  var dept_id = deptId.value;
  $.ajax({
                                type: 'GET',
                                url: "/bin/getChairDeanInfo",
								data:{dept_id:dept_id},
                                dataType: 'json',

                                success: function(chairInfoResult) {
                                    
                                    if (chairInfoResult.length !== 0) {
                                        DeanUserId.value  = chairInfoResult[0].DEAN_USERID;
										DeanEmail.value  = chairInfoResult[0].DEAN_EMAIL;
                                     //  DeanEmail.value = "yashovardhan.jayaram@thoughtfocus.com";
                                        
                                        ChairUserId.value  = chairInfoResult[0].CHAIR_USERID;
										ChairEmail.value  = chairInfoResult[0].CHAIR_EMAIL;
                                      //  ChairEmail.value = "yashovardhan.jayaram@thoughtfocus.com";
                                        
                                    }

                                }
                            });
}
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_deptId_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_deptId_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  debugger;
  var dept_id = deptId.value;
  $.ajax({
                                type: 'GET',
                                url: "/bin/getChairDeanInfo",
								data:{dept_id:dept_id},
                                dataType: 'json',

                                success: function(chairInfoResult) {
                                    
                                    if (chairInfoResult.length !== 0) {
                                        DeanUserId.value  = chairInfoResult[0].DEAN_USERID;
										//DeanEmail.value  = chairInfoResult[0].DEAN_EMAIL;
                                     //  DeanEmail.value = "yashovardhan.jayaram@thoughtfocus.com";
                                      DeanEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                        
                                        ChairUserId.value  = chairInfoResult[0].CHAIR_USERID;
										//ChairEmail.value  = chairInfoResult[0].CHAIR_EMAIL;
                                      //  ChairEmail.value = "yashovardhan.jayaram@thoughtfocus.com";
                                      ChairEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                        
                                    }

                                }
                            });
}

        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_ChairUserId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_ChairUserId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var val2 = this.value;
   $.ajax({

                type: 'GET',

                url: "/bin/getUserNameFromDB",
     data: {
                    userID: val2
                },
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;                    
                  	chairName.value = userValue;
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
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_ManagerUserID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_ManagerUserID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var val1 = this.value;
   $.ajax({

                type: 'GET',

                url: "/bin/getUserNameFromDB",
     data: {
                    userID: val1
                },
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;                    
                  	managerName.value = userValue;
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
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_workflow_initiator_init0 = function (scope) {
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
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_GenerateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_GenerateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            

if(empId.value !== null && firstName.value !== null && lastName.value !== null && AreYouOnLeave.value !== null && ProbationStatus.value !== null && FullTimePartTime.value !== null && SemesterCode1.value !== null && year.value !== null && campus_Attending.value !== null && studentType.value !== null && EmpEmailID.value !== ""){
  
  		 if(temporary.value == 1 && enddate.value === null){
    showErrorModal("Alert!","Please enter Appointment end date.");
  }else{
  		getPdf();
  }
}else{

      //alert("Please fill all the mandatory fields");
   		showErrorModal("Alert !","Please fill all the mandatory fields to download the PDF.");
    }
/*
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var url = "/bin/getDoR" + "?data=" + result.data + "&formPath=" + "/content/forms/af/employee-fee-waiver/employee-fee-waiver-application" + "&fileName=" + firstName.value+"_"+lastName.value+"("+empId.value+")"+"_"+ Date.now();
            console.log("url: " + url);
            window.open(encodeURI(url), "_self");
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
} 
*/



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/employee-fee-waiver/employee-fee-waiver-application');
            jsonData.append('fileName', firstName.value + "_" + lastName.value + "(" + empId.value + ")" + "_" + Date.now());          
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
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_GenerateDOR_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_GenerateDOR_click1 = function (scope) {
    with(this) {
        with(scope) {
            if(empId.value === null){
  showErrorModal("Alert!","Please fill the details to download the pdf");
}


        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_saveguidedraft1577420972539_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_saveguidedraft1577420972539_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
tempDateStatus.value  = "1";
course1_status.value = "1";
course2_status.value = "1";
campus_attended_status.value = "1";
if(empId.value !== null){
   
        aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + empId.value);
   
  }
handleDraftSave(this);


        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_submit1577420963057_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_submit1577420963057_click0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("aaa="+term.value);
if(semester.value == "1"){
  termValue.value = "Spring";
}else if(semester.value == "2"){
  termValue.value = "Summer";
}else if(semester.value == "3"){
  termValue.value = "Fall";
}else if(semester.value == "4"){
  termValue.value = "Winter";
}
if(classStanding.value == 2 || classStanding.value == 5 ){
  EmployeeSignatureCHK.mandatory = true;
}else{
   EmployeeSignatureCHK.mandatory = false;
}
if(lastName.value !== null){
EmailSubject.value = "Employee Fee Waiver Request - "+ lastName.value;
}else{
 EmailSubject.value = "Employee Fee Waiver Request"; 
}

if(bargainingUnit.value === "" || bargainingUnit.value === null){
  //alert("Please indicate your bargaining unit");
  //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].empInformation[0].bargainingUnit[0]");
  
  		showErrorModal("Alert!","Please indicate your bargaining unit.");
  
}
else if(AreYouOnLeave.value === "" || AreYouOnLeave.value === null)
{  	
  		showErrorModal("Alert!","Please indicate whether you are currently on leave.");
  	
}else if(FullTimePartTime.value === "" || FullTimePartTime.value === null)
{
  		showErrorModal("Alert!","Please indicate whether you are a full- or part-time employee.");  	
}else if(temporary.value == 1 && enddate.value === null)
{		//alert("Hello");
  		showErrorModal("Alert!","Please enter Appointment end date.");  	
}else if (semester.value === null){ 
  
  		showErrorModal("Alert!","Please select a semester.");  
}else if (year.value === null){ 
  
  		showErrorModal("Alert!","Please select a year.");  
}
else if (campus_Attending.value === null){
  
  		showErrorModal("Alert!","Campus Attending is missing.");
  
}else if (studentType.value === null){
  
  		showErrorModal("Alert!","Please indicate whether you are a new, continuing, or returning student.");
  
}
else if (classStanding.value === null){ 
  
  		showErrorModal("Alert!","Please indicate whether you are an undergraduate or a graduate student.");  
}else if (approvedPlan.value === null){
  
  		showErrorModal("Alert!","Please indicate whether you have an approved Individual Career Development Plan on file.");
    
}else if (approvedPlan.value == 1 && major.value === null){
 
  		showErrorModal("Alert !","Major is missing.");
    
}else if ((wr_Cd1.value == 2 || wr_Cd2.value == 2) && comment2.value === null) { 
  
  	showErrorModal("Alert !", "You are required to cite how the course will relate to the present duties and job.") ;
  
} else if(wr_Cd1.value == 1 && wr_Cd2.value == 1 && comment2.value !== null){
  
  	showErrorModal("Alert !", "This cell does not require an entry, please delete.");
  
}/*else if (classStanding.value !== 1 && releaseTimeCheck.value === null){
 
  		showErrorModal("Field_Name: Granting Employee Request Radio button","Please indicate whether you are an undergraduate or a graduate student");
    
}else if (classStanding.value !== 1 && WorkScheduleChangeCheck.value === null){
 
  		showErrorModal("Field_Name: Employee work Schedule Radio button","Please indicate whether you are an undergraduate or a graduate student");
    
}else if (WorkScheduleChangeCheck.value == 1 && daysAndTimes.value === null){
 
  		showErrorModal("Alert !","Please list days and times of employee's work schedule change");
    
}*/
else{
  if(empId.value !== null){
   
        aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + empId.value);
   
  }
  /*ManagerEmailID.value = "yjayaram@fullerton.edu";
  AdminEmailID.value = "yjayaram@fullerton.edu";
  ChairEmail.value = "yjayaram@fullerton.edu";
  DeanEmail.value = "yjayaram@fullerton.edu";
  EmpEmailID.value = "DL-TotalWellness@FULLERTON.EDU";*/
  
  /*ManagerEmailID.value = "pushpa.kawadi@thoughtfocus.com";
  AdminEmailID.value = "pushpa.kawadi@thoughtfocus.com";
  ChairEmail.value = "pushpa.kawadi@thoughtfocus.com";
  DeanEmail.value = "pushpa.kawadi@thoughtfocus.com";
  EmpEmailID.value = "pushpa.kawadi@thoughtfocus.com";*/
  
  /*ManagerEmailID.value = "ram.singh@thoughtfocus.com";
  AdminEmailID.value = "ram.singh@thoughtfocus.com";
  ChairEmail.value = "ram.singh@thoughtfocus.com";
  DeanEmail.value = "ram.singh@thoughtfocus.com";
  EmpEmailID.value = "ram.singh@thoughtfocus.com";*/
  
  guideBridge.submit(); 
}



        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application.generated_submit1577420963057_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_fee_waiver_employee_fee_waiver_application.generated_submit1577420963057_click1 = function (scope) {
    with(this) {
        with(scope) {
            //alert("aaa="+term.value);
debugger;
if(semester.value == "1"){
  termValue.value = "Spring";
}else if(semester.value == "2"){
  termValue.value = "Summer";
}else if(semester.value == "3"){
  termValue.value = "Fall";
}else if(semester.value == "4"){
  termValue.value = "Winter";
}
if(classStanding.value == 2 || classStanding.value == 5 ){
  EmployeeSignatureCHK.mandatory = true;
}else{
   EmployeeSignatureCHK.mandatory = false;
}
if(lastName.value !== null){
EmailSubject.value = "Employee Fee Waiver Request - "+ lastName.value;
}else{
 EmailSubject.value = "Employee Fee Waiver Request"; 
}

if(bargainingUnit.value === "" || bargainingUnit.value === null){
  //alert("Please indicate your bargaining unit");
  //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].empInformation[0].bargainingUnit[0]");
  
  		showErrorModal("Alert!","Please indicate your bargaining unit.");
  
}
else if(AreYouOnLeave.value === "" || AreYouOnLeave.value === null)
{  	
  		showErrorModal("Alert!","Please indicate whether you are currently on leave.");
  	
}else if(FullTimePartTime.value === "" || FullTimePartTime.value === null)
{
  		showErrorModal("Alert!","Please indicate whether you are a full- or part-time employee.");  	
}else if(temporary.value == 1 && enddate.value === null)
{		//alert("Hello");
  		showErrorModal("Alert!","Please enter Appointment end date.");  	
}else if (semester.value === null){ 
  
  		showErrorModal("Alert!","Please select a semester.");  
}else if (year.value === null){ 
  
  		showErrorModal("Alert!","Please select a year.");  
}
else if (campus_Attending.value === null){
  
  		showErrorModal("Alert!","Campus Attending is missing.");
  
}else if (studentType.value === null){
  
  		showErrorModal("Alert!","Please indicate whether you are a new, continuing, or returning student.");
  
}
else if (classStanding.value === null){ 
  
  		showErrorModal("Alert!","Please indicate whether you are an undergraduate or a graduate student.");  
}else if (approvedPlan.value === null){
  
  		showErrorModal("Alert!","Please indicate whether you have an approved Individual Career Development Plan on file.");
    
}else if (approvedPlan.value == 1 && major.value === null){
 
  		showErrorModal("Alert !","Major is missing.");
    
}else if ((wr_Cd1.value == 2 || wr_Cd2.value == 2) && comment2.value === null) { 
  
  	showErrorModal("Alert !", "You are required to cite how the course will relate to the present duties and job.") ;
  
} else if(wr_Cd1.value == 1 && wr_Cd2.value == 1 && comment2.value !== null){
  
  	showErrorModal("Alert !", "This cell does not require an entry, please delete.");
  
}/*else if (classStanding.value !== 1 && releaseTimeCheck.value === null){
 
  		showErrorModal("Field_Name: Granting Employee Request Radio button","Please indicate whether you are an undergraduate or a graduate student");
    
}else if (classStanding.value !== 1 && WorkScheduleChangeCheck.value === null){
 
  		showErrorModal("Field_Name: Employee work Schedule Radio button","Please indicate whether you are an undergraduate or a graduate student");
    
}else if (WorkScheduleChangeCheck.value == 1 && daysAndTimes.value === null){
 
  		showErrorModal("Alert !","Please list days and times of employee's work schedule change");
    
}*/
else{
  if(empId.value !== null){
   
        aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + empId.value);
   
  }
  /*ManagerEmailID.value = "yjayaram@fullerton.edu";
  AdminEmailID.value = "yjayaram@fullerton.edu";
  ChairEmail.value = "yjayaram@fullerton.edu";
  DeanEmail.value = "yjayaram@fullerton.edu";
  EmpEmailID.value = "DL-TotalWellness@FULLERTON.EDU";*/
  
  ManagerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
  AdminEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
  ChairEmail.value = "shreyas.manjunatha@thoughtfocus.com";
  DeanEmail.value = "shreyas.manjunatha@thoughtfocus.com";
  EmpEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
  
  /*ManagerEmailID.value = "ram.singh@thoughtfocus.com";
  AdminEmailID.value = "ram.singh@thoughtfocus.com";
  ChairEmail.value = "ram.singh@thoughtfocus.com";
  DeanEmail.value = "ram.singh@thoughtfocus.com";
  EmpEmailID.value = "ram.singh@thoughtfocus.com";*/
  
  guideBridge.submit(); 
}




        }
	}
}
