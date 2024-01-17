import mongoose from "mongoose";
let bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
});
let bookModel = mongoose.model("Book", bookSchema);
export default bookModel;
