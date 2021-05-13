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
