// 用promise自定义函数myReadFile 
function myReadFile(path) {
    return new Promise((resolve, reject) => {
        // 调用node中的文件读书命令require('fs') 读取方法 readFile 
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

myReadFile('./resource/content.txt').then((value) => {
    console.log(value.toString());
},
    (reason) => {
        console.log(reason);
    }
)