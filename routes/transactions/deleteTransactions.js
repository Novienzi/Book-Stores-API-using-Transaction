const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/transactions', (req, res) => {
    const id = req.query.id
    res.send(db.remove('transactions', id))
})

module.exports = app