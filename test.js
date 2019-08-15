const game = require('./game');

describe('A tennis game', () => {
  
  it('should initialise a game of tennis', () => {
    expect(game.getScore()).toEqual('0-0');
  });

});