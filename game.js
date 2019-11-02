class Game { 
  constructor() { 
    this.towers = [[1], [], []] 
  }

  promptMove(reader, callBack) { 
    this.printTowers()
  
    reader.question("Move disk from: ", (fromIdx) =>{ 
      reader.question("Move disk to: ", (toIdx) => {
          callBack(fromIdx, toIdx)
      }); 
    }); 
  }

  isValidMove(startTowerIdx, endTowerIdx) { 
    const startTower = this.towers[startTowerIdx]; 
    const endTower = this.towers[endTowerIdx]; 

    if (startTower.length === 0) { 
      return false; 
    } else if (endTower.length == 0) { 
      return true; 
    } else { 
      const topStartDisc = startTower[startTower.length - 1]
      const topEndDisc = endTower[endTower.length - 1]

      return topStartDisc < topEndDisc

    }
  }

  move(startTowerIdx, endTowerIdx) { 
    if (this.isValidMove(startTowerIdx, endTowerIdx)) { 
      
      let topOfStartTower = this.towers[startTowerIdx].pop();
      this.towers[endTowerIdx].push(topOfStartTower);

      return true; 
    }  
    return false; 
  }

  printTowers() { 
    console.log(JSON.stringify(this.towers));
  }

  isWon() { 
    //move all the discs to the second or third tower
    return (this.towers[1].length === 1) || (this.towers[2].length === 1) 
  }

  run(reader, completionCallback) { 
    
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => { 
     
      if (!this.move(startTowerIdx, endTowerIdx)) { 

      console.log('That is not a valid move!')
     } else if (!this.isWon() ) { 
        this.run(reader, completionCallback);
     } else { 
      this.printTowers()
      console.log('You won!');
      completionCallback(); 
     }
    }); 
    
  }

}



module.exports = Game; 