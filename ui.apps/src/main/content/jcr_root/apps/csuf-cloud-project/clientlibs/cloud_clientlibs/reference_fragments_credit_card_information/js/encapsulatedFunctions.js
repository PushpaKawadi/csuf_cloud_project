
//Do not change this file.
var reference_fragments_credit_card_information = window.reference_fragments_credit_card_information = window.reference_fragments_credit_card_information || {};
/**
 * @function reference_fragments_credit_card_information.generated_cardNumber_validate0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
reference_fragments_credit_card_information.generated_cardNumber_validate0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "this.value.length<=16;";
            return eval(code);
        }
	}
}
/**
 * @function reference_fragments_credit_card_information.generated_cvvNumber_validate0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {boolean}
 */
reference_fragments_credit_card_information.generated_cvvNumber_validate0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "this.value.length<=4;";
            return eval(code);
        }
	}
}
