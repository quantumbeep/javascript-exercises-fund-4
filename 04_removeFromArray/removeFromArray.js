const removeFromArray = function (array, ...args) {
  for (let i = 0; i < args.length; i++) {
    let exists = array.includes(args[i]);
    console.log(`${args[i]} exists in array? ${exists}`);
    if (exists) {
      array = array.filter((element) => element !== args[i]);
      console.log(array);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

//if the argument exists in the array, it will be removed.
//if the argument is not in the array, the array will remain the same.
//the argument can be a string or a number.

//1. if includes() returns true, the element will be removed.
//2. if includes() returns false, the element will not be removed.
//3. use filter() to return a new array with the elements that do not match the condition.
