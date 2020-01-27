$( document ).ready(function() {
    var token = $.cookie("token");
    if (!Boolean(token) || token == "null") {
        window.location = "index.html";
    }
    var email = $.cookie("email");
    if (email) {
        $("#displayUserEmail").append(email);
    }
   
});