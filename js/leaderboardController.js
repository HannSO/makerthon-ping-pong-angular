pingPongLeaderboard.controller('LeaderboardController', ['$resource',function($resource){
  var self = this;


  var showPlayersPath = $resource('http://localhost:3000/players');
  var players = [];
  self.retrievePlayers = function(){

    showPlayersPath.get().$promise.then(function(data){
      self.players = data;
    });
  };
}]);
