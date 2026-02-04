
//Do not change this file.
var drone_flight_submission_drone_flight_submission = window.drone_flight_submission_drone_flight_submission = window.drone_flight_submission_drone_flight_submission || {};
/**
 * @function drone_flight_submission_drone_flight_submission.generated_FlightDate_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
drone_flight_submission_drone_flight_submission.generated_FlightDate_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(this.value !== null && ReviewPeriodTo.value !== null){\n  debugger;\n  var frmDate = new Date(this.value);\n  var toDate = new Date(ReviewPeriodTo.value);\n  if(frmDate > toDate){\n    showErrorModal(\"Alert!\",\"Invalid Date Range\");\n  }\n}\n  ";
            return eval(code);
        }
	}
}
