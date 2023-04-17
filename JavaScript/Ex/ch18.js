// const target = "Is this all there is?";
// const regexp = /all/i;
// console.log(regexp.test(target));

// const regexp2 = new RegExp(/is/i);
// console.log(regexp2.test(target));

// const count = (str,char) => (str.match(new RegExp(char,'gi')) ?? []).length;
//
//
//
// const target = "Is this all there is";
// const regExp = /is/gi;
// const regExp2 = /..../g;

// console.log(regExp.test(target));
// console.log(target.match(regExp));
// console.log(regExp.exec(target));

// console.log(target.match(regExp2));
//
//
//
// const target = "A AA B BB Aa Bb BA AAA";

// const regExp = /A{1,2}/g;
// console.log(target.match(regExp));
// const regExp2 = /A{1,}/g;
// console.log(target.match(regExp2));
//
//
//
// const target = "Is this all there is? color colour colowur";
// const target2 = "A AA B BB Aa Ab Ba Bb ZZ 12 Az ZA Zb 12,345 156 1,523 _^@#$";
// const name = "https://www.naver.com";
// const regExp = /.../g;
// console.log(target.match(regExp));
// const regExp2 = /thes?r/g;
// console.log(target.match(regExp2));
// const regExp3 = /A|B/gi;
// console.log(target2.match(regExp3));
// const regExp4 = /A+|B+/g;
// console.log(target2.match(regExp4));
// const regExp5 = /[AB]+/g; // 위와 결과가 같다
// console.log(target2.match(regExp5));
// const regExp6 = /[A-Z]+/g;
// console.log(target2.match(regExp6));
// const regExp7 = /[A-Za-z]+/g;
// console.log(target2.match(regExp7));
// const regExp8 = /[\d,]+/g; // == [0-9,]와 같다
// console.log(target2.match(regExp8));
// const regExp9 = /[\D,]+/g;
// console.log(target2.match(regExp9));
// const reg = /[\w,]+/g;
// console.log(target2.match(reg));
// const reg2 = /[\W,]+/g;
// console.log(target2.match(reg2));
// const reg3 = /[^\d,]+/g;
// console.log(target2.match(reg3));
// const reg4 = /^https:/g;
// console.log(reg4.test(name));
// const reg5 = /.com$/g;
// console.log(reg5.test(name));
//
//
//
const url = "http://example.com";
const fileName = "index.html";
const num = " \t\r\nhello";
const reg1 = /^https?:\/\//g;
console.log(reg1.test(url));
const reg2 = /^(http|https):\/\//;
console.log(reg2.test(url));
const reg3 = /html$/;
console.log(reg3.test(fileName));
const reg4 = /^\d+$/g;
console.log(reg4.test(num));
const reg5 = /^\s+/;
const reg6 = /^[\s]+/;
console.log(reg5.test(num));
console.log(reg6.test(num));
