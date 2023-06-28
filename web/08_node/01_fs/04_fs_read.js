const fs = require('fs');

fs.readFile('./final.txt', (err, data) => {
    if (err) {
        console.log('读取失败');
        return
    }
    console.log(data.toString());
})


let data = fs.readFileSync('./final.txt')
console.log(data.toString());