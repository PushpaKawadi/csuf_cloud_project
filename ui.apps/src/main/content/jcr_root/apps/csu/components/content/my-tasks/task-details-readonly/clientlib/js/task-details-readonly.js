var guideBridge, workItemId, taskTitle, isInitialSubmission, isHistorySubmission, historyItemId;
workItemId = localStorage.getItem('itemId');
historyItemId = localStorage.getItem('historyItemId');
taskTitle = localStorage.getItem('taskTitle');
isInitialSubmission = localStorage.getItem('isInitialSubmission');
isHistorySubmission = localStorage.getItem('isHistorySubmission');
var requestURL = '/bin/manageTask?action=TASK_URL&workItemId=' + encodeURIComponent(workItemId) + '&historyWorkItemId=' + encodeURIComponent(historyItemId) + '&isInitialSubmission=' + isInitialSubmission.trim() + '&isHistorySubmission=' + isHistorySubmission.trim();
console.log("requestURL : " + requestURL);
$(document).ready(function() {    
    if(workItemId){
            $.ajax({
                  type : "GET",
                        contentType : "application/text; charset=utf-8",
                        url : requestURL,
                        async : false,
                        cache : false,
                        dataType : "text",
                        success : function(taskURL) { 
                            if(taskURL){                              
                                localStorage.setItem('currentTaskURL', taskURL);
                        }
                    }       
        }); 
    }
    
    $("#label-task-title").append(taskTitle);

    $("#frame").on("click", function() {
      $("task-iframe").insertBefore(".push");
    });   

    $('#task-iframe').attr('src', localStorage.getItem('currentTaskURL'));     
    
    $('#task-iframe').load(function(){
        guideBridge = $("#task-iframe")[0].contentWindow.guideBridge;
        
        guideBridge.hideSubmitButtons();
        guideBridge.hideSaveButtons();
        guideBridge.hideResetButtons();
        guideBridge.hideSummaryPanel();
        
        guideBridge.disableForm();
    });
});