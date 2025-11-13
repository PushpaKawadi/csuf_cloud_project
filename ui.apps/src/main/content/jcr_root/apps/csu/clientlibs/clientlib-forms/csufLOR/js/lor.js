function showErrorModal(errorHeading,errorMsg){
		var modal= document.getElementById("errorPopup");
    	var modalHeaderMsg = document.getElementById("modal-text");
    	modalHeaderMsg.innerHTML = "";
    	modalHeaderMsg.innerHTML = errorHeading;
		//Body
		var para = document.getElementById("para");
		para.innerHTML = "";
		para.innerHTML = errorMsg;
		var footerModal = document.getElementById("errorPopup-footer");
		var okButton = document.createElement("input");
		okButton.type = "button";
		okButton.setAttribute("class", "okBtn");
		//okButton.id = "okBtn";
		okButton.value = "Ok";
		okButton.onclick = function(event) {
		modal.style.display = "none";                                  
		};
		footerModal.appendChild(okButton);
		modal.style.display = "block";
}
function checkSupDocMimeType(filePath){
  
 var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
 extension = extension.toLowerCase();
 if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){ 
 //SupportingDoc1.fileAttachment.value = null;  
 return true;
 }else{
     return false;
}
}
function replaceSplCharInFileName(filePath){

 var format = /[`~*+:'?<>-|.,&{}#!@$%^=;\[\]\s()]/; 
 if(format.test(filePath) === true){
   var doc1NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_'); 
 return doc1NewName;
 }else{
     return false;
}
}

