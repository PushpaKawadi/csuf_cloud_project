/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
  
  		
		$.ajax({
		type: 'GET',
		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
			if(myresponse.Status == "Success"){
				var userValue=myresponse.userId;
				logUser.value = userValue;
				workflow_initiator.value = userValue;
             

				$.ajax({
				 type: 'GET',
						url: "/bin/getPreRetirementData",
						data: {action: "PR_USER_DATA",userID:userValue},
						dataType: 'json',
						success: function(myresopnse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
								  CWID.value = myresopnse[0].EMPLID;
                              	 Department.value = myresopnse[0].DEPTNAME;
                              	DeptID.value =  myresopnse[0].DEPTID;
                              var fn = myresopnse[0].FIRST_NAME;
                               var ln = myresopnse[0].LAST_NAME;
                              var result = fn.concat(" ").concat(ln);
                             	PrintName.value = result;
                              FirstName.value = myresopnse[0].FIRST_NAME;
                              LastName.value = myresopnse[0].LAST_NAME;
                              FacultyEmailID.value = myresopnse[0].EMAILID;
                              FulCollegeName.value = myresopnse[0].FUL_COLLEGE_NAME;
                              FulCollege.value = myresopnse[0].FUL_COLLEGE;
                              	
							  
								  gifModal.style.display = "none";
								  modal.style.display = "none";
								
							}else if (myresopnse.length > 1) {
							   gifModal.style.display = "none";
							   modal.style.display = "block";
							  
							  
							  var col = [];
								col.push("EMPLID");
								col.push("LAST_NAME");
								col.push("FIRST_NAME");
								col.push("DEPTID");
								col.push("DEPTNAME");
								
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
									
								var n;
								var rButtonStatus;
							  //var rButtonStatusFalse;
								var rButtons = document.getElementsByClassName("rb");
								for(n=0;n<rButtons.length;n++){
									if(rButtons[n].checked === false){
									  rButtonStatus = false;
									}else{
									  CWID.value = myresopnse[n].EMPLID;
                              	 Department.value = myresopnse[n].DEPTNAME;
                              	DeptID.value =  myresopnse[n].DEPTID;
                                FulCollegeName.value = myresopnse[n].FUL_COLLEGE_NAME;
                              FulCollege.value = myresopnse[n].FUL_COLLEGE;
                              var fn = myresopnse[n].FIRST_NAME;
                               var ln = myresopnse[n].LAST_NAME;
                              var result = fn.concat(" ").concat(ln);
                             	PrintName.value = result;
                                FirstName.value = myresopnse[n].FIRST_NAME;
                              LastName.value = myresopnse[n].LAST_NAME;
                                 FacultyEmailID.value = myresopnse[n].EMAILID;
                                      
									  rButtonStatus = true;
									  break;
									}
							  }
							  if(rButtonStatus === false){
								alert("Please select the department");
								modal.style.display = "block";
							  }else {
									   
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
						   
							   
								gifModal.style.display = "none";
							}
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

        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  SignatureACK.visible = true;
  FacultyPanel.visible = false;
  ChairPanel.visible = false;
  DeanPanel.visible = false;
  HRReviewPanel.visible = false;
  ProvostPanel.visible = false;
  DeptCooPanel.visible = true;
  PayrollPanel.visible=false;
}


if(StageIndicator.value === "ToChair"){
 employeeInformation.enabled = false;
  SignatureACK.visible=true;
  
  FacultyPanel.visible = true;
  FacultyPanel.enabled = false;
  ChairPanel.visible = true;
  DeanPanel.visible = false;
  HRReviewPanel.visible = false;
  ProvostPanel.visible = false;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}

if(StageIndicator.value === "ToDean"){
  employeeInformation.enabled = false;
  SignatureACK.visible=true;
   FacultyPanel.visible = true;
  FacultyPanel.enabled = false;
  ChairPanel.visible = true;
   ChairPanel.enabled = false;
  DeanPanel.visible = true;
  HRReviewPanel.visible = false;
  ProvostPanel.visible = false;
 DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}


if(StageIndicator.value === "ToHR"){
 employeeInformation.enabled = false;
  SignatureACK.visible=true;
  FacultyPanel.visible = true;
  FacultyPanel.enabled = false;
  ChairPanel.visible = true;
  ChairPanel.enabled = false;
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = true;
  ProvostPanel.visible = false;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}
if(StageIndicator.value === "ToHR1"){
 employeeInformation.enabled = false;
  SignatureACK.visible=true;
  FacultyPanel.visible = false;
  FacultyPanel.enabled = false;
  ChairPanel.visible = false;
  ChairPanel.enabled = false;
  DeanPanel.visible = false;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = false;
  ProvostPanel.visible = false;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}
if(StageIndicator.value === "ToHR2"){
 employeeInformation.enabled = false;
  SignatureACK.visible=true;
  FacultyPanel.visible = true;
  FacultyPanel.enabled = false;
  ChairPanel.visible = true;
  ChairPanel.enabled = false;
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = false;
  ProvostPanel.visible = false;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}

if(StageIndicator.value === "ToProvost"){
  employeeInformation.enabled = false;
  SignatureACK.visible=true;
  FacultyPanel.visible = true;
  FacultyPanel.enabled = false;
  ChairPanel.visible = true;
  ChairPanel.enabled = false;
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = false;
   HRReviewPanel.enabled = false;
  ProvostPanel.visible = true;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}

if(StageIndicator.value === "ToFaculty"){
  employeeInformation.enabled = false;
  SignatureACK.visible=true;
  FacultyPanel.visible = true;
  FacultyPanel.enabled = true;
  ChairPanel.visible = false;
  ChairPanel.enabled = false;
  DeanPanel.visible = false;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = false;
   HRReviewPanel.enabled = false;
  ProvostPanel.visible = false;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=false;
}

if(StageIndicator.value === "ToRequestor"){
  employeeInformation.enabled = true;
  SignatureACK.visible=true;
  FacultyPanel.visible = false;
  FacultyPanel.enabled = false;
  ChairPanel.visible = false;
  ChairPanel.enabled = false;
  DeanPanel.visible = false;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = false;
   HRReviewPanel.enabled = false;
  ProvostPanel.visible = false;
   DeptCooPanel.visible = true;
  DeptCooPanel.enabled = true;
  PayrollPanel.visible=false;
}

if(StageIndicator.value === "ToPayroll"){
  employeeInformation.enabled = false;
  SignatureACK.visible=true;
  FacultyPanel.visible = true;
  FacultyPanel.enabled = false;
  ChairPanel.visible = true;
  ChairPanel.enabled = false;
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = false;
  HRReviewPanel.enabled = false;
  ProvostPanel.visible = false;
  DeptCooPanel.visible = true;
  DeptCooPanel.enabled = false;
  PayrollPanel.visible=true;
  PayrollPanel.enabled=true;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

/*var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";*/


$.ajax({
type: 'GET',
url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
   
if(myresponse.Status == "Success"){
var userValue=myresponse.userId;


  $.ajax({

  type: 'GET',

  url: "/bin/getEvaluationFormData",
    data : {action : "EMP_DETAILS"},
  dataType: 'json',
  success: function(myresopnse) {
    var preByValue = myresopnse[0].EMP_NAME;
    PreparerName.value = preByValue;
    PreparerEmail.value = myresopnse[0].EMAILID;
    PreparerUserId.value = userValue;
  },
  error: function(error) {
    alert("error block=" + error);
  }
});
      
}
}
});
}

        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete" , function(event, payload) {
  if(DeptId_Hidden.value == "10216"){
                                         ChairUserID.value  = "jsheehan";
										ChairEmail.value  = "jsheehan@FULLERTON.EDU";
                                        ChairName.value =  "Jaime Sheehan";
                                      	ChairEmail.value = "yjayaram@fullerton.edu";
										DeanUserID.value = "vincentvigil";
                          DeanName.value = "Vincent Vigil";
                          DeanEmail.value = "vincentvigil@FULLERTON.EDU";
                           DeanEmail.value = "yjayaram@fullerton.edu";
                                      }
});
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_textdraw1575095828043_copy_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_textdraw1575095828043_copy_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
  
  		
		$.ajax({
		type: 'GET',
		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
			if(myresponse.Status == "Success"){
				var userValue=myresponse.userId;
				logUser.value = userValue;
				workflow_initiator.value = userValue;
             

				$.ajax({
				 type: 'GET',
						url: "/bin/getPreRetirementData",
						data: {action: "PR_USER_DATA",cwid:CWID.value},
						dataType: 'json',
						success: function(myresopnse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
                             
								  //CWID.value = myresopnse[0].EMPLID;
                              	 Department.value = myresopnse[0].DEPTNAME;
                              	DeptID.value =  myresopnse[0].DEPTID;
                              var fn = myresopnse[0].FIRST_NAME;
                               var ln = myresopnse[0].LAST_NAME;
                              var result = fn.concat(" ").concat(ln);
                             	PrintName.value = result;
                              FirstName.value = myresopnse[0].FIRST_NAME;
                              LastName.value = myresopnse[0].LAST_NAME;
                              FacultyEmailID.value = myresopnse[0].EMAILID;
                              FacultyUserID.value = myresopnse[0].EMP_USERID;
                              FulCollegeName.value = myresopnse[0].FUL_COLLEGE_NAME;
                              FulCollege.value = myresopnse[0].FUL_COLLEGE;
                              	if(myresopnse[0].UNION_CD == "M80"|| myresopnse[0].UNION_CD == "M98"){
                                  MPPCB.visible = true;
                                }else{
                                   MPPCB.visible = false;
                                  MPPCB.value = "";
                                }
							  DeptId_Hidden.value = myresopnse[0].DEPTID;
                              DeptName_hidden.value = myresopnse[0].DEPTNAME;
                              College_hidden.value = myresopnse[0].FUL_COLLEGE;
                              Union_Cd.value = myresopnse[0].UNION_CD;
								  gifModal.style.display = "none";
								  modal.style.display = "none";
								
							}else if (myresopnse.length > 1) {
                             
							   gifModal.style.display = "none";
							   modal.style.display = "block";
							  
							  
							  var col = [];
								col.push("EMPLID");
								col.push("LAST_NAME");
								col.push("FIRST_NAME");
								col.push("DEPTID");
								col.push("DEPTNAME");
								
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
									
								var n;
								var rButtonStatus;
							  //var rButtonStatusFalse;
								var rButtons = document.getElementsByClassName("rb");
								for(n=0;n<rButtons.length;n++){
									if(rButtons[n].checked === false){
									  rButtonStatus = false;
									}else{
									  //CWID.value = myresopnse[n].EMPLID;
                              	 Department.value = myresopnse[n].DEPTNAME;
                              	DeptID.value =  myresopnse[n].DEPTID;
                                FulCollegeName.value = myresopnse[n].FUL_COLLEGE_NAME;
                              FulCollege.value = myresopnse[n].FUL_COLLEGE;
                              var fn = myresopnse[n].FIRST_NAME;
                               var ln = myresopnse[n].LAST_NAME;
                              var result = fn.concat(" ").concat(ln);
                             	PrintName.value = result;
                                FirstName.value = myresopnse[n].FIRST_NAME;
                              LastName.value = myresopnse[n].LAST_NAME;
                                 FacultyEmailID.value = myresopnse[n].EMAILID;
                                      FacultyUserID.value = myresopnse[0].EMP_USERID;
                                      if(myresopnse[n].UNION_CD == "M80"|| myresopnse[n].UNION_CD == "M98"){
                                  MPPCB.visible = true;
                                }else{
                                   MPPCB.visible = false;
                                   MPPCB.value = "";
                                }
                                      DeptId_Hidden.value = myresopnse[n].DEPTID;
                              DeptName_hidden.value = myresopnse[n].DEPTNAME;
                              College_hidden.value = myresopnse[n].FUL_COLLEGE;
                                      Union_Cd.value = myresopnse[n].UNION_CD;
									  rButtonStatus = true;
									  break;
									}
							  }
							  if(rButtonStatus === false){
								alert("Please select the department");
								modal.style.display = "block";
							  }else {
									   
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
						   
							   
								gifModal.style.display = "none";
							}
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

        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_MPPCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_MPPCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRequestor" || StageIndicator.value === null)
{if(Union_Cd.value == "M80" || Union_Cd.value == "M98"){
  this.visible = true;
}else{
  this.visible = false;
}
  if(this.value === null){
  this.visible = false;
  MPPDeptPanel.visible = false;
}else{
  if(this.value == 1){
    this.visible = true;
    MPPDeptPanel.visible = true;
  }
}
}else{
  MPPDeptPanel.visible = false;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_MPPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_MPPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  debugger;
if(this.value != 1){
  MPPDeptPanel.visible = false;
  SearchDeptId.value = "";
  SearchDeptName.value = "";
  SearchDept.value = "";
  if(DeptId_Hidden.value !== null){
  DeptID.value = DeptId_Hidden.value;
  Department.value = DeptName_hidden.value;
  FulCollege.value = College_hidden.value;
  }
}else{  
    MPPDeptPanel.visible = true;
}
}else{
  
   MPPDeptPanel.visible = false;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SearchDept_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SearchDept_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((StageIndicator.value === null || StageIndicator.value == "ToRequestor") && this.value !== null){
$.ajax({
    type: 'GET',
    url: "/bin/getPreRetirementData",
    data: {
        action: "AHR_SEARCH_DEPT",
        searchInput: this.value
    },
    dataType: 'json',
    success: function(deptResultSet) {
        if (deptResultSet.length !== 0) {
            var deptIdResult = [];
            var deptNameResult = [];
            SearchDeptId.value = "";
            SearchDeptName.value = "";
           // SearchDeptId.items = deptIdResult;
           // SearchDeptName.items = deptNameResult;
            for (var i = 0; i < deptResultSet.length; i++) {

                var idItem = deptResultSet[i].DEPTID;

                var nameItem = deptResultSet[i].DEPTNAME;

                deptIdResult.push(idItem);
                deptNameResult.push(nameItem);
            }
            SearchDeptId.items = deptIdResult;
            SearchDeptName.items = deptNameResult;
            DeptResult.value = JSON.stringify(deptResultSet);
        } else {
            showErrorModal("Alert!", "No matching records found");
        }
    }
});
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SearchDeptName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SearchDeptName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null ||StageIndicator.value == "ToRequestor"){
var departmentNameParsedArray = [];
departmentNameParsedArray = JSON.parse(DeptResult.value);
var deptName = this.value;
for(var s= 0 ; s < departmentNameParsedArray.length; s++){  
		if((departmentNameParsedArray[s].DEPTNAME).toLowerCase() == deptName.toLowerCase()){
          Department.value = deptName;
          DeptID.value = departmentNameParsedArray[s].DEPTID;
          SearchDeptId.value = departmentNameParsedArray[s].DEPTID;
          FulCollege.value = departmentParsedArray[s].FUL_COLLEGE;
          FulCollegeName.value = departmentParsedArray[s].FUL_COLLEGE_NAME;
        }		
	}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SearchDeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SearchDeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  debugger;
var departmentParsedArray = [];
departmentParsedArray = JSON.parse(DeptResult.value);
var dept = this.value;
for(var s= 0 ; s < departmentParsedArray.length; s++){  
		if(departmentParsedArray[s].DEPTID == dept){
          DeptID.value = dept;
          Department.value = departmentParsedArray[s].DEPTNAME;
          SearchDeptName.value = departmentParsedArray[s].DEPTNAME;
          FulCollege.value = departmentParsedArray[s].FUL_COLLEGE;
          FulCollegeName.value = departmentParsedArray[s].FUL_COLLEGE_NAME;
        }		
	}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SelectParticipation_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_SelectParticipation_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var selPart = this.value;
if(StageIndicator.value === null){
  if(selPart == "1"){
    BeginPartPanel.enabled=true;
    ChangePartPanel.enabled=false;
    EndPartPanel.enabled=false; 
    BeginParticipation.mandatory=true;
	BeginEffAcadYear.mandatory=true;
    
    FromChangeParticipation.mandatory=false;
    ToChangeParticipation.mandatory=false;
    ChangeEffAcadYear.mandatory=false;
    EndCB.mandatory=false;
    ExpectedRetirementDate.mandatory=false;
    
    FromChangeParticipation.value="";
    ToChangeParticipation.value="";
    ChangeEffAcadYear.value="";
    EndCB.value="";
    ExpectedRetirementDate.value="";

  } else if(selPart == "2"){
    ChangePartPanel.enabled=true;
    BeginPartPanel.enabled=false;
    EndPartPanel.enabled=false; 
    
    BeginParticipation.mandatory=false;
	BeginEffAcadYear.mandatory=false;
    BeginParticipation.value="";
	BeginEffAcadYear.value="";
    
    FromChangeParticipation.mandatory=true;
    ToChangeParticipation.mandatory=true;
    ChangeEffAcadYear.mandatory=true;
    
    EndCB.mandatory=false;
    ExpectedRetirementDate.mandatory=false;
    EndCB.value="";
    ExpectedRetirementDate.value="";
    
    
    
  } else if(selPart == "3"){
    EndPartPanel.enabled =  true;
    BeginPartPanel.enabled=false;
    ChangePartPanel.enabled=false;
    
    BeginParticipation.mandatory=false;
	BeginEffAcadYear.mandatory=false;
    BeginParticipation.value="";
	BeginEffAcadYear.value="";
    
    FromChangeParticipation.mandatory=false;
    ToChangeParticipation.mandatory=false;
    ChangeEffAcadYear.mandatory=false;
    FromChangeParticipation.value="";
    ToChangeParticipation.value="";
    ChangeEffAcadYear.value="";
    
    EndCB.mandatory=true;
    ExpectedRetirementDate.mandatory=true;
    
    
  }
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_BeginPartPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_BeginPartPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled=false;
}

        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_BeginParticipation_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_BeginParticipation_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  FromChangeParticipation.value = null;
  ToChangeParticipation.value = null;
  EndCB.value = null;
  ExpectedRetirementDate.value = null;
  ExpectedRetirementDate.mandatory = false;
  ChangeEffAcadYear.value = null;
  ChangeEffAcadYear.mandatory = false;
  BeginEffAcadYear.mandatory = true;
} else{
  BeginEffAcadYear.mandatory = false;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ChangePartPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ChangePartPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled=false;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FromChangeParticipation_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FromChangeParticipation_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ToChangeParticipation.mandatory = true;
  ChangeEffAcadYear.mandatory = true;
  BeginParticipation.value = "";
  BeginEffAcadYear.value = "";
  EndCB.value = "";
  ExpectedRetirementDate.value = "";
} else{
  ToChangeParticipation.mandatory = false;
  ChangeEffAcadYear.mandatory = false;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ToChangeParticipation_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ToChangeParticipation_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value !== null){
  FromChangeParticipation.mandatory = true;
  ChangeEffAcadYear.mandatory = true;
  BeginParticipation.value = "";
  BeginEffAcadYear.value = "";
  EndCB.value = "";
  ExpectedRetirementDate.value = "";
} else{
  FromChangeParticipation.mandatory = false;
  ChangeEffAcadYear.mandatory = false;
}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_EndPartPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_EndPartPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.enabled=false;
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_EndCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_EndCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value !== null){
  BeginParticipation.value = "";
  BeginEffAcadYear.mandatory = false;
  BeginEffAcadYear.value = "";
  FromChangeParticipation.value = "";
  ToChangeParticipation.value = "";
  ExpectedRetirementDate.mandatory = true;
  ChangeEffAcadYear.value = "";
  ChangeEffAcadYear.mandatory = false;
}else{
  ExpectedRetirementDate.mandatory = false;
}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollSignEmailID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollSignEmailID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var depID = this.value;
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
$.ajax({

  type: 'GET',

  url: "/bin/getPreRetirementData",
    data : {action : "PR_CHAIR_DATA",depID:depID},
  dataType: 'json',
  success: function(myresopnse) {
   /* DeanName.value = myresopnse[0].DEAN_NAME;
    DeanEmail.value = myresopnse[0].DEAN_EMAIL;
    DeanUserID.value = myresopnse[0].DEAN_USERID;*/
    
    ChairName.value = myresopnse[0].CHAIR_NAME;
    ChairEmail.value = myresopnse[0].CHAIR_EMAIL;
    ChairUserID.value = myresopnse[0].CHAIR_USERID;
   ChairEmail.value = "yjayaram@fullerton.edu";
   
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
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FulCollege_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FulCollege_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var fulCollege = this.value;
if(StageIndicator.value === null){
$.ajax({

  type: 'GET',

  url: "/bin/getPreRetirementData",
    data : {action : "PR_DEAN_DATA",fulCollege:fulCollege},
  dataType: 'json',
  success: function(myresopnse) {
    DeanName.value = myresopnse[0].EMPNAME;
    DeanEmail.value = myresopnse[0].EMP_EMAIL;
    DeanUserID.value = myresopnse[0].EMP_USERID;
    DeanEmail.value = "yjayaram@fullerton.edu";
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
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
  //if (StageIndicator.value == "ToHRCoo") {
  if (PayrollSignature.value === null) {

    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedInUserDetailsFromDB",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse[0].FULL_NAME;
        PayrollSignature.value = userValue;
        PayrollDate.value = myresopnse[0].SERVER_DATE;
        PayrollName.value = userValue;
        //PayrollExt.value = "payroll@fullerton.edu";
       // PayrollSignEmailID.value = "payroll@fullerton.edu";
        PayrollSignEmailID.value = "mamata.hampannavar@thoughtfocus.com";
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });

    // FacultyName.enabled = false;

  }
  //}
} else {
  PayrollSignature.value = "";
  PayrollDate.value = "";
  PayrollSignEmailID.value = "";
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToHR") {
if (this.value == "0") {
    
        if (HRDISignature.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    HRDISignature.value = userValue;
                    HRDIDate.value = myresopnse[0].SERVER_DATE;
                   
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    HRDISignature.value = "";
    HRDIDate.value = "";
}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HRDISignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HRDISignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HRDIDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_HRDIDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollCB_valueCommit00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_PayrollCB_valueCommit00 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToProvost") {
if (this.value == "0") {
    //if (StageIndicator.value == "ToHRCoo") {
        if (VPAASign.value === null) {
            
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    VPAASign.value = userValue;
                    VPAADate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

          // FacultyName.enabled = false;
           

        } 
    //}
} else {
    VPAASign.value = "";
    VPAADate.value = "";
}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_VPAASign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_VPAASign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_VPAADate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_VPAADate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDean"){
if (this.value == "0") {
        if (DeanSign.value === null) {

            DeanDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    DeanSign.value = userValue;
                    DeanDate.value = myresopnse[0].SERVER_DATE;
                  
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           DeanSign.enabled = false;
          } 
    //}
} else {
    DeanSign.value = "";
    DeanDate.value = "";
 
}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeanSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeanSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeanDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeanDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChair"){
if (this.value == "0") {
        if (ChairSign.value === null) {
            
            ChairDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    ChairSign.value = userValue;
                  	ChairDate.value = myresopnse[0].SERVER_DATE;
                  	
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           ChairSign.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    ChairSign.value = "";
    ChairDate.value = "";
}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ChairSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ChairSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_ChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_RequestorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_RequestorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToFaculty"){
if (this.value == "1") {
        if (FacultyMemSign.value === null) {

            FacultyMemDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                   
                  	FacultyMemSign.value = userValue;
                    FacultyMemDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           PreparedPrintName.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    FacultyMemDate.value = "";
    FacultyMemSign.value = "";

}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FacultyMemSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FacultyMemSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FacultyMemDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_FacultyMemDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptCooCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptCooCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

if (this.value == "1") {
        if (DeptCooSign.value === null) {

            DeptCooDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                   
                  	DeptCooSign.value = userValue;
                    DeptCooDate.value = myresopnse[0].SERVER_DATE;
                    
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } 
} else {
    DeptCooSign.value = "";
    DeptCooDate.value = "";

}
}
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptCooSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptCooSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptCooDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_DeptCooDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (CWID.value !== null ) {
  submitFlag=0;
      
 } else{
   
   showErrorModal("Alert!","Please enter CWID");   
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
            jsonData.append('formPath', '/content/forms/af/pre-retirement-reduction-in-time-base-form/pre-retirement-reduction-in-time-base-request-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', PrintName.value+"_" + "(" + CWID.value + ")" + "_" + Date.now());                    
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
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = PrintName.value + " "+ CWID.value ;
}
handleDraftSave(this);

/*if(EmplId.value !== null){
  formSavedStatus.value = "1";
  if(EmplId.value !== null){
  aftiaDescCWID.value = FirstName.value +" "+ LastName.value + " "+ EmplId.value ;
}
  handleDraftSave(this);
}else{
  if(EmplId.value !== null){
  aftiaDescCWID.value = FirstName.value +" "+ LastName.value + " "+ EmplId.value ;
}
    handleDraftSave(this);
}*/
        }
	}
}
/**
 * @function pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
pre_retirement_reduction_in_time_base_form_pre_retirement_reduction_in_time_base_request_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*ChairEmail.value="swathi.kumari@thoughtfocus.com";
FacultyEmailID.value="swathi.kumari@thoughtfocus.com";
DeanEmail.value = "swathi.kumari@thoughtfocus.com";
PreparerEmail.value = "swathi.kumari@thoughtfocus.com";*/
/*ChairEmail.value="anupama.dhar@thoughtfocus.com";
FacultyEmailID.value="anupama.dhar@thoughtfocus.com";
DeanEmail.value = "anupama.dhar@thoughtfocus.com";
PreparerEmail.value = "anupama.dhar@thoughtfocus.com";*/

/*ChairEmail.value="julnunez@FULLERTON.EDU";
FacultyEmailID.value="julnunez@FULLERTON.EDU";
DeanEmail.value ="julnunez@FULLERTON.EDU";
PreparerEmail.value = "julnunez@FULLERTON.EDU";*/

ChairEmail.value="mamata.hampannavar@thoughtfocus.com";
FacultyEmailID.value="mamata.hampannavar@thoughtfocus.com";
DeanEmail.value ="mamata.hampannavar@thoughtfocus.com";
PreparerEmail.value = "mamata.hampannavar@thoughtfocus.com";
PayrollSignEmailID.value = "mamata.hampannavar@thoughtfocus.com"; 

/*ChairEmail.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
FacultyEmailID.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
DeanEmail.value ="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
PreparerEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";*/

if(CWID.value !== null){
 aftiaDescCWID.value = PrintName.value +" "+ CWID.value;
 EmailSubject.value = "Test - Pre-Retirement Reduction in Timebase Request form - " + PrintName.value;
}


var flag = 0;
/*if(flag === 0){
  if(BeginParticipation.value === null && FromChangeParticipation.value === null && ToChangeParticipation.value === null && EndCB.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter the participation details.");
}else{
    flag = 0;
  }
}*/

if(flag===0){
  if(FromChangeParticipation.value == "2" && ToChangeParticipation.value == "1"){
    showErrorModal("Alert!","Please select the valid change participation details.");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInformation[0].panel_17549383281632111477085[0].panel1632111541548[0]");
    flag = 1;
  }else{
    flag = 0;
  }
}
if(flag===0){
  if(FromChangeParticipation.value == "3" && ToChangeParticipation.value == "2"){
    showErrorModal("Alert!","Please select the valid change participation details.");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInformation[0].panel_17549383281632111477085[0].panel1632111541548[0]");
    flag = 1;
  }else{
    flag = 0;
  }
}
if(flag === 0 ){
  if(DeptId_Hidden.value == "10216"){
                                        ChairUserID.value  = "jsheehan";
										ChairEmail.value  = "jsheehan@FULLERTON.EDU";
                                        ChairName.value =  "Jaime Sheehan";
                                      	ChairEmail.value = "yjayaram@fullerton.edu";
										DeanUserID.value = "vincentvigil";
                          DeanName.value = "Vincent Vigil";
                          DeanEmail.value = "vincentvigil@FULLERTON.EDU";
                           DeanEmail.value = "yjayaram@fullerton.edu";
                                      }
guideBridge.submit();
}


        }
	}
}
