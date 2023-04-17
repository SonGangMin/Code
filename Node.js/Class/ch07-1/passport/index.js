const passport = require("passport");
const { user } = require("../models");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    user
      .findOne({
        where: { id },
        include: [
          {
            model: user,
            attributes: ["id", "nick"],
            as: "Follower",
          },
          {
            model: user,
            attributes: ["id", "nick"],
            as: "Following",
          },
        ],
      })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
  local();
  kakao();
};
