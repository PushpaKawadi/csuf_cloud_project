/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
 debugger;

std_682_overtime_distributed_std_682_overtime_distributed.generated_guideRootPanel_init0 = function(scope) {
 

     debugger;
    with(this) {
        with(scope) {
              //alert(StageIndicator.value);
			  /*alert('before STD Servlet unique method')
			  $.ajax({
			      type: 'GET',
			      url: window.location.origin + "/bin/fullertonProxy",
			      data: {
			  	      path: "chrsIDUpdateServlet",
			          action: "STD_682_OVERTIME_USER_LOOKUP",
			          userId: "nvadlakunta"
			      },
			      dataType: 'json',
			      success: function(myresponse) {
			          if (myresponse.length === 1) {
			              empl_Id.value = myresponse[0].EMPLID;
			              hidden_cwid.value = myresponse[0].EMPLID;
			              chrsId.value = myresponse[0].CHRS_ID;
			              hidden_chrsId.value = myresponse[0].CHRS_ID;
			              employee_last_name.value = myresponse[0].Last_Name;
			              employee_first_name.value = myresponse[0].First_Name;
			              empl_rcd.value = myresponse[0].EMPL_RCD;
			              employee_middle_name.value = myresponse[0].Middle_Name;
			              position_number.value = myresponse[0].SCOPositionNum;
			              cbid.value = myresponse[0].UNION_CD;
			              organization_unit.value = myresponse[0].CSU_UNIT;
			              dept_ID.value = myresponse[0].DEPTID;
			              ful_division.value = myresponse[0].FUL_DIVISION;
			              csu_agency.value = myresponse[0].CSU_SCO_AGENCY;
			              field_value_1.value = "EMP_TK_PRI";
			              field_value_2.value = "EMP_AP_OFF";
			          }
			      }
			  });
			  alert('after STD Servlet unique method')*/
            var gifModal = document.getElementById('gifModal');
            if (StageIndicator.value === null) {
                TimeKeeperSignaturePanel.visible = false;
                ManagerSignaturePanel.visible = false;
                ApprovingOfficialPanel.visible = false;
            } else if (StageIndicator.value == "ToTimeKeeper") {
				//alert("Inside Timekeeper="+StageIndicator.value);
                gifModal.style.display = "none";
                StudentInformationPanel.enabled = false;
                WorkingHoursInformationPanel.enabled = false;
                StudentSignaturePanel.enabled = false;
                TimeKeeperSignaturePanel.visible = true;
                ApprovingOfficialPanel.visible = false;
                ManagerSignaturePanel.visible = false;
            }
            /*else if(StageIndicator.value == "ToApprovingOfficial"){
              	gifModal.style.display = "none";
            	StudentInformationPanel.enabled = false;
            	WorkingHoursInformationPanel.enabled = false;
            	StudentSignaturePanel.enabled = false;
            	TimeKeeperSignaturePanel.visible = true;
              	TimeKeeperSignaturePanel.enabled = false;
              	ApprovingOfficialPanel.visible = true;
            	ManagerSignaturePanel.visible = false;
            }*/
            else if (StageIndicator.value == "ToManager") {
                gifModal.style.display = "none";
                StudentInformationPanel.enabled = false;
                WorkingHoursInformationPanel.enabled = false;
                StudentSignaturePanel.enabled = false;
                TimeKeeperSignaturePanel.enabled = false;
                /*ApprovingOfficialPanel.visible = true;
                ApprovingOfficialPanel.enabled = false;*/
                ManagerSignaturePanel.visible = true;
            } else if (StageIndicator.value == "ToRequestor") {
                gifModal.style.display = "none";
                StudentInformationPanel.enabled = false;
                WorkingHoursInformationPanel.enabled = false;
                if (InternationalOfficeSignatureCHK.value == 1) {
                    TimeKeeperSignaturePanel.visible = true;
                    TimeKeeperSignaturePanel.enabled = false;
                } else {
                    TimeKeeperSignaturePanel.visible = false;
                }
                if (ManagerSignatureCHK.value == 1) {
                    ManagerSignaturePanel.visible = true;
                    ManagerSignaturePanel.enabled = false;
                } else {
                    ManagerSignaturePanel.visible = false;
                }
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_guideRootPanel_init1 = function(scope) {

    with(this) {
        with(scope) {

            if (StageIndicator.value === null && formSavedStatus.value != "1") {

                $.ajax({
                    type: 'GET',
                    url: "/bin/getLoggedUserId",
                    dataType: 'json',
                    success: function(myresponse) {
                        gifModal.style.display = "block";
                        var userValue = myresponse.userId;
                        var userID = userValue;
                        hidden_userID.value = userValue;
                        workflow_initiator.value = userValue;
                        // 	hidden_employeeEmail.value = userValue +"@FULLERTON.EDU";  chrs
                        hidden_employeeEmail.value = "pushpa.kawadi@thoughtfocus.com";
                        //console.log("workflow_initiator.value= " + workflow_initiator.value);

                        $.ajax({
                            type: 'GET',
                            url: "/bin/getSTD682OvertimeDistributedDetailsWithUserIDLookUp",
                            data: {
                                userID: userID
                            },
                            dataType: 'json',

                            success: function(myresponse) {

                                var modal = document.getElementById('myModal');
                                var span = document.getElementsByClassName("close")[0];
                                var gifModal = document.getElementById('gifModal');

                                if (myresponse.length === 1) {

                                    empl_Id.value = myresponse[0].EMPLID;
                                    hidden_cwid.value = myresponse[0].EMPLID;
                                    employee_last_name.value = myresponse[0].Last_Name;
                                    employee_first_name.value = myresponse[0].First_Name;
                                    empl_rcd.value = myresponse[0].EMPL_RCD;
                                    employee_middle_name.value = myresponse[0].Middle_Name;
                                    position_number.value = myresponse[0].SCOPositionNum;
                                    cbid.value = myresponse[0].UNION_CD;
                                    organization_unit.value = myresponse[0].CSU_UNIT;
                                    dept_ID.value = myresponse[0].DEPTID;
                                    ful_division.value = myresponse[0].FUL_DIVISION;
                                    csu_agency.value = myresponse[0].CSU_SCO_AGENCY;
                                    field_value_1.value = "EMP_TK_PRI";
                                    field_value_2.value = "EMP_AP_OFF";

                                    getManager(empl_Id.value, dept_ID.value, cbid.value);
                                    getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                    /* getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/
                                    gifModal.style.display = "none";

                                } else if (myresponse.length > 1) {

                                    gifModal.style.display = "none";
                                    modal.style.display = "block";

                                    var col = [];

                                    col.push("First_Name");
                                    col.push("Last_Name");
                                    col.push("UNION_CD");
                                    col.push("CSU_UNIT");
                                    col.push("SCOPositionNum");

                                    var table = document.createElement("table");
                                    table.id = "tb";
                                    var tr = table.insertRow(-1);
                                    var headings = ["", "First_Name", "Last_Name", "CBID", "Unt", "SCO_Position_Number"];
                                    for (var j = 0; j < headings.length; j++) {
                                        var th = document.createElement("th");
                                        th.innerHTML = headings[j];
                                        tr.appendChild(th);
                                    }
                                    for (var k = 0; k < myresponse.length; k++) {
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
                                    //okButton.id = "okBtn";
                                    okButton.value = "Ok";
                                    okButton.onclick = function(event) {

                                        var n;
                                        var rButtonStatus;
                                        var rButtons = document.getElementsByClassName("rb");
                                        for (n = 0; n < rButtons.length; n++) {
                                            if (rButtons[n].checked === false) {
                                                rButtonStatus = false;
                                            } else {

                                                empl_Id.value = myresponse[n].EMPLID;
                                                hidden_cwid.value = myresponse[n].EMPLID;
                                                employee_last_name.value = myresponse[n].Last_Name;
                                                employee_first_name.value = myresponse[n].First_Name;
                                                empl_rcd.value = myresponse[n].EMPL_RCD;
                                                employee_middle_name.value = myresponse[n].Middle_Name;
                                                position_number.value = myresponse[n].SCOPositionNum;
                                                cbid.value = myresponse[n].UNION_CD;
                                                organization_unit.value = myresponse[n].CSU_UNIT;
                                                dept_ID.value = myresponse[n].DEPTID;
                                                ful_division.value = myresponse[n].FUL_DIVISION;
                                                csu_agency.value = myresponse[n].CSU_SCO_AGENCY;
                                                field_value_1.value = "EMP_TK_PRI";
                                                field_value_2.value = "EMP_AP_OFF";

                                                getManager(empl_Id.value, dept_ID.value, cbid.value);
                                                getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                                /*getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/


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
                                    modal.style.display = "none";
                                    gifModal.style.display = "none";
                                    showErrorModal("Alert!", "No matching records found");
                                    empl_Id.value = "";
                                    hidden_cwid.value = "";
                                    employee_last_name.value = "";
                                    employee_first_name.value = "";
                                    empl_rcd.value = "";
                                    employee_middle_name.value = "";
                                    position_number.value = "";
                                    cbid.value = "";
                                    organization_unit.value = "";
                                    dept_ID.value = "";
                                    ful_division.value = "";
                                    csu_agency.value = "";
                                }
                                ////////////////////////////////////////////
                                span.onclick = function() {

                                    modal.style.display = "none";
                                };

                            }
                        });
                    }
                });
            }

            function getManager(empId, deptId, union_cd) {

                manager_userID.value = "";
                manager_email.value = "";
                manager_name.value = "";

                $.ajax({
                    type: 'GET',
                    url: "/bin/getHourlyINTManager",
                    data: {
                        empId: empId,
                        union_cd: union_cd,
                        deptId: deptId
                    },
                    dataType: 'json',
                    success: function(myresponse) {

                        if (myresponse.length === 1) {
                            manager_userID.value = myresponse[0].MANAGER_USERID;
                            //  manager_email.value = myresponse[0].MANAGER_EMAIL_ID; chrs  
                            manager_email.value = "pushpa.kawadi@thoughtfocus.com";
                            manager_name.value = myresponse[0].SupervisorName;
                        }

                    }
                });

            }

            function getTimekeeperData(deptId, division, agencyUnit, fieldVal) {

                time_keeper_name.value = "";
                time_keeper_email.value = "";
                time_keeper_userID.value = "";
                $.ajax({
                    type: 'GET',
                    url: "/bin/getTimekeeperData",
                    data: {
                        deptId: deptId,
                        division: division,
                        agencyUnit: agencyUnit,
                        fieldVal: fieldVal
                    },
                    dataType: 'json',
                    success: function(myresponse) {
                        if (myresponse.length === 1) {
                            time_keeper_name.value = myresponse[0].NAME;
                            //time_keeper_email.value = myresponse[0].EMAILID;
                            time_keeper_email.value = "pushpa.kawadi@thoughtfocus.com";
                            time_keeper_userID.value = myresponse[0].USERID;
                        }

                    }
                });

            }
            if (StageIndicator.value === null) {
                $.ajax({
                    type: 'GET',
                    url: "/bin/getEvaluationFormData",
                    data: {
                        action: "EMP_DETAILS"
                    },
                    dataType: 'json',
                    success: function(myresopnse) {
                        var userValue = myresopnse[0].EMP_NAME;
                        RequestorName.value = userValue;
                        RequestorUserId.value = myresopnse[0].EMPUSERID;
                        //RequestorEmail.value = myresopnse[0].EMAILID; 
                        RequestorEmail.value = "pushpa.kawadi@thoughtfocus.com";
                        //InitiatorUserName.value = userValue;
                    },
                    error: function(error) {
                        alert("error block=" + error);
                    }
                });
            }
            /*
            function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

            		approver_userID.value = "";
                    approver_email.value = "";
                    approver_name.value = "";
            		
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getTimekeeperData",
                        data: {
                            deptId: deptId,
                          	division : division,
                            agencyUnit: agencyUnit,
            				fieldVal:fieldVal
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                            if (myresponse.length === 1) {                  
                                approver_name.value = myresponse[0].NAME;
                                approver_email.value = myresponse[0].EMAILID;
                                approver_userID.value = myresponse[0].USERID;
                            } 
                            
                        }
                    });    
            }*/
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
  
std_682_overtime_distributed_std_682_overtime_distributed.generated_guideRootPanel_init2 = function(scope) {
   // alert("init2");

    with(this) {
        with(scope) {
            debugger;
            if (StageIndicator.value === null && formSavedStatus.value != "1") {
				//alert("init2 inside StageIndicator="+StageIndicator.value);
				//alert("formSavedStatus="+formSavedStatus.value);
                $.ajax({
                    type: 'GET',
                    url: "/bin/getLoggedUserId",
                    dataType: 'json',
                    success: function(myresponse) {
                        gifModal.style.display = "block";
                        var userValue = myresponse.userId;
						//alert("myresponse.userId="+myresponse.userId);
                        var userID = userValue;
						//alert("userID="+userID);
                        hidden_userID.value = userValue;
						//alert("hidden_userID="+hidden_userID.value);
                        workflow_initiator.value = userValue;
						//alert("workflow_initiator="+workflow_initiator.value);
                        hidden_employeeEmail.value = "pushpa.kawadi@thoughtfocus.com";
                        //alert("workflow_initiator.value= " + workflow_initiator.value);
						var urrl11 = window.location.origin + "/bin/fullertonProxy";
						//alert("urrl11="+urrl11);
                      
                        $.ajax({
							url: window.location.origin + "/bin/fullertonProxy",
                            type: 'GET',
							 data: {
								path: "chrsIDUpdateServlet",
								action: "STD_682_OVERTIME_USER_LOOKUP",
								userId: "hramirez"
                            },
                            dataType: 'json',
							xhrFields: { withCredentials: true },
                            success: function(myresponse) {
								//alert("myresponse="+myresponse);

                                var modal = document.getElementById('myModal');
                                var span = document.getElementsByClassName("close")[0];
                                var gifModal = document.getElementById('gifModal');

                                if (myresponse.length === 1) {

                                //alert("init2 inside func 1");

                                    empl_Id.value = myresponse[0].EMPLID;
                                    hidden_cwid.value = myresponse[0].EMPLID;
                                    chrsId.value = myresponse[0].CHRS_ID;
                                    employee_last_name.value = myresponse[0].Last_Name;
                                    employee_first_name.value = myresponse[0].First_Name;
                                    empl_rcd.value = myresponse[0].EMPL_RCD;
                                    employee_middle_name.value = myresponse[0].Middle_Name;
                                    position_number.value = myresponse[0].SCOPositionNum;
                                    cbid.value = myresponse[0].UNION_CD;
                                    organization_unit.value = myresponse[0].CSU_UNIT;
                                    dept_ID.value = myresponse[0].DEPTID;
                                    ful_division.value = myresponse[0].FUL_DIVISION;
                                    csu_agency.value = myresponse[0].CSU_SCO_AGENCY;
                                    field_value_1.value = "EMP_TK_PRI";
                                    field_value_2.value = "EMP_AP_OFF";

                                    getManager(empl_Id.value, dept_ID.value, cbid.value);
                                    getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                    /* getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/
                                    gifModal.style.display = "none";

                                } else if (myresponse.length > 1) {

                                //alert("init2 inside func 2");


                                    gifModal.style.display = "none";
                                    modal.style.display = "block";

                                    var col = [];
                                    col.push("CHRS_ID");
                                    col.push("First_Name");
                                    col.push("Last_Name");
                                    col.push("UNION_CD");
                                    col.push("CSU_UNIT");
                                    col.push("SCOPositionNum");

                                    var table = document.createElement("table");
                                    table.id = "tb";
                                    var tr = table.insertRow(-1);
                                    var headings = ["", "EMPL ID", "First_Name", "Last_Name", "CBID", "Unt", "SCO_Position_Number"];
                                    for (var j = 0; j < headings.length; j++) {
                                        var th = document.createElement("th");
                                        th.innerHTML = headings[j];
                                        tr.appendChild(th);
                                    }
                                    for (var k = 0; k < myresponse.length; k++) {
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
                                    //okButton.id = "okBtn";
                                    okButton.value = "Ok";
                                    okButton.onclick = function(event) {

                                        var n;
                                        var rButtonStatus;
                                        var rButtons = document.getElementsByClassName("rb");
                                        for (n = 0; n < rButtons.length; n++) {
                                            if (rButtons[n].checked === false) {
                                                rButtonStatus = false;
                                            } else {

                                                empl_Id.value = myresponse[n].EMPLID;
                                                hidden_cwid.value = myresponse[n].EMPLID;
                                                chrsId.value = myresponse[n].CHRS_ID;
                                                employee_last_name.value = myresponse[n].Last_Name;
                                                employee_first_name.value = myresponse[n].First_Name;
                                                empl_rcd.value = myresponse[n].EMPL_RCD;
                                                employee_middle_name.value = myresponse[n].Middle_Name;
                                                position_number.value = myresponse[n].SCOPositionNum;
                                                cbid.value = myresponse[n].UNION_CD;
                                                organization_unit.value = myresponse[n].CSU_UNIT;
                                                dept_ID.value = myresponse[n].DEPTID;
                                                ful_division.value = myresponse[n].FUL_DIVISION;
                                                csu_agency.value = myresponse[n].CSU_SCO_AGENCY;
                                                field_value_1.value = "EMP_TK_PRI";
                                                field_value_2.value = "EMP_AP_OFF";

                                                getManager(empl_Id.value, dept_ID.value, cbid.value);
                                                getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                                /*getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/


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
                                    modal.style.display = "none";
                                    gifModal.style.display = "none";
                                    showErrorModal("Alert!", "No matching records found");
                                    empl_Id.value = "";
                                    hidden_cwid.value = "";
                                    chrsId.value = "";
                                    employee_last_name.value = "";
                                    employee_first_name.value = "";
                                    empl_rcd.value = "";
                                    employee_middle_name.value = "";
                                    position_number.value = "";
                                    cbid.value = "";
                                    organization_unit.value = "";
                                    dept_ID.value = "";
                                    ful_division.value = "";
                                    csu_agency.value = "";
                                }
                                ////////////////////////////////////////////
                                span.onclick = function() {

                                    modal.style.display = "none";
                                };

                            },
							error: function (xhr) {
							    alert(xhr.status + ": " + xhr.responseText);
							  }
                        });
                    }
                });
            }

            function getManager(empId, deptId, union_cd) {

                manager_userID.value = "";
                manager_email.value = "";
                manager_name.value = "";

                $.ajax({
                    type: 'GET',
                    url: "/bin/getHourlyINTManager",
                    data: {
                        empId: empId,
                        union_cd: union_cd,
                        deptId: deptId
                    },
                    dataType: 'json',
                    success: function(myresponse) {

                        if (myresponse.length === 1) {
                            manager_userID.value = myresponse[0].MANAGER_USERID;
                            //  manager_email.value = myresponse[0].MANAGER_EMAIL_ID; chrs  
                            manager_email.value = "pushpa.kawadi@thoughtfocus.com";
                            manager_name.value = myresponse[0].SupervisorName;
                        }

                    }
                });

            }

            function getTimekeeperData(deptId, division, agencyUnit, fieldVal) {

                time_keeper_name.value = "";
                time_keeper_email.value = "";
                time_keeper_userID.value = "";
                $.ajax({
                    type: 'GET',
                    url: "/bin/getTimekeeperData",
                    data: {
                        deptId: deptId,
                        division: division,
                        agencyUnit: agencyUnit,
                        fieldVal: fieldVal
                    },
                    dataType: 'json',
                    success: function(myresponse) {
                        if (myresponse.length === 1) {
                            time_keeper_name.value = myresponse[0].NAME;
                            //time_keeper_email.value = myresponse[0].EMAILID;
                            time_keeper_email.value = "pushpa.kawadi@thoughtfocus.com";
                            time_keeper_userID.value = myresponse[0].USERID;
                        }

                    }
                });

            }
			
			/*if (StageIndicator.value === null) {
	                $.ajax({
						url: window.location.origin + "/bin/fullertonProxy",
						type: 'GET',
	                    data: {
							path: "getEvaluationFormData",
	                        action: "EMP_DETAILS"
	                    },
	                    dataType: 'json',
	                    success: function(myresopnse) {
							alert("ok");
	                        /*var userValue = myresopnse[0].EMP_NAME;       
	                        RequestorName.value = userValue;
	                        RequestorUserId.value = myresopnse[0].EMPUSERID;
	                        //RequestorEmail.value = myresopnse[0].EMAILID; 
	                        RequestorEmail.value = "pushpa.kawadi@thoughtfocus.com";
	                        //InitiatorUserName.value = userValue;
	                    },
	                    error: function(error) {
	                        alert("error block=" + error);
	                    }
	                });
	            }*/
						
            /*if (StageIndicator.value === null) {
                $.ajax({
                    type: 'GET',
                    url: "/bin/getEvaluationFormData",
                    data: {
                        action: "EMP_DETAILS"
                    },
                    dataType: 'json',
                    success: function(myresopnse) {
                        var userValue = myresopnse[0].EMP_NAME;
                        RequestorName.value = userValue;
                        RequestorUserId.value = myresopnse[0].EMPUSERID;
                        //RequestorEmail.value = myresopnse[0].EMAILID; 
                        RequestorEmail.value = "pushpa.kawadi@thoughtfocus.com";
                        //InitiatorUserName.value = userValue;
                    },
                    error: function(error) {
                        alert("error block=" + error);
                    }
                });
            }*/
            /*
            function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

            		approver_userID.value = "";
                    approver_email.value = "";
                    approver_name.value = "";
            		
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getTimekeeperData",
                        data: {
                            deptId: deptId,
                          	division : division,
                            agencyUnit: agencyUnit,
            				fieldVal:fieldVal
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                            if (myresponse.length === 1) {                  
                                approver_name.value = myresponse[0].NAME;
                                approver_email.value = myresponse[0].EMAILID;
                                approver_userID.value = myresponse[0].USERID;
                            } 
                            
                        }
                    });    
            }*/
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_StudentInformationPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_StudentInformationPanel_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_chrsId_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {

            debugger;
            if (StageIndicator.value === null) {
                var gifModal = document.getElementById('gifModal');
                gifModal.style.display = "block";

                var userValue = this.value;
                var userId = hidden_userID.value;
                //console.log("userId= " + hidden_userID.value); 
                workflow_initiator.value = userId;
                //hidden_employeeEmail.value = userId +"@FULLERTON.EDU"; 
                hidden_employeeEmail.value = "pushpa.kawadi@thoughtfocus.com";
                debugger;
                if (hidden_cwid.value !== empl_Id.value) {

                    $.ajax({

                        type: 'GET',
                        url: '/bin/chrsIDUpdateServlet',
                        data: {
                            action: "STD_682_OVERTIME_EMPL_LOOKUP",
                            chrsId: userValue,
                            userId: userId
                        },
                        dataType: 'json',

                        success: function(myresponse) {

                            var modal = document.getElementById('myModal');
                            var span = document.getElementsByClassName("close")[0];
                            var gifModal = document.getElementById('gifModal');

                            if (myresponse.length === 1) {

                                // empl_Id.value = myresponse[0].EMPLID;
                                hidden_cwid.value = empl_Id.value;
                                employee_last_name.value = myresponse[0].Last_Name;
                                employee_first_name.value = myresponse[0].First_Name;
                                empl_rcd.value = myresponse[0].EMPL_RCD;
                                employee_middle_name.value = myresponse[0].Middle_Name;
                                position_number.value = myresponse[0].SCOPositionNum;
                                cbid.value = myresponse[0].UNION_CD;
                                organization_unit.value = myresponse[0].CSU_UNIT;
                                dept_ID.value = myresponse[0].DEPTID;
                                ful_division.value = myresponse[0].FUL_DIVISION;
                                csu_agency.value = myresponse[0].CSU_SCO_AGENCY;
                                field_value_1.value = "EMP_TK_PRI";
                                field_value_2.value = "EMP_AP_OFF";

                                getManager(empl_Id.value, dept_ID.value, cbid.value);
                                getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                /* getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/

                                gifModal.style.display = "none";

                            } else if (myresponse.length > 1) {

                                gifModal.style.display = "none";
                                modal.style.display = "block";

                                var col = [];

                                col.push("First_Name");
                                col.push("Last_Name");
                                col.push("UNION_CD");
                                col.push("CSU_UNIT");
                                col.push("SCOPositionNum");

                                var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "First_Name", "Last_Name", "CBID", "Unt", "SCO_Position_Number"];

                                for (var j = 0; j < headings.length; j++) {
                                    var th = document.createElement("th");
                                    th.innerHTML = headings[j];
                                    tr.appendChild(th);
                                }
                                for (var k = 0; k < myresponse.length; k++) {
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
                                //okButton.id = "okBtn";
                                okButton.value = "Ok";
                                okButton.onclick = function(event) {

                                    var n;
                                    var rButtonStatus;
                                    var rButtons = document.getElementsByClassName("rb");
                                    for (n = 0; n < rButtons.length; n++) {
                                        if (rButtons[n].checked === false) {
                                            rButtonStatus = false;
                                        } else {
                                            debugger;
                                            hidden_cwid.value = empl_Id.value;
                                            //empl_Id.value = hidden_cwid.value;                         		  
                                            // empl_Id.value =  myresponse[0].EMPLID;
                                            employee_last_name.value = myresponse[n].Last_Name;
                                            employee_first_name.value = myresponse[n].First_Name;
                                            empl_rcd.value = myresponse[n].EMPL_RCD;
                                            employee_middle_name.value = myresponse[n].Middle_Name;
                                            position_number.value = myresponse[n].SCOPositionNum;
                                            cbid.value = myresponse[n].UNION_CD;
                                            organization_unit.value = myresponse[n].CSU_UNIT;
                                            dept_ID.value = myresponse[n].DEPTID;
                                            ful_division.value = myresponse[n].FUL_DIVISION;
                                            csu_agency.value = myresponse[n].CSU_SCO_AGENCY;
                                            field_value_1.value = "EMP_TK_PRI";
                                            field_value_2.value = "EMP_AP_OFF";

                                            getManager(empl_Id.value, dept_ID.value, cbid.value);
                                            getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                            /*getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/

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
                                modal.style.display = "none";
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "No matching records found");
                                //empl_Id.value = "";
                                //hidden_cwid.value =  "";
                                employee_last_name.value = "";
                                employee_first_name.value = "";
                                empl_rcd.value = "";
                                employee_middle_name.value = "";
                                position_number.value = "";
                                cbid.value = "";
                                organization_unit.value = "";
                                dept_ID.value = "";
                                ful_division.value = "";
                                csu_agency.value = "";
                            }
                            ////////////////////////////////////////////
                            span.onclick = function() {

                                modal.style.display = "none";
                            };

                        }
                    });
                } else {
                    gifModal.style.display = "none";
                }

            }

            function getManager(empId, deptId, union_cd) {

                manager_userID.value = "";
                manager_email.value = "";
                manager_name.value = "";

                $.ajax({
                    type: 'GET',
                    url: "/bin/getHourlyINTManager",
                    data: {
                        empId: empId,
                        union_cd: union_cd,
                        deptId: deptId
                    },
                    dataType: 'json',
                    success: function(myresponse) {

                        if (myresponse.length === 1) {
                            manager_userID.value = myresponse[0].MANAGER_USERID;
                            //manager_email.value = myresponse[0].MANAGER_EMAIL_ID;   
                            manager_email.value = "pushpa.kawadi@thoughtfocus.com";
                            manager_name.value = myresponse[0].SupervisorName;
                        }

                    }
                });

            }

            function getTimekeeperData(deptId, division, agencyUnit, fieldVal) {

                time_keeper_name.value = "";
                time_keeper_email.value = "";
                time_keeper_userID.value = "";
                $.ajax({
                    type: 'GET',
                    url: "/bin/getTimekeeperData",
                    data: {
                        deptId: deptId,
                        division: division,
                        agencyUnit: agencyUnit,
                        fieldVal: fieldVal
                    },
                    dataType: 'json',
                    success: function(myresponse) {
                        if (myresponse.length === 1) {
                            time_keeper_name.value = myresponse[0].NAME;
                            // time_keeper_email.value = myresponse[0].EMAILID;
                            time_keeper_email.value = "pushpa.kawadi@thoughtfocus.com";
                            time_keeper_userID.value = myresponse[0].USERID;
                        }

                    }
                });

            }
            /*
            function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

            		approver_userID.value = "";
                    approver_email.value = "";
                    approver_name.value = "";
            		
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getTimekeeperData",
                        data: {
                            deptId: deptId,
                          	division : division,
                            agencyUnit: agencyUnit,
            				fieldVal:fieldVal
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                            if (myresponse.length === 1) {                  
                                approver_name.value = myresponse[0].NAME;
                                approver_email.value = myresponse[0].EMAILID;
                                approver_userID.value = myresponse[0].USERID;
                            } 
                            
                        }
                    });    
            }*/
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_empl_Id_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_empl_Id_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {

            if (StageIndicator.value === null) {
                var gifModal = document.getElementById('gifModal');
                gifModal.style.display = "block";

                var userValue = empl_Id.value;
                var userId = hidden_userID.value;
                //console.log("userId= " + hidden_userID.value); 
                workflow_initiator.value = userId;
                //hidden_employeeEmail.value = userId +"@FULLERTON.EDU"; 
                hidden_employeeEmail.value = "pushpa.kawadi@thoughtfocus.com";
                debugger;
                if (hidden_cwid.value !== empl_Id.value) {

                    $.ajax({

                        type: 'GET',
                        url: '/bin/getSTD682OvertimeDistributedDetailsWithEmployeeLookUp',
                        data: {
                            Cwid: userValue,
                            userId: userId
                        },
                        dataType: 'json',

                        success: function(myresponse) {

                            var modal = document.getElementById('myModal');
                            var span = document.getElementsByClassName("close")[0];
                            var gifModal = document.getElementById('gifModal');

                            if (myresponse.length === 1) {

                                // empl_Id.value = myresponse[0].EMPLID;
                                hidden_cwid.value = empl_Id.value;
                                employee_last_name.value = myresponse[0].Last_Name;
                                employee_first_name.value = myresponse[0].First_Name;
                                empl_rcd.value = myresponse[0].EMPL_RCD;
                                employee_middle_name.value = myresponse[0].Middle_Name;
                                position_number.value = myresponse[0].SCOPositionNum;
                                cbid.value = myresponse[0].UNION_CD;
                                organization_unit.value = myresponse[0].CSU_UNIT;
                                dept_ID.value = myresponse[0].DEPTID;
                                ful_division.value = myresponse[0].FUL_DIVISION;
                                csu_agency.value = myresponse[0].CSU_SCO_AGENCY;
                                field_value_1.value = "EMP_TK_PRI";
                                field_value_2.value = "EMP_AP_OFF";

                                getManager(empl_Id.value, dept_ID.value, cbid.value);
                                getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                /* getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/

                                gifModal.style.display = "none";

                            } else if (myresponse.length > 1) {

                                gifModal.style.display = "none";
                                modal.style.display = "block";

                                var col = [];

                                col.push("First_Name");
                                col.push("Last_Name");
                                col.push("UNION_CD");
                                col.push("CSU_UNIT");
                                col.push("SCOPositionNum");

                                var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "First_Name", "Last_Name", "CBID", "Unt", "SCO_Position_Number"];

                                for (var j = 0; j < headings.length; j++) {
                                    var th = document.createElement("th");
                                    th.innerHTML = headings[j];
                                    tr.appendChild(th);
                                }
                                for (var k = 0; k < myresponse.length; k++) {
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
                                //okButton.id = "okBtn";
                                okButton.value = "Ok";
                                okButton.onclick = function(event) {

                                    var n;
                                    var rButtonStatus;
                                    var rButtons = document.getElementsByClassName("rb");
                                    for (n = 0; n < rButtons.length; n++) {
                                        if (rButtons[n].checked === false) {
                                            rButtonStatus = false;
                                        } else {
                                            debugger;
                                            hidden_cwid.value = empl_Id.value;
                                            //empl_Id.value = hidden_cwid.value;                         		  
                                            // empl_Id.value =  myresponse[0].EMPLID;
                                            employee_last_name.value = myresponse[n].Last_Name;
                                            employee_first_name.value = myresponse[n].First_Name;
                                            empl_rcd.value = myresponse[n].EMPL_RCD;
                                            employee_middle_name.value = myresponse[n].Middle_Name;
                                            position_number.value = myresponse[n].SCOPositionNum;
                                            cbid.value = myresponse[n].UNION_CD;
                                            organization_unit.value = myresponse[n].CSU_UNIT;
                                            dept_ID.value = myresponse[n].DEPTID;
                                            ful_division.value = myresponse[n].FUL_DIVISION;
                                            csu_agency.value = myresponse[n].CSU_SCO_AGENCY;
                                            field_value_1.value = "EMP_TK_PRI";
                                            field_value_2.value = "EMP_AP_OFF";

                                            getManager(empl_Id.value, dept_ID.value, cbid.value);
                                            getTimekeeperData(dept_ID.value, ful_division.value, organization_unit.value, field_value_1.value);
                                            /*getAuthApproverData(dept_ID.value,ful_division.value,organization_unit.value,field_value_2.value);*/

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
                                modal.style.display = "none";
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "No matching records found");
                                //empl_Id.value = "";
                                //hidden_cwid.value =  "";
                                employee_last_name.value = "";
                                employee_first_name.value = "";
                                empl_rcd.value = "";
                                employee_middle_name.value = "";
                                position_number.value = "";
                                cbid.value = "";
                                organization_unit.value = "";
                                dept_ID.value = "";
                                ful_division.value = "";
                                csu_agency.value = "";
                            }
                            ////////////////////////////////////////////
                            span.onclick = function() {

                                modal.style.display = "none";
                            };

                        }
                    });
                } else {
                    gifModal.style.display = "none";
                }

            }

            function getManager(empId, deptId, union_cd) {

                manager_userID.value = "";
                manager_email.value = "";
                manager_name.value = "";

                $.ajax({
                    type: 'GET',
                    url: "/bin/getHourlyINTManager",
                    data: {
                        empId: empId,
                        union_cd: union_cd,
                        deptId: deptId
                    },
                    dataType: 'json',
                    success: function(myresponse) {

                        if (myresponse.length === 1) {
                            manager_userID.value = myresponse[0].MANAGER_USERID;
                            //manager_email.value = myresponse[0].MANAGER_EMAIL_ID;   
                            manager_email.value = "pushpa.kawadi@thoughtfocus.com";
                            manager_name.value = myresponse[0].SupervisorName;
                        }

                    }
                });

            }

            function getTimekeeperData(deptId, division, agencyUnit, fieldVal) {

                time_keeper_name.value = "";
                time_keeper_email.value = "";
                time_keeper_userID.value = "";
                $.ajax({
                    type: 'GET',
                    url: "/bin/getTimekeeperData",
                    data: {
                        deptId: deptId,
                        division: division,
                        agencyUnit: agencyUnit,
                        fieldVal: fieldVal
                    },
                    dataType: 'json',
                    success: function(myresponse) {
                        if (myresponse.length === 1) {
                            time_keeper_name.value = myresponse[0].NAME;
                            // time_keeper_email.value = myresponse[0].EMAILID;
                            time_keeper_email.value = "pushpa.kawadi@thoughtfocus.com";
                            time_keeper_userID.value = myresponse[0].USERID;
                        }

                    }
                });

            }
            /*
            function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

            		approver_userID.value = "";
                    approver_email.value = "";
                    approver_name.value = "";
            		
                    $.ajax({
                        type: 'GET',
                        url: "/bin/getTimekeeperData",
                        data: {
                            deptId: deptId,
                          	division : division,
                            agencyUnit: agencyUnit,
            				fieldVal:fieldVal
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                            if (myresponse.length === 1) {                  
                                approver_name.value = myresponse[0].NAME;
                                approver_email.value = myresponse[0].EMAILID;
                                approver_userID.value = myresponse[0].USERID;
                            } 
                            
                        }
                    });    
            }*/
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_employee_last_name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_employee_last_name_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_employee_first_name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_employee_first_name_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_ApprovingOfficialSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_ApprovingOfficialSignatureCHK_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
                //RecordsSignature.value = LogUser.value;
                approving_official_signature.enabled = false;

                if (approving_official_date.value === null) {
                    var dateString = new Date().toLocaleString("en-US", {
                        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                    }).replace(/[^ -~]/g, ' ');
                    var dateObject = new Date(dateString);
                    var curyear = dateObject.getFullYear();
                    var curyearMonth = dateObject.getMonth() + 1;
                    var curyearDay = dateObject.getDate();
                    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                    approving_official_date.value = d;
                    approving_official_signature.enabled = false;
                } else {
                    approving_official_date.enabled = false;
                    approving_official_signature.enabled = false;
                }
            } else {
                approving_official_signature.value = null;
                approving_official_date.value = null;
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_ApprovingOfficialSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_ApprovingOfficialSignatureCHK_valueCommit1 = function(scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToApprovingOfficial") {
                if (this.value == "1") {

                    var fullNameForSignature;

                    $.ajax({

                        type: 'GET',

                        url: "/bin/getLoggedUserId",

                        dataType: 'json',

                        success: function(myresponse) {

                            approving_official_signature.value = myresponse.userId;
                        }
                    });
                }
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_approving_official_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_approving_official_signature_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_ManagerSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_ManagerSignatureCHK_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
                //RecordsSignature.value = LogUser.value;
                manager_signature.enabled = false;

                if (manager_date.value === null) {
                    var dateString = new Date().toLocaleString("en-US", {
                        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                    }).replace(/[^ -~]/g, ' ');
                    var dateObject = new Date(dateString);
                    var curyear = dateObject.getFullYear();
                    //var curyearMonth = dateObject.getMonth() + 1;
                    //var curyearDay = dateObject.getDate();
					var curyearMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
                    var curyearDay = String(dateObject.getDate()).padStart(2, '0');	
                    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
					console.log(d);
                    manager_date.value = d;
                    manager_signature.enabled = false;
                } else {
                    manager_date.enabled = false;
                    manager_signature.enabled = false;
                }
            } else {
                manager_signature.value = null;
                manager_date.value = null;
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_ManagerSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
  debugger;
std_682_overtime_distributed_std_682_overtime_distributed.generated_ManagerSignatureCHK_valueCommit1 = function(scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToManager") {
                if (this.value == "1") {

                    var fullNameForSignature;

                    $.ajax({

                        type: 'GET',

                        url: "/bin/getLoggedUserId",

                        dataType: 'json',

                        success: function(myresponse) {

                            manager_signature.value = myresponse.userId;
                        }
                    });
                }
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_manager_approval_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_manager_approval_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
                HiddenApprovalStatus.value = "Yes";
            } else {
                HiddenApprovalStatus.value = "No";
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_manager_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_manager_signature_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_manager_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_manager_date_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_InternationalOfficeSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_InternationalOfficeSignatureCHK_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
				//alert("timekeeper here");
                //RecordsSignature.value = LogUser.value;
                time_keeper_signature.enabled = false;

                if (time_keeper_date.value === null) {
                    var dateString = new Date().toLocaleString("en-US", {
                        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                    }).replace(/[^ -~]/g, ' ');
					//alert("dateString = "+dateString);
                    var dateObject = new Date(dateString);
                    var curyear = dateObject.getFullYear();
                    //var curyearMonth = dateObject.getMonth() + 1;
                    //var curyearDay = dateObject.getDate();
					
					var curyearMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
                    var curyearDay = String(dateObject.getDate()).padStart(2, '0');	
					
                    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
					console.log(d);
                    time_keeper_date.value = d;
                    time_keeper_signature.enabled = false;
                } else {
                    time_keeper_date.enabled = false;
                    time_keeper_signature.enabled = false;
                }
            } else {
                time_keeper_signature.value = null;
                time_keeper_date.value = null;
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_InternationalOfficeSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_InternationalOfficeSignatureCHK_valueCommit1 = function(scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToTimeKeeper") {
                if (this.value == "1") {

                    var fullNameForSignature;

                    $.ajax({

                        type: 'GET',

                        url: "/bin/getLoggedUserId",

                        dataType: 'json',

                        success: function(myresponse) {

                            time_keeper_signature.value = myresponse.userId;
                        }
                    });
                }
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_time_keeper_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_time_keeper_signature_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_time_keeper_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_time_keeper_date_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_StudentSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_StudentSignatureCHK_valueCommit0 = function(scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
                student_signature.value = employee_first_name.value + " " + employee_last_name.value;
                student_signature.enabled = false;
                if (student_date.value === null) {
                    var dateString = new Date().toLocaleString("en-US", {
                        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                    }).replace(/[^ -~]/g, ' ');
                    var dateObject = new Date(dateString);
                    var curyear = dateObject.getFullYear();
                    //var curyearMonth = dateObject.getMonth() + 1;
                    //var curyearDay = dateObject.getDate();
					var curyearMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
                    var curyearDay = String(dateObject.getDate()).padStart(2, '0');	
                    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
					console.log(d);
                    student_date.value = d;
                    student_signature.enabled = false;
                } else {
                    student_date.enabled = false;
                    student_signature.enabled = false;
                }
            } else {
                student_date.value = null;
                student_signature.value = null;
            }
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_StudentSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_StudentSignatureCHK_valueCommit1 = function(scope) {
    with(this) {
        with(scope) {

            if (StageIndicator.value === null) {
                if (this.value == "1") {

                    var fullNameForSignature;

                    $.ajax({

                        type: 'GET',

                        url: "/bin/getLoggedUserId",

                        dataType: 'json',

                        success: function(myresponse) {

                            student_signature.value = myresponse.userId;
                        }
                    });
                }
            }

        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_student_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_student_signature_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_student_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_student_date_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_HiddenFieldPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_HiddenFieldPanel_init0 = function(scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_GeneratePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_GeneratePDF_click0 = function(scope) {
    with(this) {
        with(scope) {

            if (employee_first_name.value === null || employee_last_name.value === null || empl_Id.value === null) {
                showErrorModal("Alert !", "Please fill all the required fields before generating a pdf");
            } else if (pay_period_month.value === null || pay_period_year.value === null) {
                showErrorModal("Alert !", "Please month and year to generating a pdf");
                guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].STDOvertimeDistributedPanel[0].WorkingHoursInformationPanel[0].pay_period_month[0]");
            } else {
                getPdf();
            }



            function getPdf() {
                console.log("in view pdf");
                window.guideBridge.getDataXML({
                    success: function(result) {
                        var jsonData = new FormData();
                        jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
                        jsonData.append('formPath', '/content/forms/af/std-682-overtime-distributed/std-682-overtime-distributed');
                        jsonData.append('fileName', employee_first_name.value + "_" + employee_last_name.value + "(" + empl_Id.value + ")" + "_" + Date.now());
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
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_saveguidedraft1603342460406_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_saveguidedraft1603342460406_click0 = function(scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = employee_first_name.value + ", " + employee_last_name.value + " " + empl_Id.value;

            formSavedStatus.value = "1";

            handleDraftSave(this);


        }
    }
}
/**
 * @function std_682_overtime_distributed_std_682_overtime_distributed.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
std_682_overtime_distributed_std_682_overtime_distributed.generated_submit1589890835750_click0 = function(scope) {
    //alert("submit");
    with(this) {
        with(scope) {
    //alert("submit inside func");

            aftiaDescCWID.value = employee_first_name.value + ", " + employee_last_name.value + " " + empl_Id.value;

            EmailSubject.value = "Request for STD 682 Overtime Distributed - " + employee_first_name.value + " " + employee_last_name.value + " (" + empl_Id.value + ")" + " (" + chrsId.value + ")";



            /*var testEmail = "nvadlakunta@fullerton.edu";
            approver_email.value = testEmail;
            time_keeper_email.value = testEmail;
            manager_email.value = testEmail;
            hidden_employeeEmail.value = testEmail;
            RequestorEmail.value = testEmail;*/

            var testEmail = "pushpa.kawadi@thoughtfocus.com";
            approver_email.value = testEmail;
            time_keeper_email.value = testEmail;
            manager_email.value = testEmail;
            hidden_employeeEmail.value = testEmail;
            RequestorEmail.value = testEmail;
    		

            if (pay_period_month.value === null || pay_period_year.value === null) {
                showErrorModal("Alert !", "Please enter month and year");
                guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].STDOvertimeDistributedPanel[0].WorkingHoursInformationPanel[0].pay_period_month[0]");
            } else if ((date1.value === null) || (from1.value === null) || (to1.value === null) || (total_hours_authorized1.value === null) || (compensation_timeOff1.value === null) || (extra_hours_worked1.value === null)) {
                guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].STDOvertimeDistributedPanel[0].WorkingHoursInformationPanel[0].table1602245143688[0].Row1[0].date1[0]");
                showErrorModal("Alert !", "Please enter atleast one entry in the table");
            } else {
                guideBridge.submit();
            }
        }
    }
}
