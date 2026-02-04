/**
 * @function grade_change_form_grade_change1.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("Root Initilize");

var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none";   

if(InstructorCHK.value == null){	
  
  var dateString = new Date().toLocaleString("en-US", {
  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
  }).replace(/[^ -~]/g, '');
  var dateObject = new Date(dateString);
  var curyear = dateObject.getFullYear();
  var curyearMonth = dateObject.getMonth() + 1;
  var curyearDay = dateObject.getDate();
  var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
  TodayDate.value = dateInitiated; 
}


if (StageIndicator.value === null){
  ChairSignaturePanel.visible = false;
  DeanSignaturePanel.visible = false;
  RecordsPanel.visible = false;
}else if (StageIndicator.value == "ToChair"){
  gifModal.style.display = "none";
  ChairSignaturePanel.visible = true;
  InstructorSignaturePanel.enabled = false;
  DeanSignaturePanel.visible = false;
  RecordsPanel.visible = false;
  SearchPanel.enabled = false;
  GradeChangeInformationPanel.enabled = false;
  searchButton.visible = false;
  resetButton.visible = false;
  
}else if (StageIndicator.value == "ToDean"){  
  gifModal.style.display = "none";
  InstructorSignaturePanel.enabled = false;
  ChairSignaturePanel.visible = true;
  ChairSignaturePanel.enabled = false;
  DeanSignaturePanel.visible = true;
  SearchPanel.enabled = false;
  GradeChangeInformationPanel.enabled = false;  
  RecordsPanel.visible = false;
  searchButton.visible = false;
  resetButton.visible = false;

}else if (StageIndicator.value == "ToRecords"){  
  gifModal.style.display = "none";
  InstructorSignaturePanel.enabled = false;
  ChairSignaturePanel.visible = true;
  ChairSignaturePanel.enabled = false;
  DeanSignaturePanel.visible = true;
  DeanSignaturePanel.enabled = false;
  RecordsPanel.visible = true;
  SearchPanel.enabled = false;
  GradeChangeInformationPanel.enabled = false; 
  searchButton.visible = false;
  resetButton.visible = false;

}

        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            //alert("StageIndicator value from Rool Panel=" + StageIndicator.value);

    $.ajax({

        type: 'GET', 

        url:"/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse){
            var userValue=myresopnse.userId;
            //var userValue="linhknguyen";
            //alert("userValue="+userValue);
            logUser.value = userValue;
          	workflow_initiator.value = userValue;

          	if(StageIndicator.value === null){ 
					  
					 var gifModal = document.getElementById('gifModal');
					 if(logUser.value !== "admin"){
							gifModal.style.display = "block";
					 }else{
							gifModal.style.display = "none";
					 }

					 var term = Term.value;
					  
					$.ajax({

					  type: 'GET',

					  url: "/bin/getGCLoggedinUserIDNew",


					  data: {
							instUserID: userValue,
							termDesc: term
					  },

					  dataType: 'json',

					  success: function(mySecondResponse){
						  
								$.ajax({

										  type: 'GET',

										  url: "/bin/getCWIDfromUserID",

										  data: {
												instUserID: userValue
										  },

										  dataType: 'json',

										  success: function(myresponse){

												if(myresponse.length >= 1){
													InstructorCWID.value = myresponse[0].instCwid;
												}

												if(mySecondResponse.length >= 1){
												  InstructorCWID.value = mySecondResponse[0].instCwid;
												  InstructorName.value = mySecondResponse[0].instr_name;
												  //caseID.value = myresponse[0].CASEID;
													
												   InitiatorBox.value = InstructorCWID.value;
											   
													  var InstCwid = InstructorCWID.value;

													  $.ajax({

														  type: 'GET', 

														  url:"/bin/getGCTermServletNew",

														  data: {
															  termDesc: term,
															  instCwid: InstCwid
														  },
														  dataType: 'json',
														  success: function(myresponse){
															
															if(myresponse.length >= 1){

															  CourseLevel.value = myresponse[0].course_level;  
															  DeptCode.value = myresponse[0].department_code;
															  HiddenInstructorUserID.value = myresponse[0].inst_userId;

															  var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");
																  for(var i=0; i < myresponse.length; i++){
																		  var opt3 = document.createElement("option");
																		  opt3.value = myresponse[i].clsCrs;
																		  opt3.innerHTML = myresponse[i].clsCrs; 
																		  courseName_NumberSelect.appendChild(opt3);
																  } 
														
															}
															gifModal.style.display = "none";

														  },
														error: function(error){                          
															showErrorModal("Alert !", "No Matching Records Found"); 
															gifModal.style.display = "none";
														  }
													  });

												}else {
													showErrorModal("Alert !", "No Matching Records Found"); 
													gifModal.style.display = "none";
												}       
											  },					

								});
							}
					  });
				 }
			  
			},
    });

        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if(ChairSignaturePanel.visible == false){
		
		$.ajax({

			type: 'GET', 

			url:"/bin/getCaseID",
          
			dataType: 'json',
          
			success: function(myresponse){               
                  
                    caseID.value = myresponse.CASEID;
      				
				},
		});
}
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_caseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_caseID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_Term_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_Term_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("From Term commit");
if(ChairSignaturePanel.visible == false){	
	if(StageIndicator.value === null){

      CourseName.value = "";
      SectionNumber.value = "";
      ClassNumber.value = "";
      StudentCWID.value = "";
      //InstructorCWID.value = "";
      InstructorName.value = "";
      CourseLevel.value = "";
      DeptCode.value = "";
      InstructorCHK.value = null;
      InstructorComment.value = null;
      massGradeChange.value = null;

   		var sectionNumber = document.querySelector(".SectionNumberSelect select");
		var sectionLength = sectionNumber.options.length;
        for(var n = sectionLength; n > 0; n--){
              sectionNumber.options[n] = null;
        }
      
        var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");           
		var length = courseName_NumberSelect.options.length;   // To clear Class & Course Name drop-down
  		for (i = length; i > 0; i--) {					  
   			 courseName_NumberSelect.options[i] = null;
  		}
      
      var term = Term.value;
      var InstCwid = InstructorCWID.value;
      
	  if(InstructorCWID.value !== null){
	  
			  $.ajax({

				type: 'GET', 

				url:"/bin/getGCTermServletNew",

				data: {
				  termDesc: term,
				  instCwid: InstCwid
				},
				dataType: 'json',
				success: function(myresponse){

				  if(myresponse.length > 0){                					 
					gifModal.style.display = "none";

					CourseLevel.value = myresponse[0].course_level;  
					InstructorName.value = myresponse[0].instr_name;
					HiddenInstructorUserID.value = myresponse[0].inst_userId;
					DeptCode.value = myresponse[0].department_code;  
					// HiddenClassNBR.value = myresponse[0].class_nbr;

					var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");

					var length = courseName_NumberSelect.options.length;					// Code For Clearing Class Number and Course Name
					for (i = length; i > 0; i--) {
					  courseName_NumberSelect.options[i] = null;
					} 
					for(var i=0; i < myresponse.length; i++){
					  var opt3 = document.createElement("option");
					  opt3.value = myresponse[i].clsCrs;
					  opt3.innerHTML = myresponse[i].clsCrs; 
					  courseName_NumberSelect.appendChild(opt3);
					}        

					gifModal.style.display="none";
				  }else{																	

					showErrorModal("Alert !", "No Matching Records Found. Please enter valid details"); 
					InstructorName.value = null;
					var courseName_NumberSelect1 = document.querySelector(".CourseName_NumberSelect select");           
					var length1 = courseName_NumberSelect1.options.length;   // To clear Class & Course Name drop-down
					for (j = length1; j > 0; j--) {					  
					  courseName_NumberSelect1.options[j] = null;
					}
					gifModal.style.display="none";
				  }

				},
				error: function(error){

				  showErrorModal("Alert !", "Error: No Records Found. Please enter valid details");
				  gifModal.style.display = "none";
				}
			  });
		}else{
				showErrorModal("Field_Name: Instructor CWID", "Please enter a valid CWID, starts with 8 and should be of 9 digits");
		}
	}
}
TermFlagForInstCWIDCommit.value = true;


        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_InstructorCWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_InstructorCWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("From InstCWID commit");
//alert("course name flag "+courseNameFlag.value); 
var instCWID = this.value; 
  

if(ChairSignaturePanel.visible == false){	
if(StageIndicator.value === null){  
  	 	
	if(ResetFlagBox.value === "0") {		// Reset Flag for Reset Records Button. '0' means No Reset Button clicked
      	
       	if(instCWID !== InitiatorBox.value){
          
      		InstructorName.value = null;
          	CourseName.value = "";
            SectionNumber.value = "";
            ClassNumber.value = "";
            StudentCWID.value = "";     
            CourseLevel.value = "";
            DeptCode.value = ""; 
			InstructorCHK.value = null;
            InstructorComment.value = null;
            massGradeChange.value = null;
          
          	var sectionNumber = document.querySelector(".SectionNumberSelect select");
			var sectionLength = sectionNumber.options.length;
            for(var n = sectionLength; n > 0; n--){
                sectionNumber.options[n] = null;
            }

			/*var rowcountRemoveAll = Row1.instanceManager.instanceCount;  // To clear the Table Data
            //alert("total rows: "+rowcountRemoveAll);
            for(i=0; i< rowcountRemoveAll;i++){
              // alert("row index removing "+i);
              Row1.instanceManager.removeInstance(Row1.instanceIndex);                
            } */
       
            var gifModal = document.getElementById('gifModal'); 
            gifModal.style.display = "block";

            var term = Term.value;
            var InstCwid = InstructorCWID.value;

      	    var cwidValue = InstCwid;
            var pattern = /^8\d{8}$/;
            var result = pattern.test(cwidValue);
          
		    if(term === "Summer 2020" || term === "Spring 2020" || term === "Winter 2020" || term === "Fall 2019" || term === "Summer 2019" || term === "Spring 2019" || term === "Winter 2019" || term === "Fall 2018" || term === "Summer 2018" || term === "Spring 2018"){
             
					 if(result === true){                      

							  $.ajax({

								type: 'GET', 

								url:"/bin/getGCTermServletNew",

								data: {
								  termDesc: term,
								  instCwid: InstCwid
								},
								dataType: 'json',
								success: function(myresponse){

									  if(myresponse.length > 0){                					 
									  gifModal.style.display = "none";

									  CourseLevel.value = myresponse[0].course_level;  
									  InstructorName.value = myresponse[0].instr_name;
									  HiddenInstructorUserID.value = myresponse[0].inst_userId;
									  DeptCode.value = myresponse[0].department_code;  
									 // HiddenClassNBR.value = myresponse[0].class_nbr;

									 var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");

									 var length = courseName_NumberSelect.options.length;					// Code For Clearing Class Number and Course Name
									 for (i = length; i > 0; i--) {
										  courseName_NumberSelect.options[i] = null;
									  } 
									 for(var i=0; i < myresponse.length; i++){
										var opt3 = document.createElement("option");
										opt3.value = myresponse[i].clsCrs;
										opt3.innerHTML = myresponse[i].clsCrs; 
										courseName_NumberSelect.appendChild(opt3);
									 }        

										gifModal.style.display="none";
									  }else{																	
										
										showErrorModal("Alert !", "No matching records found. Please enter valid details"); 
                                        InstructorName.value = null;
                                       	var courseName_NumberSelect1 = document.querySelector(".CourseName_NumberSelect select");           
                                        var length1 = courseName_NumberSelect1.options.length;   // To clear Class & Course Name drop-down
                                          for (j = length1; j > 0; j--) {					  
                                            courseName_NumberSelect1.options[j] = null;
                                          }
										gifModal.style.display="none";
									 }

									},
									error: function(error){
									  
									  showErrorModal("Alert !", "Error: No records found. Please enter valid details");
									  gifModal.style.display = "none";
									}
							});
						}else{
                          		if(this.value !== null){
                          			  showErrorModal("Alert !","Please enter a valid CWID, starts with 8 and should be of 9 digits");
                                  	  InstructorName.value = null;
                                  	  var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");           
                                      var length = courseName_NumberSelect.options.length;   // To clear Class & Course Name drop-down
                                      for (i = length; i > 0; i--) {					  
                                           courseName_NumberSelect.options[i] = null;
                                      }
                          				gifModal.style.display="none";								
                                }else{
                                  		gifModal.style.display="none";
                                }
                              }								
						 
					}else{              		
						
                      	showErrorModal("Alert !", "Please select term to search records");						
                      	gifModal.style.display="none";
				   }
        	}
       //}
	}
}
}// abab
//alert("course name flag form last "+courseNameFlag.value); 
//courseNameFlag.value = 0;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_InstructorName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_InstructorName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_Class_CourseName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_Class_CourseName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("Class & Course Name Commit");

courseNameFlag.value = 1;
 //alert("course name flag from class  "+courseNameFlag.value);
var gifModal = document.getElementById('gifModal');    
gifModal.style.display = "block";

var sectionNumber = document.querySelector(".SectionNumberSelect select");
var sectionLength = sectionNumber.options.length;
    for(var n = sectionLength; n > 0; n--){
        sectionNumber.options[n] = null;
    }

 /* var rowcountRemoveAll = Row1.instanceManager.instanceCount;  // To clear the Table Data
//alert("total rows: "+rowcountRemoveAll);
  for(i=0; i< rowcountRemoveAll;i++){
   // alert("row index removing "+i);
    Row1.instanceManager.removeInstance(Row1.instanceIndex);                
  }*/

CourseName.value = this.value.trim().split("-")[1]; 
ClassNumber.value = this.value.trim().split("-")[0]; 

var instCWID = InstructorCWID.value;
var termValue = Term.value;
var clsNbr = ClassNumber.value;
//alert("Class Number value is="+clsNbr);

InstructorCHK.value = null;
InstructorComment.value = null;



$.ajax ({
  
  		type: 'GET',
  
  		url: '/bin/getGCClassSectionNew',
  
  		data: {
          			instCwid: instCWID, 
					termDesc: termValue,
          			classNumber: clsNbr
        }, 
  
  		dataType: 'json',
  
  		success: function(myresponse){
          			if(myresponse.length > 0){
                            var sectionNumber = document.querySelector(".SectionNumberSelect select");                                 
                            for(var n=0; n < myresponse.length; n++){
                              var opt = document.createElement("option");
                              opt.value = myresponse[n].classSection;
                              opt.innerHTML = myresponse[n].classSection; 
                              sectionNumber.appendChild(opt);
                            }
                    } 
          			gifModal.style.display = "none";
          			massGradeChange.resetData(null);
                    GradeChangeTo.resetData("Select Grade"); 
                    Reason.resetData("Select Reason"); 
                    Description.resetData("");	
                    GradeCHK.resetData("");
                    RPFieldDate.resetData("");
                    GradeChangeTo.enabled = true;
        }  
}); 

        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_Class_CourseName_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_Class_CourseName_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            CourseName.value = this.value.trim().split("-")[1]; 
ClassNumber.value = this.value.trim().split("-")[0]; 

/*var tripleStringList  = document.querySelectorAll(".CourseName_ClassName_SectionNumberSelect select option");
//alert(tripleStringList.length);
for (var i =0; i< tripleStringList.length; i++){
   //alert(tripleStringList[i].value);
  if (tripleStringList[i].value.includes(this.value.trim())){
   var sectionVal = tripleStringList[i].value.trim().split("-")[2];
	//alert(sectionVal);   
   SectionNumber.value = sectionVal; 
 
  }
}*/
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_SectionNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_SectionNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_ClassNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_ClassNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_ClassNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_ClassNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

   type: 'GET',

      	url: "/bin/getGCClassLookUp",
     
	data:  {
        		classNbr : this.value,        		     		     	 	        	 
        	 	instUserID : logUser.value
      },
      
      dataType: 'JSON',

    success: function(myresponse) {
      if(myresponse.length > 0){
         CourseName.value = myresponse[0].CRSE_NAME;
      	 SectionNumber.value = myresponse[0].CLASS_SECTION;
     
        	// Getting all the information from database on form
      		InstructorLastName.value = myresponse[0].INSTR_NAME;      
			//InstructorLastName.value = myresponse[0].
			HiddenSchduleNBR.value = myresponse[0].SCHEDULE_NBR;
			HiddenCourseName.value = myresponse[0].CRSE_NAME ;
			HiddenStudentEnrolStatus.value = myresponse[0].STDNT_ENRL_STATUS ;
			HiddenMajorType.value = myresponse[0].MAJOR_TYPE ;
			HiddenCourseLevel.value = myresponse[0].COURSE_LEVEL ;
			HiddenTermDescription.value = myresponse[0].TERM_DESCR ;
			HiddenDepartmentCode.value = myresponse[0].DEPT_CD ;
			HiddenMajorCode.value = myresponse[0].MAJOR_CODE ;
			HiddenCollege.value = myresponse[0].COLLEGE ;
			HiddenMajorDescription.value = myresponse[0].MAJOR_DESCR ;
			HiddenDegreeType.value = myresponse[0].DEGREE_TYPE ;
			HiddenEffSEQ.value = myresponse[0].EFFSEQ ;
			HiddenInstituation.value = myresponse[0].INSTITUTION ;
			HiddenEffDT.value = myresponse[0].EFFDT  ;
			HiddenAcademicProg.value = myresponse[0].ACAD_PROG ;
			HiddenUnitTaken.value = myresponse[0].UNT_TAKEN  ;
			HiddenStudentMiddleName.value = myresponse[0].MNAME ;
			HiddenStudentCarNBR.value = myresponse[0].STDNT_CAR_NBR ;
			HiddenStudentUserID.value = myresponse[0].STUDENT_USERID ;
			HiddenStudentID.value = myresponse[0].STUDENT_EMAIL ;
			HiddenInstructorCWID.value = myresponse[0].INSTR_CWID  ;			
			HiddenInstructorEmail.value = myresponse[0].INSTR_EMAIL ;
			HiddenChairCWID.value = myresponse[0].CHAIR_CWID ;
			HiddenChairName.value = myresponse[0].CHAIR_NAME ;
			HiddenChairUserID.value = myresponse[0].CHAIR_USERID ;
			HiddenChairEmail.value = myresponse[0].CHAIR_EMAIL ;
			HiddenDeanCWID.value = myresponse[0].DEAN_CWID ;
			HiddenDeanName.value = myresponse[0].DEAN_NAME ;
			HiddenDeanUserID.value = myresponse[0].DEAN_USERID ;
			HiddenDeanEmail.value = myresponse[0].DEAN_EMAIL ;
			HiddenAssociateDeanCWID.value = myresponse[0].ASS_DEAN_CWID ;
			HiddenAssociateDeanName.value = myresponse[0].ASS_DEAN_NAME ;
			HiddenAssociateDeanUserID.value = myresponse[0].ASS_DEAN_USERID ;
			HiddenAssociateDeanEmail.value = myresponse[0].ASS_DEAN_EMAIL ; 
        
      }
     
    }, 
  error: function(error){
   alert ("Error "+ error);
	}
});
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_CourseName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_CourseName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_CourseLevel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_CourseLevel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_DeptCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_DeptCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_StudentCWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_StudentCWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwidValue = this.value;
var pattern = /^8\d{8}$/;
var result = pattern.test(cwidValue);

if(result !== true && this.value !== null){
      
  	showErrorModal("Field_Name: Student CWID","Please enter a valid CWID, starts with 8 and should be of 9 digits");
	//guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].SearchPanel[0].StudentCWID[0]");
}


/*

var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");           
var length = courseName_NumberSelect.options.length;   // To clear Class & Course Name drop-down
  for (i = length; i > 0; i--) {					  
    courseName_NumberSelect.options[i] = null; 
  } */
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_TodayDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_TodayDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            var dateString = new Date().toLocaleString("en-US", {
timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
}).replace(/[^ -~]/g, '');
var dateObject = new Date(dateString);
var curyear = dateObject.getFullYear();
var curyearMonth = dateObject.getMonth() + 1;
var curyearDay = dateObject.getDate();
var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
this.value = dateInitiated;


this.enabled = false;


        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_searchButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_searchButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            GradeChangeTo.enabled = true;
massGradeChange.resetData(null);
GradeCHK.resetData("");
GradeChangeTo.resetData("Select Grade"); 
Reason.resetData("Select Reason"); 
Description.resetData("");	
RPFieldDate.resetData("");

if(StageIndicator.value === null){ 
	  var gifModal = document.getElementById('gifModal');    
      gifModal.style.display = "block";

  	/*  for (var m =0; m < Row1.instanceManager.instanceCount; m++){
        
        Row1.instanceManager.instances[m].GradeCHK.enabled = true;
      }  	 */
  
      // Storing the inputs from instructor/initiator in the form-fields into variables to use them for Ajax call
      var instCWID = InstructorCWID.value;
      var term = Term.value; 
      var courseName = CourseName.value; 
      var secNumber = SectionNumber.value;
  
      var clasNumber = ClassNumber.value;
      var cwid = StudentCWID.value;
  
      var clearGrades = document.querySelector(".table-row-dropDown1 select");   /* clearing the New Grade Drop-down values */
      var length = clearGrades.options.length;
  
      for(var i = length; i > 0; i--){
          clearGrades.options[i] = null;
      }	
  
  		if(massGradeChange.value !== null){
 			 massGradeChange.value = null;
		}

     	if(Term.value === null){
          	showErrorModal("Field_Name: Term","Select Term to search records");            
            gifModal.style.display = "none";
          
      	}else if(InstructorCWID.value === null){
          	
          	showErrorModal("Field_Name: Instructor CWID","Provide CWID to search records");         	            
          	gifModal.style.display = "none";
         
        }else if (Class_CourseName.value === null){          
           
            showErrorModal("Field_Name: Class & Course Name","Select class number & course name"); 
          	gifModal.style.display = "none";    
          
     	}else if(SectionNumber.value === null){
          
			showErrorModal("Field_Name: Section Number","Select a section number to search records");
            gifModal.style.display = "none"; 
          
		}else{

			//alert("here2");	
			
             //LoadingText.visible = true;
			  var rowcountRemoveAll = Row1.instanceManager.instanceCount;
			  for(i=0; i<=rowcountRemoveAll;i++){
					  //alert("button");
				  Row1.instanceManager.removeInstance(Row1.instanceIndex);                
			   }
               
		  
			  $.ajax({

				 type: 'GET',

					  url: "/bin/getGradeChangeDetailsNew",


					data:  {
							  termDesc : term,
							  courseName : courseName.trim(),         	 
							  classSection : secNumber.trim(),
							  classNumber : clasNumber.trim(),
							  instCwid : instCWID.trim(),     		     	 	        	 
							  cwid : cwid
					},

					dataType: 'JSON',

				  success: function(myresponse) {           
						 	
						  if(myresponse.length > 0){
							 // gifModal.style.display = "none";
							 
							  massGradeChange.enabled = true;                     

							  var courseID = myresponse[0].CRSE_ID;

							  $.ajax({

									  type: 'GET',

									  url: "/bin/getGCSchemaNew",

									  data: {
										  termDesc: term,
										  courseId: courseID						
									  },

								  dataType: 'JSON',

								  success: function(myresponse){
									guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].InformationTab[0].GradeChangeInformationPanel[0].Table_MassGrade_Panel[0].massGradeChange[0]");
									  if(myresponse.length > 0){
										  //alert("Inside Grade response");
										  for(m=0; m < myresponse.length; m++){

											  GradingBasisHidden.value = myresponse[0].GRADING_BASIS;
											  GradingSchemeHidden.value = myresponse[0].GRADING_SCHEME;

										  }// enf for
									  var GradingBasis = GradingBasisHidden.value;
									  var GradingScheme = GradingSchemeHidden.value;   


									   $.ajax({

										  type: 'GET',

										url: "/bin/getGCGradingServletNew",

										  data: {
											  courseId: courseID ,// '000045',  
											  gradingBasis: GradingBasis, //,	'GRD',
											  gradingScheme: GradingScheme //	'UGR'						
										  },

										 dataType: 'JSON',

										 success: function(myresponse){
                                           
                                            GradeChangeTo.enabled = true;
																			  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].InformationTab[0].GradeChangeInformationPanel[0].Table_MassGrade_Panel[0].massGradeChange[0]");					
										 
										   var clearGrades = document.querySelector(".table-row-dropDown1 select"); /* clearing the New Grade Drop-down values */
                                            var length = clearGrades.options.length;
                                            for(var a = length; a > 0; a--){
                                                clearGrades.options[a] = null;
                                            }	

										  var gradeChangeToSelectList  = document.querySelectorAll(".table-row-dropDown1 select");
										  if(myresponse.length > 0){


										  for (var i=0; i< gradeChangeToSelectList.length; i++){

											  for(var j=0; j < myresponse.length; j++){

													  var opt = document.createElement("option");
													  opt.value = myresponse[j].CRSE_GRADE_INPUT;
													  opt.innerHTML = myresponse[j].CRSE_GRADE_INPUT; 
													  gradeChangeToSelectList[i].appendChild(opt);

											  }// for add option elements

										  }// for get select element 
									  }else if (myresponse.length === undefined ){
										var gradeArr = myresponse['Grade To'];

										  for (var i=0; i< gradeChangeToSelectList.length; i++){

												for(var j=0; j < gradeArr.length; j++){

														var opt = document.createElement("option");
														opt.value = gradeArr[j];
														opt.innerHTML = gradeArr[j];
														gradeChangeToSelectList[i].appendChild(opt);

												}// for add option elements

											  }// for get select element 


									  }// end if myresp3
									gifModal.style.display = "none";
									 }//end success 3

								  });  

								  }// end if myrsp2 
								  }//end success 2


							  });// end ajax 2

							   for(i=0;i<myresponse.length;i++){                		
									  Row1.instanceManager.addInstance();
                                 	  Row1.instanceManager.instances[i].GradeCHK.enabled = true;
									  Row1.instanceManager.instances[i].StudentLastName.value = myresponse[i].LNAME;
									  Row1.instanceManager.instances[i].StudentLastName.enabled = false;
									  Row1.instanceManager.instances[i].StudentFirstName.value = myresponse[i].FNAME;
									  Row1.instanceManager.instances[i].StudentFirstName.enabled = false;
									  Row1.instanceManager.instances[i].SID.value = myresponse[i].CWID;
									  Row1.instanceManager.instances[i].SID.enabled = false;
									  Row1.instanceManager.instances[i].UnitTaken.value = myresponse[i].UNT_TAKEN;
									  Row1.instanceManager.instances[i].UnitTaken.enabled = false;
									  Row1.instanceManager.instances[i].GradeChangeFrom.value = myresponse[i].CURRENT_GRADE;
									  Row1.instanceManager.instances[i].GradeChangeFrom.enabled = false;               
							   } 
							  var rowcount = Row1.instanceManager.instanceCount;
							  Row1.instanceManager.removeInstance(rowcount - 1);
                              gifModal.style.display = "none";
								//LoadingText.visible = false;
							  // Getting all the information from database on form
							  InstructorName.value = myresponse[0].INSTR_NAME;
							  DeptCode.value = myresponse[0].DEPT_CD;
							  CourseLevel.value = myresponse[0].COURSE_LEVEL;
							  HiddenCourseID.value = myresponse[0].CRSE_ID;
                              var instName = myresponse[0].INSTR_NAME;
                              var nameArray = instName.split(',');
                              //ert("value is= "+nameArray);
                              HiddenInstructorName.value = nameArray[0];
                            //lert("vfieldlldd==="+HiddenInstructorName.value);
							  //HiddenInstructorName.value = myresponse[0].INSTR_NAME;
							  HiddenSchduleNBR.value = myresponse[0].SCHEDULE_NBR;
							  //HiddenCourseName.value = myresponse[0].CRSE_NAME ;
							  HiddenStudentEnrolStatus.value = myresponse[0].STDNT_ENRL_STATUS ;
							  HiddenMajorType.value = myresponse[0].MAJOR_TYPE ;
							  HiddentTermID.value = myresponse[0].STRM;
							  HiddenTermDescription.value = myresponse[0].TERM_DESCR ;
							  HiddenDepartmentCode.value = myresponse[0].DEPT_CD ;
							  HiddenMajorCode.value = myresponse[0].MAJOR_CODE ;
							  HiddenCollege.value = myresponse[0].COLLEGE ;
							  HiddenMajorDescription.value = myresponse[0].MAJOR_DESCR ;
							  HiddenDegreeType.value = myresponse[0].DEGREE_TYPE ;
							  HiddenEffSEQ.value = myresponse[0].EFFSEQ ;
							  HiddenInstituation.value = myresponse[0].INSTITUTION ;
							  HiddenEffDT.value = myresponse[0].EFFDT  ;
							  HiddenAcademicProg.value = myresponse[0].ACAD_PROG ;
							  HiddenUnitTaken.value = myresponse[0].UNT_TAKEN  ;
							  HiddenStudentMiddleName.value = myresponse[0].MNAME ;
							  HiddenStudentCarNBR.value = myresponse[0].STDNT_CAR_NBR ;
							  HiddenStudentUserID.value = myresponse[0].STUDENT_USERID ;
							  HiddenStudentID.value = myresponse[0].STUDENT_EMAIL ;
							  HiddenInstructorCWID.value = myresponse[0].INSTR_CWID  ;
							  HiddenInstructorUserID.value = myresponse[0].INSTR_USERID;
							  HiddenInstructorEmail.value = myresponse[0].INSTR_EMAIL ;
							  HiddenChairCWID.value = myresponse[0].CHAIR_CWID ;
							  HiddenChairName.value = myresponse[0].CHAIR_NAME ;
							  HiddenChairUserID.value = myresponse[0].CHAIR_USERID ;
							  HiddenChairEmail.value = myresponse[0].CHAIR_EMAIL ;
							  HiddenDeanCWID.value = myresponse[0].DEAN_CWID ;
							  HiddenDeanName.value = myresponse[0].DEAN_NAME ;
							  HiddenDeanUserID.value = myresponse[0].DEAN_USERID ;
							  HiddenDeanEmail.value = myresponse[0].DEAN_EMAIL ;
							  HiddenAssociateDeanCWID.value = myresponse[0].ASS_DEAN_CWID ;
							  HiddenAssociateDeanName.value = myresponse[0].ASS_DEAN_NAME ;
							  HiddenAssociateDeanUserID.value = myresponse[0].ASS_DEAN_USERID ;
							  HiddenAssociateDeanEmail.value = myresponse[0].ASS_DEAN_EMAIL ; 

							 
						  }// end if myresp 1	
					else{              
							showErrorModal("Alert !","No Matching Records Found. Please Enter Valid Details");                          
							gifModal.style.display = "none"; 
					}
				  },error: function(error){
				
					  showErrorModal("Alert !","Error: No Matching Records Found. Please Enter Valid Details");
					  gifModal.style.display = "none";       

				}

				
			  }); //ajax 1
		}
}

        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_resetButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_resetButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block"; 

ResetFlagBox.value = 1;

//Term.value = "";
CourseName.value = "";
SectionNumber.value = "";
ClassNumber.value = "";
StudentCWID.value = "";
InstructorCWID.value = "";
InstructorName.value = "";
CourseLevel.value = "";
DeptCode.value = "";
InstructorCHK.value = null;
InstructorComment.value = null;
massGradeChange.value = null;

var courseName_NumberSelect = document.querySelector(".CourseName_NumberSelect select");           
var length = courseName_NumberSelect.options.length;   // To clear Class & Course Name drop-down
  for (i = length; i > 0; i--) {					  
    courseName_NumberSelect.options[i] = null;
  }

var sectionNumber = document.querySelector(".SectionNumberSelect select");
var sectionLength = sectionNumber.options.length;
    for(var n = sectionLength; n > 0; n--){
        sectionNumber.options[n] = null;
    }

 var rowcountRemoveAll = Row1.instanceManager.instanceCount;  // To clear the Table Data
//alert("total rows: "+rowcountRemoveAll);
  for(i=0; i< rowcountRemoveAll;i++){
   // alert("row index removing "+i);
    Row1.instanceManager.removeInstance(Row1.instanceIndex);                
  }
gifModal.style.display = "none";

var clearGridValues = document.querySelectorAll(".ClearValue input"); 
for(var i = 0; i < clearGridValues.length; i++){
  	clearGridValues[i].value = null;
}
setTimeout(function(){ResetFlagBox.value = 0;},200);

GradeChangeTo.value = "Select Grade"; 
Reason.value = "Select Reason"; 
Description.value = null;	
GradeCHK.value = null;


        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_resetButton_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_resetButton_click1 = function (scope) {
    with(this) {
        with(scope) {
            location = window.location;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_Table_MassGrade_Panel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_Table_MassGrade_Panel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_massGradeChange_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_massGradeChange_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_massGradeChange_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_massGradeChange_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("out");

if (StageIndicator.value === null){
  
    var chkboxList = document.querySelectorAll(".table-row-chkbox input");

    var selectboxList1 = document.querySelectorAll(".table-row-dropDown1 select");
    var selectboxList2 = document.querySelectorAll(".table-row-dropDown2 select");

    //alert("MRC value "+MultiRowChecked.value);
    //alert("mass grade value="+this.value);
    if (this.value == 1 ){
      if(MultiRowChecked.value === "false"){
        for (var i = 0; i < selectboxList2.length; i++) {     
            selectboxList2[i].value = 3;  
        }
      } 	
      for (var m =0; m < Row1.instanceManager.instanceCount; m++){
        //alert("row check flag in for loop "+MultiRowChecked.value);
        if(MultiRowChecked.value === "false") Row1.instanceManager.instances[m].Reason.value = "Late grades (Grade Sheets not handed in on time)";
        Row1.instanceManager.instances[m].GradeCHK.value = 1;
      }    
    }else if(this.value == 0 ){
      
          for (var m =0; m < Row1.instanceManager.instanceCount; m++){
              if(MultiRowChecked.value == "false") Row1.instanceManager.instances[m].Reason.value = "";
              //Row1.instanceManager.instances[m].Reason.mandatory = true;
              if(MultiRowChecked.value == "false" && GradeCHKValueFlag.value === "false") Row1.instanceManager.instances[m].GradeCHK.value = null;
          } 
          if(MultiRowChecked.value === "false" && GradeCHKValueFlag.value === "false"){
            for (var i = 0; i < selectboxList2.length; i++) {  
              if(SingleCheckBoxFlag.value !== "checked"){
                selectboxList2[i].selectedIndex =0;
              }// for
            }  
          }

    }
    MultiRowChecked.value = "false";
  	GradeCHKValueFlag.value = "false";
    //alert("row checked flag value last" + MultiRowChecked.value);  

  
}
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_headerItem_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_headerItem_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("out");
var chkboxList = document.querySelectorAll(".table-row-chkbox input");
if (this.value == 1){
  //alert(document.querySelectorAll(".table-row-chkbox input"));
  //document.querySelectorAll(".table-row-chkbox input").value = 1;
  //alert(chkboxList.length);
 for (i = 0; i < chkboxList.length; ++i) {
  chkboxList[i].checked = true;
	}
}else{
  //if(this.value == 0){
  
 for (i = 0; i < chkboxList.length; ++i) {
  chkboxList[i].checked = false;
	}

}
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

var chkboxList = document.querySelectorAll(".table-row-chkbox input");
var trueChkBoxCount = 0;
for(var i=0; i < chkboxList.length; i++){
 if (chkboxList[i].checked === true) {
  		trueChkBoxCount++;   			
	}

}
if(chkboxList.length  > 1){
  if (trueChkBoxCount === chkboxList.length){

      massGradeChange.value = 1;
    }else{
       massGradeChange.value = 0;
    }   		
  }else if(chkboxList.length ===1 ){
    if (trueChkBoxCount === chkboxList.length){
      massGradeChange.value = 0;
    }
  }

if(trueChkBoxCount < chkboxList.length || trueChkBoxCount === 1){
  GradeCHKValueFlag.value = true;
}

if(this.value == 1){ 

  GradeChangeTo.mandatory = true;
  Reason.mandatory = true;
  SingleCheckBoxFlag.value = "checked";
  //Description.mandatory = true;
  
}else{
  	//alert("Inside Elese");
  	GradeChangeTo.mandatory = false;
  	Reason.mandatory = false;
  	GradeChangeTo.value = null;
    Reason.value = null;
    Description.value = "";
  	//Description.mandatory = false;

}

        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_StudentLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_StudentLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_StudentFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_StudentFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_SID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_SID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeChangeFrom_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeChangeFrom_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeChangeFrom_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeChangeFrom_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == "RP" || this.value == "I") && (GradeChangeTo.value == "A" || GradeChangeTo.value == "B" || GradeChangeTo.value == "C" || GradeChangeTo.value == "D" || GradeChangeTo.value == "F")){
  
   //RPFieldDate.enable = true;
   //RPFieldDate.mandatory = true;
}
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeChangeTo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeChangeTo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeChangeTo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeChangeTo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  Reason.mandatory = true;
 // Description.mandatory = true;  
}else{
  Reason.value = null;
  //Description.value = null;  
}
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_GradeChangeTo_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_GradeChangeTo_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(ChairSignaturePanel.visible == false){
    if((GradeChangeFrom.value == 'RP' || GradeChangeFrom.value == 'I' || GradeChangeFrom.value == 'IC') && (this.value == 'A+' || this.value == 'A' || this.value == 'A-'|| GradeChangeTo.value == 'B+' || GradeChangeTo.value == 'B' || GradeChangeTo.value == 'B-' || this.value == 'C+' || this.value == 'C' || this.value == 'C-' || this.value == 'D+' || this.value == 'D' || this.value == 'D-' || this.value == 'F')){
      //RPFieldDate.enabled = true;
      RPFieldDate.mandatory = true;
    }else{  
      //RPFieldDate.enabled = false;
      RPFieldDate.mandatory = false;
    }

    if(GradeChangeFrom.value === this.value && this.value !== null){           
                showErrorModal("Field_Name: New Grade","Current Grade and New Grade cannot be same. Please choose another grade");
                GradeChangeTo.value = null;      			
                //this.mandatory = true; 
    }
	else if((GradeChangeFrom.value == "W" || GradeChangeFrom.value == "WE") && this.value !== null){

            showErrorModal("Alert !","You cannot select a New Grade when Current Grade is 'W'"); 
            this.enabled = false;
            GradeChangeTo.value = "Select Grade";
      		GradeCHK.value = null;
    }
}
  
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_Reason_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_Reason_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_Description_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_Description_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
//alert(this.id);
//this.readonly = "readonly";
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_RPFieldDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_RPFieldDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_InstructorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_InstructorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if (this.value !== null && InstructorDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            InstructorDate.value = d;

            InstructorDate.enabled = false;
            //EvalSignDate.value = (new Date().toISOString().slice(0,10));
            //if(HiddenInstructorUserID.value === null && HiddenInstructorUserID.value === ""){
              
              		InstructorSign.value = logUser.value;  
              
           // }else if(logUser.value !== HiddenInstructorUserID.value){
              	 	//InstructorSign.value = HiddenInstructorUserID.value;
           // }
            InstructorSign.enabled = false;
                        
        } else {
            InstructorSign.enabled = false;
            InstructorDate.enabled = false;
        }

if(this.value === null){
  InstructorSign.value = null;
  InstructorDate. value = null;
  
}
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_ChairSignaturePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_ChairSignaturePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_ChairCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_ChairCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if (this.value !== null && ChairDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            ChairDate.value = d;

            ChairDate.enabled = false;
            //EvalSignDate.value = (new Date().toISOString().slice(0,10));
            //if(logUser.value !== "admin"){
            ChairSign.value = logUser.value;
           // }else{
              //	ChairSign.value = HiddenInstructorUserID.value; 
           // }
            ChairSign.enabled = false;
                        
        } else {
            ChairSign.enabled = false;
            ChairDate.enabled = false;
        }

if(this.value === null){
           ChairDate.value = null;            
            ChairSign.value = null;
        }
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_DeanSignaturePanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_DeanSignaturePanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_DeanCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_DeanCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if (this.value !== null && DeanDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            DeanDate.value = d;

            DeanDate.enabled = false;
            //EvalSignDate.value = (new Date().toISOString().slice(0,10));
           // if(logUser.value !== "admin"){
                DeanSign.value = logUser.value;
          //  }else{
           //   	DeanSign.value = HiddenInstructorUserID.value; 
           // }
            DeanSign.enabled = false;
                        
        } else {
            DeanSign.enabled = false;
            DeanDate.enabled = false;
        }

if(this.value === null){
           DeanSign.value = null;            
            DeanDate.value = null;
      }
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_RecordsPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_RecordsPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_RecordsCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_RecordsCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if (this.value !== null && CMSUpdateDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            CMSUpdateDate.value = d;

            CMSUpdateDate.enabled = false;
            
             RecordersSignature.value = logUser.value;
 
            RecordersSignature.enabled = false;
   
   			$.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    RecordersName.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
                        
        } else {
            RecordersSignature.enabled = false;
            CMSUpdateDate.enabled = false;
            RecordersName.value = false;
        }

if(this.value === null){
           CMSUpdateDate.value = null;            
            RecordersSignature.value = null;
  			RecordersName.value = null;
      }
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("Log user Initilize");


    $.ajax({

        type: 'GET', 

        url:"/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse){
            var userValue=myresopnse.userId;
            //var userValue="linhknguyen";
            //alert("userValue="+userValue);
            logUser.value = userValue;         	
        }
    });

        }
	}
}
/**
 * @function grade_change_form_grade_change1.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_workflow_initiator_init0 = function (scope) {
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
 * @function grade_change_form_grade_change1.generated_submit1585112187344_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
grade_change_form_grade_change1.generated_submit1585112187344_click0 = function (scope) {
    with(this) {
        with(scope) {
            //AftiaDescription.value = InstructorName.value +" " + InstructorCWID.value;
aftiaDescCWID.value = InstructorName.value +" " + InstructorCWID.value;


/*HiddenInstructorEmail.value = "yjayaram@fullerton.edu";
HiddenChairEmail.value = "yjayaram@fullerton.edu";
HiddenInstructorEmail.value = "yjayaram@fullerton.edu";
HiddenDeanEmail.value = "yjayaram@fullerton.edu";*/


HiddenInstructorEmail.value = "sapna.gupta@thoughtfocus.com";
HiddenChairEmail.value = "sapna.gupta@thoughtfocus.com";
HiddenInstructorEmail.value = "sapna.gupta@thoughtfocus.com";
HiddenDeanEmail.value = "sapna.gupta@thoughtfocus.com";


firstNameListForInboxReport.value = null;
lastNameListForInboxReport.value = null;
cwidListForInboxReport.value = null;

/*if(GradeCHK.value == 1){ 
  GradeChangeTo.mandatory = true;			              	
} */

/*var gradeChangeToList = document.querySelector(".table-row-dropDown1 select");
for(var m = 0; m < gradeChangeToList.length; m++){
  	if(GradeCHK.value == 1){
      
      gradeChangeToList[m].mandatory = true;       	
    }
  }
 alert("inside");*/

var initialChkboxList = document.querySelectorAll(".table-row-chkbox input");
var flag = false;
 for (var i = 0; i < initialChkboxList.length; ++i) {

  if (initialChkboxList[i].checked === true) {
    flag = true;
   
    break;
  }
 }

var str = "";
function removeLastComma(str){        
  return str.replace(/,\s*$/, "");
}

function removeRow(index,rowCount){
	
    while (index < rowCount){
			           
           if (Row1.instanceManager.instances[index].GradeCHK.value === null){

             Row1.instanceManager.removeInstance(index);
			
             index= -1;
             rowCount = Row1.instanceManager.instanceCount;			 	
           }
           index++;
        }// end while    				  	 
}

if(Term.value === null){
	
  	showErrorModal("Field_Name: Term","Select term");
  	gifModal.style.display = "none";   
  
}else if(InstructorCWID.value === null || InstructorCWID.value === ""){
  	
  	showErrorModal("Field_Name: Instructor CWID","Please Provide CWID"); 
  	gifModal.style.display = "none";   	
  	
}else if(Class_CourseName.value === null || InstructorCWID.value === ""){
    
  	showErrorModal("Field_Name: Class & Course Name", "Select class & course Name"); 
  	gifModal.style.display = "none";  
  
}else if(SectionNumber.value === null){
    showErrorModal("Field_Name: Section Number","Select section number");            
    gifModal.style.display = "none";
          
}/*else if(GradeCHK.value == 1 && GradeChangeTo.value === "Select Grade"){
  	alert("inside block=");
  	showErrorModal("Field_Name: New Grade (in Table)","Select new grade");
} */
else if(!flag){
  	
  	showErrorModal("Alert !", "At least one row should be selected");
    gifModal.style.display = "none";   
   
}
else{
  var rowCount = Row1.instanceManager.instanceCount;	
  removeRow(0,rowCount);
  
  
   var finalChkboxList = document.querySelectorAll(".table-row-chkbox input");
    
  	
  	if (finalChkboxList.length < initialChkboxList.length && finalChkboxList.length > 1){
            MultiRowChecked.value = true;
            massGradeChange.value = 1;
      		
      		
      }else if(finalChkboxList.length == 1){
        	 MultiRowChecked.value = true;
             massGradeChange.value = 0;
            /* if(GradeChangeTo.value == "Select Grade"){
              	GradeChangeTo.mandatory = true;
            }*/
       }  
  
  	// For Inbox Report - Collection of First Name, Last Name & CWIDs;
     var firstNameList = document.querySelectorAll(".firstNameList input"); 
     var LastNameList = document.querySelectorAll(".lastNameList input");  
     var cwidList = document.querySelectorAll(".cwidList input"); 
     var allFirstName="";
     var allLastName=""; 
     var allCwid="";
     var allCwidVal = "";
     var allFirstNameVal="";
     var allLastNameVal="";

     for(var a=0; a<firstNameList.length;a++){      
          allFirstName = allFirstName + firstNameList[a].value + ", ";
          allLastName = allLastName + LastNameList[a].value + ", ";    
          allCwid = allCwid + cwidList[a].value + ", ";
     }

    allFirstNameVal = removeLastComma(allFirstName); 
    allLastNameVal = removeLastComma(allLastName); 
    allCwidVal = removeLastComma(allCwid);

    firstNameListForInboxReport.value = allFirstNameVal;
    lastNameListForInboxReport.value = allLastNameVal;
    cwidListForInboxReport.value = allCwidVal;
  
    guideBridge.submit();	
}





        }
	}
}
