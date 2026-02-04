/**
 * @function dq_appeal_form_dq_appeal_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
if (StageIndicator.value === null) {
    cwid.enabled = false;
    firstName.enabled = false;
    lastName.enabled = false;
    major.enabled = false;

    if (StageIndicator.value === null) {
        $.ajax({

            type: 'GET',
            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresponse) {

                // gifModal.style.display = "block";
               //var userId = myresponse.userId;
               var userId = "veronica.maciel"; 
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
                                    StudentName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                                    cwid.value = myresponse[0].EMPLID;
                                    //email.value = myresponse[0].PREF_EMAIL;
                                    email.value = "yjayaram@fullerton.edu";
                                    major.value = myresponse[0].PROGRAMS;
                                    
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
                                                StudentName.value = myresponse[n].FIRST_NAME + " " + myresponse[n].LAST_NAME;
                                                cwid.value = myresponse[n].EMPLID;
                                                //email.value = myresponse[n].PREF_EMAIL;                                            
                                                email.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
                                                major.value = myresponse[n].PROGRAMS;
                                          
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
 * @function dq_appeal_form_dq_appeal_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    PetitionAnalystSignaturePanel.visible = false;
    DeanSignaturePanel.visible = false;
    RecordSignaturePanel.visible = false;
}

if (StageIndicator.value == "ToPetitionAnalyst") {
    StudentInformation.enabled = false;
    appealInfo.enabled = false;
    StudentSignaturePanel.enabled = false;
    PetitionAnalystSignaturePanel.visible = true;
    PetitionAnalystSignaturePanel.enabled = true;
    DeanSignaturePanel.visible = false;
    RecordSignaturePanel.visible = false;
}

if (StageIndicator.value == "ToDean") {
    StudentInformation.enabled = false;
    appealInfo.enabled = false;
    StudentSignaturePanel.enabled = false;
    PetitionAnalystSignaturePanel.visible = true;
    PetitionAnalystSignaturePanel.enabled = false;
    DeanSignaturePanel.visible = true;
    DeanSignaturePanel.enabled = true;
    RecordSignaturePanel.visible = false;
}

if (StageIndicator.value == "ToRecords") {
    StudentInformation.enabled = false;
    appealInfo.enabled = false;
    StudentSignaturePanel.enabled = false;
    PetitionAnalystSignaturePanel.visible = true;
    PetitionAnalystSignaturePanel.enabled = false;
    DeanSignaturePanel.visible = true;
    DeanSignaturePanel.enabled = false;
    RecordSignaturePanel.visible = true;
    RecordSignaturePanel.enabled = true;
}
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
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
 * @function dq_appeal_form_dq_appeal_form.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_SupportingDocuments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_SupportingDocuments_init0 = function (scope) {
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
 * @function dq_appeal_form_dq_appeal_form.generated_supportDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_supportDoc1_valueCommit0 = function (scope) {
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
 * @function dq_appeal_form_dq_appeal_form.generated_supportDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_supportDoc2_valueCommit0 = function (scope) {
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
 * @function dq_appeal_form_dq_appeal_form.generated_supportDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_supportDoc3_valueCommit0 = function (scope) {
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
 * @function dq_appeal_form_dq_appeal_form.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_StudentCB_valueCommit0 = function (scope) {
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
                StudentSign.value = StudentName.value;
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
 * @function dq_appeal_form_dq_appeal_form.generated_StudentSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_StudentSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_petitionAnalystCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_petitionAnalystCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPetitionAnalyst" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				petitionAnalystSignature.value = userValue;
				petitionAnalystSignDate.value = myresponse.SERVER_DATE;	
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			petitionAnalystSignature.enabled = false;       
			petitionAnalystSignDate.enabled = false; 
				
	} else {
	     petitionAnalystSignature.value = "";
		 petitionAnalystSignDate.value = "";
	}
}


        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_petitionAnalystSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_petitionAnalystSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_petitionAnalystSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_petitionAnalystSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_petitionDecision_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_petitionDecision_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == "1"){
  DeanDropDown.mandatory=true;
}else {
  DeanDropDown.mandatory=false;
}

        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_textbox1667452154106_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_textbox1667452154106_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToPetitionAnalyst") {
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
                    DeanDropDown.value = "";
                    DeanDropDown.items = appResult;
                    DeanName.value = "";
                    DeanUserID.value = "";
                    DeanEmailID.value = "";
                } else {
                    showErrorModal("Alert!", "No matching records found");
                    DeanDropDown.items = [];
                    DeanDropDown.value = "";
                    DeanName.value = "";
                    DeanUserID.value = "";
                    DeanEmailID.value = "";
                }
            }
        });
    }
}
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_DeanDropDown_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_DeanDropDown_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === "ToPetitionAnalyst") {
    var approverName = this.value;
    var approverEmplId;
    if (approverName != "Select Associate Dean" && approverName !== "") {
        approverName = approverName.substr(0, approverName.indexOf(' - '));
        DeanName.value = approverName;
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
                    DeanName.value = "";
                    DeanUserID.value = "";
                    DeanEmailID.value = "";
                }
            }
        });
    } else {
        DeanName.value = "";
        DeanUserID.value = "";
        DeanEmailID.value = "";
    }
}

function getEmployeeDetails(approverEmplId) {
    if (StageIndicator.value === "ToPetitionAnalyst") {
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
                        DeanUserID.value = myresopnse[0].EMP_USERID;
                       // DeanEmailID.value = myresopnse[0].EMAILID;
                        DeanEmailID.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";    
                    } else {
                        DeanName.value = "";
                        DeanUserID.value = "";
                        DeanEmailID.value = "";
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
 * @function dq_appeal_form_dq_appeal_form.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDean" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				DeanSignature.value = userValue;
				DeanSignDate.value = myresponse.SERVER_DATE;	
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			DeanSignature.enabled = false;       
			DeanSignDate.enabled = false; 
				
	} else {
	     DeanSignature.value = "";
		 DeanSignDate.value = "";
	}
}


        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_DeanSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_DeanSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_DeanSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_DeanSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_RecordsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_RecordsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				RecordsSignature.value = userValue;
				RecordsSignDate.value = myresponse.SERVER_DATE;
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			RecordsSignature.enabled = false;       
			RecordsSignDate.enabled = false; 
				
	} else {
	     RecordsSignature.value = "";
		 RecordsSignDate.value = "";
	}
}


        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_RecordsSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_RecordsSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_RecordsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_RecordsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function dq_appeal_form_dq_appeal_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
getPdf();

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/dq-appeal-form/dq-appeal-form');
            jsonData.append('fileName', StudentName.value);          
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
 * @function dq_appeal_form_dq_appeal_form.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
dq_appeal_form_dq_appeal_form.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = StudentName.value+" "+cwid.value;
  EmailSubject.value = "Test - DQ Appeal Form - "+cwid.value;
  email.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
} 
guideBridge.submit();






        }
	}
}
