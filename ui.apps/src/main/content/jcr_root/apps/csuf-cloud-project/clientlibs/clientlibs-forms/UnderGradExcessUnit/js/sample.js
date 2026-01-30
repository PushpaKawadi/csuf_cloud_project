debugger;
  /*$(document).ready(function () {
      // Set a default value for caseId
      guideBridge.resolveNode("caseId").value = "100";
      if (window.guideBridge) {
          guideBridge.connect(function () {
              var stageIndicatorField = guideBridge.resolveNode("StageIndicator");
              var caseIdField = guideBridge.resolveNode("caseId1");
              if (stageIndicatorField && caseIdField) {
                  var stageVal = stageIndicatorField.value;
                  console.log("StageIndicator value:", stageVal);

                  // If StageIndicator has no value, generate a random case ID
                  if (!stageVal) {
                      var randomCaseId = Math.floor(100000 + Math.random() * 900000);
                      console.log("Generated random Case ID:", randomCaseId);

                      // Set value to both fields
                      caseIdField.value = randomCaseId;
                      guideBridge.resolveNode("caseId1").value = randomCaseId;
                      guideBridge.resolveNode("caseId").value = randomCaseId;
                      getStudentDetails();

                  }
              } else {
                  console.warn("Either StageIndicator or caseId field not found!");
              }
          });
      }
  });*/


debugger;
//alert("here");
  $(document).ready(function () {
      // Set a default value for caseId
      if (window.guideBridge) {
          guideBridge.connect(function () {
              var stageIndicatorField = guideBridge.resolveNode("StageIndicator");
              var caseIdField = guideBridge.resolveNode("caseId1");
              if (stageIndicatorField && caseIdField) {
                  var stageVal = stageIndicatorField.value;
                  console.log("StageIndicator value:", stageVal);

                  // If StageIndicator has no value, generate a random case ID
                  if (!stageVal) {
                      var randomCaseId = Math.floor(100000 + Math.random() * 900000);
                      console.log("Generated random Case ID:", randomCaseId);

                      // Set value to both fields
                      caseIdField.value = randomCaseId;
                      guideBridge.resolveNode("caseId1").value = randomCaseId;
                      guideBridge.resolveNode("caseId").value = randomCaseId;
                      getStudentDetails();

                  }
              } else {
                  console.warn("Either StageIndicator or caseId field not found!");
              }
debugger;
               var stageIndicator = guideBridge.resolveNode("StageIndicator");
                  var requestTypeFlag = guideBridge.resolveNode("requestTypeFlag");
                  var advisorCB = guideBridge.resolveNode("AdvisorCB");

                  var gifModal = document.getElementById("gifModal");

                  // Panels and fields
                  var panels = {
                      advisorSignature: guideBridge.resolveNode("AdvisorSignaturePanel"),
                      chairSignature: guideBridge.resolveNode("ChairSignaturePanel"),
                      arscSignature: guideBridge.resolveNode("ARSCSignaturePanel"),
                      summerTab: guideBridge.resolveNode("SummerAdditionalTab"),
                      springFallTab: guideBridge.resolveNode("SpringFallAdditionalTab"),
                      employeeInfo: guideBridge.resolveNode("employeeInformation"),
                      approvalPanel: guideBridge.resolveNode("ApprovalPanel"),
                      studentSignature: guideBridge.resolveNode("StudentSignaturePanel")
                  };

                  var caseId = guideBridge.resolveNode("caseId");
                  var caseId1 = guideBridge.resolveNode("caseId1");
                  var summerHeaderText = guideBridge.resolveNode("summerHeaderText");
                  var summerOrFallHeaderText = guideBridge.resolveNode("summerOrFallHeaderText");

                  // Helper functions
                  function hideAllSignatures() {
                      panels.advisorSignature.visible = false;
                      panels.chairSignature.visible = false;
                      panels.arscSignature.visible = false;
                  }

                  function setSeasonTabs(isSummerOrWinter) {
                      if (isSummerOrWinter) {
                          panels.summerTab.visible = true;
                          panels.springFallTab.visible = false;
                          summerHeaderText.visible = true;
                          summerOrFallHeaderText.visible = false;
                          caseId.visible = false;
                          caseId1.visible = true;
                      } else {
                          panels.summerTab.visible = false;
                          panels.springFallTab.visible = true;
                          summerHeaderText.visible = false;
                          summerOrFallHeaderText.visible = false;
                          caseId.visible = true;
                          caseId1.visible = false;
                      }
                  }

                  // Main Logic
                  if (!stageIndicator || stageIndicator.value === null || stageIndicator.value === "") {
                      hideAllSignatures();

                      if (requestTypeFlag && (requestTypeFlag.value === "Winter" || requestTypeFlag.value === "Summer")) {
                          setSeasonTabs(true);
                      } else {
                          setSeasonTabs(false);
                      }
                  }

                  else if (stageIndicator.value === "ToAdvisor") {
                      gifModal.style.display = "none";

                      panels.employeeInfo.enabled = false;
                      panels.springFallTab.enabled = false;
                      panels.approvalPanel.visible = false;
                      panels.studentSignature.enabled = false;

                      setSeasonTabs(requestTypeFlag.value === "Winter" || requestTypeFlag.value === "Summer");

                      panels.advisorSignature.visible = true;
                      panels.chairSignature.visible = false;
                      panels.arscSignature.visible = false;
                  }

                  else if (stageIndicator.value === "ToChair") {
                      gifModal.style.display = "none";

                      panels.employeeInfo.enabled = false;
                      panels.springFallTab.enabled = false;
                      panels.approvalPanel.visible = false;
                      panels.studentSignature.enabled = false;

                      setSeasonTabs(requestTypeFlag.value === "Winter" || requestTypeFlag.value === "Summer");

                      if (advisorCB && advisorCB.value === "1") {
                          panels.advisorSignature.visible = true;
                          panels.advisorSignature.enabled = false;
                      } else {
                          panels.advisorSignature.visible = false;
                          panels.advisorSignature.enabled = false;
                      }

                      panels.chairSignature.visible = true;
                      panels.arscSignature.visible = false;
                  }

                  else if (stageIndicator.value === "ToARSC") {
                      gifModal.style.display = "none";

                      panels.employeeInfo.enabled = false;
                      panels.springFallTab.enabled = false;
                      panels.approvalPanel.visible = false;
                      panels.studentSignature.enabled = false;

                      setSeasonTabs(requestTypeFlag.value === "Winter" || requestTypeFlag.value === "Summer");

                      if (advisorCB && advisorCB.value === "1") {
                          panels.advisorSignature.visible = true;
                          panels.advisorSignature.enabled = false;
                      } else {
                          panels.advisorSignature.visible = false;
                          panels.advisorSignature.enabled = false;
                      }

                      panels.chairSignature.visible = true;
                      panels.chairSignature.enabled = false;
                      panels.arscSignature.visible = true;
                  }
          });
      }
  });
  function getStudentDetails() {
    var gifModal = document.getElementById("gifModal");
    gifModal.style.display = "block";

    $.ajax({
      type: "GET",
      url: "/bin/getLoggedUserId",
      dataType: "json",
      success: function (resp) {
        var userId = resp.userId;
        if (!userId) {
          showErrorModal("Alert!", "Unable to fetch user details.");
          gifModal.style.display = "none";
          return;
        }

        var wfInitiator = guideBridge.resolveNode("workflow_initiator");
        var logUser = guideBridge.resolveNode("logUser");

        wfInitiator.value = userId;
        logUser.value = userId;

        $.ajax({
          type: "GET",
          url: "/bin/getExcessUnitDetails",
          data: { userID: 'jieming.tang', action: "STUDENT_DETAILS" },
          dataType: "json",
          success: function (response) {
            gifModal.style.display = "none";
            if (!response || response.length === 0) {
              showErrorModal("Alert!", "No matching records found.");
              return;
            }

            var record = response[0];
            /*if (record.ACAD_CAREER !== "UGRD") {
              showErrorModal("Alert!", "No matching undergraduate records found.");
              return;
            }*/

            if (response.length === 1) {
              populateStudentFields(record);
            } else {
              displayMultipleProgramSelection(response);
            }
          },
          error: function () {
            gifModal.style.display = "none";
            showErrorModal("Alert!", "Error fetching student details.");
          },
        });
      },
      error: function () {
        gifModal.style.display = "none";
        showErrorModal("Alert!", "Unable to fetch logged user ID.");
      },
    });
  }

  function populateStudentFields(data) {
    var field = (name) => guideBridge.resolveNode(name);

    field("CWID").value = data.EMPLID;
    field("studentName").value = `${data.FIRST_NAME} ${data.LAST_NAME}`;
    field("hidden_student_email").value = data.PREF_EMAIL;
    field("telephone").value = data.CELL_PHONE;

    var addr1 = data.ADDRESS1 || "";
    var addr2 = data.ADDRESS2 || "";
    field("street").value = `${addr1} ${addr2}`.trim();
    field("address").value = `${data.CITY}, ${data.STATE}, ${data.POSTAL}`;
    field("major").value = data.PROGRAMS;

    // hidden initiator details
    field("hidden_initiator_firstName").value = data.FIRST_NAME;
    field("hidden_initiator_lastName").value = data.LAST_NAME;
    field("hidden_initiator_userID").value = data.USERID;

    //getChairData(data.DEPTID);
  }

  function displayMultipleProgramSelection(response) {
    var modal = document.getElementById("myModal");
    var footer = document.getElementById("modal_footer");
    var container = document.getElementById("showData");

    modal.style.display = "block";
    container.innerHTML = "";
    footer.innerHTML = "";

    var table = document.createElement("table");
    table.id = "tb";

    var headerRow = table.insertRow(-1);
    var headings = ["", "Program", "Degree", "Department Name"];
    headings.forEach((title) => {
      var th = document.createElement("th");
      th.textContent = title;
      headerRow.appendChild(th);
    });

    response.forEach((rec, idx) => {
      var tr = table.insertRow(-1);
      var rbCell = tr.insertCell(-1);
      var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "programSelect";
      radio.value = idx;
      rbCell.appendChild(radio);

      ["PROGRAMS", "DEGREE", "DEPTNAME"].forEach((key) => {
        var td = tr.insertCell(-1);
        td.textContent = rec[key];
      });
    });

    container.appendChild(table);

    const okBtn = document.createElement("input");
    okBtn.type = "button";
    okBtn.className = "okBtn";
    okBtn.value = "OK";
    okBtn.onclick = function () {
      const selected = $("input[name='programSelect']:checked").val();
      if (selected === undefined) {
        showErrorModal("Alert!", "Please select a program.");
        return;
      }
      populateStudentFields(response[selected]);
      modal.style.display = "none";
    };

    footer.appendChild(okBtn);
  }

function getChairData(deptId) {
    if (!deptId) return;

    $.ajax({
      type: "GET",
      url: "/bin/getExcessUnitDetails",
      data: { deptid: deptId, action: "CHAIR_DATA" },
      dataType: "json",
      success: function (response) {
        if (!response || response.length === 0) return;

        var chair = response[0];
        guideBridge.resolveNode("hidden_chair_userID").value = chair.CHAIR_USERID;
        guideBridge.resolveNode("hidden_chair_name").value = chair.CHAIR_NAME;
        guideBridge.resolveNode("hidden_chair_email").value = chair.CHAIR_EMAIL;
      },
      error: function () {
        console.warn("Unable to fetch chair data for dept:", deptId);
      },
    });
  }


