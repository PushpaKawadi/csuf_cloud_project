/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    CWID.enabled = false;
    firstName.enabled = false;
    lastName.enabled = false;
    StudentEmail.enabled = false;
    Phone.enabled = false;
    Degree.enabled = false;

    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',
            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresponse) {

                // gifModal.style.display = "block";
                var userId = myresponse.userId;
                //var userId = "n_moody"; 
                //var userId = "michelle.kao";  		// UnderGraduate Spring 2020, COVID-19, Petition B
                //var userId = "gvasquez11";  	// Graduate
                //var userId = "cheygarcia"; 		// UnderGraduate Spring 2019, Non-COVID-19 
                //var userId = 'anthonyvaldovinos17'; //Graduate Summer 2020, Non-COVID-19
                //var userId = 'j23torres'; // EIP='Y' Petition A
                // var userId = 'stucker.ericd'; //EIP='Y' Graduate
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
                    url: "/bin/PetitionFormsServlet",
                    data: {
                        action: "STUDENT_DATA",
                        userID: userId

                    },
                    dataType: 'json',

                    success: function(myresponse) {

                        var modal1 = document.getElementById('myModal1');
                        var span = document.getElementsByClassName("close1")[0];
                        var gifModal = document.getElementById('gifModal');

                        if (myresponse.length == 1) {
                            if (myresponse[0].ACAD_CAREER != "EXED") {
                                    CWID.value = myresponse[0].EMPLID;
                                    firstName.value = myresponse[0].FIRST_NAME;
                                    lastName.value = myresponse[0].LAST_NAME; 
                                    StudentName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                                    //StudentEmail.value = myresponse[0].PREF_EMAIL;
                                    StudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                                    if (myresponse[0].CELL_PHONE === undefined || myresponse[0].CELL_PHONE === null) {
                                        Phone.value = myresponse[0].HOME_PHONE;
                                    } else {
                                        Phone.value = myresponse[0].CELL_PHONE;
                                    }

                                    Degree.value = myresponse[0].DEGREE;
                                    AcadCareer.value = myresponse[0].ACAD_CAREER;


                            } else {
                                //gifModal.style.display = "none";
                                showErrorModal("Alert!", "No matching records found");
                            }

                        } else if (myresponse.length > 1) {
                            gifModal.style.display = "none";
                            modal1.style.display = "block";

                            var col = [];
                            col.push("EMPLID");
                            col.push("FIRST_NAME");
                            col.push("LAST_NAME");
                            col.push("FUL_COLLEGE");
                            col.push("DEPTID");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "CWID", "First_Name", "Last_Name", "Ful_College", "Dept_ID"];
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
                                                CWID.value = myresponse[n].EMPLID;
                                                firstName.value = myresponse[n].FIRST_NAME;
                                                lastName.value = myresponse[n].LAST_NAME; 
                                                StudentName.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;                                                
                                                //StudentEmail.value = myresponse[n].PREF_EMAIL;                                            
                                                StudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                                                if (myresponse[n].CELL_PHONE === undefined || myresponse[n].CELL_PHONE === null) {
                                                    Phone.value = myresponse[n].HOME_PHONE;
                                                } else {
                                                    Phone.value = myresponse[n].CELL_PHONE;
                                                }
                                                Degree.value = myresponse[n].DEGREE;
                                                AcadCareer.value = myresponse[n].ACAD_CAREER;

                                            rButtonStatus = true;
                                            modal1.style.display = "none";
                                            break;
                                        } else {
                                            // gifModal.style.display = "none";
                                            showErrorModal("Alert!", "No matching records found");
                                        }
                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select appropriate Dept ID");
                                    //  modal1.style.display = "block";
                                }
                            };

                            footerModal.appendChild(okButton);

                        } else {
                            //  gifModal.style.display = "none";
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
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enable=true;
  InformationTab.visible=true;
  InformationTab.enabled=true;
  Student_Panel.visible=true;
  Student_Panel.enabled=true;
}

if(StageIndicator.value == "ToGrad"){
  InformationTab.visible=true;
  InformationTab.enable=false;
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionTab.visible=true;
  PetitionTab.enabled=true;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=false;
  MiscellaneousFeeAssessmentsTab.visible=true;
  MiscellaneousFeeAssessmentsTab.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=true;
  PetitionSignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToPetition"){
  InformationTab.visible=true;
  InformationTab.enable=false;
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enable=false;
  PetitionTab.visible=true;
  PetitionTab.enabled=false;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=false;
  MiscellaneousFeeAssessmentsTab.visible=true;
  MiscellaneousFeeAssessmentsTab.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  PetitionSignaturePanel.visible=true;
  PetitionSignaturePanel.enabled=true;
  RecordsPanel.visible=false;
}


if(StageIndicator.value == "ToRecord"){
  InformationTab.visible=true;
  InformationTab.enable=false;
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enable=false;
  PetitionTab.visible=true;
  PetitionTab.enabled=false;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=false;
  MiscellaneousFeeAssessmentsTab.visible=true;
  MiscellaneousFeeAssessmentsTab.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  PetitionSignaturePanel.visible=true;
  PetitionSignaturePanel.enabled=false;
  RecordsPanel.visible=true;
  RecordsPanel.enabled=true;
}
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_caseId_init0 = function (scope) {
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
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_GraduationCheck_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_GraduationCheck_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value=="2"){
  NotEnorlledReason.mandatory=true;
  NotEnorlledReason.enabled=true;
} else {
  NotEnorlledReason.mandatory=false;
  NotEnorlledReason.value="";
  NotEnorlledReason.enabled=false;
}
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_NotEnorlledReason_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_NotEnorlledReason_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_StudentCB_valueCommit0 = function (scope) {
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
                StudentSignature.value = StudentName.value;
                StudentSignDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        StudentSignature.enabled = false;
        StudentSignDate.enabled = false;


    } else {
        StudentSignature.value = "";
        StudentSignDate.value = null;
    }
}
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_StudentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_StudentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_InstructorDropCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_InstructorDropCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToGrad") {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',

            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;

                GradUnitSupervisor.value = userValue;
                GradUnitSupervisorSignDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        GradUnitSupervisor.enabled = false;
        GradUnitSupervisorSignDate.enabled = false;

    } else {
        GradUnitSupervisor.value = "";
        GradUnitSupervisorSignDate.value = null;
    }
}
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_GradUnitSupervisor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_GradUnitSupervisor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_GradUnitSupervisorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_GradUnitSupervisorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_InstructorAddCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_InstructorAddCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToPetition") {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',

            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;

                PetitionCoordinatorSign.value = userValue;
                PetitionCoordinatorDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        PetitionCoordinatorSign.enabled = false;
        PetitionCoordinatorDate.enabled = false;

    } else {
        PetitionCoordinatorSign.value = "";
        PetitionCoordinatorDate.value = null;
    }
}
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_PetitionCoordinatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_PetitionCoordinatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_PetitionCoordinatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_PetitionCoordinatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_ARSC_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_ARSC_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToRecord") {
    if (this.value == 1) {
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

    } else {
        RecordsSign.value = "";
        RecordsSignDate.value = null;
    }
}
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_RecordsSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_RecordsSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_RecordsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_RecordsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function request_for_graduation_date_change_request_for_graduation_date_change.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_graduation_date_change_request_for_graduation_date_change.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    aftiaDescCWID.value = StudentName.value + " " + CWID.value;
    EmailSubject.value = "Test-Petition for Postgraduate Credit (" + CWID.value + ")";
    StudentEmail.value="thamizhvanan.sathiyamoorthy@thoughtfocus.com";
}
guideBridge.submit();

        }
	}
}
