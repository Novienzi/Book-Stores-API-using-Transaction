const express = require('express')
const app = express.Router()
const db = require('../../../controller/dbController')

app.delete('/users', (req, res) => {
    const id = req.query.id
    res.send(db.remove('users', id))
})

module.exports = app