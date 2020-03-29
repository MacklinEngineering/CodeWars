/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

function capitalize(s){
  let first = s.split("")
  let second = s.split("")
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      first[i] = first[i].toUpperCase()
    } else {
      second[i] = second[i].toUpperCase()
    }
  }
  return [first.join(""), second.join("")]
}
