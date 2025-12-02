$(document).ready(function() {
    loadData();
    let extractedObj = getuserDetailsforChatbot();
    professorInfo = {
        "PROFESSOR_NAME": extractedObj.userInfo.displayName,
        "PROFESSOR_EMAIL": extractedObj.userInfo.email,
        "PROFESSOR_ID": extractedObj.userInfo.userId
    }
});
/*function getuserDetailsforChatbot() {
    return {
        "isLoggedIn": true,
        "userInfo": {
            "displayName": "Vadlakunta, Naga",
            "userId": "nvadlakunta",
            "email": "chaitanya.sai@thoughtfocus.com"
        }
    }
}*/
function loadData() {
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

function getuserDetailsforChatbot() {
    var elementVal = document.getElementById('navbarSupportedContent');
    var nameElement = elementVal.querySelector('.profile-text strong');
    var userIdElement = elementVal.querySelector('.profile-text.cls-current-user-id');
    var name = nameElement ? nameElement.textContent.trim() : null;
    var userId = userIdElement ? userIdElement.textContent.trim() : null;
    if ( userId != 'anonymous' && userId != null) {

        var userInfoVal = {
            displayName: name,
            userId: userId,
            email: "yjayaram@fullerton.edu"
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
            userId: null,
            email: "yjayaram@fullerton.edu"
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