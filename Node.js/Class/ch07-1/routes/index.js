const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { user, domain } = require("../models");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const User = await user.findOne({
      where: { id: (req.user && req.user.id) || null },
      include: { model: domain },
    });
    res.render("login", {
      User,
      domains: User && User.domains,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/domain", isLoggedIn, async (req, res, next) => {
  try {
    await domain.create({
      UserId: req.user.id,
      host: req.body.host,
      type: req.body.type,
      clientSecret: uuidv4(),
    });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
