function fibonacciSequenceIterative(n) {
    let myArray = [0, 1];
    for (let i = 0; i < (n - 2); i++) {
      let index = i + 1;
      var num = myArray[i] + myArray[index];
      myArray.push(num);
    }
    return num;
  }

let numberIterative = parseInt(prompt('Compute Fibonacci Iterative sequence until:'));
let resultIterative = fibonacciSequenceIterative(numberIterative);
console.log(resultIterative);
