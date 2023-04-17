const fs = require("fs");
let data1 = "";

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
  data1 = data;
});

console.log(data1);
