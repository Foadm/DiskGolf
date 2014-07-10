
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
        $( "#start" ).submit(function(e) {
            var playerName = $('#playerField').val();
            controller.initializeScoring();
            e.preventDefault();
        });
    };

    var PlayerController = function(){
        this.addPlayer = function(name){
            var score = 0;
            var currentHole = 1;
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
        this.scoring = function(currentScore){
            player.score = currentScore + player.score;
            player.currentHole = player.currentHole + 1;
            player.scoringView = new ScoringView(player, this);
        };
    };

    var ScoringView = function(player, controller){
        $('#template-wrapper').remove();
        $('.intro').hide();
        this.player = player;
        this.controller = controller;
        var $template = $("#scoring-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(player);
        $template.after(html);
        $( "#scoreInput" ).submit(function(e) {
            var currentScore = parseInt($('.score-input').val(), 10);
            controller.scoring(currentScore);
            e.preventDefault();
        });
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        $( "#enterPlayer" ).submit(function(e) {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
            e.preventDefault();
        });
    });


