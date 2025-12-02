 $(document).ready(function() {   
     
    $.ajax({
	  type : "GET",
			contentType : "application/text; charset=utf-8",				
			url : '/apps/csu/components/content/my-submissions/save.fp.draft.json?func=getSubmittedForms&cutPoints=iconClass,name,submitID',
			async : false,
			cache : false,
			dataType : "json",
			success : function(submissionJsonArray) { 
				if(submissionJsonArray){					
					for (i in submissionJsonArray) {
						var jsonData = submissionJsonArray[i];
                        //console.log(formJson.title);
                        var row = $("<tr/>");
                        $("#dataTable").append(row);
                        row.append($("<td>" + jsonData.name + "</td>"));
                        row.append($("<td>" + (jsonData.extendedDesc ? jsonData.extendedDesc : '') + "</td>"));
                        
                        // calculate timeDiff for jcr:lastModified value
                        var currentTime = new Date();                           
                        var diffTime = milliSecondsToString(currentTime - jsonData["jcr:lastModified"]);                 row.append($("<td>" + diffTime + "</td>"));
                        
                        row.append($("<td style='text-align:center'><a class='action-icn' href='/content/forms/portal/render.html/submission/" + jsonData.submitID + "?wcmmode=disabled' target='_blank'><i class='fas fa-eye' tool-tip-toggle='tooltip-icon' data-original-title='Show submitted Form'></i></a><a class='action-icn' href='/content/forms/portal/render.html/submission/" + jsonData.submitID + "?fpNewInstance=true&wcmmode=disabled' target='_blank'><i class='fa fa-plus' tool-tip-toggle='tooltip-icon' data-original-title='Start a new Form using this form data'></i></a>"));                        
					}
				}
		    }       
        });
     
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
});