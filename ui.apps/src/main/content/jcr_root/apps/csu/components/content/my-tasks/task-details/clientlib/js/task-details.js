window.localStorageVariableMap = new Map();
var localStorageVariableKeys = ["workItemId","isCurrentUserAdmin","isViewTaskDetailsAllowed","isAssigneeAGroup","currentUserId","routesData","showSubmit","showSave","showReset","lastActionTaken","lastActionComment","taskTitle","description","taskAssignee","workflow","status","startDate"];
for(var l=0;l<localStorageVariableKeys.length;l++){
        window.localStorageVariableMap.set(localStorageVariableKeys[l], localStorage.getItem(localStorageVariableKeys[l]));
}

var itemId = localStorage.getItem('workItemId');
var isViewTaskDetailsAllowed1 = localStorage.getItem('isViewTaskDetailsAllowed');
var isAssigneeAGroup1 = localStorage.getItem('isAssigneeAGroup');
var showReset1 = localStorage.getItem('showReset');
var showSubmit1 = localStorage.getItem('showSubmit');
var showSave1 = localStorage.getItem('showSave');
var routesData1 = localStorage.getItem('routesData');

var currentUserId1 = $(".cls-current-user-id").text();
/*var lastActionTaken1 = localStorage.getItem('lastActionTaken');
var lastActionComment1 = localStorage.getItem('lastActionComment');*/
var lastActionTaken1;
var lastActionComment1;
var taskTitle = localStorage.getItem('taskTitle');
var description = localStorage.getItem('description');
var taskAssignee = localStorage.getItem('taskAssignee');
var workflow = localStorage.getItem('workflow');
var status = localStorage.getItem('status');
var startDate = localStorage.getItem('startDate');
var isAllowed = false;


debugger;
//show-hide action buttons on task details page        
if (showReset1 == "false") {
    $(".cls-action-menu-reset").css('display', 'none');
}

if (showSubmit1 == "false") {
    $(".cls-action-menu-submit").css('display', 'none');
}

if (showSave1 == "false") {
    $(".cls-action-menu-save").css('display', 'none');
}

if (routesData1 != null && routesData1 != "undefined") {
    routesData1 = routesData1.split(",");
    for (i in routesData1) {
        if (routesData1[i]) {
            $(".cls-action-menu-task-details").prepend($("<li></li>").addClass("action-items-menus task-detail-action-item-detail")
                .html("<a class='cls-action-menu-submit' href='#' data-toggle='modal' data-type='" + routesData1[i] + "'><i class='fas fa-paper-plane fa-icon'></i><span class='action-item-text-detail'>&nbsp;" + routesData1[i] + "</span></a>"));
        }
    }
}

function isEmpty(value) {
    return typeof value == 'string' && !value.trim() || value === 'undefined' || value === null;
}

function showLeftSection(x) {
    if (x.matches) { // If media query matches
        $(".mytask-sliding-button").trigger("click");
    }
}

function isUploadTaskAttachmentAllowed() {
	/*alert("UPLOAD_TASK_ATTACHMENTS_ALLOWED");
	alert(itemId);*/
$(".cls-task-attachments").css('display', 'none');
var requestURL = '/bin/getInboxItemDetails?action=UPLOAD_TASK_ATTACHMENTS_ALLOWED&workItemId=' + encodeURIComponent(itemId);
$.ajax({
type: "GET",
contentType: "application/text; charset=utf-8",
url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
async: false,
cache: false,
dataType: "text",
success: function (response) {
    debugger;
console.log("response : " + response + " typeof : " + typeof response);
if (response && response === "true") {
$(".cls-task-attachments").css('display', 'block');
} else {
$(".cls-task-attachments").css('display', 'none');
}
}
});
}

function getTaskAttachments() {
	/*alert("TASK_ATTACHMENTS");
    alert("workItemId : " + itemId);*/
    $("#attachments-table").find("tr:gt(0)").remove();
    var requestURL = '/bin/getInboxItemDetails?action=TASK_ATTACHMENTS&workItemId=' + encodeURIComponent(itemId);
	console.log("requestURL : " + requestURL);
    $.ajax({
        type: "GET",
        contentType: "application/text; charset=utf-8",
        url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
        async: false,
        cache: false,
        dataType: "json",
        success: function (attachmentsArray) {
            if (attachmentsArray && attachmentsArray.length > 0) {
                var x = window.matchMedia("(min-width: 991px)")
                showLeftSection(x);
                for (i in attachmentsArray) {  
                    var jsonData = attachmentsArray[i];
					//alert("jsonData : " + jsonData);
                    var row = $("<tr/>");
                    $("#attachments-table").append(row);
                    row.append($("<td class='left-menu-text'>" + jsonData.fileName + "</td>"));
                    row.append($("<td style='text-align:center'><a class='action-icn' href='/bin/getTaskAttachmentFromProcessingInstance?assetPath=" + encodeURIComponent(jsonData.path) + "'><i class='fas fa-eye' tool-tip-toggle='tooltip-icon' data-original-title='View Supporting Document'></i></a>"));
					//var test ="/bin/getTaskAttachmentFromProcessingInstance?assetPath=" + encodeURIComponent(jsonData.path);
                  /*  row.append($("<td style='text-align:center'><a class='action-icn' href='/bin/viewTaskAttachment?assetPath=" + encodeURIComponent(jsonData.path) + "' target='_blank'><i class='fas fa-eye' tool-tip-toggle='tooltip-icon' data-original-title='View Supporting Document'></i></a></td>"));*/
				  console.log("jsonData.path : " + jsonData.path);
				  //console.log("test : " + test);
                }
            } else {
                $(".cls-supporting-documents").css('display', 'none');
            }
        }
    });
}

function getWorkflowHistory() {
    //console.log("workItemId : " + itemId);
	
    $("#tb-workflow-history").find("tr:gt(0)").remove();
    var requestURL = '/bin/manageTask?action=WORKITEM_HISTORY&workItemId=' + encodeURIComponent(itemId);
    $.ajax({
        type: "GET",
        contentType: "application/text; charset=utf-8",
        url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
        async: false,
        cache: false,
        dataType: "json",
        success: function (wfHistoryArray) {
            if (wfHistoryArray && wfHistoryArray.length > 0) {
                for (var i in wfHistoryArray) {
                    var jsonData = wfHistoryArray[i];
                    var row = $("<tr class='table-row'/>");
                    $("#tb-workflow-history").append(row);
                    row.append($("<td class='wf-history-task-title'>" + jsonData.taskTitle + "</td>"));
                    row.append($("<td>" + jsonData.stage + "</td>"));
                    row.append($("<td><img class='header-user-img' src='/content/dam/csu/generic_user.png' alt='Person Profile Icon'>&nbsp;&nbsp;" + jsonData.taskAssignee + "</td>"));
                    row.append($("<td>" + jsonData.startDate + "</td>"));
                    row.append($("<td>" + jsonData.endDate + "</td>"));
                    row.append($("<td>" + jsonData.action + "</td>"));
                    row.append($("<td>" + ((jsonData.comment != null && jsonData.comment != "undefined") ? jsonData.comment : '') + "</td>"));
                    row.append($("<td><a class='view-task-details-link' data-title='" + jsonData.taskTitle + "' data-id='" + jsonData.actualWorkItemId + "' data-historyitemid='" + jsonData.historyWorkItemId + "' data-initialsubmission='" + jsonData.isInitialSubmission + " 'data-historysubmission='" + jsonData.isHistorySubmission + "' href='" + jsonData.viewDetailsLink + "' target='_blank'>" + (jsonData.viewDetailsLink ? 'View Details' : '') + "</a></td>"));
                }
            }
        }
    });
}

function getLastActionAndCommentDetails() {
	/*alert("PREVIOUS_STEP_DATA");
	alert(itemId);*/
    var requestURL = '/bin/getInboxItemDetails?action=PREVIOUS_STEP_DATA&workItemId=' + encodeURIComponent(itemId);
    $.ajax({
        type: "GET",
        contentType: "application/text; charset=utf-8",
        url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
        async: false,
        cache: false,
        dataType: "json",
        success: function (jsonData) {
            if (jsonData) {
                lastActionTaken1 = jsonData.actionTaken;
                lastActionComment1 = jsonData.workitemComment;
                //console.log("lastActionTaken1 : " + lastActionTaken1);
                //console.log("lastActionComment1 : " + lastActionComment1);
            }
        }
    });
}

function isViewTaskDetailsAllowed() {
	/*alert("VIEW_TASK_DETAILS_ALLOWED");
	alert(taskAssignee);*/
    var requestURL = '/bin/getInboxItemDetails?action=VIEW_TASK_DETAILS_ALLOWED&assignee=' + taskAssignee;
    $.ajax({
        type: "GET",
        contentType: "application/text; charset=utf-8",
        url: requestURL,
        async: false,
        cache: false,
        success: function (response) {
            if (response && response == 'true') {
                isAllowed = true;
            }
        }
    });
}

$(document).ready(function () {

    getLastActionAndCommentDetails();

    // if cache or localStorage got cleared, send back the user to My Tasks Page
    if (itemId == null) {
        alert("An error occured, please open the task again");
        //$("#modal-error-cache-deleted-action").modal("show");        
        location.href = document.referrer;
    }

    isViewTaskDetailsAllowed();
    if (isAllowed == false) {
        $("#modal-self-assign-action").modal("hide");
        alert("You do not have the permission to access this task.");
        //$("#modal-error-access-denied-action").modal("show");
        location.href = document.referrer;
    }

    // if current user is not task assignee, show access denied page
    if (currentUserId1 && taskAssignee && isAssigneeAGroup1 != 'true') {
        if (currentUserId1 !== taskAssignee) {
            $("#modal-self-assign-action").modal("hide");
            alert("You do not have the permission to access this task.");
            //$("#modal-error-access-denied-action").modal("show");
            location.href = document.referrer;
        }
    }

    // hide Navigation Menu links on Task Details page
    //$("#navbarTogglerDemo02").css('display', 'none');
    /*$(".mytask-navbar-button").css('display', 'none');*/

    // hide form save,submit,reset buttons inside iframe
   
    $('#task-iframe').load(function () {
        //$('#task-iframe').contents().find('.toolbar').hide();
        /*$('#task-iframe').contents().find('#guideContainer-toolbar-reset___guide-item').hide();
        $('#task-iframe').contents().find('#guideContainer-rootPanel-toolbar-reset___guide-item').hide(); 
        $('#task-iframe').contents().find('#guideContainer-toolbar-saveguidedraft___guide-item').hide();
        $('#task-iframe').contents().find('#guideContainer-rootPanel-toolbar-saveguidedraft___guide-item').hide(); 
        $('#task-iframe').contents().find('#guideContainer-toolbar-saveGuideDraft___guide-item').hide(); 
        $('#task-iframe').contents().find('#guideContainer-toolbar-submit___guide-item').hide();        
        $('#task-iframe').contents().find('#guideContainer-rootPanel-toolbar-submit___guide-item').hide();*/
        guideBridge = $("#task-iframe")[0].contentWindow.guideBridge;
        guideBridge.hideSubmitButtons();
        guideBridge.hideSaveButtons();
        guideBridge.hideResetButtons();
        guideBridge.hideSummaryPanel();
    });
	
	$('#task-iframe').on('load', function () {
		//alert("here");
    var iframeWindow = $("#task-iframe")[0].contentWindow;

    if (!iframeWindow) {
        console.error("Iframe window not available");
        return;
    }

    // Listen INSIDE iframe for GuideBridge init
    iframeWindow.document.addEventListener("guideBridgeInitialized", function (e) {
        var guideBridge = e.detail.guideBridge;

        if (!guideBridge) {
            console.error("GuideBridge not initialized");
            return;
        }

        console.log("GuideBridge ready in iframe", guideBridge);

        guideBridge.hideSubmitButtons();
        guideBridge.hideSaveButtons();
        guideBridge.hideResetButtons();
        guideBridge.hideSummaryPanel();
    });
});
	
	  

    $(".toggle-show").click(function () {
        $(".toggle-hide").show();
        $(".toggle-show").hide();
    })

    if (isViewTaskDetailsAllowed1 == "true" && isAssigneeAGroup1 == 'true') {
        $("#modal-self-assign-action").modal("show");
    }

    if (!lastActionTaken1) {
        $("#dv-last-action-taken").css('display', 'none');
    } else {
        $("#last-action-taken").append(lastActionTaken1);
    }

    if (!lastActionComment1) {
        $("#dv-last-action-comment").css('display', 'none');
    } else {
        $("#last-action-comment").append(lastActionComment1);
    }

    $("#label-task-title").append(taskTitle);
    $("#current-task-desc").append(description);
    $("#current-task-status").append(status);
    $("#current-task-start-date").append(startDate);
    $("#current-task-workflow").append(workflow);

    isUploadTaskAttachmentAllowed();
    getTaskAttachments();
   
    $("a[href='#workflow']").click(function () {               
        $("html, body").animate({
            scrollTop: 0
        }, 3000);
        return false;
    });
    
    getWorkflowHistory();

    $('.view-task-details-link').click(function () {
        //console.log("itemId: " + $(this).data("id"));
        localStorage.setItem('itemId', $(this).data("id"));
        localStorage.setItem('historyItemId', $(this).data("historyitemid"));
        localStorage.setItem('taskTitle', $(this).data("title"));
        localStorage.setItem('isInitialSubmission', $(this).data("initialsubmission"));
        localStorage.setItem('isHistorySubmission', $(this).data("historysubmission"));
    });
    
    $("#btn-attach-file").click(function () {               
        $("#modal-upload-attachments-action").modal("show");
    });
    
    $(".btn-close-upload-widget").click(function () {               
        getTaskAttachments();
    });    
});
