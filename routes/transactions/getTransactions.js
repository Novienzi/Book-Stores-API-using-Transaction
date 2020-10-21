const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../../middleware/authenticationMiddleware')

app.use(authentication)

app.get('/transactions', (req, res) => {
    const result = db.get('transactions', req.query)
    if (result) {
        res.send(result)
    } else {
        res.status(401).send("unauthorized")
    }

})


module.exports = app