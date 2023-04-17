// function addNum(...numbers) {
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return sum;
// }

// console.log(addNum(1, 2, 3, 4, 5, 6));
// console.log(addNum(1, 5, 2, 3, 23));

// let animal = ["bird", "hamster"];
// let fruit = ["apple", "watermelon", "melon"];

// let hh = animal.concat(fruit);
// console.log(hh);

// [...animal, ...fruit];

// const book = {
//   title: "Javascript",
//   pages: 500,
// };

// // book.published date = "2022-01"
// book["published date"] = "2022-01";
// console.log(book);

// function fn() {
//   return "result";
// }
// function add(a, b) {
//   return a + b;
// }
// const obj = {
//   [fn()]: "키",
//   [`${add(1, 2)} key`]: "게산식 키",
// };

// console.log(obj);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }
// let user1 = makeUser("백두산", 20);

// console.log(user1);

// function makeUser1(name, age) {
//   return { name, age };
// }
// let user2 = makeUser1("백두산", 30);
// console.log(user2);

// const id = Symbol("id");
// const tel = Symbol("telephone number");
// const member = {
//   name: "Son",
//   age: 31,
//   [id]: 1235,
//   [tel]: function () {
//     alert(prompt("전화번호 : "));
//   },
// };

// for (item in member) {
//   console.log(`${item} : ${member[item]}`);
// }

// console.log(member[id]);

// let tel = Symbol.for("tel");
// let phone = Symbol.for("tel");
// console.log(tel === phone);
// console.log(phone);

// class Book {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }
//   buy() {
//     console.log(`${this.title}과 ${this.price}`);
//   }
// }

// let book1 = new Book("하이", 1000);
// book1.buy();

// class Textbook extends Book {
//   constructor(title, price, major) {
//     super(title, price);
//     this.major = major;
//   }
//   buyTextbook() {
//     console.log(`${this.title}타이틀 ${this.price}가격 ${this.major}`);
//   }
// }
// let book2 = new Textbook("ㅇㅇ", 10000, "컴공");
// book2.buyTextbook();
// book2.buy();

// class Unit {
//   constructor(name, hp, damage) {
//     this.name = name;
//     this.hp = hp;
//     this.damage = damage;
//   }

//   attack(target) {
//     console.log(
//       `${this.name}이 ${target.name}에게 ${this.damage}의 데미지를 주었다`
//     );
//     target.takeDamage(this.damage);
//   }
//   takeDamage(damage) {
//     this.hp -= damage;
//     console.log(`${this.name}가 ${damage}를 입었다 현재hp = ${this.hp}`);
//     if (this.hp <= 0) {
//       console.log(`${this.name}가 죽었습니다.`);
//     }
//   }
// }

// class Marine extends Unit {
//   constructor(name) {
//     super(name, 40, 6);
//   }

//   stimpack() {
//     console.log(`${this.name}가 스팀팩 사용. 데미지량 증가`);
//     this.damage *= 2;
//   }
// }

// class Zealot extends Unit {
//   constructor(name) {
//     super(name, 100, 8);
//   }
//   charge() {
//     console.log(`${this.name}가 적압에서 까불고 있따.`);
//     this.damage *= 2;
//   }
// }

// const jim = new Marine("짐");
// const jim2 = new Marine("짐2");

// const artanis = new Zealot("질럿");

// jim.stimpack();
// artanis.charge();
// jim.attack(artanis);
// artanis.attack(jim);

// let tel = Symbol.for("tel");
// let phone = Symbol.for("tel");
// console.log(tel);
// console.log(Symbol.keyFor(phone));

// let [apple, peach] = ["사과", "복숭아"];
// console.log(apple);
// console.log(peach);

// const fruits = ["포도", "샤인머스캣", "수박", "딸기", "사과"];
// let [son, kang, Min] = fruits;

// console.log(son);
// console.log(kang);
// console.log(Min);

// let [teacher, ...student] = fruits;
// console.log(teacher);
// console.log(student);

// [son, kang] = [kang, son];
// console.log(son);
// console.log(kang);

// const member = {
//   name: "Son",
//   age: 31,
// };

// let { name, age } = member;
// console.log(name);
// console.log(member);

// let { name: userName, age } = member;
// console.log(userName);

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map((number) => number * 2);
// let newNum = numbers.map(function (number2) {
//   return number2 * 3;
// });
// console.log(newNumbers);
// console.log(newNum);

// let newNumbers2 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers2);

// let scores = [90, 80, 70, 100, 25];
// let highScores = scores.filter((score) => score >= 85);
// console.log(highScores);
// let lowScores = scores.filter(function (score) {
//   if (score < 85) return score;
// });
// console.log(lowScores);
// let evenScore = scores.filter((score, index) => {
//   if (score % 2 == 0) {
//     console.log(`index : ${index}, score : ${score}`);
//     return score;
//   }
// });
// console.log(evenScore);

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.reduce((total, current) => total + current, 0);
// console.log(result);

// const values = [1, 2, 3, 4, 5, 6];

// const average = values.reduce((acc, cur, i, { length }) => {
//   return i === length - 1 ? (acc + cur) / length : acc + cur;
// }, 0);
// console.log(average);

// const max = values.reduce((acc, cur) => {
//   return acc > cur ? acc : cur;
// }, 0);
// console.log(max);

// let bag = new Map();
// bag.set("color", "red");
// bag.set("type", "mini").set("purpose", "daily");

// console.log(bag);

// let myCup = new Map([
//   ["color", "white"],
//   ["haveHandle", true],
//   ["material", "ceramic"],
//   ["capacity", "300ml"],
// ]);
// console.log(myCup);

// console.log(bag.get("color"));
// console.log(myCup.size);
// bag.clear();
// console.log(bag);

// const student = {
//   name: "강민",
//   score: {
//     history: 85,
//     science: 94,
//   },
//   friends: ["Kim", "Lee", "Park"],
// };

// let { name, score, friends } = student;

// console.log(student);
// console.log(score);

// let myCup = new Map([
//   ["color", "white"],
//   ["haveHandle", true],
//   ["material", "ceramic"],
//   ["capacity", "300ml"],
// ]);

// console.log(typeof myCup);
// for (let key of myCup.keys()) {
//   console.log(key);
// }
// for (let key of myCup.values()) {
//   console.log(key);
// }

// class Book2 {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//   }
//   finish() {
//     let str = "";
//     this.done === false ? (str = "읽는중") : (str = "완독");
//     return str;
//   }
// }

// let mymy = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(mymy);

// for (let key of mymy) {
//   console.log(key);
// }

// let name = ["강민", "병제", "나나나"];
// for (let i in name) {
//   console.log(i);
// }

// let numSet1 = new Set();
// numSet1.add("one");
// numSet1.add("two");

// console.log(numSet1);

// let numSet2 = new Set().add("one").add("three");
// console.log(numSet2);

// let numSet3 = new Set([1, 2, 3, 1]);
// console.log(numSet3);


// let hi = "hello"

// for(let ch of hi){
//     console.log(ch);
// }

// let chArray = [...hi]
// console.log(chArray);

// let[ch1,ch2]=hi
// console.log(ch1);
// console.log(ch2);



// let arr = [1,2,3,4,5]
// let it = arr[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function * gen(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let g1=gen()
// console.log(g1.next());


const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = [member1, member2, member3];
console.log(subjects);