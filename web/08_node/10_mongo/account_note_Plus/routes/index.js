var express = require("express");
var router = express.Router();
const accountModel = require("../models/account.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  accountModel
    .find()
    .then((data) => {
      // console.log(data);
      res.render("index", { data });
    })
    .catch((err) => console.log(err.message));
});

router.get("/add", function (req, res, next) {
  res.render("add");
});
router.post("/add", (req, res) => {
  // console.log(req.body);

  accountModel
    .create(req.body)
    .then(() => {
      console.log("提交成功");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/:id", (req, res) => {
  // console.log(req.params.id);
  accountModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("删除成功");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
