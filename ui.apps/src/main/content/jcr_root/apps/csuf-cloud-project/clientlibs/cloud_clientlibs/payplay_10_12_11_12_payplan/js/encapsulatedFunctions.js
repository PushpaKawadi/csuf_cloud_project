
//Do not change this file.
var payplay_10_12_11_12_payplan = window.payplay_10_12_11_12_payplan = window.payplay_10_12_11_12_payplan || {};
/**
 * @function payplay_10_12_11_12_payplan.generated_annualSalary_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
payplay_10_12_11_12_payplan.generated_annualSalary_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(monthSal.value !== null && daystowork.value !== null && possibleworkdays.value !== null){\n  annualSalary.value = ((monthSal.value).substring(1, (monthSal.value).length) * daystowork.value * 12)/possibleworkdays.value;\n}\n";
            return eval(code);
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_projectedEarnedSalary_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
payplay_10_12_11_12_payplan.generated_projectedEarnedSalary_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(monthSal1.value !== \"\" && monthstowork.value !== \"\"){\n  \n var projEarned = ((monthSal1.value).substring(1,(monthSal1.value).length)*monthstowork.value);\n\n  \n  projectedEarnedSalary.value = projEarned;\n}";
            return eval(code);
        }
	}
}
/**
 * @function payplay_10_12_11_12_payplan.generated_settlementAmount_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
payplay_10_12_11_12_payplan.generated_settlementAmount_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(annualSalary1.value !== \"\" && projectedEarnedSalary1.value !== \"\"){\n\n  settlementAmount.value = ((annualSalary1.value).substring(1,(annualSalary1.value).length)- (projectedEarnedSalary1.value).substring(1,(projectedEarnedSalary1.value).length));\n\n}";
            return eval(code);
        }
	}
}
