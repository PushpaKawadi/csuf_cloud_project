package com.csuf.cloud.core.utils;

public class CSUFConstantsUtils {

	// Start Time Keeper data save FIELD_VALUES
	public static final String primaryFacultyStaffAttendanceTimekeeper = "EMP_TK_PRI";
	public static final String alternateFacultyStaffAttendanceTimekeeper = "EMP_TK_ALT";
	public static final String approvingOfficialFacultyStaffAttendanceTimekeeper = "EMP_AP_OFF";
	public static final String primaryStudentAttendanceTimekeeper = "STU_TK_PRI";
	public static final String alternateStudentAttendanceTimekeeper = "STU_TK_ALT";
	public static final String approvingOfficialStudentAttendanceTimekeeper = "STU_AP_OFF";
	public static final String primaryWarrantCoordinator = "WRC_WC_PRI";
	public static final String alternateWarrantCoordinator = "WRC_WC_ALT";
	public static final String primaryCMSStudentConfirmationTicketApprover = "STU_CT_AP_PRI";
	public static final String alternateCMSStudentConfirmationTicketApprover = "STU_CT_AP_ALT";
	// End Time Keeper data save FIELD_VALUES

	// Start of VSP Cobra
	public static final String vspCobraOld = "Select B.EMPLID,B.LAST_NAME, B.FIRST_NAME, B.MIDDLE_NAME, B.BIRTHDATE,  B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, 'N/A' as DeptName, 'N/A' as Jobcode From FUL_ECM_BEN_VW B Where  B.NATIONAL_ID = Replace('<<Applicant_SSN>>','-','') union Select B.EMPLID,B.LAST_NAME, B.FIRST_NAME, B.MIDDLE_NAME, B.BIRTHDATE,  B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, A.DEPTNAME, A.JOBCODE From FUL_ECM_PERS_VW B, FUL_ECM_JOB_VW A Where  B.NATIONAL_ID = Replace('<<Applicant_SSN>>', '-','') AND A.EMPLID = B.EMPLID";
	public static final String vspCobraLookUpFieldsOld = "EMPLID,LAST_NAME,FIRST_NAME,MIDDLE_NAME,BIRTHDATE,ADDRESS1,CITY,STATE,POSTAL,DEPTNAME,JOBCODE";

	public static final String vspCobra = "Select B.EMPLID,B.LAST_NAME, B.FIRST_NAME, B.MIDDLE_NAME, B.BIRTHDATE,  B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, 'N/A' as DeptName, 'N/A' as Jobcode From FUL_ECM_BEN_VW B Where  B.NATIONAL_ID = Replace('<<Applicant_SSN>>','-','') union Select B.EMPLID, B.LAST_NAME, B.FIRST_NAME, B.MIDDLE_NAME, B.BIRTHDATE,  B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, A.DEPTNAME, A.JOBCODE From FUL_ECM_PERS_VW B, FUL_ECM_JOB3_VW A Where  B.NATIONAL_ID = Replace('<<Applicant_SSN>>', '-','') AND A.EMPLID = B.EMPLID";
	public static final String vspCobraLookUpFields = "EMPLID,LAST_NAME,FIRST_NAME,MIDDLE_NAME,BIRTHDATE,ADDRESS1,CITY,STATE,POSTAL,DEPTNAME,JOBCODE";

	public static final String vspCobraFormerEmployee = "Select A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, B.DEPTNAME, B.JOBCODE From  FUL_ECM_PERS_VW A, FUL_ECM_JOB3_VW B Where  A.NATIONAL_ID = Replace('<<SSN>>', '-', '')  AND A.EMPLID = B.EMPLID";
	public static final String vspCobraFormerEmployeeFields = "EMPLID,FIRST_NAME,LAST_NAME,MIDDLE_NAME,DEPTNAME,JOBCODE";

	public static final String vspCobraDepLookup = "Select  (A.FIRST_NAME || ' ' || A.MIDDLE_NAME || ' ' || A.LAST_NAME) as Name, A.NATIONAL_ID, A.BIRTHDATE, A.RELATIONSHIP From  FUL_ECM_BEN_VW A, FUL_ECM_PERS_VW B Where A.EMPLID = B.EMPLID AND B.NATIONAL_ID = Replace('<<SSN>>', '-', '') AND A.FIRST_NAME like (decode(trim('<<DependentName>>'),'',' ', trim('<<DependentName>>')) || '%')";
	public static final String vspCobraDepFields = "NAME,NATIONAL_ID,BIRTHDATE,RELATIONSHIP";
	// End of VSP Cobra

	// Start of Grade Change
	public static final String gradeChangeSingleStudent = "Select * from AR_GRADE_FORM where TERM_DESCR = '<<TERM_DESCR>>' and CRSE_NAME ='<<CRSE_NAME>>' and class_nbr ='<<classNo>>' and class_section ='<<sectionNo>>' and INSTR_CWID ='<<instCwid>>' and cwid ='<<cwid>>'";
	public static final String gradeChangeBulk = "Select * from AR_GRADE_FORM where TERM_DESCR = '<<TERM_DESCR>>' and CRSE_NAME ='<<CRSE_NAME>>' and class_nbr ='<<classNo>>' and class_section ='<<sectionNo>>' and INSTR_CWID ='<<instCwid>>'";
	public static final String gradeChangeFields = "CWID,FNAME,LNAME,MNAME,STDNT_CAR_NBR,EFFDT,EFFSEQ,ACAD_PROG,INSTITUTION,TERM_DESCR,STRM,STDNT_ENRL_STATUS,CLASS_NBR,CRSE_ID,CRSE_NAME,CLASS_SECTION,SCHEDULE_NBR,COURSE_LEVEL,UNT_TAKEN,CURRENT_GRADE,DEPT_CD,COLLEGE,MAJOR_CODE,MAJOR_DESCR,MAJOR_TYPE,DEGREE_TYPE,INSTR_NAME,INSTR_EMAIL,INSTR_USERID,INSTR_CWID,CHAIR_USERID,CHAIR_NAME,CHAIR_CWID,CHAIR_EMAIL,DEAN_USERID,DEAN_NAME,DEAN_CWID,DEAN_EMAIL,ASS_DEAN_USERID,ASS_DEAN_NAME,ASS_DEAN_CWID,ASS_DEAN_EMAIL,STUDENT_EMAIL,STUDENT_USERID";
	public static final String gradeChangeUserDetails = "Select distinct CRSE_NAME, INSTR_CWID, INSTR_NAME, CLASS_NBR,INSTR_USERID from AR_GRADE_FORM where LOWER(instr_userid) = LOWER('<<instr_userid>>') and STRM = '<<STRM>>'";
	public static final String gradeChangeClassDetails = "select distinct * from AR_GRADE_FORM where CRSE_NAME = '<<CRSE_NAME>>' and LOWER(instr_userid) = LOWER('<<instr_userid>>') and TERM_DESCR = '<<TERM_DESCR>>'";
	public static final String gradeChangeSchemeDetails = "select distinct CRSE_ID,GRADING_BASIS,GRADING_SCHEME from AR_GRADE_FORM where TERM_DESCR = '<<TERM_DESCR>>' and CRSE_ID='<<CRSE_ID>>'";
	public static final String gradeChangeToDetails = "select distinct CRSE_GRADE_INPUT,DESCR from AR_GRADE_ROSTER where CRSE_ID='<<CRSE_ID>>' and GRADING_BASIS='<<GRADING_BASIS>>' and GRADING_SCHEME='<<GRADING_SCHEME>>' order by CRSE_GRADE_INPUT";
	public static final String gradeChangeCwidDetails = "Select distinct INSTR_USERID, INSTR_NAME from AR_GRADE_FORM where INSTR_CWID= '<<INSTR_CWID>>' and TERM_DESCR='<<TERM_DESCR>>'";
	public static final String gradeChangeLoggedIn = "SELECT DISTINCT INSTR_CWID, INSTR_NAME FROM AR_GRADE_FORM where LOWER(instr_userid) = LOWER('<<instr_userid>>') and TERM_DESCR='<<TERM_DESCR>>'";
	public static final String gradeChangeTerm = "SELECT DISTINCT CRSE_NAME, CLASS_NBR, INSTR_CWID,INSTR_USERID,CLASS_SECTION, COURSE_LEVEL, INSTR_NAME, DEPT_CD FROM AR_GRADE_FORM where INSTR_CWID='<<INSTR_CWID>>' AND TERM_DESCR='<<TERM_DESCR>>'";
	public static final String gradeChangeClassSection = "SELECT DISTINCT CLASS_SECTION, CRSE_NAME FROM AR_GRADE_FORM where INSTR_CWID='<<INSTR_CWID>>' AND TERM_DESCR='<<TERM_DESCR>>' AND CLASS_NBR='<<CLASS_NBR>>'";
	public static final String gradeChangeCwidFromUserID = "SELECT distinct INSTR_CWID,INSTR_NAME FROM AR_GRADE_FORM where instr_userid='<<USERID>>'";
	// End of Grade Change

	// Start of Filenet Retry
	public static final String filenetRetry = "Select * from aem_audit_trace where event_type='Filenet' and data_processed='0'";
	public static final String filenetUpdate = "UPDATE aem_audit_trace SET data_processed = '1' WHERE event_type='Filenet' and audit_id='<<audit_id>>'";
	// End of Filenet Retry

	// Start of Layoff Reassignment
	public static final String layoffReassignment = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DEPTID,B.DESCR, B.UNION_CD, ('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' || to_char(EMPL_RCD+1, '000') ) as SCOPosNum, B.Grade, B.STD_HOURS,(Select supervisor_name from ful_ecm_reports_vw where b.reports_to = position_nbr) as SuperName,(select extension from ful_ecm_reports_vw where b.reports_to = position_nbr) as SuperExtension from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.emplid = '<<Empl_ID>>' and A.EMPLID = B.EMPLID";
	public static final String layoffReassignAppAdminDetails = "select * from  HR_Staff_Evaluation where emplid='<<Empl_ID>>' and DeptID='<<Dept_ID>>'";
	public static final String layoffReassignAppAdminFields = "ADMIN_EMP_NAME,ADMIN_EMP_USERID,MANAGER_EMP_USERID,SUPERVISORNAME";
	public static final String layoffReassignmentFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,DESCR,UNION_CD,SCOPOSNUM,GRADE,STD_HOURS,SUPERNAME,SUPEREXTENSION";
	// End of Layoff Reassignment

	// Start of OT/SD Distributed Request
	public static final String OTSDRequestDistUserID = "select A.deptid from cmsrda.cms_hr_dept_sec A where A.userid = '<<getUser_ID>>'";
	public static final String OTSDRequestDistUserIDFields = "DEPTID";

/*	public static final String OTSDRequestDistEmpID = "Select  ( substr(A.First_Name,0,1) || ' ' || substr(A.middle_name,0,1) ) as Initials,  A.last_name, B.Jobcode, B.Empl_RCD, A.National_ID, B.POSITION_NBR from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = Replace('<<Empl_ID>>','-','' ) and A.EMPLID = B.EMPLID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	public static final String OTSDRequestDistEmpIDFields = "INITIALS,LAST_NAME,JOBCODE,EMPL_RCD,NATIONAL_ID,POSITION_NBR";*/
	
	public static final String OTSDRequestDistEmpID = "Select  ( substr(A.First_Name,0,1) || ' ' || substr(A.middle_name,0,1) ) as Initials, A.First_Name, A.middle_name, A.last_name, B.Jobcode, B.Empl_RCD, A.National_ID, B.POSITION_NBR, A.CSU_CHRS_ID, B.CSU_UNIT from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where C.CSU_CHRS_ID = A.CSU_CHRS_ID and A.CSU_CHRS_ID = B.CSU_CHRS_IS and C.USERID = '<<getuser>>' and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getuser>>')";
	public static final String OTSDRequestDistEmpIDFields = "INITIALS,LAST_NAME,JOBCODE,EMPL_RCD,NATIONAL_ID,POSITION_NBR,CSU_CHRS_ID,CSU_UNIT,FIRST_NAME,MIDDLE_NAME";

	public static final String getManageruserIdLookup = "SELECT MANAGER_EMP_USERID,MANAGE_EMP_NAME FROM HR_STAFF_EVALUATION WHERE EMPUSERID='<<EMPUSERID>>' and DEPTID='<<DEPTID>>'";
	// End of OT/SD Distributed Request

	// Start of Emp Transfer Data
	public static final String empTransferData = "Select A.FIRST_NAME, A.LAST_NAME, A.BIRTHDATE,  B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.NATIONAL_ID = Replace('<<SSN>>', '-','') and A.EMPLID = B.EMPLID";
	public static final String empTransferDataLookUpFields = "FIRST_NAME,LAST_NAME,BIRTHDATE,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME";
	// End of Emp Transfer Data

	// Start of Direct Pay Dental
	public static final String directPayDental = "Select A.FIRST_NAME, A.LAST_NAME,  A.MIDDLE_NAME,   B.JOBCODE,  A.CITY, A.STATE, A.POSTAL, A.HOME_PHONE,  B.UNION_CD, B.DEPTNAME,  A.ADDRESS1 From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B Where  A.NATIONAL_ID = Replace('<<SSN>>','-','') AND A.EMPLID = B.EMPLID";
	public static final String directPayDentalLookUpFields = "FIRST_NAME,LAST_NAME,MIDDLE_NAME,JOBCODE,CITY,STATE,POSTAL,HOME_PHONE,UNION_CD,DEPTNAME,ADDRESS1";
	// End of Direct Pay Dental

	// Start of Domestic Partner
	// public static final String domesticPartner = "Select A.FIRST_NAME,
	// A.LAST_NAME,A.NATIONAL_ID, B.DEPTNAME, B.JOBCODE From FUL_ECM_PERS_VW A,
	// FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C Where A.EMPLID = B.EMPLID AND
	// A.emplid = C.cwid AND C.userid = '<<getUser_ID>>'";
	// public static final String domesticPartnerLookUpFields =
	// "FIRST_NAME,LAST_NAME,NATIONAL_ID,DEPTNAME,JOBCODE";
	// End of Domestic Partner

	// Start of New Position Manager
	// Commented by Ajeet - Remove the security check to allow all the Users to
	// launch the MPP PD form
	// public static final String newPositionManagerEmplSQL = "Select A.FIRST_NAME,
	// A.LAST_NAME, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, B.DESCR,
	// B.UNION_CD, B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE
	// || ' - ' || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when
	// 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then
	// '1' else '0' end) as PartTime, (Select concat(supervisor_name,concat(' - ',
	// WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as
	// SupervisorName, (CASE B.UNION_CD when 'M80' then B.DESCR1 else '-'end) as
	// DESCR1 from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B ,FUL_EMP_CWID_NT_NAME C where
	// A.EMPLID = '<<Empl_ID>>' and A.EMPLID = B.EMPLID and A.EMPLID = C.cwid and
	// deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid =
	// '<<getUser_ID>>')";
	public static final String newPositionManagerEmplSQL = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime,  (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName, (CASE B.UNION_CD when 'M80' then B.DESCR1  else '-'end) as DESCR1 from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B ,FUL_EMP_CWID_NT_NAME C where A.EMPLID = '<<Empl_ID>>' and A.EMPLID = B.EMPLID and A.EMPLID = C.cwid";

	public static final String newPositionManagerEmpLookUpFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,GRADE,SCONum,FullTime,PartTime,SupervisorName,DESCR1,USERID";

	public static final String newPositionManagerUserIDSQL = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, A.EMPLID, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName, (CASE B.UNION_CD when 'M80' then B.DESCR1 else '-'end) as description from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B ,FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String newPositionManagerUserLookUpFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,GRADE,SCONum,FullTime,PartTime,EMPLID,SupervisorName,description,USERID";

	public static final String newPositionNumberLookUpSQL = "Select * from HR_POSITION_DATA where POSITION_NBR = '<<POSITION_NUMBER>>' AND MANAGER_UNION_CD='<<UNION_CD>>'";
	public static final String newPositionNumberLookUpFields = "SUPERVISORNAME,DIVISON,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,MANAGER_EMAIL_ID,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,ADMIN_TITLE,ADMIN_EMAIL_ID";

	public static final String managerIDLookUpSQL = "Select * from HR_Staff_Evaluation where emplid='<<MANAGER_ID>>'";
	public static final String managerIDLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,UNION_CD,EMP_USERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	// End of New Position Manager

	// Start of New Position Staff
	public static final String newPositionStaffUserIDSQL = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, A.EMPLID, B.EMPL_RCD, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B , FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String newPositionStaffUserLookUpFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,GRADE,SCONum,FullTime,PartTime,EMPLID,EMPL_RCD,SupervisorName,USERID";
	// Commented by Pushpa - Remove the security check to allow all the Users to
	// launch the Staff PD form
	// public static final String newPositionStaffEmplSQL = "Select A.FIRST_NAME,
	// A.LAST_NAME, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, B.DESCR,
	// B.UNION_CD, B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE
	// || ' - ' || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when
	// 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then
	// '1' else '0' end) as PartTime, B.EMPL_RCD, (Select
	// concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw
	// where b.reports_to = position_nbr) as SupervisorName from FUL_ECM_PERS_VW A,
	// FUL_ECM_JOB_VW B , FUL_EMP_CWID_NT_NAME C where A.EMPLID = '<<Empl_ID>>' and
	// A.EMPLID = C.cwid and deptid in (select deptid from cmsrda.cms_hr_dept_sec
	// where userid = '<<getUser_ID>>') and A.EMPLID = B.EMPLID";
	public static final String newPositionStaffEmplSQL = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, B.EMPL_RCD, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B , FUL_EMP_CWID_NT_NAME C where A.EMPLID = '<<Empl_ID>>' and A.EMPLID = C.cwid and A.EMPLID = B.EMPLID";
	// Commented by Pushpa - Remove the security check to allow all the Users to
	// launch the MPP form
	public static final String newPositionStaffEmpLookUpFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,UNION_CD,GRADE,FullTime,PartTime,SupervisorName,SCONum,USERID";
	// End of New Position Staff

	// Start For Search Functionality
	public static final String userDetailsForSearchFunctionality = "SELECT A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID FROM EMPL_ACT_DIR_DATA A INNER JOIN HR_Staff_Evaluation B On A.EMPLOYEEID=B.EMPLID WHERE B.UNION_CD in('M98','M80') AND LOWER(LASTNAME) LIKE LOWER('<<LASTNAME>>%')";
	// public static final String userDetailsFromNameForSearchFunctionality =
	// "SELECT DISTINCT
	// A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID,A.DEPTTITLE,B.SUPERVISORNAME,B.SUPERVISORTITLE
	// FROM EMPL_ACT_DIR_DATA A INNER JOIN HR_Staff_Evaluation B On
	// A.EMPLOYEEID=B.MANAGER_EMPLID WHERE LOWER(LASTNAME)=LOWER('<<LASTNAME>>') AND
	// LOWER(FIRSTNAME)=LOWER('<<FIRSTNAME>>')";
	// public static final String userDetailsFromNameForSearchFunctionality =
	// "SELECT DISTINCT
	// A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID,A.DEPTTITLE,B.SUPERVISORNAME,B.SUPERVISORTITLE
	// FROM EMPL_ACT_DIR_DATA A INNER JOIN HR_Staff_Evaluation B On
	// A.EMPLOYEEID=B.MANAGER_EMPLID WHERE B.UNION_CD in('M98','M80') AND
	// LOWER(LASTNAME)=LOWER('<<LASTNAME>>') AND
	// LOWER(FIRSTNAME)=LOWER('<<FIRSTNAME>>')";
	public static final String detailsForSearchFunctionality = "select EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID,DEPTTITLE from EMPL_ACT_DIR_DATA where LOWER(LASTNAME)=LOWER('<<LASTNAME>>') AND LOWER(FIRSTNAME)=LOWER('<<FIRSTNAME>>')";
	public static final String getUserTitileForSearchFunctionality = "Select SUPERVISORNAME,SUPERVISORTITLE from HR_STAFF_EVALUATION where MANAGER_EMP_USERID='<<userID>>'";
	public static final String vpToDepartmentCoordinatorDelegatee = "select * from AEM_VP_DEPT_DELEGATEE where LOWER(VP_USERID)=LOWER('<<userID>>')";
	public static final String vpDelegateeWithDivisionCode = "select * from AEM_VP_DEPT_DELEGATEE where LOWER(VP_DEPTID)=LOWER('<<deptID>>')";
	// End For Search Functionality

	// Start of Hourly INT
	public static final String HourlyINTUserLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,  A.MIDDLE_NAME, A.NATIONAL_ID AS LAST4SSN, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode, substr(A.WORK_PHONE, 7, 10) as Extenstion,(select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<getUser_ID>>') as EMP_EMAIL_ID , B.UNION_CD from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String HourlyINTUserLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,Jobcode,Extenstion,EMP_EMAIL_ID,UNION_CD";

	public static final String HourlyINTEmpLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,  A.MIDDLE_NAME, A.NATIONAL_ID AS LAST4SSN, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode, (select USERID from FUL_EMP_CWID_NT_NAME where CWID = '<<Empl_ID>>') as EMP_USERID,(select EMAILID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Empl_ID>>') as EMP_EMAIL_ID, substr(A.WORK_PHONE, 7, 10) as Extenstion, B.UNION_CD from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = Replace('<<Empl_ID>>', '-','') and A.EMPLID = B.EMPLID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	public static final String HourlyINTEmpLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,Jobcode,EMP_USERID,EMP_EMAIL_ID,Extenstion,UNION_CD";

	public static final String HourlyINTManagerLookupSQL = "SELECT D.SUPERVISOR_NAME AS SupervisorName, D.WORKING_TITLE AS SupervisorTitle , (SELECT USERID AS MANAGERUSERID FROM cmsrda.ful_emp_cwid_nt_name WHERE CWID IN (SELECT EMPLID FROM FUL_ECM_JOB_VW J WHERE POSITION_NBR IN (SELECT REPORTS_TO FROM FUL_ECM_JOB_VW K WHERE emplid='<<EMP_ID>>' and K.UNION_CD = '<<UNION_CD>>' and K.DEPTID = '<<DEPTID>>'))) as  MANAGER_USERID FROM FUL_ECM_JOB_VW B LEFT JOIN FUL_ECM_PERS_VW A ON A.EMPLID = B.EMPLID LEFT JOIN FUL_EMP_CWID_NT_NAME C ON C.CWID = B.EMPLID LEFT JOIN FUL_ECM_REPORTS_VW D ON D.POSITION_NBR = B.REPORTS_TO WHERE C.CWID = '<<EMP_ID>>' and B.UNION_CD = '<<UNION_CD>>' and B.DEPTID = '<<DEPTID>>'";
	public static final String HourlyINTManagerLookUpFields = "SupervisorName,SupervisorTitle,MANAGER_USERID";
	// End of Hourly INT

	// Start of Get Email Lookup
	public static final String getEmailCwidLookup = "select EMAILID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Emp_ID>>'";
	public static final String getEmailUserIdLookup = "select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<UID>>'";
	// End of Get Email Lookup

	// Start of Major_Minor Change
	public static final String studentPersonalInformationCWID = "select DISTINCT STUDENT_ID,STUDENT_EMAIL,STUDENT_FNAME,STUDENT_LNAME,STUDENT_PHONE,STUDENT_USERID,ACAD_PROG,TERM_DESCR,ACAD_YEAR from AR_CSU_STDNT_PROG_DATA where STUDENT_ID='<<CWID>>' and ACAD_CAREER='UGRD'";
	public static final String studentPersonalInformation = "select DISTINCT STUDENT_ID,STUDENT_EMAIL,STUDENT_FNAME,STUDENT_LNAME,STUDENT_PHONE,STUDENT_USERID,ACAD_PROG,TERM_DESCR,ACAD_YEAR,ADMIT_TERM,ADMIT_TERM_DESCR,ACAD_PLAN,FUL_COLLEGE,PLAN_SEQUENCE,ACAD_PLAN_TYPE,PLAN_RANK,EFFSEQ,DEPTID,DEPTNAME,LOA_FLAG from AR_CSU_STDNT_PROG_DATA where lower(STUDENT_USERID) = lower('<<getUser_ID>>') and ACAD_CAREER='UGRD'";
	public static final String getCurrentMajorDetailsUpdated = "select distinct ACAD_PLAN,PROGRAMS from AR_CSU_STDNT_PROG_DATA where STUDENT_USERID='<<getUser_ID>>' and ACAD_CAREER='UGRD' and ACAD_PLAN_TYPE in ('MAJ','PRP') and PLAN_RANK='1'";
	public static final String getAllMajorsUpdated = "select distinct ACAD_PLAN, PROGRAMS from AR_CSU_STDNT_PROG where DESCR like '%1MJ%' and ACAD_PROG='UGD' ORDER BY PROGRAMS ASC";
	public static final String getAllMajorsAcadPlan = "select distinct ACAD_PLAN from AR_CSU_STDNT_PROG where DESCR like '%1MJ%' and ACAD_PROG='UGD' and PROGRAMS='<<PROGRAM>>'";
	public static final String getAllAdditionalMajors = "select distinct ACAD_PLAN, PROGRAMS from AR_CSU_STDNT_PROG where DESCR like '%2MJ%' and ACAD_PROG='UGD' ORDER BY PROGRAMS ASC";
	public static final String getAllAdditionalMajorsAcadPlan = "select distinct ACAD_PLAN from AR_CSU_STDNT_PROG where DESCR like '%2MJ%' and ACAD_PROG='UGD' and PROGRAMS='<<PROGRAM>>'";
	public static final String getCurrentAdditionalMajors = "select distinct ACAD_PLAN,PROGRAMS from AR_CSU_STDNT_PROG_DATA where STUDENT_USERID='<<getUser_ID>>' and ACAD_CAREER='UGRD' and ACAD_PLAN_TYPE in ('MAJ','PRP') and PLAN_RANK>='2'";
	public static final String getCurrentAdditionalMajorsAcadPlan = "select distinct ACAD_PLAN from AR_CSU_STDNT_PROG_DATA where STUDENT_USERID='<<getUser_ID>>' and ACAD_CAREER='UGRD' and ACAD_PLAN_TYPE in ('MAJ','PRP') and PLAN_RANK>='2' and PROGRAMS='<<PROGRAM>>'";
	public static final String getAllMinorsUpdated = "Select ACAD_PLAN, PROGRAMS from AR_CSU_STDNT_PROG where ACAD_PLAN_TYPE='MIN' and ACAD_PROG='UGD' ORDER BY PROGRAMS ASC";
	public static final String getCurrentMinorsUpdated = "select distinct ACAD_PLAN,PROGRAMS from AR_CSU_STDNT_PROG_DATA where STUDENT_USERID='<<getUser_ID>>' and ACAD_CAREER='UGRD' and ACAD_PLAN_TYPE='MIN'";
	public static final String getAllMinorAcadPlan = "Select ACAD_PLAN from AR_CSU_STDNT_PROG where ACAD_PLAN_TYPE='MIN' and ACAD_PROG='UGD'and PROGRAMS='<<PROGRAM>>'";
	public static final String getCurrentMinorAcadPlan = "select distinct ACAD_PLAN from AR_CSU_STDNT_PROG_DATA where PROGRAMS='<<PROGRAM>>'";
	public static final String getMinorChairDetails = "select distinct FUL_COLLEGE,FUL_COLLEGE_NAME,DEPTID,DEPTNAME,CHAIR_USERID,CHAIR_NAME,CHAIR_EMPLID,CHAIR_EMAIL from AR_CSU_STDNT_PROG_DATA where PROGRAMS='<<PROGRAM>>'";
	public static final String getAllCertificates = "Select ACAD_PLAN, PROGRAMS from AR_CSU_STDNT_PROG where ACAD_PLAN_TYPE='CER' and ACAD_PROG='UGD' ORDER BY PROGRAMS ASC";
	public static final String getCurrentCertificates = "select distinct ACAD_PLAN,PROGRAMS from AR_CSU_STDNT_PROG_DATA where STUDENT_USERID='<<getUser_ID>>' and ACAD_CAREER='UGRD' and ACAD_PLAN_TYPE='CER'";
	public static final String getAllCertificateAcadPlan = "Select ACAD_PLAN from AR_CSU_STDNT_PROG where ACAD_PLAN_TYPE='CER' and ACAD_PROG='UGD' and PROGRAMS='<<PROGRAM>>'";
	public static final String getCurrentCertificateAcadPlan = "select distinct ACAD_PLAN from AR_CSU_STDNT_PROG_DATA where PROGRAMS='<<PROGRAM>>'";
	public static final String getAllChairDetials = "select distinct FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_EMPNAME,CHAIR_USERID,CHAIR_EMAIL,DEPTID,DEPTNAME from AR_CSU_STDNT_PROG where lower(PROGRAMS)=lower('<<PROGRAM>>')";
	// End of Major_Minor Change

	// Start of Late Adds
	public static final String getUserLookUpDetails = "select distinct A.EMPLID,A.FIRST_NAME,A.LAST_NAME,A.PREF_EMAIL,A.HOME_PHONE,A.CELL_PHONE,A.WORK_OTR_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.OU_FLAG,B.STUDENT_ID,B.DEGREE,B.PROGRAMS,B.EXP_GRAD_TERM FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE lower(A.USERID)=lower('<<getUser_ID>>')";
	public static final String getCourseCatalogDetails = "select distinct CLASS_NBR, CRSE_NAME,CRSE_ID,UNITS_MINIMUM,STRM,INSTR_NAME,INSTR_L_NAME,INSTR_F_NAME,INSTR_ID,INSTR_USERID,INSTR_EMAIL,CHAIR_EMPLID,CHAIR_USERID,CHAIR_NAME,CHAIR_EMAIL,DEAN_EMPLID,DEAN_USERID,DEAN_NAME,DEAN_EMAIL,DEPTID,DEPTNAME from AR_CRSE_CATALOG where CLASS_NBR='<<CLASS_NUMBER>>' and STRM='<<STRM>>'";
	public static final String getCWIDLookUpDetails = "select distinct A.EMPLID,A.FIRST_NAME,A.LAST_NAME,A.PREF_EMAIL,A.HOME_PHONE,A.CELL_PHONE,A.WORK_OTR_PHONE,A.ADDRESS1,A.ADDRESS2, A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.OU_FLAG,B.STUDENT_ID,B.DEGREE,B.PROGRAMS,B.EXP_GRAD_TERM FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.EMPLID=B.STUDENT_ID WHERE B.STUDENT_ID='<<CWID>>'";
	// End of Late Adds

	// Start of Temp Faculty Report
	public static final String tempFacultyGetPayrollDataSQL = "select EMPLOYEE_NAME, EMPLID,SSN, RCD, ACTION_REASON, CMS_POSITION, SCO_POSITION, APPT_START_DT, APPT_END_DT, APPT_DURATION, TIME_BASE, CSU_RANGE, SALARY, DEPT_CODE, SCHOOL_CODE, REVISED_CONTRACT,AGENCY,REPORTING_UNIT from  HR_FACULTY_PAYROL_DATA WHERE APPT_START_DT BETWEEN TO_DATE ('<<from_dt>>','DD-MON-YYYY') AND TO_DATE('<<through_dt>>','DD-MON-YYYY') AND DEPTID= '<<dept_id>>' AND JOBCODE in ('<<job_code>>') AND EMPLID like '%<<emp_id>>%' ORDER BY EMPLOYEE_NAME,RCD, APPT_START_DT, APPT_END_DT";
	public static final String tempFacultyGetPayrollDataSQLLookUpFields = "EMPLOYEE_NAME,EMPLID,SSN,RCD,ACTION_REASON,CMS_POSITION,SCO_POSITION,APPT_START_DT,APPT_END_DT,APPT_DURATION,TIME_BASE,CSU_RANGE,SALARY,DEPT_CODE,SCHOOL_CODE,REVISED_CONTRACT,AGENCY,REPORTING_UNIT";

	public static final String tempFacultyGetPayrollDataEmpIdSQL = "select EMPLOYEE_NAME, EMPLID,SSN, RCD, ACTION_REASON, CMS_POSITION, SCO_POSITION, APPT_START_DT, APPT_END_DT, APPT_DURATION, TIME_BASE, CSU_RANGE, SALARY, DEPT_CODE, SCHOOL_CODE, REVISED_CONTRACT,AGENCY,REPORTING_UNIT from  HR_FACULTY_PAYROL_DATA WHERE APPT_START_DT BETWEEN TO_DATE ('<<from_dt>>','DD-MON-YYYY') AND TO_DATE('<<through_dt>>','DD-MON-YYYY') AND EMPLID = '<<emp_id>>' ORDER BY EMPLOYEE_NAME,RCD, APPT_START_DT, APPT_END_DT";
	public static final String tempFacultyGetPayrollDataEmpIdSQLLookUpFields = "EMPLOYEE_NAME,EMPLID,SSN,RCD,ACTION_REASON,CMS_POSITION,SCO_POSITION,APPT_START_DT,APPT_END_DT,APPT_DURATION,TIME_BASE,CSU_RANGE,SALARY,DEPT_CODE,SCHOOL_CODE,REVISED_CONTRACT,AGENCY,REPORTING_UNIT";

	public static final String tempFacultyGetJobCodeSQL = "select distinct JOBCODE,DESCR,JOBCODE || ' ' || DESCR as JOBCODE_DESCR from HR_TF_JOBCODE_TBL order by JOBCODE asc";
	public static final String tempFacultyGetJobCodeLookupFields = "JOBCODE,DESCR,JOBCODE_DESCR";

	public static final String tempFacultyGetChairInfoSQL = "select CHAIR_USERID, CHAIR_NAME,CHAIR_EMAIL,DEAN_USERID,DEAN_EMAIL,DEAN_NAME from AR_DEPT_CHAIR_INFO_PAYROLL where DEPTID = '<<dept_id>>'";
	public static final String tempFacultyGetEmpIDSQL = "select CWID from ful_emp_cwid_nt_name where userid = '<<user_id>>'";
	public static final String tempFacultyGetDeptSQL = "SELECT distinct DEPTID,DESCR,DEPTID || ' ' || DESCR as DEPT_DESCR FROM CMS_HR_DEPT_SEC where EMPLID='<<emp_id>>' order by DEPTID asc";
	public static final String tempFacultyGetDeptLookupFields = "DEPTID,DESCR,DEPT_DESCR";
	// End of Temp Faculty Report

	// Start of Leave Of Absence
	public static final String getStudentLookUpDetails = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.USERID,A.PREF_EMAIL,A.CELL_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.STUDENT_ID,B.DEGREE,B.PROGRAMS,B.ACAD_CAREER,B.CHAIR_EMPLID,B.CHAIR_NAME,B.CHAIR_USERID,B.CHAIR_EMAIL,B.DEPTID,B.DEPTNAME,B.ACAD_PROG,B.INTERNATIONAL_FLAG,B.LOA_FLAG FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE lower(A.USERID)=lower('<<getUser_ID>>')";
	public static final String getStudentCWIDDetails = "select distinct A.USERID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.USERID,A.PREF_EMAIL,A.CELL_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.STUDENT_USERID,B.DEGREE,B.PROGRAMS,B.ACAD_CAREER,B.CHAIR_EMPLID,B.CHAIR_NAME,B.CHAIR_USERID,B.CHAIR_EMAIL,B.DEPTID,B.DEPTNAME,B.ACAD_PROG,B.INTERNATIONAL_FLAG,B.LOA_FLAG FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.EMPLID=B.STUDENT_ID WHERE A.EMPLID='<<getCWID>>'";
	// End of Leave Of Absence

	// Start of I-Grade Changes
	// public static final String incompleteGradeLoggedIn = "select distinct
	// INSTR_CWID,
	// INSTR_NAME,class_nbr,crse_name,crse_id,schedule_nbr,unt_taken,instr_email,instr_userid
	// from ar_grade_form where instr_userid = '<<instr_userid>>' and
	// term_descr='<<TERM_DESCR>>'";
	public static final String incompleteGradeLoggedIn = "Select distinct class_nbr, crse_id,crse_name,unt_taken,instr_cwid,instr_name,instr_userid,instr_email,class_section from AR_INCOMPLETE_GRADE where term_descr='<<TERM_DESCR>>' and instr_userid='<<instr_userid>>'";
	public static final String incompleteGradeCwid = "select distinct FNAME,LNAME,STUDENT_USERID,STUDENT_EMAIL,DEPTID,DEPARTMENT,CHAIR_USERID,STRM,(select concat(concat(ADDRESS1,ADDRESS2),concat(ADDRESS3,ADDRESS4)) from AR_PERSON_INFO where EMPLID = '<<emplid>>')as ADDRESS_VAL,CHAIR_EMAIL_ADDRESS,CHAIR_NAME from AR_INCOMPLETE_GRADE where CWID ='<<emplid>>' and CLASS_NBR = '<<class_nbr>>' and TERM_DESCR = '<<term_desc>>' and CRSE_NAME = '<<crse_name>>' and INSTR_USERID = '<<instr_userid>>'";
	// public static final String incompleteGradeCwid = "select distinct Name,
	// last_name,first_name,userid,pref_email,address1,address2,address3,address4,emplid
	// from AR_PERSON_INFO where emplid='<<emplid>>'";
	// End of I-Grade Changes

	// Start of Get Email Lookup
	public static final String getEmailAddressFromEmpID = "select EMAILID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Emp_ID>>'";
	public static final String getEmailAddressFromUserId = "select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<UID>>'";
	// End of Get Email Lookup

	// Start of manual CD048 Lookup
	public static final String getManualCDDeptID = "select A.deptid from cmsrda.cms_hr_dept_sec A where A.userid = '<<getUser_ID>>'";
	public static final String getManualCDEmplName = "Select ( substr(A.First_Name,0,1) || ' ' || substr(A.middle_name,0,1) ) as Initials,  A.last_name, A.Middle_Name, B.Jobcode, B.Empl_RCD, B.UNION_CD, B.CSU_UNIT, ('242-' || B.CSU_UNIT || '-' || B.JOBCODE || '-' || '00' || (B.EMPL_RCD+1)) as SCOPositionNum, B.DEPTID, B.FUL_DIVISION, B.CSU_SCO_AGENCY, B.CSU_UNIT, A.National_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = Replace('<<Empl_ID>>','-','' ) and A.EMPLID = B.EMPLID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	// End of manual CD048 Lookup

	// Start STD 682 Overtime Distributed
	public static final String std682OvertimeDistributedEmpLookUpSQL = "Select A.First_Name, A.Last_Name, B.UNION_CD, B.CSU_UNIT, ('242-' || B.CSU_UNIT || '-' || B.JOBCODE || '-' || '00' || (B.EMPL_RCD+1)) as SCOPositionNum, A.Middle_Name, B.EMPL_RCD, B.DEPTID, B.FUL_DIVISION, B.CSU_SCO_AGENCY, B.CSU_UNIT from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = Replace('<<Empl_ID>>','-','') and A.EMPLID = B.EMPLID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	public static final String std682OvertimeDistributedUserIDLookUpSQL = "Select A.First_Name, A.Last_Name, B.UNION_CD, B.CSU_UNIT, ('242-' || B.CSU_UNIT || '-' || B.JOBCODE || '-' || '00' || (B.EMPL_RCD+1)) as SCOPositionNum, A.Middle_Name, B.EMPL_RCD, B.DEPTID, B.FUL_DIVISION, B.CSU_SCO_AGENCY, B.CSU_UNIT, A.EMPLID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	// End STD 682 Overtime Distributed

	// Start of Appeal Form
	public static final String appealUserIdSQL = "select * from AR_ADM_APPEAL_DATA where LOWER(STUDENT_USERID) = LOWER('<<student_userid>>')";
	public static final String appealSubmissionDataSQL = "select * from AEM_APPEAL_FORM where CWID='<<cwid>>' and LOWER(TERM) = LOWER('<<term>>')";
	public static final String appealSubmissionDataLookupFields = "CASEID,TRANSFER_FLAG,FRESHMEN_FLAG,RETURNING_FLAG,TERM,APPLICANTNAME,CWID,CSUSTUDENT_EMAIL,PERSONALSTUDENT_EMAIL,TEL_NUMBER,APPLICANT_SIGNATURE,APPLICANT_SIGN_DATE,APPLICANT_COMMENTS,CERTIFY_CB,APPEAL_REASON1,APPEAL_REASON2,APPEAL_REASON3,APPEAL_REASON4,APPEAL_REASON5,APPEAL_REASON6,APPEAL_REASON7,APPEAL_REASON8,OTHER_REASON,APPEAL_STATEMENT,DEPOSIT_BY_DATE,STUDENT_GPA,DEFICIENT_AG_COURSE,UNITS_COMPLETED,TOTAL_GPA,STUDENT_GPA1,LOW_GPA_WITH_ADT_CB,LOCAL_ADMISSION_GPA,OUT_LOCAL_ADMISSION_GPA,GOLDEN_DEFICIENT_IN,APPEALS_CB,APPEALS_SIGN,APPEALS_SIGN_DATE,APPEAL_COMMENTS,APPEALS_RECOMMEND,APPROVE_ACTION,DENY_ACTION,STUDENT_USERID,APPROVE_CONDITION,WORKFLOW_INSTANCE_ID,AEM_HISTORY_ID,UPDATED_DT";
	// End of Appeal Form
	// Start of Petition Form
	public static final String petitionUserIdSQL = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.PREF_EMAIL,A.HOME_PHONE,A.CELL_PHONE,A.WORK_OTR_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.COUNTRY,A.POSTAL,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME,B.ACAD_CAREER,B.EIP_FLG,B.CHAIR_USERID, B.CHAIR_NAME, B.CHAIR_EMAIL FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE LOWER(A.USERID)=LOWER('<<getUser_ID>>')";
	public static final String getAssociateDeanSQL = "SELECT DISTINCT EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,COLLEGE from AR_COURSE_ASSOC_DEAN_LKP WHERE FUL_COLLEGE = '<<FUL_COLLEGE>>'";
	// public static final String petitionUserIdLookUpFields =
	// "EMPLID,NAME,FIRST_NAME,LAST_NAME,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,CITY,STATE,COUNTRY,POSTAL,ACAD_CAREER";
	// public static final String petitionCourseSQL = "select CRSE_ID,STRM,
	// CRSE_NAME, UNT_TAKEN, CLASS_SECTION, SCHEDULE_NBR,DEPT_CD,CLASS_NBR from
	// AR_GRADE_PETITION_FORM_B where CWID='<<cwid>>' and TERM_DESCR =
	// '<<term_descr>>'";
	public static final String petitionCourseSQL = "select CWID,FNAME,LNAME,MNAME,ACAD_PROG,TERM_DESCR,STRM,CLASS_NBR,CRSE_ID,CLASS_SECTION,COURSE_LEVEL,UNT_TAKEN,DEPT_CD,COLLEGE,MAJOR_CODE,MAJOR_DESCR,CRSE_NAME,INSTR_NAME,INSTR_EMAIL,INSTR_USERID,INSTR_CWID,STUDENT_EMAIL,STUDENT_USERID,GRADING_BASIS,GRADING_SCHEME,SCHEDULE_NBR,CURRENT_GRADE,CURRENT_GRADE_INPUT from AR_GRADE_PETITION_FORM_B where CWID='<<cwid>>' and TERM_DESCR = '<<term_descr>>'";
	public static final String petitionCourseUpdatedSQL = "select CWID,FNAME,LNAME,MNAME,ACAD_PROG,TERM_DESCR,STRM,CLASS_NBR,CRSE_ID,CLASS_SECTION,COURSE_LEVEL,UNT_TAKEN,DEPT_CD,COLLEGE,MAJOR_CODE,MAJOR_DESCR,CRSE_NAME,INSTR_NAME,INSTR_EMAIL,INSTR_USERID,INSTR_CWID,STUDENT_EMAIL,STUDENT_USERID,GRADING_BASIS,GRADING_SCHEME,SCHEDULE_NBR,CURRENT_GRADE,CURRENT_GRADE_INPUT, ASS_DEAN_NAME, ASS_DEAN_USERID, ASS_DEAN_EMAIL from AR_GRADE_PETITION_FORM_B where CWID='<<cwid>>' and TERM_DESCR = '<<term_descr>>'";
	public static final String petitionClassNumberSQL = "Select CLASS_NBR,STRM,CRSE_NAME,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,INSTR_ID,INSTR_NAME,INSTR_L_NAME,INSTR_F_NAME,INSTR_USERID,INSTR_EMAIL,CHAIR_USERID, CHAIR_NAME, CHAIR_EMAIL FROM AR_CRSE_CATALOG WHERE CLASS_NBR='<<CLASS_NUMBER>>' AND STRM='<<STRM>>'";
	public static final String petitionClassNumberUpdatedSQL = "Select CLASS_NBR,STRM,CRSE_NAME,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,INSTR_ID,INSTR_NAME,INSTR_L_NAME,INSTR_F_NAME,INSTR_USERID,INSTR_EMAIL,CHAIR_USERID, CHAIR_NAME, CHAIR_EMAIL, DEAN_USERID, DEAN_NAME, DEAN_EMAIL FROM AR_CRSE_CATALOG WHERE CLASS_NBR='<<CLASS_NUMBER>>' AND STRM='<<STRM>>'";
	// public static final String petitionCourseLookUpFields =
	// "CRSE_ID,STRM,CRSE_NAME,UNT_TAKEN,CLASS_SECTION,SCHEDULE_NBR,DEPT_CD,CLASS_NBR";
	// public static final String petitionInstructorDetails = "select * from
	// AR_GRADE_PETITION_FORM_B where CWID='<<cwid>>' and CRSE_NAME =
	// '<<crse_name>>' and TERM_DESCR = '<<term_descr>>'";
	// End of Appeal Form

	// Start of Delegation of Authority Form (DOA)
	public static final String doaUserIDLookUpSQL = "SELECT DISTINCT EMPLID,NAME,FUL_DIVISION,FUL_DIVISION_NAME,FUL_COLLEGE,FUL_COLLEGE_NAME,DEPTID,DEPTNAME from DOA_PAYROLL_SERVICES_USER WHERE lower(USERID)=lower('<<getUser_ID>>')";
	public static final String doaUserIDAndDivisionLookUpSQL = "SELECT DISTINCT EMPLID,NAME,FUL_DIVISION,FUL_DIVISION_NAME,FUL_COLLEGE,FUL_COLLEGE_NAME,DEPTID,DEPTNAME from DOA_PAYROLL_SERVICES_USER WHERE lower(USERID)=lower('<<getUser_ID>>') AND FUL_DIVISION=<<FUL_DIVISION>>";
	public static final String doaGetAllDetailsFromCWIDLookUp = "SELECT DISTINCT a.EMPLID, a.NAME, a.USERID, a.EMAIL_ADDR, c.CSU_UNIT, d.FUL_DIVISION, d.FUL_DIVISION_NAME, d.FUL_COLLEGE, d.FUL_COLLEGE_NAME, b.DEPTID, d.DEPTNAME FROM DOA_PAYROLL_SERVICES_USER a,CMS_HR_DEPT_SEC b, PS_EMPLOYEES c,HR_DEPT_TREE_TBL d WHERE a.emplid=b.emplid AND b.deptid=c.deptid AND b.deptid=d.deptid AND b.EMPLID='<<cwid>>'";
	public static final String doaGetCollegeListSQL = "SELECT DISTINCT d.FUL_COLLEGE, d.FUL_COLLEGE_NAME, b.DEPTID, d.DEPTNAME FROM DOA_PAYROLL_SERVICES_USER a,CMS_HR_DEPT_SEC b, PS_EMPLOYEES c,HR_DEPT_TREE_TBL d WHERE a.emplid=b.emplid AND b.deptid=c.deptid AND b.deptid=d.deptid AND b.EMPLID='<<CWID>>' AND FUL_DIVISION='<<FUL_DIVISION>>'";
	public static final String doaGetDepartmentIDListSQL = "SELECT DISTINCT DEPTID,DEPTNAME FROM HR_DEPT_TREE_TBL WHERE FUL_COLLEGE='<<FUL_COLLEGE>>' AND FUL_DIVISION='<<FUL_DIVISION>>' ORDER BY DEPTID ASC";
	public static final String doaGetUnitWithDepartmentIDSQL = "SELECT DISTINCT a.CSU_UNIT,a.CSU_SCO_AGENCY FROM PS_EMPLOYEES a, HR_DEPT_TREE_TBL b WHERE a.deptid=b.deptid AND b.DEPTID='<<dept_ID>>'";
	public static final String doaGetDeleteNameLookUpSQL = "SELECT DISTINCT EMPLID,FIELD_VALUE,DEPTID,COLLEGE,DIVISON,NAME,CSU_UNIT,DELETE_FLG,USERID,EMAIL_ADDR FROM DOA_TIMEKEEPER_DATA WHERE DIVISON=<<division>> AND COLLEGE=<<college>> AND DEPTID IN(<<dept_ID>>) AND CSU_UNIT IN(<<unit>>) AND DELETE_FLG='<<delete_flag>>'";
	public static final String doaGetUserListToBeAddedWithCollegeSQL = "SELECT DISTINCT EMPLID,NAME,USERID,EMAIL_ADDR FROM DOA_TIMEKEEPER_INPUT_DATA WHERE FUL_COLLEGE='<<FUL_COLLEGE>>' AND FUL_DIVISION='<<FUL_DIVISION>>' ORDER BY NAME ASC";

	public static final String doaGetUserListToBeAddedSQL = "SELECT DISTINCT EMPLID,NAME,USERID,EMAIL_ADDR FROM DOA_TIMEKEEPER_INPUT_DATA WHERE FUL_DIVISION='<<FUL_DIVISION>>' ORDER BY NAME ASC";
	public static final String doaGetApprovingOfficialsListSQL = "SELECT DISTINCT EMPLID,NAME,USERID,EMAIL_ADDR FROM DOA_TIMEKEEPER_INPUT_DATA WHERE FUL_COLLEGE='<<FUL_COLLEGE>>' AND FUL_DIVISION='<<FUL_DIVISION>>' AND UNION_CD='<<UNION_CD>>' ORDER BY NAME ASC";
	public static final String doaGetApprovingOfficialsListWithFullDivisionAndUnionCDSQL = "SELECT DISTINCT EMPLID,NAME,USERID,EMAIL_ADDR FROM DOA_TIMEKEEPER_INPUT_DATA WHERE FUL_DIVISION='<<FUL_DIVISION>>' AND UNION_CD='<<UNION_CD>>' ORDER BY NAME ASC";
	public static final String doaGetDepartmentHeadDetailsSQL = "SELECT DISTINCT EMPLID,USERID,EMAIL_ADDR,NAME,BUSINESS_TITLE FROM DOA_TIMEKEEPER_INPUT_DATA WHERE DEPTID IN(<<DEPT_ID>>) AND UNION_CD='<<UNION_CD>>' ORDER BY NAME ASC";
	public static final String doaGetDepartmentHeadDetailsWithDivisionSQL = "SELECT DISTINCT EMPLID,USERID,EMAIL_ADDR,NAME,BUSINESS_TITLE FROM DOA_TIMEKEEPER_INPUT_DATA WHERE FUL_DIVISION='<<FUL_DIVISION>>' AND UNION_CD='<<UNION_CD>>' ORDER BY NAME ASC";
	public static final String doaGetCollegeDeanDetailsSQL = "SELECT EMPLID,USERID,NAME,FUL_COLLEGE,FUL_COLLEGE_NAME FROM DOA_TK_COLLEGE_APPROVER WHERE FUL_COLLEGE='<<FUL_COLLEGE>>' ORDER BY NAME ASC";
	public static final String doaGetDivisionHeadDetailsSQL = "SELECT DISTINCT EMPLID,USERID,EMAIL_ADDR,NAME,BUSINESS_TITLE FROM DOA_TIMEKEEPER_INPUT_DATA WHERE DEPTID='<<DEPT_ID>>' AND UNION_CD='<<UNION_CD>>' ORDER BY NAME ASC";
	// End of Delegation of Authority Form (DOA)

	// Start of Catalog
	public static final String catalogCwidIdSQL = "select * from AR_CSU_STDNT_PROG_DATA where STUDENT_ID='<<STUDENT_ID>>' order by PLAN_RANK asc";
	public static final String catalogAdvisorSQL = "select * from EMPL_ACT_DIR_DATA where USERID='<<USERID>>'";
	public static final String catalogUserIdSQL = "select * from AR_CSU_STDNT_PROG_DATA where LOWER(STUDENT_USERID)=LOWER('<<STUDENT_USER_ID>>') order by PLAN_RANK asc";
	public static final String catalogUserIdLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,EXP_GRAD_TERM,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,EXP_TERM_DESCR,ADMIT_TERM_DESCR";
	// End of Catalog

	// Start of Spl Consultant Timesheet
	public static final String splConsultantUserLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,  A.MIDDLE_NAME, A.NATIONAL_ID, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode, substr(A.WORK_PHONE, 7, 10) as Extenstion, A.EMPLID,(select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<getUser_ID>>') as EMP_EMAIL_ID , B.UNION_CD,B.CSU_SCO_AGENCY, B.FUL_DIVISION from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String splConsultantUserLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,NATIONAL_ID,EMPL_RCD,CSU_UNIT,Jobcode,Extenstion,EMPLID,EMP_EMAIL_ID,UNION_CD,CSU_SCO_AGENCY,FUL_DIVISION";

	public static final String splConsultantEmpLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,  A.MIDDLE_NAME, A.NATIONAL_ID, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode,(select USERID from FUL_EMP_CWID_NT_NAME where CWID = '<<Empl_ID>>') as EMP_USERID,(select EMAILID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Empl_ID>>') as EMP_EMAIL_ID, substr(A.WORK_PHONE, 7, 10) as Extenstion, B.UNION_CD,B.CSU_SCO_AGENCY, B.FUL_DIVISION from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = Replace('<<Empl_ID>>', '-','') and A.EMPLID = B.EMPLID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	public static final String splConsultantEmpLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,NATIONAL_ID,EMPL_RCD,CSU_UNIT,Jobcode,EMP_USERID,EMP_EMAIL_ID,Extenstion,UNION_CD,CSU_SCO_AGENCY,FUL_DIVISION";
	// End of Spl consultant Timesheet

	// Start of Timebase
	public static final String timebaseUserSQL = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.UNION_CD,('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' || to_char(EMPL_RCD+1, '000') ) as SCOPosNum, B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, A.EMPLID, B.DESCR,b.ful_division,b.ful_division_name from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String timebaseEmpSQL = "Select A.FIRST_NAME,A.EMPLID, A.LAST_NAME, B.DEPTNAME, B.UNION_CD,('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' || to_char(EMPL_RCD+1, '000') ) as SCOPosNum,B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, B.DESCR, b.ful_division,b.ful_division_name from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = '<<Empl_ID>>' and A.EMPLID = C.cwid and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>') and A.EMPLID = B.EMPLID";
	public static final String timebaseFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,EMPLID,DESCR,UNION_CD,SCOPosNum,ful_division,ful_division_name";
	public static final String timebaseWFDetails = "select * from hr_staff_evaluation where emplid='<<EMPLID>>'";
	public static final String timebaseWFFields = "SUPERVISORNAME,MANAGER_EMPLID,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_EMP_USERID,ADMIN_EMP_NAME";

	// public static final String timebaseEmpFields =
	// "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,";
	// End of Timebase

	// Start of Timekeeper data
	public static final String getTimekeeperDetails = "select distinct EMPLID,FIELD_VALUE,DEPTID,COLLEGE,DIVISON,NAME,CSU_SCO_AGENCY,CSU_UNIT,DELETE_FLG,USERID,EMAIL_ADDR from DOA_TIMEKEEPER_DATA where DEPTID='<<deptId>>' and DIVISON = '<<division>>' and CSU_UNIT = '<<unit>>' and FIELD_VALUE = '<<fieldVal>>' and DELETE_FLG = 'N'";
	// End of Timekeeper Data

	// Start of get employee details
	public static final String getDetailsFromEmpID = "select EMAILID,USERID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Emp_ID>>'";
	public static final String getEmpAgency = "Select B.CSU_SCO_AGENCY, B.FUL_DIVISION from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	// End of get employee details

	// Start of get student details
	public static final String getNonMedStudentSql = "select * from AR_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>' and TO_DATE(SYSDATE,'DD-MON-YYYY') > TO_DATE(WD_START_DT,'DD-MON-YYYY') and TO_DATE(SYSDATE,'DD-MON-YYYY') <=  TO_DATE(NON_MED_WD_END_DT,'DD-MON-YYYY')";
	public static final String getMedStudentSql = "select * from AR_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>' and TO_DATE(SYSDATE,'DD-MON-YYYY') > TO_DATE(WD_START_DT,'DD-MON-YYYY') and TO_DATE(SYSDATE,'DD-MON-YYYY') <= TO_DATE(MED_WD_END_DT,'DD-MON-YYYY')";

	public static final String getSessionNonMedStudentSql = "select * from AR_SESSION_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>' and TO_DATE(SYSDATE,'DD-MON-YYYY') > TO_DATE(WD_START_DT,'DD-MON-YYYY') and TO_DATE(SYSDATE,'DD-MON-YYYY') <=  TO_DATE(NON_MED_WD_END_DT,'DD-MON-YYYY')";
	public static final String getSessionMedStudentSql = "select * from AR_SESSION_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>' and TO_DATE(SYSDATE,'DD-MON-YYYY') > TO_DATE(WD_START_DT,'DD-MON-YYYY') and TO_DATE(SYSDATE,'DD-MON-YYYY') <= TO_DATE(MED_WD_END_DT,'DD-MON-YYYY')";

	/* Test Queries */
//		public static final String getNonMedStudentSql = "select * from AR_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>' and TO_DATE('09-FEB-21','DD-MON-YYYY') > TO_DATE(WD_START_DT,'DD-MON-YYYY') and TO_DATE('09-FEB-21','DD-MON-YYYY') <=  TO_DATE(NON_MED_WD_END_DT,'DD-MON-YYYY')";
//		public static final String getMedStudentSql = "select * from AR_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>' and TO_DATE('09-FEB-21','DD-MON-YYYY') > TO_DATE(WD_START_DT,'DD-MON-YYYY') and TO_DATE('09-FEB-21','DD-MON-YYYY') <= TO_DATE(MED_WD_END_DT,'DD-MON-YYYY')";
	// End of get student details

	// Start of CMS 634 Distributed
	public static final String getCMSUserIDSql = "Select A.FIRST_NAME, A.LAST_NAME, B.EMPL_RCD, B.UNION_CD,B.FUL_DIVISION,B.FUL_DIVISION_NAME,B.DEPTNAME, B.EXPECTED_END_DATE, A.MIDDLE_NAME,  B.DEPTID,('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - 00'  || (B.EMPL_RCD+1) ) as SCONum, A.EMPLID, A.NATIONAL_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B , FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String getCMSEmpIDSql = "Select A.FIRST_NAME,A.EMPLID, A.LAST_NAME, B.EMPL_RCD, B.UNION_CD,B.FUL_DIVISION,B.FUL_DIVISION_NAME,B.DEPTNAME, B.EXPECTED_END_DATE, A.Middle_Name, B.DEPTID,  ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, A.NATIONAL_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = B.EMPLID and A.EMPLID = Replace('<<Empl_ID>>', '-','') and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	public static final String getCMSUserIDFields = "FIRST_NAME,LAST_NAME,EMPL_RCD,DEPTNAME,EXPECTED_END_DATE,MIDDLE_NAME,DEPTID,SCONUM,EMPLID,NATIONAL_ID,UNION_CD,FUL_DIVISION,FUL_DIVISION_NAME";
	public static final String getCMSEmpIDFields = "FIRST_NAME,LAST_NAME,EMPL_RCD,DEPTNAME,EXPECTED_END_DATE,MIDDLE_NAME,DEPTID,SCONUM,EMPLID,NATIONAL_ID,UNION_CD,FUL_DIVISION,FUL_DIVISION_NAME";

	// Start of 10_12_11_12 PayPlan
	public static final String PayPlanUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME, substr(A.WORK_PHONE,7,10) as Extension, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD, ('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' ||  '00' || (EMPL_RCD+1) ) as SCOPosNum, B.STD_HOURS, B.POSITION_NBR, B.GRADE, B.EMPLID  from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = '<<getUser_ID>>' and A.EMPLID = B.EMPLID";
	public static final String PayPlanLookUpFields = "FIRST_NAME,LAST_NAME,Extension,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,SCOPosNum,STD_HOURS,POSITION_NBR,GRADE,EMPLID";
	// End of 10_12_11_12 PayPlan

	// Start of Get Email Lookup
	public static final String getEmailAddressCwidLookup = "select EMAILID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Emp_ID>>'";
	public static final String getEmailAddressUserIdLookup = "select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<UID>>'";
	// End of Get Email Lookup

	public static final String DependentFeeWaiverUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME,A.EMPLID,A.ADDRESS1,A.CITY,A.STATE, B.DEPTNAME,  B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03'  then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D' or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T' then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C Where  A.EMPLID = B.EMPLID AND A.emplid = C.cwid AND C.userid = '<<getUser_ID>>' and B.UNION_CD not in('R13','R14','E99')";
	public static final String DependentFeeWaiverUserLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,ADDRESS1,CITY,STATE,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";

	public static final String feeWaiverEmpLookUp = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME,  B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03' then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D' or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T'  then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = B.EMPLID and A.EMPLID = Replace('<<Empl_ID>>','-','')";
	public static final String feeWaiverEmpLookUpFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";

	public static final String dependentFeeWaiverEmpLookUp = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME,  B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03' then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D' or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T'  then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = B.EMPLID and A.EMPLID = Replace('<<Empl_ID>>','-','') and B.UNION_CD not in('R13','R14','E99')";
	public static final String dependentFeeWaiverEmpLookUpFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";

	public static final String dependentFeeApplicantNameLookup = "Select a.last_name, a.birthdate, a.address1, a.city, a.state,a.relationship,a.first_name,(Select d.emplid from ful_ecm_ben_vw c, ful_ecm_pers_vw d where c.FIRST_NAME like (decode(trim('<<Applicant_First_Name>>'),'',' ', trim('<<Applicant_First_Name>>')) || '%') and c.EMPLID = Replace('<<Empl_ID>>', '-', '') and c.emplid != d.emplid and c.last_name = d.last_name and c.first_name = d.first_name and c.birthdate = d.birthdate) as AppCWID from ful_ecm_ben_vw a, ful_ecm_pers_vw b where A.EMPLID = Replace('<<Empl_ID>>', '-', '') and a.emplid = b.emplid and a.FIRST_NAME like (decode(trim('<<Applicant_First_Name>>'),'',' ', trim('<<Applicant_First_Name>>')) || '%')";
	public static final String dependentFeeApplicantNameLookupFields = "last_name,birthdate,address1,city,state,relationship,first_name";

	// Start of Get Employee Details
	public static final String getEmployeeDetails = "SELECT EMP_USERID ,EMP_NAME FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<EMP_ID>>'";
	// End of Get Employee Details

	// Start of Vision LIFE_LTD Lookup
	public static final String visionLifeSQL = "Select  A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, B.UNION_CD, B.CSU_UNIT, B.JOBCODE, B.EMPL_RCD+1 AS Serial, B.CSU_SCO_AGENCY, B.DEPTNAME, C.USERID as EMP_USERID From FUL_EMP_CWID_NT_NAME C, FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B Where A.NATIONAL_ID = Replace('<<SSN>>','-','') AND B.EMPLID = A.EMPLID and C.CWID = B.EMPLID";
	public static final String lookupFieldsVisionLife = "FIRST_NAME,LAST_NAME,MIDDLE_NAME,UNION_CD,CSU_UNIT,JOBCODE,Serial,CSU_SCO_AGENCY,DEPTNAME,EMP_USERID";
	// End of Vision LIFE_LTD Lookup

	// Start of Initial Cobra Lookup
	public static final String initialCobraEmpLookUp = "Select A.FIRST_NAME, A.LAST_NAME, B.EMPL_RCD, (SELECT (C.FIRST_NAME || '   ' || C.LAST_NAME) FROM FUL_ECM_BEN_VW C WHERE C.EMPLID = '<<Empl_ID>>' AND C.RELATIONSHIP = 'SP') as PartnerName From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B Where  A.EMPLID = '<<Empl_ID>>'  AND A.EMPLID = B.EMPLID";
	public static final String initialCobraEmpLookUpfields = "FIRST_NAME,LAST_NAME,EMPL_RCD,PartnerName";
	// End of Initial Cobra Lookup

	// Start of Career Development Plan
	public static final String careerDevelopmentPlanUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME, A.EMPLID, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.UNION_CD, B.DESCR  From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C Where  A.EMPLID = B.EMPLID AND A.emplid = C.cwid AND C.userid = '<<getUser_ID>>'";
	public static final String careerDevelopmentPlanFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,EMPL_RCD,UNION_CD,DESCR";
	// End of Career Development Plan

	// Start of get dept chair and dean details
	public static final String getChairDeanInfoSQL = "select CHAIR_USERID, CHAIR_NAME,CHAIR_EMAIL,DEAN_USERID,DEAN_EMAIL,DEAN_NAME from AR_DEPT_CHAIR_INFO where DEPTID = '<<dept_id>>'";
	// End of get dept chair and dean details

	// Start of Get Manager/Admin details lookup
	public static final String managerAdminDetailsSQL = "SELECT MANAGER_EMP_USERID,ADMIN_EMP_USERID, ADMIN_EMP_NAME FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<EMP_ID>>' AND DEPTID = '<<DEPT_ID>>' AND UNION_CD in ('M80','M98')";
	public static final String managerAdminDetailsLookUpFields = "MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	// End of MPP Get Manager/Admin details lookup

	// Start of Get Manager Details
	public static final String getManagerDetails = "SELECT MANAGER_EMP_USERID ,SUPERVISORNAME, ADMIN_EMP_USERID , ADMIN_EMP_NAME FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<EMP_ID>>' AND DEPTID = '<<DEPT_ID>>' AND UNION_CD='<<UNION_CD>>'";
	// End of Get Manager Details

	// Start of Get Staff's Manager/Admin details
	public static final String staffManagerAdminDetailsSQL = "SELECT MANAGER_EMP_USERID , ADMIN_EMP_USERID , ADMIN_EMP_NAME, MANAGER_DEPTID FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<EMP_ID>>' AND DEPTID = '<<DEPT_ID>>' AND UNION_CD='<<UNION_CD>>'";
	public static final String staffManagerAdminDetailsLookUpFields = "MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME,MANAGER_DEPTID";
	// End of Get Staff's Manager/Admin details

	// Start of Get Logged In User Details
	public static final String getAllLoggedInUserDetails = "select * from EMPL_ACT_DIR_DATA where LOWER(USERID) = LOWER('<<userId>>')";
	// End of Get Logged In User Details

	// Start of Domestic Partner
	public static final String domesticPartner = "Select A.FIRST_NAME, A.LAST_NAME,A.NATIONAL_ID, B.DEPTNAME, B.JOBCODE,C.USERID as EMP_USERID From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C Where  A.EMPLID = B.EMPLID AND A.emplid = C.cwid AND C.userid = '<<getUser_ID>>' AND C.CWID = B.EMPLID";
	public static final String domesticPartnerLookUpFields = "FIRST_NAME,LAST_NAME,NATIONAL_ID,DEPTNAME,JOBCODE,EMP_USERID";
	// End of Domestic Partner

	// Start of Short App Emp Fee Waiver
	public static final String shortAppEmpFeeWaiverOrg = "SELECT A.FIRST_NAME, A.MIDDLE_NAME, A.LAST_NAME, A.NATIONAL_ID, A.ADDRESS1, A.ADDRESS2, A.CITY, A.STATE, A.POSTAL, (case SEX when 'M' then '1' else '0' end) as Male, (case SEX when 'F' then '1' else '0' end) as Female, A.EMPLID, A.BIRTHDATE, A.HOME_PHONE, C.USERID FROM FUL_ECM_PERS_VW A, FUL_EMP_CWID_NT_NAME C WHERE C.USERID = '<<getUser_ID>>' and A.EMPLID = C.CWID";
	public static final String shortAppEmpFeeWaiver = "SELECT  A.FIRST_NAME, A.MIDDLE_NAME, A.LAST_NAME, A.NATIONAL_ID,B.UNION_CD, B.EMPL_RCD, B.DEPTID, B.DEPTNAME, A.ADDRESS1, A.ADDRESS2, A.CITY, A.STATE, A.POSTAL, (case SEX when 'M' then '1' else '0' end) as Male, (case SEX when 'F' then '1' else '0' end) as Female,A.EMPLID, A.BIRTHDATE, A.HOME_PHONE, C.USERID FROM FUL_ECM_PERS_VW A, FUL_EMP_CWID_NT_NAME C, ful_ecm_job_vw b WHERE C.USERID = '<<getUser_ID>>' and A.EMPLID = C.CWID and A.EMPLID = B.EMPLID";
	public static final String shortAppEmpFeeWaiverEmp = "SELECT  A.FIRST_NAME, A.MIDDLE_NAME, A.LAST_NAME, A.NATIONAL_ID,B.UNION_CD, B.EMPL_RCD, B.DEPTID, B.DEPTNAME, A.ADDRESS1, A.ADDRESS2, A.CITY, A.STATE, A.POSTAL, (case SEX when 'M' then '1' else '0' end) as Male, (case SEX when 'F' then '1' else '0' end) as Female,A.EMPLID, A.BIRTHDATE, A.HOME_PHONE, C.USERID FROM FUL_ECM_PERS_VW A, FUL_EMP_CWID_NT_NAME C, ful_ecm_job_vw b WHERE C.CWID = '<<EMPL_ID>>' and A.EMPLID = C.CWID and A.EMPLID = B.EMPLID";
	public static final String shortAppEmpFeeWaiverFields = "FIRST_NAME,MIDDLE_NAME,LAST_NAME,NATIONAL_ID,ADDRESS1,ADDRESS2,CITY,STATE,POSTAL,MALE,FEMALE,EMPLID,BIRTHDATE,HOME_PHONE,USERID,UNION_CD,EMPL_RCD,DEPTID,DEPTNAME";
	// End of Short App Emp Fee Waiver

	// Start of Catastrophic Leave Request
	public static final String catastrophicLeaveRequest = "Select A.FIRST_NAME, A.LAST_NAME,A.EMPLID, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.UNION_CD  From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C Where  A.EMPLID = B.EMPLID AND A.emplid = C.cwid AND C.userid = ('<<getUser_ID>>')";
	public static final String catastrophicFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,EMPL_RCD,UNION_CD";
	// End of Catastrophic Leave Request

	// Start of Catastrophic Leave Donation
	public static final String catastrophicLeaveDonation = "Select A.FIRST_NAME, A.LAST_NAME,A.EMPLID, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.UNION_CD  From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C Where  A.EMPLID = B.EMPLID AND A.emplid = C.cwid AND C.userid = ('<<getUser_ID>>')";
	public static final String catastrophicDonationFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,EMPL_RCD,UNION_CD";
	// End of Catastrophic Leave Donation

	// public static final String CobraFinalNoticeBenefitLookUp = "Select DISTINCT
	// (SELECT a.descr from ful_ecm_ben2_vw a where a.plan_type = '10' and a.emplid
	// = '<<Empl_ID>>')as Health, (SELECT ROUND((a.total_covrg_rate * 1.02) ,2) from
	// ful_ecm_ben2_vw a where a.plan_type = '10' and a.emplid = '<<Empl_ID>>')as
	// HealthCovrg, (SELECT a.descr from ful_ecm_ben2_vw a where a.plan_type = '11'
	// and a.emplid = '<<Empl_ID>>')as Dental, (SELECT ROUND((a.total_covrg_rate *
	// 1.02),2) from ful_ecm_ben2_vw a where a.plan_type = '11' and a.emplid =
	// '<<Empl_ID>>')as DentalCovrg, (SELECT a.descr from ful_ecm_ben2_vw a where
	// a.plan_type = '14' and a.emplid = '<<Empl_ID>>')as Vision, (SELECT
	// ROUND((a.total_covrg_rate * 1.02),2) from ful_ecm_ben2_vw a where a.plan_type
	// = '14' and a.emplid = '<<Empl_ID>>')as VisionCovrg, (SELECT a.descr from
	// ful_ecm_fsa_benefit_vw a where a.emplid = '<<Empl_ID>>') as HCRA, (SELECT
	// a.EMPL_CONTRBUTN_AMT from ful_ecm_fsa_benefit_vw a where a.emplid =
	// '<<Empl_ID>>')as HCRACovrg, (SELECT SUBSTR (SYS_CONNECT_BY_PATH
	// (CONCAT(CONCAT(First_Name, ' '),Last_Name) , ', '), 2) DependentChildName
	// FROM (SELECT First_Name , Last_Name, ROW_NUMBER () OVER (ORDER BY Last_Name )
	// rn,COUNT (*) OVER () cnt FROM FUL_ECM_BEN_VW WHERE EMPLID = '<<Empl_ID>>' AND
	// Relationship = 'SP') WHERE rn = cnt START WITH rn = 1 CONNECT BY rn = PRIOR
	// rn + 1) as SpouseName, (SELECT SUBSTR (SYS_CONNECT_BY_PATH
	// (CONCAT(CONCAT(First_Name, ' '),Last_Name) , ', '), 2) DependentChildName
	// FROM (SELECT First_Name , Last_Name, ROW_NUMBER () OVER (ORDER BY Last_Name )
	// rn, COUNT (*) OVER () cnt FROM FUL_ECM_BEN_VW WHERE EMPLID = '<<Empl_ID>>'
	// AND Relationship = 'C') WHERE rn = cnt START WITH rn = 1 CONNECT BY rn =
	// PRIOR rn + 1) as DependentChildName from DUAL";
	// public static final String CobraFinalNoticeBenefitLookUp = "select HEALTH,
	// HEALTHCOVRG, DENTAL, DENTALCOVRG,VISION, VISIONCOVRG, HCRA,
	// HCRACOVRG,SPOUSENAME, CASE WHEN (HEALTHCOVRGCODE > 1) OR (DENTALCOVRGCODE >
	// 1) THEN DEPENDENTCHILDNAME else '-' END as DEPENDENTCHILDNAME from (Select
	// DISTINCT (SELECT a.descr from ful_ecm_ben2_vw a where a.plan_type = '10' and
	// a.emplid = '<<Empl_ID>>') as Health,(SELECT ROUND((a.total_covrg_rate * 1.02)
	// ,2) from ful_ecm_ben2_vw a where a.plan_type = '10' and a.emplid =
	// '<<Empl_ID>>')as HealthCovrg, (SELECT a.COVRG_CD from ful_ecm_ben2_vw a where
	// a.plan_type = '10' and a.emplid = '<<Empl_ID>>')as HealthCovrgCode,(SELECT
	// a.descr from ful_ecm_ben2_vw a where a.plan_type = '11' and a.emplid =
	// '<<Empl_ID>>')as Dental,(SELECT ROUND((a.total_covrg_rate * 1.02),2) from
	// ful_ecm_ben2_vw a where a.plan_type = '11' and a.emplid = '<<Empl_ID>>')as
	// DentalCovrg,(SELECT a.COVRG_CD from ful_ecm_ben2_vw a where a.plan_type =
	// '11' and a.emplid = '<<Empl_ID>>')as DentalCovrgCode,(SELECT a.descr from
	// ful_ecm_ben2_vw a where a.plan_type = '14' and a.emplid = '<<Empl_ID>>')as
	// Vision,(SELECT ROUND((a.total_covrg_rate * 1.02),2) from ful_ecm_ben2_vw a
	// where a.plan_type = '14' and a.emplid = '<<Empl_ID>>')as VisionCovrg,(SELECT
	// a.descr from ful_ecm_fsa_benefit_vw a where a.emplid = '<<Empl_ID>>') as
	// HCRA,(SELECT a.EMPL_CONTRBUTN_AMT from ful_ecm_fsa_benefit_vw a where
	// a.emplid = '<<Empl_ID>>')as HCRACovrg, (SELECT SUBSTR (SYS_CONNECT_BY_PATH
	// (CONCAT(CONCAT(First_Name, ' '),Last_Name) , ', '), 2) DependentChildName
	// FROM (SELECT First_Name , Last_Name, ROW_NUMBER () OVER (ORDER BY Last_Name )
	// rn,COUNT (*) OVER () cnt FROM FUL_ECM_BEN_VW WHERE EMPLID = '<<Empl_ID>>' AND
	// Relationship = 'SP') WHERE rn = cnt START WITH rn = 1 CONNECT BY rn = PRIOR
	// rn + 1) as SpouseName,(SELECT SUBSTR (SYS_CONNECT_BY_PATH
	// (CONCAT(CONCAT(First_Name, ' '),Last_Name) , ', '), 2) DependentChildName
	// FROM (SELECT First_Name , Last_Name, ROW_NUMBER () OVER (ORDER BY Last_Name )
	// rn, COUNT (*) OVER () cnt FROM FUL_ECM_BEN_VW WHERE EMPLID = '<<Empl_ID>>'
	// AND Relationship = 'C') WHERE rn = cnt START WITH rn = 1 CONNECT BY rn =
	// PRIOR rn + 1) as DependentChildName from DUAL )";
	public static final String CobraFinalNoticeBenefitLookUp = "select HEALTH, HEALTHCOVRG, DENTAL, DENTALCOVRG,VISION, VISIONCOVRG, HCRA, HCRACOVRG,SPOUSENAME,CASE WHEN (HEALTHCOVRGCODE  > 1) OR (DENTALCOVRGCODE  > 1) THEN DEPENDENTCHILDNAME else '-' END as DEPENDENTCHILDNAME from (Select DISTINCT (SELECT a.descr from ful_ecm_ben2_vw a where a.plan_type = '10' and a.emplid = '<<Empl_ID>>') as Health,(SELECT ROUND((a.total_covrg_rate * 1.02) ,2) from ful_ecm_ben2_vw a where a.plan_type = '10' and a.emplid = '<<Empl_ID>>')as HealthCovrg,(SELECT a.COVRG_CD from ful_ecm_ben2_vw a where a.plan_type = '10' and a.emplid = '<<Empl_ID>>')as HealthCovrgCode,(SELECT a.descr from ful_ecm_ben2_vw a where a.plan_type = '11' and a.emplid = '<<Empl_ID>>')as Dental,(SELECT ROUND((a.total_covrg_rate * 1.02),2) from ful_ecm_ben2_vw a where a.plan_type = '11' and a.emplid = '<<Empl_ID>>')as DentalCovrg,(SELECT a.COVRG_CD from ful_ecm_ben2_vw a where a.plan_type = '11' and a.emplid = '<<Empl_ID>>')as DentalCovrgCode,(SELECT a.descr from ful_ecm_ben2_vw a where a.plan_type = '14' and a.emplid = '<<Empl_ID>>')as Vision,(SELECT ROUND((a.total_covrg_rate * 1.02),2) from ful_ecm_ben2_vw a where a.plan_type = '14' and a.emplid = '<<Empl_ID>>')as VisionCovrg,(SELECT a.descr from ful_ecm_fsa_benefit_vw a where a.emplid = '<<Empl_ID>>') as HCRA,(SELECT a.EMPL_CONTRBUTN_AMT from ful_ecm_fsa_benefit_vw a where a.emplid = '<<Empl_ID>>')as HCRACovrg,(SELECT SUBSTR (SYS_CONNECT_BY_PATH (CONCAT(CONCAT(First_Name, ' '),Last_Name) , ', '), 2) DependentChildName FROM (SELECT First_Name , Last_Name, ROW_NUMBER ()OVER (ORDER BY Last_Name ) rn,COUNT (*) OVER () cnt FROM FUL_ECM_BEN_VW WHERE EMPLID = '<<Empl_ID>>' AND Relationship = 'SP')WHERE rn = cnt START WITH rn = 1 CONNECT BY rn = PRIOR rn + 1) as SpouseName,(SELECT SUBSTR (SYS_CONNECT_BY_PATH (CONCAT(CONCAT(First_Name, ' '),Last_Name) , ', '), 2) DependentChildName FROM (SELECT First_Name , Last_Name, ROW_NUMBER ()OVER (ORDER BY Last_Name ) rn, COUNT (*) OVER () cnt FROM FUL_ECM_BEN_VW WHERE EMPLID = '<<Empl_ID>>' AND Relationship in  ('C','SD','SC')) WHERE rn = cnt START WITH rn = 1 CONNECT BY rn = PRIOR rn + 1) as DependentChildName from DUAL)";
	public static final String CobraFinalNoticeBenefitLookUpNew = "SELECT health, healthcovrg, dental, dentalcovrg, vision, visioncovrg, hcra, hcracovrg, spousename, CASE WHEN ( healthcovrgcode > 1 ) OR ( dentalcovrgcode > 1 ) THEN dependentchildname ELSE '-' END AS dependentchildname FROM ( SELECT DISTINCT ( SELECT a.descr FROM ful_ecm_ben2_vw a WHERE a.plan_type = '10' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS health, ( SELECT round((a.total_covrg_rate * 1.02), 2) FROM ful_ecm_ben2_vw a WHERE a.plan_type = '10' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS healthcovrg, ( SELECT a.covrg_cd FROM ful_ecm_ben2_vw a WHERE a.plan_type = '10' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS healthcovrgcode, ( SELECT a.descr FROM ful_ecm_ben2_vw a WHERE a.plan_type = '11' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS dental, ( SELECT round((a.total_covrg_rate * 1.02), 2) FROM ful_ecm_ben2_vw a WHERE a.plan_type = '11' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS dentalcovrg, ( SELECT a.covrg_cd FROM ful_ecm_ben2_vw a WHERE a.plan_type = '11' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS dentalcovrgcode, ( SELECT a.descr FROM ful_ecm_ben2_vw a WHERE a.plan_type = '14' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS vision, ( SELECT round((a.total_covrg_rate * 1.02), 2) FROM ful_ecm_ben2_vw a WHERE a.plan_type = '14' AND a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS visioncovrg, ( SELECT a.descr FROM ful_ecm_fsa_benefit_vw a WHERE a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS hcra, ( SELECT a.empl_contrbutn_amt FROM ful_ecm_fsa_benefit_vw a WHERE a.emplid = '<<Empl_ID>>' AND rownum < 2 ) AS hcracovrg, ( SELECT substr(sys_connect_by_path(concat(concat(first_name, ' '), last_name), ', '), 2) dependentchildname FROM ( SELECT first_name, last_name, ROW_NUMBER() OVER( ORDER BY last_name ) rn, COUNT(*) OVER() cnt FROM ful_ecm_ben_vw WHERE emplid = '<<Empl_ID>>' AND relationship = 'SP' ) WHERE rn = cnt START WITH rn = 1 CONNECT BY rn = PRIOR rn + 1 ) AS spousename, ( SELECT substr(sys_connect_by_path(concat(concat(first_name, ' '), last_name), ', '), 2) dependentchildname FROM ( SELECT first_name, last_name, ROW_NUMBER() OVER( ORDER BY last_name ) rn, COUNT(*) OVER() cnt FROM ful_ecm_ben_vw WHERE emplid = '<<Empl_ID>>' AND relationship IN ( 'C', 'SD', 'SC' ) ) WHERE rn = cnt START WITH rn = 1 CONNECT BY rn = PRIOR rn + 1 ) AS dependentchildname FROM dual )";
	public static final String CobraFinalNoticeBenefitFields = "Health,HealthCovrg,Dental,DentalCovrg,Vision,VisionCovrg,HCRA,HCRACovrg,SpouseName,DependentChildName";
	public static final String cobraFinalDependentNameLookUp = "Select (A.FIRST_NAME || ' ' || A.LAST_NAME) as Name, A.BIRTHDATE, 'self' as Relationship, A.NATIONAL_ID from FUL_ECM_PERS_VW A where A.EMPLID = Replace('<<Empl_ID>>', '-', '') AND A.FIRST_NAME like (decode(trim('<<DependentName>>'),'',' ', trim('<<DependentName>>')) || '%') union Select  (A.FIRST_NAME || ' ' || A.LAST_NAME)as Name, A.BIRTHDATE, A.RELATIONSHIP, A.NATIONAL_ID From  FUL_ECM_BEN_VW A, FUL_ECM_PERS_VW B Where A.EMPLID = B.EMPLID AND B.EMPLID = Replace('<<Empl_ID>>', '-', '') AND A.FIRST_NAME like (decode(trim('<<DependentName>>'),'',' ', trim('<<DependentName>>')) || '%')";
	public static final String cobraFinalDependentNameFields = "Name,Relationship,BIRTHDATE,NATIONAL_ID";
	// End of Cobra Final Notice

	// Start of Cobra Final Notice
	public static final String cobraEmplIDSQL = "Select  A.FIRST_NAME, A.LAST_NAME,  A.ADDRESS1, A.CITY, A.STATE, A.POSTAL, B.EMPL_RCD, B.DEPTNAME, B.JOBCODE From  FUL_ECM_PERS_VW A, FUL_ECM_JOB2_VW B Where A.EMPLID = '<<Empl_ID>>' AND B.EMPLID = '<<Empl_ID>>'";
	public static final String cobraLookUpFields = "FIRST_NAME,LAST_NAME,ADDRESS1,CITY,STATE,POSTAL,EMPL_RCD,DEPTNAME,JOBCODE";
	// End of Cobra Final Notice

	// Start of Get Logged In User Details from DB SQL
	public static final String getLoggedInUserDetailsFromDB = "SELECT FNAME, LNAME from cmsrda.ful_emp_cwid_nt_name where LOWER(USERID) = LOWER('<<get_user_id>>')";
	public static final String loggedInUserDetailsLookupFields = "FNAME,LNAME";
	// End of Get Logged In User Details from DB SQL

	// Start of Personal File Access Request Form
	public static final String personalFileAccessRequestUserLookUp = "select a.first_name, a.last_name, substr(a.middle_name,1,1) as Middle_Initial, a.emplid, a.work_phone, b.deptid, b.deptname from ful_ecm_pers_vw a, ful_ecm_job_vw b, ful_emp_cwid_nt_name c where a.emplid = b.emplid  and a.emplid = c.cwid and c.userid = '<<getUser_ID>>'";
	public static final String personalFileAccessRequestEmpLookUp = "select a.first_name, a.last_name, substr(a.middle_name,1,1) as Middle_Initial, a.emplid, a.work_phone, b.deptid, b.deptname from ful_ecm_pers_vw a, ful_ecm_job_vw b, ful_emp_cwid_nt_name c where a.emplid = b.emplid  and a.emplid = c.cwid and a.emplid = '<<emplid>>'";
	public static final String perFileAccessSeperatedEmpLookUp = "select  distinct a.first_name, a.last_name, substr(a.middle_name,1,1) as Middle_Initial, a.emplid, a.work_phone from ful_ecm_pers_vw a, ful_ecm_job_vw b, ful_emp_cwid_nt_name c where a.emplid = c.cwid and a.emplid = '<<emplid>>'";
	public static final String personalFileAccessRequestUserLookUpFields = "first_name,last_name,Middle_Initial,emplid,work_phone,deptid,deptname";
	public static final String perFileAccessSeperatedEmpFields = "first_name,last_name,Middle_Initial,emplid,work_phone";
	// Start of Personal File Access Request Form

	// Start of Personnel Action Plan
	public static final String personnelActionPlan = "Select A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, B.CSU_SCO_AGENCY, B.CSU_UNIT, B.JOBCODE, B.EMPL_RCD+1 as SERIAL_NO, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD, B.FUL_DIVISION_NAME,  B.FUL_COLLEGE_NAME,  B.STD_HOURS, (CASE B.UNION_CD when 'M80' then B.DESCR1 else '' end) as DESCR1, B.CSU_ANNI_MONTH, B.CSU_ANNI_YEAR,(case B.FLSA_STATUS when 'X' then '1' else '0' end) as FLSAExmp, (case B.FLSA_STATUS when 'N' then '1' else '0' end) as FLSANon, B.GRADE, B.MONTHLY_RT, C.SUPERVISOR_NAME, (SELECT(b1.CSU_MPP_JOB_FAMILY  ||  b1.CSU_MPP_JOB_FUNC || b1.CSU_MPP_RPT_CAT) FROM ful_ecm_job_vw a1, ful_ecm_post_data_vw b1 WHERE a1.position_nbr = b1.position_nbr and a1.emplid = a.emplid) As MppJobcode,b.Expected_End_Date, b.fte from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_ECM_REPORTS_VW C where A.EMPLID = '<<Empl_ID>>' and A.EMPLID = B.EMPLID  and B.REPORTS_TO = C.POSITION_NBR";
	public static final String personnelActionPlanFields = "FIRST_NAME,LAST_NAME,MIDDLE_NAME,CSU_SCO_AGENCY,CSU_UNIT,JOBCODE,SERIAL_NO,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,FUL_DIVISION_NAME,FUL_COLLEGE_NAME,STD_HOURS,DESCR1,CSU_ANNI_MONTH,CSU_ANNI_YEAR,FLSAEXMP,FLSANON,GRADE,MONTHLY_RT,SUPERVISOR_NAME,MPPJOBCODE,EXPECTED_END_DATE,FTE";
	// End of Personnel Action Plan

	// Start of Get MPP Self Eval details
	public static final String MPPReviewSQL = "SELECT EVALUATION1,EVALUATION2,EVALUATION3,EVALUATION4,WORKFLOW_INSTANCE_ID FROM AEM_MPP_SELF_EVAL EVAL1 WHERE empid = ('<<empid>>') AND review_period_from=('<<review_period_from>>') AND review_period_to=('<<review_period_to>>') AND deptid=('<<deptid>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_MPP_SELF_EVAL EVAL2 WHERE EVAL1.empid = EVAL2.empid AND EVAL1.review_period_from=EVAL2.review_period_from AND EVAL1.review_period_to=EVAL2.review_period_to AND EVAL1.deptid=EVAL2.deptid)";
	public static final String MPPReviewLookupFields = "EVALUATION1,EVALUATION2,EVALUATION3,EVALUATION4,WORKFLOW_INSTANCE_ID";
	// End of Get Mpp self eval details

	// Start of Get MPP Self Eval details
	public static final String MPPEvalReviewSQL = "SELECT EMPID,LASTNAME,FIRSTNAME,CLASSIFICATION,EMPRCD,CBID,DEPTNAME,RANGE,DEPTID,REVIEWPERIODFROM,REVIEWPERIODTO,EVALUATORNAME,EVALUATIONTYPE,ATHLETICEMP,SECTIONBCOMMENTS,ATHLETICEMP_IMP_TO_POS,ATHLETICEMPRATING,SUPPORTSTMT1,SUPPORTSTMT2,SUPPORTSTMT3,SUPPORTSTMT4,DIVISION,DIVISION_NAME FROM AEM_MPP_PERFORMANCE_EVAL EVAL1 WHERE EMPID = ('<<empid>>') AND REVIEWPERIODFROM=('<<review_period_from>>') AND REVIEWPERIODTO=('<<review_period_to>>') AND DEPTID=('<<deptid>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_MPP_PERFORMANCE_EVAL EVAL2 WHERE EVAL1.EMPID = EVAL2.EMPID AND EVAL1.REVIEWPERIODFROM=EVAL2.REVIEWPERIODFROM AND EVAL1.REVIEWPERIODTO=EVAL2.REVIEWPERIODTO AND EVAL1.DEPTID=EVAL2.DEPTID)";
	public static final String MPPEvalReviewLookupFields = "EMPID,LASTNAME,FIRSTNAME,CLASSIFICATION,EMPRCD,CBID,DEPTNAME,RANGE,DEPTID,REVIEWPERIODFROM,REVIEWPERIODTO,EVALUATORNAME,EVALUATIONTYPE,ATHLETICEMP,SECTIONBCOMMENTS,ATHLETICEMP_IMP_TO_POS,ATHLETICEMPRATING,SUPPORTSTMT1,SUPPORTSTMT2,SUPPORTSTMT3,SUPPORTSTMT4,DIVISION,DIVISION_NAME";
	// End of Get Mpp self eval details

	// Start of self eval get manager details
	public static final String mppManagerSQL = "SELECT MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME FROM HR_STAFF_EVALUATION WHERE EMPLID='<<EMPL_ID>>' and DEPTID='<<DEPTID>>' AND UNION_CD in ('M80','M98')";
	public static final String mppManagerLookupFields = "MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	// End of self eval get manager details

	// Start of MPP Emp Lookup
	public static final String mppEmpIDSQL = "Select FIRST_NAME, LAST_NAME, EMPLID, DEPTID, DEPTNAME, EMPL_RCD, DESCR, UNION_CD, GRADE, Supervisorname,DIVSION,DIVISION_NAME,SupervisorTitle, EMPUSERID,EMAILID FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL AND UNION_CD in ('M80','M98')";
	public static final String mppLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,EMPL_RCD,DESCR,UNION_CD,GRADE,SupervisorName,DIVSION,DIVISION_NAME,SupervisorTitle,EMPUSERID,EMAILID";
	// End of MPP Emp Lookup

	// Start of MPP Self eval user lookup
	public static final String MPPUserIDSQL = "select FIRST_NAME,LAST_NAME,UNION_CD,DEPTID,DEPTNAME,EMPL_RCD,DESCR,GRADE,EMPLID,SupervisorName,EMAILID from HR_STAFF_EVALUATION where EMP_USERID = '<<getUser_ID>>' and UNION_CD not in ('R03','R11','E99')";
	public static final String MPPSelfEvalUserIdFields = "FIRST_NAME,LAST_NAME,UNION_CD,DEPTID,DEPTNAME,EMPL_RCD,DESCR,GRADE,EMPLID,SUPERVISORNAME,EMAILID";
	// End of Mpp self eval user lookup

	// Start of get logged in employee details
	public static final String getLoggedInUserDetails = "SELECT * FROM HR_STAFF_EVALUATION WHERE LOWER(EMPUSERID) = LOWER('<<get_user_id>>')";
	public static final String getLoggedInUserDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	// End of get logged in employee details

	public static final String MPPGetEavlDataSQL = "SELECT EMPID,LASTNAME,FIRSTNAME,CLASSIFICATION,EMPRCD,CBID,DEPTNAME,RANGE,DEPTID,REVIEWPERIODFROM,REVIEWPERIODTO,EVALUATORNAME,EVALUATIONTYPE,ATHLETICEMP,SECTIONBCOMMENTS,ATHLETICEMP_IMP_TO_POS,ATHLETICEMPRATING,SUPPORTSTMT1,SUPPORTSTMT2,SUPPORTSTMT3,SUPPORTSTMT4,DIVISION,DIVISION_NAME,CONCEPTUALSKILLS,INTERPERSONALSKILLS,TECHNICALSKILLS,OTHERS,OTHER_RATING,OVERALLRATING,SECTIONBCOMMENTS FROM AEM_MPP_PERFORMANCE_EVAL EVAL1 WHERE EMPID = ('<<EMPID>>') AND REVIEWPERIODFROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIODTO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIODFROM desc";
	public static final String MPPGetEavlDataLookupFields = "EMPID,LASTNAME,FIRSTNAME,CLASSIFICATION,EMPRCD,CBID,DEPTNAME,RANGE,DEPTID,REVIEWPERIODFROM,REVIEWPERIODTO,EVALUATORNAME,EVALUATIONTYPE,ATHLETICEMP,SECTIONBCOMMENTS,ATHLETICEMP_IMP_TO_POS,ATHLETICEMPRATING,SUPPORTSTMT1,SUPPORTSTMT2,SUPPORTSTMT3,SUPPORTSTMT4,DIVISION,DIVISION_NAME,CONCEPTUALSKILLS,INTERPERSONALSKILLS,TECHNICALSKILLS,OTHERS,OTHER_RATING,OVERALLRATING,SECTIONBCOMMENTS";
	// End of Get Mpp eval details

	// Start of Get HR Coo details
	public static final String mppHRCooSQL = "select EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAIL,DIVISION,DIVISIONNAME from AEM_EVAL_HR_COORDINATORS where division=('<<division>>')";
	public static final String mppHRCooLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAIL,DIVISION,DIVISIONNAME";
	// End of Get HR Coo details

	// Start of Get Staff Conf details
	public static final String staffEvalConfReviewSQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_CONF CONF1 where EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM=('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO=('<<REVIEWPERIODTO>>') AND DEPARTMENT_ID = ('<<DEPTID>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_STAFF_PERF_EVAL_CONF CONF2 WHERE CONF1.EMPLID = CONF2.EMPLID AND CONF1.REVIEWPERIOD_FROM=CONF2.REVIEWPERIOD_FROM AND CONF1.REVIEWPERIOD_TO=CONF2.REVIEWPERIOD_TO AND CONF1.DEPARTMENT_ID = CONF2.DEPARTMENT_ID)";
	public static final String staffEvalConfReviewLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	// End of Get Staff Conf details

	// Start of Get Staff Conf Copy details
	public static final String staffEvalConfCopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_CONF WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>')  order by REVIEWPERIOD_FROM desc";
	public static final String staffEvalConfCopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	// End of Get Staff Conf Copy details

	// Start of Get Staff Conf Emp details
	public static final String speConfEmpIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID from HR_STAFF_EVALUATION WHERE EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD='C99'";
	public static final String speConfLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	// End of Get Staff Conf Emp details

	// Start of Start of Get Pre Perf Eval Data
	public static final String prePerfReviewSQL = "select EVAL_COMMENT1,EVAL_COMMENT2,EVAL_COMMENT3,EVAL_COMMENT4,EVAL_COMMENT5,EVAL_COMMENT6,EVAL_COMMENT7,WORKFLOW_INSTANCE_ID from aem_pre_perf_eval eval1 where emplid = ('<<empid>>') and review_from_dt=('<<review_period_from>>') and review_to_dt=('<<review_period_to>>') and deptid=('<<deptid>>') and UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM aem_pre_perf_eval eval2 WHERE eval1.emplid = eval2.emplid AND eval1.review_from_dt=eval2.review_from_dt AND eval1.review_to_dt=eval2.review_to_dt and eval1.deptid=eval2.deptid)";
	public static final String prePerfReviewLookupFields = "EVAL_COMMENT1,EVAL_COMMENT2,EVAL_COMMENT3,EVAL_COMMENT4,EVAL_COMMENT5,EVAL_COMMENT6,EVAL_COMMENT7,WORKFLOW_INSTANCE_ID";
	// End of Start of Get Pre Perf Eval Data

	// Start of User-id lookup
	public static final String lookupFieldsUserIdLookup = "FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,UNION_CD,EMPLID";
	public static final String userIDSQL = "select FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,UNION_CD,SupervisorName,EMPLID,SupervisorTitle from HR_STAFF_EVALUATION where EMP_USERID = '<<getUser_ID>>' AND UNION_CD not in ('R03','R11','E99','M80','M98')";
	// End of User-id lookup

	// Start of Dock Notice
	public static final String dockNoticeUserIdSqlNew = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, B.EMPL_RCD, B.DEPTID, B.DEPTNAME,B.UNION_CD,B.CSU_UNIT, B.FUL_DIVISION,('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCO_Position_Num, A.NATIONAL_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = B.EMPLID and A.EMPLID = C.cwid and C.userid = ('<<getUser_ID>>')";
	public static final String dockNoticeFieldsNew = "EMPLID,FIRST_NAME,LAST_NAME,MIDDLE_NAME,EMPL_RCD,DEPTID,DEPTNAME,SCO_POSITION_NUM,NATIONAL_ID,UNION_CD,CSU_UNIT,FUL_DIVISION";

	// public static final String dockNoticeEmpIdSql = "Select
	// A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, B.EMPL_RCD, B.DEPTID,
	// B.DEPTNAME, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' || '00' ||
	// (B.EMPL_RCD+1) ) as SCO_Position_Num, A.NATIONAL_ID from FUL_ECM_PERS_VW A,
	// FUL_ECM_JOB_VW B where A.EMPLID = B.EMPLID and A.EMPLID = '<<Empl_ID>>' and
	// deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid =
	// '<<getUser_ID>>')";
	public static final String dockNoticeEmpIdSqlNew = "Select A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, B.EMPL_RCD, B.DEPTID, B.DEPTNAME, B.UNION_CD,B.CSU_UNIT,B.FUL_DIVISION,('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCO_Position_Num, A.NATIONAL_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = B.EMPLID and A.EMPLID = '<<Empl_ID>>' and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
	// End of Dock Notice

	// Start of Divsion from Dept Details
	public static final String getDivsionDetailsSql = "select distinct divsion,deptid, division_name,emplid,union_cd from HR_STAFF_EVALUATION where DEPTID = '<<deptId>>' and emplid='<<EMPL_ID>>'";
	// End of Divsion from Dept Details

	// Start of get logged in employee details using cwid
	public static final String getLoggedInUserDetailsWithCwid = "SELECT * FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<cwid>>'";
	public static final String getLoggedInUserDetailsWithCwidLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	// End of get logged in employee details

	// Start of Short App Emp Fee Waiver
	public static final String confirmationTicketEmp = "select * from HR_STUDENT_WORKER_DATA where CLASS_CODE ='<<CLASS_CODE>>' and cwid='<<CWID>>'";
	public static final String confTicketLookupFields = "CWID,EMPL_RCD,EFFECTIVE_DATE,CURRENT_DATE,APPOINTMENT_END_DATE,FULL_NAME,LAST_NAME,FIRST_NAME,MIDDLE_NAME,ACTION,ACTION_REASON,DEPARTMENT_CODE,DEPARTMENT,CMS_POSITION_NUMBER,AGENCY,REPORTING_UNIT,CLASS_CODE,SERIAL_NUMBER,JOB_TITLE,COMPENSATION_RATE";
	// End of Short App Emp Fee Waiver

	// Start of Evaluation Unit2579 Emp Lookup, Get Data for copy feature and Review
	// period
	public static final String spe2579EmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID from HR_STAFF_EVALUATION WHERE EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD in ('R02','R05','R07','R09')";
	public static final String spe2579EmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	public static final String spe2579ReviewSQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,ATHLETICS_EMP,ATHETICSEMP_RATING,ATHETICSEMP_RATING_1,ATHETICSEMP_RATING_2 from AEM_STAFF_PERF_EVAL_2579 CONF1 where EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM=('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO=('<<REVIEWPERIODTO>>') AND DEPARTMENT_ID = ('<<DEPTID>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_STAFF_PERF_EVAL_2579 CONF2 WHERE CONF1.EMPLID = CONF2.EMPLID AND CONF1.REVIEWPERIOD_FROM=CONF2.REVIEWPERIOD_FROM AND CONF1.REVIEWPERIOD_TO=CONF2.REVIEWPERIOD_TO AND CONF1.DEPARTMENT_ID = CONF2.DEPARTMENT_ID)";
	public static final String spe2579LookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,ATHLETICS_EMP,ATHETICSEMP_RATING,ATHETICSEMP_RATING_1,ATHETICSEMP_RATING_2";
	public static final String spe2579CopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,ATHLETICS_EMP,ATHETICSEMP_RATING,ATHETICSEMP_RATING_1,ATHETICSEMP_RATING_2 from AEM_STAFF_PERF_EVAL_2579 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String spe2579CopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,ATHLETICS_EMP,ATHETICSEMP_RATING,ATHETICSEMP_RATING_1,ATHETICSEMP_RATING_2";
	// End of Evaluation Unit2579

	// Start of Evaluation Unit8 Emp Lookup, Get Data for copy feature and Review
	// period
	public static final String speUnit8EmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID from HR_STAFF_EVALUATION WHERE EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD ='R08'";
	public static final String speUnit8EmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	public static final String speUnit8ReviewSQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_UNIT8 CONF1 where EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM=('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO=('<<REVIEWPERIODTO>>') AND DEPARTMENT_ID = ('<<DEPTID>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_STAFF_PERF_EVAL_UNIT8 CONF2 WHERE CONF1.EMPLID = CONF2.EMPLID AND CONF1.REVIEWPERIOD_FROM=CONF2.REVIEWPERIOD_FROM AND CONF1.REVIEWPERIOD_TO=CONF2.REVIEWPERIOD_TO AND CONF1.DEPARTMENT_ID = CONF2.DEPARTMENT_ID)";
	public static final String speUnit8LookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String speUnit8CopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_UNIT8 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String speUnit8CopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	// End of Evaluation Unit8

	// Start of Evaluation Unit6 Emp Lookup
	public static final String speUnit6EmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID from HR_STAFF_EVALUATION WHERE EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD ='R06'";
	public static final String speUnit6EmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	public static final String speUnit6ReviewSQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,PERFORMANCE_GOAL_ONE,PERFORMANCE_GOAL_TWO,PERFORMANCE_GOAL_THREE,PERFORMANCE_GOAL_FOUR,PERFORMANCE_GOAL_FIVE from AEM_STAFF_PERF_EVAL_UNIT6 CONF1 where EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM=('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO=('<<REVIEWPERIODTO>>') AND DEPARTMENT_ID = ('<<DEPTID>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_STAFF_PERF_EVAL_UNIT6 CONF2 WHERE CONF1.EMPLID = CONF2.EMPLID AND CONF1.REVIEWPERIOD_FROM=CONF2.REVIEWPERIOD_FROM AND CONF1.REVIEWPERIOD_TO=CONF2.REVIEWPERIOD_TO AND CONF1.DEPARTMENT_ID = CONF2.DEPARTMENT_ID)";
	public static final String speUnit6LookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,PERFORMANCE_GOAL_ONE,PERFORMANCE_GOAL_TWO,PERFORMANCE_GOAL_THREE,PERFORMANCE_GOAL_FOUR,PERFORMANCE_GOAL_FIVE";
	public static final String speUnit6CopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,PERFORMANCE_GOAL_ONE,PERFORMANCE_GOAL_TWO,PERFORMANCE_GOAL_THREE,PERFORMANCE_GOAL_FOUR,PERFORMANCE_GOAL_FIVE from AEM_STAFF_PERF_EVAL_UNIT6 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String speUnit6CopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,PERFORMANCE_GOAL_ONE,PERFORMANCE_GOAL_TWO,PERFORMANCE_GOAL_THREE,PERFORMANCE_GOAL_FOUR,PERFORMANCE_GOAL_FIVE";
	// End of Evaluation Unit6 Emp Lookup

	// Start of Evaluation Unit1 Emp Lookup
	public static final String speUnit1EmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID from HR_STAFF_EVALUATION WHERE EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and	UNION_CD='R01'";
	public static final String speUnit1EmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	public static final String speUnit1ReviewSQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY_OF_MED_PRACTICE,Q_MED_PRACTICE_RATING_1,Q_MED_PRACTICE_RATING_2,Q_MED_PRACTICE_RATING_3,Q_MED_PRACTICE_RATING_4,Q_MED_PRACTICE_RATING_5,QUALITY_OF_CONTRIBUTION,Q_CNTRIBUTION_RATING_1,Q_CNTRIBUTION_RATING_2,Q_CNTRIBUTION_RATING_3,Q_CNTRIBUTION_RATING_4,Q_CNTRIBUTION_RATING_5,QUALITY_OF_EDU_ACTIVITY,Q_EDU_RATING_1,Q_EDU_RATING_2,Q_EDU_RATING_3,Q_EDU_RATING_4,Q_EDU_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from aem_staff_perf_eval_unit1 CONF1 where EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM=('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO=('<<REVIEWPERIODTO>>') AND DEPARTMENT_ID = ('<<DEPTID>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM aem_staff_perf_eval_unit1 CONF2 WHERE CONF1.EMPLID = CONF2.EMPLID AND CONF1.REVIEWPERIOD_FROM=CONF2.REVIEWPERIOD_FROM AND CONF1.REVIEWPERIOD_TO=CONF2.REVIEWPERIOD_TO AND CONF1.DEPARTMENT_ID = CONF2.DEPARTMENT_ID)";
	public static final String speUnit1LookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY_OF_MED_PRACTICE,Q_MED_PRACTICE_RATING_1,Q_MED_PRACTICE_RATING_2,Q_MED_PRACTICE_RATING_3,Q_MED_PRACTICE_RATING_4,Q_MED_PRACTICE_RATING_5,QUALITY_OF_CONTRIBUTION,Q_CNTRIBUTION_RATING_1,Q_CNTRIBUTION_RATING_2,Q_CNTRIBUTION_RATING_3,Q_CNTRIBUTION_RATING_4,Q_CNTRIBUTION_RATING_5,QUALITY_OF_EDU_ACTIVITY,Q_EDU_RATING_1,Q_EDU_RATING_2,Q_EDU_RATING_3,Q_EDU_RATING_4,Q_EDU_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String speUnit1CopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY_OF_MED_PRACTICE,Q_MED_PRACTICE_RATING_1,Q_MED_PRACTICE_RATING_2,Q_MED_PRACTICE_RATING_3,Q_MED_PRACTICE_RATING_4,Q_MED_PRACTICE_RATING_5,QUALITY_OF_CONTRIBUTION,Q_CNTRIBUTION_RATING_1,Q_CNTRIBUTION_RATING_2,Q_CNTRIBUTION_RATING_3,Q_CNTRIBUTION_RATING_4,Q_CNTRIBUTION_RATING_5,QUALITY_OF_EDU_ACTIVITY,Q_EDU_RATING_1,Q_EDU_RATING_2,Q_EDU_RATING_3,Q_EDU_RATING_4,Q_EDU_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from aem_staff_perf_eval_unit1 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String speUnit1CopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY_OF_MED_PRACTICE,Q_MED_PRACTICE_RATING_1,Q_MED_PRACTICE_RATING_2,Q_MED_PRACTICE_RATING_3,Q_MED_PRACTICE_RATING_4,Q_MED_PRACTICE_RATING_5,QUALITY_OF_CONTRIBUTION,Q_CNTRIBUTION_RATING_1,Q_CNTRIBUTION_RATING_2,Q_CNTRIBUTION_RATING_3,Q_CNTRIBUTION_RATING_4,Q_CNTRIBUTION_RATING_5,QUALITY_OF_EDU_ACTIVITY,Q_EDU_RATING_1,Q_EDU_RATING_2,Q_EDU_RATING_3,Q_EDU_RATING_4,Q_EDU_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	// End of Evaluation Unit1 Emp Lookup

	// Start of Evaluation Unit4 Emp Lookup
	public static final String speUnit4EmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID	from HR_STAFF_EVALUATION where EMPLID = '<<Empl_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL AND UNION_CD='R04'";
	public static final String speUnit4EmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	public static final String speUnit4ReviewSQL = "select RATE_PERIOD_TO,RATE_PERIOD_FROM,EMPL_ID,EMP_RCD,CBID,CLASSIFICATION,EMP_RANGE,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,QUALITY,QUANTITY,PROFESSIONAL_JUDGEMENT,CONTRIBUTION_CAMPUS,JOB_STRENGTH_COMMENT,COMMENTS,PROGRESS_COMMENTS,IMPROVEMENTS_COMMENT,GOALS_PROGRAMS_COMMENT,PROB_EMP_RB,OVERALL_RATING,BASED_ON_OBSERVATION,BASED_ON_OBSERVATION1,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_UNIT4 CONF1 where EMPL_ID = ('<<EMPID>>') AND RATE_PERIOD_FROM=('<<REVIEWPERIODFROM>>') AND RATE_PERIOD_TO=('<<REVIEWPERIODTO>>') AND DEPARTMENT_ID = ('<<DEPTID>>') AND UPDATED_DT = (SELECT MAX(UPDATED_DT) FROM AEM_STAFF_PERF_EVAL_UNIT4 CONF2 WHERE CONF1.EMPL_ID = CONF2.EMPL_ID AND CONF1.RATE_PERIOD_FROM=CONF2.RATE_PERIOD_FROM AND CONF1.RATE_PERIOD_TO=CONF2.RATE_PERIOD_TO AND CONF1.DEPARTMENT_ID = CONF2.DEPARTMENT_ID)";
	public static final String speUnit4LookupFields = "RATE_PERIOD_TO,RATE_PERIOD_FROM,EMPL_ID,EMP_RCD,CBID,CLASSIFICATION,EMP_RANGE,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,QUALITY,QUANTITY,PROFESSIONAL_JUDGEMENT,CONTRIBUTION_CAMPUS,JOB_STRENGTH_COMMENT,COMMENTS,PROGRESS_COMMENTS,IMPROVEMENTS_COMMENT,GOALS_PROGRAMS_COMMENT,PROB_EMP_RB,OVERALL_RATING,BASED_ON_OBSERVATION,BASED_ON_OBSERVATION1,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String speUnit4CopySQL = "select RATE_PERIOD_TO,RATE_PERIOD_FROM,EMPL_ID,EMP_RCD,CBID,CLASSIFICATION,EMP_RANGE,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,QUALITY,QUANTITY,PROFESSIONAL_JUDGEMENT,CONTRIBUTION_CAMPUS,JOB_STRENGTH_COMMENT,COMMENTS,PROGRESS_COMMENTS,IMPROVEMENTS_COMMENT,GOALS_PROGRAMS_COMMENT,PROB_EMP_RB,OVERALL_RATING,BASED_ON_OBSERVATION,BASED_ON_OBSERVATION1,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_UNIT4 WHERE EMPL_ID = ('<<EMPID>>') AND RATE_PERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND RATE_PERIOD_TO <= ('<<REVIEWPERIODTO>>') order by RATE_PERIOD_FROM desc";
	public static final String speUnit4CopyLookupFields = "RATE_PERIOD_TO,RATE_PERIOD_FROM,EMPL_ID,EMP_RCD,CBID,CLASSIFICATION,EMP_RANGE,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,QUALITY,QUANTITY,PROFESSIONAL_JUDGEMENT,CONTRIBUTION_CAMPUS,JOB_STRENGTH_COMMENT,COMMENTS,PROGRESS_COMMENTS,IMPROVEMENTS_COMMENT,GOALS_PROGRAMS_COMMENT,PROB_EMP_RB,OVERALL_RATING,BASED_ON_OBSERVATION,BASED_ON_OBSERVATION1,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String getAdminDetails = "select distinct ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,ADMIN_TITLE from HR_STAFF_EVALUATION where LOWER(ADMIN_EMP_USERID) = LOWER('<<USERID>>')";
	public static final String getAdminDetailsLookupFields = "ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,ADMIN_TITLE";
	// End of Evaluation Unit 4 Emp Lookup

	// Start of Student Timesheet
	public static final String studTimesheetUserIDSQL = "Select A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DESCR, B.JOBCODE, A.MIDDLE_NAME, 'XXXXX' || SUBSTR(A.NATIONAL_ID,-4) AS LAST4SSN, B.EMPL_RCD,B.CSU_UNIT, B.DEPTID, B.HOURLY_RT, A.EMPLID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME C where A.EMPLID = C.cwid and C.userid = ('<<User_ID>>') and A.EMPLID = B.EMPLID";
	public static final String studTimesheetUserIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DESCR,JOBCODE,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,DEPTID,HOURLY_RT,EMPLID";
	public static final String studTimesheetEmpIDSQL = "Select A.EMPLID,A.FIRST_NAME, A.LAST_NAME, B.DEPTNAME, B.DESCR, B.JOBCODE, A.MIDDLE_NAME, 'XXXXX' || SUBSTR(A.NATIONAL_ID,-4) AS LAST4SSN,B.EMPL_RCD, B.CSU_UNIT, B.DEPTID, B.HOURLY_RT from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.EMPLID = Replace('<<EMPLID>>', '-','') and A.EMPLID = B.EMPLID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<User_ID>>')";
	public static final String studTimesheetEmpIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DESCR,JOBCODE,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,DEPTID,HOURLY_RT,EMPLID";
	public static final String studTimesheetManagerSQL = "select * from hr_staff_evaluation where emplid='<<EMPLID>>' and union_cd = '<<UNION_CD>>' and deptid = '<<DEPTID>>' and empl_rcd='<<EMPL_RCD>>'";
	public static final String studTimesheetManagerFields = "MANAGE_EMP_NAME,MANAGER_EMP_USERID,MANAGER_EMPLID";
	// End of Student Timesheet

	// Start of Health Premium
	public static final String healthPremiumPlanSQL = "select * from ful_ecm_ben2_vw where emplid='<<cwid>>' and plan_type='10'";
	public static final String healthPremiumPlanFields = "EMPLID,EMPL_RCD,COBRA_EVENT_ID,EFFDT,BENEFIT_PROGRAM,PLAN_TYPE,COVERAGE_ELECT,BENEFIT_PLAN,DESCR,COVRG_CD,DESCR1,OPTION_ID,RATE_TBL_ID,DESCR2,TOTAL_COVRG_RATE,EMPLR_COVRG_RATE";
	// End of Health Premium

	// Start of FAER
	public static final String FAERDivUserIDSQL = "select * from hr_staff_evaluation where LOWER(empuserid)=LOWER('<<User_ID>>')";
	public static final String FAERDivUserIDFields = "DIVSION,DIVISION_NAME";
	public static final String FAERCwidDetails = "select * from hr_staff_evaluation where emplid='<<EMPLID>>'";
	public static final String FAERCwidFields = "EMPLID,FIRST_NAME,LAST_NAME,EMP_USERID,EMAILID,EMP_NAME";
	public static final String FAERPositionDetails = "Select * from HR_POSITION_DATA where position_nbr='<<position_nbr>>'";
	public static final String FAERPositionFields = "REPORTS_TO,POSITION_NBR,POS_DESCR,DEPTID,DEPTNAME,DIVISON,DIVISION_NAME,COLLEGE";
	public static final String FAERDeptSQl = "select distinct deptid from btr_dept_approvers order by deptid asc";
	public static final String FAERFundSQl = "select distinct fund_code from BTR_COMBO_DATA_TBL order by fund_code asc";
	public static final String FAERProgramSQl = "SELECT distinct program FROM BTR_PROGRAM_TBL order by PROGRAM asc";
	public static final String FAERClassSQl = "SELECT distinct CLASS FROM BTR_CLASS_CF_TBL order by CLASS asc";
	public static final String FAERApproverNameSQl = "select distinct APPROVER_NAME,APPROVER_EMAILID,APPROVER_EMPLID from btr_dept_approvers where deptid='<<DepID>>'";
	public static final String FAERDeanDesgineeNameSQl = "select  emplid,first_name,last_name,emp_userid, emailid, emp_name from hr_staff_evaluation where divsion = '<<division>>' and union_cd='<<union_cd>>' order by emp_name";
	public static final String FAERDeanDesgineeFields = "EMPLID,FIRST_NAME,LAST_NAME,EMP_USERID,EMAILID,EMP_NAME";
	public static final String FAERApproverSQl = "select distinct EMPLID from hr_staff_evaluation where LOWER(EMP_NAME)=LOWER('<<APPROVER_NAME>>')";
	public static final String FAERDeanDesgineeDetailsSQl = "select emplid,first_name,last_name,emp_userid, emailid, emp_name from hr_staff_evaluation where divsion ='<<division>>' and union_cd='M80' order by emp_name";
	public static final String FAERDeanDesgineeDetailsFields = "EMPLID,FIRST_NAME,LAST_NAME,EMP_USERID,EMAILID,EMP_NAME";
	public static final String FAERSearchFunctionality = "SELECT A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID FROM EMPL_ACT_DIR_DATA A INNER JOIN HR_Staff_Evaluation B On A.EMPLOYEEID=B.EMPLID WHERE LOWER(LASTNAME) LIKE LOWER('<<LASTNAME>>%') group by A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID order by A.FIRSTNAME asc";
	public static final String FAERSearchFunctionalityLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID";
	// End of FAER

	// Start of MPP Justification Form
	public static final String cmsPositionNumberLookUpSQL = "Select A.DIVISON,A.DIVISION_NAME,A.POS_DESCR,A.DEPTID,A.DEPTNAME,A.SUPERVISORNAME,A.SUPERVISORTITLE,A.MANAGER_EMP_USERID,A.MANAGE_EMP_NAME,A.MANAGER_TITLE,A.MANAGER_EMAIL_ID,A.ADMIN_EMPLID,A.ADMIN_EMP_USERID,A.ADMIN_EMP_NAME,A.ADMIN_TITLE,A.ADMIN_EMAIL_ID,B.DESCR From HR_POSITION_DATA A INNER JOIN HR_Staff_Evaluation B On A.POSITION_NBR=B.POSITION_NBR WHERE A.POSITION_NBR='<<POSITION_NUMBER>>'";
	// End of MPP Justification Form

	// Start of Citizenship Verification
	public static final String CitizenShipUserIDSQL = "select * from AR_PERSON_INFO where LOWER(USERID)=LOWER('<<USERID>>')";
	public static final String CitizenShipUserIDFields = "EMPLID,NAME,LAST_NAME,FIRST_NAME,USERID,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY";
	public static final String CitizenshipDuplicateCheckSQL = "SELECT <<FA_DECISION_COLUMN_NAME>> FROM <<TABLE_NAME>> WHERE CWID ='<<CWID>>' AND <<FORM_CODE_COLUMN_NAME>>='<<FORM_CODE>>' AND (<<FA_DECISION_COLUMN_NAME>> IS NULL OR <<FA_DECISION_COLUMN_NAME>>='<<FA_DECISION>>')";
	public static final String CitizenshipUpdatedDuplicateCheckSQL = "SELECT <<FA_DECISION_COLUMN_NAME>> FROM <<TABLE_NAME>> WHERE CWID ='<<CWID>>' AND <<FORM_CODE_COLUMN_NAME>>='<<FORM_CODE>>' AND <<FINANCIAL_AID_YEAR_COLUMN_NAME>>='<<FINANCIAL_AID_YEAR>>' AND (<<FA_DECISION_COLUMN_NAME>> IS NULL OR <<FA_DECISION_COLUMN_NAME>>='<<FA_DECISION>>')";
	// End of Citizenship Verification

	// Start of FAR
	// public static final String FARUserIDSQLOld = "Select distinct A.EMPLID,
	// A.FIRST_NAME, A.LAST_NAME,
	// A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,
	// B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME,
	// B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT from FUL_ECM_JOB_VW B INNER JOIN
	// hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID WHERE
	// A.EMPLID='<<EMPLID>>' and A.DEPTID='<<DEPTID>>'";
	public static final String FARUserIDSQL = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT, B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID WHERE A.EMPLID='<<EMPLID>>' and A.deptid in (select D.deptid from cmsrda.cms_hr_dept_sec D where D.userid = '<<USERID>>')";
	public static final String FARUserIDFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE_NAME";
	public static final String FARChairDeanSQL = "select * from AR_DEPT_CHAIR_INFO where DEPTID=('<<DEPTID>>')";
	public static final String FARChairDeanFields = "DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL";
	// End of FAR

	// End of TA Substitute Faculty
	public static final String TASubstituteUserIDSQL = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE_NAME,B.FUL_COLLEGE from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID WHERE A.EMPLID='<<EMPLID>>' and A.deptid in (select D.deptid from cmsrda.cms_hr_dept_sec D where D.userid = '<<USERID>>')";
	public static final String TASubstituteUserIDFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE_NAME,FUL_COLLEGE";
	public static final String TASubstituteDeanSQL = "select * from AR_HRDI_DEAN_LKP where ful_college =('<<ful_college>>')";
	public static final String TASubstituteDeanFields = "COLLEGE,EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,FUL_COLLEGE";
	public static final String TASubstituteChairSQL = "select * from AR_DEPT_CHAIR_INFO where DEPTID=('<<DEPTID>>')";
	public static final String TASubstituteChairFields = "DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL";

	// End of TA Substitute Faculty

	// Start of MPP Justification Form
	public static final String getCaliforniaCitiesSQL = "Select * from CALIFORNIA_CITIES order by CITY_NAME asc";
	public static final String getCaliforniaCitiesLookupFields = "ID,CITY_NAME";
	// End of MPP Justification Form

	// Start of Position Numbers Reports To SQL
	public static final String positionNumberReportsToSQL = "Select DISTINCT POSITION_NBR from HR_POSITION_DATA WHERE REPORTS_TO='<<POSITION_NUMBER>>'";
	// End of Position Numbers Reports To SQL

	// Start of Get Dept Details SQL
	public static final String getDeptData = "SELECT * FROM HR_STAFF_EVALUATION WHERE DEPTID = ('<<get_dept_id>>') and LOWER(EMPUSERID) = LOWER('<<get_user_id>>')";
	public static final String getDeptDataLookupFields = "DEPTID,DEPTNAME";
	// End of Get Dept Details SQL

	// Start of Chair/Director Application Form
	public static final String getChairApplicationDetails = "SELECT DISTINCT EMPUSERID,EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,EMAILID,EMP_NAME from hr_staff_evaluation where lower(EMP_USERID)=lower('<<getUser_ID>>')";
	public static final String getDeanDetails = "SELECT DISTINCT EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL from AR_HRDI_DEAN_LKP where COLLEGE='<<COLLEGE>>'";
	// End of Chair/Director Application Form

	// Start of Get FERP Emp Data SQL
	public static final String getEmpData = "SELECT * FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<EMP_ID>>'";
	public static final String getEmpDataLookupFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID";
	public static final String getFERPEmpData = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.UNION_CD, B.FULL_PART_TIME,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID WHERE A.EMPLID='<<EMP_ID>>'";
	public static final String getFERPEmpDataLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,UNION_CD,FULL_PART_TIME,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE";

	// End of Get FERP Emp Data SQL

	// Start of Get SubstituteFaculty Emp Data SQL
	public static final String getSubstituteFacultyEmpData = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID where A.EMP_USERID = '<<USER_ID>>'";
	public static final String getSubstituteFacultyCWIDLookupData = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID where A.EMPLID = '<<CWID>>'";
	public static final String getSubstituteFacultyEmpDataLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME";
	public static final String getCSUUnit = "select distinct CSU_UNIT from FUL_ECM_JOB_VW where DEPTID = '<<deptId>>'";
	// End of Get SubstituteFaculty Emp Data SQL

	// Start of Pre retirement timebase SQL
	public static final String PreRetirementTBUserID = "select * from hr_staff_evaluation where LOWER(empuserid)=LOWER('<<User_ID>>')";
	public static final String PreRetirementTBFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,EMAILID,EMPL_RCD";
	public static final String PreRetirementChairSQL = "select * from AR_DEPT_CHAIR_INFO where DEPTID=('<<DEPTID>>')";
	public static final String PreRetirementChairFields = "DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL";
	public static final String PreRetirementDeanSQL = "select * from AR_HRDI_DEAN_LKP where ful_college =('<<ful_college>>')";
	public static final String PreRetirementDeanFields = "COLLEGE,EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,FUL_COLLEGE";
	public static final String PreRetirementTBUserIDSQL = "Select distinct A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME, B.UNION_CD, B.FULL_PART_TIME,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID WHERE A.EMPLID='<<cwid>>'";
	// public static final String PreRetirementTBUserIDSQL = "Select distinct
	// A.EMPLID,A.EMPL_RCD, A.FIRST_NAME, A.LAST_NAME,
	// A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE,
	// B.DESCR, B.UNION_CD, B.FULL_PART_TIME,
	// B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME
	// from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID
	// and A.DEPTID = B.DEPTID WHERE A.EMPUSERID='<<User_ID>>'";
	public static final String PreRetirementTBLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,UNION_CD,FULL_PART_TIME,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME";
	public static final String PreRetirementTBSearchDeptSQL = "select distinct DEPTNAME,DEPTID,FUL_COLLEGE,FUL_COLLEGE_NAME from AR_DEPT_CHAIR_INFO where DEPTID like '%<<deptid>>%' and LOWER(DEPTNAME) like LOWER('%<<deptname>>%')";
	public static final String PreRetirementTBSearchDeptLookupFields = "DEPTNAME,DEPTID,FUL_COLLEGE,FUL_COLLEGE_NAME";
	// End of Pre retirement timebase SQL

	// Start of Substitute Faculty Appointment For Short Duration SQL
	public static final String getSFAUserDetails = "SELECT DISTINCT DEPTID,DEPTNAME,FIRST_NAME,LAST_NAME,EMPUSERID,POSITION_NBR,UNION_CD,EMAILID,EMP_NAME from hr_staff_evaluation where LOWER(EMPLID)=LOWER('<<getCWID>>')";
	public static final String getSFAChairDeanDetails = "SELECT DISTINCT FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL from AR_DEPT_CHAIR_INFO where DEPTID='<<deptID>>'";
	// End of Substitute Faculty Appointment For Short Duration SQL

	// Start of Financial Access Request SQL
	public static final String FSEmpIDSQL = "SELECT FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING FROM FUL_ERP_ARF_PERS_VW WHERE EMPLID = '<<EMPLID>>'";
	public static final String FSEmpIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING";
	public static final String FSDEPTSQL = "select DEPTID, DEPTNAME from FUL_DEPT_ROLL where ful_division = '<<divID>>' order by DEPTID asc";
	public static final String FSReqAppSQL = "SELECT DISTINCT (c.first_name || ' ' || c.last_name) AS Name, a.emplid FROM ful_ecm_job_vw a, sysadm.ps_opr_po_RQSTR@dbl_fcfsprd b, ful_ecm_pers_vw c WHERE a.emplid = c.emplid AND b.oprid = ('50' || a.emplid) AND a.empl_status = 'A' AND b.REQUESTOR_ID <> b.oprid AND a.ful_division = '<<divID>>' and a.emplid <> '<<EMPLID>>'";
	public static final String FSReqAppSQLUpdated = "SELECT DISTINCT (SELECT (T.first_name || ' ' || T.last_name) FROM ful_ecm_pers_vw T WHERE T.EMPLID = A.EMPLID) AS Name, a.emplid FROM ful_ecm_job_vw a, sysadm.ps_opr_po_RQSTR@dbl_fcfsprd b WHERE b.oprid = ('50' || a.emplid) AND a.empl_status = 'A' AND b.REQUESTOR_ID <> b.oprid AND a.ful_division = '<<divID>>' AND a.emplid <> '<<EMPLID>>'";
	public static final String FSReqAppOtherDivSQL = "SELECT DISTINCT (c.first_name || ' ' || c.last_name) AS Name, a.emplid FROM ful_ecm_job_vw a, sysadm.ps_opr_po_RQSTR@dbl_fcfsprd b, ful_ecm_pers_vw c WHERE a.emplid = c.emplid AND b.oprid = ('50' || a.emplid) AND a.empl_status  = 'A' AND b.update_auth = 'Y' AND b.REQUESTOR_ID <> b.oprid AND a.ful_division <> '<<divID>>' and a.emplid <> '<<EMPLID>>'";
	public static final String FSReqAppOtherDivSQLUpdated = "SELECT DISTINCT (SELECT (T.first_name || ' ' || T.last_name) FROM ful_ecm_pers_vw T WHERE T.EMPLID = A.EMPLID) AS Name, a.emplid FROM ful_ecm_job_vw a, sysadm.ps_opr_po_RQSTR@dbl_fcfsprd b WHERE b.oprid = ('50' || a.emplid) AND a.empl_status = 'A' AND b.update_auth = 'Y' AND b.REQUESTOR_ID <> b.oprid AND a.ful_division = '<<divID>>' AND a.emplid <> '<<EMPLID>>'";
	public static final String FSDeptOtherDivIdSQL = "select DEPTID, DEPTNAME from FUL_CFS_DEPT_ROLL where DEPTID = '<<dept_id>>' order by DEPTID asc";
	public static final String FSDeptOtherDivNameSQL = "select DEPTID, DEPTNAME from FUL_CFS_DEPT_ROLL where lower(DEPTNAME) LIKE lower('%<<dept_name>>%') order by DEPTID asc";
	public static final String FSDeptOtherDivLookupFields = "DEPTID,DEPTNAME";
	public static final String FSRequestorDivisionSQL = "select b.first_name  || ' ' ||  b.last_name as Name, a.emplid as EmplID from ful_ecm_job_vw a, ful_ecm_pers_vw b, sysadm.PS_REQUESTOR_TBL@dbl_fcfsprd c where rownum <= 10 and a.emplid = b.emplid and c.requestor_id = '50' || a.emplid and c.active_flg = 'Y' and a.ful_division = '<<division>>' and LOWER(b.first_name) like LOWER('%<<firstName>>%') and LOWER(b.last_name) like LOWER('%<<lastName>>%') and a.emplid like '%<<empId>>%'";
	public static final String FSRequestorOtherDivisionSQL = "select b.first_name  || ' ' ||  b.last_name as Name, a.emplid as EmplID from ful_ecm_job_vw a, ful_ecm_pers_vw b, sysadm.PS_REQUESTOR_TBL@dbl_fcfsprd c where rownum <= 10 and a.emplid = b.emplid and c.requestor_id = '50' || a.emplid and c.active_flg = 'Y' and a.ful_division != '<<division>>' and LOWER(b.first_name) like LOWER('%<<firstName>>%') and LOWER(b.last_name) like LOWER('%<<lastName>>%') and a.emplid like '%<<empId>>%'";
	public static final String FSRequestorDivisionLookupFields = "Name,EmplID";
	public static final String ARFRoleAssignment = "select * from AEM_ARF_ROLE_ASSIGNMENT where LOWER(FORM_NAME)=lower('<<form_name>>')";
	public static final String ARFCSDeptSelection = "select * from AEM_ARF_DEPT_SELECTION where DEPT = '<<dept>>'";
	public static final String ARFCSDeptSelectionFields = "DEPT,ISEEPAGECOMP,ISAOPAGECOMP,ISROPAGECOMP,ISSOPAGECOMP,ISFAPAGECOMP,ISSFPAGECOMP,ISIEPAGECOMP";
	public static final String ARFRoleSelection = "select * from AEM_ARF_ROLE_SELECTION where DEPARTMENT = '<<dept>>' and SECTION = '<<section>>' and lower(STATUS) = lower('<<status>>') order by ROLE_NAME asc";
	public static final String ARFRoleSelectionFields = "DEPARTMENT,SECTION,ROLE_NAME,STATUS";
	public static final String ARFBudgetContactSQL = "select * from FUL_ERP_ARF_DOA_VW where FUL_DIVISION = '<<divID>>' and USERID='<<userid>>'";
	public static final String ARFBudgetContactFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,USERID,PHONE,EMAIL,DESCR,DEPTID,BUILDING,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,MANAGER,BUDGET_CONTACT";
	// End of Financial Access Request SQL

	// Start of DOA Financial Access Request SQL
	public static final String DOAFSEmpIDSQL = "SELECT FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING FROM FUL_ERP_ARF_PERS_VW WHERE EMPLID = '<<EMPLID>>'";
	public static final String DOAFSEmpIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING";
	// End of DOA Financial Access Request SQL

	// Start Request for Excess Unit
    public static final String getStudentDetailsForExcessUnit = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.USERID,A.PREF_EMAIL,A.CELL_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.STUDENT_ID,B.DEGREE,B.PROGRAMS,B.ACAD_CAREER,B.CHAIR_EMPLID,B.CHAIR_NAME,B.CHAIR_USERID,B.CHAIR_EMAIL,B.DEPTID,B.DEPTNAME,B.ACAD_PROG,B.INTERNATIONAL_FLAG,B.LOA_FLAG,B.TERM_DESCR,B.ADMIT_TERM FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE lower(A.USERID)=lower('<<getUser_ID>>')";
    public static final String getChairDataQuery = "select DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL from AR_EXCESS_UNITS_CHAIR_INFO where DEPTID='<<deptid>>'";
    // End Request for Excess Unit

	// Start Search Functionality for STUDENT
	public static final String facultyDetailsForSearchFunctionality = "SELECT EMPLID,FIRST_NAME,LAST_NAME,EMPUSERID,EMAILID FROM HR_Staff_Evaluation where EMPUSERID NOT LIKE '%zz-%' and LOWER(LAST_NAME) LIKE LOWER('<<LAST_NAME>>%') ORDER BY FIRST_NAME ASC";
	// End Search Functionality for STUDENT

	// Start Request for CA Form
	public static final String getStudentDetailsForCAForm = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.USERID,A.PREF_EMAIL,A.CELL_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.STUDENT_ID,B.DEGREE,B.PROGRAMS,B.ACAD_CAREER,B.CHAIR_EMPLID,B.CHAIR_NAME,B.CHAIR_USERID,B.CHAIR_EMAIL,B.DEPTID,B.DEPTNAME,B.ACAD_PROG,B.INTERNATIONAL_FLAG,B.LOA_FLAG FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE lower(A.USERID)=lower('<<getUser_ID>>')";
	public static final String getStudentCWIDDetailsForCAForm = "select * from AEM_CA_GRANT_CWID_LIST where CWID = '<<cwid>>'";
	public static final String getStudentSubmittedDetailsForCAForm = "select * from AEM_EMERGENCY_ASSISTANCE_GRANT where CWID = '<<cwid>>'";
	// End Request for CA Form

	// Start Declaration Form
	public static final String getStudentDetailsForDeclarationFormSQL = "SELECT DISTINCT STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,ACAD_PLAN_TYPE,PROGRAMS,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,TERM_DESCR,ADMIT_TERM,ADMIT_TERM_DESCR,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG from AR_CSU_STDNT_PROG_DATA WHERE STUDENT_ID='<<CWID>>'";
	public static final String getAdvisorDetailsForDeclarationFormSQL = "select * from HR_STAFF_EVALUATION WHERE EMPUSERID='<<EMPUSER_ID>>' AND DEPTID='<<DEPT_ID>>'";
	public static final String getCourseDetailsSQL = "SELECT * FROM AR_COURSE_WITHDRAWAL where LOWER(STUDENT_USERID) = LOWER('<<uid>>')";

	// End Declaration Form

	// Start of Get HR Coo details
	public static final String teleCommutingHRCooSQL = "select EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAIL,DIVISION,DIVISIONNAME from AEM_TELECOMMUTING_DIV_REVIEWER where division=('<<division>>')";
	public static final String teleCommutingHRCooLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAIL,DIVISION,DIVISIONNAME";
	// End of Get HR Coo details

	// Get Telecommuting Agreement Data
	public static final String getTeleData = "select EMPLID, ST_DT, END_DT, EMPLEMAIL, EMPLNAME,ADMINEMAIL from AEM_TELECOMMUTING_AGREEMENT where WORKFLOW_STATUS = 'COMPLETED'";
	public static final String getTeleDataLookUpFieldsOld = "ST_DT,END_DT,EMPLEMAIL,EMPLNAME,ADMINEMAIL,EMPLID";
	public static final String getResubmittedTeleData = "select ST_DT, END_DT, EMPLEMAIL, EMPLNAME,ADMINEMAIL,EMPLID from AEM_TELECOMMUTING_AGREEMENT where EMPLID = '<<cwid>>' and END_DT > '<<end_dt>>'";
	public static final String getResubmittedTeleDataLookUpFieldsOld = "ST_DT,END_DT,EMPLEMAIL,EMPLNAME,ADMINEMAIL,EMPLID";
	public static final String getUpdatedTeleData = "SELECT tt.EMPLID, tt.ST_DT, tt.END_DT, tt.EMPLEMAIL, tt.EMPLNAME, tt.ADMINEMAIL FROM AEM_TELECOMMUTING_AGREEMENT tt INNER JOIN (SELECT EMPLID, MAX(END_DT) AS MaxDateTime FROM AEM_TELECOMMUTING_AGREEMENT WHERE WORKFLOW_STATUS = 'COMPLETED' GROUP BY EMPLID) groupedtt ON tt.EMPLID = groupedtt.EMPLID AND tt.END_DT = groupedtt.MaxDateTime";

	// Get Staff Data
	public static final String getDelegateData = "SELECT distinct FIRST_NAME,LAST_NAME,EMP_USERID,EMAILID FROM HR_STAFF_EVALUATION where EMP_USERID is not null order by LAST_NAME asc";
	public static final String getDelegateDataLookUpFields = "FIRST_NAME,LAST_NAME,EMP_USERID,EMAILID";

	// Start University Key Control
	public static final String getFormDetailsForUKCForm = "select * from AEM_UNIVERSITY_KEY_CONTROL where CAMPUS_ID = '<<CAMPUS_ID>>'AND WORKFLOW_STATUS = '<<WORKFLOW_STATUS>>'";
	public static final String getFormDetailsForUKCFormFileds = "CASE_ID,CAMPUS_ID,NAME,CAMPUS_PHONE,DEPARTMENT_DIVISION,CONTACT,EXT,EMPLOYMENT_TYPE,APPLICANT_SIGN,APPLICANT_SIGN_DATE,APPROVER_NAME,APPROVER_USER_ID,APPROVER_EMAIL,APPROVER_SIGN,APPROVER_SIGN_DATE,KEY_MANAGEMENT_SIGN,KEY_MANAGEMENT_SIGN_DATE,EMPLOYEE_SIGN,STAGE_INDICATOR,LAST_STEP,LAST_STEP_ASSIGNEE,WORKFLOW_INSTANCE_ID,APPLICANT_EMAIL";
	public static final String getKeyDetailsForUKCForm = "select * from AEM_UKC_INFO where CAMPUS_ID = '<<CAMPUS_ID>>'AND CASE_ID = '<<CASE_ID>>'";
	public static final String getBuildingDetails = "SELECT * from AEM_BUILDING_LIST";
	public static final String getBuildingDetailsLookupField = "CODE,BUILDING_NUMBER,BUILDING_NAME,FACILITY_NAME";
	public static final String getAreaDetails = "SELECT * from AEM_AREA_LIST WHERE CODE='<<CODE>>'";
	public static final String getAreaDetailsLookupField = "LOCATION_ID,AREA_DESCRIPTION,AREA_TYPE,CODE";
	public static final String getAprroversList = "SELECT * FROM AEM_UKC_APPROVER_LIST";
	public static final String getApproversListLookupFields = "DIV_ID,DIV_NAME,DEPT,DEPT_NAME,USER_ID,APPROVER_NAME,EMAIL_ID";
	// End University Key Control
	// End University Key Control

	// Start Request for PET Form
	public static final String getPETChargeData = "select distinct CSU_CHARGE_PD from AR_PAYROLL_EXP_TRANSFER where EMPLID='<<empid>>' and FISCAL_YEAR='<<fiscal_year>>' and (CSU_CHG_ACCOUNT LIKE ('%601%') OR CSU_CHG_ACCOUNT LIKE ('%602%'))";
	public static final String getPETChargeDataFileds = "CSU_CHARGE_PD";

	public static final String getPETEmpData = "select NAME as EMPLOYEE_NAME,EMPLID,EMPL_RCD,POSITION_NBR,CSU_CHARGE_PD,DEPTID as HR_DEPT_ID,POSTED_TOTAL_AMT as TOTAL_AMOUNT_CHARGE,CSU_CHG_DEPTID as DEPT,CSU_CHG_FUND as FUND,CSU_CHG_CLASS as CLASS,CSU_CHG_PROGRAM as PROGRAM,CSU_CHG_ACCOUNT as ACCOUNT, PAYCHECK_NBR, COMBO_CD,BENEFITS from AR_PAYROLL_EXP_TRANSFER where EMPLID='<<empid>>' and CSU_CHARGE_PD='<<charge_id>>' and (CSU_CHG_ACCOUNT LIKE ('%601%') OR CSU_CHG_ACCOUNT LIKE ('%602%'))";
	public static final String getPETEmpDataFileds = "EMPLOYEE_NAME,EMPLID,EMPL_RCD,POSITION_NBR,CSU_CHARGE_PD,HR_DEPT_ID,TOTAL_AMOUNT_CHARGE,DEPT,FUND,CLASS,PROGRAM,ACCOUNT,PAYCHECK_NBR,COMBO_CD,BENEFITS";

	public static final String getDeptApproverData = "select * from PET_DEPT_APPROVERS where DEPTID='<<dept_id>>'";
	public static final String getDeptApproverDataFields = "DIVISON_NAME,SUB_DIV_NAME,DEPT_DESC,DEPTID,APPROVER_NAME,APPROVER_EMAILID,APPROVER_EMPLID,EFFDT,OPR_TYPE,REPORTDESCR";
	
	public static final String getDivApproverData = "SELECT DISTINCT A.APPROVER_NAME, A.APPROVER_EMAILID, A.APPROVER_EMPLID FROM PET_DIVISION_APPROVERS A JOIN (SELECT DISTINCT DIVISON_NAME FROM PET_DIVISION_APPROVERS WHERE DEPTID = '<<dept_id>>') B ON A.DIVISON_NAME = B.DIVISON_NAME ORDER BY A.APPROVER_NAME, A.APPROVER_EMAILID, A.APPROVER_EMPLID";
	public static final String getDivApproverDataFields = "APPROVER_NAME,APPROVER_EMAILID,APPROVER_EMPLID";

	public static final String basicValidationSqlQuery = "select * from AR_PAYROLL_EXP_TRANSFER where EMPLID='<<empid>>' and EMPL_RCD='<<emp_rec>>' and POSITION_NBR = '<<pos_no>>' and CSU_CHARGE_PD = '<<charge_period>>' and PAYCHECK_NBR='<<check_no>>'";
	public static final String basicValidationLookupFields = "BUSINESS_UNIT,EMPLID,NAME,EMPL_RCD,POSITION_NBR,DESCR3,JOBCODE,JOB_FUNCTION,DEPTID,DESCR,CSU_CHARGE_PD,PAYCHECK_NBR,ERNCD,POSITION_POOL_ID,DESCR1,ACCT_CD,FISCAL_YEAR,CSU_ACCT_CD_LEVEL,CSU_CHG_FUND,CSU_CHG_ACCOUNT,CSU_CHG_DEPTID,CSU_CHG_PROGRAM,CSU_CHG_CLASS,JOURNAL_ID,JOURNAL_DATE,JRNL_LN_REF,ACCOUNTING_PERIOD,LEDGER,TYPE,POSTED_TOTAL_AMT,UNION_CD";

	public static final String comboCodeValidationSqlQuery = "select * from AR_PAYROLL_EXP_TRANSFER where EMPLID='<<empid>>' and CSU_CHARGE_PD = '<<charge_period>>' and PAYCHECK_NBR='<<check_no>>' and CSU_CHG_FUND ='<<fund>>' and CSU_CHG_DEPTID ='<<dept>>'";
	public static final String comboCodeValidationLookupFields = "BUSINESS_UNIT,EMPLID,NAME,EMPL_RCD,POSITION_NBR,DESCR3,JOBCODE,JOB_FUNCTION,DEPTID,DESCR,CSU_CHARGE_PD,PAYCHECK_NBR,ERNCD,POSITION_POOL_ID,DESCR1,ACCT_CD,FISCAL_YEAR,CSU_ACCT_CD_LEVEL,CSU_CHG_FUND,CSU_CHG_ACCOUNT,CSU_CHG_DEPTID,CSU_CHG_PROGRAM,CSU_CHG_CLASS,JOURNAL_ID,JOURNAL_DATE,JRNL_LN_REF,ACCOUNTING_PERIOD,LEDGER,TYPE,POSTED_TOTAL_AMT,UNION_CD";

	public static final String getPETDivisionData = "SELECT DISTINCT DIVISON_NAME FROM PET_DEPT_APPROVERS";
	public static final String getPETDivisionDataLookupField = "DIVISON_NAME";
	
	public static final String getPETMnemonicsData = "SELECT * FROM AEM_PET_MNEMONICS";
	public static final String getPETMnemonicsLookupField = "FUND,FUND_DESCRIPTION,MNEMONICS,SHORT_DESCRIPTION";
	
	public static final String budgetInputScreenComboCodeValidationSqlQuery = "SELECT FDM_COMBO_CD FROM PS_VALID_COMBO_TBL_VW WHERE FDM_COMBO_CD = '<<combo_code>>'";
	public static final String budgetInputScreenComboCodeValidationLookupField = "FDM_COMBO_CD";
	
	public static final String getMultiDeptApproverData = "SELECT PDA.APPROVER_NAME, PDA.APPROVER_EMAILID, PDA.APPROVER_EMPLID FROM PET_DEPT_APPROVERS PDA WHERE PDA.DEPTID IN (<<dept_ids>>) GROUP BY PDA.APPROVER_NAME, PDA.APPROVER_EMAILID, PDA.APPROVER_EMPLID HAVING COUNT(*) >= <<dept_count>>";
	public static final String getMultiDeptApproverDataFields = "APPROVER_NAME,APPROVER_EMAILID,APPROVER_EMPLID";
	// End Request for PET Form

	// Start Parent Tax Filing Statement - F0CTXP
	public static final String getStudentDetailsForTaxFiling = "SELECT DISTINCT A.EMPLID, B.AID_YEAR, C.AID_YEAR AS SECOND_AID_YEAR FROM ((PS_STUDENT_AID@DBL_HFULPRD A LEFT OUTER JOIN  PS_STUDENT_AID@DBL_HFULPRD B ON  A.EMPLID = B.EMPLID AND A.INSTITUTION = B.INSTITUTION AND TO_CHAR(SYSDATE,'YYYY') = B.AID_YEAR ) LEFT OUTER JOIN  PS_STUDENT_AID@DBL_HFULPRD C ON  A.EMPLID = C.EMPLID AND A.INSTITUTION = C.INSTITUTION AND TO_CHAR(SYSDATE + 365,'YYYY') = C.AID_YEAR ) WHERE ( A.INSTITUTION = 'FLCMP' AND A.EMPLID = '<<cwid>>')";
	// End Parent Tax Filing Statement - F0CTXP

	// Start Request for Section Change

	public static final String getSectionChangeData = "select * from <<TABLE_NAME>> where LOWER(STUDENT_USERID)=LOWER('<<STUDENT_USERID>>')";
	public static final String getSectionChangeDataFields = "CWID,FNAME,LNAME,DOB,CAREER,STRM,TERM_DESCR,STDNT_ENRL_STATUS,CLASS_NBR,CRSE_ID,CRSE_NAME,UNT_TAKEN,INSTR_CWID,INSTR_NAME,EXP_GRAD_TERM,GRAD_TERM,MAJOR_CODE,MAJOR_DESCR,MAJOR_TYPE,EXPECTED_GRAD_DATE,DEGREE_TYPE,INSTR_USERID,INSTR_EMAIL,ACADEMIC_PLAN,PROGRAM_PLAN,STUDENT_EMAIL,STUDENT_PHONE,INTERNATIONAL_FLAG,STUDENT_USERID,CLASS_SECTION,NURSING_FLAG,SESSION_CODE,SESS_BEGIN_DT,SESS_END_DT,WD_START_DT,NON_MED_WD_END_DT,MED_WD_END_DT,EIP_FLAG";

	public static final String getSectionChangeAddData = "select *  from AR_CRSE_CATALOG where CRSE_NAME='<<CRSE_NAME>>' AND STRM = '<<TERM>>'";
	public static final String getSectionChangeAddDataFields = "CLASS_SECTION,INSTR_NAME,INSTR_USERID,INSTR_EMAIL,CLASS_NBR,INSTR_F_NAME,INSTR_L_NAME";
	// End Request for Section Change

	// Start Request for Time Conflict Approval
	public static final String getCousreList = "select * from AR_CRSE_CATALOG where  LOWER(CRSE_NAME) LIKE LOWER('%<<COURSE_NAME>>%') AND STRM = '<<TERM>>'";
	public static final String getCousreListLookupFields = "CRSE_ID,CLASS_NBR,CLASS_SECTION,STRM,CRSE_NAME,CRSE_OFFER_NBR,INSTR_ID,ACAD_ORG,UNITS_MINIMUM,GRADING_BASIS,SESSION_CODE,INSTR_NAME,INSTR_L_NAME,INSTR_F_NAME,INSTR_USERID,INSTR_EMAIL,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,MEETING_TIME_START,MEETING_TIME_END,MON,TUES,WED,THURS,FRI,SAT,SUN";
	public static final String getEnrolledCourseList = "select * from <<TABLE_NAME>> where LOWER(STUDENT_USERID)=LOWER('<<STUDENT_USERID>>') AND LOWER(TERM_DESCR) = LOWER('<<TERM_NAME>>')";
	public static final String getEnrolledCourseListLookupFields = "CWID,FNAME,LNAME,DOB,CAREER,STRM,TERM_DESCR,STDNT_ENRL_STATUS,CLASS_NBR,CRSE_ID,CRSE_NAME,UNT_TAKEN,INSTR_CWID,INSTR_NAME,EXP_GRAD_TERM,GRAD_TERM,MAJOR_CODE,MAJOR_DESCR,MAJOR_TYPE,EXPECTED_GRAD_DATE,DEGREE_TYPE,INSTR_USERID,INSTR_EMAIL,ACADEMIC_PLAN,PROGRAM_PLAN,STUDENT_EMAIL,STUDENT_PHONE,INTERNATIONAL_FLAG,STUDENT_USERID,CLASS_SECTION,NURSING_FLAG,SESSION_CODE,SESS_BEGIN_DT,SESS_END_DT,WD_START_DT,NON_MED_WD_END_DT,MED_WD_END_DT,EIP_FLAG";
	public static final String getEnrolledCourseDaysandTimes = "select * from AR_CRSE_CATALOG where CRSE_NAME = '<<COURSE_NAME>>' AND CLASS_NBR = '<<CLASS_NUMBER>>'";
	public static final String getEnrolledCourseDaysandTimesUpdatedQuery = "select * from AR_CRSE_CATALOG where LOWER(CRSE_NAME) = LOWER('<<COURSE_NAME>>') AND CLASS_NBR = '<<CLASS_NUMBER>>' AND STRM = '<<TERM>>'";
	public static final String getEnrolledCourseDaysandTimesLookupFields = "CRSE_ID,CLASS_NBR,CLASS_SECTION,STRM,CRSE_NAME,CRSE_OFFER_NBR,INSTR_ID,ACAD_ORG,UNITS_MINIMUM,GRADING_BASIS,SESSION_CODE,INSTR_NAME,INSTR_L_NAME,INSTR_F_NAME,INSTR_USERID,INSTR_EMAIL,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,MEETING_TIME_START,MEETING_TIME_END,MON,TUES,WED,THURS,FRI,SAT,SUN";
	// End Request for Time Conflict Approval

	// Start Unit from DeptID
	public static final String getUnitDepID = "select distinct DEPTID, CSU_UNIT from DOA_TIMEKEEPER_DATA where DEPTID='<<deptId>>'";
	public static final String getUnitDepIDField = "DEPTID,CSU_UNIT";
	// End of Unit from DeptID

	// Start of get ful_college
	public static final String getFulCollege = "select FUL_COLLEGE, FUL_COLLEGE_NAME,JOBCODE from FUL_ECM_JOB_VW where EMPLID = '<<empid>>' and DEPTID = '<<dept>>'";
	// End of get college

	// Start Scheduler For After the Fact Evaluation - AT Guidelines
		//public static final String getFacultyTimeAgreementSubmittedData = "SELECT * FROM AEM_AT_GUIDELINES WHERE WORKFLOW_STATUS = '<<WORKFLOW_STATUS>>' AND trunc(END_TERM_DATE)=trunc(sysdate) - '<<TIME_LINE>>'";
		public static final String getFacultyTimeAgreementSubmittedData = "SELECT * FROM AEM_AT_GUIDELINES WHERE WORKFLOW_STATUS = '<<WORKFLOW_STATUS>>' AND trunc(LAUNCH_DATE)=trunc(sysdate)";
		public static final String getFacultyTimeAgreementSubmittedDataLookupField = "CWID,COLLEGE,REASSIGNED_TIME_REASON,START_TERM,END_TERM,WTU_PER_TERM,PROJECT_DESCRIPTION,FIRST_NAME,LAST_NAME,INITIATOR_FLAG,DEPARMENT_ID,INITIATOR_NAME,INITIATOR_EMAIL,INITIATOR_USERID,FACULTY_NAME,FACULTY_EMAIL,FACULTY_USERID,CHAIR_NAME,CHAIR_EMAIL,CHAIR_USERID,DEAN_NAME,DEAN_EMAIL,DEAN_USERID,START_TERM_DATE,END_TERM_DATE,STAGE_INDICATOR,AFTIA_DESC_CWID,INITIATOR_SIGNATURE,INITIATOR_SIGN_DATE,INITIATOR_COMMENTS,FACULTY_SIGNATURE,FACULTY_SIGN_DATE,FACULTY_COMMENTS,CHAIR_SIGNATURE,CHAIR_SIGN_DATE,CHAIR_COMMENTS,DEAN_SIGNATURE,DEAN_SIGN_DATE,DEAN_COMMENTS,DATA,LAST_STEP,WORKFLOW_STATUS,LAST_STEP_ASSIGNEE,WORKFLOW_INSTANCE_ID,PAYLOAD_PATH,AEM_HISTORY_ID,UPDATED_DT";
		public static final String getFacultyTimeAgreementWFInstanceID = "SELECT * FROM AEM_AT_GUIDELINES WHERE CWID = '<<CWID>>' AND START_TERM = '<<START_TERM>>' AND END_TERM = '<<END_TERM>>'";
		public static final String getFacultyTimeAgreementWFInstanceIDLookupField = "CWID,START_TERM,END_TERM,START_TERM_DATE,END_TERM_DATE,STAGE_INDICATOR,FACT_EVALUATION_FLAG,WORKFLOW_STATUS,FACT_EVAL_WORKFLOW_STATUS,WORKFLOW_INSTANCE_ID,AFTER_FACT_WF_INSTANCE_ID";
		public static final String getFacultyTimeAgreementTermDeatils = "SELECT * FROM SOQ_TERM_TBL WHERE TERM_DESCR = '<<TERM_DESCR>>'";
		public static final String getFacultyTimeAgreementTermDeatilsLookupField = "TERM_CD,TERM_DESCR,DESCRSHORT,STRM,TERM_BEGIN_DT,TERM_END_DT,ACAD_YEAR";
		public static final String getFacultyTimeAgreementData = "SELECT * FROM AEM_AT_GUIDELINES_DATA WHERE LAUNCH_STATUS IS NULL";
		public static final String getFacultyTimeAgreementDataLookupField = "COLLEGE,DEPARTMENT,DEPT_ID,FULL_NAME,CWID,EMAIL,START_TERM,END_TERM,WTU,TIME_REASON,BRIEF_ASSIGNMENT,DEPT_CHAIR_NAME,DEPT_CHAIR_EMAIL,LAUNCH_STATUS,ALTERNATE_APPROVER_NAME,ALTERNATE_APPROVER_DEPT,ALTERNATE_APPROVER_EMAIL";
	    public static final String getFacultyTimeAgreementTimeReason = "SELECT * FROM AEM_ASSIGNED_TIME_REASONS WHERE CODE='<<CODE>>'";
	    public static final String getFacultyTimeAgreementTimeReasonLookupField = "CODE,CODE_DESCRIPTION";
	    public static final String getFullCollegeDetails = "SELECT * FROM FUL_ECM_JOB_VW WHERE EMPLID='<<CWID>>' AND DEPTID='<<DeptId>>'";
	    public static final String getFullCollegeDetailsLookupField = "EMPLID,EMPL_RCD,DEPTID,DEPTNAME,FUL_DIVISION,FUL_DIVISION_NAME,UNION_CD,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,JOBCODE,DESCR,MONTHLY_RT,HOURLY_RT,FTE,FULL_PART_TIME,REPORTS_TO,SUPERVISOR_ID,SUPERVISOR_NAME,STD_HOURS,GRADE,FLSA_STATUS,CSU_ANNI_YEAR,CSU_ANNI_MONTH,FUL_COLLEGE,FUL_COLLEGE_NAME,DESCR1,EMPL_STATUS,EXPECTED_END_DATE,HIRE_DT,REG_TEMP,MAX_HEAD_COUNT,CSU_PROB_CD";
	    public static final String getFacultyTimeAgreementInitiatorDetails = "SELECT * FROM HR_STAFF_EVALUATION WHERE EMPLID = '<<CWID>>'";
	    public static final String getFacultyTimeAgreementInitiatorDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	    public static final String updateFacultyTimeAgreementLaunchStatus = "UPDATE AEM_AT_GUIDELINES_DATA SET LAUNCH_STATUS = 'Y' WHERE CWID='<<CWID>>' and DEPT_ID='<<DEPT_ID>>' and LOWER(BRIEF_ASSIGNMENT) = LOWER('<<BRIEF_ASSIGNMENT>>')";
	    public static final String getAlternateApproverDetails = "SELECT * FROM HR_STAFF_EVALUATION where LOWER(EMAILID) = LOWER('<<EMAIL_ID>>')";
	    public static final String getFacultyTimeAgreemnetTimeReasonCodes = "SELECT CODE From AEM_ASSIGNED_TIME_REASONS";
	    // End Scheduler For After the Fact Evaluation - AT Guidelines

	// Start of Faculty Stipend Form data
	public static final String FacultyStipendUserID = "select distinct EMPLID,FIELD_VALUE,DEPTID,COLLEGE,NAME,CSU_SCO_AGENCY,CSU_UNIT,DELETE_FLG,USERID,EMAIL_ADDR from DOA_TIMEKEEPER_DATA where DEPTID='<<deptId>>' and CSU_UNIT = '<<unit>>' and FIELD_VALUE = '<<fieldVal>>' and DELETE_FLG = 'N'";
	// End of Faculty Stipend Form Data

	//
	public static final String HRCovidEmpIDSQL = "SELECT FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING FROM FUL_ERP_ARF_PERS_VW WHERE USERID = '<<USERID>>'";
	public static final String HRCovidEmpIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING";
	public static final String getCountriesListSQL = "Select * from WORLD_COUNTRIES order by COUNTRY asc";
	public static final String getCountriesListFields = "ID,COUNTRY";
	public static final String HRCovidEmpIDInfoSQL = "select * from SD_ASI_ASC_STAFF_VW@dbl_aem_fulpdw where lower(email) like lower('%<<USERID>>%')";
	public static final String HRCovidEmpIDInfoFields = "CWID,POSITION,DIVISION,DEPT_ID,DEPT_NAME,FIRST_NAME,LAST_NAME,EMAIL,TITLE,ADMINISTRATOR,IMPORTED_DATE";
	//
	
	// Start Financial Aid Filenet
	public static final String getStudentDOB="SELECT DOB FROM AR_FN_STUDENT WHERE SID = '<<CWID>>'";
	// End Financial Aid Filenet
	
	// Start SAP Appeal Filenet
	public static final String getCurrentMajor = "select * from AR_CSU_STDNT_PROG_DATA where STUDENT_ID='<<STUDENT_ID>>' and ACAD_PLAN_TYPE='MAJ'";
	public static final String getCurrentMajorLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,EXP_GRAD_TERM,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,EXP_TERM_DESCR,ADMIT_TERM_DESCR";
	public static final String getEOPData = "select * from FA_FR_AD_EOP_APSTT where EMPLID='<<EMPLID>>'";
	public static final String getEOPDataLookupFields = "EMPLID,ACAD_CAREER,STDNT_CAR_NBR,ADM_APPL_NBR,EFFDT,EFFSEQ,CSU_ADM_APPL_NBR,OPRID,PROG_ACTION,PROG_REASON,COORDINATOR_ID,COORDINATOR_USERID,COORDINATOR_FIRSTNAME,COORDINATOR_LASTNAME,COORDINATOR_EMAILID,COORDINATOR_DEPTTITLE,COORDINATOR_STATUS,LASTUPDDTTM,FR_AD_EOP_EL_PA_ED,FR_AD_EOP_EL_INC,FR_AD_EOP_EL_HS_LI,FR_AD_EOP_RF_IN_AC,FR_AD_EOP_RF_LD_CM,FR_AD_EOP_RF_LK_FM,FR_AD_EOP_RF_SI_PA,FR_AD_EOP_RF_GE_TR,FR_AD_EOP_RF_LR_DS,FR_AD_EOP_EV_RES,FR_AD_EOP_EV_GRADE,FR_AD_EOP_EV_OTHER,FR_AD_EOP_RDN_OINC,FR_AD_EOP_RDN_NCAR,FR_AD_EOP_RDN_GRDS,FR_AD_EOP_RDN_NDIS,FR_AD_EOP_RDN_ACPR,FR_AD_EOP_RDN_DOTH,FR_AD_EOP_RC_ADMIT";
	// End SAP Appeal Filenet
	
	// Start Drone Flight
	public static final String getDroneFlightEmpData = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID where A.EMP_USERID = '<<USER_ID>>'";
	public static final String getDroneFlightEmpDataLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME";
	public static final String getDroneFlightStuData = "select * from AR_PERSON_INFO where LOWER(USERID)=LOWER('<<USER_ID>>')";
	public static final String getDroneFlightStuDataLookupFields = "EMPLID,NAME,LAST_NAME,FIRST_NAME,USERID,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY";
	// End Drone Flight
	
	// Start TDA Exception Form
	public static final String getStudentDetails = "select * from AR_CSU_STDNT_PROG_DATA where STUDENT_ID='<<STUDENT_ID>>'and ACAD_CAREER in ('EXED','UGRD')";
	public static final String getStudentDetailsLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,EXP_GRAD_TERM,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,EXP_TERM_DESCR,ADMIT_TERM_DESCR";
	public static final String getGradStudentDetails = "select * from AR_CSU_STDNT_PROG_DATA where STUDENT_ID='<<STUDENT_ID>>'and ACAD_CAREER='PBAC'";
	public static final String getGradStudentDetailsLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,EXP_GRAD_TERM,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,EXP_TERM_DESCR,ADMIT_TERM_DESCR";
	public static final String getGradStudentConcentrationUpdate = "select distinct PROGRAMS,ACAD_PLAN from AR_CSU_STDNT_PROG where <<sql>>";
    public static final String getGradStudentConcentrationLookupFields = "PROGRAMS,ACAD_PLAN";
	// End TDA Exception Form
	
	// Start of Get Emp ACT DIR data
	public static final String getEmplActDirData = "select * from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<CWID>>'";
	public static final String getEmplActDirDataLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID,DEPTTITLE,STATUS";
	public static final String getEmplActDirDataWithUid = "select * from EMPL_ACT_DIR_DATA where USERID = '<<USERID>>'";
	public static final String getEmplActDirDataLookupFieldsWithUid = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID,DEPTTITLE,STATUS";
	
	// End of Get Emp ACT DIR data
	
	// Start Titan Card
	public static final String getTitanCardStudentDetails = "select * from AR_PERSON_INFO where LOWER(USERID)=LOWER('<<USERID>>')";
    public static final String getTitanCardStudentDetailsLookupFields = "EMPLID,NAME,LAST_NAME,FIRST_NAME,USERID,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY,PREFERRED_FNAME,PREFERRED_LNAME";
    public static final String getTitanCardStaffDetails = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,A.STF_PREFERRED_FNAME,A.STF_PREFERRED_LNAME,B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, B.HOME_PHONE,B.WORK_PHONE from FUL_ECM_PERS_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID where A.EMP_USERID = '<<USER_ID>>'";
   	public static final String getTitanCardStaffDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,ADDRESS1,CITY,STATE,POSTAL,HOME_PHONE,WORK_PHONE,STF_PREFERRED_FNAME,STF_PREFERRED_LNAME";
	public static final String getTitanCardStudentDetailsWithCwid = "select * from AR_PERSON_INFO where EMPLID='<<EMPLID>>'";
	public static final String getTitanCardStaffDetailsWithCwid = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,A.STF_PREFERRED_FNAME,A.STF_PREFERRED_LNAME,B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, B.HOME_PHONE,B.WORK_PHONE from FUL_ECM_PERS_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID where A.EMPLID = '<<EMPLID>>'";
    // End Titan Card
	
	// Start Petition for Postgraduate Credit
	public static final String getStudentsDetails = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.PREF_EMAIL,A.HOME_PHONE,A.CELL_PHONE,A.WORK_OTR_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.COUNTRY,A.POSTAL,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME,B.ACAD_CAREER,B.EIP_FLG, B.DEGREE, B.PROGRAMS, B.CONCENTRATION, B.DEAN_EMPLID, B.DEAN_NAME, B.DEAN_USERID, B.DEAN_EMAIL, B.ACAD_PLAN_TYPE, B.DEPTID FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE LOWER(A.USERID)=LOWER('<<getUser_ID>>')";
	public static final String getStudentsDetailsLookupFields ="EMPLID,NAME,FIRST_NAME,LAST_NAME,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,CITY,STATE,COUNTRY,POSTAL,FUL_COLLEGE,FUL_COLLEGE_NAME,ACAD_CAREER,EIP_FLG,DEGREE,PROGRAMS,CONCENTRATION,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,ACAD_PLAN_TYPE,DEPTID";
	public static final String getMajorDeanDetails = "select * from AR_CRSE_CATALOG where CLASS_NBR='<<CLASS_NUMBER>>' and STRM='<<STRM>>'";
	public static final String getMajorDeanDetailsLookupFields ="DEAN_EMPLID,DEAN_USERID,DEAN_NAME,DEAN_EMAIL";	
	// End Petition for Postgraduate Credit
	
    // Pilot Summer 9/80 Work Schedule Start
    public static final String getPilotSummerEmployeeData = "Select distinct A.EMPLID, A.CSU_CHRS_ID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID, A.DEPTNAME, A.GRADE, A.EMPL_RCD,A.REPORTS_TO,A.SUPERVISORNAME, A.SUPERVISORTITLE, A.MANAGER_EMPLID, A.MANAGER_DEPTID, A.MANAGER_UNION_CD, A.MANAGER_POSITION_NBR, A.MANAGER_REPORTS_TO, A.MANAGER_EMP_USERID, A.MANAGE_EMP_NAME, A.MANAGER_TITLE, A.ADMIN_EMPLID, A.ADMIN_DEPTID, A.ADMIN_UNION_CD, A.ADMIN_POSITION_NBR, A.ADMIN_REPORTS_TO, A.ADMIN_EMP_USERID, A.ADMIN_EMP_NAME, A.ADMIN_TITLE, A.DIVSION, A.DIVISION_NAME, A.EMP_USERID, A.EMAILID, A.EMP_NAME, A.FLSA_STATUS, B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR, B.CSU_SCO_AGENCY, B.CSU_UNIT, B.FUL_COLLEGE, B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID where A.EMPLID = '<<EMPLID>>'";
    public static final String getPilotSummerEmployeeDataCHRSID = "Select distinct A.EMPLID, A.CSU_CHRS_ID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID, A.DEPTNAME, A.GRADE, A.EMPL_RCD,A.REPORTS_TO,A.SUPERVISORNAME, A.SUPERVISORTITLE, A.MANAGER_EMPLID, A.MANAGER_DEPTID, A.MANAGER_UNION_CD, A.MANAGER_POSITION_NBR, A.MANAGER_REPORTS_TO, A.MANAGER_EMP_USERID, A.MANAGE_EMP_NAME, A.MANAGER_TITLE, A.ADMIN_EMPLID, A.ADMIN_DEPTID, A.ADMIN_UNION_CD, A.ADMIN_POSITION_NBR, A.ADMIN_REPORTS_TO, A.ADMIN_EMP_USERID, A.ADMIN_EMP_NAME, A.ADMIN_TITLE, A.DIVSION, A.DIVISION_NAME, A.EMP_USERID, A.EMAILID, A.EMP_NAME, A.FLSA_STATUS, B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR, B.CSU_SCO_AGENCY, B.CSU_UNIT, B.FUL_COLLEGE, B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.DEPTID = B.DEPTID where A.CSU_CHRS_ID = '<<EMPLID>>'";
    public static final String getPilotSummerEmployeeDataLookupFields = "EMPLID,CSU_CHRS_ID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME,FLSA_STATUS,EMPL_RCD,REPORTS_TO,SUPERVISORNAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,MANAGER_TITLE,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,ADMIN_TITLE";
    public static final String getPilotSummerEmployeeDataCHRSIDUpdated = "Select distinct A.EMPLID, A.CSU_CHRS_ID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID, A.DEPTNAME, A.GRADE, A.EMPL_RCD,A.REPORTS_TO,A.SUPERVISORNAME, A.SUPERVISORTITLE, A.MANAGER_EMPLID, A.MANAGER_DEPTID, A.MANAGER_UNION_CD, A.MANAGER_POSITION_NBR, A.MANAGER_REPORTS_TO, A.MANAGER_EMP_USERID, A.MANAGE_EMP_NAME, A.MANAGER_TITLE, A.ADMIN_EMPLID, A.ADMIN_DEPTID, A.ADMIN_UNION_CD, A.ADMIN_POSITION_NBR, A.ADMIN_REPORTS_TO, A.ADMIN_EMP_USERID, A.ADMIN_EMP_NAME, A.ADMIN_TITLE, A.DIVSION, A.DIVISION_NAME, A.EMP_USERID, A.EMAILID, A.EMP_NAME, A.FLSA_STATUS, B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR, B.CSU_SCO_AGENCY, B.CSU_UNIT, B.FUL_COLLEGE, B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.DEPTID = B.DEPTID and A.EMPL_RCD = B.EMPL_RCD where A.CSU_CHRS_ID = '<<EMPLID>>'";
    public static final String getPilotSummerEmployeeDataUpdatedLookupFields = "EMPLID,CSU_CHRS_ID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME,FLSA_STATUS,EMPL_RCD,REPORTS_TO,SUPERVISORNAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,MANAGER_TITLE,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,ADMIN_TITLE";
    // Pilot Summer 9/80 Work Schedule End
    
    // Start - cal state fullerton department of theatre and dance //
    public static final String getCsfDepartmentData = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.PREF_EMAIL,A.HOME_PHONE,A.CELL_PHONE,A.WORK_OTR_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.COUNTRY,A.POSTAL,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME,B.ACAD_CAREER,B.EIP_FLG, B.DEGREE, B.PROGRAMS, B.CONCENTRATION, B.DEAN_EMPLID, B.DEAN_NAME, B.DEAN_USERID, B.DEAN_EMAIL, B.ACAD_PLAN_TYPE, B.DEPTID FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE LOWER(A.USERID)=LOWER('<<getUser_ID>>')";
    public static final String getCsfDepartmentLookupFields ="EMPLID,NAME,FIRST_NAME,LAST_NAME,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,CITY,STATE,COUNTRY,POSTAL,FUL_COLLEGE,FUL_COLLEGE_NAME,ACAD_CAREER,EIP_FLG,DEGREE,PROGRAMS,CONCENTRATION,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,ACAD_PLAN_TYPE,DEPTID";
    public static final String getCsfDepartmentChairData = "select * from AR_MAJOR_CHAIR_INFO where FUL_COLLEGE = '<<FUL_COLLEGE>>' and DEPTID = '<<DEPTID>>'";
    public static final String getCsfDepartmentChairLookupFields="DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL";
    // End - cal state fullerton department of theatre and dance //
    
   // start - Faculty/Staff Travel Proposal Form //
    public static final String getTravelFormStaffDetails = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID where A.EMP_USERID = '<<USER_ID>>'";
	public static final String getTravelFormStaffDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME";
	// End - Faculty/Staff Travel Proposal Form //
	
	// Start Petition for Retroactive Withdrawal
    public static final String getRetroactiveWithdrawalStudentDetails = "SELECT DISTINCT A.STUDENT_ID,A.STUDENT_EMAIL,A.STUDENT_PHONE,A.STUDENT_USERID,A.STUDENT_FNAME,A.STUDENT_LNAME,A.ACAD_CAREER,A.ACAD_PROG,A.ACAD_PLAN,A.PLAN_SEQUENCE,A.ACAD_PLAN_TYPE,A.DIPLOMA_DESCR,A.CONCENTRATION,A.TRNSCR_DESCR,A.PROGRAMS,A.PLAN_RANK,A.DEPTID,A.DEPTNAME,A.FUL_COLLEGE,A.FUL_COLLEGE_NAME,A.CHAIR_EMPLID,A.CHAIR_NAME,A.CHAIR_USERID,A.CHAIR_EMAIL,A.DEAN_EMPLID,A.DEAN_NAME,A.DEAN_USERID,A.DEAN_EMAIL,A.EFFDT,A.EFFSEQ,A.REQ_TERM,A.DESCR,A.DESCRSHORT,A.DEGREE,A.ACAD_ORG,A.TERM_DESCR,A.ACAD_YEAR,A.ADMIT_TERM,A.ADMIT_TERM_DESCR,A.EXP_GRAD_TERM,A.EXP_TERM_DESCR,A.EIP_FLG,A.OU_FLAG,A.INTERNATIONAL_FLAG,A.LOA_FLAG,A.DQ_FLAG,A.CSU_EO_WDRW_USED,A.CSU_EO_WDRW_AVAIL,B.HOME_PHONE,B.CELL_PHONE,B.WORK_OTR_PHONE,B.ADDRESS1,B.ADDRESS2,B.ADDRESS3,B.ADDRESS4,B.CITY,B.STATE,B.POSTAL,B.COUNTRY from AR_PERSON_INFO B INNER JOIN AR_CSU_STDNT_PROG_DATA A On A.STUDENT_ID = B.EMPLID where LOWER(A.STUDENT_USERID) = LOWER('<<USERID>>')";
    public static final String getRetroactiveWithdrawalStudentDetailsLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,ADMIT_TERM,ADMIT_TERM_DESCR,EXP_GRAD_TERM,EXP_TERM_DESCR,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,DQ_FLAG,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY,CSU_EO_WDRW_USED,CSU_EO_WDRW_AVAIL";
    
    public static final String getRetroactiveWithdrawalAssociateDeanDetails = "SELECT DISTINCT EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,COLLEGE from AR_COURSE_ASSOC_DEAN_LKP WHERE FUL_COLLEGE = '<<FUL_COLLEGE>>'";
    public static final String getRetroactiveWithdrawalAssociateDeanDetailsLookupFields = "EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,COLLEGE";
    
    public static final String getRetroactiveWithdrawalNonMedStudentSql = "select DISTINCT A.CWID,A.STUDENT_USERID,A.CRSE_NAME,A.CLASS_NBR,A.CURRENT_GRADE,A.DEAN_NAME,A.DEAN_EMAIL,A.DEAN_USERID,A.STRM from AR_GRADE_PETITION_FORM_B A join AR_CRSE_CATALOG B on A.CLASS_NBR=B.CLASS_NBR and A.STRM = B.STRM where LOWER(student_userid) = LOWER('<<userId>>') AND A.STRM = '<<TERM>>'"; 
    public static final String getRetroactiveWithdrawalMedStudentSql = "select DISTINCT A.CWID,A.STUDENT_USERID,A.CRSE_NAME,A.CLASS_NBR,A.CURRENT_GRADE,A.DEAN_NAME,A.DEAN_EMAIL,A.DEAN_USERID,A.STRM from AR_GRADE_PETITION_FORM_B A join AR_CRSE_CATALOG B on A.CLASS_NBR=B.CLASS_NBR and A.STRM = B.STRM where LOWER(student_userid) = LOWER('<<userId>>') AND A.STRM = '<<TERM>>'";
   // End Petition for Retroactive Withdrawal
    
    // Start Posthumous Degree Approval
    public static final String getPosthumousDegreeApprovalStudentDetails = "SELECT * FROM AR_CSU_STDNT_PROG_DATA WHERE STUDENT_ID = '<<CWID>>'";
    public static final String getPosthumousDegreeApprovalStudentDetailsLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,ADMIT_TERM,ADMIT_TERM_DESCR,EXP_GRAD_TERM,EXP_TERM_DESCR,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,DQ_FLAG";
    public static final String getPosthumousDegreeApprovalInitiatorDetails = "SELECT EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,EMAILID FROM HR_STAFF_EVALUATION WHERE LOWER(EMP_USERID) = LOWER('<<USERID>>')";
    public static final String getPosthumousDegreeApprovalInitiatorDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,EMAILID";
 /*   public static final String getPosthumousDegreeApprovalChairDetails = "SELECT CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL FROM AR_MAJOR_CHAIR_INFO WHERE FUL_COLLEGE = '<<FULL_COLLEGE>>' AND DEPTID = '<<DEPT_ID>>'";
    public static final String getPosthumousDegreeApprovalChairDetailsLookupFields = "CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL"; */
    public static final String getPosthumousDegreeApprovalChairDetails = "SELECT DISTINCT * FROM AR_MAJOR_CHAIR_INFO";
    public static final String getPosthumousDegreeApprovalChairDetailsLookupFields = "DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL"; 
    public static final String getPosthumousDegreeApprovalDeanDetails = "SELECT DISTINCT EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,COLLEGE from AR_COURSE_ASSOC_DEAN_LKP WHERE FUL_COLLEGE = '<<FULL_COLLEGE>>'";
    public static final String getPosthumousDegreeApprovalDeanDetailsLookupFields = "EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,COLLEGE"; 
    public static final String getPosthumousDegreeApprovalCollegeDeanDetails = "SELECT DISTINCT COLLEGE,EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,FUL_COLLEGE FROM AR_HRDI_DEAN_LKP WHERE FUL_COLLEGE = '<<FULL_COLLEGE>>'";
    public static final String getPosthumousDegreeApprovalCollegeDeanDetailsLookupFields = "COLLEGE,EMPLID,EMPNAME,EMP_USERID,EMP_EMAIL,FUL_COLLEGE"; 
    // End Posthumous Degree Approval
    
    // Start of Eval Data Save
    public static final String getEvalData = "select * from AEM_EVALUATION_DATA where SUBMISSION_ID = '<<SUBMISSION_ID>>'";
    public static final String getEvalDataLookupFields = "CWID,EVAL_TYPE,EVAL_NAME,DATA,SUBMISSION_ID,STATUS,FORM_PATH,UPDATED_DT";
    public static final String setEvalData = "UPDATE AEM_EVALUATION_DATA SET DATA = '<<DATA>>', EVAL_TYPE = '<<EVAL_TYPE>>' WHERE SUBMISSION_ID = '<<SUBMISSION_ID>>'";
    public static final String getEvalDataUsingCwid = "select * from AEM_EVALUATION_DATA where CWID = '<<CWID>>' AND FORM_PATH = '<<FORM_PATH>>' AND EVAL_TYPE = '<<EVAL_TYPE>>'";
    // End of Eval Data Save
    
    // Start of Faculty Assigned Time Agreement
    public static final String getCollegeWiseFacultyAssignedTimeAgreementData = "SELECT COLLEGE, DEPT_ID, FULL_NAME, CWID, EMAIL, START_TERM, WTU, TIME_REASON, BRIEF_ASSIGNMENT, DEPT_CHAIR_NAME, DEPT_CHAIR_EMAIL FROM AEM_AT_GUIDELINES_DATA WHERE START_TERM = '<<TERM>>' AND DEPT_ID IN (<<DEPT_ID>>)";
    public static final String getCollegeWiseFacultyAssignedTimeAgreementDataLookupFields = "COLLEGE,DEPT_ID,FULL_NAME,CWID,EMAIL,START_TERM,WTU,TIME_REASON,BRIEF_ASSIGNMENT,DEPT_CHAIR_NAME,DEPT_CHAIR_EMAIL";
    public static final String getCollegeandDepartmentFacultyAssignedTimeAgreementData = "SELECT DISTINCT DEPTID, DEPTNAME, FUL_COLLEGE, FUL_COLLEGE_NAME FROM AR_DEPT_CHAIR_INFO";
    public static final String getCollegeandDepartmentFacultyAssignedTimeAgreementDataLookupFields = "DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME";
    public static final String getAfterTheFactLaunchingData = "SELECT * FROM AEM_AT_GUIDELINES_LAUNCH_DATA WHERE COLLEGE = '<<COLLEGE>>' AND TERM = '<<TERM>>' AND LAUNCH_STATUS IS NULL";
    public static final String getAfterTheFactLaunchingDataLookupFields = "COLLEGE,DEPT_ID,FULL_NAME,CWID,EMAIL,TERM,WTU,TIME_REASON,BRIEF_ASSIGNMENT,DEPT_CHAIR_NAME,DEPT_CHAIR_EMAIL,LAUNCH_STATUS,UNIQUE_ID";
    public static final String getATData = "SELECT DEPTID, FIRST_NAME, LAST_NAME, EMPLID, EMAIL_ADDR, STRM, WEEK_WORKLOAD_HRS, ASSIGN_TYPE, DESCR FROM HR_FACULTY_ASSIGNED_TIME WHERE STRM = '<<TERM>>' AND DEPTID IN (<<DEPT_ID>>)";
    public static final String getATDataLookupFields = "DEPTID,FIRST_NAME,LAST_NAME,EMPLID,EMAIL_ADDR,STRM,WEEK_WORKLOAD_HRS,ASSIGN_TYPE,DESCR";
    public static final String getAtChairDetails = "SELECT DEPTID, DEPTNAME, FUL_COLLEGE, FUL_COLLEGE_NAME, CHAIR_NAME, CHAIR_USERID, CHAIR_EMAIL FROM AR_DEPT_CHAIR_INFO WHERE DEPTID = '<<DEPT_ID>>'";
    public static final String getAtChairDetailsLookupFields = "DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL";
    public static final String getAfterTheFactDeanDetails = "SELECT DISTINCT A.DEPTNAME,A.FUL_COLLEGE,B.EMPNAME,B.EMP_USERID,B.EMP_EMAIL FROM AR_HRDI_DEAN_LKP B INNER JOIN AR_DEPT_CHAIR_INFO A On A.FUL_COLLEGE = B.FUL_COLLEGE where A.DEPTID = '<<DEPT_ID>>'";
    public static final String getAfterTheFactDeanDetailsLookupFields = "DEPTNAME,FUL_COLLEGE,EMPNAME,EMP_USERID,EMP_EMAIL";
    public static final String updateAfterTheFactTableLaunchStatus = "UPDATE AEM_AT_GUIDELINES_LAUNCH_DATA SET LAUNCH_STATUS = 'Y' WHERE CWID='<<CWID>>' and DEPT_ID='<<DEPT_ID>>' and DBMS_LOB.substr(LOWER(BRIEF_ASSIGNMENT), 4000) = LOWER('<<BRIEF_ASSIGNMENT>>')";
    // End of Faculty Assigned Time Agreement
	
  //Volunteer Form//
  	public static final String getVolunteerUserDetails = "SELECT A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID,B.DIVSION FROM EMPL_ACT_DIR_DATA A INNER JOIN HR_Staff_Evaluation B On A.EMPLOYEEID=B.EMPLID WHERE LOWER(LASTNAME) LIKE LOWER('<<LASTNAME>>%') AND DIVSION='<<DIVSION>>' group by A.EMPLOYEEID,A.USERID,A.FIRSTNAME,A.LASTNAME,A.EMAILID,B.DIVSION order by A.FIRSTNAME asc";
  	public static final String getVolunteerUserDetailsLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID,DIVSION";
  	public static final String getVolunteerDetails = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.MIDDLE_NAME,B.ADDRESS1,B.CITY,B.STATE,B.POSTAL,B.HOME_PHONE,B.WORK_PHONE,A.EMERGENCY_CONTACT_NAME,A.EMERGENCY_PHONE from FUL_ECM_PERS_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID where A.EMP_USERID = '<<USER_ID>>'";
  	public static final String getVolunteerDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,MIDDLE_NAME,ADDRESS1,CITY,STATE,POSTAL,HOME_PHONE,WORK_PHONE,EMERGENCY_CONTACT_NAME,EMERGENCY_PHONE";
  	//public static final String getVolunteerUserDetails = "SELECT * FROM HR_STAFF_EVALUATION WHERE LOWER(EMPUSERID) = LOWER('<<get_user_id>>') AND DIVSION='<<DIVSION>>'";
  	//public static final String getVolunteerUserDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
  	
    // Start of Position Action Form
    public static final String getAllFundingDeptIds = "select distinct deptid from btr_dept_approvers order by deptid asc";
    public static final String getAllFundingDeptIdsLookupFields = "DEPTID";
    public static final String getAllFundCodes = "select distinct fund_code from BTR_COMBO_DATA_TBL order by fund_code asc";
    public static final String getAllFundCodesLookupFields = "fund_code";
    public static final String getAllProgramCodes = "SELECT distinct program FROM BTR_PROGRAM_TBL order by PROGRAM asc";
    public static final String getAllProgramCodesLookupFields = "program";
    public static final String getAllClassCodes = "SELECT distinct CLASS FROM BTR_CLASS_CF_TBL order by CLASS asc";
    public static final String getAllClassCodesLookupFields = "CLASS";
    public static final String getALLProjects = "SELECT distinct PROJECT FROM BTR_PROJECT order by PROJECT asc";
    public static final String getALLProjectsLookupFields = "PROJECT";
    public static final String getALLAccounts = "SELECT distinct ACCOUNT FROM BTR_GL_ACCOUNT_TBL order by ACCOUNT asc";
    public static final String getALLAccountsLookupFields = "ACCOUNT";
    public static final String getPAFRequestorData = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID and A.DEPTID = B.DEPTID where A.EMP_USERID = '<<USER_ID>>'";
	public static final String getPAFRequestorDataLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME";
	public static final String getPAFRequestorPositionNumberData = "SELECT DISTINCT A.EMPLID,A.FIRST_NAME,A.LAST_NAME,A.DEPTID,A.DEPTNAME,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.MANAGER_EMPLID,A.MANAGER_POSITION_NBR,A.MANAGE_EMP_NAME,A.MANAGER_EMP_USERID,A.MANAGER_TITLE,A.ADMIN_EMPLID,A.ADMIN_POSITION_NBR,A.ADMIN_EMP_NAME,A.ADMIN_EMP_USERID,A.ADMIN_TITLE,B.CSU_UNIT,B.JOBCODE,B.DESCR,B.REG_TEMP,B.FULL_PART_TIME,B.GRADE,B.FTE,B.FLSA_STATUS,B.POSITION_NBR,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.POSITION_NBR = B.POSITION_NBR where A.POSITION_NBR = '<<POSITION_NUMBER>>'";
	public static final String getPAFRequestorPositionNumberDataLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,MANAGER_EMPLID,MANAGER_POSITION_NBR,MANAGE_EMP_NAME,MANAGER_EMP_USERID,MANAGER_TITLE,ADMIN_EMPLID,ADMIN_POSITION_NBR,ADMIN_EMP_NAME,ADMIN_EMP_USERID,ADMIN_TITLE,CSU_UNIT,JOBCODE,DESCR,REG_TEMP,FULL_PART_TIME,GRADE,FTE,FLSA_STATUS,POSITION_NBR,FUL_COLLEGE,FUL_COLLEGE_NAME";
	public static final String getPAFSupervisorData = "SELECT DISTINCT FIRST_NAME, LAST_NAME, EMPLID, POSITION_NBR, EMP_USERID, EMAILID FROM HR_STAFF_EVALUATION WHERE UNION_CD IN ('M80', 'M98') AND LOWER(LAST_NAME) LIKE LOWER('%<<LAST_NAME>>%')";
	public static final String getPAFSupervisorDataTwo = "SELECT DISTINCT FIRST_NAME, LAST_NAME, EMPLID, POSITION_NBR, EMP_USERID, EMAILID FROM HR_STAFF_EVALUATION WHERE UNION_CD IN ('M80', 'M98')";
	public static final String getPAFSupervisorDataLookupFields = "FIRST_NAME,LAST_NAME,EMPLID,POSITION_NBR,EMP_USERID,EMAILID";
	public static final String getPAFRequestorPositionNumberDataBackup = "SELECT DISTINCT A.DEPTID,A.POS_DESCR,A.SUPERVISORNAME,A.MANAGER_POSITION_NBR,A.ADMIN_EMP_NAME,A.ADMIN_POSITION_NBR,A.REPORTS_TO,B.GRADE,B.FTE,B.JOBCODE,RANK() OVER (ORDER BY B.EFFDT DESC) AS EFFDTA,B.EFFDT,B.REG_TEMP,B.FULL_PART_TIME,B.FLSA_STATUS,B.CSU_UNIT FROM PS_POSITION_DATA B INNER JOIN HR_POSITION_DATA A On A.POSITION_NBR = B.POSITION_NBR where A.POSITION_NBR = '<<POSITION_NUMBER>>' ORDER BY EFFDTA";
	public static final String getPAFRequestorPositionNumberDataBackupLookupFields = "DEPTID,POS_DESCR,SUPERVISORNAME,MANAGER_POSITION_NBR,ADMIN_EMP_NAME,ADMIN_POSITION_NBR,REPORTS_TO,GRADE,FTE,JOBCODE,EFFDT,REG_TEMP,FULL_PART_TIME,FLSA_STATUS,EFFDTA,CSU_UNIT";
	public static final String getPAFSupervisorDataPositionNumber = "SELECT * FROM HR_STAFF_EVALUATION WHERE POSITION_NBR = '<<POSITION_NUMBER>>'";
	public static final String getPAFSupervisorDataPositionNumberLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	public static final String getPAFCurrentFundingData = "SELECT * FROM PS_DEPT_BUDGET_ERN@DBL_DMS WHERE FISCAL_YEAR = (SELECT MAX(FISCAL_YEAR) FROM PS_DEPT_BUDGET_ERN@DBL_DMS) AND POSITION_NBR = '<<POSITION_NUMBER>>'";
	public static final String getPAFCurrentFundingDataLookupFields = "SETID,DEPTID,FISCAL_YEAR,POSITION_POOL_ID,SETID_JOBCODE,JOBCODE,POSITION_NBR,EMPLID,EMPL_RCD,EFFDT,EFFSEQ,ERNCD,BUDGET_SEQ,ACCT_CD,GL_PAY_TYPE,BUDGET_AMT,HP_EXCESS,DIST_PCT,PERCENT_EFFORT,FUNDING_END_DT,HP_USED_DISTRIBUTN,HP_FRINGE_GROUP,HP_REDIRECT_ACCT";
	public static final String getPAFPneumonicData = "SELECT * FROM AEM_PET_MNEMONICS";
	public static final String getPAFPneumonicDataLookupFields = "FUND,FUND_DESCRIPTION,MNEMONICS,SHORT_DESCRIPTION";
	public static final String getPAFCurrentFundingDataNew = "SELECT * FROM HR_POS_ACT_FORM WHERE POSITION_NBR = '<<POSITION_NUMBER>>' AND LOWER(NAME) = LOWER('<<NAME>>')";
	public static final String getPAFCurrentFundingDataNewLookupFields = "FUL_DIVISION_NAME,FUL_COLLEGE_NAME,DEPTNAME,DEPTID,EFF_STATUS,POSITION_NBR,EFFDT,JOBCODE,CSU_WORKING_TITLE,GRADE,REG_TEMP,FULL_PART_TIME,CSU_UNIT,EMPLID,NAME,REPORTS_TO,REPORTS_TO_NAME,REPORT_DOTTED_LINE,REPORT_DOTTED_LINE_NAME,MAX_HEAD_COUNT,POSITION_POOL_ID,ACCT_CD,DEPTID_CF,FUND_CODE,PROGRAM_CODE,CLASS_FLD,ACCOUNT,DIST_PCT,FTE,FLSA_STATUS";
	public static final String getPAFPositionNumberDataUpdated = "SELECT DISTINCT NAME,DEPTID,CSU_UNIT,JOBCODE,CSU_WORKING_TITLE,REG_TEMP,FULL_PART_TIME,GRADE,FTE,FLSA_STATUS,REPORTS_TO,REPORTS_TO_NAME,REPORT_DOTTED_LINE,REPORT_DOTTED_LINE_NAME,CSU_MPP_JOB_FAMILY,CSU_MPP_JOB_FUNC,CSU_MPP_RPT_CAT,KEY_POSITION FROM HR_POS_ACT_FORM WHERE POSITION_NBR = '<<POSITION_NUMBER>>'";
	public static final String getPAFPositionNumberDataUpdatedLookupFields = "NAME,DEPTID,CSU_UNIT,JOBCODE,CSU_WORKING_TITLE,REG_TEMP,FULL_PART_TIME,GRADE,FTE,FLSA_STATUS,REPORTS_TO,REPORTS_TO_NAME,REPORT_DOTTED_LINE,REPORT_DOTTED_LINE_NAME,CSU_MPP_JOB_FAMILY,CSU_MPP_JOB_FUNC,CSU_MPP_RPT_CAT,KEY_POSITION";
	public static final String getPAFCurrentFundingDataNewBackup = "SELECT * FROM HR_POS_ACT_FORM WHERE POSITION_NBR = '<<POSITION_NUMBER>>'";
    // End of Position of Action Form
	
	// Start of Schedule Change
    public static final String getSectionDetails = "select * from AR_CRSE_CATALOG where CLASS_NBR = '<<CLASS_NBR>>' and STRM = '<<STRM>>'";
    public static final String getSectionDetailsLookupFields = "CRSE_ID,CLASS_NBR,CLASS_SECTION,STRM,CRSE_NAME,CRSE_OFFER_NBR,INSTR_ID,ACAD_ORG,UNITS_MINIMUM,GRADING_BASIS,SESSION_CODE,INSTR_NAME,INSTR_L_NAME,INSTR_F_NAME,INSTR_USERID,INSTR_EMAIL,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,MEETING_TIME_START,MEETING_TIME_END,MON,TUES,WED,THURS,FRI,SAT,SUN";
    public static final String getChairDetails = "select distinct CHAIR_USERID,CHAIR_NAME,CHAIR_EMAIL from AR_DEPT_CHAIR_INFO";
    public static final String getChairDetailsLookupFields = "CHAIR_USERID,CHAIR_NAME,CHAIR_EMAIL";
    // End of Schedule Change
	
    // Start of Property Management
	public static final String getDeptHead = "SELECT distinct EMP_USERID, EMAILID, EMP_NAME FROM HR_STAFF_EVALUATION WHERE UNION_CD in ('M80','M98')";
	public static final String getDeptHeadLookupFields = "EMP_USERID,EMAILID,EMP_NAME";
	// End of Property Management
	
	// Start of Appeal of a Declined Fee Waiver Request
    public static final String getFeeWaiverHolderDetails = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, B.HOME_PHONE,B.WORK_PHONE from FUL_ECM_PERS_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID where A.EMP_USERID = '<<USER_ID>>'";
    public static final String getFeeWaiverHolderDetailsUpdated = "SELECT A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.ADDRESS1, B.CITY, B.STATE, B.POSTAL, B.HOME_PHONE,B.WORK_PHONE FROM FUL_ECM_PERS_VW B INNER JOIN hr_staff_evaluation A ON A.EMPLID = B.EMPLID WHERE LOWER(A.EMP_USERID) = LOWER('<<USER_ID>>')";
   	public static final String getFeeWaiverHolderLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,ADDRESS1,CITY,STATE,POSTAL,HOME_PHONE,WORK_PHONE";
	// End of Appeal of a Declined Fee Waiver Request
   	
 // Start of Hourly INT CHRS ID
 	public static final String CHRSHourlyINTUserLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,B.CSU_CHRS_IS,  A.MIDDLE_NAME, A.NATIONAL_ID AS LAST4SSN, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode, substr(A.WORK_PHONE, 7, 10) as Extenstion,(select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<getUser_ID>>') as EMP_EMAIL_ID , B.UNION_CD from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
 	public static final String CHRSHourlyINTUserLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,Jobcode,Extenstion,EMP_EMAIL_ID,UNION_CD,CSU_CHRS_ID";
  
 	public static final String CHRSHourlyINTEmpLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,B.CSU_CHRS_IS,  A.MIDDLE_NAME, A.NATIONAL_ID AS LAST4SSN, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode, (select USERID from FUL_EMP_CWID_NT_NAME_NEW where CSU_CHRS_ID = '<<CSU_CHRS_ID>>') as EMP_USERID,(select EMAILID from EMPL_ACT_DIR_DATA where CSU_CHRS_ID = '<<CSU_CHRS_ID>>') as EMP_EMAIL_ID, substr(A.WORK_PHONE, 7, 10) as Extenstion, B.UNION_CD from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = Replace('<<CSU_CHRS_ID>>', '-','') and A.CSU_CHRS_ID = B.CSU_CHRS_IS and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
 	public static final String CHRSHourlyINTEmpLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,Jobcode,EMP_USERID,EMP_EMAIL_ID,Extenstion,UNION_CD,CSU_CHRS_ID";
  
 	public static final String CHRSHourlyINTManagerLookupSQL = "SELECT D.SUPERVISOR_NAME AS SupervisorName, D.WORKING_TITLE AS SupervisorTitle , (SELECT USERID AS MANAGERUSERID FROM FUL_EMP_CWID_NT_NAME_NEW WHERE CSU_CHRS_ID IN (SELECT CSU_CHRS_IS FROM FUL_ECM_JOB_VW J WHERE POSITION_NBR IN (SELECT REPORTS_TO FROM FUL_ECM_JOB_VW K WHERE CSU_CHRS_IS='<<CSU_CHRS_ID>>' and K.UNION_CD = '<<UNION_CD>>' and K.DEPTID = '<<DEPTID>>'))) as  MANAGER_USERID FROM FUL_ECM_JOB_VW B LEFT JOIN FUL_ECM_PERS_VW A ON A.CSU_CHRS_ID = B.CSU_CHRS_IS LEFT JOIN FUL_EMP_CWID_NT_NAME_NEW C ON C.CSU_CHRS_ID = B.CSU_CHRS_IS LEFT JOIN FUL_ECM_REPORTS_VW D ON D.POSITION_NBR = B.REPORTS_TO WHERE C.CSU_CHRS_ID = '<<CSU_CHRS_ID>>' and B.UNION_CD = '<<UNION_CD>>' and B.DEPTID = '<<DEPTID>>'";
 	public static final String CHRSHourlyINTManagerLookUpFields = "SupervisorName,SupervisorTitle,MANAGER_USERID";
 	// End of Hourly INT CHRS ID
 	
 	// Start of Spl Consultant Timesheet CHRS ID
 	public static final String CHRSsplConsultantUserLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,  A.MIDDLE_NAME, A.NATIONAL_ID, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode, substr(A.WORK_PHONE, 7, 10) as Extenstion, A.EMPLID,(select EMAILID from EMPL_ACT_DIR_DATA where USERID = '<<getUser_ID>>') as EMP_EMAIL_ID , B.UNION_CD,B.CSU_SCO_AGENCY, B.FUL_DIVISION from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
 	public static final String CHRSsplConsultantUserLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,CSU_CHRS_ID,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,NATIONAL_ID,EMPL_RCD,CSU_UNIT,Jobcode,Extenstion,EMPLID,EMP_EMAIL_ID,UNION_CD,CSU_SCO_AGENCY,FUL_DIVISION";
  
 	public static final String CHRSsplConsultantEmpLookupSQL = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.EXPECTED_END_DATE, B.DEPTID,  A.MIDDLE_NAME, A.NATIONAL_ID, B.EMPL_RCD, B.CSU_UNIT, B.Jobcode,(select USERID from FUL_EMP_CWID_NT_NAME_NEW where CSU_CHRS_ID = '<<CSU_CHRS_ID>>') as EMP_USERID,(select EMAILID from EMPL_ACT_DIR_DATA where CSU_CHRS_ID = '<<CSU_CHRS_ID>>') as EMP_EMAIL_ID, substr(A.WORK_PHONE, 7, 10) as Extenstion, B.UNION_CD,B.CSU_SCO_AGENCY, B.FUL_DIVISION from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = Replace('<<CSU_CHRS_ID>>', '-','') and A.CSU_CHRS_ID = B.CSU_CHRS_IS and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
 	public static final String CHRSsplConsultantEmpLookUpFields = "EMPLID,FIRST_NAME,LAST_NAME,CSU_CHRS_ID,DEPTNAME,EXPECTED_END_DATE,DEPTID,MIDDLE_NAME,NATIONAL_ID,EMPL_RCD,CSU_UNIT,Jobcode,EMP_USERID,EMP_EMAIL_ID,Extenstion,UNION_CD,CSU_SCO_AGENCY,FUL_DIVISION";
 	// End of Spl consultant Timesheet CHRS ID
 	
 	// Start of Catastrophic Leave Donation
     public static final String catastrophicLeaveDonationDetails = "Select A.FIRST_NAME, A.LAST_NAME,A.EMPLID,A.CSU_CHRS_ID, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.UNION_CD, B.CSU_CHRS_IS  From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C Where  A.CSU_CHRS_ID = B.CSU_CHRS_IS AND A.CSU_CHRS_ID = C.CSU_CHRS_ID AND C.userid = ('<<getUser_ID>>')";
     public static final String catastrophicDonationFieldsDetails = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,EMPL_RCD,UNION_CD,CSU_CHRS_IS";
     // End of Catastrophic Leave Donation
     
  // Start of get logged in employee details using CHRSID
 	public static final String CHRSgetLoggedInUserDetailsWithCHRSID = "SELECT * FROM HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>'";
 	public static final String CHRSgetLoggedInUserDetailsWithCHRSIDLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,CSU_CHRS_ID";
 	//End of get logged in employee details CHRS ID
 	
     // Start of Student Timesheet CHRS ID
 	public static final String CHRSIDstudTimesheetUserIDSQL = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.DESCR, B.JOBCODE, A.MIDDLE_NAME, 'XXXXX' || SUBSTR(A.NATIONAL_ID,-4) AS LAST4SSN, B.EMPL_RCD,B.CSU_UNIT, B.DEPTID, B.HOURLY_RT, A.EMPLID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = ('<<User_ID>>') and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
 	public static final String CHRSIDstudTimesheetUserIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DESCR,JOBCODE,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,DEPTID,HOURLY_RT,EMPLID,CSU_CHRS_ID";
 	
 	public static final String studTimesheetCHRSIDSQL = "Select A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.DESCR, B.JOBCODE, A.MIDDLE_NAME, 'XXXXX' || SUBSTR(A.NATIONAL_ID,-4) AS LAST4SSN,B.EMPL_RCD, B.CSU_UNIT, B.DEPTID, B.HOURLY_RT from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = Replace('<<CSU_CHRS_ID>>', '-','') and A.CSU_CHRS_ID = B.CSU_CHRS_IS and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<User_ID>>')";
 	public static final String studTimesheetCHRSIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DESCR,JOBCODE,MIDDLE_NAME,LAST4SSN,EMPL_RCD,CSU_UNIT,DEPTID,HOURLY_RT,EMPLID,CSU_CHRS_ID";
 	// End of Student Timesheet CHRS ID
 		
 	// Start of Get SubstituteFaculty Emp Data SQL CHRS ID
 	public static final String getSubstituteFacultyCHRSIDLookupData = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,A.CSU_CHRS_ID, B.JOBCODE, B.DESCR, B.UNION_CD, B.FULL_PART_TIME, B.POSITION_NBR,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.DEPTID = B.DEPTID where A.CSU_CHRS_ID = '<<CSU_CHRS_ID>>'";
 	public static final String getSubstituteFacultyCHRSIDEmpDataLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,JOBCODE,DESCR,UNION_CD,FULL_PART_TIME,POSITION_NBR,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME,CSU_CHRS_ID";
 	// End of Get SubstituteFaculty Emp Data SQL CHRS ID  
 	
 	// Start of Pre retirement timebase SQL CHRS ID
 	public static final String CHRSIDPreRetirementTBUserIDSQL = "Select distinct A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME, A.CSU_CHRS_ID, B.UNION_CD, B.FULL_PART_TIME,B.CSU_SCO_AGENCY,B.CSU_UNIT,B.FUL_COLLEGE,B.FUL_COLLEGE_NAME from FUL_ECM_JOB_VW B INNER JOIN hr_staff_evaluation A On A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.DEPTID = B.DEPTID WHERE A.CSU_CHRS_ID='<<CSU_CHRS_ID>>'";
 	public static final String CHRSIDPreRetirementTBLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,UNION_CD,FULL_PART_TIME,CSU_SCO_AGENCY,CSU_UNIT,FUL_COLLEGE,FUL_COLLEGE_NAME,CSU_CHRS_ID";
 	// End of Pre retirement timebase SQL CHRS ID
 	
      // CHRS ID Start of FAER
   	 public static final String FAERCwidChrsDetails = "select * from hr_staff_evaluation where CSU_CHRS_ID='<<CSU_CHRS_ID>>'";  //chrs id
      public static final String FAERCwidChrsFields = "EMPLID,FIRST_NAME,LAST_NAME,EMP_USERID,EMAILID,EMP_NAME,CSU_CHRS_ID";
      // CHRS ID End of FAER
      
   // Start of Dock Notice CHRS ID
      public static final String dockNoticeUserIdSqlCHRSID = "Select A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, A.CSU_CHRS_ID, B.EMPL_RCD, B.DEPTID, B.DEPTNAME,B.UNION_CD,B.CSU_UNIT, B.FUL_DIVISION,('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCO_Position_Num, A.NATIONAL_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = ('<<getUser_ID>>')";
      public static final String dockNoticeFieldsCHRSID = "EMPLID,FIRST_NAME,LAST_NAME,MIDDLE_NAME,EMPL_RCD,DEPTID,DEPTNAME,SCO_POSITION_NUM,NATIONAL_ID,UNION_CD,CSU_UNIT,FUL_DIVISION,CSU_CHRS_ID";
      public static final String dockNoticeCHRSIdSqlNew = "Select A.EMPLID,A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, A.CSU_CHRS_ID, B.EMPL_RCD, B.DEPTID, B.DEPTNAME, B.UNION_CD,B.CSU_UNIT,B.FUL_DIVISION,('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCO_Position_Num, A.NATIONAL_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.CSU_CHRS_ID = '<<CSU_CHRS_ID>>' and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
      // End of Dock Notice CHRS ID   
      	
      // Start of Get Email Lookup
      public static final String getEmailAddressChrsIdLookup = "select EMAILID from EMPL_ACT_DIR_DATA where EMPLOYEEID = '<<Emp_ID>>'";
      // End of Get Email Lookup
      
   // Start STD 682 Overtime Distributed CHRS ID
      public static final String std682OvertimeCHRSIDEmpLookUpSQL = "Select A.First_Name, A.Last_Name, A.EMPLID, B.UNION_CD, B.CSU_UNIT, ('242-' || B.CSU_UNIT || '-' || B.JOBCODE || '-' || '00' || (B.EMPL_RCD+1)) as SCOPositionNum, A.Middle_Name, B.EMPL_RCD, B.DEPTID, B.FUL_DIVISION, B.CSU_SCO_AGENCY, B.CSU_UNIT from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = Replace('<<Chrs_ID>>','-','') and A.CSU_CHRS_ID = B.CSU_CHRS_IS and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>')";
      public static final String std682OvertimeCHRSIDUserIDLookUpSQL = "Select A.First_Name, A.Last_Name, B.UNION_CD, B.CSU_UNIT, ('242-' || B.CSU_UNIT || '-' || B.JOBCODE || '-' || '00' || (B.EMPL_RCD+1)) as SCOPositionNum, A.Middle_Name, B.EMPL_RCD, B.DEPTID, B.FUL_DIVISION, B.CSU_SCO_AGENCY, B.CSU_UNIT, A.EMPLID, A.CSU_CHRS_ID from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
  	// End STD 682 Overtime Distributed CHRS ID
      
   // Start FAR CHRS ID
      public static final String getLoggedInUserDetailsWithCHRSID = "SELECT * FROM HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<chrsId>>'";
      public static final String getLoggedInUserDetailsWithCHRSIDLookupFields = "EMPLID,CSU_CHRS_ID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
   // End FAR CHRS ID
      
   // Start of New Position Staff CHRSID
  	public static final String CHRSIDnewPositionStaffUserIDSQL = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, A.EMPLID, B.EMPL_RCD, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B , FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
  	public static final String CHRSIDnewPositionStaffUserLookUpFields = "FIRST_NAME,LAST_NAME,CSU_CHRS_ID,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,GRADE,SCONum,FullTime,PartTime,EMPLID,EMPL_RCD,SupervisorName,USERID";
  	public static final String CHRSIDnewPositionStaffEmplSQL = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, A.EMPLID, B.EMPL_RCD, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B , FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = '<<CSU_CHRS_ID>>' and A.CSU_CHRS_ID = C.CSU_CHRS_ID and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
  	public static final String CHRSIDnewPositionStaffEmpLookUpFields = "FIRST_NAME,LAST_NAME,CSU_CHRS_ID,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,UNION_CD,GRADE,FullTime,PartTime,SupervisorName,SCONum,USERID,EMPLID";	
	// End of New Position Staff CHRSID
  	
    // Start of New Position MPP CHRSID
  	public static final String CHRSIDnewPositionManagerUserIDSQL = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, A.EMPLID, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName, (CASE B.UNION_CD when 'M80' then B.DESCR1 else '-'end) as description from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B ,FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
	public static final String CHRSIDnewPositionManagerUserLookUpFields = "FIRST_NAME,LAST_NAME,CSU_CHRS_ID,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,GRADE,SCONum,FullTime,PartTime,EMPLID,SupervisorName,description,USERID";
	public static final String CHRSIDnewPositionManagerEmplSQL = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD,  B.GRADE, C.USERID, ('242 -' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - '  || '00' || (B.EMPL_RCD+1) ) as SCONum, (case B.FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case B.FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, A.EMPLID, (Select concat(supervisor_name,concat(' - ', WORKING_TITLE)) from ful_ecm_reports_vw where b.reports_to = position_nbr) as SupervisorName, (CASE B.UNION_CD when 'M80' then B.DESCR1  else '-'end) as DESCR1 from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B ,FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = '<<CSU_CHRS_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.CSU_CHRS_ID = C.CSU_CHRS_ID";
	public static final String CHRSIDnewPositionManagerEmpLookUpFields = "FIRST_NAME,LAST_NAME,CSU_CHRS_ID,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,GRADE,SCONum,FullTime,PartTime,SupervisorName,DESCR1,USERID,EMPLID";
    // End of New Position MPP CHRSID
	
	// Start of 10_12_11_12 PayPlan CHRS ID
    public static final String PayPlanChrsIdUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, substr(A.WORK_PHONE,7,10) as Extension, B.DEPTNAME, B.DEPTID,  B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD, ('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' ||  '00' || (EMPL_RCD+1) ) as SCOPosNum, B.STD_HOURS, B.POSITION_NBR, B.GRADE, B.EMPLID  from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
	public static final String PayPlanChrsIdLookUpFields = "FIRST_NAME,LAST_NAME,CSU_CHRS_ID,Extension,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,SCOPosNum,STD_HOURS,POSITION_NBR,GRADE,EMPLID";
	// End of 10_12_11_12 PayPlan CHRS ID
	 
	// Start of Timebase CHRS ID
	public static final String timebaseChrsIdUserSQL = "Select A.FIRST_NAME, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.UNION_CD,('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' || to_char(EMPL_RCD+1, '000') ) as SCOPosNum, B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, A.EMPLID, B.DESCR,b.ful_division,b.ful_division_name from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = C.CSU_CHRS_ID and C.userid = '<<getUser_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
	public static final String timebaseChrsIdFields = "FIRST_NAME,LAST_NAME,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,EMPLID,DESCR,UNION_CD,SCOPosNum,ful_division,ful_division_name,CSU_CHRS_ID";
	public static final String timebaseChrsIdSQL = "Select A.FIRST_NAME,A.EMPLID, A.LAST_NAME, A.CSU_CHRS_ID, B.DEPTNAME, B.UNION_CD,('242' || ' - ' || B.CSU_UNIT || ' - ' || B.JOBCODE || ' - ' || to_char(EMPL_RCD+1, '000') ) as SCOPosNum,B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, B.DESCR, b.ful_division,b.ful_division_name from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C where A.CSU_CHRS_ID = '<<Chrs_ID>>' and A.CSU_CHRS_ID = C.CSU_CHRS_ID and deptid in (select deptid from cmsrda.cms_hr_dept_sec where userid = '<<getUser_ID>>') and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
    // End of Timebase CHRS ID
	 
	// Start of Personal File Access Request Form CHRS ID
	public static final String personalFileAccessRequestChrsUserLookUp = "select a.first_name, a.last_name, a.csu_chrs_id, substr(a.middle_name,1,1) as Middle_Initial, a.emplid, a.work_phone, b.deptid, b.deptname from ful_ecm_pers_vw a, ful_ecm_job_vw b, ful_emp_cwid_nt_name_new c where a.csu_chrs_id = b.csu_chrs_is  and a.csu_chrs_id = c.csu_chrs_id and c.userid = '<<getUser_ID>>'";
	public static final String personalFileAccessRequestchrsIdLookUp = "select a.first_name, a.last_name, a.csu_chrs_id, substr(a.middle_name,1,1) as Middle_Initial, a.emplid, a.work_phone, b.deptid, b.deptname from ful_ecm_pers_vw a, ful_ecm_job_vw b, ful_emp_cwid_nt_name_new c where a.csu_chrs_id = b.csu_chrs_is  and a.csu_chrs_id = c.csu_chrs_id and a.csu_chrs_id = '<<chrsId>>'";
	public static final String perFileAccessSeperatedchrsIdLookUp = "select  distinct a.first_name, a.last_name, a.csu_chrs_id, substr(a.middle_name,1,1) as Middle_Initial, a.emplid, a.work_phone from ful_ecm_pers_vw a, ful_ecm_job_vw b, ful_emp_cwid_nt_name_new c where a.csu_chrs_id = c.csu_chrs_id and a.csu_chrs_id = '<<chrsId>>'";
	public static final String personalFileAccessRequestchrsIdLookUpFields = "first_name,last_name,Middle_Initial,emplid,work_phone,deptid,deptname,csu_chrs_id";
	public static final String perFileAccessSeperatedchrsIdFields = "first_name,last_name,Middle_Initial,emplid,work_phone,csu_chrs_id";
	// Start of Personal File Access Request Form CHRS ID
		
	// Start of Career Development Plan CHRSID
	public static final String careerDevelopmentCHRSIDPlanUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME, A.EMPLID, A.CSU_CHRS_ID, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.UNION_CD, B.DESCR  From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C Where A.CSU_CHRS_ID = B.CSU_CHRS_IS AND A.CSU_CHRS_ID = C.CSU_CHRS_ID AND C.userid = '<<getUser_ID>>'";
	public static final String careerDevelopmentCHRSIDPlanFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,EMPL_RCD,UNION_CD,DESCR,CSU_CHRS_ID";
	// End of Career Development Plan CHRSID
					
	// Start of Application Dependent EMP CHRSID
	public static final String dependentFeeWaiverchrsidEmpLookUp = "Select A.FIRST_NAME, A.LAST_NAME, A.EMPLID, B.DEPTNAME, B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03' then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D'or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T'  then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.CSU_CHRS_ID = Replace('<<Chrs_ID>>','-','') and B.UNION_CD not in('R13','R14','E99')";
	public static final String dependentFeeWaiverchrsidEmpLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";
	// End of Application Dependent EMP CHRSID
				
	// Start of Application Dependent USER CHRSID
	public static final String DependentFeeWaiverchrsidUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME,A.EMPLID,A.CSU_CHRS_ID,A.ADDRESS1,A.CITY,A.STATE, B.DEPTNAME,  B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03'  then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D' or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T' then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C Where  A.CSU_CHRS_ID = B.CSU_CHRS_IS AND A.CSU_CHRS_ID = C.CSU_CHRS_ID AND C.userid = '<<getUser_ID>>' and B.UNION_CD not in('R13','R14','E99')";
	public static final String DependentFeeWaiverchrsidUserLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,CSU_CHRS_ID,ADDRESS1,CITY,STATE,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";
	// End of Application Dependent USER CHRSID		
	
	// Start of Fee-Waiver-Employee EMP CHRSID
	public static final String feeWaiverchrsidEmpLookUp = "Select A.FIRST_NAME, A.LAST_NAME, A.EMPLID, B.DEPTNAME,  B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03' then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D' or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T'  then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B where A.CSU_CHRS_ID = B.CSU_CHRS_IS and A.CSU_CHRS_ID = Replace('<<Chrs_ID>>','-','')";
	public static final String feeWaiverchrsidEmpLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";
	// End of Fee-Waiver Employee CHRSID

	// Start of Fee-Waiver-Employee User CHRSID
	public static final String feeWaiverchrsidUserLookUp = "Select A.FIRST_NAME, A.LAST_NAME,A.EMPLID,A.CSU_CHRS_ID,A.ADDRESS1,A.CITY,A.STATE, B.DEPTNAME,  B.DEPTID, B.UNION_CD, substr(A.WORK_PHONE,7,10) as Extension, B.JOBCODE, (case FULL_PART_TIME when 'F' then '1' else '0' end) as FullTime, (case FULL_PART_TIME when 'P' then '1' else '0' end) as PartTime, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD = 'R03'  then '1' else '0' end) as Tenure, (case when (CSU_PROB_CD = 'I' or CSU_PROB_CD = 'J') and UNION_CD <> 'R03' then '1' else '0' end) as Perm, (case when CSU_PROB_CD ='A' or CSU_PROB_CD = 'B' or  CSU_PROB_CD = 'C' or CSU_PROB_CD = 'D' or CSU_PROB_CD = 'E' then '1' else '0' end) as Prob, (case when CSU_PROB_CD =  'N' or CSU_PROB_CD = 'P' or CSU_PROB_CD = 'Q' or CSU_PROB_CD = 'T' then '1' else '0' end) as Other, (case Reg_Temp when 'T' then '1' else '0' end) as Temp, (case Reg_Temp when 'T' then replace(expected_end_date, '/','') end ) as EndDate, (case when Empl_Status = 'L' or Empl_Status = 'P' then '1' else '0' end) as LeaveYes, (case when Empl_Status = 'L' or Empl_Status = 'P' then '0' else '1' end) as LeaveNo From  FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_EMP_CWID_NT_NAME_NEW C Where  A.CSU_CHRS_ID = B.CSU_CHRS_IS AND A.CSU_CHRS_ID = C.CSU_CHRS_ID AND C.userid = '<<getUser_ID>>' and B.UNION_CD not in('R13','R14','E99')";
	public static final String feeWaiverchrsidUserLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,CSU_CHRS_ID,ADDRESS1,CITY,STATE,DEPTNAME,DEPTID,UNION_CD,Extension,JOBCODE,FullTime,PartTime,Tenure,Perm,Prob,Other,Temp,EndDate,LeaveYes,LeaveNo";
	// End of Fee-Waiver-Employee User CHRSID

	// Start of Short App Emp-chrsid Fee Waiver
	public static final String shortAppchrsidEmpUserFeeWaiver = "SELECT  A.FIRST_NAME, A.MIDDLE_NAME, A.LAST_NAME, A.NATIONAL_ID,B.UNION_CD, B.EMPL_RCD, B.DEPTID, B.DEPTNAME, A.ADDRESS1, A.ADDRESS2, A.CITY, A.STATE, A.POSTAL, (case SEX when 'M' then '1' else '0' end) as Male, (case SEX when 'F' then '1' else '0' end) as Female,A.EMPLID, A.CSU_CHRS_ID, A.BIRTHDATE, A.HOME_PHONE, C.USERID FROM FUL_ECM_PERS_VW A, FUL_EMP_CWID_NT_NAME_NEW C, ful_ecm_job_vw b WHERE C.USERID = '<<getUser_ID>>' and A.CSU_CHRS_ID = C.CSU_CHRS_ID and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
	public static final String shortAppchrsidEmpUserFeeWaiverFields = "FIRST_NAME,MIDDLE_NAME,LAST_NAME,NATIONAL_ID,ADDRESS1,ADDRESS2,CITY,STATE,POSTAL,MALE,FEMALE,EMPLID,CSU_CHRS_ID,BIRTHDATE,HOME_PHONE,USERID,UNION_CD,EMPL_RCD,DEPTID,DEPTNAME";
	// End of Short App Emp-chrsid Fee Waiver

	// Start of Short App Emplook-chrsid Fee Waiver
	public static final String shortAppchrsidEmpFeeWaiver = "SELECT  A.FIRST_NAME, A.MIDDLE_NAME, A.LAST_NAME, A.NATIONAL_ID,B.UNION_CD, B.EMPL_RCD, B.DEPTID, B.DEPTNAME, A.ADDRESS1, A.ADDRESS2, A.CITY, A.STATE, A.POSTAL, (case SEX when 'M' then '1' else '0' end) as Male, (case SEX when 'F' then '1' else '0' end) as Female,A.EMPLID, A.CSU_CHRS_ID, A.BIRTHDATE, A.HOME_PHONE, C.USERID FROM FUL_ECM_PERS_VW A, FUL_EMP_CWID_NT_NAME_NEW C, ful_ecm_job_vw b WHERE C.CSU_CHRS_ID = '<<Chrs_ID>>' and A.CSU_CHRS_ID = C.CSU_CHRS_ID and A.CSU_CHRS_ID = B.CSU_CHRS_IS";
	public static final String shortAppchrsidEmpFeeWaiverFields = "FIRST_NAME,MIDDLE_NAME,LAST_NAME,NATIONAL_ID,ADDRESS1,ADDRESS2,CITY,STATE,POSTAL,MALE,FEMALE,EMPLID,CSU_CHRS_ID,BIRTHDATE,HOME_PHONE,USERID,UNION_CD,EMPL_RCD,DEPTID,DEPTNAME";
	// End of Short App Emplook-chrsid Fee Waiver
	
    // Evaluation CHRS ID Start
	public static final String userIDCHRSIDSQL = "select FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,UNION_CD,SupervisorName,EMPLID,SupervisorTitle,CSU_CHRS_ID from HR_STAFF_EVALUATION where EMP_USERID = '<<getUser_ID>>' AND UNION_CD not in ('R03','R11','E99','M80','M98')";
	public static final String lookupFieldsUserIdCHRSIDLookup = "FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,UNION_CD,EMPLID,CSU_CHRS_ID";
	
	public static final String staffManagerAdminDetailsCHRSIDSQL = "SELECT MANAGER_EMP_USERID, ADMIN_EMP_USERID, ADMIN_EMP_NAME, MANAGER_DEPTID FROM HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND DEPTID = '<<DEPT_ID>>' AND UNION_CD='<<UNION_CD>>'";
	public static final String staffManagerAdminDetailsCHRSIDLookUpFields = "MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME,MANAGER_DEPTID";
	
	//MPP Employee Self Evaluation start
	public static final String MPPUserIDSQLCHRSID = "select FIRST_NAME,LAST_NAME,UNION_CD,DEPTID,DEPTNAME,EMPL_RCD,DESCR,GRADE,EMPLID,SupervisorName,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION where EMP_USERID = '<<getUser_ID>>' and UNION_CD not in ('R03','R11','E99')";
	public static final String MPPSelfEvalUserIdFieldsCHRSID = "FIRST_NAME,LAST_NAME,UNION_CD,DEPTID,DEPTNAME,EMPL_RCD,DESCR,GRADE,EMPLID,SUPERVISORNAME,EMAILID,CSU_CHRS_ID";
	//End
	
	//MPP Manager Data start
	public static final String mppManagerSQLCHRSID = "SELECT MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME FROM HR_STAFF_EVALUATION WHERE CSU_CHRS_ID='<<CSU_CHRS_ID>>' and DEPTID='<<DEPTID>>' AND UNION_CD in ('M80','M98')";
	public static final String mppManagerLookupFieldsCHRSID = "MANAGER_EMP_USERID,ADMIN_EMP_USERID,ADMIN_EMP_NAME";
	//end
	
	//To fetch chrsid from Copy Data 
	public static final String MPPcopyCHRSIDdata = "SELECT EMPLOYEEID FROM EMPL_ACT_DIR_DATA WHERE CSU_CHRS_ID ='<<chrs_id>>'";
	public static final String MPPcopyCHRSIDdataLookupfield = "EMPLOYEEID";
	public static final String MPPcopyBackupCHRSIDdata = "SELECT EMPLID FROM HR_STAFF_EVALUATION WHERE CSU_CHRS_ID ='<<chrs_id>>'";
	public static final String MPPcopyBackupCHRSIDdataLookupfield = "EMPLID";
	//end
	
	//Mpp Performance evaluation start
	public static final String MPPGetEavlCHRSIDDataSQL = "SELECT EMPID,CHRS_ID,LASTNAME,FIRSTNAME,CLASSIFICATION,EMPRCD,CBID,DEPTNAME,RANGE,DEPTID,REVIEWPERIODFROM,REVIEWPERIODTO,EVALUATORNAME,EVALUATIONTYPE,ATHLETICEMP,SECTIONBCOMMENTS,ATHLETICEMP_IMP_TO_POS,ATHLETICEMPRATING,SUPPORTSTMT1,SUPPORTSTMT2,SUPPORTSTMT3,SUPPORTSTMT4,DIVISION,DIVISION_NAME,CONCEPTUALSKILLS,INTERPERSONALSKILLS,TECHNICALSKILLS,OTHERS,OTHER_RATING,OVERALLRATING,SECTIONBCOMMENTS FROM AEM_MPP_PERFORMANCE_EVAL EVAL1 WHERE EMPID = ('<<EMPID>>') AND REVIEWPERIODFROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIODTO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIODFROM desc";
	public static final String MPPGetEavlDataCHRSIDLookupFields = "EMPID,CHRS_ID,LASTNAME,FIRSTNAME,CLASSIFICATION,EMPRCD,CBID,DEPTNAME,RANGE,DEPTID,REVIEWPERIODFROM,REVIEWPERIODTO,EVALUATORNAME,EVALUATIONTYPE,ATHLETICEMP,SECTIONBCOMMENTS,ATHLETICEMP_IMP_TO_POS,ATHLETICEMPRATING,SUPPORTSTMT1,SUPPORTSTMT2,SUPPORTSTMT3,SUPPORTSTMT4,DIVISION,DIVISION_NAME,CONCEPTUALSKILLS,INTERPERSONALSKILLS,TECHNICALSKILLS,OTHERS,OTHER_RATING,OVERALLRATING,SECTIONBCOMMENTS";
	public static final String mppEmpIDCHRSIDSQL = "Select FIRST_NAME, LAST_NAME, EMPLID, CSU_CHRS_ID, DEPTID, DEPTNAME, EMPL_RCD, DESCR, UNION_CD, GRADE, Supervisorname,DIVSION,DIVISION_NAME,SupervisorTitle, EMPUSERID,EMAILID FROM HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL AND UNION_CD in ('M80','M98')";
	public static final String mppCHRSIDLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,CSU_CHRS_ID,EMPL_RCD,DESCR,UNION_CD,GRADE,SupervisorName,DIVSION,DIVISION_NAME,SupervisorTitle,EMPUSERID,EMAILID";
	//end
	
	// Start of Evaluation Unit1 CHRSID Emp Lookup
	public static final String speUnit1CHRSIDCopySQL = "select STAFFPOSDESC,EMPLID,CHRS_ID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY_OF_MED_PRACTICE,Q_MED_PRACTICE_RATING_1,Q_MED_PRACTICE_RATING_2,Q_MED_PRACTICE_RATING_3,Q_MED_PRACTICE_RATING_4,Q_MED_PRACTICE_RATING_5,QUALITY_OF_CONTRIBUTION,Q_CNTRIBUTION_RATING_1,Q_CNTRIBUTION_RATING_2,Q_CNTRIBUTION_RATING_3,Q_CNTRIBUTION_RATING_4,Q_CNTRIBUTION_RATING_5,QUALITY_OF_EDU_ACTIVITY,Q_EDU_RATING_1,Q_EDU_RATING_2,Q_EDU_RATING_3,Q_EDU_RATING_4,Q_EDU_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from aem_staff_perf_eval_unit1 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String speUnit1CHRSIDCopyLookupFields = "STAFFPOSDESC,EMPLID,CHRS_ID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY_OF_MED_PRACTICE,Q_MED_PRACTICE_RATING_1,Q_MED_PRACTICE_RATING_2,Q_MED_PRACTICE_RATING_3,Q_MED_PRACTICE_RATING_4,Q_MED_PRACTICE_RATING_5,QUALITY_OF_CONTRIBUTION,Q_CNTRIBUTION_RATING_1,Q_CNTRIBUTION_RATING_2,Q_CNTRIBUTION_RATING_3,Q_CNTRIBUTION_RATING_4,Q_CNTRIBUTION_RATING_5,QUALITY_OF_EDU_ACTIVITY,Q_EDU_RATING_1,Q_EDU_RATING_2,Q_EDU_RATING_3,Q_EDU_RATING_4,Q_EDU_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String speUnit1EmplIDCHRSSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and	UNION_CD='R01'";
	public static final String speUnit1EmpCHRSLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID";
	// End of Evaluation Unit1 CHRSID Emp Lookup
	
	// Start of get logged in employee details
	public static final String getLoggedInUserCHRSIDDetails = "SELECT * FROM HR_STAFF_EVALUATION WHERE LOWER(EMPUSERID) = LOWER('<<get_user_id>>')";
	public static final String getLoggedInUserCHRSIDDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,UNION_CD,POSITION_NBR,GRADE,DESCR,EMPL_RCD,REPORTS_TO,EMP_USERID,EMPUSERID,EMAILID,EMP_NAME,SUPERVISORNAME,DIVSION,DIVISION_NAME,SUPERVISORTITLE,MANAGER_EMPLID,MANAGER_DEPTID,MANAGER_UNION_CD,MANAGER_POSITION_NBR,MANAGER_REPORTS_TO,MANAGER_EMP_USERID,MANAGE_EMP_NAME,ADMIN_EMPLID,ADMIN_DEPTID,ADMIN_UNION_CD,ADMIN_POSITION_NBR,ADMIN_REPORTS_TO,ADMIN_EMP_USERID,ADMIN_EMP_NAME,CSU_CHRS_ID";
	// End of get logged in employee details 
	
	// Start of Evaluation Unit6 Emp Lookup
	public static final String speUnit6CHRSIDCopySQL = "select STAFFPOSDESC,EMPLID,CHRS_ID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,PERFORMANCE_GOAL_ONE,PERFORMANCE_GOAL_TWO,PERFORMANCE_GOAL_THREE,PERFORMANCE_GOAL_FOUR,PERFORMANCE_GOAL_FIVE from AEM_STAFF_PERF_EVAL_UNIT6 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String speUnit6CHRSIDCopyLookupFields = "STAFFPOSDESC,EMPLID,CHRS_ID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,PERFORMANCE_GOAL_ONE,PERFORMANCE_GOAL_TWO,PERFORMANCE_GOAL_THREE,PERFORMANCE_GOAL_FOUR,PERFORMANCE_GOAL_FIVE";
	public static final String speUnit6CHRSEmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD ='R06'";
	public static final String speUnit6CHRSEmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID";
	// End of Evaluation Unit6 Emp Lookup
	
	// Start of Evaluation Unit8
	public static final String speUnit8CHRSCopySQL = "select STAFFPOSDESC,EMPLID,CHRS_ID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_UNIT8 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String speUnit8CHRSCopyLookupFields = "STAFFPOSDESC,EMPLID,CHRS_ID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String speUnit8CHRSEmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD ='R08'";
	public static final String speUnit8CHRSEmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID";
	// End of Evaluation Unit8
	
	// Start of Get Staff Conf Emp details
	public static final String speConfCHRSEmpIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD='C99'";
	public static final String speConfCHRSLookUpFields = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID";
	public static final String staffEvalConfCHRSCopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_CONF WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>')  order by REVIEWPERIOD_FROM desc";
	public static final String staffEvalConfCHRSCopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME";
	// End of Get Staff Conf Emp details

	// Evaluation CHRS ID End
	
	// Payroll Timekeeper updated query Start
	public static final String getPayrollTimekeeperDetails = "select distinct EMPLID,FIELD_VALUE,DEPTID,COLLEGE,DIVISON,NAME,CSU_SCO_AGENCY,CSU_UNIT,DELETE_FLG,USERID,EMAIL_ADDR as EMAILID from DOA_TIMEKEEPER_DATA where DEPTID='<<deptId>>' and DIVISON = '<<division>>' and FIELD_VALUE = '<<fieldVal>>' and DELETE_FLG = 'N'";
	public static final String getPayrollTimekeeperDetailsLookupFields = "EMPLID,FIELD_VALUE,DEPTID,COLLEGE,DIVISON,NAME,CSU_SCO_AGENCY,CSU_UNIT,DELETE_FLG,USERID,EMAILID";
	// Payroll Timekeeper updated query End
	
	// StudentTimesheet division updated query start
	public static final String getStudentTimesheetDivsionDetailsSql = "select distinct divsion,deptid,division_name,emplid,union_cd,empl_rcd from HR_STAFF_EVALUATION where DEPTID = '<<deptId>>' and emplid='<<EMPL_ID>>'";
	public static final String getStudentTimesheetDivsionDetailsSqlLookupFields = "divsion,deptid,division_name,emplid,union_cd,empl_rcd";
	// StudentTimesheet division updated query end
	
	// Start of Evaluation Unit2579
	public static final String spe2579CHRSEmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION WHERE CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL and UNION_CD in ('R02','R05','R07','R09')";
	public static final String spe2579CHRSEmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID";
	public static final String spe2579CHRSCopySQL = "select STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,ATHLETICS_EMP,ATHETICSEMP_RATING,ATHETICSEMP_RATING_1,ATHETICSEMP_RATING_2 from AEM_STAFF_PERF_EVAL_2579 WHERE EMPLID = ('<<EMPID>>') AND REVIEWPERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND REVIEWPERIOD_TO <= ('<<REVIEWPERIODTO>>') order by REVIEWPERIOD_FROM desc";
	public static final String spe2579CHRSCopyLookupFields = "STAFFPOSDESC,EMPLID,EMPRCD,CBID,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,CLASSIFICATION,EMPRANGE,DEPARTMENT,DEPARTMENT_ID,EVALUATORS_NAME,EVALUATORS_TITLE,REVIEWPERIOD_FROM,REVIEWPERIOD_TO,QUALITY,QUALITY_RATING_1,QUALITY_RATING_2,QUALITY_RATING_3,QUALITY_RATING_4,QUALITY_RATING_5,QUANTITY,QUANTITY_RATING_1,QUANTITY_RATING_2,QUANTITY_RATING_3,QUANTITY_RATING_4,QUANTITY_RATING_5,ORALCOMM,OC_RATING_1,OC_RATING_2,OC_RATING_3,OC_RATING_4,OC_RATING_5,INTERPERSONALSKILLS,IPSKILL_RATING_1,IPSKILL_RATING_2,IPSKILL_RATING_3,IPSKILL_RATING_4,IPSKILL_RATING_5,INITIATIVE,INITIATIVE_RATING_1,INITIATIVE_RATING_2,INITIATIVE_RATING_3,INITIATIVE_RATING_4,INITIATIVE_RATING_5,SERVICEORIENTATION,SO1_RATING_1,SO2_RATING_2,SO3_RATING_3,SO4_RATING_4,SO5_RATING_5,ADAPTABILITY,ADAPTABILITY_RATING_1,ADAPTABILITY_RATING_2,ADAPTABILITY_RATING_3,ADAPTABILITY_RATING_4,ADAPTABILITY_RATING_5,JOBKNOWLEDGE,JK1_RATING_1,JK2_RATING_2,JK3_RATING_3,JK4_RATING_4,JK5_RATING_5,DEPENDRELI,DR1_RATING_1,DR2_RATING_2,DR3_RATING_3,DR4_RATING_4,DR5_RATING_5,WRITTENCOMM,WC1_RATING_1,WC2_RATING_2,WC3_RATING_3,WC4_RATING_4,WC5_RATING_5,PROBSOLVING,PROBSOL_RATING_1,PROBSOL_RATING_2,PROBSOL_RATING_3,PROBSOL_RATING_4,PROBSOL_RATING_5,LEADINGOTHERS,LEADOTHERS_RATING_1,LEADOTHERS_RATING_2,LEADOTHERS_RATING_3,LEADOTHERS_RATING_4,LEADOTHERS_RATING_5,ACCEPTING,ACCEPTING_RATING_1,ACCEPTING_RATING_2,ACCEPTING_RATING_3,ACCEPTING_RATING_4,ACCEPTING_RATING_5,ADDCRITERIA_1,ADDITIONALCRITERIA1,ADDCRITERIA_RATING1,ADDCRITERIA_RATING2,ADDCRITERIA_RATING3,ADDCRITERIA_RATING4,ADDCRITERIA_RATING5,ADDCRITERIA_COMMENT_1,ADDCRITERIA_COMMENT_2,ADDCRITERIA_COMMENT_3,ADDCRITERIA_COMMENT_4,ADDCRITERIA_COMMENT_5,ADDCRITERIA_2,ADDITIONALCRITERIA2,ADDCRITERIA_RATING6,ADDCRITERIA_RATING7,ADDCRITERIA_RATING8,ADDCRITERIA_RATING9,ADDCRITERIA_RATING10,ADDCRITERIA_COMMENT_6,ADDCRITERIA_COMMENT_7,ADDCRITERIA_COMMENT_8,ADDCRITERIA_COMMENT_9,ADDCRITERIA_COMMENT_10,OVERALLRATING,SUPPORTFACTOR_COMMENTS1,SUPPORTFACTOR_COMMENTS2,PERFORMANCE_GOAL_COMMENT1,PERFORMANCE_GOAL_COMMENT2,PERFORMANCE_GOAL_COMMENT3,WORKFLOW_INSTANCE_ID,DIVISION,DIVISION_NAME,HRCOO_NAME,ATHLETICS_EMP,ATHETICSEMP_RATING,ATHETICSEMP_RATING_1,ATHETICSEMP_RATING_2";
	// End of Evaluation Unit2579
		
	// Start of Evaluation Unit 4 
	public static final String speUnit4CHRSCopySQL = "select RATE_PERIOD_TO,RATE_PERIOD_FROM,EMPL_ID,EMP_RCD,CBID,CLASSIFICATION,EMP_RANGE,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,QUALITY,QUANTITY,PROFESSIONAL_JUDGEMENT,CONTRIBUTION_CAMPUS,JOB_STRENGTH_COMMENT,COMMENTS,PROGRESS_COMMENTS,IMPROVEMENTS_COMMENT,GOALS_PROGRAMS_COMMENT,PROB_EMP_RB,OVERALL_RATING,BASED_ON_OBSERVATION,BASED_ON_OBSERVATION1,DIVISION,DIVISION_NAME,HRCOO_NAME from AEM_STAFF_PERF_EVAL_UNIT4 WHERE EMPL_ID = ('<<EMPID>>') AND RATE_PERIOD_FROM >= ('<<REVIEWPERIODFROM>>') AND RATE_PERIOD_TO <= ('<<REVIEWPERIODTO>>') order by RATE_PERIOD_FROM desc";
	public static final String speUnit4CHRSCopyLookupFields = "RATE_PERIOD_TO,RATE_PERIOD_FROM,EMPL_ID,EMP_RCD,CBID,CLASSIFICATION,EMP_RANGE,EVALUATION_TYPE,FIRST_NAME,LAST_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,QUALITY,QUANTITY,PROFESSIONAL_JUDGEMENT,CONTRIBUTION_CAMPUS,JOB_STRENGTH_COMMENT,COMMENTS,PROGRESS_COMMENTS,IMPROVEMENTS_COMMENT,GOALS_PROGRAMS_COMMENT,PROB_EMP_RB,OVERALL_RATING,BASED_ON_OBSERVATION,BASED_ON_OBSERVATION1,DIVISION,DIVISION_NAME,HRCOO_NAME";
	public static final String speUnit4CHRSEmplIDSQL = "select FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID from HR_STAFF_EVALUATION where CSU_CHRS_ID = '<<CSU_CHRS_ID>>' AND ISEVALUSER('<<getUser_ID>>') IS NOT NULL AND UNION_CD='R04'";
	public static final String speUnit4CHRSEmpLookup = "FIRST_NAME,LAST_NAME,EMPLID,DEPTID,DEPTNAME,UNION_CD,EMPL_RCD,DESCR,GRADE,SupervisorName,SupervisorTitle,DIVSION,DIVISION_NAME,EMPUSERID,EMAILID,CSU_CHRS_ID";
	// End of Evaluation Unit 4
	
	// Start of DQ Appeal
	public static final String getDQAppealStudentDetailsSql = "SELECT DISTINCT STUDENT_FNAME,STUDENT_LNAME,STUDENT_ID,STUDENT_EMAIL,PROGRAMS,DEPTID,FUL_COLLEGE,ACAD_CAREER,UNITS_EARNED_AT_CSUF,CURRENT_CSUF_GPA FROM AR_CSU_STDNT_PROG_DATA WHERE LOWER(STUDENT_USERID)=LOWER('<<user_ID>>')";
	public static final String getDQAppealStudentDetailsSqlLookupFields = "STUDENT_FNAME,STUDENT_LNAME,STUDENT_ID,STUDENT_EMAIL,PROGRAMS,DEPTID,FUL_COLLEGE,ACAD_CAREER,UNITS_EARNED_AT_CSUF,CURRENT_CSUF_GPA";
	// End of DQ Appeal
	
	// Start of Property Transfer Request Form
	public static final String getPTREmployeeDetailsSQL = "SELECT DISTINCT EMP_USERID,EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,DIVSION,DIVISION_NAME,EMAILID,CSU_CHRS_ID,DEPTID || ' - ' || DEPTNAME AS DEPARTMENT,DIVSION || ' - ' || DIVISION_NAME AS DIV FROM HR_STAFF_EVALUATION WHERE LOWER(EMP_USERID) = LOWER('<<user_ID>>')";
	public static final String getPTREmployeeDetailsSqlLookupFields = "EMP_USERID,EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,DIVSION,DIVISION_NAME,EMAILID,CSU_CHRS_ID,DEPARTMENT,DIV";
	public static final String getPTRDepartmentDetailsSQL = "SELECT DISTINCT DEPTID,DEPTNAME,DIVSION,DIVISION_NAME,DEPTID || ' - ' || DEPTNAME AS DEPARTMENT,DIVSION || ' - ' || DIVISION_NAME AS DIV FROM HR_STAFF_EVALUATION ORDER BY DEPTID ASC";
	public static final String getPTRDepartmentDetailsSqlLookupFields = "DEPTID,DEPTNAME,DIVSION,DIVISION_NAME,DEPARTMENT,DIV";
	public static final String getPTRNewCustodianDetailsSQL = "SELECT DISTINCT EMPLID,FIRST_NAME,LAST_NAME,EMAILID,CSU_CHRS_ID,EMP_USERID,EMP_NAME FROM HR_STAFF_EVALUATION WHERE DEPTID = '<<dept_ID>>'";
	public static final String getPTRNewCustodianSqlLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,EMAILID,CSU_CHRS_ID,EMP_USERID,EMP_NAME";
	// End of Property Transfer Request Form

	// Start of Off Campus Agreement Use Form//
	public static final String getOffCampuscwidDetails = "Select distinct A.EMPLID, A.FIRST_NAME, A.LAST_NAME, A.DEPTID,A.DEPTNAME,A.GRADE,A.DIVSION,A.DIVISION_NAME,A.EMP_USERID,A.EMAILID,A.EMP_NAME,B.MIDDLE_NAME,B.ADDRESS1,B.CITY,B.STATE,B.POSTAL,B.HOME_PHONE,B.WORK_PHONE from FUL_ECM_PERS_VW B INNER JOIN hr_staff_evaluation A On A.EMPLID = B.EMPLID where A.EMPLID = '<<EMPLID>>'";
	public static final String getOffCampuscwidDetailsLookupFields = "EMPLID,FIRST_NAME,LAST_NAME,DEPTID,DEPTNAME,GRADE,DIVSION,DIVISION_NAME,EMP_USERID,EMAILID,EMP_NAME,MIDDLE_NAME,ADDRESS1,CITY,STATE,POSTAL,HOME_PHONE,WORK_PHONE";

	public static final String getoffCampusReturnSQL = "select CASEID,CWID,FORM_NAME,PROPERTY_TAGNO,DESCRIPTION,INITIATOR_USERID,TODAYS_DATE from AEM_OFF_CAMPUS_AGREE_INFO WHERE PROPERTY_TAGNO = '<<PROPERTY_TAGNO>>' AND INITIATOR_USERID = '<<INITIATOR_USERID>>' AND TODAYS_DATE <= ('<<TODAYS_DATE>>')";
	public static final String getoffCampusReturnLookup = "CASEID,CWID,FORM_NAME,PROPERTY_TAGNO,DESCRIPTION,INITIATOR_USERID,TODAYS_DATE";
	// End of Off Campus Agreement Use Form//

	// Start of HRARF CHRSID Update//
	public static final String FSEmpIDCHRSIDSQL = "SELECT FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING,PRE_FIRST_NAME,PRE_LAST_NAME FROM FUL_ERP_ARF_CHRS_PERS_VW WHERE CHRS_ID = '<<CSU_CHRS_ID>>'";
	public static final String FSEmpIDCHRSIDFields = "FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING,PRE_FIRST_NAME,PRE_LAST_NAME";
    // End of HRARF CHRSID Update//
	
	// Start of HRARF CWID Update//
    public static final String FSEmpIDNewSQL = "SELECT FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING,PRE_FIRST_NAME,PRE_LAST_NAME,CHRS_ID FROM FUL_ERP_ARF_CHRS_PERS_VW WHERE EMPLID = '<<EMPLID>>'";
	public static final String FSEmpIDNewFields = "FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING,PRE_FIRST_NAME,PRE_LAST_NAME,CHRS_ID";
	// End of HRARF CWID Update//
	
	// Asset Management Department Admin and Asset Coordinator Update Start//
	public static final String getDeptAdmin = "SELECT distinct EMP_USERID, UPPER(EMAILID) AS EMAILID, EMP_NAME, DIVSION FROM HR_STAFF_EVALUATION WHERE UNION_CD in ('M80','M98') AND DIVSION = '<<division>>' UNION SELECT EMP_USERID, EMAILID, EMP_NAME, DIVSION FROM HR_STAFF_EVALUATION WHERE LOWER(DESCR) LIKE LOWER('%Chair%') AND DIVSION = '<<division>>'";
	public static final String getDeptAdminLookupFields = "EMP_USERID,EMAILID,EMP_NAME,DIVSION";
	public static final String getchairData = "SELECT distinct EMP_USERID, EMAILID, EMP_NAME, DIVSION FROM AR_COURSE_CHAIR_INFO WHERE DIVSION = '<<division>>'";
	public static final String getchairDataLookupFields = "EMP_USERID,EMAILID,EMP_NAME,DIVSION";
	public static final String getDeptAssetCo = "SELECT DISTINCT ASSET_COORDINATOR_NAME,ASSET_COORDINATOR_USERID,ASSET_COORDINATOR_EMAILID FROM AEM_ASSET_COORDINATORS WHERE (DEPT_ID = '<<deptId>>' OR DEPT_ID IS NULL OR DEPT_ID = '' OR DEPT_ID = 'NA') AND DIVISION_ID = '<<division>>'";
	public static final String getDeptAssetCoLookupFields = "ASSET_COORDINATOR_NAME,ASSET_COORDINATOR_USERID,ASSET_COORDINATOR_EMAILID";
	public static final String getAssetDetails = "SELECT DISTINCT * FROM ASSET_MANAGEMENT_DATA WHERE TAG_NUMBER = '<<tag_number>>' AND ROWNUM = 1";
	public static final String getAssetDetailsLookupFields = "ASSET_ID,TAG_NUMBER,DESCR,MODEL,LOCATION,COST";
	// Asset Management Department Admin Update Asset Coordinator End//

	// Start of Verification Request
	public static final String VerificationUserIDSQL = "select distinct A.EMPLID,A.NAME,A.LAST_NAME,A.FIRST_NAME,A.USERID,A.PREF_EMAIL,A.HOME_PHONE,A.CELL_PHONE,A.WORK_OTR_PHONE,A.ADDRESS1,A.ADDRESS2,A.ADDRESS3,A.ADDRESS4,A.CITY,A.STATE,A.POSTAL,A.COUNTRY, B.SID, B.DOB from AR_PERSON_INFO A INNER JOIN AR_FN_STUDENT B On A.EMPLID = B.SID where LOWER(A.USERID)=LOWER('<<USERID>>')";
	public static final String VerificationUserIDFields = "EMPLID,NAME,LAST_NAME,FIRST_NAME,USERID,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY,SID,DOB";
	// End of Verification Request
	
	//Volunteer Form//
	//public static final String getVolunteerUserSupDetails = "SELECT EMPLOYEEID, USERID, FIRSTNAME, LASTNAME, EMAILID FROM EMPL_ACT_DIR_DATA WHERE LOWER(LASTNAME) LIKE LOWER('<<LASTNAME>>%') ORDER BY FIRSTNAME ASC";
  	//public static final String getVolunteerUserSupDetailsLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID";
	public static final String getVolunteerUserSupDetails = "SELECT EMPLOYEEID, USERID, FIRSTNAME, LASTNAME, EMAILID, DEPTTITLE FROM EMPL_ACT_DIR_DATA WHERE LOWER(LASTNAME) LIKE LOWER('<<LASTNAME>>%') ORDER BY FIRSTNAME ASC";
  	public static final String getVolunteerUserSupDetailsLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID,DEPTTITLE";
	public static final String getpositionData = "SELECT FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING FROM FUL_ERP_ARF_PERS_VW WHERE USERID = '<<USER_ID>>'";
	public static final String getpositionDataLookupFields = "FIRST_NAME,LAST_NAME,DEPTNAME,FUL_DIVISION_NAME,FUL_DIVISION,USERID,PHONE,EMAIL,DESCR,DEPTID,FUL_DIVISION,POSITION,EMP_TYPE,EXPECTED_END_DATE,EMPLID,MANAGER,BUILDING";
	public static final String getAllDeptName = "SELECT distinct EMPLOYEEID, USERID, FIRSTNAME, LASTNAME, EMAILID, DEPTTITLE FROM EMPL_ACT_DIR_DATA WHERE USERID = '<<USER_ID>>'";
	public static final String getAllDeptNameLookupFields = "EMPLOYEEID,USERID,FIRSTNAME,LASTNAME,EMAILID,DEPTTITLE";
	public static final String getVolunteerStudentDetails = "select * from AR_PERSON_INFO where LOWER(USERID)=LOWER('<<USERID>>')";
	public static final String getVolunteerStudentLookupFields = "EMPLID,NAME,LAST_NAME,FIRST_NAME,USERID,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY,EMERGENCY_CONTACT_NAME,EMERGENCY_PHONE";
	//End of Volunteer Form//
	
	// Start of Updated Excess Units Query
	public static final String getStudentDetailsForExcessUnitsForm = "select distinct A.EMPLID,A.NAME,A.FIRST_NAME,A.LAST_NAME,A.USERID,A.PREF_EMAIL,A.CELL_PHONE,A.ADDRESS1,A.ADDRESS2,A.CITY,A.STATE,A.POSTAL,B.EIP_FLG,B.STUDENT_ID,B.DEGREE,B.PROGRAMS,B.ACAD_CAREER,B.CHAIR_EMPLID,B.CHAIR_NAME,B.CHAIR_USERID,B.CHAIR_EMAIL,B.DEPTID,B.DEPTNAME,B.ACAD_PROG,B.INTERNATIONAL_FLAG,B.LOA_FLAG,B.TERM_DESCR,B.ADMIT_TERM FROM AR_PERSON_INFO A INNER JOIN AR_CSU_STDNT_PROG_DATA B On A.USERID=B.STUDENT_USERID WHERE lower(A.USERID)=lower('<<getUser_ID>>') AND B.PLAN_SEQUENCE = '10'";
	// End of Updated Excess Units Query
	
	// Start of RFI IFT Form
	public static final String getExistingCustomerDetails = "SELECT DISTINCT * FROM RFI_CUSTOMER_ADDRESS WHERE CUST_ID = '<<cust_id>>' AND ROWNUM = 1";
	public static final String getExistingCustomerDetailsLookupFields = "SETID,CUST_ID,SINCE_DT,NAME1,NAME2,NAMESHORT,COUNTRY,ADDRESS1,ADDRESS2,ADDRESS3,CITY,STATE,POSTAL,PHONE,FAX,WEB_URL";
	public static final String getApproverDetails = "SELECT DISTINCT * FROM DOA_DEPT_APPROVER WHERE DEPTID = '<<dept_id>>'";
	public static final String getApproverDetailsLookupFields = "DEPTID,EMPLID,FIRST_NAME,LAST_NAME,NAME,MIDDLE_NAME,EMAIL_ADDR,USERID";
	// End of RFI IFT Form

	// Start of Designation Form
	public static final String getResponsibleManagerDetails = "SELECT DISTINCT CSU_CHRS_ID,UNION_CD,LAST_NAME,FIRST_NAME,EMP_USERID,EMP_NAME,DIVSION,DIVISION_NAME,LOWER(EMAILID) AS EMAILID,EMPLID FROM HR_STAFF_EVALUATION WHERE LOWER(LAST_NAME) LIKE LOWER('<<lastName>>%') AND DIVSION = '<<division>>' AND UNION_CD IN ('M80','M98') ORDER BY FIRST_NAME ASC";
	public static final String getResponsibleManagerDetailsLookupFields = "EMPLID,EMP_USERID,EMAILID,EMP_NAME,FIRST_NAME,LAST_NAME,UNION_CD,DIVSION,DIVISION_NAME,CSU_CHRS_ID";
	public static final String getCashHandlerDetails = "SELECT DISTINCT CSU_CHRS_ID,UNION_CD,LAST_NAME,FIRST_NAME,EMP_USERID,EMP_NAME,DIVSION,DIVISION_NAME,LOWER(EMAILID) AS EMAILID,EMPLID FROM HR_STAFF_EVALUATION WHERE LOWER(LAST_NAME) LIKE LOWER('<<lastName>>%') AND DIVSION = '<<division>>' ORDER BY FIRST_NAME ASC";
	public static final String getCashHandlerDetailsLookupFields = "EMPLID,EMP_USERID,EMAILID,EMP_NAME,FIRST_NAME,LAST_NAME,UNION_CD,DIVSION,DIVISION_NAME,CSU_CHRS_ID";
	// End of Designation Form

	// Start of University Withdrawal Form
	public static final String getUniversityWithdrawalSQL = "select DISTINCT STUDENT_ID,STUDENT_EMAIL,STUDENT_FNAME,STUDENT_LNAME,STUDENT_PHONE,STUDENT_USERID,ACAD_CAREER,PLAN_SEQUENCE,PROGRAMS,TERM_DESCR,ACAD_YEAR,ADMIT_TERM,ADMIT_TERM_DESCR,ACAD_PLAN,FUL_COLLEGE,DEPTID,DEPTNAME from AR_CSU_STDNT_PROG_DATA where lower(STUDENT_USERID) = lower('<<userID>>') AND PLAN_SEQUENCE = '10'";
	public static final String getUniversityWithdrawalLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_FNAME,STUDENT_LNAME,STUDENT_PHONE,STUDENT_USERID,ACAD_CAREER,PLAN_SEQUENCE,PROGRAMS,TERM_DESCR,ACAD_YEAR,ADMIT_TERM,ADMIT_TERM_DESCR,ACAD_PLAN,FUL_COLLEGE,DEPTID,DEPTNAME";
	// End of University Withdrawal Form
	
	// Start of AI AGENT Forms List Query
	public static final String getAllFormsList = "SELECT DISTINCT FORM_NAME FROM AEM_FORM_LIST_INFO WHERE LOWER(DEPARTMENT_NAME) LIKE LOWER('<<DEPARTMENT_NAME>>%')";
	public static final String getAllFormsListLookupFields = "FORM_NAME";
	public static final String getAllWFStepList = "SELECT DISTINCT WORKFLOW_STEP FROM AEM_FORM_LIST_INFO WHERE LOWER(FORM_NAME) LIKE LOWER('<<FORM_NAME>>%')";
	public static final String getAllWFStepListLookupFields = "WORKFLOW_STEP";
	// End of AI AGENT Forms List Query
	
	//Start of Peoplesoft ARF Form
	public static final String getPeoplesoftARFRolesData = "SELECT * FROM FUL_PS_SECURITY_ROLES_VW WHERE ROLEUSER = '<<CWID>>'";
	public static final String getPeoplesoftARFRolesDataLookupFields = "ROLEUSER,ROLENAME,TYPE,DESCR,DESCRLONG";
	//End of Peoplesoft ARF Form

	// Start of Personal Action Notice CHRSID Update Query
	public static final String getPersonnelActionPlanChrsID = "Select A.FIRST_NAME, A.LAST_NAME, A.MIDDLE_NAME, A.EMPLID, B.CSU_SCO_AGENCY, B.CSU_UNIT, B.JOBCODE, B.EMPL_RCD+1 as SERIAL_NO, B.DEPTNAME, B.DEPTID, B.EMPL_RCD, B.POSITION_NBR, B.DESCR, B.UNION_CD, B.FUL_DIVISION_NAME, B.FUL_COLLEGE_NAME, B.STD_HOURS, (CASE B.UNION_CD when 'M80' then B.DESCR1 else '' end) as DESCR1, B.CSU_ANNI_MONTH, B.CSU_ANNI_YEAR,(case B.FLSA_STATUS when 'X' then '1' else '0' end) as FLSAExmp, (case B.FLSA_STATUS when 'N' then '1' else '0' end) as FLSANon, B.GRADE, B.MONTHLY_RT, C.SUPERVISOR_NAME, (SELECT(b1.CSU_MPP_JOB_FAMILY  ||  b1.CSU_MPP_JOB_FUNC || b1.CSU_MPP_RPT_CAT) FROM ful_ecm_job_vw a1, ful_ecm_post_data_vw b1 WHERE a1.position_nbr = b1.position_nbr and a1.CSU_CHRS_IS = a.CSU_CHRS_ID) As MppJobcode,b.Expected_End_Date, b.fte from FUL_ECM_PERS_VW A, FUL_ECM_JOB_VW B, FUL_ECM_REPORTS_VW C where A.CSU_CHRS_ID = '<<CSU_CHRS_ID>>' and A.CSU_CHRS_ID = B.CSU_CHRS_IS  and B.REPORTS_TO = C.POSITION_NBR";
	public static final String getPersonnelActionPlanChrsIDFields = "FIRST_NAME,LAST_NAME,MIDDLE_NAME,EMPLID,CSU_SCO_AGENCY,CSU_UNIT,JOBCODE,SERIAL_NO,DEPTNAME,DEPTID,EMPL_RCD,POSITION_NBR,DESCR,UNION_CD,FUL_DIVISION_NAME,FUL_COLLEGE_NAME,STD_HOURS,DESCR1,CSU_ANNI_MONTH,CSU_ANNI_YEAR,FLSAEXMP,FLSANON,GRADE,MONTHLY_RT,SUPERVISOR_NAME,MPPJOBCODE,EXPECTED_END_DATE,FTE";
	// End of Personal Action Notice CHRSID Update Query

	//Start of Dotted Line Form Query
	public static final String getEMPNamefromDir = "select * from EMPL_ACT_DIR_DATA where LOWER(LASTNAME)=LOWER('<<LASTNAME>>')";
	public static final String getCWIDNamefromDir = "select * from EMPL_ACT_DIR_DATA where LOWER(FIRSTNAME)=LOWER('<<FIRSTNAME>>') and LOWER(LASTNAME)=LOWER('<<LASTNAME>>')";
	//End of Dotted Line Form Query
	
	// Start of Name Change Form
    public static final String getStudentDetailsForNameChangeForm = "SELECT * FROM AR_PERSON_INFO WHERE LOWER(USERID) = LOWER('<<USER_ID>>')";
   	public static final String getStudentDetailsForNameChangeFormLookupFields = "EMPLID,NAME,LAST_NAME,FIRST_NAME,USERID,PREF_EMAIL,HOME_PHONE,CELL_PHONE,WORK_OTR_PHONE,ADDRESS1,ADDRESS2,ADDRESS3,ADDRESS4,CITY,STATE,POSTAL,COUNTRY,EMERGENCY_CONTACT_NAME,EMERGENCY_PHONE,PREFERRED_NAME,PREFERRED_FNAME,PREFERRED_LNAME";
	// End of Name Change Form
   	
	// Start of Authorization Query
	public static final String getAllCountyList = "SELECT DISTINCT COUNTY FROM AEM_CA_COUNTY_CITY_LIST ORDER BY COUNTY ASC";
	public static final String getAllCountyListLookupFields = "COUNTY";
	public static final String getAllCityList = "SELECT DISTINCT CITY FROM AEM_CA_COUNTY_CITY_LIST WHERE LOWER(COUNTY) LIKE LOWER('<<COUNTY>>%') ORDER BY CITY ASC";
	public static final String getAllCityListLookupFields = "CITY";
	// End of Authorization Query

	// Start Scheduler For AuthorizationPrivatelyOwnedVehicle
	public static final String getAuthorizationPrivatelyOwnedVehicleSubmittedData = "SELECT * FROM AEM_AUTHOR_PRI_VEHICLE_FORM WHERE WORKFLOW_STATUS = '<<WORKFLOW_STATUS>>' AND LAUNCH_STATUS IS NULL";
	public static final String getAuthorizationPrivatelyOwnedVehicleSubmittedDataLookupField = "CWID,CASEID,EMPLID,DIVISION,DEPTID,DRIVER_USERID,DRIVER_FIRSTNAME,DRIVER_LASTNAME,LICENSE_NUMBER,STATE,EXPIRATION_DATE,DRIVER_NAME,DRIVER_SIGN,DRIVER_SIGNDATE,DRIVER_COMMENTS,RISKMANAGEMENT_NAME,RISKMANAGEMENT_SIGN,RISKMANAGEMENT_SIGNDATE,RISKMANAGEMENT_COMMENTS,RISKMANAGEMENT_DECISION,DATA_XML,STAGE_INDICATOR,LAST_STEP,WORKFLOW_STATUS,LAST_STEP_ASSIGNEE,WORKFLOW_INSTANCE_ID,PAYLOAD_PATH,FORM_TYPE,AEM_HISTORY_ID,UPDATED_DT";
	// End Scheduler For AuthorizationPrivatelyOwnedVehicle

   	// Start of AdmissionAppealExternal Form
 	public static final String admissionAppealExternalUserIdSQL = "select * from AR_ADM_APPEAL_DATA where LOWER(STUDENT_USERID) = LOWER('<<student_userid>>')";
 	public static final String admissionAppealExternalSubmissionDataSQL = "select * from AEM_APPEALS_EXTERNAL_FORM where CWID='<<cwid>>' and LOWER(TERM) = LOWER('<<term>>')";
	public static final String admissionAppealExternalSubmissionDataLookupFields = "CASEID,CWID,FIRST_NAME,LAST_NAME,EMAIL,TERM,TERM_YEAR,TERM_DESCRIPTION,LEVELS,APPEAL_REASON,APPEAL_STATEMENT,REASON,STUDENT_SIGNATURE,WORKFLOW_INSTANCE_ID,AEM_HISTORY_ID,UPDATED_DT";
	public static final String admissionAppealExternalCWIDSQL = "select * from AR_ADM_APPEAL_DATA where CWID = <<student_cwid>>";
 	// End of AdmissionAppealExternal Form
 	
    // Start of Major Minor Form
   	public static final String getMajorMinorData = "SELECT * FROM AR_CSU_STDNT_PROG_DATA WHERE STUDENT_ID = '<<CWID>>' and ACAD_CAREER='UGRD' and term_descr = '<<TERM>>' and PROGRAMS = '<<PROGRAM>>'";
   	public static final String getMajorMinorDataBackup = "SELECT * FROM AR_CSU_STDNT_PROG_DATA WHERE STUDENT_ID = '<<CWID>>' and ACAD_CAREER='UGRD' and PROGRAMS = '<<PROGRAM>>'";
   	public static final String getMajorMinorDataLookupFields = "STUDENT_ID,STUDENT_EMAIL,STUDENT_PHONE,STUDENT_USERID,STUDENT_FNAME,STUDENT_LNAME,ACAD_CAREER,ACAD_PROG,ACAD_PLAN,PLAN_SEQUENCE,ACAD_PLAN_TYPE,DIPLOMA_DESCR,CONCENTRATION,TRNSCR_DESCR,PROGRAMS,PLAN_RANK,DEPTID,DEPTNAME,FUL_COLLEGE,FUL_COLLEGE_NAME,CHAIR_EMPLID,CHAIR_NAME,CHAIR_USERID,CHAIR_EMAIL,DEAN_EMPLID,DEAN_NAME,DEAN_USERID,DEAN_EMAIL,EFFDT,EFFSEQ,REQ_TERM,DESCR,DESCRSHORT,DEGREE,ACAD_ORG,TERM_DESCR,ACAD_YEAR,ADMIT_TERM,ADMIT_TERM_DESCR,EXP_GRAD_TERM,EXP_TERM_DESCR,EIP_FLG,OU_FLAG,INTERNATIONAL_FLAG,LOA_FLAG,DQ_FLAG,UNITS_EARNED_AT_CSUF,CURRENT_CSUF_GPA,CSU_EO_WDRW_LIMIT,CSU_EO_WDRW_USED,CSU_EO_WDRW_AVAIL,STDNT_CAR_NBR";
   	// End of Major Minor Form
   	
   	// Start of SCW TST
   	public static final String getNonMedStudentTSTSql = "select * from AR_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>'";
   	public static final String getMedStudentTSTSql = "select * from AR_COURSE_WITHDRAWAL where LOWER(student_userid) = LOWER('<<userId>>') and STRM = '<<TERM>>'";
   	// End of SCW TST
}
