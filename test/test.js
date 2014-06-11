casper.test.begin('Disk Golf App', function suite(test) {
    casper.start("http://localhost:8000/html/index.html")
    casper.run(function() {
        this.fill('#enterPlayer', { 'addPlayer': 'Player1' });
        this.click('#addPlayer');
        test.assertSelectorHasText('.player_name', 'Player1');
        test.done();
    });
});
