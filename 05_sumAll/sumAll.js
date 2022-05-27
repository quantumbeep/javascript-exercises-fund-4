const sumAll = function (arg1, arg2) {
  let array = [];
  let sum;
  if (arg1 > 0 && arg1 < arg2) {
    for (let i = arg1; i <= arg2; i++) {
      array.push(arg1++);
      console.log(array);
    }
  } else if(arg2 > 0 && arg2 < arg1) {
    for (let i = arg2; i <= arg1; i++) {
      array.push(arg2++);
      console.log(array);
    }
  }
  sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

//problem:
//we're given two arguments.
//arguments should be positive numbers.
//arguments can provided as bigger first, smaller second.
//test should pass only with the above arguments
//test is to add up all the numbers that are between the two numbers, including the arguments themselves
// e.g. (8,5) means add up all the numbers 5,6,7,8

//plan:
//need a variable to hold sum
//need an array of numbers
//need an array function to iterate each number

//pseudo:
//is the first argument a positive number?
//is the second argument a positive number?
//if these two conditions are met, then check which one is larger
//if the first argument is larger, then use the second argument as lower range
//and vice versa
//then add 1 to the smaller number up until the larger number range
//push each addition to an array
//then add all numbers in array to get sum
