/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            InfoTable.enabled = false;
if (StageIndicator.value === null) {
    basicInfo.enabled = true;
    DeptCooSigaturePanel.visible = true;
    DeptCooSigaturePanel.enabled = true;
    DeptChairSignaturePanel.visible = false;
    PayrollSignaturePanel.visible = false;
    DeanSignaturePanel.visible = false;
}
if (StageIndicator.value === "ToDeptCoo") {
    basicInfo.enabled = true;
    DeptCooSigaturePanel.visible = true;
    DeptCooSigaturePanel.enabled = true;
    DeptChairSignaturePanel.visible = false;
    PayrollSignaturePanel.visible = false;
    DeanSignaturePanel.visible = true;
    DeanSignaturePanel.enabled = false;
}
if (StageIndicator.value === "ToChair") {
    basicInfo.enabled = false;
    DeptCooSigaturePanel.visible = true;
    DeptCooSigaturePanel.enabled = false;
    DeptChairSignaturePanel.visible = false;
    DeptChairSignaturePanel.enabled = true;
    PayrollSignaturePanel.visible = false;
    DeanSignaturePanel.visible = false;
}
if (StageIndicator.value === "ToDean") {
    basicInfo.enabled = false;
    DeptCooSigaturePanel.visible = true;
    DeptCooSigaturePanel.enabled = false;
    DeptChairSignaturePanel.visible = false;
    DeptChairSignaturePanel.enabled = false;
    DeanSignaturePanel.visible = true;
    PayrollSignaturePanel.visible = false;
}
if (StageIndicator.value === "ToPayroll") {
    InfoTable.enabled = true;
    var i;
    var rowcountRemoveAll3 = Row1.instanceManager.instanceCount;
    for (i = 0; i < rowcountRemoveAll3; i++) {
        Row1.instanceManager.instances[i].EmpName.enabled = false;
        Row1.instanceManager.instances[i].EmpId.enabled = false;
        Row1.instanceManager.instances[i].Red.enabled = false;
        Row1.instanceManager.instances[i].SSN.enabled = false;
        Row1.instanceManager.instances[i].ActionOrReason.enabled = false;
        Row1.instanceManager.instances[i].CMSPosition.enabled = false;
        Row1.instanceManager.instances[i].SCOPosition.enabled = false;
        Row1.instanceManager.instances[i].StartDt.enabled = false;
        Row1.instanceManager.instances[i].EndDt.enabled = false;
        Row1.instanceManager.instances[i].ApptDur.enabled = false;
        Row1.instanceManager.instances[i].Timebase.enabled = false;
        Row1.instanceManager.instances[i].Range.enabled = false;
        Row1.instanceManager.instances[i].Salary.enabled = false;
        Row1.instanceManager.instances[i].DeptCode.enabled = false;
        Row1.instanceManager.instances[i].SchoolCode.enabled = false;
        Row1.instanceManager.instances[i].Comments.enabled = true;
    }
    basicInfo.enabled = false;
    DeptCooSigaturePanel.visible = true;
    DeptCooSigaturePanel.enabled = false;
    DeptChairSignaturePanel.visible = false;
    DeptChairSignaturePanel.enabled = false;
    DeanSignaturePanel.visible = true;
    DeanSignaturePanel.enabled = false;
    PayrollSignaturePanel.visible = true;
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            if (myresopnse.length !== null) {
                var userValue = myresopnse.userId;
                if(StageIndicator.value === null){
                   workflow_initiator.value = userValue;
                }
                $.ajax({
                    /*type: 'GET',
                    url: "/bin/getTempFacultyDeptData",
                    data: {
                        user_id: userValue
                    },*/
					
					url: window.location.origin + "/bin/fullertonProxy",
                            type: 'GET',
							 data: {
								path: "getTempFacultyDeptData",
								user_id: "jluzzi"
								
                            },
                    dataType: 'json',

                    success: function(deptIdResult) {
                        debugger;
                      if (StageIndicator.value === null || StageIndicator.value === "ToDeptCoo") {
                        if (deptIdResult.length !== 0) {
                         // if(StageIndicator.value === null){
                            DeptCooEmail.value = deptIdResult[0].DEPT_COO_EMAIL;                            
                            DeptCooEmail.value = "pushpa.kawadi@thoughtfocus.com";
                        //  }
                            DeptCooEmpId.value = deptIdResult[0].EMPLID;
                            var deptIdSelect = document.querySelector(".DeptIdSelect select");
                            for (var i = 0; i < deptIdResult.length; i++) {
                                var opt1 = document.createElement("option");
                                opt1.value = deptIdResult[i].DEPT_DESCR;
                                opt1.innerHTML = deptIdResult[i].DEPT_DESCR;
                                deptIdSelect.appendChild(opt1);
                            }
                        }
						else {
                            
							        showErrorModal("Alert!", "No matching records found");
                               }
						} 
                            $.ajax({
                                type: 'GET',
                                //url: "/bin/getTempFacultyJobcode",
								
								url: window.location.origin + "/bin/fullertonProxy",
								type: 'GET',
								 data: {
									path: "getTempFacultyJobcode"
								 },

                                dataType: 'json',

                                success: function(jobCodeResult) {

                                    if (jobCodeResult.length !== 0) {
                                        var jobCodeSelect = document.querySelector(".JobCodeSelect select");
                                       
                                            var jobResult = [];

                                            for (var i = 0; i < jobCodeResult.length; i++) {

                                                var item = jobCodeResult[i].JOBCODE_DESCR;

                                                var idItem = i + 1;

                                                //var jbcode = item.text;

                                                jobResult.push(item);

                                            }

                                            JobCode.items = jobResult;
                                        }
										else {
                            
							        showErrorModal("Alert!", "No matching records found");
                               }

                                  

                                }
                            });

                        

                    }
                });

            } else {
                showErrorModal("Alert!", "No matching records found");
            }
        }
    });

        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_Department_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_Department_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value === "ToDeptCoo"){
  debugger;
  var dept_id = (Department.value).substring(0,5);
  $.ajax({
                                type: 'GET',
                                url: "/bin/getTempFacultyChairInfo",
								data:{dept_id:dept_id},
                                dataType: 'json',

                                success: function(chairInfoResult) {
                                    
                                    if (chairInfoResult.length !== 0) {
                                        DeanUserId.value  = chairInfoResult[0].DEAN_USERID;
                                      //if(StageIndicator.value === null){
										DeanEmail.value  = chairInfoResult[0].DEAN_EMAIL;
                                        DeanEmail.value = "pushpa.kawadi@thoughtfocus.com";
                                      //}
                                        DeanName.value  = chairInfoResult[0].DEAN_NAME;
                                    }

                                }
                            });
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_JobCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_JobCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value !== null && FormSavedStatus.value !== "1"){
$.ajax({
    type: 'GET',
   // url: "/bin/getTempFacultyJobcode",
	
	url: window.location.origin + "/bin/fullertonProxy",
	type: 'GET',
	 data: {
		path: "getTempFacultyJobcode"
	 },

    dataType: 'json',

    success: function(jobCodeResult) {

        if (jobCodeResult.length !== 0) {
            var jobCodeSelect = document.querySelector(".JobCodeSelect select");

            var jobResult = [];

            for (var i = 0; i < jobCodeResult.length; i++) {

                var item = jobCodeResult[i].JOBCODE_DESCR;

                var idItem = i + 1;

                //var jbcode = item.text;

                jobResult.push(item);

            }

            JobCode.items = jobResult;
        } else {

            showErrorModal("Alert!", "No matching records found");
        }



    }
});
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_JobCode_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_JobCode_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            JobCode_1.value = JobCode.value;
debugger;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_Agency_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_Agency_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_ReportingUnit_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_ReportingUnit_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_RunDateTime_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_RunDateTime_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_SearchRecords_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_SearchRecords_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value === "ToDeptCoo"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_SearchRecords_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_SearchRecords_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value === "ToDeptCoo") {
    var gifModal = document.getElementById('gifModal');
    var flag = 1;
   if (flag === 0 && Department.value === null) {
        flag = 1;
        gifModal.style.display = "none";
        showErrorModal("Alert!", "Please select department");
    } else {
        flag = 0;
    }

    if (flag === 0) {
        if (JobCode.value === null) {
            flag = 1;
            gifModal.style.display = "none";
            showErrorModal("Alert!", "Please select Job Code");
        } else {
            flag = 0;
        }
    }
    if (flag === 0) {
        if (FromDate.value === null) {
            flag = 1;
            gifModal.style.display = "none";
            showErrorModal("Alert!", "Please select from date");
        } else {
            flag = 0;
        }
    }
    if (flag === 0) {
        if (ThroughDate.value === null) {
            flag = 1;
            gifModal.style.display = "none";
            showErrorModal("Alert!", "Please select through date");
        } else {
            flag = 0;
        }
    }
    if (flag === 0) {
      var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
debugger;
        //var job_code = (JobCode.value).substring(0, 4);
        
            var k = 0; 
      var job_code = "";
       if(JobCode.value !== null){
          matches = JobCode.value.match(/\d{4}\b/g); 
		   for(k=0;k<matches.length;k++){
		  // alert(matches[k])
		  if(job_code === ""){
            job_code = matches[k];
          }else{
             job_code = job_code+","+matches[k];
          }
           }
       }
      //job_code = matches;
      debugger;
        var dept_id = (Department.value).substring(0, 5);
        var from_dt = FromDate.value;
        var through_dt = ThroughDate.value;
		var empId = "";
        
      
        $.ajax({
            type: 'GET',
            url: "/bin/getTempFacultyPayrollData",

            data: {
                job_code: job_code,
                dept_id: dept_id,
                from_dt: from_dt,
                through_dt: through_dt,
                emp_id : empId

            },

            dataType: 'json',

            success: function(payrollResult) {

                if (payrollResult.length !== 0) {
                    var k;
                    Agency.value = null;
                    ReportingUnit.value = null;
                   var rowcountRemoveAll1 = Row1.instanceManager.instanceCount;
                    for (k = 0; k < rowcountRemoveAll1; k++) {
                        Row1.instanceManager.removeInstance(Row1.instanceIndex);
                    }
                    Row1.instanceManager.removeInstance((Row1.instanceManager.instanceCount) - 1);
                    var i;
                    Agency.value = payrollResult[0].AGENCY;
                    ReportingUnit.value = payrollResult[0].REPORTING_UNIT;
                    for (i = 0; i < payrollResult.length; i++) {
                        Row1.instanceManager.addInstance();
                        Row1.instanceManager.instances[i].EmpName.value = payrollResult[i].EMPLOYEE_NAME;
                        Row1.instanceManager.instances[i].EmpId.value = payrollResult[i].EMPLID;
                        Row1.instanceManager.instances[i].Red.value = payrollResult[i].RCD;
                        //Row1.instanceManager.instances[i].SSN.value = "XXX-XX-"+ (payrollResult[i].SSN).substr(5, 4);
                        Row1.instanceManager.instances[i].SSN.value = (payrollResult[i].SSN).substr(0, 3)+"-"+(payrollResult[i].SSN).substr(3, 2)+"-"+(payrollResult[i].SSN).substr(5, 4);
                        Row1.instanceManager.instances[i].ActionOrReason.value = payrollResult[i].ACTION_REASON;
                        Row1.instanceManager.instances[i].CMSPosition.value = payrollResult[i].CMS_POSITION;
                        Row1.instanceManager.instances[i].SCOPosition.value = payrollResult[i].SCO_POSITION;
                        
                      var st_dt = (payrollResult[i].APPT_START_DT).replace(" 00:00:00.0","");
                        Row1.instanceManager.instances[i].StartDt.value = st_dt.substring(5, 7)+"-"+st_dt.substring(8, 10)+"-"+st_dt.substring(0, 4);
                      var end_dt = (payrollResult[i].APPT_END_DT).replace(" 00:00:00.0","");
                        Row1.instanceManager.instances[i].EndDt.value = end_dt.substring(5, 7)+"-"+end_dt.substring(8, 10)+"-"+end_dt.substring(0, 4);
                        Row1.instanceManager.instances[i].ApptDur.value = payrollResult[i].APPT_DURATION;
                        Row1.instanceManager.instances[i].Timebase.value = payrollResult[i].TIME_BASE;
                        Row1.instanceManager.instances[i].Range.value = payrollResult[i].CSU_RANGE;
                        Row1.instanceManager.instances[i].Salary.value = payrollResult[i].SALARY;
                        Row1.instanceManager.instances[i].DeptCode.value = payrollResult[i].DEPT_CODE;
                        Row1.instanceManager.instances[i].SchoolCode.value = payrollResult[i].SCHOOL_CODE;
                    }
                    var rowcount = Row1.instanceManager.instanceCount;
                    Row1.instanceManager.removeInstance(rowcount - 1);
                   var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
                  dateString = dateString.replaceAll(",","");
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                    RunDateTime.value = dateString;
                    DeptHidden.value = Department.value;
                    JobCodeHidden.value = JobCode.value;
                    FromDateHidden.value = FromDate.value;
                    ThroughDateHidden.value = ThroughDate.value;
                    gifModal.style.display = "none";

                } else {

                    var n;
                    Agency.value = null;
                    ReportingUnit.value = null;
                   var rowcountRemoveAll2 = Row1.instanceManager.instanceCount;
                    for (n = 0; n < rowcountRemoveAll2; n++) {
                      debugger;
                       /* Row1.instanceManager.instances[n].EmpName.value = null;
                        Row1.instanceManager.instances[n].EmpId.value = null;
                        Row1.instanceManager.instances[n].Red.value = null;
                        Row1.instanceManager.instances[n].ActionOrReason.value = null;
                        Row1.instanceManager.instances[n].CMSPosition.value = null;
                        Row1.instanceManager.instances[n].SCOPosition.value = null;
                        Row1.instanceManager.instances[n].StartDt.value = null;
                        Row1.instanceManager.instances[n].EndDt.value = null;
                        Row1.instanceManager.instances[n].ApptDur.value = null;
                        Row1.instanceManager.instances[n].Timebase.value = null;
                        Row1.instanceManager.instances[n].Range.value = null;
                        Row1.instanceManager.instances[n].Salary.value = null;
                        Row1.instanceManager.instances[n].DeptCode.value = null;
                        Row1.instanceManager.instances[n].SchoolCode.value = null;*/
                        Row1.instanceManager.removeInstance(Row1.instanceIndex);
                    }
                    var rowcount1 = Row1.instanceManager.instanceCount;
                   Row1.instanceManager.instances[rowcount1-1].EmpName.value = null;
                        Row1.instanceManager.instances[rowcount1-1].EmpId.value = null;
                        Row1.instanceManager.instances[rowcount1-1].Red.value = null;
                        Row1.instanceManager.instances[rowcount1-1].ActionOrReason.value = null;
                        Row1.instanceManager.instances[rowcount1-1].CMSPosition.value = null;
                        Row1.instanceManager.instances[rowcount1-1].SCOPosition.value = null;
                        Row1.instanceManager.instances[rowcount1-1].StartDt.value = null;
                        Row1.instanceManager.instances[rowcount1-1].EndDt.value = null;
                        Row1.instanceManager.instances[rowcount1-1].ApptDur.value = null;
                        Row1.instanceManager.instances[rowcount1-1].Timebase.value = null;
                        Row1.instanceManager.instances[rowcount1-1].Range.value = null;
                        Row1.instanceManager.instances[rowcount1-1].Salary.value = null;
                        Row1.instanceManager.instances[rowcount1-1].DeptCode.value = null;
                        Row1.instanceManager.instances[rowcount1-1].SchoolCode.value = null;
                    Row1.instanceManager.removeInstance(rowcount1 - 1);
                    DeptHidden.value = "";
                    JobCodeHidden.value = "";
                    FromDateHidden.value = "";
                    ThroughDateHidden.value = "";
                    RunDateTime.value = "";
                    gifModal.style.display = "none";
                    showErrorModal("Alert!", "No matching records found");
                }

            }
        });
    }
     gifModal.style.display = "none";
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_InformationTab_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_InformationTab_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  matches = JobCode.value.match(/\d{4}\b/g); 
            var k = 0; 
      var job_code = "";
		   for(k=0;k<matches.length;k++){
		  // alert(matches[k])
		  if(job_code === ""){
            job_code = matches[k];
          }else{
             job_code = job_code+","+matches[k];
          }
           }
      //job_code = matches;
      debugger;
        var dept_id = (Department.value).substring(0, 5);
        var from_dt = FromDate.value;
        var through_dt = ThroughDate.value;
 alert("insd");
$.ajax({
            type: 'GET',
            url: "/bin/getTempFacultyPayrollData",

            data: {
                job_code: job_code,
                dept_id: dept_id,
                from_dt: from_dt,
                through_dt: through_dt
            },

            dataType: 'json',

            success: function(payrollResult) {

                if (payrollResult.length !== 0) {
                    var k;
                    Agency.value = null;
                    ReportingUnit.value = null;
                   var rowcountRemoveAll1 = Row1.instanceManager.instanceCount;
                    for (k = 0; k < rowcountRemoveAll1; k++) {
                        Row1.instanceManager.removeInstance(Row1.instanceIndex);
                    }
                    Row1.instanceManager.removeInstance((Row1.instanceManager.instanceCount) - 1);
                    var i;
                    Agency.value = payrollResult[0].AGENCY;
                    ReportingUnit.value = payrollResult[0].REPORTING_UNIT;
                    for (i = 0; i < payrollResult.length; i++) {
                        Row1.instanceManager.addInstance();
                        Row1.instanceManager.instances[i].EmpName.value = payrollResult[i].EMPLOYEE_NAME;
                        Row1.instanceManager.instances[i].EmpId.value = payrollResult[i].EMPLID;
                        Row1.instanceManager.instances[i].Red.value = payrollResult[i].RCD; 
                     
                        Row1.instanceManager.instances[i].SSN.value = (payrollResult[i].SSN).substr(1, 3)+"-"+(payrollResult[i].SSN).substr(4, 2)+"-"+(payrollResult[i].SSN).substr(5, 4);
                        Row1.instanceManager.instances[i].ActionOrReason.value = payrollResult[i].ACTION_REASON;
                        Row1.instanceManager.instances[i].CMSPosition.value = payrollResult[i].CMS_POSITION;
                        Row1.instanceManager.instances[i].SCOPosition.value = payrollResult[i].SCO_POSITION;
                        Row1.instanceManager.instances[i].StartDt.value = (payrollResult[i].APPT_START_DT).replace(" 00:00:00.0","");
                        Row1.instanceManager.instances[i].EndDt.value = (payrollResult[i].APPT_END_DT).replace(" 00:00:00.0","");
                        Row1.instanceManager.instances[i].ApptDur.value = payrollResult[i].APPT_DURATION;
                        Row1.instanceManager.instances[i].Timebase.value = payrollResult[i].TIME_BASE;
                        Row1.instanceManager.instances[i].Range.value = payrollResult[i].CSU_RANGE;
                        Row1.instanceManager.instances[i].Salary.value = payrollResult[i].SALARY;
                        Row1.instanceManager.instances[i].DeptCode.value = payrollResult[i].DEPT_CODE;
                        Row1.instanceManager.instances[i].SchoolCode.value = payrollResult[i].SCHOOL_CODE;
                    }
                    var rowcount = Row1.instanceManager.instanceCount;
                    Row1.instanceManager.removeInstance(rowcount - 1);                   
                    gifModal.style.display = "none";

                }

            }
        });
  alert("outside");
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_headerItem15976445485561597644549017_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_headerItem15976445485561597644549017_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_headerItem15976544633801597654463971_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_headerItem15976544633801597654463971_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_EmpName_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_EmpName_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var elem = document.getElementById('GUID1597723037628__guideContainer-rootPanel-panel_1449396358-panel-table-Row1-tableItem___guide-item');
debugger;
elem.setAttribute("title",EmpName.value);
debugger;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_SSN_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_SSN_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_Comments_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_Comments_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
  this.visible = true;
}else{
  this.visible = false;
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_DeptCooCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_DeptCooCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null || StageIndicator.value === "ToDeptCoo"){
if(this.value == 1){
  var userValue;
  if(DeptCooSignedDate.value === null){
    
   var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
DeptCooSignedDate.value = d;
  
   DeptCooSignedDate.enabled = false;
}
else{
  DeptCooSignedDate.enabled = false;
  
      DeptCooSignedDate.enabled = false;
    }
   $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserDetails",
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse.userName;
   DeptCooSignature.value =  userValue;
  // EmpSign.mandatory = "";
},
  error: function(error){
alert("error block="+error);
}
});
  
   DeptCooSignature.enabled = false;
  DeptCooSignedDate.enabled = false;

}else{
      DeptCooSignedDate.value = "";
      //EmpSign.mandatory = "error";
      DeptCooSignature.value = null;
}

}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_DeptCooSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_DeptCooSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_DeptCooSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_DeptCooSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_ChairCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_ChairCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToChair"){
if(this.value == 1){
  var userValue;
  if(ChairSignedDate.value === null){
   var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
  ChairSignedDate.value = d;
  
   ChairSignedDate.enabled = false;
}

   $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserDetails",
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse.userName;
   ChairSignature.value =  userValue;
  // EmpSign.mandatory = "";
},
  error: function(error){
alert("error block="+error);
}
});
  
   ChairSignature.enabled = false;
  ChairSignedDate.enabled = false;

}else{
      ChairSignedDate.value = "";
      //EmpSign.mandatory = "error";
      ChairSignature.value = null;
}

}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_ChairSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_ChairSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_ChairSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_ChairSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_DeanCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_DeanCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToDean"){
if(this.value == 1){
  var userValue;
  if(DeanSignedDate.value === null){
  var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
DeanSignedDate.value = d;
  
   DeanSignedDate.enabled = false;
}

   $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserDetails",
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse.userName;
   DeanSignature.value =  userValue;
  // EmpSign.mandatory = "";
},
  error: function(error){
alert("error block="+error);
}
});
  
   DeanSignature.enabled = false;
  DeanSignedDate.enabled = false;

}else{
      DeanSignature.value = "";
      //EmpSign.mandatory = "error";
      DeanSignedDate.value = null;
}

}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_DeanSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_DeanSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_DeanSignedDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_DeanSignedDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_PayrollCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_PayrollCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToPayroll"){
if(this.value == 1){
  var userValue;
  if(PayrollSignedDate.value === null){
  var dateString = new Date().toLocaleString("en-US", {
		
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
PayrollSignedDate.value = d;
  
   PayrollSignedDate.enabled = false;
}

   $.ajax({

type: 'GET', 

url:"/bin/getLoggedUserDetails",
dataType: 'json',
success: function(myresopnse){
  userValue = myresopnse.userName;
   PayrollSignature.value =  userValue;
  // EmpSign.mandatory = "";
},
  error: function(error){
alert("error block="+error);
}
});
  
   PayrollSignature.enabled = false;
  PayrollSignedDate.enabled = false;

}else{
      PayrollSignedDate.value = "";
      //EmpSign.mandatory = "error";
      PayrollSignature.value = null;
}

}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
$.ajax({
        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresopnse) {
            if (myresopnse.length !== null) {
                var userValue = myresopnse.userId;
              LogUser.value  = userValue;
              DeptCooUserId.value = userValue;
            }
        }
            });
        }
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_OPRName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_OPRName_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({
                //url: "/bin/getLoggedInUserDetailsFromDB",
				url: window.location.origin + "/bin/fullertonProxy",
				type: 'GET',
				 data: {
					path: "getLoggedInUserDetailsFromDB"
				 },
                dataType: 'json',
                success: function(myresopnse) {
                    var userValue = myresopnse[0].FULL_NAME;
                    OPRName.value = userValue;
                  	
                },
                error: function(error) {
                    alert("error block=" + error);
                }
            });
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_CaseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_CaseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            

if (StageIndicator.value === null) {
	$.ajax({
		type: 'GET',
		//url: "/bin/getCaseID",
		url: window.location.origin + "/bin/fullertonProxy",
		 data: {
			path: "getCaseID"
		 },

		dataType: 'json',
		success: function (myresponse) {
			CaseId.value = myresponse.CASEID;
		},

	});
}


        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_generatePDF_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_generatePDF_init0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null || StageIndicator.value == "ToDeptCoo") {
    this.visible = true;
}else{
    this.visible = false;
    }

        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_generatePDF_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_generatePDF_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (Department.value!==null && JobCode.value !== null && FromDate.value!== null && ThroughDate.value !==null) {
    generatePdfStep.value = "Draft";
    getPdf();
}else{
  //alert("Please fill all the required fields");
      showErrorModal("Alert!", "Please fill all the required fields");
   }

function getPdf() {
    console.log("in view pdf");
   
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/temp-faculty-report/faculty-payroll-report-by-department');
            jsonData.append('fileName', Department.value + "_" + Date.now());          
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';	
            xhr.send(jsonData);	
            xhr.onload  = function () {
                if (this.status === 200) {
                    var filename = "";
                    var disposition = xhr.getResponseHeader('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(disposition);
                        if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                    }
                    var type = xhr.getResponseHeader('Content-Type');

                    var blob;
                    if (typeof File === 'function') {
                        try {
                            blob = new File([this.response], filename, { type: type });
                        } catch (e) { /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], { type: type });
                    }

                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");
                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);								
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                        setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                    }
                }
            };	      
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_reset1597053783383_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_reset1597053783383_click0 = function (scope) {
    with(this) {
        with(scope) {
             for (n = 0; n < Row1.instanceManager.instanceCount; n++) {
                        Row1.instanceManager.instances[n].EmpName.value = null;
                        Row1.instanceManager.instances[n].EmpId.value = null;
                        Row1.instanceManager.instances[n].Red.value = null;
                        Row1.instanceManager.instances[n].ActionOrReason.value = null;
                        Row1.instanceManager.instances[n].CMSPosition.value = null;
                        Row1.instanceManager.instances[n].SCOPosition.value = null;
                        Row1.instanceManager.instances[n].StartDt.value = null;
                        Row1.instanceManager.instances[n].EndDt.value = null;
                        Row1.instanceManager.instances[n].ApptDur.value = null;
                        Row1.instanceManager.instances[n].Timebase.value = null;
                        Row1.instanceManager.instances[n].Range.value = null;
                        Row1.instanceManager.instances[n].Salary.value = null;
                        Row1.instanceManager.instances[n].DeptCode.value = null;
                        Row1.instanceManager.instances[n].SchoolCode.value = null;
                       Row1.instanceManager.removeInstance(Row1.instanceIndex);
                    }
guideBridge.reset();


        }
	}
}
/**
 * @function temp_faculty_report_faculty_payroll_report_by_department.generated_submit1597053790175_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
temp_faculty_report_faculty_payroll_report_by_department.generated_submit1597053790175_click0 = function (scope) {
    with(this) {
        with(scope) {
            if (Department.value!==null && JobCode.value !== null && FromDate.value!== null && ThroughDate.value !==null) {   

if(DeptHidden.value == Department.value && JobCodeHidden.value == JobCode.value && FromDateHidden.value == FromDate.value && ThroughDateHidden.value== ThroughDate.value){
 /* DeanEmail.value = "yjayaram@fullerton.edu";
  DeptCooEmail.value = "yjayaram@fullerton.edu"; */
   DeanEmail.value = "pushpa.kawadi@thoughtfocus.com";
  DeptCooEmail.value = "pushpa.kawadi@thoughtfocus.com"; 
  EmailSubject1.value = "Faculty Payroll Report - Pending Approval - Unit "+ ReportingUnit.value+"/Dept "+(Department.value).substring(0,5);
  EmailSubject2.value = "Faculty Payroll Report - Return for Review - Unit "+ ReportingUnit.value+"/Dept "+(Department.value).substring(0,5);
  EmailSubject3.value = "Faculty Payroll Report - Pending Action - Unit "+ ReportingUnit.value+"/Dept "+(Department.value).substring(0,5);
  EmailSubject4.value = "Faculty Payroll Report - Unit "+ ReportingUnit.value+"/Dept "+(Department.value).substring(0,5);
 // aftiaDescCWID.value = Department.value + " "+(JobCode.value).substring(0,4);
guideBridge.submit();
 
}else{
showErrorModal("Alert!","Please generate the report");
}
  }else{
      showErrorModal("Alert!", "Please fill all the required fields");
   }


        }
	}
}
