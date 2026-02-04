
//Do not change this file.
var finance_doa_access_request_form_finance_doa_access_request_form = window.finance_doa_access_request_form_finance_doa_access_request_form = window.finance_doa_access_request_form_finance_doa_access_request_form || {};
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_MaxAuthAmt_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {number}
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_MaxAuthAmt_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value===null || StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\nif(TravelReqAdd.value==\"1\"){\n  MaxAuthAmt.enabled=true;\n}\n /* if(TravelReqRemove.value==\"2\"){\n    MaxAuthAmt.enabled=true;\n  } */\n if(TravelReqRemove.value === null && TravelReqAdd.value === null){\n    MaxAuthAmt.value = \"\";\n    MaxAuthAmt.enabled = false;\n  }\n}";
            return eval(code);
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelCommentsOnly_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelCommentsOnly_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value===null || StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n  \n  debugger;\nif (TravelReqAdd.value == \"1\" || TravelReqRemove.value == \"1\" || TravelExpAdd.value == \"1\" || TravelExpRemove.value==\"1\" || APAdd.value == \"1\" || APRemove.value == \"1\" || BudgetTransferAdd.value ==\"1\" || BudgetTransferRemove.value ==\"1\" ) {\n    var val1 = TravelCommentsOnly.value;\n    TravelCommentsOnly.enabled = false; \n  TravelCommentsOnly.value = val1;\n}\nelse{\n   var val2 = TravelCommentsOnly.value;\n   TravelCommentsOnly.enabled = true;\n   TravelCommentsOnly.value = val2;\n}\n  \n  if (TravelReqAdd.value == \"1\" || TravelReqRemove.value == \"1\" ){\n     button7.enabled = true;\n    button8.enabled = true;\n    if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      TravelReqOtherDept.enabled = true;\n    }\n  }else{\n    button7.enabled = false;\n    button8.enabled = false;\n    if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      TravelReqOtherDept.enabled = false;\n    }\n  }\n    if(TravelExpAdd.value == \"1\" || TravelExpRemove.value==\"1\"){\n      button5.enabled = true;\n      button6.enabled = true;\n      if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      TravelOtherDepts.enabled = true;\n    }\n    } else{\n      button5.enabled = false;\n      button6.enabled = false;\n      if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      TravelOtherDepts.enabled = false;\n    }\n    }\n  if(APAdd.value == \"1\" || APRemove.value == \"1\" ){\n    button3.enabled = true;\n    button4.enabled = true;\n     if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      APOtherDepts.enabled = true;\n    }\n  }else{\n     button3.enabled = false;\n    button4.enabled = false;\n     if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      APOtherDepts.enabled = false;\n    }\n  }\n  if(BudgetTransferAdd.value ==\"1\" || BudgetTransferRemove.value ==\"1\" ) {\n    button1.enabled = true;\n    button2.enabled = true;\n    if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      BudgetTransferOtherDepts.enabled = true;\n    }\n  }else{\n    button1.enabled = false;\n    button2.enabled = false;\n    if(StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\"){\n      BudgetTransferOtherDepts.enabled = false;\n    }\n  }\n\n}";
            return eval(code);
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelDiv_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelDiv_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nif(StageIndicator.value===null || StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\") {\n  \nif (TravelReqAdd.value == \"1\" || TravelReqRemove.value == \"1\" || TravelExpAdd.value == \"1\" || TravelExpRemove.value==\"1\" || APAdd.value == \"1\" || APRemove.value == \"1\" || BudgetTransferAdd.value ==\"1\" || BudgetTransferRemove.value ==\"1\" ) {\n    TravelDiv.enabled = false;\n}\nelse{\n  TravelDiv.enabled = true;\n}\n  \n    }\n";
            return eval(code);
        }
	}
}
/**
 * @function finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelSubDiv_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
finance_doa_access_request_form_finance_doa_access_request_form.generated_TravelSubDiv_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value===null || StageIndicator.value == \"ToRequestor\" || StageIndicator.value == \"ToFSBusinessAnalyst\") {\n  debugger;\nif (TravelReqAdd.value == \"1\" || TravelReqRemove.value == \"1\" || TravelExpAdd.value == \"1\" || TravelExpRemove.value==\"1\" || APAdd.value == \"1\" || APRemove.value == \"1\" || BudgetTransferAdd.value ==\"1\" || BudgetTransferRemove.value ==\"1\" ) {\n    TravelSubDiv.enabled = false;\n}\nelse{\n  TravelSubDiv.enabled = true;\n}\n  \n}\n";
            return eval(code);
        }
	}
}
