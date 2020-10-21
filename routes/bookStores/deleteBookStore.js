const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/stores', (req, res) => {
    const id = req.query.id
    res.send(db.remove('stores', id))
})

module.exports = app