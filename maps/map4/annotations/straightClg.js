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
