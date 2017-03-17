var salesCoords = {lat: 49.43697, lng: 32.10042};
var purpleStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e0e0e0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e2a4e6"
            }
        ]
    }
];

function contactsMap() {
    var map;
    var marker;
    var investCoords = {lat: 50.4188081, lng: 30.4878974};
    map = new google.maps.Map(document.getElementById("map"), {
        center: salesCoords,
        zoom: 16,
        scrollwheel: false,
        styles: purpleStyle,
        mapTypeControl: false,
        streetViewControl: false
    });

    var infoContent = '<div id="info-window" class="card">' +
        '<div class="content content-primary">' +
        '<h4 class="card-title">Відділ продажу</h4>' +
        '<p class="card-description">Пн - Пт: 9:00 - 18:00<br>Сб: 11:00 - 15:00</p>' +
        '</div>'+
        '</div>';

    var infoWindow = new google.maps.InfoWindow({
        content: infoContent
    });

    marker = new google.maps.Marker({
        map: map,
        position: salesCoords,
        title: 'Відділ продажу',
        animation: google.maps.Animation.DROP,
        icon: 'assets/markers/pearl.png'
    });

    var investMark = new google.maps.Marker({
        map: map,
        position: investCoords,
        icon: '/assets/markers/kya.png'
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
        map.panTo(salesCoords);
    });

    $('#sales-trigger').click(function() {
        map.panTo(salesCoords);
    });

    $('#invest-trigger').click(function(){
        map.panTo(investCoords);
    });
}
function getPlace(map, point, callback) {
    var service = new google.maps.places.PlacesService(map);
    service.getDetails({
        placeId: point.place_id
    }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            place.icon_custom = point.icon;
            callback(place);
        }
    });
}

function transportMap() {
    var map;
    var pearl;
    var points = [
        {
            name: 'Вокзал',
            position: {lat: 49.4259493, lng: 32.0498818},
            icon: 'train.png'
        },
        {
            name: 'ТРЦ "Любава"',
            position: {lat: 49.4450192, lng: 32.0541519},
            icon: 'mall.png'
        }, {
            name: 'ТРЦ "Дніпро-Плаза"',
            position: {lat: 49.4345542, lng: 32.088969},
            icon: 'mall.png'
        },
        {
            name:"ТРЦ DEPO't center",
            position: {lat: 49.4245774, lng: 32.0928937},
            icon: 'mall.png'
        },
        {
            name: 'SportLife',
            position: {lat: 49.437559, lng: 32.1004251},
            icon: 'fitness.png'
        },
        {
            name: 'Спорт Клуб «Матрикс»',
            position: {lat: 49.4362322, lng: 32.0888457},
            icon: 'fitness.png'
        }
    ];

    map = new google.maps.Map(document.getElementById("transport-map"), {
        center: points[5].position,
        zoom: 14,
        mapTypeControl: false,
        scrollwheel: false
    });

    pearl = new google.maps.Marker({
        map: map,
        position: salesCoords,
        animation: google.maps.Animation.DROP,
        icon: 'assets/markers/pearl.png',
        zIndex: 1
    });
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var directionsOptions = {
        preserveViewport: true,
        suppressMarkers: true,
        suppressInfoWindows: true
    };

    var places = [{
        name: 'Вокзал',
        place_id: 'ChIJPTL_RIRL0UARVn0rzvfuYCE',
        icon: 'train.png'
    },{
        name: 'Любава',
        place_id: 'ChIJzWjwN4JM0UARMcjgasbav4I',
        icon: 'mall.png'
    }];
    var infoWindow = new google.maps.InfoWindow();
    for (i = 0; i < places.length; i++) {
        var point = places[i];

        getPlace(map, point, function(place){

            var pointMarker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                animation: google.maps.Animation.DROP,
                icon: 'assets/markers/' + place.icon_custom,
                zIndex: 10
            });
            var placeInfo = "<p><strong>"+ place.name +"</strong>";
            pointMarker.addListener('click', function() {
                infoWindow.close();
                infoWindow.setContent(placeInfo);
                infoWindow.open(map, pointMarker);
                calculateAndDisplayRoute(map, directionsDisplay, directionsService, pearl, pointMarker, directionsOptions);
            });
        });
    }
}

function calculateAndDisplayRoute(map, directionsDisplay, directionsService, origin, destination, options) {

    directionsDisplay.setMap(map);
    directionsDisplay.setOptions(options);
    directionsService.route({
        origin: origin.position,
        destination: destination.position,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


// Map on home page
function mapPort() {
    var pearlPosition = {lat: 49.4361835, lng: 32.1003415};
    var portPosition = {lat: 49.4354895, lng: 32.1019026};
    var map;
    var pearlMarker;
    var portMarker;
    var infoWindow = new google.maps.InfoWindow();
    var panorama;

    map = new google.maps.Map(document.getElementById("map-port"), {
        center: pearlPosition,
        zoom: 16,
        scrollwheel: false
    });
    var places = new google.maps.places.PlacesService(map);
    var portID = 'ChIJMWMU1BFL0UAR8KK5o1MVcuk';
    pearlMarker = new google.maps.Marker({
        map: map,
        position: pearlPosition
    });

    places.getDetails({
        placeId: portID
    }, function(place, status) {
        if(status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(place);
            portMarker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            var content = "<div class='map-place'>" +
                "<h6>"+ place.name +"</h6>" +
                "<span>" + place.address_components[1].long_name + ", "+ place.address_components[0].long_name +"</span>" +
                    "<hr>" +
                "<img src="+ place.photos[0].getUrl({maxHeight: 170}) +" alt="+ place.name +" class='img-responsive'>" +
                "</div>";
            google.maps.event.addListener(portMarker, 'click', function() {
                infoWindow.setContent(content);
                infoWindow.open(map, this);
            });
        }
    });
    panorama = map.getStreetView();

    panorama.setPosition(portPosition);
    panorama.setPov({
        heading: 220,
        pitch:10
    });
    panorama.setVisible(true);

}

