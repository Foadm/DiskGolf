casper.test.begin('Disk Golf App', 2, function suite(test) {
    casper.start("http://localhost:8000/html/index.html", function() {
        test.assertExists('#addPlayer', "Add player button is found");
    });

    casper.then(function() {
        this.fill('#enterPlayer', {
            'addPlayer':    'Player1'
        }, true);
        casper.then(function() {
        });
        this.click('#addPlayer');
        casper.then(function() {
        });
        test.assertSelectorHasText('.player_name', 'Player1');
    });

    casper.run(function() {
        test.done();
    });
});