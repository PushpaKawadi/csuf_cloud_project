function showErrorModal(errorHeading,errorMsg){
debugger;
		var modal= document.getElementById("errorPopup");

    	var modalHeaderMsg = document.getElementById("modalText");
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
		okButton.value = "OK";
		okButton.onclick = function(event) {
		modal.style.display = "none";                                  
		};
		footerModal.appendChild(okButton);
		modal.style.display = "block";
}