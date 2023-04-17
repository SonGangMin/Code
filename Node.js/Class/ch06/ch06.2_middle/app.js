const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const iconv = require("iconv-lite");
const fs = require("fs");
const bodyParser = require("body-parser");

dotenv.config({ path: path.join(__dirname, "/.env") });

const app = express();

console.log("포트:", process.env.PORT);
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
app.use((req, res, next) => {
  console.log("모들 요청에 실행 되는 미들웨어");
  next();
});

app.use(morgan("combined"));
app.use("/", morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
try {
  fs.readdirSync("uploads");
} catch (err) {
  console.error("upload폴더가 없어 upload폴더 생성합니다");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      file.originalname = Buffer.from(file.originalname, "latin1").toString(
        "utf8"
      );
      done(null, new Date().valueOf() + "_" + file.originalname);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// app.get("/upload", (req, res) => {
//   res.sendFile(path.join(__dirname, "multipart.html"));
// });
// app.post("/upload", upload.array("image"), (req, res) => {
//   console.log(req.files, req.body);
//   res.send("성공");
// });                  // 파일업로드란 하나일때

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});
app.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send("성공");
  }
); // 파일업로드란 여러개일때

app.use("/", express.static(path.join(__dirname, "public")));
// app.use(bodyParser.json()); //express 4.17이전
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/set-session", (req, res) => {
  req.session.username = "강감찬"; // 서버의 Session공간에 저장되어 있다.
  res.send("Session set!!!");
});
app.get("/get-session", (req, res) => {
  const username = req.session.username;
  res.send(`안녕하세요 ${username}님`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.query;
  if (username === "john" && password === "1234") {
    req.session.username = username; // 유저 정보를 세션에 저장
    res.send("Logged in successfully!");
  } else {
    res.send("Invalid username or password");
  }
});

app.get(
  "/",
  (req, res, next) => {
    console.log("body", req.body.name);
    console.log("query:", req.query);
    console.log("query:", req.query.name);
    console.log("query:", req.query.address);
    next();
  },
  (req, res, next) => {
    console.log("2번째 미들웨어");
    next();
  },
  (req, res) => {
    console.log("3번째 미들웨어");
    let testJson = { name: "홍길동", age: 45 };
    res.json(testJson);
    // res.status(200).sendFile(path.join(__dirname,'/index.html'));
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).sendFile(path.join(__dirname, "error.html"));
});

app.post("/", (req, res) => {
  console.log("body", req.body);
  console.log("query:", req.query);
  console.log("query:", req.query.name);
  console.log("query:", req.query.address);
  let testJson = { name: "이순신", age: 40 };
  res.json(testJson);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "포트가 대기중 .....");
});
