/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
$.ajax({
type: 'GET',
url: "/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse) {
var userValue = myresponse.userId;//mchoi88
  userValue = "h.baltazar";
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
$.ajax({
type: 'GET',
url: "/bin/getCAStudentData",
data: {
uid: userValue,
action: "CA_STUD_DATA"
},
dataType: 'json',
success: function(myresponse) {
if (myresponse.length > 0) {
var cwid = myresponse[0].STUDENT_ID;
$.ajax({
type: 'GET',
url: "/bin/getCAStudentData",
data: {
cwid: cwid,
action: "CA_CWID_DATA"
},
dataType: 'json',
success: function(result) {
if (result.length > 0) {
$.ajax({
type: 'GET',
url: "/bin/getCAStudentData",
data: {
cwid: cwid,
action: "CA_DATA_EXIST"
},
dataType: 'json',
success: function(submissionresult) {
if (submissionresult.length === 0) {
CampusStudentID.value = myresponse[0].STUDENT_ID;
FullName.value = myresponse[0].NAME;
FirstName.value=myresponse[0].FIRST_NAME;
LastName.value=myresponse[0].LAST_NAME;
StudentEmail.value = myresponse[0].PREF_EMAIL;
StudentUserId.value = myresponse[0].USERID;  
gifModal.style.display = "none";
modal.style.display = "none";
} else {
gifModal.style.display = "none";
showErrorModal("Alert!", "Please beware that you are requesting another grant. Your current status does not allow you to submit another request.");
}
}
});
} else {
gifModal.style.display = "none";
showErrorModal("Alert!", "You are not eligible for the grant");
}
}
});
} else {
gifModal.style.display = "none";
showErrorModal("Alert!", "No matching records found");
}
}
});
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
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
$.ajax({



type: 'GET',
url:"/bin/getCaseID",
dataType: 'json',



success: function(myresponse){
CaseId.value = myresponse.CASEID;



}
});
}
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_FullName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_FullName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_ExplainationAboutFinancialNeed_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_ExplainationAboutFinancialNeed_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = (this.value).trim();
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_panel1637662528689_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_panel1637662528689_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({



type: 'GET',



url: "/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse) {
// gifModal.style.display = "block";

workflow_initiator.value = myresopnse.userId;
}
});
}
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_StudentCB_valueCommit0 = function (scope) {
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
StudentSignature.value = FullName.value;
StudentDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

StudentSignature.enabled = false;
StudentDate.enabled = false;



}else{
StudentDate.value = "";
StudentSignature.value = null;
}
}
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_StudentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_StudentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
csuf_emergency_assistance_grant_csuf_emergency_assistance_grant.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CampusStudentID.value !== null){
  aftiaDescCWID.value =  FullName.value+" " +CampusStudentID.value;
  EmailSubject.value = "CSUF Emergency Assistance Grant - "+CampusStudentID.value;
    }
StudentEmail.value = "anupama.dhar@thoughtfocus.com";
guideBridge.submit();
        }
	}
}
