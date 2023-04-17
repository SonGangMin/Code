function counting(str, ch) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) count += 1;
  }
  return count;
}

const string = prompt("문자열 입력");
const letter = prompt("체크할 문자입력");

const result = counting(string, letter);
document.write(`${string}에는 ${letter}이 ${result}개 있다.`);
