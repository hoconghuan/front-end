// 例4是 自己封装的文件路径  这里用node中的util简化封装

const util = require('util');
const fs = require('fs');
let myReadFile = util.promisify(fs.readFile)

// 这里封装成功直接调用
myReadFile('./resource/content.txt')//调用myReadFile函数的时候不要忘了加路径
    .then((value) => {   //引入路径后用promise的回调函数then返回正确和错误的表达
        console.log(value.toString());
    })