/**
 * @function nacha_form_nacha_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            var userValue = myresponse.userId;
            //userValue = "nvadlakunta";
            workflow_initiator.value = userValue;
            if (userValue !== null) {
                getInitiatorDetails(userValue);
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getInitiatorDetails(userIdVal) {
    $.ajax({

        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            action: "INITIATOR_DETAILS",
            userid: userIdVal
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length >= 1) {
                InitiatorUserId.value = userIdVal;
                InitiatorName.value = myresponse[0].FIRST_NAME + " " + myresponse[0].LAST_NAME;
                InitiatorEmailId.value = myresponse[0].EMAILID;
                getChairDetails();
            } else {
                showErrorModal("Alert!", "No matching records found");
            }

        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getChairDetails(){
  $.ajax({
        type: 'GET',
        url: "/bin/getPosthumousDegreeApproval",
        data: {
            action: "CHAIR_DETAILS",
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length >= 1) {
              var departmentArray = [];
              for(var p=0; p<myresponse.length; p++){
                var item = myresponse[p].DEPTNAME+"-"+myresponse[p].DEPTID;
                departmentArray.push(item);
              }
              DepartmentDropdown.items = departmentArray.sort();
             ChairArrayData.value = JSON.stringify(myresponse);
            }
        }
    });
}
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    DepartmentChairSignaturePanel.visible = false;
    DeanSignaturePanel.visible = false;
    ProvostOfficeSignaturePanel.visible = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToDepartmentChair") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    DeanSignaturePanel.visible = false;
    ProvostOfficeSignaturePanel.visible = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToCollegeDean") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    ProvostOfficeSignaturePanel.visible = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToProvostOffice") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    DeanSignaturePanel.enabled = false;
    PresidentSignaturePanel.visible = false;
} else if (StageIndicator.value == "ToUniversityPresident") {
    BasicInformationPanel.enabled = false;
    DegreeAndRecognitionPanel.enabled = false;
    InitiatorSignaturePanel.enabled = false;
    DeanSignaturePanel.enabled = false;
    ProvostOfficeSignaturePanel.enabled = false;
}
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_ReviewerID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_ReviewerID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_ReviewedTime_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_ReviewedTime_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_ApproverID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_ApproverID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_ApprovedTime_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_ApprovedTime_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_generateDOR_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_generateDOR_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visble = false;
        }
	}
}
/**
 * @function nacha_form_nacha_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
nacha_form_nacha_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (EmpID.value !== null && Evaluation1.value !== null && Evaluation2.value !== null && Evaluation3.value !== null && EmpCB.value !== null) {
    GeneratePdfStep.value = "Draft";
    getPdf();
}else{
  var pdfEerrorModal = document.getElementById('pdfErrorPopup');
debugger;
    var pdfPara = document.getElementById("pdfPara");
    pdfPara.innerHTML = "";
    pdfPara.innerHTML = "Please fill in the required fields";
    var pdfErrorBody = document.getElementById('pdfErrorData');
    pdfErrorBody.innerHTML = "";
    pdfErrorBody.appendChild(pdfPara);
    var footerpdfEerrorModal = document.getElementById("pdfErrorPopup-footer");
    var pdfErrorokButton = document.createElement("input");
    pdfErrorokButton.type = "button";
    pdfErrorokButton.setAttribute("class", "okBtn");
    //pdfErrorokButton.id = "okBtn";
    pdfErrorokButton.value = "Ok";
    pdfErrorokButton.onclick = function(event) {
        pdfEerrorModal.style.display = "none";
    };
    footerpdfEerrorModal.appendChild(pdfErrorokButton);
   pdfEerrorModal.style.display = "block";
  
   /*if(checkDataExist.value == "true"){
       pdfEerrorModal.style.display = "none";
    }else{
       pdfEerrorModal.style.display = "block";
    }*/
   
}

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/nacha-form/nacha-form');
            jsonData.append('fileName', EmpFirstNAme.value + "_" + EmpLastName.value + "(" + EmpID.value + ")" + "_" + Date.now());          
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
