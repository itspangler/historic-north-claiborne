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
