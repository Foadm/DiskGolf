
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
            this.scoringView = new ScoringView(this.player, this);
        };
        this.scoring = function(){
            var currentScore = parseInt($('.score-input').val(), 10);
            player.score = currentScore + player.score;
            player.currentHole = player.currentHole + 1;
            player.scoringView = new ScoringView(player);
        };
    };

    var ScoringView = function(context, controller){
        $('#template-wrapper').remove();
        $('.intro').hide();
        this.context = context;
        this.controller = controller;
        var $template = $("#scoring-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(context);
        $template.after(html);
        $('#input-button').click(function() { controller.scoring(); });
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        $('#addPlayer').click(function() {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
        });
    });


