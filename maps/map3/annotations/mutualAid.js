var mutualAid_coords = [
  [-375.5851171875, 258.50624999999997],
  [-375.84011718749997, 299.94374999999997],
  [-395.73011718749996, 299.30625],
  [-388.4626171875, 257.99625]
]

var mutualAidPopup = "<h2><b>Economy Mutual Aid Hall</b></h2>" + "<h3>1422 Ursulines</h3>" +
  "<p>This building served as the second location for the Economy Society. Founded in 1836, the Economy Society operated for over a century, and exceeded 160 members at its peak. The large, two-story building hosted various banquets and soirees that became central fixtures of the developing jazz culture. Read more at Vol. XVIII of <a target='blank' href='https://jazz.tulane.edu/sites/default/files/jazz/docs/jazz_archivist/Jazz_Archivist_vol18_2004.pdf'><i>The Jazz Archive</i></a>.</p>" +
  "<img src='images/econ-hall.jpg' width='300px'>";

var mutualAidPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var mutualAid = L.polygon(mutualAid_coords, {
  color: '#2A689A'
}).addTo(map3);
mutualAid.on('click', function() {
  map3.fitBounds(mutualAid.getBounds());
});
mutualAid.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  mutualAid.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
mutualAid.bindPopup(mutualAidPopup, mutualAidPopup_options);
mutualAid.on('click', function(e) {
  this.openPopup();
});
mutualAid.on('', function(e) {
  this.closePopup();
});
