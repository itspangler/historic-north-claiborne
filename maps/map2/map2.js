const map2 = L.map('iiif-map2', {
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

const vol2sheet25_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0125/info.json').addTo(map2);

let zoomHome2 = L.Control.zoomHome();
zoomHome2.addTo(map2);

map2.on('dragend', function(e) {
  this.closePopup();
});

// MAP 2 ELEMENTS

// Set coordinates for map 2 elements
$.when(
  $.getScript( "maps/map2/annotations/peoplesInsurance.js"),
  $.getScript( "maps/map2/annotations/insuranceGone.js"),
  $.getScript( "maps/map2/annotations/club.js"),
  $.Deferred(function( deferred ){
      $( deferred.resolve );
  })
).done(function(){
});
