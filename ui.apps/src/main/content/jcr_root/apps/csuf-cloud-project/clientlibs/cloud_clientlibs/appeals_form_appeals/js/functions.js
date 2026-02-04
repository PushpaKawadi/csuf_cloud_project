/**
 * @function appeals_form_appeals.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  AppealsSignaturePanel.visible = false;
}
if(StageIndicator.value == "ToAppeals"){
 UnofficialTranscriptDoc.fileAttachment.mandatory= "";
  basicInformation.enabled = true;
  reasonForAppeal.enabled = false;
  PersonalStatement.enabled = false;
  supportingDocs.enabled = false;
  applicantSignaturePanel.enabled = false;
  AppealsSignaturePanel.visible = true; 
  AppealsSignaturePanel.enabled = true;
  
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
   
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            var userID = userValue;
            workflow_initiator.value = userValue;
            userID = 'darodasortiz';
           // userID = 'katlin_tomas1';
            StudentUserId.value = userValue;
            $.ajax({
                type: 'GET',
                url: "/bin/getAppealData",
                data: {
                    student_userid: userID,
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length == 1) {
                        getData(myresopnse);
                    } else if (myresopnse.length > 1) {
                        getMultipleTermData(myresopnse);
                    } else {
                        gifModal.style.display = "none";
                        //showErrorModal("Alert!", "No matcing records found");
                        showErrorModal("Alert!", "At this time you are unable to submit an appeal, please wait until you have received your email notification of your withdrawal or denial, and your application status has been updated.");
                    }



                }
            });
        }

    });
}

function getData(resultSet) {
    if (resultSet[0].ACAD_CAREER == "UGRD") {
        if (resultSet[0].PROG_ACTION == "DENY" || resultSet[0].PROG_ACTION == "WAPP") {
         // /*
            $.ajax({
                type: 'GET',
                url: "/bin/appealsServlet",
                data: {
                    cwid: resultSet[0].CWID,
                    term: (resultSet[0].ADMIT_TERM_DESCR).trim(),
                    action: "APPEALS_SUBMISSION_DATA"
                },
                dataType: 'json',

                success: function(result) {
                    if (result.length === 0) {
                   // */
						
                        deadlineDate.value = resultSet[0].APPL_STATUS_DT;
                        applStatusDt.value = resultSet[0].APPL_STATUS_DT;
                        /*var now = new Date(new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10));
                        var deadlineDt= new Date(deadlineDate.value);*/

                        if (deadlineDate !== "") {
                            /*var diff = Math.abs(now - deadlineDt);
                            var difference_In_Days = diff / (1000 * 3600 * 24);*/
                            if ((resultSet[0].DIFF_DAYS) <= 31) {
                                CSUStudentEmail.value = resultSet[0].STUDENT_EMAIL.trim();
                                ApplicantFirstName.value = resultSet[0].STUDENT_FIRSTNAME.trim();
                                ApplicantLastName.value = resultSet[0].STUDENT_LASTNAME.trim();
                                Term.value = resultSet[0].ADMIT_TERM_DESCR;
                                TermCode.value = resultSet[0].ADMIT_TERM;
                                if (resultSet[0].STUDENT_STATUS == "TRANSFER") {
                                    AppealCB3.value = "1";
                                }
                                if (resultSet[0].STUDENT_STATUS == "FRESHMEN") {
                                    AppealCB1.value = "1";
                                }
                                if (resultSet[0].STUDENT_STATUS == "RETURNING") {
                                    AppealCB2.value = "1";
                                }
                                StudentMajor.value = resultSet[0].MAJOR;
                                /*if(resultSet[0].APPEAL_REASON == "Request for Reevaluation of Denied Admission"){
                                 AppealReason1.value = "1";
                               } if(resultSet[0].APPEAL_REASON == "Request for Reevaluation for Admission Rescind"){
                                 AppealReason2.value = "1";
                               }
                                if(resultSet[0].APPEAL_REASON == "Missed Initial Transcript Deadline"){
                                 AppealReason3.value = "1";
                               }
                                if(resultSet[0].APPEAL_REASON == "Enrollment Deposit Deadline/Accept Offer"){
                                 AppealReason4.value = "1";
                               } if(resultSet[0].APPEAL_REASON == "Final Transcript Deadline"){
                                 AppealReason5.value = "1";
                               }
                                if(resultSet[0].APPEAL_REASON == "Missed Waitlist Offer Deadline"){
                                 AppealReason6.value = "1";
                               }*/
                                TelNumber.value = resultSet[0].STUDENT_CELL_PHONE.trim();
                                ApplicantName.value = resultSet[0].STUDENT_NAME.trim();
                                CWID.value = resultSet[0].CWID;
                                //CSUStudentEmail.value = "yjayaram@fullerton.edu";
                                //PersonalStudentEmail.value = "yjayaram@fullerton.edu";
                            } else {
                                showErrorModal("Alert!", "Thank for your interest in Cal State Fullerton, however more than 15 business days have lapsed since your email notification, and you are no longer eligible to submit an appeal.");
                            }
                        }
                   // /*
                     } else {
                        showErrorModal("Alert!", "Please beware that you are launching another request for the same academic term. Your current status at Cal State Fullerton does not allow you to submit an appeal");
                    }
                }
            });
          //  */

        } else {
            showErrorModal("Alert!", "Your current admission status at Cal State Fullerton does not allow you to submit an appeal. Appeals are reserved for applicants that have been denied or withdrawn.");
        }
    } else {
        var url = "http://www.fullerton.edu/graduate/";
        showTextErrorModal("Alert!", "All Graduate applicants who would like to submit an appeal will need to contact the ", ". Credential and 2nd bachelor applicants (nursing only) should consult their advisor for appeal information. ", url);
    }
    gifModal.style.display = "none";
}

function getMultipleTermData(resultData) {
  var modal = document.getElementById('myModal');
    gifModal.style.display = "none";
    modal.style.display = "block";

    var col = [];

    col.push("STUDENT_FIRSTNAME");

    col.push("STUDENT_LASTNAME");

    col.push("CWID");

    col.push("ACAD_CAREER");

    col.push("ADMIT_TERM_DESCR");
    var table = document.createElement("table");
    table.id = "tb";
    var tr = table.insertRow(-1);
    var headings = ["", "First Name", "Last Name", "CWID", "ACAD_CAREER", "Term"];
    for (var j = 0; j < headings.length; j++) {
        var th = document.createElement("th");
        th.innerHTML = headings[j];
        tr.appendChild(th);
    }
    for (var k = 0; k < resultData.length; k++) {
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
            tabCell.innerHTML = resultData[k][col[l]];
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

    var footerModal = document.getElementById("modal_footer");
    var okButton = document.createElement("input");
    okButton.type = "button";
    okButton.setAttribute("class", "okBtn");

    okButton.value = "Ok";
    okButton.onclick = function(event) {

        var n;
        var rButtonStatus;
        var rButtons = document.getElementsByClassName("rb");
        for (n = 0; n < rButtons.length; n++) {
            if (rButtons[n].checked === false) {

                rButtonStatus = false;
            } else {

                if (resultData[n].ACAD_CAREER == "UGRD") {
                    if (resultData[n].PROG_ACTION == "DENY" || resultData[n].PROG_ACTION == "WAPP") {
                        $.ajax({
                            type: 'GET',
                            url: "/bin/appealsServlet",
                            data: {
                                cwid: resultData[n].CWID,
                                term: (resultData[n].ADMIT_TERM_DESCR).trim(),
                                action: "APPEALS_SUBMISSION_DATA"
                            },
                            dataType: 'json',

                            success: function(result) {
                              
                                  //if (result.length < 1) {
                                if (result.length === 0 ) {
                                    deadlineDate.value = resultData[n].APPL_STATUS_DT;
                                    applStatusDt.value = resultData[n].APPL_STATUS_DT;

                                    if (deadlineDate !== "") {
                                        if ((resultData[n].DIFF_DAYS) <= 31) {
                                            CSUStudentEmail.value = resultData[n].STUDENT_EMAIL.trim();
                                            ApplicantFirstName.value = resultData[n].STUDENT_FIRSTNAME.trim();
                                            ApplicantLastName.value = resultData[n].STUDENT_LASTNAME.trim();
                                            Term.value = resultData[n].ADMIT_TERM_DESCR;
                                            TermCode.value = resultData[n].ADMIT_TERM;
                                            if (resultData[n].STUDENT_STATUS == "TRANSFER") {
                                                AppealCB3.value = "1";
                                            }
                                            if (resultData[n].STUDENT_STATUS == "FRESHMEN") {
                                                AppealCB1.value = "1";
                                            }
                                            if (resultData[n].STUDENT_STATUS == "RETURNING") {
                                                AppealCB2.value = "1";
                                            }
                                            StudentMajor.value = resultData[n].MAJOR;

                                            TelNumber.value = resultData[n].STUDENT_CELL_PHONE.trim();
                                            ApplicantName.value = resultData[n].STUDENT_NAME.trim();
                                            CWID.value = resultData[n].CWID;
                                        } else {
                                            showErrorModal("Alert!", "Thank for your interest in Cal State Fullerton, however more than 15 business days have lapsed since your email notification, and you are no longer eligible to submit an appeal.");
                                        }
                                    }
                                } else {
                                    showErrorModal("Alert!", "Please beware that you are launching another request for the same academic term. Your current status at Cal State Fullerton does not allow you to submit an appeal");
                                }
                            }
                        });

                    } else {
                        showErrorModal("Alert!", "Your current admission status at Cal State Fullerton does not allow you to submit an appeal. Appeals are reserved for applicants that have been denied or withdrawn.");
                    }
                } else {
                    var url = "http://www.fullerton.edu/graduate/";
                    showTextErrorModal("Alert!", "All Graduate applicants who would like to submit an appeal will need to contact the ", ". Credential and 2nd bachelor applicants (nursing only) should consult their advisor for appeal information. ", url);
                }
                gifModal.style.display = "none";
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
    var footerModal = document.getElementById("modal_footer");

    footerModal.appendChild(okButton);
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_CaseId_init0 = function (scope) {
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
 * @function appeals_form_appeals.generated_AppealCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealCB1.value == "1"){
  AppealCB2.value = "";
  AppealCB3.value = "";
  
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealCB3.value == "1"){
  AppealCB1.value = "";
  AppealCB2.value = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
 
if(AppealCB2.value == "1"){
  AppealCB1.value = "";
  AppealCB3.value = "";
  
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ApplicantName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ApplicantName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_CSUStudentEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_CSUStudentEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_StudentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_StudentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AdmissionAppealsPanel1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AdmissionAppealsPanel1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if((OtherAdmissionReasonCB.value === null && ReconsiderationReqCB.value === null) && (AppealReason5.value === null && AppealReason6.value === null && AppealReason7.value === null)){
    this.visible = true;
    AdmissionAppealsReasonPanel2.visible = false;
  }else{
    this.visible = false;
    AdmissionAppealsReasonPanel2.visible = true;
  }
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason1.value == "1"){
  AppealReason2.value = "";
  AppealReason3.value = "";
   AppealReason4.value = "";
   AppealReason5.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason2.value == "1"){
  AppealReason1.value = "";
  AppealReason3.value = "";
   AppealReason4.value = "";
   AppealReason5.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason3.value == "1"){
  AppealReason1.value = "";
  AppealReason2.value = "";
   AppealReason4.value = "";
   AppealReason5.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason4.value == "1"){
  AppealReason1.value = "";
  AppealReason2.value = "";
   AppealReason3.value = "";
   AppealReason5.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ReconsiderationReqCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ReconsiderationReqCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == 1){
    OtherAdmissionReasonCB.value = "";
    OtherAdmissionReason.value = "";
     AppealReason5.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
  }
}


        }
	}
}
/**
 * @function appeals_form_appeals.generated_OtherAdmissionReasonCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_OtherAdmissionReasonCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == 1){
    ReconsiderationReqCB.value = "";
    OtherAdmissionReason.mandatory = true;
    OtherAdmissionReason.visible = true;
     AppealReason5.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
  }else{
    OtherAdmissionReason.mandatory = false;
    OtherAdmissionReason.visible = false;
    OtherAdmissionReason.value = "";
  }
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_OtherAdmissionReason_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_OtherAdmissionReason_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(this.value !== null){
    this.visible = true;
  }else{
    this.visible = false;
  }
}

        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason5.value == "1"){
  AppealReason1.value = "";
  AppealReason2.value = "";
   AppealReason3.value = "";
   AppealReason4.value = "";
   AppealReason6.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
  OtherAdmissionReason.value = "";
  OtherAdmissionReasonCB.value = "";
  ReconsiderationReqCB.value = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason6.value == "1"){
  AppealReason1.value = "";
  AppealReason2.value = "";
   AppealReason3.value = "";
   AppealReason4.value = "";
   AppealReason5.value = ""; 
   AppealReason7.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
  OtherAdmissionReason.value = "";
  OtherAdmissionReasonCB.value = "";
  ReconsiderationReqCB.value = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason7.value == "1"){
  AppealReason1.value = "";
  AppealReason2.value = "";
   AppealReason3.value = "";
   AppealReason4.value = "";
   AppealReason5.value = ""; 
   AppealReason6.value = "";
   AppealReason8.value = "";
  OtherReason.value  = "";
  OtherAdmissionReason.value = "";
  OtherAdmissionReasonCB.value = "";
  ReconsiderationReqCB.value = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason8_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason8_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(this.value !== null){
    this.visible = true;
    OtherReason.visible = true;
  }else{
    this.visible = false;
    OtherReason.visible = false;
  }
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealReason8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealReason8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(AppealReason8.value == "1"){
  AppealReason1.value = "";
  AppealReason2.value = "";
   AppealReason3.value = "";
   AppealReason4.value = "";
   AppealReason5.value = ""; 
   AppealReason6.value = "";
   AppealReason7.value = "";
   OtherReason.mandatory  = true;
   OtherReason.visible  = true;
  OtherAdmissionReason.value = "";
  OtherAdmissionReasonCB.value = "";
  ReconsiderationReqCB.value = "";
}else{
  OtherReason.visible  = false;
  OtherReason.mandatory  = false;
  OtherReason.value  = "";
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_OtherReason_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_OtherReason_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(this.value !== null){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
//this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_supportingDocs_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_supportingDocs_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_UnofficialTranscriptDoc_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_UnofficialTranscriptDoc_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = UnofficialTranscriptDoc.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  UnofficialTranscriptDoc.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  UnofficialTranscriptDoc.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function appeals_form_appeals.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function appeals_form_appeals.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc3.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc3.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc3.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_supportDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_supportDoc4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc4.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc4.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc4.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_supportDoc5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_supportDoc5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc5.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc5.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc5.fileAttachment.value = fname;
}
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_CertifyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_CertifyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
 
if(this.value == 1){
  var userValue;
 /* if(ApplicantSignDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
ApplicantSignDate.value = d;
  
   ApplicantSignDate.enabled = false;
}*/

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    ApplicantSignature.value = ApplicantName.value;
                  	ApplicantSignDate.value = myresopnse.SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  
   ApplicantSignature.enabled = false;
  ApplicantSignDate.enabled = false;

}else{
      ApplicantSignature.value = "";
      //EmpSign.mandatory = "error";
      ApplicantSignDate.value = null;
}

}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ApplicantSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ApplicantSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ApplicantSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ApplicantSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ApplicantComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ApplicantComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === "ToAppeals"){
 
if(this.value == 1){
  var userValue;
  /*if(AppealsSignDate.value === null){
  var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
AppealsSignDate.value = d;
  
   AppealsSignDate.enabled = false;
}*/

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    AppealsSign.value = userValue;
                    AppealsSignDate.value = myresopnse.SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  
   AppealsSign.enabled = false;
  AppealsSignDate.enabled = false;

}else{
      AppealsSign.value = "";
      //EmpSign.mandatory = "error";
      AppealsSignDate.value = null;
}

}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealsSignDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealsSignDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null && StageIndicator.value == "ToAppeals"){
var d = "";
const dt = new Date("2021-04-16"); 
 
var now = new Date(new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10));
//test date
//now = new Date("2021-04-17"); 
  
if(now > dt){ 
now.setDate(now.getDate()+14);
now = new Date(now);
var curyear = now.getFullYear();
var curyearMonth = now.getMonth();
var curyearDay = now.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
curyearMonth = monthNames[curyearMonth];
d = (curyearMonth + " " + curyearDay + "," + curyear);
}else{
d = "May 1, 2021";
}
DepositByDate.value = d;
 
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AppealsRecommend_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AppealsRecommend_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  denialPanel.visible = false;
  ApproveAction.visible = true;
  ApproveConditions.visible = true;
  DenyAction.value = "";
  DenyAction.mandatory = "";
  ApproveAction.mandatory = "error";
  DenyAction.visible = false;
  
}
if(this.value == "2"){
  denialPanel.visible = true;
  ApproveAction.visible = false;
  ApproveConditions.visible = false;
    DenyAction.visible = true;
  DenyAction.mandatory = "error";
  ApproveAction.mandatory = "";
  ApproveAction.value = "";
  ApproveConditions.value = "";
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ExtenuationCircumstanceCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ExtenuationCircumstanceCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAppeals"){
  if(this.value == 1){
  ExtenuationCircumstanceTB.value = "Additionally, based upon the supporting documentation provided, it was determined that your 	appeal did not meet the criteria for an extenuating circumstance.";
  }else{
    ExtenuationCircumstanceTB.value = "";
  }
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ApproveAction_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ApproveAction_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_ApproveConditions_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_ApproveConditions_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_denialPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_denialPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DenyAction_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DenyAction_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DenyAction_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DenyAction_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
denialPanel.visible = true;
}
if (this.value == "3") {
    
 AGCoursePanel.visible = true;
  StudentGPA.visible = false;
  StudentGPA.mandatory = "";
  StudentGPA.value = "";
  Units.value = "";
   Units.visible = false;
  Units.mandatory = "";
   PendingUnits.value = "";
  GoldenDeficientIn.visible = false;
  GoldenDeficientIn.value = "";
  GoldenDeficientIn.mandatory = "";
  LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "";
  TotalGPA.mandatory = "";
  StudentGPA_1.value = "";
  TotalGPA.value = "";
  LowGPAWithADTCB.value = "";
  LocalAdmissionGPA.value = "";
  OutLocaladmissionGPA.value = "";
  IncompleteAppealReasonCB.visible = false;
   IncompleteAppealReasonCB.value = "";
}else if(this.value == "4"){
   AGCoursePanel.visible = false;
  DeficientAGCourseCB1.value = "";
DeficientAGCourseCB2.value = "";
DeficientAGCourseCB3.value = "";
DeficientAGCourseCB4.value = "";
DeficientAGCourseCB5.value = "";
DeficientAGCourseCB6.value = "";
DeficientAGCourseCB7.value = "";
DeficientAGCourseSem1.value = "";
DeficientAGCourseSem2.value = "";
DeficientAGCourseSem3.value = "";
DeficientAGCourseSem4.value = "";
DeficientAGCourseSem5.value = "";
DeficientAGCourseSem6.value = "";
DeficientAGCourseSem7.value = "";
    
  StudentGPA.visible = true;
  StudentGPA.mandatory = "error";
   Units.value = "";
   Units.visible = false;
  Units.mandatory = "";
   PendingUnits.value = "";
  GoldenDeficientIn.visible = false;
  GoldenDeficientIn.value = "";
  GoldenDeficientIn.mandatory = "";
  LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "";
  TotalGPA.mandatory = "";
  StudentGPA_1.value = "";
  TotalGPA.value = "";
   LowGPAWithADTCB.value = "";
  LocalAdmissionGPA.value = "";
  OutLocaladmissionGPA.value = "";
  IncompleteAppealReasonCB.visible = false;
   IncompleteAppealReasonCB.value = "";
}
else if(this.value == "5"){
   AGCoursePanel.visible = false;
  DeficientAGCourseCB1.value = "";
DeficientAGCourseCB2.value = "";
DeficientAGCourseCB3.value = "";
DeficientAGCourseCB4.value = "";
DeficientAGCourseCB5.value = "";
DeficientAGCourseCB6.value = "";
DeficientAGCourseCB7.value = "";
DeficientAGCourseSem1.value = "";
DeficientAGCourseSem2.value = "";
DeficientAGCourseSem3.value = "";
DeficientAGCourseSem4.value = "";
DeficientAGCourseSem5.value = "";
DeficientAGCourseSem6.value = "";
DeficientAGCourseSem7.value = "";
  StudentGPA.visible = false;
  StudentGPA.mandatory = "";
  StudentGPA.value = "";
   Units.visible = true;
  Units.mandatory = "error";
 GoldenDeficientIn.visible = false;
  GoldenDeficientIn.value = "";
  GoldenDeficientIn.mandatory = "";
  LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "";
  TotalGPA.mandatory = "";
  StudentGPA_1.value = "";
  TotalGPA.value = "";
   LowGPAWithADTCB.value = "";
  LocalAdmissionGPA.value = "";
  OutLocaladmissionGPA.value = "";
  IncompleteAppealReasonCB.visible = false;
   IncompleteAppealReasonCB.value = "";
}
else if(this.value == "6"){
   AGCoursePanel.visible = false;
 DeficientAGCourseCB1.value = "";
DeficientAGCourseCB2.value = "";
DeficientAGCourseCB3.value = "";
DeficientAGCourseCB4.value = "";
DeficientAGCourseCB5.value = "";
DeficientAGCourseCB6.value = "";
DeficientAGCourseCB7.value = "";
DeficientAGCourseSem1.value = "";
DeficientAGCourseSem2.value = "";
DeficientAGCourseSem3.value = "";
DeficientAGCourseSem4.value = "";
DeficientAGCourseSem5.value = "";
DeficientAGCourseSem6.value = "";
DeficientAGCourseSem7.value = "";
  StudentGPA.visible = false;
  StudentGPA.mandatory = "";
  StudentGPA.value = "";
   Units.value = "";
   Units.visible = false;
  Units.mandatory = "";
  PendingUnits.value = "";
 GoldenDeficientIn.visible = true;
  GoldenDeficientIn.mandatory = "error";
  LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "";
  TotalGPA.mandatory = "";
  StudentGPA_1.value = "";
  TotalGPA.value = "";
   LowGPAWithADTCB.value = "";
  LocalAdmissionGPA.value = "";
  OutLocaladmissionGPA.value = "";
  IncompleteAppealReasonCB.visible = false;
   IncompleteAppealReasonCB.value = "";
}
else if(this.value == "7"){
  AGCoursePanel.visible = false;
  DeficientAGCourseCB1.value = "";
DeficientAGCourseCB2.value = "";
DeficientAGCourseCB3.value = "";
DeficientAGCourseCB4.value = "";
DeficientAGCourseCB5.value = "";
DeficientAGCourseCB6.value = "";
DeficientAGCourseCB7.value = "";
DeficientAGCourseSem1.value = "";
DeficientAGCourseSem2.value = "";
DeficientAGCourseSem3.value = "";
DeficientAGCourseSem4.value = "";
DeficientAGCourseSem5.value = "";
DeficientAGCourseSem6.value = "";
DeficientAGCourseSem7.value = "";
  StudentGPA.visible = false;
  StudentGPA.mandatory = "";
  StudentGPA.value = "";
   Units.value = "";
   Units.visible = false;
  Units.mandatory = "";
  PendingUnits.value = "";
 GoldenDeficientIn.visible = false;
  GoldenDeficientIn.mandatory = "";
   GoldenDeficientIn.value = "";
  LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "error";
  TotalGPA.mandatory = "error";
  IncompleteAppealReasonCB.visible = false;
   IncompleteAppealReasonCB.value = "";
}
else if(this.value == "8"){
  debugger;
   AGCoursePanel.visible = false;
 DeficientAGCourseCB1.value = "";
DeficientAGCourseCB2.value = "";
DeficientAGCourseCB3.value = "";
DeficientAGCourseCB4.value = "";
DeficientAGCourseCB5.value = "";
DeficientAGCourseCB6.value = "";
DeficientAGCourseCB7.value = "";
DeficientAGCourseSem1.value = "";
DeficientAGCourseSem2.value = "";
DeficientAGCourseSem3.value = "";
DeficientAGCourseSem4.value = "";
DeficientAGCourseSem5.value = "";
DeficientAGCourseSem6.value = "";
DeficientAGCourseSem7.value = "";
  StudentGPA.visible = false;
  StudentGPA.mandatory = "";
  StudentGPA.value = "";
   Units.value = "";
   Units.visible = false;
  Units.mandatory = "";
  PendingUnits.value = "";
   GoldenDeficientIn.visible = false;
  GoldenDeficientIn.value = "";
  GoldenDeficientIn.mandatory = "";
   LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "";
  TotalGPA.mandatory = "";
  StudentGPA_1.value = "";
  TotalGPA.value = "";
   LowGPAWithADTCB.value = "";
  LocalAdmissionGPA.value = "";
  OutLocaladmissionGPA.value = "";
  IncompleteAppealReasonCB.visible = true;
}
else{
   AGCoursePanel.visible = false;
 DeficientAGCourseCB1.value = "";
DeficientAGCourseCB2.value = "";
DeficientAGCourseCB3.value = "";
DeficientAGCourseCB4.value = "";
DeficientAGCourseCB5.value = "";
DeficientAGCourseCB6.value = "";
DeficientAGCourseCB7.value = "";
DeficientAGCourseSem1.value = "";
DeficientAGCourseSem2.value = "";
DeficientAGCourseSem3.value = "";
DeficientAGCourseSem4.value = "";
DeficientAGCourseSem5.value = "";
DeficientAGCourseSem6.value = "";
DeficientAGCourseSem7.value = "";
  StudentGPA.visible = false;
  StudentGPA.mandatory = "";
  StudentGPA.value = "";
   Units.value = "";
   Units.visible = false;
  Units.mandatory = "";
  PendingUnits.value = "";
   GoldenDeficientIn.visible = false;
  GoldenDeficientIn.value = "";
  GoldenDeficientIn.mandatory = "";
   LowGPAPanel.visible = false;
  StudentGPA_1.mandatory = "";
  TotalGPA.mandatory = "";
  StudentGPA_1.value = "";
  TotalGPA.value = "";
   LowGPAWithADTCB.value = "";
  LocalAdmissionGPA.value = "";
  OutLocaladmissionGPA.value = "";
  IncompleteAppealReasonCB.visible = false;
   IncompleteAppealReasonCB.value = "";
}

        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourse_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourse_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
var res = this.value;
  DeficientAGCourseList.value = "";
  if(res.lastIndexOf("1") != "-1"){
      DeficientAGCourseList.value = "History-2 years";
     }
  if(res.lastIndexOf("2") != "-1"){
     if(DeficientAGCourseList.value === null){
       DeficientAGCourseList.value = "English-4 years";
     }else{
      DeficientAGCourseList.value = DeficientAGCourseList.value + " , " + "English-4 years";
     }
     }
   if(res.lastIndexOf("3") != "-1"){
     if(DeficientAGCourseList.value === null){
       DeficientAGCourseList.value = "Mathematics-3 years";
     }else{
      DeficientAGCourseList.value = DeficientAGCourseList.value + " , " + "Mathematics-3 years";
     }
   }
  if(res.lastIndexOf("4") != "-1"){
    if(DeficientAGCourseList.value === null){
       DeficientAGCourseList.value = "Science-2 years";
     }else{
      DeficientAGCourseList.value = DeficientAGCourseList.value + " , " + "Science-2 years";
     }
  }
  if(res.lastIndexOf("5") != "-1"){
    if(DeficientAGCourseList.value === null){
       DeficientAGCourseList.value = "Foreign Language-2 years";
     }else{
      DeficientAGCourseList.value = DeficientAGCourseList.value + " , " + "Foreign Language-2 years";
     }
  }
  if(res.lastIndexOf("6") != "-1"){
    if(DeficientAGCourseList.value === null){
       DeficientAGCourseList.value = "Visual/Performing Art-1 year";
     }else{
      DeficientAGCourseList.value = DeficientAGCourseList.value + " , " + "Visual/Performing Art-1 year";
     }
  }
  if(res.lastIndexOf("7") != "-1"){
    if(DeficientAGCourseList.value === null){
       DeficientAGCourseList.value = "College Preparatory Elective-1 year";
     }else{
      DeficientAGCourseList.value = DeficientAGCourseList.value + " , " + "College Preparatory Elective-1 year";
     }
  }
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_StudentGPA_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_StudentGPA_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_Units_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_Units_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_Units_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_Units_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
PendingUnits.value = 60-(this.value);
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_GoldenDeficientIn_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_GoldenDeficientIn_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_GoldenDeficientIn_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_GoldenDeficientIn_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
var res = this.value;
  GoldenDeficientInList.value = "";
  if(res.lastIndexOf("1") != "-1"){
      GoldenDeficientInList.value = "A1) Oral Communication";
     }
  if(res.lastIndexOf("2") != "-1"){
     if(GoldenDeficientInList.value === null){
       GoldenDeficientInList.value = "A2) English Composition";
     }else{
      GoldenDeficientInList.value = GoldenDeficientInList.value + " , " + "A2) English Composition";
     }
     }
   if(res.lastIndexOf("3") != "-1"){
     if(GoldenDeficientInList.value === null){
       GoldenDeficientInList.value = "A3) Critical Thinking";
     }else{
      GoldenDeficientInList.value = GoldenDeficientInList.value + " , " + "A3) Critical Thinking";
     }
   }
  if(res.lastIndexOf("4") != "-1"){
    if(GoldenDeficientInList.value === null){
       GoldenDeficientInList.value = "B4) Mathematics/Quantitative Reasoning";
     }else{
      GoldenDeficientInList.value = GoldenDeficientInList.value + " , " + "B4) Mathematics/Quantitative Reasoning";
     }
  }
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_AGCoursePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_AGCoursePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem1.enabled = false;
  DeficientAGCourseSem1.value = "";
  DeficientAGCourseSem1.mandatory = "";
}else{
  DeficientAGCourseSem1.mandatory = "error";
   DeficientAGCourseSem1.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem2.value = "";
  DeficientAGCourseSem2.mandatory = "";
   DeficientAGCourseSem2.enabled = false;
}else{
  DeficientAGCourseSem2.mandatory = "error";
   DeficientAGCourseSem2.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem3.value = "";
  DeficientAGCourseSem3.mandatory = "";
   DeficientAGCourseSem3.enabled = false;
}else{
  DeficientAGCourseSem3.mandatory = "error";
  DeficientAGCourseSem3.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem4.value = "";
  DeficientAGCourseSem4.mandatory = "";
   DeficientAGCourseSem4.enabled = false;
}else{
  DeficientAGCourseSem4.mandatory = "error";
   DeficientAGCourseSem4.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem5.value = "";
  DeficientAGCourseSem5.mandatory = "";
   DeficientAGCourseSem5.enabled = false;
}else{
  DeficientAGCourseSem5.mandatory = "error";
   DeficientAGCourseSem5.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem6.value = "";
  DeficientAGCourseSem6.mandatory = "";
   DeficientAGCourseSem6.enabled = false;
}else{
  DeficientAGCourseSem6.mandatory = "error";
   DeficientAGCourseSem6.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem6_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem6_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseCB7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseCB7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value != "1"){
  DeficientAGCourseSem7.value = "";
  DeficientAGCourseSem7.mandatory = "";
   DeficientAGCourseSem7.enabled = false;
}else{
  DeficientAGCourseSem7.mandatory = "error";
   DeficientAGCourseSem7.enabled = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseSem7_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_DeficientAGCourseSem7_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_LowGPAPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_LowGPAPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_LowGPAWithADTCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_LowGPAWithADTCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  LocalAdmissionGPA.visible = true;
  OutLocaladmissionGPA.visible = false;
  LocalAdmissionGPA.mandatory = "error";
  OutLocaladmissionGPA.mandatory = "";
  OutLocaladmissionGPA.value = "";
  
}
if(this.value == "2"){
  OutLocaladmissionGPA.mandatory = "error";
  LocalAdmissionGPA.mandatory = "";
  LocalAdmissionGPA.value = "";
  LocalAdmissionGPA.visible = false;
  OutLocaladmissionGPA.visible = true;
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_LocalAdmissionGPA_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_LocalAdmissionGPA_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_OutLocaladmissionGPA_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_OutLocaladmissionGPA_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_IncompleteAppealReasonCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_IncompleteAppealReasonCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_IncompleteAppealReasonCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_IncompleteAppealReasonCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
var res = this.value;
  IncompleteAppealReason.value = "";
  if(res.lastIndexOf("1") != "-1"){
      IncompleteAppealReason.value = "Appeal statement";
     }
  if(res.lastIndexOf("2") != "-1"){
     if(IncompleteAppealReason.value === null){
       IncompleteAppealReason.value = "Transcript(s) from all institutions attended";
     }else{
      IncompleteAppealReason.value = IncompleteAppealReason.value + " , " + "Transcript(s) from all institutions attended";
     }
     }
   if(res.lastIndexOf("3") != "-1"){
     if(IncompleteAppealReason.value === null){
       IncompleteAppealReason.value = "Test scores";
     }else{
      IncompleteAppealReason.value = IncompleteAppealReason.value + " , " + "Test scores";
     }
   } 
}
        }
	}
}
/**
 * @function appeals_form_appeals.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function appeals_form_appeals.generated_button_6708717581632745254607_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_button_6708717581632745254607_click0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus(null,'prevItemDeep',true);

        }
	}
}
/**
 * @function appeals_form_appeals.generated_button1632744998705_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_button1632744998705_click0 = function (scope) {
    with(this) {
        with(scope) {
            
guideBridge.setFocus(null,'nextItemDeep',true);

        }
	}
}
/**
 * @function appeals_form_appeals.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
appeals_form_appeals.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(ApplicantName.value !== null && CWID.value !== null){
  aftiaDescCWID.value = ApplicantName.value +" " + CWID.value;
  EmailRef.value = ApplicantName.value +" - " + CWID.value;
  EmailSubject.value = "Appeals "+ApplicantName.value +" - " + CWID.value;
}
if(ReconsiderationReqCB.value === null && OtherAdmissionReasonCB.value === null && AppealReason5.value === null && AppealReason6.value === null && AppealReason7.value === null && AppealReason8.value === null){
  showErrorModal("Alert!","Please provide your reason(s) for appeal");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].AppealPanels[0].reasonForAppeal[0]");
}
else
  {
    if(PersonalStudentEmail.value === null){
   PersonalStudentEmail.value = CSUStudentEmail.value;
 }
    


/*CSUStudentEmail.value = "cageorge@FULLERTON.EDU";
PersonalStudentEmail.value = "cageorge@FULLERTON.EDU";*/

CSUStudentEmail.value = "anupama.dhar@thoughtfocus.com";
PersonalStudentEmail.value = "anupama.dhar@thoughtfocus.com";

 
guideBridge.submit();
  }


        }
	}
}
