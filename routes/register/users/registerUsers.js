const express = require('express')
const app = express.Router()
const db = require('../../../controller/dbController')

app.post('/register/users', (req, res) => {
    const body = req.body
    const result = db.add('users', body)
    if (!result) {
        res.status(400).send('Wrong body')
    } else {
        res.send(result)
    }
    console.log(result);
    return
})


module.exports = app