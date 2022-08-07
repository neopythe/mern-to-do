const express = require('express')
const dotenv = require('dotenv') // load environment variables from .env file
const cors = require('cors') // enable cross-origin resource sharing
const morgan = require('morgan') // log requests - improved debugging logic

const router = require('./router')

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(router)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Serving on port ${port}`)
})
