/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  SignatureACK.visible = true;
  RequestorPanel.visible = true;
  ChairPanel.visible = false;
  DeanPanel.visible = false;
  HRReviewPanel.visible = false;
  SubstituteSignaturePanel.visible = false;
  PayrollPanel.visible = false;
  OptionalReviewerSignPanel.visible = false;
 
}

if(StageIndicator.value == "ToRequestor"){
  employeeInformation.enabled = true;
  CourseInformation.enabled = true;
  DeanAVPDesigneePanel.enabled=true;
  
  SignatureACK.visible=true;
  RequestorPanel.visible = true;
  RequestorPanel.enabled = true;
  SubstituteSignaturePanel.enabled =false; 
  
  CWID.enabled = false;
  EmpName.enabled = false; 
  PosNoSubAssignment.enabled = false; 
  CMSPosNo.enabled = false; 
  DeptName.enabled = false; 
  DeptID.enabled = false; 
  DeptUnitNum.enabled = false; 
  TermEffDate.enabled = false; 
  TermEndDate.enabled = false; 
  CurrNoHrs.enabled = false; 
  OptionalReviewerPanel.enabled = true;
  
  if(HRCB.value !== null){
    HRReviewPanel.visible= true;
    HRReviewPanel.enabled= false;
  }else{
    HRReviewPanel.visible=false;
  }
  if(DeptChairCB.value !== null){
    ChairPanel.visible = true;
    ChairPanel.enabled = false;
  }else{
    ChairPanel.visible = false;
  }
  if(DeanCB.value !== null){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
  if(PayrollCB.value !== null){
    PayrollPanel.visible = true;
    PayrollPanel.enabled = false;
  }else{
    PayrollPanel.visible = false;
  }
  if(OptionalReviewerSignature.value !== null){
    OptionalReviewerSignPanel.visible = true;
    OptionalReviewerSignPanel.enabled = false;
  }else{
    OptionalReviewerSignPanel.visible = false;
  
  }
 
  SubstituteSignaturePanel.visible = false;
  }


if(StageIndicator.value == "ToOptionalReviewer"){
    employeeInformation.enabled = false;
    CourseInformation.enabled = false;
    SupportingDocuments.enabled = false;
    OptionalReviewerSignPanel.visible = true;
   
  if(RequestorCB.value == "1"){
    RequestorPanel.visible = true;
    RequestorPanel.enabled = false;
  }else{
    RequestorPanel.visible = false;
  }
  if(DeanCB.value == "1"){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
  
  if(HRCB.value == "1"){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(SubstituteCB.value == "1"){
    SubstituteSignaturePanel.visible = true;
    SubstituteSignaturePanel.enabled = false;
  }else{
    SubstituteSignaturePanel.visible = false;
  }
  if(PayrollCB.value == "1"){
    PayrollPanel.visible = true;
    PayrollPanel.enabled = false;
  }else{
    PayrollPanel.visible = false;
  }
  if(DeptChairCB.value == "1"){
    ChairPanel.visible = true;
    ChairPanel.enabled = false;
  }else{
    ChairPanel.visible = false;
  
  }
} 


if(StageIndicator.value == "ToChair"){
    employeeInformation.enabled = false;
    CourseInformation.enabled = false;
    SupportingDocuments.enabled = false;
    ChairPanel.visible = true;
  if(RequestorCB.value == "1"){
    RequestorPanel.visible = true;
    RequestorPanel.enabled = false;
  }else{
    RequestorPanel.visible = false;
  }
  if(DeanCB.value == "1"){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
  
  if(HRCB.value == "1"){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(SubstituteCB.value == "1"){
    SubstituteSignaturePanel.visible = true;
    SubstituteSignaturePanel.enabled = false;
  }else{
    SubstituteSignaturePanel.visible = false;
  }
  if(PayrollCB.value == "1"){
    PayrollPanel.visible = true;
    PayrollPanel.enabled = false;
  }else{
    PayrollPanel.visible = false;
  }
  if(OptionalReviewerSignature.value !== null){
    OptionalReviewerSignPanel.visible = true;
    OptionalReviewerSignPanel.enabled = false;
  }else{
    OptionalReviewerSignPanel.visible = false;
  
  }
}

if(StageIndicator.value == "ToDean"){
    employeeInformation.enabled = false;
    CourseInformation.enabled = false;
    SupportingDocuments.enabled = false; 
  if(RequestorCB.value == "1"){
    RequestorPanel.visible = true;
    RequestorPanel.enabled = false;
  }else{
    RequestorPanel.visible = false;
  }
  if(DeptChairCB.value !== null){
    ChairPanel.visible = true;
    ChairPanel.enabled = false;
  }else{
    ChairPanel.visible = false;
  }
  
  if(HRCB.value == "1"){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
  if(SubstituteCB.value == "1"){
    SubstituteSignaturePanel.visible = true;
    SubstituteSignaturePanel.enabled = false;
  }else{
    SubstituteSignaturePanel.visible = false;
  }
  if(PayrollCB.value == "1"){
    PayrollPanel.visible = true;
    PayrollPanel.enabled = false;
  }else{
    PayrollPanel.visible = false;
  }
  if(OptionalReviewerSignature.value !== null){
    OptionalReviewerSignPanel.visible = true;
    OptionalReviewerSignPanel.enabled = false;
  }else{
    OptionalReviewerSignPanel.visible = false;
  
  }
    
    DeanPanel.visible = true;
    
}


if(StageIndicator.value === "ToHRInitial"){
  	employeeInformation.enabled = false;
    CourseInformation.enabled = false;
    SupportingDocuments.enabled = false; 
  if(RequestorCB.value == "1"){
    RequestorPanel.visible = true;
    RequestorPanel.enabled = false;
  }else{
    RequestorPanel.visible = false;
  }
  if(DeptChairCB.value !== null){
    ChairPanel.visible = true;
    ChairPanel.enabled = false;
  }else{
    ChairPanel.visible = false;
  }
  if(SubstituteCB.value == "1"){
    SubstituteSignaturePanel.visible = true;
    SubstituteSignaturePanel.enabled = false;
  }else{
    SubstituteSignaturePanel.visible = false;
  }
  if(PayrollCB.value == "1"){
    PayrollPanel.visible = true;
    PayrollPanel.enabled = false;
  }else{
    PayrollPanel.visible = false;
  }
  if(OptionalReviewerSignature.value !== null){
    OptionalReviewerSignPanel.visible = true;
    OptionalReviewerSignPanel.enabled = false;
  }else{
    OptionalReviewerSignPanel.visible = false;
  
  }
  if(DeanCB.value == "1"){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
   
    HRReviewPanel.visible = true;
    
}
if(StageIndicator.value === "ToSubstituteFaculty"){
  employeeInformation.enabled = false;
    CourseInformation.enabled = false;
    SupportingDocuments.enabled = false;
 if(PayrollCB.value == "1"){
    PayrollPanel.visible = true;
    PayrollPanel.enabled = false;
  }else{
    PayrollPanel.visible = false;
  }
  if(OptionalReviewerSignature.value !== null){
    OptionalReviewerSignPanel.visible = true;
    OptionalReviewerSignPanel.enabled = false;
  }else{
    OptionalReviewerSignPanel.visible = false;
  
  }
  if(DeanCB.value == "1"){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
    if(RequestorCB.value == "1"){
    RequestorPanel.visible = true;
    RequestorPanel.enabled = false;
  }else{
    RequestorPanel.visible = false;
  }
  if(DeptChairCB.value !== null){
    ChairPanel.visible = true;
    ChairPanel.enabled = false;
  }else{
    ChairPanel.visible = false;
  }
   if(HRCB.value == "1"){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
    SubstituteSignaturePanel.visible = true;
    
}


if(StageIndicator.value == "ToPayroll"){
  employeeInformation.enabled = false;
    CourseInformation.enabled = false;
    SupportingDocuments.enabled = false;
   if(OptionalReviewerSignature.value !== null){
    OptionalReviewerSignPanel.visible = true;
    OptionalReviewerSignPanel.enabled = false;
  }else{
    OptionalReviewerSignPanel.visible = false;
  
  }
  if(DeanCB.value == "1"){
    DeanPanel.visible = true;
    DeanPanel.enabled = false;
  }else{
    DeanPanel.visible = false;
  }
    if(RequestorCB.value == "1"){
    RequestorPanel.visible = true;
    RequestorPanel.enabled = false;
  }else{
    RequestorPanel.visible = false;
  }
  if(DeptChairCB.value !== null){
    ChairPanel.visible = true;
    ChairPanel.enabled = false;
  }else{
    ChairPanel.visible = false;
  }
   if(HRCB.value == "1"){
    HRReviewPanel.visible = true;
    HRReviewPanel.enabled = false;
  }else{
    HRReviewPanel.visible = false;
  }
    PayrollPanel.visible = true;
    PayrollPanel.enabled = true;
}




        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {

    /*var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";*/


    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {

            if (myresponse.Status == "Success") {
                var userValue = myresponse.userId;
                //var userValue = 'jmccoy';
                logUser.value = userValue;
                //PreparedBy.value = userValue;

                $.ajax({

                    type: 'GET',

                    url: "/bin/getEvaluationFormData",
                    data: {
                        action: "EMP_DETAILS"
                    },
                    dataType: 'json',
                    success: function(response) {                        
                        PreparedBy.value = response[0].EMP_NAME;
                      PreparerEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                        //PreparerEmail.value = response[0].EMAILID;
                      	PreparerUserID.value = response[0].EMP_USERID;
                        LoggedInUserDeptID.value = response[0].DEPTID;
                        Division.value = response[0].DIVSION;

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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_textdraw1575095828043_copy_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_textdraw1575095828043_copy_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null && formSavedStatus.value !== "1") {
	var cwid = this.value;
	var depID = LoggedInUserDeptID.value;
	var userID = logUser.value;


    if (cwid !== null) {
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        $.ajax({
            type: 'GET',
            url: "/bin/getTASubstituteFacultyData",
            data: {
                action: "TASUBSTITUTE_USER_DATA",
                cwid: cwid,
                userID: userID
            },
            dataType: 'json',
            success: function(response) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (response.length === 1 && response[0].EMPLID !== undefined) {   
                  
                  employeeEmailInitial.visible=false;
                   // DeptName.value = response[0].DEPTNAME;
                    var fn = response[0].FIRST_NAME;
                    var ln = response[0].LAST_NAME;
                    var res = fn.concat(" ").concat(ln);
                    EmpName.value = res;
                    var agency = response[0].CSU_SCO_AGENCY;                   
                    //CMSPosNo.value = response[0].POSITION_NBR;
                    full_college.value = response[0].FUL_COLLEGE;
                    //DeptID.value = response[0].DEPTID;
					//DeptName.value = response[0].DEPTNAME;
                    LastName.value = response[0].LAST_NAME;
                    FirstName.value = response[0].FIRST_NAME;
                    //DeptUnitNum.value = response[0].CSU_UNIT;
					getDean(full_college.value);
					SubstituteFacultyUserID.value = response[0].EMP_USERID;
                                SubstituteFacultyName.value = response[0].EMP_NAME;
                                SubstituteFacultyEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                //SubstituteFacultyEmail.value = response[0].EMAILID;
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                } else if (response.length > 1) {
                  
                   employeeEmailInitial.visible=false;
                    gifModal.style.display = "none";
                    modal.style.display = "block";


                    var col = [];
                    col.push("EMPLID");
                    col.push("LAST_NAME");
                    col.push("FIRST_NAME");
                    col.push("DEPTID");
                    col.push("DEPTNAME");
                    col.push("JOBCODE");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name","Job Code"];
                    for (var j = 0; j < headings.length; j++) {
                        var th = document.createElement("th");
                        th.innerHTML = headings[j];
                        tr.appendChild(th);
                    }
                    for (var k = 0; k < response.length; k++) {
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
                            tabCell.innerHTML = response[k][col[l]];
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
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {
                                rButtonStatus = false;
                            } else {
                              
                               employeeEmailInitial.visible=false;
                                //DeptName.value = response[n].DEPTNAME;
                                var fn = response[n].FIRST_NAME;
                                var ln = response[n].LAST_NAME;
                                var res = fn.concat(" ").concat(ln);
                                EmpName.value = res;
                                var agency = response[n].CSU_SCO_AGENCY;                               
                                //CMSPosNo.value = response[n].POSITION_NBR;
                                full_college.value = response[n].FUL_COLLEGE;
                                //DeptID.value = response[n].DEPTID;
								//DeptName.value = response[n].DEPTNAME;
                                LastName.value = response[n].LAST_NAME;
                                FirstName.value = response[n].FIRST_NAME;
                                //DeptUnitNum.value = response[n].CSU_UNIT;
								getDean(full_college.value);
                              getChairDeanDetails(DeptId.value);
                                SubstituteFacultyUserID.value = response[n].EMP_USERID;
                                SubstituteFacultyName.value = response[n].EMP_NAME;
                              //  SubstituteFacultyEmail.value = response[n].EMAILID;
                               SubstituteFacultyEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                                rButtonStatus = true;
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        } else {

                            modal.style.display = "none";
                        }
                    };
                    // footerModal = document.getElementById("modal_footer");
                    footerModal.appendChild(okButton);
                    // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));

                } else {

                    showErrorModal("Alert !", "No matching records found");

                    DeptName.value = "";
                    EmpName.value = "";
                    EmpName.enabled=true;
                    employeeEmailInitial.value = "";
                    employeeEmailInitial.visible=true;
                    employeeEmailInitial.mandatory=true;
                    CMSPosNo.value = "";
                    DeptID.value = "";
                    DeptUnitNum.value = "";


                    gifModal.style.display = "none";
                }
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
}

function getChairDeanDetails(deptId){	
  	
	var deptIdValue = deptId;
  	console.log("deptIdValue =" + deptIdValue);
	
	$.ajax({

		type: 'GET',
		url: "/bin/getSubstitudeFacultyAppointmentData",
		data: {
			deptID: deptIdValue,
			action: 'CHAIRDEANDETAILS'
		},
		dataType: 'json',
		success: function(chairDeanDetails) {          	
			if (chairDeanDetails.length > 0) {
				ChairUserID.value = chairDeanDetails[0].CHAIR_USERID;
				ChairName.value = chairDeanDetails[0].CHAIR_NAME;
                if(chairDeanDetails[0].CHAIR_NAME === ""){
                  hidden_chair_name.value = "Administrator";
                }
				//ChairEmail.value = chairDeanDetails[0].CHAIR_EMAIL;
                ChairEmail.value = "shreyas.manjunatha@thoughtfocus.com";
				//hidden_dean_userID.value = chairDeanDetails[0].DEAN_USERID;
				//hidden_dean_name.value = chairDeanDetails[0].DEAN_NAME;
				//hidden_dean_email.value = chairDeanDetails[0].DEAN_EMAIL;

				gifModal.style.display = "none";

			}
		}
	});	
} 

function getDean(college){
  
if (StageIndicator.value === null || StageIndicator.value == "ToRequestor") {
  
  
  
    $.ajax({
        type: 'GET',
        url: "/bin/getTASubstituteFacultyData",
        data: {
            action: "TASUBSTITUTE_DEAN_DATA",
            college: college
        },
        dataType: 'json',
        success: function(myresopnse) {
            if (myresopnse.length !== 0) {
            DeanEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                //DeanEmail.value = myresopnse[0].EMP_EMAIL;
                DeanName.value = myresopnse[0].EMPNAME;
                DeanUserID.value = myresopnse[0].EMP_USERID;
              
            } else {
                DeanEmail.value = "";
                DeanName.value = "";
                DeanUserID.value = "";
                
            }
        }
    });
}
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_EmpName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_EmpName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_employeeEmailInitial_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_employeeEmailInitial_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_employeeEmailInitial_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_employeeEmailInitial_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value !== null){
  //  SubstituteFacultyEmail.value = this.value;
     SubstituteFacultyEmail.value = "shreyas.manjunatha@thoughtfocus.com";
  //  var email = this.value;
     var email ="shreyas.manjunatha@thoughtfocus.com";
    if(email.includes("@")){
      SubstituteFacultyUserID.value = email.substring(0, email.indexOf("@"));
    }else{
      SubstituteFacultyUserID.value = "admin";
    }
  }
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_CMSPosNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_CMSPosNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
	var posNo = this.value;
	


    if (posNo !== null) {
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        $.ajax({
            type: 'GET',
            url: "/bin/getSubstituteFacultyData",
            data: {
                action: "SUB_FACULTY_POSITION_LOOKUP",
                position_nbr: posNo
            },
            dataType: 'json',
            success: function(response) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                if (response.length === 1) {                    
                    
                    DeptID.value = response[0].DEPTID;
					DeptName.value = response[0].DEPTNAME;                    
                    DeptUnitNum.value = response[0].CSU_UNIT;
					
                    gifModal.style.display = "none";
                    modal.style.display = "none";

                }  else {

                    showErrorModal("Alert !", "No matching records found");

                    DeptName.value = "";
                    //EmpName.value = "";

                    //CMSPosNo.value = "";
                    DeptID.value = "";
                    DeptUnitNum.value = "";


                    gifModal.style.display = "none";
                }               
                
            }

        });
    }
}

        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_CMSPosNo_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_CMSPosNo_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(ChairUserID.value === null && DeanUserID.value === null){
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
            success: function(response) {

               

                if (response.length === 1) {                    
                    debugger;
                                       
                DeptUnitNum.value = response[0].CSU_UNIT;
                DeptID.value=response[0].DEPTID;
                DeptName.value=response[0].DEPTNAME;
              	var full_college = response[0].COLLEGE;              	
              	getDean(full_college);
				getChairDeanDetails(DeptID.value);
					
                    
                   // modal.style.display = "none";

                }  else {

                   // showErrorModal("Alert !", "No matching records found");

                    
                    DeptUnitNum.value = "";


                   
                }               
                
            }

        });
    }
    
  }
}

function getChairDeanDetails(deptId){	
  	
	var deptIdValue = deptId;
  	console.log("deptIdValue =" + deptIdValue);
	
	$.ajax({

		type: 'GET',
		url: "/bin/getSubstitudeFacultyAppointmentData",
		data: {
			deptID: deptIdValue,
			action: 'CHAIRDEANDETAILS'
		},
		dataType: 'json',
		success: function(chairDeanDetails) {          	
			if (chairDeanDetails.length > 0) {
				ChairUserID.value = chairDeanDetails[0].CHAIR_USERID;
				ChairName.value = chairDeanDetails[0].CHAIR_NAME;
                if(chairDeanDetails[0].CHAIR_NAME === ""){
                  ChairName.value = "Administrator";
                }
				//hidden_chair_email.value = chairDeanDetails[0].CHAIR_EMAIL;
                ChairEmail.value = "shreyas.manjunatha@thoughtfocus.com";
			

				gifModal.style.display = "none";

			}
		}
	});	
}
function getDean(college){
  
  
  
    $.ajax({
        type: 'GET',
        url: "/bin/getTASubstituteFacultyData",
        data: {
            action: "TASUBSTITUTE_DEAN_DATA",
            college: college
        },
        dataType: 'json',
        success: function(myresopnse) {
            if (myresopnse.length !== 0) {
             //   DeanEmail.value = myresopnse[0].EMP_EMAIL;
              	DeanEmail.value = "shreyas.manjunatha@thoughtfocus.com";
                DeanName.value = myresopnse[0].EMPNAME;
                DeanUserID.value = myresopnse[0].EMP_USERID;
              
            } else {
                DeanEmail.value = "";
                DeanName.value = "";
                DeanUserID.value = "";
                
            }
        }
    });
}

        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null || StageIndicator.value == "ToRequestor") {
  
  	var dept = this.value;
  
    $.ajax({
        type: 'GET',
        url: "/bin/getTASubstituteFacultyData",
        data: {
            action: "TASUBSTITUTE_CHAIR_DATA",
            dept: dept
        },
        dataType: 'json',
        success: function(myresopnse) {
            if (myresopnse.length !== 0) {
                //DeanEmail.value = myresopnse[0].DEAN_EMAIL;
              	//DeanEmail.value = "yjayaram@fulleron.edu";
                //DeanName.value = myresopnse[0].DEAN_NAME;
                //DeanUserID.value = myresopnse[0].DEAN_USERID;
              //  ChairEmail.value =  myresopnse[0].CHAIR_EMAIL;
               ChairEmail.value =  "shreyas.manjunatha@thoughtfocus.com";
                ChairUserID.value = myresopnse[0].CHAIR_USERID;
                ChairName.value = myresopnse[0].CHAIR_NAME;
            } else {
                //DeanEmail.value = "";
                //DeanName.value = "";
                //DeanUserID.value = "";
                ChairEmail.value = "";
                ChairUserID.value = "";
                ChairName.value = "";
            }
        }
    });
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptUnitNum_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptUnitNum_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TermEffDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TermEffDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value>TermEndDate.value) {
  showErrorModal("Alert!", "Term End Date can't be before Term Effective Date");
}

        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TermEndDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TermEndDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value<TermEffDate.value){
  showErrorModal("Alert!", "Term End Date can't be before Term Effective Date");
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if ((StageIndicator.value === null) || (StageIndicator.value == "ToRequestor")) {
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
                    appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                      //  //var uid = fundApproverResult[i].USERID;
                       // var uid = fundApproverResult[i].EMAILID;
                      var uid ="shreyas.manjunatha@thoughtfocus.com";
                        var idItem = i + 1;
                        //var jbcode = item.text;
                        appResult.push(item + " - " + uid);
                    }
                    OptionalReviewerDD.value = "";
                    OptionalReviewerDD.items = appResult;

                } else {
                    showErrorModal("Alert!", "No matching records found");
                    OptionalReviewerDD.items = [];
                    OptionalReviewerDD.value = "";
                    OptionalReviewerName.value = "";
                    OptionalReviewerUserId.value = "";
                    OptionalReviewerEmailId.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalReviewerDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalReviewerDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if ((StageIndicator.value === null) || (StageIndicator.value == "ToRequestor"))  {
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
                }
            }
        });
    } else {
         OptionalReviewerName.value = "";
         OptionalReviewerUserId.value = "";
         OptionalReviewerEmailId.value = "";
    }
}

function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === null) {
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
                        OptionalReviewerEmailId.value = "shreyas.manjunatha@thoughtfocus.com";    
                    } else {
                        OptionalReviewerName.value = "";
                        OptionalReviewerUserId.value = "";
                        OptionalReviewerEmailId.value = "";
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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HourlyRate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HourlyRate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TotComp_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TotComp_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = supportDoc1.fileAttachment.value;

var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Alert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  supportDoc1.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  supportDoc1.fileAttachment.value = fname;
}
}

        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanNameSelectDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanNameSelectDD_valueCommit0 = function (scope) {
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
                    //	DeanDesigneeEmail.value = departmentHeadActualInfoArray[0];  
                    DeanDesigneeEmail.value ="shreyas.manjunatha@thoughtfocus.com";  
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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDesigneeUserID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDesigneeUserID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDesigneeEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDesigneeEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDesigneeName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDesigneeName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_PayrollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToPayroll") {
        if (PayrollDate.value === null) {
            

            PayrollDate.enabled = false;
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  PayrollSignature.value = userValue;
                  PayrollDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    PayrollSignature.value = "";
    PayrollDate.value = "";
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_PayrollSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_PayrollSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_PayrollDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_PayrollDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SubstituteCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SubstituteCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value == "ToSubstituteFaculty"){

if(this.value == 1){
    if (SubFacultySign.value === null) {

        $.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetailsFromDB",
            dataType: 'json',
          
            success: function(myresopnse) {
                SubFacultySign.value = myresopnse[0].FULL_NAME;
                SubFacultyDate.value = myresopnse[0].SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    }
} else {
    SubFacultySign.value = "";
    SubFacultyDate.value = "";
}
//}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SubFacultySign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SubFacultySign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SubFacultyDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_SubFacultyDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HRCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HRCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1") {
    if (ReviewedBySign.value === null) {

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedInUserDetailsFromDB",
            dataType: 'json',
            success: function(myresopnse) {               
                ReviewedBySign.value = myresopnse[0].FULL_NAME;
                ReviewedByDate.value = myresopnse[0].SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    }
} else {
    ReviewedBySign.value = "";
    ReviewedByDate.value = "";
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReviewedBySign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReviewedBySign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReviewedByDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReviewedByDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
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
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    DeanSign.value = "";
    DeanDate.value = "";
  
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeanDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_DeptChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
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
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ChairSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ChairSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if (StageIndicator.value == "ToOptionalReviewer") {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                OptionalReviewerSignature.value = myresopnse.userName;
                OptionalReviewerSignatureDate.value = myresopnse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    }
} else {
    OptionalReviewerSignature.value = "";
    OptionalReviewerSignatureDate.value = "";
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalReviewerSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_OptionalReviewerSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_RequestorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_RequestorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (this.value == "0") {
        if (ReqName.value === null) {

            ReqDate.enabled = false;
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetailsFromDB",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    ReqName.value = userValue;
                 	ReqDate.value = myresopnse[0].SERVER_DATE;
                   
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });

           ReqName.enabled = false;
           // HRCooName.value = (HrCoordFname.value).concat(' ').concat(HrCoordLname.value);

        } 
    //}
} else {
    ReqName.value = "";
    ReqDate.value = "";
 
}
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReqName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReqName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReqDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_ReqDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_workflow_initiator_init0 = function (scope) {
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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (CWID.value !== null ) {
  submitFlag=0;
      
 } else{
   
   showErrorModal("Alert!","Please enter CWID");   
    submitFlag=1;
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
            jsonData.append('formPath', '/content/forms/af/ta-substitute-appointment-form/ta-substitute-appointment-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', EmpName.value + "(" + CWID.value + ")" + "_" + Date.now());                    
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
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_saveguidedraft1600234692666_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_saveguidedraft1600234692666_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(CWID.value !== null){
 aftiaDescCWID.value = EmpName.value + " "+ CWID.value ;
  formSavedStatus.value = "1";
}
handleDraftSave(this);

        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*var testEmail = "nvadlakunta@fullerton.edu";

ChairEmail.value = testEmail;
PreparerEmail.value = testEmail;
DeanEmail.value = testEmail;
SubstituteFacultyEmail.value = testEmail;*/ 

var testEmail = "shreyas.manjunatha@thoughtfocus.com";

ChairEmail.value = testEmail;
PreparerEmail.value = testEmail;
DeanEmail.value = testEmail;
SubstituteFacultyEmail.value = testEmail;

if(CWID.value !== null){ 
 	aftiaDescCWID.value = EmpName.value + " "+ CWID.value;
 	EmailSubject.value = "TA Substitute Appointment Form - " +EmpName.value+", "+DeptUnitNum.value;
}

guideBridge.submit();



        }
	}
}
