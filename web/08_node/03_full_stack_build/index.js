const express = require('express'); //引入express框架

// 引入node方法
const path = require('path');
const fs = require('fs/promises');

const app = express(); //创建express实例

// 把data文件中的数据用students接收
let students = require('./data/students.json')

app.set('view engine', 'ejs') //设置模块
app.set('views', path.join(__dirname, 'views')) // 第一个是node中的名字，第二个是跳转的路径

app.use(express.static(path.resolve(__dirname, 'public'))) //设置默认路径

// 配置请求体
app.use(express.urlencoded({ extended: true }))



// 下面是服务器对客户端的响应
app.use('/students', (req, res) => {  //路径
    res.render('students', { students })  //需要渲染的对象名称及需要传递的参数， 用 {} 配置的形式传递。
})


// 添加学生
app.post('/add-student', (req, res) => {
    console.log(req.body);
    let student = req.body

    student = {
        id: students.at(-1) ? students.at(-1).id + 1 : 1,
        name: student.name,
        age: student.age,
        gender: student.gender
    }

    students.push(student)

    // 将文件写入本地json文件中
    fs.writeFile(path.resolve(__dirname, './data/students.json'), JSON.stringify(students)).then(
        res.redirect('/students')

    ).catch(err => {

    })


    // 添加完数据后需要返回学生列表的路径，使用重定向

})

app.get('/delete-student', (req, res) => {
    let id = + req.query.id
    students = students.filter(student => student.id !== id)

    fs.writeFile(path.resolve(__dirname, './data/students.json'), JSON.stringify(students)).then(
        res.redirect('/students')

    ).catch(err => {

    })

    res.redirect('/students')
})

// 更新学生
app.get('/update-student', (req, res) => {
    let id = + req.query.id
    let student = students.find(student => student.id == id)

    console.log(student);
    res.render('updates', { student })
})
app.post('/update-student', (req, res) => {
    let id = + req.query.id
    let student = students.find(student => student.id == id)
    let { name, age, gender } = req.body

    student.name = name
    student.age = age
    student.gender = gender

    fs.writeFile(path.resolve(__dirname, './data/students.json'), JSON.stringify(students)).then(
        res.redirect('/students')

    ).catch(err => {

    })

    res.redirect('/students')
})


// 如果前面的都没匹配就发404
app.use((req, res) => {
    res.status(404).send('<h1> your request failed</h1>')
})

app.listen(3000, () => {
    console.log('server is listening');
})