# Tennis-test

## Goal 

Create a scoring system for a game of tennis. Please note a "game" refers to the game component in a tennis match only. Theres is no need to cater for sets/matches. There is also no need for any form of GUI, just a simple class or collection of functions to create and maintain game state will suffice.

*Please note:* this is a pair programming excercise, so please don't hesistate to communicate and collaborate with the developers you are working with. Also feel free to use any resources online you might need. 

## Approach

Your solution should implement the following features:

- A game can be created with 2 players
- Each players score starts at 0
- Each player can score a point
- The score of a player in the game increments the following way: 0 - 15 - 30 - 40
- The score resets to 0-0 when one player reaches 40.
- Deuce can be reached if players score is tied at 40-40
- Advantage point will be awarded if a player scores at 40-40
- The game returns to deuce if one player is at advantage and the other scores a point
- The score resets to 0-0 if one player scores twice in a row at Deuce

Please take a test driven approach to this assignment, writing your cases first and proceeding to write logic to satisfy them. After you clone this repository check out a new branch that adheres to this naming convention `test/<your-name>`and commit to it as frequently as you would like. When you are done, push it up.

## Available commands:
    - yarn start (runs the `game.js` file)
    - yarn test (runs the `test.js` file with jest)
