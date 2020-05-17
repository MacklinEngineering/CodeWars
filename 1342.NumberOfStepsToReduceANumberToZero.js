/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
const divide = a => a / 2;
const minus = a => a - 1;

let steps = 0;

do {
  if (num % 2 === 0) {
    num = divide(num);
  } else {
    num = minus(num);
  }

  steps++;
} while (num !==0);
return steps

}
 
