const express = require("express");
const router = express.Router();
const User = require("../models/user");

// router.get("/", (req, res) => {
//   let fr = ["사과", "배", "오렌지"];
//   let isLoggedIn = true;
//   let userid = "plusmail";

//   res.render("index", { title: "Express", fr, isLoggedIn, userid });
// });

router.get("/", (req, res) => {
  let fr = ["사과", "배", "오렌지"];
  let isLoggedIn = false;
  let userid = "plusmail";

  res.render("index.html", { title: "Express", fr, isLoggedIn, userid });
});

router.get("/comments", async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.render("sequelize", { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
