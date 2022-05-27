const leapYears = function (year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

//Leap Year
//is it divisible by 4?
//is it divisible by 400?

//NOT Leap Year
//is it divisible by 100?
