var craigSchool_coord = [
  [-351.9, 227.58749999999998],
  [-351.2625, 200.17499999999998],
  [-352.28249999999997, 200.55749999999998],
  [-352.28249999999997, 185.5125],
  [-372.80999999999995, 184.61999999999998],
  [-372.80999999999995, 183.6],
  [-377.4, 183.345],
  [-377.5275, 184.49249999999998],
  [-415.14, 183.9825],
  [-415.5225, 183.08999999999997],
  [-419.98499999999996, 182.83499999999998],
  [-420.23999999999995, 183.6],
  [-442.29749999999996, 183.345],
  [-442.80749999999995, 198.2625],
  [-443.5725, 198.39],
  [-444.21, 218.40749999999997],
  [-427.635, 218.535],
  [-427.5075, 208.20749999999998],
  [-415.14, 207.9525],
  [-415.0125, 217.3875],
  [-392.7, 217.515],
  [-392.5725, 221.33999999999997],
  [-380.3325, 221.59499999999997],
  [-379.95, 208.9725],
  [-363.885, 209.2275],
  [-363.7575, 214.70999999999998],
  [-371.40749999999997, 214.58249999999998],
  [-371.91749999999996, 227.45999999999998]
];

const craigSchoolPopup = "<h2><b>Joseph A. Craig School</b></h2>" + "<h3>1400 block of St. Philip</h3>" +
  "<p>In a " + "<a target='blank' href='http://www.creolegen.org/2015/01/05/the-history-of-joseph-a-craig-school/'>delightful history </a>" +
  "of the Joseph A. Craig School, Lolita V. Cherrie recounts the complex and contested history of this school for Black children. The school's location changed numerous times over the years, largely due to white backlash against a school for Black children in their neighborhood. By 1927, the St. Philip location housed 1,487 students, a number that would only grow under the leadership of Maude Dedeaux Crocker who served as a teacher and administrator at Craig for over 50 years." +
  "<p>" +
  "<img src='http://www.creolegen.org/wp-content/uploads/2015/01/Craig-School-Faculty-Photo-1024x555.jpg' alt='Beck's Restaurant' width='300px'/>";

var craigSchoolPopup_options = {
  'maxWidth': '300',
  'className': 'custom',
  'keepInView': 'True'
}

var craigSchool = L.polygon(craigSchool_coord, {
  color: '#2A689A'
}).addTo(map3);
craigSchool.on('click', function() {
  map3.fitBounds(craigSchool.getBounds());
});
craigSchool.on('mouseover', function() {
  this.setStyle({
    color: '#add8e6' //or whatever style you wish to use;
  });
  craigSchool.on('mouseout', function() {
    this.setStyle({
      color: '#2A689A'
    })
  });
});
craigSchool.bindPopup(craigSchoolPopup, craigSchoolPopup_options);
craigSchool.on('click', function(e) {
  this.openPopup();
});
craigSchool.on('', function(e) {
  this.closePopup();
});
