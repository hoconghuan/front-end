var express = require("express");
var router = express.Router();
var fs = require("fs");
let data = require(__dirname + "/../data/data.json");
const accountModel = require(__dirname + "/../module/accountModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { data });
});

router.get("/add", function (req, res, next) {
  res.render("add");
});
router.post("/add", (req, res) => {
  // console.log(req.body);
  // let newData = {
  //   id: data.length + 1,
  //   ...req.body,
  // };
  // data.push(newData);
  // fs.writeFile(__dirname + "/../data/data.json", JSON.stringify(data), (err) =>
  //   console.log(err.message)
  // );
  // res.send("提交成功");
  accountModel.create({ ...req.body }).then((err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
  res.redirect("/");
});
module.exports = router;
