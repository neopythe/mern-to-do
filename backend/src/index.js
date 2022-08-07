const express = require('express')
const dotenv = require('dotenv') // load environment variables from .env file
const cors = require('cors') // enable cross-origin resource sharing
const morgan = require('morgan') // log requests - improved debugging logic
const mongoose = require('mongoose')

dotenv.config()

const todoRoutes = require('./routes/todos')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use('/', todoRoutes)

const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`Serving on port ${port}`)
  })
})
