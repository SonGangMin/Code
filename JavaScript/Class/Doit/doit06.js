// function changeBackground() {
//   document.body.style.backgroundColor = "red";
// }
// const button = document.querySelector("button");
// const gbutton = document.querySelector(".green");
// button.addEventListener("click", function () {
//   document.body.style.backgroundColor = "blue";
// });
// gbutton.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

const bttn = document.querySelector("#bttn");

bttn.addEventListener("click", () => {
  const input = document.querySelector("#word");
  const result = document.querySelector("#result");

  result.innerHTML = `<h1>당신이 입력한 글자의 수는 ${input.value.length}입니다.</h1>`;
});
const modal = document.querySelector(".modal");
const modalbox = document.querySelector("#modalbox");
modalbox.addEventListener("click", () => {
  modal.classList.add("active");
});
