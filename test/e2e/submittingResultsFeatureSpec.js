describe("pingPongLeaderboard", function(){
  it('shows confirmation when correct game is submitted',function(){
    browser.get("http://localhost:8000");
    var winner = element(by.model('resultsCtrl.winner'));
    var loser = element(by.model('resultsCtrl.loser'));
    var submit = $('#submit-game');
    winner.sendKeys('Scott');
    loser.sendKeys('Hannah');
    submit.click();
    expect($('#confirmation').isDisplayed()).toBe(true);
    expect($('#un-confirmation').isDisplayed()).toBe(false);
  });
});
