/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init0 = function (scope) {
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
          
            if (myresopnse.length === 1) {
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
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value === null){
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
 //userValue ='nvadlakunta';
$.ajax({
 type: 'GET',
        url: "/bin/getCatastrophicLeaveRequest",
        data: {
            //cwid: cwid123,
            userID: userValue
        },
		dataType: 'json',
        success: function(myresopnse) {
          
           var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
          
            if (myresopnse.length === 1) {
                DepartmentName.value = myresopnse[0].DEPTNAME;
                EMPLRCD.value = myresopnse[0].EMPL_RCD;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                DepartmentID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EMPLID.value = myresopnse[0].EMPLID;
              //	EmpEmailAddress.value = myresopnse[0].EMP_EMAIL_ID; 
                EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
                EmpID1.value = EMPLID.value;
				EmpFN.value = FirstName.value;
                EmpLN.value = LastName.value;
                EMPLRCD1.value = EMPLRCD.value;
                Department1.value = DepartmentName.value;
                gifModal.style.display = "none";
                modal.style.display = "none";
                
            }else if (myresopnse.length > 1) {
               gifModal.style.display = "none";
               modal.style.display = "block";
              fnameHidden.value = myresopnse[0].FIRST_NAME;
              lnameHidden.value = myresopnse[0].LAST_NAME;
              BargainingUnit.value = myresopnse[0].UNION_CD;
              EMPLRCD.value = myresopnse[0].EMPL_RCD;
             // EmpEmailAddress.value = myresopnse[0].EMP_EMAIL_ID;   
               EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
                        
                        FirstName.value = fnameHidden.value;
                        LastName.value = lnameHidden.value;
                        DepartmentID.value = deptHidden.value;
                        DepartmentName.value = DeptNameHidden.value;
                        //CBID.value = cbidHidden.value;
                       // Classification.value = classificationHidden.value;
                        //Range.value = RangeHidden.value;
                        EMPLID.value = EmpIdHidden.value;
                		EmpID1.value = EMPLID.value;
EmpFN.value = FirstName.value;
EmpLN.value = LastName.value;
EMPLRCD1.value = EMPLRCD.value;
Department1.value = DepartmentName.value;
                      
                        
                       // gifModal.style.display = "none";
                        modal.style.display = "none";
                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
               // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
              
            }
          else {
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
                        DepartmentID.value = null;
                        DepartmentName.value = null;
                        BargainingUnit.value = null;
                       
                       
                        EMPLRCD.value = null;
                        
                        deptHidden.value = null;
                        DeptNameHidden.value = null;
                       
                        EmpIdHidden.value = null;
                      //  empRCDHidden.value = null;
              fnameHidden.value = null;
              lnameHidden.value = null;
            
            EmpID1.value =null;
EmpFN.value = null;
EmpLN.value = null;
EMPLRCD1.value = null;
Department1.value = null;
             
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
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  certificateInfo.visible = false;
}

if(StageIndicator.value === "ToHR"){
  holdPanel.visible = true;
  leaveRequest.visible = true;
  holdPanel.enabled = false;
  leaveRequest.enabled = false;
  certificateInfo.visible = true;
}

        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(StageIndicator.value === null && formSavedStatus.value === null){
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
 //userValue ='nvadlakunta';
$.ajax({
 type: 'GET',
        url: "/bin/chrsIDUpdateServlet",
        data: {
          action: "CATASTROPHIC_LEAVE_USERID",
            //cwid: cwid123,
            userId: userValue
        },
		dataType: 'json',
        success: function(myresopnse) {
          
           var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
          debugger;
            if (myresopnse.length === 1) {
                DepartmentName.value = myresopnse[0].DEPTNAME;
                EMPLRCD.value = myresopnse[0].EMPL_RCD;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                DepartmentID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EMPLID.value = myresopnse[0].EMPLID;
                chrsId.value = myresopnse[0].CSU_CHRS_IS;
              //	EmpEmailAddress.value = myresopnse[0].EMP_EMAIL_ID; 
                EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
                EmpID1.value = EMPLID.value;
                chrsID_1.value = chrsId.value;
				EmpFN.value = FirstName.value;
                EmpLN.value = LastName.value;
                EMPLRCD1.value = EMPLRCD.value;
                Department1.value = DepartmentName.value;
                gifModal.style.display = "none";
                modal.style.display = "none";
                
            }else if (myresopnse.length > 1) {
               gifModal.style.display = "none";
               modal.style.display = "block";
              fnameHidden.value = myresopnse[0].FIRST_NAME;
              lnameHidden.value = myresopnse[0].LAST_NAME;
              BargainingUnit.value = myresopnse[0].UNION_CD;
              EMPLRCD.value = myresopnse[0].EMPL_RCD;
              EMPLID.value = myresopnse[0].EMPLID;
             // EmpEmailAddress.value = myresopnse[0].EMP_EMAIL_ID;   
               EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
              var col = [];
                col.push("CSU_CHRS_IS");
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
                var headings = ["", "Emp ID", "CWID", "Last Name", "First Name", "Department Id", "Department Name"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
              debugger;
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
                        deptHidden.value = event.currentTarget.parentNode.parentElement.childNodes[5].innerText;
                        DeptNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[6].innerText;
                        //cbidHidden.value = event.currentTarget.parentNode.parentElement.childNodes[6].innerText;
                        //classificationHidden.value = event.currentTarget.parentNode.parentElement.childNodes[7].innerText;
                       // RangeHidden.value = event.currentTarget.parentNode.parentElement.childNodes[8].innerText;
                        EmpIdHidden.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                       Hidden_ChrsId.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
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
                        
                        FirstName.value = fnameHidden.value;
                        LastName.value = lnameHidden.value;
                        DepartmentID.value = deptHidden.value;
                        DepartmentName.value = DeptNameHidden.value;
                        //CBID.value = cbidHidden.value;
                       // Classification.value = classificationHidden.value;
                        //Range.value = RangeHidden.value;
                        chrsId.value = Hidden_ChrsId.value;
                		chrsID_1.value = chrsId.value;
                        EMPLID.value = EmpIdHidden.value;
                		EmpID1.value = EMPLID.value;
EmpFN.value = FirstName.value;
EmpLN.value = LastName.value;
EMPLRCD1.value = EMPLRCD.value;
Department1.value = DepartmentName.value;
                      
                        
                       // gifModal.style.display = "none";
                        modal.style.display = "none";
                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
               // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));
              
            }
          else {
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
                        DepartmentID.value = null;
                        DepartmentName.value = null;
                        BargainingUnit.value = null;
                       
                       
                        EMPLRCD.value = null;
                        
                        deptHidden.value = null;
                        DeptNameHidden.value = null;
                       
                        EmpIdHidden.value = null;
                       Hidden_ChrsId.value = null;
                      //  empRCDHidden.value = null;
              fnameHidden.value = null;
              lnameHidden.value = null;
            chrsID_1.value =null;
            EmpID1.value =null;
EmpFN.value = null;
EmpLN.value = null;
EMPLRCD1.value = null;
Department1.value = null;
             
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
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_chrsId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_chrsId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && this.value === null) {
  this.mandatory=true;
}
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_chrsId_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_chrsId_init1 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_EMPLID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_EMPLID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_EMPLRCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_EMPLRCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_DepartmentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_DepartmentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_DepartmentID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_DepartmentID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_BargainingUnit_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_BargainingUnit_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_IllnessType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_IllnessType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(IllnessType.value == 1){
  LeaveType.mandatory = true;
  LeaveType.enabled = true;
}else if(IllnessType.value == 2){
  LeaveType.mandatory = false;
  LeaveType.enabled = false;
  LeaveType.value = null;
}
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_checkSign_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_checkSign_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  var fnVal = FirstName.value;
  var lnVal = LastName.value;
  var signEmp = fnVal.concat(" ").concat(lnVal);
  EmpSign.value = signEmp;
  EmpSign2.value = signEmp;
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
  
  EmpDate2.value=TzoneDate;
  EmpDateSign.value = TzoneDate;
  EmpDate2.enabled = false;
  EmpSign.enabled = false;
  EmpDateSign.enabled = false;
} else{
  EmpDate2.value="";
  EmpSign.value = "";
  EmpSign2.value = "";
  EmpDateSign.value = "";
}
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_eligibilityCertification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_eligibilityCertification_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_AgreementHidden_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_AgreementHidden_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_logUser_init0 = function (scope) {
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
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_workflow_initiator_init0 = function (scope) {
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
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_supportDoc1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_supportDoc1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
   var filePath = supportDoc1.fileAttachment.value;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
if(extension !== "pdf"){

  supportDoc1.fileAttachment.value = null;
 
 showErrorModal("Alert!","Only PDF files are allowed");
}
    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(supportDoc1.fileAttachment.value) === true) {
        var doc1NewName = supportDoc1.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        supportDoc1.fileAttachment.value = doc1NewName;
    }
}
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_EmpSign2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_EmpSign2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled= false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_EmpDate2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_EmpDate2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled= false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_certificateInfo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_certificateInfo_init0 = function (scope) {
    with(this) {
        with(scope) {
             if(BargainingUnit.value == "R03"){
            Unit3Sign.visible = true;
    		Unit3Date.visible = true;
    		StaffUnitSign.visible = false;
            StaffUnitDate.visible = false;
          }else{
            StaffUnitSign.visible = true;
            StaffUnitDate.visible = true;
            Unit3Sign.visible = false;
    		Unit3Date.visible = false;
          }

        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_EligibilityCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_EligibilityCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    ElgibilityPanel.visible = true;
  	Reasons.visible = false;
    Reasons.value = null;
}
else{
  ElgibilityPanel.visible = false;
  Reasons.visible = true;
  CreditsCB.value = null;
}

        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_ElgibilityPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_ElgibilityPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_Reasons_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_Reasons_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible="false";
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (HRSign.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
          if(BargainingUnit.value == "R03"){
            Unit3Date.value = d;
            Unit3Date.enabled = false;
          }else{
            StaffUnitDate.value = d;
            StaffUnitDate.enabled = false;
          }
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    if(BargainingUnit.value == "R03"){
            Unit3Sign.value = userValue;
          }else{
            StaffUnitSign.value = userValue;
          }
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

            HRSign.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
  if(BargainingUnit.value == "R03"){
            Unit3Sign.value = "";
    Unit3Date.value = "";
          }else{
            StaffUnitSign.value = "";
            StaffUnitDate.value = "";
          }
}
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_HRSection_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_HRSection_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (EMPLID.value === null && FirstName.value === null && LastName.value === null) {
   showErrorModal("Alert !","Please enter EMPLID,First Name and Last Name");
    submitFlag=1;
}else{
   submitFlag  = 0;
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
            jsonData.append('formPath', '/content/forms/af/catastrophic-leave-request/catastrophic-leave-request');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EMPLID.value + ")" + "_" + Date.now());          
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
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_saveguidedraft1587032893049_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_saveguidedraft1587032893049_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);

//handleDraftSave(this);

if(EMPLID.value !== null){
  formSavedStatus.value = "1";
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EMPLID.value);
  handleDraftSave(this);
}else{
  aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
    handleDraftSave(this);
}



        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;

alert(IllnessType.value);
/*if(IllnessType.value == "1"){
  
}*/



if(eligibleCB.value === null && nonEligibleCB.value === null){
   /*alert("Please indicate whether employee is eligible to participate");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].certificateInfo[0].eligibleCB[0]");*/
  var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please indicate whether employee is eligible to participate";
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
    
    modal.style.display = "block";
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].certificateInfo[0].eligibleCB[0]");
  
    submitFlag  = 1;
  }else{
     submitFlag  = 0;
  }
  
   
   
if(eligibleCB.value == 1){
  if(vacationCredits.value === null && allCredits.value === null){
    /*alert("Please indicate leave credits which may be donated");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].certificateInfo[0].vacationCredits[0]");*/
    
    var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please indicate leave credits which may be donated";
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
    
    modal.style.display = "block";
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].certificateInfo[0].vacationCredits[0]");
    
    
    submitFlag  = 1;
  }else{
     submitFlag  = 0;
  }
}

if(submitFlag  === 0 && nonEligibleCB.value == 1){
  if(Reasons.value === null){
    /*alert("Please explain why employee does not meet eligibility criteria");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].certificateInfo[0].Reasons[0]");*/
    
    
    var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please explain why employee does not meet eligibility criteria";
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
    
    modal.style.display = "block";
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].certificateInfo[0].Reasons[0]");
    submitFlag  = 1;
  }else{
     submitFlag  = 0;
  }
}
aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EMPLID.value);

alert(aftiaDescCWID.value);
if(submitFlag  === 0){
  /*EmpID1.value = EMPLID.value;
  EmpFN.value = FirstName.value;
  EmpLN.value = LastName.value;
  EMPLRCD1.value = EMPLRCD.value;
  Department1.value = DepartmentName.value;*/
  guideBridge.submit();
}

        }
	}
}
/**
 * @function catastrophic_leave_request_catastrophic_leave_request.generated_submit1575264176703_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
catastrophic_leave_request_catastrophic_leave_request.generated_submit1575264176703_click1 = function (scope) {
    with(this) {
        with(scope) {
            
//EmpEmailAddress.value = "swathi.kumari@thoughtfocus.com";
//EmpEmailAddress.value = "yjayaram@fullerton.edu";
EmpEmailAddress.value = "soumya.ravindra@thoughtfocus.com";


aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EMPLID.value);

if(LastName.value !== null){
	EmailSubject.value = "Catastrophic Leave Request Form - "+ LastName.value;
}else{
 	EmailSubject.value = "Catastrophic Leave Request Form"; 
}

guideBridge.submit();
        }
	}
}
