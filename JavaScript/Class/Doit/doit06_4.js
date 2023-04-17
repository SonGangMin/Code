const container = document.querySelector("#container");
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];
container.style.backgroundImage = `url(images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach((hi) => {
  hi.addEventListener("click", (a) => {
    if (a.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (a.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
  });
});
