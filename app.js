require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT | 3000
const userRoute = require('./src/routes/users')
const photoRoute = require('./src/routes/photos')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoute)
app.use('/photos', photoRoute)

app.listen(port, () => console.log('Listened on port ' + port))