const findTheOldest = function (objArray) {
  //accepts an array of objects as arg
  //death year minus birth year value in each object
  //add new key value pair 'age': number
  //find object with highest 'age' value
  //returns 'name' value the found object

  const calculateAge = (object) => {
    if (!object.yearOfDeath) {
      return new Date().getFullYear() - object.yearOfBirth;
    } else {
      return object.yearOfDeath - object.yearOfBirth;
    }
  };

  let newObjArray = objArray.map((object) => ({
    ...object,
    age: calculateAge(object),
  }));

  let sortedAgeArray = newObjArray.sort(
    (firstObj, secondObj) => firstObj.age - secondObj.age
  );
  console.log(sortedAgeArray);
  console.log(sortedAgeArray[sortedAgeArray.length - 1]);
  return sortedAgeArray[sortedAgeArray.length - 1];
};
// Do not edit below this line
module.exports = findTheOldest;
