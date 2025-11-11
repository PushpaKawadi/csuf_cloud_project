window.onload = function execute() {
var element = document.getElementById('FooterText');
    if(element !== null){
        var dateString = new Date().toLocaleString("en-US", {
            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
        var footerText = "© ".concat(curyear).concat(" CSUF | All Rights Reserved");
        document.getElementById('FooterText').innerHTML = footerText;
    }
};