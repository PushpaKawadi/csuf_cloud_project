 $(document).ready(function() {
     
   $.ajax({
	  type : "GET",
			contentType : "application/text; charset=utf-8",				
			url : '/bin/getInboxItemDetails?action=FORMS_CATALOG',
			async : false,
			cache : false,
			dataType : "json",
			success : function(formsArray) { 
				if(formsArray){					
					for (i in formsArray) {
						var formJson = formsArray[i];
                        //console.log(formJson.title);
                        var row = $("<tr/>");
                        $("#catalog-dataTable").append(row);
                        row.append($("<td>"+ formJson.title + "</td>"));                        
                        row.append($("<td style='text-align:center'><a class='action-icn' href='" + formJson.path + "?type=guide&source=fp&wcmmode=disabled' target='_blank'><i class='fa fa-paper-plane' tool-tip-toggle='tooltip-icon' data-original-title='Click here to launch the Form'></i></a>"));
					}
				}
		    }       
        });        
});