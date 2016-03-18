describe('LeaderboardController', function(){
  beforeEach(module('PingPongLeaderboard'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('LeaderboardController');
  }));

  describe('#retrievePlayers', function(){

    var httpBackend;

    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      httpBackend
      .when("GET", "http://localhost:3000/")
      .respond(
        { players: "Players listed"}
      );
    }));

    it('displays players', function(){
      ctrl.retrievePlayers();
      httpBackend.flush();
      expect(ctrl.players.players).toEqual('Players listed');
    });
  });
});
