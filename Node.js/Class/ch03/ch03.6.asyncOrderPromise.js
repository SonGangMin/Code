const fs = require("fs").promises;

console.log("Start");
fs.readFile("./readme.txt")
  .then((data) => {
    console.log("1번", data.toString());
    return fs.readFile("./readme.txt");
    return fs.readFile("./readme2.txt");
  })
  .then((data) => {
    console.log("2번", data.toString());
    return fs.readFile("./readme.txt");
  })
  .catch((err) => {
    console.error(err);
  });
