const fs = require("fs").promises;

//promise를 안썼을때

// fs.writeFile("./writeme.txt", "글이 입력됩니다", (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.readFile("./writeme.txt", (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data.toString());
//   });
// });

//promise를 썻을때
fs.writeFile("./write2.txt", "-----")
  .then(() => {
    return fs.readFile("./write2.txt");
  })
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
