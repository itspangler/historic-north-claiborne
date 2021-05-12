const map5 = L.map('iiif-map5', {
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

const vol1sheet06_1940 = new L.tileLayer.iiif('https://tile.loc.gov/image-services/iiif/service:gmd:gmd401m:g4014m:g4014nm:g03376194002:03376_02_1940-0106/info.json').addTo(map5);

let zoomHome5 = L.Control.zoomHome();
zoomHome5.addTo(map5);
// Map 5 elements

var tremeMarketBank_coords = [
  [-119.6335464421319, 181.57742780366286],
  [-119.82479943045985, 205.0523440743645],
  [-130.21621179627806, 204.9251087558241],
  [-130.34371378849667, 200.72634324399132],
  [-143.4764189870154, 200.53549026618074],
  [-143.5401699831247, 181.32295716658209]
];

var tremeMarketBankPopup = "<h2><b>Treme Market Branch of the Canal-Commercial Trust and Savings Bank</b></h2>" + "<h3>800 North Claiborne</h3>" +
  "<p>This bank opened in 1925 to serve the Treme neighborhood. A headline in the local paper, the <i>Times Picayune</i>, praised it as '<a target='blank' href='https://www.trememarketbranch.com/history'>perhaps the most unique and interesting of the branch banks in the city</a>.' It has undergone various ownership changes through the years, transforming into a leather shop in 1953, and was repurposed as an event space in 2016.</p>" +
  "<img src='images/bank.jpeg' alt='Jazz funeral' width='300px'/>";

var tremeMarketBankPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var tremeMarketBank = L.polygon(tremeMarketBank_coords, {
  color: '#2A689A'
}).addTo(map5);
tremeMarketBank.on('click', function() {
  map5.fitBounds(tremeMarketBank.getBounds());
});
tremeMarketBank.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  tremeMarketBank.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
tremeMarketBank.bindPopup(tremeMarketBankPopup, tremeMarketBankPopup_options);
tremeMarketBank.on('click', function(e) {
  this.openPopup();
});
tremeMarketBank.on('', function(e) {
  this.closePopup();
});

var labranchePharm_coords = [
  [-115.69429687499999, 102.57374999999999],
  [-115.69429687499999, 131.64374999999998],
  [-130.994296875, 131.77124999999998],
  [-130.994296875, 102.82875]
]

var labranchePharmPopup = "<h2><b>LaBranche's Pharmacy</b></h2>" + "<h3>716 North Claiborne</h3>" +
  "<p>According to the <a href='http://amistadresearchcenter.tulane.edu/archon/?p=accessions/accession&id=1125' target='blank'>Amistad Research Center</a>, LaBranche's Drug Store opened in 1907. The Woods Directory below has LaBranche's listed at 716 N. Claiborne, intersecting Orleans Avenue. The location <a href='http://www.creolegen.org/2013/02/11/belfields-pharmacy-1925-1955/' target='blank'>may have moved to 818 N. Claiborne</a> by 1918 (just a block to the right on this same map). Regardless of its absolute location, it was <a href='http://amistadresearchcenter.tulane.edu/archon/?p=accessions/accession&id=1125' target='blank'>fondly remembered</a> by residents and viewed as a fixture in the community.</p>" +
  "<img src='https://ksr-ugc.imgix.net/assets/022/291/060/81c5f1c88f62921bcd37fbe6fe63cb62_original.png?ixlib=rb-2.1.0&w=680&fit=max&v=1534805702&auto=format&frame=1&lossless=true&s=b83301b0d783469a99b87a1899db4c9e' width='300px'>";

var labranchePharmPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var labranchePharm = L.polygon(labranchePharm_coords, {
  color: '#2A689A'
}).addTo(map5);
labranchePharm.on('click', function() {
  map5.fitBounds(labranchePharm.getBounds());
});
labranchePharm.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  labranchePharm.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
labranchePharm.bindPopup(labranchePharmPopup, labranchePharmPopup_options);
labranchePharm.on('click', function(e) {
  this.openPopup();
});
labranchePharm.on('', function(e) {
  this.closePopup();
});

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
