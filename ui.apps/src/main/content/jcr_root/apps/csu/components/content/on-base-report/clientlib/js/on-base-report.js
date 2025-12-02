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


/*
document.addEventListener("DOMContentLoaded", function() {
        const urlParams = new URLSearchParams(window.location.search);
        const where = urlParams.get('where');
        const checkin = urlParams.get('checkin');
        const checkout = urlParams.get('checkout');
        const travellers = urlParams.get('travellers');

        // Use the parameters as needed, for example, display them on the page
        document.getElementById('where-display').textContent = where;
        document.getElementById('checkin-display').textContent = checkin;
        document.getElementById('checkout-display').textContent = checkout;
        document.getElementById('travellers-display').textContent = travellers;
    });
*/