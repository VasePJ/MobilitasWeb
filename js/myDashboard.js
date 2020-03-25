$( document ).ready(function() {
    var savedLocations = new Array();
    var map = null;
    var markers = new Array();
    var markerCluster;
    var token = $.cookie("token");
    if (!Boolean(token) || token == "null") {
        window.location = "index.html";
    }
    var email = $.cookie("email");
    if (email) {
        $("#displayUserEmail").append(email);
    }

    var parsed = parseJwt(token);
    if (!parsed || !parsed.data || !parsed.data.user) {
        window.location = "index.html";
    }
    var userId = parsed.data.user.id;
    
    initMap();
    $.ajax({
        url: 'https://mobilitas.fewgoodgeeks.com/wp-json/services/get-user-info/' + userId,
        type: 'get',
        data: { show_gps: 1 },
        beforeSend: function (xhr) {   //Include the bearer token in header
            xhr.setRequestHeader("Authorization", 'Bearer ' + token);
        },
        success: function (response) {
            if (Boolean(response)) {
               savedLocations = response.saved_locations;
               showPins(savedLocations);
               showExpandableLocations(savedLocations);
            }
        },
        error: function (response) {
            if (Boolean(response)) {
               alert("Error retrieving user info");
            }
        }
    });

    function showPins(savedLocations) {
        var lat, lng, marker;
        for (let i = 0; i < savedLocations.length; i++) {
            if (savedLocations[i] && savedLocations[i].location) {
                lat = savedLocations[i].location.lat;
                lng = savedLocations[i].location.lng;
                if (lat && lng && map) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                    });
                    markers.push(marker);
                }
            }
        }

        markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }

    function showExpandableLocations(savedLocations) {
        //
        for (let i = 0; i < savedLocations.length; i++) {
            $('#locations-container').append(`<div class="expandableLocation">
                            <button class="text-left expandLocationBtn" type="button" data-toggle="collapse" data-target="#location-description-${i}" aria-expanded="false" aria-controls="collapseExample">
                                    ${savedLocations[i].title} - ${savedLocations[i].description}
                            </button>
                            <div class="collapse" id="location-description-${i}">
                                <div class="expandedText">
                                    <ul>
                                        <li>${savedLocations[i].location.address}</li>
                                        <li>${savedLocations[i].location.city}</li>
                                        <li>${savedLocations[i].location.country}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`);
        }
    }

    function initMap() {
        var myLatLng = { lat: 35.8984976, lng: 14.5044102 };
        map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 11,
            center: myLatLng,
        });
    }
   
});

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};