
    var PlayerModel = function(name, score) {
        this.name = name;
        this.score = score;

        this.isValid = function() {
           return this.name !== "";
        }
    };

    var PlayerView = function(player) {
        this.player = player;
        var $template = $("#player-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(player);
        $template.after(html);
        //$('.player_name').append('<span class="error">You must enter a valid name</span>').append("<br>");
    };

    var PlayerController = function(){
        this.addPlayer = function(name){
            var score = 0;
            this.player = new PlayerModel(name, score);
            this.view = new PlayerView(this.player);
        };
    };

    var ScoringController = function(){
        this.updateView = function(){
            this.scoringView = new ScoringView();
            console.log("scoring view is instantiated");
        };
    };

    var ScoringView = function(player, state){
        console.log("scoring view is called");
        this.player = player;
        this.state = state;
        var $template = $("#scoring-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(player, state);
        $template.after(html);
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        var scoringController = new ScoringController();

        $('#addPlayer').click(function() {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
        });
        $('#score-button').click(function() {
            scoringController.updateView();
        });
    });


