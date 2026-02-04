
//Do not change this file.
var faculty_action_request_faculty_action_request = window.faculty_action_request_faculty_action_request = window.faculty_action_request_faculty_action_request || {};
/**
 * @function faculty_action_request_faculty_action_request.generated_ChairDeanField_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
faculty_action_request_faculty_action_request.generated_ChairDeanField_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "var curDepVal = CurrDeptID.value;\nvar newDepVal = NewDeptID.value;\n\nif (curDepVal !== null && newDepVal === null) {\n  if (StageIndicator.value === null || StageIndicator.value == \"ToRequestor\") {\n    $.ajax({\n      type: 'GET',\n      url: \"/bin/getFARData\",\n      data: {\n        action: \"FAR_CHAIR_DEAN_DATA\",\n        depID: curDepVal\n      },\n      dataType: 'json',\n      success: function (myresopnse) {\n        if (myresopnse.length !== 0) {\n         \n         // ChairEmail.value = myresopnse[0].CHAIR_EMAIL; \n          \n          ChairEmail.value = 'shreyas.manjunatha@thoughtfocus.com'; \n          ChairUserID.value = myresopnse[0].CHAIR_USERID;\n          ChairName.value = myresopnse[0].CHAIR_NAME;\n        } else {\n          //  DeanDesigneeEmail.value = \"\";\n          //  DeanDesigneeName.value =  \"\";\n          //  DeanDesigneeUserID.value =  \"\";\n          ChairEmail.value = \"\";\n          ChairUserID.value = \"\";\n          ChairName.value = \"\";\n        }\n      }\n    });\n  }\n}";
            return eval(code);
        }
	}
}
/**
 * @function faculty_action_request_faculty_action_request.generated_CurrDeptID_calc0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 * @returns {string}
 */
faculty_action_request_faculty_action_request.generated_CurrDeptID_calc0 = function (scope) {
    with(this) {
        with(scope) {
            var code = "\nvar depID = CurrDeptID.value;\nalert(depID);\n\nif(StageIndicator.value === null || StageIndicator.value == \"ToRequestor\"){\n  alert(StageIndicator.value);\n  $.ajax({\n\t\t\t\t type: 'GET',\n\t\t\t\t\t\turl: \"/bin/getFARData\",\n\t\t\t\t\t\tdata: {action: \"FAR_CHAIR_DEAN_DATA\",depID:depID},\n\t\t\t\t\t\tdataType: 'json',\n\t\t\t\t\t\tsuccess: function(myresopnse) {\n                          if(myresopnse.length !== 0){\n                          /*DeanDesigneeEmail.value = myresopnse[0].DEAN_EMAIL;\n                          DeanDesigneeEmail.value = \"yjayaram@fullerton.edu\";\n                          DeanDesigneeEmail.value = \"julnunez@fullerton.edu\";\n                          DeanDesigneeName.value =  myresopnse[0].DEAN_NAME;\n                          DeanDesigneeUserID.value =  myresopnse[0].DEAN_USERID;*/\n                          //ChairEmail.value =  myresopnse[0].CHAIR_EMAIL;\n                         // ChairEmail.value = \"yjayaram@fullerton.edu\";\n                           // ChairEmail.value = \"pushpa.kawadi@thoughtfocus.com\";\n                          //ChairEmail.value = \"julnunez@fullerton.edu\";\n                          \n                          ChairEmail.value = \"shreyas.manjunatha@thoughtfocus.com\";\n                          ChairUserID.value =  myresopnse[0].CHAIR_USERID;\n                          ChairName.value =  myresopnse[0].CHAIR_NAME;\n                        }else{\n                          /*DeanDesigneeEmail.value = \"\";\n                          DeanDesigneeName.value =  \"\";\n                          DeanDesigneeUserID.value =  \"\";*/\n                          ChairEmail.value =  \"\";\n                          ChairUserID.value =  \"\";\n                          ChairName.value =  \"\";\n                        }\n                        }\n  });\n}";
            return eval(code);
        }
	}
}
