$(document).ready(function() {
    const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const conversationId = document.getElementById('conversationId');

// Helper function to switch tabs
function switchTab(tabName) {
    if(tabName === 'history' || tabName === 'mytask') {
        const tab = document.querySelector(`[data-tab="${tabName}"]`);
        if (tab) tab.click();
    }
}

// Helper function to add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `mb-4 ${isUser ? 'text-right' : 'text-left'}`;
    
    const bubble = document.createElement('div');
    bubble.className = `inline-block p-3 rounded-lg ${
        isUser ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'
    } max-w-[80%]`;
    bubble.innerHTML = message.replace(/\n/g, '<br>');
    
    messageDiv.appendChild(bubble);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle chat form submission
chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, true);
    chatInput.value = '';
    const sessionId = conversationId.value;
    try {
        const response = await fetch('https://phpapps.vector.yanaimpl.com/aem/api/chat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "conversationId": sessionId, "message": message, "professorInfo": professorInfo })
        });
        const data = await response.json();
        conversationId.value = data.CONVERSATION_ID;
        
        // Handle tab switching based on message content
        console.log("data:", data);
        if(data.TAB) {
            switchTab(data.TAB);
        }
        console.log("tab:", data.TAB);
        if(data.ACTION === 'approve' || data.ACTION === 'decline') {
            refreshTables();
        }
        console.log("acton:", data.ACTION);
        // Add AI response to chat
        addMessage(data.RESPONSE);
        
    } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, I encountered an error. Please try again.');
    }
});
function refreshTables() {
    // Refresh tasks table
    $.ajax({
        url: 'https://phpapps.vector.yanaimpl.com/aem/tasks_table.php',
        method: 'GET',
        mode: "cors",
        success: function(data) {
            $('#mytaskContent').html(data);
        },
        error: function(xhr, status, error) {
            if (xhr.status === 401) {
                // Handle authentication failure
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('password');
                alert('Authentication failed. Please refresh the page and try again.');
            } else {
                console.error('Error loading tasks:', error);
            }
        }
    });
    $.ajax({
        url: 'https://phpapps.vector.yanaimpl.com/aem/history_table.php',
        method: 'GET',
        mode: "cors",
        success: function(data) {
            $('#historyContent').html(data);
        },
        error: function(xhr, status, error) {
            if (xhr.status === 401) {
                // Handle authentication failure
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('password');
                alert('Authentication failed. Please refresh the page and try again.');
            } else {
                console.error('Error loading tasks:', error);
            }
        }
    });
}

// Add initial greeting
addMessage('Hello! I can help you manage your tasks and view history. Try asking me to "Show pending tasks" or "Show activity this week".'); 

let currentReason = '';

function showReasonModal(encodedReason) {
    // Decode the base64 encoded reason
    const reason = atob(encodedReason);
    currentReason = reason;
    document.getElementById('modalReasonText').textContent = reason;
    const modal = document.getElementById('reasonModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('opacity-100'), 10);
}

function hideReasonModal() {
    const modal = document.getElementById('reasonModal');
    modal.classList.remove('opacity-100');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function copyReason(event) {  // Add event parameter here
    navigator.clipboard.writeText(currentReason).then(() => {
        // Show success message
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
        button.classList.add('bg-green-600', 'hover:bg-green-700');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-600', 'hover:bg-green-700');
            button.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
        }, 2000);
    });
}

// Close modal when clicking outside
document.getElementById('reasonModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideReasonModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !document.getElementById('reasonModal').classList.contains('hidden')) {
        hideReasonModal();
    }
});
 });