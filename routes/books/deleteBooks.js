const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/books', (req, res) => {
    const id = req.query.id
    res.send(db.remove('books', id))
})

module.exports = app