describe("pingPongLeaderboard", function(){
  it('shows confirmation when correct game is submitted',function(){
    browser.get("http://localhost:8000");
    var winner = element(by.model('resultsCtrl.winner'));
    var loser = element(by.model('resultsCtrl.loser'));
    var submit = $('#submit-game');
    winner.sendKeys('Hannah');
    loser.sendKeys('Zee');
    submit.click();
    expect(element(by.id('confirmation_message')).isDisplayed()).toBe(true);
    expect(element(by.id('un-confirmation_message')).isDisplayed()).toBe(false);
    var users = element.all(by.css('.user-profile'));
    expect(users.count()).toBe(1);
  });

});
