/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = true;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = true;
   RequestorPanel.visible = false;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = true;
  
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
  /*if(ReturnCB.value == "1") {
    ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = true;
  }else{
    ReturnAckPanel.visible = false;

  }*/
    
    DeptHeadSignaturePanel.visible = false;    
    AssetPanel.visible = false; 
  
    
   
}

if (StageIndicator.value == "ToInitiator") {
    
    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = true;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = true;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = true;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 
   /* if(ReturnCB.value == "1") {
    ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = true;
    }else{
    ReturnAckPanel.visible = false;
  }
    
    if (ReturnAckCB.value == "1") {
      ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = false;
    } else {
      ReturnAckPanel.visible = false;
    }*/
   if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }
  
    if (AdminCB.value == "1") {
     DeptHeadSignaturePanel.visible = true;
     DeptHeadSignaturePanel.enabled = false; 
    } else {
      DeptHeadSignaturePanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
}
debugger;
if (StageIndicator.value == "ToRequestor") {
    
   EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = true;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = true;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = true;
  
    if (EmployeeCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
    RequestorPanel.visible = true;
    RequestorPanel.enabled = true;
 if (AdminCB.value == "1") {
     DeptHeadSignaturePanel.visible = true;
     DeptHeadSignaturePanel.enabled = false; 
    } else {
      DeptHeadSignaturePanel.visible = false;
    }
	if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
} 

/*if (StageIndicator.value == "ToReturn") {
    
    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = true;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = true;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = true;
  
    if (EmployeeCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
    ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = true;
  
    if (AdminCB.value == "1") {
     DeptHeadSignaturePanel.visible = true;
     DeptHeadSignaturePanel.enabled = false; 
    } else {
      DeptHeadSignaturePanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  
  
}*/

debugger;
if (StageIndicator.value == "ToDeptHead") {
    
    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = false;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = false;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = false;
  /* if(ReturnCB.value == "1") {
    ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = false;
    }else{
    ReturnAckPanel.visible = false;

  }*/

    if (EmployeeCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
   if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }
  /* if (ReturnCB.value == "1") {
      ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = false;
    } else {
      ReturnAckPanel.visible = false;
    }*/
   
    DeptHeadSignaturePanel.visible = true;
    DeptHeadSignaturePanel.enabled = true; 
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
}
  if (StageIndicator.value == "ToAsset") {

    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = false;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = false;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = false;
    
    /*   if(ReturnCB.value == "1") {
    ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = false;
    }else{
    ReturnAckPanel.visible = false;

  }
    
    if (ReturnAckCB.value == "1") {
      ReturnAckPanel.visible = true;
    ReturnAckPanel.enabled = false;
    } else {
      ReturnAckPanel.visible = false;
    }
  */
    if (EmployeeCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }
  
    if (AdminCB.value == "1") {
     DeptHeadSignaturePanel.visible = true;
     DeptHeadSignaturePanel.enabled = false; 
    } else {
      DeptHeadSignaturePanel.visible = false;
    }
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
 
}

        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
          
                var userValue = myresponse.userId;
                workflow_initiator.value = userValue;
                getFacultyDetails(userValue);
              },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

           debugger;
function getFacultyDetails(userValue) {
                $.ajax({
                    type: 'GET',
                    url: "/bin/getVolunteerData",
                    data: {
                        action: "VOLUNTEER_DETAILS",
                        userID: userValue
                    },
                    dataType: 'json',
                    success: function(response) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        if (response.length === 1 && response[0].EMPLID !== undefined) {

                            CWID.value = response[0].EMPLID;
                            FirstName.value = response[0].FIRST_NAME;
                            LastName.value = response[0].LAST_NAME;
                            InitiatorUserID.value = response[0].EMP_USERID;
                            Address.value = response[0].ADDRESS1;
                            State.value = response[0].STATE;
                            ZipCode.value = response[0].POSTAL;
                            InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
                            // InitiatorEmail.value = response[0].EMAILID;
                            DepartmentName.value = response[0].DEPTNAME;
                            SchoolDivision.value = response[0].DIVISION_NAME;
                           // BorrowerName.value = FirstName.value + " " + LastName.value;
                            InitiatorName.value = FirstName.value + " " + LastName.value;
                            deptID_initiator.value = response[0].DEPTID;
                          //  InitiatorFlag.value = false;

                          // ReturnedUserID.value = response[0].EMP_USERID;
                           //ReturnedEmail.value = "soumya.ravindra@thoughtfocus.com";
                            // ReturnedEmail.value = response[0].EMAILID;
                            
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                          /*   RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							 RequestorUserID.value = response[0].EMP_USERID;
							 RequestorName.value = FirstName.value + " " + LastName.value;*/

                            gifModal.style.display = "none";
                            modal.style.display = "none";

                        } else if (response.length > 1) {
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
                                        CWID.value = response[n].EMPLID;
                                        FirstName.value = response[n].FIRST_NAME;
                                        LastName.value = response[n].LAST_NAME;
                                        InitiatorUserID.value = response[n].EMP_USERID;
                                        Address.value = response[n].ADDRESS1;
                                        State.value = response[n].STATE;
                                        ZipCode.value = response[n].POSTAL;
                                      // BorrowerName.value = FirstName.value + " " + LastName.value;
                                        InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
                                        // InitiatorEmail.value = response[n].EMAILID;
                                        DepartmentName.value = response[n].DEPTNAME;
                                        SchoolDivision.value = response[n].DIVISION_NAME;
                                        deptID_initiator.value = response[n].DEPTID;
                                       // InitiatorFlag.value = false;
							//RequestorEmail.value = myresopnse[n].EMAILID;
                           /*  RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							 RequestorUserID.value = response[n].EMP_USERID;
							 RequestorName.value = FirstName.value + " " + LastName.value;*/

                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    //alert("Please select the department");
                                    showErrorModal("Alert !", "Please select the department");
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
                                //alert("Please select the department");
                                showErrorModal("Alert !", "Please select the department");
                                modal.style.display = "block";
                            } else {

                                //alert("Please select the department");
                                showErrorModal("Alert !", "Please select the department");
                                modal.style.display = "block";
                            }

                        };
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        };
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
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = true;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = true;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = true;
  
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
    
    DeptHeadSignaturePanel.visible = false;    
    AssetPanel.visible = false; 
  
}

if (StageIndicator.value == "ToInitiator") {
    
    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = true;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = true;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = true;
if (BorrowReturnRB.value == 1) {
   BorrowedPanel.visible = true;
  ReturnedPanel.visible = false;
}else{
  BorrowedPanel.visible = false;
  ReturnedPanel.visible = true;
}
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 

  
    if (AdminCB.value == "1") {
     DeptHeadSignaturePanel.visible = true;
     DeptHeadSignaturePanel.enabled = false; 
    } else {
      DeptHeadSignaturePanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
}


debugger;
if (StageIndicator.value == "ToDeptHead") {
    
    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = false;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = false;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = false;


    if (EmployeeCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
 
    DeptHeadSignaturePanel.visible = true;
    DeptHeadSignaturePanel.enabled = true; 
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  if (BorrowReturnRB.value == 1) {
   BorrowedPanel.visible = true;
  ReturnedPanel.visible = false;
}else{
  BorrowedPanel.visible = false;
  ReturnedPanel.visible = true;
}
}
  if (StageIndicator.value == "ToAsset") {

    EmployeeInformationPanel.visible = true;
    EmployeeInformationPanel.enabled = false;
    InstructionPanel.visible = true;
    InstructionPanel.enabled = false;
    EquipmentInformation.visible = true;
    EquipmentInformation.enabled = false;
    
    if (EmployeeCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
  
    if (AdminCB.value == "1") {
     DeptHeadSignaturePanel.visible = true;
     DeptHeadSignaturePanel.enabled = false; 
    } else {
      DeptHeadSignaturePanel.visible = false;
    }
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
 if (BorrowReturnRB.value == 1) {
   BorrowedPanel.visible = true;
  ReturnedPanel.visible = false;
}else{
  BorrowedPanel.visible = false;
  ReturnedPanel.visible = true;
}
}

        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

type: 'GET',
url:"/bin/getCaseID",
dataType: 'json',

success: function(myresponse){
caseId.value = myresponse.CASEID;

}
});
}
this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  this.enabled=true;
} else {
  this.enabled=false;
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToInitiator")) {
if (this.value !== null && cwid_initiator.value !== this.value) {
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
				var cwid = CWID.value;

				//InitiatorPanel.visible = true;
				$.ajax({
					type: 'GET',

					url: "/bin/getOffCampusAgreementUse",
					data: {
						action: "OFF_CAMPUS_AGREEMENT_CWID",
						cwid: cwid
					},

					dataType: 'json',
					success: function(response) { 
						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];

						if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {

                         // CWID.value = response[0].EMPLID;
                           FirstName.value = response[0].FIRST_NAME;
                            LastName.value = response[0].LAST_NAME;                     
                            Address.value = response[0].ADDRESS1;
                            State.value = response[0].STATE;
                            ZipCode.value = response[0].POSTAL;
                            DepartmentName.value = response[0].DEPTNAME;
                            SchoolDivision.value = response[0].DIVISION_NAME;
                            deptID_initiator.value = response[0].DEPTID;
                            InitiatorFlag.value = false;
              
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                             RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							 RequestorUserID.value = myresopnse[0].EMP_USERID;
							 RequestorName.value = FirstName.value + " " + LastName.value;
                          
							InitiatorPanel.visible = true;
							RequestorPanel.visible = false;

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
										InitiatorPanel.visible = true;
										RequestorPanel.visible = false;

										FirstName.value = response[n].FIRST_NAME;
                            LastName.value = response[n].LAST_NAME;                     
                            Address.value = response[n].ADDRESS1;
                            State.value = response[n].STATE;
                            ZipCode.value = response[n].POSTAL;
                            DepartmentName.value = response[n].DEPTNAME;
                            SchoolDivision.value = response[n].DIVISION_NAME;
                            deptID_initiator.value = response[n].DEPTID;
                            InitiatorFlag.value = false;
              
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                             RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							 RequestorUserID.value = myresopnse[n].EMP_USERID;
							 RequestorName.value = FirstName.value + " " + LastName.value;

										rButtonStatus = true;
										break;
									}
								}
								if (rButtonStatus === false) {
									//alert("Please select the department");
                                    showErrorModal("Alert !", "Please select the department");
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
								//alert("Please select the department");
								showErrorModal("Alert !", "Please select the department");
								modal.style.display = "block";
							} else {

								//alert("Please select the department");
                                showErrorModal("Alert !", "Please select the department");
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
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_CWID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToInitiator")) {
if (this.value !== null && cwid_initiator.value !== this.value) {
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
				var cwid = CWID.value;

				//InitiatorPanel.visible = true;
				$.ajax({
					type: 'GET',

					url: "/bin/getOffCampusAgreementUse",
					data: {
						action: "OFF_CAMPUS_AGREEMENT_CWID",
						cwid: cwid
					},

					dataType: 'json',
					success: function(myresopnse) {

						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];

						if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
                         // CWID.value = response[0].EMPLID;
                           FirstName.value = myresopnse[0].FIRST_NAME;
                            LastName.value = myresopnse[0].LAST_NAME;                     
                            Address.value = myresopnse[0].ADDRESS1;
                            State.value = myresopnse[0].STATE;
                            ZipCode.value = myresopnse[0].POSTAL;
                            DepartmentName.value = myresopnse[0].DEPTNAME;
                            SchoolDivision.value = myresopnse[0].DIVISION_NAME;
                            deptID_initiator.value = myresopnse[0].DEPTID;
                            InitiatorFlag.value = true;
              
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                         /*   RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							 RequestorUserID.value = myresopnse[0].EMP_USERID;
							 RequestorName.value = FirstName.value + " " + LastName.value;*/
                          
							InitiatorPanel.visible = true;
							RequestorPanel.visible = false;

							gifModal.style.display = "none";
							modal.style.display = "none";

						} else if (myresopnse.length > 1) {
							gifModal.style.display = "none";
							modal.style.display = "block";


							var col = [];
							col.push("EMPLID");
							col.push("LAST_NAME");
							col.push("FIRST_NAME");
							col.push("DEPTNAME");

							var table = document.createElement("table");
							table.id = "tb";
							var tr = table.insertRow(-1);
							var headings = ["", "Emp ID", "Last Name", "First Name", "Department Name"];
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
										InitiatorPanel.visible = true;
										RequestorPanel.visible = false;

										FirstName.value = myresopnse[n].FIRST_NAME;
                            LastName.value = myresopnse[n].LAST_NAME;                     
                            Address.value = myresopnse[n].ADDRESS1;
                            State.value = myresopnse[n].STATE;
                            ZipCode.value = myresopnse[n].POSTAL;
                            DepartmentName.value = myresopnse[n].DEPTNAME;
                            SchoolDivision.value = myresopnse[n].DIVISION_NAME;
                            deptID_initiator.value = myresopnse[n].DEPTID;
                            InitiatorFlag.value = true;
              
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                       /*      RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							 RequestorUserID.value = myresopnse[n].EMP_USERID;
							 RequestorName.value = FirstName.value + " " + LastName.value;*/

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
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_DepartmentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_DepartmentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_SchoolDivision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_SchoolDivision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Address_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Address_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToInitiator") {
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
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_State_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_State_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ZipCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ZipCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_LastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_LastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    var appResult = [];
    if (this.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getFAERData",
            data: {
                action: "FAER_SEARCH_APPROVER",
                lastName: this.value
            },
            dataType: 'json',
            success: function(fundApproverResult) {
                if (fundApproverResult.length !== 0) {
                   // appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;  
                        //SupervisorName.value = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //SupervisorEmail.value = fundApproverResult[i].EMAILID; 
                        //SupervisorEmail.value = "yjayaram@fullerton.edu";
                        DeptAdminEmail.value = "soumya.ravindra@thoughtfocus.com";
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    AdminNameDD.value = "";
                    AdminNameDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    AdminNameDD.items = [];
                    AdminNameDD.value = "";
                    AdminName.value = "";
                    DeptAdminUserID.value = "";
                    DeptAdminEmail.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminNameDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminNameDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null)   {
    var approverName = this.value;
    var approverEmplId;
  var approverEmailId;
  var approverUserId;
    //if (approverName != "Select Optional Reviewer" && approverName !== "") {
  if (approverName !== "") {      
 	 approverUserName = approverName.substr(0, approverName.indexOf(' - '));
        AdminName.value = approverUserName;
     
     approverEmailId = approverName.substr(approverName.indexOf(' - ')+2, approverName.length-1);
     approverUserId = approverEmailId.substr(1, approverEmailId.indexOf('@')-1);
     DeptAdminUserID.value = approverUserId;
      //SupervisorSearchEmailId.value = approverEmailId;
      DeptAdminEmail.value = "soumya.ravindra@thoughtfocus.com";
  }
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
   BorrowedPanel.visible = true;
  ReturnedPanel.visible = false;
}else{
  BorrowedPanel.visible = false;
  ReturnedPanel.visible = true;
}

        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
                 if(this.value == "1"){
        var textVal = "<p><b>Borrower Signature & Acknowledgement</b></p>";
        $("#InitiatorSignatureHeading").html(textVal);
      }else{
        var textVal2 = "<p><b>Returnee Signature & Acknowledgement</b></p>";
        $("#InitiatorSignatureHeading").html(textVal2);
      }
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            	
if(BorrowReturnRB.value == "2"){
  ReturnedEquipName.value = FirstName.value + " " + LastName.value;
  returnedEquipSign.value = FirstName.value + " " + LastName.value;
  ReturnSign.value = FirstName.value + " " + LastName.value;
  ReturnName.value = FirstName.value + " " + LastName.value;
}else{
  ReturnedEquipName.value = "";
  returnedEquipSign.value = "";
  ReturnSign.value = "";
  ReturnName.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowReturnRB_valueCommit3 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(BorrowReturnRB.value == "1"){
  BorrowerAckName.value = FirstName.value + " " + LastName.value;
  BorrowerAckSign.value = FirstName.value + " " + LastName.value;
  BorrowerSign.value = FirstName.value + " " + LastName.value;
  BorrowerName.value = FirstName.value + " " + LastName.value;
}else{
  BorrowerAckName.value = "";
  BorrowerAckSign.value = "";
  BorrowerSign.value = "";
  BorrowerName.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowedPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowedPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Remove_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Remove_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var panelCount = BorrowedEquip.instanceManager.instanceCount;
    if (panelCount == "1") {
        BorrowedEquip.instanceManager.instances[0].Remove.visible = false;
    }


        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Remove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Remove_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var panelCount = BorrowedEquip.instanceManager.instanceCount;
BorrowedEquip.instanceManager.removeInstance(BorrowedEquip.instanceIndex);
if (panelCount == "2") {
    BorrowedEquip.instanceManager.instances[0].Remove.visible = false;
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Add_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_Add_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (BorrowedEquip.instanceManager.instances[0].Remove.visible === false) {
    BorrowedEquip.instanceManager.instances[0].Remove.visible = true;
}

BorrowedEquip.instanceManager.addInstance();


        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnedPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnedPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(ReturnCB.value == "1") {
    ReturnAckPanel.visible = true; 
}else{
  ReturnAckPanel.visible = false; 
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  ReturnedEquip.visible = true;
  DateReturned.visible = true;
  AddReturn.visible = true;
  PropertyTagNumRE.mandatory = true;
  DescriptionRE.mandatory = true; 
  DateReturned.mandatory = true;
}
else{
  ReturnedEquip.visible = false;
  DateReturned.visible = false; 
  AddReturn.visible = false;
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnedEquip_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnedEquip_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RemoveReturn_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RemoveReturn_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var panelCount = ReturnedEquip.instanceManager.instanceCount;
    if (panelCount == "1") {
        ReturnedEquip.instanceManager.instances[0].RemoveReturn.visible = false;
    }
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RemoveReturn_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RemoveReturn_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var panelCount = ReturnedEquip.instanceManager.instanceCount;
ReturnedEquip.instanceManager.removeInstance(ReturnedEquip.instanceIndex);
if (panelCount == "2") {
    ReturnedEquip.instanceManager.instances[0].RemoveReturn.visible = false;
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AddReturn_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AddReturn_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AddReturn_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AddReturn_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (ReturnedEquip.instanceManager.instances[0].RemoveReturn.visible === false) {
    ReturnedEquip.instanceManager.instances[0].RemoveReturn.visible = true;
}

ReturnedEquip.instanceManager.addInstance();
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_DateReturned_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_DateReturned_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToInitiator") || (StageIndicator.value === null)) {
        if (InitiatorDate.value === null) {           
            InitiatorDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;               
                  InitiatorSign.value = userValue;
                  InitiatorName.value = userValue;
                  InitiatorDate.value = myresopnse[0].SERVER_DATE;

                  if(BorrowReturnRB.value == "1"){
                  BorrowerAckDate.value = InitiatorDate.value;
                  }else{
                    ReturnDate.value = InitiatorDate.value;
                  }
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    InitiatorSign.value = "";
    InitiatorDate.value = "";
  InitiatorName.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_InitiatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_InitiatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RequestorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RequestorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToRequestor") || (StageIndicator.value === null)) {
        if (RequestorSignDate.value === null) {           
            RequestorSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  RequestorSignature.value = userValue;
                  RequestorSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    RequestorSignature.value = "";
    RequestorSignDate.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RequestorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RequestorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RequestorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_RequestorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnAckCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnAckCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (this.value == 1) {
    if ((StageIndicator.value == "ToReturn")  || (StageIndicator.value === null)) {
        if (ReturnDate.value === null) {           
            ReturnDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  returnedEquipSign.value = userValue;
                  ReturnedEquipName.value = userValue;
                  ReturnName.value = userValue;
                  ReturnSign.value = userValue;
                  ReturnDate.value = myresopnse[0].SERVER_DATE;
                //  ReturnedEmail.value = myresopnse[0].EMAILID;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    returnedEquipSign.value = "";
    ReturnName.value = "";
  ReturnedEquipName.value = "";
    ReturnDate.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (this.value == 1) {
    if (StageIndicator.value == "ToDeptHead") {
        if (AdminDate.value === null) {           
            AdminDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  AdminSign.value = userValue;
                   AdminName.value = userValue;
                  AdminDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    AdminSign.value = "";
    AdminDate.value = "";
  AdminName.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AdminDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AssetCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AssetCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToAsset") {
        if (AssetDate.value === null) {           
            AssetDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  AssetName.value = userValue;
                  AssetSign.value = userValue;
                  AssetDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    AssetName.value = "";
    AssetSign.value = "";
    AssetDate.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AssetSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AssetSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AssetDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_AssetDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnedEquipName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_ReturnedEquipName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(BorrowReturnRB.value == "2"){
  this.value = FirstName.value + " " + LastName.value;
  returnedEquipSign.value = FirstName.value + " " + LastName.value;
  ReturnSign.value = FirstName.value + " " + LastName.value;
  ReturnName.value = FirstName.value + " " + LastName.value;
}else{
  this.value = "";
  returnedEquipSign.value = "";
  ReturnSign.value = "";
  ReturnName.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowerAckName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_BorrowerAckName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(BorrowReturnRB.value == "1"){
  this.value = FirstName.value + " " + LastName.value;
  BorrowerAckSign.value = FirstName.value + " " + LastName.value;
  BorrowerSign.value = FirstName.value + " " + LastName.value;
  BorrowerName.value = FirstName.value + " " + LastName.value;
}else{
  this.value = "";
  BorrowerAckSign.value = "";
  BorrowerSign.value = "";
  BorrowerName.value = "";
}
        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/off-campus-agreement-use-form/off-campus-agreement-use-form');
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
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(EmplId.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+EmplId.value ;
//}
handleDraftSave(this);


        }
	}
}
/**
 * @function off_campus_agreement_use_form_off_campus_agreement_use_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
off_campus_agreement_use_form_off_campus_agreement_use_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  aftiaDescCWID.value = FirstName.value + " " + LastName.value  + " " + CWID.value;
  EmailSubject.value = "Test - - Off Campus Agreement Use Form - (" + CWID.value + ")";

  InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
  DeptAdminEmail.value = "soumya.ravindra@thoughtfocus.com";
  RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";

  guideBridge.submit();
}



        }
	}
}
