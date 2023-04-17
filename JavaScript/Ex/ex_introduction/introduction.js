const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const leftCon = document.querySelector("#leftContent");
const rightCon = document.querySelector("#rightContent");
const pics = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const text = [
  "<h2>이름 : 손강민</h2><br /><h2>생년월일 : 93.06.28</h2><br /><h2>나의 꿈 : 웹 개발자</h2>",
  "<h1>지금까지 내가 배운것</h1><br /><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>",
  "<h1>앞으로 배울 것</h1><br><h3>Node.Js 마스터가 될거야!</h3>",
  "<h1>앞으로 배울 것</h1><br><h3>MySQL을 배워 DB마스터가 될거야!</h3>",
];
leftCon.style.backgroundImage = `url(${pics[0]})`;
rightCon.innerHTML = text[0];
let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (num) => {
    if (num.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (num.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    leftCon.style.backgroundImage = `url(${pics[i]})`;
    rightCon.innerHTML = text[i];
  });
});
