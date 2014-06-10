
    var PlayerModel = function(playerName, score) {
        this.playerName = playerName;
        this.score = score;
    };

    var PlayerView = function() {
        this.player = null;
        this.displayPlayer = function(){
            $('.player_name').append(this.player.playerName).append("<br>");
            $('.player_score').append(this.player.score).append("<br>");
        };
        this.displayError = function(){
            $('.player_name').append('<span class="error">You must enter a valid name</span>').append("<br>");
        };

        this.addPlayer = function (){
            var score = 0;
            var playerName = $('#playerField').val();
            if (playerName !== ""){
                this.player = new PlayerModel(playerName,score);
                this.displayPlayer();
            }else{
                this.displayError();
            }
        };
        var PlayerView = this;
        $('#addPlayer').click(function() {
            PlayerView.addPlayer();
        });
    };

    // add players to the game
    $( document ).ready(function() {
        new PlayerView();
    });


