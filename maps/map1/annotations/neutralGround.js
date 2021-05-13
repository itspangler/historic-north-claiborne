var neutralGround_coord = [
  [-11.3515625, 56.875],
  [-9.6015625, 174.375],
  [-40.1015625, 174.375],
  [-41.3515625, 56.875]
];

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
