/**
 * @function tda_exception_form_tda_exception_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_guideRootPanel_init0 = function (scope) {
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
                    url: "/bin/getEvaluationFormData",
                    data: {
                        action: "EMP_DETAILS"
                    },
                    dataType: 'json',
                    success: function(myresopnse) {
                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];
                        if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
                            FacultyFirstName.value = myresopnse[0].FIRST_NAME;
                            FacultyLastName.value = myresopnse[0].LAST_NAME;
                            //FacultyEmail.value = myresopnse[0].EMAILID;
                            FacultyEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                            FacultyUserID.value = myresopnse[0].EMP_USERID;
                            FacultyDeptID.value = myresopnse[0].DEPTID;
                            FacultyDept.value = myresopnse[0].DEPTNAME;
                            FacultyName.value = FacultyFirstName.value + " " + FacultyLastName.value;
                            FacultyEmplID.value = myresopnse[0].EMPLID;

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

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Emp ID", "Last Name", "First Name", "Dept ID"];
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
                                        FacultyFirstName.value = myresopnse[n].FIRST_NAME;
                                        FacultyLastName.value = myresopnse[n].LAST_NAME;
                                        //  FacultyEmail.value = myresopnse[n].EMAILID;
                                        FacultyEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                                        FacultyUserID.value = myresopnse[n].EMP_USERID;
                                        FacultyDeptID.value = myresopnse[n].DEPTID;
                                        FacultyDept.value = myresopnse[n].DEPTNAME;
                                        FacultyName.value = FacultyFirstName.value + " " + FacultyLastName.value;
                                        FacultyEmplID.value = myresopnse[n].EMPLID;
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
                                showErrorModal("Alert !", "please select the department");
                                modal.style.display = "block";
                            } else {

                                showErrorModal("Alert !", "please select the department");
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
 * @function tda_exception_form_tda_exception_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=true;

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=true;
  ATCESignaturePanel.visible=false;
  TDASignaturePanel.visible=false;
  OfficeGradSignaturePanel.visible=false;
  
  testPanel.visible=false;
  
}

if(StageIndicator.value == "ToInitiator"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=true;
  
  CWID.enabled=false;
  
  ExceptionProcessType.value="4";
  
  if ((ExceptionType.value == "Articulation Issue") || (ExceptionType.value == "Repeat Adjustment") || (ExceptionType.value == "Course entry error")) {

    AdjustmentforGeneralEducation_ATCETab.visible = true;
    AdjustmentforGeneralEducation_ATCETab.enabled = true;
    AdjustmentforGeneralEducation_TDATab.visible = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = true;
    AdjustmentforMajorRequirement_ATCETab.enabled = true;
    AdjustmentforMajorRequirement_TDATab.visible = false;
  
    OtherModifications_ATCETab.visible = true;
    OtherModifications_ATCETab.enabled = true;
    OtherModifications_TDATab.visible = false; 
    
  }  else if ((ExceptionType.value == "Evaluation error") || (ExceptionType.value == "Transcript Issue") || (ExceptionType.value == "TDA Template Issue") || (ExceptionType.value == "Degree Requirement Modification")) {

    AdjustmentforGeneralEducation_ATCETab.visible = false;
    AdjustmentforGeneralEducation_TDATab.visible = true;
    AdjustmentforGeneralEducation_TDATab.enabled = true;
  
    AdjustmentforMajorRequirement_ATCETab.visible = false;
    AdjustmentforMajorRequirement_TDATab.visible = true;
    AdjustmentforMajorRequirement_TDATab.enabled = true;
  
    OtherModifications_ATCETab.visible = false;
    OtherModifications_TDATab.visible = true;
    OtherModifications_TDATab.enabled = true;
  }
  
  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=true;
  ATCESignaturePanel.visible=false;
  TDASignaturePanel.visible=false;
  
    if (TDAReviewerCB.value == "1") {
        TDASignaturePanel.visible = true;
        TDASignaturePanel.enabled=false;
    } else {
        TDASignaturePanel.visible = false;
    }
  
    if (ATCEReviewerCB.value == "1") {
        ATCESignaturePanel.visible = true;
        ATCESignaturePanel.enabled=false;
    } else {
        ATCESignaturePanel.visible = false;
    }
  
  if (OfficeGradReviewerCB.value == "1") {
        OfficeGradSignaturePanel.visible = true;
        OfficeGradSignaturePanel.enabled=false;
    } else {
        OfficeGradSignaturePanel.visible = false;
    }  
  
  testPanel.visible=true;
  
}

if(StageIndicator.value == "ToATCE"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  
  ExceptionProcessType.value="2";
    
 if ((ExceptionType.value == "Articulation Issue") || (ExceptionType.value == "Repeat Adjustment") || (ExceptionType.value == "Course entry error")) {

    AdjustmentforGeneralEducation_ATCETab.visible = true;
    AdjustmentforGeneralEducation_ATCETab.enabled = false;
    AdjustmentforGeneralEducation_TDATab.visible = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = true;
    AdjustmentforMajorRequirement_ATCETab.enabled = false;
    AdjustmentforMajorRequirement_TDATab.visible = false;
  
    OtherModifications_ATCETab.visible = true;
    OtherModifications_ATCETab.enabled = false;
    OtherModifications_TDATab.visible = false; 
    
  }  else if ((ExceptionType.value == "Evaluation error") || (ExceptionType.value == "Transcript Issue") || (ExceptionType.value == "TDA Template Issue") || (ExceptionType.value == "Degree Requirement Modification")) {

    AdjustmentforGeneralEducation_ATCETab.visible = false;
    AdjustmentforGeneralEducation_TDATab.visible = true;
    AdjustmentforGeneralEducation_TDATab.enabled = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = false;
    AdjustmentforMajorRequirement_TDATab.visible = true;
    AdjustmentforMajorRequirement_TDATab.enabled = false;
  
    OtherModifications_ATCETab.visible = false;
    OtherModifications_TDATab.visible = true;
    OtherModifications_TDATab.enabled = false;
  }

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=false;
  ATCESignaturePanel.visible=true;
  ATCESignaturePanel.enabled=true;
  
  if (TDAReviewerCB.value == "1") {
        TDASignaturePanel.visible = true;
        TDASignaturePanel.enabled=false;
    } else {
        TDASignaturePanel.visible = false;
    }
  
  if (OfficeGradReviewerCB.value == "1") {
        OfficeGradSignaturePanel.visible = true;
        OfficeGradSignaturePanel.enabled=false;
    } else {
        OfficeGradSignaturePanel.visible = false;
    } 
  
  testPanel.visible=true;
  
}

if(StageIndicator.value == "ToTDA"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  
  ExceptionProcessType.value="2";
  
 if ((ExceptionType.value == "Articulation Issue") || (ExceptionType.value == "Repeat Adjustment") || (ExceptionType.value == "Course entry error")) {

    AdjustmentforGeneralEducation_ATCETab.visible = true;
    AdjustmentforGeneralEducation_ATCETab.enabled = false;
    AdjustmentforGeneralEducation_TDATab.visible = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = true;
    AdjustmentforMajorRequirement_ATCETab.enabled = false;
    AdjustmentforMajorRequirement_TDATab.visible = false;
  
    OtherModifications_ATCETab.visible = true;
    OtherModifications_ATCETab.enabled = false;
    OtherModifications_TDATab.visible = false; 
    
  }  else if ((ExceptionType.value == "Evaluation error") || (ExceptionType.value == "Transcript Issue") || (ExceptionType.value == "TDA Template Issue") || (ExceptionType.value == "Degree Requirement Modification")) {

    AdjustmentforGeneralEducation_ATCETab.visible = false;
    AdjustmentforGeneralEducation_TDATab.visible = true;
    AdjustmentforGeneralEducation_TDATab.enabled = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = false;
    AdjustmentforMajorRequirement_TDATab.visible = true;
    AdjustmentforMajorRequirement_TDATab.enabled = false;
  
    OtherModifications_ATCETab.visible = false;
    OtherModifications_TDATab.visible = true;
    OtherModifications_TDATab.enabled = false;
  }

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=false;
  TDASignaturePanel.visible=true;
  TDASignaturePanel.enabled=true;
  
  if (ATCEReviewerCB.value == "1") {
        ATCESignaturePanel.visible = true;
        ATCESignaturePanel.enabled=false;
    } else {
        ATCESignaturePanel.visible = false;
    }
  
  if (OfficeGradReviewerCB.value == "1") {
        OfficeGradSignaturePanel.visible = true;
        OfficeGradSignaturePanel.enabled=false;
    } else {
        OfficeGradSignaturePanel.visible = false;
    } 
  
  testPanel.visible=true;
  
}

if(StageIndicator.value == "ToOfficeGrad"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  
  ExceptionProcessType.value="2";
    
 if ((ExceptionType.value == "Articulation Issue") || (ExceptionType.value == "Repeat Adjustment") || (ExceptionType.value == "Course entry error")) {

    AdjustmentforGeneralEducation_ATCETab.visible = true;
    AdjustmentforGeneralEducation_ATCETab.enabled = false;
    AdjustmentforGeneralEducation_TDATab.visible = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = true;
    AdjustmentforMajorRequirement_ATCETab.enabled = false;
    AdjustmentforMajorRequirement_TDATab.visible = false;
  
    OtherModifications_ATCETab.visible = true;
    OtherModifications_ATCETab.enabled = false;
    OtherModifications_TDATab.visible = false; 
    
  }  else if ((ExceptionType.value == "Evaluation error") || (ExceptionType.value == "Transcript Issue") || (ExceptionType.value == "TDA Template Issue") || (ExceptionType.value == "Degree Requirement Modification")) {

    AdjustmentforGeneralEducation_ATCETab.visible = false;
    AdjustmentforGeneralEducation_TDATab.visible = true;
    AdjustmentforGeneralEducation_TDATab.enabled = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = false;
    AdjustmentforMajorRequirement_TDATab.visible = true;
    AdjustmentforMajorRequirement_TDATab.enabled = false;
  
    OtherModifications_ATCETab.visible = false;
    OtherModifications_TDATab.visible = true;
    OtherModifications_TDATab.enabled = false;
  }

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=false;
  
  if (ATCEReviewerCB.value == "1") {
        ATCESignaturePanel.visible = true;
        ATCESignaturePanel.enabled=false;
    } else {
        ATCESignaturePanel.visible = false;
    }
  
  if (TDAReviewerCB.value == "1") {
        TDASignaturePanel.visible = true;
        TDASignaturePanel.enabled=false;
    } else {
        TDASignaturePanel.visible = false;
    }
  
  testPanel.visible=true;
  
}


        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_RequestID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_RequestID_init0 = function (scope) {
    with(this) {
        with(scope) {
            RequestID.enabled = false;

if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            RequestID.value = myresponse.CASEID;
        },
    });
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (testPanel.visible === false) {
  
    var gifModal = document.getElementById('gifModal');
    //gifModal.style.display = "block";
    var cwid = this.value;

    StudentName.value = "";
    AcademicPlan.value = "";
    CatalogYear.value = "";

    $.ajax({
        type: 'GET',
        url: "/bin/TDAExceptionServlet",
        data: {
            action: "STUDENT_DATA",
            cwid: cwid,
        },
        dataType: 'json',
        success: function(myresopnse) {

            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];

            if (myresopnse.length === 1 && myresopnse[0].STUDENT_ID !== undefined) {

                var fname = myresopnse[0].STUDENT_FNAME;
                var lname = myresopnse[0].STUDENT_LNAME;
              
                StudentFirstName.value = myresopnse[0].STUDENT_FNAME;
                StudengtLastName.value = myresopnse[0].STUDENT_LNAME;

                cwid.value = myresopnse[0].STUDENT_ID;
                StudentName.value = fname + " " + lname;
                AcademicPlan.value = myresopnse[0].ACAD_PLAN;
                CatalogYear.value = myresopnse[0].ACAD_YEAR;

                gifModal.style.display = "none";
                modal.style.display = "none";

            } else if (myresopnse.length > 1) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                var col = [];
                col.push("STUDENT_ID");
                col.push("STUDENT_LNAME");
                col.push("STUDENT_FNAME");
                col.push("ACAD_PLAN");
                col.push("ACAD_YEAR");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Student ID", "Last Name", "First Name", "Academic Plan", "Catalog Year"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio" class = "rb" name="group" value = ""> </td>');
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
                            //
                            //
                            //Id.value = myresopnse[n].EMPLID;
                            var fname = myresopnse[n].STUDENT_FNAME;
                            var lname = myresopnse[n].STUDENT_LNAME;
                          
                            StudentFirstName.value = myresopnse[n].STUDENT_FNAME;
                            StudengtLastName.value = myresopnse[n].STUDENT_LNAME;

                            cwid.value = myresopnse[n].STUDENT_ID;
                            StudentName.value = fname + " " + lname;
                            AcademicPlan.value = myresopnse[n].ACAD_PLAN;
                            CatalogYear.value = myresopnse[n].ACAD_YEAR;

                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        //alert("Please select the department");
                        showErrorModal("Alert!", "Please select the Student Details");
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
                    StudentName.value = "";
                    CatalogYear.value = "";
                    AcademicPlan.value = "";
                    Term.value = "";
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
                    showErrorModal("Alert !", "please select an entry");
                   modal.style.display = "block";
                } else {
                    showErrorModal("Alert !", "please select an entry");
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
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_StudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_StudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_AcademicPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_AcademicPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_CatalogYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_CatalogYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_ExceptionType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_ExceptionType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    if ((this.value == "Equate a transfer course to a major course") || (this.value == "Create a new articulation rule for a transfer course to apply to all students") || (this.value == "Add a course to a major area")) {
        ExceptionFlag.value = "ATCE";
    } else if ((this.value == "Substitute a course in a major area") || (this.value == "Waive major area") || (this.value == "General Education area adjustment") || (this.value == "Other")) {
        ExceptionFlag.value = "TDA";
    }
}

if ((this.value == "Equate a transfer course to a major course") || (this.value == "Create a new articulation rule for a transfer course to apply to all students") || (this.value == "Add a course to a major area")) {
    
    DORExceptionFlag.value="ATCE";

    AdjustmentforGeneralEducation_ATCETab.visible = true;
    AdjustmentforGeneralEducation_TDATab.visible = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = true;
    AdjustmentforMajorRequirement_TDATab.visible = false;
  
    OtherModifications_ATCETab.visible = true;
    OtherModifications_TDATab.visible = false;

    GeneralEducationTDA.instanceManager.instances[0].GeneralEducationTDA_CSUF.value = "";
    GeneralEducationTDA.instanceManager.instances[0].GeneralEducationTDA_CSUFCourse.value = "";
    GeneralEducationTDA.instanceManager.instances[0].GeneralEducationTDA_GEArea.value = "";

    var rowcountRemoveAll4 = GeneralEducationTDA.instanceManager.instanceCount;
    if (rowcountRemoveAll4 !== null) {
        for (var k = 0; k < rowcountRemoveAll4; k++) {
            GeneralEducationTDA.instanceManager.removeInstance(GeneralEducationTDA.instanceIndex);
        }
    }

    MajorReqTDA.instanceManager.instances[0].MajorReqTDA_CSUF.value = "";
    MajorReqTDA.instanceManager.instances[0].MajorReqTDA_CSUFCourse.value = "";
    MajorReqTDA.instanceManager.instances[0].MajorReqTDA_SubstitueCourse.value = "";
    MajorReqTDA.instanceManager.instances[0].MajorReqTDA_SatisfyReq.value = "";

    var rowcountRemoveAll5 = MajorReqTDA.instanceManager.instanceCount;
    if (rowcountRemoveAll5 !== null) {
        for (var k = 0; k < rowcountRemoveAll5; k++) {
            MajorReqTDA.instanceManager.removeInstance(MajorReqTDA.instanceIndex);
        }
    }

    OtherTDA.instanceManager.instances[0].OtherTDA_CSUF.value = "";
    OtherTDA.instanceManager.instances[0].OtherTDA_CSUFCourse.value = "";
    OtherTDA.instanceManager.instances[0].OtherTDA_Request.value = "";

    var rowcountRemoveAll6 = OtherTDA.instanceManager.instanceCount;
    if (rowcountRemoveAll6 !== null) {
        for (var k = 0; k < rowcountRemoveAll6; k++) {
            OtherTDA.instanceManager.removeInstance(OtherTDA.instanceIndex);
        }
    }

} else if ((this.value == "Substitute a course in a major area") || (this.value == "Waive major area") || (this.value == "General Education area adjustment") || (this.value == "Other")) {
    
    DORExceptionFlag.value="TDA";

    AdjustmentforGeneralEducation_ATCETab.visible = false;
    AdjustmentforGeneralEducation_TDATab.visible = true;
  
    AdjustmentforMajorRequirement_ATCETab.visible = false;
    AdjustmentforMajorRequirement_TDATab.visible = true;
  
    OtherModifications_ATCETab.visible = false;
    OtherModifications_TDATab.visible = true;

    GeneralEducationATCE.instanceManager.instances[0].GeneralEducationATCE_Transfer.value = "";
    GeneralEducationATCE.instanceManager.instances[0].GeneralEducationATCE_InstitutionName.value = "";
    GeneralEducationATCE.instanceManager.instances[0].GeneralEducationATCE_TransferCourse.value = "";
    GeneralEducationATCE.instanceManager.instances[0].GeneralEducationATCE_GEArea.value = "";

    var rowcountRemoveAll7 = GeneralEducationATCE.instanceManager.instanceCount;
    if (rowcountRemoveAll7 !== null) {
        for (var k = 0; k < rowcountRemoveAll7; k++) {
            GeneralEducationATCE.instanceManager.removeInstance(GeneralEducationATCE.instanceIndex);
        }
    }

    MajorReqATCE.instanceManager.instances[0].MajorReqATCE_Transfer.value = "";
    MajorReqATCE.instanceManager.instances[0].MajorReqATCE_InstitutionName.value = "";
    MajorReqATCE.instanceManager.instances[0].MajorReqATCE_TransferCourse.value = "";
    MajorReqATCE.instanceManager.instances[0].MajorReqATCE_SubstitueCourse.value = "";
    MajorReqATCE.instanceManager.instances[0].MajorReqATCE_SatisfyReq.value = "";

    var rowcountRemoveAll8 = MajorReqATCE.instanceManager.instanceCount;
    if (rowcountRemoveAll8 !== null) {
        for (var k = 0; k < rowcountRemoveAll8; k++) {
            MajorReqATCE.instanceManager.removeInstance(MajorReqATCE.instanceIndex);
        }
    }

    OtherATCE.instanceManager.instances[0].OtherATCE_Transfer.value = "";
    OtherATCE.instanceManager.instances[0].OtherATCE_InstitutionName.value = "";
    OtherATCE.instanceManager.instances[0].OtherATCE_TransferCourse.value = "";
    OtherATCE.instanceManager.instances[0].OtherATCE_Request.value = "";

    var rowcountRemoveAll9 = OtherATCE.instanceManager.instanceCount;
    if (rowcountRemoveAll9 !== null) {
        for (var k = 0; k < rowcountRemoveAll9; k++) {
            OtherATCE.instanceManager.removeInstance(OtherATCE.instanceIndex);
        }
    }

} else {
    AdjustmentforGeneralEducation_ATCETab.visible = false;
    AdjustmentforGeneralEducation_TDATab.visible = false;
  
    AdjustmentforMajorRequirement_ATCETab.visible = false;
    AdjustmentforMajorRequirement_TDATab.visible = false;
  
    OtherModifications_ATCETab.visible = false;
    OtherModifications_TDATab.visible = false;
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_ExceptionProcessType_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_ExceptionProcessType_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_GenralEducationATCEAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_GenralEducationATCEAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (GeneralEducationATCE.instanceManager.instanceCount >= 1 && GeneralEducationATCE.instanceManager.instanceCount <= 5) {
    for (var count = 0; count < GeneralEducationATCE.instanceManager.instanceCount; count++) {
        if ((GeneralEducationATCE.instanceManager.instances[count]._children[0].value === null) || (GeneralEducationATCE.instanceManager.instances[count]._children[1].value === null) || (GeneralEducationATCE.instanceManager.instances[count]._children[2].value === null) || (GeneralEducationATCE.instanceManager.instances[count]._children[3].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (GeneralEducationATCE.instanceManager.instanceCount < 5) {
            GeneralEducationATCE.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_GenralEducationATCERemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_GenralEducationATCERemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            try {
    var rowCount = GeneralEducationATCE.instanceManager.instanceCount;
    if (rowCount > 1 && rowCount <= 5) {
        GeneralEducationATCE.instanceManager.removeInstance(rowCount - 1);
    }
    if (rowCount == 1) {
        GeneralEducationATCE.instanceManager.instances[0]._children[0].value = null;
        GeneralEducationATCE.instanceManager.instances[0]._children[1].value = null;
        GeneralEducationATCE.instanceManager.instances[0]._children[2].value = null;
        GeneralEducationATCE.instanceManager.instances[0]._children[3].value = null;
    }
} catch (e) {}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_GenralEducationTDAAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_GenralEducationTDAAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (GeneralEducationTDA.instanceManager.instanceCount >= 1 && GeneralEducationTDA.instanceManager.instanceCount <= 5) {
    for (var count = 0; count < GeneralEducationTDA.instanceManager.instanceCount; count++) {
        if ((GeneralEducationTDA.instanceManager.instances[count]._children[0].value === null) || (GeneralEducationTDA.instanceManager.instances[count]._children[1].value === null) || (GeneralEducationTDA.instanceManager.instances[count]._children[2].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (GeneralEducationTDA.instanceManager.instanceCount < 5) {
            GeneralEducationTDA.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_GenralEducationTDARemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_GenralEducationTDARemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            try {
    var rowCount = GeneralEducationTDA.instanceManager.instanceCount;
    if (rowCount > 1 && rowCount <= 5) {
        GeneralEducationTDA.instanceManager.removeInstance(rowCount - 1);
    }
    if (rowCount == 1) {
        GeneralEducationTDA.instanceManager.instances[0]._children[0].value = null;
        GeneralEducationTDA.instanceManager.instances[0]._children[1].value = null;
        GeneralEducationTDA.instanceManager.instances[0]._children[2].value = null;
    }
} catch (e) {}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_MajorReqATCEAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_MajorReqATCEAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (MajorReqATCE.instanceManager.instanceCount >= 1 && MajorReqATCE.instanceManager.instanceCount <= 5) {
    for (var count = 0; count < MajorReqATCE.instanceManager.instanceCount; count++) {
        if ((MajorReqATCE.instanceManager.instances[count]._children[0].value === null) || (MajorReqATCE.instanceManager.instances[count]._children[1].value === null) || (MajorReqATCE.instanceManager.instances[count]._children[2].value === null) || (MajorReqATCE.instanceManager.instances[count]._children[3].value === null) || (MajorReqATCE.instanceManager.instances[count]._children[4].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (MajorReqATCE.instanceManager.instanceCount < 5) {
            MajorReqATCE.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_MajorReqATCERemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_MajorReqATCERemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            try {
    var rowCount = MajorReqATCE.instanceManager.instanceCount;
    if (rowCount > 1 && rowCount <= 5) {
        MajorReqATCE.instanceManager.removeInstance(rowCount - 1);
    }
    if (rowCount == 1) {
        MajorReqATCE.instanceManager.instances[0]._children[0].value = null;
        MajorReqATCE.instanceManager.instances[0]._children[1].value = null;
        MajorReqATCE.instanceManager.instances[0]._children[2].value = null;
        MajorReqATCE.instanceManager.instances[0]._children[3].value = null;
        MajorReqATCE.instanceManager.instances[0]._children[4].value = null;
    }
} catch (e) {}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  
  	var rowcount = MajorReqTDA.instanceManager.instanceCount;
	var lastRow = rowcount - 1; 
  
   if (RemoveRecordFlag.value == "1"){
      	addRowsAfterRemove(lastRow);      	
    }else{
      	addRows();
    }
}

debugger;
function addRows(){  	
  debugger;
  	if( (MajorReqTDA_CSUF.value !== null) && (MajorReqTDA_CSUFCourse.value !== null) && (MajorReqTDA_SubstitueCourse.value !== null) && (MajorReqTDA_SatisfyReq.value !== null) ){
        MajorReqTDA.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}

function addRowsAfterRemove(lastRow){  
  debugger;
  	if((MajorReqTDA.instanceManager.instances[lastRow]._children[0].value !== null) && (MajorReqTDA.instanceManager.instances[lastRow]._children[1].value !== null) && (MajorReqTDA.instanceManager.instances[lastRow]._children[2].value !== null) && (MajorReqTDA.instanceManager.instances[lastRow]._children[3].value !== null) ){
        MajorReqTDA.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_MajorReqTDAAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_MajorReqTDAAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (MajorReqTDA.instanceManager.instanceCount >= 1 && MajorReqTDA.instanceManager.instanceCount <= 5) {
    for (var count = 0; count < MajorReqTDA.instanceManager.instanceCount; count++) {
        if ((MajorReqTDA.instanceManager.instances[count]._children[0].value === null) || (MajorReqTDA.instanceManager.instances[count]._children[1].value === null) || (MajorReqTDA.instanceManager.instances[count]._children[2].value === null) || (MajorReqTDA.instanceManager.instances[count]._children[3].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (MajorReqTDA.instanceManager.instanceCount < 5) {
            MajorReqTDA.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_MajorReqTDARemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_MajorReqTDARemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            try {
    var rowCount = MajorReqTDA.instanceManager.instanceCount;

    if (rowCount > 1 && rowCount <= 5) {
        MajorReqTDA.instanceManager.removeInstance(rowCount - 1);
    }
    if (rowCount == 1) {
        MajorReqTDA.instanceManager.instances[0]._children[0].value = null;
        MajorReqTDA.instanceManager.instances[0]._children[1].value = null;
        MajorReqTDA.instanceManager.instances[0]._children[2].value = null;
        MajorReqTDA.instanceManager.instances[0]._children[3].value = null;
    }
} catch (e) {}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OtherModificationsATCEAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OtherModificationsATCEAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (OtherATCE.instanceManager.instanceCount >= 1 && OtherATCE.instanceManager.instanceCount <= 5) {
    for (var count = 0; count < OtherATCE.instanceManager.instanceCount; count++) {
        if ((OtherATCE.instanceManager.instances[count]._children[0].value === null) || (OtherATCE.instanceManager.instances[count]._children[1].value === null) || (OtherATCE.instanceManager.instances[count]._children[2].value === null) || (OtherATCE.instanceManager.instances[count]._children[3].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (OtherATCE.instanceManager.instanceCount < 5) {
            OtherATCE.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OtherModificationsATCERemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OtherModificationsATCERemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            try {
    var rowCount = OtherATCE.instanceManager.instanceCount;
    if (rowCount > 1 && rowCount <= 5) {
        OtherATCE.instanceManager.removeInstance(rowCount - 1);
    }
    if (rowCount == 1) {
        OtherATCE.instanceManager.instances[0]._children[0].value = null;
        OtherATCE.instanceManager.instances[0]._children[1].value = null;
        OtherATCE.instanceManager.instances[0]._children[2].value = null;
        OtherATCE.instanceManager.instances[0]._children[3].value = null;
    }
} catch (e) {}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated__click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated__click00 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  
  	var rowcount = OtherTDA.instanceManager.instanceCount;
	var lastRow = rowcount - 1; 
  
   if (RemoveRecordFlag.value == "1"){
      	addRowsAfterRemove(lastRow);      	
    }else{
      	addRows();
    }
}

debugger;
function addRows(){  	
  debugger;
  	if( (OtherTDA_CSUF.value !== null) && (OtherTDA_CSUFCourse.value !== null) && (OtherTDA_Request.value !== null) ){
        OtherTDA.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}

function addRowsAfterRemove(lastRow){  
  debugger;
  	if((OtherTDA.instanceManager.instances[lastRow]._children[0].value !== null) && (OtherTDA.instanceManager.instances[lastRow]._children[1].value !== null) && (OtherTDA.instanceManager.instances[lastRow]._children[2].value !== null) ){
        OtherTDA.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OtherModificationsATCEAddButton_click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OtherModificationsATCEAddButton_click00 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if (OtherTDA.instanceManager.instanceCount >= 1 && OtherTDA.instanceManager.instanceCount <= 5) {
    for (var count = 0; count < OtherTDA.instanceManager.instanceCount; count++) {
        if ((OtherTDA.instanceManager.instances[count]._children[0].value === null) || (OtherTDA.instanceManager.instances[count]._children[1].value === null) || (OtherTDA.instanceManager.instances[count]._children[2].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (OtherTDA.instanceManager.instanceCount < 5) {
            OtherTDA.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OtherModificationsTDARemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OtherModificationsTDARemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            try {
    var rowCount = OtherTDA.instanceManager.instanceCount;
    if (rowCount > 1 && rowCount <= 5) {
        OtherTDA.instanceManager.removeInstance(rowCount - 1);
    }
    if (rowCount == 1) {
        OtherTDA.instanceManager.instances[0]._children[0].value = null;
        OtherTDA.instanceManager.instances[0]._children[1].value = null;
        OtherTDA.instanceManager.instances[0]._children[2].value = null;
    }
} catch (e) {}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value == "ToInitiator")) {
    if (this.value == 1) {
        if (InitiatorDate.value === null) {
            InitiatorDate.enabled = false;

            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormData",
                data: {
                    action: "EMP_DETAILS"
                },
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    InitiatorSignature.value = userValue;
                    InitiatorDate.value = myresopnse[0].SERVER_DATE;
                    InitiatorDept.value = myresopnse[0].DEPTNAME;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        }
    } else {
        InitiatorSignature.value = "";
        InitiatorDate.value = "";
        InitiatorDept.value = "";
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_InitiatorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_InitiatorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_InitiatorDept_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_InitiatorDept_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OfficeGradReviewerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OfficeGradReviewerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToOfficeGrad") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                OfficeGradSignature.value = userValue;
                OfficeGradSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        OfficeGradSignature.enabled = false;
        OfficeGradSignDate.enabled = false;
    } else {
        OfficeGradSignature.value = "";
        OfficeGradSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OfficeGradSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OfficeGradSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_OfficeGradSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_OfficeGradSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_ATCEReviewerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_ATCEReviewerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToATCE") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                ATCESignature.value = userValue;
                ATCESignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ATCESignature.enabled = false;
        ATCESignDate.enabled = false;
    } else {
        ATCESignature.value = "";
        ATCESignDate.value = "";
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_ATCESignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_ATCESignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_ATCESignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_ATCESignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_ATCEDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_ATCEDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    ATCEDecisionFlag.value = "Approved";
} else if (this.value == "2") {
    ATCEDecisionFlag.value = "ToInitiator";
} else if (this.value == "3") {
    ATCEDecisionFlag.value = "ToTDA";
} else if (this.value == "4") {
    ATCEDecisionFlag.value = "ToOfficeGrad";
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_TDAReviewerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_TDAReviewerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToTDA") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                TDASignature.value = userValue;
                TDASignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        TDASignature.enabled = false;
        TDASignDate.enabled = false;
    } else {
        TDASignature.value = "";
        TDASignDate.value = "";
    }
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_TDASignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_TDASignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_TDASignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_TDASignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_TDADecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_TDADecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    TDADecisionFlag.value = "Approved";
} else if (this.value == "2") {
    TDADecisionFlag.value = "ToInitiator";
} else if (this.value == "3") {
    TDADecisionFlag.value = "ToATCE";
} else if (this.value == "4") {
    TDADecisionFlag.value = "ToOfficeGrad";
}
        }
	}
}
/**
 * @function tda_exception_form_tda_exception_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (CWID.value === null) {
    showErrorModal("Alert !", "Please enter the CWID");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformationPanel[0].CWID[0]");
} else if (ExceptionType.value === null) {
    showErrorModal("Alert !", "Please Select the Exception Type");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformationPanel[0].ExceptionType[0]");
} else {
    getPdf();
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            console.log("xml=" + result.data);
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/tda-exception-form/tda-exception-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', StudentName.value + "_" + Date.now());
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
                            /* Edge */
                        }
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

function setFundSourceOptions() {
    for (k = 0; k < count; k++) {
        var fundPrgResult = JSON.parse(FundSourceData.value);
        if (fundPrgResult[0].CLASS_CODE.length !== 0) {
            var classResult = [];
            for (var i = 0; i < fundPrgResult[0].CLASS_CODE.length; i++) {
                classResult.push(fundPrgResult[0].CLASS_CODE[i].CLASS);
            }
            FundDetails.instanceManager.instances[k].Class.items = classResult;
        }
        if (fundPrgResult[0].FUND.length !== 0) {
            var fundResult = [];
            for (var f = 0; f < fundPrgResult[0].FUND.length; f++) {
                fundResult.push(fundPrgResult[0].FUND[f].FUND_CODE);
            }
            FundDetails.instanceManager.instances[k].Fund.items = fundResult;
        }
        if (fundPrgResult[0].PROGRAM.length !== 0) {
            var programResult = [];
            for (var p = 0; p < fundPrgResult[0].PROGRAM.length; p++) {
                programResult.push(fundPrgResult[0].PROGRAM[p].PROGRAM);
            }
            FundDetails.instanceManager.instances[k].Program.items = programResult;
        }
        if (fundPrgResult[0].DEPT.length !== 0) {
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
 * @function tda_exception_form_tda_exception_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
tda_exception_form_tda_exception_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    aftiaDescCWID.value = StudentName.value + " " + CWID.value;
    EmailSubject.value = "Test - TDA Exception Form (Undergraduate)- " + CWID.value;
   // ExceptionProcessType.value = "1";
    FacultyEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  //  FacultyEmail.value = "anupama.dhar@thoughtfocus.com";
  //   FacultyEmail.value = "yjayaram@fullerton.edu";
}
guideBridge.submit();
        }
	}
}
