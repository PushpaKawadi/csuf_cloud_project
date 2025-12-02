 document.addEventListener('DOMContentLoaded', (event) => {
        hljs.highlightAll(); // Initialize Highlight.js for syntax highlighting

    debugger;
 $.ajax({
      type: 'GET', 
      url:"/bin/getMyTasksData",
      dataType: 'json',
      success: function(response){
          sessionStorage.setItem("workflowdataforAI", JSON.stringify(response));
        console.log(response);
      	}
	}); 
const socket = io("https://aem-agent-ai.yanaimpl.com/");
    const chatDiv = document.getElementById("chat");
    const mainChatScreen = document.getElementById("mainchatscreen");
    const inputBox = document.getElementById("input-box");
    const threadIdInputBox = document.getElementById("input-thread-id");
    const sendButton = document.getElementById("send-button");
    const fetchDataButton = document.getElementById("fetch-data-btn");
    const updateContextBtn = document.getElementById("update-context-btn");
    let isStreaming = false;
    generateUID();
    let currentBotDiv = null;
    let currentBotResponse = "";

    const scrollToBottom = () => {
        mainChatScreen.scrollTop = mainChatScreen.scrollHeight;
    };
    function generateUID() {
            const uid = 'UID-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            document.getElementById('input-thread-id').value = uid;
    }

    function appendMessage(text, sender) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("flex", "items-start", "space-x-4", "mb-5");

        if (sender === "You") {
            wrapper.classList.add("justify-end");
        }

        const bubble = document.createElement("div");
        if (sender === "You") {
            bubble.classList.add(
                "px-5", 
                "py-2.5", 
                "rounded-xl",  
                "max-w-[70%]", 
                "text-sm", 
                "break-words", 
                "bg-gray-100", 
                "text-gray-950", 
                "text-right",
                ".bg-token-message-surface",
                "whitespace-pre-wrap",
                "leading-none",
                "mb-0",
                "space-y-2"
            );
        } else {
            bubble.classList.add("text-gray-800", "text-sm", "w-full");
        }

        // Only use marked.parse for actual text content, not for the SVG
        if (text.includes('<svg')) {
            bubble.innerHTML = text; // Direct SVG injection
        } else {
            bubble.innerHTML = marked.parse(text);
            const codeBlocks = bubble.querySelectorAll('pre code');
            codeBlocks.forEach((block) => {
                hljs.highlightElement(block);
            });
        }

        if (sender !== "You") {
            const avatar = document.createElement("div");
            avatar.classList.add("w-8", "h-8", "rounded-full", "flex-shrink-0", "flex", "items-center", "justify-center");
            avatar.innerHTML = `
                <svg height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14" style="color: currentcolor;">
                    <path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path>
                    <path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path>
                    <path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path>
                </svg>`;
            wrapper.appendChild(avatar);
        }

        wrapper.appendChild(bubble);
        chatDiv.appendChild(wrapper);
        scrollToBottom();
        return bubble;
    }

    const sendMessage = () => {
        if(sendButton.disabled === true)
            return;
        currentBotDiv = null;
        // sendButton.disabled = true;
        let message = inputBox.value.trim();
        let threadId = threadIdInputBox.value.trim();
        if(threadId === '') {
            alert("Plz give thread id");
            return;
        }
        message = message.replace(/\s+$/, '');
        console.log(message);
        if (message && message !== "") {
            payload_data = {
                request_id: "3e3e3e3e",
                task_code : "conversation-flow",
                conversation_id: threadId,
                payload: {
                    "name": "penny",
                    "apiId": "1",
                    "text": message,
                    "context": {},
                    "userId": '0000',
                    "subMenuApiId": "string",
                    "languageCode": "EN",
                    "source": "string",
                    "device": "string",
                    "applicationId": "string",
                    "testMode": "string",
                    "inputmode": "string",
                    "sourceVersion": "string",
                    "MessageId": "string",
                    "workflow_data": getWorkflowData()
                }
            }
            appendMessage(message, "You");
            socket.emit("message", payload_data);
            inputBox.value = "";
            currentBotResponse = "";
            currentBotDiv = appendMessage("" + AI_ANIMATION_SVG, "Bot");
        }
    };

    sendButton.addEventListener("click", sendMessage);
    fetchDataButton.addEventListener("click", fetchData);
    updateContextBtn.addEventListener("click", () => {
        let threadId = threadIdInputBox.value.trim();
        console.log(threadId);
        socket.emit("message", {task_code: "context-update", conversation_id: threadId, payload: {context_topic: 'travels', travel_id: '1234'}});
    });
    inputBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    function fetchData() {
        console.log("fetch data");
        let threadId = threadIdInputBox.value.trim();
        console.log(threadId);
        socket.emit("message", {task_code: "fetch-data", conversation_id: threadId});
    }

    const AI_ANIMATION_SVG = `
        <div class="ai-animation">
            <svg class="ai-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 16px; height: 16px;">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" class="ai-gradient-pen" />
                        <stop offset="100%" class="ai-gradient-pen" style="stop-color: #666666;">
                    </linearGradient>
                </defs>
                <!-- Pen body -->
                <path d="M16 4L20 8L8.5 19.5L4 20L4.5 15.5L16 4Z" 
                    fill="url(#gradient)" 
                    stroke="url(#gradient)" 
                    stroke-width="1.5" 
                    stroke-linejoin="round"/>
                <!-- Pen tip -->
                <path d="M16 4L20 8L18 10L14 6L16 4Z" 
                    fill="url(#gradient)" 
                    stroke="url(#gradient)" 
                    stroke-width="1.5" 
                    stroke-linejoin="round"/>
            </svg>
        </div>
    `;

    function addChunkMsg(msg) {
        if (msg) {
            currentBotResponse += msg;
            if (currentBotDiv) {
                currentBotDiv.innerHTML = marked.parse(currentBotResponse) + AI_ANIMATION_SVG;
                const codeBlocks = currentBotDiv.querySelectorAll('pre code');
                codeBlocks.forEach((block) => {
                    hljs.highlightElement(block);
                });
                scrollToBottom();
            }
        }
    }

    socket.on("message", (data) => {
        if ('content_type' in data && data['content_type'] == 'chunk') {
            addChunkMsg(data['message']);
        }
        else {
            console.log(data);
        }
        
    })

    socket.on("fetch-data", (data) => {
        console.log(data);
    })

    socket.on("chunk_chat_stream_end", () => {
        console.log("stream end");
        if (currentBotDiv) {
            // Remove animation when stream ends
            currentBotDiv.innerHTML = marked.parse(currentBotResponse);
            const codeBlocks = currentBotDiv.querySelectorAll('pre code');
            codeBlocks.forEach((block) => {
                hljs.highlightElement(block);
            });
            
            // Create a container for the buttons
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("flex", "space-x-1", "mt-4");

            // Create the Copy button
       /*     const copyButton = document.createElement("button");
            copyButton.classList.add(
                "hover:bg-gray-200",
                "text-gray-500",
                "p-2",
                "rounded-full",
                "focus:outline-none"
            );
            copyButton.innerHTML = `
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            // Add click event to Copy button
            copyButton.addEventListener("click", () => {
                                        debugger;
                navigator.clipboard.writeText(currentBotResponse).then(() => {
                    console.info("Response copied to clipboard!");
                    showToast("Copied to clipboard!"); // Show toast notification
                }).catch(err => {
                    console.error("Failed to copy: ", err);
                    showToast("Failed to copy. Try again.", true); // Show error toast
                });

            });*/

            // Create the Like button
            const likeButton = document.createElement("button");
            likeButton.classList.add(
                "hover:bg-gray-200",
                "text-gray-500",
                "p-2",
                "rounded-full",
                "focus:outline-none"
            );
            likeButton.innerHTML = `
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            // Add click event to Like button
            likeButton.addEventListener("click", () => {
            likeButton.style.backgroundColor = "#d1d5db";
            });

            // Create the Dislike button
            const dislikeButton = document.createElement("button");
            dislikeButton.classList.add(
                "hover:bg-gray-200",
                "text-gray-500",
                "p-2",
                "rounded-full",
                "focus:outline-none"
            );
            dislikeButton.innerHTML = `
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            // Add click event to Dislike button
            dislikeButton.addEventListener("click", () => {
            dislikeButton.style.backgroundColor = "#d1d5db";
            });

            // Append buttons to the container
            //buttonContainer.appendChild(copyButton);
            buttonContainer.appendChild(likeButton);
            buttonContainer.appendChild(dislikeButton);

            // Append the button container to the bot's response div
            currentBotDiv.appendChild(buttonContainer);

            sendButton.disabled = false;
        }

        // currentBotDiv = null;
        scrollToBottom();
    });

    socket.on("chat_error", () => {
        console.log("error", currentBotDiv)
        if (currentBotDiv) {
                currentBotDiv.innerHTML = marked.parse(currentBotResponse + '\n\n' + '<br>' +  '<p style="color: darkred;">An error occurred while processing your request.</p>');
            }
        else {
            // appendMessage("An error occurred", "Error");
        }
        sendButton.disabled = false;
    });

    function showToast(message, isError = false) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.remove("hidden", "bg-gray-800", "bg-red-600");
        toast.classList.add(isError ? "bg-red-600" : "bg-gray-800");

        // Reset animation
        toast.style.animation = 'none';
        // Trigger reflow to restart the animation
        void toast.offsetWidth;
        toast.style.animation = null;

        setTimeout(() => {
            toast.classList.add("hidden");
        }, 3000); // Total duration of animations and delay
    }

    function getWorkflowData() {
        var storedUserData = sessionStorage.getItem("workflowdataforAI");
          var data = JSON.parse(storedUserData);
        console.log('Data from get Workflow function '+data);
        return data;
    }

    function addChunkMsg(msg) {
        if (msg) {
            currentBotResponse += msg;
            if (currentBotDiv) {
                // Process the message to preserve multiple newlines
                const processedContent = currentBotResponse
                    .replace(/\n{2,}/g, match => '\n'.repeat(match.length)); // Preserve multiple newlines
 
                currentBotDiv.innerHTML = `
                    <div class="markdown-table-wrapper">
                        <div class="markdown-content">${marked.parse(processedContent)}</div>
                    </div>` + AI_ANIMATION_SVG;
                
                const codeBlocks = currentBotDiv.querySelectorAll('pre code');
                codeBlocks.forEach((block) => {
                    hljs.highlightElement(block);
                });
                scrollToBottom();
            }
        }
    }



});

