const express = require("express");

const { verifyToken, deprecated, apiLimiter } = require("../middlewares");
const { domain, user, post, hashtag } = require("../models");
const jwt = require("jsonwebtoken");
const router = express.Router();
const {
  createToken,
  tokenTest,
  getMyPosts,
  getPostsByHashtag,
} = require("../controllers/v2");
// router.use(deprecated);

router.post("/token", apiLimiter, createToken);

router.get("/test", apiLimiter, verifyToken, tokenTest);

router.get("/posts/my", apiLimiter, verifyToken, getMyPosts);

router.get("/posts/hashtag/:title", apiLimiter, verifyToken, getPostsByHashtag);

module.exports = router;
