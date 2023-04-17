const fs = require("fs").promises;

fs.copyFile("./readme.txt", "./copy.txt")
  .then(() => {
    console.log("복사완료");
  })
  .catch((err) => {
    console.log(err);
  });
