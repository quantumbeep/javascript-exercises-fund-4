const fibonacci = function (num) {
    if(num > 0 ){
        let array = [0, 1];
        let position0;
        let position1;
        for (let i = 1; i < num; i++) {
          position0 = array[0];
          position1 = array[1];
          array[1] = position0 + position1;
          array[0] = position1;
          console.log(array);
        }
        return array[1];
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
