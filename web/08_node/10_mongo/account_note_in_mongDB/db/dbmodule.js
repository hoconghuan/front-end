const mongoose = require("mongoose");
const config = require("../port_config/config.js");

const db = (success, error) => {
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
    console.log("Disconnected from MongoDB");
  });
};
module.exports = db;
