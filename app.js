const maxBounds = [
  [189.1875, -249],
  [207.1875, 641],
  [-682.8125, 611],
  [-680.8125, -299]
];
$.when(
  $.getScript("maps/map1/map1.js"),
  $.getScript("maps/map2/map2.js"),
  $.getScript("maps/map3/map3.js"),
  $.getScript("maps/map4/map4.js"),
  $.getScript("maps/map5/map5.js"),
  // $.Deferred(function(deferred) {
  //   $(deferred.resolve);
  // })
).done(function() {
  let maps = [map1, map2, map3, map4, map5];
  for (var i = 0; i < maps.length; i++) {
    maps[i].on('click', function(e) {
      console.log(e.latlng.lat + ", " + e.latlng.lng)
    })
  }
});
