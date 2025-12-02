$(function() {    
    $("#errordiv").hide();
    $("#successdiv").hide();
    $("#inputPassword").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#loginButton").click();
        }
    })

    $("#loginButton").click(function(e) {
        e.preventDefault();        
        localStorage.removeItem('signedUserEmail');
        localStorage.removeItem('signedUserFullName');
        var valid = validateForm();        
        if (valid) {
            var data = {
            "externalId": $("#userId").val(),
            "externalPassword": $("#inputPassword").val(),
            "ldapProvider": "ldap"            
            };          

            $.ajax({
                type : "POST",
                url : '/bin/authenticateLDAPUser',
                data : data,
                dataType : "json",
                success : function (resp) {
                    if(resp.auth == "success"){
                        $("#errordiv").hide();
                        $("#successdiv").text("LDAP Authentication is successful");
                        $("#successdiv").show();
                        //$("#userEmail").val(resp.userEmail);
                        //$("#userFullName").val(resp.userName);
                        localStorage.setItem('signedUserEmail', resp.userEmail);
                        localStorage.setItem('signedUserFullName', resp.userName);
                        console.log("signedUserEmail : " + localStorage.getItem('signedUserFullName'));
                        console.log("signedUserFullName : " + localStorage.getItem('signedUserFullName'));
                    }else if(resp.auth == "invalid"){
                        $("#errordiv").show();
                        $("#successdiv").hide();
                        $("#errordiv").text("Please enter a valid User Name"); 
                    }else if(resp.auth == "failed"){
                        $("#errordiv").show();
                        $("#successdiv").hide();
                        $("#errordiv").text("User Name and Password are mismatched"); 
                    }
                },
                error : function (resp, xhr, error, errorThrown) {
                    $("#errordiv").show();
                    $("#successdiv").hide();
                    $("#errordiv").text("Server Error : Please try later");                    
                }
            });      
        } else {
            $("#errordiv").show();
            $("#successdiv").hide();
            $("#errordiv").text("Please enter a valid User Name and Password");
        }
    });
});

// Function for validating Login form
var validateForm = function() {
    var valid = false;
    if (($("#userId").val().length > 0) || ($("#inputPassword").val().length > 0)) {
        valid = true;
    }
    return valid;
}