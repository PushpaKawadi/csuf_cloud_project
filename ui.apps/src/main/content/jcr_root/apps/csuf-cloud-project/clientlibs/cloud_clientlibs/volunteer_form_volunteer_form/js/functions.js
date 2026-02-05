/**
 * @function volunteer_form_volunteer_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    RiskManagementPanel.visible = false;
    DeanSignPanel.visible = false;
    ChairSignPanel.visible = false;
    DeptCoordinatorPanel.visible = false;
    SupervisorSignPanel.visible = false;
    
    supervisorSecondPanel.visible = false; 
    
  
    
}
if (StageIndicator.value == "ToInitiator") {
    
    VolunteerInformationPanel.visible = true;
    VolunteerInformationPanel.enabled = true;
    //RequiredInformation.visible = true;
    //RequiredInformation.enabled = true;
    SupervisorsFirstPanel.enabled = true; 
    supervisorSecondPanel.visible = true; 
    supervisorSecondPanel.enabled = true;
    
    VolunteerSignPanel.visible = true;
    VolunteerSignPanel.enabled = true;
    SupervisorSignPanel.visible = false;
  
    RiskManagementPanel.visible = false;
    ChairSignPanel.visible = false;
    DeanSignPanel.visible = false;
    DeptCoordinatorPanel.visible = false;
  
}
if (StageIndicator.value == "ToSupervisor") {
    
    VolunteerInformationPanel.visible = true;
    VolunteerInformationPanel.enabled = false;
   // RequiredInformation.visible = true;
  //  RequiredInformation.enabled = false;
    SupervisorsFirstPanel.enabled = false; 
    supervisorSecondPanel.visible = true; 
    supervisorSecondPanel.enabled = true;
    
    VolunteerSignPanel.visible = true;
    VolunteerSignPanel.enabled = false;
    SupervisorSignPanel.visible = true;
    SupervisorSignPanel.enabled = true;
  
    RiskManagementPanel.visible = false;
    ChairSignPanel.visible = false;
    DeanSignPanel.visible = false;
    DeptCoordinatorPanel.visible = false;
  
}

if (StageIndicator.value == "ToDepartmentCoordinator") {
    
    VolunteerInformationPanel.visible = true;
    VolunteerInformationPanel.enabled = true;
   // RequiredInformation.visible = true;
   // RequiredInformation.enabled = false;
    SupervisorsFirstPanel.enabled = false; 
    supervisorSecondPanel.visible = true; 
    supervisorSecondPanel.enabled = true;
   
    VolunteerSignPanel.visible = true;
    VolunteerSignPanel.enabled = false;
    SupervisorSignPanel.visible = true;
    SupervisorSignPanel.enabled = false;
    DeptCoordinatorPanel.visible = true;
    DeptCoordinatorPanel.enabled = true;
  
    RiskManagementPanel.visible = false;
    DeanSignPanel.visible = false;
    ChairSignPanel.visible = false;
    
  
}
  if (StageIndicator.value == "ToChair") {
    VolunteerInformationPanel.visible = true;
    VolunteerInformationPanel.enabled = false;
   // RequiredInformation.visible = true;
   // RequiredInformation.enabled = false;
    SupervisorsFirstPanel.enabled = false; 
    supervisorSecondPanel.visible = true; 
    supervisorSecondPanel.enabled = false; 
   
    VolunteerSignPanel.visible = true;
    VolunteerSignPanel.enabled = false;
    SupervisorSignPanel.visible = true;
    SupervisorSignPanel.enabled = false;
    DeptCoordinatorPanel.visible = true;
    DeptCoordinatorPanel.enabled = false;
    ChairSignPanel.visible = true; 
    ChairSignPanel.enabled = true;
  
    RiskManagementPanel.visible = false;
    DeanSignPanel.visible = false;
   
}

debugger;
  if (StageIndicator.value == "ToDean") {
    VolunteerInformationPanel.visible = true;
    VolunteerInformationPanel.enabled = false;
   // RequiredInformation.visible = true;
   // RequiredInformation.enabled = false;
    SupervisorsFirstPanel.enabled = false; 
    supervisorSecondPanel.visible = true; 
    supervisorSecondPanel.enabled = false; 
   
    VolunteerSignPanel.visible = true;
    VolunteerSignPanel.enabled = false;
    SupervisorSignPanel.visible = true;
    SupervisorSignPanel.enabled = false;
    DeptCoordinatorPanel.visible = true;
    DeptCoordinatorPanel.enabled = false;
    if(ChairRbYN.value == "1"){
    ChairSignPanel.visible = true; 
    ChairSignPanel.enabled = false;
    }else{
       ChairSignPanel.visible = false; 
    }
    DeanSignPanel.visible = true; 
    DeanSignPanel.enabled = true;
  
    RiskManagementPanel.visible = false;
   
   
}

 if (StageIndicator.value == "ToRiskManagement") {
    VolunteerInformationPanel.visible = true;
    VolunteerInformationPanel.enabled = false;
   // RequiredInformation.visible = true;
   // RequiredInformation.enabled = false; 
    SupervisorsFirstPanel.enabled = false; 
    supervisorSecondPanel.visible = true; 
    supervisorSecondPanel.enabled = false; 
   
    VolunteerSignPanel.visible = true;
    VolunteerSignPanel.enabled = false;
    SupervisorSignPanel.visible = true;
    SupervisorSignPanel.enabled = false;
    DeptCoordinatorPanel.visible = true;
    DeptCoordinatorPanel.enabled = false;
    if(ChairRbYN.value == "1"){
    ChairSignPanel.visible = true; 
    ChairSignPanel.enabled = false;
    }else{
       ChairSignPanel.visible = false; 
    }
    DeanSignPanel.visible = true; 
    DeanSignPanel.enabled = false;
  
    RiskManagementPanel.visible = true;
    RiskManagementPanel.enabled = true;
   
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var typeFlag = "";
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
           //userValue = "nvadlakunta";
            workflow_initiator.value = userValue;
           getInitiatorDetails(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

debugger;
function getInitiatorDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTitanCardData",
        data: {
            action: "STAFF_DETAILS",
            userID: userValue
        },
        dataType: 'json',
        success: function(response) {
          debugger;
            if (response.length >= 1) {
                   scwid.value = response[0].EMPLID;
                    firstName.value = response[0].FIRST_NAME;
                    lastName.value = response[0].LAST_NAME;
                    //middleName.value = response[0].MIDDLE_NAME;
                    
                    //Cwid.value = cWID;
                   Address.value = response[0].ADDRESS1;
                    City.value = response[0].CITY;
                   State.value = response[0].STATE;
                    ZipCode.value = response[0].POSTAL;
                    PhoneNumber.value = response[0].WORK_PHONE;
                  //VolunteerEmail.value = "soumya.ravindra@thoughtfocus.com";
                  VolunteerEmail.value = "yjayaram@fullerton.edu";
                    // VolunteerEmail.value = response[0].EMAILID;
              
              
             VolunteerFullName.value = firstName.value+" "+lastName.value; 
              //InitiatorUserId.value = userValue;
              //VolunteerEmail.value = response[0].EMAILID;
            } else {
                showErrorModal("Alert!", "No matching records found");
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
 * @function volunteer_form_volunteer_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
    if (StageIndicator.value === "ToSupervisor") {
     
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                   
                  DivisionId.value = myresopnse[0].DIVSION;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        
    
} else {
    
    DivisionId.value = "";
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
           //userValue = "nvadlakunta";
            workflow_initiator.value = userValue;
           //checkIfUserBelongsToGroup(userValue);
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
 * @function volunteer_form_volunteer_form.generated_guideRootPanel_init4
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_guideRootPanel_init4 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var typeFlag = "";
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
           //userValue = "nvadlakunta";
            workflow_initiator.value = userValue;
           $.ajax({
             type: 'GET',
             url: "/bin/getVolunteerldapData",
             dataType: 'text',
             success: function(ldapresponse) {
          //alert(ldapresponse);
          
             if(ldapresponse == "FACULTY"){
               getFacultyDetails(userValue);
               
             }else if(ldapresponse == "STUDENT"){
               getStudentDetails(userValue);
              
             }else{
              showErrorModal("Alert!", "No matching records found");
           }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

debugger;
function getFacultyDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getVolunteerData",
        data: {
            action: "VOLUNTEER_DETAILS",
            userID: userValue
        },
        dataType: 'json',
        success: function(response) {
          debugger;
            if (response.length >= 1) {
            //  var cWID = response[0].EMPLID; 
               scwid.value = response[0].EMPLID;
                    firstName.value = response[0].FIRST_NAME;
                    lastName.value = response[0].LAST_NAME;
                    middleName.value = response[0].MIDDLE_NAME;
                    InitiatorUserId.value = response[0].EMP_USERID;
                    //Cwid.value = cWID;
                   Address.value = response[0].ADDRESS1;
                    City.value = response[0].CITY;
                   State.value = response[0].STATE;
                    ZipCode.value = response[0].POSTAL;
                    PhoneNumber.value = response[0].WORK_PHONE;
                  VolunteerEmail.value = "soumya.ravindra@thoughtfocus.com";
                   //VolunteerEmail.value = "yjayaram@fullerton.edu";
                    // VolunteerEmail.value = response[0].EMAILID;
              
              
             VolunteerFullName.value = firstName.value+" "+lastName.value; 
              CSUFFacultyCB.value = "1";
              //InitiatorUserId.value = userValue;
              //VolunteerEmail.value = response[0].EMAILID;
            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

debugger;
function getStudentDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCitizenShipData",
        data: {
            action: "CV_USER_DETAILS",
            userID: userValue
        },
        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {
            //  var cWID = response[0].EMPLID; 
               scwid.value = response[0].EMPLID;
                    firstName.value = response[0].FIRST_NAME;
                    lastName.value = response[0].LAST_NAME;
                    middleName.value = response[0].MIDDLE_NAME;
                    InitiatorUserId.value = response[0].USERID;
                    //Cwid.value = cWID;
                   Address.value = response[0].ADDRESS1;
                    City.value = response[0].CITY;
                   State.value = response[0].STATE;
                    ZipCode.value = response[0].POSTAL;
                    PhoneNumber.value = response[0].HOME_PHONE;
                  VolunteerEmail.value = "soumya.ravindra@thoughtfocus.com";
                  // VolunteerEmail.value = "yjayaram@fullerton.edu";
                    // VolunteerEmail.value = response[0].PREF_EMAIL;
              
              
             VolunteerFullName.value = firstName.value+" "+lastName.value; 
               CSUFStudentCB.value = "1";
              //InitiatorUserId.value = userValue;
              //VolunteerEmail.value = response[0].EMAILID;
            } else {
                showErrorModal("Alert!", "No matching records found");
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
 * @function volunteer_form_volunteer_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

type: 'GET',
url:"/bin/getCaseID",
dataType: 'json',

success: function(myresponse){
caseId.value = myresponse.CASEID;

}
});
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_caseId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_caseId_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_Address_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_Address_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_City_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_City_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_State_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_State_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ZipCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ZipCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_PhoneNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_PhoneNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_VolunteerEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_VolunteerEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ContactName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ContactName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_CSUFStudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_CSUFStudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CSUFFacultyCB.value = null;
  CSUFStaffCB.value = null;
  OtherCB.value = null;
  OtherTF.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_CSUFFacultyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_CSUFFacultyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CSUFStudentCB.value = null;
  CSUFStaffCB.value = null;
  OtherCB.value = null;
  OtherTF.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_CSUFStaffCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_CSUFStaffCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CSUFStudentCB.value = null;
  CSUFFacultyCB.value = null;
  OtherCB.value = null;
  OtherTF.enabled = true;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_OtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_OtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == "1"){
  CSUFStudentCB.value = null;
  CSUFStaffCB.value = null;
  CSUFFacultyCB.value = null;
  OtherTF.enabled = true;
  OtherTF.mandatory = true;
  
}else{
OtherTF.value = null; 
  OtherTF.mandatory = false;
  OtherTF.enabled = false;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_OtherTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_OtherTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_NoCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_NoCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  YesCB1.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_YesCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_YesCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoCB1.value = null;
  cwid.enabled = true;
  cwid.mandatory = true;
}else{
  cwid.enabled = false;
  cwid.value = null;
  cwid.mandatory = false;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_YesCB1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_YesCB1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){

debugger;
var typeFlag = "";
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
           //userValue = "nvadlakunta";
            workflow_initiator.value = userValue;
           getInitiatorDetails(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

debugger;
function getInitiatorDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTitanCardData",
        data: {
            action: "STAFF_DETAILS",
            userID: userValue
        },
        dataType: 'json',
        success: function(response) {
          debugger;
            if (response.length >= 1) {
            //  var cWID = response[0].EMPLID;
            cwid.value = response[0].EMPLID;
                   
            } else {
                showErrorModal("Alert!", "No matching records found");
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
}
/**
 * @function volunteer_form_volunteer_form.generated_YesCB1_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_YesCB1_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  cwid.value = scwid.value;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_cwid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_cwid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var cwidVal = this.value;
if(cwidVal !== null){
  var cwiddigit = cwidVal.toString().length;
}
if(cwiddigit < 9){
  showErrorModal("Alert!", "Please enter valid CWID");
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_NoCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_NoCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  YesCB2.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_YesCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_YesCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoCB2.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_NoCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_NoCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
	

if(this.value == "1"){
  YesCB3.value = null;
  RequiredDate.enabled = true;
  RequiredDate.mandatory = true;
}else{
  RequiredDate.enabled = false;
  RequiredDate.value = null;
  RequiredDate.mandatory = false;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_YesCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_YesCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoCB3.value = null;
  //RequiredDate.enabled = false;
 // RequiredDate.value = null;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RequiredDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RequiredDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RequiredDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RequiredDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(NoCB3 == "1"){
var dateOf = new Date(this.value);
var year = dateOf.getFullYear();
var currentyear = 2023;
var age = currentyear - year;
if(age >= 18){
  showErrorModal("Alert !", "Please Select the valid Date");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequiredInformation[0].panel1694627557860[0].RequiredDate[0]");
  this.value = null;
}
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_NoCB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_NoCB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == "1"){
  YesCB4.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_YesCB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_YesCB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == "1"){
  NoCB4.value = null;
  ReqSupervisorsName.enabled = true;
//  ReqSupervisorsName.mandatory = true;
}else{
  ReqSupervisorsName.enabled = false;
  ReqSupervisorsName.value = null; 
  //ReqSupervisorsName.mandatory = false;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ReqSupervisorsName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ReqSupervisorsName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorsLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorsLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
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
                   // appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;  
                        //SupervisorName.value = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //SupervisorEmail.value = fundApproverResult[i].EMAILID; 
                        //SupervisorEmail.value = "yjayaram@fullerton.edu";
                        SupervisorEmail.value = "soumya.ravindra@thoughtfocus.com";
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    SupervisorsNameDD.value = "";
                    SupervisorsNameDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    SupervisorsNameDD.items = [];
                    SupervisorsNameDD.value = "";
                    SupervisorSearchName.value = "";
                    SupervisorSearchUserId.value = "";
                    SupervisorSearchEmailId.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorsNameDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorsNameDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null)   {
    var approverName = this.value;
    var approverEmplId;
    //if (approverName != "Select Optional Reviewer" && approverName !== "") {
  if (approverName !== "") {      
 	 approverName = approverName.substr(0, approverName.indexOf(' - '));
        SupervisorSearchName.value = approverName;
      SupervisorName.value = approverName;
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
                     SupervisorSearchName.value = "";
                     SupervisorSearchUserId.value = "";
                     SupervisorSearchEmailId.value = "";
                }
            }
        });
    } else {
        SupervisorSearchName.value = "";
                     SupervisorSearchUserId.value = "";
                     SupervisorSearchEmailId.value = "";
    }
}
debugger;
function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === null) {
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
                        SupervisorSearchUserId.value = myresopnse[0].EMP_USERID;
                       // SupervisorSearchEmailId.value = myresopnse[0].EMAILID;
                       // SupervisorEmail.value =  myresopnse[0].EMAILID;
                       SupervisorEmail.value = "soumya.ravindra@thoughtfocus.com";
                        SupervisorSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
                      // SupervisorEmail.value = "yjayaram@fullerton.edu";
                        //SupervisorSearchEmailId.value = "yjayaram@fullerton.edu";
                    } else {
                     SupervisorSearchName.value = "";
                     SupervisorSearchUserId.value = "";
                     SupervisorSearchEmailId.value = "";
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
 * @function volunteer_form_volunteer_form.generated_SupervisorsNameDD_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorsNameDD_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null)   {
    var approverName = this.value;
    var approverEmplId;
  var approverEmailId;
  var approverUserId;
    //if (approverName != "Select Optional Reviewer" && approverName !== "") {
  if (approverName !== "") {      
 	 approverUserName = approverName.substr(0, approverName.indexOf(' - '));
        SupervisorSearchName.value = approverUserName;
      SupervisorName.value = approverUserName;
     approverEmailId = approverName.substr(approverName.indexOf(' - ')+2, approverName.length-1);
     approverUserId =  approverEmailId.substr(0, approverEmailId.indexOf('@'));
     SupervisorSearchUserId.value = approverUserId;
      //SupervisorSearchEmailId.value = approverEmailId;
      SupervisorSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
  }
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_StartDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_StartDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToSupervisor"){
if(this.value > EndDate.value){
   showErrorModal("Alert !", "Please Enter the Valid Date");
}
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorNoCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorNoCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
  SupervisorYesCB.value = ""; 
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorYesCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorYesCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (this.value == "1") {
  SupervisorNoCB.value = null;
 
  OlliTrolleyCB.enabled = true;
  AutoCB.enabled = true;
  SUVCB.enabled = true; 
  TruckCB.enabled = true;
  PersonalCB.enabled = true;
  CartCB.enabled = true;
  StateCB.enabled = true;

}
else{ 
  OlliTrolleyCB.enabled = false;
  OlliTrolleyCB.value = null;
  AutoCB.enabled = false;
  AutoCB.value = null;
  SUVCB.enabled = false;
  SUVCB.value = null;
  TruckCB.enabled = false;
  TruckCB.value = null;
  PersonalCB.enabled = false;
  PersonalCB.value = null;
  CartCB.enabled = false;
  CartCB.value = null;
  StateCB.enabled = false;
  StateCB.value = null;

}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorYesCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorYesCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
  SupervisorNoCB.value = null;
 
  VehicleDD.enabled = true;
  VehicleDD.mandatory = true;
  

}
else{ 
  VehicleDD.enabled = false;
    VehicleDD.mandatory = false;
  VehicleDD.value = null;
  
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_AutoCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_AutoCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
//if(StageIndicator.value === null){
  //this.enabled = false;
//}SupervisorYesCB
if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SUVCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SUVCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_TruckCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_TruckCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_CartCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_CartCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_OlliTrolleyCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_OlliTrolleyCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_StateCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_StateCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_PersonalCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_PersonalCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(SupervisorYesCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RadiationCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RadiationCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_LasersCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_LasersCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChemicalsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChemicalsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_BloodCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_BloodCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SharpsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SharpsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_AutoclavesCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_AutoclavesCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_CentrifugeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_CentrifugeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_CompressedCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_CompressedCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_FormalCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_FormalCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NoneOfTheAbove.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorOtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorOtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(this.value == "1"){
  
  NoneOfTheAbove.value = null;
  SupervisorOtherTF.enabled = true;
  SupervisorOtherTF.mandatory = true;


}else{
  SupervisorOtherTF.enabled = false;
  SupervisorOtherTF.value = null;
  SupervisorOtherTF.mandatory = false;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorOtherTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorOtherTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_NoneOfTheAbove_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_NoneOfTheAbove_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  RadiationCB.value = null;
  LasersCB.value = null; 
  ChemicalsCB.value = null; 
  BloodCB.value = null; 
  SharpsCB.value = null; 
  AutoclavesCB.value = null; 
  CentrifugeCB.value = null; 
  CompressedCB.value = null; 
  FormalCB.value = null; 
  OtherCB.value = null; 
  OtherTF.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorNoCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorNoCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  SupervisorYesCB2.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorYesCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorYesCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  SupervisorNoCB2.value = null;
  textdraw_131515801694686162446.visible = true;
}
else{
  textdraw_131515801694686162446.visible = false;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_textdraw_131515801694686162446_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_textdraw_131515801694686162446_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorNoCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorNoCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  SupervisorYesCB3.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorYesCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorYesCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  SupervisorNoCB3.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RiskCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RiskCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToRiskManagement") {
        if (RiskDate.value === null) {
            

            RiskDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    RiskPrintName.value = userValue;
                  RiskSignature.value = userValue;
                  RiskDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    RiskPrintName.value = "";
  RiskSignature.value = "";
    RiskDate.value = "";
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RiskPrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RiskPrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RiskSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RiskSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_RiskDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_RiskDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToDean") {
        if (DeanDate2.value === null) {
            

            DeanDate2.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                    DeanName.value = userValue;
                  DeanSign.value = userValue;
                  DeanDate2.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeanName.value = "";
  DeanSign.value = "";
    DeanDate2.value = "";
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeanName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeanName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeanSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeanSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeanDate2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeanDate2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChairSignPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChairSignPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToChair") {
        if (Chair1Date.value === null) {
            

            Chair1Date.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  Chair1PrintName.value = userValue;
                    Chair1Signature.value = userValue;
                  Chair1Date.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    Chair1PrintName.value = "";
    Chair1Signature.value = "";
  Chair1Date.value = "";
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_Chair1PrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_Chair1PrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_Chair1Signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_Chair1Signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_Chair1Date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_Chair1Date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptCooCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptCooCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToDepartmentCoordinator") {
        if (DeptCoDate3.value === null) {
            

            DeptCoDate3.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DeptChairName.value = userValue;
                    DeptChairSign.value = userValue;
                  DeptCoDate3.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DeptChairName.value = "";
    DeptChairSign.value = "";
  DeptCoDate3.value = "";
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptChairName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptChairName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptChairSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptChairSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptCoDate3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptCoDate3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChairRbYN_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChairRbYN_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  ChairSearchPanel.visible = true;
  ChairSearchPanel.enabled = true;
  ChairLastName.mandatory = true;
  ChairNameDD.mandatory = true;
  //ChairSignPanel.visible = true;
  //ChairSignPanel.enabled = true;
  //ChairCB.mandatory = true;
  //deanLastName2.mandatory = true;
  
}else{
 // ChairSignPanel.visible = false;
  //ChairSignPanel.enabled = false;
  ChairLastName.value = null;
  ChairNameDD.value = null;
  ChairSearchPanel.visible = false;
  ChairSearchPanel.enabled = false;
 /* ChairCB.value = null;
  deanLastName2.value = null;
  DeanNameDD2.value = null;*/
}

if(this.value == "2"){
   ChairLastName.value = null;
  ChairNameDD.value = null;
  ChairSearchPanel.visible = false;
  ChairSearchPanel.enabled = false; 
}
  /*DeanSearchPanel.visible = true;
  DeanSearchPanel.enabled = true;
  deanLastName.mandatory = true;
  DeanNameDD.mandatory = true;
  
else{
  DeanSearchPanel.visible = false;
  DeanSearchPanel.enabled = false;
  deanLastName.value = null;
  DeanNameDD.value = null;
}*/
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChairSearchPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChairSearchPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChairLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChairLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToDepartmentCoordinator") {
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
                    ChairNameDD.value = "";
                    ChairNameDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    ChairNameDD.items = [];
                    ChairNameDD.value = "";
                    ChairSearchName.value = "";
                    ChairSearchUserId.value = "";
                    ChairSearchEmailId.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ChairNameDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ChairNameDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToDepartmentCoordinator")   {
    var approverName = this.value;
    var approverEmplId;
   // if (approverName != "Select Optional Reviewer" && approverName !== "") {
      if (approverName !== "") {
        approverName = approverName.substr(0, approverName.indexOf(' - '));
        ChairSearchName.value = approverName;
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
                     ChairSearchName.value = "";
                    ChairSearchUserId.value = "";
                    ChairSearchEmailId.value = "";
                }
            }
        });
    } else {
     ChairSearchName.value = "";
                    ChairSearchUserId.value = "";
                    ChairSearchEmailId.value = "";
    }
}
debugger;
function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === "ToDepartmentCoordinator") {
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
                        ChairSearchUserId.value = myresopnse[0].EMP_USERID;
                       // ChairSearchEmailId.value = myresopnse[0].EMAILID;
                        ChairSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
                       // ChairSearchEmailId.value = "yjayaram@fullerton.edu"; 
                    } else {
                    ChairSearchName.value = "";
                    ChairSearchUserId.value = "";
                    ChairSearchEmailId.value = "";
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
 * @function volunteer_form_volunteer_form.generated_DeanSearchPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeanSearchPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_deanLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_deanLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToDepartmentCoordinator") {
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
                   // appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    DeanNameDD.value = "";
                    DeanNameDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    DeanNameDD.items = [];
                    DeanNameDD.value = "";
                    DeanSearchName.value = "";
                    DeanSearchUserId.value = "";
                    DeanSearchEmailId.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeanNameDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeanNameDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToDepartmentCoordinator")   {
    var approverName = this.value;
    var approverEmplId;
    //if (approverName != "Select Optional Reviewer" && approverName !== "") {
      if (approverName !== "") {
        approverName = approverName.substr(0, approverName.indexOf(' - '));
        DeanSearchName.value = approverName;
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
                     DeanSearchName.value = "";
                    DeanSearchUserId.value = "";
                    DeanSearchEmailId.value = "";
                }
            }
        });
    } else {
      DeanSearchName.value = "";
                    DeanSearchUserId.value = "";
                    DeanSearchEmailId.value = "";
    }
}
debugger;
function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === "ToDepartmentCoordinator") {
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
                        DeanSearchUserId.value = myresopnse[0].EMP_USERID;
                       // DeanSearchEmailId.value = myresopnse[0].EMAILID;
                      //  DeanSearchEmailId.value = "yjayaram@fullerton.edu";    
                        DeanSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
                    } else {
                     DeanSearchName.value = "";
                    DeanSearchUserId.value = "";
                    DeanSearchEmailId.value = "";
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
 * @function volunteer_form_volunteer_form.generated_SupervisorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value === "ToSupervisor") {
        if (SupervisorDate.value === null) {
            

            SupervisorDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {
                  action: "EMP_DETAILS"
                  
                },
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME; 
                  SupervisorPrintName.value = userValue;
                  SupervisorSignature.value = userValue;
                  SupervisorDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    SupervisorPrintName.value = "";
    SupervisorSignature.value = "";
    SupervisorDate.value = "";
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorPrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorPrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_SupervisorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_SupervisorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptCoLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptCoLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToSupervisor") {
    var appResult = [];
    if (this.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getVolunteerData",
            data: {
                action: "VOLUNTEER_SEARCH_APPROVER",
                lastName: this.value, 
                DivisionId : DivisionId.value
            },
            dataType: 'json',
            success: function(fundApproverResult) {
                if (fundApproverResult.length !== 0) {
                   // appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //var uid = fundApproverResult[i].USERID;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    DeptCoDD.value = "";
                    DeptCoDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    DeptCoDD.items = [];
                    DeptCoDD.value = "";
                    DeptCoSearchName.value = "";
                    DeptCoSearchUserId.value = "";
                    DeptCoSearchEmailId.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptCoDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptCoDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToSupervisor")   {
    var approverName = this.value;
    var approverEmplId;
    //if (approverName != "Select Optional Reviewer" && approverName !== "") {
        if (approverName !== "") {
  		approverName = approverName.substr(0, approverName.indexOf(' - '));
        DeptCoSearchName.value = approverName;
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
                     DeptCoSearchName.value = "";
                    DeptCoSearchUserId.value = "";
                    DeptCoSearchEmailId.value = "";
                }
            }
        });
    } else {
        			DeptCoSearchName.value = "";
                    DeptCoSearchUserId.value = "";
                    DeptCoSearchEmailId.value = "";
    }
}
debugger;
function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === "ToSupervisor") {
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
                        DeptCoSearchUserId.value = myresopnse[0].EMP_USERID;
                       // DeptCoSearchEmailId.value = myresopnse[0].EMAILID;
                       // DeptCoSearchEmailId.value = "yjayaram@fullerton.edu";  
                        DeptCoSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";    
                    } else {
                    DeptCoSearchName.value = "";
                    DeptCoSearchUserId.value = "";
                    DeptCoSearchEmailId.value = "";
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
 * @function volunteer_form_volunteer_form.generated_VolunteerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_VolunteerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")) { 
  if (this.value == "1") { 
    ApprovalVolunteerSig.value = firstName.value+" "+lastName.value;
       VolunteerFullName.value = firstName.value+" "+lastName.value;
    ApprovalPrintName.value = firstName.value+" "+lastName.value;
}else {
   VolunteerFullName.value = "";
    ApprovalVolunteerSig.value = "";
    ApprovalPrintName.value = "";
} 
}

/*if ((StageIndicator.value === null) || (StageIndicator.value === "ToInitiator")) {
if (this.value == 1) {

        if (ApprovalDate1.value === null) {
            

            ApprovalDate1.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                  ApprovalVolunteerSig.value = userValue;
                  ApprovalDate1.value = myresopnse.SERVER_DATE;
                  ApprovalPrintName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }else {
    ApprovalDate1.value = "";
    ApprovalVolunteerSig.value = "";
    ApprovalPrintName.value = "";
}
} */

        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_VolunteerCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_VolunteerCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 

if(this.value == "1"){
var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
 ApprovalDate1.value = d;
}else{
  ApprovalDate1.value = null;
}
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ApprovalPrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ApprovalPrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ApprovalVolunteerSig_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ApprovalVolunteerSig_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_ApprovalDate1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_ApprovalDate1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_DeptId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_DeptId_init0 = function (scope) {
    with(this) {
        with(scope) {
            	this.enabled=false;
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function volunteer_form_volunteer_form.generated_formTitle_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_formTitle_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "CSUF Volunteer Form - Normal";
        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_generateDOR_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/volunteer-form/volunteer-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', firstName.value + "_"+lastName.value+ "_" + Date.now());
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
 * @function volunteer_form_volunteer_form.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            
 aftiaDescCWID.value = firstName.value + " " + lastName.value ;

handleDraftSave(this);


        }
	}
}
/**
 * @function volunteer_form_volunteer_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
volunteer_form_volunteer_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*if(SupervisorYesCB.value == "2"){
if(OlliTrolleyCB.value === null && AutoCB.value === null && SUVCB.value === null && TruckCB.value === null && PersonalCB.value === null && CartCB.value === null && StateCB.value === null){
   showErrorModal("Alert !", "Please Select What kind of vehicle you prefer");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].supervisorPanel[0].OlliTrolleyCB[0]]");
}
}*/
if(ContactName.value === null && ContactNumber.value === null ){
  showErrorModal("Alert !", "Please Enter all the details");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].VolunteerInformationPanel[0].ContactName[0]");
} 

else if(CSUFStudentCB.value === null && CSUFFacultyCB.value === null && CSUFStaffCB.value === null && OtherCB.value === null){
  showErrorModal("Alert !", "Please Select the Current Status");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].VolunteerInformationPanel[0].RequiredInformation[0].CSUFStudentCB[0]");
}
else if((NoCB2.value === null && YesCB2.value === null) || (NoCB1.value === null && YesCB1.value === null) || (NoCB3.value === null && YesCB3.value === null) || (NoCB4.value === null && YesCB4.value === null)) {
  showErrorModal("Alert !", "Please Check the boxes");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequiredInformation[0].panel1694627557860[0].NoCB1[0]");
}
else if(StageIndicator.value === "ToSupervisor"){
  if(NoTrainingCB.value === null && RadiationCB.value === null && LasersCB.value === null && ChemicalsCB.value === null && BloodCB.value === null && SharpsCB.value === null && AutoclavesCB.value === null && CentrifugeCB.value === null && CompressedCB.value === null && FormalCB.value === null && SupervisorOtherCB.value === null  ){
  showErrorModal("Alert !", "Please Select one of the Checkbox to indicate whether the volunteer will work with any of the following");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].supervisorPanel[0].supervisorSecondPanel[0].NoTrainingCB[0]");
}}else{
   submitAction();
}

debugger;
function submitAction(){
if(StageIndicator.value === null){
 aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + scwid.value;
  EmailSubject.value = "Test - CSUF Volunteer Form - "+lastName.value+", "+firstName.value;
}

SupervisorSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
DeptCoSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
DeanSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
ChairSearchEmailId.value = "soumya.ravindra@thoughtfocus.com";
 
/*SupervisorSearchEmailId.value = "mepacheco@fullerton.edu";
DeptCoSearchEmailId.value = "mepacheco@fullerton.edu";
DeanSearchEmailId.value = "mepacheco@fullerton.edu";
ChairSearchEmailId.value = "mepacheco@fullerton.edu"; */

 guideBridge.submit();
}




        }
	}
}
