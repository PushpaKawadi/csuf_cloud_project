/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            MessageText.visible = false;
StudentMessageText.visible = false;
WarrantMessageText.visible = false;
CMSStudentMessageText.visible = false;


var gifModal = document.getElementById('gifModal');
if(stage_indicator.value === null){ 	
    gifModal.style.display = "none";
 	ApprovingOfficialSignaturePanel.visible = false; 
	ApprovingOfficialCDSignaturePanel.visible = false; 
	warrantCoordinatorSignatureHeaderText.visible = false;
	WarrantCoordinatorPrimarySignaturePanel.visible = false;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	ApprovalsPanel.visible = false;
}
else if(stage_indicator.value == "ToFaculty"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = false;
	WarrantCoordinatorPrimarySignaturePanel.visible = false;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		//ApprovingOfficialCDSignaturePanel.visible = true;
		//ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
	}
	
	
	
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") && 
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		//WarrantCoordinatorPrimarySignaturePanel.visible = true;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		//WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		//WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		
	}else{
		CMSStudentPrimaryPanel.visible = false;	
		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;		
		
	}else{
		CMSStudentAlternatePanel.visible = false;			
	}	
	
}
else if(stage_indicator.value == "ToStudent"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = false;
	WarrantCoordinatorPrimarySignaturePanel.visible = false;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add) && (student_alternate_delete.value !== null) || (student_alternate_delete.value != "Select TimeKeeper") && (student_alternate_add.value !== null) || (student_primary_add != "Select TimeKeeper") && (approving_official_cd_delete.value !== null) || (approving_official_cd_delete.value != "Select Approving Official") && (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}	
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") && 
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		//WarrantCoordinatorPrimarySignaturePanel.visible = true;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null) && (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		//WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		//WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		
		
	}else{
		CMSStudentPrimaryPanel.visible = false;	
				
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		
	}
	
}
else if(stage_indicator.value == "ToPrimaryWarrant"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") && 
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		//WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		//WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;		
		
	}else{
		
		CMSStudentPrimaryPanel.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		
	}		
	
}
else if(stage_indicator.value == "ToAlternateWarrant"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") && 
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;		
		
	}else{
			
		CMSStudentPrimaryPanel.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		
	}			
}
else if(stage_indicator.value == "ToPrimaryCMSStudent"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") && 
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
		WarrantCoordinatorAlternateSignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentPrimarySignaturePanel.visible = true;
		
	}else{
		CMSStudentPrimarySignaturePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		//CMSStudentAlternateSignaturePanel.visible = true;
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;
	}			
}
else if(stage_indicator.value == "ToAlternateCMSStudent"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") && 
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
		WarrantCoordinatorAlternateSignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentPrimarySignaturePanel.visible = true;
		CMSStudentPrimarySignaturePanel.enabled = false;
		
	}else{
		CMSStudentPrimarySignaturePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentAlternateSignaturePanel.visible = true;
		
	}else{
		CMSStudentAlternateSignaturePanel.visible = false;		
		cmsStudentSignatureHeaderText.visible = false;
	}		
		
}
else if(stage_indicator.value == "ToDepartmentHead"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = true;
	DivisionHeadSignaturePanel.visible = false;
	CollegeDeanSignaturePanel.visible = false;
	DepartmentHeadSignaturePanel.visible = true;
	PayrollSignaturePanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") &&
	if( (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentPrimarySignaturePanel.visible = true; 
		CMSStudentPrimarySignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternateSignaturePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;	
		CMSStudentPrimarySignaturePanel.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentAlternateSignaturePanel.visible = true;
		CMSStudentAlternateSignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;
		CMSStudentAlternateSignaturePanel.visible = false;
	}		
		
	if((deparment_approver_names.value !== null) && (deparment_approver_names.value != "Select Department Approver")){
			DepartmentHeadSignaturePanel.visible = true;
	}
	else{
			DepartmentHeadSignaturePanel.visible = false;
	}	
}
else if(stage_indicator.value == "ToCollegeDean"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = true;	
	CollegeDeanSignaturePanel.visible = true;	
	DivisionHeadSignaturePanel.visible = false;
	PayrollSignaturePanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") && 
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") &&
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
      	WarrantCoordinatorAlternateSignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentPrimarySignaturePanel.visible = true; 
		CMSStudentPrimarySignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternateSignaturePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;	
		CMSStudentPrimarySignaturePanel.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentAlternateSignaturePanel.visible = true;
		CMSStudentAlternateSignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;
		CMSStudentAlternateSignaturePanel.visible = false;
	}		
	
	if((deparment_approver_names.value !== null) && (deparment_approver_names.value != "Select Department Approver")){
			DepartmentHeadSignaturePanel.visible = true;
			DepartmentHeadSignaturePanel.enabled = false;
	}
	else{
			DepartmentHeadSignaturePanel.visible = false;
	}	
	if((college_approver_names.value !== null) && (college_approver_names.value != "Select College Dean")){
			CollegeDeanSignaturePanel.visible = true;
	}
	else{
			CollegeDeanSignaturePanel.visible = false;
	}	
}
else if(stage_indicator.value == "ToDivisionHead"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = true;
	CollegeDeanSignaturePanel.visible = false;
	DepartmentHeadSignaturePanel.visible = false;
	PayrollSignaturePanel.visible = false;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") &&
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentPrimarySignaturePanel.visible = true; 
		CMSStudentPrimarySignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternateSignaturePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;	
		CMSStudentPrimarySignaturePanel.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentAlternateSignaturePanel.visible = true;
		CMSStudentAlternateSignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;
		CMSStudentAlternateSignaturePanel.visible = false;
	}		
	
	if((deparment_approver_names.value !== null) && (deparment_approver_names.value != "Select Department Approver")){
			DepartmentHeadSignaturePanel.visible = true;
			DepartmentHeadSignaturePanel.enabled = false;
	}
	else{
			DepartmentHeadSignaturePanel.visible = false;
	}	
	if((college_approver_names.value !== null) && (college_approver_names.value != "Select College Dean")){
			CollegeDeanSignaturePanel.visible = true;
			CollegeDeanSignaturePanel.enabled = false;
	}
	else{
			CollegeDeanSignaturePanel.visible = false;
	}

	if((division_approver_names.value !== null) && (division_approver_names.value != "Select Division Head or Designee")){
			DivisionHeadSignaturePanel.visible = true;
	}
	else{
			DivisionHeadSignaturePanel.visible = false;
	}	
}
else if(stage_indicator.value == "ToPayroll"){
  	gifModal.style.display = "none";
	PayrollServicesPanel.enabled = false;
	ApprovingOfficialCDSignaturePanel.visible = false;
	warrantCoordinatorSignatureHeaderText.visible = true;
	WarrantCoordinatorPrimarySignaturePanel.visible = true;
	WarrantCoordinatorAlternateSignaturePanel.visible = false;
	cmsStudentSignatureHeaderText.visible = false;
	CMSStudentPrimarySignaturePanel.visible = false;
	CMSStudentAlternateSignaturePanel.visible = false;
	deparment_approver_names.enabled = false;
	college_approver_names.enabled = false;
	division_approver_names.enabled = false;
	ApprovalsPanel.visible = true;
	CollegeDeanSignaturePanel.visible = false;
	DepartmentHeadSignaturePanel.visible = false;
	PayrollSignaturePanel.visible = true;
  	add.visible = false;
  	remove.visible = false;
	
	if((timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") || (timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper") || (timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") || (timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper") || (timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) || (timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendancePanel.visible = true;
	}
	else{ 
		FacultyStaffAttendancePanel.visible = false;
	}
	//(timeKeeper_primary_delete.value !== null) && (timeKeeper_primary_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_primary_add.value !== null) && (timeKeeper_primary_add.value != "Select TimeKeeper")){
		FacultyStaffAttendancePrimaryPanel.visible = true;
		FacultyStaffAttendancePrimaryPanel.enabled = false;
		
	}else{
		FacultyStaffAttendancePrimaryPanel.visible = false;
		
	}
	
	//(timeKeeper_alternate_delete.value !== null) && (timeKeeper_alternate_delete.value != "Select TimeKeeper") &&
	if((timeKeeper_alternate_add.value !== null) && (timeKeeper_alternate_add.value != "Select TimeKeeper")){
		FacultyStaffAttendanceAlternatePanel.visible = true;
		FacultyStaffAttendanceAlternatePanel.enabled = false;
		
	}else{
		FacultyStaffAttendanceAlternatePanel.visible = false;
		
	}
	
	//(timeKeeper_approving_official_delete.value !== null) && (timeKeeper_approving_official_delete.value != "Select Approving Official" ) && 
	if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value !== "Select Approving Official")){
		FacultyStaffAttendanceApprovingOfficialPanel.visible = true;
		FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
		ApprovingOfficialSignaturePanel.visible = true;
		ApprovingOfficialSignaturePanel.enabled = false;
		
	}else{
		ApprovingOfficialSignaturePanel.visible = false;
		FacultyStaffAttendanceApprovingOfficialPanel.visible = false;
	}
	
	
	if((student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") || (student_primary_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") || (student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper") || (approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") || (approving_official_cd_add.value !== null) && ("Select Approving Official")){
			StudentAttendancePanel.visible = true;
	}
	else{
			StudentAttendancePanel.visible = false;
	}
	
	//(student_primary_delete.value !== null) && (student_primary_delete.value != "Select TimeKeeper") && 
	if((student_primary_add.value !== null) && (student_primary_add.value != "Select TimeKeeper")){
		StudentAttendancePrimaryPanel.visible = true;
		StudentAttendancePrimaryPanel.enabled = false;
		
	}else{
		StudentAttendancePrimaryPanel.visible = false;
		
	}
	
	//(student_alternate_delete.value !== null) && (student_alternate_delete.value != "Select TimeKeeper") && 
	if((student_alternate_add.value !== null) && (student_primary_add != "Select TimeKeeper")){
		StudentAttendanceAlternatePanel.visible = true;
		StudentAttendanceAlternatePanel.enabled = false;
		
	}else{
		StudentAttendanceAlternatePanel.visible = false;
		
	}
	
	//(approving_official_cd_delete.value !== null) && (approving_official_cd_delete.value != "Select Approving Official") && 
	if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
		ApprovingOfficialCDSignaturePanel.visible = true;
		ApprovingOfficialCDSignaturePanel.enabled = false;
		StudentAttendanceApprovingOfficialCDPanel.visible = true;
		StudentAttendanceApprovingOfficialCDPanel.enabled = false;
	}else{
		StudentAttendanceApprovingOfficialCDPanel.visible = false;
		ApprovingOfficialCDSignaturePanel.visible = false;
	}
	
	
	if((warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") || (warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator") || (warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") || (warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
			WarrantCoordinatorPanel.visible = true;
	}
	else{ 
			WarrantCoordinatorPanel.visible = false;
	}
	
	//(warrant_primary_delete.value !== null) && (warrant_primary_delete.value != "Select Warrant Coordinator") &&
	if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorPrimaryPanel.visible = true;
		WarrantCoordinatorPrimaryPanel.enabled = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = true;
		WarrantCoordinatorPrimarySignaturePanel.enabled = false;
	}else{
		WarrantCoordinatorPrimaryPanel.visible = false;
		WarrantCoordinatorPrimarySignaturePanel.visible = false;
		
	}
	
	//(warrant_alternate_delete.value !== null) && (warrant_alternate_delete.value != "Select Warrant Coordinator") && 
	if((warrant_alternate_add.value !== null)&& (warrant_alternate_add.value != "Select Warrant Coordinator")){
		WarrantCoordinatorAlternatePanel.visible = true;
		WarrantCoordinatorAlternatePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.enabled = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = true;
	}else{
		WarrantCoordinatorAlternatePanel.visible = false;
		WarrantCoordinatorAlternateSignaturePanel.visible = false;
	}
	
	
	if((cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") || (cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator") || (cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") || (cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
			CmsStudentConfirmationTicketsPanel.visible = true;
	}
	else{
			CmsStudentConfirmationTicketsPanel.visible = false;
	}
	
	//(cms_student_primary_delete.value !== null) && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_primary_add.value !== null)&& (cms_student_primary_add.value != "Select CMS Student Coordinator")){
		CMSStudentPrimaryPanel.visible = true;
		CMSStudentPrimaryPanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentPrimarySignaturePanel.visible = true; 
		CMSStudentPrimarySignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternateSignaturePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;	
		CMSStudentPrimarySignaturePanel.visible = false;		
	}
	
	//(cms_student_alternate_delete.value !== null) && (cms_student_alternate_delete.value != "Select CMS Student Coordinator") && 
	if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
		CMSStudentAlternatePanel.visible = true;
		CMSStudentAlternatePanel.enabled = false;
		cmsStudentSignatureHeaderText.visible = true;
		CMSStudentAlternateSignaturePanel.visible = true;
		CMSStudentAlternateSignaturePanel.enabled = false;
		
	}else{
		CMSStudentAlternatePanel.visible = false;	
		cmsStudentSignatureHeaderText.visible = false;
		CMSStudentAlternateSignaturePanel.visible = false;
	}		
	
	if((deparment_approver_names.value !== null) && (deparment_approver_names.value != "Select Department Approver")){
			DepartmentHeadSignaturePanel.visible = true;
			DepartmentHeadSignaturePanel.enabled = false;
	}
	else{
			DepartmentHeadSignaturePanel.visible = false;
	}	
	if((college_approver_names.value !== null) && (college_approver_names.value != "Select College Dean")){
			CollegeDeanSignaturePanel.visible = true;
			CollegeDeanSignaturePanel.enabled = false;
	}
	else{
			CollegeDeanSignaturePanel.visible = false;
	}

	if((division_approver_names.value !== null) && (division_approver_names.value != "Select Division Head or Designee")){
			DivisionHeadSignaturePanel.visible = true;
			DivisionHeadSignaturePanel.enabled = false;
	}
	else{
			DivisionHeadSignaturePanel.visible = false;
	}	
}




        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null && formSavedStatus.value != "1"){
    var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";
	
	var userCWID="";

	$.ajax({

		type: 'GET', 
		url:"/bin/getAllLoggedInUserDetailsLookup",
		dataType: 'json',
		success: function(myresponse){
			if(myresponse.length > 0){
				for(var a = 0; a < myresponse.length; a++){
					userCWID = myresponse[0].EMPLOYEEID;
                  	//userCWID = '890242787';
                  	hidden_cwid.value = userCWID;
                  	workflow_initiator.value = myresponse[0].USERID;
				}
			}
			else{
				showErrorModal("Alert !", "No matching records found");
				gifModal.style.display = "none";
			}						
		  
			$.ajax({

				type: 'GET', 

				url:"/bin/getAllDetailsFromCWIDLookUp",

				data:  {
					 cwid: userCWID
				},

				dataType: 'json',

					  success: function(myresponse){               
							
							if(myresponse.length > 0){
								
								  var allDetailsObj = {};
								  var allDetailsArray = [];
								  var allDetailsObjValues = {};
								  var allDetailsArrayParsed = "";
                              		
                              	  hidden_name.value = myresponse[0].NAME;							
                              
								  for(var allDetailsValue=0; allDetailsValue < myresponse.length; allDetailsValue++){
										allDetailsArray.push(myresponse[allDetailsValue]);         
										all_user_data_details_json.value = JSON.stringify(allDetailsArray);
								  }             	              				 
								 
								 var divisionListValue = document.querySelector(".division-list select");
								 var length = divisionListValue.options.length;
								
								 for(var a=length; a>0;a--){
									divisionListValue.options[a] = null;
								 }
													  
								 for(var i=0; i < myresponse.length; i++){
									
									var opt = document.createElement("option");
									if(myresponse[i].FUL_DIVISION_NAME != undefined && myresponse[i].FUL_DIVISION_NAME != null){
										opt.value = myresponse[i].FUL_DIVISION_NAME;                         
										opt.innerHTML = myresponse[i].FUL_DIVISION_NAME; 
										divisionListValue.appendChild(opt);
									}
								}
								gifModal.style.display = "none";								
							}
							else{
								showErrorModal("Alert !", "No matching records found");
								gifModal.style.display = "none";
							}
						}
			}); // end 1st ajax  
		}
	});
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_effective_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_effective_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value === null){
  	var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var dateInitiated = (curyear + "-" + curyearMonth + "-" + curyearDay);
            this.value = dateInitiated;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_division_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_division_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value === null && formSavedStatus.value != "1"){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block"; 
  
  	timeKeeper_primary_add.items = "";
    timeKeeper_alternate_add.items = "";
    timeKeeper_approving_official_add.items = "";                                
    student_primary_add.items = "";
    student_alternate_add.items = "";
    approving_official_cd_add.items = "";
    warrant_primary_add.items = "";
    warrant_alternate_add.items = "";
    cms_student_primary_add.items = "";
    cms_student_alternate_add.items = "";
    timeKeeper_primary_delete.items = "";
    timeKeeper_alternate_delete.items = "";
    timeKeeper_approving_official_delete.items = "";
    student_primary_delete.items = "";
    student_alternate_delete.items = "";
    approving_official_cd_delete.items = "";	
    warrant_primary_delete.items = "";
    warrant_alternate_delete.items = "";
    cms_student_primary_delete.items = "";
    cms_student_alternate_delete.items = "";
  
    all_department_IDs.value = null;
  	 
    var rowcountRemoveAll = Row1.instanceManager.instanceCount;
    //var lastRow = rowcountRemoveAll - 1;  	  
    for(i=0; i<=rowcountRemoveAll;i++){        
      Row1.instanceManager.removeInstance(Row1.instanceIndex);                
    }   		
  	
    data_table.Row1.department_Id.value = null;
    data_table.Row1.department_Id.items = "";
    data_table.Row1.department_Id.enabled = true;
    data_table.Row1.agency_unit.value = null;
    data_table.Row1.agency_unit.items = ""; 	
  	  	  
  	var collegeListVal = document.querySelector(".college-list select");
    var length1 = collegeListVal.options.length;		

    for(var b=length1; b>0;b--){
      collegeListVal.options[b] = null;
    }
	
  	if(this.value !== null){    	
				
        var divisionSelected = this.value;	

	    var collegeListObj = {};
	    var collegeListArray = [];
		var divisionHeadNamesArray = [];
	    var divisionHeadAllDetailsArray = [];	
		
		collegeListArray = JSON.parse(all_user_data_details_json.value);
		
		for (var collegeListValue = 0; collegeListValue < collegeListArray.length; collegeListValue++){
				
				collegeListObj = collegeListArray[collegeListValue];
				
				for(var key in collegeListObj){
					  
					  if(divisionSelected == key){
						  
						  hidden_division_code.value = collegeListObj[key];
					  }
				}						
		}
		
		var fullDivisionValue = hidden_division_code.value;
      	var userCWID = hidden_cwid.value;

		$.ajax({

			type: 'GET', 

			url:"/bin/getCollegeList",

			data: {
				  cwid: userCWID,
				  divisionCode: fullDivisionValue
			},

			dataType: 'json',

			success: function(myresponse){               

				if(myresponse.length > 0){
						
						var allCollegArray = [];
						
						for(var allCollegeDetails = 0; allCollegeDetails < myresponse.length; allCollegeDetails++){
								allCollegArray.push(myresponse[allCollegeDetails]);
								all_details_from_division_json.value = JSON.stringify(allCollegArray);
						}

						var collegeListValue = document.querySelector(".college-list select");
						var length1 = collegeListValue.options.length;
						
						for(var b=length1; b>0;b--){
							collegeListValue.options[b] = null;
						}
						
                       for(var m=0; m < myresponse.length; m++){
                          	var opt1 = document.createElement("option");
                         	if(myresponse[m].colleageNameWithCode != undefined && myresponse[m].colleageNameWithCode != null){
                              opt1.value = myresponse[m].colleageNameWithCode;                         
                              opt1.innerHTML = myresponse[m].colleageNameWithCode; 
                              collegeListVal.appendChild(opt1);
                            }
                        }
						
						$.ajax({

								type: 'GET', 

								url:"/bin/getCollegeDeanAndDivisionHeadDetailsLookUp",

								data: {
									  deptID: fullDivisionValue,
									  unionCD: 'M80'
								},

								dataType: 'json',

								success: function(myresponse){               

									if(myresponse.length > 0){
										for(var divisionHeadNameList=0; divisionHeadNameList < myresponse.length; divisionHeadNameList++){
											divisionHeadNamesArray.push(myresponse[divisionHeadNameList].NAME);
											divisionHeadAllDetailsArray.push(myresponse[divisionHeadNameList]);
                                          	division_head_details_json.value = JSON.stringify(divisionHeadAllDetailsArray);
										}
										division_approver_names.items = divisionHeadNamesArray;
                                      	
									}
									/*else{
										showErrorModal("Alert !", "This division does not have any division head");
									}	*/									
								}
						});
                  	   college.enabled = true;
				  	   gifModal.style.display = "none";
				}
				else{
						  showErrorModal("Alert !", "No matching records found");						
						  gifModal.style.display = "none";
					} 					
			},
	  });
	}			 
	else if(this.value === null){
    	gifModal.style.display = "none";
    	division_approver_names.value = "";
      	department_Id.value = null;
  		agency_unit.value = null;
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_college_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_college_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value === null && formSavedStatus.value != "1"){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block"; 
  
      timeKeeper_primary_add.items = "";
      timeKeeper_alternate_add.items = "";
      timeKeeper_approving_official_add.items = "";                            
      student_primary_add.items = "";
      student_alternate_add.items = "";
      approving_official_cd_add.items = "";
      warrant_primary_add.items = "";
      warrant_alternate_add.items = "";
      cms_student_primary_add.items = "";
      cms_student_alternate_add.items = "";
      timeKeeper_primary_delete.items = "";
      timeKeeper_alternate_delete.items = "";
      timeKeeper_approving_official_delete.items = "";
      student_primary_delete.items = "";
      student_alternate_delete.items = "";
      approving_official_cd_delete.items = "";
      warrant_primary_delete.items = "";
      warrant_alternate_delete.items = "";
      cms_student_primary_delete.items = "";
      cms_student_alternate_delete.items = "";
   
  	  all_department_IDs.value = null;
  	 // debugger;
  	  var rowcountRemoveAll = Row1.instanceManager.instanceCount;
  	  //var lastRow = rowcountRemoveAll - 1;
  	 
      for(i=0; i<=rowcountRemoveAll;i++){        
        Row1.instanceManager.removeInstance(Row1.instanceIndex);                
      }   		
  	
    data_table.Row1.department_Id.value = null;
    data_table.Row1.department_Id.items = "";
    data_table.Row1.department_Id.enabled = true;
    data_table.Row1.agency_unit.value = null;
    data_table.Row1.agency_unit.items = "";
  	  
	
  	if(this.value !== null){    	//debugger;
						
        var collegeSelected = this.value;		
		var collegeSelectedValue = collegeSelected.split(" - ");
      	
		/*Start of logic for Scenarios like IT - Internet Technologies */
      	if(collegeSelectedValue.length == 2){
          	var collegeSelectedActualValue = collegeSelectedValue[0].trim();
        }
		else{
          	var collegeSelectedActualValue = collegeSelectedValue[0].trim()+ " - "+collegeSelectedValue[1].trim();
        }
		/*End of logic for Scenarios like IT - Internet Technologies */

	    var deptIDListObj = {};
	    var deptIDListArray = [];	    				
		var collegeDeanArray = [];
      	var collegeDeanAllDetailsArray = [];
		var departmentIDListArray = [];
		
		deptIDListArray = JSON.parse(all_details_from_division_json.value);
		
		for (var departmentIDListValue = 0; departmentIDListValue < deptIDListArray.length; departmentIDListValue++){
				
				deptIDListObj = deptIDListArray[departmentIDListValue];					
				for(var key in deptIDListObj){					
					if(collegeSelectedActualValue == key){                      	
						hidden_college_code.value = deptIDListObj[key].trim();						
					}
               }						
		}
		
		var actualCollegeCodeValue = hidden_college_code.value;  
		var actualDivisionCodeValue = hidden_division_code.value;

		$.ajax({

			type: 'GET', 

			url:"/bin/getDepartmentIDList",

			data: {
				  collegeCode: actualCollegeCodeValue,
				  divisionCode: actualDivisionCodeValue
			},

			dataType: 'json',

			success: function(myresponse){             
				if(myresponse.length > 0){						
					for(var m=0; m < myresponse.length; m++){
						departmentIDListArray.push(myresponse[m].DEPTID);
					}
							//debugger;
							
					department_Id.items = departmentIDListArray;	
						
					  /* $.ajax({

							type: 'GET', 

							url:"/bin/getUsersAndApprovingOfficialListToAdd",

							data: {
									collegeCode: actualCollegeCodeValue,
									divisionCode: actualDivisionCodeValue,
									unionCode: 'M80'
							},

							dataType: 'json',

							success: function(myresponse){  
								
								if(myresponse.length > 0){
									 
									var approvingOfficialUsersToAddArray = [];		
									var approvingOfficialAddNamesArray = [];
									for(var approvingOfficialUserNamesList=0; approvingOfficialUserNamesList<myresponse.length; approvingOfficialUserNamesList++)
									{
										approvingOfficialUsersToAddArray.push(myresponse[approvingOfficialUserNamesList].NAME);
										approvingOfficialAddNamesArray.push(myresponse[approvingOfficialUserNamesList]);
                                      	approving_official_add_names_json.value = JSON.stringify(approvingOfficialAddNamesArray);
										
									}
                                  	timeKeeper_approving_official_add.items = approvingOfficialUsersToAddArray;
									approving_official_cd_add.items = approvingOfficialUsersToAddArray;
                                  	
								}*/
								//else{
				  $.ajax({

						type: 'GET', 

						url:"/bin/getUsersAndApprovingOfficialListToAdd",

						data: {													
								divisionCode: actualDivisionCodeValue,
								unionCode: 'M80'
						},

						dataType: 'json',

						success: function(myresponse){  
							
							if(myresponse.length > 0){
								 
								var approvingOfficialUsersToAddArray = [];		
								var approvingOfficialAddNamesArray = [];
								for(var approvingOfficialUserNamesList=0; approvingOfficialUserNamesList<myresponse.length; approvingOfficialUserNamesList++)
								{
									approvingOfficialUsersToAddArray.push(myresponse[approvingOfficialUserNamesList].NAME);
									approvingOfficialAddNamesArray.push(myresponse[approvingOfficialUserNamesList]);
									approving_official_add_names_json.value = JSON.stringify(approvingOfficialAddNamesArray);
									
								}
								timeKeeper_approving_official_add.items = approvingOfficialUsersToAddArray;
								approving_official_cd_add.items = approvingOfficialUsersToAddArray;
								
							}
						},
				   });
				   
				   /* Start of the scenario for VP Academic Affairs - NP where the result is returning 3335 users to be added */
				   if(actualDivisionCodeValue == 10237){
					    getUserListToAddWithDivisonAndCollege();
				   }
				   else {
						getUserListToAddWithDivison();
				   }
				   /* End of the scenario for VP Academic Affairs - NP where the result is returning 3335 users to be added */
							 
					getCollegeDeanAndDivisionHeadDetails();  /* Function to get the college dean list */
							 
				    gifModal.style.display = "none";
				}
				else{
					  showErrorModal("Alert !", "No matching records found");						
					  gifModal.style.display = "none";
				} 					
			},
	  });
	}			 
	else if(this.value === null){
    	gifModal.style.display = "none";
    	college_approver_names.value = "";
      	department_Id.value = null;
  		agency_unit.value = null; 
		
  }
}



function getUserListToAddWithDivison(){
	
	$.ajax({

			type: 'GET', 

			url:"/bin/getUsersAndApprovingOfficialListToAdd",

			data: {
					//collegeCode: actualCollegeCodeValue,
					divisionCode: actualDivisionCodeValue
			},

			dataType: 'json',

			success: function(myresponse){  
				
				if(myresponse.length > 0){
					 
					var usersToAddArray = [];
					var timeKeeperAddNamesArray = [];
					for(var userNamesList=0; userNamesList<myresponse.length; userNamesList++)
					{
						usersToAddArray.push(myresponse[userNamesList].NAME);
						timeKeeperAddNamesArray.push(myresponse[userNamesList]);
						timeKeeper_add_names_json.value = JSON.stringify(timeKeeperAddNamesArray);
					}
					timeKeeper_primary_add.items = usersToAddArray;
					timeKeeper_alternate_add.items = usersToAddArray;
					student_primary_add.items = usersToAddArray;
					student_alternate_add.items = usersToAddArray;
					warrant_primary_add.items = usersToAddArray;
					warrant_alternate_add.items = usersToAddArray;
					cms_student_primary_add.items = usersToAddArray;
					cms_student_alternate_add.items = usersToAddArray;	
				}
			},
	   }); 	
}

function getUserListToAddWithDivisonAndCollege(){
	
	$.ajax({

			type: 'GET', 

			url:"/bin/getUsersAndApprovingOfficialListToAdd",

			data: {
					collegeCode: actualCollegeCodeValue,
					divisionCode: actualDivisionCodeValue
			},

			dataType: 'json',

			success: function(myresponse){  
				
				if(myresponse.length > 0){
					 
					var usersToAddArray = [];
					var timeKeeperAddNamesArray = [];
					for(var userNamesList=0; userNamesList<myresponse.length; userNamesList++)
					{
						usersToAddArray.push(myresponse[userNamesList].NAME);
						timeKeeperAddNamesArray.push(myresponse[userNamesList]);
						timeKeeper_add_names_json.value = JSON.stringify(timeKeeperAddNamesArray);
					}
					timeKeeper_primary_add.items = usersToAddArray;
					timeKeeper_alternate_add.items = usersToAddArray;
					student_primary_add.items = usersToAddArray;
					student_alternate_add.items = usersToAddArray;
					warrant_primary_add.items = usersToAddArray;
					warrant_alternate_add.items = usersToAddArray;
					cms_student_primary_add.items = usersToAddArray;
					cms_student_alternate_add.items = usersToAddArray;	
				}
			},
	   }); 	
}

function getCollegeDeanAndDivisionHeadDetails(){
	
	 $.ajax({

		type: 'GET', 
		url:"/bin/getCollegeDeanAndDivisionHeadDetailsLookUp",
		data: {
			  collegeCode: actualCollegeCodeValue
			  
		},

		dataType: 'json',
		success: function(myresponse){              
			if(myresponse.length > 0){
				for(var collegeDeanList=0; collegeDeanList < myresponse.length; collegeDeanList++){
						collegeDeanArray.push(myresponse[collegeDeanList].NAME);
				  
						collegeDeanAllDetailsArray.push(myresponse[collegeDeanList]);
						college_dean_details_json.value = JSON.stringify(collegeDeanAllDetailsArray);
				}
				college_approver_names.items = collegeDeanArray; 
				//college_approver_names.items = ["Joseph Luzzi=Joseph Luzzi"];
			}
		  /*	else{
				showErrorModal("Alert !", "This college does not have any college dean");
			}	*/		
		}													
	});	
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_department_Id_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_department_Id_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');
//debugger;

if(stage_indicator.value === null){
  	deparment_approver_names.items = "";
  
  	var deptIDValue = this.value;
  	var isDuplicate = false;
  	
  	if(all_department_IDs.value && formSavedStatus.value != "1"){      	
    	if(all_department_IDs.value.indexOf(deptIDValue) != -1){		
      	showErrorModal("Alert !", "Duplicate IDs are not allowed, Please add a different one");
      	isDuplicate = true;
      	this.value = null;      	
    }
    else{
      	if(deptIDValue){
        	all_department_IDs.value = all_department_IDs.value + "," + deptIDValue;
      }
    }
  }
  else{
    all_department_IDs.value = deptIDValue;	
  }
  
  	if(this.value !== null){

        gifModal.style.display = "block"; 
      	agency_unit.enabled = true;
      	//agency_unit.value = null;
      
      	hidden_department_ID.value = this.value;

        var totalRowCountForAddNames = Row1.instanceManager.instanceCount;
        var lastRowForAgencyUnit = totalRowCountForAddNames - 1;

        var deptValueForAddNames = "";
        var actualDeptIDValueForAddNames = "";
      	var departmentIDtoCheckDuplicate = []; 		
		var departmentIDtoCheckDuplicateFlag = false;
      
        for(var ab = 0; ab < totalRowCountForAddNames ; ab++){
            deptValueForAddNames = deptValueForAddNames +Row1.instanceManager.instances[ab].department_Id.value+ ",";
            actualDeptIDValueForAddNames = deptValueForAddNames.replace(/,(\s+)?$/, '');             	
        }
		
		//console.log("actualDeptIDValueForAddNames= " + actualDeptIDValueForAddNames.length);
      
      	for(var bc = 0; bc < lastRowForAgencyUnit ; bc++){ 
          	departmentIDtoCheckDuplicate.push(Row1.instanceManager.instances[bc].department_Id.value);
        }
		//console.log("departmentIDtoCheckDuplicate= " + departmentIDtoCheckDuplicate.length);
		/*for(var x=0; x<departmentIDtoCheckDuplicate.length; x++){
				if(this.value == departmentIDtoCheckDuplicate[x]){
					departmentIDtoCheckDuplicateFlag = true;
				}				
		}
      	
		if(departmentIDtoCheckDuplicateFlag == false){*/
          
				var deptValue = this.value;		

				$.ajax({

				  type: 'GET', 

				  url:"/bin/getDepartmentIDList", 

				  data: {
						deptID: deptValue
				  },

				  dataType: 'json',

				  success: function(myresponse){               
						  
						  if(myresponse.length > 0){ 
								
								for(a=0; a < myresponse.length; a++){
									Row1.instanceManager.instances[lastRowForAgencyUnit].agency_unit.items = myresponse[a].csuUnitAndAgency;
								}                                              

								if(departmentIDtoCheckDuplicate.length == 0){

									$.ajax({

										  type: 'GET', 
										  url:"/bin/getDepartmentHeadDetailsLookUp",
										  data: {
												deptID: actualDeptIDValueForAddNames,
												unionCD: 'M80'
										  },

										  dataType: 'json',

										  success: function(myresponse){

												if(myresponse.length > 0){				  
													   
													var departmentHeadDetailsArray = []; 
													var departmentHeadAllDetailsArray = [];
													for(var n=0; n < myresponse.length; n++){
															departmentHeadDetailsArray.push(myresponse[n].NAME);                                         		
															departmentHeadAllDetailsArray.push(myresponse[n]);
													} 
													deparment_approver_names.items = departmentHeadDetailsArray;
													department_head_details_json.value = JSON.stringify(departmentHeadAllDetailsArray);	
													//console.log("getDepartmentHeadDetailsLookUp with single department ID = ");
												}
												else{
													
														var divisionCode = hidden_division_code.value;
														getDepartmentHeadDetailsWithDivisionCode(divisionCode);
														//console.log("getDepartmentHeadDetailsLookUp with division Code first = ");
												}

												gifModal.style.display = "none"; 
									  }						  
								  });
								}
								else{
													
										var divisionCode = hidden_division_code.value;
										getDepartmentHeadDetailsWithDivisionCode(divisionCode);
										//console.log("getDepartmentHeadDetailsLookUp with division Code second = ");
								}
							
							  gifModal.style.display = "none"; 
						  }
						  else{
								showErrorModal("Alert !", "No agency unit found for this department ID");                         
								gifModal.style.display = "none";
						  }				
					},
				});
		/*}
		else{
				showErrorModal("Alert !", "Duplicate department IDs are not allowed"); 
				gifModal.style.display = "none";
				this.value = null;
			}*/
	  }
	  else{
        	if(stage_indicator.value === null){ 
                agency_unit.value = null;        
                deparment_approver_names.value = null; 
                gifModal.style.display = "none";
            }
	  }
}



function getDepartmentHeadDetailsWithDivisionCode(divisionCode){
	
	$.ajax({
			  type: 'GET', 
			  url:"/bin/getDepartmentHeadDetailsLookUp",
			  data: {
					divisonCode: divisionCode,
					unionCD: 'M80'
			  },

			  dataType: 'json',

			  success: function(myresponse){

					if(myresponse.length > 0){				  
						   
						var departmentHeadDetailsArray = []; 
						var departmentHeadAllDetailsArray = [];
						for(var n=0; n < myresponse.length; n++){
								departmentHeadDetailsArray.push(myresponse[n].NAME);                                         		
								departmentHeadAllDetailsArray.push(myresponse[n]);
						} 
						deparment_approver_names.items = departmentHeadDetailsArray;
						department_head_details_json.value = JSON.stringify(departmentHeadAllDetailsArray);												
						}

						gifModal.style.display = "none"; 
			  }						  
	  });
}


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_agency_unit_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_agency_unit_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

var gifModal = document.getElementById('gifModal');
if((stage_indicator.value === null)){

    gifModal.style.display = "block";
 	
  	if(this.value !== null){
		
      	var deptValueForDeleteNames = "";
        var actualDeptIDValueForDeleteNames = "";
      	var agencyUnitValueForDeleteNames = "";
        var actualAgencyUnitValueForDeleteNames = "";
      	var agencyUnitValue = "";
      	var allUnitsValue = "";
      	var agencyValue = "";
      	//debugger;
      	var totalRowCountForDeleteNames = Row1.instanceManager.instanceCount;
      	//console.log("rowcount= " + totalRowCountForDeleteNames);

        for(var ab = 0; ab < totalRowCountForDeleteNames ; ab++){
            deptValueForDeleteNames = deptValueForDeleteNames + Row1.instanceManager.instances[ab].department_Id.value+ ",";
            actualDeptIDValueForDeleteNames = deptValueForDeleteNames.replace(/,(\s+)?$/, '');    
          
          	agencyUnitValueForDeleteNames = Row1.instanceManager.instances[ab].agency_unit.value.split(" - ");          	
          	agencyValue = agencyUnitValueForDeleteNames[1];         	                  	
          	allUnitsValue = allUnitsValue + "," + agencyValue;  
          	//console.log("allUnitsValue= " + allUnitsValue);
          	actualAgencyUnitValueForDeleteNames = allUnitsValue.substring(1);
          	
        }

		$.ajax({

		  type: 'GET',
		  
		  url:"/bin/getDeleteColumnNamesList",
		  
		  data: {
				divisionCode: hidden_division_code.value, 
				collegeCode: hidden_college_code.value,
				//departmentID: hidden_department_ID.value, 
				departmentID: actualDeptIDValueForDeleteNames,
				csuUnit: actualAgencyUnitValueForDeleteNames,
				deleteFlag: 'N'
		  }, 
		  
		  dataType: 'json',

		  success: function(myresponse){               
			//debugger;
			if(myresponse.length > 0){
				
				var empTimeKeeperPrimaryArray = [];
              	var empTimeKeeperPrimaryValue = "";
				var empTimeKeeperAlternateArray = [];
				var timeKeeperApprovingOfficialArray = [];
				var studentTimeKeeperPrimaryArray = [];
				var studentTimeKeeperAlternateArray = [];
				var approvingOfficialCDArray = [];
				var warrantPrimaryArray = [];
				var warrantAlternateArray = [];
				var cmsStudentPrimaryArray = [];
				var cmsStudentAlternateArray = []; 
              
              	var result = "";              	

				for(var a=0; a < myresponse.length; a++){
				  
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "EMP_TK_PRI"){
                      	  
                           	empTimeKeeperPrimaryArray.push(myresponse[a].NAME);
							result = checkIfEqual(empTimeKeeperPrimaryArray);
                      		//console.log("result from primary  timekeeper = " + result); 
							//debugger;
							if(totalRowCountForDeleteNames == 1){
								timeKeeper_primary_delete.items = empTimeKeeperPrimaryArray;
								timeKeeper_primary_delete.enabled = true;
							}   							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	timeKeeper_primary_delete.items = empTimeKeeperPrimaryArray[0];
                             	FacultyStaffAttendancePrimaryPanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var primaryTimekeeperPanel = document.querySelector(".primaryTimekeperClass");
                             	primaryTimekeeperPanel.style.backgroundColor = '#F5F5F5';FacultyStaffAttendancePrimaryPanel.enabled = false;
								MessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								timeKeeper_primary_delete.items = empTimeKeeperPrimaryArray;
								timeKeeper_primary_delete.enabled = true;	
							}
					}
					
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "EMP_TK_ALT"){
							empTimeKeeperAlternateArray.push(myresponse[a].NAME);
							result = checkIfEqual(empTimeKeeperAlternateArray);
                      		//console.log("result from alternate timekeeper= " + result);

							if(totalRowCountForDeleteNames == 1){
								timeKeeper_alternate_delete.items = empTimeKeeperAlternateArray;
								timeKeeper_alternate_delete.enabled = true;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	timeKeeper_alternate_delete.items = empTimeKeeperAlternateArray[0];
                             	FacultyStaffAttendanceAlternatePanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var alternateTimekepeerPanel = document.querySelector(".alternateTimekeeperClass");
                             	alternateTimekepeerPanel.style.backgroundColor = '#F5F5F5';
                              	FacultyStaffAttendanceAlternatePanel.enabled = false;
								MessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								timeKeeper_alternate_delete.items = empTimeKeeperAlternateArray;
								timeKeeper_alternate_delete.enabled = true;	
							}
					}
				
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "EMP_AP_OFF"){
							timeKeeperApprovingOfficialArray.push(myresponse[a].NAME);	
                      		result = checkIfEqual(timeKeeperApprovingOfficialArray);
                      		//console.log("result from staff approving official= " + result); 
							
							if(totalRowCountForDeleteNames == 1){
								timeKeeper_approving_official_delete.items = timeKeeperApprovingOfficialArray;
								timeKeeper_approving_official_delete.enabled = true;
							}							
						    else if((result == true) && (totalRowCountForDeleteNames > 1)){								
								timeKeeper_approving_official_delete.items = timeKeeperApprovingOfficialArray[0];
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = true;								
						    }
						    else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var approvingOfficialPanel = document.querySelector(".staffApprovingOfficialClass");
								approvingOfficialPanel.style.backgroundColor = '#F5F5F5';
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
								MessageText.visible = true;
							}
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								timeKeeper_approving_official_delete.items = timeKeeperApprovingOfficialArray;
								timeKeeper_approving_official_delete.enabled = true;
							}
					}	

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_TK_PRI"){
							studentTimeKeeperPrimaryArray.push(myresponse[a].NAME);	 
							result = checkIfEqual(studentTimeKeeperPrimaryArray);
                      		//console.log("result from primary student timekeeper= " + result); 
								
							if(totalRowCountForDeleteNames == 1){
								student_primary_delete.items = studentTimeKeeperPrimaryArray;
								student_primary_delete.enabled = true;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	student_primary_delete.items = studentTimeKeeperPrimaryArray[0];
                             	StudentAttendancePrimaryPanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var studentPrimaryTimekeeperPanel = document.querySelector(".primaryStudentTimekeeperClass");
                             	studentPrimaryTimekeeperPanel.style.backgroundColor = '#F5F5F5';
                              	StudentAttendancePrimaryPanel.enabled = false;
								StudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								student_primary_delete.items = studentTimeKeeperPrimaryArray;
								student_primary_delete.enabled = true;	
							}
					}
				
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_TK_ALT"){
							studentTimeKeeperAlternateArray.push(myresponse[a].NAME);
                      		result = checkIfEqual(studentTimeKeeperAlternateArray);
                      		//console.log("result from alternate student timekeeper= " + result);
							
							if(totalRowCountForDeleteNames == 1){
								student_alternate_delete.items = studentTimeKeeperAlternateArray;
								student_alternate_delete.enabled = true;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	student_alternate_delete.items = studentTimeKeeperAlternateArray[0];
                             	StudentAttendanceAlternatePanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var studentAlternateTimekeeperPanel = document.querySelector(".alternateStudentTimekeeperClass");
                             	studentAlternateTimekeeperPanel.style.backgroundColor = '#F5F5F5';
                              	StudentAttendanceAlternatePanel.enabled = false;
								StudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								student_alternate_delete.items = studentTimeKeeperAlternateArray;
								student_alternate_delete.enabled = true;	
							}
					}
					
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_AP_OFF"){
							approvingOfficialCDArray.push(myresponse[a].NAME); 
                      		result = checkIfEqual(approvingOfficialCDArray);
                      		//console.log("result from student approving official timekeeper= " + result);
							
							if(totalRowCountForDeleteNames == 1){
								approving_official_cd_delete.items = approvingOfficialCDArray;
								approving_official_cd_delete.enabled = true;
							}  							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){							
                             	approving_official_cd_delete.items = approvingOfficialCDArray[0];
                             	StudentAttendanceApprovingOfficialCDPanel.enabled = true;							
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var studentApprovingOfficialPanel = document.querySelector(".studentApprovingOfficialClass");
                             	studentApprovingOfficialPanel.style.backgroundColor = '#F5F5F5';
                              	StudentAttendanceApprovingOfficialCDPanel.enabled = false;
								StudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								approving_official_cd_delete.items = approvingOfficialCDArray;
								approving_official_cd_delete.enabled = true;	
							}
					}										

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "WRC_WC_PRI"){				
							warrantPrimaryArray.push(myresponse[a].NAME);	
                      		result = checkIfEqual(warrantPrimaryArray);
                      		//console.log("result from primary warrant= " + result);
							
							if(totalRowCountForDeleteNames == 1){
								warrant_primary_delete.items = warrantPrimaryArray;
								warrant_primary_delete.enabled = true;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	warrant_primary_delete.items = warrantPrimaryArray[0];
                             	WarrantCoordinatorPrimaryPanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var primaryWarrantCoordinatorPanel = document.querySelector(".primaryWarrantClass");
                             	primaryWarrantCoordinatorPanel.style.backgroundColor = '#F5F5F5';
                              	WarrantCoordinatorPrimaryPanel.enabled = false;
								WarrantMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								warrant_primary_delete.items = warrantPrimaryArray;
								warrant_primary_delete.enabled = true;	
							}
					}
				
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "WRC_WC_ALT"){				
							warrantAlternateArray.push(myresponse[a].NAME);			
                      		result = checkIfEqual(warrantAlternateArray);
                      		//console.log("result from alternate warrant= " + result);
							
							if(totalRowCountForDeleteNames == 1){
								warrant_alternate_delete.items = warrantAlternateArray;
								warrant_alternate_delete.enabled = true;
							}    							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	warrant_alternate_delete.items = warrantAlternateArray[0];
                             	WarrantCoordinatorAlternatePanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var alternateWarrantCoordinatorPanel = document.querySelector(".alternateWarrantClass");
                             	alternateWarrantCoordinatorPanel.style.backgroundColor = '#F5F5F5';
                              	WarrantCoordinatorAlternatePanel.enabled = false;
								WarrantMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								warrant_alternate_delete.items = warrantAlternateArray;
								warrant_alternate_delete.enabled = true;	
							}
					}											

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_CT_AP_PRI"){
							cmsStudentPrimaryArray.push(myresponse[a].NAME);
                      		result = checkIfEqual(cmsStudentPrimaryArray);
                      		//console.log("result from cms primary= " + result);
							
							if(totalRowCountForDeleteNames == 1){
								cms_student_primary_delete.items = cmsStudentPrimaryArray;	
								cms_student_primary_delete.enabled = true;
							}   							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	cms_student_primary_delete.items = cmsStudentPrimaryArray[0];
                             	CMSStudentPrimaryPanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var primaryCMSStudentPanel = document.querySelector(".primaryCMSStudentClass");
                             	primaryCMSStudentPanel.style.backgroundColor = '#F5F5F5';
                              	CMSStudentPrimaryPanel.enabled = false;
								CMSStudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								cms_student_primary_delete.items = cmsStudentPrimaryArray;	
								cms_student_primary_delete.enabled = true;	
							}
					}

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_CT_AP_ALT"){
							cmsStudentAlternateArray.push(myresponse[a].NAME);
                      		result = checkIfEqual(cmsStudentAlternateArray);
                      		//console.log("result from alternate cms student= " + result);
							
							if(totalRowCountForDeleteNames == 1){
								cms_student_alternate_delete.items = cmsStudentAlternateArray;
								cms_student_alternate_delete.enabled = true;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	cms_student_alternate_delete.items = cmsStudentAlternateArray[0];
                             	CMSStudentAlternatePanel.enabled = true;								
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								var alternateCMSStudentPanel = document.querySelector(".alternateCMSStudentClass");
                             	alternateCMSStudentPanel.style.backgroundColor = '#F5F5F5';
                              	CMSStudentAlternatePanel.enabled = false;
								CMSStudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								cms_student_alternate_delete.items = cmsStudentAlternateArray;
								cms_student_alternate_delete.enabled = true;
							}
					}
				}																			
				gifModal.style.display = "none";   
				//department_Id.enabled = true;
				timeKeeper_primary_add.enabled = true;
				timeKeeper_alternate_add.enabled = true;
				timeKeeper_approving_official_add.enabled = true;                                    
				student_primary_add.enabled = true;
				student_alternate_add.enabled = true;
				approving_official_cd_add.enabled = true;
				warrant_primary_add.enabled = true;
				warrant_alternate_add.enabled = true;
				cms_student_primary_add.enabled = true;
				cms_student_alternate_add.enabled = true;
			  
			} 
			else{
				gifModal.style.display = "none"; 
				//department_Id.enabled = true;
				timeKeeper_primary_add.enabled = true;
				timeKeeper_alternate_add.enabled = true;
				timeKeeper_approving_official_add.enabled = true;                                    
				student_primary_add.enabled = true;
				student_alternate_add.enabled = true;
				approving_official_cd_add.enabled = true;
				warrant_primary_add.enabled = true;
				warrant_alternate_add.enabled = true;
				cms_student_primary_add.enabled = true;
				cms_student_alternate_add.enabled = true;
			}
		  },
		});
	}
	else{
    	//this.value = null;
  		gifModal.style.display = "none"; 
	}
}
else{
    	//this.value = null;
  		gifModal.style.display = "none"; 
}

function checkIfEqual(empTimeKeeperPrimaryArray){  	
  	var empTimeKeeperPrimary = empTimeKeeperPrimaryArray;
  	var isEqual;
  
  	for(x=0; x < empTimeKeeperPrimary.length - 1;x++){      
        if (empTimeKeeperPrimary[x] == empTimeKeeperPrimary[x+1]){
            isEqual = true;            
        }
      	else{
          	isEqual = false;
        }
	}
  	return isEqual;
}
 
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_agency_unit_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_agency_unit_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){
  	department_Id.enabled = false;
}
console.log("dept ID is= " + department_Id.enabled);
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_add_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_add_click0 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value === null){
	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block"; 
	
	var rowcount = Row1.instanceManager.instanceCount;
	var lastRow = rowcount - 1;
	
	if(Row1.instanceManager.instances[lastRow].agency_unit.value !== null){
	
		data_table.Row1.instanceManager.addInstance();
		rowcount = Row1.instanceManager.instanceCount;
		lastRow = rowcount - 1;
		
		var departmentIDListArray = [];
		var actualCollegeCodeValue = hidden_college_code.value;  
		var actualDivisionCodeValue = hidden_division_code.value;

		$.ajax({

			type: 'GET', 
			url:"/bin/getDepartmentIDList",
			data: {
				  collegeCode: actualCollegeCodeValue,
				  divisionCode: actualDivisionCodeValue
			},
			dataType: 'json',

			success: function(myresponse){               
				
				if(myresponse.length > 0){
						
						for(var m=0; m < myresponse.length; m++){
								departmentIDListArray.push(myresponse[m].DEPTID);
						}
						
						Row1.instanceManager.instances[lastRow].department_Id.items = departmentIDListArray;					 
						gifModal.style.display = "none";
				}
				else{
                        showErrorModal("Alert !", "No matching records found");						
                        gifModal.style.display = "none";
					} 					
			},
	  });	
	}		  
	else{
		showErrorModal("Alert !", "Please select Agy/Unit before adding more department IDs");
		gifModal.style.display = "none";
	}
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_remove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_remove_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null){ 	
	var gifModal = document.getElementById('gifModal');
	//debugger;
	
  	RemoveButtonFlag.value = 1;     //department ID & Agency Unit fields "undefined" when use remove button. This is to get the submit action work.
  
    var rowCountToRemove = Row1.instanceManager.instanceCount;
    var indexValue = rowCountToRemove - 1;   
  
	var lastRowDeptID = Row1.instanceManager.instances[rowCountToRemove-1]._children[0].value;
	if(lastRowDeptID){
		if(all_department_IDs.value){
			all_department_IDs.value = all_department_IDs.value.replace(lastRowDeptID,"");
		}	
	}  
  	//console.log("all_department_IDs.value= " + all_department_IDs.value);
  	data_table.Row1.instanceManager.removeInstance(indexValue);
  	  
    if(rowCountToRemove == 1){

      	var collegeListVal = document.querySelector(".college-list select");
        var length1 = collegeListVal.options.length;		

        for(var b=length1; b>0;b--){
          collegeListVal.options[b] = null;
        }
      
        data_table.Row1.department_Id.value = null;
      	data_table.Row1.department_Id.items = "";
      	data_table.Row1.department_Id.enabled = true;
      	data_table.Row1.agency_unit.value = null;
        data_table.Row1.agency_unit.items = "";      
      
        timeKeeper_primary_add.items = "";
        timeKeeper_alternate_add.items = "";
        timeKeeper_approving_official_add.items = "";                                 
        student_primary_add.items = "";
        student_alternate_add.items = "";
        approving_official_cd_add.items = "";
        warrant_primary_add.items = "";
        warrant_alternate_add.items = "";
        cms_student_primary_add.items = "";
        cms_student_alternate_add.items = "";
      	timeKeeper_primary_delete.items = "";
        timeKeeper_alternate_delete.items = "";
        timeKeeper_approving_official_delete.items = "";
        student_primary_delete.items = "";
        student_alternate_delete.items = "";
        approving_official_cd_delete.items = "";	
        warrant_primary_delete.items = "";
        warrant_alternate_delete.items = "";
        cms_student_primary_delete.items = "";
        cms_student_alternate_delete.items = "";
      
      	getCollegeList();
		
		gifModal.style.display = "none";
    }
	else{   
 
			var totalRowCountForAddNames = Row1.instanceManager.instanceCount;
			var lastRowForAgencyUnit = totalRowCountForAddNames - 1;

			var deptValueForAddNames = "";
			var actualDeptIDValueForAddNames = "";
			var departmentIDtoCheckDuplicate = [];
			for(ab = 0; ab < totalRowCountForAddNames ; ab++){

				deptValueForAddNames = deptValueForAddNames +Row1.instanceManager.instances[ab].department_Id.value+ ",";
				actualDeptIDValueForAddNames = deptValueForAddNames.replace(/,(\s+)?$/, ''); 
				//console.log("values are= " + Row1.instanceManager.instances[ab].department_Id.value);
				departmentIDtoCheckDuplicate.push(Row1.instanceManager.instances[ab].department_Id.value);
			}
			//debugger;
			if(departmentIDtoCheckDuplicate.length == 1){                                            

				$.ajax({

				  type: 'GET', 
				  url:"/bin/getDepartmentHeadDetailsLookUp",
				  data: {
					deptID: actualDeptIDValueForAddNames,
					unionCD: 'M80'
				  },

				  dataType: 'json',

				  success: function(myresponse){
					
					if(myresponse.length > 0){				  

					  var departmentHeadDetailsArray = []; 
					  var departmentHeadAllDetailsArray = [];
					  for(var n=0; n < myresponse.length; n++){
						departmentHeadDetailsArray.push(myresponse[n].NAME);                                         		
						departmentHeadAllDetailsArray.push(myresponse[n]);
					  } 
					  deparment_approver_names.items = departmentHeadDetailsArray;
					  department_head_details_json.value = JSON.stringify(departmentHeadAllDetailsArray);                          
					}
					else{
						//showErrorModal("Alet !", "No matching records found"); 
						if(rowCountToRemove != 1){
							var divisionCode = hidden_division_code.value;
							getDepartmentHeadDetailsWithDivisionCode(divisionCode);
							
						}
						gifModal.style.display = "none";
					}	
					getDeleteNames();     //Calling the method to get all the timekeepers in the DELETE LIST
					gifModal.style.display = "none"; 
				  }						  
				});
			}
			else{	
					getDeleteNames();     //Calling the method to get all the timekeepers in the DELETE LIST
					if(rowCountToRemove != 1){
						var divisionCode = hidden_division_code.value;
						getDepartmentHeadDetailsWithDivisionCode(divisionCode);
						
					}
			}	
	}
}



function getDepartmentHeadDetailsWithDivisionCode(divisionCode){
	
	$.ajax({
			  type: 'GET', 
			  url:"/bin/getDepartmentHeadDetailsLookUp",
			  data: {
					divisonCode: divisionCode,
					unionCD: 'M80'
			  },

			  dataType: 'json',

			  success: function(myresponse){

					if(myresponse.length > 0){				  
						   
						var departmentHeadDetailsArray = []; 
						var departmentHeadAllDetailsArray = [];
						for(var n=0; n < myresponse.length; n++){
								departmentHeadDetailsArray.push(myresponse[n].NAME);                                         		
								departmentHeadAllDetailsArray.push(myresponse[n]);
						} 
						deparment_approver_names.items = departmentHeadDetailsArray;
						department_head_details_json.value = JSON.stringify(departmentHeadAllDetailsArray);												
						}

						gifModal.style.display = "none"; 
			  }						  
	  });
}


function getDeleteNames(){
	var gifModal = document.getElementById('gifModal');
	if((stage_indicator.value === null)){

		gifModal.style.display = "block";
			
		var deptValueForDeleteNames = "";
		var actualDeptIDValueForDeleteNames = "";
		var agencyUnitValueForDeleteNames = "";
		var actualAgencyUnitValueForDeleteNames = "";
		var agencyUnitValue = "";
		var allUnitsValue = "";
		var agencyValue = "";
		//debugger;
		var totalRowCountForDeleteNames = Row1.instanceManager.instanceCount;	

		for(var ab = 0; ab < totalRowCountForDeleteNames ; ab++){
			deptValueForDeleteNames = deptValueForDeleteNames + Row1.instanceManager.instances[ab].department_Id.value+ ",";
			actualDeptIDValueForDeleteNames = deptValueForDeleteNames.replace(/,(\s+)?$/, '');    
		  
			agencyUnitValueForDeleteNames = Row1.instanceManager.instances[ab].agency_unit.value.split(" - ");          	
			agencyValue = agencyUnitValueForDeleteNames[1];         	                  	
			allUnitsValue = allUnitsValue + "," + agencyValue;  
			//console.log("allUnitsValue= " + allUnitsValue);
			actualAgencyUnitValueForDeleteNames = allUnitsValue.substring(1);
			
		}

		$.ajax({

		  type: 'GET',
		  
		  url:"/bin/getDeleteColumnNamesList",
		  
		  data: {
				divisionCode: hidden_division_code.value, 
				collegeCode: hidden_college_code.value,
				//departmentID: hidden_department_ID.value, 
				departmentID: actualDeptIDValueForDeleteNames,
				csuUnit: actualAgencyUnitValueForDeleteNames,
				deleteFlag: 'N'
		  }, 
		  
		  dataType: 'json',

		  success: function(myresponse){               
			//debugger;
			if(myresponse.length > 0){
				
				var empTimeKeeperPrimaryArray = [];
				var empTimeKeeperPrimaryValue = "";
				var empTimeKeeperAlternateArray = [];
				var timeKeeperApprovingOfficialArray = [];
				var studentTimeKeeperPrimaryArray = [];
				var studentTimeKeeperAlternateArray = [];
				var approvingOfficialCDArray = [];
				var warrantPrimaryArray = [];
				var warrantAlternateArray = [];
				var cmsStudentPrimaryArray = [];
				var cmsStudentAlternateArray = []; 
			  
				var result = "";              	

				for(var a=0; a < myresponse.length; a++){
				  
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "EMP_TK_PRI"){
                      	  
                           	empTimeKeeperPrimaryArray.push(myresponse[a].NAME);
							result = checkIfEqual(empTimeKeeperPrimaryArray);
                      		//console.log("result from primary  timekeeper = " + result); 
							var primaryTimekeeperPanel = document.querySelector(".primaryTimekeperClass");
							
							if(totalRowCountForDeleteNames == 1){
								timeKeeper_primary_delete.items = empTimeKeeperPrimaryArray;
								timeKeeper_primary_delete.enabled = true;
								primaryTimekeeperPanel.style.backgroundColor = null;FacultyStaffAttendancePrimaryPanel.enabled = true;
								MessageText.visible = false;
							}   							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	timeKeeper_primary_delete.items = empTimeKeeperPrimaryArray[0];
                             	FacultyStaffAttendancePrimaryPanel.enabled = true;	
								primaryTimekeeperPanel.style.backgroundColor = null;FacultyStaffAttendancePrimaryPanel.enabled = true;
								MessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
                             	primaryTimekeeperPanel.style.backgroundColor = '#F5F5F5';FacultyStaffAttendancePrimaryPanel.enabled = false;
								MessageText.visible = true;								
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								timeKeeper_primary_delete.items = empTimeKeeperPrimaryArray;
								timeKeeper_primary_delete.enabled = true;	
								primaryTimekeeperPanel.style.backgroundColor = null;FacultyStaffAttendancePrimaryPanel.enabled = true;
								MessageText.visible = false;
							}
					}
					
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "EMP_TK_ALT"){
							empTimeKeeperAlternateArray.push(myresponse[a].NAME);
							result = checkIfEqual(empTimeKeeperAlternateArray);
                      		//console.log("result from alternate timekeeper= " + result);
							var alternateTimekepeerPanel = document.querySelector(".alternateTimekeeperClass");

							if(totalRowCountForDeleteNames == 1){
								timeKeeper_alternate_delete.items = empTimeKeeperAlternateArray;
								timeKeeper_alternate_delete.enabled = true;
								alternateTimekepeerPanel.style.backgroundColor = null;
                              	FacultyStaffAttendanceAlternatePanel.enabled = true;
								MessageText.visible = false;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	timeKeeper_alternate_delete.items = empTimeKeeperAlternateArray[0];
                             	FacultyStaffAttendanceAlternatePanel.enabled = true;
								alternateTimekepeerPanel.style.backgroundColor = null;
                              	FacultyStaffAttendanceAlternatePanel.enabled = true;
								MessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
                             	alternateTimekepeerPanel.style.backgroundColor = '#F5F5F5';
                              	FacultyStaffAttendanceAlternatePanel.enabled = false;
								MessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								timeKeeper_alternate_delete.items = empTimeKeeperAlternateArray;
								timeKeeper_alternate_delete.enabled = true;
								alternateTimekepeerPanel.style.backgroundColor = null;
                              	FacultyStaffAttendanceAlternatePanel.enabled = true;
								MessageText.visible = false;
							}
					}
				
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "EMP_AP_OFF"){
							timeKeeperApprovingOfficialArray.push(myresponse[a].NAME);	
                      		result = checkIfEqual(timeKeeperApprovingOfficialArray);
                      		//console.log("result from staff approving official= " + result); 
							var approvingOfficialPanel = document.querySelector(".staffApprovingOfficialClass");
							
							if(totalRowCountForDeleteNames == 1){
								timeKeeper_approving_official_delete.items = timeKeeperApprovingOfficialArray;
								timeKeeper_approving_official_delete.enabled = true;
								approvingOfficialPanel.style.backgroundColor = null;
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = true;
								MessageText.visible = false;
							}							
						    else if((result == true) && (totalRowCountForDeleteNames > 1)){								
								timeKeeper_approving_official_delete.items = timeKeeperApprovingOfficialArray[0];
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = true;
								approvingOfficialPanel.style.backgroundColor = null;
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = true;
								MessageText.visible = false;								
						    }
						    else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
								approvingOfficialPanel.style.backgroundColor = '#F5F5F5';
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = false;
								MessageText.visible = true;
							}
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								timeKeeper_approving_official_delete.items = timeKeeperApprovingOfficialArray;
								timeKeeper_approving_official_delete.enabled = true;
								approvingOfficialPanel.style.backgroundColor = null;
								FacultyStaffAttendanceApprovingOfficialPanel.enabled = true;
								MessageText.visible = false;
							}
					}	

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_TK_PRI"){
							studentTimeKeeperPrimaryArray.push(myresponse[a].NAME);	 
							result = checkIfEqual(studentTimeKeeperPrimaryArray);
                      		//console.log("result from primary student timekeeper= " + result); 
							var studentPrimaryTimekeeperPanel = document.querySelector(".primaryStudentTimekeeperClass");
								
							if(totalRowCountForDeleteNames == 1){
								student_primary_delete.items = studentTimeKeeperPrimaryArray;
								student_primary_delete.enabled = true;
								studentPrimaryTimekeeperPanel.style.backgroundColor = null;
                              	StudentAttendancePrimaryPanel.enabled = true;
								StudentMessageText.visible = false;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	student_primary_delete.items = studentTimeKeeperPrimaryArray[0];
                             	StudentAttendancePrimaryPanel.enabled = true;	
								studentPrimaryTimekeeperPanel.style.backgroundColor = null;
                              	StudentAttendancePrimaryPanel.enabled = true;
								StudentMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){								
                             	studentPrimaryTimekeeperPanel.style.backgroundColor = '#F5F5F5';
                              	StudentAttendancePrimaryPanel.enabled = false;
								StudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								student_primary_delete.items = studentTimeKeeperPrimaryArray;
								student_primary_delete.enabled = true;
								studentPrimaryTimekeeperPanel.style.backgroundColor = null;
                              	StudentAttendancePrimaryPanel.enabled = true;
								StudentMessageText.visible = false;
							}
					}
				
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_TK_ALT"){
							studentTimeKeeperAlternateArray.push(myresponse[a].NAME);
                      		result = checkIfEqual(studentTimeKeeperAlternateArray);
                      		//console.log("result from alternate student timekeeper= " + result);
							var studentAlternateTimekeeperPanel = document.querySelector(".alternateStudentTimekeeperClass");
							
							if(totalRowCountForDeleteNames == 1){
								student_alternate_delete.items = studentTimeKeeperAlternateArray;
								student_alternate_delete.enabled = true;
								studentAlternateTimekeeperPanel.style.backgroundColor = null;
                              	StudentAttendanceAlternatePanel.enabled = true;
								StudentMessageText.visible = false;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	student_alternate_delete.items = studentTimeKeeperAlternateArray[0];
                             	StudentAttendanceAlternatePanel.enabled = true;	
								studentAlternateTimekeeperPanel.style.backgroundColor = null;
                              	StudentAttendanceAlternatePanel.enabled = true;
								StudentMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){								
                             	studentAlternateTimekeeperPanel.style.backgroundColor = '#F5F5F5';
                              	StudentAttendanceAlternatePanel.enabled = false;
								StudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								student_alternate_delete.items = studentTimeKeeperAlternateArray;
								student_alternate_delete.enabled = true;
								studentAlternateTimekeeperPanel.style.backgroundColor = null;
                              	StudentAttendanceAlternatePanel.enabled = true;
								StudentMessageText.visible = false;
							}
					}
					//debugger;
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_AP_OFF"){
							approvingOfficialCDArray.push(myresponse[a].NAME); 
                      		result = checkIfEqual(approvingOfficialCDArray);
                      		//console.log("result from student approving official timekeeper= " + result);
							var studentApprovingOfficialPanel = document.querySelector(".studentApprovingOfficialClass");
							
							if(totalRowCountForDeleteNames == 1){
								approving_official_cd_delete.items = approvingOfficialCDArray;
								approving_official_cd_delete.enabled = true;
								studentApprovingOfficialPanel.style.backgroundColor = null;
                              	StudentAttendanceApprovingOfficialCDPanel.enabled = true;
								StudentMessageText.visible = false;
							}  							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){							
                             	approving_official_cd_delete.items = approvingOfficialCDArray[0];
                             	StudentAttendanceApprovingOfficialCDPanel.enabled = true;
								studentApprovingOfficialPanel.style.backgroundColor = null;
                              	StudentAttendanceApprovingOfficialCDPanel.enabled = true;
								StudentMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){								
                             	studentApprovingOfficialPanel.style.backgroundColor = '#F5F5F5';
                              	StudentAttendanceApprovingOfficialCDPanel.enabled = false;
								StudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								approving_official_cd_delete.items = approvingOfficialCDArray;
								approving_official_cd_delete.enabled = true;	
								studentApprovingOfficialPanel.style.backgroundColor = null;
                              	StudentAttendanceApprovingOfficialCDPanel.enabled = true;
								StudentMessageText.visible = false;
							}
					}										

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "WRC_WC_PRI"){				
							warrantPrimaryArray.push(myresponse[a].NAME);	
                      		result = checkIfEqual(warrantPrimaryArray);
                      		//console.log("result from primary warrant= " + result);
							var primaryWarrantCoordinatorPanel = document.querySelector(".primaryWarrantClass");
							
							if(totalRowCountForDeleteNames == 1){
								warrant_primary_delete.items = warrantPrimaryArray;
								warrant_primary_delete.enabled = true;
								primaryWarrantCoordinatorPanel.style.backgroundColor = null;
                              	WarrantCoordinatorPrimaryPanel.enabled = true;
								WarrantMessageText.visible = false;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	warrant_primary_delete.items = warrantPrimaryArray[0];
                             	WarrantCoordinatorPrimaryPanel.enabled = true;	
								primaryWarrantCoordinatorPanel.style.backgroundColor = null;
                              	WarrantCoordinatorPrimaryPanel.enabled = true;
								WarrantMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
                             	primaryWarrantCoordinatorPanel.style.backgroundColor = '#F5F5F5';
                              	WarrantCoordinatorPrimaryPanel.enabled = false;
								WarrantMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								warrant_primary_delete.items = warrantPrimaryArray;
								warrant_primary_delete.enabled = true;
								primaryWarrantCoordinatorPanel.style.backgroundColor = null;
                              	WarrantCoordinatorPrimaryPanel.enabled = true;
								WarrantMessageText.visible = false;
							}
					}
				
					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "WRC_WC_ALT"){				
							warrantAlternateArray.push(myresponse[a].NAME);			
                      		result = checkIfEqual(warrantAlternateArray);
                      		//console.log("result from alternate warrant= " + result);
							var alternateWarrantCoordinatorPanel = document.querySelector(".alternateWarrantClass");
							
							if(totalRowCountForDeleteNames == 1){
								warrant_alternate_delete.items = warrantAlternateArray;
								warrant_alternate_delete.enabled = true;
								alternateWarrantCoordinatorPanel.style.backgroundColor = null;
                              	WarrantCoordinatorAlternatePanel.enabled = true;
								WarrantMessageText.visible = false;
							}    							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	warrant_alternate_delete.items = warrantAlternateArray[0];
                             	WarrantCoordinatorAlternatePanel.enabled = true;
								alternateWarrantCoordinatorPanel.style.backgroundColor = null;
                              	WarrantCoordinatorAlternatePanel.enabled = true;
								WarrantMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
                             	alternateWarrantCoordinatorPanel.style.backgroundColor = '#F5F5F5';
                              	WarrantCoordinatorAlternatePanel.enabled = false;
								WarrantMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								warrant_alternate_delete.items = warrantAlternateArray;
								warrant_alternate_delete.enabled = true;
								alternateWarrantCoordinatorPanel.style.backgroundColor = null;
                              	WarrantCoordinatorAlternatePanel.enabled = true;
								WarrantMessageText.visible = false;
							}
					}											

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_CT_AP_PRI"){
							cmsStudentPrimaryArray.push(myresponse[a].NAME);
                      		result = checkIfEqual(cmsStudentPrimaryArray);
                      		//console.log("result from cms primary= " + result);
							var primaryCMSStudentPanel = document.querySelector(".primaryCMSStudentClass");
							
							if(totalRowCountForDeleteNames == 1){
								cms_student_primary_delete.items = cmsStudentPrimaryArray;	
								cms_student_primary_delete.enabled = true;
								primaryCMSStudentPanel.style.backgroundColor = null;
                              	CMSStudentPrimaryPanel.enabled = true;
								CMSStudentMessageText.visible = false;
							}   							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){								
                             	cms_student_primary_delete.items = cmsStudentPrimaryArray[0];
                             	CMSStudentPrimaryPanel.enabled = true;
								primaryCMSStudentPanel.style.backgroundColor = null;
                              	CMSStudentPrimaryPanel.enabled = true;
								CMSStudentMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
                             	primaryCMSStudentPanel.style.backgroundColor = '#F5F5F5';
                              	CMSStudentPrimaryPanel.enabled = false;
								CMSStudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								cms_student_primary_delete.items = cmsStudentPrimaryArray;	
								cms_student_primary_delete.enabled = true;
								primaryCMSStudentPanel.style.backgroundColor = null;
                              	CMSStudentPrimaryPanel.enabled = true;
								CMSStudentMessageText.visible = false;
							}
					}

					if((myresponse[a].DELETE_FLG == "N") && myresponse[a].FIELD_VALUE == "STU_CT_AP_ALT"){
							cmsStudentAlternateArray.push(myresponse[a].NAME);
                      		result = checkIfEqual(cmsStudentAlternateArray);
                      		//console.log("result from alternate cms student= " + result);
							var alternateCMSStudentPanel = document.querySelector(".alternateCMSStudentClass");
							
							if(totalRowCountForDeleteNames == 1){
								cms_student_alternate_delete.items = cmsStudentAlternateArray;
								cms_student_alternate_delete.enabled = true;
								alternateCMSStudentPanel.style.backgroundColor = null;
                              	CMSStudentAlternatePanel.enabled = true;
								CMSStudentMessageText.visible = false;
							}							
							else if((result == true) && (totalRowCountForDeleteNames > 1)){							
                             	cms_student_alternate_delete.items = cmsStudentAlternateArray[0];
                             	CMSStudentAlternatePanel.enabled = true;
								alternateCMSStudentPanel.style.backgroundColor = null;
                              	CMSStudentAlternatePanel.enabled = true;
								CMSStudentMessageText.visible = false;
							}
							else if((result == false) && (totalRowCountForDeleteNames > 1)){
								
                             	alternateCMSStudentPanel.style.backgroundColor = '#F5F5F5';
                              	CMSStudentAlternatePanel.enabled = false;
								CMSStudentMessageText.visible = true;
                            }
							else if((result == false || result === undefined) && (myresponse.length > 0) && (totalRowCountForDeleteNames > 1)){
								cms_student_alternate_delete.items = cmsStudentAlternateArray;
								cms_student_alternate_delete.enabled = true;
								alternateCMSStudentPanel.style.backgroundColor = null;
                              	CMSStudentAlternatePanel.enabled = true;
								CMSStudentMessageText.visible = false;
							}							                     									 
					}
				}																			
				gifModal.style.display = "none";   
				//department_Id.enabled = true;
				timeKeeper_primary_add.enabled = true;
				timeKeeper_alternate_add.enabled = true;
				timeKeeper_approving_official_add.enabled = true;                                    
				student_primary_add.enabled = true;
				student_alternate_add.enabled = true;
				approving_official_cd_add.enabled = true;
				warrant_primary_add.enabled = true;
				warrant_alternate_add.enabled = true;
				cms_student_primary_add.enabled = true;
				cms_student_alternate_add.enabled = true;
			  
			} 
			else{
				gifModal.style.display = "none"; 
				//department_Id.enabled = true;
				timeKeeper_primary_add.enabled = true;
				timeKeeper_alternate_add.enabled = true;
				timeKeeper_approving_official_add.enabled = true;                                    
				student_primary_add.enabled = true;
				student_alternate_add.enabled = true;
				approving_official_cd_add.enabled = true;
				warrant_primary_add.enabled = true;
				warrant_alternate_add.enabled = true;
				cms_student_primary_add.enabled = true;
				cms_student_alternate_add.enabled = true;
			}
		  },
		});
	}
	else{
			//this.value = null;
			gifModal.style.display = "none"; 
	}
}

function checkIfEqual(empTimeKeeperPrimaryArray){  	
  	var empTimeKeeperPrimary = empTimeKeeperPrimaryArray;
  	var isEqual;
  
  	for(x=0; x < empTimeKeeperPrimary.length - 1;x++){      
        if (empTimeKeeperPrimary[x] == empTimeKeeperPrimary[x+1]){
            isEqual = true;            
        }
      	else{
          	isEqual = false;
        }
	}
  	return isEqual;
}


function getCollegeList(){

	var fullDivisionValue = hidden_division_code.value;
	var userCWID = hidden_cwid.value;

	$.ajax({

		type: 'GET', 

		url:"/bin/getCollegeList",

		data: {
			  cwid: userCWID,
			  divisionCode: fullDivisionValue
		},

		dataType: 'json',

		success: function(myresponse){               

			if(myresponse.length > 0){
					
					var allCollegArray = [];
					
					for(var allCollegeDetails = 0; allCollegeDetails < myresponse.length; allCollegeDetails++){
							allCollegArray.push(myresponse[allCollegeDetails]);
							all_details_from_division_json.value = JSON.stringify(allCollegArray);
					}

					var collegeListValue = document.querySelector(".college-list select");
					var length1 = collegeListValue.options.length;
					
					for(var b=length1; b>0;b--){
						collegeListValue.options[b] = null;
					}
					
				   for(var m=0; m < myresponse.length; m++){
						var opt1 = document.createElement("option");
						if(myresponse[m].colleageNameWithCode != undefined && myresponse[m].colleageNameWithCode != null){
						  opt1.value = myresponse[m].colleageNameWithCode;                         
						  opt1.innerHTML = myresponse[m].colleageNameWithCode; 
						  collegeListVal.appendChild(opt1);
						}
					}
			}
		}
	});
}
 

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_primary_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_primary_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == timeKeeper_primary_add.value) && ((this.value !== null) && (timeKeeper_primary_add.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendancePrimaryPanel[0].timeKeeper_primary_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
  	timeKeeper_primary_add.value = null;
}


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_primary_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_primary_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == timeKeeper_primary_delete.value) && ((this.value !== null) && (timeKeeper_primary_delete.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendancePrimaryPanel[0].timeKeeper_primary_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
  	this.value = null;
}


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_primary_add_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_primary_add_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null)){
  
  	if(this.value == timeKeeper_alternate_delete.items){
      	showErrorModal("Alert !", "Alternate staff timekeeper and primary staff timekeeper cannot be the same"); 
      	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendancePrimaryPanel[0].timeKeeper_primary_add[0]"); 
      	this.value = null;
    }
  	else{      
          var primaryTimeKeeperInfo = this.value;
          var primaryTimeKeeperDetailsArray = [];
          var primaryTimeKeeperActualInfoArray = [];
          var primaryTimeKeeperDetailsListObj = {};

          primaryTimeKeeperDetailsArray = JSON.parse(timeKeeper_add_names_json.value); 

          for (var primaryTimeKeeperDetails = 0; primaryTimeKeeperDetails < primaryTimeKeeperDetailsArray.length; primaryTimeKeeperDetails++){

                  primaryTimeKeeperDetailsListObj = primaryTimeKeeperDetailsArray[primaryTimeKeeperDetails];

                  for(var key in primaryTimeKeeperDetailsListObj){

                        if(primaryTimeKeeperInfo == key){				  
                            primaryTimeKeeperActualInfoArray = primaryTimeKeeperDetailsListObj[key].split(" - "); 
                            console.log("primaryTimeKeeperActualInfoArray= " + primaryTimeKeeperActualInfoArray);
                            //hidden_department_approver_name.value = this.value;					  
                            hidden_primary_timekeeper_userID.value = primaryTimeKeeperActualInfoArray[0];					  
                            hidden_primary_timekeeper_email.value = primaryTimeKeeperActualInfoArray[1];
                            hidden_primary_timekeeper_emplID.value = primaryTimeKeeperActualInfoArray[2];				                        
                        }
                  }						
          }		
      }
}
else if((this.value === null) || (this.value == "Select Department Approver")){ 
    	gifModal.style.display = "none";
  		hidden_primary_timekeeper_emplID.value = null;
        hidden_primary_timekeeper_userID.value = null; 
        hidden_primary_timekeeper_email.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_alternate_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_alternate_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == timeKeeper_alternate_add.value) && ((this.value !== null) && (timeKeeper_alternate_add.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceAlternatePanel[0].timeKeeper_alternate_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
	timeKeeper_alternate_add.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_alternate_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_alternate_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if((this.value == timeKeeper_alternate_delete.value) && ((this.value !== null) && (timeKeeper_alternate_delete.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceAlternatePanel[0].timeKeeper_alternate_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
	this.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_alternate_add_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_alternate_add_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null)){
  
  	if(this.value == timeKeeper_primary_delete.items){
  		showErrorModal("Alert !", "Primary faculty timekeeper and alternate faculty timekeeper cannot be the same");
      	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceAlternatePanel[0].timeKeeper_alternate_add[0]"); 
      	this.value = null;
      	
	}
  	else{
      
        var alternateTimeKeeperInfo = this.value;
        var alternateTimeKeeperDetailsArray = [];
        var alternateTimeKeeperActualInfoArray = [];
        var alternateTimeKeeperDetailsListObj = {};

        alternateTimeKeeperDetailsArray = JSON.parse(timeKeeper_add_names_json.value); 

        for (var alternateTimeKeeperDetails = 0; alternateTimeKeeperDetails < alternateTimeKeeperDetailsArray.length; alternateTimeKeeperDetails++){

                alternateTimeKeeperDetailsListObj = alternateTimeKeeperDetailsArray[alternateTimeKeeperDetails];

                for(var key in alternateTimeKeeperDetailsListObj){

                      if(alternateTimeKeeperInfo == key){				  
                          alternateTimeKeeperActualInfoArray = alternateTimeKeeperDetailsListObj[key].split(" - ");    
                          console.log("alternateTimeKeeperActualInfoArray= " + alternateTimeKeeperActualInfoArray);
                          //hidden_department_approver_name.value = this.value;					  
                          hidden_alternate_timekeeper_userID.value = alternateTimeKeeperActualInfoArray[0];					  
                          hidden_alternate_timekeeper_email.value =  alternateTimeKeeperActualInfoArray[1];
                          hidden_alternate_timekeeper_emplID.value =  alternateTimeKeeperActualInfoArray[2];
                      }
                }						
        }	
    }
}
else if((this.value === null) || (this.value == "Select Department Approver")){ 
    	gifModal.style.display = "none";
  		hidden_alternate_timekeeper_emplID.value = null;
        hidden_alternate_timekeeper_userID.value = null;
        hidden_alternate_timekeeper_email.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_approving_official_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_approving_official_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == timeKeeper_approving_official_add.value) && ((this.value !== null) && (timeKeeper_approving_official_add.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceApprovingOfficialPanel[0].timeKeeper_approving_official_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
  	timeKeeper_approving_official_add.value = null;
}


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_approving_official_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_approving_official_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null){    
	//debugger;
	if((this.value == timeKeeper_approving_official_delete.value) && ((this.value !== null) && (timeKeeper_approving_official_delete.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceApprovingOfficialPanel[0].timeKeeper_approving_official_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
  	this.value = null;
}

    if(this.value !== null){
        var timeKeeperApprovingOfficialInfo = this.value;
        var timeKeeperApprovingOfficialInfoArray = [];
        var timeKeeperApprovingOfficialActualInfoArray = [];
        var timeKeeperApprovingOfficialListObj = {};
		
        timeKeeperApprovingOfficialInfoArray = JSON.parse(approving_official_add_names_json.value);

        for (var timeKeeperApprovingOfficialDetails = 0; timeKeeperApprovingOfficialDetails < timeKeeperApprovingOfficialInfoArray.length; 				     timeKeeperApprovingOfficialDetails++){

                timeKeeperApprovingOfficialListObj = timeKeeperApprovingOfficialInfoArray[timeKeeperApprovingOfficialDetails];

                for(var key in timeKeeperApprovingOfficialListObj){

                      if(timeKeeperApprovingOfficialInfo == key){				  
                          timeKeeperApprovingOfficialActualInfoArray = timeKeeperApprovingOfficialListObj[key].split(" - ");

                          hidden_official_approver_name.value = this.value;
                          hidden_official_approver_userID.value = timeKeeperApprovingOfficialActualInfoArray[0];
                          hidden_official_approver_email.value =  timeKeeperApprovingOfficialActualInfoArray[1];
                          hidden_official_approver_emplID.value = timeKeeperApprovingOfficialActualInfoArray[2];                          					  
                      }
                }						
        }								
    }
  	else{
      		if(stage_indicator.value === null && this.value === null){
                hidden_official_approver_name.value = null;
                hidden_official_approver_userID.value = null;
                hidden_official_approver_email.value =  null;
                hidden_official_approver_emplID.value = null;
            }
    }
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_approving_official_add_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_timeKeeper_approving_official_add_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == timeKeeper_approving_official_delete.value) && ((this.value !== null) && (timeKeeper_approving_official_delete.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceApprovingOfficialPanel[0].timeKeeper_approving_official_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
  	this.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	approving_official_signature.enabled = false;
	
	if (approving_official_date.value === null) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		approving_official_date.value = d;
		approving_official_signature.enabled = false;
	}
	else {
		approving_official_date.enabled = false;
		approving_official_signature.enabled = false;
  }
}else{
  approving_official_date.value = null;
  approving_official_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value == "ToFaculty"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           approving_official_signature.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_student_primary_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_student_primary_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == student_primary_add.value) && ((this.value !== null) && (student_primary_add.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendancePrimaryPanel[0].student_primary_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
	student_primary_add.value = null;
} 

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_student_primary_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_student_primary_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == student_primary_delete.value) && ((this.value !== null) && (student_primary_delete.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendancePrimaryPanel[0].student_primary_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
	this.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_student_primary_add_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_student_primary_add_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null)){
  
  	if(this.value == student_alternate_delete.items){
      	showErrorModal("Alert !", "Alternate student timekeeper and primary student timekeeper cannot be the same"); 
      	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendancePrimaryPanel[0].student_primary_add[0]"); 
      	this.value = null;
    }
else{

        var primaryStudentTimeKeeperInfo = this.value;
        var primaryStudentTimeKeeperDetailsArray = [];
        var primaryStudentTimeKeeperActualInfoArray = [];
        var primaryStudentTimeKeeperDetailsListObj = {};

        primaryStudentTimeKeeperDetailsArray = JSON.parse(timeKeeper_add_names_json.value); 

        for (var primaryStudentTimeKeeperDetails = 0; primaryStudentTimeKeeperDetails < primaryStudentTimeKeeperDetailsArray.length; primaryStudentTimeKeeperDetails++){

                primaryStudentTimeKeeperDetailsListObj = primaryStudentTimeKeeperDetailsArray[primaryStudentTimeKeeperDetails];

                for(var key in primaryStudentTimeKeeperDetailsListObj){

                      if(primaryStudentTimeKeeperInfo == key){				  
                          primaryStudentTimeKeeperActualInfoArray = primaryStudentTimeKeeperDetailsListObj[key].split(" - ");    
                          console.log("primaryStudentTimeKeeperActualInfoArray= " + primaryStudentTimeKeeperActualInfoArray);
                          //hidden_department_approver_name.value = this.value;					  
                          hidden_primary_student_timekeeper_userID.value = primaryStudentTimeKeeperActualInfoArray[0];					  
                          hidden_primary_student_timekeeper_email.value =  primaryStudentTimeKeeperActualInfoArray[1];	
                          hidden_primary_student_timekeeper_emplID.value =  primaryStudentTimeKeeperActualInfoArray[2];
                      }
                }						
        }		
	}
}
else if((this.value === null) || (this.value == "Select Department Approver")){ 
    	gifModal.style.display = "none";
  		hidden_primary_student_timekeeper_emplID.value = null;
        hidden_primary_student_timekeeper_userID.value = null;
        hidden_primary_student_timekeeper_email.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_student_alternate_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_student_alternate_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == student_alternate_add.value) && ((this.value !== null) && (student_alternate_add.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceAlternatePanel[0].student_alternate_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
	student_alternate_add.value = null;
} 

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_student_alternate_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_student_alternate_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == student_alternate_delete.value) && ((this.value !== null) && (student_alternate_delete.value !== null))){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceAlternatePanel[0].student_alternate_add[0]"); 
  	showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
	this.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_student_alternate_add_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_student_alternate_add_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null)){
  
  	if(this.value == student_primary_delete.items){
      	showErrorModal("Alert !", "Primary student timekeeper and alternate student timekeeper cannot be the same"); 
      	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceAlternatePanel[0].student_alternate_add[0]"); 
      	this.value = null;
    }
else{
        var alternateStudentTimeKeeperInfo = this.value;
        var alternateStudentTimeKeeperDetailsArray = [];
        var alternateStudentTimeKeeperActualInfoArray = [];
        var alternateStudentTimeKeeperDetailsListObj = {};

        alternateStudentTimeKeeperDetailsArray = JSON.parse(timeKeeper_add_names_json.value); 

        for (var alternateStudentTimeKeeperDetails = 0; alternateStudentTimeKeeperDetails < alternateStudentTimeKeeperDetailsArray.length; alternateStudentTimeKeeperDetails++){

                alternateStudentTimeKeeperDetailsListObj = alternateStudentTimeKeeperDetailsArray[alternateStudentTimeKeeperDetails];

                for(var key in alternateStudentTimeKeeperDetailsListObj){

                      if(alternateStudentTimeKeeperInfo == key){				  
                          alternateStudentTimeKeeperActualInfoArray = alternateStudentTimeKeeperDetailsListObj[key].split(" - ");    
                          console.log("alternateStudentTimeKeeperActualInfoArray= " + alternateStudentTimeKeeperActualInfoArray);
                          //hidden_department_approver_name.value = this.value;					  
                          hidden_alternate_student_timekeeper_userID.value = alternateStudentTimeKeeperActualInfoArray[0];					  
                          hidden_alternate_student_timekeeper_email.value =  alternateStudentTimeKeeperActualInfoArray[1];
                          hidden_alternate_student_timekeeper_emplID.value =  alternateStudentTimeKeeperActualInfoArray[2];
                      }
                }						
        }	
	}
}
else if((this.value === null) || (this.value == "Select Department Approver")){ 
    	gifModal.style.display = "none";
  		hidden_alternate_student_timekeeper_emplID.value = null;
        hidden_alternate_student_timekeeper_userID.value = null;
        hidden_alternate_student_timekeeper_email.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_cd_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_cd_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == approving_official_cd_add.value) && ((this.value !== null) && (approving_official_cd_add.value !== null))){       
  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceApprovingOfficialCDPanel[0].approving_official_cd_add[0]"); 
  showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
  approving_official_cd_add.value = null;
}




        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_cd_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_cd_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null){    
	//debugger;
	if((this.value == approving_official_cd_delete.value) && ((this.value !== null) && (approving_official_cd_delete.value !== null))){       
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceApprovingOfficialCDPanel[0].approving_official_cd_add[0]"); 
  		showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
		this.value = null;
    }

    if(this.value !== null){
        var studentApprovingOfficialInfo = this.value;
        var studentApprovingOfficialInfoArray = [];
        var studentApprovingOfficialActualInfoArray = [];
        var studentApprovingOfficialListObj = {};

        studentApprovingOfficialInfoArray = JSON.parse(approving_official_add_names_json.value);
        
        for (var studentApprovingOfficialDetails = 0; studentApprovingOfficialDetails < studentApprovingOfficialInfoArray.length; studentApprovingOfficialDetails++){

                studentApprovingOfficialListObj = studentApprovingOfficialInfoArray[studentApprovingOfficialDetails];

                for(var key in studentApprovingOfficialListObj){

                      if(studentApprovingOfficialInfo == key){				  
                          studentApprovingOfficialActualInfoArray = studentApprovingOfficialListObj[key].split(" - ");

                          hidden_official_cd_approver_name.value = this.value;
                          hidden_official_cd_approver_userID.value = studentApprovingOfficialActualInfoArray[0];
                          hidden_official_cd_approver_email.value = studentApprovingOfficialActualInfoArray[1];
                          hidden_official_cd_approver_emplID.value = studentApprovingOfficialActualInfoArray[2];                          				  
                      }
                }						
        }								
    }
  	else{    
      	if(stage_indicator.value === null && this.value === null){   	
      		hidden_official_cd_approver_name.value = null;
            hidden_official_cd_approver_userID.value = null;
            hidden_official_cd_approver_email.value = null;
            hidden_official_cd_approver_emplID.value = null;
        }
    }
}
	
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_CD_signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_CD_signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	approving_official_cd_signature.enabled = false;
	
	if (approving_official_cd_date.value === null) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		approving_official_cd_date.value = d;
		approving_official_cd_signature.enabled = false;
	}
	else {
		approving_official_cd_date.enabled = false;
		approving_official_cd_signature.enabled = false;
  }
}else{
  approving_official_cd_date.value = null;
  approving_official_cd_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_CD_signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_approving_official_CD_signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToStudent"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           approving_official_cd_signature.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_warrant_primary_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_warrant_primary_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == warrant_primary_add.value) && ((this.value !== null) && (warrant_primary_add.value !== null))){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorPrimaryPanel[0].warrant_primary_add[0]"); 
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			warrant_primary_add.value = null;
    }


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_warrant_primary_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_warrant_primary_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null && (this.value !== null)){    

	if((this.value !== null) && (this.value == warrant_primary_delete.value)){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorPrimaryPanel[0].warrant_primary_add[0]"); 
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			this.value = null;
    }
  
  	if((this.value !== null) && (this.value == warrant_alternate_delete.items)){
      	showErrorModal("Alert !", "Alternate warrant coordinator and primary warrant coordinator cannot be the same"); 
          guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorPrimaryPanel[0].warrant_primary_add[0]"); 
          this.value = null;
      }
  else{

        var primaryWarrantInfo = this.value;
		var primaryWarrantDetailsArray = [];        
        var primaryWarrantActualInfoArray = [];
        var primaryWarrantListObj = {};

        primaryWarrantDetailsArray = JSON.parse(timeKeeper_add_names_json.value);

        for (var primaryWarrantDetails = 0; primaryWarrantDetails < primaryWarrantDetailsArray.length; primaryWarrantDetails++){

                primaryWarrantListObj = primaryWarrantDetailsArray[primaryWarrantDetails];

                for(var key in primaryWarrantListObj){

                      if(primaryWarrantInfo == key){				  
                          primaryWarrantActualInfoArray = primaryWarrantListObj[key].split(" - ");

                          hidden_primary_warrant_approver_name.value = this.value;
                          hidden_primary_warrant_approver_userID.value = primaryWarrantActualInfoArray[0];
                          hidden_primary_warrant_approver_email.value = primaryWarrantActualInfoArray[1];
                          hidden_primary_warrant_approver_emplID.value = primaryWarrantActualInfoArray[2];                          				  
                      }
                }						
        }								
  }
}
else{
  		if(stage_indicator.value === null && (this.value === null)){  
          	hidden_primary_warrant_approver_name.value = null;
            hidden_primary_warrant_approver_userID.value = null;
            hidden_primary_warrant_approver_email.value = null;
            hidden_primary_warrant_approver_emplID.value = null;
        }     
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_warrant_alternate_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_warrant_alternate_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == warrant_alternate_add.value) && ((this.value !== null) && (warrant_alternate_add.value !== null))){      
            	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_add[0]"); 
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			warrant_alternate_add.value = null;


}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_warrant_alternate_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_warrant_alternate_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null && (this.value !== null)){    

	if((this.value == warrant_alternate_delete.value) && ((this.value !== null) && (warrant_alternate_delete.value !== null))){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_add[0]"); 
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			this.value = null;
    }
	
  	if(this.value == warrant_primary_delete.items){
      	showErrorModal("Alert !", "Primary warrant coordinator and alternate warrant coordinator cannot be the same"); 
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_add[0]"); 
            this.value = null;
        }
    else{
   
          var alternateWarrantInfo = this.value;
          var alternateWarrantDetailsArray = [];        
          var alternateWarrantActualInfoArray = [];
          var alternateWarrantListObj = {};


          alternateWarrantDetailsArray = JSON.parse(timeKeeper_add_names_json.value);

          for (var alternateWarrantDetails = 0; alternateWarrantDetails < alternateWarrantDetailsArray.length; alternateWarrantDetails++){

                  alternateWarrantListObj = alternateWarrantDetailsArray[alternateWarrantDetails];

                  for(var key in alternateWarrantListObj){

                        if(alternateWarrantInfo == key){				  
                            alternateWarrantActualInfoArray = alternateWarrantListObj[key].split(" - ");

                            hidden_alternate_warrant_approver_name.value = this.value;
                            hidden_alternate_warrant_approver_userID.value = alternateWarrantActualInfoArray[0];
                            hidden_alternate_warrant_approver_email.value = alternateWarrantActualInfoArray[1];
                            hidden_alternate_warrant_approver_emplID.value = alternateWarrantActualInfoArray[2];                           					  
                        }
                  }						
          }								
      }
}
else{
  	if(stage_indicator.value === null && (this.value === null)){ 
      	hidden_alternate_warrant_approver_name.value = null;
        hidden_alternate_warrant_approver_userID.value = null;
        hidden_alternate_warrant_approver_email.value = null;
        hidden_alternate_warrant_approver_emplID.value = null;
    }   
}
	
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_primary_warrant_coordinator_signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_primary_warrant_coordinator_signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	warrant_corrdinator_primary_signature.enabled = false;
	
	if (warrant_corrdinator_primary_date.value === null) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		warrant_corrdinator_primary_date.value = d;
		warrant_corrdinator_primary_signature.enabled = false;
	}
	else {
		warrant_corrdinator_primary_date.enabled = false;
		warrant_corrdinator_primary_signature.enabled = false;
  }
}else{
  warrant_corrdinator_primary_date.value = null;
  warrant_corrdinator_primary_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_primary_warrant_coordinator_signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_primary_warrant_coordinator_signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToPrimaryWarrant"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           warrant_corrdinator_primary_signature.value = myresponse.userName;
       }
    });
  }
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_alternate_warrant_coordinator_signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_alternate_warrant_coordinator_signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	warrant_corrdinator_alternate_signature.enabled = false;
	
	if (warrant_corrdinator_alternate_date.value === null) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		warrant_corrdinator_alternate_date.value = d;
		warrant_corrdinator_alternate_signature.enabled = false;
	}
	else {
		warrant_corrdinator_alternate_date.enabled = false;
		warrant_corrdinator_alternate_signature.enabled = false;
  }
}else{
  warrant_corrdinator_alternate_date.value = null;
  warrant_corrdinator_alternate_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_alternate_warrant_coordinator_signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_alternate_warrant_coordinator_signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToAlternateWarrant"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           warrant_corrdinator_alternate_signature.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_primary_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_primary_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == cms_student_primary_add.value) && ((this.value !== null) && (cms_student_primary_add.value !== null))){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentPrimaryPanel[0].cms_student_primary_add[0]");
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			cms_student_primary_add.value = null;
}


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_primary_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_primary_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null && this.value !== null){    

	if((this.value == cms_student_primary_delete.value) && ((this.value !== null) && (cms_student_primary_delete.value !== null))){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentPrimaryPanel[0].cms_student_primary_add[0]");
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			this.value = null;
    }

   if(this.value == cms_student_primary_delete.items){
      	showErrorModal("Alert !", "Alternate student timekeeper and primary student timekeeper cannot be the same"); 
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_add[0]"); 
            this.value = null;
        }
    else{ 
      
        var cmsStudentPrimaryInfo = this.value;
		var cmsStudentPrimaryDetailsArray = [];       
        var cmsStudentPrimaryActualInfoArray = [];
        var cmsStudentPrimaryListObj = {};

        cmsStudentPrimaryDetailsArray = JSON.parse(timeKeeper_add_names_json.value);
       
        for (var cmsStudentPrimaryDetails = 0; cmsStudentPrimaryDetails < cmsStudentPrimaryDetailsArray.length; cmsStudentPrimaryDetails++){

                cmsStudentPrimaryListObj = cmsStudentPrimaryDetailsArray[cmsStudentPrimaryDetails];

                for(var key in cmsStudentPrimaryListObj){

                      if(cmsStudentPrimaryInfo == key){				  
                          cmsStudentPrimaryActualInfoArray = cmsStudentPrimaryListObj[key].split(" - ");

                          hidden_primary_cms_student_approver_name.value = this.value;
                          hidden_primary_cms_student_approver_userID.value = cmsStudentPrimaryActualInfoArray[0];
                          hidden_primary_cms_student_approver_email.value = cmsStudentPrimaryActualInfoArray[1];
                          hidden_primary_cms_student_approver_emplID.value = cmsStudentPrimaryActualInfoArray[2];                          		  
                      }
                }						
        }								
    }
}
else{
  	if(stage_indicator.value === null && this.value === null){
      	hidden_primary_cms_student_approver_name.value = null;
      	hidden_primary_cms_student_approver_userID.value = null;
      	hidden_primary_cms_student_approver_email.value = null;
        hidden_primary_cms_student_approver_emplID.value = null;
    }       
}
	
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_alternate_delete_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_alternate_delete_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if((this.value == cms_student_alternate_add.value) && ((this.value !== null) && (cms_student_alternate_add.value !== null))){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_add[0]"); 
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			cms_student_alternate_add.value = null;
    } 

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_alternate_add_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_cms_student_alternate_add_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value === null && this.value !== null){    

	if((this.value == cms_student_alternate_delete.value) && ((this.value !== null) && (cms_student_alternate_delete.value !== null))){      
            guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_add[0]"); 
			showErrorModal("Alert !", "You cannot add the same name as delete. Please select a different name");
			this.value = null;
    }

  	if(this.value == cms_student_primary_delete.items){
      	showErrorModal("Alert !", "Primary CMS student timekeeper and alternate CMS student timekeeper cannot be the same"); 
          guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_add[0]"); 
          this.value = null;
      }
  else{  
    
        var cmsStudentAlternateInfo = this.value;
		var cmsStudentAlternateDetailsArray = [];       
        var cmsStudentAlternateActualInfoArray = [];
        var cmsStudentAlternateListObj = {};
      

        cmsStudentAlternateDetailsArray = JSON.parse(timeKeeper_add_names_json.value);
        
        for (var cmsStudentAlternateDetails = 0; cmsStudentAlternateDetails < cmsStudentAlternateDetailsArray.length; cmsStudentAlternateDetails++){

                cmsStudentAlternateListObj = cmsStudentAlternateDetailsArray[cmsStudentAlternateDetails];

                for(var key in cmsStudentAlternateListObj){

                      if(cmsStudentAlternateInfo == key){				  
                          cmsStudentAlternateActualInfoArray = cmsStudentAlternateListObj[key].split(" - ");

                          hidden_alternate_cms_student_approver_name.value = this.value;
                          hidden_alternate_cms_student_approver_userID.value = cmsStudentAlternateActualInfoArray[0];
                          hidden_alternate_cms_student_approver_email.value = cmsStudentAlternateActualInfoArray[1];
                          hidden_alternate_cms_student_approver_emplID.value = cmsStudentAlternateActualInfoArray[2];                         				  
                      }
                }						
        }								
    }	
}
else{
      if(stage_indicator.value === null && this.value === null){
          hidden_alternate_cms_student_approver_name.value = null;
          hidden_alternate_cms_student_approver_userID.value = null;
          hidden_alternate_cms_student_approver_email.value = null;
          hidden_alternate_cms_student_approver_emplID.value = null;
      }    
}
	
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_primary_CMS_Student_Signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_primary_CMS_Student_Signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	cms_student_primary_signature.enabled = false;
	
	if (cms_student_primary_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		cms_student_primary_date.value = d;
		cms_student_primary_signature.enabled = false;
	}
	else {
		cms_student_primary_date.enabled = false;
		cms_student_primary_signature.enabled = false;
  }
}else{
  cms_student_primary_date.value = null;
  cms_student_primary_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_primary_CMS_Student_Signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_primary_CMS_Student_Signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToPrimaryCMSStudent"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           cms_student_primary_signature.value = myresponse.userName;
       }
    });
  }
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_alternate_CMS_Student_Signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_alternate_CMS_Student_Signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	cms_student_alternate_signature.enabled = false;
	
	if (cms_student_alternate_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		cms_student_alternate_date.value = d;
		cms_student_alternate_signature.enabled = false;
	}
	else {
		cms_student_alternate_date.enabled = false;
		cms_student_alternate_signature.enabled = false;
  }
}else{
  cms_student_alternate_date.value = null;
  cms_student_alternate_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_alternate_CMS_Student_Signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_alternate_CMS_Student_Signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToAlternateCMSStudent"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           cms_student_alternate_signature.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_deparment_approver_names_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_deparment_approver_names_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null) && (this.value != "Select Department Approver")){

  	department_flag.value = 1;
  
	var departmentHeadInfo = this.value;
	var departmentHeadInfoArray = [];
	var departmentHeadActualInfoArray = [];
	var departmentDetailsListObj = {};
	
	departmentHeadDetailsArray = department_head_details_json.value;
	departmentHeadDetailsParsedArray = JSON.parse(departmentHeadDetailsArray);
	
	for(var s= 0 ; s < departmentHeadDetailsParsedArray.length; s++){
		departmentHeadInfoArray.push(departmentHeadDetailsParsedArray[s]);
		
	}
	
	for (var departmentHeadDetails = 0; departmentHeadDetails < departmentHeadInfoArray.length; departmentHeadDetails++){
			
			departmentDetailsListObj = departmentHeadInfoArray[departmentHeadDetails];
			
			for(var key in departmentDetailsListObj){
				  
				  if(departmentHeadInfo == key){				  
					  departmentHeadActualInfoArray = departmentDetailsListObj[key].split(" - ");
                      //departmentHeadActualInfoArray = departmentDetailsListObj[key];                      
					  hidden_department_approver_name.value = this.value;
					  hidden_department_approver_userID.value = departmentHeadActualInfoArray[1];
                      hidden_department_approver_email.value =  departmentHeadActualInfoArray[2];                      			  
				  }
			}						
	}								
}
else if((this.value === null) || (this.value == "Select Department Approver")){ 
    	gifModal.style.display = "none";
    	department_flag.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_college_approver_names_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_college_approver_names_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null)){

  	college_flag.value = 1;
  
	var collegeDeanInfo = this.value;
	var collegeDeanInfoArray = [];
	var collegeDeanActualInfoArray = [];
	var collegeDeanDetailsListObj = {};
	
	collegeDeanDetailsArray = college_dean_details_json.value;
	collegeDeanDetailsParsedArray = JSON.parse(collegeDeanDetailsArray);
	
	for(var s= 0 ; s < collegeDeanDetailsParsedArray.length; s++){
		collegeDeanInfoArray.push(collegeDeanDetailsParsedArray[s]);
		
	}
	
	for (var collegeDeanDetails = 0; collegeDeanDetails < collegeDeanInfoArray.length; collegeDeanDetails++){
			
			collegeDeanDetailsListObj = collegeDeanInfoArray[collegeDeanDetails];
			
			for(var key in collegeDeanDetailsListObj){
				  
				  if(collegeDeanInfo == key){				  
					  collegeDeanActualInfoArray = collegeDeanDetailsListObj[key].split(" - ");
                      
					  hidden_college_approver_name.value = this.value;
					  hidden_college_approver_userID.value = collegeDeanActualInfoArray[1];
                      hidden_college_approver_email.value =  collegeDeanActualInfoArray[1].concat("@FULLERTON.EDU");                      				  
				  }
			}						
	}								
}
else if((this.value === null) || (this.value == "Select College Dean")){ 
    	gifModal.style.display = "none";
    	college_flag.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_division_approver_names_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_division_approver_names_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var gifModal = document.getElementById('gifModal');

if((stage_indicator.value === null) && (this.value !== null) && (this.value != "Select Division Head or Designee")){

  	division_flag.value = 1;
  
	var divisionHeadInfo = this.value;
	var divisionHeadInfoArray = [];
	var divisionHeadActualInfoArray = [];
	var divisionDetailsListObj = {};
	
	divisionHeadDetailsArray = division_head_details_json.value;
	divisionHeadDetailsParsedArray = JSON.parse(divisionHeadDetailsArray);
	
	for(var s= 0 ; s < divisionHeadDetailsParsedArray.length; s++){
		divisionHeadInfoArray.push(divisionHeadDetailsParsedArray[s]);
		
	}
	
  
	for (var divisionHeadDetails = 0; divisionHeadDetails < divisionHeadInfoArray.length; divisionHeadDetails++){
			
			divisionDetailsListObj = divisionHeadInfoArray[divisionHeadDetails];      		
			
			for(var key in divisionDetailsListObj){
				 
				  if(divisionHeadInfo == key){		
                    	
					  divisionHeadActualInfoArray = divisionDetailsListObj[key].split(" - ");
                      //divisionHeadActualInfoArray = departmentDetailsListObj[key];                      
					  hidden_division_approver_name.value = this.value;
					  hidden_division_approver_userID.value = divisionHeadActualInfoArray[1];
                      hidden_division_approver_email.value =  divisionHeadActualInfoArray[2];                     				  
				  }
			}						
	}								
}
else if((this.value === null) || (this.value == "Select Division Head or Designee")){ 
    	gifModal.style.display = "none";
    	division_flag.value = null;
}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_department_head_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_department_head_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	department_head_signature.enabled = false;
	department_head_name.enabled = false;
	
	if (department_head_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		department_head_date.value = d;
		department_head_signature.enabled = false;
	}
	else {
		department_head_date.enabled = false;
		department_head_signature.enabled = false;
  }
}else{
  department_head_date.value = null;
  department_head_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_department_head_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_department_head_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if(stage_indicator.value == "ToDepartmentHead"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           department_head_signature.value = myresponse.userName;
		   department_head_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_department_head_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_department_head_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_college_dean_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_college_dean_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	college_dean_signature.enabled = false;
	college_dean_name.enabled = false;
	
	if (college_dean_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		college_dean_date.value = d;
		college_dean_signature.enabled = false;
	}
	else {
		college_dean_date.enabled = false;
		college_dean_signature.enabled = false;
  }
}else{
  college_dean_date.value = null;
  college_dean_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_college_dean_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_college_dean_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToCollegeDean"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           college_dean_signature.value = myresponse.userName;
		   college_dean_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_college_dean_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_college_dean_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled =false;
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_division_head_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_division_head_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	division_head_signature.enabled = false;
	division_head_name.enabled = false;
	
	if (division_head_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		division_head_date.value = d;
		division_head_signature.enabled = false;
	}
	else {
		division_head_date.enabled = false;
		division_head_signature.enabled = false;
  }
}else{
  division_head_date.value = null;
  division_head_signature.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_division_head_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_division_head_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToDivisionHead"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           division_head_signature.value = myresponse.userName;
		   division_head_name.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_division_head_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_division_head_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_payroll_Signature_CHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_payroll_Signature_CHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	payroll_signature.enabled = false;
	
	if (payroll_siganture_date) {
		var dateString = new Date().toLocaleString("en-US", {
		  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
		}).replace(/[^ -~]/g, '');
		var dateObject = new Date(dateString);
		var curyear = dateObject.getFullYear();
		var curyearMonth = dateObject.getMonth() + 1;
		var curyearDay = dateObject.getDate();
		var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
		payroll_siganture_date.value = d;
		payroll_signature.enabled = false;
	}
	else {
		payroll_signature.enabled = false;
		payroll_siganture_date.enabled = false;
  }
}else{
  	payroll_signature.value = null;
  	payroll_siganture_date.value = null;
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_payroll_Signature_CHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_payroll_Signature_CHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(stage_indicator.value == "ToPayroll"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 
       url:"/bin/getLoggedUserDetails",
       dataType: 'json',

       success: function(myresponse){

           payroll_signature.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_payroll_siganture_date_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_payroll_siganture_date_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_HiddenFieldPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_HiddenFieldPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            //getPdf();

//function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, ' and'));
            jsonData.append('formPath', '/content/forms/af/delegation-of-authority-change/delegation-of-authority-change');
            jsonData.append('fileName', "(" + hidden_cwid.value + ")" + "_" + Date.now());          
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
//}

        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_saveguidedraft1620198028691_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_saveguidedraft1620198028691_click0 = function (scope) {
    with(this) {
        with(scope) {
            var rowCount = Row1.instanceManager.instanceCount; 
var deptIDs = "";

for(var ab=0; ab<rowCount; ab++){
  	deptIDs = deptIDs + Row1.instanceManager.instances[ab].department_Id.value+ ",";
}
aftiaDescCWID.value = "deptID(s): "+deptIDs.replace(/,(\s+)?$/, '');


formSavedStatus.value = "1";

handleDraftSave(this);


        }
	}
}
/**
 * @function delegation_of_authority_change_delegation_of_authority_change.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
delegation_of_authority_change_delegation_of_authority_change.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            
hidden_email_subject.value = "Test - Request for delegation of authority change - " + hidden_cwid.value; 


var rowCount = Row1.instanceManager.instanceCount; 
var deptIDs = "";
var unitsVal = "";
var allUnits = "";
var allUnitsVal = "";
if(RemoveButtonFlag.value == 1){ 
  	if(data_table.Row1.department_Id.value !== null && data_table.Row1.agency_unit.value !== null){
    	for(var ab=0; ab<rowCount; ab++){
          deptIDs = deptIDs + Row1.instanceManager.instances[ab].department_Id.value+ ",";
          unitsVal = Row1.instanceManager.instances[ab].agency_unit.value.split(" - ");
          allUnits = allUnits + unitsVal[1]+ ",";
        //allUnitsVal = allUnits + unitsVal[1];
    	}
      all_deptID_submit.value = deptIDs.replace(/,(\s+)?$/, '');
      all_units_submit.value = allUnits.replace(/,(\s+)?$/, '');
	}
}
else{
  	if(department_Id.value !== null && agency_unit.value !== null){
    	for(var ab=0; ab<rowCount; ab++){
          deptIDs = deptIDs + Row1.instanceManager.instances[ab].department_Id.value+ ",";
          unitsVal = Row1.instanceManager.instances[ab].agency_unit.value.split(" - ");
          allUnits = allUnits + unitsVal[1]+ ",";
        //allUnitsVal = allUnits + unitsVal[1];
    	}
      all_deptID_submit.value = deptIDs.replace(/,(\s+)?$/, '');
      all_units_submit.value = allUnits.replace(/,(\s+)?$/, '');
	}
}

aftiaDescCWID.value =  "Dept IDs: " + all_deptID_submit.value;

//var testEmail = "pushpa.kawadi@thoughtfocus.com";
//var testEmail = "yjayaram@fullerton.edu";
//var testEmail = "ram.singh@thoughtfocus.com"; 
var testEmail = "ajeet.chhonkar@thoughtfocus.com";

hidden_primary_timekeeper_email.value =  testEmail;
hidden_alternate_timekeeper_email.value =  testEmail;
hidden_primary_student_timekeeper_email.value =  testEmail;
hidden_alternate_student_timekeeper_email.value =  testEmail;
hidden_official_approver_email.value =  testEmail;
hidden_official_cd_approver_email.value =  testEmail;
hidden_primary_warrant_approver_email.value =  testEmail;
hidden_alternate_warrant_approver_email.value =  testEmail;
hidden_primary_cms_student_approver_email.value =  testEmail;
hidden_alternate_cms_student_approver_email.value =  testEmail;


hidden_department_approver_email.value =  testEmail;
hidden_college_approver_email.value =  testEmail;	
hidden_division_approver_email.value =  testEmail;

 //TO BE REMOVED After TESTING
/*
hidden_college_approver_userID.value = "jluzzi";
hidden_college_approver_name.value = "Joseph Luzzi";
*/


hidden_row_count.value = Row1.instanceManager.instanceCount;

if((timeKeeper_approving_official_add.value !== null) && (timeKeeper_approving_official_add.value != "Select Approving Official")){
	faculty_staff_flag.value = "1";
}else{
	faculty_staff_flag.value = null;
}


if((approving_official_cd_add.value !== null) && (approving_official_cd_add.value != "Select Approving Official")){
	student_attendance_flag.value = "1";
}else{
	student_attendance_flag.value = null;
}


if((warrant_primary_add.value !== null) && (warrant_primary_add.value != "Select Warrant Coordinator")){
	primary_warrant_coordinator_flag.value = "1";
}else{
	primary_warrant_coordinator_flag.value = null;
}


if((warrant_alternate_add.value !== null) && (warrant_alternate_add.value != "Select Warrant Coordinator")){
	alternate_warrant_coordinator_flag.value = "1";
}else{
	alternate_warrant_coordinator_flag.value = null;
}


if((cms_student_primary_add.value !== null) && (cms_student_primary_add.value != "Select CMS Student Coordinator")){
	primary_cms_student_flag.value = "1";
}else{
	primary_cms_student_flag.value = null;
}


if((cms_student_alternate_add.value !== null) && (cms_student_alternate_add.value != "Select CMS Student Coordinator")){
	alternate_cms_student_flag.value = "1";
}else{
	alternate_cms_student_flag.value = null;
}

if((deparment_approver_names.value !== null) && (deparment_approver_names.value != "Select Department Approver")){
	department_flag.value = "1";
}else{
	department_flag.value = null;
}
if((college_approver_names.value !== null) && (college_approver_names.value != "Select College Dean")){
	college_flag.value = "1";
}else{
	college_flag.value = null;
}
if((division_approver_names.value !== null) && (division_approver_names.value != "Select Division Head or Designee")){
	division_flag.value = "1";
}else{
	division_flag.value = null;
}

var primaryFacultyStaffDeleteListValue = document.querySelector(".primaryFacultyStaffDelete-list select").options.length;
var alternateFacultyStaffDeleteListValue = document.querySelector(".alternateFacultyStaffDelete-list select").options.length;
var approvingOfficialFacultyStaffDeleteListValue = document.querySelector(".approvingOfficialFacultyStaffDelete-list select").options.length;
var primaryStudentDeleteListValue = document.querySelector(".primaryStudentDelete-list select").options.length;
var alternateStudentDeleteListValue = document.querySelector(".alternateStudentDelete-list select").options.length;
var approvingOfficialStudentDeleteListValue = document.querySelector(".approvingOfficialStudentDelete-list select").options.length;
var primaryWarrantDeleteListValue = document.querySelector(".primaryWarrantDelete-list select").options.length;
var alternateWarrantDeleteListValue = document.querySelector(".alternateWarrantDelete-list select").options.length;
var primaryCMSStudentDeleteListValue = document.querySelector(".primaryCMSStudentDelete-list select").options.length;
var alternateCMSStudentDeleteListValue = document.querySelector(".alternateCMSStudentDelete-list select").options.length;

var primaryFacultyStaffDeleteListValueFlag = false;
var alternateFacultyStaffDeleteListValueFlag = false;
var approvingOfficialFacultyStaffDeleteListValueFlag = false;
var primaryStudentDeleteListValueFlag = false;
var alternateStudentDeleteListValueFlag = false;
var approvingOfficialStudentDeleteListValueFlag = false;
var primaryWarrantDeleteListValueFlag = false;
var alternateWarrantDeleteListValueFlag = false;
var primaryCMSStudentDeleteListValueFlag = false;
var alternateCMSStudentDeleteListValueFlag = false;

if(primaryFacultyStaffDeleteListValue > 1 && timeKeeper_primary_delete.value !== null){
	primaryFacultyStaffDeleteListValueFlag = true;
}

if(alternateFacultyStaffDeleteListValue > 1 && timeKeeper_alternate_delete.value !== null){
	alternateFacultyStaffDeleteListValueFlag = true;
}

if(approvingOfficialFacultyStaffDeleteListValue > 1 && timeKeeper_approving_official_delete.value !== null){
	approvingOfficialFacultyStaffDeleteListValueFlag = true;
}

if(primaryStudentDeleteListValue > 1 && student_primary_delete.value !== null){
	primaryStudentDeleteListValueFlag = true;
}

if(alternateStudentDeleteListValue > 1 && student_alternate_delete.value !== null){
	alternateStudentDeleteListValueFlag = true;
}

if(approvingOfficialStudentDeleteListValue > 1 && approving_official_cd_delete.value !== null){
	approvingOfficialStudentDeleteListValueFlag = true;
}

if(primaryWarrantDeleteListValue > 1 && warrant_primary_delete.value !== null){
	primaryWarrantDeleteListValueFlag = true;
}

if(alternateWarrantDeleteListValue > 1 && warrant_alternate_delete.value !== null){
	alternateWarrantDeleteListValueFlag = true;
}

if(primaryCMSStudentDeleteListValue > 1 && cms_student_primary_delete.value !== null){
	primaryCMSStudentDeleteListValueFlag = true;
}

if(alternateCMSStudentDeleteListValue > 1 && cms_student_alternate_delete.value !== null){
	alternateCMSStudentDeleteListValueFlag = true;
}

if(division.value === null){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].PayrollServicesPanel[0].division[0]");
	showErrorModal("Alert !", "Please select a division");
}
else if(college.value === null){
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].PayrollServicesPanel[0].college[0]");
	showErrorModal("Alert !", "Please select a college");
}
else if(rowCount > 1 && RemoveButtonFlag.value == 1){
	if(data_table.Row1.department_Id.value === null || data_table.Row1.agency_unit.value === null){
  	//if(department_Id.value === null || agency_unit.value === null){
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].PayrollServicesPanel[0].data_table[0].Row1[0].department_Id[0]");
		showErrorModal("Alert !", "Please select a department ID or agency/unit");
	}  
	/*else if(department_Id.value === null || agency_unit.value === null){
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].PayrollServicesPanel[0].data_table[0].Row1[0].department_Id[0]");
		showErrorModal("Alert !", "Please select a department ID or agency/unit");
	} */
	else{
		formValidation();
	}
}
else if(rowCount > 1 && RemoveButtonFlag.value != 1){
	if(department_Id.value === null || agency_unit.value === null){
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].PayrollServicesPanel[0].data_table[0].Row1[0].department_Id[0]");
		showErrorModal("Alert !", "Please select a department ID or agency/unit");
	}  
	else{
		formValidation();
	}
}
else if(rowCount == 1){
  	if(data_table.Row1.department_Id.value === null || data_table.Row1.agency_unit.value === null){
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].PayrollServicesPanel[0].data_table[0].Row1[0].department_Id[0]");
		showErrorModal("Alert !", "Please select a department ID or agency/unit");
	}
	else{
		formValidation();
	}
}


function formValidation(){

		if((primaryFacultyStaffDeleteListValueFlag == true) && (timeKeeper_primary_add.value === null || timeKeeper_primary_add.value == "Select TimeKeeper")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendancePrimaryPanel[0].timeKeeper_primary_add[0]");
			showErrorModal("Alert !", "Please select primary faculty/staff timekeeper to add");
		}
		else if(primaryFacultyStaffDeleteListValue > 1 && timeKeeper_primary_delete.value === null && timeKeeper_primary_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendancePrimaryPanel[0].timeKeeper_primary_delete[0]");
			showErrorModal("Alert !", "Please select primary faculty/staff timekeeper to delete");
		}
		else if((alternateFacultyStaffDeleteListValueFlag == true) && (timeKeeper_alternate_add.value === null || timeKeeper_alternate_add.value == "Select TimeKeeper")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceAlternatePanel[0].timeKeeper_alternate_add[0]");
			showErrorModal("Alert !", "Please select alternate faculty/staff timekeeper to add");
		}
		else if(alternateFacultyStaffDeleteListValue > 1 && timeKeeper_alternate_delete.value === null && timeKeeper_alternate_add.value !== null ){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceAlternatePanel[0].timeKeeper_alternate_delete[0]");
			showErrorModal("Alert !", "Please select alternate faculty/staff timekeeper to delete");
		}
		else if((approvingOfficialFacultyStaffDeleteListValueFlag == true) && (timeKeeper_approving_official_add.value === null || timeKeeper_approving_official_add.value == "Select Approving Official")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceApprovingOfficialPanel[0].timeKeeper_approving_official_add[0]");
			showErrorModal("Alert !", "Please select faculty/staff approving official to add");
		}
		else if(approvingOfficialFacultyStaffDeleteListValue > 1 && timeKeeper_approving_official_delete.value === null && timeKeeper_approving_official_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceApprovingOfficialPanel[0].timeKeeper_approving_official_delete[0]");
			showErrorModal("Alert !", "Please select faculty/staff approving official to delete");
		}
		else if((primaryStudentDeleteListValueFlag == true) && (student_primary_add.value === null) || (student_primary_add.value == "Select TimeKeeper")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendancePrimaryPanel[0].student_primary_add[0]");
			showErrorModal("Alert !", "Please select primary student timekeeper to add");
		}
		else if(primaryStudentDeleteListValue > 1 && student_primary_delete.value === null && student_primary_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendancePrimaryPanel[0].student_primary_delete[0]");
			showErrorModal("Alert !", "Please select primary student timekeeper to delete");
		}
		else if((alternateStudentDeleteListValueFlag == true) && (student_alternate_add.value === null) || (student_alternate_add.value == "Select TimeKeeper")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceAlternatePanel[0].student_alternate_add[0]");
			showErrorModal("Alert !", "Please select alternate student timekeeper to add");
		}
		else if(alternateStudentDeleteListValue > 1 && student_alternate_delete.value === null && student_alternate_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceAlternatePanel[0].student_alternate_delete[0]");
			showErrorModal("Alert !", "Please select alternate student timekeeper to delete");
		}
		else if((approvingOfficialStudentDeleteListValueFlag == true) && (approving_official_cd_add.value === null) || (approving_official_cd_add.value == "Select Approving Official")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceApprovingOfficialCDPanel[0].approving_official_cd_add[0]");
			showErrorModal("Alert !", "Please select student approving official to add");
		}
		else if(approvingOfficialStudentDeleteListValue > 1 && approving_official_cd_delete.value === null && approving_official_cd_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceApprovingOfficialCDPanel[0].approving_official_cd_delete[0]");
			showErrorModal("Alert !", "Please select student approving official to delete");
		}
		else if((primaryWarrantDeleteListValueFlag == true) && (warrant_primary_add.value === null) || (warrant_primary_add.value == "Select Warrant Coordinator")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorPrimaryPanel[0].warrant_primary_add[0]");
			showErrorModal("Alert !", "Please select primary warrant coordinator to add");
		}
		else if(primaryWarrantDeleteListValue > 1 && warrant_primary_delete.value === null && warrant_primary_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorPrimaryPanel[0].warrant_primary_delete[0]");
			showErrorModal("Alert !", "Please select primary warrant coordinator to delete");
		}
		else if((alternateWarrantDeleteListValueFlag == true) && (warrant_alternate_add.value === null) || (warrant_alternate_add.value == "Select Warrant Coordinator")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_add[0]");
			showErrorModal("Alert !", "Please select alternate warrant coordinator to add");
		}
		else if(alternateWarrantDeleteListValue > 1 && warrant_alternate_delete.value === null && warrant_alternate_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_delete[0]");
			showErrorModal("Alert !", "Please select alternate warrant coordinator to delete");
		}
		else if((primaryCMSStudentDeleteListValueFlag == true) && (cms_student_primary_add.value === null) || (cms_student_primary_add.value == "Select CMS Student Coordinator")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentPrimaryPanel[0].cms_student_primary_add[0]");
			showErrorModal("Alert !", "Please select primary CMS student coordinator to add");
		}
		else if(primaryCMSStudentDeleteListValue > 1 && cms_student_primary_delete.value === null && cms_student_primary_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentPrimaryPanel[0].cms_student_primary_delete[0]");
			showErrorModal("Alert !", "Please select primary CMS student coordinator to delete");
		}
		else if((alternateCMSStudentDeleteListValueFlag == true) && (cms_student_alternate_add.value === null) || (cms_student_alternate_add.value == "Select CMS Student Coordinator")){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_add[0]");
			showErrorModal("Alert !", "Please select alternate CMS student coordinator to add");
		}
		else if(alternateCMSStudentDeleteListValue > 1 && cms_student_alternate_delete.value === null && cms_student_alternate_add.value !== null){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_delete[0]");
			showErrorModal("Alert !", "Please select alternate CMS student coordinator to delete");
		}

		else if((timeKeeper_primary_add.value == timeKeeper_alternate_add.value) && ((timeKeeper_primary_add.value !== null ) && (timeKeeper_alternate_add.value !== null ))){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].FacultyStaffAttendancePanel[0].FacultyStaffAttendanceAlternatePanel[0].timeKeeper_alternate_add[0]");
			showErrorModal("Alert !", "The primary and alternate timekeeper cannot be the same");
			timeKeeper_alternate_add.value = null;
		}

		else if((student_primary_add.value == student_alternate_add.value) && ((student_primary_add.value !== null ) && (student_alternate_add.value !== null ))){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].StudentAttendancePanel[0].StudentAttendanceAlternatePanel[0].student_alternate_add[0]");
			showErrorModal("Alert !", "The primary and alternate timekeeper cannot be the same");
			student_alternate_add.value = null;
		}
		else if((warrant_primary_add.value == warrant_alternate_add.value) && ((warrant_primary_add.value !== null ) && (warrant_alternate_add.value !== null ))){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_add[0]");
			showErrorModal("Alert !", "The primary and alternate warrant coordinator cannot be the same");
			warrant_alternate_add.value = null;
		}
		else if((cms_student_primary_add.value == cms_student_alternate_add.value) && ((cms_student_primary_add.value !== null ) && (cms_student_alternate_add.value !== null ))){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].CmsStudentConfirmationTicketsPanel[0].CMSStudentAlternatePanel[0].cms_student_alternate_add[0]");
			showErrorModal("Alert !", "The primary and alternate cms student coordinator cannot be the same");
			cms_student_alternate_add.value = null;
		}

		else if((timeKeeper_primary_add.value == warrant_primary_add.value) && ((timeKeeper_primary_add.value !== null) && (warrant_primary_add.value !== null)) || (timeKeeper_alternate_add.value === warrant_primary_add.value) && ((timeKeeper_alternate_add.value !== null) && (warrant_primary_add.value !== null)) || (timeKeeper_approving_official_add.value === warrant_primary_add.value) && ((timeKeeper_approving_official_add.value !== null) && (warrant_primary_add.value !== null)) || (student_primary_add.value === warrant_primary_add.value) && ((student_primary_add.value !== null) && (warrant_primary_add.value !== null)) || (student_alternate_add.value === warrant_primary_add.value) && ((student_alternate_add.value !== null) && (warrant_primary_add.value !== null)) || (approving_official_cd_add.value === warrant_primary_add.value) && ((approving_official_cd_add.value !== null) && (warrant_primary_add.value !== null))){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorPrimaryPanel[0].warrant_primary_add[0]");
			showErrorModal("Alert !", "The Timekeeper role and Warrant Coordinator role may not be performed by the same person.");
			warrant_primary_add.value = null;
		}
		else if((timeKeeper_primary_add.value === warrant_alternate_add.value) && ((timeKeeper_primary_add.value !== null) && (warrant_alternate_add.value !== null)) || (timeKeeper_alternate_add.value === warrant_alternate_add.value) && ((timeKeeper_alternate_add.value !== null) && (warrant_alternate_add.value !== null)) || (timeKeeper_approving_official_add.value === warrant_alternate_add.value) && ((timeKeeper_approving_official_add.value !== null) && (warrant_alternate_add.value !== null)) || (student_primary_add.value === warrant_alternate_add.value) && ((student_primary_add.value !== null) && (warrant_alternate_add.value !== null)) || (student_alternate_add.value === warrant_alternate_add.value) && ((student_alternate_add.value !== null) && (warrant_alternate_add.value !== null)) || (approving_official_cd_add.value === warrant_alternate_add.value) && ((approving_official_cd_add.value !== null) && (warrant_alternate_add.value !== null))){
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].WarrantCoordinatorPanel[0].WarrantCoordinatorAlternatePanel[0].warrant_alternate_add[0]");
			showErrorModal("Alert !", "The Timekeeper role and Warrant Coordinator role may not be performed by the same person.");
			warrant_alternate_add.value = null;
		}

		else if((timeKeeper_primary_delete.value === null) && (timeKeeper_primary_add.value === null) && (timeKeeper_alternate_delete.value === null) && (timeKeeper_alternate_add.value === null) && (timeKeeper_approving_official_delete.value === null) && (timeKeeper_approving_official_add.value === null) && (student_primary_delete.value === null) && (student_primary_add.value === null) && (student_alternate_delete.value === null) && (student_alternate_add.value === null) && (approving_official_cd_delete.value === null) && (approving_official_cd_add.value === null) && (warrant_primary_delete.value === null) && (warrant_primary_add.value === null) && (warrant_alternate_delete.value === null) && (warrant_alternate_add.value === null) && (cms_student_primary_delete.value === null) && (cms_student_primary_add.value === null) && (cms_student_alternate_delete.value === null) && (cms_student_alternate_add.value === null) || (timeKeeper_primary_delete.value == "Select TimeKeeper") && (timeKeeper_primary_add.value == "Select TimeKeeper") && (timeKeeper_alternate_delete.value == "Select TimeKeeper") && (timeKeeper_alternate_add.value == "Select TimeKeeper") && (timeKeeper_approving_official_delete.value == "Select Approving Official") && (timeKeeper_approving_official_add.value == "Select Approving Official") && (student_primary_delete.value != "Select TimeKeeper") && (student_primary_add.value == "Select TimeKeeper") && (student_alternate_delete.value == "Select TimeKeeper") && (student_alternate_add.value == "Select TimeKeeper") && (approving_official_cd_delete.value == "Select Approving Official") && (approving_official_cd_add.value == "Select Approving Official") && (warrant_primary_delete.value == "Select Warrant Coordinator") && (warrant_primary_add.value == "Select Warrant Coordinator") && (warrant_alternate_delete.value == "Select Warrant Coordinator") && (warrant_alternate_add.value == "Select Warrant Coordinator") && (cms_student_primary_delete.value != "Select CMS Student Coordinator") && (cms_student_primary_add.value == "Select CMS Student Coordinator") && (cms_student_alternate_delete.value == "Select CMS Student Coordinator")  && (cms_student_alternate_add.value == "Select CMS Student Coordinator")){
			showErrorModal("Alert !", "Please select at least one name to add");
		}
		else if(deparment_approver_names.value === null && college_approver_names.value === null && division_approver_names.value === null){
				guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].DelegationOfAuthorityChangeActions[0].DepartmentApprover[0].deparment_approver_names[0]");
				showErrorModal("Alert !", "Please select at least one approver to add");
		}
		else{
			guideBridge.submit();
		}
}
        }
	}
}
