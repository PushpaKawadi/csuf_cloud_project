
//Do not change this file.
var direct_pay_dental_direct_pay_dental = window.direct_pay_dental_direct_pay_dental = window.direct_pay_dental_direct_pay_dental || {};
/**
 * @function direct_pay_dental_direct_pay_dental.generated_validationCheck_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
direct_pay_dental_direct_pay_dental.generated_validationCheck_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var monthArray = [\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"];\nvar indexVal = 0;\nvar monthlyVal = (MothlyValue.value.toLowerCase()).split(\",\").splice(0,1);\n\nEmpPayMonths.value = MothlyValue.value.split(',')[0]+\",\"+MothlyValue.value.split(',')[1];\nif (monthlyVal !== \"\") {\n  var i;\n   for(i=0;i<=11;i++){\n     debugger;\n     if((monthlyVal) == monthArray[i].toLowerCase()){\n       var month_minus2 = \"\";\n       var month_minus1 = \"\";\n       indexVal = i;\n       if(i-2 === -2){\n         month_minus2 = monthArray[10];\n         month_minus1 = monthArray[11];\n       }\n       else if(i-2 == -1){\n         month_minus2 = monthArray[11];\n         month_minus1 = monthArray[0];\n       }else{\n         month_minus2 = monthArray[i-2];\n          month_minus1 = monthArray[i-1];\n       }\n        \n     }\n   }\n  LastPayPeriodPermium.value = month_minus2+\" which covers \"+month_minus1;\n}\n\n";
            return eval(code);
        }
	}
}
