pingPongLeaderboard.controller('SubmitResultsController', ['$http',function($http){
 var self = this;
self.winner = null;
self.loser = null;
self.confirmation = false;
self.unconfirmation = false;

var makeGamePath = ('http://localhost:3000/games');


  self.submitResults = function(){
    $http.post(makeGamePath, {winner:self.winner,loser:self.loser})
      .success(function (data) {
        self.confirmation = true;
        self.unconfirmation = false;
        self.winner = '';
        self.loser = '';
      })
      .error(function() {
        self.unconfirmation = true;
        self.confirmation = false;
      });
  };

}]);
