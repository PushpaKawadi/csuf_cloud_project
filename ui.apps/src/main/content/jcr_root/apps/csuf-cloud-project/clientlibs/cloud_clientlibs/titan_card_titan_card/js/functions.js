/**
 * @function titan_card_titan_card.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    TitanCardStaffSignaturePanel.visible = false;
    ITTitanCardStaffSignaturePanel.visible = false;
    ITAVPStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanelTwo.visible = false;
    CheckRequestPanel.visible = false;
}

if (StageIndicator.value == "ToTitanCardStaff") {
    StudentSignaturePanel.enabled = false;
    ITTitanCardStaffSignaturePanel.visible = false;
    ITAVPStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanelTwo.visible = false;
    ReimburseCloseTitanTenderPanel.enabled = false;
    ASCUseOnlyPanel.enabled = false;
}

if (StageIndicator.value == "ToITTitanCardStaff") {
    StudentSignaturePanel.enabled = false;
    TitanCardStaffSignaturePanel.enabled = false;
    ITAVPStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanelTwo.visible = false;
    ReimburseCloseTitanTenderPanel.enabled = false;
    ASCUseOnlyPanel.enabled = false;
}

if (StageIndicator.value == "ToITAVPStaff") {
    StudentSignaturePanel.enabled = false;
    TitanCardStaffSignaturePanel.enabled = false;
    ITTitanCardStaffSignaturePanel.enabled = false;
    ASCStaffSignaturePanel.visible = false;
    ASCStaffSignaturePanelTwo.visible = false;
    ReimburseCloseTitanTenderPanel.enabled = false;
    ASCUseOnlyPanel.enabled = false;
}

if (StageIndicator.value == "ToASCStaff") {
    StudentSignaturePanel.enabled = false;
    TitanCardStaffSignaturePanel.enabled = false;
    ITTitanCardStaffSignaturePanel.enabled = false;
    ITAVPStaffSignaturePanel.enabled = false;
    ASCStaffSignaturePanelTwo.visible = false;
    ReimburseCloseTitanTenderPanel.enabled = false;
}

if (StageIndicator.value == "ToASCStaffTwo") {
    StudentSignaturePanel.enabled = false;
    TitanCardStaffSignaturePanel.enabled = false;
    ITTitanCardStaffSignaturePanel.enabled = false;
    ITAVPStaffSignaturePanel.enabled = false;
    ASCStaffSignaturePanel.enabled = false;
    ReimburseCloseTitanTenderPanel.enabled = false;
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
           // userValue = "veronica.maciel";
            workflow_initiator.value = userValue;
            getStudentDetails(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getStudentDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTitanCardData",
        data: {
            action: "STUDENT_DETAILS",
            userID: userValue
        },
        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {
                var studentCWID = response[0].EMPLID;
                var firstName = response[0].FIRST_NAME;
                var lastName = response[0].LAST_NAME;
                LastName.value = lastName;
                FirstName.value = firstName;
               // CRRequestedByName.value = firstName + " " + lastName;
                Cwid.value = studentCWID;
                Street.value = response[0].ADDRESS1;
                City.value = response[0].CITY;
                State.value = response[0].STATE;
                ZipCode.value = response[0].POSTAL;
                PhoneNumber.value = response[0].CELL_PHONE;
             //   Email.value = response[0].PREF_EMAIL;
                Email.value = "chaitanya.sai@thoughtfocus.com";
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
 * @function titan_card_titan_card.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            caseId.value = myresponse.CASEID;
        }
    });
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_ReasonWithdrawingCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_ReasonWithdrawingCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  ReasonGraduatingCB.value="";
ReasonLeavingEmploymentCB.value="";
ReasonOtherCB.value="";
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_ReasonGraduatingCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_ReasonGraduatingCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
ReasonWithdrawingCB.value="";
ReasonLeavingEmploymentCB.value="";
ReasonOtherCB.value="";
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_ReasonLeavingEmploymentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_ReasonLeavingEmploymentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
ReasonWithdrawingCB.value="";
ReasonGraduatingCB.value="";
ReasonOtherCB.value="";
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_ReasonOtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_ReasonOtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
    ReasonOther.enabled = true;
    ReasonOther.mandatory = true;
  }else{
    ReasonOther.value = "";
    ReasonOther.enabled = false;
    ReasonOther.mandatory = false;
  }
  if(this.value == "1"){
ReasonWithdrawingCB.value="";
ReasonGraduatingCB.value="";
ReasonLeavingEmploymentCB.value="";
}
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_ReasonOther_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_ReasonOther_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CurrentFundsOnAccount_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CurrentFundsOnAccount_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
debugger;
var currentFund = this.value;
var calculatedValue = currentFund*0.06;
var finalCheckTotalVal;
if(calculatedValue>5){
  AdministartiveFee.value = calculatedValue.toFixed(2);
  finalCheckTotalVal = parseFloat(currentFund)-parseFloat(calculatedValue);
  FinalCheckTotal.value = finalCheckTotalVal.toFixed(2);
}
if(calculatedValue<5){
  AdministartiveFee.value = (5).toFixed(2);
  finalCheckTotalVal = parseFloat(currentFund)-5;
  FinalCheckTotal.value = finalCheckTotalVal.toFixed(2);
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CheckRequestPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CheckRequestPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToTitanCardStaff"){
  CRRequestedByName.value = "Sahar Nia"; 
  CRRequestedByDeptRoomNo.value = "TitanCard/PLS 150"; 
  CRRequestedByPhone.value = "x4850";
  CRRequestedByDate.value = InitiatedDate.value;
  CRVendorPayee.value = FirstName.value+" "+LastName.value;
  CRVendorPayeeStreet.value = Street.value;
  CRVendorPayeeCity.value = City.value;
  CRVendorPayeeState.value = State.value;
  CRVendorPayeeZip.value = ZipCode.value;
}

Row1.instanceManager.instances[0].CRTableDescription.value = "Closed Acct"; 
Row1.instanceManager.instances[1].CRTableDescription.value = "Less: Greater of (6% of Total or $5)"; 
Row1.instanceManager.instances[0].CRTableProject.value = "9927"; 
Row1.instanceManager.instances[1].CRTableProject.value = "9927"; 
Row1.instanceManager.instances[0].CRTableObjectCode.value = "2025"; 
Row1.instanceManager.instances[1].CRTableObjectCode.value = "6420"; 
Row1.instanceManager.instances[0].CRTableAmount.value = CurrentFundsOnAccount.value; 
Row1.instanceManager.instances[1].CRTableAmount.value = -AdministartiveFee.value;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRRequestforServiceRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRRequestforServiceRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CRRequestForServiceDropdown.enabled = true;
  CRRequestForServiceDropdown.mandatory = true;
}else{
  CRRequestForServiceDropdown.enabled = false;
  CRRequestForServiceDropdown.mandatory = false;
  CRRequestForServiceDropdown.value = "";
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRRequestForServiceDropdown_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRRequestForServiceDropdown_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRMailToDepartmentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRMailToDepartmentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CRMailToDepartmentTF.enabled = true;
}else{
  CRMailToDepartmentTF.value = "";
  CRMailToDepartmentTF.enabled = false;
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRMailToDepartmentTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRMailToDepartmentTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(CRMailToDepartmentCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRHoldforPickupCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRHoldforPickupCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CRHoldforPickupTF.enabled = true;
}else{
  CRHoldforPickupTF.value = "";
  CRHoldforPickupTF.enabled = false;
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRHoldforPickupTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRHoldforPickupTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(CRHoldforPickupCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled = false;
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRRushCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRRushCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CRRushDateNeeded.enabled = true;
  CRRushDateNeeded.mandatory = true;
}else{
  CRRushDateNeeded.value = "";
  CRRushDateNeeded.enabled = false;
  CRRushDateNeeded.mandatory = false;
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRRushDateNeeded_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRRushDateNeeded_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(CRRushCB.value == "1"){
  this.enabled = true;
}else{
  this.enabled=false;
}

        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRTableAmount_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRTableAmount_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowCount = Row1.instanceManager.instanceCount;
var count = 0.00;
for(var i=0; i<rowCount; i++){
  if(Row1.instanceManager.instances[i].CRTableAmount.value !== null){
    var val = Row1.instanceManager.instances[i].CRTableAmount.value;
    count = count +  parseFloat(val);
  }
}
CRTableTotalAmount.value = count;

        }
	}
}
/**
 * @function titan_card_titan_card.generated_StudentSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_StudentSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                Signature.value = FirstName.value + " " + LastName.value;
                SignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        Signature.enabled = false;
        SignDate.enabled = false;
    } else {
        Signature.value = "";
        SignDate.value = "";
    }
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_Signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_Signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_SignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_SignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_TitanCardStaffSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_TitanCardStaffSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToTitanCardStaff") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                TitanCardStaffAuthorization.value = userValue;
                TitanCardStaffAuthoriztionDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        TitanCardStaffAuthorization.enabled = false;
        TitanCardStaffAuthoriztionDate.enabled = false;
    } else {
        TitanCardStaffAuthorization.value = "";
        TitanCardStaffAuthoriztionDate.value = "";
    }
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_TitanCardStaffAuthorization_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_TitanCardStaffAuthorization_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_TitanCardStaffAuthoriztionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_TitanCardStaffAuthoriztionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_ItTitanCardStaffSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_ItTitanCardStaffSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToITTitanCardStaff") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                CRAuthorizedNameOne.value = userValue;
                CRAuthorizedSignatureOne.value = userValue;
                CRAuthorizedSignDateOne.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        CRAuthorizedNameOne.enabled = false;
        CRAuthorizedSignatureOne.enabled = false;
        CRAuthorizedSignDateOne.enabled = false;
    } else {
        CRAuthorizedNameOne.value = "";
        CRAuthorizedSignatureOne.value = "";
        CRAuthorizedSignDateOne.enabled = "";
    }
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRAuthorizedNameOne_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRAuthorizedNameOne_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRAuthorizedSignatureOne_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRAuthorizedSignatureOne_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRAuthorizedSignDateOne_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRAuthorizedSignDateOne_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_checkbox1666253768280_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_checkbox1666253768280_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToITAVPStaff") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                CRAuthorizedNameTwo.value = userValue;
                CRAuthorizedSignatureTwo.value = userValue;
                CRAuthorizedSignDateTwo.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        CRAuthorizedNameTwo.enabled = false;
        CRAuthorizedSignatureTwo.enabled = false;
        CRAuthorizedSignDateTwo.enabled = false;
    } else {
        CRAuthorizedNameTwo.value = "";
        CRAuthorizedSignatureTwo.value = "";
        CRAuthorizedSignDateTwo.enabled = "";
    }
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRAuthorizedNameTwo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRAuthorizedNameTwo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRAuthorizedSignatureTwo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRAuthorizedSignatureTwo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRAuthorizedSignDateTwo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRAuthorizedSignDateTwo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_checkbox1666257180468_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_checkbox1666257180468_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToASCStaff") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                CRApprovedBy.value = userValue;
                CRApprovedByDate.value = myresponse.SERVER_DATE;
                if (CRASCAuditedBy.value === null) {
                    CRASCAuditedBy.value = userValue;
                }
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        CRApprovedBy.enabled = false;
        CRApprovedByDate.enabled = false;
    } else {
        CRApprovedBy.value = "";
        CRApprovedByDate.value = "";
    }
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRApprovedBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRApprovedBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRApprovedByDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRApprovedByDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_checkbox1670303048387_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_checkbox1670303048387_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToASCStaffTwo") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                CRApprovedBy2.value = userValue;
                CRApprovedByDate2.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        CRApprovedBy2.enabled = false;
        CRApprovedByDate2.enabled = false;
    } else {
        CRApprovedBy2.value = "";
        CRApprovedByDate2.value = "";
    }
}
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRApprovedBy2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRApprovedBy2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled= false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_CRApprovedByDate2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_CRApprovedByDate2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function titan_card_titan_card.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
	  
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
 this.value = d;
 
}

        }
	}
}
/**
 * @function titan_card_titan_card.generated_GeneratePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_GeneratePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
    getPdf();
function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/titan-card/titan-card');
            jsonData.append('fileName', FirstName.value+" "+LastName.value);          
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
 * @function titan_card_titan_card.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
titan_card_titan_card.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = FirstName.value+" "+LastName.value+" "+Cwid.value;
  EmailSubject.value = "Test - TitanCard Closed Account Form - "+Cwid.value;
}
var email = "chaitanya.sai@thoughtfocus.com";
Email.value = email;
if((ReasonWithdrawingCB.value === null) && (ReasonGraduatingCB.value === null) && (ReasonLeavingEmploymentCB.value === null) && (ReasonOtherCB.value === null)){
  showErrorModal("Alert!", "Please select reason for closing account");
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].ParentPanel[0].ReimburseCloseTitanTenderPanel[0].ReasonWithdrawingCB[0]");
} else{
  guideBridge.submit();
}
  



        }
	}
}
