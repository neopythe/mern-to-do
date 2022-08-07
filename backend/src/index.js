const express = require('express')
const dotenv = require('dotenv') // load environment variables from .env file
const cors = require('cors') // enable cross-origin resource sharing
const morgan = require('morgan') // log requests = improved debugging logic

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.redirect('/todos')
})

app.get('/todos', function (req, res) {
  res.send('todos')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Serving on port ${port}`)
})
