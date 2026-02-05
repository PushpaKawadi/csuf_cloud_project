
//Do not change this file.
var pre_performance_evaluation_pre_performance_evaluation = window.pre_performance_evaluation_pre_performance_evaluation = window.pre_performance_evaluation_pre_performance_evaluation || {};
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_ReviewPeriodFrom_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
pre_performance_evaluation_pre_performance_evaluation.generated_ReviewPeriodFrom_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(this.value !== null && ReviewPeriodTo.value !== null){\n  debugger;\n  var frmDate = new Date(this.value);\n  var toDate = new Date(ReviewPeriodTo.value);\n  if(frmDate > toDate){\n    showErrorModal(\"Alert!\",\"Invalid Date Range\");\n  }\n}\n  ";
            return eval(code);
        }
	}
}
/**
 * @function pre_performance_evaluation_pre_performance_evaluation.generated_checkDataExist_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
pre_performance_evaluation_pre_performance_evaluation.generated_checkDataExist_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nif (ReviewPeriodFrom.value !== null && ReviewPeriodTo.value !== null && DeptID.value !== null && EmpID.value !== null) {\n    var reviewFrom = ReviewPeriodFrom.value;\n    var reviewTo = ReviewPeriodTo.value;\n    var empid = EmpID.value;\n    var deptId = DeptID.value;\n  \n    $.ajax({\n\n        type: 'GET',\n\n        url: \"/bin/getEvaluationFormData\",\n        data: {\n            cwid: empid,\n            reviewPeriodTo: reviewTo,\n            reviewPeriodFrom: reviewFrom,\n            deptID: deptId,\n          action:\"PRE_EVAL_DATA\"\n        },\n        dataType: 'json',\n        success: function(myresopnse) {\n   \n            var resultLength = myresopnse.length;           \n          \n          if(resultLength > 0)   {\n              checkDataExist.value = \"true\";\n               showErrorModal(\"Alert!\",\"You have already submitted employee self evaluation data for the current review period\");\n              \n            } else{\n              checkDataExist.value = \"false\";               \n              \n            }    \n           /* if(userValue == \"true\")   {\n               modal.style.display = \"block\";\n              checkDataExist.value = userValue;\n            } else{\n               modal.style.display = \"none\";\n              checkDataExist.value = userValue;\n               generateDOR.visible = true;\n            } */   \n            \n\n        },\n        error: function(error) {\n            alert(\"error block=\" + error);\n        }\n    });\n\n}";
            return eval(code);
        }
	}
}
