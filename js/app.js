//Transport Panels
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".panel");
// on click event run animation 
function onTabClick(event) {
    setTimeout(() => {
        const navElement = document.getElementsByClassName("transport-options-nav")[0];
        const navHeight = navElement.clientHeight;
        const navWidth = navElement.clientWidth;
        console.log('tab', tab);
        let activeLeftX = 0;
        let activeRightX = 0;
        for (let i = 0; i < tab.length; i++) {
            const elementWidth = tab[i].clientWidth;
            if (tab[i].classList.contains('active')) {
                activeRightX = activeLeftX + elementWidth;
                break;
            }
            activeLeftX += elementWidth;
        }
        animateNavOutline(navHeight, navWidth, activeLeftX - 2, activeRightX);
    }, 0);
}
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick);
}
let buttons = document.getElementsByTagName('button');
///MAP
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
///Display Vendor Info Transport Options
let vendorBtn = document.getElementsByClassName('vendorBtn');
let i;

function showVendorInfo() {
    this.nextElementSibling.classList.toggle("showVendorInfo");
}

for (let i = 0; i < vendorBtn.length; i++) {
    vendorBtn[i].addEventListener('click', showVendorInfo);
}
// Location section
const locTabs = document.querySelectorAll(".loctabs");
const locTab = document.querySelectorAll(".locTab");
const paNel = document.querySelectorAll(".paNel");

// function tabClick(event) {
//   // deactivate existing active tabs and panel
//   for (let i = 0; i < locTab.length; i++) {
//     locTab[i].classList.remove("active");
//   }
//   for (let i = 0; i < paNel.length; i++) {
//     paNel[i].classList.remove("active");
//   }
//   // activate new tabs and panel
//   event.target.classList.add('active');
//   let classString = event.target.getAttribute('data-target');
//   console.log(classString);
//   document.getElementById('locPanels').getElementsByClassName(classString)[0].classList.add("active");
// }
// for (let i = 0; i < locTab.length; i++) {
//   locTab[i].addEventListener('click', tabClick);
// }
// transport option animation
function animateNavOutline(navHeight, navWidth, activeLeftX, activeRightX) {

    const activeBottomY = 1;
    const speed = 5;

    var firstBottomElem = document.getElementById("animate-first-bottom");
    var firstVerticalElem = document.getElementById("animate-first-vertical");
    var topElem = document.getElementById("animate-top");
    var secondVerticalElem = document.getElementById("animate-second-vertical");
    var secondBottomElem = document.getElementById("animate-second-bottom");

    firstBottomElem.style.width = "0px";
    firstVerticalElem.style.height = "0px";
    topElem.style.width = "0px";
    secondVerticalElem.style.height = "0px";
    secondBottomElem.style.width = "0px";

    firstBottomElem.style.bottom = activeBottomY + "px";
    $.cookie
    firstVerticalElem.style.left = activeLeftX + "px";
    firstVerticalElem.style.bottom = activeBottomY + "px";
    topElem.style.bottom = navHeight + "px";
    topElem.style.left = activeLeftX + "px";
    secondVerticalElem.style.bottom = navHeight + "px";
    secondVerticalElem.style.left = activeRightX + "px";
    secondBottomElem.style.bottom = activeBottomY + "px";
    secondBottomElem.style.left = activeRightX + "px";

    var posX = 0;
    posY = 0;
    var currentState = 1;
    var id = setInterval(frame, 1);

    function frame() {

        switch (currentState) {
            case 1:
                posX += speed;
                if (posX <= activeLeftX) {
                    firstBottomElem.style.width = posX + "px";
                } else {
                    currentState++;
                }
                break;

            case 2:
                if (firstBottomElem.style.width !== activeLeftX + "px") {
                    firstBottomElem.style.width = activeLeftX + "px";
                }
                posY += speed;
                if (posY <= navHeight) {
                    firstVerticalElem.style.height = posY + "px";
                } else {
                    currentState++;
                }
                break;

            case 3:
                if (firstVerticalElem.style.height !== (navHeight - activeBottomY) + "px") {
                    firstVerticalElem.style.height = (navHeight - activeBottomY) + "px";
                }
                posX += speed;
                if (posX <= activeRightX) {
                    topElem.style.width = (posX - activeLeftX) + "px";
                } else {
                    currentState++;
                }
                break;

            case 4:
                if (topElem.style.width !== (activeRightX - activeLeftX) + "px") {
                    topElem.style.width = (activeRightX - activeLeftX) + "px";
                }
                posY -= speed;
                if (posY >= activeBottomY) {
                    secondVerticalElem.style.bottom = posY + "px";
                    secondVerticalElem.style.height = (navHeight - posY) + "px";
                } else {
                    currentState++;
                }
                break;

            case 5:
                if (secondVerticalElem.style.height !== (navHeight - activeBottomY) + "px") {
                    secondVerticalElem.style.height = (navHeight - activeBottomY) + "px";
                    secondVerticalElem.style.bottom = (activeBottomY + 2) + "px";
                }
                posX += speed;
                if (posX <= navWidth) {
                    secondBottomElem.style.width = (posX - activeRightX) + "px";
                } else {
                    if (secondBottomElem.style.width !== (navWidth - activeRightX) + "px") {
                        secondBottomElem.style.width = (navWidth - activeRightX) + "px";
                    }
                    clearInterval(id);
                }
                break;

            default:
                clearInterval(id);
                break;
        }

    }
}

// Location tab animation
function onTabClickLocation(event) {
    setTimeout(() => {
        const navElement = document.getElementsByClassName("location-options-nav")[0];
        const navHeight = navElement.clientHeight;
        const navWidth = navElement.clientWidth;

        let activeLeftX = 0;
        let activeRightX = 0;
        for (let i = 0; i < locTab.length; i++) {
            const elementWidth = locTab[i].clientWidth;
            if (locTab[i].classList.contains('active')) {
                activeRightX = activeLeftX + elementWidth;
                break;
            }
            activeLeftX += elementWidth;
        }
        animateNavOutlineLocation(navHeight, navWidth, activeLeftX - 2, activeRightX);
    }, 0);

}
for (let i = 0; i < locTab.length; i++) {
    locTab[i].addEventListener('click', onTabClickLocation);
}

function animateNavOutlineLocation(navHeight, navWidth, activeLeftX, activeRightX) {

    const activeBottomY = 0;
    const speed = 5;

    var firstBottomElem = document.getElementById("animate-first-bottom-location");
    var firstVerticalElem = document.getElementById("animate-first-vertical-location");
    var topElem = document.getElementById("animate-top-location");
    var secondVerticalElem = document.getElementById("animate-second-vertical-location");
    var secondBottomElem = document.getElementById("animate-second-bottom-location");

    firstBottomElem.style.width = "0px";
    firstVerticalElem.style.height = "0px";
    topElem.style.width = "0px";
    secondVerticalElem.style.height = "0px";
    secondBottomElem.style.width = "0px";

    firstBottomElem.style.bottom = activeBottomY + "px";
    firstVerticalElem.style.left = activeLeftX + "px";
    firstVerticalElem.style.bottom = activeBottomY + "px";
    topElem.style.bottom = navHeight + "px";
    topElem.style.left = activeLeftX + "px";
    secondVerticalElem.style.bottom = navHeight + "px";
    secondVerticalElem.style.left = activeRightX + "px";
    secondBottomElem.style.bottom = activeBottomY + "px";
    secondBottomElem.style.left = activeRightX + "px";

    var posX = 0;
    posY = 0;
    var currentState = 1;
    var id = setInterval(frame, 1);

    function frame() {

        switch (currentState) {
            case 1:
                posX += speed;
                if (posX <= activeLeftX) {
                    firstBottomElem.style.width = posX + "px";
                } else {
                    currentState++;
                }
                break;

            case 2:
                if (firstBottomElem.style.width !== activeLeftX + "px") {
                    firstBottomElem.style.width = activeLeftX + "px";
                }
                posY += speed;
                if (posY <= navHeight) {
                    firstVerticalElem.style.height = posY + "px";
                } else {
                    currentState++;
                }
                break;

            case 3:
                if (firstVerticalElem.style.height !== (navHeight - activeBottomY) + "px") {
                    firstVerticalElem.style.height = (navHeight - activeBottomY) + "px";
                }
                posX += speed;
                if (posX <= activeRightX) {
                    topElem.style.width = (posX - activeLeftX) + "px";
                } else {
                    currentState++;
                }
                break;

            case 4:
                if (topElem.style.width !== (activeRightX - activeLeftX) + "px") {
                    topElem.style.width = (activeRightX - activeLeftX) + "px";
                }
                posY -= speed;
                if (posY >= activeBottomY) {
                    secondVerticalElem.style.bottom = posY + "px";
                    secondVerticalElem.style.height = (navHeight - posY) + "px";
                } else {
                    currentState++;
                }
                break;

            case 5:
                if (secondVerticalElem.style.height !== (navHeight - activeBottomY) + "px") {
                    secondVerticalElem.style.height = (navHeight - activeBottomY) + "px";
                    secondVerticalElem.style.bottom = (activeBottomY + 2) + "px";
                }
                posX += speed;
                if (posX <= navWidth) {
                    secondBottomElem.style.width = (posX - activeRightX) + "px";
                } else {
                    if (secondBottomElem.style.width !== (navWidth - activeRightX) + "px") {
                        secondBottomElem.style.width = (navWidth - activeRightX) + "px";
                    }
                    clearInterval(id);
                }
                break;

            default:
                clearInterval(id);
                break;
        }

    }
}
$(document).ready(function() {
    // show and hide logged in user
    var token = $.cookie("token");
    if (Boolean(token) && token != "null") {
        $('#logedInUser').show();
        $('#notLoggedInUser').hide();
    } else {
        $('#logedInUser').hide();
        $('#notLoggedInUser').show();
    }
    //  log out logged in user
    $("#logOutUser").click(function() {
        var date = new Date();
        date.setTime(date.getTime() - 1000);
        $.cookie('token', { path: '/' }, { expires: date });
        $.cookie('email', { path: '/' }, { expires: date });
        window.location = "index.html";
    })

    // log in to dashboard
    $("#logInBtn").click(function() {
        // get user email and pass
        event.preventDefault();
        var username = $("#eMail").val();
        if (Boolean(username)) {
            username = username.trim();
        }
        var password = $("#pass").val();
        if (Boolean(password)) {
            password = password.trim();
        }
        //  post user emai and pass to server(success response and error response)
        if (Boolean(username) && Boolean(password)) {
            $.ajax({
                url: 'https://mobilitas.fewgoodgeeks.com/wp-json/jwt-auth/v1/token',
                type: 'post',
                data: { username: username, password: password },
                success: function(response) {
                    if (Boolean(response)) {
                        console.log('success response', response);
                        $.cookie('token', response.token, { expires: 7, path: '/' });
                        $.cookie('email', response.user_email, { expires: 7, path: '/' });
                        window.location = "myDashboard.html";
                    }
                },
                error: function(response) {
                    if (Boolean(response)) {
                        console.log('error response', response);
                        $('#wrongUserOrPass').show();
                        $('#wrongUserOrPass').text('Wrong username or password! Please try again.');
                    }
                }
            });

        }


    });



    // update user define fn below

    // display vendor locations on map
    $("#displayBusVendorBtn").click(function() {
        event.preventDefault();

        $.getJSON("https://mobilitas.fewgoodgeeks.com/wp-json/services/routes/", function(result) {
            console.log(result);
            $.each(result, function(i, field) {

                var myObj = JSON.parse(i);
                console.log(field.id);
                var destinationLink = "https://mobilitas.fewgoodgeeks.com/wp-json/services/route/" + field.id;
                console.log(destinationLink);
                $.getJSON(destinationLink, function(result) {
                    console.log("djsdhfjskdf", result);
                });




            });
        });

        // $.getJSON("https://mobilitas.fewgoodgeeks.com/wp-json/services/destination/1454", function(result){
        // 	console.log(result);
        // });




    });

    // send form
   
   
    $("#submitBtn").click( function () { 
        var valid;	
        console.log("click");
        // valid = validateContact();
        // if(valid) {
        //     jQuery.ajax({
        //         url: "contact_mail.php",
        //         data:'userName='+$("#userName").val()+'&userEmail='+
        //         $("#userEmail").val()+'&subject='+
        //         $("#subject").val()+'&content='+
        //         $(content).val(),
        //         type: "POST",
        //         success:function(data){
        //             $("#mail-status").html(data);
        //         },
        //         error:function (){}
        //     });
        // }
    } );

    function validateContact() {
        var valid = true;	
        $(".demoInputBox").css('background-color','');
        $(".info").html('');
        if(!$("#userName").val()) {
            $("#userName-info").html("(required)");
            $("#userName").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#userEmail").val()) {
            $("#userEmail-info").html("(required)");
            $("#userEmail").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            $("#userEmail-info").html("(invalid)");
            $("#userEmail").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#subject").val()) {
            $("#subject-info").html("(required)");
            $("#subject").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#content").val()) {
            $("#content-info").html("(required)");
            $("#content").css('background-color','#FFFFDF');
            valid = false;
        }
        return valid;
    }


});
// token expire fn
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}