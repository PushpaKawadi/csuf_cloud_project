
//Do not change this file.
var telecommuting_forms_telecommuting_agreement = window.telecommuting_forms_telecommuting_agreement = window.telecommuting_forms_telecommuting_agreement || {};
/**
 * @function telecommuting_forms_telecommuting_agreement.generated_TelecommutingDays_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
telecommuting_forms_telecommuting_agreement.generated_TelecommutingDays_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value === null || StageIndicator.value == \"ToRequestor\" ){     \n  TelecommutingDays.value = \"\";\n  if(SundayCB.value == \"1\"){\n      TelecommutingDays.value = \"Sunday\";\n     }\n  if(MondayCB.value == \"1\"){\n     if(TelecommutingDays.value === null){\n       TelecommutingDays.value = \"Monday\";\n     }else{\n      TelecommutingDays.value = TelecommutingDays.value + \" , \" + \"Monday\";\n     }\n     }\n  if(TuesdayCB.value == \"1\"){\n    if(TelecommutingDays.value === null){\n       TelecommutingDays.value = \"Tuesday\";\n     }else{\n      TelecommutingDays.value = TelecommutingDays.value + \" , \" + \"Tuesday\";\n     }\n  }\n   if(WednesdayCB.value == \"1\"){\n     if(TelecommutingDays.value === null){\n       TelecommutingDays.value = \"Wednesday\";\n     }else{\n      TelecommutingDays.value = TelecommutingDays.value + \" , \" + \"Wednesday\";\n     }\n   }\n  if(ThursdayCB.value == \"1\"){\n    if(TelecommutingDays.value === null){\n       TelecommutingDays.value = \"Thursday\";\n     }else{\n      TelecommutingDays.value = TelecommutingDays.value + \" , \" + \"Thursday\";\n     }\n  }\n  if(FridayCB.value == \"1\"){\n    if(TelecommutingDays.value === null){\n       TelecommutingDays.value = \"Friday\";\n     }else{\n      TelecommutingDays.value = TelecommutingDays.value + \" , \" + \"Friday\";\n     }\n  }\n  if(SaturdayCB.value == \"1\"){\n    if(TelecommutingDays.value === null){\n       TelecommutingDays.value = \"Saturday\";\n     }else{\n      TelecommutingDays.value = TelecommutingDays.value + \" , \" + \"Saturday\";\n     }\n  }\n  \n}\n";
            return eval(code);
        }
	}
}
