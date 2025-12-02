var flist = [];
$(document).ready(function() {
    var itemId = localStorage.getItem('workItemId');
    //var allowedType = getFileExtensions(itemId);
    var fileExtArray = "jpe, jpg, jpeg, gif, png, bmp, ico, svg, svgz, tif, tiff, ai, drw, pct, psp, xcf, psd, raw, webp, pdf";
    var requestURL = '/bin/getMimeTypesAllowedForTheWorkflow?workItemId=' + encodeURIComponent(itemId);
    $.ajax({
        type: "GET",
        url: '/bin/getTaskDetailsFromProcessingInstance?url=' + encodeURIComponent(requestURL),
        async: true,
        cache: false,
        dataType: "text",
        success: function(resp) {
            debugger;
            if (resp && (resp !== "" || resp !== null)) {
                fileExtArray = resp;
            }

            var uploadObj = $("#fileuploader").uploadFile({
                url: "/bin/uploadTaskAttachment",
                allowDuplicates: false,
                multiple: true,
                dragDrop: true,
                maxFileCount: 5,
                fileName: "file",
                formData: {
                    "workItemId": itemId
                },
                autoSubmit: true,
                allowedTypes: fileExtArray,
                //allowedTypes: "jpe, jpg, jpeg, gif, png, bmp, ico, svg, svgz, tif, tiff, ai, drw, pct, psp, xcf, psd, raw, webp, pdf",
                acceptFiles: "image/*,application/pdf",
                showPreview: true,
                previewHeight: "100px",
                previewWidth: "100px",
                showDelete: true,
                statusBarWidth: 600,
                dragdropWidth: 600,
                showFileSize: true,
                showFileCounter: true,
                maxFileSize: 2 * 1000 * 1024,
                returnType: "json",
                onLoad: function(obj) {
                    //$("#eventsmessage").html($("#eventsmessage").html() + "<br/>Widget Loaded:");
                },
                /*onSelect: function (files) {
                    //const flist = [];
                    if (files) {
                        for (var i = 0; i < files.length; i++) {
                            flist.push({
                                name: replaceInvalidChars(files[i].name),
                                size: 'NA'
                            });
                            console.log("onSelect : replaced File name : " + flist[i].name);
                        }
                    }
                    files = flist;            
                    //files[0].name;
                    //files[0].size;            
                    //o.onSubmit.call(files);
                    return true; //to allow file submission.
                },
                onSubmit: function (files) {
                    files = flist;
                debugger;
                    for (var i = 0; i < files.length; i++) {
                        //console.log("onSubmit : Files : " + files);
                        //files = replaceInvalidChars(files[0].name);
                        console.log("onSubmit : File name : " + files[i].name);debugger;
                        if (isFileExtensionValid(files)) {
                        $("#eventsmessage").html($("#eventsmessage").html() + "<br/>File : " + files[i].name + " submitted successfully");
                        } else {
                        return false;
                        }
                    }
                },*/
                onSuccess: function(files, data, xhr, pd) {
                    console.log("onSuccess : Files : " + files);
                    files = replaceInvalidChars(files);
                    //for (var i = 0; i < files.length; i++) {
                    //var fileName = data[i].fileName;
                    $("#eventsmessage").html($("#eventsmessage").html() + "<br/>File : " + files + " uploaded successfully");
                    // }
                },
                afterUploadAll: function(obj) {
                    $("#eventsmessage").html($("#eventsmessage").html() + "<br/>All files are uploaded");
                },
                onError: function(files, status, errMsg, pd) {
                    $("#eventsmessage").html($("#eventsmessage").html() + "<br/>Error for: " + JSON.stringify(files));
                },
                onCancel: function(files, pd) {
                    //console.log(pd);
                    $("#eventsmessage").html($("#eventsmessage").html() + "<br/>Canceled  files: " + JSON.stringify(files));
                },
                deleteCallback: function(data, pd) {
                    for (var i = 0; i < data.length; i++) {
                        var filePath = data[i].filePath;
                        var fileName = data[i].fileName;
                        $.post("/bin/uploadTaskAttachment", {
                                op: "delete",
                                fileName: fileName,
                                filePath: filePath
                            },
                            function(resp, textStatus, jqXHR) {
                                console.log("delete operation response : " + typeof resp + resp);
                                $("#eventsmessage").html($("#eventsmessage").html() + "<br/>File : " + fileName + " deleted successfully");
                            });
                    }
                    pd.statusbar.hide();
                }
            });
        },
		error: function(resp, xhr, error, errorThrown) {
    console.log("Error in retrieving getMimeTypesAllowedForTheWorkflow");
   }
    });



});


function getFileExtensions(itemId) {
    const fileExtArray = ["jpe", "jpg", "jpeg", "gif", "png", "bmp", "ico", "svg", "svgz", "tif", "tiff", "ai", "drw", "pct", "psp", "xcf", "psd", "raw", "webp", "pdf"];
    const extension = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase();
    if (!fileExtArray.includes(extension)) {
        return false;
    } else {
        return true;
    }
    debugger;


    }

    function replaceInvalidChars(fileName) {
        fileName = "" + fileName;
        if (fileName) {
            const format = /[`~*+:'?<>|.,&{}#!@$%^=;\[\]\s]/;
            const fileTestPattern = new RegExp(format);
            const result = fileTestPattern.test(fileName);
            if (result === true) {
                const modifiedFileName = fileName.replace(/[.](?=.*[.])/g, "").replace(/\s+/g, "").replace(/`|~|\*|\+|\:|'|\?|<|>|\,|#|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, "");
                console.log("modifiedFileName : " + modifiedFileName);
                return modifiedFileName;
            } else {
                return fileName;
            }
        } else {
            return fileName;
        }
    }