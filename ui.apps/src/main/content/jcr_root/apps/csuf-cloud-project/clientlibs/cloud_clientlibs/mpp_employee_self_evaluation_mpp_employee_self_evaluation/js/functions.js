/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            generateDOR.visible = false;
if (formSaveStatus.value !== "1") {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            workflow_initiator.value = userValue;
            logUser.value = userValue;
            EmpUserID.value = logUser.value;

            //var userID = 'kcase';

            var userID = userValue;

            //alert("userID="+userID);
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormData",
                data: {
                    userID: userID,
					action:"MPP_SELF_EMP_DETAILS"
                },
                dataType: 'json',

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length === 1) {
                        if (myresopnse[0].UNION_CD == "M80" || myresopnse[0].UNION_CD == "M98") {
                            EmpFirstNAme.value = myresopnse[0].FIRST_NAME;

                            EmpLastName.value = myresopnse[0].LAST_NAME;

                            DeptID.value = myresopnse[0].DEPTID;

                            DeptName.value = myresopnse[0].DEPTNAME;

                            EmpRCD.value = myresopnse[0].EMPL_RCD;

                            Classification.value = myresopnse[0].DESCR;

                            Range.value = myresopnse[0].GRADE;

                            EmpID.value = myresopnse[0].EMPLID;

                            CBID.value = myresopnse[0].UNION_CD;
                            EmployeeSupervisor.value = myresopnse[0].SUPERVISORNAME;

                            /* if (logUser.value !== null) {
                        var empUserIdVal = logUser.value;
                        var empEmail = empUserIdVal.concat('@').concat('fullerton.edu');
                        EmpEmailID.value = empEmail;
                    }*/
                            EmpEmailID.value = myresopnse[0].EMAILID;
                            empFullName.value = (EmpFirstNAme.value).concat(" " + EmpLastName.value);
                        } else {
                            saveguidedraft1563885586963.enabled = false;
                            showErrorModal("Alert!", "No matching records found. If you are not a MPP employee, please use the Staff Self(Pre-Performance) Evaluation form");

                        }
                        gifModal.style.display = "none";
                        // generateDOR.visible = true;
                    } else if (myresopnse.length > 1) {

                        gifModal.style.display = "none";
                        modal.style.display = "block";
                        //populate Hidden Fields

                        // AdministratorsFullName.value=myresopnse[0].ADMINFULLNAME; 
                        var col = [];

                        col.push("EMPLID");

                        col.push("LAST_NAME");

                        col.push("FIRST_NAME");

                        col.push("DEPTID");

                        col.push("DEPTNAME");

                        col.push("UNION_CD");
                        col.push("EMPL_RCD");
                        col.push("SUPERVISORNAME");



                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        
                        var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name", "CBID", "Empl RCD", "Supervisor Name"];
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
                                
                                deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                                DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;

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
                        okButton.value = "Ok";
                        okButton.onclick = function(event) {
                            
                            var n;
                            var rButtonStatus;
                            //var rButtonStatusFalse;
                            var rButtons = document.getElementsByClassName("rb");
                            for (n = 0; n < rButtons.length; n++) {
                                if (rButtons[n].checked === false) {

                                    rButtonStatus = false;
                                } else {

                                    evalNameHidden.value = myresopnse[n].SUPERVISORNAME;
                                    //evalTitleHidden.value = myresopnse[n].SupervisorTitle;
                                    fnameHidden.value = myresopnse[n].FIRST_NAME;
                                    lnameHidden.value = myresopnse[n].LAST_NAME;
                                    //EmpUserID.value = myresopnse[n].EMPUSERID;
                                    CBID.value = myresopnse[n].UNION_CD;
                                    Classification.value = myresopnse[n].DESCR;
                                    EmpID.value = myresopnse[n].EMPLID;
                                    Range.value = myresopnse[n].GRADE;
                                    EmpRCD.value = myresopnse[n].EMPL_RCD;
                                    EmpEmailID.value = myresopnse[n].EMAILID;                                    
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                alert("Please select the department");
                                modal.style.display = "block";
                            } else {
                                if (CBID.value == "M80" || CBID.value == "M98") {
                                    EmployeeSupervisor.value = evalNameHidden.value;
                                    //EvaluatorsTitle.value = evalTitleHidden.value;
                                    EmpFirstNAme.value = fnameHidden.value;
                                    EmpLastName.value = lnameHidden.value;
                                    DeptID.value = deptHidden.value;
                                    DeptName.value = DeptNameHidden.value;
                                    empFullName.value = (EmpFirstNAme.value).concat(" " + EmpLastName.value);
                                    //CBID.value = cbidHidden.value;
                                    // Classification.value = classificationHidden.value;
                                    // Range.value = RangeHidden.value;
                                    //EmplID.value = EmpIdHidden.value;
                                    //EmpRCD.value = empRCDHidden.value;
                                    modal.style.display = "none";
                                } else {
                                    EmpID.value = null;
                                    EmpRCD.value = null;
                                    CBID.value = null;
                                    Range.value = null;
                                    Classification.value = null;
                                    modal.style.display = "none";
                                    saveguidedraft1563885586963.enabled = false;

                                    showErrorModal("Alert!", "No matching records found. If you are not a MPP employee, please use the Staff Self(Pre-Performance) Evaluation form");

                                }
                            }
                        };
                        var footerModal = document.getElementById("modal_footer");

                        footerModal.appendChild(okButton);

                    } else {
                        // alert("No matching records found");
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
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
//generateDOR.visible = false;
if (formSaveStatus.value !== "1") {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            workflow_initiator.value = userValue;
            logUser.value = userValue;
            EmpUserID.value = logUser.value;

            //var userID = 'kcase';

            var userID = userValue;

            //alert("userID="+userID);
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormDataCHRSID",
                data: {
                    userID: userID,
					action:"MPP_SELF_EMP_DETAILS"
                },
                dataType: 'json',

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                     debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length === 1) {
                        if (myresopnse[0].UNION_CD == "M80" || myresopnse[0].UNION_CD == "M98") {
                            EmpFirstNAme.value = myresopnse[0].FIRST_NAME;

                            EmpLastName.value = myresopnse[0].LAST_NAME;

                            DeptID.value = myresopnse[0].DEPTID;

                            DeptName.value = myresopnse[0].DEPTNAME;

                            EmpRCD.value = myresopnse[0].EMPL_RCD;

                            Classification.value = myresopnse[0].DESCR;

                            Range.value = myresopnse[0].GRADE;

                            EmpID.value = myresopnse[0].EMPLID; 
                            chrsId.value = myresopnse[0].CSU_CHRS_ID;
                            CBID.value = myresopnse[0].UNION_CD;
                            EmployeeSupervisor.value = myresopnse[0].SUPERVISORNAME;

                            /* if (logUser.value !== null) {
                        var empUserIdVal = logUser.value;
                        var empEmail = empUserIdVal.concat('@').concat('fullerton.edu');
                        EmpEmailID.value = empEmail;
                    }*/
                       //     EmpEmailID.value = myresopnse[0].EMAILID;
                          EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
                            empFullName.value = (EmpFirstNAme.value).concat(" " + EmpLastName.value);
                        } else {
                            saveguidedraft1563885586963.enabled = false;
                            showErrorModal("Alert!", "No matching records found. If you are not a MPP employee, please use the Staff Self(Pre-Performance) Evaluation form");

                        }
                        gifModal.style.display = "none";
                        // generateDOR.visible = true;
                    } else if (myresopnse.length > 1) {

                        gifModal.style.display = "none";
                        modal.style.display = "block";
                        //populate Hidden Fields

                        // AdministratorsFullName.value=myresopnse[0].ADMINFULLNAME; 
                        var col = [];
                        col.push("CSU_CHRS_ID");
                        col.push("EMPLID");

                        col.push("LAST_NAME");

                        col.push("FIRST_NAME");

                        col.push("DEPTID");

                        col.push("DEPTNAME");

                        col.push("UNION_CD");
                        col.push("EMPL_RCD");
                        col.push("SUPERVISORNAME");



                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        
                        var headings = ["", "Emp ID", "CWID", "Last Name", "First Name", "Department Id", "Department Name", "CBID", "Empl RCD", "Supervisor Name"];
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
                                
                                deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                                DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;

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
                        okButton.value = "Ok";
                        okButton.onclick = function(event) {
                            
                            var n;
                            var rButtonStatus;
                            //var rButtonStatusFalse;
                            var rButtons = document.getElementsByClassName("rb");
                            for (n = 0; n < rButtons.length; n++) {
                                if (rButtons[n].checked === false) {

                                    rButtonStatus = false;
                                } else {

                                    evalNameHidden.value = myresopnse[n].SUPERVISORNAME;
                                    //evalTitleHidden.value = myresopnse[n].SupervisorTitle;
                                    fnameHidden.value = myresopnse[n].FIRST_NAME;
                                    lnameHidden.value = myresopnse[n].LAST_NAME;
                                    //EmpUserID.value = myresopnse[n].EMPUSERID;
                                    CBID.value = myresopnse[n].UNION_CD;
                                    Classification.value = myresopnse[n].DESCR;
                                    EmpID.value = myresopnse[n].EMPLID;
                                    chrsId.value = myresopnse[n].CSU_CHRS_ID;
                                    Range.value = myresopnse[n].GRADE;
                                    EmpRCD.value = myresopnse[n].EMPL_RCD;
                                 //   EmpEmailID.value = myresopnse[n].EMAILID; 
                                 EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";                                   
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                alert("Please select the department");
                                modal.style.display = "block";
                            } else {
                                if (CBID.value == "M80" || CBID.value == "M98") {
                                    EmployeeSupervisor.value = evalNameHidden.value;
                                    //EvaluatorsTitle.value = evalTitleHidden.value;
                                    EmpFirstNAme.value = fnameHidden.value;
                                    EmpLastName.value = lnameHidden.value;
                                    DeptID.value = deptHidden.value;
                                    DeptName.value = DeptNameHidden.value;
                                    empFullName.value = (EmpFirstNAme.value).concat(" " + EmpLastName.value);
                                    //CBID.value = cbidHidden.value;
                                    // Classification.value = classificationHidden.value;
                                    // Range.value = RangeHidden.value;
                                    //EmplID.value = EmpIdHidden.value;
                                    //EmpRCD.value = empRCDHidden.value;
                                    modal.style.display = "none";
                                } else {
                                    EmpID.value = null;
                                    chrsId.value = null;
                                    EmpRCD.value = null;
                                    CBID.value = null;
                                    Range.value = null;
                                    Classification.value = null;
                                    modal.style.display = "none";
                                    saveguidedraft1563885586963.enabled = false;

                                    showErrorModal("Alert!", "No matching records found. If you are not a MPP employee, please use the Staff Self(Pre-Performance) Evaluation form");

                                }
                            }
                        };
                        var footerModal = document.getElementById("modal_footer");

                        footerModal.appendChild(okButton);

                    } else {
                        // alert("No matching records found");
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
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_chrsId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_chrsId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = true;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_chrsId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var cwidVal = this.value;

var deptid = DeptID.value;
$.ajax({

type: 'GET', 

url:"/bin/getEvaluationFormDataCHRSID",

data: {cwid: cwidVal,
      deptID:deptid,
       action:"MPP_MANAGER_DATA"
      },

dataType: 'json',
 
success: function(myresopnse){
  debugger;
  if(myresopnse.length !== ""){
SupervisorUserID.value=myresopnse[0].MANAGER_EMP_USERID;
/*if(SupervisorUserID.value !== null){
var userIdVal = SupervisorUserID.value;
var userEmail = SupervisorUserID.value.concat('@').concat('fullerton.edu');
SupervisorEmailID.value=userEmail;
}*/
 // SupervisorEmailID.value=myresopnse[0].MANAGER_EMAIL_ID;  
    SupervisorEmailID.value="soumya.ravindra@thoughtfocus.com";

  }
 

}
});

        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var cwidVal = this.value;

var deptid = DeptID.value;
$.ajax({

type: 'GET', 

url:"/bin/getEvaluationFormData",

data: {cwid: cwidVal,
      deptID:deptid,
       action:"MPP_MANAGER_DATA"
      },

dataType: 'json',
 
success: function(myresopnse){
  debugger;
  if(myresopnse.length !== ""){
SupervisorUserID.value=myresopnse[0].MANAGER_EMP_USERID;
/*if(SupervisorUserID.value !== null){
var userIdVal = SupervisorUserID.value;
var userEmail = SupervisorUserID.value.concat('@').concat('fullerton.edu');
SupervisorEmailID.value=userEmail;
}*/
 // SupervisorEmailID.value=myresopnse[0].MANAGER_EMAIL_ID;  
    SupervisorEmailID.value="soumya.ravindra@thoughtfocus.com";

  }
 

}
});

        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpFirstNAme_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpFirstNAme_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_CBID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_CBID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_Classification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_Classification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_Range_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_Range_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmployeeSupervisor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmployeeSupervisor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_ReviewPeriodFrom_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_ReviewPeriodFrom_init0 = function (scope) {
    with(this) {
        with(scope) {
            
var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;
var d = (lastYear+"-"+"5"+"-"+"16");
this.value = d;
}else{
this.value = dateValue;
}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_ReviewPeriodTo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_ReviewPeriodTo_init0 = function (scope) {
    with(this) {
        with(scope) {
            /* Add your own JavaScript here. */
var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;
var d = (curyear+"-"+"5"+"-"+"15");
this.value = d;
}else{
this.value = dateValue;
}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_panel1564554082054_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_panel1564554082054_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;
  logUser.value = userValue;
  EmpUserID.value = logUser.value;
  //SupervisorUserID.value = userValue;
  var mgrId = SupervisorUserID.value;
  //var mgrEmail = mgrId.concat('@').concat('fullerton.edu');
  //var mgrEmail = "csuf@fullerton.edu";
  var mgrEmail = "soumya.ravindra@thoughtfocus.com";
 // SupervisorEmailID.value=mgrEmail;

},
  error: function(error){
alert("error block="+error);
}
});

        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
   
 var filePath = supportDoc1.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc1.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDDF files are allowed");
}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

 var filePath = supportDoc2.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc2.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
 var filePath = supportDoc3.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc3.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc3.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_supportDoc4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

 var filePath = supportDoc4.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc4.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc4.fileAttachment.value = null;
  
showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
 $.ajax({

type: 'GET', 

url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
dataType: 'json',
success: function(myresopnse){
  var userValue = myresopnse[0].EMP_NAME;
   EvaluatorSign.value = userValue;
  EvaluatorDate.value = myresopnse[0].SERVER_DATE;
},
  error: function(error){
alert("error block="+error);
}
});
 
   EvaluatorSign.enabled = false;
  EvaluatorDate.enabled = false;
if(EvaluatorDate.value === null){
/*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
EvaluatorDate.value = d;*/
  EvaluatorSign.enabled = false;
   EvaluatorDate.enabled = false;
}
else{EvaluatorDate.enabled = false;
    EvaluatorSign.enabled = false;
      EvaluatorDate.enabled = false;
    }
}else{
  EvaluatorSign.value = null;
      EvaluatorDate.value = null;
}

//}
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EvaluatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EvaluatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EvaluatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_EvaluatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated__valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated__valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

   if(EvaluatorDate.value === null)
  {
   var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  
  EvaluatorDate.value=TzoneDate;
 
    EvaluatorDate.enabled = false;

   // EvaluatorsSignature.value = "cmstraining23";
    EvaluatorSign.value = logUser.value;
    
    EvaluatorSign.enabled = false;
  }
  else{
  EvaluatorSign.value = logUser.value;
   //EvaluatorsSignature.value = "cmstraining23";
    EvaluatorSign.enabled = false;
  }
}


        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visble = false;
        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (EmpID.value !== null && Evaluation1.value !== null && Evaluation2.value !== null && Evaluation3.value !== null && EmpCB.value !== null) {
    GeneratePdfStep.value = "Draft";
    getPdf();
}else{
  var pdfEerrorModal = document.getElementById('pdfErrorPopup');
debugger;
    var pdfPara = document.getElementById("pdfPara");
    pdfPara.innerHTML = "";
    pdfPara.innerHTML = "Please fill in the required fields";
    var pdfErrorBody = document.getElementById('pdfErrorData');
    pdfErrorBody.innerHTML = "";
    pdfErrorBody.appendChild(pdfPara);
    var footerpdfEerrorModal = document.getElementById("pdfErrorPopup-footer");
    var pdfErrorokButton = document.createElement("input");
    pdfErrorokButton.type = "button";
    pdfErrorokButton.setAttribute("class", "okBtn");
    //pdfErrorokButton.id = "okBtn";
    pdfErrorokButton.value = "Ok";
    pdfErrorokButton.onclick = function(event) {
        pdfEerrorModal.style.display = "none";
    };
    footerpdfEerrorModal.appendChild(pdfErrorokButton);
   pdfEerrorModal.style.display = "block";
  
   /*if(checkDataExist.value == "true"){
       pdfEerrorModal.style.display = "none";
    }else{
       pdfEerrorModal.style.display = "block";
    }*/
   
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/mpp-employee-self-evaluation/mpp-employee-self-evaluation');
            jsonData.append('fileName', EmpFirstNAme.value + "_" + EmpLastName.value + "(" + EmpID.value + ")" + "_" + Date.now());          
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
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_saveguidedraft1563885586963_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_saveguidedraft1563885586963_click0 = function (scope) {
    with(this) {
        with(scope) {
            var saveConfirmationModal = document.getElementById('saveErrorPopup');
debugger;
/*var saveFooterModal = document.getElementById("saveErrorPopup-footer");
saveFooterModal.innerHTML = "";
var saveYesButton = document.createElement("input");
saveYesButton.type = "button";
saveYesButton.id = "yesBtnsave";
saveYesButton.style.cssFloat = "right";
saveYesButton.style.marginRight = "4px";
saveYesButton.style.width = "70px";
saveYesButton.value = "Yes";
saveYesButton.onclick = function(event) {
    saveConfirmationModal.style.display = "none";
    checkDataExist.value = "false";
};
saveFooterModal.appendChild(saveYesButton);
var saveNoButton = document.createElement("input");
saveNoButton.type = "button";
saveNoButton.id = "noBtnsave";
saveNoButton.style.cssFloat = "right";
saveNoButton.style.marginRight = "10px";
saveNoButton.style.width = "70px";
saveNoButton.value = "No";
saveNoButton.onclick = function(event) {
    saveConfirmationModal.style.display = "none";
    checkDataExist.value = "true";
};
saveFooterModal.appendChild(saveNoButton);



if (checkDataExist.value == "true") {
    confirmationModal.style.display = "block";

} else {
    confirmationModal.style.display = "none";
   formSaveStatus.value = "1";
handleDraftSave(this);
}*/

formSaveStatus.value = "1";
if(EmpID.value !== null){
      //mppDescCWID.value = EmpFirstNAme.value +" " + EmpLastName.value+" "+EmpID.value;
   aftiaDescCWID.value = EmpFirstNAme.value +" " + EmpLastName.value+" "+EmpID.value;
    }
handleDraftSave(this);

        }
	}
}
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_submit1563885580256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_submit1563885580256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var confirmationModal = document.getElementById('submitErrorPopup');

var footerModal = document.getElementById("submitErrorPopup-footer");
footerModal.innerHTML = "";
var yesButton = document.createElement("input");
yesButton.type = "button";
yesButton.id = "yesBtn";
yesButton.style.cssFloat = "right";
yesButton.style.marginRight = "4px";
yesButton.style.width = "70px";
yesButton.value = "Yes";
yesButton.onclick = function(event) {
    confirmationModal.style.display = "none";
    checkDataExist.value = "false";
};
footerModal.appendChild(yesButton);
var noButton = document.createElement("input");
noButton.type = "button";
noButton.id = "noBtn";
noButton.style.cssFloat = "right";
noButton.style.marginRight = "10px";
noButton.style.width = "70px";
noButton.value = "No";
noButton.onclick = function(event) {
    confirmationModal.style.display = "none";
    checkDataExist.value = "true";
};
footerModal.appendChild(noButton);


//comment this line for UAT/Prod release
//EmpEmailID.value = "yjayaram@fullerton.edu";
//SupervisorEmailID.value = "yjayaram@fullerton.edu";
//Uncomment from 34-40 for UAT release 
/*
if(SupervisorUserID.value == "dforgues"){
  SupervisorEmailID.value="mtapper@fullerton.edu";
}
if(logUser.value == "dforgues"){
  SupervisorEmailID.value="mtapper@fullerton.edu";
}
*/
EmpEmailID.value = "soumya.ravindra@thoughtfocus.com";
SupervisorEmailID.value = "soumya.ravindra@thoughtfocus.com";

//Comment these 3 lines for IUAT release
//else{
//SupervisorEmailID.value="nvadlakunta@fullerton.edu";
//}
if (checkDataExist.value == "true") {
    confirmationModal.style.display = "block";

} else {
    confirmationModal.style.display = "none";
  var dateString = new Date().toLocaleString("en-US", {
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  if(SupervisorUserID.value === null || evalNameHidden === null){
    showErrorModal("Alert!","No matching Supervisor found");
  }/*else if(Date.parse(ReviewPeriodFrom.value)>Date.parse(d) || Date.parse(ReviewPeriodTo.value)>Date.parse(d)){
      showErrorModal("Alert!","A Performance Evaluation can't be initiated for a future date.");
    }*/else{
    if(EmpID.value !== null){
      mppDescCWID.value = EmpFirstNAme.value +" " + EmpLastName.value+" "+EmpID.value;
    }
    guideBridge.submit();
  }
}
        }
	}
}
