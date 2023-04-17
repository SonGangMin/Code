//예10-01
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello My name is ${this.name}`);
  },
};

console.log(typeof person);
console.log(person);

var empty = {};
console.log(typeof empty);

//예10-4
var person = {
  firstName: "KangMin",
  "last-name": "Lee",
};
console.log(person);

var obj = {};
var key = "hello";

obj[key] = "world";

console.log(obj);

//예 10-07
var num = {
  "": "",
};

console.log(num);

var foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo);

var son = {
  name: "kangmin",
  name: "gangmin",
};

console.log(son);

//예제 10-11
var circle = {
  radius: 5,

  getDiameter: function () {
    console.log(2 * this.radius);
  },
};

circle.getDiameter();

var cal = {
  sum: function (a, b) {
    return a + b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(cal.sum(1, 2));
console.log(cal.mul(1, 2));

//예10-12
var person = {
  name: "Son",
  age: 32,
};

console.log(person.age);
console.log(person["name"]);

//ex10-15
var person = {
  "last-name": "kangmin",
  1: 10,
};

console.log(person["last-name"]);
console.log(person[last - name]); // ReferenceError 발생
console.log();

//ex10-17
var person = {
  name: "Son",
};

person.age = 31;

console.log(person);

delete person.age;

console.log(person);

//ex 10.9
var a = 1,
  b = 2;

var son = {
  x: a,
  y: b,
};
console.log(son);
console.log("--------------------");

let num1 = 1,
  num2 = 2;

const obj = { num1, num2 };

console.log(obj);

var prefix = "prop";
var i = 0;

var obj = {};

for (var a = 1; a < 4; a++) {
  obj[prefix + "-" + a] = a;
}

console.log(obj);

//ex10-23
var obj = {
  name: "son",
  say: function () {
    console.log("hi~");
  },
};

obj.say();

var obj2 = {
  name: "lee",
  say() {
    console.log("HIHI~");
  },
};

obj2.say();
