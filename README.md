# Tennis-test

Goal: Re-create a game of tennis including:
    - 2 players
    - The basic rules of Tennis
    - Some tests (using `Jest`) to certify that the logic is working as expected

### Basic Rules of Tennis
    - Players scores one at a time
    - The score of a player in the game increments the following way: 0 - 15 - 30 - 40
    - There is a deuce when both players have a score of 40 in the game (which means there will be an "advantage" point)
    - When a player is at 40, if it wins the exchange it will go down to 0 and win the game.


## Available commands:
    - yarn start (runs the `game.js` file)
    - yarn test (runs the `test.js` file with jest)