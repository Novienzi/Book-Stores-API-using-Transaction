const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/admin', (req, res) => {
    const id = req.query.id
    res.send(db.remove('admin', id))
})

module.exports = app