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
        zoom: 11,
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
$(document).ready(function() {$
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
                        $.cookie('token', response.token, { expires: 7, path: '/' });
                        $.cookie('email', response.user_email, { expires: 7, path: '/' });
                        window.location = "myDashboard.html";
                    }
                },
                error: function(response) {
                    if (Boolean(response)) {
                        $('#wrongUserOrPass').show();
                        $('#wrongUserOrPass').text('Wrong username or password! Please try again.');
                    }
                }
            });

        }


    });

    // get texts
    $.ajax({
        type: 'GET',
        url: 'https://mobilitas.fewgoodgeeks.com/wp-json/services/get-texts',
        data: { get_param: 'value' },
        dataType: 'json',
        success: function (data) {
            $('.privacy').append(data.privacy_policy);
            $('.terms').append(data.terms_and_conditions);
            $('.aboutUsText').append(data.about_us_text);
        }
    });

});
// token expire fn
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


