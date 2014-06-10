var assert = require('assert');
var Browser = require('zombie');

var browser = new Browser();

describe("thing", function(){
    it("Should fill the player name and display the players name and score", function(done){
        browser.visit("http://localhost:8000/html/index.html").then(function(){
            return browser.fill("#playerField", "Player 1");
        }).then(function() {
            return browser.pressButton("#addPlayer");
        }).then(function() {
            assert(browser.text(".player_name"), "Player 1");
            return done();
        }).fail(function(error) { console.log(error); });
    });
});
