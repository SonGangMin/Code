// //ex13-02
// var var1 = 1;

// if (true) {
//   var var2 = 2;
//   if (true) {
//     var var3 = 3;
//   }
// }

// function foo() {
//   var var4 = 4;
//   function bar() {
//     var var5 = 5;
//   }
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);
// console.log(var5);

// //ex13-09 렉시컬스코프
// var x = 1;

// function foo() {
//   var x = 10;
//   bar();
// }
// function bar() {
//   console.log(x);
// }
// foo();
// bar();
