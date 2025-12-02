$( document ).ready(function () {
        //alert("hi");
		$(".moreBox").slice(0, 2).show();
		if ($(".blogBox:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 9).slideDown();
			if ($(".moreBox:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
        $(".card-number").each(function(index){
            //console.log($(this).text());            
            $(this).append(parseInt(index+1));
        });
	});