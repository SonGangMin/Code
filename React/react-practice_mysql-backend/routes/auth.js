const express = require("express");
const { register, check, login } = require("../controllers/auth");
const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

router.post("/register", register);
router.get("/check", check);
router.post("/login", login);

module.exports = router;
