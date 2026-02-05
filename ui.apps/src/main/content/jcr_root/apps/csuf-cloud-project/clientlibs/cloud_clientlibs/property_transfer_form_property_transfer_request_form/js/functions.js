/**
 * @function property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userValue;
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',
        success: function(myresopnse) {
            var userValue = myresopnse.userId;
            workflow_initiator.value = userValue;
            getEmployeeData(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getEmployeeData(userValue){
  $.ajax({
    type: 'GET',
    url: "/bin/getPropertTransferRequestFormData",
    data: {
        action: "CURRENT_CUSTODIAN_USERID_LOOKUP",
        userID: userValue
    },
    dataType: 'json',
    success: function(myresopnse) {
        if (myresopnse.length !== null) {
          TFCurrentCustodian.value = myresopnse[0].FIRST_NAME+" "+myresopnse[0].LAST_NAME+" - "+myresopnse[0].EMPLID;
          TFDivision.value = myresopnse[0].DIV;
          DeptID.value = myresopnse[0].DEPTID;
          Division.value = myresopnse[0].DIVSION;
          TFDepartment.value = myresopnse[0].DEPARTMENT;
          CurrentCustodianCWID.value = myresopnse[0].EMPLID;
           CWID.value = myresopnse[0].EMPLID;
          CurrentCustodianFullName.value = myresopnse[0].FIRST_NAME+" "+myresopnse[0].LAST_NAME; 
          CurrentCustodianFirstName.value = myresopnse[0].FIRST_NAME; 
          CurrentCustodianLastName.value = myresopnse[0].LAST_NAME; 
          //CurrentCustodianEmailId.value = myresopnse[0].EMAILID; 
         // CurrentCustodianEmailId.value = "yjayaram@fullerton.edu";
           CurrentCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
           CurrentCustodianUserId.value = userValue; 
          InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
          // InitiatorEmail.value = "yjayaram@fullerton.edu";
		  InitiatorUserID.value = myresopnse[0].EMP_USERID;
		  InitiatorName.value = CurrentCustodianFirstName.value + " " + CurrentCustodianLastName.value;
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
 * @function property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getPropertTransferRequestFormData",
        data: {
            action: "DEPARTMENT_LOOKUP"
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length !== null) {
                var deptArray = [];
                for (var a = 0; a < myresponse.length; a++) {
                    deptArray.push(myresponse[a].DEPTID+" - "+myresponse[a].DEPTNAME);
                }
                TTDepartment.items = deptArray;
                NewDepartmentDataArray.value = JSON.stringify(myresponse);
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
 * @function property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
   DepartmentAssetCoordinatorSignaturePanel.visible = false;
   DepartmentAdministratorSignaturePanel.visible = false;
    NewOwnerSignaturePanel.visible = false;
    AssetManagementSignaturePanel.visible = false;
  
  //new
  CurrentOwnerSignaturePanel.visible=true;
  CurrentOwnerSignaturePanel.enabled=true;
  PropertyTransferInformationPanel.visible=true;
  PropertyTransferInformationPanel.enabled=true;
  
}
  
  if (StageIndicator.value == "ToInitiator") {
    
    DepartmentAssetCoordinatorSignaturePanel.visible = false;
   DepartmentAdministratorSignaturePanel.visible = false;
    NewOwnerSignaturePanel.visible = false;
    AssetManagementSignaturePanel.visible = false;
    
CurrentOwnerSignaturePanel.visible=true;
CurrentOwnerSignaturePanel.enabled=true;

    
   if (DepartmentAssetCoordinatorSignatureCB.value == "1") {
     DepartmentAssetCoordinatorSignaturePanel.visible = true;
     DepartmentAssetCoordinatorSignaturePanel.enabled = false; 
    } else {
      DepartmentAssetCoordinatorSignaturePanel.visible = false;
    }
  
   if (DepartmentAdministratorSignatureCB.value == "1") {
     DepartmentAdministratorSignaturePanel.visible = true;
     DepartmentAdministratorSignaturePanel.enabled = false; 
    } else {
      DepartmentAdministratorSignaturePanel.visible = false;
    }
  
   if (AssentManagementSignatureCB.value == "1") {
     AssetManagementSignaturePanel.visible = true;
     AssetManagementSignaturePanel.enabled = false; 
    } else {
      AssetManagementSignaturePanel.visible = false;
    }
  
} else if (StageIndicator.value == "ToDepartmentAssetCoordinator") {
    PropertyTransferInformationPanel.enabled = false;
   DepartmentAdministratorSignaturePanel.visible = false;
    CurrentOwnerSignaturePanel.enabled = false;
  NewOwnerSignaturePanel.visible = false;
    AssetManagementSignaturePanel.visible = false;
  
   if (CurrentOwnerSignatureCB.value == "1") {
     CurrentOwnerSignaturePanel.visible = true;
     CurrentOwnerSignaturePanel.enabled = false; 
    } else {
      CurrentOwnerSignaturePanel.visible = false;
    }
  
   if (DepartmentAdministratorSignatureCB.value == "1") {
     DepartmentAdministratorSignaturePanel.visible = true;
     DepartmentAdministratorSignaturePanel.enabled = false; 
    } else {
      DepartmentAdministratorSignaturePanel.visible = false;
    }
  
   if (AssentManagementSignatureCB.value == "1") {
     AssetManagementSignaturePanel.visible = true;
     AssetManagementSignaturePanel.enabled = false; 
    } else {
      AssetManagementSignaturePanel.visible = false;
    }
  
}else if (StageIndicator.value == "ToDepartmentAdministrator") {
    PropertyTransferInformationPanel.enabled = false;
    CurrentOwnerSignaturePanel.enabled = false;
   NewOwnerSignaturePanel.visible = false;
  DepartmentAssetCoordinatorSignaturePanel.enabled = false;
    AssetManagementSignaturePanel.visible = false;
  
  if (CurrentOwnerSignatureCB.value == "1") {
     CurrentOwnerSignaturePanel.visible = true;
     CurrentOwnerSignaturePanel.enabled = false; 
    } else {
      CurrentOwnerSignaturePanel.visible = false;
    }
  
  if (DepartmentAssetCoordinatorSignatureCB.value == "1") {
     DepartmentAssetCoordinatorSignaturePanel.visible = true;
     DepartmentAssetCoordinatorSignaturePanel.enabled = false; 
    } else {
      DepartmentAssetCoordinatorSignaturePanel.visible = false;
    }
  
  if (AssentManagementSignatureCB.value == "1") {
     AssetManagementSignaturePanel.visible = true;
     AssetManagementSignaturePanel.enabled = false; 
    } else {
      AssetManagementSignaturePanel.visible = false;
    }
  
  
}else if (StageIndicator.value == "ToNewCustodian") {
    PropertyTransferInformationPanel.enabled = false;
    CurrentOwnerSignaturePanel.enabled = false;
  DepartmentAssetCoordinatorSignaturePanel.enabled = false;
   DepartmentAdministratorSignaturePanel.enabled = false;
    AssetManagementSignaturePanel.visible = false;
  
  if (CurrentOwnerSignatureCB.value == "1") {
     CurrentOwnerSignaturePanel.visible = true;
     CurrentOwnerSignaturePanel.enabled = false; 
    } else {
      CurrentOwnerSignaturePanel.visible = false;
    }
  
} else if (StageIndicator.value == "ToAssetManagement") {
    PropertyTransferInformationPanel.enabled = false;
    CurrentOwnerSignaturePanel.enabled = false;
    NewOwnerSignaturePanel.enabled = false;
   DepartmentAssetCoordinatorSignaturePanel.enabled = false;
   DepartmentAdministratorSignaturePanel.enabled = false;
  
  if (CurrentOwnerSignatureCB.value == "1") {
     CurrentOwnerSignaturePanel.visible = true;
     CurrentOwnerSignaturePanel.enabled = false; 
    } else {
      CurrentOwnerSignaturePanel.visible = false;
    }
  
  if (CurrentOwnerSignatureCB.value == "1") {
     CurrentOwnerSignaturePanel.visible = true;
     CurrentOwnerSignaturePanel.enabled = false; 
    } else {
      CurrentOwnerSignaturePanel.visible = false;
    }
  if (DepartmentAdministratorSignatureCB.value == "1") {
     DepartmentAdministratorSignaturePanel.visible = true;
     DepartmentAdministratorSignaturePanel.enabled = false; 
    } else {
      DepartmentAdministratorSignaturePanel.visible = false;
    }
  
  if (DepartmentAssetCoordinatorSignatureCB.value == "1") {
     DepartmentAssetCoordinatorSignaturePanel.visible = true;
     DepartmentAssetCoordinatorSignaturePanel.enabled = false; 
    } else {
      DepartmentAssetCoordinatorSignaturePanel.visible = false;
    }
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
    var userValue;
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',
        success: function(myresopnse) {
            var userValue = myresopnse.userId;
            workflow_initiator.value = userValue;
            getEmployeeData(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}
debugger;
function getEmployeeData(userValue){
  $.ajax({
    type: 'GET',
    url: "/bin/getPropertTransferRequestFormData",
    data: {
        action: "CURRENT_CUSTODIAN_USERID_LOOKUP",
        userID: userValue
    },
    dataType: 'json',
    success: function(myresopnse) {
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
       // if (myresopnse.length !== null) {
if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
          TFCurrentCustodian.value = myresopnse[0].FIRST_NAME+" "+myresopnse[0].LAST_NAME+" - "+myresopnse[0].EMPLID;
          TFDivision.value = myresopnse[0].DIV;
          DeptID.value = myresopnse[0].DEPTID;
          Division.value = myresopnse[0].DIVSION;
          TFDepartment.value = myresopnse[0].DEPARTMENT;
          CurrentCustodianCWID.value = myresopnse[0].EMPLID;
           CWID.value = myresopnse[0].EMPLID;
          CurrentCustodianFullName.value = myresopnse[0].FIRST_NAME+" "+myresopnse[0].LAST_NAME; 
          CurrentCustodianFirstName.value = myresopnse[0].FIRST_NAME; 
          CurrentCustodianLastName.value = myresopnse[0].LAST_NAME; 
          //CurrentCustodianEmailId.value = myresopnse[0].EMAILID; 
         // CurrentCustodianEmailId.value = "yjayaram@fullerton.edu";
           CurrentCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
           CurrentCustodianUserId.value = userValue; 
          InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
          // InitiatorEmail.value = "yjayaram@fullerton.edu";
		  InitiatorUserID.value = myresopnse[0].EMP_USERID;
		  InitiatorName.value = CurrentCustodianFirstName.value + " " + CurrentCustodianLastName.value;

                            ////InitiatorFlag.value = true;

							////CurrentCustodianDetailsPanel.visible = true;
                          
							gifModal.style.display = "none";
							modal.style.display = "none";
        } else if (myresopnse.length > 1) {
							gifModal.style.display = "none";
							modal.style.display = "block";


							var col = [];
							col.push("EMPLID");
							col.push("LAST_NAME");
							col.push("FIRST_NAME");
							col.push("DIVSION");
							col.push("DEPTNAME");

							var table = document.createElement("table");
							table.id = "tb";
							var tr = table.insertRow(-1);
							var headings = ["", "Emp ID", "Last Name", "First Name", "Div", "Department"];
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
										
                                 // debugger;
                                      
          TFCurrentCustodian.value = myresopnse[n].FIRST_NAME+" "+myresopnse[n].LAST_NAME+" - "+myresopnse[n].EMPLID;
          TFDivision.value = myresopnse[n].DIV;
          DeptID.value = myresopnse[n].DEPTID;
          Division.value = myresopnse[n].DIVSION;
          TFDepartment.value = myresopnse[n].DEPARTMENT;
          CurrentCustodianCWID.value = myresopnse[n].EMPLID;
           CWID.value = myresopnse[n].EMPLID;
          CurrentCustodianFullName.value = myresopnse[n].FIRST_NAME+" "+myresopnse[n].LAST_NAME; 
          CurrentCustodianFirstName.value = myresopnse[n].FIRST_NAME; 
          CurrentCustodianLastName.value = myresopnse[n].LAST_NAME; 
          //CurrentCustodianEmailId.value = myresopnse[n].EMAILID; 
         // CurrentCustodianEmailId.value = "yjayaram@fullerton.edu";
           CurrentCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
           CurrentCustodianUserId.value = userValue; 
          InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
          // InitiatorEmail.value = "yjayaram@fullerton.edu";
		  InitiatorUserID.value = myresopnse[n].EMP_USERID;
		  InitiatorName.value = CurrentCustodianFirstName.value + " " + CurrentCustodianLastName.value;

										////InitiatorFlag.value = true;

										////CurrentCustodianDetailsPanel.visible = true;
										
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
						} span.onclick = function() {

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
                       window.onclick = function(event) {
							if (event.target == modal) {
								modal.style.display = "none";
							}
						};
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
 * @function property_transfer_form_property_transfer_request_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            caseId.value = myresponse.CASEID;
        }
    });
}
this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_CWID_init0 = function (scope) {
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
 * @function property_transfer_form_property_transfer_request_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //debugger;
if ((StageIndicator.value === null) || (StageIndicator.value == "ToInitiator")) {
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

							
		  TFCurrentCustodian.value = myresopnse[0].FIRST_NAME+" "+myresopnse[0].LAST_NAME+" - "+myresopnse[0].EMPLID;
         // TFDivision.value = myresopnse[0].DIV;
          //TFDivision.value = myresopnse[0].DIVSION;
          TFDivision.value = myresopnse[0].DIVSION+" "+myresopnse[0].DIVISION_NAME;
                          Division.value = myresopnse[0].DIVSION;
          //TFDepartment.value = myresopnse[0].DEPARTMENT;
          TFDepartment.value = myresopnse[0].DEPTNAME;
          DeptID.value = myresopnse[0].DEPTID;
          CurrentCustodianCWID.value = myresopnse[0].EMPLID;
          CurrentCustodianFullName.value = myresopnse[0].FIRST_NAME+" "+myresopnse[0].LAST_NAME; 
          CurrentCustodianFirstName.value = myresopnse[0].FIRST_NAME; 
          CurrentCustodianLastName.value = myresopnse[0].LAST_NAME; 
          //CurrentCustodianEmailId.value = myresopnse[0].EMAILID; 
         // CurrentCustodianEmailId.value = "yjayaram@fullerton.edu";
           CurrentCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
          CurrentCustodianUserId.value = userValue; 

							InitiatorFlag.value = true;

							CurrentCustodianDetailsPanel.visible = true;
                          
							gifModal.style.display = "none";
							modal.style.display = "none";

						} else if (myresopnse.length > 1) {
							gifModal.style.display = "none";
							modal.style.display = "block";


							var col = [];
							col.push("EMPLID");
							col.push("LAST_NAME");
							col.push("FIRST_NAME");
							col.push("DIVSION");
							col.push("DEPTNAME");

							var table = document.createElement("table");
							table.id = "tb";
							var tr = table.insertRow(-1);
							var headings = ["", "Emp ID", "Last Name", "First Name", "Div", "Department"];
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
										
                                 // debugger;
                                      
          TFCurrentCustodian.value = myresopnse[n].FIRST_NAME+" "+myresopnse[n].LAST_NAME+" - "+myresopnse[n].EMPLID;
          //TFDivision.value = myresopnse[n].DIVSION;
          TFDivision.value = myresopnse[n].DIVSION+" "+myresopnse[n].DIVISION_NAME;
                                      Division.value = myresopnse[n].DIVSION;
          DeptID.value = myresopnse[n].DEPTID;
          TFDepartment.value = myresopnse[n].DEPTNAME;
          CurrentCustodianCWID.value = myresopnse[n].EMPLID;
          CurrentCustodianFullName.value = myresopnse[n].FIRST_NAME+" "+myresopnse[n].LAST_NAME; 
          CurrentCustodianFirstName.value = myresopnse[n].FIRST_NAME; 
          CurrentCustodianLastName.value = myresopnse[n].LAST_NAME; 
          //CurrentCustodianEmailId.value = myresopnse[0].EMAILID; 
         // CurrentCustodianEmailId.value = "yjayaram@fullerton.edu";
           CurrentCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
          CurrentCustodianUserId.value = userValue; 

										InitiatorFlag.value = true;

										CurrentCustodianDetailsPanel.visible = true;
										
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
 * @function property_transfer_form_property_transfer_request_form.generated_TFDepartment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TFDepartment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TFDepartment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TFDepartment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if ((StageIndicator.value === null) || (StageIndicator.value == "ToInitiator")) {
  getAddminData(Division.value);
}

debugger; 
function getAddminData(division){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";

	$.ajax({
		type: 'GET',
		url: "/bin/propertyManagementServlet",

		data: {
			action: 'DEPT_ADMIN_DATA', 
          division: division
		},

		dataType: 'json',

		success: function(myresponse) {
			if (myresponse.length >= 1) {
				var progarray = [];
				for (var i = 0; i < myresponse.length; i++) {
					var item = myresponse[i].EMP_NAME + " - " + myresponse[i].EMAILID;
					progarray.push(item);
				}
				ApproverName.items = progarray.sort();
				approverJSONDetails.value = JSON.stringify(myresponse);
			}
			gifModal.style.display = "none";
		}
	});
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DeptID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DeptID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if ((StageIndicator.value === null) || (StageIndicator.value == "ToInitiator")) {
  getAssetCoData(Division.value,DeptID.value);
}

debugger; 
function getAssetCoData(division,deptId){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	$.ajax({
		type: 'GET',
		url: "/bin/propertyManagementServlet",

		data: {
			action: 'DEPT_ASSET_CO_DATA',
            division: division,
			deptId: deptId
		},

		dataType: 'json',

		success: function(myresponse) {
			if (myresponse.length >= 1) {
				var progarray = [];
				for (var i = 0; i < myresponse.length; i++) {
					var item = myresponse[i].ASSET_COORDINATOR_NAME + " - " + myresponse[i].ASSET_COORDINATOR_EMAILID;
					progarray.push(item);
				}
				CurrentAssetCoordinator.items = progarray.sort();
				currentAssetCoordinatorJSONDetails.value = JSON.stringify(myresponse);
			}
			gifModal.style.display = "none";
		}
	});
}







        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DeptID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DeptID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if ((StageIndicator.value === null) || (StageIndicator.value == "ToInitiator")) {
  getAssetCoData(Division.value,DeptID.value);
}

debugger; 
function getAssetCoData(division,deptId){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
  //  var divisionID = "10237";
   //var deptID = "10247";
	$.ajax({
		type: 'GET',
		url: "/bin/propertyManagementServlet",

		data: {
			action: 'DEPT_ASSET_CO_DATA',
            division: division,
			deptId: deptId
		},

		dataType: 'json',

		success: function(myresponse) {
			if (myresponse.length >= 1) {
				var progarray = [];
				for (var i = 0; i < myresponse.length; i++) {
					var item = myresponse[i].ASSET_COORDINATOR_NAME + " - " + myresponse[i].ASSET_COORDINATOR_EMAILID;
					progarray.push(item);
				}
				RecordKeeperName.items = progarray.sort();
				assetRecordKeeperJSONDetails.value = JSON.stringify(myresponse);
			}
			gifModal.style.display = "none";
		}
	});
}







        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TFDivision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TFDivision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled= false;

        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TFCurrentCustodian_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TFCurrentCustodian_init0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null) || (StageIndicator.value=="ToInitiator")){
  this.enabled = false;
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_CurrentAssetCoordinator_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_CurrentAssetCoordinator_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator") ) {
  debugger;
    var currentAssetCoDropDownVal = CurrentAssetCoordinator.value;
    currentAssetCoDropDownVal = currentAssetCoDropDownVal.substr(0, currentAssetCoDropDownVal.indexOf(' - '));
    CurrentAssetCoordinatorFullName.value = currentAssetCoDropDownVal;
  
    var chairInfo = CurrentAssetCoordinatorFullName.value;
    var chairInfoArray = [];
    var chairActualInfoArray = [];
    var chairDetailsParsedArray = [];
    var chairDetailsListObj = {};

    chairDetailsArray = currentAssetCoordinatorJSONDetails.value;
    console.log("chairDetailsArray= " + chairDetailsArray);
    chairDetailsParsedArray = JSON.parse(chairDetailsArray);

    for (var s = 0; s < chairDetailsParsedArray.length; s++) {
        chairInfoArray.push(chairDetailsParsedArray[s]);
    }

    for (var chairDetails = 0; chairDetails < chairInfoArray.length; chairDetails++) {
        chairDetailsListObj = chairInfoArray[chairDetails];
        if (chairInfo == chairDetailsListObj["ASSET_COORDINATOR_NAME"]) {
            CurrentAssetCoordinatorFullName.value = chairDetailsListObj["ASSET_COORDINATOR_NAME"];
            CurrentAssetCoordinatorSign.value = chairDetailsListObj["ASSET_COORDINATOR_NAME"];
            CurrentAssetCoordinatorUserId.value = chairDetailsListObj["ASSET_COORDINATOR_USERID"];                   
            CurrentAssetCoordinatorEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
         // CurrentAssetCoordinatorEmailId.value = "yjayaram@fullerton.edu";
        }
    }
}



        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_PropertyTagandSerialNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_PropertyTagandSerialNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Row1.instanceManager.instances[0].PropertyTagandSerialNumber.mandatory = true;
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_PropertyTagandSerialNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_PropertyTagandSerialNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null || StageIndicator.value == "ToInitiator"){
var assetID = this.value; 
$.ajax({
    type: 'GET',
    url: "/bin/getAssetManagementPropertyAssetData",
    data: {
        action: "ASSET_API_LOOKUP",
        assetId: assetID
    },
    dataType: 'json',
    success: function(myresopnse) {
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];

       if (myresopnse.length === 1 ) {
         var assetModelID="";
         var assetLocation="";
         var otherLocation="";
         for (var i = 0; i < myresopnse.length; i++) {
    		var resultArray = myresopnse[i].result;
    		for (var j = 0; j < resultArray.length; j++) {
        		var assetsArray = resultArray[j].assets;
        			for (var k = 0; k < assetsArray.length; k++) {
            			otherLocation = assetsArray[k].other_location;
            			assetModelID = assetsArray[k].model_id;
            			assetLocation = assetsArray[k].location;
        			}
   			 }
		}
         
         
         if((otherLocation === "") && (assetModelID === "") && (assetLocation === "")){
         Description.value = " ";
         CurrentLocation.value = " ";              
         NewLocation.value = " "; 
         }else{   
        Description.value = assetModelID;
        CurrentLocation.value = assetLocation;              
        NewLocation.value = otherLocation;  
        }       
        }
      else {
        Description.value = null;
        CurrentLocation.value = null;              
        NewLocation.value = null; 
                }
    },
    error: function(error) {
        alert("error block=" + error);
       // gifModal.style.display = "none"; // Consider hiding the GIF modal on error
    }
});
}

        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_PropertyTagandSerialNumber_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_PropertyTagandSerialNumber_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var assetID = this.value;
debugger;

$.ajax({
    type: 'GET',
    url: "/bin/propertyManagementServlet",
    data: {
        action: "ASSET_DETAILS",
        tagNumber: assetID
    },
    dataType: 'json',
    success: function(response) {
        // Check for valid response from the first servlet
        // Default to empty if no data is available
        var model = "";
        var desc = "";
		var location = "";

        if (response.length === 1) {
            model = response[0].MODEL || ""; 
            desc = response[0].DESCR || "";
            location = response[0].LOCATION || "";		

            if (model === "" && desc === "" && location === "" ) {             
				Description.value = "";
                CurrentLocation.value = "";          
                
            } else {
                
				Description.value = desc + " ," + model;
                CurrentLocation.value = location;              
        
            }
        } else if (response.length === 0 || (Description.value === "") || (CurrentLocation.value === "")) {
            // If response is empty and other details are empty, then
            $.ajax({
                type: 'GET',
                url: "/bin/getAssetManagementPropertyAssetData",
                data: {
                    action: "ASSET_API_LOOKUP",
                    assetId: assetID
                },
                dataType: 'json',
                success: function(myresponse) {
                    // Check for valid response from the second servlet
                    var assetModelID="";
         			var assetLocation="";
         			var otherLocation="";
                    var serialNo="";
                    debugger;

                    if (myresponse.length === 1) {
                        // Iterate over the response data 
                        for (var i = 0; i < myresponse.length; i++) {
                            var resultArray = myresponse[i].result;
                            for (var j = 0; j < resultArray.length; j++) {
                                var assetsArray = resultArray[j].assets;
                                for (var k = 0; k < assetsArray.length; k++) {                                 
									otherLocation = assetsArray[k].other_location || "";
            			            assetModelID = assetsArray[k].model_id || "";
            			            assetLocation = assetsArray[k].location || "";
                                    serialNo = assetsArray[k].serial_number || "";
                                }
                            }
                        }

                        // Update the details if found
                       if((otherLocation === "") && (assetModelID === "") && (assetLocation === "") && (serialNo === "")){
         Description.value = " ";
         CurrentLocation.value = " ";              
         NewLocation.value = " "; 
         }else{   
        Description.value = serialNo + " "+ "and"+ " " + assetModelID;
        CurrentLocation.value = assetLocation;              
        NewLocation.value = otherLocation;  
        }       
        }
					else {
                        Description.value = null;
                        CurrentLocation.value = null;              
                        NewLocation.value = null; 
                    }
                },        
            });
        } else {
            Description.value = null;
            CurrentLocation.value = null;              
            NewLocation.value = null; 
        }
    },
    error: function(error) {
        alert("Error occurred while fetching asset details: " + error.statusText);
    }
});
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_Description_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_Description_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Row1.instanceManager.instances[0].Description.mandatory = true;
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_CurrentLocation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_CurrentLocation_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Row1.instanceManager.instances[0].CurrentLocation.mandatory = true;
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_NewLocation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_NewLocation_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Row1.instanceManager.instances[0].NewLocation.mandatory = true;
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_EquipmentSanitized_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_EquipmentSanitized_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Row1.instanceManager.instances[0].EquipmentSanitized.mandatory = true;
}

        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_EquipementUnlocked_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_EquipementUnlocked_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Row1.instanceManager.instances[0].EquipementUnlocked.mandatory = true;
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TTDepartment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TTDepartment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    var val = this.value;
    var deptId = val.substring(0, 5);
    debugger;
    var arr = JSON.parse(NewDepartmentDataArray.value);
    for(var i=0; i<arr.length; i++){
      if(arr[i].DEPTID == deptId){
        TTNewDivision.value = arr[i].DIV;
      }
    }
    $.ajax({
    type: 'GET',
    url: "/bin/getPropertTransferRequestFormData",
    data: {
        action: "NEW_CUSTODIAN_LOOKUP",
        deptID: deptId
    },
    dataType: 'json',
    success: function(myresopnse) {
        if (myresopnse.length !== null) {
          var deptArray = [];
                for (var a = 0; a < myresopnse.length; a++) {
                    deptArray.push(myresopnse[a].EMP_NAME+" - "+myresopnse[a].EMPLID);
                }
                TTNewCustodian.value = "";
                TTNewCustodian.items = deptArray;
                NewDepartmentEmployeeDataArray.value = JSON.stringify(myresopnse);
          
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
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TTNewCustodian_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TTNewCustodian_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    var val = this.value;
    var emplid = val.substring(val.length - 9);
    var arr = JSON.parse(NewDepartmentEmployeeDataArray.value);
    for(var i=0; i<arr.length; i++){
      if(arr[i].EMPLID == emplid){
        NewCustodianCWID.value = emplid;
        NewCustodianFullName.value = arr[i].FIRST_NAME+" "+arr[i].LAST_NAME;
        NewCustodianFirstName.value = arr[i].FIRST_NAME;
        NewCustodianLastName.value = arr[i].LAST_NAME;
        //NewCustodianEmailId.value = arr[i].EMAILID;
       // NewCustodianEmailId.value = "yjayaram@fullerton.edu";
         NewCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
        NewCustodianUserId.value = arr[i].EMP_USERID;
      }
    }
  } else{
       NewCustodianCWID.value = "";
        NewCustodianFullName.value = "";
        NewCustodianFirstName.value = "";
        NewCustodianLastName.value = "";
        NewCustodianEmailId.value = "";
        NewCustodianUserId.value = "";
  }
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_RecordKeeperName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_RecordKeeperName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator" && RefreshFlag.value == "true") ) {
  debugger;
    var assetCoDropDownVal = RecordKeeperName.value;
    assetCoDropDownVal = assetCoDropDownVal.substr(0, assetCoDropDownVal.indexOf(' - '));
    DepartmentAssetCoordinatorFullName.value = assetCoDropDownVal;
  
    var chairInfo = DepartmentAssetCoordinatorFullName.value;
    var chairInfoArray = [];
    var chairActualInfoArray = [];
    var chairDetailsParsedArray = [];
    var chairDetailsListObj = {};

    chairDetailsArray = assetRecordKeeperJSONDetails.value;
    console.log("chairDetailsArray= " + chairDetailsArray);
    chairDetailsParsedArray = JSON.parse(chairDetailsArray);

    for (var s = 0; s < chairDetailsParsedArray.length; s++) {
        chairInfoArray.push(chairDetailsParsedArray[s]);
    }

    for (var chairDetails = 0; chairDetails < chairInfoArray.length; chairDetails++) {
        chairDetailsListObj = chairInfoArray[chairDetails];
        if (chairInfo == chairDetailsListObj["ASSET_COORDINATOR_NAME"]) {
            DepartmentAssetCoordinatorFullName.value = chairDetailsListObj["ASSET_COORDINATOR_NAME"];
            DepartmentAssetCoordinatorUserId.value = chairDetailsListObj["ASSET_COORDINATOR_USERID"];                   
            DepartmentAssetCoordinatorEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
         // DepartmentAssetCoordinatorEmailId.value = "yjayaram@fullerton.edu";
        }
    }
}

            
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_ApproverName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_ApproverName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator" && RefreshFlag.value == "true") ) {
  debugger;
    var ChairNameDropDownVal = ApproverName.value;
    ChairNameDropDownVal = ChairNameDropDownVal.substr(0, ChairNameDropDownVal.indexOf(' - '));
    //DeptHeadName.value = ChairNameDropDownVal;
   DepartmentAdministratorFullName.value = ChairNameDropDownVal;
  
   // var chairInfo = DeptHeadName.value;
   var chairInfo = DepartmentAdministratorFullName.value;
    var chairInfoArray = [];
    var chairActualInfoArray = [];
    var chairDetailsParsedArray = [];
    var chairDetailsListObj = {};

    chairDetailsArray = approverJSONDetails.value;
    console.log("chairDetailsArray= " + chairDetailsArray);
    chairDetailsParsedArray = JSON.parse(chairDetailsArray);

    for (var s = 0; s < chairDetailsParsedArray.length; s++) {
        chairInfoArray.push(chairDetailsParsedArray[s]);
    }

    for (var chairDetails = 0; chairDetails < chairInfoArray.length; chairDetails++) {
        chairDetailsListObj = chairInfoArray[chairDetails];
        if (chairInfo == chairDetailsListObj["EMP_NAME"]) {

         /*   DeptHeadName.value = chairDetailsListObj["EMP_NAME"];
            DeptHeadUserID.value = chairDetailsListObj["EMP_USERID"];
            //DeptHeadEmail.value = chairDetailsListObj["EMAILID"];                        
            //DeptHeadEmail.value = "yjayaram@fullerton.edu";
            DeptHeadEmail.value = "shreyas.manjunatha@thoughtfocus.com"; */
          
          
            DepartmentAdministratorFullName.value = chairDetailsListObj["EMP_NAME"];
            DepartmentAdministratorUserId.value = chairDetailsListObj["EMP_USERID"];
            //DeptAdminApproverEmail.value = chairDetailsListObj["EMAILID"];                        
            //DeptAdminApproverEmail.value = "yjayaram@fullerton.edu";
            DepartmentAdministratorEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
         //  DepartmentAdministratorEmailId.value = "yjayaram@fullerton.edu";
 
        }
    }
}

            
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_CurrentOwnerSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_CurrentOwnerSignatureCB_valueCommit0 = function (scope) {
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
				TFDepartmentAssetRecordKeeperName.value = userValue;
				TFDepartmentAssetRecordKeeperSIgnature.value = userValue;
				TFDepartmentAssetRecordKeeperSignDate.value = myresponse.SERVER_DATE;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
	} else {
		TFDepartmentAssetRecordKeeperName.value = "";
		TFDepartmentAssetRecordKeeperSIgnature.value = "";
		TFDepartmentAssetRecordKeeperSignDate.value = "";
	}
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TFDepartmentAssetRecordKeeperSIgnature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TFDepartmentAssetRecordKeeperSIgnature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TFDepartmentAssetRecordKeeperSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TFDepartmentAssetRecordKeeperSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DepartmentAssetCoordinatorSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DepartmentAssetCoordinatorSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToDepartmentAssetCoordinator") {
	if (this.value == 1) {
		$.ajax({
			type: 'GET',
			url: "/bin/getLoggedInUserDetails",
			dataType: 'json',
			success: function(myresponse) {
				var userValue = myresponse.userName;
				DepartmentAssetCoordinatorSignerName.value = userValue;
				DepartmentAssetCoordinatorSignature.value = userValue;
				DepartmentAssetCoordinatorSignatureDate.value = myresponse.SERVER_DATE;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
	} else {
		DepartmentAssetCoordinatorSignerName.value = "";
		DepartmentAssetCoordinatorSignature.value = "";
		DepartmentAssetCoordinatorSignatureDate.value = "";
	}
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DepartmentAssetCoordinatorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DepartmentAssetCoordinatorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DepartmentAssetCoordinatorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DepartmentAssetCoordinatorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DepartmentAdministratorSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DepartmentAdministratorSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToDepartmentAdministrator") {
	if (this.value == 1) {
		$.ajax({
			type: 'GET',
			url: "/bin/getLoggedInUserDetails",
			dataType: 'json',
			success: function(myresponse) {
				var userValue = myresponse.userName;
				DepartmentAdministratorSignerName.value = userValue;
				DepartmentAdministratorSignature.value = userValue;
				DepartmentAdministratorSignatureDate.value = myresponse.SERVER_DATE;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
	} else {
		DepartmentAdministratorSignerName.value = "";
		DepartmentAdministratorSignature.value = "";
		DepartmentAdministratorSignatureDate.value = "";
	}
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DepartmentAdministratorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DepartmentAdministratorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_DepartmentAdministratorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_DepartmentAdministratorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_NewOwnerSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_NewOwnerSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToNewCustodian") {
	if (this.value == 1) {
		$.ajax({
			type: 'GET',
			url: "/bin/getLoggedInUserDetails",
			dataType: 'json',
			success: function(myresponse) {
				var userValue = myresponse.userName;
				TTNewDepartmentAssetRecordKeeperName.value = userValue;
				TTNewDepartmentAssetRecordKeeperSIgnature.value = userValue;
				TTNewDepartmentAssetRecordKeeperSignDate.value = myresponse.SERVER_DATE;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
	} else {
		TTNewDepartmentAssetRecordKeeperName.value = "";
		TTNewDepartmentAssetRecordKeeperSIgnature.value = "";
		TTNewDepartmentAssetRecordKeeperSignDate.value = "";
	}
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TTNewDepartmentAssetRecordKeeperSIgnature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TTNewDepartmentAssetRecordKeeperSIgnature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_TTNewDepartmentAssetRecordKeeperSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_TTNewDepartmentAssetRecordKeeperSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_AssentManagementSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_AssentManagementSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToAssetManagement") {
	if (this.value == 1) {
		$.ajax({
			type: 'GET',
			url: "/bin/getLoggedInUserDetails",
			dataType: 'json',
			success: function(myresponse) {
				var userValue = myresponse.userName;
				AssetManagementSignerName.value = userValue;
				AssetManagementSignature.value = userValue;
				AssetManagementSignatureDate.value = myresponse.SERVER_DATE;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
	} else {
		AssetManagementSignerName.value = "";
		AssetManagementSignature.value = "";
		AssetManagementSignatureDate.value = "";
	}
}
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_AssetManagementSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_AssetManagementSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_AssetManagementSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_AssetManagementSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
              getPdf();


function getPdf() {
    console.log("in view pdf");
  
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/property-transfer-form/property-transfer-request-form');
            jsonData.append('fileName', "Property Trasfer Request Form");          
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
 * @function property_transfer_form_property_transfer_request_form.generated_saveguidedraft1574920589904_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_saveguidedraft1574920589904_click0 = function (scope) {
    with(this) {
        with(scope) {
            handleDraftSave(this);





        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    aftiaDescCWID.value = CurrentCustodianFullName.value + " " + CurrentCustodianCWID.value;
    EmailSubject.value = "Test - Asset Management Property Transfer Request Form - (" + CurrentCustodianCWID.value + ")";
}


//CurrentCustodianEmailId.value = "yjayaram@fullerton.edu";
//NewCustodianEmailId.value = "yjayaram@fullerton.edu";
//DepartmentAssetCoordinatorEmailId.value = "yjayaram@fullerton.edu";
//DepartmentAdministratorEmailId.value = "yjayaram@fullerton.edu";

CurrentCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
NewCustodianEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
DepartmentAssetCoordinatorEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
DepartmentAdministratorEmailId.value = "shreyas.manjunatha@thoughtfocus.com";

guideBridge.submit();
        }
	}
}
/**
 * @function property_transfer_form_property_transfer_request_form.generated_submit1574920582933_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_transfer_form_property_transfer_request_form.generated_submit1574920582933_click1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 

if (StageIndicator.value === null || StageIndicator.value == "ToInitiator") {
    var rowData = []; 
    
    var rowCount = Row1.instanceManager.instanceCount; 
    for (var i = 0; i < rowCount; i++) {
        

        var rowObject = {};

        
        rowObject.PropertyTagandSerialNumber = Row1.instanceManager.instances[i].PropertyTagandSerialNumber.value;      
        rowData.push(rowObject);
    }

    PropertyTransferRequestDetailsJSON.value = JSON.stringify(rowData); 
    console.log(rowData);
}
        }
	}
}
