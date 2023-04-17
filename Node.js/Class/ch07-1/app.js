const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const passport = require("passport");
const v1 = require("./routes/v1");
const v2 = require("./routes/v2");
const cors = require("cors");

dotenv.config();

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");

const passportConfig = require("./passport");

const db = require("./models/index");
const {} = require("./models/index"); // ./models/index.js에서 설정한 연결된 모델들을 가져온다

// const student = require('./models/Student');
// const sequelize = db.sequelize;
// const Student = db["Student"];
// const ScholarshipAccount = db["ScholarshipAccount"];
// const Course = db["Course"];
// const Professor = db["Professor"];

const app = express();
passportConfig();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/v1", v1);
app.use("/v2", v2);
app.use("/auth", authRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

app.get("*", async (req, res, next) => {
  try {
    const _comments = await Student.findAll({
      // 바로 쿼리문 사용, // 위 init-models.js에서 정의한 alias를 반드시 기재
      where: { id: 2 },
    });
    console.log(_comments);
    res.json(_comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
