/**
 * @function timebase_change_request_timebase_change_request.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null && formSavedStatus.value === null){
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
  
  		signatureInfo.visible = false;
  
		$.ajax({
		type: 'GET',
		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
			if(myresponse.Status == "Success"){
				var userValue=myresponse.userId;
				LogUser.value = userValue;
				//var userValue = 'jluzzi';
				workflow_initiator.value = userValue;

				$.ajax({
				 type: 'GET',
						url: "/bin/geTimebaseUserDetails",
						data: {
							
						   userId: userValue
						  //userID: 'nvadlakunta'
						},
						dataType: 'json',
						success: function(myresopnse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresopnse.length === 1) {
								  FirstName.value = myresopnse[0].FIRST_NAME;
								  LastName.value = myresopnse[0].LAST_NAME;
								  Classification.value = myresopnse[0].DESCR;
								  EmplID.value = myresopnse[0].EMPLID;
								  DeptID.value = myresopnse[0].DEPTID;
								  Dept.value = myresopnse[0].DEPTNAME;
								  EmplRcd.value = myresopnse[0].EMPL_RCD;
								  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                                  SCOPosNo.value = myresopnse[0].SCOPosNum;
								  DivisionID.value = myresopnse[0].ful_division;
								  DivisionName.value = myresopnse[0].ful_division_name;
								  FormInitiatorFirstName.value = myresopnse[0].FIRST_NAME; 
								  FormInitiatorLastName.value = myresopnse[0].LAST_NAME;
							 	  UserLookupFlag.value = myresopnse[0].EMPLID;
                              	  for_managerID_lookup.value = myresopnse[0].EMPLID;
							  
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
									  FirstName.value = myresopnse[n].FIRST_NAME;
									  LastName.value = myresopnse[n].LAST_NAME;
									  Classification.value = myresopnse[n].DESCR;
									  EmplID.value = myresopnse[n].EMPLID;
									  DeptID.value = myresopnse[n].DEPTID;
									  Dept.value = myresopnse[n].DEPTNAME;
									  EmplRcd.value = myresopnse[n].EMPL_RCD;
									  CMSPositionNo.value = myresopnse[n].POSITION_NBR;
                                      SCOPosNo.value = myresopnse[n].SCOPosNum;
									  DivisionID.value = myresopnse[n].ful_division;
									  DivisionName.value = myresopnse[n].ful_division_name;
								   	  UserLookupFlag.value = myresopnse[0].EMPLID;
                                      
                                      for_managerID_lookup.value = myresopnse[0].EMPLID;
                                      
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
else if((formSavedStatus.value != null) && (ManagerUserID.value != LogUser.value)){
  	signatureInfo.visible = false;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value === "ToSupervisor"){
  
  employeeInfo.enabled = true;
  RequestedChange.enabled = true;
  signatureInfo.enabled = true;
  MPPSignPanel.visible = true;
  AppAdminPanel.visible  = false;
  HRDivisionCoPanel.visible = false;
  HRCompPanel.visible = false;
  PayrollPanel.visible = false;
  if(StageIndicator.value === null){
    	InstructionsPanel.enabled = true;
  }
  else{
    	InstructionsPanel.enabled = false;
  }
}
if(StageIndicator.value === "ToAdmin"){
  InstructionsPanel.enabled = false;
  employeeInfo.enabled = false;
  RequestedChange.enabled = false;
  signatureInfo.visible=true;
  //signatureInfo.enabled = true;
  MPPSignPanel.enabled = false;
  AppAdminPanel.visible  = true;
  HRDivisionCoPanel.visible = false;
  HRCompPanel.visible = false;
  PayrollPanel.visible = false;
  
}
if(StageIndicator.value == "ToHRCoo"){
  InstructionsPanel.enabled = false;
  employeeInfo.enabled = false;
  RequestedChange.enabled = false;
  signatureInfo.visible=true;
  //signatureInfo.enabled = true;
  MPPSignPanel.enabled = false;
  AppAdminPanel.enabled = false;
  HRDivisionCoPanel.visible = true;
  HRCompPanel.visible = false;
  PayrollPanel.visible = false;
}
if(StageIndicator.value == "ToHRCompServices"){
  InstructionsPanel.enabled = false;
  employeeInfo.enabled = false;
  RequestedChange.enabled = false;
  signatureInfo.visible=true;
  //signatureInfo.enabled = true;
  MPPSignPanel.enabled = false;
  AppAdminPanel.enabled = false;
  HRDivisionCoPanel.enabled = false;
  HRCompPanel.visible = true;
  PayrollPanel.visible = false;
}
if(StageIndicator.value == "ToPayroll"){
  InstructionsPanel.enabled = false;
  employeeInfo.enabled = false;
  RequestedChange.enabled = false;
  signatureInfo.visible=true;
  //signatureInfo.enabled = true;
  MPPSignPanel.enabled = false;
  AppAdminPanel.enabled = false;
  HRDivisionCoPanel.enabled = false;
  HRCompPanel.enabled = false;
  PayrollPanel.visible = true;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null && formSavedStatus.value === null){
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
  
  		signatureInfo.visible = false;
  
		$.ajax({
		type: 'GET',
		url:"/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse){
			if(myresponse.Status == "Success"){
				var userValue=myresponse.userId;
				LogUser.value = userValue;
				//var userValue = 'jluzzi';
				workflow_initiator.value = userValue;

				$.ajax({
				 type: 'GET',
						url: "/bin/chrsIDUpdateServlet",
						data: {
							action: "TIMEBASE_CHANGE_REQUEST",
						   userId: userValue
						  //userID: 'nvadlakunta'
						},
						dataType: 'json',
						success: function(myresopnse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresopnse.length === 1) {
								  FirstName.value = myresopnse[0].FIRST_NAME;
								  LastName.value = myresopnse[0].LAST_NAME;
                                  CHRSID.value = myresopnse[0].CSU_CHRS_ID;
						 		  Classification.value = myresopnse[0].DESCR;
								  EmplID.value = myresopnse[0].EMPLID;
								  DeptID.value = myresopnse[0].DEPTID;
								  Dept.value = myresopnse[0].DEPTNAME;
								  EmplRcd.value = myresopnse[0].EMPL_RCD;
								  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                                  SCOPosNo.value = myresopnse[0].SCOPosNum;
								  DivisionID.value = myresopnse[0].ful_division;
								  DivisionName.value = myresopnse[0].ful_division_name;
								  FormInitiatorFirstName.value = myresopnse[0].FIRST_NAME; 
								  FormInitiatorLastName.value = myresopnse[0].LAST_NAME;
							 	  UserLookupFlag.value = myresopnse[0].CSU_CHRS_ID;
                              	  for_managerID_lookup.value = myresopnse[0].EMPLID;
							  
								  gifModal.style.display = "none";
								  modal.style.display = "none";
								
							}else if (myresopnse.length > 1) {
							   gifModal.style.display = "none";
							   modal.style.display = "block";
							  
							  
							  var col = [];
                                col.push("CSU_CHRS_ID");
								col.push("EMPLID");
								col.push("LAST_NAME");
								col.push("FIRST_NAME");
								col.push("DEPTID");
								col.push("DEPTNAME");
								
								var table = document.createElement("table");
								table.id = "tb";
								var tr = table.insertRow(-1);
								var headings = ["", "Emp ID", "CWID", "Last Name", "First Name", "Department Id", "Department Name"];
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
									  FirstName.value = myresopnse[n].FIRST_NAME;
									  LastName.value = myresopnse[n].LAST_NAME;
                                      CHRSID.value = myresopnse[n].CSU_CHRS_ID;
									  Classification.value = myresopnse[n].DESCR;
									  EmplID.value = myresopnse[n].EMPLID;
									  DeptID.value = myresopnse[n].DEPTID;
									  Dept.value = myresopnse[n].DEPTNAME;
									  EmplRcd.value = myresopnse[n].EMPL_RCD;
									  CMSPositionNo.value = myresopnse[n].POSITION_NBR;
                                      SCOPosNo.value = myresopnse[n].SCOPosNum;
									  DivisionID.value = myresopnse[n].ful_division;
									  DivisionName.value = myresopnse[n].ful_division_name;
								   	  UserLookupFlag.value = myresopnse[0].CSU_CHRS_ID;
                                      
                                      for_managerID_lookup.value = myresopnse[0].EMPLID;
                                      
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
else if((formSavedStatus.value != null) && (ManagerUserID.value != LogUser.value)){
  	signatureInfo.visible = false;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_CHRSID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_CHRSID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && this.value === null) {

  this.mandatory=true;

}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_CHRSID_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_CHRSID_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value !== null) {
  this.enabled = false;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_CHRSID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_CHRSID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if(StageIndicator.value === null && formSavedStatus.value === null){

	if (UserLookupFlag.value !== this.value) {
		var chrsIdVal = this.value;
      	var userValue = LogUser.value;

		var gifModal = document.getElementById('gifModal');
		gifModal.style.display = "block";

		$.ajax({
		 type: 'GET',
				url: "/bin/chrsIDUpdateServlet",
				data: {
                  action: "TIMEBASE_CHANGE_CHRSID_LOOKUP",
					chrsId: chrsIdVal,
				   userId: userValue
				  //userID: 'nvadlakunta'
				},
				dataType: 'json',
				success: function(myresopnse) {
				  
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
				  debugger;
					if (myresopnse.length === 1) {
					  
						  FirstName.value = myresopnse[0].FIRST_NAME;
						  LastName.value = myresopnse[0].LAST_NAME;
                          EmplID.value = myresopnse[0].EMPLID;
						  Classification.value = myresopnse[0].DESCR;						  
						  DeptID.value = myresopnse[0].DEPTID;
						  Dept.value = myresopnse[0].DEPTNAME;
						  EmplRcd.value = myresopnse[0].EMPL_RCD;
						  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                     	  SCOPosNo.value = myresopnse[0].SCOPosNum;
						  DivisionID.value = myresopnse[0].ful_division;
						  DivisionName.value = myresopnse[0].ful_division_name;
							
						  UserLookupFlag.value = this.value;
						  Cbid.value = myresopnse[0].UNION_CD;
                      
                      	  for_managerID_lookup.value = myresopnse[0].EMPLID;
					  
						  gifModal.style.display = "none";
						  modal.style.display = "none";
						
					}else if (myresopnse.length > 1) {
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
						col.push("DESCR");
						
						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						var headings = ["", "Emp ID", "CWID", "Last Name", "First Name", "Department Id", "Department Name", "Empl_RCD", "Classification"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);
							
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
					  
							var rButtons = document.getElementsByClassName("rb");
							for(n=0;n<rButtons.length;n++){
								if(rButtons[n].checked === false){
								rButtonStatus = false;
								}else{
									  FirstName.value = myresopnse[n].FIRST_NAME;
									  LastName.value = myresopnse[n].LAST_NAME;
                                      EmplID.value = myresopnse[0].EMPLID;
									  Classification.value = myresopnse[n].DESCR; 
									  DeptID.value = myresopnse[n].DEPTID;
									  Dept.value = myresopnse[n].DEPTNAME;
									  EmplRcd.value = myresopnse[n].EMPL_RCD;
									  CMSPositionNo.value = myresopnse[n].POSITION_NBR;
                                  		SCOPosNo.value = myresopnse[n].SCOPosNum;
									  DivisionID.value = myresopnse[n].ful_division;
									  DivisionName.value = myresopnse[n].ful_division_name;  
                                  
                                  	  for_managerID_lookup.value = myresopnse[0].EMPLID;
						  
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
						footerModal.appendChild(okButton);					   					  
					}
					else {						
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
						  okButtonError.value = "Ok";
						  okButtonError.onclick = function(event) {
							modalError.style.display = "none";
						  };
						  footerModalError.appendChild(okButtonError);
						  modalError.style.display = "block";
				   
						  LastName.value = null;
						  FirstName.value = null;
                          EmplID.value = null;
						  EmplRcd.value = null;
						  DateInitiated.value = null;
						  Classification.value = null;
						  CMSPositionNo.value = null;
						  Dept.value = null;
						  DeptID.value = null;
						  SCOPosNo.value = null;
						  PosNumber.value = null;
						  Prob.value = null;
						  Perm.value = null;
						  MPP.value = null;
						  Temp.value = null;
						  Increase.value = null;
						  Decrease.value = null;
						  FromHRSPerWK.value = null;
						  ToHrsPerWK.value = null;
						  DurationRB.value = null;
						  EffectiveDate.value = null;
						  EndDate.value = null;
						  ExtPrevDuties.value = null;
						  ExtendChangeThroughDate.value = null;
						  NewChangeDuties.value = null;
						  Other.value = null;
						  OtherComments.value = null;
					 
						  gifModal.style.display = "none";
					}
					////////////////////////////////////////////
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

		}); //here
	}
}

        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_EmplID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_EmplID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && formSavedStatus.value === null){

	if (UserLookupFlag.value !== this.value) {
		var cwidVal = this.value;
      	var userValue = LogUser.value;

		var gifModal = document.getElementById('gifModal');
		gifModal.style.display = "block";

		$.ajax({
		 type: 'GET',
				url: "/bin/geTimebaseEmpDetails",
				data: {
					cwid: cwidVal,
				   userId: userValue,
				  //userID: 'nvadlakunta'
				},
				dataType: 'json',
				success: function(myresopnse) {
				  
					var modal = document.getElementById('myModal');
					var span = document.getElementsByClassName("close")[0];
				  
					if (myresopnse.length === 1) {
					  
						  FirstName.value = myresopnse[0].FIRST_NAME;
						  LastName.value = myresopnse[0].LAST_NAME;
						  Classification.value = myresopnse[0].DESCR;						  
						  DeptID.value = myresopnse[0].DEPTID;
						  Dept.value = myresopnse[0].DEPTNAME;
						  EmplRcd.value = myresopnse[0].EMPL_RCD;
						  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                     	 SCOPosNo.value = myresopnse[0].SCOPosNum;
						  DivisionID.value = myresopnse[0].ful_division;
						  DivisionName.value = myresopnse[0].ful_division_name;
							
						  UserLookupFlag.value = this.value;
						  Cbid.value = myresopnse[0].UNION_CD;
                      
                      	  for_managerID_lookup.value = myresopnse[0].EMPLID;
					  
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
						col.push("EMPL_RCD");
						col.push("DESCR");
						
						var table = document.createElement("table");
						table.id = "tb";
						var tr = table.insertRow(-1);
						var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name", "Empl_RCD", "Classification"];
						for (var j = 0; j < headings.length; j++) {
							var th = document.createElement("th");
							th.innerHTML = headings[j];
							tr.appendChild(th);
						}
						for (var k = 0; k < myresopnse.length; k++) {
							tr = table.insertRow(-1);
							
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
					  
							var rButtons = document.getElementsByClassName("rb");
							for(n=0;n<rButtons.length;n++){
								if(rButtons[n].checked === false){
								rButtonStatus = false;
								}else{
									  FirstName.value = myresopnse[n].FIRST_NAME;
									  LastName.value = myresopnse[n].LAST_NAME;
									  Classification.value = myresopnse[n].DESCR;
									  //EmplID.value = myresopnse[0].EMPLID;
									  DeptID.value = myresopnse[n].DEPTID;
									  Dept.value = myresopnse[n].DEPTNAME;
									  EmplRcd.value = myresopnse[n].EMPL_RCD;
									  CMSPositionNo.value = myresopnse[n].POSITION_NBR;
                                  		SCOPosNo.value = myresopnse[n].SCOPosNum;
									  DivisionID.value = myresopnse[n].ful_division;
									  DivisionName.value = myresopnse[n].ful_division_name;  
                                  
                                  	  for_managerID_lookup.value = myresopnse[0].EMPLID;
						  
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
						footerModal.appendChild(okButton);					   					  
					}
					else {						
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
						  okButtonError.value = "Ok";
						  okButtonError.onclick = function(event) {
							modalError.style.display = "none";
						  };
						  footerModalError.appendChild(okButtonError);
						  modalError.style.display = "block";
				   
						  LastName.value = null;
						  FirstName.value = null;
						  EmplRcd.value = null;
						  DateInitiated.value = null;
						  Classification.value = null;
						  CMSPositionNo.value = null;
						  Dept.value = null;
						  DeptID.value = null;
						  SCOPosNo.value = null;
						  PosNumber.value = null;
						  Prob.value = null;
						  Perm.value = null;
						  MPP.value = null;
						  Temp.value = null;
						  Increase.value = null;
						  Decrease.value = null;
						  FromHRSPerWK.value = null;
						  ToHrsPerWK.value = null;
						  DurationRB.value = null;
						  EffectiveDate.value = null;
						  EndDate.value = null;
						  ExtPrevDuties.value = null;
						  ExtendChangeThroughDate.value = null;
						  NewChangeDuties.value = null;
						  Other.value = null;
						  OtherComments.value = null;
					 
						  gifModal.style.display = "none";
					}
					////////////////////////////////////////////
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

		}); //here
	}
}

        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_Prob_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_Prob_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Perm.value = "";
  MPP.value = "";
  Temp.value = "";
}

        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_Perm_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_Perm_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Prob.value = "";
  //Perm.value = "";
  MPP.value = "";
  Temp.value = "";
}

        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_MPP_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_MPP_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Prob.value = "";
  Perm.value = "";
  //MPP.value = "";
  Temp.value = "";
}

        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_Temp_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_Temp_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Prob.value = "";
  Perm.value = "";
  MPP.value = "";
  //Temp.value = "";
}

        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_appropriateAdminLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_appropriateAdminLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value == "ToCompService"){
      	
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  	if(this.value !== null){
      	appropriateAdminNameList.mandatory = true;
    }
    var lastName = this.value; 
  	var nameList = document.querySelector(".appropriateAdminFullNameList select");
  
  	if(this.value !== null){
      
      	var nameListLength = nameList.options.length;
      	for(var n = nameListLength; n > 0; n--){
        	nameList.options[n] = null;
      	}

        $.ajax({
            type: 'GET',
            url: "/bin/getUserDetailsForSearchFunctionality",
            data: {
                lName: lastName				
            },
            dataType: 'json',
            success: function(myresponse) {
               
                if (myresponse.length > 0) {                  	
                      	 
                        for(var i=0; i < myresponse.length; i++){
                          var opt3 = document.createElement("option");
                          opt3.value = myresponse[i].FIRST_NAME + " " + myresponse[i].LAST_NAME;
                          opt3.innerHTML = myresponse[i].FIRST_NAME + " " + myresponse[i].LAST_NAME; 
                          nameList.appendChild(opt3);
                        }
                                                                          
					  
					  gifModal.style.display = "none";
                      
                } else {
                    showErrorModal("Alert !","No matching records found");                    
                    gifModal.style.display = "none";
                }

            }
        });
    }else{
      	gifModal.style.display = "none";
      	appropriateAdminNameList.value = "Select Appropriate Administrator";
      	AppropriateAdministrator.value = null;
      	HiddenAppropriateAdminEmail.value = null;
      	HiddenAppropriateAdminUserId.value = null;
      	HiddenAppropriateAdminName.value = null;
      	
    }
//}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_appropriateAdminNameList_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_appropriateAdminNameList_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value == "ToCompService"){
      	
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var completeName = this.value; 
  		var lastName = completeName.split(" "); 
  		var firstNameValue = lastName[0];
  		var lastNameValue = lastName[1];
  		
        $.ajax({
            type: 'GET',
            url: "/bin/getUserDetailsForSearchFunctionality",
            data: {
              		fName: firstNameValue,
                	lName: lastNameValue			
            },
            dataType: 'json',
            success: function(myresponse) {
               debugger;
                if (myresponse.length > 0) {                  		
                  	  	
                      HiddenAppropriateAdminName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                  	  HiddenAppropriateAdministrator.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                      HiddenAppropriateAdminUserId.value = myresponse[0].USER_ID;
					  //HiddenDepartmentHeadEmail.value = myresponse[0].USER_ID.concat("@FULLERTON.EDU");    
                  	  HiddenAppropriateAdminEmail.value = "pushpa.kawadi@thoughtfocus.com";                 
					  
					  gifModal.style.display = "none";
                      
                } else {
                  	if(appropriateAdminLastName.value !== null){
                      	showErrorModal("Alert !","No matching records found");                    
                    }
                    
                    gifModal.style.display = "none";
                }

            }
        });
//}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_Increase_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_Increase_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert(this.value);
var  increaseVal = this.value;

if(increaseVal === "1"){
  Decrease.value = "";
  //FromHRSPerWK.mandatory = "error";
  //ToHrsPerWK.mandatory = "error";
  //FromHRSPerWK.visible = true;
  //ToHrsPerWK.visible = true;
} else{
  //FromHRSPerWK.mandatory = "";
  //ToHrsPerWK.mandatory = "";
  FromHRSPerWK.value = "";
  ToHrsPerWK.value = "";
  //FromHRSPerWK.visible = false;
  //ToHrsPerWK.visible = false;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_Decrease_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_Decrease_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var decreaseVal = this.value;

if(decreaseVal === "1"){
  Increase.value = "";
  //FromHRSPerWK.mandatory = "error";
  //ToHrsPerWK.mandatory = "error";
 // FromHRSPerWK.visible = true;
  //ToHrsPerWK.visible = true;
} else{
  //FromHRSPerWK.mandatory = "";
  //ToHrsPerWK.mandatory = "";
  FromHRSPerWK.value = "";
  ToHrsPerWK.value = "";
  //FromHRSPerWK.visible = false;
  //ToHrsPerWK.visible = false;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_FromHRSPerWK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_FromHRSPerWK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_ToHrsPerWK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_ToHrsPerWK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_DurationRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_DurationRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var durVal = this.value;
if(StageIndicator.value === null){
if(Decrease.value == "1" && durVal == "1"){
showErrorModal("Alert","Ongoing reductions in timebase may not be reversed at a later date; they permanently reduce the timebase available for the position.");
}
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_ExtPrevDuties_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_ExtPrevDuties_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  ExtendChangeThroughDate.mandatory = "error";
  ExtendChangeThroughDate.enabled = true;
  NewChangeDuties.value = "";
  Other.value = "";
}
else{
  	ExtendChangeThroughDate.mandatory = "";
  	ExtendChangeThroughDate.enabled = false;
  	ExtendChangeThroughDate.value = "";
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_ExtendChangeThroughDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_ExtendChangeThroughDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_NewChangeDuties_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_NewChangeDuties_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  //NewChangeDuties.value = "";
  ExtPrevDuties.value = "";  
  Other.value = "";  
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_Other_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_Other_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
    NewChangeDuties.value = "";
    ExtPrevDuties.value = "";    
    OtherComments.mandatory = "error";
    OtherComments.enabled = true;
}
else{
  	 OtherComments.mandatory = "";
     OtherComments.enabled = false;
 	 OtherComments.value = "";
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_OtherComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_OtherComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(Other.value === null){
	this.enabled = false;
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_checkSign_copy_1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_checkSign_copy_1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToSupervisor"){
if(this.value == "1"){
  var fnVal = FirstName.value;
  var lnVal = LastName.value;
  var signEmp = fnVal.concat(" ").concat(lnVal);
  MPPSupervisor.value = signEmp;
  //EmpSign2.value = signEmp;
  var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  MPPDate.value=d;
  MPPDate.enabled = false;
  MPPSupervisor.enabled = false;
}else{
  MPPDate.value = null;
  MPPSupervisor.value = null;
}
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_checkSign_copy_1_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_checkSign_copy_1_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToSupervisor"){
if(this.value === "1"){
  var userValue;
 if(MPPDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	MPPDate.value = d;
  
   MPPDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  MPPSupervisor.value = userValue;
                 // GradEvalName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  MPPSupervisor.enabled = false;
  //GradEvalName.enabled = false;
 
}else{   
    MPPSupervisor.value = "";
    //GradEvalName.value = "";
  }

}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_checkbox1609840134111_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_checkbox1609840134111_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAdmin"){
if(this.value === "1"){
  var userValue;
 if(AdminDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	AdminDate.value = d;
  
   AdminDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  AppropriateAdministrator.value = userValue;
                 // GradEvalName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  AppropriateAdministrator.enabled = false;
  //GradEvalName.enabled = false;
 
}else{   
    AppropriateAdministrator.value = "";
    //GradEvalName.value = "";
  }

}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_checkbox_7535279671610008523672_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_checkbox_7535279671610008523672_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToHRCoo"){
if(this.value === "1"){
  var userValue;
 if(HRDivCooDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	HRDivCooDate.value = d;
  
   HRDivCooDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  HRDivCooSign.value = userValue;
                 // GradEvalName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  HRDivCooSign.enabled = false;
  //GradEvalName.enabled = false;
 
}else{   
    HRDivCooSign.value = "";
    //GradEvalName.value = "";
  }

}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_HRCompCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_HRCompCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToHRCompServices"){
if(this.value === "1"){
  var userValue;
 if(HRDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	HRDate.value = d;
  
   HRDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  HumanResourceServices.value = userValue;
                 // GradEvalName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  HumanResourceServices.enabled = false;
  //GradEvalName.enabled = false;
 
}else{   
    HumanResourceServices.value = "";
    //GradEvalName.value = "";
  }

}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_PayrollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
if(this.value === "1"){
  var userValue;
 if(PayrollDate.value === null){
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
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  PayrollSign.value = userValue;
                 // GradEvalName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
          PayrollSign.enabled = false;
          //GradEvalName.enabled = false;
 
}else{   
    PayrollSign.value = "";
    //GradEvalName.value = "";
  }

}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_for_managerID_lookup_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_for_managerID_lookup_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null && formSavedStatus.value === null){
  
    var empIdVal = this.value;

    $.ajax({

        type: 'GET',

        url: "/bin/geTimebaseManagerAdmin",
        data: {
           // deptid: deptIdVal,
            cwid: empIdVal,
            //union_cd: cbidVal

        },
        dataType: 'json',
        success: function(managerDetails) {
              ManagerUserID.value = managerDetails[0].MANAGER_EMP_USERID; 
              //ManagerEmailID.value = managerDetails[0].MANAGER_EMAIL_ID;
             ManagerEmailID.value = "soumya.ravindra@thoughtfocus.com";
          	  managerName.value = managerDetails[0].MANAGE_EMP_NAME;
           	
          /*var magUserId = managerDetails[0].MANAGER_EMP_USERID;
          	 var managerEmailVal =magUserId.concat("@fullerton.edu");
			 ManagerEmailID.value = managerEmailVal;*/
          	 AdminUserID.value = managerDetails[0].ADMIN_EMP_USERID; 
              AdminName.value = managerDetails[0].ADMIN_EMP_NAME; 
              AdminEmpID.value = managerDetails[0].ADMIN_EMPLID;   
          	// AdminEmailID.value = managerDetails[0].ADMIN_EMAIL_ID;  
          	AdminEmailID.value = "soumya.ravindra@thoughtfocus.com";
          	 /*var adminUserId = managerDetails[0].ADMIN_EMP_USERID;
          	 var adminEmail =adminUserId.concat("@fullerton.edu");
           	 AdminEmailID.value = adminEmail;*/
          	  
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
 * @function timebase_change_request_timebase_change_request.generated_ManagerUserID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_ManagerUserID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var magId = ManagerUserID.value;
var logId = LogUser.value;
if(StageIndicator.value === null && formSavedStatus.value === null){
if(magId !== logId){
  Initiator.value = "HRInitiates";
  signatureInfo.visible = false;
}else{
 Initiator.value = ""; 
 signatureInfo.visible = true;
}
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_DivisionID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_DivisionID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null  && formSavedStatus.value === null){
  var divisionVal = this.value;
  
$.ajax({

type: 'GET', 

url:"/bin/getEvaluationFormData",
  data: {
                division: divisionVal,
    			action:"HR_COO_DATA"
                
            },
dataType: 'json',
success: function(myresopnse){
  
   HRDivUserID.value =myresopnse[0].USERID;
   HRDivFirstName.value =myresopnse[0].FIRSTNAME;
   HRDivLastName.value =myresopnse[0].LASTNAME;
  // HRDivEmailAddress.value =myresopnse[0].EMAIL;   
  HRDivEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
  
  HRDivFullName.value = (HRDivFirstName.value).concat(" "+HRDivLastName.value);
  
},
  error: function(error){
alert("error block="+error);
}
});
}
        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag  = 0;

if (EmplID.value !== null && FirstName.value !== null && LastName.value !== null) {
  //alert("here");
  
  submitFlag  = 0;
  
  
  }else{
var modal = document.getElementById("errorPopup");
    var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Empl ID, First Name, Last Name";
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
    //guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInfo[0].CSUFStatus[0]");
  
    submitFlag  = 1;
  }

//alert(submitFlag);
if(submitFlag === 0){ 
  //alert("submit===");
  getPdf();

}



function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/timebase-change-request/timebase-change-request');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplID.value + ")" + "_" + Date.now());          
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
 * @function timebase_change_request_timebase_change_request.generated_saveguidedraft1587032893049_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_saveguidedraft1587032893049_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
handleDraftSave(this);


        }
	}
}
/**
 * @function timebase_change_request_timebase_change_request.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
timebase_change_request_timebase_change_request.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*
//var testEmail = "ajeet.chhonkar@thoughtfocus.com";
//var testEmail = "pushpa.kawadi@thoughtfocus.com";
var testEmail = "yjayaram@fullerton.edu";
//var testEmail = "ram.singh@thoughtfocus.com";

//var testEmail = "hrcc@fullerton.edu";



/*var magId = ManagerUserID.value;
var logId = LogUser.value;
if(magId !== logId){
  Initiator.value = "HRInitiates";
}*/
var testEmail = "soumya.ravindra@thoughtfocus.com";
AdminEmailID.value = testEmail;
ManagerEmailID.value = testEmail;
HRDivEmailAddress.value = testEmail;
var submitFlag = 0;

if(Prob.value === null && Perm.value === null && MPP.value === null && Temp.value === null){
  showErrorModal("Alert", "Please indicate appropriate employee status for this position.");
  
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].employeeInfo[0].Prob[0]");

  submitFlag = 1;
} else{
  submitFlag  = 0;
}

if(submitFlag === 0){
if(Increase.value === "1" || Decrease.value === "1"){
if((FromHRSPerWK.value === null && ToHrsPerWK.value === null) || (FromHRSPerWK.value === null && ToHrsPerWK.value !== null) || (FromHRSPerWK.value !== null && ToHrsPerWK.value === null)){
  showErrorModal("Alert","Please indicate current timebase.");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequestedChange[0].FromHRSPerWK[0]");
  submitFlag = 1;
}else{
  submitFlag  = 0;
}
}
}

if(submitFlag === 0){
if(Increase.value !== "1" && Decrease.value !== "1"){
if((FromHRSPerWK.value > 0 && ToHrsPerWK.value > 0) || (FromHRSPerWK.value > 0 && ToHrsPerWK.value === null) || (FromHRSPerWK.value === null && ToHrsPerWK.value > 0)){
  showErrorModal("Alert","Complete this section only when an increase or decrease in hours per week is being requested (you left this area blank).");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequestedChange[0].FromHRSPerWK[0]");

  submitFlag = 1;
}else{
  submitFlag  = 0;
}
}
}

if(submitFlag === 0){
if(DurationRB.value == "2" && EndDate.value === null){
  showErrorModal("Alert","Please indicate the final date on which you wish this change in timebase to be effective.");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequestedChange[0].EndDate[0]");

  submitFlag = 1;
}else{
  submitFlag  = 0;
}
}

if(submitFlag === 0){
if(ExtPrevDuties.value === null && NewChangeDuties.value === null && Other.value === null){
  showErrorModal("Alert","Reason for change must be indicated.");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequestedChange[0].ExtPrevDuties[0]");
  submitFlag = 1;
}else{
  submitFlag  = 0;
}
}

/*if(submitFlag === 0){
if(TempDuration.value === "1" && EndDate.value === null){
  showErrorModal("Alert","Please indicate the final date on which you wish this change in timebase to be effective.");
  submitFlag = 1;
}else{
  submitFlag  = 0;
}
}*/




aftiaDescCWID.value = (FirstName.value + " " + LastName.value + " " + EmplID.value);
EmailSubject.value = "Request for Timebase Change Request - " + CHRSID.value;
if(submitFlag  === 0){
  guideBridge.submit();
}

        }
	}
}
