const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`);
  }
};

exports.verifyToken = (req, res, next) => {
  try {
    res.locals.decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // 유효기간 초과
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다",
      });
    }
    return res.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰입니다",
    });
  }
};

exports.apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  handler(req, res) {
    res.status(this.statusCode).json({
      code: this.statusCode,
      message: "1분에 한번만해라~",
    });
  },
});

exports.deprecated = (req, res) => {
  res.status(410).json({
    code: 410,
    message: "새로운버전나왓다~",
  });
};
