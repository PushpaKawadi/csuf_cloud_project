/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

  signatureReview.visible =true;
  HRSection.visible = true;
  PayrollPanel.visible = false;
}


if(StageIndicator.value === "ToPayroll"){
  employeeInformation.enabled = false;
  PositionInformation.enabled = false;
  HRSection.visible = true;
  HRSection.enabled = false;
  PayrollPanel.visible = true;
}
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //console.log(workflow_initiator.value);
if(StageIndicator.value === null && formSavedStatus.value != "1"){
var cwid = this.value;
	if(cwid !== null){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			
			Demotion.value = null;
			EqulityIncrease.value= null;
			ExtensionofAppointment.value = null;
			InRangeProgression.value= null;
			ReturnReassignment.value = null;
			Reassignment.value = null;
			SalaryStipend.value = null;
			SalaryStipendValue.value = null;
			ServiceSalaryIncrease.value = null;
			Others.value = "";
			
			$.ajax({

				type: 'GET', 

				url:"/bin/getLoggedUserId",
				dataType: 'json',
				success: function(myresponse){
					  var userValue = myresponse.userId;					  
					  workflow_initiator.value = userValue;
				
					  $.ajax({
						  
							type: 'GET',
							url: "/bin/getPersonnelActiveNotice",
							data: {
								cwid: cwid
								//userID : userID
							},
							dataType: 'json',

							success: function(myresopnse) {
								//alert("myresopnse.length="+myresopnse);
							 
								var modal = document.getElementById('myModal');
								var span = document.getElementsByClassName("close")[0];
									  
							  
								if (myresopnse.length === 1) {
								
									  FirstName.value=myresopnse[0].FIRST_NAME;
									  LastName.value=myresopnse[0].LAST_NAME;
									  MiddleInitial.value = myresopnse[0].MIDDLE_NAME;
									  EmpRCD.value = myresopnse[0].EMPL_RCD;
									  CurrentCMSNo.value = myresopnse[0].POSITION_NBR;
									  CurrentAgency.value = myresopnse[0].CSU_SCO_AGENCY;
									  CurrentReptUnit.value = myresopnse[0].CSU_UNIT;
									  CurrentClassCode.value = myresopnse[0].JOBCODE;
									  CurrentTimeBase.value = myresopnse[0].STD_HOURS;
									  CurrentDivision.value = myresopnse[0].FUL_DIVISION_NAME;
									  CurrentMPPSupName.value = myresopnse[0].SUPERVISOR_NAME;
									  CurrentFTMonthlySalary.value  = myresopnse[0].MONTHLY_RT;
								  
									  CurrentActualSalary.value= myresopnse[0].MONTHLY_RT;
									  var slNo1 = myresopnse[0].SERIAL_NO;
									  var slNo2 = "00";
									  var slResult = slNo2.concat(slNo1);
									  CurrentSerialNo.value = slResult;
								  	  if(myresopnse[0].FLSAEXMP == 1){
                                        	CurrentFSLAStatus.value = 1;
                                      }
                                  	  else{
                                        	CurrentFSLAStatus.value = 2;
                                      }
									  CurrentCBID.value= myresopnse[0].UNION_CD;
									  CurrentDept.value= myresopnse[0].DEPTNAME;
								  
									  CurrentCollege.value= myresopnse[0].FUL_COLLEGE_NAME;
									  CurrentRangeCode.value= myresopnse[0].GRADE;
									  CurrentDeptID.value= myresopnse[0].DEPTID;
								  
									  CurrentClassificationTitle.value= myresopnse[0].DESCR;
								 // var annMon1 = myresopnse[0].CSU_ANNI_MONTH;
								  //var annMont2 = "/";
									 CurrentAnniversaryDate.value = myresopnse[0].CSU_ANNI_MONTH.concat("/").concat(myresopnse[0].CSU_ANNI_YEAR);
									 FTE.value = myresopnse[0].FTE;
								  

									gifModal.style.display = "none";

								} else if (myresopnse.length > 1) {

										gifModal.style.display = "none";
										modal.style.display = "block";

										var col = [];
										
										col.push("LAST_NAME");
										col.push("FIRST_NAME");                  
										col.push("MIDDLE_NAME");                  
										col.push("CSU_SCO_AGENCY");                  
										col.push("CSU_UNIT");

										var table = document.createElement("table");
										table.id = "tb";
										var tr = table.insertRow(-1);
										//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
										var headings = ["", "Last Name", "First Name", "Middle Initial", "Agency", "Unit"];
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
									
									okButton.value = "Ok";
									okButton.onclick = function(event) {
										
										var n;
										var rButtonStatus;
										
										var rButtons = document.getElementsByClassName("rb");
										for (n = 0; n < rButtons.length; n++) {
											if (rButtons[n].checked === false) {

												rButtonStatus = false;
											} else {

												  FirstName.value=myresopnse[n].FIRST_NAME;
												  LastName.value=myresopnse[n].LAST_NAME;
												  MiddleInitial.value = myresopnse[n].MIDDLE_NAME;
												  EmpRCD.value = myresopnse[n].EMPL_RCD;
												  CurrentCMSNo.value = myresopnse[n].POSITION_NBR;
												  CurrentAgency.value = myresopnse[n].CSU_SCO_AGENCY;
												  CurrentReptUnit.value = myresopnse[n].CSU_UNIT;
												  CurrentClassCode.value = myresopnse[n].JOBCODE;
												  CurrentTimeBase.value = myresopnse[n].STD_HOURS;
												  CurrentDivision.value = myresopnse[n].FUL_DIVISION_NAME;
												  CurrentMPPSupName.value = myresopnse[n].SUPERVISOR_NAME;
												  CurrentFTMonthlySalary.value  = myresopnse[n].MONTHLY_RT;
												  CurrentActualSalary.value= myresopnse[n].MONTHLY_RT;
												  //CurrentSerialNo.value = myresopnse[n].SERIAL_NO;
												  var slNo1 = myresopnse[n].SERIAL_NO;
												  var slNo2 = "00";
												  var slResult = slNo2.concat(slNo1);
												  CurrentSerialNo.value = slResult;        
												  if(myresopnse[n].FLSAEXMP == 1){
                                                        CurrentFSLAStatus.value = 1;
                                                  }
                                                  else{
                                                        CurrentFSLAStatus.value = 2;
                                                  }
												  CurrentCBID.value= myresopnse[n].UNION_CD;
												  CurrentDept.value= myresopnse[n].DEPTNAME;

												  CurrentCollege.value= myresopnse[n].FUL_COLLEGE_NAME;
												  CurrentRangeCode.value= myresopnse[n].GRADE;
												  CurrentDeptID.value= myresopnse[n].DEPTID;

												  CurrentAnniversaryDate.value = myresopnse[n].CSU_ANNI_MONTH.concat("/").concat(myresopnse[n].CSU_ANNI_YEAR);

												  CurrentClassificationTitle.value= myresopnse[n].DESCR;
												  FTE.value = myresopnse[n].FTE;
												
												  rButtonStatus = true;
												  modal.style.display = "none";
												  
												  break;
											}
										}
										if (rButtonStatus === false) {
											alert("Please select the department");
											modal.style.display = "block";
										}
									};
									//var footerModal = document.getElementById("modal_footer");

									footerModal.appendChild(okButton);

								} 
							  else {                    
										showErrorModal("Alert", "No matching records found");
										FirstName.value = null;
										LastName.value = null;
										MiddleInitial.value = null;
										EmpRCD.value = null;
										CurrentCMSNo.value = null;
										CurrentAgency.value = null;
										CurrentReptUnit.value = null;
										CurrentClassCode.value = null;
										CurrentTimeBase.value = null;
										CurrentDivision.value = null;
										CurrentMPPSupName.value = null;
										CurrentFTMonthlySalary.value = null;
										CurrentActualSalary.value = null;
										CurrentSerialNo.value = null;
										CurrentCBID.value = null;
										CurrentDept.value= null;
										CurrentCollege.value = null;
										CurrentRangeCode.value = null;
										CurrentDeptID.value = null;
										CurrentAnniversaryDate.value = null;
										CurrentClassificationTitle.value = null;
										FTE.value = null;
									 
										gifModal.style.display = "none";

								}
								
								span.onclick = function() {

									modal.style.display = "none";
								};

							}
						});  
				}
			});	
	}
}
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_EmpRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_EmpRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_CurrentCMSNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_CurrentCMSNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_ClassificationChange_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_ClassificationChange_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
 //this.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = ""; 
    SalaryStipendValue.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_ExtensionofAppointment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_ExtensionofAppointment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    //ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";  
    SalaryStipendValue.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";
  	
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_Demotion_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_Demotion_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    //Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";  
    SalaryStipendValue.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";
   
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_SalaryStipend_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_SalaryStipend_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    //SalaryStipend.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";
    SalaryStipendValue.enabled = "true";
    SalaryStipendValue.mandatory = "error";
  	
} else{
    SalaryStipendValue.enabled = false;
    SalaryStipendValue.mandatory = "";
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_SalaryStipendValue_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_SalaryStipendValue_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_InRangeProgression_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_InRangeProgression_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    //InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";  
    SalaryStipendValue.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";  	
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_EqulityIncrease_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_EqulityIncrease_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    Demotion.value ="";
    //EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";  
    SalaryStipendValue.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";  	
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_ServiceSalaryIncrease_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_ServiceSalaryIncrease_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
    SSIStatus.enabled = true;
    SSIStatus.mandatory = "error";
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";
    SalaryStipendValue.value = "";
    Others.value = "";  	
}
else{
   SSIStatus.value = "";
   SSIStatus.enabled = false;
   SSIStatus.mandatory = "";
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_SSIStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_SSIStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_Reassignment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_Reassignment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    //Reassignment.value = "";
    SalaryStipend.value = "";
    SalaryStipendValue.value = "";
    ServiceSalaryIncrease.value = "";
    Others.value = "";  	
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_ReturnReassignment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_ReturnReassignment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    //ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";
    ServiceSalaryIncrease.value = "";
    SalaryStipendValue.value = "";
    Others.value = "";    
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_Others_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_Others_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 
    ClassificationChange.value = "";
    Demotion.value ="";
    EqulityIncrease.value="";
    ExtensionofAppointment.value ="";
    InRangeProgression.value="";
    ReturnReassignment.value = "";
    Reassignment.value = "";
    SalaryStipend.value = "";
    ServiceSalaryIncrease.value = "";
    SalaryStipendValue.value = "";
    //OthersComments.enabled = true;
}


        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_AnniMonth_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_AnniMonth_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible =false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_AnniYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_AnniYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible =false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    if(this.value == 1){
            
            HRName.enabled = false;
            if (HRDate.value === null) {
                var dateString = new Date().toLocaleString("en-US", {
                    timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                }).replace(/[^ -~]/g, '');
                var dateObject = new Date(dateString);
                var curyear = dateObject.getFullYear();
                var curyearMonth = dateObject.getMonth() + 1;
                var curyearDay = dateObject.getDate();
                var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                HRDate.value = d;
                HRName.enabled = false;
            } else {
                HRDate.enabled = false;
                HRName.enabled = false;
            }
        }else{
                HRDate.value = null;
                HRName.value = null;
    }
}

        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_HRCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_HRCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  HRName.value = myresponse.userName;
              }
          });    
	}
}


        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_HRDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_HRDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_PayrollDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_PayrollDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (PayrollName.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            PayrollDate.value = d;

            PayrollDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    PayrollName.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           PayrollName.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    PayrollName.value = "";
   // HiringDeptName.value = "";
}
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_FTE_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_FTE_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var fteValue = this.value;
var curFTSalVal = CurrentFTMonthlySalary.value;
var result = curFTSalVal/fteValue;

CurrentActualSalary.value =result;
        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (EmplID.value !== null && FirstName.value !== null && LastName !== null) {
  submitFlag=0;
      
 } else{
     showErrorModal("Alert !","Please enter Empl ID, First Name, Last Name");

   /*var modal = document.getElementById("errorPopup");
       var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Empl ID, First Name, Last Name";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footerModal = document.getElementById("errorPopup-footer");
    var okButton = document.createElement("input");
    okButton.type = "button";
    okButton.setAttribute("class", "okBtn");
    //okButton.id = "okBtn";
    okButton.value = "Ok";
    okButton.onclick = function(event) {
        modal.style.display = "none";
    };
    footerModal.appendChild(okButton);
    modal.style.display = "block";*/
            
submitFlag =1;

 }


if( submitFlag === 0){
  getPdf();
}

  

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and '));
            jsonData.append('formPath', '/content/forms/af/personnel-action-notice/personnel-action-notice---original');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplID.value + ")" + "_" + Date.now());          
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
 * @function personnel_action_notice_personnel_action_notice___original.generated_saveguidedraft1598011063299_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_saveguidedraft1598011063299_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);
if(EmplID.value !== null){
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
  formSavedStatus.value = "1";
  handleDraftSave(this);
}else{
    handleDraftSave(this);
}


        }
	}
}
/**
 * @function personnel_action_notice_personnel_action_notice___original.generated_submit1598011084969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_action_notice_personnel_action_notice___original.generated_submit1598011084969_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);

EmailSubject.value = "Test - Personnel Action Notice Request - " + EmplID.value;

guideBridge.submit();


        }
	}
}
