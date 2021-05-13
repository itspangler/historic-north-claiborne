var insuranceGone_coords = [
  [-166.694296875, 259.27125],
  [-166.311796875, 271.00124999999997],
  [-176.63929687499999, 271.38374999999996],
  [-175.874296875, 259.01624999999996]
]

var insuranceGonePopup = "<h2><b>People's Insurance Today</b></h2>" + "<h3>901 North Claiborne</h3>" +
  "<p>The old building of People's Insurance was reclaimed for the construction of I-10:</p>" +
  "<img src='images/gmap.jpg' alt='Google map of 901 N Claiborne' width='200px'/>" +
  "<img src='images/901-claiborne.jpg' alt='Street view' width='200px'/>";

var insuranceGonePopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var insuranceGone = L.polygon(insuranceGone_coords, {
  color: '#2A689A'
}).addTo(map2);
insuranceGone.on('click', function() {
  map2.fitBounds(insuranceGone.getBounds());
});
insuranceGone.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  insuranceGone.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
insuranceGone.bindPopup(insuranceGonePopup, insuranceGonePopup_options);
insuranceGone.on('click', function(e) {
  this.openPopup();
});
insuranceGone.on('', function(e) {
  this.closePopup();
});
