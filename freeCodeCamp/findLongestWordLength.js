function findLongestWordLength(str){
  let word = str.split(' ');
  let maxLength =0;
  let longestWord = "";
 
  for (let i =0; i<word.length; i++){
    if(word[i].length > maxLength){
      maxLength = word[i].length;
      longestWord = word[i];
      console.log(maxLength);
    }

  }

  return `la palabra mas larga tiene ${maxLength} caracteres y es: "${longestWord}"`;
}

console.log(findLongestWordLength("la palabra mas larga"));
