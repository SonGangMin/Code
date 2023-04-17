let scissor = document.getElementById("scissor");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let reset = document.getElementById("reset");
let user, result, com;
let final = document.querySelector(".result");
function sum(a) {
  if (a == -1 || a == 2) {
    return "졌다!ㅋㅋ";
  } else if (a == 0) {
    return "비겼다!";
  } else {
    return "이겼다!ㅊㅊ";
  }
}
function ran() {
  com = Math.floor(Math.random() * 3) + 1;
  if (com == 1) {
    document.getElementById("computer").src = "../../../images/가위.jpg";
  } else if (com == 2) {
    document.getElementById("computer").src = "../../../images/바위.jpg";
  } else {
    document.getElementById("computer").src = "../../../images/보.jpg";
  }
}
scissor.addEventListener("click", function () {
  let user = 1;
  ran();
  result = user - com;
  final.innerHTML = `<h1>${sum(result)}`;
});
rock.addEventListener("click", function () {
  let user = 2;
  ran();
  result = user - com;
  final.innerHTML = `<h1>${sum(result)}`;
});
paper.addEventListener("click", function () {
  let user = 3;
  ran();
  result = user - com;
  final.innerHTML = `<h1>${sum(result)}`;
});
reset.addEventListener("click", function () {
  location.reload();
});
