
    var PlayerModel = function(name, score, currentHole) {
        this.name = name;
        this.score = score;
        this.currentHole = currentHole;

        this.isValid = function() {
           return this.name !== "";
        }
    };

    var PlayerView = function(playerArray, controller, i) {
        this.playerArray = playerArray;
        this.controller = controller;
        this.context = playerArray[i];
        var $template = $("#player-template");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html = template(this.context);
        $template.after(html);
    };

    var PlayerController = function(){
        var playerArray = [];
        var i = -1;
        this.addPlayer = function(name){
            var score = 0;
            var currentHole = 1;
            i = i + 1;
            this.player = new PlayerModel(name, score, currentHole);
            playerArray.push(this.player);
            this.runPlayerView(playerArray);
        };
        this.runPlayerView = function(playerArray){
            this.view = new PlayerView(playerArray, this, i);
        }
        this.initializeScoring = function(){
            this.scoring = new ScoringController(playerArray);
            this.scoring.initializeScoringView();
        };
    };

    var ScoringController = function(playerArray){
        this.playerArray = playerArray;
        this.initializeScoringView = function(){
            this.scoringView = new ScoringView(this.playerArray, this);
            this.currenthole = new currentHoleView(this.playerArray[0]);
        };
        this.scoring = function(currentScore){
            currentScore.reverse();
            for (i=0; i < currentScore.length; i++){
                this.playerArray[i].score = playerArray[i].score + currentScore[i];
                this.playerArray[i].currentHole = this.playerArray[i].currentHole + 1;
            }
            this.updatedView = new ScoringView(this.playerArray, this);
            this.currenthole = new currentHoleView(this.playerArray[0]);
        };
        var self =this;
        $( "#scoreSubmit" ).submit(function(e) {
            console.log('clicked');
            var scoreArray = [];
            $('.score-input').each(function(){
                var currentScore = parseInt($(this).val(), 10);
                scoreArray.push(currentScore);
            });
            self.scoring(scoreArray);
            e.preventDefault();
        });
    };

    var ScoringView = function(player, controller){
        $('#template-wrapper').show();
        if ($('.scoring-view')){
            $('.scoring-view').remove();
        }else{
            $('.scoring-view').show();
        }
        $('.intro').hide();
        this.player = player;
        this.controller = controller;
        for (i = 0; i < this.player.length; i++){
            player = this.player[i];
            var $template = $("#scoring-template");
            var source = $template.html();
            var template = Handlebars.compile(source);
            var html    = template(player);
            $template.after(html);
        }
    };
    var currentHoleView = function(player){
        if ($('.hole')){
            $('.hole').remove();
        }
        var $template = $("#currentHole");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(player);
        $template.after(html);
    };

    // add players to the game
    $( document ).ready(function() {
        var playerController = new PlayerController();
        $( "#enterPlayer" ).submit(function(e) {
            var playerName = $('#playerField').val();
            playerController.addPlayer(playerName);
            e.preventDefault();
        });
        $( "#start" ).submit(function(e) {
            playerController.initializeScoring();
            e.preventDefault();
        });
    });


