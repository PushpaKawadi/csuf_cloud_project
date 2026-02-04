/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var userID = "rpurohit";
  
    $.ajax({
        type: 'GET',
        url: "/bin/getCatastrophicLeaveRequest",
        data: {
            //cwid: cwid123,
            userID: userID
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
           // var modal = document.getElementById('myModal');
            //var span = document.getElementsByClassName("close")[0];
            debugger;
            if (myresopnse.length === 1) {
              
          
                debugger;
                DepartmentName.value = myresopnse[0].DEPTNAME;
                EMPLRCD.value = myresopnse[0].EMPL_RCD;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                DepartmentID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EMPLID.value = myresopnse[0].EMPLID;
                
            }
        }
    });
          
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Perm_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Perm_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Prob.value = "";
  Temp.value = "";
  LeaveofAbsence.value = "";
  Type.value  = "";
  Type.enabled  = false;
}
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Prob_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Prob_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Perm.value =  "";
  //Prob.value = "";
  Temp.value = "";
  LeaveofAbsence.value = "";
  Type.value  = "";
  Type.enabled  = false;
}
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Temp_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Temp_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Perm.value =  "";
  Prob.value = "";
  //Temp.value = "";
  LeaveofAbsence.value = "";
  Type.value  = "";
  Type.enabled  = false;
}
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_LeaveofAbsence_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_LeaveofAbsence_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Perm.value =  "";
  Prob.value = "";
  Temp.value = "";
  //LeaveofAbsence.value = "";
  Type.enabled  = true;
}
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Type_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Type_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_EmplId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_EmplId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var cwid = this.value;
if(cwid !== null  && emplid_lookup.value != cwid){
  var gifModal = document.getElementById('gifModal');
              gifModal.style.display = "block";
        $.ajax({
            type: 'GET',
            url: "/bin/getLayoffChecklist",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                
                if (myresopnse.length === 1) {
				emplid_lookup.value = cwid;
               FirstName.value=myresopnse[0].FIRST_NAME;
               LastName.value=myresopnse[0].LAST_NAME;
               Timebase.value = myresopnse[0].STD_HOURS;
               Department.value =myresopnse[0].DEPTNAME;
               Classification.value = myresopnse[0].DESCR;
               Range.value = myresopnse[0].GRADE;
               CBID.value = myresopnse[0].UNION_CD;
               SCOPositionNo.value = myresopnse[0].SCOPOSNUM;
               DeptId.value = myresopnse[0].DEPTID;
               //AppropriateAdmin.value = myresopnse[0].SUPERNAME;
               MPPSup.value = myresopnse[0].SUPERNAME;
             
               
                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {
					emplid_lookup.value = cwid;
                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    //col.push("EMPLID");
                    
                    col.push("FIRST_NAME");

                    col.push("LAST_NAME");
                  
                  col.push("DEPTNAME");
                  
                   col.push("DEPTID");
                  
                   col.push("DESCR");

                    //col.push("DEPTID");

                    //col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    //var headings = ["", "Emp ID", "Last Name", "First Name", "c", "Department Name"];
                    var headings = ["", "First_Name", "Last_Name", "Department_Name", "Department_ID", "Classification"];
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

							 FirstName.value=myresopnse[n].FIRST_NAME;
               LastName.value=myresopnse[n].LAST_NAME;
               Timebase.value = myresopnse[n].STD_HOURS;
               Department.value =myresopnse[n].DEPTNAME;
               Classification.value = myresopnse[n].DESCR;
               Range.value = myresopnse[n].GRADE;
               CBID.value = myresopnse[n].UNION_CD;
               SCOPositionNo.value = myresopnse[n].SCOPOSNUM;
               DeptId.value = myresopnse[n].DEPTID;
               //AppropriateAdmin.value = myresopnse[n].SUPERNAME;
               MPPSup.value = myresopnse[n].SUPERNAME;
             
                           
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
                    //alert("No matching records found");
                showErrorModal("Alert", "No matching records found");
             
                	 /*DeptName.value = null;
                    BargainingUnit.value = null;
                    PhoneExt.value = null;
                    DeptID.value = null;
                    LastName.value = null;
                    FirstName.value =null;
                    EmpStatus.value=null;
                	Email.value = null;*/
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
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_DateInitiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_DateInitiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

   var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
                  dateString = dateString.replaceAll(",","");
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  this.value = d;

        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Classification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Classification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Range_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Range_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_CBID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_CBID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_SCOPositionNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_SCOPositionNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_DeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_DeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //this.enabled = false;

var empId = EmplId.value;
var depId = this.value;
if(empId !== null && depId !== null){
$.ajax({
	type: 'GET',
	url: "/bin/getLayoffAppAdmin",
	data: {
		depId: depId,
		cwid: empId
	},
	dataType: 'json',
	success: function(managerDetails) {
	 AppropriateAdmin.value = managerDetails[0].ADMIN_EMP_NAME;  	
     var adminEmail = managerDetails[0].ADMIN_EMP_USERID;
	 AdminExt.value = adminEmail.concat("@FULLERTON.EDU");
     var supEmail = managerDetails[0].MANAGER_EMP_USERID;
	 MPPExt.value = supEmail.concat("@FULLERTON.EDU");

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
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Timebase_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_Timebase_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_AppropriateAdmin_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_AppropriateAdmin_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //ReEmpYes.value = "";
  ReEmpNo.value = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  ReEmpYes.value = "";
  //ReEmpNo.value = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_panel1587123018548_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_panel1587123018548_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
if(cwid !== null){
        $.ajax({
            type: 'GET',
            url: "/bin/getPersonnelActiveNotice",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

               FirstName.value=myresopnse[0].FIRST_NAME;
               LastName.value=myresopnse[0].LAST_NAME;
               MiddleInitial.value = myresopnse[0].MIDDLE_NAME;
               EmpRCD.value = myresopnse[0].EMPL_RCD;
               CurrentCMSNo.value = myresopnse[0].POSITION_NBR;
                CurrentAgency.value = myresopnse[0].CSU_SCO_AGENCY;
                CurrentReptUnit.value = myresopnse[0].CSU_UNIT;
                CurrentClassCode.value = myresopnse[0].JOBCODE;
                CurrentTimeBase.value = myresopnse[0].STD_HOURS;
                CurrentDivision.value = myresopnse[0].FUL_DIVISION_NAME;
                CurrentMPPSupName.value = myresopnse[0].SUPERVISOR_NAME;
                CurrentFTMonthlySalary.value  = myresopnse[0].MONTHLY_RT;
                 CurrentActualSalary.value= myresopnse[0].MONTHLY_RT;
                  
                  CurrentCBID.value= myresopnse[0].UNION_CD;
                  CurrentDept.value= myresopnse[0].DEPTNAME;
                  
                   CurrentCollege.value= myresopnse[0].FUL_COLLEGE_NAME;
                   CurrentRangeCode.value= myresopnse[0].GRADE;
                  CurrentDeptID.value= myresopnse[0].DEPTID;
                  
                  CurrentClassificationTitle.value= myresopnse[0].DESCR;
                  
                  FTE.value = myresopnse[0].FTE;
                  

                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    //col.push("EMPLID");

                    col.push("LAST_NAME");

                    col.push("FIRST_NAME");
                  
                  col.push("MIDDLE_NAME");
                  
                   col.push("CSU_SCO_AGENCY");
                  
                   col.push("CSU_UNIT");

                    //col.push("DEPTID");

                    //col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    //var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                    var headings = ["", "Last Name", "First Name", "Middle Initial", "Agency", "Unit"];
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

							FirstName.value=myresopnse[n].FIRST_NAME;
               LastName.value=myresopnse[n].LAST_NAME;
               MiddleInitial.value = myresopnse[n].MIDDLE_NAME;
               EmpRCD.value = myresopnse[n].EMPL_RCD;
               CurrentCMSNo.value = myresopnse[n].POSITION_NBR;
                CurrentAgency.value = myresopnse[n].CSU_SCO_AGENCY;
                CurrentReptUnit.value = myresopnse[n].CSU_UNIT;
                CurrentClassCode.value = myresopnse[n].JOBCODE;
                CurrentTimeBase.value = myresopnse[n].STD_HOURS;
                CurrentDivision.value = myresopnse[n].FUL_DIVISION_NAME;
                CurrentMPPSupName.value = myresopnse[n].SUPERVISOR_NAME;
                CurrentFTMonthlySalary.value  = myresopnse[n].MONTHLY_RT;
                 CurrentActualSalary.value= myresopnse[n].MONTHLY_RT;
                  
                  CurrentCBID.value= myresopnse[n].UNION_CD;
                  CurrentDept.value= myresopnse[n].DEPTNAME;
                  
                   CurrentCollege.value= myresopnse[n].FUL_COLLEGE_NAME;
                   CurrentRangeCode.value= myresopnse[n].GRADE;
                  CurrentDeptID.value= myresopnse[n].DEPTID;
                  
                  CurrentClassificationTitle.value= myresopnse[n].DESCR;
                               FTE.value = myresopnse[n].FTE;
							
                            /*DeptName.value = myresopnse[n].DEPTNAME;
							BargainingUnit.value = myresopnse[n].UNION_CD;
							PhoneExt.value = myresopnse[n].EXTENSION;
							DeptID.value = myresopnse[n].DEPTID;
							LastName.value = myresopnse[n].LAST_NAME;
							FirstName.value = myresopnse[n].FIRST_NAME;
                            EmpStatus.value=myresopnse[n].STATUS;
                            logUser.value =myresopnse[n].USERID;
                            var userIDVal  = myresopnse[n].USERID;
                			Email.value = userIDVal.concat("@exchange.fullerton.edu");*/
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
                    alert("No matching records found");
                
                	 /*DeptName.value = null;
                    BargainingUnit.value = null;
                    PhoneExt.value = null;
                    DeptID.value = null;
                    LastName.value = null;
                    FirstName.value =null;
                    EmpStatus.value=null;
                	Email.value = null;*/
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
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
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
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_VacantPosition_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_VacantPosition_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //this.value = "";
  OccupiedBy.value  = "";
  OccupiedByValue.enabled = false;
  OccupiedByValue.value = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_OccupiedBy_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_OccupiedBy_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  VacantPosition.value = "";
  OccupiedByValue.enabled = true;
  //OccupiedBy.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_OccupiedByValue_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_OccupiedByValue_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_RetreatYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_RetreatYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //RetreatYes.value = "";
  RetreatNo.value  = "";
}


        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_RetreatNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_RetreatNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  RetreatYes.value = "";
  //RetreatNo.value  = "";
}


        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ExerciseYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ExerciseYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //ExerciseYes.value = "";
  ExerciseNo.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ExerciseNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ExerciseNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  ExerciseYes.value = "";
  //ExerciseNo.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_VacantYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_VacantYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //VacantYes.value = "";
  VacantNo.value  = "";
  IfNoOccupiedBy.enabled = false;
  IfNoOccupiedBy.value = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_VacantNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_VacantNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  VacantYes.value = "";
  //VacantNo.value  = "";
  IfNoOccupiedBy.enabled = true;
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_IfNoOccupiedBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_IfNoOccupiedBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled =  false;
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpAccepted1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpAccepted1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //ReEmpAccepted1.value = "";
  ReEmpDeclined1.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpDeclined1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpDeclined1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  ReEmpAccepted1.value = "";
  //ReEmpDeclined1.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpAccepted2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpAccepted2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //ReEmpAccepted2.value = "";
  ReEmpDeclined2.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpDeclined2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_ReEmpDeclined2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  ReEmpAccepted2.value = "";
  //ReEmpDeclined2.value  = "";
}



        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (EmplId.value !== null && FirstName.value !== null && LastName !== null) {
  submitFlag=0;
      
 } else{
   
   var modal = document.getElementById("errorPopup");
       var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Empl ID, First Name, Last Name";
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
    submitFlag=1;
    modal.style.display = "block";
    
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
            jsonData.append('formPath', '/content/forms/af/layoff-reassignment-checklist/layoff-reassignment-checklist');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());          
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
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);

if(EmplId.value !== null){
  formSavedStatus.value = "1";
  if(EmplId.value !== null){
  aftiaDescCWID.value = FirstName.value +" "+ LastName.value + " "+ EmplId.value ;
}
  handleDraftSave(this);
}else{
  if(EmplId.value !== null){
  aftiaDescCWID.value = FirstName.value +" "+ LastName.value + " "+ EmplId.value ;
}
    handleDraftSave(this);
}
        }
	}
}
/**
 * @function layoff_reassignment_checklist_layoff_reassignment_checklist.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
layoff_reassignment_checklist_layoff_reassignment_checklist.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplId.value !== null){
 aftiaDescCWID.value = FirstName.value +" "+ LastName.value + " "+ EmplId.value ;
}
guideBridge.submit();


        }
	}
}
