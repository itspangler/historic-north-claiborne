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
