/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

if (StageIndicator.value === null) {

    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;
  
    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true;
      
    AssetPanel.visible = false; 
   
}

if (StageIndicator.value == "ToResponsibleManager") {
    
    RequestorInformationPanel.visible = true;
    RequestorInformationPanel.enabled = true;
    RequiredInformation.visible = true;
    RequiredInformation.enabled = true;

    InitiatorPanel.visible = true;
    InitiatorPanel.enabled = true; 
    
   
    if (AssetCB.value == "1") {
     AssetPanel.visible = true;
     AssetPanel.enabled = false; 
    } else {
      AssetPanel.visible = false;
    }
  

  
}
debugger;

  if (StageIndicator.value == "ToCashHandlingPersonnel") {

    
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
    
   
   
}
debugger;

  if (StageIndicator.value == "ToDirectorSFS") {

    
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
    
   
   
}

debugger;

  if (StageIndicator.value == "ToController") {

    
    RequiredInformation.visible = true;
    RequiredInformation.enabled = false;
  
    if (InitiatorCB.value == "1") {
     InitiatorPanel.visible = true;
     InitiatorPanel.enabled = false; 
    } else {
      InitiatorPanel.visible = false;
    }
    
    
    AssetPanel.visible = true; 
    AssetPanel.enabled = true;
    
   
   
}




        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger; 
if (StageIndicator.value === null) {
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";

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

							InitiatorPanel.visible = true;
							

							cwid_initiator.value = myresopnse[0].EMPLID;
                            Cwid.value = myresopnse[0].EMPLID;
							
                          
							FirstName.value = myresopnse[0].FIRST_NAME;
							LastName.value = myresopnse[0].LAST_NAME;
                            

							//InitiatorEmail.value = myresopnse[0].EMAILID;
                            InitiatorEmail.value = "soumya.ravindra@thoughtfocus.com";
							InitiatorUserID.value = myresopnse[0].EMP_USERID;
							InitiatorName.value = FirstName.value + " " + LastName.value;

							

							InitiatorFlag.value = false;

							
                            
			

							gifModal.style.display = "none";
							modal.style.display = "none";

						} 
						
						
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
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

type: 'GET',
url:"/bin/getCaseID",
dataType: 'json',

success: function(myresponse){
caseId.value = myresponse.CASEID;

}
});
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
  this.enabled=true;
} else {
  this.enabled=false;
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Cwid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Cwid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if ((StageIndicator.value === null || StageIndicator.value == "ToInitiator")) {
if (this.value !== null && cwid_initiator.value !== this.value) {
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";

	$.ajax({
		type: 'GET',
		url: "/bin/getLoggedUserId",
		dataType: 'json',
		success: function(myresponse) {
			if (myresponse.Status == "Success") {
				var userValue = myresponse.userId;
				workflow_initiator.value = userValue;
				var cwid = Cwid.value;

				$.ajax({
					type: 'GET',

					url: "/bin/getSubstituteFacultyData",
					data: {
						action: "SUB_FACULTY_CWID_LOOKUP",
						cwid: cwid
					},

					dataType: 'json',
					success: function(myresopnse) {

						var modal = document.getElementById('myModal');
						var span = document.getElementsByClassName("close")[0];

						if (myresopnse.length === 1 && myresopnse[0].EMPLID !== undefined) {


							FirstName.value = myresopnse[0].FIRST_NAME;
							LastName.value = myresopnse[0].LAST_NAME;
                          
							

							InitiatorFlag.value = true;

							InitiatorPanel.visible = true;
							

							gifModal.style.display = "none";
							modal.style.display = "none";

						} 
			
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
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Department_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Department_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Location_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Location_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
 this.value = getDateforAdaptiveForm();
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Purpose_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_Purpose_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToResponsibleManager") || (StageIndicator.value === null)) {
        if (ResponsibleManagerSign.value === null) {           
            ResponsibleManagerSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  ResponsibleManagerSign.value = userValue;
                  ResponsibleManagerSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    ResponsibleManagerSign.value = "";
    ResponsibleManagerSignDate.value = "";
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ResponsibleManagerSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_CashHandlingPersonnelCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_CashHandlingPersonnelCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToCashHandlingPersonnel") || (StageIndicator.value === null)) {
        if (CashHandlingPersonnelSign.value === null) {           
            CashHandlingPersonnelSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  CashHandlingPersonnelSign.value = userValue;
                  CashHandlingPersonnelSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    CashHandlingPersonnelSign.value = "";
    CashHandlingPersonnelSignDate.value = "";
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_CashHandlingPersonnelSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_CashHandlingPersonnelSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_CashHandlingPersonnelSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_CashHandlingPersonnelSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_DirectorSFSCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_DirectorSFSCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToDirectorSFS") || (StageIndicator.value === null)) {
        if (DirectorSFSSign.value === null) {           
            DirectorSFSSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  DirectorSFSSign.value = userValue;
                  DirectorSFSSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    DirectorSFSSign.value = "";
    DirectorSFSSignDate.value = "";
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_DirectorSFSSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_DirectorSFSSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_DirectorSFSSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_DirectorSFSSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ControllerCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ControllerCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    if ((StageIndicator.value == "ToController") || (StageIndicator.value === null)) {
        if (ControllerSign.value === null) {           
            ControllerSignDate.enabled = false;
            $.ajax({
                type: 'GET',
                url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].EMP_NAME;
                  ControllerSign.value = userValue;
                  ControllerSignDate.value = myresopnse[0].SERVER_DATE;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });          

        } 
    }
} else {
    ControllerSign.value = "";
    ControllerSignDate.value = "";
}
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ControllerSign_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ControllerSign_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ControllerSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_ControllerSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/designation-as-university-cash-collection-point/designation-as-university-cash-collection-point');   
            jsonData.append('fileName', "Designation As University Cash Collection Point" + "-" + Cwid.value + "-" + ResponsibleManagerName.value );
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
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_saveguidedraft1629881233615_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_saveguidedraft1629881233615_click0 = function (scope) {
    with(this) {
        with(scope) {
            
aftiaDescCWID.value = FirstName.value + " " + LastName.value + " "+EmplId.value ;
handleDraftSave(this);


        }
	}
}
/**
 * @function designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
designation_as_university_cash_collection_point_designation_as_university_cash_collection_point.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
  EmailSubject.value = "Test - Designation As University Cash Collection Point";
  guideBridge.submit();
}



        }
	}
