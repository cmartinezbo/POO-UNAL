 function fibonacciRecursive(n) {
    return n >= 45 ? '(Technical difficulties)' : n <= 0 ? 'Enter a valid number' : n === 1 ? 0 : n === 2 ? 1 : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }

let numberRecursive = parseInt(prompt('Compute Fibonacci Recursive sequence until:'));
let resultRecursive = fibonacciRecursive(numberRecursive);
console.log(resultRecursive);
