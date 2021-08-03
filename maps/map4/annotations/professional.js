var professional_coords = [
  [-388.5920076913074, 202.0765495051128],
  [-388.5920076913074, 211.54378688095815],
  [-386.089174821831, 211.43496806054614],
  [-385.980356001419, 216.33181497908683],
  [-388.3743700504834, 216.22299615867482],
  [-388.5920076913074, 220.4669301547434],
  [-395.33877455685234, 220.68456779556746],
  [-395.44759337726435, 219.16110430979924],
  [-401.1061720386892, 219.16110430979924],
  [-401.1061720386892, 225.79905235493217],
  [-395.9916874793244, 225.79905235493217],
  [-395.1211369160283, 226.56078409781628],
  [-395.1211369160283, 229.71652988976473],
  [-396.4269627609725, 230.9135369142969],
  [-396.4269627609725, 233.08991332253723],
  [-390.1154711770756, 233.52518860418527],
  [-390.1154711770756, 232.54581922047714],
  [-380.9746902624663, 232.54581922047714],
  [-380.9746902624663, 239.72786136767016],
  [-416.2319880759593, 239.72786136767016],
  [-416.6672633576074, 202.94710006840893],
  [-409.9204964920624, 202.51182478676085],
  [-409.7028588512384, 194.67686971709574],
  [-400.34444029580504, 194.3504132558597],
  [-400.45325911621705, 199.57371663563643],
  [-399.14743327127286, 199.57371663563643],
  [-399.03861445086085, 202.40300596634884]
]

var professionalPopup = "<h2><b>Louisiana Undertaking Company</b></h2>" + "<h3>1449 N. Claiborne Avenue</h3>" +
  "<p>According to the '<a target='blank' href='http://cahpexhibit.georgetown.domains/exhibits/show/global-highways/two'>Claiborne Avenue History Project</a>', this building labeled 'undertaker' was home to the Louisiana Undertaking Company. This company seems to have been founded around 1940 by '<a target='blank' href='http://www.creolegen.org/2015/08/20/the-dejoies-of-new-orleans-part-2-of-2/'>Prudhomme Dejoie</a>', and is notable for a '<a target='blank' href='https://casetext.com/case/louisiana-undertaking-v-louisiana-state-bd-of-em'>1950 court case</a>' involving the use of 'cappers' or 'steerers' – paid representatives who would 'steer' clients toward one company over another.</p>" +
  "<p>Today, this building is home to Professional Funeral Services.</p>";

var professionalPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var professional = L.polygon(professional_coords, {
  color: '#2A689A'
}).addTo(map4);
professional.on('click', function() {
  map4.fitBounds(professional.getBounds());
});
professional.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  professional.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
professional.bindPopup(professionalPopup, professionalPopup_options);
professional.on('click', function(e) {
  this.openPopup();
});
professional.on('', function(e) {
  this.closePopup();
});
