require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT | 3000
const userRoute = require('./src/routes/users')
const photoRoute = require('./src/routes/photos')
const authRoute = require('./src/routes/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoute)
app.use('/photos', photoRoute)
app.use('/auth', authRoute)

app.listen(port, () => console.log('Listened on port ' + port))