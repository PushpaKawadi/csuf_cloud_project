$(document).ready(function() {
    debugger;
    var workflowInstanceId;
    var map = new Map();
    var userArray = [];
    getDelegatees();

    // delete draft action     
   /* $(".icn-terminate-workflow").click(function() {
        $('#confirm-terminate-workflow-modal').appendTo("body").modal('show');
        workflowInstanceId = $(this).closest("tr").data("id");
    });

    $(".modal-success-close").click(function() {
        $("#confirm-terminate-workflow-modal").modal("hide");
    });*/

    // $("#dropdown-delegatee").click(function() {
    //  debugger;
    //// $('#dropdown-delegatee').classList.toggle("show");
    // }

    $("#terminate-workflow-cnf-btn").click(function() {
        console.log("terminating workflow having workflowInstanceId : " + workflowInstanceId);
        var requestURL = '/bin/workflowData?action=TERMINATE_WORKFLOW&workflowInstanceId=' + encodeURIComponent(workflowInstanceId);
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


    // Delegate
    var selectedDelegatee = null;
    var selectedDelegateEmail = null;
    var selectedDelegateName = null;
    $('.cls-dropdown-delegatee').change(function() {
        selectedDelegatee = $(this).val();
        selectedDelegateEmail = map.get($(this).val());
        selectedDelegateEmail = "chaitanya.sai@thoughtfocus.com";
        selectedDelegateeName = $('.cls-dropdown-delegatee').find("option:selected").text();
    });

    $('.cls-btn-delegate-task').click(function() {
        getUserList(userArray);


        $(".cls-delegate-ok").click(function() {
            debugger;
            if (selectedDelegatee) {
                delegateWorkItem(selectedDelegatee, selectedDelegateEmail, selectedDelegateeName);
            } else {
                delegateWorkItem($('.cls-dropdown-delegatee').val(), selectedDelegateEmail, selectedDelegateeName);
            }
        });



    });

    function getDelegatees() {
	var abc = window.location.origin + "/bin/fullertonProxy";
	
        debugger;
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //url: '/bin/getDelegateUsersList?action=DELEGATE_USER_DATA',
			url: window.location.origin + "/bin/fullertonProxy",
			 data: {
					path: "getDelegateUsersList",
					action: "DELEGATE_USER_DATA"
                    },
            success: function(response) {
				//alert("Success");
                userArray = response;
                delegatees = response;
                /* $(".cls-dropdown-delegatee").empty();
                 if (delegatees && !jQuery.isEmptyObject(delegatees)) {

                     $.each(delegatees, function() {
                         $(".cls-dropdown-delegatee").append($("<option></option>").val(this['rid']).html(this['label']));
                         map.set(this['rid'], this['label_email']);
                         userArray.push(this['label']);
                     });
                     $("#modal-select-delegatee-action").modal("show");
                 } else {
                     //alert("The selected task cannot be delegated.");                        
                     $("#modal-do-not-delegate-action").modal("show");
                     //closeTaskDetails();                        
                 }*/
            }
        });
    }

    function getUserList(delegatees) {
        debugger;
        $(".cls-dropdown-delegatee").empty();
        if (delegatees && !jQuery.isEmptyObject(delegatees)) {

            $.each(delegatees, function() {
                $(".cls-dropdown-delegatee").append($("<option></option>").val(this['rid']).html(this['label']));
                map.set(this['rid'], this['label_email']);
                userArray.push(this['label']);
            });
            $("#modal-select-delegatee-action").modal("show");
        } else {
            //alert("The selected task cannot be delegated.");                        
            $("#modal-do-not-delegate-action").modal("show");
            //closeTaskDetails();                        
        }
    }

    function delegateWorkItem(user, email, name) {
        debugger;
       // String[] arr = name.split(", ");
		var lName = name.split(", ")[0];
		var fName = name.split(", ")[1];
        if(fName.lastIndexOf(" ")!= -1){
		fName = fName.split(" ")[0];
        }
        name = fName.concat(","+lName);
        var comment = $("#comment-dashboard-delegate-action").val();
        currentUserId = $(".chb:checked").closest(".clickable-row").data("currentuserid");
        var delegateeText = "delegatee-";
        var commentText = "comment-";
        var subject = "Workitem-Delegation";
        var bccEmail = "chaitanya.sai@thoughtfocus.com";

        for (i = 0; i < $(".chb:checked").length; i++) {
            var currentRow = $(".chb:checked")[i].closest("tr");
            var workItemId = currentRow.lastElementChild.textContent;
            var dataUrl = "/bin/delegateWorkitems" + "?wId=" + workItemId + "&user=" + user + "&email=" + email + "&name=" + name+ "&subject="+subject+"&bccEmail="+bccEmail;
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
                        window.location = '/content/csu/us/en/workitem-delegation.html?wcmmode=disabled';
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
        }
    };

    function delegateToSelf(user) {
        debugger;
        var delegateeText = "delegatee-";
        for (i = 0; i < $(".chb:checked").length; i++) {
            var currentRow = $(".chb:checked")[i].closest("tr");
            var workItemId = currentRow.lastElementChild.textContent;
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
        }
    };

    $('input.chb').on('change', function() {
        debugger;
        var cb = $(this).prop('checked');
        if (cb && cb == true) {
            $("body.inbox").addClass("action-show");
        } else {
            // $('.action-menu-closet').trigger("click");
            if ($('input.chb:checked').size() == 0) {
                $("body.inbox").removeClass("action-show");
            }
        }

    });

    $('#button-close').click(function() {
        debugger;
        $("body.inbox").removeClass("action-show");
        for (i = 0; i < $('input.chb:checked').size(); i++) {
            $("input.chb").prop("checked", false);
        }
    });



    //select2
    /*$('#dropdown-delegatee').select2({
        dropdownParent: $(".modal-body"), 
        multiple: false, 
        closeOnSelect: true, 
        minimumInputLength: 0,
        data: map
    });*/

    $("#dropdown-delegatee").select2({
        dropdownParent: $(".modal-body-dropdown"),
        multiple: false
    });


});