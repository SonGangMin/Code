process.on("uncaughtException", (err) => {
  console.error("예기치못한에러", err);
});

setInterval(() => {
  throw new Error("서버를 고장");
}, 1000);
setTimeout(() => {
  console.log("실행됩니다");
}, 2000);
