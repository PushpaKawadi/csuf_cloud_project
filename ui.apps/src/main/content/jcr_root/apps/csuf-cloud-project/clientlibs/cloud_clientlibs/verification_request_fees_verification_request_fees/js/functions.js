/**
 * @function verification_request_fees_verification_request_fees.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    FinancialAidSignaturePanel.visible = false;
    disabledCutCopyPasteFunctionality();
}

if (StageIndicator.value == "ToFinancialAid") {
    StudentInformation.enabled = false;
    InstructionsPanel.enabled = false;
    ActionToCompletePanel.enabled = false;
    StudentSignaturePanel.enabled = false;
    FinancialAidSignaturePanel.visible = true;
    FinancialAidSignaturePanel.enabled = true;
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_guideRootPanel_init1 = function (scope) {
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
               getStudentDetails(userValue);
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
         
             	    CWID_SSN.value = response[0].EMPLID;
                    FirstName.value = response[0].FIRST_NAME;
                    LastName.value = response[0].LAST_NAME;
                    MiddleName.value = response[0].MIDDLE_NAME;
                    StudentUserId.value = response[0].USERID;
                    //Cwid.value = cWID;
                   StreetAddress.value = response[0].ADDRESS1;
                  AptUnit.value = response[0].ADDRESS2;
                    City.value = response[0].CITY;
                   State.value = response[0].STATE;
                    ZipCode.value = response[0].POSTAL;
                    PhoneNo.value = response[0].HOME_PHONE;
                  Email.value = "soumya.ravindra@thoughtfocus.com";
                  // Email.value = "yjayaram@fullerton.edu";
                    // Email.value = response[0].PREF_EMAIL;
              
              
             HiddenPanel.StudentFullName.value = FirstName.value+" "+LastName.value; 
            
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
 * @function verification_request_fees_verification_request_fees.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

 

type: 'GET',

 

url:"/bin/getCaseID",

         

dataType: 'json',

         

success: function(myresponse){              

                 

                   caseId.value = myresponse.CASEID;

                                      

},

});
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_CWID_SSN_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_CWID_SSN_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_Email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_Email_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_StreetAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_StreetAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_City_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_City_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_State_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_State_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_ZipCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_ZipCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_PhoneNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_PhoneNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DOB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DOB_init0 = function (scope) {
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
 * @function verification_request_fees_verification_request_fees.generated_S2506CB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_S2506CB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  PreRegTFO.enabled = true;
}else{
  PreRegTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_PreRegTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_PreRegTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_PreRegTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_PreRegTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var action = this.value;
var sum;
sum = action * 10;
PreRegTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_PreRegTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_PreRegTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_PreRegTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_PreRegTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_S2506CB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_S2506CB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  EnrollmemtTFO.enabled = true;
}else{
  EnrollmemtTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_EnrollmemtTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_EnrollmemtTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_EnrollmemtTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_EnrollmemtTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
EnrollmentTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_EnrollmentTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_EnrollmentTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_EnrollmentTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_EnrollmentTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_S2504CB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_S2504CB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DegreeVerTFO.enabled = true;
}else{
  DegreeVerTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DegreeVerTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DegreeVerTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DegreeVerTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DegreeVerTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
DegreeVerTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DegreeVerTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DegreeVerTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DegreeVerTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DegreeVerTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_S2506CB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_S2506CB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  GoodStudentTFO.enabled = true;
}else{
  GoodStudentTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_GoodStudentTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_GoodStudentTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_GoodStudentTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_GoodStudentTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
GoodStudentTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_GoodStudentTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_GoodStudentTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_GoodStudentTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_GoodStudentTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DesignatedCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DesignatedCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DesignatedTFO.enabled = true;
}else{
  DesignatedTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DesignatedTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DesignatedTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DesignatedTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DesignatedTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
DesignatedTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DesignatedTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DesignatedTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_DesignatedTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_DesignatedTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_TotalHistoryCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_TotalHistoryCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  TotalHisTFO.enabled = true;
}else{
  TotalHisTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_TotalHisTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_TotalHisTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_TotalHisTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_TotalHisTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
TotalHisTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_TotalHisTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_TotalHisTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_TotalHisTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_TotalHisTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_HistoryCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_HistoryCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  HistoryTFO.enabled = true;
}else{
  HistoryTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_HistoryTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_HistoryTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_HistoryTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_HistoryTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var action = this.value;
var sum;
sum = action * 10;
HistoryTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_HistoryTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_HistoryTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_HistoryTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_HistoryTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VOECB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VOECB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  VOETFO.enabled = true;
}else{
  VOETFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VOETFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VOETFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VOETFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VOETFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
VOETFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VOETFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VOETFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VOETFT_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VOETFT_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_MilitoryIDCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_MilitoryIDCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  MilitoryIDTFO.enabled = true;
}else{
  MilitoryIDTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_MilitoryIDTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_MilitoryIDTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_MilitoryIDTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_MilitoryIDTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
MilitoryIDTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_MilitoryIDTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_MilitoryIDTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_MilitoryIDTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_MilitoryIDTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_NeverCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_NeverCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  NeverTFO.enabled = true;
}else{
  NeverTFO.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_NeverTFO_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_NeverTFO_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_NeverTFO_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_NeverTFO_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
NeverTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_NeverTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_NeverTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_NeverTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_NeverTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_OtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_OtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  OtherTF.enabled = true;
}else{
  OtherTF.value = "";
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_OtherTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_OtherTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_OtherTF_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_OtherTF_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var action = this.value;
var sum;
sum = action * 10;
OtherTFT.value = sum;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_OtherTFT_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_OtherTFT_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_OtherTFT_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_OtherTFT_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var preRegTFT = PreRegTFT.value;
    if (preRegTFT !== null) {
        finalTotal = finalTotal + parseFloat(preRegTFT);
    }
    var enrollmentTFT = EnrollmentTFT.value;
    if (enrollmentTFT !== null) {
        finalTotal = finalTotal + parseFloat(enrollmentTFT);
    }
    var degreeVerTFT = DegreeVerTFT.value;
    if (degreeVerTFT !== null) {
        finalTotal = finalTotal + parseFloat(degreeVerTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var designatedTFT = DesignatedTFT.value;
    if (designatedTFT !== null) {
        finalTotal = finalTotal + parseFloat(designatedTFT);
    }
    var totalHisTFT = TotalHisTFT.value;
    if (totalHisTFT !== null) {
        finalTotal = finalTotal + parseFloat(totalHisTFT);
    }
   var historyTFT = HistoryTFT.value;
    if (historyTFT !== null) {
        finalTotal = finalTotal + parseFloat(historyTFT);
    }
    var voeTFT = VOETFT.value;
    if (voeTFT !== null) {
        finalTotal = finalTotal + parseFloat(voeTFT);
    }
    var goodStudentTFT = GoodStudentTFT.value;
    if (goodStudentTFT !== null) {
        finalTotal = finalTotal + parseFloat(goodStudentTFT);
    }
    var militoryIDTFT = MilitoryIDTFT.value;
    if (militoryIDTFT !== null) {
        finalTotal = finalTotal + parseFloat(militoryIDTFT);
    }
    var neverTFT = NeverTFT.value;
    if (neverTFT !== null) {
        finalTotal = finalTotal + parseFloat(neverTFT);
    }
   var otherTFT = OtherTFT.value;
    if (otherTFT !== null) {
        finalTotal = finalTotal + parseFloat(otherTFT);
    }

    TotalAmount.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_TotalAmount_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_TotalAmount_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function verification_request_fees_verification_request_fees.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc1.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc1.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc1.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc1.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc3.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc3.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc3.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_checkbox1649834861348_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
                StudentFullName.value = FirstName.value+ " " +LastName.value;
				//StudentName.value = StudentFullName.value;
				StudentSignatureDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			StudentFullName.enabled = false;       
			StudentSignatureDate.enabled = false; 
				
	} else {
		StudentFullName.value = "";
		StudentSignatureDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_StudentFullName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_StudentFullName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_StudentComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_StudentComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_checkbox1649838422969_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_checkbox1649838422969_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToVerificaationReview" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				VerficationName.value = userValue;
				VerificationSignatureDate.value = myresponse.SERVER_DATE;		
                 //financialAidAssignee.value = myresponse.userId;
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			VerficationName.enabled = false;       
			VerificationSignatureDate.enabled = false; 
				
	} else {
	     VerficationName.value = "";
		VerificationSignatureDate.value = "";
      //financialAidAssignee.value = "";
	}
}


        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VerficationName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VerficationName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_VerificationSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_VerificationSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function verification_request_fees_verification_request_fees.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
getPdf();
/*if (AidYear.value !== null) {
    getPdf();
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }*/

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/verification-request-fees/verification-request-fees');
            jsonData.append('fileName', StudentFullName.value);          
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
 * @function verification_request_fees_verification_request_fees.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
verification_request_fees_verification_request_fees.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(StageIndicator.value === null){
  aftiaDescCWID.value = HiddenPanel.StudentFullName.value+" "+CWID_SSN.value;
  EmailSubject.value = "Test - Verification Request Fees - "+CWID_SSN.value;

}
 Email.value = "soumya.ravindra@thoughtfocus.com";
  guideBridge.submit();

        }
	}
}
