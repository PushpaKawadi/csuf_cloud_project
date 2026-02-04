
//Do not change this file.
var chair_director_appointment_form_chair_director_application_form = window.chair_director_appointment_form_chair_director_application_form = window.chair_director_appointment_form_chair_director_application_form || {};
/**
 * @function chair_director_appointment_form_chair_director_application_form.generated_total_ballots_cast_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
chair_director_appointment_form_chair_director_application_form.generated_total_ballots_cast_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var numberVotes1 = number_votes1.value;\nvar numberVotes2 = number_votes2.value; \nvar numberVotes3 = number_votes3.value; \nvar numberVotes4 = number_votes4.value; \nvar numberVotes5 = number_votes5.value; \n\nvar totalVotes = numberVotes1+numberVotes2+numberVotes3+numberVotes4+numberVotes5;\n\nthis.value = totalVotes;";
            return eval(code);
        }
	}
}
