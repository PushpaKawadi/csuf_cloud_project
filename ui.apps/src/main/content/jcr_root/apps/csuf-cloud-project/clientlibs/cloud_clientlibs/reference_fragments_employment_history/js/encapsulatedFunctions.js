
//Do not change this file.
var reference_fragments_employment_history = window.reference_fragments_employment_history = window.reference_fragments_employment_history || {};
/**
 * @function reference_fragments_employment_history.generated_employmentDetailInfo_summary0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
reference_fragments_employment_history.generated_employmentDetailInfo_summary0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(prevDesignation.value!= null && prevOrgName.value!=null){\nprevDesignation.value+\" at \"+prevOrgName.value; }\nelse{\n\"Employment detail\";}";
            return eval(code);
        }
	}
}
