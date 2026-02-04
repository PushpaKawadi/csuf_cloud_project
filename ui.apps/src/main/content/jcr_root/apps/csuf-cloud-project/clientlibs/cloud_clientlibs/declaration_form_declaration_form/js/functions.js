/**
 * @function declaration_form_declaration_form.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            
var boldTextCHK = document.querySelectorAll(".boldText label");  // To make the checkbox labels bold
for(var i=0;i<boldTextCHK.length;i++){
  	boldTextCHK[i].style.fontWeight = 'bold';
}


var gifModal = document.getElementById('gifModal');
gifModal.style.display = "none"; 


if (StageIndicator.value === null){  	
	ChangeCurrentMajorToNewMajorSignaturePanel.visible = false; 
  	AddSecondMajorSignaturePanel.visible = false;
  	DropMajorRecordsSignaturePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  	SignatureCertificatePanel.visible = false;
  	FirstMinorSignaturePanel.visible = false;
  	SecondMinorSignaturePanel.visible = false;
}
else if(StageIndicator.value == "ToChairNewMajor"){
	StudentInformationPanel.enabled = false;
  	StudentCWID.enabled = false;
  	StudentSignaturePanel.enabled = false;  	
  	ChangeCurrentMajorToNewMajorPanel.visible = false;  	
  	DoubleMajors.visible = false;  	
  	MinorPanel.visible = false;  	
  	CertificatePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  
  
  	if(CurrentMajorToNewMajorCHK.value !== null){
      	ChangeCurrentMajorToNewMajorPanel.visible = true;
      	ChangeCurrentMajorToNewMajorSignaturePanel.enabled = true;
      	CurrentMajorToNewMajorPanel.enabled = false; 
      
    }  // end of the script for Tab A (New Additional Major/Concentration)
  

  	if(AddSecondMajorCHK.value !== null || ChangeAdditionalMajorCHK.value !== null || DropSecondMajorCHK.value !== null){
      	DoubleMajors.visible = true;
      	
      	if(AddSecondMajorCHK.value !== null){
          	AddSecondMajorPanel.enabled = false;
          	ChangeAdditionalMajorPanel.visible = false;
        }else{
          	AddSecondMajorPanel.visible = false;
        }
      	
      	if(ChangeAdditionalMajorCHK.value !== null){
          	ChangeAdditionalMajorPanel.enabled = false;
          	AddSecondMajorPanel.visible = false;
        }else{
          	ChangeAdditionalMajorPanel.visible = false;
        }
      
      	if(DropSecondMajorCHK.value !== null){
          	DropSecondMajorPanel.enabled = false;
        }else{
          	DropSecondMajorPanel.visible = false;
          	DropMajorRecordsSignaturePanel.visible = false;
        }
      
      	if(AddSecondMajorCHK.value === null && ChangeAdditionalMajorCHK.value === null){
          	AddSecondMajorSignaturePanel.visible = false;
          
        }
      	
      AddSecondMajorSignaturePanel.visible = false;
      DropMajorRecordsSignaturePanel.visible = false;
      FirstMinorSignaturePanel.visible = false;
      SignatureCertificatePanel.visible = false;
    }  // end of the script for Tab B (Add Additional Major/Concentration)
  
  
  	if(DeclareMinorCHK.value !== null || AddSecondOrThirdMinorCHK.value !== null || DropMinorCHK.value !== null || ChangeMinorCHK.value !== null){
      	MinorPanel.visible = true; 
      	SecondMinorSignaturePanel.visible = false;
      	FirstMinorSignaturePanel.visible = false;
      
      	if(DeclareMinorCHK.value !== null){
          	DeclareMinorPanel.enabled = false;
          	AddSecondOrThirdMinorPanel.visible = false;
            DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;          	
        }
      
      	if(AddSecondOrThirdMinorCHK.value !== null){
          	AddSecondOrThirdMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	
        }
      
     	if(DropMinorCHK.value !== null){
          	DropMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	         	
        } 
      
      	if(ChangeMinorCHK.value !== null){
          	ChangeCurrentMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;             	
        }else{
          	ChangeCurrentMinorPanel.visible = false;
        }
    }  // end of the script for Tab C (Minor)
  
  	if(DeclareCertificateCHK.value !== null || DropCertificateCHK.value !== null){
      	CertificatePanel.visible = true;
      	SignatureCertificatePanel.visible = false;
      	if(DeclareCertificateCHK.value !== null){
          	DeclareCertificatePanel.enabled = false;
          	DropCertificatePanel.visible = false;
        }else{
          	DeclareCertificatePanel.visible = false;
        }
      	
      if(DropCertificateCHK.value !== null){
          	DropCertificatePanel.visible = true;
          	DropCertificatePanel.enabled = false;
        }else{
          	DropCertificatePanel.visible = false;
        }
    }
}else if(StageIndicator.value == "ToChairSecondMajor"){
  	StudentInformationPanel.enabled = false;
  	StudentCWID.enabled = false;
  	StudentSignaturePanel.enabled = false;  	
  	ChangeCurrentMajorToNewMajorPanel.visible = false;  	
  	DoubleMajors.visible = false;  	
  	MinorPanel.visible = false;  	
  	CertificatePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  
  
  	if(CurrentMajorToNewMajorCHK.value !== null){
      	ChangeCurrentMajorToNewMajorPanel.visible = true;
      	ChangeCurrentMajorToNewMajorSignaturePanel.enabled = false;
      	CurrentMajorToNewMajorPanel.enabled = false; 
      
    }  // end of the script for Tab A (New Additional Major/Concentration)
  

  	if(AddSecondMajorCHK.value !== null || ChangeAdditionalMajorCHK.value !== null || DropSecondMajorCHK.value !== null){
      	DoubleMajors.visible = true;
      	
      	if(AddSecondMajorCHK.value !== null){
          	AddSecondMajorPanel.enabled = false;
          	ChangeAdditionalMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
        }else{
          	AddSecondMajorPanel.visible = false;
        }
      	
      	if(ChangeAdditionalMajorCHK.value !== null){
          	ChangeAdditionalMajorPanel.enabled = false;
          	AddSecondMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
        }else{
          	ChangeAdditionalMajorPanel.visible = false;
        }
      
      	if(DropSecondMajorCHK.value !== null){
          	DropSecondMajorPanel.enabled = false;
          	
        }else{
          	DropSecondMajorPanel.visible = false;          	
        }
      if(AddSecondMajorCHK.value === null && ChangeAdditionalMajorCHK.value === null){
          	AddSecondMajorSignaturePanel.visible = false;
          
        }
      
      DropMajorRecordsSignaturePanel.visible = false;
      FirstMinorSignaturePanel.visible = false;
      SignatureCertificatePanel.visible = false; 
    }  // end of the script for Tab B (Add Additional Major/Concentration)
  

  	if(DeclareMinorCHK.value !== null || AddSecondOrThirdMinorCHK.value !== null || DropMinorCHK.value !== null || ChangeMinorCHK.value !== null){
      	MinorPanel.visible = true; 
      	SecondMinorSignaturePanel.visible = false;
      	FirstMinorSignaturePanel.visible = false; 
      
      	if(DeclareMinorCHK.value !== null){
          	DeclareMinorPanel.enabled = false;
          	AddSecondOrThirdMinorPanel.visible = false;
            DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;          	
          	
        }else{
          	DeclareMinorPanel.visible = false;
        } 
      
      	if(AddSecondOrThirdMinorCHK.value !== null){
          	AddSecondOrThirdMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;          	
          	
        }else{
          	AddSecondOrThirdMinorPanel.visible = false;
        }
      
      	if(DropMinorCHK.value !== null){
          	DropMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;          	
        }else{
          	DropMinorPanel.visible = false;
        }
      
     	if(ChangeMinorCHK.value !== null){
          	ChangeCurrentMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;   
          	FirstMinorSignaturePanel.visible = false;          	
        }else{
          	ChangeCurrentMinorPanel.visible = false;
        }
    }  // end of the script for Tab C (Minor)
  
  	if(DeclareCertificateCHK.value !== null || DropCertificateCHK.value !== null){
      	CertificatePanel.visible = true;
      	SignatureCertificatePanel.visible = false;
      	if(DeclareCertificateCHK.value !== null){
          	DeclareCertificatePanel.enabled = false;
          	DropCertificatePanel.visible = false;
        }else{
          	DeclareCertificatePanel.visible = false;
        }
      	
      if(DropCertificateCHK.value !== null){
          	DropCertificatePanel.visible = true;
          	DropCertificatePanel.enabled = false;
        }else{
          	DropCertificatePanel.visible = false;
        }
    }
} 
else if(StageIndicator.value == "ToChairMinor"){
  	StudentInformationPanel.enabled = false;
  	StudentCWID.enabled = false;
  	StudentSignaturePanel.enabled = false;  	
  	ChangeCurrentMajorToNewMajorPanel.visible = false;  	
  	DoubleMajors.visible = false;  	
  	MinorPanel.visible = false;  	
  	CertificatePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  
  
  	if(CurrentMajorToNewMajorCHK.value !== null){
      	ChangeCurrentMajorToNewMajorPanel.visible = true;
      	ChangeCurrentMajorToNewMajorSignaturePanel.enabled = false;
      	CurrentMajorToNewMajorPanel.enabled = false; 
      
    }  // end of the script for Tab A (New Additional Major/Concentration)
  

  	if(AddSecondMajorCHK.value !== null || ChangeAdditionalMajorCHK.value !== null || DropSecondMajorCHK.value !== null){
      	DoubleMajors.visible = true;
      	
      	if(AddSecondMajorCHK.value !== null){
          	AddSecondMajorPanel.enabled = false;
          	ChangeAdditionalMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
          	AddSecondMajorSignaturePanel.enabled = false;
        }else{
          	AddSecondMajorPanel.visible = false;
        }
      	
      	if(ChangeAdditionalMajorCHK.value !== null){
          	ChangeAdditionalMajorPanel.enabled = false;
          	AddSecondMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
          	AddSecondMajorSignaturePanel.enabled = false;
        }else{
          	ChangeAdditionalMajorPanel.visible = false;
        }
      
      	if(DropSecondMajorCHK.value !== null){
          	DropSecondMajorPanel.enabled = false;
          	
        }else{
          	DropSecondMajorPanel.visible = false;          	
        }
      
      	if(AddSecondMajorCHK.value === null && ChangeAdditionalMajorCHK.value === null){
          	AddSecondMajorSignaturePanel.visible = false;
          
        }
      
      DropMajorRecordsSignaturePanel.visible = false;
      FirstMinorSignaturePanel.visible = false;
      SignatureCertificatePanel.visible = false;
    }  // end of the script for Tab B (Add Additional Major/Concentration)
  
  
  	if(DeclareMinorCHK.value !== null || AddSecondOrThirdMinorCHK.value !== null || DropMinorCHK.value !== null || ChangeMinorCHK.value !== null){
      	MinorPanel.visible = true; 
      	FirstMinorSignaturePanel.visible = false;
        SecondMinorSignaturePanel.visible = false;
      	if(DeclareMinorCHK.value !== null){
          	DeclareMinorPanel.enabled = false;
          	AddSecondOrThirdMinorPanel.visible = false;
            DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	FirstMinorSignaturePanel.visible = true;
        }
      
      	if(AddSecondOrThirdMinorCHK.value !== null){
          	AddSecondOrThirdMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	SecondMinorSignaturePanel.visible = true;
          	
        }
      
      	if(DropMinorCHK.value !== null){
          	DropMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	
        }
      
      	if(ChangeMinorCHK.value !== null){
          	ChangeCurrentMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;   
          	SecondMinorSignaturePanel.visible = true;
        }
    }  // end of the script for Tab C (Minor)
  
  	if(DeclareCertificateCHK.value !== null || DropCertificateCHK.value !== null){
      	CertificatePanel.visible = true;
      	SignatureCertificatePanel.visible = false;
      	if(DeclareCertificateCHK.value !== null){
          	DeclareCertificatePanel.enabled = false;
          	DropCertificatePanel.visible = false;
        }else{
          	DeclareCertificatePanel.visible = false;
        }
      	
      if(DropCertificateCHK.value !== null){
          	DropCertificatePanel.visible = true;
          	DropCertificatePanel.enabled = false;
        }else{
          	DropCertificatePanel.visible = false;
        }
    }
} 
else if(StageIndicator.value == "ToChairCertificate"){
  	StudentInformationPanel.enabled = false;
  	StudentCWID.enabled = false;
  	StudentSignaturePanel.enabled = false;  	
  	ChangeCurrentMajorToNewMajorPanel.visible = false;  	
  	DoubleMajors.visible = false;  	
  	MinorPanel.visible = false;  	
  	CertificatePanel.visible = false;
  	RecordsOfficeUseOnlyPanel.visible = false;
  
  
  	if(CurrentMajorToNewMajorCHK.value !== null){
      	ChangeCurrentMajorToNewMajorPanel.visible = true;
      	ChangeCurrentMajorToNewMajorSignaturePanel.enabled = false;
      	CurrentMajorToNewMajorPanel.enabled = false; 
      
    }  // end of the script for Tab A (New Additional Major/Concentration)
  

  	if(AddSecondMajorCHK.value !== null || ChangeAdditionalMajorCHK.value !== null || DropSecondMajorCHK.value !== null){
      	DoubleMajors.visible = true;
      	
      	if(AddSecondMajorCHK.value !== null){
          	AddSecondMajorPanel.enabled = false;
          	ChangeAdditionalMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
          	AddSecondMajorSignaturePanel.enabled = false;
        }else{
          	AddSecondMajorPanel.visible = false;
        }
      	
      	if(ChangeAdditionalMajorCHK.value !== null){
          	ChangeAdditionalMajorPanel.enabled = false;
          	AddSecondMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
          	AddSecondMajorSignaturePanel.enabled = false;
        }else{
          	ChangeAdditionalMajorPanel.visible = false;
        }
      
      	if(DropSecondMajorCHK.value !== null){
          	DropSecondMajorPanel.enabled = false;
          	
        }else{
          	DropSecondMajorPanel.visible = false;          	
        }
      	
      	if(AddSecondMajorCHK.value === null && ChangeAdditionalMajorCHK.value === null){
          	AddSecondMajorSignaturePanel.visible = false;
          
        }
      
      DropMajorRecordsSignaturePanel.visible = false;
      FirstMinorSignaturePanel.visible = false;
      SignatureCertificatePanel.visible = false;
    }  // end of the script for Tab B (Add Additional Major/Concentration)
  
  
  	if(DeclareMinorCHK.value !== null || AddSecondOrThirdMinorCHK.value !== null || DropMinorCHK.value !== null || ChangeMinorCHK.value !== null){
      	MinorPanel.visible = true; 
      	FirstMinorSignaturePanel.visible = false;  
        SecondMinorSignaturePanel.visible = false;
      
      	if(DeclareMinorCHK.value !== null){
          	DeclareMinorPanel.enabled = false;
          	AddSecondOrThirdMinorPanel.visible = false;
            DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	FirstMinorSignaturePanel.visible = true;
          	FirstMinorSignaturePanel.enabled = false;
        }
      
    	if(AddSecondOrThirdMinorCHK.value !== null){
          	AddSecondOrThirdMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	SecondMinorSignaturePanel.visible = true;
          	SecondMinorSignaturePanel.enabled = false;
        }
      
      	if(DropMinorCHK.value !== null){
          	DropMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	//DropMinorPanel.visible = true;
          	ChangeCurrentMinorPanel.visible = false;
          	
        }
      
      	if(ChangeMinorCHK.value !== null){
          	ChangeCurrentMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;   
          	SecondMinorSignaturePanel.visible = true;
          	SecondMinorSignaturePanel.enabled = false;
          	
        }
    }  // end of the script for Tab C (Minor)
  
  	if(DeclareCertificateCHK.value !== null || DropCertificateCHK.value !== null){
      	CertificatePanel.visible = true;
      
      	if(DeclareCertificateCHK.value !== null){
          	DeclareCertificatePanel.enabled = false;
          	DropCertificatePanel.visible = false;
          	SignatureCertificatePanel.visible = true;
        }else{
          	DeclareCertificatePanel.visible = false;
        }
      	
      if(DropCertificateCHK.value !== null){
          	DropCertificatePanel.visible = true;
          	DropCertificatePanel.enabled = false;
        }else{
          	DropCertificatePanel.visible = false;
        }
    }
} 
else if(StageIndicator.value == "ToRecords"){
  	StudentInformationPanel.enabled = false;
  	StudentCWID.enabled = false;
  	StudentSignaturePanel.enabled = false;  	
  	ChangeCurrentMajorToNewMajorPanel.visible = false;  	
  	DoubleMajors.visible = false;  	
  	MinorPanel.visible = false;  	
  	CertificatePanel.visible = false;
  	//RecordsOfficeUseOnlyPanel.visible = false;
  	DropMajorRecordsSignaturePanel.visible = false;
  	DropMinorRecordsSignaturePanel.visible = false;
  	DropCertificateRecordsSignaturePanel.visible = false;
  
  	if(CurrentMajorToNewMajorCHK.value !== null){
      	ChangeCurrentMajorToNewMajorPanel.visible = true;
      	ChangeCurrentMajorToNewMajorSignaturePanel.enabled = false;
      	CurrentMajorToNewMajorPanel.enabled = false; 
      
    }  // end of the script for Tab A (New Additional Major/Concentration)
  

  	if(AddSecondMajorCHK.value !== null || ChangeAdditionalMajorCHK.value !== null || DropSecondMajorCHK.value !== null){
      	DoubleMajors.visible = true;      	
      
      	if(AddSecondMajorCHK.value === null && ChangeAdditionalMajorCHK.value === null){
          	AddSecondMajorSignaturePanel.visible = false;
          	
        }else{
          	AddSecondMajorSignaturePanel.visible = true;
          	
        }
     
      	if(AddSecondMajorCHK.value !== null){
          	AddSecondMajorPanel.enabled = false;
          	ChangeAdditionalMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
          	AddSecondMajorSignaturePanel.enabled = false;
        }else{
          	AddSecondMajorPanel.visible = false;
        }
      	
      	if(ChangeAdditionalMajorCHK.value !== null){
          	ChangeAdditionalMajorPanel.enabled = false;
          	AddSecondMajorPanel.visible = false;
          	AddSecondMajorSignaturePanel.visible = true;
          	AddSecondMajorSignaturePanel.enabled = false;
			
        }else{
          	ChangeAdditionalMajorPanel.visible = false;
        }
      
      	if(DropSecondMajorCHK.value !== null){
          	DropSecondMajorPanel.enabled = false;         	
          	DropMajorRecordsSignaturePanel.visible = true;
          	//MajorRecordsOfficeUseOnly.visible = false;
        }else{
          	DropSecondMajorPanel.visible = false;
          	DropMajorRecordsSignaturePanel.visible = false;
        }
     
      FirstMinorSignaturePanel.visible = false;
      SignatureCertificatePanel.visible = false;
    }  // end of the script for Tab B (Add Additional Major/Concentration)
  
  
  	if(DeclareMinorCHK.value !== null || AddSecondOrThirdMinorCHK.value !== null || DropMinorCHK.value !== null || ChangeMinorCHK.value !== null){
      	MinorPanel.visible = true; 
      	FirstCode.visible = false;
      	SecondCode.visible = false;
      
      	if(DeclareMinorCHK.value !== null){
          	DeclareMinorPanel.enabled = false;
          	AddSecondOrThirdMinorPanel.visible = false;
            DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	FirstMinorSignaturePanel.visible = true;
          	FirstMinorSignaturePanel.enabled = false;
          	SecondMinorSignaturePanel.visible = false;
          	FirstCode.visible = true;
        } else{
          	DeclareMinorPanel.visible = false;
        }
      
     	if(AddSecondOrThirdMinorCHK.value !== null){
          	AddSecondOrThirdMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	DropMinorPanel.visible = false;
          	ChangeCurrentMinorPanel.visible = false;
          	SecondMinorSignaturePanel.visible = true;
          	SecondMinorSignaturePanel.enabled = false;
          	FirstMinorSignaturePanel.visible = false;
          	SecondCode.visible = true;
        } 
      
      	if(DropMinorCHK.value !== null){
          	DropMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;          	
          	AddSecondOrThirdMinorPanel.visible = false;          	
          	ChangeCurrentMinorPanel.visible = false;
          	FirstMinorSignaturePanel.visible = false;
          	SecondMinorSignaturePanel.visible = false;
          	FirstCode.visible = false;
      		SecondCode.visible = true;
          	DropMinorRecordsSignaturePanel.visible = true;
          
        }else{
          	DropMinorPanel.visible = false;
          	DropMinorRecordsSignaturePanel.visible = false;
          	
        } 
      
      	if(ChangeMinorCHK.value !== null){
          	ChangeCurrentMinorPanel.enabled = false;
          	DeclareMinorPanel.visible = false;
          	AddSecondOrThirdMinorPanel.visible = false;
          	DropMinorPanel.visible = false;   
          	FirstMinorSignaturePanel.visible = false;  
          	SecondMinorSignaturePanel.enabled = false;
          	SecondCode.visible = true;
        } 
    }  // end of the script for Tab C (Minor)
  
  	if(DeclareCertificateCHK.value !== null || DropCertificateCHK.value !== null){
      	CertificatePanel.visible = true;
      	
      	if(DeclareCertificateCHK.value !== null){
          	DeclareCertificatePanel.enabled = false;
          	DropCertificatePanel.visible = false;
          	SignatureCertificatePanel.visible = true;
          	SignatureCertificatePanel.enabled = false; 
          	DropCertificateRecordsSignaturePanel.visible = false;
        }else{
          	DeclareCertificatePanel.visible = false;
          	SignatureCertificatePanel.visible = false;
          	CertificateRecordsUseOnlyPanel.visible = false;
        }
      
      	if(DropCertificateCHK.value !== null){
          	DropCertificatePanel.visible = true;
          	DropCertificatePanel.enabled = false;
          	DropCertificateRecordsSignaturePanel.visible = true;
          	CertificateRecordsUseOnlyPanel.visible = false;
        }else{
          	DropCertificateRecordsSignaturePanel.visible = false;
        }
             
    }else{
      		CertificateRecordsUseOnlyPanel.visible = false;
    }  
	  
	if(CurrentMajorToNewMajorCHK.value == "1"){
		AdditionalMajorRecordsSignaturePanel.visible = false;
	}
	
	if(CurrentMajorToNewMajorCHK.value !== "1" && (AddSecondMajorCHK.value == "1" || ChangeAdditionalMajorCHK.value == "1")){
		MajorRecordsOfficeUseOnly.visible = false;
		AdditionalMajorRecordsSignaturePanel.visible = true;
	}
	
	if(CurrentMajorToNewMajorCHK.value == "1" && (AddSecondMajorCHK.value == "1" || ChangeAdditionalMajorCHK.value == "1")){
		MajorRecordsOfficeUseOnly.visible = true;
		AdditionalMajorRecordsSignaturePanel.visible = true;
	}
	
	if(CurrentMajorToNewMajorCHK.value !== "1" && AddSecondMajorCHK.value !== "1" && ChangeAdditionalMajorCHK.value !== "1"){
		MajorRecordsOfficeUseOnly.visible = false;
		AdditionalMajorRecordsSignaturePanel.visible = false;
	}
		
  MinorRecordsUseOnlyPanel.visible = false;  	
  
  if(DeclareMinorCHK.value !== null || AddSecondOrThirdMinorCHK.value !== null || ChangeMinorCHK.value !== null){
		MinorRecordsUseOnlyPanel.visible = true;
  }
      
} 
  
  
  
  
  
 
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    if (ChangeCurrentMajorToNewMajorSignaturePanel.visible === false) {

        var valueExclusionArr = []; // to be populated for various subject values later

        CurrentMajorToNewMajorCHK.value = null;
        AddSecondMajorCHK.value = null;
        ChangeAdditionalMajorCHK.value = null;
        DropSecondMajorCHK.value = null;

        var rowcountRemoveAll = Row1.instanceManager.instanceCount;
        for (i = 0; i <= rowcountRemoveAll; i++) {
            //alert("button");
            Row1.instanceManager.removeInstance(Row1.instanceIndex);
        }

        $.ajax({

            type: 'GET',

            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresponse) {
                //var userValue = myresponse.userId;
                //var userValue = 'jacobdeanjohnsonkyl';  // From term 2223 Spring 2022
                var userValue = 'nathan.zarate15';
                //var userValue = 'alyssareneev';      // Current Major as Chemistry BS
              	//var userValue = 'nguyenanhkim';		  // Current Major as Chemistry BA
                LogUser.value = userValue;
                if (StageIndicator.value === null) {
                    workflow_initiator.value = userValue;
                }

                $.ajax({

                    type: 'GET',

                    url: "/bin/getStudentPeronalInformationWithUserID",

                    data: {
                        userID: userValue
                    },

                    dataType: 'json',

                    success: function(myresponse) {
                        if (myresponse.length >= 1) {
                            /*if(myresponse[0].ADMIT_TERM == "2217"){
                                      showErrorModal("Alert !","Newly admitted freshmen and transfers must wait until the first day of the term to add or change majors or minors.");
                                      gifModal.style.display = "none";
                                  } 
                                  else{
                                      StudentLastName.value = myresponse[0].student_LName;
                                      StudentFirstName.value = myresponse[0].student_FName;                        
                                      HiddenUserID.value = myresponse[0].student_UserID;
                                      StudentCWID.value = myresponse[0].student_ID;
                                      StudentCWID.enabled = false;
                                      StudentPhone.value = myresponse[0].student_Phone;                                         
                                      StudentEmail.value = myresponse[0].student_Email;
                                      CatalogYear.value = myresponse[0].term_descr;
                                  }*/
                            var acadPlanVal = myresponse[0].ACAD_PLAN;
                            if (myresponse[0].ADMIT_TERM == "2223" && myresponse[0].FUL_COLLEGE == "10039" && acadPlanVal.startsWith("42") && myresponse[0].LOA_FLAG == 'Y') {
                                StudentLastName.value = myresponse[0].student_LName;
                                StudentFirstName.value = myresponse[0].student_FName;
                                HiddenUserID.value = myresponse[0].student_UserID;
                              	console.log("user ID= " + myresponse[0].student_UserID);
                                StudentCWID.value = myresponse[0].student_ID;
                                StudentCWID.enabled = false;
                                StudentPhone.value = myresponse[0].student_Phone;
                                //StudentEmail.value = myresponse[0].student_Email;
                                StudentEmail.value = "ajeet.chhonkar@thoughtfocus.com";
                                CatalogYear.value = myresponse[0].term_descr;
                              	
                            } else if (myresponse[0].ADMIT_TERM == "2223") {
                                showErrorModal("Alert !", "Newly admitted freshmen and transfers must wait until the first day of the term to add or change majors or minors.");
                              	submit1589890835750.enabled = false;
                                gifModal.style.display = "none";
                            } else {
                                StudentLastName.value = myresponse[0].student_LName;
                                StudentFirstName.value = myresponse[0].student_FName;
                                HiddenUserID.value = myresponse[0].student_UserID;
                                StudentCWID.value = myresponse[0].student_ID;
                                StudentCWID.enabled = false;
                                StudentPhone.value = myresponse[0].student_Phone;
                                //StudentEmail.value = myresponse[0].student_Email;
                                StudentEmail.value = "ajeet.chhonkar@thoughtfocus.com";
                                CatalogYear.value = myresponse[0].term_descr;
                              
                            }
                            gifModal.style.display = "none";
                        } else {
                            showErrorModal("Alert !", "No matching records found");                          	
                            gifModal.style.display = "none";
                        }


                        $.ajax({

                            type: 'GET',

                            url: "/bin/getCurrentMajor",

                            data: {
                                userID: HiddenUserID.value
                            },

                            dataType: 'json',

                            success: function(myresponse) {

                                if (myresponse.length >= 1) {
                                    HiddenCurrentMajor.value = myresponse[0].CURRENT_MAJOR;
                                    StudentInformationTabCurrentMajor.value = myresponse[0].CURRENT_MAJOR;
                                    HiddenCurrentMajorAcadCode.value = myresponse[0].ACAD_PLAN;
                                    valueExclusionArr.push(myresponse[0].ACAD_PLAN + "-maj");

                                }

                                $.ajax({

                                    type: 'GET',

                                    url: "/bin/getCurrentAdditionalMajor",

                                    data: {
                                        userID: HiddenUserID.value

                                    },

                                    dataType: 'json',

                                    success: function(myresponse) {

                                        gifModal.style.display = "none";

                                        var currentAdditionalMajors = document.querySelector(".HiddenCurrentAdditionalMajorList1 select");

                                        /*   var length = currentAdditionalMajors.options.length;					
												for (i = length; i > 0; i--) {
												  currentAdditionalMajors.options[i] = null;
												} */
                                        for (var i = 0; i < myresponse.length; i++) {
                                            var opt = document.createElement("option");
                                            var currentAdditionalMajorsAcadPlan = myresponse[i].ACAD_PLAN;
                                            valueExclusionArr.push(myresponse[i].ACAD_PLAN + "-add");
                                            var firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan = currentAdditionalMajorsAcadPlan.slice(0, -4);
                                            opt.value = firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan;
                                            opt.innerHTML = firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan;
                                            currentAdditionalMajors.appendChild(opt);
                                        }


                                        if (myresponse.length >= 1) {
                                            for (i = 0; i < myresponse.length; i++) {
                                                Row1.instanceManager.addInstance();
                                                Row1.instanceManager.instances[i].CurrentMajorConcentrationColumn.enabled = false;
                                                Row1.instanceManager.instances[i].CurrentMajorConcentrationColumn.value = myresponse[i].CURRENT_MAJOR;
                                            }
                                            var rowcount = Row1.instanceManager.instanceCount;
                                            Row1.instanceManager.removeInstance(rowcount - 1);
                                            gifModal.style.display = "none";
                                        } else if (myresponse.length === 0) {
                                            CurrentMajorConcentrationColumn.value = "No data available";
                                        }
                                        $.ajax({

                                            type: 'GET',

                                            url: "/bin/getCurrentMinors",

                                            data: {
                                                userID: HiddenUserID.value
                                            },

                                            dataType: 'json',

                                            success: function(myresponse) {

                                                gifModal.style.display = "none";
                                                var HiddenExclusionArr = document.querySelector(".checkMinorToMajor select");

                                                if (myresponse.length >= 1) {

                                                    for (var m = 0; m < myresponse.length; m++) {
                                                        valueExclusionArr.push(myresponse[m].Acad_Plan + "-min");
                                                    }

                                                    gifModal.style.display = "none";
                                                }
                                                //console.log("lenght   ",valueExclusionArr.length);
                                                for (var o in valueExclusionArr) {
                                                    console.log("abcbc ", valueExclusionArr[o]);
                                                    var opt1 = document.createElement("option");
                                                    var minorAcadPlan = valueExclusionArr[o];
                                                    opt1.value = valueExclusionArr[o];
                                                    opt1.innerHTML = valueExclusionArr[o];
                                                    HiddenExclusionArr.appendChild(opt1);
                                                }

                                            }
                                        });
                                    }

                                });
                            }
                        });

                    }
                }); // end 1st ajax  
            }
        });
    }

}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    $.ajax({

        type: 'GET',
        url: "/bin/getAllLoggedInUserDetailsLookup",
        dataType: 'json',
        success: function(response) {
          	
          	if(response.length > 0){
              	LogUser.value = response[0].USERID;
                HiddenAdvisorName.value = response[0].FIRSTNAME + " " + response[0].LASTNAME;
                HiddenAdvisorEmail.value = response[0].EMAILID;
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
 * @function declaration_form_declaration_form.generated_guideRootPanel_init3
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_guideRootPanel_init3 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null) {    
    RecordsOfficeUseOnlyPanel.visible = false; 	
}
if (StageIndicator.value == "ToRecords") {
    StudentInformationPanel.visible = true;
    StudentInformationPanel.enabled = false;
	HeadingPanel.enabled = false;
  	ChangerMajorPanel.enabled = false; 
    AdvisorSignaturePanel.visible = true;
    AdvisorSignaturePanel.enabled = false;
    RecordsOfficeUseOnlyPanel.visible = true;    
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_StudentInformationPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_StudentInformationPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_cwid_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_cwid_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if (StageIndicator.value === null) {
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    var valueExclusionArr = []; // to be populated for various subject values later

    CurrentMajorToNewMajorCHK.value = null;
    AddSecondMajorCHK.value = null;
    ChangeAdditionalMajorCHK.value = null;
    DropSecondMajorCHK.value = null;

    var cwidVal = this.value;
    var acadPlanVal = "'42PBUSUND','42PINBUND','42PECNUND'";
    var userIDVal;

    var rowcountRemoveAll = Row1.instanceManager.instanceCount;
    for (i = 0; i <= rowcountRemoveAll; i++) {
        Row1.instanceManager.removeInstance(Row1.instanceIndex);
    }

    $.ajax({

        type: 'GET',

        url: "/bin/getDeclarationDetails",

        data: {
            action: 'STUDENT_DETAILS',
            cwid: cwidVal,
            acadPlan: acadPlanVal
        },

        dataType: 'json',

        success: function(myresponse) {
            if (myresponse.length >= 1) {
                FName.value = myresponse[0].STUDENT_FNAME;
                LName.value = myresponse[0].STUDENT_LNAME;
                HiddenUserID.value = myresponse[0].STUDENT_USERID;
                userIDVal = HiddenUserID.value;
                AdmitTerm.value = myresponse[0].TERM_DESCR;
              	current_major.value = myresponse[0].PROGRAMS;
				
              	if (myresponse[0].ACAD_PLAN == "42PBUSUND") {
                    formerMajorRB.value = 1;
                } 
              	else if (myresponse[0].ACAD_PLAN == "42PINBUND") {
                    formerMajorRB.value = 2;
                } 
              	else if (myresponse[0].ACAD_PLAN == "42PECNUND") {
                    formerMajorRB.value = 3;
                } 
              
                //getCurrentMajor(userIDVal);

                gifModal.style.display = "none";
            } else {
                showErrorModal("Alert !", "No matching records found");
                gifModal.style.display = "none";
            }
        }
    });
}

function getCurrentMajor(userIDVal) {
    $.ajax({

        type: 'GET',

        url: "/bin/getCurrentMajor",

        data: {
            userID: userIDVal
        },

        dataType: 'json',

        success: function(myresponse) {

            if (myresponse.length >= 1) {              
                //HiddenCurrentMajor.value = myresponse[0].CURRENT_MAJOR;
                current_major.value = myresponse[0].CURRENT_MAJOR;
                HiddenCurrentMajorAcadCode.value = myresponse[0].ACAD_PLAN;
                //valueExclusionArr.push(myresponse[0].ACAD_PLAN + "-maj");
            }
        }
    });
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_LName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_LName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_FName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_FName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_MName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_MName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AdmitTerm_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AdmitTerm_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_CurrentMajorToNewMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_CurrentMajorToNewMajorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){  
    NewMajor.enabled = true; 
    getAllMajorsList();
  
}else{
    CurrentMajor.value = null;
    CurrentMajorAcadPlanCode.value = null;
    CurrentMajor.enabled = false;
    NewMajor.value = null;
    NewMajor.enabled = false;
    NewMajorAcadPlanCode.value = null;
    CurrentMajorAcadPlanCode.value = null;  
}

function getAllMajorsList(){
  if (StageIndicator.value === null) {
      var gifModal = document.getElementById('gifModal');
      gifModal.style.display = "block";

      var userId = HiddenUserID.value;
      var allMajorsArray = [];

      CurrentMajor.value = current_major.value;
      CurrentMajorAcadPlanCode.value = HiddenCurrentMajorAcadCode.value;

      $.ajax({

          type: 'GET',
          url: "/bin/getAllMajors",
          data: {},
          dataType: 'json',

          success: function(myresponse) {
              if (myresponse.length >= 1) {

                  for (var allMajors = 0; allMajors < myresponse.length; allMajors++) {
                      allMajorsArray.push(myresponse[allMajors].ALL_MAJORS);
                  }
                  NewMajor.items = allMajorsArray;
              }
              gifModal.style.display = "none";
          }
      }); // end ajax							
  }
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_CurrentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_CurrentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_NewMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_NewMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_NewMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_NewMajor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";	
	
	var program = this.value;    
  
  	var that = this;
  	var hiddenNewMajorCodeForValidation;
  	var currentAdditionalMajorToNewMajorValidationFlag = false;
	var dropMinorAcadPlanSlicedValue;
	var changedToNewAcadPlanSlicedValue;
	var hiddenNewMajorCodeForValidationSlicedValue; 
  	
	
	if(CurrentMajorToNewMajorCHK.value == "1" && DropMinorCHK.value == "1"){
			var dropMinorAcadPlanValue = DropMinorAcadPlan.value;
			dropMinorAcadPlanSlicedValue = dropMinorAcadPlanValue.slice(0, 6);
	}
	if(CurrentMajorToNewMajorCHK.value == "1" && ChangeMinorCHK.value == "1"){
			var changedToNewAcadPlanValue = ChangeCurrentMinorAcadPlan.value;
			changedToNewAcadPlanSlicedValue = changedToNewAcadPlanValue.slice(0, 6);
	}
  

      
      if(this.value !== "Select Major/Concentration"){      
      
            $.ajax({

                  type: 'GET', 

                  url:"/bin/getAllMajorsCode",

                 data:  {					 
                           TrnscrDescr: program
                    },

                  dataType: 'json',

                  success: function(myresponse){
                          if(myresponse.length >= 1){
                                HiddenMinorToMajorCheckAcadPlan.value =  myresponse[0].ACAD_PLAN; 
                            	hiddenNewMajorCodeForValidation = HiddenMinorToMajorCheckAcadPlan.value; 
                            	hiddenNewMajorCodeForValidationSlicedValue = hiddenNewMajorCodeForValidation.slice(0,6);
                            	HiddenNewMajorAcadPlanForValidation.value = hiddenNewMajorCodeForValidationSlicedValue;
                          }
                    
                    	  var chemistryFlag = false;                    		
                    
                    	  if((CurrentMajorAcadPlanCode.value == "66CHEMUBS") && (HiddenMinorToMajorCheckAcadPlan.value == "66CHEMUBA")){
                            	chemistryFlag = true;
                          }
                    	  else if((CurrentMajorAcadPlanCode.value == "66CHEMUBA") && (HiddenMinorToMajorCheckAcadPlan.value == "66CHEMUBS")){
                            	chemistryFlag = true;
                          }
                    
						  var isPromptNeededMaj = false;
						  var isPromptNeededAdd = false;
						  var isPromptNeededMin = false;
						  var artBFAFlag = false;
						  var currentMinorToNewMajorValidationFlag = false;
                    	  var currentAdditionalMajorSlicedValue;
						  var currentCourseTypeAcadPlanList = document.querySelector(".checkMinorToMajor select");						
						  var newMajorCode = HiddenMinorToMajorCheckAcadPlan.value; 						
						  var newMajorCodeAfterSlice = newMajorCode.slice(0, 6);
						
						  for(var i=1;i<currentCourseTypeAcadPlanList.length; i++){							 
							  var allCourseTypes = currentCourseTypeAcadPlanList.options[i].value; 
							  
							  if(allCourseTypes.includes("maj")){									
									var allCourseTypesAfterSliceMaj = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMaj == newMajorCodeAfterSlice){
										isPromptNeededMaj = true;											
										
									}
							  }
							  else if(allCourseTypes.includes("add")){									
									var allCourseTypesAfterSliceAdd = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceAdd == newMajorCodeAfterSlice){
										isPromptNeededAdd = true;											
										
									}
							  }
							  else if(allCourseTypes.includes("min")){									
									var allCourseTypesAfterSliceMin = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMin == newMajorCodeAfterSlice){
										isPromptNeededMin = true;											
										
									}
							  }
						  }
                    	  
                    	  if(ChangeAdditionalMajorCHK.value == "1"){
                            	var currentAdditionalMajor = ChangeAdditionalCurrentMajorAcadCode.value;
                            	currentAdditionalMajorSlicedValue = currentAdditionalMajor.slice(0, 9);
                            	
                          }
						  if(CurrentMajorAcadPlanCode.value === "26ARTSUBA" && HiddenMinorToMajorCheckAcadPlan.value === "26ARTSUBFA"){
									artBFAFlag = true;											
										
						  }
                    	  if(currentAdditionalMajorSlicedValue == hiddenNewMajorCodeForValidation){
                            	currentAdditionalMajorToNewMajorValidationFlag = true;
                          }
						  
						  if((dropMinorAcadPlanSlicedValue || changedToNewAcadPlanSlicedValue) == hiddenNewMajorCodeForValidationSlicedValue){
								currentMinorToNewMajorValidationFlag = true;
						  }						  					  
						  
                    	 
                    	  if(isPromptNeededMaj === true && that.value !== "Select Major/Concentration" && artBFAFlag === false && chemistryFlag === false){
							  that.value = "Select Major/Concentration"; 
                              showErrorModal("Alert!","Your current major/concentration is same as the new major/concentration");                              
                              NewMajorAcadPlanCode.value = null;
                              //alert("value matched");
                          }
                    	  else if((isPromptNeededAdd === true && that.value !== "Select Major/Concentration") && (that.value != ChangeAdditionalCurrentMajor.value) && DropSecondMajorCHK.value === null && currentAdditionalMajorToNewMajorValidationFlag === false){
							  that.value = "Select Major/Concentration"; 
                              showErrorModal("Alert!","Your current additional major/concentration(s) is same as the new major/concentration");
                              NewMajorAcadPlanCode.value = null;
                              //alert("value matched");
                          }
						  else if(that.value === AddSecondMajor.value && AddSecondMajor.value !== "Select Major/Concentration"){
								showErrorModal("Alert!","Your current major/concentration is same as the new additional major/concentration");
								that.value = "Select Major/Concentration"; 
								AddSecondMajorAcadCode.value = null;
						  }
						  else if(that.value === ChangeAdditionalNewMajor.value && ChangeAdditionalNewMajor.value !== "Select Major/Concentration"){
								showErrorModal("Alert!","Your current major/concentration is same as the new changed additional major/concentration");
								that.value = "Select Major/Concentration"; 
								AddSecondMajorAcadCode.value = null;
						  }
						  else if(isPromptNeededMin === true && that.value !== "Select Major/Concentration" && currentMinorToNewMajorValidationFlag === false){
							showErrorModal("Alert!","Please drop the minor before making this selection");
							that.value = "Select Major/Concentration"; 
							NewMajorAcadPlanCode.value = null;
							//alert("value matched");
						 }
						  else{
                              if(myresponse.length >= 1){
                                NewMajorAcadPlanCode.value = myresponse[0].ACAD_PLAN;
                              } 

                          $.ajax({

                                  type: 'GET', 

                                  url:"/bin/getChairDetails",

                                 data:  {					 
                                           Program: program
                                    },

                                  dataType: 'json',

                                  success: function(myresponse){
                                          if(myresponse.length >= 1){
                                                  HiddenChairEmailNewMajor.value = myresponse[0].CHAIR_EMAIL;
                                                  HiddenChairUserIDNewMajor.value = myresponse[0].CHAIR_USERID;
                                                  HiddenChairNameNewMajor.value = myresponse[0].CHAIR_EMPNAME;
                                                  HiddenDepartmentNameNewMajor.value = myresponse[0].DEPTNAME;
                                                  HiddenDpartmentIDNewMajor.value = myresponse[0].DEPTID;
                                            	  HiddenCollegeCodeNewMajor.value = myresponse[0].FUL_COLLEGE;
                                          }
                                          gifModal.style.display = "none";
                                  }
                          }); // end 1st ajax	
						}
                          gifModal.style.display = "none";
                  }
              }); // end 2nd ajax	
		}else{
          	gifModal.style.display = "none";
        }
      gifModal.style.display = "none";   
}



        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_CurrentMajorAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_CurrentMajorAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_NewMajorAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_NewMajorAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_CurrentMajorConcentrationColumn_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_CurrentMajorConcentrationColumn_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondMajorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

	var gifModal = document.getElementById('gifModal');
	gifModal.style.display = "block";


  var acadProg = HiddenAcadProg.value;
  var acadPlanType = HiddenAcadPlanType.value;

  if(this.value !== null){
    ChangeAdditionalMajorCHK.value = null;
    AddSecondMajor.enabled = true;       

    $.ajax({

      type: 'GET', 

      url:"/bin/getAllAdditionalMajors",

      data:  {
        AcadProg: 'UGD' 
        
      },

      dataType: 'json',

      success: function(myresponse){

        gifModal.style.display = "none";

        if(myresponse.length >= 1){

          var additionalMajorList = document.querySelector(".newAdditionalMajor-list select");

          var length = additionalMajorList.options.length;					// Code For Clearing Primary Degree Objectives
          for (i = length; i > 0; i--) {
            additionalMajorList.options[i] = null;
          } 
          for(var i=0; i < myresponse.length; i++){
            var opt3 = document.createElement("option");
            opt3.value = myresponse[i].ALL_MAJORS;
            //alert("values are="+opt3.value);
            opt3.innerHTML = myresponse[i].ALL_MAJORS; 
            additionalMajorList.appendChild(opt3);
          }        

        }
      }
    });

  }else{
    gifModal.style.display = "none";
    AddSecondMajorAcadCode.value = null;
    AddSecondMajor.value = "Select Major/Concentration";
    AddSecondMajor.enabled = false;
  }
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondMajor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
	var that = this;
	var program = this.value;
	var hiddenNewAdditionalMajorForValidationSlicedValue;
	var dropMinorAcadPlanSlicedValue;
	var changedToNewAcadPlanSlicedValue;
	
	if(AddSecondMajorCHK.value == "1" && DropMinorCHK.value == "1"){
			var dropMinorAcadPlanValue = DropMinorAcadPlan.value;
			dropMinorAcadPlanSlicedValue = dropMinorAcadPlanValue.slice(0, 6);
	}
	if(AddSecondMajorCHK.value == "1" && ChangeMinorCHK.value == "1"){
			var changedToNewAcadPlanValue = ChangeCurrentMinorAcadPlan.value;
			changedToNewAcadPlanSlicedValue = changedToNewAcadPlanValue.slice(0, 6);
	}
	
	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		
      if(this.value !== "Select Major/Concentration"){

				$.ajax({

					type: 'GET', 

					url:"/bin/getAllAdditionalMajorsCode",

				    data:  {					
							 TrnscrDescr: program
					  },

					dataType: 'json',

					success: function(myresponse){
						 if(myresponse.length >= 1){
                           HiddenNewAdditionalMajorConcentrationAcadPlanForMinor.value =  myresponse[0].ACAD_PLAN;						   
                           var hiddenNewAdditionalMajorForValidation = HiddenNewAdditionalMajorConcentrationAcadPlanForMinor.value; 
                           hiddenNewAdditionalMajorForValidationSlicedValue = hiddenNewAdditionalMajorForValidation.slice(0,6);
                           HiddenNewAdditionalMajorAcadPlanForValidation.value = hiddenNewAdditionalMajorForValidationSlicedValue;
                         }
						
						var isPromptNeededMaj = false;
						var isPromptNeededAdd = false;
						var isPromptNeededMin = false;
						var currentMinorToNewAdditionalMajorValidationFlag = false;
						var currentMinorAcadPlanList = document.querySelector(".checkMinorToMajor select");						
						var additionalNewMajorCode = HiddenNewAdditionalMajorConcentrationAcadPlanForMinor.value; 						
						var additionalNewMajorCodeAfterSlice = additionalNewMajorCode.slice(0, 6);
						
                        for(var i=1;i<currentMinorAcadPlanList.length; i++){							 
							  var allCourseTypes = currentMinorAcadPlanList.options[i].value; 
							  
							  if(allCourseTypes.includes("maj") && CurrentMajorToNewMajorCHK.value === null){									
									var allCourseTypesAfterSliceMaj = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMaj == additionalNewMajorCodeAfterSlice){
										isPromptNeededMaj = true;											
										
									}
							  } 
							  if(allCourseTypes.includes("add")){									
									var allCourseTypesAfterSliceAdd = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceAdd == additionalNewMajorCodeAfterSlice){
										isPromptNeededAdd = true;											
										
									}
							  }
							  else if(allCourseTypes.includes("min")){									
									var allCourseTypesAfterSliceMin = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMin == additionalNewMajorCodeAfterSlice){
										isPromptNeededMin = true;											
										
									}
							  }
						}
						
					if((dropMinorAcadPlanSlicedValue || changedToNewAcadPlanSlicedValue) == hiddenNewAdditionalMajorForValidationSlicedValue){
							currentMinorToNewAdditionalMajorValidationFlag = true;
					  }
					
					var chemistryFlag = false; 
                    var additionalCodewith2;
                    var additionalCodeValue ; 
                    if(HiddenNewAdditionalMajorConcentrationAcadPlanForMinor.value !== null){
						additionalCodewith2 = HiddenNewAdditionalMajorConcentrationAcadPlanForMinor.value;                      
						additionalCodeValue = additionalCodewith2.slice(0, additionalCodewith2.length -1);
					}                    
					
                    if((HiddenCurrentMajorAcadCode.value == "66CHEMUBS") && (additionalCodeValue == "66CHEMUBA")){
                        chemistryFlag = true;
                    }
                    else if((HiddenCurrentMajorAcadCode.value == "66CHEMUBA") && (additionalCodeValue == "66CHEMUBS")){
                        chemistryFlag = true;
                    }		
					  
                     if(isPromptNeededMaj === true && that.value !== "Select Major/Concentration" && chemistryFlag === false){
							showErrorModal("Alert!","Your current major/concentration is same as the new additional major/concentration");
							that.value = "Select Major/Concentration"; 
							AddSecondMajorAcadCode.value = null;
                        //alert("value matched");
                      }                      
                      else if(that.value === NewMajor.value){
                        	showErrorModal("Alert!","Your current major/concentration is same as the new additional major/concentration");
							that.value = "Select Major/Concentration"; 
							AddSecondMajorAcadCode.value = null;
                      }
					  else if(isPromptNeededAdd === true && that.value !== "Select Major/Concentration"){
							showErrorModal("Alert!","Your current additional major/concentrations is same as the new additional major/concentration");
							that.value = "Select Major/Concentration"; 
							AddSecondMajorAcadCode.value = null;
                        //alert("value matched");
                      }
					 else if(isPromptNeededMin === true && that.value !== "Select Major/Concentration" && currentMinorToNewAdditionalMajorValidationFlag === false){
							showErrorModal("Alert!","Please drop the minor before making this selection");
							that.value = "Select Major/Concentration"; 
							AddSecondMajorAcadCode.value = null;
                        //alert("value matched");
                      }	  
					  else{
                        if(myresponse.length >= 1){
                          AddSecondMajorAcadCode.value = myresponse[0].ACAD_PLAN;
                        }	
							

						$.ajax({

							type: 'GET', 

							url:"/bin/getChairDetails",

						   data:  {                      
									 Program: program
							  },

							dataType: 'json',

							success: function(myresponse){
									if(myresponse.length >= 0){
										gifModal.style.display = "none";              	

										HiddenChairEmailSecondMajor.value = myresponse[0].CHAIR_EMAIL;
										HiddenChairUserIDSecondMajor.value = myresponse[0].CHAIR_USERID;
										HiddenChairNameSecondMajor.value = myresponse[0].CHAIR_EMPNAME;
										HiddenDepartmentNameSecondMajor.value = myresponse[0].DEPTNAME;
										HiddenDepartmentIDSecondMajor.value = myresponse[0].DEPTID; 
                                        HiddenCollegeCodeSecondMajor.value = myresponse[0].FUL_COLLEGE;
									}
							}
						}); // end 1st ajax	
					  }
					}
				});
		  }
      }
        	gifModal.style.display = "none"; 
      
	}

			
	

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondMajorAcadCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondMajorAcadCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeAdditionalMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeAdditionalMajorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

	  var gifModal = document.getElementById('gifModal');
	  gifModal.style.display = "block";

	  var userId = HiddenUserID.value;
	  //var userId = 'sachin_k';
  
     //sachin_k

	  if(this.value !== null){
        	AddSecondMajorCHK.value = null;
        	ChangeAdditionalCurrentMajor.enabled = true;
        	ChangeAdditionalNewMajor.enabled = true;
        

            $.ajax({

              type: 'GET', 

              url:"/bin/getCurrentAdditionalMajor",

              data:  {
                userID: userId 

              },

              dataType: 'json',

              success: function(myresponse){

                gifModal.style.display = "none"; 

					if(myresponse.length >= 1){

					  var currentAdditionalMajor = document.querySelector(".currentAddtionalMajor-list select");

					  var length = currentAdditionalMajor.options.length;					
					  for (var i = length; i > 0; i--) {
						currentAdditionalMajor.options[i] = null;
					  } 
					  for(var p=0; p < myresponse.length; p++){
						var opt3 = document.createElement("option");
						opt3.value = myresponse[p].CURRENT_MAJOR;
						//alert("values are="+opt3.value);
						opt3.innerHTML = myresponse[p].CURRENT_MAJOR; 
						currentAdditionalMajor.appendChild(opt3);
					  }        
									  

						$.ajax({

							  type: 'GET', 

							  url:"/bin/getAllAdditionalMajors",

							  data:  {
								AcadProg: 'UGD' 

							  },

							  dataType: 'json',

							  success: function(myresponse){

									gifModal.style.display = "none";

									if(myresponse.length >= 1){

											var additionalMajorList = document.querySelector(".newAdditionalMajor-list1 select");
											var length = additionalMajorList.options.length;					
											for (i = length; i > 0; i--) {
												additionalMajorList.options[i] = null;
											} 
									for(var i=0; i < myresponse.length; i++){
										var opt3 = document.createElement("option");
										opt3.value = myresponse[i].ALL_MAJORS;
										//alert("values are="+opt3.value);
										opt3.innerHTML = myresponse[i].ALL_MAJORS; 
										additionalMajorList.appendChild(opt3);
									}        

									}
							  }
						});	
					}else{
						
							showErrorModal("Alert !", "You have not enrolled for additional major/concentration. Please add additional major/concentration first");
                      		ChangeAdditionalCurrentMajor.enabled = false;
                      		ChangeAdditionalNewMajor.enabled = false;
                      		ChangeAdditionalCurrentMajorAcadCode.enabled = false;
                      		ChangeAdditionalNewMajorAcadCode.enabled = false;
					}
                }
            });
	  }else{
		gifModal.style.display = "none";
        ChangeAdditionalCurrentMajor.enabled = false;
        ChangeAdditionalCurrentMajor.value = "Select Major/Concentration";
        ChangeAdditionalNewMajor.enabled = false;
        ChangeAdditionalNewMajor.value = "Select Major/Concentration";
        ChangeAdditionalCurrentMajorAcadCode.value = null;
        ChangeAdditionalNewMajorAcadCode.value = null;
        ChangeAdditionalCurrentMajorAcadCode.value = null;        
		
	  }
}


        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeAdditionalCurrentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeAdditionalCurrentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeAdditionalCurrentMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeAdditionalCurrentMajor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";	
	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		
		if(this.value !== "Select Major/Concentration"){
			$.ajax({

					type: 'GET', 

					url:"/bin/getCurrentAdditionalMajorsCode",

				   data:  {
							 userID: HiddenUserID.value,
							 TrnscrDescr: this.value
					  },

					dataType: 'json',

					success: function(myresponse){
							if(myresponse.length >= 1){
									ChangeAdditionalCurrentMajorAcadCode.value = myresponse[0].ACAD_PLAN;
							}
							gifModal.style.display = "none";
					}
				}); // end 1st ajax	
		}
	}
}
gifModal.style.display = "none";
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeAdditionalNewMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeAdditionalNewMajor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            	if(StageIndicator.value === null){
		var gifModal = document.getElementById('gifModal');
		gifModal.style.display = "block";	
	  
		var descr = this.value;      
      	var that = this;
		var hiddenChangeAdditionalMajorForValidationSlicedValue;
		var dropMinorAcadPlanSlicedValue;
		var changedToNewAcadPlanSlicedValue;
		
		if(ChangeAdditionalMajorCHK.value == "1" && DropMinorCHK.value == "1"){
				var dropMinorAcadPlanValue = DropMinorAcadPlan.value;
				dropMinorAcadPlanSlicedValue = dropMinorAcadPlanValue.slice(0, 6);
		}
		if(ChangeAdditionalMajorCHK.value == "1" && ChangeMinorCHK.value == "1"){
				var changedToNewAcadPlanValue = ChangeCurrentMinorAcadPlan.value;
				changedToNewAcadPlanSlicedValue = changedToNewAcadPlanValue.slice(0, 6);
		}
		
		if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
			
			if(this.value !== "Select Major/Concentration"){
				
					$.ajax({

							type: 'GET', 

							url:"/bin/getAllAdditionalMajorsCode",

						    data:  {

									 TrnscrDescr: descr
							  },

							dataType: 'json',

							success: function(myresponse){
										   if(myresponse.length >= 1){

											 HiddenNewAdditionalAcadPlan.value = myresponse[0].ACAD_PLAN;
												                 
                                             var hiddenChangeAdditionalMajorForValidation = HiddenNewAdditionalAcadPlan.value; 
                                             hiddenChangeAdditionalMajorForValidationSlicedValue = hiddenChangeAdditionalMajorForValidation.slice(0,6);
                                             HiddenChangeAdditionalMajorAcadPlanForValidation.value = hiddenChangeAdditionalMajorForValidationSlicedValue;
										}
										gifModal.style.display = "none";

										var isPromptNeededMaj = false;
										var isPromptNeededAdd = false;
										var isPromptNeededMin = false;
										var currentMinorToChangedAdditionalMajorValidationFlag = false;
										var currentMinorAcadPlanList = document.querySelector(".checkMinorToMajor select");						
										var additionalNewMajorCode = HiddenNewAdditionalAcadPlan.value; 						
										var additionalNewMajorCodeAfterSlice = additionalNewMajorCode.slice(0, 6);
										
										for(var i=1;i<currentMinorAcadPlanList.length; i++){							 
											  var allCourseTypes = currentMinorAcadPlanList.options[i].value; 
											  
											 if(allCourseTypes.includes("maj") && CurrentMajorToNewMajorCHK.value === null){														
													var allCourseTypesAfterSliceMaj = allCourseTypes.slice(0, 6);									
													if(allCourseTypesAfterSliceMaj == additionalNewMajorCodeAfterSlice){													
														isPromptNeededMaj = true;											
														
													}
											  }
											  if(allCourseTypes.includes("add")){														
													var allCourseTypesAfterSliceAdd = allCourseTypes.slice(0, 6);									
													if(allCourseTypesAfterSliceAdd == additionalNewMajorCodeAfterSlice){														
														isPromptNeededAdd = true;											
														
													}
											  }
											  else if(allCourseTypes.includes("min")){													
													var allCourseTypesAfterSliceMin = allCourseTypes.slice(0, 6);									
													if(allCourseTypesAfterSliceMin == additionalNewMajorCodeAfterSlice){														
														isPromptNeededMin = true;											
														
													}
											  }
										}
										
									if((dropMinorAcadPlanSlicedValue || changedToNewAcadPlanSlicedValue) == hiddenChangeAdditionalMajorForValidationSlicedValue){
											currentMinorToChangedAdditionalMajorValidationFlag = true;
									}	
										
										
									  
									 if(isPromptNeededMaj === true && that.value !== "Select Major/Concentration"){
                                        	that.value = "Select Major/Concentration"; 
											ChangeAdditionalNewMajorAcadCode.value = null;
											showErrorModal("Alert!","Your current major is same as the new additional major/concentration");
											
										//alert("value matched");
									  }
                              
                              		  if(that.value === NewMajor.value){
                                          that.value = "Select Major/Concentration"; 
                                          ChangeAdditionalNewMajorAcadCode.value = null;
                                          showErrorModal("Alert!","Your current major/concentration is same as the new additional major/concentration");
                                          
                                      }
									  else if(isPromptNeededAdd === true && that.value !== "Select Major/Concentration"){
                                        	that.value = "Select Major/Concentration"; 
											ChangeAdditionalNewMajorAcadCode.value = null;
											showErrorModal("Alert!","Your current additional major/concentration is same as the new additional major/concentration");
											
										//alert("value matched");
									  }
									 else if(isPromptNeededMin === true && that.value !== "Select Major/Concentration" && currentMinorToChangedAdditionalMajorValidationFlag === false){
                                       		that.value = "Select Major/Concentration"; 
											ChangeAdditionalNewMajorAcadCode.value = null;
											showErrorModal("Alert!","Please drop the minor before making this selection");
											
										//alert("value matched");
									  }	  	 
                              		else {
											if(myresponse.length >= 1){
												ChangeAdditionalNewMajorAcadCode.value = myresponse[0].ACAD_PLAN;
											}

                                      $.ajax({

                                          type: 'GET', 

                                          url:"/bin/getChairDetails",

                                          data:  {                      
                                                   Program: descr
                                            },

                                          dataType: 'json',

                                          success: function(myresponse){
                                                  if(myresponse.length >= 0){
                                                      gifModal.style.display = "none";              	

                                                      HiddenChairEmailSecondMajor.value = myresponse[0].CHAIR_EMAIL;
                                                      HiddenChairUserIDSecondMajor.value = myresponse[0].CHAIR_USERID;
                                                      HiddenChairNameSecondMajor.value = myresponse[0].CHAIR_EMPNAME;
                                                      HiddenDepartmentNameSecondMajor.value = myresponse[0].DEPTNAME;
                                                      HiddenDepartmentIDSecondMajor.value = myresponse[0].DEPTID;
                                                      HiddenCollegeCodeSecondMajor.value = myresponse[0].FUL_COLLEGE;
                                                  }
										}
									}); // end 1st ajax	
								}
							}
						}); // end 1st ajax	
			
		}else{
			gifModal.style.display = "none";	
		}
	}
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeAdditionalCurrentMajorAcadCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeAdditionalCurrentMajorAcadCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeAdditionalNewMajorAcadCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeAdditionalNewMajorAcadCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropSecondMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropSecondMajorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value !== null){  
    MajorToDrop.enabled = true;
  	
}else{  
    MajorToDrop.value = "Select Major/Concentration";
    MajorToDrop.enabled = false;
  	MajorToDropAcadPlanCode.value = null;
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropSecondMajorCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropSecondMajorCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){

	  var gifModal = document.getElementById('gifModal');
	  gifModal.style.display = "block";

	  var userId = HiddenUserID.value;
      //var userId = 'sachin_k';
  //sachin_k

	  if(this.value !== null){

		$.ajax({

		  type: 'GET', 

		  url:"/bin/getCurrentAdditionalMajor",

		  data:  {
			userID: userId 
			
		  },

		  dataType: 'json',

		  success: function(myresponse){

			gifModal.style.display = "none";

			if(myresponse.length >= 1){

			  var majorDropList = document.querySelector(".majorToDrop-list select");

			  var length = majorDropList.options.length;					// Code For Clearing Primary Degree Objectives
			  for (i = length; i > 0; i--) {
				majorDropList.options[i] = null;
			  } 
			  for(var i=0; i < myresponse.length; i++){
				var opt3 = document.createElement("option");
				opt3.value = myresponse[i].CURRENT_MAJOR;
				//alert("values are="+opt3.value);
				opt3.innerHTML = myresponse[i].CURRENT_MAJOR; 
				majorDropList.appendChild(opt3);
			  }        

			}else{						
					showErrorModal("Alert !", "You have not enrolled for additional major/concentration. Please add additional major/concentration first");
					MajorToDrop.enabled = false;
					MajorToDropAcadPlanCode.enabled = false;					
				}
		  }
		});

	  }else{
		gifModal.style.display = "none";
		
	  }
}


        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_MajorToDrop_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_MajorToDrop_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_MajorToDrop_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_MajorToDrop_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	var program = this.value;
  
  	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		
		if(this.value !== "Select Major/Concentration"){
          
          	/*if(HiddenUserID.value == "crodarte"){
              	MajorToDropAcadPlanCode.value = "42PECNUND2";
            }
      
			if(this.value === ChangeAdditionalCurrentMajor.value && this.value !== "Select Major/Concentration"){
				showErrorModal("Alert !", "Current additional major/concentration to change and drop major/concentration cannot be same");
				this.value = "Select Major/Concentration";
				gifModal.style.display = "none";
			}else{ */

				$.ajax({

						type: 'GET', 

						url:"/bin/getCurrentAdditionalMajorsCode",

					   data:  {
								 userID: HiddenUserID.value,
								 TrnscrDescr: program
						  },

						dataType: 'json',

						success: function(myresponse){
								if(myresponse.length >= 1){
                                  
									MajorToDropAcadPlanCode.value = myresponse[0].ACAD_PLAN;
                                  
								}
								gifModal.style.display = "none";

						$.ajax({

							type: 'GET', 

							url:"/bin/getChairDetails",

						   data:  {                      
									 Program: program
							  },

							dataType: 'json',

							success: function(myresponse){
									if(myresponse.length >= 0){
										gifModal.style.display = "none";              	

										HiddenChairEmailDropMajor.value = myresponse[0].CHAIR_EMAIL;
										HiddenChairUserIDDropMajor.value = myresponse[0].CHAIR_USERID;
										HiddenChairNameDropMajor.value = myresponse[0].CHAIR_EMPNAME;
										HiddenDepartmentIDDropMajor.value = myresponse[0].DEPTNAME;
										HiddenDepartmentNameDropMajor.value = myresponse[0].DEPTID;
                                      	HiddenCollegeCodeDropMajor.value = myresponse[0].FUL_COLLEGE;
									}
							}
						}); // end 1st ajax	
					}
				}); // end 2nd ajax	
			}
		}else{
			gifModal.style.display = "none";
		}
	//}
}
gifModal.style.display = "none";
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_MajorToDropAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_MajorToDropAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareMinorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

        if(this.value !== null){	
          FirstCode.value = DeclareMinorAcadPlan.value;
          DeclareMinor.enabled = true;
          AddSecondOrThirdMinorCHK.value = null;
          DropMinorCHK.value = null;
          ChangeMinorCHK.value = null;

            $.ajax({

                type: 'GET', 

                url:"/bin/getAllMinorsUpdated",

                dataType: 'json',

                success: function(myresponse){

                        gifModal.style.display = "none";

                        if(myresponse.length >= 1){                 

                            var declareMinorList = document.querySelector(".declareMinor-list select");

                            var length = declareMinorList.options.length;					
                            for (i = length; i > 0; i--) {
                              declareMinorList.options[i] = null;
                            } 
                            for(var i=0; i < myresponse.length; i++){
                              var opt = document.createElement("option");
                              opt.value = myresponse[i].All_minors;
                              //alert("values are="+opt.value);
                              opt.innerHTML = myresponse[i].All_minors; 
                              declareMinorList.appendChild(opt);
                            }                                                                           	                  
                        }
						
						$.ajax({

							type: 'GET', 

							url:"/bin/getCurrentMinors",
						  
						   data:  {
									 userID: HiddenUserID.value                    
							  },

							dataType: 'json',

							success: function(myresponse){

									gifModal.style.display = "none";

									if(myresponse.length >= 1){                 

										var currentMinorAcadPlanList = document.querySelector(".HiddenCurrentMinorList select");

										var length = currentMinorAcadPlanList.options.length;					
										for (i = length; i > 0; i--) {
										  currentMinorAcadPlanList.options[i] = null;
										} 
										for(var i=0; i < myresponse.length; i++){
										  var opt = document.createElement("option");
										  opt.value = myresponse[i].Acad_Plan;
										  //alert("values are="+opt.value);
										  opt.innerHTML = myresponse[i].Acad_Plan; 
										  currentMinorAcadPlanList.appendChild(opt);
										} 
									  
									  gifModal.style.display = "none";
									}/*else{
											showErrorModal("Alert !", "You have not enrolled for any minor");
									}*/
								}
						}); 
                    }
                });

        }else{
            gifModal.style.display = "none";
            DeclareMinor.value = "Select Minor"; 
            DeclareMinor.enabled = false;
			DeclareMinorAcadPlan.value = null;
          	DeclareMinorAcadPlan.enabled = false;
        }
    }
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareMinor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		 if(this.value !== "Select Minor"){
            var program = this.value;      
            var that = this;
			var dropCurrentAdditionalMajorSlicedValue;
			
			  if(DropSecondMajorCHK.value == "1"){
					var dropCurrentAdditionalMajorValue = MajorToDropAcadPlanCode.value;
					dropCurrentAdditionalMajorSlicedValue = dropCurrentAdditionalMajorValue.slice(0, 6);
			  }

              $.ajax({

                  type: 'GET', 

                  url:"/bin/getAllMinorsCode",

                  data:  {                     
                           TrnscrDescr: program
                    },

                  dataType: 'json',

                  success: function(myresponse){

                          gifModal.style.display = "none";

                          if(myresponse.length > 0){
                              DeclareMinorAcadPlan.value = myresponse[0].Acad_Plan;   
                              //HiddenNewtMinorAcadPlan.value = myresponse[0].Acad_Plan; 
                          }                 

                        gifModal.style.display = "none";
						var isPromptNeededMaj = false;
						var isPromptNeededAdd = false;
						var isPromptNeededMin = false;
                    	var isPromptNeededNewMaj = false;
						var dropCurrentAdditionalMajorToDeclaredMinorFlag = false;
						var currentCourseTypeAcadPlanList = document.querySelector(".checkMinorToMajor select");
						var declareMinorCode = DeclareMinorAcadPlan.value; 						
						var declareMinorCodeAfterSlice = declareMinorCode.slice(0, 6);	
                    
                        for(var i=1;i<currentCourseTypeAcadPlanList.length; i++){							 
							  var allCourseTypes = currentCourseTypeAcadPlanList.options[i].value; 
							  
							  if(allCourseTypes.includes("maj") && CurrentMajorToNewMajorCHK.value === null){	
									var allCourseTypesAfterSliceMaj = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMaj == declareMinorCodeAfterSlice){
										isPromptNeededMaj = true;	
										
									}
							  }
							  if(allCourseTypes.includes("add") && (AddSecondMajorCHK.value === null)){
									var allCourseTypesAfterSliceAdd = allCourseTypes.slice(0, 6);
									if(allCourseTypesAfterSliceAdd == declareMinorCodeAfterSlice){
										isPromptNeededAdd = true;	
										
									}
							  }
							  else if(allCourseTypes.includes("min")){	
									var allCourseTypesAfterSliceMin = allCourseTypes.slice(0, 6);
									if(allCourseTypesAfterSliceMin == declareMinorCodeAfterSlice){
										isPromptNeededMin = true;	
										
									}
							  }
						}
						
						if(dropCurrentAdditionalMajorSlicedValue == declareMinorCodeAfterSlice){
								dropCurrentAdditionalMajorToDeclaredMinorFlag = true;
						}

						debugger;
                        if(isPromptNeededMaj === true && that.value !== "Select Minor"){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current major/concentration is same as the minor you are declaring");
                              that.value = "Select Minor"; 
                              DeclareMinorAcadPlan.value = null;
                             
                        }
					/*	else if(DropSecondMajorCHK.value == "1" && dropCurrentAdditionalMajorToDeclaredMinorFlag != true){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current additional major/concentration is same as the minor you are declaring");
                          	  DeclareMinorAcadPlan.value = null;
                              that.value = "Select Minor";                               
                             
                        }*/
						else if(isPromptNeededAdd === true && that.value !== "Select Minor" && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToDeclaredMinorFlag !== true){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current additional major/concentration is same as the minor you are declaring");
                          	  DeclareMinorAcadPlan.value = null;
                              that.value = "Select Minor";                               
                             
                        }
						else if(isPromptNeededMin === true && that.value !== "Select Minor"){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "You are already enrolled in this minor. Please choose another one");
                              that.value = "Select Minor"; 
                              DeclareMinorAcadPlan.value = null;
                             
                        }
						else{
                              if(myresponse.length >= 1){
                                  DeclareMinorAcadPlan.value = myresponse[0].Acad_Plan;
								  gifModal.style.display = "none";
                              } 


                          $.ajax({

                                  type: 'GET', 

                                  url:"/bin/getChairDetails",

                                 data:  {                     
                                           Program: program
                                    },

                                  dataType: 'json',

                                  success: function(myresponse){

                                          gifModal.style.display = "none";

                                          if(myresponse.length > 0){
                                              HiddenMinorChairUserID.value = myresponse[0].CHAIR_USERID; 
                                              HiddenMinorChairName.value = myresponse[0].CHAIR_EMPNAME;
                                              HiddenMinorChairCWID.value = myresponse[0].CHAIR_EMPLID;
                                              HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                              HiddenMinorDepartmentName.value = myresponse[0].DEPTNAME;
                                              HiddenMinorDepartmentID.value = myresponse[0].DEPTID;
                                              HiddenMinorCollegeCode.value = myresponse[0].FUL_COLLEGE;
                                          }                 
                                      }
                              });
                          
                 	 }
         		}
		 	});
		}
	}
	gifModal.style.display = "none";
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondOrThirdMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondOrThirdMinorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

  		var userId = HiddenUserID.value;
       // var userId = 'horseylover17';

        if(this.value !== null){
          SecondCode.value = AddSecondOrThirdMinorAcadPlan.value;
          AddSecondOrThirdMinor.enabled = true;
          DeclareMinorCHK.value = null;
          DropMinorCHK.value = null;
          ChangeMinorCHK.value = null;

			$.ajax({

					type: 'GET', 
					url:"/bin/getCurrentMinors",					  
					data:  {
							 userID: userId     
							                   
					  },

					dataType: 'json',
					success: function(myresponse){
							gifModal.style.display = "none";
							if(myresponse.length >= 1){ 
							
									$.ajax({

											type: 'GET', 
											url:"/bin/getAllMinorsUpdated",
											dataType: 'json',
											success: function(myresponse){
												gifModal.style.display = "none";

												if(myresponse.length >= 1){                 

														var addSecondMinorList = document.querySelector(".addSecondMinor-list select");

														var length = addSecondMinorList.options.length;					// Code For Clearing Primary Degree Objectives
														for (i = length; i > 0; i--) {
														  addSecondMinorList.options[i] = null;
														} 
														for(var i=0; i < myresponse.length; i++){
														  var opt = document.createElement("option");
														  opt.value = myresponse[i].All_minors;
														  //alert("values are="+opt.value);
														  opt.innerHTML = myresponse[i].All_minors; 
														  addSecondMinorList.appendChild(opt);
														}                                                                           	                  
												}
										}
									});
							}
							else{
									showErrorModal("Alert !", "You have not enrolled for any minor. Please declare a minor before adding second or third minor");
                              		AddSecondOrThirdMinor.enabled = false;
							}
					}
			});
		}else{
            gifModal.style.display = "none";
            AddSecondOrThirdMinor.value = "Select Minor"; 
            AddSecondOrThirdMinor.enabled = false;
			AddSecondOrThirdMinorAcadPlan.value = null;
          	AddSecondOrThirdMinorAcadPlan.enabled = false;
        }
}
					
					
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondOrThirdMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondOrThirdMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondOrThirdMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondOrThirdMinor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		 if(this.value !== "Select Minor"){
            var program = this.value;      
            var that = this;
			
			var dropCurrentAdditionalMajorSlicedValue;
			
			if(DropSecondMajorCHK.value == "1"){
				var dropCurrentAdditionalMajorValue = MajorToDropAcadPlanCode.value;
				dropCurrentAdditionalMajorSlicedValue = dropCurrentAdditionalMajorValue.slice(0, 6);
			}

              $.ajax({

                  type: 'GET', 

                  url:"/bin/getAllMinorsCode",

                  data:  {                     
                           TrnscrDescr: program
                    },

                  dataType: 'json',

                  success: function(myresponse){

                          gifModal.style.display = "none";

                          if(myresponse.length > 0){
                              //DeclareMinorAcadPlan.value = myresponse[0].Acad_Plan;   
                              HiddenNewtMinorAcadPlan.value = myresponse[0].Acad_Plan; 
                          }                 

                        gifModal.style.display = "none";
                    
						var isPromptNeededMaj = false;
						var isPromptNeededAdd = false;
						var isPromptNeededMin = false;
						var dropCurrentAdditionalMajorToSecondOrThirdMinorFlag = false;
						var currentCourseTypeAcadPlanList = document.querySelector(".checkMinorToMajor select");
						var secondOrThirdMinorCode = HiddenNewtMinorAcadPlan.value; 						
						var secondOrThirdMinorCodeAfterSlice = secondOrThirdMinorCode.slice(0, 6);
						
						for(var i=1;i<currentCourseTypeAcadPlanList.length; i++){							 
							  var allCourseTypes = currentCourseTypeAcadPlanList.options[i].value; 
							  
							  if(allCourseTypes.includes("maj") && CurrentMajorToNewMajorCHK.value === null){	
									var allCourseTypesAfterSliceMaj = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMaj == secondOrThirdMinorCodeAfterSlice){
										isPromptNeededMaj = true;	
										
									}
							  }
							  if(allCourseTypes.includes("add") && AddSecondMajorCHK.value === null){
									var allCourseTypesAfterSliceAdd = allCourseTypes.slice(0, 6);
									if(allCourseTypesAfterSliceAdd == secondOrThirdMinorCodeAfterSlice){
										isPromptNeededAdd = true;	
										
									}
							  }
							  else if(allCourseTypes.includes("min")){	
									var allCourseTypesAfterSliceMin = allCourseTypes.slice(0, 6);
									if(allCourseTypesAfterSliceMin == secondOrThirdMinorCodeAfterSlice){
										isPromptNeededMin = true;	
										
									}
							  }
						}
						
						if(dropCurrentAdditionalMajorSlicedValue == secondOrThirdMinorCodeAfterSlice){
								dropCurrentAdditionalMajorToSecondOrThirdMinorFlag = true;
						}

                        if(isPromptNeededMaj === true && that.value !== "Select Minor"){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current major/concentration is same as the minor you are declaring");
                              that.value = "Select Minor"; 
                              AddSecondOrThirdMinorAcadPlan.value = null;
                             
                        }
						else if(isPromptNeededAdd === true && that.value !== "Select Minor" && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToSecondOrThirdMinorFlag !== true){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current additional major/concentration is same as the minor you are declaring");
                              that.value = "Select Minor"; 
                              AddSecondOrThirdMinorAcadPlan.value = null;
                             
                        }
						else if(isPromptNeededMin === true && that.value !== "Select Minor"){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "You are already enrolled in this minor. Please choose another one");
                              that.value = "Select Minor"; 
                              AddSecondOrThirdMinorAcadPlan.value = null;
                             
                        }else{
                              if(myresponse.length >= 1){
                                  AddSecondOrThirdMinorAcadPlan.value = myresponse[0].Acad_Plan;
                              }


                          $.ajax({

                                  type: 'GET', 

                                  url:"/bin/getChairDetails",

                                 data:  {                     
                                           Program: program
                                    },

                                  dataType: 'json',

                                  success: function(myresponse){

                                          gifModal.style.display = "none";

                                          if(myresponse.length > 0){
                                              HiddenMinorChairUserID.value = myresponse[0].CHAIR_USERID; 
                                              HiddenMinorChairName.value = myresponse[0].CHAIR_EMPNAME;
                                              HiddenMinorChairCWID.value = myresponse[0].CHAIR_EMPLID;
                                              HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                              HiddenMinorDepartmentName.value = myresponse[0].DEPTNAME;
                                              HiddenMinorDepartmentID.value = myresponse[0].DEPTID;
                                              HiddenMinorCollegeCode.value = myresponse[0].FUL_COLLEGE;
                                          }                 
                                      }
                              });
                          }
                  }
              });
         }else{
           	 gifModal.style.display = "none";
         }
	}
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AddSecondOrThirdMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AddSecondOrThirdMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropMinorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

        var userId = HiddenUserID.value;
  		//var userId = 'horseylover17';

        if(this.value !== null){	
          DropMinor.enabled = true;
          DeclareMinorCHK.value = null;
          AddSecondOrThirdMinorCHK.value = null;
          ChangeMinorCHK.value = null;

            $.ajax({

                type: 'GET', 

                url:"/bin/getCurrentMinors",
              
               data:  {
                         userID: userId                                          
                  },

                dataType: 'json',

                success: function(myresponse){

                        gifModal.style.display = "none";

                        if(myresponse.length >= 1){                 

                            var dropMinorList = document.querySelector(".dropMinor-list1 select");

                            var length = dropMinorList.options.length;					
                            for (i = length; i > 0; i--) {
                              dropMinorList.options[i] = null;
                            } 
                            for(var i=0; i < myresponse.length; i++){
                              var opt = document.createElement("option");
                              opt.value = myresponse[i].Current_Minors;
                              //alert("values are="+opt.value);
                              opt.innerHTML = myresponse[i].Current_Minors; 
                              dropMinorList.appendChild(opt);
                            } 
                          
                          gifModal.style.display = "none";
                        }else{
								showErrorModal("Alert !", "You have not enrolled for any minor to drop");
						}
                    }
                });

        }else{
            gifModal.style.display = "none";
            DropMinor.value = "Select Minor"; 
            DropMinor.enabled = false;
			DropMinorAcadPlan.value = null;
          	DropMinorAcadPlan.enabled = false;
        }
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropMinor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible == false){
      
      	if(this.value !== "Select Minor"){
      
  			var descr = this.value;

            $.ajax({

                type: 'GET', 

                url:"/bin/getAllMinorsCode",

               data:  {                     
                         Descr: descr
                  },

                dataType: 'json',

                success: function(myresponse){

                        gifModal.style.display = "none";

                        if(myresponse.length > 0){
                            DropMinorAcadPlan.value = myresponse[0].Acad_Plan;    
                        }


                    $.ajax({

                            type: 'GET', 

                            url:"/bin/getMinorChairDetails",

                           data:  {                     
                                     TrnscrDescr: descr
                              },

                            dataType: 'json',

                            success: function(myresponse){

                                    gifModal.style.display = "none";

                                    if(myresponse.length > 0){
                                        HiddenMinorChairUserID.value = myresponse[0].CHAIR_USERID; 
                                        HiddenMinorChairName.value = myresponse[0].CHAIR_EMPNAME;
                                        HiddenMinorChairCWID.value = myresponse[0].CHAIR_EMPLID;
                                        HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                        HiddenMinorDepartmentName.value = myresponse[0].DEPTNAME;
                                        HiddenMinorDepartmentID.value = myresponse[0].DEPTID;
                                        HiddenMinorCollegeCode.value = myresponse[0].FUL_COLLEGE;
                                    }                 
                                }
                        });

                    }
                });
        }else{
          	gifModal.style.display = "none";
        }
	}
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeMinorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

        var userId = HiddenUserID.value;
  		//var userId = 'horseylover17';

	//if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		
        if(this.value !== null){
           DeclareMinorCHK.value = null;
           AddSecondOrThirdMinorCHK.value = null;
           DropMinorCHK.value = null;
           ChangeCurrentMinor.enabled = true;
           ChangeNewMinor.enabled = true;

            $.ajax({

                type: 'GET', 

                url:"/bin/getCurrentMinors",
              
               data:  {
                         userID: userId                        
                         //userID: 'horseylover17'
                  },

                dataType: 'json',

                success: function(myresponse){

                        gifModal.style.display = "none";

                        if(myresponse.length >= 1){                 

                            var currentMinorList = document.querySelector(".currentMinorList select");

                            var length = currentMinorList.options.length;					// Code For Clearing Primary Degree Objectives
                            for (i = length; i > 0; i--) {
                              currentMinorList.options[i] = null;
                            } 
                            for(var i=0; i < myresponse.length; i++){
                              var opt = document.createElement("option");
                              opt.value = myresponse[i].Current_Minors;
                              //alert("values are="+opt.value);
                              opt.innerHTML = myresponse[i].Current_Minors; 
                              currentMinorList.appendChild(opt);
                            } 
                          
                          gifModal.style.display = "none";
                        }else{
								showErrorModal("Alert !","You have not enrolled for any minor to change");
                          		ChangeCurrentMinor.enabled = false;
                          		ChangeNewMinor.enabled = false;
						}
						
						$.ajax({

							type: 'GET', 

							url:"/bin/getAllMinorsUpdated",

							dataType: 'json',

							success: function(myresponse){

									gifModal.style.display = "none";

									if(myresponse.length >= 1){                 

										var changeMinorList = document.querySelector(".changeNewMinorList select");

										var length = changeMinorList.options.length;					// Code For Clearing Primary Degree Objectives
										for (i = length; i > 0; i--) {
										  changeMinorList.options[i] = null;
										} 
										for(var i=0; i < myresponse.length; i++){
										  var opt = document.createElement("option");
										  opt.value = myresponse[i].All_minors;
										  //alert("values are="+opt.value);
										  opt.innerHTML = myresponse[i].All_minors; 
										  changeMinorList.appendChild(opt);
										}                                                                           	                  
									}
								}
							});
                    }
                });

        }else{
            gifModal.style.display = "none";
            ChangeCurrentMinor.value = "Select Minor";
            ChangeNewMinor.value = "Select Minor";
            ChangeCurrentMinorAcadPlan.value = null;
            ChangeNewMinorAcadPlan.value = null;
          
          	ChangeCurrentMinor.enabled = false;
            ChangeNewMinor.enabled = false;
            ChangeCurrentMinorAcadPlan.enabled = false;
            ChangeNewMinorAcadPlan.enabled = false;
        }
	//}
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeCurrentMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeCurrentMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeCurrentMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeCurrentMinor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            

if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible == false){
	
      	if(this.value !== "Select Minor"){
            var descr = this.value;

            $.ajax({

                type: 'GET', 

                url:"/bin/getAllMinorsCode",

               data:  {                     
                         Descr: descr
                  },

                dataType: 'json',

                success: function(myresponse){

                        gifModal.style.display = "none";

                        if(myresponse.length > 0){
                            ChangeCurrentMinorAcadPlan.value = myresponse[0].Acad_Plan;    
                        }				                   
                    }
                });
        }else{
          	 gifModal.style.display = "none"; 
        }
	}
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeNewMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeNewMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeNewMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeNewMinor_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		
      if(this.value !== "Select Minor"){
            var program = this.value;      
            var that = this;
			
			var dropCurrentAdditionalMajorSlicedValue;
			
			if(DropSecondMajorCHK.value == "1"){
				var dropCurrentAdditionalMajorValue = MajorToDropAcadPlanCode.value;
				dropCurrentAdditionalMajorSlicedValue = dropCurrentAdditionalMajorValue.slice(0, 6);
			}

              $.ajax({

                  type: 'GET', 

                  url:"/bin/getAllMinorsCode",

                  data:  {                     
                           TrnscrDescr: program
                    },

                  dataType: 'json',

                  success: function(myresponse){

                          gifModal.style.display = "none";

                          if(myresponse.length > 0){
                              //DeclareMinorAcadPlan.value = myresponse[0].Acad_Plan;   
                              HiddenNewtMinorAcadPlan.value = myresponse[0].Acad_Plan; 
                          }                 

                        gifModal.style.display = "none";
						
						var isPromptNeededMaj = false;
						var isPromptNeededAdd = false;
						var isPromptNeededMin = false;
						var dropCurrentAdditionalMajorToChangedMinorFlag = false;
						var currentCourseTypeAcadPlanList = document.querySelector(".checkMinorToMajor select");
						var newChangedMinorCode = HiddenNewtMinorAcadPlan.value; 						
						var newChangedMinorCodeAfterSlice = newChangedMinorCode.slice(0, 6);	
                    
						for(var i=1;i<currentCourseTypeAcadPlanList.length; i++){							 
							  var allCourseTypes = currentCourseTypeAcadPlanList.options[i].value; 
							  
							  if(allCourseTypes.includes("maj") && CurrentMajorToNewMajorCHK.value === null){	
									var allCourseTypesAfterSliceMaj = allCourseTypes.slice(0, 6);									
									if(allCourseTypesAfterSliceMaj == newChangedMinorCodeAfterSlice){
										isPromptNeededMaj = true;	
										
									}
							  }
							  if(allCourseTypes.includes("add") && AddSecondMajorCHK.value === null ){
									var allCourseTypesAfterSliceAdd = allCourseTypes.slice(0, 6);
									if(allCourseTypesAfterSliceAdd == newChangedMinorCodeAfterSlice){
										isPromptNeededAdd = true;	
										
									}
							  }
							  else if(allCourseTypes.includes("min")){	
									var allCourseTypesAfterSliceMin = allCourseTypes.slice(0, 6);
									if(allCourseTypesAfterSliceMin == newChangedMinorCodeAfterSlice){
										isPromptNeededMin = true;	
										
									}
							  }
						}
						
						if(dropCurrentAdditionalMajorSlicedValue == newChangedMinorCodeAfterSlice){
								dropCurrentAdditionalMajorToChangedMinorFlag = true;
						}

                         if(isPromptNeededMaj === true && that.value !== "Select Minor"){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current major/concentration is same as the minor you are declaring");
                              that.value = "Select Minor"; 
                              ChangeNewMinorAcadPlan.value = null;
                             
                        }
						else if(isPromptNeededAdd === true && that.value !== "Select Minor" && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToChangedMinorFlag !== true){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "Your current additional major/concentration is same as the minor you are declaring");
                              that.value = "Select Minor"; 
                              ChangeNewMinorAcadPlan.value = null;
                             
                        }
						else if(isPromptNeededMin === true && that.value !== "Select Minor"){
                          	  gifModal.style.display = "none";
                              showErrorModal("Alert !", "You are already enrolled in this minor. Please choose another one");
                              that.value = "Select Minor"; 
                              ChangeNewMinorAcadPlan.value = null;
                             
                        }else{
                              if(myresponse.length >= 1){
                                  ChangeNewMinorAcadPlan.value = myresponse[0].Acad_Plan;
                              }


                          $.ajax({

                                  type: 'GET', 

                                  url:"/bin/getChairDetails",

                                 data:  {                     
                                           Program: program
                                    },

                                  dataType: 'json',

                                  success: function(myresponse){

                                          gifModal.style.display = "none";

                                          if(myresponse.length > 0){
                                              HiddenMinorChairUserID.value = myresponse[0].CHAIR_USERID; 
                                              HiddenMinorChairName.value = myresponse[0].CHAIR_EMPNAME;
                                              HiddenMinorChairCWID.value = myresponse[0].CHAIR_EMPLID;
                                              HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                              HiddenMinorDepartmentName.value = myresponse[0].DEPTNAME;
                                              HiddenMinorDepartmentID.value = myresponse[0].DEPTID;
                                              HiddenMinorCollegeCode.value = myresponse[0].FUL_COLLEGE;
                                          }                 
                                      }
                              });
                          }
                  }
              });
      }else{
        	gifModal.style.display = "none";
      }
	}
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeCurrentMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeCurrentMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_ChangeNewMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_ChangeNewMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareCertificateCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareCertificateCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

        if(this.value !== null){	
          DeclareCertificate.enabled = true;
          DropCertificateCHK.value = null;


            $.ajax({

                type: 'GET', 

                url:"/bin/getAllCertificatesUpdated",

                dataType: 'json',

                success: function(myresponse){

                        gifModal.style.display = "none";

                        if(myresponse.length >= 1){                 

                            var declareCertificateList = document.querySelector(".declareCertificate-list select");

                           var length = declareCertificateList.options.length;					
                            for (i = length; i > 0; i--) {
                              declareCertificateList.options[i] = null;
                            } 
                            for(var i=0; i < myresponse.length; i++){
                              var opt = document.createElement("option");                            
                              opt.value = myresponse[i].All_Certificates;                      
                              opt.innerHTML = myresponse[i].All_Certificates;
                              declareCertificateList.appendChild(opt);
                            }      
 							gifModal.style.display = "none";
							
							$.ajax({

								type: 'GET', 

								url:"/bin/getCurrentCertificate",

							   data:  {
										 userID: HiddenUserID.value                     
								  },

								dataType: 'json',

								success: function(myresponse){

										gifModal.style.display = "none";

										if(myresponse.length >= 1){                 

											
												var hiddenCurrentCertificateAcadPlan = document.querySelector(".HiddenCurrentCertificateAcadPlanList select");

												var length = hiddenCurrentCertificateAcadPlan.options.length;		
												for (i = length; i > 0; i--) {
												  hiddenCurrentCertificateAcadPlan.options[i] = null;
												} 
												for(var i=0; i < myresponse.length; i++){
												  var opt = document.createElement("option");												                        
												  var certificateCode = myresponse[i].Acad_Plan;                             
                                                  var certificateCodeAfterSlice = certificateCode.slice(0, 6);
                                                  opt.value = certificateCodeAfterSlice;
                                                 // alert("certificateCodeAfterSlice = "+ certificateCodeAfterSlice);
												  opt.innerHTML = certificateCodeAfterSlice;
												  hiddenCurrentCertificateAcadPlan.appendChild(opt);
												}                                                                 	                  
										}/*else{
													showErrorModal("Alert !","You have not enrolled for any certificate");
											}*/
									}
							}); 
                        }
                    }
                });

        }else{
          
            gifModal.style.display = "none";
            DeclareCertificate.value = "Select Certificate"; 
            DeclareCertificate.enabled = false;
          	DeclareCertificateAcadPlan.value = null;
        }
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareCertificate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareCertificate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareCertificate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareCertificate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
  		if(this.value !== "Select Certificate"){

  		var descr = this.value;
		var that = this;
        $.ajax({

            type: 'GET', 

            url:"/bin/getAllCertificatesCode",

           data:  {                     
                     TrnscrDescr: descr
              },

            dataType: 'json',

            success: function(myresponse){

				gifModal.style.display = "none";
			
				if(myresponse.length > 0){
					//DeclareCertificateAcadPlan.value = myresponse[0].Acad_Plan;    
					HiddenNewCertificateAcadPlan.value = myresponse[0].Acad_Plan;
				}
				
				  gifModal.style.display = "none";
				  debugger;
              	  var certificateCode = HiddenNewCertificateAcadPlan.value; 
              	  var certificateCodeAfterSlice = certificateCode.slice(0, 6);
				  var hiddenCurrentMinorAcadPlanList = document.querySelector(".HiddenCurrentCertificateAcadPlanList select");
				  var isPromptNeeded = false;
				  for(var i=1; i<hiddenCurrentMinorAcadPlanList.length; i++){
					  if (certificateCodeAfterSlice === hiddenCurrentMinorAcadPlanList.options[i].value){
						  isPromptNeeded = true;
						
					  }
				  }// end for 

				  if(isPromptNeeded === true && that.value !== "Select Certificate"){
						showErrorModal("Alert!","Current certificate and new certificate cannot be the same.");
						that.value = "Select Certificate"; 
						DeclareCertificateAcadPlan.value = null;
						
				  }else{
						if(myresponse.length >= 1){
							DeclareCertificateAcadPlan.value = myresponse[0].Acad_Plan;
						}

					
				$.ajax({

					type: 'GET', 

					url:"/bin/getChairDetails",

				    data:  {                     
							 Program: descr
					  },

					dataType: 'json',

					success: function(myresponse){

							gifModal.style.display = "none";
						
							if(myresponse.length > 0){
								HiddenCertificateChairUserID.value = myresponse[0].CHAIR_USERID; 
								HiddenCertificateChairName.value = myresponse[0].CHAIR_EMPNAME;
								HiddenCertificateChairCWID.value = myresponse[0].CHAIR_EMPLID;
								HiddenCertificateChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
								HiddenCertificateDepartmentName.value = myresponse[0].DEPTNAME;
								HiddenCertificateDepartmentID.value = myresponse[0].DEPTID;
                                HiddenCertificateCollegeCode.value = myresponse[0].FUL_COLLEGE;
							}                 
						}
					}); 
				  }					
            }
        });
  }else{
    	gifModal.style.display = "none";
  }
  }
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DeclareCertificateAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DeclareCertificateAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropCertificateCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropCertificateCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

    
    var userId = HiddenUserID.value;
   // var userId = 'kdianacruz';

    if(this.value !== null){	
      DropCertificate.enabled = true;
      DeclareCertificateCHK.value = null;

        $.ajax({

            type: 'GET', 

            url:"/bin/getCurrentCertificate",

           data:  {
                     userID: userId                     
              },

            dataType: 'json',

            success: function(myresponse){

                    gifModal.style.display = "none";

                    if(myresponse.length >= 1){                 

                        var dropCertificateList = document.querySelector(".dropCertificate-list select");

                        var length = dropCertificateList.options.length;					// Code For Clearing Primary Degree Objectives
                        for (i = length; i > 0; i--) {
                          dropCertificateList.options[i] = null;
                        } 
                        for(var i=0; i < myresponse.length; i++){
                          var opt = document.createElement("option");
                          opt.value = myresponse[i].Current_Certificate;                      
                          //console.log("values are = "+opt.value);
                          opt.innerHTML = myresponse[i].Current_Certificate; 
                          dropCertificateList.appendChild(opt);
                        }                                                                           	                  
                    }else{
								showErrorModal("Alert !","You have not enrolled for any certificate");
						}
                }
            });

    }else{
        gifModal.style.display = "none";
        DropCertificate.value = "Select Certificate"; 
        DropCertificate.enabled = false;
		DropCertificateAcadPlan.value = null;
    }
}else{
  	gifModal.style.display = "none";
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropCertificate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropCertificate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropCertificate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropCertificate_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){ 
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  
  if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
  
        if(this.value !== "Select Certificate"){


              var descr = this.value;

              $.ajax({

                  type: 'GET', 

                  url:"/bin/getAllCertificatesCode",

                 data:  {                     
                           Descr: descr
                    },

                  dataType: 'json',

                  success: function(myresponse){

                          gifModal.style.display = "none";

                          if(myresponse.length > 0){
                              DropCertificateAcadPlan.value = myresponse[0].Acad_Plan;    
                          }

                      $.ajax({

                          type: 'GET', 

                          url:"/bin/getChairDetails",

                         data:  {                     
                                   Program: descr
                            },

                          dataType: 'json',

                          success: function(myresponse){

                                  gifModal.style.display = "none";

                                  if(myresponse.length > 0){
                                      HiddenCertificateChairUserID.value = myresponse[0].CHAIR_USERID; 
                                      HiddenCertificateChairName.value = myresponse[0].CHAIR_EMPNAME;
                                      HiddenCertificateChairCWID.value = myresponse[0].CHAIR_EMPLID;
                                      HiddenCertificateChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                      HiddenCertificateDepartmentName.value = myresponse[0].DEPTNAME;
                                      HiddenCertificateDepartmentID.value = myresponse[0].DEPTID;
                                  }                 
                              }
                          }); 	

                      }
                  });
        }else{
              gifModal.style.display = "none";
        }
  }
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_DropCertificateAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_DropCertificateAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AdvisorCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AdvisorCB_init0 = function (scope) {
    with(this) {
        with(scope) {
            if(typeOfForm.value == 1){
  this.visible = true;
  
}else{
  this.visible = false;
  
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AdvisorCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AdvisorCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value === "ToAdvisor"){
debugger;
if(this.value == 1){
  AdvisorSignDate.value = FirstName.value +" " + LastName.value;
  AdvisorSign.enabled = false;
  
  debugger;
  if (AdvisorSignDate.value === null) {
        /*var dateString = new Date().toLocaleString("en-US", {
          timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        StudentDate.value = d;*/
    debugger;

    	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                AdvisorSign.value = myresponse.userName;
                AdvisorSignDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      AdvisorSign.enabled = false;
    
  } else {
      AdvisorSignDate.enabled = false;
      AdvisorSign.enabled = false;
  }
}else{
    AdvisorSignDate.value = null;
    AdvisorSign.value = null;
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AdvisorCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AdvisorCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         AdvisorSign.value = myresponse.userName;
     }
  });
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AdvisorCB_valueCommit2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AdvisorCB_valueCommit2 = function (scope) {
    with(this) {
        with(scope) {
            //if(StageIndicator.value === "ToAdvisor"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
AdvisorSign.value = userValue;
AdvisorSignDate.value = myresopnse.SERVER_DATE;
  Authorization.value =myresopnse.userName;
},
error: function(error) {
alert("error block=" + error);
}
});

AdvisorSign.enabled = false;
AdvisorSignDate.enabled = false;
  Authorization.enabled =false;



}else{
AdvisorSign.value = "";
AdvisorSignDate.value = null;
  Authorization.value = "";
}

        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_AdvisorSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_AdvisorSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_OfficeUse_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_OfficeUse_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === "ToRecords"){
if(this.value == 1){
var userValue;
$.ajax({
type: 'GET',



url: "/bin/getLoggedInUserDetails",
dataType: 'json',
success: function(myresopnse) {
var userValue = myresopnse.userName;
RecordsSign.value = userValue;
RecordsSignDate.value = myresopnse.SERVER_DATE;
},
error: function(error) {
alert("error block=" + error);
}
});

RecordsSign.enabled = false;
RecordsSignDate.enabled = false;



}else{
RecordsSign.value = "";
RecordsSignDate.value = null;
}
}
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_RecordsSignDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_RecordsSignDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_GeneratePDFButton_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_GeneratePDFButton_click0 = function (scope) {
    with(this) {
        with(scope) {
            var submitFlag = 0;

if (cwid.value !== null ) {
  submitFlag=0;
      
 } else{
   
   showErrorModal("Alert!","Please enter CWID");   
    
 }


if( submitFlag === 0){
  getPdf();
}

  
function getPdf() {
    console.log("in view pdf");
    window.guideBridge.getDataXML({
        success: function(result) {
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
          
            jsonData.append('formPath', '/content/dam/formsanddocuments/declaration-form/declaration_form');
            //jsonData.append('fileName', FirstName.value + "_" + LastName.value + "(" + EmplId.value + ")" + "_" + Date.now());
            jsonData.append('fileName', FName.value+"_"+LName.value + "(" + cwid.value + ")" + "_" + Date.now());   
                       // jsonData.append('fileName', StudentInformation.value + "(" + CWID.value + ")" + "_" + Date.now());   

                 
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
                  debugger;
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
 * @function declaration_form_declaration_form.generated_saveguidedraft1639984361844_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_saveguidedraft1639984361844_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if(CWID.value !== null){
     aftiaDescCWID.value = FirstName.value + " "+ LastName.value + " "+ CWID.value;
    }
handleDraftSave(this);
        }
	}
}
/**
 * @function declaration_form_declaration_form.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
declaration_form_declaration_form.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            
if(cwid.value !== null){
    aftiaDescCWID.value = FName.value + " "+ LName.value + " "+ cwid.value;
  	EmailSubject.value = "Test - Declaration form - " + FName.value + " "+ LName.value +"(" + cwid.value + ")";
  
  	HiddenAdvisorEmail.value = "mamata.hampannavar@thoughtfocus.com";
	submitValidation();
}
else{
  	showErrorModal("Alert !","Please enter student CWID");
  	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].FormPanel[0].StudentInformationPanel[0].CWID[0]");
}


function submitValidation(){
	if(formerMajorRB.value === null){
		showErrorModal("Alert !", "Please select at least one former major");
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].FormPanel[0].StudentInformationPanel[0].formerMajorRB[0]");
	}
	else if(accountCHK.value === null && informationSystemsCHK.value === null && businessEconomicsCHK.value === null && entertainmentCHK.value === null && entrepreneurshipCHK.value === null && financeCHK.value === null && generalManagementCHK.value === null && humanResourceCHK.value === null && businessAnalyticsCHK.value === null && decisionSciencesCHK.value === null && legalStudiesCHK.value === null && marketingCHK.value === null && supplyChainCHK.value === null && riskManagementCHK.value === null && economicsCHK.value === null && globalTradeCHK.value === null && interculturalManagementCHK.value === null){
		
			showErrorModal("Alert !","Please select at least one new major");
			guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].FormPanel[0].ChangerMajorPanel[0].accountCHK[0]");
	}
	else {
		guideBridge.submit();
	}
}
        }
	}
}
