// Fibonacci Iterative

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


// Fibonacci Resursive

function fibonacciSequenceRecursive(n) {
    return n >= 45 ? '(Technical difficulties)' : n <= 0 ? 'Enter a valid number' : n === 1 ? 0 : n === 2 ? 1 : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }

let numberRecursive = parseInt(prompt('Compute Fibonacci Recursive sequence until:'));
let resultRecursive = fibonacciSequenceRecursive(numberRecursive);
console.log(resultRecursive);
