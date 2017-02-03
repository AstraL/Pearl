function initMap() {
    var myLatLng = {lat: 49.43697, lng: 32.10042};

    var purpleStyle = [
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#FF007B"
                },
                {
                    "saturation": 59.80000000000001
                },
                {
                    "lightness": 21
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#FF00AF"
                },
                {
                    "saturation": 32.599999999999994
                },
                {
                    "lightness": 20.599999999999994
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#FFAF00"
                },
                {
                    "lightness": 50.80000000000001
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#FFE800"
                },
                {
                    "lightness": 8.600000000000009
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#FFD900"
                },
                {
                    "saturation": 44.79999999999998
                },
                {
                    "lightness": 3.6000000000000085
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#0078FF"
                },
                {
                    "saturation": 24.200000000000003
                },
                {
                    "gamma": 1
                }
            ]
        }
    ];

    var infoContent = '<div id="info-window" class="card">' +
                        '<div class="content content-primary">' +
                            '<h4 class="card-title">Отдел продаж</h4>' +
                            '<p class="card-description">Пн - Пт: 9:00 - 18:00<br>Сб: 11:00 - 15:00</p>' +
                        '</div>'+
                    '</div>';

    var mapBig = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        scrollwheel: false,
        styles: purpleStyle
    });

    var infoWindow = new google.maps.InfoWindow({
        content: infoContent
    });

    var marker = new google.maps.Marker({
        map: mapBig,
        position: myLatLng,
        title: 'Отдел продаж',
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function() {
        infoWindow.open(mapBig, marker);
        mapBig.panTo(myLatLng);
    });
    infoWindow.addListener('domready', function() {
        var iwOuter = $('.gm-style-iw');
        var infoWrap = iwOuter.parent();
    });
}