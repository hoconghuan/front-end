import mongoose from "mongoose";
import config from "./config.mjs";
export default (success, error) => {
  mongoose.connect(
    `mongodb://${config.hostname}:${config.port}/${config.name}`
  );

  mongoose.connection.on("connected", () => {
    success();
  });
  mongoose.connection.on("error", (err) => {
    error();
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
  });
};
