const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

dotenv.config() // load environment variables

const todoRoutes = require('./routes/todos')

const app = express()

app.use(express.json()) // parse JSON data
app.use(cors()) // enable cross-origin resource sharing
app.use(morgan('dev')) // log requests
app.use('/', todoRoutes)

const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`Serving on port ${port}`)
  })
})
