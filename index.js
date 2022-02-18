function isPalindrome(word) {
  let stringLength = word.length
  for (let i = 0; i < stringLength/2; i++){
    if(word[i] !== word[stringLength-1-i]){
      return false;
    }
    return true;
  }
}
isPalindrome('hannah')
/* 
  function receives a string
  loop through the string forward and backward
  determine if the arrays are the same
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
