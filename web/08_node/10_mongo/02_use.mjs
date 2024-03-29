import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/mydatabase");

mongoose.connection.on("connected", () => {
  let bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });
  let bookModel = mongoose.model("Book", bookSchema);
  bookModel
    .create({
      name: "西游记",
      author: "吴承恩",
      price: 100,
    })
    .then((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
