/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    $.ajax({

      type: 'GET', 
      url:"/bin/getCaseID",
      dataType: 'json',

      success: function(myresponse){    debugger;        
        caseId.value = myresponse.CASEID;

      	}
	}); 	
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
/*
if (StageIndicator.value === null) {
    var requestModal = document.getElementById("requestModal");
    var span = document.getElementsByClassName("request-close")[0];
    var button = document.getElementsByClassName("request-rb1");
    requestModal.style.display = "block";
    span.onclick = function() {
        if ((document.getElementById("winterRB").checked === false) && (document.getElementById("non-winterRB").checked === false)) {
            requestModal.style.display = "block";
            document.getElementById("mandatorySelectionAlert").style.display = "block";
            document.getElementById("okBtnId4").onclick = function() {
                document.getElementById("mandatorySelectionAlert").style.display = "none";
            };

        } else {
            requestModal.style.display = "none";
        }
    };

    document.getElementById("winterRB").onclick = function() {
        requestModal.style.display = "none";
        gifModal.style.display = "none";
        NonWinterAdditionalTab.visible = false;
        grad_degreeProgram.visible = false;
      	requestTypeFlag.value = "Winter";
      	getStudentDetails();
    };
    document.getElementById("non-winterRB").onclick = function() {
        requestModal.style.display = "none";
        gifModal.style.display = "none";
        WinterAdditionalTab.visible = false;
      	grad_classLevel.visible = false;
        //grad_degreeProgram.visible = true;
      	requestTypeFlag.value = "Non-Winter";
      	getStudentDetails();
    };
}
*/

if (StageIndicator.value === null) {
    getStudentDetails();
}

function getStudentDetails() {

    if (StageIndicator.value === null) {
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(response) {
                var userValue = response.userId;
                //var userValue = 'yeatsliu';

                workflow_initiator.value = userValue;
                logUser.value = userValue;

                $.ajax({

                    type: 'GET',
                    url: '/bin/getExcessUnitDetails',
                    data: {
                        userID: userValue,
                        action: 'STUDENT_DETAILS'
                    },

                    dataType: 'json',
                    success: function(response) {
                        gifModal.style.display = "none";                       
                        if (response.length === 1) {
                            if (response[0].ACAD_CAREER == "PBAC") {
                                grad_CWID.value = response[0].EMPLID;
                                grad_name.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                                grad_email.value = response[0].PREF_EMAIL;
                                grad_phone.value = response[0].CELL_PHONE;
                                grad_address.value = response[0].ADDRESS1 + ", " + response[0].CITY + ", " + response[0].STATE + ", " + response[0].POSTAL;
                                grad_degreeProgram.value = response[0].PROGRAMS;
                                /*hidden_chair_userID.value = response[0].CHAIR_USERID;
                                hidden_chair_name.value = response[0].CHAIR_NAME;
                                hidden_chair_email.value = response[0].CHAIR_EMAIL;*/
                                hidden_initiator_firstName.value = response[0].FIRST_NAME;
                                hidden_initiator_lastName.value = response[0].LAST_NAME;
                                hidden_initiator_userID.value = response[0].USERID;
                              
                              	spring_semester.value = 1;

                                Grad_name.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                                Grad_CWID.value = response[0].EMPLID;
                                Grad_phone.value = response[0].CELL_PHONE;
                            } else {
                                showErrorModal("Alert !", "No matching records found");
                            }

                        } else if (response.length > 1) {

                            var modal = document.getElementById('myModal');

                            gifModal.style.display = "none";
                            modal.style.display = "block";

                            var col = [];

                            col.push("PROGRAMS");
                            col.push("DEGREE");
                            col.push("DEPTNAME");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Program", "Degree", "Department Name"];
                            for (var j = 0; j < headings.length; j++) {
                                var th = document.createElement("th");
                                th.innerHTML = headings[j];
                                tr.appendChild(th);
                            }
                            for (var k = 0; k < response.length; k++) {
                                tr = table.insertRow(-1);

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
                                    tabCell.innerHTML = response[k][col[l]];
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

                                var n;
                                var rButtonStatus;
                                var rButtons = document.getElementsByClassName("rb");
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {
                                        if (response[n].ACAD_CAREER == "PBAC") {
                                            grad_CWID.value = response[n].EMPLID;
                                            grad_name.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                                            grad_email.value = response[n].PREF_EMAIL;
                                            grad_phone.value = response[n].CELL_PHONE;
                                            grad_address.value = response[n].ADDRESS1 + response[n].CITY + ", " + response[n].STATE + ", " +
                                                response[n].POSTAL;
                                            grad_degreeProgram.value = response[n].PROGRAMS;
                                            /*hidden_chair_userID.value = response[n].CHAIR_USERID;
                                            hidden_chair_name.value = response[n].CHAIR_NAME;
                                            hidden_chair_email.value = response[n].CHAIR_EMAIL;*/
                                            hidden_initiator_firstName.value = response[n].FIRST_NAME;
                                            hidden_initiator_lastName.value = response[n].LAST_NAME;
                                            hidden_initiator_userID.value = response[n].USERID;
                                          
                                          	spring_semester.value = 1;

                                            Grad_name.value = response[n].FIRST_NAME + " " + response[0].LAST_NAME;
                                            Grad_CWID.value = response[n].EMPLID;
                                            Grad_phone.value = response[n].CELL_PHONE;
                                        } else {
                                            showErrorModal("Alert !", "No matching records found");
                                        }

                                        rButtonStatus = true;
                                        modal.style.display = "none";
                                        break;

                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the program");
                                    modal.style.display = "block";
                                }
                            };
                            //var footerModal = document.getElementById("modal_footer");

                            footerModal.appendChild(okButton);

                        } else {
                            showErrorModal("Alert !", "No matching records found");
                        }
                    }
                });
            },
            error: function() {
                showErrorModal("Alert !", "No matching records found");
            }
        });
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            	
var gifModal = document.getElementById('gifModal');
if(StageIndicator.value === null){
  	AdvisorSignaturePanel.visible = false;
	ChairSignaturePanel.visible = false;
  	ARSCSignaturePanel.visible = false;
}
else if(StageIndicator.value == "ToAdvisor"){	
	gifModal.style.display = "none";
	employeeInformation.enabled = false;
  	NonWinterAdditionalTab.enabled = false;
  	GradPanel.visible = false;
	ApprovalPanel.visible = false;
	StudentSignaturePanel.enabled = false;
  	AdvisorSignaturePanel.visible = true;
  	//ChairSignaturePanel.visible = false;
	ARSCSignaturePanel.visible = false;
}
/*
else if(StageIndicator.value == "ToChair"){
	debugger;
	gifModal.style.display = "none";
	employeeInformation.enabled = false;
	if(requestTypeFlag.value == "Winter"){
		WinterAdditionalTab.enabled = false;
		NonWinterAdditionalTab.visible = false;	
		grad_degreeProgram.visible = false;	
	}
	else{
		NonWinterAdditionalTab.enabled = false;
		WinterAdditionalTab.visible = false;
		grad_classLevel.visible = false;	
	}	
	ApprovalPanel.visible = false;
	StudentSignaturePanel.enabled = false;
  	AdvisorSignaturePanel.visible = true;
	AdvisorSignaturePanel.enabled = false;
  	ChairSignaturePanel.visible = true;
	ARSCSignaturePanel.visible = false;
}
*/
else if(StageIndicator.value == "ToARSC"){
	gifModal.style.display = "none";
	employeeInformation.enabled = false;
  	NonWinterAdditionalTab.enabled = false;
	ApprovalPanel.visible = false;
  	GradPanel.visible = false;
	StudentSignaturePanel.enabled = false;
  	AdvisorSignaturePanel.visible = true;
	AdvisorSignaturePanel.enabled = false;
  	//ChairSignaturePanel.visible = true;
	//ChairSignaturePanel.enabled = false;
	ARSCSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_phone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_phone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_address_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_address_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_email_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_classLevel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_classLevel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_degreeProgram_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_grad_degreeProgram_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_spring_semester_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_spring_semester_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value == 1){
      fall_semester.value = null;
      summer_semester.value = null;
    }
}

        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_fall_semester_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_fall_semester_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value == 1){
      spring_semester.value = null;
      summer_semester.value = null;
    }
}

        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_summer_semester_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_summer_semester_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value == 1){
      	fall_semester.value = null;
		spring_semester.value = null;
    }  	
}

        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_request_statusRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_request_statusRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 2){
  	request_denied_reason.enabled = true;
}
else{
  	request_denied_reason.enabled = false;
  	request_denied_reason.value = null;
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_ApprovalPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_ApprovalPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;

        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_advisor_name_select_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_advisor_name_select_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
      	
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  
  	hidden_advisor_userID.value = null;
	hidden_advisor_name.value = null;
	hidden_advisor_email.value = null;
  	
    var lastName = this.value;
	var advisoryNamesArray = [];
  	var allAdvisorDetailsArray = [];
  
  	if(this.value !== null){

        $.ajax({
            type: 'GET',
            url: "/bin/getExcessUnitDetails",
            data: {
                lastName: lastName,
              	action: 'SEARCH_FUNCTIONALITY'
            },
            dataType: 'json',
            success: function(response) {
              	advisor_nameList.items = "";
              	advisor_nameList.value = null;
               
                if (response.length > 0) {                  	
                      	 
					for(var advisorList=0; advisorList < response.length; advisorList++){ 
						 advisoryNamesArray.push(response[advisorList].All_Details);
                      
                      	 allAdvisorDetailsArray.push(response[advisorList]); 
                      	 advisor_details_json.value = JSON.stringify(allAdvisorDetailsArray);
					}
					
					advisor_nameList.items = advisoryNamesArray;
					
					if(this.value !== null){
                        advisor_nameList.mandatory = true;
                    }
                  
					gifModal.style.display = "none";
                      
                } else {
                    showErrorModal("Alert !","No matching records found");                    
                    gifModal.style.display = "none";
                }

            }
        });
    }else{      		
      		advisor_nameList.items = "";
      		advisor_nameList.value = "Select advisor";
            hidden_advisor_userID.value = null;
            hidden_advisor_name.value = null;
            hidden_advisor_email.value = null;
      		gifModal.style.display = "none";      	
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_advisor_nameList_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_advisor_nameList_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value !== null && this.value !== "Select advisor") {
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var completeDetails = this.value;
        var details = completeDetails.split(", ");

        if (details[0] !== undefined) {
            hidden_advisor_name.value = details[0];
        }
        if (details[1] !== undefined) {
            hidden_advisor_email.value = details[1];

            /*var advisorEmailVal = hidden_advisor_email.value;
          	var advisorUserIDVal = advisorEmailVal.split("@"); 
          	console.log("advisorUserIDVal[0]= " + advisorUserIDVal[0]);
          	if(advisorUserIDVal[0] !== null){
              	hidden_advisor_userID.value = advisorUserIDVal[0];
            }
          	console.log("hidden_advisor_userID.value= " + hidden_advisor_userID.value);*/

        }

        if (this.value !== null) {
            getAdvisorUserID(completeDetails);
        }
        gifModal.style.display = "none";

    } else {
        hidden_advisor_name.value = null;
        hidden_advisor_userID.value = null;
        hidden_advisor_email.value = null;

        gifModal.style.display = "none";
    }
}

function getAdvisorUserID() {

    var advisorInfo = completeDetails;
    var advisorInfoArray = [];
    var advisorDetailsArray = [];
    var advisorInfoObj = {};

    advisorInfoArray = JSON.parse(advisor_details_json.value);

    for (var details = 0; details < advisorInfoArray.length; details++) {

        advisorInfoObj = advisorInfoArray[details];

        for (var key in advisorInfoObj) {

            if (advisorInfo == key) {
                advisorDetailsArray = advisorInfoObj[key].split(" - ");
                hidden_advisor_userID.value = advisorDetailsArray[0];
            }
        }

    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_DeptCoordinatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_DeptCoordinatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    if (this.value == 1) {
        if (grad_studentSignature.value === null) {

            grad_studentDate.enabled = false;
          
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    grad_studentSignature.value = grad_name.value;
                    grad_studentDate.value = response.SERVER_DATE;
                  
                  	studentSignature.value = Grad_name.value;
                    studentDate.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            grad_studentSignature.enabled = false;
        }
    } else {
        grad_studentSignature.value = "";
        grad_studentDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToAdvisor"){
    if (this.value == 1) {
        if (grad_advisorSignature.value === null) {

          	grad_advisorDate.enabled = false;
          
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    grad_advisorSignature.value = response.userName;
                    grad_advisorDate.value = response.SERVER_DATE;
                  
                  	Grad_advisorSignature.value = response.userName;
                    Grad_advisorDate.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            grad_advisorSignature.enabled = false;
        }
    } else {
        grad_advisorSignature.value = "";
        grad_advisorDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_DeptChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_DeptChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value == "ToChair"){
    if (this.value == 1) {
        if (grad_ChairSignature.value === null) {
          
          	 grad_chairDate.enabled = false;

            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    grad_ChairSignature.value = response.userName;
                    grad_chairDate.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            grad_ChairSignature.enabled = false;
        }
    } else {
        grad_ChairSignature.value = "";
        grad_chairDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_ARSCCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_ARSCCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToARSC"){
    if (this.value == 1) {
        if (grad_arscSignature.value === null) {
          
          	 grad_arscDate.enabled = false;

            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    grad_arscSignature.value = response.userName;
                    grad_arscDate.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            grad_arscSignature.enabled = false;
        }
    } else {
        grad_arscSignature.value = "";
        grad_arscDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_term_description_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_term_description_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value == "ToAdvisor" || StageIndicator.value == "ToARSC" || StageIndicator.value === null) {
    if(this.value == "Summer 2022"){
    spring_semester.items = "1 = Summer Semester 20";
    }
}

        }
	}
}
/**
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_button1657101831082_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_button1657101831082_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
    getPdf();

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/request-for-excess-units-graduate/graduate-request-for-excess-unit');
            jsonData.append('fileName', "Test");          
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
 * @function request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_graduate_graduate_request_for_excess_unit.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*if(requestTypeFlag.value == "Winter"){
	winterValidation();
}
else{
	nonWinterValidation();
}
*/

nonWinterValidation(); 


function submitAction(){
	
	aftiaDescCWID.value = grad_name.value + " "+ grad_CWID.value;
	EmailSubject.value = "Request of Excess Units (Graduate) - " + grad_CWID.value;

	//var testEmail = "yjayaram@fullerton.edu";
  	var testEmail = 'swathi.kumari@thoughtfocus.com';

	grad_email.value = testEmail;
	hidden_advisor_email.value = testEmail;
	hidden_chair_email.value = testEmail; 

	guideBridge.submit();
}


function nonWinterValidation(){
	if(grad_studentUnits.value === null){
		showErrorModal("Alert !", "Please enter units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].NonWinterAdditionalTab[0].grad_studentUnits[0]");
	}
	else if(semesterYear.value === null){
		showErrorModal("Alert !", "Please mention the semester year");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].NonWinterAdditionalTab[0].semesterYear[0]");
	}
	else if(grad_reason.value === null){
		showErrorModal("Alert !", "Please enter the reason of request");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].NonWinterAdditionalTab[0].grad_reason[0]");
	}
	/*else if(request_statusRB.value === null){
		showErrorModal("Alert !", "Please select approve or denied");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].NonWinterAdditionalTab[0].request_approvedCHK[0]");
	}
	else if(request_statusRB.value == 2 && request_denied_reason.value === null){
		showErrorModal("Alert !", "Please mention the denied reason");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].NonWinterAdditionalTab[0].request_denied_reason[0]");
	}*/
	else if(advisor_name_select.value === null){
		showErrorModal("Alert !", "Please enter the last name of the advisor");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SignatureACK[0].ApprovalPanel[0].advisor_name_select[0]");
	}
	else if(advisor_name_select.value !== null && advisor_nameList.value === null){
		showErrorModal("Alert !", "Please select the advisor");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SignatureACK[0].ApprovalPanel[0].advisor_nameList[0]");
	}
	else{
			submitAction();
	}
}

/*
function winterValidation(){
	if(grad_units.value === null){
		showErrorModal("Alert !", "Please enter units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].WinterAdditionalTab[0].grad_units[0]");
	}
	else if(grad_cumulativeGPA.value === null){
		showErrorModal("Alert !", "Please enter cummulative GPA");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].WinterAdditionalTab[0].grad_cumulativeGPA[0]");
	}
	else if(grad_winter_reason.value === null){
		showErrorModal("Alert !", "Please enter the reason of request");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].WinterAdditionalTab[0].grad_winter_reason[0]");
	}
	else if(advisor_name_select.value === null){
		showErrorModal("Alert !", "Please enter the last name of the approver");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SignatureACK[0].ApprovalPanel[0].advisor_name_select[0]");
	}
	else if(advisor_name_select.value !== null && advisor_nameList.value === null){
		showErrorModal("Alert !", "Please select the approver");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SignatureACK[0].ApprovalPanel[0].advisor_nameList[0]");
	}
	else{
			submitAction();
	}
}
*/







        }
	}
}
