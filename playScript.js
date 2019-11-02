const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const Game = require("./game.js")

const myGame = new Game()
myGame.run(reader, completion)


function completion() {
  reader.question("Another game 'y' or 'n'? ", (restartGame) => {
    if (restartGame === 'y') {
      let newGame = new Game()
      newGame.run(reader, completion)
    } else { 
      console.log('See you next time!')
      reader.close()
    }
  })
}








