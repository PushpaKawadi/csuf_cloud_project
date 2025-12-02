$(document).ready(function () {

    $("#errordiv").hide();
    $("#successdiv").hide();
    getSysConfigValue();
    $('input.chb').on('change', function () {
        $('input.chb').not(this).prop('checked', false);
        $("#errordiv").hide();
        $("#successdiv").hide();

    });

    $("#saveSystemConfigBtn").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: '/content/csu/us/configure-system-maintenence/jcr:content',
            data: $('#systemMaintenanceForm').serialize(),
            success: function (resp) {
                $("#errordiv").hide();
                $("#successdiv").text("changes saved successfully");
                $("#successdiv").show();
            },
            error: function (resp, xhr, error, errorThrown) {
                $("#successdiv").hide();
                $("#errordiv").text("Server Error : Please try later");
                $("#errordiv").show();
            }
        });
    });
});

function getSysConfigValue() {
    const dotIndex = location.href.indexOf(".html");
    const url = location.href.substr(0,dotIndex+1) + "systemmaintenanceconfig.html";
    $.ajax({
        type: "GET",
        url: url,
        success: function (resp) {
            if (resp && resp == "true") {
                $("#system-checkbox-yes").trigger('click');
            } else if (resp && resp == "false") {
                $("#system-checkbox-no").trigger('click');
            }
        },
        error: function (resp, xhr, error, errorThrown) {}
    });
}
