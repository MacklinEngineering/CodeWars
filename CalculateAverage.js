/*
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
const makeSmaller = (a, b) => {return a+b};

return array.reduce(makeSmaller)/array.length
} 
 
 
