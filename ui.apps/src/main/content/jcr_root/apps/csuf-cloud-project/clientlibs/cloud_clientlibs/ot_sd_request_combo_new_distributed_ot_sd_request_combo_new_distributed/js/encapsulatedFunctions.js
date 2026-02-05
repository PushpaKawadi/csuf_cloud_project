
//Do not change this file.
var ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed = window.ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed = window.ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed || {};
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TotalHours_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TotalHours_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "//Value: Sum (Hours) + Int (Sum (HDTHS) / 100)\t\t\n\nvar h1 = Hours1.value;\nvar h2 = Hours2.value;\nvar h3 = Hours3.value;\nvar h4 = Hours4.value;\nvar h5 = Hours5.value;\nvar h6 = Hours6.value;\nvar h7 = Hours7.value;\n\n\n/*var totalhr=parseInt(h1)+parseInt(h2)+parseInt(h3)+parseInt(h4)+parseInt(h5)+parseInt(h6)+parseInt(h7)+parseInt(h8)+parseInt(h9)+parseInt(h10)+parseInt(h11)+parseInt(h12)+parseInt(h13)+parseInt(h14)+parseInt(h15)+parseInt(h16);*/\n\nvar totalhr=h1+h2+h3+h4+h5+h6+h7;\n//alert(totalhr);\nthis.value = totalhr;\n\n/*var hdt1 = HDTHS1.value;\nvar hdt2= HDTHS2.value;\nvar hdtTotal = parseInt(hdt1)+parseInt(hdt2);\nvar y = 100;\nvar hdtFinal  = (hdtTotal/y).toFixed(2);\n//alert(hdtFinal);\nvar totHours = totalhr + hdtFinal;\n\n//alert(totHours);\nthis.value = totHours;\n\n\n\n//alert( (hdtTotal/y).toFixed(2) );*/\n\n\n\n\n\n\n\n//this.value = totalDy;\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TotalHDTHS_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TotalHDTHS_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nvar hdt1 = HDTHS1.value === null ? \"0\" : HDTHS1.value;\n\nvar hdt2= HDTHS2.value === null ? \"0\" : HDTHS2.value;\n\nvar hdt3= HDTHS3.value === null ? \"0\" : HDTHS3.value;\n\nvar hdt4= HDTHS4.value === null ? \"0\" : HDTHS4.value;\n\nvar hdt5= HDTHS5.value === null ? \"0\" : HDTHS5.value;\n\nvar hdt6=  HDTHS6.value === null ? \"0\" : HDTHS6.value;\n\nvar hdt7= HDTHS7.value === null ? \"0\" : HDTHS7.value;\n\nvar ht = parseFloat(hdt1)+parseFloat(hdt2)+parseFloat(hdt3)+parseFloat(hdt4)+parseFloat(hdt5)+parseFloat(hdt6)+parseFloat(hdt7);\n\nthis.value = ht.toFixed(1);\n\n//alert(ht);\n\n//var hdtTotal = parseInt(hdt1)+parseInt(hdt2);\n\n/*var tot = parseInt((ht / 100) *100);\n\nvar y = 100;\n\nvar hdtFinal  = (hdtTotal/100)* 100;\n\nvar result = hdtTotal - hdtFinal;\n\nthis.value = result;*/\n\n";
            return eval(code);
        }
	}
}
/**
 * @function ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TotalAmount_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {number}
 */
ot_sd_request_combo_new_distributed_ot_sd_request_combo_new_distributed.generated_TotalAmount_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "//Value: Sum (HDTHS) - (Int (Sum (HDTHS) / 100) * 100)\n\ndebugger;\n\nvar hdt1 =Payroll1.value;\n\nvar hdt2= Payroll2.value;\n\nvar hdt3= Payroll3.value;\n\nvar hdt4= Payroll4.value;\n\nvar hdt5= Payroll5.value;\n\nvar hdt6= Payroll6.value;\n\nvar hdt7= Payroll7.value;\n\nvar ht = hdt1 +hdt2+hdt3+hdt4+hdt5+hdt6+hdt7;\n\nthis.value = ht;\n\n//alert(ht);\n\n//var hdtTotal = parseInt(hdt1)+parseInt(hdt2);\n\n/*var tot = parseInt((ht / 100) *100);\n\nvar y = 100;\n\nvar hdtFinal  = (hdtTotal/100)* 100;\n\nvar result = hdtTotal - hdtFinal;\n\nthis.value = result;*/\n\n";
            return eval(code);
        }
	}
}
