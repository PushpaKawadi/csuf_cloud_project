
//Do not change this file.
var appeals_form_appeals = window.appeals_form_appeals = window.appeals_form_appeals || {};
/**
 * @function appeals_form_appeals.generated_DeficientAGCourseList_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
appeals_form_appeals.generated_DeficientAGCourseList_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value == \"ToAppeals\"){\n \nif(DeficientAGCourseCB1.value ===  null && DeficientAGCourseCB2.value ===  null && DeficientAGCourseCB3.value ===  null && DeficientAGCourseCB4.value ===  null && DeficientAGCourseCB5.value ===  null && DeficientAGCourseCB6.value ===  null && DeficientAGCourseCB7.value ===  null ){\n  this.value = null;\n}else{\n  var finalVal = null;\n  if(DeficientAGCourseCB1.value == \"1\" && DeficientAGCourseSem1.value !== null){\n    finalVal = \"History-\"+DeficientAGCourseSem1.value + \" semester(s)\";\n  }\n  if(DeficientAGCourseCB2.value == \"1\" && DeficientAGCourseSem2.value !== null){\n  if(finalVal === null){\n     finalVal = \"English-\"+DeficientAGCourseSem2.value + \" semester(s)\";\n  }else{\n     finalVal = finalVal+\", English-\"+DeficientAGCourseSem2.value + \" semester(s)\";\n  }\n  }\n  if(DeficientAGCourseCB3.value == \"1\" && DeficientAGCourseSem3.value !== null){\n  if(finalVal === null){\n     finalVal = \"Mathematics-\"+DeficientAGCourseSem3.value + \" semester(s)\";\n  }else{\n     finalVal = finalVal+\", Mathematics-\"+DeficientAGCourseSem3.value + \" semester(s)\";\n  }\n  }\n  if(DeficientAGCourseCB4.value == \"1\" && DeficientAGCourseSem4.value !== null){\n  if(finalVal === null){\n     finalVal = \"Science-\"+DeficientAGCourseSem4.value + \" semester(s)\";\n  }else{\n     finalVal = finalVal+\", Science-\"+DeficientAGCourseSem4.value + \" semester(s)\";\n  }\n     }\n     if(DeficientAGCourseCB5.value == \"1\" && DeficientAGCourseSem5.value !== null){\n  if(finalVal === null){\n     finalVal = \"Foreign Language-\"+DeficientAGCourseSem5.value + \" semester(s)\";\n  }else{\n     finalVal = finalVal+\", Foreign Language-\"+DeficientAGCourseSem5.value + \" semester(s)\";\n  }\n  }\n    if(DeficientAGCourseCB6.value == \"1\" && DeficientAGCourseSem6.value !== null){\n  if(finalVal === null){\n     finalVal = \"Visual/Performing Art-\"+DeficientAGCourseSem6.value + \" semester(s)\";\n  }else{\n     finalVal = finalVal+\", Visual/Performing Art-\"+DeficientAGCourseSem6.value + \" semester(s)\";\n  } \n    }\n    if(DeficientAGCourseCB7.value == \"1\" && DeficientAGCourseSem7.value !== null){\n   if(finalVal === null){\n     finalVal = \"College Preparatory Elective-\"+DeficientAGCourseSem7.value + \" semester(s)\";\n  }else{\n     finalVal = finalVal+\", College Preparatory Elective-\"+DeficientAGCourseSem7.value + \" semester(s)\";\n  }\n      }\n  this.value = finalVal;\n  \n}\n}";
            return eval(code);
        }
	}
}
/**
 * @function appeals_form_appeals.generated_LowGPACB_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
appeals_form_appeals.generated_LowGPACB_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value !== null){\n  if(LowGPAWithADTCB.value == \"1\" && LocalAdmissionGPA.value !== null){\n    this.value = \"\";\n    this.value = \"Local students are being denied with GPAs less than \"+LocalAdmissionGPA.value;\n  }\n  if(LowGPAWithADTCB.value == \"2\" && OutLocaladmissionGPA.value !== null){\n    this.value = \"\";\n    this.value = \"Out-Local students are being denied with GPAs less than \"+OutLocaladmissionGPA.value;\n    \n  }\n}";
            return eval(code);
        }
	}
}
