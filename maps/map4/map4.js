
var map4 = L.map('iiif-map4', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomdelta: 1,
    scrollWheelZoom: false,
    zoomControl: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.2);

var vol1sheet25_1950 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0025/info.json').addTo(map4);

let zoomHome4 = L.Control.zoomHome();
zoomHome4.addTo(map4);

map4.on('dragend', function(e) {
  this.closePopup();
});

// Map 4 elements

$.when(
  $.getScript( "maps/map4/annotations/palimpsest.js"),
  $.getScript( "maps/map4/annotations/straightClg.js"),
  $.Deferred(function( deferred ){
      $( deferred.resolve );
  })
).done(function(){
});
