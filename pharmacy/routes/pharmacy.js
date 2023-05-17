var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  let response = null;
  try {
    let api = async () => {
      response = await axios.get(
        "http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",
        {
          params: {
            serviceKey:
              "pgiyBKl24omVoSPYn1XpeUS4ZKJdwlRx56dSac9Vn0exH9nhJ%2F48hsbjnGVFZdNtzb0lGSc5x8Vq03wTJBTkUA%3D%3D&",
            Q0: "서울특별시",
            Q1: "강남구",
            QT: "",
            QN: "",
            ORD: "",
            pageNo: "1",
            numOfRows: "1000",
          },
        }
      );
    };
    api().then((response) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  } catch (e) {
    console.error(e);
  }
  return response;
});

module.exports = router;
