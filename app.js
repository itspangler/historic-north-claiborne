// Add maps

var maxBounds = [
  [189.1875, -249],
  [207.1875, 641],
  [-682.8125, 611],
  [-680.8125, -299]
];

var map1 = L.map('iiif-map1', {
    center: [-201.40625, 180.5],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomDelta: 1,
    scrollWheelZoom: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.1);

var vol1sheet16_1950 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0016/info.json').addTo(map1);

var map2 = L.map('iiif-map2', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomdelta: 1,
    scrollWheelZoom: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.2);

var vol2sheet25_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0125/info.json').addTo(map2);

var map3 = L.map('iiif-map3', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomdelta: 1,
    scrollWheelZoom: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.2);

var vol2sheet07_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0107/info.json').addTo(map3);

var map4 = L.map('iiif-map4', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomdelta: 1,
    scrollWheelZoom: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.2);

var vol1sheet25_1950 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0025/info.json').addTo(map4);

var map5 = L.map('iiif-map5', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomdelta: 1,
    scrollWheelZoom: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.2);

var vol1sheet06_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0106/info.json').addTo(map5);

// var map6 = L.map('iiif-map6', {
//     center: [0, 0],
//     crs: L.CRS.Simple,
//     zoom: 0,
//     zoomSnap: 0,
//     zoomdelta: 1,
//     scrollWheelZoom: false
//   })
//   .setMaxBounds(maxBounds)
//   .setView([-238.8125, 169], 0.2);
//
// var vol1sheet06_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0025/info.json').addTo(map6);

// Get lat longs

// map1.on('click', function(e) {
//   var marker = new L.marker(e.latlng).addTo(map1);
//   var latlng = map1.mouseEventToLatLng(e.originalEvent);
//   console.log(latlng.lat + ', ' + latlng.lng);
// });
//
// map2.on('click', function(e) {
//   var marker = new L.marker(e.latlng).addTo(map2);
//   var latlng = map2.mouseEventToLatLng(e.originalEvent);
//   console.log(latlng.lat + ', ' + latlng.lng);
// });
//
// map3.on('click', function(e) {
//   var marker = new L.marker(e.latlng).addTo(map5);
//   var latlng = map3.mouseEventToLatLng(e.originalEvent);
//   console.log(latlng.lat + ', ' + latlng.lng);
// });
//
// map4.on('click', function(e) {
//   var marker = new L.marker(e.latlng).addTo(map4);
//   var latlng = map4.mouseEventToLatLng(e.originalEvent);
//   console.log(latlng.lat + ', ' + latlng.lng);
// });
//
// map5.on('click', function(e) {
//   var marker = new L.marker(e.latlng).addTo(map5);
//   var latlng = map4.mouseEventToLatLng(e.originalEvent);
//   console.log(latlng.lat + ', ' + latlng.lng);
// });
//
// map6.on('click', function(e) {
//   var marker = new L.marker(e.latlng).addTo(map6);
//   var latlng = map4.mouseEventToLatLng(e.originalEvent);
//   console.log(latlng.lat + ', ' + latlng.lng);
// });

// MAP 1 ELEMENTS

// Set coordinates for Map 1 polygons

var becksRest_coord = [
  [-57.55078125, 114.0625],
  [-57.67578125, 124.6875],
  [-93.30078125, 125.4375],
  [-93.30078125, 113.9375]
]

var circleGrocery_coord = [
  [-51.05078125, 251.8125],
  [-49.92578125, 300.3125],
  [-62.80078125, 303.1875],
  [-76.42578125, 303.3125],
  [-88.17578125, 300.6875],
  [-92.80078125, 299.1875],
  [-92.92578125, 288.9375],
  [-101.05078125, 288.6875],
  [-101.30078125, 254.1875],
  [-88.05078125, 253.9375],
  [-88.17578125, 252.5625]
];

var neutralGround_coord = [
  [-11.3515625, 56.875],
  [-9.6015625, 174.375],
  [-40.1015625, 174.375],
  [-41.3515625, 56.875]
];

var northArrow1_coord = [
  [-226.1015625, 257.625],
  [-182.1015625, 314.625],
  [-203.8515625, 339.625],
  [-252.3515625, 280.375]
];

// Create Circle food store popup options and polygon

var circleFoodPopup = "<h2><b>Circle Food Store</b></h2>" + "<h3>1518 St. Bernard</h3>" +
  "<p>This famous grocery at St. Bernard Circle was a hub of activity among locals. As <a href='https://www.wwno.org/post/monster-claiborne-avenue-and-after-interstate' target='blank'>Dodie Smith-Simmons recalls</a>, “Anything you needed you could find at the Circle Food Store. Vendors would come in and sell their produce, their live chickens and turtles and whatever.” Read more from local historian Alvin Jackson, owner of the <a href='https://www.tremespetitjazzmuseum.com/' target='blank'>Treme Petit Jazz Museum</a>, <a href='https://www.wwltv.com/article/news/local-historian-who-grew-up-around-st-bernard-avenue-discusses-changes-coming-to-historic-circle-foods-store/289-dea68638-038d-422c-9dea-19955e82d8f1' target='blank'>weighing in on</a> the Food Store's recent reopening." +
  "<p>" +
  "<img src='https://static.wixstatic.com/media/8ea545_0920b120b8544dccb54062df232b2e14~mv2.jpg/v1/fill/w_679,h_530,al_c,q_90,usm_0.66_1.00_0.01/8ea545_0920b120b8544dccb54062df232b2e14~mv2.webp' alt='maptime logo gif' width='200px'/>";

var circleFoodPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var circleGrocery = L.polygon(circleGrocery_coord, {
  color: '#2A689A'
}).addTo(map1);
circleGrocery.on('click', function() {
  map1.fitBounds(circleGrocery.getBounds());
});
circleGrocery.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  circleGrocery.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
circleGrocery.bindPopup(circleFoodPopup, circleFoodPopup_options);
circleGrocery.on('click', function(e) {
  this.openPopup();
});
circleGrocery.on('', function(e) {
  this.closePopup();
});

// Create neutral ground popup options and polygon

var neutralGroundPopup = "<h2><b>Neutral Ground</b></h2>" + "<h3>All along North Claiborne Avenue</h3>" +
  "<p>As " + "<a target='blank' href='https://64parishes.org/neutral-ground'>Richard Campanella explains</a>" +
  ", the term 'neutral ground' derives from the unique colonial politics of New Orleans in the early 19th century. The neutral ground of North Claiborne housed the longest continuous row of live oak trees in the country, and constituted a space for community gatherings, even large enough for children to play baseball." +
  "<p>" +
  "<img src='https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/a/cc/accd2865-12eb-5fc2-b37f-cce01de24b1d/5d13c56c7278d.image.jpg?crop=286%2C286%2C47%2C0&resize=1200%2C1200&order=crop%2Cresize' alt='CLaiborne live oaks' width='200px'/>";

var neutralGroundPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var neutralGround = L.polygon(neutralGround_coord, {
  color: '#2A689A'
}).addTo(map1);
neutralGround.on('click', function() {
  map1.fitBounds(neutralGround.getBounds());
});
neutralGround.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  neutralGround.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
neutralGround.bindPopup(neutralGroundPopup, neutralGroundPopup_options);
neutralGround.on('click', function(e) {
  this.openPopup();
});
neutralGround.on('', function(e) {
  this.closePopup();
});

// Create Beck's restaurant popup

var becksRestPopup = "<h2><b>Beck's Restaurant</b></h2>" + "<h3>1520 North Claiborne</h3>" +
  "<p>The " + "<a target='blank' href='https://digitalcollections.nypl.org/items/51514e90-856e-0132-01a0-58d385a7b928/book#page/33/mode/2up'>Negro Motorist Green Book </a>" +
  "was a vital travel resource for Black Americans on the road. Published between 1936 to 1966 by Victor Hugo Green, the Green Book provided a variety of friendly inns, restaurants, drugstores, and more that Black folks could safely patronize during their travels. Beck's may refer to The Joy Ship Restaurant, owned by Matthew P. Beck, Sr., which <a target='blank' href='https://www.xlibris.com/BookStore/BookDetails/737427-sitting-on-the-galerie-and-playing-on-the-banquette'>Roland Davidson</a> describes as a 'popular restaurant... on North Claiborne Avenue in the Treme.' See the Green Book entry from 1951 below:" +
  "<p>" +
  "<img src='images/becks-restaurant.png' alt='Beck's Restaurant' width='300px'/>";

var becksRestPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var becksRest = L.polygon(becksRest_coord, {
  color: '#2A689A'
}).addTo(map1);
becksRest.on('click', function() {
  map1.fitBounds(becksRest.getBounds());
});
becksRest.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  becksRest.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
becksRest.bindPopup(becksRestPopup, becksRestPopup_options);
neutralGround.on('click', function(e) {
  this.openPopup();
});
becksRest.on('', function(e) {
  this.closePopup();
});

// Create north arrow popup

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

// Map 3 elements

var tremeCommCenter_coords = [
  [-347.2576279527559, 40.23228346456693],
  [-348.21825787401576, 163.05905511811025],
  [-444.32849409448824, 160.4448818897638],
  [-443.32849409448824, 39.53937007874016]
]

var tremeCommCenterPopup = "<h2><b>A Block of the Treme</b></h2>" + "<h3>Bounded by N. Villere, St. Philip, Marais, and Dumaine</h3>" +
  "<p>At the time of this Sanborn map survey, this residential block of Treme was home to dozens of families. The buildings are overwhelmingly labeled 'D' for 'Dwelling.' Inspecting the map reveals that many of the structures are cut through with a dashed line, indicative of the <a target='blank' href='https://prcno.org/the-geography-of-the-shotgun-house/'>double shotgun house architecture</a> that is distinctive of New Orleans.</p>" +
  "<p>Today, this block of Treme is entirely occupied by the Treme Recreation Community Center. The Community Center's construction was part of a broader regime of urban renewal projects inflicted on Treme in the 1960s and '70s. Following the federally funded construction of I-10, Treme was targeted for two significant public-private projects: Louis Armstrong Park and Mahalia Jackson Theater. Facing near categorical opposition from the community at the time, these projects together displaced hundreds of Treme residents. For more information, see Chapter 5 of Michael Crutcher's book, <i><a target='blank' href='https://ugapress.org/book/9780820335957/treme/'>Treme</a></i>.";

var tremeCommCenterPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var tremeCommCenter = L.polygon(tremeCommCenter_coords, {
  color: '#2A689A'
}).addTo(map3);
tremeCommCenter.on('click', function() {
  map3.fitBounds(tremeCommCenter.getBounds());
});
tremeCommCenter.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  tremeCommCenter.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
tremeCommCenter.bindPopup(tremeCommCenterPopup, tremeCommCenterPopup_options);
tremeCommCenter.on('click', function(e) {
  this.openPopup();
});
tremeCommCenter.on('', function(e) {
  this.closePopup();
});

var funeralHome_coords = [
  [-167.42578125, 186.4375],
  [-167.67578125, 227.8125],
  [-178.92578125, 227.8125],
  [-178.92578125, 186.3125]
];

var funeralHomePopup = "<h2><b>Charbonnet Funeral Home</b></h2>" + "<h3>1615 St. Philip</h3>" +
  "<p>This building, labeled 'UNDRTKR' on the map, represents the Charbonnet Funeral Home. Founded in 1883, Charbonnet Funeral Home '<a target='blank' href='https://acloserwalknola.com/places/charbonnet-labat-glapion-funeral-home/#:~:text=Founded%20in%201883%20by%20members,remains%20as%20vital%20as%20ever'>has been a pillar of the Treme neighborhood for generations</a>' and remains an operational business. During the 1960s, the Charbonnet family were vocal advocates against the construction of the I-10 overpass.</p>" +
  "<img src='images/tambourne-and-fan-funeral-1977.jpg' alt='Jazz funeral' width='300px'/>";

var funeralHomePopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var funeralHome = L.polygon(funeralHome_coords, {
  color: '#2A689A'
}).addTo(map3);
funeralHome.on('click', function() {
  map3.fitBounds(funeralHome.getBounds());
});
funeralHome.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  funeralHome.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
funeralHome.bindPopup(funeralHomePopup, funeralHomePopup_options);
funeralHome.on('click', function(e) {
  this.openPopup();
});
funeralHome.on('', function(e) {
  this.closePopup();
});

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

// Map 4 elements

var straightClg_coords = [
  [-373.8515625, 101.125],
  [-373.6015625, 117.875],
  [-420.8515625, 118.625],
  [-420.6015625, 101.875]
];

var straightClgPopup = "<h2><b>Straight University Boarding House and Dining Hall</b></h2>" + "<h3>1423 North Claiborne</h3>" +
  "<p>In 2009, the Preservation Resource Center of New Orleans (PRC) acquired the property at 1423 North Claiborne, and to their surprise discovered it to be one of the last remaining buildings associated with Straight University (SU). Founded in 1869, SU provided higher education to Black folks following the Civil War. <a target='blank' href='https://prcno.org/prc-revitalizes-last-standing-building-new-orleans-original-african-american-university/'>Read more about the PRC's restoration efforts</a>.</p>" +
  "<img src='images/straightuni.jpg' alt='Jazz funeral' width='300px'/>";

var straightClgPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var straightClg = L.polygon(straightClg_coords, {
  color: '#2A689A'
}).addTo(map4);
straightClg.on('click', function() {
  map4.fitBounds(straightClg.getBounds());
});
straightClg.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  straightClg.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
straightClg.bindPopup(straightClgPopup, straightClgPopup_options);
straightClg.on('click', function(e) {
  this.openPopup();
});
straightClg.on('', function(e) {
  this.closePopup();
});

var palimpsest_coords = [
  [-398.234296875, 68.91375],
  [-397.08679687499995, 96.19874999999999],
  [-431.51179687499996, 97.85624999999999],
  [-431.89429687499995, 69.67875]
]

var palimpsestPopup = "<h2><b>Sanborn map palimpsests</b></h2>" + "<h3>A feature of Sanborn maps</h3>" +
  "<p>Strictly defined, the word 'palimpsest' refers to a piece of writing in which the original text has been effaced to make room for new writing, but of which traces still remain. Look closely at the map canvsas highlighted here, and you'll notice that something's off: at 1413 North Claiborne, someone has pasted a sheet of paper on top of the Sanborn map. These '<a target'blank' href='https://books.google.com/books?id=fOSWLh-6UZsC&pg=PA231&lpg=PA231&dq=sanborn+map+palimpsest&source=bl&ots=o-HUTDkJWi&sig=ACfU3U3gEwNSRarkYFI9CXhIzQ7DOl88pQ&hl=en&sa=X&ved=2ahUKEwj4oqj9l5bqAhUyRTABHZgiB_0Q6AEwCXoECAoQAQ#v=onepage&q=sanborn%20map%20palimpsest&f=false'>paste-on additions</a>' were a common practice of the Sanborn map company's surveyors. Instead of re-surveying the entire city every time a map needed to be updated, the surveyor would save precious time and simply paste updates on top of the existing maps. In doing so, they produced what Jack Swab has called <a target='blank' href='https://aag.secure-abstracts.com/AAG%20Annual%20Meeting%202018/abstracts-gallery/13930'>Sanborn map palimpsests</a>, wherein the maps accumulated additions, but a reader could still apprehend traces of the original.</p>" +
  "<p>How many palimpsests can you identify within this address? What about across all 6 exhibits?</p>";

var palimpsestPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var palimpsest = L.polygon(palimpsest_coords, {
  color: '#2A689A'
}).addTo(map4);
palimpsest.on('click', function() {
  map4.fitBounds(palimpsest.getBounds());
});
palimpsest.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  palimpsest.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
palimpsest.bindPopup(palimpsestPopup, palimpsestPopup_options);
palimpsest.on('click', function(e) {
  this.openPopup();
});
palimpsest.on('', function(e) {
  this.closePopup();
});

// Map 5 elements

var tremeMarketBank_coords = [
  [-119.6335464421319, 181.57742780366286],
  [-119.82479943045985, 205.0523440743645],
  [-130.21621179627806, 204.9251087558241],
  [-130.34371378849667, 200.72634324399132],
  [-143.4764189870154, 200.53549026618074],
  [-143.5401699831247, 181.32295716658209]
];

var tremeMarketBankPopup = "<h2><b>Treme Market Branch of the Canal-Commercial Trust and Savings Bank</b></h2>" + "<h3>800 North Claiborne</h3>" +
  "<p>This bank opened in 1925 to serve the Treme neighborhood. A headline in the local paper, the <i>Times Picayune</i>, praised it as '<a target='blank' href='https://www.trememarketbranch.com/history'>perhaps the most unique and interesting of the branch banks in the city</a>.' It has undergone various ownership changes through the years, transforming into a leather shop in 1953, and was repurposed as an event space in 2016.</p>" +
  "<img src='images/bank.jpeg' alt='Jazz funeral' width='300px'/>";

var tremeMarketBankPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var tremeMarketBank = L.polygon(tremeMarketBank_coords, {
  color: '#2A689A'
}).addTo(map5);
tremeMarketBank.on('click', function() {
  map5.fitBounds(tremeMarketBank.getBounds());
});
tremeMarketBank.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  tremeMarketBank.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
tremeMarketBank.bindPopup(tremeMarketBankPopup, tremeMarketBankPopup_options);
tremeMarketBank.on('click', function(e) {
  this.openPopup();
});
tremeMarketBank.on('', function(e) {
  this.closePopup();
});

var labranchePharm_coords = [
  [-115.69429687499999, 102.57374999999999],
  [-115.69429687499999, 131.64374999999998],
  [-130.994296875, 131.77124999999998],
  [-130.994296875, 102.82875]
]

var labranchePharmPopup = "<h2><b>LaBranche's Pharmacy</b></h2>" + "<h3>716 North Claiborne</h3>" +
  "<p>According to the <a href='http://amistadresearchcenter.tulane.edu/archon/?p=accessions/accession&id=1125' target='blank'>Amistad Research Center</a>, LaBranche's Drug Store opened in 1907. The Woods Directory below has LaBranche's listed at 716 N. Claiborne, intersecting Orleans Avenue. The location <a href='http://www.creolegen.org/2013/02/11/belfields-pharmacy-1925-1955/' target='blank'>may have moved to 818 N. Claiborne</a> by 1918 (just a block to the right on this same map). Regardless of its absolute location, it was <a href='http://amistadresearchcenter.tulane.edu/archon/?p=accessions/accession&id=1125' target='blank'>fondly remembered</a> by residents and viewed as a fixture in the community.</p>" +
  "<img src='https://ksr-ugc.imgix.net/assets/022/291/060/81c5f1c88f62921bcd37fbe6fe63cb62_original.png?ixlib=rb-2.1.0&w=680&fit=max&v=1534805702&auto=format&frame=1&lossless=true&s=b83301b0d783469a99b87a1899db4c9e' width='300px'>";

var labranchePharmPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var labranchePharm = L.polygon(labranchePharm_coords, {
  color: '#2A689A'
}).addTo(map5);
labranchePharm.on('click', function() {
  map5.fitBounds(labranchePharm.getBounds());
});
labranchePharm.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  labranchePharm.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
labranchePharm.bindPopup(labranchePharmPopup, labranchePharmPopup_options);
labranchePharm.on('click', function(e) {
  this.openPopup();
});
labranchePharm.on('', function(e) {
  this.closePopup();
});

var historicTremeMark_coords = [
  [-235.72359375, 80.4525],
  [-235.72359375, 92.94749999999999],
  [-331.60359374999996, 92.6925],
  [-331.09359374999997, 79.6875]
]

var historicTremeMarkPopup = "<h2><b>Original Location of Treme Market</b></h2>" + "<h3>Orleans Avenue neutral ground</h3>" +
  "<p>Starting in the early 19th century, the neutral ground at Orleans Avenue hosted the original Treme Market. Although it was described as dilapidated by the 1930s, it functioned as a <a target='blank' href='https://www.trememarketbranch.com/history'>hub of social and commercial activity</a> and helped to create the conditions for other businesses at the Orleans and North Claiborne intersection to flourish.</p>" +
  "<img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Treme_Market_Arch_2_New_Orleans.jpg' width='300px'>";

var historicTremeMarkPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var historicTremeMark = L.polygon(historicTremeMark_coords, {
  color: '#2A689A'
}).addTo(map5);
historicTremeMark.on('click', function() {
  map5.fitBounds(historicTremeMark.getBounds());
});
historicTremeMark.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  historicTremeMark.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
historicTremeMark.bindPopup(historicTremeMarkPopup, historicTremeMarkPopup_options);
historicTremeMark.on('click', function(e) {
  this.openPopup();
});
historicTremeMark.on('', function(e) {
  this.closePopup();
});

var tremeMarketBldg_coords = [
  [-298.96359375, 24.3525],
  [-298.96359375, 45.5175],
  [-278.56359375, 45.772499999999994],
  [-278.56359375, 66.4275],
  [-309.41859374999996, 67.1925],
  [-309.16359374999996, 24.862499999999997]
]

var tremeMarketBldgPopup = "<h2><b>Historic Treme Market</b></h2>" + "<h3>1508-1516 Orleans</h3>" +
  "<p>New Orleans has a vibrant market culture that dates back to the 18th century. The original Treme Market was located on the neutral ground of Orleans Avenue, just across from this location at 1508 Orleans. At its peak, as <a href='https://ugapress.org/book/9780820353555/creole-italian/' target='blank'>Justin Nystrom</a> has observed, the Treme Market was one of the only markets that rivaled the size and scope of the famous French Market. The Treme Market bustled with activity between its completion in 1933 and the public market system's declassification in 1946; according to an <a href='https://www.nps.gov/nr/feature/places/pdfs/16000711.pdf' target='blank'>application for its listing on the National Register of Historic Places</a>, the Market had sixteen stalls and bore great cultural significance that extended beyond the Treme neighborhood and into the city's 'changing philosophy of how food marketing sites should look and function.'</p>";

var tremeMarketBldgPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var tremeMarketBldg = L.polygon(tremeMarketBldg_coords, {
  color: '#2A689A'
}).addTo(map5);
tremeMarketBldg.on('click', function() {
  map5.fitBounds(tremeMarketBldg.getBounds());
});
tremeMarketBldg.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  tremeMarketBldg.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
tremeMarketBldg.bindPopup(tremeMarketBldgPopup, tremeMarketBldgPopup_options);
tremeMarketBldg.on('click', function(e) {
  this.openPopup();
});
tremeMarketBldg.on('', function(e) {
  this.closePopup();
});

//
