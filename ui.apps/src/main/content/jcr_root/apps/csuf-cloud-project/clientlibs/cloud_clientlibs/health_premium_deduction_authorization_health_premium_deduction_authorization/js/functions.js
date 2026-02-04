/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({
 type: 'GET',
 url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
      //gifModal.style.display = "block";
        var userValue = myresopnse.userId;
       logUser.value = userValue;
   	 }
    });
}
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  signature.visible=false;
}

if(StageIndicator.value === "ToEmployee"){
  signature.visible=true;
}
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_textdraw1556181504365_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_textdraw1556181504365_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var EmpId = this.value;
if(StageIndicator.value === null){
if(this.value !== null){

/*var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";*/

 
   $.ajax({
		 type: 'GET',
		 url: "/bin/getHealthPremium",
			data:  {
                     cwid: EmpId,action:"HEALTH_PRE_EMP_DETAILS"
              },
			dataType: 'JSON',
     
     success: function(myresponse) {
        /*var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];*/
      
       if (myresponse.length > 0) {
         var fName =  myresponse[0].FIRST_NAME;
         var lName = myresponse[0].LAST_NAME; 
         EmailLastName.value = myresponse[0].LAST_NAME; 
         var result = fName.concat(" ").concat(lName);
         Name.value = result;
         
         EmployeeEmailID.value = myresponse[0].EMP_EMAIL_ID;
         var emailID = myresponse[0].EMP_EMAIL_ID;
         var userID = emailID.split("@");
         EmployeeUserID.value = userID[0];
        
        
         $.ajax({
			    type: 'GET',

              url: "/bin/getHealthPremium",    

            data:  {
                   cwid: EmpId, action:"HEALTH_PRE_PLAN_DETAILS"
            },

            dataType: 'JSON',
			
			 success: function(myresponse) {  
              HealthPlan.value = myresponse[0].DESCR;
               var healthArray = [];
               //healthArray.push(myresponse[0].DESCR1);
               /*healthArray.push("Employee Only");
               healthArray.push("Employee + 1");
               healthArray.push("Employee+Dependents");*/
               
               Coverage.value = myresponse[0].DESCR1;
               
               MonthlyPremium.value =myresponse[0].EMPLR_COVRG_RATE;
               
                 
			 }
			
		  });
         
       }
       
       }
   });
}
}
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_EnrollmentType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_EnrollmentType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var authVal = this.value;
if(authVal === "2"){
  MonthlyPremium.value = "250";
} else {
  MonthlyPremium.value = "125";
}
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible=false;
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

  var userValue;
  if(SignatureDate.value === null){
  
  var TzoneDate = new Date().toISOString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}).slice(0,10);
SignatureDate.value = TzoneDate;
  Signature.enabled = false;
   SignatureDate.enabled = false;
}
else{
  SignatureDate.enabled = false;
    Signature.enabled = false;
      SignatureDate.enabled = false;
    }
   $.ajax({

type: 'GET', 

  url:"/bin/getEvaluationFormData",
				data: {action: "EMP_DETAILS"},
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse[0].EMP_NAME;
   Signature.value =  userValue;
 
},
  error: function(error){
alert("error block="+error);
}
});
  
   Signature.enabled = false;
  SignatureDate.enabled = false;

}else{
      Signature.value = "";
    SignatureDate.value = null;
}

//}
        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (EmplID.value !== null) {
    //generatePDFStep.value = "Draft";
    getPdf();
}else{
      showErrorModal("Alert!", "Please fill all the required fields");
   }

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/health-premium-deduction-authorization/health_premium_deduction_authorization');
            jsonData.append('fileName', Name.value +  "(" + EmplID.value + ")" + "_" + Date.now());          
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
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_saveguidedraft1574920589904_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_saveguidedraft1574920589904_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplID.value !== null){
      aftiaDescCWID.value = Name.value + "  " +EmplID.value;
 }

handleDraftSave(this);


        }
	}
}
/**
 * @function health_premium_deduction_authorization_health_premium_deduction_authorization.generated_submit1574920582933_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
health_premium_deduction_authorization_health_premium_deduction_authorization.generated_submit1574920582933_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmplID.value !== null){
      aftiaDescCWID.value = Name.value + "  " +EmplID.value;
 }


if(Name.value !== null){
    EmailSubject.value = "Test - Health Premium Deduction Authorization - "+EmailLastName.value;
  }else{
    EmailSubject.value = "Test - Health Premium Deduction Authorization";
  }
//EmployeeEmailID.value = "yjayaram@fullerton.edu";
EmployeeEmailID.value = "pushpa.kawadi@thoughtfocus.com";
guideBridge.submit();
  
        }
	}
}
