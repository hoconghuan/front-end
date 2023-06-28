
const express = require('express');

const app = express();

app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello ajax, can you see me???')
})

app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello ajax in post request')
})

app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('hello ajax in delay')
    }, 5000);
})


//ajax in jQuery
app.all('/jQuery-serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'andy'
    }
    response.send(JSON.stringify(data))
})

app.listen('8080', () => {
    console.log('server is listening on port');
})