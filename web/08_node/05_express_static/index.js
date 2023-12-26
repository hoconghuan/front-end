const express = require('express');
const path = require('path');

const app = express();

// 因为对服务器来说所有的文件都是需要隐藏的，这行代码的意思是调用express的static方法把某个文件夹对外可以访问
app.use(express.static(path.join(__dirname, './public'))) //设置静态默认地址

app.get('/server', (req, res) => {

    //req能接收传递过来的参数，保存在 query方法中 , 拿到query对象中的参数后可以做判断。
    console.log(req.query);

    console.log('receive requst');
    res.send('<h1>server received your request</h1>');
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});