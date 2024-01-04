var express = require("express");
const { formidable } = require("formidable");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/portrait", (req, res) => {
  res.render("portrait");
});

router.post("/portrait", function (req, res, next) {
  const form = formidable({
    uploadDir: __dirname + "/../public/images", //一般路径是 ../public/images ，但是
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields); // 存储input表单内容
    console.log(files); //存储文件内容
    let img_server_url = files.portrait.newFilename;
    let url = "/imges/" + img_server_url;  //以后将数据存到数据库中

    res.send(url);
  });
  // res.send("success");
});
module.exports = router;
