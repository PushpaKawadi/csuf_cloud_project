/**
 * @function drone_flight_submission_drone_flight_submission.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var userValue;
$.ajax({
type: 'GET',
url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
  debugger;
var userValue = myresopnse.userId;
workflow_initiator.value = userValue;
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
 * @function drone_flight_submission_drone_flight_submission.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  BasicInformation.enabled = true;
  supDocuments.enabled = true;
  InitiatorSiganturePanel.enabled = true;
  VicePresidentSignaturePanel.visible = false;
  RiskManagementSignaturePanel.visible = false;
  CampusPoliceSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToVP"){
  BasicInformation.visible=true;
  BasicInformation.enabled=false;
  supDocuments.visible=false;
  InitiatorSiganturePanel.visible=true;
  InitiatorSiganturePanel.enabled=false;
  VicePresidentSignaturePanel.visible=true;
  VicePresidentSignaturePanel.enabled=true;
  RiskManagementSignaturePanel.visible = false;
  CampusPoliceSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToRM"){
  BasicInformation.visible=true;
  BasicInformation.enabled=false;
  supDocuments.visible=false;
  InitiatorSiganturePanel.visible=true;
  InitiatorSiganturePanel.enabled=false;
  VicePresidentSignaturePanel.visible=true;
  VicePresidentSignaturePanel.enabled=false;
  RiskManagementSignaturePanel.visible = true;
  RiskManagementSignaturePanel.enabled = true;
  CampusPoliceSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToPD"){
  BasicInformation.visible=true;
  BasicInformation.enabled=false;
  supDocuments.visible=false;
  InitiatorSiganturePanel.visible=true;
  InitiatorSiganturePanel.enabled=false;
  VicePresidentSignaturePanel.visible=true;
  VicePresidentSignaturePanel.enabled=false;
  RiskManagementSignaturePanel.visible = true;
  RiskManagementSignaturePanel.enabled = false;
  CampusPoliceSignaturePanel.visible = true;
  CampusPoliceSignaturePanel.enabled = true;
}

if(StageIndicator.value == "ToInitiator"){
  BasicInformation.enabled = true;
  supDocuments.enabled = true;
  InitiatorSiganturePanel.enabled = true;
  if(VPName.value === null && VPSignature.value === null){
     VicePresidentSignaturePanel.visible = false;
  }else{
    VicePresidentSignaturePanel.visible = true;
    VicePresidentSignaturePanel.enabled = false;
  }
  
   if(RiskMgmtName.value === null && RiskMgmtSignature.value === null){
     RiskManagementSignaturePanel.visible = false;
  }else{
    RiskManagementSignaturePanel.visible = true;
    RiskManagementSignaturePanel.enabled = false;
  }
  
    if(CampusPoliceName.value === null && CampusPoliceSignature.value === null){
     CampusPoliceSignaturePanel.visible = false;
  }else{
    CampusPoliceSignaturePanel.visible = true;
    CampusPoliceSignaturePanel.enabled = false;
  }
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var userValue;
$.ajax({
type: 'GET',
url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
  debugger;
var userValue = myresopnse.userId;
  //var userValue = 'zz-marisarodriguez';
  getLoggedInUserType(userValue);
},
error: function(error) {
alert("error block=" + error);
}
});
  
}

function getLoggedInUserType(userValue){
  debugger;
  $.ajax({
type: 'GET',
url: "/bin/getDroneFlightRequestData",
data: {
action: "DRONE_FLIGHT_USER_DETAILS",
userID: userValue
},
dataType: 'json',
success: function(myresopnse) {
  debugger;
if(myresopnse.length !== null){
  if(myresopnse[0].FILTER_TYPE == "STUDENT"){
    getStudentDetails(myresopnse);
  }
  if(myresopnse[0].FILTER_TYPE == "FACULTY"){
    getEmployeeDetails(myresopnse);
  }
}
},
error: function(error) {
alert("error block=" + error);
}
});
}

function getStudentDetails(myresopnse){
  if (myresopnse.length >= 1) {
                CWID.value = myresopnse[0].EMPLID;
               // PrefferedEmail.value = myresopnse[0].PREF_EMAIL;
                PrefferedEmail.value = "chaitanya.sai@thoughtfocus.com";
                InitiatorUserId.value = myresopnse[0].USERID;
                //InitiatorEmailId.value = response[0].PREF_EMAIL;
                var fname = myresopnse[0].FIRST_NAME;
                var lname = myresopnse[0].LAST_NAME;
                Name.value = fname + " " + lname;
                InitiatorFirstName.value = fname;
                InitiatorLastName.value = lname;
            } else {
                showErrorModal("Alert!", "No matching records found");
            }
  
}
function getEmployeeDetails(myresopnse){
  debugger;
  var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
    var fname = myresopnse[0].FIRST_NAME;
    var lname = myresopnse[0].LAST_NAME;
    CWID.value = myresopnse[0].EMPLID;
    Name.value = fname + " " + lname;
    InitiatorFirstName.value = fname;
    InitiatorLastName.value = lname;
   // PrefferedEmail.value = myresopnse[0].EMAILID;
    PrefferedEmail.value = "chaitanya.sai@thoughtfocus.com";
    InitiatorUserId.value = myresopnse[0].EMP_USERID;
    // InitiatorEmailId.value = myresopnse[0].EMAILID;
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
        button.onclick = function(event) {};
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
               CWID.value = myresopnse[n].EMPLID;

                Name.value = fname + " " + lname;
                InitiatorFirstName.value = fname;
                InitiatorLastName.value = lname;
                InitiatorUserId.value = myresopnse[n].EMP_USERID;
                //PrefferedEmail.value = myresopnse[n].EMAILID;
                PrefferedEmail.value = "chaitanya.sai@thoughtfocus.com";
                //   InitiatorEmailId.value = myresopnse[n].EMAILID;
                rButtonStatus = true;
                break;
            }
        }
        if (rButtonStatus === false) {
            //alert("Please select the department");
            showErrorModal("Alert!", "Please select the department");
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
        Name.value = "";
        InitiatorEmailId.value = "";
        PrefferedEmail.value = "";
        InitiatorUserId.value = "";
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
        modal.style.display = "none";
    } else {
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
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
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
        Name.value = fname+" "+lname;
        PrefferedEmail.value = myresopnse[0].EMAILID;
        InitiatorUserId.value = myresopnse[0].EMP_USERID;
       // InitiatorEmailId.value = myresopnse[0].EMAILID;
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
       
        Name.value = fname+" "+lname;
      InitiatorUserId.value = myresopnse[n].EMP_USERID;
   PrefferedEmail.value = myresopnse[n].EMAILID;
     //   InitiatorEmailId.value = myresopnse[n].EMAILID;


rButtonStatus = true;
break;
}
}
if (rButtonStatus === false) {
//alert("Please select the department");
  showErrorModal("Alert!", "Please select the department");
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
  Name.value = "";
  InitiatorEmailId.value="";
  PrefferedEmail.value="";
  InitiatorUserId.value="";
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
modal.style.display = "none";
} else {
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
 * @function drone_flight_submission_drone_flight_submission.generated_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_FlightDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_FlightDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            /* Add your own JavaScript here. */

var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;
var d = (lastYear+"-"+"7"+"-"+"1");
this.value = d;
}else{
this.value =dateValue;
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_DroneFlightStartTime_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_DroneFlightStartTime_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToInitiator"){
  if(this.value !== null && DroneFlightEndTime.value !== null){
    FlightTime.value = this.value+" - "+DroneFlightEndTime.value;
  }else{
    FlightTime.value = "";
  }
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_DroneFlightEndTime_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_DroneFlightEndTime_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToInitiator"){
  if(this.value !== null && DroneFlightStartTime.value !== null){
    FlightTime.value = DroneFlightStartTime.value+" - "+this.value;
  }else{
    FlightTime.value = "";
  }
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_AdditionalComments_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_AdditionalComments_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
this.value = (this.value).trim();
  //var set1 = "looks like it’s not visi'ble "; // Reserved Characters
//HRCoordinatorSignComment.value = (decodeURI(HRCoordinatorSignComment.value)); 
var s = this.value;
const decoder = new TextDecoder();
const encoder = new TextEncoder();
const byteArray = encoder.encode(s);
console.log(decoder.decode(byteArray));
this.value = s;
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_supDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_supDocuments_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  supDocuments.visible = true; 
}else{
  supDocuments.visible = false;
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    var filePath = supportDoc1.fileAttachment.value;
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc1.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc1.fileAttachment.value = doc2NewName;
    }
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    //alert(extension);
    extension = extension.toLowerCase();
    if ((extension != "jpeg") && (extension != "png") && (extension != "jpg") && (extension != "tif") && (extension != "tiff")) {
        supportDoc1.fileAttachment.value = null;
        showErrorModal("Alert!", "Only JPEG,PNG,JPG,TIF and TIFF files are allowed");
    }
  if ((this.value !== "") && (supportDoc2.value !== "")) {
        customPopup.visible = false;
    }
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    //alert(extension);
    extension = extension.toLowerCase();
    if ((extension != "jpeg") && (extension != "png") && (extension != "jpg") && (extension != "tif") && (extension != "tiff")) {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert!", "Only JPEG,PNG,JPG,TIF and TIFF files are allowed");
    }
    if ((this.value !== "") && (supportDoc1.value !== "")) {
        customPopup.visible = false;
    }
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				StudentSignature.value = Name.value;
                StudentName.value = Name.value;
				StudentDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			StudentSignature.enabled = false;       
			StudentName.enabled = false; 
            StudentDate.enabled = false;
				
	} else {
	    StudentSignature.value = "";
		StudentName.value = "";	   
        StudentDate.value = "";
	}
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_StudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_StudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_StudentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_StudentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_VicePresidentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_VicePresidentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToVP" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				VPSignature.value = userValue;
                VPName.value = userValue;
				VPDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			VPSignature.enabled = false;       
			VPName.enabled = false; 
            VPDate.enabled = false;
				
	} else {
	    VPSignature.value = "";
		VPName.value = "";	   
        VPDate.value = "";
	}
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_VPName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_VPName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_VPSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_VPSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_VPDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_VPDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_VPDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_VPDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DecisionFlag.value = "VPA";
}else if(this.value == "2"){
  DecisionFlag.value = "VPR";
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_RiskManagementCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_RiskManagementCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRM" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				RiskMgmtName.value = userValue;
                RiskMgmtSignature.value = userValue;
				RiskMgmtDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			RiskMgmtName.enabled = false;       
			RiskMgmtSignature.enabled = false; 
            RiskMgmtDate.enabled = false;
				
	} else {
	    RiskMgmtName.value = "";
		RiskMgmtSignature.value = "";	   
        RiskMgmtDate.value = "";
	}
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_RiskMgmtName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_RiskMgmtName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_RiskMgmtSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_RiskMgmtSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_RiskMgmtDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_RiskMgmtDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_RiskMgmtDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_RiskMgmtDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DecisionFlag.value = "RMA";
}else if(this.value == "2"){
  DecisionFlag.value = "RMR";
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_PoliceCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_PoliceCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPD" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				CampusPoliceName.value = userValue;
                CampusPoliceSignature.value = userValue;
				CampusPoliceDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			CampusPoliceName.enabled = false;       
			CampusPoliceSignature.enabled = false; 
            CampusPoliceDate.enabled = false;
				
	} else {
	    CampusPoliceName.value = "";
		CampusPoliceSignature.value = "";	   
        CampusPoliceDate.value = "";
	}
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_CampusPoliceName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_CampusPoliceName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_CampusPoliceSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_CampusPoliceSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_CampusPoliceDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_CampusPoliceDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_CampusPoliceDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_CampusPoliceDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DecisionFlag.value = "CPA";
}else if(this.value == "2"){
  DecisionFlag.value = "CPR";
}
        }
	}
}
/**
 * @function drone_flight_submission_drone_flight_submission.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if (Name.value !== null) {
    getPdf();
}else{
  //alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please fill all the required fields");
   }

function getPdf() {
    console.log("in view pdf");
  
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/drone-flight-submission/drone-flight-submission');
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
 * @function drone_flight_submission_drone_flight_submission.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
drone_flight_submission_drone_flight_submission.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
  aftiaDescCWID.value = Name.value+" "+CWID.value;
  EmailSubject.value = "Test - Drone Flight Request - "+CWID.value;
}

InitiatorEmailId.value="chaitanya.sai@thoughtfocus.com";
     guideBridge.submit();


        }
	}
}
