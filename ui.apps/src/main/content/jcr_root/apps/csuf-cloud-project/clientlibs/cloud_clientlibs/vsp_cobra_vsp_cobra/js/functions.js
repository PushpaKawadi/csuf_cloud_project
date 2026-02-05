/**
 * @function vsp_cobra_vsp_cobra.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var userID = "rpurohit";
  
    $.ajax({
        type: 'GET',
        url: "/bin/getCatastrophicLeaveRequest",
        data: {
            //cwid: cwid123,
            userID: userID
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
           // var modal = document.getElementById('myModal');
            //var span = document.getElementsByClassName("close")[0];
            debugger;
            if (myresopnse.length === 1) {
              
          
                debugger;
                DepartmentName.value = myresopnse[0].DEPTNAME;
                EMPLRCD.value = myresopnse[0].EMPL_RCD;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                DepartmentID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EMPLID.value = myresopnse[0].EMPLID;
                
            }
        }
    });
          
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
             var gifModal = document.getElementById('gifModal');
gifModal.sytle.display = "none";
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_Disabledonthedateofqualifyingevent_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_Disabledonthedateofqualifyingevent_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  //this.value = "";
  Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage36.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_Reductionofhours_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_Reductionofhours_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  //Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage18.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_Legalseparationordivorse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_Legalseparationordivorse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  Reductionofhours.value = "";
  //Legalseparationordivorse.value = "";
  Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage36.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_Retiree_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_Retiree_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  //Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage18.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_DissolutionofRegisteredDomesticPartnership_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_DissolutionofRegisteredDomesticPartnership_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  Retiree.value = "";
  //DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage36.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_SurvivingDependentsWidow_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_SurvivingDependentsWidow_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  //SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage36.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_Lossofchildsdependentstatus_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_Lossofchildsdependentstatus_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  //Lossofchildsdependentstatus.value = "";
  Terminationofemployment.value = "";
  monthcoverage36.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_Terminationofemployment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_Terminationofemployment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  Disabledonthedateofqualifyingevent.value = "";
  Reductionofhours.value = "";
  Legalseparationordivorse.value = "";
  Retiree.value = "";
  DissolutionofRegisteredDomesticPartnership.value = "";
  SurvivingDependentsWidow.value = "";
  Lossofchildsdependentstatus.value = "";
  //Terminationofemployment.value = "";
  monthcoverage36.value = "1";
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_monthcoverage18_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_monthcoverage18_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  //this.value = "";
  monthcoverage29.value = "";
  monthcoverage36.value = "";
 
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_monthcoverage29_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_monthcoverage29_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  monthcoverage18.value = "";
  //monthcoverage29.value = "";
  monthcoverage36.value = "";
 
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_monthcoverage36_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_monthcoverage36_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value  === "1"){
  monthcoverage18.value = "";
  monthcoverage29.value = "";
  //monthcoverage36.value = "";
 
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_panel1587123018548_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_panel1587123018548_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FTE_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FTE_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var fteValue = this.value;
var curFTSalVal = CurrentFTMonthlySalary.value;
var result = curFTSalVal/fteValue;

CurrentActualSalary.value =result;
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
if(cwid !== null){
        $.ajax({
            type: 'GET',
            url: "/bin/getPersonnelActiveNotice",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

               FirstName.value=myresopnse[0].FIRST_NAME;
               LastName.value=myresopnse[0].LAST_NAME;
               MiddleInitial.value = myresopnse[0].MIDDLE_NAME;
               EmpRCD.value = myresopnse[0].EMPL_RCD;
               CurrentCMSNo.value = myresopnse[0].POSITION_NBR;
                CurrentAgency.value = myresopnse[0].CSU_SCO_AGENCY;
                CurrentReptUnit.value = myresopnse[0].CSU_UNIT;
                CurrentClassCode.value = myresopnse[0].JOBCODE;
                CurrentTimeBase.value = myresopnse[0].STD_HOURS;
                CurrentDivision.value = myresopnse[0].FUL_DIVISION_NAME;
                CurrentMPPSupName.value = myresopnse[0].SUPERVISOR_NAME;
                CurrentFTMonthlySalary.value  = myresopnse[0].MONTHLY_RT;
                 CurrentActualSalary.value= myresopnse[0].MONTHLY_RT;
                  
                  CurrentCBID.value= myresopnse[0].UNION_CD;
                  CurrentDept.value= myresopnse[0].DEPTNAME;
                  
                   CurrentCollege.value= myresopnse[0].FUL_COLLEGE_NAME;
                   CurrentRangeCode.value= myresopnse[0].GRADE;
                  CurrentDeptID.value= myresopnse[0].DEPTID;
                  
                  CurrentClassificationTitle.value= myresopnse[0].DESCR;
                  
                  FTE.value = myresopnse[0].FTE;
                  

                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    //col.push("EMPLID");

                    col.push("LAST_NAME");

                    col.push("FIRST_NAME");
                  
                  col.push("MIDDLE_NAME");
                  
                   col.push("CSU_SCO_AGENCY");
                  
                   col.push("CSU_UNIT");

                    //col.push("DEPTID");

                    //col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    //var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                    var headings = ["", "Last Name", "First Name", "Middle Initial", "Agency", "Unit"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresopnse.length; k++) {
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
                            tabCell.innerHTML = myresopnse[k][col[l]];
                        }
                    }

                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    /*var cancelButton = document.createElement("input");
                    cancelButton.type = "button";
                    cancelButton.setAttribute("class", "cancelBtn");
                    cancelButton.id = "cBtn";
                    cancelButton.value = "Cancel";
                    cancelButton.onclick = function(event) {
                        modal.style.display = "none";
                    };
                    

                    footerModal.appendChild(cancelButton);*/
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
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

							FirstName.value=myresopnse[n].FIRST_NAME;
               LastName.value=myresopnse[n].LAST_NAME;
               MiddleInitial.value = myresopnse[n].MIDDLE_NAME;
               EmpRCD.value = myresopnse[n].EMPL_RCD;
               CurrentCMSNo.value = myresopnse[n].POSITION_NBR;
                CurrentAgency.value = myresopnse[n].CSU_SCO_AGENCY;
                CurrentReptUnit.value = myresopnse[n].CSU_UNIT;
                CurrentClassCode.value = myresopnse[n].JOBCODE;
                CurrentTimeBase.value = myresopnse[n].STD_HOURS;
                CurrentDivision.value = myresopnse[n].FUL_DIVISION_NAME;
                CurrentMPPSupName.value = myresopnse[n].SUPERVISOR_NAME;
                CurrentFTMonthlySalary.value  = myresopnse[n].MONTHLY_RT;
                 CurrentActualSalary.value= myresopnse[n].MONTHLY_RT;
                  
                  CurrentCBID.value= myresopnse[n].UNION_CD;
                  CurrentDept.value= myresopnse[n].DEPTNAME;
                  
                   CurrentCollege.value= myresopnse[n].FUL_COLLEGE_NAME;
                   CurrentRangeCode.value= myresopnse[n].GRADE;
                  CurrentDeptID.value= myresopnse[n].DEPTID;
                  
                  CurrentClassificationTitle.value= myresopnse[n].DESCR;
                               FTE.value = myresopnse[n].FTE;
							
                            /*DeptName.value = myresopnse[n].DEPTNAME;
							BargainingUnit.value = myresopnse[n].UNION_CD;
							PhoneExt.value = myresopnse[n].EXTENSION;
							DeptID.value = myresopnse[n].DEPTID;
							LastName.value = myresopnse[n].LAST_NAME;
							FirstName.value = myresopnse[n].FIRST_NAME;
                            EmpStatus.value=myresopnse[n].STATUS;
                            logUser.value =myresopnse[n].USERID;
                            var userIDVal  = myresopnse[n].USERID;
                			Email.value = userIDVal.concat("@exchange.fullerton.edu");*/
                              rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    alert("No matching records found");
                
                	 /*DeptName.value = null;
                    BargainingUnit.value = null;
                    PhoneExt.value = null;
                    DeptID.value = null;
                    LastName.value = null;
                    FirstName.value =null;
                    EmpStatus.value=null;
                	Email.value = null;*/
           			 gifModal.style.display = "none";

                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;

logUser.value = userValue;
  
  //alert(logUser.value);
}
}
});
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_SSN_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_SSN_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
if(formSavedStatus.value !== "1"){

if((this.value).indexOf("-") == -1){ 
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}

//alert(cwid);
if(cwid !== null){
  var gifModal = document.getElementById('gifModal');
   gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNew",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  City.value = myresopnse[0].CITY;
                 MiddleInitial.value = myresopnse[0].MIDDLE_NAME;
                  BirthDate.value  = myresopnse[0].BIRTHDATE;
                  
                  LastName.value  = myresopnse[0].LAST_NAME;
                  FirstName.value  = myresopnse[0].FIRST_NAME;
                  StreetAddress.value = myresopnse[0].ADDRESS1;
                  State.value = myresopnse[0].STATE;
                  ZipCode.value = myresopnse[0].POSTAL;
                 //EmpEmail.value = myresopnse[0].EMP_EMAIL_ID;
                   EmpEmail.value ="shreyas.manjunatha@thoughtfocus.com";
                 
                  
                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    //col.push("EMPLID");

                    col.push("LAST_NAME");

                    col.push("FIRST_NAME");
                  
                  col.push("MIDDLE_NAME");
                  
                   col.push("BIRTHDATE");
                  
                   col.push("ADDRESS1");

                    col.push("DEPTNAME");

                    col.push("JOBCODE");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    //var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                    var headings = ["", "Last Name", "First Name", "Middle Initial", "BirthDate", "Address","Dept Name", "Job Code"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < myresopnse.length; k++) {
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
                            
                          if(myresopnse[k][col[l]].indexOf(' 00:00:00.0') !== -1){
                           
                             tabCell.innerHTML = myresopnse[k][col[l]].replace(" 00:00:00.0","");
                          }else{
                            
                            tabCell.innerHTML = myresopnse[k][col[l]];
                          }
                            
                        }
                    }

                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                   
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
                    okButton.onclick = function(event) {
                        
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {
								
				City.value = myresopnse[n].CITY;
                 MiddleInitial.value = myresopnse[n].MIDDLE_NAME;
                  BirthDate.value  = myresopnse[n].BIRTHDATE;
                  //var birth_dt = (myresopnse[n].BIRTHDATE).replace(" 00:00:00.0","");
                  //BirthDate.value  = birth_dt;
                   
                  LastName.value  = myresopnse[n].LAST_NAME;
                  FirstName.value  = myresopnse[n].FIRST_NAME;
                  StreetAddress.value = myresopnse[n].ADDRESS1;
                  State.value = myresopnse[n].STATE;
                  ZipCode.value = myresopnse[n].POSTAL;
                 // EmpEmail.value = myresopnse[n].EMP_EMAIL_ID;
                               EmpEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                  
                  

                              rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                  //  alert("No matching records found");
                 showErrorModal("Alert!","No matching records found");
                	
                City.value = "";
                 MiddleInitial.value = "";
                  BirthDate.value  = "";
                  LastName.value  = "";
                  FirstName.value  = "";
                  StreetAddress.value = "";
                  State.value = "";
                  ZipCode.value = "";
           		gifModal.style.display = "none";

                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_SSNEmp_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_SSNEmp_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
if((this.value).indexOf("-") == -1){ 
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
if(cwid !== null){
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraFormerEmployee",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length > 0) {
                  CurEmpMiddleInitial.value = myresopnse[0].MIDDLE_NAME;
                  CurEmpLastName.value  = myresopnse[0].LAST_NAME;
                  CurEmpFirstName.value  = myresopnse[0].FIRST_NAME;
                  
                  
                gifModal.style.display = "none";

                }
               /*else if (myresopnse.length > 1) {

                } */
              else {
                    //alert("No matching records found");
                    showErrorModal("Alert!","No matching records found");
                
                	 /*DeptName.value = null;
                    BargainingUnit.value = null;
                    PhoneExt.value = null;
                    DeptID.value = null;
                    LastName.value = null;
                    FirstName.value =null;
                    EmpStatus.value=null;
                	Email.value = null;*/
           			 gifModal.style.display = "none";

                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;


depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
//if(depName !== null &&   DepHidden1.value === null){
  var gifModal = document.getElementById('gifModal');
  // gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName1.value = myresopnse[0].NAME;
                  FamilyMemberSSN1.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate1.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel1.value = myresopnse[0].RELATIONSHIP;
                 // depNameEntered.value = depName;
                  DepHidden1.value = "1";

				 //gifModal.style.display = "none";

                } else {
                //showErrorModal("Alert!","No matching records found");
				//gifModal.style.display = "none";

                }
            }
        });
} 


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;

depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);
if(depName !== null){
//if(depName !== null && DepHidden2.value === null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName2.value = myresopnse[0].NAME;
                  FamilyMemberSSN2.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate2.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel2.value = myresopnse[0].RELATIONSHIP;
                  DepHidden2.value = "1";
                  
				// gifModal.style.display = "none";

                } 
              else {
                /*showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;

depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
//if(depName !== null && DepHidden3.value === null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName3.value = myresopnse[0].NAME;
                  FamilyMemberSSN3.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate3.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel3.value = myresopnse[0].RELATIONSHIP;
                  DepHidden3.value = "1";
                  
				 //gifModal.style.display = "none";

                } 
              else {
                /*showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;

depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName4.value = myresopnse[0].NAME;
                  FamilyMemberSSN4.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate4.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel4.value = myresopnse[0].RELATIONSHIP;
                  DepHidden4.value = "1";
                  
				 //gifModal.style.display = "none";

                } 
              else {
                /*showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;

depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
//if(depName !== null && DepHidden5.value === null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName5.value = myresopnse[0].NAME;
                  FamilyMemberSSN5.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate5.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel5.value = myresopnse[0].RELATIONSHIP;
                  DepHidden5.value = "1";
                  
				 //gifModal.style.display = "none";

                } 
              else {
               /* showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;


depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName6.value = myresopnse[0].NAME;
                  FamilyMemberSSN6.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate6.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel6.value = myresopnse[0].RELATIONSHIP;
                  
                  DepHidden6.value = "1";

				 //gifModal.style.display = "none";

                } else {
               /* showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
} 


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;


depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName7.value = myresopnse[0].NAME;
                  FamilyMemberSSN7.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate7.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel7.value = myresopnse[0].RELATIONSHIP;
                  
                  DepHidden7.value = "1";

				 //gifModal.style.display = "none";

                } else {
               /* showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
} 


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;


depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName8.value = myresopnse[0].NAME;
                  FamilyMemberSSN8.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate8.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel8.value = myresopnse[0].RELATIONSHIP;
                  
                  DepHidden8.value = "1";

				 //gifModal.style.display = "none";

                } else {
                /*showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
} 


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName9_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName9_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;


depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName9.value = myresopnse[0].NAME;
                  FamilyMemberSSN9.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate9.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel9.value = myresopnse[0].RELATIONSHIP;
                  
                  DepHidden9.value = "1";

				 //gifModal.style.display = "none";

                } else {
                /*showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
} 


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN9_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN9_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemName10_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemName10_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = SSN.value;
var depName = this.value;


depName = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);

if(depName !== null){
  var gifModal = document.getElementById('gifModal');
   //gifModal.style.display = "block";   
        $.ajax({
            type: 'GET',
            url: "/bin/getVSPCobraNameLookup",
            data: {
                cwid: cwid,
              	dependentName : depName
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresopnse.length === 1) {
                  
                  FamilyMemName10.value = myresopnse[0].NAME;
                  FamilyMemberSSN10.value = myresopnse[0].NATIONAL_ID;
                  FamilyMemberBirthdate10.value = myresopnse[0].BIRTHDATE;
                  FamilyMembemRel10.value = myresopnse[0].RELATIONSHIP;
                  
                  DepHidden10.value = "1";

				// gifModal.style.display = "none";

                } else {
                /*showErrorModal("Alert!","No matching records found");
				gifModal.style.display = "none";*/

                }
            }
        });
} 


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_FamilyMemberSSN10_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_FamilyMemberSSN10_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_signatureReview_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_signatureReview_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_checkbox_20772941081589972929003_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_checkbox_20772941081589972929003_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  var fnVal = FirstName.value;
  var lnVal = LastName.value;
  var signEmp = fnVal.concat(" ").concat(lnVal);
  SignatureofCOBRAApplicant.value = signEmp;
 // EmpSign2.value = signEmp;
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  
  CobraSignDate.value=TzoneDate;
  CobraSignDate.enabled = false;
  
  BenefitsSignDate.value=TzoneDate;
  BenefitsSignDate.enabled = false;
  
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated__valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated__valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  /*var fnVal = FirstName.value;
  var lnVal = LastName.value;
  var signEmp = fnVal.concat(" ").concat(lnVal);
  EmpSign.value = signEmp;
  EmpSign2.value = signEmp;*/
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  
  CobraSignDate.value=TzoneDate;
  CobraSignDate.enabled = false;
}
        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (SSN.value !== null && FirstName.value !== null && LastName.value !== null && CurEmpLastName.value !== null && CurEmpFirstName.value !== null && SSNEmp.value !== null){
  submitFlag=0;
      
 } else{
   
   showErrorModal("Alert !","Please enter Employee First Name,Employee Last Name, SSN");
   
  
   submitFlag=1;
    
 }


if( submitFlag === 0){
  getPdf();
}

  

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/vsp-cobra/vsp-cobra');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + SSNEmp.value + ")" + "_" + Date.now());          
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
 * @function vsp_cobra_vsp_cobra.generated_saveguidedraft1589870024328_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_saveguidedraft1589870024328_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(SSN.value !== null){
  formSavedStatus.value = "1";
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value);
  handleDraftSave(this);
}else{
  //aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value);
  handleDraftSave(this);
}


        }
	}
}
/**
 * @function vsp_cobra_vsp_cobra.generated_submit1589870048344_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
vsp_cobra_vsp_cobra.generated_submit1589870048344_click0 = function (scope) {
    with(this) {
        with(scope) {
            //BenefitsEmail.value = "DL-TotalWellness@FULLERTON.EDU";
BenefitsEmail.value = "shreyas.manjunatha@thoughtfocus.com";
//EmpEmail.value="yjayaram@fullerton.edu";
//BenefitsEmail.value = "pushpa.kawadi@thoughtfocus.com";


if(LastName.value !== null){
	EmailSubject.value = "VSP COBRA Form - "+ LastName.value;
}else{
 	EmailSubject.value = "VSP COBRA Form"; 
}

guideBridge.submit();


        }
	}
}
