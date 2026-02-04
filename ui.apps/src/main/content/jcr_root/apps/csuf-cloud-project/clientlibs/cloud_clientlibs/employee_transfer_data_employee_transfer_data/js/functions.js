/**
 * @function employee_transfer_data_employee_transfer_data.generated_ReleasingDepartment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_ReleasingDepartment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if(ReleasingDepartment.value == "1"){
ReleasingAddress.value = "";
ReleasingAddress.value = "401 Golden Shore Long Beach, CA 90802-4275";
}else if(ReleasingDepartment.value == "2"){
ReleasingAddress.value = "";
ReleasingAddress.value = "200 Maritime Academy Drive Vallejo, CA 94590";
}else if(ReleasingDepartment.value == "3"){
ReleasingAddress.value = "";
ReleasingAddress.value =  "9001 Stockdale Highway Bakersfield, CA 93311-1099";
}else if(ReleasingDepartment.value == "4"){
ReleasingAddress.value = "";
ReleasingAddress.value = "P.O. Box 2862 Camarillo, CA 93011-2862";
}else if(ReleasingDepartment.value == "5"){
ReleasingAddress.value = "";
ReleasingAddress.value =  "400 W. First St. Chico, CA 95929";
}else if(ReleasingDepartment.value == "6"){
ReleasingAddress.value = "";
ReleasingAddress.value =  "1000 E. Victoria Street Carson, CA 90747";
}else if(ReleasingDepartment.value == "7"){
ReleasingAddress.value = "";
ReleasingAddress.value = "5241 N. Maple Ave. Fresno, CA 93740";
}else if(ReleasingDepartment.value == "8"){
ReleasingAddress.value = "";
ReleasingAddress.value = "800 N. State College Boulevard Fullerton, CA 92631";
}else if(ReleasingDepartment.value == "9"){
ReleasingAddress.value = "";
ReleasingAddress.value = "12901 Euclid Street Garden Grove, CA 92840";
}else if(ReleasingDepartment.value == "10"){
ReleasingAddress.value = "";
ReleasingAddress.value = "125 N. Broadway Ste. A Santa Ana, CA 92701";
}else if(ReleasingDepartment.value == "11"){
ReleasingAddress.value = "";
ReleasingAddress.value = "29000 Marguerite Parkway Mission Viejo, CA 92692";
}else if(ReleasingDepartment.value == "12"){
ReleasingAddress.value = "";
ReleasingAddress.value =  "25800 Carlos B. Blvd. Hayward, CA 94542";
}else if(ReleasingDepartment.value == "13"){
ReleasingAddress.value = "";
ReleasingAddress.value = "1 Harpst Street Arcata, CA 95521";
}else if(ReleasingDepartment.value == "14"){
ReleasingAddress.value = "";
ReleasingAddress.value = "5151 State University Drive Los Angeles, CA 90032";
}else if(ReleasingDepartment.value == "15"){
ReleasingAddress.value = "";
ReleasingAddress.value = "1250 Bellflower Boulevard Long Beach, CA 90840";
}else if(ReleasingDepartment.value == "16"){
ReleasingAddress.value = "";
ReleasingAddress.value = "100 Campus Center Seaside, CA 93955";
}else if(ReleasingDepartment.value == "17"){
ReleasingAddress.value = "";
ReleasingAddress.value = "3801 West Temple Avenue Pomona, CA 91768";
}else if(ReleasingDepartment.value == "18"){
ReleasingAddress.value = "";
ReleasingAddress.value = "18111 Nordoff Street Northridge, CA 91330";
}else if(ReleasingDepartment.value == "19"){
ReleasingAddress.value = "";
ReleasingAddress.value =  "6000 J Street Sacramento, CA 95819";
}else if(ReleasingDepartment.value == "20"){
ReleasingAddress.value = "";
ReleasingAddress.value = "5500 University Parkway San Bernardino, CA 92407-2397";
}else if(ReleasingDepartment.value == "21"){
ReleasingAddress.value = "";
ReleasingAddress.value = "5500 Campanile Drive San Diego, CA 92182-0763";
}else if(ReleasingDepartment.value == "22"){
ReleasingAddress.value = "";
ReleasingAddress.value = "1600 Holloway Avenue San Francisco, CA 94132";
}else if(ReleasingDepartment.value == "23"){
ReleasingAddress.value = "";
ReleasingAddress.value = "One Washington Square San Jose, CA 95192";
}else if(ReleasingDepartment.value == "24"){
ReleasingAddress.value = "";
ReleasingAddress.value =  "Cal Poly University San Luis Obispo, CA 93407";
}else if(ReleasingDepartment.value == "25"){
ReleasingAddress.value = "";
ReleasingAddress.value = "333 So. Twin Oaks Valley Rd. San Marcos, CA 92096" ;
}else if(ReleasingDepartment.value == "26"){
ReleasingAddress.value = "";
ReleasingAddress.value = "1801 East Cotati Avenue Rohnert Park, CA 94928" ;
}else if(ReleasingDepartment.value == "27"){
ReleasingAddress.value = "";
ReleasingAddress.value = "801 W. Monte Vista Avenue Turlock, CA 95382" ;
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_AppointingDepartment_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_AppointingDepartment_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_ReleasingAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_ReleasingAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_AppointingAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_AppointingAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SSN_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SSN_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(  formSavedStatus.value !== "1"){
if (this.value !== null) {
 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  if((this.value).indexOf("-") == -1){ 
    var numbers = this.value;
    this.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4); 
  }
    var enteredSsn = this.value;
    $.ajax({
        type: 'GET',
        url: "/bin/getEmpTransferData",
        data: {
            ssn: enteredSsn
        },
        dataType: 'json',
        success: function(myresponse) {
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            if (myresponse.length === 1) {

                EmployeeFirstName.value = myresponse[0].FIRST_NAME;
                EmployeeLastName.value = myresponse[0].LAST_NAME;
                BirthDate.value = myresponse[0].BIRTHDATE;
                ClassCode.value = myresponse[0].JOBCODE;
                Classification.value = myresponse[0].DESCR;
                CBID.value = myresponse[0].UNION_CD;
                Timebase1.value = myresponse[0].FULL_PART_TIME;
                
                gifModal.style.display = "none";
                modal.style.display = "none";
            } else if (myresponse.length > 1) {

                gifModal.style.display = "none";
                modal.style.display = "block";

                var col = [];
           
                col.push("FIRST_NAME");
                col.push("LAST_NAME");
                col.push("BIRTHDATE");
                col.push("JOBCODE");
                col.push("DESCR");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "First_Name", "Last_Name", "BirthDate","Jobcode","Classification"];
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

                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                      if(myresponse[k][col[l]].indexOf("00:00:00.0") !== -1){
                         tabCell.innerHTML = (myresponse[k][col[l]]).replace("00:00:00.0","");
                      }else{
                         tabCell.innerHTML = myresponse[k][col[l]];
                      }
                       
                    }
                }
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
                var footerModal = document.getElementById("modal_footer");
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    var n;
					var rButtonStatus;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {

                           rButtonStatus = false;
                        } else {
                            EmployeeFirstName.value = myresponse[n].FIRST_NAME;
                EmployeeLastName.value = myresponse[n].LAST_NAME;
                BirthDate.value = myresponse[n].BIRTHDATE;
                ClassCode.value = myresponse[n].JOBCODE;
                Classification.value = myresponse[n].DESCR;
                CBID.value = myresponse[n].UNION_CD;
                Timebase1.value = myresponse[n].FULL_PART_TIME;
							  rButtonStatus = true;
                            modal.style.display = "none";
                            break;
                        }
                    }
                  if (rButtonStatus === false) {
                            showErrorModal("Alert!","Please select the department");
                            modal.style.display = "block";
                        }
                    };

               
                footerModal.appendChild(okButton);
            } else {
                showErrorModal("Alert!","No matching records found");
                EmployeeFirstName.value = "";
                EmployeeLastName.value = "";
                BirthDate.value = "";
                ClassCode.value = "";
                Classification.value = "";
                CBID.value = "";
                Timebase1.value = "";
                gifModal.style.display = "none";
            }
            ////////////////////////////////////////////
           
           
        }
    });
}else {
  
                showErrorModal("Alert!","No matching records found");
                EmployeeFirstName.value = "";
                EmployeeLastName.value = "";
                BirthDate.value = "";
                ClassCode.value = "";
                Classification.value = "";
                CBID.value = "";
                Timebase1.value = "";
                gifModal.style.display = "none";
            }
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_EmployeeLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_EmployeeLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_EmployeeFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_EmployeeFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_BirthDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_BirthDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_CBID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_CBID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_JobCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_JobCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_Classification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_Classification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_Timebase1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_Timebase1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_ClassCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_ClassCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_formSavedStatus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_formSavedStatus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
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
 * @function employee_transfer_data_employee_transfer_data.generated_CodeNumber1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_CodeNumber1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  Amount1.mandatory = "error";
}else{
    Amount1.mandatory = "";
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_Amount1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_Amount1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.value = "$"+((this.value).replace("$",""));

if(this.value !== null){
  CodeNumber1.mandatory = "error";
}else{
    CodeNumber1.mandatory = "";
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_addDeduction_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_addDeduction_click0 = function (scope) {
    with(this) {
        with(scope) {
            payrolDeductionRepeatablePanel.instanceManager.addInstance();
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_removePayrollDeduction_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_removePayrollDeduction_click0 = function (scope) {
    with(this) {
        with(scope) {
            payrolDeductionRepeatablePanel.instanceManager.removeInstance((payrolDeductionRepeatablePanel.instanceManager.instances).length - 1);
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_TimePaidStandard_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_TimePaidStandard_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(timepaidFlag.value === null){
if(this.value !== null){
  TimePaidDays.value = null;
  TimePaidHours.value = null;
}
}
timepaidFlag.value = null;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_TimePaidDays_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_TimePaidDays_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(TimePaidDays.value !== null || TimePaidHours.value !== null){
  TimePaidStandard.value = null;
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_TimePaidHours_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_TimePaidHours_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(TimePaidDays.value !== null || TimePaidHours.value !== null){
  TimePaidStandard.value = null;
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_PersonalHolidayYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_PersonalHolidayYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(personalHolidayHoursFlag.value === null){
if(this.value !== null){
  PersonalHolidayHours.enabled = true;
   PersonalHolidayHours.mandatory = "error";
}else{
  PersonalHolidayHours.value = "";
   PersonalHolidayHours.enabled = false;
  PersonalHolidayHours.mandatory = "";
}
}else{
  debugger;
  if(this.value !== null){
    PersonalHolidayHours.enabled = true;
   PersonalHolidayHours.mandatory = "error";
  }

}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_PersonalHolidayHours_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_PersonalHolidayHours_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(personalHolidayHoursFlag.value === null){
this.enabled = false;
}
personalHolidayHoursFlag.value = null;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_PersonalHolidayNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_PersonalHolidayNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(personalHolidayUsedFlag.value === null){
if(this.value !== null){
  PersonalHolidayUsed.enabled = true;
   PersonalHolidayUsed.mandatory = "error";
}else{
  PersonalHolidayUsed.value = "";
   PersonalHolidayUsed.enabled = false;
  PersonalHolidayUsed.mandatory = "";
}
}else{
  
  if(this.value !== null){
    PersonalHolidayUsed.enabled = true;
   PersonalHolidayUsed.mandatory = "error";
  }

}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_PersonalHolidayUsed_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_PersonalHolidayUsed_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(personalHolidayUsedFlag.value === null){
this.enabled = false;
}
personalHolidayUsedFlag.value = null;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(saturdayHolidayHoursFlag.value === null){
if(this.value !== null){
  SaturdayHolidayHours.enabled = true;
   SaturdayHolidayHours.mandatory = "error";
}else{
  SaturdayHolidayHours.value = "";
   SaturdayHolidayHours.enabled = false;
  SaturdayHolidayHours.mandatory = "";
}
}else{  
  if(this.value !== null){
    SaturdayHolidayHours.enabled = true;
   SaturdayHolidayHours.mandatory = "error";
  }
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayHours_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayHours_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(saturdayHolidayHoursFlag.value === null){
this.enabled = false;
}
saturdayHolidayHoursFlag.value = null;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(saturdayHolidayUsedFlag.value === null){
if(this.value !== null){
  SaturdayHolidayUsed.enabled = true;
   SaturdayHolidayUsed.mandatory = "error";
}else{
  SaturdayHolidayUsed.value = "";
   SaturdayHolidayUsed.enabled = false;
  SaturdayHolidayUsed.mandatory = "";
}
}else{  
  if(this.value !== null){
    SaturdayHolidayUsed.enabled = true;
   SaturdayHolidayUsed.mandatory = "error";
  }
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayUsed_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SaturdayHolidayUsed_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(saturdayHolidayUsedFlag.value === null){
this.enabled = false;
}
saturdayHolidayUsedFlag.value = null;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_EmployeeUnderAnnualLeaveCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_EmployeeUnderAnnualLeaveCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if(dateFlag.value === null){
if(this.value !== null){
  AnnualLeaveEffectiveDate.enabled = true;
  AnnualLeaveEffectiveDate.mandatory = "error";
}else{
  AnnualLeaveEffectiveDate.enabled = false;
  AnnualLeaveEffectiveDate.mandatory = "";
  AnnualLeaveEffectiveDate.value = "";
}
}else{  
  if(this.value !== null){
    AnnualLeaveEffectiveDate.enabled = true;
   AnnualLeaveEffectiveDate.mandatory = "error";
  }
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_AnnualLeaveEffectiveDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_AnnualLeaveEffectiveDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(dateFlag.value === null){
AnnualLeaveEffectiveDate.enabled = false;
}
dateFlag.value = null;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_selectHourMin_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_selectHourMin_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var str1 = this.value;
debugger;
var res1 = (str1.substring(0,str1.lastIndexOf(":")));
var res2 = (str1.substring(str1.lastIndexOf(":"),str1.length));
SelectMinute.value = res2;
SelectHour.value = res1;
//this.value = str1;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SignCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        SignedDate.value = d;

        SignedDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    Signature.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        Signature.enabled = false;
        
    
} else {
    Signature.value = "";
    SignedDate.value = "";
   
}
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_Signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_Signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_SignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_SignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_hiddenFieldsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_hiddenFieldsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_workflow_initiator_init0 = function (scope) {
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
 * @function employee_transfer_data_employee_transfer_data.generated_generatePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_generatePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(SSN.value !== null) {
getPdf();
}else{
  showErrorModal("Alert!","Please enter Social Security Number.");
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/employee-transfer-data/employee-transfer-data');
            jsonData.append('fileName', EmployeeFirstName.value + "_" + EmployeeLastName.value + "(" + SSN.value + ")" + "_" + Date.now());          
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
 * @function employee_transfer_data_employee_transfer_data.generated_reset1604402952766_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_reset1604402952766_click0 = function (scope) {
    with(this) {
        with(scope) {
            
guideBridge.reset();


        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_saveguidedraft1600413569176_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_saveguidedraft1600413569176_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(SSN.value !== null){
  formSavedStatus.value = "1";
  timepaidFlag.value = "1";
  dateFlag.value  = "1";
  personalHolidayHoursFlag.value ="1";
  personalHolidayUsedFlag.value = "1";
  saturdayHolidayHoursFlag.value = "1";
  saturdayHolidayUsedFlag.value = "1";
  if(SSN.value !== null){
  aftiaDescCWID.value = EmployeeFirstName.value+" "+EmployeeLastName.value;
}
  handleDraftSave(this);
}else{
  timepaidFlag.value = "1";
  dateFlag.value  = "1";
  personalHolidayHoursFlag.value ="1";
  personalHolidayUsedFlag.value = "1";
  saturdayHolidayHoursFlag.value = "1";
  saturdayHolidayUsedFlag.value = "1";
  if(SSN.value !== null){
  aftiaDescCWID.value = EmployeeFirstName.value+" "+EmployeeLastName.value;
}
    handleDraftSave(this);
  
}


        }
	}
}
/**
 * @function employee_transfer_data_employee_transfer_data.generated_submit1600413563756_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
employee_transfer_data_employee_transfer_data.generated_submit1600413563756_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(SSN.value !== null){
  aftiaDescCWID.value = EmployeeFirstName.value+" "+EmployeeLastName.value;
}
guideBridge.submit();


        }
	}
}
