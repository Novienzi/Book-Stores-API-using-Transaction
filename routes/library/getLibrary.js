const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/library', (req, res) => {
    const result = db.get('library', req.query)
    res.send(result)
})


module.exports = app