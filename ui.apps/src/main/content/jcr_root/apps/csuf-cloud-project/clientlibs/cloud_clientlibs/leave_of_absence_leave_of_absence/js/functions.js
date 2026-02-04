/**
 * @function leave_of_absence_leave_of_absence.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            //HiddenCount.value = 0;
//var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none";  

if(StageIndicator.value === null){
    $.ajax({

      type: 'GET', 
      url:"/bin/getCaseID",
      dataType: 'json',

      success: function(myresponse){            
        caseId.value = myresponse.CASEID;

      	}
	}); 	
}


        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if(StageIndicator.value === null){  
	InternationlOfficeUseOnlyPanel.visible = false;
 	ASCOfficeUseOnlyPanel.visible = false;
  	RecordsOfficeSignaturePanel.visible = false;
  	GraduateStudiesSignaturePanel.visible = false;
  	RecordsOfficeSignaturePanel.visible = false;
  	approvalsAndSupportingTextForTwoSemesterGraduate.visible = false;
}

else if(StageIndicator.value == "ToInternationalStudies"){
	StudentInformationPanel.enabled = false;
  	StudentInformationPanel.enabled = false;  	
  	SupportingDocuments.enabled = false;
  	supDocErrorMessage.visible = false;
  	supDocMessage.visible = false;
	ASCOfficeUseOnlyPanel.visible = false;
  	RecordsOfficeSignaturePanel.visible = false;
  	GraduateStudiesSignaturePanel.visible = false;
  	approvalsAndSupportingTextForTwoSemesterGraduate.visible = false;
	
  	if(AcadCareer.value == "UGRD"){
       	UndergraduateAndSecondBachelorDegreePanel.visible = true;
      	UndergraduateAndSecondBachelorDegreePanel.enabled = false;
        GraduateDegreePanel.visible = false;
      	StudentSignaturePanel.enabled = false;
      	GraduateStudiesGroupUseOnly.visible = false;
      	UnderGraduatePolicyText.visible = true;
		GraduatePolicyText.visible = false;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;			
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
		
    }else if(AcadCareer.value == "PBAC"){
       	GraduateDegreePanel.visible = true;
		GraduateDegreePanel.enabled = false;
       	UndergraduateAndSecondBachelorDegreePanel.visible = false;
		StudentSignaturePanel.enabled = false;
      	UnderGraduatePolicyText.visible = false;
		GraduatePolicyText.visible = true;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
    } 
	
}
else if(StageIndicator.value == "ToASC"){
	StudentInformationPanel.enabled = false;
  	StudentInformationPanel.enabled = false;  	
  	SupportingDocuments.enabled = false;
  	supDocErrorMessage.visible = false;
  	supDocMessage.visible = false;
	InternationlOfficeUseOnlyPanel.visible = false;
  	RecordsOfficeSignaturePanel.visible = false;
  	GraduateStudiesSignaturePanel.visible = false;
  	approvalsAndSupportingTextForTwoSemesterGraduate.visible = false;
	
  	if(AcadCareer.value == "UGRD"){
       	UndergraduateAndSecondBachelorDegreePanel.visible = true;
      	UndergraduateAndSecondBachelorDegreePanel.enabled = false;
        GraduateDegreePanel.visible = false;
      	StudentSignaturePanel.enabled = false;
      	UnderGraduatePolicyText.visible = true;
		GraduatePolicyText.visible = false;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			InternationlOfficeUseOnlyPanel.enabled = false;
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
		
    }else if(AcadCareer.value == "PBAC"){
       	GraduateDegreePanel.visible = true;
		GraduateDegreePanel.enabled = false;
       	UndergraduateAndSecondBachelorDegreePanel.visible = false;
		StudentSignaturePanel.enabled = false;
      	UnderGraduatePolicyText.visible = false;
		GraduatePolicyText.visible = true;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			InternationlOfficeUseOnlyPanel.enabled = false;
			
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
    }
	
	
}
else if(StageIndicator.value == "ToGraduateStudies"){

  	StudentInformationPanel.enabled = false;
  	StudentInformationPanel.enabled = false;  	
  	SupportingDocuments.enabled = false;
  	supDocErrorMessage.visible = false;
  	supDocMessage.visible = false;
	InternationlOfficeUseOnlyPanel.visible = false;
  	RecordsOfficeSignaturePanel.visible = false;
	ASCOfficeUseOnlyPanel.enabled = false;
  	approvalsAndSupportingTextForTwoSemesterGraduate.visible = false;
	
  	if(AcadCareer.value == "UGRD"){
       	UndergraduateAndSecondBachelorDegreePanel.visible = true;
      	UndergraduateAndSecondBachelorDegreePanel.enabled = false;
        GraduateDegreePanel.visible = false;
      	StudentSignaturePanel.enabled = false;
      	UnderGraduatePolicyText.visible = true;
		GraduatePolicyText.visible = false;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			InternationlOfficeUseOnlyPanel.enabled = false;
		}else{
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
		
    }else if(AcadCareer.value == "PBAC"){
       	GraduateDegreePanel.visible = true;
		GraduateDegreePanel.enabled = false;
       	UndergraduateAndSecondBachelorDegreePanel.visible = false;
		StudentSignaturePanel.enabled = false;
      	UnderGraduatePolicyText.visible = false;
		GraduatePolicyText.visible = true;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			InternationlOfficeUseOnlyPanel.enabled = false;
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
    } 

}
else if(StageIndicator.value == "ToRecords"){
  	gifModal.style.display = "none";  
  	StudentCWID.enabled = false;
  	StudentInformationPanel.enabled = false;
  	SupportingDocuments.enabled = false;
  	supDocErrorMessage.visible = false;
  	supDocMessage.visible = false;
 	approvalsAndSupportingTextForTwoSemesterGraduate.visible = false;
	/*if(ASCOfficeComment.visible === true){
		ASCOfficeUseOnlyPanle.visible = true;
		ASCOfficeUseOnlyPanle.enabled = false;
	}else{
		ASCOfficeUseOnlyPanle.visible = false;	
	}*/
	
	if(InternationalOfficeSignatureCHK.value !== null){
		InternationlOfficeUseOnlyPanel.visible = true;
		InternationlOfficeUseOnlyPanel.enabled = false;
		
	}else{
		InternationlOfficeUseOnlyPanel.visible = false;
	}
  	
	if(GraduateStudiesSignatureCHK.value !== null){
		GraduateStudiesSignaturePanel.visible = true;
		GraduateStudiesSignaturePanel.enabled = false;
	}else{
		GraduateStudiesSignaturePanel.visible = false;
	}
  	
  	if(AcadCareer.value == "UGRD"){
       	UndergraduateAndSecondBachelorDegreePanel.visible = true;
      	UndergraduateAndSecondBachelorDegreePanel.enabled = false;
      	ASCOfficeUseOnlyPanel.visible = false;
        GraduateDegreePanel.visible = false;
      	StudentSignaturePanel.enabled = false;
      	//DepartmentChairSignaturePanel.visible = false;
      	//OfficeUseOnlyPanel.visible = true;
      	//GraduateStudiesGroupUseOnly.visible = false;
      	UnderGraduatePolicyText.visible = true;
		GraduatePolicyText.visible = false;
      	
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
		
    }else if(AcadCareer.value == "PBAC"){
       	GraduateDegreePanel.visible = true;
      	GraduateDegreePanel.enabled = false;
		StudentSignaturePanel.enabled = false;
       	UndergraduateAndSecondBachelorDegreePanel.visible = false;
      	ASCOfficeUseOnlyPanel.visible = true;
      	//OfficeUseOnlyPanel.visible = false;     	     	
      	UnderGraduatePolicyText.visible = false;
		GraduatePolicyText.visible = true;
		
		if(HiddenInterNationalFlag.value == "Y"){
			InternationlOfficeUseOnlyPanel.visible = true;
			
		}else if(HiddenInterNationalFlag.value == "N"){
			InternationlOfficeUseOnlyPanel.visible = false;
			
		}
    }  	
}

        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_guideRootPanel_init2 = function (scope) {
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
        var userValue = myresponse.userId;   
          if(StageIndicator.value === null){
            workflow_initiator.value = userValue;
          }
        //var userValue = 'alsuwaidi_humaid';  //Graduate - International
        //var userValue = 'shernandez';    //Multiple records - combination of Graduate & Undergraduate
        //var userValue = 'rawanalkanderi';    //Multiple records - Undergrauate - International
		//var userValue = 'hmoodalsaif';   //Undergraduate - International
		//var userValue = 'emilyhna'; //Graduate - Non-international
		//var userValue = 'frebba';   //PBAC - Grduate - Rare combination (PBAC & PB2BA)
         LogUser.value = userValue;

                $.ajax({

                    type: 'GET', 
                    url: '/bin/leaveOfAbsenceUserLookUp', 
                    data: {
                        userID: userValue
                    },

                    dataType: 'json', 
                    success: function(myresponse){
                       gifModal.style.display = "none";
						if(myresponse.length === 1){
					
							if(myresponse[0].ACAD_CAREER == "EXED"){
								showErrorModal("Alert !","No matching records found");
								
							}else if(myresponse[0].LOA_FLAG == 'N'){
								showErrorModal("Alert !","No matching records found");
								
							}
							else{
					
								  StudentCWID.value = myresponse[0].EMPLID;
								  StudentFirstName.value = myresponse[0].FIRST_NAME;
								  StudentLastName.value = myresponse[0].LAST_NAME;                             
								  StudentCellPhone.value = myresponse[0].CELL_PHONE;
								  StudentStreet.value = myresponse[0].Complete_Address; 
								  StudentCity.value = myresponse[0].CITY; 
								  StudentState.value = myresponse[0].STATE; 
								  ZipCode.value = myresponse[0].POSTAL;                         
								  StudentEmail.value = myresponse[0].PREF_EMAIL;                         	 
								  DegreeObjective.value = myresponse[0].PROGRAMS;  
								  ChairCWID.value = myresponse[0].CHAIR_EMPLID;
								  ChairName.value = myresponse[0].CHAIR_NAME;
								  ChairUserID.value = myresponse[0].CHAIR_USERID;
								  ChairEmail.value = myresponse[0].CHAIR_EMAIL;
								 // AcadCareer.value = myresponse[0].ACAD_CAREER;
								  HiddenDeptID.value = myresponse[0].DEPTID;
								  HiddenDeptName.value = myresponse[0].DEPTNAME;
								  HiddenAcadProg.value = myresponse[0].ACAD_PROG;
								  HiddenInterNationalFlag.value = myresponse[0].INTERNATIONAL_FLAG;
								  HiddenLOAFlag.value = myresponse[0].LOA_FLAG;
								  
								  var underGrad = myresponse[0].ACAD_CAREER;
								  var acadCareerValue;
								  
								  if(underGrad == "UGRD" && (HiddenAcadProg.value == "EECR" || HiddenAcadProg.value == "UGCSC" || HiddenAcadProg.value == "UGCSO" || HiddenAcadProg.value == "UGD" || HiddenAcadProg.value == "UGECT" || HiddenAcadProg.value == "UGED" || HiddenAcadProg.value == "UGT")){
										
										acadCareerValue = "UGRD";
										AcadCareer.value = "UGRD";
								  }
								  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "CS2BA" || HiddenAcadProg.value == "EE2BA" || HiddenAcadProg.value == "PB2BA" || HiddenAcadProg.value == "PBERT")){
										acadCareerValue = "UGRD";
										AcadCareer.value = "UGRD";
								  }
								  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "GRCSO" || HiddenAcadProg.value == "GRD" || HiddenAcadProg.value == "GRED" || HiddenAcadProg.value == "GROT" || HiddenAcadProg.value == "PBCRD" || HiddenAcadProg.value == "PBCRT" || HiddenAcadProg.value == "PBCSC" || HiddenAcadProg.value == "PBCT" || HiddenAcadProg.value == "PBECT" || HiddenAcadProg.value == "PBT" || HiddenAcadProg.value == "PBUND")){
										acadCareerValue = "PBAC";
										AcadCareer.value = "PBAC";
								  }
								  
								  if(acadCareerValue === "UGRD"){
										StudentStatusFlag.value = "UnderGrad";
										UndergraduateAndSecondBachelorDegreePanel.visible = true;
										UnderGraduatePolicyText.visible = true;
										GraduatePolicyText.visible = false;
										GraduateDegreePanel.visible = false;
								  }else if(acadCareerValue === "PBAC"){
										StudentStatusFlag.value = "Grad";
										GraduateDegreePanel.visible = true;
										GraduatePolicyText.visible = true;
										UnderGraduatePolicyText.visible = false;
										UndergraduateAndSecondBachelorDegreePanel.visible = false;
								  }
							}
					}
					else if(myresponse.length > 1){
						//if(myresponse[0].ACAD_CAREER == "EXED" || myresponse[0].LOA_FLAG == 'N'){
														  
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
												
												if(myresponse[n].ACAD_CAREER == "EXED"){
					
														showErrorModal("Alert !","No matching records found");
														
												}
												else if(myresponse[n].LOA_FLAG == 'N'){
									
														showErrorModal("Alert !","No matching records found");
														
												}
												else{
													  StudentCWID.value = myresponse[0].EMPLID;
													  StudentFirstName.value = myresponse[n].FIRST_NAME;
													  StudentLastName.value = myresponse[n].LAST_NAME;                             
													  StudentCellPhone.value = myresponse[n].CELL_PHONE;
													  StudentStreet.value = myresponse[n].Complete_Address; 
													  StudentCity.value = myresponse[n].CITY; 
													  StudentState.value = myresponse[n].STATE; 
													  ZipCode.value = myresponse[n].POSTAL;                          
													  StudentEmail.value = myresponse[n].PREF_EMAIL;        							  
													  DegreeObjective.value = myresponse[n].PROGRAMS;  
													  ChairCWID.value = myresponse[n].CHAIR_EMPLID;
													  ChairName.value = myresponse[n].CHAIR_NAME;
													  ChairUserID.value = myresponse[n].CHAIR_USERID;
													  ChairEmail.value = myresponse[n].CHAIR_EMAIL;
													  AcadCareer.value = myresponse[n].ACAD_CAREER;
													  HiddenDeptID.value = myresponse[n].DEPTID;
													  HiddenDeptName.value = myresponse[n].DEPTNAME;
													  HiddenAcadProg.value = myresponse[n].ACAD_PROG;
													  HiddenInterNationalFlag.value = myresponse[n].INTERNATIONAL_FLAG;
													  HiddenLOAFlag.value = myresponse[n].LOA_FLAG;    
													  //debugger;
													  var underGrad = myresponse[n].ACAD_CAREER;
													  var acadCareerValue;
													  
													  if(underGrad == "UGRD" && (HiddenAcadProg.value == "EECR" || HiddenAcadProg.value == "UGCSC" || HiddenAcadProg.value == "UGCSO" || HiddenAcadProg.value == "UGD" || HiddenAcadProg.value == "UGECT" || HiddenAcadProg.value == "UGED" || HiddenAcadProg.value == "UGT")){
															
															acadCareerValue = "UGRD";
															AcadCareer.value = "UGRD";
													  }
													  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "CS2BA" || HiddenAcadProg.value == "EE2BA" || HiddenAcadProg.value == "PB2BA")){
															
															acadCareerValue = "UGRD";
															AcadCareer.value = "UGRD";
													  }
													  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "GRCSO" || HiddenAcadProg.value == "GRD" || HiddenAcadProg.value == "GRED" || HiddenAcadProg.value == "GROT" || HiddenAcadProg.value == "PBCRD" || HiddenAcadProg.value == "PBCRT" || HiddenAcadProg.value == "PBCSC" || HiddenAcadProg.value == "PBCT" || HiddenAcadProg.value == "PBECT" || HiddenAcadProg.value == "PBERT" || HiddenAcadProg.value == "PBT" || HiddenAcadProg.value == "PBUND")){
															
															acadCareerValue = "PBAC";
															AcadCareer.value = "PBAC";
													  }
													  
													if(acadCareerValue === "UGRD"){
														
														StudentStatusFlag.value = "UnderGrad";
														UndergraduateAndSecondBachelorDegreePanel.visible = true;
														UnderGraduatePolicyText.visible = true;
														GraduatePolicyText.visible = false;
														GraduateDegreePanel.visible = false;
													}else if(acadCareerValue === "PBAC"){
														
														StudentStatusFlag.value = "Grad";
														GraduateDegreePanel.visible = true;
														GraduatePolicyText.visible = true;
														UnderGraduatePolicyText.visible = false;
														UndergraduateAndSecondBachelorDegreePanel.visible = false;
													}
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
						
					}else{
							showErrorModal("Alert !", "No matching records found");
					}
				}			
			});
		},
		error: function () {
			showErrorModal("Alert !", "No matching records found");
		}
	});
}
   
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentInformationPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentInformationPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentCWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentCWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	var userValue = this.value; 
	var underGrad;

		$.ajax({

			type: 'GET', 
			url: '/bin/leaveOfAbsenceCWIDLookUp', 
			data: {
				cwid: userValue
			},

			dataType: 'json', 
			success: function(myresponse){
				gifModal.style.display = "none";
				if(myresponse.length === 1){
					
					//if(myresponse[0].ACAD_CAREER == "EXED" || myresponse[0].LOA_FLAG == 'N'){
					if(myresponse[0].ACAD_CAREER == "EXED"){
							showErrorModal("Alert !","No matching records found");
					}
					else{
					
						  StudentCWID.value = myresponse[0].EMPLID;
						  StudentFirstName.value = myresponse[0].FIRST_NAME;
						  StudentLastName.value = myresponse[0].LAST_NAME;                             
						  StudentCellPhone.value = myresponse[0].CELL_PHONE;
						  StudentStreet.value = myresponse[0].Complete_Address; 
						  StudentCity.value = myresponse[0].CITY; 
						  StudentState.value = myresponse[0].STATE; 
						  ZipCode.value = myresponse[0].POSTAL;                         
						  StudentEmail.value = myresponse[0].PREF_EMAIL;                         	 
						  DegreeObjective.value = myresponse[0].PROGRAMS;  
						  ChairCWID.value = myresponse[0].CHAIR_EMPLID;
						  ChairName.value = myresponse[0].CHAIR_NAME;
						  ChairUserID.value = myresponse[0].CHAIR_USERID;
						  ChairEmail.value = myresponse[0].CHAIR_EMAIL;
						 // AcadCareer.value = myresponse[0].ACAD_CAREER;
						  HiddenDeptID.value = myresponse[0].DEPTID;
						  HiddenDeptName.value = myresponse[0].DEPTNAME;
						  HiddenAcadProg.value = myresponse[0].ACAD_PROG;
						  HiddenInterNationalFlag.value = myresponse[0].INTERNATIONAL_FLAG;
						  HiddenLOAFlag.value = myresponse[0].LOA_FLAG;
						  
						  var underGrad = myresponse[0].ACAD_CAREER;
						  var acadCareerValue;
						  
						  if(underGrad == "UGRD" && (HiddenAcadProg.value == "EECR" || HiddenAcadProg.value == "UGCSC" || HiddenAcadProg.value == "UGCSO" || HiddenAcadProg.value == "UGD" || HiddenAcadProg.value == "UGECT" || HiddenAcadProg.value == "UGED" || HiddenAcadProg.value == "UGT")){
								
								acadCareerValue = "UGRD";
								AcadCareer.value = "UGRD";
						  }
						  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "CS2BA" || HiddenAcadProg.value == "EE2BA" || HiddenAcadProg.value == "PB2BA")){
								acadCareerValue = "UGRD";
								AcadCareer.value = "UGRD";
						  }
						  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "GRCSO" || HiddenAcadProg.value == "GRD" || HiddenAcadProg.value == "GRED" || HiddenAcadProg.value == "GROT" || HiddenAcadProg.value == "PBCRD" || HiddenAcadProg.value == "PBCRT" || HiddenAcadProg.value == "PBCSC" || HiddenAcadProg.value == "PBCT" || HiddenAcadProg.value == "PBECT" || HiddenAcadProg.value == "PBERT" || HiddenAcadProg.value == "PBT" || HiddenAcadProg.value == "PBUND")){
								acadCareerValue = "PBAC";
								AcadCareer.value = "PBAC";
						  }
						  
						  if(acadCareerValue === "UGRD"){
								StudentStatusFlag.value = "UnderGrad";
								UndergraduateAndSecondBachelorDegreePanel.visible = true;
								UnderGraduatePolicyText.visible = true;
								GraduatePolicyText.visible = false;
								GraduateDegreePanel.visible = false;
						  }else if(acadCareerValue === "PBAC"){
								StudentStatusFlag.value = "Grad";
								GraduateDegreePanel.visible = true;
								GraduatePolicyText.visible = true;
								UnderGraduatePolicyText.visible = false;
								UndergraduateAndSecondBachelorDegreePanel.visible = false;
						  }
					}
				}
			   else if(myresponse.length > 1){
					//if(myresponse[0].ACAD_CAREER == "EXED" || myresponse[0].LOA_FLAG == 'N'){
					if(myresponse[0].ACAD_CAREER == "EXED"){
						
							showErrorModal("Alert !","No matching records found");
							
					}else{	
						  
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

								  StudentFirstName.value = myresponse[n].FIRST_NAME;
								  StudentLastName.value = myresponse[n].LAST_NAME;                             
								  StudentCellPhone.value = myresponse[n].CELL_PHONE;
								  StudentStreet.value = myresponse[n].Complete_Address; 
								  StudentCity.value = myresponse[n].CITY; 
								  StudentState.value = myresponse[n].STATE; 
								  ZipCode.value = myresponse[n].POSTAL;                          
								  StudentEmail.value = myresponse[n].PREF_EMAIL;        							  
								  DegreeObjective.value = myresponse[n].PROGRAMS;  
								  ChairCWID.value = myresponse[n].CHAIR_EMPLID;
								  ChairName.value = myresponse[n].CHAIR_NAME;
								  ChairUserID.value = myresponse[n].CHAIR_USERID;
								  ChairEmail.value = myresponse[n].CHAIR_EMAIL;
								  AcadCareer.value = myresponse[n].ACAD_CAREER;
								  HiddenDeptID.value = myresponse[n].DEPTID;
								  HiddenDeptName.value = myresponse[n].DEPTNAME;
								  HiddenAcadProg.value = myresponse[n].ACAD_PROG;
								  HiddenInterNationalFlag.value = myresponse[n].INTERNATIONAL_FLAG;
								  HiddenLOAFlag.value = myresponse[n].LOA_FLAG;    
								  //debugger;
								  var underGrad = myresponse[n].ACAD_CAREER;
								  var acadCareerValue;
								  
								  if(underGrad == "UGRD" && (HiddenAcadProg.value == "EECR" || HiddenAcadProg.value == "UGCSC" || HiddenAcadProg.value == "UGCSO" || HiddenAcadProg.value == "UGD" || HiddenAcadProg.value == "UGECT" || HiddenAcadProg.value == "UGED" || HiddenAcadProg.value == "UGT")){
										
										acadCareerValue = "UGRD";
										AcadCareer.value = "UGRD";
								  }
								  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "CS2BA" || HiddenAcadProg.value == "EE2BA" || HiddenAcadProg.value == "PB2BA")){
										
										acadCareerValue = "UGRD";
										AcadCareer.value = "UGRD";
								  }
								  else if(underGrad == "PBAC" && (HiddenAcadProg.value == "GRCSO" || HiddenAcadProg.value == "GRD" || HiddenAcadProg.value == "GRED" || HiddenAcadProg.value == "GROT" || HiddenAcadProg.value == "PBCRD" || HiddenAcadProg.value == "PBCRT" || HiddenAcadProg.value == "PBCSC" || HiddenAcadProg.value == "PBCT" || HiddenAcadProg.value == "PBECT" || HiddenAcadProg.value == "PBERT" || HiddenAcadProg.value == "PBT" || HiddenAcadProg.value == "PBUND")){
										
										acadCareerValue = "PBAC";
										AcadCareer.value = "PBAC";
								  }
								  
								if(acadCareerValue === "UGRD"){
									
									StudentStatusFlag.value = "UnderGrad";
									UndergraduateAndSecondBachelorDegreePanel.visible = true;
									UnderGraduatePolicyText.visible = true;
									GraduatePolicyText.visible = false;
									GraduateDegreePanel.visible = false;
								}else if(acadCareerValue === "PBAC"){
									
									StudentStatusFlag.value = "Grad";
									GraduateDegreePanel.visible = true;
									GraduatePolicyText.visible = true;
									UnderGraduatePolicyText.visible = false;
									UndergraduateAndSecondBachelorDegreePanel.visible = false;
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
						footerModal.appendChild(okButton);
			  }
				
			}else{
					showErrorModal("Alert !", "No matching records found");
			}
		}		
	});
}

        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentCellPhone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentCellPhone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentStreet_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentStreet_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_InitiatedDate_init0 = function (scope) {
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
    var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
    this.value = dateInitiated;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateDegreePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateDegreePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateOneSemesterCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateOneSemesterCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value){
      GraduateTwoSemesterCHK.value = null;
      GraduateTwoSemesterTerm1.value = null;
      GraduateTwoSemesterTerm2.value = null;
      GraduateTwoSemesterTerm1.enabled = false;
      GraduateTwoSemesterTerm2.enabled = false;
      GraduateOneSemesterTerm.enabled = true;
      PreviousLeaveRB.value = null;
      SemesterFall.value = 'Select an Option';
      SemesterSpring.value = 'Select an Option';
  }
  else{
      GraduateTwoSemesterTerm1.enabled = true;
      GraduateTwoSemesterTerm2.enabled = true;
      GraduateOneSemesterTerm.value = 'Select Term';
      GraduateOneSemesterTerm.enabled = false;
  }
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateTwoSemesterCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateTwoSemesterCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
      GraduateOneSemesterCHK.value = null; 
      GraduateOneSemesterTerm.value = null;
      GraduateOneSemesterTerm.enabled = false;
      GraduateTwoSemesterTerm1.enabled = true;
      GraduateTwoSemesterTerm2.enabled = true;

      approvalsAndSupportingTextForTwoSemesterGraduate.visible = true;

      PreviousLeaveRB.value = null;
      SemesterFall.value = 'Select an Option';
      SemesterSpring.value = 'Select an Option';
  }
  else{
      GraduateOneSemesterTerm.enabled = true;
      GraduateTwoSemesterTerm1.value = 'Select Term';
      GraduateTwoSemesterTerm2.value = 'Select Term';
      GraduateTwoSemesterTerm1.enabled = false;
      GraduateTwoSemesterTerm2.enabled = false;
      approvalsAndSupportingTextForTwoSemesterGraduate.visible = false;
  }
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateTwoSemesterTerm1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateTwoSemesterTerm1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == GraduateTwoSemesterTerm2.value && this.value !== 'Select Term'){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].GraduateDegreePanel[0].GraduateTwoSemesterTerm2[0]"); 
  	showErrorModal("Alert !", "Both the terms cannot be the same");
  	this.value = 'Select Term';
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateTwoSemesterTerm2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateTwoSemesterTerm2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == GraduateTwoSemesterTerm1.value && this.value !== 'Select Term'){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].GraduateDegreePanel[0].GraduateTwoSemesterTerm2[0]"); 
  	showErrorModal("Alert !", "Both the terms cannot be the same");
  	this.value = 'Select Term';
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_PreviousLeaveRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_PreviousLeaveRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "0"){
  	SemesterFall.value = 'Select an Option';
  	SemesterFall.enabled = false;
  	SemesterSpring.value = 'Select an Option'; 
  	SemesterSpring.enabled = false;
}
else{
  	SemesterFall.enabled = true;
  	SemesterSpring.enabled = true;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_UndergraduateAndSecondBachelorDegreePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_UndergraduateAndSecondBachelorDegreePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_OnesemesterCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_OnesemesterCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  TwosemesterCHK.value = null;
  TwoSemesterTerm1.enabled = false;
  TwoSemesterTerm2.enabled = false;
  OneSemesterTerm.enabled = true;
}
else{
  OneSemesterTerm.value = 'Select Term';
  TwoSemesterTerm1.enabled = true;
  TwoSemesterTerm2.enabled = true;
  OneSemesterTerm.enabled = false;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_TwosemesterCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_TwosemesterCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  OnesemesterCHK.value = null;
  OneSemesterTerm.enabled = false;
  TwoSemesterTerm1.enabled = true;
  TwoSemesterTerm2.enabled = true;
}else{
  OneSemesterTerm.enabled = true;
  TwoSemesterTerm1.value = 'Select Term';
  TwoSemesterTerm2.value = 'Select Term';
  TwoSemesterTerm1.enabled = false;
  TwoSemesterTerm2.enabled = false;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_TwoSemesterTerm1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_TwoSemesterTerm1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == TwoSemesterTerm2.value && this.value !== 'Select Term'){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].UndergraduateAndSecondBachelorDegreePanel[0].TwoSemesterTerm1[0]"); 
  	showErrorModal("Alert !", "Both the terms cannot be the same");
  	this.value = 'Select Term';
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_TwoSemesterTerm2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_TwoSemesterTerm2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == TwoSemesterTerm1.value && this.value !== 'Select Term'){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].UndergraduateAndSecondBachelorDegreePanel[0].TwoSemesterTerm2[0]"); 
  	showErrorModal("Alert !", "Both the terms cannot be the same");
  	this.value = 'Select Term';
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function leave_of_absence_leave_of_absence.generated_SupportingDocument1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_SupportingDocument1_valueCommit0 = function (scope) {
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
	  supDocErrorMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_SupportingDocument2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_SupportingDocument2_valueCommit0 = function (scope) {
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
	  supDocErrorMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_SupportingDocument3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_SupportingDocument3_valueCommit0 = function (scope) {
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
	  supDocErrorMessage.visible = false;	  
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
	StudentSignature.value = StudentFirstName.value + " " +StudentLastName.value;
	StudentSignature.enabled = false;
    if(StudentSignatureDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
                  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
              }).replace(/[^ -~]/g, '');
              var dateObject = new Date(dateString);
              var curyear = dateObject.getFullYear();
              var curyearMonth = dateObject.getMonth() + 1;
              var curyearDay = dateObject.getDate();
              var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
              StudentSignatureDate.value = d;*/

        $.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {				
              //StudentSignature.value = myresponse.userName;
              StudentSignatureDate.value = myresponse.SERVER_DATE;
          },
          error: function(error) {
            alert("error block=" + error);
          }
        });
        StudentSignature.enabled = false;

    } else {
        StudentSignatureDate.enabled = false;
        StudentSignature.enabled = false;
    }
}else{
    StudentSignatureDate.value = null;
    StudentSignature.value = null;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value === null){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  StudentSignature.value = myresponse.userName;
              }
          });    
	}
}

        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_InternationalOfficeSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_InternationalOfficeSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	InternationalOfficeSignature.enabled = false;

    if (InternationalOfficeDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
                  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
              }).replace(/[^ -~]/g, '');
              var dateObject = new Date(dateString);
              var curyear = dateObject.getFullYear();
              var curyearMonth = dateObject.getMonth() + 1;
              var curyearDay = dateObject.getDate();
              var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
              InternationalOfficeDate.value = d;*/

      $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {				
            InternationalOfficeSignature.value = myresponse.userName;
            InternationalOfficeDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
          	alert("error block=" + error);
        }
      });
      InternationalOfficeSignature.enabled = false;
      
    } else {
        InternationalOfficeDate.enabled = false;
        InternationalOfficeSignature.enabled = false;
    }
}else {
  	InternationalOfficeSignature.value = null;
  	InternationalOfficeDate.value = null;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_InternationalOfficeSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_InternationalOfficeSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToInternationalStudies"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  InternationalOfficeSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_InternationalOfficeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_InternationalOfficeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_ASCOfficeSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_ASCOfficeSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_ASCOfficeSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_ASCOfficeSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
//RecordsSignature.value = LogUser.value;
ASCOfficeSignature.enabled = false;

        if (ASCOfficeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            ASCOfficeDate.value = d;
            ASCOfficeSignature.enabled = false;
        } else {
            ASCOfficeDate.enabled = false;
            ASCOfficeSignature.enabled = false;
        }
}else {
  	ASCOfficeDate.value = null;
  	ASCOfficeSignature.value = null;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_ASCOfficeSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_ASCOfficeSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToASC"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  ASCOfficeSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_ASCOfficeDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_ASCOfficeDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateStudiesSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateStudiesSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	GraduateStudiesDeptSignature.enabled = false;

    if (GraduateStudiesDeptDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
                  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
              }).replace(/[^ -~]/g, '');
              var dateObject = new Date(dateString);
              var curyear = dateObject.getFullYear();
              var curyearMonth = dateObject.getMonth() + 1;
              var curyearDay = dateObject.getDate();
              var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
              GraduateStudiesDeptDate.value = d;*/

      $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {				
            GraduateStudiesDeptSignature.value = myresponse.userName;
            GraduateStudiesDeptDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
          alert("error block=" + error);
        }
      });
      GraduateStudiesDeptSignature.enabled = false;
      
    } else {
        GraduateStudiesDeptDate.enabled = false;
        GraduateStudiesDeptSignature.enabled = false;
    }
}else {
  	GraduateStudiesDeptSignature.value = null;
  	GraduateStudiesDeptDate.value = null;
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateStudiesSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateStudiesSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToGraduateStudies"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  GraduateStudiesDeptSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateStudiesDeptAction_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateStudiesDeptAction_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	HiddenApprovalStatus.value = "Yes"; 
}
else{
  	HiddenApprovalStatus.value = "No";
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_GraduateStudiesDeptDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_GraduateStudiesDeptDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_LOARecordsCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_LOARecordsCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	RecordsSignature.enabled = false;
 
    if (RecordsDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
                  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
              }).replace(/[^ -~]/g, '');
              var dateObject = new Date(dateString);
              var curyear = dateObject.getFullYear();
              var curyearMonth = dateObject.getMonth() + 1;
              var curyearDay = dateObject.getDate();
              var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
              RecordsDate.value = d;*/

      $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {				
            RecordsSignature.value = myresponse.userName;
            RecordsDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
          alert("error block=" + error);
        }
      });
      RecordsSignature.enabled = false;

    } else {
        RecordsDate.enabled = false;
        RecordsSignature.enabled = false;
    }
}else{
    RecordsDate.value = null;
    RecordsSignature.value = null;

   /* SecondaMajorCode.value = null;
    MajorBy.value = null;*/
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_LOARecordsCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_LOARecordsCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){
  	if(this.value == "1"){

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  RecordsSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_RecordsAction_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_RecordsAction_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	HiddenApprovalStatus.value = "Yes"; 
}
else{
  	HiddenApprovalStatus.value = "No";
}
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_RecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_RecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_HiddenFieldPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_HiddenFieldPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function leave_of_absence_leave_of_absence.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserId",
dataType: 'json',
success: function(myresponse){
  var userValue = myresponse.userId;
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
 * @function leave_of_absence_leave_of_absence.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
leave_of_absence_leave_of_absence.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = StudentFirstName.value +", " + StudentLastName.value + " " + StudentCWID.value;

EmailSubject.value = "Request for leave of absence - " + StudentCWID.value;

if(OnesemesterCHK.value !== null){
  	HiddenTermDescription.value = OneSemesterTerm.value;
}
else if(TwosemesterCHK.value !== null){
  	HiddenTermDescription.value = TwoSemesterTerm1.value + ", " + TwoSemesterTerm2.value;
}

if(GraduateOneSemesterCHK.value !== null){
  	HiddenTermDescription.value = GraduateOneSemesterTerm.value;
}
else if(GraduateTwoSemesterCHK.value !== null){
  	HiddenTermDescription.value = GraduateTwoSemesterTerm1.value + ", " + GraduateTwoSemesterTerm2.value;
}

var testEmail = "sapna.gupta@thoughtfocus.com";
//var testEmail = "rama.devi@thoughtfocus.com";
//var testEmail = "yashovardhan.jayaram@thoughtfocus.com";
//var testEmail = "yjayaram@fullerton.edu";

ChairEmail.value = testEmail;
StudentEmail.value = testEmail;


if(StudentStatusFlag.value == "UnderGrad" && OnesemesterCHK.value === null && TwosemesterCHK.value === null){
	showErrorModal("On Leave Of Absence Information Tab","Please specify at least one option to submit the leave of absence request");
}

else if(StudentStatusFlag.value == "UnderGrad" && OnesemesterCHK.value !== null && (OneSemesterTerm.value === null || OneSemesterTerm.value == 'Select Term')){
	showErrorModal("On Leave Of Absence Information Tab","Please select a term");   
}
else if(StudentStatusFlag.value == "UnderGrad" && TwosemesterCHK.value == "1" && (TwoSemesterTerm1.value === null || TwoSemesterTerm1.value == 'Select Term')){
	showErrorModal("On Leave Of Absence Information Tab", "Please select a term");
}
else if(StudentStatusFlag.value == "UnderGrad" && TwosemesterCHK.value == "1" && (TwoSemesterTerm2.value === null || TwoSemesterTerm2.value == 'Select Term')){
	showErrorModal("On Leave Of Absence Information Tab", "Please select a term");
}
else if(StudentStatusFlag.value == "UnderGrad" && UndergraduateReasonForLOA.value === null){
	showErrorModal("On Leave Of Absence Information Tab", "Please specify the reason for leave of absence request");
}
else if(StudentStatusFlag.value == "Grad" && GraduateReasonForLOA.value === null){	
	showErrorModal("On Leave Of Absence Information Tab", "Please specify the reason for leave of absence request");
}
else if(StudentStatusFlag.value == "Grad" && GraduateOneSemesterCHK.value === null && GraduateTwoSemesterCHK.value === null){
	showErrorModal("On Leave Of Absence Information Tab", "Please specify at least one option to submit the leave of absence request");
}
else if(StudentStatusFlag.value == "Grad" && GraduateOneSemesterCHK.value == "1" && (GraduateOneSemesterTerm.value === null || GraduateOneSemesterTerm.value == 'Select Term')){
	showErrorModal("On Leave Of Absence Information Tab", "Please select a term");
}
else if(StudentStatusFlag.value == "Grad" && GraduateTwoSemesterCHK.value == "1" && (GraduateTwoSemesterTerm1.value === null || GraduateTwoSemesterTerm1.value == 'Select Term')){
	showErrorModal("On Leave Of Absence Information Tab", "Please select a term");
}
else if(StudentStatusFlag.value == "Grad" && GraduateTwoSemesterCHK.value == "1" && (GraduateTwoSemesterTerm2.value === null || GraduateTwoSemesterTerm2.value == 'Select Term')){
	showErrorModal("On Leave Of Absence Information Tab", "Please select a term");
}
else if(StudentStatusFlag.value == "Grad" && PreviousLeaveRB.value === null){
	showErrorModal("On Leave Of Absence Information Tab","Please specify, Have you taken a previous leave?");
}

else if(StudentStatusFlag.value == "Grad" && GraduateOneSemesterCHK.value === "1" && PreviousLeaveRB.value == "1" && ((SemesterFall.value === null || SemesterFall.value == 'Select an Option') && (SemesterSpring.value === null || SemesterSpring.value == 'Select an Option'))){
	showErrorModal("On Leave Of Absence Information Tab","Please mention the semester(s) of any previous leave");
}
else if(StudentStatusFlag.value == "Grad" && GraduateTwoSemesterCHK.value == "1" && PreviousLeaveRB.value == "1" && ((SemesterFall.value === null || SemesterFall.value == 'Select an Option') || (SemesterSpring.value === null || SemesterSpring.value == 'Select an Option'))){
	showErrorModal("On Leave Of Absence Information Tab","Please mention the semester(s) of any previous leave");
}
else{
  
  	if (StudentStatusFlag.value == "Grad" && GraduateOneSemesterCHK.value == "1" && PreviousLeaveRB.value == "1" && SupportingDocument1.fileAttachment.value === null && SupportingDocument2.fileAttachment.value === null && SupportingDocument3.fileAttachment.value === null) {
       SupportingDocument1.fileAttachment.mandatory = "error";
       supDocErrorMessage.visible = true;  
       guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].SupportingDocuments[0].SupportingDocument1[0]");
    }
	else if (StudentStatusFlag.value == "Grad" && GraduateTwoSemesterCHK.value == "1" && SupportingDocument1.fileAttachment.value === null && SupportingDocument2.fileAttachment.value === null && SupportingDocument3.fileAttachment.value === null) {
       SupportingDocument1.fileAttachment.mandatory = "error";
       supDocErrorMessage.visible = true;  
       guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].SupportingDocuments[0].SupportingDocument1[0]");
    }
    else if(StudentStatusFlag.value == "UnderGrad" && SupportingDocument1.fileAttachment.value === null && SupportingDocument2.fileAttachment.value === null && SupportingDocument3.fileAttachment.value === null) {
       SupportingDocument1.fileAttachment.mandatory = "error";
       supDocErrorMessage.visible = true;  
       guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].LeaveOfAbsencePanel[0].SupportingDocuments[0].SupportingDocument1[0]");
    }else {
      SupportingDocument1.fileAttachment.mandatory = ""; 
      supDocErrorMessage.visible = false; 
    }
  
  	guideBridge.submit();
}	







        }
	}
}
