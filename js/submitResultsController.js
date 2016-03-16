pingPongLeaderboard.controller('SubmitResultsController', ['$resource',function(){
 var self = this;
self.winner = null;
self.loser = null;
self.confirmation = null;

var makeGamePath = $resource('http://localhost:3000/games/new');


  self.submitResults = function(){

    makeGamePath.post(JSON.stringify({winner:self.winner,loser:self.loser})).success(function(){
      self.confirmation = true;
      // UPDATE LEADERBOARD METHOD

    });
  };

}]);
