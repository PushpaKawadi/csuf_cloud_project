/**
 * @function faculty_action_request_faculty_action_request.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_guideRootPanel_init0 = function (scope) {
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
						url: "/bin/getFARData",
						data: {action: "FAR_USER_DATA",userID:userValue},
						dataType: 'json',
						success: function(myresopnse) {
						  
						   var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
						  
							if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {
								  CWID.value = myresopnse[0].EMPLID;
                              	 DeptName.value = myresopnse[0].DEPTNAME;
                              	Agency.value = myresopnse[0].CSU_SCO_AGENCY;
                              ReportingUnit.value = myresopnse[0].CSU_UNIT;
                                  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                                  CollegeDivision.value = myresopnse[0].DIVISION_NAME;
                                  FirstName.value = myresopnse[0].FIRST_NAME;
                                  LastName.value = myresopnse[0].LAST_NAME;
                                  //MiddleName.value = myresopnse[0].MIDDLE_NAME;
                                  CurrentClassificationJobTitle.value = myresopnse[0].DESCR;
                              	CurrentDeptUnit.value = myresopnse[0].DEPTID;
                              	CurrDeptID.value = myresopnse[0].DEPTID;
                              CurrJobCode.value = myresopnse[0].JOBCODE;
                              CurrRange.value = myresopnse[0].GRADE;
                              Division.value = myresopnse[0].DIVSION;
                               DivisionName.value = myresopnse[0].DIVISION_NAME;
                               PreparerEmailID.value =  "shreyas.manjunatha@thoughtfocus.com";
                              //PreparerEmailID.value =  myresopnse[0].EMAILID;
                               PreparedBy.value = myresopnse[0].EMP_NAME;
							  
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
                              	 DeptName.value = myresopnse[n].DEPTNAME;
                              	Agency.value = myresopnse[n].CSU_SCO_AGENCY;
                              ReportingUnit.value = myresopnse[n].CSU_UNIT;
                                  CMSPositionNo.value = myresopnse[n].POSITION_NBR;
                                  CollegeDivision.value = myresopnse[n].DIVISION_NAME;
                                  FirstName.value = myresopnse[n].FIRST_NAME;
                                  LastName.value = myresopnse[n].LAST_NAME;
                                  //MiddleName.value = myresopnse[0].MIDDLE_NAME;
                                  CurrentClassificationJobTitle.value = myresopnse[n].DESCR;
                              	CurrentDeptUnit.value = myresopnse[n].DEPTID;
                              	CurrDeptID.value = myresopnse[n].DEPTID;
                              CurrJobCode.value = myresopnse[n].JOBCODE;
                              CurrRange.value = myresopnse[n].GRADE;
                              Division.value = myresopnse[n].DIVSION;
                               DivisionName.value = myresopnse[n].DIVISION_NAME;
                              //PreparerEmailID.value =  myresopnse[n].EMAILID;
                                PreparerEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
                               PreparedBy.value = myresopnse[n].EMP_NAME;
                                    
                                      
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
 * @function faculty_action_request_faculty_action_request.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  SignatureACK.visible = true;
  RequestorPanel.visible = true;
  ChairPanel.visible = false;
  DeanPanel.visible = false;
  HRReviewPanel.visible = false;
  PayrollPanel.visible = false;
  
  OptionalReviewerPanel.enabled = true;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
 
}
debugger;
if(StageIndicator.value === "ToRequestor"){
  employeeInformation.enabled = true;
  AdditionalEmploymentRequest.enabled = true;
  DeanAVPDesigneePanel.enabled=true;
  
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = true;
  ChairPanel.visible = false;

  if(HRCB.value==="0" || HRDIComments.value !== null){
    HRReviewPanel.visible=true;
    HRReviewPanel.enabled=false;
  }else{
  HRReviewPanel.visible = false;
  }
  if(HRDIComments.value !== null){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
    HRCB.visible = false;
  HRDIExt.visible = false;
  HRDIDate.visible = false;
  HRSignEmailID.visible = false;
    HRDISignature.visible = false;
    HRDIPrintedName.visible = false;
  }
  if(DeanCB.value==="0"){
    DeanPanel.visible = true;
    DeanPanel.enabled=false;
   }else{
   DeanPanel.visible = false;
   }
  /*HRReviewPanel.enabled = false;
  HRDISignature.visible = false;
  HRDIPrintedName.visible = false;
  HRCB.visible = false;
  HRDIExt.visible = false;
  HRDIDate.visible = false;*/
  PayrollPanel.visible = false;
  
  OptionalReviewerPanel.enabled = true;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
  
  }
 

if(StageIndicator.value === "ToChair"){
 employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = false;
  DeanAVPDesigneePanel.enabled=false;
  ChairPanel.visible = true;
  DeanPanel.visible = false;
  HRReviewPanel.visible = false;
  /*HRReviewPanel.enabled = false;
  HRDISignature.visible = false;
  HRDIPrintedName.visible = false;
  HRCB.visible = false;
  HRDIExt.visible = false;*/
  HRDIDate.visible = false;
  
  PayrollPanel.visible = false;
  
  OptionalReviewerPanel.enabled = false;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
  
}

if(StageIndicator.value === "ToDean"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = false;
  DeanAVPDesigneePanel.enabled=false;
  ChairPanel.visible = true;
  ChairPanel.enabled = false;
  DeanPanel.visible = true;
  HRReviewPanel.visible = false;
  /*HRReviewPanel.enabled = false;
  HRDISignature.visible = false;
  HRDIPrintedName.visible = false;
  HRCB.visible = false;
  HRDIExt.visible = false;
  HRDIDate.visible = false;*/
  PayrollPanel.visible = false;
  
  
  OptionalReviewerPanel.enabled = false;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
  
}

if(StageIndicator.value === "ToPayroll"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = false;
  ChairPanel.visible = true;
  ChairPanel.enabled = false;
  DeanAVPDesigneePanel.enabled=false;
  DeanPanel.visible = true;
  DeanPanel.enabled = false;
  HRReviewPanel.visible = true;
  HRReviewPanel.enabled = false;
  PayrollPanel.visible = true;
  
  
  OptionalReviewerPanel.enabled = false;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
  
}

if(StageIndicator.value === "ToHR"){
 
 
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = false;
  
  DeanAVPDesigneePanel.enabled=false;
  if(DeptChairCB.value !== null){
   ChairPanel.visible = true;
   ChairPanel.enabled = false;
  } else{
     ChairPanel.visible = false;
  }
  if(DeanCB.value !== null){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }

  
  //HRDIPrintedName.visible = true;
  HRDIExt.visible = true;
  HRDIDate.visible = true;
  HRCB.visible = true;
  HRSignEmailID.visible = true;
  HRDISignature.visible = true;
  HRReviewPanel.visible = true;
  HRReviewPanel.enabled = true;

  PayrollPanel.visible = false;
  
  
  OptionalReviewerPanel.enabled = false;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
  
}


if(StageIndicator.value === "ToHRInitial"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  DeanAVPDesigneePanel.enabled=false;
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = false;
  ChairPanel.visible = false;
  DeanPanel.visible = false;
  HRReviewPanel.visible = true;
  HRReviewPanel.enabled = true;
  HRDISignature.visible = false;
  HRDIPrintedName.visible = false;
  HRCB.visible = false;
  HRDIExt.visible = false;
  HRDIDate.visible = false;
  HRSignEmailID.visible = false;
  PayrollPanel.visible = false;
  
  
  
  OptionalReviewerPanel.enabled = false;
  
  if(OptionalReviewerCB.value !== null){
     OptionalReviewSignaturePanel.visible = true;
     OptionalReviewSignaturePanel.enabled = false;
  } else {
     OptionalReviewSignaturePanel.visible = false;
  }
  
}

if(StageIndicator.value === "ToOptional"){
  employeeInformation.enabled = false;
  AdditionalEmploymentRequest.enabled = false;
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = false;
  DeanAVPDesigneePanel.enabled=false;
  ChairPanel.visible = false;
  DeanPanel.visible = false;
  HRReviewPanel.visible = false;
  /*HRReviewPanel.enabled = false;
  HRDISignature.visible = false;
  HRDIPrintedName.visible = false;
  HRCB.visible = false;
  HRDIExt.visible = false;*/
  HRDIDate.visible = false;
  
  PayrollPanel.visible = false;
  
  OptionalReviewerPanel.enabled = false;
  
  OptionalReviewSignaturePanel.visible = true;
  OptionalReviewSignaturePanel.enabled = true;
  
}


        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_guideRootPanel_init2 = function (scope) {
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
logUser.value = userValue;
//PreparedBy.value = userValue;

  $.ajax({

  type: 'GET',

  url: "/bin/getEvaluationFormData",
    data : {action : "EMP_DETAILS"},
  dataType: 'json',
  success: function(myresopnse) {
    var preByValue = myresopnse[0].EMP_NAME;
    PreparedBy.value = preByValue;
    //PreparerEmailID.value = myresopnse[0].EMAILID;
    
     PreparerEmailID.value = 'shreyas.manjunatha@thoughtfocus.com';
    LoggedInUserDeptID.value = myresopnse[0].DEPTID;
    Division.value = myresopnse[0].DIVSION;
    
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
 * @function faculty_action_request_faculty_action_request.generated_textdraw1575095828043_copy_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_textdraw1575095828043_copy_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_CHRSID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_CHRSID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
//var cwid = this.value;
var chrsid = this.value;


var depID = LoggedInUserDeptID.value;
var userID = logUser.value;
if (StageIndicator.value === null) {
  if (chrsid !== null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    $.ajax({
      type: 'GET',
      url: "/bin/chrsIDUpdateServlet",
      data: {       
        
        action:"EMP_DETAILS_CSU_CHRS_ID",
      
        chrsId: chrsid
        
      },
      dataType: 'json',
      success: function (myresopnse) {
debugger; 
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];

        if (myresopnse.length !== 0) {
          //based on chrsid value, fetching details of cwid
          CWID.value = myresopnse[0].EMPLID;
          FirstName.value = myresopnse[0].FIRST_NAME;
          LastName.value = myresopnse[0].LAST_NAME;        

          gifModal.style.display = "none";
          modal.style.display = "none";

        } else {

          showErrorModal("Alert !", "No matching records found");

         
          FirstName.value = "";
          LastName.value = "";
          //MiddleName.value = myresopnse[0].MIDDLE_NAME;
          
          gifModal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        
      }

    });

  }
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;

var depID = LoggedInUserDeptID.value;
var userID = logUser.value;
if (StageIndicator.value === null) {
  if (cwid !== null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    $.ajax({
      type: 'GET',
      url: "/bin/getEvaluationFormData",
      data: {       
        cwid: cwid,
        action:"EMP_DETAILS_CWID"
      },
      dataType: 'json',
      success: function (myresopnse) {

        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];

        if (myresopnse.length !== 0) {
          //CWID.value = myresopnse[0].EMPLID;
          FirstName.value = myresopnse[0].FIRST_NAME;
          LastName.value = myresopnse[0].LAST_NAME;

          /* DeptName.value = myresopnse[0].DEPTNAME;
                              	Agency.value = myresopnse[0].CSU_SCO_AGENCY;
                               ReportingUnit.value = myresopnse[0].CSU_UNIT;
                                  CMSPositionNo.value = myresopnse[0].POSITION_NBR;
                                  CollegeDivision.value = myresopnse[0].FUL_COLLEGE_NAME;
                                 ClassCode.value = myresopnse[0].JOBCODE;*/

          // DeptId.value = myresopnse[0].DEPTID;
        /*  CurrentClassificationJobTitle.value = myresopnse[0].DESCR;
          CurrentDeptUnit.value = myresopnse[0].DEPTID;
          CurrDeptID.value = myresopnse[0].DEPTID;
          CurrJobCode.value = myresopnse[0].JOBCODE;
          CurrRange.value = myresopnse[0].GRADE;
          Division.value = myresopnse[0].DIVSION;
          DivisionName.value = myresopnse[0].DIVISION_NAME;*/
          //PreparerEmailID.value =  myresopnse[0].EMAILID;
          //PreparedBy.value = myresopnse[0].EMP_NAME;

          gifModal.style.display = "none";
          modal.style.display = "none";

        } else {

          showErrorModal("Alert !", "No matching records found");

         
          FirstName.value = "";
          LastName.value = "";
          //MiddleName.value = myresopnse[0].MIDDLE_NAME;
          
          gifModal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        
      }

    });

  }
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_MiddleName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_MiddleName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_CMSPositionNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_CMSPositionNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_CMSPositionNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_CMSPositionNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null && formSavedStatus.value != "1") {
  var posNo = this.value;

  if (posNo !== null) {

    $.ajax({
      type: 'GET',
      url: "/bin/getSubstituteFacultyData",
      data: {
        action: "SUB_FACULTY_POSITION_LOOKUP",
        position_nbr: posNo
      },
      dataType: 'json',
      success: function (response) {

        if (response.length === 1) {

          // DeptUnitNum.value = response[0].CSU_UNIT;
          DeptName.value = response[0].DEPTNAME;
          ReportingUnit.value = response[0].CSU_UNIT;
          DeptId.value = response[0].DEPTID;
          
          CurrentDeptUnit.value = response[0].DEPTID;
          CurrDeptID.value = response[0].DEPTID;
          Division.value = response[0].DIVSION;
          DivisionName.value = response[0].DIVISION_NAME;
          CurrentClassificationJobTitle.value = response[0].POS_DESCR;
          
          getJobCode();
          
          // modal.style.display = "none";

        } else {

          // showErrorModal("Alert !", "No matching records found");

          //DeptUnitNum.value = "";

          DeptName.value = "";
          ReportingUnit.value = "";
          DeptId.value = "";
           CurrentDeptUnit.value = "";
          CurrDeptID.value = "";
          Division.value = "";
          DivisionName.value = "";
          CurrentClassificationJobTitle.value = "";

        }

      }

    });
  }
}
function getJobCode(){
  if (StageIndicator.value === null) {
  var cwid = CWID.value;
  var depID = DeptId.value;

  $.ajax({
    type: 'GET',
    url: "/bin/getFARData",
    data: {
      cwid: cwid,
      depID: depID,
      action: "FULL_COLLEGE_DATA"
    },
    dataType: 'json',
    success: function (myresponse) {

      if (myresponse.length !== 0) {

        CollegeDivision.value = myresponse[0].FUL_COLLEGE_NAME;
        ClassCode.value = myresponse[0].JOB_CODE;
        CurrJobCode.value = myresponse[0].JOB_CODE;
        
      } else {

        // showErrorModal("Alert !", "No matching records found");

        CollegeDivision.value = "";
        ClassCode.value = "";
        CurrJobCode.value="";
      }

    }

  });
}
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_CollegeDivision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_CollegeDivision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_Agency_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_Agency_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_ReportingUnit_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_ReportingUnit_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_ClassCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_ClassCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_EnterLastNameText_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_EnterLastNameText_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
    var appResult = [];
    if (this.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getFAERData",
            data: {
                action: "FAER_SEARCH_APPROVER",
                lastName: this.value
            },
            dataType: 'json',
            success: function(fundApproverResult) {
                if (fundApproverResult.length !== 0) {
                    //appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        //var uid = fundApproverResult[i].USERID;
                       // var uid = fundApproverResult[i].EMAILID;
                      
                        var uid = 'shreyas.manjunatha@thoughtfocus.com';
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    OptionalReviewerDropDown.value = "";
                    OptionalReviewerDropDown.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    OptionalReviewerDropDown.items = [];
                    OptionalReviewerDropDown.value = "";
                    OptionalReviewerName.value = "";
                    OptionalReviewerUserId.value = "";
                    OptionalReviewerEmailId.value = "";
                    OptionalReviewerFlag.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_OptionalReviewerDropDown_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_OptionalReviewerDropDown_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
    var approverName = this.value;
    var approverEmplId;
    if (approverName != "Select Optional Reviewer" && approverName !== "") {
        approverName = approverName.substr(0, approverName.indexOf(' - '));
        OptionalReviewerName.value = approverName;
        //BudgetAnalystName_1.value = approverName;
        $.ajax({
            type: 'GET',
            url: "/bin/getFAERData",
            data: {
                action: "FAER_APPROVER_EMPID",
                approverName: approverName
            },
            dataType: 'json',
            success: function(myresopnse) {
                if (myresopnse[0].EMPLID !== null) {
                    approverEmplId = myresopnse[0].EMPLID;
                    getEmployeeDetails(approverEmplId);
                } else {
                     OptionalReviewerName.value = "";
                     OptionalReviewerUserId.value = "";
                     OptionalReviewerEmailId.value = "";
                     OptionalReviewerFlag.value = "";
                }
            }
        });
    } else {
        OptionalReviewerName.value = "";
        OptionalReviewerUserId.value = "";
        OptionalReviewerEmailId.value = "";
        OptionalReviewerFlag.value = "";
    }
}

function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === null || StageIndicator.value=="ToRequestor")  {
        if (approverEmplId !== null) {
            $.ajax({
                type: 'GET',
                url: "/bin/getFAERData",
                data: {
                    action: "FAER_APPROVER_DETAILS",
                    approverEmplID: approverEmplId
                },
                dataType: 'json',
                success: function(myresopnse) {
                    if (myresopnse.length !== 0) {
                        OptionalReviewerUserId.value = myresopnse[0].EMP_USERID;
                       // OptionalReviewerEmailId.value = myresopnse[0].EMAILID;
                        OptionalReviewerEmailId.value = 'shreyas.manjunatha@thoughtfocus.com';
                        OptionalReviewerFlag.value = "true";
                    } else {
                        OptionalReviewerName.value = "";
                        OptionalReviewerUserId.value = "";
                        OptionalReviewerEmailId.value = "";
                        OptionalReviewerFlag.value = "";
                    }
                }
            });
        }
    }
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  $.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function (myresopnse) {
      //  gifModal.style.display = "block";

      workflow_initiator.value = myresopnse.userId;
    }
  });
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_Division_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_Division_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToRequestor") {

  $.ajax({
    type: 'GET',
    url: "/bin/getFAERData",
    data: {
      action: "FAER_DEAN_DATA",
      division: Division.value,
      union_cd: "M80"
    },
    dataType: 'json',

    success: function (DeanDeatils) {

      if (DeanDeatils.length !== 0) {

        var deanRes = [];

        for (var i = 0; i < DeanDeatils.length; i++) {

          var item = DeanDeatils[i].EMP_NAME;

          var idItem = i + 1;

          //var jbcode = item.text;

          deanRes.push(item);

        }

        DeanDetailsJson.value = JSON.stringify(DeanDeatils);
        DeanNameSelectDD.items = deanRes;
      } else {

        //showErrorModal("Alert!", "No matching records found");
      }

    }
  });
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanDesigneeUserID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanDesigneeUserID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanDesigneeEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanDesigneeEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanDesigneeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanDesigneeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeptId_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeptId_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  var cwid = CWID.value;
  var depID = DeptId.value;

  $.ajax({
    type: 'GET',
    url: "/bin/getFARData",
    data: {
      cwid: cwid,
      depID: depID,
      action: "FULL_COLLEGE_DATA"
    },
    dataType: 'json',
    success: function (myresponse) {

      if (myresponse.length !== 0) {

        CollegeDivision.value = myresponse[0].FUL_COLLEGE_NAME;
        ClassCode.value = myresponse[0].JOB_CODE;
        CurrJobCode.value = myresponse[0].JOB_CODE;
        
      } else {

        // showErrorModal("Alert !", "No matching records found");

        CollegeDivision.value = "";
        ClassCode.value = "";
        CurrJobCode.value="";
      }

    }

  });
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_TempFaculty_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_TempFaculty_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
  
  if (this.value !== null) {
   GA.value=null;
   TA.value=null;
   ISA.value=null;
}
  
}



        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_GA_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_GA_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
  
  if (this.value !== null) {
   TempFaculty.value=null;
   TA.value=null;
   ISA.value=null;
}
  
}


        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_TA_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_TA_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
  
  if (this.value !== null) {
   GA.value=null;
   TempFaculty.value=null;
   ISA.value=null;
}
  
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_ISA_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_ISA_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToRequestor") {
  
  if (this.value !== null) {
   GA.value=null;
   TA.value=null;
   TempFaculty.value=null;
}
  
}


        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_NewDeptID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_NewDeptID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var depIDVal = NewDeptID.value;
if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){
  $.ajax({
				 type: 'GET',
						url: "/bin/getFARData",
						data: {action: "FAR_CHAIR_DEAN_DATA",depID:depIDVal},
						dataType: 'json',
						success: function(myresopnse) {
                          if(myresopnse.length !== 0){
                          /*DeanDesigneeEmail.value = myresopnse[0].DEAN_EMAIL;
                          DeanDesigneeEmail.value = "yjayaram@fullerton.edu";
                          DeanDesigneeEmail.value = "julnunez@fullerton.edu";
                          DeanDesigneeName.value =  myresopnse[0].DEAN_NAME;
                          DeanDesigneeUserID.value =  myresopnse[0].DEAN_USERID;*/
                          //ChairEmail.value =  myresopnse[0].CHAIR_EMAIL;
                          ChairEmail.value =  'shreyas.manjunatha@thoughtfocus.com';
                          //ChairEmail.value = "yjayaram@fullerton.edu";
                          //ChairEmail.value = "julnunez@fullerton.edu";
                          //ChairEmail.value = "pushpa.kawadi@thoughtfocus.com";
                          ChairUserID.value =  myresopnse[0].CHAIR_USERID;
                          ChairName.value =  myresopnse[0].CHAIR_NAME;
                        }else{
                          /*DeanDesigneeEmail.value = "";
                          DeanDesigneeName.value =  "";
                          DeanDesigneeUserID.value =  "";*/
                          ChairEmail.value =  "";
                          ChairUserID.value =  "admin";
                          ChairName.value =  "Administrator";
                        }
                        }
  });
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_SupportingDocuments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc1.fileAttachment.value;

var flag = 0;
if (flag === 0) {
  if (checkSupDocMimeType(filePath) === true) {
    showErrorModal("Alert!", "Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
    supportDoc1.fileAttachment.value = null;
    flag = 1;
  } else {
    flag = 0;
  }
}
if (flag === 0) {
  var fname = replaceSplCharInFileName(filePath);
  if (fname !== false) {
    supportDoc1.fileAttachment.value = fname;
  }
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc2.fileAttachment.value;

var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc2.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc2.fileAttachment.value = fname;
}
}

        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanNameSelectDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanNameSelectDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //var gifModal = document.getElementById('gifModal');

if(StageIndicator.value === null || StageIndicator.value == "ToRequestor"){

  	
  
	var departmentHeadInfo = this.value;
	var departmentHeadInfoArray = [];
	var departmentHeadActualInfoArray = [];
	var departmentHeadDetailsParsedArray = [];
	var departmentDetailsListObj = {};
	
	departmentHeadDetailsArray = DeanDetailsJson.value;
	console.log("departmentHeadDetailsArray= " + departmentHeadDetailsArray);
	departmentHeadDetailsParsedArray = JSON.parse(departmentHeadDetailsArray);
	
	for(var s= 0 ; s < departmentHeadDetailsParsedArray.length; s++){
		departmentHeadInfoArray.push(departmentHeadDetailsParsedArray[s]);
		
	}
	
	for (var departmentHeadDetails = 0; departmentHeadDetails < departmentHeadInfoArray.length; departmentHeadDetails++){
			
			departmentDetailsListObj = departmentHeadInfoArray[departmentHeadDetails];
			
			for(var key in departmentDetailsListObj){
				  
				  if(departmentHeadInfo == key){				  
					  departmentHeadActualInfoArray = departmentDetailsListObj[key].split(" - ");
                    	//DeanDesigneeEmail.value = departmentHeadActualInfoArray[0];
                    	DeanDesigneeEmail.value ='shreyas.manjunatha@thoughtfocus.com';
                    	DeanDesigneeUserID.value = departmentHeadActualInfoArray[1];
                    
                        DeanDesigneeName.value = DeanNameSelectDD.value;

                    	                   			  
				  }
			}						
	}	
}

        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
  //if (StageIndicator.value == "ToHRCoo") {
  if (HRDISignature.value === null) {

    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedInUserDetailsFromDB",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse[0].FULL_NAME;
        HRDISignature.value = userValue;
        HRDIDate.value = myresopnse[0].SERVER_DATE;
        HRDIPrintedName.value = userValue;
        //HRDIExt.value = "academichr@fullerton.edu";
       // HRSignEmailID.value = "academichr@fullerton.edu";
        HRSignEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });

    // FacultyName.enabled = false;

  }
  //}
} else {
  HRDISignature.value = "";
  HRDIDate.value = "";
  HRDIPrintedName.value = "";
  HRSignEmailID.value = "";
  HRDIExt.value = "";
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_HRDIPrintedName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_HRDIPrintedName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_HRDISignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_HRDISignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_HRDIDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_HRDIDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_HRSignEmailID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_HRSignEmailID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
  if (DeanPrintedName.value === null) {

    DeanDate.enabled = false;
    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedInUserDetailsFromDB",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse[0].FULL_NAME;
        DeanPrintedName.value = userValue;
        DeanDate.value = myresopnse[0].SERVER_DATE;
        DeanSignature.value = userValue;
        //DeanSignEmailID.value = myresopnse[0].EMAILID;
        DeanSignEmailID.value ='shreyas.manjunatha@thoughtfocus.com';
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });

    DeanName.enabled = false;
    // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

  }
  //}
} else {
  DeanPrintedName.value = "";
  DeanDate.value = "";
  DeanSignature.value = "";
  DeanExt.value = "";
  DeanSignEmailID.value = "";
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanPrintedName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanPrintedName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeanSignEmailID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeanSignEmailID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeptChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeptChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
  if (DeptChairPrintedName.value === null) {

    DeptChairDate.enabled = false;
    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedInUserDetailsFromDB",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse[0].FULL_NAME;
        DeptChairPrintedName.value = userValue;
        DeptChairSignature.value = userValue;
        DeptChairDate.value = myresopnse[0].SERVER_DATE;
        
        //ChairSignEmailID.value = myresopnse[0].EMAILID;
          ChairSignEmailID.value ='shreyas.manjunatha@thoughtfocus.com';

      },
      error: function (error) {
        alert("error block=" + error);
      }
    });

    DeptChairPrintedName.enabled = false;
    // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

  }
  //}
} else {
  DeptChairPrintedName.value = "";
  DeptChairDate.value = "";
  DeptChairSignature.value = "";
  DeptChairExt.value = "";
  ChairSignEmailID.value = "";
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeptChairPrintedName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeptChairPrintedName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeptChairSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeptChairSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_DeptChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_DeptChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_ChairSignEmailID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_ChairSignEmailID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_RequestorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_RequestorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "0") {
  if (PreparedPrintName.value === null) {

    PreparedDate.enabled = false;

    $.ajax({

      type: 'GET',

      url: "/bin/getLoggedInUserDetailsFromDB",
      dataType: 'json',
      success: function (myresopnse) {
        var userValue = myresopnse[0].FULL_NAME;
        PreparedPrintName.value = userValue;
        PreparedSignature.value = userValue;

        PreparedDate.value = myresopnse[0].SERVER_DATE;
        
        // PreparerSignEmailID.value =myresopnse[0].EMAILID;
        
        PreparerSignEmailID.value ='shreyas.manjunatha@thoughtfocus.com';
      },
      error: function (error) {
        alert("error block=" + error);
      }
    });
    PreparedPrintName.enabled = false;

    // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

  }
  //}
} else {
  PreparedPrintName.value = "";
  PreparedDate.value = "";
  PreparedSignature.value = "";
  PreparedExt.value = "";
  PreparerSignEmailID.value = "";
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PreparedPrintName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PreparedPrintName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PreparedSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PreparedSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PreparedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PreparedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PreparerSignEmailID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PreparerSignEmailID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_OptionalReviewerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_OptionalReviewerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToOptional") {
    if (this.value == 1) {

        var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        OptionalReviewerSignatureDate.value = d;

        OptionalReviewerSignatureDate.enabled = false;
        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                OptionalReviewerSignature.value = userValue;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        OptionalReviewerSignatureDate.enabled = false;


    } else {
        OptionalReviewerSignature.value = "";
        OptionalReviewerSignatureDate.value = "";

    }
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PayrollCB_valueCommit0 = function (scope) {
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
        
       // PayrollSignEmailID.value = "payroll@fullerton.edu";
        PayrollSignEmailID.value = "shreyas.manjunatha@thoughtfocus.com";
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
  PayrollName.value = "";
  PayrollExt.value = "";
  PayrollSignEmailID.value = "";
}
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PayrollName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PayrollName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PayrollSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PayrollSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PayrollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PayrollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_PayrollSignEmailID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_PayrollSignEmailID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (CWID.value !== null ) {
  submitFlag=0;
      
 } else{
   submitFlag=1;
   showErrorModal("Alert!","Please enter CWID");   
    
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
            jsonData.append('formPath', '/content/forms/af/faculty-action-request/faculty-action-request');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FirstName.value+"_"+LastName.value + "(" + CWID.value + ")" + "_" + Date.now());                    
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
 * @function faculty_action_request_faculty_action_request.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(CWID.value !== null){
 aftiaDescCWID.value =  FirstName.value +" "+ LastName.value + " "+ CWID.value ;
  formSavedStatus.value = "1";
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
 * @function faculty_action_request_faculty_action_request.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
faculty_action_request_faculty_action_request.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            

/*ChairEmail.value="nvadlakunta@fullerton.edu";
PreparerEmailID.value="nvadlakunta@fullerton.edu";
DeanDesigneeEmail.value = "nvadlakunta@fullerton.edu";*/

ChairEmail.value="shreyas.manjunatha@thoughtfocus.com";
PreparerEmailID.value="shreyas.manjunatha@thoughtfocus.com";
DeanDesigneeEmail.value = "shreyas.manjunatha@thoughtfocus.com";

if (CWID.value !== null) {
  aftiaDescCWID.value = FirstName.value + " " + LastName.value + " " + CWID.value;
  EmailSubject.value = "Faculty Action Request - " + LastName.value + "," + FirstName.value + " - " + ReportingUnit.value;
}
/*if(TempFaculty.value === null && TA.value === null && GA.value === null && ISA.value === null){
  showErrorModal("Alert!","Please check all that apply");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].AdditionalEmploymentRequest[0]");
}else{*/
guideBridge.submit();
//}
        }
	}
}
