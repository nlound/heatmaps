/* 
 * Map Styles bounds, center and options - V0.1
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://opensource.org/licenses/MIT
 * http://www.gnu.org/licenses/gpl-2.0.html
 */

var centro = new google.maps.LatLng(-34.614546, -58.433523); // center of the map

/*
 * NO EDITAR DEBAJO DE ESTA LINEA
 */


var mapOptions = {
    zoom: 12, // nivel de zoom inicial
    center: centro,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: 14,
    minZoom: 12,
    scaleControl: true,
    panControl: false,
    zoomControl: true,
    styles:
        [{
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "visibility": "on"
        }, {
            "hue": "#00ffee"
        }, {
            "saturation": -26
        }, {
            "color": "#bfd0da"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [{
            "hue": "#ff6600"
        }, {
            "lightness": -100
        }, {
            "color": "#ff3e3c"
        }, {
            "saturation": -63
        }, {
            "weight": 1.8
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "stylers": [{
            "gamma": 4.33
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "gamma": 3.1
        }, {
            "lightness": 100
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ccdac2"
        }, {
            "saturation": -11
        }, {
            "lightness": 65
        }, {
            "gamma": 1.07
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "administrative.locality",
        "stylers": [{
            "lightness": 39
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [{
            "lightness": 39
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "lightness": -5
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#808080"
        }, {
            "lightness": 95
        }]
    }, {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [{
            "color": "#808080"
        }, {
            "lightness": 95
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
            "saturation": -100
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.locality",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }]
};
