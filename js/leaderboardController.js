pingPongLeaderboard.controller('LeaderboardController', ['$http',function($http){
  var self = this;


  // var showPlayersPath = $resource('http://localhost:3000/');
  var players = [];

  self.retrievePlayers = function(){

    $http.get('http://localhost:3000/').success(function(json){
      self.players = json;
    });
  };
}]);
