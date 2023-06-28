const express = require('express');  // commonJS的引用方法，这里不能用ES6的import from。 虽然它们都是引用

const app = express(); //将express创建到 app上

const history = require('connect-history-api-fallback'); //引入history

app.use(history()); //挂载history函数

app.use(express.static(__dirname + '/static'))  //挂载文件

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(5000, (err) => {
    if (!err) {
        console.log('5000端口监听中。。。。');
    }

})


