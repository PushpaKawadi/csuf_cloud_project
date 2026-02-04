/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value !== "1"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";


$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
//alert("userValue="+userValue);
workflow_initiator.value = userValue;
logUser.value = userValue;
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
            
             
                DepartmentId.value =myresopnse[0].DEPTID;
                CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                Ful_Division.value = myresopnse[0].FUL_DIVISION;
                //getAuthApproverData(DepartmentId.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);
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
					DepartmentId.value =myresopnse[n].DEPTID;
                    CSU_Agency_Unit.value = myresopnse[0].CSU_SCO_AGENCY;
                    Ful_Division.value = myresopnse[0].FUL_DIVISION;
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
                  
                //getAuthApproverData(DepartmentId.value,Ful_Division.value,CSU_Agency_Unit.value,Field_Value_2.value);    
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                        
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
  loadingText.visible = false; 
}
});
}
  
  /*
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
				HiddenManagerEmail.value = result[0].EMAILID;
				ManagerUserId.value = result[0].USERID;
			}                 
		}
	});
}*/

        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value !== "ToPayroll"){
  if(StageIndicator.value === null){
      TRC1.enabled = true;
      TRC2.enabled = true;
      TRC3.enabled = true;
      TRC4.enabled = true;
      TRC5.enabled = true;
      TRC6.enabled = true;
      TRC7.enabled = true;
      TRC8.enabled = true;
      TRC9.enabled = true;
      TRC10.enabled = true;
      TRC11.enabled = true;
      TRC12.enabled = true;
      TRC13.enabled = true;
      TRC14.enabled = true;
      TRC15.enabled = true;
      TRC16.enabled = true;
  }else{
   
TRC1.enabled = false;
TRC2.enabled = false;
TRC3.enabled = false;
TRC4.enabled = false;
TRC5.enabled = false;
TRC6.enabled = false;
TRC7.enabled = false;
TRC8.enabled = false;
TRC9.enabled = false;
TRC10.enabled = false;
TRC11.enabled = false;
TRC12.enabled = false;
TRC13.enabled = false;
TRC14.enabled = false;
TRC15.enabled = false;
TRC16.enabled = false;
  }
   
PayrolOFRate1.enabled = false;
PayrolOFRate2.enabled = false;
PayrolOFRate3.enabled = false;
PayrolOFRate4.enabled = false;
PayrolOFRate5.enabled = false;
PayrolOFRate6.enabled = false;
PayrolOFRate7.enabled = false;
PayrolOFRate8.enabled = false;
PayrolOFRate9.enabled = false;
PayrolOFRate10.enabled = false;
PayrolOFRate11.enabled = false;
PayrolOFRate12.enabled = false;
PayrolOFRate13.enabled = false;
PayrolOFRate14.enabled = false;
PayrolOFRate15.enabled = false;
PayrolOFRate16.enabled = false;
 
ComboCode1.enabled = false;
ComboCode2.enabled = false;
ComboCode3.enabled = false;
ComboCode4.enabled = false;
ComboCode5.enabled = false;
ComboCode6.enabled = false;
ComboCode7.enabled = false;
ComboCode8.enabled = false;
ComboCode9.enabled = false;
ComboCode10.enabled = false;
ComboCode11.enabled = false;
ComboCode12.enabled = false;
ComboCode13.enabled = false;
ComboCode14.enabled = false;
ComboCode15.enabled = false;
ComboCode16.enabled = false;
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

Hours8.enabled = false;
HDTHS8.enabled = false;

Hours9.enabled = false;
HDTHS9.enabled = false;

Hours10.enabled = false;
HDTHS10.enabled = false;

Hours11.enabled = false;
HDTHS11.enabled = false;

Hours12.enabled = false;
HDTHS12.enabled = false;

Hours13.enabled = false;
HDTHS13.enabled = false;

Hours14.enabled = false;
HDTHS14.enabled = false;

Hours15.enabled = false;
HDTHS15.enabled = false;

Hours16.enabled = false;
HDTHS16.enabled = false;
EmpRec2.enabled = false;
EmpRec3.enabled = false;
EmpRec4.enabled = false;
EmpRec5.enabled = false;
EmpRec6.enabled = false;
EmpRec7.enabled = false;
EmpRec8.enabled = false;
EmpRec9.enabled = false;
EmpRec11.enabled = false;
EmpRec12.enabled = false;
EmpRec13.enabled = false;
EmpRec10.enabled = false;
EmpRec14.enabled = false;
EmpRec15.enabled = false;
EmpRec16.enabled = false;

SSN2.enabled = false;
SSN3.enabled = false;
SSN4.enabled = false;
SSN5.enabled = false;
SSN6.enabled = false;
SSN7.enabled = false;
SSN8.enabled = false;
SSN9.enabled = false;
SSN11.enabled = false;
SSN12.enabled = false;
SSN13.enabled = false;
SSN10.enabled = false;
SSN14.enabled = false;
SSN15.enabled = false;
SSN16.enabled = false;

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
Serial2.enabled = false;
Serial3.enabled = false;
Serial4.enabled = false;
Serial5.enabled = false;
Serial6.enabled = false;
Serial7.enabled = false;
Serial8.enabled = false;
Serial9.enabled = false;
Serial11.enabled = false;
Serial12.enabled = false;
Serial13.enabled = false;
Serial10.enabled = false;
Serial14.enabled = false;
Serial15.enabled = false;
Serial16.enabled = false;
  Days1.enabled = false;
Days2.enabled = false;
Days3.enabled = false;
Days4.enabled = false;
Days5.enabled = false;
Days6.enabled = false;
Days7.enabled = false;
Days8.enabled = false;
Days9.enabled = false;
Days11.enabled = false;
Days12.enabled = false;
Days13.enabled = false;
Days10.enabled = false;
Days14.enabled = false;
Days15.enabled = false;
Days16.enabled = false;

}else{
  PayrolOFRate1.enabled = true;
PayrolOFRate2.enabled = true;
PayrolOFRate3.enabled = true;
PayrolOFRate4.enabled = true;
PayrolOFRate5.enabled = true;
PayrolOFRate6.enabled = true;
PayrolOFRate7.enabled = true;
PayrolOFRate8.enabled = true;
PayrolOFRate9.enabled = true;
PayrolOFRate10.enabled = true;
PayrolOFRate11.enabled = true;
PayrolOFRate12.enabled = true;
PayrolOFRate13.enabled = true;
PayrolOFRate14.enabled = true;
PayrolOFRate15.enabled = true;
PayrolOFRate16.enabled = true;
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

Hours8.enabled = false;
HDTHS8.enabled = false;

Hours9.enabled = false;
HDTHS9.enabled = false;

Hours10.enabled = false;
HDTHS10.enabled = false;

Hours11.enabled = false;
HDTHS11.enabled = false;

Hours12.enabled = false;
HDTHS12.enabled = false;

Hours13.enabled = false;
HDTHS13.enabled = false;

Hours14.enabled = false;
HDTHS14.enabled = false;

Hours15.enabled = false;
HDTHS15.enabled = false;

Hours16.enabled = false;
HDTHS16.enabled = false;
EmpRec2.enabled = false;
EmpRec3.enabled = false;
EmpRec4.enabled = false;
EmpRec5.enabled = false;
EmpRec6.enabled = false;
EmpRec7.enabled = false;
EmpRec8.enabled = false;
EmpRec9.enabled = false;
EmpRec11.enabled = false;
EmpRec12.enabled = false;
EmpRec13.enabled = false;
EmpRec10.enabled = false;
EmpRec14.enabled = false;
EmpRec15.enabled = false;
EmpRec16.enabled = false;

SSN2.enabled = false;
SSN3.enabled = false;
SSN4.enabled = false;
SSN5.enabled = false;
SSN6.enabled = false;
SSN7.enabled = false;
SSN8.enabled = false;
SSN9.enabled = false;
SSN11.enabled = false;
SSN12.enabled = false;
SSN13.enabled = false;
SSN10.enabled = false;
SSN14.enabled = false;
SSN15.enabled = false;
SSN16.enabled = false;
Days1.enabled = false;
Days2.enabled = false;
Days3.enabled = false;
Days4.enabled = false;
Days5.enabled = false;
Days6.enabled = false;
Days7.enabled = false;
Days8.enabled = false;
Days9.enabled = false;
Days11.enabled = false;
Days12.enabled = false;
Days13.enabled = false;
Days10.enabled = false;
Days14.enabled = false;
Days15.enabled = false;
Days16.enabled = false;

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
Serial2.enabled = false;
Serial3.enabled = false;
Serial4.enabled = false;
Serial5.enabled = false;
Serial6.enabled = false;
Serial7.enabled = false;
Serial8.enabled = false;
Serial9.enabled = false;
Serial11.enabled = false;
Serial12.enabled = false;
Serial13.enabled = false;
Serial10.enabled = false;
Serial14.enabled = false;
Serial15.enabled = false;
Serial16.enabled = false;
ComboCode1.enabled = false;
ComboCode2.enabled = false;
ComboCode3.enabled = false;
ComboCode4.enabled = false;
ComboCode5.enabled = false;
ComboCode6.enabled = false;
ComboCode7.enabled = false;
ComboCode8.enabled = false;
ComboCode9.enabled = false;
ComboCode10.enabled = false;
ComboCode11.enabled = false;
ComboCode12.enabled = false;
ComboCode13.enabled = false;
ComboCode14.enabled = false;
ComboCode15.enabled = false;
ComboCode16.enabled = false;
TRC1.enabled = false;
TRC2.enabled = false;
TRC3.enabled = false;
TRC4.enabled = false;
TRC5.enabled = false;
TRC6.enabled = false;
TRC7.enabled = false;
TRC8.enabled = false;
TRC9.enabled = false;
TRC10.enabled = false;
TRC11.enabled = false;
TRC12.enabled = false;
TRC13.enabled = false;
TRC14.enabled = false;
TRC15.enabled = false;
TRC16.enabled = false;
}
console.log("value is- " + TRC1.enabled);
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){  
  panelTable.enabled = true;
  DepartmentId.enabled = false;
  Agency.enabled = false;
  Unit.enabled = true;
  Month.enabled = true;
  Year.enabled = true;
  BatchSession.enabled = false;
  managerSignSection.visible = false;
  PayrollSignatureSection.visible = false;
}

if(StageIndicator.value === "ToManager"){
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
  managerSignSection.visible = true;
  PayrollSignatureSection.visible = false;
}
if(StageIndicator.value == "ToPayroll"){
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
  managerSignSection.visible = true;
  managerSignSection.enabled = false;
  PayrollSignatureSection.visible = true;
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_DepartmentId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_DepartmentId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_DepartmentId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_DepartmentId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value != "1"){
  
  var dept_id = DepartmentId.value;
  var user_ID = logUser.value;
  $.ajax({
                                type: 'GET',
                                url: "/bin/getOTSDManagerUserId",
								data:{userID:user_ID,deptid:dept_id},
                                dataType: 'json',

                                success: function(managerInforesult) {
                                    
                                    if (managerInforesult.length !== 0) {
                                        ManagerUserId.value  = managerInforesult[0].MANAGER_EMP_USERID;
                                      //if(StageIndicator.value === null){
										ManagerEmailId.value  = managerInforesult[0].MANAGER_EMP_EMAIL;
                                        ManagerName.value  = managerInforesult[0].MANAGER_EMP_NAME;
                                        ManagerEmailId.value = "swathi.kumari@thoughtfocus.com";
                                      
                                    }

                                }
                            });
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Agency_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Agency_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Unit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Unit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null) && (this.value !== null)){
	getAuthApproverData(DepartmentId.value,Ful_Division.value,this.value,Field_Value_2.value);  
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
				HiddenManagerEmail.value = result[0].EMAILID;
				ManagerUserId.value = result[0].USERID;
			} 
          	else{
              	showErrorModal("Alert !", "No approving official's records found. Please enter a correct unit");
            }
		}
	});
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
      /*  if (EmpId1.value !== null && EmpId1.value !== EmpId2.value && EmpId1.value !== EmpId3.value && EmpId1.value !== EmpId4.value && EmpId1.value !== EmpId5.value && EmpId1.value !== EmpId6.value && EmpId1.value !== EmpId7.value && EmpId1.value !== EmpId8.value && EmpId1.value !== EmpId9.value && EmpId1.value !== EmpId10.value && EmpId1.value !== EmpId11.value && EmpId1.value !== EmpId12.value && EmpId1.value !== EmpId13.value && EmpId1.value !== EmpId14.value && EmpId1.value !== EmpId15.value && EmpId1.value !== EmpId16.value) {*/

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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    Hours1.enabled = true;
                    HDTHS1.enabled = true;
                    Days1.enabled = true;
                    ComboCode1.enabled = true;
                    PayrolOFRate1.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec1.value = myresopnse[0].EMPL_RCD;
                        Initials1.value = myresopnse[0].INITIALS;
                        SSN1.value = myresopnse[0].NATIONAL_ID;
                        
                        var numbers = SSN1.value;
                        SSN1_1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                      
                        SSN1.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName1.value = myresopnse[0].LAST_NAME;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec1.value = myresopnse[n].EMPL_RCD;
                                    Initials1.value = myresopnse[n].INITIALS;
                                    SSN1.value = myresopnse[n].NATIONAL_ID;
                                   //SSN1_1.value = myresopnse[n].NATIONAL_ID;
                                    var numbers = SSN1.value;
                                  SSN1_1.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN1.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName1.value = myresopnse[n].LAST_NAME;
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
                        EmpRec1.value = "";
                        Initials1.value = "";
                        SSN1.value = "";
						SSN1_1.value = "";
                        LastName1.value = "";
                        Class1.value = "";
                        Serial1.value = "";
                        TRC1.value = "";
                        Hours1.value = "";
                        HDTHS1.value = "";
                        PayrolOFRate1.value = "";
                        ComboCode1.value = "";
                        Days1.value = "";
                        Hours1.enabled = false;
                        HDTHS1.enabled = false;
                        PayrolOFRate1.enabled = false;
                        Days1.enabled = false;

                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	    }

        /*} 
  else {
            EmpId1.value = null;
            EmpRec1.value = "";
            Initials1.value = "";
            SSN1.value = "";
           SSN1_1.value = "";
            LastName1.value = "";
            Class1.value = "";
            Serial1.value = "";
            TRC1.value = "";
            Hours1.value = "";
            HDTHS1.value = "";
            PayrolOFRate1.value = "";
            ComboCode1.value = "";
            Days1.value = "";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    }else {
                       
        EmpRec1.value = "";
        Initials1.value = "";
        SSN1.value = "";
        SSN1_1.value = "";
        LastName1.value = "";
        Class1.value = "";
        Serial1.value = "";
        TRC1.value = "";
        Hours1.value = "";
        HDTHS1.value = "";
        PayrolOFRate1.value = "";
        ComboCode1.value = "";
        Days1.value = "";
        Hours1.enabled = false;
        HDTHS1.enabled = false;
        PayrolOFRate1.enabled = false;
        Days1.enabled = false;

        gifModal.style.display = "none";

      }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpRec1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpRec1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_SSN1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_SSN1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Initials1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Initials1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_LastName1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_LastName1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Class1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Class1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Serial1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_Serial1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TRC1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TRC1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /*if (EmpId2.value !== EmpId1.value && EmpId2.value !== EmpId3.value && EmpId2.value !== EmpId4.value && EmpId2.value !== EmpId5.value && EmpId2.value !== EmpId6.value && EmpId2.value !== EmpId7.value && EmpId2.value !== EmpId8.value && EmpId2.value !== EmpId9.value && EmpId2.value !== EmpId10.value && EmpId2.value !== EmpId11.value && EmpId2.value !== EmpId12.value && EmpId2.value !== EmpId13.value && EmpId2.value !== EmpId14.value && EmpId2.value !== EmpId15.value && EmpId2.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    Hours2.enabled = true;
                    HDTHS2.enabled = true;
                    Days2.enabled = true;
                    ComboCode2.enabled = true;
                    PayrolOFRate2.enabled = true;
                    
                    if (myresopnse.length === 1) {

                        EmpRec2.value = myresopnse[0].EMPL_RCD;
                        Initials2.value = myresopnse[0].INITIALS;
                        SSN2.value = myresopnse[0].NATIONAL_ID;
                       SSN2_2.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN2.value;
                       SSN2_2.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN2.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);

                        LastName2.value = myresopnse[0].LAST_NAME;
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



                            var tabCell1 = tr.insertCell(-1);
                            tabCell1.appendChild(button);
                            for (var l = 0; l < col.length; l++) {
                                var tabCell = tr.insertCell(-1);
                                if (col[l] == "NATIONAL_ID") {
                                    tabCell.innerHTML = 'XXX-' + 'XX-' + (myresopnse[k][col[l]]).substr(5, 4)  + " - " + cwid;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec2.value = myresopnse[n].EMPL_RCD;
                                    Initials2.value = myresopnse[n].INITIALS;
                                    SSN2.value = myresopnse[n].NATIONAL_ID;
                                  
                                    var numbers = SSN2.value;
                                   SSN2_2.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);
                                    SSN2.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName2.value = myresopnse[n].LAST_NAME;
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
                        EmpRec2.value = "";
                        Initials2.value = "";
                        SSN2.value = "";
						SSN2_2.value = "";
                        LastName2.value = "";
                        Class2.value = "";
                        Serial2.value = "";
                        Hours2.value = "";
                        HDTHS2.value = "";
                        PayrolOFRate2.value = "";
                        ComboCode2.value = "";
                        Days2.value = "";
                        Hours2.enabled = false;
                        HDTHS2.enabled = false;
                        PayrolOFRate2.enabled = false;
                        Days2.enabled = false;

                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
        /*} 
		else {
            EmpId2.value = null;
            EmpRec2.value = "";
            Initials2.value = "";
            SSN2.value = "";
           	SSN2_2.value = "";
            LastName2.value = "";
            Class2.value = "";
            Serial2.value = "";
            Hours2.value = "";
            HDTHS2.value = "";
            PayrolOFRate2.value = "";
            ComboCode2.value = "";
            Days2.value = "";
            Hours2.enabled = false;
            HDTHS2.enabled = false;
            PayrolOFRate2.enabled = false;
            Days2.enabled = false;
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } 
	else {

      	gifModal.style.display = "none";
        EmpRec2.value = "";
        Initials2.value = "";
        SSN2.value = "";
      	SSN2_2.value = "";
        LastName2.value = "";
        Class2.value = "";
        Serial2.value = "";
        Hours2.value = "";
        HDTHS2.value = "";
        PayrolOFRate2.value = "";
        ComboCode2.value = "";
        Days2.value = "";
        Hours2.enabled = false;
        HDTHS2.enabled = false;
        PayrolOFRate2.enabled = false;
        Days2.enabled = false;      

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
        /*if (EmpId3.value !== EmpId1.value && EmpId3.value !== EmpId2.value && EmpId3.value !== EmpId4.value && EmpId3.value !== EmpId5.value && EmpId3.value !== EmpId6.value && EmpId3.value !== EmpId7.value && EmpId3.value !== EmpId8.value && EmpId3.value !== EmpId9.value && EmpId3.value !== EmpId10.value && EmpId3.value !== EmpId11.value && EmpId3.value !== EmpId12.value && EmpId3.value !== EmpId13.value && EmpId3.value !== EmpId14.value && EmpId3.value !== EmpId15.value && EmpId3.value !== EmpId16.value) {*/

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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    Hours3.enabled = true;
                    HDTHS3.enabled = true;
                    ComboCode3.enabled = true;
                    Days3.enabled = true;
                    PayrolOFRate3.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec3.value = myresopnse[0].EMPL_RCD;
                        Initials3.value = myresopnse[0].INITIALS;
                        SSN3.value = myresopnse[0].NATIONAL_ID;
                        SSN3_3.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN3.value;
                       SSN3_3.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN3.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName3.value = myresopnse[0].LAST_NAME;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec3.value = myresopnse[n].EMPL_RCD;
                                    Initials3.value = myresopnse[n].INITIALS;
                                    SSN3.value = myresopnse[n].NATIONAL_ID;
                                    SSN3_3.value = myresopnse[n].NATIONAL_ID;
                                    var numbers = SSN3.value;
                                   SSN3_3.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN3.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName3.value = myresopnse[n].LAST_NAME;
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
                        EmpRec3.value = "";
                        Initials3.value = "";
                        SSN3.value = "";
                       SSN3_3.value = "";
                      SSN3_3.value = "";
                        LastName3.value = "";
                        Class3.value = "";
                        Serial3.value = "";
                        TRC3.value = "";
                        Hours3.value = "";
                        HDTHS3.value = "";
                        PayrolOFRate3.value = "";
                        ComboCode3.value = "";
                        Days3.value = "";
                        Hours3.enabled = false;
                        HDTHS3.enabled = false;
                        PayrolOFRate3.enabled = false;
                        Days3.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
		}

       /* } 
  else {
            EmpId3.value = null;
            EmpRec3.value = "";
            Initials3.value = "";
            SSN3.value = "";
          SSN3_3.value = "";
            LastName3.value = "";
            Class3.value = "";
            Serial3.value = "";
            TRC3.value = "";
            Hours3.value = "";
            HDTHS3.value = "";
            PayrolOFRate3.value = "";
            ComboCode3.value = "";
            Days3.value = "";
            Hours3.enabled = false;
            HDTHS3.enabled = false;
            PayrolOFRate3.enabled = false;
            Days3.enabled = false;
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
      
        EmpRec3.value = "";
        Initials3.value = "";
        SSN3.value = "";
      SSN3_3.value = "";
        LastName3.value = "";
        Class3.value = "";
        Serial3.value = "";
        TRC3.value = "";
        Hours3.value = "";
        HDTHS3.value = "";
        PayrolOFRate3.value = "";
        ComboCode3.value = "";
        Days3.value = "";
        Hours3.enabled = false;
        HDTHS3.enabled = false;
        PayrolOFRate3.enabled = false;
        Days3.enabled = false;
        gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId4.value !== EmpId1.value && EmpId4.value !== EmpId2.value && EmpId4.value !== EmpId3.value && EmpId4.value !== EmpId5.value && EmpId4.value !== EmpId6.value && EmpId4.value !== EmpId7.value && EmpId4.value !== EmpId8.value && EmpId4.value !== EmpId9.value && EmpId4.value !== EmpId10.value && EmpId4.value !== EmpId11.value && EmpId4.value !== EmpId12.value && EmpId4.value !== EmpId13.value && EmpId4.value !== EmpId14.value && EmpId4.value !== EmpId15.value && EmpId4.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours4.enabled = true;
                    HDTHS4.enabled = true;
                    ComboCode4.enabled = true;
                    Days4.enabled = true;
                  	PayrolOFRate4.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec4.value = myresopnse[0].EMPL_RCD;
                        Initials4.value = myresopnse[0].INITIALS;
                        SSN4.value = myresopnse[0].NATIONAL_ID;
                        SSN4_4.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN4.value;
                       	SSN4_4.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN4.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName4.value = myresopnse[0].LAST_NAME;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec4.value = myresopnse[n].EMPL_RCD;
                                    Initials4.value = myresopnse[n].INITIALS;
                                    SSN4.value = myresopnse[n].NATIONAL_ID;
                                    SSN4_4.value = myresopnse[n].NATIONAL_ID;
                                    var numbers = SSN4.value;
                                  SSN4_4.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN4.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName4.value = myresopnse[n].LAST_NAME;
                                    Class4.value = myresopnse[n].JOBCODE;

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
                        EmpRec4.value = "";
                        Initials4.value = "";
                        SSN4.value = "";
                       	SSN4_4.value = "";
                        LastName4.value = "";
                        Class4.value = "";
                        Serial4.value = "";
                        TRC4.value = "";
                        Hours4.value = "";
                        HDTHS4.value = "";
                        PayrolOFRate4.value = "";
                        ComboCode4.value = "";
                        Days4.value = "";
                        Hours4.enabled = false;
                        HDTHS4.enabled = false;
                        PayrolOFRate4.enabled = false;
                        Days4.enabled = true;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
       /* } else {
            EmpId4.value = null;
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        EmpRec4.value = "";
        Initials4.value = "";
        SSN4.value = "";
      	SSN4_4.value = "";
        LastName4.value = "";
        Class4.value = "";
        Serial4.value = "";
        TRC4.value = "";
        Hours4.value = "";
        HDTHS4.value = "";
        PayrolOFRate4.value = "";
        ComboCode4.value = "";
        Days4.value = "";
        Hours4.enabled = false;
        HDTHS4.enabled = false;
        PayrolOFRate4.enabled = false;
        Days4.enabled = false;
        gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
  /*  if (EmpId5.value !== EmpId1.value && EmpId5.value !== EmpId2.value && EmpId5.value !== EmpId4.value && EmpId5.value !== EmpId3.value && EmpId5.value !== EmpId6.value && EmpId5.value !== EmpId7.value && EmpId5.value !== EmpId8.value && EmpId5.value !== EmpId9.value && EmpId5.value !== EmpId10.value && EmpId5.value !== EmpId11.value && EmpId5.value !== EmpId12.value && EmpId5.value !== EmpId13.value && EmpId5.value !== EmpId14.value && EmpId5.value !== EmpId15.value && EmpId5.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours5.enabled = true;
                    HDTHS5.enabled = true;
                    ComboCode5.enabled = true;
                    Days5.enabled = true;
                  	PayrolOFRate5.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec5.value = myresopnse[0].EMPL_RCD;
                        Initials5.value = myresopnse[0].INITIALS;
                        SSN5.value = myresopnse[0].NATIONAL_ID;
                       SSN5_5.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN5.value;
                      SSN5_5.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN5.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName5.value = myresopnse[0].LAST_NAME;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec5.value = myresopnse[n].EMPL_RCD;
                                    Initials5.value = myresopnse[n].INITIALS;
                                    SSN5.value = myresopnse[n].NATIONAL_ID;
                                  	SSN5_5.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN5.value;
                                  	SSN5_5.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN5.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName5.value = myresopnse[n].LAST_NAME;
                                    Class5.value = myresopnse[n].JOBCODE;

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
                        EmpRec5.value = "";
                        Initials5.value = "";
                        SSN5.value = "";
                      	SSN5_5.value = "";
                        LastName5.value = "";
                        Class5.value = "";
                        Serial5.value = "";
                        TRC5.value = "";
                        Hours5.value = "";
                        HDTHS5.value = "";
                        PayrolOFRate5.value = "";
                        ComboCode5.value = "";
                        Days5.value = "";
                        Hours5.enabled = false;
                        Days5.enabled = false;
                        HDTHS5.enabled = false;
                        PayrolOFRate5.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
		}
       /* } else {
            EmpId5.value = null;
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        //showErrorModal("Alert!", "No matching records found");
      	gifModal.style.display = "none";
        EmpRec5.value = "";
        Initials5.value = "";
        SSN5.value = "";
      	SSN5_5.value = "";
        LastName5.value = "";
        Class5.value = "";
        Serial5.value = "";
        TRC5.value = "";
        Hours5.value = "";
        HDTHS5.value = "";
        PayrolOFRate5.value = "";
        ComboCode5.value = "";
        Days5.value = "";
        Hours5.enabled = false;
        Dyas5.enabled = false;
        HDTHS5.enabled = false;
        PayrolOFRate5.enabled = false;
        

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId6.value !== EmpId1.value && EmpId6.value !== EmpId2.value && EmpId6.value !== EmpId3.value && EmpId6.value !== EmpId4.value && EmpId6.value !== EmpId5.value && EmpId6.value !== EmpId7.value && EmpId6.value !== EmpId8.value && EmpId6.value !== EmpId9.value && EmpId6.value !== EmpId10.value && EmpId6.value !== EmpId11.value && EmpId6.value !== EmpId12.value && EmpId6.value !== EmpId13.value && EmpId6.value !== EmpId14.value && EmpId6.value !== EmpId15.value && EmpId6.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours6.enabled = true;
                    HDTHS6.enabled = true;
                    ComboCode6.enabled = true;
                    Days6.enabled = true;
                  	PayrolOFRate6.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec6.value = myresopnse[0].EMPL_RCD;
                        Initials6.value = myresopnse[0].INITIALS;
                        SSN6.value = myresopnse[0].NATIONAL_ID;
                      SSN6_6.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN6.value;
                       SSN6_6.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;                     
                        SSN6.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName6.value = myresopnse[0].LAST_NAME;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec6.value = myresopnse[n].EMPL_RCD;
                                    Initials6.value = myresopnse[n].INITIALS;
                                    SSN6.value = myresopnse[n].NATIONAL_ID;
                                     SSN6_6.value = myresopnse[0].NATIONAL_ID;

                                    var numbers = SSN6.value;
                                   SSN6_6.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN6.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName6.value = myresopnse[n].LAST_NAME;
                                    Class6.value = myresopnse[n].JOBCODE;

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
                        EmpRec6.value = "";
                        Initials6.value = "";
                        SSN6.value = "";
                          SSN6_6.value = "";
                        LastName6.value = "";
                        Class6.value = "";
                        Serial6.value = "";
                        TRC6.value = "";
                        Hours6.value = "";
                        HDTHS6.value = "";
                        PayrolOFRate6.value = "";
                        ComboCode6.value = "";
                        Days6.value = "";
                        Hours6.enabled = false;
                        Days6.enabled = false;
                        HDTHS6.enabled = false;
                        PayrolOFRate6.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
       /* } else {
          debugger;
            EmpId6.value = null;
            EmpRec6.value = "";
            Initials6.value = "";
            SSN6.value = "";
          SSN6_6.value = "";
            LastName6.value = "";
            Class6.value = "";
            Serial6.value = "";
            TRC6.value = "";
            Hours6.value = "";
            HDTHS6.value = "";
            PayrolOFRate6.value = "";
            ComboCode6.value = "";
            Days6.value = "";
            Hours6.enabled = false;
            Days6.enabled = false;
            HDTHS6.enabled = false;
            PayrolOFRate6.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {

        EmpRec6.value = "";
        Initials6.value = "";
        SSN6.value = "";
		SSN6_6.value = "";
        LastName6.value = "";
        Class6.value = "";
        Serial6.value = "";
        TRC6.value = "";
        Hours6.value = "";
        HDTHS6.value = "";
        PayrolOFRate6.value = "";
        ComboCode6.value = "";
        Days6.value = "";
        Hours6.enabled = false;
        Days6.enabled = false;
        HDTHS6.enabled = false;
        PayrolOFRate6.enabled = false;
        //gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId7.value !== EmpId1.value && EmpId7.value !== EmpId2.value && EmpId7.value !== EmpId3.value && EmpId7.value !== EmpId4.value && EmpId7.value !== EmpId5.value && EmpId7.value !== EmpId6.value && EmpId7.value !== EmpId8.value && EmpId7.value !== EmpId9.value && EmpId7.value !== EmpId10.value && EmpId7.value !== EmpId11.value && EmpId7.value !== EmpId12.value && EmpId7.value !== EmpId13.value && EmpId7.value !== EmpId14.value && EmpId7.value !== EmpId15.value && EmpId7.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours7.enabled = true;
                    HDTHS7.enabled = true;
                    ComboCode7.enabled = true;
                    Days7.enabled = true;
                  	PayrolOFRate7.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec7.value = myresopnse[0].EMPL_RCD;
                        Initials7.value = myresopnse[0].INITIALS;
                        SSN7.value = myresopnse[0].NATIONAL_ID;
                      SSN7_7.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN7.value;
                       SSN7_7.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN7.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName7.value = myresopnse[0].LAST_NAME;
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
                        okButton.onclick = function(event) {
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

                                    EmpRec7.value = myresopnse[n].EMPL_RCD;
                                    Initials7.value = myresopnse[n].INITIALS;
                                    SSN7.value = myresopnse[n].NATIONAL_ID;
                                  SSN7_7.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN7.value;
                                   SSN7_7.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN7.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName7.value = myresopnse[n].LAST_NAME;
                                    Class7.value = myresopnse[n].JOBCODE;

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
                        EmpRec7.value = "";
                        Initials7.value = "";
                        SSN7.value = "";
                      SSN7_7.value = "";
                        LastName7.value = "";
                        Class7.value = "";
                        Serial7.value = "";
                        TRC7.value = "";
                        Hours7.value = "";
                        HDTHS7.value = "";
                        PayrolOFRate7.value = "";
                        ComboCode7.value = "";
                        Days7.value = "";
                        Days7.enabled = false;
                        Hours7.enabled = false;
                        HDTHS7.enabled = false;
                        PayrolOFRate7.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
      /*  } else {
            EmpId7.value = null;
            EmpRec7.value = "";
            Initials7.value = "";
            SSN7.value = "";
          SSN7_7.value = "";
            LastName7.value = "";
            Class7.value = "";
            Serial7.value = "";
            TRC7.value = "";
            Hours7.value = "";
            HDTHS7.value = "";
            PayrolOFRate7.value = "";
            ComboCode7.value = "";
            Days7.value = "";
            Days7.enabled = false;
            Hours7.enabled = false;
            HDTHS7.enabled = false;
            PayrolOFRate7.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {

        EmpRec7.value = "";
        Initials7.value = "";
        SSN7.value = "";
      SSN7_7.value = "";
        LastName7.value = "";
        Class7.value = "";
        Serial7.value = "";
        TRC7.value = "";
        Hours7.value = "";
        HDTHS7.value = "";
        PayrolOFRate7.value = "";
        ComboCode7.value = "";
        Days7.value = "";
        Days7.enabled = false;
        Hours7.enabled = false;
        HDTHS7.enabled = false;
        PayrolOFRate7.enabled = false;
        //gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId8.value !== EmpId1.value && EmpId8.value !== EmpId2.value && EmpId8.value !== EmpId3.value && EmpId8.value !== EmpId4.value && EmpId8.value !== EmpId5.value && EmpId8.value !== EmpId6.value && EmpId8.value !== EmpId7.value && EmpId8.value !== EmpId9.value && EmpId8.value !== EmpId10.value && EmpId8.value !== EmpId11.value && EmpId8.value !== EmpId12.value && EmpId8.value !== EmpId13.value && EmpId8.value !== EmpId14.value && EmpId8.value !== EmpId15.value && EmpId8.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours8.enabled = true;
                    HDTHS8.enabled = true;
                    ComboCode8.enabled = true;
                    Days8.enabled = true;
                  	PayrolOFRate8.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec8.value = myresopnse[0].EMPL_RCD;
                        Initials8.value = myresopnse[0].INITIALS;
                        SSN8.value = myresopnse[0].NATIONAL_ID;
                      	SSN8_8.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN8.value;
                       	SSN8_8.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN8.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName8.value = myresopnse[0].LAST_NAME;
                        Class8.value = myresopnse[0].JOBCODE;

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
                        okButton.onclick = function(event) {
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

                                    EmpRec8.value = myresopnse[n].EMPL_RCD;
                                    Initials8.value = myresopnse[n].INITIALS;
                                    SSN8.value = myresopnse[n].NATIONAL_ID;
                                  	SSN8_8.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN8.value;
                                   	SSN8_8.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN8.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName8.value = myresopnse[n].LAST_NAME;
                                    Class8.value = myresopnse[n].JOBCODE;

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
                        EmpRec8.value = "";
                        Initials8.value = "";
                        SSN8.value = "";
                      	SSN8_8.value = "";
                        LastName8.value = "";
                        Class8.value = "";
                        Serial8.value = "";
                        TRC8.value = "";
                        Hours8.value = "";
                        HDTHS8.value = "";
                        PayrolOFRate8.value = "";
                        ComboCode8.value = "";
                        Days8.value = "";
                        Days8.enabled = false;
                        Hours8.enabled = false;
                        HDTHS8.enabled = false;
                        PayrolOFRate8.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
      /*  } else {
            EmpId8.value = null;
            EmpRec8.value = "";
            Initials8.value = "";
            SSN8.value = "";
          	SSN8_8.value = "";
            LastName8.value = "";
            Class8.value = "";
            Serial8.value = "";
            TRC8.value = "";
            Hours8.value = "";
            HDTHS8.value = "";
            PayrolOFRate8.value = "";
            ComboCode8.value = "";
            Days8.value = "";
            Days8.enabled = false;
            Hours8.enabled = false;
            HDTHS8.enabled = false;
            PayrolOFRate8.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {

        EmpRec8.value = "";
        Initials8.value = "";
        SSN8.value = "";
      SSN8_8.value = "";
        LastName8.value = "";
        Class8.value = "";
        Serial8.value = "";
        TRC8.value = "";
        Hours8.value = "";
        HDTHS8.value = "";
        PayrolOFRate8.value = "";
        ComboCode8.value = "";
        Days8.value = "";
        Days8.enabled = false;
        Hours8.enabled = false;
        HDTHS8.enabled = false;
        PayrolOFRate8.enabled = false;
       // gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId9_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId9_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
        /*if (EmpId9.value !== EmpId1.value && EmpId9.value !== EmpId2.value && EmpId9.value !== EmpId3.value && EmpId9.value !== EmpId4.value && EmpId9.value !== EmpId5.value && EmpId9.value !== EmpId6.value && EmpId9.value !== EmpId7.value && EmpId9.value !== EmpId8.value && EmpId9.value !== EmpId10.value && EmpId9.value !== EmpId11.value && EmpId9.value !== EmpId12.value && EmpId9.value !== EmpId13.value && EmpId9.value !== EmpId14.value && EmpId9.value !== EmpId15.value && EmpId9.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours9.enabled = true;
                    HDTHS9.enabled = true;
                    ComboCode9.enabled = true;
                    Days9.enabled = true;
                  	PayrolOFRate9.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec9.value = myresopnse[0].EMPL_RCD;
                        Initials9.value = myresopnse[0].INITIALS;
                        SSN9.value = myresopnse[0].NATIONAL_ID;
                      	SSN9_9.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN9.value;
                       	SSN9_9.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN9.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName9.value = myresopnse[0].LAST_NAME;
                        Class9.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec9.value = myresopnse[n].EMPL_RCD;
                                    Initials9.value = myresopnse[n].INITIALS;
                                    SSN9.value = myresopnse[n].NATIONAL_ID;
                                  SSN9_9.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN9.value;
                                   SSN9_9.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN9.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName9.value = myresopnse[n].LAST_NAME;
                                    Class9.value = myresopnse[n].JOBCODE;

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
                        EmpRec9.value = "";
                        Initials9.value = "";
                        SSN9.value = "";
                      SSN9_9.value = "";
                        LastName9.value = "";
                        Class9.value = "";
                        Serial9.value = "";
                        TRC9.value = "";
                        Hours9.value = "";
                        HDTHS9.value = "";
                        PayrolOFRate9.value = "";
                        ComboCode9.value = "";
                        Days9.value = "";
                        Days9.enabled = false;
                        Hours9.enabled = false;
                        HDTHS9.enabled = false;
                        PayrolOFRate9.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
		}
       /* } else {
            EmpId9.value = null;
            EmpRec9.value = "";
            Initials9.value = "";
            SSN9.value = "";
          SSN9_9.value = "";
            LastName9.value = "";
            Class9.value = "";
            Serial9.value = "";
            TRC9.value = "";
            Hours9.value = "";
            HDTHS9.value = "";
            PayrolOFRate9.value = "";
            ComboCode9.value = "";
            Days9.value = "";
            Days9.enabled = false;
            Hours9.enabled = false;
            HDTHS9.enabled = false;
            PayrolOFRate9.enabled = false;
            //gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        EmpRec9.value = "";
        Initials9.value = "";
        SSN9.value = "";
      SSN9_9.value = "";
        LastName9.value = "";
        Class9.value = "";
        Serial9.value = "";
        TRC9.value = "";
        Hours9.value = "";
        HDTHS9.value = "";
        PayrolOFRate9.value = "";
        ComboCode9.value = "";
        Days9.value = "";
        Days9.enabled = false;
        Hours9.enabled = false;
        HDTHS9.enabled = false;
        PayrolOFRate9.enabled = false;
        //gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId10_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId10_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId10.value !== EmpId1.value && EmpId10.value !== EmpId2.value && EmpId10.value !== EmpId3.value && EmpId10.value !== EmpId4.value && EmpId10.value !== EmpId5.value && EmpId10.value !== EmpId6.value && EmpId10.value !== EmpId7.value && EmpId10.value !== EmpId8.value && EmpId10.value !== EmpId9.value && EmpId10.value !== EmpId11.value && EmpId10.value !== EmpId12.value && EmpId10.value !== EmpId13.value && EmpId10.value !== EmpId14.value && EmpId10.value !== EmpId15.value && EmpId10.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours10.enabled = true;
                    HDTHS10.enabled = true;
                    ComboCode10.enabled = true;
                    Days10.enabled = true;
                  	PayrolOFRate10.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec10.value = myresopnse[0].EMPL_RCD;
                        Initials10.value = myresopnse[0].INITIALS;
                        SSN10.value = myresopnse[0].NATIONAL_ID;
                      SSN10_10.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN10.value;
                       SSN10_10.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN10.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName10.value = myresopnse[0].LAST_NAME;
                        Class10.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec10.value = myresopnse[n].EMPL_RCD;
                                    Initials10.value = myresopnse[n].INITIALS;
                                    SSN10.value = myresopnse[n].NATIONAL_ID;
                                  SSN10_10.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN10.value;
                                   SSN10_10.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN10.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName10.value = myresopnse[n].LAST_NAME;
                                    Class10.value = myresopnse[n].JOBCODE;

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
                        EmpRec10.value = "";
                        Initials10.value = "";
                        SSN10.value = "";
                      SSN10_10.value = "";
                        LastName10.value = "";
                        Class10.value = "";
                        Serial10.value = "";
                        TRC10.value = "";
                        Hours10.value = "";
                        HDTHS10.value = "";
                        PayrolOFRate10.value = "";
                        ComboCode10.value = "";
                        Days10.value = "";
                        Days10.enabled = false;
                        Hours10.enabled = false;
                        HDTHS10.enabled = false;
                        PayrolOFRate10.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
      /*  } else {
            EmpId10.value = null;
            EmpRec10.value = "";
            Initials10.value = "";
            SSN10.value = "";
           SSN10_10.value = "";
            LastName10.value = "";
            Class10.value = "";
            Serial10.value = "";
            TRC10.value = "";
            Hours10.value = "";
            HDTHS10.value = "";
            PayrolOFRate10.value = "";
            ComboCode10.value = "";
            Days10.value = "";
            Days10.enabled = false;
            Hours10.enabled = false;
            HDTHS10.enabled = false;
            PayrolOFRate10.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {

        EmpRec10.value = "";
        Initials10.value = "";
        SSN10.value = "";
       SSN10_10.value = "";
        LastName10.value = "";
        Class10.value = "";
        Serial10.value = "";
        TRC10.value = "";
        Hours10.value = "";
        HDTHS10.value = "";
        PayrolOFRate10.value = "";
        ComboCode10.value = "";
        Days10.value = "";
        Days10.enabled = false;
        Hours10.enabled = false;
        HDTHS10.enabled = false;
        PayrolOFRate10.enabled = false;
        //gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId11_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId11_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
        /*if (EmpId11.value !== EmpId1.value && EmpId11.value !== EmpId2.value && EmpId11.value !== EmpId3.value && EmpId11.value !== EmpId4.value && EmpId11.value !== EmpId5.value && EmpId11.value !== EmpId6.value && EmpId11.value !== EmpId7.value && EmpId11.value !== EmpId8.value && EmpId11.value !== EmpId9.value && EmpId11.value !== EmpId10.value && EmpId11.value !== EmpId12.value && EmpId11.value !== EmpId13.value && EmpId11.value !== EmpId14.value && EmpId11.value !== EmpId15.value && EmpId11.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours11.enabled = true;
                    HDTHS11.enabled = true;
                    ComboCode11.enabled = true;
                    Days11.enabled = true;
                  	PayrolOFRate11.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec11.value = myresopnse[0].EMPL_RCD;
                        Initials11.value = myresopnse[0].INITIALS;
                        SSN11.value = myresopnse[0].NATIONAL_ID;
                      	SSN11_11.value = myresopnse[0].NATIONAL_ID;
                       	var numbers = SSN11.value;
                       	SSN11_11.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN11.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName11.value = myresopnse[0].LAST_NAME;
                        Class11.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec11.value = myresopnse[n].EMPL_RCD;
                                    Initials11.value = myresopnse[n].INITIALS;
                                    SSN11.value = myresopnse[n].NATIONAL_ID;
                                  SSN11_11.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN11.value;
                                   SSN11_11.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN11.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName11.value = myresopnse[n].LAST_NAME;
                                    Class11.value = myresopnse[n].JOBCODE;

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
                        EmpRec11.value = "";
                        Initials11.value = "";
                        SSN11.value = "";
                       SSN11_11.value = "";
                        LastName11.value = "";
                        Class11.value = "";
                        Serial11.value = "";
                        TRC11.value = "";
                        Hours11.value = "";
                        HDTHS11.value = "";
                        PayrolOFRate11.value = "";
                        ComboCode11.value = "";
                        Days11.value = "";
                        Days11.enabled = false;
                        Hours11.enabled = false;
                        HDTHS11.enabled = false;
                        PayrolOFRate11.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
		}
       /* } else {
            EmpId11.value = null;
            EmpRec11.value = "";
            Initials11.value = "";
            SSN11.value = "";
          SSN11_11.value = "";
            LastName11.value = "";
            Class11.value = "";
            Serial11.value = "";
            TRC11.value = "";
            Hours11.value = "";
            HDTHS11.value = "";
            PayrolOFRate11.value = "";
            ComboCode11.value = "";
            Days11.value = "";
            Days11.enabled = false;
            Hours11.enabled = false;
            HDTHS11.enabled = false;
            PayrolOFRate11.enabled = false;
            //gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {

        EmpRec11.value = "";
        Initials11.value = "";
        SSN11.value = "";
      SSN11_11.value = "";
        LastName11.value = "";
        Class11.value = "";
        Serial11.value = "";
        TRC11.value = "";
        Hours11.value = "";
        HDTHS11.value = "";
        PayrolOFRate11.value = "";
        ComboCode11.value = "";
        Days11.value = "";
        Days11.enabled = false;
        Hours11.enabled = false;
        HDTHS11.enabled = false;
        PayrolOFRate11.enabled = false;
       // gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId12_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId12_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId12.value !== EmpId1.value && EmpId12.value !== EmpId2.value && EmpId12.value !== EmpId3.value && EmpId12.value !== EmpId4.value && EmpId12.value !== EmpId5.value && EmpId12.value !== EmpId6.value && EmpId12.value !== EmpId7.value && EmpId12.value !== EmpId8.value && EmpId12.value !== EmpId9.value && EmpId12.value !== EmpId10.value && EmpId12.value !== EmpId11.value && EmpId12.value !== EmpId13.value && EmpId12.value !== EmpId14.value && EmpId12.value !== EmpId15.value && EmpId12.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours12.enabled = true;
                    HDTHS12.enabled = true;
                    ComboCode12.enabled = true;
                    Days12.enabled = true;
                  	PayrolOFRate12.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec12.value = myresopnse[0].EMPL_RCD;
                        Initials12.value = myresopnse[0].INITIALS;
                        SSN12.value = myresopnse[0].NATIONAL_ID;
                       SSN12_12.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN12.value;
                       SSN12_12.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN12.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName12.value = myresopnse[0].LAST_NAME;
                        Class12.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec12.value = myresopnse[n].EMPL_RCD;
                                    Initials12.value = myresopnse[n].INITIALS;
                                    SSN12.value = myresopnse[n].NATIONAL_ID;
                                  SSN12_12.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN12.value;
                                   SSN12_12.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN12.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName12.value = myresopnse[n].LAST_NAME;
                                    Class12.value = myresopnse[n].JOBCODE;

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
                        EmpRec12.value = "";
                        Initials12.value = "";
                        SSN12.value = "";
                      SSN12_12.value = "";
                        LastName12.value = "";
                        Class12.value = "";
                        Serial12.value = "";
                        TRC12.value = "";
                        Hours12.value = "";
                        HDTHS12.value = "";
                        PayrolOFRate12.value = "";
                        ComboCode12.value = "";
                        Days12.value = "";
                        Days12.enabled = false;
                        Hours12.enabled = false;
                        HDTHS12.enabled = false;
                        PayrolOFRate12.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
      /*  } else {
            EmpId12.value = null;
            EmpRec12.value = "";
            Initials12.value = "";
            SSN12.value = "";
           SSN12_12.value = "";
            LastName12.value = "";
            Class12.value = "";
            Serial12.value = "";
            TRC12.value = "";
            Hours12.value = "";
            HDTHS12.value = "";
            PayrolOFRate12.value = "";
            ComboCode12.value = "";
            Days12.value = "";
            Days12.enabled = false;
            Hours12.enabled = false;
            HDTHS12.enabled = false;
            PayrolOFRate12.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {

        EmpRec12.value = "";
        Initials12.value = "";
        SSN12.value = "";
       SSN12_12.value = "";
        LastName12.value = "";
        Class12.value = "";
        Serial12.value = "";
        TRC12.value = "";
        Hours12.value = "";
        HDTHS12.value = "";
        PayrolOFRate12.value = "";
        ComboCode12.value = "";
        Days12.value = "";
        Days12.enabled = false;
        Hours12.enabled = false;
        HDTHS12.enabled = false;
        PayrolOFRate12.enabled = false;
       // gifModal.style.display = "none";

    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId13_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId13_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
        /*if (EmpId13.value !== EmpId1.value && EmpId13.value !== EmpId2.value && EmpId13.value !== EmpId3.value && EmpId13.value !== EmpId4.value && EmpId13.value !== EmpId5.value && EmpId13.value !== EmpId6.value && EmpId13.value !== EmpId7.value && EmpId13.value !== EmpId8.value && EmpId13.value !== EmpId9.value && EmpId13.value !== EmpId10.value && EmpId13.value !== EmpId11.value && EmpId13.value !== EmpId12.value && EmpId13.value !== EmpId14.value && EmpId13.value !== EmpId15.value && EmpId13.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours13.enabled = true;
                    HDTHS13.enabled = true;
                    ComboCode13.enabled = true;
                    Days13.enabled = true;
                  	PayrolOFRate13.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec13.value = myresopnse[0].EMPL_RCD;
                        Initials13.value = myresopnse[0].INITIALS;
                        SSN13.value = myresopnse[0].NATIONAL_ID;
                      SSN13_13.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN13.value;
                       SSN13_13.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN13.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName13.value = myresopnse[0].LAST_NAME;
                        Class13.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec13.value = myresopnse[n].EMPL_RCD;
                                    Initials13.value = myresopnse[n].INITIALS;
                                    SSN13.value = myresopnse[n].NATIONAL_ID;
                                   SSN13_13.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN13.value;
                                   SSN13_13.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN13.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName13.value = myresopnse[n].LAST_NAME;
                                    Class13.value = myresopnse[n].JOBCODE;

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
                        EmpRec13.value = "";
                        Initials13.value = "";
                        SSN13.value = "";
                       SSN13_13.value = "";
                        LastName13.value = "";
                        Class13.value = "";
                        Serial13.value = "";
                        TRC13.value = "";
                        Hours13.value = "";
                        HDTHS13.value = "";
                        PayrolOFRate13.value = "";
                        ComboCode13.value = "";
                        Days13.value = "";
                        Days13.enabled = false;
                        Hours13.enabled = false;
                        HDTHS13.enabled = false;
                        PayrolOFRate13.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
		}
       /* } else {
            EmpId13.value = null;
            EmpRec13.value = "";
            Initials13.value = "";
            SSN13.value = "";
          SSN13_13.value = "";
            LastName13.value = "";
            Class13.value = "";
            Serial13.value = "";
            TRC13.value = "";
            Hours13.value = "";
            HDTHS13.value = "";
            PayrolOFRate13.value = "";
            ComboCode13.value = "";
            Days13.value = "";
            Days13.enabled = false;
            Hours13.enabled = false;
            HDTHS13.enabled = false;
            PayrolOFRate13.enabled = false;
          //  gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        EmpRec13.value = "";
        Initials13.value = "";
        SSN13.value = "";
      SSN13_13.value = "";
        LastName13.value = "";
        Class13.value = "";
        Serial13.value = "";
        TRC13.value = "";
        Hours13.value = "";
        HDTHS13.value = "";
        PayrolOFRate13.value = "";
        ComboCode13.value = "";
        Days13.value = "";
        Days13.enabled = false;
        Hours13.enabled = false;
        HDTHS13.enabled = false;
        PayrolOFRate13.enabled = false;
       // gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId14_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId14_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId14.value !== EmpId1.value && EmpId14.value !== EmpId2.value && EmpId14.value !== EmpId3.value && EmpId14.value !== EmpId4.value && EmpId14.value !== EmpId5.value && EmpId14.value !== EmpId6.value && EmpId14.value !== EmpId7.value && EmpId14.value !== EmpId8.value && EmpId14.value !== EmpId9.value && EmpId14.value !== EmpId10.value && EmpId14.value !== EmpId11.value && EmpId14.value !== EmpId12.value && EmpId14.value !== EmpId13.value && EmpId14.value !== EmpId15.value && EmpId14.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours14.enabled = true;
                    HDTHS14.enabled = true;
                    ComboCode14.enabled = true;
                    Days14.enabled = true;
                  	PayrolOFRate14.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec14.value = myresopnse[0].EMPL_RCD;
                        Initials14.value = myresopnse[0].INITIALS;
                        SSN14.value = myresopnse[0].NATIONAL_ID;
                      SSN14_14.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN14.value;
                       SSN14_14.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN14.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName14.value = myresopnse[0].LAST_NAME;
                        Class14.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec14.value = myresopnse[n].EMPL_RCD;
                                    Initials14.value = myresopnse[n].INITIALS;
                                    SSN14.value = myresopnse[n].NATIONAL_ID;
                                   SSN14_14.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN14.value;
                                   SSN14_14.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN14.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName14.value = myresopnse[n].LAST_NAME;
                                    Class14.value = myresopnse[n].JOBCODE;

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
                        EmpRec14.value = "";
                        Initials14.value = "";
                        SSN14.value = "";
                      SSN14_14.value = "";
                        LastName14.value = "";
                        Class14.value = "";
                        Serial14.value = "";
                        TRC14.value = "";
                        Hours14.value = "";
                        HDTHS14.value = "";
                        PayrolOFRate14.value = "";
                        ComboCode14.value = "";
                        Days14.value = "";
                        Days14.enabled = false;
                        Hours14.enabled = false;
                        HDTHS14.enabled = false;
                        PayrolOFRate14.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
       /* } else {
            EmpId14.value = null;
            EmpRec14.value = "";
            Initials14.value = "";
            SSN14.value = "";
            SSN14_14.value = "";
            LastName14.value = "";
            Class14.value = "";
            Serial14.value = "";
            TRC14.value = "";
            Hours14.value = "";
            HDTHS14.value = "";
            PayrolOFRate14.value = "";
            ComboCode14.value = "";
            Days14.value = "";
            Days14.enabled = false;
            Hours14.enabled = false;
            HDTHS14.enabled = false;
            PayrolOFRate14.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        EmpRec14.value = "";
        Initials14.value = "";
        SSN14.value = "";
       SSN14_14.value = "";
        LastName14.value = "";
        Class14.value = "";
        Serial14.value = "";
        TRC14.value = "";
        Hours14.value = "";
        HDTHS14.value = "";
        PayrolOFRate14.value = "";
        ComboCode14.value = "";
        Days14.value = "";
        Days14.enabled = false;
        Hours14.enabled = false;
        HDTHS14.enabled = false;
        PayrolOFRate14.enabled = false;
        //gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId15_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId15_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId15.value !== EmpId1.value && EmpId15.value !== EmpId2.value && EmpId15.value !== EmpId3.value && EmpId15.value !== EmpId4.value && EmpId15.value !== EmpId5.value && EmpId15.value !== EmpId6.value && EmpId15.value !== EmpId7.value && EmpId15.value !== EmpId8.value && EmpId15.value !== EmpId9.value && EmpId15.value !== EmpId10.value && EmpId15.value !== EmpId11.value && EmpId15.value !== EmpId12.value && EmpId15.value !== EmpId13.value && EmpId15.value !== EmpId14.value && EmpId15.value !== EmpId16.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours15.enabled = true;
                    HDTHS15.enabled = true;
                    ComboCode15.enabled = true;
                    Days15.enabled = true;
                  	PayrolOFRate15.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec15.value = myresopnse[0].EMPL_RCD;
                        Initials15.value = myresopnse[0].INITIALS;
                        SSN15.value = myresopnse[0].NATIONAL_ID;
                      SSN15_15.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN15.value;
                       SSN15_15.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN15.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName15.value = myresopnse[0].LAST_NAME;
                        Class15.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec15.value = myresopnse[n].EMPL_RCD;
                                    Initials15.value = myresopnse[n].INITIALS;
                                    SSN15.value = myresopnse[n].NATIONAL_ID;
                                   SSN15_15.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN15.value;
                                   SSN15_15.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN15.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName15.value = myresopnse[n].LAST_NAME;
                                    Class15.value = myresopnse[n].JOBCODE;

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
                        EmpRec15.value = "";
                        Initials15.value = "";
                        SSN15.value = "";
                      SSN15_15.value = "";
                        LastName15.value = "";
                        Class15.value = "";
                        Serial15.value = "";
                        TRC15.value = "";
                        Hours15.value = "";
                        HDTHS15.value = "";
                        PayrolOFRate15.value = "";
                        ComboCode15.value = "";
                        Days15.value = "";
                        Days15.enabled = false;
                        Hours15.enabled = false;
                        HDTHS15.enabled = false;
                        PayrolOFRate15.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
       /* } else {
            EmpId15.value = null;
            EmpRec15.value = "";
            Initials15.value = "";
            SSN15.value = "";
          SSN15_15.value = "";
            LastName15.value = "";
            Class15.value = "";
            Serial15.value = "";
            TRC15.value = "";
            Hours15.value = "";
            HDTHS15.value = "";
            PayrolOFRate15.value = "";
            ComboCode15.value = "";
            Days15.value = "";
            Days15.enabled = false;
            Hours15.enabled = false;
            HDTHS15.enabled = false;
            PayrolOFRate15.enabled = false;
           // gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        EmpRec15.value = "";
        Initials15.value = "";
        SSN15.value = "";
      SSN15_15.value = "";
        LastName15.value = "";
        Class15.value = "";
        Serial15.value = "";
        TRC15.value = "";
        Hours15.value = "";
        HDTHS15.value = "";
        PayrolOFRate15.value = "";
        ComboCode15.value = "";
        Days15.value = "";
        Days15.enabled = false;
        Hours15.enabled = false;
        HDTHS15.enabled = false;
        PayrolOFRate15.enabled = false;
       // gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId16_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_EmpId16_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
       /* if (EmpId16.value !== EmpId1.value && EmpId16.value !== EmpId2.value && EmpId16.value !== EmpId3.value && EmpId16.value !== EmpId4.value && EmpId16.value !== EmpId5.value && EmpId16.value !== EmpId6.value && EmpId16.value !== EmpId7.value && EmpId16.value !== EmpId8.value && EmpId16.value !== EmpId9.value && EmpId16.value !== EmpId10.value && EmpId16.value !== EmpId11.value && EmpId16.value !== EmpId12.value && EmpId16.value !== EmpId13.value && EmpId16.value !== EmpId14.value && EmpId16.value !== EmpId15.value) {*/
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

                success: function(myresopnse) {
                    //alert("myresopnse.length="+myresopnse);
                    // debugger;
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    Hours16.enabled = true;
                    HDTHS16.enabled = true;
                    ComboCode16.enabled = true;
                    Days16.enabled = true;
                  	PayrolOFRate16.enabled = true;
                    if (myresopnse.length === 1) {

                        EmpRec16.value = myresopnse[0].EMPL_RCD;
                        Initials16.value = myresopnse[0].INITIALS;
                        SSN16.value = myresopnse[0].NATIONAL_ID;
                      SSN16_16.value = myresopnse[0].NATIONAL_ID;
                        var numbers = SSN16.value;
                       SSN16_16.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                        SSN16.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                        LastName16.value = myresopnse[0].LAST_NAME;
                        Class16.value = myresopnse[0].JOBCODE;


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
                        okButton.onclick = function(event) {
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

                                    EmpRec16.value = myresopnse[n].EMPL_RCD;
                                    Initials16.value = myresopnse[n].INITIALS;
                                    SSN16.value = myresopnse[n].NATIONAL_ID;
                                   SSN16_16.value = myresopnse[0].NATIONAL_ID;
                                    var numbers = SSN16.value;
                                   SSN16_16.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4)  + " - " + cwid;
                                    SSN16.value = 'XXX-' + 'XX-' + numbers.substr(5, 4);
                                    LastName16.value = myresopnse[n].LAST_NAME;
                                    Class16.value = myresopnse[n].JOBCODE;

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
                        EmpRec16.value = "";
                        Initials16.value = "";
                        SSN16.value = "";
                      SSN16_16.value = "";
                        LastName16.value = "";
                        Class16.value = "";
                        Serial16.value = "";
                        TRC16.value = "";
                        Hours16.value = "";
                        HDTHS16.value = "";
                        PayrolOFRate16.value = "";
                        ComboCode16.value = "";
                        Days16.value = "";
                        Days16.enabled = false;
                        Hours16.enabled = false;
                        HDTHS16.enabled = false;
                        PayrolOFRate16.enabled = false;
                        gifModal.style.display = "none";

                    }

                    span.onclick = function() {

                        modal.style.display = "none";
                    };

                }
            });
	   }
      /*  } else {
            EmpId16.value = null;
            EmpRec16.value = "";
            Initials16.value = "";
           SSN16_16.value = "";
            SSN16.value = "";
            LastName16.value = "";
            Class16.value = "";
            Serial16.value = "";
            TRC16.value = "";
            Hours16.value = "";
            HDTHS16.value = "";
            PayrolOFRate16.value = "";
            ComboCode16.value = "";
            Days16.value = "";
            Days16.enabled = false;
            Hours16.enabled = false;
            HDTHS16.enabled = false;
            PayrolOFRate16.enabled = false;
          //  gifModal.style.display = "none";
            showErrorModal("Alert !", "This Employee ID is already added, Please add a different one");
        }*/
    } else {
        EmpRec16.value = "";
        Initials16.value = "";
        SSN16.value = "";
       SSN16_16.value = "";
        LastName16.value = "";
        Class16.value = "";
        Serial16.value = "";
        TRC16.value = "";
        Hours16.value = "";
        HDTHS16.value = "";
        PayrolOFRate16.value = "";
        ComboCode16.value = "";
        Days16.value = "";
        Days16.enabled = false;
        Hours16.enabled = false;
        HDTHS16.enabled = false;
        PayrolOFRate16.enabled = false;
       // gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827531558331191210_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827531558331191210_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827541558331191290_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827541558331191290_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827551558331191308_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827551558331191308_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827561558331191326_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827561558331191326_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827571558331191343_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827571558331191343_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827581558331191362_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827581558331191362_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827591558331191381_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827591558331191381_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827601558331191399_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827601558331191399_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827611558331191417_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_tableItem15583311827611558331191417_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalDays_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalDays_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalHours_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalHours_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalHDTHS_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalHDTHS_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalAmt_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_TotalAmt_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthCB_valueCommit0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthSign_init0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthSign_valueCommit0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_AuthDate_init0 = function (scope) {
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
        AuthDate.value = d;

       
}
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_ManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_ManagerCB_valueCommit0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_ManagerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_ManagerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_ManagerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_ManagerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollCB_valueCommit0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollSign_valueCommit0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_PayRollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_panel1610958881339_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_panel1610958881339_init0 = function (scope) {
    with(this) {
        with(scope) {
            /*
if(StageIndicator.value == "ToPayroll"){
  SSN1.value = SSN1_1.value;
SSN2.value = SSN2_2.value;
SSN3.value = SSN3_3.value;
SSN4.value = SSN4_4.value;
SSN5.value = SSN5_5.value;
SSN6.value = SSN6_6.value;
SSN7.value = SSN7_7.value;
SSN8.value = SSN8_8.value;
SSN9.value = SSN9_9.value;
SSN10.value = SSN10_10.value;
SSN11.value = SSN11_11.value;
SSN12.value = SSN12_12.value;
SSN13.value = SSN13_13.value;
SSN14.value = SSN14_14.value;
SSN15.value = SSN15_15.value;
SSN16.value = SSN16_16.value;
}*/


if(StageIndicator.value == "ToPayroll"){
  	 
  	if(SSN1_1.value !== null){
      	var checkEmpl1 = SSN1_1.value;                  	
        var bothValue1 = checkEmpl1.split(" - "); 
        var unMaskedSSN1 = bothValue1[0];              
    }
	SSN1.value = unMaskedSSN1;
  
    if(SSN2_2.value !== null){
      var checkEmpl2 = SSN2_2.value;                  	
      var bothValue2 = checkEmpl2.split(" - "); 
      var unMaskedSSN2 = bothValue2[0];              
    }
	SSN2.value = unMaskedSSN2;
  
  	if(SSN3_3.value !== null){
      var checkEmpl3 = SSN3_3.value;                  	
      var bothValue3 = checkEmpl3.split(" - "); 
      var unMaskedSSN3 = bothValue3[0];              
    }
	SSN3.value = unMaskedSSN3;
  
  	if(SSN4_4.value !== null){
      var checkEmpl4 = SSN4_4.value;                  	
      var bothValue4 = checkEmpl4.split(" - "); 
      var unMaskedSSN4 = bothValue4[0];              
    }
	SSN4.value = unMaskedSSN4;
  
    if(SSN5_5.value !== null){
      var checkEmpl5 = SSN5_5.value;                  	
      var bothValue5 = checkEmpl5.split(" - "); 
      var unMaskedSSN5 = bothValue5[0];              
    }
	SSN5.value = unMaskedSSN5;
  
  	if(SSN6_6.value !== null){
      var checkEmpl6 = SSN6_6.value;                  	
      var bothValue6 = checkEmpl6.split(" - "); 
      var unMaskedSSN6 = bothValue6[0];              
    }
	SSN6.value = unMaskedSSN6;
  	
  	if(SSN7_7.value !== null){
      var checkEmpl7 = SSN7_7.value;                  	
      var bothValue7 = checkEmpl7.split(" - "); 
      var unMaskedSSN7 = bothValue7[0];              
    }
	SSN7.value = unMaskedSSN7;
  	
  	if(SSN8_8.value !== null){
      var checkEmpl8 = SSN8_8.value;                  	
      var bothValue8 = checkEmpl8.split(" - "); 
      var unMaskedSSN8 = bothValue8[0];              
    }
	SSN8.value = unMaskedSSN8;
  
  	if(SSN9_9.value !== null){
      var checkEmpl9 = SSN9_9.value;                  	
      var bothValue9 = checkEmpl9.split(" - "); 
      var unMaskedSSN9 = bothValue9[0];              
    }
	SSN9.value = unMaskedSSN9;
  
	if(SSN10_10.value !== null){
      var checkEmpl10 = SSN10_10.value;                  	
      var bothValue10 = checkEmpl10.split(" - "); 
      var unMaskedSSN10 = bothValue10[0];              
    }
	SSN10.value = unMaskedSSN10;
  
	if(SSN11_11.value !== null){
      var checkEmpl11 = SSN11_11.value;                  	
      var bothValue11 = checkEmpl11.split(" - "); 
      var unMaskedSSN11 = bothValue11[0];              
    }
	SSN11.value = unMaskedSSN11;
	
	if(SSN12_12.value !== null){
      var checkEmpl12 = SSN12_12.value;                  	
      var bothValue12 = checkEmpl12.split(" - "); 
      var unMaskedSSN12 = bothValue12[0];              
    }
	SSN12.value = unMaskedSSN12;
  
	if(SSN13_13.value !== null){
      var checkEmpl13 = SSN13_13.value;                  	
      var bothValue13 = checkEmpl13.split(" - "); 
      var unMaskedSSN13 = bothValue13[0];              
    }
	SSN13.value = unMaskedSSN13;
	
	if(SSN14_14.value !== null){
      var checkEmpl14 = SSN14_14.value;                  	
      var bothValue14 = checkEmpl14.split(" - "); 
      var unMaskedSSN14 = bothValue14[0];              
    }
	SSN14.value = unMaskedSSN14;
	
	if(SSN15_15.value !== null){
      var checkEmpl15 = SSN15_15.value;                  	
      var bothValue15 = checkEmpl15.split(" - "); 
      var unMaskedSSN15 = bothValue15[0];              
    }
	SSN15.value = unMaskedSSN15;
	
	if(SSN16_16.value !== null){
      var checkEmpl16 = SSN16_16.value;                  	
      var bothValue16 = checkEmpl16.split(" - "); 
      var unMaskedSSN16 = bothValue16[0];              
    }
	SSN16.value = unMaskedSSN16;
}


        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated__click0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;
/*if (DepartmentId.value === null) {
 showErrorModal("Alert!","Please enter Department ID"); 
  }else if(Unit.value === null){
    showErrorModal("Alert!","Please enter Unit"); 
  }else if(Month.value === null){
    showErrorModal("Alert!","Please enter Month"); 
  }else if(Year.value === null){
    showErrorModal("Alert!","Please enter Year"); 
  }else if(AuthCB.value === null){
   showErrorModal("Alert!","Please fill all the required fields"); 
  }else{*/

  
//}


if (DepartmentId.value === null) {
 	showErrorModal("Alert!","Please enter department ID to generate the PDF"); 
}else{
  	getPdf();
}


function getPdf() {
  
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/misc-payroll-request-distributed/miscellaneous-payroll-request-distributed');
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_saveguidedraft1596199610282_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_saveguidedraft1596199610282_click0 = function (scope) {
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_submit_13966870281576568571969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated_submit_13966870281576568571969_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag =0;

emailSubject.value = "Miscellaneous Payroll Request";

if(submitFlag === 0){
   if(DepartmentId.value !== null){
   
        aftiaDescCWID.value = (DepartmentId.value + " " + Month.value + " " + Year.value);
   
  }
  
  //ManagerEmailId.value = "yjayaram@fullerton.edu";
  //ManagerEmailId.value = "ajeet.chhonkar@thoughtfocus.com";
  ManagerEmailId.value = "yjayaram@fullerton.edu";
  HiddenManagerEmail.value = "yjayaram@fullerton.edu";
 
  
  if(EmpId1.value === null){
    	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].panelTable[0].table1557920669013[0].Row15580662158611558066218348[0].EmpId1[0]");
    	showErrorModal("Alert !", "At least one row should be filled");
  }
  else{
    	guideBridge.submit();
  }  
}


        }
	}
}
/**
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated__click00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated__click00 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/misc-payroll-request-distributed/miscellaneous-payroll-request-distributed');
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
 * @function misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated__click01
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
misc_payroll_request_distributed_miscellaneous_payroll_request_distributed.generated__click01 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/misc-payroll-request-distributed/miscellaneous-payroll-request-distributed');
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
