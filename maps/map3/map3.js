var map3 = L.map('iiif-map3', {
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

var vol2sheet07_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0107/info.json').addTo(map3);

let zoomHome3 = L.Control.zoomHome();
zoomHome3.addTo(map3);

map3.on('dragend', function(e) {
  this.closePopup();
});

// Map 3 elements

$.when(
  $.getScript( "maps/map3/annotations/funeralHome.js"),
  $.getScript( "maps/map3/annotations/mutualAid.js"),
  $.getScript( "maps/map3/annotations/tremeCommCenter.js"),
  $.getScript( "maps/map3/annotations/craigSchool.js"),
  $.Deferred(function( deferred ){
      $( deferred.resolve );
  })
).done(function(){
});
