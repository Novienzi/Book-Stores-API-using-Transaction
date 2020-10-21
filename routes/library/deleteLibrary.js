const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/library', (req, res) => {
    const id = req.query.id
    res.send(db.remove('library', id))
})

module.exports = app