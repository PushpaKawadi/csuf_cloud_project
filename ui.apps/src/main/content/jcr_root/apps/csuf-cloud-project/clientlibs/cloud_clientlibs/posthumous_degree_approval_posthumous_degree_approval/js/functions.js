/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            var userValue = myresponse.userId;
            //userValue = "nvadlakunta";
            workflow_initiator.value = userValue;
            if (userValue !== null) {
                getInitiatorDetails(userValue);
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getInitiatorDetails(userIdVal) {
    $.ajax({

        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            action: "INITIATOR_DETAILS",
            userid: userIdVal
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length >= 1) {
                InitiatorUserId.value = userIdVal;
                InitiatorName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                InitiatorEmailId.value = myresponse[0].EMAILID;
                getChairDetails();
            } else {
                showErrorModal("Alert!", "No matching records found");
            }

        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getChairDetails(){
  $.ajax({
        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            action: "CHAIR_DETAILS",
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length >= 1) {
              var departmentArray = [];
              for(var p=0; p<myresponse.length; p++){
                var item = myresponse[p].DEPTNAME+"-"+myresponse[p].DEPTID;
                departmentArray.push(item);
              }
              DepartmentDropdown.items = departmentArray.sort();
             ChairArrayData.value = JSON.stringify(myresponse);
            }
        }
    });
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    DepartmentChairSignaturePanel.visible = false;
    DeanSignaturePanel.visible = false;
    ProvostOfficeSignaturePanel.visible = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToDepartmentChair") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    DeanSignaturePanel.visible = false;
    ProvostOfficeSignaturePanel.visible = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToCollegeDean") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    ProvostOfficeSignaturePanel.visible = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToProvostOffice") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    DeanSignaturePanel.enabled = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToUniversityPresident") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    DeanSignaturePanel.enabled = false;
    ProvostOfficeSignaturePanel.enabled = false;
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_StudentCWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_StudentCWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && StudentCWID.value !== null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            action: "STUDENT_DETAILS",
            cwid: this.value
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length === 1) {
                var firstName = myresponse[0].STUDENT_FNAME;
                var lastName = myresponse[0].STUDENT_LNAME;
                var deptId = myresponse[0].DEPTID;
                var college = myresponse[0].FUL_COLLEGE;
                StudentName.value = firstName + " " + lastName;
                StudentMajor.value = myresponse[0].PROGRAMS;
                StudentUserId.value = myresponse[0].STUDENT_USERID;
                StudentDeptId.value = deptId;
                StudentDept.value = myresponse[0].DEPTNAME;
                StudentCollegeId.value = college;
                StudentCollege.value = myresponse[0].FUL_COLLEGE_NAME;
                getChairDetails(deptId);
            } else if (myresponse.length > 1) {
                myModal.style.display = "block";
                var col = [];
                col.push("STUDENT_ID");
                col.push("STUDENT_FNAME");
                col.push("STUDENT_LNAME");
                col.push("ACAD_CAREER");
                col.push("PROGRAMS");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "CWID", "First Name", "Last Name", "Acad Career", "PROGRAMS"];
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
                    button.onclick = function(event) {};
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
                            var firstName = myresponse[n].STUDENT_FNAME;
                            var lastName = myresponse[n].STUDENT_LNAME;
                            var deptId = myresponse[n].DEPTID;
                            var college = myresponse[n].FUL_COLLEGE;
                            StudentName.value = firstName + " " + lastName;
                            StudentMajor.value = myresponse[n].PROGRAMS;
                            StudentUserId.value = myresponse[n].STUDENT_USERID;
                            StudentDeptId.value = deptId;
                            StudentDept.value = myresponse[n].DEPTNAME;
                            StudentCollegeId.value = college;
                            StudentCollege.value = myresponse[n].FUL_COLLEGE_NAME;
                            getChairDetails(deptId);

                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        // alert("Please select the department");
                        showErrorModal("Alert !", "please select an entry");
                        myModal.style.display = "block";
                    } else {

                        myModal.style.display = "none";
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
            var span = document.getElementById("closeButton");
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
                    //alert("Please select the department");
                    showErrorModal("Alert !", "please select an entry");
                    myModal.style.display = "block";
                } else {

                    //alert("Please select the department");
                    showErrorModal("Alert !", "please select an entry");
                    myModal.style.display = "block";
                }
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == myModal) {
                    myModal.style.display = "none";
                }
            };
        }
    });
}

function getChairDetails(deptId) {
var arrayVal = JSON.parse(ChairArrayData.value);
  console.log(arrayVal);
  for(var j=0; j<arrayVal.length; j++){
    if(deptId == arrayVal[j].DEPTID){
      ChairName.value = arrayVal[j].CHAIR_NAME;
      ChairEmailId.value = arrayVal[j].CHAIR_EMAIL;
      var userIdVal = arrayVal[j].CHAIR_USERID;
      ChairUserId.value = userIdVal;
      userIdVal = userIdVal.toLowerCase();
      var WorkflowInitiatorVal = workflow_initiator.value; 
      WorkflowInitiatorVal = WorkflowInitiatorVal.toLowerCase();
      if(userIdVal == WorkflowInitiatorVal){
        ChairFlag.value = "false";
        var textVal = "<p><b>Initiator Signature & Acknowledgement (Department Chair)</b></p>";
        $("#InitiatorSignatureHeading").html(textVal);
      }else{
       ChairFlag.value = "true"; 
        var textVal2 = "<p><b>Initiator Signature & Acknowledgement</b></p>";
        $("#InitiatorSignatureHeading").html(textVal2);
      }
      getDeanDetails(arrayVal[j].FUL_COLLEGE);
    }
  }
}

function getDeanDetails(fullCollegeVal) {
    $.ajax({
        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            action: "DEAN_DETAILS",
            fullCollege: fullCollegeVal
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length === 1) {
                DeanName.value = myresponse[0].EMPNAME;
                DeanEmailId.value = myresponse[0].EMP_EMAIL;
                DeanUserId.value = myresponse[0].EMP_USERID;
            }
        }
    });
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_DepartmentDropdown_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_DepartmentDropdown_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_supportDocumentPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_supportDocumentPanel_init0 = function (scope) {
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
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc1.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc1.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc1.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc1.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc3.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc3.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc3.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_supportDoc4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc4.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc4.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc4.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc4.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated__valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated__valueCommit0 = function (scope) {
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
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                InitiatorSignature.value = userValue;
                InitiatorSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    } else {
        InitiatorSignature.value = "";
        InitiatorSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_InitiatorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_InitiatorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_InitiatorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_InitiatorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_chairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_chairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToDepartmentChair") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                MajorDepartmentChairSignature.value = userValue;
                MajorDepartementChairSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    } else {
        MajorDepartmentChairSignature.value = "";
        MajorDepartementChairSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_MajorDepartmentChairSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_MajorDepartmentChairSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_MajorDepartementChairSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_MajorDepartementChairSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToCollegeDean") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                DeanSignature.value = userValue;
                DeanSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    } else {
        DeanSignature.value = "";
        DeanSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_DeanSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_DeanSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_DeanSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_DeanSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_ProvostOfficeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_ProvostOfficeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToProvostOffice") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                ProvostSignature.value = userValue;
                ProvostSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    } else {
        ProvostSignature.value = "";
        ProvostSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_ProvostSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_ProvostSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_ProvostSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_ProvostSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_PresidentSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_PresidentSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToUniversityPresident") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                PresidentSignature.value = userValue;
                PresidentSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    } else {
        PresidentSignature.value = "";
        PresidentSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_PresidentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_PresidentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_PresidentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_PresidentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_StudentDeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_StudentDeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
	
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            
            DEPT_ID: this.value,
            action: "DEPARTMENT_CHAIR_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
           
            ChairUserId.value = myresponse[0].CHAIR_USERID;
            ChairEmailId.value = "soumya.ravindra@thoughtfocus.com";
            ChairName.value = myresponse[0].CHAIR_NAME;
            
        }
    });
}


        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_StudentCollege_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_StudentCollege_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
debugger;
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            StudentCollege: this.value,
            action: "DEPARTMENT_DEAN_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
            DeanUserId.value = myresponse[0].DEAN_USERID;
            DeanName.value = myresponse[0].DEAN_NAME;
            //DeanEmail.value = myresponse[0].DEAN_EMAIL;
            DeanEmailId.value = "soumya.ravindra@thoughtfocus.com";
        }
    });
}



        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visble = false;
        }
	}
}
/**
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/posthumous-degree-approval/posthumous-degree-approval');
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
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_saveguidedraft1563885586963_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_saveguidedraft1563885586963_click0 = function (scope) {
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
 * @function posthumous_degree_approval_posthumous_degree_approval.generated_submit1563885580256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
posthumous_degree_approval_posthumous_degree_approval.generated_submit1563885580256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  EmailSubject.value = "Test - Posthumous Degree Approval - "+StudentCWID.value;
  aftiaDescCWID.value = StudentName.value+" "+StudentCWID.value;
}

var email = "chaitanya.sai@thoughtfocus.com"; 
InitiatorEmailId.value = email;
ChairEmailId.value = email;
DeanEmailId.value = email;
guideBridge.submit();
        }
	}
}
