
var map4 = L.map('iiif-map4', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    zoomSnap: 0,
    zoomdelta: 1,
    scrollWheelZoom: false,
    zoomControl: false
  })
  .setMaxBounds(maxBounds)
  .setView([-238.8125, 169], 0.2);

var vol1sheet25_1950 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376195001:03376_01_1950-0025/info.json').addTo(map4);

let zoomHome4 = L.Control.zoomHome();
zoomHome4.addTo(map4);
// Map 4 elements

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

var palimpsest_coords = [
  [-398.234296875, 68.91375],
  [-397.08679687499995, 96.19874999999999],
  [-431.51179687499996, 97.85624999999999],
  [-431.89429687499995, 69.67875]
]

var palimpsestPopup = "<h2><b>Sanborn map palimpsests</b></h2>" + "<h3>A feature of Sanborn maps</h3>" +
  "<p>Strictly defined, the word 'palimpsest' refers to a piece of writing in which the original text has been effaced to make room for new writing, but of which traces still remain. Look closely at the map canvsas highlighted here, and you'll notice that something's off: at 1413 North Claiborne, someone has pasted a sheet of paper on top of the Sanborn map. These '<a target'blank' href='https://books.google.com/books?id=fOSWLh-6UZsC&pg=PA231&lpg=PA231&dq=sanborn+map+palimpsest&source=bl&ots=o-HUTDkJWi&sig=ACfU3U3gEwNSRarkYFI9CXhIzQ7DOl88pQ&hl=en&sa=X&ved=2ahUKEwj4oqj9l5bqAhUyRTABHZgiB_0Q6AEwCXoECAoQAQ#v=onepage&q=sanborn%20map%20palimpsest&f=false'>paste-on additions</a>' were a common practice of the Sanborn map company's surveyors. Instead of re-surveying the entire city every time a map needed to be updated, the surveyor would save precious time and simply paste updates on top of the existing maps. In doing so, they produced what Jack Swab has called <a target='blank' href='https://aag.secure-abstracts.com/AAG%20Annual%20Meeting%202018/abstracts-gallery/13930'>Sanborn map palimpsests</a>, wherein the maps accumulated additions, but a reader could still apprehend traces of the original.</p>" +
  "<p>How many palimpsests can you identify within this address? What about across all 6 exhibits?</p>";

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
