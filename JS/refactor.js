
    var PlayerModel = function(name, score) {
        this.name = name;
        this.score = score;

        this.isValid = function() {
           return this.name !== "";
        }
    };

    var PlayerView = function(player) {
        this.player = player;
        this.displayPlayer = function(){
            $('.player_name').append(this.player.name).append("<br>");
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
        this.addPlayer = function(name){
            var score = 0;
            this.player = new PlayerModel(name, score);
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


