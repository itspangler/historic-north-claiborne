var palimpsest_coords = [
  [-398.234296875, 68.91375],
  [-397.08679687499995, 96.19874999999999],
  [-431.51179687499996, 97.85624999999999],
  [-431.89429687499995, 69.67875]
]

var palimpsestPopup = "<h2><b>Sanborn map palimpsests</b></h2>" + "<h3>A feature of Sanborn maps</h3>" +
  "<p>Strictly defined, the word 'palimpsest' refers to a piece of writing in which the original text has been effaced to make room for new writing, but of which traces still remain. Look closely at the map canvsas highlighted here, and you'll notice that something's off: at 1413 North Claiborne, someone has pasted a sheet of paper on top of the Sanborn map. These '<a target'blank' href='https://books.google.com/books?id=fOSWLh-6UZsC&pg=PA231&lpg=PA231&dq=sanborn+map+palimpsest&source=bl&ots=o-HUTDkJWi&sig=ACfU3U3gEwNSRarkYFI9CXhIzQ7DOl88pQ&hl=en&sa=X&ved=2ahUKEwj4oqj9l5bqAhUyRTABHZgiB_0Q6AEwCXoECAoQAQ#v=onepage&q=sanborn%20map%20palimpsest&f=false'>paste-on additions</a>' were a common practice of the Sanborn map company's surveyors. Instead of re-surveying the entire city every time a map needed to be updated, the surveyor would save precious time and simply paste updates on top of the existing maps. In doing so, they produced what Jack Swab has called <a target='blank' href='https://aag.secure-abstracts.com/AAG%20Annual%20Meeting%202018/abstracts-gallery/13930'>Sanborn map palimpsests</a>, wherein the maps accumulated additions, but a reader could still apprehend traces of the original.</p>" +
  "<p>How many palimpsests can you identify within this address? What about across all 5 exhibits?</p>";

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
