/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value === ""){
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
//alert("userValue="+userValue);
logUser.value = userValue;
$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
//alert("userValue="+userValue);
logUser.value = userValue;
$.ajax({
 type: 'GET',
       // url: "/bin/getCatastrophicLeaveRequest",
  		 url: "/bin/getCatastrophicLeaveDonation",
        data: {
            //cwid: cwid123,
            userID: userValue
        },
		dataType: 'json',
        success: function(myresopnse) {
          
           var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
          
            if (myresopnse.length === 1) {
                Department.value = myresopnse[0].DEPTNAME;
                EmplRCD.value = myresopnse[0].EMPL_RCD;
                cbid.value = myresopnse[0].UNION_CD;
                DeptID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                var fnVal = myresopnse[0].FIRST_NAME;
                var lnVal = myresopnse[0].LAST_NAME;
                var nameVal = fnVal.concat(" ").concat(lnVal);
                DonarName.value = nameVal;
                EmplID.value = myresopnse[0].EMPLID;
                gifModal.style.display = "none";
                modal.style.display = "none";
                
            }else if (myresopnse.length > 1) {
               gifModal.style.display = "none";
               modal.style.display = "block";
              fnameHidden.value = myresopnse[0].FIRST_NAME;
              lnameHidden.value = myresopnse[0].LAST_NAME;
              cbid.value = myresopnse[0].UNION_CD;
              EmplRCD.value = myresopnse[0].EMPL_RCD;
              
              var col = [];
                col.push("EMPLID");
                col.push("LAST_NAME");
                col.push("FIRST_NAME");
                col.push("DEPTID");
                col.push("DEPTNAME");
                /*col.push("EMPL_RCD");
                col.push("DESCR");
                col.push("GRADE");
                col.push("UNION_CD");*/
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
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
                        //alert("xcvbn");
                        //debugger;
                        deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                        DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                        //cbidHidden.value = event.currentTarget.parentNode.parentElement.childNodes[6].innerText;
                        //classificationHidden.value = event.currentTarget.parentNode.parentElement.childNodes[7].innerText;
                       // RangeHidden.value = event.currentTarget.parentNode.parentElement.childNodes[8].innerText;
                       EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                       // empRCDHidden.value = event.currentTarget.parentNode.parentElement.childNodes[9].innerText;
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
              
                var footerModal = document.getElementById("modal_footer");
                
            
                //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
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
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                alert("Please select the department");
                modal.style.display = "block";
              }else {
                        var fnVal = fnameHidden.value;
                        var lnVal = lnameHidden.value;
                        var nameVal = fnVal.concat(" ").concat(lnVal);
                		DonarName.value = nameVal;
                        DeptID.value = deptHidden.value;
                        Department.value = DeptNameHidden.value;
                 LastName.value = lnameHidden.value;
                FirstName.value = fnameHidden.value;
                        //CBID.value = cbidHidden.value;
                       // Classification.value = classificationHidden.value;
                        //Range.value = RangeHidden.value;
                        EmplID.value = EmpIdHidden.value;
                      
                        
                       // gifModal.style.display = "none";
                        modal.style.display = "none";
                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
               // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
              
            }
          else {
                alert("No matching records found");
                        
                        FirstName.value = null;
                        LastName.value = null;
                        DeptID.value = null;
                        Department.value = null;
                        cbid.value = null;
                       
                       
                        EmplRCD.value = null;
                        
                        deptHidden.value = null;
                        DeptNameHidden.value = null;
                       
                        EmpIdHidden.value = null;
                      //  empRCDHidden.value = null;
              fnameHidden.value = null;
              lnameHidden.value = null;
             
                gifModal.style.display = "none";
            }
            ////////////////////////////////////////////
             span.onclick = function() {
            
                var n;
              var rButtonStatus;
              //var rButtonStatusFalse;
              var rButtons = document.getElementsByClassName("rb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                alert("Please select the department");
                modal.style.display = "block";
              }else{
                
                alert("Please select the department");
                modal.style.display = "block";
              }             
                
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }

});
}
},
error: function(error){
alert("error block="+error);
  loadingText.visible = false; 
}
});
  
  
}
},
error: function(error){
alert("error block="+error);
  loadingText.visible = false; 
}
});
}
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value === null || StageIndicator.value === ""){
debugger;
if(StageIndicator.value === null && formSavedStatus.value !== "1"){
  //alert(StageIndicator.value);
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";


$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;
 //userValue='rpurohit';
//alert("userValue="+userValue);
logUser.value = userValue;
 // logUser.value = 'rpurohit';
    $.ajax({
        type: 'GET',
        //url: "/bin/getCatastrophicLeaveRequest",
        url: "/bin/chrsIdUpdateServlet", 
        data: {action: "CATASTROPHIC_LEAVE_DONATION_USERID",
            
            userId: userValue
        },
        dataType: 'json',
        success: function(myresopnse) {
            debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresopnse.length === 1) {
                
                Department.value = myresopnse[0].DEPTNAME;
                EmplRCD.value = myresopnse[0].EMPL_RCD;
                cbid.value = myresopnse[0].UNION_CD;
                DeptID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EmplID.value = myresopnse[0].EMPLID; //chrs -url 
                CHRS_ID.value = myresopnse[0].CSU_CHRS_IS; //chrs  
                var fnVal = myresopnse[0].FIRST_NAME;
                var lnVal = myresopnse[0].LAST_NAME;
                var nameVal = fnVal.concat(" ").concat(lnVal);
                DonarName.value = nameVal;
                EmplID.value = myresopnse[0].EMPLID;
               /* CampExt.value = myresopnse[0].EMP_EMAIL_ID;
              EmpEmailAddress.value = myresopnse[0].EMP_EMAIL_ID;*/
              CampExt.value = "soumya.ravindra@thoughtfocus.com";
              EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
                
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresopnse.length > 1) {
                
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                
                var col = [];
               // col.push("EMPLID");
                col.push("CSU_CHRS_ID");
                col.push("LAST_NAME");
                col.push("FIRST_NAME");
                col.push("DEPTID");
                col.push("DEPTNAME");
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "CHRS ID", "Last Name", "First Name", "Department Id", "Department Name"];
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
                        EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                       
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
              
              
                var footerModal = document.getElementById("modal_footer");
                
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                //okButton.id = "okBtn";
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus;
              //var rButtonStatusFalse;
              var rButtons = document.getElementsByClassName("rb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  
                fnameHidden.value = myresopnse[n].FIRST_NAME;
              lnameHidden.value = myresopnse[n].LAST_NAME;
              cbid.value = myresopnse[n].UNION_CD;
              EmplRCD.value = myresopnse[n].EMPL_RCD;    
                /*CampExt.value = myresopnse[0].EMP_EMAIL_ID;
               EmpEmailAddress.value = myresopnse[n].EMP_EMAIL_ID;*/
                  CampExt.value = "soumya.ravindra@thoughtfocus.com";
               EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
               
                rButtonStatus = true;
                break;
                }
              }
              if(rButtonStatus === false){
                alert("Please select the department");
                modal.style.display = "block";
              }else {
                
                 var fnVal = fnameHidden.value;
                        var lnVal = lnameHidden.value;
                        var nameVal = fnVal.concat(" ").concat(lnVal);
                		DonarName.value = nameVal;
                        DeptID.value = deptHidden.value;
                        Department.value = DeptNameHidden.value;
						 LastName.value = lnameHidden.value;
						FirstName.value = fnameHidden.value;
                        //CBID.value = cbidHidden.value;
                       // Classification.value = classificationHidden.value;
                        //Range.value = RangeHidden.value;
                        EmplID.value = EmpIdHidden.value;
                      
                      
                // gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                //alert("No matching records found");
              var modalError = document.getElementById("errorPopup");
              var para = document.getElementById("para");
              para.innerHTML = "";
              para.innerHTML = "No matching records found";
              var errorBody = document.getElementById('errorData');
              errorBody.innerHTML = "";
              errorBody.appendChild(para);
              var footerModalError = document.getElementById("errorPopup-footer");
              var okButtonError = document.createElement("input");
              okButtonError.type = "button";
              okButtonError.setAttribute("class", "okBtn");
              //okButtonError.id = "okBtn";
              okButtonError.value = "Ok";
              okButtonError.onclick = function(event) {
                modalError.style.display = "none";
              };
              footerModalError.appendChild(okButtonError);
              modalError.style.display = "block";
           
                         FirstName.value = null;
                        LastName.value = null;
                        DeptID.value = null;
                        Department.value = null;
                        cbid.value = null;
                       
                       
                        EmplRCD.value = null;
                        
                        deptHidden.value = null;
                        DeptNameHidden.value = null;
                       
                        EmpIdHidden.value = null;
                      //  empRCDHidden.value = null;
              fnameHidden.value = null;
              lnameHidden.value = null;
             
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("rb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                alert("Please select the department");
                modal.style.display = "block";
              }else{
                
                alert("Please select the department");
                modal.style.display = "block";
              }             
                
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    });
}
},
error: function(error){
alert("error block="+error);
  loadingText.visible = false; 
}
});
  
}  

        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  PayrollPanel.visible = false;
}

if(StageIndicator.value === "ToPayroll"){
  basicInformation.visible = true;
  basicInformation.enabled = false;
  PayrollPanel.visible = true;
}

        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_sl_hours_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_sl_hours_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if(sl_hours.value > 40){
        /*alert("'The maximum donation varies per Collective Bargaining Agreement.Click okay to proceed");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].sl_hours[0]");
        submitFlag=1;
      	generatePDFFlag.value = 1;*/
      var modal = document.getElementById("errorPopup");
       var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enroll or cancel coverage";
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
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].sl_hours[0]");
    submitFlag=1;
    modal.style.display = "block";

  }else{
    submitFlag=0;
    generatePDFFlag.value = 0;
  }
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_DonarName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_DonarName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_CHRS_ID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_CHRS_ID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_EmplID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_EmplID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_EmplRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_EmplRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_TimeOfDay_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_TimeOfDay_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var time = this.value;
var res = time.substring(0, 2);
alert(res);
if(res >= 24){
  res = 12;
}

//alert("here=="+timeVal);

//var time = "15:30:00";
//alert("time="+time);
//var formatted = moment(time, "HH:mm").format("hh:mm A");

var formatted =moment(time, "HH:mm").locale('en').format("hh:mm A");

if(formatted === "Invalid date"){
  this.value  = null;
  alert("Unable to convert that value to a time");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].basicInformation[0].TimeOfDay[0]");

}else{
//alert(formatted);
this.value = formatted;
}



        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_checkbox1575458002235_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_checkbox1575458002235_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "0"){
  /*var fnVal = FirstName.value;
  var lnVal = LastName.value;
  var signName = fnVal.concat(" ").concat(lnVal);*/
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  EmpDate.value=TzoneDate;
  Signature.value = DonarName.value;
  EmpDate.enabled = false;
  Signature.enabled = false;
}
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_panel1584704531814_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_panel1584704531814_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_cbid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_cbid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_EmpEmailAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_EmpEmailAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
  var userValue=myresopnse.userId;
  logUser.value = userValue;
  /*if(StageIndicator.value === null){
   ManagerUserID.value = userValue;
  var mgrId = userValue;
  var mgrEmail = mgrId.concat('@').concat('fullerton.edu');
  ManagerEmailID.value=mgrEmail;
  }*/
},
  error: function(error){
alert("error block="+error);
}
});

        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
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
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_checkbox1598940697462_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_checkbox1598940697462_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (PayrollSignature.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            PayrollDate.value = d;

            PayrollDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                  if(logUser.value == "etrinh"){
  					PayrollSignature.value = "Thao Trinh";
  				}else{
    				PayrollSignature.value = userValue;
  				}

                
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

            PayrollSignature.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    PayrollSignature.value = "";
    PayrollSignature.value = "";
}
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;

if(EmplID.value === null && FirstName.value === null &&  LastName.value === null){
  showErrorModal("Alert!","Please enter EmplID, First Name and Last Name");
    submitFlag=1; 
}else{
  submitFlag=0;
}

if (EmplID.value !== null && DonarName.value !== null && submitFlag === 0) {
  
  if(sl_hours.value > 40){
    showErrorModal("Alert!","The maximum donation varies per Collective Bargaining Agreement. Click okay to proceed");
    submitFlag=1; 
  }else{
    submitFlag=0;
  }
  	
 
 if(submitFlag !== 1){
  var slValue = sl_hours.value;
  var vacValue = vac_hrs.value;
  var totalHours = slValue+vacValue;
 
  if(vac_hrs.value > 40 || totalHours > 40){
    showErrorModal("Alert!","The maximum donation varies per Collective Bargaining Agreement. Click okay to proceed");
    submitFlag=1;
    
  }else{
    submitFlag=0;
    generatePDFFlag.value = 0;
  }
  } 
   
} 

if(submitFlag === 0){  
 getPdf();
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/catastrophic-leave-donation/catastrophic-leave-donation');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplID.value + ")" + "_" + Date.now()); 
          	jsonData.append('fileName', DonarName.value + "_" + "(" + EmplID.value + ")" + "_" + Date.now());          
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
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_saveguidedraft1587035709551_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_saveguidedraft1587035709551_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);

if(EmplID.value !== null){
  formSavedStatus.value = "1";
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
  handleDraftSave(this);
}else{
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
    handleDraftSave(this);
}

        }
	}
}
/**
 * @function catastrophic_leave_donation_catastrophic_leave_donation.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_donation_catastrophic_leave_donation.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;
//CampExt.value = "yjayaram@fullerton.edu";
//CampExt.value = "pushpa.kawadi@gmail.com";
//CampExt.value = "ram.singh@thoughtfocus.com";
CampExt.value = "soumya.ravindra@thoughtfocus.com";
//alert("cbid="+cbid.value);
if(cbid.value === "R01" || cbid.value === "R11") {
  //alert("inside cbid");
if(sl_hours.value > 16){
    
    showErrorModal("Alert !","The maximum donation varies per Collective Bargaining Agreement.");
    submitFlag=1;  
  }else{
    submitFlag=0;
  }
  	
} else if(sl_hours.value > 40 && submitFlag === 0){
    //alert("else if");
    showErrorModal("Alert !","The maximum donation varies per Collective Bargaining Agreement.");
    submitFlag=1;
}else{
    submitFlag=0;
}
  	
 if(submitFlag !== 1){
  var slValue = sl_hours.value;
  var vacValue = vac_hrs.value;
  var totalHours = slValue+vacValue;
 
  if(cbid.value === "R01" || cbid.value === "R11") {
	  
	if(vac_hrs.value > 16 || totalHours > 16){
    showErrorModal("Alert !","The maximum donation varies per Collective Bargaining Agreement."); 
    submitFlag=1;	   
  }else{
    submitFlag=0;
    
  }
  } else if(vac_hrs.value > 40 || totalHours > 40){
    showErrorModal("Alert !","The maximum donation varies per Collective Bargaining Agreement."); 
    submitFlag=1;	   
  }else{
    submitFlag=0;
  }
  } 
 
aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);

if(DonarCatagory.value !== null){
	EmailSubject.value = "Catastrophic Leave Donation Form - "+ DonarCatagory.value;
}else{
 	EmailSubject.value = "Catastrophic Leave Donation Form"; 
}

if(submitFlag === 0){  
  guideBridge.submit();
}

        }
	}
}
