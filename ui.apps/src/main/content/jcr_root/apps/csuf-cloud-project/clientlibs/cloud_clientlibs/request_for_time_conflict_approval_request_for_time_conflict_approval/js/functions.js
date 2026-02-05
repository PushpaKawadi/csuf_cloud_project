/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    TermName.value = "Summer 2022";
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
    var userValue;

    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
            //  userValue = myresponse.userId;
            userValue = "mark.ghoubrial";
            $.ajax({
                type: 'GET',
                url: "/bin/requestforTimeConflictApprovalServlet",

                data: {
                    studentUserID: userValue,
                    termName: TermName.value,
                    action: "TC_ENROLLED_COURSE_LIST"
                },

                dataType: 'json',
                success: function(response) {
                    if (response.length !== 0) {

                        Cwid.value = response[0].CWID;
                        Cwid.enabled = false;

                        StudentFirstName.value = response[0].FNAME;
                        StudentLastName.value = response[0].LNAME;
                        StudentPhoneNumber.value = response[0].STUDENT_PHONE;
                        StudentEmailAddress.value = "chaitanya.sai@thoughtfocus.com";
                        StudentUserId.value = userValue;
                        StudentName.value = response[0].FNAME + " " + response[0].LNAME;
                        StudentFirstName.enabled = false;
                        StudentLastName.enabled = false;
                        //StudentPhoneNumber.enabled = false;
                        StudentEmailAddress.enabled = false;

                        gifModal.style.display = "none";
                        var crsnamearray = [];
                        for (var i = 0; i < response.length; i++) {
                            var item = response[i].CRSE_NAME;
                            crsnamearray.push(item);
                        }
                        TimeConflictDeptCourse.items = (crsnamearray);
                        TimeConflictCourseJson.value = JSON.stringify(response);

                    } else {
                        showErrorModal("Alert!", "No matching records found");
                    }
                },
                error: function(error) {
                    alert("error block=" + error);
                }

            });

        }

    });
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    AddedCourseInstructorCBPanel.visible = false;
    TimeConflictCourseInstructorCBPanel.visible = false;
    AddedCourseInstructorSignaturePanel.visible = false;
    TimeConflictCourseInstructorSignaturePanel.visible = false;
    ARSCSignaturePanel.visible = false;
}

if (StageIndicator.value == "ToTimeConflictCourseInstructor") {
    StudentInformationPanel.enabled = false;
    StudentSignaturePanel.enabled = false;
    TimeConflictTablePanel.enabled = false;
    AddedCoursePanel.enabled = false;
    TimeConflictCourseInstructorCBPanel.enabled = true;
    TimeConflictApprovalCB.mandatory = true;
    AddedCourseInstructorSignaturePanel.visible = false;
    ARSCSignaturePanel.visible = false;
    CourseNameSearch.visible = false;
}

if (StageIndicator.value == "ToRequestedCourseInstructor") {
    StudentInformationPanel.enabled = false;
    StudentSignaturePanel.enabled = false;
    TimeConflictPanel.enabled = false;
    AddedCourseTablePanel.enabled = false;
    TimeConflictCourseInstructorSignaturePanel.visible = true;
    RequestedCourseApprovalCB.mandatory = true;
    TimeConflictCourseInstructorSignaturePanel.enabled = false;
    ARSCSignaturePanel.visible = false;
    CourseNameSearch.visible = false;
}

if (StageIndicator.value == "ToARSC") {
    StudentInformationPanel.enabled = false;
    AddedCoursePanel.enabled = false;
    TimeConflictPanel.enabled = false;
    StudentSignaturePanel.enabled = false;
    AddedCourseInstructorSignaturePanel.enabled = false;
    TimeConflictCourseInstructorSignaturePanel.enabled = false;
    CourseNameSearch.visible = false;
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_PopupPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_PopupPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;

        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_PopupCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_PopupCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null && PopupTable.Row1.instanceManager.instances[Row1.index].PopupCB.value !== null) {
    var num = PopupTable.Row1.instanceManager.instanceCount;
    for (var i = 0; i < num; i++) {
        if (Row1.index != i) {
            PopupTable.Row1.instanceManager.instances[i].PopupCB.value = "";
        }
    }
}

        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_Cancel_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_Cancel_click0 = function (scope) {
    with(this) {
        with(scope) {
            PopupPanel.visible=false;
InstructionPanel.visible=true;
MainPanel.visible = true;
submit1600234699256.visible = true;
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_Ok_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_Ok_click0 = function (scope) {
    with(this) {
        with(scope) {
            var count = 0;
if (StageIndicator.value === null) {
    for (i = 0; i < PopupTable.Row1.instanceManager.instanceCount; i++) {
        if (PopupTable.Row1.instanceManager.instances[i].PopupCB.value == "1") {

            var courseName = PopupTable.Row1.instanceManager.instances[i].CourseName.value;
            var instructorName = PopupTable.Row1.instanceManager.instances[i].InstructorName.value;
            var scheduleNumber = PopupTable.Row1.instanceManager.instances[i].ScheduleNumber.value;
            var courseParsedArray = JSON.parse(CourseListJson.value);
            for (a = 0; a < courseParsedArray.length; a++) {
                if (courseParsedArray[a].CRSE_NAME == courseName && courseParsedArray[a].INSTR_NAME == instructorName && courseParsedArray[a].CLASS_NBR == scheduleNumber) {
                    RequestedDeptCourse.value = courseParsedArray[a].CRSE_NAME;
                    RequestedCourseScheduleNumber.value = courseParsedArray[a].CLASS_NBR;
                    RequestedNumberofUnits.value = courseParsedArray[a].UNITS_MINIMUM;
                    var instructorFirstName = courseParsedArray[a].INSTR_F_NAME;
                    var instructorLastName = courseParsedArray[a].INSTR_L_NAME;
                    RequestedCourseInstructorEmailName.value = instructorFirstName + " " + instructorLastName;
                    RequestedCourseInstructorName.value = courseParsedArray[a].INSTR_NAME;
                    RequestedCourseInstructorUserId.value = courseParsedArray[a].INSTR_USERID;
                    if (courseParsedArray[a].START_TIME == "NA" && courseParsedArray[a].END_TIME == "NA" && courseParsedArray[a].COURSE_DAYS == "NA") {
                        RequestedCourseDaysAndTimes.value = "NA";
                    } else {
                        var startTime = changeTimeFormat(courseParsedArray[a].START_TIME);
                        var endTime = changeTimeFormat(courseParsedArray[a].END_TIME);
                        RequestedCourseDaysAndTimes.value = courseParsedArray[a].COURSE_DAYS + " " + startTime + "-" + endTime;
                    }
                    RequestedDeptCourse.enabled = false;
                    RequestedCourseScheduleNumber.enabled = false;
                    RequestedNumberofUnits.enabled = false;
                    RequestedCourseInstructorName.enabled = false;
                    RequestedCourseDaysAndTimes.enabled = false;
                    count = count + 1;
                    PopupPanel.visible = false;
                    InstructionPanel.visible = true;
                    MainPanel.visible = true;
                    submit1600234699256.visible = true;
                }
            }
        }
    }
}
if (count == "0") {
    showErrorModal("Alert!", "Please select a course");
    PopupPanel.visible = true;
    InstructionPanel.visible = false;
    MainPanel.visible = false;
    submit1600234699256.visible = false;
}

function changeTimeFormat(timeString) {
    //var timeString = "18:30:00";
    var hourEnd = timeString.indexOf(":");
    var H = +timeString.substr(0, hourEnd);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
    timeString = h + timeString.substr(hourEnd, 3) + ampm;
    return timeString;
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            CaseId.enabled = false;
if (StageIndicator.value === null) {
    $.ajax({
        type: 'GET',
        url: "/bin/getCaseID",
        dataType: 'json',
        success: function(myresponse) {
            CaseId.value = myresponse.CASEID;
        },
    });
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_InitiatedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_InitiatedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    this.enabled = false;
    var dateString = new Date().toLocaleString("en-US", {

        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
    }).replace(/[^ -~]/g, '');
    var dateObject = new Date(dateString);
    var curyear = dateObject.getFullYear();
    var curyearMonth = dateObject.getMonth() + 1;
    var curyearDay = dateObject.getDate();
    var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
    this.value = d;
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_TimeConflictDeptCourse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_TimeConflictDeptCourse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var timeConflictCourseName = this.value;
    var timeConflictCourseParsedArray = JSON.parse(TimeConflictCourseJson.value);
    for (a = 0; a < timeConflictCourseParsedArray.length; a++) {
        if (timeConflictCourseParsedArray[a].CRSE_NAME == timeConflictCourseName) {
            TimeConflictScheduleNumber.value = timeConflictCourseParsedArray[a].CLASS_NBR;
            TimeConflictNumberofUnits.value = timeConflictCourseParsedArray[a].UNT_TAKEN;
            TimeConflictInstructorName.value = timeConflictCourseParsedArray[a].INSTR_NAME;
            TimeConflictCourseInstructorUserId.value = timeConflictCourseParsedArray[a].INSTR_USERID;
            //TimeConflictCourseInstructorEmailId.value = timeConflictCourseParsedArray[a].INSTR_EMAIL;
            TimeConflictDaysandTimes.enabled = false;
            TimeConflictScheduleNumber.enabled = false;
            TimeConflictNumberofUnits.enabled = false;
            TimeConflictInstructorName.enabled = false;
        }
    }
    $.ajax({
        type: 'GET',
        url: "/bin/requestforTimeConflictApprovalServlet",
        data: {
            action: "TC_ENROLLED_COURSE_DAYS_TIMES",
            courseName: timeConflictCourseName,
            classNumber: TimeConflictScheduleNumber.value,
        },
        dataType: 'json',
        success: function(myresponse) {
            if (myresponse.length !== 0) {
                var instructorFirstName = myresponse[0].INSTR_F_NAME;
                var instructorLastName = myresponse[0].INSTR_L_NAME;
                TimeConflictInstructorEmailName.value = instructorFirstName + " " + instructorLastName;
                if (myresponse[0].START_TIME == "NA" && myresponse[0].END_TIME == "NA" && myresponse[0].COURSE_DAYS == "NA") {
                    TimeConflictDaysandTimes.value = "NA";
                } else {
                    var startTime = changeTimeFormat(myresponse[0].START_TIME);
                    var endTime = changeTimeFormat(myresponse[0].END_TIME);
                    TimeConflictDaysandTimes.value = myresponse[0].COURSE_DAYS + " " + startTime + "-" + endTime;
                }
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }

    });
}

function changeTimeFormat(timeString) {
    //var timeString = "18:30:00";
    var hourEnd = timeString.indexOf(":");
    var H = +timeString.substr(0, hourEnd);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
    timeString = h + timeString.substr(hourEnd, 3) + ampm;
    return timeString;
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_CourseNameSearch_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_CourseNameSearch_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {
    if (this.value !== null) {
        var gifModal = document.getElementById('gifModal');
        gifModal.style.display = "block";
        var course = this.value;
        $.ajax({
            type: 'GET',
            url: "/bin/requestforTimeConflictApprovalServlet",
            data: {
                action: "TC_COURSE_LIST",
                term: 2225,
                courseName: course,
            },
            dataType: 'json',
            success: function(myresponse) {
                if (myresponse.length !== 0) {
                    CourseListJson.value = JSON.stringify(myresponse);
debugger;
                    var rowcountRemoveAll1 = PopupTable.Row1.instanceManager.instanceCount;
                    if (rowcountRemoveAll1 !== null) {
                        for (var k = 0; k < rowcountRemoveAll1; k++) {
                            PopupTable.Row1.instanceManager.removeInstance(k);
                        }
                    }
                   var rowcountRemoveAll2 = PopupTable.Row1.instanceManager.instanceCount;
                    if (rowcountRemoveAll2 !== null) {
                        for (var t = 0; t < rowcountRemoveAll2; t++) {
                            PopupTable.Row1.instanceManager.removeInstance(t);
                        }
                    }
                    PopupTable.Row1.instanceManager.removeInstance((Row1.instanceManager.instanceCount) - 1);
                    for (var i = 0; i < myresponse.length; i++) {
                        if (PopupTable.Row1.instanceManager.instances[Row1.instanceManager.instanceCount - 1].CourseName.value !== null) {
                            PopupTable.Row1.instanceManager.addInstance();
                        }
                        PopupTable.Row1.instanceManager.instances[i].CourseName.value = myresponse[i].CRSE_NAME;
                        PopupTable.Row1.instanceManager.instances[i].InstructorName.value = myresponse[i].INSTR_NAME;
                        PopupTable.Row1.instanceManager.instances[i].Department.value = myresponse[i].DEPTNAME;
                        PopupTable.Row1.instanceManager.instances[i].DepartmentId.value = myresponse[i].DEPTID;
                        PopupTable.Row1.instanceManager.instances[i].ScheduleNumber.value = myresponse[i].CLASS_NBR;
                        PopupTable.Row1.instanceManager.instances[i].NumberOfUnits.value = myresponse[i].UNITS_MINIMUM;
                        PopupTable.Row1.instanceManager.instances[i].CourseDays.value = myresponse[i].COURSE_DAYS;
                        if (myresponse[i].START_TIME != "NA" && myresponse[i].END_TIME != "NA") {
                            var courseStartTime = changeTimeFormat(myresponse[i].START_TIME);
                            var courseEndTime = changeTimeFormat(myresponse[i].END_TIME);
                            PopupTable.Row1.instanceManager.instances[i].CoureTime.value = courseStartTime + "-" + courseEndTime;
                        } else {
                            PopupTable.Row1.instanceManager.instances[i].CoureTime.value = "NA";
                        }
                    }
                    PopupPanel.visible = true;
                    InstructionPanel.visible = false;
                    MainPanel.visible = false;
                    submit1600234699256.visible = false;
                    var rowcount = Row1.instanceManager.instanceCount;
                    PopupTable.Row1.instanceManager.removeInstance(rowcount);
                    gifModal.style.display = "none";
                } else {
                    gifModal.style.display = "none";
                    showErrorModal("Alert!", "Please fill valid course name");
                }
            }
        });

    } else {
        gifModal.style.display = "none";
        showErrorModal("Alert!", "Please fill course name");
    }
}

function changeTimeFormat(timeString) {
    //var timeString = "18:30:00";
    var hourEnd = timeString.indexOf(":");
    var H = +timeString.substr(0, hourEnd);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
    timeString = h + timeString.substr(hourEnd, 3) + ampm;
    return timeString;
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_RequestedDeptCourse_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_RequestedDeptCourse_init0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
$.ajax({
	type: 'GET',
	url: "/bin/requestforTimeConflictApprovalServlet",
	data: {
		action:"TC_COURSE_LIST",
      term:2223,
	},
	dataType: 'json',
	success: function(myresponse){
      debugger;
		 if (myresponse.length !== 0) {
			 var courseList = [];
			 for (var i=0; i<10; i++){
			 var item = myresponse[i].CRSE_NAME;
			 var idItem = i+1;
			 courseList.push(item);
			 }
		this.items = (courseList);

          // BuildingListJson.value = JSON.stringify(myresponse);
		 }
	},
	error: function(error) {
alert("error block=" + error);
}
	
});
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_RequestedDeptCourse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_RequestedDeptCourse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(StageIndicator.value === null){
  var courseName = this.value;
  var courseParsedArray = JSON.parse(CourseListJson.value);
  for(a=0; a<courseParsedArray.length; a++ ){
    debugger;
    if(courseParsedArray[a].CRSE_NAME == courseName){
      RequestedCourseScheduleNumber.value = courseParsedArray[a].CLASS_NBR;
      RequestedNumberofUnits.value = courseParsedArray[a].UNITS_MINIMUM;
      RequestedCourseInstructorName.value = courseParsedArray[a].INSTR_NAME;
      RequestedCourseInstructorUserId.value = courseParsedArray[a].INSTR_USERID;
     // RequestedCourseInstructorEmailId.value = courseParsedArray[a].INSTR_EMAIL;
    }
  }
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_StudentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_StudentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                StudentSignature.value = StudentName.value;
                StudentSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        StudentSignature.enabled = false;
        StudentSignatureDate.enabled = false;
    } else {
        StudentSignature.value = "";
        StudentSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_TimeConflictInstructorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_TimeConflictInstructorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToTimeConflictCourseInstructor") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                TimeConflictInstructorSignature.value = userValue;
                TimeConflictInstructorSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        TimeConflictInstructorSignature.enabled = false;
        TimeConflictInstructorSignDate.enabled = false;
    } else {
        TimeConflictInstructorSignature.value = "";
        TimeConflictInstructorSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_AddedCourseInstructorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_AddedCourseInstructorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToRequestedCourseInstructor") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                RequestedCourseInstructorSignature.value = userValue;
                RequestedCourseInstructorSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        RequestedCourseInstructorSignature.enabled = false;
        RequestedCourseInstructorSignDate.enabled = false;
    } else {
        RequestedCourseInstructorSignature.value = "";
        RequestedCourseInstructorSignDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_ARSCSignatureCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_ARSCSignatureCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value == "ToARSC") {
    if (this.value == 1) {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresponse) {
                var userValue = myresponse.userName;
                ARSCSignature.value = userValue;
                ARSCSignatureDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
        ARSCSignature.enabled = false;
        ARSCSignatureDate.enabled = false;
    } else {
        ARSCSignature.value = "";
        ARSCSignatureDate.value = "";
    }
}
        }
	}
}
/**
 * @function request_for_time_conflict_approval_request_for_time_conflict_approval.generated_submit1600234699256_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
request_for_time_conflict_approval_request_for_time_conflict_approval.generated_submit1600234699256_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
  aftiaDescCWID.value = StudentName.value+" "+Cwid.value;
  EmailSubject.value = "Test - "+StudentName.value+" - Request For Time Conflict Approval - "+Cwid.value;
}

TimeConflictCourseInstructorEmailId.value = "chaitanya.sai@thoughtfocus.com";
RequestedCourseInstructorEmailId.value = "chaitanya.sai@thoughtfocus.com";
guideBridge.submit();


        }
	}
}
