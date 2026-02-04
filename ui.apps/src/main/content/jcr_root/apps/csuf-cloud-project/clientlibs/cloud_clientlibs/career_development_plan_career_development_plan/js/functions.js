/**
 * @function career_development_plan_career_development_plan.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value === null){
  debugger; 
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
        var userValue = myresopnse.userId;
        //LogUser.value = userValue;

        $.ajax({
            type: 'GET',
            url: "/bin/careerDevelopmentPlanUserLookUp",

            data: {
                userID: userValue
            },
            dataType: 'json',

            success: function(myresponse) {

                var modal = document.getElementById('myModal');
               // var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');

                if (myresponse.length === 1) {

                    departmentName.value = myresponse[0].DEPTNAME;
                    emplRCD.value = myresponse[0].EMPL_RCD;
                    cbid.value = myresponse[0].UNION_CD;
                    departmentID.value = myresponse[0].DEPTID;
                    lastName.value = myresponse[0].LAST_NAME;
                    firstName.value = myresponse[0].FIRST_NAME;
                    emplID.value = myresponse[0].EMPLID;
                    classification.value = myresponse[0].DESCR;
                  EmpEmailId.value = myresponse[0].EMP_EMAIL_ID;
                 
                    var cbidVal = cbid.value;
                    var deptIdVal = departmentID.value;
                    var empIdVal = emplID.value;
                    $.ajax({

                        type: 'GET',

                        url: "/bin/getManagerDetails",
                        data: {
                            deptid: deptIdVal,
                            cwid: empIdVal,
                            union_cd: cbidVal

                        },
                        dataType: 'json',
                        success: function(managerDetails) {
                            ManagerUserId.value = managerDetails[0].MANAGER_EMP_USERID;
                            ManagerEmailId.value = managerDetails[0].MANAGER_EMAIL_ID;
                            //ManagerEmailId.value = "yjayaram@fullerton.edu";
							ManagerName.value = managerDetails[0].MANAGER_NAME;
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (myresponse.length > 1) {
                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    hiddenDepartmentID.value = myresponse[0].DEPTID;
                    hiddenCBID.value = myresponse[0].UNION_CD;
                    hiddenEmplRCD.value = myresponse[0].EMPL_RCD;
                    hiddenClassification.value = myresponse[0].DESCR;

                    var col = [];
                    col.push("FIRST_NAME");
                    col.push("LAST_NAME");
                    col.push("EMPLID");
                    col.push("DEPTNAME");
                    col.push("DEPTID");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First_Name", "Last_Name", "Empl_ID", "Department_Name", "Department_ID"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);

                        var button = document.createElement("input");
                        button.type = "radio";
                        button.setAttribute("class", "rb");
                        button.id = "rbtn";
                        button.name = "group";
                        button.value = "";

                        button.onclick = function(event) {

                            hiddentLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                            hiddentFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                            hiddenEmpID.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                            hiddenDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
                    //  debugger;

                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "OK";

                    okButton.onclick = function(event) {
                        var n;
                        var rButtonStatus;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {
                                rButtonStatus = false;
                            } else {

                                hiddenDepartmentName.value = myresponse[n].DEPTNAME;
                                hiddenEmplRCD.value = myresponse[n].EMPL_RCD;
                                hiddenCBID.value = myresponse[n].UNION_CD;
                                hiddenDepartmentID.value = myresponse[n].DEPTID;
                                hiddentLastName.value = myresponse[n].LAST_NAME;
                                hiddentFirstName.value = myresponse[n].FIRST_NAME;
                                hiddenEmpID.value = myresponse[n].EMPLID;
                                hiddenClassification.value = myresponse[n].DESCR;
								EmpEmailId.value = myresponse[n].EMP_EMAIL_ID;
                                rButtonStatus = true;
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            showErrorModal("Alert!", "Please select the department");
                            modal.style.display = "block";
                            modal.style.display = "none";
                        } else {

                            departmentName.value = hiddenDepartmentName.value;
                            emplRCD.value = hiddenEmplRCD.value;
                            cbid.value = hiddenCBID.value;
                            departmentID.value = hiddenDepartmentID.value;
                            lastName.value = hiddentLastName.value;
                            firstName.value = hiddentFirstName.value;
                            emplID.value = hiddenEmpID.value;
                            classification.value = hiddenClassification.value;
                            var cbidVal = cbid.value;
                            var deptIdVal = departmentID.value;
                            var empIdVal = emplID.value;
                            $.ajax({

                                type: 'GET',

                                url: "/bin/getManagerDetails",
                                data: {
                                    deptid: deptIdVal,
                                    cwid: empIdVal,
                                    union_cd: cbidVal

                                },
                                dataType: 'json',
                                success: function(managerDetails) {
                                    ManagerUserId.value = managerDetails[0].MANAGER_EMP_USERID;
                                    ManagerEmailId.value = managerDetails[0].MANAGER_EMAIL_ID;
                                     //ManagerEmailId.value = "yjayaram@fullerton.edu";
                                  ManagerName.value = managerDetails[0].MANAGER_NAME;

                                },
                                error: function(error) {
                                    alert("error block=" + error);
                                }
                            });
                            modal.style.display = "none";
                        }
                    };

                    footerModal.appendChild(okButton);
                    //gifModal.style.display = "none";

                } else {
                    showErrorModal("Alert!", "No matching records found");

                    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formBody[0].benifitPlan[0]");
                   // modal1.style.display = "block";

                    departmentName.value = null;
                    emplRCD.value = null;
                    cbid.value = null;
                    departmentID.value = null;
                    lastName.value = null;
                    firstName.value = null;
                    emplID.value = null;
                    classification.value = null;
                    gifModal.style.display = "none";
                }
                
                // When the user clicks anywhere outside of the modal, close it
              
            }
        });

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
 * @function career_development_plan_career_development_plan.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  forEmployeeSupervisor.visible = false;
  hrUseOnly.visible = false;
}
if(StageIndicator.value === "ToManager"){
  employeeDetails.enabled = false;
  careerGoals.enabled = false;
  requirementsForAchievingGoals.enabled = false;
 addtionalComments.enabled = false;
  forEmployeeSupervisor.visible = true;
  hrUseOnly.visible = false;
}
if(StageIndicator.value === "ToHR"){
  employeeDetails.enabled = false;
  careerGoals.enabled = false;
  requirementsForAchievingGoals.enabled = false;
  addtionalComments.enabled = false;
  forEmployeeSupervisor.visible = true;
  forEmployeeSupervisor.enabled = false;
  hrUseOnly.visible = true;
}

        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value === null){
  debugger; 
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
        var userValue = myresopnse.userId;
        //LogUser.value = userValue;

        $.ajax({
            type: 'GET',
            url: "/bin/chrsIDUpdateServlet",
            data: {
                action: "Career_Dev_Plan_CHRSID",
                userId: userValue
            },
            dataType: 'json',

            success: function(myresponse) {

                var modal = document.getElementById('myModal');
               // var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
debugger;
                if (myresponse.length === 1) {

                    departmentName.value = myresponse[0].DEPTNAME;
                    emplRCD.value = myresponse[0].EMPL_RCD;
                    cbid.value = myresponse[0].UNION_CD;
                    departmentID.value = myresponse[0].DEPTID;
                    lastName.value = myresponse[0].LAST_NAME;
                    firstName.value = myresponse[0].FIRST_NAME;
                    emplID.value = myresponse[0].EMPLID;
                    chrsID.value=myresponse[0].CSU_CHRS_ID;
                    classification.value = myresponse[0].DESCR;
                    //EmpEmailId.value = myresponse[0].EMP_EMAIL_ID;
                    EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
                 
                    var cbidVal = cbid.value;
                    var deptIdVal = departmentID.value;
                    var empIdVal = emplID.value;
                    $.ajax({

                        type: 'GET',

                        url: "/bin/getManagerDetails",
                        data: {
                            deptid: deptIdVal,
                            cwid: empIdVal,
                            union_cd: cbidVal

                        },
                        dataType: 'json',
                        success: function(managerDetails) {
                            ManagerUserId.value = managerDetails[0].MANAGER_EMP_USERID;
                            //ManagerEmailId.value = managerDetails[0].MANAGER_EMAIL_ID;
                            ManagerEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
							ManagerName.value = managerDetails[0].MANAGER_NAME;
                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (myresponse.length > 1) {
                    gifModal.style.display = "none";
                    modal.style.display = "block";

         //           hiddenChrsid.value = myresponse[0].CSU_CHRS_ID;
                    hiddenDepartmentID.value = myresponse[0].DEPTID;
                    hiddenCBID.value = myresponse[0].UNION_CD;
                    hiddenEmplRCD.value = myresponse[0].EMPL_RCD;
                    hiddenClassification.value = myresponse[0].DESCR;

                    var col = [];
                    col.push("CSU_CHRS_ID");
                    col.push("FIRST_NAME");
                    col.push("LAST_NAME");
                    col.push("EMPLID");
                    col.push("DEPTNAME");
                    col.push("DEPTID");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["","Empl_ID", "First_Name", "Last_Name", "CWID", "Department_Name", "Department_ID"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresponse.length; k++) {
                        tr = table.insertRow(-1);

                        var button = document.createElement("input");
                        button.type = "radio";
                        button.setAttribute("class", "rb");
                        button.id = "rbtn";
                        button.name = "group";
                        button.value = "";

                        button.onclick = function(event) {

                            hiddenChrsid.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                            hiddentFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                            hiddentLastName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                            hiddenEmpID.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                            hiddenDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                          

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
                    //  debugger;

                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "OK";

                    okButton.onclick = function(event) {
                        var n;
                        var rButtonStatus;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {
                                rButtonStatus = false;
                            } else {

                                hiddenDepartmentName.value = myresponse[n].DEPTNAME;
                                hiddenEmplRCD.value = myresponse[n].EMPL_RCD;
                                hiddenCBID.value = myresponse[n].UNION_CD;
                                hiddenDepartmentID.value = myresponse[n].DEPTID;
                                hiddentLastName.value = myresponse[n].LAST_NAME;
                                hiddentFirstName.value = myresponse[n].FIRST_NAME;
                                hiddenEmpID.value = myresponse[n].EMPLID;
                                hiddenChrsid.value= myresponse[n].CSU_CHRS_ID;
                                hiddenClassification.value = myresponse[n].DESCR;
								//EmpEmailId.value = myresponse[n].EMP_EMAIL_ID;
                                EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
                                rButtonStatus = true;
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            showErrorModal("Alert!", "Please select the department");
                            modal.style.display = "block";
                            modal.style.display = "none";
                        } else {

                            departmentName.value = hiddenDepartmentName.value;
                            emplRCD.value = hiddenEmplRCD.value;
                            cbid.value = hiddenCBID.value;
                            departmentID.value = hiddenDepartmentID.value;
                            lastName.value = hiddentLastName.value;
                            firstName.value = hiddentFirstName.value;
                            emplID.value = hiddenEmpID.value;
                            chrsID.value =  hiddenChrsid.value;
                            classification.value = hiddenClassification.value;
                            var cbidVal = cbid.value;
                            var deptIdVal = departmentID.value;
                            var empIdVal = emplID.value;
                            $.ajax({

                                type: 'GET',

                                url: "/bin/getManagerDetails",
                                data: {
                                    deptid: deptIdVal,
                                    cwid: empIdVal,
                                    union_cd: cbidVal

                                },
                                dataType: 'json',
                                success: function(managerDetails) {
                                    ManagerUserId.value = managerDetails[0].MANAGER_EMP_USERID;
                                    //ManagerEmailId.value = managerDetails[0].MANAGER_EMAIL_ID;
                                     ManagerEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
                                  ManagerName.value = managerDetails[0].MANAGER_NAME;

                                },
                                error: function(error) {
                                    alert("error block=" + error);
                                }
                            });
                            modal.style.display = "none";
                        }
                    };

                    footerModal.appendChild(okButton);
                    //gifModal.style.display = "none";

                } else {
                    showErrorModal("Alert!", "No matching records found");

                    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formBody[0].benifitPlan[0]");
                   // modal1.style.display = "block";

                    departmentName.value = null;
                    emplRCD.value = null;
                    cbid.value = null;
                    departmentID.value = null;
                    lastName.value = null;
                    firstName.value = null;
                    emplID.value = null;
                    chrsID.value=null;
                    classification.value = null;
                    gifModal.style.display = "none";
                }
                
                // When the user clicks anywhere outside of the modal, close it
              
            }
        });

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
 * @function career_development_plan_career_development_plan.generated_chrsID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_chrsID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_emplID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_emplID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_dateInitiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_dateInitiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;	
var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiate = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = dateInitiate;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_departmentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_departmentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_departmentID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_departmentID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_emplRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_emplRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_classification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_classification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_cbid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_cbid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {

var filePath = supportDoc1.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc1.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
}

}
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            


  
  if(StageIndicator.value === null){
if(this.value == 1){

        if (employeeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            employeeDate.value = d;
            employeeDate.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    employeeSignature.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } else {
            employeeDate.enabled = false;
            employeeSignature.enabled = false;
        }
}else{
     employeeDate.value = null;
            employeeSignature.value = null;
}
}



        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_employeeSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_employeeSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_employeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_employeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_discussionCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_discussionCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_discussionCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_discussionCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

  
  if(StageIndicator.value === "ToManager"){
if(this.value == 1){

        if (supervisorDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            supervisorDate.value = d;
            supervisorDate.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    supervisorSignature.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } else {
            supervisorDate.enabled = false;
            supervisorSignature.enabled = false;
        }
}else{
     supervisorDate.value = null;
            supervisorSignature.value = null;
}
}



        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_discussedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_discussedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_supervisorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_supervisorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_supervisorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_supervisorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

  
  if(StageIndicator.value === "ToHR"){
if(this.value == 1){

        if (analystDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            analystDate.value = d;
            analystDate.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    analystSignature.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } else {
            analystDate.enabled = false;
            analystSignature.enabled = false;
        }
}else{
     analystDate.value = null;
            analystSignature.value = null;
}
}



        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_careerAdviseYes_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_careerAdviseYes_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_analystSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_analystSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_analystDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_analystDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("on top")	;
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue = myresopnse.userId;
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
 * @function career_development_plan_career_development_plan.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue = myresopnse.userId;
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
 * @function career_development_plan_career_development_plan.generated_GenerateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_GenerateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(shortTermsGoal.value === null && longTermGoals.value === null){
     showErrorModal("Alert!","Please describe short- and/or long-term goals");       	  
    }else if(education1.value === null){
       showErrorModal("Alert!","Please describe education needed to reach your career goals");          
    }else if(emplID.value === null && EmpCB.value === null){
  		 showErrorModal("Alert!","Please fill all the required fields");
}else{
      getPdf();
    }
  


function getPdf() {
   
   window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/career-development-plan/career-development-plan');
            jsonData.append('fileName',firstName.value+"_"+lastName.value+"("+emplID.value+")"+"_"+ Date.now());          
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
 * @function career_development_plan_career_development_plan.generated_saveguidedraft1578052124125_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_saveguidedraft1578052124125_click0 = function (scope) {
    with(this) {
        with(scope) {
             if(emplID.value !== null){
   formSavedStatus.value = "1";
        aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + emplID.value);
   
  }
handleDraftSave(this);


        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_submit1578052142813_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_submit1578052142813_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(shortTermsGoal.value === null && longTermGoals.value === null){
     showErrorModal("Alert!","Please describe short- and/or long-term goals");
      
  	  
    }else if(education1.value === null){
       showErrorModal("Alert!","Please describe education needed to reach your career goals");
      
      
    }else{
      if(emplID.value !== null){
   
        aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + emplID.value);
   
  }
      if(lastName.value !== null){
        EmailSubject.value = "Career Development Plan - "+lastName.value;
      }else{
        EmailSubject.value = "Career Development Plan";
      }
      
      /*ManagerEmailId.value = "swathi.kumari@thoughtfocus.com";
      EmpEmailId.value = "swathi.kumari@thoughtfocus.com";*/
      
     
      
      /*ManagerEmailId.value = "ram.singh@thoughtfocus.com";
      EmpEmailId.value = "ram.singh@thoughtfocus.com";*/
      
	 //ManagerEmailId.value = "yjayaram@fullerton.edu";
     //EmpEmailId.value = "yjayaram@fullerton.edu";
      
      guideBridge.submit();
    }

        }
	}
}
/**
 * @function career_development_plan_career_development_plan.generated_submit1578052142813_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
career_development_plan_career_development_plan.generated_submit1578052142813_click1 = function (scope) {
    with(this) {
        with(scope) {
            if(shortTermsGoal.value === null && longTermGoals.value === null){
     showErrorModal("Alert!","Please describe short- and/or long-term goals");
      
  	  
    }else if(education1.value === null){
       showErrorModal("Alert!","Please describe education needed to reach your career goals");
      
      
    }else{
      if(emplID.value !== null){
   
        aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + emplID.value);
   
  }
      if(lastName.value !== null){
        EmailSubject.value = "Career Development Plan - "+lastName.value;
      }else{
        EmailSubject.value = "Career Development Plan";
      }
      
      ManagerEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
      EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
    
      
	 //ManagerEmailId.value = "yjayaram@fullerton.edu";
     //EmpEmailId.value = "yjayaram@fullerton.edu";
      
      guideBridge.submit();
    }


        }
	}
}
