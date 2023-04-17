// const person = {
//   name: "lee",
//   age: 24,
// };
// console.log(Object.getOwnPropertyDescriptors(person));

//ex16-6
const person = {
  firstName: "KangMin",
  lastName: "Son",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
console.log(person.firstName + " " + person.lastName);

person.fullName = "ByungJae Kim";
console.log(person);
console.log(person.fullName);
