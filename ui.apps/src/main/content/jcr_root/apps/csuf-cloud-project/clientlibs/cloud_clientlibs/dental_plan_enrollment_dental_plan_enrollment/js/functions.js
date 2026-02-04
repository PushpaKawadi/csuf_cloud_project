/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 
 fname.enabled = false;
                         middleName.enabled = false;
                         lname.enabled = false;         
                         address.enabled = false;
                         City.enabled = false;
                         State.enabled = false;
                         zip.enabled = false;
                         
                            
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_typeOfAction1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_typeOfAction1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].nameOfDentalPlan[0]");
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_typeOfAction2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_typeOfAction2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 2){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].priorDentalPlanName[0]");
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_typeOfAction3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_typeOfAction3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 3){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].nameOfDentalPlan[0]");
  	//guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].priorDentalPlanName[0]");
}

        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_socialSecNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_socialSecNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(ResetFlag.value !== "true"){
  if(this.value !== null){
  if((this.value).indexOf("-") == -1){ 
    var numbers = this.value;
    this.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4); 
  }
    debugger;
  
    if(lookupStatus.value !== this.value){
        lookupStatus.value = this.value;
    var EmpSSN=this.value; 
    //alert("The SSN is= "+EmpSSN);
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    $.ajax({

       type: 'GET',

            url: "/bin/dentalPlanSSNLookUp",


          data:  {
                 ssn: EmpSSN
          },

          dataType: 'JSON',

        success: function(myresponse) {
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            if (myresponse.length === 1) {

                fname.value = myresponse[0].FIRST_NAME;
                middleName.value = myresponse[0].MIDDLE_NAME;
                lname.value = myresponse[0].LAST_NAME;            
                address.value = myresponse[0].ADDRESS1;
                City.value = myresponse[0].CITY;
                State.value = myresponse[0].STATE;
                zip.value = myresponse[0].POSTAL;
                jobCode.value = myresponse[0].JobCode;          
                if(myresponse[0].Female == 1)sex.value = 1;
                if(myresponse[0].Male == 1)sex.value = 0;

                if(myresponse[0].Married === 0)marritalStatus.value = 0;
                if(myresponse[0].Single === 1)marritalStatus.value = 1;
                //if(myresponse[0].Married == 1)marritalStatus.value = 2;
                marritalStatus.value = myresponse[0].Single;
                //Zip.value = myresponse[0].DeptName;
                //Zip.value = myresponse[0].JobCode;

              //alert("getting all");

                gifModal.style.display = "none";
                modal.style.display = "none";

            } else if (myresponse.length > 1) {
                gifModal.style.display = "none";
                modal.style.display = "block";

                //populate Hidden Fields

              //  hiddentFirstName.value = myresponse[0].ADDRESS1;
              //  hiddenAddress.value = myresponse[0].CITY;
              //  hiddenCity.value = myresponse[0].STATE;
              //  hiddenPostal.value = myresponse[0].POSTAL;
              //  hiddenSex.value = myresponse[0].Male;
              //  hiddenMaritalStatus.value = myresponse[0].Single;

                var col = [];
                col.push("FIRST_NAME");

                col.push("MIDDLE_NAME");

                col.push("LAST_NAME");

                col.push("DeptName");

                col.push("JobCode"); 

                col.push("ADDRESS1"); 

                col.push("CITY");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "First Name", "Middle Name", "Last Name", "DepartmentName", "Job Code", "Address", "City"];
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

                    button.onclick = function(event) {
                        //alert("xcvbn");
                        //debugger;
                        hiddentFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                        hiddenMiddleName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                        hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                        hiddenDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
                debugger;

                var footerModal = document.getElementById("modal_footer");
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                //okButton.id = "okBtn";
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    /*if (cbidHidden.value === null) {
                        alert("Please select any one of the Staff");
                        modal.style.display = "block";
                    }*/
                    var n;
                    var rButtonStatus;
                    //var rButtonStatusFalse;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                              hiddenAddress.value = myresponse[n].ADDRESS1;
                              hiddenCity.value = myresponse[n].CITY;
                              hiddentState.value = myresponse[n].STATE;
                              hiddenPostal.value = myresponse[n].POSTAL;
                             // hiddenMale = myresponse[0].Male;
                             // hiddenFemale = myresponse[0].Female;
                              //hiddenSex.value = myresponse[n].Male;
                              hiddenMaritalStatus.value = myresponse[n].Single;
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        alert("Please select the department");
                        modal.style.display = "block";
                    } else {
                         fname.value = hiddentFirstName.value;
                         middleName.value = hiddenMiddleName.value;
                         lname.value = hiddenLastName.value;            
                         address.value = hiddenAddress.value;
                         City.value = hiddenCity.value;
                         State.value = hiddentState.value;
                         zip.value = hiddenPostal.value;
                         if(myresponse[0].Female == 1)sex.value = 1;
                         if(myresponse[0].Male == 1)sex.value = 0;
                        // hiddenMale = myresponse[0].Male;
                        // hiddenFemale = myresponse[0].Female;
                        // sex.value = hiddenSex.value;
                         marritalStatus.value = hiddenMaritalStatus.value;                

                        // gifModal.style.display = "none";
                        modal.style.display = "none";
                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);

            } else {
                //alert("No Matching Records Found");   
                          showErrorModal("Alert!","No matching records found");
                          //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formBody[0].benifitPlan[0]");
                         	
              
                         fname.value = null;
                         middleName.value = null;
                         lname.value = null;         
                         address.value = null;
                         City.value = null;
                         State.value = null;
                         zip.value = null;
                         sex.value = null;
                         marritalStatus.value = null;              
                    gifModal.style.display = "none";
            }
            ////////////////////////////////////////////
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
                   showErrorModal("Alert!","Please select the department");
                    modal.style.display = "block";
                } else {

                   showErrorModal("Alert!","Please select the department");
                    modal.style.display = "block";
                }

            };
            // When the user clicks anywhere outside of the modal, close it
          
        }
    }); 
  } } else {
                //alert("No Matching Records Found");   
                          showErrorModal("Alert!","No matching records found");
                          //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formBody[0].benifitPlan[0]");
                         	
              
                         fname.value = null;
                         middleName.value = null;
                         lname.value = null;         
                         address.value = null;
                         City.value = null;
                         State.value = null;
                         zip.value = null;
                         sex.value = null;
                         marritalStatus.value = null;              
                    gifModal.style.display = "none";
            }
 
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_socialSecNo_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_socialSecNo_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(hiddenMale.value == 1){
  alert("M");
}
else{
  alert("F");
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
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
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_aftiaDescCWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_aftiaDescCWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_customTitle_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_customTitle_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_nameOfDentalPlan_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_nameOfDentalPlan_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "Delta Enhanced Level I"){
  dentalOrgCode.value = "181";
}
else if(agencyName2.value == 1 && this.value == "Delta Premier Basic - Annuitants"){
  dentalOrgCode.value = "010";
}
else if(agencyName2.value == 1 && this.value == "Delta Premier Enhanced Level II - FERPS"){
  dentalOrgCode.value = "100";
}
else if(agencyName2.value == 1 && this.value == "DeltaCare - Basic Annuitants"){
  dentalOrgCode.value = "005";
} 
else if(agencyName2.value == 1 && this.value == "DeltaCare - Enhanced FERP Annuitants"){
  dentalOrgCode.value = "006";
}
else if(agencyName1.value == 1 && this.value == "Delta Basic"){
  dentalOrgCode.value = "004";
}
else if(agencyName1.value == 1 && this.value == "Delta Enhanced Level II"){
  dentalOrgCode.value = "007";
} 
else if(agencyName1.value == 1 && this.value == "DeltaCare Basic"){
  dentalOrgCode.value = "012";
} 
else if(agencyName1.value == 1 && this.value == "DeltaCare Enhanced"){
  dentalOrgCode.value = "013";
}







        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row1[0].dob1[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15848246211021584824621641[0].dob2[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735182978721573518298100[0].dob3[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184490411573518449293[0].dob4[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184565061573518456792[0].dob5[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184656241573518466093[0].dob6[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_enrolledPersonName7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735187254391573518725876[0].dob7[0]");
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_checkCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_checkCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {  
    checkCB2.value=null;
  	checkCB3.value=null;           
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_checkCB1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_checkCB1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value === null) && (checkCB2.value === null) && (checkCB3.value === null)){
 	empSignature.value = "";
    empSignedDate.value = "";
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_checkCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_checkCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) { 
     checkCB1.value=null;
 	 checkCB3.value=null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_checkCB2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_checkCB2_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if((checkCB1.value === null) && (this.value === null) && (checkCB3.value === null)){
 	empSignature.value = "";
    empSignedDate.value = "";
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_checkCB3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_checkCB3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (this.value == 1) {
     checkCB1.value=null;
  	 checkCB2.value=null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_checkCB3_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_checkCB3_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if((checkCB1.value === null) && (checkCB2.value === null) && (this.value === null)){
 	empSignature.value = "";
    empSignedDate.value = "";
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == 1){

            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            empSignedDate.value = d;
            empSignedDate.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    empSignature.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
       
}else{
     empSignedDate.value = null;
            empSignature.value = null;
}




        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_empSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_empSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_empSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_empSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var signatureDate = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = signatureDate;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_empDEDCode1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_empDEDCode1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value==1){
  empDEDCode2.value=null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_empDEDCode2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_empDEDCode2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value==1){
  empDEDCode1.value=null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_stateShareAmount_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_stateShareAmount_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_stateShareAmount_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_stateShareAmount_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            totalPremiumAmount.value = this.value;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_empDesignation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_empDesignation_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_bargaininUnit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_bargaininUnit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("Hello= "+this.value);

var cbid = this.value;

if(cbid.startsWith("M")){
  empDesignation.value = "M";
}else if(cbid.startsWith("R")){
  empDesignation.value = "R";
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_totalPremiumAmount_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_totalPremiumAmount_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_priorEmpDEDCode1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_priorEmpDEDCode1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value==1){
  priorEmpDEDCode2.value=null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_priorEmpDEDCode2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_priorEmpDEDCode2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value==1){
  priorEmpDEDCode1.value=null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_agencyName1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_agencyName1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1 && nameOfDentalPlan.value == "Delta Basic"){
  dentalOrgCode.value = "004";
}
else if(this.value == 1 && nameOfDentalPlan.value == "Delta Enhanced Level II"){
  dentalOrgCode.value = "007";
}
else if(this.value == 1 && nameOfDentalPlan.value == "DeltaCare Basic"){
  dentalOrgCode.value = "012";
}
else if(this.value == 1 && nameOfDentalPlan.value == "DeltaCare Enhanced"){
  dentalOrgCode.value = "013";
}
else{
   dentalOrgCode.value = "";
}




        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_agencyName1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_agencyName1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1 ){
  agencyName2.value = null;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_agencyName2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_agencyName2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1 && nameOfDentalPlan.value == "Delta Premier Basic - Annuitants"){
  dentalOrgCode.value = "010";
}
else if(this.value == 1 && nameOfDentalPlan.value == "Delta Premier Enhanced Level II - FERPS"){
  dentalOrgCode.value = "100";
}
else if(this.value == 1 && nameOfDentalPlan.value == "DeltaCare - Basic Annuitants"){
  dentalOrgCode.value = "005";
}
else if(this.value == 1 && nameOfDentalPlan.value == "DeltaCare - Enhanced FERP Annuitants"){
  dentalOrgCode.value = "006";
}
else{
   dentalOrgCode.value = "";
}


        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_agencyName2_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_agencyName2_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1 ){
  agencyName1.value = null;
}

        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_dateRecievedInEmpOffice_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_dateRecievedInEmpOffice_init0 = function (scope) {
    with(this) {
        with(scope) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = dateInitiated;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_hiddentFieldsSection_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_hiddentFieldsSection_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;


        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("on top")	;
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue = myresopnse.userId;
  LogUser.value = userValue;
  
},
  error: function(error){
alert("error block="+error);
}
});
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_hiddenFemale_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_hiddenFemale_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  sex.value == 2;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_hiddenFemale_copy_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_hiddenFemale_copy_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  sex.value == 1;
}
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;
  logUser.value = userValue;
},
  error: function(error){
alert("error block="+error);
}
});
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var planName = nameOfDentalPlan.value;
debugger;
 if(socialSecNo.value === null && fname.value === null && lname.value === null ){
  		 showErrorModal("Alert!","The following fields are required: First Name, Last Name, Social Security Number");     
}
else if ((typeOfAction1.value === null) && (typeOfAction2.value === null) && (typeOfAction3.value === null) && (typeOfAction4.value === null)){
  showErrorModal("Alert!","Please indicate action");
     
  //typeOfAction1.mandatory = true;
}else if ((typeOfAction1.value == 1 || typeOfAction3.value == 3)&&(nameOfDentalPlan.value === '' || nameOfDentalPlan.value === null)){
   showErrorModal("Alert!","Please enter name of selected dental plan");
      
  
}else if(enrolledPersonName1.value !== null && dob1.value === null){
   showErrorModal("Alert!","Date of birth is needed");
      
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row1[0].dob1[0]");
     
  
}
else if(enrolledPersonName2.value !== null && dob2.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15848246211021584824621641[0].dob2[0]");
     
  
} else if(enrolledPersonName3.value !== null && dob3.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735182978721573518298100[0].dob3[0]");
      
  
} else if(enrolledPersonName4.value !== null && dob4.value === null){
   showErrorModal("Alert!","Date of birth is needed");
     
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184490411573518449293[0].dob4[0]");
    
  
  
} else if(enrolledPersonName5.value !== null && dob5.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184565061573518456792[0].dob5[0]");
      
  
} else if(enrolledPersonName6.value !== null && dob6.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184656241573518466093[0].dob6[0]");
     
  
} else if(enrolledPersonName7.value !== null && dob7.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735187254391573518725876[0].dob7[0]");
     
  
  
} 
else if ((typeOfAction2.value == 2 || typeOfAction3.value == 3)&&(nameOfDentalPlan.value === '' || priorDentalPlanName.value === null)){
  showErrorModal("Alert!","Name of current dental plan is needed");
     
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].priorDentalPlanName[0]");
     
  
}else if(planName !== null && planName.startsWith("Delta") && facilityNo.value > 0){
    showErrorModal("Alert!","Provider information is not required for Delta enrollees");
     
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].facilityNo[0]");
     
  
}else if(planName !== null && planName.startsWith("Safeguard") && facilityNo.value.isEmpty()){
   showErrorModal("Alert!","Provider information is needed");
      
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].facilityNo[0]");
      
  
}
else{
  		 getPdf();
    }



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/dam/formsanddocuments/dental_plan_enrollment/dental-plan-enrollment');
            jsonData.append('fileName', fname.value+"_"+lname.value+"_"+ Date.now());          
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
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_reset1565145260630_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_reset1565145260630_click0 = function (scope) {
    with(this) {
        with(scope) {
            ResetFlag.value = true;
        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_saveguidedraft1565145269371_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_saveguidedraft1565145269371_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = fname.value + " " + lname.value;
handleDraftSave(this);


        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_submit1565145280471_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_submit1565145280471_click0 = function (scope) {
    with(this) {
        with(scope) {
            var planName = nameOfDentalPlan.value;
if(socialSecNo.value === null && fname.value === null && lname.value === null ){
  		 showErrorModal("Alert!","The following fields are required: First Name, Last Name, Social Security Number");     
}
else if ((typeOfAction1.value === null) && (typeOfAction2.value === null) && (typeOfAction3.value === null) && (typeOfAction4.value === null)){
  showErrorModal("Alert!","Please indicate action");
     
  //typeOfAction1.mandatory = true;
}else if ((typeOfAction1.value == 1 || typeOfAction3.value == 3)&&(nameOfDentalPlan.value === '' || nameOfDentalPlan.value === null)){
   showErrorModal("Alert!","Please enter name of selected dental plan");
      
  
}else if(enrolledPersonName1.value !== null && dob1.value === null){
   showErrorModal("Alert!","Date of birth is needed");
      
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row1[0].dob1[0]");
     
  
}
else if(enrolledPersonName2.value !== null && dob2.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15848246211021584824621641[0].dob2[0]");
     
  
} else if(enrolledPersonName3.value !== null && dob3.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735182978721573518298100[0].dob3[0]");
      
  
} else if(enrolledPersonName4.value !== null && dob4.value === null){
   showErrorModal("Alert!","Date of birth is needed");
     
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184490411573518449293[0].dob4[0]");
    
  
  
} 

else if(enrolledPersonName5.value !== null && dob5.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184565061573518456792[0].dob5[0]");
      
  
} else if(enrolledPersonName6.value !== null && dob6.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735184656241573518466093[0].dob6[0]");
     
  
} else if(enrolledPersonName7.value !== null && dob7.value === null){
   showErrorModal("Alert!","Date of birth is needed");
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].table1573518265301[0].Row15735187254391573518725876[0].dob7[0]");
     
  
  
} 
else if ((typeOfAction2.value == 2 || typeOfAction3.value == 3)&&(nameOfDentalPlan.value === '' || priorDentalPlanName.value === null)){
  showErrorModal("Alert!","Name of current dental plan is needed");
     
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].priorDentalPlanName[0]");
     
  
}else if(planName !== null && planName.startsWith("Delta") && facilityNo.value > 0){
    showErrorModal("Alert!","Provider information is not required for Delta enrollees");
     
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].facilityNo[0]");
     
  
}else if(planName !== null && planName.startsWith("Safeguard") && facilityNo.value.isEmpty()){
   showErrorModal("Alert!","Provider information is needed");
      
  	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].sections[0].planInformation[0].facilityNo[0]");
      
  
}else{
  aftiaDescCWID.value = fname.value + " " + lname.value;
	guideBridge.submit();
} 


//guideBridge.submit();

        }
	}
}
/**
 * @function dental_plan_enrollment_dental_plan_enrollment.generated_submit1565145280471_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dental_plan_enrollment_dental_plan_enrollment.generated_submit1565145280471_click1 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.submit();
        }
	}
}
