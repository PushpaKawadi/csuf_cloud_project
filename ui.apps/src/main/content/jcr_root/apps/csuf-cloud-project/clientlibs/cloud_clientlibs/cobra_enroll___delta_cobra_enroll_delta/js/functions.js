/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_IssuingDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_IssuingDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false; 

var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = dateInitiated;


var dateString1 = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObjec1tt = new Date(dateString);
            var curyear1 = dateObject.getFullYear();
            var curyearMonth1 = dateObject.getMonth() + 1;
            var curyearDay1 = dateObject.getDate() + 1;
            var effectiveDate = (curyear1 + "-" + curyearMonth1 + "-" + curyearDay1);
            EffectiveDate.value = effectiveDate;

			 
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem11_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem11_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeSSN_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeSSN_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //var userID = 'kcase'; 
//var userID = LogUser.value;

var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";

var ssnLookUp = this.value;

if((this.value).indexOf("-") == -1){
var numbers = this.value;
cwid = numbers.substr(0, 3) + '-' + numbers.substr(3, 2) + '-' + numbers.substr(5, 4);
this.value= cwid;
}

$.ajax({
      type: 'GET',
      url: "/bin/cobraEnrollDeltaSSNLookUpServlet",

      data: {
        ssn: ssnLookUp
      },
      dataType: 'json',

      success: function(myresponse) {
            gifModal.style.display = "none";
            // debugger;
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            if (myresponse.length == 1) {							

              EmployeeFirstName.value = myresponse[0].FIRST_NAME;
              EmployeeLastName.value = myresponse[0].LAST_NAME;
              EmployeeBirthDate.value = myresponse[0].BIRTHDATE;
              Address.value = myresponse[0].ADDRESS1; 
              City.value = myresponse[0].CITY;
              State.value = myresponse[0].STATE;
              Zip.value = myresponse[0].POSTAL;	
              PhoneNumber.value = myresponse[0].HOME_PHONE;
              DepartmentName.value = myresponse[0].DEPTNAME;
              JobCode.value = myresponse[0].JOBCODE;

              gifModal.style.display = "none";
              modal.style.display = "none";

            } else if (myresponse.length > 1) {
              gifModal.style.display = "none";
              modal.style.display = "block";

              //populate Hidden Fields							
              HiddenBirthDate.value = myresponse[0].BIRTHDATE;
              HiddenAddress.value = myresponse[0].ADDRESS1; 
              HiddenCity.value = myresponse[0].CITY;
              HiddenState.value = myresponse[0].STATE;
              HiddenZip.value = myresponse[0].POSTAL;
              HiddenPhoneNumber.value = myresponse[0].HOME_PHONE;		 

              var col = [];
              col.push("FIRST_NAME");
              col.push("LAST_NAME");
              col.push("DEPTNAME");
              col.push("JOBCODE");

              var table = document.createElement("table");
              table.id = "tb";
              var tr = table.insertRow(-1);
              var headings = ["", "First Name", "Last Name", "Dep Name", "Job Code"];
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

                button.onclick = function(event) {
                  //alert("xcvbn");
                  //debugger;
                  HiddenFirstName.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
                  HiddenLastName.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
                  //hiddentDepartmentName.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;
                  //cityhidden.value = event.currentTarget.parentNode.parentElement.childNodes[4].innerText;

                };

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
              // debugger;

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
                for(n=0;n<rButtons.length;n++){
                  if(rButtons[n].checked === false){

                    rButtonStatus = false;
                  }else{

                    HiddenFirstName.value = myresponse[n].FIRST_NAME;
                    HiddenLastName.value = myresponse[n].LAST_NAME;
                    HiddenBirthDate.value = myresponse[n].BIRTHDATE;
                    HiddenAddress.value = myresponse[n].ADDRESS1; 
                    HiddenCity.value = myresponse[n].CITY;
                    HiddenState.value = myresponse[n].STATE;
                    HiddenZip.value = myresponse[n].POSTAL;
                    HiddenPhoneNumber.value = myresponse[n].HOME_PHONE;		                                         	
                    DepartmentName.value = myresponse[0].DEPTNAME;
                    JobCode.value = myresponse[0].JOBCODE; 

                    rButtonStatus = true;
                    break;
                  }
                }
                if(rButtonStatus === false){
                  alert("Please select the department");
                  modal.style.display = "block";
                }else {
                  //alert("Button Clicked 4");								
                  EmployeeFirstName.value = HiddenFirstName.value;
                  EmployeeLastName.value = HiddenLastName.value;
                  EmployeeBirthDate.value = HiddenBirthDate.value;
                  Address.value = HiddenAddress.value; 
                  City.value = HiddenCity.value;
                  State.value = HiddenState.value;
                  Zip.value = HiddenZip.value;	
                  PhoneNumber.value = HiddenPhoneNumber.value;
                  DepartmentName.value = myresponse[0].DEPTNAME;
                  JobCode.value = myresponse[0].JOBCODE;

                  // gifModal.style.display = "none";
                  modal.style.display = "none";

                }
              };
              // footerModal = document.getElementById("modal_footer");
              footerModal.appendChild(okButton);

            } else {
              //alert("No Matching Records Found. Please enter valid details");

              showErrorModal("Alert !", "No Matching Records Found. Please enter valid details");
              EmployeeFirstName.value = null;
              EmployeeLastName.value = null;
              EmployeeBirthDate.value = null;
              Address.value = null; 
              City.value = null;
              State.value = null;
              Zip.value = null;	
              PhoneNumber.value = null;
              //gifModal.style.display = "none";
            }
            ////////////////////////////////////////////
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
                alert("Please select the department");
                modal.style.display = "block";
              } else {

                alert("Please select the department");
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
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem21_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem21_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757600921589275760540_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757600921589275760540_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757704581589275770990_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757704581589275770990_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757784851589275779105_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757784851589275779105_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757893611589275790094_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757893611589275790094_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757974221589275798126_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_tableItem15892757974221589275798126_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeCharge_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeCharge_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeOneCharge_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeOneCharge_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeTwoCharge_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_EmployeeTwoCharge_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_NoCoveragePlan_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_NoCoveragePlan_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(NoCoveragePlan.value == 1){
ContinueCoveragePlan.value = null;
EmployeeSignature.value = LogUser.value;
EmployeeDate.enabled = false;
        if (EmployeeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            EmployeeDate.value = d;
            EmployeeSignature.enabled = false;
        } else {
            EmployeeDate.enabled = false;
            EmployeeSignature.enabled = false;
        }
}

if(this.value === null && ContinueCoveragePlan.value === null){
  		EmployeeDate.value = null;
        EmployeeSignature.value = null;
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_ContinueCoveragePlan_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_ContinueCoveragePlan_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
NoCoveragePlan.value = null;
EmployeeSignature.value = LogUser.value;
EmployeeDate.enabled = false;
        if (EmployeeDate.value === null) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            EmployeeDate.value = d;
            EmployeeSignature.enabled = false;
        } else {
            EmployeeDate.enabled = false;
            EmployeeSignature.enabled = false;
        }
}

if(this.value === null && NoCoveragePlan.value === null){
  		EmployeeDate.value = null;
        EmployeeSignature.value = null;
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_MyselfOnly_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_MyselfOnly_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  MyselfAndDependents.value = null;
  DependentsOnly.value = null;
  
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_MyselfAndDependents_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_MyselfAndDependents_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  MyselfOnly.value = null;
  DependentsOnly.value = null;  
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_DependentsOnly_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_DependentsOnly_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  MyselfAndDependents.value = null;
  MyselfOnly.value = null;  
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_NameOfIndividual_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_NameOfIndividual_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	Title.value = "Benefits Specialist";
}
else if(this.value == "2"){
  	Title.value = "Benefits Manager";
}
else if(this.value == "3"){
  	Title.value = "Benefits and Wellness Coordinator";
}
else if(this.value == "3"){
  	Title.value = "Benefits Analyst";
}
else if(this.value == "4"){
  	Title.value = "Benefits Analyst";
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_DeltaGroupdNumber_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_DeltaGroupdNumber_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  	EmployeeCharge.value = "29.66";
  	EmployeeOneCharge.value = "56.03";
  	EmployeeTwoCharge.value = "112.52";
}
else if(this.value == "2"){
  	EmployeeCharge.value = "36.10";
  	EmployeeOneCharge.value = "68.29";
  	EmployeeTwoCharge.value = "140.76";
}
else if(this.value == "3"){
 	EmployeeCharge.value = "44.68";
  	EmployeeOneCharge.value = "84.29";
  	EmployeeTwoCharge.value = "164.67"; 
}
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_EmployerDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_EmployerDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false; 

var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = dateInitiated;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

    type: 'GET', 

    url:"/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse){
      var userValue = myresopnse.userId;
      LogUser.value = userValue;

    },
      error: function(error){
    alert("error block="+error);
    }
});
        }
	}
}
/**
 * @function cobra_enroll___delta_cobra_enroll_delta.generated_GenerateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
cobra_enroll___delta_cobra_enroll_delta.generated_GenerateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(EmployeeSSN.value !== null && EmployeeFirstName.value !== null && EmployeeLastName.value !== null){
  	getPdf();
}else{
  	showErrorModal("Alert !", "Please fill the required fields");
}

/*function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var url = "/bin/getDoR" + "?data=" + result.data + "&formPath=" + "/content/forms/af/cobra-enroll---delta/cobra-enroll-delta" + "&fileName=" + EmployeeFirstName.value+"_"+EmployeeLastName.value+"("+LogUser.value+")"+"_"+ Date.now();
            console.log("url: " + url);
            window.open(encodeURI(url), "_self");
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}*/

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/cobra-enroll---delta/cobra-enroll-delta');
            jsonData.append('fileName', EmployeeFirstName.value + "_" + EmployeeLastName.value + "_" + Date.now());          
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
