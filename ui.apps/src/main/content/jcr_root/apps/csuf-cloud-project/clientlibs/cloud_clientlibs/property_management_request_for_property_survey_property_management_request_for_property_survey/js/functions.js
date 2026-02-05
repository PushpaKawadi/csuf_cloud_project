/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init0 = function (scope) {
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
    RequestorPanel.visible = false;
    ApproverPanel.visible = false;    
    AssetPanel.visible = false; 
  
    Test_Panel.visible = false;
   
}

if (StageIndicator.value == "ToInitiator") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 
    
    if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  
  Test_Panel.visible = true;
  
}
if (StageIndicator.value == "ToRequestor") {
    
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
    
    RequestorPanel.visible = true;
    RequestorPanel.enabled = true;
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  
  Test_Panel.visible = true;
  
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
  
    if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }

    ApproverPanel.visible = true;
    ApproverPanel.enabled = true; 
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
      Test_Panel.visible = true;
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
    
    if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
    
    Test_Panel.visible = true;
   
}

        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init1 = function (scope) {
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

							InitiatorPanel.visible = true;
							RequestorPanel.visible = false;

							cwid_initiator.value = myresopnse[0].EMPLID;
                            cwid_requestor.value = myresopnse[0].EMPLID;

							firstName.value = myresopnse[0].FIRST_NAME;
							lastName.value = myresopnse[0].LAST_NAME;
                            DeptName.value = myresopnse[0].DEPTNAME;
                            SchoolDivision.value = myresopnse[0].DIVISION_NAME;

							//InitiatorEmail.value = myresopnse[0].EMAILID;
                            //InitiatorEmail.value = "yjayaram@fullerton.edu";
                            InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = firstName.value + " " + lastName.value;

							deptID_initiator.value = myresopnse[0].DEPTID;

							InitiatorFlag.value = false;

							RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = firstName.value + " " + lastName.value;
							//RequestorEmail.value = myresopnse[0].EMAILID;
                            //RequestorEmail.value = "yjayaram@fullerton.edu";
                            RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                            
							cwid_requestor.value = myresopnse[0].EMPLID;
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

										cwid_initiator.value = myresopnse[n].EMPLID;

										firstName.value = myresopnse[n].FIRST_NAME;
										lastName.value = myresopnse[n].LAST_NAME;
                                        DeptName.value = myresopnse[n].DEPTNAME;
                                        SchoolDivision.value = myresopnse[n].DIVISION_NAME;

										//InitiatorEmail.value = myresopnse[n].EMAILID;
                                        //InitiatorEmail.value = "yjayaram@fullerton.edu";
                                        InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
										InitiatorUserID.value = myresopnse[n].EMP_USERID;
										InitiatorName.value = firstName.value + " " + lastName.value;

										deptID_initiator.value = myresopnse[n].DEPTID;

										InitiatorFlag.value = false;

										RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = firstName.value + " " + lastName.value;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                        //RequestorEmail.value = "yjayaram@fullerton.edu";
                                        RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                                                            
										cwid_requestor.value = myresopnse[n].EMPLID;
										deptID_requestor.value = myresopnse[n].DEPTID;

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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init2 = function (scope) {
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
   // RequestorPanel.visible = false;
   // ApproverPanel.visible = false;    
    DeptAssetRecordKeeperPanel.visible = false;
    DeptAdminApproverPanel.visible = false;
    AssetPanel.visible = false; 
    Test_Panel.visible = false;
   
}

if (StageIndicator.value == "ToInitiator") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 
    
    if (RequestorCB.value == "1") {
     //RequestorPanel.visible = true;
       DeptAssetRecordKeeperPanel.visible = true;
     //RequestorPanel.enabled = false;
       DeptAssetRecordKeeperPanel.enabled = false;
    } else {
      //RequestorPanel.visible = false;
       DeptAssetRecordKeeperPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
      //ApproverPanel.visible = true;
       DeptAdminApproverPanel.visible = true;
     //ApproverPanel.enabled = false; 
       DeptAdminApproverPanel.enabled = false;
    } else {
      //ApproverPanel.visible = false;
       DeptAdminApproverPanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  
  Test_Panel.visible = true;
  
}
if (StageIndicator.value == "ToDepartmentAssetRecordKeeper") {
    
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
    
    //RequestorPanel.visible = true;
    //RequestorPanel.enabled = true;
   DeptAssetRecordKeeperPanel.visible = true;
   DeptAssetRecordKeeperPanel.enabled = true;
  
    if (AckCB.value == "1") {
    // ApproverPanel.visible = true;
    // ApproverPanel.enabled = false; 
       DeptAdminApproverPanel.visible = true;
       DeptAdminApproverPanel.enabled = false;
    } else {
      //ApproverPanel.visible = false;
      DeptAdminApproverPanel.visible = false;
    }
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  
  Test_Panel.visible = true;
  
}

if (StageIndicator.value == "ToDepartmentAdministratorApprover") {
    
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
  
    if (RequestorCB.value == "1") {
    // RequestorPanel.visible = true;
    // RequestorPanel.enabled = false; 
      DeptAssetRecordKeeperPanel.visible = true;
      DeptAssetRecordKeeperPanel.enabled = false;
    } else {
      //RequestorPanel.visible = false;
        DeptAssetRecordKeeperPanel.visible = false;
    }

    //ApproverPanel.visible = true;
    //ApproverPanel.enabled = true; 
       DeptAdminApproverPanel.visible = true;
       DeptAdminApproverPanel.enabled = true;
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
      Test_Panel.visible = true;
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
    
    if (RequestorCB.value == "1") {
     //RequestorPanel.visible = true;
     //RequestorPanel.enabled = false; 
      DeptAssetRecordKeeperPanel.visible = true;
      DeptAssetRecordKeeperPanel.enabled = false;
    } else {
      //RequestorPanel.visible = false;
        DeptAssetRecordKeeperPanel.visible = false;
    }
  
    if (AckCB.value == "1") {
     //ApproverPanel.visible = true;
     //ApproverPanel.enabled = false; 
      DeptAdminApproverPanel.visible = true;
      DeptAdminApproverPanel.enabled = false;
    } else {
      //ApproverPanel.visible = false;
       DeptAdminApproverPanel.visible = false;
    }
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
    
    Test_Panel.visible = true;
   
}

        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init3 = function (scope) {
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

							InitiatorPanel.visible = true;
							////RequestorPanel.visible = false;
                            DeptAssetRecordKeeperPanel.visible= false;
                          

							cwid_initiator.value = myresopnse[0].EMPLID;
                            cwid_requestor.value = myresopnse[0].EMPLID;

							firstName.value = myresopnse[0].FIRST_NAME;
							lastName.value = myresopnse[0].LAST_NAME;
                            DeptName.value = myresopnse[0].DEPTNAME;
                            SchoolDivision.value = myresopnse[0].DIVISION_NAME;

							//InitiatorEmail.value = myresopnse[0].EMAILID;
                            //InitiatorEmail.value = "yjayaram@fullerton.edu";
                            InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = firstName.value + " " + lastName.value;

							deptID_initiator.value = myresopnse[0].DEPTID;

						InitiatorFlag.value = false;
                        

						/*	RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = firstName.value + " " + lastName.value;
							//RequestorEmail.value = myresopnse[0].EMAILID;
                            //RequestorEmail.value = "yjayaram@fullerton.edu";
                            RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com"; */
                          
                            DeptAssetRecordKeeperUserID.value = myresopnse[0].EMP_USERID;
							DeptAssetRecordKeeperName.value = firstName.value + " " + lastName.value;
							//DeptAssetRecordKeeperEmail.value = myresopnse[0].EMAILID;
                            //DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
                            DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                            
							cwid_requestor.value = myresopnse[0].EMPLID;
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
										//RequestorPanel.visible = false;
                                        DeptAssetRecordKeeperPanel.visible = false;

										cwid_initiator.value = myresopnse[n].EMPLID;

										firstName.value = myresopnse[n].FIRST_NAME;
										lastName.value = myresopnse[n].LAST_NAME;
                                        DeptName.value = myresopnse[n].DEPTNAME;
                                        SchoolDivision.value = myresopnse[n].DIVISION_NAME;

										//InitiatorEmail.value = myresopnse[n].EMAILID;
                                        //InitiatorEmail.value = "yjayaram@fullerton.edu";
                                        InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
										InitiatorUserID.value = myresopnse[n].EMP_USERID;
										InitiatorName.value = firstName.value + " " + lastName.value;

										deptID_initiator.value = myresopnse[n].DEPTID;

										InitiatorFlag.value = false;
                                      	

									/*	RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = firstName.value + " " + lastName.value;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                        //RequestorEmail.value = "yjayaram@fullerton.edu";
                                        RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com"; */
                                      
                                        DeptAssetRecordKeeperUserID.value = myresopnse[n].EMP_USERID;
										DeptAssetRecordKeeperName.value = firstName.value + " " + lastName.value;
										//DeptAssetRecordKeeperEmail.value = myresopnse[n].EMAILID;
                                        //DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
                                        DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                                                            
										cwid_requestor.value = myresopnse[n].EMPLID;
										deptID_requestor.value = myresopnse[n].DEPTID;

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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init4
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_guideRootPanel_init4 = function (scope) {
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

							InitiatorPanel.visible = true;
							////RequestorPanel.visible = false;
                            DeptAssetRecordKeeperPanel.visible= false;
                          

							cwid_initiator.value = myresopnse[0].EMPLID;
                            cwid_requestor.value = myresopnse[0].EMPLID;

							firstName.value = myresopnse[0].FIRST_NAME;
							lastName.value = myresopnse[0].LAST_NAME;
                            DeptID.value = myresopnse[0].DEPTID;
                            DeptName.value = myresopnse[0].DEPTNAME;
                            SchoolDivision.value = myresopnse[0].DIVISION_NAME;
                            Division.value = myresopnse[0].DIVSION;

							//InitiatorEmail.value = myresopnse[0].EMAILID;
                           // InitiatorEmail.value = "yjayaram@fullerton.edu";
                            InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = firstName.value + " " + lastName.value;

							deptID_initiator.value = myresopnse[0].DEPTID;

						InitiatorFlag.value = false;
                        

						/*	RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = firstName.value + " " + lastName.value;
							//RequestorEmail.value = myresopnse[0].EMAILID;
                            //RequestorEmail.value = "yjayaram@fullerton.edu";
                            RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com"; */
                          
                          ////  DeptAssetRecordKeeperUserID.value = myresopnse[0].EMP_USERID;
							////DeptAssetRecordKeeperName.value = firstName.value + " " + lastName.value;
							//DeptAssetRecordKeeperEmail.value = myresopnse[0].EMAILID;
                            //DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
                          ////  DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                            
							cwid_requestor.value = myresopnse[0].EMPLID;
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
										//RequestorPanel.visible = false;
                                        DeptAssetRecordKeeperPanel.visible = false;

										cwid_initiator.value = myresopnse[n].EMPLID;

										firstName.value = myresopnse[n].FIRST_NAME;
										lastName.value = myresopnse[n].LAST_NAME;
                                        DeptID.value = myresopnse[0].DEPTID;
                                        DeptName.value = myresopnse[n].DEPTNAME;
                                        SchoolDivision.value = myresopnse[n].DIVISION_NAME;
                                        Division.value = myresopnse[n].DIVSION;

										//InitiatorEmail.value = myresopnse[n].EMAILID;
                                       // InitiatorEmail.value = "yjayaram@fullerton.edu";
                                        InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
										InitiatorUserID.value = myresopnse[n].EMP_USERID;
										InitiatorName.value = firstName.value + " " + lastName.value;

										deptID_initiator.value = myresopnse[n].DEPTID;

										InitiatorFlag.value = false;
                                      	

									/*	RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = firstName.value + " " + lastName.value;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                        //RequestorEmail.value = "yjayaram@fullerton.edu";
                                        RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com"; */
                                      
                                      ////  DeptAssetRecordKeeperUserID.value = myresopnse[n].EMP_USERID;
									////	DeptAssetRecordKeeperName.value = firstName.value + " " + lastName.value;
										//DeptAssetRecordKeeperEmail.value = myresopnse[n].EMAILID;
                                        //DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
                                      ////  DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                                                            
										cwid_requestor.value = myresopnse[n].EMPLID;
										deptID_requestor.value = myresopnse[n].DEPTID;

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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_cwid_requestor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_cwid_requestor_init0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_cwid_requestor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_cwid_requestor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToInitiator") && (Test_Panel.visible === false)) {
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

							//cwid_initiator.value = myresopnse[0].EMPLID;

							firstName.value = myresopnse[0].FIRST_NAME;
							lastName.value = myresopnse[0].LAST_NAME;
                          
							//RequestorEmail.value = myresopnse[0].EMAILID;
                            //RequestorEmail.value = "yjayaram@fullerton.edu";
                            RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = firstName.value + " " + lastName.value;
                          
							deptID_initiator.value = myresopnse[0].DEPTID;
                          DeptName.value = myresopnse[0].DEPTNAME;
                          SchoolDivision.value = myresopnse[0].DIVISION_NAME;

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
										//cwid_initiator.value = myresopnse[n].EMPLID;

										firstName.value = myresopnse[n].FIRST_NAME;
										lastName.value = myresopnse[n].LAST_NAME;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                        //RequestorEmail.value = "yjayaram@fullerton.edu";
                                        RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                      
										RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = firstName.value + " " + lastName.value;
										deptID_initiator.value = myresopnse[n].DEPTID;
                                      DeptName.value = myresopnse[0].DEPTNAME;
                          SchoolDivision.value = myresopnse[0].DIVISION_NAME;

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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_cwid_requestor_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_cwid_requestor_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToInitiator") && (Test_Panel.visible === false)) {
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

							//cwid_initiator.value = myresopnse[0].EMPLID;

							firstName.value = myresopnse[0].FIRST_NAME;
							lastName.value = myresopnse[0].LAST_NAME;
                          
							/* //RequestorEmail.value = myresopnse[0].EMAILID;
                            //RequestorEmail.value = "yjayaram@fullerton.edu";
                            RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = firstName.value + " " + lastName.value; */
                          
                          //DeptAssetRecordKeeperEmail.value = myresopnse[0].EMAILID;
                          // DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
                            DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
							DeptAssetRecordKeeperUserID.value = myresopnse[0].EMP_USERID;
							DeptAssetRecordKeeperName.value = firstName.value + " " + lastName.value;
                          
							deptID_initiator.value = myresopnse[0].DEPTID;
                          DeptID.value = myresopnse[0].DEPTID;
                          DeptName.value = myresopnse[0].DEPTNAME;
                          SchoolDivision.value = myresopnse[0].DIVISION_NAME;
                          Division.value = myresopnse[0].DIVSION;

							InitiatorFlag.value = true;

							InitiatorPanel.visible = true;
							//RequestorPanel.visible = false;
                          DeptAssetRecordKeeperPanel.visible = false;

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
										//cwid_initiator.value = myresopnse[n].EMPLID;

										firstName.value = myresopnse[n].FIRST_NAME;
										lastName.value = myresopnse[n].LAST_NAME;
                                      
									/*	//RequestorEmail.value = myresopnse[n].EMAILID;
                                        //RequestorEmail.value = "yjayaram@fullerton.edu";
                                        RequestorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
										RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = firstName.value + " " + lastName.value; */
                                      
                                      
                                      //DeptAssetRecordKeeperEmail.value = myresopnse[n].EMAILID;
                                      //  DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
                                        DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
										DeptAssetRecordKeeperUserID.value = myresopnse[n].EMP_USERID;
										DeptAssetRecordKeeperName.value = firstName.value + " " + lastName.value;
                                      
										deptID_initiator.value = myresopnse[n].DEPTID;
                                        DeptID.value = myresopnse[n].DEPTID;
                                        DeptName.value = myresopnse[n].DEPTNAME;
                                        SchoolDivision.value = myresopnse[n].DIVISION_NAME;
                                        Division.value = myresopnse[n].DIVSION;

										InitiatorFlag.value = true;

										InitiatorPanel.visible = true;
										//RequestorPanel.visible = false;
                                      DeptAssetRecordKeeperPanel.visible = false;

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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptID_valueCommit0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptName_valueCommit0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_SchoolDivision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_SchoolDivision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Date_1_init0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RecordKeeperName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RecordKeeperName_init0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RecordKeeperName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RecordKeeperName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator" && RefreshFlag.value == "true") ) {
  debugger;
    var ChairNameDropDownVal = RecordKeeperName.value;
    ChairNameDropDownVal = ChairNameDropDownVal.substr(0, ChairNameDropDownVal.indexOf(' - '));
    //DeptHeadName.value = ChairNameDropDownVal;
   DeptAssetRecordKeeperName.value = ChairNameDropDownVal;
  
   // var chairInfo = DeptHeadName.value;
   var chairInfo = DeptAssetRecordKeeperName.value;
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
        if (chairInfo == chairDetailsListObj["EMP_NAME"]) {

         /*   DeptHeadName.value = chairDetailsListObj["EMP_NAME"];
            DeptHeadUserID.value = chairDetailsListObj["EMP_USERID"];
            //DeptHeadEmail.value = chairDetailsListObj["EMAILID"];                        
            //DeptHeadEmail.value = "yjayaram@fullerton.edu";
            DeptHeadEmail.value = "shreyas.manjunatha@thoughtfocus.com"; */
          
          
            DeptAssetRecordKeeperName.value = chairDetailsListObj["EMP_NAME"];
            DeptAssetRecordKeeperUserID.value = chairDetailsListObj["EMP_USERID"];
            //DeptAdminApproverEmail.value = chairDetailsListObj["EMAILID"];                        
            //DeptAdminApproverEmail.value = "yjayaram@fullerton.edu";
            DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
 
        }
    }
}

            
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RecordKeeperName_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RecordKeeperName_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator" && RefreshFlag.value == "true") ) {
  debugger;
    var assetCoDropDownVal = RecordKeeperName.value;
    assetCoDropDownVal = assetCoDropDownVal.substr(0, assetCoDropDownVal.indexOf(' - '));
    DeptAssetRecordKeeperName.value = assetCoDropDownVal;
  
    var chairInfo = DeptAssetRecordKeeperName.value;
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
            DeptAssetRecordKeeperName.value = chairDetailsListObj["ASSET_COORDINATOR_NAME"];
            DeptAssetRecordKeeperUserID.value = chairDetailsListObj["ASSET_COORDINATOR_USERID"];                   
            DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
          //DeptAssetRecordKeeperEmail.value = "yjayaram@fullerton.edu";
 
        }
    }
}

            
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_ApproverName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_ApproverName_init0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_ApproverName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_ApproverName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator" && RefreshFlag.value == "true") ) {
  debugger;
    var ChairNameDropDownVal = ApproverName.value;
    ChairNameDropDownVal = ChairNameDropDownVal.substr(0, ChairNameDropDownVal.indexOf(' - '));
    DeptHeadName.value = ChairNameDropDownVal;
  
    var chairInfo = DeptHeadName.value;
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

            DeptHeadName.value = chairDetailsListObj["EMP_NAME"];
            DeptHeadUserID.value = chairDetailsListObj["EMP_USERID"];
            //DeptHeadEmail.value = chairDetailsListObj["EMAILID"];                        
            //DeptHeadEmail.value = "yjayaram@fullerton.edu";
            DeptHeadEmail.value = "shreyas.manjunatha@thoughtfocus.com";
 
        }
    }
}

            
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_ApproverName_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_ApproverName_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || (StageIndicator.value == "ToInitiator" && RefreshFlag.value == "true") ) {
  debugger;
    var ChairNameDropDownVal = ApproverName.value;
    ChairNameDropDownVal = ChairNameDropDownVal.substr(0, ChairNameDropDownVal.indexOf(' - '));
    //DeptHeadName.value = ChairNameDropDownVal;
   DeptAdminApproverName.value = ChairNameDropDownVal;
  
   // var chairInfo = DeptHeadName.value;
   var chairInfo = DeptAdminApproverName.value;
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
          
          
            DeptAdminApproverName.value = chairDetailsListObj["EMP_NAME"];
            DeptAdminApproverUserID.value = chairDetailsListObj["EMP_USERID"];
            //DeptAdminApproverEmail.value = chairDetailsListObj["EMAILID"];                        
           // DeptAdminApproverEmail.value = "yjayaram@fullerton.edu";
            DeptAdminApproverEmail.value = "shreyas.manjunatha@thoughtfocus.com";
 
        }
    }
}

            
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_TagNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_TagNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
//var gifModal = document.getElementById('gifModal');
//	gifModal.style.display = "block";
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
       var serialNo="";
       var modelID="";
       var location="";
         for (var i = 0; i < myresopnse.length; i++) {
    		var resultArray = myresopnse[i].result;
    		for (var j = 0; j < resultArray.length; j++) {
        		var assetsArray = resultArray[j].assets;
        			for (var k = 0; k < assetsArray.length; k++) {
            			serialNo = assetsArray[k].serial_number;
            			modelID = assetsArray[k].model_id;
            			location = assetsArray[k].location;// or any other property you want to access
        			}
   			 }
		}
         
         if((serialNo === "") && (modelID === "") && (location === "")){
             Description.value = " ";
             Location.value = " ";
         }else{   
         Description.value = serialNo + " "+ "and"+ " " + modelID;
         Location.value = location;
        }
                

            gifModal.style.display = "none";
            modal.style.display = "none";
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
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_TagNo_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_TagNo_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
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
        var model = ""; //Default to empty if no data is available
        var desc = ""; 
		var location= ""; 
		var cost= ""; // 

        if (response.length === 1) {
            model = response[0].MODEL || ""; // If no model, set empty string
            desc = response[0].DESCR || "";
            location = response[0].LOCATION || ""; 
            cost = response[0].COST || ""; 			

            if (model === "" && desc === "" && location === "" && cost === "") {
                
				 Description.value = " ";
                 Location.value = " ";
				 CurrentValue.value = " ";
            } else {               
				 Description.value = desc + "," + model;
                 Location.value = location;
				 CurrentValue.value = "$" + cost;
            }
        } else if (response.length === 0 || (Description.value === "") || (Location.value === "")|| (CurrentValue.value === "")) {
            // If response is empty and the details are also empty
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
					// Default to empty string if data is not found
                     var serialNo="";
       				 var modelID="";
       				 var location="";
                    if (myresponse.length === 1) {
                        
                        for (var i = 0; i < myresponse.length; i++) {
                            var resultArray = myresponse[i].result;
                            for (var j = 0; j < resultArray.length; j++) {
                                var assetsArray = resultArray[j].assets;
                                for (var k = 0; k < assetsArray.length; k++) {                                   
									serialNo = assetsArray[k].serial_number || "";
            			            modelID = assetsArray[k].model_id || "";
            			            location = assetsArray[k].location || "";
                                }
                            }
                        }

                        // Update details if found
                        if((serialNo === "") && (modelID === "") && (location === "")){
                           Description.value = " ";
                           Location.value = " ";
							// Empty if both are not found
                        } else {
                             Description.value = serialNo + " "+ "and"+ " " + modelID;
               				 Location.value = location;
                        }

                    
                    } else {
                        Description.value = " ";
                        Location.value = " ";// If the response is not as expected, clear the value
                    }
                },

                
            });
        } else {
             Description.value = " ";
             Location.value = " ";
			 // Clear the data if response length is not 1 or other conditions
        }
    },
    error: function(error) {
        alert("Error occurred while fetching asset details: " + error.statusText);
    }
});

        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Remove_Button_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Remove_Button_click0 = function (scope) {
    with(this) {
        with(scope) {
            	var rowCount = Row1.instanceManager.instanceCount;

	if(rowCount == 1){		
		Row1.instanceManager.instances[0]._children[0].value = null;
        Row1.instanceManager.instances[0]._children[1].value = null;
		Row1.instanceManager.instances[0]._children[2].value = null;
        Row1.instanceManager.instances[0]._children[3].value = null;
        Row1.instanceManager.instances[0]._children[4].value = null;
		Row1.instanceManager.instances[0]._children[5].value = null;
        Row1.instanceManager.instances[0]._children[6].value = null;
	}

Row1.instanceManager.removeInstance(Row1.instanceIndex);
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Add_Button_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Add_Button_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(Row1.instanceManager.instanceCount >= 1 && Row1.instanceManager.instanceCount <= 20){
   for(var count = 0; count < Row1.instanceManager.instanceCount; count++){
      if((Row1.instanceManager.instances[count]._children[0].value === null) || (Row1.instanceManager.instances[count]._children[1].value === null) ||(Row1.instanceManager.instances[count]._children[2].value === null) || (Row1.instanceManager.instances[count]._children[3].value === null) || (Row1.instanceManager.instances[count]._children[4].value === null) || (Row1.instanceManager.instances[count]._children[5].value === null) ||(Row1.instanceManager.instances[count]._children[6].value === null) ){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please Enter the record before adding a new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	
  	if(isAddRowAllowed == true){
      	if(Row1.instanceManager.instanceCount < 20){
          	Row1.instanceManager.addInstance();
        }
      	else{
          	showErrorModal("Alert !", "More than 20 rows cannot be added");
        }
    }   	
}

        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Add_Button_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_Add_Button_click1 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(Row1.instanceManager.instanceCount >= 1 && Row1.instanceManager.instanceCount <= 20){
   for(var count = 0; count < Row1.instanceManager.instanceCount; count++){
      if((Row1.instanceManager.instances[count]._children[0].value === null) || (Row1.instanceManager.instances[count]._children[1].value === null) ||(Row1.instanceManager.instances[count]._children[2].value === null) || (Row1.instanceManager.instances[count]._children[3].value === null) || (Row1.instanceManager.instances[count]._children[4].value === null)){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please Enter the record before adding a new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	
  	if(isAddRowAllowed === true){
      	if(Row1.instanceManager.instanceCount < 20){
          	Row1.instanceManager.addInstance();
        }
      	else{
          	showErrorModal("Alert !", "More than 20 rows cannot be added");
        }
    }   	
}
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_InitiatorCB_valueCommit0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_InitiatorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_InitiatorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_InitiatorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_InitiatorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RequestorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RequestorCB_valueCommit0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RequestorCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RequestorCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToDepartmentAssetRecordKeeper") || (StageIndicator.value === null)) {
        if (DeptAssetRecordKeeperSignDate.value === null) {           
            DeptAssetRecordKeeperSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptAssetRecordKeeperSignature.value = userValue;
                  DeptAssetRecordKeeperSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptAssetRecordKeeperSignature.value = "";
    DeptAssetRecordKeeperSignDate.value = "";
}
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAssetRecordKeeperSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAssetRecordKeeperSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAssetRecordKeeperSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAssetRecordKeeperSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AckCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AckCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToApprover") {
        if (DeptHeadSignDate.value === null) {           
            DeptHeadSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptHeadSign.value = userValue;
                  DeptHeadSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptHeadSign.value = "";
    DeptHeadSignDate.value = "";
}
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AckCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AckCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToDepartmentAdministratorApprover") {
        if (DeptAdminApproverSignDate.value === null) {           
            DeptAdminApproverSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptAdminApproverSignature.value = userValue;
                  DeptAdminApproverSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptAdminApproverSignature.value = "";
    DeptAdminApproverSignDate.value = "";
}
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAdminApproverSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAdminApproverSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAdminApproverSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_DeptAdminApproverSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AssetCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AssetCB_valueCommit0 = function (scope) {
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
                  AssetSignature.value = userValue;
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
    AssetSignature.value = "";
    AssetDate.value = "";
}
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AssetSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AssetSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AssetDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_AssetDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RefreshFlag_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_RefreshFlag_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToInitiator"){
this.value = "true";
}
        }
	}
}
/**
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/property-management-request-for-property-survey/property-management-request-for-property-survey');
            jsonData.append('fileName', "Property Management Request for Property Survey");          
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_saveguidedraft1629881233615_click0 = function (scope) {
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
 * @function property_management_request_for_property_survey_property_management_request_for_property_survey.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
property_management_request_for_property_survey_property_management_request_for_property_survey.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  aftiaDescCWID.value = firstName.value + " " + lastName.value  + " " + cwid_requestor.value;
  EmailSubject.value = "Test - Asset Management-Property Management Request For Property Survey - (" + cwid_requestor.value + ")";

 // InitiatorEmail.value = "yjayaram@fullerton.edu";
 // RequestorEmail.value = "yjayaram@fullerton.edu";
 // DeptHeadEmail.value = "yjayaram@fullerton.edu";
  
   InitiatorEmail.value = "shreyas.manjunatha@thoughtfocus.com";
   DeptAssetRecordKeeperEmail.value = "shreyas.manjunatha@thoughtfocus.com";
   DeptAdminApproverEmail.value = "shreyas.manjunatha@thoughtfocus.com";

  guideBridge.submit();
}



        }
	}
}
