const fs = require('fs')
fs.writeFile('./motos.txt', ' the things cant kill me only make me stronger', err => {
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');
})
fs.appendFile('./final.txt', 'not', (err) => { //追加
    if (err) {
        console.log('追加失败');
        return
    }
    console.log('追加成功');
 })
// 这种适合写入频率低的场景
