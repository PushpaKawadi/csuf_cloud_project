/**
 * @function initial_cobra_initial_cobra.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 


        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_Empl_ID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_Empl_ID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if(EmpIdResult.value !== Empl_ID.value)
   {
var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
var InstCwid = Empl_ID.value;
var cwidValue = InstCwid;
var pattern = /^8\d{8}/;
var result = pattern.test(cwidValue);
          EmpIdResult.value = Empl_ID.value;
if(result === true ){
	

          $.ajax({

                type: 'GET', 

                  url:"/bin/getInitialCobraEmpLookup",

                  data: {

                   cwid: this.value

                   },
                     dataType: 'json',
                      success: function(myresponse){
						  gifModal.style.display = "none";
                          var modal = document.getElementById('myModal');
                          var span = document.getElementsByClassName("close")[0];

                          if(myresponse.length === 1){
                                Empl_RCD.value = myresponse[0].EMPL_RCD;
                                First_Name.value = myresponse[0].FIRST_NAME;
                                Last_Name.value = myresponse[0].LAST_NAME;
                                Partner_Name.value = myresponse[0].PartnerName;                            	
								EmpEmailAddress.value = myresponse[0].EMP_EMAIL_ID; 
                                
                                gifModal.style.display = "none";
                                modal.style.display = "none";

                          }else if(myresponse.length > 1){
                                gifModal.style.display = "none"; 
                                modal.style.display = "block"; 

                                var col = [];
                                col.push("FIRST_NAME");
                                col.push("LAST_NAME");            
                                col.push("EMPL_RCD");
                            	//col.push("PartnerName");                           	
                            	
                                var table = document.createElement("table");
                                table.id = "tb";
                                var tr = table.insertRow(-1);
                                var headings = ["", "First Name", "Last Name", "Emp RCD"];
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

								button.onclick = function(event) {
                       
								fNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[1].innerText;
								lNameHidden.value = event.currentTarget.parentNode.parentElement.childNodes[2].innerText;
								emplRCDHidden.value = event.currentTarget.parentNode.parentElement.childNodes[3].innerText;                        

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

										fNameHidden.value = myresponse[n].FIRST_NAME;
										lNameHidden.value = myresponse[n].LAST_NAME;
										emplRCDHidden.value = myresponse[n].EMPL_RCD;
                                  		HiddenPartnerName.value = myresponse[n].PartnerName;
                                        EmpEmailAddress.value= myresponse[n].EMP_EMAIL_ID;
                                       
                                  		
										rButtonStatus = true;
										break;

								}
							}
							if (rButtonStatus === false) {
								alert("Please select the department");
								modal.style.display = "block";
							} else {
									 First_Name.value = fNameHidden.value;
									 Last_Name.value = lNameHidden.value;
									 Empl_RCD.value = emplRCDHidden.value;	
                              		 Partner_Name.value = HiddenPartnerName.value;
									
									 modal.style.display = "none";
						}
					};                
					footerModal.appendChild(okButton);

						} else {                
								showErrorModal("Alert!","No matching records found");
								First_Name.value = null;
								Last_Name.value = null;
								Empl_RCD.value = null;
								
								gifModal.style.display = "none";
					}
					////////////////////////////////////////////
					span.onclick = function() {
						var n;
						var rButtonStatus;                
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
}else{
  		if(this.value !== null){
            showErrorModal("Alert !","Please enter a valid Empl ID. It should start with 8 and should be of 9 digits");
            gifModal.style.display = "none";
        }
}
   }
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_Empl_RCD_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_Empl_RCD_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_DateInitiated_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_DateInitiated_init0 = function (scope) {
    with(this) {
        with(scope) {
            var dateString = new Date().toLocaleString("en-US", {
timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
}).replace(/[^ -~]/g, ' ');
var dateObject = new Date(dateString);
var curyear = dateObject.getFullYear();
var curyearMonth = dateObject.getMonth() + 1;
var curyearDay = dateObject.getDate();
var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
this.value = dateInitiated;


//this.enabled = false;
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_First_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_First_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_Last_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_Last_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_Partner_Name_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_Partner_Name_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_hiddenFields_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_hiddenFields_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            //alert("on top")	;
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
 * @function initial_cobra_initial_cobra.generated_workflow_initiator_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_workflow_initiator_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
$.ajax({

    type: 'GET',

    url: "/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse) {
      //  gifModal.style.display = "block";
        
      workflow_initiator.value = myresopnse.userId;
    }
});
}
        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            
/*if(Empl_ID.value !== null && First_Name.value !== null && Last_Name.value !== null && Partner_Name.value !== null){
    	getPdf();
    }else{
      //alert("Please fill all the mandatory fields");
      	showErrorModal("Alert !", "Please fill all the mandatory fields");
    
      }*/
getPdf();

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/initial-cobra/initial-cobra');
            jsonData.append('fileName', First_Name.value+"_"+Last_Name.value+"("+Empl_ID.value+")"+"_"+ Date.now());          
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
 * @function initial_cobra_initial_cobra.generated_saveguidedraft1587887458450_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_saveguidedraft1587887458450_click0 = function (scope) {
    with(this) {
        with(scope) {
            aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);
handleDraftSave(this);


        }
	}
}
/**
 * @function initial_cobra_initial_cobra.generated_submit1573212270182_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
initial_cobra_initial_cobra.generated_submit1573212270182_click0 = function (scope) {
    with(this) {
        with(scope) {
            var emplRCD = Empl_RCD.value;

//EmpEmailAddress.value= "DL-TotalWellness@Exchange.FULLERTON.EDU";

aftiaDescCWID.value = (First_Name.value + " " + Last_Name.value + " " + Empl_ID.value);

if(Empl_ID.value === null){
  
  	showErrorModal("Alert !","Please enter a valid Empl ID. It should start with 8 and should be of 9 digits");
  
}else if(emplRCD.length > 3){
	 
  	showErrorModal("Alert!","Employee Record cannot be greater than 3 characters");

}/*else if(Partner_Name.value === null){
	showErrorModal("Alert!","Please enter partner name");
}*/else{
  if(Last_Name.value !== null){
    EmailSubject.value = "Initial COBRA - "+Last_Name.value;
  }else{
    EmailSubject.value = "Test - Initial COBRA";
  }
  guideBridge.submit();
}

        }
	}
}
