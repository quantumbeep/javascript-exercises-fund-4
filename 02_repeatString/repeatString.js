const repeatString = function (str, numRepeat) {
  let result = '';
  for (let i = 0; i < numRepeat; i++) {
    result = `${result}${str}`;
  }
  if (numRepeat > -1) {
    return result;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
