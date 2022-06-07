const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  const result = args.reduce((prev, curr) => prev + curr, 0);
  return result;
  // for(let i = 0; i <= args.length; i++ ) {
  //   args += args[i]
  // }
  // return args
};

const multiply = function (args) {
  const result = args.reduce((prev, curr) => prev * curr);
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num > 0) {
    let newArray = [];
    for (let i = 1; i <= num; i++) {
      newArray.push(i);
    }
    console.log(newArray);
    const result = newArray.reduce((prev, curr) => prev * curr);
    return result;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
