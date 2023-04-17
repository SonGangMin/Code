// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     return Math.PI * this.radius ** 2;
//   };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea);
// console.log(circle2.getArea);
//
//
//
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea);
// console.log(circle2.getArea);
//
//
//
// const obj = {};
// const parent = { x: 1 };
// const two = 2;

// console.log(obj.__proto__);
// obj.__proto__ = parent;
// console.log(obj.x);
// console.log(obj.__proto__);
// obj.age = two;
// console.log(obj);
//
//
//
// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayHello = function () {
//     console.log(`Hi! ${this.name}`);
//   };
//   return Person;
// })();

// const me = new Person("Lee");

// me.sayHello();

// me.sayHello = function () {
//   console.log(`Hey! ${this.name}`);
// };

// me.sayHello();

// delete me.sayHello;
// me.sayHello();
//
//
//
const Person = function () {
  function Person(name) {}
};
