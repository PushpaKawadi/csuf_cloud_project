/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
//var gifModal = document.getElementById('gifModal');
debugger;
if (StageIndicator.value === null) {
    getStudentDetails();
}

function getStudentDetails() {

    if (StageIndicator.value === null) {
      /*  var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";*/

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(response) {
                //var userValue = response.userId;
                //var userValue = 'yeatsliu';
                var userValue = 'veronica.maciel';
              //var userValue = 'n_moody';
                

                workflow_initiator.value = userValue;
  
                $.ajax({
                type: 'GET',
                url: "/bin/classroomLabEquipmentProposalServlet",

                data: {
                    STUDENT_USERID: userValue,        
                    action: "CSF_DEPARTMENT_DATA"
                },

                    dataType: 'json',
                    success: function(response) {
                       // gifModal.style.display = "none";                       
                        if (response.length === 1) {
                          debugger;
                            CWID.value = response[0].EMPLID;
                        	CWID.enabled = false;
							
                        	FirstName.value = response[0].FIRST_NAME;
                        	LastName.value = response[0].LAST_NAME;
                        	Phone.value = response[0].CELL_PHONE;
                        	Email.value = "soumya.ravindra@thoughtfocus.com";
                        	Student_UserId.value = userValue;
                            FUL_COLLEGE.value = response[0].FUL_COLLEGE;
                            DEPTID.value = response[0].DEPTID;
                        	FullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                        	FullName.enabled = false;
                        	LastName.enabled = false;
                        	Phone.enabled = false;
                        	Email.enabled = false;
                            SpaceDD.value = "test";
                            TypeOfEquip.value = "test";
                          CostOfEquip.value = "test";
                          ClassDD.value = "test";
                           

                        } else if (response.length > 1) {

                            var modal = document.getElementById('myModal');

                           /* gifModal.style.display = "none";
                            modal.style.display = "block";*/

                            var col = [];

                            col.push("FIRST_NAME");
                            col.push("LAST_NAME");
                            col.push("DEPTID");
                            col.push("FUL_COLLEGE");
                          col.push("EMPLID");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "FIRST_NAME", "LAST_NAME", "DEPTID", "FUL_COLLEGE","EMPLID" ];
                            for (var j = 0; j < headings.length; j++) {
                                var th = document.createElement("th");
                                th.innerHTML = headings[j];
                                tr.appendChild(th);
                            }
                            for (var k = 0; k < response.length; k++) {
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
                                    tabCell.innerHTML = response[k][col[l]];
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
                            okButton.value = "Ok";
                            okButton.onclick = function(event) {

                                var n;
                                var rButtonStatus;
                                var rButtons = document.getElementsByClassName("rb");
                                for (n = 0; n < rButtons.length; n++) {
                                    if (rButtons[n].checked === false) {
                                        rButtonStatus = false;
                                    } else {
                                     		CWID.value = response[n].EMPLID;
                                            FirstName.value = response[n].FIRST_NAME;
                        	                LastName.value = response[n].LAST_NAME;
                        	                Phone.value = response[n].CELL_PHONE;
                        	                Email.value = "soumya.ravindra@thoughtfocus.com";
                        	                Student_UserId.value = userValue;
                        	                FullName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                                       		FUL_COLLEGE.value = response[n].FUL_COLLEGE;
                                            DEPTID.value = response[n].DEPTID;
                                       /* else {
                                            showErrorModal("Alert !", "No matching records found");
                                        }  */

                                        rButtonStatus = true;
                                        modal.style.display = "none";
                                        break;

                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the program");
                                    modal.style.display = "block";
                                }
                            };
                            //var footerModal = document.getElementById("modal_footer");

                            footerModal.appendChild(okButton);

                        } else {
                            showErrorModal("Alert !", "No matching records found");
                        }
                    }
                });
            },
            error: function() {
                showErrorModal("Alert !", "No matching records found");
            }
        });
    }
}








        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  StudentSignaturePanel.visible = true;
  ProductionSignaturePanel.visible = false;
  ChairSignaturePanel.visible = false;
}
if(StageIndicator.value == "ToProductionOffice"){
  StudentSignaturePanel.visible = true;
  StudentSignaturePanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  ChairSignaturePanel.visible = false;
  ApplicantInformation.enabled = false;
  EquipmentInformationPanel.enabled = false;
}
if(StageIndicator.value == "ToChair"){
  StudentSignaturePanel.visible = true;
  StudentSignaturePanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  ProductionSignaturePanel.enabled = false;
  ChairSignaturePanel.visible = true;
  ApplicantInformation.enabled = false;
  EquipmentInformationPanel.enabled = false;
}

        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
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
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_FullName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_FullName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_Phone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_Phone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_Date1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_Date1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
if(StageIndicator.value === null){
	  
      var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
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
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_Email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_Email_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                StudentSignature.value = FullName.value;
                StudentSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        StudentSignature.enabled = false;
        StudentSignDate.enabled = false;
    } else {
        StudentSignature.value = "";
        StudentSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_StudentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_StudentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ProductionCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ProductionCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToProductionOffice") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                Budget.value = userValue;
                ProductionDate.value = myresponse.SERVER_DATE;
                
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        Budget.enabled = false;
        ProductionDate.enabled = false;
    } else {
        Budget.value = "";
        ProductionDate.value = "";
       // financialAidAssignee.value = "";
    }
}
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ProductionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ProductionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === "ToChair") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                ChairSign.value = myresponse.userName;
                ChairSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ChairSign.enabled = false;
        ChairSignDate.enabled = false;
    } else {
        ChairSign.value = "";
        ChairSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ChairSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_ChairSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_DEPTID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_DEPTID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/classroomLabEquipmentProposalServlet",
        data: {
            FUL_COLLEGE: FUL_COLLEGE.value,
            DEPT_ID: this.value,
            action: "CSF_DEPARTMENT_CHAIR_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
           // FUL_COLLEGE.value = myresponse[0].FUL_COLLEGE;
            Hiddenpanel.CHAIR_USERID.value = myresponse[0].CHAIR_USERID;
            CHAIR_EMAIL.value = "soumya.ravindra@thoughtfocus.com";
            CHAIR_NAME.value = myresponse[0].CHAIR_NAME;
            CHAIR_EMPLID.value = myresponse[0].CHAIR_EMPLID;
            Hiddenpanel.CHAIR_USERID.value = myresponse[0].CHAIR_USERID;
        }
    });
}
        }
	}
}
/**
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*if (AidYear.value !== null) {
    getPdf();
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }*/

getPdf();

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/cal-state-fullerton-department-of-theatre-and-dance/cal-state-fullerton-department-of-theatre-and-dance');
            jsonData.append('fileName', FullName.value );          
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
 * @function cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cal_state_fullerton_department_of_theatre_and_dance_cal_state_fullerton_department_of_theatre_and_dance.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    aftiaDescCWID.value = FullName.value + " " + CWID.value;
    EmailSubject.value = "Test - Classroom lab equipment proposal - " + CWID.value;
  
}
Email.value = "soumya.ravindra@thoughtfocus.com";
CHAIR_EMAIL.value = "soumya.ravindra@thoughtfocus.com";
    guideBridge.submit();
        }
	}
}
