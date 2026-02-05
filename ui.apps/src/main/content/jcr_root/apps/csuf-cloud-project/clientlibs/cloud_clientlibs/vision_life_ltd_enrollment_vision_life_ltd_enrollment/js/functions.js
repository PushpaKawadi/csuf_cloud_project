/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
             var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none";
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_ssn_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_ssn_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(EmpIdResult.value !== ssn.value){
if (this.value !== null) {
  
  changeTypePlan1.value = null;
  changeTypePlan2.value = null;
  changeTypePlan3.value = null;
  changeTypePlan4.value = null;
  if((this.value).indexOf("-") == -1){ 
    var numbers = this.value;
    this.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4); 
  }
  EmpIdResult.value = this.value;
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    var enteredSsn = this.value;
    $.ajax({
        type: 'GET',
        url: "/bin/getVisionLifeLtdLookup",
        data: {
            ssn: enteredSsn
        },
        dataType: 'json',
        success: function(myresponse) {
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            if (myresponse.length === 1) {

                serial.value = myresponse[0].Serial;
                var serRes = serial.value;
if(serRes.length == 1){
serial.value = "00".concat(serial.value);
}
if(serRes.length == 2){
serial.value = "0".concat(serial.value);
}

                agency.value = myresponse[0].CSU_SCO_AGENCY;
                cbid.value = myresponse[0].UNION_CD;
                middle_Name.value = myresponse[0].MIDDLE_NAME;
                last_Name.value = myresponse[0].LAST_NAME;
                first_Name.value = myresponse[0].FIRST_NAME;
                unit.value = myresponse[0].CSU_UNIT;
                classCode.value = myresponse[0].JOBCODE;
              empUserId.value = myresponse[0].EMP_USERID;
                employeeEmail.value = myresponse[0].EMP_EMAIL_ID;
                gifModal.style.display = "none";
                modal.style.display = "none";
            } else if (myresponse.length > 1) {

                gifModal.style.display = "none";
                modal.style.display = "block";

                var col = [];
                col.push("FIRST_NAME");
                col.push("LAST_NAME");
                col.push("MIDDLE_NAME");
                col.push("UNION_CD");
                col.push("CSU_UNIT");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "First_Name", "Last_Name", "Middle_Initial", "CBID","Unit"];
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
                        tabCell.innerHTML = myresponse[k][col[l]];
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
                            serial.value = myresponse[n].Serial;
                           var serRes = serial.value;
if(serRes.length == 1){
serial.value = "00".concat(serial.value);
}
if(serRes.length == 2){
serial.value = "0".concat(serial.value);
}
                            agency.value = myresponse[n].CSU_SCO_AGENCY;
                            cbid.value = myresponse[n].UNION_CD;
                            middle_Name.value = myresponse[n].MIDDLE_NAME;
                            last_Name.value = myresponse[n].LAST_NAME;
                            first_Name.value = myresponse[n].FIRST_NAME;
                            unit.value = myresponse[n].CSU_UNIT;
                            classCode.value = myresponse[n].JOBCODE;
                          employeeEmail.value = myresponse[n].EMP_EMAIL_ID;
                          empUserId.value = myresponse[n].EMP_USERID;
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
              ssn.value = null;
                classCode.value = null;
                serial.value = null;
                cbid.value = null;
                unit.value = null;
                first_Name.value = null;
                last_Name.value = null;
                middle_Name.value = null;
                agency.value = null;
                gifModal.style.display = "none";
            }
            ////////////////////////////////////////////
           
           
        }
    });
}
}
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_first_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_first_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_middle_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_middle_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_last_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_last_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_cbid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_cbid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            plan1.visible = false;
plan2.visible = false;
plan3.visible = false;
plan4.visible = false;
month1.value = null;
year1.value = null;
month2.value = null;
year2.value = null;
month3.value = null;
year3.value = null;
month4.value = null;
year4.value = null;
lifeCode = null;
ltdCode.value = null;
/*if(cbid.value == "R01"){
lifeCode.value ="-";
lifeCode.enabled = false;
}else if(cbid.value == "R02" || cbid.value == "R05" || cbid.value == "R07" || cbid.value == "R09"){
  lifeCode.value ="027";
lifeCode.enabled = false;
}else if(cbid.value == "R03"){
 lifeCode.value ="021";
lifeCode.enabled = false; 
}else if(cbid.value == "R04"){
 lifeCode.value ="024";
lifeCode.enabled = false; 
}else if(cbid.value == "R06"){
 lifeCode.value ="-";
lifeCode.enabled = false; 
}else if(cbid.value == "R08"){
 lifeCode.value ="023";
lifeCode.enabled = false; 
}else if(cbid.value == "R10"){
 lifeCode.value ="-";
lifeCode.enabled = false; 
}else if(cbid.value == "E99"){
 lifeCode.value ="-";
lifeCode.enabled = false; 
}else if(cbid.value == "C99"){
 lifeCode.value ="025";
lifeCode.enabled = false; 
}else if(cbid.value == "M80"){
 lifeCode.value ="020";
lifeCode.enabled = false; 
}else if(cbid.value == "M98"){
 lifeCode.value ="026";
lifeCode.enabled = false; 
}else{
  lifeCode.value =null;
lifeCode.enabled = true;  
}*/
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_cbid_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_cbid_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(cbid.value == "R01" || cbid.value == "R06" || cbid.value == "R10" || cbid.value == "E99"){
new3.value ="-";
delete3.value = "-";
changeTypePlan3.enabled = false;
}
if(cbid.value == "R02" || cbid.value == "R05" || cbid.value == "R07" || cbid.value == "09" || cbid.value == "R06" || cbid.value == "R08" || cbid.value == "R10" || cbid.value == "E99" || cbid.value == "C99"){
 
new4.value ="-";
delete4.value = "-";
changeTypePlan4.enabled = false;
}

        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_panel_13300831401577425647896_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_panel_13300831401577425647896_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_loggedInUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_loggedInUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;

  loggedInUser.value = userValue;
 
},
  error: function(error){
alert("error block="+error);
}
});

        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
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
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(this.value);
if (this.value == 1) {
 new1.value = "Yes";
  delete1.value = null;
   month1.value = null;
    year1.value = null;
    plan1.visible = true;
}
if(this.value === "2"){
  delete1.value = "Yes";
  new1.value = null;
  month1.value = null;
  year1.value = null;
  plan1.visible = false;
}
if(this.value === null){
  new1.value = null;
  delete1.value = null;
  month1.value = null;
  year1.value = null;
  plan1.visible = false;
}

        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(month1.value !== null)
{
  this.visible = true;
}else{
   this.visible = false;
}
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(this.value);
if (this.value == 1) {
 new2.value = "Yes";
  delete2.value = null;
   month2.value = null;
    year2.value = null;
    plan2.visible = true;
}
if(this.value === "2"){
  delete2.value = "Yes";
  new2.value = null;
  month2.value = null;
  year2.value = null;
  plan2.visible = false;
}
if(this.value === null){
  if(this.enabled == "true"){
  new2.value = null;
  delete2.value = null;
  }
  month2.value = null;
  year2.value = null;
  plan2.visible = false;
}


        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan2_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(month2.value !== null)
{
  this.visible = true;
}else{
   this.visible = false;
}
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(this.value);
if (this.value == 1) {
   new3.value = "Yes";
  delete3.value = null;
    month3.value = null;
    year3.value = null;
    if(cbid.value == "R01"){
lifeCode.value ="-";
lifeCode.enabled = false;
}else if(cbid.value == "R02" || cbid.value == "R05" || cbid.value == "R07" || cbid.value == "R09"){
  lifeCode.value ="027";
lifeCode.enabled = false;
}else if(cbid.value == "R03"){
 lifeCode.value ="021";
lifeCode.enabled = false; 
}else if(cbid.value == "R04"){
 lifeCode.value ="024";
lifeCode.enabled = false; 
}else if(cbid.value == "R06"){
 lifeCode.value ="-";
lifeCode.enabled = false; 
}else if(cbid.value == "R08"){
 lifeCode.value ="023";
lifeCode.enabled = false; 
}else if(cbid.value == "R10"){
 lifeCode.value ="-";
lifeCode.enabled = false; 
}else if(cbid.value == "E99"){
 lifeCode.value ="-";
lifeCode.enabled = false; 
}else if(cbid.value == "C99"){
 lifeCode.value ="025";
lifeCode.enabled = false; 
}else if(cbid.value == "M80"){
 lifeCode.value ="020";
lifeCode.enabled = false; 
}else if(cbid.value == "M98"){
 lifeCode.value ="026";
lifeCode.enabled = false; 
}else{
  lifeCode.value =null;
lifeCode.enabled = true;  
}
    plan3.visible = true;
}
if(this.value === "2"){
  delete3.value = "Yes";
  new3.value = null;
  month3.value = null;
  year3.value = null;
  lifeCode.value = null;
  plan3.visible = false;
}
if(this.value === null){
   if(this.enabled == "true"){
  new3.value = null;
  delete3.value = null;
   }
  month3.value = null;
  year3.value = null;
  lifeCode.value = null;
  plan3.visible = false;
}

        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan3_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(month3.value !== null)
{
  this.visible = true;
}else{
   this.visible = false;
}
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_changeTypePlan4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(this.value);
if (this.value == 1) {
 new4.value = "Yes";
   month4.value = null;
    year4.value = null;
 delete4.value = null;
if(cbid.value == "R01"){
ltdCode.value ="103";
ltdCode.enabled = false;
}else if(cbid.value == "R02" || cbid.value == "R05" || cbid.value == "R07" || cbid.value == "R09"){
  ltdCode.value ="-";
ltdCode.enabled = false;
}else if(cbid.value == "R03"){
 ltdCode.value ="101";
ltdCode.enabled = false; 
}else if(cbid.value == "R04"){
 ltdCode.value ="102";
ltdCode.enabled = false; 
}else if(cbid.value == "R06"){
 ltdCode.value ="-";
ltdCode.enabled = false; 
}else if(cbid.value == "R08"){
 ltdCode.value ="-";
ltdCode.enabled = false; 
}else if(cbid.value == "R10"){
 ltdCode.value ="-";
ltdCode.enabled = false; 
}else if(cbid.value == "E99"){
 ltdCode.value ="-";
ltdCode.enabled = false; 
}else if(cbid.value == "C99"){
 ltdCode.value ="-";
ltdCode.enabled = false; 
}else if(cbid.value == "M80"){
 ltdCode.value ="100";
ltdCode.enabled = false; 
}else if(cbid.value == "M98"){
 ltdCode.value ="104";
ltdCode.enabled = false; 
}else{
  ltdCode.value =null;
ltdCode.enabled = true;  
}


    plan4.visible = true;
}
if(this.value === "2"){
  delete4.value = "Yes";
  new4.value = null;
  month4.value = null;
  year4.value = null;
  ltdCode.value = null;
  plan4.visible = false;
}
if(this.value === null){
   if(this.enabled == "true"){
  new4.value = null;
  delete4.value = null;
   }
  month4.value = null;
  year4.value = null;
  ltdCode.value = null;
  plan4.visible = false;
}

        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_plan4_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(month4.value !== null)
{
  this.visible = true;
}else{
   this.visible = false;
}
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_form_Completed_By_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_form_Completed_By_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
 $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserDetails",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userName;
   authorized_Sign.value = userValue;
},
  error: function(error){
alert("error block="+error);
}
});
 
   authorized_Sign.enabled = false;
  date_Initiated.enabled = false;
if(date_Initiated.value === null){
 var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
date_Initiated.value = d;
  authorized_Sign.enabled = false;
   date_Initiated.enabled = false;
}
else{date_Initiated.enabled = false;
    authorized_Sign.enabled = false;
      date_Initiated.enabled = false;
    }
}else{
  authorized_Sign.value = null;
      date_Initiated.value = null;
}

//}
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_authorized_Sign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_authorized_Sign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_date_Initiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_date_Initiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visble = false;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (ssn.value !== null && form_Completed_By.value !== null && authorized_Sign.value !== null) {
  if (ssn.value !== null && changeTypePlan1.value === null && changeTypePlan2.value === null && changeTypePlan3.value === null && changeTypePlan4.value === null) {

    showErrorModal("Alert!","Please enroll or cancel coverage");

}else{
    GeneratePdfStep.value = "Draft";
  if (changeTypePlan1.value == 1) {
    new1.value = "Yes";
    delete1.value = null;
    month1.mandatory = "error";
    year1.mandatory = "error";

} else if(changeTypePlan1.value == "2"){
    new1.value = null;
    delete1.value = "Yes";
    month1.mandatory = "";
    year1.mandatory = "";
}else{
  new1.value = null;
    delete1.value = null;
}
if (changeTypePlan2.value == 1) {
    new2.value = "Yes";
    delete2.value = null;
    month2.mandatory = "error";
    year2.mandatory = "error";

} else if(changeTypePlan2.value == "2"){
    new2.value = null;
    delete2.value = "Yes";
    month2.mandatory = "";
    year2.mandatory = "";
}else{
   new2.value = null;
    delete2.value = null;
}
if (changeTypePlan3.value == 1) {
    new3.value = "Yes";
    delete3.value = null;
    month3.mandatory = "error";
    year3.mandatory = "error";
    lifeCode.mandatory = "error";
} else if (changeTypePlan3.value == 2) {
    new3.value = null;
    delete3.value = "Yes";
    month3.mandatory = "";
    year3.mandatory = "";
    lifeCode.mandatory = "";
}else{
//  if(changeTypePlan3.enabled == "true"){
    new3.value = null;
    delete3.value = null;
 // }
}
if (changeTypePlan4.value == 1) {
    new4.value = "Yes";
    delete4.value = null;
    month4.mandatory = "error";
    year4.mandatory = "error";
    ltdCode.mandatory = "error";
} else if (changeTypePlan4.value == 2){
    new4.value = null;
    delete4.value = "Yes";
    month4.mandatory = "";
    year4.mandatory = "";
    ltdCode.mandatory = "";
}else{
 // if(changeTypePlan4.enabled == "true"){
  new4.value = null;
  delete4.value = null;
  }

    getPdf();
}
}else{
  showErrorModal("Alert!","Please fill all the required fields");
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/vision-life-ltd-enrollment/vision-life-ltd-enrollment');
            jsonData.append('fileName', first_Name.value + "_" + last_Name.value +  "_" + Date.now());          
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
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_reset1577425618358_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_reset1577425618358_click0 = function (scope) {
    with(this) {
        with(scope) {
            ssn.value = null;
first_Name.value = null;
last_Name.value = null;
middle_Name.value = null;
cbid.value = null;
agency.value = null;
unit.value = null;
classCode.value = null;
serial.value = null;
new1.value = null;
year1.value = null;
month1.value = null;
delete1.value = null;
changeTypePlan1.value = null;
new2.value = null;
year2.value = null;
month2.value = null;
delete2.value = null;
changeTypePlan2.value = null;
new3.value = null;
year3.value = null;
month3.value = null;
delete3.value = null;
changeTypePlan3.value = null;
lifeCode.value = null;
new4.value = null;
year4.value = null;
month4.value = null;
delete4.value = null;
changeTypePlan4.value = null;
ltdCode.value = null;
remarks.value = null;
form_Completed_By.value = null;
authorized_Sign.value = null;
date_Initiated.value = null;
        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_saveguidedraft1577425612359_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_saveguidedraft1577425612359_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(ssn.value !== null){
  formSavedStatus.value = "1";
  aftiaDescCWID.value = first_Name.value + " " + last_Name.value;
  handleDraftSave(this);
}else{
  aftiaDescCWID.value = first_Name.value + " " + last_Name.value;
  handleDraftSave(this);
  
}



        }
	}
}
/**
 * @function vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_submit1577425606563_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vision_life_ltd_enrollment_vision_life_ltd_enrollment.generated_submit1577425606563_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (changeTypePlan1.value == 1) {
    new1.value = "Yes";
    delete1.value = null;
    month1.mandatory = "error";
    year1.mandatory = "error";

} else if(changeTypePlan1.value == "2"){
    new1.value = null;
    delete1.value = "Yes";
    month1.mandatory = "";
    year1.mandatory = "";
}else{
  new1.value = null;
    delete1.value = null;
}
if (changeTypePlan2.value == 1) {
    new2.value = "Yes";
    delete2.value = null;
    month2.mandatory = "error";
    year2.mandatory = "error";

} else if(changeTypePlan2.value == "2"){
    new2.value = null;
    delete2.value = "Yes";
    month2.mandatory = "";
    year2.mandatory = "";
}else{
   new2.value = null;
    delete2.value = null;
}
if (changeTypePlan3.value == 1) {
    new3.value = "Yes";
    delete3.value = null;
    month3.mandatory = "error";
    year3.mandatory = "error";
    lifeCode.mandatory = "error";
} else if (changeTypePlan3.value == 2) {
    new3.value = null;
    delete3.value = "Yes";
    month3.mandatory = "";
    year3.mandatory = "";
    lifeCode.mandatory = "";
}else{
  if(changeTypePlan3.enabled == "true"){
    new3.value = null;
    delete3.value = null;
  }
}
if (changeTypePlan4.value == 1) {
    new4.value = "Yes";
    delete4.value = null;
    month4.mandatory = "error";
    year4.mandatory = "error";
    ltdCode.mandatory = "error";
} else if (changeTypePlan4.value == 2){
    new4.value = null;
    delete4.value = "Yes";
    month4.mandatory = "";
    year4.mandatory = "";
    ltdCode.mandatory = "";
}else{
  if(changeTypePlan4.enabled == "true"){
  new4.value = null;
  delete4.value = null;
  }
}
var modal = document.getElementById('errorPopup');
if (ssn.value !== null && changeTypePlan1.value === null && changeTypePlan2.value === null && changeTypePlan3.value === null && changeTypePlan4.value === null) {

    showErrorModal("Alert!","Please enroll or cancel coverage");


} else {
    modal.style.display = "none";
  aftiaDescCWID.value = first_Name.value + " " + last_Name.value;
  if(last_Name.value !== null){
    EmailSubject.value = "Test - Vision LIFE-LTD Enrollment - "+last_Name.value;
  }else{
    EmailSubject.value = "Test - Vision LIFE-LTD Enrollment";
  }
  //employeeEmail.value = "DL-TotalWellness@fullerton.edu";
  employeeEmail.value = "yjayaram@fullerton.edu";
    guideBridge.submit();
}
        }
	}
}
