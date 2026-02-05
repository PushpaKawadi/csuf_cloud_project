/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
    StudentID.enabled = false;
    Name.enabled = false;
    StudentEmail.enabled = false;
    Date_1.enabled = false;
    Address.enabled = false;
    Telephone.enabled = false;
    City.enabled = false;
    State.enabled = false;
    ZipCode.enabled = false;
    UGDegree.enabled = false;
    UGMajor.enabled = false;
    AcadCareer.enabled = false;
    StudentID_Miscellaneous.enabled = false;
    Name_Miscellaneous.enabled = false;

    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',
            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresponse) {

                // gifModal.style.display = "block";
                var userId = myresponse.userId;
                //var userId = "veronica.maciel"; 
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
                                firstName.value = myresponse[0].FIRST_NAME;
                                lastName.value = myresponse[0].LAST_NAME;
                                Name.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                                StudentID.value = myresponse[0].EMPLID;
                                cwid.value = myresponse[0].EMPLID;
                                //Email.value = myresponse[0].PREF_EMAIL;
                                StudentEmail.value = "yjayaram@fullerton.edu";
                                if (myresponse[0].CELL_PHONE === undefined || myresponse[0].CELL_PHONE === null) {
                                    Telephone.value = myresponse[0].HOME_PHONE;
                                } else {
                                    Telephone.value = myresponse[0].CELL_PHONE;
                                }
                                Address.value = myresponse[0].ADDRESS1;
                                City.value = myresponse[0].CITY;
                                State.value = myresponse[0].STATE;
                                ZipCode.value = myresponse[0].POSTAL;
                                UGDegree.value = myresponse[0].DEGREE;
                                UGMajor.value = myresponse[0].CONCENTRATION;
                                AcadCareer.value = myresponse[0].ACAD_CAREER;
                              
                                StudentID_Miscellaneous.value = myresponse[0].EMPLID;
                                Name_Miscellaneous.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
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
                                            firstName.value = myresponse[n].FIRST_NAME;
                                            lastName.value = myresponse[n].LAST_NAME;
                                            Name.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;
                                            StudentID.value = myresponse[n].EMPLID;
                                            cwid.value = myresponse[n].EMPLID;
                                            //EmailAddress.value = myresponse[n].PREF_EMAIL;                                            
                                            StudentEmail.value = "yjayaram@fullerton.edu";
                                            if (myresponse[n].CELL_PHONE === undefined || myresponse[n].CELL_PHONE === null) {
                                                Telephone.value = myresponse[n].HOME_PHONE;
                                            } else {
                                                Telephone.value = myresponse[n].CELL_PHONE;
                                            }
                                            Address.value = myresponse[n].ADDRESS1;
                                            City.value = myresponse[n].CITY;
                                            State.value = myresponse[n].STATE;
                                            ZipCode.value = myresponse[n].POSTAL;
                                            UGDegree.value = myresponse[n].DEGREE;
                                            UGMajor.value = myresponse[n].CONCENTRATION;
                                            AcadCareer.value = myresponse[n].ACAD_CAREER;

                                            StudentID_Miscellaneous.value = myresponse[n].EMPLID;
                                            Name_Miscellaneous.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;

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
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enable=true;
  PetitionTab.visible=true;
  PetitionTab.enabled=true;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=true;
  Student_Panel.visible=true;
  Student_Panel.enabled=true;
  GradStudiesSignaturePanel.visible=false;
  PetitionSignaturePanel.visible=false;
  RecordsPanel.visible=false;  
  headerItem16692811146921669281115344.visible=false; 
  headerItem16692811177311669281118438.visible=false; 
  headerItem16692811148721669281115438.visible=false; 
  tableItem16692817382471669281738994.visible=false; 
  Verification.visible=false; 
}

if(StageIndicator.value == "ToGrad"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionTab.visible=true;
  PetitionTab.enabled=true;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=true;
  PetitionSignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToPetition"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionTab.visible=true;
  PetitionTab.enabled=false;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  PetitionSignaturePanel.visible=true;
  PetitionSignaturePanel.enabled=true;
  RecordsPanel.visible=false;
}


if(StageIndicator.value == "ToRecord"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionTab.visible=true;
  PetitionTab.enabled=false;
  PolicyPanel.visible=true;
  PolicyPanel.enabled=false;
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
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_caseId_init0 = function (scope) {
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
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_Date_1_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
    }).replace(/[^ -~]/g, '');
    var dateObject = new Date(dateString);
    var curyear = dateObject.getFullYear();
    var curyearMonth = dateObject.getMonth() + 1;
    var curyearDay = dateObject.getDate();
    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    Date_1.value = d;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_textdraw_10947571531669204945410_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_textdraw_10947571531669204945410_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = true;
} else {
    this.visible = false;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_headerItem16692811148721669281115438_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_headerItem16692811148721669281115438_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.visible = false;
} else {
    this.visible = true;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_DeptCourseNo_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_DeptCourseNo_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
} else {
    this.enabled = false;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_Semester_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_Semester_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
} else {
    this.enabled = false;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_CourseUnitValue_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_CourseUnitValue_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
} else {
    this.enabled = false;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_Verification_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_Verification_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value=="ToGrad"){
  this.enabled=true;
} else{
  this.enabled=false;
}

        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RemoveButton_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RemoveButton_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
} else {
    this.enabled = false;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RemoveButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RemoveButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var rowCount = Row1.instanceManager.instanceCount;

if (rowCount == 1) {
    Row1.instanceManager.instances[0]._children[0].value = null;
    Row1.instanceManager.instances[0]._children[1].value = null;
    Row1.instanceManager.instances[0]._children[2].value = null;
}

Row1.instanceManager.removeInstance(Row1.instanceIndex);
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_MajorReqTDAAddButton_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_MajorReqTDAAddButton_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = true;
} else {
    this.enabled = false;
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_MajorReqTDAAddButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_MajorReqTDAAddButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            
var isAddRowAllowed = false;
if (Row1.instanceManager.instanceCount >= 1 && Row1.instanceManager.instanceCount <= 10) {
    for (var count = 0; count < Row1.instanceManager.instanceCount; count++) {
        if ((Row1.instanceManager.instances[count]._children[0].value === null) || (Row1.instanceManager.instances[count]._children[1].value === null) || (Row1.instanceManager.instances[count]._children[2].value === null)) {
            isAddRowAllowed = false;
            showErrorModal("Alert !", "Please Enter the record before adding a new row");
        } else {
            isAddRowAllowed = true;
        }
    }

    if (isAddRowAllowed == true) {
        if (Row1.instanceManager.instanceCount < 10) {
            Row1.instanceManager.addInstance();
        } else {
            showErrorModal("Alert !", "More than 10 rows cannot be added");
        }
    }
}

if (StageIndicator.value === null) {
    var count = Row1.instanceManager.instanceCount;
    if (isAddRowAllowed == true) {
        for (var t = 0; t < count; t++) {
            Row1.instanceManager.instances[t].Verification.visible = false;
        }
    }
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_StudentCB_valueCommit0 = function (scope) {
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
                StudentSign.value = Name.value;
                StudentSignDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        StudentSign.enabled = false;
        StudentSignDate.enabled = false;


    } else {
        StudentSign.value = "";
        StudentSignDate.value = null;
    }
}
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_StudentSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_StudentSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_InstructorDropCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_InstructorDropCB_valueCommit0 = function (scope) {
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
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_GradUnitSupervisor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_GradUnitSupervisor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_GradUnitSupervisorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_GradUnitSupervisorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_InstructorAddCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_InstructorAddCB_valueCommit0 = function (scope) {
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
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_PetitionCoordinatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_PetitionCoordinatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_PetitionCoordinatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_PetitionCoordinatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_ARSC_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_ARSC_CB_valueCommit0 = function (scope) {
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
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RecordsSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RecordsSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RecordsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_RecordsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_postgraduate_credit_petition_for_postgraduate_credit.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    aftiaDescCWID.value = firstName.value + " " + lastName.value + " " + StudentID.value;
    EmailSubject.value = "Test-Petition for Postgraduate Credit (" + StudentID.value + ")";
    StudentEmail.value="anupama.dhar@thoughtfocus.com";
}
guideBridge.submit();

        }
	}
}
