import db from "./dbmodule.mjs";

import bookModel from "./bookModel.mjs";
db(
  () => {
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
