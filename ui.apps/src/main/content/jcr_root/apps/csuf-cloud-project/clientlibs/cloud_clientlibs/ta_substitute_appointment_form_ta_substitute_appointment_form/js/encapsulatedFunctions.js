
//Do not change this file.
var ta_substitute_appointment_form_ta_substitute_appointment_form = window.ta_substitute_appointment_form_ta_substitute_appointment_form = window.ta_substitute_appointment_form_ta_substitute_appointment_form || {};
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HourlyRate_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {number}
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_HourlyRate_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(BasePay.value !== null){\n  \tvar basePayVal = BasePay.value;\n\tthis.value = basePayVal/2080;\n}\n";
            return eval(code);
        }
	}
}
/**
 * @function ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TotComp_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {number}
 */
ta_substitute_appointment_form_ta_substitute_appointment_form.generated_TotComp_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(HourlyRate.value !== null && TotNoHours.value !== null){\n  \tvar hourlyRateVal = HourlyRate.value; \n  \tvar totalNumberHours = TotNoHours.value;\n  \n  \tthis.value = hourlyRateVal * totalNumberHours;\n}";
            return eval(code);
        }
	}
}
