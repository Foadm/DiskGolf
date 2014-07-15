casper.on("page.error", function(msg, backtrace) {
    this.echo("PAGE ERROR: " + msg);
    for(var i=0, line; line = backtrace[i]; i++) {
        this.echo(line.file + ":" + line.line);
    }
    this.echo("");
});
casper.test.begin('Disk Golf App', function suite(test) {
    casper.start("http://localhost:8000/index.html")
    casper.run(function() {
        this.fill('#enterPlayer', { 'addPlayer': 'Player1' });
        this.click('#addPlayer');
        this.fill('#enterPlayer', { 'addPlayer': 'Player2' });
        this.click('#addPlayer');
        this.fill('#enterPlayer', { 'addPlayer': 'Player3' });
        this.click('#addPlayer');
        test.assertSelectorHasText('.initial_players > tr:nth-child(4) > .player_name', 'Player1');
        test.assertSelectorHasText('.initial_players > tr:nth-child(3) > .player_name', 'Player2');
        test.assertSelectorHasText('.initial_players > tr:nth-child(2) > .player_name', 'Player3');

        //this will start the scoring process by displaying the scoring view that includes the hole number, name, current score and and input for this round's score.
        this.click('#start-button');
        test.assertSelectorHasText('.hole', 'Hole #1');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(4) > .scoring_name', 'Player1');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(3) > .scoring_name', 'Player2');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(2) > .scoring_name', 'Player3');

        test.assertSelectorHasText('.scoring-body > tr:nth-child(4) > .scoring_score', '0');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(3) > .scoring_score', '0');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(2) > .scoring_score', '0');

        //this.fill('#scoreInput', {'playerScore': '5'});
        this.fill('.scoring-body > tr:nth-child(4) > .score-field > .scoreInput', {'playerScore': '1'});
        this.fill('.scoring-body > tr:nth-child(3) > .score-field > .scoreInput', {'playerScore': '2'});
        this.fill('.scoring-body > tr:nth-child(2) > .score-field > .scoreInput', {'playerScore': '3'});
        this.click('#input-button');
        test.assertSelectorHasText('.hole', 'Hole #2');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(4) > .scoring_score', '1');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(3) > .scoring_score', '2');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(2) > .scoring_score', '3');
        /// #2
        this.fill('.scoring-body > tr:nth-child(4) > .score-field > .scoreInput', {'playerScore': '2'});
        this.fill('.scoring-body > tr:nth-child(3) > .score-field > .scoreInput', {'playerScore': '3'});
        this.fill('.scoring-body > tr:nth-child(2) > .score-field > .scoreInput', {'playerScore': '4'});
        this.click('#input-button');
        test.assertSelectorHasText('.hole', 'Hole #3');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(4) > .scoring_score', '3');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(3) > .scoring_score', '5');
        test.assertSelectorHasText('.scoring-body > tr:nth-child(2) > .scoring_score', '7');

        test.done();
    });
});
