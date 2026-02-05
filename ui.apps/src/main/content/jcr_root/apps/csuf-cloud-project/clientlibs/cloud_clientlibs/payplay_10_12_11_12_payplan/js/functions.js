/**
 * @function payplay_10_12_11_12_payplan.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
//var userID = 'rpurohit';
if(StageIndicator.value === null){
  
  	  var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
  
      $.ajax({

      type: 'GET', 

      url:"/bin/getLoggedUserId",
      dataType: 'json',
      success: function(myresopnse){
      var userID = myresopnse.userId;
      //var userID = 'rpurohit';
      LogUser.value = userID; 
      workflow_initiator.value = userID;

			$.ajax({
					type: 'GET',
					url: "/bin/chrsIDUpdateServlet",
				  
					data: {
                        action: "PAY_PLAN_1012_1112_LOOKUP",
						userId: userID
						
					},
					dataType: 'json',
				
					success: function(myresponse) {
						
						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];
						var gifModal = document.getElementById('gifModal'); 
					  
						 if(myresponse.length === 1){

							    empl_ID.value = myresponse[0].EMPLID;
                                CHRSID.value = myresponse[0].CSU_CHRS_ID;
							    last_Name.value = myresponse[0].LAST_NAME;              
							    first_Name.value = myresponse[0].FIRST_NAME;
							    empl_RCD.value = myresponse[0].EMPL_RCD;
							    extension.value = myresponse[0].Extension;
							    scoPositionNumber.value = myresponse[0].SCOPosNum;
							    cbid.value = myresponse[0].UNION_CD;
							    classification.value = myresponse[0].DESCR;
							    grade.value = myresponse[0].GRADE; 
							    cmsPositionNumber.value = myresponse[0].POSITION_NBR;
							    departmentName.value = myresponse[0].DEPTNAME;
							    departmentID.value = myresponse[0].DEPTID;
							    timebase.value = myresponse[0].STD_HOURS;
							   // empEmailId.value = myresponse[0].EMP_EMAIL_ID; 
                                empEmailId.value = "soumya.ravindra@thoughtfocus.com";
							    
								var employeeId = empl_ID.value;
                                var dept_id = departmentID.value;
                                var union_cd = cbid.value;
                              
                                $.ajax({
                                    type: 'GET',
                                    url: "/bin/getManagerDetails",
                                    data: {
                                        deptid: dept_id,
                                        cwid: employeeId,
                                        union_cd: union_cd
                                    },
                                    dataType: 'json',
                                    success: function(myresponse) {

                                        var modal = document.getElementById('myModal');
                                        var span = document.getElementsByClassName("close")[0];

                                        if (myresponse.length === 1) {
                                             managerUserId.value = myresponse[0].MANAGER_EMP_USERID;
                                            //managerEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
                                            managerEmailId.value = "soumya.ravindra@thoughtfocus.com";
                                            managerName.value = myresponse[0].MANAGER_NAME;
                                        }

                                    }
                                });
						   gifModal.style.display = "none";
						   modal.style.display = "none";   
						   
						 }  
					  
						else if (myresponse.length > 1) {
						gifModal.style.display = "none";
						modal.style.display = "block";
				 
						    hiddenEmplRCD.value = myresponse[0].EMPL_RCD;
						    hiddenExtension.value = myresponse[0].Extension;
						    hiddenScoPosNumber.value = myresponse[0].SCOPosNum;
						    hiddenCBID.value = myresponse[0].UNION_CD;
						    hiddenClassification.value = myresponse[0].DESCR;
						    hiddenGrade.value = myresponse[0].GRADE; 
						    hiddenPosition.value = myresponse[0].POSITION_NBR;               
						    hiddenDepartmentID.value = myresponse[0].DEPTID;
						    hiddenTimeBase.value = myresponse[0].STD_HOURS;   

							var col = [];
							col.push("FIRST_NAME");
							col.push("LAST_NAME");
							col.push("Extension");
							col.push("DEPTNAME"); 
							col.push("DEPTID");  

							var table = document.createElement("table");
							table.id = "tb";
							var tr = table.insertRow(-1);
							var headings = ["", "First_Name", "Last_Name", "Extension", "Department_Name","Department_ID"];
							for (var j = 0; j < headings.length; j++) {
								var th = document.createElement("th");
								th.innerHTML = headings[j];
								tr.appendChild(th);
							}
							 for (var k = 0; k < myresponse.length; k++) {
							tr = table.insertRow(-1);
							
							var button = document.createElement("input");
							button.type = "radio";
							button.setAttribute("class", "rb");
							button.id = "rbtn";
							button.name = "group";
							button.value = "";

							button.onclick = function(event) {
							   
								hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;               
								hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;   
								hiddenExtension.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
								hiddenDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;   
                              	hiddenDepartmentID.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText; 

							};
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
						
							okButton.value = "OK";
					
							okButton.onclick = function(event) {            
							var n;
							var rButtonStatus;       
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {
									rButtonStatus = false;
								} else {
								  
								   		hiddenEmpID.value = myresponse[n].EMPLID;
                                        hidden_chrsId.value = myresponse[n].CSU_CHRS_ID;
										hiddenLastName.value = myresponse[n].LAST_NAME;
										hiddenFirstName.value = myresponse[n].FIRST_NAME;
										hiddenEmplRCD.value = myresponse[n].EMPL_RCD;
										hiddenExtension.value = myresponse[n].Extension;
										hiddenScoPosNumber.value = myresponse[n].SCOPosNum;
										hiddenCBID.value = myresponse[n].UNION_CD;
										hiddenClassification.value = myresponse[n].DESCR;
										hiddenGrade.value = myresponse[n].GRADE;  
										hiddenPosition.value = myresponse[n].POSITION_NBR;
										hiddenDepartmentName.value = myresponse[n].DEPTNAME;
										hiddenDepartmentID.value = myresponse[n].DEPTID;
										hiddenTimeBase.value = myresponse[n].STD_HOURS; 
										//empEmailId.value = myresponse[n].EMP_EMAIL_ID;  
										empEmailId.value = "soumya.ravindra@thoughtfocus.com";
										
									  rButtonStatus = true;
									  break;
								}
							}
							if (rButtonStatus === false) {
								alert("Please select the department");
								modal.style.display = "block";
							} 
						   
							else {               
						
									  empl_ID.value = hiddenEmpID.value;
                                      CHRSID.value = hidden_chrsId.value;
									  last_Name.value = hiddenLastName.value;
									  first_Name.value = hiddenFirstName.value;
									  empl_RCD.value = hiddenEmplRCD.value;
									  extension.value = hiddenExtension.value;
									  scoPositionNumber.value = hiddenScoPosNumber.value;
									  cbid.value = hiddenCBID.value;
									  classification.value = hiddenClassification.value;
									  grade.value =hiddenGrade.value; 
									  cmsPositionNumber.value = hiddenPosition.value;
									  departmentName.value = hiddenDepartmentName.value;
									  departmentID.value = hiddenDepartmentID.value;
									  timebase.value = hiddenTimeBase.value;                 
									  var employeeId = empl_ID.value;
									  var dept_id = departmentID.value;
									  var union_cd = cbid.value;
							  
							  
                             
									$.ajax({
										type: 'GET',
										url: "/bin/getManagerDetails",
										data: {
												deptid: deptIdVal,
												cwid: empIdVal,
												union_cd: cbidVal
										},
										dataType: 'json',
										success: function(myresponse) {

											var modal = document.getElementById('myModal');
											var span = document.getElementsByClassName("close")[0];

											if (myresponse.length === 1) {
												managerUserId.value = myresponse[0].MANAGER_EMP_USERID;
												//managerEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
												managerEmailId.value = "soumya.ravindra@thoughtfocus.com";
												managerName.value = myresponse[0].MANAGER_NAME;
											}

										}
									});
									modal.style.display = "none";
							}
						};

							footerModal.appendChild(okButton);
						  
						} else {
							//alert("Invalid user ID");
							showErrorModal("Alert !", "No matching records found");
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
});
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  HRServicePanel.visible = false;
calculations.visible = false;
  ApprovalsPanel.visible = false;
}
if(StageIndicator.value === "ToManager"){
  EmployeeInfoPanel.enabled = false;
  requestPanel.enabled = false;
  HRServicePanel.visible = false;
  calculations.visible = false;
  ApprovalsPanel.visible = true;
  AdminPanel.visible = false;
  vpSignaturePanel.visible = false;  
}
/*
if(StageIndicator.value === "ToAdmin"){
    EmployeeInfoPanel.enabled = false;
  requestPanel.enabled = false;
  HRServicePanel.visible = false;
  calculations.visible = false;
  ApprovalsPanel.visible = true;
  managerSignaturePanel.enabled = false;
  AdminPanel.visible = true;
  vpSignaturePanel.visible = false;  
}
if(StageIndicator.value === "ToVP"){
    EmployeeInfoPanel.enabled = false;
  requestPanel.enabled = false;
  HRServicePanel.visible = false;
  calculations.visible = false;
  ApprovalsPanel.visible = true;
  managerSignaturePanel.enabled = false;
  AdminPanel.visible = true;
  AdminPanel.enabled = false;
  vpSignaturePanel.visible = true;  
}
*/
if(StageIndicator.value === "ToHR"){
    EmployeeInfoPanel.enabled = false;
  requestPanel.enabled = false;
  HRServicePanel.visible = true;
  calculations.visible = false;
  ApprovalsPanel.visible = true;
  ApprovalsPanel.enabled = false;  
  vpSignaturePanel.visible = false;
  AdminPanel.visible = false;
  calculations.visible = true;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_empl_ID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_empl_ID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_first_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_first_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_last_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_last_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_empl_RCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_empl_RCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_extension_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_extension_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_scoPositionNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_scoPositionNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_timebase_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_timebase_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_cbid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_cbid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_classification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_classification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_grade_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_grade_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_cmsPositionNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_cmsPositionNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_departmentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_departmentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_departmentID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_departmentID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_work11CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_work11CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	work10CHK.value = null;
  	work5CHK.value = null;
  	variationCHK.value = null;
  	variationField.value = null;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_work10CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_work10CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(work10CHK.value == "1"){
  	work11CHK.value = null;
  	work5CHK.value = null;
  	variationCHK.value = null;
  	variationField.value = null;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_work5CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_work5CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	work11CHK.value = null;
  	work10CHK.value = null;
  	variationCHK.value = null;
  	variationField.value = null;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_variationCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_variationCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	work11CHK.value = null;
  	work10CHK.value = null;
  	work5CHK.value = null;
  	variationField.enabled = true;
}
else{
  	variationField.enabled = false;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_variationField_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_variationField_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_EmployeeSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_EmployeeSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	employeeSignature.enabled = false;
	employeeSignature.value = first_Name.value + " " + last_Name.value;
    
        if (empDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            empDate.value = d;
            employeeSignature.enabled = false;
        } else {
            empDate.enabled = false;
            employeeSignature.enabled = false;
        }
}else{
          	empDate.value = null;
            employeeSignature.value = null;
        }
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_employeeSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_employeeSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_empDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_empDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_ManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_ManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        managerSignDate.value = d;

        managerSignDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    managerSignature.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
       // managerSignature.enabled = false;
        
    
} else {
    managerSignature.value = "";
    managerSignDate.value = "";
   
}
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_managerSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_managerSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_managerSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_managerSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_AdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_AdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAdmin"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        adminSignDate.value = d;

        adminSignDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    appropriateAdminName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        appropriateAdminName.enabled = false;
        
    
} else {
    appropriateAdminName.value = "";
    adminSignDate.value = "";
   
}
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_appropriateAdminName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_appropriateAdminName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_adminSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_adminSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_VPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_VPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value == "ToHR"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        vpSignDate.value = d;

        vpSignDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    vpSignature.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        vpSignature.enabled = false;
        
    
} else {
    vpSignature.value = "";
    vpSignDate.value = "";
   
}
//}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_vpSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_vpSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_vpSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_vpSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_onCycle_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_onCycle_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  offCycle.value=null;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_offCycle_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_offCycle_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value==1) {
    onCycle.value = null;
}

        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_currentMonthlySalary_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_currentMonthlySalary_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
this.value = "$"+this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_adjustedSalary_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_adjustedSalary_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
this.value = "$"+this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_hrCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_hrCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	hrSignature.enabled = false;

        if (hrSignDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            hrSignDate.value = d;
            hrSignature.enabled = false;
        } else {
            hrSignDate.enabled = false;
            hrSignature.enabled = false;
        }
}else{
          	hrSignDate.value = null;
            hrSignature.value = null;
        }
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_hrCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_hrCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToHR"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 
              url:"/bin/getLoggedUserDetails",
              dataType: 'json',

              success: function(myresponse){
                  hrSignature.value = myresponse.userName;                	
              }
          });    
	}
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_hrSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_hrSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_hrSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_hrSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_payPlan10_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_payPlan10_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value==1){
  payPlan11.value=null;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_payPlan11_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_payPlan11_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value==1){
  payPlan10.value=null;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_monthSal_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_monthSal_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
this.value = "$"+(this.value);
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_daystowork_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_daystowork_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            annualSalary.value = (monthSal.value * this.value * 12)/possibleworkdays.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_annualSalary_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_annualSalary_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            annualSalary.value = "$"+(annualSalary.value);
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_possibleworkdays_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_possibleworkdays_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            annualSalary.value = (monthSal.value * daystowork.value * 12)/this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_monthSal1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_monthSal1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
  if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
this.value = "$"+ this.value;

  

        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_monthstowork_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_monthstowork_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== "" && monthSal1.value !== ""){
  
 var projEarned1 = this.value*monthSal1.value;

  
  projectedEarnedSalary.value = projEarned1;
}
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_projectedEarnedSalary_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_projectedEarnedSalary_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
  
this.value = "$"+ this.value;

  

        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_annualSalary1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_annualSalary1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
  
this.value = "$"+ this.value;

  

        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_projectedEarnedSalary1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_projectedEarnedSalary1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
this.value = "$"+this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_settlementAmount_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_settlementAmount_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value) !== null && (this.value).lastIndexOf("$") != -1){
  this.value = (this.value).replaceAll("$","");
}
this.value = "$"+this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_firstMonthOff_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_firstMonthOff_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "$"+this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_secondMonthOff_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_secondMonthOff_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "$"+this.value;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_hiddenFieldsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_hiddenFieldsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){

  this.value =  myresopnse.userId;
  
},
  error: function(error){
alert("error block="+error);
}
});
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_dateInitiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_dateInitiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false; 

var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = dateInitiated;
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_workflow_initiator_init0 = function (scope) {
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
 * @function payplay_10_12_11_12_payplan.generated_GenerateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_GenerateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(statusMenu.value === null){
  		showErrorModal("Alert!", "Please select employement status");
}
else if(work11CHK.value == 1 && monthOff2.value !== null){
  monthOff2.value  = null;
        showErrorModal("Alert!", "The plan you have selected does not allow for a second month off");
}
else{ 
  if(EmployeeSignatureCHK.value === null){
    showErrorModal("Alert!","Please fill all the required fields");
  }else{
    	getPdf();
  }
    
    }


function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and '));
            jsonData.append('formPath', '/content/forms/af/payplay_10_12_11_12/payplan');
            jsonData.append('fileName', first_Name.value+"_"+last_Name.value+"("+empl_ID.value+")"+"_"+ Date.now());    
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
 * @function payplay_10_12_11_12_payplan.generated_saveguidedraft1576760723394_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_saveguidedraft1576760723394_click0 = function (scope) {
    with(this) {
        with(scope) {
              if(empl_ID.value !== null){
   
        aftiaDescCWID.value = (first_Name.value + " " + last_Name.value + " " + empl_ID.value);
   
  }
handleDraftSave(this);


        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_submit1576718023814_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
payplay_10_12_11_12_payplan.generated_submit1576718023814_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(statusMenu.value === null){
  		showErrorModal("Alert!", "Please select employement Status");
}
else if(work11CHK.value == 1 && monthOff2.value !== null){
  monthOff2.value  = null;
        showErrorModal("Alert!", "The plan you have selected does not allow for a second month off");
}
else{ 
  if(empl_ID.value !== null){
   
         aftiaDescCWID.value = (first_Name.value + " " + last_Name.value + " " + empl_ID.value);
   
  }
  
  emailSubject.value = "Request for 10/12 11/12 Pay Plan - " + empl_ID.value;
  //alert(emailSubject.value);
  
  /*
  var testEmail = "yjayaram@fullerton.edu";
  //var testEmail = "pushpa.kawadi@thoughtfocus.com";
  empEmailId.value = testEmail;
  managerEmailId.value = testEmail;
  */
  
    
//  var testEmail = "yjayaram@fullerton.edu";
  var testEmail = "soumya.ravindra@thoughtfocus.com";
  empEmailId.value = testEmail;
  managerEmailId.value = testEmail;
  
 
  guideBridge.submit();  
}


        }
	}
}
