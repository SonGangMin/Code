// // ex12-09

// var hey = function add(x, y) {
//   return x + y;
// };
// console.log(hey(2, 5));

// var mul = function (x, y) {
//   return x * y;
// };
// console.log(mul(2, 5));

// //ex12-12
// console.dir(add);
// console.dir(sub);
// console.log(add(2, 5));
// console.log(sub(2, 5));

// function add(x, y) {
//   return x + y;
// }

// var sub = function (x, y) {
//   return x - y;
// };

// //ex12-13
// var add = new Function("x", "y", "return x+y");
// console.log(add(1, 2));

// const add2 = (x, y) => x + y;
// console.log(add(2, 3));

// //ex12-19
// var add = function (x, y) {
//   return x + y;
// };
// console.log(add(1, 2, 3));

// var add2 = function (x, y) {
//   console.log(arguments);
//   return x + y;
// };
// add(2, 5, 10);

// // ex12-23
// var add = function (x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new TypeError("dsdfsdf");
//   }
//   return x + y;
// };

// console.log(add(2));
// console.log(add("a", "b"));

// // ex12-24 단축평가
// var add = function (a, b, c) {
//   a = a || 0;
//   b = b || 1;
//   c = c || 2;
//   return a + b + c;
// };
// console.log(add(5, 6, 7));
// console.log(add(5, 2));

// //ex12-33

// function changeVal(primitive, obj) {
//   primitive += 100;
//   obj.name = "kim";
// }
// var num = 100;
// var person = { name: "Son" };

// console.log(num);
// console.log(person);

// changeVal(num, person);
// console.log(num);
// console.log(person);

// //ex12-34 즉시실행함수
// (function foo() {
//   var a = 3;
//   var b = 5;
//   return a * b;
// });

// console.log(foo());

// //ex 12-44
// const count = function (n) {
//   if (n < 0) return;
//   console.log(n);
//   count(n - 1);
// };

// count(10);

// const factorial = function (n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(3));

// // ex12-48 중첩함수

// const outer = function () {
//   var x = 1;
//   const inner = (function () {
//     var y = 2;
//     console.log(x + y);
//   })();
// };
// outer();

// //ex12-50 콜백함수

// const repeat = function (n, f) {
//   for (var i = 0; i < n; i++) {
//     f(i);
//   }
// };
// const logAll = function (i) {
//   console.log(i);
// };

// repeat(5, logAll);
// const logOdds = function (i) {
//   if (i % 2) console.log(i);
// };
// repeat(5, logOdds);

// const res = [1, 2, 3].map(function (item) {
//   return item * 2;
// });
// console.log(res);

// const res2 = [1, 2, 3].filter(function (item) {
//   return item % 2;
// });
// console.log(res2);

// const res3 = [1, 2, 3].reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(res3);
