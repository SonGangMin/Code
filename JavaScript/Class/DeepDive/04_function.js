// function calcSum(start, end) {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calcSum(1, 100));

// function multiple(a, b = 5, c = 10) {
//   return a * b + c;
// }
// console.log(multiple(1));
// A. class="red" 인 요소의 HTMLCollection 을 획득합니다.
// $fruits = [li.red, li.red, li.red]
window.onload = function () {
  var x = (document.querySelector(".hi").innerHTML = "hello");
};

// function starA(n, m) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
//   document.write("<br>");
// }
// starA(3, 4);
// starA(2, 3);

// function starB() {
//   for (let i = 0; i < 6; i++) {
//     for (let j = 5; j > i; j--) {
//       document.write("○");
//     }
//     for (let j = 0; j <= i; j++) {
//       document.write("★");
//     }
//     document.write("<br>");
//   }
//   document.write("<br>");
// }
// starB();

// function starC() {
//   for (let i = 6; i > 0; i--) {
//     for (let j = 6; j > i; j--) {
//       document.write("○");
//     }
//     for (let j = 1; j <= i; j++) {
//       document.write("★");
//     }
//     document.write("<br>");
//   }
//   document.write("<br>");
// }
// starC();

// function starP() {
//   for (let i = 0; i < 5; i++) {
//     for (let j = 5; j > i; j--) {
//       document.write("○");
//     }
//     for (let j = 0; j <= 2 * i; j++) {
//       document.write("★");
//     }
//     document.write("<br>");
//   }
// }

// starP();

// function starE(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) continue;
//     console.log("-".repeat(n - i) + "*".repeat(i) + "@".repeat(n - 1));
//   }
// }

// starE(5);
