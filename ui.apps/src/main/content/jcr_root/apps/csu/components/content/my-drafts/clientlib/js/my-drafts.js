 $(document).ready(function() {
    var draftId;
    getDrafts();
     
    function getDrafts() {
        $("#dataTable").find("tr:gt(0)").remove();
        $.ajax({
          type : "GET",
                contentType : "application/text; charset=utf-8",				
                url : '/apps/csu/components/content/my-drafts/save.fp.draft.json?func=getDrafts&cutPoints=iconClass,name,draftID',
                async : false,
                cache : false,
                dataType : "json",
                success : function(draftJsonArray) {                    
                    if(draftJsonArray){					
                        for (i in draftJsonArray) {
                            var jsonData = draftJsonArray[i];                            
                            var row = $("<tr data-draftid='" + jsonData.draftID + "'></tr>");
                            $("#dataTable").append(row);
                            row.append($("<td >" + jsonData.name + "</td>"));
                            row.append($("<td>" + (jsonData.extendedDesc ? jsonData.extendedDesc : '') + "</td>"));
                            
                            // calculate timeDiff for jcr:lastModified value
                            var currentTime = new Date();                           
                            var diffTime = milliSecondsToString(currentTime - jsonData["jcr:lastModified"]);                 row.append($("<td>" + diffTime + "</td>"));
                            
                            row.append($("<td style='text-align:center'><a class='action-icn' href='/content/forms/portal/render.html/draft/" + jsonData.draftID + "?wcmmode=disabled' target='_blank'><i class='fas fa-eye' tool-tip-toggle='tooltip-icon' data-original-title='Show saved Form'></i></a><a class='action-icn' href='/content/forms/portal/render.html/draft/" + jsonData.draftID + "?fpNewInstance=true&wcmmode=disabled' target='_blank'><i class='fa fa-plus' tool-tip-toggle='tooltip-icon' data-original-title='Start a new Form using this form data'></i></a><a class='action-icn' href='#'><i class='fas fa-trash icn-del-draft' tool-tip-toggle='tooltip-icon' data-original-title='Delete'></i></a></td>"));
                        }
                    }
                }       
            });
    }
     
    // calculate last modified date for draft and submitted form data
    function milliSecondsToString (milliSeconds){        
        var seconds = parseInt(milliSeconds/1000);
        var numyears = Math.floor(seconds / 31536000);
        var numdays = Math.floor((seconds % 31536000) / 86400);
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        var yearText   = " Years ",
            daysText   = " Days ",
            hourText   = " Hour ",
            minText    = " Minutes ",
            secText    = " Seconds ",
            oneMinText = " Minute ",
            agoText    = "Ago";
        if(numyears > 0)
            return numyears + yearText + agoText;
        else if(numdays > 1)
            return numdays + daysText + agoText;
        else if(numdays == 1)
        {
            if(numhours > 0)
                return numdays + daysText + numhours + hourText + agoText;
            else
                return numdays + daysText + agoText;
        }
        else if(numhours > 0)
        {
            if(numminutes > 0)
                return numhours + hourText + numminutes + minText + agoText;
            else
                return numhours + hourText + agoText;
        }
        else if(numminutes > 0)
        {
            if(numminutes > 1)
                return numminutes + minText + agoText;
            else
                return numminutes + oneMinText + agoText;
        }
        else return "Just now";
    };
     
     // delete draft action     
     $(".icn-del-draft").click(function(){
         $('#confirm-del-modal').appendTo("body").modal('show');       
         draftId = $(this).closest("tr").data("draftid");         
     });
     
     $(".modal-success-close").click(function(){
        $("#confirm-del-modal").modal("hide");
     });
     
     $("#del-draft-cnf-btn").click(function(){      
         console.log("draftID : " + draftId);            
         $.ajax({
                type : "POST",
                url : '/apps/csu/components/content/my-drafts/save.fp.draft.json?func=deleteDraft',
                dataType: 'json',
                async: true,
                cache: false,              
                data: {
                    path:draftId
                },
                complete: function (xhr, status) {
                    if (status === 'error') {
                        $("#modal-error-delete-draft").modal("show");                       
                    } else {                        
                        $("#confirm-del-modal").modal("hide");                       
                        location.reload();
                    }
                }      
            });
        });
});