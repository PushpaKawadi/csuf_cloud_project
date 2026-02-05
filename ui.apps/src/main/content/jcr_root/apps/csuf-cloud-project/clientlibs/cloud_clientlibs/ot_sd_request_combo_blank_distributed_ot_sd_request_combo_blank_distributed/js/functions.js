/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value != "1"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";


$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
  //userValue = "jmccoy";
//alert("userValue="+userValue);
logUser.value = userValue;
  workflow_initiator.value = userValue;
    $.ajax({
        type: 'GET',
        url: "/bin/getOTSDUserID",
        data: {
            
            userID: userValue
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 1) {
            
             
                DeptID.value =myresopnse[0].DEPTID;
               CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                Ful_Division.value = myresopnse[0].FUL_DIVISION;
                //getAuthApproverData(DeptID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                
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
                        
                        /*deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                        DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                        EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;*/
                       
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
              debugger;
              
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
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  DeptID.value =myresopnse[n].DEPTID;
                   
                rButtonStatus = true;
                break;
                }
              }
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {
                
                /*PositionNumber.value = PosNumHidden.value;
                SSN.value = SSNHidden.value;
                DeptName.value = DeptNameHidden.value;
                EmplRCD.value = EmplRCDHidden.value;
                MiddleName.value = MiddleNameHidden.value;
                DeptID.value = deptHidden.value;
                LastName.value = lnameHidden.value;
                FirstName.value = fnameHidden.value;
                EmplID.value = EmpIdHidden.value;*/
                       CSU_Agency_Unit.value = myresopnse[n].CSU_SCO_AGENCY;
                Ful_Division.value = myresopnse[n].FUL_DIVISION;
               // getAuthApproverData(DeptID.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                        debugger;
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("rb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else{
                gifModal.style.display = "none";
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }             
                
            };
        }
    });
}
},
error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}
});
}
  
function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

		ManagerUserId.value = "";
        ManagerName.value = "";
        ManagerEmailId.value = "";
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
            success: function(result) {
                if (result.length === 1) {                  
                    ManagerName.value = result[0].NAME;
                    ManagerEmailId.value = result[0].EMAILID;
                    ManagerUserId.value = result[0].USERID;
                }                 
            }
        });
    }

        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
EmpREC1.enabled = false;
EmpREC2.enabled = false;
EmpREC3.enabled = false;
EmpREC4.enabled = false;
EmpREC5.enabled = false;
EmpREC6.enabled = false;
EmpREC7.enabled = false;

SSN1.enabled = false;
SSN2.enabled = false;
SSN3.enabled = false;
SSN4.enabled = false;
SSN5.enabled = false;
SSN6.enabled = false;
SSN7.enabled = false;

Initials1.enabled = false;
Initials2.enabled = false;
Initials3.enabled = false;
Initials4.enabled = false;
Initials5.enabled = false;
Initials6.enabled = false;
Initials7.enabled = false;

Lname1.enabled = false;
Lname2.enabled = false;
Lname3.enabled = false;
Lname4.enabled = false;
Lname5.enabled = false;
Lname6.enabled = false;
Lname7.enabled = false;
Class1.enabled = false;
Class2.enabled = false;
Class3.enabled = false;
Class4.enabled = false;
Class5.enabled = false;
Class6.enabled = false;
Class7.enabled = false;
Serial1.enabled = false;
Serial2.enabled = false;
Serial3.enabled = false;
Serial4.enabled = false;
Serial5.enabled = false;
Serial6.enabled = false;
Serial7.enabled = false;

ComboCode1.enabled = false;
ComboCode2.enabled = false;
ComboCode3.enabled = false;
ComboCode4.enabled = false;
ComboCode5.enabled = false;
ComboCode6.enabled = false;
ComboCode7.enabled = false;
DeptID.enabled = false;
if(StageIndicator.value === null){  
  managerSignSection.visible = false;
  PayrollSignatureSection.visible = false;
}
if(StageIndicator.value === "ToManager"){
  DeptID.enabled = false;
  Agency.enabled = false;
  Unit.enabled = false;
  MonthPeriod.enabled = false;
  YearPeriod.enabled = false;
  panelTable.enabled = false;
  Batch.enabled = false;
  AuthSign.enabled = false;
  AuthExt.enabled = false;
  AuthDate.enabled = false;
  AuthCB.enabled = false;
  managerSignSection.visible = true;
  PayrollSignatureSection.visible = false;
}
if(StageIndicator.value == "ToPayroll"){
  //panelTable.enabled = false;
  panelTable.enabled = true;
  DeptID.enabled = false;
  Agency.enabled = false;
  Unit.enabled = false;
  MonthPeriod.enabled = false;
  YearPeriod.enabled = false;
  Batch.enabled = true;
  AuthSign.enabled = false;
  AuthExt.enabled = false;
  AuthDate.enabled = false;
  AuthCB.enabled = false;
  managerSignSection.visible = true;
  managerSignSection.enabled = false;
  PayrollSignatureSection.visible = true;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== "ToPayroll"){
if(StageIndicator.value !== null){
TRC1.enabled = false;
TRC2.enabled = false;
TRC3.enabled = false;
TRC4.enabled = false;
TRC5.enabled = false;
TRC6.enabled = false;
TRC7.enabled = false;
}
Payroll1.enabled = false;
Payroll2.enabled = false;
Payroll3.enabled = false;
Payroll4.enabled = false;
Payroll5.enabled = false;
Payroll6.enabled = false;
Payroll7.enabled = false;

Dept1.enabled = false;
Dept2.enabled = false;
Dept3.enabled = false;
Dept4.enabled = false;
Dept5.enabled = false;
Dept6.enabled = false;
Dept7.enabled = false;

Hours1.enabled = false;
HDTHS1.enabled = false;
Hours2.enabled = false;
HDTHS2.enabled = false;
Hours3.enabled = false;
HDTHS3.enabled = false;
Hours4.enabled = false;
HDTHS4.enabled = false;
Hours5.enabled = false;
HDTHS5.enabled = false;
Hours6.enabled = false;
HDTHS6.enabled = false;
Hours7.enabled = false;
HDTHS7.enabled = false;

EmpREC1.enabled = false;
EmpREC2.enabled = false;
EmpREC3.enabled = false;
EmpREC4.enabled = false;
EmpREC5.enabled = false;
EmpREC6.enabled = false;
EmpREC7.enabled = false;

SSN1.enabled = false;
SSN2.enabled = false;
SSN3.enabled = false;
SSN4.enabled = false;
SSN5.enabled = false;
SSN6.enabled = false;
SSN7.enabled = false;

Initials1.enabled = false;
Initials2.enabled = false;
Initials3.enabled = false;
Initials4.enabled = false;
Initials5.enabled = false;
Initials6.enabled = false;
Initials7.enabled = false;

Lname1.enabled = false;
Lname2.enabled = false;
Lname3.enabled = false;
Lname4.enabled = false;
Lname5.enabled = false;
Lname6.enabled = false;
Lname7.enabled = false;

Class1.enabled = false;
Class2.enabled = false;
Class3.enabled = false;
Class4.enabled = false;
Class5.enabled = false;
Class6.enabled = false;
Class7.enabled = false;

Serial1.enabled = false;
Serial2.enabled = false;
Serial3.enabled = false;
Serial4.enabled = false;
Serial5.enabled = false;
Serial6.enabled = false;
Serial7.enabled = false;

Fund1.enabled = false;
Fund2.enabled = false;
Fund3.enabled = false;
Fund4.enabled = false;
Fund5.enabled = false;
Fund6.enabled = false;
Fund7.enabled = false;

ClassCombo1.enabled = false;
ClassCombo2.enabled = false;
ClassCombo3.enabled = false;
ClassCombo4.enabled = false;
ClassCombo5.enabled = false;
ClassCombo6.enabled = false;
ClassCombo7.enabled = false;

Project1.enabled = false;
Project2.enabled = false;
Project3.enabled = false;
Project4.enabled = false;
Project5.enabled = false;
Project6.enabled = false;
Project7.enabled = false;

Program1.enabled = false;
Program2.enabled = false;
Program3.enabled = false;
Program4.enabled = false;
Program5.enabled = false;
Program6.enabled = false;
Program7.enabled = false;

Account1.enabled = false;
Account2.enabled = false;
Account3.enabled = false;
Account4.enabled = false;
Account5.enabled = false;
Account6.enabled = false;
Account7.enabled = false;

ComboCode1.enabled = false;
ComboCode2.enabled = false;
ComboCode3.enabled = false;
ComboCode4.enabled = false;
ComboCode5.enabled = false;
ComboCode6.enabled = false;
ComboCode7.enabled = false;

}else{
  
Payroll1.enabled = false;
Payroll2.enabled = false;
Payroll3.enabled = false;
Payroll4.enabled = false;
Payroll5.enabled = false;
Payroll6.enabled = false;
Payroll7.enabled = false;

if(EmpID1.value !== null){
  Payroll1.enabled = true;
}
if(EmpID2.value !== null){
	Payroll2.enabled = true;
}
if(EmpID3.value !== null){
	Payroll3.enabled = true;
}
if(EmpID4.value !== null){
  Payroll4.enabled = true;
}
if(EmpID5.value !== null){
	Payroll5.enabled = true;
}
if(EmpID6.value !== null){
  Payroll6.enabled = true;
}
if(EmpID7.value !== null){
	Payroll7.enabled = true;
}

Dept1.enabled = false;
Dept2.enabled = false;
Dept3.enabled = false;
Dept4.enabled = false;
Dept5.enabled = false;
Dept6.enabled = false;
Dept7.enabled = false;

Hours1.enabled = false;
HDTHS1.enabled = false;
Hours2.enabled = false;
HDTHS2.enabled = false;
Hours3.enabled = false;
HDTHS3.enabled = false;
Hours4.enabled = false;
HDTHS4.enabled = false;
Hours5.enabled = false;
HDTHS5.enabled = false;
Hours6.enabled = false;
HDTHS6.enabled = false;
Hours7.enabled = false;
HDTHS7.enabled = false;

EmpREC1.enabled = false;
EmpREC2.enabled = false;
EmpREC3.enabled = false;
EmpREC4.enabled = false;
EmpREC5.enabled = false;
EmpREC6.enabled = false;
EmpREC7.enabled = false;

SSN1.enabled = false;
SSN2.enabled = false;
SSN3.enabled = false;
SSN4.enabled = false;
SSN5.enabled = false;
SSN6.enabled = false;
SSN7.enabled = false;

Initials1.enabled = false;
Initials2.enabled = false;
Initials3.enabled = false;
Initials4.enabled = false;
Initials5.enabled = false;
Initials6.enabled = false;
Initials7.enabled = false;

Lname1.enabled = false;
Lname2.enabled = false;
Lname3.enabled = false;
Lname4.enabled = false;
Lname5.enabled = false;
Lname6.enabled = false;
Lname7.enabled = false;

Class1.enabled = false;
Class2.enabled = false;
Class3.enabled = false;
Class4.enabled = false;
Class5.enabled = false;
Class6.enabled = false;
Class7.enabled = false;

Serial1.enabled = false;
Serial2.enabled = false;
Serial3.enabled = false;
Serial4.enabled = false;
Serial5.enabled = false;
Serial6.enabled = false;
Serial7.enabled = false;

Fund1.enabled = false;
Fund2.enabled = false;
Fund3.enabled = false;
Fund4.enabled = false;
Fund5.enabled = false;
Fund6.enabled = false;
Fund7.enabled = false;

ClassCombo1.enabled = false;
ClassCombo2.enabled = false;
ClassCombo3.enabled = false;
ClassCombo4.enabled = false;
ClassCombo5.enabled = false;
ClassCombo6.enabled = false;
ClassCombo7.enabled = false;

Project1.enabled = false;
Project2.enabled = false;
Project3.enabled = false;
Project4.enabled = false;
Project5.enabled = false;
Project6.enabled = false;
Project7.enabled = false;

Program1.enabled = false;
Program2.enabled = false;
Program3.enabled = false;
Program4.enabled = false;
Program5.enabled = false;
Program6.enabled = false;
Program7.enabled = false;

Account1.enabled = false;
Account2.enabled = false;
Account3.enabled = false;
Account4.enabled = false;
Account5.enabled = false;
Account6.enabled = false;
Account7.enabled = false;

ComboCode1.enabled = false;
ComboCode2.enabled = false;
ComboCode3.enabled = false;
ComboCode4.enabled = false;
ComboCode5.enabled = false;
ComboCode6.enabled = false;
ComboCode7.enabled = false;

TRC1.enabled = false;
TRC2.enabled = false;
TRC3.enabled = false;
TRC4.enabled = false;
TRC5.enabled = false;
TRC6.enabled = false;
TRC7.enabled = false;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Agency_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Agency_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Unit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Unit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  getAuthApproverData(DeptID.value,Ful_Division.value,Unit.value,Field_Value_2.value);
}

function getAuthApproverData(deptId,division,agencyUnit,fieldVal){

		ManagerUserId.value = "";
        ManagerName.value = "";
        ManagerEmailId.value = "";
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
            success: function(result) {
                if (result.length === 1) {                  
                    ManagerName.value = result[0].NAME;
                    ManagerEmailId.value = result[0].EMAILID;
                    ManagerUserId.value = result[0].USERID;
                }                 
            }
        });
    }
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Batch_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Batch_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  this.enabled = true;
  this.mandatory = "error";
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
 var cwid = this.value;
	if (cwid !== null) {
		if (this.value !== EmpID7.value && EmpID1.value !== EmpID2.value && EmpID1.value !== EmpID3.value && EmpID1.value !== EmpID4.value && EmpID1.value !== EmpID5.value && EmpID1.value !== EmpID6.value) {
			
			var userID = logUser.value;
			

			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getOTSDEmpID",
				data: {
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function (myresopnse) {
					
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
					Hours1.enabled = true;
					HDTHS1.enabled = true;
					
					Dept1.enabled = true;
					Fund1.enabled = true;
					ClassCombo1.enabled = true;
					Project1.enabled = true;
					Program1.enabled = true;
					Account1.enabled = true;
                    ComboCode1.enabled = true;
					
					if (myresopnse.length === 1) {

						EmpREC1.value = myresopnse[0].EMPL_RCD;
						Initials1.value = myresopnse[0].INITIALS;
						SSN1.value = myresopnse[0].NATIONAL_ID;
						var numbers = SSN1.value;
						//SSN1_1.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
                      
						SSN1_1.value =  numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);

						SSN1.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
						Lname1.value = myresopnse[0].LAST_NAME;
						Class1.value = myresopnse[0].JOBCODE;


						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];

						//col.push("EMPLID");

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
								//tabCell.innerHTML = myresopnse[k][col[l]];
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
						/*var cancelButton = document.createElement("input");
						cancelButton.type = "button";
						cancelButton.setAttribute("class", "cancelBtn");
						cancelButton.id = "cBtn";
						cancelButton.value = "Cancel";
						cancelButton.onclick = function(event) {
						    modal.style.display = "none";
						};
                    

						footerModal.appendChild(cancelButton);*/
						//if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
						var footerModal = document.getElementById("modal_footer");
						var okButton = document.createElement("input");
						okButton.type = "button";
						okButton.setAttribute("class", "okBtn");
						//okButton.id = "okBtn";
						okButton.value = "Ok";
						okButton.onclick = function (event) {
							/*if (cbidHidden.value === null) {
							    alert("Please select any one of the Staff");
							    modal.style.display = "block";
							}*/
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									EmpREC1.value = myresopnse[n].EMPL_RCD;
									Initials1.value = myresopnse[n].INITIALS;
									SSN1.value = myresopnse[n].NATIONAL_ID;
									var numbers = SSN1.value;
									SSN1_1.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
									SSN1.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
									Lname1.value = myresopnse[n].LAST_NAME;
									Class1.value = myresopnse[n].JOBCODE;
									// EmplID.value = this.value;
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

						EmpREC1.value = "";
						Initials1.value = "";
						SSN1.value = "";
						SSN1_1.value = "";
						Lname1.value = "";
						Class1.value = "";
						Serial1.value = "";
						TRC1.value = "";
						Hours1.value = "";
						HDTHS1.value = "";
						Payroll1.value = "";
						Dept1.value = "";
						Fund1.value = "";
						ClassCombo1.value = "";
						Project1.value = "";
						Program1.value = "";
						Account1.value = "";
						ComboCode1.value = "";
						Hours1.enabled = false;
						HDTHS1.enabled = false;
						
						Dept1.enabled = false;
						Fund1.enabled = false;
						ClassCombo1.enabled = false;
						Project1.enabled = false;
						Program1.enabled = false;
						Account1.enabled = false;
						ComboCode1.enabled = false;
						gifModal.style.display = "none";

					}

					span.onclick = function () {

						modal.style.display = "none";
					};

				}
			});
		} else {
          EmpID1.value = "";
			showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
			EmpREC1.value = "";
			Initials1.value = "";
			SSN1.value = "";
			SSN1_1.value = "";
			Lname1.value = "";
			Class1.value = "";
			Serial1.value = "";
			TRC1.value = "";
			Hours1.value = "";
			HDTHS1.value = "";
			Payroll1.value = "";
			Dept1.value = "";
			Fund1.value = "";
			ClassCombo1.value = "";
			Project1.value = "";
			Program1.value = "";
			Account1.value = "";
			ComboCode1.value = "";
			Hours1.enabled = false;
			HDTHS1.enabled = false;
			
			Dept1.enabled = false;
			Fund1.enabled = false;
			ClassCombo1.enabled = false;
			Project1.enabled = false;
			Program1.enabled = false;
			Account1.enabled = false;
			ComboCode1.enabled = false;
			gifModal.style.display = "none";
		}
	} else {

		showErrorModal("Alert!", "No matching records found");
		EmpREC1.value = "";
		Initials1.value = "";
		SSN1.value = "";
		SSN1_1.value = "";
		Lname1.value = "";
		Class1.value = "";
		Serial1.value = "";
		TRC1.value = "";
		Hours1.value = "";
		HDTHS1.value = "";
		Payroll1.value = "";
		Dept1.value = "";
		Fund1.value = "";
		ClassCombo1.value = "";
		Project1.value = "";
		Program1.value = "";
		Account1.value = "";
		ComboCode1.value = "";
		Hours1.enabled = false;
		HDTHS1.enabled = false;
		
		Dept1.enabled = false;
		Fund1.enabled = false;
		ClassCombo1.enabled = false;
		Project1.enabled = false;
		Program1.enabled = false;
		Account1.enabled = false;
		ComboCode1.enabled = false;
		gifModal.style.display = "none";

	}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo1.value;
var prog = this.value;
if(StageIndicator.value === null){

if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
  //return false;
}
}
/*else{
  return true;
}*/


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if (StageIndicator.value === null) {
	var cwid = this.value;
	if (cwid !== null) {
		if (EmpID2.value !== EmpID7.value && EmpID2.value !== EmpID1.value && EmpID2.value !== EmpID3.value && EmpID2.value !== EmpID4.value && EmpID2.value !== EmpID5.value && EmpID2.value !== EmpID6.value) {
			var userID = logUser.value;

		
				var gifModal = document.getElementById('gifModal');
				gifModal.style.display = "block";
				$.ajax({
					type: 'GET',
					url: "/bin/getOTSDEmpID",
					data: {
						cwid: cwid,
						userID: userID
					},
					dataType: 'json',

					success: function (myresopnse) {
						//alert("myresopnse.length="+myresopnse);
						// debugger;
						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];
						Hours2.enabled = true;
						HDTHS2.enabled = true;
						
						Dept2.enabled = true;
						Fund2.enabled = true;
						ClassCombo2.enabled = true;
						Project2.enabled = true;
						Program2.enabled = true;
						Account2.enabled = true;
						ComboCode2.enabled = true;
						if (myresopnse.length === 1) {

							EmpREC2.value = myresopnse[0].EMPL_RCD;
							Initials2.value = myresopnse[0].INITIALS;
							SSN2.value = myresopnse[0].NATIONAL_ID;
							var numbers = SSN2.value;
							SSN2_2.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
							SSN2.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
							Lname2.value = myresopnse[0].LAST_NAME;
							Class2.value = myresopnse[0].JOBCODE;


							gifModal.style.display = "none";

						} else if (myresopnse.length > 1) {

							gifModal.style.display = "none";
							modal.style.display = "block";

							var col = [];

							//col.push("EMPLID");

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
								// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
								var button = document.createElement("input");
								button.type = "radio";
								button.setAttribute("class", "rb");
								button.id = "rbtn";
								button.name = "group";
								button.value = "";


								var tabCell2 = tr.insertCell(-1);
								tabCell2.appendChild(button);
								for (var l = 0; l < col.length; l++) {
									var tabCell = tr.insertCell(-1);
									//tabCell.innerHTML = myresopnse[k][col[l]];
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
							/*var cancelButton = document.createElement("input");
						cancelButton.type = "button";
						cancelButton.setAttribute("class", "cancelBtn");
						cancelButton.id = "cBtn";
						cancelButton.value = "Cancel";
						cancelButton.onclick = function(event) {
						    modal.style.display = "none";
						};
                    

						footerModal.appendChild(cancelButton);*/
							//if(table.rows[2].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
							var footerModal = document.getElementById("modal_footer");
							var okButton = document.createElement("input");
							okButton.type = "button";
							okButton.setAttribute("class", "okBtn");
							//okButton.id = "okBtn";
							okButton.value = "Ok";
							okButton.onclick = function (event) {
								/*if (cbidHidden.value === null) {
								    alert("Please select any one of the Staff");
								    modal.style.display = "block";
								}*/
								var n;
								var rButtonStatus;
								//var rButtonStatusFalse;
								var rButtons = document.getElementsByClassName("rb");
								for (n = 0; n < rButtons.length; n++) {
									if (rButtons[n].checked === false) {

										rButtonStatus = false;
									} else {

										EmpREC2.value = myresopnse[n].EMPL_RCD;
										Initials2.value = myresopnse[n].INITIALS;
										SSN2.value = myresopnse[n].NATIONAL_ID;
										var numbers = SSN2.value;
										SSN2_2.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
										SSN2.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
										Lname2.value = myresopnse[n].LAST_NAME;
										Class2.value = myresopnse[n].JOBCODE;
										// EmplID.value = this.value;
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
							EmpREC2.value = "";
							Initials2.value = "";
							SSN2.value = "";
							SSN2_2.value = "";
							Lname2.value = "";
							ClassCombo2.value = "";
							Serial2.value = "";
							TRC2.value = "";
							Hours2.value = "";
							HDTHS2.value = "";
							Payroll2.value = "";
							Dept2.value = "";
							Fund2.value = "";
							Class2.value = "";
							Project2.value = "";
							Program2.value = "";
							Account2.value = "";
							ComboCode2.value = "";
							Hours2.enabled = false;
							HDTHS2.enabled = false;
							
							Dept2.enabled = false;
							Fund2.enabled = false;
							ClassCombo2.enabled = false;
							Project2.enabled = false;
							Program2.enabled = false;
							Account2.enabled = false;
							ComboCode2.enabled = false;

							gifModal.style.display = "none";

						}

						span.onclick = function () {

							modal.style.display = "none";
						};

					}
				});
			} else {
               EmpID2.value = "";
				showErrorModal("Alert!", "This Employee ID is already added, Please add a different one");
				EmpREC2.value = "";
				Initials2.value = "";
				SSN2.value = "";
				SSN2_2.value = "";
				Lname2.value = "";
				ClassCombo2.value = "";
				Serial2.value = "";
				TRC2.value = "";
				Hours2.value = "";
				HDTHS2.value = "";
				Payroll2.value = "";
				Dept2.value = "";
				Fund2.value = "";
				Class2.value = "";
				Project2.value = "";
				Program2.value = "";
				Account2.value = "";
				ComboCode2.value = "";
				Hours2.enabled = false;
				HDTHS2.enabled = false;
				
				Dept2.enabled = false;
				Fund2.enabled = false;
				ClassCombo2.enabled = false;
				Project2.enabled = false;
				Program2.enabled = false;
				Account2.enabled = false;
				ComboCode2.enabled = false;

				gifModal.style.display = "none";

			}
		} else {
			EmpID2.value = null;
			showErrorModal("Alert !", "No matching records found");
			EmpREC2.value = "";
			Initials2.value = "";
			SSN2.value = "";
			SSN2_2.value = "";
			Lname2.value = "";
			ClassCombo2.value = "";
			Serial2.value = "";
			TRC2.value = "";
			Hours2.value = "";
			HDTHS2.value = "";
			Payroll2.value = "";
			Dept2.value = "";
			Fund2.value = "";
			Class2.value = "";
			Project2.value = "";
			Program2.value = "";
			Account2.value = "";
			ComboCode2.value = "";
			Hours2.enabled = false;
			HDTHS2.enabled = false;
			
			Dept2.enabled = false;
			Fund2.enabled = false;
			ClassCombo2.enabled = false;
			Project2.enabled = false;
			Program2.enabled = false;
			Account2.enabled = false;
			ComboCode2.enabled = false;

			gifModal.style.display = "none";
		}
	}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo2.value;
var prog = this.value;

if(StageIndicator.value === null){
if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if (StageIndicator.value === null) {
	var cwid = this.value;
	if (cwid !== null) {
		if (EmpID3.value !== EmpID7.value && EmpID3.value !== EmpID1.value && EmpID3.value !== EmpID2.value && EmpID3.value !== EmpID4.value && EmpID3.value !== EmpID5.value && EmpID3.value !== EmpID6.value) {
			var userID = logUser.value;

			
				var gifModal = document.getElementById('gifModal');
				gifModal.style.display = "block";
				$.ajax({
					type: 'GET',
					url: "/bin/getOTSDEmpID",
					data: {
						cwid: cwid,
						userID: userID
					},
					dataType: 'json',

					success: function (myresopnse) {
						//alert("myresopnse.length="+myresopnse);
						// debugger;
						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];
						Hours3.enabled = true;
						HDTHS3.enabled = true;
						
						Dept3.enabled = true;
						Fund3.enabled = true;
						ClassCombo3.enabled = true;
						Project3.enabled = true;
						Program3.enabled = true;
						Account3.enabled = true;
						ComboCode3.enabled = true;
						if (myresopnse.length === 1) {

							EmpREC3.value = myresopnse[0].EMPL_RCD;
							Initials3.value = myresopnse[0].INITIALS;
							SSN3.value = myresopnse[0].NATIONAL_ID;
							var numbers = SSN3.value;
							SSN3_3.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
							SSN3.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
							Lname3.value = myresopnse[0].LAST_NAME;
							Class3.value = myresopnse[0].JOBCODE;


							gifModal.style.display = "none";

						} else if (myresopnse.length > 1) {

							gifModal.style.display = "none";
							modal.style.display = "block";

							var col = [];

							//col.push("EMPLID");

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
								// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
								var button = document.createElement("input");
								button.type = "radio";
								button.setAttribute("class", "rb");
								button.id = "rbtn";
								button.name = "group";
								button.value = "";


								var tabCell3 = tr.insertCell(-1);
								tabCell3.appendChild(button);
								for (var l = 0; l < col.length; l++) {
									var tabCell = tr.insertCell(-1);
									//tabCell.innerHTML = myresopnse[k][col[l]];
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
							/*var cancelButton = document.createElement("input");
							cancelButton.type = "button";
							cancelButton.setAttribute("class", "cancelBtn");
							cancelButton.id = "cBtn";
							cancelButton.value = "Cancel";
							cancelButton.onclick = function(event) {
							    modal.style.display = "none";
							};
                    

							footerModal.appendChild(cancelButton);*/
							//if(table.rows[3].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
							var footerModal = document.getElementById("modal_footer");
							var okButton = document.createElement("input");
							okButton.type = "button";
							okButton.setAttribute("class", "okBtn");
							//okButton.id = "okBtn";
							okButton.value = "Ok";
							okButton.onclick = function (event) {
								/*if (cbidHidden.value === null) {
								    alert("Please select any one of the Staff");
								    modal.style.display = "block";
								}*/
								var n;
								var rButtonStatus;
								//var rButtonStatusFalse;
								var rButtons = document.getElementsByClassName("rb");
								for (n = 0; n < rButtons.length; n++) {
									if (rButtons[n].checked === false) {

										rButtonStatus = false;
									} else {

										EmpREC3.value = myresopnse[n].EMPL_RCD;
										Initials3.value = myresopnse[n].INITIALS;
										SSN3.value = myresopnse[n].NATIONAL_ID;
										var numbers = SSN3.value;
										SSN3_3.value = numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
										SSN3.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
										Lname3.value = myresopnse[n].LAST_NAME;
										Class3.value = myresopnse[n].JOBCODE;
										// EmplID.value = this.value;
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
							EmpREC3.value = "";
							Initials3.value = "";
							SSN3.value = "";
							Lname3.value = "";
							Class3.value = "";
							Serial3.value = "";
							SSN3_3.value = "";
							TRC3.value = "";
							Hours3.value = "";
							HDTHS3.value = "";
							Payroll3.value = "";
							Dept3.value = "";
							Fund3.value = "";
							ClassCombo3.value = "";
							Project3.value = "";
							Program3.value = "";
							Account3.value = "";
							ComboCode3.value = "";
							Hours3.enabled = false;
							HDTHS3.enabled = false;
							
							Dept3.enabled = false;
							Fund3.enabled = false;
							ClassCombo3.enabled = false;
							Project3.enabled = false;
							Program3.enabled = false;
							Account3.enabled = false;
							ComboCode3.enabled = false;

							gifModal.style.display = "none";

						}

						span.onclick = function () {

							modal.style.display = "none";
						};

					}
				});
			} else {
				EmpID3.value = null;
				showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");

				EmpREC3.value = "";
				Initials3.value = "";
				SSN3.value = "";
				Lname3.value = "";
				Class3.value = "";
				Serial3.value = "";
				SSN3_3.value = "";
				TRC3.value = "";
				Hours3.value = "";
				HDTHS3.value = "";
				Payroll3.value = "";
				Dept3.value = "";
				Fund3.value = "";
				ClassCombo3.value = "";
				Project3.value = "";
				Program3.value = "";
				Account3.value = "";
				ComboCode3.value = "";
				Hours3.enabled = false;
				HDTHS3.enabled = false;
			
				Dept3.enabled = false;
				Fund3.enabled = false;
				ClassCombo3.enabled = false;
				Project3.enabled = false;
				Program3.enabled = false;
				Account3.enabled = false;
				ComboCode3.enabled = false;

				gifModal.style.display = "none";
			}
		} else {
			showErrorModal("Alert!", "No matching records found");
			EmpREC3.value = "";
			Initials3.value = "";
			SSN3.value = "";
			Lname3.value = "";
			Class3.value = "";
			Serial3.value = "";
			SSN3_3.value = "";
			TRC3.value = "";
			Hours3.value = "";
			HDTHS3.value = "";
			Payroll3.value = "";
			Dept3.value = "";
			Fund3.value = "";
			ClassCombo3.value = "";
			Project3.value = "";
			Program3.value = "";
			Account3.value = "";
			ComboCode3.value = "";
			Hours3.enabled = false;
			HDTHS3.enabled = false;
			
			Dept3.enabled = false;
			Fund3.enabled = false;
			ClassCombo3.enabled = false;
			Project3.enabled = false;
			Program3.enabled = false;
			Account3.enabled = false;
			ComboCode3.enabled = false;
		}
	}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo3.value;
var prog = this.value;
if(StageIndicator.value === null){

if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
}
}

        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if (StageIndicator.value === null) {
	var cwid = this.value;
		if (cwid !== null) {
	if (EmpID4.value !== EmpID7.value && EmpID4.value !== EmpID1.value && EmpID4.value !== EmpID2.value && EmpID4.value !== EmpID3.value && EmpID4.value !== EmpID5.value && EmpID4.value !== EmpID6.value) {
		var userID = logUser.value;
		
			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getOTSDEmpID",
				data: {
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function (myresopnse) {
					//alert("myresopnse.length="+myresopnse);
					// debugger;
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
					Hours4.enabled = true;
					HDTHS4.enabled = true;
					
					Dept4.enabled = true;
					Fund4.enabled = true;
					ClassCombo4.enabled = true;
					Project4.enabled = true;
					Program4.enabled = true;
					Account4.enabled = true;
					ComboCode4.enabled = true;
					if (myresopnse.length === 1) {

						EmpREC4.value = myresopnse[0].EMPL_RCD;
						Initials4.value = myresopnse[0].INITIALS;
						SSN4.value = myresopnse[0].NATIONAL_ID;
						var numbers = SSN4.value;
						SSN4_4.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
						SSN4.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
						Lname4.value = myresopnse[0].LAST_NAME;
						Class4.value = myresopnse[0].JOBCODE;


						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];

						//col.push("EMPLID");

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
							// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
							var button = document.createElement("input");
							button.type = "radio";
							button.setAttribute("class", "rb");
							button.id = "rbtn";
							button.name = "group";
							button.value = "";


							var tabCell4 = tr.insertCell(-1);
							tabCell4.appendChild(button);
							for (var l = 0; l < col.length; l++) {
								var tabCell = tr.insertCell(-1);
								//tabCell.innerHTML = myresopnse[k][col[l]];
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
						/*var cancelButton = document.createElement("input");
						cancelButton.type = "button";
						cancelButton.setAttribute("class", "cancelBtn");
						cancelButton.id = "cBtn";
						cancelButton.value = "Cancel";
						cancelButton.onclick = function(event) {
						    modal.style.display = "none";
						};
                    

						footerModal.appendChild(cancelButton);*/
						//if(table.rows[4].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
						var footerModal = document.getElementById("modal_footer");
						var okButton = document.createElement("input");
						okButton.type = "button";
						okButton.setAttribute("class", "okBtn");
						//okButton.id = "okBtn";
						okButton.value = "Ok";
						okButton.onclick = function (event) {
							/*if (cbidHidden.value === null) {
							    alert("Please select any one of the Staff");
							    modal.style.display = "block";
							}*/
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									EmpREC4.value = myresopnse[n].EMPL_RCD;
									Initials4.value = myresopnse[n].INITIALS;
									SSN4.value = myresopnse[n].NATIONAL_ID;
									var numbers = SSN4.value;
									SSN4_4.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
									SSN4.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
									Lname4.value = myresopnse[n].LAST_NAME;
									Class4.value = myresopnse[n].JOBCODE;
									// EmplID.value = this.value;
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
						EmpREC4.value = "";
						Initials4.value = "";
						SSN4.value = "";
						Lname4.value = "";
						Class4.value = "";
						Serial4.value = "";
						TRC4.value = "";
						Hours4.value = "";
						HDTHS4.value = "";
						Payroll4.value = "";
						Dept4.value = "";
						Fund4.value = "";
						ClassCombo4.value = "";
						Project4.value = "";
						Program4.value = "";
						Account4.value = "";
						ComboCode4.value = "";
						Hours4.enabled = false;
						HDTHS4.enabled = false;
						
						Dept4.enabled = false;
						Fund4.enabled = false;
						ClassCombo4.enabled = false;
						Project4.enabled = false;
						Program4.enabled = false;
						Account4.enabled = false;
						ComboCode4.enabled = false;
						SSN4_4.value = "";
						gifModal.style.display = "none";

					}

					span.onclick = function () {

						modal.style.display = "none";
					};

				}
			});
		}
		else{
          showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
			EmpID4.value = null;
			EmpREC4.value = "";
						Initials4.value = "";
						SSN4.value = "";
						Lname4.value = "";
						Class4.value = "";
						Serial4.value = "";
						TRC4.value = "";
						Hours4.value = "";
						HDTHS4.value = "";
						Payroll4.value = "";
						Dept4.value = "";
						Fund4.value = "";
						ClassCombo4.value = "";
						Project4.value = "";
						Program4.value = "";
						Account4.value = "";
						ComboCode4.value = "";
						Hours4.enabled = false;
						HDTHS4.enabled = false;
						
						Dept4.enabled = false;
						Fund4.enabled = false;
						ClassCombo4.enabled = false;
						Project4.enabled = false;
						Program4.enabled = false;
						Account4.enabled = false;
						ComboCode4.enabled = false;
						SSN4_4.value = "";
						gifModal.style.display = "none";
		
		}
	} else {
		
		showErrorModal("Alert!", "No matching records found");
						EmpREC4.value = "";
						Initials4.value = "";
						SSN4.value = "";
						Lname4.value = "";
						Class4.value = "";
						Serial4.value = "";
						TRC4.value = "";
						Hours4.value = "";
						HDTHS4.value = "";
						Payroll4.value = "";
						Dept4.value = "";
						Fund4.value = "";
						ClassCombo4.value = "";
						Project4.value = "";
						Program4.value = "";
						Account4.value = "";
						ComboCode4.value = "";
						Hours4.enabled = false;
						HDTHS4.enabled = false;
						
						Dept4.enabled = false;
						Fund4.enabled = false;
						ClassCombo4.enabled = false;
						Project4.enabled = false;
						Program4.enabled = false;
						Account4.enabled = false;
						ComboCode4.enabled = false;
						SSN4_4.value = "";
						gifModal.style.display = "none";
		
	}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo4.value;
var prog = this.value;
if(StageIndicator.value === null){

if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
}
}

        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
	var cwid = this.value;
	if (cwid !== null) {
		if (EmpID5.value !== EmpID7.value && EmpID5.value !== EmpID1.value && EmpID5.value !== EmpID2.value && EmpID5.value !== EmpID3.value && EmpID5.value !== EmpID4.value && EmpID5.value !== EmpID6.value) {
			var userID = logUser.value;

			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getOTSDEmpID",
				data: {
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function (myresopnse) {
					//alert("myresopnse.length="+myresopnse);
					// debugger;
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
					Hours5.enabled = true;
					HDTHS5.enabled = true;
					
					Dept5.enabled = true;
					Fund5.enabled = true;
					ClassCombo5.enabled = true;
					Project5.enabled = true;
					Program5.enabled = true;
					Account5.enabled = true;
					ComboCode5.enabled = true;
					if (myresopnse.length === 1) {

						EmpREC5.value = myresopnse[0].EMPL_RCD;
						Initials5.value = myresopnse[0].INITIALS;
						SSN5.value = myresopnse[0].NATIONAL_ID;
						var numbers = SSN5.value;
						SSN5_5.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
						SSN5.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
						Lname5.value = myresopnse[0].LAST_NAME;
						Class5.value = myresopnse[0].JOBCODE;


						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];

						//col.push("EMPLID");

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
							// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
							var button = document.createElement("input");
							button.type = "radio";
							button.setAttribute("class", "rb");
							button.id = "rbtn";
							button.name = "group";
							button.value = "";


							var tabCell5 = tr.insertCell(-1);
							tabCell5.appendChild(button);
							for (var l = 0; l < col.length; l++) {
								var tabCell = tr.insertCell(-1);
								//tabCell.innerHTML = myresopnse[k][col[l]];
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
						/*var cancelButton = document.createElement("input");
						cancelButton.type = "button";
						cancelButton.setAttribute("class", "cancelBtn");
						cancelButton.id = "cBtn";
						cancelButton.value = "Cancel";
						cancelButton.onclick = function(event) {
						    modal.style.display = "none";
						};
                    

						footerModal.appendChild(cancelButton);*/
						//if(table.rows[5].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
						var footerModal = document.getElementById("modal_footer");
						var okButton = document.createElement("input");
						okButton.type = "button";
						okButton.setAttribute("class", "okBtn");
						//okButton.id = "okBtn";
						okButton.value = "Ok";
						okButton.onclick = function (event) {
							/*if (cbidHidden.value === null) {
							    alert("Please select any one of the Staff");
							    modal.style.display = "block";
							}*/
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									EmpREC5.value = myresopnse[n].EMPL_RCD;
									Initials5.value = myresopnse[n].INITIALS;
									SSN5.value = myresopnse[n].NATIONAL_ID;
									var numbers = SSN5.value;
									SSN5_5.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
									SSN5.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
									Lname5.value = myresopnse[n].LAST_NAME;
									Class5.value = myresopnse[n].JOBCODE;
									// EmplID.value = this.value;
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
						EmpREC5.value = "";
						Initials5.value = "";
						SSN5.value = "";
						Lname5.value = "";
						Class5.value = "";
						SSN5_5.value = "";
						Serial5.value = "";
						TRC5.value = "";
						Hours5.value = "";
						HDTHS5.value = "";
						Payroll5.value = "";
						Dept5.value = "";
						Fund5.value = "";
						ClassCombo5.value = "";
						Project5.value = "";
						Program5.value = "";
						Account5.value = "";
						ComboCode5.value = "";
						Hours5.enabled = false;
						HDTHS5.enabled = false;
						
						Dept5.enabled = false;
						Fund5.enabled = false;
						ClassCombo5.enabled = false;
						Project5.enabled = false;
						Program5.enabled = false;
						Account5.enabled = false;
						ComboCode5.enabled = false;

						gifModal.style.display = "none";

					}

					span.onclick = function () {

						modal.style.display = "none";
					};

				}
			});
		} else {
			EmpID5.value = null;
			showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
			EmpREC5.value = "";
			Initials5.value = "";
			SSN5.value = "";
			Lname5.value = "";
			Class5.value = "";
			SSN5_5.value = "";
			Serial5.value = "";
			TRC5.value = "";
			Hours5.value = "";
			HDTHS5.value = "";
			Payroll5.value = "";
			Dept5.value = "";
			Fund5.value = "";
			ClassCombo5.value = "";
			Project5.value = "";
			Program5.value = "";
			Account5.value = "";
			ComboCode5.value = "";
			Hours5.enabled = false;
			HDTHS5.enabled = false;
			
			Dept5.enabled = false;
			Fund5.enabled = false;
			ClassCombo5.enabled = false;
			Project5.enabled = false;
			Program5.enabled = false;
			Account5.enabled = false;
			ComboCode5.enabled = false;

			gifModal.style.display = "none";
		}
	} else {
		showErrorModal("Alert!", "No matching records found");
		EmpREC5.value = "";
		Initials5.value = "";
		SSN5.value = "";
		Lname5.value = "";
		Class5.value = "";
		SSN5_5.value = "";
		Serial5.value = "";
		TRC5.value = "";
		Hours5.value = "";
		HDTHS5.value = "";
		Payroll5.value = "";
		Dept5.value = "";
		Fund5.value = "";
		ClassCombo5.value = "";
		Project5.value = "";
		Program5.value = "";
		Account5.value = "";
		ComboCode5.value = "";
		Hours5.enabled = false;
		HDTHS5.enabled = false;
		
		Dept5.enabled = false;
		Fund5.enabled = false;
		ClassCombo5.enabled = false;
		Project5.enabled = false;
		Program5.enabled = false;
		Account5.enabled = false;
		ComboCode5.enabled = false;

		gifModal.style.display = "none";
	}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo5.value;
var prog = this.value;
if(StageIndicator.value === null){

if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
	var cwid = this.value;
	if (cwid !== null) {
		if (EmpID6.value !== EmpID7.value && EmpID6.value !== EmpID1.value && EmpID6.value !== EmpID2.value && EmpID6.value !== EmpID3.value && EmpID6.value !== EmpID4.value && EmpID6.value !== EmpID5.value) {
			var userID = logUser.value;

			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getOTSDEmpID",
				data: {
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function (myresopnse) {
					//alert("myresopnse.length="+myresopnse);
					// debugger;
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
					Hours6.enabled = true;
					HDTHS6.enabled = true;
					
					Dept6.enabled = true;
					Fund6.enabled = true;
					ClassCombo6.enabled = true;
					Project6.enabled = true;
					Program6.enabled = true;
					Account6.enabled = true;
					ComboCode6.enabled = true;
					if (myresopnse.length === 1) {

						EmpREC6.value = myresopnse[0].EMPL_RCD;
						Initials6.value = myresopnse[0].INITIALS;
						SSN6.value = myresopnse[0].NATIONAL_ID;
						var numbers = SSN6.value;
						SSN6_6.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
						SSN6.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
						Lname6.value = myresopnse[0].LAST_NAME;
						Class6.value = myresopnse[0].JOBCODE;


						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];

						//col.push("EMPLID");

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
							// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
							var button = document.createElement("input");
							button.type = "radio";
							button.setAttribute("class", "rb");
							button.id = "rbtn";
							button.name = "group";
							button.value = "";


							var tabCell6 = tr.insertCell(-1);
							tabCell6.appendChild(button);
							for (var l = 0; l < col.length; l++) {
								var tabCell = tr.insertCell(-1);
								//tabCell.innerHTML = myresopnse[k][col[l]];
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
						/*var cancelButton = document.createElement("input");
						cancelButton.type = "button";
						cancelButton.setAttribute("class", "cancelBtn");
						cancelButton.id = "cBtn";
						cancelButton.value = "Cancel";
						cancelButton.onclick = function(event) {
						    modal.style.display = "none";
						};
                    

						footerModal.appendChild(cancelButton);*/
						//if(table.rows[6].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
						var footerModal = document.getElementById("modal_footer");
						var okButton = document.createElement("input");
						okButton.type = "button";
						okButton.setAttribute("class", "okBtn");
						//okButton.id = "okBtn";
						okButton.value = "Ok";
						okButton.onclick = function (event) {
							/*if (cbidHidden.value === null) {
							    alert("Please select any one of the Staff");
							    modal.style.display = "block";
							}*/
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									EmpREC6.value = myresopnse[n].EMPL_RCD;
									Initials6.value = myresopnse[n].INITIALS;
									SSN6.value = myresopnse[n].NATIONAL_ID;
									var numbers = SSN6.value;
									SSN6_6.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
									SSN6.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
									Lname6.value = myresopnse[n].LAST_NAME;
									Class6.value = myresopnse[n].JOBCODE;
									// EmplID.value = this.value;
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
						EmpREC6.value = "";
						Initials6.value = "";
						SSN6.value = "";
						Lname6.value = "";
						Class6.value = "";
						SSN6_6.value = "";
						Serial6.value = "";
						TRC6.value = "";
						Hours6.value = "";
						HDTHS6.value = "";
						Payroll6.value = "";
						Dept6.value = "";
						Fund6.value = "";
						ClassCombo6.value = "";
						Project6.value = "";
						Program6.value = "";
						Account6.value = "";
						ComboCode6.value = "";
						Hours6.enabled = false;
						HDTHS6.enabled = false;
						
						Dept6.enabled = false;
						Fund6.enabled = false;
						ClassCombo6.enabled = false;
						Project6.enabled = false;
						Program6.enabled = false;
						Account6.enabled = false;
						ComboCode6.enabled = false;

						gifModal.style.display = "none";

					}

					span.onclick = function () {

						modal.style.display = "none";
					};

				}
			});
		} else {
			EmpID6.value = null;
			showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
			EmpREC6.value = "";
			Initials6.value = "";
			SSN6.value = "";
			Lname6.value = "";
			Class6.value = "";
			SSN6_6.value = "";
			Serial6.value = "";
			TRC6.value = "";
			Hours6.value = "";
			HDTHS6.value = "";
			Payroll6.value = "";
			Dept6.value = "";
			Fund6.value = "";
			ClassCombo6.value = "";
			Project6.value = "";
			Program6.value = "";
			Account6.value = "";
			ComboCode6.value = "";
			Hours6.enabled = false;
			HDTHS6.enabled = false;
			
			Dept6.enabled = false;
			Fund6.enabled = false;
			ClassCombo6.enabled = false;
			Project6.enabled = false;
			Program6.enabled = false;
			Account6.enabled = false;
			ComboCode6.enabled = false;

			gifModal.style.display = "none";
		}
	} else {
		showErrorModal("Alert!", "No matching records found");
		EmpREC6.value = "";
		Initials6.value = "";
		SSN6.value = "";
		Lname6.value = "";
		Class6.value = "";
		SSN6_6.value = "";
		Serial6.value = "";
		TRC6.value = "";
		Hours6.value = "";
		HDTHS6.value = "";
		Payroll6.value = "";
		Dept6.value = "";
		Fund6.value = "";
		ClassCombo6.value = "";
		Project6.value = "";
		Program6.value = "";
		Account6.value = "";
		ComboCode6.value = "";
		Hours6.enabled = false;
		HDTHS6.enabled = false;
		
		Dept6.enabled = false;
		Fund6.enabled = false;
		ClassCombo6.enabled = false;
		Project6.enabled = false;
		Program6.enabled = false;
		Account6.enabled = false;
		ComboCode6.enabled = false;

		gifModal.style.display = "none";
	}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo6.value;
var prog = this.value;

if(StageIndicator.value === null){
if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_EmpID7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
	var cwid = this.value;
	if (cwid !== null) {
		if (EmpID7.value !== EmpID6.value && EmpID7.value !== EmpID1.value && EmpID7.value !== EmpID2.value && EmpID7.value !== EmpID3.value && EmpID7.value !== EmpID4.value && EmpID7.value !== EmpID5.value) {
			var userID = logUser.value;

			var gifModal = document.getElementById('gifModal');
			gifModal.style.display = "block";
			$.ajax({
				type: 'GET',
				url: "/bin/getOTSDEmpID",
				data: {
					cwid: cwid,
					userID: userID
				},
				dataType: 'json',

				success: function (myresopnse) {
					//alert("myresopnse.length="+myresopnse);
					// debugger;
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
					Hours7.enabled = true;
					HDTHS7.enabled = true;
					
					Dept7.enabled = true;
					Fund7.enabled = true;
					ClassCombo7.enabled = true;
					Project7.enabled = true;
					Program7.enabled = true;
					Account7.enabled = true;
					ComboCode7.enabled = true;
					if (myresopnse.length === 1) {

						EmpREC7.value = myresopnse[0].EMPL_RCD;
						Initials7.value = myresopnse[0].INITIALS;
						SSN7.value = myresopnse[0].NATIONAL_ID;
						var numbers = SSN7.value;
						SSN7_7.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
						SSN7.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
						Lname7.value = myresopnse[0].LAST_NAME;
						Class7.value = myresopnse[0].JOBCODE;


						gifModal.style.display = "none";

					} else if (myresopnse.length > 1) {

						gifModal.style.display = "none";
						modal.style.display = "block";

						var col = [];

						//col.push("EMPLID");

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
							// tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
							var button = document.createElement("input");
							button.type = "radio";
							button.setAttribute("class", "rb");
							button.id = "rbtn";
							button.name = "group";
							button.value = "";


							var tabCell7 = tr.insertCell(-1);
							tabCell7.appendChild(button);
							for (var l = 0; l < col.length; l++) {
								var tabCell = tr.insertCell(-1);
								//tabCell.innerHTML = myresopnse[k][col[l]];
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
						/*var cancelButton = document.createElement("input");
						cancelButton.type = "button";
						cancelButton.setAttribute("class", "cancelBtn");
						cancelButton.id = "cBtn";
						cancelButton.value = "Cancel";
						cancelButton.onclick = function(event) {
						    modal.style.display = "none";
						};
                    

						footerModal.appendChild(cancelButton);*/
						//if(table.rows[7].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
						var footerModal = document.getElementById("modal_footer");
						var okButton = document.createElement("input");
						okButton.type = "button";
						okButton.setAttribute("class", "okBtn");
						//okButton.id = "okBtn";
						okButton.value = "Ok";
						okButton.onclick = function (event) {
							/*if (cbidHidden.value === null) {
							    alert("Please select any one of the Staff");
							    modal.style.display = "block";
							}*/
							var n;
							var rButtonStatus;
							//var rButtonStatusFalse;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {

									rButtonStatus = false;
								} else {

									EmpREC7.value = myresopnse[n].EMPL_RCD;
									Initials7.value = myresopnse[n].INITIALS;
									SSN7.value = myresopnse[n].NATIONAL_ID;
									var numbers = SSN7.value;
									SSN7_7.value =  numbers.substr(0, 3) + "-" + numbers.substr(3, 2) + "-" + numbers.substr(5, 4);
									SSN7.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
									Lname7.value = myresopnse[n].LAST_NAME;
									Class7.value = myresopnse[n].JOBCODE;
									// EmplID.value = this.value;
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
						EmpREC7.value = "";
						SSN7_7.value = "";
						Initials7.value = "";
						SSN7.value = "";
						Lname7.value = "";
						Class7.value = "";
						Serial7.value = "";
						TRC7.value = "";
						Hours7.value = "";
						HDTHS7.value = "";
						Payroll7.value = "";
						Dept7.value = "";
						Fund7.value = "";
						ClassCombo7.value = "";
						Project7.value = "";
						Program7.value = "";
						Account7.value = "";
						ComboCode7.value = "";
						Hours7.enabled = false;
						HDTHS7.enabled = false;
						
						Dept7.enabled = false;
						Fund7.enabled = false;
						ClassCombo7.enabled = false;
						Project7.enabled = false;
						Program7.enabled = false;
						Account7.enabled = false;
						ComboCode7.enabled = false;

						gifModal.style.display = "none";

					}

					span.onclick = function () {

						modal.style.display = "none";
					};

				}
			});
		} else {
			EmpID7.value = null;
			showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
			EmpREC7.value = "";
			SSN7_7.value = "";
			Initials7.value = "";
			SSN7.value = "";
			Lname7.value = "";
			Class7.value = "";
			Serial7.value = "";
			TRC7.value = "";
			Hours7.value = "";
			HDTHS7.value = "";
			Payroll7.value = "";
			Dept7.value = "";
			Fund7.value = "";
			ClassCombo7.value = "";
			Project7.value = "";
			Program7.value = "";
			Account7.value = "";
			ComboCode7.value = "";
			Hours7.enabled = false;
			HDTHS7.enabled = false;
			
			Dept7.enabled = false;
			Fund7.enabled = false;
			ClassCombo7.enabled = false;
			Project7.enabled = false;
			Program7.enabled = false;
			Account7.enabled = false;
			ComboCode7.enabled = false;

			gifModal.style.display = "none";
		}
	} else {

		showErrorModal("Alert!", "No matching records found");
		EmpREC7.value = "";
		SSN7_7.value = "";
		Initials7.value = "";
		SSN7.value = "";
		Lname7.value = "";
		Class7.value = "";
		Serial7.value = "";
		TRC7.value = "";
		Hours7.value = "";
		HDTHS7.value = "";
		Payroll7.value = "";
		Dept7.value = "";
		Fund7.value = "";
		ClassCombo7.value = "";
		Project7.value = "";
		Program7.value = "";
		Account7.value = "";
		ComboCode7.value = "";
		Hours7.enabled = false;
		HDTHS7.enabled = false;
		
		Dept7.enabled = false;
		Fund7.enabled = false;
		ClassCombo7.enabled = false;
		Project7.enabled = false;
		Program7.enabled = false;
		Account7.enabled = false;
		ComboCode7.enabled = false;

		gifModal.style.display = "none";
	}
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Program7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cls = ClassCombo7.value;
var prog = this.value;

if(StageIndicator.value === null){
if(cls !== null && prog !== null){
  showErrorModal("Alert!","Program field should not have a value if the Class field is not populated");
}

}
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
if(StageIndicator.value === null){
  $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthSign_valueCommit0 = function (scope) {
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;

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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_AuthEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManager"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
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
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    ManagerSign.value = userValue;
                },
                error: function(error) {
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ManagerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ManagerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ManagerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ManagerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToPayroll"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        PayRollDate.value = d;

        PayRollDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    PayRollSign.value = userValue;
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollSign_valueCommit0 = function (scope) {
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_PayRollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_panel1610958881339_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_panel1610958881339_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  SSN1.value = SSN1_1.value;
SSN2.value = SSN2_2.value;
SSN3.value = SSN3_3.value;
SSN4.value = SSN4_4.value;
SSN5.value = SSN5_5.value;
SSN6.value = SSN6_6.value;
SSN7.value = SSN7_7.value;

}
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated__click0 = function (scope) {
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/ot-sd-request-combo-blank-distributed/ot-sd-request-combo-blank-distributed');
            jsonData.append('fileName', DeptID.value  + "_" + Date.now());          
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_saveguidedraft1610449069001_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_saveguidedraft1610449069001_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(DeptID.value !== null){
   
  aftiaDescCWID.value = (DeptID.value + " " + MonthPeriod.value + " " + YearPeriod.value);
 // aftiaDescCWID.value = (DeptID.value);
   formSavedStatus.value = "1";
  }
handleDraftSave(this);


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_submit_13966870281576568571969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_submit_13966870281576568571969_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag =0;
 if(DeptID.value !== null){
   
        aftiaDescCWID.value = (DeptID.value + " " + MonthPeriod.value + " " + YearPeriod.value);
   
  }

ManagerEmailId.value = "yjayaram@fullerton.edu";
//ManagerEmailId.value = "pushpa.kawadi@thoughtfocus.com";
if(submitFlag === 0){
  guideBridge.submit();
}


        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated__click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated__click00 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/ot-sd-request-combo-blank-distributed/ot-sd-request-combo-blank-distributed');
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
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated__click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated__click01 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/ot-sd-request-combo-blank-distributed/ot-sd-request-combo-blank-distributed');
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
