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
