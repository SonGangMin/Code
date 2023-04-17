const { odd, even } = require("./ch03.2.1"); //뒤에 .js안적어도됨

function checkOddorEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

module.exports = checkOddorEven;
