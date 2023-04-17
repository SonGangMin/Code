const name = document.querySelector("#name");
const id = document.querySelector("#id");
const pw1 = document.querySelector("#pw1");
const pw2 = document.querySelector("#pw2");
const email = document.querySelector("#email");
const join = document.querySelector("#join");
const errorName = document.querySelector("#errorName");
const errorId = document.querySelector("#errorId");
const errorPw1 = document.querySelector("#errorPw1");
const errorPw2 = document.querySelector("#errorPw2");
const errorEmail = document.querySelector("#errorEmail");

let a = 0,
  b = 0,
  c = 0,
  d = 0,
  e = 0;

function checkName() {
  const regName = /^[가-힣]{2,4}$/;
  if (regName.test(name.value) == true) {
    a = 1;
    errorName.innerHTML = "";
  } else {
    errorName.innerHTML = "이름 오류";
  }
}
function checkId() {
  const regId = /^[A-Za-z0-9]{4,10}$/;
  if (regId.test(id.value) == true) {
    b = 1;
    errorId.innerHTML = "";
  } else {
    errorId.innerHTML = "Id오류";
  }
}
function checkPw1() {
  const regPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regPw.test(pw1.value) == true) {
    c = 1;
    errorPw1.innerHTML = "";
  } else {
    errorPw1.innerHTML = "비번오류";
  }
}
function checkPw2() {
  let passwd1 = pw1.value;
  let passwd2 = pw2.value;
  if (passwd1 == passwd2) {
    d = 1;
    errorPw2.innerHTML = "";
  } else {
    errorPw2.innerHTML = "비번확인 오류";
  }
}
function checkEmail() {
  let regEm =
    /^[0-9a-zA-Z]([-_/.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_/.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (regEm.test(email.value) == true) {
    e = 1;
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "이메일 오류";
  }
}

function rjoin() {
  let mul = a * b * c * d * e;
  if (mul !== 1) {
    join.setAttribute("disabled", "disabled");
    join.className = "submit2";
  } else {
    join.removeAttribute("disabled");
    join.className = "submit";
  }
}
setInterval(rjoin, 100);

join.addEventListener("click", addInfo);
function addInfo(event) {
  event.preventDefault();
  let star = "";
  for (let i = 0; i < pw1.value.length; i++) {
    star += "*";
  }

  const info = document.createElement("li");
  info.innerHTML = `
  이름 : ${name.value}  / 아이디 : ${id.value}  / 비밀번호 : ${star} / 이메일 : ${email.value} <span class="delButton">삭제</span>
  `;
  content2.appendChild(info);
  name.value = "";
  id.value = "";
  pw1.value = "";
  pw2.value = "";
  email.value = "";
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;

  const delButtons = document.querySelectorAll(".delButton");

  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeInfo);
  }
}
function removeInfo() {
  let list = this.parentNode;
  list.remove();
}
