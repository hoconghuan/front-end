const mongoose = require("mongoose");
const config = require("./config.js");
const dbmodule = (success, error) => {
  if (typeof error !== "function") {
    error = () => {
      console.log("连接失败~~~");
    };
  }
  mongoose.connect(
    `mongodb://${config.hostname}:${config.port}/${config.name}`
  );

  mongoose.connection.on("connected", () => {
    success();
  });
  mongoose.connection.on("error", () => {
    error();
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected = require() MongoDB");
  });
};
module.exports = dbmodule;
