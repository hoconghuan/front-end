const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

const middleware = function (req, res, next) {
  let { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./log.txt"),
    `${url}\t${ip}\t\t\r\n`
  );
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  // console.log(req);

  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
