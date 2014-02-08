$( document ).ready(function() {

    var addPlayer = $("#addPlayer");
    var numberOfPlayers = -1;
    var players = [];
    var playerScore = [];

// set up player object
    var createPlayer = function (playerName, score) {
        var playerInfo = {
            playerName: playerName,
            score: score
        };
        return playerInfo;
    };
// add players to the game
    var enterPlayer = addPlayer.click(function () {
        var newPlayer = prompt("add a player");
        var player = createPlayer(newPlayer, 0);
        numberOfPlayers += 1;
        //console.log(player.playerName + " has a score of " + player.score);
        //console.log(numberOfPlayers);
        players[numberOfPlayers] = player.playerName;
        playerScore[numberOfPlayers] = player.score;
        return [players, playerScore];
    });
// submit all the shizzle
    $("#submit").click(function () {
        var numberOfHoles = $("#holeNumbers").val();
        scoringView(players, numberOfHoles);
    });

//set up the view for scoring those sweet holes
    var scoringView = function (players, numberOfHoles) {
        for (var i = 0; i < players.length; i++) {
            var playerName = players[i];
            $(".score").append(playerName).append($('<input></input>').addClass(playerName)).append('<br>');
        }
        $('.score').append('<button class="button" id="nextHole">submit scores</button>');
        //update the score and move to the next hole
        $("#nextHole").on("click", function(){
                var updatedScores = [];
                for(i=0; i<players.length ; i++){
                    updatedScores = $(".score > input").children().val();
                }


            console.log(updatedScores);

        });
    }







});