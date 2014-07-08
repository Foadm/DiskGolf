casper.on("page.error", function(msg, backtrace) {
    this.echo("PAGE ERROR: " + msg);
    for(var i=0, line; line = backtrace[i]; i++) {
        this.echo(line.file + ":" + line.line);
    }
    this.echo("");
});
casper.test.begin('Disk Golf App', function suite(test) {
    casper.start("http://localhost:8000/html/index.html")
    casper.run(function() {
        this.fill('#enterPlayer', { 'addPlayer': 'Player1' });
        this.click('#addPlayer');
        test.assertSelectorHasText('.player_name', 'Player1');
        //this will start the scoring process by displaying the scoring view that includes the hole number, name, current score and and input for this round's score.
        this.click('#start-button');
        test.assertSelectorHasText('.hole', 'Hole');
        test.assertSelectorHasText('.scoring_name', 'Player1');
        test.assertSelectorHasText('.scoring_score', '0');
        this.fill('#scoreInput', {'playerScore': '5'});
        this.click('#input-button');
        test.assertSelectorHasText('.hole', 'Hole #1');
        test.assertSelectorHasText('.scoring_score', '5');

        test.done();
    });
});
