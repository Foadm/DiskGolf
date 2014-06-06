var casper = require('casper').create();

// given i am on the homepage
casper.start('/Users/foadm/Projects/DiskGolf/html/index.html', function() {
	// when i press "Add Player"
	this.click("#addPlayer")

	// and i fill in "name" with "micah"
	// and i click OK

	// when i press "Add Player"
	// and i fill in "name" with "foad"
	// and i click OK

	// and i fill in "number of holes" with "18"
	// and I press "submit"

	// then i should see "micah"
	// and i should see "foad"

	// when I fill in "micah" with "3"
	// and I fill in "foad" with "5"
	// and i click "submit scores"

	// then i should see "micah"
	// and i should see "foad"
});


