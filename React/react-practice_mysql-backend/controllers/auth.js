const bcrypt = require("bcrypt");
const passport = require("passport");
const { users } = require("../models");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return token;
};
exports.register = async (req, res, next) => {
  const registerSchema = Joi.object({
    id: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const { error } = registerSchema.validate(req.body);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
    return;
  }
  const { id, password } = req.body;
  try {
    const exUser = await users.findOne({ where: { id } });
    if (exUser) {
      res.status(409).json({ msg: "이미존재함" });
      return;
    }
    const hash = await bcrypt.hash(password, 12);
    await users.create({
      id,
      password: hash,
    });

    const token = generateToken({ id, password });
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
    res.status(200).json({ msg: "가입성공" });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "서버오류" });
    return;
    next(err);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }

    if (!user) {
      res.status(401).json({ msg: "로그인 실패" });
      return;
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      res.status(200).json({ msg: "로그인성공" });
      return;
    });
  })(req, res, next);
};

exports.check = (req, res, next) => {
  const token = res.cookies.access_token;
  console.log("dddddddddddddddddddddddddd", token);
  if (token) {
    // 로그인 중이 아님
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  res.json(req.user);
};
