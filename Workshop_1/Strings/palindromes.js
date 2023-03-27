function splitIntoArray(text) {
    let wordsArray = text.split(' ');
    return wordsArray
  } 

function verifyPalindromes(word){
    //Number of iterations to verify a word
    let iterations = word.length;
    iterations = iterations % 2 === 1 ? (iterations - 1) / 2 : iterations / 2;
  
    //Verify if word is a palindrome
    if (word.length < 2) { return false }
    
    for (let n = 0; n < iterations; n++) {
      if (word[n] != word[word.length - (n + 1)]) {
        return false;
      }
    }
  
    return true
  }

function groupWords(array) {
    let concatWords = [];
    let currentWord = '';
    for (let i = 0; i < array.length; i++){
      currentWord = array[i];
      concatWords.push(currentWord);
      for (let j = i + 1; j < array.length; j++){
        currentWord += array[j]
        concatWords.push(currentWord);
      }
    }
    return concatWords
  }

function getPalindromes(text) {
  var words = splitIntoArray(text);
  var candidates = groupWords(words);
  var palindromes = []; // Stores palindromes words from str

  // Go over each word in text
  for (let i = 0; i < candidates.length; i++) {
    let isPalindrome = verifyPalindromes(candidates[i]);
    if (isPalindrome) { palindromes.push(candidates[i]); }
  }
  
  return palindromes.length == 0 ? 'There are no palindromes in the text' : palindromes;
  }


let textPalindromes = prompt("Please enter the text to look for any palindromes");
let resultPalindromes = getPalindromes(textPalindromes);
console.log(resultPalindromes);
