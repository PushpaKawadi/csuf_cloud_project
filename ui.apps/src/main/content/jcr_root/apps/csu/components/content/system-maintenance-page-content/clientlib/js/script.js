$(document).ready(function () {

    $("#errordiv").hide();
    $("#successdiv").hide();

    $('input.chb').on('change', function () {
        $('input.chb').not(this).prop('checked', false);
        $("#errordiv").hide();
        $("#successdiv").hide();

    });

    $("#saveSystemConfigBtn").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: '/content/csu/us/en/configure-system-maintenence/jcr:content',
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
