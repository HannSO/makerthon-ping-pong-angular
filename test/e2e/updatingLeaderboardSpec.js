describe("pingPongLeaderboard", function(){
  it('updates leaderboard when a game is entered',function(){
    browser.get("http://localhost:8000");
    var winner = element(by.model('resultsCtrl.winner'));
    var loser = element(by.model('resultsCtrl.loser'));
    var submit = $('#submit-game');
    winner.sendKeys('Scott');
    loser.sendKeys('Hannah');
    submit.click();
    var submitLeaderboard = $('#submit-leaderboard')
    submitLeaderboard.click();    var players = element.all(by.css('#name'));
    playerText = players.first().getText()
      expect(playerText).toEqual('Scott');
    var wins = element.all(by.css('#wins'));
    winsText = wins.first().getText()
      expect(winsText).toEqual('1');
    var losses = element.all(by.css('#losses'));
    lossText = losses.first().getText()
      expect(lossText).toEqual('0');
    var winPercentage = element.all(by.css('#win-percentage'));
    winPercentageText = winPercentage.first().getText()
      expect(winPercentageText).toEqual('100.0');
  });
});
