// const a = false;

import checkOddorEven from "./ch03.2.func.mjs";

// if (a) {
//   import("./ch03.2.2 copy.mjs");
// }
// console.log("성공");

const a = true;
if (a) {
  const m1 = await import("./ch03.2.func.mjs");
  console.log(m1);
  const m2 = await import("./ch03.2.var.mjs");
  console.log(m2);
}
let hi = checkOddorEven(10);
console.log(hi);
