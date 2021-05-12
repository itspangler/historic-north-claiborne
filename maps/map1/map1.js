const map1 = L.map('iiif-map1', {
    center: [-201.40625, 180.5],
    crs: L.CRS.Simple,
    // zoom: 0,
    zoomSnap: 0,
    zoomDelta: 1,
    scrollWheelZoom: false,
    zoomControl: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.1);

const vol1sheet16_1950 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0016/info.json').addTo(map1);

let zoomHome1 = L.Control.zoomHome();
zoomHome1.addTo(map1);

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
