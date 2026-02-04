/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  officeUsePanel.visible = false;
}else{
  tax_year.enabled = false;
  tax_year2.enabled = false;
  certifyCB1.enabled = false;
  certifyCB2.enabled = false;
  name_of_domestic_partner.enabled = false;
  name_of_domestic_partner1.enabled = false;
  EmpCB.enabled = false;
  officeUsePanel.visible = true;
}
if(StageIndicator.value === null && formSavedStatus.value !== "1"){
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
        gifModal.style.display = "block";
        var userValue = myresopnse.userId;
        var userID = userValue;
      	workflow_initiator.value = userValue;
        $.ajax({
            type: 'GET',
            url: "/bin/getDomesticPartnerEmpDetails",
            data: {
                userId: userID
            },
            dataType: 'json',

            success: function(myresopnse) {

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

                    First_Name.value = myresopnse[0].FIRST_NAME;
                    Last_Name.value = myresopnse[0].LAST_NAME;
                    SSN.value = myresopnse[0].NATIONAL_ID;                   
              		var numbers = SSN.value;
              		//SSN.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);                
              		SSN.value = 'XXX' + '-' + 'XX' + '-' + numbers.substr(5, 4);                
                    name_of_employee.value = (myresopnse[0].FIRST_NAME).concat(" "+myresopnse[0].LAST_NAME);
                  	name_of_employee1.value = (myresopnse[0].FIRST_NAME).concat(" "+myresopnse[0].LAST_NAME);
					empUserId.value = myresopnse[0].EMP_USERID;
                    employeeEmail.value = myresopnse[0].EMP_EMAIL_ID;
                    gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    col.push("FIRST_NAME");

                    col.push("LAST_NAME");
                  
                    col.push("NATIONAL_ID");

                    col.push("DEPTNAME");

                    col.push("JOBCODE");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "First_Name", "Last_Name","SSN", "getDeptName", "getJobCode"];
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


                        var tabCell1 = tr.insertCell(-1);
                        tabCell1.appendChild(button);
                        for (var l = 0; l < col.length; l++) {
                            var tabCell = tr.insertCell(-1);
                          
                          if(col[l] == "NATIONAL_ID"){
                            tabCell.innerHTML = 'XXX' + '-' + 'XX' + '-' + (myresopnse[k][col[l]]).substr(5, 4);
                          }else{
                             tabCell.innerHTML = myresopnse[k][col[l]];
                          }
                           
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

                                First_Name.value = myresopnse[n].FIRST_NAME;
                    			Last_Name.value = myresopnse[n].LAST_NAME;
                    			SSN.value = myresopnse[0].NATIONAL_ID;                   
              		var numbers = SSN.value;
              		//SSN.value = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4); 
              		SSN.value = 'XXX' + '-' + 'XX' + '-' + numbers.substr(5, 4);    
                                name_of_employee.value = (myresopnse[n].FIRST_NAME).concat(" "+myresopnse[n].LAST_NAME);
           				       	name_of_employee1.value = (myresopnse[n].FIRST_NAME).concat(" "+myresopnse[n].LAST_NAME);
                              empUserId.value = myresopnse[n].EMP_USERID;
                    employeeEmail.value = myresopnse[n].EMP_EMAIL_ID;
                                rButtonStatus = true;
                                modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            showErrorModal("Alert!","Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } else {
                    modal.style.display = "none";
                    showErrorModal("Alert!","No matching records found");
                            

                }
                ////////////////////////////////////////////
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
    }

});
}
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_certifyCB1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_certifyCB1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  certifyCB2.value = "";
  tax_year2.value = null;
  name_of_domestic_partner1.value = null;
  
  tax_year2.enabled = false;
  name_of_domestic_partner1.enabled = false;
  tax_year.enabled = true;
  name_of_domestic_partner.enabled = true;
}
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_name_of_employee_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_name_of_employee_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_certifyCB2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_certifyCB2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  certifyCB1.value = "";
  tax_year.value = null;
  name_of_domestic_partner.value = null;
  
  tax_year.enabled = false;
  name_of_domestic_partner.enabled = false;
  
  tax_year2.enabled = true;
  name_of_domestic_partner1.enabled = true;
}
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_name_of_employee1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_name_of_employee1_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_EmpCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_EmpCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        Date_Initiated.value = d;

        Date_Initiated.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    emp_signature.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        emp_signature.enabled = false;
        
    
} else {
    emp_signature.value = "";
    Date_Initiated.value = "";
   
}
}
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_emp_signature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_emp_signature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_SSN_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_SSN_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_First_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_First_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_Last_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_Last_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_campus_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_campus_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_Date_Initiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_Date_Initiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_officeCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_officeCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToHR"){
if (this.value == 1) {
    
        var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        Date_Approved.value = d;

        Date_Approved.enabled = false;
         $.ajax({

                type: 'GET',

                url: "/bin/getLoggedUserDetails",
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse.userName;
                    campus_representative.value = userValue;
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        campus_representative.enabled = false;
        
    
} else {
    Date_Approved.value = "";
    campus_representative.value = "";
   
}
}
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_Telephone_no_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_Telephone_no_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_generatePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_generatePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            var flag = 0;
debugger;
if(flag === 0){
if(certifyCB1.value === null && certifyCB2.value === null){
  flag = 1;
  showErrorModal("Alert!","Please select the appropriate statement");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB1.value == "1" && tax_year.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter effective tax year");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB1.value == "1" && tax_year.value !== null){
 
  if((/^([0-9]{4})$/).test(tax_year.value) === false){
  flag = 1;
  showErrorModal("Alert!","Invalid date format");
}else{
  flag = 0;
}
}
}

if(flag === 0){
if(certifyCB1.value == "1" && name_of_domestic_partner.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter your domestic partner");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB2.value == "1" && tax_year2.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter effective tax year");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB2.value == "1" && tax_year2.value !== null){
 
  if((/^([0-9]{4})$/).test(tax_year2.value) === false){
  flag = 1;
  showErrorModal("Alert!","Invalid date format");
}else{
  flag = 0;
}
}
}
if(flag === 0){
if(certifyCB2.value == "1" && name_of_domestic_partner1.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter your domestic partner");
}else{
  flag = 0;
}
}

if(flag === 0){
if(emp_signature.value === null){
  flag = 1;
  showErrorModal("Alert!","Please fill all the required fields");
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
          console.log("in view pdf=="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/domestic-partner-dependent-certification/domestic_partner_domestic_certification');
            jsonData.append('fileName', First_Name.value + "_" + Last_Name.value + "(" + SSN.value + ")" + "_" + Date.now());          
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
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_saveguidedraft1596017578753_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_saveguidedraft1596017578753_click0 = function (scope) {
    with(this) {
        with(scope) {
            formSavedStatus.value = "1";
aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value);
handleDraftSave(this);


        }
	}
}
/**
 * @function domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_submit1596017588628_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
domestic_partner_dependent_certification_domestic_partner_domestic_certification.generated_submit1596017588628_click0 = function (scope) {
    with(this) {
        with(scope) {
            var flag = 0;
//debugger;
if(flag === 0){
if(certifyCB1.value === null && certifyCB2.value === null){
  flag = 1;
  showErrorModal("Alert!","Please select the appropriate statement");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB1.value == "1" && tax_year.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter effective tax year");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB1.value == "1" && tax_year.value !== null){
 
  if((/^([0-9]{4})$/).test(tax_year.value) === false){
  flag = 1;
  showErrorModal("Alert!","Invalid date format");
}else{
  flag = 0;
}
}
}
if(flag === 0){
if(certifyCB1.value == "1" && name_of_domestic_partner.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter your domestic partner");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB2.value == "1" && tax_year2.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter effective tax year");
}else{
  flag = 0;
}
}
if(flag === 0){
if(certifyCB2.value == "1" && tax_year2.value !== null){
 
  if((/^([0-9]{4})$/).test(tax_year2.value) === false){
  flag = 1;
  showErrorModal("Alert!","Invalid date format");
}else{
  flag = 0;
}
}
}
if(flag === 0){
if(certifyCB2.value == "1" && name_of_domestic_partner1.value === null){
  flag = 1;
  showErrorModal("Alert!","Please enter your domestic partner");
}else{
  flag = 0;
}
}


if(flag === 0){
  employeeEmail.value = "yjayaram@fullerton.edu";  
   aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value);
  if(Last_Name.value !== null){
    EmailSubject.value = "Test - Domestic Partner Certification - "+Last_Name.value;
  }else{
    EmailSubject.value = "Test - Domestic Partner Certification";
  }
guideBridge.submit();
}



        }
	}
}
