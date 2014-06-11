
    var PlayerModel = function(playerName, score) {
        this.playerName = playerName;
        this.score = score;

        this.isValid = function() {
           return this.playerName !== "";
        }
    };

    var PlayerView = function(player) {
        this.player = player;
        this.displayPlayer = function(){
            $('.player_name').append(this.player.playerName).append("<br>");
            $('.player_score').append(this.player.score).append("<br>");
        };
        this.displayError = function(){
            $('.player_name').append('<span class="error">You must enter a valid name</span>').append("<br>");
        };
        if(this.player.isValid) {
            this.displayPlayer();
        } else {
            this.displayError();
        }
    };
    var PlayerController = function(){
        this.addPlayer = function (){
            var score = 0;
            var playerName = $('#playerField').val();
            this.player = new PlayerModel(playerName,score);
            this.view = new PlayerView(this.player);
        };
        var self = this;
        $('#addPlayer').click(function() {
            self.addPlayer();
        });
    };

    // add players to the game
    $( document ).ready(function() {
        new PlayerController();
    });


