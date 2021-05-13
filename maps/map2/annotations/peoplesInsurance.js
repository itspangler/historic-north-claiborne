var peoplesInsurance_coords = [
  [-193.1015625, 231.875],
  [-193.3515625, 257.625],
  [-203.8515625, 257.875],
  [-203.6015625, 231.875],
];

// create People's insurance popup

var peoplesInsurancePopup = "<h2><b>People's Benevolent Life Insurance</b></h2>" + "<h3>901 North Claiborne</h3>" +
  "<p>In 1909, this building was home to the People's Benevolent (later the People's Industrial) Life Insurance, owned and founded by Walter Cohen and others. People's Benevolent was the second Black industrial insurance company in the state of Louisiana. Cohen has been described as a 'political giant... one of the most influential Creole Republicans in the state of Louisiana' (Davidson 2011, 104).</p><p>Regarding insurance, Michael Crutcher has written that 'the significance of the insurance industry as a source for race leadership can scarcely be overstated' (2010, 56). This was true both <i>formally</i> through the insurance industry, and <i>informally</i> through <a target='blank' href='https://www.neworleans.com/things-to-do/music/history-and-traditions/social-aid-and-pleasure-clubs/mutual'>mutual aid and pleasure clubs</a> that would come to be associated with the New Orleanian traditions of second line parading.</p><p>See the <a target='blank' href='https://artsandculture.google.com/asset/the-weekly-sentinel-vol-1-no-32-the-weekly-sentinel/AgGx_FFbvJeBXg'>Amistad Research Center</a> for a historic advert.";

var peoplesInsurancePopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var peoplesInsurance = L.polygon(peoplesInsurance_coords, {
  color: '#2A689A'
}).addTo(map2);
peoplesInsurance.on('click', function() {
  map2.fitBounds(peoplesInsurance.getBounds());
});
peoplesInsurance.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  peoplesInsurance.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
peoplesInsurance.bindPopup(peoplesInsurancePopup, peoplesInsurancePopup_options);
peoplesInsurance.on('click', function(e) {
  this.openPopup();
});
peoplesInsurance.on('', function(e) {
  this.closePopup();
});
