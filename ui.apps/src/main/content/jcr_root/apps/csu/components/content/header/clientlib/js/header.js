function getuserDetailsforChatbot() {
    var elementVal = document.getElementById('navbarSupportedContent');
    var nameElement = elementVal.querySelector('.profile-text strong');
    var userIdElement = elementVal.querySelector('.profile-text.cls-current-user-id');
    var name = nameElement ? nameElement.textContent.trim() : null;
    var userId = userIdElement ? userIdElement.textContent.trim() : null;
    if ( userId != 'anonymous' && userId != null) {

        var userInfoVal = {
            displayName: name,
            userId: userId
        };
        var updatedobj = {
            isLoggedIn: true,
            userInfo: userInfoVal
        };
        var finalobj = {
            type: "user_details",
            data: updatedobj
        };
        return updatedobj;

    } else {
        var userInfoVal = {
            displayName: null,
            userId: null
        };
        var updatedobj = {
            isLoggedIn: false,
            userInfo: userInfoVal
        };
        var finalobj = {
            type: "user_details",
            data: updatedobj
        };
        return updatedobj;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchloggedinuserdata();
    // Toggle dropdown menu visibility
    document.getElementById('dropdownMenuButton').addEventListener('click', function(event) {
        event.preventDefault();
        var menu = document.getElementById('dropdownMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Filter dropdown items based on search input
    document.getElementById('HelpSectiondropdownSearch').addEventListener('input', function() {
        var filter = this.value.toLowerCase();
        var items = document.querySelectorAll('#dropdownMenu .nav-item');
        var icon = document.getElementById('HelpSectionsearchIcon');

        var anyMatch = false;

        items.forEach(function(item) {
            var link = item.querySelector('.nav-dropdown-link');
            var text = link.textContent || link.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = 'list-item';
                anyMatch = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Show or hide the icon based on whether there are any matches
        icon.style.display = anyMatch ? 'none' : 'block';
    });

    // Close dropdown menu if clicked outside
    document.addEventListener('click', function(event) {
        var menu = document.getElementById('dropdownMenu');
        var button = document.getElementById('dropdownMenuButton');
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });

    document.getElementById('questionLink-get-signed-items').addEventListener('click', function(event) {
        event.preventDefault();
        //alert('Signed Items!');
        var menu = document.getElementById('dropdownMenu');
        menu.style.display = 'none';
        triggerChatbotMessageRequest('1', 'ask_csuf_genai', 'Show me the forms I have completed');
    });

    document.getElementById('questionLink-get-my-submissions').addEventListener('click', function(event) {
        event.preventDefault();
        //alert('My submissions!');
        var menu = document.getElementById('dropdownMenu');
        menu.style.display = 'none';
        triggerChatbotMessageRequest('2', 'ask_csuf_genai', 'Show me the forms that I have initiated');
    });

    document.getElementById('questionLink-where-is-my-form').addEventListener('click', function(event) {
        event.preventDefault();
        //alert('My forms!');
        var menu = document.getElementById('dropdownMenu');
        menu.style.display = 'none';
        triggerChatbotMessageRequest('3', 'ask_csuf_genai', 'Where is my form');
    });

    document.getElementById('HelpSectionsearchIcon').addEventListener('click', function() {
        var inputValue = document.getElementById('HelpSectiondropdownSearch').value;
        //alert('Inputed Value: ' + inputValue);
        var menu = document.getElementById('dropdownMenu');
        menu.style.display = 'none';
        triggerChatbotMessageRequest('4', 'ask_csuf_genai', inputValue);
    });
});


function triggerChatbotMessageRequest(idVal, cbVal, questionVal){
    //alert("Id = "+idVal+", Cb = "+cbVal+", Question = "+questionVal);
    document.getElementById('chatbot-divContainer').style.display = 'block';
    YanaChatbotClient.sendMessageToChildFrame({
            type: 'yana-question',
            data: {
                cb: cbVal,
                id: idVal,
                question: questionVal
            }
        });
}

function fetchloggedinuserdata(){
    $.ajax({

		type: 'GET',

		url: "/bin/getLoggedUserId",
		dataType: 'json',
		success: function(response) {

			var userValue = response.userId;
            sessionStorage.setItem("TestUserid", userValue);

        }
    });
}