describe('SubmitResultsController', function(){
  beforeEach(module('PingPongLeaderboard'));

  var ctrl;
  var scope;

  beforeEach(inject(function($controller, $rootScope){
    ctrl = $controller('SubmitResultsController');
    scope = $rootScope;
  }));

  it('initialises without a loser or winner', function(){
    expect(ctrl.loser).toBeNull();
    expect(ctrl.winner).toBeNull();
  });


  describe('sending posts', function(){

<<<<<<< HEAD
    var httpBackend;
    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      $httpBackend
      .when('POST', 'http://localhost:3000/games')
      .respond(function(){
        return [200, {}];
=======
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
>>>>>>> df756dfdb9c4fd917c00a9d2abdf1bccd0635d66
      });
    }));

    it('sets confirmation to true', function(){
      ctrl.submitResults();
      httpBackend.flush();
      scope.$apply();
      expect(ctrl.confirmation).toBe(true);
    });
  });
});
