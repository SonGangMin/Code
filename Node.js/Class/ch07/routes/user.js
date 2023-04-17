const express = require("express");
const { isLoggedIn } = require("../middlewares");
const { user } = require("../models");
const router = express.Router();

router.post("/:id/follow", isLoggedIn, async (req, res, next) => {
  try {
    const User = await user.findOne({
      where: { id: req.user.id },
    });
    if (User) {
      await User.addFollowing(parseInt(req.params.id, 10));
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
