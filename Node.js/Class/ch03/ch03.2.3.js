const { odd, even } = require("./ch03.2.1");
const checkNumber = require("./ch03.2.2");

function checkStringOddorEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkNumber(9));

console.log(checkStringOddorEven("hello"));
console.log(checkStringOddorEven("hello1"));
