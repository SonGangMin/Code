const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const ejs = require("ejs");
const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors");
const jwtMiddleware = require("./middlewares/jwtMiddleware");
dotenv.config();
const authRouter = require("./routes/auth");
const { sequelize } = require("./models");
const passportConfig = require("./passport");
const bodyParser = require("body-parser");

const app = express();
passportConfig();
app.set("view engine", "ejs");
const corsOptions = {
  origin: "http://localhost:3000", // 클라이언트 도메인
  credentials: true,
};
app.use(cors(corsOptions));
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공~");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(jwtMiddleware);

app.use("/auth", authRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중~~");
});

module.exports = app;
