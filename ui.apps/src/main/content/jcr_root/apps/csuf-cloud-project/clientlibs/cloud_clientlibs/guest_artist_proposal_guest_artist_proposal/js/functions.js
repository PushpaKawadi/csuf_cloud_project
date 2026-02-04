/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    getStudentDetails();
}

function getStudentDetails() {

    if (StageIndicator.value === null) {
     

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(response) {
                //var userValue = response.userId;
                //var userValue = 'yeatsliu';
                var userValue = 'veronica.maciel';
              //var userValue = 'n_moody';
                

                workflow_initiator.value = userValue;
  
                $.ajax({
                type: 'GET',
                url: "/bin/classroomLabEquipmentProposalServlet",

                data: {
                    STUDENT_USERID: userValue,        
                    action: "CSF_DEPARTMENT_DATA"
                },

                    dataType: 'json',
                    success: function(response) {
                                            
                        if (response.length === 1) {
                          debugger;
                            CWID.value = response[0].EMPLID;
                        	CWID.enabled = false;
							
                        	FirstName.value = response[0].FIRST_NAME;
                        	LastName.value = response[0].LAST_NAME;
                        	//Phone.value = response[0].CELL_PHONE;
                        	Email.value = "soumya.ravindra@thoughtfocus.com";
                        	Initiator_UserID.value = userValue;
                            Ful_College.value = response[0].FUL_COLLEGE;
                            Dept_Id.value = response[0].DEPTID;
                        	FullName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
                        	FullName.enabled = false;
                        	LastName.enabled = false;
                        	Phone.enabled = false;
                        	Email.enabled = false;
                            
                           

                        } else if (response.length > 1) {

                            var modal = document.getElementById('myModal');

                          
                            var col = [];

                            col.push("FIRST_NAME");
                            col.push("LAST_NAME");
                            col.push("DEPTID");
                            col.push("FUL_COLLEGE");
                          col.push("EMPLID");

                            var table = document.createElement("table");
                            table.id = "tb";
                            var tr = table.insertRow(-1);
                            var headings = ["", "FIRST_NAME", "LAST_NAME", "DEPTID", "FUL_COLLEGE","EMPLID" ];
                            for (var j = 0; j < headings.length; j++) {
                                var th = document.createElement("th");
                                th.innerHTML = headings[j];
                                tr.appendChild(th);
                            }
                            for (var k = 0; k < response.length; k++) {
                                tr = table.insertRow(-1);

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
                                    tabCell.innerHTML = response[k][col[l]];
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
                                     		CWID.value = response[n].EMPLID;
                                            FirstName.value = response[n].FIRST_NAME;
                        	                LastName.value = response[n].LAST_NAME;
                        	                //Phone.value = response[n].CELL_PHONE;
                        	                Email.value = "soumya.ravindra@thoughtfocus.com";
                        	                Student_UserId.value = userValue;
                        	                FullName.value = response[n].FIRST_NAME + " " + response[n].LAST_NAME;
                                       		Ful_College.value = response[n].FUL_COLLEGE;
                                            Dept_Id.value = response[n].DEPTID;
                                      

                                        rButtonStatus = true;
                                        modal.style.display = "none";
                                        break;

                                    }
                                }
                                if (rButtonStatus === false) {
                                    showErrorModal("Alert!", "Please select the program");
                                    modal.style.display = "block";
                                }
                            };
                            //var footerModal = document.getElementById("modal_footer");

                            footerModal.appendChild(okButton);

                        } else {
                            showErrorModal("Alert !", "No matching records found");
                        }
                    }
                });
            },
            error: function() {
                showErrorModal("Alert !", "No matching records found");
            }
        });
    }
}








        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  InitiatorSignaturePanel.visible = true;
  ProductionSignaturePanel.visible = false;
  ChairSignaturePanel.visible = false;
}
if(StageIndicator.value == "ToProductionOffice"){
  InitiatorSignaturePanel.visible = true;
  InitiatorSignaturePanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  ChairSignaturePanel.visible = false;
  ApplicantInformationPanel.enabled = false;
  ArtistInformationPanel.enabled = false;
  RequestForWavierPanel.enabled = false;
  
  
}
if(StageIndicator.value == "ToChair"){
  InitiatorSignaturePanel.visible = true;
  InitiatorSignaturePanel.enabled = false;
  ProductionSignaturePanel.visible = true;
  ProductionSignaturePanel.enabled = false;
  ChairSignaturePanel.visible = true;
  ApplicantInformationPanel.enabled = false;
  ArtistInformationPanel.enabled = false;
  RequestForWavierPanel.enabled = false;

}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_CaseId_init0 = function (scope) {
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
 * @function guest_artist_proposal_guest_artist_proposal.generated_CWID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_CWID_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_FirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_FirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_LastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_LastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_Email_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_Email_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_InfoDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_InfoDate_init0 = function (scope) {
    with(this) {
        with(scope) {
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
 this.value = d;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ParkingDD_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ParkingDD_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  ParkingDate.enabled = true;
}else{
  ParkingDate.enabled = false;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ParkingDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ParkingDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_FormInitiatedCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_FormInitiatedCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  InitiatedByTF.enabled = true;
  InitiatedDate.enabled = true;
  InitiatedDate.mandatory =true;
  InitiatedByTF.mandatory = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_InitiatedByTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_InitiatedByTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_CPACCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_CPACCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value ==1){
  CPACByTF.enabled = true;
  CPACDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_CPACByTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_CPACByTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_CPACDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_CPACDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_VerificationCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_VerificationCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  VerificationByTF.enabled = true;
  VerificationDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_VerificationByTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_VerificationByTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_VerificationDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_VerificationDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_SubmittedDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_SubmittedDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  SubmittedDeptTF.enabled = true;
  SubmittedDeptDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_SubmittedDeptTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_SubmittedDeptTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_SubmittedDeptDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_SubmittedDeptDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ApprovalProductionCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ApprovalProductionCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  ApprovalProductionTF.enabled = true;
  ApprovalProductionDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ApprovalProductionTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ApprovalProductionTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ApprovalProductionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ApprovalProductionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_FoundationCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_FoundationCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == 1){
  FoundationByTF.enabled = true;
  FoundationDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_FoundationByTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_FoundationByTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_FoundationDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_FoundationDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ApprovalDeptCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ApprovalDeptCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  ApprovalDeptTF.enabled = true;
  ApprovalDeptDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ApprovalDeptTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ApprovalDeptTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ApprovalDeptDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ApprovalDeptDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PermitIDCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PermitIDCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  PermitIDTF.enabled = true;
  PermitIDDate.enabled = true;
  PermitId.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PermitId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PermitId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PermitIDTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PermitIDTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PermitIDDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PermitIDDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_RequisitionCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_RequisitionCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if(this.value == 1){
  RequisitionByTF.enabled = true;
  RequisitionDate.enabled = true;
  POTF.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_POTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_POTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_RequisitionByTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_RequisitionByTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_RequisitionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_RequisitionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PaymentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PaymentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  PaymentTF.enabled = true;
  PaymentDate.enabled = true;
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PaymentTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PaymentTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_PaymentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_PaymentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_SoleCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_SoleCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value == 1) {
    OtherCB.enabled = false ;
    OtherTF.enabled = false;
}else{
    OtherCB.enabled = true;
    
}

        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_OtherCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_OtherCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  SoleCB.enabled = false;
  OtherTF.enabled = true;
}
else{
  SoleCB.enabled = true;
  
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_OtherTF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_OtherTF_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_InitiatorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_InitiatorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                InitiatorSign.value = FullName.value;
                InitiatorDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        InitiatorSign.enabled = false;
        InitiatorDate.enabled = false;
    } else {
        InitiatorSign.value = "";
        InitiatorDate.value = "";
    }
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_InitiatorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_InitiatorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ProductionCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ProductionCB_valueCommit0 = function (scope) {
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
                BudgetBy.value = userValue;
                ProductionDate.value = myresponse.SERVER_DATE;
                
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        BudgetBy.enabled = false;
        ProductionDate.enabled = false;
    } else {
        BudgetBy.value = "";
        ProductionDate.value = "";
       
    }
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_BudgetBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_BudgetBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ProductionDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ProductionDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
debugger;
if (StageIndicator.value === "ToChair") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {
                var userValue = myresponse.userName;
                ChairSignature.value = myresponse.userName;
                ChairDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ChairSignature.enabled = false;
        ChairDate.enabled = false;
    } else {
        ChairSignature.value = "";
        ChairDate.value = "";
    }
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_ChairDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_ChairDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_Dept_Id_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_Dept_Id_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/classroomLabEquipmentProposalServlet",
        data: {
            FUL_COLLEGE: Ful_College.value,
            DEPT_ID: this.value,
            action: "CSF_DEPARTMENT_CHAIR_DATA"
        },
        dataType: 'json',
        success: function(myresponse) {
           // FUL_COLLEGE.value = myresponse[0].FUL_COLLEGE;
           
            Chair_Email.value = "soumya.ravindra@thoughtfocus.com";
            Chair_Name.value = myresponse[0].CHAIR_NAME;
            Chair_EmpId.value = myresponse[0].CHAIR_EMPLID;
            Chair_UserId.value = myresponse[0].CHAIR_USERID;
        }
    });
}
        }
	}
}
/**
 * @function guest_artist_proposal_guest_artist_proposal.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

    getPdf();


function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/guest-artist-proposal/guest-artist-proposal');
            jsonData.append('fileName', FullName.value);          
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
 * @function guest_artist_proposal_guest_artist_proposal.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
guest_artist_proposal_guest_artist_proposal.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            /* if((OtherCB.value === null)  && (SoleCB.value === null)){
     showErrorModal("Alert", "Please select atleast one checkbox");
 guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].RequestForWavier[0].panel_1[0]");
} else{
  submitAction();
}
  
  function submitAction() {
*/
if (StageIndicator.value === null) {
    aftiaDescCWID.value = FullName.value + " " + CWID.value;
    EmailSubject.value = "Test - Guest Artist Proposal - " + CWID.value;
}
Email.value = "soumya.ravindra@thoughtfocus.com";
Chair_Email.value = "soumya.ravindra@thoughtfocus.com";
    guideBridge.submit();
  
        }
	}
}
