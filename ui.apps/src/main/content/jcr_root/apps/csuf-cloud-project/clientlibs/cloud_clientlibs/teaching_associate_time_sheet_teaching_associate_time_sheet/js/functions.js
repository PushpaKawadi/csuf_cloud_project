/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  FacultySignPanel.visible = false;
  DeptChairSignPanel.visible = false;  
  PayrollPanel.visible = false;
}
if(StageIndicator.value == "ToRequestor"){
  BasicDetails.enabled=true;
  Timesheet.enabled=true;
  if(EmpCB.value=="1"){
    FacultySignPanel.visible=true;
    FacultySignPanel.enabled=false;
  }else{
    FacultySignPanel.visible=false;
  }
  if(ChairCB.value=="1"){
    DeptChairSignPanel.visible=true;
    DeptChairSignPanel.enabled=false;
  }else{
    DeptChairSignPanel.visible=false;
  }
  if(PayrollCB.value=="1"){
    PayrollPanel.visible=true;
    PayrollPanel.enabled=false;
  }else{
    PayrollPanel.visible=false;
  }
}

if(StageIndicator.value == "ToFaculty"){
  BasicDetails.enabled = false;
  Timesheet.enabled = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  DeptChairSignPanel.visible = false;  
  PayrollPanel.visible = false;
}

if(StageIndicator.value == "ToChair"){
  BasicDetails.enabled =false;
  Timesheet.enabled = false;  
  FacultySignPanel.visible = true;
  FacultySignPanel.enabled = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  DeptChairSignPanel.visible = true;
  PayrollPanel.visible = false;
}
if(StageIndicator.value == "ToPayroll"){
  BasicDetails.enabled =false;
  Timesheet.enabled = false;  
  FacultySignPanel.visible = true;
  FacultySignPanel.enabled = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  DeptChairSignPanel.visible = true;
  DeptChairSignPanel.enabled = false;
  PayrollPanel.visible = true;
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";


    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.Status == "Success") {
                var userValue = myresponse.userId;
                workflow_initiator.value = userValue;


                $.ajax({
                    type: 'GET',
                    url: "/bin/getSubstituteFacultyData",
                    data: {
                        action: "SUB_FACULTY_USER_DATA",
                        userID: userValue
                    },
                    dataType: 'json',
                    success: function(myresopnse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
                            EmplId.value = myresopnse[0].EMPLID;
                            ReportingNumber.value = myresopnse[0].CSU_UNIT;
                            CMSPosNo.value = myresopnse[0].POSITION_NBR;
                            FirstName.value = myresopnse[0].FIRST_NAME;
                            LastName.value = myresopnse[0].LAST_NAME;
                            DeptId.value = myresopnse[0].DEPTID;
                            EmpUnionCD.value = myresopnse[0].UNION_CD;
                            EmpEmail.value = myresopnse[0].EMAILID;
                            EmpUserId.value = userValue;
                            EmpName.value = FirstName.value + " " + LastName.value;
                            gifModal.style.display = "none";
                            modal.style.display = "none";

                        } else if (myresopnse.length > 1) {
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
                                         EmplId.value = myresopnse[n].EMPLID;
                                          ReportingNumber.value = myresopnse[n].CSU_UNIT;
                                          CMSPosNo.value = myresopnse[n].POSITION_NBR;
                                          FirstName.value = myresopnse[n].FIRST_NAME;
                                          LastName.value = myresopnse[n].LAST_NAME;
                                          DeptId.value = myresopnse[n].DEPTID;
                                          EmpUnionCD.value = myresopnse[n].UNION_CD;
                                        EmpEmail.value = myresopnse[n].EMAILID;
                                        EmpUserId.value = userValue;
                                        EmpName.value = FirstName.value + " " + LastName.value;
                                   
                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    alert("Please select the department");
                                    modal.style.display = "block";
                                } else {

                                    modal.style.display = "none";
                                }
                            };
                            // footerModal = document.getElementById("modal_footer");
                            footerModal.appendChild(okButton);
                            // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));

                        } else {
                            //alert("No matching records found");
                            var modalError = document.getElementById("errorPopup");
                            var para = document.getElementById("para");
                            para.innerHTML = "";
                            para.innerHTML = "No matching records found";
                            var errorBody = document.getElementById('errorData');
                            errorBody.innerHTML = "";
                            errorBody.appendChild(para);
                            var footerModalError = document.getElementById("errorPopup-footer");
                            var okButtonError = document.createElement("input");
                            okButtonError.type = "button";
                            okButtonError.setAttribute("class", "okBtn");
                            //okButtonError.id = "okBtn";
                            okButtonError.value = "Ok";
                            okButtonError.onclick = function(event) {
                                modalError.style.display = "none";
                            };
                            footerModalError.appendChild(okButtonError);
                            modalError.style.display = "block";


                            gifModal.style.display = "none";
                        }
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
                                alert("Please select the department");
                                modal.style.display = "block";
                            } else {

                                alert("Please select the department");
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
        },
        error: function(error) {
            alert("error block=" + error);
            loadingText.visible = false;
        }
    });
}
if(StageIndicator.value === null){
$.ajax({
type: 'GET',
url:"/bin/getEvaluationFormData",
data: {action: "EMP_DETAILS"},
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse[0].EMP_NAME;
RequestorName.value = userValue;
DeptCooUserId.value = myresopnse[0].EMPUSERID;
DeptCooEmail.value = myresopnse[0].EMAILID;
DeptCooName.value = userValue;
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
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_guideRootPanel_init2 = function (scope) {
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
DeptCooUserId.value = myresopnse[0].EMPUSERID;
DeptCooEmail.value = myresopnse[0].EMAILID;
DeptCooName.value = userValue;
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
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmplId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmplId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    debugger;

    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.Status == "Success") {
                var userValue = myresponse.userId;
                // workflow_initiator.value = userValue;
                var cwid = EmplId.value;

                $.ajax({
                    type: 'GET',
                    url: "/bin/getSubstituteFacultyData",
                    data: {
                        action: "SUB_FACULTY_CWID_LOOKUP",
                        cwid: cwid
                    },
                    dataType: 'json',
                    success: function(myresponse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        if (myresponse.length === 1 && myresponse[0].EMPLID !== undefined) {
                            //EmplId.value = myresponse[0].EMPLID;
                            //  ReportingNumber.value = myresponse[0].CSU_UNIT;
                            //   CMSPosNo.value = myresponse[0].POSITION_NBR;
                            FirstName.value = myresponse[0].FIRST_NAME;
                            LastName.value = myresponse[0].LAST_NAME;
                            DeptId.value = myresponse[0].DEPTID;
                            EmpEmail.value = myresponse[0].EMAILID;
                            EmpUserId.value = myresponse[0].EMP_USERID;
                           Department.value = myresponse[0].DEPTNAME;
                            EmpName.value = FirstName.value + " " + LastName.value;
                            EmpUnionCD.value = myresponse[0].UNION_CD;
                            //getManager(EmplId.value,DeptId.value,EmpUnionCD.value);
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
                                button.onclick = function(event) {

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

                                var n;
                                var rButtonStatus;
                                //var rButtonStatusFalse;
                                var rButtons = document.getElementsByClassName("rb");
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {
                                        //EmplId.value = myresponse[n].EMPLID;
                                        // ReportingNumber.value = myresponse[n].CSU_UNIT;
                                        //  CMSPosNo.value = myresponse[n].POSITION_NBR;
                                        FirstName.value = myresponse[n].FIRST_NAME;
                                        LastName.value = myresponse[n].LAST_NAME;
                                        DeptId.value = myresponse[n].DEPTID;
                                        EmpEmail.value = myresponse[n].EMAILID;
                                        EmpUserId.value = myresponse[n].EMP_USERID;
                                        EmpName.value = FirstName.value + " " + LastName.value;
                                        EmpUnionCD.value = myresponse[n].UNION_CD;
                                       Department.value = myresponse[n].DEPTNAME;
                                        //getManager(EmplId.value,DeptId.value,EmpUnionCD.value);

                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    alert("Please select the department");
                                    modal.style.display = "block";
                                } else {

                                    modal.style.display = "none";
                                }
                            };
                            // footerModal = document.getElementById("modal_footer");
                            footerModal.appendChild(okButton);
                            // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));

                        } else {
                            //alert("No matching records found");
                            var modalError = document.getElementById("errorPopup");
                            var para = document.getElementById("para");
                            para.innerHTML = "";
                            para.innerHTML = "No matching records found";
                            var errorBody = document.getElementById('errorData');
                            errorBody.innerHTML = "";
                            errorBody.appendChild(para);
                            var footerModalError = document.getElementById("errorPopup-footer");
                            var okButtonError = document.createElement("input");
                            okButtonError.type = "button";
                            okButtonError.setAttribute("class", "okBtn");
                            //okButtonError.id = "okBtn";
                            okButtonError.value = "Ok";
                            okButtonError.onclick = function(event) {
                                modalError.style.display = "none";
                            };
                            footerModalError.appendChild(okButtonError);
                            modalError.style.display = "block";


                            gifModal.style.display = "none";
                        }
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
                                alert("Please select the department");
                                modal.style.display = "block";
                            } else {

                                alert("Please select the department");
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
        },
        error: function(error) {
            alert("error block=" + error);
            loadingText.visible = false;
        }
    });
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_MiddleInitial_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_MiddleInitial_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_CMSPosNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_CMSPosNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_CMSPosNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_CMSPosNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
	var posNo = this.value;
	
debugger;

    if (posNo !== null) {
        
        $.ajax({
            type: 'GET',
            url: "/bin/getSubstituteFacultyData",
            data: {
                action: "SUB_FACULTY_POSITION_LOOKUP",
                position_nbr: posNo
            },
            dataType: 'json',
            success: function(response) {

               

                if (response.length === 1) {                    
                    
                                       
                    DeptUnitNum.value = response[0].CSU_UNIT;
					
                    
                   // modal.style.display = "none";

                }  else {

                   // showErrorModal("Alert !", "No matching records found");

                    
                    DeptUnitNum.value = "";


                   
                }               
                
            }

        });
    }
}

        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_ReportingNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_ReportingNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_LectureHoursTotal_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_LectureHoursTotal_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_RangeCode_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_RangeCode_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value!=0){
showErrorModal("Alert!","Please enter the valid range code");
this.value="";
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_NumberLectureHours_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_NumberLectureHours_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_TotalPaymentDue_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_TotalPaymentDue_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_SupDocPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_SupDocPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
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
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc2.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc2.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_PayrollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToPayroll") {
        if (PayrollDate.value === null) {
            

            PayrollDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  PayrollSignature.value = userValue;
                  PayrollDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    PayrollSignature.value = "";
    PayrollDate.value = "";
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_PayrollSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_PayrollSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_PayrollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_PayrollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToChair") {
        if (ChairDate.value === null) {
            

            ChairDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    DeptChairSign.value = userValue;
                  ChairDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptChairSign.value = "";
    ChairDate.value = "";
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptChairSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptChairSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_ChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_ChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToFaculty") {
        if (EmployeeDate.value === null) {
            

            EmployeeDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  EmployeeSignature.value = userValue;
                  EmployeeDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    EmployeeSignature.value = "";
    EmployeeDate.value = "";
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmployeeSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmployeeSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmployeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_EmployeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptCooCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptCooCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
if (this.value == 1) {

        if (DeptCooDate.value === null) {
            

            DeptCooDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptCooSignature.value = userValue;
                  DeptCooDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }else {
    DeptCooDate.value = "";
    DeptCooSignature.value = "";
}
} 
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptCooSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptCooSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptCooDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptCooDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_workflow_initiator_init0 = function (scope) {
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
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_DeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var dept_id = this.value;
  $.ajax({
                                type: 'GET',
                                url: "/bin/getChairDeanInfo",
								data:{dept_id:dept_id},
                                dataType: 'json',

                                success: function(chairInfoResult) {
                                    
                                    if (chairInfoResult.length !== 0) {                                       
                                        
                                        ChairUserId.value  = chairInfoResult[0].CHAIR_USERID;
										ChairEmail.value  = chairInfoResult[0].CHAIR_EMAIL;
                                        ChairName.value =  chairInfoResult[0].CHAIR_NAME;
                                        
                                    }

                                }
                            });
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
     getPdf();


function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            console.log("xml=" + result.data);
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/teaching-associate-time-sheet/teaching-associate-time-sheet');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FirstName.value + "_"+LastName.value+ "_" + Date.now());
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';
            xhr.send(jsonData);
            xhr.onload = function() {
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
                            blob = new File([this.response], filename, {
                                type: type
                            });
                        } catch (e) {
                            /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], {
                            type: type
                        });
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
                        setTimeout(function() {
                            URL.revokeObjectURL(downloadUrl);
                        }, 100); // cleanup
                    }
                }
            setFundSourceOptions();
			};
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
function setFundSourceOptions(){
  for (k = 0; k < count; k++) {
            var fundPrgResult = JSON.parse(FundSourceData.value);
			if(fundPrgResult[0].CLASS_CODE.length !== 0){
            var classResult = [];
            for (var i = 0; i < fundPrgResult[0].CLASS_CODE.length; i++) {
				classResult.push(fundPrgResult[0].CLASS_CODE[i].CLASS);
            }
			FundDetails.instanceManager.instances[k].Class.items = classResult; 
            }
            if(fundPrgResult[0].FUND.length !== 0){
            var fundResult = [];
            for (var f = 0; f < fundPrgResult[0].FUND.length; f++) {              	
				fundResult.push(fundPrgResult[0].FUND[f].FUND_CODE);                
            }
			FundDetails.instanceManager.instances[k].Fund.items = fundResult; 
            }
            if(fundPrgResult[0].PROGRAM.length !== 0){
            var programResult = [];
            for (var p = 0; p < fundPrgResult[0].PROGRAM.length; p++) {
				programResult.push(fundPrgResult[0].PROGRAM[p].PROGRAM);
            }
			FundDetails.instanceManager.instances[k].Program.items = programResult; 
            }
            if(fundPrgResult[0].DEPT.length !== 0){
            var deptResult = [];
            for (var d = 0; d < fundPrgResult[0].DEPT.length; d++) {              	
				deptResult.push(fundPrgResult[0].DEPT[d].DEPTID);                
            }
			FundDetails.instanceManager.instances[k].FundDeptID.items = deptResult; 
            }	
            }
}
        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplId.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+EmplId.value ;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function teaching_associate_time_sheet_teaching_associate_time_sheet.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
teaching_associate_time_sheet_teaching_associate_time_sheet.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplId.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+EmplId.value ;
}
if(DeptUnitNum.value !== null){
EmailSubject.value = "Test - Substitute TA Timesheet - "+LastName.value+", "+FirstName.value+" - "+DeptUnitNum.value;
}else{
  EmailSubject.value = "Test - Substitute TA Timesheet - "+LastName.value+", "+FirstName.value;
}

EmpEmail.value="swathi.kumari@thoughtfocus.com";
ChairEmail.value="swathi.kumari@thoughtfocus.com";
DeptCooEmail.value="swathi.kumari@thoughtfocus.com";

/*EmpEmail.value="nvadlakunta@FULLERTON.EDU";
ChairEmail.value="nvadlakunta@FULLERTON.EDU";
DeptCooEmail.value="nvadlakunta@FULLERTON.EDU";*/

var flag = 0;
if(flag === 0 ){
guideBridge.submit();
}

        }
	}
}
