let counter = {
  num: 0,
  increase: function add() {
    this.num++;
  },
};
counter.increase();
console.log(counter);

var obj = {};
let key = "Hello";

obj[key] = "world";

console.log(obj);
