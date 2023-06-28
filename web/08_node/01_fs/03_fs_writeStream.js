const fs = require('fs')

const writeFile = fs.createWriteStream('./final.txt')  //创建通道

// 写入数据
writeFile.write('为名为利终日劳，')
writeFile.write('中年福禄也多遭。')
writeFile.write('老来是有财星照，')
writeFile.write('不比前番日下高')

writeFile.end() //通道关闭可以手动也可以等代码结束后自动关闭