
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
        this.addPlayer = function(playerName){
            var score = 0;
            this.player = new PlayerModel(playerName,score);
            this.view = new PlayerView(this.player);
        };
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        $('#addPlayer').click(function() {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
        });
    });


