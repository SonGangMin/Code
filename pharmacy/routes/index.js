var express = require("express");
var router = express.Router();
const axios = require("axios");
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/pharmacy", (req, res) => {
  let api = async () => {
    let response = null;
    try {
      response = await axios.get(
        "http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",
        {
          params: {
            serviceKey:
              "pgiyBKl24omVoSPYn1XpeUS4ZKJdwlRx56dSac9Vn0exH9nhJ/48hsbjnGVFZdNtzb0lGSc5x8Vq03wTJBTkUA==",
            Q0: req.query.Q0,
            Q1: req.query.Q1,
            QT: req.query.QT,
            QN: req.query.QN,
            ORD: req.query.ORD,
            pageNo: req.query.pageNo,
            numOfRows: req.query.numOfRows,
          },
        }
      );
    } catch (e) {
      console.error(e);
    }
    return response;
  };
  api().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body);
  });
});

module.exports = router;
