/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            

if(StageIndicator.value === null && formSavedStatus.value !== "1"){
  var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

$.ajax({

		type: 'GET', 

		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
	    var userValue = myresponse.userId;
	    LogUser.value = userValue;
          
        if(LogUser.value == "Admin" || LogUser.value == "admin"){
	    	showErrorModal("Alert !", "No matching records found");
  			gifModal.style.display = "none";
		}else{
		  
		  Email.value = userValue.concat("@exchange.fullerton.edu");
		  
		  $.ajax({
		  
				type: 'GET',   
				url: '/bin/getPersonalFileAccessRequestUserLookUp',   
				data: {
				  
					userID: userValue
				}, 
		  
				dataType: 'JSON', 
		  
				success: function(myresponse){
						
						 var modal = document.getElementById('myModal');
						 var span = document.getElementsByClassName("close")[0];
				  
						if(myresponse.length === 1){
								First_Name.value = myresponse[0].first_name; 
								Last_Name.value = myresponse[0].last_name;
								Middle_Initials.value = myresponse[0].Middle_Initial;
								Empl_ID.value = myresponse[0].emplid;
								Campus_Phone.value = myresponse[0].work_phone;
								Dept_ID.value = myresponse[0].deptid;
								Department.value = myresponse[0].deptname;
						  
								gifModal.style.display = "none";
								modal.style.display = "none";
						}else if (myresponse.length > 1) {
						 // alert("here1");
								gifModal.style.display = "none";
								modal.style.display = "block";

								//populate Hidden Fields
							  
								HiddenMiddleInitials.value = myresponse[0].Middle_Initial;
								HiddenWorkPhone.value = myresponse[0].work_phone;
								HiddenEmpID.value = myresponse[0].emplid;
					 
								var col = [];
								col.push("first_name");
								col.push("last_name");            
								col.push("deptname");
								col.push("deptid");						

								var table = document.createElement("table");
								table.id = "tb";
								var tr = table.insertRow(-1);
								var headings = ["", "First Name", "Last Name", "Dept Name", "Dept ID"];
								for (var j = 0; j < headings.length; j++) {
									var th = document.createElement("th");
									th.innerHTML = headings[j];
									tr.appendChild(th);
								}
								for (var k = 0; k < myresponse.length; k++) {
									tr = table.insertRow(-1);
									
									var button = document.createElement("input");
									button.type = "radio";
									button.setAttribute("class", "rb");
									button.id = "rbtn";
									button.name = "group";
									button.value = "";

									button.onclick = function(event) {
										
										HiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
										HiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
										HiddenDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
										HiddenDeptID.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
									
									okButton.value = "OK";
									okButton.onclick = function(event) {
									
									var n;
									var rButtonStatus;							
									var rButtons = document.getElementsByClassName("rb");
									for (n = 0; n < rButtons.length; n++) {
										if (rButtons[n].checked === false) {
											rButtonStatus = false;
										} else {
										  
											HiddenFirstName.value = myresponse[n].first_name;
											HiddenLastName.value = myresponse[n].last_name;
											HiddenDepartmentName.value = myresponse[n].deptname;
											HiddenDeptID.value = myresponse[n].deptid;                     	                      	
											HiddenMiddleInitials.value = myresponse[n].Middle_Initial;
											HiddenWorkPhone.value = myresponse[n].work_phone;
											HiddenEmpID.value = myresponse[n].emplid;
											rButtonStatus = true;
											break;
										  
										}
									}
									if (rButtonStatus === false) {
											alert("Please select the department");
											modal.style.display = "block";
									} else {
											First_Name.value = HiddenFirstName.value;
											Last_Name.value = HiddenLastName.value;
											Middle_Initials.value = HiddenMiddleInitials.value;
											Empl_ID.value = HiddenEmpID.value;
											Campus_Phone.value =HiddenWorkPhone.value;                  	
											Dept_ID.value = HiddenDeptID.value;
											Department.value = HiddenDepartmentName.value;
											
											modal.style.display = "none";
									}
								};
								
										footerModal.appendChild(okButton);

						} else {
							
									showErrorModal("Alert !", "No matching records found");
							
									First_Name.value = null;
									Last_Name.value = null;
									Middle_Initials.value = null;
									Empl_ID.value = null;
									Campus_Phone.value = null;
									Dept_ID.value = null;
									Department.value = null;
									
									gifModal.style.display = "none";
						}
						////////////////////////////////////////////
						span.onclick = function() {
							var n;
							var rButtonStatus;
							
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
						window.onclick = function(event) {
							if (event.target == modal) {
								modal.style.display = "none";
							}
						};
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
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  HRDIDepartmentPanel.visible = false;
  //EmployeeInformationPanel.enabled = false;
}

if(StageIndicator.value === "ToHR"){
  
  EmployeeInformationPanel.enabled = false;
  EmployeeSignaturePanel.enabled = false;
  TaskDuringAppointmentPanel.enabled = false;
  HRDIDepartmentPanel.visible = true;
  HRDIDepartmentPanel.enabled = true;
  
}

        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value !== "1"){
  var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

$.ajax({

		type: 'GET', 

		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
	    var userValue = myresponse.userId;
	    LogUser.value = userValue;
          
        if(LogUser.value == "Admin" || LogUser.value == "admin"){
	    	showErrorModal("Alert !", "No matching records found");
  			gifModal.style.display = "none";
		}else{
		  
		  Email.value = userValue.concat("@exchange.fullerton.edu");
		   $.ajax({
			type: 'GET', 
			url:"/bin/checkTheUserIsAnAuthorizableMember",
			data: {
			userId: userValue,
			  groupId : "HR-Compensation-Review"
			 },
			dataType: 'json',
			success: function(userDetails){
			  status = userDetails.Result;
			   AuthUserStatus.value = status;
			  //alert(status);



		  if(status == "true"){  
		   
		  Empl_ID.enabled = true;
			  }else{
				
				Empl_ID.enabled = false;
				}
		  $.ajax({
		  
				type: 'GET',   
				url: '/bin/getPersonalFileAccessRequestUserLookUp',   
				data: {
				  
					userID: userValue
				}, 
		  
				dataType: 'JSON', 
		  
				success: function(myresponse){
						
						 var modal = document.getElementById('myModal');
						 var span = document.getElementsByClassName("close")[0];
				  
						if(myresponse.length === 1){
								First_Name.value = myresponse[0].first_name; 
								Last_Name.value = myresponse[0].last_name;
								Middle_Initials.value = myresponse[0].Middle_Initial;
								Empl_ID.value = myresponse[0].emplid;
								Campus_Phone.value = myresponse[0].work_phone;
								Dept_ID.value = myresponse[0].deptid;
								Department.value = myresponse[0].deptname;
						  
								gifModal.style.display = "none";
								modal.style.display = "none";
						}else if (myresponse.length > 1) {
						 // alert("here1");
								gifModal.style.display = "none";
								modal.style.display = "block";

								//populate Hidden Fields
							  
								HiddenMiddleInitials.value = myresponse[0].Middle_Initial;
								HiddenWorkPhone.value = myresponse[0].work_phone;
								HiddenEmpID.value = myresponse[0].emplid;
					 
								var col = [];
								col.push("first_name");
								col.push("last_name");            
								col.push("deptname");
								col.push("deptid");						

								var table = document.createElement("table");
								table.id = "tb";
								var tr = table.insertRow(-1);
								var headings = ["", "First Name", "Last Name", "Dept Name", "Dept ID"];
								for (var j = 0; j < headings.length; j++) {
									var th = document.createElement("th");
									th.innerHTML = headings[j];
									tr.appendChild(th);
								}
								for (var k = 0; k < myresponse.length; k++) {
									tr = table.insertRow(-1);
									
									var button = document.createElement("input");
									button.type = "radio";
									button.setAttribute("class", "rb");
									button.id = "rbtn";
									button.name = "group";
									button.value = "";

									button.onclick = function(event) {
										
										HiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
										HiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
										HiddenDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
										HiddenDeptID.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
									
									okButton.value = "OK";
									okButton.onclick = function(event) {
									
									var n;
									var rButtonStatus;							
									var rButtons = document.getElementsByClassName("rb");
									for (n = 0; n < rButtons.length; n++) {
										if (rButtons[n].checked === false) {
											rButtonStatus = false;
										} else {
										  
											HiddenFirstName.value = myresponse[n].first_name;
											HiddenLastName.value = myresponse[n].last_name;
											HiddenDepartmentName.value = myresponse[n].deptname;
											HiddenDeptID.value = myresponse[n].deptid;                     	                      	
											HiddenMiddleInitials.value = myresponse[n].Middle_Initial;
											HiddenWorkPhone.value = myresponse[n].work_phone;
											HiddenEmpID.value = myresponse[n].emplid;
											rButtonStatus = true;
											break;
										  
										}
									}
									if (rButtonStatus === false) {
											alert("Please select the department");
											modal.style.display = "block";
									} else {
											First_Name.value = HiddenFirstName.value;
											Last_Name.value = HiddenLastName.value;
											Middle_Initials.value = HiddenMiddleInitials.value;
											Empl_ID.value = HiddenEmpID.value;
											Campus_Phone.value =HiddenWorkPhone.value;                  	
											Dept_ID.value = HiddenDeptID.value;
											Department.value = HiddenDepartmentName.value;
											
											modal.style.display = "none";
									}
								};
								
										footerModal.appendChild(okButton);

						} else {
							
									showErrorModal("Alert !", "No matching records found");
							
									First_Name.value = null;
									Last_Name.value = null;
									Middle_Initials.value = null;
									Empl_ID.value = null;
									Campus_Phone.value = null;
									Dept_ID.value = null;
									Department.value = null;
									
									gifModal.style.display = "none";
						}
						////////////////////////////////////////////
						span.onclick = function() {
							var n;
							var rButtonStatus;
							
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
						window.onclick = function(event) {
							if (event.target == modal) {
								modal.style.display = "none";
							}
						};
					}
				}); 
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
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Empl_ID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Empl_ID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Empl_ID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Empl_ID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;

if(StageIndicator.value === null){
  if(cwid !== null){
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
  		$.ajax({
				 type: 'GET',
						url: "/bin/getPersonnelAccessData",
						data: {action: "PER_FILE_EMP_DATA",cwid:cwid},
						dataType: 'json',
						success: function(myresponse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresponse.length === 1 && myresponse[0].emplid !== undefined) {
								  First_Name.value = myresponse[0].first_name; 
								Last_Name.value = myresponse[0].last_name;
								Middle_Initials.value = myresponse[0].Middle_Initial;
								Empl_ID.value = myresponse[0].emplid;
								Campus_Phone.value = myresponse[0].work_phone;
								Dept_ID.value = myresponse[0].deptid;
								Department.value = myresponse[0].deptname;
                               Email.value = myresponse[0].EMP_EMAIL;
							  
								  gifModal.style.display = "none";
								  modal.style.display = "none";
								
							}else if (myresponse.length > 1) {
							   gifModal.style.display = "none";
							   modal.style.display = "block";
							  
							  
							  var col = [];
								col.push("emplid");
								col.push("last_name");
								col.push("first_name");
								col.push("deptid");
								col.push("deptname");
                               
								
								var table = document.createElement("table");
								table.id = "tb";
								var tr = table.insertRow(-1);
								var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
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
									   First_Name.value = myresponse[n].first_name; 
								Last_Name.value = myresponse[n].last_name;
								Middle_Initials.value = myresponse[n].Middle_Initial;
								Empl_ID.value = myresponse[n].emplid;
								Campus_Phone.value = myresponse[n].work_phone;
								Dept_ID.value = myresponse[n].deptid;
								Department.value = myresponse[n].deptname;
                                Email.value = myresponse[n].EMP_EMAIL;
                                      
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
								showErrorModal("Alert !", "No matching records found");
                                    First_Name.value = ""; 
                                    Last_Name.value = "";
                                    Middle_Initials.value = "";
                                    Empl_ID.value = "";
                                    Campus_Phone.value = "";
                                    Dept_ID.value = "";
                                    Department.value ="";
                                    Email.value = "";
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
}
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_First_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_First_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Last_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Last_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Middle_Initials_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Middle_Initials_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Date_Initiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Date_Initiated_init0 = function (scope) {
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
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Campus_Phone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Campus_Phone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Email_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Dept_ID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Dept_ID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_ViewPersonnelFile_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_ViewPersonnelFile_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){  
  ObtainCopies.value = null;
  AuthorizeUnionRep.value = null;
  Other.value = null;  
}

        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_ObtainCopies_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_ObtainCopies_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){  
    ViewPersonnelFile.value = null;
    AuthorizeUnionRep.value = null;
    Other.value = null;  		
  	Copy1.enabled = true;
    Copy2.enabled = true;
    Copy3.enabled = true;
    Copy4.enabled = true;
    Copy5.enabled = true;
    Copy6.enabled = true;
}
else{
  	  Copy1.value = null;
      Copy2.value = null;
      Copy3.value = null;
      Copy4.value = null;
      Copy5.value = null;
      Copy6.value = null;
      Copy1.enabled = false;
      Copy2.enabled = false;
      Copy3.enabled = false;
      Copy4.enabled = false;
      Copy5.enabled = false;
      Copy6.enabled = false;
}
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Copy1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Copy1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Copy2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Copy2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Copy3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Copy3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Copy4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Copy4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Copy5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Copy5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Copy6_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Copy6_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_AuthorizeUnionRep_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_AuthorizeUnionRep_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){  
    ViewPersonnelFile.value = null;
    ObtainCopies.value = null;
    Other.value = null; 
    NameOfUnionRep.enabled = true;
}
else{
  	NameOfUnionRep.value = null;
  	NameOfUnionRep.enabled = false;
}
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_NameOfUnionRep_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_NameOfUnionRep_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Other_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Other_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){  
    ViewPersonnelFile.value = null;
    ObtainCopies.value = null;
    AuthorizeUnionRep.value = null;
  	Other1.enabled = true;
    Other2.enabled = true;
    Other3.enabled = true;
    Other4.enabled = true;
}
else{
  	Other1.value = null;
    Other2.value = null;
    Other3.value = null;
    Other4.value = null;
  	Other1.enabled = false;
    Other2.enabled = false;
    Other3.enabled = false;
    Other4.enabled = false;
}
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Other1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Other1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Other2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Other2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Other3_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Other3_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_Other4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_Other4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_EmployeeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_EmployeeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == 1){
      
    EmployeeSignature.enabled = false;
    if (EmployeeDate.value === null) {
      var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, ' ');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      EmployeeDate.value = d;
      EmployeeSignature.enabled = false;
    } else {
      EmployeeDate.enabled = false;
      EmployeeSignature.enabled = false;
    }
}else{
  EmployeeDate.value = null;
  EmployeeSignature.value = null;
}
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_EmployeeCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_EmployeeCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
  	if(this.value == "1"){
 
         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  EmployeeSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_EmployeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_EmployeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_HRDIDepartmentSignature_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_HRDIDepartmentSignature_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
      //debugger;
    HRSignature.enabled = false;
    if (HRDIDate.value === null) {
      var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, ' ');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      HRDIDate.value = d;
      HRSignature.enabled = false;
    } else {
      HRDIDate.enabled = false;
      HRSignature.enabled = false;
    }
}else{
  HRDIDate.value = null;
  HRSignature.value = null;
}

        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_HRDIDepartmentSignature_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_HRDIDepartmentSignature_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToHR"){
  	if(this.value == "1"){
 
         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  HRSignature.value = myresponse.userName;
              }
          });    
	}
}

        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_HRDIDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_HRDIDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_GenerateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_GenerateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(Empl_ID.value === null && First_Name.value === null && Last_Name.value === null){
    	showErrorModal("Alert !","Please fill all the mandatory fields to generate pdf");
  
    }else if (ViewPersonnelFile.value === null && ObtainCopies.value === null && AuthorizeUnionRep.value === null && Other.value === null ){           
      //showErrorModal("Alert !", "'Task During Appointment' Tab","Please select at least one option to generate pdf under 'Task During Appointment' tab");
      showErrorModal("Alert !", "Please select at least one option under 'Task During Appointment' tab to generate pdf");
      
   }else if(ObtainCopies.value !== null && Copy1.value === null){     	
      	//showErrorModal("Alert !", "'Task During Appointment' Tab, Must fill at least number one"); 
      	showErrorModal("Alert !", "Must fill at least number one under 'Task During Appointment' tab to generate pdf");           
      
  }else {
     	getPdf();
   }


function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and '));
            jsonData.append('formPath', '/content/forms/af/personnel-file-access-request/personnel-file-access-request-form');
            jsonData.append('fileName', First_Name.value + "_" + Last_Name.value + "(" + Empl_ID.value + ")" + "_" + Date.now());          
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
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_saveguidedraft1600845458486_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_saveguidedraft1600845458486_click0 = function (scope) {
    with(this) {
        with(scope) {
            //handleDraftSave(this);
if(Empl_ID.value !== null){
  formSavedStatus.value = "1";
  aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);
  handleDraftSave(this);
}else{
  aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);
    handleDraftSave(this);
}


        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_submit1588669558668_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_submit1588669558668_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function personnel_file_access_request_personnel_file_access_request_form.generated_submit1588669558668_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
personnel_file_access_request_personnel_file_access_request_form.generated_submit1588669558668_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);
EmailSubject.value = "Request for Personnel File Access - Staff/Management - " + Empl_ID.value;

/*
//Email.value = "hrcc@fullerton.edu";
Email.value = "yjayaram@fullerton.edu";
//Email.value = "ajeet.chhonkar@thoughtfocus.com";
//Email.value = "ram.singh@thoughtfocus.com";
*/

if(ViewPersonnelFile.value === null && ObtainCopies.value === null && AuthorizeUnionRep.value === null && Other.value === null){
  
  		showErrorModal("Alert !", "Please select a checkbox under 'Task During Appointment' tab");
  
}else if(ObtainCopies.value !== null && Copy1.value === null){
  
  		showErrorModal("Alert !","Must fill at least number one under 'Task During Appointment' tab");
  
}else{

guideBridge.submit();
}


        }
	}
}
