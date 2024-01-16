const mongoose = require("mongoose");
let acount = new mongoose.Schema({
  eve: String,
  time: Date,
  type: String,
  num: Number,
  area: String,
});
let accountModel = mongoose.model("Book", acount);

module.exports = accountModel;
