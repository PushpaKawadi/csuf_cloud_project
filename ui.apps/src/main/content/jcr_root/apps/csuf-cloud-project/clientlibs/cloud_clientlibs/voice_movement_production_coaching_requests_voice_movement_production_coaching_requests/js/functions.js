/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  
    //var gifModal = document.getElementById('gifModal');
    //gifModal.style.display = "block";
  
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
                            FirstName.value = myresopnse[0].FIRST_NAME;
                            LastName.value = myresopnse[0].LAST_NAME;
                            //Email.value = myresopnse[0].EMAILID;
                            Email.value = "soumya.ravindra@thoughtfocus.com";
                            StaffUserId.value = myresopnse[0].EMP_USERID;
                            DeptId.value = myresopnse[0].DEPTID;
                           // DeptName.value = myresopnse[0].DEPTNAME;
                            FullName.value = FirstName.value + " " + LastName.value;
                            //EmpId.value = myresopnse[0].EMPLID;
                            CWID.value = myresopnse[0].EMPLID;

                           // gifModal.style.display = "none";
                            modal.style.display = "none";

                        } else if (myresopnse.length > 1) {
                            //gifModal.style.display = "none";
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
                                       FirstName.value = myresopnse[n].FIRST_NAME;
                            			LastName.value = myresopnse[n].LAST_NAME;
                            			//Email.value = myresopnse[n].EMAILID;
                            			Email.value = "soumya.ravindra@thoughtfocus.com";
                            			StaffUserId.value = myresopnse[n].EMP_USERID;
                            			DeptId.value = myresopnse[n].DEPTID;
                           				//DeptName.value = myresopnse[n].DEPTNAME;
                            			FullName.value = FirstName.value + " " + LastName.value;
                            			//EmpId.value = myresopnse[n].EMPLID;
                            			CWID.value = myresopnse[n].EMPLID;

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

                            //gifModal.style.display = "none";
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
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  DirectorPanel.visible = true;
  ProductionSignaturePanel.visible = false;
  
}
if(StageIndicator.value == "ToProductionOffice"){
  DirectorPanel.visible = true;
  DirectorPanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  StaffInformationPanel.enabled = false;
  DetailsPanel.enabled = false;
  VoiceMovementproductionsupportPanel.enabled = false;
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
this.enabled = false;

if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            CaseId.value = myresponse.CASEID;
        },
    });
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
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
 InitiatedDate.value = d;
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_Email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_Email_init0 = function (scope) {
    with(this) {
        with(scope) {
            	
this.enabled = false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated__click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated__click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  
  	var rowcount = OtherTDA.instanceManager.instanceCount;
	var lastRow = rowcount - 1; 
  
   if (RemoveRecordFlag.value == "1"){
      	addRowsAfterRemove(lastRow);      	
    }else{
      	addRows();
    }
}

debugger;
function addRows(){  	
  debugger;
  	if( (OtherTDA_CSUF.value !== null) && (OtherTDA_CSUFCourse.value !== null) && (OtherTDA_Request.value !== null) ){
        OtherTDA.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}

function addRowsAfterRemove(lastRow){  
  debugger;
  	if((OtherTDA.instanceManager.instances[lastRow]._children[0].value !== null) && (OtherTDA.instanceManager.instances[lastRow]._children[1].value !== null) && (OtherTDA.instanceManager.instances[lastRow]._children[2].value !== null) ){
        OtherTDA.instanceManager.addInstance();
    }
    else{
        showErrorModal("Alert !", "Enter the record before adding a new");
    }
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DialectsCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DialectsCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if(this.value == 1){
  DialectsTF.enabled = true;
  DialectsTF.mandatory = true;
  
}else{
   DialectsTF.value = "";
   DialectsTF.enabled = false;
   DialectsTF.mandatory = false;
}
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DialectsTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DialectsTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_MovementCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_MovementCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){	
if(this.value == 1){
  MovementTF.enabled = true;
  MovementTF.mandatory = true;
}else{
   MovementTF.value = "";
   MovementTF.enabled = false;
  MovementTF.mandatory = false;
}
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_MovementTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_MovementTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorSignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorSignCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
      
      
      debugger;
      if (StageIndicator.value === null) {
        
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getEvaluationFormData",
          data: {
                    action: "EMP_DETAILS"
                },
            dataType: 'json',

            success: function(myresponse) {
              debugger;
                var userValue = myresponse.userName;
                DirectorSign.value = FullName.value;
                DirectorDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        DirectorSign.enabled = false;
        DirectorDate.enabled = false;
    } else {
        DirectorSign.value = "";
        DirectorDate.value = "";
    }
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorSignCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorSignCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                DirectorSign.value = FullName.value;
                DirectorDate.value = myresponse.SERVER_DATE;
              // alert(myresponse.SERVER_DATE);
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        DirectorSign.enabled = false;
        DirectorDate.enabled = false;
    } else {
        DirectorSign.value = "";
        DirectorDate.value = "";
    }
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_DirectorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            DirectorDate.enabled = false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionSignCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionSignCB_valueCommit0 = function (scope) {
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
                ProductionSign.value = userValue;
                ProductionDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ProductionSign.enabled = false;
        ProductionDate.enabled = false;
    } else {
        ProductionSign.value = "";
        ProductionDate.value = "";
    }
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionSignCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionSignCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value == "ToProductionOffice") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                ProductionSign.value = FullName.value;
                ProductionDate.value = myresponse.SERVER_DATE;
              // alert(myresponse.SERVER_DATE);
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ProductionSign.enabled = false;
        ProductionDate.enabled = false;
    } else {
        ProductionSign.value = "";
        ProductionDate.value = "";
    }
}
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_ProductionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
/*if (AidYear.value !== null) {
    
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
            jsonData.append('formPath', '/content/forms/af/voice-movement-production-coaching-requests/voice-movement-production-coaching-requests');
            jsonData.append('fileName', "Testing");          
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
 * @function voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
voice_movement_production_coaching_requests_voice_movement_production_coaching_requests.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if ((VoiceCB.value === null) && (TextCB.value === null) && (DialectsCB.value === null) && (MovementCB.value === null) && (StageCB.value === null) && (PeriodCB.value === null) && (DevisedCB.value=== null) && (CharacterCB.value === null) && (MyShowCB.value === null))  {
  showErrorModal("Alert", "Please select atleast one checkbox");
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].VoiceMovementproductionsupportPanel[0].VoiceCB[0]");
} else{
  submitAction();
}
  
  function submitAction() {
    if(StageIndicator.value === null){
    aftiaDescCWID.value = FullName.value + " " + CWID.value;
    EmailSubject.value = "Test - Voice Movement Production Coaching Requests- " + CWID.value;
  }// ExceptionProcessType.value = "1";
    Email.value = "soumya.ravindra@thoughtfocus.com";
  //  FacultyEmail.value = "anupama.dhar@thoughtfocus.com";
  //   FacultyEmail.value = "yjayaram@fullerton.edu";

	guideBridge.submit();
  } 


/*if ((StageIndicator.value === null) && (VoiceCB.value != 1) || (TextCB.value != 1) || (DialectsCB.value != 1)|| (MovementCB.value != 1)|| (StageCB.value != 1)|| (PeriodCB.value != 1)|| (DevisedCB.value != 1)|| (CharacterCB.value != 1)|| (MyShowCB.value != 1))  {
  showErrorModal("Alert", "Please select atleast one checkbox");
   guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].VoiceMovementproductionsupportPanel[0].VoiceCB[0]");
} else{
  submitAction();
}
  
  function submitAction() {
    aftiaDescCWID.value = FullName.value + " " + CWID.value;
    EmailSubject.value = "Test - Voice Movement Production Coaching Requests- " + CWID.value;
   // ExceptionProcessType.value = "1";
    Email.value = "soumya.ravindra@thoughtfocus.com";
  //  FacultyEmail.value = "anupama.dhar@thoughtfocus.com";
  //   FacultyEmail.value = "yjayaram@fullerton.edu";

	guideBridge.submit();
  } */
        }
	}
}
