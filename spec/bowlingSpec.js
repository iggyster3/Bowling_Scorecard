describe('BowlingGame,', function() {

  var bowling;

  beforeEach(function() {
    bowling = new BowlingGame();
  });

  describe('Allow rolls to be made', function() {

    it('when game is started current rolls should be zero', function() {
      expect(bowling.currentRoll).toEqual(0);
    });

    it('Game knows what frame it is', function() {
      expect(bowling.bowlingFrame()).toEqual(1);
    });

    it('Game score should be zero on start', function(){
      expect(bowling.score).toEqual(0);
    });

    it('Player can get a strike', function(){
      expect(bowling.allowPlayerToRollStrike(10)).toEqual(10);
    });

    it('Player can get a spare', function(){
      bowling.allowPlayerToRollSpare(8);
      expect(bowling.spare).toEqual(2);
    });

  });
});
