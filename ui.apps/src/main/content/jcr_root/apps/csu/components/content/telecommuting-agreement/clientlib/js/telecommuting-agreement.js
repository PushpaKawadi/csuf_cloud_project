$(document).ready(function() {
    debugger;
  
    var workflowInstanceId;
    var userArray = [];
    var map = new Map();
    var assignee = "";
    var resflag = false;
    var loggedInUserId = "";


    $(".fa-user-friends").on('click', function(event) {
        debugger;
        workflowInstanceId = $(this).closest('tr').attr("data-id");
        assignee = $(this).closest('tr').find('td:eq(8)').text();
 $.ajax({

        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
		loggedInUserId = myresponse.userId;

        var dataUrl = "/bin/getDelegateUsersList?action=GET_DELEGATE_GROUP_MEMBERS_FOR_WF_REPORT&witemId=" + workflowInstanceId + "&assignee=" + encodeURIComponent(assignee)+ "&userId="+loggedInUserId;
        var data = {
            "url": (dataUrl)
        };
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: '/bin/getTaskDetailsFromProcessingInstance',
            data: data,
            //url: '/bin/getDelegateUsersList?action=GET_DELEGATE_GROUP_MEMBERS'+ '&assignee=' + assignee,
            //url: '/bin/getDelegateUsersList?action=GET_DELEGATE_GROUP_MEMBERS'+ '&id=' + workflowInstanceId,
            success: function(response) {
                userArray = response;

            if (userArray.length > 0) {
            getUserList(userArray);
            var selectedDelegatee = null;
            var selectedDelegateEmail = null;
            var selectedDelegateName = null;


                $(".cls-delegate-ok").click(function() {
                debugger;
                selectedDelegatee = $('.cls-dropdown-delegatee').val();
                //selectedDelegateEmail = map.get($('.cls-dropdown-delegatee').val());
                selectedDelegateEmail = "yjayaram@fullerton.edu";
                selectedDelegateeName = $('.cls-dropdown-delegatee').find("option:selected").text();
                //selectedDelegateeName = encodeURI(selectedDelegateeName);

                    if (selectedDelegatee) {
                        //delegateWorkItemOnProcessing(selectedDelegatee, workflowInstanceId)
                       // delegateWorkItem(selectedDelegatee, selectedDelegateEmail, selectedDelegateeName,workflowInstanceId);
                        delegateWorkItem($('.cls-dropdown-delegatee').val(), selectedDelegateEmail, selectedDelegateeName,workflowInstanceId);
                    } else {
                        delegateWorkItem($('.cls-dropdown-delegatee').val(), selectedDelegateEmail, selectedDelegateeName,workflowInstanceId);
                    }

            });

        } else {
            $("#modal-self-assign-action").modal("hide");
            $("#modal-select-delegatee-action").modal("hide");
            $("#modal-error-delegate-action").modal("show");
        }

            }
        });
        }
 });

        //getDelegatees(assignee, workflowInstanceId);








    });




    //Function defs
    function getDelegatees(assignee, workflowInstanceId) {
 $.ajax({

        type: 'GET',
        url: "/bin/getLoggedUserId",
        dataType: 'json',
        success: function(myresponse) {
		loggedInUserId = myresponse.userId;

        debugger;
        var dataUrl = "/bin/getDelegateUsersList?action=GET_DELEGATE_GROUP_MEMBERS&witemId=" + workflowInstanceId + encodeURIComponent("&assignee=" + (assignee)+ "&userId="+(loggedInUserId));
        var data = {
            "url": dataUrl
        };
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: '/bin/getTaskDetailsFromProcessingInstance',
            data: data,
            //url: '/bin/getDelegateUsersList?action=GET_DELEGATE_GROUP_MEMBERS'+ '&assignee=' + assignee,
            //url: '/bin/getDelegateUsersList?action=GET_DELEGATE_GROUP_MEMBERS'+ '&id=' + workflowInstanceId,
            success: function(response) {
                userArray = response;

            }
        });
            }
     });
    }

    function getUserList(delegatees) {
        debugger;
        $("#dropdown-delegatee").empty();
        if (delegatees && !jQuery.isEmptyObject(delegatees)) {

            $.each(delegatees, function() {
                $(".cls-dropdown-delegatee").append($("<option></option>").val(this['rid']).html(this['label']));
                map.set(this['rid'], this['label_email']);

            });
            // $('.cls-dropdown-delegatee').find("option:selected").remove();
            $("#modal-select-delegatee-action").modal("show");
        } else {
            //alert("The selected task cannot be delegated.");                        
            $("#modal-do-not-delegate-action").modal("show");
            //closeTaskDetails();                        
        }
    }

    function delegateWorkItem(user, email, name, workflowInstanceId) {
        debugger;
        // String[] arr = name.split(", ");
        var lName = name.split(", ")[0];
		var fName = name.split(", ")[1];
        if(fName !== "" && lName !== "" && fName !== undefined && lName !== undefined){
        if(fName.lastIndexOf(" ")!= -1){
		fName = fName.split(" ")[0];

        }
        name = fName.concat(","+lName);

        } else if(lName !== "" && lName !== undefined){
        lName = lName.split(" ")[0];
            name = lName;
        } else if(fName !== "" && fName !== undefined){
        fName = fName.split(" ")[0];
            name = fName;
        }




        var comment = $("#comment-dashboard-delegate-action").val();
        // var currentUserId = $(this).closest("tr").data("currentuserid");
        var delegateeText = "delegatee-";
        var commentText = "comment-";
        var subject = "Workitem-Delegation";
        var bccEmail = "yjayaram@fullerton.edu";



        //var workItemId = $(this).closest('tr').attr( "data-id" );
        var dataUrl = "/bin/delegateWorkitems" + "?wId=" + workflowInstanceId + "&user=" + user + "&email=" + email + "&name=" + name + "&subject=" + subject + "&bccEmail=" + bccEmail;
        //dataUrl = "/bin/delegateWorkitems?wId=/var/workflow/instances/server0/2022-05-11/telecommuting-agreement_165/workItems/node44_var_workflow_instances_server0_2022-05-11_telecommuting-agreement_165&user=jluzzi&email=swathi.kumari@thoughtfocus.com&name=Abbavathini";
        var data = {
            "url": dataUrl
        };

        $.ajax({
            type: "GET",
            url: '/bin/delegateWorkItemOnProcessingInstance',
            data: data,
            success: function(resp) {
                if (resp && resp == "success") {
                    $("#modal-self-assign-action").modal("hide");
                    $("#modal-select-delegatee-action").modal("hide");
                    location.reload();
                } else {
                    $("#modal-self-assign-action").modal("hide");
                    $("#modal-select-delegatee-action").modal("hide");
                    $("#modal-error-delegate-action").modal("show");
                    $('input.chb').not(this).prop('checked', false);
                    $("body.inbox").removeClass("action-show");
                }
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-self-assign-action").modal("hide");
                $("#modal-select-delegatee-action").modal("hide");
                $("#modal-error-delegate-action").modal("show");
                $('input.chb').not(this).prop('checked', false);
                $("body.inbox").removeClass("action-show");

            }
        });

    };

    function delegateToSelf(user) {
        debugger;
        var delegateeText = "delegatee-";

        var workItemId = $(this).closest("tr").data("workflowInstanceId");
        var data = {
            "wId": workItemId,
            "user": user
        };


        $.ajax({
            type: "POST",
            url: '/bin/delegateWorkitems',
            data: data,
            success: function(resp) {
                if (resp && resp == "success") {
                    $("#modal-self-assign-action").modal("hide");
                    $("#modal-select-delegatee-action").modal("hide");
                } else {
                    $("#modal-self-assign-action").modal("hide");
                    $("#modal-select-delegatee-action").modal("hide");
                    $("#modal-error-delegate-action").modal("show");
                }
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-self-assign-action").modal("hide");
                $("#modal-select-delegatee-action").modal("hide");
                $("#modal-error-delegate-action").modal("show");
            }

        });

    };

    //Delegate without email
    function delegateWorkItemOnProcessing(user, workItemId) {
        var comment = $("#comment-dashboard-delegate-action").val();
        // var currentUserId = $(this).closest("tr").data("currentuserid");
        var delegateeText = "delegatee-";
        var commentText = "comment-";


        var data = {
            "cmd": "delegate",
            ":status": "browser",
            "_charset_": "utf-8",
            "item": workItemId
        };

        data[(delegateeText + workItemId)] = user;
        if (comment) {
            data[(commentText + workItemId)] = comment;
        }

        $.ajax({
            type: "POST",
            url: '/bin/delegateTaskOnProcessingInstance',
            data: data,
            success: function(resp) {
                if (resp && resp == "success") {
                    $("#modal-self-assign-action").modal("hide");
                    $("#modal-select-delegatee-action").modal("hide");
                    location.reload();
                }
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-self-assign-action").modal("hide");
                $("#modal-select-delegatee-action").modal("hide");
                $("#modal-error-delegate-action").modal("show");
            }
        });
    };

});


$(document).ready(function () {
     var workflowInstanceId;

     // delete draft action     
     $(".icn-terminate-workflow").click(function () {
         $('#confirm-terminate-workflow-modal').appendTo("body").modal('show');
         var workitemid = $(this).closest("tr").data("id");
         workflowInstanceId = workitemid.split('/workItems')[0];
     });

     $(".modal-success-close").click(function () {
         $("#confirm-terminate-workflow-modal").modal("hide");
     });

     $("#terminate-workflow-cnf-btn").click(function () {
         console.log("terminating workflow having workflowInstanceId : " + workflowInstanceId);
         var requestURL = '/bin/workflowData?action=TERMINATE_WORKFLOW&workflowInstanceId=' + encodeURIComponent(workflowInstanceId);
         $.ajax({
             type: "GET",
             url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
             async: true,
             cache: false,
             dataType: "text",
             success: function (resp) {
                 if (resp && resp === "true") {
                     $("#confirm-terminate-workflow-modal").modal("hide");
                     location.reload();
                 }
                 else{
                     $("#modal-error-terminate-workflow").modal("show");
                 }
             },
             error: function (resp, xhr, error, errorThrown) {
                 $("#modal-error-terminate-workflow").modal("show");
             }
         });
     });
 });