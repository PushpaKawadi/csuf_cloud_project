/**
 * @function verification_request_fees_verification_request_fees_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;
   // RequestorPanel.visible = false;
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
    ApproverPanel.visible = false;    
    AssetPanel.visible = false; 
}

if (StageIndicator.value == "ToEmployee") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;
	//RequestorPanel.visible = false; 
  
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 
  /* if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }*/
    
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

}
/*if (StageIndicator.value == "ToRequestor") {
    
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
}*/

if (StageIndicator.value == "ToDeptHead") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
   // RequestorPanel.visible = false; 
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
/*  if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }*/

    ApproverPanel.visible = true;
    ApproverPanel.enabled = true; 
  
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
    
}

  if (StageIndicator.value == "ToAsset") {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = false;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
   // RequestorPanel.visible = false; 
    
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
  /* if (RequestorCB.value == "1") {
     RequestorPanel.visible = true;
     RequestorPanel.enabled = false; 
    } else {
      RequestorPanel.visible = false;
    }
    */
    if (AckCB.value == "1") {
     ApproverPanel.visible = true;
     ApproverPanel.enabled = false; 
    } else {
      ApproverPanel.visible = false;
    }
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;

}

        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_guideRootPanel_init1 = function (scope) {
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


							cwid_initiator.value = myresopnse[0].EMPLID;
                            CWID_SSN.value = myresopnse[0].EMPLID;

							FirstName.value = myresopnse[0].FIRST_NAME;
							LastName.value = myresopnse[0].LAST_NAME;
                           

							//InitiatorEmail.value = myresopnse[0].EMAILID;
                            InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							EmpName.value = FirstName.value + " " + LastName.value;
							

							InitiatorFlag.value = false;
						//	deptID_requestor.value = myresopnse[0].DEPTID;

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
										//InitiatorPanel.visible = true;
									//	RequestorPanel.visible = false;

										cwid_initiator.value = myresopnse[n].EMPLID;

										FirstName.value = myresopnse[n].FIRST_NAME;
										LastName.value = myresopnse[n].LAST_NAME;
                                      
										//InitiatorEmail.value = myresopnse[n].EMAILID;
                                        InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
										InitiatorUserID.value = myresopnse[n].EMP_USERID;
										EmpName.value = FirstName.value + " " + LastName.value;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                          RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							              RequestorUserID.value = myresopnse[n].EMP_USERID;
							            RequestorName.value = FirstName.value + " " + LastName.value;
									

										InitiatorFlag.value = false;

									/*	RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = FirstName.value + " " + LastName.value;
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                        RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";*/
                                                                            
										cwid_requestor.value = myresopnse[n].EMPLID;
										//deptID_requestor.value = myresopnse[n].DEPTID;

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
 * @function verification_request_fees_verification_request_fees_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_caseId_init0 = function (scope) {
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
 * @function verification_request_fees_verification_request_fees_form.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function verification_request_fees_verification_request_fees_form.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_supportDoc1_valueCommit0 = function (scope) {
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
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_supportDoc2_valueCommit0 = function (scope) {
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
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_supportDoc3_valueCommit0 = function (scope) {
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
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_CWID_SSN_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_CWID_SSN_init0 = function (scope) {
    with(this) {
        with(scope) {
            
  this.enabled=false;

        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_CWID_SSN_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_CWID_SSN_valueCommit0 = function (scope) {
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
                          
                          //RequestorEmail.value = myresopnse[0].EMAILID;
                            RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
							RequestorUserID.value = myresopnse[0].EMP_USERID;
							RequestorName.value = FirstName.value + " " + LastName.value;
							Department.value = myresopnse[0].DEPTNAME;
                            School.value = myresopnse[0].DIVISION_NAME;

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
										//cwid_initiator.value = myresopnse[n].EMPLID;

										FirstName.value = myresopnse[n].FIRST_NAME;
										LastName.value = myresopnse[n].LAST_NAME;
																			
										//RequestorEmail.value = myresopnse[n].EMAILID;
                                        RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
                                      
										RequestorUserID.value = myresopnse[n].EMP_USERID;
										RequestorName.value = FirstName.value + " " + LastName.value;
                                        Department.value = myresopnse[n].DEPTNAME;
                                        School.value = myresopnse[n].DIVISION_NAME;
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
 * @function verification_request_fees_verification_request_fees_form.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_MiddleName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_MiddleName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_StreetAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_StreetAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_TodayDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_TodayDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            /*if (StageIndicator.value === null || StageIndicator.value == "ToInitiator") {
    this.enabled = false;
    var dateString = new Date().toLocaleString("en-US", {

        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
    }).replace(/[^ -~]/g, '');
    var dateObject = new Date(dateString);
    var curyear = dateObject.getFullYear();
    var curyearMonth = dateObject.getMonth() + 1;
    var curyearDay = dateObject.getDate();
    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    TodayDate.value = d;
}*/

debugger; 
if(StageIndicator.value === null){
	  this.enabled = false;
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
		var curyearMonth = String(dateObject.getMonth() + 1).padStart(2, '0'); // Pad single-digit months with leading zero
		var curyearDay = String(dateObject.getDate()).padStart(2, '0');
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  TodayDate.value = d;
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_LastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_LastName_valueCommit0 = function (scope) {
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
                        DeptHeadEmail.value = "soumya.ravindra@thoughtfocus.com";
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        appResult.push(item + " - " + uid);
                    }
                    AdminNameDD.value = "";
                    AdminNameDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    AdminNameDD.items = [];
                    AdminNameDD.value = "";
                    DeptAdminName.value = "";
                    DeptHeadUserID.value = "";
                    DeptHeadEmail.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_AdminNameDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_AdminNameDD_valueCommit0 = function (scope) {
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
        DeptAdminName.value = approverUserName;
     
     approverEmailId = approverName.substr(approverName.indexOf(' - ')+2, approverName.length-1);
     approverUserId = approverEmailId.substr(1, approverEmailId.indexOf('@')-1);
     DeptHeadUserID.value = approverUserId;
      //SupervisorSearchEmailId.value = approverEmailId;
      DeptHeadEmail.value = "soumya.ravindra@thoughtfocus.com";
  }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_SupportingDocuments_init00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_SupportingDocuments_init00 = function (scope) {
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
 * @function verification_request_fees_verification_request_fees_form.generated_supportDoc1_valueCommit00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_supportDoc1_valueCommit00 = function (scope) {
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
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_supportDoc2_valueCommit00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_supportDoc2_valueCommit00 = function (scope) {
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
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_supportDoc3_valueCommit00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_supportDoc3_valueCommit00 = function (scope) {
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
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToEmployee") || (StageIndicator.value === null)) {
        if (EmpSign.value === null) {           
            InitiatorDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  EmpSign.value = userValue;
                  InitiatorDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    EmpSign.value = "";
    InitiatorDate.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_EmpSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_EmpSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_AckCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_AckCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToDeptHead") {
        if (DeptHeadSignDate.value === null) {           
            DeptHeadSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptAdminSign.value = userValue;
                   DeptAdminNameS.value = userValue;
                  DeptHeadSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptAdminSign.value = "";
    DeptHeadSignDate.value = "";
  DeptAdminNameS.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_DeptAdminNameS_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_DeptAdminNameS_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_DeptAdminSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_DeptAdminSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_DeptHeadSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_DeptHeadSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_AssetCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_AssetCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToAsset") {
        if (OfficeDate.value === null) {           
            OfficeDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  AssetManagementSign.value = userValue;
                  AssetManagementName.value = userValue;
                  OfficeDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    AssetManagementName.value = "";
    AssetManagementSign.value = "";
    OfficeDate.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_AssetManagementSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_AssetManagementSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_AssetManagementName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_AssetManagementName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_OfficeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_OfficeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/verification-request-fees/verification-request-fees-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FirstName.value + "_"+RequestorInformationPanel.LastName.value);
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
 * @function verification_request_fees_verification_request_fees_form.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            //if(EmplId.value !== null){
 aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+CWID_SSN.value ;
//}
handleDraftSave(this);


        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*var flag = 0;
if((LostCB.value === null) && (StolenCB.value === null)){
  flag = 1;
  showErrorModal("Alert !", "Please select the Asset Lost/Stolen checkbox "); 
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequiredInformation[0].EquipmentPanel[0].LostCB[0]");
  }
else{
  flag = 0;
}

if(flag === 0){*/
if(StageIndicator.value === null){
  aftiaDescCWID.value = FirstName.value + " " + LastName.value  + " " + CWID_SSN.value;
  EmailSubject.value = "Test -  Verification Request Fees - (" + CWID_SSN.value + ")";

  InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
 // RequestorEmail.value = "soumya.ravindra@thoughtfocus.com";
  DeptHeadEmail.value = "soumya.ravindra@thoughtfocus.com";

  guideBridge.submit();
}
//}



        }
	}
}
