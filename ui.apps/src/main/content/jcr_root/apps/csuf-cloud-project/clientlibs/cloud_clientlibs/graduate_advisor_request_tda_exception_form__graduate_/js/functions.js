/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {  
    ExceptionProcessType.value="Submitted";
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    debugger;

    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.Status == "Success") {
                var userValue = myresponse.userId;
                workflow_initiator.value = userValue;

                $.ajax({
                    type: 'GET',

                    url: "/bin/getEvaluationFormData",
                    data: {
                        action: "EMP_DETAILS"
                    },
                    dataType: 'json',
                    success: function(myresopnse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];



                        if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {


                            FacultyFirstName.value = myresopnse[0].FIRST_NAME;
                            FacultyLastName.value = myresopnse[0].LAST_NAME;
                            //FacultyEmail.value = myresopnse[0].EMAILID;
                            FacultyEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                            FacultyUserID.value = myresopnse[0].EMP_USERID;
                            FacultyDeptID.value = myresopnse[0].DEPTID;
                            FacultyDept.value = myresopnse[0].DEPTNAME;
                            FacultyName.value = FacultyFirstName.value + " " + FacultyLastName.value;
                            FacultyEmplID.value = myresopnse[0].EMPLID;
                          
                            gifModal.style.display = "none";
                            modal.style.display = "none";

                        } else if (myresopnse.length > 1) {
                            gifModal.style.display = "none";
                            modal.style.display = "block";


                            var col = [];
                            col.push("EMPLID");
                            col.push("LAST_NAME");
                            col.push("FIRST_NAME");
                            col.push("DEPTID");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "Emp ID", "Last Name", "First Name", "Dept ID"];
                            for (var j = 0; j < headings.length; j++) {
                                var th = document.createElement("th");
                                th.innerHTML = headings[j];
                                tr.appendChild(th);
                            }
                            for (var k = 0; k < myresopnse.length; k++) {
                                tr = table.insertRow(-1);
                                // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                                var button = document.createElement("input");
                                button.type = "radio";
                                button.setAttribute("class", "rb");
                                button.id = "rbtn";
                                button.name = "group";
                                button.value = "";
                                button.onclick = function(event) {

                                };
                                var tabCell1 = tr.insertCell(-1);
                                tabCell1.appendChild(button);
                                for (var l = 0; l < col.length; l++) {
                                    var tabCell = tr.insertCell(-1);
                                    tabCell.innerHTML = myresopnse[k][col[l]];
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

                                var n;
                                var rButtonStatus;
                                //var rButtonStatusFalse;
                                var rButtons = document.getElementsByClassName("rb");
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {
                                        FacultyFirstName.value = myresopnse[n].FIRST_NAME;
                                        FacultyLastName.value = myresopnse[n].LAST_NAME;
                                      //  FacultyEmail.value = myresopnse[n].EMAILID;
                                        FacultyEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                                        FacultyUserID.value = myresopnse[n].EMP_USERID;
                                        FacultyDeptID.value = myresopnse[n].DEPTID;
                                        FacultyDept.value = myresopnse[n].DEPTNAME;
                                        FacultyName.value = FacultyFirstName.value + " " + FacultyLastName.value;
                                        FacultyEmplID.value = myresopnse[n].EMPLID;
                                        rButtonStatus = true;
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    alert("Please select the department");
                                    modal.style.display = "block";
                                } else {

                                    modal.style.display = "none";
                                }
                            };
                            // footerModal = document.getElementById("modal_footer");
                            footerModal.appendChild(okButton);
                            // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));

                        } else {
                            //alert("No matching records found");
                            var modalError = document.getElementById("errorPopup");
                            var para = document.getElementById("para");
                            para.innerHTML = "";
                            para.innerHTML = "No matching records found";
                            var errorBody = document.getElementById('errorData');
                            errorBody.innerHTML = "";
                            errorBody.appendChild(para);
                            var footerModalError = document.getElementById("errorPopup-footer");
                            var okButtonError = document.createElement("input");
                            okButtonError.type = "button";
                            okButtonError.setAttribute("class", "okBtn");
                            //okButtonError.id = "okBtn";
                            okButtonError.value = "Ok";
                            okButtonError.onclick = function(event) {
                                modalError.style.display = "none";
                            };
                            footerModalError.appendChild(okButtonError);
                            modalError.style.display = "block";


                            gifModal.style.display = "none";
                        }
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
                                showErrorModal("Alert !", "please select an entry");
                                modal.style.display = "block";
                            } else {
                                showErrorModal("Alert !", "please select an entry");
                                modal.style.display = "block";
                            }

                        };
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        };
                    }

                });
            }
        },
        error: function(error) {
            alert("error block=" + error);
            loadingText.visible = false;
        }
    });
}

        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=true;

  ExceptionTab.visible=true;
  ExceptionTab.enabled=true;
  
  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=true;
  
  EvalPanel.visible=false;
  
  AVPPanel.visible=false; 
  
  TDAAnalystSignaturePanel.visible=false;
  
  testPanel.visible=false;
}

if(StageIndicator.value == "ToInitiator"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=true;
  
  CWID.enabled=false;

  ExceptionTab.visible=true;
  ExceptionTab.enabled=true;
  
  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=true;
  
    if (EvalCB.value == "1") {
        EvalPanel.visible = true;
        EvalPanel.enabled=false;
    } else {
        EvalPanel.visible = false;
    }
  
    if (AVPCB.value == "1") {
        AVPPanel.visible = true;
        AVPPanel.enabled=false;
    } else {
        AVPPanel.visible = false;
    }
  
  TDAAnalystSignaturePanel.visible=false;
  
  testPanel.visible=true;
}

if(StageIndicator.value == "ToEval"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  
  ExceptionTab.visible=true;
  ExceptionTab.enabled=false;

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=false;
  EvalPanel.visible=true;
  EvalPanel.enabled=true;
  AVPPanel.visible = false;
  TDAAnalystSignaturePanel.visible=false;  
  testPanel.visible=true;
}

if(StageIndicator.value == "ToAVP"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  
  ExceptionTab.visible=true;
  ExceptionTab.enabled=false;

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=false;
  AVPPanel.visible=true;
  AVPPanel.enabled=true;
  
  if (EvalCB.value == "1") {
        EvalPanel.visible = true;
        EvalPanel.enabled=false;
    } else {
        EvalPanel.visible = false;
    }
  TDAAnalystSignaturePanel.visible=false;
  testPanel.visible=true;
}

if(StageIndicator.value == "ToTDAAnalyst"){
  
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  
  ExceptionTab.visible=true;
  ExceptionTab.enabled=false;

  InitiatorPanel.visible=true;
  InitiatorPanel.enabled=false;
 
  if (EvalCB.value == "1") {
        EvalPanel.visible = true;
        EvalPanel.enabled=false;
    } else {
        EvalPanel.visible = false;
    }
  
  if (AVPCB.value == "1") {
        AVPPanel.visible = true;
        AVPPanel.enabled=false;
    } else {
        AVPPanel.visible = false;
    }
  
  TDAAnalystSignaturePanel.visible=true;
  TDAAnalystSignaturePanel.enabled=true;
  
  testPanel.visible=true;
}

        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if ( (StageIndicator.value === null) ||(StageIndicator.value == "ToInitiator") ) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
			var sql = "ACAD_PROG in ('GRD','UGD') ORDER BY PROGRAMS ASC";       
				$.ajax({

					type: 'GET', 

					url:"/bin/TDAExceptionServlet",

				   data:  {
						action:'GRAD_STUDENT_PROG_DATA',	 
                        AcadProg: sql        		 
					  },

					dataType: 'json',

					success: function(myresponse){
							if(myresponse.length >= 1){
                              	  var progarray = [];
                        for (var i = 0; i < myresponse.length; i++) { 
                            var item = myresponse[i].PROGRAMS;
                            progarray.push(item);
                        }
                        GraduateDegProg.items = (progarray);
                        ProgJsonDetails.value = JSON.stringify(myresponse);
							}
                      gifModal.style.display = "none";
					}
				});							  
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.on("validationComplete", function(event, payload) {
var exception=null;
if (Classification.value!==null){
    exception = "Classification";
}
if (AdvancedCandidacy.value!==null){
   if(exception === null){
    exception = "Advancement to Candidacy";
  } else{
     exception = exception+", Advancement to Candidacy";
  }
} 
if ( (StudentAdmitted.value!==null) || (StudentGraduating.value!==null) ){
  if(exception === null){
    exception = "Catalog Year Change";
  } else{
     exception = exception+", Catalog Year Change";
  }
} 
if (GraduateDegProg.value!==null) {
  if(exception === null){
    exception = "Concentration Declaration";
  } else{
     exception = exception+", Concentration Declaration";
  }
} 
if (InstitutionName.value!==null) {
  if(exception === null){
    exception = "Transfer Course Evaluation";
  } else{
     exception = exception+", Transfer Course Evaluation";
  }
}
if (Course.value!==null) {
  if(exception === null){
    exception = "Course Substitution";
  } else{
     exception = exception+", Course Substitution";
  }
} 
if (WaiveCourse.value!==null) {
  if(exception === null){
    exception = "Course Waiver";
  } else{
     exception = exception+", Course Waiver";
  }
} 
if (TimeExtensionCheck.value!==null) {
  if(exception === null){
    exception = "Time Limit Extension";
  } else{
     exception = exception+", Time Limit Extension";
  }
} 
if (ThesisCompleteDate.value!==null) {
   if(exception === null){
    exception = "Thesis/Dissertation University Reader Approval";
  } else{
     exception = exception+", Thesis/Dissertation University Reader Approval";
  }
}
if (Other.value!==null) {
   if(exception === null){
    exception = "Other Modification";
  } else{
     exception = exception+", Other Modification";
  }
}

ExceptionType.value=exception;
});
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_RequestID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_RequestID_init0 = function (scope) {
    with(this) {
        with(scope) {
            RequestID.enabled = false;

if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',

        url: "/bin/getCaseID",

        dataType: 'json',

        success: function(myresponse) {

            RequestID.value = myresponse.CASEID;

        },

    });
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if  (testPanel.visible === false){  
    var gifModal = document.getElementById('gifModal');
  //gifModal.style.display = "block";
    var cwid = this.value;
  
    StudentName.value = "";
    AcademicPlan.value = "";
    CatalogYear.value = "";

    $.ajax({
        type: 'GET',
        url: "/bin/TDAExceptionServlet",
        data: {
          action: "GRAD_STUDENT_DATA",
          cwid: cwid,
        },
        dataType: 'json',
        success: function(myresopnse) {

            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];

            if (myresopnse.length === 1 && myresopnse[0].STUDENT_ID !== undefined) {
                
                var fname = myresopnse[0].STUDENT_FNAME;
                var lname = myresopnse[0].STUDENT_LNAME;
              
                var academicplan = myresopnse[0].ACAD_PLAN;
                var program = myresopnse[0].PROGRAMS;
              
                StudentFirstName.value = myresopnse[0].STUDENT_FNAME;
                StudengtLastName.value = myresopnse[0].STUDENT_LNAME;
              
                cwid.value=myresopnse[0].STUDENT_ID;
                StudentName.value = fname + " " + lname;
                AcademicPlan.value = academicplan + " - " + program;
                CatalogYear.value = myresopnse[0].ACAD_YEAR;
              
                gifModal.style.display = "none";
                modal.style.display = "none";

            } else if (myresopnse.length > 1) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                var col = [];
                col.push("STUDENT_ID");
                col.push("STUDENT_LNAME");
                col.push("STUDENT_FNAME");
                col.push("ACAD_PLAN");
                col.push("ACAD_YEAR");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "Student ID", "Last Name", "First Name", "Academic Plan", "Catalog Year"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresopnse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio" class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "radio";
                    button.setAttribute("class", "rb");
                    button.id = "rbtn";
                    button.name = "group";
                    button.value = "";
                    button.onclick = function(event) {

                    };
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresopnse[k][col[l]];
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
                    var n;
                    var rButtonStatus;
                    //var rButtonStatusFalse;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {
                            rButtonStatus = false;
                        } else {
                            //
                            //
                            //Id.value = myresopnse[n].EMPLID;
                            var fname = myresopnse[n].STUDENT_FNAME;
                            var lname = myresopnse[n].STUDENT_LNAME;
                          
                            var academicplan = myresopnse[n].ACAD_PLAN;
                            var program = myresopnse[n].PROGRAMS;
                          
                            StudentFirstName.value = myresopnse[n].STUDENT_FNAME;
                            StudengtLastName.value = myresopnse[n].STUDENT_LNAME;
                            
                            cwid.value=myresopnse[n].STUDENT_ID;
                            StudentName.value = fname + "-" + lname;
                            AcademicPlan.value = academicplan + " - " + program;
                            CatalogYear.value = myresopnse[n].ACAD_YEAR;
                            
                            rButtonStatus = true;
                            break;
                        }
                    }
                    if (rButtonStatus === false) {
                        //alert("Please select the department");
                        showErrorModal("Alert!", "Please select the Student Details");
                        modal.style.display = "block";
                    } else {
                        modal.style.display = "none";
                    }
                };
                // footerModal = document.getElementById("modal_footer");
                footerModal.appendChild(okButton);
                // document.getElementById('cBtn').parentNode.removeChild(document.getElementById('cBtn'));

            } else {
                //alert("No matching records found");
                var modalError = document.getElementById("errorPopup");
                var para = document.getElementById("para");
                para.innerHTML = "";
                para.innerHTML = "No matching records found";
                var errorBody = document.getElementById('errorData');
                errorBody.innerHTML = "";
                errorBody.appendChild(para);
                var footerModalError = document.getElementById("errorPopup-footer");
                var okButtonError = document.createElement("input");
                okButtonError.type = "button";
                okButtonError.setAttribute("class", "okBtn");
                //okButtonError.id = "okBtn";
                okButtonError.value = "Ok";
                okButtonError.onclick = function(event) {
                    modalError.style.display = "none";
                    StudentName.value = "";
                    CatalogYear.value = "";
                    AcademicPlan.value = "";
                    Term.value = "";
                };
                footerModalError.appendChild(okButtonError);
                modalError.style.display = "block";
                gifModal.style.display = "none";
            }
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
                   showErrorModal("Alert !", "please select the department");
                   modal.style.display = "block";
                } else {
                   showErrorModal("Alert !", "please select the department");
                   modal.style.display = "block";
                }
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    });
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_StudentName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_StudentName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_CatalogYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_CatalogYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_AcademicPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_AcademicPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_Classification_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_Classification_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  ExceptionType.value = ExceptionType.value+"Classification, ";
}else{
  var exception=ExceptionType.value;
  ExceptionType.value=exception.replace("Classification", "");
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_StudentAdmitted_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_StudentAdmitted_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    StudentGraduating.value = null;
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_StudentGraduating_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_StudentGraduating_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value !== null) {
    StudentAdmitted.value = null;
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_GraduateDegProg_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_GraduateDegProg_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ( (StageIndicator.value === null) ||(StageIndicator.value == "ToInitiator") ) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
			       
				$.ajax({

					type: 'GET', 

					url:"/bin/TDAExceptionServlet",

				   data:  {
							 AcadProg: 'GRD'         		 
					  },

					dataType: 'json',

					success: function(myresponse){
							if(myresponse.length >= 1){
                              	  var progarray = [];
                        for (var i = 0; i < myresponse.length; i++) { 
                            var item = myresponse[i].PROGRAMS;
                            progarray.push(item);
                        }
                        GraduateDegProg.items = (progarray);
                        ProgJsonDetails.value = JSON.stringify(myresponse);
							}
                      gifModal.style.display = "none";
					}
				});							  
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_InstitutionName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_InstitutionName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null){
  TransferCourse_TC.mandatory=true;
  CSUFCourse.mandatory=true;
  Area_TC.mandatory=true;
} else {
  TransferCourse_TC.mandatory=false;
  CSUFCourse.mandatory=false;
  Area_TC.mandatory=false;
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_TransferCourse_TC_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_TransferCourse_TC_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null){
  InstitutionName.mandatory=true;
  CSUFCourse.mandatory=true;
  Area_TC.mandatory=true;
} else {
  InstitutionName.mandatory=false;
  CSUFCourse.mandatory=false;
  Area_TC.mandatory=false;
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_CSUFCourse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_CSUFCourse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null){
  InstitutionName.mandatory=true;
  TransferCourse_TC.mandatory=true;
  Area_TC.mandatory=true;
} else {
  InstitutionName.mandatory=false;
  TransferCourse_TC.mandatory=false;
  Area_TC.mandatory=false;
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_Area_TC_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_Area_TC_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null){
  InstitutionName.mandatory=true;
  TransferCourse_TC.mandatory=true;
  CSUFCourse.mandatory=true;
} else {
  InstitutionName.mandatory=false;
  TransferCourse_TC.mandatory=false;
  CSUFCourse.mandatory=false;
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_headerItem16647949684821664794968812_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_headerItem16647949684821664794968812_click0 = function (scope) {
    with(this) {
        with(scope) {
            	var rowCount = TransferCourse.instanceManager.instanceCount;

	if(rowCount == 1){		
		TransferCourse.instanceManager.instances[0]._children[0].value = null;
        TransferCourse.instanceManager.instances[0]._children[1].value = null;
		TransferCourse.instanceManager.instances[0]._children[2].value = null;
        TransferCourse.instanceManager.instances[0]._children[3].value = null;
	}

TransferCourse.instanceManager.removeInstance(TransferCourse.instanceIndex);
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqTDAAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqTDAAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(TransferCourse.instanceManager.instanceCount >= 1 && TransferCourse.instanceManager.instanceCount <= 5){
   for(var count = 0; count < TransferCourse.instanceManager.instanceCount; count++){
      if((TransferCourse.instanceManager.instances[count]._children[0].value === null) || (TransferCourse.instanceManager.instances[count]._children[1].value === null) ||(TransferCourse.instanceManager.instances[count]._children[2].value === null) || (TransferCourse.instanceManager.instances[count]._children[3].value === null) ){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please Enter the record before adding a new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	
  	if(isAddRowAllowed == true){
      	if(TransferCourse.instanceManager.instanceCount < 5){
          	TransferCourse.instanceManager.addInstance();
        }
      	else{
          	showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }   	
}

        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqTDARemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqTDARemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            
try{
 
	var rowCount = TransferCourse.instanceManager.instanceCount;

	if(rowCount > 1 && rowCount <= 5){	
		TransferCourse.instanceManager.removeInstance(rowCount-1);
     					
	}
	if(rowCount == 1){		
		TransferCourse.instanceManager.instances[0]._children[0].value = null;
        TransferCourse.instanceManager.instances[0]._children[1].value = null;
		TransferCourse.instanceManager.instances[0]._children[2].value = null;
        TransferCourse.instanceManager.instances[0]._children[3].value = null;
	}
}
catch(e){
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_headerItem16647984637591664798464179_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_headerItem16647984637591664798464179_click0 = function (scope) {
    with(this) {
        with(scope) {
            	var rowCount = CourseSubstitution.instanceManager.instanceCount;

	if(rowCount == 1){		
		CourseSubstitution.instanceManager.instances[0]._children[0].value = null;
        CourseSubstitution.instanceManager.instances[0]._children[1].value = null;
		CourseSubstitution.instanceManager.instances[0]._children[2].value = null;
        CourseSubstitution.instanceManager.instances[0]._children[3].value = null;
	}

CourseSubstitution.instanceManager.removeInstance(CourseSubstitution.instanceIndex);
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqATCEAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqATCEAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(CourseSubstitution.instanceManager.instanceCount >= 1 && CourseSubstitution.instanceManager.instanceCount <= 5){
   for(var count = 0; count < CourseSubstitution.instanceManager.instanceCount; count++){
      if((CourseSubstitution.instanceManager.instances[count]._children[0].value === null) || (CourseSubstitution.instanceManager.instances[count]._children[1].value === null) ||(CourseSubstitution.instanceManager.instances[count]._children[2].value === null) || (CourseSubstitution.instanceManager.instances[count]._children[3].value === null) ){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please Enter the record before adding a new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	
  	if(isAddRowAllowed == true){
      	if(CourseSubstitution.instanceManager.instanceCount < 5){
          	CourseSubstitution.instanceManager.addInstance();
        }
      	else{
          	showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }   	
}

        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqATCERemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_MajorReqATCERemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            
try{
 
	var rowCount = CourseSubstitution.instanceManager.instanceCount;

	if(rowCount > 1 && rowCount <= 5){	
		CourseSubstitution.instanceManager.removeInstance(rowCount-1);
     					
	}
	if(rowCount == 1){		
		CourseSubstitution.instanceManager.instances[0]._children[0].value = null;
        CourseSubstitution.instanceManager.instances[0]._children[1].value = null;
		CourseSubstitution.instanceManager.instances[0]._children[2].value = null;
		CourseSubstitution.instanceManager.instances[0]._children[3].value = null;

	}
}
catch(e){
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_headerItem16647986371051664798637368_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_headerItem16647986371051664798637368_click0 = function (scope) {
    with(this) {
        with(scope) {
            	var rowCount = CourseWaiver.instanceManager.instanceCount;

	if(rowCount == 1){		
		CourseWaiver.instanceManager.instances[0]._children[0].value = null;
        CourseWaiver.instanceManager.instances[0]._children[1].value = null;
	}

CourseWaiver.instanceManager.removeInstance(CourseWaiver.instanceIndex);
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_OtherModificationsATCEAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_OtherModificationsATCEAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var isAddRowAllowed = false;
if(CourseWaiver.instanceManager.instanceCount >= 1 && CourseWaiver.instanceManager.instanceCount <= 5){
   for(var count = 0; count < CourseWaiver.instanceManager.instanceCount; count++){
      if((CourseWaiver.instanceManager.instances[count]._children[0].value === null) || (CourseWaiver.instanceManager.instances[count]._children[1].value === null) ){
          isAddRowAllowed = false;
          showErrorModal("Alert !", "Please Enter the record before adding a new row");
      }
      else{
          isAddRowAllowed = true;
      }
   }
  	
  	if(isAddRowAllowed == true){
      	if(CourseWaiver.instanceManager.instanceCount < 5){
          	CourseWaiver.instanceManager.addInstance();
        }
      	else{
          	showErrorModal("Alert !", "More than 5 rows cannot be added");
        }
    }   	
}

        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_OtherModificationsATCERemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_OtherModificationsATCERemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            
try{
 
	var rowCount = CourseWaiver.instanceManager.instanceCount;

	if(rowCount > 1 && rowCount <= 5){	
		CourseWaiver.instanceManager.removeInstance(rowCount-1);
     					
	}
	if(rowCount == 1){		
		CourseWaiver.instanceManager.instances[0]._children[0].value = null;
        CourseWaiver.instanceManager.instances[0]._children[1].value = null;
	}
}
catch(e){
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if ( (StageIndicator.value === null) ||(StageIndicator.value == "ToInitiator") ) {
if (this.value == 1) {

        if (InitiatorDate.value === null) {           

            InitiatorDate.enabled = false;
          
            $.ajax({

                type: 'GET',

                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  InitiatorSignature.value = userValue;
                  InitiatorDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }else {
    InitiatorSignature.value = "";
    InitiatorDate.value = "";
}
} 
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_InitiatorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_InitiatorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_EvalCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_EvalCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToEval") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                EvalSignature.value = userValue;
                EvalSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        EvalSignature.enabled = false;
        EvalSignDate.enabled = false;
    } else {
        EvalSignature.value = "";
        EvalSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_EvalSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_EvalSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_EvalSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_EvalSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_EvalDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_EvalDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value=="5"){
  EvalComment.mandatory=true;
  ExceptionProcessType.value="Approved";
} else{
 EvalComment.mandatory=false;
}


        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_EvalDecision_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_EvalDecision_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(this.value=="3"){
  ExceptionProcessType.value="Approved";
} else if(this.value=="4"){
  ExceptionProcessType.value="Denied";
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_AVPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_AVPCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToAVP") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                AVPSignature.value = userValue;
                AVPSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        AVPSignature.enabled = false;
        AVPSignDate.enabled = false;
    } else {
        AVPSignature.value = "";
        AVPSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_AVPSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_AVPSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_AVPSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_AVPSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_AVPDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_AVPDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value=="4"){
  AVPComment.mandatory=true;
  ExceptionProcessType.value="Approved";
} else{
 AVPComment.mandatory=false;
}

        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_AVPDecision_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_AVPDecision_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(this.value=="2"){
  ExceptionProcessType.value="Approved";
} else if(this.value=="3"){
  ExceptionProcessType.value="Denied";
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToTDAAnalyst") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                TDAAnalystSignature.value = userValue;
                TDAAnalystSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        TDAAnalystSignature.enabled = false;
        TDAAnalystSignDate.enabled = false;
    } else {
        TDAAnalystSignature.value = "";
        TDAAnalystSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_TDAAnalystDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value=="5"){
  EvalComment.mandatory=true;
} else{
 EvalComment.mandatory=false;
}


        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
     getPdf();


function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            console.log("xml=" + result.data);
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/graduate-advisor-request/tda-exception-form--graduate-');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', StudentName.value+ "_" + Date.now());
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';
            xhr.send(jsonData);
            xhr.onload = function() {
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
                            blob = new File([this.response], filename, {
                                type: type
                            });
                        } catch (e) {
                            /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], {
                            type: type
                        });
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
                        setTimeout(function() {
                            URL.revokeObjectURL(downloadUrl);
                        }, 100); // cleanup
                    }
                }
            setFundSourceOptions();
			};
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
function setFundSourceOptions(){
  for (k = 0; k < count; k++) {
            var fundPrgResult = JSON.parse(FundSourceData.value);
			if(fundPrgResult[0].CLASS_CODE.length !== 0){
            var classResult = [];
            for (var i = 0; i < fundPrgResult[0].CLASS_CODE.length; i++) {
				classResult.push(fundPrgResult[0].CLASS_CODE[i].CLASS);
            }
			FundDetails.instanceManager.instances[k].Class.items = classResult; 
            }
            if(fundPrgResult[0].FUND.length !== 0){
            var fundResult = [];
            for (var f = 0; f < fundPrgResult[0].FUND.length; f++) {              	
				fundResult.push(fundPrgResult[0].FUND[f].FUND_CODE);                
            }
			FundDetails.instanceManager.instances[k].Fund.items = fundResult; 
            }
            if(fundPrgResult[0].PROGRAM.length !== 0){
            var programResult = [];
            for (var p = 0; p < fundPrgResult[0].PROGRAM.length; p++) {
				programResult.push(fundPrgResult[0].PROGRAM[p].PROGRAM);
            }
			FundDetails.instanceManager.instances[k].Program.items = programResult; 
            }
            if(fundPrgResult[0].DEPT.length !== 0){
            var deptResult = [];
            for (var d = 0; d < fundPrgResult[0].DEPT.length; d++) {              	
				deptResult.push(fundPrgResult[0].DEPT[d].DEPTID);                
            }
			FundDetails.instanceManager.instances[k].FundDeptID.items = deptResult; 
            }	
            }
}
        }
	}
}
/**
 * @function graduate_advisor_request_tda_exception_form__graduate_.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
graduate_advisor_request_tda_exception_form__graduate_.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = StudentName.value+" "+CWID.value;
  EmailSubject.value = "Test - TDA Exception Form (Graduate)- "+CWID.value;
 // FacultyEmail.value = "anupama.dhar@thoughtfocus.com"; 
  FacultyEmail.value = "yjayaram@fullerton.edu";
 // FacultyEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
}


var exception=null;
if (Classification.value!==null){
    exception = "Classification";
}
if (AdvancedCandidacy.value!==null){
   if(exception === null){
    exception = "Advancement to Candidacy";
  } else{
     exception = exception+", Advancement to Candidacy";
  }
} 
if ( (StudentAdmitted.value!==null) || (StudentGraduating.value!==null) ){
  if(exception === null){
    exception = "Catalog Year Change";
  } else{
     exception = exception+", Catalog Year Change";
  }
} 
if (GraduateDegProg.value!==null) {
  if(exception === null){
    exception = "Concentration Declaration";
  } else{
     exception = exception+", Concentration Declaration";
  }
} 
if (InstitutionName.value!==null) {
  if(exception === null){
    exception = "Transfer Course Evaluation";
  } else{
     exception = exception+", Transfer Course Evaluation";
  }
}
if (Course.value!==null) {
  if(exception === null){
    exception = "Course Substitution";
  } else{
     exception = exception+", Course Substitution";
  }
} 
if (WaiveCourse.value!==null) {
  if(exception === null){
    exception = "Course Waiver";
  } else{
     exception = exception+", Course Waiver";
  }
} 
if (TimeExtensionCheck.value!==null) {
  if(exception === null){
    exception = "Time Limit Extension";
  } else{
     exception = exception+", Time Limit Extension";
  }
} 
if (ThesisCompleteDate.value!==null) {
   if(exception === null){
    exception = "Thesis/Dissertation University Reader Approval";
  } else{
     exception = exception+", Thesis/Dissertation University Reader Approval";
  }
}
if (Other.value!==null) {
   if(exception === null){
    exception = "Other Modification";
  } else{
     exception = exception+", Other Modification";
  }
}
ExceptionType.value=exception;
ExceptionProcessType,value="Submitted";

guideBridge.submit();
        }
	}
}
