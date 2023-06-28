const fs = require("fs");

// // 这里用的是ES6的回调
// fs.readFile('./resource/content.txt', (err, data) => {
//     if (err) throw err;
//     // console.log(data);    //直接的话显示的是buffer值 要用toString转码
//     console.log(data.toString());
// })

//这里是promise

// promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
})

// promise then 的调用
p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
})