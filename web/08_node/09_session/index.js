const express = require('express')
const path = require('path')
const fs = require('fs/promises')
const app = express()
const session = require('express-session')
const userRouter = require('./routes/students')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "code"
}))
app.use('/students', userRouter)

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res, next) => {
    const { username, password } = req.body
    if (username === 'admin' && password === '123456') {
        req.session.login = username
        res.redirect('/students')
    } else {
        res.send('username or password is incorrect')

    }
})


app.use((req, res) => {
    res.status(404).send("<h1>您访问的页面已经被外星人劫持</h1>")
})

app.listen(3000, () => {
    console.log('server is running');
})