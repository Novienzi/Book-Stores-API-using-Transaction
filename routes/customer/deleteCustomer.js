const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/customer', (req, res) => {
    const id = req.query.id
    res.send(db.remove('customer', id))
})

module.exports = app