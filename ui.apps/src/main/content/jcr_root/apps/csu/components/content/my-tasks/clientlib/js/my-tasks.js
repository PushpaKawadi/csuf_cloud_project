var inboxUILink = "/content/csu/us/en/task-details.html",
    attachmentsList = [],
    workItemId, formPath, selectedTaskURL, isReadOnlyForm, formtype, documentReferrer = document.referrer,
    selectedFormRoute, guideBridge = null,
    xmlData = null,
    isCurrentUserAdmin, isViewTaskDetailsAllowed, isAssigneeAGroup, currentUserId, routesData, showSubmit, showSave, showReset, lastActionTaken, lastActionComment;

$(document).ready(function() {
    debugger;
    const REST_ATTACHMENT_SERVLET = "/libs/fd/dashboard/servlets/attachmenthandler.json";
    const REST_AFSUBMISSION_SERVLET = "/libs/fd/dashboard/servlets/afsubmission.json?operation=";
    var files = [];
    $('.mytask-sliding-button').click(function() {
        $(this).find('i').toggleClass('fas fa-angle-double-left fas fa-angle-double-right')
    });

    // Task Menu Action Buttons trigger logic
    var saveButton = document.querySelector(".cls-action-menu-save");
    if (saveButton != null) {
        saveButton.addEventListener("click", onSaveButtonClick);
    }

    $(".btn-task-details-delegate").click(function() {
        delegateToSelf(localStorage.getItem('currentUserId'));
    });
    $(".btn-task-details-delegate-cancel").click(function() {
        $("#modal-self-assign-action").modal("hide");
        //closeTaskDetails();         
    });

    var submitButton = document.querySelector(".cls-action-menu-submit");
    var confirmButton = document.querySelector(".cls-submit-confirm");

    $(".cls-action-menu-submit").click(function() {
        if (submitButton != null) {
            selectedFormRoute = $(this).data('type');
            $('.action-selected').text(selectedFormRoute);
            $("#hiddenselectedaction").val(selectedFormRoute);
            //console.log("hiddenselectedaction : " + $("#hiddenselectedaction").val());
            //console.log("selectedFormRoute: " + selectedFormRoute);
            updateLocalStorage(window.localStorageVariableMap);
            $("#modal-confirm-submit-action").modal("show");
            confirmButton.addEventListener("click", onSubmitButtonClick);
        }
    });

    $(".btn-submit-success-ok").click(function() {
        window.location = '/content/csu/us/en/my-tasks.html?wcmmode=disabled';
    });

    $(".btn-close-task-details").click(function() {
        closeTaskDetails();
    });

    var resetButton = document.querySelector("#reset-action");
    if (resetButton != null) {
        resetButton.addEventListener("click", onResetButtonClick);
    }

    var delegateButton = document.querySelector("#delegate-action");
    if (delegateButton != null) {
        delegateButton.addEventListener("click", onDelegateButtonClick);
    }

    // task-details iframe
    $("#frame").on("click", function() {
        $("task-iframe").insertBefore(".push");
    });

    // modal hide and show
    $("#exampleModal19").on('show.bs.modal', function(e) {
        $("#exampleModal").modal("hide");
    });

    // sidebar collapse and expand
    (function($) {

        "use strict";

        var fullHeight = function() {

            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function() {
                $('.js-fullheight').css('height', $(window).height());
            });

        };
        fullHeight();

        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
        });

        $('#sidebarCollapse1').on('click', function() {
            $('#sidebar').toggleClass('active');
        });

    })(jQuery);

    // Show/hide grid and inbox table
    $("#btn-display-grid").click(function() {
        $("#div-inbox-grid").removeClass("hide-inbox-panel");
        $("#btn-display-grid").addClass("active");

        $("#div-inbox-table").addClass("hide-inbox-panel");
        $("#btn-display-table").removeClass("active");
    });

    $("#btn-display-table").click(function() {
        $("#div-inbox-grid").addClass("hide-inbox-panel");
        $("#btn-display-grid").removeClass("active");

        $("#div-inbox-table").removeClass("hide-inbox-panel");
        $("#btn-display-table").addClass("active");
        $(".action-menu-closet").trigger("click");
    });

    // On Click select particular grid in mytask grid view
    $('div.card').click(function() {
        $('div.card').removeClass('active');
        $(this).addClass('active');
    });

    $('#slide-submenu').on('click', function() {
        $(this).closest('.list-group').fadeOut('slide', function() {
            $('.mini-submenu').fadeIn();
        });

    });

    $('.mini-submenu').on('click', function() {
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
    });

    // To clear the filters on click of clear all button
    function uncheckAll() {
        $("input[type='checkbox']:checked").prop("checked", false);
        $('#workflowDropdown').val('');
    }

    $('.filter-clearall').on('click', uncheckAll);

    // on click of close button the header part fields will close
    $(".btn.close").on("click", function(event) {
        $(this).parent().fadeOut();
        event.preventDefault();
    });

    // on selecting checkbox the workitem open menu displays
    $(".chb").prop('checked', false);
    $("#btn-delegate-my-tasks").removeClass("btn-hide-custom");

    /*$(".chb").click(function(){
        $(".chb").prop('checked',false);
        $(this).prop('checked',true);      
        $("body.inbox").addClass("action-show");
        processCheckedTaskRow();
    }); */

    /*$('#inbox-dataTable').on('change', 'tbody input.chb', function () {         
        console.log('delegated change event'); // it is never shown
        var cb = $(this).prop('checked');
        console.log(cb);
        var firstSelectedValue = $(this).prop('value');
        console.log(firstSelectedValue);
        $("body.inbox").addClass("action-show");
        processCheckedTaskRow();
    });*/

    $('input.chb').on('change', function() {
        $('input.chb').not(this).prop('checked', false);
        var cb = $(this).prop('checked');
        if (cb && cb == true) {
            $("body.inbox").addClass("action-show");
            processCheckedTaskRow();
        } else {
            $('.action-menu-closet').trigger("click");
        }
    });

    // open task details page on click of any row of inbox table on my-tasks page
    /*$('.clickable-row').click(function(event) {
        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
            $('#open-details').trigger('click');           
        }
    });  */
    $('.clickable-row').click(function(event) {
        if (event.target.type !== 'checkbox') {
            var isBoxAlreadyChecked = $(this).find(".chb:checked").length;
            if (isBoxAlreadyChecked == 0) {
                $(':checkbox', this).trigger('click');
                $('#open-details').trigger('click');
            } else {
                $('#open-details').trigger('click');
            }
        }
    });

    function processCheckedTaskRow() {
        workItemId = $(".chb:checked").closest(".clickable-row").data("id");
        isCurrentUserAdmin = $(".chb:checked").closest(".clickable-row").data("iscurrentuseradmin");
        isViewTaskDetailsAllowed = $(".chb:checked").closest(".clickable-row").data("isviewtaskdetailsallowed");
        isAssigneeAGroup = $(".chb:checked").closest(".clickable-row").data("isassigneeagroup");
        currentUserId = $(".chb:checked").closest(".clickable-row").data("currentuserid");
        routesData = $(".chb:checked").closest(".clickable-row").data("routesdata");
        showSubmit = $(".chb:checked").closest(".clickable-row").data("showsubmit");
        showSave = $(".chb:checked").closest(".clickable-row").data("showsave");
        showReset = $(".chb:checked").closest(".clickable-row").data("showreset");
        //lastActionTaken = $(".chb:checked").closest(".clickable-row").data("lastactiontaken");
        //lastActionComment = $(".chb:checked").closest(".clickable-row").data("lastactioncomment");        
        console.log(workItemId);
		console.log(isCurrentUserAdmin);

        var currentRow = $(".chb:checked").closest("tr");
        var taskTitle = currentRow.find("td:eq(1)").text(); // get current row 2nd TD        
        var description = currentRow.find("td:eq(3)").text(); // get current row 4th TD
        var taskAssignee = currentRow.find("td:eq(4)").text();
        var workflow = currentRow.find("td:eq(5)").text();
        var status = currentRow.find("td:eq(6)").text();
        var startDate = currentRow.find("td:eq(7)").text();

        localStorage.setItem('workItemId', workItemId);
        localStorage.setItem('isCurrentUserAdmin', isCurrentUserAdmin);
        localStorage.setItem('isViewTaskDetailsAllowed', isViewTaskDetailsAllowed);
        localStorage.setItem('isAssigneeAGroup', isAssigneeAGroup);
        localStorage.setItem('currentUserId', currentUserId);
        localStorage.setItem('routesData', routesData);
        localStorage.setItem('showSubmit', showSubmit);
        localStorage.setItem('showSave', showSave);
        localStorage.setItem('showReset', showReset);
        //localStorage.setItem('lastActionTaken', lastActionTaken);
        //localStorage.setItem('lastActionComment', lastActionComment);
        localStorage.setItem('taskTitle', taskTitle);
        localStorage.setItem('description', description);
        localStorage.setItem('taskAssignee', taskAssignee);
        localStorage.setItem('workflow', workflow);
        localStorage.setItem('status', status);
        localStorage.setItem('startDate', startDate);



        if (!isCurrentUserAdmin) {
            $("#btn-delegate-my-tasks").addClass("btn-hide-custom");
        }

        if (workItemId) {
            $.ajax({
                type: "GET",
                contentType: "application/text; charset=utf-8",
                url: '/bin/manageTask?action=TASK_URL&workItemId=' + encodeURIComponent(workItemId),
                async: false,
                cache: false,
                dataType: "text",
                success: function(taskURL) {
                    if (taskURL) {
                        //console.log("taskURL : " + taskURL);
                        selectedTaskURL = taskURL;
                        localStorage.setItem('selectedTaskURL', selectedTaskURL);
                    }
                }
            });
        }
    }

    $('#open-details').click(function() {
        if (!isViewTaskDetailsAllowed) {
            // show access-not-allowed screen
            window.location = '/content/csu/us/en/access-denied.html?wcmmode=disabled';
        } else {
			//alert("else Cond");
			//alert(isViewTaskDetailsAllowed);

            window.location = '/content/csu/us/en/task-details.html?wcmmode=disabled';
        }
    });
    var selectedDelegatee = null;
    $('.cls-dropdown-delegatee').change(function() {
        selectedDelegatee = $(this).val();
    });

    $('.cls-btn-delegate-task').click(function() {
        getDelegatees();
        $(".cls-delegate-ok").click(function() {
            if (selectedDelegatee) {
                delegateWorkItem(selectedDelegatee);
            } else {
                delegateWorkItem($('.cls-dropdown-delegatee').val());
            }
        });
    });

    function getDelegatees() {
        var requestURL = localStorage.getItem('workItemId') + '.delegatees.json';
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
            success: function(response) {
                var delegatees = response.delegatees;
                $(".cls-dropdown-delegatee").empty();
                if (delegatees && !jQuery.isEmptyObject(delegatees)) {
                    $.each(delegatees, function() {
                        $(".cls-dropdown-delegatee").append($("<option></option>").val(this['rid']).html(this['label']));
                    });
                    $("#modal-select-delegatee-action").modal("show");
                } else {
                    //alert("The selected task cannot be delegated.");                        
                    $("#modal-do-not-delegate-action").modal("show");
                    //closeTaskDetails();                        
                }
            }
        });
    }

    function delegateWorkItem(user) {
        var comment = $("#comment-dashboard-delegate-action").val();
        var delegateeText = "delegatee-";
        var commentText = "comment-";
        workItemId = localStorage.getItem('workItemId');

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
                    window.location = '/content/csu/us/en/my-tasks.html?wcmmode=disabled';
                }
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-self-assign-action").modal("hide");
                $("#modal-select-delegatee-action").modal("hide");
                $("#modal-error-delegate-action").modal("show");
            }
        });
    };

    function delegateToSelf(user) {
        var delegateeText = "delegatee-";
        workItemId = localStorage.getItem('workItemId');

        var data = {
            "cmd": "delegate",
            ":status": "browser",
            "_charset_": "utf-8",
            "item": workItemId
        };
        data[(delegateeText + workItemId)] = user;

        $.ajax({
            type: "POST",
            url: '/bin/delegateTaskOnProcessingInstance',
            data: data,
            success: function(resp) {
                if (resp && resp == "success") {
                    $("#modal-self-assign-action").modal("hide");
                    $("#modal-select-delegatee-action").modal("hide");
                }
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-self-assign-action").modal("hide");
                $("#modal-select-delegatee-action").modal("hide");
                $("#modal-error-delegate-action").modal("show");
            }
        });
    };

    // In my-tasks screen view the selected grid is highlighted and click of close button it will deselect
    $('.action-menu-closet').click(function() {
        closeTaskDetails();
    })

    function closeTaskDetails() {
        localStorage.removeItem('selectedTaskURL');
        localStorage.removeItem('workItemId');
        localStorage.removeItem('isCurrentUserAdmin');
        localStorage.removeItem('isViewTaskDetailsAllowed');
        localStorage.removeItem('isAssigneeAGroup');
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('routesData');
        localStorage.removeItem('showSubmit');
        localStorage.removeItem('showSave');
        localStorage.removeItem('showReset');
        //localStorage.removeItem('lastActionTaken');
        //localStorage.removeItem('lastActionComment');
        localStorage.removeItem('taskTitle');
        localStorage.removeItem('description');
        localStorage.removeItem('taskAssignee');
        localStorage.removeItem('workflow');
        localStorage.removeItem('status');
        localStorage.removeItem('startDate');

        selectedTaskURL = null;
        workItemId = null;
        isCurrentUserAdmin = null;
        isViewTaskDetailsAllowed = null;
        isAssigneeAGroup = null;
        currentUserId = null;
        routesData = null;
        showSubmit = null;
        showSave = null;
        showReset = null;
        //lastActionTaken = null;
        //lastActionComment = null;

        $('.inbox').removeClass('action-show');
        $('div.card').removeClass('active');
        $(".chb").prop('checked', false);
        window.location = '/content/csu/us/en/my-tasks.html?wcmmode=disabled';
    };

    var frameURL = localStorage.getItem('selectedTaskURL');
    $('#task-iframe').attr('src', frameURL);

    $('.details .action-menu-closet').click(function() {
        localStorage.removeItem('selectedTaskURL');
        window.history.back();
    })

    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    // Select and make active of particular  nav-tabs
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });

    $(".toggle-back").click(function() {
        $(".details-left").toggleClass("hide");
        $(".details-right").toggleClass("col-lg-10 col-lg-12");
        $(".details-right").toggleClass("col-md-9 col-md-12");
    });

    $(".filter").click(function() {
        $(".left-filter").toggleClass("hide-filter");
    });

    let filterObj = {
        taskType: [],
        taskStatus: [],
        taskStartDate: "",
        taskEndDate: "",
        searchString: "",
    };

    $("#type input:checkbox[name=taskType]").change(function() {
        var checkedTypes = $("#type input:checkbox[name=taskType]:checked").map(
            function() {
                return $(this).val();
            }
        );
        filterObj.taskType = checkedTypes.get();
        console.log(filterObj);

        // Make this ajax call in all the onchange events for filter

        $.post(
            "http://example.com/",
            filterObj,
            function(response) {
                //alert("success");
                $("#example").html(response.amount);
            }
        );
    });

    $("#taskStatus input:checkbox[name=taskStatus]").change(function() {
        var checkedTaskStatus = $(
            "#taskStatus input:checkbox[name=taskStatus]:checked"
        ).map(function() {
            return $(this).val();
        });
        filterObj.taskStatus = checkedTaskStatus.get();
        console.log(filterObj);
        // you can Make this ajax call here
    });

    $("#startDate input[name=taskStartDateAfter]").click(function() {
        //alert("changing");
        //alert($(this).val());
    });

    $("#taskSearch").change(function() {
        filterObj.searchString = $(this).val();
        console.log(filterObj);
        // you can Make this ajax call here
    });

    $("#startDate input[name=taskStartDate]").change(function() {
        filterObj.taskStartDate = $("input[name=taskStartDate]:checked").val();

        console.log(filterObj);

        // you can Make this ajax call here

    });

    var selectedWorkflowModel;

    $(".workflow-model .dropdown-item").on("click", function() {
        selectedWorkflowModel = $(this).val();
        $("#workflowDropdown").text(selectedWorkflowModel);
        //alert(selectedWorkflowModel);

        // $('#workflowDropdown').val('');

        // $('#workflowDropdown').val('someDefaultValue');

        // $('#workflowDropdown').attr('selected','selected');


        if (selectedWorkflowModel == "taskType") {
            // Show or hide any filter
        } else if (selectedWorkflowModel == "taskStatus") {
            // Show or hide any filter
        } else {
            // Show or hide any filter
        }
    });

    // Task Action Menu Button Functions
    function onSaveButtonClick(e) {
        //updateAttachments();
        //debugger;       
        var fileAttachmentsList = [],
            node,
            fileAttachmentMap = {};
        var requestURL = '/bin/getInboxItemDetails?action=STEP_DETAILS&workItemId=' + encodeURIComponent(localStorage.getItem('workItemId'));
        $.ajax({
            type: "GET",
            contentType: "application/text; charset=utf-8",
            url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
            async: false,
            cache: false,
            dataType: "text",
            success: function(stepDetails) {
                if (stepDetails) {
                    stepDetails = JSON.parse(stepDetails);
                    //console.log("stepDetails : " + stepDetails);
                    formPath = stepDetails.formPath;
                    isReadOnlyForm = stepDetails.isreadonlyform;
                    formtype = stepDetails.formtype;
                }
            }
        });

        /*if ("AF" === formtype) {
            //debugger;
            // Add a listener to listen to guide brige initialization
            window.removeEventListener("bridgeInitializeStart", connectGuideBridge);
            window.addEventListener("bridgeInitializeStart", connectGuideBridge);            
        }*/

        var options = {
            workItemId: localStorage.getItem('workItemId'),
            formPath: formPath,
            comment: $("#dashboard-comment").val(),
            attachments: JSON.stringify(attachmentsList),
            _charset_: "UTF-8"
        };

        var successHandler = function(resp) {
                console.log("save response : " + resp);
                if (resp && resp == "success") {
                    saveWorkItemData();
                }
            },
            errorHandler = function(resp, xhr, error, errorThrown) {
                $("#modal-error-save-action").modal("show");
            };

        if (isReadOnlyForm) {
            saveAsDraftAction(options, successHandler, errorHandler);
        } else {
            guideBridge = $("#task-iframe")[0].contentWindow.guideBridge;
            if (guideBridge && guideBridge.isConnected() && guideBridge.validate()) {
                guideBridge.getData({
                    success: function(result) {
                        /*
                         * file attachment map will be used for restoring the attachment for xml based adaptive forms
                         * as this information is not available in dataXML,sending it separately
                         */
                        debugger;
                        fileAttachmentMap = guideBridge.getFileAttachmentMap();
                        xmlData = result.data;
                        options.dataXML = xmlData;
                        //console.log("dataXML : " + result.data);
                        options.fileAttachmentMap = JSON.stringify(fileAttachmentMap);
                        saveAsDraftAction(options, successHandler, errorHandler);
                    },
                    error: function(result) {
                        var msg = result.getNextMessage();
                        if (msg != null) {
                            $("#modal-error-save-action").modal("show");
                        }
                    },
                    fileUploadPath: REST_ATTACHMENT_SERVLET + "?operation=saveAsDraft&workitemId=" + encodeURIComponent(localStorage.getItem('workItemId')),
                    excludeFormState: false
                });
            }
        }
    }

    function saveWorkItemData() {
        $.ajax({
            type: "POST",
            url: '/bin/manageTask?action=UPDATE_TASK_DATA',
            data: {
                taskId: localStorage.getItem('workItemId'),
                data: xmlData
            },
            async: false,
            success: function(resp) {
                $("#modal-success-save-action").modal("show");
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-error-save-action").modal("show");
            }
        });
    };

    var saveAsDraftAction = function(options, successHandler, errorHandler) {
        if (options != null) {
            $.ajax({
                type: "POST",
                url: "/bin/submitTaskToProcessingInstance?operation=save",
                data: options,
                async: false,
                success: successHandler,
                error: errorHandler
            });
        }
    };

    function onSubmitButtonClick(e) {
        //updateAttachments();
        debugger;

        var fileAttachmentsList = [],
            node,
            fileAttachmentMap = {};
        var requestURL = '/bin/getInboxItemDetails?action=STEP_DETAILS&workItemId=' + encodeURIComponent(localStorage.getItem('workItemId'));
        $.ajax({
            type: "GET",
            contentType: "application/text; charset=utf-8",
            url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
            async: false,
            cache: false,
            dataType: "text",
            success: function(stepDetails) {
                if (stepDetails) {
                    stepDetails = JSON.parse(stepDetails);
                    console.log("stepDetails : " + stepDetails);
                    formPath = stepDetails.formPath;
                    //console.log("formPath : " + formPath);
                    isReadOnlyForm = stepDetails.isreadonlyform;
                    formtype = stepDetails.formtype;
                }
            }
        });

        /*if ("AF" === formtype) {
            //debugger;
            // Add a listener to listen to guide brige initialization
            window.removeEventListener("bridgeInitializeStart", connectGuideBridge);
            window.addEventListener("bridgeInitializeStart", connectGuideBridge);            
        }*/

        debugger;
        var options = {
            workItemId: localStorage.getItem('workItemId'),
            formPath: formPath,
            comment: $("#comment-dashboard-task-submit").val(),
            attachments: JSON.stringify(attachmentsList),
            formRoute: selectedFormRoute,
            _charset_: "UTF-8"
        };

        var successHandler = function(resp) {
                console.log("submit response : " + resp);
                if (resp && resp == "success") {
                    updateWorkItemStatus();
                    //saveCurrentTaskAction();
                    //saveCurrentTaskComment();
                }
            },
            errorHandler = function(resp, xhr, error, errorThrown) {
                $("#modal-error-submit-action").modal("show");
                $("#modal-confirm-submit-action").modal("hide");
            };

        if (isReadOnlyForm) {
            submitAction(options, successHandler, errorHandler);
        } else {
            var iframe = document.querySelector("#task-iframe");
            if (iframe != null) {
                guideBridge = $("#task-iframe")[0].contentWindow.guideBridge;
            }
            if (guideBridge && guideBridge.isConnected() && guideBridge.validate()) {
                guideBridge.getData({
                    success: function(result) {
                        /*
                         * file attachment map will be used for restoring the attachment for xml based adaptive forms
                         * as this information is not available in dataXML,sending it separately
                         */
                        fileAttachmentMap = guideBridge.getFileAttachmentMap();
                        xmlData = result.data;
                        options.dataXML = xmlData;
                        //console.log("dataXML : " + result.data);
                        options.fileAttachmentMap = JSON.stringify(fileAttachmentMap);
                        submitAction(options, successHandler, errorHandler);
                    },
                    error: function(result) {
                        var msg = result.getNextMessage();
                        if (msg != null) {
                            console.error(msg.message);
                        }
                    },
                    fileUploadPath: Granite.HTTP.externalize(REST_ATTACHMENT_SERVLET + "?operation=submit&workitemId=" + encodeURIComponent(localStorage.getItem('workItemId'))),
                    excludeFormState: true
                });
            } else {
                $("#modal-confirm-submit-action").modal("hide");
            }
        }
    }

    function updateWorkItemStatus() {
        // first save workitem xml data
        $.ajax({
            type: "POST",
            url: '/bin/manageTask?action=UPDATE_TASK_DATA',
            data: {
                taskId: localStorage.getItem('workItemId'),
                data: xmlData
            },
            async: false,
            success: function(resp) {
                // now update the status
                workItemId = localStorage.getItem('workItemId');
                $.ajax({
                    type: "GET",
                    url: '/bin/manageTask?action=UPDATE_TASK_STATUS&workItemId=' + workItemId,
                    async: false,
                    success: function(resp) {
                        $("#modal-success-submit-action").modal("show");
                        $("#modal-confirm-submit-action").modal("hide");
                    },
                    error: function(resp, xhr, error, errorThrown) {
                        $("#modal-error-submit-action").modal("show");
                        $("#modal-confirm-submit-action").modal("hide");
                    }
                });
            },
            error: function(resp, xhr, error, errorThrown) {
                $("#modal-error-submit-action").modal("show");
            }
        });
    };

    function saveCurrentTaskAction() {
        workItemId = localStorage.getItem('workItemId');
        $.ajax({
            type: "GET",
            url: '/bin/manageTask?action=SAVE_ACTION&workItemId=' + encodeURIComponent(workItemId) + '&currentTaskAction=' + $("#hiddenselectedaction").val().replace("~", "-"),
            async: false,
            success: function(resp) {},
            error: function(resp, xhr, error, errorThrown) {}
        });
    }

    function saveCurrentTaskComment() {
        workItemId = localStorage.getItem('workItemId');
        $.ajax({
            type: "GET",
            url: '/bin/manageTask?action=SAVE_COMMENT&workItemId=' + encodeURIComponent(workItemId) + '&currentTaskComment=' + encodeURIComponent($("#comment-dashboard-task-submit").val().replace("~", "-")),
            async: false,
            success: function(resp) {},
            error: function(resp, xhr, error, errorThrown) {}
        });
    }



    function getTaskAttachments() {
        workItemId = localStorage.getItem('workItemId');
        var requestURL = '/bin/getInboxItemDetails?action=TASK_ATTACHMENTS&workItemId=' + encodeURIComponent(workItemId);
        $.ajax({
            type: "GET",
            contentType: "application/text; charset=utf-8",
            url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
            async: false,
            cache: false,
            dataType: "json",
            success: function(attachmentsArray) {
                files = (attachmentsArray);

            }
        });
    }


    var submitAction = function(options, successHandler, errorHandler) {

       /* getTaskAttachments();
        debugger;
        var fileArray = [];
        for (i in files) {

            var jsonData = files[i];
            fileArray.push(jsonData.fileName);

        }
        var fileAttachmentMap = {};
        var fileAttachmentsList = window.guideBridge._getFileAttachmentsList();
        for (var i = 0; i < fileAttachmentsList.length; i++) {
            var node = fileAttachmentsList[i];
            if (fileArray[i] !== null) {
                fileAttachmentMap[node.somExpression] = fileArray[i];
            }
        }
        options.fileAttachmentMap = JSON.stringify(fileAttachmentMap);
		//options.attachments = JSON.stringify(fileArray);*/

        if (options != null) {
            $.ajax({
                type: "POST",
                url: Granite.HTTP.externalize("/bin/submitTaskToProcessingInstance?operation=submit"),
                data: options,
                async: false,
                success: successHandler,
                error: errorHandler
            });
        }
    };

    function onResetButtonClick(e) {
        guideBridge = $("#task-iframe")[0].contentWindow.guideBridge;
        if (guideBridge && guideBridge.isConnected()) {
            guideBridge.reset();
        }
        //Reset attachments
        /*var $attachments = document.querySelectorAll(".fd-dashboard-tm-detailsview-attachfile-item label");
        for (var i = 0; i < $attachments.length; i++) {
            var $attachment = $attachments[i];
            var $attachmentItem = $attachment.closest(".fd-dashboard-tm-detailsview-attachfile-item");
            if (!($attachment.dataset && $attachment.dataset.path)) {
                $attachmentItem.remove();
            } else {
                $attachmentItem.hidden = false;
            }
        }

        attachmentsList = attachmentsList.filter(function (item) {
            item.isDelete = false;
            return (item.path);
        });*/
    }

    function onDelegateButtonClick(e) {
        var workitemId = localStorage.getItem('workItemId');
        if (workitemId) {
            CQ.Inbox.UI.commons.delegateWorkitem(workitemId);
        }
    }

    function connectGuideBridge(event) {
        guideBridge = event.detail.guideBridge;
        if (guideBridge) {
            /*var iframeSelector = document.querySelector(rel_iframe);
            var fileattachmentMap = iframeSelector.dataset.fileattachmentmap;
            if (fileattachmentMap) {
                fileattachmentMap = modifyFileAttachmentMap(fileattachmentMap);
                guideBridge.customContextProperty('fileAttachmentMap', fileattachmentMap);
            }*/
            guideBridge.off("bridgeInitializeComplete", interactWithGuideBridge);
            guideBridge.on("bridgeInitializeComplete", interactWithGuideBridge);
        }
    }

    function interactWithGuideBridge(event) {
        guideBridge = event.currentTarget;
        if (guideBridge) {
            console.log("guideBridge : " + guideBridge);
            //adjustUI(guideBridge);
            if (isReadOnlyForm) {
                guideBridge.disableForm();
            }
        }
    }

    function adjustUI(guideBridge) {
        guideBridge.hideSubmitButtons();
        guideBridge.hideSaveButtons();
        guideBridge.hideResetButtons();
        guideBridge.hideSummaryPanel();
    }


    function updateLocalStorage(localStorageVariableMap) {

        var localStorageVariableKeys = ["workItemId", "isCurrentUserAdmin", "isViewTaskDetailsAllowed", "isAssigneeAGroup", "currentUserId", "routesData", "showSubmit", "showSave", "showReset", "lastActionTaken", "lastActionComment", "taskTitle", "description", "taskAssignee", "workflow", "status", "startDate"];
        for (var l = 0; l < localStorageVariableKeys.length; l++) {
            localStorage.setItem(localStorageVariableKeys[l], localStorageVariableMap.get(localStorageVariableKeys[l]));
        }

        return true;
    }

});