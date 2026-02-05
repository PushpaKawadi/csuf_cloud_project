/**
 * @function telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
   var gifModal = document.getElementById('gifModal');
   gifModal.style.display = "block";
   $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresponse) {debugger;
                   var modal = document.getElementById('myModal');
                   var span = document.getElementsByClassName("close")[0];
                  if(myresponse.length == 1){
                    if(myresponse[0].UNION_CD != "R03" ){
                    var userValue = myresponse[0].EMP_NAME;
                    var cwid = myresponse[0].EMPLID;
                    EmplName.value = userValue;
                    EmplId.value = cwid;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                    EmplUserId.value =  myresponse[0].EMP_USERID;
                    EmplEmail.value = myresponse[0].EMAILID;
                    //EmplEmail.value = "yjayaram@fullerton.edu";
                    EmployeeName.value = userValue+" - "+cwid; 
                    EmplDept.value = myresponse[0].DEPTID;
                    EmplUnionCode.value = myresponse[0].UNION_CD;
                      Division.value = myresponse[0].DIVSION;
                      DivisionName.value = myresponse[0].DIVISION_NAME;
                      EmployeeTitle.value = myresponse[0].DESCR;
                    //Department.value = myresponse[0].DEPTNAME;
                    if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99" || (EmplUserId.value).toLowerCase().startsWith("zz")){
                      						CSUMPPEmployeesSection.visible = true;
                                              MPPTitle.visible = true;
                      						CSUEUEmployeesSection.visible = false;
                                            CSUEUTitle.visible = false;
                                             }else{
                                              CSUMPPEmployeesSection.visible = false;
                                                 MPPTitle.visible = false;
                                              CSUEUEmployeesSection.visible = true;
                                               CSUEUTitle.visible = true;
                                            }
                    AdminName.value = myresponse[0].MANAGE_EMP_NAME;
                    getAdministratorData(EmplId.value,EmplUnionCode.value,EmplDept.value);
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                  }else{
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                    submit1600234699256.enabled = false;
                    showErrorModal("Alert!","You currently do not have permission to access this AEM Form. Please contact <a href='hr@fullerton.edu'>hr@fullerton.edu</a> if you have any questions.");
                  }
                  }else if(myresponse.length > 1){
                     gifModal.style.display = "none";
                     modal.style.display = "block";
                    var user = myresponse[0].EMP_NAME;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                    var emplid = myresponse[0].EMPLID;
                    EmplName.value = user;
                    EmplId.value = emplid;
                    EmplUserId.value =  myresponse[0].EMP_USERID;
                    EmplEmail.value = myresponse[0].EMAILID;
                   
                    //EmplEmail.value = "yjayaram@fullerton.edu";
                    EmployeeName.value = user+" - "+emplid;
                                var col = [];
                                col.push("EMPLID");
                                col.push("LAST_NAME");
                                col.push("FIRST_NAME");
                                col.push("DEPTID");
                                col.push("DEPTNAME");
                                col.push("UNION_CD");
                                col.push("EMPL_RCD");
                   				var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name","CBID","Empl RCD"];
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
                                          debugger;
                                          if(myresponse[n].UNION_CD != "R03" ){
                                            EmplDept.value = myresponse[n].DEPTID;
                    						EmplUnionCode.value = myresponse[n].UNION_CD;
                                             Division.value = myresponse[n].DIVSION;
                                             DivisionName.value = myresponse[n].DIVISION_NAME;
                                             EmployeeTitle.value = myresponse[n].DESCR;
                                          	//Department.value = myresponse[n].DEPTNAME;
                                           	if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99"||(EmplUserId.value).toLowerCase().startsWith("zz")){
                      						CSUMPPEmployeesSection.visible = true;
                                              MPPTitle.visible = true;
                      						CSUEUEmployeesSection.visible = false;
                                            CSUEUTitle.visible = false;
                                             }else{
                                              CSUMPPEmployeesSection.visible = false;
                                                 MPPTitle.visible = false;
                                              CSUEUEmployeesSection.visible = true;
                                               CSUEUTitle.visible = true;
                                            }
                                          	AdminName.value = myresponse[n].MANAGE_EMP_NAME;
                                            getAdministratorData(EmplId.value,EmplUnionCode.value,EmplDept.value);
                                            rButtonStatus = true;
                                            break;
                                            }else{
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                                              submit1600234699256.enabled = false;
                                             showErrorModal("Alert!","You currently do not have permission to access this AEM Form. Please contact <a href='hr@fullerton.edu'>hr@fullerton.edu</a> if you have any questions.");
                  }
                                        }
                                    }
                                    if (rButtonStatus === false) {
                                        if(EmplUnionCode.value !== null){
                                        showErrorModal("Alert!", "Please select the department");
                                        modal.style.display = "block";
                                        }else{
                                          gifModal.style.display = "none";
                                        modal.style.display = "none";
                                        }
                                    } else {                                        	
										gifModal.style.display = "none";
                                        modal.style.display = "none";

                                    }
                                };
                    footerModal.appendChild(okButton);
                  }else{
                    gifModal.style.display = "none";
                    EmplName.value = "";
                    EmplId.value = "";
                    EmplUserId.value =  "";
                    EmplEmail.value = "";
                    EmployeeName.value = "";
                    AdminName.value = "";
                    showErrorModal("Alert!","No matching records found");
                  }
                }
   });
}
function getAdministratorData(emplId,union_cd,deptId){
  $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
            data: {
                deptID: deptId,
                cwid: emplId,
              	union_cd:union_cd,
              action:"SPE_MANAGER_DETAILS"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                    Department.value = myresponse[0].MANAGER_DEPTNAME;
                    AdminUserId.value = myresponse[0].MANAGER_EMP_USERID;
                    AdminEmail.value = myresponse[0].MANAGER_EMAIL_ID;   
                    //AdminEmail.value = "yjayaram@fullerton.edu";
                }  
              // added below method on 01112024
              else if(myresponse.length > 1){
                  var count = 0;
                  var managerEmailID = myresponse[0].MANAGER_EMAIL_ID;
                  var managerUserID =  myresponse[0].MANAGER_EMP_USERID;
                  for(var l=1; l<myresponse.length; l++){
                    if((managerEmailID.toLowerCase() == (myresponse[l].MANAGER_EMAIL_ID).toLowerCase())&&(managerUserID.toLowerCase() == (myresponse[l].MANAGER_EMP_USERID).toLowerCase())){
                    }else{
                      count = count+1;
                    } 
                  }
                  if(count === 0){
                    AdminUserId.value = myresponse[0].MANAGER_EMP_USERID;
                    AdminEmail.value = myresponse[0].MANAGER_EMAIL_ID; 
                  }
                }
              
              
              
            }
        });
  
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  SignatureACK.visible = true;
  EmpSignaturePanel.visible = true;
  AdminSignPanel.visible = false;
  HRSSignPanel.visible = false;
  AVPSignPanel.visible = false;
}

if(StageIndicator.value == "ToAdmin"){
  AgreementInformation.enabled = false;
  Instructions.enabled = false;
  HomeSafetyChecklist.enabled = false;
  SupDocPanel.visible = false;
  SignatureACK.visible = true;
  EmpSignaturePanel.enabled = false;
  AdminSignPanel.visible = true;
  if(HRSCB.value == 1){
    HRSSignPanel.visible = true;
    HRSSignPanel.enabled = false;
  }else{
    HRSSignPanel.visible = false;
  }
  AVPSignPanel.visible = false;
}
if(StageIndicator.value == "ToHR"){
  AgreementInformation.enabled = false;
  Instructions.enabled = false;
  HomeSafetyChecklist.enabled = false;
  SupDocPanel.visible = false;
  SignatureACK.visible = true;
  EmpSignaturePanel.enabled = false;
  HRSSignPanel.visible = true;
  HRSSignPanel.enabled = true;
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
    AdminSignPanel.visible = false;
  }
  AVPSignPanel.visible = false;
}
if(StageIndicator.value == "ToAVP"){
  AgreementInformation.enabled = false;
  Instructions.enabled = false;
  HomeSafetyChecklist.enabled = false;
  SupDocPanel.visible = false;
  SignatureACK.visible = true;
  EmpSignaturePanel.enabled = false;
  HRSSignPanel.visible = true;
  HRSSignPanel.enabled = false;
  AdminSignPanel.visible = true;
  AdminSignPanel.enabled = false;  
  AVPSignPanel.visible = true;
}
if(StageIndicator.value == "ToRequestor"){
  AgreementInformation.enabled = true;
  Instructions.enabled = false;
  HomeSafetyChecklist.enabled = true;
  SupDocPanel.visible = false;
  SignatureACK.visible = true;
  SignatureACK.enabled = true;
  if(HRSCB.value == 1){
    HRSSignPanel.visible = true;
    HRSSignPanel.enabled = false;
  }else{
    HRSSignPanel.visible = false;
  }
  if(AdminCB.value == 1){
    AdminSignPanel.visible = true;
    AdminSignPanel.enabled = false;
  }else{
    AdminSignPanel.visible = false;
  }
  AVPSignPanel.visible = false;
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete" , function(event, payload) {
    guideBridge.on("elementButtonClicked" , function(event, payload) {
     var component = payload.target; // Button which wass clicked
     console.log("Button which was clicked " + component.name);
});
 debugger;

 
//setFundSourceOptions();  
});

        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(StageIndicator.value === null){
   var gifModal = document.getElementById('gifModal');
   gifModal.style.display = "block";
   $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormDataCHRSID",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresponse) {
                  debugger;
                   var modal = document.getElementById('myModal');
                   var span = document.getElementsByClassName("close")[0];
                  if(myresponse.length == 1){
                    if(myresponse[0].UNION_CD != "R03" ){
                    var userValue = myresponse[0].EMP_NAME;
                    var cwid = myresponse[0].EMPLID;
                    var ChrsID = myresponse[0].CSU_CHRS_ID;
                    EmplName.value = userValue;
                    EmplId.value = cwid;
                    chrsId.value = ChrsID;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                    EmplUserId.value =  myresponse[0].EMP_USERID;
                    //EmplEmail.value = myresponse[0].EMAILID;
                    EmplEmail.value = "soumya.ravindra@thoughtfocus.com";
                    EmployeeName.value = userValue+" - "+ChrsID; 
                    EmplDept.value = myresponse[0].DEPTID;
                    EmplUnionCode.value = myresponse[0].UNION_CD;
                      Division.value = myresponse[0].DIVSION;
                      DivisionName.value = myresponse[0].DIVISION_NAME;
                      EmployeeTitle.value = myresponse[0].DESCR;
                    //Department.value = myresponse[0].DEPTNAME;
                    if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99" || (EmplUserId.value).toLowerCase().startsWith("zz")){
                      						CSUMPPEmployeesSection.visible = true;
                                              MPPTitle.visible = true;
                      						CSUEUEmployeesSection.visible = false;
                                            CSUEUTitle.visible = false;
                                             }else{
                                              CSUMPPEmployeesSection.visible = false;
                                                 MPPTitle.visible = false;
                                              CSUEUEmployeesSection.visible = true;
                                               CSUEUTitle.visible = true;
                                            }
                    AdminName.value = myresponse[0].MANAGE_EMP_NAME;
                    getAdministratorData(chrsId.value,EmplUnionCode.value,EmplDept.value);
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                  }else{
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                    submit1600234699256.enabled = false;
                    showErrorModal("Alert!","You currently do not have permission to access this AEM Form. Please contact <a href='hr@fullerton.edu'>hr@fullerton.edu</a> if you have any questions.");
                  }
                  }else if(myresponse.length > 1){
                     gifModal.style.display = "none";
                     modal.style.display = "block";
                    var user = myresponse[0].EMP_NAME;
                    EmpFirstName.value = myresponse[0].FIRST_NAME;
                    EmpLastName.value = myresponse[0].LAST_NAME;
                    var emplid = myresponse[0].EMPLID;
                    EmplName.value = user;
                    EmplId.value = emplid;
                    EmplUserId.value =  myresponse[0].EMP_USERID;
                  //  EmplEmail.value = myresponse[0].EMAILID;
                   
                    EmplEmail.value = "soumya.ravindra@thoughtfocus.com";
                    EmployeeName.value = user+" - "+emplid;
                                var col = [];
                                col.push("EMPLID");
                                col.push("LAST_NAME");
                                col.push("FIRST_NAME");
                                col.push("DEPTID");
                                col.push("DEPTNAME");
                                col.push("UNION_CD");
                                col.push("EMPL_RCD");
                   				var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name","CBID","Empl RCD"];
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
                                          debugger;
                                          if(myresponse[n].UNION_CD != "R03" ){
                                            EmplDept.value = myresponse[n].DEPTID;
                    						EmplUnionCode.value = myresponse[n].UNION_CD;
                                             Division.value = myresponse[n].DIVSION;
                                             DivisionName.value = myresponse[n].DIVISION_NAME;
                                             EmployeeTitle.value = myresponse[n].DESCR;
                                          	//Department.value = myresponse[n].DEPTNAME;
                                           	if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99"||(EmplUserId.value).toLowerCase().startsWith("zz")){
                      						CSUMPPEmployeesSection.visible = true;
                                              MPPTitle.visible = true;
                      						CSUEUEmployeesSection.visible = false;
                                            CSUEUTitle.visible = false;
                                             }else{
                                              CSUMPPEmployeesSection.visible = false;
                                                 MPPTitle.visible = false;
                                              CSUEUEmployeesSection.visible = true;
                                               CSUEUTitle.visible = true;
                                            }
                                          	AdminName.value = myresponse[n].MANAGE_EMP_NAME;
                                            getAdministratorData(chrsId.value,EmplUnionCode.value,EmplDept.value);
                                            rButtonStatus = true;
                                            break;
                                            }else{
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                                              submit1600234699256.enabled = false;
                                             showErrorModal("Alert!","You currently do not have permission to access this AEM Form. Please contact <a href='hr@fullerton.edu'>hr@fullerton.edu</a> if you have any questions.");
                  }
                                        }
                                    }
                                    if (rButtonStatus === false) {
                                        if(EmplUnionCode.value !== null){
                                        showErrorModal("Alert!", "Please select the department");
                                        modal.style.display = "block";
                                        }else{
                                          gifModal.style.display = "none";
                                        modal.style.display = "none";
                                        }
                                    } else {                                        	
										gifModal.style.display = "none";
                                        modal.style.display = "none";

                                    }
                                };
                    footerModal.appendChild(okButton);
                  }else{
                    gifModal.style.display = "none";
                    EmplName.value = "";
                    EmplId.value = "";
                    EmplUserId.value =  "";
                    EmplEmail.value = "";
                    EmployeeName.value = "";
                    AdminName.value = "";
                    showErrorModal("Alert!","No matching records found");
                  }
                }
   });
}
function getAdministratorData(chrsid,union_cd,deptId){
  $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormDataCHRSID",
            data: {
                deptID: deptId,
                cwid: chrsid,
              	union_cd:union_cd,
              action:"SPE_MANAGER_DETAILS"
            },
            dataType: 'json',
            success: function(myresponse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (myresponse.length === 1) {
                    Department.value = myresponse[0].MANAGER_DEPTNAME;
                    AdminUserId.value = myresponse[0].MANAGER_EMP_USERID;
                  //  AdminEmail.value = myresponse[0].MANAGER_EMAIL_ID;   
                    AdminEmail.value = "soumya.ravindra@thoughtfocus.com";
                }  
              // added below method on 01112024
              else if(myresponse.length > 1){
                  var count = 0;
                  var managerEmailID = myresponse[0].MANAGER_EMAIL_ID;
                  var managerUserID =  myresponse[0].MANAGER_EMP_USERID;
                  for(var l=1; l<myresponse.length; l++){
                    if((managerEmailID.toLowerCase() == (myresponse[l].MANAGER_EMAIL_ID).toLowerCase())&&(managerUserID.toLowerCase() == (myresponse[l].MANAGER_EMP_USERID).toLowerCase())){
                    }else{
                      count = count+1;
                    } 
                  }
                  if(count === 0){
                    AdminUserId.value = myresponse[0].MANAGER_EMP_USERID;
                   // AdminEmail.value = myresponse[0].MANAGER_EMAIL_ID; 
                    AdminEmail.value = "soumya.ravindra@thoughtfocus.com"; 
                  }
                }
              
              
              
            }
        });
  
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_CSUEUTitle_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_CSUEUTitle_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99" ||(EmplUserId.value).toLowerCase().startsWith("zz")){
    CSUMPPEmployeesSection.visible = true;
    MPPTitle.visible = true;
    CSUEUEmployeesSection.visible = false;
    CSUEUTitle.visible = false;
  }else{
    CSUMPPEmployeesSection.visible = false;
    MPPTitle.visible = false;
    CSUEUEmployeesSection.visible = true;
    CSUEUTitle.visible = true;
}
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_MPPTitle_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_MPPTitle_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99" ||  (EmplUserId.value).toLowerCase().startsWith("zz")){
    CSUMPPEmployeesSection.visible = true;
    MPPTitle.visible = true;
    CSUEUEmployeesSection.visible = false;
    CSUEUTitle.visible = false;
  }else{
    CSUMPPEmployeesSection.visible = false;
    MPPTitle.visible = false;
    CSUEUEmployeesSection.visible = true;
    CSUEUTitle.visible = true;
}
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_OfficialWorkLocation_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_OfficialWorkLocation_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  if(this.value == "Other"){
    OtherLocation.enabled = true;
    OtherLocation.visible = true;
    OtherLocation.mandatory = true;
  }else{
    OtherLocation.enabled = false;
    OtherLocation.visible = false;
    OtherLocation.mandatory = false;
    OtherLocation.value = "";
  }
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommutingLocation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommutingLocation_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({
            type: 'GET',
            url: "/bin/getTelecommuteAgreementData",
            data: {                
              action:"CALFORNIA_CITIES"
            },
            dataType: 'json',
            success: function(myresponse) {
 			var result = [];
                if (myresponse.length !== 0) {
                for (var i = 0; i < myresponse.length; i++) {
                var item = myresponse[i].CITY_NAME;
                result.push(item);
            }

            TelecommutingLocation.items = result;               
                }                 
            }
        });
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommutingLocation_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommutingLocation_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            TelecommutingFromCity.value = this.value;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_workflow_initiator_init0 = function (scope) {
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
 * @function telecommuting_forms_telecommuting_agreement.generated_Division_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_Division_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
  var divisionVal = this.value;
  
$.ajax({

type: 'GET', 


url:"/bin/getTelecommuteAgreementData",
  data: {
                division: divisionVal,
    			action:"HR_DIV_REVIEWER"
                
            },
dataType: 'json',
success: function(myresopnse){
  
   DivisionAppUserID.value =myresopnse[0].USERID;
   var fname =myresopnse[0].FIRSTNAME;
   var lname =myresopnse[0].LASTNAME;
   //DivisionAppEmail.value =myresopnse[0].EMAIL;
   DivisionAppEmail.value = "soumya.ravindra@thoughtfocus.com";
  
  DivisionAppName.value = (fname).concat(" "+lname);
  
},
  error: function(error){
alert("error block="+error);
}
});
}


        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_Instructions_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_Instructions_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){  debugger;
if(EmplUnionCode.value == "M80" || EmplUnionCode.value == "R04" || EmplUnionCode.value == "C99" ||  (EmplUserId.value).toLowerCase().startsWith("zz")){
                      CSUMPPEmployeesSection.visible = true;
                      CSUEUEmployeesSection.visible = false;
                    }else{
                      CSUMPPEmployeesSection.visible = false;
                      CSUEUEmployeesSection.visible = true;
                    }
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommuterCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommuterCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === null || StageIndicator.value == "ToRequestor") {
        if (TelecommuterSignDate.value === null) {
            

            TelecommuterSignDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    TelecommuterName.value = userValue;
                  TelecommuterSignature.value = userValue;
                  TelecommuterSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    TelecommuterName.value = "";
    TelecommuterSignDate.value = "";
    TelecommuterSignature.value = "";
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommuterName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommuterName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommuterSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommuterSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommuterSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommuterSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc1.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc1.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc2.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc2.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_EmplCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_EmplCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === null || StageIndicator.value == "ToRequestor") {
        if (EmpSignDate.value === null) {
            

            EmpSignDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    //var title = myresopnse[0].DESCR;
                    var title = "";
                  if(EmployeeTitle.value !== null){
                    title = EmployeeTitle.value;
                  }
                    EmpPrintName.value = userValue+" - "+title;
                  	EmpSignature.value = userValue;
                  	EmpSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    EmpSignature.value = "";
    EmpSignDate.value = "";
    EmpPrintName.value = "";
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_EmpSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_EmpSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_EmpSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_EmpSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AdminCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AdminCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToAdmin") {
        if (AdminSignDate.value === null) {
            

            AdminSignDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                  if(myresopnse.length == 1){
                  var userValue = myresopnse[0].EMP_NAME;
                  var title = myresopnse[0].DESCR;
                  AdminPrintName.value = userValue+" - "+title;                   
                  AdministratorSignature.value = userValue;
                  AdminSignDate.value = myresopnse[0].SERVER_DATE;
                    AdminDivisionName.value = myresopnse[0].DIVISION_NAME;
                  }else if(myresopnse.length > 1){
                     debugger;
                    
                                for (var k = 0; k < myresopnse.length; k++) {                                    
                                    if (myresopnse[k].UNION_CD == "M80" || myresopnse[k].UNION_CD == "M98") {
                                        var userValue = myresopnse[k].EMP_NAME;
                                        var title = myresopnse[k].DESCR;
                                        AdminPrintName.value = userValue+" - "+title;                   
                                        AdministratorSignature.value = userValue;
                                       if(myresopnse[k].EMP_USERID == "migrace"){
                                         //AdminSignDate.value = myresopnse[k-1].SERVER_DATE; commented on 09112023
                                          AdminSignDate.value = myresopnse[k].SERVER_DATE;
                                       }else{
                                        AdminSignDate.value = myresopnse[k].SERVER_DATE;
                                       }
                                      
                                        AdminDivisionName.value = myresopnse[k].DIVISION_NAME;
                                      break;
                                    }
                                }
                }
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    AdministratorSignature.value = "";
    AdminSignDate.value = "";
    AdminPrintName.value = "";
  AdminDivisionName.value = "";
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AdminDivisionName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AdminDivisionName_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAdmin"){
  this.mandatory = true;
}else{
  this.mandatory = false;
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AdministratorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AdministratorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AdminSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AdminSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AdminDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AdminDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAdmin"){
  if(this.value == 2){
  AdminJustification.mandatory = true;
  AdminJustification.visible = true;
  }if(this.value == 1){
    AdminJustification.mandatory = false;
    AdminJustification.visible = false;
    AdminJustification.value = "";
  }
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AdminJustification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AdminJustification_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToAdmin"){
  if(AdminDecision.value == 1 || AdminDecision.value === null){
    this.visible = false;
  }else{
    this.visible = true;
  }
}else{
  if(AdminDecision.value == 1 || AdminDecision.value === null){
    this.visible = false;
  }else{
    this.visible = true;
  }
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_HRSCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_HRSCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToHR") {
        if (HRDISignDate.value === null) {
            

            HRDISignDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    HRDIPrintName.value = userValue;
                  HRDISignature.value = userValue;
                  HRDISignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    HRDIPrintName.value = "";
    HRDISignDate.value = "";
    HRDISignature.value = "";
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AVPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AVPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToAVP") {
        if (AVPSignDate.value === null) {
            

            AVPSignDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    AVPSignature.value = userValue;
                  AVPPrintName.value = userValue;
                  AVPSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    AVPSignature.value = "";
    AVPSignDate.value = "";
    AVPPrintName.value = "";
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AVPDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AVPDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAVP"){
  if(this.value == 2){
       AVPJustification.visible = true;
  AVPJustification.mandatory = true;
  }if(this.value == 1){
    AVPJustification.mandatory = false;
    AVPJustification.visible = false;
    AVPJustification.value = "";
  }
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_AVPJustification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_AVPJustification_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToAdmin"){
  if(AVPDecision.value == 1 || AVPDecision.value === null){
    this.visible = false;
  }else{
    this.visible = true;
  }
}else{
  if(AVPDecision.value == 1 || AVPDecision.value === null){
    this.visible = false;
  }else{
    this.visible = true;
  }
}
        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/telecommuting-forms/telecommuting-agreement');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', EmplName.value + "(" + EmplId.value + ")" + "_" + Date.now());
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
 * @function telecommuting_forms_telecommuting_agreement.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplId.value !== null){
 aftiaDescCWID.value = EmplName.value + " "+ EmplId.value ;
}
handleDraftSave(this);


        }
	}
}
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
telecommuting_forms_telecommuting_agreement.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplId.value !== null){
 aftiaDescCWID.value = EmplName.value + " "+ EmplId.value ;
}
/*EmplEmail.value = "telecommuteagreement@fullerton.edu";
AdminEmail.value = "telecommuteagreement@fullerton.edu";*/

EmplEmail.value = "soumya.ravindra@thoughtfocus.com";
AdminEmail.value = "soumya.ravindra@thoughtfocus.com";

EmailSubject.value = "Telecommuting Agreement - " + EmplName.value;
var flag = 0;
if(flag === 0 ){
guideBridge.submit();
}

        }
	}
}
