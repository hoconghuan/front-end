const express = require('express')
const {singers} = require('./data.json')
// console.log(singer);
const app = express()
const port = 3000

app.get('/singer/:id', (req, res) => {
    let { id } = req.params
    let result = singers.find((s) => s.singerid == id)
    if (!result) {
         res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('没有找到该歌手')
        return
    }
    let { singer, singerid } = result
    // console.log(result);
   
    res.send(
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <h2>${singer}</h2>
    <h4>${singerid}</h4>
</body>
</html>`
        )
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))