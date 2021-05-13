
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
