var fireStation_coord = [
  [-278.6269770976791, 180.54188386237223],
  [-278.04383147796864, 210.3989395915501],
  [-301.4862853903309, 208.99939010424487],
  [-301.2530271424467, 198.73602719733998],
  [-309.8835823141622, 194.42074961148225],
  [-309.8835823141622, 189.75558465379822],
  [-295.18831269745743, 189.6389555298561],
  [-285.6247245342052, 180.77514211025644],
  [-278.86023534556335, 180.54188386237223]
];

var fireStationPopup = "<h2><b>Fire Station</b></h2>" + "<h3>1542 Villere St.</h3>" +
  "<p>The Fire Department Engine Company No. 44 is labeled prominently on this map sheet. Given that Sanborns were first and foremost risk assessment maps for fire, it should come as no surprise that the fire department is labeled so prominently. The proximity of these buildings to the station itself would likely affect the insurance premiums!</p>";

var fireStationPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var fireStation = L.polygon(fireStation_coord, {
  color: '#2A689A'
}).addTo(map1);
fireStation.on('click', function() {
  map1.fitBounds(fireStation.getBounds());
});
fireStation.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  fireStation.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
fireStation.bindPopup(fireStationPopup, fireStationPopup_options);
fireStation.on('click', function(e) {
  this.openPopup();
});
fireStation.on('', function(e) {
  this.closePopup();
});
