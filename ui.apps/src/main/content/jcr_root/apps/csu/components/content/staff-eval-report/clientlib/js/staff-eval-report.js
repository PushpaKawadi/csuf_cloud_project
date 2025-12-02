$(document).ready(function() {
    debugger;
    $(".fa-trash").on('click', function(event) {
        var workflowInstanceId = $(this).closest('tr').attr("data-id");
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedUserId",
            dataType: 'json',
            success: function(myresponse) {
                var loggedInUserId = myresponse.userId;
                var dataUrl = "/bin/getDelegateUsersList?action=GET_AUTHORIZED_USERS_FOR_TERMINATION&witemId=" + workflowInstanceId + "&userId=" + loggedInUserId;
                var data = {
                    "url": (dataUrl)
                };
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: '/bin/getTaskDetailsFromProcessingInstance',
                    data: data,
                    success: function(response) {
                        if (response.length >= 1) {
                            //alert("success");
                            $('#confirm-terminate-workflow-modal').appendTo("body").modal('show');
                            wId = workflowInstanceId.split('/workItems')[0];

                            $(".modal-success-close").click(function() {
                                $("#confirm-terminate-workflow-modal").modal("hide");
                            });
                            $("#terminate-workflow-cnf-btn").click(function() {
                                console.log("terminating workflow having workflowInstanceId : " + wId);
                                var requestURL = '/bin/workflowData?action=TERMINATE_WORKFLOW&workflowInstanceId=' + encodeURIComponent(wId);
                                $.ajax({
                                    type: "GET",
                                    url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
                                    async: true,
                                    cache: false,
                                    dataType: "text",
                                    success: function(resp) {
                                        if (resp && resp === "true") {
                                            $("#confirm-terminate-workflow-modal").modal("hide");
                                            location.reload();
                                        } else {
                                            $("#modal-error-terminate-workflow").modal("show");
                                        }
                                    },
                                    error: function(resp, xhr, error, errorThrown) {
                                        $("#modal-error-terminate-workflow").modal("show");
                                    }
                                });
                            });

                        } else {
                            //alert("access denied");
                            $("#modal-error-terminate-action").modal("show");
                        }
                    },
               error: function(error1) {
                console.log("error block=" + error1);
                $("#modal-error-terminate-workflow").modal("show");
            }
                });
            },
            error: function(error) {
                console.log("error block=" + error);
                $("#modal-error-terminate-workflow").modal("show");
            }
        });

    });
});