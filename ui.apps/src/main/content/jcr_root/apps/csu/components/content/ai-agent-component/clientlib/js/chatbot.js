document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const emptyState = document.getElementById("chatbot-empty-state");
  const suggestions = document.querySelectorAll(".suggestion");

  // Store active polling intervals to manage multiple message polling
  const activePolls = new Map();

  // Function to format timestamp in 12-hour format with AM/PM
  function formatTimestamp() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const formattedHours = hours.toString().padStart(2, "0");

    return `${formattedHours}:${minutes} ${ampm}`;
  }

  // Generate unique ID for each message
  function generateUniqueId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }

  function appendMessage(
    content,
    sender = "bot",
    showTimeStamp = true,
    messageId = null
  ) {
    const message = document.createElement("div");
    message.classList.add("message", sender);

    // Assign unique ID to message
    const uniqueId = messageId || generateUniqueId();
    message.setAttribute("data-message-id", uniqueId);

    // Create timestamp element
    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.textContent = showTimeStamp ? formatTimestamp() : "";

    // Create content wrapper
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("message-content");

    // For bot: inject raw HTML, for user: use textContent for security
    if (sender === "bot") {
      contentWrapper.innerHTML = content;
    } else {
      contentWrapper.textContent = content;
    }

    // Append content and timestamp to message
    message.appendChild(contentWrapper);
    message.appendChild(timestamp);

    console.log(content, sender);
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return uniqueId;
  }

  // Function to update existing message by ID
  function updateMessageById(messageId, content, showTimeStamp = true) {
    const message = document.querySelector(`[data-message-id="${messageId}"]`);
    if (!message) return;

    const contentWrapper = message.querySelector(".message-content");
    const timestampElement = message.querySelector(".timestamp");

    if (contentWrapper) {
      contentWrapper.innerHTML = content;
    }

    if (timestampElement && showTimeStamp) {
      timestampElement.textContent = formatTimestamp();
    }

    // Add chat-card class if it's a bot message with actual response
    if (message.classList.contains("bot") && content !== "Thinking...") {
      message.classList.add("chat-card");
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Function to poll for job result
  async function pollJobResult(
    jobId,
    messageId,
    maxAttempts = 30,
    interval = 2000
  ) {
    let attempts = 0;

    const poll = async () => {
      if (attempts >= maxAttempts) {
        // Timeout - update message with error
        updateMessageById(messageId, getRandomErrorMessage());
        activePolls.delete(messageId);
        return;
      }

      try {
        const response = await axios.post(
          `${BASE_URL}/chatbot/query/result`,
          { jobId: jobId },
          {
            headers: {
              "Content-Type": "application/json",
              "X-API-Key": API_KEY,
            },
          }
        );

        const data = response.data;

        console.log(data, "test");

        if (data.jobStatus === "completed") {
          // Job completed - update message with final response
          const botReply = data.response || "No response.";
          const formList = data.formList;
          const refetch = data.refetch;

          updateMessageById(messageId, botReply);

          // Handle additional response actions
          if (!formList) {
            window.getForms();
          }

          if (formList) {
            window.getForms(formList);
          }

          // Clear polling for this message
          activePolls.delete(messageId);
        } else if (data.jobStatus === "pending") {
          // Still processing - continue polling
          attempts++;
          setTimeout(poll, interval);
        } else if (data.jobStatus === "failed" || data.jobStatus === "error") {
          // Job failed - update with error message
          updateMessageById(messageId, getRandomErrorMessage());
          activePolls.delete(messageId);
        }
      } catch (error) {
        console.error(`Polling error for job ${jobId}:`, error);
        attempts++;

        updateMessageById(messageId, getRandomErrorMessage());
        activePolls.delete(messageId);
      }
    };

    // Store the polling function so we can cancel it if needed
    activePolls.set(messageId, poll);

    // Start polling
    setTimeout(poll, interval);
  }

  async function sendMessage(userText) {
    // Add user message
    appendMessage(userText, "user");

    // Add bot thinking message and get its unique ID
    const botMessageId = appendMessage("Thinking...", "bot", false);

    console.log(window.getAllSelectedIds());

    const selectedIds = window.getAllSelectedIds();
    const selectedFormIds = Object.keys(selectedIds)
      .map((el) => selectedIds[el])
      .flat();

    axios.defaults.headers.common["X-API-Key"] = API_KEY;

    try {
      // Step 1: Submit the job
      const jobResponse = await axios.post(
        `${BASE_URL}/chatbot/query/form_ids`,
        {
          form_ids: selectedFormIds,
          query: userText,
          user_id: getUserDetails().userId,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { jobId, jobStatus } = jobResponse.data;

      if (jobStatus === "pending" && jobId) {
        // Step 2: Start polling for the result
        pollJobResult(jobId, botMessageId);
      } else {
        // Immediate response or error
        const botReply =
          jobResponse.data.response?.response || getRandomErrorMessage();
        updateMessageById(botMessageId, botReply);
      }
    } catch (err) {
      console.error("Error submitting job:", err);
      // Update the thinking message with error
      updateMessageById(botMessageId, getRandomErrorMessage());
    }
  }

  function handleUserInput() {
    const input = chatInput.value.trim();
    if (!input) return;

    chatInput.value = "";
    sendMessage(input);
  }

  // Clean up polling when page unloads
  window.addEventListener("beforeunload", () => {
    activePolls.clear();
  });

  sendBtn.addEventListener("click", handleUserInput);

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleUserInput();
  });

  // Export functions for external use
  window.appendMessage = appendMessage;
  window.updateMessageById = updateMessageById;
});