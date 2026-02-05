/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            var flag;


if (StageIndicator.value === null) {
  
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(response) {
            // gifModal.style.display = "block";

           // var userValue = response.userId;
           var userValue = 'mariana2'; // two Aid Year
            //var userValue = 'majesticallexi'; // one Aid Year
            // var userValue = 'mchoi88';			 	// no Aid Year
            workflow_initiator.value = userValue;
            getStudentDetails(userValue);
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}


function getStudentDetails(userValue) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCitizenShipData",
        data: {
            action: "CV_USER_DETAILS",
            userID: userValue
        },
        dataType: 'json',
        success: function(response) {
            if (response.length >= 1) {
                var studentCWID = response[0].EMPLID;
                getStudentAidYearDetails(studentCWID);
                //var aidYearFlag = getStudentAidYearDetails(studentCWID);
                firstName.value = response[0].FIRST_NAME;
                lastName.value = response[0].LAST_NAME;
                PhoneNo.value = response[0].CELL_PHONE;
                HiddenStudentUserID.value = response[0].USERID;
                studentIDNumber.value = studentCWID;
                cwid.value = studentCWID;
                //HiddenStudentEmail.value = response[0].PREF_EMAIL;
                HiddenStudentName.value = response[0].FIRST_NAME + " " + response[0].LAST_NAME;
            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
}

function getStudentAidYearDetails(studentCWID) {
    $.ajax({
        type: 'GET',
        url: "/bin/getTaxFilingStatementDetails",
        data: {
            action: 'STUDENT_DETAILS',
            cwid: studentCWID
        },
        dataType: 'json',
        success: function(response) {
            if (response.length > 0) {
                var aidYears = [];
                var aidYearsObj = {};
                var identifyAidYearFlag;
                for (var a = 0; a < response.length; a++) {
                    aidYears.push(response[a]);
                }
                for (var b = 0; b < aidYears.length; b++) {
                    aidYearsObj = aidYears[b];
                    for (var key in aidYearsObj) {
                        if ("AID_YEAR" == key) {
                            identifyAidYearFlag = "OneAidYear";
                            flag = "OneAidYear";
                        } else if ("SECOND_AID_YEAR" == key) {
                            identifyAidYearFlag = "TwoAidYear";
                            flag = "TwoAidYear";
                        }
                    }
                }
                var typeOfAidYear = getUrlParameters('aidYear');
                      
                if (typeOfAidYear == "0") {
                  //  singleAidYear();
                    aidYearPopup();
                } else if (typeOfAidYear == "1") {
                    singleAidYear();
                } else if (identifyAidYearFlag == "OneAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
                    singleAidYear();
                } else if (identifyAidYearFlag == "TwoAidYear" && (typeOfAidYear != "0" || typeOfAidYear != "1")) {
                    aidYearPopup();
                }  else {
                    showErrorModal("Alert !", "No matching records found for the Aid Year");
                }
            } else {
                showErrorModal("Alert !", "No matching records found");
            }
        }
    });
}


function aidYearPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
  debugger;
    var financialAidvalues = getAidYearValuesOnPopup(); 
          
    var formCodeVal = "";
  
    modal.style.display = "block";
    span.onclick = function() {
        if ((document.getElementById("button1").checked === false) && (document.getElementById("button2").checked === false)) {
            modal.style.display = "block";
            showErrorModal("Alert!", "Please select the financial aid year");
        } else {
            modal.style.display = "none";
        }
    };

    document.getElementById("button1").onclick = function() { 
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearOne;
        financialAidYear.value = financialAidYearVal;       
        formCode.value = financialAidvalues.FinAidYearFormCodeOne+"BUSP";
        formCodeVal = financialAidvalues.FinAidYearFormCodeOne+"BUSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);                                                   
    };

    document.getElementById("button2").onclick = function() { 
        modal.style.display = "none";
        var financialAidYearVal = financialAidvalues.FinAidYearTwo;
        aidYear.value = financialAidvalues.AidYearTwo;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = financialAidvalues.FinAidYearFormCodeTwo+"BUSP";
        formCodeVal = financialAidvalues.FinAidYearFormCodeTwo+"BUSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    };
}

function singleAidYear() {
  debugger;
    var typeOfAidYear = getUrlParameters('aidYear');
    var financialAidYearVal = "";
    var formCodeVal = "";
  
   var financialAidvalues = getAidYearValuesOnSingleAidYear(); 
  
    if (typeOfAidYear == '0') {
        financialAidYearVal = financialAidvalues.FinAidYearZero;
        aidYear.value = financialAidvalues.AidYearZero;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0BUSP";
        formCodeVal = "F0BUSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else if (typeOfAidYear == '1') {                 
        financialAidYearVal = financialAidvalues.FinAidYearOne;
        aidYear.value = financialAidvalues.AidYearZero;
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F1BUSP";
        formCodeVal = "F1BUSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    } else {
        financialAidYearVal = "2021-2022";
        aidYear.value = "2022";
        financialAidYear.value = financialAidYearVal;
        aidYearValue = financialAidYear.value;
        formCode.value = "F0BUSP";
        formCodeVal = "F0BUSP";
        getCDAFinancialAidYear(aidYearValue);
        checkforDuplicateSubmissions(formCodeVal, financialAidYearVal);
    }

}

if (StageIndicator.value !== null) {
    aidYearValue = financialAidYear.value;
    getCDAFinancialAidYear(aidYearValue);
}

function getCDAFinancialAidYear(financialAidYear) {
    var financialAidYearVal = financialAidYear;
    //var taxFilingYear = getFinancialAidTaxYear(financialAidYearVal);
    var taxFilingYear = aidYear.value-3;
    var headingTextVal = "<p><b>PARENT BUSINESS SUPPLEMENT (".concat(financialAidYearVal).concat(")</b></p>");

    var formTextVal = formCode.value;
    var TextOne = "";
    
        TextOne="<p><u><b>INSTRUCTIONS:</b></u>&nbsp;This form is required to provide additional business or farm information not shown on your parents' ".concat(taxFilingYear).concat(" IRS TaxTranscript. See definition of parent below.&nbsp;<i>Incomplete documents will not be returned. They will be disposed of in a secure manner, per university policy. This will delay processing.</i></p>");

   
    $("#BUSSFormText").html(formTextVal);
    $("#BUSSHeadingText").html(headingTextVal);
    $("#BUSSInstructionsText").html(TextOne);
}

function checkforDuplicateSubmissions(formCodeVal, financialAidYearVal) {
    var tableName = "AEM_STUDENT_INVESTMENT_VERIF";
    var financialAidDecisionColumnName = "FINANCIAL_AID_DECISION";
    var financialAidYearColumnName = "FINANCIAL_AID_YEAR";
    var formCodeColumnName = "FORM_CODE";
    var faDecision = "1";
    if (StageIndicator.value === null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getCitizenShipData",
            data: {
                action: 'CV_UPDATED_DUPLICATE_CHECK',
                cwid: cwid.value,
                faDecisionColumnName: financialAidDecisionColumnName,
                tableName: tableName,
                formCodeColumnName: formCodeColumnName,
                formCode: formCodeVal,
                faDecision: faDecision,
                financialAidYear: financialAidYearVal,
                financialAidYearColumn: financialAidYearColumnName
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length >= 1) {
                    showErrorModal("Alert!", "Duplicate submissions are not allowed");
                    submit1575264176703.enabled = false;
                }

            },
        });
    }
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    FinancialAidSignaturePanel.visible = false;
    disabledCutCopyPasteFunctionality();   //Function to disable Cut Copy Paste Functionality
}

if (StageIndicator.value == "ToFinancialAid") {
    StudentInformation.enabled = false;
    InstructionsPanel.enabled = false;
    SectionA_Panel.enabled = false;
    SectionB_Panel.enabled = false;
    StudentSignaturePanel.enabled = false;
    FinancialAidSignaturePanel.visible = true;
    FinancialAidSignaturePanel.enabled = true;
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

 

type: 'GET',

 

url:"/bin/getCaseID",

         

dataType: 'json',

         

success: function(myresponse){              

                 

                   caseId.value = myresponse.CASEID;

                                      

},

});
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_cwid_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_cwid_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_firstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_firstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_lastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_lastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Date_1_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Date_1_init0 = function (scope) {
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
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_financialAidYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_financialAidYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_BusinessType_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_BusinessType_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value=="3") {
    Corporation_Type.enabled=true;
} else {
    Corporation_Type.enabled=false;
    Corporation_Type.value="";
}

        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Corporation_Type_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Corporation_Type_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_FamilyMembersPercentage_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_FamilyMembersPercentage_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (this.value=="1") {
    FamilyMembersOwnershipPercentage.enabled=true;
} else {
    FamilyMembersOwnershipPercentage.enabled=false;
    FamilyMembersOwnershipPercentage.value="";
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_FamilyMembersOwnershipPercentage_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_FamilyMembersOwnershipPercentage_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_FamilyMembersOwnershipPercentage_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_FamilyMembersOwnershipPercentage_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value===null) {
  var val = this.value;
  if (val!==null){
    if(val.includes("%") === false){
      this.value = val+"%";
    }
  }
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Land_MarketValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Land_MarketValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landMarketValue = Land_MarketValue.value;
    if (landMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(landMarketValue);
    }
    var buildingMarketValue = Building_MarketValue.value;
    if (buildingMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(buildingMarketValue);
    }
    var machineryMarketValue = Machinery_MarketValue.value;
    if (machineryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(machineryMarketValue);
    }
    var equipmentMarketValue = Equipment_MarketValue.value;
    if (equipmentMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(equipmentMarketValue);
    }
    var inventoryMarketValue = Inventory_MarketValue.value;
    if (inventoryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(inventoryMarketValue);
    }
    var liveStockMarketValue = Livestock_MarketValue.value;
    if (liveStockMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(liveStockMarketValue);
    }

    Total_MarketValue.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Land_Debt_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Land_Debt_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landDebt = Land_Debt.value;
    if (landDebt !== null) {
        finalTotal = finalTotal + parseFloat(landDebt);
    }
    var buildingDebt = Building_Debt.value;
    if (buildingDebt !== null) {
        finalTotal = finalTotal + parseFloat(buildingDebt);
    }
    var machineryDebt = Machinery_Debt.value;
    if (machineryDebt !== null) {
        finalTotal = finalTotal + parseFloat(machineryDebt);
    }
    var equipmentDebt = Equipment_Debt.value;
    if (equipmentDebt !== null) {
        finalTotal = finalTotal + parseFloat(equipmentDebt);
    }
    var inventoryDebt = Inventory_Debt.value;
    if (inventoryDebt !== null) {
        finalTotal = finalTotal + parseFloat(inventoryDebt);
    }
    var liveStockDebt = Livestock_Debt.value;
    if (liveStockDebt !== null) {
        finalTotal = finalTotal + parseFloat(liveStockDebt);
    }

    Total_Debt.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Building_MarketValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Building_MarketValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landMarketValue = Land_MarketValue.value;
    if (landMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(landMarketValue);
    }
    var buildingMarketValue = Building_MarketValue.value;
    if (buildingMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(buildingMarketValue);
    }
    var machineryMarketValue = Machinery_MarketValue.value;
    if (machineryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(machineryMarketValue);
    }
    var equipmentMarketValue = Equipment_MarketValue.value;
    if (equipmentMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(equipmentMarketValue);
    }
    var inventoryMarketValue = Inventory_MarketValue.value;
    if (inventoryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(inventoryMarketValue);
    }
    var liveStockMarketValue = Livestock_MarketValue.value;
    if (liveStockMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(liveStockMarketValue);
    }

    Total_MarketValue.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Building_Debt_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Building_Debt_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landDebt = Land_Debt.value;
    if (landDebt !== null) {
        finalTotal = finalTotal + parseFloat(landDebt);
    }
    var buildingDebt = Building_Debt.value;
    if (buildingDebt !== null) {
        finalTotal = finalTotal + parseFloat(buildingDebt);
    }
    var machineryDebt = Machinery_Debt.value;
    if (machineryDebt !== null) {
        finalTotal = finalTotal + parseFloat(machineryDebt);
    }
    var equipmentDebt = Equipment_Debt.value;
    if (equipmentDebt !== null) {
        finalTotal = finalTotal + parseFloat(equipmentDebt);
    }
    var inventoryDebt = Inventory_Debt.value;
    if (inventoryDebt !== null) {
        finalTotal = finalTotal + parseFloat(inventoryDebt);
    }
    var liveStockDebt = Livestock_Debt.value;
    if (liveStockDebt !== null) {
        finalTotal = finalTotal + parseFloat(liveStockDebt);
    }

    Total_Debt.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Machinery_MarketValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Machinery_MarketValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landMarketValue = Land_MarketValue.value;
    if (landMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(landMarketValue);
    }
    var buildingMarketValue = Building_MarketValue.value;
    if (buildingMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(buildingMarketValue);
    }
    var machineryMarketValue = Machinery_MarketValue.value;
    if (machineryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(machineryMarketValue);
    }
    var equipmentMarketValue = Equipment_MarketValue.value;
    if (equipmentMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(equipmentMarketValue);
    }
    var inventoryMarketValue = Inventory_MarketValue.value;
    if (inventoryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(inventoryMarketValue);
    }
    var liveStockMarketValue = Livestock_MarketValue.value;
    if (liveStockMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(liveStockMarketValue);
    }

    Total_MarketValue.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Machinery_Debt_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Machinery_Debt_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landDebt = Land_Debt.value;
    if (landDebt !== null) {
        finalTotal = finalTotal + parseFloat(landDebt);
    }
    var buildingDebt = Building_Debt.value;
    if (buildingDebt !== null) {
        finalTotal = finalTotal + parseFloat(buildingDebt);
    }
    var machineryDebt = Machinery_Debt.value;
    if (machineryDebt !== null) {
        finalTotal = finalTotal + parseFloat(machineryDebt);
    }
    var equipmentDebt = Equipment_Debt.value;
    if (equipmentDebt !== null) {
        finalTotal = finalTotal + parseFloat(equipmentDebt);
    }
    var inventoryDebt = Inventory_Debt.value;
    if (inventoryDebt !== null) {
        finalTotal = finalTotal + parseFloat(inventoryDebt);
    }
    var liveStockDebt = Livestock_Debt.value;
    if (liveStockDebt !== null) {
        finalTotal = finalTotal + parseFloat(liveStockDebt);
    }

    Total_Debt.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Equipment_MarketValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Equipment_MarketValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landMarketValue = Land_MarketValue.value;
    if (landMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(landMarketValue);
    }
    var buildingMarketValue = Building_MarketValue.value;
    if (buildingMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(buildingMarketValue);
    }
    var machineryMarketValue = Machinery_MarketValue.value;
    if (machineryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(machineryMarketValue);
    }
    var equipmentMarketValue = Equipment_MarketValue.value;
    if (equipmentMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(equipmentMarketValue);
    }
    var inventoryMarketValue = Inventory_MarketValue.value;
    if (inventoryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(inventoryMarketValue);
    }
    var liveStockMarketValue = Livestock_MarketValue.value;
    if (liveStockMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(liveStockMarketValue);
    }

    Total_MarketValue.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Equipment_Debt_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Equipment_Debt_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landDebt = Land_Debt.value;
    if (landDebt !== null) {
        finalTotal = finalTotal + parseFloat(landDebt);
    }
    var buildingDebt = Building_Debt.value;
    if (buildingDebt !== null) {
        finalTotal = finalTotal + parseFloat(buildingDebt);
    }
    var machineryDebt = Machinery_Debt.value;
    if (machineryDebt !== null) {
        finalTotal = finalTotal + parseFloat(machineryDebt);
    }
    var equipmentDebt = Equipment_Debt.value;
    if (equipmentDebt !== null) {
        finalTotal = finalTotal + parseFloat(equipmentDebt);
    }
    var inventoryDebt = Inventory_Debt.value;
    if (inventoryDebt !== null) {
        finalTotal = finalTotal + parseFloat(inventoryDebt);
    }
    var liveStockDebt = Livestock_Debt.value;
    if (liveStockDebt !== null) {
        finalTotal = finalTotal + parseFloat(liveStockDebt);
    }

    Total_Debt.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Inventory_MarketValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Inventory_MarketValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landMarketValue = Land_MarketValue.value;
    if (landMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(landMarketValue);
    }
    var buildingMarketValue = Building_MarketValue.value;
    if (buildingMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(buildingMarketValue);
    }
    var machineryMarketValue = Machinery_MarketValue.value;
    if (machineryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(machineryMarketValue);
    }
    var equipmentMarketValue = Equipment_MarketValue.value;
    if (equipmentMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(equipmentMarketValue);
    }
    var inventoryMarketValue = Inventory_MarketValue.value;
    if (inventoryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(inventoryMarketValue);
    }
    var liveStockMarketValue = Livestock_MarketValue.value;
    if (liveStockMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(liveStockMarketValue);
    }

    Total_MarketValue.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Inventory_Debt_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Inventory_Debt_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landDebt = Land_Debt.value;
    if (landDebt !== null) {
        finalTotal = finalTotal + parseFloat(landDebt);
    }
    var buildingDebt = Building_Debt.value;
    if (buildingDebt !== null) {
        finalTotal = finalTotal + parseFloat(buildingDebt);
    }
    var machineryDebt = Machinery_Debt.value;
    if (machineryDebt !== null) {
        finalTotal = finalTotal + parseFloat(machineryDebt);
    }
    var equipmentDebt = Equipment_Debt.value;
    if (equipmentDebt !== null) {
        finalTotal = finalTotal + parseFloat(equipmentDebt);
    }
    var inventoryDebt = Inventory_Debt.value;
    if (inventoryDebt !== null) {
        finalTotal = finalTotal + parseFloat(inventoryDebt);
    }
    var liveStockDebt = Livestock_Debt.value;
    if (liveStockDebt !== null) {
        finalTotal = finalTotal + parseFloat(liveStockDebt);
    }

    Total_Debt.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Livestock_MarketValue_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Livestock_MarketValue_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landMarketValue = Land_MarketValue.value;
    if (landMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(landMarketValue);
    }
    var buildingMarketValue = Building_MarketValue.value;
    if (buildingMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(buildingMarketValue);
    }
    var machineryMarketValue = Machinery_MarketValue.value;
    if (machineryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(machineryMarketValue);
    }
    var equipmentMarketValue = Equipment_MarketValue.value;
    if (equipmentMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(equipmentMarketValue);
    }
    var inventoryMarketValue = Inventory_MarketValue.value;
    if (inventoryMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(inventoryMarketValue);
    }
    var liveStockMarketValue = Livestock_MarketValue.value;
    if (liveStockMarketValue !== null) {
        finalTotal = finalTotal + parseFloat(liveStockMarketValue);
    }

    Total_MarketValue.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_Livestock_Debt_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_Livestock_Debt_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var finalTotal = 0;
    var landDebt = Land_Debt.value;
    if (landDebt !== null) {
        finalTotal = finalTotal + parseFloat(landDebt);
    }
    var buildingDebt = Building_Debt.value;
    if (buildingDebt !== null) {
        finalTotal = finalTotal + parseFloat(buildingDebt);
    }
    var machineryDebt = Machinery_Debt.value;
    if (machineryDebt !== null) {
        finalTotal = finalTotal + parseFloat(machineryDebt);
    }
    var equipmentDebt = Equipment_Debt.value;
    if (equipmentDebt !== null) {
        finalTotal = finalTotal + parseFloat(equipmentDebt);
    }
    var inventoryDebt = Inventory_Debt.value;
    if (inventoryDebt !== null) {
        finalTotal = finalTotal + parseFloat(inventoryDebt);
    }
    var liveStockDebt = Livestock_Debt.value;
    if (liveStockDebt !== null) {
        finalTotal = finalTotal + parseFloat(liveStockDebt);
    }

    Total_Debt.value = finalTotal.toFixed(2);
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_checkbox1649834861348_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_checkbox1649834861348_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				studentSignature.value = HiddenStudentName.value;
				studentSignDate.value = myresponse.SERVER_DATE;			
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			studentSignature.enabled = false;       
			studentSignDate.enabled = false; 
				
	} else {
		studentSignature.value = "";
		studentSignDate.value = "";	   
	}
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_ipAddress_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_ipAddress_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {     		
  	$.getJSON("https://api.ipify.org?format=json", function(data) {                
        ipAddress.value = data.ip;        
    });
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_studentSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_studentSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_studentSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_studentSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_checkbox1649838422969_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_checkbox1649838422969_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToFinancialAid" ){
	if (this.value == 1) {
	   $.ajax({

			  type: 'GET',
			  url: "/bin/getLoggedInUserDetails",
			  dataType: 'json',

			  success: function(myresponse) {	
                var userValue = myresponse.userName;
				staffSignature.value = userValue;
				staffSignDate.value = myresponse.SERVER_DATE;		
                 financialAidAssignee.value = myresponse.userId;
			  },
			  error: function(error) {
				alert("error block=" + error);
			  }  
			});
			
			staffSignature.enabled = false;       
			staffSignDate.enabled = false; 
				
	} else {
	     staffSignature.value = "";
		staffSignDate.value = "";
      financialAidAssignee.value = "";
	}
}


        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_staffSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_staffSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_staffSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_staffSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled=false;
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_WorkflowInstanceID_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_WorkflowInstanceID_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null){
  	
  	var wId = localStorage.getItem("workItemId");
  	console.log("=workItemID=== " + wId);
	//if(this.value !== null){
		var instance = this.value;
  		var adobeSignDocumentName = 'Parent_W2_Statement.pdf';		
		var requestURL = '/bin/getInboxItemDetails?action=ADOBE_SIGN_DOCUMENT_ATTACHMENT&workItemId=' + wId + '&signedDocument=' + adobeSignDocumentName + '&workflowInstanceId=' + encodeURIComponent(instance);  		
		console.log(requestURL);
  
		$.ajax({
			type: "GET",
			contentType: "application/pdf; charset=utf-8",
			url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
			async: false,
			cache: false,
			dataType: "json",
			success: function(response) {

				if (response.length > "0") {					
					var mydiv = document.getElementById("gridView");
					mydiv.innerHTML = "";
					for (i = 0; i < response.length; i++) {						
						var jsonData = response[i];                      	
						var linkSource = ((window.location.protocol) + "//" + window.location.hostname + ':' + window.location.port) + "/bin/getTaskAttachmentFromProcessingInstance?assetPath=" + encodeURIComponent(jsonData.path);				  
                      	
						var downloadLink = document.createElement("a");
						downloadLink.id = ("a".concat(i));						
						var fName = jsonData.fileName;                      	

						downloadLink.innerText = fName;
						var para = document.createElement("p");
						para.innerText = "";
						mydiv.appendChild(para);
						mydiv.appendChild(downloadLink);
						downloadLink.href = linkSource;
						downloadLink.download = fName;
						//downloadLink.click();

					}
					var breakLine = document.createElement("p");
					breakLine.innerText = "";
					var docDiv = document.getElementById("gridView");
					docDiv.appendChild(breakLine);
				}
			},
			error: function(error) {
				console.log("error block=" + error);
			}
		});
	//}
}
        }
	}
}
/**
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (AidYear.value !== null) {
    getPdf();
}else{
  alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please Select Aid Year");
   }

function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/parent-business-supplement-form/parent-business-supplement-form');
            jsonData.append('fileName', StudentFullName.value);          
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
 * @function parent_business_supplement_form_parent_business_supplement_form.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
parent_business_supplement_form_parent_business_supplement_form.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (parentEmail.value === null) {
    showErrorModal("Alert !", "Please enter the parent email");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].parentEmail[0]");
} else if (parentEmail.value != confirmParentEmail.value) {
    showErrorModal("Alert !", "Parent email does not match");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].confirmParentEmail[0]");
} else if (checkbox1671624995983.value === null){
        checkbox1671624995983.mandatory = true;
        guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].InstructionsPanel[0].checkbox1671624995983[0]");
        showErrorModal("Alert", "Please read the Instructions carefully & check the Checkbox below");
} else if (BusinessType.value === "3" && Corporation_Type.value === null) {
    showErrorModal("Alert !", "Please enter the Corporation Type");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionA_Panel[0].Corporation_Type[0]");
} else if (FamilyMembersPercentage.value === "1" && OwnershipPercentage.value === null) {
    showErrorModal("Alert !", "Please enter the Ownership percentage");
    guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].SectionA_Panel[0].FamilyMembersOwnershipPercentage[0]");
} else {
    submitAction();
}

function submitAction() {
if(StageIndicator.value === null){
  aftiaDescCWID.value = HiddenStudentName.value+" "+cwid.value;
  EmailSubject.value = "Test - Parent Business Supplement Form - "+cwid.value;
  
  if(aidYear.value == "2022"){
    	documentNameForAdobeSign.value = "Parent Business Supplement Form - F0BUSP";
  }
  else if(aidYear.value == "2023"){
    	documentNameForAdobeSign.value = "Parent Business Supplement Form - F1BUSP";
  }

}
 HiddenStudentEmail.value = "thamizhvanan.sathiyamoorthy@thoughtfocus.com";
 guideBridge.submit();
}


        }
	}
}
