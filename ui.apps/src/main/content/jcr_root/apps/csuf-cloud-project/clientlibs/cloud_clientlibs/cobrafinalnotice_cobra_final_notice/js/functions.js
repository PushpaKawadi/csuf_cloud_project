/**
 * @function cobrafinalnotice_cobra_final_notice.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 


        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Empl_ID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Empl_ID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(SaveFormStatus.value == "0"){
benefitLookup.value = null;
DependentName1.value = null;
comment1.value = null;
comment2.value = null;
var EmpId=this.value; 

if(this.value !== null){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
    //if(ResetButtonFlag.value !== "true"){
      //alert("Reset Clicked");
        $.ajax({

           type: 'GET',

                url: "/bin/getCobraEmpLookup",


              data:  {
                     cwid: EmpId
              },

              dataType: 'JSON',

            success: function(myresponse) {
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresponse.length === 1) {

                    First_Name.value = myresponse[0].FIRST_NAME;
                    Last_Name.value = myresponse[0].LAST_NAME; 
                    EMPL_RCD.value = myresponse[0].EMPL_RCD;
                    Street_Address.value = myresponse[0].ADDRESS1;
                    City.value = myresponse[0].CITY;
                    State.value = myresponse[0].STATE;
                    Zip.value = myresponse[0].POSTAL;
                   // EmailAddress.value = myresponse[0].EMP_EMAIL_ID;
                    EmailAddress.value = "shreyas.manjunatha@thoughtfocus.com";
                  
                  
                  var fname = First_Name.value;
                  var lname = Last_Name.value;
                  var formerEmpName = fname.concat(" ").concat(lname);
                  EmployeeName.value  = formerEmpName;

                  
                    //myresponse[0].DEPTNAME;
                    //myresponse[0].JOBCODE;
                   // if(Date_Initiated.value == null){
                      //alert("Value is ="+Date_Initiated.value);
                      var dateString = new Date().toLocaleString("en-US", {
                        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                        }).replace(/[^ -~]/g, ' ');
                        var dateObject = new Date(dateString);
                        var curyear = dateObject.getFullYear();
                        var curyearMonth = dateObject.getMonth() + 1;
                        var curyearDay = dateObject.getDate();
                        var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
                        Date_Initiated.value = dateInitiated;
                   // }

                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (myresponse.length > 1) {
                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    //populate Hidden Fields

                    streetHidden.value = myresponse[0].ADDRESS1;
                    zipHidden.value = myresponse[0].STATE;
                    stateHidden.value = myresponse[0].POSTAL;

                    var col = [];
                    col.push("FIRST_NAME");
                    col.push("LAST_NAME");            
                    col.push("DEPTNAME");
                    col.push("JOBCODE");
                    col.push("EMPL_RCD");
                    col.push("ADDRESS1");
                    col.push("CITY");
                    col.push("STATE");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First Name", "Last Name", "Dept Name", "Job Code", "Emp RCD", "Address", "City", "State"];
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
                            lNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                            fNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                            emplRCDHidden.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                            cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
                    //debugger;

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

                                fNameHidden.value = myresponse[n].FIRST_NAME;
                                lNameHidden.value = myresponse[n].LAST_NAME;
                                emplRCDHidden.value = myresponse[n].EMPL_RCD;
                                streetHidden.value = myresponse[n].ADDRESS1;                     	                      	
                                cityhidden.value = myresponse[n].CITY;
                                zipHidden.value = myresponse[n].POSTAL;
                                stateHidden.value = myresponse[n].STATE;  
                                HiddenDeptName.value = myresponse[n].DEPTNAME;
                                HiddenJobCode.value = myresponse[n].JOBCODE;
                              // EmailAddress.value = myresponse[n].EMP_EMAIL_ID;
                              EmailAddress.value = "shreyas.manjunatha@thoughtfocus.com";
                               
                                rButtonStatus = true;
                                break;

                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        } else {
                            First_Name.value = fNameHidden.value;
                            Last_Name.value = lNameHidden.value;
                            EMPL_RCD.value = emplRCDHidden.value;
                            Street_Address.value = streetHidden.value;
                            City.value =cityhidden.value;                  	
                            State.value = stateHidden.value;
                            Zip.value = zipHidden.value;
                          
                          var fname = First_Name.value;
                          var lname = Last_Name.value;
                          var formerEmpName = fname.concat(" ").concat(lname);
                          EmployeeName.value  = formerEmpName;

                            // alert("Value is ="+Date_Initiated.value);
                             var dateString = new Date().toLocaleString("en-US", {
                                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                                }).replace(/[^ -~]/g, ' ');
                              var dateObject = new Date(dateString);
                              var curyear = dateObject.getFullYear();
                              var curyearMonth = dateObject.getMonth() + 1;
                              var curyearDay = dateObject.getDate();
                              var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
                              Date_Initiated.value = dateInitiated;

                            // gifModal.style.display = "none";
                            modal.style.display = "none";
                        }
                    };
                    // footerModal = document.getElementById("modal_footer");
                    footerModal.appendChild(okButton);

                } else {
                    //alert("No Matching Records Found");
                    gifModal.style.display = "none";									
							
                  			showErrorModal("Alert !","No Matching Records Found");
                  
                  			  EMPL_RCD.value = null;
                              First_Name.value = null;
                              Last_Name.value = null;
                              Street_Address.value = null;
                              City.value = null;
                              State.value = null;
                              Zip.value = null;
							  EmailAddress.value = null;
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
                        alert("Please select the department");
                        modal.style.display = "block";
                    } else {

                        alert("Please select the department");
                        modal.style.display = "block";
                    }

                };
                // When the user clicks anywhere outside of the modal, close it
                /*window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };*/
            }
        }); 
   /* }else{
      gifModal.style.display = "none";
      ResetButtonFlag.value = false;

    }*/


}
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EMPL_RCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EMPL_RCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EMPL_RCD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EMPL_RCD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value.length > 3) {
    alert("Employee Record cannot be greater than 3 characters");
}

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Date_Initiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Date_Initiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false; 

var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
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
 * @function cobrafinalnotice_cobra_final_notice.generated_First_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_First_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Last_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Last_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Street_Address_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Street_Address_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_City_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_City_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_State_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_State_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Zip_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Zip_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_benefitLookup_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_benefitLookup_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(SaveFormStatus.value == "0"){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
var EmpId=Empl_ID.value; 

if(this.value !== null){

      $.ajax({

         type: 'GET',

              url: "/bin/getCobraBenefitLookup",    

            data:  {
                   cwid: EmpId
            },

            dataType: 'JSON',

          success: function(myresponse) {       

                  gifModal.style.display = "none";

                  var dollarSign = "$";	
                  var healthPrice = myresponse[0].HealthCovrg;
                  if(healthPrice === undefined || healthPrice === null || healthPrice == 0){
                    healthPrice = "0.00";
                    //alert("HealthPrice value is="+healthPrice);
                  }
                  var dentalPlanPrice = myresponse[0].DentalCovrg;
                  if(dentalPlanPrice === undefined || dentalPlanPrice === null || dentalPlanPrice == 0){
                    dentalPlanPrice = "0.00";
                  }
                  var visionPrice = myresponse[0].VisionCovrg;
                  if(visionPrice === undefined || visionPrice === null || visionPrice == 0){
                    visionPrice = "0.00";
                  }
                  var hcraPrice = myresponse[0].HCRACovrg;
                  //alert("HCRA Price=" + hcraPrice);
                  if(hcraPrice === undefined || hcraPrice === null || hcraPrice == 0){
                    hcraPrice = "0.00";
                   // alert("hcraPrice value is="+hcraPrice);
                  }

                  SpouseName.value = myresponse[0].SpouseName;
                  DependentChildName.value = myresponse[0].DependentChildName; 
                  HealthPlan2.value = myresponse[0].Health;
                  //HealthPlan2.value = "Blue Value";
                  DentalPlan2.value = myresponse[0].Dental;
                  Vision2.value = myresponse[0].Vision;
                  HCRA2.value = myresponse[0].HCRA;      		     		      		
                  HealthPlanPrice.value = dollarSign.concat(healthPrice);      		
                  DentalPlanPrice.value = dollarSign.concat(dentalPlanPrice);     		      		      		
                  VisionPrice.value = dollarSign.concat(visionPrice);     		    		
                  HCRAPrice.value = dollarSign.concat(hcraPrice);      		
                  HealthPlan4.value = myresponse[0].Health;
                  DentalPlan4.value = myresponse[0].Dental;
                  Vision4.value = myresponse[0].Vision;
                  HCRA4.value = myresponse[0].HCRA;

            if((HealthPlan2.value !== null && DentalPlan2.value !== null && Vision2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = HealthPlan2.value + ", " + DentalPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + "(collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + DentalPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + "(collectively, the 'Plan')";
            }
            else if((HealthPlan2.value !== null && DentalPlan2.value !== null && Vision2.value !== null)){
                  ThePlan.value = HealthPlan2.value + ", " + DentalPlan2.value + ", " + Vision2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + DentalPlan2.value + ", " + Vision2.value + " (collectively, the 'Plan')";
            }
             else if((HealthPlan2.value !== null && DentalPlan2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = HealthPlan2.value + ", " + DentalPlan2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + DentalPlan2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
            else if((HealthPlan2.value !== null && Vision2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = HealthPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
            else if((DentalPlan2.value !== null && Vision2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = DentalPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = DentalPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
            else if((HealthPlan2.value !== null && DentalPlan2.value !== null)){
                  ThePlan.value = HealthPlan2.value + ", " + DentalPlan2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + DentalPlan2.value + " (collectively, the 'Plan')";
            }
            else if((HealthPlan2.value !== null && Vision2.value !== null )){
                  ThePlan.value = HealthPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
            else if((HealthPlan2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = HealthPlan2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
           else if((DentalPlan2.value !== null && Vision2.value !== null)){
                  ThePlan.value = DentalPlan2.value + ", " + Vision2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = DentalPlan2.value + ", " + Vision2.value + " (collectively, the 'Plan')";
            }
           else if((DentalPlan2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = DentalPlan2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = DentalPlan2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
           else if((Vision2.value !== null && myresponse[0].HCRACovrg > 0)){
                  ThePlan.value = Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = Vision2.value + ", " + HCRA2.value + " (collectively, the 'Plan')";
            }
           else if(HealthPlan2.value !== null){
                  ThePlan.value = HealthPlan2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HealthPlan2.value + " (collectively, the 'Plan')";
           }
           else if(DentalPlan2.value !== null){
                  ThePlan.value = DentalPlan2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = DentalPlan2.value + " (collectively, the 'Plan')";
           }
           else if(Vision2.value !== null){
                  ThePlan.value = Vision2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = Vision2.value + " (collectively, the 'Plan')";
           }
           else if(HCRA2.value !== null){
                  ThePlan.value = HCRA2.value + " (collectively, the 'Plan')";
                  ThePlan1.value = HCRA2.value + " (collectively, the 'Plan')";
           }

           if(EmployeeName.value !== null && EmployeeName.value !== ""){
                  EmployeeNameChk.value ===1;        
             } 

           if(SpouseName.value !== null){
                  SpouseNameChk.value == 1;        
             }         
          }
      }); 
}else{
  		gifModal.style.display = "none";
  		ThePlan.value = null;
  		ThePlan1.value = null;
  		SpouseName.value = null;
        DependentChildName.value = null; 
        HealthPlan2.value = null;
        //HealthPlan2.value = "Blue Value";
        DentalPlan2.value = null;
        Vision2.value = null;
        HCRA2.value = null;      		     		      		
        HealthPlanPrice.value = null;      		
        DentalPlanPrice.value = null;     		      		      		
        VisionPrice.value = null;     		    		
        HCRAPrice.value = null;      		
        HealthPlan4.value = null;
        DentalPlan4.value = null;
        Vision4.value = null;
        HCRA4.value = null;
}
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ThePlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ThePlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ThePlan_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ThePlan_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var planStr = this.value;

if(planStr.includes("Blue")){
  MedicalContactInfo.value = "Blue Shield HMO\nP.O. Box 272520\nChico, CA 95927-2520\n(800) 997-3770";
} else if(planStr.includes("NetValue")){
  MedicalContactInfo.value = "Blue Shield HMO\nP.O. Box 272520\nChico, CA 95927-2520\n(800) 997-3770";
} else if(planStr.includes("Kaiser")){
  MedicalContactInfo.value = "Kaiser Permanente\nP.O. Box 7152\nPasadena, CA 91109\n(800) 464-4000";
} 
else if(planStr.includes("PERS Care") || planStr.includes("PERS-Care")){
//else if(planStr.toLowerCase().includes("pers") && planStr.toLowerCase().includes("care") ){
  MedicalContactInfo.value = "PERS CARE\nCobra Payment\nBlue Cross\nWoodland Hills, CA 91365-4386\n(877) 737-7776";
} else if(planStr.toLowerCase().includes("pers") && planStr.toLowerCase().includes("choice") ){
//else if(planStr.includes("PERS Choice")){
  MedicalContactInfo.value = "PERS CHOICE\nCobra Payment\nBlue Cross\nWoodland Hills, CA 91365-4386\n(877) 737-7776";
} else {
  MedicalContactInfo.value = "";
} 

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EndOfEmploymentChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EndOfEmploymentChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){


if(this.value==1){
  months.value = 18;

  ReductionHoursChk.value = null;
  DeathOfEmployeeChk.value = null;
  DivorseChk.value = null;
  LossOfDepChildStatusChk.value = null;
  DissolutionChk.value = null;
  ReductionHoursDate.value = null;
  DeathOfEmployeeDate.value = null;
  DivorceDate.value = null;
  LossOfDeptChildStatusDate.value = null;
  DissolutionDate.value = null;
  EntitlementtoMedicare.value = null;
  EntitlementtoMedicareDate.value = null;

  months.visible=true;
  
  EndOfEmploymentDate.visible = true;
  
  var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

      //HCRAYear.value = hcraYear;
	}
  
}
else{
 
  EndOfEmploymentDate.visible = false;
}
}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EndOfEmploymentChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EndOfEmploymentChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === null && ReductionHoursChk.value === null && DeathOfEmployeeChk.value === null && DivorseChk.value === null && LossOfDepChildStatusChk.value === null && DissolutionChk.value === null){
	months.value = null;
  
  	var dateValue = CobraBegin.value;
  	
  	var hcraYear = dateValue.slice(0, 4);
    var myNewDate = new Date(dateValue);   	
    var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() - 1));
    //alert("update month="+endDate1);
    var curyear = endDate1.getFullYear();
    var curyearMonth = endDate1.getMonth()+1;  	
    var curyearDay = endDate1.getDate(); 
    var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	HCRAYear.value = hcraYear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EndOfEmploymentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EndOfEmploymentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ReductionHoursChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ReductionHoursChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){
if (this.value == 1){
  months.value = 18;
  
  EndOfEmploymentChk.value = null;
  DeathOfEmployeeChk.value = null;
  DivorseChk.value = null;
  LossOfDepChildStatusChk.value = null;
  DissolutionChk.value = null;
  EndOfEmploymentDate.value = null;
  DeathOfEmployeeDate.value = null;
  DivorceDate.value = null;
  LossOfDeptChildStatusDate.value = null;
  DissolutionDate.value = null;
  EntitlementtoMedicare.value = null;
  EntitlementtoMedicareDate.value = null;
  
  months.visible=true;
  
  ReductionHoursDate.visible=true;
  
    var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

      //HCRAYear.value = hcraYear;
	}
}
else{

  	ReductionHoursDate.visible=false;
}
}
tempDateStatus.value = null;

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ReductionHoursChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ReductionHoursChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(EndOfEmploymentChk.value === null && this.value === null && DeathOfEmployeeChk.value === null && DivorseChk.value === null && LossOfDepChildStatusChk.value === null && DissolutionChk.value === null){
	months.value = null;
  
  	var dateValue = CobraBegin.value;
  	
  	var hcraYear = dateValue.slice(0, 4);
    var myNewDate = new Date(dateValue);   	
    var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() - 1));
    //alert("update month="+endDate1);
    var curyear = endDate1.getFullYear();
    var curyearMonth = endDate1.getMonth()+1;  	
    var curyearDay = endDate1.getDate(); 
    var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	HCRAYear.value = hcraYear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ReductionHoursDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ReductionHoursDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DeathOfEmployeeChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DeathOfEmployeeChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){
if (this.value == 1){
  months.value = 36;
  
  EndOfEmploymentChk.value = null;
  ReductionHoursChk.value = null;
  DivorseChk.value = null;
  LossOfDepChildStatusChk.value = null;
  DissolutionChk.value = null;
  EndOfEmploymentDate.value = null;
  ReductionHoursDate.value = null;
  DivorceDate.value = null;
  LossOfDeptChildStatusDate.value = null;
  DissolutionDate.value = null;
  EntitlementtoMedicare.value = null;
  EntitlementtoMedicareDate.value = null;
  
  months.visible=true;
  
  DeathOfEmployeeDate.visible=true;
  
    var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

      //HCRAYear.value = hcraYear;
	}
}
else{

  	DeathOfEmployeeDate.visible=false;
}
}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DeathOfEmployeeChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DeathOfEmployeeChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(EndOfEmploymentChk.value === null && ReductionHoursChk.value === null && this.value === null && DivorseChk.value === null && LossOfDepChildStatusChk.value === null && DissolutionChk.value === null){
	months.value = null;
  
    var dateValue = CobraBegin.value;
  	
  	var hcraYear = dateValue.slice(0, 4);
    var myNewDate = new Date(dateValue);   	
    var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() - 1));
    //alert("update month="+endDate1);
    var curyear = endDate1.getFullYear();
    var curyearMonth = endDate1.getMonth()+1;  	
    var curyearDay = endDate1.getDate(); 
    var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	HCRAYear.value = hcraYear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DeathOfEmployeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DeathOfEmployeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DivorseChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DivorseChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){
if (this.value == 1){
  months.value = 36;
  
  EndOfEmploymentChk.value = null;
  ReductionHoursChk.value = null;
  DeathOfEmployeeChk.value = null;
  LossOfDepChildStatusChk.value = null;
  DissolutionChk.value = null;
  EndOfEmploymentDate.value = null;
  ReductionHoursDate.value = null;
  DeathOfEmployeeDate.value = null;
  LossOfDeptChildStatusDate.value = null;
  DissolutionDate.value = null;
  EntitlementtoMedicare.value = null;
  EntitlementtoMedicareDate.value = null;
  
  months.visible=true;
  
  DivorceDate.visible=true;
  
    var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

      //HCRAYear.value = hcraYear;
	}
}
else{
  	DivorceDate.visible=false;
}
}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DivorseChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DivorseChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(EndOfEmploymentChk.value === null && ReductionHoursChk.value === null && DeathOfEmployeeChk.value === null && this.value === null && LossOfDepChildStatusChk.value === null && DissolutionChk.value === null){
	months.value = null;
  
 	var dateValue = CobraBegin.value;
  	
  	var hcraYear = dateValue.slice(0, 4);
    var myNewDate = new Date(dateValue);   	
    var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() - 1));
    //alert("update month="+endDate1);
    var curyear = endDate1.getFullYear();
    var curyearMonth = endDate1.getMonth()+1;  	
    var curyearDay = endDate1.getDate(); 
    var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	HCRAYear.value = hcraYear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DivorceDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DivorceDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EntitlementtoMedicare_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EntitlementtoMedicare_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){
if (this.value == 1){
  months.value = 36;
  
  EndOfEmploymentChk.value = null;
  ReductionHoursChk.value = null;
  DeathOfEmployeeChk.value = null;
  LossOfDepChildStatusChk.value = null;
  DissolutionChk.value = null;
  DivorseChk.value = null;
  
  EndOfEmploymentDate.value = null;
  ReductionHoursDate.value = null;
  DeathOfEmployeeDate.value = null;
  LossOfDeptChildStatusDate.value = null;
  DissolutionDate.value = null;
  DivorceDate.value = null;
  
  months.visible=true;
  
  EntitlementtoMedicareDate.visible=true;
  
    var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

      //HCRAYear.value = hcraYear;
	}
}
else{
  	EntitlementtoMedicareDate.visible=false;
}
}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EntitlementtoMedicareDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EntitlementtoMedicareDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_LossOfDepChildStatusChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_LossOfDepChildStatusChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){
if (this.value == 1){
  months.value = 36;
  
  EndOfEmploymentChk.value = null;
  ReductionHoursChk.value = null;
  DeathOfEmployeeChk.value = null;
  DivorseChk.value = null;
  DissolutionChk.value = null;
  EndOfEmploymentDate.value = null;
  ReductionHoursDate.value = null;
  DeathOfEmployeeDate.value = null;
  DivorceDate.value = null;
  DissolutionDate.value = null;
  EntitlementtoMedicare.value = null;
  EntitlementtoMedicareDate.value = null;
  
  months.visible=true;
  
  LossOfDeptChildStatusDate.visible=true;
  
    var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

      //HCRAYear.value = hcraYear;
	}
  
}
else{
  	LossOfDeptChildStatusDate.visible=false;
}
}
tempDateStatus.value = null;

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_LossOfDepChildStatusChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_LossOfDepChildStatusChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(EndOfEmploymentChk.value === null && ReductionHoursChk.value === null && DeathOfEmployeeChk.value === null && DivorseChk.value === null && this.value === null && DissolutionChk.value === null){
	months.value = null;
  
  	var dateValue = CobraBegin.value;
  	
  	var hcraYear = dateValue.slice(0, 4);
    var myNewDate = new Date(dateValue);   	
    var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() - 1));
    //alert("update month="+endDate1);
    var curyear = endDate1.getFullYear();
    var curyearMonth = endDate1.getMonth()+1;  	
    var curyearDay = endDate1.getDate(); 
    var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	HCRAYear.value = hcraYear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_LossOfDeptChildStatusDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_LossOfDeptChildStatusDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DissolutionChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DissolutionChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(tempDateStatus.value  === null){
if (this.value == 1){
  months.value = 36;
  
  EndOfEmploymentChk.value = null;
  ReductionHoursChk.value = null;
  DeathOfEmployeeChk.value = null;
  DivorseChk.value = null;
  LossOfDepChildStatusChk.value = null;
  EndOfEmploymentDate.value = null;
  ReductionHoursDate.value = null;
  DeathOfEmployeeDate.value = null;
  DivorceDate.value = null;
  LossOfDeptChildStatusDate.value = null;
  EntitlementtoMedicare.value = null;
  EntitlementtoMedicareDate.value = null;
  
  months.visible=true;
  
  DissolutionDate.visible=true;
  
    var monthValue = months.value;
  
  var dateValue = CobraBegin.value;
  var hcraYear = dateValue.slice(0, 4);
  
  if(dateValue !== null){
      var myNewDate = new Date(dateValue);   	
      var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
      //alert("update month="+endDate1);
      var curyear = endDate1.getFullYear();
      var curyearMonth = endDate1.getMonth()+1;  	
      var curyearDay = endDate1.getDate(); 
      var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
      CobraEnds.value = cobraEnd; 

     // HCRAYear.value = hcraYear;
	}
}
else{
 
  	DissolutionDate.visible=false;
}
}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DissolutionChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DissolutionChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(EndOfEmploymentChk.value === null && ReductionHoursChk.value === null && DeathOfEmployeeChk.value === null && DivorseChk.value === null && LossOfDepChildStatusChk.value === null && this.value === null){
	months.value = null;
  
  	//months.value = 1;
   // var monthValue = months.value;
    var dateValue = CobraBegin.value;
  	
  	var hcraYear = dateValue.slice(0, 4);
    var myNewDate = new Date(dateValue);   	
    var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() - 1));
    //alert("update month="+endDate1);
    var curyear = endDate1.getFullYear();
    var curyearMonth = endDate1.getMonth()+1;  	
    var curyearDay = endDate1.getDate(); 
    var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	HCRAYear.value = hcraYear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DissolutionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DissolutionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.visible = false;
if(this.value === null){
  this.visible = false;
}else{
  this.visible = true;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_months_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_months_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EmployeeNameChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EmployeeNameChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){  
  SpouseNameChk.value = null;
  RegisteredDomesticPartnerNameChk.value = null;
  DependentChildNameChk.value = null;
  ChildNameChk.value = null;
  
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_EmployeeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_EmployeeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SpouseNameChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SpouseNameChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value !== null){
  
  EmployeeNameChk.value = null;
  RegisteredDomesticPartnerNameChk.value = null;
  DependentChildNameChk.value = null;
  ChildNameChk.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SpouseName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SpouseName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RegisteredDomesticPartnerNameChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RegisteredDomesticPartnerNameChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  
  EmployeeNameChk.value = null;
  SpouseNameChk.value = null;
  DependentChildNameChk.value = null;
  ChildNameChk.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RegisteredDomesticPartnerName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RegisteredDomesticPartnerName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentChildNameChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentChildNameChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  
  EmployeeNameChk.value = null;
  SpouseNameChk.value = null;
  RegisteredDomesticPartnerNameChk.value = null;
  ChildNameChk.value = null;
  
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentChildName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentChildName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ChildNameChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ChildNameChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  
  EmployeeNameChk.value = null;
  SpouseNameChk.value = null;
  RegisteredDomesticPartnerNameChk.value = null;
  DependentChildNameChk.value = null;

}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ChildName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ChildName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_CobraBegin_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_CobraBegin_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var dateValue = this.value;

if(dateValue !== null){
var today = new Date();
var curyear = today.getFullYear();

HCRAYear.value = curyear;
}

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_CobraBegin_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_CobraBegin_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var monthValue = months.value;

var dateValue = this.value;

if(dateValue !== null){
	var myNewDate = new Date(dateValue);   	
  	var endDate1 = new Date(myNewDate.setMonth(myNewDate.getMonth() + monthValue));
  	//alert("update month="+endDate1);
  	var curyear = endDate1.getFullYear();
  	var curyearMonth = endDate1.getMonth()+1;  	
  	var curyearDay = endDate1.getDate(); 
  	var cobraEnd = (curyear + "-" + curyearMonth + "-" + curyearDay);  
    CobraEnds.value = cobraEnd; 
  
  	//HCRAYear.value = curyear;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_CobraEnds_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_CobraEnds_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HCRAYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HCRAYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;

var d = new Date();
this.value = d.getFullYear();
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HealthPlan2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HealthPlan2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HealthPlan2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HealthPlan2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //var healthPlan = this.value;

if(healthPlan.includes("Blue")){
 //alert("A");
 MedicalContactInfo.value = "Blue Shield HMO\nP.O. Box 272520\nChico, CA 95927-2520\n(800) 997-3770";
}else if(healthPlan.includes("NetValue")){
  MedicalContactInfo.value = "Blue Shield HMO\nP.O. Box 272520\nChico, CA 95927-2520\n(800) 997-3770"; 
}else if(healthPlan.includes("Kaiser")){
  MedicalContactInfo.value = "Kaiser Permanente\nP.O. Box 7152\nPasadena, CA 91109\n(800) 464-4000"; 
}else if(healthPlan.includes("PERS Care")){
  MedicalContactInfo.value = "PERS CARE\nCobra Payment\nBlue Cross\nWoodland Hills, CA 91365-4386\n(877) 737-7776"; 
}else if(healthPlan.includes("PERS-Choice")){
  MedicalContactInfo.value = "PERS CHOICE\nCobra Payment\nBlue Cross\nWoodland Hills, CA 91365-4386\n(877) 737-7776"; 
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HealthPlanPrice_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HealthPlanPrice_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DentalPlan2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DentalPlan2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DentalPlanPrice_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DentalPlanPrice_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Vision2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Vision2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_VisionPrice_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_VisionPrice_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HCRA2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HCRA2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HCRAPrice_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HCRAPrice_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HCRAPrice_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HCRAPrice_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "$0.00"){
  HCRA4.visible = false;
  chkHealth1.visible = false;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_comment1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_comment1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = "false";
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_comment1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_comment1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1){  
  comment2.value = null;

setTimeout(function(){
  Comments.value = "Dental insurance continues into retirement at Basic level. You may COBRA to continue the Enhanced level coverage for 18 months. Your vision insurance does not continue into retirement, if you wish to continue coverage you must enroll in COBRA";       
    
  },100);

}else{
  	 //alert('comments clear from Dental');
      Comments.value = null;
}
  
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_comment2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_comment2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = "false";
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_comment2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_comment2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1){  
  comment1.value = null;
  setTimeout(function(){
  Comments.value = "Health and dental insurance continue into retirement. Your vision insurance will continue for the duration of your FERP appointment";           
  },100);

	}else{
     // alert('Comments clear form Health');
      Comments.value = null;
    }
  
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Comments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Comments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ThePlan1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_ThePlan1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentName1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentName1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var emplID = Empl_ID.value;

if(this.value !== null){
    $.ajax({

        type: 'GET',

        url: "/bin/getCobraDependentNameLookup",

        data:	{

            cwid: emplID,
            dependentName: this.value      
        },  

        datatype: 'JSON',

        success: function(myresponse){

            if(myresponse.length > 0){
                    DOB1.value = myresponse[0].BIRTHDATE;
                    RelationshipToEmp1.value = myresponse[0].Relationship;
                    //SSN1.value = myresponse[0].NATIONAL_ID;  
                     SSN1.value = "111-11-1111";  
            }else{
                   // alert("Invalid dependent details");
             		 showErrorModal("Alert !","Invalid dependent details");
                    //DependentName1.value = null;
                    DOB1.value = null;
                    RelationshipToEmp1.value = null;
                    SSN1.value = null;
            }
        },

        error: function(){
          showErrorModal("Alert !","Please enter valid dependent details");
                //alert("Please enter valid dependent details");
        }
    });
}else{
  
  	DOB1.value = null;
  	RelationshipToEmp1.value = null;
  	SSN1.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DOB1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DOB1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SSN1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SSN1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentName2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentName2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var emplID = Empl_ID.value;
if(this.value !== null){
    $.ajax({

        type: 'GET',

        url: "/bin/getCobraDependentNameLookup",

        data:	{

            cwid: emplID,
            dependentName: this.value      
        },  

        datatype: 'JSON',

        success: function(myresponse){

            if(myresponse.length > 0){
                    DOB2.value = myresponse[0].BIRTHDATE;
                    RelationshipToEmp2.value = myresponse[0].Relationship;
                    //SSN2.value = myresponse[0].NATIONAL_ID;  
                    SSN2.value = "111-11-1111"; 
            }else{
                   // alert("Invalid dependent details");
              showErrorModal("Alert !","Invalid dependent details");
                    //DependentName2.value = null;
                    DOB2.value = null;
                    RelationshipToEmp2.value = null;
                    SSN2.value = null;
            }
        },

        error: function(){
                //alert("Please enter valid dependent details");
          	showErrorModal("Alert !","Please enter valid dependent details");
        }
    });
}else{
  
  	DOB2.value = null;
  	RelationshipToEmp2.value = null;
  	SSN2.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DOB2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DOB2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SSN2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SSN2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentName3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentName3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var emplID = Empl_ID.value;
if(this.value !== null){
    $.ajax({

        type: 'GET',

        url: "/bin/getCobraDependentNameLookup",

        data:	{

            cwid: emplID,
            dependentName: this.value      
        },  

        datatype: 'JSON',

        success: function(myresponse){

            if(myresponse.length > 0){
                    DOB3.value = myresponse[0].BIRTHDATE;
                    RelationshipToEmp3.value = myresponse[0].Relationship;
                    //SSN3.value = myresponse[0].NATIONAL_ID;  
                    SSN3.value = "111-11-1111";
            }else{
                    //alert("Invalid dependent details");
              showErrorModal("Alert !","Invalid dependent details");
                    //DependentName3.value = null;
                    DOB3.value = null;
                    RelationshipToEmp3.value = null;
                    SSN3.value = null;
            }
        },

        error: function(){
           showErrorModal("Alert !","Please enter valid dependent details");

                //alert("Please enter valid dependent details");
        }
    });
}else{
  
  	DOB3.value = null;
  	RelationshipToEmp3.value = null;
  	SSN3.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DOB3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DOB3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SSN3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SSN3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentName4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentName4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var emplID = Empl_ID.value;
if(this.value !== null){

    $.ajax({

        type: 'GET',

        url: "/bin/getCobraDependentNameLookup",

        data:	{

            cwid: emplID,
            dependentName: this.value      
        },  

        datatype: 'JSON',

        success: function(myresponse){

            if(myresponse.length > 0){
                    DOB4.value = myresponse[0].BIRTHDATE;
                    RelationshipToEmp4.value = myresponse[0].Relationship;
                    //SSN4.value = myresponse[0].NATIONAL_ID;
                    SSN4.value = "111-11-1111"; 
            }else{
                    //alert("Invalid dependent details");
              showErrorModal("Alert !","Invalid dependent details");
                    //DependentName4.value = null;
                    DOB4.value = null;
                    RelationshipToEmp4.value = null;
                    SSN4.value = null;
            }
        },

        error: function(){
                //alert("Please enter valid dependent details");
           showErrorModal("Alert !","Please enter valid dependent details");

        }
    });
}else{
  
  	DOB4.value = null;
  	RelationshipToEmp4.value = null;
  	SSN4.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DOB4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DOB4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SSN4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SSN4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DependentName5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DependentName5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var emplID = Empl_ID.value;
if(this.value !== null){
    $.ajax({

        type: 'GET',

        url: "/bin/getCobraDependentNameLookup",

        data:	{

            cwid: emplID,
            dependentName: this.value      
        },  

        datatype: 'JSON',

        success: function(myresponse){

            if(myresponse.length > 0){
                    DOB5.value = myresponse[0].BIRTHDATE;
                    RelationshipToEmp5.value = myresponse[0].Relationship;
                    //SSN5.value = myresponse[0].NATIONAL_ID;  
              	    SSN5.value = "111-11-1111"; 
            }else{
                   // alert("Invalid dependent details");
              showErrorModal("Alert !","Invalid dependent details");
                    //this.value = null;
                    DOB5.value = null;
                    RelationshipToEmp5.value = null;
                    SSN5.value = null;
            }
        },

        error: function(){
           showErrorModal("Alert !","Please enter valid dependent details");

                //alert("Please enter valid dependent details");
        }
    });
}else{
  
  	DOB5.value = null;
  	RelationshipToEmp5.value = null;
  	SSN5.value = null;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DOB5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DOB5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RelationshipToEmp5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_SSN5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_SSN5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enable = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HealthPlan4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HealthPlan4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_DentalPlan4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_DentalPlan4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_Vision4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_Vision4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_HCRA4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_HCRA4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_MedicarePartAEntitledYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_MedicarePartAEntitledYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  
    MedicareEntitlement.visible=true;

	MedicarePartAEntitledNo.value=null;
}else{
  MedicareEntitlement.visible=false;
}

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_MedicarePartAEntitledNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_MedicarePartAEntitledNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value==1){
  MedicarePartAEntitledYes.value=null;
  
  MedicareEntitlement.visible=false;
}
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_MedicareEntitlement_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_MedicareEntitlement_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_MedicalContactInfo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_MedicalContactInfo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled= false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_hiddenFields_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_hiddenFields_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_LogUser_init0 = function (scope) {
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
 * @function cobrafinalnotice_cobra_final_notice.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(Empl_ID.value !== null && First_Name.value !== null && Last_Name.value !== null){
    	getPdf();
    }else{
      //alert("Please fill all the mandatory fields");
     /*
      var modal= document.getElementById("errorPopup");
      var para = document.getElementById("para");
      para.innerHTML = "";
      para.innerHTML = "The following fields are required: First_Name,Last_Name,Empl_ID";
      var errorBody = document.getElementById('errorData');
      errorBody.innerHTML = "";
      errorBody.appendChild(para);
      var footerModal = document.getElementById("errorPopup-footer");
      var okButton = document.createElement("input");
      okButton.type = "button";
      okButton.setAttribute("class", "okBtn");
      //okButton.id = "okBtn";
      okButton.value = "Ok";
      okButton.onclick = function(event) {
       	 modal.style.display = "none";
      };
      footerModal.appendChild(okButton);
      //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formBody[0].benifitPlan[0]");
      modal.style.display = "block";*/ 
      
      showErrorModal("Alert !","The following fields are required: First Name,Last Name,Empl ID");
      
    } 

function getPdf() {
     console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/cobrafinalnotice/cobra-final-notice');
            jsonData.append('fileName', First_Name.value + "_" + Last_Name.value +"("+Empl_ID.value+")"+"_"+ Date.now());          
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
 * @function cobrafinalnotice_cobra_final_notice.generated_RestButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_RestButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            ResetButtonFlag.value = true;
benefitLookup.value = null;						 
Last_Name.value = null; 
First_Name.value = null; 
Empl_ID.value = null; 
EMPL_RCD.value = null; 
Date_Initiated.value = null; 
Street_Address.value = null; 
City.value = null; 
Zip.value = null; 
State.value = null; 
ThePlan.value = null; 
EndOfCobraCoverageDate.value = null; 
EndOfEmploymentChk.value = null; 
EndOfEmploymentDate.value = null; 
ReductionHoursChk.value = null; 
ReductionHoursDate.value = null; 
DeathOfEmployeeChk.value = null; 
DeathOfEmployeeDate.value = null; 
DivorseChk.value = null; 
DivorceDate.value = null; 
LossOfDepChildStatusChk.value = null; 
LossOfDeptChildStatusDate.value = null; 
DissolutionChk.value = null; 
DissolutionDate.value = null; 
months.value = null; 
EmployeeNameChk.value = null; 
EmployeeName.value = null; 
SpouseNameChk.value = null; 
SpouseName.value = null; 
RegisteredDomesticPartnerNameChk.value = null; 
RegisteredDomesticPartnerName.value = null; 
DependentChildNameChk.value = null; 
DependentChildName.value = null; 
ChildNameChk.value = null; 
ChildName.value = null; 
CobraBegin.value = null; 
CobraEnds.value = null; 
HCRAYear.value = null; 
HealthPlan2.value = null; 
HealthPlanPrice.value = null; 
DentalPlan2.value = null; 
DentalPlanPrice.value = null; 
Vision2.value = null; 
VisionPrice.value = null; 
HCRA2.value = null; 
HCRAPrice.value = null; 
comment1.value = null; 
comment2.value = null; 
Comments.value = null; 
Contacts.value = null; 
ReplyBy.value = null; 
ThePlan1.value = null; 
DependentName1.value = null; 
DOB1.value = null; 
RelationshipToEmp1.value = null; 
SSN1.value = null;
DependentName2.value = null; 
DOB2.value = null; 
RelationshipToEmp2.value = null; 
SSN2.value = null; 
SSN3.value = null; 
DependentName3.value = null; 
DOB3.value = null; 
RelationshipToEmp3.value = null; 
SSN4.value = null; 
DependentName4.value = null; 
DOB4.value = null; 
RelationshipToEmp4.value = null; 
SSN5.value = null; 
DependentName5.value = null; 
DOB5.value = null; 
RelationshipToEmp5.value = null; 
chkHealth.value = null; 
HealthPlan4.value = null; 
chkVision.value = null; 
Vision4.value = null; 
chkDental.value = null; 
DentalPlan4.value = null; 
chkHealth1.value = null; 
HCRA4.value = null; 
chkDecline.value = null; 
MedicarePartAEntitledYes.value = null; 
MedicarePartAEntitledNo.value = null; 
MedicareEntitlement.value = null; 
Signature.value = null; 
ElectionDate.value = null; 
PrintName.value = null; 
RelationshipToIndividual.value = null; 
PrintAddress.value = null; 
TelephoneNumber.value = null; 
MedicalContactInfo.value = null; 
LogUser.value = null; 

        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_saveguidedraft1573212325966_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_saveguidedraft1573212325966_click0 = function (scope) {
    with(this) {
        with(scope) {
            SaveFormStatus.value = "1";
tempDateStatus.value  = "1";
if(Empl_ID.value !== null){
   aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);
}
handleDraftSave(this);



        }
	}
}
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_submit1573212270182_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobrafinalnotice_cobra_final_notice.generated_submit1573212270182_click0 = function (scope) {
    with(this) {
        with(scope) {
            //EmailAddress.value = "yjayaram@fullerton.edu";
//EmailAddress.value = "rama.devi@thoughtfocus.com";
//EmailAddress.value = "pushpa.kawadi@thoughtfocus.com";
//EmailAddress.value = "ram.singh@thoughtfocus.com";

var empRcd = EMPL_RCD.value;
var submitFlag = 0;

if(Last_Name.value !== null){
	EmailSubject.value = "COBRA Final Notice Form - "+ Last_Name.value;
}else{
 	EmailSubject.value = "COBRA Final Notice Form"; 
}

if(empRcd !== null && empRcd.length > 3){	 
  showErrorModal("Alert !", "Employee Record cannot be greater than 3 characters");
  submitFlag = 1;
}else{
  submitFlag = 0;
}

if(submitFlag === 0){
  aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);
  guideBridge.submit();
}
        }
	}
}
