/**
 * @function new_position_staff_new_position_description_staff.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            

if (StageIndicator.value === null && formSavedStatus.value === null) {
  	//if(HiringManagerSignaturePanel.visible === false){

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresopnse) {
                gifModal.style.display = "block";
                var userValue = myresopnse.userId;
                //var userID = userValue;
                var userID = "jmccoy";
                logUser.value = userValue;
             	workflow_initiator.value = userValue;
              
                $.ajax({
                    type: 'GET',
                    url: "/bin/getNewPositionStaffUserIDLookup",
                    data: {
                        userID: userID
                    },
                    dataType: 'json',

                    success: function(myresponse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];
                        var gifModal = document.getElementById('gifModal');
                        if (myresponse.length === 1) {

                          IncumbentLastName.value = myresponse[0].LAST_NAME;
                          IncumbentFirstName.value = myresponse[0].FIRST_NAME;
                          Department.value = myresponse[0].DEPTNAME;
                          ManagementSupervisor.value = myresponse[0].SupervisorName;
                          if(myresponse[0].FullTime == "1"){
                            	TimebaseRB.value = 1;
                          }
                          if(myresponse[0].PartTime == "1"){
                           		TimebaseRB.value = 2;
                          }
                          DeptID.value = myresponse[0].DEPTID;
                          Range.value = myresponse[0].GRADE;
                          SCOPosition.value = myresponse[0].SCONum;
                          //Classification.value = myresponse[0].description;          
                          EmplRCD.value = myresponse[0].EMPL_RCD;
                          EmplID.value = myresponse[0].EMPLID;
                          UserLookUpToEmployeeLookUpFlag.value = myresponse[0].EMPLID;
                          Classification.value = myresponse[0].DESCR;              
                          CMSPosition.value = myresponse[0].POSITION_NBR;
                          CBID.value = myresponse[0].UNION_CD;
						  HiddenIncumbentUserId.value = myresponse[0].USERID;
						  var incumbentUserID = myresponse[0].USERID;
						  HiddenIncumbentEmail.value = incumbentUserID.concat("@FULLERTON.EDU");
						  HiddenIncumbentName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                          //HiddenIncumbentEmail.value = myresponse[0].
                          
                          HiddenFormInitiatorFirstName.value = myresponse[0].FIRST_NAME;
                          HiddenFormInitiatorLastName.value = myresponse[0].LAST_NAME;
                                                   
                          gifModal.style.display = "none";

                        } else if (myresponse.length > 1) {
							
							debugger;

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
                            for (var k = 0; k < myresponse.length; k++) {
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
                                    tabCell.innerHTML = myresponse[k][col[l]];
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
                            okButton.value = "Ok";
                            okButton.onclick = function(event) {
							debugger;
							var n;
							var rButtonStatus;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
								if (rButtons[n].checked === false) {
								rButtonStatus = false;
								} 
								else {
											  
									  EmplID.value = myresponse[n].EMPLID;
									  UserLookUpToEmployeeLookUpFlag.value = myresponse[0].EMPLID;
									  IncumbentLastName.value = myresponse[n].LAST_NAME;
									  IncumbentFirstName.value = myresponse[n].FIRST_NAME;
									  Department.value = myresponse[n].DEPTNAME;
									  ManagementSupervisor.value = myresponse[n].SupervisorName;
									  
									  if(myresponse[0].FullTime == "1"){
										  TimebaseRB.value = 1;
									  }
									  if(myresponse[0].PartTime == "1"){
											TimebaseRB.value = 2;
									  }
									  DeptID.value = myresponse[n].DEPTID;
									  Range.value = myresponse[n].GRADE;
									  SCOPosition.value = myresponse[n].SCONum;
									  Classification.value = myresponse[n].DESCR;          
									  EmplRCD.value = myresponse[n].EMPL_RCD;
									  HiddenIncumbentUserId.value = myresponse[n].USERID;                                      
									  CMSPosition.value = myresponse[n].POSITION_NBR;
									  CBID.value = myresponse[n].UNION_CD;
									  HiddenIncumbentUserId.value = myresponse[n].USERID;
									  var incumbentName = myresponse[n].USERID;
									  HiddenIncumbentEmail.value = incumbentName.concat("@FULLERTON.EDU");
									  HiddenIncumbentName.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;
									  
									  HiddenFormInitiatorFirstName.value = myresponse[n].FIRST_NAME;
									  HiddenFormInitiatorLastName.value = myresponse[n].LAST_NAME;
									  
										rButtonStatus = true;
										modal.style.display = "none";
										break;
									}
                             }
                                if (rButtonStatus === false) {
                                    alert("Please select the department");
                                    modal.style.display = "none";
                                }
                            };
                            
                            footerModal.appendChild(okButton);

                        } else {
                            showErrorModal("Alert !","No matching records found");
                          	gifModal.style.display = "none";							

                        }

                        span.onclick = function() {
                            modal.style.display = "none";
                        };

                    }
                });
            }

        });
   // }
   
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	CBID.enabled = false;
  	CompServicesCommentsText.visible = false;
    compServicesComments.visible = false;
  	IncumbentSignaturePanel.visible = false;
    HiringManagerSignaturePanel.visible = false;
    DepartmentHeadSignaturePanel.visible = false;
    AppropriateAdministratorSignaturePanel.visible = false;
    //VicePresidentSignaturePanel.visible = false;
  	hrUserOnlyPanel.visible = false;
	departmentOptionalSignatureSearchPanel.visible = false;
  	signatureAcknowledgementPanel.title = "Acknowledgement";
}
else if(StageIndicator.value == "ToMPPReview"){
  	gifModal.style.display = "none";
  	CBID.enabled = false;
  	mppPDComments.enabled = true;
 	CompServicesCommentsText.visible = true;
  	compServicesComments.visible = true;
  	compServicesComments.enabled = false;
  	EmployeeInformationPanel.enabled = false;
	//CompleteQuestionsPanel.enabled = false;
	//physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = false;
    HiringManagerSignaturePanel.visible = false;
    DepartmentHeadSignaturePanel.visible = false;
    AppropriateAdministratorSignaturePanel.visible = false;
    //VicePresidentSignaturePanel.visible = false;
  	hrUserOnlyPanel.visible = false;
	departmentOptionalSignatureSearchPanel.visible = false;
  	signatureAcknowledgementPanel.title = "Acknowledgement";
}
else if(StageIndicator.value == "ToCompService"){
  	gifModal.style.display = "none";
  	CBID.enabled = true;
  	mppPDComments.enabled = false;
  	EmployeeInformationPanel.enabled = true;
  	AccessPanel.visible = true;
	//CompleteQuestionsPanel.enabled = false;
	//physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = false;
    HiringManagerSignaturePanel.visible = false;
    DepartmentHeadSignaturePanel.visible = false;
    AppropriateAdministratorSignaturePanel.visible = false;
    //VicePresidentSignaturePanel.visible = false;
  	hrUserOnlyPanel.visible = false;
  	departmentOptionalSignatureSearchPanel.visible = true;
  	signatureAcknowledgementPanel.title = "Acknowledgement";
}
else if(StageIndicator.value == "ToRecords"){  	
  	gifModal.style.display = "none";
  	CBID.enabled = false;
  	mppPDComments.enabled = false;
  	EmployeeInformationPanel.enabled = false;
  	summaryReportPanel.enabled = false;
  	compServicesComments.enabled = false;
	CompleteQuestionsPanel.enabled = false;
	physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = false; 	
    HiringManagerSignaturePanel.visible = false;
	DepartmentHeadSignaturePanel.visible = false;
    AppropriateAdministratorSignaturePanel.visible = false;  	
   // VicePresidentSignaturePanel.visible = false;  	
  	hrUserOnlyPanel.visible = true;
	departmentOptionalSignatureSearchPanel.visible = false;
  	signatureAcknowledgementPanel.title = "Signature & Acknowledgement";
}
else if(StageIndicator.value == "ToIncumbent"){
  	gifModal.style.display = "none";
  	CBID.enabled = false;
	mppPDCommentstText.visible = false;
  	mppPDComments.visible = false;
	CompServicesCommentsText.visible = false;
	compServicesComments.visible = false;
  	EmployeeInformationPanel.enabled = false;
  	summaryReportPanel.enabled = false;  	
	CompleteQuestionsPanel.enabled = false;
	physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = true;
    HiringManagerSignaturePanel.visible = false;
    DepartmentHeadSignaturePanel.visible = false;
    AppropriateAdministratorSignaturePanel.visible = false;
    //VicePresidentSignaturePanel.visible = false;
  	hrUserOnlyPanel.visible = true;
	hrUserOnlyPanel.enabled = false;
	departmentOptionalSignatureSearchPanel.visible = false;
  	signatureAcknowledgementPanel.title = "Signature & Acknowledgement";

}
else if(StageIndicator.value == "ToManagementSupervisor"){
  	gifModal.style.display = "none";
  	CBID.enabled = false;
	mppPDCommentstText.visible = false;
  	mppPDComments.visible = false;
	CompServicesCommentsText.visible = false;
	compServicesComments.visible = false;
	//mppPDCommentstText.visible = true;
  	//mppPDComments.visible = true;
	//CompServicesCommentsText.visible = true;
	//compServicesComments.visible = true;
  	//mppPDComments.enabled = false;
  	EmployeeInformationPanel.enabled = false;
  	summaryReportPanel.enabled = false;
  	//compServicesComments.enabled = false;
	CompleteQuestionsPanel.enabled = false;
	physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = true;
  	IncumbentSignaturePanel.enabled = false;
    HiringManagerSignaturePanel.visible = true;
	DepartmentHeadSignaturePanel.visible = false;
    DepartmentHeadSignaturePanel.visible = false;
    AppropriateAdministratorSignaturePanel.visible = false;
    //VicePresidentSignaturePanel.visible = false;
	hrUserOnlyPanel.visible = true;
	hrUserOnlyPanel.enabled = false;
	departmentOptionalSignatureSearchPanel.visible = false;
  	signatureAcknowledgementPanel.title = "Signature & Acknowledgement";
    
}
else if(StageIndicator.value == "ToDepartmentHead"){
  	gifModal.style.display = "none";
  	CBID.enabled = false;
	mppPDCommentstText.visible = false;
  	mppPDComments.visible = false;
	CompServicesCommentsText.visible = false;
	compServicesComments.visible = false;
	//mppPDCommentstText.visible = true;
  	//mppPDComments.visible = true;
	//CompServicesCommentsText.visible = true;
	//compServicesComments.visible = true;
  	//mppPDComments.enabled = false;
  	EmployeeInformationPanel.enabled = false;
  	summaryReportPanel.enabled = false;
  	//compServicesComments.enabled = false;
	CompleteQuestionsPanel.enabled = false;
	physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = true;
  	IncumbentSignaturePanel.enabled = false;
    HiringManagerSignaturePanel.visible = true;
  	HiringManagerSignaturePanel.enabled = false;
    DepartmentHeadSignaturePanel.visible = true;
    AppropriateAdministratorSignaturePanel.visible = false;
    //VicePresidentSignaturePanel.visible = false;
  	hrUserOnlyPanel.visible = true;
	hrUserOnlyPanel.enabled = false;
	departmentOptionalSignatureSearchPanel.visible = false;
 	signatureAcknowledgementPanel.title = "Signature & Acknowledgement";
}
else if(StageIndicator.value == "ToAppropriateAdmin"){
  	gifModal.style.display = "none";
  	CBID.enabled = false;
	mppPDCommentstText.visible = false;
  	mppPDComments.visible = false;
	CompServicesCommentsText.visible = false;
	compServicesComments.visible = false;
	//mppPDCommentstText.visible = true;
  	//mppPDComments.visible = true;
	//CompServicesCommentsText.visible = true;
	//compServicesComments.visible = true;
  	//mppPDComments.enabled = false;
  	EmployeeInformationPanel.enabled = false;
  	summaryReportPanel.enabled = false;
  	//compServicesComments.enabled = false;
	CompleteQuestionsPanel.enabled = false;
	physicalRequirementPanel.enabled = false;
  	IncumbentSignaturePanel.visible = true;
  	IncumbentSignaturePanel.enabled = false;
    HiringManagerSignaturePanel.visible = true;
  	HiringManagerSignaturePanel.enabled = false;
	if(departmentHeadSignatureFlagCHK.value == "1"){
		DepartmentHeadSignaturePanel.visible = true;
		DepartmentHeadSignaturePanel.enabled = false;
	}else{
		DepartmentHeadSignaturePanel.visible = false;
	}
    
    AppropriateAdministratorSignaturePanel.visible = true;
    //VicePresidentSignaturePanel.visible = false;
  	hrUserOnlyPanel.visible = true;
	hrUserOnlyPanel.enabled = false;
	departmentOptionalSignatureSearchPanel.visible = false;
  	signatureAcknowledgementPanel.title = "Signature & Acknowledgement";
}


        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

    if (this.value !== null && this.value !== UserLookUpToEmployeeLookUpFlag.value) {
      	

        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var empId = this.value;
        var userId = logUser.value;
		//var userId = 'jmccoy';

        $.ajax({
            type: 'GET',
            url: "/bin/getNewPositionStaffEmpoyeeIDLookup",
            data: {
                cwid: empId,
              userID:userId,
            },
            dataType: 'json',
            success: function(myresponse) {
				
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                if (myresponse.length === 1) {
                    
					  //EmplID.value = myresponse[0].EMPLID;
                      IncumbentLastName.value = myresponse[0].LAST_NAME;
                      IncumbentFirstName.value = myresponse[0].FIRST_NAME;
                      Department.value = myresponse[0].DEPTNAME;
                      ManagementSupervisor.value = myresponse[0].SupervisorName;
                      if(myresponse[0].FullTime == "1"){
                        TimebaseRB.value = 1;
                      }
                      if(myresponse[0].PartTime == "1"){
                        TimebaseRB.value = 2;
                      }
                      DeptID.value = myresponse[0].DEPTID;
                      Range.value = myresponse[0].GRADE;
                      SCOPosition.value = myresponse[0].SCONum;
                      Classification.value = myresponse[0].DESCR;          
                      EmplRCD.value = myresponse[0].EMPL_RCD;  
                  	  CMSPosition.value = myresponse[0].POSITION_NBR;
                      CBID.value = myresponse[0].UNION_CD;
                      Range.value = myresponse[0].GRADE;
                  	  HiddenIncumbentUserId.value = myresponse[0].USERID;
                  	  var incumbentUserID = myresponse[0].USERID;
                  	  HiddenIncumbentEmail.value = incumbentUserID.concat("@FULLERTON.EDU");
                  	  HiddenIncumbentName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                  	  EmployeeNamePage2.value = IncumbentFirstName.value + " " + IncumbentLastName.value;
                  	  EmployeeNamePage3.value = IncumbentFirstName.value + " " + IncumbentLastName.value; 
                  	  EmployeeNamePage4.value = IncumbentFirstName.value + " " + IncumbentLastName.value;  
                  	  EmployeeNamePage5.value = IncumbentFirstName.value + " " + IncumbentLastName.value; 
                  	  EmployeeNamePage6.value = IncumbentFirstName.value + " " + IncumbentLastName.value;
                    gifModal.style.display = "none";
                    modal.style.display = "none";
                } else if (myresponse.length > 1) {
					
                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];
                    col.push("LAST_NAME");
                    col.push("FIRST_NAME");
                    col.push("DEPTNAME");
                    col.push("SupervisorName");	
                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    //var headings = ["", "Department", "Job Code", "First Name", "Last Name", "CBID"];
                    var headings = ["", "Last Name", "First Name", "Department", "SupervisorName"];
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
							var okButton = document.createElement("input");
							okButton.type = "button";
							okButton.setAttribute("class", "okBtn");
							okButton.value = "OK";
							okButton.onclick = function(event) {
							var n;
							var rButtonStatus;
							var rButtons = document.getElementsByClassName("rb");
							for (n = 0; n < rButtons.length; n++) {
							debugger;
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {
                               /* EmplID.value = myresponse[n].EMPLID;
								console.log("EmplID.valu= " + EmplID.value);
								console.log("myresponse[n].EMPLID= " + myresponse[n].EMPLID);*/
                                IncumbentLastName.value = myresponse[n].LAST_NAME;
                                IncumbentFirstName.value = myresponse[n].FIRST_NAME;
                                Department.value = myresponse[n].DEPTNAME;
                                ManagementSupervisor.value = myresponse[n].SupervisorName;
                                if(myresponse[0].FullTime == "1"){
                                      TimebaseRB.value = 1;
                                }
                                if(myresponse[0].PartTime == "1"){
                                      TimebaseRB.value = 2;
                                }
                                DeptID.value = myresponse[n].DEPTID;
                                Range.value = myresponse[n].GRADE;
                                SCOPosition.value = myresponse[n].SCONum;
                                Classification.value = myresponse[n].DESCR;          
                                EmplRCD.value = myresponse[n].EMPL_RCD; 
                              	CMSPosition.value = myresponse[n].POSITION_NBR;
                                CBID.value = myresponse[n].UNION_CD;
                                Range.value = myresponse[n].GRADE;
                                HiddenIncumbentUserId.value = myresponse[n].USERID;
                                var incumbentUserID = myresponse[n].USERID;
                  	  			HiddenIncumbentEmail.value = incumbentUserID.concat("@FULLERTON.EDU");
                                HiddenIncumbentName.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;
                                rButtonStatus = true;
                                modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the departmentt");
                            modal.style.display = "block";
                        }
                    };
                    footerModal.appendChild(okButton);
                } else {
                  	
                    showErrorModal("Alert !","No matching records found");
                    gifModal.style.display = "none";
                  
                  	summaryReportPanel.resetData();
                    CompleteQuestionsPanel.resetData();
                    physicalRequirementPanel.resetData();
                  
                  	IncumbentLastName.value = null;
                    IncumbentFirstName.value = null;
                    Department.value = null;
                    ManagementSupervisor.value = null;
                    TimebaseRB.value = null;
                    DeptID.value = null;
                    Range.value = null;
                    SCOPosition.value = null;
                    Classification.value = null;        
                    EmplRCD.value = null;
                    CMSPosition.value = null;
                    CBID.value = null;
                    Range.value = null;
                    HiddenIncumbentUserId.value = null;
                    HiddenIncumbentName.value = null;
                  	AppropriateAdministrator.value = null;
                }

            }
        });
    }
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_CMSPosition_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_CMSPosition_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToCompService"){
 
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	var positionNum = this.value;

	$.ajax({
		type: 'GET',
		url: "/bin/getPositionNumberLookUp",
		data: {
			positionNumber: positionNum, 
          	unionCD: 'M80'
		},
		dataType: 'json',
		success: function(myresponse) {
          
			if (myresponse.length >= 1) {
              
              	  ManagerID.value = myresponse[0].MANAGER_EMPLID;
				  
              	  if(myresponse[0].MANAGER_EMP_USERID !== null){
                      ManagementSupervisor.value = myresponse[0].MANAGE_EMP_NAME + " - " + myresponse[0].SUPERVISORTITLE;
                      HiddenManagementSupervisorName.value = myresponse[0].MANAGE_EMP_NAME;
                      HiddenManagementSupervisorUserId.value = myresponse[0].MANAGER_EMP_USERID;				 
                      //HiddenManagementSupervisorEmail.value = myresponse[0].MANAGER_EMAIL_ID;
                      //HiddenManagementSupervisorEmail.value = "ajeet.chhonkar@thoughtfocus.com";  
                      HiddenManagementSupervisorEmail.value = "hrcc@fullerton.edu";
                    
                      getHRCooDetailsForManagementSupervisor();	
                  }
              
				  if(myresponse[0].ADMIN_EMP_USERID !== null){
                      AppropriateAdministrator.value = myresponse[0].ADMIN_EMP_NAME + " - " + myresponse[0].ADMIN_TITLE;
                      HiddenAppropriateAdminName.value = myresponse[0].ADMIN_EMP_NAME;
                      HiddenAppropriateAdminUserId.value = myresponse[0].ADMIN_EMP_USERID;				  
                      //HiddenAppropriateAdminEmail.value = myresponse[0].ADMIN_EMAIL_ID;
                      //HiddenAppropriateAdminEmail.value = "ajeet.chhonkar@thoughtfocus.com"; 
                      HiddenAppropriateAdminEmail.value = "hrcc@fullerton.edu";
                    
                      getHRCooDetailsForAppropriateAdmin();
                  }
              
			      gifModal.style.display = "none";
			} 
           gifModal.style.display = "none";
		}
      
	});
}

function getHRCooDetailsForManagementSupervisor(){  
    if(StageIndicator.value === null || StageIndicator.value == "ToCompService"){
        var departmentManagerUserId = HiddenAppropriateAdminUserId.value;

        $.ajax({
            type: 'GET',
            url: "/bin/getDeptCoordinatorForVP",
            data: {
              userID: departmentManagerUserId               	
            },
            dataType: 'json',
              success: function(delegateeResponse) {

                if (delegateeResponse.length > 0) {                  
                  var vpUserId = delegateeResponse[0].VP_USERID;

                    if(departmentManagerUserId == vpUserId){
                        HiddenManagementSupervisorName.value = delegateeResponse[0].HR_COO_FNAME + " " + delegateeResponse[0].HR_COO_LNAME;
                        HiddenManagementSupervisorUserId.value = delegateeResponse[0].HR_COO_USERID;				 
                        //HiddenManagementSupervisorEmail.value = delegateeResponse[0].HR_COO_EMAIL;
                      	//HiddenManagementSupervisorEmail.value = "ajeet.chhonkar@thoughtfocus.com";
                      	HiddenManagementSupervisorEmail.value = "hrcc@fullerton.edu";
                    }
                }
            }
        });
    }
}

function getHRCooDetailsForAppropriateAdmin(){
  if(StageIndicator.value === null || StageIndicator.value == "ToCompService"){
  
  var adminUserId = HiddenAppropriateAdminUserId.value;

    $.ajax({
            type: 'GET',
            url: "/bin/getDeptCoordinatorForVP",
            data: {
                    userID: adminUserId               	
            },
            dataType: 'json',
            success: function(delegateeResponse) {

                if (delegateeResponse.length > 0) {                  
                    var vpUserId = delegateeResponse[0].VP_USERID;

                    if(adminUserId == vpUserId){
                        HiddenAppropriateAdminName.value = delegateeResponse[0].HR_COO_FNAME + " " + delegateeResponse[0].HR_COO_LNAME;
                        HiddenAppropriateAdminUserId.value = delegateeResponse[0].HR_COO_USERID;				 
                        //HiddenAppropriateAdminEmail.value = delegateeResponse[0].HR_COO_EMAIL;
                      	//HiddenAppropriateAdminEmail.value = "ajeet.chhonkar@thoughtfocus.com";
                      	HiddenAppropriateAdminEmail.value = "hrcc@fullerton.edu";
                    }
                }
            }
     });
}
}

        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DateInitiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DateInitiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiate = (curyear + "-" + curyearMonth + "-" + curyearDay);
            DateInitiated.value = dateInitiate;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_ManagementSupervisor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_ManagementSupervisor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DepartmentHead_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DepartmentHead_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_AppropriateAdministrator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_AppropriateAdministrator_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_AppropriateAdministrator_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_AppropriateAdministrator_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value == "ToCompService"){
  
  var adminUserId = HiddenAppropriateAdminUserId.value;

    $.ajax({
            type: 'GET',
            url: "/bin/getDeptCoordinatorForVP",
            data: {
                    userID: adminUserId               	
            },
            dataType: 'json',
            success: function(delegateeResponse) {

                if (delegateeResponse.length > 0) {                  
                    var vpUserId = delegateeResponse[0].VP_USERID;

                    if(adminUserId == vpUserId){
                        HiddenAppropriateAdminName.value = delegateeResponse[0].HR_COO_FNAME + " " + delegateeResponse[0].HR_COO_LNAME;
                        HiddenAppropriateAdminUserId.value = delegateeResponse[0].HR_COO_USERID;				 
                        HiddenAppropriateAdminEmail.value = delegateeResponse[0].HR_COO_EMAIL;
                    }
                }
            }
     });
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_managementSupervisorLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_managementSupervisorLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCompService"){
      	
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  	if(this.value !== null){
      	managementSupervisorNameList.mandatory = true;
    }
    var lastName = this.value; 
  	var nameList = document.querySelector(".managementSupervisorfullNameList select");
  
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
      	managementSupervisorNameList.value = "Select Management Supervisor";
      	ManagementSupervisor.value = null;
      	HiddenManagementSupervisorEmail.value = null;
      	HiddenManagementSupervisorUserId.value = null;
      	HiddenManagementSupervisorName.value = null;
      	
    }
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_managementSupervisorNameList_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_managementSupervisorNameList_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCompService" && this.value !== null){
      	
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
               
                if (myresponse.length > 0) {                  		
                  	  
                  	  if(myresponse[0].SUPERVISORTITLE == undefined){
                        	ManagementSupervisor.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                      }
                      else{
                            ManagementSupervisor.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME +" - " + myresponse[0].SUPERVISORTITLE;
                      }
                      HiddenManagementSupervisorName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;                  	  
                      HiddenManagementSupervisorUserId.value = myresponse[0].USER_ID;   
                  	  //HiddenManagementSupervisorEmail.value = myresponse[0].USER_ID.concat("@FULLERTON.EDU");
                  	  HiddenManagementSupervisorEmail.value = "hrcc@fullerton.edu"; 
                  	  //HiddenManagementSupervisorEmail.value = "ajeet.chhonkar@thoughtfocus.com";
					  
					  gifModal.style.display = "none";
                      
                } else {
                  	if(managementSupervisorLastName.value !== null){
                      	showErrorModal("Alert !","No matching records found"); 
                    }
                                       
                    gifModal.style.display = "none";
                }

            }
        });
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_departmentHeadLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_departmentHeadLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCompService"){
    //debugger; 	
  	var gifModal = document.getElementById('gifModal');
  	gifModal.style.display = "block";
  	if(this.value !== null){
      	DepartmentHeadNamesList.mandatory = true;
    }
  	var lastName = this.value;   
  	var nameList = document.querySelector(".fullNameList select");
  
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
      	departmentHeadSignatureFlagCHK.value = null;
      	DepartmentHead.value = null;
      	HiddenDepartmentHeadEmail.value = null;
      	HiddenDepartmentHeadUserId.value = null;
      	HiddenDepartmentHeadName.value = null;
      	DepartmentHeadNamesList.value = "Select Department Head";
    }
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DepartmentHeadNamesList_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DepartmentHeadNamesList_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCompService" && this.value !== null){
      	
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
		  
			if (myresponse.length > 0) {                  	

				  var departmentHeadUserId = myresponse[0].USER_ID;
				  
				  $.ajax({
						type: 'GET',
						url: "/bin/getDeptCoordinatorForVP",
						data: {
								userID: departmentHeadUserId               	
						},
						dataType: 'json',
						success: function(delegateeResponse) {
							
							if (delegateeResponse.length > 0) {  

								var vpUserId = delegateeResponse[0].VP_USERID;
								
								if(departmentHeadUserId == vpUserId){
									DeptHeadSignature.enabled = true;
									HiddenDepartmentHeadUserId.value = delegateeResponse[0].HR_COO_USERID;
									HiddenDepartmentHeadName.value = delegateeResponse[0].HR_COO_FNAME + " " + delegateeResponse[0].HR_COO_LNAME;
									//HiddenDepartmentHeadEmail.value = delegateeResponse[0].HR_COO_EMPLID;    
									HiddenDepartmentHeadEmail.value = "hrcc@fullerton.edu";
									//HiddenDepartmentHeadEmail.value = "ajeet.chhonkar@thoughtfocus.com";
								}									
							}
							else{
                              		if(myresponse[0].SUPERVISORTITLE == undefined){
                                          DepartmentHead.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                                    }
                                    else{
                                          DepartmentHead.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME +" - " + myresponse[0].SUPERVISORTITLE;
                                    }
									HiddenDepartmentHeadName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;								    
								    HiddenDepartmentHeadUserId.value = myresponse[0].USER_ID;					     
								    //HiddenDepartmentHeadEmail.value = myresponse[0].USER_ID.concat("@FULLERTON.EDU"); 
								    HiddenDepartmentHeadEmail.value = "hrcc@fullerton.edu"; 
								    //HiddenDepartmentHeadEmail.value = "ajeet.chhonkar@thoughtfocus.com";								   
							}
						}
					});					  
			  
				  departmentHeadSignatureFlagCHK.value = "1";
				  
				  gifModal.style.display = "none";
				  
			} else {
				if(departmentHeadLastName.value !== null){
					showErrorModal("Alert !","No matching records found");
					HiddenDepartmentHeadUserId.value = null;
					HiddenDepartmentHeadName.value = null;
					HiddenDepartmentHeadEmail.value = null;
					DepartmentHead.value = null;
					departmentHeadSignatureFlagCHK.value = null;
				}
				gifModal.style.display = "none";
			}

		}
	});
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_appropriateAdminLastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_appropriateAdminLastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCompService"){
      	
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
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_appropriateAdminNameList_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_appropriateAdminNameList_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToCompService" && this.value !== null){
      	
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
              
                if (myresponse.length > 0) {                  		
                  	  
                  	  if(myresponse[0].SUPERVISORTITLE == undefined){
                        	AppropriateAdministrator.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                      }
                      else{
                            AppropriateAdministrator.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME +" - " + myresponse[0].SUPERVISORTITLE;
                      }
                      HiddenAppropriateAdminName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;                  	  
                      HiddenAppropriateAdminUserId.value = myresponse[0].USER_ID;					  
                  	  //HiddenAppropriateAdminEmail.value = myresponse[0].USER_ID.concat("@FULLERTON.EDU"); 
                      HiddenAppropriateAdminEmail.value = "hrcc@fullerton.edu"; 
                      //HiddenAppropriateAdminEmail.value = "ajeet.chhonkar@thoughtfocus.com";
                      //HiddenAppropriateAdminEmail.value = "yjayaram@fullerton.edu";
					  
					  gifModal.style.display = "none";
                      
                } else {
                  	if(appropriateAdminLastName.value !== null){
                      	showErrorModal("Alert !","No matching records found");                    
                    }
                    
                    gifModal.style.display = "none";
                }

            }
        });
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(overall_purpose.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(significant_changes.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(incumbent_work.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
  	IncumbentOverseeWorkForOthers.enabled = false;
}
else{
  	this.enabled = true;
  	IncumbentOverseeWorkForOthers.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(major_responsibilities.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation5_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation5_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(primary_duties.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation6_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation6_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(essential_qualifications.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation7_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation7_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(preferred_qualifications.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation8_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation8_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(license_certification.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_Explanation9_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_Explanation9_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(special_working_conditions.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_CompleteQuestionsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_CompleteQuestionsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(compliance_access_chk.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}

        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_ComplianceYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_ComplianceYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  ComplianceNo.value  = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_ComplianceNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_ComplianceNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  ComplianceYes.value  = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DecisionYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DecisionYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	DecisionNo.value = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DecisionNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DecisionNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	DecisionYes.value = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_ResponsibilityYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_ResponsibilityYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	ResponsibilityNo.value = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_ResponsibilityNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_ResponsibilityNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	ResponsibilityYes.value = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_physicalRequirementPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_physicalRequirementPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(physical_work_requirement_chk.value !== null && StageIndicator.value == "ToMPPReview"){
  	this.enabled = false;
}
else{
  	this.enabled = true;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_IncumbmentSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_IncumbmentSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToIncumbent") {
    if (this.value == 1) {
        if (IncumbentDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            IncumbentDate.value = d;*/
          
            getSignerDetails();          
        } 
    } else {
        IncumbentSignature.value = null;
        IncumbentDate.value = null;
    }
}


function getSignerDetails() {
    $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {
            IncumbentSignature.value = myresponse.userName;
            IncumbentDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });

    IncumbentSignature.enabled = false;
    IncumbentDate.enabled = false;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_IncumbmentSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_IncumbmentSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToIncumbent"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  IncumbentSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_IncumbentAction_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_IncumbentAction_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_IncumbentAction_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_IncumbentAction_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //console.log("this value is = " + this.value);
if(this.value == 1){
  	IncumbentSignature.value = null;
	IncumbentDate.value = null;
  	IncumbentSignature.mandatory = false;
	IncumbentDate.mandatory = false;
  	IncumbmentSignatureCHK.mandatory = false;
  	IncumbmentSignatureCHK.enabled = false;
  	IncumbmentSignatureCHK.value = null;
}
else{

	IncumbentSignature.enabled = false;
  	IncumbmentSignatureCHK.mandatory = true;
  	IncumbmentSignatureCHK.enabled = true;
  	if(StageIndicator.value === "ToIncumbent"){
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  IncumbentSignature.value = myresponse.userName;
              }
          }); 

        if (IncumbentDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            IncumbentDate.value = d;
            IncumbentSignature.enabled = false;
        } else {
            IncumbentDate.enabled = false;
            IncumbentSignature.enabled = false;
        }
    }
}




        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_IncumbentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_IncumbentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_HiringManagerSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_HiringManagerSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToManagementSupervisor") {
    if (this.value == 1) {
        if (DeptHiringManagerDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            DeptHiringManagerDate.value = d;*/
            
          	getSignerDetails();
        }
    } else {
        DeptHiringManagerDate.value = null;
        DeptHiringManagerSignature.value = null;
    }
}

function getSignerDetails() {
    $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {
            DeptHiringManagerSignature.value = myresponse.userName;
            DeptHiringManagerDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });

    DeptHiringManagerSignature.enabled = false;
    DeptHiringManagerDate.enabled = false;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_HiringManagerSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_HiringManagerSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToManagementSupervisor"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  DeptHiringManagerSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DeptHiringManagerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DeptHiringManagerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DepartmentSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DepartmentSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToDepartmentHead") {
    if (this.value == 1) {       
        if (DeptHeadDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            DeptHeadDate.value = d;*/
            
          	getSignerDetails();
        }
    } else {
        DeptHeadSignature.value = null;
        DeptHeadDate.value = null;
    }
}

function getSignerDetails() {
    $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {
            DeptHeadSignature.value = myresponse.userName;
            DeptHeadDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });

    DeptHeadSignature.enabled = false;
    DeptHeadDate.enabled = false;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DepartmentSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DepartmentSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDepartmentHead"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  DeptHeadSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_DeptHeadDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_DeptHeadDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_AppropriateSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_AppropriateSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToAppropriateAdmin") {
    if (this.value == 1) {
        if (AppropriateAdministratorDate.value === null) {
            /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            AppropriateAdministratorDate.value = d;*/
           
          	getSignerDetails();
        }
    } else {
        AppropriateAdministratorSignature.value = null;
        AppropriateAdministratorDate.value = null;
    }
}

function getSignerDetails() {
    $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {
            AppropriateAdministratorSignature.value = myresponse.userName;
            AppropriateAdministratorDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });

    AppropriateAdministratorSignature.enabled = false;
    AppropriateAdministratorDate.enabled = false;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_AppropriateSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_AppropriateSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAppropriateAdmin"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  AppropriateAdministratorSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_AppropriateAdministratorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_AppropriateAdministratorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_hrSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_hrSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_hrSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_hrSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == 1){
//RecordsSignature.value = LogUser.value;
Initials.enabled = false;

        if (HRDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            HRDate.value = d;
            Initials.enabled = false;
        } else {
            HRDate.enabled = false;
            Initials.enabled = false;
        }
}else {
  	Initials.value = null;
  	HRDate.value = null;
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_hrSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_hrSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToRecords"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  //RecordsSignature.value = myresponse.userName;
                  Initials.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_HRDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_HRDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_hiddenFields_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_hiddenFields_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_ManagerID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_ManagerID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
 
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	var managerId = this.value;

	$.ajax({
		type: 'GET',
		url: "/bin/getManagerIDLookUp",
		data: {
			managerID: managerId
		},
		dataType: 'json',
		success: function(myresponse) {
            			
				  ManageIDLookUpJSONData.value = JSON.stringify(myresponse);
          		
                  var managerEmail = [];
          		  var userIDs = [];
          		  var firstNames = [];
          		  var lastNames = [];

                  for (var key in myresponse) {

                    var val = key;    
                    var completeVal = [];
                    completeVal = JSON.stringify(myresponse[key]);
                    var obj = JSON.parse(completeVal);
                    var res = []; 

                    for(var i in obj) {
                      res.push(obj[i]); 
                      //alert( Array of values - ["+ res + "]");
                    } 
                    // console.log("Array of values - ["+ res + "]");
                    managerEmail.push(res[20].concat("@FULLERTON.EDU"));
                    userIDs.push(res[20]);
                    firstNames.push(res[4]);
                    lastNames.push(res[2]);
 
                  }
          
          		  HiddenManagementSupervisorUserId.value = userIDs[0]; 
          		  HiddenAppropriateAdminUserId.value = userIDs[1]; 
            	 // HiddenVicePresidentUserId.value = userIDs[2];
          		
                /*  if(HiddenVicePresidentUserId.value !== null){
                    	vicePresidentDetailsFromPositionNumberFlag.value = "true";
                  }
          		  
          
          		  if(HiddenAppropriateAdminUserId.value === null && HiddenVicePresidentUserId.value === null){
                    	HiddenAppropriateAdminUserId.value =  HiddenManagementSupervisorUserId.value; 
                    	HiddenVicePresidentUserId.value =  HiddenManagementSupervisorUserId.value;
                  }
          		  if(HiddenAppropriateAdminUserId.value === null){
                    	HiddenAppropriateAdminUserId.value =  HiddenManagementSupervisorUserId.value; 
                    	
                  }
          		  if(HiddenVicePresidentUserId.value === null){
                    	HiddenVicePresidentUserId.value =  HiddenAppropriateAdminUserId.value;                     	
                  }*/
          		  
          		  HiddenIncumbentEmail.value = "ajeet.chhonkar@thoughtfocus.com";  
          		  HiddenManagementSupervisorEmail.value = "ajeet.chhonkar@thoughtfocus.com";                   
                  HiddenAppropriateAdminEmail.value = "ajeet.chhonkar@thoughtfocus.com";  
                  HiddenVicePresidentEmail.value = "ajeet.chhonkar@thoughtfocus.com";	
          
          		  HiddenManagementSupervisorName.value = firstNames[0] + " " + lastNames[0]; 
          		  HiddenAppropriateAdminName.value = firstNames[1] + " " + lastNames[1]; 
            	  //HiddenVicePresidentName.value = firstNames[2] + " " + lastNames[2];
          
          		  var appropriateAdminNameValue = HiddenAppropriateAdminName.value;
          		  if(appropriateAdminNameValue.includes("undefined")){
                    	HiddenAppropriateAdminName.value = null;
                  }
          		 /* var vicePresidentNameValue = HiddenVicePresidentName.value;
          		  if(vicePresidentNameValue.includes("undefined")){
                    	HiddenVicePresidentName.value = null;
                  }
          
          		  if(HiddenVicePresidentName.value !== null){
                    	 vicePresidentSignatureFlagCHK.value = "1";
                  }
          
          		 if(HiddenAppropriateAdminName.value === null && HiddenVicePresidentName.value === null){
                    	HiddenAppropriateAdminName.value =  HiddenManagementSupervisorName.value; 
                    	HiddenVicePresidentName.value =  HiddenManagementSupervisorName.value;
                  }
          		  if(HiddenAppropriateAdminName.value === null && appropriateAdminNameValue.includes("undefined")){
                    	HiddenAppropriateAdminName.value =  HiddenManagementSupervisorName.value; 
                    	
                  }
          		  if(HiddenVicePresidentName.value === null && vicePresidentNameValue.includes("undefined")){
                    	HiddenVicePresidentName.value =  HiddenAppropriateAdminName.value;                     	
                  }*/
              
			      gifModal.style.display = "none";

		//	} 
		}
	});
}

        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToMPPReview" || StageIndicator.value == "ToCompService"){

    $.ajax({

    type: 'GET', 

    url:"/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse){
      var userValue=myresopnse.userId;
      logUser.value = userValue;
    },
      error: function(error){
    alert("error block="+error);
    }
    });

    this.visible = false;
}

        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated__valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated__valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
 
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	var managerId = this.value;

	$.ajax({
		type: 'GET',
		url: "/bin/getManagerIDLookUp",
		data: {
			managerID: managerId
		},
		dataType: 'json',
		success: function(myresponse) {
          
			if (myresponse.length === 1) {
				/*  .value = myresponse[0].DIVSION;
				  .value = myresponse[0].DIVISION_NAME;
				  .value = myresponse[0].SUPERVISORNAME;
				  .value = myresponse[0].SUPERVISORTITLE;
              	  .value = myresponse[0].MANAGER_EMPLID;          
				  .value = myresponse[0].MANAGER_UNION_CD; 
				  .value = myresponse[0].MANAGER_EMP_USERID;
				  .value = myresponse[0].MANAGE_EMP_NAME;
				  .value = myresponse[0].MANAGER_REPORTS_TO;
				  .value = myresponse[0].MANAGER_DEPTID;
				  .value = myresponse[0].MANAGER_POSITION_NBR;             
              	  .value = myresponse[0].ADMIN_UNION_CD; 
				  .value = myresponse[0].ADMIN_EMP_USERID;
				  .value = myresponse[0].ADMIN_DEPTID;
				  .value = myresponse[0].ADMIN_EMPLID;
				  .value = myresponse[0].ADMIN_EMP_NAME;
				  .value = myresponse[0].ADMIN_REPORTS_TO;
              	  .value = myresponse[0].ADMIN_POSITION_NBR; */
				  
				  ManagerIDLookUpJSONData.value = JSON.Stringify(myresponse[0]);
              
			      gifModal.style.display = "none";

			} 

		}
	});
}
        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var flag = 0;
if(flag === 0){
 getPdf();
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/new-position-staff/new-position-description-staff');
            jsonData.append('fileName', IncumbentFirstName.value + "_" + IncumbentLastName.value + "(" + EmplID.value + ")" + "_" + Date.now());          
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
 * @function new_position_staff_new_position_description_staff.generated_saveguidedraft1572870589671_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_saveguidedraft1572870589671_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";

aftiaDescCWID.value = IncumbentLastName.value +", " + IncumbentFirstName.value + " " + EmplID.value;

handleDraftSave(this);


        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated_submit1572870581804_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated_submit1572870581804_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = IncumbentLastName.value +", " + IncumbentFirstName.value + " " + EmplID.value;

EmailSubject.value = "Test - Request for New Positions Description - Staff ("+ IncumbentLastName.value + ", " +IncumbentFirstName.value+")"; 

var testEmail = "hrcc@fullerton.edu";
//var testEmail = "yjayaram@fullerton.edu";
//var testEmail = "ajeet.chhonkar@thoughtfocus.com";
//var testEmail = "sapna.gupta@thoughtfocus.com";
//var testEmail = "yjayaram@fullerton.edu";


HiddenIncumbentEmail.value = testEmail;
HiddenManagementSupervisorEmail.value = testEmail;
HiddenDepartmentHeadEmail.value = testEmail;
HiddenAppropriateAdminEmail.value = testEmail;
HiddenVicePresidentEmail.value = testEmail;

var submitFlag = 0;
if(ComplianceYes.value === null  && ComplianceNo.value === null){
  showErrorModal("Alert !","Error: Please indicate if this position is considered a sensitive position.");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].compliance[0].panel1555493049146[0].ComplianceYes[0]");
  submitFlag = 1;
}else{
  submitFlag = 0; 
}
if(submitFlag  === 0){
if(DecisionYes.value === null  && DecisionNo.value === null){
  showErrorModal("Alert !","Error: Please indicate if this position is or should be designated as a Conflict of Interest position.");
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].compliance[0].panel1555493049146[0].DecisionYes[0]");
  submitFlag = 1;
}else{
  submitFlag = 0; 
}
}



if(submitFlag === 0){
   guideBridge.submit();
} 




        }
	}
}
/**
 * @function new_position_staff_new_position_description_staff.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
new_position_staff_new_position_description_staff.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            var flag = 0;

if(flag === 0){
 getPdf();
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/new-position-staff/new-position-description-staff');
            jsonData.append('fileName', IncumbentFirstName.value + "_" + IncumbentLastName.value + "(" + EmplID.value + ")" + "_" + Date.now());          
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
