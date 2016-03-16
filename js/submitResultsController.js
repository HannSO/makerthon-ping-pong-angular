pingPongLeaderboard.controller('SubmitResultsController', ['$http',function($http){
 var self = this;
self.winner = null;
self.loser = null;
self.confirmation = false;
self.unconfirmation = false;

var makeGamePath = ('http://localhost:3000/games');


  self.submitResults = function(){

    console.log($http.post(makeGamePath, {winner:self.winner,loser:self.loser}));

    $http.post(makeGamePath, {winner:self.winner,loser:self.loser});

    // .success(function(){
      // UPDATE LEADERBOARD METHOD
      // self.confirmation = true;

    // });
    //
    // .error(function(){
    //   self.unconfirmation = true;
    // });
  };

}]);
