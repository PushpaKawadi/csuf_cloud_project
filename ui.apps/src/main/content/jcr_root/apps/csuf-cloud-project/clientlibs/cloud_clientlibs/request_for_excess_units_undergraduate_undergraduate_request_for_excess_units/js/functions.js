/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_guideRootPanel_init0 = function (scope) {
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
        if ((document.getElementById("summerRB").checked === false) && (document.getElementById("springOrFallRB").checked === false)) {
            requestModal.style.display = "block";
            document.getElementById("mandatorySelectionAlert").style.display = "block";
            document.getElementById("okBtnId4").onclick = function() {
                document.getElementById("mandatorySelectionAlert").style.display = "none";
            };

        } else {
            requestModal.style.display = "none";
        }
    };

    document.getElementById("summerRB").onclick = function() {
        requestModal.style.display = "none";
        gifModal.style.display = "none";
        SpringFallAdditionalTab.visible = false;
        summerOrFallHeaderText.visible = false;
      	caseId.visible = true;
      	requestTypeFlag.value = "Summer";
      	var type = "Summer";
      	caseIDVal(type);
      	getStudentDetails();
    };
    document.getElementById("springOrFallRB").onclick = function() {
        requestModal.style.display = "none";
        gifModal.style.display = "none";
        SummerAdditionalTab.visible = false;
        summerHeaderText.visible = false;
      	caseId1.visible = true;
      	requestTypeFlag.value = "SpringOrFall";
      	var type = "SpringOrFall";
      	caseIDVal(type);
      	getStudentDetails();
    };
}
*/
function caseIDVal(){
  	if(StageIndicator.value === null){
        $.ajax({

          type: 'GET', 
          url:"/bin/getCaseID",
          dataType: 'json',

          success: function(myresponse){            	
            	/*if(type == "Summer"){
                  	caseId.value = myresponse.CASEID;
                }
            	else{
                  	caseId1.value = myresponse.CASEID;
                }*/ 
            
            	caseId1.value = myresponse.CASEID;
            caseId.value = myresponse.CASEID;
            }
        }); 	
	}
}


//function getStudentDetails() {

   if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
     
    caseIDVal(); 

    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            var userValue = response.userId;
            //var userValue = 'jazminhz';    //jazminhz - Multiple student records
            //var userValue = 'mcguirec'; 	  // single record	

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
                    if (response[0].ACAD_CAREER == "UGRD") {

                        if (response.length === 1) {

                            CWID.value = response[0].EMPLID;
                            studentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                           // street.value = response[0].PREF_EMAIL;
                            hidden_student_email.value = response[0].PREF_EMAIL;
                            telephone.value = response[0].CELL_PHONE;
                            //debugger;
                            var streetAdd1 = "";
                            var streetAdd2 = "";
                            if (response[0].ADDRESS2 === undefined || response[0].ADDRESS2 === null) {
                                streetAdd1 = "";
                            } else {
                                streetAdd1 = response[0].ADDRESS2;
                            }

                            if (response[0].ADDRESS1 === undefined || response[0].ADDRESS1 === null) {
                                streetAdd2 = "";
                            } else {
                                streetAdd2 = response[0].ADDRESS1;
                            }

                            street.value = streetAdd1 + " " + streetAdd2;
                            address.value = response[0].CITY + ", " + response[0].STATE + ", " + response[0].POSTAL;
                            major.value = response[0].PROGRAMS;
                            hidden_chair_userID.value = response[0].CHAIR_USERID;
                            hidden_chair_name.value = response[0].CHAIR_NAME;
                            hidden_chair_email.value = response[0].CHAIR_EMAIL;
                            hidden_initiator_firstName.value = response[0].FIRST_NAME;
                            hidden_initiator_lastName.value = response[0].LAST_NAME;
                            hidden_initiator_userID.value = response[0].USERID;

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

                                        CWID.value = response[n].EMPLID;
                                        studentName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                                        //street.value = response[n].PREF_EMAIL;
                                        hidden_student_email.value = response[n].PREF_EMAIL;
                                        telephone.value = response[n].CELL_PHONE;
                                        var streetAdd1 = "";
                                        var streetAdd2 = "";
                                        if (response[n].ADDRESS2 === undefined || response[n].ADDRESS2 === null) {
                                            streetAdd1 = "";
                                        } else {
                                            streetAdd1 = response[n].ADDRESS2;
                                        }

                                        if (response[n].ADDRESS1 === undefined || response[n].ADDRESS1 === null) {
                                            streetAdd2 = "";
                                        } else {
                                            streetAdd2 = response[n].ADDRESS1;
                                        }
                                        street.value = streetAdd1 + " " + streetAdd2;
                                        address.value = response[n].CITY + ", " + response[n].STATE + ", " + response[n].POSTAL;
                                        major.value = response[n].PROGRAMS;
                                        hidden_chair_userID.value = response[n].CHAIR_USERID;
                                        hidden_chair_name.value = response[n].CHAIR_NAME;
                                        hidden_chair_email.value = response[n].CHAIR_EMAIL;
                                        hidden_initiator_firstName.value = response[n].FIRST_NAME;
                                        hidden_initiator_lastName.value = response[n].LAST_NAME;
                                        hidden_initiator_userID.value = response[n].USERID;

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
//}


        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            	debugger;
var gifModal = document.getElementById('gifModal');
if(StageIndicator.value === null){
  	AdvisorSignaturePanel.visible = false;
	ChairSignaturePanel.visible = false;
  	ARSCSignaturePanel.visible = false;  
  if(requestTypeFlag.value == "Summer"){		
		SummerAdditionalTab.visible = true;
		SpringFallAdditionalTab.visible = false;
		caseId.visible = true;
		caseId1.visible = false;
	}
	else{
		SummerAdditionalTab.visible = false;
		SpringFallAdditionalTab.visible = true;
		caseId.visible = false;
		caseId1.visible = true;
	}
}
else if(StageIndicator.value == "ToAdvisor"){	
	gifModal.style.display = "none";
	employeeInformation.enabled = false;  	
	SpringFallAdditionalTab.enabled = false;
	if(requestTypeFlag.value == "Summer"){
		summerOrFallHeaderText.visible = false;
        summerHeaderText.visible = true;
		SummerAdditionalTab.visible = true;
		SpringFallAdditionalTab.visible = false;
		caseId.visible = false;
		caseId1.visible = true;
	}
	else{
		
		SpringFallAdditionalTab.visible = true;
		SummerAdditionalTab.visible = false;
		summerHeaderText.visible = false;
      	caseId1.visible = false;
		caseId.visible = true;
	}	
	ApprovalPanel.visible = false;
	StudentSignaturePanel.enabled = false;
  	AdvisorSignaturePanel.visible = true;
  	ChairSignaturePanel.visible = false;
	ARSCSignaturePanel.visible = false;
}
else if(StageIndicator.value == "ToChair"){	
	gifModal.style.display = "none";
	employeeInformation.enabled = false;
  	SpringFallAdditionalTab.enabled = false;
	if(requestTypeFlag.value == "Summer"){
		summerOrFallHeaderText.visible = false;
        summerHeaderText.visible = true;
		SummerAdditionalTab.visible = true;
		SpringFallAdditionalTab.visible = false;
		caseId.visible = false;
		caseId1.visible = true;
	}
	else{
		
		SpringFallAdditionalTab.visible = true;
		SummerAdditionalTab.visible = false;
		summerHeaderText.visible = false;
      	caseId1.visible = false;
		caseId.visible = true;
	}		
	ApprovalPanel.visible = false;
	StudentSignaturePanel.enabled = false;
  	AdvisorSignaturePanel.visible = true;
	AdvisorSignaturePanel.enabled = false;
  	ChairSignaturePanel.visible = true;
	ARSCSignaturePanel.visible = false;
}
else if(StageIndicator.value == "ToARSC"){
	gifModal.style.display = "none";
	employeeInformation.enabled = false;
  	SpringFallAdditionalTab.enabled = false;
	if(requestTypeFlag.value == "Summer"){
		summerOrFallHeaderText.visible = false;
        summerHeaderText.visible = true;
		SummerAdditionalTab.visible = true;
		SpringFallAdditionalTab.visible = false;
		caseId.visible = false;
		caseId1.visible = true;
	}
	else{
		
		SpringFallAdditionalTab.visible = true;
		SummerAdditionalTab.visible = false;
		summerHeaderText.visible = false;
      	caseId1.visible = false;
		caseId.visible = true;
	}		
	ApprovalPanel.visible = false;
	StudentSignaturePanel.enabled = false;
  	AdvisorSignaturePanel.visible = true;
	AdvisorSignaturePanel.enabled = false;
  	ChairSignaturePanel.visible = true;
	ChairSignaturePanel.enabled = false;
	ARSCSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_caseId1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_caseId1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_studentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_studentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_telephone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_telephone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_street_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_street_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_address_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_address_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_class_level_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_class_level_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_major_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_major_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_ApprovalPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_ApprovalPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;

        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_advisor_name_select_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_advisor_name_select_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
      	
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  	
    var lastName = this.value;
	var advisoryNamesArray = [];
  	var allAdvisorDetailsArray = [];
  
  	hidden_advisor_userID.value = null;
    hidden_advisor_name.value = null;
    hidden_advisor_email.value = null;
  
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
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_advisor_nameList_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_advisor_nameList_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value !== null) {
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";		  	
        var completeDetails = this.value;      	
        var details = completeDetails.split(", ");

      	if(details[0] !== undefined){
          	hidden_advisor_name.value = details[0];         	
        }    	
        if(details[1] !== undefined){
          	hidden_advisor_email.value = details[1];
          	
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
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    if (this.value == 1) {
        if (student_signature.value === null) {

            student_date.enabled = false;
          
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    student_signature.value = studentName.value;
                    student_date.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            student_signature.enabled = false;
        }
    } else {
        student_signature.value = "";
        student_date.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_AdvisorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_AdvisorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToAdvisor"){
    if (this.value == 1) {
        if (advisor_signature.value === null) {

          	advisor_date.enabled = false;
          
            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    advisor_signature.value = response.userName;
                    advisor_date.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            advisor_signature.enabled = false;
        }
    } else {
        advisor_signature.value = "";
        advisor_date.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_DeptChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_DeptChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToChair"){
    if (this.value == 1) {
        if (chair_signature.value === null) {
          
          	 chair_date.enabled = false;

            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    chair_signature.value = response.userName;
                    chair_date.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            chair_signature.enabled = false;
        }
    } else {
        chair_signature.value = "";
        chair_date.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_ARSCCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_ARSCCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToARSC"){
    if (this.value == 1) {
        if (arscSignature.value === null) {
          
          	 arscDate.enabled = false;

            $.ajax({

                type: 'GET',

                url: "/bin/getLoggedInUserDetails",
                dataType: 'json',
                success: function(response) {
                    arscSignature.value = response.userName;
                    arscDate.value = response.SERVER_DATE;

                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
            arscSignature.enabled = false;
        }
    } else {
        arscSignature.value = "";
        arscDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_term_description_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_term_description_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value == "ToAdvisor" || StageIndicator.value == "ToARSC" || StageIndicator.value == "ToChair") {
    if(this.value == "Spring 2022"){
      summerHeaderText.visible = false;
      summerOrFallHeaderText.visible = true;
    }else{
       summerHeaderText.visible = true;
      summerOrFallHeaderText.visible = false;
    }
}else{
   summerHeaderText.visible = true;
      summerOrFallHeaderText.visible = false;
}

        }
	}
}
/**
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_button1657099407893_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_button1657099407893_click0 = function (scope) {
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
            jsonData.append('formPath', '/content/forms/af/request-for-excess-units-undergraduate/undergraduate-request-for-excess-units');
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
 * @function request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_excess_units_undergraduate_undergraduate_request_for_excess_units.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*if(requestTypeFlag.value == "Summer"){
	summerValidation();
}

else if(requestTypeFlag.value == "SpringOrFall"){
	springFallValidation();
}
*/

springFallValidation();


function submitAction(){
	
	aftiaDescCWID.value = studentName.value + " "+ CWID.value;
	EmailSubject.value = "Request of Excess Unit (Undergraduate) - " + CWID.value;
  

	var testEmail = "swathi.kumari@thoughtfocus.com";
  	//var testEmail = "yjayaram@fullerton.edu";
	
  	hidden_student_email.value = testEmail;
	hidden_advisor_email.value = testEmail;
	hidden_chair_email.value = testEmail;

	guideBridge.submit();
}

function springFallValidation(){
	//if(underGradUnits.value === null){
	
    if(units.value === null){
		showErrorModal("Alert !", "Please enter units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SpringFallAdditionalTab[0].units[0]");
	}
	/*else if(underGradTerm.value === null){
		showErrorModal("Alert !", "Please enter the term");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SpringFallAdditionalTab[0].underGradTerm[0]");
	}*/
  		//else if(underGradYear.value === null){
          else if(year.value === null){
		showErrorModal("Alert !", "Please enter semester year");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SpringFallAdditionalTab[0].year[0]");
	}
	else if(cumulative_GPA.value === null){
		showErrorModal("Alert !", "Please enter cummulative GPA");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SpringFallAdditionalTab[0].cumulative_GPA[0]");
	}
	else if(reason.value === null){
		showErrorModal("Alert !", "Please enter the reason of request");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SpringFallAdditionalTab[0].reason[0]");
	}
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
function summerValidation(){
	
	if(units.value === null){
		showErrorModal("Alert !", "Please enter units");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SummerAdditionalTab[0].units[0]");
	}
	else if(year.value === null){
		showErrorModal("Alert !", "Please enter year");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SummerAdditionalTab[0].year[0]");
	}
	else if(cumulative_GPA.value === null){
		showErrorModal("Alert !", "Please enter cummulative GPA");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SummerAdditionalTab[0].cumulative_GPA[0]");
	}
	else if(reason.value === null){
		showErrorModal("Alert !", "Please enter the reason of request");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SummerAdditionalTab[0].reason[0]");
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
