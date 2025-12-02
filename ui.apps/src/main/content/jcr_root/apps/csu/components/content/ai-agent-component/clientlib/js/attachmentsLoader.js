$(document).ready(function() {
    console.log("Start of attachmets logic");
    $.ajax({
        type: 'GET',
        url: "/bin/getLoggedInUserDetails",
        dataType: 'json',
        success: function(myresopnse) {
            var userValue = myresopnse.userId;
            if (userValue !== undefined) {
                $.ajax({
                    type: 'GET',
                    url: "/bin/getAttachmentsDataforAIAgent",
                    dataType: 'json',
                    data: {
                        userId: userValue
                    },
                    success: function(resp) {
                        if (sessionStorage.getItem('attachmentDataforAI')) {
                            sessionStorage.removeItem('attachmentDataforAI');
                        }
                        sessionStorage.setItem('attachmentDataforAI', JSON.stringify(resp));
                    },
                    error: function(resp, xhr, error, errorThrown) {
                        console.log("Error while retrieving the data");
                    }
                });

            } else {
                return null;
            }
        },
        error: function(error) {
            alert("error block=" + error);
        }
    });
});