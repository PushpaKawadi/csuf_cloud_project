/**
 * @function declaration_form_cbe_declaration_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
if (StageIndicator.value === null) {
  	gifModal.style.display = "none"; 
  
  	var empUserId;
  
    $.ajax({

        type: 'GET',
        url: "/bin/getAllLoggedInUserDetailsLookup",
        dataType: 'json',
        success: function(response) {
          	
          	if(response.length > 0){
              	empUserId = response[0].USERID;
              	//empUserId = 'dacoats';
              	LogUser.value = empUserId;
              	workflow_initiator.value = response[0].USERID;
                /*HiddenAdvisorName.value = response[0].FIRSTNAME + " " + response[0].LASTNAME;
                HiddenAdvisorEmail.value = response[0].EMAILID; */
              
              	getAdvisorDetails(empUserId);
            }            
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getAdvisorDetails(empUserId){
  	 $.ajax({

        type: 'GET',
        url: "/bin/getDeclarationDetails",
       	data: {
          	action: 'ADVISOR_DETAILS', 
          	empUserID: empUserId, 
          	deptID: 10073
        },
        dataType: 'json',
        success: function(response) {
          	
          	if(response.length > 0){              	
                HiddenAdvisorName.value = response[0].EMP_NAME;
                HiddenAdvisorEmail.value = response[0].EMAILID;
            } 
          	else{
              	showErrorModal("Alert !", "The usage of this form is limited to the Dean CBE department only");
              	cwid.enabled = false;
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
    
if (StageIndicator.value === null) {    
    RecordsOfficeUseOnlyPanel.visible = false; 	
    ARSCPanel.visible = false;
}
if (StageIndicator.value == "ToRecords") {
  	gifModal.style.display = "none";
    StudentInformationPanel.enabled = false;
  DropCoursePanel.enabled = false;
	HeadingPanel.enabled = false;
  	CurrentMajorPanel.enabled = false; 
    AdvisorSignaturePanel.visible = true;
    AdvisorSignaturePanel.enabled = false;
    RecordsOfficeUseOnlyPanel.visible = true;  
    ARSCPanel.visible = false;
}
if (StageIndicator.value == "ToARSC") {
  	gifModal.style.display = "none";
    StudentInformationPanel.enabled = false;
  DropCoursePanel.enabled = false;
	HeadingPanel.enabled = false;
  	CurrentMajorPanel.enabled = false; 
    AdvisorSignaturePanel.visible = true;
    AdvisorSignaturePanel.enabled = false;
    RecordsOfficeUseOnlyPanel.visible = true; 
    RecordsOfficeUseOnlyPanel.enabled = false; 
    ARSCPanel.visible = true;
    ARSCPanel.enabled = true;
}

        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
    $.ajax({

      type: 'GET',
      url:"/bin/getCaseID",
      dataType: 'json',
      
      success: function(myresponse){               
        	caseId.value = myresponse.CASEID;
      	},
	}); 	
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_conditionalCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_conditionalCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_ethicsRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_ethicsRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_StudentInformationPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_StudentInformationPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_cwid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_cwid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
                debugger;
if(AdvisorSignaturePanel.visible  === true && ARSCPanel.visible === false && RecordsOfficeUseOnlyPanel.visible === false){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
   
  	if(this.value !== null){
        var cwidVal = this.value;
        //var acadPlanVal = "'42PBUSUND','42PINBUND','42PECNUND'";
        var userIDVal; 

        $.ajax({

            type: 'GET',

            url: "/bin/getDeclarationDetails",

            data: {
                action: 'STUDENT_DETAILS',
                cwid: cwidVal
                //acadPlan: acadPlanVal
            },

            dataType: 'json',

            success: function(myresponse) {
                if (myresponse.length >= 1) {              	
                    FName.value = myresponse[0].STUDENT_FNAME;
                    LName.value = myresponse[0].STUDENT_LNAME;                
                    AdmitTerm.value = myresponse[0].ADMIT_TERM_DESCR;
                    currentMajor.value = myresponse[0].PROGRAMS;
                    CurrentMajor.value = myresponse[0].PROGRAMS;
                    CurrentMajorAcadPlan.value = myresponse[0].ACAD_PLAN;
                    HiddentStudentEmailID.value = myresponse[0].STUDENT_EMAIL;
getCourseDetails(myresponse[0].STUDENT_USERID);
                    /*if (myresponse[0].ACAD_PLAN == "42PBUSUND") {
                        formerMajorRB.value = 1;
                    } 
                    else if (myresponse[0].ACAD_PLAN == "42PINBUND") {
                        formerMajorRB.value = 2;
                    } 
                    else if (myresponse[0].ACAD_PLAN == "42PECNUND") {
                        formerMajorRB.value = 3;
                    } */

                    getAllMajorList();

                    gifModal.style.display = "none";
                } else {
                    showErrorModal("Alert !", "No matching records found");
                    gifModal.style.display = "none";
                  	FName.value = null;
                    LName.value = null;
                    AdmitTerm.value = null;
                    currentMajor.value = null;
                    CurrentMajor.value = null;
                    CurrentMajorAcadPlan.value = null;
                    HiddentStudentEmailID.value = null;
                    CurrentMajor.value = null;
                    NewMajor.value = null;
                    CurrentMajorAcadPlan.value = null;
                    NewMajorAcadPlanCode.value = null;
                }
            }
        });
    }
  	else{
      	gifModal.style.display = "none";
      	FName.value = null;
        LName.value = null;
        AdmitTerm.value = null;
        currentMajor.value = null;
        CurrentMajor.value = null;
        CurrentMajorAcadPlan.value = null;
        HiddentStudentEmailID.value = null;
      	CurrentMajor.value = null;
        NewMajor.value = null;
        CurrentMajorAcadPlan.value = null;
        NewMajorAcadPlanCode.value = null;
    }
}

function getAllMajorList () {

    var allMajorArray = [];

    $.ajax({

        type: 'GET',
        url: "/bin/getAllMajors",
        data: {
            //AcadProg: 'UGD'         		 
        },

        dataType: 'json',

        success: function(myresponse) {
            if (myresponse.length >= 1) {
                for (var i = 0; i < myresponse.length; i++) {
                    allMajorArray.push(myresponse[i].ALL_MAJORS);
                }
                NewMajor.items = allMajorArray;
            }
            gifModal.style.display = "none";
        }
    }); // end ajax								
}

function getCourseDetails(userId){
    
        debugger;
		var gifModal = document.getElementById('gifModal');
                       
                       // userId ="jennaslee";
                       
                        $.ajax({

                            type: 'GET',

                            url: "/bin/getDeclarationDetails",

                            data: {
                                action: "COURSE_DETAILS",
                                userId: userId
                            },

                            dataType: 'json',

                            success: function(myresponse) {
                              
                                if (myresponse.length >= 1) {
                                  	LookupResult.value = JSON.stringify(myresponse);
                                    gifModal.style.display = "block";
                                    var k;
                                    var rowcountRemoveAll1 = CourseRow.instanceManager.instanceCount;
                                    for (k = 0; k < rowcountRemoveAll1; k++) {
                                        CourseRow.instanceManager.removeInstance(CourseRow.instanceIndex);
                                    }
                                    CourseRow.instanceManager.removeInstance((CourseRow.instanceManager.instanceCount) - 1);
                                    var i;
                                    
                                    for (i = 0; i <myresponse.length; i++) {
                                        CourseRow.instanceManager.addInstance();
                                        CourseRow.instanceManager.instances[i].CourseNo.value = myresponse[i].CRSE_NAME;
                                        CourseRow.instanceManager.instances[i].ScheduleNo.value = myresponse[i].CLASS_NBR;
                                        CourseRow.instanceManager.instances[i].NumberOfUnits.value = myresponse[i].UNT_TAKEN;
                                        CourseRow.instanceManager.instances[i].NameOfInstructor.value = myresponse[i].INSTR_NAME;
                                        CourseRow.instanceManager.instances[i].SectionNo.value = myresponse[i].CLASS_SECTION;
                                    }
                                    var rowcount = CourseRow.instanceManager.instanceCount;
                                    CourseRow.instanceManager.removeInstance(rowcount - 1);
                                    gifModal.style.display = "none";
                                    
                                } else {
                                    
                                    var n;                                   
                                    var rowcountRemoveAll2 = CourseRow.instanceManager.instanceCount;
                                    for (n = 0; n < rowcountRemoveAll2; n++) {
                                        debugger;
                                        CourseRow.instanceManager.removeInstance(CourseRow.instanceIndex);
                                    }
                                    var rowcount1 = CourseRow.instanceManager.instanceCount;
                                    CourseRow.instanceManager.instances[rowcount1 - 1].CourseNo.value = null;
                                    CourseRow.instanceManager.instances[rowcount1 - 1].ScheduleNo.value = null;
                                    CourseRow.instanceManager.instances[rowcount1 - 1].NumberOfUnits.value = null;
                                    CourseRow.instanceManager.instances[rowcount1 - 1].NameOfInstructor.value = null;
                                    CourseRow.instanceManager.instances[rowcount1 - 1].SectionNo.value = null;
                                    CourseRow.instanceManager.removeInstance(rowcount1 - 1);
                                   
                                    gifModal.style.display = "none";
                                    showErrorModal("Alert!", "No matching records found");
                                }
                            },
                            error: function(error) {
                                 alert("error block=" + error);

                            }
                        });
                    

            

 

}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_LName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_LName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_FName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_FName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_MName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_MName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_formerMajorRB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_formerMajorRB_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_AdmitTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_AdmitTerm_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_CurrentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_CurrentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_NewMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_NewMajor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  
  	var program = this.value;

    if (this.value !== null) {

        $.ajax({

            type: 'GET',
            url: "/bin/getAllMajorsCode",
            data: {
                TrnscrDescr: program
            },

            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length >= 1) {
                    NewMajorAcadPlanCode.value = myresponse[0].ACAD_PLAN;
                }
                gifModal.style.display = "none";
            }
        }); // end of ajax call
    } else {
        gifModal.style.display = "none";
    }
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_CurrentMajorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_CurrentMajorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_NewMajorAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_NewMajorAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_DropCoursePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_DropCoursePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value !== null) {
    var rowCount3= CourseRow.instanceManager.instanceCount;   

  var flag = false;

   for (n = 0; n < rowCount3; n++) {
     if(CourseRow.instanceManager.instances[n].SelectCB.value != "Yes"){
       flag = false;       
     }else{
       flag = true;
       break;
     }
   }
    if(flag === false){
      this.visible = false;
    }else{
       this.visible = true;
    }
   
}


        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_SelectAll_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_SelectAll_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             var rowCount2 = CourseRow.instanceManager.instanceCount;
debugger;
    
if(AdvisorSignaturePanel.visible  === true && ARSCPanel.visible === false && RecordsOfficeUseOnlyPanel.visible === false){
if(this.value == "1")
  {
   for (n = 0; n < rowCount2; n++) {
     CourseRow.instanceManager.instances[n].SelectCB.value = "Yes";
     CourseRow.instanceManager.instances[n].SelectCB.enabled = false;
   }
    
  }
else
  {   
    this.enabled = true;
     for (n = 0; n < rowCount2; n++) {   
       CourseRow.instanceManager.instances[n].SelectCB.value = null;
     CourseRow.instanceManager.instances[n].SelectCB.enabled = true;
   }
  }

}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_SelectCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_SelectCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowCount3= CourseRow.instanceManager.instanceCount;    
debugger;
    
if(AdvisorSignaturePanel.visible  === true && ARSCPanel.visible === false && RecordsOfficeUseOnlyPanel.visible === false){
  var flag1 = false;
if(this.value == "Yes")
  { 
   for (n = 0; n < rowCount3; n++) {
     if(CourseRow.instanceManager.instances[n].SelectCB.value != "Yes"){
       flag = false;
       break;
     }else{
       flag = true;
     }
   }
    if(flag === true){
      SelectAll.value = "1";
    }
   }
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_CourseNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_CourseNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_ScheduleNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_ScheduleNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_NumberOfUnits_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_NumberOfUnits_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_NameOfInstructor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_NameOfInstructor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_SectionNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_SectionNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_AdvisorCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_AdvisorCB_init0 = function (scope) {
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
 * @function declaration_form_cbe_declaration_form.generated_AdvisorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_AdvisorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value === "ToAdvisor"){
debugger;
if(this.value == 1){
  AdvisorSignDate.value = FirstName.value +" " + LastName.value;
  AdvisorSign.enabled = false;
  
  debugger;
  if (AdvisorSignDate.value === null) {
        /*var dateString = new Date().toLocaleString("en-US", {
          timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        StudentDate.value = d;*/
    debugger;

    	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                AdvisorSign.value = myresponse.userName;
                AdvisorSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      AdvisorSign.enabled = false;
    
  } else {
      AdvisorSignDate.enabled = false;
      AdvisorSign.enabled = false;
  }
}else{
    AdvisorSignDate.value = null;
    AdvisorSign.value = null;
}

        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_AdvisorCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_AdvisorCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         AdvisorSign.value = myresponse.userName;
     }
  });
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_AdvisorCB_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_AdvisorCB_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value === "ToAdvisor"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
AdvisorSign.value = userValue;
AdvisorSignDate.value = myresopnse.SERVER_DATE;
  Authorization.value =myresopnse.userName;
},
error: function(error) {
alert("error block=" + error);
}
});

AdvisorSign.enabled = false;
AdvisorSignDate.enabled = false;
  Authorization.enabled =false;



}else{
AdvisorSign.value = "";
AdvisorSignDate.value = null;
  Authorization.value = "";
}

        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_AdvisorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_AdvisorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_OfficeUse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_OfficeUse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToRecords"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
RecordsSign.value = userValue;
RecordsSignDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

RecordsSign.enabled = false;
RecordsSignDate.enabled = false;



}else{
RecordsSign.value = "";
RecordsSignDate.value = null;
}
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_RecordsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_RecordsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_ARSCUse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_ARSCUse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToARSC"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
ARSCSign.value = userValue;
ARSCSignDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

ARSCSign.enabled = false;
ARSCSignDate.enabled = false;



}else{
ARSCSign.value = "";
ARSCSignDate.value = null;
}
}
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_ARSCSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_ARSCSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_GeneratePDFButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_GeneratePDFButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;

if (cwid.value !== null ) {
  submitFlag=0;
      
 } else{
   
   showErrorModal("Alert!","Please enter CWID");   
    
 }


if( submitFlag === 0){
  getPdf();
}

  
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
          
            jsonData.append('formPath', '/content/dam/formsanddocuments/declaration-form/cbe-declaration-form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FName.value+"_"+LName.value + "(" + cwid.value + ")" + "_" + Date.now());   
                       // jsonData.append('fileName', StudentInformation.value + "(" + CWID.value + ")" + "_" + Date.now());   

                 
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
                  debugger;
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
 * @function declaration_form_cbe_declaration_form.generated_saveguidedraft1639984361844_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_saveguidedraft1639984361844_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(CWID.value !== null){
     aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value;
    }
handleDraftSave(this);
        }
	}
}
/**
 * @function declaration_form_cbe_declaration_form.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_cbe_declaration_form.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (cwid.value !== null) {
    aftiaDescCWID.value = FName.value + " " + LName.value + " " + cwid.value;
    EmailSubject.value = "Declaration form - " + FName.value + " " + LName.value + "(" + cwid.value + ")";


 //   var testEmail = "swathi.lumari@thoughtfocus.com";
  var testEmail = "yjayaram@fullerton.edu";
    HiddenAdvisorEmail.value = testEmail;
    HiddentStudentEmailID.value = testEmail;


    submitValidation();
} else {
    showErrorModal("Alert !", "Please enter student CWID");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].FormPanel[0].StudentInformationPanel[0].CWID[0]");
}


function submitValidation() {
    /*if(formerMajorRB.value === null){
    	showErrorModal("Alert !", "Please select at least one former major");
    	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].FormPanel[0].StudentInformationPanel[0].formerMajorRB[0]");
    }
    else if(accountCHK.value === null && informationSystemsCHK.value === null && businessEconomicsCHK.value === null && entertainmentCHK.value === null && entrepreneurshipCHK.value === null && financeCHK.value === null && generalManagementCHK.value === null && humanResourceCHK.value === null && businessAnalyticsCHK.value === null && decisionSciencesCHK.value === null && legalStudiesCHK.value === null && marketingCHK.value === null && supplyChainCHK.value === null && riskManagementCHK.value === null && economicsCHK.value === null && globalTradeCHK.value === null && interculturalManagementCHK.value === null){
    	
    		showErrorModal("Alert !","Please select at least one new major");
    		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].FormPanel[0].ChangerMajorPanel[0].accountCHK[0]");
    }*/
    if (CurrentMajor.value !== null && NewMajor.value === null) {
        showErrorModal("Alert !", "Please select new major to change");
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DeclarationDetailsPanel[0].CurrentMajorPanel[0].NewMajor[0]");
    } else {
        var rowcount1 = CourseRow.instanceManager.instanceCount;

        for (n = 0; n <  CourseRow.instanceManager.instanceCount; n++) {
            if (CourseRow.instanceManager.instances[n].SelectCB.value != "Yes") {
                CourseRow.instanceManager.instances[n].SelectCB.value = null;
                CourseRow.instanceManager.instances[n].CourseNo.value = null;
                CourseRow.instanceManager.instances[n].ScheduleNo.value = null;
                CourseRow.instanceManager.instances[n].NumberOfUnits.value = null;
                CourseRow.instanceManager.instances[n].NameOfInstructor.value = null;
                CourseRow.instanceManager.instances[n].SectionNo.value = null;
                CourseRow.instanceManager.removeInstance(n);
            }
        }
       
        guideBridge.submit();
    }
}
        }
	}
}
