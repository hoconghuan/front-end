const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
    res.send('Im in goods')
})

module.exports = router