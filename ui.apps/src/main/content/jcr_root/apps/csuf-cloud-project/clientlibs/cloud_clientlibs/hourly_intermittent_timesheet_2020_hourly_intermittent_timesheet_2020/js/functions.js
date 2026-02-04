/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            Empl_RCD.enabled = false;
Empl_ID.enabled = false;
Last_Name.enabled = false;
First_Name.enabled = false;
Middle_Initial.enabled = false;
SSN.enabled = false;
Unit.enabled = false;
Class.enabled = false;
Dept_ID.enabled = false;
Department_Name.enabled = false;
Extension.enabled = false;
TotalWorkHours.enabled = false;
TotalSickHours.enabled = false;
TotalVacHours.enabled = false;
Day1.enabled = false;
  Date1.enabled = false;
  Day2.enabled = false;
  Date2.enabled = false;
  Day3.enabled = false;
  Date3.enabled = false;
  Day4.enabled = false;
  Date4.enabled = false;
  Day5.enabled = false;
  Date5.enabled = false;
  Day6.enabled = false;
  Date6.enabled = false;
  Day7.enabled = false;
  Date7.enabled = false;
  Day8.enabled = false;
  Date8.enabled = false;
  Day9.enabled = false;
  Date9.enabled = false;
  Day10.enabled = false;
  Date10.enabled = false;
  Day11.enabled = false;
  Date11.enabled = false;
  Day12.enabled = false;
  Date12.enabled = false;
  Day13.enabled = false;
  Date13.enabled = false;
  Day14.enabled = false;
  Date14.enabled = false;
  Day15.enabled = false;
  Date15.enabled = false;
  Day16.enabled = false;
  Date16.enabled = false;
  Day17.enabled = false;
  Date17.enabled = false;
  Day18.enabled = false;
  Date18.enabled = false;
  Day19.enabled = false;
  Date19.enabled = false;
  Day20.enabled = false;
  Date20.enabled = false;
  Day21.enabled = false;
  Date21.enabled = false;
  Day22.enabled = false;
  Date22.enabled = false;
  Day23.enabled = false;
  Date23.enabled = false;
  Day24.enabled = false;
  Date24.enabled = false;
  Day25.enabled = false;
  Date25.enabled = false;
  Day26.enabled = false;
  Date26.enabled = false;
  Day27.enabled = false;
  Date27.enabled = false;
  Day28.enabled = false;
  Date28.enabled = false;
  Day29.enabled = false;
  Date29.enabled = false;
  Day30.enabled = false;
  Date30.enabled = false;
  Day31.enabled = false;
  Date31.enabled = false;
  Day32.enabled = false;
  Date32.enabled = false;
  Day33.enabled = false;
  Date33.enabled = false;
if(StageIndicator.value === null){
  EmpSignSection.enabled = true;
  EmpSignSection.visible = true;
  ApproverSignSection.visible = false;
  ManagerSignSection.visible = false;
  PayrollSignSection.visible = false;
}
if(StageIndicator.value == "ToTimekeeper"){
  basicInfo.enabled = false;
  TimesheetSection.enabled = false;
  EmpSignSection.enabled = false;
  EmpSignSection.visible = true;
  ApproverSignSection.visible = true;
  if(SupSign.value !== null){
     ManagerSignSection.visible = true;
     ManagerSignSection.enabled = false;
  }else{
  ManagerSignSection.visible = false;
  }
  PayrollSignSection.visible = false;
}
if(StageIndicator.value == "ToEmployee"){
  basicInfo.enabled = false;
  TimesheetSection.enabled = true;
  EmpSignSection.enabled = true;
  EmpSignSection.visible = true;
  ApproverSignSection.visible = true;
  ApproverSignSection.enabled = false;
  if(SupSign.value !== null){
     ManagerSignSection.visible = true;
     ManagerSignSection.enabled = false;
  }else{
  ManagerSignSection.visible = false;
  }
  PayrollSignSection.visible = false;
}
if(StageIndicator.value == "ToManager"){
  basicInfo.enabled = false;
  TimesheetSection.enabled = false;
  EmpSignSection.enabled = false;
  EmpSignSection.visible = true;
  ApproverSignSection.visible = true;
  ApproverSignSection.enabled = false;
  ManagerSignSection.visible = true;
  ManagerSignSection.enabled = true;
  PayrollSignSection.visible = false;
}
if(StageIndicator.value == "ToPayroll"){
  
  SSN.value = SSN1.value;
  
  basicInfo.enabled = false;
  TimesheetSection.enabled = false;
  EmpSignSection.enabled = false;
  EmpSignSection.visible = true;
  ApproverSignSection.visible = true;
  ApproverSignSection.enabled = false;
  ManagerSignSection.visible = true;
  ManagerSignSection.enabled = false;
  PayrollSignSection.visible = true;
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value !== "1"){
$.ajax({
    type: 'GET',
    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
        gifModal.style.display = "block";
        var userValue = myresopnse.userId;
        var userID = userValue;
     	workflow_initiator.value = userValue;      	
     
        $.ajax({
            type: 'GET',
            url: "/bin/getHourlyINTUser",
            data: {
                userId: userID
            },
            dataType: 'json',

            success: function(myresopnse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

                    Empl_RCD.value = myresopnse[0].EMPL_RCD;
                    Last_Name.value = myresopnse[0].LAST_NAME;
                    First_Name.value = myresopnse[0].FIRST_NAME;
                    Middle_Initial.value = myresopnse[0].MIDDLE_NAME;
                    SSN.value = myresopnse[0].LAST4SSN;                  
                    var numbers = SSN.value;
                    SSN.value = "XXXX-XX-"+numbers.substr(5, 4);
                    SSN1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);                    
                    Unit.value = myresopnse[0].CSU_UNIT;
                  	EmpUnionCD.value = myresopnse[0].UNION_CD;
                    Dept_ID.value = myresopnse[0].DEPTID;
                    Department_Name.value = myresopnse[0].DEPTNAME;
                    Extension.value = myresopnse[0].Extenstion;
                    Class.value = myresopnse[0].Jobcode;
                    EmpIDInitiator.value = myresopnse[0].EMPLID;
					Empl_ID.value = myresopnse[0].EMPLID;
                  	EmpUserId.value = userID;
                    EmpEmailId.value = myresopnse[0].EMP_EMAIL_ID;
                    CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                  	Ful_Division.value = myresopnse[0].FUL_DIVISION;
                  	getManager(Empl_ID.value,Dept_ID.value,EmpUnionCD.value);
                    getTimekeeperData(Dept_ID.value,Ful_Division.value,Unit.value,Field_Value_1.value);
                    //getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                    gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    col.push("FIRST_NAME");
                    col.push("LAST_NAME");
                    col.push("DEPTNAME");
                    col.push("EMPL_RCD");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First Name", "Last Name", "Department Name", "Emp RCD"];
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

                                Empl_RCD.value = myresopnse[n].EMPL_RCD;
                                Last_Name.value = myresopnse[n].LAST_NAME;
                                First_Name.value = myresopnse[n].FIRST_NAME;
                                Middle_Initial.value = myresopnse[n].MIDDLE_NAME;
                                SSN.value = myresopnse[n].LAST4SSN;
                    			var numbers = SSN.value;
                                SSN.value = "XXXX-XX-"+numbers.substr(5, 4);
                    			SSN1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                                Unit.value = myresopnse[n].CSU_UNIT;
                              	EmpUnionCD.value = myresopnse[n].UNION_CD;
                                Dept_ID.value = myresopnse[n].DEPTID;
                                Department_Name.value = myresopnse[n].DEPTNAME;
                                Extension.value = myresopnse[n].Extenstion;
                                Class.value = myresopnse[n].Jobcode;
                              	EmpIDInitiator.value = myresopnse[n].EMPLID;
                              	Empl_ID.value = myresopnse[n].EMPLID;
                              	EmpUserId.value = userID;
                    			EmpEmailId.value = myresopnse[n].EMP_EMAIL_ID;
                                CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                  				Ful_Division.value = myresopnse[n].FUL_DIVISION;
                              	getManager(Empl_ID.value,Dept_ID.value,EmpUnionCD.value);
                                getTimekeeperData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_1.value);
                    			//getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
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
function getManager(empId,deptId,union_cd){

		AuthApproverUserId.value = "";
        AuthApproverEmailId.value = "";
        AuthApproverName.value = "";
        ManagerEmailId.value = "";
        $.ajax({
            type: 'GET',
            url: "/bin/getHourlyINTManager",
            data: {
                empId: empId,
              	union_cd : union_cd,
                deptId: deptId
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                  
                  
                   AuthApproverUserId.value = myresponse[0].MANAGER_USERID;
        		   AuthApproverEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
        		   AuthApproverName.value = myresponse[0].SupervisorName;
				   ManagerEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
                } 
                
            }
        });
    
}

function getTimekeeperData(deptId,division,agencyUnit,fieldVal){

		TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
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
                  
                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                    TimekeeperUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
   
}
/*
function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

		AuthApproverUserId.value = "";
        AuthApproverEmailId.value = "";
        AuthApproverName.value = "";
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
                  
                    AuthApproverName.value = myresponse[0].NAME;
                    AuthApproverEmailId.value = myresponse[0].EMAILID;
                    AuthApproverUserId.value = myresponse[0].USERID;

                } 
                
            }
        });    
}*/
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value !== "1"){
$.ajax({
    type: 'GET',
    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
        gifModal.style.display = "block";
        var userValue = myresopnse.userId;
        var userID = userValue;
      //  var userID = "jmccoy";
     	workflow_initiator.value = userValue;      	
     
        $.ajax({
            type: 'GET',
            url: "/bin/chrsIDUpdateServlet",
            data: {
                userId: userID,
                action: "HOURLY_INTER_USERID"
            },
            dataType: 'json',

            success: function(myresopnse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

                    Empl_RCD.value = myresopnse[0].EMPL_RCD;
                    Last_Name.value = myresopnse[0].LAST_NAME;
                    First_Name.value = myresopnse[0].FIRST_NAME;
                    Middle_Initial.value = myresopnse[0].MIDDLE_NAME;
                    SSN.value = myresopnse[0].LAST4SSN;                  
                    var numbers = SSN.value;
                    SSN.value = "XXXX-XX-"+numbers.substr(5, 4);
                    SSN1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);                    
                    Unit.value = myresopnse[0].CSU_UNIT;
                  	EmpUnionCD.value = myresopnse[0].UNION_CD;
                    Dept_ID.value = myresopnse[0].DEPTID;
                    Department_Name.value = myresopnse[0].DEPTNAME;
                    Extension.value = myresopnse[0].Extenstion;
                    Class.value = myresopnse[0].Jobcode;
                    EmpIDInitiator.value = myresopnse[0].EMPLID;
					Empl_ID.value = myresopnse[0].EMPLID;
                  	EmpUserId.value = userID;
                    EmpEmailId.value = myresopnse[0].EMP_EMAIL_ID;
                  //  EmpEmailId.value = "yjayaram@fullerton.edu";
                    CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                  	Ful_Division.value = myresopnse[0].FUL_DIVISION;
                    CHRSID.value = myresopnse[0].CSU_CHRS_ID;
                    CHRSID_Initiator.value = myresopnse[0].CSU_CHRS_ID;
                  	getManager(CHRSID.value,Dept_ID.value,EmpUnionCD.value);
                    getPayrollTimekeeperData(Dept_ID.value,Ful_Division.value,Field_Value_1.value);
                    //getTimekeeperData(Dept_ID.value,Ful_Division.value,Unit.value,Field_Value_1.value);
                    //getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                    gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    col.push("FIRST_NAME");
                    col.push("LAST_NAME");
                    col.push("DEPTNAME");
                    col.push("EMPL_RCD");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First Name", "Last Name", "Department Name", "Emp RCD"];
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

                                Empl_RCD.value = myresopnse[n].EMPL_RCD;
                                Last_Name.value = myresopnse[n].LAST_NAME;
                                First_Name.value = myresopnse[n].FIRST_NAME;
                                Middle_Initial.value = myresopnse[n].MIDDLE_NAME;
                                SSN.value = myresopnse[n].LAST4SSN;
                    			var numbers = SSN.value;
                                SSN.value = "XXXX-XX-"+numbers.substr(5, 4);
                    			SSN1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                                Unit.value = myresopnse[n].CSU_UNIT;
                              	EmpUnionCD.value = myresopnse[n].UNION_CD;
                                Dept_ID.value = myresopnse[n].DEPTID;
                                Department_Name.value = myresopnse[n].DEPTNAME;
                                Extension.value = myresopnse[n].Extenstion;
                                Class.value = myresopnse[n].Jobcode;
                              	EmpIDInitiator.value = myresopnse[n].EMPLID;
                              	Empl_ID.value = myresopnse[n].EMPLID;
                              	EmpUserId.value = userID;
                    		    EmpEmailId.value = myresopnse[n].EMP_EMAIL_ID;
                              //  EmpEmailId.value = "yjayaram@fullerton.edu";
                                CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                  				Ful_Division.value = myresopnse[n].FUL_DIVISION;
                                CHRSID.value = myresopnse[n].CSU_CHRS_ID;
                                CHRSID_Initiator.value = myresopnse[n].CSU_CHRS_ID;
                              	getManager(CHRSID.value,Dept_ID.value,EmpUnionCD.value);
                                getPayrollTimekeeperData(Dept_ID.value,Ful_Division.value,Field_Value_1.value);
                                //getTimekeeperData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_1.value);
                    			//getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
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
function getManager(chrsId,deptId,union_cd){

		AuthApproverUserId.value = "";
        AuthApproverEmailId.value = "";
        AuthApproverName.value = "";
        ManagerEmailId.value = "";
        $.ajax({
            type: 'GET',
            url: "/bin/chrsIDUpdateServlet",
            data: {
                action: "HOURLY_INTER_MANAGER",
                chrsId: chrsId,
              	union_cd : union_cd,
                deptId: deptId
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                  
                  
                   AuthApproverUserId.value = myresponse[0].MANAGER_USERID;
        		   AuthApproverEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
                  // AuthApproverEmailId.value = "yjayaram@fullerton.edu";
        		   AuthApproverName.value = myresponse[0].SupervisorName;
				   ManagerEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
                 //  ManagerEmailId.value = "yjayaram@fullerton.edu";
                } 
                
            }
        });
    
}

function getPayrollTimekeeperData(deptId,division,fieldVal){

		TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
        $.ajax({
            type: 'GET',
            url: "/bin/getPayrollTimekeeperDetails",
            data: {
                deptId: deptId,
              	division : division,
				fieldVal:fieldVal
            },
            dataType: 'json',
            success: function(myresponse) {


                if (myresponse.length === 1) {
                  
                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                  //  TimekeeperEmailId.value = "yjayaram@fullerton.edu";
                    TimekeeperUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
   
}

function getTimekeeperData(deptId,division,agencyUnit,fieldVal){

		TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
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
                  
                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                  //  TimekeeperEmailId.value = "yjayaram@fullerton.edu";
                    TimekeeperUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
   
}
/*
function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

		AuthApproverUserId.value = "";
        AuthApproverEmailId.value = "";
        AuthApproverName.value = "";
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
                  
                    AuthApproverName.value = myresponse[0].NAME;
                    AuthApproverEmailId.value = myresponse[0].EMAILID;
                    AuthApproverUserId.value = myresponse[0].USERID;

                } 
                
            }
        });    
}*/
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_MonthSelected_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_MonthSelected_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
  monthSelected = MonthSelected.value;
  var resultArray = [];
  if(YearSelected.value == "2024"){
  resultArray = getSelectedMonthDates(monthSelected,YearSelected.value);  
  }
  if(YearSelected.value == "2023"){
  resultArray = getSelectedMonthDatesForLastYear(monthSelected,YearSelected.value);  
  }
  
  Day1.value = (resultArray[0][0]).trim();  
  Date1.value = (resultArray[0][1]).trim();
  Day2.value = (resultArray[1][0]).trim();
  Date2.value = (resultArray[1][1]).trim();
  Day3.value = (resultArray[2][0]).trim();
  Date3.value = (resultArray[2][1]).trim();
  Day4.value = (resultArray[3][0]).trim();
  Date4.value = (resultArray[3][1]).trim();
  Day5.value = (resultArray[4][0]).trim();
  Date5.value = (resultArray[4][1]).trim();
  Day6.value = (resultArray[5][0]).trim();
  Date6.value = (resultArray[5][1]).trim();
  Day7.value = (resultArray[6][0]).trim();
  Date7.value = (resultArray[6][1]).trim();
  Day8.value = (resultArray[7][0]).trim();
  Date8.value = (resultArray[7][1]).trim();
  Day9.value = (resultArray[8][0]).trim();
  Date9.value = (resultArray[8][1]).trim();
  Day10.value = (resultArray[9][0]).trim();
  Date10.value = (resultArray[9][1]).trim();
  Day11.value = (resultArray[10][0]).trim();
  Date11.value = (resultArray[10][1]).trim();
  Day12.value = (resultArray[11][0]).trim();
  Date12.value = (resultArray[11][1]).trim();
  Day13.value = (resultArray[12][0]).trim();
  Date13.value = (resultArray[12][1]).trim();
  Day14.value = (resultArray[13][0]).trim();
  Date14.value = (resultArray[13][1]).trim();
  Day15.value = (resultArray[14][0]).trim();
  Date15.value = (resultArray[14][1]).trim();
  Day16.value = (resultArray[15][0]).trim();
  Date16.value = (resultArray[15][1]).trim();
  Day17.value = (resultArray[16][0]).trim();
  Date17.value = (resultArray[16][1]).trim();
  Day18.value = (resultArray[17][0]).trim();
  Date18.value = (resultArray[17][1]).trim();
  Day19.value = (resultArray[18][0]).trim();
  Date19.value = (resultArray[18][1]).trim();
  Day20.value = (resultArray[19][0]).trim();
  Date20.value = (resultArray[19][1]).trim();
  Day21.value = (resultArray[20][0]).trim();
  Date21.value = (resultArray[20][1]).trim();
  Day22.value = (resultArray[21][0]).trim();
  Date22.value = (resultArray[21][1]).trim();
  Day23.value = (resultArray[22][0]).trim();
  Date23.value = (resultArray[22][1]).trim();
  Day24.value = (resultArray[23][0]).trim();
  Date24.value = (resultArray[23][1]).trim();
  Day25.value = (resultArray[24][0]).trim();
  Date25.value = (resultArray[24][1]).trim();
  Day26.value = (resultArray[25][0]).trim();
  Date26.value = (resultArray[25][1]).trim();
  Day27.value = (resultArray[26][0]).trim();
  Date27.value = (resultArray[26][1]).trim();
  Day28.value = (resultArray[27][0]).trim();
  Date28.value = (resultArray[27][1]).trim();
  Day29.value = (resultArray[28][0]).trim();
  Date29.value = (resultArray[28][1]).trim();
 // Day30.value = (resultArray[29][0]).trim();
  //Date30.value = (resultArray[29][1]).trim();
   if((resultArray[29][0] !== "" && resultArray[29][0] !== undefined)&&(resultArray[29][1] !== "" && resultArray[29][1] !== undefined)){
    Day30.value = (resultArray[29][0]).trim();
    Date30.value = (resultArray[29][1]).trim();
    Row30.enabled = true;
  }else{
    Row30.enabled = false; 
    Date30.value = "";
    Day30.value ="";
  }
  if((resultArray[30][0] !== "" && resultArray[30][0] !== undefined)&&(resultArray[30][1] !== "" && resultArray[30][1] !== undefined)){
    Day31.value = (resultArray[30][0]).trim();
    Date31.value = (resultArray[30][1]).trim();
    Row31.enabled = true;
  }else{
    Row31.enabled = false; 
    Date31.value = "";
    Day31.value ="";
  }
  
  if((resultArray[31][0] !== "" && resultArray[31][0] !== undefined) && (resultArray[31][1] !== "" && resultArray[31][1] !== undefined)){
  Day32.value = (resultArray[31][0]).trim();
    Date32.value = (resultArray[31][1]).trim();
     Row32.enabled = true;
  }else{
    Row32.enabled = false;
    Day32.value = "";
    Date32.value = "";
  }
  
  if((resultArray[32][0] !== "" && resultArray[32][0] !== undefined) && (resultArray[32][1] !== "" && resultArray[32][1] !== undefined)){
     Row33.enabled = true;
  Day33.value = (resultArray[32][0]).trim();
     Date33.value = (resultArray[32][1]).trim();
  }else{
    Row33.enabled = false;
    Day33.value = "";
    Date33.value = "";
  }
  
}

        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_YearSelected_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_YearSelected_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
//this.enabled = false;
var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
var dateObject = new Date(dateString);
var curyear = dateObject.getFullYear();
//this.value = "2021";
this.value = curyear;
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_YearSelected_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_YearSelected_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (this.value !== null && MonthSelected.value !== null) {
  monthSelected = MonthSelected.value;
  var resultArray = [];
  if(YearSelected.value == "2024"){
  resultArray = getSelectedMonthDates(monthSelected,YearSelected.value);  
  }
  if(YearSelected.value == "2023"){
  resultArray = getSelectedMonthDatesForLastYear(monthSelected,YearSelected.value);  
  }
  debugger;
  Day1.value = (resultArray[0][0]).trim();  
  Date1.value = (resultArray[0][1]).trim();
  Day2.value = (resultArray[1][0]).trim();
  Date2.value = (resultArray[1][1]).trim();
  Day3.value = (resultArray[2][0]).trim();
  Date3.value = (resultArray[2][1]).trim();
  Day4.value = (resultArray[3][0]).trim();
  Date4.value = (resultArray[3][1]).trim();
  Day5.value = (resultArray[4][0]).trim();
  Date5.value = (resultArray[4][1]).trim();
  Day6.value = (resultArray[5][0]).trim();
  Date6.value = (resultArray[5][1]).trim();
  Day7.value = (resultArray[6][0]).trim();
  Date7.value = (resultArray[6][1]).trim();
  Day8.value = (resultArray[7][0]).trim();
  Date8.value = (resultArray[7][1]).trim();
  Day9.value = (resultArray[8][0]).trim();
  Date9.value = (resultArray[8][1]).trim();
  Day10.value = (resultArray[9][0]).trim();
  Date10.value = (resultArray[9][1]).trim();
  Day11.value = (resultArray[10][0]).trim();
  Date11.value = (resultArray[10][1]).trim();
  Day12.value = (resultArray[11][0]).trim();
  Date12.value = (resultArray[11][1]).trim();
  Day13.value = (resultArray[12][0]).trim();
  Date13.value = (resultArray[12][1]).trim();
  Day14.value = (resultArray[13][0]).trim();
  Date14.value = (resultArray[13][1]).trim();
  Day15.value = (resultArray[14][0]).trim();
  Date15.value = (resultArray[14][1]).trim();
  Day16.value = (resultArray[15][0]).trim();
  Date16.value = (resultArray[15][1]).trim();
  Day17.value = (resultArray[16][0]).trim();
  Date17.value = (resultArray[16][1]).trim();
  Day18.value = (resultArray[17][0]).trim();
  Date18.value = (resultArray[17][1]).trim();
  Day19.value = (resultArray[18][0]).trim();
  Date19.value = (resultArray[18][1]).trim();
  Day20.value = (resultArray[19][0]).trim();
  Date20.value = (resultArray[19][1]).trim();
  Day21.value = (resultArray[20][0]).trim();
  Date21.value = (resultArray[20][1]).trim();
  Day22.value = (resultArray[21][0]).trim();
  Date22.value = (resultArray[21][1]).trim();
  Day23.value = (resultArray[22][0]).trim();
  Date23.value = (resultArray[22][1]).trim();
  Day24.value = (resultArray[23][0]).trim();
  Date24.value = (resultArray[23][1]).trim();
  Day25.value = (resultArray[24][0]).trim();
  Date25.value = (resultArray[24][1]).trim();
  Day26.value = (resultArray[25][0]).trim();
  Date26.value = (resultArray[25][1]).trim();
  Day27.value = (resultArray[26][0]).trim();
  Date27.value = (resultArray[26][1]).trim();
  Day28.value = (resultArray[27][0]).trim();
  Date28.value = (resultArray[27][1]).trim();
  Day29.value = (resultArray[28][0]).trim();
  Date29.value = (resultArray[28][1]).trim();
 // Day30.value = (resultArray[29][0]).trim();
  //Date30.value = (resultArray[29][1]).trim();
   if((resultArray[29][0] !== "" && resultArray[29][0] !== undefined)&&(resultArray[29][1] !== "" && resultArray[29][1] !== undefined)){
    Day30.value = (resultArray[29][0]).trim();
    Date30.value = (resultArray[29][1]).trim();
    Row30.enabled = true;
  }else{
    Row30.enabled = false; 
    Date30.value = "";
    Day30.value ="";
  }
  if((resultArray[30][0] !== "" && resultArray[30][0] !== undefined)&&(resultArray[30][1] !== "" && resultArray[30][1] !== undefined)){
    Day31.value = (resultArray[30][0]).trim();
    Date31.value = (resultArray[30][1]).trim();
    Row31.enabled = true;
  }else{
    Row31.enabled = false; 
    Date31.value = "";
    Day31.value ="";
  }
  
  if((resultArray[31][0] !== "" && resultArray[31][0] !== undefined) && (resultArray[31][1] !== "" && resultArray[31][1] !== undefined)){
  Day32.value = (resultArray[31][0]).trim();
    Date32.value = (resultArray[31][1]).trim();
     Row32.enabled = true;
  }else{
    Row32.enabled = false;
    Day32.value = "";
    Date32.value = "";
  }
  
  if((resultArray[32][0] !== "" && resultArray[32][0] !== undefined) && (resultArray[32][1] !== "" && resultArray[32][1] !== undefined)){
     Row33.enabled = true;
  Day33.value = (resultArray[32][0]).trim();
     Date33.value = (resultArray[32][1]).trim();
  }else{
    Row33.enabled = false;
    Day33.value = "";
    Date33.value = "";
  }
  
}

        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_CHRSID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_CHRSID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && this.value === null) {
  this.mandatory=true;
}

        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_CHRSID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_CHRSID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null && (CHRSID_Initiator.value !== this.value) && StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            var userID = userValue;
            //var userID = "jmccoy";
            workflow_initiator.value = userValue;
            // userID = "jluzzi";

            var chrsId = CHRSID.value;
            
                $.ajax({
                    type: 'GET',
                    url: "/bin/chrsIDUpdateServlet",
                    data: {
                        action: "HOURLY_INTER_CHRSID",
                        chrsId: chrsId,
                        userId: userID
                    },
                    dataType: 'json',

                    success: function(myresopnse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];
                        var gifModal = document.getElementById('gifModal');
                        if (myresopnse.length === 1) {

                            Empl_RCD.value = myresopnse[0].EMPL_RCD;
                            Last_Name.value = myresopnse[0].LAST_NAME;
                            First_Name.value = myresopnse[0].FIRST_NAME;
                            Middle_Initial.value = myresopnse[0].MIDDLE_NAME;
                            SSN.value = myresopnse[0].LAST4SSN;
                            var numbers = SSN.value;
                            SSN.value = "XXXX-XX-" + numbers.substr(5, 4);
                            SSN1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                            Unit.value = myresopnse[0].CSU_UNIT;
                            EmpUnionCD.value = myresopnse[0].UNION_CD;
                            Dept_ID.value = myresopnse[0].DEPTID;
                            Department_Name.value = myresopnse[0].DEPTNAME;
                            Extension.value = myresopnse[0].Extenstion;
                            Class.value = myresopnse[0].Jobcode;
                            EmpUserId.value = myresopnse[0].EMP_USERID;
                            EmpEmailId.value = myresopnse[0].EMP_EMAIL_ID;
                          //  EmpEmailId.value = "yjayaram@fullerton.edu";
                            CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                            Ful_Division.value = myresopnse[0].FUL_DIVISION;
                            CHRSID.value = myresopnse[0].CSU_CHRS_ID;
                            Empl_ID.value = myresopnse[0].EMPLID;
                            getManager(CHRSID.value,Dept_ID.value,EmpUnionCD.value);
                            getPayrollTimekeeperData(Dept_ID.value, Ful_Division.value, Field_Value_1.value);
                            //getTimekeeperData(Dept_ID.value, Ful_Division.value, Unit.value, Field_Value_1.value);
                            //getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                            gifModal.style.display = "none";

                        } else if (myresopnse.length > 1) {

                            gifModal.style.display = "none";
                            modal.style.display = "block";

                            var col = [];

                            col.push("FIRST_NAME");
                            col.push("LAST_NAME");
                            col.push("DEPTNAME");
                            col.push("EMPL_RCD");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "First Name", "Last Name", "Department Name", "Emp RCD"];
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

                                        Empl_RCD.value = myresopnse[n].EMPL_RCD;
                                        Last_Name.value = myresopnse[n].LAST_NAME;
                                        First_Name.value = myresopnse[n].FIRST_NAME;
                                        Middle_Initial.value = myresopnse[n].MIDDLE_NAME;
                                        SSN.value = myresopnse[0].LAST4SSN;
                                        var numbers = SSN.value;
                                        SSN.value = "XXXX-XX-" + numbers.substr(5, 4);
                                        SSN1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                                        Unit.value = myresopnse[n].CSU_UNIT;
                                        EmpUnionCD.value = myresopnse[n].UNION_CD;
                                        Dept_ID.value = myresopnse[n].DEPTID;
                                        Department_Name.value = myresopnse[n].DEPTNAME;
                                        Extension.value = myresopnse[n].Extenstion;
                                        Class.value = myresopnse[n].Jobcode;
                                        EmpUserId.value = myresopnse[n].EMP_USERID;
                                      	EmpEmailId.value = myresopnse[n].EMP_EMAIL_ID;
                                      //  EmpEmailId.value = "yjayaram@fullerton.edu";
                                        CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                                        Ful_Division.value = myresopnse[n].FUL_DIVISION;
                                        CHRSID.value = myresopnse[n].CSU_CHRS_ID;
                                        Empl_ID.value = myresopnse[n].EMPLID;
                                        getManager(CHRSID.value,Dept_ID.value,EmpUnionCD.value);
                                        getPayrollTimekeeperData(Dept_ID.value, Ful_Division.value, Field_Value_1.value);
                                        //getTimekeeperData(Dept_ID.value, Ful_Division.value, CSU_Agency_Unit.value, Field_Value_1.value);
                                        //getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
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
                            Empl_RCD.value = "";
                            Empl_ID.value = "";
                            Last_Name.value = "";
                            First_Name.value = "";
                            Middle_Initial.value = "";
                            SSN.value = "";
                            Unit.value = "";
                            Dept_ID.value = "";
                            Department_Name.value = "";
                            Extension.value = "";
                            Class.value = "";
                            EmpEmailId.value = "";
                            gifModal.style.display = "none";
                            showErrorModal("Alert!", "No matching records found");
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

function getManager(chrsId, deptId, union_cd) {

    AuthApproverUserId.value = "";
    AuthApproverEmailId.value = "";
    AuthApproverName.value = "";
    ManagerEmailId.value = "";
    $.ajax({
        type: 'GET',
        url: "/bin/chrsIDUpdateServlet",
        data: {
            action: "HOURLY_INTER_MANAGER",
            chrsId: chrsId,
            union_cd: union_cd,
            deptId: deptId
        },
        dataType: 'json',
        success: function(myresponse) {

            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];

            if (myresponse.length === 1) {
                AuthApproverUserId.value = myresponse[0].MANAGER_USERID;
                AuthApproverEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
              //  AuthApproverEmailId.value = "yjayaram@fullerton.edu";
                AuthApproverName.value = myresponse[0].SupervisorName;
                ManagerEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
              //  ManagerEmailId.value =  "yjayaram@fullerton.edu";
            }

        }
    });

}

function getPayrollTimekeeperData(deptId, division, fieldVal) {
    if (this.value !== null) {
        TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
        $.ajax({
            type: 'GET',
            url: "/bin/getPayrollTimekeeperDetails",
            data: {
                deptId: deptId,
                division: division,
                fieldVal: fieldVal
            },
            dataType: 'json',
            success: function(myresponse) {


                if (myresponse.length === 1) {

                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                    //TimekeeperEmailId.value = "yjayaram@fullerton.edu";
                    TimekeeperUserId.value = myresponse[0].USERID;

                }

            }
        });
    }
}

function getTimekeeperData(deptId, division, agencyUnit, fieldVal) {
    if (this.value !== null) {
        TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
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

                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                    //TimekeeperEmailId.value = "yjayaram@fullerton.edu";
                    TimekeeperUserId.value = myresponse[0].USERID;

                }

            }
        });
    }
}

function getAuthApproverData(deptId, division, agencyUnit, fieldVal) {

    AuthApproverUserId.value = "";
    AuthApproverEmailId.value = "";
    AuthApproverName.value = "";
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

                AuthApproverName.value = myresponse[0].NAME;
                AuthApproverEmailId.value = myresponse[0].EMAILID;
              //  AuthApproverEmailId.value = "yjayaram@fullerton.edu";
                AuthApproverUserId.value = myresponse[0].USERID;

            }

        }
    });

}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_Empl_ID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_Empl_ID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null && (EmpIDInitiator.value !== this.value) && StageIndicator.value === null){
$.ajax({
    type: 'GET',
    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
        gifModal.style.display = "block";
        var userValue = myresopnse.userId;
        var userID = userValue;
      	workflow_initiator.value = userValue;
       // userID = "jluzzi";
 
      var empId = Empl_ID.value;
            var pattern = /^8\d{8}$/;
            var result = pattern.test(empId);
            if (result !== true) {
                	Empl_RCD.value = "";
                    Last_Name.value = "";
                    First_Name.value = "";
                    Middle_Initial.value = "";
                    SSN.value = "";
                    Unit.value = "";
                    Dept_ID.value = "";
                    Department_Name.value = "";
                    Extension.value = "";
                    Class.value = "";
              		gifModal.style.display = "none";
                	showErrorModal("Alert!", "Please enter a valid Employee ID");
              

            } else {
        $.ajax({
            type: 'GET',
            url: "/bin/getHourlyINTEmp",
            data: {
                empId : empId,
                userId: userID
            },
            dataType: 'json',

            success: function(myresopnse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

                    Empl_RCD.value = myresopnse[0].EMPL_RCD;
                    Last_Name.value = myresopnse[0].LAST_NAME;
                    First_Name.value = myresopnse[0].FIRST_NAME;
                    Middle_Initial.value = myresopnse[0].MIDDLE_NAME;
                    SSN.value = myresopnse[0].LAST4SSN;
                    var numbers = SSN.value;
                  	SSN.value = "XXXX-XX-"+numbers.substr(5, 4);
                    SSN1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                    Unit.value = myresopnse[0].CSU_UNIT;
                  	EmpUnionCD.value = myresopnse[0].UNION_CD;
                    Dept_ID.value = myresopnse[0].DEPTID;
                    Department_Name.value = myresopnse[0].DEPTNAME;
                    Extension.value = myresopnse[0].Extenstion;
                    Class.value = myresopnse[0].Jobcode;
					EmpUserId.value = myresopnse[0].EMP_USERID;
                    EmpEmailId.value = myresopnse[0].EMP_EMAIL_ID;
                    CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                  	Ful_Division.value = myresopnse[0].FUL_DIVISION;
                  	getManager(Empl_ID.value,Dept_ID.value,EmpUnionCD.value);
                    getTimekeeperData(Dept_ID.value,Ful_Division.value,Unit.value,Field_Value_1.value);
                    //getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                  	gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    col.push("FIRST_NAME");
                    col.push("LAST_NAME");
                    col.push("DEPTNAME");
                    col.push("EMPL_RCD");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First Name", "Last Name", "Department Name", "Emp RCD"];
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

                                Empl_RCD.value = myresopnse[n].EMPL_RCD;
                                Last_Name.value = myresopnse[n].LAST_NAME;
                                First_Name.value = myresopnse[n].FIRST_NAME;
                                Middle_Initial.value = myresopnse[n].MIDDLE_NAME;
                                SSN.value = myresopnse[0].LAST4SSN;
                    			var numbers = SSN.value;
                              	SSN.value = "XXXX-XX-"+numbers.substr(5, 4);
                    			SSN1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                                Unit.value = myresopnse[n].CSU_UNIT;
                              	EmpUnionCD.value = myresopnse[n].UNION_CD;
                                Dept_ID.value = myresopnse[n].DEPTID;
                                Department_Name.value = myresopnse[n].DEPTNAME;
                                Extension.value = myresopnse[n].Extenstion;
                                Class.value = myresopnse[n].Jobcode;
                              	EmpUserId.value = myresopnse[n].EMP_USERID;
                    			EmpEmailId.value = myresopnse[n].EMP_EMAIL_ID;
                                CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                  				Ful_Division.value = myresopnse[n].FUL_DIVISION;
                              	getManager(Empl_ID.value,Dept_ID.value,EmpUnionCD.value);
                              	getTimekeeperData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_1.value);
                                //getAuthApproverData(Dept_ID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
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
                        Empl_RCD.value = "";
                        Last_Name.value = "";
                        First_Name.value = "";
                        Middle_Initial.value = "";
                        SSN.value = "";
                        Unit.value = "";
                        Dept_ID.value = "";
                        Department_Name.value = "";
                        Extension.value = "";
                        Class.value = "";
                  		EmpEmailId.value = "";
                  		gifModal.style.display = "none";
                    	showErrorModal("Alert!", "No matching records found");
                }
            
                ////////////////////////////////////////////
                span.onclick = function() {

                    modal.style.display = "none";
                };
            
            }
        });
    }
    }
});
  
}
function getManager(empId,deptId,union_cd){

		AuthApproverUserId.value = "";
        AuthApproverEmailId.value = "";
        AuthApproverName.value = "";
          ManagerEmailId.value = "";
        $.ajax({
            type: 'GET',
            url: "/bin/getHourlyINTManager",
            data: {
                empId: empId,
              	union_cd : union_cd,
                deptId: deptId
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {                                   
                   AuthApproverUserId.value = myresponse[0].MANAGER_USERID;
        		   AuthApproverEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
        		   AuthApproverName.value = myresponse[0].SupervisorName;
				   ManagerEmailId.value = myresponse[0].MANAGER_EMAIL_ID;
                } 
                
            }
        });
    
}
function getTimekeeperData(deptId,division,agencyUnit,fieldVal){
if (this.value !== null) {
		TimekeeperUserId.value = "";
        TimekeeperEmailId.value = "";
        TimekeeperName.value = "";
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
                  
                    TimekeeperName.value = myresponse[0].NAME;
                    TimekeeperEmailId.value = myresponse[0].EMAILID;
                    TimekeeperUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
    }
}
function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

		AuthApproverUserId.value = "";
        AuthApproverEmailId.value = "";
        AuthApproverName.value = "";
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
                  
                    AuthApproverName.value = myresponse[0].NAME;
                    AuthApproverEmailId.value = myresponse[0].EMAILID;
                    AuthApproverUserId.value = myresponse[0].USERID;

                } 
                
            }
        });
    
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_SSN1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_SSN1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
SSN.value = this.value;
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_Day30_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_Day30_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === null || this.value === undefined){
  this.value = "";
  date31.value = "";
  Row31.enabled = false;
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        DateEmpSign.value = d;

        DateEmpSign.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    EmpSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        EmpSign.enabled = false;
        
    
} else {
    EmpSign.value = "";
    DateEmpSign.value = "";
   
}
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_EmpSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_EmpSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_DateEmpSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_DateEmpSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_TimekeeperCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_TimekeeperCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToTimekeeper"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        DateTimekeeperSign.value = d;

        DateTimekeeperSign.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    TimekeeperSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        TimekeeperSign.enabled = false;
        
    
} else {
    TimekeeperSign.value = "";
    DateTimekeeperSign.value = "";
   
}
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_TimekeeperSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_TimekeeperSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_DateTimekeeperSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_DateTimekeeperSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_SupervisorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_SupervisorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToManager"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        DateSupSign.value = d;

        DateSupSign.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    SupSign.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        SupSign.enabled = false;
        
    
} else {
    SupSign.value = "";
    DateSupSign.value = "";
   
}
}
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_SupSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_SupSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_DateSupSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_DateSupSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_generatePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_generatePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(Empl_ID.value !== null && MonthSelected.value !== null && Dept_ID.value !== null){
 getPdf();
}else{
  showErrorModal("Alert!","Please fill all the required fields to generate PDF");
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/hourly-intermittent-timesheet-2020/hourly-intermittent-timesheet-2020');
            jsonData.append('fileName', First_Name.value + "_" + Last_Name.value + "(" + SSN.value + ")" + "_" + Date.now());          
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
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_saveguidedraft1594880823890_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_saveguidedraft1594880823890_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
aftiaDescCWID.value = Empl_ID.value +" " + First_Name.value +" "+Last_Name.value;
handleDraftSave(this);


        }
	}
}
/**
 * @function hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_submit1594880817645_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
hourly_intermittent_timesheet_2020_hourly_intermittent_timesheet_2020.generated_submit1594880817645_click0 = function (scope) {
    with(this) {
        with(scope) {
            emailSubject.value = "Request for Hourly INT Timesheet (2021) - "+Last_Name.value + ", "+First_Name.value + "("+Empl_ID.value+" "+CHRSID.value+")";

/*
//var testEmail = "ajeet.chhonkar@thoughtfocus.com";
//var testEmail = "ram.singh@thoughtfocus.com";
var testEmail = "yjayaram@fullerton.edu";

EmpEmailId.value = testEmail;
ManagerEmailId.value = testEmail;
TimekeeperEmailId.value = testEmail;
AuthApproverEmailId.value = testEmail;
*/

InitiatedDate.value  =  new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
aftiaDescCWID.value = Empl_ID.value +" " + First_Name.value +" "+Last_Name.value;
Initiator.value = "Initiator";
guideBridge.submit();


        }
	}
}
