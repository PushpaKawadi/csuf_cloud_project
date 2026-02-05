/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            generateDOR.visible = false;
if(FormSavedStatus.value !== "1"){
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
      gifModal.style.display = "block";
        var userValue = myresopnse.userId;
      
        logUser.value = userValue;
        EmpUserID.value = userValue;
 

            //var userID = 'kcase';
            
            var userID = userValue;

            //alert("userID="+userID);
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormData",
                data: {
                    userID: userID,
                  action:"PRE_EVAL_EMP_DETAILS"
                },
                dataType: 'json',

                success: function(myresopnse) {
                  
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length === 1) {
						
                        FirstName.value = myresopnse[0].FIRST_NAME;

                        LastName.value = myresopnse[0].LAST_NAME;
                      
                      	cbidHidden.value = myresopnse[0].UNION_CD;

                        DeptID.value = myresopnse[0].DEPTID;

                        DeptName.value = myresopnse[0].DEPTNAME;

                       EmpRCD.value = myresopnse[0].EMPL_RCD;
                      
                      EmpID.value = myresopnse[0].EMPLID;
                        empEmailId.value = myresopnse[0].EMP_EMAIL_ID;
                     
                      Supervisor.value=  myresopnse[0].SupervisorName;

                       
                      empFullName.value = (FirstName.value).concat(" "+LastName.value);
                        gifModal.style.display = "none";
                      generateDOR.visible = true;
                      getReviewPeriodDates();
                    } else if (myresopnse.length > 1) {
                        
                        gifModal.style.display = "none";
                        modal.style.display = "block";
                       
                        var col = [];

                        col.push("EMPLID");

                        col.push("LAST_NAME");

                        col.push("FIRST_NAME");

                        col.push("DEPTID");

                        col.push("DEPTNAME");
                       col.push("EMPL_RCD");

                        col.push("UNION_CD");

                        col.push("SupervisorName");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name","Emp RCD","CBID","Supervisor Name"];
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

                            button.onclick = function(event) {
                               
                                deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                                DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;

                            };

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
                                 
                                    evalNameHidden.value = myresopnse[n].SupervisorName;
                                    //evalTitleHidden.value = myresopnse[n].SupervisorTitle;
                                    fnameHidden.value = myresopnse[n].FIRST_NAME;
                                    lnameHidden.value = myresopnse[n].LAST_NAME;
                                    //EmpUserID.value = myresopnse[n].EMPUSERID; 
                                    cbidHidden.value = myresopnse[0].UNION_CD;                                    
									EmpID.value = myresopnse[n].EMPLID;
                                    EmpRCD.value = myresopnse[n].EMPL_RCD;
                                     empEmailId.value = myresopnse[n].EMP_EMAIL_ID;
                                   generateDOR.visible = true;
                                  getReviewPeriodDates();
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                alert("Please select the department");
                                modal.style.display = "block";
                            } else {
                                Supervisor.value = evalNameHidden.value;
                                //EvaluatorsTitle.value = evalTitleHidden.value;
                                FirstName.value = fnameHidden.value;
                                LastName.value = lnameHidden.value;
                                DeptID.value = deptHidden.value;
                                DeptName.value = DeptNameHidden.value;
                              empFullName.value = (FirstName.value).concat(" "+LastName.value);
                                //CBID.value = cbidHidden.value;
                                // Classification.value = classificationHidden.value;
                                // Range.value = RangeHidden.value;
                                //EmplID.value = EmpIdHidden.value;
                                //EmpRCD.value = empRCDHidden.value;
                                modal.style.display = "none";
                            }
                        };
                        var footerModal = document.getElementById("modal_footer");

                        footerModal.appendChild(okButton);

                    } else {
                      showErrorModal("Alert!", "No matching records found");
                                            
                    }
                    ////////////////////////////////////////////
                                        span.onclick = function() {
                       
                        modal.style.display = "none";
                    };
                   
                }
            });
        }

    });
}

function getReviewPeriodDates(){debugger;
  var dateValue = null;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;

  if(cbidHidden.value == "C99"){
   ReviewPeriodTo.value = (curyear+"-"+"5"+"-"+"15");
   ReviewPeriodFrom.value = (lastYear+"-"+"5"+"-"+"16");
  }else{
    ReviewPeriodTo.value = (curyear+"-"+"6"+"-"+"30");
    ReviewPeriodFrom.value = (lastYear+"-"+"7"+"-"+"1");
  }
  
}else{
ReviewPeriodTo.value = dateValue;
ReviewPeriodFrom.value = dateValue;
}
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
generateDOR.visible = false;
if(FormSavedStatus.value !== "1"){
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
      gifModal.style.display = "block";
        var userValue = myresopnse.userId;
      
        logUser.value = userValue;
        EmpUserID.value = userValue;
 

            //var userID = 'kcase';
            
            var userID = userValue;

            //alert("userID="+userID);
            $.ajax({
                type: 'GET',
                url: "/bin/getEvaluationFormDataCHRSID",
                data: {
                    userID: userID,
                  action:"PRE_EVAL_EMP_DETAILS"
                },
                dataType: 'json',

                success: function(myresopnse) {
                  
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                  debugger;
                    if (myresopnse.length === 1) {
						
                        FirstName.value = myresopnse[0].FIRST_NAME;

                        LastName.value = myresopnse[0].LAST_NAME;
                      
                      	cbidHidden.value = myresopnse[0].UNION_CD;

                        DeptID.value = myresopnse[0].DEPTID;

                        DeptName.value = myresopnse[0].DEPTNAME;

                       EmpRCD.value = myresopnse[0].EMPL_RCD;
                      
                      EmpID.value = myresopnse[0].EMPLID;
                      chrsId.value = myresopnse[0].CSU_CHRS_ID;
                       // empEmailId.value = myresopnse[0].EMP_EMAIL_ID;
                     empEmailId.value = "soumya.ravindra@thoughtfocus.com";
                      Supervisor.value=  myresopnse[0].SupervisorName;

                       
                      empFullName.value = (FirstName.value).concat(" "+LastName.value);
                        gifModal.style.display = "none";
                      generateDOR.visible = true;
                      getReviewPeriodDates();
                    } else if (myresopnse.length > 1) {
                        
                        gifModal.style.display = "none";
                        modal.style.display = "block";
                       
                        var col = [];
						col.push("CSU_CHRS_ID");
                        col.push("EMPLID");

                        col.push("LAST_NAME");

                        col.push("FIRST_NAME");

                        col.push("DEPTID");

                        col.push("DEPTNAME");
                       col.push("EMPL_RCD");

                        col.push("UNION_CD");

                        col.push("SupervisorName");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        var headings = ["", "Emp ID", "CWID", "Last Name", "First Name", "Department Id", "Department Name","Emp RCD","CBID","Supervisor Name"];
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

                            button.onclick = function(event) {
                               
                                deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                                DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;

                            };

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
                                 
                                    evalNameHidden.value = myresopnse[n].SupervisorName;
                                    //evalTitleHidden.value = myresopnse[n].SupervisorTitle;
                                    fnameHidden.value = myresopnse[n].FIRST_NAME;
                                    lnameHidden.value = myresopnse[n].LAST_NAME;
                                    //EmpUserID.value = myresopnse[n].EMPUSERID; 
                                    cbidHidden.value = myresopnse[0].UNION_CD; 
                                    chrsId.value = myresopnse[0].CSU_CHRS_ID;
									EmpID.value = myresopnse[n].EMPLID;
                                    EmpRCD.value = myresopnse[n].EMPL_RCD;
                                   //  empEmailId.value = myresopnse[n].EMP_EMAIL_ID;
                                     empEmailId.value = "soumya.ravindra@thoughtfocus.com";
                                   generateDOR.visible = true;
                                  getReviewPeriodDates();
                                    rButtonStatus = true;
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                alert("Please select the department");
                                modal.style.display = "block";
                            } else {
                                Supervisor.value = evalNameHidden.value;
                                //EvaluatorsTitle.value = evalTitleHidden.value;
                                FirstName.value = fnameHidden.value;
                                LastName.value = lnameHidden.value;
                                DeptID.value = deptHidden.value;
                                DeptName.value = DeptNameHidden.value;
                              empFullName.value = (FirstName.value).concat(" "+LastName.value);
                                //CBID.value = cbidHidden.value;
                                // Classification.value = classificationHidden.value;
                                // Range.value = RangeHidden.value;
                                //EmplID.value = EmpIdHidden.value;
                                //EmpRCD.value = empRCDHidden.value;
                                modal.style.display = "none";
                            }
                        };
                        var footerModal = document.getElementById("modal_footer");

                        footerModal.appendChild(okButton);

                    } else {
                      showErrorModal("Alert!", "No matching records found");
                                            
                    }
                    ////////////////////////////////////////////
                                        span.onclick = function() {
                       
                        modal.style.display = "none";
                    };
                   
                }
            });
        }

    });
}

function getReviewPeriodDates(){debugger;
  var dateValue = null;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;

  if(cbidHidden.value == "C99"){
   ReviewPeriodTo.value = (curyear+"-"+"5"+"-"+"15");
   ReviewPeriodFrom.value = (lastYear+"-"+"5"+"-"+"16");
  }else{
    ReviewPeriodTo.value = (curyear+"-"+"6"+"-"+"30");
    ReviewPeriodFrom.value = (lastYear+"-"+"7"+"-"+"1");
  }
  
}else{
ReviewPeriodTo.value = dateValue;
ReviewPeriodFrom.value = dateValue;
}
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_chrsId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_chrsId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_chrsId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_chrsId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var cwidVal = this.value;
var deptid = DeptID.value;
var union_cd = cbidHidden.value;
$.ajax({

type: 'GET', 

url:"/bin/getEvaluationFormDataCHRSID",

data: {deptID: deptid,
      cwid:cwidVal,
      union_cd:union_cd,
       action:"SPE_MANAGER_DETAILS"
      },

dataType: 'json',
 
success: function(myresopnse){
  if(myresopnse.length !== ""){
ManagerUserID.value=myresopnse[0].MANAGER_EMP_USERID;
//ManagerEmailID.value=myresopnse[0].MANAGER_EMAIL_ID;  
    ManagerEmailID.value="soumya.ravindra@thoughtfocus.com";

  }
 

}
});

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_EmpID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_EmpID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_EmpRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_EmpRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Supervisor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Supervisor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_ReviewPeriodFrom_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_ReviewPeriodFrom_init0 = function (scope) {
    with(this) {
        with(scope) {
            /* Add your own JavaScript here. */

var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;

  if(cbidHidden.value == "C99"){
    var d = (lastYear+"-"+"5"+"-"+"16");
  }else{
    var d = (lastYear+"-"+"7"+"-"+"1");
  }
this.value = d;
}else{
this.value =dateValue;
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_ReviewPeriodTo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_ReviewPeriodTo_init0 = function (scope) {
    with(this) {
        with(scope) {
            /* Add your own JavaScript here. */

var dateValue = this.value;
if(dateValue === null){
var today = new Date();
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var lastYear = curyear - 1;

  if(cbidHidden.value == "C99"){
    var d = (lastYear+"-"+"5"+"-"+"16");
  }else{
    var d = (curyear+"-"+"5"+"-"+"15");
  }
this.value = d;

}else{
this.value = dateValue;

}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_TodayDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_TodayDate_init0 = function (scope) {
    with(this) {
        with(scope) {
             var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
this.value = TzoneDate;
this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;
  logUser.value = userValue;
  if(StageIndicator.value === null){
  EmpUserID.value = userValue;
  var empVal = userValue;
 // var empEmailVal = empVal.concat('@').concat('fullerton.edu');
 // empEmailId.value=empEmailVal;
    empEmailId.value= "soumya.ravindra@thoughtfocus.com";
  }
},
  error: function(error){
alert("error block="+error);
}
});

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_Evaluation7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    this.value = (this.value).trim();
}

        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
               
 var filePath = supportDoc1.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc1.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

 var filePath = supportDoc2.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc2.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

 var filePath = supportDoc3.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc3.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc3.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_supportDoc4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

 var filePath = supportDoc4.fileAttachment.value;
 var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc4.fileAttachment.value = fname;
}
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){
 
  supportDoc4.fileAttachment.value = null;
  
 showErrorModal("Alert!","Only PDF files are allowed");
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  var userValue;
  if(EmpDate.value === null){
  //var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
//EmpDate.value = TzoneDate;
  EmpSign.enabled = false;
   EmpDate.enabled = false;
}
else{EmpDate.enabled = false;
    EmpSign.enabled = false;
      EmpDate.enabled = false;
    }
   $.ajax({

type: 'GET', 

  url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse[0].EMP_NAME;
   EmpSign.value =  userValue;
  EmpDate.value = myresopnse[0].SERVER_DATE;
},
  error: function(error){
alert("error block="+error);
}
});
  
   EmpSign.enabled = false;
  EmpDate.enabled = false;

}else{
      EmpSign.value = "";
      //EmpSign.mandatory = "error";
      EmpDate.value = null;
}

//}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_EmpSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_EmpSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_EmpDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_EmpDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
if(FormSavedStatus.value !== null){
  this.visible = true;
}
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (EmpID.value !== null && Evaluation1.value !== null && Evaluation2.value !== null && Evaluation3.value !== null && Evaluation4.value !== null && Evaluation5.value !== null && Evaluation6.value !== null && EmpCB.value !== null && ReviewPeriodFrom.value !== null && ReviewPeriodTo.value !== null) {
    generatePDFStep.value = "Draft";
    getPdf();
}else{
      showErrorModal("Alert!", "Please fill all the required fields");
   }

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/pre-performance-evaluation/pre-performance-evaluation');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmpID.value + ")" + "_" + Date.now());          
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
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_saveguidedraft1574920589904_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_saveguidedraft1574920589904_click0 = function (scope) {
    with(this) {
        with(scope) {
            FormSavedStatus.value = "1";
if(EmpID.value !== null){
      aftiaDescCWID.value = FirstName.value + "  "+ LastName.value+" " +EmpID.value;
    }
handleDraftSave(this);


        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_performance_evaluation_pre_performance_evaluation.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            var confirmationModal = document.getElementById('submitErrorPopup');
var footerModal = document.getElementById("submitErrorPopup-footer");
footerModal.innerHTML = "";
var yesButton = document.createElement("input");
yesButton.type = "button";
yesButton.id = "yesBtn";
yesButton.style.cssFloat = "right";
yesButton.style.marginRight = "4px";
yesButton.style.width = "70px";
yesButton.value = "Yes";
yesButton.onclick = function(event) {
    confirmationModal.style.display = "none";
    checkDataExist.value = "false";
   var dateString = new Date().toLocaleString("en-US", {
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    if(ReviewPeriodFrom.value !== null && ReviewPeriodTo.value !== null){
    var frmDate = new Date(ReviewPeriodFrom.value);
    var toDate = new Date(ReviewPeriodTo.value);
    if(frmDate >= toDate){
    showErrorModal("Alert!","Invalid Review Period Range");
  }else if(Supervisor.value === null || ManagerUserID.value === null){
    showErrorModal("Alert!","No matching Supervisor found");
  }/*else if(Date.parse(ReviewPeriodFrom.value)>Date.parse(d) || Date.parse(ReviewPeriodTo.value)>Date.parse(d)){
    showErrorModal("Alert!","Performance Evaluation can't be initiated for Future.");
  }*/else{
      guideBridge.submit();
  }
    }
  
};
footerModal.appendChild(yesButton);
var noButton = document.createElement("input");
noButton.type = "button";
noButton.id = "noBtn";
noButton.style.cssFloat = "right";
noButton.style.marginRight = "10px";
noButton.style.width = "70px";
noButton.value = "No";
noButton.onclick = function(event) {
    confirmationModal.style.display = "none";
    checkDataExist.value = "true";
};
footerModal.appendChild(noButton);


/*ManagerEmailID.value = "yjayaram@fullerton.edu";
empEmailId.value = "yjayaram@fullerton.edu";*/
ManagerEmailID.value = "soumya.ravindra@thoughtfocus.com";
empEmailId.value = "soumya.ravindra@thoughtfocus.com";
if (checkDataExist.value == "true") {
    confirmationModal.style.display = "block";

} else {
    confirmationModal.style.display = "none";
   var dateString = new Date().toLocaleString("en-US", {
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    if(ReviewPeriodFrom.value !== null && ReviewPeriodTo.value !== null){
    var frmDate = new Date(ReviewPeriodFrom.value);
    var toDate = new Date(ReviewPeriodTo.value);
    if(frmDate > toDate){
    showErrorModal("Alert!","Invalid Review Period Range");
  }else if(Supervisor.value === null || ManagerUserID.value === null){
    showErrorModal("Alert!","No matching Supervisor found");
  }/*else if(Date.parse(ReviewPeriodFrom.value)>Date.parse(d) || Date.parse(ReviewPeriodTo.value)>Date.parse(d)){
     showErrorModal("Alert!","A Performance Evaluation can't be initiated for a future date.");
  }*/else{
    if(EmpID.value !== null){
      aftiaDescCWID.value = FirstName.value + "  "+ LastName.value+" " +EmpID.value;
    }
     guideBridge.submit();
  }
}
  
   
}


        }
	}
}
