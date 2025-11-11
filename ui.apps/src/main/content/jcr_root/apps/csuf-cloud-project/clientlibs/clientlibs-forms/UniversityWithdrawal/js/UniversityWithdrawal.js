debugger;

$(document).ready(function() {
  if (window.guideBridge) {
    guideBridge.connect(function() {

        function updateStagePanels() {
        var stageIndicator = guideBridge.resolveNode("StageIndicator");
        if (!stageIndicator) return;

        var stageValue = stageIndicator.value;


        var basicInformationpanel = guideBridge.resolveNode("basicInformationpanel");
        var PrerequisitesPanel = guideBridge.resolveNode("PrerequisitesPanel");
        var ReasonPanel = guideBridge.resolveNode("ReasonPanel");
        var studentSignaturePanel = guideBridge.resolveNode("studentSignaturePanel");
        var UnitSignaturePanel = guideBridge.resolveNode("UnitSignaturePanel");
        // var OtherWithdrawReason = guideBridge.resolveNode("OtherWithdrawReason");

        if (!stageValue) {
          basicInformationpanel.visible = true;
          PrerequisitesPanel.visible = true;
          ReasonPanel.visible = true;
          studentSignaturePanel.visible = true;
          UnitSignaturePanel.visible = false;
          // OtherWithdrawReason.visible = false;
        }

        if (stageValue === "ToRegistrationUnit") {
          basicInformationpanel.visible = true;
          PrerequisitesPanel.visible = true;
          ReasonPanel.visible = true;
          studentSignaturePanel.visible = true;
          UnitSignaturePanel.visible = true;

          basicInformationpanel.enabled = false;
          PrerequisitesPanel.enabled = false;
          ReasonPanel.enabled = false;
          // OtherWithdrawReason.visible = true;
          // OtherWithdrawReason.enabled = false;
          studentSignaturePanel.enabled = false;
        }
      }
	  
	  // Run StageIndicator logic once at form load (root level)
      updateStagePanels();
		

      // Listen for value change on WithdrawReason
      guideBridge.on("elementValueChanged", function(event, data) {
        if (!data || !data.target || !data.target.somExpression) return;

        // Check if it's the WithdrawReason radio group
        if (data.target.somExpression.indexOf("WithdrawReason") !== -1) {
          var selectedValue = data.newText;

          // Get the OtherWithdrawReason field reference
          var otherWithdrawReason = guideBridge.resolveNode("OtherWithdrawReason");

          if (selectedValue === "1" || selectedValue === "2" || selectedValue === "3") {
            otherWithdrawReason.visible = false;
            otherWithdrawReason.value = null;
            otherWithdrawReason.mandatory = false;
            otherWithdrawReason.enabled = false;
          } else {
            otherWithdrawReason.visible = true;
            otherWithdrawReason.enabled = true;
            otherWithdrawReason.mandatory = true;
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