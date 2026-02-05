/**
 * @function petitions_petitions.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    FName.enabled = false;
    LastName.enabled = false;
    CWID.enabled = false;
    PhoneNumber.enabled = false;
    Address.enabled = false;
    City.enabled = false;
    State.enabled = false;
    Zipcode.enabled = false;
    //EmailAddress.enabled = false;
    Date_1.enabled = false;

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var button = document.getElementsByClassName("rb1");

    modal.style.display = "block";
    span.onclick = function() {

        if ((document.getElementById("button1").checked === false) && (document.getElementById("button2").checked === false) && (document.getElementById("button3").checked === false) /*&& (document.getElementById("button4").checked === false)*/ ) {
            modal.style.display = "block";
            showErrorModal("Alert!", "Please select the type of petition");

        } else {
            modal.style.display = "none";
        }
    };

    document.getElementById("button1").onclick = function() {
        PetitionAPanel.visible = true;
        PetitionBPanel.visible = false;
        PetitionCPanel.visible = false;
        PetitionDPanel.visible = false;
        PetitionType.value = "1";
        modal.style.display = "none";

        getStudentDetails(); //Function to make to $ajax call to get the information
    };

    document.getElementById("button2").onclick = function() {
        PetitionAPanel.visible = false;
        PetitionBPanel.visible = true;
        PetitionCPanel.visible = false;
        PetitionDPanel.visible = false;
        PetitionType.value = "2";
        modal.style.display = "none";

        getStudentDetails(); //Function to make to $ajax call to get the information
    };

    document.getElementById("button3").onclick = function() {
        PetitionAPanel.visible = false;
        PetitionBPanel.visible = false;
        PetitionCPanel.visible = true;
        PetitionDPanel.visible = false;
        PetitionType.value = "3";
        modal.style.display = "none";

        getStudentDetails(); //Function to make to $ajax call to get the information
    };

    /*document.getElementById("button4").onclick = function(){
		PetitionAPanel.visible = false;
		PetitionBPanel.visible = false;
		PetitionCPanel.visible = false;
		PetitionDPanel.visible = true;
		PetitionType.value = "4";
		modal.style.display = "none";
  
		getStudentDetails();   //Function to make to $ajax call to get the information
	};  */
}


//Function to make to $ajax call to get the information
function getStudentDetails() {
    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',
            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresponse) {

                gifModal.style.display = "block";
                //var userId = myresponse.userId;
                //var userId = "michelle.kao";  		// UnderGraduate Spring 2020, COVID-19, Petition B
                //var userId = "gvasquez11";  	// Graduate
                //var userId = "cheygarcia"; 		// UnderGraduate Spring 2019, Non-COVID-19 
                //var userId = 'anthonyvaldovinos17'; //Graduate Summer 2020, Non-COVID-19
                //var userId = 'j23torres'; // EIP='Y' Petition A
                var userId = 'stucker.ericd'; //EIP='Y' Graduate
                //var userId = 'normapena';   // EIP = 'N' & UGRD Petition A   
                //var userId = 'alygar';   // EIP = 'N' & PBAC Petition A
                //var userId = 'licastanos';   // User with current term 2215 data - Petition A - Graduate
                //var userId = 'JaredPSchneider'; // User with current term 2215 data - Petition A - UnderGraduate               
                //var userId = 'bhefner';james129
                //var userId = 'beckysuh'; //User with current term 2215 data - Petition A - UnderGraduate - EIP
				//var userId = 'james129';
				//var userId = 'sehamnabilsi';
				//userId = 'l.g_camacho';//prod sub error 12/19/2021
                StudentUserID.value = userId;
                workflow_initiator.value = userId;

                $.ajax({
                    type: 'GET',
                    url: "/bin/getPetitionInformation",
                    data: {
                        action: "USER_DETAILS",
                        userID: userId

                    },
                    dataType: 'json',

                    success: function(myresponse) {

                        var modal1 = document.getElementById('myModal1');
                        var span = document.getElementsByClassName("close1")[0];
                        var gifModal = document.getElementById('gifModal');

                        if (myresponse.length == 1) {
                            if (myresponse[0].ACAD_CAREER != "EXED") {
                                FName.value = myresponse[0].FIRST_NAME;
                                LastName.value = myresponse[0].LAST_NAME;
                                StudentFullName.value = FName.value + " " + LastName.value;
                                CWID.value = myresponse[0].EMPLID;
                                //EmailAddress.value = myresponse[0].PREF_EMAIL;
                                EmailAddress.value = "yjayaram@fullerton.edu";                                
                                if (myresponse[0].CELL_PHONE === undefined || myresponse[0].CELL_PHONE === null) {
                                    PhoneNumber.value = myresponse[0].HOME_PHONE;
                                } else {
                                    PhoneNumber.value = myresponse[0].CELL_PHONE;
                                }

                                Address.value = myresponse[0].ADDRESS1;
                                City.value = myresponse[0].CITY;
                                State.value = myresponse[0].STATE;
                                Zipcode.value = myresponse[0].POSTAL;
                                Programs.value = myresponse[0].PROGRAMS;
                                AcadCareer.value = myresponse[0].ACAD_CAREER;
                                EIPFlag.value = myresponse[0].EIP_FLG;
								college_name.value = myresponse[0].FUL_COLLEGE_NAME;
								college_code.value = myresponse[0].FUL_COLLEGE;
                                if (myresponse[0].ACAD_CAREER == "UGRD") {
                                    UndergraduateStudents.visible = true;
                                    GraduateStudents.visible = false;
                                } else {
                                    UndergraduateStudents.visible = false;
                                    GraduateStudents.visible = true;
                                }
                                gifModal.style.display = "none";
                            } else {
                                gifModal.style.display = "none";
                                showErrorModal("Alert!", "No matching records found");
                            }

                        } else if (myresponse.length > 1) {							
                            gifModal.style.display = "none";
                            modal1.style.display = "block";

                            var col = [];
                            col.push("EMPLID");
                            col.push("FIRST_NAME");
                            col.push("LAST_NAME");
                            col.push("ACAD_CAREER");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "CWID", "First_Name", "Last_Name", "Acad_Career"];
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


                                var tabCell1 = tr.insertCell(-1);
                                tabCell1.appendChild(button);
                                for (var l = 0; l < col.length; l++) {
                                    var tabCell = tr.insertCell(-1);
                                    tabCell.innerHTML = myresponse[k][col[l]];
                                }
                            }

                            var divContainer = document.getElementById("showData1");
                            divContainer.innerHTML = "";
                            divContainer.appendChild(table);

                            var footerModal = document.getElementById("modal_footer1");
                            var okButton = document.createElement("input");
                            okButton.type = "button";
                            okButton.setAttribute("class", "okBtn");
                            okButton.value = "Ok";
                            okButton.onclick = function(event) {

                                var n;
                                var rButtonStatus;
                                var rButtons = document.getElementsByClassName("rb");
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {

                                        if (myresponse[n].ACAD_CAREER != "EXED") {

                                            FName.value = myresponse[n].FIRST_NAME;
                                            LastName.value = myresponse[n].LAST_NAME;
                                            StudentFullName.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;
                                            CWID.value = myresponse[n].EMPLID;
                                            //EmailAddress.value = myresponse[n].PREF_EMAIL;                                            
                                            EmailAddress.value = "yjayaram@fullerton.edu";
                                            if (myresponse[n].CELL_PHONE === undefined || myresponse[n].CELL_PHONE === null) {
                                                PhoneNumber.value = myresponse[n].HOME_PHONE;
                                            } else {
                                                PhoneNumber.value = myresponse[n].CELL_PHONE;
                                            }
                                            Address.value = myresponse[n].ADDRESS1;
                                            City.value = myresponse[n].CITY;
                                            State.value = myresponse[n].STATE;
                                            Zipcode.value = myresponse[n].POSTAL;
                                            Programs.value = myresponse[n].PROGRAMS;
                                            AcadCareer.value = myresponse[n].ACAD_CAREER;
                                          	EIPFlag.value = myresponse[n].EIP_FLG;
                                          	college_name.value = myresponse[n].FUL_COLLEGE_NAME;
											college_code.value = myresponse[n].FUL_COLLEGE;
                                            if (myresponse[n].ACAD_CAREER == "UGRD") {
                                                UndergraduateStudents.visible = true;
                                                GraduateStudents.visible = false;
                                            } else {
                                                UndergraduateStudents.visible = false;
                                                GraduateStudents.visible = true;
                                            }
                                            rButtonStatus = true;
                                            modal1.style.display = "none";
                                            break;
                                        } else {
                                            gifModal.style.display = "none";
                                            showErrorModal("Alert!", "No matching records found");
                                        }
                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select appropriate ACAD_CAREER");
                                    modal1.style.display = "block";
                                }
                            };

                            footerModal.appendChild(okButton);

                        } else {
                            gifModal.style.display = "none";
                            showErrorModal("Alert!", "No matching records found");
                        }
                        ////////////////////////////////////////////
                    }
                });
            }
        });
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {      	
	StudentSignaturePanel.visible = true;
	InstructorSignaturePanel.visible = false;
	AssociateDeanSignaturePanel.visible = false;
	PetitionCoordinatorSignaturePanel.visible = false;
	GradStudiesOfficeSignaturePanel.visible = false; 
	EvaluatorsSignaturePanel.visible = false;
	EIPSignaturePanel.visible = false;
	RecordsSignatureSection.visible = false;
}
if (StageIndicator.value == "ToInstructor") { 
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
    
    PDF_Change_of_Grade_Panel.visible=true;
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;  
	AssociateDeanSignaturePanel.visible = false;
	PetitionCoordinatorSignaturePanel.visible = false;
	GradStudiesOfficeSignaturePanel.visible = false; 
	EvaluatorsSignaturePanel.visible = false;
	EIPSignaturePanel.visible = false;
	RecordsSignatureSection.visible = false;
	
	if(PetitionType.value == 3){
		petitionC_instructor_signChk.visible = true;
		InstructorAttachmentMessageText.visible = false;
		instructor_signChk.visible = false;
		
	}
	else{
		petitionC_instructor_signChk.visible = false;
		instructor_signChk.visible = true;	
		InstructorAttachmentMessageText.visible = true;
	}
}

if (StageIndicator.value == "ToAssociateDean") {
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;
	InstructorSignaturePanel.visible = true;
	InstructorSignaturePanel.enabled = false;
	GradStudiesOfficeSignaturePanel.visible = false;
	EvaluatorsSignaturePanel.visible = false;
	RecordsSignatureSection.visible = false;
	EIPSignaturePanel.visible = false;
	PetitionCoordinatorSignaturePanel.visible = false;
	
	if(PetitionType.value == 2 && AcadCareer.value == "PBAC"){
		InstructorSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	
	if(PetitionType.value == 3 && AcadCareer.value == "PBAC"){
		InstructorSignaturePanel.visible = true;
		InstructorSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	if(PetitionType.value == 3){
		petitionC_instructor_signChk.visible = true;
		InstructorAttachmentMessageText.visible = false;
		instructor_signChk.visible = false;
		
	}
	else{
		petitionC_instructor_signChk.visible = false;
		instructor_signChk.visible = true;	
		InstructorAttachmentMessageText.visible = true;
	}	
}

if (StageIndicator.value == "ToEvaluator") {
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;
	InstructorSignaturePanel.visible = false;		
	if(PetitionType.value == 2 && AcadCareer.value == "UGRD"){	
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = false;			
		GradStudiesOfficeSignaturePanel.visible = false;			
		EvaluatorsSignaturePanel.visible = true;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "PBAC"){				
		PetitionCoordinatorSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	if(dean_signature.value === null){
      	AssociateDeanSignaturePanel.visible = false;
    }	
  	else {
      	AssociateDeanSignaturePanel.visible = true;
      	AssociateDeanSignaturePanel.enabled = false;
    }
}

if (StageIndicator.value == "ToGraduateStudies") {
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;			
	if(PetitionType.value == 1 && AcadCareer.value == "PBAC"){
		InstructorSignaturePanel.visible = true; 
		InstructorSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	
	if(PetitionType.value == 2 && AcadCareer.value == "PBAC" && petitionB_grad_term.value == "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		PetitionCoordinatorSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}		
	else if(PetitionType.value == 2 && AcadCareer.value == "PBAC" && petitionB_grad_term.value != "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		PetitionCoordinatorSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	
	if(PetitionType.value == 3 && AcadCareer.value == "PBAC"){
		InstructorSignaturePanel.enabled = false;
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;						
		EvaluatorsSignaturePanel.visible = false;
		EIPSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = false;			
		RecordsSignatureSection.visible = false;
	}
	
	if(PetitionType.value == 1){
		petitionC_instructor_signChk.visible = false;
		instructor_signChk.visible = true;
		InstructorAttachmentMessageText.visible = true;
	}
	else {
		InstructorAttachmentMessageText.visible = false;
	}
  	
  	if(dean_signature.value === null){
      	AssociateDeanSignaturePanel.visible = false;
    }	
  	else {
      	AssociateDeanSignaturePanel.visible = true;
      	AssociateDeanSignaturePanel.enabled = false;
    }
}
if (StageIndicator.value == "ToEIP") { 
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;
	InstructorSignaturePanel.visible = true;
	InstructorSignaturePanel.enabled = false;
	PetitionCoordinatorSignaturePanel.visible = true;
	PetitionCoordinatorSignaturePanel.enabled = false;
	GradStudiesOfficeSignaturePanel.visible = false; 
	EvaluatorsSignaturePanel.visible = false;
	RecordsSignatureSection.visible = false;
	
	if(PetitionType.value == 1){
		petitionC_instructor_signChk.visible = false;
		instructor_signChk.visible = true;
		AssociateDeanSignaturePanel.visible = false;
	}
  
  	if(dean_signature.value === null){
      	AssociateDeanSignaturePanel.visible = false;
    }	
  	else {
      	AssociateDeanSignaturePanel.visible = true;
      	AssociateDeanSignaturePanel.enabled = false;
    }
}
if (StageIndicator.value == "ToPetitionCoordinator") { 
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;
	InstructorSignaturePanel.visible = true;
	InstructorSignaturePanel.enabled = false;
	if(PetitionType.value == 1 && AcadCareer.value == "UGRD"){
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;		
	}
	else if(PetitionType.value == 1 && AcadCareer.value == "PBAC" && EIPFlag.value == "Y"){
		GradStudiesOfficeSignaturePanel.visible = false;		
		AssociateDeanSignaturePanel.visible = false;		
		PetitionCoordinatorSignaturePanel.visible = true;		
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;		
	}
	else if(PetitionType.value == 1 && AcadCareer.value == "PBAC"){
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = true;		
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	
	if(PetitionType.value == 2 && AcadCareer.value == "UGRD" && petitionB_underGrad_term.value == "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;			
		GradStudiesOfficeSignaturePanel.visible = false;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "PBAC"  && petitionB_grad_term.value == "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "UGRD" && petitionB_underGrad_term.value != "Spring 2020"){
		InstructorSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = true;
		EvaluatorsSignaturePanel.enabled = false;
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;			
		GradStudiesOfficeSignaturePanel.visible = false;
		GradStudiesOfficeSignaturePanel.enabled = false;			
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "PBAC" && petitionB_grad_term.value != "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = false;
		EIPSignaturePanel.visible = false;
	}
	
	if(PetitionType.value == 3 && AcadCareer.value == "UGRD"){
		//InstructorSignaturePanel.visible = false;	
		AssociateDeanSignaturePanel.visible = false;
		GradStudiesOfficeSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = false;
		EIPSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		RecordsSignatureSection.visible = false;
		
	}
	else if(PetitionType.value == 3 && AcadCareer.value == "PBAC"){
		//InstructorSignaturePanel.visible = false;		
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;				
		EvaluatorsSignaturePanel.visible = false;
		EIPSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		RecordsSignatureSection.visible = false;
	}
	
	if(PetitionType.value == 1){
		petitionC_instructor_signChk.visible = false;
		instructor_signChk.visible = true;
		InstructorAttachmentMessageText.visible = true;
	}
	else {
		InstructorAttachmentMessageText.visible = false;
	}
	if(dean_signature.value === null){
      	AssociateDeanSignaturePanel.visible = false;
    }	
  	else {
      	AssociateDeanSignaturePanel.visible = true;
      	AssociateDeanSignaturePanel.enabled = false;
    }
}
if (StageIndicator.value == "ToRecords") {
	StudentInformation.enabled = false;
	PetitionInfo.enabled = false;
	attachment1.enabled = false;
	attachment2.enabled = false;
	petitionVisible();
  
	StudentSignaturePanel.visible = true;
	StudentSignaturePanel.enabled = false;
	InstructorSignaturePanel.visible = true;
	InstructorSignaturePanel.enabled = false;
	if(PetitionType.value == 1 && AcadCareer.value == "UGRD"){
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = false;		
		if(EIPFlag.value == "Y"){
			EIPSignaturePanel.visible = true;
			EIPSignaturePanel.enabled = false;
		}
		else{
			EIPSignaturePanel.visible = false;
		}
	}  
	else if(PetitionType.value == 1 && AcadCareer.value == "PBAC" && EIPFlag.value == "Y"){
		GradStudiesOfficeSignaturePanel.visible = false;		
		AssociateDeanSignaturePanel.visible = false;		
		PetitionCoordinatorSignaturePanel.visible = true;		
		PetitionCoordinatorSignaturePanel.enabled = false;		
		EvaluatorsSignaturePanel.visible = false;
		EIPSignaturePanel.visible = true;
		EIPSignaturePanel.enabled = false;
		RecordsSignatureSection.visible = true;
		
	}
	else if(PetitionType.value == 1 && AcadCareer.value == "PBAC"){
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = true;		
		PetitionCoordinatorSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;	
		if(EIPFlag.value == "Y"){
			EIPSignaturePanel.visible = true;
			EIPSignaturePanel.enabled = false;
		}
		else{
			EIPSignaturePanel.visible = false;
		}
		
	}
	
	if(PetitionType.value == 2 && AcadCareer.value == "UGRD" && petitionB_underGrad_term.value == "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = false;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = true;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "PBAC" && petitionB_grad_term.value == "Spring 2020"){
		InstructorSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = true;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "UGRD" && petitionB_underGrad_term.value != "Spring 2020"){
		InstructorSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = true;
		EvaluatorsSignaturePanel.enabled = false;
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = false;
		GradStudiesOfficeSignaturePanel.enabled = false;			
		RecordsSignatureSection.visible = true;
		EIPSignaturePanel.visible = false;
	}
	else if(PetitionType.value == 2 && AcadCareer.value == "PBAC" && petitionB_grad_term.value != "Spring 2020"){
		InstructorSignaturePanel.visible = false;	
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;
		EvaluatorsSignaturePanel.visible = false;
		RecordsSignatureSection.visible = true;
		EIPSignaturePanel.visible = false;
	}
	
	if(PetitionType.value == 3 && AcadCareer.value == "UGRD"){
		//InstructorSignaturePanel.visible = false;			
		GradStudiesOfficeSignaturePanel.visible = false;
		EvaluatorsSignaturePanel.visible = false;
		EIPSignaturePanel.visible = false;
		AssociateDeanSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		RecordsSignatureSection.visible = true;
		
	}
	else if(PetitionType.value == 3 && AcadCareer.value == "PBAC"){
		//InstructorSignaturePanel.visible = false;		
		AssociateDeanSignaturePanel.visible = true;
		AssociateDeanSignaturePanel.enabled = false;
		GradStudiesOfficeSignaturePanel.visible = true;
		GradStudiesOfficeSignaturePanel.enabled = false;				
		EvaluatorsSignaturePanel.visible = false;
		EIPSignaturePanel.visible = false;
		PetitionCoordinatorSignaturePanel.visible = true;
		PetitionCoordinatorSignaturePanel.enabled = false;
		RecordsSignatureSection.visible = true;
	}
	
	if(PetitionType.value == 1){
		petitionC_instructor_signChk.visible = false;
		instructor_signChk.visible = true;
		InstructorAttachmentMessageText.visible = true;
	}
	else {
		InstructorAttachmentMessageText.visible = false;
	}
  if(dean_signature.value === null){
      	AssociateDeanSignaturePanel.visible = false;
    }	
  	else {
      	AssociateDeanSignaturePanel.visible = true;
      	AssociateDeanSignaturePanel.enabled = false;
    }
}


function petitionVisible(){
	if(PetitionType.value == 1){
		PetitionAPanel.visible = true;
		PetitionBPanel.visible = false;
		PetitionCPanel.visible = false;
		PetitionDPanel.visible = false;
		add_button.visible = false;
		remove_button.visible = false;
	}
	else if(PetitionType.value == 2){			
		PetitionAPanel.visible = false;
		PetitionBPanel.visible = true;
		PetitionCPanel.visible = false;
		PetitionDPanel.visible = false;
	}
	else if(PetitionType.value == 3){
		PetitionAPanel.visible = false;
		PetitionBPanel.visible = false;
		PetitionCPanel.visible = true;
		PetitionDPanel.visible = false;
		InstructorSignaturePanel.visible = true;			
		petitionC_instructor_signChk.visible = true;
		instructor_signChk.visible = false;
	}
}

        }
	}
}
/**
 * @function petitions_petitions.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
    $.ajax({

      type: 'GET', 
      url:"/bin/getCaseID",
      dataType: 'json',

      success: function(myresponse){            
        CaseId.value = myresponse.CASEID;

      	}
	}); 	
}
        }
	}
}
/**
 * @function petitions_petitions.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_Date_1_init0 = function (scope) {
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
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  Date_1.value = d;
}
        }
	}
}
/**
 * @function petitions_petitions.generated_EmailAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_EmailAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_PetitionInfo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_PetitionInfo_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
if(AcadCareer.value == "UGRD"){
                        UndergraduateStudents.visible = true;
                        GraduateStudents.visible = false;
                      }else {
                        UndergraduateStudents.visible = false;
                        GraduateStudents.visible = true;
                      }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionA_term_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionA_term_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if ((this.value !== null) && (CWID.value !== null)) {
        var gifModal = document.getElementById('gifModal');
      	gifModal.style.display = "block";
        var term = this.value;
        var cwid = CWID.value;
        var allDetailsArray = [];
      	classNumber_list.value = null;
      	TermCode.value = null;
      	all_course_data.value = null;
      	
        var rowCount = petitionA_Row1.instanceManager.instanceCount; 
		for (var k = 0; k < rowCount; k++) {
        	petitionA_Row1.instanceManager.removeInstance(petitionA_Row1.instanceIndex);
        }
		
      	if(rowCount == 2){
          	petitionA_Row1.petitionA_scheduleNumber.value = null;
        	petitionA_Row1.petitionA_deptCourse.value = null;
        	petitionA_Row1.petitionA_instructorName.value = null;
        }
      	else{
        	petitionA_scheduleNumber.value = null;
        	petitionA_deptCourse.value = null;
        	petitionA_instructorName.value = null;
        }
        

        $.ajax({

            type: 'GET',
            url: "/bin/getPetitionInformation",
            dataType: 'json',

            data: {
                action: "COURSE_DETAILS",
                term: term,
                cwid: cwid
            },

            success: function(courseDetails) {
                if (courseDetails.length !== 0) {

                    for (var allDetailsValue = 0; allDetailsValue < courseDetails.length; allDetailsValue++) {
                        allDetailsArray.push(courseDetails[allDetailsValue]);
                        petitionA_all_courseData.value = JSON.stringify(allDetailsArray);
                    }


                    if (this.value !== null) {

                        var InfoArray = [];
                        var actualInfoArray = [];
                        var infoObj = {};

                        InfoArray = JSON.parse(petitionA_all_courseData.value);

                        for (var timeKeeperApprovingOfficialDetails = 0; timeKeeperApprovingOfficialDetails < InfoArray.length; timeKeeperApprovingOfficialDetails++) {

                            infoObj = InfoArray[timeKeeperApprovingOfficialDetails];

                            for (var key in infoObj) {

                                if (term == key) {
                                    actualInfoArray = infoObj[key].split(" - ");
                                    TermCode.value = actualInfoArray[0];
                                }
                            }
                        }
                    }
                    gifModal.style.display = "none";
                }
				gifModal.style.display = "none";
              	petitionA_scheduleNumber.enabled = true;
            }
        });
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionA_term_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionA_term_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if ((this.value !== null) && (CWID.value !== null)) {
        var gifModal = document.getElementById('gifModal');
		
		var termCode;
      	gifModal.style.display = "block";
      	classNumber_list.value = null;
      	TermCode.value = null;
      	all_course_data.value = null;
      	
        var rowCount = petitionA_Row1.instanceManager.instanceCount; 
		for (var k = 0; k < rowCount; k++) {
        	petitionA_Row1.instanceManager.removeInstance(petitionA_Row1.instanceIndex);
        }
		
      	if(rowCount == 2){
          	petitionA_Row1.petitionA_scheduleNumber.value = null;
        	petitionA_Row1.petitionA_deptCourse.value = null;
        	petitionA_Row1.petitionA_instructorName.value = null;
        }
      	else{
        	petitionA_scheduleNumber.value = null;
        	petitionA_deptCourse.value = null;
        	petitionA_instructorName.value = null;
        }
		
		if(this.value == "Fall 2018"){
			termCode = '2187';			
		}
		else if(this.value == "Spring 2019"){
			termCode = '2193';			
		}
		else if(this.value == "Summer 2019"){
			termCode = '2195';			
		}
		else if(this.value == "Fall 2019"){
			termCode = '2197';			
		}
		else if(this.value == "Winter 2019"){
			termCode = '2191';			
		}
		else if(this.value == "Spring 2020"){
			termCode = '2203';			
		}
		else if(this.value == "Summer 2020"){
			termCode = '2205';			
		}
		else if(this.value == "Fall 2020"){
			termCode = '2207';			
		}
		else if(this.value == "Winter 2020"){
			termCode = '2201';			
		}
		else if(this.value == "Spring 2021"){
			termCode = '2213';		
		}
		else if(this.value == "Summer 2021"){
			termCode = '2215';			
		}
		else if(this.value == "Fall 2021"){
			termCode = '2217';			
		}
		else if(this.value == "Winter 2021"){
			termCode = '2211';			
		}
      	else if(this.value == "Spring 2022"){
			termCode = '2223';		
		}
		
		TermCode.value = termCode;
		
        gifModal.style.display = "none";
        petitionA_scheduleNumber.enabled = true;
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionA_chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionA_chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var count = UGRDRow1.instanceManager.instanceCount;
var res = "";
        for (n = 0; n < count; n++) {
          if(UGRDRow1.instanceManager.instances[n].UGRDCB.value == "1"){
          if(res !== ""){
         res = res + ", "+ UGRDRow1.instanceManager.instances[n].UGRDDeptCourse.value ;
          }else{
            res = UGRDRow1.instanceManager.instances[n].UGRDDeptCourse.value ;
          }
            DeptCourse.value = res;
          }
          
        }
}
  
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionA_scheduleNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionA_scheduleNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

var classNumberValue = this.value;
var pattern = /^.\d{4}$/;
var result = pattern.test(classNumberValue);
var isDuplicate = false;
var courseDetails;
var termCode = TermCode.value;

if (StageIndicator.value === null) {
	gifModal.style.display = "block";
    if (petitionA_term.value === null) {
        showErrorModal("Alert !", "Please select a term taken");
      	gifModal.style.display = "none";
        this.value = null;
    } else {

        if (!classNumberValue) {
            result = false;
        }
        if (all_course_data.value === "null") {
            all_course_data.value = null;
        }

        if (classNumber_list.value) {
            if (classNumber_list.value.indexOf(classNumberValue) != -1) {
                showErrorModal("Alert !", "This Class Number is already added, Please add a different one");
                isDuplicate = true;
                this.value = null;
                this.enabled = true;
            } else {
                if (classNumberValue) {
                    classNumber_list.value = classNumber_list.value + "," + classNumberValue;
                }
            }
        } else {
            classNumber_list.value = classNumberValue;
        }

        if (!isDuplicate) {
            if (result === true) {               

                var term = petitionA_term.value;
                var rows = [];
                var strmVal = termCode;

                $.ajax({

                    type: 'GET',
                    url: '/bin/getPetitionInformation',
                    data: {
                        action: "CLASSNUMBER_DETAILS",
                        classNumber: classNumberValue,
                        strm: strmVal
                    },

                    dataType: 'json',
                    success: function(myresponse) {

                        var modal = document.getElementById('mySecondModal');
                        var span = document.getElementsByClassName("closeSecond")[0];
                        //var row = {}; 

                        if (myresponse.length === 1 && myresponse[0] !== null) {
                            petitionA_deptCourse.value = myresponse[0].CRSE_NAME;
                            petitionA_instructorName.value = myresponse[0].INSTR_NAME;

                            rows.push(myresponse[0]);
                            if (all_course_data.value !== null) {
                                all_course_data.value = all_course_data.value.substr(0, all_course_data.value.length - 1) + "," + JSON.stringify(myresponse[0]) + "]";
                            } else {
                                all_course_data.value = JSON.stringify(rows) ? JSON.stringify(rows) : '';
                            }
                            gifModal.style.display = "none";
                            modal.style.display = "none";
                        } else if (myresponse.length > 1) {
                            gifModal.style.display = "none";
                            modal.style.display = "block";

                            var hiddenInstructorFirstName = "";
                            var hiddenInstructorLastName = "";
                            var hiddenInstructorUserID = "";
                            var hiddenInstructorCWID = "";
                            var hiddenDepartmentCourse = "";
							var hiddenCourseName = "";
							var hiddenInstructorName = "";

                            var col = [];
                            col.push("INSTR_F_NAME");
                            col.push("INSTR_L_NAME");
                            col.push("INSTR_USERID");
                            col.push("INSTR_ID");
                            col.push("CRSE_NAME");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Instructor FName", "Instructor LName", "Instructor UserID", "Instructor CWID", "Course Name"];
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
                                    hiddenInstructorFirstName = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                                    hiddenInstructorLastName = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                                    hiddenInstructorUserID = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                                    hiddenInstructorCWID = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
                                    hiddenDepartmentCourse = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

                                };

                                var tabCell1 = tr.insertCell(-1);
                                tabCell1.appendChild(button);
                                for (var l = 0; l < col.length; l++) {
                                    var tabCell = tr.insertCell(-1);
                                    tabCell.innerHTML = myresponse[k][col[l]];
                                }
                            }

                            var divContainer = document.getElementById("showDataSecond");
                            divContainer.innerHTML = "";
                            divContainer.appendChild(table);


                            var footerModal = document.getElementById("modal_footer_second");
                            var okButton = document.createElement("input");
                            okButton.type = "button";
                            okButton.setAttribute("class", "okBtn");
                            //okButton.id = "okBtn";
                            okButton.value = "OK";
                            okButton.onclick = function(event) {
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
                                        rButtonStatus = false;
                                    } else {
                                        if (myresponse[n] !== null) {
                                            //hiddenDepartmentCourse = myresponse[n].CRSE_NAME;
                                            hiddenCourseName = myresponse[n].CRSE_NAME;
                                            hiddenInstructorName = myresponse[n].INSTR_NAME;

                                            rows.push(myresponse[n]);
                                            if (all_course_data.value !== null) {
                                                all_course_data.value = all_course_data.value.substr(0, all_course_data.value.length - 1) + "," + JSON.stringify(myresponse[n]) + "]";
                                            } else {
                                                all_course_data.value = JSON.stringify(rows);
                                            }
                                            //console.log(all_course_data.value);
                                        }

                                        rButtonStatus = true;
                                        break;

                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the instructor");
                                    modal.style.display = "block";
                                } else {

                                    petitionA_deptCourse.value = hiddenCourseName;
                                    petitionA_instructorName.value = hiddenInstructorName;

                                    modal.style.display = "none";
                                }
                            };
                            footerModal.appendChild(okButton);

                        } else {
                            //showErrorModal("Alert !","No matching records found, Please click on Remove Class Button and add a valid Class Number"); 
							
                            showErrorModal("Alert !", "No matching records found");							
                            petitionA_scheduleNumber.value = null;
                            petitionA_deptCourse.value = null;
                            petitionA_instructorName.value = null;
                            //TermCode.value = null;
                          	//classNumber_list.value = null;                           
							petitionA_scheduleNumber.enabled = true;
                          
                            gifModal.style.display = "none";
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
                                //  alert("Please select the instructor");
                                showErrorModal("Alert!", "Please select the instructor");
                                modal.style.display = "block";
                            } else {
                                showErrorModal("Alert!", "Please select the instructor");
                                // alert("Please select the department");
                                modal.style.display = "block";
                            }

                        };
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "block";
                            }
                        };


                        gifModal.style.display = "none";
                    },
					error: function (error) {                      	
                      	petitionA_scheduleNumber.value = "";
                      	petitionA_scheduleNumber.enabled = true;
						showErrorModal("Alert !", "No records found from error block");
						
					}
                });

            } else {
				if(this.value !== null){
					showErrorModal("Alert !", "Please enter a valid class number");
					gifModal.style.display = "none";
					petitionA_scheduleNumber.value = null;
					petitionA_scheduleNumber.enabled = true;
					//TermCode.value = null;
				}
            }
        }
        if (petitionA_scheduleNumber.value) {
            petitionA_scheduleNumber.enabled = false;
        }
        gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionA_deptCourse_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionA_deptCourse_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_add_button_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_add_button_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(petitionA_Row1.instanceManager.instanceCount >= 1 && petitionA_Row1.instanceManager.instanceCount <= 5){
   for(var count = 0; count < petitionA_Row1.instanceManager.instanceCount; count++){
      if(petitionA_Row1.instanceManager.instances[count]._children[1].value === null){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please add Class Number in existing row before adding new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	
  	if(isAddRowAllowed == true){
      	if(petitionA_Row1.instanceManager.instanceCount < 5){
          	petitionA_Row1.instanceManager.addInstance();
        }
      	else{
          	showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
      	   
		//RemoveClassNumber.enabled = true;
      
      	/*if(petitionA_Row1.instanceManager.instanceCount == 6){
            petitionA_Row1.instanceManager.removeInstance(Row1.instanceManager.instanceCount);
            showErrorModal("Alert !", "More than 5 rows cannot be added");	
        }*/
    }   	
}

        }
	}
}
/**
 * @function petitions_petitions.generated_remove_button_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_remove_button_click0 = function (scope) {
    with(this) {
        with(scope) {
            
try{
 
	var rowCount = petitionA_Row1.instanceManager.instanceCount;
	//Commented by Swathi on 06/06/2022 as a fix to the issue where popup comes up for duplicate class number
	//var lastRowClassNumber = petitionA_Row1.instanceManager.instances[rowCount-1]._children[0].value;
	var lastRowClassNumber = petitionA_Row1.instanceManager.instances[rowCount-1].petitionA_scheduleNumber.value;
    if(lastRowClassNumber){
		if(classNumber_list.value){
			classNumber_list.value = classNumber_list.value.replace(lastRowClassNumber,"");
		}	
	}
	
	if(rowCount > 1 && rowCount <= 5){	
		petitionA_Row1.instanceManager.removeInstance(rowCount-1);
		
		// remove from json array also
		var jsonArray = JSON.parse(all_course_data.value);      	
		for(var jsonArrayCount in jsonArray){          
			if((parseInt(jsonArrayCount) + 1) >= rowCount){        
				jsonArray.splice(jsonArrayCount, 1);              	
			}
		}
		all_course_data.value = JSON.stringify(jsonArray);      					
	}
	if(rowCount == 1){		
		petitionA_Row1.instanceManager.instances[0]._children[1].value = null;
		petitionA_Row1.instanceManager.instances[0]._children[2].value = null;
		petitionA_Row1.instanceManager.instances[0]._children[3].value = null;
		petitionA_Row1.instanceManager.instances[0]._children[1].enabled = true;
        classNumber_list.value = null;
		all_course_data.value = null; 
	}
}
catch(e){
}
        }
	}
}
/**
 * @function petitions_petitions.generated_peitionA_yes_chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_peitionA_yes_chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	peitionA_no_chk.value = "";
  	petitionA_question1_comment.enabled = true;
  	petitionA_question2_comment.enabled = true;
}
else{
  	petitionA_question1_comment.enabled = false;
  	petitionA_question2_comment.enabled = false;
  	petitionA_question1_comment.value = null;
    petitionA_question2_comment.value = null;
}
        }
	}
}
/**
 * @function petitions_petitions.generated_peitionA_no_chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_peitionA_no_chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	peitionA_yes_chk.value = "";
  	PetitionASection2Comment.enabled = true;
}
else{
  	PetitionASection2Comment.enabled = false;
  	PetitionASection2Comment.value = null;
}
        }
	}
}
/**
 * @function petitions_petitions.generated_UndergraduateStudents_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_UndergraduateStudents_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_underGrad_term_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_underGrad_term_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	var term = this.value;
  	var cwid = CWID.value;
  	var rowCount = petitionB_undergrad_Row1.instanceManager.instanceCount; 
  
  	for (var k = 0; k < rowCount; k++) {
      	petitionB_undergrad_Row1.instanceManager.removeInstance(petitionB_undergrad_Row1.instanceIndex);
    }
  	
    petitionB_undergrad_Row1.petitionB_undergrad_Chk.value = null;
    petitionB_undergrad_Row1.petitionB_undergrad_deptCourse.value = null;
    petitionB_undergrad_Row1.petitionB_undergrad_instructorName.value = null;
  	petitionB_undergrad_Row1.petitionB_undergrad_currentGrade.value = null;
  	petitionB_undergrad_Row1.petitionB_undergrad_currentGradeOfficial.value = null;
	
	$.ajax({
		
		type: 'GET',
		url: "/bin/getPetitionInformation",
		dataType: 'json',
		
		data: {
				action: "COURSE_DETAILS",
				term: term,
				cwid: cwid
		},
		
		success: function(courseDetails) {          	
			if (courseDetails.length > 0 && courseDetails[0] !== null) {              
				for (var i = 0; i < courseDetails.length; i++) { 
                  	if(courseDetails[i].CRSE_NAME !== undefined){                      	
                      	petitionB_undergrad_Row1.instanceManager.instances[i].petitionB_undergrad_deptCourse.value = courseDetails[i].CRSE_NAME;
                        petitionB_undergrad_Row1.instanceManager.instances[i].petitionB_undergrad_instructorName.value = courseDetails[i].INSTR_NAME;
                        petitionB_undergrad_Row1.instanceManager.instances[i].petitionB_undergrad_currentGrade.value = courseDetails[i].CURRENT_GRADE_INPUT;
                      	petitionB_undergrad_Row1.instanceManager.instances[i].petitionB_undergrad_currentGradeOfficial.value = courseDetails[i].CURRENT_GRADE;
                      
                      	TermCode.value = courseDetails[i].STRM;
                    }
                  	else{
                      	console.log("courseDetails[i].CRSE_NAME= " + courseDetails[i].CRSE_NAME);
                    }
                  
                  	gifModal.style.display = "none";
                  	if(petitionB_undergrad_Row1.instanceManager.instanceCount != courseDetails.length){
                      petitionB_undergrad_Row1.instanceManager.addInstance();
                    }                 	
				}
              	
				gifModal.style.display = "none";
		   }
		   else{
			   showErrorModal("Alert !","No matching records found");
			   gifModal.style.display = "none";
		   }
		}
	});
}
        }
	}
}
/**
 * @function petitions_petitions.generated_UndergraduateTablePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_UndergraduateTablePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(AcadCareer.value == "UGRD"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_Chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_Chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((PetitionCoordinatorSignaturePanel.visible == false) && (GradStudiesOfficeSignaturePanel.visible == false) && (EvaluatorsSignaturePanel.visible == false) && (RecordsSignatureSection.visible == false) && (EIPSignaturePanel.visible == false) && (AssociateDeanSignaturePanel.visible == false)) {   	
    var count = petitionB_undergrad_Row1.instanceManager.instanceCount;

    for (n = 0; n < count; n++) {
        if (petitionB_undergrad_Row1.instanceManager.instances[n].petitionB_undergrad_Chk.value == "1") {
            if (petitionB_undergrad_Row1.instanceManager.instances[n].petitionB_undergrad_currentGradeOfficial.value != 'CR' && petitionB_undergrad_Row1.instanceManager.instances[n].petitionB_undergrad_currentGradeOfficial.value != 'NC' && petitionB_underGrad_term.value != 'Spring 2020') {
                showErrorModal("Alert !", "You are not eligible to submit this Petition");
                this.value = null;
            }
        }
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_GE_chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_GE_chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
      petitionB_undergrad_TDA.enabled = true;
     // petitionB_undergrad_TDA.mandatory = "error";
      petitionB_undergrad_major_chk.value = "";
      petitionB_undergrad_minor_chk.value = "";      
  }else{
      petitionB_undergrad_TDA.value = null;
      petitionB_undergrad_TDA.enabled = false;
     // petitionB_undergrad_TDA.mandatory = "";
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_TDA_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_TDA_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_major_chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_major_chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
      petitionB_undergrad_major.enabled = true;
     // petitionB_undergrad_major.mandatory = "error";
      petitionB_undergrad_GE_chk.value = "";
      petitionB_undergrad_minor_chk.value = "";      
  }else{
      petitionB_undergrad_major.value = null;
      petitionB_undergrad_major.enabled = false;
      //petitionB_undergrad_major.mandatory = "";
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_major_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_major_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_minor_chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_minor_chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
      petitionB_undergrad_minor.enabled = true;
     // petitionB_undergrad_minor.mandatory = "error";
      petitionB_undergrad_major_chk.value = "";
      petitionB_undergrad_GE_chk.value = "";      
  }else{
      petitionB_undergrad_minor.value = null;
      petitionB_undergrad_minor.enabled = false;
     // petitionB_undergrad_minor.mandatory = "";
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_undergrad_minor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_undergrad_minor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_GraduateStudents_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_GraduateStudents_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_grad_term_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_grad_term_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
if (StageIndicator.value === null) {
	
  	gifModal.style.display = "block";
	var term = this.value;
  	var cwid = CWID.value;
  	var rowCount = petitionB_grad_Row1.instanceManager.instanceCount; 
  
  	for (var k = 0; k < rowCount; k++) {
      	petitionB_grad_Row1.instanceManager.removeInstance(petitionB_grad_Row1.instanceIndex);
    }
  	
    petitionB_grad_Row1.petitionB_grad_Chk.value = null;
    petitionB_grad_Row1.petitionB_grad_deptCourse.value = null;
    petitionB_grad_Row1.petitionB_grad_instructorName.value = null;  
    petitionB_grad_Row1.petitionB_grad_currentGrade.value = null;
  	petitionB_grad_Row1.petitionB_grad_currentGradeOfficial.value = null;
	
	$.ajax({
		
		type: 'GET',
		url: "/bin/getPetitionInformation",
		dataType: 'json',
		
		data: {
				action: "COURSE_DETAILS",
				term: term,
				cwid: cwid
		},
		
		success: function(courseDetails) {
			if (courseDetails.length > 0 && courseDetails[0] !== null) {								
				
				for (var i = 0; i < courseDetails.length; i++) {								
					petitionB_grad_Row1.instanceManager.instances[i].petitionB_grad_deptCourse.value = courseDetails[i].CRSE_NAME;
					petitionB_grad_Row1.instanceManager.instances[i].petitionB_grad_instructorName.value = courseDetails[i].INSTR_NAME;
                    petitionB_grad_Row1.instanceManager.instances[i].petitionB_grad_currentGrade.value = courseDetails[i].CURRENT_GRADE_INPUT;
                  	petitionB_grad_Row1.instanceManager.instances[i].petitionB_grad_currentGradeOfficial.value = courseDetails[i].CURRENT_GRADE;
                  
                  	TermCode.value = courseDetails[i].STRM;
                  
                  	if(petitionB_grad_Row1.instanceManager.instanceCount != courseDetails.length){
                      	petitionB_grad_Row1.instanceManager.addInstance();
                    }                 	
				}
              	
				gifModal.style.display = "none";
		   }
		   else{
			   showErrorModal("Alert !","No matching records found");
			   gifModal.style.display = "none";
		   }
		}
	});
}
        }
	}
}
/**
 * @function petitions_petitions.generated_GraduateTablePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_GraduateTablePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = false;
}else{
  if(AcadCareer.value != "UGRD"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_grad_Chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_grad_Chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if ((PetitionCoordinatorSignaturePanel.visible == false) && (GradStudiesOfficeSignaturePanel.visible == false) && (EvaluatorsSignaturePanel.visible == false) && (RecordsSignatureSection.visible == false) && (EIPSignaturePanel.visible == false) && (AssociateDeanSignaturePanel.visible == false)) {
    var count = petitionB_grad_Row1.instanceManager.instanceCount;

    for (n = 0; n < count; n++) {
        if (petitionB_grad_Row1.instanceManager.instances[n].petitionB_grad_Chk.value == "1") {
            if (petitionB_grad_Row1.instanceManager.instances[n].petitionB_grad_currentGradeOfficial.value != 'CR' && petitionB_grad_Row1.instanceManager.instances[n].petitionB_grad_currentGradeOfficial.value != 'NC' && petitionB_grad_term.value != 'Spring 2020') {
                showErrorModal("Alert !", "You are not eligible to submit this Petition");
                this.value = null;
            }
        }
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_grad_deptCourse_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_grad_deptCourse_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_grad_instructorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_grad_instructorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_grad_attachmentYes_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_grad_attachmentYes_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    if(this.value == "1"){
         petitionB_grad_attachmentNo.value = null;
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionB_grad_attachmentNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionB_grad_attachmentNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    if(this.value == "1"){
         petitionB_grad_attachmentYes.value = "";         
    }
}


        }
	}
}
/**
 * @function petitions_petitions.generated_petitionC_term_taken_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionC_term_taken_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {

	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	var term = this.value;
  	var cwid = CWID.value;
  	var allDetailsArray = [];
  	var rowCount = petitionC_Row1.instanceManager.instanceCount; 
  
  	for (var k = 0; k < rowCount; k++) {
      	petitionC_Row1.instanceManager.removeInstance(petitionC_Row1.instanceIndex);
    }
  	
    petitionC_Row1.petitionC_Chk.value = null;
    petitionC_Row1.petitionC_deptCourse.value = null;
    petitionC_Row1.petitionC_instructorName.value = null;
	petitionC_Row1.petitionC_scheduleNumber.value = null;
	petitionC_Row1.petitionC_row_number.value = null;
  	petitionC_Row1.petitionC_unit_value_From.value = null;
  	petitionC_Row1.petitionC_unit_value_To.value = null;
  
	$.ajax({
		
		type: 'GET',
		url: "/bin/getPetitionInformation",
		dataType: 'json',
		
		data: {
				action: "COURSE_DETAILS",
				term: term,
				cwid: cwid
		},
		
		success: function(courseDetails) {
			if (courseDetails.length > 0 && courseDetails[0] !== null) {								
				var count=0;
				for (var i = 0; i < courseDetails.length; i++) {
                  	count++;
					petitionC_Row1.instanceManager.instances[i].petitionC_deptCourse.value = courseDetails[i].CRSE_NAME;
					petitionC_Row1.instanceManager.instances[i].petitionC_instructorName.value = courseDetails[i].INSTR_NAME;
					petitionC_Row1.instanceManager.instances[i].petitionC_scheduleNumber.value = courseDetails[i].CLASS_NBR;
                  	petitionC_Row1.instanceManager.instances[i].petitionC_unit_value_From.value = courseDetails[i].UNT_TAKEN;
                  	petitionC_Row1.instanceManager.instances[i].petitionC_row_number.value = count;
                  
                  	if(petitionC_Row1.instanceManager.instanceCount != courseDetails.length){
                      petitionC_Row1.instanceManager.addInstance();
                    }
                  
                  	TermCode.value = courseDetails[i].STRM;
                  
                  	allDetailsArray.push(courseDetails[i]);
                  	all_course_data.value = JSON.stringify(allDetailsArray);
				}
				gifModal.style.display = "none";
		   }
		   else{
			   showErrorModal("Alert !","No matching records found");
			   gifModal.style.display = "none";
		   }
		}
	});
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionC_Chk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionC_Chk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
var count = UGRDRow1.instanceManager.instanceCount;
var res = "";
        for (n = 0; n < count; n++) {
          if(UGRDRow1.instanceManager.instances[n].UGRDCB.value == "1"){
          if(res !== ""){
         res = res + ", "+ UGRDRow1.instanceManager.instances[n].UGRDDeptCourse.value ;
          }else{
            res = UGRDRow1.instanceManager.instances[n].UGRDDeptCourse.value ;
          }
            DeptCourse.value = res;
          }
          
        }
}
  
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionC_deptCourse_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionC_deptCourse_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionC_instructorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionC_instructorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (StudentCB.value == "1") {
   $.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			student_signature.value = FName.value + " " + LastName.value;
            student_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
        student_signDate.enabled = false;       
        student_signature.enabled = false; 
            
} else {
    student_signDate.value = "";
    student_signature.value = "";
   
}
}
        }
	}
}
/**
 * @function petitions_petitions.generated_student_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_student_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_student_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_student_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petitionC_instructor_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petitionC_instructor_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToInstructor"){
	if (this.value == "1") {      
  
      	$.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			instructor_signature.value = myresponse.userName;
            instructor_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		instructor_signDate.enabled = false; 
		instructor_signature.enabled = false;   
	} else{
		instructor_signDate.value = "";
		instructor_signature.value = "";
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_instructor_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_instructor_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToInstructor"){
	if (this.value == "1") { 
      
      	showErrorModal("Alert !", "Please attach the grade change form (in left pane under Task Details) if you have not attached as it is important to process this Petition A request");
  
      	$.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			instructor_signature.value = myresponse.userName;
            instructor_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		instructor_signDate.enabled = false; 
		instructor_signature.enabled = false;   
	} else{
		instructor_signDate.value = "";
		instructor_signature.value = "";
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_instructor_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_instructor_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_instructor_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_instructor_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_dean_SignChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_dean_SignChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToAssociateDean"){
	if (this.value == "1") {
    
     	$.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			dean_signature.value = myresponse.userName;
            dean_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		dean_signDate.enabled = false; 
		dean_signature.enabled = false;           
  } else {
      dean_signDate.value = "";
      dean_signature.value = "";
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_dean_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_dean_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_dean_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_dean_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_graduate_studies_SignChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_graduate_studies_SignChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToGraduateStudies"){
	if (this.value == "1") {
    
     	$.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			grad_office_signature.value = myresponse.userName;
            grad_office_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		grad_office_signDate.enabled = false; 
		grad_office_signature.enabled = false;           
  } else {
      grad_office_signDate.value = "";
      grad_office_signature.value = "";
  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_grad_office_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_grad_office_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_grad_office_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_grad_office_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_evaluator_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_evaluator_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEvaluator"){
if (this.value == "1") {
    
      $.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			evaluator_signature.value = myresponse.userName;
            evaluator_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		evaluator_signDate.enabled = false; 
		evaluator_signature.enabled = false;  
    
  } else {
      evaluator_signDate.value = "";
      evaluator_signature.value = "";

  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_evaluator_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_evaluator_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_evaluator_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_evaluator_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petition_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petition_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPetitionCoordinator"){
	if (this.value == "1") {
      
      $.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			petition_coord_signature.value = myresponse.userName;
            petition_coord_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		petition_coord_signDate.enabled = false; 
		petition_coord_signature.enabled = false;
    
	} else{
		petition_coord_signDate.value = "";
		petition_coord_signature.value = "";
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_petition_coord_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petition_coord_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_petition_coord_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_petition_coord_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_eip_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_eip_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToEIP"){
if (this.value == "1") {
    
      $.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			eip_signature.value = myresponse.userName;
            eip_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		eip_signDate.enabled = false; 
		eip_signature.enabled = false;  
    
  } else {
      eip_signDate.value = "";
      eip_signature.value = "";

  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_eip_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_eip_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_eip_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_eip_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_records_signChk_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_records_signChk_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){
	if (this.value == "1") {
    
      	$.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {			  
			records_signature.value = myresponse.userName;
            records_signDate.value = myresponse.SERVER_DATE;			
          },
          error: function(error) {
            alert("error block=" + error);
          }  
		});
		
		records_signDate.enabled = false; 
		records_signature.enabled = false; 
  } else {
      records_signDate.value = "";
      records_signature.value = "";

  }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_records_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_records_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_records_signDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_records_signDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_SupportingDocuments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  	this.visible = true;
}
else{
  	this.visible = false;
}
        }
	}
}
/**
 * @function petitions_petitions.generated_attachment1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_attachment1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {

    var filePath = attachment1.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    
    extension = extension.toLowerCase();
    if (extension !== "pdf") {

        attachment1.fileAttachment.value = null;

        showErrorModal("Alert!", "Only PDF files are allowed");
    }

    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(attachment1.fileAttachment.value) === true) {
        var doc1NewName = attachment1.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        attachment1.fileAttachment.value = doc1NewName;
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_attachment2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_attachment2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = attachment2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    
    extension = extension.toLowerCase();
    if (extension !== "pdf") {

        attachment2.fileAttachment.value = null;

        showErrorModal("Alert!", "Only PDF files are allowed");
    }
    var format = /[&{}#!@$%^=;\[\]]/;
    if (format.test(attachment2.fileAttachment.value) === true) {
        var doc2NewName = attachment2.fileAttachment.value.replace(/#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '-');
        attachment2.fileAttachment.value = doc2NewName;
    }
}
        }
	}
}
/**
 * @function petitions_petitions.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function petitions_petitions.generated_DeptCourse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_DeptCourse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null ) {
   
            var term = TermTaken.value;
  			var cwid = CWID.value;
  			var course = DeptCourse.value;
            $.ajax({
                type: 'GET',
                url: "/bin/getInstructorData",
                data: {
                    cwid: cwid,
                    course: course,
                    term: term                   
                    
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length !== 0) {
                        InstName.value = myresopnse[0].INSTR_NAME;
                        InstructorName.value = myresopnse[0].INSTR_NAME;
                        InstructorEmail.value = myresopnse[0].INSTR_EMAIL;
                        InstructorUserId.value = myresopnse[0].INSTR_USERID;
                      	TermCode.value = myresopnse[0].TERM_CODE;
                        gifModal.style.display = "none";

                    } else {
                        gifModal.style.display = "none";
                        InstName.value = "";
                        InstructorName.value = "";
                        InstructorEmail.value = "";
                        InstructorUserId.value = "";
                      TermCode.value = "";
                        showErrorModal("Alert!", "No matcing records found");
                    }
                    ////////////////////////////////////////////


                }
            });      

    
}
        }
	}
}
/**
 * @function petitions_petitions.generated_college_code_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_college_code_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {

    var collageCode = this.value;

    $.ajax({
        type: 'GET',
        url: "/bin/getPetitionInformation",
        data: {
            action: "DEAN_DETAILS",
            collegeCode: collageCode

        },
        dataType: 'json',

        success: function(response) {

            if (response.length > 0) {              	
              	if(collageCode == "10093"){
                  	DeanName.value = "Aimee Nelson";
                	DeanUserId.value = 'anelson';
                	DeanEmail.value = 'anelson@FULLERTON.EDU';
                }
              	else{
                  	DeanName.value = response[0].EMPNAME;
                	DeanUserId.value = response[0].EMP_USERID;
                	DeanEmail.value = response[0].EMP_EMAIL;
                }                
            }
        }
    });
}
        }
	}
}
/**
 * @function petitions_petitions.generated_submit1608529416101_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petitions_petitions.generated_submit1608529416101_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(PetitionType.value == 1){
	petitionAValidations();	
}
else if(PetitionType.value == 2){
	petitionBValidations();	
}
else if(PetitionType.value == 3){
	petitionCValidations();
}

/* Submit action function implementation*/
function submitMethod(){
	var petitionTypeVal;
	var courseNumberList = [];
	 	
	if(PetitionType.value == 1){
		petitionTypeVal = "A";
		
		if(petitionA_term.value !== null){
			var rowCount = petitionA_Row1.instanceManager.instanceCount;		
		
			for(var petitionA=0; petitionA<rowCount;petitionA++){
				courseNumberList.push(petitionA_Row1.instanceManager.instances[petitionA]._children[2].value);
			}
		}		
		course_name.value = courseNumberList;
      
      	//petitionA_instructorEmail.value = "yjayaram@fullerton.edu";
	}
	else if(PetitionType.value == 2){
		petitionTypeVal = "B";
		
		if(petitionB_underGrad_term.value !== null){
			var underGradRowCount = petitionB_undergrad_Row1.instanceManager.instanceCount;
			
			for(var underGradPetitionB=0; underGradPetitionB<underGradRowCount;underGradPetitionB++){
				courseNumberList.push(petitionB_undergrad_Row1.instanceManager.instances[underGradPetitionB]._children[1].value);
			}
		}
		else if(petitionB_grad_term.value !== null){
			var gradRowCount = petitionB_grad_Row1.instanceManager.instanceCount;
			
			for(var gradPetitionB=0; gradPetitionB<gradRowCount;gradPetitionB++){
				courseNumberList.push(petitionB_grad_Row1.instanceManager.instances[gradPetitionB]._children[1].value);
			}
		}
		course_name.value = courseNumberList;		
	}
	else if(PetitionType.value == 3){
		petitionTypeVal = "C";
		
		if(petitionC_term_taken.value !== null){
			var petitionCRowCount = petitionC_Row1.instanceManager.instanceCount;		
		
			for(var petitionC=0; petitionC<petitionCRowCount;petitionC++){
				courseNumberList.push(petitionC_Row1.instanceManager.instances[petitionC]._children[1].value);
			}
		}		
		course_name.value = courseNumberList;
      	//petitionC_instructorEmail.value = "yjayaram@fullerton.edu";
      	
	}
	
	aftiaDescCWID.value = StudentFullName.value+ " " + CWID.value;
	EmailSubject.value = "Test - Request for Petition - " + petitionTypeVal;
  	if(DeanName.value === null){
      	DeanName.value = "Admin Admin";
    }
  	if(DeanUserId.value === null){
      	DeanUserId.value = 'admin';
    }
  
  	//var testEmail = "ajeet.chhonkar@thoughtfocus.com";
  	var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
  	DeanEmail.value = testEmail;
  	EmailAddress.value = testEmail;
  
	guideBridge.submit();
}


/* Petition A Validation function implementation*/
function petitionAValidations(){		
  	var rowCount = petitionA_Row1.instanceManager.instanceCount;
	if(petitionA_term.value === null){
		showErrorModal("Alert!","Please select the term");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].sectionAPanel[0].petitionA_term[0]");
	}	
	else if(peitionA_yes_chk.value === null && peitionA_no_chk.value === null){
		showErrorModal("Alert!","Please specify if you attempted to register for this class during any of the standard time periods during the semester");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].titanOnlinePanel[0].peitionA_yes_chk[0]");
	}else if((peitionA_yes_chk.value !== null) && (petitionA_question1_comment.value === null)){
		showErrorModal("Alert!","Please describe the steps depending on the attempt you selected above");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].titanOnlinePanel[0].petitionA_question1_comment[0]");
	}
	else if((peitionA_yes_chk.value !== null) && (petitionA_question2_comment.value === null)){
		showErrorModal("Alert!","Please provide the confirmation");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].titanOnlinePanel[0].petitionA_question2_comment[0]");
	}
	else if((peitionA_no_chk.value !== null) && (PetitionASection2Comment.value === null)){
		showErrorModal("Alert!","Please explaing the reason");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].titanOnlinePanel[0].PetitionASection2Comment[0]");
	}
  	else if(rowCount == 1 && petitionA_Row1.instanceManager.instances[0]._children[1].value === null){		
		//if(petitionA_Row1.instanceManager.instances[0]._children[1].value === null){
			showErrorModal("Alert!","Please enter at least one course number");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].sectionAPanel[0].PetitionATable[0].petitionA_Row1[0].petitionA_scheduleNumber[0]");
		//}
	}
else{
      	
		submitMethod();		   
	}
}




/* Petition B Validation function implementation*/
function petitionBValidations(){
  	
	if(AcadCareer.value == "UGRD" && petitionB_underGrad_term.value === null){
		showErrorModal("Alert!","Please select the term");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].UndergraduateStudents[0].petitionB_underGrad_term[0]");
	}
	else if(AcadCareer.value == "UGRD" && petitionB_undergrad_GE_chk.value === null && petitionB_undergrad_major_chk.value  === null && petitionB_undergrad_minor_chk.value === null){
		showErrorModal("Alert!","This course needs a letter grade in order to meet a requirement for");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].UndergraduateStudents[0].petitionB_undergrad_GE_chk[0]");
	}
	/*else if(petitionB_undergrad_GE_chk.value == "1" && petitionB_undergrad_TDA.value === null){
		showErrorModal("Alert!","Please indicate the section on the TDA that this coures meets");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].UndergraduateStudents[0].petitionB_undergrad_TDA[0]");
	}else if(petitionB_undergrad_major_chk.value == "1" && petitionB_undergrad_major.value === null){
		showErrorModal("Alert!","Please indicate the section within your major that this course meets");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].UndergraduateStudents[0].petitionB_undergrad_major[0]");
	}else if(petitionB_undergrad_minor_chk.value == "1" && petitionB_undergrad_minor.value === null){
		showErrorModal("Alert!","Please indicate the declared minor");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].UndergraduateStudents[0].petitionB_undergrad_minor[0]");
	}*/
	else if(AcadCareer.value != "UGRD" && petitionB_grad_term.value === null){
		showErrorModal("Alert!","Please select the term");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].GraduateStudents[0].petitionB_grad_term[0]");
	}
  	else if(AcadCareer.value != "UGRD" && petitionB_grad_attachmentYes.value === null && petitionB_grad_attachmentNo.value === null){
      	showErrorModal("Alert!","Please mention, if you want to attach copy of study plan");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].GraduateStudents[0].petitionB_grad_attachmentYes[0]");
    }
	else if(AcadCareer.value != "UGRD" && petitionB_grad_attachmentYes.value == "1" && attachment1.fileAttachment.value === null){
		attachment1.fileAttachment.mandatory = "error";
		showErrorModal("Alert!","Please attach a copy of study plan");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].SupportingDocuments[0].attachment1[0]");
	}
  	/*else if(AcadCareer.value != "UGRD" && petitionB_grad_attachmentNo.value == "1"){
		attachment1.fileAttachment.mandatory = null;		
	}	*/	
	else if(AcadCareer.value != "UGRD" && petitionB_grad_term.value !== null){      
		var rowCount = petitionB_grad_Row1.instanceManager.instanceCount;
		var res = false;
	  
		for (n = 0; n < rowCount; n++) {
			if(petitionB_grad_Row1.instanceManager.instances[n].petitionB_grad_Chk.value == "1"){
				res = true;
				break;
			}
			else{
				res = false;
			}  
		}
		
		if(res === false){           
			showErrorModal("Alert!","Please select atleast one graduate course");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].GraduateStudents[0].GraduateTablePanel[0].PetitionBGradTable[0].petitionB_grad_Row1[0].petitionB_grad_Chk[0]");
			
		}
		else{			
			for (n = 0; n < rowCount; n++) {			
				for (k = 0; k < petitionB_grad_Row1.instanceManager.instanceCount; k++) {
					if(petitionB_grad_Row1.instanceManager.instances[k].petitionB_grad_Chk.value != "1"){			  petitionB_grad_Row1.instanceManager.removeInstance(k);
					}  
				}
			}
			submitMethod();
		}		
	}		
	else if(AcadCareer.value == "UGRD" && petitionB_underGrad_term.value !== null){
		
		var underGradRowCount = petitionB_undergrad_Row1.instanceManager.instanceCount;
		var underGrads = false;
		for (n = 0; n < underGradRowCount; n++) {
			if(petitionB_undergrad_Row1.instanceManager.instances[n].petitionB_undergrad_Chk.value == "1"){
				underGrads = true;
				break;
			}
			else{
				underGrads = false;
			}  
		}
		if(underGrads === false){
			showErrorModal("Alert!","Please select atleast one underGraduate course");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionBPanel[0].UndergraduateStudents[0].UndergraduateTablePanel[0].PetitionBUnderGradTable[0].petitionB_undergrad_Row1[0].petitionB_undergrad_Chk[0]");
			
		}
		else{			
			for (n = 0; n < underGradRowCount; n++) {                      
				for (k = 0; k < petitionB_undergrad_Row1.instanceManager.instanceCount; k++) {
					if(petitionB_undergrad_Row1.instanceManager.instances[k].petitionB_undergrad_Chk.value != "1"){			  
						petitionB_undergrad_Row1.instanceManager.removeInstance(k);
					}  
				}
			} 
			submitMethod();
		}		
	}	
}
	


/* Petition C Validation function implementation*/
function petitionCValidations(){	
	if(petitionC_term_taken.value === null){
		showErrorModal("Alert!","Please select the term");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionCPanel[0].sectionAPanel[0].petitionC_term_taken[0]");
	}
	else{
		   
		var rowCount = petitionC_Row1.instanceManager.instanceCount;
		var res = false;
	  
		for (n = 0; n < rowCount; n++) {
			if(petitionC_Row1.instanceManager.instances[n].petitionC_Chk.value == "Yes"){
				res = true;
				break;
			}
			else{
				res = false;
			}  
		}
		
		if(res === false){           
			showErrorModal("Alert!","Please select atleast one course");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionCPanel[0].sectionAPanel[0].PetitionCCourseInformationTable[0].petitionC_Row1[0].petitionC_Chk[0]");
			
		}
		else{				
			for (n = 0; n < rowCount; n++) {				
				for (k = 0; k < petitionC_Row1.instanceManager.instanceCount; k++) {
					if(petitionC_Row1.instanceManager.instances[k].petitionC_Chk.value != "Yes"){				  
						petitionC_Row1.instanceManager.removeInstance(k);
					}  
				}
			}
			fieldValidations();			
		}
	}
}

function fieldValidations(){	
	if(petitionC_Row1.petitionC_unit_value_To.value === null){
		showErrorModal("Alert!","Please enter unit value change To");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionCPanel[0].sectionAPanel[0].petitionC_unit_value_To[0]");
	}else if(petitionC_reason.value === null){
		showErrorModal("Alert!","Please mention the reason of retroactively change of the unit value for this class");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionCPanel[0].SectionBPanel[0].petitionC_reason[0]");
	}
	else{
		rowNumberCheck();
		addDataToJson();
      	submitMethod();
	}
}



function rowNumberCheck(){
	var rowCount = petitionC_Row1.instanceManager.instanceCount;
	var n;
	var finalArray = []; 

	for (n = 0; n < rowCount; n++) {
				
		var rowNumber = petitionC_Row1.instanceManager.instances[n].petitionC_row_number.value;						
		var jArray = JSON.parse(all_course_data.value);			
		var jObject = {};						
		
		for(var a = 0; a < jArray.length; a++){
			jObject = jArray[a];			
			
			for(var key in jObject){                	                  
				if(rowNumber == key){					
					finalArray.push(jArray[a]);         
				}                 	                  	
			}              	
		}          			
	}
	//console.log("finalArray- " +  finalArray);
	final_course_data.value = JSON.stringify(finalArray);
}

function addDataToJson(){  
  var jArray = JSON.parse(final_course_data.value);
  var jObject = {};
  
  for(var ab=0; ab<jArray.length; ab++){		
		jObject = jArray[ab];
    	jObject["UNIT_TO"] = petitionC_Row1.instanceManager.instances[ab]._children[5].value;		
  } 
  final_course_data.value = JSON.stringify(jArray);	
}


function validateClassNumber(rowCount){	
	if(rowCount == 1){		
		if(petitionA_Row1.instanceManager.instances[0]._children[1].value === null){
			showErrorModal("Alert!","Please enter at least one course number");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].sectionAPanel[0].PetitionATable[0].petitionA_Row1[0].petitionA_scheduleNumber[0]");
		}
	}
	else{
		if(petitionA_scheduleNumber.value === null){
			showErrorModal("Alert!","Please enter at least one course number");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].PetitionInfo[0].PetitionAPanel[0].sectionAPanel[0].PetitionATable[0].petitionA_Row1[0].petitionA_scheduleNumber[0]");
		}
	}
}
        }
	}
}
