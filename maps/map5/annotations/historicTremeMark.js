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
