require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const Ctrl = require('./Controllers/Ctrl')
const AuthCtrl = require('./Controllers/AuthCtrl')

const{ PORT } = process.env

app.use(express.json())

// AUTHENTICATION
app.post('/api/register', AuthCtrl.register)
app.post('/api/login', AuthCtrl.login)

app.post('/api/saveCatch', Ctrl.saveCatch)

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))