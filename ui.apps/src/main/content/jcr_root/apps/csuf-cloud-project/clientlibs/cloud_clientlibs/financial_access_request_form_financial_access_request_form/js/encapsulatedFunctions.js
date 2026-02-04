
//Do not change this file.
var financial_access_request_form_financial_access_request_form = window.financial_access_request_form_financial_access_request_form = window.financial_access_request_form_financial_access_request_form || {};
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FDRAddButton_enabled0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
financial_access_request_form_financial_access_request_form.generated_FDRAddButton_enabled0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rowcount1 = FinanceDistRoleTable.instanceManager.instanceCount;\nvar optionVal = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Option.value;\nvar roleVal = FinanceDistRoleTable.instanceManager.instances[FinanceDistRoleTable.instanceIndex].Role.value;\nif(rowcount1 <= 1 && optionVal !== null && roleVal !== null){\nthis.enabled = false;\n} else{\n  this.enabled = true;\n}\n\nif(rowcount1 <= 1 && optionVal === null && roleVal === null){\nFDRButtonsPanel.FDRRemoveButton.enabled = false;\n} else{\n FDRButtonsPanel.FDRRemoveButton.enabled = true;\n}";
            return eval(code);
        }
	}
}
/**
 * @function financial_access_request_form_financial_access_request_form.generated_FDRAddButton_enabled00
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
financial_access_request_form_financial_access_request_form.generated_FDRAddButton_enabled00 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rowcount1 = FinanceCoreRoleTable.instanceManager.instanceCount;\nvar optionVal = FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreOption.value;\nvar roleVal = FinanceCoreRoleTable.instanceManager.instances[FinanceCoreRoleTable.instanceIndex].CoreRole.value;\nif(rowcount1 <= 1 && optionVal !== null && roleVal !== null){\nthis.enabled = false;\n} else{\n  this.enabled = true;\n}\n\nif(rowcount1 <= 1 && optionVal === null && roleVal === null){\nFCRButtonsPanel.FDRRemoveButton.enabled = false;\n} else{\nFCRButtonsPanel.FDRRemoveButton.enabled = true;\n}";
            return eval(code);
        }
	}
}
