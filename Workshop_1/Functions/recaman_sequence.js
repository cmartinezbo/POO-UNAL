function recaman(int) {
    let positions = [0];
    let currentPos;
    let hop = 0;
  
    for (let i = 0; i < int; i++) {
      hop++;
      currentPos = positions[i] - hop;
      
      positions.push(
        currentPos > 0? !positions.includes(currentPos)? currentPos : 
          currentPos + 2 * hop : 
        currentPos + 2 * hop)
    }
    return positions
  }

let numberRecaman = parseInt(prompt('Compute Recamán sequence until:')) - 1;
let resultRecaman = recaman(numberRecaman);

console.log(resultRecaman[numberRecaman]);
