/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
EvalFlag.value = "False";
if (StageIndicator.value === null) {

    AfterTheFactEvaluationPanel.visible = false;
    AftertheFactSignaturePanel.visible = false;
    InitiatorPanel.visible = false;
    FacultySignPanel.visible = true;
    ChairSignPanel.visible = false;
    DeanSignPanel.visible = false;
    HiddenPanel.visible=true;
}

if (StageIndicator.value == "ToEvalInitiator") {
    EvalFlag.value = "True";
    BasicDetails.visible = true;
    BasicDetails.enabled = false;
    TermsOfAgreementPanel.visible = true;
    TermsOfAgreementPanel.enabled = false;
    AfterTheFactEvaluationPanel.visible = true;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = false;
    AftertheFactSignaturePanel.visible = true;
    InitiatorPanel_2.visible = true;
    FacultySignPanel.visible = true;
    FacultySignPanel.enabled = false;
    ChairSignPanel.visible = true;
    ChairSignPanel.enabled = false;
    DeanSignPanel.visible = true;
    DeanSignPanel.enabled = false;
    ChairSignPanel_2.visible = false;
    FacultySignPanel_2.visible = false;
    HiddenPanel.visible=true;
}

if (StageIndicator.value == "ToFaculty") {
    BasicDetails.enabled = true;
    AftertheFactSignaturePanel.visible = false;
    TermsOfAgreementPanel.enabled = true;
    AfterTheFactEvaluationPanel.visible = false;
    if (InitiatorCB1.value == "1") {
        InitiatorPanel.visible = true;
      InitiatorPanel.enabled = false;

    } else {
        InitiatorPanel.visible = false;
    }

    FacultySignPanel.visible = true;
    FacultySignPanel.enabled = true;
    ChairSignPanel.visible = false;
    ChairSignPanel.enabled = false;
    DeanSignPanel.visible = false;
    DeanSignPanel.visible = false;
    HiddenPanel.visible=true;
}

if (StageIndicator.value == "ToEvalFaculty") {
    EvalFlag.value = "True";
    BasicDetails.visible = true;  
    BasicDetails.enabled = false;
    TermsOfAgreementPanel.visible = true;
    TermsOfAgreementPanel.enabled = false;
    AfterTheFactEvaluationPanel.visible = true;
    AfterTheFactEvaluationPanel.enabled = true;
    AftertheFactSignaturePanel.visible = true;
   if (InitiatorCB2.value == "1") {
        InitiatorPanel_2.visible = true;
      InitiatorPanel_2.enabled = false;

    } else {
        InitiatorPanel_2.visible = false;
 }
  
      if (InitiatorCB1.value == "1") {
        InitiatorPanel.visible = true;
      InitiatorPanel.enabled = false;

    } else {
        InitiatorPanel.visible = false;
    }

    FacultySignPanel.visible = true;
    FacultySignPanel.enabled = false;
    ChairSignPanel.visible = true;
    ChairSignPanel.enabled = false;
    DeanSignPanel.visible = true;
    DeanSignPanel.enabled = false;
    FacultySignPanel_2.visible = true;
    FacultySignPanel_2.enabled = true;
    ChairSignPanel_2.visible = false;
    HiddenPanel.visible=true;
}

debugger;
if (StageIndicator.value == "ToChair") {
    BasicDetails.enabled = false;
    AfterTheFactEvaluationPanel.visible = false;
    AftertheFactSignaturePanel.visible = false;
    TermsOfAgreementPanel.visible = true;
    TermsOfAgreementPanel.enabled = false;
    if (InitiatorCB1.value == "1") {
        InitiatorPanel.visible = true;
        InitiatorPanel.enabled = false;

    } else {
        InitiatorPanel.visible = false;
    }

    //if(Faculty1PrintName.value !== null){
   if (FacultyCB.value == "1") {
        FacultySignPanel.visible = true;
    } else {
        FacultySignPanel.visible = false;
    }
    FacultySignPanel.enabled = false;

    ChairSignPanel.visible = true;
    ChairSignPanel.enabled = true;
    DeanSignPanel.visible = false;
}

if (StageIndicator.value == "ToEvalChair") {
    EvalFlag.value = "True";
    BasicDetails.visible = true; 
    BasicDetails.enabled = false;
    AfterTheFactEvaluationPanel.visible = true;
    AfterTheFactEvaluationPanel.enabled = false;
    TermsOfAgreementPanel.visible = true;
    TermsOfAgreementPanel.enabled = false;
    AftertheFactSignaturePanel.visible = true;
    if (InitiatorCB2.value == "1") {
        InitiatorPanel_2.visible = true;
      InitiatorPanel_2.enabled = false;

    } else {
        InitiatorPanel_2.visible = false;
    }

    if (Faculty2CB.value == "1") {
        FacultySignPanel_2.visible = true;
    } else {
        FacultySignPanel_2.visible = false;
    }
    FacultySignPanel_2.enabled = false;
  
   if (InitiatorCB1.value == "1") {
        InitiatorPanel.visible = true;
        InitiatorPanel.enabled = false;

    } else {
        InitiatorPanel.visible = false;
    }

     if (FacultyCB.value == "1") {
        FacultySignPanel.visible = true;
    } else {
        FacultySignPanel.visible = false;
    }
    FacultySignPanel.enabled = false;

    ChairSignPanel.visible = true;
    ChairSignPanel.enabled = false;
    DeanSignPanel.visible = true;
    DeanSignPanel.enabled = false;
    ChairSignPanel_2.visible = true;
    ChairSignPanel_2.enabled = true;
}

if (StageIndicator.value == "ToDean") {
    BasicDetails.enabled = false;
    AfterTheFactEvaluationPanel.visible = false;
    AftertheFactSignaturePanel.visible = false;
    TermsOfAgreementPanel.visible = true;
    TermsOfAgreementPanel.enabled = false;

    if (InitiatorCB1.value == "1") {
        InitiatorPanel.visible = true;
      InitiatorPanel.enabled = false;

    } else {
        InitiatorPanel.visible = false;
    }

    if (FacultyCB.value == "1") {
        FacultySignPanel.visible = true;
    } else {
        FacultySignPanel.visible = false;
    }
    // FacultySignPanel.visible = true;
    FacultySignPanel.enabled = false;
    ChairSignPanel.visible = true;
    ChairSignPanel.enabled = false;
    DeanSignPanel.visible = true;
    DeanSignPanel.enabled = true;
  HiddenPanel.visible=true;
  if (EmplId.value===null && FacultyCB.value == "1" && InitiatorCB1.value != "1"){
    InitiatorFlag.value="false";
  }
  }
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_guideRootPanel_init1 = function (scope) {
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
                workflow_initiator.value = userValue;
                //var cwid = CWID.value;

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

                            InitiatorPanel.visible = false;
                            FacultySignPanel.visible = true;
                            CWID.value = myresopnse[0].EMPLID;

                            FirstName.value = myresopnse[0].FIRST_NAME;
                            LastName.value = myresopnse[0].LAST_NAME;
                            FacultyEmail.value = myresopnse[0].EMAILID;
                            FacultyUserID.value = myresopnse[0].EMP_USERID;
                            FacultyName.value = FirstName.value + " " + LastName.value;
                            DeptId.value = myresopnse[0].DEPTID;
                            College.value = myresopnse[0].FUL_COLLEGE_NAME;
                          
                          InitiatorFlag.value = false;

                            InitiatorUserId.value = myresopnse[0].EMP_USERID;
                            InitiatorName.value = FirstName.value + " " + LastName.value;
                            InitiatorEmail.value = myresopnse[0].EMAILID;
                            FulCollege.value = myresopnse[0].FUL_COLLEGE;
                            EmplId.value = myresopnse[0].EMPLID;
                            //  getManager(EmplId.value,DeptId.value,EmpUnionCD.value);
                            gifModal.style.display = "none";
                            modal.style.display = "none";

                        } else if (myresopnse.length > 1) {
                            gifModal.style.display = "none";
                            modal.style.display = "block";


                            var col = [];
                            col.push("EMPLID");
                            col.push("LAST_NAME");
                            col.push("FIRST_NAME");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Emp ID", "Last Name", "First Name"];
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
                                        CWID.value = myresopnse[n].EMPLID;
                                        FirstName.value = myresopnse[n].FIRST_NAME;
                                        LastName.value = myresopnse[n].LAST_NAME;
                                        FacultyEmail.value = myresopnse[n].EMAILID;
                                        FacultyUserID.value = myresopnse[n].EMP_USERID;
                                        FacultyName.value = FirstName.value + " " + LastName.value;
                                        DeptId.value = myresopnse[n].DEPTID;

                                        InitiatorUserId.value = myresopnse[n].EMP_USERID;
                                        InitiatorName.value = FirstName.value + " " + LastName.value;
                                        InitiatorEmail.value = myresopnse[n].EMAILID;
                                        FulCollege.value = myresopnse[n].FUL_COLLEGE;
                                        EmplId.value = myresopnse[n].EMPLID;
                                        InitiatorFlag.value = false;
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


/*function getManager(empId,deptId,union_cd){
		
        $.ajax({
            type: 'GET',
            url: "/bin/getHourlyINTManager",
            data: {
                empId: empId,
              	union_cd : union_cd,
                deptId: deptId
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {                                   
                   DeptCooUserId.value = myresponse[0].MANAGER_USERID;
        		   DeptCooEmail.value = myresponse[0].MANAGER_EMAIL_ID;
        		   DeptCooName.value = myresponse[0].SupervisorName;
                } 
                
            }
        });
    
}*/
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
//if((StageIndicator.value == "ToDean") || (StageIndicator.value == "ToEvalInitiator") || (StageIndicator.value == "ToEvalFaculty")){
if (StageIndicator.value == "ToDean"){ 
  var cwid = CWID.value;
  var startTerm = StartTerm.value;
  var endTerm = EndTerm.value;
  
$.ajax({
        type: 'GET',
        url: "/bin/facultyAgreementServlet",

        data: {
          CWID: cwid,
          START_TERM:startTerm,
          END_TERM:endTerm,
          action:"FACULTY_AGREEMENT_DATA"
        },

        dataType: 'json',
        success: function(response) {
            if (response.length !== 0) {
             
          FactAgreementWorkflowInstanceID.value=response[0].WORKFLOW_INSTANCE_ID;
                        
            } 
        
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
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (this.value !== null && (EmplId.value !== this.value) && StageIndicator.value === null) {
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
                workflow_initiator.value = userValue;
                var cwid = CWID.value;

                //InitiatorPanel.visible = true;
                $.ajax({
                    type: 'GET',

                    url: "/bin/getSubstituteFacultyData",
                    data: {
                        action: "SUB_FACULTY_CWID_LOOKUP",
                        cwid: cwid
                    }, 

                    dataType: 'json',
                    success: function(myresopnse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
                            CWID.value = myresopnse[0].EMPLID;

                            FirstName.value = myresopnse[0].FIRST_NAME;
                            LastName.value = myresopnse[0].LAST_NAME;
                            FacultyEmail.value = myresopnse[0].EMAILID;
                            FacultyUserID.value = myresopnse[0].EMP_USERID;
                            FacultyName.value = FirstName.value + " " + LastName.value;
                            DeptId.value = myresopnse[0].DEPTID;
                          
                          FulCollege.value = myresopnse[0].FUL_COLLEGE;
                          College.value = myresopnse[0].FUL_COLLEGE_NAME;

                            InitiatorFlag.value = true;

                            InitiatorPanel.visible = true;
                            FacultySignPanel.visible = false;

                            //  getManager(EmplId.value,DeptId.value,EmpUnionCD.value);
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
                            var headings = ["", "Emp ID", "Last Name", "First Name", "Dept Id"];
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
                                        CWID.value = myresopnse[n].EMPLID;
                                        FirstName.value = myresopnse[n].FIRST_NAME;
                                        LastName.value = myresopnse[n].LAST_NAME;
                                        FacultyEmail.value = myresopnse[n].EMAILID;
                                        FacultyUserID.value = myresopnse[n].EMP_USERID;
                                        FacultyName.value = FirstName.value + " " + LastName.value;
                                        DeptId.value = myresopnse[n].DEPTID;
                                        FulCollege.value = myresopnse[n].FUL_COLLEGE;
                                        College.value = myresopnse[n].FUL_COLLEGE_NAME;
                                        //    FulCollege.value = myresopnse[n].FUL_COLLEGE;
                                        // InitiatorFlag.value = myresopnse[n].EMPLID;
                                    //  InitiatorFlag.value = true;
                                      
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

function ChairDeanInfo(deptId) {

    var dept_id = this.value;
    $.ajax({
        type: 'GET',
        url: "/bin/getChairDeanInfo",
        data: {
            dept_id: dept_id
        },
        dataType: 'json',

        success: function(chairInfoResult) {

            if (chairInfoResult.length !== 0) {

                ChairUserID.value = chairInfoResult[0].CHAIR_USERID;
                ChairEmail.value = chairInfoResult[0].CHAIR_EMAIL;
                HiddenChairName.value = chairInfoResult[0].CHAIR_NAME;
                ChairEmail.value = "mamata.hampannavar@thoughtfocus.com";


            }

        }
    });

}
/*function getDeanData(college){
$.ajax({
                        type: 'GET',
                        url: "/bin/getPreRetirementData",
                        data: {
                            fulCollege: this.value,
                            action: "PR_DEAN_DATA"
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                          DeanUserID.value = myresponse[0].EMP_USERID;
                          DeanName.value = myresponse[0].EMPNAME;
                          DeanEmail.value = myresponse[0].EMP_EMAIL;
                          DeanEmail.value = "mamata.hampannavar@thoughtfocus.com";
                        }
   });
}*/
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_CWID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_CWID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
function ChairDeanInfo(deptId){
		
       var dept_id = this.value;
  $.ajax({
                                type: 'GET',
                                url: "/bin/getChairDeanInfo",
								data:{dept_id:dept_id},
                                dataType: 'json',

                                success: function(myresponse) {
                                    
                                    if (myresponse.length !== 0) {                                       
                                        
                                        DeanUserID.value  = myresponse[0].DEAN_USERID;
										DeanEmail.value  = myresponse[0].DEAN_EMAIL;
                                        DeanName.value =  myresponse[0].DEAN_NAME;
                                      	DeanEmail.value = "mamata.hampannavar@thoughtfocus.com";
                                       
                                        
                                    }

                                }
                            });
    
}
}
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_CWID_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_CWID_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            function ChairDeanInfo(deptId){
		
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
                                      	ChairEmail.value = "mamata.hampannavar@thoughtfocus.com";
                                        DeanUserID.value  = chairInfoResult[0].DEAN_USERID;
										DeanEmail.value  = chairInfoResult[0].DEAN_EMAIL;
                                        DeanName.value =  chairInfoResult[0].DEAN_NAME;
                                      	DeanEmail.value = "mamata.hampannavar@thoughtfocus.com";
                                        
                                    }

                                }
                            });
    
}
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_FirstName_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_FirstName_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDean"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        DeanDate.value = d;

        DeanDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                   DeanSignature.value = userValue;
                  // DeanDate.value = myresopnse[0].SERVER_DATE;
                   DeanPrintName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        DeanSignature.enabled = false;
        DeanPrintName.enabled = false;
        
    
} else {
    DeanSignature.value = "";
    DeanDate.value = "";
    DeanPrintName.value = "";
   
}
}
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChair"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        Chair1Date.value = d;

        Chair1Date.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                   Chair1Signature.value = userValue;
                  // Chair1Date.value = myresopnse[0].SERVER_DATE;
                   Chair1PrintName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        Chair1Signature.enabled = false;
        Chair1PrintName.enabled = false;
        
    
} else {
    Chair1Signature.value = "";
    Chair1Date.value = "";
    Chair1PrintName.value = "";
   
}
}
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_Chair1PrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_Chair1PrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_Chair1Signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_Chair1Signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_Chair1Date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_Chair1Date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_FirstName_init00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_FirstName_init00 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_LastName_init00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_LastName_init00 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_workflow_initiator_init0 = function (scope) {
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
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/request-for-reasonable-accommodation/request-for-reasonable-accommodation');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FirstName.value + "_"+LastName.value);
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
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_saveguidedraft1629881233615_click0 = function (scope) {
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
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
if(InitiatedDate.value > EndTermDate.value){
      showErrorModal("Alert !", "Form can't be Sumbitted after Term End Date");
  }else {
	  submitAction();		
	      }
  
function submitAction(){ 

if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+CWID.value ;
}
EmailSubject.value = "Test - Faculty Assigned Time Agreement "+FirstName.value+", "+LastName.value;
var email="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
FacultyEmail.value = email;
ChairEmail.value =email;
DeanEmail.value = email;
InitiatorEmail.value = email;

var flag = 0;
if(flag === 0 ){
guideBridge.submit();
}
}
}
        }
	}
}
/**
 * @function request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_submit1600234699256_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_reasonable_accommodation_request_for_reasonable_accommodation.generated_submit1600234699256_click1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(CWID.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+CWID.value ;
}
EmailSubject.value = "Test - Faculty Assigned Time Agreement "+FirstName.value+", "+LastName.value;
var email="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
FacultyEmail.value = email;
ChairEmail.value =email;
DeanEmail.value = email;
InitiatorEmail.value = email;

var flag = 0;
if(flag === 0 ){
guideBridge.submit();
}
}
        }
	}
}
