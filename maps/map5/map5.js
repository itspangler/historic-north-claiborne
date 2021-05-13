const map5 = L.map('iiif-map5', {
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

const vol1sheet06_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0106/info.json').addTo(map5);

let zoomHome5 = L.Control.zoomHome();
zoomHome5.addTo(map5);

map5.on('dragend', function(e) {
  this.closePopup();
});

// Map 5 elements

$.when(
  $.getScript( "maps/map5/annotations/tremeMarketBank.js"),
  $.getScript( "maps/map5/annotations/labranchePharm.js"),
  $.getScript( "maps/map5/annotations/historicTremeMark.js"),
  $.getScript( "maps/map5/annotations/tremeMarketBldg.js"),
  $.Deferred(function( deferred ){
      $( deferred.resolve );
  })
).done(function(){
});
