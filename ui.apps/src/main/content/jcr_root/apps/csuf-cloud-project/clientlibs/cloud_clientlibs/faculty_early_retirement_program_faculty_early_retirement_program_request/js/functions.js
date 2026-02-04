/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  ParticipationDetails.enabled =true;
  DeptCooPanel.visible = true;
  FacultySignPanel.visible = false;
  DeptChairSignPanel.visible = false;
  DeanSignPanel.visible = false;
  AVPSignPanel.visible = false;
  HRSSignPanel.visible = false;
}

if(StageIndicator.value == "ToFaculty"){
  ParticipationDetails.enabled =false;
  //SupDocPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = true;
  DeptChairSignPanel.visible = false;
  DeanSignPanel.visible = false;
  AVPSignPanel.visible = false;
  HRSSignPanel.visible = false;
}
if(StageIndicator.value == "ToChair"){
  ParticipationDetails.enabled =false;
 // SupDocPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = true;
  FacultySignPanel.enabled = false;
  DeptChairSignPanel.visible = true;
  DeanSignPanel.visible = false;
  AVPSignPanel.visible = false;
  HRSSignPanel.visible = false;
}
if(StageIndicator.value == "ToDean"){
  ParticipationDetails.enabled =false;
 // SupDocPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = true;
  FacultySignPanel.enabled = false;
  DeptChairSignPanel.visible = true;
  DeptChairSignPanel.enabled = false;
  DeanSignPanel.visible = true;
  AVPSignPanel.visible = false;
  HRSSignPanel.visible = false;
}
if(StageIndicator.value == "ToVP"){
  ParticipationDetails.enabled =false;
 // SupDocPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = true;
  FacultySignPanel.enabled = false;
  DeptChairSignPanel.visible = true;
  DeptChairSignPanel.enabled = false;
  DeanSignPanel.visible = true;
  DeanSignPanel.enabled = false;
  AVPSignPanel.visible = true;
  if(AHRCB.value !== null){
  HRSSignPanel.visible = false;
  HRSSignPanel.enabled = false;
  }else{
  HRSSignPanel.visible = false; 
  }
}
if(StageIndicator.value == "ToHR" || StageIndicator.value == "ToHR2"){
  ParticipationDetails.enabled =false;
 // SupDocPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = true;
  FacultySignPanel.enabled = false;
  DeptChairSignPanel.visible = true;
  DeptChairSignPanel.enabled = false;
  DeanSignPanel.visible = true;
  DeanSignPanel.enabled = false;
  if(AVPCB.value !== null){
  AVPSignPanel.visible = true;
  AVPSignPanel.enabled = false;
    HRSSignPanel.visible = true;
    HRSSignPanel.enabled = true;
  }else{
  AVPSignPanel.visible = false; 
    HRSSignPanel.visible = false;
  }    
}
if(StageIndicator.value == "ToRequestor"){
  ParticipationDetails.enabled =true;
  //SupDocPanel.visible = false;
  DeptCooPanel.visible = false;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = false;
  FacultySignPanel.enabled = false;
  DeptChairSignPanel.visible = false;
  DeptChairSignPanel.enabled = false;
  DeanSignPanel.visible = false;
  DeanSignPanel.enabled = false;
  AVPSignPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = true;
  HRSSignPanel.visible = true;
  AHRSign.visible = false;
  AHRDate.visible = false;
  AHRCB.visible = false;
  AHRComments.visible = true;
  AHRComments.enabled = false;
  /*if(AHRCB.value !== null){
  HRSSignPanel.visible = false;
  HRSSignPanel.enabled = false;
  }else{
  HRSSignPanel.visible = false; 
  }*/
}
if(StageIndicator.value == "ToHR1"){
  debugger;
  ParticipationDetails.enabled =false;
  //SupDocPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  FacultySignPanel.visible = false;
  FacultySignPanel.enabled = false;
  DeptChairSignPanel.visible = false;
  DeptChairSignPanel.enabled = false;
  DeanSignPanel.visible = false;
  DeanSignPanel.enabled = false;
  AVPSignPanel.visible = false;  
  HRSSignPanel.enabled = false; 
  HRSSignPanel.visible = false; 
  AHRComments.visible = false;
  AHRSign.visible = false;
  AHRDate.visible = false;
  AHRCB.visible = false;
  
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value !== null) {
    this.enabled = false;
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            var userValue = myresponse.userId;
            InitiatorUserId.value = userValue;
            workflow_initiator.value = userValue;
            var cwidValue = CWID.value;
            var pattern = /^8\d{8}$/;
            var result = pattern.test(cwidValue);
            if (result !== true) {
                FacultyFirstName.value = null;
                FacultyLastName.value = null;
                Department.value = null;
                DeptId.value = null;
                PrintName.value = null;
                FacultyUserId.value = null;
                FacultyEmail.value = null;

                showErrorModal("Alert!", "Please enter a valid Employee ID");

            } else {
                //if (CWID.value !== null) {

                    var gifModal = document.getElementById('gifModal');
                    gifModal.style.display = "block";
                    var cwidVal = CWID.value;

                    $.ajax({
                        type: 'GET',
                        url: "/bin/getFERPData",
                        data: {
                            cwid: cwidVal,
                            action: "FERP_CWID_DATA"
                        },
                        dataType: 'json',
                        success: function(myresponse) {

                            var modal = document.getElementById('myModal');
                            var span = document.getElementsByClassName("close")[0];

                            if (myresponse.length === 1) {
                                FacultyFirstName.value = myresponse[0].FIRST_NAME;
                                FacultyLastName.value = myresponse[0].LAST_NAME;
                                if( myresponse[0].EMP_NAME === "Administrator"){
                                  PrintName.value = myresponse[0].EMP_NAME;
                                  FacultyUserId.value = myresponse[0].EMP_USERID;
                                }else{
                                  PrintName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                                  FacultyUserId.value = myresponse[0].EMP_USERID;
                                }
                                DeptId.value = myresponse[0].DEPTID;
                                Department.value = myresponse[0].DEPTNAME;
                                FacultyUserId.value = myresponse[0].EMP_USERID;
                                FacultyEmail.value = myresponse[0].EMAILID;
                              college.value = myresponse[0].FUL_COLLEGE;
                             if(myresponse[0].UNION_CD == "M80"|| myresponse[0].UNION_CD == "M98"){
                                  MPPCB.visible = true;
                                }else{
                                   MPPCB.visible = false;
                                  MPPCB.value = "";
                                }
							  DeptId_Hidden.value = myresponse[0].DEPTID;
                              DeptName_hidden.value = myresponse[0].DEPTNAME;
                              College_hidden.value = myresponse[0].FUL_COLLEGE;
                              Union_Cd.value = myresponse[0].UNION_CD;
                              if( myresponse[0].FUL_COLLEGE !== null){
                                getDeanData(college.value);
                              }
                                gifModal.style.display = "none";
                                modal.style.display = "none";

                            } else if (myresponse.length > 1) {                                
                                gifModal.style.display = "none";
                                modal.style.display = "block";

                                var col = [];
                                col.push("EMPLID");
                                col.push("LAST_NAME");
                                col.push("FIRST_NAME");
                                col.push("DEPTID");
                                col.push("DEPTNAME");
                                col.push("UNION_CD");
                                var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name", "CBID"];
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

                                okButton.value = "OK";
                                okButton.onclick = function(event) {

                                    var n;
                                    var rButtonStatus;

                                    var rButtons = document.getElementsByClassName("rb");
                                    for (n = 0; n < rButtons.length; n++) {
                                        if (rButtons[n].checked === false) {
                                            rButtonStatus = false;
                                        } else {
                                            FacultyFirstName.value = myresponse[n].FIRST_NAME;
                                            FacultyLastName.value = myresponse[n].LAST_NAME;
                                            if(FacultyFirstName.value === undefined &&  FacultyLastName.value === undefined){
                                  			PrintName.value = myresponse[n].EMP_NAME;
                                            FacultyUserId.value = myresponse[n].EMP_USERID;
                                			}else{
                                			PrintName.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;
                                            FacultyUserId.value = myresponse[n].EMP_USERID;
                                			}
                                            DeptId.value = myresponse[n].DEPTID;
                                            Department.value = myresponse[n].DEPTNAME;
                                            
                                            FacultyEmail.value = myresponse[n].EMAILID;
                                          college.value = myresponse[n].FUL_COLLEGE;
                             if(myresponse[n].UNION_CD == "M80"|| myresponse[n].UNION_CD == "M98"){
                                  MPPCB.visible = true;
                                }else{
                                   MPPCB.visible = false;
                                  MPPCB.value = "";
                                }
							  DeptId_Hidden.value = myresponse[n].DEPTID;
                              DeptName_hidden.value = myresponse[n].DEPTNAME;
                              College_hidden.value = myresponse[n].FUL_COLLEGE;
                              Union_Cd.value = myresponse[n].UNION_CD;
                              if( myresponse[n].FUL_COLLEGE !== null){
                                getDeanData(college.value);
                              }
                                            rButtonStatus = true;
                                            break;
                                        }
                                    }
                                    if (rButtonStatus === false) {
                                        showErrorModal("Alert!", "Please select the department");
                                        modal.style.display = "block";
                                    } else {
                                        modal.style.display = "none";
                                    }
                                };
                                footerModal.appendChild(okButton);
                            } else {
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "No matching records found");
                                FacultyFirstName.value = null;
                                FacultyLastName.value = null;
                                Department.value = null;
                                DeptId.value = null;
                                PrintName.value = null;
                                FacultyUserId.value = null;
                                FacultyEmail.value = null;

                            }
                            ////////////////////////////////////////////
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
                                    showErrorModal("Alert!", "Please select the department");

                                    modal.style.display = "block";
                                } else {
                                    showErrorModal("Alert!", "Please select the department");

                                    modal.style.display = "block";
                                }

                            };

                        }
                    });
                }
           // }


        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}
function getDeanData(college){
   $.ajax({
                        type: 'GET',
                        url: "/bin/getPreRetirementData",
                        data: {
                            fulCollege: college,
                            action: "PR_DEAN_DATA"
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                          DeanUserId.value = myresponse[0].EMP_USERID;
                          DeanName.value = myresponse[0].EMPNAME;
                          DeanEmail.value = myresponse[0].EMP_EMAIL;
                           DeanEmail.value = "yjayaram@fullerton.edu";
                        }
   });
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_PrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_PrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_MPPCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_MPPCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToRequestor" || StageIndicator.value === null)
{if(Union_Cd.value == "M80" || Union_Cd.value == "M98"){
  this.visible = true;
}else{
  this.visible = false;
}
  if(this.value === null){
  this.visible = false;
  MPPDeptPanel.visible = false;
}else{
  if(this.value == 1){
    this.visible = true;
    MPPDeptPanel.visible = true;
  }
}
}else{
  MPPDeptPanel.visible = false;
  if(Union_Cd.value == "M80" || Union_Cd.value == "M98"){
  this.visible = true;
}else{
  this.visible = false;
}
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_MPPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_MPPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  debugger;
if(this.value != 1){
  MPPDeptPanel.visible = false;
  SearchDeptId.value = "";
  SearchDeptName.value = "";
  SearchDept.value = "";
  if(DeptId_Hidden.value !== null){
  DeptId.value = DeptId_Hidden.value;
  Department.value = DeptName_hidden.value;
  college.value = College_hidden.value;
  }
}else{  
    MPPDeptPanel.visible = true;
}
}else{
  
   MPPDeptPanel.visible = false;
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SearchDept_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SearchDept_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null || StageIndicator.value == "ToRequestor") && this.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getPreRetirementData",
    data: {
        action: "AHR_SEARCH_DEPT",
        searchInput: this.value
    },
    dataType: 'json',
    success: function(deptResultSet) {
        if (deptResultSet.length !== 0) {
            var deptIdResult = [];
            var deptNameResult = [];
            SearchDeptId.value = "";
            SearchDeptName.value = "";
           // SearchDeptId.items = deptIdResult;
           // SearchDeptName.items = deptNameResult;
            for (var i = 0; i < deptResultSet.length; i++) {

                var idItem = deptResultSet[i].DEPTID;

                var nameItem = deptResultSet[i].DEPTNAME;

                deptIdResult.push(idItem);
                deptNameResult.push(nameItem);
            }
            SearchDeptId.items = deptIdResult;
            SearchDeptName.items = deptNameResult;
            DeptResult.value = JSON.stringify(deptResultSet);
        } else {
            showErrorModal("Alert!", "No matching records found");
        }
    }
});
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SearchDeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SearchDeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  debugger;
var departmentParsedArray = [];
departmentParsedArray = JSON.parse(DeptResult.value);
var dept = this.value;
for(var s= 0 ; s < departmentParsedArray.length; s++){  
		if(departmentParsedArray[s].DEPTID == dept){
          DeptId.value = dept;
          Department.value = departmentParsedArray[s].DEPTNAME;
          SearchDeptName.value = departmentParsedArray[s].DEPTNAME;
          college.value = departmentParsedArray[s].FUL_COLLEGE;
        }		
	}
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SearchDeptName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SearchDeptName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null ||StageIndicator.value == "ToRequestor"){
var departmentNameParsedArray = [];
departmentNameParsedArray = JSON.parse(DeptResult.value);
var deptName = this.value;
for(var s= 0 ; s < departmentNameParsedArray.length; s++){  
		if((departmentNameParsedArray[s].DEPTNAME).toLowerCase() == deptName.toLowerCase()){
          Department.value = deptName;
          DeptId.value = departmentNameParsedArray[s].DEPTID;
          SearchDeptId.value = departmentNameParsedArray[s].DEPTID;
          college.value = departmentParsedArray[s].FUL_COLLEGE;
        }		
	}
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FERPRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FERPRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  Begin_Participation_Panel.enabled = false;
  Change_Participation_Panel.enabled = false;
  ReduceParticipationPanel.enabled = false;
  EndParticipationPanel.enabled = false;
}debugger;
if(StageIndicator.value === "ToRequestor"){
  if(this.value == "1"){
    Begin_Participation_Panel.enabled = true;  
  }else{
    Begin_Participation_Panel.enabled = false;
  }
  if(this.value == "2"){
  Change_Participation_Panel.enabled = true;
  }else{
    Change_Participation_Panel.enabled = false;
  }
  if(this.value == "3"){
  ReduceParticipationPanel.enabled = true;
  }else{
    ReduceParticipationPanel.enabled = false;
  }
  if(this.value == "5"){
  EndParticipationPanel.enabled = true;
  }else{
    EndParticipationPanel.enabled = false;
  }
   if(this.value == "4"){
  ReduceParticipationPanel.enabled = true;
  Change_Participation_Panel.enabled = true;
  }else{
     if(this.value == "3"){
  ReduceParticipationPanel.enabled = true;
  }else{
    ReduceParticipationPanel.enabled = false;
  }
     if(this.value == "2"){
  Change_Participation_Panel.enabled = true;
  }else{
    Change_Participation_Panel.enabled = false;
  }
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FERPRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FERPRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor" ){
  if(this.value == "1"){
    Begin_Participation_Panel.enabled = true;
  Change_Participation_Panel.enabled = false;
  ReduceParticipationPanel.enabled = false;
  EndParticipationPanel.enabled = false;
    
    BeginParticipationCB.mandatory = true;
    SickLeaveRB.mandatory = true;
    BeginRetirementDate.mandatory = true;
    BeginEffAcadYear.mandatory = true;
    ChangeFromParticipationCB.mandatory = false;
    ChangeToParticipationCB.mandatory = false;
    ChangeEffAcadYear.mandatory = false;
     FromFTERB.mandatory = false;
    ToFTEValue.mandatory = false;
    TOCB.mandatory = false;
     EndParticipationRB.mandatory = false;
    EndPArticipationYear.mandatory = false;
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
   EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  
  }
   if(this.value == "2"){
    Begin_Participation_Panel.enabled = false;
  Change_Participation_Panel.enabled = true;
  ReduceParticipationPanel.enabled = false;
  EndParticipationPanel.enabled = false;
    ChangeFromParticipationCB.mandatory = true;
    ChangeToParticipationCB.mandatory = true;
    ChangeEffAcadYear.mandatory = true;
    BeginParticipationCB.mandatory = false;
    SickLeaveRB.mandatory = false;
    BeginRetirementDate.mandatory = false;
    BeginEffAcadYear.mandatory = false;
      FromFTERB.mandatory = false;
    ToFTEValue.mandatory = false;
    TOCB.mandatory = false;
      EndParticipationRB.mandatory = false;
     EndPArticipationYear.mandatory = false;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
   EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  
  }
   if(this.value == "3"){
    Begin_Participation_Panel.enabled = false;
  Change_Participation_Panel.enabled = false;
  ReduceParticipationPanel.enabled = true;
  EndParticipationPanel.enabled = false;
     ChangeFromParticipationCB.mandatory = false;
    ChangeToParticipationCB.mandatory = false;
    ChangeEffAcadYear.mandatory = false;
    BeginParticipationCB.mandatory = false;
    SickLeaveRB.mandatory = false;
    BeginRetirementDate.mandatory = false;
    BeginEffAcadYear.mandatory = false;
     EndParticipationRB.mandatory = false;
     EndPArticipationYear.mandatory = false;
    FromFTERB.mandatory = true;
    ToFTEValue.mandatory = true;
    TOCB.mandatory = true;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
   EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
 
  }
   if(this.value == "4"){
    Begin_Participation_Panel.enabled = false;
  Change_Participation_Panel.enabled = true;
  ReduceParticipationPanel.enabled = true;
  EndParticipationPanel.enabled = false;
     ChangeFromParticipationCB.mandatory = true;
    ChangeToParticipationCB.mandatory = true;
    ChangeEffAcadYear.mandatory = true;
    BeginParticipationCB.mandatory = false;
    SickLeaveRB.mandatory = false;
    BeginRetirementDate.mandatory = false;
    BeginEffAcadYear.mandatory = false;
     EndParticipationRB.mandatory = false;
     EndPArticipationYear.mandatory = false;
    FromFTERB.mandatory = true;
    ToFTEValue.mandatory = true;
    TOCB.mandatory = true;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";    
   EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
 
  }
  if(this.value == "5"){
    Begin_Participation_Panel.enabled = false;
  Change_Participation_Panel.enabled = false;
  ReduceParticipationPanel.enabled = false;
  EndParticipationPanel.enabled = true;
    ChangeFromParticipationCB.mandatory = false;
    ChangeToParticipationCB.mandatory = false;
    ChangeEffAcadYear.mandatory = false;
    BeginParticipationCB.mandatory = false;
    SickLeaveRB.mandatory = false;
    BeginRetirementDate.mandatory = false;
    BeginEffAcadYear.mandatory = false;
    FromFTERB.mandatory = false;
    ToFTEValue.mandatory = false;
    TOCB.mandatory = false;
    EndParticipationRB.mandatory = true;
    EndPArticipationYear.mandatory = true;
     BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
     FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
    
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_BeginParticipationCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_BeginParticipationCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    SickLeaveRB.mandatory = true;
    BeginRetirementDate.mandatory = true;
    BeginEffAcadYear.mandatory = true;
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    SickLeaveRB.mandatory = false;
    BeginRetirementDate.mandatory = false;
    BeginEffAcadYear.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_BeginEffAcadYear_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_BeginEffAcadYear_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    SickLeaveRB.mandatory = true;
    BeginRetirementDate.mandatory = true;
    BeginParticipationCB.mandatory = true;
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    SickLeaveRB.mandatory = false;
    BeginRetirementDate.mandatory = false;
    BeginParticipationCB.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_BeginRetirementDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_BeginRetirementDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    SickLeaveRB.mandatory = true;
    BeginEffAcadYear.mandatory = true;
    BeginParticipationCB.mandatory = true;
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    SickLeaveRB.mandatory = false;
    BeginEffAcadYear.mandatory = false;
    BeginParticipationCB.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SickLeaveRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_SickLeaveRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    BeginRetirementDate.mandatory = true;
    BeginEffAcadYear.mandatory = true;
    BeginParticipationCB.mandatory = true;
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    BeginRetirementDate.mandatory = false;
    BeginEffAcadYear.mandatory = false;
    BeginParticipationCB.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChangeFromParticipationCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChangeFromParticipationCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    ChangeToParticipationCB.mandatory = true;
    ChangeEffAcadYear.mandatory = true;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
    if(FERPRB.value != 4){
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
    }
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    ChangeToParticipationCB.mandatory = false;
    ChangeEffAcadYear.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChangeToParticipationCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChangeToParticipationCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    ChangeFromParticipationCB.mandatory = true;
    ChangeEffAcadYear.mandatory = true;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
     if(FERPRB.value != 4){
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
  }
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    ChangeFromParticipationCB.mandatory = false;
    ChangeEffAcadYear.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChangeEffAcadYear_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChangeEffAcadYear_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
     if(FERPRB.value != 4){
    FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
     }
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FromFTERB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FromFTERB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    ToFTEValue.mandatory = true;
    TOCB.mandatory = true;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
     if(FERPRB.value != 4){
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
     }
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }else{
    ToFTEValue.mandatory = false;
    TOCB.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_TOCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_TOCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    FromFTERB.mandatory = true;
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
     if(FERPRB.value != 4){
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
     }
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }
  else{
    FromFTERB.mandatory = false;
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ToFTEValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ToFTEValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
    BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
     if(FERPRB.value != 4){
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
     }
    EndParticipationRB.value = "";
    EndPArticipationYear.value = "";
  }
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_EndParticipationRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_EndParticipationRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
BeginParticipationCB.value = "";
    BeginEffAcadYear.value = "";
    BeginRetirementDate.value = "";
    SickLeaveRB.value = "";
    ChangeFromParticipationCB.value = "";
    ChangeToParticipationCB.value = "";
    ChangeEffAcadYear.value = "";
     FromFTERB.value = "";
    TOCB.value = "";
    ToFTEValue.value = "";
}
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_workflow_initiator_init0 = function (scope) {
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
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  var dept_id = this.value;
  $.ajax({
                                type: 'GET',
                                url: "/bin/getChairDeanInfo",
								data:{dept_id:dept_id},
                                dataType: 'json',

                                success: function(chairInfoResult) {
                                    
                                    if (chairInfoResult.length !== 0) {
                                        //DeanUserId.value  = chairInfoResult[0].DEAN_USERID;
										//DeanEmail.value  = chairInfoResult[0].DEAN_EMAIL;
                                        //DeanName.value =  chairInfoResult[0].DEAN_NAME;
                                       // DeanEmail.value = "yjayaram@fullerton.edu";
                                        
                                        ChairUserId.value  = chairInfoResult[0].CHAIR_USERID;
										ChairEmail.value  = chairInfoResult[0].CHAIR_EMAIL;
                                        ChairName.value =  chairInfoResult[0].CHAIR_NAME;
                                      	ChairEmail.value = "yjayaram@fullerton.edu";
                                        
                                    }

                                }
                            });
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_InitiatorEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_InitiatorEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            
    if (StageIndicator.value ===  null) {
       debugger;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  PreparerName.value = userValue;
                  InitiatorEmail.value = myresopnse[0].EMAILID;
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
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_college_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_college_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRequestor" || StageIndicator.value === null){ 
$.ajax({
                        type: 'GET',
                        url: "/bin/getPreRetirementData",
                        data: {
                            fulCollege: this.value,
                            action: "PR_DEAN_DATA"
                        },
                        dataType: 'json',
                        success: function(myresponse) {
                          DeanUserId.value = myresponse[0].EMP_USERID;
                          DeanName.value = myresponse[0].EMPNAME;
                          DeanEmail.value = myresponse[0].EMP_EMAIL;
                           DeanEmail.value = "yjayaram@fullerton.edu";
                        }
   });
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_AHRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_AHRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (this.value == 1) {
    if (StageIndicator.value == "ToHR") {
        if (AHRDate.value === null) {
            

            AHRDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  AHRSign.value = userValue;
                  AHRDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    AHRSign.value = "";
    AHRDate.value = "";
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_AHRDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_AHRDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_AVPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_AVPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToVP") {
        if (VPAADate.value === null) {
            

            VPAADate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  VPAASign.value = userValue;
                  VPAADate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
  
    VPAASign.value = "";
    VPAADate.value = "";
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_VPAADate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_VPAADate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToDean") {
        if (DeanDate.value === null) {
            

            DeanDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeanSign.value = userValue;
                  DeanDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeanSign.value = "";
    DeanDate.value = "";
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeanDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeanDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToChair") {
        if (ChairDate.value === null) {
            

            ChairDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    ChairSign.value = userValue;
                  ChairDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    ChairSign.value = "";
    ChairDate.value = "";
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_ChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FacultyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FacultyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToFaculty") {
        if (FacultyMemDate.value === null) {
            

            FacultyMemDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  FacultyMemSign.value = userValue;
                  FacultyMemDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    FacultyMemSign.value = "";
    FacultyMemDate.value = "";
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FacultyMemDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_FacultyMemDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeptCooCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeptCooCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (this.value == 1) {
    if (StageIndicator.value === null) {
        if (DeptCooSign.value === null) {
            

            DeptCooDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptCooSign.value = userValue;
                  DeptCooDate.value = myresopnse[0].SERVER_DATE;
                  InitiatorEmail.value = myresopnse[0].EMAILID;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptCooDate.value = "";
    DeptCooSign.value = "";
}
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeptCooDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_DeptCooDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/faculty-early-retirement-program/faculty-early-retirement-program-request');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', PrintName.value + "(" + CWID.value + ")" + "_" + Date.now());
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
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = PrintName.value + " "+ CWID.value ;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function faculty_early_retirement_program_faculty_early_retirement_program_request.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_early_retirement_program_faculty_early_retirement_program_request.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = PrintName.value + " "+ CWID.value ;
}
EmailSubject.value = "Faculty Early Retirement Program Request - "+FacultyLastName.value+", "+FacultyFirstName.value;
DeanEmail.value = "swathi.kumari@thoughtfocus.com";
ChairEmail.value = "swathi.kumari@thoughtfocus.com";
FacultyEmail.value = "swathi.kumari@thoughtfocus.com";
InitiatorEmail.value = "swathi.kumari@thoughtfocus.com";
/*DeanEmail.value = "anupama.dhar@thoughtfocus.com";
ChairEmail.value = "anupama.dhar@thoughtfocus.com";
FacultyEmail.value = "anupama.dhar@thoughtfocus.com";
InitiatorEmail.value = "anupama.dhar@thoughtfocus.com";
DeanEmail.value = "julnunez@fullerton.edu";
ChairEmail.value = "julnunez@fullerton.edu";
FacultyEmail.value = "julnunez@fullerton.edu";
InitiatorEmail.value = "julnunez@fullerton.edu";*/

var flag = 0;
/*if(flag === 0){
if(BeginParticipationCB.value === null && BeginEffAcadYear.value === null && BeginRetirementDate.value === null && SickLeaveRB.value === null && ChangeFromParticipationCB.value === null &&  ChangeToParticipationCB.value === null && ChangeEffAcadYear.value === null && FromFTERB.value === null && TOCB.value === null && ToFTEValue.value === null && EndParticipationRB.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter the participation details");
}else{
    flag = 0;
  }
}*/
if(flag===0){
  if(ChangeToParticipationCB.value == ChangeFromParticipationCB.value && ChangeFromParticipationCB.value !== null && ChangeToParticipationCB.value !== null){
    showErrorModal("Alert!","Please select the valid semester");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].ParticipationDetails[0].panel_17549383281632111477085[0]");
    flag = 1;
  }else{
    flag = 0;
  }
}
if(flag === 0 ){
guideBridge.submit();
}

        }
	}
}
