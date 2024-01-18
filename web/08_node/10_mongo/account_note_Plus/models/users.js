const mongoose = require("mongoose");
let users = new mongoose.Schema({
  username: String,
  password: String,
});
let usersModel = mongoose.model("users", users);
module.exports = usersModel;
