const mongoose = require("mongoose");
let account = new mongoose.Schema({
  eve: String,
  time: { type: Date, default: Date.now },
  choose: String,
  num: Number,
  area: String,
});
let accountModel = mongoose.model("Book", account);
module.exports = accountModel;
