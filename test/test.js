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
});
