function* train() {
  yield "반월당";
  yield "청라언덕";
  yield "내당";
  yield "두류";
  yield "감삼";
  yield "죽전";
  yield "용산";
  yield "계명대";
  yield "문양";
}

let second = train();

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let current = second.next();
  console.log(current);
  if (current.done !== true) {
    result.innerHTML = current.value;
  } else {
    result.innerHTML = "종점";
    button.setAttribute("style", "width:500px");
  }
});
