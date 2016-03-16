describe('SubmitResultsController', function(){
  beforeEach(module('PingPongLeaderboard'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('SubmitResultsController');
  }));

  it('initialises without a loser or winner', function(){
    expect(ctrl.loser).toBeUndefined();
    expect(ctrl.winner).toBeUndefined();
  });

  it('poss winner and loser to backend rails', inject(function($http){
    var $scope = {};
    var httpBackend = $httpBackend;


    httpBackend
      .when('POST', 'http://localhost:3000/games/new',{
        winner: '@hannso'
        loser: '@zeshan'
      })
      .respond({
        'Hannah won has been sent'
      });

      httpBackend.flush();
      expect.(ctrl.confirmation_message).toEqual(''Hannah won has been sent'');
  }));
});
