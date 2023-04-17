const prompt = require("prompt-sync")();
// while (true) {
//   const score2 = prompt("과목선택: (1:html 2:css 3:js)");

//   console.log("입력값:" + score2);
//   score = parseInt(score2);
//   if (score === 5) {
//     break;
//   }
//   // if (score > 100 || score < 0) {
//   //   console.log("잘못된성적입니다.");
//   // } else {
//   //   if (score > 90) {
//   //     console.log("A입니다.");
//   //   } else {
//   //     console.log("낙제입니다.");
//   //   }
//   // }

//   switch (score) {
//     case 1:
//       console.log("HTML입니다");
//       break;
//     case 2:
//       console.log("CSS입니다");
//       break;
//     case 3:
//       console.log("JS입니다");
//       break;
//     default:
//       console.log("잘못입력하셨습니다");
//   }
// }

const answer = Math.floor(Math.random() * 100) + 1;
let number;

while (answer !== number) {
  number = prompt("숫자입력하시오: ");
  console.log("입력값: " + number);
  if (number === "q") break;
  number = parseInt(number);

  if (isNaN(number)) {
    console.log("숫자입력하세요");
  } else if (number < answer) {
    console.log("더 큰수입니다.");
  } else if (number > answer) {
    console.log("더 작은수입니다.");
  } else {
    console.log("정답");
    break;
  }
}
