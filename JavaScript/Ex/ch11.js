// //ex 11-1
// const o = {};

// o.a = 1;
// console.log(o);

// //ex11-13
// var person = {
//   name: "Lee",
// };
// console.log(person);

// person.name = "Kim";
// person.name2 = "KangMin";

// console.log(person);

// //ex-14
// const o = { x: { y: 1 } };
// const i = { x: { y: 1 } };

// const c1 = { ...o };
// console.log(c1.x);
// console.log(c1 === o);
// console.log(c1.x === o.x);

// const _ = require("lodash");
// const c2 = _.cloneDeep(o);
// console.log(c2.x);
// console.log(c2 === o);
// console.log(c2.x === o.x);

// console.log(i.x);
// console.log(i === o);
// console.log(i.x === o.x);

// //ex11-18

// var person = {
//   a: "1",
//   b: "2",
//   c: { d: 2 },
// };

// var copy = person;
// var copy2 = { ...person };
// console.log(person);
// console.log(copy);
// console.log(person === copy);
// console.log(copy2);
// console.log(person === copy2);

// person.d = "3";
// console.log(person);
// console.log(copy);
// console.log(copy2);
