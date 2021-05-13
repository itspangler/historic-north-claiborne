var club_coords = [
  [-77.44429687499999, 221.65875],
  [-77.69929687499999, 256.59375],
  [-87.26179687499999, 257.10375],
  [-87.26179687499999, 221.53124999999997]
]

var clubPopup = "<h2><b>Club</b></h2>" + "<h3>941 North Claiborne</h3>" +
  "<p>This building at the corner of St. Philip and North Claiborne is simply listed 'Club' on the map. It's not entirely clear what this means, but we do know that North Claiborne was a bustling venue for music clubs and jazz halls in the early 20th century. Similarly, mutual aid and social clubs were common fixtures of the community at this time, and remain so today. However, without examining tax assessor rolls, tax ledgers, or building plans, it is difficult to say why the Sanborn surveyor felt that the 'Club' designation was appropriate for this building. By the 1950 survey, it had been pasted over, and the 'Club' title was gone.</p>";

var clubPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var club = L.polygon(club_coords, {
  color: '#2A689A'
}).addTo(map2);
club.on('click', function() {
  map2.fitBounds(club.getBounds());
});
club.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  club.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
club.bindPopup(clubPopup, clubPopup_options);
club.on('click', function(e) {
  this.openPopup();
});
club.on('', function(e) {
  this.closePopup();
});
