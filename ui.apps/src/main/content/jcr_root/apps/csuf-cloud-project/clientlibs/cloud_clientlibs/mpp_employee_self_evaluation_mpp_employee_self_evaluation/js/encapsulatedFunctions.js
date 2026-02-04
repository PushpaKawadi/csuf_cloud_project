
//Do not change this file.
var mpp_employee_self_evaluation_mpp_employee_self_evaluation = window.mpp_employee_self_evaluation_mpp_employee_self_evaluation = window.mpp_employee_self_evaluation_mpp_employee_self_evaluation || {};
/**
 * @function mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_checkDataExist_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
mpp_employee_self_evaluation_mpp_employee_self_evaluation.generated_checkDataExist_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nif (ReviewPeriodFrom.value !== null && ReviewPeriodTo.value !== null && DeptID.value !== null && EmpID.value !== null) {\n    var reviewFrom = ReviewPeriodFrom.value;\n    var reviewTo = ReviewPeriodTo.value;\n    var empid = EmpID.value;\n    var deptId = DeptID.value;\n  \n    $.ajax({\n\n        type: 'GET',\n\n        url: \"/bin/getEvaluationFormData\",\n        data: {\n            cwid: empid,\n            reviewPeriodTo: reviewTo,\n            reviewPeriodFrom: reviewFrom,\n            deptID: deptId,\n\t\t\taction : \"MPP_SELF_EVAL_DATA\"\n        },\n        dataType: 'json',\n        success: function(myresopnse) {\n          document.getElementById('errorPopup1').style.display = \"none\";\n            var resultLength = myresopnse.length;\n          \n          \n                           generateDOR.visible = true;\n                        \n            if(resultLength > 0)   {\n              checkDataExist.value = \"true\";\n               showErrorModal(\"Alert!\",\"You have already submitted employee self evaluation data for the current review period\");\n              \n            } else{\n              checkDataExist.value = \"false\";               \n               generateDOR.visible = true;\n            }    \n            \n\n        },\n        error: function(error) {\n            alert(\"error block=\" + error);\n        }\n    });\n\n}";
            return eval(code);
        }
	}
}
