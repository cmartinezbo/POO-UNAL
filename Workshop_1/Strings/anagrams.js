function splitIntoArray(text) {
    let wordsArray = text.split(' ');
    return wordsArray
  } 

function stringPermutations(str) {
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    } 
      
    let ans = str
        .split('')
        .reduce( 
            (acc, letter, i) =>
                acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
  
    ans = ans.filter((word,i) => ans.indexOf(word) === i);
    return ans
  } //Filter (active)
  
function wordsLength(array){
    let lengths = [];
    array.forEach(elem => lengths.push(elem.length))
    return lengths
  }
  
function sameLength(array){
    let lengths = wordsLength(array);
    let ans = [];
    for(let i = 0; i < lengths.length; i++) {
      for(let j = i + 1; j < lengths.length; j++) {
        if (lengths[i]===lengths[j]){ans.push([i,j])}
      };
    };
    return ans
  }
  
function getAnagrams(array, dict, pos){
    let anagrams = [];
    let exclude = [];
    
    for (let i = 0; i < pos.length; i++){
      let key = array[pos[i][0]];
      let prop = array[pos[i][1]];
      
      if (key === prop) {exclude.push(pos[i][1])} //avoid repeated anagram couples when there are 2+ equal keys
      
      let j = dict[key].indexOf(prop) //instead of using for (avoid 2 equal perm == error)
      if (exclude.includes(pos[i][0]) === false && key !== prop && j !== -1 && dict[key][j] === prop) {anagrams.push([key,prop]);}
    }
    return anagrams.length > 0? anagrams : 'There are no Anagrams in the text';
  }


let textAnagram = prompt("Please enter the text to look for any Anagram: ");

let wordsAnagram = splitIntoArray(textAnagram);
let positions = sameLength(wordsAnagram)
let candidates = [];
for (let i = 0; i < positions.length; i++){
  candidates.push(wordsAnagram[positions[i][0]]);
  candidates.push(wordsAnagram[positions[i][1]]);
}

//create object only for candidates
const permutations = {};
candidates.forEach((elem) => {
  permutations[`${elem}`] = stringPermutations(elem)
})

let resultAnagrams = getAnagrams(wordsAnagram, permutations, positions);
console.log(resultAnagrams);
