import { odd, even } from "./ch03.2.var.mjs"; //뒤에 .js안적어도됨

function checkOddorEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}
export default checkOddorEven;
