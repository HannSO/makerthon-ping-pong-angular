describe('SubmitResultsController', function(){
  beforeEach(module('PingPongLeaderboard'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('SubmitResultsController');
  }));

  it('initialises without a loser or winner', function(){
    expect(ctrl.loser).toBeNull();
    expect(ctrl.winner).toBeNull();
  });


  describe('sending posts', function(){

    var $httpBackend;
    beforeEach(inject(function($httpBackend){
      var $scope = {};
      // var httpBackend = $httpBackend;


      $httpBackend
      .when('POST', 'http://localhost:3000/games/new',{winner: '@hannso', loser: '@zeshan'})
      .respond(
        {ctrl.confirmation = true}
        );
      }));

      it('sends a confirmation message', function(){
        // $httpBackend.flush();
        expect(ctrl.confirmation).toBe(true);

      });
      });
    });
