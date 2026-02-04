/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 
if(StageIndicator.value === null){
 
    hrUseOnly.visible = false;
   
}
if(StageIndicator.value == "ToHR"){  
  //reqReimbursement.enabled = false;
  hrUseOnly.visible = true;
  /*empInformation.enabled = false;
  spouseInformation.enabled = false;
  courseInformation.enabled = false;
  employeeSignature.enabled = false;*/
}
if(StageIndicator.value == "ToEmployee"){  
  
  hrUseOnly.visible = false;
  hrUseOnly.enabled = false;
  empInformation.enabled = true;
  spouseInformation.enabled = false;
  courseInformation.enabled = false;
  employeeSignature.visible = true;
}


        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null && formSavedStatus.value === null){
  var status ;
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",

dataType: 'json',
success: function(myresopnse){
      var userValue = myresopnse.userId;
      LogUser.value = userValue;

  $.ajax({
type: 'GET', 
url:"/bin/checkTheUserIsAnAuthorizableMember",
data: {
userId: userValue,
  groupId : "Fee-Waiver-Reviewers"
 },
dataType: 'json',
success: function(userDetails){
  status = userDetails.Result;
   AuthUserStatus.value = status;
  //alert(status);


//if(LogUser.value == "gcorvini" || LogUser.value == "alkeyes" || LogUser.value == "stekim" || LogUser.value == "kschnabel" || LogUser.value == "anperez"){
  if(status === true){  
   
 // empID.enabled = true;
    chrsID.enabled = true;
      }else{
        
       // empID.enabled = false;
        chrsID.enabled = false;
        }
          $.ajax({
                  type: 'GET',
                 // url: "/bin/getDependentFeeWaiverUserLookUp",
                  url: "/bin/chrsIDUpdateServlet",

                  data: {
                    action:"Dependent_Application_User_CHRSID",
                      userId: userValue
                  },
                  dataType: 'json',

                  success: function(myresponse) {
						gifModal.style.display = "none";
						// debugger;
						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];
						if (myresponse.length == 1) {
							
                          	UserLookupFlag.value = myresponse[0].CSU_CHRS_ID;
                          	
							var tempStats = myresponse[0].Temp;
                            
                           chrsID.value = myresponse[0].CSU_CHRS_ID;
							empID.value = myresponse[0].EMPLID;
                          FeeWaiverRequestedBy.value = myresponse[0].CSU_CHRS_ID;
							firstName.value = myresponse[0].FIRST_NAME;
							lastName.value = myresponse[0].LAST_NAME; 
							departmentID.value = myresponse[0].DEPTNAME;
							//extension.value = myresponse[0].Extension;
							bargainingUnit.value = myresponse[0].UNION_CD;
							jobCode.value = myresponse[0].JOBCODE;							
							hiddentFullTime.value = myresponse[0].FullTime;          	
							hiddenPartTime.value = myresponse[0].PartTime; 
                            empAddress.value = myresponse[0].ADDRESS1; 
                            empState.value = myresponse[0].STATE; 
                            empCity.value = myresponse[0].CITY; 
							if(hiddentFullTime.value == 1){             
							  FullTimePartTime.value = 1;                           
							}else if(hiddenPartTime.value == 1){            
							  FullTimePartTime.value = 0;              
							}
							hiddenTenure.value = myresponse[0].Tenure;
							hiddenPerm.value = myresponse[0].Perm;
							hiddenProb.value = myresponse[0].Prob;       	         	
							hiddenOthers.value =  myresponse[0].Other; 
							if(hiddenTenure.value == 1){
							  ProbationStatus.value = 1;
							}else if(hiddenPerm.value == 1){
							  ProbationStatus.value = 2;
							}else if(hiddenProb.value == 1){
							  ProbationStatus.value = 3;
							}else if(hiddenOthers.value == 1){
							  ProbationStatus.value = 4;
							}
							hiddenLeavesYes.value = myresponse[0].LeaveYes;         	
							hiddenLeavesNo.value =  myresponse[0].LeaveNo;
							if(hiddenLeavesYes.value == 1){
							  AreYouOnLeave.value = 1;
							}else if(hiddenLeavesNo.value == 1){
							  AreYouOnLeave.value = 0;
							}
                          	DeptID.value = myresponse[0].DEPTID;          	 
							if(tempStats == 1){
							  temStatus.value = 1;
							}else{
							  temStatus.value = 0;
							}             
 if (myresponse[0].EndDate !== undefined) {
                        endDate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                        tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                    }
						 // EmpEmailId.value = myresponse[0].EMP_EMAIL_ID;
                  //EmpEmailId.value = "yashovardhan.jayaram@thoughtfocus.com";
                  			EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
							gifModal.style.display = "none";
							modal.style.display = "none";

						} else if (myresponse.length > 1) {
							gifModal.style.display = "none";
							modal.style.display = "block";

                          	//UserLookupFlag.value = "UserLookup";
                          
							//populate Hidden Fields
							HiddenChrsID.value = myresponse[0].CSU_CHRS_ID;
							HiddenEmpID.value = myresponse[0].EMPLID;
							FeeWaiverRequestedBy.value = myresponse[0].CSU_CHRS_ID;
							hiddenBargainingUnit.value = myresponse[0].UNION_CD;
							hiddentJobCode.value = myresponse[0].JOBCODE;
							hiddentFullTime.value = myresponse[0].FullTime;          	
							hiddenPartTime.value = myresponse[0].PartTime;         	          	
							hiddenTenure.value = myresponse[0].Tenure;
							hiddenPerm.value = myresponse[0].Perm;
							hiddenProb.value = myresponse[0].Prob;       	         	
							hiddenOthers.value =  myresponse[0].Other;           	
							hiddenLeavesYes.value = myresponse[0].LeaveYes;         	
							hiddenLeavesNo.value =  myresponse[0].LeaveNo; 

							var col = [];
							col.push("FIRST_NAME");

							col.push("LAST_NAME");

							col.push("DEPTNAME");

							col.push("DEPTID");

							var table = document.createElement("table");
							table.id = "tb";
							var tr = table.insertRow(-1);
							var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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
									hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
									hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
									hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
								   // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
						   // debugger;

							var footerModal = document.getElementById("modal_footer");
							var okButton = document.createElement("input");
							okButton.type = "button";
							okButton.setAttribute("class", "okBtn");							
							okButton.value = "OK";
							okButton.onclick = function(event) {
							 
								var n;
								var rButtonStatus;								
								var rButtons = document.getElementsByClassName("rb");
								for(n=0;n<rButtons.length;n++){
								  if(rButtons[n].checked === false){									
									rButtonStatus = false;
								  }else{
										
                          				  UserLookupFlag.value = myresponse[n].CSU_CHRS_ID;
                                    	  HiddenChrsID.value = myresponse[n].CSU_CHRS_ID;
										  HiddenEmpID.value = myresponse[n].EMPLID;
										  hiddenFirstName.value = myresponse[n].FIRST_NAME;
										  hiddenLastName.value = myresponse[n].LAST_NAME; 
										  hiddentDepartmentName.value = myresponse[n].DEPTNAME;
										  
										  hiddenBargainingUnit.value = myresponse[n].UNION_CD;
										  hiddentJobCode.value = myresponse[n].JOBCODE;                                                                       
										  hiddentFullTime.value = myresponse[n].FullTime;          	
										  hiddenPartTime.value = myresponse[n].PartTime;          											
										  hiddenTenure.value = myresponse[n].Tenure;
										  hiddenPerm.value = myresponse[n].Perm;
										  hiddenProb.value = myresponse[n].Prob;       	         	
										  hiddenOthers.value =  myresponse[n].Other; 										 
										  hiddenLeavesYes.value = myresponse[n].LeaveYes;         	
										  hiddenLeavesNo.value =  myresponse[n].LeaveNo;										
										  hiddentDeptID.value = myresponse[n].DEPTID;          	 
										  
										 rButtonStatus = true;
										 break;
										  }
									}
								  if(rButtonStatus === false){
										  showErrorModal("Alert!","Please select the department");
										  modal.style.display = "block";
								  }else {
									
                          			  // UserLookupFlag.value = myresponse[0].EMPLID;
                                      UserLookupFlag.value = myresponse[0].CSU_CHRS_ID;
                                       chrsID.value = HiddenChrsID.value;
										empID.value = HiddenEmpID.value;
										firstName.value = hiddenFirstName.value;
										lastName.value = hiddenLastName.value; 
										departmentID.value = hiddentDepartmentName.value;
										//extension.value = hiddentExtension.value;
										bargainingUnit.value = hiddenBargainingUnit.value;
										jobCode.value = hiddentJobCode.value;                                    	                                    
										hiddentFullTime.value = myresponse[n].FullTime;          	
										hiddenPartTime.value = myresponse[n].PartTime;          	
										if(hiddentFullTime.value == 1){             
										  FullTimePartTime.value = 1;                           
										}else if(hiddenPartTime.value == 1){            
										  FullTimePartTime.value = 0;              
										}
										hiddenTenure.value = myresponse[n].Tenure;
										hiddenPerm.value = myresponse[n].Perm;
										hiddenProb.value = myresponse[n].Prob;       	         	
										hiddenOthers.value =  myresponse[n].Other; 
										if(hiddenTenure.value == 1){
										  ProbationStatus.value = 1;
										}else if(hiddenPerm.value == 1){
										  ProbationStatus.value = 2;
										}else if(hiddenProb.value == 1){
										  ProbationStatus.value = 3;
										}else if(hiddenOthers.value == 1){
										  ProbationStatus.value = 4;
										}
                                 
										hiddenLeavesYes.value = myresponse[n].LeaveYes;         	
										hiddenLeavesNo.value =  myresponse[n].LeaveNo;
										if(hiddenLeavesYes.value == 1){
										  AreYouOnLeave.value = 1;
										}else if(hiddenLeavesNo.value == 1){
										  AreYouOnLeave.value = 0;
										}
										DeptID.value = hiddentDeptID.value;          	 
										if(tempStats == 1){
										  temStatus.value = 1;
										}else{
										  temStatus.value = 0;
										}                       	

									    if (myresponse[n].EndDate !== undefined) {
                        endDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                        tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                    }
                                     empAddress.value = myresponse[n].ADDRESS1; 
                            empState.value = myresponse[n].STATE; 
                            empCity.value = myresponse[n].CITY; 
                                     // EmpEmailId.value = myresponse[n].EMP_EMAIL_ID;
               //   EmpEmailId.value = "yashovardhan.jayaram@thoughtfocus.com";
                  EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
									modal.style.display = "none";

									}
								};
							
							footerModal.appendChild(okButton);

						} else {
							
							 		var modal1= document.getElementById("errorPopup");
                                    var para = document.getElementById("para");
                                    para.innerHTML = "";
                                    para.innerHTML = "No matching records found";
                                    var errorBody = document.getElementById('errorData');
                                    errorBody.innerHTML = "";
                                    errorBody.appendChild(para);
                                    var footerModal1 = document.getElementById("errorPopup-footer");
                                    var okButton1 = document.createElement("input");
                                    okButton1.type = "button";
                                    okButton1.setAttribute("class", "okBtn");
                                    //okButton.id = "okBtn";
                                    okButton1.value = "Ok";
                                    okButton1.onclick = function(event) {
                                       modal1.style.display = "none";
                                    };
                                    footerModal1.appendChild(okButton1);
                                   
                                    modal1.style.display = "block";		
                                    chrsID.value = null;
								    empID.value = null;
									firstName.value = null;
									lastName.value = null; 
									departmentID.value = null;
									extension.value = null;
									bargainingUnit.value = null;
									jobCode.value = null;
									endDate.value = null;          	            
									FullTimePartTime.value = null;                           
									ProbationStatus.value = null;           
									AreYouOnLeave.value = null;            
									DeptID.value = null;         	 
									temStatus.value = null; 
							//gifModal.style.display = "none";
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
								showErrorModal("Alert!","Please select the department");
								modal.style.display = "block";
							} else {

								showErrorModal("Alert!","Please select the department");
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

});
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            //var userID = 'kcase'; 
//var userID = LogUser.value;
if(LogUser.value !== "admin"){
$.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresopnse){
      var userValue = myresopnse.userId;
      //LogUser.value = userValue;

          $.ajax({
                  type: 'GET',
                  url: "/bin/getDependentFeeWaiverUserLookUp",

                  data: {
                      userID: userValue
                  },
                  dataType: 'json',

                  success: function(myresponse) {
						gifModal.style.display = "none";
						// debugger;
						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];
						if (myresponse.length == 1) {
							
                          	UserLookupFlag.value = "UserLookup";
                          	var dateGiven = myresponse[0].EndDate; //"05222020";
                          	//alert("The value of date is="+dateGiven);
							endDate.value=(dateGiven.substring(4, 8)+"-"+dateGiven.substring(0, 2)+"-"+dateGiven.substring(2,4));
							var tempStats = myresponse[0].Temp;
							empID.value = myresponse[0].EMPLID;
							firstName.value = myresponse[0].FIRST_NAME;
							lastName.value = myresponse[0].LAST_NAME; 
							departmentID.value = myresponse[0].DEPTNAME;
							extension.value = myresponse[0].Extension;
							bargainingUnit.value = myresponse[0].UNION_CD;
							jobCode.value = myresponse[0].JOBCODE;
							var dateData = myresponse[0].EndDate;
                          
                          	var arr = dateData.match(/.{2}/g);
                            var month = arr[0];
                            var date = arr[1];
                            var year = arr[2]+arr[3];

                            var cobraEnd = (year + "-" + month + "-" + date); 
                            endDate.value = cobraEnd; 
                          
							hiddentFullTime.value = myresponse[0].FullTime;          	
							hiddenPartTime.value = myresponse[0].PartTime;          	
							if(hiddentFullTime.value == 1){             
							  FullTimePartTime.value = 1;                           
							}else if(hiddenPartTime.value == 1){            
							  FullTimePartTime.value = 0;              
							}
							hiddenTenure.value = myresponse[0].Tenure;
							hiddenPerm.value = myresponse[0].Perm;
							hiddenProb.value = myresponse[0].Prob;       	         	
							hiddenOthers.value =  myresponse[0].Other; 
							if(hiddenTenure.value == 1){
							  ProbationStatus.value = 1;
							}else if(hiddenPerm.value == 1){
							  ProbationStatus.value = 2;
							}else if(hiddenProb.value == 1){
							  ProbationStatus.value = 3;
							}else if(hiddenOthers.value == 1){
							  ProbationStatus.value = 4;
							}
							hiddenLeavesYes.value = myresponse[0].LeaveYes;         	
							hiddenLeavesNo.value =  myresponse[0].LeaveNo;
							if(hiddenLeavesYes.value == 1){
							  AreYouOnLeave.value = 1;
							}else if(hiddenLeavesNo.value == 1){
							  AreYouOnLeave.value = 0;
							}
							DeptID.value = myresponse[0].DEPTID;          	 
							if(tempStats == 1){
							  temStatus.value = 1;
							}else{
							  temStatus.value = 0;
							}             

							gifModal.style.display = "none";
							modal.style.display = "none";

						} else if (myresponse.length > 1) {
							gifModal.style.display = "none";
							modal.style.display = "block";

                          	UserLookupFlag.value = "UserLookup";
                          
							//populate Hidden Fields
							HiddenEmpID.value = myresponse[0].EMPLID;
							hiddentExtension.value = myresponse[0].Extension;
							hiddenBargainingUnit.value = myresponse[0].UNION_CD;
							hiddentJobCode.value = myresponse[0].JOBCODE;
							hiddentFullTime.value = myresponse[0].FullTime;          	
							hiddenPartTime.value = myresponse[0].PartTime;         	          	
							hiddenTenure.value = myresponse[0].Tenure;
							hiddenPerm.value = myresponse[0].Perm;
							hiddenProb.value = myresponse[0].Prob;       	         	
							hiddenOthers.value =  myresponse[0].Other;           	
							hiddenLeavesYes.value = myresponse[0].LeaveYes;         	
							hiddenLeavesNo.value =  myresponse[0].LeaveNo; 

							var col = [];
							col.push("FIRST_NAME");

							col.push("LAST_NAME");

							col.push("DEPTNAME");

							col.push("DEPTID");

							var table = document.createElement("table");
							table.id = "tb";
							var tr = table.insertRow(-1);
							var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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
									hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
									hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
									hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
								   // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
						   // debugger;

							var footerModal = document.getElementById("modal_footer");
							var okButton = document.createElement("input");
							okButton.type = "button";
							okButton.setAttribute("class", "okBtn");
							//okButton.id = "okBtn";
							okButton.value = "OK";
							okButton.onclick = function(event) {
							  //alert("Button Clicked 1");
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
									//alert("Button Clicked 2");
									rButtonStatus = false;
								  }else{
										//alert("Button Clicked 3");
										  UserLookupFlag.value = "UserLookup";
											
                                    	  //var dateGiven = myresponse[0].EndDate; //"05222020";
                                         // alert("The value of date is="+myresponse[0].EndDate.toString());
                                         // HiddenEndDate.value=(dateGiven.substring(4, 8)+"-"+dateGiven.substring(0, 2)+"-"+dateGiven.substring(2,4)); 
										  HiddenEmpID.value = myresponse[n].EMPLID;
										  hiddenFirstName.value = myresponse[n].FIRST_NAME;
										  hiddenLastName.value = myresponse[n].LAST_NAME; 
										  hiddentDepartmentName.value = myresponse[n].DEPTNAME;
										  hiddentExtension.value = myresponse[n].Extension;
										  hiddenBargainingUnit.value = myresponse[n].UNION_CD;
										  hiddentJobCode.value = myresponse[n].JOBCODE;
                                    	  var dateData = myresponse[n].EndDate;
                                    	  var arr = dateData.match(/(.{2})(.{2})(.{4})/);
                                          var month = arr[1];
                                          var date = arr[2];
                                          var year = arr[3];
                                          var cobraEnd = (year + "-" + month + "-" + date); 
                                          
                                          HiddenEndDate.value = cobraEnd;	
										  //HiddenEndDate.value = myresponse[n].EndDate;
										  hiddentFullTime.value = myresponse[n].FullTime;          	
										  hiddenPartTime.value = myresponse[n].PartTime;          	
										 /* if(hiddentFullTime.value == 1){             
											FullTimePartTime.value = 1;                           
										  }else if(hiddenPartTime.value == 1){            
											FullTimePartTime.value = 0;              
										  }*/
										  hiddenTenure.value = myresponse[n].Tenure;
										  hiddenPerm.value = myresponse[n].Perm;
										  hiddenProb.value = myresponse[n].Prob;       	         	
										  hiddenOthers.value =  myresponse[n].Other; 
										  /*if(hiddenTenure.value == 1){
											ProbationStatus.value = 1;
										  }else if(hiddenPerm.value == 1){
											ProbationStatus.value = 2;
										  }else if(hiddenProb.value == 1){
											ProbationStatus.value = 3;
										  }else if(hiddenOthers.value == 1){
											ProbationStatus.value = 4;
										  }*/
										  hiddenLeavesYes.value = myresponse[n].LeaveYes;         	
										  hiddenLeavesNo.value =  myresponse[n].LeaveNo;
										 /* if(hiddenLeavesYes.value == 1){
											AreYouOnLeave.value = 1;
										  }else if(hiddenLeavesNo.value == 1){
											AreYouOnLeave.value = 0;
										  }*/
										  hiddentDeptID.value = myresponse[n].DEPTID;          	 
										 /* if(tempStats == 1){
											temStatus.value = 1;
										  }else{
											temStatus.value = 0;
										  }      */  
										 rButtonStatus = true;
										 break;
										  }
									}
								  if(rButtonStatus === false){
										  alert("Please select the department");
										  modal.style.display = "block";
								  }else {
									//alert("Button Clicked 4");
										UserLookupFlag.value = "UserLookup";
										empID.value = HiddenEmpID.value;
										firstName.value = hiddenFirstName.value;
										lastName.value = hiddenLastName.value; 
										departmentID.value = hiddentDepartmentName.value;
										extension.value = hiddentExtension.value;
										bargainingUnit.value = hiddenBargainingUnit.value;
										jobCode.value = hiddentJobCode.value;
                                    	//alert("The value of date is="+HiddenEndDate.value);
										endDate.value = HiddenEndDate.value;                               
										hiddentFullTime.value = myresponse[n].FullTime;          	
										hiddenPartTime.value = myresponse[n].PartTime;          	
										if(hiddentFullTime.value == 1){             
										  FullTimePartTime.value = 1;                           
										}else if(hiddenPartTime.value == 1){            
										  FullTimePartTime.value = 0;              
										}
										hiddenTenure.value = myresponse[n].Tenure;
										hiddenPerm.value = myresponse[n].Perm;
										hiddenProb.value = myresponse[n].Prob;       	         	
										hiddenOthers.value =  myresponse[n].Other; 
										if(hiddenTenure.value == 1){
										  ProbationStatus.value = 1;
										}else if(hiddenPerm.value == 1){
										  ProbationStatus.value = 2;
										}else if(hiddenProb.value == 1){
										  ProbationStatus.value = 3;
										}else if(hiddenOthers.value == 1){
										  ProbationStatus.value = 4;
										}
										hiddenLeavesYes.value = myresponse[n].LeaveYes;         	
										hiddenLeavesNo.value =  myresponse[n].LeaveNo;
										if(hiddenLeavesYes.value == 1){
										  AreYouOnLeave.value = 1;
										}else if(hiddenLeavesNo.value == 1){
										  AreYouOnLeave.value = 0;
										}
										DeptID.value = hiddentDeptID.value;          	 
										if(tempStats == 1){
										  temStatus.value = 1;
										}else{
										  temStatus.value = 0;
										}                       	

									// gifModal.style.display = "none";
									modal.style.display = "none";

									}
								};
							// footerModal = document.getElementById("modal_footer");
							footerModal.appendChild(okButton);

						} else {
							alert("No Matching Records Found");
								   /* empID.value = null;
									firstName.value = null;
									lastName.value = null; 
									departmentID.value = null;
									extension.value = null;
									bargainingUnit.value = null;
									jobCode.value = null;
									endDate.value = null;          	            
									FullTimePartTime.value = null;                           
									ProbationStatus.value = null;           
									AreYouOnLeave.value = null;            
									DeptID.value = null;         	 
									temStatus.value = null; */
							//gifModal.style.display = "none";
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
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_textdraw1577382730893_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_textdraw1577382730893_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_chrsID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_chrsID_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.enabled = false;
if (StageIndicator.value === null && this.value === null) {
  this.mandatory=true;
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_chrsID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_chrsID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
                if (StageIndicator.value === null) {
        var status;
        if (UserLookupFlag.value !== this.value) {

            if (empID.value !== null) {
                var EmpId = this.value;
                var gifModal = document.getElementById('gifModal');
                gifModal.style.display = "block";
                $.ajax({
                    type: 'GET',
                    url: "/bin/checkTheUserIsAnAuthorizableMember",
                    data: {
                        userId: LogUser.value,
                        groupId: "Fee-Waiver-Reviewers"
                    },
                    dataType: 'json',
                    success: function(userDetails) {
                        status = userDetails.Result;
                      AuthUserStatus.value = status;
                        //alert(status);

                        if (status === true) {
                            if (FeeWaiverRequestedBy.value !== empID.value) {
                                hrUseOnly.visible = false;
                                employeeSignature.visible = false;
                                employeeDate.value = "";
                                EmployeeSignature.value = "";
                                employeeComments.value = "";
                            } else {
                                hrDate.value = "";
                                hrSignature.value = "";
                                hrComments.value = "";
                                hrUseOnly.visible = false;
                                employeeSignature.visible = true;
                            }
                            $.ajax({

                                type: 'GET',

                                url: "/bin/getDependentFeeWaiverEmpLookUp",


                                data: {
                                    cwid: EmpId
                                },

                                dataType: 'JSON',

                                success: function(myresponse) {
                                    gifModal.style.display = "none";
                                    
                                    var modal = document.getElementById('myModal');
                                    var span = document.getElementsByClassName("close")[0];
                                    if (myresponse.length == 1) {
                                        tempEnddate.value = "";
                                        endDate.value = "";
                                        var tempStats = myresponse[0].Temp;

                                        firstName.value = myresponse[0].FIRST_NAME;
                                        lastName.value = myresponse[0].LAST_NAME;
                                        departmentID.value = myresponse[0].DEPTNAME;
                                        // extension.value = myresponse[0].Extension;
                                        bargainingUnit.value = myresponse[0].UNION_CD;
                                        jobCode.value = myresponse[0].JOBCODE;
                                        //endDate.value = myresponse[0].EndDate;

                                        hiddentFullTime.value = myresponse[0].FullTime;
                                        hiddenPartTime.value = myresponse[0].PartTime;
                                        if (hiddentFullTime.value == 1) {
                                            FullTimePartTime.value = 1;
                                        } else if (hiddenPartTime.value == 1) {
                                            FullTimePartTime.value = 0;
                                        }
                                        hiddenTenure.value = myresponse[0].Tenure;
                                        hiddenPerm.value = myresponse[0].Perm;
                                        hiddenProb.value = myresponse[0].Prob;
                                        hiddenOthers.value = myresponse[0].Other;
                                        if (hiddenTenure.value == 1) {
                                            ProbationStatus.value = 1;
                                        } else if (hiddenPerm.value == 1) {
                                            ProbationStatus.value = 2;
                                        } else if (hiddenProb.value == 1) {
                                            ProbationStatus.value = 3;
                                        } else if (hiddenOthers.value == 1) {
                                            ProbationStatus.value = 4;
                                        }
                                        hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                        hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                        if (hiddenLeavesYes.value == 1) {
                                            AreYouOnLeave.value = 1;
                                        } else if (hiddenLeavesNo.value == 1) {
                                            AreYouOnLeave.value = 0;
                                        }
                                        DeptID.value = myresponse[0].DEPTID;
                                        if (tempStats == 1) {
                                            temStatus.value = 1;
                                        } else {
                                            temStatus.value = 0;
                                        }
                                        if (myresponse[0].EndDate !== undefined) {
                                            endDate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                            tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                        }

                                        //EmpEmailId.value = myresponse[0].EMP_EMAIL_ID;
                                        EmpEmailId.value = myresponse[0].EMP_EMAIL;
                                        EmpUserID.value = myresponse[0].EMP_USERID;
                                        EmpName.value = myresponse[0].EMP_NAME;
                                        //EmpEmailId.value = "yashovardhan.jayaram@thoughtfocus.com";
                                        gifModal.style.display = "none";
                                        modal.style.display = "none";

                                    } else if (myresponse.length > 1) {
                                        gifModal.style.display = "none";
                                        modal.style.display = "block";
                                        tempEnddate.value = "";
                                        endDate.value = "";
                                        //populate Hidden Fields

                                        //hiddentExtension.value = myresponse[0].Extension;
                                        hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                        hiddentJobCode.value = myresponse[0].JOBCODE;
                                        hiddentFullTime.value = myresponse[0].FullTime;
                                        hiddenPartTime.value = myresponse[0].PartTime;
                                        hiddenTenure.value = myresponse[0].Tenure;
                                        hiddenPerm.value = myresponse[0].Perm;
                                        hiddenProb.value = myresponse[0].Prob;
                                        hiddenOthers.value = myresponse[0].Other;
                                        hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                        hiddenLeavesNo.value = myresponse[0].LeaveNo;

                                        var col = [];
                                        col.push("FIRST_NAME");

                                        col.push("LAST_NAME");

                                        col.push("DEPTNAME");

                                        col.push("DEPTID");

                                        var table = document.createElement("table");
                                        table.id = "tb";
                                        var tr = table.insertRow(-1);
                                        var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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
                                                hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
                                        // debugger;

                                        var footerModal = document.getElementById("modal_footer");
                                        var okButton = document.createElement("input");
                                        okButton.type = "button";
                                        okButton.setAttribute("class", "okBtn");
                                        //okButton.id = "okBtn";
                                        okButton.value = "OK";
                                        okButton.onclick = function(event) {
                                            //alert("Button Clicked 1");
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
                                                    //alert("Button Clicked 2");
                                                    rButtonStatus = false;
                                                } else {
                                                    //alert("Button Clicked 3");
                                                    hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                    hiddenLastName.value = myresponse[n].LAST_NAME;
                                                    hiddentDepartmentName.value = myresponse[n].DEPTNAME;
                                                    //hiddentExtension.value = myresponse[n].Extension;
                                                    hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                    hiddentJobCode.value = myresponse[n].JOBCODE;
                                                    //HiddenEndDate.value = myresponse[n].EndDate;

                                                    hiddentFullTime.value = myresponse[n].FullTime;
                                                    hiddenPartTime.value = myresponse[n].PartTime;
                                                    /* if(hiddentFullTime.value == 1){             
                                                       FullTimePartTime.value = 1;                           
                                                     }else if(hiddenPartTime.value == 1){            
                                                       FullTimePartTime.value = 0;              
                                                     }*/
                                                    hiddenTenure.value = myresponse[n].Tenure;
                                                    hiddenPerm.value = myresponse[n].Perm;
                                                    hiddenProb.value = myresponse[n].Prob;
                                                    hiddenOthers.value = myresponse[n].Other;
                                                    /*if(hiddenTenure.value == 1){
                                                      ProbationStatus.value = 1;
                                                    }else if(hiddenPerm.value == 1){
                                                      ProbationStatus.value = 2;
                                                    }else if(hiddenProb.value == 1){
                                                      ProbationStatus.value = 3;
                                                    }else if(hiddenOthers.value == 1){
                                                      ProbationStatus.value = 4;
                                                    }*/
                                                    hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                    /* if(hiddenLeavesYes.value == 1){
                                                       AreYouOnLeave.value = 1;
                                                     }else if(hiddenLeavesNo.value == 1){
                                                       AreYouOnLeave.value = 0;
                                                     }*/
                                                    hiddentDeptID.value = myresponse[n].DEPTID;
                                                    /* if(tempStats == 1){
                                                       temStatus.value = 1;
                                                     }else{
                                                       temStatus.value = 0;
                                                     }      */
                                                    rButtonStatus = true;
                                                    break;
                                                }
                                            }
                                            if (rButtonStatus === false) {
                                                showErrorModal("Alert!", "Please select the department");
                                                modal.style.display = "block";
                                            } else {
                                                //alert("Button Clicked 4");
                                                firstName.value = hiddenFirstName.value;
                                                lastName.value = hiddenLastName.value;
                                                departmentID.value = hiddentDepartmentName.value;
                                                //extension.value = hiddentExtension.value;
                                                bargainingUnit.value = hiddenBargainingUnit.value;
                                                jobCode.value = hiddentJobCode.value;
                                                endDate.value = HiddenEndDate.value;
                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                if (hiddentFullTime.value == 1) {
                                                    FullTimePartTime.value = 1;
                                                } else if (hiddenPartTime.value == 1) {
                                                    FullTimePartTime.value = 0;
                                                }
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                if (hiddenTenure.value == 1) {
                                                    ProbationStatus.value = 1;
                                                } else if (hiddenPerm.value == 1) {
                                                    ProbationStatus.value = 2;
                                                } else if (hiddenProb.value == 1) {
                                                    ProbationStatus.value = 3;
                                                } else if (hiddenOthers.value == 1) {
                                                    ProbationStatus.value = 4;
                                                }
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                if (hiddenLeavesYes.value == 1) {
                                                    AreYouOnLeave.value = 1;
                                                } else if (hiddenLeavesNo.value == 1) {
                                                    AreYouOnLeave.value = 0;
                                                }
                                                DeptID.value = hiddentDeptID.value;
                                                if (tempStats == 1) {
                                                    temStatus.value = 1;
                                                } else {
                                                    temStatus.value = 0;
                                                }
                                                if (myresponse[n].EndDate !== undefined) {
                                                    HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                    tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                }
                                                //EmpEmailId.value = myresponse[n].EMP_EMAIL_ID;
                                                EmpEmailId.value = myresponse[n].EMP_EMAIL;
                                                EmpUserID.value = myresponse[n].EMP_USERID;
                                                EmpName.value = myresponse[n].EMP_NAME;
                                                // gifModal.style.display = "none";
                                                modal.style.display = "none";

                                            }
                                        };
                                        // footerModal = document.getElementById("modal_footer");
                                        footerModal.appendChild(okButton);

                                    } else {
                                        //alert("No Matching Records Found");
                                        var modal = document.getElementById("errorPopup");
                                        var para = document.getElementById("para");
                                        para.innerHTML = "";
                                        para.innerHTML = "No matching records found";
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
                                        modal.style.display = "block";

                                        empID.value = null;
                                        firstName.value = null;
                                        lastName.value = null;
                                        departmentID.value = null;
                                        extension.value = null;
                                        bargainingUnit.value = null;
                                        jobCode.value = null;
                                        endDate.value = null;
                                        FullTimePartTime.value = null;
                                        ProbationStatus.value = null;
                                        AreYouOnLeave.value = null;
                                        DeptID.value = null;
                                        temStatus.value = null;
                                        //gifModal.style.display = "none";
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
                                            showErrorModal("Alert!", "Please select the department");
                                            modal.style.display = "block";
                                        } else {

                                            showErrorModal("Alert!", "Please select the department");
                                            modal.style.display = "block";
                                        }

                                    };
                                    // When the user clicks anywhere outside of the modal, close it
                                    window.onclick = function(event) {
                                        if (event.target == modal) {
                                            modal.style.display = "none";
                                        }
                                    };
                                    UserLookupFlag.value = null;
                                }
                            });
                        }
                    }
                });
            } else {

                firstName.value = null;
                lastName.value = null;
                departmentID.value = null;
                extension.value = null;
                bargainingUnit.value = null;
                jobCode.value = null;
                endDate.value = null;
                FullTimePartTime.value = null;
                ProbationStatus.value = null;
                AreYouOnLeave.value = null;
                DeptID.value = null;
                temStatus.value = null;
                //gifModal.style.display = "none";
            }
        }
    } 
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_chrsID_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_chrsID_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
                debugger;
if (StageIndicator.value === null) {
        var status;
       // if (UserLookupFlag.value !== this.value) {
        if (UserLookupFlag.value !== chrsID.value) {

           // if (empID.value !== null) {
               if (chrsID.value !== null) {
                var EmpId = this.value;
                var gifModal = document.getElementById('gifModal');
                gifModal.style.display = "block";
                $.ajax({
                    type: 'GET',
                    url: "/bin/checkTheUserIsAnAuthorizableMember",
                    data: {
                        userId: LogUser.value,
                        groupId: "Fee-Waiver-Reviewers"
                    },
                    dataType: 'json',
                    success: function(userDetails) {
                        status = userDetails.Result;
                      AuthUserStatus.value = status;
                        //alert(status);

                        if (status === true) {
                          
                          //  if (FeeWaiverRequestedBy.value !== empID.value) {
                              if (FeeWaiverRequestedBy.value !== chrsID.value) {
                                hrUseOnly.visible = false;
                                employeeSignature.visible = false;
                                employeeDate.value = "";
                                EmployeeSignature.value = "";
                                employeeComments.value = "";
                            } else {
                                hrDate.value = "";
                                hrSignature.value = "";
                                hrComments.value = "";
                                hrUseOnly.visible = false;
                                employeeSignature.visible = true;
                            }
                            $.ajax({

                                type: 'GET',

                               // url: "/bin/getDependentFeeWaiverEmpLookUp",
                                url: "/bin/chrsIDUpdateServlet",


                                data: {
                                    //cwid: EmpId
                                   action:"Dependent_Application_Emp_CHRSID",
                                   chrsId: EmpId
                                },

                                dataType: 'JSON',

                                success: function(myresponse) {
                                    gifModal.style.display = "none";
                                    
                                    var modal = document.getElementById('myModal');
                                    var span = document.getElementsByClassName("close")[0];
                                    if (myresponse.length == 1) {
                                        tempEnddate.value = "";
                                        endDate.value = "";
                                        var tempStats = myresponse[0].Temp;

                                        empID.value = myresponse[0].EMPLID;
                                        firstName.value = myresponse[0].FIRST_NAME;
                                        lastName.value = myresponse[0].LAST_NAME;
                                        departmentID.value = myresponse[0].DEPTNAME;
                                        // extension.value = myresponse[0].Extension;
                                        bargainingUnit.value = myresponse[0].UNION_CD;
                                        jobCode.value = myresponse[0].JOBCODE;
                                        //endDate.value = myresponse[0].EndDate;

                                        hiddentFullTime.value = myresponse[0].FullTime;
                                        hiddenPartTime.value = myresponse[0].PartTime;
                                        if (hiddentFullTime.value == 1) {
                                            FullTimePartTime.value = 1;
                                        } else if (hiddenPartTime.value == 1) {
                                            FullTimePartTime.value = 0;
                                        }
                                        hiddenTenure.value = myresponse[0].Tenure;
                                        hiddenPerm.value = myresponse[0].Perm;
                                        hiddenProb.value = myresponse[0].Prob;
                                        hiddenOthers.value = myresponse[0].Other;
                                        if (hiddenTenure.value == 1) {
                                            ProbationStatus.value = 1;
                                        } else if (hiddenPerm.value == 1) {
                                            ProbationStatus.value = 2;
                                        } else if (hiddenProb.value == 1) {
                                            ProbationStatus.value = 3;
                                        } else if (hiddenOthers.value == 1) {
                                            ProbationStatus.value = 4;
                                        }
                                        hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                        hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                        if (hiddenLeavesYes.value == 1) {
                                            AreYouOnLeave.value = 1;
                                        } else if (hiddenLeavesNo.value == 1) {
                                            AreYouOnLeave.value = 0;
                                        }
                                        DeptID.value = myresponse[0].DEPTID;
                                        if (tempStats == 1) {
                                            temStatus.value = 1;
                                        } else {
                                            temStatus.value = 0;
                                        }
                                        if (myresponse[0].EndDate !== undefined) {
                                            endDate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                            tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                        }

                                        //EmpEmailId.value = myresponse[0].EMP_EMAIL_ID;
                                        //EmpEmailId.value = myresponse[0].EMP_EMAIL;
                                        EmpEmailId.value ="shreyas.manjunatha@thoughtfocus.com";
                                        EmpUserID.value = myresponse[0].EMP_USERID;
                                        EmpName.value = myresponse[0].EMP_NAME;
                                        //EmpEmailId.value = "yashovardhan.jayaram@thoughtfocus.com";
                                        gifModal.style.display = "none";
                                        modal.style.display = "none";

                                    } else if (myresponse.length > 1) {
                                        gifModal.style.display = "none";
                                        modal.style.display = "block";
                                        tempEnddate.value = "";
                                        endDate.value = "";
                                        //populate Hidden Fields

                                        //hiddentExtension.value = myresponse[0].Extension;
                                        hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                        hiddentJobCode.value = myresponse[0].JOBCODE;
                                        hiddentFullTime.value = myresponse[0].FullTime;
                                        hiddenPartTime.value = myresponse[0].PartTime;
                                        hiddenTenure.value = myresponse[0].Tenure;
                                        hiddenPerm.value = myresponse[0].Perm;
                                        hiddenProb.value = myresponse[0].Prob;
                                        hiddenOthers.value = myresponse[0].Other;
                                        hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                        hiddenLeavesNo.value = myresponse[0].LeaveNo;

                                        var col = [];
                                        col.push("FIRST_NAME");

                                        col.push("LAST_NAME");

                                        col.push("DEPTNAME");

                                        col.push("DEPTID");

                                        var table = document.createElement("table");
                                        table.id = "tb";
                                        var tr = table.insertRow(-1);
                                        var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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
                                                hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
                                        // debugger;

                                        var footerModal = document.getElementById("modal_footer");
                                        var okButton = document.createElement("input");
                                        okButton.type = "button";
                                        okButton.setAttribute("class", "okBtn");
                                        //okButton.id = "okBtn";
                                        okButton.value = "OK";
                                        okButton.onclick = function(event) {
                                            //alert("Button Clicked 1");
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
                                                    //alert("Button Clicked 2");
                                                    rButtonStatus = false;
                                                } else {
                                                    //alert("Button Clicked 3");
                                                    HiddenEmpID.value = myresponse[n].EMPLID;
                                                    hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                    hiddenLastName.value = myresponse[n].LAST_NAME;
                                                    hiddentDepartmentName.value = myresponse[n].DEPTNAME;
                                                    //hiddentExtension.value = myresponse[n].Extension;
                                                    hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                    hiddentJobCode.value = myresponse[n].JOBCODE;
                                                    //HiddenEndDate.value = myresponse[n].EndDate;

                                                    hiddentFullTime.value = myresponse[n].FullTime;
                                                    hiddenPartTime.value = myresponse[n].PartTime;
                                                    /* if(hiddentFullTime.value == 1){             
                                                       FullTimePartTime.value = 1;                           
                                                     }else if(hiddenPartTime.value == 1){            
                                                       FullTimePartTime.value = 0;              
                                                     }*/
                                                    hiddenTenure.value = myresponse[n].Tenure;
                                                    hiddenPerm.value = myresponse[n].Perm;
                                                    hiddenProb.value = myresponse[n].Prob;
                                                    hiddenOthers.value = myresponse[n].Other;
                                                    /*if(hiddenTenure.value == 1){
                                                      ProbationStatus.value = 1;
                                                    }else if(hiddenPerm.value == 1){
                                                      ProbationStatus.value = 2;
                                                    }else if(hiddenProb.value == 1){
                                                      ProbationStatus.value = 3;
                                                    }else if(hiddenOthers.value == 1){
                                                      ProbationStatus.value = 4;
                                                    }*/
                                                    hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                    /* if(hiddenLeavesYes.value == 1){
                                                       AreYouOnLeave.value = 1;
                                                     }else if(hiddenLeavesNo.value == 1){
                                                       AreYouOnLeave.value = 0;
                                                     }*/
                                                    hiddentDeptID.value = myresponse[n].DEPTID;
                                                    /* if(tempStats == 1){
                                                       temStatus.value = 1;
                                                     }else{
                                                       temStatus.value = 0;
                                                     }      */
                                                    rButtonStatus = true;
                                                    break;
                                                }
                                            }
                                            if (rButtonStatus === false) {
                                                showErrorModal("Alert!", "Please select the department");
                                                modal.style.display = "block";
                                            } else {
                                                //alert("Button Clicked 4");
                                                empID.value = HiddenEmpID.value;
                                                firstName.value = hiddenFirstName.value;
                                                firstName.value = hiddenFirstName.value;
                                                lastName.value = hiddenLastName.value;
                                                departmentID.value = hiddentDepartmentName.value;
                                                //extension.value = hiddentExtension.value;
                                                bargainingUnit.value = hiddenBargainingUnit.value;
                                                jobCode.value = hiddentJobCode.value;
                                                endDate.value = HiddenEndDate.value;
                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                if (hiddentFullTime.value == 1) {
                                                    FullTimePartTime.value = 1;
                                                } else if (hiddenPartTime.value == 1) {
                                                    FullTimePartTime.value = 0;
                                                }
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                if (hiddenTenure.value == 1) {
                                                    ProbationStatus.value = 1;
                                                } else if (hiddenPerm.value == 1) {
                                                    ProbationStatus.value = 2;
                                                } else if (hiddenProb.value == 1) {
                                                    ProbationStatus.value = 3;
                                                } else if (hiddenOthers.value == 1) {
                                                    ProbationStatus.value = 4;
                                                }
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                if (hiddenLeavesYes.value == 1) {
                                                    AreYouOnLeave.value = 1;
                                                } else if (hiddenLeavesNo.value == 1) {
                                                    AreYouOnLeave.value = 0;
                                                }
                                                DeptID.value = hiddentDeptID.value;
                                                if (tempStats == 1) {
                                                    temStatus.value = 1;
                                                } else {
                                                    temStatus.value = 0;
                                                }
                                                if (myresponse[n].EndDate !== undefined) {
                                                    HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                    tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                }
                                                ////EmpEmailId.value = myresponse[n].EMP_EMAIL_ID;
                                                //EmpEmailId.value = myresponse[n].EMP_EMAIL;
                                                EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";
                                                EmpUserID.value = myresponse[n].EMP_USERID;
                                                EmpName.value = myresponse[n].EMP_NAME;
                                                // gifModal.style.display = "none";
                                                modal.style.display = "none";

                                            }
                                        };
                                        // footerModal = document.getElementById("modal_footer");
                                        footerModal.appendChild(okButton);

                                    } else {
                                        //alert("No Matching Records Found");
                                        var modal = document.getElementById("errorPopup");
                                        var para = document.getElementById("para");
                                        para.innerHTML = "";
                                        para.innerHTML = "No matching records found";
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
                                        modal.style.display = "block";

                                        chrsID.value=null;
                                        empID.value = null;
                                        firstName.value = null;
                                        lastName.value = null;
                                        departmentID.value = null;
                                        extension.value = null;
                                        bargainingUnit.value = null;
                                        jobCode.value = null;
                                        endDate.value = null;
                                        FullTimePartTime.value = null;
                                        ProbationStatus.value = null;
                                        AreYouOnLeave.value = null;
                                        DeptID.value = null;
                                        temStatus.value = null;
                                        //gifModal.style.display = "none";
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
                                            showErrorModal("Alert!", "Please select the department");
                                            modal.style.display = "block";
                                        } else {

                                            showErrorModal("Alert!", "Please select the department");
                                            modal.style.display = "block";
                                        }

                                    };
                                    // When the user clicks anywhere outside of the modal, close it
                                    window.onclick = function(event) {
                                        if (event.target == modal) {
                                            modal.style.display = "none";
                                        }
                                    };
                                    UserLookupFlag.value = null;
                                }
                            });
                        }
                    }
                });
            } else {
				empID.value = null;
                firstName.value = null;
                lastName.value = null;
                departmentID.value = null;
                extension.value = null;
                bargainingUnit.value = null;
                jobCode.value = null;
                endDate.value = null;
                FullTimePartTime.value = null;
                ProbationStatus.value = null;
                AreYouOnLeave.value = null;
                DeptID.value = null;
                temStatus.value = null;
                //gifModal.style.display = "none";
            }
        }
    } 

        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_empID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_empID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_empID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_empID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
                if (StageIndicator.value === null) {
        var status;
        if (UserLookupFlag.value !== this.value) {

            if (empID.value !== null) {
                var EmpId = this.value;
                var gifModal = document.getElementById('gifModal');
                gifModal.style.display = "block";
                $.ajax({
                    type: 'GET',
                    url: "/bin/checkTheUserIsAnAuthorizableMember",
                    data: {
                        userId: LogUser.value,
                        groupId: "Fee-Waiver-Reviewers"
                    },
                    dataType: 'json',
                    success: function(userDetails) {
                        status = userDetails.Result;
                      AuthUserStatus.value = status;
                        //alert(status);

                        if (status === true) {
                            if (FeeWaiverRequestedBy.value !== empID.value) {
                                hrUseOnly.visible = false;
                                employeeSignature.visible = false;
                                employeeDate.value = "";
                                EmployeeSignature.value = "";
                                employeeComments.value = "";
                            } else {
                                hrDate.value = "";
                                hrSignature.value = "";
                                hrComments.value = "";
                                hrUseOnly.visible = false;
                                employeeSignature.visible = true;
                            }
                            $.ajax({

                                type: 'GET',

                                url: "/bin/getDependentFeeWaiverEmpLookUp",


                                data: {
                                    cwid: EmpId
                                },

                                dataType: 'JSON',

                                success: function(myresponse) {
                                    gifModal.style.display = "none";
                                    
                                    var modal = document.getElementById('myModal');
                                    var span = document.getElementsByClassName("close")[0];
                                    if (myresponse.length == 1) {
                                        tempEnddate.value = "";
                                        endDate.value = "";
                                        var tempStats = myresponse[0].Temp;

                                        firstName.value = myresponse[0].FIRST_NAME;
                                        lastName.value = myresponse[0].LAST_NAME;
                                        departmentID.value = myresponse[0].DEPTNAME;
                                        // extension.value = myresponse[0].Extension;
                                        bargainingUnit.value = myresponse[0].UNION_CD;
                                        jobCode.value = myresponse[0].JOBCODE;
                                        //endDate.value = myresponse[0].EndDate;

                                        hiddentFullTime.value = myresponse[0].FullTime;
                                        hiddenPartTime.value = myresponse[0].PartTime;
                                        if (hiddentFullTime.value == 1) {
                                            FullTimePartTime.value = 1;
                                        } else if (hiddenPartTime.value == 1) {
                                            FullTimePartTime.value = 0;
                                        }
                                        hiddenTenure.value = myresponse[0].Tenure;
                                        hiddenPerm.value = myresponse[0].Perm;
                                        hiddenProb.value = myresponse[0].Prob;
                                        hiddenOthers.value = myresponse[0].Other;
                                        if (hiddenTenure.value == 1) {
                                            ProbationStatus.value = 1;
                                        } else if (hiddenPerm.value == 1) {
                                            ProbationStatus.value = 2;
                                        } else if (hiddenProb.value == 1) {
                                            ProbationStatus.value = 3;
                                        } else if (hiddenOthers.value == 1) {
                                            ProbationStatus.value = 4;
                                        }
                                        hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                        hiddenLeavesNo.value = myresponse[0].LeaveNo;
                                        if (hiddenLeavesYes.value == 1) {
                                            AreYouOnLeave.value = 1;
                                        } else if (hiddenLeavesNo.value == 1) {
                                            AreYouOnLeave.value = 0;
                                        }
                                        DeptID.value = myresponse[0].DEPTID;
                                        if (tempStats == 1) {
                                            temStatus.value = 1;
                                        } else {
                                            temStatus.value = 0;
                                        }
                                        if (myresponse[0].EndDate !== undefined) {
                                            endDate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                            tempEnddate.value = ((myresponse[0].EndDate.substring(4, 8)) + "-" + (myresponse[0].EndDate.substring(0, 2)) + "-" + (myresponse[0].EndDate.substring(2, 4)));
                                        }

                                        //EmpEmailId.value = myresponse[0].EMP_EMAIL_ID;
                                        EmpEmailId.value = myresponse[0].EMP_EMAIL;
                                        EmpUserID.value = myresponse[0].EMP_USERID;
                                        EmpName.value = myresponse[0].EMP_NAME;
                                        //EmpEmailId.value = "yashovardhan.jayaram@thoughtfocus.com";
                                        gifModal.style.display = "none";
                                        modal.style.display = "none";

                                    } else if (myresponse.length > 1) {
                                        gifModal.style.display = "none";
                                        modal.style.display = "block";
                                        tempEnddate.value = "";
                                        endDate.value = "";
                                        //populate Hidden Fields

                                        //hiddentExtension.value = myresponse[0].Extension;
                                        hiddenBargainingUnit.value = myresponse[0].UNION_CD;
                                        hiddentJobCode.value = myresponse[0].JOBCODE;
                                        hiddentFullTime.value = myresponse[0].FullTime;
                                        hiddenPartTime.value = myresponse[0].PartTime;
                                        hiddenTenure.value = myresponse[0].Tenure;
                                        hiddenPerm.value = myresponse[0].Perm;
                                        hiddenProb.value = myresponse[0].Prob;
                                        hiddenOthers.value = myresponse[0].Other;
                                        hiddenLeavesYes.value = myresponse[0].LeaveYes;
                                        hiddenLeavesNo.value = myresponse[0].LeaveNo;

                                        var col = [];
                                        col.push("FIRST_NAME");

                                        col.push("LAST_NAME");

                                        col.push("DEPTNAME");

                                        col.push("DEPTID");

                                        var table = document.createElement("table");
                                        table.id = "tb";
                                        var tr = table.insertRow(-1);
                                        var headings = ["", "First Name", "Last Name", "Dep Name", "Dep ID"];
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
                                                hiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                                hiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                                hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                                // cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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
                                        // debugger;

                                        var footerModal = document.getElementById("modal_footer");
                                        var okButton = document.createElement("input");
                                        okButton.type = "button";
                                        okButton.setAttribute("class", "okBtn");
                                        //okButton.id = "okBtn";
                                        okButton.value = "OK";
                                        okButton.onclick = function(event) {
                                            //alert("Button Clicked 1");
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
                                                    //alert("Button Clicked 2");
                                                    rButtonStatus = false;
                                                } else {
                                                    //alert("Button Clicked 3");
                                                    hiddenFirstName.value = myresponse[n].FIRST_NAME;
                                                    hiddenLastName.value = myresponse[n].LAST_NAME;
                                                    hiddentDepartmentName.value = myresponse[n].DEPTNAME;
                                                    //hiddentExtension.value = myresponse[n].Extension;
                                                    hiddenBargainingUnit.value = myresponse[n].UNION_CD;
                                                    hiddentJobCode.value = myresponse[n].JOBCODE;
                                                    //HiddenEndDate.value = myresponse[n].EndDate;

                                                    hiddentFullTime.value = myresponse[n].FullTime;
                                                    hiddenPartTime.value = myresponse[n].PartTime;
                                                    /* if(hiddentFullTime.value == 1){             
                                                       FullTimePartTime.value = 1;                           
                                                     }else if(hiddenPartTime.value == 1){            
                                                       FullTimePartTime.value = 0;              
                                                     }*/
                                                    hiddenTenure.value = myresponse[n].Tenure;
                                                    hiddenPerm.value = myresponse[n].Perm;
                                                    hiddenProb.value = myresponse[n].Prob;
                                                    hiddenOthers.value = myresponse[n].Other;
                                                    /*if(hiddenTenure.value == 1){
                                                      ProbationStatus.value = 1;
                                                    }else if(hiddenPerm.value == 1){
                                                      ProbationStatus.value = 2;
                                                    }else if(hiddenProb.value == 1){
                                                      ProbationStatus.value = 3;
                                                    }else if(hiddenOthers.value == 1){
                                                      ProbationStatus.value = 4;
                                                    }*/
                                                    hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                    hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                    /* if(hiddenLeavesYes.value == 1){
                                                       AreYouOnLeave.value = 1;
                                                     }else if(hiddenLeavesNo.value == 1){
                                                       AreYouOnLeave.value = 0;
                                                     }*/
                                                    hiddentDeptID.value = myresponse[n].DEPTID;
                                                    /* if(tempStats == 1){
                                                       temStatus.value = 1;
                                                     }else{
                                                       temStatus.value = 0;
                                                     }      */
                                                    rButtonStatus = true;
                                                    break;
                                                }
                                            }
                                            if (rButtonStatus === false) {
                                                showErrorModal("Alert!", "Please select the department");
                                                modal.style.display = "block";
                                            } else {
                                                //alert("Button Clicked 4");
                                                firstName.value = hiddenFirstName.value;
                                                lastName.value = hiddenLastName.value;
                                                departmentID.value = hiddentDepartmentName.value;
                                                //extension.value = hiddentExtension.value;
                                                bargainingUnit.value = hiddenBargainingUnit.value;
                                                jobCode.value = hiddentJobCode.value;
                                                endDate.value = HiddenEndDate.value;
                                                hiddentFullTime.value = myresponse[n].FullTime;
                                                hiddenPartTime.value = myresponse[n].PartTime;
                                                if (hiddentFullTime.value == 1) {
                                                    FullTimePartTime.value = 1;
                                                } else if (hiddenPartTime.value == 1) {
                                                    FullTimePartTime.value = 0;
                                                }
                                                hiddenTenure.value = myresponse[n].Tenure;
                                                hiddenPerm.value = myresponse[n].Perm;
                                                hiddenProb.value = myresponse[n].Prob;
                                                hiddenOthers.value = myresponse[n].Other;
                                                if (hiddenTenure.value == 1) {
                                                    ProbationStatus.value = 1;
                                                } else if (hiddenPerm.value == 1) {
                                                    ProbationStatus.value = 2;
                                                } else if (hiddenProb.value == 1) {
                                                    ProbationStatus.value = 3;
                                                } else if (hiddenOthers.value == 1) {
                                                    ProbationStatus.value = 4;
                                                }
                                                hiddenLeavesYes.value = myresponse[n].LeaveYes;
                                                hiddenLeavesNo.value = myresponse[n].LeaveNo;
                                                if (hiddenLeavesYes.value == 1) {
                                                    AreYouOnLeave.value = 1;
                                                } else if (hiddenLeavesNo.value == 1) {
                                                    AreYouOnLeave.value = 0;
                                                }
                                                DeptID.value = hiddentDeptID.value;
                                                if (tempStats == 1) {
                                                    temStatus.value = 1;
                                                } else {
                                                    temStatus.value = 0;
                                                }
                                                if (myresponse[n].EndDate !== undefined) {
                                                    HiddenEndDate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                    tempEnddate.value = ((myresponse[n].EndDate.substring(4, 8)) + "-" + (myresponse[n].EndDate.substring(0, 2)) + "-" + (myresponse[n].EndDate.substring(2, 4)));
                                                }
                                                //EmpEmailId.value = myresponse[n].EMP_EMAIL_ID;
                                                EmpEmailId.value = myresponse[n].EMP_EMAIL;
                                                EmpUserID.value = myresponse[n].EMP_USERID;
                                                EmpName.value = myresponse[n].EMP_NAME;
                                                // gifModal.style.display = "none";
                                                modal.style.display = "none";

                                            }
                                        };
                                        // footerModal = document.getElementById("modal_footer");
                                        footerModal.appendChild(okButton);

                                    } else {
                                        //alert("No Matching Records Found");
                                        var modal = document.getElementById("errorPopup");
                                        var para = document.getElementById("para");
                                        para.innerHTML = "";
                                        para.innerHTML = "No matching records found";
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
                                        modal.style.display = "block";

                                        empID.value = null;
                                        firstName.value = null;
                                        lastName.value = null;
                                        departmentID.value = null;
                                        extension.value = null;
                                        bargainingUnit.value = null;
                                        jobCode.value = null;
                                        endDate.value = null;
                                        FullTimePartTime.value = null;
                                        ProbationStatus.value = null;
                                        AreYouOnLeave.value = null;
                                        DeptID.value = null;
                                        temStatus.value = null;
                                        //gifModal.style.display = "none";
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
                                            showErrorModal("Alert!", "Please select the department");
                                            modal.style.display = "block";
                                        } else {

                                            showErrorModal("Alert!", "Please select the department");
                                            modal.style.display = "block";
                                        }

                                    };
                                    // When the user clicks anywhere outside of the modal, close it
                                    window.onclick = function(event) {
                                        if (event.target == modal) {
                                            modal.style.display = "none";
                                        }
                                    };
                                    UserLookupFlag.value = null;
                                }
                            });
                        }
                    }
                });
            } else {

                firstName.value = null;
                lastName.value = null;
                departmentID.value = null;
                extension.value = null;
                bargainingUnit.value = null;
                jobCode.value = null;
                endDate.value = null;
                FullTimePartTime.value = null;
                ProbationStatus.value = null;
                AreYouOnLeave.value = null;
                DeptID.value = null;
                temStatus.value = null;
                //gifModal.style.display = "none";
            }
        }
    } 
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_departmentID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_departmentID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_bargainingUnit_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_bargainingUnit_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_bargainingUnit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_bargainingUnit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "C99" || this.value == "M80" || this.value == "M98"){
  GroupCode.value = 1;
}else if(this.value == "R02" || this.value == "R05" || this.value == "R07" || this.value == "R09"){
  GroupCode.value = 2;
}else if(this.value == "R10"){
  GroupCode.value = 3;
}else if(this.value == "R04"){
  GroupCode.value = 4;
}else if(this.value == "R01"){
  GroupCode.value = 5;
}else if(this.value == "R06"){
  GroupCode.value = 6;
}else if(this.value == "R08"){
  GroupCode.value = 7;
}


        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_jobCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_jobCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_temStatus_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_temStatus_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && tempDateStatus.value  === null){
if(this.value !== "1"){
  endDate.value = "";
  endDate.mandatory = "";
}else{
  endDate.value = tempEnddate.value;
  endDate.mandatory = "error";
}}
tempDateStatus.value = null;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToHR" || StageIndicator.value === "ToEmployee"){
var EmpId=empID.value; 
//var EmpId="806225686"; 
  this.value = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);
var applicantName = this.value;
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

$.ajax({

   type: 'GET',

      	url: "/bin/getDependentFeeWaiverApplicantLookUp",
      
      
      data:  {
        	 cwid: EmpId,
        	 applicantFirstName: applicantName
      },
      
      dataType: 'JSON',

    success: function(myresponse) {
      	gifModal.style.display = "none";
        // debugger;
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        if (myresponse.length >= 1) {
          debugger;
		  //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___widget').style.color = "black";
          //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___widget').style.color = "black";
          //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___widget').style.color = "black";
          document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "black";
document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "black";
document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "black";
         
            

            gifModal.style.display = "none";
            modal.style.display = "none";          
        }else{
          
           if(dependentAddressRB.value !== "1"){
          
             //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___widget').style.color = "#e36254";
          //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___widget').style.color = "#e36254";
         //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___widget').style.color = "#e36254";
             document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "#faa21e";
document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "#faa21e";
document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "#faa21e";
              
           }
          else{
  //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___widget').style.color = "#e36254";
          //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___widget').style.color = "#e36254";
          //document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___widget').style.color = "#e36254";
            document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "#faa21e";
document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "#faa21e";
document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "#faa21e";
}
          
        }
    }
}); 
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantFirstName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantFirstName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null  ) {
    var EmpId = empID.value;
    //var EmpId="806225686"; 
    this.value = ((this.value).toLowerCase()).charAt(0).toUpperCase() + ((this.value).toLowerCase()).slice(1);
    var applicantName = this.value;
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
debugger;
    $.ajax({

        type: 'GET',

        url: "/bin/getDependentFeeWaiverApplicantLookUp",


        data: {
            cwid: EmpId,
            applicantFirstName: applicantName
        },

        dataType: 'JSON',

        success: function(myresponse) {
            gifModal.style.display = "none";
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            if (myresponse.length == 1) {
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "black";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "black";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "black";
                applicantLastName.value = myresponse[0].last_name;
              
              applicantFirstName.value = myresponse[0].first_name.trim();
                
             
              
               RelToEmp.value = myresponse[0].relationship.trim();
                applicantDateOfBirth.value = myresponse[0].birthdate.replace(" 00:00:00.0", "");
                if (dependentAddressRB.value !== "1") {debugger;
                    applicantAddress.value = myresponse[0].address1.trim();
                    applicantCity.value = myresponse[0].city.trim();
                    applicantState.value = myresponse[0].state.trim();
                   
					
   
                }
                gifModal.style.display = "none";
                modal.style.display = "none";
            } else if (myresponse.length > 1) {
              gifModal.style.display = "none";
              debugger;
              if(DependentLookupFlag.value !=  applicantFirstName.value){
                DependentLookupFlag.value = null;
              }
             var dpFlag = false;
              for (n = 0; n < myresponse.length; n++) {
        if (myresponse[n].first_name.trim() == DependentLookupFlag.value) {
            dpFlag = false;
        } else {
            dpFlag = true;
            break;
        }
    }
              if(dpFlag === true){
                gifModal.style.display = "block";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "black";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "black";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "black";
				gifModal.style.display = "none";
modal.style.display = "block";



var col = [];
col.push("first_name");

col.push("last_name");

col.push("relationship");
                
col.push("birthdate");

var table = document.createElement("table");
table.id = "tb";
var tr = table.insertRow(-1);
var headings = ["", "First Name", "Last Name", "Relationship","Birth Date"];
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

	applicantFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;

    };

    var tabCell1 = tr.insertCell(-1);
    tabCell1.appendChild(button);
    for (var l = 0; l < col.length; l++) {
        var tabCell = tr.insertCell(-1);
     if((myresponse[k][col[l]]).includes(" 00:00:00.0")){
       var res = (myresponse[k][col[l]]).replace(" 00:00:00.0", "");
       res = res.substring(5,7).concat("-"+res.substring(8,10)).concat("-"+res.substring(0,4));
       tabCell.innerHTML = res;
     }else{
        tabCell.innerHTML = myresponse[k][col[l]];
     }
    }
}

var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);
// debugger;

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
            rButtonStatus = true;
            break;
        }
    }
    if (rButtonStatus === false) {
        showErrorModal("Alert!", "Please select the correct entry");
        modal.style.display = "none";
    } else {
      debugger;
        applicantAddress.value = myresponse[n].address1.trim();
        applicantCity.value = myresponse[n].city.trim();
        applicantState.value = myresponse[n].state.trim();
        RelToEmp.value = myresponse[n].relationship.trim();
        applicantFirstName.value = myresponse[n].first_name.trim();
      DependentLookupFlag.value= applicantFirstName.value;
      applicantLastName.value = myresponse[n].last_name;
      applicantDateOfBirth.value = myresponse[n].birthdate.replace(" 00:00:00.0", "");
        modal.style.display = "none";

    }
};

footerModal.appendChild(okButton);
                gifModal.style.display = "none";
                modal.style.display = "block";
              }
            } else {
                applicantLastName.value = null;
                applicantDateOfBirth.value = null;
                //applicantFirstName.value = null;
               RelToEmp.value = null;
             // DependentLookupFlag.value = null;
                if (dependentAddressRB.value !== "1") {
                    applicantCity.value = null;
                    applicantState.value = null;
                    applicantAddress.value = null;
                   
                    document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "#faa21e";
                    document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "#faa21e";
                    document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "#faa21e";

                } else {
                    document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "#faa21e";
                    document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "#faa21e";
                    document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "#faa21e";
                }
                showErrorModal("Alert!", "No matching records found");
            }
        }
    });
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantDateOfBirth_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_applicantDateOfBirth_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
if((StageIndicator.value === null || StageIndicator.value == "ToEmployee") && this.value !== null ){ 

var age = getAge(this.value);
var cbid = bargainingUnit.value;
if((cbid == "R01" || cbid == "R08" || cbid == "R10") && RelToEmp.value != "SP"){  
  if(age > 23 && relationToEmployee.value !== null && relationToEmployee.value !== "2"){
    
    showErrorModal("Alert!","The dependent entered is not eligible for fee waiver due to age limit");
  }
}
if((cbid == "R02" || cbid == "R03" || cbid == "R04" || cbid == "R05" || cbid == "R06" || cbid == "R07" || cbid == "R09" || cbid == "C99" || cbid == "M80" || cbid == "M98") && RelToEmp.value != "SP"){  
  if(age > 25 && relationToEmployee.value !== null && relationToEmployee.value !== "2"){
    showErrorModal("Alert!","The dependent entered is not eligible for fee waiver due to age limit");
  }
}
  }
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_RelToEmp_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_RelToEmp_init0 = function (scope) {
    with(this) {
        with(scope) {
            //this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_dependentAddressRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_dependentAddressRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (dependentAddressRB.value == "1") {
    if (StageIndicator.value === null) {   
          /*document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantaddress1577___widget').style.color = "black";
		  document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantcity1577351___widget').style.color = "black";
          document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantstate157735___widget').style.color = "black";*/
        applicantAddress.value = empAddress.value;
        applicantState.value = empState.value;
        applicantCity.value = empCity.value;
    }
} else {
   if (StageIndicator.value === null && applicantFirstName.value !== null) {
        var EmpId=empID.value; 
        var applicantName = applicantFirstName.value;
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
      
        $.ajax({

           type: 'GET',

              	url: "/bin/getDependentFeeWaiverApplicantLookUp",             
              
              data:  {
                	 cwid: EmpId,
                	 applicantFirstName: applicantName
              },
              
              dataType: 'JSON',

            success: function(myresponse) {
              	gifModal.style.display = "none";
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresponse.length >= 1) {

        /*  document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantaddress1577___widget').style.color = "black";
		  document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantcity1577351___widget').style.color = "black";
          document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantstate157735___widget').style.color = "black";*/
                 
                   applicantAddress.value = myresponse[0].address1.trim();
                   applicantCity.value = myresponse[0].city.trim();
                   applicantState.value = myresponse[0].state.trim();
                  RelToEmp.value = myresponse[0].relationship.trim();
                  applicantFirstName.value = myresponse[0].first_name.trim();
/* if(applicantCity.value === null){
              document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantaddress1577___widget').style.color = "#e36254";
            }
            if(applicantState.value === null){
               document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantcity1577351___widget').style.color = "#e36254";
            }
            if(applicantAddress.value === null){
              document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantstate157735___widget').style.color = "#e36254";
            }*/
                    gifModal.style.display = "none";
                    modal.style.display = "none";          
                }else if (myresponse.length > 1) {
              debugger;
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantfirstname15___label').style.color = "black";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantlastname157___label').style.color = "black";
                document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantdateofbirth___label').style.color = "black";
				gifModal.style.display = "none";
modal.style.display = "block";



var col = [];
col.push("first_name");

col.push("last_name");

col.push("relationship");

var table = document.createElement("table");
table.id = "tb";
var tr = table.insertRow(-1);
var headings = ["", "First Name", "Last Name", "Relationship"];
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

	applicantFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;

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
// debugger;

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
            rButtonStatus = true;
            break;
        }
    }
    if (rButtonStatus === false) {
        showErrorModal("Alert!", "Please select the dependent");
        modal.style.display = "none";
    } else {
      debugger;
        applicantAddress.value = myresponse[n].address1.trim();
        applicantCity.value = myresponse[n].city.trim();
        applicantState.value = myresponse[n].state.trim();
        RelToEmp.value = myresponse[n].relationship.trim();
        applicantFirstName.value = myresponse[n].first_name.trim();
      applicantLastName.value = myresponse[n].last_name;
        modal.style.display = "none";

    }
};

footerModal.appendChild(okButton);
                gifModal.style.display = "none";
                modal.style.display = "block";
            }else{
                  
                    applicantAddress.value = null;
                    applicantCity.value = null;
                    applicantState.value = null;
                  RelToEmp.value = null;
         /* document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantaddress1577___widget').style.color = "#e36254";
		  document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantcity1577351___widget').style.color = "#e36254";
          document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantstate157735___widget').style.color = "#e36254";*/
                  showErrorModal("Alert!","No matching records found");
                }
            }
        });
   }else{
      applicantAddress.value = null;
                    applicantCity.value = null;
                    applicantState.value = null;
                  RelToEmp.value = null;
         /* document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantaddress1577___widget').style.color = "#e36254";
		  document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantcity1577351___widget').style.color = "#e36254";
          document.getElementById('guideContainer-rootPanel-panel-spouseInformation-applicantstate157735___widget').style.color = "#e36254";*/
   }
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_semster_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_semster_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == 1){
  SemesterCode1.value = 3;
}else if(this.value == 2){
  SemesterCode1.value = 5;
}else if(this.value == 3){
  SemesterCode1.value = 7;
}else{
  SemesterCode1.value = 0;
}

var thisValue = yearSemester.value;
var modValue = thisValue % 100;
//alert("MOD Value is= "+modValue);
if(this.value !== null && yearSemester.value !== null && (modValue < 10)){
  term.value = '20'+modValue+SemesterCode1.value;
}else{
  term.value = "2"+modValue+SemesterCode1.value; 
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_yearSemester_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_yearSemester_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var thisValue = this.value;
var modValue = thisValue % 100;

if(this.value !== null && semster.value !== null && (modValue < 10)){
  term.value = '20'+modValue+SemesterCode1.value;
}else{
  term.value = "2"+modValue+SemesterCode1.value;  
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_campusOfEnrollment_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_campusOfEnrollment_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToHR"){
  if(this.value == "7"){
    // 7 = Fullerton
    CampusAttendingFlag.value = "Yes";
  }else{
    CampusAttendingFlag.value = "No";
  }
}

        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_classStanding_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_classStanding_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  ClassStandingCode1.value = "U";
}else if(this.value == 2 || this.value == 6){
  ClassStandingCode1.value = "G";
}else if(this.value == 4){
  ClassStandingCode1.value = "C";
}else if(this.value == 5){
  ClassStandingCode1.value = "D";
}else if(this.value == 3){
  ClassStandingCode1.value = "T";
}

        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_classStanding_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_classStanding_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToEmployee"){
if(classStanding.value == 2 || classStanding.value == 5 ){
  ClassStCB.mandatory = true;
}else{
   ClassStCB.mandatory = false;
}
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_courseInformation_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_courseInformation_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null &&  StageIndicator.value != "ToEmployee"){
  debugger;
  if(document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row1-tableItem1__-1_widget').getAttribute('aria-checked') === true){
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row1-tableItem1__-1_widget').setAttribute("enabled","enabled");
  }else if(document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row1-tableItem1__-2_widgett').getAttribute('aria-checked') === true){
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row1-tableItem1__-2_widget').setAttribute("enabled","enabled");
  }else{
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row1-tableItem1__-1_widget').setAttribute("disabled","disabled");
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row1-tableItem1__-2_widget').setAttribute("disabled","disabled");
  }
  
   if(document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row2-tableItem1__-1_widget').getAttribute('aria-checked') === true){
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row2-tableItem1__-1_widget').setAttribute("enabled","enabled");
  }else if(document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row2-tableItem1__-2_widgett').getAttribute('aria-checked') === true){
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row2-tableItem1__-2_widget').setAttribute("enabled","enabled");
  }else{
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row2-tableItem1__-1_widget').setAttribute("disabled","disabled");
    document.getElementById('guideContainer-rootPanel-panel-courseinformation-table-Row2-tableItem1__-2_widget').setAttribute("disabled","disabled");
  }
  
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_courseTitle1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_courseTitle1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && course1_status.value === null){
if(this.value !== ""){
  onlineCourse1Yes.value = "";
  onlineCourse1Yes.mandatory = "error";
}if(this.value === null){
 
  onlineCourse1Yes.mandatory = "";
}}
course1_status.value = null;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_courseTitle2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_courseTitle2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && course2_status.value === null){
if(this.value !== ""){
  onlineCourse2Yes.value = "";
  onlineCourse2Yes.mandatory = "error";
}if(this.value === null){
 
  onlineCourse2Yes.mandatory = "";
}}
course2_status.value = null;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_instructions_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_instructions_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
}else{
  this.enabled = false;
}

        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value === "ToEmployee"){
if(this.value == 1){
//employeeSignature.value = LogUser.value;
EmployeeSignature.enabled = false;
        if (employeeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            employeeDate.value = d;
            EmployeeSignature.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    EmployeeSignature.value = userValue;
                  initials.value  = userValue;
                  
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } else {
            employeeDate.enabled = false;
            EmployeeSignature.enabled = false;
        }
}else{
     employeeDate.value = null;
            EmployeeSignature.value = null;
  initials.value = null;
}
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
EmployeeSignature.value = LogUser.value;
EmployeeSignature.enabled = false;
        if (employeeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            employeeDate.value = d;
            EmployeeSignature.enabled = false;
        } else {
            employeeDate.enabled = false;
            EmployeeSignature.enabled = false;
        }
}else{
     employeeDate.value = null;
            EmployeeSignature.value = null;
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_empComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_empComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_empCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_empCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null || StageIndicator.value === "ToEmployee"){
if(this.value == 1){
//employeeSignature.value = LogUser.value;
EmployeeSignature.enabled = false;
        if (employeeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            employeeDate.value = d;
            EmployeeSignature.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    EmployeeSignature.value = userValue;
                  initials.value  = userValue;
                  
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } else {
            employeeDate.enabled = false;
            EmployeeSignature.enabled = false;
        }
}else{
     employeeDate.value = null;
            EmployeeSignature.value = null;
  initials.value = null;
}
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_initials_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_initials_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_employeeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_employeeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;


        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_employeeComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_employeeComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_hrUseOnly_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_hrUseOnly_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_GrantOrDenyRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_GrantOrDenyRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToHR"){    
    this.mandatory = "error";
  hrSignature.mandatory = "error";
  hrDate.mandatory = "error";
}else{
  this.mandatory = ""; 
  hrSignature.mandatory = "";
  hrDate.mandatory = "";
}

        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_GrantOrDenyRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_GrantOrDenyRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    feeWaiverGranted.value = "1";
}
if (this.value == "2") {
    feeWaiverDenied.value = "1";
}

        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverGranted_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverGranted_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverGranted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverGranted_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  feeWaiverDenied.value = null;
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverDenied_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverDenied_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverDenied_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_feeWaiverDenied_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  feeWaiverGranted.value = null;
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_term_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_term_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_edde_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_edde_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_edde_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_edde_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if(this.value === "SE2G"){
      empComments.value = "I understand that Miscellaneous Category III fees are not covered by the Fee Waiver program and constitute an additional fee. Examples of these fee are covered under Executive Orders 933 Online MS in Software Engineering, 944 Online and Distance Learning fee for the MS in IT Program, 957 Nursing Distance Learning lab fee and 1042 Graduate Professional Business Programs. I understand that Category I Fees established under Executive Order No. 1402 for the Graduate Professional Business Program are not waived under the Fee Waiver program.";
  
} else {
      empComments.value = "I understand that Miscellaneous Category III fees are not covered by the Fee Waiver program and constitute an additional fee. Examples of these fee are covered under Executive Orders 933 Online MS in Software Engineering, 944 Online and Distance Learning fee for the MS in IT Program, 957 Nursing Distance Learning lab fee and 1042 Graduate Professional Business Programs.";
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_hrCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_hrCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToHR" || StageIndicator.value === null){
if(this.value == 1){

        if (hrDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, ' ');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            hrDate.value = d;
            hrSignature.enabled = false;
           $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    hrSignature.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        } else {
            hrDate.enabled = false;
            hrSignature.enabled = false;
        }
}else{
     hrDate.value = null;
            hrSignature.value = null;
}
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_hrSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_hrSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_hrDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_hrDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_hiddenFields_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_hiddenFields_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_LogUser_init0 = function (scope) {
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
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStandingCode1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_ClassStandingCode1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //edde.value='F'+'D'+1+this.value;

if(bargainingUnit.value == "R03" && ClassStandingCode1.value !== ""){
  edde.value = 'F'+'D'+1+this.value;
}else{
  edde.value = 'S'+'D'+GroupCode.value+1+this.value;
}
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_extension_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_extension_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_workflow_initiator_init0 = function (scope) {
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
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_GenerateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_GenerateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(empID.value !== null && firstName.value !== null && lastName.value !== null && departmentID.value !== null && EmpEmailId.value !== null && relationToEmployee.value !== null && studentType.value !== null && classStanding.value !== null && applicantCity.value !== null && applicantAddress.value !== null && applicantStudentID.value !== null && applicantEmailAddress.value !== null && semster.value !== null && yearSemester.value !== null && campusOfEnrollment.value !== null){
  if(temStatus.value == 1 && endDate.value === null){
    showErrorModal("Alert!","Please enter Appointment end date.");
  }else{
  		getPdf();
  }
}else{
      showErrorModal("Alert!","Please fill following fields: Dependent_Information,Relation_To_Employee_Option,\n Student_Type_Option,Class_Standing_Option");
    }
function getPdf() {
  
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/dependent-fee-waiver/dependent-fee-waiver-application');
            jsonData.append('fileName',firstName.value+"_"+lastName.value+"("+empID.value+")"+"_"+ Date.now());          
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
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_saveguidedraft1577420972539_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_saveguidedraft1577420972539_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
tempDateStatus.value  = "1";
course2_status.value = "1";
course1_status.value = "1";
 aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + empID.value);
handleDraftSave(this);


        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_submit1577420963057_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_submit1577420963057_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(bargainingUnit.value === "" || bargainingUnit.value === null){
  alert("Please indicate your bargaining unit.");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].empInformation[0].bargainingUnit[0]");
}
else if(AreYouOnLeave.value === "" || AreYouOnLeave.value === null)
{
  	alert("Please indicate whether you are currently on leave.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].empInformation[0].AreYouOnLeave[0]]");
}else if(FullTimePartTime.value === "" || FullTimePartTime.value === null)
{
  	alert("Please indicate whether you are a full- or part-time employee.");
  	this.mandatory = true;
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].empInformation[0].FullTimePartTime[0]");
}else if (applicantStudentID.value === "" || applicantStudentID.value === null){
  
  	alert("Dependent's Campus Wide Identification number is missing.");
  	//this.mandatory = true;
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].applicantStudentID[0]");
}else if (applicantPhone.value === "" || applicantPhone.value === null){
  
  	alert("Please provide Dependent's phone number.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].applicantPhone[0]");
}else if (applicantDateOfBirth.value === "" || applicantDateOfBirth.value === null){
  
  	alert("Please provide dependent's date of birth.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].applicantDateOfBirth[0]");
}
else if (studentType.value === null){
  
  	alert("Please indicate whether you are a full- or part-time employee.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].studentType[0]");
}
else if (classStanding.value === null){
  
  	alert("Please indicate whether you have permanent or probationary status in your current position.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].classStanding[0]");
}
else if (campusOfEnrollment.value === null){
  
  	alert("Campus of Enrollment is missing.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].campusOfEnrollment[0]");
}else if (degreeProgram.value === null){
  
  	alert("Degree program is missing.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].degreeProgram[0]");
}else if (yearSemester.value === null){
  
  	alert("Please select Year.");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].spouseInformation[0].yearSemester[0]");
}else{
     aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + empID.value);
  guideBridge.submit(); 
}



        }
	}
}
/**
 * @function dependent_fee_waiver_dependent_fee_waiver_application.generated_submit1577420963057_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dependent_fee_waiver_dependent_fee_waiver_application.generated_submit1577420963057_click1 = function (scope) {
    with(this) {
        with(scope) {
             aftiaDescCWID.value = (firstName.value + " " + lastName.value + " " + empID.value);
//EmpEmailId.value = "DL-TotalWellness@FULLERTON.EDU";
EmpEmailId.value = "shreyas.manjunatha@thoughtfocus.com";

if(lastName.value !== null){
EmailSubject.value = "Dependent Fee Waiver Request - "+ lastName.value;
}else{
 EmailSubject.value = "Dependent Fee Waiver Request"; 
}
if(semster.value == "1"){
  termValue.value = "Spring";
}else if(semster.value == "2"){
  termValue.value = "Summer";
}else if(semster.value == "3"){
  termValue.value = "Fall";
}else if(semster.value == "4"){
  termValue.value = "Winter";
}

//alert(termValue.value);


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
if(applicantDateOfBirth.value !== null){
var age = getAge(applicantDateOfBirth.value);

var cbid = bargainingUnit.value;
  

if(classStanding.value == 2 || classStanding.value == 5 ){
  ClassStCB.mandatory = true;
}else{
   ClassStCB.mandatory = false;
}

if((cbid == "R01" || cbid == "R08") && RelToEmp.value != "SP" ){  
  if(age > 23 && relationToEmployee.value !== null && relationToEmployee.value !== "2"){    
    showErrorModal("Alert!","The dependent entered is not eligible for fee waiver due to age limit");
  }else{
    guideBridge.submit();
  }
}
else if((cbid == "R02" || cbid == "R03" || cbid == "R04" || cbid == "R05" || cbid == "R06" || cbid == "R07" || cbid == "R09" || cbid == "C99" || cbid == "M80" || cbid == "M98" || cbid == "R10") && RelToEmp.value != "SP"){ 
  debugger;
  if(age > 25 && relationToEmployee.value !== null && relationToEmployee.value !== "2"){
    showErrorModal("Alert!","The dependent entered is not eligible for fee waiver due to age limit");
  }else{
    guideBridge.submit();
  }
}else{
guideBridge.submit();
 }
    }
 else{
guideBridge.submit();
 }

        }
	}
}
