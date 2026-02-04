/**
 * @function incomplete_grade_incomplete_grades.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null ) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            var userID = userValue;
          workflow_initiator.value = userValue;
            InstructorUserId.value = userValue;
            var term = TermAndYear.value;
            $.ajax({
                type: 'GET',
                url: "/bin/getIGradeLoggedinUserID",
                data: {
                    instUserID: userID,
                    termDesc: term
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length !== 0) {
                        InstructorEmail.value = myresopnse[0].instEmail;
                      InstructorCWID.value = myresopnse[0].instCwid;
                     
                        var classCourseNoList = [];
                        // var courseNameList = [];
                        for (var i = 0; i < myresopnse.length; i++) {

                            var item1 = (myresopnse[i].classNumber);

                            var item2 = (myresopnse[i].courseName);

                            var item3 = (item1 + " - " + item2);
                            if (classCourseNoList.includes(item3) === false) {
                                classCourseNoList.push(item3);
                            }

                        }

                        ClassNumberAndName.items = classCourseNoList;
                       
                        InitialAjaxCallStatus.value = TermAndYear.value;
                        gifModal.style.display = "none";

                    } else {
                        gifModal.style.display = "none";
                        showErrorModal("Alert!", "No matcing records found");
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
/**
 * @function incomplete_grade_incomplete_grades.generated_CaseID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_CaseID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none";  

if(StageIndicator.value === null){
    $.ajax({

      type: 'GET', 
      url:"/bin/getCaseID",
      dataType: 'json',

      success: function(myresponse){            
        CaseID.value = myresponse.CASEID;

      	}
	}); 	
}


        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_TermAndYear_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_TermAndYear_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && (this.value !==  InitialAjaxCallStatus.value)) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            var userID = userValue;
            InstructorUserId.value = userValue;
            var term = TermAndYear.value;
          InitialAjaxCallStatus.value = TermAndYear.value;
            $.ajax({
                type: 'GET',
                url: "/bin/getIGradeLoggedinUserID",
                data: {
                    instUserID: userID,
                    termDesc: term
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length !== 0) {
                        ScheduleNo.value = myresopnse[0].scheduleNbr;
                        Units.value = myresopnse[0].unitTaken;
                      InstructorCWID.value = myresopnse[0].instCwid;
                      InstructorEmail.value = myresopnse[0].instEmail;
                       //InstructorEmail.value = "pushpa.kawadi@thoughtfocus.com";
                        var classCourseNoList = [];
                       
                        for (var i = 0; i < myresopnse.length; i++) {

                            var item1 = (myresopnse[i].classNumber);

                            var item2 = (myresopnse[i].courseName);

                            var item3 = (item1 + " - " + item2);
                            if (classCourseNoList.includes(item3) === false) {
                                classCourseNoList.push(item3);
                            }

                        }
						ClassNumber.value = "";
                      	DeptOrCourseNo.value = "";
                        ScheduleNo.value = "";
                        Units.value = "";  
                      CWID.value = "";
                        StudentName.value = "";
                       StudentEmail.value = "";
                        Address1.value = ""; 
                      ClassNumberAndName.value = "";
                        ClassNumberAndName.items = classCourseNoList;
                        //DeptOrCourseNo.items = courseNameList;
                        gifModal.style.display = "none";
                      

                    } else {
                        ClassNumber.value = "";
                      	DeptOrCourseNo.value = "";
                      	ClassNumberAndName.value = "";
                        ScheduleNo.value = "";
                        Units.value = "";        
                        CWID.value = "";
                        StudentName.value = "";
                       StudentEmail.value = "";
                        Address1.value = "";   
                      	ClassNumberAndName.items = "";
                        gifModal.style.display = "none";
                        showErrorModal("Alert!", "No matcing records found");
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
/**
 * @function incomplete_grade_incomplete_grades.generated_ClassNumberAndName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_ClassNumberAndName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  var courseClassNo = ClassNumberAndName.value;
  var classNoObt = courseClassNo.substring(0,courseClassNo.indexOf("-")); 
  var courseNameObt = courseClassNo.substring((courseClassNo.indexOf("-")+1),courseClassNo.length); 
  ClassNumber.value = classNoObt.trim();
  DeptOrCourseNo.value = courseNameObt.trim();
  getScheduleAndUnits((ClassNumber.value),(DeptOrCourseNo.value));
  validateCWID();
}

function getScheduleAndUnits(argClassNo,argCourseName){
  if (StageIndicator.value === null ) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            gifModal.style.display = "block";
            var userValue = myresopnse.userId;
            var userID = userValue;
            InstructorUserId.value = userValue;
            var term = TermAndYear.value;
            $.ajax({
                type: 'GET',
                url: "/bin/getIGradeLoggedinUserID",
                data: {
                    instUserID: userID,
                    termDesc: term
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length !== 0) {
                        
                        var classCourseNoList = [];
                        // var courseNameList = [];
                        for (var i = 0; i < myresopnse.length; i++) {

                            var item1 = (myresopnse[i].classNumber);
                            var item2 = (myresopnse[i].courseName);
                          if(item1 == argClassNo && item2 == argCourseName){
                            ScheduleNo.value = myresopnse[i].scheduleNbr;
                            Units.value = myresopnse[i].unitTaken;                            
                          }                          

                        }                      
                    
                        gifModal.style.display = "none";

                    } else {
                        gifModal.style.display = "none";
                        showErrorModal("Alert!", "No matcing schedule and units found");
                    }
                    ////////////////////////////////////////////


                }
            });
        }

    });
}
}

function validateCWID(){  
  var cwidValue = this.value;
var pattern = /^8\d{8}$/;
var result = pattern.test(cwidValue);
if(ClassNumberAndName.value !== null && TermAndYear.value !== null ){
     var cwidVal = CWID.value;
    var class_nbr = ClassNumber.value;
    var term_dec = TermAndYear.value;
var crse_name = DeptOrCourseNo.value;
    var instr_userid = InstructorUserId.value;
     var gifModal = document.getElementById('gifModal');
                  gifModal.style.display = "block";
        $.ajax({
            type: 'GET',
            url: "/bin/incompleteCWID",
            data: {
                cwid: cwidVal,
              class_nbr:class_nbr,
              term_desc:term_dec,
              crse_name:crse_name,
              instr_userid:instr_userid
            },
            dataType: 'json',

            success: function(myresopnse) {	
                            
                if (myresopnse.length === 0) {
                  CWID.value = null;
                    StudentName.value = null;
                    Address1.value =  null;
                   StudentEmail.value = null;
 					gifModal.style.display = "none";
                   showErrorModal("Alert!","No matching records found. Please enter the valid Campus Wide ID");                 
                } else{
                  DeptChairEmail.value = myresopnse[0].CHAIR_EMAIL_ADDRESS;
                   DeptId.value = myresopnse[0].DEPTID;
                  DepartmentName.value = myresopnse[0].DEPARTMENT;
                  ChairUserId.value = myresopnse[0].CHAIR_USERID;
                   ChairName.value = myresopnse[0].CHAIR_NAME;
                   Term.value = myresopnse[0].STRM;
                }
                ////////////////////////////////////////////
                

            }
        });
}
}
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_ScheduleNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_ScheduleNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_Units_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_Units_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_ClassNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_ClassNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_DeptOrCourseNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_DeptOrCourseNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null && CWID.value !== null){
  var cwidValue = this.value;
var pattern = /^8\d{8}$/;
var result = pattern.test(cwidValue);
if(ClassNumberAndName.value === null){
     CWID.value = null;
    showErrorModal("Alert!","Please select the Class & Course Name");
  }else if(TermAndYear.value === null){
     CWID.value = null;
    showErrorModal("Alert!","Please select the Term");
  }else if(result !== true && this.value !== null){      
     CWID.value = null;
  	showErrorModal("Alert!","Please enter a valid CWID, starts with 8 and should be of 9 digits");	
}else if(CWID.value === null && this.value !== null){
    CWID.value = null;
    showErrorModal("Alert!","Please enter the Campus Wide ID");
  }else{
        var cwidVal = CWID.value;
    var class_nbr = ClassNumber.value;
    var term_dec = TermAndYear.value;
var crse_name = DeptOrCourseNo.value;
    var instr_userid = InstructorUserId.value;
     var gifModal = document.getElementById('gifModal');
                  gifModal.style.display = "block";
        $.ajax({
            type: 'GET',
            url: "/bin/incompleteCWID",
            data: {
                cwid: cwidVal,
              class_nbr:class_nbr,
              term_desc:term_dec,
              crse_name:crse_name,
              instr_userid:instr_userid
            },
            dataType: 'json',

            success: function(myresopnse) {
				
              
               
                if (myresopnse.length !== 0) {
 					
                    StudentName.value = myresopnse[0].NAME;
                    Address1.value = myresopnse[0].Complete_Address;
                    StudentEmail.value = myresopnse[0].PREF_EMAIL;
                    
                    DeptChairEmail.value = myresopnse[0].CHAIR_EMAIL_ADDRESS;               
                 
                  DeptId.value = myresopnse[0].DEPTID;
                  DepartmentName.value = myresopnse[0].DEPARTMENT;
                  ChairUserId.value = myresopnse[0].CHAIR_USERID;
                  ChairName.value = myresopnse[0].CHAIR_NAME;
                  Term.value = myresopnse[0].STRM;
                    gifModal.style.display = "none";

                } else{
                  gifModal.style.display = "none";
                  CWID.value = null;
                    StudentName.value = null;
                  StudentEmail.value = null;
                    Address1.value =  null;
                  DeptChairEmail.value  = null;
                  showErrorModal("Alert!","No matching records found");
                }
                ////////////////////////////////////////////
                

            }
        });
  }
}
 


        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_StudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_StudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_Address1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_Address1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_emailAddressPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_emailAddressPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_WorkCompletionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_WorkCompletionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            
var today = new Date();
//alert(today);
var curyear = today.getFullYear();
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
var nextYear = curyear + 1;
//var d = new Date(lastYear, 3, 16);
var d = (nextYear+"-"+curyearMonth+"-"+curyearDay);
this.value = d;

        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_WorkCompletionDate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_WorkCompletionDate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
var today = new Date();
var curyear = today.getFullYear();
var nextYear = curyear + 1;
var curyearMonth = today.getMonth() + 1;
var curyearDay = today.getDate();
//var d = new Date(lastYear, 3, 16);
var next_dt = (nextYear+"-"+curyearMonth+"-"+curyearDay);
var today_dt = (curyear+"-"+curyearMonth+"-"+curyearDay);
debugger;
var d = this.value;
if(d < today_dt || d > next_dt){  

//var d = new Date(lastYear, 3, 16);
this.value = next_dt;
  showErrorModal("Alert!","Please select any date before 1 year from the current date");
}


        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

  var filePath = supportDoc1.fileAttachment.value;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
//var isImageOrPdf = (/\.(gif|jpe?g|tiff|tif|png|pdf)$/i).test(filePath);
  
if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
 
  supportDoc1.fileAttachment.value = null;
  showErrorModal("Alert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
 
}
var format = /[`~*+:'?<>-|.,&{}#!@$%^=;\[\]\s()]/; 
if(format.test(supportDoc1.fileAttachment.value) === true){
  var doc1NewName = ((supportDoc1.fileAttachment.value.replace(/[.](?=.*[.])/g, "")).replace(/\s+/g, '')).replace(/`|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'');
 
  supportDoc1.fileAttachment.value = doc1NewName;
 
 
}
  


        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

  var filePath = supportDoc2.fileAttachment.value;
var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
//alert(extension);
extension = extension.toLowerCase();
//var isImageOrPdf = (/\.(gif|jpe?g|tiff|tif|png|pdf)$/i).test(filePath);
  
if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){
 
  supportDoc2.fileAttachment.value = null;
  showErrorModal("Alert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
 
}
var format = /[`~*+:'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
if(format.test(supportDoc2.fileAttachment.value) === true){
  var doc2NewName = ((supportDoc2.fileAttachment.value.replace(/[.](?=.*[.])/g, "")).replace(/\s+/g, '')).replace(/`|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'');
 
  supportDoc2.fileAttachment.value = doc2NewName;
 
 
}
  


        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_InstructorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_InstructorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  debugger;
if(this.value == 1){
  var userValue;
  if(InstructorSignDate.value === null){
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
InstructorSignDate.value = TzoneDate;
  
   InstructorSignDate.enabled = false;
}

   $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserDetails",
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse.userName;
   InstructorSignature.value =  userValue;
  // EmpSign.mandatory = "";
},
  error: function(error){
alert("error block="+error);
}
});
  
   InstructorSignature.enabled = false;
  InstructorSignDate.enabled = false;

}else{
      InstructorSignature.value = "";
      //EmpSign.mandatory = "error";
      InstructorSignDate.value = null;
}

}
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_InstructorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_InstructorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_InstructorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_InstructorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function incomplete_grade_incomplete_grades.generated_submit1599730371564_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
incomplete_grade_incomplete_grades.generated_submit1599730371564_click0 = function (scope) {
    with(this) {
        with(scope) {
            //Set Email Address
/*StudentEmail.value = "nvadlakunta@fullerton.edu";
DeptChairEmail.value = "nvadlakunta@fullerton.edu";
InstructorEmail.value = "nvadlakunta@fullerton.edu";*/

/*StudentEmail.value = "yjayaram@fullerton.edu";
DeptChairEmail.value = "yjayaram@fullerton.edu";
InstructorEmail.value = "yjayaram@fullerton.edu";*/

StudentEmail.value = "pushpa.kawadi@thoughtfocus.com";
DeptChairEmail.value = "pushpa.kawadi@thoughtfocus.com";
InstructorEmail.value = "pushpa.kawadi@thoughtfocus.com";

//Validating for required fields
 if(ClassNumberAndName.value === null){
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].basicInformation[0].ClassNumberAndName[0]");
  showErrorModal("Alert!","Please select the Class & Course Name");
}

else if(CWID.value === null){
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].basicInformation[0].CWID[0]");
  showErrorModal("Alert!","Please enter the Campus Wide ID");
}else if(Quality.value === null){
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].requirementsPanel[0].Quality[0]");
  showErrorModal("Alert!","Please select the quality");
}
else if(MissingExamCB.value === null && MissingPaperCB.value === null && MissingLabCB.value === null && OtherReasonForIncompletion.value === null){
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].requirementsPanel[0]");
  showErrorModal("Alert!","Please include the reason for work incompletion");
}
else if( WorkCompletionDate.value === null){
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].mainPanel[0].requirementsPanel[0].WorkCompletionDate[0]");
  showErrorModal("Alert!","Please enter the completion date");
}else{
  EmailSubject.value = "Request for Incomplete(I) Grade - "+CWID.value;
guideBridge.submit();
}


        }
	}
}
