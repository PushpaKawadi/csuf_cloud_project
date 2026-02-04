
//Do not change this file.
var dock_notice_dock_notice = window.dock_notice_dock_notice = window.dock_notice_dock_notice || {};
/**
 * @function dock_notice_dock_notice.generated_Division_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
dock_notice_dock_notice.generated_Division_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "if(StageIndicator.value === null){\n  if(DeptID.value !== null && Unit.value !== null && Division.value !==null){\n\tgetTimekeeperData(DeptID.value,Division.value,Unit.value,TimekeeperFieldVal.value);\n\t}\n}\n\n\n\nfunction getTimekeeperData(deptId,division,agencyUnit,fieldVal){\n \n//if (this.value !== null) {\n\t\tManagerUserID.value = \"\";\n        ManagerEmailID.value = \"\";\n        managerName.value = \"\";\n  \t\t\n        $.ajax({\n            type: 'GET',\n            url: \"/bin/getTimekeeperData\",\n            data: {\n                deptId: deptId,\n              \tdivision : division,\n                agencyUnit: agencyUnit,\n\t\t\t\tfieldVal:fieldVal\n            },\n            dataType: 'json',\n            success: function(myresponse) {\n                if (myresponse.length === 1) {\n                  \n                    managerName.value = myresponse[0].NAME;\n                    ManagerEmailID.value = myresponse[0].EMAILID;\n                    ManagerUserID.value = myresponse[0].USERID;\n                  \n\n                } \n                \n            }\n        });\n    //}\n}\n";
            return eval(code);
        }
	}
}
