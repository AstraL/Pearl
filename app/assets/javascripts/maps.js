function initMap() {
    var myLatLng = {lat: 49.43697, lng: 32.10042};





    var map;
    var marker;




    if($("#transport-map").length > 0) {
        transportMap(map, myLatLng);



    } else if($("#map").length > 0) {

    }
}
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
                "visibility": "on"
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
        styles: purpleStyle
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
        animation: google.maps.Animation.DROP
    });

    var investMark = new google.maps.Marker({
        map: map,
        position: investCoords
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

function transportMap(map, center) {
    var directionsService = new google.maps.DirectionsService;

    var points = [
        {
            name: 'Вокзал',
            position: {lat: 49.426159, lng: 32.0409623},
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
        }
    ];

    map = new google.maps.Map(document.getElementById("transport-map"), {
        center: center,
        zoom: 14,
        scrollwheel: false
    });

    marker = new google.maps.Marker({
        map: map,
        position: center,
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', function () {
        map.panTo(center);
    });

    var directionsOptions = {
        preserveViewport: true,
        suppressMarkers: true,
        suppressInfoWindows: true
    };
    for (i = 0; i < points.length; i++) {

        var point = points[i];
        var pointMarker = new google.maps.Marker({
            map: map,
            position: point.position,
            animation: google.maps.Animation.DROP,
            icon: 'assets/markers/' + point.icon,
            title: point.name
        });
        directionsService.route({
            origin: marker.position,
            destination: pointMarker.position,
            travelMode: google.maps.TravelMode.DRIVING,
            drivingOptions: {
                departureTime: new Date(),
                trafficModel: google.maps.TrafficModel.PESSIMISTIC
            }
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                var directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
                var routeInfo = new google.maps.InfoWindow();

                directionsRenderer.setOptions(directionsOptions);
                directionsRenderer.setDirections(response);
                console.log(directionsRenderer.getDirections());
/*                pointMarker.routeInfoContent = "<p>" + destinationNames[i] + "</p>" +
                        "<p>"+ response.routes[0].legs[0].distance.text +"</p>"+
                        "<p>"+ response.routes[0].legs[0].duration.text +"</p>";
                routeInfo.setContent(routeName + response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");
                routeInfo.setPosition(response.routes[0].legs[0].end_location);
                routeInfo.open(map);*/
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
}

// Map on home page
function mapPort() {
    var pearlPosition = {lat: 49.4361835, lng: 32.1003415};
    var portPosition = {lat: 49.4354895, lng: 32.1019026};
    var map;
    var pearlMarker;
    var portMarker;
    var infoWindow = new google.maps.InfoWindow();

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
}

