debugger;
$(document).ready(function () {

if (window.guideBridge) {
       guideBridge.connect(function () {
           guideBridge.on("elementValueChanged", function (event, data) {
               if (!data || !data.target || !data.target.somExpression) return;

               var fieldName = data.target.somExpression;
               var fieldValue = data.newText;

               // When BirthCertificate is selected
               if (fieldName.indexOf("BirthCertificate") !== -1) {
                   if (fieldValue === "1" && fieldValue !== "") {
                       guideBridge.resolveNode("USPassport").value = "";
                       guideBridge.resolveNode("NaturalizationCertification").value = "";
                       guideBridge.resolveNode("certificationOfCitizenship").value = "";
                       console.log("Fields reset because BirthCertificate selected");
                   }
               }

               // When USPassport is selected
               if (fieldName.indexOf("USPassport") !== -1) {
                   if (fieldValue === "1" && fieldValue !== "") {
                       guideBridge.resolveNode("BirthCertificate").value = "";
                       guideBridge.resolveNode("NaturalizationCertification").value = "";
                       guideBridge.resolveNode("certificationOfCitizenship").value = "";
                       console.log("Fields reset because USPassport selected");
                   }
               }
			   
			   // When NaturalizationCertification is selected
                  if (fieldName.indexOf("NaturalizationCertification") !== -1) { 
                      if (fieldValue === "1" && fieldValue !== "") {
                          guideBridge.resolveNode("USPassport").value = "";
                          guideBridge.resolveNode("BirthCertificate").value = "";
                          guideBridge.resolveNode("certificationOfCitizenship").value = "";
                          console.log("Fields reset because BirthCertificate selected");
                      }
                  }
				  
				  // When certificationOfCitizenship is selected
                   if (fieldName.indexOf("certificationOfCitizenship") !== -1) { 
                       if (fieldValue === "1" && fieldValue !== "") {
                           guideBridge.resolveNode("USPassport").value = "";
                           guideBridge.resolveNode("BirthCertificate").value = "";
                           guideBridge.resolveNode("NaturalizationCertification").value = "";
                           console.log("Fields reset because BirthCertificate selected");
                       }
                   }
           });
       });
   }
});

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