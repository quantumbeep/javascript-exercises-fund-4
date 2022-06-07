const getTheTitles = function (objArray) {
  //accepts an array of objects as argument
  //returns an array

  let result = objArray.map((object) => object.title);

  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
