// instantiate map 1

const map1 = L.map('iiif-map1', {
    center: [-201.40625, 180.5],
    crs: L.CRS.Simple,
    // zoom: 0,
    zoomSnap: 0,
    zoomDelta: 1,
    scrollWheelZoom: false,
    zoomControl: false,
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.1);

const vol1sheet16_1950 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0016/info.json').addTo(map1);

const zoomHome1 = L.Control.zoomHome();
zoomHome1.addTo(map1);

map1.on('dragend', function(e) {
  this.closePopup();
});

// Return lat lng on click

// LOAD MAP 1 ELEMENTS

$.when(
  $.getScript( "maps/map1/annotations/becksRest.js"),
  $.getScript( "maps/map1/annotations/circleGrocery.js"),
  $.getScript( "maps/map1/annotations/neutralGround.js"),
  $.getScript( "maps/map1/annotations/northArrow.js"),
  $.getScript( "maps/map1/annotations/fireStation.js"),
  $.Deferred(function( deferred ){
      $( deferred.resolve );
  })
).done(function(){
});
