const express = require("express");
const bcrypt = require("bcrypt");
const { users } = require("../models");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // username이 이미 존재하는지 확인
    const existingUser = await users.findOne({
      where: { username },
    });

    if (existingUser) {
      return res.status(409).json({ message: "이미 존재하는 유저입니다." });
    }

    const hash = await bcrypt.hash(password, 12);

    await users.create({
      username,
      password: hash,
    });

    return res.status(200).json({ msg: "회원가입성공" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "서버 오류" });
    next(error);
  }
});

router.get("/check", async (req, res) => {
  const { user } = req;
  console.log("dddddddddddddddddddddddd", user);
  if (!user) {
    res.status(401).json({ message: "로그인 중이 아닙니다." });
    return;
  }
  res.json(user);
});

module.exports = router;
