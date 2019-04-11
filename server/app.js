require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const jokeRoutes = require('./routes/joke')
const port = 3000

mongoose.connect('mongodb://localhost:27017/classic_fox_live_code_1', { useNewUrlParser: true })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', userRoutes)
app.use('/', jokeRoutes)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})