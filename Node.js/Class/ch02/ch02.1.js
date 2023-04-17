const condition = true; // true면 resolve, false면 reject
const promise = new Promise((a, b) => {
  if (condition) {
    a("성공");
  } else {
    b("실패");
  }
});
// 다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      console.log(message);
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })

  .catch((error) => {
    console.error(error);
  });
