// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Best Version to show you understand better
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// Easiest Version
function reverse(str) {
  return str
  .split('')
  .reverse()
  .join('');
}
console.log(reverse('Apple'))

module.exports = reverse;

/*
function reverse(str) {
  const arr = str.split(''); // Passed in empty string then it takes the provided string and turns it into an array with every element in that array consisting of a different character in that string.
  arr.reverse(); // Flips the array
  return arr.join(''); // joins array elements back into a string
}
*/

/*
// For of...probably the best way for an interview
function reverse(str) {
  let reversed = '';

  for (let character of str) { // creates temporary var(character) that is redeclared everytime through the loop then we add the interable object we want to interate through which is (str) 1 by 1 then sets each character equal to the temp character.
    reversed = character + reversed; // Then we take that character and add it on to the string reversed which results in the letters being reversed
  }
  return reversed;
}
*/
/*

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

*/