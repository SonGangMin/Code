const express = require("express");
const router = express.Router();

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "edurootroot",
  database: "sqldb",
});

connection.connect();

router.get("/", (req, res) => {
  const phoneBook = [
    {
      name: "이순신",
      age: "54",
      job: "군인",
      phone: "010-1212121",
    },
    {
      name: "홍길동",
      age: "34",
      job: "학생",
      phone: "010-222-3333",
    },
  ];

  const fruits = new Map([
    ["banana", "yellow"],
    ["apple", "red"],
    ["peach", "pink"],
  ]);
  res.render("body", { phoneBook });
});
// router.get('/:id', (req, res) => {
//     let qs = 'select * from user where id=' + req.params.id + '';
//     console.log(req.params, req.query);
//     res.send('user/:id');
// });

router.get("/dblist", (req, res) => {
  connection.query("SELECT * from usertbl", (error, rows, fields) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.render("dblist", { rows });
  });
});
router.get("/dbdelete/:id", (req, res) => {
  const sql = "DELETE from usertbl where userID=?";
  connection.query(sql, [req.params.id], (error, rows, fields) => {
    if (error) throw error;
    console.log("User info is: ", result);
    res.redirect("/user/dblist");
  });
});
router.get("/dbinsert", (req, res) => {
  res.render("dbinsert");
});
router.post("/dbinsert", (req, res) => {
  console.log(req.params, req.body, req.query);
  const sql =
    "INSERT INTO usertbl (userID,name,birthYear,addr,mobile1,mobile2,height)" +
    "VALUE(?,?,?,?,?,?,?)";
  let params = [];
  for (let param in req.body) {
    params.push(req.body[param]);
  } //for문으로 이렇게짧게 쓰거나 밑에 7줄 쓰거나
  // params.push(req.body.userID);
  // params.push(req.body.name);
  // params.push(req.body.birthYear);
  // params.push(req.body.addr);
  // params.push(req.body.mobile1);
  // params.push(req.body.mobile2);
  // params.push(req.body.height);

  connection.query(sql, params, (error, result, fields) => {
    if (error) {
      throw error;
      res.send("에러발생");
    }
  });
  res.send("<script>alert('등록완료'); location.href='/user/dblist'</script>");
});
router.get("/dbupdate/:id", (req, res) => {
  const sql = "SELECT * FROM usertbl where userID= ?";
  connection.query(sql, req.params.id, (error, result, fields) => {
    if (error) {
      throw error;
      res.send("에러발생");
    } else {
      // const rest = result[0];
      res.render("dbupdate", { result: result[0] });
    }
  });
});
router.post("/dbupdate/:id", (req, res) => {
  const sql =
    "UPDATE usertbl " +
    "SET name=?,birthYear=?,addr=?,mobile1=?,mobile2=?,height=? " +
    "where userID='" +
    req.params.id +
    "'";
  let params = [];
  params.push(req.body.name);
  params.push(req.body.birthYear);
  params.push(req.body.addr);
  params.push(req.body.mobile1);
  params.push(req.body.mobile2);
  params.push(req.body.height);
  connection.query(sql, params, (error, result, fields) => {
    if (error) {
      throw error;
      res.send("에러발생");
    }
  });
  res.send("<script>alert('수정 완료'); location.href='/user/dblist'</script>");
});
// connection.end();
module.exports = router;
