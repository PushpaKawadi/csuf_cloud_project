 $(document).ready(function () {
     var workflowInstanceId;

     // delete draft action     
     $(".icn-terminate-workflow").click(function () {
         $('#confirm-terminate-workflow-modal').appendTo("body").modal('show');
         workflowInstanceId = $(this).closest("tr").data("id");
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
