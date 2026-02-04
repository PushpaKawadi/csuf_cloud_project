/**
 * @function cal_grant_transfer_entitlement_verification_cal_grant_transfer_entitlement_verification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_grant_transfer_entitlement_verification_cal_grant_transfer_entitlement_verification.generated_guideRootPanel_init0 = function (scope) {
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
 * @function cal_grant_transfer_entitlement_verification_cal_grant_transfer_entitlement_verification.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_grant_transfer_entitlement_verification_cal_grant_transfer_entitlement_verification.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value===null){
 Instructions.enabled=true;
 BasicInformation.enabled=true;
 SupportingDocumentsPanel.enabled=true;
 FinancialAidPanel.visible=false;
  
 StudentSignaturePanel.enabled=true;
 
 }
   if(StageIndicator.value==="ToFinancialAid"){
     
     BasicInformation.visible=true;
     BasicInformation.enabled=false;
     SupportingDocumentsPanel.visible=false;
     SupportingDocumentsPanel.enabled=false;
     
     StudentSignaturePanel.visible=true;
     StudentSignaturePanel.enabled=false;
     FinancialAidPanel.enabled=true;
     FinancialAidPanel.visible=true;
    
   }
 
        }
	}
}
/**
 * @function cal_grant_transfer_entitlement_verification_cal_grant_transfer_entitlement_verification.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_grant_transfer_entitlement_verification_cal_grant_transfer_entitlement_verification.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StudentName.value === null){
	alert('Enter Student Name');
}else{
if (StudentName.value.length > 16) {
    alert('Student Name be less than ' + 16 + ' characters');
 }
  else{
    alert('Details Submitted');
  }
}
guideBridge.submit();
        }
	}
}
