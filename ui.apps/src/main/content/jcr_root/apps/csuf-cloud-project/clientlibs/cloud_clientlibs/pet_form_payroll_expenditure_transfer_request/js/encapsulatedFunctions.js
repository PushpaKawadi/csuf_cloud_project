
//Do not change this file.
var pet_form_payroll_expenditure_transfer_request = window.pet_form_payroll_expenditure_transfer_request = window.pet_form_payroll_expenditure_transfer_request || {};
/**
 * @function pet_form_payroll_expenditure_transfer_request.generated_panel1646818566862_visible0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
pet_form_payroll_expenditure_transfer_request.generated_panel1646818566862_visible0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "this.visible = false;";
            return eval(code);
        }
	}
}
/**
 * @function pet_form_payroll_expenditure_transfer_request.generated_AccountFieldValidation_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
pet_form_payroll_expenditure_transfer_request.generated_AccountFieldValidation_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "debugger;\nif(StageIndicator.value === null || StageIndicator.value === \"ToInitiator\"){\n \nvar rowcount = table.Row1.instanceManager.instanceCount;\nvar sheet = [];\nfor (k = 0; k < rowcount; k++) {\n\tsheet[k] = {};\n\tsheet[k].Emp_ID = table.Row1.instanceManager.instances[k].Emp_ID.value;\n\tsheet[k].HR_Dept_ID = table.Row1.instanceManager.instances[k].HRDeptID.value;\n\tsheet[k].Position_Number = table.Row1.instanceManager.instances[k].PositionNo.value;\n\tsheet[k].Emp_Name = table.Row1.instanceManager.instances[k].Emp_Name.value;\n\tsheet[k].Empl_Record = table.Row1.instanceManager.instances[k].Emp_Record.value;\n\tsheet[k].Charge_Period = table.Row1.instanceManager.instances[k].ChargePeriod.value;\n\tsheet[k].Check = table.Row1.instanceManager.instances[k].PaycheckNo.value;\n\tsheet[k].Total_Amount = table.Row1.instanceManager.instances[k].TotalAmtChanged.value;\n\tsheet[k].Transfer_Percent = table.Row1.instanceManager.instances[k].TransferPercentage.value;\n\tsheet[k].Transfer_Amount = table.Row1.instanceManager.instances[k].TransferAmt.value;\n\tsheet[k].Credit_Dept = table.Row1.instanceManager.instances[k].Credit_Dept.value;\n\tsheet[k].Credit_Fund = table.Row1.instanceManager.instances[k].Credit_Funds.value;\n\tsheet[k].Credit_Class = table.Row1.instanceManager.instances[k].Credit_Class.value;\n\tsheet[k].Credit_Project = table.Row1.instanceManager.instances[k].Credit_Project.value;\n\tsheet[k].Credit_Program = table.Row1.instanceManager.instances[k].Credit_Program.value;\n\tsheet[k].Credit_Account = table.Row1.instanceManager.instances[k].Credit_Account.value;\n\tsheet[k].Debit_Dept = table.Row1.instanceManager.instances[k].Debit_Dept.value;\n\tsheet[k].Debit_Funds = table.Row1.instanceManager.instances[k].Debit_Funds.value;\n\tsheet[k].Debit_Class = table.Row1.instanceManager.instances[k].Debit_Class.value;\n\tsheet[k].Debit_Project = table.Row1.instanceManager.instances[k].Debit_Project.value;\n\tsheet[k].Debit_Account = table.Row1.instanceManager.instances[k].Debit_Account.value;\n\tsheet[k].Debit_Program = table.Row1.instanceManager.instances[k].Debit_Program.value;\n\tif (table.Row1.instanceManager.instances[k].PermanentFundChange.value == \"0\") {\n\t\tsheet[k].Change = \"Y\";\n\t}\n\tif (table.Row1.instanceManager.instances[k].PermanentFundChange.value == \"1\") {\n\t\tsheet[k].Change = \"N\";\n\t}\n\n\tsheet[k].TransferAmt_Benefits = table.Row1.instanceManager.instances[k].TransferAmt_Benefits.value;\n}\nTableArray.value = JSON.stringify(sheet);\n}";
            return eval(code);
        }
	}
}
