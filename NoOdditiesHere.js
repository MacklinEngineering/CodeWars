/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
*/

function noOdds( values ){
let array = []
  for(let i = 0; i <= values.length-1; i++){
    if (values[i]%2===0) {array.push(i)}
  }
    return array
  }
