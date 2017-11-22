const expect = require('expect.js');
const game = require('./game');

describe('A tennis game', () => {
  
  it('should initialise a game of tennis', () => {
    expect(game.getScore()).to.equal('0-0');
  });

});