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

function showTextErrorModal1(errorHeading,errorMsg1,errorMsg2,url){

		var modal= document.getElementById("textPopup");
    	var modalHeaderMsg = document.getElementById("text-modal");
    	modalHeaderMsg.innerHTML = "";
    	modalHeaderMsg.innerHTML = errorHeading;
		//Body
		var para1 = document.getElementById("textPara1");
		para1.innerHTML = "";
		para1.innerHTML = errorMsg1;
		var para = document.getElementById('spanId');
        para.innerHTML = '<a id = "anchorId" target = "_blank" href="' + url + '">Graduate Studies</a>';
        var aId  = document.getElementById('anchorId');
        aId.style.color = "blue";
        aId.style.fontSize = "16px";
		//aId.href = url;
		//aId.target = "_blank";
		var para2 = document.getElementById("textPara2");
		para2.innerHTML = "";
		para2.innerHTML = errorMsg2;
		var footerModal = document.getElementById("textPopup-footer");
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

function showTextErrorModal(){

		var modal= document.getElementById("textPopup");

		var footerModal = document.getElementById("textPopup-footer");
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