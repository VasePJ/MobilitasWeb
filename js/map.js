$(document).ready(function () {
    var map = null;
    var markers = new Array();
    var markerCluster;
    initMap();
    showPinsByCategory("bus-stop");

    function initMap() {
        var myLatLng = { lat: 35.8984976, lng: 14.5044102 };
        map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 11,
            center: myLatLng,
        });
    }

    function showPinsByCategory(category) {
        var data = { cat: category, show_gps: "1" };
        showPins(data);
    }

    function showPinsByVendor(vendor) {
        var data = { vendor: vendor, show_gps: "1" };
        showPins(data);
    }

    function showPins(data) {
        clearPins();
        $.ajax({
            url: "https://mobilitas.fewgoodgeeks.com/wp-json/services/destinations",
            type: "GET",
            data: data,
            success: function (value) {
                if (!value || value.length === 0) {
                    return;
                }
                var lat, lng, marker;
                for (let i = 0; i < value.length; i++) {
                    if (value[i] && value[i].map) {
                        lat = value[i].map.lat;
                        lng = value[i].map.lng;
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

        });
    }

    function clearPins() {
        markerCluster = null;
        markers = new Array();
        initMap();
    }

    let busMapButton = document.getElementById("bus-map-button");
    busMapButton.addEventListener('click', function(){
        showPinsByCategory("bus-stop");
    });

    // let bikeMapButton = document.getElementById("bike-map-button");
    // bikeMapButton.addEventListener('click', function(){
    //     showPinsByCategory("bike-stop");
    // });

    let ferryMapButton = document.getElementById("ferry-map-button");
    ferryMapButton.addEventListener('click', function(){
        showPinsByCategory("ferry-stop");
    });

    // let publicFerryVendorButton = document.getElementById("public-ferry-vendor-btn");
    // publicFerryVendorButton.addEventListener('click', function () {
    //     showPinsByVendor("public-transport-malta");
    // });

    let gozoChannelFerryButton = document.getElementById("gozo-channel-ferry-vendor-btn");
    gozoChannelFerryButton.addEventListener('click', function () {
        showPinsByVendor("gozo-channel");
    });

    let valletaFerryVendorButton = document.getElementById("valleta-ferry-vendor-btn");
    valletaFerryVendorButton.addEventListener('click', function () {
        showPinsByVendor("valletta-ferry-service");
    });

    let cycleMapButton = document.getElementById("cycle-map-button");
    cycleMapButton.addEventListener('click', function () {
        showPinsByCategory("cycle-stop");
    });

    let ecoCycleVendorButton = document.getElementById("eco-cycle-vendor-btn");
    ecoCycleVendorButton.addEventListener('click', function () {
        showPinsByVendor("eco-bikes-malta");
    });

    let beGreenCycleVendor = document.getElementById("be-green-cycle-vendor-btn");
    beGreenCycleVendor.addEventListener('click', function () {
        showPinsByVendor("be-green-malta");
    });

    let electricCarButton = document.getElementById("electric-map-button");
    electricCarButton.addEventListener('click', function () {
        showPinsByCategory("electric-car-stop");
    });

    let rollingGeeksVendorButton = document.getElementById("rolling-geeks-vendor-btn");
    rollingGeeksVendorButton.addEventListener('click', function () {
        showPinsByVendor("rolling-geeks");
    });

    let smarterCarVendor = document.getElementById("smarter-car-vendor-btn");
    smarterCarVendor.addEventListener('click', function () {
        showPinsByVendor("smarter-car-rentals");
    });

    let shareMapButton = document.getElementById("share-map-button");
    shareMapButton.addEventListener('click', function () {
        showPinsByCategory("car-share");
    });
    let boltShareVendorButton = document.getElementById("bolt-share-vendor-btn");
    boltShareVendorButton.addEventListener('click', function () {
        showPinsByVendor("bolt");
    });
    let goToShareVendorButton = document.getElementById("goto-share-vendor-btn");
    goToShareVendorButton.addEventListener('click', function () {
        showPinsByVendor("go-to");
    });

    let maltaAirportTaxiButton = document.getElementById("taxi-map-button");
    maltaAirportTaxiButton.addEventListener('click', function () {
        showPinsByCategory("taxi-stop");
    });

    let airportTaxiVendorButton = document.getElementById("airport-taxi-vendor-btn");
    airportTaxiVendorButton.addEventListener('click', function () {
        showPinsByVendor("malta-airport");
    });

});






