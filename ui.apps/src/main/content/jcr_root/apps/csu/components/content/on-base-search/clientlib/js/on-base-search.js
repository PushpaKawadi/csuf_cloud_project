$(document).ready(function() {
 /*    var fileIcons = document.querySelectorAll(".fa-file");
    fileIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            window.open("https://onbasestgweb.fullerton.edu/AppNetDp/docpop/docpop.aspx?clienttype=html&docid=1211886", "_blank");

        });
    });*/

    var documentHandler;

    $(".fa-file").on('click', function(event) {
        documentHandler = $(this).closest('tr').attr("data-id");
         window.open("https://onbasestgweb.fullerton.edu/AppNetDp/docpop/docpop.aspx?clienttype=html&docid="+documentHandler, "_blank");
    });
});
