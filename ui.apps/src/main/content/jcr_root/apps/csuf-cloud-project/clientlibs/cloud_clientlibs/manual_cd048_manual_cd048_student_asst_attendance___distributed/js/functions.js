/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(StageIndicator.value);
if (StageIndicator.value === null && DeptID.value === null && formSavedStatus.value != "1") {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",		
        dataType: 'json',
        success: function(myresponse) {

            if (myresponse.Status == "Success") {
                logUser.value = myresponse.userId;				
              	//var userValue = 'jmccoy';
                //alert("userValue="+userValue);
                //logUser.value = userValue;
				workflow_initiator.value = logUser.value;
                $.ajax({
                    type: 'GET',
                    url: "/bin/getManualCD",
                    data: {
						action: 'DEPT_DETAILS',
                        userID: logUser.value
                    },
                    dataType: 'json',
                    success: function(myresopnse) {
                        // debugger;
                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        if (myresopnse.length === 1) {
                            DeptID.value = myresopnse[0].DEPTID;
							//getUserDetails();	
                            gifModal.style.display = "none";
                            modal.style.display = "none";
							
                        } else if (myresopnse.length > 1) {
                            gifModal.style.display = "none";
                            modal.style.display = "block";
                            //populate Hidden Fields

                            var col = [];
                            col.push("DEPTID");


                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Dept_ID"];
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
                                        DeptID.value = myresopnse[n].DEPTID;
                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the department");
                                    modal.style.display = "block";
                                } else {									
									//getUserDetails();									
									gifModal.style.display = "none";
                                    modal.style.display = "none";
								}
                            };

                            footerModal.appendChild(okButton);

                        } else {
                            showErrorModal("Alert!", "No matching records found");
                           
                            gifModal.style.display = "none";
                        }

                        span.onclick = function() {

                            var n;
                            var rButtonStatus;

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
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "Please select the department");
                                modal.style.display = "block";
                            } else {								
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "Please select the department");
                                modal.style.display = "block";
                            }

                        };
                    }
                });
            }
        },
        error: function(error) {
            showErrorModal("Alert!", "error block=" + error);
            //loadingText.visible = false; 
        }
    });
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if(StageIndicator.value === null){
  //managerSignSection.visible = false;
  PayrollSignatureSection.visible = false;
  approvingOfficialSignSection.visible = false;
  AuthCB.enabled = true;
  ApprovingOfficialCB.enabled = false;
  PayRollCB.enabled = false;
  Batch.enabled = false;
  //ssn_display_type.value = "masked";
}
else if(StageIndicator.value == "ToApprovingOfficial"){
  gifModal.style.display = "none";
  InformationPanel.enabled = false;
  panelTable.enabled = false;
  timekeeper_email.enabled = false;
  TimekeeperSignatureSection.enabled = true;
  PayrollSignatureSection.visible = false;
  //managerSignSection.visible = false;
  approvingOfficialSignSection.visible = true;
  AuthCB.enabled = false;
  ApprovingOfficialCB.enabled = true;
  PayRollCB.enabled = false;
  Batch.enabled = false;
  //ssn_display_type.value = "masked";
}
else if(StageIndicator.value == "ToPayroll"){
  gifModal.style.display = "none";
  //Batch.enabled = true;
  //InformationPanel.enabled = false;
  DeptID.enabled = false;
  Agency.enabled = false;
  Unit.enabled = false;
  MonthPeriod.enabled = false;
  YearPeriod.enabled = false;
  panelTable.enabled = false;
  timekeeper_email.enabled = false;
  TimekeeperSignatureSection.enabled = true;
  ApprovingOfficialComments.enabled = false;
  PayrollSignatureSection.visible = true;
  //managerSignSection.enabled = true;
  approvingOfficialSignSection.visible = true;
  AuthCB.enabled = false;
  ApprovingOfficialCB.enabled = false;
  PayRollCB.enabled = true;
  //console.log("batch enabled status: " + Batch.enabled);
  //ssn_display_type.value = "actual";
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_Unit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_Unit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && this.value !== null){
    CSU_Agency_Unit.value = this.value;
	getUserDetails();
}  

function getUserDetails(){
	EmpUnionCD.value = "";
	empl_id.value = "";	
	$.ajax({
		type: 'GET',
		url: "/bin/getManualCD",
		data: {
			userID: logUser.value,
			action : "USER_DETAILS"
		},
		dataType: 'json',
		success: function(result) {
			if (result.length > 0) {	
				EmpUnionCD.value = result[0].UNION_CD;
				empl_id.value = result[0].EMPLID;
				//CSU_Agency_Unit.value = result[0].CSU_UNIT;
                //Unit.value = CSU_Agency_Unit.value;
				Ful_Division.value = result[0].FUL_DIVISION;
                getAuthApproverData();				
			}                 
		}
	});
}

function getAuthApproverData(){
	//AuthApproverUserId.value = "";
	//AuthApproverName.value = "";
	//AuthApproverEmailId.value = "";
	$.ajax({
		type: 'GET',
		url: "/bin/getTimekeeperData",
		data: {
			deptId: DeptID.value,
			division : Ful_Division.value,
			agencyUnit: Unit.value,
			fieldVal:Field_Value_2.value
		},
		dataType: 'json',
		success: function(result) {
			if (result.length >= 1) {                  
				AuthApproverName.value = result[0].NAME;				
				AuthApproverUserId.value = result[0].USERID;
				AuthApproverEmailId.value = result[0].EMAILID;				
			}                 
		}
	});
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_Unit_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_Unit_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && this.value !== null){
    CSU_Agency_Unit.value = this.value;
	getUserDetails();
}  

function getUserDetails(){
	EmpUnionCD.value = "";
	empl_id.value = "";	
	$.ajax({
		type: 'GET',
		url: "/bin/chrsIDUpdateServlet",
		data: {
			userId: logUser.value,
			action : "std682OvertimeDistributedCHRSUserIDLookUpSQL"
		},
		dataType: 'json',
		success: function(result) {
			if (result.length > 0) {	
				EmpUnionCD.value = result[0].UNION_CD;
				empl_id.value = result[0].EMPLID;
				//CSU_Agency_Unit.value = result[0].CSU_UNIT;
                //Unit.value = CSU_Agency_Unit.value;
				Ful_Division.value = result[0].FUL_DIVISION;
                getAuthApproverData();				
			}                 
		}
	});
}

function getAuthApproverData(){
	//AuthApproverUserId.value = "";
	//AuthApproverName.value = "";
	//AuthApproverEmailId.value = "";
	$.ajax({
		type: 'GET',
		url: "/bin/getTimekeeperData",
		data: {
			deptId: DeptID.value,
			division : Ful_Division.value,
			agencyUnit: Unit.value,
			fieldVal:Field_Value_2.value
		},
		dataType: 'json',
		success: function(result) {
			if (result.length >= 1) {                  
				AuthApproverName.value = result[0].NAME;				
				AuthApproverUserId.value = result[0].USERID;
				//AuthApproverEmailId.value = result[0].EMAILID;
				AuthApproverEmailId.value ="shreyas.manjunatha@thoughtfocus.com";					
			}                 
		}
	});
}

        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  	
    var userID = logUser.value;
    var cwid = this.value;
  	var duplicateID = "";
  	if(SSN1_1.value !== null){
      	var checkEmpl = SSN1_1.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
  	

  
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd1.value = myresopnse[0].EMPL_RCD;
						initials1.value = myresopnse[0].INITIALS;
						//ssn1.value = myresopnse[0].NATIONAL_ID;
						//var numbers = ssn1.value;
						//ssn1.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
						//ssn1.value = "111-11-1111";
						ssn1.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN1_1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;                  	            	
						lastName1.value = myresopnse[0].LAST_NAME;
						jobCode1.value = myresopnse[0].JOBCODE;
						
						if(jobCode1.value != null && (jobCode1.value === '1870' || jobCode1.value === '1871' || jobCode1.value ==='1872' )){						
							serials1.value = parseInt(emplRcd1.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd1.value) + 1;				
							serials1.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd1.value = myresopnse[n].EMPL_RCD;
									initials1.value = myresopnse[n].INITIALS;
									//ssn1.value = myresopnse[n].NATIONAL_ID;
									//var numbers = ssn1.value;
									//ssn1.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
									ssn1.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN1_1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;;
									lastName1.value = myresopnse[n].LAST_NAME;
									jobCode1.value = myresopnse[n].JOBCODE;
								  
									if(jobCode1.value != null && (jobCode1.value === '1870' || jobCode1.value === '1871' || jobCode1.value ==='1872' )){		
										serials1.value = parseInt(emplRcd1.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd1.value) + 1;				
										serials1.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd1.value = null;
						initials1.value = null;
						ssn1.value = null;
                      	SSN1_1.value = null;
						lastName1.value = null;
						jobCode1.value = null;
						serials1.value = null;
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
	else{
		emplRcd1.value = null;
		initials1.value = null;
		ssn1.value = null;
		lastName1.value = null;
		jobCode1.value = null;
		serials1.value = null;
	}
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  	
    var userID = logUser.value;
    var cwid = this.value;
  	var duplicateID = "";
  	if(SSN1_1.value !== null){
      	var checkEmpl = SSN1_1.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
  	

  
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/chrsIDUpdateServlet",
				data: {
					action: 'getManualCDCHRSEmplName',
					chrsId:chrsId,
					userId: userId
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd1.value = myresopnse[0].EMPL_RCD;
						initials1.value = myresopnse[0].INITIALS;
						//ssn1.value = myresopnse[0].NATIONAL_ID;
						//var numbers = ssn1.value;
						//ssn1.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
						//ssn1.value = "111-11-1111";
						ssn1.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN1_1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;                  	            	
						lastName1.value = myresopnse[0].LAST_NAME;
						jobCode1.value = myresopnse[0].JOBCODE;
						
						if(jobCode1.value != null && (jobCode1.value === '1870' || jobCode1.value === '1871' || jobCode1.value ==='1872' )){						
							serials1.value = parseInt(emplRcd1.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd1.value) + 1;				
							serials1.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd1.value = myresopnse[n].EMPL_RCD;
									initials1.value = myresopnse[n].INITIALS;
									//ssn1.value = myresopnse[n].NATIONAL_ID;
									//var numbers = ssn1.value;
									//ssn1.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
									ssn1.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN1_1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;;
									lastName1.value = myresopnse[n].LAST_NAME;
									jobCode1.value = myresopnse[n].JOBCODE;
								  
									if(jobCode1.value != null && (jobCode1.value === '1870' || jobCode1.value === '1871' || jobCode1.value ==='1872' )){		
										serials1.value = parseInt(emplRcd1.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd1.value) + 1;				
										serials1.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd1.value = null;
						initials1.value = null;
						ssn1.value = null;
                      	SSN1_1.value = null;
						lastName1.value = null;
						jobCode1.value = null;
						serials1.value = null;
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
	else{
		emplRcd1.value = null;
		initials1.value = null;
		ssn1.value = null;
		lastName1.value = null;
		jobCode1.value = null;
		serials1.value = null;
	}
}

        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	var duplicateID = "";
  	if(SSN2_2.value !== null){
      	var checkEmpl = SSN2_2.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd2.value = myresopnse[0].EMPL_RCD;
						initials2.value = myresopnse[0].INITIALS;
						ssn2.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN2_2.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName2.value = myresopnse[0].LAST_NAME;
						jobCode2.value = myresopnse[0].JOBCODE;
						
						if(jobCode2.value != null && (jobCode2.value === '1870' || jobCode2.value === '1871' || jobCode2.value ==='1872' )){
						  serials2.value = parseInt(emplRcd2.value) + 901;
						}
						else{
						  var serialValue = parseInt(emplRcd2.value) + 1;				
						  serials2.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd2.value = myresopnse[n].EMPL_RCD;
									initials2.value = myresopnse[n].INITIALS;
									ssn2.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN2_2.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName2.value = myresopnse[n].LAST_NAME;
									jobCode2.value = myresopnse[n].JOBCODE;
								  
									if(jobCode2.value != null && (jobCode2.value === '1870' || jobCode2.value === '1871' || jobCode2.value ==='1872' )){
										serials2.value = parseInt(emplRcd2.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd2.value) + 1;				
										serials2.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd2.value = "";
						initials2.value = "";
						ssn2.value = "";
                      	SSN2_2.value = "";
						lastName2.value = "";
						jobCode2.value = "";
						serials2.value = "";
						gifModal.style.display = "none";
					}
						span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	var duplicateID = "";
  	if(SSN3_3.value !== null){
      	var checkEmpl = SSN3_3.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd3.value = myresopnse[0].EMPL_RCD;
						initials3.value = myresopnse[0].INITIALS;
						ssn3.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN3_3.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
						lastName3.value = myresopnse[0].LAST_NAME;					
						jobCode3.value = myresopnse[0].JOBCODE;
						
						if(jobCode3.value != null && (jobCode3.value === '1870' || jobCode3.value === '1871' || jobCode3.value ==='1872' )){						
							serials3.value = parseInt(emplRcd3.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd3.value) + 1;				
							serials3.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd3.value = myresopnse[n].EMPL_RCD;
									initials3.value = myresopnse[n].INITIALS;
									ssn3.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN3_3.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName3.value = myresopnse[n].LAST_NAME;
									jobCode3.value = myresopnse[n].JOBCODE;
									
									if(jobCode3.value != null && (jobCode3.value === '1870' || jobCode3.value === '1871' || jobCode3.value === '1872' )){	
										serials3.value = parseInt(emplRcd3.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd3.value) + 1;				
										serials3.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd3.value = "";
						initials3.value = "";
						ssn3.value = "";
						SSN3_3.value = "";
						lastName3.value = "";
						jobCode3.value = "";
						serials3.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	var duplicateID = "";
  	if(SSN4_4.value !== null){
      	var checkEmpl = SSN4_4.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd4.value = myresopnse[0].EMPL_RCD;
						initials4.value = myresopnse[0].INITIALS;
						ssn4.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN4_4.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
						lastName4.value = myresopnse[0].LAST_NAME;					
						jobCode4.value = myresopnse[0].JOBCODE;
						
						if(jobCode4.value != null && (jobCode4.value === '1870' || jobCode4.value === '1871' || jobCode4.value ==='1872' )){						
							serials4.value = parseInt(emplRcd4.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd4.value) + 1;				
							serials4.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd4.value = myresopnse[n].EMPL_RCD;
									initials4.value = myresopnse[n].INITIALS;
									ssn4.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN4_4.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
									lastName4.value = myresopnse[n].LAST_NAME;
									jobCode4.value = myresopnse[n].JOBCODE;
									
									if(jobCode4.value != null && (jobCode4.value === '1870' || jobCode4.value === '1871' || jobCode4.value === '1872' )){	
										serials4.value = parseInt(emplRcd4.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd4.value) + 1;				
										serials4.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd4.value = "";
						initials4.value = "";
						ssn4.value = "";
						SSN4_4.value = "";
						lastName4.value = "";
						jobCode4.value = "";
						serials4.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN5_5.value !== null){
      	var checkEmpl = SSN5_5.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd5.value = myresopnse[0].EMPL_RCD;
						initials5.value = myresopnse[0].INITIALS;
						ssn5.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN5_5.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
						lastName5.value = myresopnse[0].LAST_NAME;					
						jobCode5.value = myresopnse[0].JOBCODE;
						
						if(jobCode5.value != null && (jobCode5.value === '1870' || jobCode5.value === '1871' || jobCode5.value ==='1872' )){						
							serials5.value = parseInt(emplRcd5.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd5.value) + 1;				
							serials5.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd5.value = myresopnse[n].EMPL_RCD;
									initials5.value = myresopnse[n].INITIALS;
									ssn5.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN5_5.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
									lastName5.value = myresopnse[n].LAST_NAME;					
									jobCode5.value = myresopnse[n].JOBCODE;
									
									if(jobCode5.value != null && (jobCode5.value === '1870' || jobCode5.value === '1871' || jobCode5.value ==='1872' )){						
										serials5.value = parseInt(emplRcd5.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd5.value) + 1;				
										serials5.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd5.value = "";
						initials5.value = "";
						ssn5.value = "";
						SSN5_5.value = "";
						lastName5.value = "";
						jobCode5.value = "";
						serials5.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN6_6.value !== null){
      	var checkEmpl = SSN6_6.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd6.value = myresopnse[0].EMPL_RCD;
						initials6.value = myresopnse[0].INITIALS;
						ssn6.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN6_6.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
						lastName6.value = myresopnse[0].LAST_NAME;					
						jobCode6.value = myresopnse[0].JOBCODE;
						
						if(jobCode6.value != null && (jobCode6.value === '1870' || jobCode6.value === '1871' || jobCode6.value ==='1872' )){						
							serials6.value = parseInt(emplRcd6.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd6.value) + 1;				
							serials6.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {
									rButtonStatus = false;
								} else {
									emplRcd6.value = myresopnse[n].EMPL_RCD;
									initials6.value = myresopnse[n].INITIALS;
									ssn6.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);                              	
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN6_6.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
									lastName6.value = myresopnse[n].LAST_NAME;					
									jobCode6.value = myresopnse[n].JOBCODE;
									
									if(jobCode6.value != null && (jobCode6.value === '1870' || jobCode6.value === '1871' || jobCode6.value ==='1872' )){						
										serials6.value = parseInt(emplRcd6.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd6.value) + 1;				
										serials6.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd6.value = "";
						initials6.value = "";
						ssn6.value = "";
						SSN6_6.value = "";
						lastName6.value = "";
						jobCode6.value = "";
						serials6.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN7_7.value !== null){
      	var checkEmpl = SSN7_7.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd7.value = myresopnse[0].EMPL_RCD;
						initials7.value = myresopnse[0].INITIALS;
						ssn7.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN7_7.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
						lastName7.value = myresopnse[0].LAST_NAME;					
						jobCode7.value = myresopnse[0].JOBCODE;
						
						if(jobCode7.value != null && (jobCode7.value === '1870' || jobCode7.value === '1871' || jobCode7.value ==='1872' )){						
							serials7.value = parseInt(emplRcd7.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd7.value) + 1;				
							serials7.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {
									rButtonStatus = false;
								} else {
									emplRcd7.value = myresopnse[n].EMPL_RCD;
									initials7.value = myresopnse[n].INITIALS;
									ssn7.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN7_7.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " +cwid;
									lastName7.value = myresopnse[n].LAST_NAME;					
									jobCode7.value = myresopnse[n].JOBCODE;
									
									if(jobCode7.value != null && (jobCode7.value === '1870' || jobCode7.value === '1871' || jobCode7.value ==='1872' )){						
										serials7.value = parseInt(emplRcd7.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd7.value) + 1;				
										serials7.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd7.value = "";
						initials7.value = "";
						ssn7.value = "";
						SSN7_7.value = "";
						lastName7.value = "";
						jobCode7.value = "";
						serials7.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN8_8.value !== null){
      	var checkEmpl = SSN8_8.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd8.value = myresopnse[0].EMPL_RCD;
						initials8.value = myresopnse[0].INITIALS;
						ssn8.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN8_8.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName8.value = myresopnse[0].LAST_NAME;					
						jobCode8.value = myresopnse[0].JOBCODE;
						
						if(jobCode8.value != null && (jobCode8.value === '1870' || jobCode8.value === '1871' || jobCode8.value ==='1872' )){						
							serials8.value = parseInt(emplRcd8.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd8.value) + 1;				
							serials8.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd8.value = myresopnse[n].EMPL_RCD;
									initials8.value = myresopnse[n].INITIALS;
									ssn8.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN8_8.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName8.value = myresopnse[n].LAST_NAME;					
									jobCode8.value = myresopnse[n].JOBCODE;
									
									if(jobCode8.value != null && (jobCode8.value === '1870' || jobCode8.value === '1871' || jobCode8.value ==='1872' )){						
										serials8.value = parseInt(emplRcd8.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd8.value) + 1;				
										serials8.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd8.value = "";
						initials8.value = "";
						ssn8.value = "";
						SSN8_8.value = "";
						lastName8.value = "";
						jobCode8.value = "";
						serials8.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId9_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId9_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN9_9.value !== null){
      	var checkEmpl = SSN9_9.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd9.value = myresopnse[0].EMPL_RCD;
						initials9.value = myresopnse[0].INITIALS;
						ssn9.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN9_9.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName9.value = myresopnse[0].LAST_NAME;					
						jobCode9.value = myresopnse[0].JOBCODE;
						
						if(jobCode9.value != null && (jobCode9.value === '1870' || jobCode9.value === '1871' || jobCode9.value ==='1872' )){						
							serials9.value = parseInt(emplRcd9.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd9.value) + 1;				
							serials9.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd9.value = myresopnse[n].EMPL_RCD;
									initials9.value = myresopnse[n].INITIALS;
									ssn9.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN9_9.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName9.value = myresopnse[n].LAST_NAME;					
									jobCode9.value = myresopnse[n].JOBCODE;
									
									if(jobCode9.value != null && (jobCode9.value === '1870' || jobCode9.value === '1871' || jobCode9.value ==='1872' )){						
										serials9.value = parseInt(emplRcd9.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd9.value) + 1;				
										serials9.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd9.value = "";
						initials9.value = "";
						ssn9.value = "";
						SSN9_9.value = "";
						lastName9.value = "";
						jobCode9.value = "";
						serials9.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId10_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId10_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	var duplicateID = "";
  	if(SSN10_10.value !== null){
      	var checkEmpl = SSN10_10.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd10.value = myresopnse[0].EMPL_RCD;
						initials10.value = myresopnse[0].INITIALS;
						ssn10.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN10_10.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName10.value = myresopnse[0].LAST_NAME;					
						jobCode10.value = myresopnse[0].JOBCODE;
						
						if(jobCode10.value != null && (jobCode10.value === '1870' || jobCode10.value === '1871' || jobCode10.value ==='1872' )){						
							serials10.value = parseInt(emplRcd10.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd10.value) + 1;				
							serials10.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd10.value = myresopnse[n].EMPL_RCD;
									initials10.value = myresopnse[n].INITIALS;
									ssn10.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN10_10.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName10.value = myresopnse[n].LAST_NAME;					
									jobCode10.value = myresopnse[n].JOBCODE;
									
									if(jobCode10.value != null && (jobCode10.value === '1870' || jobCode10.value === '1871' || jobCode10.value ==='1872' )){						
										serials10.value = parseInt(emplRcd10.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd10.value) + 1;				
										serials10.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd10.value = "";
						initials10.value = "";
						ssn10.value = "";
						SSN10_10.value = "";
						lastName10.value = "";
						jobCode10.value = "";
						serials10.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId11_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId11_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN11_11.value !== null){
      	var checkEmpl = SSN11_11.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd11.value = myresopnse[0].EMPL_RCD;
						initials11.value = myresopnse[0].INITIALS;
						ssn11.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN11_11.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName11.value = myresopnse[0].LAST_NAME;					
						jobCode11.value = myresopnse[0].JOBCODE;
						
						if(jobCode11.value != null && (jobCode11.value === '1870' || jobCode11.value === '1871' || jobCode11.value ==='1872' )){						
							serials11.value = parseInt(emplRcd11.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd11.value) + 1;				
							serials11.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd11.value = myresopnse[n].EMPL_RCD;
									initials11.value = myresopnse[n].INITIALS;
									ssn11.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN11_11.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName11.value = myresopnse[n].LAST_NAME;					
									jobCode11.value = myresopnse[n].JOBCODE;
									
									if(jobCode11.value != null && (jobCode11.value === '1870' || jobCode11.value === '1871' || jobCode11.value ==='1872' )){						
										serials11.value = parseInt(emplRcd11.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd11.value) + 1;				
										serials11.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd11.value = "";
						initials11.value = "";
						ssn11.value = "";
						SSN11_11.value = "";
						lastName11.value = "";
						jobCode11.value = "";
						serials11.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId12_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId12_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN12_12.value !== null){
      	var checkEmpl = SSN12_12.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd12.value = myresopnse[0].EMPL_RCD;
						initials12.value = myresopnse[0].INITIALS;
						ssn12.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN12_12.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName12.value = myresopnse[0].LAST_NAME;					
						jobCode12.value = myresopnse[0].JOBCODE;
						
						if(jobCode12.value != null && (jobCode12.value === '1870' || jobCode12.value === '1871' || jobCode12.value ==='1872' )){						
							serials12.value = parseInt(emplRcd12.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd12.value) + 1;				
							serials12.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd12.value = myresopnse[n].EMPL_RCD;
									initials12.value = myresopnse[n].INITIALS;
									ssn12.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN12_12.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName12.value = myresopnse[n].LAST_NAME;					
									jobCode12.value = myresopnse[n].JOBCODE;
									
									if(jobCode12.value != null && (jobCode12.value === '1870' || jobCode12.value === '1871' || jobCode12.value ==='1872' )){						
										serials12.value = parseInt(emplRcd12.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd12.value) + 1;				
										serials12.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd12.value = "";
						initials12.value = "";
						ssn12.value = "";
						SSN12_12.value = "";
						lastName12.value = "";
						jobCode12.value = "";
						serials12.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId13_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId13_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN13_13.value !== null){
      	var checkEmpl = SSN13_13.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd13.value = myresopnse[0].EMPL_RCD;
						initials13.value = myresopnse[0].INITIALS;
						ssn13.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN13_13.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName13.value = myresopnse[0].LAST_NAME;					
						jobCode13.value = myresopnse[0].JOBCODE;
						
						if(jobCode13.value != null && (jobCode13.value === '1870' || jobCode13.value === '1871' || jobCode13.value ==='1872' )){						
							serials13.value = parseInt(emplRcd13.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd13.value) + 1;				
							serials13.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd13.value = myresopnse[n].EMPL_RCD;
									initials13.value = myresopnse[n].INITIALS;
									ssn13.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN13_13.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName13.value = myresopnse[n].LAST_NAME;					
									jobCode13.value = myresopnse[n].JOBCODE;
									
									if(jobCode13.value != null && (jobCode13.value === '1870' || jobCode13.value === '1871' || jobCode13.value ==='1872' )){						
										serials13.value = parseInt(emplRcd13.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd13.value) + 1;				
										serials13.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd13.value = "";
						initials13.value = "";
						ssn13.value = "";
						SSN13_13.value = "";
						lastName13.value = "";
						jobCode13.value = "";
						serials13.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId14_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId14_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN14_14.value !== null){
      	var checkEmpl = SSN14_14.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
	
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd14.value = myresopnse[0].EMPL_RCD;
						initials14.value = myresopnse[0].INITIALS;
						ssn14.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN14_14.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName14.value = myresopnse[0].LAST_NAME;					
						jobCode14.value = myresopnse[0].JOBCODE;
						
						if(jobCode14.value != null && (jobCode14.value === '1870' || jobCode14.value === '1871' || jobCode14.value ==='1872' )){						
							serials14.value = parseInt(emplRcd14.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd14.value) + 1;				
							serials14.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd14.value = myresopnse[n].EMPL_RCD;
									initials14.value = myresopnse[n].INITIALS;
									ssn14.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN14_14.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName14.value = myresopnse[n].LAST_NAME;					
									jobCode14.value = myresopnse[n].JOBCODE;
									
									if(jobCode14.value != null && (jobCode14.value === '1870' || jobCode14.value === '1871' || jobCode14.value ==='1872' )){						
										serials14.value = parseInt(emplRcd14.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd14.value) + 1;				
										serials14.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd14.value = "";
						initials14.value = "";
						ssn14.value = "";
						SSN14_14.value = "";
						lastName14.value = "";
						jobCode14.value = "";
						serials14.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId15_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId15_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN15_15.value !== null){
      	var checkEmpl = SSN15_15.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd15.value = myresopnse[0].EMPL_RCD;
						initials15.value = myresopnse[0].INITIALS;
						ssn15.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN15_15.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName15.value = myresopnse[0].LAST_NAME;					
						jobCode15.value = myresopnse[0].JOBCODE;
						
						if(jobCode15.value != null && (jobCode15.value === '1870' || jobCode15.value === '1871' || jobCode15.value ==='1872' )){						
							serials15.value = parseInt(emplRcd15.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd15.value) + 1;				
							serials15.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd15.value = myresopnse[n].EMPL_RCD;
									initials15.value = myresopnse[n].INITIALS;
									ssn15.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN15_15.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName15.value = myresopnse[n].LAST_NAME;					
									jobCode15.value = myresopnse[n].JOBCODE;
									
									if(jobCode15.value != null && (jobCode15.value === '1870' || jobCode15.value === '1871' || jobCode15.value ==='1872' )){						
										serials15.value = parseInt(emplRcd15.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd15.value) + 1;				
										serials15.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd15.value = "";
						initials15.value = "";
						ssn15.value = "";
						SSN15_15.value = "";
						lastName15.value = "";
						jobCode15.value = "";
						serials15.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId16_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId16_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN16_16.value !== null){
      	var checkEmpl = SSN16_16.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd16.value = myresopnse[0].EMPL_RCD;
						initials16.value = myresopnse[0].INITIALS;
						ssn16.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN16_16.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName16.value = myresopnse[0].LAST_NAME;					
						jobCode16.value = myresopnse[0].JOBCODE;
						
						if(jobCode16.value != null && (jobCode16.value === '1870' || jobCode16.value === '1871' || jobCode16.value ==='1872' )){						
							serials16.value = parseInt(emplRcd16.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd16.value) + 1;				
							serials16.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd16.value = myresopnse[n].EMPL_RCD;
									initials16.value = myresopnse[n].INITIALS;
									ssn16.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN16_16.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName16.value = myresopnse[n].LAST_NAME;					
									jobCode16.value = myresopnse[n].JOBCODE;
									
									if(jobCode16.value != null && (jobCode16.value === '1870' || jobCode16.value === '1871' || jobCode16.value ==='1872' )){						
										serials16.value = parseInt(emplRcd16.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd16.value) + 1;				
										serials16.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd16.value = "";
						initials16.value = "";
						ssn16.value = "";
						SSN16_16.value = "";
						lastName16.value = "";
						jobCode16.value = "";
						serials16.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId17_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId17_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN17_17.value !== null){
      	var checkEmpl = SSN17_17.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd17.value = myresopnse[0].EMPL_RCD;
						initials17.value = myresopnse[0].INITIALS;
						ssn17.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN17_17.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName17.value = myresopnse[0].LAST_NAME;					
						jobCode17.value = myresopnse[0].JOBCODE;
						
						if(jobCode17.value != null && (jobCode17.value === '1870' || jobCode17.value === '1871' || jobCode17.value ==='1872' )){						
							serials17.value = parseInt(emplRcd17.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd17.value) + 1;				
							serials17.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");

						col.push("LAST_NAME");

						col.push("JOBCODE");
						col.push("EMPL_RCD");

						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd17.value = myresopnse[n].EMPL_RCD;
									initials17.value = myresopnse[n].INITIALS;
									ssn17.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN17_17.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName17.value = myresopnse[n].LAST_NAME;					
									jobCode17.value = myresopnse[n].JOBCODE;
									
									if(jobCode17.value != null && (jobCode17.value === '1870' || jobCode17.value === '1871' || jobCode17.value ==='1872' )){						
										serials17.value = parseInt(emplRcd17.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd17.value) + 1;				
										serials17.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd17.value = "";
						initials17.value = "";
						ssn17.value = "";
						SSN17_17.value = "";
						lastName17.value = "";
						jobCode17.value = "";
						serials17.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId18_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_emplId18_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var userID = logUser.value;
    var cwid = this.value;
	
	var duplicateID = "";
  	if(SSN18_18.value !== null){
      	var checkEmpl = SSN18_18.value;                  	
        var bothValue = checkEmpl.split(" - "); 
        //var unMaskedSSN = bothValue[0]; 
        duplicateID = bothValue[1];      
    }
    if (cwid !== null) {
		if(cwid != duplicateID){
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getManualCD",
				data: {
					action: 'EMP_DETAILS',
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function(myresopnse) {                
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];

					if (myresopnse.length === 1) {

						emplRcd18.value = myresopnse[0].EMPL_RCD;
						initials18.value = myresopnse[0].INITIALS;
						ssn18.value = getSSN(ssn_display_type.value, myresopnse[0].NATIONAL_ID);
						var numbers = myresopnse[0].NATIONAL_ID;
						SSN18_18.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
						lastName18.value = myresopnse[0].LAST_NAME;					
						jobCode18.value = myresopnse[0].JOBCODE;
						
						if(jobCode18.value != null && (jobCode18.value === '1870' || jobCode18.value === '1871' || jobCode18.value ==='1872' )){						
							serials18.value = parseInt(emplRcd18.value) + 901;
						}
						else{
							var serialValue = parseInt(emplRcd18.value) + 1;				
							serials18.value = "00" + serialValue;
						}

						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];                    

						col.push("INITIALS");
						col.push("LAST_NAME");
						col.push("JOBCODE");
						col.push("EMPL_RCD");
						col.push("NATIONAL_ID");

						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						//var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
						var headings = ["", "Initials", "Last_Name", "Jobcode", "Empl_RCD", "SSN"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);                        
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
								if (col[l] == "NATIONAL_ID") {
									tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4);
								} else {
									tabCell.innerHTML = myresopnse[k][col[l]];
								}
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
						okButton.value = "Ok";
						okButton.onclick = function(event) {                       
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									emplRcd18.value = myresopnse[n].EMPL_RCD;
									initials18.value = myresopnse[n].INITIALS;
									ssn18.value = getSSN(ssn_display_type.value, myresopnse[n].NATIONAL_ID);
									var numbers = myresopnse[n].NATIONAL_ID;
									SSN18_18.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
									lastName18.value = myresopnse[n].LAST_NAME;					
									jobCode18.value = myresopnse[n].JOBCODE;
									
									if(jobCode18.value != null && (jobCode18.value === '1870' || jobCode18.value === '1871' || jobCode18.value ==='1872' )){						
										serials18.value = parseInt(emplRcd18.value) + 901;
									}
									else{
										var serialValue = parseInt(emplRcd18.value) + 1;				
										serials18.value = "00" + serialValue;
									}
						
									rButtonStatus = true;
									modal.style.display = "none";
									break;
								}
							}
							if (rButtonStatus === false) {
								showErrorModal("Alert!", "Please select the department");
								modal.style.display = "block";
							}
						};
						var footerModal = document.getElementById("modal_footer");

						footerModal.appendChild(okButton);

					} else {
						showErrorModal("Alert!", "No matching records found");
						emplRcd18.value = "";
						initials18.value = "";
						ssn18.value = "";
						SSN18_18.value = "";
						lastName18.value = "";
						jobCode18.value = "";
						serials18.value = "";
						gifModal.style.display = "none";
					}
					span.onclick = function() {
						modal.style.display = "none";
					};
				}
			});
		}
    }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (this.value == 1) {
    
        /*var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        AuthDate.value = d;*/

        AuthDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    AuthSign.value = userValue;
                    /*if(timekeeper_email.value === null){
                    	timekeeper_email.value = TimekeeperEmailId.value;
                    }*/
                    AuthDate.value = myresopnse.SERVER_DATE;
                    timekeeper_email.enabled = true;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        AuthDate.enabled = false;
        
    
} else {
    AuthSign.value = "";
    AuthDate.value = "";
   
}
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (this.value == 1) {
    
        /*var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        AuthDate.value = d;*/

        AuthDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    AuthSign.value = userValue;
                    if(timekeeper_email.value === null){
                    	timekeeper_email.value = "shreyas.manjunatha@thoughtfocus.com";
                    }
                    AuthDate.value = myresopnse.SERVER_DATE;
                    timekeeper_email.enabled = true;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        AuthDate.enabled = false;
        
    
} else {
    AuthSign.value = "";
    AuthDate.value = "";
   
}
}

        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthSign_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(AuthDate.value === null) {
AuthDate.value = (new Date().toISOString().slice(0,10));
AuthExt.value="1234";
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_AuthDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ApprovingOfficialCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ApprovingOfficialCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToApprovingOfficial"){
 // AuthCB.enabled = false;
  //this.value = 1;
  if (this.value == 1) {

          /*var dateString = new Date().toLocaleString("en-US", {

              timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
          }).replace(/[^ -~]/g, '');
          var dateObject = new Date(dateString);
          var curyear = dateObject.getFullYear();
          var curyearMonth = dateObject.getMonth() + 1;
          var curyearDay = dateObject.getDate();
          var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
          ApprovingOfficialDate.value = d;
          ApprovingOfficialDate.enabled = false;
          ApprovingOfficialSign.value = AuthApproverName.value;*/
    $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    ApprovingOfficialSign.value = userValue;
                    
                    ApprovingOfficialDate.value = myresopnse.SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

  } else {
      ApprovingOfficialSign.value = "";
      ApprovingOfficialDate.value = "";   
  }
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ApprovingOfficialSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ApprovingOfficialSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ApprovingOfficialDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ApprovingOfficialDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager"){
  /*this.value = 1;
  AuthCB.enabled = false;
  ApprovingOfficialCB.enabled = false;*/
if (this.value == 1) {
    
       /* var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        ManagerDate.value = d;

        ManagerDate.enabled = false;
		ManagerSign.value = ManagerName.value;*/
   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    ManagerSign.value = userValue;
                    
                    ManagerDate.value = myresopnse.SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
    
} else {
    ManagerDate.value = "";
    ManagerSign.value = "";   
}
}

        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ManagerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ManagerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ManagerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_ManagerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToPayroll"){
  AuthCB.enabled = false;
  ApprovingOfficialCB.enabled = false;
  ApprovingOfficialComments.enabled = false;
  ManagerCB.enabled = false;
if (this.value == 1) {
    
        /*var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        PayRollDate.value = d;*/

        PayRollDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    PayRollSign.value = userValue;
                   PayRollDate.value = myresopnse.SERVER_DATE;
                    //payroll_email.value = "yjayaram@fullerton.edu";
                    //payroll_email.enabled = true;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        PayRollDate.enabled = false;
        
    
} else {
    PayRollSign.value = "";
    PayRollDate.value = "";
   
}
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToPayroll"){
  AuthCB.enabled = false;
  ApprovingOfficialCB.enabled = false;
  ApprovingOfficialComments.enabled = false;
  ManagerCB.enabled = false;
if (this.value == 1) {
    
        /*var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        PayRollDate.value = d;*/

        PayRollDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    PayRollSign.value = userValue;
                   PayRollDate.value = myresopnse.SERVER_DATE;
                    payroll_email.value = "shreyas.manjunatha@thoughtfocus.com";
                    //payroll_email.enabled = true;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        PayRollDate.enabled = false;
        
    
} else {
    PayRollSign.value = "";
    PayRollDate.value = "";
   
}
}

        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollSign_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(PayRollDate.value === null) {
PayRollDate.value = (new Date().toISOString().slice(0,10));
PayRollExt.value="7777";
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_PayRollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_hidden_hours_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_hidden_hours_init0 = function (scope) {
    with(this) {
        with(scope) {
            function validateForm(){
  emplId1.mandatory = true;
  alert("inside function");
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_UnMaskedSSNPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_UnMaskedSSNPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToPayroll"){
  	 
  	if(SSN1_1.value !== null){
      	var checkEmpl1 = SSN1_1.value;                  	
        var bothValue1 = checkEmpl1.split(" - "); 
        var unMaskedSSN1 = bothValue1[0];              
    }
	ssn1.value = unMaskedSSN1;
  
    if(SSN2_2.value !== null){
      var checkEmpl2 = SSN2_2.value;                  	
      var bothValue2 = checkEmpl2.split(" - "); 
      var unMaskedSSN2 = bothValue2[0];              
    }
	ssn2.value = unMaskedSSN2;
  
  	if(SSN3_3.value !== null){
      var checkEmpl3 = SSN3_3.value;                  	
      var bothValue3 = checkEmpl3.split(" - "); 
      var unMaskedSSN3 = bothValue3[0];              
    }
	ssn3.value = unMaskedSSN3;
  
  	if(SSN4_4.value !== null){
      var checkEmpl4 = SSN4_4.value;                  	
      var bothValue4 = checkEmpl4.split(" - "); 
      var unMaskedSSN4 = bothValue4[0];              
    }
	ssn4.value = unMaskedSSN4;
  
    if(SSN5_5.value !== null){
      var checkEmpl5 = SSN5_5.value;                  	
      var bothValue5 = checkEmpl5.split(" - "); 
      var unMaskedSSN5 = bothValue5[0];              
    }
	ssn5.value = unMaskedSSN5;
  
  	if(SSN6_6.value !== null){
      var checkEmpl6 = SSN6_6.value;                  	
      var bothValue6 = checkEmpl6.split(" - "); 
      var unMaskedSSN6 = bothValue6[0];              
    }
	ssn6.value = unMaskedSSN6;
  	
  	if(SSN7_7.value !== null){
      var checkEmpl7 = SSN7_7.value;                  	
      var bothValue7 = checkEmpl7.split(" - "); 
      var unMaskedSSN7 = bothValue7[0];              
    }
	ssn7.value = unMaskedSSN7;
  	
  	if(SSN8_8.value !== null){
      var checkEmpl8 = SSN8_8.value;                  	
      var bothValue8 = checkEmpl8.split(" - "); 
      var unMaskedSSN8 = bothValue8[0];              
    }
	ssn8.value = unMaskedSSN8;
  
  	if(SSN9_9.value !== null){
      var checkEmpl9 = SSN9_9.value;                  	
      var bothValue9 = checkEmpl9.split(" - "); 
      var unMaskedSSN9 = bothValue9[0];              
    }
	ssn9.value = unMaskedSSN9;
  
	if(SSN10_10.value !== null){
      var checkEmpl10 = SSN10_10.value;                  	
      var bothValue10 = checkEmpl10.split(" - "); 
      var unMaskedSSN10 = bothValue10[0];              
    }
	ssn10.value = unMaskedSSN10;
  
	if(SSN11_11.value !== null){
      var checkEmpl11 = SSN11_11.value;                  	
      var bothValue11 = checkEmpl11.split(" - "); 
      var unMaskedSSN11 = bothValue11[0];              
    }
	ssn11.value = unMaskedSSN11;
	
	if(SSN12_12.value !== null){
      var checkEmpl12 = SSN12_12.value;                  	
      var bothValue12 = checkEmpl12.split(" - "); 
      var unMaskedSSN12 = bothValue12[0];              
    }
	ssn12.value = unMaskedSSN12;
  
	if(SSN13_13.value !== null){
      var checkEmpl13 = SSN13_13.value;                  	
      var bothValue13 = checkEmpl13.split(" - "); 
      var unMaskedSSN13 = bothValue13[0];              
    }
	ssn13.value = unMaskedSSN13;
	
	if(SSN14_14.value !== null){
      var checkEmpl14 = SSN14_14.value;                  	
      var bothValue14 = checkEmpl14.split(" - "); 
      var unMaskedSSN14 = bothValue14[0];              
    }
	ssn14.value = unMaskedSSN14;
	
	if(SSN15_15.value !== null){
      var checkEmpl15 = SSN15_15.value;                  	
      var bothValue15 = checkEmpl15.split(" - "); 
      var unMaskedSSN15 = bothValue15[0];              
    }
	ssn15.value = unMaskedSSN15;
	
	if(SSN16_16.value !== null){
      var checkEmpl16 = SSN16_16.value;                  	
      var bothValue16 = checkEmpl16.split(" - "); 
      var unMaskedSSN16 = bothValue16[0];              
    }
	ssn16.value = unMaskedSSN16;
	
	if(SSN17_17.value !== null){
      var checkEmpl17 = SSN17_17.value;                  	
      var bothValue17 = checkEmpl17.split(" - "); 
      var unMaskedSSN17 = bothValue17[0];              
    }
	ssn17.value = unMaskedSSN17;
	
	if(SSN18_18.value !== null){
      var checkEmpl18 = SSN18_18.value;                  	
      var bothValue18 = checkEmpl18.split(" - "); 
      var unMaskedSSN18 = bothValue18[0];              
    }
	ssn18.value = unMaskedSSN18;
}

        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;
var i=0;
alert(AbsentDetails.instanceIndex);
for (i=0; i<=AbsentDetails.instanceIndex; i++){
  alert("here");
  if(AbsentDetails.instanceManager.instances[i].DateAbsent.value !== null && AbsentDetails.instanceManager.instances[i].DateAbsent.value !== ""){
  if(AbsentDetails.instanceManager.instances[i].HourAbsent.value === null){
    	alert("Please enter hour absent");
       //alert(guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[i].HourAbsent[0]);
        guideBridge.setFocus(guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[i].HourAbsent[0]);
        submitFlag=1;
  }else{
     submitFlag=0;
  }
  
}
  
}



/*if(AbsentDetails.instanceManager.instances[1].DateAbsent.value !== null && AbsentDetails.instanceManager.instances[1].DateAbsent.value !== ""){
  if(AbsentDetails.instanceManager.instances[1].HourAbsent.value === null){
    	alert("Please enter hour absent");    
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[1].HourAbsent[0]");
        submitFlag=1;
  }else{
     submitFlag=0;
  }
  
}*/

if(submitFlag === 0){
  guideBridge.submit();
}


        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;
if (DeptID.value !== null) {
  submitFlag  = 0;   
  }else{
showErrorModal("Alert!","Please enter Department ID");    
    submitFlag  = 1;
  }
if(submitFlag === 0){
  getPdf();

}



function getPdf() {  
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/manual-cd048/manual-cd048-student-asst-attendance---distributed');
            jsonData.append('fileName', DeptID.value  + "_" + Date.now());          
            console.log("xml data: " + result.data);
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
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_saveguidedraft1613552039038_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_saveguidedraft1613552039038_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(Unit.value === null){
    //showErrorModal("Error !", "Please enter Unit");
	//guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].InformationPanel[0].Unit[0]");
    formSavedStatus.value = "0";
}
else{
    formSavedStatus.value = "1";
}

var name = "";
if(AuthSign.value === null || AuthSign.value === ""){
  	AuthSign.value = " ";
}

aftiaDescCWID.value = AuthSign.value + " DeptId : " + DeptID.value + " " + MonthPeriod.value + " " + YearPeriod.value;



handleDraftSave(this);


        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_submit_13966870281576568571969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated_submit_13966870281576568571969_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(DeptID.value !== null){   
        aftiaDescCWID.value = AuthSign.value + " DeptId : " + DeptID.value + " " + MonthPeriod.value + " " + YearPeriod.value;   
}

EmailSubject.value = "Request for Manual CD048 Student Assistant Attendance";  
noOfEmployees.value = 0;

TimekeeperEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
AuthApproverEmailId.value = "shreyas.manjunatha@thoughtfocus.com";

/*
TimekeeperEmailId.value = "yjayaram@fullerton.edu";
AuthApproverEmailId.value = "yjayaram@fullerton.edu";
*/

var submitFlag =0;

if(emplId1.value === null && emplId2.value === null && emplId3.value === null && emplId4.value === null && emplId5.value === null && emplId6.value === null && emplId7.value === null && emplId8.value === null && emplId9.value === null && emplId10.value === null && emplId11.value === null && emplId12.value === null && emplId13.value === null && emplId14.value === null && emplId15.value === null && emplId16.value === null && emplId17.value === null && emplId18.value === null){	
    submitFlag = 1;
	showErrorModal("Error !", "Please enter a valid Employee Id in at least one row");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].panelTable[0].Row1[0].emplId1[0]");
}

if(submitFlag === 0){
  validateForm();
  //console.log("aftiaDescCWID : " + aftiaDescCWID.value);
  //console.log("noOfEmployees : " + noOfEmployees.value);  
  //StageIndicator.value = "not null";
  guideBridge.submit();
}



function validateForm(){
	if(emplId1.value !== null){
		emplRcd1.mandatory = true;
		initials1.mandatory = true;
		lastName1.mandatory = true;
		ssn1.mandatory = true;
		jobCode1.mandatory = true;
		serials1.mandatory = true;
		hours1.mandatory = true;
		//minutes1.mandatory = true;
		salary1.mandatory = true;
		grossAmount1.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId2.value !== null){
		emplRcd2.mandatory = true;
		initials2.mandatory = true;
		lastName2.mandatory = true;
		ssn2.mandatory = true;
		jobCode2.mandatory = true;
		serials2.mandatory = true;
		hours2.mandatory = true;
		//minutes2.mandatory = true;
		salary2.mandatory = true;
		grossAmount2.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId3.value !== null){
		emplRcd3.mandatory = true;
		initials3.mandatory = true;
		lastName3.mandatory = true;
		ssn3.mandatory = true;
		jobCode3.mandatory = true;
		serials3.mandatory = true;
		hours3.mandatory = true;
		//minutes3.mandatory = true;
		salary3.mandatory = true;
		grossAmount3.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId4.value !== null){
		emplRcd4.mandatory = true;
		initials4.mandatory = true;
		lastName4.mandatory = true;
		ssn4.mandatory = true;
		jobCode4.mandatory = true;
		serials4.mandatory = true;
		hours4.mandatory = true;
		//minutes4.mandatory = true;
		salary4.mandatory = true;
		grossAmount4.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId5.value !== null){
		emplRcd5.mandatory = true;
		initials5.mandatory = true;
		lastName5.mandatory = true;
		ssn5.mandatory = true;
		jobCode5.mandatory = true;
		serials5.mandatory = true;
		hours5.mandatory = true;
		//minutes5.mandatory = true;
		salary5.mandatory = true;
		grossAmount5.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId6.value !== null){
		emplRcd6.mandatory = true;
		initials6.mandatory = true;
		lastName6.mandatory = true;
		ssn6.mandatory = true;
		jobCode6.mandatory = true;
		serials6.mandatory = true;
		hours6.mandatory = true;
		//minutes6.mandatory = true;
		salary6.mandatory = true;
		grossAmount6.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId7.value !== null){
		emplRcd7.mandatory = true;
		initials7.mandatory = true;
		lastName7.mandatory = true;
		ssn7.mandatory = true;
		jobCode7.mandatory = true;
		serials7.mandatory = true;
		hours7.mandatory = true;
		//minutes7.mandatory = true;
		salary7.mandatory = true;
		grossAmount7.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId8.value !== null){
		emplRcd8.mandatory = true;
		initials8.mandatory = true;
		lastName8.mandatory = true;
		ssn8.mandatory = true;
		jobCode8.mandatory = true;
		serials8.mandatory = true;
		hours8.mandatory = true;
		//minutes8.mandatory = true;
		salary8.mandatory = true;
		grossAmount8.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId9.value !== null){
		emplRcd9.mandatory = true;
		initials9.mandatory = true;
		lastName9.mandatory = true;
		ssn9.mandatory = true;
		jobCode9.mandatory = true;
		serials9.mandatory = true;
		hours9.mandatory = true;
		//minutes9.mandatory = true;
		salary9.mandatory = true;
		grossAmount9.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId10.value !== null){
		emplRcd10.mandatory = true;
		initials10.mandatory = true;
		lastName10.mandatory = true;
		ssn10.mandatory = true;
		jobCode10.mandatory = true;
		serials10.mandatory = true;
		hours10.mandatory = true;
		//minutes10.mandatory = true;
		salary10.mandatory = true;
		grossAmount10.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId11.value !== null){
		emplRcd11.mandatory = true;
		initials11.mandatory = true;
		lastName11.mandatory = true;
		ssn11.mandatory = true;
		jobCode11.mandatory = true;
		serials11.mandatory = true;
		hours11.mandatory = true;
		//minutes11.mandatory = true;
		salary11.mandatory = true;
		grossAmount11.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId12.value !== null){
		emplRcd12.mandatory = true;
		initials12.mandatory = true;
		lastName12.mandatory = true;
		ssn12.mandatory = true;
		jobCode12.mandatory = true;
		serials12.mandatory = true;
		hours12.mandatory = true;
		//minutes12.mandatory = true;
		salary12.mandatory = true;
		grossAmount12.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId13.value !== null){
		emplRcd13.mandatory = true;
		initials13.mandatory = true;
		lastName13.mandatory = true;
		ssn13.mandatory = true;
		jobCode13.mandatory = true;
		serials13.mandatory = true;
		hours13.mandatory = true;
		//minutes13.mandatory = true;
		salary13.mandatory = true;
		grossAmount13.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId14.value !== null){
		emplRcd14.mandatory = true;
		initials14.mandatory = true;
		lastName14.mandatory = true;
		ssn14.mandatory = true;
		jobCode14.mandatory = true;
		serials14.mandatory = true;
		hours14.mandatory = true;
		//minutes14.mandatory = true;
		salary14.mandatory = true;
		grossAmount14.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId15.value !== null){
		emplRcd15.mandatory = true;
		initials15.mandatory = true;
		lastName15.mandatory = true;
		ssn15.mandatory = true;
		jobCode15.mandatory = true;
		serials15.mandatory = true;
		hours15.mandatory = true;
		//minutes15.mandatory = true;
		salary15.mandatory = true;
		grossAmount15.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId16.value !== null){
		emplRcd16.mandatory = true;
		initials16.mandatory = true;
		lastName16.mandatory = true;
		ssn16.mandatory = true;
		jobCode16.mandatory = true;
		serials16.mandatory = true;
		hours16.mandatory = true;
		//minutes16.mandatory = true;
		salary16.mandatory = true;
		grossAmount16.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId17.value !== null){
		emplRcd17.mandatory = true;
		initials17.mandatory = true;
		lastName17.mandatory = true;
		ssn17.mandatory = true;
		jobCode17.mandatory = true;
		serials17.mandatory = true;
		hours17.mandatory = true;
		//minutes17.mandatory = true;
		salary17.mandatory = true;
		grossAmount17.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
	
	if(emplId18.value !== null){
		emplRcd18.mandatory = true;
		initials18.mandatory = true;
		lastName18.mandatory = true;
		ssn18.mandatory = true;
		jobCode18.mandatory = true;
		serials18.mandatory = true;
		hours18.mandatory = true;
		//minutes18.mandatory = true;
		salary18.mandatory = true;
		grossAmount18.mandatory = true;
        noOfEmployees.value = parseInt(noOfEmployees.value) + 1;
	}
}
        }
	}
}
/**
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated__click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated__click00 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;

alert("here");
if (DepartmentId.value !== null) {
  alert("here111");
  submitFlag  = 0;
  
  
  }else{
        
    alert("Else Block");

var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Department ID";
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
    
    modal.style.display = "block";
    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInfo[0].CSUFStatus[0]");
  
    submitFlag  = 1;
  }


if(submitFlag === 0){ 
  alert("submitFlag");
  getPdf();

}



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/manual-cd048/manual-cd048-student-asst-attendance---distributed');
            jsonData.append('fileName', DepartmentId.value  + "_" + Date.now());          
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
 * @function manual_cd048_manual_cd048_student_asst_attendance___distributed.generated__click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
manual_cd048_manual_cd048_student_asst_attendance___distributed.generated__click01 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;

if (DepartmentId.value !== null) {
  alert("here");
  
  submitFlag  = 0;
  
  
  }else{
      alert("here");

var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Department ID";
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
    
    modal.style.display = "block";
    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInfo[0].CSUFStatus[0]");
  
    submitFlag  = 1;
  }


if(submitFlag === 0){ 
  getPdf();

}



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/manual-cd048/manual-cd048-student-asst-attendance---distributed');
            jsonData.append('fileName', DepartmentId.value  + "_" + Date.now());          
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
