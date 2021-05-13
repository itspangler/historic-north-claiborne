var becksRest_coord = [
  [-57.55078125, 114.0625],
  [-57.67578125, 124.6875],
  [-93.30078125, 125.4375],
  [-93.30078125, 113.9375]
]

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
becksRest.on('click', function(e) {
  this.openPopup();
});
becksRest.on('', function(e) {
  this.closePopup();
});
