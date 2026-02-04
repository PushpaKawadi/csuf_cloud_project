/**
 * @function blue_card_university_key_control___building_keys.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_guideRootPanel_init0 = function (scope) {
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
 * @function blue_card_university_key_control___building_keys.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
  BasicInformation.enabled=true;
  Keys.enabled=true;
  ApplicantSignaturePanel.enabled=true;
  
  AuthorizingSignaturePanel.visible=false;
  PoliceSignaturePanel.visible=false;
 
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
 * @function blue_card_university_key_control___building_keys.generated_CaseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_CaseID_init0 = function (scope) {
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
 * @function blue_card_university_key_control___building_keys.generated_CaseID_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_CaseID_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_CampusID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_CampusID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

var cwid = this.value; 

$.ajax({
type: 'GET',
url: "/bin/getSubstituteFacultyData",
data: {
action: "SUB_FACULTY_CWID_LOOKUP",
cwid: cwid
},
dataType: 'json',
success: function(myresopnse) {

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

if (myresopnse.length === 1 && myresopnse[0].EMPLID!== undefined) {
        var fname = myresopnse[0].FIRST_NAME;
        var lname = myresopnse[0].LAST_NAME;
        var deptname = myresopnse[0].DEPTNAME;
        var deptid = myresopnse[0].DEPTID;
        var divname = myresopnse[0].DIVISION_NAME;
        var divid = myresopnse[0].DIVSION;

        Name.value = fname+" "+lname;
        Department.value = "("+divname+"("+deptid+") - "+divname+"("+divid+"))";

gifModal.style.display = "none";
modal.style.display = "none";

} else if (myresopnse.length > 1) {
gifModal.style.display = "none";
modal.style.display = "block";
var col = [];
col.push("EMPLID");
col.push("LAST_NAME");
col.push("FIRST_NAME");
col.push("DEPTID");
col.push("DEPTNAME");



var table = document.createElement("table");
table.id = "tb";
var tr = table.insertRow(-1);
var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
for (var j = 0; j < headings.length; j++) {
var th = document.createElement("th");
th.innerHTML = headings[j];
tr.appendChild(th);
}
for (var k = 0; k < myresopnse.length; k++) {
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
for (n = 0; n < rButtons.length; n++) {
if (rButtons[n].checked === false) {
rButtonStatus = false;
} else {
//
//
//Id.value = myresopnse[n].EMPLID;
        var fname = myresopnse[n].FIRST_NAME;
        var lname = myresopnse[n].LAST_NAME;
        var deptname = myresopnse[n].DEPTNAME;
        var deptid = myresopnse[n].DEPTID;
        var divname = myresopnse[n].DIVISION_NAME;
        var divid = myresopnse[n].DIVSION;

        Name.value = fname+" "+lname;
        Department.value = "("+divname+"("+deptid+") - "+divname+"("+divid+"))";


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
alert("Please select the department");
modal.style.display = "block";
} else {



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
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_button1649250628933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_button1649250628933_click0 = function (scope) {
    with(this) {
        with(scope) {
              var rowcount = KeyTable.instanceManager.instanceCount;
    var lastRow = rowcount - 1;
   
    KeyTable.instanceManager.addInstance();
    rowcount = KeyTable.instanceManager.instanceCount;
    lastRow = rowcount - 1;
        }
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_InitiatorDeclarationCheckbox_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_InitiatorDeclarationCheckbox_valueCommit0 = function (scope) {
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
 * @function blue_card_university_key_control___building_keys.generated_AuthorizerDeclarationCheckbox_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_AuthorizerDeclarationCheckbox_valueCommit0 = function (scope) {
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
 * @function blue_card_university_key_control___building_keys.generated_KeyManagementDeclarationCheckbox_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_KeyManagementDeclarationCheckbox_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToPolice"){
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
 * @function blue_card_university_key_control___building_keys.generated_panel1641368677653_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_panel1641368677653_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_aftiaDescCWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_aftiaDescCWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_EmailSubject_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_EmailSubject_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_InitiatorEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_InitiatorEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function blue_card_university_key_control___building_keys.generated_GeneratePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_GeneratePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (Name.value!==null && CampusID.value !== null) {
    getPdf();
}else{
  //alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please fill all the required fields");
   }

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/blue-card/university-key-control---building-keys');
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
 * @function blue_card_university_key_control___building_keys.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
blue_card_university_key_control___building_keys.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(Name !== null){
  InitiatorName.value = Name.value;
  InitiatorUserId.value = CampusID.value;
  EmailSubject.value = "Test - University Key Control - Building Keys "+Name.value;
  aftiaDescCWID.value = Name.value+" "+CampusID.value;
}

ApproverEmail.value = "chaitanya.sai@thoughtfocus.com";
ApproverName.value = "Joseph Luzzi";
EmployeeEmail.value="chaitanya.sai@thoughtfocus.com";

guideBridge.submit();
        }
	}
}
