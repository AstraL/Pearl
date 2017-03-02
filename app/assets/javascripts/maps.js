function initMap() {
    var myLatLng = {lat: 49.43697, lng: 32.10042};

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

    var infoContent = '<div id="info-window" class="card">' +
        '<div class="content content-primary">' +
        '<h4 class="card-title">Відділ продажу</h4>' +
        '<p class="card-description">Пн - Пт: 9:00 - 18:00<br>Сб: 11:00 - 15:00</p>' +
        '</div>'+
        '</div>';

    var map;
    var marker;




    if($("#transport-map").length > 0) {
        transportMap(map, myLatLng);



    } else if($("#map").length > 0) {
        map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 16,
            scrollwheel: false,
            styles: purpleStyle
        });

        var infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });

        marker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            title: 'Відділ продажу',
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
            map.panTo(myLatLng);
        });
    }
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

function calculateAndDisplayRoute(directionsService, origin, destination, map) {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({
        preserveViewport: true,
        suppressMarkers: true,
        suppressInfoWindows: true
    });
    directionsService.route({
        origin: origin.position,
        destination: destination.position,
        travelMode: google.maps.TravelMode.DRIVING,
        drivingOptions: {
            departureTime: new Date(),
            trafficModel: google.maps.TrafficModel.PESSIMISTIC
        }

    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            console.log(response.routes[0].legs[0].distance);
            console.log(response.routes[0].legs[0].duration);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

