const express = require('express'); //引入express框架

// 引入node方法
const path = require('path');


const app = express(); //创建express实例


const userRouter = require('./routes/user')
const goodsRouter = require('./routes/goods')



app.set('view engine', 'ejs') //设置模块
app.set('views', path.join(__dirname, 'views')) // 第一个是node中的名字，第二个是跳转的路径

app.use(express.static(path.resolve(__dirname, 'public'))) //设置默认路径

// 配置请求体
app.use(express.urlencoded({ extended: true }))




app.use('/user', userRouter)
app.use('/goods', goodsRouter)
app.use('/students', require('./routes/students'))




// 如果前面的都没匹配就发404
app.use((req, res) => {
    res.status(404).send('<h1> your request failed</h1>')
})

app.listen(3000, () => {
    console.log('server is listening');
})