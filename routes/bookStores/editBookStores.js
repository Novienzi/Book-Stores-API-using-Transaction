const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.patch('/stores', (req, res) => {
    const body = req.body
    const id = req.query.id
    const result = db.edit('bookStores', id, body)
    if (result) {
        res.send(result)
    }
    else {
        res.status(404).send('Not Found')
    }
})


module.exports = app