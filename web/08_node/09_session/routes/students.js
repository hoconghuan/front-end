const express = require('express');
const router = express.Router();
const fs = require('fs/promises');
const path = require('path');


let students = require('../data/students.json')


// 获取学生信息
// router.get('/', (req, res) => {
//     if (req.session.login) { //校验权限，       //但是这里校验了，下面路由切换时每个都还得再添加校验，这里需要路由中的前置路由了。
//         res.render('students', { students })
//     } else {
//         res.redirect('/')
//     }
// })

router.use((req, res, next) => {      //这里相当于设置了个前置路由守卫。
    if (req.session.login) {
        next()
    } else {
        res.redirect('/')
    }
})
router.get('/', (req, res) => {
    res.render('students', { students })
})

// 添加学生信息
router.post('/add', (req, res) => {

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
    fs.writeFile(path.resolve(__dirname, '../data/students.json'), JSON.stringify(students)).then(
        res.redirect('/students')    // 添加完数据后需要返回学生列表的路径，使用重定向

    ).catch(err => {

    })

})

// 删除学生信息
router.get('/delete', (req, res) => {
    let id = + req.query.id
    students = students.filter(student => student.id !== id)

    fs.writeFile(path.resolve(__dirname, '../data/students.json'), JSON.stringify(students)).then(
        res.redirect('/students')

    ).catch(err => {

    })

})

// 更新学生
router.get('/update', (req, res) => {
    let id = + req.query.id
    let student = students.find(student => student.id == id)

    console.log(student);
    res.render('updates', { student })
})
router.post('/update', (req, res) => {
    let id = + req.query.id
    let student = students.find(student => student.id == id)
    let { name, age, gender } = req.body

    student.name = name
    student.age = age
    student.gender = gender

    fs.writeFile(path.resolve(__dirname, '../data/students.json'), JSON.stringify(students)).then(
        res.redirect('/students')

    ).catch(err => {

    })

})


module.exports = router