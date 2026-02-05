/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

type: 'GET',

url: "/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse) {
// gifModal.style.display = "block";
caseID();
var userValue = myresopnse.userId;
  $.ajax({
type: 'GET',
  url: "/bin/getStudentPeronalInformationWithUserID",

                    data: {
                        userID: userValue
                    },

dataType: 'json',
success: function(myresopnse) {

   if (myresopnse.length >= 1) {
                              LastName.value = myresopnse[0].student_LName;
                              FirstName.value = myresopnse[0].student_FName;
                              FullName.value = myresopnse[0].student_FName + " " + myresopnse[0].student_LName;;
                              StudentUserId.value = myresopnse[0].student_UserID;
                              StudentCWID.value = myresopnse[0].student_ID;
                              StudentEmail.value = myresopnse[0].student_Email;
                              StudentEmail.value = "mamata.hampannavar@thoughtfocus.com";
   }
},
error: function(error) {
alert("error block=" + error);
}
});
}
});
function caseID() {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(response) {
            CaseId.value = response.CASEID;
        },
    });
}
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  BasicInformation.enabled=true;
  Keys.enabled=true;
  ApplicantSignaturePanel.enabled=true;
  
  AuthorizingSignaturePanel.visible=false;
 // PoliceSignaturePanel.visible=false;
 
 }

if(StageIndicator.value==="ToApprover"){
     
     BasicInformation.visible=true;
     BasicInformation.enabled=false;
     Keys.visible=true;
     Keys.enabled=false;
     ApplicantSignaturePanel.visible=true;
     ApplicantSignaturePanel.enabled=false;
     
     AuthorizingSignaturePanel.visible=true;
     AuthorizingSignaturePanel.enabled=true;
   }

if(StageIndicator.value==="ToPolice"){
     
     BasicInformation.visible=true;
     BasicInformation.enabled=false;
     Keys.visible=true;
     Keys.enabled=true;
     ApplicantSignaturePanel.visible=true;
     ApplicantSignaturePanel.enabled=false;
     AuthorizingSignaturePanel.visible=true;
     AuthorizingSignaturePanel.enabled=false;
  
     PoliceSignaturePanel.visible=true;
     PoliceSignaturePanel.enabled=true;
   }

        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_CaseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_CaseID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

 

type: 'GET',

 

url:"/bin/getCaseID",

         

dataType: 'json',

         

success: function(myresponse){              

                 

                    CaseID.value = myresponse.CASEID;

                                      

},

});
}

        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_CaseID_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_CaseID_init1 = function (scope) {
    with(this) {
        with(scope) {
            CampusID.enabled=false;
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_CaseID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_CaseID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(this.value !== null){
  CampusID.enabled=true;
}
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_CampusID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_CampusID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
 
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
debugger;
var caseid = CaseID.value;
var campusid = this.value;

 
$.ajax({
type: 'GET',
url: "/bin/getUniversityKeyControlInfo",
data: {
CampusID: campusid,
CaseID: caseid
},
dataType: 'json',
success: function(myresponse) {

debugger;

if (myresponse.NAME !== undefined) {
  
  Name.value = myresponse.NAME;
  CampusPhone.value = myresponse.CAMPUS_PHONE;
  Department.value = myresponse.DEPARTMENT_DIVISION;
  Contact.value = myresponse.CONTACT;
  Ext.value = myresponse.EXT; 
  EmploymentType.value = myresponse.EMPLOYMENT_TYPE;
  ApplicantSignature.value = myresponse.APPLICANT_SIGN; 
  ApplicantSignatureDate.value = myresponse.APPLICANT_SIGN_DATE; 
  AuthorizingSignature.value = myresponse.APPROVER_SIGN; 
  AuthorizingSignatureDate.value = myresponse.APPROVER_SIGN_DATE; 
  OfficeUse.value = myresponse.KEY_MANAGEMENT_SIGN; 
  PoliceSignatureDate.value = myresponse.KEY_MANAGEMENT_SIGN_DATE; 
  WorkflowInstanceID.value = myresponse.WORKFLOW_INSTANCE_ID;


if((myresponse.DETAILS).length>=1){
  Hook1.value = myresponse.DETAILS[0].HOOK;
  Copy1.value = myresponse.DETAILS[0].COPY;
  Building1.value = myresponse.DETAILS[0].BUILDING;
  Room1.value = myresponse.DETAILS[0].ROOM;
  Signature1.value = myresponse.DETAILS[0].SIGNATURE;
  ReturnDate1.value = myresponse.DETAILS[0].RETURN_DATE;  
  ReturnStatus1.value = myresponse.DETAILS[0].RETURN_STATUS; 
}
  
  if((myresponse.DETAILS).length>=2){
  Hook2.value = myresponse.DETAILS[1].HOOK;
  Copy2.value = myresponse.DETAILS[1].COPY;
  Building2.value = myresponse.DETAILS[1].BUILDING;
  Room2.value = myresponse.DETAILS[1].ROOM;
  Signature2.value = myresponse.DETAILS[1].SIGNATURE;
  ReturnDate2.value = myresponse.DETAILS[1].RETURN_DATE;  
  ReturnStatus2.value = myresponse.DETAILS[1].RETURN_STATUS; 
}
   if((myresponse.DETAILS).length>=3){
  Hook3.value = myresponse.DETAILS[2].HOOK;
  Copy3.value = myresponse.DETAILS[2].COPY;
  Building3.value = myresponse.DETAILS[2].BUILDING;
  Room3.value = myresponse.DETAILS[2].ROOM;
  Signature3.value = myresponse.DETAILS[2].SIGNATURE;
  ReturnDate3.value = myresponse.DETAILS[2].RETURN_DATE;  
  ReturnStatus3.value = myresponse.DETAILS[2].RETURN_STATUS; 
} 
   if((myresponse.DETAILS).length>=4){
  Hook4.value = myresponse.DETAILS[3].HOOK;
  Copy4.value = myresponse.DETAILS[3].COPY;
  Building4.value = myresponse.DETAILS[3].BUILDING;
  Room4.value = myresponse.DETAILS[3].ROOM;
  Signature4.value = myresponse.DETAILS[3].SIGNATURE;
  ReturnDate4.value = myresponse.DETAILS[3].RETURN_DATE;  
  ReturnStatus4.value = myresponse.DETAILS[3].RETURN_STATUS; 
} 
   if((myresponse.DETAILS).length>=5){
  Hook5.value = myresponse.DETAILS[4].HOOK;
  Copy5.value = myresponse.DETAILS[4].COPY;
  Building5.value = myresponse.DETAILS[4].BUILDING;
  Room5.value = myresponse.DETAILS[4].ROOM;
  Signature5.value = myresponse.DETAILS[4].SIGNATURE;
  ReturnDate5.value = myresponse.DETAILS[4].RETURN_DATE;  
  ReturnStatus5.value = myresponse.DETAILS[4].RETURN_STATUS; 
}
   if((myresponse.DETAILS).length>=6){
  Hook6.value = myresponse.DETAILS[5].HOOK;
  Copy6.value = myresponse.DETAILS[5].COPY;
  Building6.value = myresponse.DETAILS[5].BUILDING;
  Room6.value = myresponse.DETAILS[5].ROOM;
  Signature6.value = myresponse.DETAILS[5].SIGNATURE;
  ReturnDate6.value = myresponse.DETAILS[5].RETURN_DATE;  
  ReturnStatus6.value = myresponse.DETAILS[5].RETURN_STATUS; 
}
  


gifModal.style.display = "none";

} else{
   Name.value = null;
  CampusPhone.value = null;
  Department.value = null;
  Contact.value = null;
  Ext.value = null; 
  EmploymentType.value = null;
  ApplicantSignature.value = null; 
  ApplicantSignatureDate.value = null; 
  AuthorizingSignature.value = null; 
  AuthorizingSignatureDate.value = null; 
  OfficeUse.value = null; 
  PoliceSignatureDate.value = null;
  WorkflowInstanceID.value = null;
  
  Hook1.value = null;
  Hook2.value = null;
  Hook3.value = null; 
  Hook4.value = null; 
  Hook5.value = null;
  Hook6.value = null;
  
  Copy1.value = null;
  Copy2.value = null;
  Copy3.value = null; 
  Copy4.value = null; 
  Copy5.value = null; 
  Copy6.value = null;
  
  Building1.value = null;
  Building2.value = null; 
  Building3.value = null; 
  Building4.value = null; 
  Building5.value = null; 
  Building6.value = null;
  
  Room1.value = null;
  Room2.value = null; 
  Room3.value = null; 
  Room4.value = null; 
  Room5.value = null; 
  Room6.value = null; 
  
  Signature1.value = null;
  Signature2.value = null; 
  Signature3.value = null; 
  Signature4.value = null; 
  Signature5.value = null; 
  Signature6.value = null; 
  
  ReturnDate1.value = null;
  ReturnDate2.value = null; 
  ReturnDate3.value = null; 
  ReturnDate4.value = null; 
  ReturnDate5.value = null; 
  ReturnDate6.value = null; 
  
  ReturnStatus1.value = null;
  ReturnStatus2.value = null;
  ReturnStatus3.value = null; 
  ReturnStatus4.value = null; 
  ReturnStatus5.value = null; 
  ReturnStatus6.value = null;
  alert("No matching records found");
  gifModal.style.display = "none";
}




}




});
  
  
  }
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_CampusID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_CampusID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

var campusid = this.value;

$.ajax({
type: 'GET',
url: "/bin/getUniversityKeyControlInfo",
data: {
CampusID: campusid
},
dataType: 'json',
success: function(myresponse)  {
debugger;
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

if (myresponse.length === 1 && myresponse[0].NAME !== undefined) {
         Name.value = myresponse[0].NAME;
  CaseID.value = myresponse[0].CASE_ID;
  CampusPhone.value = myresponse[0].CAMPUS_PHONE;
  Department.value = myresponse[0].DEPARTMENT_DIVISION;
  Contact.value = myresponse[0].CONTACT;
  Ext.value = myresponse[0].EXT; 
  EmploymentType.value = myresponse[0].EMPLOYMENT_TYPE;
  ApplicantSignature.value = myresponse[0].APPLICANT_SIGN; 
  ApplicantSignatureDate.value = myresponse[0].APPLICANT_SIGN_DATE; 
  AuthorizingSignature.value = myresponse[0].APPROVER_SIGN; 
  AuthorizingSignatureDate.value = myresponse[0].APPROVER_SIGN_DATE; 
  OfficeUse.value = myresponse[0].KEY_MANAGEMENT_SIGN; 
  PoliceSignatureDate.value = myresponse[0].KEY_MANAGEMENT_SIGN_DATE; 
  WorkflowInstanceID.value = myresponse[0].WORKFLOW_INSTANCE_ID;


if((myresponse[0].DETAILS).length>=1){
  Hook1.value = myresponse[0].DETAILS[0].HOOK;
  Copy1.value = myresponse[0].DETAILS[0].COPY;
  Building1.value = myresponse[0].DETAILS[0].BUILDING;
  Room1.value = myresponse[0].DETAILS[0].ROOM;
  Signature1.value = myresponse[0].DETAILS[0].SIGNATURE;
  ReturnDate1.value = myresponse[0].DETAILS[0].RETURN_DATE;  
  ReturnStatus1.value = myresponse[0].DETAILS[0].RETURN_STATUS; 
}
  
  if((myresponse[0].DETAILS).length>=2){
  Hook2.value = myresponse[0].DETAILS[1].HOOK;
  Copy2.value = myresponse[0].DETAILS[1].COPY;
  Building2.value = myresponse[0].DETAILS[1].BUILDING;
  Room2.value = myresponse[0].DETAILS[1].ROOM;
  Signature2.value = myresponse[0].DETAILS[1].SIGNATURE;
  ReturnDate2.value = myresponse[0].DETAILS[1].RETURN_DATE;  
  ReturnStatus2.value = myresponse[0].DETAILS[1].RETURN_STATUS; 
}
   if((myresponse[0].DETAILS).length>=3){
  Hook3.value = myresponse[0].DETAILS[2].HOOK;
  Copy3.value = myresponse[0].DETAILS[2].COPY;
  Building3.value = myresponse[0].DETAILS[2].BUILDING;
  Room3.value = myresponse[0].DETAILS[2].ROOM;
  Signature3.value = myresponse[0].DETAILS[2].SIGNATURE;
  ReturnDate3.value = myresponse[0].DETAILS[2].RETURN_DATE;  
  ReturnStatus3.value = myresponse[0].DETAILS[2].RETURN_STATUS; 
} 
   if((myresponse[0].DETAILS).length>=4){
  Hook4.value = myresponse[0].DETAILS[3].HOOK;
  Copy4.value = myresponse[0].DETAILS[3].COPY;
  Building4.value = myresponse[0].DETAILS[3].BUILDING;
  Room4.value = myresponse[0].DETAILS[3].ROOM;
  Signature4.value = myresponse[0].DETAILS[3].SIGNATURE;
  ReturnDate4.value = myresponse[0].DETAILS[3].RETURN_DATE;  
  ReturnStatus4.value = myresponse[0].DETAILS[3].RETURN_STATUS; 
} 
   if((myresponse[0].DETAILS).length>=5){
  Hook5.value = myresponse[0].DETAILS[4].HOOK;
  Copy5.value = myresponse[0].DETAILS[4].COPY;
  Building5.value = myresponse[0].DETAILS[4].BUILDING;
  Room5.value = myresponse[0].DETAILS[4].ROOM;
  Signature5.value = myresponse[0].DETAILS[4].SIGNATURE;
  ReturnDate5.value = myresponse[0].DETAILS[4].RETURN_DATE;  
  ReturnStatus5.value = myresponse[0].DETAILS[4].RETURN_STATUS; 
}
   if((myresponse[0].DETAILS).length>=6){
  Hook6.value = myresponse[0].DETAILS[5].HOOK;
  Copy6.value = myresponse[0].DETAILS[5].COPY;
  Building6.value = myresponse[0].DETAILS[5].BUILDING;
  Room6.value = myresponse[0].DETAILS[5].ROOM;
  Signature6.value = myresponse[0].DETAILS[5].SIGNATURE;
  ReturnDate6.value = myresponse[0].DETAILS[5].RETURN_DATE;  
  ReturnStatus6.value = myresponse[0].DETAILS[5].RETURN_STATUS; 
}
  


gifModal.style.display = "none";

} else if (myresponse.length > 1) {
gifModal.style.display = "none";
modal.style.display = "block";
var col = [];
col.push("CAMPUS_ID");
col.push("NAME");
col.push("DEPARTMENT_DIVISION");
col.push("CASE_ID");




var table = document.createElement("table");
table.id = "tb";
var tr = table.insertRow(-1);
var headings = ["", "Campus Id", "Name", "Department", "Case Id"];
for (var j = 0; j < headings.length; j++) {
var th = document.createElement("th");
th.innerHTML = headings[j];
tr.appendChild(th);
}
for (var k = 0; k < myresponse.length; k++) {
tr = table.insertRow(-1);
// tr.appendChild('<td><input type = "radio" class = "rb" name="group" value = ""> </td>');
var button = document.createElement("input");
button.type = "radio";
button.setAttribute("class", "rb");
button.id = "rbtn";
button.name = "group";
button.value = "";
button.onclick = function(event) {



};
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
okButton.value = "OK";
okButton.onclick = function(event) {



var n;
var rButtonStatus;
//var rButtonStatusFalse;
var rButtons = document.getElementsByClassName("rb");
for (n = 0; n < rButtons.length; n++) {
if (rButtons[n].checked === false) {
rButtonStatus = false;
} else {
//
//
//Id.value = myresopnse[n].EMPLID;
       Name.value = myresponse[n].NAME;
    CaseID.value = myresponse[n].CASE_ID;
  CampusPhone.value = myresponse[n].CAMPUS_PHONE;
  Department.value = myresponse[n].DEPARTMENT_DIVISION;
  Contact.value = myresponse[n].CONTACT;
  Ext.value = myresponse[n].EXT; 
  EmploymentType.value = myresponse[n].EMPLOYMENT_TYPE;
  ApplicantSignature.value = myresponse[n].APPLICANT_SIGN; 
  ApplicantSignatureDate.value = myresponse[n].APPLICANT_SIGN_DATE; 
  AuthorizingSignature.value = myresponse[n].APPROVER_SIGN; 
  AuthorizingSignatureDate.value = myresponse[n].APPROVER_SIGN_DATE; 
  OfficeUse.value = myresponse[n].KEY_MANAGEMENT_SIGN; 
  PoliceSignatureDate.value = myresponse[n].KEY_MANAGEMENT_SIGN_DATE; 
  WorkflowInstanceID.value = myresponse[n].WORKFLOW_INSTANCE_ID;


if((myresponse[n].DETAILS).length>=1){
  Hook1.value = myresponse[n].DETAILS[0].HOOK;
  Copy1.value = myresponse[n].DETAILS[0].COPY;
  Building1.value = myresponse[n].DETAILS[0].BUILDING;
  Room1.value = myresponse[n].DETAILS[0].ROOM;
  Signature1.value = myresponse[n].DETAILS[0].SIGNATURE;
  ReturnDate1.value = myresponse[n].DETAILS[0].RETURN_DATE;  
  ReturnStatus1.value = myresponse[n].DETAILS[0].RETURN_STATUS; 
}
  
  if((myresponse[n].DETAILS).length>=2){
  Hook2.value = myresponse[n].DETAILS[1].HOOK;
  Copy2.value = myresponse[n].DETAILS[1].COPY;
  Building2.value = myresponse[n].DETAILS[1].BUILDING;
  Room2.value = myresponse[n].DETAILS[1].ROOM;
  Signature2.value = myresponse[n].DETAILS[1].SIGNATURE;
  ReturnDate2.value = myresponse[n].DETAILS[1].RETURN_DATE;  
  ReturnStatus2.value = myresponse[n].DETAILS[1].RETURN_STATUS; 
}
   if((myresponse[n].DETAILS).length>=3){
  Hook3.value = myresponse[n].DETAILS[2].HOOK;
  Copy3.value = myresponse[n].DETAILS[2].COPY;
  Building3.value = myresponse[n].DETAILS[2].BUILDING;
  Room3.value = myresponse[n].DETAILS[2].ROOM;
  Signature3.value = myresponse[n].DETAILS[2].SIGNATURE;
  ReturnDate3.value = myresponse[n].DETAILS[2].RETURN_DATE;  
  ReturnStatus3.value = myresponse[n].DETAILS[2].RETURN_STATUS; 
} 
   if((myresponse[n].DETAILS).length>=4){
  Hook4.value = myresponse[n].DETAILS[3].HOOK;
  Copy4.value = myresponse[n].DETAILS[3].COPY;
  Building4.value = myresponse[n].DETAILS[3].BUILDING;
  Room4.value = myresponse[n].DETAILS[3].ROOM;
  Signature4.value = myresponse[n].DETAILS[3].SIGNATURE;
  ReturnDate4.value = myresponse[n].DETAILS[3].RETURN_DATE;  
  ReturnStatus4.value = myresponse[n].DETAILS[3].RETURN_STATUS; 
} 
   if((myresponse[n].DETAILS).length>=5){
  Hook5.value = myresponse[n].DETAILS[4].HOOK;
  Copy5.value = myresponse[n].DETAILS[4].COPY;
  Building5.value = myresponse[n].DETAILS[4].BUILDING;
  Room5.value = myresponse[n].DETAILS[4].ROOM;
  Signature5.value = myresponse[n].DETAILS[4].SIGNATURE;
  ReturnDate5.value = myresponse[n].DETAILS[4].RETURN_DATE;  
  ReturnStatus5.value = myresponse[n].DETAILS[4].RETURN_STATUS; 
}
   if((myresponse[n].DETAILS).length>=6){
  Hook6.value = myresponse[n].DETAILS[5].HOOK;
  Copy6.value = myresponse[n].DETAILS[5].COPY;
  Building6.value = myresponse[n].DETAILS[5].BUILDING;
  Room6.value = myresponse[n].DETAILS[5].ROOM;
  Signature6.value = myresponse[n].DETAILS[5].SIGNATURE;
  ReturnDate6.value = myresponse[n].DETAILS[5].RETURN_DATE;  
  ReturnStatus6.value = myresponse[n].DETAILS[5].RETURN_STATUS; 
}
  
rButtonStatus = true;
break;
}
}
if (rButtonStatus === false) {
alert("Please select the department");
modal.style.display = "block";
} else {



modal.style.display = "none";
}
};
// footerModal = document.getElementById("modal_footer");
footerModal.appendChild(okButton);
// document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));



} else {
//alert("No matching records found");
var modalError = document.getElementById("errorPopup");
var para = document.getElementById("para");
para.innerHTML = "";
para.innerHTML = "No matching records found";
var errorBody = document.getElementById('errorData');
errorBody.innerHTML = "";
errorBody.appendChild(para);
var footerModalError = document.getElementById("errorPopup-footer");
var okButtonError = document.createElement("input");
okButtonError.type = "button";
okButtonError.setAttribute("class", "okBtn");
//okButtonError.id = "okBtn";
okButtonError.value = "Ok";
okButtonError.onclick = function(event) {
modalError.style.display = "none";
};
footerModalError.appendChild(okButtonError);
modalError.style.display = "block";




gifModal.style.display = "none";
}
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
alert("Please select the record");
modal.style.display = "block";
} else {



alert("Please select the department");
modal.style.display = "record";
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
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_CampusID_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_CampusID_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

var campusid = this.value;

var pattern = /^8\d{8}$/;
var result = pattern.test(campusid);
if (result === true) {
$.ajax({
	type: 'GET',
url: "/bin/getUniversityKeyControlInfo",
data: {
CampusID: campusid
},
dataType: 'json',
success: function(myresponse)  {
if (myresponse.length !== 0) {
  Name.value = myresponse[0].NAME;
  CampusPhone.value = myresponse[0].CAMPUS_PHONE;
  Department.value = myresponse[0].DEPARTMENT_DIVISION;
  Contact.value = myresponse[0].CONTACT;
  Ext.value = myresponse[0].EXT; 
  EmploymentType.value = myresponse[0].EMPLOYMENT_TYPE;
  ApplicantSignature.value = myresponse[0].APPLICANT_SIGN; 
  ApplicantSignatureDate.value = myresponse[0].APPLICANT_SIGN_DATE; 
  AuthorizingSignature.value = myresponse[0].APPROVER_SIGN; 
  AuthorizingSignatureDate.value = myresponse[0].APPROVER_SIGN_DATE; 
  OfficeUse.value = myresponse[0].KEY_MANAGEMENT_SIGN; 
  PoliceSignatureDate.value = myresponse[0].KEY_MANAGEMENT_SIGN_DATE; 
  WorkflowInstanceID.value = myresponse[0].WORKFLOW_INSTANCE_ID;
  
       var rowcountRemoveAll1 = Row1.instanceManager.instanceCount;
                    for (var k = 0; k < rowcountRemoveAll1; k++) {
                      debugger;
                        Row1.instanceManager.removeInstance(Row1.instanceIndex);
                    }
                    Row1.instanceManager.removeInstance((Row1.instanceManager.instanceCount) - 1);
                    for (var i = 0; i <  myresponse.length; i++) {
                      debugger;
                      
						for (var j = 0; j < myresponse[i].DETAILS.length; j++){
                          debugger;
                          
                        if(Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].Hook.value !== null){
                        Row1.instanceManager.addInstance();
						}
   
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].Hook.value =  myresponse[i].DETAILS[j].HOOK;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].Copy.value =  myresponse[i].DETAILS[j].COPY;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].Building.value =  myresponse[i].DETAILS[j].BUILDING;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].Room.value =  myresponse[i].DETAILS[j].ROOM;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].ResponsibleSignature.value =  myresponse[i].DETAILS[j].SIGNATURE;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].IssuedDate.value =  myresponse[i].DETAILS[j].ISSUED_DATE;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].ReturnDate.value =  myresponse[i].DETAILS[j].RETURN_DATE;
						Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].ReturnStatus.value =  myresponse[i].DETAILS[j].RETURN_STATUS;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].REFWorkflowInstanceID.value = myresponse[i].DETAILS[j].WORKFLOW_INSTANCE_ID;
                        Row1.instanceManager.instances[Row1.instanceManager.instanceCount-1].REFCaseID.value = myresponse[i].DETAILS[j].CASE_ID;
						}
                    }
                    var rowcount = Row1.instanceManager.instanceCount;
                    Row1.instanceManager.removeInstance(rowcount );
                    gifModal.style.display = "none";

                
}else{
  debugger;
  gifModal.style.display = "none";
 showErrorModal("Alert!", "Please fill CampusID");
}
}
});
}else{
  debugger;
  gifModal.style.display = "none";
 showErrorModal("Alert!", "Please fill valid CampusID");
}
}
  
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_ApplicantSignaturePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_ApplicantSignaturePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_InitiatorDeclarationCheckbox_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_InitiatorDeclarationCheckbox_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
ApplicantSignature.value = userValue;
ApplicantSignatureDate.value = myresopnse.SERVER_DATE;

},
error: function(error) {
alert("error block=" + error);
}
});

ApplicantSignature.enabled = false;
ApplicantSignatureDate.enabled = false;

 
}else{
ApplicantSignature.value = "";
ApplicantSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_AuthorizerDeclarationCheckbox_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_AuthorizerDeclarationCheckbox_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToApprover"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
AuthorizingSignature.value = userValue;
AuthorizingSignatureDate.value = myresopnse.SERVER_DATE;

},
error: function(error) {
alert("error block=" + error);
}
});

AuthorizingSignature.enabled = false;
AuthorizingSignatureDate.enabled = false;

 
}else{
AuthorizingSignature.value = "";
AuthorizingSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_KeyManagementDeclarationCheckbox_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_KeyManagementDeclarationCheckbox_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',

url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
OfficeUse.value = userValue;
PoliceSignatureDate.value = myresopnse.SERVER_DATE;

},
error: function(error) {
alert("error block=" + error);
}
});

EmployeeSignatureScribble.enabled=true;
OfficeUse.enabled=true;
 
}else{
AuthorizingSignature.value = "";
AuthorizingSignatureDate.value = null;
}
}
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_panel1641368677653_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_panel1641368677653_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_aftiaDescCWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_aftiaDescCWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_EmailSubject_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_EmailSubject_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_InitiatorEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_InitiatorEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function return_blue_card_university_key_control___building_keys___return.generated_GeneratePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_GeneratePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (Name.value!==null && CampusID.value !== null) {
    getPdf();
}else{
  //alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please fill CampusID");
   }

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/return-blue-card/university-key-control---building-keys---return');
            jsonData.append('fileName', Name.value);          
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
 * @function return_blue_card_university_key_control___building_keys___return.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
return_blue_card_university_key_control___building_keys___return.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*if(Name !== null){
  InitiatorName.value = Name.value;
  InitiatorUserId.value = CampusID.value;
  EmailSubject.value = "Test - University Key Control - Building Keys "+Name.value;
  aftiaDescCWID.value = Name.value+" "+CampusID.value;
}

ApproverEmail.value = "chaitanya.sai@thoughtfocus.com";
ApproverName.value = "Joseph Luzzi";
EmployeeEmail.value="chaitanya.sai@thoughtfocus.com";
*/

guideBridge.submit();
        }
	}
}
