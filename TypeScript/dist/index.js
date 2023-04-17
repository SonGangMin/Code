"use strict";
// import iPerson from "./Person/iPerson";
// import Person from "./Person/Person";
// import { Chance } from "chance";
// import * as R from "ramda";
// import iPerson from "./Person/iPerson";
// const chance = new Chance();
// let persons: iPerson[] = R.range(0, 3).map(
//   (n: number) => new Person(chance.name(), chance.age())
// );
// console.log(persons);
// let n: number =1;
// let b: boolean = true;
// let s: string = 'hello';
// let o: object = {};
// let count = 10,
//   message = "You Count";
// let result = `${message}`;
// console.log(result);
// let o: object = { name: "잭", age: 32 };
// console.log(o);
// o = { first: 1, second: 2 };
// console.log(o);
// interface iPerson {
//   name: string;
//   age: number;
//   etc?: boolean;
// }
// let good: iPerson = { name: "Jack", age: 43 };
// console.log(good);
// // let bad1: iPerson = { name: "Jack" };
// // console.log(bad1);
// let good2: iPerson = { name: "Jack", age: 43, etc: true };
// console.log(good2);
// var namer = require("korean-name-generator");
// var maleName = namer.generate(true);
// var femaleName = namer.generate(false);
// interface Korea {
//   name: string;
//   age: number;
// }
// const chance = new Chance();
// let korea1: Korea[] = R.range(0, 3).map(
//   (n: number) => new Person(namer.generate(), chance.age())
// );
// console.log(korea1);
// class Person1 {
//   name: string;
//   age?: number;
//   setName(name: string) {
//     this.name = name;
//   }
//   setAge(age: number) {
//     this.age = age;
//   }
//   toString() {
//     return this.age
//       ? `{name: ${this.name}, age: ${this.age}}`
//       : `{name: ${this.name}, age: unknown}`;
//   }
// }
// let jack1: Person1 = new Person1();
// jack1.setName("Jack");
// jack1.setAge(32);
// let lee: Person1 = new Person1();
// lee.setName("lee");
// console.log(jack1.toString(), lee.toString());
// class Person2 {
//   public name: string;
//   public age?: number;
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let jack2: Person2 = new Person2("Jack", 32);
// console.log(jack2);
// interface IPerson4 {
//   name: string;
//   age?: number;
// }
// class Person4 implements IPerson4 {
//   constructor(public name: string, public age?: number) {}
//   setName(name: string) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// let jack4: Person4 = new Person4("Jack", 32);
// console.log(jack4);
// jack4.setName("개명");
// console.log(jack4);
// abstract class AbstractPerson5 {
//   abstract name: string;
//   constructor(public age?: number) {}
// }
// class Person5 extends AbstractPerson5 {
//   constructor(public name: string, age?: number) {
//     super(age);
//   }
// }
// let jack5: Person5 = new Person5("잭", 55);
// console.log(jack5);
// abstract class Animal {
//   abstract makeSound(): void;
//   move(distanceInMeters: number = 0) {
//     console.log(`동물이 ${distanceInMeters}미터 움직였다`);
//   }
// }
// class Dog extends Animal {
//   makeSound() {
//     console.log("멍멍멍");
//   }
//   hello() {
//     console.log("담비");
//   }
// }
// class Cat extends Animal {
//   makeSound(): void {
//     console.log("야옹");
//   }
// }
// let dog: Dog = new Dog();
// dog.makeSound();
// dog.hello();
// dog.move(3);
// let an: Animal = new Dog();
// an.makeSound();
// let dog2 = new Dog();
// dog2.makeSound();
// class Polygon {
//   constructor(height, width) {
//     this.name = "Polygon";
//     this.height = height;
//     this.width = width;
//   }
//   sayName() {
//     console.log("Hi, I am a ", this.name + ".");
//   }
//   // setHeight(height) {
//   //   this.height = height;
//   // }
//   setWidth(width) {
//     this.width = width;
//   }
// }
// class Square extends Polygon {
//   constructor(length) {
//     super(length, length);
//     // this.height;
//     // this.width;
//     // this.name = "Square";
//   }
//   setLength(length) {
//     this.height = length;
//     this.setWidth(length);
//   }
// }
// let hi = new Square(3);
// console.log(hi);
// hi.sayName();
// hi.setLength(35);
// console.log(hi);
// class Foo {
//   static count: number = 0;
//   static getCount(): number {
//     return this.count;
//   }
//   static incrementCount(): void {
//     this.count++;
//   }
// }
// console.log(Foo.getCount());
// Foo.incrementCount();
// console.log(Foo.getCount());
// @ts-nocheck
let personName = "Jack";
let personAge = 32;
let companyName = "애플컴퓨터";
let companyAge = 43;
let jack = { name: "Jack", age: 32 };
console.log(jack);
let { name, age } = jack;
