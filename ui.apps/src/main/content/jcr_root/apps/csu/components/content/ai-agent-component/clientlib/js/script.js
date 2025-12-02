// Date formatting helper functions
function formatDateToMMDDYYYY(dateString) {
  if (!dateString) return "";

  // Handle different input formats
  let date;

  // If it's already in MM/DD/YYYY format, return as is
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
    return dateString;
  }

  // If it's in MM/DD/YY format, convert to full year
  if (/^\d{2}\/\d{2}\/\d{2}$/.test(dateString)) {
    const parts = dateString.split("/");
    const year = parseInt(parts[2]);
    const fullYear = year > 50 ? 1900 + year : 2000 + year;
    return `${parts[0]}/${parts[1]}/${fullYear}`;
  }

  // Try to parse as a date object
  try {
    date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
  } catch (e) {
    return dateString;
  }

  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
}

function formatDateForInput(dateString) {
  if (!dateString) return "";

  // Convert MM/DD/YYYY to YYYY-MM-DD for HTML date input
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
    const [mm, dd, yyyy] = dateString.split("/");
    return `${yyyy}-${mm}-${dd}`;
  }

  // Try to parse as date and format
  try {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
  } catch (e) {
    // If parsing fails, return empty
  }

  return "";
}

function formatDateFromInput(inputDate) {
  if (!inputDate) return "";

  // Convert YYYY-MM-DD to MM/DD/YYYY
  if (/^\d{4}-\d{2}-\d{2}$/.test(inputDate)) {
    const [yyyy, mm, dd] = inputDate.split("-");
    return `${mm}/${dd}/${yyyy}`;
  }

  return inputDate;
}

(function () {
  const state = {
    data: {
      high: [],
      low: [],
      highRejection: [],
    },
    filteredData: {
      high: [],
      low: [],
      highRejection: [],
    },
    pagination: {
      high: { currentPage: 1, rowsPerPage: 5 },
      low: { currentPage: 1, rowsPerPage: 5 },
      highRejection: { currentPage: 1, rowsPerPage: 5 },
    },
    selectedRows: {
      high: new Set(),
      low: new Set(),
      highRejection: new Set(),
    },
    // New arrays to store selected IDs
    selectedIds: {
      high: [],
      low: [],
      highRejection: [],
    },
    currentTab: "high",
    editingRow: null,
  };

  function openModal(contentHtml) {
    const modal = document.getElementById("rowModal");
    const details = document.getElementById("modal-details");

    details.innerHTML = contentHtml;
    modal.classList.add("show");
    modal.querySelector(".modal-content").classList.add("animate-in");
    document.body.style.overflow = "hidden";
  }

  const formatConfidenceScore = (score) => {
    if (!score) return "-";
    const numScore = parseFloat(score);
    return `${Math.round(numScore * 100)}%`;
  };

  function closeModal() {
    const modal = document.getElementById("rowModal");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function closeEditModal() {
    const modal = document.getElementById("editModal");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    state.editingRow = null;

    // Clear form fields to prevent showing old data
    document.getElementById("editApprovalStatus").value = "";
    document.getElementById("editComments").value = "";
    document.getElementById("editLastAttendDate").value = "";
    document.getElementById("editGradeSelect").value = "";
    document.getElementById("editDenialReason").value = "";
    document.getElementById("editOtherDenialReason").value = "";

    // Reset radio buttons to default state
    const estimatedGradeRadio = document.getElementById("estimatedGrade");
    const noBasisGradeRadio = document.getElementById("noBasisGrade");
    const gradeEvaluationGroup = document.getElementById(
      "gradeEvaluationGroup"
    );

    if (estimatedGradeRadio && noBasisGradeRadio) {
      estimatedGradeRadio.checked = true;
      noBasisGradeRadio.checked = false;
      estimatedGradeRadio.disabled = false;
      noBasisGradeRadio.disabled = false;
    }

    // Show grade evaluation group (will be hidden/shown as needed when modal opens)
    if (gradeEvaluationGroup) {
      gradeEvaluationGroup.style.display = "block";
    }

    // Reset disabled states and styling for last attend date
    const lastAttendDateInput = document.getElementById("editLastAttendDate");
    lastAttendDateInput.disabled = false;
    lastAttendDateInput.style.backgroundColor = "";
    lastAttendDateInput.style.cursor = "";
    lastAttendDateInput.style.opacity = "";

    // Reset disabled states and styling for grade select
    const gradeSelect = document.getElementById("editGradeSelect");
    gradeSelect.disabled = false;
    gradeSelect.style.backgroundColor = "";
    gradeSelect.style.cursor = "";
    gradeSelect.style.opacity = "";

    // Hide other denial reason group
    document.getElementById("otherDenialReasonGroup").style.display = "none";

    // Clear any error states
    clearFormErrors();
  }

  function openEditModal(tab, rowIndex) {
    const actualIndex =
      (state.pagination[tab].currentPage - 1) *
        state.pagination[tab].rowsPerPage +
      rowIndex;
    const rowData = state.filteredData[tab][actualIndex];

    state.editingRow = {
      tab: tab,
      index: actualIndex,
      data: rowData,
    };

    // Check if current step is Chair Review or Instructor Review
    const isChairReview = rowData.workflow_history.step_name === "Chair Review";
    const isInstructorReview =
      rowData.workflow_history.step_name === "Instructor Review";

    // Always populate from current state data, not previous form values
    const approvalStatus = rowData.agent_review?.suggested_action || "";
    document.getElementById("editApprovalStatus").value = approvalStatus;

    // Populate comments based on step name - get existing additionalComments
    let existingComments = "";
    if (isInstructorReview) {
      existingComments = rowData.instructor_review?.additionalComments || "";
    } else if (isChairReview) {
      existingComments = rowData.chair_review?.additionalComments || "";
    }
    document.getElementById("editComments").value = existingComments;

    // Format the date for HTML date input (YYYY-MM-DD)
    const lastAttendDate =
      rowData.instructor_review?.LastdateAttended ||
      rowData.instructor_review?.lastDateAttended ||
      "";
    const lastAttendDateInput = document.getElementById("editLastAttendDate");
    lastAttendDateInput.value = formatDateForInput(lastAttendDate);

    // Disable/enable last attend date based on step name
    lastAttendDateInput.disabled = isChairReview;
    if (isChairReview) {
      lastAttendDateInput.style.backgroundColor = "#f5f5f5";
      lastAttendDateInput.style.cursor = "not-allowed";
      lastAttendDateInput.style.opacity = "0.6";
    } else {
      lastAttendDateInput.style.backgroundColor = "";
      lastAttendDateInput.style.cursor = "";
      lastAttendDateInput.style.opacity = "";
    }

    // Handle Grade Evaluation Radio Buttons - Show only for Instructor Review
    const gradeEvaluationGroup = document.getElementById(
      "gradeEvaluationGroup"
    );
    const estimatedGradeRadio = document.getElementById("estimatedGrade");
    const noBasisGradeRadio = document.getElementById("noBasisGrade");

    if (isInstructorReview) {
      // Show radio buttons for instructors
      gradeEvaluationGroup.style.display = "block";

      // Enable radio buttons
      estimatedGradeRadio.disabled = false;
      noBasisGradeRadio.disabled = false;
    } else {
      // Hide radio buttons for chairs and others
      gradeEvaluationGroup.style.display = "none";

      // Reset to default state when hidden
      estimatedGradeRadio.checked = true;
      noBasisGradeRadio.checked = false;
      estimatedGradeRadio.disabled = true;
      noBasisGradeRadio.disabled = true;
    }

    // Set grade using select dropdown
    const grade = rowData.instructor_review?.grade || "";
    const gradeSelect = document.getElementById("editGradeSelect");
    gradeSelect.value = grade;

    // Handle grade select logic based on user role and current grade
    if (isInstructorReview) {
      // For instructors: Handle radio buttons and grade select logic
      if (grade === "Not Applicable") {
        noBasisGradeRadio.checked = true;
        estimatedGradeRadio.checked = false;
        // Disable grade select and set to Not Applicable
        gradeSelect.disabled = true;
        gradeSelect.value = "Not Applicable";
        gradeSelect.style.backgroundColor = "#f5f5f5";
        gradeSelect.style.cursor = "not-allowed";
        gradeSelect.style.opacity = "0.6";
      } else {
        estimatedGradeRadio.checked = true;
        noBasisGradeRadio.checked = false;
        // Enable grade select for instructors
        gradeSelect.disabled = false;
        gradeSelect.style.backgroundColor = "";
        gradeSelect.style.cursor = "";
        gradeSelect.style.opacity = "";
      }
    } else {
      // For chairs and others: Disable grade select
      gradeSelect.disabled = isChairReview;
      if (isChairReview) {
        gradeSelect.style.backgroundColor = "#f5f5f5";
        gradeSelect.style.cursor = "not-allowed";
        gradeSelect.style.opacity = "0.6";
      } else {
        gradeSelect.style.backgroundColor = "";
        gradeSelect.style.cursor = "";
        gradeSelect.style.opacity = "";
      }
    }

    let denialReason = "";
    let otherDenialReason = "";
    if (rowData.workflow_history.step_name === "Instructor Review") {
      denialReason = rowData.instructor_review?.denialReason || "";
      otherDenialReason = rowData.instructor_review?.denialOtherReason || "";
    } else if (rowData.workflow_history.step_name === "Chair Review") {
      denialReason = rowData.chair_review?.denialReason || "";
      otherDenialReason = rowData.chair_review?.denialOtherReason || "";
    } else {
      denialReason = "";
      otherDenialReason = "";
    }

    console.log(rowData);
    // Store original values to preserve them during toggle
    state.editingRow.originalDenialReason = denialReason;
    state.editingRow.originalOtherDenialReason = otherDenialReason;

    // Set denial reason fields
    document.getElementById("editDenialReason").value = denialReason;
    document.getElementById("editOtherDenialReason").value = otherDenialReason;

    // Show/hide denial reason section based on approval status
    toggleDenialReasonSection(approvalStatus === "disapprove", false);

    // Show/hide other denial reason based on selection
    toggleOtherDenialReason(denialReason == "4");

    const modal = document.getElementById("editModal");
    modal.classList.add("show");
    modal.querySelector(".modal-content").classList.add("animate-in");
    document.body.style.overflow = "hidden";
  }

  async function saveEdit() {
    if (!state.editingRow) return;

    const { data: rowData, tab } = state.editingRow;
    rowData.instructor_decision ||= {};
    rowData.instructor_review ||= {};

    // Clear previous errors
    clearFormErrors();

    // Check if current step is Chair Review or Instructor Review
    const isChairReview = rowData.workflow_history.step_name === "Chair Review";
    const isInstructorReview =
      rowData.workflow_history.step_name === "Instructor Review";

    // Get current form values
    const currentValues = {
      approval_status: document.getElementById("editApprovalStatus").value,
      comment: document.getElementById("editComments").value.trim(),
      last_attend_date: formatDateFromInput(
        document.getElementById("editLastAttendDate").value.trim()
      ),
      grade: document.getElementById("editGradeSelect").value.trim(),
      denial_reason: document.getElementById("editDenialReason").value,
      other_denial_reason: document
        .getElementById("editOtherDenialReason")
        .value.trim(),
    };

    // Get original values from state - handle undefined/null values properly
    // Get existing comments based on step name
    let originalComments = "";
    if (isInstructorReview) {
      originalComments = rowData.instructor_review?.additionalComments || "";
    } else if (isChairReview) {
      originalComments = rowData.chair_review?.additionalComments || "";
    }

    const originalValues = {
      approval_status: rowData.agent_review?.suggested_action || "",
      comment: originalComments, // Use the existing additionalComments as original
      last_attend_date: formatDateToMMDDYYYY(
        rowData.instructor_review?.LastdateAttended ||
          rowData.instructor_review?.lastDateAttended ||
          ""
      ),
      grade:
        (isInstructorReview
          ? rowData.instructor_review?.grade
          : rowData.chair_review?.grade) || "",
      denial_reason:
        (isInstructorReview
          ? rowData.instructor_review?.denialReason
          : rowData.chair_review?.denialReason) || "",
      other_denial_reason:
        (isInstructorReview
          ? rowData.instructor_review?.denialOtherReason
          : rowData.chair_review?.denialOtherReason) || "",
    };

    // Helper function to normalize values for comparison
    const normalizeValue = (value) => {
      if (value === null || value === undefined) return "";
      return String(value).trim();
    };

    // Find changed values with proper comparison
    const changedFields = {};
    Object.keys(currentValues).forEach((key) => {
      const current = normalizeValue(currentValues[key]);
      const original = normalizeValue(originalValues[key]);

      if (current !== original) {
        changedFields[key] = currentValues[key];
      }
    });

    // Check if user provided comments changes
    const hasCommentChanges = changedFields.comment !== undefined;
    const statusChanged = changedFields.approval_status !== undefined;

    console.log("Change detection:", {
      currentValues,
      originalValues,
      changedFields,
      changeCount: Object.keys(changedFields).length,
      hasCommentChanges,
      statusChanged,
    });

    // Only require comments if approval_status was actually changed
    if (changedFields.approval_status && !currentValues.comment) {
      showFormError(
        "editComments",
        "Comments are required when changing the decision"
      );
      document.getElementById("editComments").focus();
      return;
    }

    if (changedFields.last_attend_date) {
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(changedFields.last_attend_date)) {
        showFormError("editLastAttendDate", "Please select a valid date");
        return;
      }
    }

    // Only validate other denial reason if denial_reason was changed to "4"
    if (
      changedFields.denial_reason === "4" &&
      !currentValues.other_denial_reason
    ) {
      showFormError(
        "editOtherDenialReason",
        "Please specify the other denial reason"
      );
      return;
    }

    // Check if there are any changes
    if (Object.keys(changedFields).length === 0) {
      showNotification("No changes detected!", "error");
      return;
    }

    // Show loader
    showLoader(true);

    // Add loading state to save button
    const saveBtn = document.querySelector(".btn-save");
    saveBtn.classList.add("loading");

    // Prepare payload for server
    const payload = {
      userId: getUserDetails().userId,
    };

    // Always include decision object if status changed
    if (statusChanged || hasCommentChanges) {
      payload.decision = {
        status: currentValues.approval_status,
        comment: currentValues.comment, // Send current comment value when status changes
      };
    }

    // Only add other fields to payload if they changed
    if (changedFields.last_attend_date) {
      payload.lastAttendedDate = changedFields.last_attend_date;
    }

    if (changedFields.grade) {
      payload.grade = changedFields.grade;
    }

    // Handle denial reason fields - only if they actually changed
    if (changedFields.denial_reason) {
      payload.denialReason = parseInt(changedFields.denial_reason);
    }

    if (changedFields.other_denial_reason) {
      payload.denialOtherReason = changedFields.other_denial_reason;
    }

    console.log("Sending payload:", {
      form_id: rowData.form_id,
      tab,
      changed_fields: changedFields,
      change_count: Object.keys(changedFields).length,
      has_comment_changes: hasCommentChanges,
      status_changed: statusChanged,
      payload,
    });

    axios.defaults.headers.common["X-API-Key"] = API_KEY;

    try {
      const { data } = await axios.patch(
        `${BASE_URL}/forms/${rowData.form_id}`,
        payload
      );
      console.log("Server response:", data);

      showNotification(`Form updated successfully!`, "success");
      window.getForms();
      closeEditModal();
    } catch (err) {
      console.error("Error updating form:", err);
      showNotification(
        "Failed to update form. Please try again later.",
        "error"
      );
      window.getForms();
    } finally {
      // Hide loader and remove loading state
      showLoader(false);
      saveBtn.classList.remove("loading");
    }
  }

  // Bulk action handler
  async function handleBulkAction(tab, action) {
    const selectedIds = getSelectedIds(tab);

    if (selectedIds.length === 0) {
      showNotification("Please select at least one item to proceed", "error");
      return;
    }

    // Show confirmation
    const actionText = action === "approve" ? "approve" : "disapprove";

    // Get button element and add loading state
    const buttonSelector =
      action === "approve" ? ".approve-btn" : ".reject-btn";
    const activeTabContent = document.querySelector(`#tab-${tab}`);
    const button = activeTabContent.querySelector(buttonSelector);

    if (button) {
      button.classList.add("loading");
      button.disabled = true;
    }

    // Show loader
    showLoader(true);

    axios.defaults.headers.common["X-API-Key"] = API_KEY;

    try {
      console.log("Making API call with payload:", {
        action: action,
        formIds: selectedIds,
        tab: tab,
        userId: getUserDetails().userId,
      });

      const response = await axios.post(`${BASE_URL}/forms/bulk/process`, {
        action: action,
        formIds: selectedIds,
        userId: getUserDetails().userId,
      });

      // Handle successful response
      if (response.status === 200) {
        // showNotification(
        //   response.data.message ||
        //     `Successfully ${action}d ${selectedIds.length} items`,
        //   "success"
        // );

        window.appendMessage(response.data.message);
        // Clear selections after successful action
        clearSelectedIds(tab);

        // Refresh data
        await getForms();
      } else {
        showNotification(
          response.data.message ||
            `Failed to ${action} items. Please try again.`,
          "error"
        );
      }
    } catch (error) {
      // Handle different types of errors
      let errorMessage = `Failed to ${action} items. Please try again.`;

      if (error.response) {
        // Server responded with error status
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        // Request was made but no response received
        errorMessage =
          "Network error. Please check your connection and try again.";
      }

      showNotification(errorMessage, "error");
    } finally {
      // Remove loading state
      if (button) {
        button.classList.remove("loading");
        button.disabled = false;
      }
      showLoader(false);
    }
  }

  function toggleDenialReasonSection(show, clearValues = true) {
    const denialReasonGroup = document.getElementById("denialReasonGroup");
    const otherDenialReasonGroup = document.getElementById(
      "otherDenialReasonGroup"
    );

    if (denialReasonGroup) {
      if (show) {
        denialReasonGroup.style.display = "block";
        // Restore original values if we have them
        if (state.editingRow && !clearValues) {
          document.getElementById("editDenialReason").value =
            state.editingRow.originalDenialReason || "";
          document.getElementById("editOtherDenialReason").value =
            state.editingRow.originalOtherDenialReason || "";
          // Show other denial reason section if needed
          toggleOtherDenialReason(state.editingRow.originalDenialReason == "4");
        }
      } else {
        denialReasonGroup.style.display = "none";
        // Also hide other denial reason
        otherDenialReasonGroup.style.display = "none";
        // Only clear values if clearValues is true (default behavior for close modal)
        if (clearValues) {
          document.getElementById("editDenialReason").value = "";
          document.getElementById("editOtherDenialReason").value = "";
        }
      }
    }
  }

  function toggleDropdown(event, dropdownId) {
    event.stopPropagation();

    // Close all other dropdowns first
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu.id !== dropdownId) {
        menu.classList.remove("show");
      }
    });

    // Toggle current dropdown
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
  }

  const getForms = async (formData) => {
    const userDetails = {
      //AEM USER DETAILS
    };

    const { userId, role } = getUserDetails();

    try {
      let finalData;
      axios.defaults.headers.common["X-API-Key"] = API_KEY;
      if (!formData) {
        const data = await axios.get(`${BASE_URL}/user/forms/${userId}`);
        finalData = data.data.data.data;
      } else {
        finalData = formData;
      }

      // Store previously selected IDs before clearing data
      const previouslySelectedIds = {
        high: [...state.selectedIds.high],
        low: [...state.selectedIds.low],
        highRejection: [...state.selectedIds.highRejection],
      };

      // Clear all existing data
      state.data.high = [];
      state.data.low = [];
      state.data.highRejection = [];

      // Clear filtered data
      state.filteredData.high = [];
      state.filteredData.low = [];
      state.filteredData.highRejection = [];

      // Clear selected rows
      state.selectedRows.high.clear();
      state.selectedRows.low.clear();
      state.selectedRows.highRejection.clear();

      // Clear selected IDs
      state.selectedIds.high = [];
      state.selectedIds.low = [];
      state.selectedIds.highRejection = [];

      // Reset pagination to first page
      state.pagination.high.currentPage = 1;
      state.pagination.low.currentPage = 1;
      state.pagination.highRejection.currentPage = 1;

      // Populate new data
      if (finalData.highConfidence) {
        finalData.highConfidence.forEach((el) =>
          state.data.high.push({
            ...el.form_data,
            agent_review: el.agent_review,
            form_id: el.form_id,
            instructor_decision: el.instructor_decision,
          })
        );
      }

      if (finalData.lowConfidence) {
        finalData.lowConfidence.forEach((el) =>
          state.data.low.push({
            ...el.form_data,
            agent_review: el.agent_review,
            form_id: el.form_id,
            instructor_decision: el.instructor_decision,
          })
        );
      }

      if (finalData.highRejection) {
        finalData.highRejection.forEach((el) =>
          state.data.highRejection.push({
            ...el.form_data,
            agent_review: el.agent_review,
            form_id: el.form_id,
            instructor_decision: el.instructor_decision,
          })
        );
      }

      // Sync previously selected IDs with new data
      syncSelectedRowsWithNewData(previouslySelectedIds);

      function switchToTabWithData() {
        // Check if current tab has data
        if (state.filteredData[state.currentTab].length === 0) {
          // Find first tab with data
          const tabsWithData = Object.keys(state.filteredData).filter(
            (tab) => state.filteredData[tab].length > 0
          );

          if (tabsWithData.length > 0) {
            const newTab = tabsWithData[0];
            state.currentTab = newTab;

            // Update UI to reflect the new active tab
            document
              .querySelectorAll(".tab-button")
              .forEach((btn) => btn.classList.remove("active"));
            document
              .querySelectorAll(".tab-content")
              .forEach((content) => content.classList.remove("active"));

            document
              .querySelector(`[data-tab="${newTab}"]`)
              .classList.add("active");
            document.getElementById(`tab-${newTab}`).classList.add("active");
          }
        }
      }

      init();
      switchToTabWithData();
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load data. Please try again later.");
      setupEventListeners();
    }
  };

  // New function to sync selected rows with new data
  function syncSelectedRowsWithNewData(previouslySelectedIds) {
    Object.keys(previouslySelectedIds).forEach((tab) => {
      const previousIds = previouslySelectedIds[tab];

      if (previousIds.length > 0) {
        // Go through current data and find rows that were previously selected
        state.data[tab].forEach((row, index) => {
          if (previousIds.includes(row.form_id)) {
            // Add to selected IDs
            state.selectedIds[tab].push(row.form_id);
            // Note: selectedRows will be populated when the table is rendered
            // because we need to account for filtering and pagination
          }
        });

        console.log(
          `Restored ${state.selectedIds[tab].length} selected IDs for ${tab}:`,
          state.selectedIds[tab]
        );
      }
    });
  }

  // New function to restore selected rows based on selected IDs
  function restoreSelectedRowsFromIds() {
    Object.keys(state.selectedIds).forEach((tab) => {
      const selectedIds = state.selectedIds[tab];

      if (selectedIds.length > 0) {
        // Clear existing selected rows
        state.selectedRows[tab].clear();

        // Find and select rows that match the selected IDs
        state.filteredData[tab].forEach((row, index) => {
          if (selectedIds.includes(row.form_id)) {
            state.selectedRows[tab].add(index);
          }
        });
      }
    });
  }

  // Helper function to add ID to selected array
  function addSelectedId(tab, id) {
    if (!state.selectedIds[tab].includes(id)) {
      state.selectedIds[tab].push(id);
    }
    console.log(`Added ID ${id} to ${tab}:`, state.selectedIds[tab]);
  }

  // Helper function to remove ID from selected array
  function removeSelectedId(tab, id) {
    const index = state.selectedIds[tab].indexOf(id);
    if (index > -1) {
      state.selectedIds[tab].splice(index, 1);
    }
    console.log(`Removed ID ${id} from ${tab}:`, state.selectedIds[tab]);
  }

  // Helper function to get selected IDs for a tab
  function getSelectedIds(tab) {
    return [...state.selectedIds[tab]]; // Return a copy
  }

  // Helper function to clear all selected IDs for a tab
  function clearSelectedIds(tab) {
    state.selectedIds[tab] = [];
    state.selectedRows[tab].clear();
    console.log(`Cleared all IDs for ${tab}`);
  }

  function filterData(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    Object.keys(state.data).forEach((tab) => {
      if (term === "") {
        state.filteredData[tab] = [...state.data[tab]];
      } else {
        state.filteredData[tab] = state.data[tab].filter((row) => {
          // Helper function to recursively search through nested objects
          const searchInObject = (obj) => {
            if (obj === null || obj === undefined) return false;

            if (typeof obj === "string" || typeof obj === "number") {
              return obj.toString().toLowerCase().includes(term);
            }

            if (typeof obj === "object") {
              return Object.values(obj).some((value) => searchInObject(value));
            }

            return false;
          };

          // Search through all properties of the row
          return searchInObject(row);
        });
      }

      state.pagination[tab].currentPage = 1;

      // Don't clear selected IDs, but update selected rows based on filtered data
      state.selectedRows[tab].clear();

      // Restore selected rows for the filtered data
      const selectedIds = state.selectedIds[tab];
      state.filteredData[tab].forEach((row, index) => {
        if (selectedIds.includes(row.form_id)) {
          state.selectedRows[tab].add(index);
        }
      });
    });

    Object.keys(state.data).forEach((tab) => {
      renderTable(tab);
      updateSelectionUI(tab);
    });

    updateTabBadges();
  }

  function getPaginatedData(tab) {
    const { currentPage, rowsPerPage } = state.pagination[tab];
    const data = state.filteredData[tab];
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
  }

  function getTotalPages(tab) {
    const { rowsPerPage } = state.pagination[tab];
    return Math.ceil(state.filteredData[tab].length / rowsPerPage);
  }

  function renderPagination(tab) {
    const totalPages = getTotalPages(tab);
    const currentPage = state.pagination[tab].currentPage;
    const totalRows = state.filteredData[tab].length;
    const rowsPerPage = state.pagination[tab].rowsPerPage;

    const startRow = totalRows === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
    const endRow = Math.min(currentPage * rowsPerPage, totalRows);

    const paginationInfo = document.getElementById(`pagination-info-${tab}`);
    paginationInfo.textContent = `${startRow}-${endRow} of ${totalRows} entries`;

    const paginationControls = document.getElementById(
      `pagination-controls-${tab}`
    );
    paginationControls.innerHTML = "";

    // Previous button
    const prevBtn = document.createElement("button");
    prevBtn.className = "pagination-btn";
    prevBtn.textContent = "‹ Previous";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(tab, currentPage - 1);
    paginationControls.appendChild(prevBtn);

    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = `pagination-btn ${i === currentPage ? "active" : ""}`;
      pageBtn.textContent = i;
      pageBtn.onclick = () => changePage(tab, i);
      paginationControls.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.className = "pagination-btn";
    nextBtn.textContent = "Next ›";
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    nextBtn.onclick = () => changePage(tab, currentPage + 1);
    paginationControls.appendChild(nextBtn);
  }

  function changePage(tab, newPage) {
    const totalPages = getTotalPages(tab);
    if (newPage >= 1 && newPage <= totalPages) {
      state.pagination[tab].currentPage = newPage;
      renderTable(tab);
      updateSelectionUI(tab);
    }
  }

  function changeRowsPerPage(tab, newRowsPerPage) {
    state.pagination[tab].rowsPerPage = parseInt(newRowsPerPage);
    state.pagination[tab].currentPage = 1;
    renderTable(tab);
    updateSelectionUI(tab);
  }

  // Selection functions
  function toggleRowSelection(tab, rowIndex, isChecked) {
    const actualIndex =
      (state.pagination[tab].currentPage - 1) *
        state.pagination[tab].rowsPerPage +
      rowIndex;

    // Get the actual row data to extract the ID
    const rowData = state.filteredData[tab][actualIndex];
    const rowId = rowData.form_id; // Using form_id as the unique identifier

    if (isChecked) {
      state.selectedRows[tab].add(actualIndex);
      addSelectedId(tab, rowId);
    } else {
      state.selectedRows[tab].delete(actualIndex);
      removeSelectedId(tab, rowId);
    }

    updateSelectionUI(tab);
    updateMasterCheckbox(tab);
  }

  function toggleAllSelection(tab, isChecked) {
    const startIndex =
      (state.pagination[tab].currentPage - 1) *
      state.pagination[tab].rowsPerPage;
    const currentPageData = getPaginatedData(tab);

    for (let i = 0; i < currentPageData.length; i++) {
      const actualIndex = startIndex + i;
      const rowData = state.filteredData[tab][actualIndex];
      const rowId = rowData.form_id; // Using form_id as the unique identifier

      if (isChecked) {
        state.selectedRows[tab].add(actualIndex);
        addSelectedId(tab, rowId);
      } else {
        state.selectedRows[tab].delete(actualIndex);
        removeSelectedId(tab, rowId);
      }
    }

    renderTable(tab);
    updateSelectionUI(tab);
  }

  function updateMasterCheckbox(tab) {
    const masterCheckbox = document.getElementById(`masterCheckbox-${tab}`);
    const startIndex =
      (state.pagination[tab].currentPage - 1) *
      state.pagination[tab].rowsPerPage;
    const currentPageData = getPaginatedData(tab);

    let selectedCount = 0;
    for (let i = 0; i < currentPageData.length; i++) {
      if (state.selectedRows[tab].has(startIndex + i)) {
        selectedCount++;
      }
    }

    if (selectedCount === 0) {
      masterCheckbox.checked = false;
      masterCheckbox.indeterminate = false;
    } else if (selectedCount === currentPageData.length) {
      masterCheckbox.checked = true;
      masterCheckbox.indeterminate = false;
    } else {
      masterCheckbox.checked = false;
      masterCheckbox.indeterminate = true;
    }
  }

  function updateSelectionUI(tab) {
    const selectedCount = state.selectedRows[tab].size;
    const selectedCountEl = document.getElementById(`selected-count-${tab}`);

    selectedCountEl.textContent = `${selectedCount} selected`;

    // Also show the actual IDs count
    console.log(
      `${tab} - Selected IDs (${state.selectedIds[tab].length}):`,
      state.selectedIds[tab]
    );
  }

  function createModalContent(rowData) {
    const student = rowData.student_data;
    const course = rowData.course_info;
    const workflow = rowData.workflow_history;
    const taskDataString = sessionStorage.getItem('attachmentDataforAI');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];
    const task = taskData && taskData.length > 0 ? taskData.find(t => t.WORKFLOW_INSTANCE_ID === workflow.workflow_instance_id) : null;
    const attachments = task ? task.attachment : [];

    const getConfidenceClass = (score) => {
      if (!score) return "";
      const numScore = parseFloat(score);
      if (numScore >= 0.8) return "confidence-high";
      if (numScore >= 0.5) return "confidence-medium";
      return "confidence-low";
    };

    // Determine which review data to use based on step name
    const isInstructorReview = workflow.step_name === "Instructor Review";
    const isChairReview = workflow.step_name === "Chair Review";

    // Get the appropriate review data
    const reviewData = isInstructorReview
      ? rowData.instructor_review
      : isChairReview
      ? rowData.chair_review
      : null;

    // Build grade section
    const gradeSection =
      reviewData && reviewData.grade
        ? `
    <div class="detail-item">
      <div class="detail-label"> Grade</div>
      <div class="detail-value">
        <span class="grade-badge">${reviewData.grade}</span>
      </div>
    </div>
  `
        : "";

    // Build last attend date section
    const lastAttendDate = reviewData
      ? reviewData.lastDateAttended || reviewData.LastdateAttended
      : null;

    const lastAttendSection = lastAttendDate
      ? `
    <div class="detail-item">
      <div class="detail-label">Last Attended Date</div>
      <div class="detail-value">${formatDateToMMDDYYYY(lastAttendDate)}</div>
    </div>
  `
      : "";

    // Build denial reasons section
    let denialReasonsSection = "";
    if (reviewData && reviewData.denialReason) {
      const denialReasonText = getDenialReasonText(reviewData.denialReason);
      const otherReason = reviewData.denialOtherReason;

      denialReasonsSection = `
      <div class="detail-item">
        <div class="detail-label"> Denial Reason</div>
        <div class="detail-value">
          <div class="denial-reason-content">
            <span class="denial-reason-main">${denialReasonText}</span>
            ${
              otherReason
                ? `<div class="denial-reason-other">
              <strong>Additional Details:</strong> ${otherReason}
            </div>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
    }

    // Build instructor/chair comments section
    const reviewComments = reviewData
      ? reviewData.instructorComment || reviewData.additionalComments
      : null;

    const reviewCommentsSection = reviewComments
      ? `
    <div class="detail-item">
      <div class="detail-label"> ${
        isInstructorReview ? "Instructor" : "Chair"
      } Comments (AI Generated)</div>
      <div class="detail-value">
        <div class="comment-text">${reviewComments}</div>
      </div>
    </div>
  `
      : "";

    return `
    ${
      rowData.agent_review?.reasoning
        ? `
      <div class="detail-item">
        <div class="detail-label reasoning"> Agent Comment</div>
        <div class="detail-value">
          <div class="reasoning-text">${rowData.agent_review.reasoning}</div>
        </div>
      </div>
    `
        : ""
    }

    <div class="detail-item">
      <div class="detail-label"> Instructor Decision</div>
      <div class="detail-value">${
        rowData?.instructor_decision?.approval_status || "-"
      }</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> Instructor Comment</div>
      <div class="detail-value">${
        rowData?.instructor_decision?.comments || "-"
      }</div>
    </div>

    ${gradeSection}
    
    ${lastAttendSection}
    
    ${denialReasonsSection}
    
    ${reviewCommentsSection}

    <div class="detail-item files-section">
      <div class="detail-label"> Non Medical Petitions</div>
      <div class="detail-value">
        <div class="file-list">
          ${[
            student.non_medical_petition1,
            student.non_medical_petition2,
            student.non_medical_petition3,
          ]
            .map(
              (el, i) => `
                <div class="file-item">
                  <span class="file-icon">${i + 1} </span>
                  <span class="file-name">${el}</span>
                </div>`
            )
            .join("")}
        </div>
      </div>
    </div>

    ${
      attachments.length
        ? `
      <div class="detail-item files-section">
        <div class="detail-label"> Attachments</div>
        <div class="detail-value">
          <div class="file-list">
            ${attachments
              .map(
                (el, i) => `
                  <a class="file-item" href="/bin/viewTaskAttachment?assetPath=${encodeURIComponent(el.path)}" target="_blank" rel="noopener noreferrer">
                    <span class="file-icon">📄</span>
                    <span class="file-name">${el.fileName}</span>
                  </a>`
              )
              .join("")}
          </div>
        </div>
      </div>
    `
        : ""
    }

    <div class="detail-item">
      <div class="detail-label confidence"> Confidence Score</div>
      <div class="detail-value">
        ${
          rowData.agent_review?.confidence_score
            ? `
          <span class="confidence-score ${getConfidenceClass(
            rowData.agent_review.confidence_score
          )}">
            ${formatConfidenceScore(rowData.agent_review.confidence_score)}
          </span>
        `
            : "-"
        }
      </div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> Case ID</div>
      <div class="detail-value">${student.case_id || "-"}</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> Course Number</div>
      <div class="detail-value">${course.course_no || "-"}</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label">Term Description</div>
      <div class="detail-value">${student.term_desc || "-"}</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> Major</div>
      <div class="detail-value">${student.major || "-"}</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> Class Number</div>
      <div class="detail-value">${workflow.class_number || "-"}</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> CWID</div>
      <div class="detail-value">${workflow.cwid || "-"}</div>
    </div>
    
    <div class="detail-item">
      <div class="detail-label"> Withdrawal Type</div>
      <div class="detail-value">${
        workflow.withdrawal_type || rowData.FORM_TYPE || "-"
      }</div>
    </div>
  `;
  }

  function formatToMMDDYY(dateString) {
    if (!dateString) return "-";

    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return "-";

      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      const yyyy = d.getUTCFullYear();

      return `${mm}/${dd}/${yyyy}`;
    } catch (e) {
      return dateString;
    }
  }

  // Table rendering
  function renderTable(tab) {
    const tbody = document.getElementById(`body-${tab}`);
    const data = getPaginatedData(tab);
    const startIndex =
      (state.pagination[tab].currentPage - 1) *
      state.pagination[tab].rowsPerPage;

    tbody.innerHTML = "";

    if (data.length === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="8" style="text-align:center; padding: 1rem; color: #777; font-style: italic;">No data available</td>`;
      tbody.appendChild(tr);
      return;
    }

    data.forEach((row, index) => {
      const student = row.student_data;
      const course = row.course_info;
      const workflow = row.workflow_history;
      console.log(course, "course");
      const actualIndex = startIndex + index;
      const isSelected = state.selectedRows[tab].has(actualIndex);

      const tr = document.createElement("tr");
      tr.classList.add("table-row");
      if (isSelected) tr.classList.add("selected");

      tr.innerHTML = `
      <td><input type="checkbox" ${
        isSelected ? "checked" : ""
      } onchange="toggleRowSelection('${tab}', ${index}, this.checked)"></td>
      <td class="student-name-cell" onclick="openStudentModal(event, '${tab}', ${index})">${
        student.first_name
      } ${student.last_name}</td>
      <td>${workflow.case_id}</td>
      <td>${course.course_no}</td>
      <td>${workflow.cwid}</td>
      <td>${workflow.step_name}</td>
      <td>${formatToMMDDYY(workflow.step_start_time.$date)}</td>
      <td>${row.instructor_review.grade || "-"}</td>
      <td>${row.instructor_review.lastDateAttended || "-"}</td>
      <td>${student.term_desc}</td>
      <td>${student.major}</td>
      <td title="${student.reason || ""}">${
        formatConfidenceScore(row.agent_review?.confidence_score) || "-"
      }</td>
      <td class="instructor_decision_column">${
        row?.instructor_decision?.approval_status || "-"
      }${
        row?.instructor_decision?.comments
          ? `<span class="info-icon ml-sm" title="${row?.instructor_decision?.comments}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#002B5A">
          <circle cx="12" cy="12" r="10" fill="#002B5A"/>
          <text x="12" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="bold">i</text>
        </svg>
      </span>`
          : ""
      }</td>
        <td class="agent_review">${
          row.agent_review?.suggested_action === "approve"
            ? "Approve"
            : row.agent_review?.suggested_action === "disapprove"
            ? "Deny"
            : row.agent_review?.suggested_action || "-"
        }
    ${
      row.agent_review?.reasoning
        ? `<span class="info-icon" title="${row.agent_review.reasoning}">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#002B5A">
    <circle cx="12" cy="12" r="10" fill="#002B5A"/>
    <text x="12" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="bold">i</text>
  </svg>
</span>`
        : ""
    }
      </td>
  <td class="actions-cell">
  <button class="edit-icon-btn" onclick="openEditModal('${tab}', ${index})" title="Edit Form">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  </button>
    </td>
  `;

      tbody.appendChild(tr);
    });

    renderPagination(tab);
    updateMasterCheckbox(tab);
  }

  function openStudentModal(event, tab, rowIndex) {
    event.stopPropagation(); // Prevent any parent click handlers

    const actualIndex =
      (state.pagination[tab].currentPage - 1) *
        state.pagination[tab].rowsPerPage +
      rowIndex;
    const rowData = state.filteredData[tab][actualIndex];

    const detailsHtml = createModalContent(rowData);
    openModal(detailsHtml);
  }

  // Tab management
  function switchTab(newTab) {
    // Remove active class from all tabs and contents
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${newTab}"]`).classList.add("active");
    document.getElementById(`tab-${newTab}`).classList.add("active");

    state.currentTab = newTab;
    renderTable(newTab);
  }

  function updateTabBadges() {
    Object.keys(state.filteredData).forEach((tab) => {
      const badge = document.querySelector(`[data-tab="${tab}"] .badge`);
      if (badge) {
        badge.textContent = state.filteredData[tab].length;
      }
    });
  }

  function init() {
    Object.keys(state.data).forEach((tab) => {
      state.filteredData[tab] = [...state.data[tab]];
    });

    // After setting filtered data, restore selected rows based on selected IDs
    restoreSelectedRowsFromIds();

    Object.keys(state.data).forEach((tab) => {
      renderTable(tab);
      updateSelectionUI(tab);
    });

    updateTabBadges();
    setupEventListeners();
  }

  function setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    let searchTimeout;

    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        filterData(e.target.value);
      }, 300);
    });

    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab(btn.dataset.tab);
      });
    });

    Object.keys(state.data).forEach((tab) => {
      const masterCheckbox = document.getElementById(`masterCheckbox-${tab}`);
      if (masterCheckbox) {
        masterCheckbox.addEventListener("change", (e) => {
          toggleAllSelection(tab, e.target.checked);
        });
      }

      const rowsSelect = document.getElementById(`rowsPerPage-${tab}`);
      if (rowsSelect) {
        rowsSelect.addEventListener("change", (e) => {
          changeRowsPerPage(tab, e.target.value);
        });
      }
    });

    // Approval status change handler - UPDATED
    const approvalStatusSelect = document.getElementById("editApprovalStatus");
    if (approvalStatusSelect) {
      approvalStatusSelect.addEventListener("change", (e) => {
        const isDisapprove = e.target.value === "disapprove";
        toggleDenialReasonSection(isDisapprove, false); // Don't clear values when toggling
      });
    }

    // Denial reason change handler
    const denialReasonSelect = document.getElementById("editDenialReason");
    if (denialReasonSelect) {
      denialReasonSelect.addEventListener("change", (e) => {
        toggleOtherDenialReason(e.target.value === "4");
      });
    }

    // Add this inside setupEventListeners function
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".actions-dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.remove("show");
        });
      }
    });

    // Grade evaluation radio button handlers (Only for Instructors)
    const estimatedGradeRadio = document.getElementById("estimatedGrade");
    const noBasisGradeRadio = document.getElementById("noBasisGrade");

    if (estimatedGradeRadio && noBasisGradeRadio) {
      estimatedGradeRadio.addEventListener("change", (e) => {
        if (e.target.checked) {
          // Only execute if this is instructor review
          const isInstructorReview =
            state.editingRow?.data?.workflow_history?.step_name ===
            "Instructor Review";

          if (isInstructorReview) {
            const gradeSelect = document.getElementById("editGradeSelect");

            // Enable grade select for instructors
            gradeSelect.disabled = false;
            gradeSelect.style.backgroundColor = "";
            gradeSelect.style.cursor = "";
            gradeSelect.style.opacity = "";

            // Reset to original grade or empty (but not "Not Applicable")
            const originalGrade =
              state.editingRow?.data?.instructor_review?.grade || "";
            gradeSelect.value =
              originalGrade !== "Not Applicable" ? originalGrade : "";
          }
        }
      });

      noBasisGradeRadio.addEventListener("change", (e) => {
        if (e.target.checked) {
          // Only execute if this is instructor review
          const isInstructorReview =
            state.editingRow?.data?.workflow_history?.step_name ===
            "Instructor Review";

          if (isInstructorReview) {
            const gradeSelect = document.getElementById("editGradeSelect");

            // Set to Not Applicable and disable
            gradeSelect.value = "Not Applicable";
            gradeSelect.disabled = true;
            gradeSelect.style.backgroundColor = "#f5f5f5";
            gradeSelect.style.cursor = "not-allowed";
            gradeSelect.style.opacity = "0.6";
          }
        }
      });
    }
  }

  // Toggle other denial reason input
  function toggleOtherDenialReason(show) {
    const otherGroup = document.getElementById("otherDenialReasonGroup");
    if (otherGroup) {
      if (show) {
        otherGroup.style.display = "block";
      } else {
        otherGroup.style.display = "none";
        const otherInput = document.getElementById("editOtherDenialReason");
        if (otherInput) {
          otherInput.value = "";
        }
      }
    }
  }

  // Clear form errors
  function clearFormErrors() {
    document.querySelectorAll(".form-input.error").forEach((input) => {
      input.classList.remove("error");
    });
    document.querySelectorAll(".error-message").forEach((msg) => {
      msg.classList.remove("show");
    });
  }

  // Show form error
  function showFormError(inputId, message) {
    const input = document.getElementById(inputId);
    if (input) {
      input.classList.add("error");

      let errorMsg = input.parentNode.querySelector(".error-message");
      if (!errorMsg) {
        errorMsg = document.createElement("div");
        errorMsg.className = "error-message";
        input.parentNode.appendChild(errorMsg);
      }

      errorMsg.textContent = message;
      errorMsg.classList.add("show");
    }
  }

  function getAllSelectedIds() {
    return state.selectedIds;
  }

  // Notification system
  function showNotification(message, type = "success") {
    const notification = document.getElementById("notification");
    const messageEl = document.getElementById("notificationMessage");

    messageEl.textContent = message;

    // Remove existing type classes and add new one
    notification.classList.remove("error");
    if (type === "error") {
      notification.classList.add("error");
    }

    notification.classList.add("show");

    // Auto hide after 4 seconds
    setTimeout(() => {
      messageEl.textContent = "";
      notification.classList.remove("show");
    }, 4000);
  }

  // Loader system
  function showLoader(show) {
    const loader = document.getElementById("loaderOverlay");
    if (show) {
      loader.classList.add("show");
      document.body.style.overflow = "hidden";
    } else {
      loader.classList.remove("show");
      document.body.style.overflow = "";
    }
  }

  // Expose functions to global scope
  window.toggleRowSelection = toggleRowSelection;
  window.toggleAllSelection = toggleAllSelection;
  window.closeModal = closeModal;

  // Expose helper functions for external access
  window.getSelectedIds = getSelectedIds;
  window.clearSelectedIds = clearSelectedIds;
  window.getAllSelectedIds = getAllSelectedIds;
  window.getForms = getForms;
  window.closeEditModal = closeEditModal;
  window.openEditModal = openEditModal;
  window.saveEdit = saveEdit;
  window.toggleDropdown = toggleDropdown;
  window.openStudentModal = openStudentModal;
  window.handleBulkAction = handleBulkAction;

  document.addEventListener("DOMContentLoaded", () => {
    new VoiceInput();
    getForms();
  });
})();