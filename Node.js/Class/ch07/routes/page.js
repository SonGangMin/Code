const express = require("express");
// const {
//   renderProfile,
//   renderJoin,
//   renderMain,
// } = require("../controllers/page");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const router = express.Router();
const { post, user, hashtag } = require("../models");

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user?.Follower?.length || 0;
  res.locals.followingCount = req.user?.Following?.length || 0;
  res.locals.followingIdList = req.user?.Following?.map((f) => f.id) || [];
  next();
});

// router.get("/profile", renderProfile);

router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
});

router.get("/", async (req, res, next) => {
  try {
    const posts = await post.findAll({
      include: {
        model: user,
        as: "users",
        attributes: ["id", "nick"],
      },
      order: [["create_at", "DESC"]],
    });
    console.log("lllllllllll", posts);
    res.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/hashtag", async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }
  try {
    const Hashtag = await hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (Hashtag) {
      posts = await Hashtag.getPosts({
        include: [{ model: user, as: "users" }],
      });
    }
    return res.render("main", {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
