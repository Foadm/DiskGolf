
    var PlayerModel = function(name, score, currentHole) {
        this.name = name;
        this.score = score;
        this.currentHole = currentHole;

        this.isValid = function() {
           return this.name !== "";
        }
    };

    var PlayerView = function(context) {
        this.context = context;
        var $template = $("#player-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(context);
        $template.after(html);
        //$('.player_name').append('<span class="error">You must enter a valid name</span>').append("<br>");
    };

    var PlayerController = function(){
        //this.playerArray = [];
        this.addPlayer = function(name){
            var score = 0;
            var currentHole = 0;
            this.player = new PlayerModel(name, score, currentHole);
            this.view = new PlayerView(this.player);
            //this.playerArray.push(name);
            $('#start-button').click({param : this.player}, initializeScoring);
            function initializeScoring(e, param){
                this.scoring = new ScoringController(e.data.param);
                this.scoring.updateView();
            }
        };
    };

    var ScoringController = function(player){
        this.player = player;
        this.updateView = function(){
            this.scoringView = new ScoringView(this.player);
            console.log("scoring view is instantiated");
        };
    };

    var ScoringView = function(context, currentHole){
        console.log("scoring view is called");
        this.context = context;
        //this.score = score;
        var $template = $("#scoring-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(context);
        $template.after(html);
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        //var scoringController = new ScoringController();

        $('#addPlayer').click(function() {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
        });
    });


