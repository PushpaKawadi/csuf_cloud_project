
//Do not change this file.
var cobrafinalnotice_cobra_final_notice = window.cobrafinalnotice_cobra_final_notice = window.cobrafinalnotice_cobra_final_notice || {};
/**
 * @function cobrafinalnotice_cobra_final_notice.generated_ReplyBy_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
cobrafinalnotice_cobra_final_notice.generated_ReplyBy_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var endCCDate = EndOfCobraCoverageDate.value;\nvar endEmpDate = EndOfEmploymentDate.value;\nvar redHourDate = ReductionHoursDate.value;\nvar doeDate = DeathOfEmployeeDate.value;\nvar divorceDate = DivorceDate.value;\nvar childStatusDate = LossOfDeptChildStatusDate.value;\nvar disDate = DissolutionDate.value;\nvar cobraDate = CobraBegin.value;\nvar todayDate = new Date();\n\nif(endCCDate !== null && cobraDate !== null && todayDate !== null){\nvar dates=[];\ndates.push(new Date(endCCDate));\ndates.push(new Date(endEmpDate));\ndates.push(new Date(redHourDate));\ndates.push(new Date(doeDate));\ndates.push(new Date(divorceDate));  \ndates.push(new Date(childStatusDate));\ndates.push(new Date(disDate));\ndates.push(new Date(cobraDate));\ndates.push(new Date(todayDate));\n  \n  \n//alert(\"dates=\"+dates);\n\n\nvar maxDate=new Date(Math.max.apply(null,dates));\n\n//alert(\"abc=\"+maxDate);\nvar days = 61;\n\nvar d1 = addDays(maxDate, days);\n//alert(\"d1=\"+d1);\n  \nvar curyear = d1.getFullYear();\nvar curyearMonth = d1.getMonth() + 1;\nvar curyearDay = d1.getDate();\n//this.value = d1;\nthis.value = (curyear+\"-\"+curyearMonth+\"-\"+curyearDay);\n //alert(this.value);\n}\n\nfunction addDays(theDate, days) {\n    return new Date(theDate.getTime() + days*24*60*60*1000);\n}\n\n";
            return eval(code);
        }
	}
}
