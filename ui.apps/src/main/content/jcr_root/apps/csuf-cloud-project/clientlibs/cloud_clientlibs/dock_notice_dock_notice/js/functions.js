/**
 * @function dock_notice_dock_notice.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_guideRootPanel_init0 = function (scope) {
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
logUser.value = userValue;
  //userValue ='nvadlakunta';
    $.ajax({
        type: 'GET',
        url: "/bin/getDockNoticeUserServlet",
        data: {
            
            userID: userValue
        },
        dataType: 'json',
        success: function(myresopnse) {
         
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 1) {
               
                PositionNumber.value = myresopnse[0].SCO_POSITION_NUM;
             	SSN.value =myresopnse[0].NATIONAL_ID;              	
                
                var numbers = SSN.value;
                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);    
                /*var str = myresopnse[0].NATIONAL_ID;
              	//SSN.value =  str.substring(0, 3)+"-"+str.substring(3, 2)+"-"+str.substring(5, 4);
             	//alert(SSN.value);
              	//SSNHidden.value = SSN.value;
              	SSN.value = 'XXX-' + 'XX-' + str.substr(5, 4);
              	//maskSSN.value = SSN.value;
              	maskSSN.value = str.substring(0, 3)+"-"+str.substring(3, 2)+"-"+str.substring(5, 4);*/
                
              /*var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;*/
             	//maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);
             	//maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);
               
                //maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);
                
                DeptName.value = myresopnse[0].DEPTNAME;
                EmplRCD.value = myresopnse[0].EMPL_RCD;
                MiddleName.value = myresopnse[0].MIDDLE_NAME;
              	DeptID.value= myresopnse[0].DEPTID;
              	Cbid.value = myresopnse[0].UNION_CD;
              	//alert(Cbid.value);
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EmplID.value = myresopnse[0].EMPLID;
              	EmpEmailID.value = myresopnse[0].EMP_EMAIL_ID;
                Unit.value =myresopnse[0].CSU_UNIT;
              	Division.value=myresopnse[0].FUL_DIVISION;
                HiddenCWIDFlag.value = EmplID.value;
              //Start
             /* var cbidVal = Cbid.value;
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
                    });  */
              //End
              
              
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
                SSN.value =myresopnse[0].NATIONAL_ID;
                var numbers = SSN.value;
                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);   
                /*var str = myresopnse[0].NATIONAL_ID;
                SSN.value = 'XXX-' + 'XX-' + str.substr(5, 4);  
                //maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);  
               	//console.log("Second from User Lookup= "+ maskSSN.value); 
               	 maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);  */          	
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
                SSNHidden.value  = myresopnse[n].NATIONAL_ID;
                 Unit.value =myresopnse[n].CSU_UNIT;
                Division.value=myresopnse[n].FUL_DIVISION;
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
               // SSN.value = SSNHidden.value;
               
                /*var str1 = SSN.value;
                var substr = str1.substring(str1.length-4, str1.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                //maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);
                maskSSN.value = str1.substring(0,3)+"-"+str1.substring(3,2)+"-"+str1.substring(5,4);  
                SSN.value = resultVal;*/
                
                
                /*var str1 = SSN.value;
                var substr = str1.substring(str1.length-4, str1.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;*/
                SSN.value =myresopnse[0].NATIONAL_ID;
                var ssnNumber = SSN.value;
                SSN.value = "XXX-XX-"+ssnNumber.substr(5, 4);
                maskSSN.value = ssnNumber.substr(0, 3)+"-"+ssnNumber.substr(3, 2)+"-"+ssnNumber.substr(5, 4); 
                /*var strVal = myresopnse[0].NATIONAL_ID;
                SSN.value = 'XXX-' + 'XX-' + strVal.substr(5, 4);
             	//maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);
             	maskSSN.value = str1.substring(0,3)+"-"+str1.substring(3,2)+"-"+str1.substring(5,4);
              */
                DeptName.value = DeptNameHidden.value;
                EmplRCD.value = EmplRCDHidden.value;
                MiddleName.value = MiddleNameHidden.value;
                DeptID.value = deptHidden.value;
                LastName.value = lnameHidden.value;
                FirstName.value = fnameHidden.value;
                EmplID.value = EmpIdHidden.value;
                HiddenCWIDFlag.value = EmpIdHidden.value;  
                
                /*var cbidVal = Cbid.value;
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
                    }); */
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

        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  
//signatureReview.visible =true;
  //HRSection.visible = true;
  SupPanel.visible = false;
  PayrollPanel.visible = false;
}

if(StageIndicator.value === "ToSupervisor"){
  
  basicInformation.enabled = false;
  
  var rowCount = AbsentDetails.instanceManager.instanceCount;
  AbsentDetails.enabled = false;
  for (i = 0; i < rowCount; i++) {
    AbsentDetails.instanceManager.instances[i].DateAbsent.enabled = false;
     AbsentDetails.instanceManager.instances[i].HourAbsent.enabled = false;
  }
  /*AbsentDetails.enabled =false;
  AbsentDetails.DateAbsent.enabled =false;
  AbsentDetails.HourAbsent.enabled =false;*/
  SupPanel.visible = true;
  SupPanel.enabled =  true;
  PayrollPanel.visible = false;
  
}
if(StageIndicator.value === "ToPayroll"){
  basicInformation.enabled = false;
  SSN.value = maskSSN.value;
  DateAbsent.enabled = false;  
  HourAbsent.enabled = false;
  SupPanel.visible = true;
  SupPanel.enabled = false;
  PayrollPanel.visible = true;
  PayrollPanel.enabled = true;
}

        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_guideRootPanel_init2 = function (scope) {
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
logUser.value = userValue;
  //userValue ='nvadlakunta';
    $.ajax({
        type: 'GET',
        url: "/bin/chrsIDUpdateServlet",
        data: {
            action:"DOCK_NOTICE_USER",
            userId: userValue
        },
        dataType: 'json',
        success: function(myresopnse) {
         
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 1) {
               
                PositionNumber.value = myresopnse[0].SCO_POSITION_NUM;
             	SSN.value =myresopnse[0].NATIONAL_ID;              	
                
                var numbers = SSN.value;
                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);    
                /*var str = myresopnse[0].NATIONAL_ID;
              	//SSN.value =  str.substring(0, 3)+"-"+str.substring(3, 2)+"-"+str.substring(5, 4);
             	//alert(SSN.value);
              	//SSNHidden.value = SSN.value;
              	SSN.value = 'XXX-' + 'XX-' + str.substr(5, 4);
              	//maskSSN.value = SSN.value;
              	maskSSN.value = str.substring(0, 3)+"-"+str.substring(3, 2)+"-"+str.substring(5, 4);*/
                
              /*var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;*/
             	//maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);
             	//maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);
               
                //maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);
                
                DeptName.value = myresopnse[0].DEPTNAME;
                EmplRCD.value = myresopnse[0].EMPL_RCD;
                MiddleName.value = myresopnse[0].MIDDLE_NAME;
              	DeptID.value= myresopnse[0].DEPTID;
              	Cbid.value = myresopnse[0].UNION_CD;
              	//alert(Cbid.value);
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EmplID.value = myresopnse[0].EMPLID;
                CHRSID.value = myresopnse[0].CSU_CHRS_ID;
             // EmpEmailID.value = myresopnse[0].EMP_EMAIL_ID;
                EmpEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                Unit.value =myresopnse[0].CSU_UNIT;
              	Division.value=myresopnse[0].FUL_DIVISION;
                HiddenCWIDFlag.value = EmplID.value;
                HiddenCHRSIDFlag.value = CHRSID.value;
              //Start
             /* var cbidVal = Cbid.value;
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
                    });  */
              //End
              
              
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 1) {
                
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
                col.push("EMPLID");
                col.push("CSU_CHRS_ID");
                col.push("FIRST_NAME");
                col.push("LAST_NAME");
                //col.push("MIDDLE_NAME");
              	col.push("EMPL_RCD");
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Empl_ID", "CHRS_ID", "First_Name", "Last_Name","EMPL_RCD", "Department ID", "Department Name"];
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
                SSN.value =myresopnse[0].NATIONAL_ID;
                var numbers = SSN.value;
                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4);   
                /*var str = myresopnse[0].NATIONAL_ID;
                SSN.value = 'XXX-' + 'XX-' + str.substr(5, 4);  
                //maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);  
               	//console.log("Second from User Lookup= "+ maskSSN.value); 
               	 maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);  */          	
                DeptNameHidden.value = myresopnse[n].DEPTNAME;
                MiddleNameHidden.value = myresopnse[n].MIDDLE_NAME;
                lnameHidden.value = myresopnse[n].LAST_NAME;
                fnameHidden.value = myresopnse[n].FIRST_NAME;
                //EmpIdHidden.value = myresopnse[n].EMPLID;
                EmplRCDHidden.value =  myresopnse[n].EMPL_RCD;
                deptHidden.value= myresopnse[n].DEPTID;      
                EmpIdHidden.value = myresopnse[n].EMPLID; 
                CHRSIDHidden.value = myresopnse[n].CSU_CHRS_ID;
                //EmpEmailID.value = myresopnse[n].EMP_EMAIL_ID;
                EmpEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                Cbid.value = myresopnse[n].UNION_CD;
                SSNHidden.value  = myresopnse[n].NATIONAL_ID;
                 Unit.value =myresopnse[n].CSU_UNIT;
                Division.value=myresopnse[n].FUL_DIVISION;
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
               // SSN.value = SSNHidden.value;
               
                /*var str1 = SSN.value;
                var substr = str1.substring(str1.length-4, str1.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                //maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);
                maskSSN.value = str1.substring(0,3)+"-"+str1.substring(3,2)+"-"+str1.substring(5,4);  
                SSN.value = resultVal;*/
                
                
                /*var str1 = SSN.value;
                var substr = str1.substring(str1.length-4, str1.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;*/
                SSN.value =myresopnse[0].NATIONAL_ID;
                var ssnNumber = SSN.value;
                SSN.value = "XXX-XX-"+ssnNumber.substr(5, 4);
                maskSSN.value = ssnNumber.substr(0, 3)+"-"+ssnNumber.substr(3, 2)+"-"+ssnNumber.substr(5, 4); 
                /*var strVal = myresopnse[0].NATIONAL_ID;
                SSN.value = 'XXX-' + 'XX-' + strVal.substr(5, 4);
             	//maskSSN.value = str.substr(0,3)+"-"+str.substr(3,2)+"-"+str.substr(5,4);
             	maskSSN.value = str1.substring(0,3)+"-"+str1.substring(3,2)+"-"+str1.substring(5,4);
              */
                DeptName.value = DeptNameHidden.value;
                EmplRCD.value = EmplRCDHidden.value;
                MiddleName.value = MiddleNameHidden.value;
                DeptID.value = deptHidden.value;
                LastName.value = lnameHidden.value;
                FirstName.value = fnameHidden.value;
                EmplID.value = EmpIdHidden.value;
                CHRSID.value = CHRSIDHidden.value;
                HiddenCWIDFlag.value = EmpIdHidden.value;  
                HiddenCHRSIDFlag.value = CHRSIDHidden.value;
                
                /*var cbidVal = Cbid.value;
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
                    }); */
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
                        CHRSID.value = null;
                       
                     
              PosNumHidden.value = null;
              SSNHidden.value = null;
              deptHidden.value = null;
              DeptNameHidden.value = null;
              EmpIdHidden.value = null;
              MiddleNameHidden.value = null;
              fnameHidden.value = null;
               lnameHidden.value = null;
              EmpIdHidden.value= null;
              CHRSIDHidden.value= null;
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

        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_TimeKeeper_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_TimeKeeper_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({
type: 'GET',
  url:"/bin/getEvaluationFormData",
  data: {action: "EMP_DETAILS"},
  dataType: 'json',
  success: function(myresopnse) {
    var userValue = myresopnse[0].EMP_NAME;
   
    TimeKeeper.value = userValue;
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
 * @function dock_notice_dock_notice.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_CHRSID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_CHRSID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var chrsId = this.value;
var userID = logUser.value;
//alert("here");
if(StageIndicator.value === null && formSavedStatus.value !== "1"){
if(HiddenCHRSIDFlag.value !== chrsId){
       // alert("userID="+userID);
        $.ajax({
            type: 'GET',
            url: "/bin/chrsIDUpdateServlet",
            data: {
                action:"DOCK_NOTICE_CHRSID",
                chrsId: chrsId,
              	userId : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
             	 gifModal.style.display = "block";
                if (myresopnse.length === 1) {

                PositionNumber.value = myresopnse[0].SCO_POSITION_NUM;
             	SSN.value =myresopnse[0].NATIONAL_ID;                  
                /*var str = myresopnse[0].NATIONAL_ID;
                var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;
                maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);*/
               // console.log("SSN from EMPLID= "+ maskSSN.value);
               	var numbers = SSN.value;
                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                DeptName.value = myresopnse[0].DEPTNAME;
                EmplRCD.value = myresopnse[0].EMPL_RCD;
                MiddleName.value = myresopnse[0].MIDDLE_NAME;
              	DeptID.value= myresopnse[0].DEPTID;      
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EmplID.value = myresopnse[0].EMPLID;
                CHRSID.value = myresopnse[0].CSU_CHRS_ID;
                Cbid.value = myresopnse[0].UNION_CD;
               // EmpEmailID.value = myresopnse[0].EMP_EMAIL_ID;
                EmpEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                Unit.value =myresopnse[0].CSU_UNIT;
                Division.value=myresopnse[0].FUL_DIVISION;
				/*var cbidVal = Cbid.value;
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
                    });  */
                        
                    
                  

                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                     col.push("EMPLID");
                    col.push("CSU_CHRS_ID");
                	col.push("FIRST_NAME");
               	 	col.push("LAST_NAME");
                	//col.push("MIDDLE_NAME");
              		col.push("EMPL_RCD");
                	col.push("DEPTID");
                	col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["","Empl ID", "CHRS ID", "First_Name", "Last_Name","EMPL_RCD", "Department ID", "Department Name"];
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
                    
                    //footerModal.appendChild(cancelButton);*/
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

                               	PositionNumber.value = myresopnse[n].SCO_POSITION_NUM;
								SSN.value = myresopnse[n].NATIONAL_ID;
                              	var numbers = SSN.value;
                                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                               	/*var str = myresopnse[n].NATIONAL_ID;
                                var substr = str.substring(str.length-4, str.length);
                                var ssn1 = "XXX-XX-";
                                var resultVal = ssn1.concat(substr);
                                SSN.value = resultVal;
                              	maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);*/
                				//console.log("SSN from EMPLID= "+ maskSSN.value);
								DeptName.value = myresopnse[n].DEPTNAME;
								MiddleName.value = myresopnse[n].MIDDLE_NAME;
								LastName.value = myresopnse[n].LAST_NAME;
								FirstName.value = myresopnse[n].FIRST_NAME;
								EmplID.value = myresopnse[n].EMPLID;
                                CHRSID.value = myresopnse[n].CSU_CHRS_ID;
								EmplRCD.value =  myresopnse[n].EMPL_RCD;
                                DeptID.value= myresopnse[n].DEPTID; 
                                Cbid.value = myresopnse[n].UNION_CD;
                              	//EmpEmailID.value = myresopnse[n].EMP_EMAIL_ID;
                              	EmpEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                              	Unit.value =myresopnse[n].CSU_UNIT;
                              	Division.value=myresopnse[n].FUL_DIVISION;
                                rButtonStatus = true;
                              	modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                           //alert("Please select the department");
                          showErrorModal("Alert!", "Please select the department");
                            modal.style.display = "block";
                        } 
                      else {
                        
                       /* var cbidVal = Cbid.value;
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
                    });  */
                        
                        modal.style.display = "none";
                    }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    //alert("invalid");
                   	gifModal.style.display = "none";
                	showErrorModal("Alert!", "No matching records found");
                
                PositionNumber.value = "";
             	SSN.value ="";
                  
              
                
                DeptName.value = "";
                EmplRCD.value = "";
                MiddleName.value = "";
              	DeptID.value= "";      
                LastName.value = "";
                FirstName.value = "";
                EmplID.value = "";

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
/**
 * @function dock_notice_dock_notice.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
var userID = logUser.value;
//alert("here");
if(StageIndicator.value === null && formSavedStatus.value !== "1"){
if(HiddenCWIDFlag.value !== cwid){
       // alert("userID="+userID);
        $.ajax({
            type: 'GET',
            url: "/bin/getDockNoticeEmpServlet",
            data: {
                cwid: cwid,
              	userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
             	 gifModal.style.display = "block";
                if (myresopnse.length === 1) {

                PositionNumber.value = myresopnse[0].SCO_POSITION_NUM;
             	SSN.value =myresopnse[0].NATIONAL_ID;                  
                /*var str = myresopnse[0].NATIONAL_ID;
                var substr = str.substring(str.length-4, str.length);
                var ssn1 = "XXX-XX-";
                var resultVal = ssn1.concat(substr);
                SSN.value = resultVal;
                maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);*/
               // console.log("SSN from EMPLID= "+ maskSSN.value);
               	var numbers = SSN.value;
                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                DeptName.value = myresopnse[0].DEPTNAME;
                EmplRCD.value = myresopnse[0].EMPL_RCD;
                MiddleName.value = myresopnse[0].MIDDLE_NAME;
              	DeptID.value= myresopnse[0].DEPTID;      
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EmplID.value = myresopnse[0].EMPLID;
                Cbid.value = myresopnse[0].UNION_CD;
                EmpEmailID.value = myresopnse[0].EMP_EMAIL_ID;
                Unit.value =myresopnse[0].CSU_UNIT;
                Division.value=myresopnse[0].FUL_DIVISION;
				/*var cbidVal = Cbid.value;
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
                    });  */
                        
                    
                  

                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

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
                    var headings = ["","Empl ID", "First_Name", "Last_Name","EMPL_RCD", "Department ID", "Department Name"];
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
                    
                    //footerModal.appendChild(cancelButton);*/
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

                               	PositionNumber.value = myresopnse[n].SCO_POSITION_NUM;
								SSN.value = myresopnse[n].NATIONAL_ID;
                              	var numbers = SSN.value;
                                SSN.value = "XXX-XX-"+numbers.substr(5, 4);
                                maskSSN.value = numbers.substr(0, 3)+"-"+numbers.substr(3, 2)+"-"+numbers.substr(5, 4); 
                               	/*var str = myresopnse[n].NATIONAL_ID;
                                var substr = str.substring(str.length-4, str.length);
                                var ssn1 = "XXX-XX-";
                                var resultVal = ssn1.concat(substr);
                                SSN.value = resultVal;
                              	maskSSN.value = str.substring(0,3)+"-"+str.substring(3,2)+"-"+str.substring(5,4);*/
                				//console.log("SSN from EMPLID= "+ maskSSN.value);
								DeptName.value = myresopnse[n].DEPTNAME;
								MiddleName.value = myresopnse[n].MIDDLE_NAME;
								LastName.value = myresopnse[n].LAST_NAME;
								FirstName.value = myresopnse[n].FIRST_NAME;
								//this.value = myresopnse[n].EMPLID;
								EmplRCD.value =  myresopnse[n].EMPL_RCD;
                                DeptID.value= myresopnse[n].DEPTID; 
                                Cbid.value = myresopnse[n].UNION_CD;
                              	EmpEmailID.value = myresopnse[n].EMP_EMAIL_ID;
                              	Unit.value =myresopnse[n].CSU_UNIT;
                              	Division.value=myresopnse[n].FUL_DIVISION;
                                rButtonStatus = true;
                              	modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                           //alert("Please select the department");
                          showErrorModal("Alert!", "Please select the department");
                            modal.style.display = "block";
                        } 
                      else {
                        
                       /* var cbidVal = Cbid.value;
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
                    });  */
                        
                        modal.style.display = "none";
                    }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    //alert("invalid");
                   	gifModal.style.display = "none";
                	showErrorModal("Alert!", "No matching records found");
                
                PositionNumber.value = "";
             	SSN.value ="";
                  
              
                
                DeptName.value = "";
                EmplRCD.value = "";
                MiddleName.value = "";
              	DeptID.value= "";      
                LastName.value = "";
                FirstName.value = "";
                //EmplID.value = "";

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
/**
 * @function dock_notice_dock_notice.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_MiddleName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_MiddleName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_SSN_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_SSN_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_PositionNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_PositionNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_EmplRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_EmplRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_button1576479132172_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_button1576479132172_click0 = function (scope) {
    with(this) {
        with(scope) {
            AbsentDetails.instanceManager.addInstance();
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_button_2187229461576568857245_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_button_2187229461576568857245_init0 = function (scope) {
    with(this) {
        with(scope) {
            var icon = new Coral.Icon().set({
  icon: "add",
  size: "M"
});
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_button_2187229461576568857245_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_button_2187229461576568857245_click0 = function (scope) {
    with(this) {
        with(scope) {
            //AbsentDetails.instanceManager.removeInstance();

AbsentDetails.instanceManager.removeInstance(AbsentDetails.instanceIndex);

//AbsentDetails.instanceManager.addInstance();
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_checkbox1605078540600_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_checkbox1605078540600_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (SupervisorSignature.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            SupervisorDate.value = d;

            SupervisorDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    SupervisorSignature.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           SupervisorSignature.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    SupervisorSignature.value = "";
    SupervisorDate.value = "";
}
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_checkbox1598940697462_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_checkbox1598940697462_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (PayrollSignature.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
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
                    PayrollSignature.value = userValue;
                  //HiringDeptName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           PayrollSignature.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    PayrollSignature.value = "";
    PayrollDate.value = "";
}
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_workflow_initiator_init0 = function (scope) {
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
 * @function dock_notice_dock_notice.generated_TimekeeperFieldVal_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_TimekeeperFieldVal_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value ="EMP_AP_OFF";
        }
	}
}
/**
 * @function dock_notice_dock_notice.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated__click0 = function (scope) {
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
 * @function dock_notice_dock_notice.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (FirstName.value !== null && LastName.value !== null && EmplID.value !== null && SSN.value !== null && DeptID.value !== null){
  submitFlag=0;
      
 } else{
   
   showErrorModal("Alert !","Please enter Department ID,SSN,Empl ID,Last Name,First Name");
   submitFlag=1;
    
 }


if(submitFlag === 0){
if(PayPeriodMonth.value === null || PayPeriodYear.value === null){
  submitFlag = 1;
  showErrorModal("Alert!","Please enter Pay Period Year and Pay Period Month");
}else{
  submitFlag = 0;
}
}



if( submitFlag === 0){
  getPdf();
}

  

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/dock-notice/dock-notice');
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
 * @function dock_notice_dock_notice.generated_saveguidedraft1596107650672_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_saveguidedraft1596107650672_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);

//handleDraftSave(this);

if(EmplID.value !== null){
  
  aftiaDescCWID.value = FirstName.value + " " + LastName.value + " " + EmplID.value;
  
  formSavedStatus.value = "1";
  handleDraftSave(this);
}else{
    handleDraftSave(this);
}


        }
	}
}
/**
 * @function dock_notice_dock_notice.generated_submit_13966870281576568571969_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dock_notice_dock_notice.generated_submit_13966870281576568571969_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*ManagerEmailID.value = "ram.singh@thoughtfocus.com";
EmpEmailID.value = "ram.singh@thoughtfocus.com";*/

/*ManagerEmailID.value = "ajeet.chhonkar@thoughtfocus.com";
EmpEmailID.value = "ajeet.chhonkar@thoughtfocus.com";
*/
/*ManagerEmailID.value = "yjayaram@fullerton.edu";
EmpEmailID.value = "yjayaram@fullerton.edu";*/

ManagerEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
EmpEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";

EmailSubject.value = "Dock Notice Request - "+ LastName.value + ", " + FirstName.value + "("+EmplID.value+")";

var submitFlag =0;
var i=0;

for(i=0; i<= AbsentDetails.instanceIndex; i++){
  
  if(AbsentDetails.instanceManager.instances[i].DateAbsent.value !== "" && AbsentDetails.instanceManager.instances[i].DateAbsent.value !== null){
  
  if(AbsentDetails.instanceManager.instances[i].HourAbsent.value === null){
 
    showErrorModal("Alert !","Please enter Hour Absent");
        

  var str1 = "guide[0].guide1[0].guideRootPanel[0].basicInformation[0].AbsentDetails[";
  var str2 = i;
  var str3="].HourAbsent[0]";
  var res = str1.concat(str2).concat(str3);
     guideBridge.setFocus(res);
    submitFlag = 1;
    break;
  }  else{
    submitFlag = 0;
  }
}
  
}

aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);


if(submitFlag === 0){
  //alert(EmplID.value);
  guideBridge.submit();
}


        }
	}
}
