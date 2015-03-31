var map, pointarray, heatmap, kmzLayer;
var puntosHeat = [];
var spritePath = "img/pictosmaps.png";
var tam = new google.maps.Size(40,40);

// cargo el csv con los puntos en un array
$.ajax({
    url: "data/puntos.csv",
    async: false,
    success: function (data) {
        arrayDePuntos = $.csv2Array(data);
    },
    dataType: "text",
    complete: function () {
        for (var i = 1 ; i < arrayDePuntos.length ; i++){
          puntosHeat.push( new google.maps.LatLng( arrayDePuntos[i][1] , arrayDePuntos[i][2] ) );
        };
    }
});





function initialize() {


  map = new google.maps.Map(document.getElementById("mapaGoogle"), mapOptions);

  kmzLayer = new google.maps.KmlLayer("http://nlound.github.io/heatmaps/data/zonas.kml", { suppressInfoWindows: true });
  var pointArray = new google.maps.MVCArray(puntosHeat);

  heatmap = new google.maps.visualization.HeatmapLayer({
    radius: 15,  
    scaleRadius: true,
    data: pointArray
  });

  var markers = [];
   for (i = 0; i < puntosHeat.length  ; i++) {  //recontra cuelga el navegador
      var marker = new google.maps.Marker({
        position: puntosHeat[i],
        map: map
    });
  }


  kmzLayer.setMap(map);
  heatmap.setMap(map);
  
}

google.maps.event.addDomListener(window, "load", initialize);



function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}



// Change zoom
// heatmap.set("radius", heatmap.get("radius") ? null : 20);





