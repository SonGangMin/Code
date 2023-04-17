const A = require("./ch03.4.globalA");

global.message = "안녕하세요";
console.log(A());
console.log(message);
