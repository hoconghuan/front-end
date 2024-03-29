import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/mydatabase");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
