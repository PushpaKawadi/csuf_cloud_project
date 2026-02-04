/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var userID = "rpurohit";
  
    $.ajax({
        type: 'GET',
        url: "/bin/getCatastrophicLeaveRequest",
        data: {
            //cwid: cwid123,
            userID: userID
        },
        dataType: 'json',
        success: function(myresopnse) {
            // debugger;
           // var modal = document.getElementById('myModal');
            //var span = document.getElementsByClassName("close")[0];
            debugger;
            if (myresopnse.length === 1) {
              
          
                debugger;
                DepartmentName.value = myresopnse[0].DEPTNAME;
                EMPLRCD.value = myresopnse[0].EMPL_RCD;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                DepartmentID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                EMPLID.value = myresopnse[0].EMPLID;
                
            }
        }
    });
          
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
             var gifModal = document.getElementById('gifModal');
gifModal.sytle.display = "none";
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_textdraw1575095828043_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_textdraw1575095828043_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_EmplID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_EmplID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
if(cwid !== null){
        $.ajax({
            type: 'GET',
            url: "/bin/getCertEligibility",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

               EmpStatus.value=myresopnse[0].STATUS;
              
                DeptName.value = myresopnse[0].DEPTNAME;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                PhoneExt.value = myresopnse[0].EXTENSION;
                DeptID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                logUser.value =myresopnse[0].USERID;
                var userIDVal  = myresopnse[0].USERID;
                Email.value = userIDVal.concat("@exchange.fullerton.edu");
				//EmplID.value = this.value;


                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    //col.push("EMPLID");

                    col.push("LAST_NAME");

                    col.push("FIRST_NAME");

                    col.push("DEPTID");

                    col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    //var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
                    var headings = ["", "Last Name", "First Name", "Department Id", "Department Name"];
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
                            tabCell.innerHTML = myresopnse[k][col[l]];
                        }
                    }

                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    /*var cancelButton = document.createElement("input");
                    cancelButton.type = "button";
                    cancelButton.setAttribute("class", "cancelBtn");
                    cancelButton.id = "cBtn";
                    cancelButton.value = "Cancel";
                    cancelButton.onclick = function(event) {
                        modal.style.display = "none";
                    };
                    

                    footerModal.appendChild(cancelButton);*/
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {

                            DeptName.value = myresopnse[n].DEPTNAME;
							BargainingUnit.value = myresopnse[n].UNION_CD;
							PhoneExt.value = myresopnse[n].EXTENSION;
							DeptID.value = myresopnse[n].DEPTID;
							LastName.value = myresopnse[n].LAST_NAME;
							FirstName.value = myresopnse[n].FIRST_NAME;
                            EmpStatus.value=myresopnse[n].STATUS;
                            logUser.value =myresopnse[n].USERID;
                            var userIDVal  = myresopnse[n].USERID;
                			Email.value = userIDVal.concat("@exchange.fullerton.edu");
						  // EmplID.value = this.value;
                                rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    alert("No matching records found");
                
                	 DeptName.value = null;
                    BargainingUnit.value = null;
                    PhoneExt.value = null;
                    DeptID.value = null;
                    LastName.value = null;
                    FirstName.value =null;
                    EmpStatus.value=null;
                	Email.value = null;
           			 gifModal.style.display = "none";

                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_StudentID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_StudentID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
//var userID = logUser.value;
        //alert("userID="+userID);
        $.ajax({
            type: 'GET',
            url: "/bin/getCertEligibility",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

               EmpStatus.value=myresopnse[0].STATUS;
              
                DeptName.value = myresopnse[0].DEPTNAME;
                BargainingUnit.value = myresopnse[0].UNION_CD;
                PhoneExt.value = myresopnse[0].EXTENSION;
                DeptID.value = myresopnse[0].DEPTID;
                LastName.value = myresopnse[0].LAST_NAME;
                FirstName.value = myresopnse[0].FIRST_NAME;
                logUser.value =myresopnse[0].USERID;
                var userIDVal  = myresopnse[0].USERID;
                Email.value = userIDVal.concat("@exchange.fullerton.edu");
				//EmplID.value = this.value;


                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    col.push("EMPLID");

                    col.push("LAST_NAME");

                    col.push("FIRST_NAME");

                    col.push("DEPTID");

                    col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
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
                            tabCell.innerHTML = myresopnse[k][col[l]];
                        }
                    }

                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    /*var cancelButton = document.createElement("input");
                    cancelButton.type = "button";
                    cancelButton.setAttribute("class", "cancelBtn");
                    cancelButton.id = "cBtn";
                    cancelButton.value = "Cancel";
                    cancelButton.onclick = function(event) {
                        modal.style.display = "none";
                    };
                    

                    footerModal.appendChild(cancelButton);*/
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {

                            DeptName.value = myresopnse[n].DEPTNAME;
							BargainingUnit.value = myresopnse[n].UNION_CD;
							PhoneExt.value = myresopnse[n].EXTENSION;
							DeptID.value = myresopnse[n].DEPTID;
							LastName.value = myresopnse[n].LAST_NAME;
							FirstName.value = myresopnse[n].FIRST_NAME;
                            EmpStatus.value=myresopnse[n].STATUS;
                            var userIDVal  = myresopnse[n].USERID;
                             logUser.value =myresopnse[n].USERID;
               			   Email.value = userIDVal.concat("@exchange.fullerton.edu");
						  // EmplID.value = this.value;
                                rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    alert("No matching records found");
                
                	 DeptName.value = null;
                    BargainingUnit.value = null;
                    PhoneExt.value = null;
                    DeptID.value = null;
                    LastName.value = null;
                    FirstName.value =null;
                    EmpStatus.value=null;
                	Email.value = null;
           			 gifModal.style.display = "none";


                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
 
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_Undergraduate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_Undergraduate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CalTech.value ="";
  GraduateProfessional.value="";
  Credential.value ="";
  GraduatePostBac.value="";
  DoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_CalTech_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_CalTech_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
 
  Undergraduate.value ="";
  GraduateProfessional.value="";
  Credential.value ="";
  GraduatePostBac.value="";
  DoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_GraduateProfessional_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_GraduateProfessional_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CalTech.value ="";
  Undergraduate.value="";
  Credential.value ="";
  GraduatePostBac.value="";
  DoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_Credential_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_Credential_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CalTech.value ="";
  Undergraduate.value="";
  GraduateProfessional.value ="";
  GraduatePostBac.value="";
  DoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_GraduatePostBac_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_GraduatePostBac_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CalTech.value ="";
  Undergraduate.value="";
  GraduateProfessional.value ="";
  Credential.value="";
  DoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DoctorateProgram_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DoctorateProgram_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  CalTech.value ="";
  Undergraduate.value="";
  GraduateProfessional.value ="";
  Credential.value="";
  GraduatePostBac.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_panel1587123018548_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_panel1587123018548_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_logUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_logUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible= false;
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_StudentID2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_StudentID2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var cwid = this.value;
//var userID = logUser.value;
        //alert("userID="+userID);
        $.ajax({
            type: 'GET',
            url: "/bin/getCertEligibility",
            data: {
                cwid: cwid
              	//userID : userID
            },
            dataType: 'json',

            success: function(myresopnse) {
                //alert("myresopnse.length="+myresopnse);
                // debugger;
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                var gifModal = document.getElementById('gifModal');
                if (myresopnse.length === 1) {

               //EmpStatus.value=myresopnse[0].STATUS;
              
               // DeptName.value = myresopnse[0].DEPTNAME;
               // BargainingUnit.value = myresopnse[0].UNION_CD;
                //PhoneExt.value = myresopnse[0].EXTENSION;
               // DeptID.value = myresopnse[0].DEPTID;
                DepLastName.value = myresopnse[0].LAST_NAME;
                DepFirstName.value = myresopnse[0].FIRST_NAME;
				//EmplID.value = this.value;


                gifModal.style.display = "none";

                } else if (myresopnse.length > 1) {

                    gifModal.style.display = "none";
                    modal.style.display = "block";

                    var col = [];

                    col.push("EMPLID");

                    col.push("LAST_NAME");

                    col.push("FIRST_NAME");

                    col.push("DEPTID");

                    col.push("DEPTNAME");

                    var table = document.createElement("table");
                    table.id = "tb";
                    var tr = table.insertRow(-1);
                    var headings = ["", "Emp ID", "Last Name", "First Name", "Department Id", "Department Name"];
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
                            tabCell.innerHTML = myresopnse[k][col[l]];
                        }
                    }

                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    /*var cancelButton = document.createElement("input");
                    cancelButton.type = "button";
                    cancelButton.setAttribute("class", "cancelBtn");
                    cancelButton.id = "cBtn";
                    cancelButton.value = "Cancel";
                    cancelButton.onclick = function(event) {
                        modal.style.display = "none";
                    };
                    

                    footerModal.appendChild(cancelButton);*/
                    //if(table.rows[1].cells[0].childNodes[0].checked){alert("hi");}else{alert("hello");}
                    var footerModal = document.getElementById("modal_footer");
                    var okButton = document.createElement("input");
                    okButton.type = "button";
                    okButton.setAttribute("class", "okBtn");
                    //okButton.id = "okBtn";
                    okButton.value = "Ok";
                    okButton.onclick = function(event) {
                        /*if (cbidHidden.value === null) {
                            alert("Please select any one of the Staff");
                            modal.style.display = "block";
                        }*/
                        var n;
                        var rButtonStatus;
                        //var rButtonStatusFalse;
                        var rButtons = document.getElementsByClassName("rb");
                        for (n = 0; n < rButtons.length; n++) {
                            if (rButtons[n].checked === false) {

                                rButtonStatus = false;
                            } else {

                            /*DeptName.value = myresopnse[n].DEPTNAME;
							BargainingUnit.value = myresopnse[n].UNION_CD;
							PhoneExt.value = myresopnse[n].EXTENSION;
							DeptID.value = myresopnse[n].DEPTID;*/
							DepLastName.value = myresopnse[n].LAST_NAME;
							DepFirstName.value = myresopnse[n].FIRST_NAME;
                             // EmpStatus.value=myresopnse[n].STATUS;
						  // EmplID.value = this.value;
                                rButtonStatus = true;
                              modal.style.display = "none";
                                break;
                            }
                        }
                        if (rButtonStatus === false) {
                            alert("Please select the department");
                            modal.style.display = "block";
                        }
                    };
                    var footerModal = document.getElementById("modal_footer");

                    footerModal.appendChild(okButton);

                } 
              else {
                    alert("No matching records found");
                
                	DepLastName.value = null;
					DepFirstName.value = null;
           			 gifModal.style.display = "none";


                }
                
                span.onclick = function() {

                    modal.style.display = "none";
                };

            }
        });
 
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DepUndergraduate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DepUndergraduate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DepCalTech.value ="";
  DepGraduateProfessional.value="";
  DepCredential.value ="";
  DepGraduatePostBac.value="";
  DepDoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DepCalTech_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DepCalTech_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DepUndergraduate.value ="";
  DepGraduateProfessional.value="";
  DepCredential.value ="";
  DepGraduatePostBac.value="";
  DepDoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DepGraduateProfessional_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DepGraduateProfessional_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DepUndergraduate.value ="";
  DepCalTech.value="";
  DepCredential.value ="";
  DepGraduatePostBac.value="";
  DepDoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DepCredential_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DepCredential_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DepUndergraduate.value ="";
  DepCalTech.value="";
  DepGraduateProfessional.value ="";
  DepGraduatePostBac.value="";
  DepDoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DepGraduatePostBac_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DepGraduatePostBac_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DepUndergraduate.value ="";
  DepCalTech.value="";
  DepGraduateProfessional.value ="";
  DepCredential.value="";
  DepDoctorateProgram.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_DepDoctorateProgram_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_DepDoctorateProgram_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){
  DepUndergraduate.value ="";
  DepCalTech.value="";
  DepGraduateProfessional.value ="";
  DepCredential.value="";
  DepGraduatePostBac.value = "";
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_HumanResourceStaff_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_HumanResourceStaff_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (HumanResourceDate.value === null) {
  var dateString = new Date().toLocaleString("en-US", {
    timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
  }).replace(/[^ -~]/g, '');
  var dateObject = new Date(dateString);
  var curyear = dateObject.getFullYear();
  var curyearMonth = dateObject.getMonth() + 1;
  var curyearDay = dateObject.getDate();
  var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  HumanResourceDate.value = d;
  HumanResourceDate.enabled = false;
}else{
  HumanResourceDate.enabled = false;       
}
if(this.value == "1"){
  HumanResourceStaffTitle.value="Benefits Specialist";
  StaffPhone.value="6572783340";
  HumanResourceStaffTitle.enabled = false;
  StaffPhone.enabled= false;
 }else if(this.value == "2"){
  HumanResourceStaffTitle.value="Benefits Manager";
  StaffPhone.value="6572785311";
  HumanResourceStaffTitle.enabled = false;
  StaffPhone.enabled= false;
 }else if(this.value == "3"){
  HumanResourceStaffTitle.value="Benefits and Wellness Coordinator";
  StaffPhone.value="6572784576";
   HumanResourceStaffTitle.enabled = false;
  StaffPhone.enabled= false;
 }else if(this.value == "4"){
  HumanResourceStaffTitle.value="Benefits Analyst";
  StaffPhone.value="6572788020";
   HumanResourceStaffTitle.enabled = false;
  StaffPhone.enabled= false;
 }else if(this.value == "5"){
  HumanResourceStaffTitle.value="Benefits Analyst";
  StaffPhone.value="6572783440";
  HumanResourceStaffTitle.enabled = false;
  StaffPhone.enabled= false;
}
        }
	}
}
/**
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;


if (EmplID.value !== null && FirstName.value !== null && LastName !== null) {
  submitFlag=0;
      
 } else{
   
   var modal = document.getElementById("errorPopup");
       var para = document.getElementById("para");
    para.innerHTML = "";
    para.innerHTML = "Please enter Empl ID, First Name, Last Name";
    var errorBody = document.getElementById('errorData');
    errorBody.innerHTML = "";
    errorBody.appendChild(para);
    var footerModal = document.getElementById("errorPopup-footer");
    var okButton = document.createElement("input");
    okButton.type = "button";
    okButton.setAttribute("class", "okBtn");
    //okButton.id = "okBtn";
    okButton.value = "Ok";
    okButton.onclick = function(event) {
        modal.style.display = "none";
    };
    footerModal.appendChild(okButton);
    submitFlag=1;
    modal.style.display = "block";
    
 }


if( submitFlag === 0){
  getPdf();
}

  

function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/certificate-of-eligibility/certificate-of-eligibility');
            jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplID.value + ")" + "_" + Date.now());          
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
 * @function certificate_of_eligibility_certificate_of_eligibility.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
certificate_of_eligibility_certificate_of_eligibility.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            guideBridge.submit();

        }
	}
}
