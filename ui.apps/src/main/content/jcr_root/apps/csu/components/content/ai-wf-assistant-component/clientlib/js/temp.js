$(document).ready(function() {
    // Add active class to tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                document.querySelectorAll('.tab').forEach(t => {
                    t.classList.remove('active', 'bg-indigo-100', 'text-indigo-700');
                    t.classList.add('text-gray-600', 'hover:bg-gray-100');
                });
                
                // Add active class to clicked tab
                tab.classList.add('active', 'bg-indigo-100', 'text-indigo-700');
                tab.classList.remove('text-gray-600', 'hover:bg-gray-100');
                
                // Hide all content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                    content.classList.remove('active');
                });
                
                // Show selected content
                const contentId = tab.getAttribute('data-tab') + 'Content';
                document.getElementById(contentId).classList.remove('hidden');
                document.getElementById(contentId).classList.add('active');
            });
        });

        $(document).ready(function() {
            function refreshTables() {
                // Refresh tasks table
                $.get('tasks_table.php', function(data) {
                    $('#tasksContent').html(data);
                });

                // Refresh history table
                $.get('history_table.php', function(data) {
                    $('#historyContent').html(data);
                });
            }

            $('#chatForm').on('submit', function(e) {
                e.preventDefault();
                
                const userInput = $('#chatInput').val().trim();
                const sessionId = $('#conversationId').val();

                if (!userInput) return;

                // Add user message to chat
                $('#chatMessages').append(`
                    <div class="flex justify-end mb-2">
                        <div class="bg-indigo-100 text-gray-800 rounded-2xl py-2 px-4 max-w-[80%] shadow-sm">
                            <p class="text-sm">${escapeHtml(userInput)}</p>
                        </div>
                    </div>
                `);

                // Clear input
                $('#chatInput').val('');
                alert(userInput);
                // Show typing indicator
                $('#chatMessages').append(`
                    <div class="flex mb-2 typing-indicator">
                        <div class="bg-gray-100 rounded-2xl py-2 px-4 shadow-sm">
                            <div class="typing-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                `);

                // Scroll to bottom
                $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);

                // Send to API
                alert("Before ajax");
                $.ajax({
                    url: 'api/chat.php',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({ "conversationId": sessionId, "message": userInput }),
                    success: function(response) { alert("This ajax is not working");
                        console.log(response);
                        alert(response);
                        alert(JSON.stringify(response));
                        // Remove typing indicator
                        $('.typing-indicator').remove();
                        alert(escapeHtml(response.RESPONSE));
                        // Add AI response
                        $('#chatMessages').append(`
                            <div class="flex mb-2">
                                <div class="bg-white border border-gray-200 text-gray-800 rounded-2xl py-2 px-4 max-w-[80%] shadow-sm">
                                    <p class="text-sm leading-relaxed">${escapeHtml(response.RESPONSE)}</p>
                                </div>
                            </div>
                        `);

                        // If data was updated (approval/decline happened), refresh tables
                        if (response.ACTION) { alert("Hello");
                            refreshTables();
                        }

                        // Handle tab switching if needed
                        if (response.TAB) {
                            $(`.tab[data-tab="${response.tab}"]`).click();
                        }
                        if(response.CONVERSATION_ID) {
                            $('#conversationId').val(response.CONVERSATION_ID);
                        }
                        // Scroll to bottom
                        $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);
                    },
                    error: function() { alert("adsfsadf");
                        // Remove typing indicator
                        $('.typing-indicator').remove();

                        // Show error message
                        $('#chatMessages').append(`
                            <div class="flex mb-2">
                                <div class="bg-red-50 border border-red-200 text-red-800 rounded-2xl py-2 px-4 max-w-[80%] shadow-sm">
                                    <p class="text-sm">Sorry, I encountered an error. Please try again.</p>
                                </div>
                            </div>
                        `);

                        // Scroll to bottom
                        $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);
                    }
                });
            });

            // Helper function to escape HTML
            function escapeHtml(unsafe) {
                return unsafe
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }
        });
 });