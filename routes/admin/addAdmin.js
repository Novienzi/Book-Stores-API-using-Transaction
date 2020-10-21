const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/admin', (req, res) => {
    const users = db.add('admin', req.body)
    if (users) {
        res.send(users)
    } else {
        res.status(404).send('not found')
    }
})

module.exports = app