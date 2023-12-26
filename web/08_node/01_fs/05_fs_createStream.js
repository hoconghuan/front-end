const fs = require('fs');

const readStream = fs.createReadStream('./final.txt')

const writeStream = fs.createWriteStream('./final-2.txt',)

readStream.on('data', chunk => {
    writeStream.write(chunk)
})
writeStream.write('hahahah')

    

