const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/customer', (req, res) => {
    const result = db.get('customer', req.query)
    res.send(result)
})


module.exports = app