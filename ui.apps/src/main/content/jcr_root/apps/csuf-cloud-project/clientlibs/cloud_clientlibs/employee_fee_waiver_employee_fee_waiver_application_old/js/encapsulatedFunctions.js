
//Do not change this file.
var employee_fee_waiver_employee_fee_waiver_application_old = window.employee_fee_waiver_employee_fee_waiver_application_old = window.employee_fee_waiver_employee_fee_waiver_application_old || {};
/**
 * @function employee_fee_waiver_employee_fee_waiver_application_old.generated_wr_Cd1_validate0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
employee_fee_waiver_employee_fee_waiver_application_old.generated_wr_Cd1_validate0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if (wr_Cd1.value == 2 || wr_Cd2.value == 2) { \n  \t\tcomment1.value = \"Please briefly explain how each course is related to the present assignment or job training\";\n    \t\n  \t\tcourseInfoComment.value = \"All courses taken on Fee Waiver must be taken for a traditional letter grade. A Career Development (CD) course is a course which is part of an approved individual Career Development Plan (CDP) and the CDP must be on file with Human Resources. * A work-related course is a course deemed necessary for the improvement or acquisition of skills and/or knowledge of the employee in performing the duties of the current position. If you are taking approved WR courses, you are not a matriculated student, in order to take WR courses you must complete the Short Application form and the Fee Waiver application must be accompanied by a written confirmation from your managerial supervisor that the course is job related. \";\n}else{\n  \t\tcomment1.value = \"The section below should be left empty\";\n  \n  \t\tcourseInfoComment.value = \"All courses taken on Fee Waiver must be taken for a traditional letter grade. A Career Development (CD) course is a course which is part of an approved individual Career Development Plan (CDP) and the CDP must be on file with Human Resources. * A work-related course is a course deemed necessary for the improvement or acquisition of skills and/or knowledge of the employee in performing the duties of the current position. If you are taking approved WR courses, you are not a matriculated student, in order to take WR courses you must complete the Short Application form and the Fee Waiver application must be accompanied by a written confirmation from your managerial supervisor that the course is job related. \";\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application_old.generated_wr_Cd2_validate0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
employee_fee_waiver_employee_fee_waiver_application_old.generated_wr_Cd2_validate0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if (wr_Cd2.value == 2 || wr_Cd1.value == 2) { \n  \t\tcomment1.value = \"Please briefly explain how each course is related to the present assignment or job training\";\n  \t\tcourseInfoComment.value = \"All courses taken on Fee Waiver must be taken for a traditional letter grade. A Career Development (CD) course is a course which is part of an approved individual Career Development Plan (CDP) and the CDP must be on file with Human Resources. * A work-related course is a course deemed necessary for the improvement or acquisition of skills and/or knowledge of the employee in performing the duties of the current position. If you are taking approved WR courses, you are not a matriculated student, in order to take WR courses you must complete the Short Application form and the Fee Waiver application must be accompanied by a written confirmation from your managerial supervisor that the course is job related. \";\n    \n}else{\n  \t\tcomment1.value = \"The section below should be left empty\";\n}\n";
            return eval(code);
        }
	}
}
/**
 * @function employee_fee_waiver_employee_fee_waiver_application_old.generated_comment2_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
employee_fee_waiver_employee_fee_waiver_application_old.generated_comment2_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value === null){\nif((wr_Cd1.value == 1 && wr_Cd2.value == 1)){\n  this.value = \"\";\n}\n}";
            return eval(code);
        }
	}
}
