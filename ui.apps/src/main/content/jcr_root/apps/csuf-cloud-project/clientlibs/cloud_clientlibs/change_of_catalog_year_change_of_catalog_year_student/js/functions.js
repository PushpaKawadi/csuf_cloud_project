/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){  
  applicantSignaturePanel.visble = true;
  GradEvalPanel.visible = false;
  RecordsPanel.visible = false;  
}

if(StageIndicator.value === "ToEvaluator"){
  applicantSignaturePanel.visble = true;
  applicantSignaturePanel.enabled = false;
  GradEvalPanel.visible = true;
  RecordsPanel.visible = false; 
  ChangeCatalogYear.enabled = false;
  basicInformation.enabled = false;
  
}

if(StageIndicator.value === "ToRecords"){
  applicantSignaturePanel.visble = true;
  applicantSignaturePanel.enabled = false;
  if(GradEvalCB.value == "1"){
    GradEvalPanel.visible = true;
    GradEvalPanel.enabled = false;
  }else{
    GradEvalPanel.visible = false;
  }  
  RecordsPanel.visible = true; 
  ChangeCatalogYear.enabled = false;
  basicInformation.enabled = false;
}




        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(userData) {
            var userValue = userData.userId;
          StudentUserID.value = userValue;
          
          workflow_initiator.value = userValue;
            gifModal.style.display = "block";
            if (userValue !== "") {
                $.ajax({
                    type: 'GET',
                    url: "/bin/getCatalogYearStudentData",
                    data: {
                        userId: userValue,
                    },
                    dataType: 'json',

                    success: function(myresopnse) {

                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];
                        var gifModal = document.getElementById('gifModal');
                   debugger;
                        if (myresopnse.length == 1 && myresopnse[0].STUDENT_ID !== undefined) {
                            //Name.value = myresopnse[0].STUDENT_FNAME;
                            var lName = myresopnse[0].STUDENT_LNAME;
                            var fName = myresopnse[0].STUDENT_FNAME;
                            var nameValue = fName.concat(" ").concat(lName);
                            FirstName.value = myresopnse[0].STUDENT_FNAME;
                            LastName.value = myresopnse[0].STUDENT_LNAME;
                            Name.value = nameValue;
                            CWID.value = myresopnse[0].STUDENT_ID;
                            PhoneNumber.value = myresopnse[0].STUDENT_PHONE;
                            EmailAddress.value = myresopnse[0].STUDENT_EMAIL;
                            Major.value = myresopnse[0].PROGRAMS;
                            //SecondMajor.value = myresopnse[0].SecMajorMinCer;
                            from.value = myresopnse[0].TERM_DESCR;
                          TransferAdmissionTerm.value = myresopnse[0].TERM_DESCR;
                          if((myresopnse[0].EXP_TERM_DESCR).trim() !== "" && (myresopnse[0].EXP_TERM_DESCR).trim() !== "-"){
                            AnticipatedGradTerm.value = myresopnse[0].EXP_TERM_DESCR.trim();
                          }else{
                            GraduateCSU.enabled = false;
                          }
                           if((myresopnse[0].ADMIT_TERM_DESCR).trim() !== "" && (myresopnse[0].ADMIT_TERM_DESCR).trim() !== "-"){
                            TransferAdmissionTerm.value = myresopnse[0].ADMIT_TERM_DESCR.trim();
                          }else{
                            TransferredCSU.enabled = false;
                          }
                            gifModal.style.display = "none";

                        } else if (myresopnse.length > 1) {

                            gifModal.style.display = "none";
                            modal.style.display = "block";

                            var col = [];
                            col.push("STUDENT_ID");
                            col.push("STUDENT_FNAME");
                            col.push("STUDENT_LNAME");
                            col.push("ACAD_CAREER");
							col.push("ACAD_PLAN");
							col.push("PROGRAMS");
                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "CWID", "First Name", "Last Name", "Acad Career", "Acad Plan","Program"];
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


                                var tabCell1 = tr.insertCell(-1);
                                tabCell1.appendChild(button);
                                for (var l = 0; l < col.length; l++) {
                                    var tabCell = tr.insertCell(-1);
                                    tabCell.innerHTML = myresopnse[k][col[l]];
                                }
                            }

                            var divContainer = document.getElementById("showData1");
                            divContainer.innerHTML = "";
                            divContainer.appendChild(table);

                            var footerModal = document.getElementById("modal_footer1");
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

                                        var lName = myresopnse[n].STUDENT_LNAME;
                                        var fName = myresopnse[n].STUDENT_FNAME;
                                        var nameValue = fName.concat(" ").concat(lName);
                                        FirstName.value = myresopnse[n].STUDENT_FNAME;
                                        LastName.value = myresopnse[n].STUDENT_LNAME;
                                        Name.value = nameValue;
                                        CWID.value = myresopnse[n].STUDENT_ID;
                                        PhoneNumber.value = myresopnse[n].STUDENT_PHONE;
                                        EmailAddress.value = myresopnse[n].STUDENT_EMAIL;
                                        Major.value = myresopnse[n].PROGRAMS;
                                        TransferAdmissionTerm.value = myresopnse[n].TERM_DESCR;
                                      var btn = document.getElementsByClassName("rb");
                                        for (k = 0; k < btn.length; k++) {
                                    if (btn[k].checked === false) {
                                      if(SecondMajor.value === null){
                                         SecondMajor.value = (myresopnse[k].PROGRAMS);
                                      }else{
                                      SecondMajor.value = (SecondMajor.value).concat(", "+myresopnse[k].PROGRAMS);
                                      }
                                    }
                                        }
                                        
                                         if((myresopnse[n].EXP_TERM_DESCR).trim() !== "" && (myresopnse[n].EXP_TERM_DESCR).trim() !== "-"){
                            AnticipatedGradTerm.value = myresopnse[n].EXP_TERM_DESCR.trim();
                          }else{
                            GraduateCSU.enabled = false;
                          }
                           if((myresopnse[n].ADMIT_TERM_DESCR).trim() !== "" && (myresopnse[n].ADMIT_TERM_DESCR).trim() !== "-"){
                            TransferAdmissionTerm.value = myresopnse[n].ADMIT_TERM_DESCR.trim();
                          }else{
                            TransferredCSU.enabled = false;
                          }
                                        from.value = myresopnse[n].TERM_DESCR;
                                        rButtonStatus = true;
                                        modal.style.display = "none";
                                        break;
                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select appropriate ACAD_CAREER");
                                    modal.style.display = "block";
                                }
                            };
                            var footerModal = document.getElementById("modal_footer1");

                            footerModal.appendChild(okButton);

                        } else {
                            gifModal.style.display = "none";
                            showErrorModal("Alert!", "No matcing records found");
                        }


                    }
                });
            }
        }
    });
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_CaseId_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_TodayDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_TodayDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
   var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
                  dateString = dateString.replaceAll(",","");
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  this.value = d;
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_EmailAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_EmailAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_ContinuousCSU_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_ContinuousCSU_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  FirstSemTerm.mandatory = true;
  SchoolAttended.mandatory = true;
  FirstSemTerm.visible = true;
 SchoolAttended.visible = true;
  TransferredCSU.value = "";
  GraduateCSU.value = "";
  //TransferAdmissionTerm.value = "";
  //AnticipatedGradTerm.value = "";
  //Non standard
  Readmitted1.value = "";
  Readmitted2.value = "";
  Readmitted3.value = "";
  ReadmittedComments.value = "";
  Explain1.value ="";
  Explain2.value = "";
} else{
  FirstSemTerm.visible = false;
 SchoolAttended.visible = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_FirstSemTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_FirstSemTerm_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
this.visible = false;
}else{
  if(ContinuousCSU.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_SchoolAttended_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_SchoolAttended_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
this.visible = false;
}else{
  if(ContinuousCSU.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_TransferredCSU_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_TransferredCSU_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  ContinuousCSU.value ="";
  FirstSemTerm.value = "";
  SchoolAttended.value = "";
  //TransferredCSU.value = "";
  GraduateCSU.value = "";
 // AnticipatedGradTerm.value = "";
  TransferAdmissionTerm.mandatory = true;
  TransferAdmissionTerm.visible = true;
  Readmitted1.value = "";
  Readmitted2.value = "";
  Readmitted3.value = "";
  ReadmittedComments.value = "";
Explain1.value ="";
Explain2.value = "";
} else{
  TransferAdmissionTerm.visible = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_TransferAdmissionTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_TransferAdmissionTerm_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
this.visible =false;
}else{
  if(TransferredCSU.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_GraduateCSU_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_GraduateCSU_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  ContinuousCSU.value ="";
  TransferredCSU.value = "";
  //GraduateCSU.value = "";
 // TransferAdmissionTerm.value = "";
FirstSemTerm.value ="";
SchoolAttended.value ="";
  AnticipatedGradTerm.visible = true;
  AnticipatedGradTerm.mandatory = true;
  Readmitted1.value = "";
  Readmitted2.value = "";
  Readmitted3.value = "";
  ReadmittedComments.value = "";
Explain1.value ="";
Explain2.value = "";
} else{
  AnticipatedGradTerm.visible = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_AnticipatedGradTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_AnticipatedGradTerm_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
this.visible = false;
}else{
  if(GraduateCSU.value == "1"){
    this.visible = true;
  }else{
    this.visible = false;
  }
}
this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_NonStandardPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_NonStandardPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_Readmitted1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_Readmitted1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 //Readmitted1.value = "";
  Readmitted2.value = "";
  Readmitted3.value = "";
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
 // ReadmittedComments.value = "";
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_Readmitted2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_Readmitted2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
 Readmitted1.value = "";
  //Readmitted2.value = "";
  Readmitted3.value = "";
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
 // ReadmittedComments.value = "";
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_Readmitted3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_Readmitted3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value === "1"){
  Readmitted1.value = "";
  Readmitted2.value = "";
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
  //Readmitted3.value = "";
 //ReadmittedComments.value = "";
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_CertifyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_CertifyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        var userValue;
        if (ApplicantSignatureDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            ApplicantSignatureDate.value = d;

            ApplicantSignatureDate.enabled = false;
        }

       /* $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                //ApplicantSignature.value = userValue;
                ApplicantNamePrinted.value = userValue;
                ApplicantSignature.value = userValue;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });*/
			if(FirstName.value !== null){
				ApplicantNamePrinted.value = FirstName.value+" "+LastName.value;
                ApplicantSignature.value = FirstName.value+" "+LastName.value;
            }

    } else {
        ApplicantNamePrinted.value = null;
        ApplicantSignature.value = null;
        ApplicantSignatureDate.value = null;
    }

}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_ApplicantSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_ApplicantSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_ApplicantSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_ApplicantSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_GradEvalCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_GradEvalCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToEvaluator"){
if(this.value === "1"){
  var userValue;
 if(GradEvalDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	GradEvalDate.value = d;
  
   GradEvalDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  GradEvalSign.value = userValue;
                  GradEvalName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  GradEvalSign.enabled = false;
  GradEvalName.enabled = false;
 
}else{   
    GradEvalSign.value = "";
    GradEvalName.value = "";
  }

}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_GradEvalSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_GradEvalSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_GradEvalDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_GradEvalDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_RecordsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_RecordsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToRecords"){
if(this.value == 1){
  var userValue;
 if(RecordsDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	RecordsDate.value = d;
  
   RecordsDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  RecordsSign.value = userValue;
                  RecordsName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  RecordsSign.enabled = false;
  RecordsName.enabled = false;
 
}else{   
    RecordsSign.value = "";
    RecordsName.value = "";
  }
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_RecordsSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_RecordsSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_RecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_RecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year_student.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year_student.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;
AdvisorEmailID.value = "yjayaram@fullerton.edu";
EmailAddress.value = "yjayaram@fullerton.edu";

/*AdvisorEmailID.value = "pushpa.kawadi@thoughtfocus.com";
EmailAddress.value = "pushpa.kawadi@thoughtfocus.com";*/

aftiaDescCWID.value = Name.value +" " + CWID.value;

if(ContinuousCSU.value === null && TransferredCSU.value === null && GraduateCSU.value === null && Readmitted1.value === null && Readmitted2.value === null && Readmitted3.value === null){
  showErrorModal("Alert","Please enter Change for catalog year");
  submitFlag = 1; 
} else{
  submitFlag = 0;
}


if(TransferredCSU.value === "1" || ContinuousCSU.value === "1" || GraduateCSU.value === "1"){
  CatalogFlag.value = "1";
  to.mandatory = "";
} else if(Readmitted1.value === "1" || Readmitted2.value === "1" || Readmitted3.value === "1"){
  CatalogFlag.value = "2";
  to.mandatory = "error";
}
if((ContinuousCSU.value == "1") && TransferredCSU.value != "1" && GraduateCSU.value != "1"){
  workflow_route.value  = "ToEval";
}
if((ContinuousCSU.value != "1") && (TransferredCSU.value == "1" || GraduateCSU.value == "1")){
  workflow_route.value  = "ToRecords";
}
if(submitFlag  === 0){
  EmailSubject.value = "Change of Catalog Year - "+ CWID.value;
guideBridge.submit();
}
        }
	}
}
