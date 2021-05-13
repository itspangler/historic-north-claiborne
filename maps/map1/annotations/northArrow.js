var northArrow1_coord = [
  [-226.1015625, 257.625],
  [-182.1015625, 314.625],
  [-203.8515625, 339.625],
  [-252.3515625, 280.375]
];

var northArrowPopup = "<h2><b>North Arrow</b></h2>" + "<h3>Sanborn Maps</h3>" +
  "<p>Note the direction of the North Arrow on this map. Sanborn maps are not all oriented in the same direction. As you interpret the maps, be advised that some Sanborns are rotated in a different direction (e.g., Exhibits 3 and 4).</p>";

var northArrowPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var northArrow1 = L.polygon(northArrow1_coord, {
  color: '#2A689A'
}).addTo(map1);
northArrow1.on('click', function() {
  map1.fitBounds(northArrow1.getBounds());
});
northArrow1.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  northArrow1.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
northArrow1.bindPopup(northArrowPopup, northArrowPopup_options);
northArrow1.on('click', function(e) {
  this.openPopup();
});
northArrow1.on('', function(e) {
  this.closePopup();
});
