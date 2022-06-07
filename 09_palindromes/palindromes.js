const palindromes = function (str) {
  const pattern = /[A-Za-z]/g;
  const str1 = str.match(pattern).join('').toLowerCase();
  console.log(str1);

  const str2 = str.match(pattern).reverse().join('').toLowerCase();
  console.log(str2);

  if (str1 === str2) {
    return true;
  }
  return false;
};

// Do not edit below this line

module.exports = palindromes;
