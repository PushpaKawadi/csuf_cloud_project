/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
if (StageIndicator.value === null && formSavedStatus.value != "1") {
    gifModal.style.display = "block";

    var requestModal = document.getElementById("requestModal");
    var span = document.getElementsByClassName("request-close")[0];
    var button = document.getElementsByClassName("request-rb1");
    requestModal.style.display = "block";
    span.onclick = function() {
        if ((document.getElementById("newAppointment").checked === false) && (document.getElementById("noElection").checked === false) && (document.getElementById("thirdPartyElection").checked === false)) {
            requestModal.style.display = "block";
            document.getElementById("mandatorySelectionAlert").style.display = "block";
            document.getElementById("okBtnId4").onclick = function() {
                document.getElementById("mandatorySelectionAlert").style.display = "none";
            };

        } else {
            requestModal.style.display = "none";
        }
    };
    document.getElementById("newAppointment").onclick = function() {
        this.visible = false;
        new_appointment_flag.value = "Yes";
        no_election_flag.value = null;
        getUserDetails();
        getStageIndicatorNull();
        requestModal.style.display = "none";
    };
    document.getElementById("noElection").onclick = function() {
        this.visible = false;
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        election_not_applicableCHK.value = "1";
        third_party_electionCHK.value = null;
        new_appointment_flag.value = null;
        no_election_flag.value = "Yes";
        getUserDetails();
        getStageIndicatorNull();
        requestModal.style.display = "none";
    };
    document.getElementById("thirdPartyElection").onclick = function() {
        this.visible = false;
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        third_party_electionCHK.value = "1";
        election_not_applicableCHK.value = "null";
        new_appointment_flag.value = null;
        no_election_flag.value = "Yes";
        getUserDetails();
        getStageIndicatorNull();
        requestModal.style.display = "none";
    };
}


function getUserDetails() {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {

            var userValue = myresopnse.userId;           
            //var userValue = "kavery";
            workflow_initiator.value = userValue;

            $.ajax({

                type: 'GET',
                url: "/bin/getChairDirectorApplicationData",
                data: {
                    userId: userValue,
                    action: 'USERIDDETAILS'
                },
                dataType: 'json',
                success: function(userDetailsResponse) {
                    if (userDetailsResponse.length == 1) {

                        department.value = userDetailsResponse[0].DEPTNAME;
                        hidden_initiator_firstName.value = userDetailsResponse[0].FIRST_NAME;
                        hidden_initiator_lastName.value = userDetailsResponse[0].LAST_NAME;
                        hidden_initiator_cwid.value = userDetailsResponse[0].EMPLID;
                        HiddenDepartmentNameAndCode.value = userDetailsResponse[0].DEPTID;
						
                      	hidden_formFiller_userId.value = userDetailsResponse[0].EMPUSERID;
                    	hidden_formFiller_name.value = userDetailsResponse[0].EMP_NAME;
                    	hidden_formFiller_email.value = userDetailsResponse[0].EMAILID;   

                        //getDeanDetails();

                        gifModal.style.display = "none";

                    } else if (userDetailsResponse.length > 1) {
                        var modal = document.getElementById('myModal');
                        var myHeader = document.getElementById('pheader');
                        myHeader.innerHTML = "Please select the program";
                        var span = document.getElementsByClassName("close")[0];
                        gifModal.style.display = "none";
                        modal.style.display = "block";

                        var col = [];

                        col.push("DEPTID");
                        col.push("DEPTNAME");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        var headings = ["", "Department ID", "Department Name"];
                        for (var j = 0; j < headings.length; j++) {
                            var th = document.createElement("th");
                            th.innerHTML = headings[j];
                            tr.appendChild(th);
                        }
                        for (var k = 0; k < userDetailsResponse.length; k++) {
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
                                tabCell.innerHTML = userDetailsResponse[k][col[l]];
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

                                    department.value = userDetailsResponse[n].DEPTNAME;
                                    hidden_initiator_firstName.value = userDetailsResponse[n].FIRST_NAME;
                                    hidden_initiator_lastName.value = userDetailsResponse[n].LAST_NAME;
                                    hidden_initiator_cwid.value = userDetailsResponse[n].EMPLID;
                                    HiddenDepartmentNameAndCode.value = userDetailsResponse[n].DEPTID;

                                    hidden_formFiller_userId.value = userDetailsResponse[n].EMPUSERID;
                                    hidden_formFiller_name.value = userDetailsResponse[n].EMP_NAME;
                                    hidden_formFiller_email.value = userDetailsResponse[n].EMAILID;

                                    rButtonStatus = true;
                                    modal.style.display = "none";
                                    break;
                                }
                            }
                            if (rButtonStatus === false) {
                                showErrorModal("Alert!", "Please select the department");
                                modal.style.display = "block";
                            }
                        };
                        footerModal.appendChild(okButton);
                    } else {
                        showErrorModal("Alert !", "No matching records found");
                        gifModal.style.display = "none";
                    }
                }
            });
        }
    });
}

// The below logic is to show and hide the form as per the workflow steps //

var gifModal = document.getElementById('gifModal');
if (StageIndicator.value == "ToElectionAdmin") {
    gifModal.style.display = "none";
    if (no_election_flag.value == "Yes") {
        HRCoordinatorSignaturePanel.visible = false;
        ElectionAdminSignaturePanel.visible = false;
        //FormFillerSignaturePanel.visible = true;
        DeanSignaturePanel.visible = false;
        HRAcademicSignaturePanel.visible = false;
    } else {
        ElectionAdminSearchPanel.visible = false;
        //FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        //HRCoordinatorSignaturePanel.enabled = false;
		FormFillerSignaturePanel.visible = true;
		FormFillerSignaturePanel.enabled = false;
        ElectionAdminSignaturePanel.visible = true;        
        DeanSignaturePanel.visible = false;
        HRAcademicSignaturePanel.visible = false;
        ProvostSignaturePanel.visible = false;
    }
} else if (StageIndicator.value == "ToFormFiller") {
    gifModal.style.display = "none";   
    if (no_election_flag.value == "Yes") {
		ElectionResultsPanel.enabled = false;
		RequestOptionPanel.enabled = false;
        DeanRecommendationPanel.enabled = true;
		SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.visible = false;
        ElectionAdminSignaturePanel.visible = false;
        FormFillerSignaturePanel.visible = true;
        DeanSignaturePanel.visible = true;
		DeanSignaturePanel.enabled = false;
      	if (hr_academic_siganture.value !== null){
          	HRAcademicSignaturePanel.visible = true;
			HRAcademicSignaturePanel.enabled = false;
        }
      	else{
         	HRAcademicSignaturePanel.visible = false; 	
        }
        
        ProvostSignaturePanel.visible = false;
    } else {      	
        DeanRecommendationPanel.enabled = true;
      	recommended_candidate.enabled = true;
		RequestOptionPanel.enabled = false;
		CommentsAndTitleCHK.enabled = true;
		FormulaPanel.enabled = true;
		AdministrativeFractionPanel.enabled = true;
		DutiesAndResponsibilitiesPanel.enabled = true;
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;             
        SupportingDocumentsPanel.visible = false;		
        HRCoordinatorSignaturePanel.enabled = false;
        ElectionAdminSignaturePanel.visible = true;
        ElectionAdminSignaturePanel.enabled = false;
        FormFillerSignaturePanel.visible = true;
        DeanSignaturePanel.visible = true;
		DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = false;
        ProvostSignaturePanel.visible = false;
    }
} else if (StageIndicator.value == "ToDean") {
    gifModal.style.display = "none";  	
    if (no_election_flag.value == "Yes") {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = true;
		recommended_candidate.enabled = true;
		RequestOptionPanel.enabled = false;
		CommentsAndTitleCHK.enabled = true;
		FormulaPanel.enabled = true;
		AdministrativeFractionPanel.enabled = true;
		DutiesAndResponsibilitiesPanel.enabled = true;
        DutiesAndResponsibilitiesPanel.enabled = true;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.visible = false;
        ElectionAdminSignaturePanel.visible = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        HRAcademicSignaturePanel.visible = false;
        ProvostSignaturePanel.visible = false;
		
		if(hr_academic_siganture.value !== null){
			HRAcademicSignaturePanel.visible = true;
			HRAcademicSignaturePanel.enabled = false;
		}
    } else {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = true;
		recommended_candidate.enabled = true;
		RequestOptionPanel.enabled = false;
		CommentsAndTitleCHK.enabled = true;
		FormulaPanel.enabled = true;
		AdministrativeFractionPanel.enabled = true;
		DutiesAndResponsibilitiesPanel.enabled = true;
        DutiesAndResponsibilitiesPanel.enabled = true;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.enabled = false;
        ElectionAdminSignaturePanel.visible = true;
        ElectionAdminSignaturePanel.enabled = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        HRAcademicSignaturePanel.visible = false;
        ProvostSignaturePanel.visible = false;
		
		if(hr_academic_siganture.value !== null){
			HRAcademicSignaturePanel.visible = true;
			HRAcademicSignaturePanel.enabled = false;
		}
    }
} else if (StageIndicator.value == "ToHRCoordinator") {
    gifModal.style.display = "none";
    if (no_election_flag.value == "Yes") {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.visible = false;
        ElectionAdminSignaturePanel.visible = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = true;
        ProvostSignaturePanel.visible = false;
		
    } else {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.enabled = false;
        ElectionAdminSignaturePanel.visible = true;
        ElectionAdminSignaturePanel.enabled = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = true;
        ProvostSignaturePanel.visible = false;				
    }
} else if (StageIndicator.value == "ToProvost") {
    gifModal.style.display = "none";
    if (no_election_flag.value == "Yes") {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.visible = false;
        ElectionAdminSignaturePanel.visible = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = true;
        HRAcademicSignaturePanel.enabled = false;
        ProvostSignaturePanel.visible = true;
    } else {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.enabled = false;
        ElectionAdminSignaturePanel.visible = true;
        ElectionAdminSignaturePanel.enabled = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = true;
        HRAcademicSignaturePanel.enabled = false;
        ProvostSignaturePanel.visible = true;
    }
} else if (StageIndicator.value == "ToAcademicHR") {
    gifModal.style.display = "none";
    if (no_election_flag.value == "Yes") {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.visible = false;
        ElectionAdminSignaturePanel.visible = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = true;
        ProvostSignaturePanel.visible = true;
        ProvostSignaturePanel.enabled = false;
    } else {
        ElectionAdminSearchPanel.visible = false;
        FormFillerSearchPanel.visible = false;
        ElectionResultsPanel.enabled = false;
        DeanRecommendationPanel.enabled = false;
        DutiesAndResponsibilitiesPanel.enabled = false;
        SupportingDocumentsPanel.visible = false;
        HRCoordinatorSignaturePanel.enabled = false;
        ElectionAdminSignaturePanel.visible = true;
        ElectionAdminSignaturePanel.enabled = false;
        FormFillerSignaturePanel.visible = true;
        FormFillerSignaturePanel.enabled = false;
        DeanSignaturePanel.visible = true;
        DeanSignaturePanel.enabled = false;
        HRAcademicSignaturePanel.visible = true;
        ProvostSignaturePanel.visible = true;
        ProvostSignaturePanel.enabled = false;
    }
}

function getStageIndicatorNull() {
    if (StageIndicator.value === null) {
        if (no_election_flag.value == "Yes") {
            //DeanRecommendationPanel.enabled = false;
			table1631173219696.enabled = false;
			total_ballots_cast.enabled = false;
			ballot_comment.enabled = false;
          	election_not_applicableCHK.enabled = false;
          	third_party_electionCHK.enabled = false;
            HRCoordinatorSignaturePanel.visible = false;
            ElectionAdminSignaturePanel.visible = false;
            FormFillerSignaturePanel.visible = true;
            DeanSignaturePanel.visible = false;
            HRAcademicSignaturePanel.visible = false;
            ProvostSignaturePanel.visible = false;
        } else {
            //DeanRecommendationPanel.enabled = false;
            /*recommended_candidate.enabled = false;
          	CommentsAndTitleCHK.enabled = false;
            FormulaPanel.enabled = false;
            AdministrativeFractionPanel.enabled = false;
          	DutiesAndResponsibilitiesPanel.enabled = false;*/
            //RequestOptionPanel.enabled = false;
            election_not_applicableCHK.enabled = false;
          	third_party_electionCHK.enabled = false;
            ElectionAdminSignaturePanel.visible = false;
            FormFillerSignaturePanel.visible = true;
            DeanSignaturePanel.visible = false;
            HRAcademicSignaturePanel.visible = false;
            ProvostSignaturePanel.visible = false;
        }
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_college_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_college_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

    var collegeName = this.value;			

    $.ajax({

      type: 'GET',
      url: "/bin/getChairDirectorApplicationData",
      data: {
        college: collegeName,
        action: 'DEANDETAILS'
      },
      dataType: 'json',
      success: function(deanDetailsResponse) {
        if (deanDetailsResponse.length > 0) {

          hidden_dean_userId.value = deanDetailsResponse[0].EMP_USERID;
          hidden_dean_name.value = deanDetailsResponse[0].EMPNAME;
          hidden_dean_email.value = deanDetailsResponse[0].EMP_EMAIL;				

          gifModal.style.display = "none";

        } else {
          showErrorModal("Alert !", "No matching records found");
          gifModal.style.display = "none";
        }
      }
    });
}



        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_election_admin_lastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_election_admin_lastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
      	
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  	
    var lastName = this.value;
	var namesArray = [];
  
  	if(this.value !== null){

        $.ajax({
            type: 'GET',
            url: "/bin/getUserDetailsForSearchFunctionality",
            data: {
                lName: lastName				
            },
            dataType: 'json',
            success: function(response) {
               
                if (response.length > 0) {                  	
                      	 
					for(var list=0; list < response.length; list++){
						 namesArray.push(response[list].FIRST_NAME + " " + response[list].LAST_NAME);
					}
					
					election_admin_names.items = namesArray;
					
					if(this.value !== null){
                        election_admin_names.mandatory = true;
                    }
                  
					gifModal.style.display = "none";
                      
                } else {
                    showErrorModal("Alert !","No matching records found");                    
                    gifModal.style.display = "none";
                }

            }
        });
    }else{
      		election_admin_names.value = null;
      		gifModal.style.display = "none";      	
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_election_admin_names_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_election_admin_names_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {

    if (this.value !== null) {

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

                    hidden_electionAdmin_userId.value = myresponse[0].USER_ID; 
                  	hidden_electionAdmin_name.value = myresponse[0].FIRST_NAME + " "+myresponse[0].LAST_NAME; 
                  	hidden_electionAdmin_email.value = myresponse[0].EMAIL_ID;                    

                    gifModal.style.display = "none";
                }

            }
        });
    } else {                  
        hidden_electionAdmin_userId.value = null;
        hidden_electionAdmin_name.value = null;
        hidden_electionAdmin_email.value = null;        

        gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_form_filler_lastName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_form_filler_lastName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
      	
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  	
    var lastName = this.value;
	var namesArray = [];
  
  	if(this.value !== null){

        $.ajax({
            type: 'GET',
            url: "/bin/getUserDetailsForSearchFunctionality",
            data: {
                lName: lastName				
            },
            dataType: 'json',
            success: function(response) {
               
                if (response.length > 0) {                  	
                      	 
					for(var list=0; list < response.length; list++){
						 namesArray.push(response[list].FIRST_NAME + " " + response[list].LAST_NAME);
					}
					
					form_filler_names.items = namesArray;
					
					if(this.value !== null){
                        form_filler_names.mandatory = true;
                    }
                  
					gifModal.style.display = "none";
                      
                } else {
                    showErrorModal("Alert !","No matching records found");                    
                    gifModal.style.display = "none";
                }

            }
        });
    }else{
      		form_filler_names.value = null;
      		gifModal.style.display = "none";      	
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_form_filler_names_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_form_filler_names_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {

    if (this.value !== null) {

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

                    hidden_formFiller_userId.value = myresponse[0].USER_ID;
                    hidden_formFiller_name.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                    hidden_formFiller_email.value = myresponse[0].EMAIL_ID;                                       

                    gifModal.style.display = "none";
                }

            }
        });
    } else {                  
            hidden_formFiller_userId.value = null;
            hidden_formFiller_name.value = null;
      		hidden_formFiller_email.value = null;           

        gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_election_not_applicableCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_election_not_applicableCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	third_party_electionCHK.value = null;
  	recommended_candidate.enabled = true;
	CommentsAndTitleCHK.enabled = true;
	FormulaPanel.enabled = true;
	AdministrativeFractionPanel.enabled = true;
  	additional_duties.enabled = true;
}

if(new_appointment_flag.value !== null){
  	new_appointment_flag.value = null;
  	no_election_flag.value = "Yes";
  	ElectionAdminSearchPanel.visible = false;
	FormFillerSearchPanel.visible = false;
  	HRCoordinatorSignaturePanel.visible = false;
  	FormFillerSignaturePanel.visible = true;
}

if(this.value === null && third_party_electionCHK.value === null){
  	no_election_flag.value = null;
  	new_appointment_flag.value = "Yes"; 
  	ElectionAdminSearchPanel.visible = true;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_third_party_electionCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_third_party_electionCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == 1){
  	election_not_applicableCHK.value = null;
  	recommended_candidate.enabled = true;
	CommentsAndTitleCHK.enabled = true;
	FormulaPanel.enabled = true;
	AdministrativeFractionPanel.enabled = true;
  	additional_duties.enabled = true;
}

if(new_appointment_flag.value !== null){
  	new_appointment_flag.value = null;
  	no_election_flag.value = "Yes";
  	ElectionAdminSearchPanel.visible = false;
	FormFillerSearchPanel.visible = false;
  	HRCoordinatorSignaturePanel.visible = false;
  	FormFillerSignaturePanel.visible = true;
}

if(this.value === null && election_not_applicableCHK.value === null){
  	no_election_flag.value = null;
  	new_appointment_flag.value = "Yes"; 
  	ElectionAdminSearchPanel.visible = true;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_department_chairChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_department_chairChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
  	school_directorChk.value = null;
	division_chairChk.value = null;	
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_school_directorChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_school_directorChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	department_chairChk.value = null;  	
	division_chairChk.value = null;	
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_division_chairChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_division_chairChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	department_chairChk.value = null;
  	school_directorChk.value = null;	
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_one_semChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_one_semChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	one_yearChk.value = null;
	two_yearChk.value = null;
	three_yearChk.value = null;
	othersChk.value = null;
  	one_sem_year.enabled = true;
}
else{
	one_sem_year.enabled = false;
	one_sem_year.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_one_yearChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_one_yearChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	one_semChk.value = null;
  	two_yearChk.value = null;
	three_yearChk.value = null;
	othersChk.value = null;
  	one_year_from.enabled = true;
	one_year_to.enabled = true;
	one_year_chair.enabled = true;
}
else{
	one_year_from.enabled = false;
	one_year_from.value = null;
	one_year_to.enabled = false;
	one_year_to.value = null;
	one_year_chair.enabled = false;
	one_year_chair.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_one_year_from_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_one_year_from_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value !== null){
      	one_year_chair.value = null;
    }  	
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_one_year_to_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_one_year_to_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value !== null){
      	one_year_chair.value = null;
    }  	
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_one_year_chair_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_one_year_chair_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value !== null){
  		one_year_from.value = null;
		one_year_to.value = null;
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_two_yearChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_two_yearChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	one_semChk.value = null;
  	one_yearChk.value = null;
	three_yearChk.value = null;
	othersChk.value = null;
  	two_year_from.enabled = true;
	two_year_to.enabled = true;
	two_year_chair.enabled = true;
}
else{
	two_year_from.enabled = false;
	two_year_from.value = null;
	two_year_to.enabled = false;
	two_year_to.value = null;
	two_year_chair.enabled = false;
	two_year_chair.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_two_year_from_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_two_year_from_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if(this.value !== null){
  		two_year_chair.value = null;
	}
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_two_year_to_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_two_year_to_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if(this.value !== null){
  		two_year_chair.value = null;
	}
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_two_year_chair_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_two_year_chair_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value !== null){
  		two_year_from.value = null;
		two_year_to.value = null;
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_three_yearChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_three_yearChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	one_semChk.value = null;
  	one_yearChk.value = null;
	two_yearChk.value = null;
	othersChk.value = null;
  	three_year_from.enabled = true;
	three_year_to.enabled = true;
	three_year_chair.enabled = true;
}
else{
	three_year_from.enabled = false;
	three_year_from.value = null;
	three_year_to.enabled = false;
	three_year_to.value = null;
	three_year_chair.enabled = false;
	three_year_chair.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_three_year_from_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_three_year_from_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if(this.value !== null){
  		three_year_chair.value = null;
	}
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_three_year_to_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_three_year_to_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if(this.value !== null){
  		three_year_chair.value = null;
	}
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_three_year_chair_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_three_year_chair_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	if(this.value !== null){
  		three_year_from.value = null;
		three_year_to.value = null;
    }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_othersChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_othersChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	one_semChk.value = null;
  	one_yearChk.value = null;
	two_yearChk.value = null;
	three_yearChk.value = null;
  	others_from.enabled = true;
	others_to.enabled = true;
	others_chair.enabled = true;
}
else{
	others_from.enabled = false;
	others_from.value = null;
	others_to.enabled = false;
	others_to.value = null;
	others_chair.enabled = false;
	others_chair.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_first_percentageChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_first_percentageChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){	
	second_percentageChk.value = null;
	third_percentageChk.value = null;
	forth_percentageChk.value = null;
	others_percentageChk.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_second_percentageChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_second_percentageChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
	first_percentageChk.value = null;	
	third_percentageChk.value = null;
	forth_percentageChk.value = null;
	others_percentageChk.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_third_percentageChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_third_percentageChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
	first_percentageChk.value = null;
	second_percentageChk.value = null;	
	forth_percentageChk.value = null;
	others_percentageChk.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_forth_percentageChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_forth_percentageChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
	first_percentageChk.value = null;
	second_percentageChk.value = null;
	third_percentageChk.value = null;	
	others_percentageChk.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_others_percentageChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_others_percentageChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	first_percentageChk.value = null;
	second_percentageChk.value = null;
	third_percentageChk.value = null;
	forth_percentageChk.value = null;
  	others_percentage.enabled = true;
}
else{
  	others_percentage.enabled = false;
  	others_percentage.value = null;
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_SupportingDocumentsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_SupportingDocumentsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
}else{
  this.visible = false;
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_SupportingDocument1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_SupportingDocument1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = SupportingDocument1.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
	 
       SupportingDocument1.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(SupportingDocument1.fileAttachment.value) === true){
		var doc2NewName = SupportingDocument1.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
		SupportingDocument1.fileAttachment.value = doc2NewName;

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_SupportingDocument2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_SupportingDocument2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = SupportingDocument2.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
	 
       SupportingDocument2.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(SupportingDocument2.fileAttachment.value) === true){
		var doc2NewName = SupportingDocument2.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
		SupportingDocument2.fileAttachment.value = doc2NewName;

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_SupportingDocument3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_SupportingDocument3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var filePath = SupportingDocument3.fileAttachment.value;
	var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);

	extension = extension.toLowerCase();
	  
	if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
	 
       SupportingDocument3.fileAttachment.value = null;
	   showErrorModal("Alert !","Please upload a supported file");

	}
	var format = /[&{}#!@$%^=;\[\]]/;

	if(format.test(SupportingDocument3.fileAttachment.value) === true){
		var doc2NewName = SupportingDocument3.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'-');
		SupportingDocument3.fileAttachment.value = doc2NewName;

	}

	if(this.value !== null){
	  nonMedSupDocMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_provostChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_provostChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value == "ToProvost") {
    if (this.value == 1) {
        $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

			success: function(myresponse) {            
				provost_date.value = myresponse.SERVER_DATE; 
				provost_siganture.value = myresponse.userName;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
		
		provost_date.enabled = false;
		provost_siganture.enabled = false;		
    } else {
        provost_date.value = null;
        provost_siganture.value = null;
    }
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_provost_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_provost_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_hr_academicChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_hr_academicChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value == "ToHRCoordinator") {
    if (this.value == 1) {
        $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

			success: function(myresponse) {            
				hr_academic_date.value = myresponse.SERVER_DATE; 
				hr_academic_siganture.value = myresponse.userName;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
		
		hr_academic_date.enabled = false;
		hr_academic_siganture.enabled = false;		
    } else {
        hr_academic_date.value = null;
        hr_academic_siganture.value = null;
    }
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_hr_academic_decision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_hr_academic_decision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_hr_academic_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_hr_academic_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_compensation_services_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_compensation_services_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value == "ToDean") {
    if (this.value == 1) {
        $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

			success: function(myresponse) {            
				dean_date.value = myresponse.SERVER_DATE; 
				dean_siganture.value = myresponse.userName;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
		
		dean_date.enabled = false;
		dean_siganture.enabled = false;		
    } else {
        dean_date.value = null;
        dean_siganture.value = null;
    }
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_dean_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_dean_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_election_adminChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_election_adminChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value == "ToElectionAdmin") {
    if (this.value == 1) {
        $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

			success: function(myresponse) {            
				election_admin_date.value = myresponse.SERVER_DATE; 
				election_admin_siganture.value = myresponse.userName;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
		
		election_admin_date.enabled = false;
		election_admin_signature.enabled = false;		
    } else {
        election_admin_date.value = null;
        election_admin_signature.value = null;
    }
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_election_admin_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_election_admin_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_form_fillerChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_form_fillerChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null || StageIndicator.value == "ToFormFiller") {
    if (this.value == 1) {
        $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

			success: function(myresponse) {            
				form_filler_date.value = myresponse.SERVER_DATE; 
				form_filler_siganture.value = myresponse.userName;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
		
		form_filler_date.enabled = false;
		form_filler_siganture.enabled = false;		
    } else {
        form_filler_date.value = null;
        form_filler_siganture.value = null;
    }
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_form_fillerChk_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_form_fillerChk_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToDivisionHead"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           division_head_signature.value = myresponse.userName;
		   division_head_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_form_filler_decision_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_form_filler_decision_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_form_filler_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_form_filler_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_hr_coordinatorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_hr_coordinatorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

			success: function(myresponse) {            
				hr_coordinator_date.value = myresponse.SERVER_DATE; 
				hr_coordinator_signature.value = myresponse.userName;
			},
			error: function(error) {
				alert("error block=" + error);
			}
		});
		
		hr_coordinator_signature.enabled = false;
		hr_coordinator_date.enabled = false;
    } else {
        hr_coordinator_signature.value = null;
        hr_coordinator_date.value = null;
    }
}

        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_hr_coordinator_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_hr_coordinator_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled =false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/chair-director-appointment-form/chair-director-application-form');
            //jsonData.append('fileName', "(" + hidden_cwid.value + ")" + "_" + Date.now());    
            jsonData.append('fileName', "(" + Date.now() + ")");      
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
 * @function chair_director_appointment_form_chair_director_application_form.generated_reset1620198020617_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_reset1620198020617_click0 = function (scope) {
    with(this) {
        with(scope) {
            location.reload();


        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_saveguidedraft1620198028691_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_saveguidedraft1620198028691_click0 = function (scope) {
    with(this) {
        with(scope) {
            
aftiaDescCWID.value = hidden_initiator_firstName.value + ", " + hidden_initiator_lastName.value + " " + hidden_initiator_cwid.value;

formSavedStatus.value = "1";

handleDraftSave(this);


        }
	}
}
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
chair_director_appointment_form_chair_director_application_form.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            
function submitMethod(){  
  	EmailSubject.value = "Test - Request for Chair/Director Appointment - " + hidden_initiator_lastName.value + ", " + hidden_initiator_firstName.value; 
  	aftiaDescCWID.value = hidden_initiator_firstName.value + ", " + hidden_initiator_lastName.value + " " + hidden_initiator_cwid.value;
  
  	var testEmail = "swathi.kumari@thoughtfocus.com";
  //	var testEmail = "julnunez@fullerton.edu";
  
  	hidden_electionAdmin_email.value = testEmail;
	hidden_formFiller_email.value = testEmail;
	hidden_dean_email.value = testEmail;
	hidden_provost_email.value = testEmail;

  	guideBridge.submit(); 
}

if(college.value === null){
	showErrorModal("Alert !", "Please select college");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].ElectionResultsPanel[0].college[0]");
}
else if(department.value === null){
	showErrorModal("Alert !", "Please select department");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].ElectionResultsPanel[0].department[0]");
}
else if((new_appointment_flag.value == "Yes") && (names1.value === null || number_votes1.value === null || total_ballots1.value === null)){
	showErrorModal("Alert !", "Please fill at least one row in the table");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].ElectionResultsPanel[0].table1631173219696[0].Row1[0].names1[0]");
}
else if((new_appointment_flag.value == "Yes") && (election_admin_lastName.value === null && election_admin_names.value === null)){
	showErrorModal("Alert !", "Please select election administrator");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].ElectionResultsPanel[0].ElectionAdminSearchPanel[0].election_admin_lastName[0]");
}
else if(department_chairChk.value === null && school_directorChk.value === null && division_chairChk.value === null){
	showErrorModal("Alert !", "Please select title");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].CommentsAndTitleCHK[0].department_chairChk[0]");
}
else if(one_semChk.value === null && one_yearChk.value === null && two_yearChk.value === null && three_yearChk.value === null && othersChk.value === null){
	showErrorModal("Alert !", "Please select at least one option to specify duration");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].one_semChk[0]");
}
else if(one_semChk.value !== null && one_sem_year.value === null){
	showErrorModal("Alert !", "Please enter semester year");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].one_sem_year[0]");
}
else if(one_yearChk.value !== null && one_year_from.value === null && one_year_chair.value === null){
	showErrorModal("Alert !", "Please enter beginning year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].one_year_from[0]");
}
else if(one_yearChk.value !== null && one_year_to.value === null && one_year_chair.value === null){
	showErrorModal("Alert !", "Please enter end year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].one_year_from[0]");
}

else if(two_yearChk.value !== null && two_year_from.value === null && two_year_chair.value === null){
	showErrorModal("Alert !", "Please enter beginning year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].two_year_from[0]");
}
else if(two_yearChk.value !== null && two_year_to.value === null && two_year_chair.value === null){
	showErrorModal("Alert !", "Please enter end year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].two_year_to[0]");
}

else if(three_yearChk.value !== null && three_year_from.value === null && three_year_chair.value === null){
	showErrorModal("Alert !", "Please enter beginning year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].three_year_from[0]");
}
else if(three_yearChk.value !== null && three_year_to.value === null && three_year_chair.value === null){
	showErrorModal("Alert !", "Please enter end year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].three_year_to[0]");
}

else if(othersChk.value !== null && others_from.value === null && others_to.value === null && others_chair.value === null){
	showErrorModal("Alert !", "Please enter beginning year or Date");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].FormulaPanel[0].others_from[0]");
}

else if(first_percentageChk.value === null && second_percentageChk.value === null && third_percentageChk.value === null && forth_percentageChk.value === null && others_percentageChk.value === null){
	showErrorModal("Alert !", "Please select at least one administrative fraction");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].AdministrativeFractionPanel[0].first_percentageChk[0]");
}

else if(others_percentageChk.value !== null && others_percentage.value === null){
	showErrorModal("Alert !", "Please enter other value");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].DeanRecommendationPanel[0].AdministrativeFractionPanel[0].others_percentage[0]");
}
else if(third_party_electionCHK.value !== null && SupportingDocument1.fileAttachment.value === null){
	SupportingDocument1.mandatory = true;
	showErrorModal("Alert !", "Please attach at least one supporting document");
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].CharDirectorApplicationForm[0].SupportingDocumentsPanel[0].SupportingDocument1[0]");
}
else{
	submitMethod();
}
        }
	}
}
