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

// MAP 2 ELEMENTS

// Set coordinates for map 2 elements

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

// var club_coords = [
//   [-77.44429687499999, 221.65875],
//   [-77.69929687499999, 256.59375],
//   [-87.26179687499999, 257.10375],
//   [-87.26179687499999, 221.53124999999997]
// ]
//
// var clubPopup = "<h2><b>Clubs along North Claiborne</b></h2>" + "<h3>941 North Claiborne</h3>" +
//   "<p></p>";
//
// var clubPopup_options = {
//   'maxWidth': '300',
//   'className': 'custom',
//   'keepInView': 'True'
// }
//
// var club = L.polygon(club_coords, {
//   color: '#2A689A'
// }).addTo(map2);
// club.on('click', function() {
//   map2.fitBounds(club.getBounds());
// });
// club.on('mouseover', function() {
//   this.setStyle({
//     color: '#add8e6' //or whatever style you wish to use;
//   });
//   club.on('mouseout', function() {
//     this.setStyle({
//       color: '#2A689A'
//     })
//   });
// });
// club.bindPopup(clubPopup, clubPopup_options);
// club.on('click', function(e) {
//   this.openPopup();
// });
// club.on('', function(e) {
//   this.closePopup();
// });

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
