// import iPerson from "./Person/iPerson";
// import Person from "./Person/Person";
// import { Chance } from "chance";
// import * as R from "ramda";

import { values } from "ramda";

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

// interface IPerson {
//   name: string;
//   age: number;
// }
// let jack: IPerson = { name: "Jack", age: 32 };
// console.log(jack);
// let { name, age } = jack;

// let address: any = {
//   country: "한국",
//   city: "대구",
//   address1: "서구",
//   address2: "내당동",
//   address3: "영남인재교육원",
// };
// console.log(typeof address);
// let countryNew = address.country;
// const { ...detail } = address;
// console.log(detail);
// console.log(address);
// console.log(address.country);
// console.log(detail.city);
// console.log(address == detail);

// let strValue: any = "10.01";
// console.log(typeof strValue);

// let numValue3: number = parseFloat(strValue);
// console.log(typeof numValue3);

// let person: any = { name: "jack", age: 32 };
// console.log(typeof person);
// console.log(person as string);
// console.log(typeof (person as string));
// console.log(typeof `${person}`);

// function add(a: number, b: number): string {
//   let c = a + b;
//   return c.toString();
// }

// console.log(add(1, 2));
// console.log(typeof add(1, 2));

// function callFunction(f: (s: string) => void, s: string) {
//   f(s);
// }
// function print(s: string) {
//   console.log(s);
// }
// callFunction(print, "hello");

// function call(f: () => number, f2: () => number) {
//   return f() * f2();
// }

// function add(a: number, b: number): () => number {
//   return () => a + b;
// }

// console.log(call(add(1, 2), add(2, 3)));

// let printMe2: (arg0: string, arg1: number) => void = function (
//   name: string,
//   age: number
// ): void {};

// function fn(arg?: number) {
//   console.log(`arg: ${arg}`);
// }
// fn(1);
// fn();

// type OptionalArgFunc = (arg?: number) => void;
// let h: OptionalArgFunc = fn;
// h(10);

// interface IAgeable {
//   age?: number;
// }
// function getAge(o?: IAgeable | null) {
//   return o != undefined && o.age ? o.age : 0;
// }

// console.log(getAge(undefined));
// console.log(getAge(null));
// console.log(getAge({ age: 32 }));

// type stringNumberFunc = (a: string, b: number) => void;
// let f: stringNumberFunc = function (a, b?): void {};
// let g: stringNumberFunc = function (c, d?): void {};

// console.log(f("1", 2));

// const init = (callback: () => void): void => {ㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂ
//   console.log("default initialization finised");
//   callback();
//   console.log("all initialization finished.");
// };

// init(() => console.log("하하"));

// const arrow2 = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(arrow2(1, 2));
// console.log(typeof arrow2(1, 2).toString);

// const calc = (value: number, cb: (a: number) => void): void => {
//   let add = (a: number, b: number): number => a + b;
//   let multiply = (a: number, b: number): number => a * b;
//   let result = multiply(add(1, 2), value);
//   cb(result);
// };
// calc(30, (result: number) => console.log(`result is ${result}`));
// console.log();

// import { NumberToNumberFunc, add } from "./add";

// let fn: NumberToNumberFunc = add(1);
// let result = fn(2);
// console.log(result);
// console.log(add(1)(2));

// type Person = { name: string; age: number };
// const makePerson = (name: string, age: number = 10): Person => {
//   let person = { name, age };
//   return person;
// };

// console.log(makePerson("이순신"));
// console.log(makePerson("강감찬", 33));

// const makeObject = (key: string, value: string) => ({ [key]: value });

// console.log(makeObject("이름", "손강민"));

// type humanInfo = Record<string, number>;

// let human: humanInfo = {
//   홍길동: 20,
// };
// console.log(human);

class TodoList {
  private items: string[];

  constructor() {
    this.items = [];
  }

  public add(item: string): void {
    this.items.push(item);
  }

  public [Symbol.iterator](): Iterator<string> {
    let currentIndex = 0;
    const items = this.items;
    return {
      next(): IteratorResult<string> {
        const done = currentIndex >= items.length;
        const value = !done ? items[currentIndex] : null;
        currentIndex++;
        return { value, done };
      },
    };
  }
}

const todoList = new TodoList();
todoList.add("Study TypeScript");
todoList.add("Do laundry");
todoList.add("Walk the dog");

for (const item of todoList) {
  console.log(item);
}
class TodoList {
  private items: string[];

  constructor() {
    this.items = [];
  }

  public add(item: string): void {
    this.items.push(item);
  }

  public [Symbol.iterator](): {
    next(): { value: string | null; done: boolean };
  } {
    let currentIndex = 0;
    const items = this.items;
    return {
      next(): { value: string | null; done: boolean } {
        const done = currentIndex >= items.length;
        const value = !done ? items[currentIndex] : null;
        currentIndex++;
        return { value, done };
      },
    };
  }
}

const todoList = new TodoList();
todoList.add("Study TypeScript");
todoList.add("Do laundry");
todoList.add("Walk the dog");

for (const item of todoList) {
  console.log(item);
}
