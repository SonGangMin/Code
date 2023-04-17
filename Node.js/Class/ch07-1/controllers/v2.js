const jwt = require("jsonwebtoken");
const { domain, user, post, hashtag } = require("../models");
const { verifyToken, deprecated, apiLimiter } = require("../middlewares");

exports.createToken = async (req, res) => {
  const { clientSecret } = req.body;
  try {
    const Domain = await domain.findOne({
      where: { clientSecret },
      include: {
        model: user,
        attributes: ["nick", "id"],
      },
    });
    console.log("3333333333", Domain);
    if (!Domain) {
      return res.status(401).json({
        code: 401,
        message: "등록되지 않은 도메인 입니다. 등록부터 하세요.",
      });
    }
    const token = jwt.sign(
      {
        id: Domain.user.id,
        nick: Domain.user.nick,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
        issuer: "nodebird",
      }
    );

    return res.json({
      code: 200,
      message: "토큰이 발급 되었습니다.",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
};

exports.tokenTest = (req, res) => {
  res.json(res.locals.decoded);
};

exports.getMyPosts = (req, res) => {
  post
    .findAll({
      where: { user_id: res.locals.decoded.id },
    })
    .then((posts) => {
      res.json({
        code: 200,
        payload: posts,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        code: 500,
        message: "서버에러~",
      });
    });
  console.log("2222", post);
};

exports.getPostsByHashtag = async (req, res) => {
  try {
    const Hashtag = await hashtag.findOne({
      where: { title: req.params.title },
    });
    if (!Hashtag) {
      return res.status(404).json({
        code: 404,
        message: "검색결과없다~",
      });
    }
    const posts = await Hashtag.getPosts();
    return res.json({
      code: 200,
      payload: posts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "서버에러다~",
    });
  }
};
