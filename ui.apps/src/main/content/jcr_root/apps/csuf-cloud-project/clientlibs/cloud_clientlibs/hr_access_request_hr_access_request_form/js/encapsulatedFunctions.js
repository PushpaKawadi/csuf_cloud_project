
//Do not change this file.
var hr_access_request_hr_access_request_form = window.hr_access_request_hr_access_request_form = window.hr_access_request_hr_access_request_form || {};
/**
 * @function hr_access_request_hr_access_request_form.generated_IsFAR_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
hr_access_request_hr_access_request_form.generated_IsFAR_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nif(StageIndicator.value === null || StageIndicator.value == \"ToManager\" || StageIndicator.value == \"ToRequestor\"){\n  \n  if(PTFAppointmentsAdd.value==1 || PTFApprovalAdd.value==1 || RecruitingAdd.value==1 )\n{\n   IsFAR.value = 1;\n  }\n  else{\n    IsFAR.value = 0;\n  }\n}\n";
            return eval(code);
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_IsFAR_calc1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
hr_access_request_hr_access_request_form.generated_IsFAR_calc1 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nif(StageIndicator.value === null || StageIndicator.value == \"ToManager\" || StageIndicator.value == \"ToRequestor\"){\n  \n  if(PTFAppointmentsAdd.value==1 || PTFApprovalAdd.value==1 || RecruitingAdd.value==1 )\n{\n   IsFAR.value = 1;\n  }\n}\n";
            return eval(code);
        }
	}
}
/**
 * @function hr_access_request_hr_access_request_form.generated_IsFilenet_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
hr_access_request_hr_access_request_form.generated_IsFilenet_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value === null || StageIndicator.value == \"ToManager\" || StageIndicator.value == \"ToRequestor\"){\n  \n  if( OthersHumanResource.value==1){   \n   IsFilenet.value = 1;\n  }\n  else{\n    IsFilenet.value = 0;\n  }\n}\n";
            return eval(code);
        }
	}
}
