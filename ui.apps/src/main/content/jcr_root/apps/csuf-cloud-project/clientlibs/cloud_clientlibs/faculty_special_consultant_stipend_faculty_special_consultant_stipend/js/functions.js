/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null && formSavedStatus.value !== "1") || (StageIndicator.value === "ToRequestor" && formSavedStatus.value !== "1")) {
  var gifModal = document.getElementById('gifModal');
  gifModal.style.display = "block";

  $.ajax({
    type: 'GET',
    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function (myresponse) {

      if (myresponse.Status == "Success") {
        var userValue = myresponse.userId;
        // userValue = "jmccoy";
      // userValue = "kcase";
        workflow_initiator.value = userValue;
        logUser.value = userValue;
        $.ajax({
          type: 'GET',
          url: "/bin/getOTSDUserID",
          data: {

            userID: userValue
          },
          dataType: 'json',
          success: function (myresopnse) {
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];

            if (myresopnse.length > null) {

              HiddenDeptId.value = myresopnse[0].DEPTID;
              //CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
              Ful_Division.value = myresopnse[0].FUL_DIVISION;
              DepartmentId.enabled = true;
              Unit.enabled = true;

              getUnitData();

              gifModal.style.display = "none";
              modal.style.display = "none";

            } else if (myresopnse.length > 1) {
              gifModal.style.display = "none";
              modal.style.display = "block";

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
                var button = document.createElement("input");
                button.type = "radio";
                button.setAttribute("class", "rb");
                button.id = "rbtn";
                button.name = "group";
                button.value = "";
                button.onclick = function (event) {

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

              okButton.value = "OK";
              okButton.onclick = function (event) {

                var n;
                var rButtonStatus;

                var rButtons = document.getElementsByClassName("rb");
                for (n = 0; n < rButtons.length; n++) {
                  if (rButtons[n].checked === false) {
                    rButtonStatus = false;
                  } else {
                    HiddenDeptId.value = myresopnse[n].DEPTID;
                    //CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                    Ful_Division.value = myresopnse[n].FUL_DIVISION;

                    getUnitData();

                    rButtonStatus = true;
                    break;
                  }
                }
                if (rButtonStatus === false) {
                  showErrorModal("Alert!", "Please select the department");
                  modal.style.display = "block";
                } else {

                  gifModal.style.display = "none";
                  modal.style.display = "none";

                }
              };

              footerModal.appendChild(okButton);

            } else {
              showErrorModal("Alert!", "No matching records found");

              gifModal.style.display = "none";
            }

            span.onclick = function () {

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
    error: function (error) {
      showErrorModal("Alert!", "error block=" + error);
      loadingText.visible = false;
    }
  });
}

function getUnitData() {
  var dept_id = DepartmentId.value;

  $.ajax({
    type: 'GET',
    url: "/bin/getUnitDepIDServlet",
    data: {
      depID: dept_id
    },
    dataType: 'json',
    success: function (myresponse) {
      if (myresponse.length !== 0) {
        Unit.value = myresponse[0].CSU_UNIT;
        getAuthApproverData(DepartmentId.value, myresponse[0].CSU_UNIT, Field_Value_2.value);
      }
    }
  });
}

function getAuthApproverData(deptId, agencyUnit, fieldVal) {

  ManagerUserId.value = "";
  ManagerName.value = "";
  ManagerEmail.value = "";
  $.ajax({
    type: 'GET',
    url: "/bin/getTimekeeperDataForFacultyStipend",
    data: {
      deptId: deptId,
      agencyUnit: agencyUnit,
      fieldVal: fieldVal
    },
    dataType: 'json',
    success: function (result) {
      if (result.length === 1) {
        ManagerName.value = result[0].NAME;
        //ManagerEmail.value = result[0].EMAILID;
        ManagerEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
        ManagerUserId.value = result[0].USERID;
      }
    }
  });

}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value !== "ToPayroll"){

  BatchSession.enabled=true;
/*Comments1.enabled = false;
Comments2.enabled = false;
Comments3.enabled = false;
Comments4.enabled = false;
Comments5.enabled = false;
Comments6.enabled = false;
Comments7.enabled = false;
Comments8.enabled = false;
Comments9.enabled = false;
Comments10.enabled = false;
Comments11.enabled = false;
Comments12.enabled = false;
Comments13.enabled = false;
Comments14.enabled = false;
Comments15.enabled = false;
Comments16.enabled = false;  
  
Day1.enabled = false;
DailyRate1.enabled = false;

Day2.enabled = false;
DailyRate2.enabled = false;

Day3.enabled = false;
DailyRate3.enabled = false;

Day4.enabled = false;
DailyRate4.enabled = false;

Day5.enabled = false;
DailyRate5.enabled = false;

Day6.enabled = false;
DailyRate6.enabled = false;

Day7.enabled = false;
DailyRate7.enabled = false;

Day8.enabled = false;
DailyRate8.enabled = false;

Day9.enabled = false;
DailyRate9.enabled = false;

Day10.enabled = false;
DailyRate10.enabled = false;

Day11.enabled = false;
DailyRate11.enabled = false;

Day12.enabled = false;
DailyRate12.enabled = false;

Day13.enabled = false;
DailyRate13.enabled = false;

Day14.enabled = false;
DailyRate14.enabled = false;

Day15.enabled = false;
DailyRate15.enabled = false;

Day16.enabled = false;
DailyRate16.enabled = false;  
  
   
CMSPosNum1.enabled = false;  
CMSPosNum2.enabled = false;
CMSPosNum3.enabled = false;
CMSPosNum4.enabled = false;
CMSPosNum5.enabled = false;
CMSPosNum6.enabled = false;
CMSPosNum7.enabled = false;
CMSPosNum8.enabled = false;
CMSPosNum9.enabled = false;
CMSPosNum10.enabled = false;
CMSPosNum11.enabled = false;
CMSPosNum12.enabled = false;
CMSPosNum13.enabled = false;
CMSPosNum14.enabled = false;
CMSPosNum15.enabled = false;
CMSPosNum16.enabled = false;  
    
  
Initials1.enabled = false;
Initials2.enabled = false;
Initials3.enabled = false;
Initials4.enabled = false;
Initials5.enabled = false;
Initials6.enabled = false;
Initials7.enabled = false;
Initials8.enabled = false;
Initials9.enabled = false;
Initials11.enabled = false;
Initials12.enabled = false;
Initials13.enabled = false;
Initials10.enabled = false;
Initials14.enabled = false;
Initials15.enabled = false;
Initials16.enabled = false;

LastName1.enabled = false;
LastName2.enabled = false;
LastName3.enabled = false;
LastName4.enabled = false;
LastName5.enabled = false;
LastName6.enabled = false;
LastName7.enabled = false;
LastName8.enabled = false;
LastName9.enabled = false;
LastName11.enabled = false;
LastName12.enabled = false;
LastName13.enabled = false;
LastName10.enabled = false;
LastName14.enabled = false;
LastName15.enabled = false;
LastName16.enabled = false;

Class1.enabled =false;
Class2.enabled = false;
Class3.enabled = false;
Class4.enabled = false;
Class5.enabled = false;
Class6.enabled = false;
Class7.enabled = false;
Class8.enabled = false;
Class9.enabled = false;
Class11.enabled = false;
Class12.enabled = false;
Class13.enabled = false;
Class10.enabled = false;
Class14.enabled = false;
Class15.enabled = false;
Class16.enabled = false;*/
  
/*Serial1.enabled = false;  
Serial2.enabled = false;
Serial3.enabled = false;
Serial4.enabled = false;
Serial5.enabled = false;
Serial6.enabled = false;
Serial7.enabled = false;
Serial8.enabled = false;
Serial9.enabled = false;
Serial10.enabled = false;
Serial11.enabled = false;
Serial12.enabled = false;
Serial13.enabled = false;
Serial14.enabled = false;
Serial15.enabled = false;
Serial16.enabled = false;*/
  
Line1.enabled = false;  
Line2.enabled = false;
Line3.enabled = false;
Line4.enabled = false;
Line5.enabled = false;
Line6.enabled = false;
Line7.enabled = false;
Line8.enabled = false;
Line9.enabled = false;
Line10.enabled = false;
Line11.enabled = false;
Line12.enabled = false;
Line13.enabled = false;
Line14.enabled = false;
Line15.enabled = false;
Line16.enabled = false;  
}
else{
if(EmpId1.value !== null){
Comments1.enabled = true;
Serial1.enabled = true;  
} else{
  Comments1.enabled = false;
  Serial1.enabled = false;
}
if(EmpId2.value !== null){
Comments2.enabled = true;
Serial2.enabled = true;  
} else{
  Comments2.enabled = false;
  Serial2.enabled = false;
}  
if(EmpId3.value !== null){
Comments3.enabled = true;
Serial3.enabled = true;  
} else{
  Comments3.enabled = false;
  Serial3.enabled = false;
}
  if(EmpId4.value !== null){
Comments4.enabled = true;
Serial4.enabled = true;  
} else{
  Comments4.enabled = false;
  Serial4.enabled = false;
}
  if(EmpId5.value !== null){
Comments5.enabled = true;
Serial5.enabled = true;  
} else{
  Comments5.enabled = false;
  Serial5.enabled = false;
}
  if(EmpId6.value !== null){
Comments6.enabled = true;
Serial6.enabled = true;  
} else{
  Comments6.enabled = false;
  Serial6.enabled = false;
}

if(EmpId7.value !== null){
Comments7.enabled = true;
Serial7.enabled = true;  
} else{
  Comments7.enabled = false;
  Serial7.enabled = false;
}

if(EmpId8.value !== null){
Comments8.enabled = true;
Serial8.enabled = true;  
} else{
  Comments8.enabled = false;
  Serial8.enabled = false;
}

if(EmpId9.value !== null){
Comments9.enabled = true;
Serial9.enabled = true;  
} else{
  Comments9.enabled = false;
  Serial9.enabled = false;
}


if(EmpId10.value !== null){
Comments10.enabled = true;
Serial10.enabled = true;  
} else{
  Comments10.enabled = false;
  Serial10.enabled = false;
}

if(EmpId11.value !== null){
Comments11.enabled = true;
Serial11.enabled = true;  
} else{
  Comments11.enabled = false;
  Serial11.enabled = false;
}

if(EmpId12.value !== null){
Comments12.enabled = true;
Serial12.enabled = true;  
} else{
  Comments12.enabled = false;
  Serial12.enabled = false;
}
if(EmpId13.value !== null){
Comments13.enabled = true;
Serial13.enabled = true;  
} else{
  Comments13.enabled = false;
  Serial13.enabled = false;
}

if(EmpId14.value !== null){
Comments14.enabled = true;
Serial14.enabled = true;  
} else{
  Comments14.enabled = false;
  Serial14.enabled = false;
}

if(EmpId15.value !== null){
Comments15.enabled = true;
Serial15.enabled = true;  
} else{
  Comments15.enabled = false;
  Serial15.enabled = false;
}
if(EmpId16.value !== null){
Comments16.enabled = true;
Serial16.enabled = true;  
} else{
  Comments16.enabled = false;
  Serial16.enabled = false;
}
  
   EmpId1.enabled=false; 
  EmpId2.enabled=false;
  EmpId3.enabled=false; 
  EmpId4.enabled=false; 
  EmpId5.enabled=false; 
  EmpId6.enabled=false;
  EmpId7.enabled=false;
  EmpId8.enabled=false;
  EmpId9.enabled=false; 
  EmpId10.enabled=false;
  EmpId11.enabled=false; 
  EmpId12.enabled=false;  
  EmpId13.enabled=false;
  EmpId14.enabled=false;
  EmpId15.enabled=false;
  EmpId16.enabled=false;
/*if(EmpId1.value !== null){
Comments1.enabled = true;;  
} 
if(EmpId2.value !== null){
Comments2.enabled = true;
}e
if(EmpId3.value !== null){
Comments3.enabled = true;
}
if(EmpId4.value !== null){
Comments4.enabled = true;
}
if(EmpId5.value !== null){
Comments5.enabled = true;
}
if(EmpId6.value !== null){
Comments6.enabled = true;
}
if(EmpId7.value !== null){
Comments7.enabled = true;
}
if(EmpId8.value !== null){
Comments8.enabled = true;
}
if(EmpId9.value !== null){
Comments9.enabled = true;
}
if(EmpId10.value !== null){
Comments10.enabled = true;
}
if(EmpId11.value !== null){
Comments11.enabled = true;
}
if(EmpId12.value !== null){
Comments12.enabled = true;
}
if(EmpId13.value !== null){
Comments13.enabled = true;
}
if(EmpId14.value !== null){
Comments14.enabled = true;
}
if(EmpId15.value !== null){
Comments15.enabled = true;
}
if(EmpId16.value !== null){
Comments16.enabled = true;
} */

Initials1.enabled = false;
Initials2.enabled = false;
Initials3.enabled = false;
Initials4.enabled = false;
Initials5.enabled = false;
Initials6.enabled = false;
Initials7.enabled = false;
Initials8.enabled = false;
Initials9.enabled = false;
Initials11.enabled = false;
Initials12.enabled = false;
Initials13.enabled = false;
Initials10.enabled = false;
Initials14.enabled = false;
Initials15.enabled = false;
Initials16.enabled = false; 

if(EmpId1.value !== null){
  Serial1.enabled = true;
  Serial1.mandatory =true;
}
if(EmpId2.value !== null){
  Serial2.enabled = true;
  Serial2.mandatory =true;
  
}
if(EmpId3.value !== null){
Serial3.enabled = true;
  Serial3.mandatory=true;
}
if(EmpId4.value !== null){
Serial4.enabled = true;
  Serial4.mandatory=true;
}
if(EmpId5.value !== null){
Serial5.enabled = true;
  Serial5.mandatory=true;
}
if(EmpId6.value !== null){
Serial6.enabled = true;
  Serial6.mandatory=true;
}
if(EmpId7.value !== null){
Serial7.enabled = true;
  Serial7.mandatory=true;
}
if(EmpId8.value !== null){
Serial8.enabled = true;
  Serial8.mandatory=true;
}
if(EmpId9.value !== null){
Serial9.enabled = true;
  Serial9.mandatory=true;
}
if(EmpId10.value !== null){
Serial10.enabled = true;
  Serial10.mandatory=true;
}
if(EmpId11.value !== null){
Serial11.enabled = true;
  Serial11.mandatory=true;
}
if(EmpId12.value !== null){
Serial12.enabled = true;
  Serial12.mandatory =true;
}
if(EmpId13.value !== null){
Serial13.enabled = true;
  Serial13.mandatory=true;
}
if(EmpId14.value !== null){
Serial14.enabled = true;
  Serial14.mandatory=true;
}
if(EmpId15.value !== null){
Serial15.enabled = true;
  Serial15.mandatory=true;
}
if(EmpId16.value !== null){
Serial16.enabled = true;
Serial16.mandatory=true;
}
  
Day1.enabled = false;
DailyRate1.enabled = false;

Day2.enabled = false;
DailyRate2.enabled = false;

Day3.enabled = false;
DailyRate3.enabled = false;

Day4.enabled = false;
DailyRate4.enabled = false;

Day5.enabled = false;
DailyRate5.enabled = false;

Day6.enabled = false;
DailyRate6.enabled = false;

Day7.enabled = false;
DailyRate7.enabled = false;

Day8.enabled = false;
DailyRate8.enabled = false;

Day9.enabled = false;
DailyRate9.enabled = false;

Day10.enabled = false;
DailyRate10.enabled = false;

Day11.enabled = false;
DailyRate11.enabled = false;

Day12.enabled = false;
DailyRate12.enabled = false;

Day13.enabled = false;
DailyRate13.enabled = false;

Day14.enabled = false;
DailyRate14.enabled = false;

Day15.enabled = false;
DailyRate15.enabled = false;

Day16.enabled = false;
DailyRate16.enabled = false;
  
CMSPosNum1.enabled = false;  
CMSPosNum2.enabled = false;
CMSPosNum3.enabled = false;
CMSPosNum4.enabled = false;
CMSPosNum5.enabled = false;
CMSPosNum6.enabled = false;
CMSPosNum7.enabled = false;
CMSPosNum8.enabled = false;
CMSPosNum9.enabled = false;
CMSPosNum10.enabled = false;
CMSPosNum11.enabled = false;
CMSPosNum12.enabled = false;
CMSPosNum13.enabled = false;
CMSPosNum14.enabled = false;
CMSPosNum15.enabled = false;
CMSPosNum16.enabled = false;
    

LastName1.enabled = false;
LastName2.enabled = false;
LastName3.enabled = false;
LastName4.enabled = false;
LastName5.enabled = false;
LastName6.enabled = false;
LastName7.enabled = false;
LastName8.enabled = false;
LastName9.enabled = false;
LastName11.enabled = false;
LastName12.enabled = false;
LastName13.enabled = false;
LastName10.enabled = false;
LastName14.enabled = false;
LastName15.enabled = false;
LastName16.enabled = false;

 Class1.enabled = false;
Class2.enabled = false;
Class3.enabled = false;
Class4.enabled = false;
Class5.enabled = false;
Class6.enabled = false;
Class7.enabled = false;
Class8.enabled = false;
Class9.enabled = false;
Class11.enabled = false;
Class12.enabled = false;
Class13.enabled = false;
Class10.enabled = false;
Class14.enabled = false;
Class15.enabled = false;
Class16.enabled = false;
  


  
Line1.enabled = false;  
Line2.enabled = false;
Line3.enabled = false;
Line4.enabled = false;
Line5.enabled = false;
Line6.enabled = false;
Line7.enabled = false;
Line8.enabled = false;
Line9.enabled = false;
Line10.enabled = false;
Line11.enabled = false;
Line12.enabled = false;
Line13.enabled = false;
Line14.enabled = false;
Line15.enabled = false;
Line16.enabled = false;   
}

        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
    panelTable.enabled = true;
    DepartmentId.enabled = false;
    Agency.enabled = false;
    Unit.enabled = false;
    Month.enabled = true;
    Year.enabled = true;
    //BatchSession.enabled = false;
    
    OptionalReviewerPanel.enabled = true;
  
    if(OptionalReviewerCB.value !== null){
      OptionalReviewSignaturePanel.visible = true;
      OptionalReviewSignaturePanel.enabled = false;
    } else {
      OptionalReviewSignaturePanel.visible = false;
    }
  
   if(ManagerCB.value !== null){
      managerSignSection.visible = true;
      managerSignSection.enabled = false;
    } else {
      managerSignSection.visible = false;
    }
  
  if(PayRollCB.value !== null){
      PayrollSignatureSection.visible = true;
      PayrollSignatureSection.enabled = false;
    } else {
      PayrollSignatureSection.visible = false;
    }
   
    Line1.enabled = false;
    Line2.enabled = false;
    Line3.enabled = false;
    Line4.enabled = false;
    Line5.enabled = false;
    Line6.enabled = false;
    Line7.enabled = false;
    Line8.enabled = false;
    Line9.enabled = false;
    Line10.enabled = false;
    Line11.enabled = false;
    Line12.enabled = false;
    Line13.enabled = false;
    Line14.enabled = false;
    Line15.enabled = false;
    Line16.enabled = false;

}

if (StageIndicator.value === "ToOptional") {
    DepartmentId.enabled = false;
    Agency.enabled = false;
    Unit.enabled = false;
    Month.enabled = false;
    Year.enabled = false;
    panelTable.enabled = false;
    BatchSession.enabled = false;
    AuthSign.enabled = false;
    AuthEmail.enabled = false;
    AuthDate.enabled = false;
    AuthCB.enabled = false;

    OptionalReviewerPanel.enabled = false;

    OptionalReviewSignaturePanel.visible = true;
    OptionalReviewSignaturePanel.enabled = true;

    if(ManagerCB.value !== null){
      managerSignSection.visible = true;
      managerSignSection.enabled = false;
    } else {
      managerSignSection.visible = false;
    }
  
  if(PayRollCB.value !== null){
      PayrollSignatureSection.visible = true;
      PayrollSignatureSection.enabled = false;
    } else {
      PayrollSignatureSection.visible = false;
    }

    Line1.enabled = false;
    Line2.enabled = false;
    Line3.enabled = false;
    Line4.enabled = false;
    Line5.enabled = false;
    Line6.enabled = false;
    Line7.enabled = false;
    Line8.enabled = false;
    Line9.enabled = false;
    Line10.enabled = false;
    Line11.enabled = false;
    Line12.enabled = false;
    Line13.enabled = false;
    Line14.enabled = false;
    Line15.enabled = false;
    Line16.enabled = false;

}

if (StageIndicator.value === "ToManager") {
    DepartmentId.enabled = false;
    Agency.enabled = false;
    Unit.enabled = false;
    Month.enabled = false;
    Year.enabled = false;
    panelTable.enabled = false;
    BatchSession.enabled = false;
    AuthSign.enabled = false;
    AuthEmail.enabled = false;
    AuthDate.enabled = false;
    AuthCB.enabled = false;
    
    OptionalReviewerPanel.enabled = false;

    if(OptionalReviewerCB.value !== null){
      OptionalReviewSignaturePanel.visible = true;
      OptionalReviewSignaturePanel.enabled = false;
    } else {
      OptionalReviewSignaturePanel.visible = false;
    }

    managerSignSection.visible = true;
    managerSignSection.enabled = true;
  
    if(PayRollCB.value !== null){
      PayrollSignatureSection.visible = true;
      PayrollSignatureSection.enabled = false;
    } else {
      PayrollSignatureSection.visible = false;
    }

    Line1.enabled = false;
    Line2.enabled = false;
    Line3.enabled = false;
    Line4.enabled = false;
    Line5.enabled = false;
    Line6.enabled = false;
    Line7.enabled = false;
    Line8.enabled = false;
    Line9.enabled = false;
    Line10.enabled = false;
    Line11.enabled = false;
    Line12.enabled = false;
    Line13.enabled = false;
    Line14.enabled = false;
    Line15.enabled = false;
    Line16.enabled = false;

}
if (StageIndicator.value == "ToPayroll") {
    panelTable.enabled = true;
    DepartmentId.enabled = false;
    Agency.enabled = false;
    Unit.enabled = false;
    Month.enabled = false;
    Year.enabled = false;
    BatchSession.enabled = true;
    AuthSign.enabled = false;
    AuthEmail.enabled = false;
    AuthDate.enabled = false;
    AuthCB.enabled = false;
  
    OptionalReviewerPanel.enabled = false;

    if(OptionalReviewerCB.value !== null){
      OptionalReviewSignaturePanel.visible = true;
      OptionalReviewSignaturePanel.enabled = false;
    } else {
      OptionalReviewSignaturePanel.visible = false;
    }
  
    managerSignSection.visible = true;
    managerSignSection.enabled = false;
  
    PayrollSignatureSection.visible = true;
    PayrollSignatureSection.enabled = true;

    Line1.enabled = false;
    Line2.enabled = false;
    Line3.enabled = false;
    Line4.enabled = false;
    Line5.enabled = false;
    Line6.enabled = false;
    Line7.enabled = false;
    Line8.enabled = false;
    Line9.enabled = false;
    Line10.enabled = false;
    Line11.enabled = false;
    Line12.enabled = false;
    Line13.enabled = false;
    Line14.enabled = false;
    Line15.enabled = false;
    Line16.enabled = false;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getEvaluationFormData",
        data: {
            action: "EMP_DETAILS"
        },
        dataType: 'json',
        success: function(myresopnse) {
            if (myresopnse.length !== 0) {
                /*var unioncd = myresopnse[0].UNION_CD;
                var positionnumber = myresopnse[0].POSITION_NBR;*/
                InitiatorName.value =myresopnse[0].FIRST_NAME + " " + myresopnse[0].LAST_NAME;
				FirstName.value = myresopnse[0].FIRST_NAME;
                LastName.value = myresopnse[0].LAST_NAME;
                EmplUserID.value = myresopnse[0].EMP_USERID;
                //EmailID.value = myresopnse[0].EMAILID;
                EmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com"; 
                InitiatorUserId.value = myresopnse[0].EMP_USERID;
                //InitiatorEmail.value = myresopnse[0].EMAILID;   
                InitiatorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com"; 
                
            }
           
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_DepartmentId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_DepartmentId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var dept_id = DepartmentId.value;
if ((StageIndicator.value === null && dept_id !== null) || (StageIndicator.value === "ToRequestor" && dept_id !== null)){
    $.ajax({
        type: 'GET',
        url: "/bin/getUnitDepIDServlet",
        data: {
            depID: dept_id
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length !== 0) {
                Unit.value = myresponse[0].CSU_UNIT;
            }
        }
    });
}

        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_DepartmentId_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_DepartmentId_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {

  var depID = DepartmentId.value;
  var depName = "";

  $.ajax({
    type: 'GET',
    url: "/bin/getFinancialARFData",
    data: {
      
      depID: depID,
      depName: depName,
      action: "FS_ARF_DEPT_OTHER_DIV"
    },
    dataType: 'json',
    success: function (myresponse) {

      if (myresponse.length > 0) {

        DeptName.value=myresponse[0].DEPTNAME;	

      } else {

        DeptName.value = "";
      }

    }

  });
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Agency_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Agency_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Unit_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Unit_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=true;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Unit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Unit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value=="ToRequestor"){
  getAuthApproverData(DepartmentId.value,Unit.value,Field_Value_2.value);
}

function getAuthApproverData(deptId,agencyUnit,fieldVal){
	
		ManagerUserId.value = "";
        ManagerName.value = "";
        ManagerEmail.value = "";
        $.ajax({
            type: 'GET',
            url: "/bin/getTimekeeperDataForFacultyStipend",
            data: {
                deptId: deptId,
                agencyUnit: agencyUnit,
				fieldVal:fieldVal
            },
            dataType: 'json',
            success: function(result) {
                if (result.length === 1) {                  
                    ManagerName.value = result[0].NAME;
                   // ManagerEmail.value = result[0].EMAILID;
                    ManagerEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                    ManagerUserId.value = result[0].USERID;
                }                 
            }
        });
    }
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Unit_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Unit_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    var deptId = DepartmentId.value;
   var agencyUnit = Unit.value;
   var fieldVal = Field_Value_2.value;
  
    $.ajax({
        type: 'GET',
        url: "/bin/getTimekeeperDataForFacultyStipend",
        data: {
                deptId: deptId,
                agencyUnit: agencyUnit,
				fieldVal:fieldVal
            },
        dataType: 'json',

        success: function(result) {
                if (result.length !== 0) {                  
                    ManagerName.value = result[0].NAME;
                    ManagerEmail.value = result[0].EMAILID;
                    ManagerUserId.value = result[0].USERID;
                }                 
            }
    });
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_BatchSession_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_BatchSession_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled = true;
  this.mandatory = "error";
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_BatchSession_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_BatchSession_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=true;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day1.enabled = true;
            DailyRate1.enabled = true;
            Comments1.enabled = true;*/
          Day1.mandatory = true;
          DailyRate1.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials1.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName1.value = myresopnse[0].LAST_NAME;
            /*  Class1.value = myresopnse[0].JOBCODE;
              CMSPosNum1.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  
          else {
            showErrorModal("Alert!", "No matching records found");
            Initials1.value = "";
            LastName1.value = "";
            Class1.value = "";
            Serial1.value = "";
            Day1.value = "";
            DailyRate1.value = "";
            CMSPosNum1.value = "";
            Comments1.value = "";
            Day1.mandatory = false;
            DailyRate1.mandatory = false;
            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials1.value = "";
      LastName1.value = "";
      Class1.value = "";
      Serial1.value = "";
      Day1.value = "";
      DailyRate1.value = "";
      CMSPosNum1.value = "";
      Comments1.value = "";
      Day1.mandatory = false;
      DailyRate1.mandatory = false;
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Initials1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Initials1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor"){
    this.mandatory=true;
}

        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_LastName1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_LastName1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
    this.mandatory=true;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Day1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_Day1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor")  {
    this.mandatory=true;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_DailyRate1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_DailyRate1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor")  {
    this.mandatory=true;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount1_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount1_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
    this.mandatory=true;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_CMSPosNum1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_CMSPosNum1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor")  {
    this.mandatory=true;
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day2.enabled = true;
            DailyRate2.enabled = true;
            Comments2.enabled = true;*/
          Day2.mandatory = true;
          DailyRate2.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials2.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName2.value = myresopnse[0].LAST_NAME;
            /*  Class2.value = myresopnse[0].JOBCODE;
              CMSPosNum2.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  
          else {
            showErrorModal("Alert!", "No matching records found");
            Initials2.value = "";
            LastName2.value = "";
            Class2.value = "";
            Serial2.value = "";
            Day2.value = "";
            DailyRate2.value = "";
            CMSPosNum2.value = "";
            Comments2.value = "";
            Day2.mandatory = false;
            DailyRate2.mandatory = false;
            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials2.value = "";
      LastName2.value = "";
      Class2.value = "";
      Serial2.value = "";
      Day2.value = "";
      DailyRate2.value = "";
      CMSPosNum2.value = "";
      Comments2.value = "";
      Day2.mandatory = false;
      DailyRate2.mandatory = false;
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day3.enabled = true;
            DailyRate3.enabled = true;
            Comments3.enabled = true;*/
          Day3.mandatory = true;
          DailyRate3.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials3.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName3.value = myresopnse[0].LAST_NAME;
            /*  Class3.value = myresopnse[0].JOBCODE;
              CMSPosNum3.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials3.value = "";
            LastName3.value = "";
            Class3.value = "";
            Serial3.value = "";
            Day3.value = "";
            DailyRate3.value = "";
            CMSPosNum3.value = "";
            Comments3.value = "";
            Day3.mandatory = false;
            DailyRate3.mandatory = false;
            /* Day3.enabled = false;
             DailyRate3.enabled = false;
             CMSPosNum3.enabled = false;
             Comments3.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials3.value = "";
      LastName3.value = "";
      Class3.value = "";
      Serial3.value = "";
      Day3.value = "";
      DailyRate3.value = "";
      CMSPosNum3.value = "";
      Comments3.value = "";
      Day3.mandatory = false;
      DailyRate3.mandatory = false;
      /* Day3.enabled = false;
       DailyRate3.enabled = false;
       CMSPosNum3.enabled = false;
       Comments3.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day4.enabled = true;
            DailyRate4.enabled = true;
            Comments4.enabled = true;*/
          Day4.mandatory = true;
          DailyRate4.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials4.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName4.value = myresopnse[0].LAST_NAME;
            /*  Class4.value = myresopnse[0].JOBCODE;
              CMSPosNum4.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials4.value = "";
            LastName4.value = "";
            Class4.value = "";
            Serial4.value = "";
            Day4.value = "";
            DailyRate4.value = "";
            CMSPosNum4.value = "";
            Comments4.value = "";
            Day4.mandatory = false;
            DailyRate4.mandatory = false;
            /* Day4.enabled = false;
             DailyRate4.enabled = false;
             CMSPosNum4.enabled = false;
             Comments4.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials4.value = "";
      LastName4.value = "";
      Class4.value = "";
      Serial4.value = "";
      Day4.value = "";
      DailyRate4.value = "";
      CMSPosNum4.value = "";
      Comments4.value = "";
      Day4.mandatory = false;
      DailyRate4.mandatory = false;
      /* Day4.enabled = false;
       DailyRate4.enabled = false;
       CMSPosNum4.enabled = false;
       Comments4.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day5.enabled = true;
            DailyRate5.enabled = true;
            Comments5.enabled = true;*/
          Day5.mandatory = true;
          DailyRate5.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials5.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName5.value = myresopnse[0].LAST_NAME;
            /*  Class5.value = myresopnse[0].JOBCODE;
              CMSPosNum5.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials5.value = "";
            LastName5.value = "";
            Class5.value = "";
            Serial5.value = "";
            Day5.value = "";
            DailyRate5.value = "";
            CMSPosNum5.value = "";
            Comments5.value = "";
            Day5.mandatory = false;
            DailyRate5.mandatory = false;
            /* Day5.enabled = false;
             DailyRate5.enabled = false;
             CMSPosNum5.enabled = false;
             Comments5.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials5.value = "";
      LastName5.value = "";
      Class5.value = "";
      Serial5.value = "";
      Day5.value = "";
      DailyRate5.value = "";
      CMSPosNum5.value = "";
      Comments5.value = "";
      Day5.mandatory = false;
      DailyRate5.mandatory = false;
      /* Day5.enabled = false;
       DailyRate5.enabled = false;
       CMSPosNum5.enabled = false;
       Comments5.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day6.enabled = true;
            DailyRate6.enabled = true;
            Comments6.enabled = true;*/
          Day6.mandatory = true;
          DailyRate6.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials6.value =myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName6.value = myresopnse[0].LAST_NAME;
            /*  Class6.value = myresopnse[0].JOBCODE;
              CMSPosNum6.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials6.value = "";
            LastName6.value = "";
            Class6.value = "";
            Serial6.value = "";
            Day6.value = "";
            DailyRate6.value = "";
            CMSPosNum6.value = "";
            Comments6.value = "";
            Day6.mandatory = false;
            DailyRate6.mandatory = false;
            /* Day6.enabled = false;
             DailyRate6.enabled = false;
             CMSPosNum6.enabled = false;
             Comments6.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials6.value = "";
      LastName6.value = "";
      Class6.value = "";
      Serial6.value = "";
      Day6.value = "";
      DailyRate6.value = "";
      CMSPosNum6.value = "";
      Comments6.value = "";
      Day6.mandatory = false;
      DailyRate6.mandatory = false;
      /* Day6.enabled = false;
       DailyRate6.enabled = false;
       CMSPosNum6.enabled = false;
       Comments6.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount6_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount6_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day7.enabled = true;
            DailyRate7.enabled = true;
            Comments7.enabled = true;*/
          Day7.mandatory = true;
          DailyRate7.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials7.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName7.value = myresopnse[0].LAST_NAME;
            /*  Class7.value = myresopnse[0].JOBCODE;
              CMSPosNum7.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials7.value = "";
            LastName7.value = "";
            Class7.value = "";
            Serial7.value = "";
            Day7.value = "";
            DailyRate7.value = "";
            CMSPosNum7.value = "";
            Comments7.value = "";
            Day7.mandatory = false;
            DailyRate7.mandatory = false;
            /* Day7.enabled = false;
             DailyRate7.enabled = false;
             CMSPosNum7.enabled = false;
             Comments7.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials7.value = "";
      LastName7.value = "";
      Class7.value = "";
      Serial7.value = "";
      Day7.value = "";
      DailyRate7.value = "";
      CMSPosNum7.value = "";
      Comments7.value = "";
      Day7.mandatory = false;
      DailyRate7.mandatory = false;
      /* Day7.enabled = false;
       DailyRate7.enabled = false;
       CMSPosNum7.enabled = false;
       Comments7.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount7_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount7_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day8.enabled = true;
            DailyRate8.enabled = true;
            Comments8.enabled = true;*/
          Day8.mandatory = true;
          DailyRate8.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials8.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName8.value = myresopnse[0].LAST_NAME;
            /*  Class8.value = myresopnse[0].JOBCODE;
              CMSPosNum8.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials8.value = "";
            LastName8.value = "";
            Class8.value = "";
            Serial8.value = "";
            Day8.value = "";
            DailyRate8.value = "";
            CMSPosNum8.value = "";
            Comments8.value = "";
            Day8.mandatory = false;
            DailyRate8.mandatory = false;
            /* Day8.enabled = false;
             DailyRate8.enabled = false;
             CMSPosNum8.enabled = false;
             Comments8.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials8.value = "";
      LastName8.value = "";
      Class8.value = "";
      Serial8.value = "";
      Day8.value = "";
      DailyRate8.value = "";
      CMSPosNum8.value = "";
      Comments8.value = "";
      Day8.mandatory = false;
      DailyRate8.mandatory = false;
      /* Day8.enabled = false;
       DailyRate8.enabled = false;
       CMSPosNum8.enabled = false;
       Comments8.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount8_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount8_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId9_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId9_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day9.enabled = true;
            DailyRate9.enabled = true;
            Comments9.enabled = true;*/
          Day9.mandatory = true;
          DailyRate9.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials9.value =myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName9.value = myresopnse[0].LAST_NAME;
            /*  Class9.value = myresopnse[0].JOBCODE;
              CMSPosNum9.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials9.value = "";
            LastName9.value = "";
            Class9.value = "";
            Serial9.value = "";
            Day9.value = "";
            DailyRate9.value = "";
            CMSPosNum9.value = "";
            Comments9.value = "";
            Day9.mandatory = false;
            DailyRate9.mandatory = false;
            /* Day9.enabled = false;
             DailyRate9.enabled = false;
             CMSPosNum9.enabled = false;
             Comments9.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials9.value = "";
      LastName9.value = "";
      Class9.value = "";
      Serial9.value = "";
      Day9.value = "";
      DailyRate9.value = "";
      CMSPosNum9.value = "";
      Comments9.value = "";
      Day9.mandatory = false;
      DailyRate9.mandatory = false;
      /* Day9.enabled = false;
       DailyRate9.enabled = false;
       CMSPosNum9.enabled = false;
       Comments9.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount9_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount9_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId10_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId10_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day10.enabled = true;
            DailyRate10.enabled = true;
            Comments10.enabled = true;*/
          Day10.mandatory = true;
          DailyRate10.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials10.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName10.value = myresopnse[0].LAST_NAME;
            /*  Class10.value = myresopnse[0].JOBCODE;
              CMSPosNum10.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials10.value = "";
            LastName10.value = "";
            Class10.value = "";
            Serial10.value = "";
            Day10.value = "";
            DailyRate10.value = "";
            CMSPosNum10.value = "";
            Comments10.value = "";
            Day10.mandatory = false;
            DailyRate10.mandatory = false;
            /* Day10.enabled = false;
             DailyRate10.enabled = false;
             CMSPosNum10.enabled = false;
             Comments10.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials10.value = "";
      LastName10.value = "";
      Class10.value = "";
      Serial10.value = "";
      Day10.value = "";
      DailyRate10.value = "";
      CMSPosNum10.value = "";
      Comments10.value = "";
      Day10.mandatory = false;
      DailyRate10.mandatory = false;
      /* Day10.enabled = false;
       DailyRate10.enabled = false;
       CMSPosNum10.enabled = false;
       Comments10.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount10_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount10_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId11_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId11_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day11.enabled = true;
            DailyRate11.enabled = true;
            Comments11.enabled = true;*/
          Day11.mandatory = true;
          DailyRate11.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials11.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName11.value = myresopnse[0].LAST_NAME;
            /*  Class11.value = myresopnse[0].JOBCODE;
              CMSPosNum11.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials11.value = "";
            LastName11.value = "";
            Class11.value = "";
            Serial11.value = "";
            Day11.value = "";
            DailyRate11.value = "";
            CMSPosNum11.value = "";
            Comments11.value = "";
            Day11.mandatory = false;
            DailyRate11.mandatory = false;
            /* Day11.enabled = false;
             DailyRate11.enabled = false;
             CMSPosNum11.enabled = false;
             Comments11.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials11.value = "";
      LastName11.value = "";
      Class11.value = "";
      Serial11.value = "";
      Day11.value = "";
      DailyRate11.value = "";
      CMSPosNum11.value = "";
      Comments11.value = "";
      Day11.mandatory = false;
      DailyRate11.mandatory = false;
      /* Day11.enabled = false;
       DailyRate11.enabled = false;
       CMSPosNum11.enabled = false;
       Comments11.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount11_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount11_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId12_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId12_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day12.enabled = true;
            DailyRate12.enabled = true;
            Comments12.enabled = true;*/
          Day12.mandatory = true;
          DailyRate12.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials12.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName12.value = myresopnse[0].LAST_NAME;
            /*  Class12.value = myresopnse[0].JOBCODE;
              CMSPosNum12.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials12.value = "";
            LastName12.value = "";
            Class12.value = "";
            Serial12.value = "";
            Day12.value = "";
            DailyRate12.value = "";
            CMSPosNum12.value = "";
            Comments12.value = "";
            Day12.mandatory = false;
            DailyRate12.mandatory = false;
            /* Day12.enabled = false;
             DailyRate12.enabled = false;
             CMSPosNum12.enabled = false;
             Comments12.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials12.value = "";
      LastName12.value = "";
      Class12.value = "";
      Serial12.value = "";
      Day12.value = "";
      DailyRate12.value = "";
      CMSPosNum12.value = "";
      Comments12.value = "";
      Day12.mandatory = false;
      DailyRate12.mandatory = false;
      /* Day12.enabled = false;
       DailyRate12.enabled = false;
       CMSPosNum12.enabled = false;
       Comments12.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount12_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount12_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId13_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId13_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day13.enabled = true;
            DailyRate13.enabled = true;
            Comments13.enabled = true;*/
          Day13.mandatory = true;
          DailyRate13.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials13.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName13.value = myresopnse[0].LAST_NAME;
            /*  Class13.value = myresopnse[0].JOBCODE;
              CMSPosNum13.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials13.value = "";
            LastName13.value = "";
            Class13.value = "";
            Serial13.value = "";
            Day13.value = "";
            DailyRate13.value = "";
            CMSPosNum13.value = "";
            Comments13.value = "";
            Day13.mandatory = false;
            DailyRate13.mandatory = false;
            /* Day13.enabled = false;
             DailyRate13.enabled = false;
             CMSPosNum13.enabled = false;
             Comments13.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials13.value = "";
      LastName13.value = "";
      Class13.value = "";
      Serial13.value = "";
      Day13.value = "";
      DailyRate13.value = "";
      CMSPosNum13.value = "";
      Comments13.value = "";
      Day13.mandatory = false;
      DailyRate13.mandatory = false;
      /* Day13.enabled = false;
       DailyRate13.enabled = false;
       CMSPosNum13.enabled = false;
       Comments13.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount13_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount13_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId14_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId14_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor") {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day14.enabled = true;
            DailyRate14.enabled = true;
            Comments14.enabled = true;*/
          Day14.mandatory = true;
          DailyRate14.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials14.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName14.value = myresopnse[0].LAST_NAME;
            /*  Class14.value = myresopnse[0].JOBCODE;
              CMSPosNum14.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials14.value = "";
            LastName14.value = "";
            Class14.value = "";
            Serial14.value = "";
            Day14.value = "";
            DailyRate14.value = "";
            CMSPosNum14.value = "";
            Comments14.value = "";
            Day14.mandatory = false;
            DailyRate14.mandatory = false;
            /* Day14.enabled = false;
             DailyRate14.enabled = false;
             CMSPosNum14.enabled = false;
             Comments14.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials14.value = "";
      LastName14.value = "";
      Class14.value = "";
      Serial14.value = "";
      Day14.value = "";
      DailyRate14.value = "";
      CMSPosNum14.value = "";
      Comments14.value = "";
      Day14.mandatory = false;
      DailyRate14.mandatory = false;
      /* Day14.enabled = false;
       DailyRate14.enabled = false;
       CMSPosNum14.enabled = false;
       Comments14.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount14_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount14_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId15_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId15_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day15.enabled = true;
            DailyRate15.enabled = true;
            Comments15.enabled = true;*/
          Day15.mandatory = true;
          DailyRate15.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials15.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName15.value = myresopnse[0].LAST_NAME;
            /*  Class15.value = myresopnse[0].JOBCODE;
              CMSPosNum15.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials15.value = "";
            LastName15.value = "";
            Class15.value = "";
            Serial15.value = "";
            Day15.value = "";
            DailyRate15.value = "";
            CMSPosNum15.value = "";
            Comments15.value = "";
            Day15.mandatory = false;
            DailyRate15.mandatory = false;
            /* Day15.enabled = false;
             DailyRate15.enabled = false;
             CMSPosNum15.enabled = false;
             Comments15.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials15.value = "";
      LastName15.value = "";
      Class15.value = "";
      Serial15.value = "";
      Day15.value = "";
      DailyRate15.value = "";
      CMSPosNum15.value = "";
      Comments15.value = "";
      Day15.mandatory = false;
      DailyRate15.mandatory = false;
      /* Day15.enabled = false;
       DailyRate15.enabled = false;
       CMSPosNum15.enabled = false;
       Comments15.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount15_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount15_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId16_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_EmpId16_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
  var cwid = this.value;
  var duplicateID = "";

  if (cwid != duplicateID) {
    if (cwid !== null) {
      var userID = logUser.value;
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";
      $.ajax({
        type: 'GET',
        url: "/bin/getShortAppEmpLook",
        data: {
          cwid: cwid
        },
        dataType: 'json',

        success: function (myresopnse) {

          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var gifModal = document.getElementById('gifModal');
          /*  Day16.enabled = true;
            DailyRate16.enabled = true;
            Comments16.enabled = true;*/
          Day16.mandatory = true;
          DailyRate16.mandatory = true;
          if (myresopnse.length !== 0) {
            Initials16.value = myresopnse[0].FIRST_NAME + " "+ myresopnse[0].MIDDLE_NAME;
            LastName16.value = myresopnse[0].LAST_NAME;
            /*  Class16.value = myresopnse[0].JOBCODE;
              CMSPosNum16.value = myresopnse[0].POSITION_NBR;*/

            gifModal.style.display = "none";

          }  else {
            showErrorModal("Alert!", "No matching records found");
            Initials16.value = "";
            LastName16.value = "";
            Class16.value = "";
            Serial16.value = "";
            Day16.value = "";
            DailyRate16.value = "";
            CMSPosNum16.value = "";
            Comments16.value = "";
            Day16.mandatory = false;
            DailyRate16.mandatory = false;
            /* Day16.enabled = false;
             DailyRate16.enabled = false;
             CMSPosNum16.enabled = false;
             Comments16.enabled = false;*/

            gifModal.style.display = "none";

          }


        }
      });

    } else {
      Initials16.value = "";
      LastName16.value = "";
      Class16.value = "";
      Serial16.value = "";
      Day16.value = "";
      DailyRate16.value = "";
      CMSPosNum16.value = "";
      Comments16.value = "";
      Day16.mandatory = false;
      DailyRate16.mandatory = false;
      /* Day16.enabled = false;
       DailyRate16.enabled = false;
       CMSPosNum16.enabled = false;
       Comments16.enabled = false;*/
      gifModal.style.display = "none";
    }
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount16_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_GrossAmount16_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_TotalDays_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_TotalDays_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_TotalDailyRates_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_TotalDailyRates_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_TotalGrossAmount_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_TotalGrossAmount_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_textbox1690806213025_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_textbox1690806213025_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
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
                    //appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    OptionalReviewerDropDown.value = "";
                    OptionalReviewerDropDown.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    OptionalReviewerDropDown.items = [];
                    OptionalReviewerDropDown.value = "";
                    OptionalReviewerName.value = "";
                    OptionalReviewerUserId.value = "";
                    OptionalReviewerEmailId.value = "";
                    OptionalReviewerFlag.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerDropDown_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerDropDown_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
    var approverName = this.value;
    var approverEmplId;
    if (approverName != "Select Optional Reviewer" && approverName !== "") {
        approverName = approverName.substr(0, approverName.indexOf(' - '));
        OptionalReviewerName.value = approverName;
        //BudgetAnalystName_1.value = approverName;
        $.ajax({
            type: 'GET',
            url: "/bin/getFAERData",
            data: {
                action: "FAER_APPROVER_EMPID",
                approverName: approverName
            },
            dataType: 'json',
            success: function(myresopnse) {
                if (myresopnse[0].EMPLID !== null) {
                    approverEmplId = myresopnse[0].EMPLID;
                    getEmployeeDetails(approverEmplId);
                } else {
                     OptionalReviewerName.value = "";
                     OptionalReviewerUserId.value = "";
                     OptionalReviewerEmailId.value = "";
                     OptionalReviewerFlag.value = "";
                }
            }
        });
    } else {
        OptionalReviewerName.value = "";
        OptionalReviewerUserId.value = "";
        OptionalReviewerEmailId.value = "";
        OptionalReviewerFlag.value = "";
    }
}

function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
        if (approverEmplId !== null) {
            $.ajax({
                type: 'GET',
                url: "/bin/getFAERData",
                data: {
                    action: "FAER_APPROVER_DETAILS",
                    approverEmplID: approverEmplId
                },
                dataType: 'json',
                success: function(myresopnse) {
                    if (myresopnse.length !== 0) {
                        OptionalReviewerUserId.value = myresopnse[0].EMP_USERID;
                        //OptionalReviewerEmailId.value = myresopnse[0].EMAILID;
                        OptionalReviewerEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";   
                        OptionalReviewerFlag.value = "true";
                    } else {
                        OptionalReviewerName.value = "";
                        OptionalReviewerUserId.value = "";
                        OptionalReviewerEmailId.value = "";
                        OptionalReviewerFlag.value = "";
                    }
                }
            });
        }
    }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToOptional") {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        OptionalReviewerSignatureDate.value = d;

        OptionalReviewerSignatureDate.enabled = false;
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                OptionalReviewerSignature.value = userValue;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        OptionalReviewerSignatureDate.enabled = false;


    } else {
        OptionalReviewerSignature.value = "";
        OptionalReviewerSignatureDate.value = "";

    }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerSignature_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerSignature_valueCommit0 = function (scope) {
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_OptionalReviewerSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        AuthDate.value = d;

        AuthDate.enabled = false;
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                AuthSign.value = userValue;
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
if(StageIndicator.value === null){
  $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                   var userValue = myresopnse.userName;
                    AuthSign.value = userValue;
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthSign_valueCommit0 = function (scope) {
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_AuthDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;


        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToManager") {
  if (this.value == 1) {

    var dateString = new Date().toLocaleString("en-US", {

      timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
    }).replace(/[^ -~]/g, ' ');
    var dateObject = new Date(dateString);
    var curyear = dateObject.getFullYear();
    var curyearMonth = dateObject.getMonth() + 1;
    var curyearDay = dateObject.getDate();
    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    ManagerDate.value = d;

    ManagerDate.enabled = false;
    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedUserDetails",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse.userName;
        ManagerSign.value = userValue;
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });
    ManagerSign.enabled = false;

  } else {
    ManagerSign.value = "";
    ManagerDate.value = "";
  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_ManagerEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToPayroll") {
  if (this.value == 1) {

    /*  var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        PayRollDate.value = d;*/

    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedUserDetails",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse.userName;
        PayRollSign.value = userValue;
        PayRollDate.value = myresopnse.SERVER_DATE;
        PayRollEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
        
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });
    PayRollSign.enabled = false;
    PayRollDate.enabled = false;

  } else {
    PayRollSign.value = "";
    PayRollDate.value = "";
    PayRollEmail.value = "";

  }
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollSign_valueCommit0 = function (scope) {
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_PayRollEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_HiddenDeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_HiddenDeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  var DepartmentId = this.value;
  $.ajax({
    type: 'GET',
    url: "/bin/getTimekeeperDataForFacultyStipend",
    data: {
      deptId: deptId,
      agencyUnit: agencyUnit,
      fieldVal: fieldVal
    },
    dataType: 'json',

    success: function (result) {
      if (result.length !== 0) {
        ManagerName.value = result[0].NAME;
        ManagerEmail.value = result[0].EMAILID;
        ManagerUserId.value = result[0].USERID;
        
      }
    }
  });
}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated__click0 = function (scope) {
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;

  getPdf();




function getPdf() {
  
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/faculty-special-consultant-stipend/faculty-special-consultant-stipend');
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_saveguidedraft1596199610282_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_saveguidedraft1596199610282_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
 if(DepartmentId.value !== null){
   
        aftiaDescCWID.value = (DepartmentId.value + " " + Month.value + " " + Year.value);
   
  }
handleDraftSave(this);


        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_submit_13966870281576568571969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated_submit_13966870281576568571969_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var submitFlag = 0;

if (DepartmentId.value !== null) {

  aftiaDescCWID.value = (DepartmentId.value + " " + Month.value + " " + Year.value);

}
EmailSubject.value = "Faculty Special Consultant Stipend - " + " " + Unit.value;

InitiatorEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
ManagerEmail.value  = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
EmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
OptionalReviewerEmailId.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

if (submitFlag === 0) {
  guideBridge.submit();

}
        }
	}
}
/**
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated__click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated__click00 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/faculty-special-consultant-stipend/faculty-special-consultant-stipend');
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
 * @function faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated__click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_special_consultant_stipend_faculty_special_consultant_stipend.generated__click01 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/faculty-special-consultant-stipend/faculty-special-consultant-stipend');
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
