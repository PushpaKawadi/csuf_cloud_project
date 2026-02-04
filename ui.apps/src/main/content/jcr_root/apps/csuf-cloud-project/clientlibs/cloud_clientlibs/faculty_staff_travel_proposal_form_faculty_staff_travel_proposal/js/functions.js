/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
  debugger;
    $.ajax({
      
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            
                var userValue = myresponse.userId;
          //userValue = "nvadlakunta";
                workflow_initiator.value = userValue;
                getStudentDetails(userValue);
               },
            error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getStudentDetails(userValue) {
  debugger;
                $.ajax({
                    type: 'GET',
                    url: "/bin/getFacultyTravelProposal",
                    data: {
                        action: "FTP_STAFF_DETAILS",
                        userID: userValue
                    },
                    dataType: 'json',
                    success: function(myresponse) {
                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];
                        if (myresponse.length === 1 && myresponse[0].EMPLID !== undefined) {
                            FirstName.value = myresponse[0].FIRST_NAME;
                            LastName.value = myresponse[0].LAST_NAME;
                            Phone.value = myresponse[0].PHONE;
                            //Email.value = myresopnse[0].EMAILID;
                            Email.value = "soumya.ravindra@thoughtfocus.com";
                            Initiator_UserID.value = myresponse[0].EMP_USERID;
                            Dept_Id.value = myresponse[0].DEPTID;
                           // DeptName.value = myresopnse[0].DEPTNAME;
                            FullName.value = FirstName.value + " " + LastName.value;
                            //EmpId.value = myresopnse[0].EMPLID;
                            CWID.value = myresponse[0].EMPLID;
                            Ful_College.value = myresponse[0].FUL_COLLEGE;
                            Dept_Id.value = myresponse[0].DEPTID;
                            FullName.enabled = false;
                        	LastName.enabled = false;
                        	Phone.enabled = false;
                        	Email.enabled = false;

                           // gifModal.style.display = "none";
                            modal.style.display = "none";

                        } else if (myresopnse.length > 1) {
                            //gifModal.style.display = "none";
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
                                       FirstName.value = myresponse[n].FIRST_NAME;
                            LastName.value = myresponse[n].LAST_NAME;
                            Phone.value = myresponse[n].PHONE;
                            //Email.value = myresopnse[0].EMAILID;
                            Email.value = "soumya.ravindra@thoughtfocus.com";
                            Initiator_UserID.value = myresponse[n].EMP_USERID;
                            Dept_Id.value = myresponse[n].DEPTID;
                           // DeptName.value = myresopnse[n].DEPTNAME;
                            FullName.value = FirstName.value + " " + LastName.value;
                            //EmpId.value = myresopnse[n].EMPLID;
                            CWID.value = myresponse[n].EMPLID;
                            Ful_College.value = myresponse[n].FUL_COLLEGE;
                            Dept_Id.value = myresponse[n].DEPTID;
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

                            //gifModal.style.display = "none";
                        }
                      debugger;
                        span.onclick = function() {
                          debugger;
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

        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  InitiatorPanel.visible = true;
  ProductionSignaturePanel.visible = false;
  Chair1SignaturePanel.visible = false;
  DeanSignaturePanel.visible = false;
}
if(StageIndicator.value == "ToProductionOffice"){
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  Chair1SignaturePanel.visible = false;
  DeanSignaturePanel.visible = false;
  ApplicantnformationPanel.enabled = false;
  TravelInformationPanel.enabled = false;
  TiersofSupportPanel.enabled = false;
  
  
}
if(StageIndicator.value == "ToChair"){
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  ProductionSignaturePanel.enabled = false;
  Chair1SignaturePanel.visible = true;
  DeanSignaturePanel.visible = false;
  ApplicantnformationPanel.enabled = false;
  TravelInformationPanel.enabled = false;
  TiersofSupportPanel.enabled = false;


}

if(StageIndicator.value == "ToDean"){
  InitiatorPanel.visible = true;
  InitiatorPanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  ProductionSignaturePanel.enabled = false;
  Chair1SignaturePanel.visible = true;
  Chair1SignaturePanel.enabled = false;
  DeanSignaturePanel.visible = true;
  ApplicantnformationPanel.enabled = false;
  TravelInformationPanel.enabled = false;
  TiersofSupportPanel.enabled = false;

  

}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
this.enabled = false;

if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            CaseId.value = myresponse.CASEID;
        },
    });
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_FullName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_FullName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Phone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Phone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.enabled = false;
if(StageIndicator.value === null){
	 
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
 InitiatedDate.value = d;
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Email_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled = false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_FromDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_FromDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (ToDate.value < this.value ) {
   showErrorModal("Alert", "Please Choose the Correct Date"); 
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].TravelInformationPanel[0].ToDate[0]");
}

        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ToDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ToDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value < FromDate.value){
  showErrorModal("Alert", "Please Choose the Correct Date"); 
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].TravelInformationPanel[0].ToDate[0]");
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatorCB_valueCommit0 = function (scope) {
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
                InitiatorSign.value = FullName.value;
                InitiatorDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        InitiatorSign.enabled = false;
        InitiatorDate.enabled = false;
    } else {
        InitiatorSign.value = "";
        InitiatorDate.value = "";
    }
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ProductionCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ProductionCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if (StageIndicator.value == "ToProductionOffice") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                BudgetBy.value = userValue;
                ProdDate.value = myresponse.SERVER_DATE;
                
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        BudgetBy.enabled = false;
        ProdDate.enabled = false;
    } else {
        BudgetBy.value = "";
        ProdDate.value = "";
       
    }
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_BudgetBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_BudgetBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ProdDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ProdDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ChairSignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ChairSignCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToChair") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                ChairSign.value = myresponse.userName;
                ChairDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ChairSign.enabled = false;
        ChairDate.enabled = false;
    } else {
        ChairSign.value = "";
        ChairDate.value = "";
    }
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ChairSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ChairSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_ChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_DeanSignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_DeanSignCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToDean") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                DeanSign.value = myresponse.userName;
                DeanSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        DeanSign.enabled = false;
        DeanSignDate.enabled = false;
    } else {
        DeanSign.value = "";
        DeanSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_DeanSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_DeanSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_DeanSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_DeanSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.enabled=false;
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Ful_College_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Ful_College_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
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
            DeanEmail.value = "soumya.ravindra@thoughtfocus.com";
        }
    });
}
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Dept_Id_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_Dept_Id_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
debugger;
if (StageIndicator.value === null) {
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

                Chair_UserId.value = chairInfoResult[0].CHAIR_USERID;
               // Chair_Email.value = chairInfoResult[0].CHAIR_EMAIL;
                Chair_Name.value = chairInfoResult[0].CHAIR_NAME;
                Chair_Email.value = "soumya.ravindra@thoughtfocus.com";


            }

        }
    });
}


/*debugger;
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/classroomLabEquipmentProposalServlet",
        data: {
            FUL_COLLEGE: Ful_College.value,
            DEPT_ID: this.value,
            action: "CSF_DEPARTMENT_CHAIR_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
           // FUL_COLLEGE.value = myresponse[0].FUL_COLLEGE;
           
            Chair_Email.value = "soumya.ravindra@thoughtfocus.com";
            Chair_Name.value = myresponse[0].CHAIR_NAME;
            Chair_EmpId.value = myresponse[0].CHAIR_EMPLID;
            Chair_UserId.value = myresponse[0].CHAIR_USERID;
        }
    });
} */
        }
	}
}
/**
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*if (AidYear.value !== null) {
    
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }*/

getPdf();

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/faculty-staff-travel-proposal-form/faculty-staff-travel-proposal');
            jsonData.append('fileName', "Testing");          
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
 * @function faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_staff_travel_proposal_form_faculty_staff_travel_proposal.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if ((PresentingCB.value === null) && (ParticipatingCB.value === null) && (AttendingCB.value === null))  {
  showErrorModal("Alert", "Please select atleast one checkbox");
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].TravelInformationPanel[0].textdraw_16476266811679313531141[0]");
} else{
  submitAction();
}
  
  function submitAction() {
    if(StageIndicator.value === null){
    aftiaDescCWID.value = FullName.value + " " + CWID.value;
    EmailSubject.value = "Test -  Faculty/Staff Travel Proposal - " + CWID.value;
  }// ExceptionProcessType.value = "1";
    Email.value = "soumya.ravindra@thoughtfocus.com";
    Chair_Email.value = "soumya.ravindra@thoughtfocus.com";
    DeanEmail.value = "soumya.ravindra@thoughtfocus.com";
  //  FacultyEmail.value = "anupama.dhar@thoughtfocus.com";
  //   FacultyEmail.value = "yjayaram@fullerton.edu";

	guideBridge.submit();
  } 

	
/*if (StageIndicator.value === null) {
    aftiaDescCWID.value = FullName.value + " " + CWID.value;
    EmailSubject.value = "Test - Faculty/Staff Travel Proposal - " + CWID.value;
}
Email.value = "soumya.ravindra@thoughtfocus.com";
Chair_Email.value = "soumya.ravindra@thoughtfocus.com";
DeanEmail.value = "soumya.ravindra@thoughtfocus.com";
    guideBridge.submit();
  */

        }
	}
}
