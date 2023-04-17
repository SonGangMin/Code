const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const router = express.Router();
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

dotenv.config({ path: path.join(__dirname, "/.env") });
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
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
    name: "session-cookie",
  })
);
app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).send("Not founds");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
