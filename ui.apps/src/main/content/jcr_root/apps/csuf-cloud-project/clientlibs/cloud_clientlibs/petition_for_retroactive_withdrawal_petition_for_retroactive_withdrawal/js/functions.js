/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            debugger;
            var userId = myresponse.userId;
            userId = "nyedayanara1";
            //userId = "laurenaudreymccarthy"; //UnderGraduate+NonDQ
            //userId = "angelap04"; //Graduate+NonDQ
            //userId = "brockrailey"; //Undergraduate+DQ
            workflow_initiator.value = userId;
            StudentUserId.value = userId;
            showWithdrawalTypePopup();
        }
    });
}

function showWithdrawalTypePopup() {
    debugger;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {

        if ((document.getElementById("button1").checked === false) && (document.getElementById("button2").checked === false)) {
            modal.style.display = "block";
            showErrorModal("Alert!", "Please select the withdrawal type");

        } else {
            modal.style.display = "none";
        }
    };

    document.getElementById("button1").onclick = function() {
        modal.style.display = "none";
        withdrawalType.value = "1";
        populateStudentData();
    };

    document.getElementById("button2").onclick = function() {
        modal.style.display = "none";
        withdrawalType.value = "2";
        populateStudentData();
    };
}

function populateStudentData() {
    $.ajax({
        type: 'GET',
        url: "/bin/getPetitionForRetroactiveWithdrawal",
        data: {
            action: "STUDENT_DETAILS",
            userId: StudentUserId.value
        },
        dataType: 'json',

        success: function(myresponse) {
            debugger;
            if (myresponse.length === 1) {
                var firstName = myresponse[0].STUDENT_FNAME;
                var lastName = myresponse[0].STUDENT_LNAME;
                var fullCollege = myresponse[0].FUL_COLLEGE;
                var graduateStatus = myresponse[0].ACAD_CAREER;
                CampusID.value = myresponse[0].STUDENT_ID;
                Name.value = firstName + " " + lastName;
                // Email.value = myresponse[0].STUDENT_EMAIL;
                Email.value = "yjayaram@fullerton.edu";
                Address.value = myresponse[0].ADDRESS1;
                Phone.value = myresponse[0].STUDENT_PHONE;
                City.value = myresponse[0].CITY;
                State.value = myresponse[0].STATE;
                ZipCode.value = myresponse[0].POSTAL;
                DQType.value = myresponse[0].DQ_FLAG;
                StudentFullCollege.value = fullCollege;
                StudentFirstName.value = firstName;
                StudentLastName.value = lastName;
                if (graduateStatus == "PBAC") {
                    GraduationType.value = "G";
                } else if ((graduateStatus == "EXED") || (graduateStatus == "UGRD")) {
                    GraduationType.value = "U";
                    UnderGradStudent_Panel.visible = true;
                }
                //getDeanData(fullCollege);
            } else if (myresponse.length > 1) {
                gifModal.style.display = "none";
                myModal1.style.display = "block";

                var col = [];
                col.push("STUDENT_ID");
                col.push("STUDENT_FNAME");
                col.push("STUDENT_LNAME");
                col.push("ACAD_CAREER");
                col.push("FUL_COLLEGE");
                col.push("FUL_COLLEGE_NAME");

                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "CWID", "First_Name", "Last_Name", "Acad_Career", "College", "College_Name"];
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

                            var firstName = myresponse[n].STUDENT_FNAME;
                            var lastName = myresponse[n].STUDENT_LNAME;
                            var fullCollege = myresponse[n].FUL_COLLEGE;
                            var graduateStatus = myresponse[n].ACAD_CAREER;
                            CampusID.value = myresponse[n].STUDENT_ID;
                            Name.value = firstName + " " + lastName;
                            // Email.value = myresponse[n].STUDENT_EMAIL;
                            Email.value = "yjayaram@fullerton.edu";
                            Address.value = myresponse[n].ADDRESS1;
                            Phone.value = myresponse[n].STUDENT_PHONE;
                            City.value = myresponse[n].CITY;
                            State.value = myresponse[n].STATE;
                            ZipCode.value = myresponse[n].POSTAL;
                            DQType.value = myresponse[n].DQ_FLAG;
                            StudentFullCollege.value = fullCollege;
                            StudentFirstName.value = firstName;
                            StudentLastName.value = lastName;
                            if (graduateStatus == "PBAC") {
                                GraduationType.value = "G";
                            } else if ((graduateStatus == "EXED") || (graduateStatus == "UGRD")) {
                                GraduationType.value = "U";
                                UnderGradStudent_Panel.visible = true;
                            }
                            rButtonStatus = true;
                            myModal1.style.display = "none";
                            //getDeanData(fullCollege);
                            break;

                        }
                    }
                    if (rButtonStatus === false) {
                        showErrorModal("Alert!", "Please select appropriate entry");
                        //  modal1.style.display = "block";
                    }
                };

                footerModal.appendChild(okButton);
            }
        }
    });
}

function getDeanData(fullCollegeVal) {
    $.ajax({
        type: 'GET',
        url: "/bin/getPetitionForRetroactiveWithdrawal",
        data: {
            action: "ASSOCIATE_DEAN_DETAILS",
            fullCollege: fullCollegeVal
        },
        dataType: 'json',
        success: function(myresponse) {
            AssociateDeanName.value = myresponse[0].EMPNAME;
            AssociateDeanUserId.value = myresponse[0].EMP_USERID;
            //AssociateDeanEmailId.value = myresponse[0].EMP_EMAIL;
            AssociateDeanEmailId.value = "chaitanya.sai@thoughtfocus.com";
        }
    });
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  AssociateDeanSignaturePanel.visible = false;
  AVPSignaturePanel.visible = false;
  GraduateStudiesSignaturePanel.visible = false;
  MedicalCommitteeSignaturePanel.visible = false;
  PetitionCoordinatorSignaturePanel.visible = false;
  RecordsSignaturePanel.visible = false;
  UnderGradStudent_Panel.visible = false;
}

if(StageIndicator.value == "ToMedicalCommittee"){
  StudentInformationPanel.enabled = false;
  Student_Panel.enabled = false;
  if(GraduationType.value == "U"){
    UnderGradStudent_Panel.enabled = false;
  }else{
    UnderGradStudent_Panel.visible = false;
  }
  InformationTab.enabled = false;
  ClassBeingPetitioned.enabled = false;
  PetitionStatementPanel.enabled = false;
  SupportingDocuments.enabled = false;
  AssociateDeanSignaturePanel.visible = false;
  AVPSignaturePanel.visible = false;
  GraduateStudiesSignaturePanel.visible = false;
  PetitionCoordinatorSignaturePanel.visible = false;
  RecordsSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToAssociateDean"){
  StudentInformationPanel.enabled = false;
  Student_Panel.enabled = false;
  if(GraduationType.value == "U"){
    UnderGradStudent_Panel.enabled = false;
  }else{
    UnderGradStudent_Panel.visible = false;
  }
  InformationTab.enabled = false;
  ClassBeingPetitioned.enabled = false;
  PetitionStatementPanel.enabled = false;
  SupportingDocuments.enabled = false;
  MedicalCommitteeSignaturePanel.visible = false;
  GraduateStudiesSignaturePanel.visible = false;
  AVPSignaturePanel.visible = false;
  PetitionCoordinatorSignaturePanel.visible = false;
  RecordsSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToGraduateStudies"){
  StudentInformationPanel.enabled = false;
  Student_Panel.enabled = false;
  if(GraduationType.value == "U"){
    UnderGradStudent_Panel.enabled = false;
  }else{
    UnderGradStudent_Panel.visible = false;
  }
  InformationTab.enabled = false;
  ClassBeingPetitioned.enabled = false;
  PetitionStatementPanel.enabled = false;
  SupportingDocuments.enabled = false;
  MedicalCommitteeSignaturePanel.visible = false;
  AssociateDeanSignaturePanel.enabled = false;
  AVPSignaturePanel.visible = false;
  PetitionCoordinatorSignaturePanel.visible = false;
  RecordsSignaturePanel.visible = false; 
}

if(StageIndicator.value == "ToAVP"){
  StudentInformationPanel.enabled = false;
  Student_Panel.enabled = false;
  if(GraduationType.value == "U"){
    UnderGradStudent_Panel.enabled = false;
  }else{
    UnderGradStudent_Panel.visible = false;
  }
  InformationTab.enabled = false;
  ClassBeingPetitioned.enabled = false;
  PetitionStatementPanel.enabled = false;
  SupportingDocuments.enabled = false;
  MedicalCommitteeSignaturePanel.visible = false;
  AssociateDeanSignaturePanel.visible = false;
  GraduateStudiesSignaturePanel.visible = false;
  PetitionCoordinatorSignaturePanel.visible = false;
  RecordsSignaturePanel.visible = false; 
}

if(StageIndicator.value == "ToPetitionCoordinator"){
  StudentInformationPanel.enabled = false;
  Student_Panel.enabled = false;
  if(GraduationType.value == "U"){
    UnderGradStudent_Panel.enabled = false;
  }else{
    UnderGradStudent_Panel.visible = false;
  }
  InformationTab.enabled = false;
  ClassBeingPetitioned.enabled = false;
  PetitionStatementPanel.enabled = false;
  SupportingDocuments.enabled = false;
  if(AssociateDeanSignatureCB.value == "1"){
    AssociateDeanSignaturePanel.enabled = false;
  }else{
    AssociateDeanSignaturePanel.visible= false;
  }
  if(MedicalCommitteeSignatureCB.value == "1"){
    MedicalCommitteeSignaturePanel.enabled = false;
  }else{
    MedicalCommitteeSignaturePanel.visible = false;
  }
  if(GraduateStudiesSignatureCB.value == "1"){
    GraduateStudiesSignaturePanel.enabled = false;
  }else{
    GraduateStudiesSignaturePanel.visible = false;
  }
  if(AVPCB.value == "1"){
    AVPSignaturePanel.enabled = false;
  }else{
    AVPSignaturePanel.visible = false;
  }
  RecordsSignaturePanel.visible = false;
}

if(StageIndicator.value == "ToRecords"){
  StudentInformationPanel.enabled = false;
  Student_Panel.enabled = false;
  if(GraduationType.value == "U"){
    UnderGradStudent_Panel.enabled = false;
  }else{
    UnderGradStudent_Panel.visible = false;
  }
  InformationTab.enabled = false;
  ClassBeingPetitioned.enabled = false;
  PetitionStatementPanel.enabled = false;
  SupportingDocuments.enabled = false;
  if(AssociateDeanSignatureCB.value == "1"){
    AssociateDeanSignaturePanel.enabled = false;
  }else{
    AssociateDeanSignaturePanel.visible= false;
  }
  if(MedicalCommitteeSignatureCB.value == "1"){
    MedicalCommitteeSignaturePanel.enabled = false;
  }else{
    MedicalCommitteeSignaturePanel.visible = false;
  }
  if(GraduateStudiesSignatureCB.value == "1"){
    GraduateStudiesSignaturePanel.enabled = false;
  }else{
    GraduateStudiesSignaturePanel.visible = false;
  } 
  if(AVPCB.value == "1"){
    AVPSignaturePanel.enabled = false;
  }else{
    AVPSignaturePanel.visible = false;
  }
  PetitionCoordinatorSignaturePanel.enabled = false;
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            headerItem17224428581831722442859249.visible=false;
headerItem17224431530321722443154096.visible=false;
headerItem17224432724061722443274608.visible=false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            caseId.enabled = false;

if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',

        url: "/bin/getCaseID",

        dataType: 'json',

        success: function(myresponse) {

            caseId.value = myresponse.CASEID;

        },

    });
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_B_Date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_B_Date_init0 = function (scope) {
    with(this) {
        with(scope) {
            B_Date.enabled = false;
if(StageIndicator.value === null){

      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, ' ');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  B_Date.value = d;
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_initials1CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_initials1CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  Initial1.value = Name.value;
  
  Initial2.value = "";
  initials2CB.value = "";
  
  Initial3.value = "";
  initials3CB.value = "";
} else {
  Initial1.value = "";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_initials2CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_initials2CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  Initial2.value = Name.value;
  
  Initial1.value = "";
  initials1CB.value = "";
  
  Initial3.value = "";
  initials3CB.value = "";
} else {
  Initial2.value = "";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_initials3CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_initials3CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  Initial3.value = Name.value;
  
  Initial2.value = "";
  initials2CB.value = "";
  
  Initial1.value = "";
  initials1CB.value = "";
} else {
  Initial3.value = "";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_SemYear_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_SemYear_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "Fall 2022") {
    termCode = '2227';
} else if (this.value == "Winter 2022") {
    termCode = '2221';
} else if (this.value == "Spring 2022") {
    termCode = '2223';
} else if (this.value == "Summer 2022") {
    termCode = '2225';
} else if (this.value == "Fall 2023") {
    termCode = '2237';
} else if (this.value == "Winter 2023") {
    termCode = '2231';
} else if (this.value == "Spring 2023") {
    termCode = '2233';
} else if (this.value == "Summer 2023") {
    termCode = '2235';
} else if (this.value == "Fall 2024") {
    termCode = '2247';
} else if (this.value == "Winter 2024") {
    termCode = '2241';
} else if (this.value == "Spring 2024") {
    termCode = '2243';
} else if (this.value == "Summer 2024") {
    termCode = '2245';
}
debugger;
TermCode.value = termCode;

if (StageIndicator.value === null) {
  
  var userId = StudentUserId.value;

  var TypeOfWithdrawal = "";
  if (withdrawalType.value == "1") {
      TypeOfWithdrawal = 2;
  } else {
      TypeOfWithdrawal = 1;
  }
  
    $.ajax({
        type: 'GET',
        url: "/bin/getPetitionRetroactiveCourseInfo",

        data: {
            userId: userId,
            term: TermCode.value,
            typeOfWithdrawal: TypeOfWithdrawal,
            typeOfForm: "regular"
        },

        dataType: 'json',

        success: function(myresponse) {
            debugger;
            gifModal.style.display = "block";
            if (myresponse.COURSES.length >= 1) {
                LookupResult.value = JSON.stringify(myresponse);
                var k;
                var rowcountRemoveAll1 = CourseRow.instanceManager.instanceCount;
                for (k = 0; k < rowcountRemoveAll1; k++) {
                    CourseRow.instanceManager.removeInstance(CourseRow.instanceIndex);
                }
                CourseRow.instanceManager.removeInstance((CourseRow.instanceManager.instanceCount) - 1);
                var i;
                for (i = 0; i < myresponse.COURSES.length; i++) {
                    CourseRow.instanceManager.addInstance();
                    CourseRow.instanceManager.instances[i].DeptCourseNo.value = myresponse.COURSES[i].CRSE_NAME;
                    CourseRow.instanceManager.instances[i].ScheduleNo.value = myresponse.COURSES[i].CLASS_NBR;
                    CourseRow.instanceManager.instances[i].AssociateDeanName.value = myresponse.COURSES[i].DEAN_NAME;
                    //CourseRow.instanceManager.instances[i].AssociateDeanEmailId.value = myresponse.COURSES[i].DEAN_EMAIL;
                    CourseRow.instanceManager.instances[i].AssociateDeanEmailId.value = "yjayaram@fullerton.edu";
                    CourseRow.instanceManager.instances[i].AssociateDeanUserId.value = myresponse.COURSES[i].DEAN_USERID;

                }
                var rowcount = CourseRow.instanceManager.instanceCount;
                CourseRow.instanceManager.removeInstance(rowcount - 1);
                gifModal.style.display = "none";

            } else {
                var n;
                var rowcountRemoveAll2 = CourseRow.instanceManager.instanceCount;
                for (n = 0; n < rowcountRemoveAll2; n++) {
                    CourseRow.instanceManager.removeInstance(CourseRow.instanceIndex);
                }
                var rowcount1 = CourseRow.instanceManager.instanceCount;
                CourseRow.instanceManager.instances[rowcount1 - 1].CourseNo.value = null;
                CourseRow.instanceManager.instances[rowcount1 - 1].ScheduleNo.value = null;
                CourseRow.instanceManager.instances[rowcount1 - 1].AssociateDeanName.value = null;
                CourseRow.instanceManager.instances[rowcount1 - 1].AssociateDeanEmailId.value = null;
                CourseRow.instanceManager.instances[rowcount1 - 1].AssociateDeanUserId.value = null;
                CourseRow.instanceManager.removeInstance(rowcount1 - 1);

                LookupResult.value = "";
                gifModal.style.display = "none";
                showErrorModal("Alert!", "No matching records found");
            }
        }
    });
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_SelectCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_SelectCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var rowCount3 = CourseRow.instanceManager.instanceCount;
if (StageIndicator.value === null) {
    var flag1 = false;
    if (this.value == "1") {
        for (n = 0; n < rowCount3; n++) {
            if (CourseRow.instanceManager.instances[n].SelectCB.value != "Yes") {
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if (flag === true) {
            SelectAll.value = "1";
        }
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_DeptCourseNo_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_DeptCourseNo_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/PetitionFormsServlet",
        data: {
            deptNo: this.value,
            term: TermCode.value,
            action: "MAJOR_DEAN_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
            DeanUserID.value = myresponse[0].DEAN_USERID;
            DeanName.value = myresponse[0].DEAN_NAME;
            //DeanEmail.value = myresponse[0].DEAN_EMAIL;
           //DeanEmail.value = "yjayaram@fullerton.edu";
           DeanEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
           DeanEmplID.value = myresponse[0].DEAN_EMPLID;
        }
    });
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_WU_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_WU_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    I_CB.value="";
    IC_CB.value="";
    Othe_CB.value="";
    Other.value="";
    NC_CB.value="";
    RP_CB.value="";
}

        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_I_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_I_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    WU_CB.value="";
    IC_CB.value="";
    Othe_CB.value="";
    Other.value="";
    NC_CB.value="";
    RP_CB.value="";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_IC_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_IC_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    WU_CB.value="";
    I_CB.value="";
    Othe_CB.value="";
    Other.value="";
    NC_CB.value="";
    RP_CB.value="";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Othe_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Othe_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    I_CB.value="";
    IC_CB.value="";
    WU_CB.value="";
    Other.enabled=true;
    NC_CB.value="";
    RP_CB.value="";
} else {
      Other.enabled=false;
      Other.value="";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Other_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Other_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_NC_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_NC_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    WU_CB.value="";
    I_CB.value="";
    IC_CB.value="";
    Othe_CB.value="";
    Other.value="";
    RP_CB.value="";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RP_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RP_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    WU_CB.value="";
    I_CB.value="";
    IC_CB.value="";
    Othe_CB.value="";
    Other.value="";
    NC_CB.value="";
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_4_Yes_or_No_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_4_Yes_or_No_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
    Statement_4.enabled = true;
    Statement_4.mandatory = true;
  }else{
    Statement_4.value = "";
    Statement_4.enabled = false;
    Statement_4.mandatory = false;
  }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_4_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_4_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_5_Yes_or_No_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_5_Yes_or_No_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  if(this.value == "1"){
    Statement_5.enabled = true;
    Statement_5.mandatory = true;
  }else{
    Statement_5.value = "";
    Statement_5.enabled = false;
    Statement_5.mandatory = false;
  }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_5_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_Statement_5_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_SupportingDocuments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_supportDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc1.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc1.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc1.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc1.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_supportDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc2.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc2.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc2.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc2.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_supportDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var filePath = supportDoc3.fileAttachment.value;
    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    if (format.test(supportDoc3.fileAttachment.value) === true) {
        var doc2NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        supportDoc3.fileAttachment.value = doc2NewName;
    }
    if (extension !== "pdf") {
        supportDoc3.fileAttachment.value = null;
        showErrorModal("Alert !", "Please upload a supported file");
    }
    if (this.value !== null) {
        supDocAttachText.visible = false;
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
              StudentSignature.value = Name.value;
                StudentSignDate.value = myresopnse.SERVER_DATE;
                if (GraduationType.value == "U") {
                    lastName.value = StudentLastName.value;
                    firstName.value = StudentFirstName.value;
                    cwid.value = CampusID.value;
                  StudentScribbleSignature.value = Name.value;
                }
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        StudentSignDate.enabled = false;
    } else {
      StudentSignature.value = null;
        StudentSignDate.value = null;
        if (GraduationType.value == "U") {
            lastName.value = "";
            firstName.value = "";
            cwid.value = "";
          StudentScribbleSignature.value = "";
        }
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AssociateDeanSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AssociateDeanSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToAssociateDean") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                AssociateDeanSignature.value = userValue;
                AssociateDeanSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        AssociateDeanSignature.enabled = false;
        AssociateDeanSignatureDate.enabled = false;
    } else {
        AssociateDeanSignature.value = "";
        AssociateDeanSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AssociateDeanSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AssociateDeanSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AssociateDeanSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AssociateDeanSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_MedicalCommitteeSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_MedicalCommitteeSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToMedicalCommittee") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                MedicalCommitteeSignature.value = userValue;
                MedicalCommitteeSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        MedicalCommitteeSignature.enabled = false;
        MedicalCommitteeSignatureDate.enabled = false;
    } else {
        MedicalCommitteeSignature.value = "";
        MedicalCommitteeSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_MedicalCommitteeSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_MedicalCommitteeSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_MedicalCommitteeSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_MedicalCommitteeSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_GraduateStudiesSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_GraduateStudiesSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToGraduateStudies") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                GraduateStudiesSignature.value = userValue;
                GraduateStudiesSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        GraduateStudiesSignature.enabled = false;
        GraduateStudiesSignatureDate.enabled = false;
    } else {
        GraduateStudiesSignature.value = "";
        GraduateStudiesSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_GraduateStudiesSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_GraduateStudiesSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_GraduateStudiesSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_GraduateStudiesSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AVPCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AVPCB_valueCommit0 = function (scope) {
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
                AVPSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        AVPSignature.enabled = false;
        AVPSignatureDate.enabled = false;
    } else {
        AVPSignature.value = "";
        AVPSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AVPSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AVPSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AVPSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_AVPSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_PetitionCoordinatorSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_PetitionCoordinatorSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToPetitionCoordinator") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                PetitionCoordinatorSignature.value = userValue;
                PetitionCoordinatorSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        PetitionCoordinatorSignature.enabled = false;
        PetitionCoordinatorSignatureDate.enabled = false;
    } else {
        PetitionCoordinatorSignature.value = "";
        PetitionCoordinatorSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_PetitionCoordinatorSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_PetitionCoordinatorSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_PetitionCoordinatorSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_PetitionCoordinatorSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RecordsSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RecordsSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToRecords") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                RecordsSignature.value = userValue;
                RecordsSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        RecordsSignature.enabled = false;
        RecordsSignatureDate.enabled = false;
    } else {
        RecordsSignature.value = "";
        RecordsSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RecordsSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RecordsSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RecordsSignatureDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_RecordsSignatureDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (CampusID.value !== null) {
    getPdf();
}else{
      showErrorModal("Alert!", "Please fill all details");
   }

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/petition-for-retroactive-withdrawal/petition-for-retroactive-withdrawal');
            jsonData.append('fileName', CampusID.value);          
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
 * @function petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_retroactive_withdrawal_petition_for_retroactive_withdrawal.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var validationFlag = true;
//Check atleast one course is selected or not
if (validationFlag === true) {
    var rowCount4 = CourseRow.instanceManager.instanceCount;
    var flag;
    for (n = 0; n < rowCount4; n++) {
        if (CourseRow.instanceManager.instances[n].SelectCB.value != "Yes") {
            flag = 0;
        } else {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        validationFlag = false;
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].ClassBeingPetitioned[0].panel_7132987041715749450465[0]");
        showErrorModal("Alert!", "Please select the courses");
    } else {
        validationFlag = true;
    }
}

if (validationFlag === true) {
    if (StageIndicator.value === null) {
        aftiaDescCWID.value = Name.value + " " + CampusID.value;
        EmailSubject.value = "Test - Petition for Retroactive Withdrawal - " + CampusID.value;
    }

    //Set Course list, class number,class section
    var rowCount5 = CourseRow.instanceManager.instanceCount;
    if (rowCount5 > 0) {
        CourseNumberList.value = "";
        classNumberList.value = "";
        for (n = 0; n < rowCount4; n++) {

            if (CourseRow.instanceManager.instances[n].SelectCB.value == "Yes") {
                if (CourseNumberList.value === null) {
                    CourseNumberList.value = CourseRow.instanceManager.instances[n].DeptCourseNo.value;
                } else {
                    CourseNumberList.value = (CourseNumberList.value + ", ".concat(CourseRow.instanceManager.instances[n].DeptCourseNo.value));
                }

                if (classNumberList.value === null) {
                    classNumberList.value = CourseRow.instanceManager.instances[n].ScheduleNo.value;
                } else {
                    classNumberList.value = (classNumberList.value + ", ".concat(CourseRow.instanceManager.instances[n].ScheduleNo.value));
                }
            }
        }
    }
    //Set email address
    Email.value = "yjayaram@fullerton.edu";
    var testEmail = "yjayaram@fullerton.edu";
    
    /*Email.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
    var testEmail = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";*/

    var resultArray = JSON.parse(LookupResult.value);
    for (j = 0; j < resultArray.length; j++) {
        resultArray[j].DEAN_EMAIL = testEmail;
    }
    LookupResult.value = JSON.stringify(resultArray);
    console.log(LookupResult.value);


    guideBridge.submit();
}
        }
	}
}
