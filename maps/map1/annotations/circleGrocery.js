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
// console.log(circleGrocery.getBounds());
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
