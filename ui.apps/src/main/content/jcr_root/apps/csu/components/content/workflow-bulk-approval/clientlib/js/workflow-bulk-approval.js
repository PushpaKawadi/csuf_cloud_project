$(document).ready(function() {
    debugger;
    var workflowInstanceId;
    var map = new Map();
    var userValue = getLoggedInUserId();
    var resultArray = [];
    var wItemArray = [];
    var fieldArray = [];

    function getLoggedInUserId() {
        $.ajax({
            type: 'GET',
            url: "/bin/getLoggedInUserDetails",
            dataType: 'json',
            success: function(myresopnse) {
                debugger;
                var userValue = myresopnse.userId;
                if (userValue !== undefined) {
                    var requestURL = '/bin/workflowData?action=GET_WORKFLOW_INSTANCES_DATA_FOR_BULK_APPROVAL&userId=' + userValue;
                    $.ajax({
                        type: "GET",
                        url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
                        async: true,
                        cache: false,
                        dataType: "text",
                        success: function(resp) {
                            debugger;
                            resultArray = resp;
                        },
                        error: function(resp, xhr, error, errorThrown) {
                            console.log("Error while retrieving the data");
                        }
                    });

                } else {
                    return null;
                }
            },
            error: function(error) {
                alert("error block=" + error);
            }
        });
    }




    $('#approve-btn').on('click', function() {
        debugger;
        fieldArray = [];

        document.getElementById('modal-body-bulk-approval').innerHTML = "";
        $("#modal-select-bulk-approval-action").modal("show");
        if ($(".chb:checked").length > 0) {
            debugger;
            for (k = 0; k < Object.keys(JSON.parse(resultArray)[0].fields).length; k++) {
                var fieldValue = JSON.parse(resultArray)[0].fields["key" + k].split("~")[0];
                var fieldType = JSON.parse(resultArray)[0].fields["key" + k].split("~")[1];
                fieldArray.push(fieldValue);
                var modalBody = document.getElementById("modal-body-bulk-approval");
                modalBody.removeAttribute('novalidate');
                var inputfield = document.createElement("input");
                inputfield.setAttribute('type', fieldType);
                inputfield.setAttribute('id', fieldValue);
                inputfield.setAttribute('name', fieldValue);
                jQuery(inputfield).attr('required', '');
                inputfield.setAttribute("required", "");
                inputfield.required = true;

                if (fieldType == "checkbox") {

                    modalBody.appendChild(inputfield);
                    var divfield = document.createElement("div");
                    divfield.setAttribute('type', fieldType);
                    divfield.setAttribute('id', fieldValue + "-cb");
                    divfield.setAttribute("class", "cb-group");
                    modalBody.appendChild(divfield);
                    var label = document.createElement('label');
                    $("<label />").attr("id", "label" + fieldValue).attr("for", fieldValue).html("Please indicate that you have completed the review").appendTo(divfield);

                } else {
                    modalBody.appendChild(inputfield);
                    inputfield.style.width = "100%";
                    inputfield.style.border = "1px solid #ced4da";
                    if (fieldType == "textarea") {
                        inputfield.setAttribute("class", "form-control");
                        inputfield.setAttribute("placeholder", "Comments");
                        document.getElementById(fieldValue).style["word-wrap"] = "break-word";
                    }
                    if (fieldType == "textfield") {
                        inputfield.setAttribute("class", "tf");
                        inputfield.setAttribute("placeholder", "Signature");
                    }
                }

            }
        } else {
            $("#modal-select-bulk-approval-action").modal("hide");
        }
    });

    $('.cls-bulk-approval-ok').on('click', function() {
        if ($(".chb:checked").length > 0) {
            wItemArray = [];
            var finalFieldArray = [];
            for (i = 0; i < $(".chb:checked").length; i++) {
                var currentRow = $(".chb:checked")[i].closest("tr");
                var workItemId = currentRow.lastElementChild.textContent;
                for (j = 0; j < JSON.parse(resultArray).length; j++) {
                    if (workItemId == (JSON.parse(resultArray))[j].workItemId) {
                        var wId = JSON.parse(resultArray)[j].workItemId;
                        wItemArray.push(wId);
                    }
                }
                for (k = 0; k < fieldArray.length; k++) {

                    if (($('#' + fieldArray[k]).is(':checkbox')) && $('#' + fieldArray[k]).is(":checked") === true) {
                        finalFieldArray.push(fieldArray[k] + "~" + "1");
                    } else if (($('#' + fieldArray[k]).is(':checkbox')) && $('#' + fieldArray[k]).is(":checked") === false) {
						finalFieldArray.push(fieldArray[k] + "~" + "");
                    }
                    else {
                        finalFieldArray.push(fieldArray[k] + "~" + $('#' + fieldArray[k]).val());
                        console.log(fieldArray);
                    }
                    //finalFieldArray.push(fieldArray[k]);
                }

            }
            debugger;
            var resFlag = true;
            for (let item = 0; item < finalFieldArray.length; item++) {
                var itemVal = finalFieldArray[item].split('~')[1];
                if (itemVal === "" || itemVal === null) {
                    resFlag = false;
                    break;
                }
            }
            if (resFlag === true) {
                $("#labelError").html("");
                var requestURL = '/bin/bulkApproval?action=COMPLETE_TASK&wItemArray=' + encodeURIComponent(wItemArray) + '&fields=' + encodeURIComponent(finalFieldArray);
                console.log('resulturl '+requestURL);
                //var requestURL = '/bin/bulkApproval?action=COMPLETE_TASK&wItemArray=' + wItemArray+'&fields='+finalFieldArray;
                var data = {
                    "url": (requestURL)
                };
              /*  $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    url: '/bin/getTaskDetailsFromProcessingInstance',
                    dataType: "json",
                    data: data,
                    success: function(resp) {
                        debugger;
                        for (var k = 0; k < resp.length; k++) {
                            for (var key in resp[k]) {
                                var keyVal = key;
                                // console.log(key);
                                // console.log(resp[k][keyVal]);
                                if (resp[k][keyVal] === false) {
                                    $("#modal-error-bulk-approval-action").modal("show");
                                    break;
                                }
                            }
                        }
                        $("#modal-self-assign-action").modal("hide");
                        $("#modal-select-bulk-approval-action").modal("hide");
                        window.location = '/content/csu/us/en/bulk-approval.html?wcmmode=disabled';
                    },
                    error: function(resp, xhr, error, errorThrown) {
                        console.log("Error while retrieving the data");
                    }
                });*/
            } else {
                $("#labelError").html(("<p>These fields are required<p>"));
            }

        } else {
            $('.action-menu-closet').trigger("click");
        }
    });

});

//('.modal-body-division')
/* for (i = 0; i < $(".chb:checked").length; i++) {
            var currentRow = $(".chb:checked")[i].closest("tr");
            var workItemId = currentRow.lastElementChild.textContent;
}
});*/


/*  $('input.chb').on('change', function() {
      var cb = $(this).prop('checked');
      if (cb && cb == true) {
           // $("body.inbox").addClass("action-show");
          //$("body. Inbox").addClass("cls-action-menu-submit");
      } else {
          $('.action-menu-closet').trigger("click");
      }
  });*/

/* */