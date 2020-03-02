$(document).ready(function () {


    $("#submitBtn").click(function () {
        var valid;	
       
        valid = validateContact();
        if(valid) {
            $("#mail-status").html("Sending message...");
            jQuery.ajax({
                url: "contactForm.php",
                data:'name='+$("#inputName").val()+'&email='+
                $("#inputEmail").val()+'&phone='+
                $("#inputPhone").val()+'&content='+
                $("#inputMessage").val(),
                type: "POST",
                success:function(data){
                    $("#mail-status").html("Your message has been sent successfully");
                    $("#inputName").val("");
                    $("#inputEmail").val("");
                    $("#inputPhone").val("");
                    $("#inputMessage").val("");
                },
                error:function (){
                    $("#mail-status").html("There was an error while processing your message.");
                }
            });
        }
    });

    function validateContact() {
        var valid = true;
        
        if (!$("#inputName").val()) {
            $("#userName-info").html("(required)");
            $("#inputName").css('background-color', '#FFFFDF');
            valid = false;
        } else{
            $("#userName-info").html("");
        }
        if (!$("#inputEmail").val()) {
            $("#userEmail-info").html("(required)");
            $("#inputEmail").css('background-color', '#FFFFDF');
            valid = false;
        } else {
            $("#userEmail-info").html("");
        }
        if (!$("#inputEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            $("#userEmail-info").html("(invalid)");
            $("#inputEmail").css('background-color', '#FFFFDF');
            valid = false;
        }
        if (!$("#inputPhone").val()) {
            $("#userPhone-info").html("(required)");
            $("#inputPhone").css('background-color', '#FFFFDF');
            valid = false;
        } else {
            $("#userPhone-info").html("");
        }
        if (!$("#inputMessage").val()) {
            $("#content-info").html("(required)");
            $("#inputMessage").css('background-color', '#FFFFDF');
            valid = false;
        } else {
            $("#content-info").html("");
        }
        return valid;
    }


});