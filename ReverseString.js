// Complete the solution so that it reverses the string value passed into it.
// solution('world'); // returns 'dlrow'

function solution(str){
  let stringsplit = str.split("")
  let arraysplit = stringsplit.reverse()
  let newarray = arraysplit.join("")
  return newarray
}
