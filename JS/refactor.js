
    var PlayerModel = function(name, score, currentHole) {
        this.name = name;
        this.score = score;
        this.currentHole = currentHole;

        this.isValid = function() {
           return this.name !== "";
        }
    };

    var PlayerView = function(context, controller) {
        this.context = context;
        this.controller = controller;
        var $template = $("#player-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html = template(context);
        $template.after(html);
        $('#start-button').click(function() { controller.initializeScoring(); });
    };

    var PlayerController = function(){
        this.addPlayer = function(name){
            var score = 0;
            var currentHole = 0;
            this.player = new PlayerModel(name, score, currentHole);
            this.view = new PlayerView(this.player, this);
        };
        this.initializeScoring = function(){
            this.scoring = new ScoringController(this.player);
            this.scoring.initializeScoringView();
        };
    };

    var ScoringController = function(player){
        this.player = player;
        this.initializeScoringView = function(){
            this.scoringView = new ScoringView(this.player);
        };
    };

    var ScoringView = function(context){
        this.context = context;
        var $template = $("#scoring-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(context);
        $template.after(html);
        $('#input-button').click({param : this.context}, updateScoring);
        function updateScoring(e,param){
            var currentScore = parseInt($('.score-input').val(), 10);
            context.score = currentScore + context.score;
            context.currentHole = context.currentHole + 1;
            $('#template-wrapper').remove();
            this.scoringView = new ScoringView(context);
        }
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        $('#addPlayer').click(function() {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
        });
    });


