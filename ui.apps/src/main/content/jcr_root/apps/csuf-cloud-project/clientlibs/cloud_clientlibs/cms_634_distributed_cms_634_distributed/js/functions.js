/**
 * @function cms_634_distributed_cms_634_distributed.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

FormInitiator.value ="1";

$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
//alert("userValue="+userValue);
LogUser.value = userValue;
 // userValue ='jluzzi';
    $.ajax({
        type: 'GET',
        url: "/bin/getCMS634UserLookup",
        data: {
            
            userId: userValue
        },
        dataType: 'json',
        success: function(myresopnse) {
            
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 1) {
                
                SCOPosNum.value = myresopnse[0].SCONUM;
             	SSN.value =myresopnse[0].NATIONAL_ID;
                var str = myresopnse[0].NATIONAL_ID;
                var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;
              	DeptName.value = myresopnse[0].DEPTNAME;
              	DeptID.value = myresopnse[0].DEPTID;
             	MiddleName.value =myresopnse[0].MIDDLE_NAME; 
              	FirstName.value = myresopnse[0].FIRST_NAME; 
                LastName.value  = myresopnse[0].LAST_NAME; 
                EmplID.value = myresopnse[0].EMPLID;
              	UserVal.value = myresopnse[0].EMPLID;
              	Cbid.value = myresopnse[0].UNION_CD;
              	DivisionId.value = myresopnse[0].FUL_DIVISION;
              	DivisionName.value = myresopnse[0].FUL_DIVISION_NAME;
                
              //Start
              var cbidVal = Cbid.value;
                    var deptIdVal = DeptID.value;
                    var empIdVal = EmplID.value;
               
                    $.ajax({

                        type: 'GET',

                        url: "/bin/getManagerDetails",
                        data: {
                            deptid: deptIdVal,
                            cwid: empIdVal,
                            union_cd: cbidVal

                        },
                        dataType: 'json',
                        success: function(managerDetails) {
                            ManagerUserID.value = managerDetails[0].MANAGER_EMP_USERID; //MANAGER_EMP_USERID
                          
                            ManagerEmailID.value = managerDetails[0].MANAGER_EMAIL_ID;
                          	
                          	managerName.value = managerDetails[0].MANAGER_NAME;
                          	
                            ManagerEmailID.value = "pushpa.kawadi@thoughtfocus.com";

                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });  
              //End
              var agencyVal = "242";
              var fieldVal1 = "EMP_TK_PRI";
              var fieldVal2 = "EMP_AP_OFF";
               getTimekeeperData(DeptID.value,DivisionId.value,agencyVal,fieldVal1);
              //getTimekeeperData('10074','10237','242','STU_CT_AP_PRI');
              getAuthApproverData(DeptID.value,DivisionId.value,agencyVal,fieldVal2);
              
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 1) {
               
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("EMPLID");
                col.push("FIRST_NAME");
                col.push("LAST_NAME");
                //col.push("MIDDLE_NAME");
              	col.push("EMPL_RCD");
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Empl_ID","First_Name", "Last_Name","EMPL_RCD", "Department ID", "Department Name"];
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
                        
                        deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                        DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                        EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                       
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
                  
                PosNumHidden.value = myresopnse[n].SCO_POSITION_NUM;
                SSNHidden.value = myresopnse[n].NATIONAL_ID;
                DeptNameHidden.value = myresopnse[n].DEPTNAME;
                MiddleNameHidden.value = myresopnse[n].MIDDLE_NAME;
                lnameHidden.value = myresopnse[n].LAST_NAME;
                fnameHidden.value = myresopnse[n].FIRST_NAME;
                //EmpIdHidden.value = myresopnse[n].EMPLID;
                EmplRCDHidden.value =  myresopnse[n].EMPL_RCD;
                deptHidden.value= myresopnse[n].DEPTID;      
                EmpIdHidden.value = myresopnse[n].EMPLID; 
                EmpEmailID.value = myresopnse[n].EMP_EMAIL_ID;
                Cbid.value = myresopnse[n].UNION_CD;
                HiddenCWIDFlag.value = EmpIdHidden.value;
                rButtonStatus = true;
                break;
                }
              }
              if(rButtonStatus === false){
                alert("Please select the department");
                modal.style.display = "block";
              }else {
                
                PositionNumber.value = PosNumHidden.value;
                SSN.value = SSNHidden.value;
                
                var str = SSNHidden.value;
                var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;
                
                DeptName.value = DeptNameHidden.value;
                EmplRCD.value = EmplRCDHidden.value;
                MiddleName.value = MiddleNameHidden.value;
                DeptID.value = deptHidden.value;
                LastName.value = lnameHidden.value;
                FirstName.value = fnameHidden.value;
                EmplID.value = EmpIdHidden.value;
                HiddenCWIDFlag.value = EmpIdHidden.value;  
                
                var cbidVal = Cbid.value;
                    var deptIdVal = DeptID.value;
                    var empIdVal = EmplID.value;
               
                    $.ajax({

                        type: 'GET',

                        url: "/bin/getManagerDetails",
                        data: {
                            deptid: deptIdVal,
                            cwid: empIdVal,
                            union_cd: cbidVal

                        },
                        dataType: 'json',
                        success: function(managerDetails) {
                            ManagerUserID.value = managerDetails[0].MANAGER_EMP_USERID; //MANAGER_EMP_USERID
                          
                            ManagerEmailID.value = managerDetails[0].MANAGER_EMAIL_ID;
                          	
                          	managerName.value = managerDetails[0].MANAGER_NAME;
                          	
                            ManagerEmailID.value = "pushpa.kawadi@thoughtfocus.com";

                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    }); 
                // gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                //alert("Invalid Employee ID");
              
              showErrorModal("Alert !","No matching records found");
                        PositionNumber.value = null;
                        SSN.value = null;
                        DeptName.value = null;
                        DeptID.value = null;
                        EmplRCD.value = null;
                        MiddleName.value = null;
                        FirstName.value = null;
                        LastName.value = null;
                        EmplID.value = null;
                       
                     
              PosNumHidden.value = null;
              SSNHidden.value = null;
              deptHidden.value = null;
              DeptNameHidden.value = null;
              EmpIdHidden.value = null;
              MiddleNameHidden.value = null;
              fnameHidden.value = null;
               lnameHidden.value = null;
              EmpIdHidden.value= null;
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
                alert("Please select the department");
                modal.style.display = "block";
              }else{
                
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
error: function(error){
alert("error block="+error);
  loadingText.visible = false; 
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
if (this.value !== null) {
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
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
             var gifModal = document.getElementById('gifModal');
gifModal.sytle.display = "none";
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  signatureReview.visible =true;
  HRSection.visible = true;
  /*if(FormInitiator.value === "1"){
    EmployeePanel.visible = true;
	TimeKeeperPanel.visible = false;
  } else{
    EmployeePanel.visible = false;
	TimeKeeperPanel.visible = true;
  }*/
  EmployeePanel.visible = true;
  TimeKeeperPanel.visible = false;
  SupPanel.visible = false;
  AuthSignPanel.visible = false;
  PayrollReviewPanel.visible = false;
}

if(StageIndicator.value === "ToTimeKeeper"){
  signatureReview.visible =true;
  HRSection.visible = true;
  EmployeePanel.enabled = false;
  TimeKeeperPanel.visible = true;
  SupPanel.visible = false;
  AuthSignPanel.visible = false;
  PayrollReviewPanel.visible = false;
}

if(StageIndicator.value === "ToManager"){
  signatureReview.visible =true;
  HRSection.visible = true;
  //EmployeePanel.enabled = false;
  //TimeKeeperPanel.enabled = false;
    if(FormInitiator.value === "1"){
    EmployeePanel.enabled = false;
	TimeKeeperPanel.enabled = false;
  } else if(FormInitiator.value === "2"){
    EmployeePanel.visible = false;
	TimeKeeperPanel.enabled = false;
  }
  
  SupPanel.visible = true;
  AuthSignPanel.visible = false;
  PayrollReviewPanel.visible = false;
}

if(StageIndicator.value === "ToDOAManager"){
  signatureReview.visible =true;
  HRSection.visible = true;
  //EmployeePanel.enabled = false;
  //TimeKeeperPanel.enabled = false;
  if(FormInitiator.value === "1"){
    EmployeePanel.enabled = false;
	TimeKeeperPanel.enabled = false;
  } else if(FormInitiator.value === "2"){
    EmployeePanel.visible = false;
	TimeKeeperPanel.enabled = false;
  }
  
  
  SupPanel.enabled = false;
  AuthSignPanel.visible = true;
  PayrollReviewPanel.visible = false;
}

if(StageIndicator.value === "ToPayroll"){
  signatureReview.visible =true;
  HRSection.visible = true;
  //EmployeePanel.enabled = false;
  //TimeKeeperPanel.enabled = false;
  if(FormInitiator.value === "1"){
    EmployeePanel.enabled = false;
	TimeKeeperPanel.enabled = false;
  } else if(FormInitiator.value === "2"){
    EmployeePanel.visible = false;
	TimeKeeperPanel.enabled = false;
  }
  SupPanel.enabled = false;
  AuthSignPanel.enabled = false;
  PayrollReviewPanel.visible = true;
}

        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var empId =  this.value;
  
if(UserVal.value !== empId){
var userValue = LogUser.value;
 FormInitiator.value ="2";
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
$.ajax({
        type: 'GET',
        url: "/bin/getCMS634EmpLookup",
        data: {
            
            userId: userValue,
			empId : empId
        },
        dataType: 'json',
        success: function(myresopnse) {
            
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 1) {
                
                SCOPosNum.value = myresopnse[0].SCONUM;
             	SSN.value =myresopnse[0].NATIONAL_ID;
                var str = myresopnse[0].NATIONAL_ID;
                var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;
              	DeptName.value = myresopnse[0].DEPTNAME;
              	DeptID.value = myresopnse[0].DEPTID;
             	MiddleName.value =myresopnse[0].MIDDLE_NAME; 
              	FirstName.value = myresopnse[0].FIRST_NAME; 
                LastName.value  = myresopnse[0].LAST_NAME; 
                EmplID.value = myresopnse[0].EMPLID;
              	UserVal.value = myresopnse[0].EMPLID;
              	Cbid.value = myresopnse[0].UNION_CD;
              	DivisionId.value = myresopnse[0].FUL_DIVISION;
              	DivisionName.value = myresopnse[0].FUL_DIVISION_NAME;
                
              //Start
              var cbidVal = Cbid.value;
                    var deptIdVal = DeptID.value;
                    var empIdVal = EmplID.value;
               
                    $.ajax({

                        type: 'GET',

                        url: "/bin/getManagerDetails",
                        data: {
                            deptid: deptIdVal,
                            cwid: empIdVal,
                            union_cd: cbidVal

                        },
                        dataType: 'json',
                        success: function(managerDetails) {
                            ManagerUserID.value = managerDetails[0].MANAGER_EMP_USERID; //MANAGER_EMP_USERID
                          
                            ManagerEmailID.value = managerDetails[0].MANAGER_EMAIL_ID;
                          	
                          	managerName.value = managerDetails[0].MANAGER_NAME;
                          	
                            ManagerEmailID.value = "pushpa.kawadi@thoughtfocus.com";

                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    });  
              //End
              var agencyVal = "242";
              var fieldVal1 = "EMP_TK_PRI";
              var fieldVal2 = "EMP_AP_OFF";
               getTimekeeperData(DeptID.value,DivisionId.value,agencyVal,fieldVal1);
              //getTimekeeperData('10074','10237','242','STU_CT_AP_PRI');
              getAuthApproverData(DeptID.value,DivisionId.value,agencyVal,fieldVal2);
              
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 1) {
               
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("EMPLID");
                col.push("FIRST_NAME");
                col.push("LAST_NAME");
                //col.push("MIDDLE_NAME");
              	col.push("EMPL_RCD");
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Empl_ID","First_Name", "Last_Name","EMPL_RCD", "Department ID", "Department Name"];
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
                        
                        deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                        DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                        EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                       
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
                  
                PosNumHidden.value = myresopnse[n].SCO_POSITION_NUM;
                SSNHidden.value = myresopnse[n].NATIONAL_ID;
                DeptNameHidden.value = myresopnse[n].DEPTNAME;
                MiddleNameHidden.value = myresopnse[n].MIDDLE_NAME;
                lnameHidden.value = myresopnse[n].LAST_NAME;
                fnameHidden.value = myresopnse[n].FIRST_NAME;
                //EmpIdHidden.value = myresopnse[n].EMPLID;
                EmplRCDHidden.value =  myresopnse[n].EMPL_RCD;
                deptHidden.value= myresopnse[n].DEPTID;      
                EmpIdHidden.value = myresopnse[n].EMPLID; 
                EmpEmailID.value = myresopnse[n].EMP_EMAIL_ID;
                Cbid.value = myresopnse[n].UNION_CD;
                HiddenCWIDFlag.value = EmpIdHidden.value;
                rButtonStatus = true;
                break;
                }
              }
              if(rButtonStatus === false){
                alert("Please select the department");
                modal.style.display = "block";
              }else {
                
                PositionNumber.value = PosNumHidden.value;
                SSN.value = SSNHidden.value;
                
                var str = SSNHidden.value;
                var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;
                
                DeptName.value = DeptNameHidden.value;
                EmplRCD.value = EmplRCDHidden.value;
                MiddleName.value = MiddleNameHidden.value;
                DeptID.value = deptHidden.value;
                LastName.value = lnameHidden.value;
                FirstName.value = fnameHidden.value;
                EmplID.value = EmpIdHidden.value;
                HiddenCWIDFlag.value = EmpIdHidden.value;  
                
                var cbidVal = Cbid.value;
                    var deptIdVal = DeptID.value;
                    var empIdVal = EmplID.value;
               
                    $.ajax({

                        type: 'GET',

                        url: "/bin/getManagerDetails",
                        data: {
                            deptid: deptIdVal,
                            cwid: empIdVal,
                            union_cd: cbidVal

                        },
                        dataType: 'json',
                        success: function(managerDetails) {
                            ManagerUserID.value = managerDetails[0].MANAGER_EMP_USERID; //MANAGER_EMP_USERID
                          
                            ManagerEmailID.value = managerDetails[0].MANAGER_EMAIL_ID;
                          	
                          	managerName.value = managerDetails[0].MANAGER_NAME;
                          	
                            ManagerEmailID.value = "pushpa.kawadi@thoughtfocus.com";

                        },
                        error: function(error) {
                            alert("error block=" + error);
                        }
                    }); 
                // gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                //alert("Invalid Employee ID");
              
              showErrorModal("Alert !","No matching records found");
                        PositionNumber.value = null;
                        SSN.value = null;
                        DeptName.value = null;
                        DeptID.value = null;
                        EmplRCD.value = null;
                        MiddleName.value = null;
                        FirstName.value = null;
                        LastName.value = null;
                        EmplID.value = null;
                       
                     
              PosNumHidden.value = null;
              SSNHidden.value = null;
              deptHidden.value = null;
              DeptNameHidden.value = null;
              EmpIdHidden.value = null;
              MiddleNameHidden.value = null;
              fnameHidden.value = null;
               lnameHidden.value = null;
              EmpIdHidden.value= null;
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
                alert("Please select the department");
                modal.style.display = "block";
              }else{
                
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
if (this.value !== null) {
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
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_ReleationShipCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_ReleationShipCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_textdraw1611560257810_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_textdraw1611560257810_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (EmpSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            EmpDate.value = d;

            EmpDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    EmpSign.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           EmpSign.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    EmpSign.value = "";
   // HiringDeptName.value = "";
}
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_TimekeeperCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_TimekeeperCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (TimekeeperSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            TimekeeperDate.value = d;

            TimekeeperDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    TimekeeperSign.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           TimekeeperSign.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    TimekeeperSign.value = "";
   // HiringDeptName.value = "";
}
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_checkbox1613650413094_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_checkbox1613650413094_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (SupSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            SupDate.value = d;

            SupDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    SupSign.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           SupSign.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    SupSign.value = "";
   // HiringDeptName.value = "";
}
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_DOACB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_DOACB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    //if (StageIndicator.value == "ToHRCoo") {
        if (DOASign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            DOADate.value = d;

            DOADate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    DOASign.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           //DOASign.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    DOASign.value = "";
   // HiringDeptName.value = "";
}
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_PayrollDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_PayrollDeptCB_valueCommit0 = function (scope) {
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
 * @function cms_634_distributed_cms_634_distributed.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = "false";
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_FormInitiator_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_FormInitiator_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(FormInitiator.value === "1"){
  
    EmployeePanel.visible = true;
	TimeKeeperPanel.visible = false;
  } else if(FormInitiator.value === "2"){
    
    EmployeePanel.visible = false;
	TimeKeeperPanel.visible = true;
  }
}
        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (EmplID.value !== null && FirstName.value !== null && LastName !== null) {
  submitFlag=0;
      
 } else{
     showErrorModal("Alert !","Please enter Empl ID, First Name, Last Name");
            
submitFlag =1;

 }

//alert("submitFlag="+submitFlag);

if( submitFlag === 0){
  getPdf();
}

  

function getPdf() {
    //alert("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("result=" + result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/cms-634-distributed/cms-634-distributed');
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
 * @function cms_634_distributed_cms_634_distributed.generated_saveguidedraft1598011063299_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_saveguidedraft1598011063299_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);
if(EmplID.value !== null){
  formSavedStatus.value = "1";
  handleDraftSave(this);
}else{
    handleDraftSave(this);
}


        }
	}
}
/**
 * @function cms_634_distributed_cms_634_distributed.generated_submit1598011084969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cms_634_distributed_cms_634_distributed.generated_submit1598011084969_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);

TimekeeperEmailId.value="pushpa.kawadi@thoughtfocus.com";
ManagerEmailID.value="pushpa.kawadi@thoughtfocus.com";
AuthApproverEmailId.value = "pushpa.kawadi@thoughtfocus.com";

guideBridge.submit();


        }
	}
}
