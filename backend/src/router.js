const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  res.redirect('/todos')
})

router.get('/todos', require('./routes/todosRoute'))

module.exports = router