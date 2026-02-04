/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    InitiatorInformationPanel.visible = true;
    InitiatorInformationPanel.enabled = true;
    Instructions.visible = true;
    Instructions.enabled = true;
  
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
    CustadianPanel.visible = false;
    DeptHeadSignPanel.visible = false;    
    AssetManagementRepPanel.visible = false; 
   
}

if (StageIndicator.value == "ToInitiator") {
    
    InitiatorInformationPanel.visible = true;
    InitiatorInformationPanel.enabled = true;
    Instructions.visible = true;
    Instructions.enabled = true;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 
    
    if (CustodianCB.value == "1") {
     CustadianPanel.visible = true;
     CustadianPanel.enabled = false; 
    } else {
      CustadianPanel.visible = false;
    }
  
    if (DeptHeadCB.value == "1") {
     DeptHeadSignPanel.visible = true;
     DeptHeadSignPanel.enabled = false; 
    } else {
      DeptHeadSignPanel.visible = false;
    }
  
    if (RrpresentativeCB.value == "1") {
     AssetManagementRepPanel.visible = true;
     AssetManagementRepPanel.enabled = false; 
    } else {
      AssetManagementRepPanel.visible = false;
    }
  
}
if (StageIndicator.value == "ToCustadian") {
    
    InitiatorInformationPanel.visible = true;
    InitiatorInformationPanel.enabled = false;
    Instructions.visible = true;
    Instructions.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
    CustadianPanel.visible = true;
    CustadianPanel.enabled = true;
  
    if (DeptHeadCB.value == "1") {
     DeptHeadSignPanel.visible = true;
     DeptHeadSignPanel.enabled = false; 
    } else {
      DeptHeadSignPanel.visible = false;
    }
  
    if (RrpresentativeCB.value == "1") {
     AssetManagementRepPanel.visible = true;
     AssetManagementRepPanel.enabled = false; 
    } else {
      AssetManagementRepPanel.visible = false;
    }
  
}

if (StageIndicator.value == "ToDepthead") {
    
    InitiatorInformationPanel.visible = true;
    InitiatorInformationPanel.enabled = false;
    Instructions.visible = true;
    Instructions.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
  
    if (CustodianCB.value == "1") {
     CustadianPanel.visible = true;
     CustadianPanel.enabled = false; 
    } else {
      CustadianPanel.visible = false;
    }

    DeptHeadSignPanel.visible = true;
    DeptHeadSignPanel.enabled = true; 
  
     if (RrpresentativeCB.value == "1") {
     AssetManagementRepPanel.visible = true;
     AssetManagementRepPanel.enabled = false; 
    } else {
      AssetManagementRepPanel.visible = false;
    }
      
}
  if (StageIndicator.value == "ToAsset") {

   
    InitiatorInformationPanel.visible = true;
    InitiatorInformationPanel.enabled = false;
    Instructions.visible = true;
    Instructions.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
  
    if (CustodianCB.value == "1") {
     CustadianPanel.visible = true;
     CustadianPanel.enabled = false; 
    } else {
      CustadianPanel.visible = false;
    }
    
    if (DeptHeadCB.value == "1") {
     DeptHeadSignPanel.visible = true;
     DeptHeadSignPanel.enabled = false; 
    } else {
      DeptHeadSignPanel.visible = false;
    }
    
    AssetManagementRepPanel.visible = true; 
    AssetManagementRepPanel.visible = false;
   
}

        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_guideRootPanel_init1 = function (scope) {
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

							

							cwid.value = myresopnse[0].EMPLID;
                           
							FirstName.value = myresopnse[0].FIRST_NAME;
							LastName.value = myresopnse[0].LAST_NAME;
                            Department.value = myresopnse[0].DEPTNAME;
                            /*SchoolDivision.value = myresopnse[0].DIVISION_NAME;

							InitiatorEmail.value = myresopnse[0].EMAILID;
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = firstName.value + " " + lastName.value;*/

							DeptId.value = myresopnse[0].DEPTID;


							/*RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = firstName.value + " " + lastName.value;
							RequestorEmail.value = myresopnse[0].EMAILID;
							cwid_requestor.value = myresopnse[0].EMPLID;
							deptID_requestor.value = myresopnse[0].DEPTID;*/

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
										cwid.value = myresopnse[n].EMPLID;
                           
										FirstName.value = myresopnse[n].FIRST_NAME;
										LastName.value = myresopnse[n].LAST_NAME;
                           				 Department.value = myresopnse[n].DEPTNAME;
										DeptId.value = myresopnse[n].DEPTID;

										

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
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_caseId_init0 = function (scope) {
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
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_cwid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_cwid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value == "ToInitiator") {
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
				var cwid = cwid_requestor.value;

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

							cwid_initiator.value = myresopnse[0].EMPLID;

							firstName.value = myresopnse[0].FIRST_NAME;
							lastName.value = myresopnse[0].LAST_NAME;
							InitiatorEmail.value = myresopnse[0].EMAILID;
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = firstName.value + " " + lastName.value;
							deptID_initiator.value = myresopnse[0].DEPTID;

							InitiatorFlag.value = true;

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
										cwid_initiator.value = myresopnse[n].EMPLID;

										firstName.value = myresopnse[n].FIRST_NAME;
										lastName.value = myresopnse[n].LAST_NAME;
										InitiatorEmail.value = myresopnse[n].EMAILID;
										InitiatorUserID.value = myresopnse[n].EMP_USERID;
										InitiatorName.value = firstName.value + " " + lastName.value;
										deptID_initiator.value = myresopnse[n].DEPTID;

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
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_TodaysDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_TodaysDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
 this.enabled = false;
if(StageIndicator.value === null){
	 
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
 this.value = d;
}
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToInitiator") || (StageIndicator.value === null)) {
        if (InitiatorSignDate.value === null) {           
            InitiatorSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  InitiatorSignature.value = userValue;
                  InitiatorSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    InitiatorSignature.value = "";
    InitiatorSignDate.value = "";
}
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_InitiatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_InitiatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_CustodianCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_CustodianCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToCustadian") {
        if (CustodianDate.value === null) {           
            CustodianDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  CustodianName.value = userValue;
                  CustodianSign.value = userValue;
                  CustodianDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    CustodianName.value = "";
    CustodianSign.value = "";
    CustodianDate.value = "";
}
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_CustodianName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_CustodianName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_CustodianDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_CustodianDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_DeptHeadCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_DeptHeadCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToDepthead") {
        if (DeptHeadDate.value === null) {           
            DeptHeadDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                 DeptHeadName.value = userValue;
                  DeptHeadSign.value = userValue;
                  DeptHeadDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
      DeptHeadName.value = "";
    DeptHeadSign.value = "";
    DeptHeadDate.value = "";
}
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_DeptHeadSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_DeptHeadSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_DeptHeadDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_DeptHeadDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_RrpresentativeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_RrpresentativeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToAsset")  {
        if (RrpresentativeDate.value === null) {           
            RrpresentativeDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME; 
                  RepresentativeName.value = userValue;
                  RrpresentativeSign.value = userValue;
                  RequestorSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
   RepresentativeName.value = "";
    RrpresentativeSign.value = "";
    RrpresentativeDate.value = "";
}
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_RrpresentativeSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_RrpresentativeSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/missing-lost-replaced-or-destroyed-property-form/missing-lost-replaced-or-destroyed-property-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', firstName.value + "_"+lastName.value+ "_" + Date.now());
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
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_saveguidedraft1629881233615_click0 = function (scope) {
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
 * @function missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
missing_lost_replaced_or_destroyed_property_form_missing_lost_replaced_or_destroyed_property_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
  aftiaDescCWID.value = firstName.value + " " + lastName.value;
  EmailSubject.value = "Test - Property Management Request For Property Survey - "+lastName.value+", "+firstName.value;

  InitiatorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  RequestorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  DeptHeadEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

  guideBridge.submit();
}



        }
	}
}
