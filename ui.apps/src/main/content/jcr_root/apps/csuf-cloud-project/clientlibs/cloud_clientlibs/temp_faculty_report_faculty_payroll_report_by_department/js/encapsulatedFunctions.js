
//Do not change this file.
var temp_faculty_report_faculty_payroll_report_by_department = window.temp_faculty_report_faculty_payroll_report_by_department = window.temp_faculty_report_faculty_payroll_report_by_department || {};
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_aftiaDescCWID_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_aftiaDescCWID_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = " \n  var txt = JobCode.value;\nnumb = txt.match(/\\d{4}/g).join(\",\");\naftiaDescCWID.value = Department.value + \" \"+numb;";
            return eval(code);
        }
	}
}
