// const fs = require('fs');
// const path = require('path');

// 同步方法
// const buf = fs.readFileSync(path.resolve(__dirname, './final.txt'))

// console.log(buf.toString())


// // 异步方法
// fs.readFile(
//     path.resolve(__dirname, './final.txt'),
//     (err, buf) => {
//         if (err) {
//             console.log('something is wrong');
//         } else {
//             console.log(buf.toString());
//         }

//     })


// 这是异步promise的方法
const fs = require('fs/promises')
const path = require('path');

fs.readFile(path.resolve(__dirname, './final.txt')).then(
    buf => {
        console.log(buf.toString());
    }
).catch(
    err => console.log(err)
)