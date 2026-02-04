/**
 * @function major_minor_change_major_minor_change_c.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_guideRootPanel_init0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
   var gifModal = document.getElementById('gifModal');
gifModal.style.display = "block";
  
    if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
  
			var valueExclusionArr = []; // to be populated for various subject values later

			CurrentMajorToNewMajorCHK.value = null;
			AddSecondMajorCHK.value = null;
			ChangeAdditionalMajorCHK.value = null;
			DropSecondMajorCHK.value = null;

			var rowcountRemoveAll = Row1.instanceManager.instanceCount;
			for(i=0; i<=rowcountRemoveAll;i++){
			//alert("button");
				Row1.instanceManager.removeInstance(Row1.instanceIndex);                
			}
			
			$.ajax({

				type: 'GET', 

				url:"/bin/getLoggedUserId",
				dataType: 'json',
				success: function(myresponse){
				  var userValue = myresponse.userId;
                  //var userValue = 'sachin_k';
				  LogUser.value = userValue;
                  if(StageIndicator.value === null){
                    workflow_initiator.value = userValue;
                  }
				  
					$.ajax({

						type: 'GET', 

						url:"/bin/getStudentPeronalInformationWithUserID",

						data:  {
							 userID: userValue
						},

						dataType: 'json',

						success: function(myresponse){
							if(myresponse.length >= 1){
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
                                  
                          //      if(myresponse[0].ADMIT_TERM == "2223" && myresponse[0].FUL_COLLEGE == "10039" && acadPlanVal.startsWith("42") && myresponse[0].LOA_FLAG == 'Y'){
                                  if(myresponse[0].ADMIT_TERM == "2237" && myresponse[0].FUL_COLLEGE == "10039" && acadPlanVal.startsWith("42") && myresponse[0].LOA_FLAG == 'Y'){
                                      
                                      StudentLastName.value = myresponse[0].student_LName;
                                      StudentFirstName.value = myresponse[0].student_FName;                        
                                      HiddenUserID.value = myresponse[0].student_UserID;
                                      StudentCWID.value = myresponse[0].student_ID;
                                      StudentCWID.enabled = false;
                                      StudentPhone.value = myresponse[0].student_Phone;                                       
                                     // StudentEmail.value = myresponse[0].student_Email;
                                    StudentEmail.value = "soumya.ravindra@thoughtfocus.com";
                                      CatalogYear.value = myresponse[0].term_descr;
                                  } //commented to enable newly freshmen on 08212023
                                  /*else if(myresponse[0].ADMIT_TERM == "2237"){
                                      showErrorModal("Alert !","Newly admitted freshmen and transfers must wait until the first day of the term to add or change majors or minors.");
                                      gifModal.style.display = "none";
                                  }    */                             
                                  else{                                                                        
                                      StudentLastName.value = myresponse[0].student_LName;
                                      StudentFirstName.value = myresponse[0].student_FName;                        
                                      HiddenUserID.value = myresponse[0].student_UserID;
                                      StudentCWID.value = myresponse[0].student_ID;
                                      StudentCWID.enabled = false;
                                      StudentPhone.value = myresponse[0].student_Phone;                                         
                                      //StudentEmail.value = myresponse[0].student_Email;
                                    StudentEmail.value = "soumya.ravindra@thoughtfocus.com";
                                      CatalogYear.value = myresponse[0].term_descr;
                                  }
									gifModal.style.display = "none";
							}else{
									showErrorModal("Alert !","No matching records found");
									gifModal.style.display = "none";
							}
							
							
							$.ajax({

								type: 'GET', 

								url:"/bin/getCurrentMajor",

							   data:  {
										 userID: HiddenUserID.value         		 
								  },

								dataType: 'json',

								success: function(myresponse){

										if(myresponse.length >= 1){
												HiddenCurrentMajor.value = myresponse[0].CURRENT_MAJOR;
												StudentInformationTabCurrentMajor.value = myresponse[0].CURRENT_MAJOR;                                        
												HiddenCurrentMajorAcadCode.value = myresponse[0].ACAD_PLAN;
												valueExclusionArr.push(myresponse[0].ACAD_PLAN+"-maj");  
										
										}
										
										$.ajax({

										  type: 'GET', 

										  url:"/bin/getCurrentAdditionalMajor",

										  data:  {
											userID: HiddenUserID.value 

										  },

											dataType: 'json',

											success: function(myresponse){

												gifModal.style.display = "none";
												
												var currentAdditionalMajors = document.querySelector(".HiddenCurrentAdditionalMajorList1 select");

											 /*   var length = currentAdditionalMajors.options.length;					
												for (i = length; i > 0; i--) {
												  currentAdditionalMajors.options[i] = null;
												} */
												for(var i=0; i < myresponse.length; i++){
												  var opt = document.createElement("option");
												  var currentAdditionalMajorsAcadPlan = myresponse[i].ACAD_PLAN;
												  valueExclusionArr.push(myresponse[i].ACAD_PLAN+"-add");                                                 																			
												  var firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan = currentAdditionalMajorsAcadPlan.slice(0, -4);
												  opt.value = firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan;
												  opt.innerHTML = firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan; 
												  currentAdditionalMajors.appendChild(opt);
												}
												

												if(myresponse.length >= 1){
													for(i=0;i<myresponse.length;i++){                		
														  Row1.instanceManager.addInstance();
														  Row1.instanceManager.instances[i].CurrentMajorConcentrationColumn.enabled = false;
														  Row1.instanceManager.instances[i].CurrentMajorConcentrationColumn.value = myresponse[i].CURRENT_MAJOR;
												   } 
													var rowcount = Row1.instanceManager.instanceCount;
													Row1.instanceManager.removeInstance(rowcount - 1);
													gifModal.style.display = "none";
												}else if(myresponse.length === 0){
														  CurrentMajorConcentrationColumn.value = "No data available";
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
																	var HiddenExclusionArr = document.querySelector(".checkMinorToMajor select");

																	if(myresponse.length >= 1){               

																		for (var m = 0;m<myresponse.length;m++){
																				valueExclusionArr.push(myresponse[m].Acad_Plan+"-min");
																		}
																			
																		gifModal.style.display = "none";
																	}
																	//console.log("lenght   ",valueExclusionArr.length);
																	for (var o in valueExclusionArr  ) {																	
																		console.log("abcbc ",valueExclusionArr[o]);                                                                     	
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
 * @function major_minor_change_major_minor_change_c.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
             

if(StageIndicator.value === null){
    $.ajax({

      type: 'GET', 

      url:"/bin/getCaseID",

      dataType: 'json',

      success: function(myresponse){               

        caseId.value = myresponse.CASEID;

      	},
	}); 	
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_caseId_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_caseId_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentInformationPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentInformationPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentCWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentCWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  
  if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
  
        if(this.value !== null){
			
			var cwidValue = this.value;
			var pattern = /^8\d{8}/;
			var result = pattern.test(cwidValue);
			var valueExclusionArr = []; // to be populated for various subject values later
			
			if(result === true){			

					CurrentMajorToNewMajorCHK.value = null;
					AddSecondMajorCHK.value = null;
					ChangeAdditionalMajorCHK.value = null;
					DropSecondMajorCHK.value = null;

					var rowcountRemoveAll = Row1.instanceManager.instanceCount;
					for(i=0; i<=rowcountRemoveAll;i++){
					//alert("button");
						Row1.instanceManager.removeInstance(Row1.instanceIndex);                
					}

					var cwidValue = this.value;
              
              		
              

					$.ajax({

						type: 'GET', 

						url:"/bin/getStudentPeronalInformationWithCWID",

						data:  {
							 Cwid: cwidValue
						},

						dataType: 'json',

						success: function(myresponse){
							if(myresponse.length >= 1){
									//caseId.value = myresponse[0].CASEID;
									StudentLastName.value = myresponse[0].student_LName;
									StudentFirstName.value = myresponse[0].student_FName;                        
									HiddenUserID.value = myresponse[0].student_UserID;
									StudentPhone.value = myresponse[0].student_Phone;                                         
								//	StudentEmail.value = myresponse[0].student_Email;
                              StudentEmail.value = "soumya.ravindra@thoughtfocus.com";
									CatalogYear.value = myresponse[0].term_descr;

									//gifModal.style.display = "none";
							}else{
									showErrorModal("Alert !","No matching records found");
									gifModal.style.display = "none";
							}
							
							
							$.ajax({

								type: 'GET', 

								url:"/bin/getCurrentMajor",

							   data:  {
										 userID: HiddenUserID.value         		 
								  },

								dataType: 'json',

								success: function(myresponse){

										if(myresponse.length >= 1){
												HiddenCurrentMajor.value = myresponse[0].CURRENT_MAJOR;
												StudentInformationTabCurrentMajor.value = myresponse[0].CURRENT_MAJOR;                                        
												HiddenCurrentMajorAcadCode.value = myresponse[0].ACAD_PLAN;
												valueExclusionArr.push(myresponse[0].ACAD_PLAN+"-maj");  
										
										}
										
										$.ajax({

										  type: 'GET', 

										  url:"/bin/getCurrentAdditionalMajor",

										  data:  {
											userID: HiddenUserID.value 

										  },

											dataType: 'json',

											success: function(myresponse){

												gifModal.style.display = "none";
												
												var currentAdditionalMajors = document.querySelector(".HiddenCurrentAdditionalMajorList1 select");
                                              	var currentAdditionalMajorsForMinor = document.querySelector(".currentAdditionalMajorList select");
                                              

                                             /*   var length = currentAdditionalMajors.options.length;					
                                                for (i = length; i > 0; i--) {
                                                  currentAdditionalMajors.options[i] = null;
                                                } */
                                                for(var i=0; i < myresponse.length; i++){
                                                  var opt = document.createElement("option");
                                                  var currentAdditionalMajorsAcadPlan = myresponse[i].ACAD_PLAN;
												  valueExclusionArr.push(myresponse[i].ACAD_PLAN+"-add");                                                 																			
                                                  var firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan = currentAdditionalMajorsAcadPlan.slice(0, -4);
                                                  opt.value = firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan;
                                                  opt.innerHTML = firstSixCharofAdditionalCurrentMajorsAcadPlanAcadPlan; 
                                                  currentAdditionalMajors.appendChild(opt);
                                                }
												
												for(var s=0; s < myresponse.length; s++){
                                                  var opt3 = document.createElement("option");
                                                  var currentAdditionalMajorsList = myresponse[s].ACAD_PLAN;
												                                                   																			
                                                  var currentAdditionalMajorsListSlicedValue = currentAdditionalMajorsList.slice(0, 9);
                                                  opt3.value = currentAdditionalMajorsListSlicedValue;
                                                  opt3.innerHTML = currentAdditionalMajorsListSlicedValue; 
                                                  currentAdditionalMajorsForMinor.appendChild(opt3);
                                                }
												

												if(myresponse.length >= 1){
													for(i=0;i<myresponse.length;i++){                		
														  Row1.instanceManager.addInstance();
														  Row1.instanceManager.instances[i].CurrentMajorConcentrationColumn.enabled = false;
														  Row1.instanceManager.instances[i].CurrentMajorConcentrationColumn.value = myresponse[i].CURRENT_MAJOR;
												   } 
                                                    var rowcount = Row1.instanceManager.instanceCount;
                                                    Row1.instanceManager.removeInstance(rowcount - 1);
                                                    gifModal.style.display = "none";
                                                }else if(myresponse.length === 0){
														  CurrentMajorConcentrationColumn.value = "No data available";
												}										
													$.ajax({

														   type: 'GET', 

														   url:"/bin/getCurrentMinors",
														  
														   data:  {
																	 userID: HiddenUserID.value 
                                                             		 //userID: 'horseylover17' 
															  },

														   dataType: 'json',

														   success: function(myresponse){

																	gifModal.style.display = "none";
																	var HiddenExclusionArr = document.querySelector(".checkMinorToMajor select");

																	if(myresponse.length >= 1){               

																		for (var m = 0;m<myresponse.length;m++){
																				valueExclusionArr.push(myresponse[m].Acad_Plan+"-min");
																		}
																			
																		gifModal.style.display = "none";
																	}
																	//console.log("lenght   ",valueExclusionArr.length);
																	for (var o in valueExclusionArr  ) {																	
																		console.log("abcbc ",valueExclusionArr[o]);                                                                     	
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
							
					  
					
					
				}else{
								showErrorModal("Alert!","Please enter a valid CWID, starts with 8 and should be of 9 digits");
								gifModal.style.display = "none";
						}
						
		}
	}
	
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentFirstName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentFirstName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentLastName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentLastName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentMiddleName_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentMiddleName_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentPhone_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentPhone_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentEmail_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentEmail_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentInformationTabCurrentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentInformationTabCurrentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CatalogYear_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CatalogYear_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_HiddenCurrentAdditionalMajorListwith9Chars_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_HiddenCurrentAdditionalMajorListwith9Chars_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_HiddenMinorToMajorCheck_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_HiddenMinorToMajorCheck_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_HiddenCurrentAdditionalMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_HiddenCurrentAdditionalMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CurrentMajorToNewMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CurrentMajorToNewMajorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){ 
  //CurrentMajor.enabled = true;
  NewMajor.enabled = true; 
  
}else{

  CurrentMajor.value = null;
  CurrentMajorAcadPlanCode.value = null;
  CurrentMajor.enabled = false;
  NewMajor.value = "Select Major/Concentration";
  NewMajor.enabled = false;
  NewMajorAcadPlanCode.value = null;
  CurrentMajorAcadPlanCode.value = null;
  
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CurrentMajorToNewMajorCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CurrentMajorToNewMajorCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";
  
	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
   
		var userId = HiddenUserID.value;
        if(this.value !== null){
            
				CurrentMajor.value = HiddenCurrentMajor.value;
          		CurrentMajorAcadPlanCode.value = HiddenCurrentMajorAcadCode.value;				
          
				$.ajax({

					type: 'GET', 

					url:"/bin/getAllMajors",

				   data:  {
							 //AcadProg: 'UGD'         		 
					  },

					dataType: 'json',

					success: function(myresponse){
							if(myresponse.length >= 1){
                              	  
									var newMajorList = document.querySelector(".newMajor-list select");

									var length = newMajorList.options.length;					// Code For Clearing Primary Degree Objectives
									for (i = length; i > 0; i--) {
									  newMajorList.options[i] = null;
									} 
									for(var i=0; i < myresponse.length; i++){
									  var opt = document.createElement("option");
									  opt.value = myresponse[i].ALL_MAJORS;
									 // console.log("values are="+opt.value);
									  opt.innerHTML = myresponse[i].ALL_MAJORS; 
									  newMajorList.appendChild(opt);
									}
							}
                      gifModal.style.display = "none";
					}
				}); // end ajax								
        }else{
              gifModal.style.display = "none";
        }
    }
    
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CurrentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CurrentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_NewMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_NewMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_NewMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_NewMajor_valueCommit0 = function (scope) {
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
  
  	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
      
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
                    
                    	  //********************Validation for Chemistry BA & BS********************
                    	  var chemistryFlag = false;
                    	  if((CurrentMajorAcadPlanCode.value == "66CHEMUBS") && (HiddenMinorToMajorCheckAcadPlan.value == "66CHEMUBA")){ 
                              chemistryFlag = true; 
                          } 

                          else if((CurrentMajorAcadPlanCode.value == "66CHEMUBA") && (HiddenMinorToMajorCheckAcadPlan.value == "66CHEMUBS")){
                              chemistryFlag = true; 
                          }
						  //********************Validation for Chemistry BA & BS********************
                    	 
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
                                                 // HiddenChairEmailNewMajor.value = myresponse[0].CHAIR_EMAIL;
                                            HiddenChairEmailNewMajor.value = "soumya.ravindra@thoughtfocus.com";
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
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CurrentMajorAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CurrentMajorAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_NewMajorAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_NewMajorAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentSignatureNewMajorConcentrationCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentSignatureNewMajorConcentrationCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
             if(this.value == 1){
    
   DepartmentSignNewMajor.enabled = false;    
   DepartmentNameNewMajor.value = HiddenDepartmentNameNewMajor.value;
   
   if (DepartmentNewMajorDate.value === null) {
     /*var dateString = new Date().toLocaleString("en-US", {
                      timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                  }).replace(/[^ -~]/g, '');
                  var dateObject = new Date(dateString);
                  var curyear = dateObject.getFullYear();
                  var curyearMonth = dateObject.getMonth() + 1;
                  var curyearDay = dateObject.getDate();
                  var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                  DepartmentNewMajorDate.value = d;*/

       $.ajax({

         type: 'GET',
         url: "/bin/getLoggedInUserDetails",
         dataType: 'json',

         success: function(myresponse) {				
             DepartmentSignNewMajor.value = myresponse.userName;
           	 NewMajorSignatureApprovedBy.value = myresponse.userName;
             DepartmentNewMajorDate.value = myresponse.SERVER_DATE;
         },
         error: function(error) {
           alert("error block=" + error);
         }
       });
       DepartmentSignNewMajor.enabled = false;
     
   } else {
       DepartmentNewMajorDate.enabled = false;
       DepartmentSignNewMajor.enabled = false;
   }
 }else{
     DepartmentNewMajorDate.value = null;
     NewMajorSignatureApprovedBy.value = null;
     DepartmentSignNewMajor.value = null;
 }

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentSignatureNewMajorConcentrationCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentSignatureNewMajorConcentrationCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChairNewMajor"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){
                     
           DepartmentSignNewMajor.value = myresponse.userName;
 		   NewMajorSignatureApprovedBy.value = myresponse.userName;
       }
    });
  }
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentNewMajorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentNewMajorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CurrentMajorConcentrationColumn_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CurrentMajorConcentrationColumn_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AddSecondMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondMajorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_AddSecondMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AddSecondMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondMajor_valueCommit0 = function (scope) {
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
						
						
					  
                     if(isPromptNeededMaj === true && that.value !== "Select Major/Concentration"){
							showErrorModal("Alert!","Your current major/concentration is same as the new additional major/concentration");
							that.value = "Select Major/Concentration"; 
							AddSecondMajorAcadCode.value = null;
                        //alert("value matched");
                      }
                      
                      if(that.value === NewMajor.value){
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

										//HiddenChairEmailSecondMajor.value = myresponse[0].CHAIR_EMAIL;
                                       HiddenChairEmailSecondMajor.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_AddSecondMajorAcadCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondMajorAcadCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeAdditionalMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeAdditionalMajorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_ChangeAdditionalCurrentMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeAdditionalCurrentMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeAdditionalCurrentMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeAdditionalCurrentMajor_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_ChangeAdditionalNewMajor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeAdditionalNewMajor_valueCommit0 = function (scope) {
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

                                                    //  HiddenChairEmailSecondMajor.value = myresponse[0].CHAIR_EMAIL;
                                                    HiddenChairEmailSecondMajor.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_ChangeAdditionalCurrentMajorAcadCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeAdditionalCurrentMajorAcadCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeAdditionalNewMajorAcadCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeAdditionalNewMajorAcadCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropSecondMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropSecondMajorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_DropSecondMajorCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropSecondMajorCHK_valueCommit1 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_MajorToDrop_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorToDrop_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MajorToDrop_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorToDrop_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value === null){
    var gifModal = document.getElementById('gifModal');
    gifModal.style.display = "block";

	var program = this.value;
  
  	if(ChangeCurrentMajorToNewMajorSignaturePanel.visible === false){
		
		if(this.value !== "Select Major/Concentration"){
      
          if(HiddenUserID.value == "crodarte"){
		  	MajorToDropAcadPlanCode.value = "42PECNUND2";
		  }
			/*if(this.value === ChangeAdditionalCurrentMajor.value && this.value !== "Select Major/Concentration"){
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

									//	HiddenChairEmailDropMajor.value = myresponse[0].CHAIR_EMAIL;
                                        HiddenChairEmailDropMajor.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_MajorToDropAcadPlanCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorToDropAcadPlanCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajorCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajorCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajorCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	DepartmentSignatureAddSecondMajor.enabled = false;
	DepartmentNameAddSecondMajor.value = HiddenDepartmentNameSecondMajor.value;
  
    if (DepartmentAddSecondMajorDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
                  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
              }).replace(/[^ -~]/g, '');
              var dateObject = new Date(dateString);
              var curyear = dateObject.getFullYear();
              var curyearMonth = dateObject.getMonth() + 1;
              var curyearDay = dateObject.getDate();
              var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
              DepartmentAddSecondMajorDate.value = d;*/

        $.ajax({

          type: 'GET',
          url: "/bin/getLoggedInUserDetails",
          dataType: 'json',

          success: function(myresponse) {				
            DepartmentSignatureAddSecondMajor.value = myresponse.userName;
            AdditionalMajorSignatureApprovedBy.value = myresponse.userName;
            DepartmentAddSecondMajorDate.value = myresponse.SERVER_DATE;
          },
          error: function(error) {
            alert("error block=" + error);
          }
        });
        DepartmentSignatureAddSecondMajor.enabled = false;
      
    } else {
        DepartmentAddSecondMajorDate.enabled = false;
        DepartmentSignatureAddSecondMajor.enabled = false;
    }
}else{
    DepartmentAddSecondMajorDate.value = null;
  	AdditionalMajorSignatureApprovedBy.value = null;
    DepartmentSignatureAddSecondMajor.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajorCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajorCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChairSecondMajor"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){
	   
		   DepartmentSignatureAddSecondMajor.value = myresponse.userName;
		   AdditionalMajorSignatureApprovedBy.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentSignatureAddSecondMajor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DepartmentAddSecondMajorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DepartmentAddSecondMajorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DeclareMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareMinorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_DeclareMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DeclareMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareMinor_valueCommit0 = function (scope) {
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
                                            //  HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                            HiddenMinorChairEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_DeclareMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinor_valueCommit0 = function (scope) {
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
                                            //  HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                            HiddenMinorChairEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AddSecondOrThirdMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_DropMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinor_valueCommit0 = function (scope) {
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
                                       // HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                      HiddenMinorChairEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_DropMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeMinorCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeMinorCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_ChangeCurrentMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeCurrentMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeCurrentMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeCurrentMinor_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_ChangeNewMinor_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeNewMinor_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeNewMinor_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeNewMinor_valueCommit0 = function (scope) {
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
                                             // HiddenMinorChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                             HiddenMinorChairEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_ChangeCurrentMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeCurrentMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_ChangeNewMinorAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_ChangeNewMinorAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_FirstMinorSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_FirstMinorSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_FirstMinorSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_FirstMinorSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

  FirstMinorSignature.enabled = false;
  DepartmentNameFirstMinor.value = HiddenMinorDepartmentName.value;

  if (FirstMinorDate.value === null) {
    /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            FirstMinorDate.value = d;*/
      $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {				
            FirstMinorSignature.value = myresponse.userName;
          	ApprovedByFirstMinor.value = myresponse.userName;
            FirstMinorDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
          	alert("error block=" + error);
        }
      });
      FirstMinorSignature.enabled = false;
    
  } else {
      FirstMinorDate.enabled = false;
      FirstMinorSignature.enabled = false;
  }
}else{
    FirstMinorDate.value = null;
  	ApprovedByFirstMinor.value = null;
    FirstMinorSignature.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_FirstMinorSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_FirstMinorSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChairMinor"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){
	   
		   FirstMinorSignature.value = myresponse.userName;
		   ApprovedByFirstMinor.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_FirstMinorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_FirstMinorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_SecondMinorSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_SecondMinorSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_SecondMinorSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_SecondMinorSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

  SecondMinorSignature.enabled = false;
  DepartmentNameSecondtMinor.value = HiddenMinorDepartmentName.value;
  
  if (SecondMinorDate.value === null) {
    /*var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
            var dateObject = new Date(dateString);
            var curyear = dateObject.getFullYear();
            var curyearMonth = dateObject.getMonth() + 1;
            var curyearDay = dateObject.getDate();
            var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
            SecondMinorDate.value = d;*/
      $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {				
            SecondMinorSignature.value = myresponse.userName;
          	ApprovedBySecondMinor.value = myresponse.userName;
            SecondMinorDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
          alert("error block=" + error);
        }
      });
      SecondMinorSignature.enabled = false;
    
  } else {
      SecondMinorDate.enabled = false;
      SecondMinorSignature.enabled = false;
  }
}else{
    SecondMinorDate.value = null;
    SecondMinorSignature.value = null;
    ApprovedBySecondMinor.value = null;
    DepartmentNameSecondtMinor.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_SecondMinorSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_SecondMinorSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChairMinor"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){
	   
		   SecondMinorSignature.value = myresponse.userName;
		   ApprovedBySecondMinor.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_SecondMinorDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_SecondMinorDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DeclareCertificateCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareCertificateCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_DeclareCertificate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareCertificate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DeclareCertificate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareCertificate_valueCommit0 = function (scope) {
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
								//HiddenCertificateChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                               HiddenCertificateChairEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_DeclareCertificateAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DeclareCertificateAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateCHK_valueCommit0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_DropCertificate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificate_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificate_valueCommit0 = function (scope) {
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
                                   //   HiddenCertificateChairEmailAddress.value = myresponse[0].CHAIR_EMAIL;
                                     HiddenCertificateChairEmailAddress.value = "soumya.ravindra@thoughtfocus.com";
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
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateAcadPlan_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateAcadPlan_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

  CertificateSignature.enabled = false;
  DepartmentNameFirstCertificate.value = HiddenCertificateDepartmentName.value;
  
  if (CertificateDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, '');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      CertificateDate.value = d;*/
    	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                  CertificateSignature.value = myresponse.userName;
              	  ApprovedByFirstCertificate.value = myresponse.userName;
                  CertificateDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      CertificateSignature.enabled = false;
    
  } else {
      CertificateDate.enabled = false;
      CertificateSignature.enabled = false;
  }
}else{
    CertificateDate.value = null;
    CertificateSignature.value = null;
    ApprovedByFirstCertificate.value = null;
    DepartmentNameFirstCertificate.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToChairCertificate"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){
	   
		   CertificateSignature.value = myresponse.userName;
		   ApprovedByFirstCertificate.value = myresponse.userName;
       }
    });
  }
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_studentCB_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_studentCB_init0 = function (scope) {
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
 * @function major_minor_change_major_minor_change_c.generated_studentCB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_studentCB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  StudentSignature.value = StudentFirstName.value + " " + StudentLastName.value;
  StudentSignature.enabled = false;
  
  if (StudentDate.value === null) {
        /*var dateString = new Date().toLocaleString("en-US", {
          timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var curyearMonth = dateObject.getMonth() + 1;
        var curyearDay = dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        StudentDate.value = d;*/
    	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                //StudentSignature.value = myresponse.userName;
                StudentDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      StudentSignature.enabled = false;
    
  } else {
      StudentDate.enabled = false;
      StudentSignature.enabled = false;
  }
}else{
    StudentDate.value = null;
    StudentSignature.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_studentCB_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_studentCB_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            
if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         StudentSignature.value = myresponse.userName;
         
     }
  });
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_StudentDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_StudentDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MajorRecordsCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorRecordsCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

  MajorRecordsSignature.enabled = false;
  
  if(CurrentMajorToNewMajorCHK.value == "1"){
    	MajorCode.value = NewMajorAcadPlanCode.value;
  }
  
  if (MajorRecordsDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, '');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      MajorRecordsDate.value = d;*/
    	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                MajorRecordsSignature.value = myresponse.userName;
              	MajorBy.value = myresponse.userName;
                MajorRecordsDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      MajorRecordsSignature.enabled = false;
    
  } else {
      MajorRecordsDate.enabled = false;
      MajorRecordsSignature.enabled = false;
  }
}else{
    MajorRecordsDate.value = null;
    MajorRecordsSignature.value = null;
    MajorCode.value = null;
    MajorBy.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MajorRecordsCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorRecordsCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           MajorBy.value = myresponse.userName;
           MajorRecordsSignature.value = myresponse.userName;
       }
    });
  }
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MajorRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MajorCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MajorBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MajorBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
	
  AdditionalMajorRecordsSignature.enabled = false;	

  if(AddSecondMajorCHK.value == "1"){
      SecondaMajorCode.value = AddSecondMajorAcadCode.value; 
  }
  
  if(ChangeAdditionalMajorCHK.value == "1"){
      SecondaMajorCode.value = ChangeAdditionalNewMajorAcadCode.value; 
  }
     
  if (AdditionalMajorRecordsDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, '');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      AdditionalMajorRecordsDate.value = d;*/
    	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                AdditionalMajorRecordsSignature.value = myresponse.userName;
              	AdditionalMajorRecordsBy.value = myresponse.userName;
                AdditionalMajorRecordsDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      AdditionalMajorRecordsSignature.enabled = false;
    
    } else {
        AdditionalMajorRecordsDate.enabled = false;
        AdditionalMajorRecordsSignature.enabled = false;
     }
}else{
    AdditionalMajorRecordsDate.value = null;
    AdditionalMajorRecordsSignature.value = null;  			
    SecondaMajorCode.value = null;
    AdditionalMajorRecordsBy.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){
  if(this.value == "1"){

     $.ajax({

       type: 'GET', 

       url:"/bin/getLoggedUserDetails",

       dataType: 'json',

       success: function(myresponse){

           AdditionalMajorRecordsBy.value = myresponse.userName;
           AdditionalMajorRecordsSignature.value = myresponse.userName;
       }
    });
  }
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_SecondaMajorCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_SecondaMajorCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_AdditionalMajorRecordsBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MinorRecordsCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MinorRecordsCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){	
	if(this.value == "1"){
	  
		   $.ajax({

			 type: 'GET', 

			 url:"/bin/getLoggedInUserDetails",

			 dataType: 'json',

			 success: function(myresponse){	

				MinorBy.value = myresponse.userName;
				MinorRecordsSignature.value = myresponse.userName;
					
				MinorRecordsSignature.enabled = false;	
				
				if(DeclareMinorCHK.value == "1"){			
						FirstCode.value = DeclareMinorAcadPlan.value;
				}						
				else if(AddSecondOrThirdMinorCHK.value == "1"){
						SecondCode.value = AddSecondOrThirdMinorAcadPlan.value;
				}                   
				else if(DropMinorCHK.value == "1"){
						FirstCode.value = null;
				}
				else if(ChangeMinorCHK.value == "1"){				
						SecondCode.value = ChangeNewMinorAcadPlan.value;
				}else{
						FirstCode.value = null;	
						SecondCode.value = null;								
				}
								
				if (MinorRecordsDate.value === null) {
					/*var dateString = new Date().toLocaleString("en-US", {
						timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
					}).replace(/[^ -~]/g, '');
					var dateObject = new Date(dateString);
					var curyear = dateObject.getFullYear();
					var curyearMonth = dateObject.getMonth() + 1;
					var curyearDay = dateObject.getDate();
					var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
					MinorRecordsDate.value = d;*/
					
					MinorRecordsDate.value = myresponse.SERVER_DATE;						
					MinorRecordsSignature.enabled = false;
				  
				} else {
					MinorRecordsDate.enabled = false;
					MinorRecordsSignature.enabled = false;
				}
			}	 
		});
	}else{
			MinorRecordsDate.value = null;
			MinorRecordsSignature.value = null;
			FirstCode.value = null;
			SecondCode.value = null;
			MinorBy.value = null;
	}
}


        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MinorRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MinorRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_FirstCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_FirstCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_SecondCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_SecondCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_MinorBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_MinorBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateRecordsCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateRecordsCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
   
    CertificateRecordsSignature.enabled = false;   
      
  	if(DeclareCertificateCHK.value == "1"){
      	CertificateCode.value = DeclareCertificateAcadPlan.value;
    }else if(DropCertificateCHK.value == "1"){
      	CertificateCode.value = DropCertificateAcadPlan.value;
    }
  
    if (CertificateRecordsDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, '');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      CertificateRecordsDate.value = d;*/
      	$.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                CertificateRecordsSignature.value = myresponse.userName;
              	CertificateBy.value = myresponse.userName;
                CertificateRecordsDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      CertificateRecordsSignature.enabled = false;
      
    } else {
        CertificateRecordsDate.enabled = false;
        CertificateRecordsSignature.enabled = false;
    }
}else{
    CertificateRecordsDate.value = null;
    CertificateRecordsSignature.value = null;
    CertificateBy.value = null;
    CertificateCode.value = null;  
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateRecordsCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateRecordsCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         CertificateBy.value = myresponse.userName;
         CertificateRecordsSignature.value = myresponse.userName;
    
        
     }
  });
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateCode_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateCode_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_CertificateBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_CertificateBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	DropMajorRecordsSignature.enabled = false;

    if (DropMajorRecordsDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
      }).replace(/[^ -~]/g, '');
      var dateObject = new Date(dateString);
      var curyear = dateObject.getFullYear();
      var curyearMonth = dateObject.getMonth() + 1;
      var curyearDay = dateObject.getDate();
      var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
      DropMajorRecordsDate.value = d;*/
      $.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                DropMajorRecordsSignature.value = myresponse.userName;
              	DropMajorRecordsBy.value = myresponse.userName;
                DropMajorRecordsDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
                alert("error block=" + error);
            }
      });
      DropMajorRecordsSignature.enabled = false;
      
    } else {
        DropMajorRecordsDate.enabled = false;
        DropMajorRecordsSignature.enabled = false;
    }
}else{
    DropMajorRecordsDate.value = null;
  	DropMajorRecordsBy.value = null;
    DropMajorRecordsSignature.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         DropMajorRecordsSignature.value = myresponse.userName;
	     DropMajorRecordsBy.value = myresponse.userName;
        
     }
  });
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMajorRecordsSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMajorRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMajorRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMajorRecordsBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMajorRecordsBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(StageIndicator.value == "ToRecords"){
	if(this.value == 1){
		
        DropMinorRecordsSignature.enabled = false;

        if (DropMinorRecordsDate.value === null) {
          /*var dateString = new Date().toLocaleString("en-US", {
                      timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
                  }).replace(/[^ -~]/g, '');
                  var dateObject = new Date(dateString);
                  var curyear = dateObject.getFullYear();
                  var curyearMonth = dateObject.getMonth() + 1;
                  var curyearDay = dateObject.getDate();
                  var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
                  DropMinorRecordsDate.value = d;*/

          $.ajax({

            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',

            success: function(myresponse) {				
                DropMinorRecordsSignature.value = myresponse.userName;
              	DropMinorRecordsBy.value = myresponse.userName;
                DropMinorRecordsDate.value = myresponse.SERVER_DATE;
            },
            error: function(error) {
              alert("error block=" + error);
            }
          });
          DropMinorRecordsSignature.enabled = false;

        } else {
            DropMinorRecordsDate.enabled = false;
            DropMinorRecordsSignature.enabled = false;
        }
	}else{
        DropMinorRecordsDate.value = null;
        DropMinorRecordsSignature.value = null;
        DropMinorRecordsBy.value = null;
      }
}



        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         DropMinorRecordsBy.value = myresponse.userName;
         DropMinorRecordsSignature.value = myresponse.userName;
        
     }
  });
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorRecordsSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropMinorRecordsBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropMinorRecordsBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignatureCHK_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignatureCHK_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignatureCHK_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignatureCHK_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){

	DropCertificateRecordsSignature.enabled = false;

    if (DropCertificateRecordsDate.value === null) {
      /*var dateString = new Date().toLocaleString("en-US", {
                  timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
              }).replace(/[^ -~]/g, '');
              var dateObject = new Date(dateString);
              var curyear = dateObject.getFullYear();
              var curyearMonth = dateObject.getMonth() + 1;
              var curyearDay = dateObject.getDate();
              var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
              DropCertificateRecordsDate.value = d;*/

      $.ajax({

        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',

        success: function(myresponse) {				
            DropCertificateRecordsSignature.value = myresponse.userName;
          	DropCertificateRecordsBy.value = myresponse.userName;
            DropCertificateRecordsDate.value = myresponse.SERVER_DATE;
        },
        error: function(error) {
          alert("error block=" + error);
        }
      });
      DropCertificateRecordsSignature.enabled = false;

    } else {
        DropCertificateRecordsDate.enabled = false;
        DropCertificateRecordsSignature.enabled = false;
    }
}else{
    DropCertificateRecordsDate.value = null;
  	DropCertificateRecordsBy.value = null;
    DropCertificateRecordsSignature.value = null;
}
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignatureCHK_valueCommit1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignatureCHK_valueCommit1 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == "1"){

   $.ajax({

     type: 'GET', 

     url:"/bin/getLoggedUserDetails",

     dataType: 'json',

     success: function(myresponse){

         DropCertificateRecordsBy.value = myresponse.userName;
       	 DropCertificateRecordsSignature.value = myresponse.userName;
        
     }
  });
}

        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignature_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateRecordsSignature_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateRecordsDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateRecordsDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_DropCertificateRecordsBy_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_DropCertificateRecordsBy_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.enabled = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_HiddenPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_HiddenPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_LogUser_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_LogUser_init0 = function (scope) {
    with(this) {
        with(scope) {
            $.ajax({

    type: 'GET', 

    url:"/bin/getLoggedUserId",
    dataType: 'json',
    success: function(myresopnse){
        var userValue = myresopnse.userId;
        LogUser.value = userValue;

    },
    error: function(error){
    	alert("error block="+error);
    }
});
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_submit1589890835750_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_submit1589890835750_click0 = function (scope) {
    with(this) {
        with(scope) {
            //For description
aftiaDescCWID.value = StudentFirstName.value +", " + StudentLastName.value + " " + StudentCWID.value; 

HiddenEmailSubject.value = "Test- Request for Undergraduate Change of Major - "+ StudentCWID.value; 


//var testEmail = "sapna.gupta@thoughtfocus.com";
//var testEmail = "yjayaram@fullerton.edu";
//var testEmail = "rama.devi@thoughtfocus.com"; 
//var testEmail = "ajeet.chhonkar@thoughtfocus.com";

/*HiddenChairEmailNewMajor.value = testEmail;
HiddenChairEmailSecondMajor.value = testEmail; 
HiddenChairEmailDropMajor.value = testEmail;
StudentEmail.value = testEmail;
HiddenMinorChairEmailAddress.value = testEmail;
HiddenCertificateChairEmailAddress.value = testEmail;*/ 
var testEmail = "soumya.ravindra@thoughtfocus.com";

HiddenChairEmailNewMajor.value = testEmail;
HiddenChairEmailSecondMajor.value = testEmail; 
HiddenChairEmailDropMajor.value = testEmail;
StudentEmail.value = testEmail;
HiddenMinorChairEmailAddress.value = testEmail;
HiddenCertificateChairEmailAddress.value = testEmail;


if(CurrentMajorToNewMajorCHK.value == "1"){
	var newMajorValue = NewMajor.value;
}
if(AddSecondMajorCHK.value == "1"){
	var additionalMajorValue = AddSecondMajor.value;
}
if(ChangeAdditionalMajorCHK.value == "1"){
	var changedAdditionalValue = ChangeAdditionalNewMajor.value;
}

if(CurrentMajorToNewMajorCHK.value == "1"){
	var newMajorValue = NewMajor.value;
	
}
if(AddSecondMajorCHK.value == "1"){
	var additionalMajorValue = AddSecondMajor.value;
}
if(ChangeAdditionalMajorCHK.value == "1"){
	var changedAdditionalValue = ChangeAdditionalNewMajor.value;
}

/* Start Variables for Undeclared validation */
var currentMajorValueForUndeclared = HiddenCurrentMajor.value;
var newMajorValueForUndeclared = NewMajor.value;
/* End Variables for Undeclared validation */

/* Start Variables for one Public Health concentration validation */
var currentMajorForPublicHealthConcentration = HiddenCurrentMajor.value; 
var newMajorValueForPublicHealthConcentration = NewMajor.value; 
var newAdditionalMajorValueForPublicHealthConcentration = AddSecondMajor.value; 
var changeAdditionalMajorValueForPublicHealthConcentration = ChangeAdditionalNewMajor.value; 
/* End Variables for one Public Health concentration validation */

var currentMajorValue = HiddenCurrentMajor.value;
var additionMajorToDropValue = CurrentMajorConcentrationColumn.value;
var declareMinorAcadPlanCodeAfterSlice;
var secondOrThirdMinorAcadPlanCodeAfterSlice;
var changeMinorAcadPlanCodeAfterSlice;
var dropCurrentAdditionalMajorSlicedValue;
var dropMinorAcadPlanSlicedValue;
var changedToNewAcadPlanSlicedValue;

 if(DropSecondMajorCHK.value == "1"){
	var dropCurrentAdditionalMajorValue = MajorToDropAcadPlanCode.value;
	dropCurrentAdditionalMajorSlicedValue = dropCurrentAdditionalMajorValue.slice(0, 6);
}

/* Start of Major, additional major and minor validation for the Acad plan is NOT similar */
var currentMajorDeclaredMinorFlag = false;
var declareMinorAcadPlanInJSONKeyFlag = false;
var secondORThirdMinorAcadPlanInJSONKeyFlag = false;
var changeMinorAcadPlanInJSONKeyFlag = false;
var currentMajorAcadPlanInJSONValueFlag = false;
var currentMajorSecondOrThirdMinorFlag = false;
var currentMajorChangedMinorFlag = false;
var newMajorDeclaredMinorFlag = false;
var newMajorSecondOrThirdMinorFlag = false;
var newMajorChangedMinorFlag = false;
var addAdditionalMajorDeclaredMinorFlag = false;
var addAdditionalMajorSecondOrThirdMinorFlag = false;
var addAdditionalMajorChangedMinorFlag = false;
var changeAdditionalMajorDeclaredMinorFlag = false;
var changeAdditionalMajorSecondOrThirdMinorFlag = false;
var changeAdditionalMajorChangedMinorFlag = false;
var declaredMinorValidationwithCurrentAdditionMajorFlag = false;
var addSecondOrThirdMinorValidationwithCurrentAdditionMajorFlag = false;
var changeMinorValidationwithCurrentAdditionMajorFlag = false;
var newMajorValidationWithAdditionalNewMajorForArtBAandBFAFlag = false;
var newMajorValidationWithAdditionalNewChangedMajorForArtBAandBFAFlag = false;
var dropCurrentAdditionalMajorToDeclaredMinorFlag = false;
var dropCurrentAdditionalMajorToSecondOrThirdMinorFlag = false;
var dropCurrentAdditionalMajorToChangedMinorFlag = false;
//Added on 04152021 - Start ***************************************
//To validate the change to new major without dropping current additional major
var newMajorToAdditionalCurrentMajorToDropFlag = false;

//Added on 04152021 - End ********************************************

var newMajorArtToAdditionalMajorFlag = false;
var newMajorArtToAdditionalChangedMajorFlag = false;
var newMajorMusicToAdditionalMajorFlag = false;
var newMajorMusicToAdditionalChangedMajorFlag = false;
var currentMinorToNewMajorValidationFlag = false;
var currentMinorToNewAdditionalMajorValidationFlag = false;
var currentMinorToNewChangedAdditionalMajorValidationFlag = false;
var declaredMinorValidationwithCurrentAdditionMajorJSONKeyFlag = false;
var addSecondOrThirdMinorValidationwithCurrentAdditionMajorJSONKeyFlag = false;
var changeMinorValidationwithCurrentAdditionMajorJSONKeyFlag = false;
var currentAdditionalMajorJSONKeyFlag = false;


if(HiddenCurrentMajorAcadCode.value !== null){
	var currentMajor = HiddenCurrentMajorAcadCode.value; 
	var currentMajorSlicedValue = currentMajor.slice(0, 6);
}

if(AddSecondMajorAcadCode.value !== null){
	var addAdditionalMajor = AddSecondMajorAcadCode.value;
	var addAdditionalMajorSlicedValue = addAdditionalMajor.slice(0, 9);
}

if(ChangeAdditionalNewMajorAcadCode.value !== null){
	var changeAdditionalMajor = ChangeAdditionalNewMajorAcadCode.value;
	var changeAdditionalMajorSlicedValue = changeAdditionalMajor.slice(0, 9);
}

/* Validating for current minor while dropping/changing minor with New Major */
if((CurrentMajorToNewMajorCHK.value == "1" || AddSecondMajorCHK.value == "1" || ChangeAdditionalMajorCHK.value == "1") && DropMinorCHK.value == "1"){
		var dropMinorAcadPlanValue = DropMinorAcadPlan.value;
		dropMinorAcadPlanSlicedValue = dropMinorAcadPlanValue.slice(0, 6);
}
if((CurrentMajorToNewMajorCHK.value == "1" || AddSecondMajorCHK.value == "1" || ChangeAdditionalMajorCHK.value == "1") && ChangeMinorCHK.value == "1"){
		var changedToNewAcadPlanValue = ChangeCurrentMinorAcadPlan.value;
		changedToNewAcadPlanSlicedValue = changedToNewAcadPlanValue.slice(0, 6);
}

var jsonObj = {
  				"29ADVTUMIN" : "29CMADUBA",
  				"29JOURUMIN" : "29CMJRUBA", 
  				"29PBRLUMIN" : "29CMPRUBA", 
  				"33ADEVUMIN" : "33CHAYUBS", 
  				"42ENTRUMIN" : "42BUENUBA", 
  				"42ISYSUMIN" : "42BAISUBA", 
  				"66CMBLUMIN" : "66BSCBUBS"
			};
debugger;
if((NewMajor.value == "Art, BA." || NewMajor.value == "Art,BFA.") && (AddSecondMajor.value == "Art, BA." || AddSecondMajor.value == "Art,BFA.")){
		newMajorArtToAdditionalMajorFlag = true;
}

if((NewMajor.value == "Art, BA." || NewMajor.value == "Art,BFA.") && (ChangeAdditionalNewMajor.value == "Art, BA." || ChangeAdditionalNewMajor.value == "Art,BFA.")){
		newMajorArtToAdditionalChangedMajorFlag = true;
}

if((NewMajor.value == "Music, BA." || NewMajor.value == "Music, BM.") && (AddSecondMajor.value == "Music, BA." || AddSecondMajor.value == "Music, BM.")){
		newMajorMusicToAdditionalMajorFlag = true;
}
if((NewMajor.value == "Music, BA." || NewMajor.value == "Music, BM.") && (ChangeAdditionalNewMajor.value == "Music, BA." || ChangeAdditionalNewMajor.value == "Music, BM.")){
		newMajorMusicToAdditionalChangedMajorFlag = true;
}

var currentAdditionalMajorListForDifferenAcadPlans = document.querySelector(".currentAdditionalMajorList select");
for(var s=1;s<currentAdditionalMajorListForDifferenAcadPlans.length;s++){
	var currAdditionalVal = currentAdditionalMajorListForDifferenAcadPlans[s].value;

}


for(var code in jsonObj){

	if(DeclareMinorAcadPlan.value == code && HiddenCurrentMajorAcadCode.value == jsonObj[code]){
		declareMinorAcadPlanInJSONKeyFlag = true;
	}
	if(AddSecondOrThirdMinorAcadPlan.value == code && HiddenCurrentMajorAcadCode.value == jsonObj[code]){
		secondORThirdMinorAcadPlanInJSONKeyFlag = true;
	}
	if(ChangeNewMinorAcadPlan.value == code && HiddenCurrentMajorAcadCode.value == jsonObj[code]){
		changeMinorAcadPlanInJSONKeyFlag = true;
	}
	
	if(DeclareMinorAcadPlan.value == code && CurrentMajorAcadPlanCode.value === null && CurrentMajorToNewMajorCHK.value === null){
			currentMajorDeclaredMinorFlag = true;
	}
	
	if(AddSecondOrThirdMinorAcadPlan.value == code && CurrentMajorAcadPlanCode.value === null && CurrentMajorToNewMajorCHK.value === null){
			currentMajorSecondOrThirdMinorFlag = true;
	}
	
	if(ChangeNewMinorAcadPlan.value == code && CurrentMajorAcadPlanCode.value === null && CurrentMajorToNewMajorCHK.value === null){
			currentMajorChangedMinorFlag = true;
	}
	
	if(DeclareMinorAcadPlan.value == code && NewMajorAcadPlanCode.value == jsonObj[code]){
			newMajorDeclaredMinorFlag = true;
	}
	
	if(AddSecondOrThirdMinorAcadPlan.value == code && NewMajorAcadPlanCode.value == jsonObj[code]){
			newMajorSecondOrThirdMinorFlag = true;
	}
	 
	if(ChangeNewMinorAcadPlan.value == code && NewMajorAcadPlanCode.value == jsonObj[code]){
			newMajorChangedMinorFlag = true;
	}
	
	if(DeclareMinorAcadPlan.value == code && addAdditionalMajorSlicedValue == jsonObj[code]){
			addAdditionalMajorDeclaredMinorFlag = true;
	}
	
	if(AddSecondOrThirdMinorAcadPlan.value == code && addAdditionalMajorSlicedValue == jsonObj[code]){
			addAdditionalMajorSecondOrThirdMinorFlag = true;
	}
	
	if(ChangeNewMinorAcadPlan.value == code && addAdditionalMajorSlicedValue == jsonObj[code]){
			addAdditionalMajorChangedMinorFlag = true;
	}
	
	if(DeclareMinorAcadPlan.value == code && changeAdditionalMajorSlicedValue == jsonObj[code]){
			changeAdditionalMajorDeclaredMinorFlag = true;
	}
	
	if(AddSecondOrThirdMinorAcadPlan.value == code && changeAdditionalMajorSlicedValue == jsonObj[code]){
			changeAdditionalMajorSecondOrThirdMinorFlag = true;
	}
	
	if(ChangeNewMinorAcadPlan.value == code && changeAdditionalMajorSlicedValue == jsonObj[code]){
			changeAdditionalMajorChangedMinorFlag = true;
	}
	
	if(DeclareMinorAcadPlan.value == code && currAdditionalVal == jsonObj[code]){
			declaredMinorValidationwithCurrentAdditionMajorJSONKeyFlag = true;
	}
			
	if(AddSecondOrThirdMinorAcadPlan.value == code && currAdditionalVal == jsonObj[code]){
			addSecondOrThirdMinorValidationwithCurrentAdditionMajorJSONKeyFlag = true;
	}
	if(ChangeNewMinorAcadPlan.value == code && currAdditionalVal == jsonObj[code]){
			changeMinorValidationwithCurrentAdditionMajorJSONKeyFlag = true;
	}
	if(currAdditionalVal == jsonObj[code]){
			currentAdditionalMajorJSONKeyFlag = true;
	}
}	


if(CurrentMajorToNewMajorCHK.value !== null && NewMajorAcadPlanCode.value !== null){
	
  	var newMajorAcadPlanCode = NewMajorAcadPlanCode.value;
    var newMajorAcadPlanCodeAfterSlice = newMajorAcadPlanCode.slice(0, 6);
}

if(AddSecondMajorCHK.value !== null && AddSecondMajorAcadCode.value !== null){
  	var newAdditionalMajorAcadPlanCode = AddSecondMajorAcadCode.value; 
    var newAdditionalMajorAcadPlanCodeAfterSlice = newAdditionalMajorAcadPlanCode.slice(0, 6);
}

if(ChangeAdditionalMajorCHK.value !== null && ChangeAdditionalNewMajorAcadCode.value !== null){ 
	var changeAdditionalNewMajorAcadPlanCode = ChangeAdditionalNewMajorAcadCode.value;
	var changeAdditionalNewMajorAcadPlanCodeAfterSlice = changeAdditionalNewMajorAcadPlanCode.slice(0, 6); 
}

if(DeclareMinorCHK.value !== null && DeclareMinorAcadPlan.value !== null){
  	var declareMinorAcadPlanCode = DeclareMinorAcadPlan.value;
    declareMinorAcadPlanCodeAfterSlice = declareMinorAcadPlanCode.slice(0, 6); 
   
}
if(AddSecondOrThirdMinorCHK.value !== null && AddSecondOrThirdMinorAcadPlan.value !== null){
  	var secondOrThirdMinorAcadPlanCode = AddSecondOrThirdMinorAcadPlan.value;
	secondOrThirdMinorAcadPlanCodeAfterSlice = secondOrThirdMinorAcadPlanCode.slice(0, 6);
  	
}
if(ChangeMinorCHK.value !== null && ChangeNewMinorAcadPlan.value !== null){ 
	var changeMinorAcadPlanCode = ChangeNewMinorAcadPlan.value;
	changeMinorAcadPlanCodeAfterSlice = changeMinorAcadPlanCode.slice(0, 6); 
}


/* Validating for current minor while dropping/changing minor with New Major */
if((dropMinorAcadPlanSlicedValue || changedToNewAcadPlanSlicedValue) == newMajorAcadPlanCodeAfterSlice){
	currentMinorToNewMajorValidationFlag = true;
}
if((dropMinorAcadPlanSlicedValue || changedToNewAcadPlanSlicedValue) == newAdditionalMajorAcadPlanCodeAfterSlice){
	currentMinorToNewAdditionalMajorValidationFlag = true;
}
if((dropMinorAcadPlanSlicedValue || changedToNewAcadPlanSlicedValue) == changeAdditionalNewMajorAcadPlanCodeAfterSlice){
	currentMinorToNewChangedAdditionalMajorValidationFlag = true;
}



if(dropCurrentAdditionalMajorSlicedValue == declareMinorAcadPlanCodeAfterSlice){
	dropCurrentAdditionalMajorToDeclaredMinorFlag = true;
}
if(dropCurrentAdditionalMajorSlicedValue == secondOrThirdMinorAcadPlanCodeAfterSlice){
	dropCurrentAdditionalMajorToSecondOrThirdMinorFlag = true;
}
if(dropCurrentAdditionalMajorSlicedValue == changeMinorAcadPlanCodeAfterSlice){
	dropCurrentAdditionalMajorToChangedMinorFlag = true;
}



//For validating the minor with the current Additional Major
var currentAdditionalMajorList = document.querySelector(".HiddenCurrentAdditionalMajorList1 select");
for(var s=1;s<currentAdditionalMajorList.length;s++){
	//alert("the current additional Major list is = " + currentAdditionalMajorList[s].value);
	if(currentAdditionalMajorList[s].value == declareMinorAcadPlanCodeAfterSlice){
			declaredMinorValidationwithCurrentAdditionMajorFlag = true;
	}
	else if(currentAdditionalMajorList[s].value == secondOrThirdMinorAcadPlanCodeAfterSlice){
			addSecondOrThirdMinorValidationwithCurrentAdditionMajorFlag = true;
	}
	else if(currentAdditionalMajorList[s].value == changeMinorAcadPlanCodeAfterSlice){
			changeMinorValidationwithCurrentAdditionMajorFlag = true;
	}
}

//Added on 04152021 - Start ***************************************
//Start of validation to change to new major without dropping current additional major
var currentAdditionalMajorList = document.querySelector(".HiddenCurrentAdditionalMajorList1 select");
var currentAdditionalMajorListArray = [];
for(var ab=0; ab<currentAdditionalMajorList.length; ab++){
	currentAdditionalMajorListArray.push(currentAdditionalMajorList[ab].value);
	
	if(currentAdditionalMajorListArray[ab] == newMajorAcadPlanCodeAfterSlice){
		newMajorToAdditionalCurrentMajorToDropFlag = true;
	}
}
//End of validation to change to new major without dropping current additional major
//Added on 04152021 - End ********************************************

if(CurrentMajorToNewMajorCHK.value !== null && (NewMajor.value === null || NewMajor.value=== 'Select Major/Concentration')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].ChangeCurrentMajorToNewMajorPanel[0].CurrentMajorToNewMajorPanel[0].NewMajor[0]");
  	showErrorModal("Field Name: New Major/Concentration on Tab (A)","Please select new Major/Concentration");  	
}
else if(AddSecondMajorCHK.value !== null && (AddSecondMajor.value === null ||  AddSecondMajor.value === 'Select Major/Concentration')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]");
  	showErrorModal("Field Name: Add Additional Major/Concentration on Tab (B)","Please select new additional Major/Concentration");
  	
}
else if(ChangeAdditionalMajorCHK.value !== null && (ChangeAdditionalCurrentMajor.value === null || ChangeAdditionalCurrentMajor.value === 'Select Major/Concentration')){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalCurrentMajor[0]");
      showErrorModal("Field Name: Select Current and New Major/Concentration on Tab (B)","Please select current and new additional Major/Concentration to change");

}
else if(ChangeAdditionalMajorCHK.value !== null && (ChangeAdditionalNewMajor.value === null || ChangeAdditionalNewMajor.value === 'Select Major/Concentration')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalCurrentMajor[0]");
  	showErrorModal("Field Name: Select new Major/Concentration on Tab (B)","Please select new additional Major/Concentration to change");
}
else if(DropSecondMajorCHK.value !== null && (MajorToDrop.value === null || MajorToDrop.value === 'Select Major/Concentration')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].DropSecondMajorPanel[0].MajorToDrop[0]");
  	showErrorModal("Field Name: Select Major/Concentration To Drop on Tab (B)","Please select additional Major/Concentration to drop");
}
else if(DeclareMinorCHK.value !== null && (DeclareMinor.value === null || DeclareMinor.value === 'Select Minor')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
  	showErrorModal("Field Name: Declare a minor on Tab (C)","Please select new minor to declare");
}
else if(AddSecondOrThirdMinorCHK.value !== null && (AddSecondOrThirdMinor.value === null || AddSecondOrThirdMinor.value === 'Select Minor')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
  	showErrorModal("Field Name: Add second/or a third minor on Tab (C)","Please select new minor to add");
}
else if(DropMinorCHK.value !== null && (DropMinor.value === null || DropMinor.value === 'Select Minor')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DropMinorPanel[0].DropMinor[0]");
  	showErrorModal("Field Name: Drop a minor on Tab (C)","Please select a minor to drop");
}
else if(ChangeMinorCHK.value !== null && (ChangeCurrentMinor.value === null || ChangeCurrentMinor.value === 'Select Minor') ){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeCurrentMinor[0]");
  	showErrorModal("Field Name: Select Current Minor on Tab (C)","Please select a minor to change"); 
  
}
else if(ChangeMinorCHK.value !== null && (ChangeNewMinor.value === null || ChangeNewMinor.value === 'Select Minor')){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
  	showErrorModal("Field Name: Select New Minor on Tab (C)","Please select a minor to change"); 
  
} 
else if(CurrentMajorToNewMajorCHK.value === null && (currentMajorSlicedValue == newAdditionalMajorAcadPlanCodeAfterSlice) && (CurrentMajorAcadPlanCode.value !== null || AddSecondMajorAcadCode.value !== null )){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]");
	  showErrorModal("Alert !","Your current major is same as the new additional major/concentration");
	  AddSecondMajor.value = "Select Major/Concentration";
	  AddSecondMajorAcadCode.value = null;
}


/* Start of Art, BA and Art, BFA AND Music, BA and Music BM */
else if((newAdditionalMajorAcadPlanCodeAfterSlice == newMajorAcadPlanCodeAfterSlice) && (AddSecondMajorAcadCode.value !== null && NewMajorAcadPlanCode.value !== null) && 
(newMajorArtToAdditionalMajorFlag === false && newMajorMusicToAdditionalMajorFlag === false)){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]");
	  showErrorModal("Alert !","Your new major is same as the new additional major/concentration");
	  AddSecondMajor.value = "Select Major/Concentration";
	  AddSecondMajorAcadCode.value = null;
}
else if((changeAdditionalNewMajorAcadPlanCodeAfterSlice == newMajorAcadPlanCodeAfterSlice) && (ChangeAdditionalNewMajorAcadCode.value !== null && NewMajorAcadPlanCode.value !== null) && (newMajorArtToAdditionalChangedMajorFlag === false && newMajorMusicToAdditionalChangedMajorFlag === false)){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]");
	  showErrorModal("Alert !","New changed major is same as the new major/concentration");
	  ChangeAdditionalNewMajor.value = "Select Major/Concentration";
	  ChangeAdditionalNewMajorAcadCode.value = null;
}
 /*End of Art, BA and Art, BFA AND BA and Music BM */
 
 
else if(CurrentMajorToNewMajorCHK.value === null && (currentMajorSlicedValue == changeAdditionalNewMajorAcadPlanCodeAfterSlice) && (CurrentMajorAcadPlanCode.value !== null || ChangeAdditionalNewMajorAcadCode.value !== null )){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the changed additional new major/concentration");
	  ChangeAdditionalNewMajor.value = "Select Major/Concentration";
	  ChangeAdditionalNewMajorAcadCode.value = null;
}







/* Validating for current minor while dropping/changing minor with New Major 
else if(NewMajor.value !== "Select Major/Concentration" && currentMinorToNewMajorValidationFlag === false){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].ChangeCurrentMajorToNewMajorPanel[0].CurrentMajorToNewMajorPanel[0].NewMajor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the current minor");
	  NewMajor.value = "Select Major/Concentration";
	  NewMajorAcadPlanCode.value = null;
}

else if(AddSecondMajor.value !== "Select Major/Concentration" && currentMinorToNewAdditionalMajorValidationFlag === false){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the current minor");
	  NewMajor.value = "Select Major/Concentration";
	  NewMajorAcadPlanCode.value = null;
}

else if(ChangeAdditionalNewMajor.value !== "Select Major/Concentration" && currentMinorToNewChangedAdditionalMajorValidationFlag === false){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the current minor");
	  NewMajor.value = "Select Major/Concentration";
	  NewMajorAcadPlanCode.value = null;
}

*/


/* Start of all Arts, Music and Sociology validations with minors */
//else if(ChangeAdditionalMajorCHK.value != "1" && DropSecondMajorCHK.value != "1" && additionMajorToDropValue.startsWith("Art")){
else if(ChangeAdditionalMajorCHK.value != "1" && DropSecondMajorCHK.value != "1" && additionMajorToDropValue.startsWith("Art") && DeclareMinor.value == "Art Minor"){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current additional major/concentration is same as the minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
//else if(ChangeAdditionalMajorCHK.value != "1" && DropSecondMajorCHK.value != "1" && additionMajorToDropValue.startsWith("Music")){
else if(ChangeAdditionalMajorCHK.value != "1" && DropSecondMajorCHK.value != "1" && additionMajorToDropValue.startsWith("Music") && DeclareMinor.value == "Music Minor"){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current additional major/concentration is same as the minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
//else if(ChangeAdditionalMajorCHK.value != "1" && DropSecondMajorCHK.value != "1" && additionMajorToDropValue.startsWith("Sociology")){
else if(ChangeAdditionalMajorCHK.value != "1" && DropSecondMajorCHK.value != "1" && additionMajorToDropValue.startsWith("Sociology") && DeclareMinor.value == "Sociology Minor"){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current additional major/concentration is same as the minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value != "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Art Minor" && currentMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Art Minor" && currentMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Art Minor" && currentMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the new changed minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Music Minor" && currentMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Music Minor" && currentMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Music Minor" && currentMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the new changed minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value != "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Sociology Minor" && currentMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Sociology Minor" && currentMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value != "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Sociology Minor" && currentMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Current major/concentration is same as the new changed minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Art Minor" && newMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Art Minor" && additionalMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Art Minor" && changedAdditionalValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Art Minor" && newMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Art Minor" && additionalMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Art Minor" && changedAdditionalValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Art Minor" && newMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Art Minor" && additionalMajorValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Art Minor" && changedAdditionalValue.startsWith("Art")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Music Minor" && newMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Music Minor" && additionalMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Music Minor" && changedAdditionalValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Music Minor" && newMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Music Minor" && additionalMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Music Minor" && changedAdditionalValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Music Minor" && newMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Music Minor" && additionalMajorValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Music Minor" && changedAdditionalValue.startsWith("Music")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Sociology Minor" && newMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Sociology Minor" && additionalMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && DeclareMinorCHK.value == "1" && DeclareMinor.value == "Sociology Minor" && changedAdditionalValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
} 
else if(CurrentMajorToNewMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Sociology Minor" && newMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Sociology Minor" && additionalMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && AddSecondOrThirdMinorCHK.value == "1" && AddSecondOrThirdMinor.value == "Sociology Minor" && changedAdditionalValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(CurrentMajorToNewMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Sociology Minor" && newMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(AddSecondMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Sociology Minor" && additionalMajorValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
} 
else if(ChangeAdditionalMajorCHK.value == "1" && ChangeMinorCHK.value == "1" && ChangeNewMinor.value == "Sociology Minor" && changedAdditionalValue.startsWith("Sociology")){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New changed additional major/concentration is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
/* End of all Arts, Music and Sociology validations with minors */






else if(newMajorAcadPlanCodeAfterSlice == declareMinorAcadPlanCodeAfterSlice && NewMajorAcadPlanCode.value !== null && DeclareMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}  
else if(newAdditionalMajorAcadPlanCodeAfterSlice == declareMinorAcadPlanCodeAfterSlice && AddSecondMajorAcadCode.value !== null && DeclareMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New additional major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
  }	
else if(changeAdditionalNewMajorAcadPlanCodeAfterSlice == declareMinorAcadPlanCodeAfterSlice && ChangeAdditionalNewMajorAcadCode.value !== null && DeclareMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New additional major/concentration is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(newMajorAcadPlanCodeAfterSlice == secondOrThirdMinorAcadPlanCodeAfterSlice && NewMajorAcadPlanCode.value !== null && AddSecondOrThirdMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New major/concentration is same as the second or third declared minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}  
else if(newAdditionalMajorAcadPlanCodeAfterSlice == secondOrThirdMinorAcadPlanCodeAfterSlice && AddSecondMajorAcadCode.value !== null && AddSecondOrThirdMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New additional major is same as the second or third declared minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}	
else if(changeAdditionalNewMajorAcadPlanCodeAfterSlice == secondOrThirdMinorAcadPlanCodeAfterSlice && ChangeAdditionalNewMajorAcadCode.value !== null && AddSecondOrThirdMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New additional major is same as the second or third declared minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(newMajorAcadPlanCodeAfterSlice == changeMinorAcadPlanCodeAfterSlice && NewMajorAcadPlanCode.value !== null && ChangeNewMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New additional major is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
  }  
else if(newAdditionalMajorAcadPlanCodeAfterSlice == changeMinorAcadPlanCodeAfterSlice && AddSecondMajorAcadCode.value !== null && ChangeNewMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");	
	  showErrorModal("Alert !","New additional major is same as the new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
  }	
else if(changeAdditionalNewMajorAcadPlanCodeAfterSlice == changeMinorAcadPlanCodeAfterSlice && ChangeAdditionalNewMajorAcadCode.value !== null && ChangeNewMinorAcadPlan.value !== null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New additional major is same as the new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}

else if(declaredMinorValidationwithCurrentAdditionMajorFlag === true && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToDeclaredMinorFlag !== true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current additional major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(addSecondOrThirdMinorValidationwithCurrentAdditionMajorFlag === true && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToSecondOrThirdMinorFlag !== true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Current additional major is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(changeMinorValidationwithCurrentAdditionMajorFlag === true && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToChangedMinorFlag !== true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Current additional major is same as the new changed minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(declaredMinorValidationwithCurrentAdditionMajorJSONKeyFlag === true && ChangeAdditionalMajorCHK.value === null && dropCurrentAdditionalMajorToDeclaredMinorFlag !== true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current additional major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(addSecondOrThirdMinorValidationwithCurrentAdditionMajorJSONKeyFlag === true && currentAdditionalMajorJSONKeyFlag === true && ChangeAdditionalMajorCHK.value === null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Current additional major is same as the second or third minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(changeMinorValidationwithCurrentAdditionMajorJSONKeyFlag === true && currentAdditionalMajorJSONKeyFlag === true && ChangeAdditionalMajorCHK.value === null){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Current additional major is same as the new changed minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}

/* Start of major, additiona major & minor which DO NOT have similar codes validation var secondORThirdMinorAcadPlanInJSONKeyFlag = false;
var changeMinorAcadPlanInJSONKeyFlag = false;*/ 
else if(currentMajorDeclaredMinorFlag === true && declareMinorAcadPlanInJSONKeyFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Current major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(currentMajorSecondOrThirdMinorFlag === true && secondORThirdMinorAcadPlanInJSONKeyFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Current major is same as the second or third declared minor cannot be same");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(currentMajorChangedMinorFlag === true && changeMinorAcadPlanInJSONKeyFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Current major is same as the changed new minor cannot be same");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(newMajorDeclaredMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(newMajorSecondOrThirdMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","New major is same as the second or third declared minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(newMajorChangedMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","New major is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(addAdditionalMajorDeclaredMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","New additional major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(addAdditionalMajorSecondOrThirdMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Additional major is same as the second or third declared minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(addAdditionalMajorChangedMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Additional major is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
else if(changeAdditionalMajorDeclaredMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].DeclareMinorPanel[0].DeclareMinor[0]");
	  showErrorModal("Alert !","Additional changed major is same as the new declared minor");
	  DeclareMinor.value = "Select Minor";
	  DeclareMinorAcadPlan.value = null;
}
else if(changeAdditionalMajorSecondOrThirdMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].AddSecondOrThirdMinorPanel[0].AddSecondOrThirdMinor[0]");
	  showErrorModal("Alert !","Additional changed major is same as the second or third declared minor");
	  AddSecondOrThirdMinor.value = "Select Minor";
	  AddSecondOrThirdMinorAcadPlan.value = null;
}
else if(changeAdditionalMajorChangedMinorFlag === true){
	  guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].MinorPanel[0].ChangeCurrentMinorPanel[0].ChangeNewMinor[0]");
	  showErrorModal("Alert !","Additional changed major is same as the changed new minor");
	  ChangeNewMinor.value = "Select Minor";
	  ChangeNewMinorAcadPlan.value = null;
}
/* End of major, additiona major & minor which DO NOT have similar codes validation */

/* Start for UNDECLARED VALIDATION - Added on - 01/14/2021*/
else if((CurrentMajorToNewMajorCHK.value === null) && (currentMajorValueForUndeclared.includes("Undeclared")) && (AddSecondMajorAcadCode.value !== null)){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]");
	AddSecondMajor.value = "Select Major/Concentration";
	AddSecondMajorAcadCode.value = null;
  	showErrorModal("Alert !","An additional major/concentration cannot be added because of undeclared current major");
}

else if((CurrentMajorToNewMajorCHK.value === null) && (currentMajorValueForUndeclared.includes("Undeclared")) && (ChangeAdditionalNewMajorAcadCode.value !== null)){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]");
	ChangeAdditionalNewMajor.value = "Select Major/Concentration";
	ChangeAdditionalNewMajorAcadCode.value = null;
  	showErrorModal("Alert !","An additional change major/concentration cannot be added because of undeclared current major");
}

else if((CurrentMajorToNewMajorCHK.value !== null) && (newMajorValueForUndeclared.includes("Undeclared")) && (AddSecondMajorAcadCode.value !== null)){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]");
	AddSecondMajor.value = "Select Major/Concentration";
	AddSecondMajorAcadCode.value = null;
  	showErrorModal("Alert !","An additional major/concentration cannot be added because of undeclared new major");
}
else if((CurrentMajorToNewMajorCHK.value !== null) && (newMajorValueForUndeclared.includes("Undeclared")) && (ChangeAdditionalNewMajorAcadCode.value !== null)){
	guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]");
	ChangeAdditionalNewMajor.value = "Select Major/Concentration";
	ChangeAdditionalNewMajorAcadCode.value = null;
  	showErrorModal("Alert !","An additional changed major/concentration cannot be added because of undeclared new major");
}
/* End for UNDECLARED VALIDATION */

// Start Public Health Majors should be allowed to add only 1 concentration validation  
else if((CurrentMajorToNewMajorCHK.value === null) && (currentMajorForPublicHealthConcentration.includes("Public Health")) && (currentMajorForPublicHealthConcentration.includes("Concentration")) && (AddSecondMajorCHK.value !== null) && (newAdditionalMajorValueForPublicHealthConcentration.includes("Public Health")) && (newAdditionalMajorValueForPublicHealthConcentration.includes("Concentration"))){ 

  		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]"); 
		AddSecondMajor.value = "Select Major/Concentration"; 
		AddSecondMajorAcadCode.value = null;
		showErrorModal("Alert !","Public Health cannot have more than one concentration"); 
} 
else if((CurrentMajorToNewMajorCHK.value === null) && (currentMajorForPublicHealthConcentration.includes("Public Health")) && (currentMajorForPublicHealthConcentration.includes("Concentration")) && (ChangeAdditionalMajorCHK.value !== null) && (changeAdditionalMajorValueForPublicHealthConcentration.includes("Public Health")) && (changeAdditionalMajorValueForPublicHealthConcentration.includes("Concentration"))){ 
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]"); 
		ChangeAdditionalNewMajor.value = "Select Major/Concentration"; 
		ChangeAdditionalNewMajorAcadCode.value = null; 
		showErrorModal("Alert !","Public Health cannot have more than one concentration"); 
} 
else if((CurrentMajorToNewMajorCHK.value !== null) && (newMajorValueForPublicHealthConcentration.includes("Public Health")) && (newMajorValueForPublicHealthConcentration.includes("Concentration")) && (AddSecondMajorCHK.value !== null) && (newAdditionalMajorValueForPublicHealthConcentration.includes("Public Health")) && (newAdditionalMajorValueForPublicHealthConcentration.includes("Concentration"))){ 

		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].AddSecondMajorPanel[0].AddSecondMajor[0]"); 
		AddSecondMajor.value = "Select Major/Concentration"; 
		AddSecondMajorAcadCode.value = null; 
		showErrorModal("Alert !","Public Health cannot have more than one concentration"); 
} 
else if((CurrentMajorToNewMajorCHK.value !== null) && (newMajorValueForPublicHealthConcentration.includes("Public Health")) && (newMajorValueForPublicHealthConcentration.includes("Concentration")) && (ChangeAdditionalMajorCHK.value !== null) && (changeAdditionalMajorValueForPublicHealthConcentration.includes("Public Health")) && (changeAdditionalMajorValueForPublicHealthConcentration.includes("Concentration"))){ 
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].DoubleMajors[0].ChangeAdditionalMajorPanel[0].ChangeAdditionalNewMajor[0]"); 
		ChangeAdditionalNewMajor.value = "Select Major/Concentration"; 
		ChangeAdditionalNewMajorAcadCode.value = null; 
		showErrorModal("Alert !","Public Health cannot have more than one concentration"); 
} 
//End Public Health Majors should be allowed to add only 1 concentration validation 

//Added on 04152021 - Start ***************************************
//Start of validation to change to new major without dropping current additional major
else if((CurrentMajorToNewMajorCHK.value !== null) && (NewMajorAcadPlanCode.value !== null) && (DropSecondMajorCHK.value === null) && (newMajorToAdditionalCurrentMajorToDropFlag == true)){
		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MajorMinorActions[0].ChangeCurrentMajorToNewMajorPanel[0].CurrentMajorToNewMajorPanel[0].NewMajor[0]");
		NewMajor.value = "Select Major/Concentration";
		NewMajorAcadPlanCode.value = null;
		showErrorModal("Alert !","New major is same as current additional major. Please drop the current additional major first");
}
//End of validation to change to new major without dropping current additional major
//Added on 04152021 - End ********************************************


else if(DeclareCertificateCHK.value !== null && (DeclareCertificate.value === null || DeclareCertificate.value === 'Select Certificate')){
  	showErrorModal("Field Name: Declare a certificate on Tab (D)","Please select new certificate to declare");
}
else if(DropCertificateCHK.value !== null && (DropCertificate.value === null || DropCertificate.value === 'Select Certificate' )){
  	showErrorModal("Field Name: Drop a certificate on Tab (D)","Please select a certificate to drop");
}
else if(CurrentMajorToNewMajorCHK.value === null && AddSecondMajorCHK.value === null && ChangeAdditionalMajorCHK.value === null && DropSecondMajorCHK.value === null && DeclareMinorCHK.value === null && AddSecondOrThirdMinorCHK.value === null && DropMinorCHK.value === null && ChangeMinorCHK.value === null && DeclareCertificateCHK.value === null && DropCertificateCHK.value === null ){
  	
  	showErrorModal("Alert!","Please select at least one operation");
  	
}
else{ 

  	guideBridge.submit();
}



	
        }
	}
}
/**
 * @function major_minor_change_major_minor_change_c.generated_submit1589890835750_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
major_minor_change_major_minor_change_c.generated_submit1589890835750_click1 = function (scope) {
    with(this) {
        with(scope) {
            //This rule is just to collect the information of all the operation performed by the student to store it in a Hidden Field to use this as a metadata to show in the emails.

var globalValue="";

if(CurrentMajorToNewMajorCHK.value == "1"){
	globalValue = globalValue + "Changing to new major - " + NewMajor.value + " (" +NewMajorAcadPlanCode.value + " ), ";
}
if(AddSecondMajorCHK.value == "1"){	
	globalValue = globalValue + "Adding an additional major - " + AddSecondMajor.value + " (" +AddSecondMajorAcadCode.value + " ), ";
}
if(ChangeAdditionalMajorCHK.value == "1"){
	globalValue = globalValue + "Changing an additional major - " + ChangeAdditionalNewMajor.value + " (" +ChangeAdditionalNewMajorAcadCode.value + " ), ";
}
if(DropSecondMajorCHK.value == "1"){
	globalValue = globalValue + "Dropping an additional major - " + MajorToDrop.value + " (" +MajorToDropAcadPlanCode.value + " ), ";
}
if(DeclareMinorCHK.value == "1"){
	globalValue = globalValue + "Declaring a minor - " + DeclareMinor.value + " (" +DeclareMinorAcadPlan.value + " ), ";
}
if(AddSecondOrThirdMinorCHK.value == "1"){
	globalValue = globalValue + "Adding second or third minor - " + AddSecondOrThirdMinor.value + " (" +AddSecondOrThirdMinorAcadPlan.value + " ), ";
}
if(DropMinorCHK.value == "1"){
	globalValue = globalValue + "Dropping a minor - " + DropMinor.value + " (" +DropMinorAcadPlan.value + " ), ";
}
if(ChangeMinorCHK.value == "1"){
	globalValue = globalValue + "Changing a minor - " + ChangeNewMinor.value + " (" +ChangeNewMinorAcadPlan.value + " ), ";
}
if(DeclareCertificateCHK.value == "1"){
	globalValue = globalValue + "Declaring a certificate - " + DeclareCertificate.value + " (" +DeclareCertificateAcadPlan.value + " ), ";
}
if(DropCertificateCHK.value == "1"){
	globalValue = globalValue + "Dropping a certificate - " + DropCertificate.value + " (" +DropCertificateAcadPlan.value + " ), ";
}

var globalValueCommaIndex = globalValue.lastIndexOf(", ");
var requestSummary = globalValue.substring(0,globalValueCommaIndex);

EmailDataStudentRequest.value = requestSummary; 


        }
	}
}
