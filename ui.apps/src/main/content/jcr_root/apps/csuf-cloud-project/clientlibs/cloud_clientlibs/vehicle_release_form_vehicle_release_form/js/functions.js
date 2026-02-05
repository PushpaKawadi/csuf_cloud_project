/**
 * @function vehicle_release_form_vehicle_release_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
    DeptAssetPanel.visible = false;
    ApproverPanel.visible = false;    
    AssetPanel.visible = false;
    CPFMPanel.visible = false;

}
debugger;
if (StageIndicator.value == "ToInitiator") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 

    if (DeptAssetRecCB.value == "1") {
     DeptAssetPanel.visible = true;
     DeptAssetPanel.enabled = false; 
    } else {
      DeptAssetPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
   if (CPFMCB.value == "1") {
     CPFMPanel.visible = true;
     CPFMPanel.enabled = false; 
    } else {
      CPFMPanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  }


debugger;

if (StageIndicator.value == "ToRecordKeeper") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
    DeptAssetPanel.visible = true;
    DeptAssetPanel.enabled = true;

  if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
   
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
   if (CPFMCB.value == "1") {
     CPFMPanel.visible = true;
     CPFMPanel.enabled = false; 
    } else {
      CPFMPanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  }



if (StageIndicator.value == "ToApprover") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }

    if (DeptAssetRecCB.value == "1") {
     DeptAssetPanel.visible = true;
     DeptAssetPanel.enabled = false; 
    } else {
      DeptAssetPanel.visible = false;
    }

    ApproverPanel.visible = true;
    ApproverPanel.enabled = true; 
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
       if (CPFMCB.value == "1") {
     CPFMPanel.visible = true;
     CPFMPanel.enabled = false; 
    } else {
      CPFMPanel.visible = false;
    }
}

if (StageIndicator.value == "ToCPFM") {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }

     if (DeptAssetRecCB.value == "1") {
     DeptAssetPanel.visible = true;
     DeptAssetPanel.enabled = false; 
    } else {
      DeptAssetPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
    if (CPFMCB.value == "1") {
     CPFMPanel.visible = true;
     CPFMPanel.enabled = false; 
    } else {
      CPFMPanel.visible = false;
    }
    CPFMPanel.visible = true;
     CPFMPanel.enabled = true;
    AssetPanel.visible = false; 
      
   
}


  if (StageIndicator.value == "ToAsset") {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }

    if (DeptAssetRecCB.value == "1") {
     DeptAssetPanel.visible = true;
     DeptAssetPanel.enabled = false; 
    } else {
      DeptAssetPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
    if (CPFMCB.value == "1") {
     CPFMPanel.visible = true;
     CPFMPanel.enabled = false; 
    } else {
      CPFMPanel.visible = false;
    }
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;

}

        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_guideRootPanel_init1 = function (scope) {
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
					
							CWID.value = myresopnse[0].EMPLID;
      						FirstName.value = myresopnse[0].FIRST_NAME;
							LastName.value = myresopnse[0].LAST_NAME;
                            DeptName.value = myresopnse[0].DEPTNAME;
                            SchoolDivision.value = myresopnse[0].DIVISION_NAME;

							//InitiatorEmail.value = myresopnse[0].EMAILID;
                            InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = FirstName.value + " " + LastName.value;
							//RequestorEmail.value = myresopnse[0].EMAILID;
                         /*   RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = FirstName.value + " " + LastName.value;*/
							deptID_initiator.value = myresopnse[0].DEPTID;

							//InitiatorFlag.value = false;

							deptID_requestor.value = myresopnse[0].DEPTID;

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

										CWID.value = myresopnse[n].EMPLID;

										FirstName.value = myresopnse[n].FIRST_NAME;
										LastName.value = myresopnse[n].LAST_NAME;
                                        DeptName.value = myresopnse[n].DEPTNAME;
                                        SchoolDivision.value = myresopnse[n].DIVISION_NAME;

										//InitiatorEmail.value = myresopnse[n].EMAILID;
                                        InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
										InitiatorUserID.value = myresopnse[n].EMP_USERID;
										InitiatorName.value = FirstName.value + " " + LastName.value;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                     /*     RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							              RequestorUserID.value = myresopnse[n].EMP_USERID;
							            RequestorName.value = FirstName.value + " " + LastName.value;*/
										deptID_initiator.value = myresopnse[n].DEPTID;

									//	InitiatorFlag.value = false;

										
                                       
                                                                            
										

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
 * @function vehicle_release_form_vehicle_release_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_caseId_init0 = function (scope) {
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
 * @function vehicle_release_form_vehicle_release_form.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            /*if (StageIndicator.value === null) {
  this.enabled=true;
} else {
  this.enabled=false;
}*/

this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_CWID_valueCommit0 = function (scope) {
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

							//cwid_initiator.value = myresopnse[0].EMPLID;

							FirstName.value = myresopnse[0].FIRST_NAME;
							LastName.value = myresopnse[0].LAST_NAME;
                            DeptName.value = myresopnse[0].DEPTNAME;
                            SchoolDivision.value = myresopnse[0].DIVISION_NAME;
                          deptID_initiator.value = myresopnse[0].DEPTID;
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                     /*       RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = FirstName.value + " " + LastName.value;*/
                            
							

							//InitiatorFlag.value = true;

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
										//cwid_initiator.value = myresopnse[n].EMPLID;

										FirstName.value = myresopnse[n].FIRST_NAME;
										LastName.value = myresopnse[n].LAST_NAME;
								    	 DeptName.value = myresopnse[n].DEPTNAME;
                          			    SchoolDivision.value = myresopnse[n].DIVISION_NAME;
                         				 deptID_initiator.value = myresopnse[n].DEPTID;									
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                     /*   RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
                                      
										RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = FirstName.value + " " + LastName.value;*/
										InitiatorFlag.value = true;

										InitiatorPanel.visible = true;
										RequestorPanel.visible = false;

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
 * @function vehicle_release_form_vehicle_release_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_SchoolDivision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_SchoolDivision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptDate_init0 = function (scope) {
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
    DeptDate.value = d;
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAdminApplastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAdminApplastName_valueCommit0 = function (scope) {
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
                   // appResult.push("Select Supervisor Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;  
                        //SupervisorName.value = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //SupervisorEmail.value = fundApproverResult[i].EMAILID; 
                        //SupervisorEmail.value = "soumya.ravindra@thoughtfocus.com";
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    DepartmentAdministratorApproverName.value = "";
                    DepartmentAdministratorApproverName.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    DepartmentAdministratorApproverName.items = [];
                    DepartmentAdministratorApproverName.value = "";
                    DeptAssetRecKeeperName.value = "";
                    DeptAssetRecUserID.value = "";
                    DeptAssetRecEmail.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DepartmentAdministratorApproverName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DepartmentAdministratorApproverName_valueCommit0 = function (scope) {
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
        DeptAssetRecKeeperName.value = approverUserName;
      
     approverEmailId = approverName.substr(approverName.indexOf(' - ')+2, approverName.length-1);
     approverUserId =  approverEmailId.substr(1, approverEmailId.indexOf('@')-1);
     DeptAssetRecUserID.value = approverUserId;
     // SupervisorSearchEmailId.value = approverEmailId;
   // DeptAssetRecEmail.value = "yjayaram@fullerton.edu";
   DeptAssetRecEmail.value = "soumya.ravindra@thoughtfocus.com";
  }
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_ApproverName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_ApproverName_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value == "ToInitiator")) {
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";

	$.ajax({
		type: 'GET',
		url: "/bin/propertyManagementServlet",

		data: {
			action: 'DEPT_HEAD_DATA'
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
 * @function vehicle_release_form_vehicle_release_form.generated_ApproverName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_ApproverName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
  debugger;
    var ChairNameDropDownVal = ApproverName.value;
    ChairNameDropDownVal = ChairNameDropDownVal.substr(0, ChairNameDropDownVal.indexOf(' - '));
    DeptAdminAppName.value = ChairNameDropDownVal;
  
    var chairInfo = DeptAdminAppName.value;
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

            DeptAdminAppName.value = chairDetailsListObj["EMP_NAME"];
            DeptAdminUserID.value = chairDetailsListObj["EMP_USERID"];
            //DeptHeadEmail.value = chairDetailsListObj["EMAILID"];                        
            DeptAdminEmail.value = "soumya.ravindra@thoughtfocus.com";
 
        }
    }
}

            
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_Remove_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_Remove_init0 = function (scope) {
    with(this) {
        with(scope) {
             debugger; 
var panelCount = VehicleInfo.instanceManager.instanceCount;
    if (panelCount == "1") {
        VehicleInfo.instanceManager.instances[0].Remove.visible = false;
    }
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_Remove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_Remove_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
var panelCount = VehicleInfo.instanceManager.instanceCount;
VehicleInfo.instanceManager.removeInstance(VehicleInfo.instanceIndex);
if (panelCount == "2") {
    VehicleInfo.instanceManager.instances[0].Remove.visible = false;
}

        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_Add_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_Add_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (VehicleInfo.instanceManager.instances[0].Remove.visible === false) {
    VehicleInfo.instanceManager.instances[0].Remove.visible = true;
}

VehicleInfo.instanceManager.addInstance();
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_InitiatorCB_valueCommit0 = function (scope) {
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
                  InitiatorDate.value = myresopnse[0].SERVER_DATE;
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
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_InitiatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_InitiatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_RequestorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_RequestorCB_valueCommit0 = function (scope) {
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
 * @function vehicle_release_form_vehicle_release_form.generated_RequestorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_RequestorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_RequestorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_RequestorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAssetRecCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAssetRecCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToRecordKeeper") {
        if (DeptAssetRecKeeperDate.value === null) {           
            DeptAssetRecKeeperDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptAssetRecKeeperSign.value = userValue;
                  DeptAssetRecKeeperDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptAssetRecKeeperSign.value = "";
    DeptAssetRecKeeperDate.value = "";
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAssetRecKeeperSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAssetRecKeeperSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAssetRecKeeperDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAssetRecKeeperDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_AckCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_AckCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToApprover") {
        if (DeptAdminAppDate.value === null) {           
            DeptAdminAppDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptAdminAppSign.value = userValue;
                  DeptAdminAppDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptAdminAppSign.value = "";
    DeptAdminAppDate.value = "";
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAdminAppSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAdminAppSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAdminAppDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAdminAppDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_CPFMCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_CPFMCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToCPFM") {
        if (CPFMDate.value === null) {           
            CPFMDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  CPFMSign.value = userValue;
                  FleetCoOrdinatorName.value = userValue;
                  Email.value = "soumya.ravindra@thoughtfocus.com";
                  CPFMDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    CPFMSign.value = "";
    CPFMDate.value = "";
    FleetCoOrdinatorName.value = "";
}
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_FleetCoOrdinatorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_FleetCoOrdinatorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_CPFMSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_CPFMSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_CPFMDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_CPFMDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_AssetCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_AssetCB_valueCommit0 = function (scope) {
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
 * @function vehicle_release_form_vehicle_release_form.generated_AssetSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_AssetSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_AssetDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_AssetDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_DeptAdminUserID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_DeptAdminUserID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "jluzzi";
        }
	}
}
/**
 * @function vehicle_release_form_vehicle_release_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/vehicle-release-form/vehicle-release-form');
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
 * @function vehicle_release_form_vehicle_release_form.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_saveguidedraft1629881233615_click0 = function (scope) {
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
 * @function vehicle_release_form_vehicle_release_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vehicle_release_form_vehicle_release_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  aftiaDescCWID.value = FirstName.value + " " + LastName.value  + " " + CWID.value;
  EmailSubject.value = "Test - Asset Management Vehicle Release Form - (" + CWID.value + ")";

  InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
  DeptAssetRecEmail.value = "soumya.ravindra@thoughtfocus.com";
  DeptAdminEmail.value = "soumya.ravindra@thoughtfocus.com";
 // RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
  guideBridge.submit();
}



        }
	}
}
