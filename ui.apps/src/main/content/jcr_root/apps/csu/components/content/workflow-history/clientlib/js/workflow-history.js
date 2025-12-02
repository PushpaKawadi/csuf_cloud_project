debugger;
/*
$('#approve-btn').on('click', function() {
alert("Hello")
});

function sayHello() {
    alert("hello");
        console.log('Hello World!');
    };
$(document).ready(function () {
$(".fa-eye").click(function () {
    alert("hello");
console.log('Hello World!');
     });
    $("#wfh-fetch-button").click(function () {
    alert("hello1");
console.log('Hello World!1');
     });
     });*/

$(document).ready(function () {
    debugger;

$('.icn-view-wfh').on('click', function() {
debugger;
    var wid
     wid = $(this).closest("tr").attr('uid');
    alert(wid);
    $('#confirm-terminate-workflow-modal').appendTo("body").modal('show');
});
});