const express = require('express');
const path = require('path');


const app = express();

let students = [
    {
        id: 1,
        name: 'andy',
        age: 18,
        gender: 'male',

    },
    {
        id: 2,
        name: 'bob',
        age: 28,
        gender: 'male',

    },
    {
        id: 3,
        name: 'red',
        age: 38,
        gender: 'male',

    }
]

app.set('view engine', 'ejs') //设置模块
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.resolve(__dirname, 'public')))
// 配置请求体
app.use(express.urlencoded({ extended: true }))

app.use('/students', (req, res) => {
    res.render('students', { students })
})

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

    // 添加完数据后需要返回学生列表的路径，使用重定向
    res.redirect('/students')

})

app.get('/delete-student', (req, res) => {
    let id = + req.query.id
    students = students.filter(student => student.id !== id)

    res.redirect('/students')
})


// 如果前面的都没匹配就发404
app.use((req, res) => {
    res.status(404).send('<h1> your request failed</h1>')
})

app.listen(3000, () => {
    console.log('server is listening');
})