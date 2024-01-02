const ejs = require("ejs");
const fs = require("fs");

let cn = "china";

// let html = ejs.render(`Im in <%= cn %>`, { cn });
// console.log(html); // Im in china;
let str = fs.readFileSync("./02_ejshtml.html").toString();

let html = ejs.render(str, { cn });
console.log(html);
