var assert = require('assert');
var Browser = require('zombie');

var browser = new Browser();

describe("Index Page", function(){
    it("contains #addPlayer button", function(done){
        browser.visit("http://localhost:8000/index.html", function(){
            assert.ok(browser.success);
            assert.ok(browser.query("#addPlayer"));
            done();
        });
    });
    it("Should fill the player name and display the players name and score", function(done){
        browser.visit("http://localhost:8000/index.html", function(){
            browser.
            fill("#playerField", "Player 1").
            pressButton("#addPlayer"), function(){
                assert.equal(browser.text(".player_name"), "Player 1");
            };
            assert.ok(browser.success);
            done();
        });
    });
});
