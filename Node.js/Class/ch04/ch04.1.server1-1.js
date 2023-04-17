const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node!</h1>");
  res.end("<p>Hello Server!</p>");
});
server.listen(8080);

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다.");
});
server.on("error", (error) => {
  console.error(error);
});

const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node! 8081</h1>");
  res.end("<p>Hello Server! 8081</p>");
});
server2.listen(8081);

server2.on("listening", () => {
  console.log("8081번 포트에서 서버 대기 중입니다.");
});
server2.on("error", (error) => {
  console.error(error);
});
