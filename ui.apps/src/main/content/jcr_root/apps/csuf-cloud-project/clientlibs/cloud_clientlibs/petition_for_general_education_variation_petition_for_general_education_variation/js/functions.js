/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    cwid.enabled = false;
    Name.enabled = false;
    Email.enabled = false;
    Date_1.enabled = false;
    Address.enabled = false;
    Phone.enabled = false;
    City.enabled = false;
    State.enabled = false;
    ZipCode.enabled = false;
    Major.enabled = false;

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
                                    cwid.value = myresponse[0].EMPLID;
                                    //Email.value = myresponse[0].PREF_EMAIL;
                                    Email.value = "yjayaram@fullerton.edu";
                                    if (myresponse[0].CELL_PHONE === undefined || myresponse[0].CELL_PHONE === null) {
                                        Phone.value = myresponse[0].HOME_PHONE;
                                    } else {
                                        Phone.value = myresponse[0].CELL_PHONE;
                                    }

                                    Address.value = myresponse[0].ADDRESS1;
                                    City.value = myresponse[0].CITY;
                                    State.value = myresponse[0].STATE;
                                    ZipCode.value = myresponse[0].POSTAL;
                                    Major.value = myresponse[0].PROGRAMS;
                                    AcadCareer.value = myresponse[0].ACAD_CAREER;
                                    AcadPlanType.value = myresponse[0].ACAD_PLAN_TYPE;
                                    
                                    deptId.value = myresponse[0].DEPTID;
                                    college.value = myresponse[0].FUL_COLLEGE;


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
                                                cwid.value = myresponse[n].EMPLID;
                                                //EmailAddress.value = myresponse[n].PREF_EMAIL;                                            
                                                Email.value = "yjayaram@fullerton.edu";
                                                if (myresponse[n].CELL_PHONE === undefined || myresponse[n].CELL_PHONE === null) {
                                                    Phone.value = myresponse[n].HOME_PHONE;
                                                } else {
                                                    Phone.value = myresponse[n].CELL_PHONE;
                                                }
                                                Address.value = myresponse[n].ADDRESS1;
                                                City.value = myresponse[n].CITY;
                                                State.value = myresponse[n].STATE;
                                                ZipCode.value = myresponse[n].POSTAL;
                                                Major.value = myresponse[n].PROGRAMS;
                                                AcadCareer.value = myresponse[n].ACAD_CAREER;
                                                AcadPlanType.value = myresponse[n].ACAD_PLAN_TYPE;
                                          
                                                deptId.value = myresponse[n].DEPTID;
                                                college.value = myresponse[n].FUL_COLLEGE;

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
                                    showErrorModal("Alert!", "Please select appropriate Department ID");
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=true;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=true;
  Student_Panel.visible=true;
  Student_Panel.enabled=true;
  GradStudiesSignaturePanel.visible=false;
  AcademicAdvisingSignaturePanel.visible=false;
  AssociateDeanPanel.visible=false;
  PetitionSignaturePanel.visible=false;
  TDASignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToGrad"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=true;
  AcademicAdvisingSignaturePanel.visible=false;
  AssociateDeanPanel.visible=false;
  PetitionSignaturePanel.visible=false;
  TDASignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToAdvisor"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  AcademicAdvisingSignaturePanel.visible=true;
  AcademicAdvisingSignaturePanel.enabled=true;
  AssociateDeanPanel.visible=false;
  PetitionSignaturePanel.visible=false;
  TDASignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToDean"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  AcademicAdvisingSignaturePanel.visible=true;
  AcademicAdvisingSignaturePanel.enabled=false;
  AssociateDeanPanel.visible=true;
  AssociateDeanPanel.enabled=true;
  PetitionSignaturePanel.visible=false;
  TDASignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToPetition"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  AcademicAdvisingSignaturePanel.visible=true;
  AcademicAdvisingSignaturePanel.enabled=false;
  AssociateDeanPanel.visible=true;
  AssociateDeanPanel.enabled=false;
  PetitionSignaturePanel.visible=true;
  PetitionSignaturePanel.enabled=true;
  TDASignaturePanel.visible=false;
  RecordsPanel.visible=false;
}

if(StageIndicator.value == "ToTDA"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  
  if(PetitionCB==="1"){
  AcademicAdvisingSignaturePanel.visible=true;
  AcademicAdvisingSignaturePanel.enabled=false;
  AssociateDeanPanel.visible=true;
  AssociateDeanPanel.enabled=false;
  PetitionSignaturePanel.visible=true;
  PetitionSignaturePanel.enabled=false;
  } else {
  AcademicAdvisingSignaturePanel.visible=false;
  AssociateDeanPanel.visible=false;
  PetitionSignaturePanel.visible=false;
  }
  
  TDASignaturePanel.visible=true;
  TDASignaturePanel.enabled=true;
  RecordsPanel.visible=false;
}


if(StageIndicator.value == "ToRecord"){
  StudentInformationPanel.visible=true;
  StudentInformationPanel.enabled=false;
  PetitionStatementPanel.visible=true;
  PetitionStatementPanel.enabled=false;
  Student_Panel.visible=true;
  Student_Panel.enabled=false;
  GradStudiesSignaturePanel.visible=true;
  GradStudiesSignaturePanel.enabled=false;
  
  if(PetitionCB==="1"){
  AcademicAdvisingSignaturePanel.visible=true;
  AcademicAdvisingSignaturePanel.enabled=false;
  AssociateDeanPanel.visible=true;
  AssociateDeanPanel.enabled=false;
  PetitionSignaturePanel.visible=true;
  PetitionSignaturePanel.enabled=false;
  } else {
  AcademicAdvisingSignaturePanel.visible=false;
  AssociateDeanPanel.visible=false;
  PetitionSignaturePanel.visible=false;
  }
  
  if(TDACB==="1"){
  TDASignaturePanel.visible=true;
  TDASignaturePanel.enabled=false;
  } else {
    TDASignaturePanel.visible=false;
  }
   
  RecordsPanel.visible=true;
  RecordsPanel.enabled=true;
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_caseId_init0 = function (scope) {
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_Date_1_init0 = function (scope) {
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
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  Date_1.value = d;
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_NotKnownCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_NotKnownCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value!==null) {
    GraduationDate.value="";
    GraduationDate.enabled=false;
} else{
  GraduationDate.enabled=true;
}

        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_supportDoc1_valueCommit0 = function (scope) {
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
  if(this.value !== null){
    supDocAttachText.visible = false;
  } 
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_supportDoc2_valueCommit0 = function (scope) {
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
  if(this.value !== null){
    supDocAttachText.visible = false;
  } 
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_supportDoc3_valueCommit0 = function (scope) {
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
  if(this.value !== null){
    supDocAttachText.visible = false;
  } 
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_StudentCB_valueCommit0 = function (scope) {
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_StudentSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_StudentSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitCB_valueCommit0 = function (scope) {
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitSupervisor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitSupervisor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitSupervisorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitSupervisorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitSupervisorDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_GradUnitSupervisorDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "2"){
  AcademicAdvisorPanel.visible=true;
} else {
  AcademicAdvisorPanel.visible=false;
  textbox1667452154106.value="";
  AcademicAdvisorDropDown.value="";
  AcademicAdvisorName.value="";
  AcademicAdvisorUserId.value="";
  AcademicAdvisorEmailId.value="";
}

        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_textbox1667452154106_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_textbox1667452154106_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToGrad") {
    var appResult = [];
    if (this.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getFAERData",
            data: {
                action: "FAER_SEARCH_APPROVER",
                lastName: this.value
            },
            dataType: 'json',
            success: function(fundApproverResult) {
                if (fundApproverResult.length !== 0) {
                    //appResult.push("Select Optional Reviewer");
                    for (var i = 0; i < fundApproverResult.length; i++) {
                        var item = fundApproverResult[i].FIRSTNAME + " " + fundApproverResult[i].LASTNAME;
                        var uid = fundApproverResult[i].EMAILID;
                        var idItem = i + 1;
                        appResult.push(item + " - " + uid);
                    }
                    AcademicAdvisorDropDown.value = "";
                    AcademicAdvisorDropDown.items = appResult;
                    AcademicAdvisorName.value = "";
                    AcademicAdvisorUserId.value = "";
                    AcademicAdvisorEmailId.value = "";
                } else {
                    showErrorModal("Alert!", "No matching records found");
                    AcademicAdvisorDropDown.items = [];
                    AcademicAdvisorDropDown.value = "";
                    AcademicAdvisorName.value = "";
                    AcademicAdvisorUserId.value = "";
                    AcademicAdvisorEmailId.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorDropDown_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorDropDown_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToGrad") {
    var approverName = this.value;
    var approverEmplId;
    if (approverName != "Select Optional Reviewer" && approverName !== "") {
        approverName = approverName.substr(0, approverName.indexOf(' - '));
        AcademicAdvisorName.value = approverName;
        $.ajax({
            type: 'GET',
            url: "/bin/getFAERData",
            data: {
                action: "FAER_APPROVER_EMPID",
                approverName: approverName
            },
            dataType: 'json',
            success: function(myresopnse) {
                if (myresopnse[0].EMPLID !== null) {
                    approverEmplId = myresopnse[0].EMPLID;
                    getEmployeeDetails(approverEmplId);
                } else {
                    AcademicAdvisorName.value = "";
                    AcademicAdvisorUserId.value = "";
                    AcademicAdvisorEmailId.value = "";
                }
            }
        });
    } else {
        AcademicAdvisorName.value = "";
        AcademicAdvisorUserId.value = "";
        AcademicAdvisorEmailId.value = "";
    }
}

function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === "ToGrad") {
        if (approverEmplId !== null) {
            $.ajax({
                type: 'GET',
                url: "/bin/getFAERData",
                data: {
                    action: "FAER_APPROVER_DETAILS",
                    approverEmplID: approverEmplId
                },
                dataType: 'json',
                success: function(myresopnse) {
                    if (myresopnse.length !== 0) {
                        AcademicAdvisorUserId.value = myresopnse[0].EMP_USERID;
                       // AcademicAdvisorEmailId.value = myresopnse[0].EMAILID;
                        AcademicAdvisorEmailId.value = "yjayaram@fullerton.edu";    
                    } else {
                        AcademicAdvisorName.value = "";
                        AcademicAdvisorUserId.value = "";
                        AcademicAdvisorEmailId.value = "";
                    }
                }
            });
        }
    }
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToAdvisor") {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',

            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;

                AcademicAdvisorSign.value = userValue;
                AcademicAdvisorSignDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        AcademicAdvisorSign.enabled = false;
        AcademicAdvisorSignDate.enabled = false;

    } else {
        AcademicAdvisorSign.value = "";
        AcademicAdvisorSignDate.value = null;
    }
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_AcademicAdvisorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToDean") {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',

            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;

                DeanSign.value = userValue;
                DeanSignDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        DeanSign.enabled = false;
        DeanSignDate.enabled = false;

    } else {
        DeanSign.value = "";
        DeanSignDate.value = null;
    }
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_DeanSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_DeanSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_DeanSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_DeanSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_PetitionCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_PetitionCB_valueCommit0 = function (scope) {
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_PetitionCoordinatorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_PetitionCoordinatorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_PetitionCoordinatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_PetitionCoordinatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_TDACB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_TDACB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToTDA") {
    if (this.value == 1) {
        var userValue;
        $.ajax({
            type: 'GET',

            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                var userValue = myresopnse.userName;
                TDASign.value = userValue;
                TDASignDate.value = myresopnse.SERVER_DATE;

            },
            error: function(error) {
                alert("error block=" + error);
            }
        });

        TDASign.enabled = false;
        TDASignDate.enabled = false;

    } else {
        TDASign.value = "";
        TDASignDate.value = null;
    }
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_TDASign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_TDASign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_TDASignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_TDASignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_RecordsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_RecordsCB_valueCommit0 = function (scope) {
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
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_RecordsSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_RecordsSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_RecordsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_RecordsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_college_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_college_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/PetitionFormsServlet",
        data: {
            college: this.value,
            deptID: deptId.value,
            action: "MAJOR_DEAN_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
            DeanUserID.value = myresponse[0].DEAN_USERID;
            DeanName.value = myresponse[0].DEAN_NAME;
            //DeanEmail.value = myresponse[0].DEAN_EMAIL;
            DeanEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
            DeanEmplID.value = myresponse[0].DEAN_EMPLID;
        }
    });
}
        }
	}
}
/**
 * @function petition_for_general_education_variation_petition_for_general_education_variation.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
petition_for_general_education_variation_petition_for_general_education_variation.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    aftiaDescCWID.value = Name.value + " " + cwid.value;
    EmailSubject.value = "Petition for General Education Variation - (" + cwid.value + ")";
    
    Email.value= "yjayaram@fullerton.edu";
    AcademicAdvisorEmailId.value= "yjayaram@fullerton.edu";
    DeanEmail.value="yjayaram@fullerton.edu";
  
}
guideBridge.submit();

        }
	}
}
