import db from "./dbmodule.mjs";
import mongoose from "mongoose";
import bookSchema from "./Schema.mjs";
db(
  () => {
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
  },
  (err) => {
    console.log("error");
  }
);
