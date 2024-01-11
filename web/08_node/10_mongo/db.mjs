import mongoose from "mongoose";
export default db = () => {
  mongoose.connect("mongodb://localhost/mydatabase");

  mongoose.connection.on("connected", () => {});
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB", err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
  });
};
