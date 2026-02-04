/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  
  applicantSignaturePanel.visble = true;
  GradEvalPanel.visible = false;
  RecordsPanel.visible = false;
  UniversityPanel.visible = false;
}

if(StageIndicator.value === "ToStandardGradEval"){
  NonStandardPanel.enabled = false;
   StdCatalogYear.enabled = false;
  basicInformation.enabled = false;
  applicantSignaturePanel.enabled = false;
  GradEvalPanel.visible = true;
  RecordsPanel.visible = false;
  UniversityPanel.visible = false;
  
}

if(StageIndicator.value === "ToStandardRecords"){
 NonStandardPanel.enabled = false;
  StdCatalogYear.enabled = false;
  basicInformation.enabled = false;
  applicantSignaturePanel.enabled = false;
  GradEvalPanel.enabled = false;
  RecordsPanel.visible = true;
  UniversityPanel.visible = false;
}

if(StageIndicator.value === "ToNSGradEvaluator"){
  basicInformation.enabled = false;
  StdCatalogYear.visible = false;
  applicantSignaturePanel.enabled = false;
  GradEvalPanel.visible = true;
  RecordsPanel.visible = false;
  UniversityPanel.visible = false;
}

if(StageIndicator.value === "ToNSUniversityRegistar"){
  StdCatalogYear.visible = false;
  applicantSignaturePanel.enabled = false;
  GradEvalPanel.enabled = false;
  RecordsPanel.visible = false;
  UniversityPanel.visible = true;
}

if(StageIndicator.value === "ToNSRecords"){
  StdCatalogYear.visible = false;
  applicantSignaturePanel.enabled = false;
  GradEvalPanel.enabled = false;
  RecordsPanel.visible = true;
  UniversityPanel.enabled = false;
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_guideRootPanel_init1 = function (scope) {
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
          	//var userID = 'akelly';
          	
          AdvisorUserID.value = userValue;
          form_initiator.value = userValue;
         if((userID.toLowerCase().substring(0, 3) !== "zz-")){
            $.ajax({
                type: 'GET',
                url: "/bin/getAdvisorData",
                data: {
                    userID: userID,
                },
                dataType: 'json',

                success: function(myresopnse) {

                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');
                    if (myresopnse.length !== 0) {
                     // AdvisorUserID.value = myresopnse[0].USERID;
                       StudentFlag.value = true;
                      AdvisorEmailID.value = myresopnse[0].EMAILID;
                      AdvisorTitleHidden.value  = myresopnse[0].DEPTTITLE;
                       
                       gifModal.style.display = "none";

                    } else {
                        StudentFlag.value = false;
                        gifModal.style.display = "none";
                        showErrorModal("Alert!", "No matcing records found");
                    }


                }
            });
            }
          else {
            StudentFlag.value = false;
                        gifModal.style.display = "none";
                        showErrorModal("Alert!", "No matcing records found");
                    }
        }

    });
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_CaseId_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
debugger;
    var cwid = this.value;

    gifModal.style.display = "block";
    if (cwid !== "" && (((AdvisorUserID.value).toLowerCase().substring(0, 3)) !== "zz-")) {
        cwid = cwid.trim();

        var pattern = /^8\d{8}$/;
        var result = pattern.test(cwid);
        if (result !== true) {
            showErrorModal("Alert!", "Please enter a valid CWID");
        } else if (StudentFlag.value === "true") {
            $.ajax({
                type: 'GET',
                url: "/bin/getCatalogYearUserLookUp",
                data: {
                    cwid: cwid,
                },
                dataType: 'json',

                success: function(myresopnse) {
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var gifModal = document.getElementById('gifModal');

                    debugger;
                    if (myresopnse.length == 1) {
                        Name.value = "";
                        PhoneNumber.value = "";
                        EmailAddress.value = "";
                        Major.value = "";
                        from.value = "";
                        AnticipatedGradTerm.value = "";
                        SecondMajor.value = "";
                        var lName = myresopnse[0].LAST_NAME;
                        var fName = myresopnse[0].FIRST_NAME;
                        var nameValue = fName.concat(" ").concat(lName);
                        FirstName.value = fName;
                        LastName.value = lName;
                        Name.value = nameValue;
                        //CWID.value = myresopnse[0].STUDENT_ID;
                        PhoneNumber.value = myresopnse[0].STUDENT_PHONE;
                        EmailAddress.value = myresopnse[0].STUDENT_EMAIL;
                        Major.value = myresopnse[0].PROGRAMS;
                        //SecondMajor.value = myresopnse[0].SecMajorMinCer;
                        from.value = myresopnse[0].TERM_DESCR;
                        TransferAdmissionTerm.value = myresopnse[0].TERM_DESCR;
                        if ((myresopnse[0].EXP_TERM_DESCR).trim() !== "" && (myresopnse[0].EXP_TERM_DESCR).trim() !== "-") {
                            AnticipatedGradTerm.value = myresopnse[0].EXP_TERM_DESCR.trim();
                        } else {
                            GraduateCSU.enabled = false;
                        }
                        if ((myresopnse[0].ADMIT_TERM_DESCR).trim() !== "" && (myresopnse[0].ADMIT_TERM_DESCR).trim() !== "-") {
                            TransferAdmissionTerm.value = myresopnse[0].ADMIT_TERM_DESCR.trim();
                        } else {
                            TransferredCSU.enabled = false;
                        }
                        gifModal.style.display = "none";

                    } else if (myresopnse.length > 1) {
                        Name.value = "";
                        PhoneNumber.value = "";
                        EmailAddress.value = "";
                        Major.value = "";
                        from.value = "";
                        AnticipatedGradTerm.value = "";
                        SecondMajor.value = "";
                        gifModal.style.display = "none";
                        modal.style.display = "block";

                        var col = [];
                        col.push("CWID");
                        col.push("FIRST_NAME");
                        col.push("LAST_NAME");
                        col.push("ACAD_PLAN");
                        col.push("PROGRAMS");

                        var table = document.createElement("table");
                        table.id = "tb";
                        var tr = table.insertRow(-1);
                        var headings = ["", "CWID", "First Name", "Last Name", "Acad Plan", "Program"];
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

                                    var lName = myresopnse[n].FIRST_NAME;
                                    var fName = myresopnse[n].LAST_NAME;
                                    FirstName.value = fName;
                                    LastName.value = lName;
                                    var nameValue = fName.concat(" ").concat(lName);

                                    Name.value = nameValue;
                                    //CWID.value = myresopnse[n].STUDENT_ID;
                                    PhoneNumber.value = myresopnse[n].STUDENT_PHONE;
                                    EmailAddress.value = myresopnse[n].STUDENT_EMAIL;
                                    Major.value = myresopnse[n].PROGRAMS;
                                    var btn = document.getElementsByClassName("rb");
                                    debugger;
                                    for (k = 0; k < btn.length; k++) {
                                        if (btn[k].checked === false) {
                                            if (SecondMajor.value === null) {
                                                SecondMajor.value = (myresopnse[k].PROGRAMS);
                                            } else {
                                                SecondMajor.value = (SecondMajor.value).concat(", " + myresopnse[k].PROGRAMS);
                                            }
                                        }
                                    }
                                    if ((myresopnse[n].EXP_TERM_DESCR).trim() !== "" && (myresopnse[n].EXP_TERM_DESCR).trim() !== "-") {
                                        AnticipatedGradTerm.value = myresopnse[n].EXP_TERM_DESCR.trim();
                                    } else {
                                        GraduateCSU.enabled = false;
                                    }
                                    if ((myresopnse[n].ADMIT_TERM_DESCR).trim() !== "" && (myresopnse[n].ADMIT_TERM_DESCR).trim() !== "-") {
                                        TransferAdmissionTerm.value = myresopnse[n].ADMIT_TERM_DESCR.trim();
                                    } else {
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
                        Name.value = "";
                        PhoneNumber.value = "";
                        EmailAddress.value = "";
                        Major.value = "";
                        from.value = "";
                        AnticipatedGradTerm.value = "";
                        SecondMajor.value = "";
                        showErrorModal("Alert!", "No matcing records found");
                    }


                }
            });
        }else {
gifModal.style.display = "none";

    showErrorModal("Alert!", "No matcing records found");
}
    } else {
        gifModal.style.display = "none";

        showErrorModal("Alert!", "No matcing records found");
    }
 
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_TodayDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_TodayDate_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year.generated_EmailAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_EmailAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_ChangeCatalogYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_ChangeCatalogYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  if( CatalogFlag.value == "1"){
    StdCatalogYear.visible = true;
    NonStandardPanel.visible = false;
  }else{
    StdCatalogYear.visible = false;
    NonStandardPanel.visible = true;
  }
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Readmitted1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Readmitted1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
 //Readmitted1.value = "";
  Readmitted2.value = "";
  Readmitted3.value = "";
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
  ReadmittedComments.value = "";
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Readmitted2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Readmitted2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
 Readmitted1.value = "";
  //Readmitted2.value = "";
  Readmitted3.value = "";
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
  ReadmittedComments.value = "";
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Readmitted3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Readmitted3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  Readmitted1.value = "";
  Readmitted2.value = "";
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
  //Readmitted3.value = "";
   ReadmittedComments.enabled = true;
 ReadmittedComments.mandatory = true;
}else{
  ReadmittedComments.mandatory = false;
   ReadmittedComments.mandatory = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_ReadmittedComments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_ReadmittedComments_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Explain1CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Explain1CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  Explain1.enabled = true;
  Explain1.mandatory = true;
  Explain2CB.value = "";
  Explain2.value = ""; 
  Explain2.mandatory = false;
  Explain2.enabled = false;
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
}
}


        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Explain1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Explain1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Explain2CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Explain2CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  Explain2.enabled = true;
  Explain2.mandatory = true;
  Explain1CB.value = "";
  Explain1.value = ""; 
  Explain1.mandatory = false;
  Explain1.enabled = false;
  ContinuousCSU.value = "";
  TransferredCSU.value = "";
  GraduateCSU.value = "";
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_Explain2_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_Explain2_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_ContinuousCSU_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_ContinuousCSU_valueCommit0 = function (scope) {
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
  Explain1CB.value ="";
  Explain2CB.value = "";
} else{
  FirstSemTerm.visible = false;
 SchoolAttended.visible = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_FirstSemTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_FirstSemTerm_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year.generated_SchoolAttended_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_SchoolAttended_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year.generated_TransferredCSU_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_TransferredCSU_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  ContinuousCSU.value ="";
  FirstSemTerm.value = "";
  SchoolAttended.value = "";
  //TransferredCSU.value = "";
  GraduateCSU.value = "";
  //AnticipatedGradTerm.value = "";
  TransferAdmissionTerm.mandatory = true;
  TransferAdmissionTerm.visible = true;
  Readmitted1.value = "";
  Readmitted2.value = "";
  Readmitted3.value = "";
  ReadmittedComments.value = "";
Explain1.value ="";
Explain2.value = "";
   Explain1CB.value ="";
  Explain2CB.value = "";
} else{
  TransferAdmissionTerm.visible = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_TransferAdmissionTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_TransferAdmissionTerm_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year.generated_GraduateCSU_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_GraduateCSU_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value === "1"){
  ContinuousCSU.value ="";
  TransferredCSU.value = "";
  //GraduateCSU.value = "";
  //TransferAdmissionTerm.value = "";
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
   Explain1CB.value ="";
  Explain2CB.value = "";
} else{
  AnticipatedGradTerm.visible = false;
}
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_AnticipatedGradTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_AnticipatedGradTerm_init0 = function (scope) {
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
 * @function change_of_catalog_year_change_of_catalog_year.generated_CertifyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_CertifyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value == 1){
  var userValue;
 /* if(ApplicantSignDate.value === null){*/
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	AdvisorSignatureDate.value = d;
  
   


   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  AdvisorNamePrinted.value = userValue;
                  AdvisorSignature.value = userValue;
                  AdvisorEmail.value = AdvisorEmailID.value;
                  AdvisorTitle.value = AdvisorTitleHidden.value;
                  //AdvisorTitle.value = "Dean CBE";
                  
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  
   //ApplicantSignature.enabled = false;
  //ApplicantSignDate.enabled = false;
  AdvisorNamePrinted.enabled = false;
  AdvisorSignature.enabled = false;
  AdvisorEmail.enabled = false;
  //AdvisorTitle.enabled = false;

}else{
      //ApplicantSignature.value = "";
      //EmpSign.mandatory = "error";
      //ApplicantSignDate.value = null;
    AdvisorNamePrinted.value = "";
    AdvisorSignature.value = "";
  AdvisorEmail.value = "";
  AdvisorTitle.value = "";
  }

}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_GradEvalCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_GradEvalCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToStandardGradEval" || StageIndicator.value  === "ToNSGradEvaluator"){
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
  GradEvalDate.value = "";
  }

}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_UnivRecCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_UnivRecCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToNSUniversityRegistar"){
if(this.value == 1){
  var userValue;
 if(UnivRecDate.value === null){
 var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
	UnivRecDate.value = d;
  
   UnivRecDate.enabled = false;
}

   $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    //ApplicantSignature.value = userValue;
                  UnivRecSign.value = userValue;
                  UnivRecName.value = userValue;
                 
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
  UnivRecSign.enabled = false;
  UnivRecName.enabled = false;
 
}else{   
    UnivRecSign.value = "";
    UnivRecName.value = "";
  }
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_RecordsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_RecordsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToStandardRecords" || StageIndicator.value ===  "ToNSRecords"){
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
  RecordsDate.value = "";
  }
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_AdvisorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_AdvisorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
this.visible = false;
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  
         $.ajax({

        type: 'GET',

        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(userData) {
            var userValue = userData.userId;
          workflow_initiator.value = userValue;
          //alert(this.value);
        }
         });
}
        }
	}
}
/**
 * @function change_of_catalog_year_change_of_catalog_year.generated_submit1607673526985_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
change_of_catalog_year_change_of_catalog_year.generated_submit1607673526985_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


AdvisorEmailID.value = "yjayaram@fullerton.edu";
EmailAddress.value = "yjayaram@fullerton.edu";
AdvisorEmail.value = "yjayaram@fullerton.edu";

/*AdvisorEmailID.value = "pushpa.kawadi@thoughtfocus.com";
EmailAddress.value = "pushpa.kawadi@thoughtfocus.com";
AdvisorEmail.value = "pushpa.kawadi@thoughtfocus.com";*/


aftiaDescCWID.value = Name.value +" " + CWID.value;

if(ContinuousCSU.value === null && TransferredCSU.value === null && GraduateCSU.value === null && Readmitted1.value === null && Readmitted2.value === null && Readmitted3.value === null && Explain1CB.value === null && Explain2CB.value === null){
  showErrorModal("Alert","Please enter Change for Catalog Year");
  submitFlag = 1; 
} else{
  submitFlag = 0;
}


if(TransferredCSU.value === "1" || ContinuousCSU.value === "1" || GraduateCSU.value === "1"){
  CatalogFlag.value = "1";
  to.mandatory = "";
} else if(Readmitted1.value === "1" || Readmitted2.value === "1" || Readmitted3.value === "1"||  Explain1CB.value === "1" || Explain2CB.value === "1"){
  CatalogFlag.value = "2";
  to.mandatory = "error";
}

if(submitFlag  === 0){
  EmailSubject.value = "Change of Catalog Year - "+ CWID.value;
guideBridge.submit();
}
        }
	}
}
