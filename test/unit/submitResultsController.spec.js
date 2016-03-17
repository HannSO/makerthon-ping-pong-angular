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


    beforeEach(inject(function($http){
      var $scope = {};
      var httpBackend = $httpBackend;


      httpBackend
      .when('POST', 'http://localhost:3000/games/new',{winner: '@hannso', loser: '@zeshan'})
      .respond(
        {message : 'Hannah won has been sent'}
        );
      }));
        httpBackend.flush();
        expect(ctrl.confirmation_message).toEqual('Hannah won has been sent');
      });
    });
