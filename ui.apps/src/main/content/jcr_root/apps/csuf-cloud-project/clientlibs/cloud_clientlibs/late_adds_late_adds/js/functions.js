/**
 * @function late_adds_late_adds.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            //HiddenCount.value = 0;
var gifModal = document.getElementById('gifModal');
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
 * @function late_adds_late_adds.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            

var gifModal = document.getElementById('gifModal');

LateAddsDetailsTable.Row2.visible = false;

if (StageIndicator.value === null){  
  	InstructorSignaturePanel.visible = false;
  	DepartmentChairSignaturePanel.visible = false;
  	AssociateDeanSignaturePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  	DSOSignaturePanel.visible = false;
  	EIPGroupUseOnlyPanel.visible = false;  
  	StudentCellPhone.enabled = false;
  	
}
else if(StageIndicator.value == "ToInstructor"){
  	gifModal.style.display = "none";  
  	StudentCWID.enabled = false;
  	StudentCellPhone.enabled = false;
  	StudentInformationPanel.enabled = false;
  	LateAddsInformationPanel.enabled = false;  	
  	StudentSignaturePanel.enabled = false;
  	InstructorSignaturePanel.visible = true;
  	DepartmentChairSignaturePanel.visible = false;
  	AssociateDeanSignaturePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  	DSOSignaturePanel.visible = false;
  	EIPGroupUseOnlyPanel.visible = false;
  	AddClassNumber.visible = false;
  	RemoveClassNumber.visible = false;
  	AddClassNumber.visible = false;
  	RemoveClassNumber.visible = false;
  	//alert("above eip ");
  	if(EIPFlag.value == "Yes"){
    	RecommendedTextInstructor.visible = false;
		RecommendedTextChair.visible = false;
		RecommendedTextDean.visible = false;      	
      	StudentInformationTextForEIP.visible = true;
      	StudentInformationTextForNonEIP.visible = false;
      	EIPSignatureNote.visible = true;
    }
  	else{   
      	
      	EIPSignatureNote.visible = false;
      	StudentInformationTextForNonEIP.visible = true;
      	
    }
}
else if(StageIndicator.value == "ToChair"){
  	gifModal.style.display = "none";  
  	StudentCWID.enabled = false;
  	StudentCellPhone.enabled = false;
  	StudentInformationPanel.enabled = false;
  	LateAddsInformationPanel.enabled = false; 	  	
  	StudentSignaturePanel.enabled = false;
  	InstructorSignaturePanel.visible = true;
  	InstructorSignaturePanel.enabled = false;
  	DepartmentChairSignaturePanel.visible = true;
  	AssociateDeanSignaturePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  	DSOSignaturePanel.visible = false;
  	EIPGroupUseOnlyPanel.visible = false;
    AddClassNumber.visible = false;
  	RemoveClassNumber.visible = false;
    if(EIPFlag.value == "Yes"){
      	RecommendedTextInstructor.visible = false;
		RecommendedTextChair.visible = false;
		RecommendedTextDean.visible = false; 
      	EIPSignatureNote.visible = true;
      	StudentInformationTextForEIP.visible = true;    
      	StudentInformationTextForNonEIP.visible = false;

    }
  	else{   	
      	
      	EIPSignatureNote.visible = false;
      	StudentInformationTextForEIP.visible = false;
      	StudentInformationTextForNonEIP.visible = true;
      	
    }
}
else if(StageIndicator.value == "ToDean"){

  	gifModal.style.display = "none";  
  	StudentCWID.enabled = false;
  	StudentCellPhone.enabled = false;
  	StudentInformationPanel.enabled = false;
  	LateAddsInformationPanel.enabled = false;  	
  	StudentSignaturePanel.enabled = false;    
  	InstructorSignaturePanel.visible = true;
  	InstructorSignaturePanel.enabled = false;
  	DepartmentChairSignaturePanel.visible = true;
  	DepartmentChairSignaturePanel.enabled = false;     	   
  	AssociateDeanSignaturePanel.visible = true;
  	RecordsOfficeUseOnlyPanel.visible = false;
  	DSOSignaturePanel.visible = false;
  	EIPGroupUseOnlyPanel.visible = false;
  	AddClassNumber.visible = false;
  	RemoveClassNumber.visible = false;
  	if(EIPFlag.value == "Yes"){
      	RecommendedTextInstructor.visible = false;
		RecommendedTextChair.visible = false;
		RecommendedTextDean.visible = false; 
      	StudentInformationTextForEIP.visible = true;    
      	StudentInformationTextForNonEIP.visible = false;
      	EIPSignatureNote.visible = true;
    }
  	else{   	
      	StudentInformationTextForEIP.visible = false;    
      	StudentInformationTextForNonEIP.visible = true;
      	EIPSignatureNote.visible = false;
      	
    }
}

else if(StageIndicator.value == "ToRecords"){

  	gifModal.style.display = "none";   	
  	StudentCWID.enabled = false;
  	StudentCellPhone.enabled = false;
  	StudentInformationPanel.enabled = false;
  	LateAddsInformationPanel.enabled = false; 
  	StudentSignaturePanel.enabled = false;
  	InstructorSignaturePanel.visible = true;
  	InstructorSignaturePanel.enabled = false;
  	DepartmentChairSignaturePanel.visible = true;
  	DepartmentChairSignaturePanel.enabled = false;
  	RecordsOfficeUseOnlyPanel.visible = true;
  	AssociateDeanSignaturePanel.visible = true;
  	AssociateDeanSignaturePanel.enabled = false;  	
  	//DSOSignaturePanel.visible = true;  	
  	EIPGroupUseOnlyPanel.visible = true;

/*  	if(EIPFlag.value != "Yes"){
      	RecordsOfficeUseOnlyPanel.visible = true;
    }else{
      	RecordsOfficeUseOnlyPanel.visible = false;
    }*/
  	AddClassNumber.visible = false;
  	RemoveClassNumber.visible = false;
  	if(EIPFlag.value == "Yes"){
      	EIPGroupUseOnlyPanel.visible = true;      	
        EIPDetailsPanel.enabled = false;
        SectionA.enabled = false;
        SectionB.enabled = false;
        SectionC.enabled = false;
      	EIPSignatureNote.visible = true;
      	RecordsOfficeUseOnlyPanel.visible = false;
      	RecommendedTextInstructor.visible = false;
		RecommendedTextChair.visible = false;
		RecommendedTextDean.visible = false; 
      	StudentInformationTextForEIP.visible = true;    
      	StudentInformationTextForNonEIP.visible = false;
      	EIPDetailsPanel.visible = true;
      	if(OUFlag.value == "Yes"){
          	ForEIPUseOnly.visible = true;
        }else{
          	ForEIPUseOnly.visible = false;
        }
    }else{      	
      	EIPGroupUseOnlyPanel.visible = false;
      	EIPSignatureNote.visible = false;
      	RecordsOfficeUseOnlyPanel.visible = true;
      	StudentInformationTextForEIP.visible = false;    
      	StudentInformationTextForNonEIP.visible = true;
    }
  	
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_guideRootPanel_init2 = function (scope) {
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
          //Temporary fix to address student id Cedric's issue
          if(userValue == "Cedric" || userValue == "cedric") 
          {
             userValue = "cedric" ;
          }
          
          if(userValue == "lreniker") {
            userValue = "Lreniker";
          }
          //**********************************************
          var userValue = 'lynnyng';     // NON-EIP
         // var userValue = 'michellemelschau';  //EIP
         
          //Added to convert logged in student user id to lower case
          userValue = userValue.toLowerCase();
          //*****************************************************
          
          LogUser.value = userValue;
           if(StageIndicator.value === null){
                    workflow_initiator.value = userValue;
                  }
          //Exceptions
          //Uncomment line 35 to 39 to block students from submission
          //10/12/2020 - Opening up for EIP special cases
          //if(userValue == "djponce") {
            //userValue = "djponce";
          //} else {
            //userValue = "testUserID";
          //}

                $.ajax({

                    type: 'GET', 
                    url: '/bin/lateAddsUserLookUp', 
                    data: {
                        userID: userValue
                    },

                    dataType: 'json', 
                    success: function(myresponse){
                        gifModal.style.display = "none";
						
                        if(myresponse.length == 1){
                              StudentCWID.value = myresponse[0].EMPLID;
                          	  StudentCWID.enabled = false;
                          	  EIPStudentID.value = myresponse[0].EMPLID;
                              StudentFirstName.value = myresponse[0].FIRST_NAME;
                          	  EIPStudentFirstName.value = myresponse[0].FIRST_NAME; 
                          	  EIPStudentLastName.value = myresponse[0].LAST_NAME;
                              StudentLastName.value = myresponse[0].LAST_NAME;
                              StudentHomePhone.value = myresponse[0].HOME_PHONE; 
                              WorkOtherTelephone.value = myresponse[0].WORK_OTR_PHONE;
                              StudentCellPhone.value = myresponse[0].CELL_PHONE;
                              StudentAddress.value = myresponse[0].Complete_Address; 
                              StudentCity.value = myresponse[0].CITY; 
                              StudentState.value = myresponse[0].STATE; 
                              ZipCode.value = myresponse[0].POSTAL;                         
                              StudentEmail.value = myresponse[0].PREF_EMAIL;	                                                         	  
                              DegreeObjective.value = myresponse[0].DEGREE; 
                              Major.value = myresponse[0].PROGRAMS;
                          
                          	  hiddenStudentFullNameForSignature.value = StudentFirstName.value + " " + StudentLastName.value;
                          	 
							 if(myresponse[0].EIP_FLAG == "Y"){							
								EIPFlag.value = "Yes";                        	
								EIPSignatureNote.visible = true;
								EIPDetailsPanel.visible = true;
								StudentInformationTextForEIP.visible = true;
								StudentInformationTextForNonEIP.visible = false;
								if(myresponse[0].OU_FLAG == "Y"){                               	
									ForEIPUseOnly.visible = true;
									OUFlag.value = "Yes";
								}                        	
							}else{
									
							     EIPSignatureNote.visible = false;
								 StudentInformationTextForNonEIP.visible = true;
								 StudentInformationTextForEIP.visible = false;                        	
							  }	
						} else if(myresponse.length > 1){
                        var modal = document.getElementById('myModal');
                        var myHeader = document.getElementById('pheader');
                        myHeader.innerHTML = "Please select the program";
                var span = document.getElementsByClassName("close")[0];
                        gifModal.style.display = "none";
modal.style.display = "block";

var col = [];

col.push("EMPLID");

col.push("PROGRAMS");

col.push("DEGREE");

var table = document.createElement("table");
table.id = "tb";
var tr = table.insertRow(-1);
var headings = ["", "Student Identification Number(CWID)", "Program", "Degree"];
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

    var n;
    var rButtonStatus;
    var rButtons = document.getElementsByClassName("rb");
    for (n = 0; n < rButtons.length; n++) {
        if (rButtons[n].checked === false) {
            rButtonStatus = false;
        } else {

           StudentCWID.value = myresponse[n].EMPLID;
StudentCWID.enabled = false;
EIPStudentID.value = myresponse[n].EMPLID;
StudentFirstName.value = myresponse[n].FIRST_NAME;
EIPStudentFirstName.value = myresponse[n].FIRST_NAME;
EIPStudentLastName.value = myresponse[n].LAST_NAME;
StudentLastName.value = myresponse[n].LAST_NAME;
StudentHomePhone.value = myresponse[n].HOME_PHONE;
WorkOtherTelephone.value = myresponse[n].WORK_OTR_PHONE;
StudentCellPhone.value = myresponse[n].CELL_PHONE;
StudentAddress.value = myresponse[n].Complete_Address;
StudentCity.value = myresponse[n].CITY;
StudentState.value = myresponse[n].STATE;
ZipCode.value = myresponse[n].POSTAL;
StudentEmail.value = myresponse[n].PREF_EMAIL;	 
DegreeObjective.value = myresponse[n].DEGREE;
Major.value = myresponse[n].PROGRAMS;

hiddenStudentFullNameForSignature.value = StudentFirstName.value + " " + StudentLastName.value;

if (myresponse[n].EIP_FLAG == "Y") {
    EIPFlag.value = "Yes";
    EIPSignatureNote.visible = true;
    EIPDetailsPanel.visible = true;
    StudentInformationTextForEIP.visible = true;
    StudentInformationTextForNonEIP.visible = false;
    if (myresponse[n].OU_FLAG == "Y") {
        ForEIPUseOnly.visible = true;
        OUFlag.value = "Yes";
    }
} else {

    EIPSignatureNote.visible = false;
    StudentInformationTextForNonEIP.visible = true;
    StudentInformationTextForEIP.visible = false;
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
var footerModal = document.getElementById("modal_footer");

footerModal.appendChild(okButton);
                      }
                      	else{
                 			//showErrorModal("Alert !", "The late add submission period is over for Fall 2020");
                 			showErrorModal("Alert !", "No matching records found");
               			}
					}					
                });
        }
    });
}

        }
	}
}
/**
 * @function late_adds_late_adds.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentInformationPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentInformationPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentInformationTextForEIP_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentInformationTextForEIP_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentCWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentCWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
	
	 var userValue = this.value;    
	 
		$.ajax({

			type: 'GET', 
			url: '/bin/lateAddsCWIDLookUp', 
			data: {
				cwid: userValue
			},

			dataType: 'json', 
			success: function(myresponse){
				gifModal.style.display = "none";
             
				if(myresponse.length > 0){
					  StudentCWID.value = myresponse[0].EMPLID;
					  EIPStudentID.value = myresponse[0].EMPLID;
					  StudentFirstName.value = myresponse[0].FIRST_NAME;
					  EIPStudentFirstName.value = myresponse[0].FIRST_NAME; 
					  EIPStudentLastName.value = myresponse[0].LAST_NAME;
					  StudentLastName.value = myresponse[0].LAST_NAME;
					  StudentHomePhone.value = myresponse[0].HOME_PHONE; 
					 // WorkOtherTelephone.value = myresponse[0].WORK_OTR_PHONE;
					  StudentCellPhone.value = myresponse[0].CELL_PHONE;
					  StudentAddress.value = myresponse[0].Complete_Address; 
					  StudentCity.value = myresponse[0].CITY; 
					  StudentState.value = myresponse[0].STATE; 
					  ZipCode.value = myresponse[0].POSTAL;                         
					  //StudentEmail.value = myresponse[0].PREF_EMAIL;	 
					  StudentEmail.value = "yjayaram@fullerton.edu";	 
					  //StudentEmail.value = "mdominguez@fullerton.edu";	 
					  //StudentEmail.value = "mdominguez@fullerton.edu";	 
					  DegreeObjective.value = myresponse[0].DEGREE; 
					  Major.value = myresponse[0].PROGRAMS;
                  	
					  if(myresponse[0].EIP_FLAG == "Y"){							
							EIPFlag.value = "Yes";                        	
                        	EIPSignatureNote.visible = true;
                        	EIPDetailsPanel.visible = true;
                        	StudentInformationTextForEIP.visible = true;
                        	StudentInformationTextForNonEIP.visible = false;
                        	 if(myresponse[0].OU_FLAG == "Y"){                               	
                               	ForEIPUseOnly.visible = true;
                               	OUFlag.value = "Yes";
                             }                        	
					  }else{
                        	
                        	EIPSignatureNote.visible = false;
                        	StudentInformationTextForNonEIP.visible = true;
                        	StudentInformationTextForEIP.visible = false;                        	
                      }	
				}
               else{
                 showErrorModal("Alert !", "No matching records found");
               }
			}			
		});
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentHomePhone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentHomePhone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentCellPhone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentCellPhone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = true;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentCity_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentCity_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentState_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentState_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_ZipCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_ZipCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_InitiatedDate_init0 = function (scope) {
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
 * @function late_adds_late_adds.generated_Term_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_Term_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DegreeObjective_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DegreeObjective_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_Major_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_Major_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_AddClassNumber_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_AddClassNumber_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(Row1.instanceManager.instanceCount >= 1 && Row1.instanceManager.instanceCount <= 5){
   for(var count = 0; count < Row1.instanceManager.instanceCount; count++){
      if(Row1.instanceManager.instances[count]._children[0].value === null){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please add Class Number in existing row before adding new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	if(isAddRowAllowed == true){
      	Row1.instanceManager.addInstance();   
		RemoveClassNumber.enabled = true;
    }   	
}
if(Row1.instanceManager.instanceCount == 6){
    Row1.instanceManager.removeInstance(Row1.instanceManager.instanceCount-1);
    showErrorModal("Alert !", "More than 5 rows cannot be added");	
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_RemoveClassNumber_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_RemoveClassNumber_click0 = function (scope) {
    with(this) {
        with(scope) {
            try{
	var rowCount = Row1.instanceManager.instanceCount;
	
	var lastRowClassNumber = Row1.instanceManager.instances[rowCount-1]._children[0].value;
	if(lastRowClassNumber){
		if(classNumber_list.value){
			classNumber_list.value = classNumber_list.value.replace(lastRowClassNumber,"");
		}	
	}

	if(rowCount > 1 && rowCount <= 5){	
		Row1.instanceManager.removeInstance(rowCount-1);
		NonEIPQuestions.instanceManager.removeInstance(rowCount-1);
		
		// remove from json array also
		var jsonArray = JSON.parse(table_json_data.value);
		for(var jsonArrayCount in jsonArray){          
			if((parseInt(jsonArrayCount) + 1) >= rowCount){        
				jsonArray.splice(jsonArrayCount, 1);	
			}
		}
		table_json_data.value = JSON.stringify(jsonArray); 
		console.log(table_json_data.value);
	}
	if(rowCount == 1){		
		Row1.instanceManager.instances[0]._children[0].value = null;
		Row1.instanceManager.instances[0]._children[1].value = null;
		Row1.instanceManager.instances[0]._children[2].value = null;
		Row1.instanceManager.instances[0]._children[3].value = null;
		Row1.instanceManager.instances[0]._children[4].value = null;
		Row1.instanceManager.instances[0]._children[5].value = null;       
	  
		NonEIPQuestions.instanceManager.instances[0]._children[2].value = null;
		NonEIPQuestions.instanceManager.instances[0]._children[5].value = null;
		NonEIPQuestions.instanceManager.instances[0]._children[7].value = null;
		NonEIPQuestions.instanceManager.instances[0]._children[9].value = null;
		NonEIPQuestions.instanceManager.instances[0]._children[11].value = null;			 
		table_json_data.value = null; 
	}
}
catch(e){
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_ClassNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_ClassNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
var classNumberValue = this.value;
var pattern = /^.\d{4}$/;
var result = pattern.test(classNumberValue); 
var isDuplicate = false;
var courseDetails;

if(StageIndicator.value === null){
	if(InstructorSignaturePanel.visible == false){
		try{			
			if(!classNumberValue){
				result = false;
			}
			if(table_json_data.value === "null"){
				table_json_data.value = null;
			}

			if(classNumber_list.value){
				if(classNumber_list.value.indexOf(classNumberValue) != -1){		
					showErrorModal("Alert !", "This Class Number is already added, Please add a different one");
					isDuplicate = true;
					this.value = null;
					this.enabled = true;
				}
				else{
					if(classNumberValue){
						classNumber_list.value = classNumber_list.value + "," + classNumberValue;
					}
				}
			}
			else{
				classNumber_list.value = classNumberValue;	
			}

			if(!isDuplicate){
				if(result === true){					
					var gifModal = document.getElementById('gifModal');	
					gifModal.style.display = "block";
					if(StudentCWID.value !== null){				  

					  var rows = [];					  
					  var semesterTakenValue = HiddenSTRM.value;

					  gifModal.style.display = "block";
					  $.ajax({

						  type: 'GET', 
						  url:'/bin/lateAddsCourseCatalogLookUp', 
						  data: {
							  ClassNumber: classNumberValue,
							  STRM: semesterTakenValue
						  },

						  dataType: 'json',   
						  success: function(myresponse){  

							  var modal = document.getElementById('myModal');
							  var span = document.getElementsByClassName("close")[0];
							  //var row = {}; 

							  if(myresponse.length === 1 && myresponse[0] != null){                    
									  //SemesterTaken.value = myresponse[0].STRM; 
									  SemesterTaken.value = "Summer 2021"; 
									  DepartmentCourse.value = myresponse[0].CRSE_NAME;                            	 							 
									  ScheduleNumber.value = myresponse[0].CRSE_ID;              		
									  NumberOfUnits.value = myresponse[0].UNITS_MINIMUM;
								   
									  rows.push(myresponse[0]);									  
									  if(table_json_data.value != null){
										  table_json_data.value = table_json_data.value.substr(0,table_json_data.value.length-1) + "," + JSON.stringify(myresponse[0]) + "]";				
									  }
									  else{
										  table_json_data.value = JSON.stringify(rows) ? JSON.stringify(rows) : '';
									  }
									 // console.log(table_json_data.value);
									  gifModal.style.display = "none";
									  modal.style.display = "none";
									  //debugger;
									  //this.enabled = false;
							  }
							  else if (myresponse.length > 1) {
                                var headerid = document.getElementById('pheader');
                        		headerid.innerHTML = "Please select the instructor";
								  gifModal.style.display = "none";
								  modal.style.display = "block";                      

								  var col = [];
								  col.push("INSTR_F_NAME");
								  col.push("INSTR_L_NAME");            
								  col.push("INSTR_USERID");
								  col.push("INSTR_ID");
								  col.push("CRSE_NAME");

								  var table = document.createElement("table");
								  table.id = "tb";
								  var tr = table.insertRow(-1);
								  var headings = ["", "Instructor_FirstName", "Instructor_LastName", "Instructor_UserID", "Instructor_CWID", "Course_Name"];
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
										  HiddenInstructorFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
										  HiddenInstructorLastName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
										  HiddenInstructorUserID.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
										  HiddenInstructorCWID.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;
										  HiddenDepartmentCourse.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

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


								  var footerModal = document.getElementById("modal_footer");
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
												if(myresponse[n] != null){
													HiddenSemesterTaken.value = "Summer 2021"; 
													HiddenDepartmentCourse.value = myresponse[n].CRSE_NAME;
													//console.log("Course value from nth element" + DepartmentCourse.value);
													HiddenScheduleNumber.value = myresponse[n].CRSE_ID;                                                 	
													HiddenNumberOfUnits.value = myresponse[n].UNITS_MINIMUM;
													//courseNameGlobal = myresponse[n].CRSE_NAME;
													//console.log("global variable value from nth element" + courseNameGlobal);

													rows.push(myresponse[n]);									
													if(table_json_data.value != null){
													  table_json_data.value = table_json_data.value.substr(0,table_json_data.value.length-1) + "," + JSON.stringify(myresponse[n]) + "]";	
													}
													else{
													  table_json_data.value = JSON.stringify(rows);
													}
													//console.log(table_json_data.value);
												}

											  rButtonStatus = true;
											  break;

										  }
									  }
									  if (rButtonStatus === false) {
										  showErrorModal("Alert!","Please select the instructor");
										  modal.style.display = "block";
									  } else {
											  debugger;
											  SemesterTaken.value = HiddenSemesterTaken.value; 
											  DepartmentCourse.value = HiddenDepartmentCourse.value;
											  //console.log("Course value from nth element Not hidden" + DepartmentCourse.value);
											  if(DepartmentCourse.value){
												  course_details.value = classNumberValue + " - " + DepartmentCourse.value;
											  }
											  else{
												  course_details.value = classNumberValue;
											  }
											  ScheduleNumber.value = HiddenScheduleNumber.value;
											  NumberOfUnits.value = HiddenNumberOfUnits.value;												 

										  modal.style.display = "none";
									  }
								  };
								  // footerModal = document.getElementById("modal_footer");
								  footerModal.appendChild(okButton);								  
								  //this.enabled = false;
							  } else {
								  showErrorModal("Alert !","No matching records found, Please click on Remove Class Button and add a valid Class Number");                                  
								  gifModal.style.display = "none";
								  FirstName.value = null;
										  CatalogNumber.value = null;
										  SemesterTaken.value = null; 
										  DepartmentCourse.value = null;
										  ScheduleNumber.value = null;
										  NumberOfUnits.value = null;
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
									showErrorModal("Alert!","Please select the instructor");
									  modal.style.display = "block";
								  } else {
									  showErrorModal("Alert!","Please select the instructor");
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
								
							   for(var count = 0; count < Row1.instanceManager.instanceCount; count++){	
									debugger;
									var classNumber = Row1.instanceManager.instances[count]._children[0].value + " - ";                                	
									var courseNameValue = Row1.instanceManager.instances[count]._children[2].value;		

									if(count > 0 && (count == (Row1.instanceManager.instanceCount - 1))){        
										  NonEIPQuestions.instanceManager.addInstance();
									}
                                 	if(Row1.instanceManager.instances[count]._children[2].value == null){
                                      	courseNameValue = "";
                                      	NonEIPQuestions.instanceManager.instances[count]._children[2].value = classNumber.concat(courseNameValue); 
                                    }else if(Row1.instanceManager.instances[count]._children[2].value !== null){
                                      	NonEIPQuestions.instanceManager.instances[count]._children[2].value = classNumber.concat(courseNameValue); 
                                    }
									
									//NonEIPQuestions.instanceManager.instances[count]._children[2].value = course_details.value; 
								}
								gifModal.style.display = "none";  
							}
						});				  
					}else {
						showErrorModal("Alert !","Please enter the cwid on Student Information page first");
						this.value = null;
					}
				} else{                  	
					 showErrorModal("Alert !","Please enter a valid class number");
					 gifModal.style.display = "none";
					 this.value = null;
                  	 this.enabled = true;					 
				}
			}
			if(this.value){
				this.enabled = false;
			}
			gifModal.style.display = "none";
		} catch(e){
		}		
	}
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_CompleteQuestions_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_CompleteQuestions_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_NonEIPQuestions_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_NonEIPQuestions_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_AttendedCourseContinuously_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_AttendedCourseContinuously_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	CourseStartDate.value = null;
    CourseStartDate.enabled = false;
}
else{
    CourseStartDate.enabled = true;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_MiniOrShortCourse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_MiniOrShortCourse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "0"){
  	MiniOrShortCourseDate.value = null;
    MiniOrShortCourseDate.enabled = false;
}else{
    MiniOrShortCourseDate.enabled = true;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(typeOfForm.value == 1){
  this.visible = true;
  
}else{
  this.visible = false;
  
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_StudentSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    if(this.value == 1){
            StudentSignature.value = hiddenStudentFullNameForSignature.value;
            StudentSignature.enabled = false;
            if (StudentSignatureDate.value === null) {
                var dateString = new Date().toLocaleString("en-US", {
                    timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                }).replace(/[^ -~]/g, '');
                var dateObject = new Date(dateString);
                var curyear = dateObject.getFullYear();
                var curyearMonth = dateObject.getMonth() + 1;
                var curyearDay = dateObject.getDate();
                var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                StudentSignatureDate.value = d;
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
}
/**
 * @function late_adds_late_adds.generated_StudentSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentSignatureCHK_valueCommit1 = function (scope) {
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
 * @function late_adds_late_adds.generated_StudentSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_StudentSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_InstructorSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_InstructorSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_InstructorSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_InstructorSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToInstructor"){

  if(this.value == 1){
      //InstructorSignature.value = LogUser.value;
      InstructorSignature.enabled = false;
              if (InstructorSignatureDate.value === null) {
                  var dateString = new Date().toLocaleString("en-US", {
                      timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                  }).replace(/[^ -~]/g, '');
                  var dateObject = new Date(dateString);
                  var curyear = dateObject.getFullYear();
                  var curyearMonth = dateObject.getMonth() + 1;
                  var curyearDay = dateObject.getDate();
                  var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                  InstructorSignatureDate.value = d;
                  InstructorSignature.enabled = false;
              } else {
                  InstructorSignatureDate.enabled = false;
                  InstructorSignature.enabled = false;
              }
      }else{
                  InstructorSignatureDate.value = null;
                  InstructorSignature.value = null;
          }
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_InstructorSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_InstructorSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToInstructor"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  InstructorSignature.value = myresponse.userName;                	
              }
          });    
	}
}

        }
	}
}
/**
 * @function late_adds_late_adds.generated_InstructorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_InstructorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DeptChairSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DeptChairSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DeptChairSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DeptChairSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value == "ToChair"){
  if(this.value == 1){
      //DeptChairSignature.value = LogUser.value;
      DeptChairSignature.enabled = false;
              if (DeptChairDate.value === null) {
                  var dateString = new Date().toLocaleString("en-US", {
                      timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                  }).replace(/[^ -~]/g, '');
                  var dateObject = new Date(dateString);
                  var curyear = dateObject.getFullYear();
                  var curyearMonth = dateObject.getMonth() + 1;
                  var curyearDay = dateObject.getDate();
                  var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                  DeptChairDate.value = d;
                  DeptChairSignature.enabled = false;
              } else {
                  DeptChairDate.enabled = false;
                  DeptChairSignature.enabled = false;
              }
      }else{
                  DeptChairDate.value = null;
                  DeptChairSignature.value = null;
              }
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DeptChairSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DeptChairSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChair"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  DeptChairSignature.value = myresponse.userName;
              }
          });    
	}
}

        }
	}
}
/**
 * @function late_adds_late_adds.generated_DeptChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DeptChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_AssociateDeanSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_AssociateDeanSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_AssociateDeanSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_AssociateDeanSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDean"){

    if(this.value == 1){
    //AssociateDeanSignature.value = LogUser.value;
    AssociateDeanSignature.enabled = false;
            if (AssociateDeanSignatureDate.value === null) {
                var dateString = new Date().toLocaleString("en-US", {
                    timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                }).replace(/[^ -~]/g, '');
                var dateObject = new Date(dateString);
                var curyear = dateObject.getFullYear();
                var curyearMonth = dateObject.getMonth() + 1;
                var curyearDay = dateObject.getDate();
                var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                AssociateDeanSignatureDate.value = d;
                AssociateDeanSignature.enabled = false;
            } else {
                AssociateDeanSignatureDate.enabled = false;
                AssociateDeanSignature.enabled = false;
            }
    }else{
                AssociateDeanSignatureDate.value = null;
                AssociateDeanSignature.value = null;
            }
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_AssociateDeanSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_AssociateDeanSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
	
if(StageIndicator.value == "ToDean"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  AssociateDeanSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_AssociateDeanSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_AssociateDeanSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_ForEIPUseOnly_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_ForEIPUseOnly_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPDetailsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPDetailsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_ReEntryToCSUFCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_ReEntryToCSUFCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  DQFromCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  GraduateLevelCourseCHK.value = null;
  UndergradTransferCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DQFromCSUFCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DQFromCSUFCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  GraduateLevelCourseCHK.value = null;
  UndergradTransferCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_PrerequisiteForGradProgramCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_PrerequisiteForGradProgramCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  GraduateLevelCourseCHK.value = null;
  UndergradTransferCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_GraduateLevelCourseCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_GraduateLevelCourseCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  UndergradTransferCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_UndergradTransferCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_UndergradTransferCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  UndergradTransferCollege.enabled = true;
  GraduateLevelCourseCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}else{
   UndergradTransferCollege.enabled = false;
   UndergradTransferCollege.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_UndergradTransferCollege_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_UndergradTransferCollege_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_GuestOtherCollegeCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_GuestOtherCollegeCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  GuestOtherCollege.enabled = true;
  GraduateLevelCourseCHK.value = null;
  UndergradTransferCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}else{
  GuestOtherCollege.enabled = false;
  GuestOtherCollege.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_GuestOtherCollege_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_GuestOtherCollege_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_PrerequisiteForCredentialCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_PrerequisiteForCredentialCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  UndergradTransferCHK.value = null;
  GraduateLevelCourseCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  CredentialCourseCHK.value = null;
  OthersCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_CredentialCourseCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_CredentialCourseCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  GraduateLevelCourseCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  OthersCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_OthersCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_OthersCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  ReEntryToCSUFCHK.value = null;
  DQFromCSUFCHK.value = null;
  PrerequisiteForGradProgramCHK.value = null;
  GraduateLevelCourseCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  GuestOtherCollegeCHK.value = null;
  PrerequisiteForCredentialCHK.value = null;
  CredentialCourseCHK.value = null;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_HighSchoolOrCollegeInEnglishRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_HighSchoolOrCollegeInEnglishRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "0"){
  	ToeflScoreRB.mandatory = true;	
  	ToeflScoreRB.enabled = true;  
}else{
  	ToeflScoreRB.mandatory = false;
  	ToeflScoreRB.enabled = false;
}

        }
	}
}
/**
 * @function late_adds_late_adds.generated_LivedInUSThreeYearsRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_LivedInUSThreeYearsRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == "0"){
  	TuberculosisTestVerificationRB.mandatory = true;
  	TuberculosisTestVerificationRB.enabled = true;

}else{
  	TuberculosisTestVerificationRB.mandatory = false;
  	TuberculosisTestVerificationRB.enabled = false;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_BornAfterRB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_BornAfterRB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	ImmunizedStatusRB.mandatory = true;
  	ImmunizedStatusRB.enabled = true;

}else{
  	ImmunizedStatusRB.mandatory = false;
  	ImmunizedStatusRB.enabled = false;
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_USCitizenCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_USCitizenCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  NonUSCitizenCHK.value = null;
  DSOSignaturePanel.visible = false;
  ImmigrantStatus.value = null;
  RefugeeAsylumApplicantStatus.value = null; 
  OtherNonImmigrantStatus.value = null; 
  AdmissionNumber.value = null;
  PassportNumber.value = null;
  
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_NonUSCitizenCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_NonUSCitizenCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	SectionB.enabled = true;
  	USCitizenCHK.value = null;
  	//DSOSignaturePanel.visible = true;
}
else{
  	SectionB.enabled = false;
  	//DSOSignaturePanel.visible = false;
}

        }
	}
}
/**
 * @function late_adds_late_adds.generated_SectionB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_SectionB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPStudentCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPStudentCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(typeOfForm.value == 1){
  this.visible = true;
  
}else{
  this.visible = false;
  
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPStudentCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPStudentCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

    if(this.value == 1){
    EIPStudentSignature.value = hiddenStudentFullNameForSignature.value;
    EIPStudentSignature.enabled = false;
            if (EIPStudentDate.value === null) {
                var dateString = new Date().toLocaleString("en-US", {
                    timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                }).replace(/[^ -~]/g, '');
                var dateObject = new Date(dateString);
                var curyear = dateObject.getFullYear();
                var curyearMonth = dateObject.getMonth() + 1;
                var curyearDay = dateObject.getDate();
                var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                EIPStudentDate.value = d;
                EIPStudentSignature.enabled = false;
            } else {
                EIPStudentDate.enabled = false;
                EIPStudentSignature.enabled = false;
            }
    }else{
                EIPStudentDate.value = null;
                EIPStudentSignature.value = null;
            }
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPStudentCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPStudentCHK_valueCommit1 = function (scope) {
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

                  EIPStudentSignature.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPStudentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPStudentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DSOSignaturePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DSOSignaturePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DSOAuthorizationCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DSOAuthorizationCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DSOAuthorizationCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DSOAuthorizationCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){

    if(this.value == 1){
    DSOAuthorizationSignature.value = LogUser.value;
    DSOAuthorizationSignature.enabled = false;
   
            if (DSOAuthorizationDate.value === null) {
                var dateString = new Date().toLocaleString("en-US", {
                    timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                }).replace(/[^ -~]/g, '');
                var dateObject = new Date(dateString);
                var curyear = dateObject.getFullYear();
                var curyearMonth = dateObject.getMonth() + 1;
                var curyearDay = dateObject.getDate();
                var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                DSOAuthorizationDate.value = d;
                DSOAuthorizationSignature.enabled = false;
            } else {
                DSOAuthorizationDate.enabled = false;
                DSOAuthorizationSignature.enabled = false;
            }
    }else{
                DSOAuthorizationDate.value = null;
                DSOAuthorizationSignature.value = null;
            }
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DSOAuthorizationCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DSOAuthorizationCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  DSOAuthorizationName.value = myresponse.userName;
              }
          });    
	}
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_DSOAuthorizationDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_DSOAuthorizationDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_RecordsSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_RecordsSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == 1){
//RecordsSignature.value = LogUser.value;
RecordsSignature.enabled = false;
 
        if (RecordsSignatureDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            RecordsSignatureDate.value = d;
            RecordsSignature.enabled = false;
        } else {
            RecordsSignatureDate.enabled = false;
            RecordsSignature.enabled = false;
        }
}else{
          	RecordsSignatureDate.value = null;
            RecordsSignature.value = null;

        }
        }
	}
}
/**
 * @function late_adds_late_adds.generated_RecordsSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_RecordsSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value == "ToRecords"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

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
 * @function late_adds_late_adds.generated_RecordsAction_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_RecordsAction_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	LateAddsDecision.value = "Approved"; 
}
else if(this.value == "0"){
  	LateAddsDecision.value = "Denied"; 
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPGroupSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPGroupSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
//EIPGroupSignature.value = LogUser.value;
EIPGroupSignature.enabled = false;
        if (EIPGroupSignatureDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            EIPGroupSignatureDate.value = d;
            EIPGroupSignature.enabled = false;
        } else {
            EIPGroupSignatureDate.enabled = false;
            EIPGroupSignature.enabled = false;
        }
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPGroupSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPGroupSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            	
if(StageIndicator.value == "ToRecords"){
  	if(this.value == "1"){
  
        var fullNameForSignature;

         $.ajax({

              type: 'GET', 

              url:"/bin/getLoggedUserDetails",

              dataType: 'json',

              success: function(myresponse){

                  EIPGroupSignature.value = myresponse.userName;                	
              }
          });    
	}
}

        }
	}
}
/**
 * @function late_adds_late_adds.generated_EIPGroupAction_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_EIPGroupAction_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	LateAddsDecision.value = "Approved"; 
}
else if(this.value == "0"){
  	LateAddsDecision.value = "Denied"; 
}
        }
	}
}
/**
 * @function late_adds_late_adds.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function late_adds_late_adds.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_LogUser_init0 = function (scope) {
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
 * @function late_adds_late_adds.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
late_adds_late_adds.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = StudentFirstName.value +", " + StudentLastName.value + " " + StudentCWID.value;

HiddenEmailSubject.value = "Test - Petition For Late Addition Of Classes - " + StudentCWID.value;

if(RecordsAction.value =="1" || EIPGroupAction.value == "1"){
	LateAddsDecision.value = "Approval";   
}
else if(RecordsAction.value =="0" || EIPGroupAction.value == "0"){
  	LateAddsDecision.value = "Denial"; 
}

var testEmail = "ajeet.chhonkar@thoughtfocus.com";
//var testEmail = "yjayaram@fullerton.edu";
StudentEmail.value = testEmail; 

function modifyJsonArray(){ 

	var jsonArray = JSON.parse(table_json_data.value);    
	for(var count = 0; count < Row1.instanceManager.instanceCount; count++){
		for(var jsonArrayCount in jsonArray){          
			if(jsonArrayCount == count){
				if(Row1.instanceManager.instances[count]._children[0].value === null){					
					showErrorModal("Alert !", "Please add at least one Class Number in Late Adds Information Section");
                    isValid.value = false;
				}
				var noOfUnits = Row1.instanceManager.instances[count]._children[4].value;
				var reason = Row1.instanceManager.instances[count]._children[5].value;            
                var attendedCourseContinuously = NonEIPQuestions.instanceManager.instances[count]._children[5].value;
                var courseStartDate = NonEIPQuestions.instanceManager.instances[count]._children[7].value;
                var miniOrShortCourse = NonEIPQuestions.instanceManager.instances[count]._children[9].value;
                var miniOrShortCourseDate = NonEIPQuestions.instanceManager.instances[count]._children[11].value;
                var questionsForClassNumber = NonEIPQuestions.instanceManager.instances[count]._children[2].value;
				
              	jsonArray[jsonArrayCount]["UNITS_MINIMUM"] = ((noOfUnits === null) ? '' : noOfUnits);
				jsonArray[jsonArrayCount]["REASON"] = ((reason === null) ? '' : reason); 
                jsonArray[jsonArrayCount]["QUESTION_FOR_CLASS_NUMBER"] = ((questionsForClassNumber === null) ? '' : questionsForClassNumber); 
                jsonArray[jsonArrayCount]["ATTENDED_COURSE_CONTINUOSLY"] = ((attendedCourseContinuously === null) ? '' : attendedCourseContinuously); 
                jsonArray[jsonArrayCount]["COURSE_START_DATE"] = ((courseStartDate === null) ? '' : courseStartDate);  
                jsonArray[jsonArrayCount]["MINI_OR_SHORT_COURSE"] = ((miniOrShortCourse === null) ? '' : miniOrShortCourse);  
                jsonArray[jsonArrayCount]["MINI_OR_SHORT_COURSE_DATE"] = ((miniOrShortCourseDate === null) ? '' : miniOrShortCourseDate); 
              	jsonArray[jsonArrayCount]["STRM"] = "Summer 2021";
              	jsonArray[jsonArrayCount]["INSTR_EMAIL"] = testEmail;
                jsonArray[jsonArrayCount]["CHAIR_EMAIL"] = testEmail;
                jsonArray[jsonArrayCount]["DEAN_EMAIL"] = testEmail;
			}
		}
	}
    table_json_data.value = JSON.stringify(jsonArray); 
    console.log(table_json_data.value);
}

modifyJsonArray();

function validateLateAdds(){
	isValid.value = false;
	for(var count = 0; count < Row1.instanceManager.instanceCount; count++){
		var classNumber = Row1.instanceManager.instances[count]._children[0].value;
		var semester = Row1.instanceManager.instances[count]._children[1].value;
		var dept = Row1.instanceManager.instances[count]._children[2].value;
		var scNo = Row1.instanceManager.instances[count]._children[3].value;
		var reason = Row1.instanceManager.instances[count]._children[5].value;
        var attendedCourseContinuously = NonEIPQuestions.instanceManager.instances[count]._children[5].value;
        var courseStartDate = NonEIPQuestions.instanceManager.instances[count]._children[7].value;
        var miniOrShortCourse = NonEIPQuestions.instanceManager.instances[count]._children[9].value;
        var miniOrShortCourseDate = NonEIPQuestions.instanceManager.instances[count]._children[11].value;
		
		if(StudentCWID.value === null){	
			showErrorModal("Alert !","Please enter the cwid on Student Information page first");
			Row1.instanceManager.instances[count]._children[0].value = null;
			isValid.value = false;
		}
					
		else if(classNumber === null){
			showErrorModal("Alert !","Please enter at least one course to submit the late adds request");
          	isValid.value = false;
		}
		else if(classNumber !== null && (semester === null || dept ===  null || scNo ===  null)){
			showErrorModal("Alert !","No matching records found. Please use Remove Class button to remove the invalid class number and add a valid class number");
          	isValid.value = false;
		} 
		else if(classNumber !== null && reason === null){
			showErrorModal("Alert !","Please enter the reason for late adds request");
          	isValid.value = false;
		} 
		else if(classNumber !== null && attendedCourseContinuously === null){
			showErrorModal("Alert !", "Please specify if you have attended this course continuously since it began");
          	isValid.value = false;
		}
		else if(attendedCourseContinuously == "0" && courseStartDate === null){
			showErrorModal("Alert !", "Please specify the date when you first attended this course");
          	isValid.value = false;
		} 
		else if(classNumber !== null && miniOrShortCourse === null){
			showErrorModal("Alert !", "Please specify if this is a mini or short course");
          	isValid.value = false;
		}
		else if(miniOrShortCourse == "1" && miniOrShortCourseDate === null){
			showErrorModal("Alert !", "Please specify the date when mini or short course started");
          	isValid.value = false;
		}
      	else if((OUFlag.value == "Yes") && ReEntryToCSUFCHK.value === null && DQFromCSUFCHK.value === null && PrerequisiteForGradProgramCHK.value === null && GraduateLevelCourseCHK.value === null && UndergradTransferCHK.value === null && GuestOtherCollegeCHK.value === null && PrerequisiteForCredentialCHK.value === null && CredentialCourseCHK.value === null && OthersCHK.value === null){
          	showErrorModal("Extension and International Program Tab, First Section", "Please select at least one reason for registering through Open University");
        }
      	else if((OUFlag.value == "Yes") && AuthorizationForEnrollmentRB.value === null){
          	showErrorModal("Extension and International Program Tab, Section A", "Please complete all the questions");
        } 
      	else if((OUFlag.value == "Yes") && AuthorizationForEnrollmentRB.value == "1"){
          	showErrorModal("Enrolled as a Cal State Fullerton student", "Sorry we cannot process your approval and enrollment request. Please contact EIP at eipconnect@fullerton.edu or call us at 657.278.2611");
        }
      	else if((OUFlag.value == "Yes") && HighSchoolOrCollegeInEnglishRB.value === null){
          	showErrorModal("Extension and International Program Tab, Secton A", "Please complete all the questions");
        }
      	else if((OUFlag.value == "Yes") && HighSchoolOrCollegeInEnglishRB.value !== null && ToeflScoreRB.value == "0"){
          	showErrorModal("TOEFL Score Document", "Sorry we cannot process your approval and enrollment request. Please contact EIP at eipconnect@fullerton.edu or call us at 657.278.2611");
        }
      	else if((OUFlag.value == "Yes") && LivedInUSThreeYearsRB.value === null){
          	showErrorModal("Extension and International Program Tab, Section A", "Please complete all the questions");
        }
      	else if((OUFlag.value == "Yes") && LivedInUSThreeYearsRB.value !== null && TuberculosisTestVerificationRB.value == "0"){
          	showErrorModal("Tuberculosis Test Verification", "Sorry we cannot process your approval and enrollment request. It is important you contact the CSUF Health Center at 657 278 2800 for further information");
        }
      	else if((OUFlag.value == "Yes") && BornAfterRB.value === null){
          	showErrorModal("Extension and International Program Tab, Section A", "Please complete all the questions");
        }
      	else if((OUFlag.value == "Yes") && BornAfterRB.value !== null && ImmunizedStatusRB.value == "0"){
          	showErrorModal("Immunized Against Measles And Rubella", "Sorry we cannot process your approval and enrollment request. It is important you contact the CSUF Health Center at 657 278 2800 for further information");
        }     
      	else if((OUFlag.value == "Yes") && NonUSCitizenCHK.value == null && USCitizenCHK.value == null){
          	showErrorModal("Extension and International Program Tab, Section A","Please specify if you are U.S. Citizen or Non-U.S. Citizen");
        }
      	else if((OUFlag.value == "Yes") && NonUSCitizenCHK.value == "1" && ImmigrantStatus.value == null && RefugeeAsylumApplicantStatus.value == null && OtherNonImmigrantStatus.value == null){
          	showErrorModal("Extension and International Program Tab, Section B","Please mention at least one status for Non-U.S. Citizen");
        }
      	else if((OUFlag.value == "Yes") && NonUSCitizenCHK.value == "1" && OtherNonImmigrantStatus.value !== null && (AdmissionNumber.value == null || PassportNumber.value == null)){
          	showErrorModal("Extension and International Program Tab, Section B","Please mention admission number and passport number");
        }
        else{			
          	isValid.value = true;
        }
	}
	
	console.log(isValid.value);

	if(isValid.value == "true"){
	//	alert("about to submit");
		guideBridge.submit();
	}
}

validateLateAdds();
        }
	}
}
