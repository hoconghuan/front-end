var express = require("express");
var router = express.Router();
const usersModel = require("../models/users");
const md5 = require("md5");

router.get("/register", (req, res) => {
  res.render("reg");
});
router.post("/register", function (req, res) {
  // console.log(req.body);

  usersModel
    .create({ ...req.body, password: md5(req.body.password) })
    .then(() => {
      console.log("提交成功");
      res.redirect("/user/register");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", function (req, res) {
  // console.log(req.body);
  let { username, password } = req.body;
  usersModel
    .findOne({ username, password: md5(password) })
    .then((data) => {
      if (!data) {
        res.send("<h1>用户名或密码错误</h1>");
        return;
      }
      console.log("提交成功");
      res.redirect("/user/home");
    })
    .catch((err) => {
      console.log(err.message);
    });
});
router.get("/home", function (req, res, next) {
  usersModel
    .find()
    .then((data) => {
      // console.log(data);
      res.render("users", { data });
      console.log(data);
    })
    .catch((err) => console.log(err.message));
});
module.exports = router;
