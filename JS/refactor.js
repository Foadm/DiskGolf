
    var Player = function(playerName, score) {
        this.playerName = playerName;
        this.score = score;
    };

    function listPlayers(){
        list.push = (newPlayer);
        console.log(list);
    }
    function addPlayer(){
        var list = [];
        var score = 0;
        var newPlayer = $('#playerField').val();
        if (newPlayer != ""){
            newPlayer = new Player(newPlayer,score);
            $('.player_name').append(newPlayer.playerName).append("<br>");
            $('.player_score').append(newPlayer.score).append("<br>");
            $('#playerField').val("");
        }else{
            $('.player_name').append('<span class="error">You must enter a valid name</span>').append("<br>");
        }
    }
// add players to the game
    $( document ).ready(function() {
        $('#addPlayer').click(function(){
            addPlayer();
        });
    });
