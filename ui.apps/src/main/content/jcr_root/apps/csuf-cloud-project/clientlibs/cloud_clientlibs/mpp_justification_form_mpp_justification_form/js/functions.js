/**
 * @function mpp_justification_form_mpp_justification_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none";
/*if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    $.ajax({

        type: 'GET',
        url: "/bin/getAllLoggedInUserDetailsLookup",
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length > 0) {

                workflow_initiator.value = myresponse[0].USERID;
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        }
    });
}*/
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_new_cms_positionCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_new_cms_positionCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	repurposed_cms_positionCHK.value = null;
	reclassificationCHK.value = null;
	recruitmentCHK.value = null;
	appointmentCHK.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_repurposed_cms_positionCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_repurposed_cms_positionCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	new_cms_positionCHK.value = null;
	reclassificationCHK.value = null;
	recruitmentCHK.value = null;
	appointmentCHK.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_reclassificationCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_reclassificationCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == 1){
  	new_cms_positionCHK.value = null;
	repurposed_cms_positionCHK.value = null;
	recruitmentCHK.value = null;
	appointmentCHK.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_recruitmentCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_recruitmentCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	new_cms_positionCHK.value = null;
	repurposed_cms_positionCHK.value = null;
	reclassificationCHK.value = null;
	appointmentCHK.value = null;
  	recruitment_CHRS.enabled = true;
}
else{
  	recruitment_CHRS.enabled = false;
  	recruitment_CHRS.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_appointmentCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_appointmentCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  	new_cms_positionCHK.value = null;
	repurposed_cms_positionCHK.value = null;
	reclassificationCHK.value = null;
	recruitmentCHK.value = null;
  	appointment_CCAR.enabled = true;
}
else{
  	appointment_CCAR.enabled = false;
  	appointment_CCAR.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_cms_position_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_cms_position_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	var cmsPositionNumber = this.value;

    $.ajax({

        type: 'GET',

        url: "/bin/getMPPJustificationData",

        data: {
            cmsPosition: cmsPositionNumber,
			action: 'CMSPOSITIONDETAILS'
        },

        dataType: 'json',

        success: function(response) {

            if (response.length > 0) {
				department.value = response[0].DEPTNAME;
				mpp_supervisor.value = response[0].SUPERVISORNAME;
				working_title.value = response[0].SUPERVISORTITLE;
				proposed_admin.value = response[0].DESCR;
                
                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        }
    }); // end 1st ajax  
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_campus_designee_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_campus_designee_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	department_head_signature.enabled = false;
	department_head_name.enabled = false;
	
	if (department_head_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		department_head_date.value = d;
		department_head_signature.enabled = false;
	}
	else {
		department_head_date.enabled = false;
		department_head_signature.enabled = false;
  }
}else{
  department_head_date.value = null;
  department_head_signature.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_campus_designee_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_campus_designee_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value == "ToDepartmentHead"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           department_head_signature.value = myresponse.userName;
		   department_head_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_campus_designee_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_campus_designee_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_mpp_supervisor_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_mpp_supervisor_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	college_dean_signature.enabled = false;
	college_dean_name.enabled = false;
	
	if (college_dean_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		college_dean_date.value = d;
		college_dean_signature.enabled = false;
	}
	else {
		college_dean_date.enabled = false;
		college_dean_signature.enabled = false;
  }
}else{
  college_dean_date.value = null;
  college_dean_signature.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_mpp_supervisor_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_mpp_supervisor_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToCollegeDean"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           college_dean_signature.value = myresponse.userName;
		   college_dean_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_mpp_supervisor_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_mpp_supervisor_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled =false;
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_payroll_Signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_payroll_Signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	payroll_signature.enabled = false;
	
	if (payroll_siganture_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		payroll_siganture_date.value = d;
		payroll_signature.enabled = false;
	}
	else {
		payroll_signature.enabled = false;
		payroll_siganture_date.enabled = false;
  }
}else{
  	payroll_signature.value = null;
  	payroll_siganture_date.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_payroll_Signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_payroll_Signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToPayroll"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 
       url:"/bin/getLoggedUserDetails",
       dataType: 'json',

       success: function(myresponse){

           payroll_signature.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_appropriate_admin_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_appropriate_admin_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_vp_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_vp_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	division_head_signature.enabled = false;
	division_head_name.enabled = false;
	
	if (division_head_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		division_head_date.value = d;
		division_head_signature.enabled = false;
	}
	else {
		division_head_date.enabled = false;
		division_head_signature.enabled = false;
  }
}else{
  division_head_date.value = null;
  division_head_signature.value = null;
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_vp_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_vp_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToDivisionHead"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           division_head_signature.value = myresponse.userName;
		   division_head_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_vp_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_vp_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            getPdf();

function getPdf() {
    //console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/mpp-justification-form/mpp-justification-form');
            //jsonData.append('fileName', "(" + hidden_cwid.value + ")" + "_" + Date.now());    
            jsonData.append('fileName', "(" + Date.now() + ")");      
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
 * @function mpp_justification_form_mpp_justification_form.generated_saveguidedraft1620198028691_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_saveguidedraft1620198028691_click0 = function (scope) {
    with(this) {
        with(scope) {
            
//aftiaDescCWID.value = "deptID(s): "+deptIDs.replace(/,(\s+)?$/, '');


formSavedStatus.value = "1";

handleDraftSave(this);


        }
	}
}
/**
 * @function mpp_justification_form_mpp_justification_form.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
mpp_justification_form_mpp_justification_form.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            


//if(new_cms_positionCHK.value === null && repurposed_cms_positionCHK && reclassificationCHK && )

guideBridge.submit();
        }
	}
}
