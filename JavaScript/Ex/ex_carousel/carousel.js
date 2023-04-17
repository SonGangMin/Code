const container = document.querySelector(".container");
const pics = [
  "IU1.jpeg",
  "IU2.jpeg",
  "IU3.jpeg",
  "IU4.jpeg",
  "IU5.jpeg",
  "IU6.jpeg",
];
const arrows = document.querySelectorAll(".arrow");
let i = 0;
container.style.backgroundImage = `url(../../../../../images/${pics[0]})`;

arrows.forEach((s) => {
  s.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(../../../../../images/${pics[i]})`;
  });
});
