
describe('PlayerModel', function(){
   it('should create a player with name, score and his current hole', function(){
        var model = new PlayerModel('player1', 0 ,1);
        expect(model.name).toBe('player1');
        expect(model.score).toBe(0);
        expect(model.currentHole).toBe(1);
   });
});
describe('PlayerController',function(){
    it('should add a new player model', function(){
        var testPlayerController = new PlayerController();
        spyOn(testPlayerController, 'runPlayerView');
        testPlayerController.addPlayer("player1");
        expect(testPlayerController.runPlayerView).toHaveBeenCalled();
    });
});
