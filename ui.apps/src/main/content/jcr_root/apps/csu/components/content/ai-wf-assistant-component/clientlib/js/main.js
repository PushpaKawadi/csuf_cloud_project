$(document).ready(function() {
    // Tab switching
    $('.tab').click(function() {
        const tabId = $(this).data('tab');

        // Update active tab
        $('.tab').removeClass('active');
        $(this).addClass('active');

        // Show corresponding content
        $('.tab-content').removeClass('active');
        $(`#${tabId}Content`).addClass('active');
    });

    // Chatbot functionality
    $('#chatForm').submit(function(e) {
        e.preventDefault();

        const input = $('#chatInput').val();
        if (!input) return;

        // Add user message
        addMessage(input, 'user');

        // Handle commands
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('show me all activity')) {
            $('.tab[data-tab="history"]').click();
        } else if (lowerInput.includes('show my pending tasks')) {
            $('.tab[data-tab="tasks"]').click();
        }

        // Clear input
        $('#chatInput').val('');
    });

    function addMessage(text, sender) {
        const messageHtml = `
            <div class="message ${sender}">
                ${text}
            </div>
        `;
        $('#chatMessages').append(messageHtml);

        // Scroll to bottom
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});