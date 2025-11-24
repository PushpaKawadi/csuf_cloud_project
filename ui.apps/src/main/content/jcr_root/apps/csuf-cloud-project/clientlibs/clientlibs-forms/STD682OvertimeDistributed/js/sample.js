/*(function () {
    var userId = "nvadlakunta";

    var url = "https://myformstst.fullerton.edu/bin/getAppealofaDeclinedFeeWaiverRequestData"
        + "?userid=" + encodeURIComponent(userId)
        + "&action=FEE_WAIVER_HOLDER_USER_ID_LOOKUP";

    fetch(url, {
        method: "GET",
        credentials: "omit",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
        console.log("Response for nvadlakunta:", data);
    })
    .catch(function (err) {
        console.error("Error calling servlet:", err);
    });
})();*/