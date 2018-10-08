// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Alternative solution using the advanced array helper every()
function palindrome(str) {
  return str.split('').every((char,i) => {
    return char === str[str.length - i - 1];
  })
}

// Most Straight fowrward solution
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}
console.log(palindrome('racecar'))
module.exports = palindrome;


/* 

function palindrome(str) {
  const reversed = str.split('').reverse().join(''); // puts the reversed string in a varible called (reversed).

  return str === reversed; // checks if str is === to reversed string in varible
}

*/
/**********************/
/*

function palindrome(str) {
  return str.split('').every((char,i) => { // This function will be called for ever element in the array. The 1st argument (char) to the function is each character from the array we made(str.split). Because we need to compare each element to mirror element on the other side we will need the index(i) which will be equal to 0 since we are starting on the first element in the array.
    return char === str[str.length - i - 1]; //Then we make a comparison bewteen current element (char) and the mirrord elemen on the other side of the array.
  })
}

*/