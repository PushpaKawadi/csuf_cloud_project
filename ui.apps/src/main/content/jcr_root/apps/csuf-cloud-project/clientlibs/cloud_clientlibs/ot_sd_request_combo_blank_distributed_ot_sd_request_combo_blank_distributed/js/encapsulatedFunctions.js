
//Do not change this file.
var ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed = window.ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed = window.ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed || {};
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial1_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial1_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC1.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode1_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode1_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var depValue = Dept1.value;\nvar fundValue = Fund1.value;\nvar clsValue = ClassCombo1.value;\nvar progVal = Program1.value;\nvar accVal = Account1.value;\n\nif(depValue === null || fundValue === null || accVal === null){\n  this.value=\"\";\n}else{\n var ccValue = depValue.toString().concat(\"-*-\").concat(fundValue.toString()).concat(\"-*-\").concat(clsValue.toString()).concat(\"-*-\").concat(progVal.toString()).concat(\"-*-\").concat(accVal.toString());\n   alert(\"else ==\"+ccValue);\n  ComboCode1.value=ccValue;\n}";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial2_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial2_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC2.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode2_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode2_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var depValue = Dept2.value;\nvar fundValue = Fund2.value;\nvar clsValue = ClassCombo2.value;\nvar progVal = Program2.value;\nvar accVal = Account2.value;\n\nif(depValue === null || fundValue === null || accVal === null){\n  this.value=\"\";\n}else{\n var ccValue = depValue.toString().concat(\"-*-\").concat(fundValue.toString()).concat(\"-*-\").concat(clsValue.toString()).concat(\"-*-\").concat(progVal.toString()).concat(\"-*-\").concat(accVal.toString());\n  this.value=ccValue;\n}";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial3_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial3_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC3.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode3_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode3_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var depValue = Dept3.value;\nvar fundValue = Fund3.value;\nvar clsValue = ClassCombo3.value;\nvar progVal = Program3.value;\nvar accVal = Account3.value;\n\nif(depValue === null || fundValue === null || accVal === null){\n  this.value=\"\";\n}else{\n var ccValue = depValue.toString().concat(\"-*-\").concat(fundValue.toString()).concat(\"-*-\").concat(clsValue.toString()).concat(\"-*-\").concat(progVal.toString()).concat(\"-*-\").concat(accVal.toString());\n  this.value=ccValue;\n}";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial4_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial4_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC4.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode4_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode4_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var depValue = Dept4.value;\nvar fundValue = Fund4.value;\nvar clsValue = ClassCombo4.value;\nvar progVal = Program4.value;\nvar accVal = Account4.value;\n\nif(depValue === null || fundValue === null || accVal === null){\n  this.value=\"\";\n}else{\n var ccValue = depValue.toString().concat(\"-*-\").concat(fundValue.toString()).concat(\"-*-\").concat(clsValue.toString()).concat(\"-*-\").concat(progVal.toString()).concat(\"-*-\").concat(accVal.toString());\n  this.value=ccValue;\n}";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial5_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial5_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC5.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial6_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial6_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC6.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial7_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_Serial7_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var rcdValue = EmpREC7.value;\nvar strRcd;\nif(rcdValue.toString().length == 2){\n  strRcd = rcdValue +1;\n  var str = '0'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length < 2){\n  strRcd = rcdValue +1;\n  var str = '00'; \n  var finalVal = str.concat(strRcd); \n  this.value= finalVal;\n} else if(rcdValue.toString().length > 2){\n  strRcd = rcdValue +1;\n  this.value= strRcd;\n}\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode7_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_ComboCode7_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var depValue = Dept7.value;\nvar fundValue = Fund7.value;\nvar clsValue = ClassCombo7.value;\nvar progVal = Program7.value;\nvar accVal = Account7.value;\n\nif(depValue === null || fundValue === null || accVal === null){\n  this.value=\"\";\n}else{\n var ccValue = depValue.toString().concat(\"-*-\").concat(fundValue.toString()).concat(\"-*-\").concat(clsValue.toString()).concat(\"-*-\").concat(progVal.toString()).concat(\"-*-\").concat(accVal.toString());\n  this.value=ccValue;\n}";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_TotalHours_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_TotalHours_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "//Value: Sum (Hours) + Int (Sum (HDTHS) / 100)\t\t\n\nvar h1 = Hours1.value;\nvar h2 = Hours2.value;\nvar h3 = Hours3.value;\nvar h4 = Hours4.value;\nvar h5 = Hours5.value;\nvar h6 = Hours6.value;\nvar h7 = Hours7.value;\n\n\n/*var totalhr=parseInt(h1)+parseInt(h2)+parseInt(h3)+parseInt(h4)+parseInt(h5)+parseInt(h6)+parseInt(h7)+parseInt(h8)+parseInt(h9)+parseInt(h10)+parseInt(h11)+parseInt(h12)+parseInt(h13)+parseInt(h14)+parseInt(h15)+parseInt(h16);*/\n\nvar totalhr=h1+h2+h3+h4+h5+h6+h7;\n//alert(totalhr);\nthis.value = totalhr;\n\n/*var hdt1 = HDTHS1.value;\nvar hdt2= HDTHS2.value;\nvar hdtTotal = parseInt(hdt1)+parseInt(hdt2);\nvar y = 100;\nvar hdtFinal  = (hdtTotal/y).toFixed(2);\n//alert(hdtFinal);\nvar totHours = totalhr + hdtFinal;\n\n//alert(totHours);\nthis.value = totHours;\n\n\n\n//alert( (hdtTotal/y).toFixed(2) );*/\n\n\n\n\n\n\n\n//this.value = totalDy;\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_TotalHDTHS_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_TotalHDTHS_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "//Value: Sum (HDTHS) - (Int (Sum (HDTHS) / 100) * 100)\n\n\n\nvar hdt1 =HDTHS1.value;\n\nvar hdt2= HDTHS2.value;\n\nvar hdt3= HDTHS3.value;\n\nvar hdt4= HDTHS4.value;\n\nvar hdt5= HDTHS5.value;\n\nvar hdt6= HDTHS6.value;\n\nvar hdt7= HDTHS7.value;\n\nvar ht = hdt1 +hdt2+hdt3+hdt4+hdt5+hdt6+hdt7;\n\nthis.value = ht;\n\n//alert(ht);\n\n//var hdtTotal = parseInt(hdt1)+parseInt(hdt2);\n\n/*var tot = parseInt((ht / 100) *100);\n\nvar y = 100;\n\nvar hdtFinal  = (hdtTotal/100)* 100;\n\nvar result = hdtTotal - hdtFinal;\n\nthis.value = result;*/\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_TotalAmount_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {number}
 */
ot_sd_request_combo_blank_distributed_ot_sd_request_combo_blank_distributed.generated_TotalAmount_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "//Value: Sum (HDTHS) - (Int (Sum (HDTHS) / 100) * 100)\n\ndebugger;\n\nvar hdt1 =Payroll1.value;\n\nvar hdt2= Payroll2.value;\n\nvar hdt3= Payroll3.value;\n\nvar hdt4= Payroll4.value;\n\nvar hdt5= Payroll5.value;\n\nvar hdt6= Payroll6.value;\n\nvar hdt7= Payroll7.value;\n\nvar ht = hdt1 +hdt2+hdt3+hdt4+hdt5+hdt6+hdt7;\n\nthis.value = ht;\n\n//alert(ht);\n\n//var hdtTotal = parseInt(hdt1)+parseInt(hdt2);\n\n/*var tot = parseInt((ht / 100) *100);\n\nvar y = 100;\n\nvar hdtFinal  = (hdtTotal/100)* 100;\n\nvar result = hdtTotal - hdtFinal;\n\nthis.value = result;*/\n\n";
            return eval(code);
        }
	}
}
