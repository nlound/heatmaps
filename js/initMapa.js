var map, pointarray, heatmap, kmzLayer, markerCluster;
var puntosHeat = [];

// cargo el csv con los puntos en un array
$.ajax({
    url: "data/cuidacoches.csv",
    async: false,
    success: function(data) {
        arrayDePuntos = $.csv2Array(data);
    },
    dataType: "text",
    complete: function() {
        for (var i = 1; i < arrayDePuntos.length; i++) {
            puntosHeat.push(new google.maps.LatLng(arrayDePuntos[i][1], arrayDePuntos[i][0]));
        };
    }
});


function initialize() {

    var icono = new google.maps.MarkerImage("img/cuidacoches.png");
    
    map = new google.maps.Map(document.getElementById("mapaGoogle"), mapOptions);

    kmzLayer = new google.maps.KmlLayer("http://nlound.github.io/trapitos/data/comunas.kml", {
        suppressInfoWindows: true
    });
    var pointArray = new google.maps.MVCArray(puntosHeat);

    heatmap = new google.maps.visualization.HeatmapLayer({
        radius: 15,
        scaleRadius: true,
        data: pointArray
    });

    var clusteredMarkers = [];
    var markers = [];
    for (i = 0; i < puntosHeat.length; i++) { 
        var marker = new google.maps.Marker({
            position: puntosHeat[i],
            map: map,
            icon: icono
        });
        clusteredMarkers.push(marker);
    }

    var clusterSettings = {gridSize: 25, maxZoom: 17};

    markerCluster = new MarkerClusterer(map, clusteredMarkers, clusterSettings);

    kmzLayer.setMap(map);
    heatmap.setMap(map);

}

google.maps.event.addDomListener(window, "load", initialize);



function changeOpacity() {
    heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

function goHome() {
    markerCluster.fitMapToMarkers();
}



// Change zoom
// heatmap.set("radius", heatmap.get("radius") ? null : 20);
