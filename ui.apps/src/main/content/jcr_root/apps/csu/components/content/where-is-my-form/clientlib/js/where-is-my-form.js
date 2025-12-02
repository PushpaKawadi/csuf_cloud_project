/* $(document).ready(function() {
 	debugger;
 	var jsonResultArray = "";
     var uid = "";
 	getLoggedInUserId();

 	function getLoggedInUserId() {
 		var userValue;
 		$.ajax({
 			type: 'GET',
 			url: "/bin/getLoggedInUserDetails",
 			dataType: 'json',
 			success: function(myresopnse) {
 				debugger;
 				var userValue = myresopnse.userId;
                uid = userValue;
 				if (userValue !== undefined) {
 					getWorkItems(userValue);
 				}
 			},
 			error: function(error) {
 				alert("error block=" + error);
 			}
 		});
 	}

 	function getWorkItems(uid) {
 		debugger;
 		$("#myforms-dataTable").find("tr:gt(0)").remove();
 		var requestURL = '/bin/workflowData?action=GET_MY_SUBMISSION_DATA&userId=' + uid;
 		$.ajax({
 			type: "GET",
 			contentType: "application/text; charset=utf-8",
 			url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
 			async: false,
 			cache: false,
 			dataType: "json",
 			success: function(witemJsonArray) {
 				debugger;
            jsonResultArray = witemJsonArray;

 				if (witemJsonArray) {
 					for (i = 0; i < witemJsonArray.length - 1; i++) {

 						 var jsonData = witemJsonArray[i];
 						addRows(jsonData);
 					}
 				}
 			}
 		});
 	}

 	function addRows(jData) {
 		//var row = $("<tr id='" + jData.workItemId + "'></tr>");
         var row = $("<tr/>");
 		$("#myforms-dataTable").append(row);
 		row.append($("<td >" + jData.status + "</td>"));
 		row.append($("<td >" + jData.initiator + "</td>"));
 		row.append($("<td >" + jData.startTime + "</td>"));
 		row.append($("<td >" + jData.modelTitle + "</td>"));
 		row.append($("<td >" + jData.assignee + "</td>"));
 		row.append($("<td >" + jData.workItemTitle + "</td>"));
 	}

     $('input.chb').on('change', function() {
        debugger;
         $("#myforms-dataTable").find("tr:gt(0)").remove();
        var cb1 = $('#cb1').prop('checked');
        var cb2 = $('#cb2').prop('checked');
         if (jsonResultArray) {
 					for (i = 0; i < jsonResultArray.length - 1; i++) {

 						 var jsonData = jsonResultArray[i];
                         if (cb1 == true && cb2 == true) {
                         addRows(jsonData);
       					 }
                         if (cb1 == true && cb2 == false) {
                         if(uid != jsonData.initiator){
                         addRows(jsonData);
                         }
       					 }
                         if (cb1 == false && cb2 == true) {
                         if(uid == jsonData.initiator){
                         addRows(jsonData);
                         }
       					 }

 					}
 				}


    });




 });*/