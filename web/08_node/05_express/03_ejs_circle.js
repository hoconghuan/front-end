let xiyou = ["tangsen", "wukong", "bajie", "sasen"];

const ejs = require("ejs");
const fs = require("fs");

const template = fs.readFileSync("./03att.html", "utf-8");
const output = ejs.render(template, { xiyou });
console.log(output);
