/**
 * @function direct_pay_dental_direct_pay_dental.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_MiddleName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_MiddleName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_SSN_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_SSN_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this !== null) {
                    if((this.value).indexOf("-") == -1){
                    var numbers = this.value;
              		this.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4); 
                    }             		
 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    var enteredSsn = this.value;
    $.ajax({
        type: 'GET',
        url: "/bin/getDirectPayDentalEmpDetails",
        data: {
            ssn: enteredSsn
        },
        dataType: 'json',
        success: function(myresponse) {
            
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                
            if (myresponse.length === 1) {

                FirstName.value = myresponse[0].FIRST_NAME;
                LastName.value = myresponse[0].LAST_NAME;
                MiddleName.value = myresponse[0].MIDDLE_NAME;
                City.value = myresponse[0].CITY;
                HomePhone.value = myresponse[0].HOME_PHONE;
                EmpBarganingUnitCode.value = myresponse[0].UNION_CD;
                StreetAddress.value = myresponse[0].ADDRESS1;
                State.value = myresponse[0].STATE;
                ZipCode.value = myresponse[0].POSTAL;
                employeeEmail.value = myresponse[0].EMP_EMAIL_ID;
                empUserId.value = myresponse[0].EMP_USERID;
                gifModal.style.display = "none";
               
            } else if (myresponse.length > 1) {

                gifModal.style.display = "none";
                modal.style.display = "block";

                var col = [];
              
                col.push("FIRST_NAME");
                col.push("LAST_NAME");
                col.push("MIDDLE_NAME");
                col.push("JOBCODE");
                col.push("CITY");
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "First_Name","Last_Nme", "Middle_Initial", "getJobCode", "City"];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                for (var k = 0; k < myresponse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
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
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
                var footerModal = document.getElementById("modal_footer");
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    var n;
					var rButtonStatus;
                    var rButtons = document.getElementsByClassName("rb");
                    for (n = 0; n < rButtons.length; n++) {
                        if (rButtons[n].checked === false) {

                           rButtonStatus = false;
                        } else {
                            FirstName.value = myresponse[n].FIRST_NAME;
                LastName.value = myresponse[n].LAST_NAME;
                MiddleName.value = myresponse[n].MIDDLE_NAME;
                City.value = myresponse[n].CITY;
                HomePhone.value = myresponse[n].HOME_PHONE;
                EmpBarganingUnitCode.value = myresponse[n].UNION_CD;
                StreetAddress.value = myresponse[n].ADDRESS1;
                State.value = myresponse[n].STATE;
                ZipCode.value = myresponse[n].POSTAL;
                employeeEmail.value = myresponse[n].EMP_EMAIL_ID;
                empUserId.value = myresponse[n].EMP_USERID;
							  rButtonStatus = true;
                            modal.style.display = "none";
                            break;
                        }
                    }
                  if (rButtonStatus === false) {
                    debugger;
                            showErrorModal("Alert!","Please select the department");
                            modal.style.display = "block";
                    
                        }
                    };

               
                footerModal.appendChild(okButton);
            } else {
                showErrorModal("Alert!","No matching records found");
                FirstName.value = "";
                LastName.value = "";
                MiddleName.value = "";
                SSN.value = "";
                HomePhone.value = "";
                ZipCode.value = "";
                State.value = "";
              City.value = "";
                StreetAddress.value = "";
                gifModal.style.display = "none";
            }
            ////////////////////////////////////////////
           
           
        }
    });
}else{
   var gifModal = document.getElementById('gifModal');
   gifModal.style.display = "none";
}
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_EmpCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_EmpCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        EmpDate.value = d;
		dateInitiated.value = d;
        EmpDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    EmployeeSignature.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        EmployeeSignature.enabled = false;
        
    
} else {
    EmployeeSignature.value = "";
    EmpDate.value = "";
   
}
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_EmpCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_EmpCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        EmpDate1.value = d;
		dateInitiated.value = d;
        EmpDate1.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    EmployeeSignature1.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        EmployeeSignature1.enabled = false;
        
    
} else {
    EmployeeSignature1.value = "";
    EmpDate1.value = "";
   
}
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_FromDateofAbsence_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_FromDateofAbsence_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_LastPayPeriodPermium_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_LastPayPeriodPermium_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_EmpPayMonths_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_EmpPayMonths_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_AgencyCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_AgencyCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_certifyCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_certifyCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        BenefitOfficerDate.value = d;

        BenefitOfficerDate.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    SignOfBenefitOfficer.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        SignOfBenefitOfficer.enabled = false;
        
    
} else {
    SignOfBenefitOfficer.value = "";
    BenefitOfficerDate.value = "";
   
}
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_PhoneNumber_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_PhoneNumber_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_hiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_hiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function direct_pay_dental_direct_pay_dental.generated_generatePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_generatePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            var flag = 0;
debugger;
if (SSN.value === null && FirstName.value === null && LastName.value === null && State.value === null ) {
    flag = 1;
  showErrorModal("Alert!", "Please fill all the required fields");
}else{
  flag = 0;
  
   }
if(flag === 0){
  if(EmpCB1.value !== null && EmpCB2.value !== null){
  flag=1;
   showErrorModal("Alert!", "Please sign at appropriate section");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(EmpCB2.value !== null && EachQuater.value === null){
  flag = 1;
  showErrorModal("Alert!", "Please select Evaluation Type");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(FromDateofAbsence.value === null){
  flag = 1;
  showErrorModal("Alert!", "Please indicate dates of absence");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(ToDateofAbsence.value === null){
  flag = 1;
  showErrorModal("Alert!", "Please indicate dates of absence");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(FromDateofAbsence.value !== null && ToDateofAbsence.value !== null){
    var frmDate = new Date(FromDateofAbsence.value);
    var toDate = new Date(ToDateofAbsence.value);
    if(frmDate > toDate){
    showErrorModal("Alert!","double-check: this date appears to be incorrect.");
      flag = 1;
    }else{
      flag=0;
    }
 }
}
if(flag === 0 ){
  if( EmpBarganingUnitCode.value === null){
   showErrorModal("Alert!","CBID is missing.");
      flag = 1;
   }else{
   flag = 0;
   }
}
if(flag === 0 ){
  if( EmpPayThrough.value === null){
     flag = 1;
     showErrorModal("Alert!","Please indicate last month for direct pay");
   }else{
   flag = 0;
   }
}
if(flag === 0){
  generatePDFStep.value = "Draft";
  getPdf();
}
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/direct_pay_dental/direct-pay-dental');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "_" + Date.now());          
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
 * @function direct_pay_dental_direct_pay_dental.generated_submit1596007445744_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
direct_pay_dental_direct_pay_dental.generated_submit1596007445744_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (SSN.value === null) {
    flag = 1;
  showErrorModal("Alert!", "Please fill the Social Security Number");
}else{
  flag = 0;
  
   }
if(flag === 0){
  if(EmpCB1.value !== null && EmpCB2.value !== null){
  flag=1;
   showErrorModal("Alert!", "Please sign at appropriate section");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(EmpCB2.value !== null && EachQuater.value === null){
  flag = 1;
  showErrorModal("Alert!", "Please select Evaluation Type");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(FromDateofAbsence.value === null){
  flag = 1;
  showErrorModal("Alert!", "Please indicate dates of absence");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(ToDateofAbsence.value === null){
  flag = 1;
  showErrorModal("Alert!", "Please indicate dates of absence");
}else{
  flag = 0;
}
}
if(flag === 0 ){
  if(FromDateofAbsence.value !== null && ToDateofAbsence.value !== null){
    var frmDate = new Date(FromDateofAbsence.value);
    var toDate = new Date(ToDateofAbsence.value);
    if(frmDate > toDate){
    showErrorModal("Alert!","double-check: this date appears to be incorrect.");
      flag = 1;
    }else{
      flag=0;
    }
 }
}
if(flag === 0 ){
  if( EmpBarganingUnitCode.value === null){
   showErrorModal("Alert!","CBID is missing.");
      flag = 1;
   }else{
   flag = 0;
   }
}
if(flag === 0 ){
  if( EmpPayThrough.value === null){
     flag = 1;
     showErrorModal("Alert!","Please indicate last month for direct pay");
   }else{
   flag = 0;
   }
}
if(flag === 0){
employeeEmail.value = "yashovardhan.jayaram@thoughtfocus.com";
guideBridge.submit();
}



        }
	}
}
