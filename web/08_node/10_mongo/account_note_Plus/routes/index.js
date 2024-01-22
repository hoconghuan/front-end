var express = require("express");
var router = express.Router();
const usersModel = require("../models/users");
const md5 = require("md5");
checkMiddleware = require("../Middlewares/checkMiddleware");
router.get("/register", checkMiddleware, (req, res) => {
  res.render("reg");
});
router.post("/register", checkMiddleware, function (req, res) {
  // console.log(req.body);

  usersModel
    .create({ ...req.body, password: md5(req.body.password) })
    .then(() => {
      console.log("re---------提交成功");
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/login", checkMiddleware, (req, res) => {
  res.render("login");
});
router.post("/login", checkMiddleware, function (req, res) {
  // console.log(req.body);
  let { username, password } = req.body;
  usersModel
    .findOne({ username, password: md5(password) })
    .then((data) => {
      if (!data) {
        res.send("<h1>用户名或密码错误</h1>");
        return;
      }
      console.log("login--------------提交成功");
      (req.session.username = data.username), (req.session.userId = data._id);
      res.redirect("/home");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/home", checkMiddleware, function (req, res, next) {
  console.log(req.session);
  if (!req.session.user) {
    return res.redirect("/login");
  }
  usersModel
    .find()
    .then((data) => {
      res.render("users", { data });
    })
    .catch((err) => console.log(err.message));
});
router.get("/home:id", (req, res) => {
  console.log(req.params.id);
  usersModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      // console.log(data);
      res.redirect("/home");
    })
    .catch((err) => console.log(err.message));
});
module.exports = router;
