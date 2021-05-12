var map3 = L.map('iiif-map3', {
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

var vol2sheet07_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0107/info.json').addTo(map3);

let zoomHome3 = L.Control.zoomHome();
zoomHome3.addTo(map3);
// Map 3 elements

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

var mutualAid_coords = [
  [-375.5851171875, 258.50624999999997],
  [-375.84011718749997, 299.94374999999997],
  [-395.73011718749996, 299.30625],
  [-388.4626171875, 257.99625]
]

var mutualAidPopup = "<h2><b>Economy Mutual Aid Hall</b></h2>" + "<h3>1422 Ursulines</h3>" +
  "<p>This building served as the second location for the Economy Society. Founded in 1836, the Economy Society operated for over a century, and exceeded 160 members at its peak. The large, two-story building hosted various banquets and soirees that became central fixtures of the developing jazz culture. Read more at Vol. XVIII of <a target='blank' href='https://jazz.tulane.edu/sites/default/files/jazz/docs/jazz_archivist/Jazz_Archivist_vol18_2004.pdf'><i>The Jazz Archive</i></a>.</p>" +
  "<img src='images/econ-hall.jpg' width='300px'>";

var mutualAidPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var mutualAid = L.polygon(mutualAid_coords, {
  color: '#2A689A'
}).addTo(map3);
mutualAid.on('click', function() {
  map3.fitBounds(mutualAid.getBounds());
});
mutualAid.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  mutualAid.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
mutualAid.bindPopup(mutualAidPopup, mutualAidPopup_options);
mutualAid.on('click', function(e) {
  this.openPopup();
});
mutualAid.on('', function(e) {
  this.closePopup();
});
