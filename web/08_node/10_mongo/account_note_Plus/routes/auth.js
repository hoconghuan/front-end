var express = require("express");
var router = express.Router();
const usersModel = require("../models/users");
const md5 = require("md5");

router.get("/login", (req, res) => {
  res.render("reg");
});
router.post("/login", function (req, res) {
  // console.log(req.body);

  usersModel
    .create({ ...req.body, password: md5(req.body.password) })
    .then(() => {
      console.log("提交成功");
      res.redirect("/lg/login");
    })
    .catch((err) => {
      console.log(err.message);
    });
});
module.exports = router;
